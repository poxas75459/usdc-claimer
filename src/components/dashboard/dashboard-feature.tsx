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
    "2DDDEk61SHCM1Vb7M3q9amr4nu79ySC9VyKMkGP4KBbFP4i6WDVtMJ5mXUeQqwzUUA9iVGKr6qE2P5D1UCunbYeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qrSAYe2VGFm9g68VT9e57FANn3EsgkpCXQJRZkrxaravDE65GQu5wEgE12QXvgPFh5egksf3PCexsvXQgDPwZhi",
  "key1": "4Jq1EVxViBt9YnvAS4JmdRmSstqpwKJrcLz3Ff5yqF8XKsdCL6ys1sTi2KmPNFo6wjM2KBTw5WMaYBCDqbbTSMA7",
  "key2": "42Z4BgQR3qENaHeSdjf4TCih7mi5bVWcSA1u7tHXudx6JmgDJBbqMyCV3dgrzHXvwEwnJfWMV1GboJjCiaYimHMd",
  "key3": "5aSrofu7rfHyHrbJMPPVtnFEb3pR9xueBQ7TPzcWx2LV6PTaDBZEud1vb9wvWya3Ge5v58qiUoULN458JSYoDuuw",
  "key4": "2VsLB2LWQFzHiGEYwSF3bPF4RxgPeRGPeRcVArddyTBMK5XHQD1gVWah6DpjS8LtRWhEhjFz3HxvjS3wmMmadRWa",
  "key5": "362HQDaVS9ookPoEyddurwCQsrzNBQiQoqZQEPrbeyfqJ6fvA8tNCo291qyHjEjTYKNPiDDTudxcNSttbDjDdD7x",
  "key6": "2U7yjfL1JA3cvvnfYjt2V3gHCRQTV7fHse1aSrANpRgTkwjttPxADo8ncGRYFF15GxAWzp3ZfomeUMzfBQHguy7b",
  "key7": "5ttMLssxFV97SqdynNsPkBRUXHtyoPKtuZRMLpFpJupMnpAtPkqr6jqj2Vf9MMWwJmYrCYhH5T2KLLghjp2LvckB",
  "key8": "5CRgdDSAMuTjnY4pDfsFmDku7o8rhsaZ23aod7qk9oUgzeaoUXqTLcBrLAq9qEfEScPsQBhNTxAfhcmPMBiExDeJ",
  "key9": "ws3XiCP3NqK7rEg1du4cbKq1L39N1GKhKt3AqkeP853JCJubGfjt1omeycmSF92QFXSR5MTeMYUEGSpcEm5iZWD",
  "key10": "2UFgHkjfAMU1vQTth2sP6Lun2bxPi6HeX6MWEtMvXyKfwEA4mtmJrt8DFk4crHcf4mXYED62Re1qkMFqHWAd3XBc",
  "key11": "3kq1QruCFgQ7f187ZCTcdmNvnHACRnXwid6kGSFNnPhAG2Dsisqwaw9jjjAJJ1Q3g7WgWXD7seUXC5jzBXAkCPBC",
  "key12": "sXEhr4G21fTWZ1QmqwHCXVVMXFDqdhTeBxBiVFbwKJdtJVXuMsMQd8pUgwbF9SzUHdjbLMxT5ngocNqGob6b619",
  "key13": "1iTLUq5ipxQUHAKx9drymCGL1qqLg7cWmXfG869qjPaoiD4eoss1oKs9JDKMcszprbTSkxAsypSep1hH9NMQNKb",
  "key14": "5ppPVeyVneuvAQ4rfdubjxVH6MxAxVakUEidcHmLW4mJBsj7Z5tEN7orfWJuHPHuRU4hAky3cqK6oL7V8PtvRrUj",
  "key15": "3Jebooeh1p2EQqqf9fnDSoXJ4GiX2f5RjP3vgyqFCe5Xdh553StByvoaWwo1vMAA2LxVTFMoGQs9hKggjrPGhTtr",
  "key16": "uc9SCRuFXdQWRhgtYFCsazMuEHui1KWh739hu6rBHTREbuykwfjn2XGpYrEWhx9ui1vxdUXXFw2ku4CSmLCK1hv",
  "key17": "5rk7xcx2nTQ829ww3k4QwQPTk1aa6rrs1x3qMeZj7rTYACX8V6pdJa5a32GV64KeBJR6t7FZWt5HryhipkGE2vtP",
  "key18": "3wxgprgXXh4FBemQAN27MofWoQ9rEmvMKgi7rrS4x6o6f4D6nGAFuixZYLgMfE9gWtTNY3jZVnbVCSTUdwzQPw7K",
  "key19": "4wE9rfoJ9xXLZf6RwWAwWtSPQ7RWzBBD4A5QUWuNdEydbH8hiEBv3ZZ5fdW4WcHb7nNPpSRatjBVTBDjfUCoiwPr",
  "key20": "rCfitHVxbEsEyTnFW72cRHZSFhbGK2DCj4M6gUh5JrY5ryL52E25wuvC1H1vpw14fMeXKvSc9WiM95rUXkDsyLt",
  "key21": "4yXLdpDU23erw9RvzQBay4gTsnLaPCQ9gK3YXTpDaw2bWRgrgW7N2vVx3vRbU98DbVhoboAe8v4gL4rfarXck9KF",
  "key22": "23EGvLQZdYiGuZSfCVJa2rk4jVKcVS35HjnqyBzod56W5JZ5ZPzCy14pnG5Z8s2Bie911HdTniVajBvY9nkUsrvU",
  "key23": "4CeCeGxtzewdwx6QAdnv6R73PcE1xfmBzbWbiSEcCxNEkbdrXrgMAVxxqjyumEzKWyBCtkGqmcpCPz9iJYHxzDse",
  "key24": "E82vwvX1qvqzfHpVs9z8MctjUuMq6eKqkZgcUGt9nUXuMdc8REQD66ntmyaHL8ZUqUcDjt1AbMDvAnRbFLvr2nA",
  "key25": "3foiPDnSGETgRkAX4MUEQP4xy4kk1GYviShLDisAJxKAVNyn4V32XefDVK7xURxfnGo6EqNkQfQMmnABPjg96buY",
  "key26": "5SzBHPxfxeYucGgeHYEJyyoEg3rD2msehYniWAnoprqW16A6aCmr6ktLUdMgtbxrrC2XLU7xj5EpAfYsC8nUvcw2",
  "key27": "3GpsvnK3gEdbSpzpMjtFuQm2gpn68VXF1AdXMskwxm7vLy42DHWA4bD78Jwa34yJntCZ6RRW5qYFZASMA3V9V5m2"
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
