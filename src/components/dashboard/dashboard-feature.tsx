/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4tKqmGADhspHZMRdTBCGZ47rVbJDB5dmAjrqFCCgu1nZsAiLh3qK3yRUi2Y7Swxvu1kDtuhDxXvB17txJqTPBAhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BehZZMKoRjXqMkyXyD9ZWeiFHzbRxjRsHwoea1RcF4gapcdyRJzkKQjWXtCqf2vSm2GJVfrroAnx1b7ckWwHfjS",
  "key1": "3zezTXSBkJiK7NTBSM6dwy8Kgvdg1SjzqZygP1u9px4sQTeaU1mNSUXs4wEQmDKwh45pj9rNH895PiUs78PM1EPN",
  "key2": "1j52wt1frseChFzpBn9UhPqTdwqbZr5uGjjnQ4JsqpZf9vBed2RUHJQ4RHNCquaYKSqaTLnCcJddGzSXVZJQgjK",
  "key3": "4odXaWxqZAFgYujkvUJRHQ6ZKfH3St8FDqXHxJKpuLTgguMEWQDCXmQUaaWSvTRdpEG9bRW4S7wB5Tb7nBduB1NL",
  "key4": "3zP8rgiRhDQt2v2MeHozaibhaFr6kPM8VaMmmvNP22ZP5QeEW36VcscNq67qSJsopytbSKhkAKG34y6sbv2jsBsE",
  "key5": "2oWpWL1ns3Y69VFmC3cViVhh5FUpWMKn9LoKrYV4qCHusLRLkVCwXRyC5xk4Ft8vXXuCV6a6zTBNd1rTC3pf6w9R",
  "key6": "2GboGjg25F8AjbGUDS94fGyZv2AC7vhXdfsmcfYdbSvtd4XEtL4xo3e2GXXv7qXnXmsHyEk7Fx8CA89B7vvZq9UP",
  "key7": "2q5f6dFgaPcMLZ6YfLks5axPvpgn4nBehm6xA3SLsbnf6dWY7MPsjCs3gVFAr9RhRBsVnDAKZMNuCEmDNLXS9JA",
  "key8": "5TzmCZU9VLWoYGNFskrVDX6zTYe9ooNk6R6TVeocJ1AgvzNY4kyxvXBpFD1FCE3bTu6a1eUDg96QAQparWyE57T8",
  "key9": "2ic6WRE1UqwfzzDJa1mMiv5v5zLYSWEKaKMWdLfqBzFFsUpYz4ncar7Bo5qH7e7SvS18yQAGpkpoqjQpbkXE77Um",
  "key10": "2jZ85PFDXLs5sFAd5dRzBczmFgKnVhScvui7hevwZW3A8Qxy2NXf9kH3YACAzwZrcm3nyCVc9egdB2YxrWXt6Jim",
  "key11": "5UXWcSqU1Dae9BxNQAWsTPg4LGSPApiaJHRNzzP5XYnkDE8xScRZbLAsEHDdeyJBR748jEru3hP4SFfkTNwPgZHh",
  "key12": "3wm2aMeVjNAWfwSq9cpR4MyTKfLsXUJdmY3yXSuK11nEbohDvs85H7inAtyndDRE3bsk2U9vVEZhjPYrnttR4J8g",
  "key13": "2UCiEhgxTEMu2ZsNFBYJ15AxhV5nCWJjDEAsnLuxkXhwYc1cjVRYpR5CsME7GkYveCFGo7P477DVvyu2dSNcFMkF",
  "key14": "SuXrzVZZAb2o1Fq2rRgs2DAPXLgbgRPdZCdebpGH1YLqZzf2ixgQ8y73E2SApMhgFdHUh1MAS6Kx6UATFMPhKQz",
  "key15": "4jJF4J7pM4VEynRQ4d7uvPJvVwYWvS935Ack58VNKLE16MT9dx6U2qNLjvE3qktcgiJvX4eEdCwo1qejYfrP6Srs",
  "key16": "4HFeNcJkNnuz3sGsM7kwsWH6vcUyCDEDwKbsgnvj6xKNAf4wQvDCotCenTCDDGqg8hxyVrpuKWuadQuaX7RTcNNs",
  "key17": "35GBVrKyyNinzK6XyLWXWsSNzS5qwEj1UXUmTBRFVqHgbeMH4voVuzhj7Lw7XEkCR8sNEtE1ddsQ517SGiTShmzb",
  "key18": "5BVAGV2EU1SqcHnEGwscMuaiKaWVTWzh8EPvgid7RVCqZ8mrsS3hbUT4y6gj2KjmvDheTXVi3cuNgD71hzxgoviF",
  "key19": "3vTVRic7eNky3gdrB1tzXLHjEcXMtakseuRQgZgBUKuz4wEUM2R8NwjBxPx3BHeVWsGZ2pjhExio1444KTr7itSa",
  "key20": "5thmqTWdJGBRyc4kQowVYQzaMpdzwXKxzFzzftUncdWERuV6xJrjTEwd6hw7pZdWNbo1Hi7615rZvTZfbMkaJVGX",
  "key21": "3HhF8k4uoj8zjxwTxhY3J6yTP6Q77xTLztPkfSsoLDmA5mW6nWeqVxUhWUoCmrm1gbk8P1Y9mNV79KLSzECo34RL",
  "key22": "28CSGcwTcUnV6SzMJrd5JPgkyZqFCHUxPoAUzwYZxe1wF1uwbLEwpPJPV8Cq8Utc2o6N9TBBri7uFDryKWXX5dfb",
  "key23": "5TyJ6bftaDYGsiZAB5bvxfXhSZdLnRkp2nTa52YUFuU6uamggVL5bWZEfk6suSkD97uoeaKUjhM68Y2FraA3EKMn",
  "key24": "1S5zux55UpSZjkdAqGBruWVzpPde3JrjWQdEE7EsF1cciMkTZbPfFf4japCfeZDnFV5xgKYneFHpDpkTLZZ9zqZ",
  "key25": "2KduTynGrN4DcNCaQLZC1hQ17SkSTYLePM16bj7CCuNCUWRbhEpGBo17cuj27vwP4rCfDgBshBs6wrWsgDWiX3u7",
  "key26": "5hbSisoDnAdn76ZkFBdYpz4zuhWnu5PtHCxrEGSWfbEXXRCvUzzoJqnw5YYt48P15PnWApCPgwyYiKcMJBV5um8x",
  "key27": "5g26gFX7j5cRAXkYDgbbmG6NsepTRhbvtBtuWAKcXeJLefBkysTGfQjx2JPScExiAwdXKyZ8CE12fyueB9tHafY",
  "key28": "4p2fv473SPM3R51T5sHqekmpJzkYusuwM9gMBQCW3vw7gU6fon2jKZ9p9VWCTMfa1eUgPZFt6N3rdSDTNd4LmjDJ",
  "key29": "5hBsLLJP4SWtFeXcy8QV1PxQ6W46fAANG3BTo3jQTzftkat7YDKaDd8xBSmKYzm97oyL6t3m5kSFrHhr37YNeegR",
  "key30": "kYK7toZCTpR6Za3AhzpbXb8xzgQPAdbQrLFzstNw8N3WUNZPv7U7YDv88jyzyvLnq1M3zMzEgMfAnJh7DqfsgcL",
  "key31": "3EMPmRd1XhFjVmcoANcUkb4YDnTytihNvgfGyUPKYANW3t7yUbT1oj54F4HUD43Hy7yTjTgLWEssGLdmq4eK6deD",
  "key32": "2bCMbjXXfMEGuHMzB7CwjWdHKfQiZeiggeyxZmd8A6GSQjC6CyAeoGp3TVpF5ev7g3hZVzkVaUifjdRVZdrN2rMq",
  "key33": "2FFrfveo7gBe95gXcfHpt7x5vnW7HsP422yYhYhCCtkvSLn1AMJerf3ScXCyCb92TgDfXho9T6k1qbyjJRWLY2re",
  "key34": "3QWYnaRs2MWWibNo7wn5RWX3S7LBnw3czLwTAg9ny4AgcysbrxAPZWyyKyVCBHWvkNrD2tSpVpVJzWbhVwuKxJvC",
  "key35": "22xPu4LoorufL2idWqR75G4GeSdc1VJbaBk1kCxZgWRuNS6CaEFDaNSn7MhRGKfqVm4jkW7YreyY3A9wj4B58hY3",
  "key36": "2J2VDqiHkLVnmn1MzycVPvsZwR9vFpAht6a8FnAzG42YQbFtoxsq6q2Kwpn8DmLgpq3RDHiekf1rQ5F894S66dur",
  "key37": "5AVBfJCoLYu5Y9WEUST1vtGm6NpM4UUiD9Sq5nw8VRZng598UZxs3QGGYkZuJRVYLfeKrhACHWkeRGwCaK8WbsuC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
