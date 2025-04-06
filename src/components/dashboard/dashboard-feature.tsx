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
    "65XhHHvWPQx4ENXT9SnARkE7MfiHfVR26v97Ych3PxZEJZEQBcsqpRqUiEFatuseL4o123fSNAezRQyD62ptwe7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkoB1DSBzmrqv25GJcmEbwVTXVwMKoSsUwk7VNmEsmhUVs8eGpAv8mXwnujvm2XWbgLgJnRv9ajFRVm43Tt9yCf",
  "key1": "5ocEvFiZ21aXkQwAERxY9dRokUyDPaSyMrVQ4xHMTZtw6RQJGiXrbi88tT3AqKonaXDrWkpwvfzAdqUyYC4En6De",
  "key2": "TcZrGsaQiJRHd5EhYSi2xvNC4eDzQ6sexGQX2mWcAtqnzFDhUwyPjDUhRBVM2CsYABWArCZZZTWP5k6AKfZ8xe9",
  "key3": "2zk7zmFjX8ShXCobFTcmY4oFgSTcmn6s5yvRGQv7MXVa7crD2GVqRLP2YUc7i25x7XLV9PfWRtbUswfD48SKPdxQ",
  "key4": "5RqvYfxvZgY24iuKMrMuMAVgCmKpoeNLtYDfJxZ51Pzt8nkKnikC4dhALmoAaygtVzV8MysM5Vgte98EQR19SZrY",
  "key5": "2ugLTgB8hnUcXMt8LpFnWE3sWRUDbzTLBTYjipwmSUs594Z2crK3uwwEWxLZ6Eafuajnvcy8hfsGXhdjCsFLxRG6",
  "key6": "4Yin5wLsKzDSuZMCNZBmvWiaauXJDqVga5bGSsBTJ6qMqHoKqtWerNsvMsJ4n5xByfT4QHK47KbDZqrDAXcdMoPw",
  "key7": "D63N9UZ8ekjJR2XRjyZagnrDpB646giRchhScUj2ApFz8TV7v5NnpPwgdV3xsQhPrcu7veYvuhNRCexmsy9Mkdt",
  "key8": "5dHsvJQ2FcxdnzpyomecgNcwKE1QjkSGtuhkYyrasiz1tMstsZBuGQbE5EuXFL4a5SqVKxKg65KWS4jxYdL4Jp88",
  "key9": "65vgE22nygNdCdh3JwCHT5M6Qo4f8cYbtoppHG1khiiUgqnmiZuwXrTaa95ErQuW1Eb44e6kVYLLXEaH1VLerbWE",
  "key10": "ZcZfzrCBQRqhMX27AHiiprCN97HhpJjsgwcxnCLQ6mW4kGTf8wTk5DfADkTewmEQwzp7cTeXKGipM3PDcG5H7Dq",
  "key11": "JSz5LzCXdpcc8rsGv4E7FFe8jZouDTb8WvweZuBLSTz95S1iZF1ptqX192jCCbpSsrmqBCz4WxRCefv2QYyM5nm",
  "key12": "2nhvDBvarCqjyJP5Y4XURCc3GxjMhJtLKHsCRHopCWg2Q8PAWLrgofXwpcbLF9i9k4Vo4cwejicf6UDLvUdWuMc1",
  "key13": "5FbwZUJzKL7Cz9eKLpwYNzrKqoKw47SWcX2mtnejn7LW1wBoUzKHB8N8fWyuuJtVEZEChUWAuek8Dw5zV8fQeaJM",
  "key14": "3zLURpSYTRxtS49ue4DSwBfTtZ3fCT8yd196gShTaWGNTzjuiNQ8vBtjpp3XZbMwmUJhf8YjCrRuTCKXZLnQpsWf",
  "key15": "5gEz3a7ZzzHdaA2Gf9ULbfZyzMTTxMjwFZzhtku5Mku1JzkzxbuD2s4Pr9ADFu31JUyaEgaLBZXBUjto4ZQNYktw",
  "key16": "59bAiNmDBrwgicEWW5FKWB8GkQ9mu92QRobppj67DK4ExRYKXa4fyDkZL7QsyTEAF45z5TbeiXVf1HCgNKuK3Kp1",
  "key17": "4bHCUbMdSv19o8sTgSBAgsFkLCZApqrdDe82YZ5ZeqsMbTDhfB6PRzdv8v3RueMiqqQbAv8ge3396LxSZxjzjcN9",
  "key18": "4cBrhRVF2v56LKAPVTWxpw4cBnwCuPcpFDxXgaqm7sQbwenmZyNmUyV43tE2WDLfabsekbMgywKMomHAwY8z5yhq",
  "key19": "4S9zRhMuJ4kiEMaNUgAtuzyNR8cgecaz4Z8Lk7hbasYNWA6BWXag3s1iyzDLQn6TCyNcLM7MTgzNaScL7KR6fKAj",
  "key20": "vh4sBMehjmhz6Sp67UoTiHHsTu9jEi7QPEZMXQ9QScpc72hpG15sogV2hf737ptCka7wqd5WxcncXNGBrxPauCm",
  "key21": "31wNYKLjvM8NRYK4c8Gm5ptVDkSakvyQtoymxdjTTjgRC2YoT83ZH6yHtMiRDnXLtrhakCDH7yAeQu6tCwxPHKqo",
  "key22": "Eqm9SPPv45haH4e26Gr5FgiJJ7XHiUtuGbs2NUjHbtEzvMJhQp7HDyFrMtGGATDFNE6TFtcMke75aAWjDMAfN2x",
  "key23": "2btow1E1KvjuuebSnfEs9BdEJ9TMqB6UfbH92AaCmWqk6U61kxLuxESqwWkmK84kvichort82JzQ2uuf7CKvdv4h",
  "key24": "3NPSXJsgHJbmsHQmG34EigXoSnswqnx6ioMyKp36qJ4wZtHMFUc24SxmSNeBwXM6ea1MaP2LEyihzufdyBihJuvW",
  "key25": "3wgbfqPPXdJ8DGxkC7LAZX4Gf144kebaLpMh8cQbVrJhWZ97M2p5GQjnAHCQQWtbd4J87Aj3SSsbuyhehjEAJQDW",
  "key26": "22kbiHfVhd6KeFvfV98BwDnLcNH2Lb5phmpXbuwAegCdBrkxZcP8VsFUwaN4tQcKmkp4y81LGCeuTSpxfuAAsiT2",
  "key27": "3V2kCwTY6kGXLG14MRBDeUeg3toYUd9kbTZS571QQNZH45RmB5N3iVSL4UhmiHE385m6VxPgUfZAk4E6X27QDJ5C"
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
