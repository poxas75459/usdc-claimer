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
    "2jTWfCgbUQouCKiJEyQfLAysxP9CMzzAtLiDpC1c3mnvTFqKXRgaAC12MfoFFvjGvcEESS93e5JFUycuSyDXYJQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMxHSbgLt9bEQPBTK71ZcADpX9E6UipJ1UDy7T9X8nigw8jUqd2BgBgHuTbjmrxNGggXJ5PtDjKQx4H2cnNjiKV",
  "key1": "291dZi5ZR3cu3j9cLC95GPciNcrQAjb1LAGnweUbKqTdanwuUQJ4W6kcboi11EvyrEaYXnLk4H82T6cMYLH6zKvD",
  "key2": "5KYppxtHaPHJphZ9SLKwKm5mnot3D241NeHtk8kEUJGDB675evvzz9UeihoSeqZdLcn8qDd1iF85gju9YmsyfLng",
  "key3": "5FHS9zG1BAcWow7YAiHa4mnEZ251ZVExLZMowb5Vn2gCqKFAAWE5tywwoKqTq85bBWDCTiKyfd1evYaRR15rVkKg",
  "key4": "2tX16fK6qe197k573NqBZssqk4byXgZ1ACzeXiSAZJHR88vHz8thodzbpoFwnoD2XWLPJSmYiymVGGrnkhwc6SRD",
  "key5": "3zcvHbZPFy4yCbLAuxvt1YstSMK9vg2jyHCHD25hKjLse2m899pca7ZmRB8rq65XjmicP7msVHeSFJiRgecGeJEu",
  "key6": "2W1eK4MTymqjs4v4WJUrhFgzF83jhLbjbU24C7DWADrvewqF89z5hhD8FvGdbgdFQVwyzUG53sZ5kPQpWfiMsXt5",
  "key7": "4N7aCAtPTxMzfmPURuehy1MNJz4KsuqZngXmMMNx6k2exEzrKGj7JvbH8RM9f2iBvneAYbL7jpBUjDPtGKXxKJ7g",
  "key8": "2sib5FJty1NDYgeKoVUzjzdeSY3vZMMmAth3m31Zb3GSAFK2gAConu8YnqwXoqaemXCak2MCvDkPfCHgKmcAiZNT",
  "key9": "3n31eUaoWVATW8KokgFPvhMGcCKq6Kt4nwxGa4smDGFAGxyeDg5dsL1MfzhmcwnYZhRZ628KMGZ9XN8YNakN3bVu",
  "key10": "2Z8FhYAzYHcYkYvg1kfLCtN7ubkLQoHxcUzhtbR8mjNaMWdWucF4WMx1KwA4oraz6uATnvvVh4JwDf2f1nVpJ5k2",
  "key11": "4qdZwKy9WNimN1Zj6tQcG1x33Zy2V56ndwGdd8jGuiSTGPqq5o19oyTW6Eug7ivkXZubsKRwkKcp7hBExeqnrg2Y",
  "key12": "46327qfZw5XtzW3c8VDnnvc2tkVkNvernKqz3XghSDbQXGSy6xDmQGLUFNXVK8Nxv7WS8Wz2CeN8L9K6zmMv29V7",
  "key13": "dnK4azb6y2QAwTEE9xjonNDobtf4Ffe3dyVzf6ykJqb3DNKVwTJttDsWyNwspsCZmBaxYvympEiscU3sqEKxwv4",
  "key14": "4SABWAJcxxPgmHWHuTiG6kBpSGbsQ53EPrumfqoMuDdjHgjVUX2P7bLA2HvMzTqiSFDPW6KUVb6YYL4X7RacMeCR",
  "key15": "2Hc8dzGS1bdRoV9UYERrLjZDnZohoDS7Fn9YAyd9p3Sqz9oVqc5YDWM6axAPqFJbJzvyoFSNKsMTRY7pJ8UFQYzL",
  "key16": "jKS7ejjbgVCJ29HYNdmfEBdn1CjsvgzTmwX28jgKZoaKrYXNApjpVbiAs9NPcJxriLACVNN8BEiWJX3TxqwBzbs",
  "key17": "L2B3CgUDqfR8tP6gHqgXNunuVKq2Gby3uvtmw2yjJqJjfWbxNz8rf49Vh1oJRFnkMKPQs2JwMvU1JARHUwokUot",
  "key18": "3PLAZ137tvQesercgEYe5GqPonH6AGNu72HihJdHN9F8jytNQLWphqGnJKNsQSkZ9eEk2gGMuZFwfhU1UaYG2qtV",
  "key19": "HttivSsmrdzY3JVpWuCqRkNtjT2i1P2S2guxNgZrjjnCXPtarkThQsC22AGoshkp7Mknz4fPoarDyvDBegKHMYE",
  "key20": "4DkqKqn29i42UufwtqGA2YsL9Aj1Eu1VCtveWmhXZEDKoCQASJUbfFgxJrfZDnuu2BMBaxApGbgrRNeWyhXN4pY6",
  "key21": "31jPLcZtGDAtr96byCkhxKESPQg4HbdC8ocZNpng8oaBU1SWmWEgQ8ZAwGqqDn9iA2hH2Ft7feLjUFuZqxf1zuAc",
  "key22": "22BR1CLdnptnuPFf8Tsd8TCYeG1khqTpqM5PYoMbWAhdtXqFVJHtUZR3poYH2FFtXeZo3WrA5XLFgNtwskxWHjZR",
  "key23": "2ZxAwwYxzKxkWAHQ2m78KvV2WE8woT9J9bWyPKFEhEVgyEtHvuCBKd6ibuNLRFQTyrZvywGGZXcrPYNMntCKr6sa",
  "key24": "3uyUyi46cBMF73t3eF3mvLCUjFfCb3atvPPi26daDZFoDuJS4mHooZncnShQXBgQh49J2kPGhVgYe7XsZXXMfzEi",
  "key25": "4yEzzbZ44d6ng3bjzryhNBtbdzXgqVRKzrS6utKEzWyEFyQBSTvzNnQF6n8qDQ6eE2do8ApGEHNxSDbbGCY2Poxk",
  "key26": "2oaEFBSSmXc9FrzUAsA27fKtBhe1a7qqtmGJm5iMzMJufShzYx8JHgmLJ71Vm9z8kqbob4ccba9TE2aoz9X3Hpgm",
  "key27": "63GZZyvXGE9RW5qBiPsQT4EyXK4fG3xoovrNj3HCsXrWBewaRd5EfogyDzKCkWiguD4wBT7YvgMTMZ5kPi5wLUL9",
  "key28": "3tJiLkfq7c9LunYerJeC1KBXHaEGUGMfQSfA4bTW3qjfSBMqZqFHEWKXHZgg25gBXws2PS6GRrvbau43CeMGJrJC",
  "key29": "44Qu5uSg8obdGunuh7MgoTeX6FLajoEER8y1ZAkST6ELmWGniF4LTYN2NwbUEo47fjL1p5mEEbxiwM1gYARGbzw8",
  "key30": "5meN2VicxMNdf4it3LNJdiznR4eA9G5KdYjcbu53oyKNBdciRKfad5KZ4G2XAHDs2ZJwzJhMhq3vPDMNg5tZcabU",
  "key31": "3pa2qxoRj2QV8Dto4myL35FfmGuVZee1EypUCkYDPspnSPETdHo2XXWiuSQaRHE98VJSdEpsnz6UzHqkPyAuBdPX",
  "key32": "3bKx7aoenS7MKimpmDTA9wJ7kz7fpXa9gLi9ARMuoM1EavcBBEMKMjv8FurBaFucxsF1zEFnpE1t314NhxL2dk6k",
  "key33": "624FUdgUEULxeh3pgqt2RiLcNHzBiSNr8rQ3QWyCcWTueNR6updjZsd39ZDrcthw6RNEFNV4Lg9kuGShLNmCW32m",
  "key34": "25p7jsFAJd9bE18ZFAR1aicfrjbiBoigKFhGsXD63wwEvj8G5GL8FJJzAgtz1yHtMzfLTAZTvGeNdt5ztx7deqjX",
  "key35": "mC5k6BCWE4gNV2Fsx6GBREQ9pZyeyUrRq7gdsVbJMC9AB3BAMDsDmShgGVCE5DNk6S1ZVjQBos96jngjthxUaLW"
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
