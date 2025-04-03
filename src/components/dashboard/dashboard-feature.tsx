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
    "2SPynM1jxBycSWxVqRYxXVJSaQhBPcufPnCuEaSPrmXyoUqWbjjgYmuiCUeG6iAAVNAMwMBAXhdbuotRKzAwz38A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nh8BtGCpvhAQKKCruhJoSVFPm635Um4uzsxjrPYeCioSQo6Z5zgXtbbc7fqLQbEJGHrbaRFghEqrE9cU5MZZjoW",
  "key1": "47rDnf4y2vApqpYCC3CMDBVckAywg6dHnTnp3JK5LPNq628mCXrXQ21vBJifBMxzY2K6kjJWemHCpobvbmWU6xMK",
  "key2": "4xbFsCmUZHU2NpSZSrEM2ZEjJzhvDx32UZ9hMyDkoQH3GsrMv4V66mNXNt8Xk5qXoBqX7cwcd6UqttE2Yh9YYQLS",
  "key3": "2CCe48G3S4XTt2kYxyTmXwPiTLqbERtXmzbu3VXXpKvWPRLj5D3nbbeRU7LFKezUe4CTSLGfyS7DvA4rfed1h6wo",
  "key4": "4N4BVhyiW3nwpHZuAdwZAoViQJCpi8phoTo8W2uaydQqsmSnExfKX6TCuzKWgLTSjqSKBi4Z5rVgWL3ccT5jFNnV",
  "key5": "3XaqVXuiFSifLjWczqt2BQEHUEHsgF4C8FF1CrjcFfZjXDMxkvSQeyJo4tZemk4VqJPBdPQxjkdbcMM2SGfiPBd7",
  "key6": "4cn8M1qpRnPTTPh37deTPtVdqDGnfELNJZ4Jze8hT9ic5FgzatewjcrE8PMury1gS34JmTr9JC9zCTPWzPc9pBbU",
  "key7": "32FqAgPWQvNS52TPxMVF2BR8wYbEeKh1AcUBpcTsPdV9ECSq3N4sX6SPzjehvnJHm5o8bBPrGS2T4nb7Hbb1bvc9",
  "key8": "3uGa9uAYK8fHndYXqviQSPD51pUF7mcckNBDpk1LVA568BiPGivfsqFPu66MWT5Jm9diKAnK1erixzh6c1DGmmWt",
  "key9": "4zCCqYutqudJbWQoStfi8UMGKdAf9jNeeAN98qdKMxWTLEVxtyRvQQ2tEvUJokqEQAABXG7L2h7pPhgypEWHFFxo",
  "key10": "5jYhRBtjmDibWbdBhUTGLRWsMkhfScbwdxj3Yg6U11gw9mXCKjzQaLLB5uaTEKYg9Mr2V81nNkJmNidRHzY4d4Mu",
  "key11": "55DRAt3eC3jS9agxnQdBpmfosvStv5pT747LsqAmepWTNRogvurZn6byiPPhwYSfSimHHZCWFPe3kN6zGvuEEmMh",
  "key12": "26WHSCpkNP6yAEPBk9ZacTsWewpDSJWXbvxaHDVvtrEC2YMrVrxqVmR1B7rveRHUcvZ88JWmCmhd9h6riQZAwUuD",
  "key13": "2wJeRTtaCMxXRvNTioofVQo31V5at8upbwMVqfcHdYNxULRsXKgX2BwCzs2Zz9ayBi92X133N3gEDcCtGRZukegg",
  "key14": "4wRrrhgigkLcT3SFL9uedozaTHkFEF5zyX8r16Cn5EfpiFPyc9XLWNdacSzWQCXj9cRhCpTVo3jcSvNBwXh61Fau",
  "key15": "jDw3d3kns2c9Nrqtr5KoCgMQKDtUcZm3p9d3BNwCGN17vDbiuEG5RpVsZ8NEnEyugaEkj8TyyGbiFMLPxieRSFx",
  "key16": "33BZ5vKRT9Bdq27sowKxknRvf4R6hMhXKHXKR7n1HEYruGfj7o51zeRcR9xqPPS52XECKZX6rxe1QF9Va7EbZ48o",
  "key17": "5YaAfNNdm8QqvNJjWcndthQSiuX9SL4eC3BkKHg1FLRfiEePYRuotAV4SmcP5YM86nuqgxL9umrsypQibXbzPo1S",
  "key18": "5DcYz6eKxd66VZvJp8xCka3t7epo98asUqEuY4qYmdAC4HtZ6o8pakuHgPTyJcRvqSsvSvpzFUr44AsCmKVLYdwG",
  "key19": "383X5HuUpEzLbGBPtfZ5s6fvCkMQMYUEmp8P8RZYmsTBfiY8XHoptnL9kqqve76DQE2T1va7g332QMZAC7gpZv74",
  "key20": "2o5G4kmV9pXp8bYmTdkt16cBy1FuBNobzFsm5idHuLpEcivtik3fM6VyyaDmGc2KV8txWnJneFTxu23pf4KrkDFG",
  "key21": "5h5ZoMbaddNoa4oKT3ZJ5A6YcrkjwVHs8SRsvQKivEnhv8RMGs3FhgXqfUhgKU4391kjq6QFevReennTRRZR8K7R",
  "key22": "2b9RrkWfZaghfSP8mr5ZqJiEHq3WgVrjQReHerNBs6pQZJkZuWT9Z3UrwwN5SiSFsTg9nkEjtNDKFgshta2rHCe1",
  "key23": "3k7QKE7jsq2SRNKnPK1rPWQHEsdG6y1N1PCTiKAJi53fHKx3VEKkf4SNadiBuTiaA9zUUCyg9UF32HEBBzhTLN7h",
  "key24": "3EVe6g4RqhvD4Edcwe6aLv7xoMVgQ8pjBz9zSQH9qUMkdMhPwj3XTd6W5iKrfs2DkK4yfBKcACZ1tXnhYrjUsbdV",
  "key25": "2WmMSt3EyDNtncH2kTmtvRY26eDHhL2RNvSxHQQyYCpiTLuCrsNkRcnaC8twnJg54KHGbf1ToSvqqxiBVYMBVKLc",
  "key26": "gwZrCW2ubViiZUEPj2Fm1fHLo3rVSswRwTDrmKbyoWHphemVASur9iLjyipzBCdySh2ude1D1NmuMxsv88eA9YD",
  "key27": "Yv87cCq5sqAjjR1isRRjMXasj384saRvQsAEeudErpuSsjSu9bt9kZCPVzWxsg2RwPRXqhctRpE55JCt5n9x3y4",
  "key28": "3T3U8NTcaCWGWW29aGc4U24EYQauuTMgqN2n6jnr5Yrnu1gq4AGmxJ8W9a1tdEQkmAdLF2kGArZHmncDkE9rRvjc",
  "key29": "4qF1UnVBaoa6Hb2D2hNkYwSHRPuq35TANxfeRjfBJh6i49onokmLjm2Zov1YPc5AkJjjHtaYL5FzGcnY2VTxDnFu",
  "key30": "5y5h6K1ovB8MWsSDq96G9CQ6TbDj1S57jExAp7mx4acJom91ouy3qCL1PQcK4U4yDLBQvcBCjKco7tDzMKhM3UPg",
  "key31": "5UCe1muhkHycM2JhgFUFZmJuxpSidKgPM1ZLAwvqU9eNczNPVFtNnm33mRCbozDbXNnSrhGCBShZH1dvzf4Kk5V6",
  "key32": "2CkeZ6YDJDATGDGi8JUPGBCK653LFX6nhPMW1sqwmLMGWWyW4rr5Y3yiGfBMpzBUr86qZJXeUPdkUYJCLA5XfFDT",
  "key33": "36zoS7cqisjf1RNF6L98yAw7TF8rmzjKzdhAEUR37GjsGYAa8rw1Ukkpg9gxVx5dApunE1qbckD7YVbLGXviEvSR",
  "key34": "5d5fwXE4pMbrXdUS1fz6kY5VqnbVtAHd71EYWWUyphpkypwtyosY4WvzRTzD5e5BHdfh16aXsSTGrAk1rtkGagwp",
  "key35": "7CepuAEoKLTEWNypcV3bnFSK4T9K7V9jKnoGBdKLTRZJ6mY6qTzn6NNfoqYePRBHq6MdY38Yyj6ToJUBHiPmE3U",
  "key36": "5uMdahZmsjiBciqE1t8ovmheLwQBdTzzmKiBdJ9eH8MnemaoyJinmT54mJ3Y1TMymMNhQBJLVG1wHttgedKH8Zis",
  "key37": "5boemaFUL66HziaHEDv18KkPwVwAPvyCozjt3iMVSv2sdCJKLLK8ZKM3nnSk2rD2mf2bukERtPBZLb3D9Nqu3you",
  "key38": "nTv3LiR5NtC9Fn1aswcPfMCCRctK39bjFamvXzKSGsDTWXKGV7nW25jKsi2SkbVviUCZZvvs7EMPyKMcuHws5kn",
  "key39": "58NsHnjTGkmffVKsvwgRtj5KbeaD3RFpdAGAvQF15fZ8n3Aw5nxjyzKAkUJVi67e2JeseMJnymcfKzERxDW3iYck"
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
