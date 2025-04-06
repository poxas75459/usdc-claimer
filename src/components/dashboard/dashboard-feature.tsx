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
    "3m7Tc6DeNkzv7BAjTFbUC2ezjsmGRuMi3A2QHZndbcLrkg2PpFy5JRBVr4aEDGTVZ9q72aaZMBF6PbsGZr4hHmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KxhdJ5fxiDNqxfmbV3QbxrJwFftuXEvUcD83vuqmhb1y71Jn9orhjdLPvtarigz6KNzn7wjRSDsk6zGcP11MJc6",
  "key1": "5ZqnHa4aqAuTbyNuwaMpjMqc4ZFsMBX9iCt7BxJ1yzrY6JcVuh5ThNwnWmGi79Ho48o1FM9VRwro6DnYoPMngffx",
  "key2": "k1YzwgRNqpJBXJ1h11XZerAaXP6XDDwzaiWof8Yovvam1LMcz79vVu8VijaCzF3XgnPL3K2A4dmpBZbEUyDmVNF",
  "key3": "5isJYjjMwHjmrkNz3k165AXPWUMKozNJF3dhtyRRSMdRpfg9Rt4mGywRwFy5mTH2U5N3148CMsWB5vaKLY4pUDTa",
  "key4": "vuM1Wi5gStVSD7boYrjzjwGhggJZ31naQ3Hw5zfkZDM315NcidQcegPktYFiZa68iBuB9Bhbgfppuf48Lj76vZX",
  "key5": "2dWaBY9rY3D3YusRsJSMazZd5meq6Q5nxVXiXfAs3tDrau6HoBPa3upyGKobqerjQMjyZep3ZRXKKgqJkMaEzLoN",
  "key6": "4weqqHyDohf425dYLBCHjGrEX5UoniJefeKoUWKkQufFbwX6yZ4ddvSkYF4evFGVgzCo7bUtCViV6yUmfH4DUqXh",
  "key7": "31B8KN8BkL5uNU8n1mY7phMZZQZwzh55iBuSirgRjdYduzpwwTFDCR71X4dDQ9yB5WGg1WH5YrRakz1Rn6ruJAbW",
  "key8": "1ZEdegGaeg3ZsRTgVz51vC8RndcaPh86GGxS9FEQDYmWa6dfJjoeRE3K3sTNmGbZ6xW9j21yJZWLX4fED9tG4WB",
  "key9": "FoxR3JNxbvF1qNgRU7jfbAhRxmim8jkwM5RdbTWqESJ7qSyUW9L4bL3kZawfYiKKZsshBHeo5weHZCCZCWGwkeM",
  "key10": "3uFF2cvmPG3w9qPpP79RhZm77eYQhmYax1iWrDZz7KF1xNVG46Ujkv2Dot7pGMBfS7HybZrjSmHnkCvyc9qHwbej",
  "key11": "mDE64gQ9irSUgX9rfugUSzFx9wRjd3MPMLVoEw7zbdb6SsfMgRNrLaFwAFtNjzxJhgbaZsHNZHju4VttDxjxbJN",
  "key12": "2wYQ9g763dx6cCup5jeRwU7S4Pjh8q7APBbYNBJwqsaJEBM4Y9QgwZqkW9yZ8d6mX5sSPdgQXwdY9R8e5MFokRTK",
  "key13": "522ADH3bRp8gajZpQN3DKiJAbbMf1XGRcq4yqzKbNvhE9NhG9zonEvPDZoav8nucQoag3Ck4hBdH5kFYwPcDuzGP",
  "key14": "25cYdrfMGinvWxL5bipnv7XqGfbcGMzokdmxXfkDdbr9tFKDcXMweoSbXiDLDr68BQoxCXWBQj4XPAKD8CzAGovt",
  "key15": "4Rr6EmedRimjvjZVCwauYFMAa3tbdFZ33VNwYdBaw3WmNJRexHZBvJh6N4FQvz2P45eT7eQgzXFH8zzj1ccDfcoS",
  "key16": "9Lm2MPWXuwXDdPMMUm9qbxugHcUtz5p78AM4M71oqk35Uz7UwjYYfazTCpmoL1eJWeHwH7xCgBNeLR2NTu74vxi",
  "key17": "39CJu5DAQQhEsDfFdkQpxyGfpicAPkT5Hqr9eM7RPeo9s5RZdRskpJ15oNwupKPBmPREgwpB7EimN3mDZgvLFDnn",
  "key18": "2pWsw6CQjMrAPfLnKcyhfRYvAVc4PiiLAVa2Lib28gF5fcFcZfdC7uJfvQTAVTJNzMdGqzNivJjqFzwijaYLw6hN",
  "key19": "4nmCtdJvYpntZnjsjJwZ6VfZXnGaxCz9icYoMCm8SiibKPgR8H86ZLcEKqV1BarjiLorxn9TRWZefb9g9F3RQMtF",
  "key20": "3UmNz2Mt2QAvq19BcjAvqJFWEoECWEn8RnXHQJ4MY23ATznNEceUZ4TpvFogamJFHXa3zfHBgfkLfwfzZCcnd1oa",
  "key21": "2Z61RVapFrAiHhSeE5cRJihZ2dfstxZ71Em2hdkuSknvdhHzRpDUd4eK9hjqcofwpHn6bPh5kCttRJPjd45LJNQg",
  "key22": "4oLiXRXDgJ8SRGyFugxT6X2u1mBMS8fmBBbPuvgHLesnug4rQfWhgAZzwDCXYwsUZ7DPDix2zQBtT9Ab2NadTGyi",
  "key23": "amH54oAR9NHbCERcPePc6iqesxbpqGdKQmnrz9cGozy4sdWoBtKujDRNGrXzZTwaFejhEMVEsGYo8RhpuvsRuna",
  "key24": "4LxViCmd6bQ3uKqfwBEkNhhi8AnYxxpQj6EMme9zG89SsyawuM6TtvWxbpyoj8r5C64xQUbRnMKxCeJ61Kex5Yps",
  "key25": "3gfcXBN4ShCNeqYTD5j2jmPPo7UAoLb7VdceEW7XfQcFSGufxbcc9ujoPjubNDYVVWJccjWVoKrTdVa1GRmsrpUQ",
  "key26": "da3S4N1nW11rxfxYqUwyBrThJo8YmcRxpk4zzEcEN4W9n7quDoB5XrkSTnABb3CDfzxFmfQhq8Xof1VSZFbi3Ut",
  "key27": "4gZWWEhMhiBDhMbDuMRf32AHWXnW1RzBAHMMDVcnGfrixbLQ3yZGXj2x215GVAXkQXQAPqK1PCKKJYApbseBCbkH",
  "key28": "26zDLCjMgbQif7RCmLad7ndDNEm8zesq4rvkqj5bGFjmVMhtibPcrttMDM65VryA8Ps2NwjzoiSyP5ag3nZBsuHP",
  "key29": "3RP5JrFjbvn1CWpYaSFVsSSv8jzkiNfb16ahc23tgQaji7CFKmY3HrQF7s4gLMnEhHTMsqjA35GtZ1pA4fruoXk5",
  "key30": "1DdTBwfaSaxkbSHJ4NAXDevtSyVi5g8W7WnrT53KE1hensDEbXejPyvHYwi7NNgEvLcfj2RVPFq4XgtrLg6wvpo",
  "key31": "63wST5FC2iAxrwqWueEJRcKjUwnzSaAUaztJRaJS9c1UdiuADhCTh6LURDAtVU2z4RRx2bmj6xbqYpiAuN3dJBPH",
  "key32": "LQ8sMMGniSFZi9mufTxXkZyyHqgqvwkPN1MLm6wN8CHJuqgsnYnyMjg46RFMZ4s1JW12XDijjDPkj6R7dy16Bmk",
  "key33": "3oFP9RLEai3krSbgdgyaQKHfpQNSXMuYigXMgiDkFX13KhuJNgUnWvW2o2h8HahyacKaK6JoEbxt3cdarce7e2rF",
  "key34": "5dKHXLfKoBsfvnH7mtyq2VG1JWGLM6hdyxzDsqJYPBLwXtHV3SkSWUsBazn64N8d3aYSfADMX4zwv5qsDgipCsLC",
  "key35": "2tA8tjaMDy3oFkGszN7qJzQE93A9nPCw6jrTrDGMd58k9V8NGQB785J7CqyzHBJoAMnyfKsdCMFunjLhWofxTFyJ"
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
