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
    "4Kgfn9zegqigPZNh32yMYAbMnWxoC7TRCAYjf8hSPrSaVPwa8MiWdy3AUbtutEJMjFTsAr5nzGccwmQbzmADVgpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZpqWSbFoi9QYqpFjz5K7M68XYjbjJ54jSnaEGxyBMkfhto3DqvfSzDAdPu9UyiMcaPGRsNHsCFx3CauxBEUdDuA",
  "key1": "3F6vQZnxNCMpruHFR1mUCYNirTj7Jjm6y7RL8oUAwRWqM3VaF6viG6yZc74TPMH9tWrfzK9QHEjzKH3qUGwBn91L",
  "key2": "5d3A5fjEQQUY2wf6Yi99Wn372kJMSgbBKjXce9E5u9VqEes185bU5SXovrAbF9zf4SnWiHqazWR5g1bGLNQpZPs",
  "key3": "4gFicTwSW86xUaxce3QSnz83kuhsMGpFYxxWPpKTRkXwJXvQiLFggCJAD44R4E4pg5inJjWfYeZFQwT6Bok4jwno",
  "key4": "3Kyt6qCCGteEi31u2GFWZ6G7fJ4s7QbYuzs4k2FJGaXPifpxSA4pcfq8VkYoV2EDEgYhYjNo4aacs53yrLM9iEiP",
  "key5": "4vqrKhFZYX44y8ttVMocVCJwt3UWWNTSusd3t9C8qmrP2wEHFpksZkfPSR2E7fjFQ7qYjpL6fJucQTsYDotGQG1N",
  "key6": "4hvX6G5zEZnTDUadoEPHFQPTXDbVThXSEqjagxbEerxnnjXjN56sp2edqaABUdzn9sC3ojLEmtfStuNpb6qarmBX",
  "key7": "5uKbW6yqHVWDWPMioxC6aygDJML7FGm4KTb1vqQRD9qn2WdF3wtNFci6uJ8UQrxNBtg9jKotbHrCDN6Nb7ssmtME",
  "key8": "75LULNqq5aPfr2dBQS6PT1u6g5Boq9FGYCt5ZU3qetiS2vRquGJ7RhhQ9B8zZWTdqoP5P73bjxhkYZJQpFgU1RC",
  "key9": "3tTTnHC5E8fVmZfzToW4veJDYC7PtsSxoedyxhkb3UxKw62NnkRrnhRtkzFmPZVrSJmQLmm2svpWzqJjCEiE1VK6",
  "key10": "3zqitzhCuRCdSSW2SFhvMJwMjiLwW5aLQ1gGNesDHRtQ9Ax1paKswhnVq3Jdr6J7KXnMKeb1Rn85rDejMWhWFB1t",
  "key11": "5tXY169Htijo3Y2GSWUZzfAcj5N8PLpkmXswKBrJZJbEv794wBHTWY8Ef1NqZkRvgKQhtZ37oZjzk3EMtJ83Qc9Q",
  "key12": "2vJxrKfb9VWbs2cpgmtRx98Yh5opXuYKaigr1x8F5mimn7eE77S6BqpjFnqxvv4FAQYWpewvgS7YLdpkLJYzPowg",
  "key13": "3rAHESDwbjgSBR6HuijHLV9FKDQzbqBFi8okv9mSnrMecv2824ZEfVECy941RdrDRQzXrU4Xwt6VWDUNUq1SKZTH",
  "key14": "3s4yMZYpKeLsqRT2paN27gzbjH9e82iV3vazFzmHskwSf59CkX17zEPZzbk29XL67JQF2BLR5LAjjZH8sXmJbaqJ",
  "key15": "5RdThpXgAoF4uFvnf1vykKBBqmAJth1Ve6BM4HB9DhKt3WjfvWEufUcna7sCNN4eCCKQg5uta6YTYxNZdQgk3nW5",
  "key16": "5XwRwDU1VNCTJ2B5nFU9emaVo9EF4uXr4YJbN1KdzzPYcZrPFQDyVGW3tLFovZQQTwNXNoTxRxFSWHWXcFdPewEp",
  "key17": "4ZfG6mvKABECM9U6VrBQgeecGwG6XBSqMNpRqiy87Ui1B3SWNz7okddajggut6Ns29SFfHDR2FiFXpwQK182iBon",
  "key18": "39AsyALiVCdLhuamuGJokQj2yGtCmZkfpQ8DaWwZPnRuwWpW1c9TUDUvVjok45gViCp5W3q73iZPsff8hcy1TK4D",
  "key19": "5neKYXkANS4PNBRM1qxNGYVbcqYR6ddMz7eZK8gDfxWwkN7ApgTNWprPBnY2P8LbZ6FuUHexMVPiJiZmnZwJGAHu",
  "key20": "4EhaFGeUBPS6wQwdQ1DctwfdFkJ96wFPU49AVZVvFPFTbdpe2XrW6pyEayWCwyZAVdUspK9Md1TZ1Vu3jkLcy5rf",
  "key21": "4tMXbKmqdTwrUkGm5YkPLusPnAE1bcvp3uuMV4Rfm8BAf2zph7WmZLJCQrjQ4jm4Np5zMrTQqzrhns1EPKnt4VZm",
  "key22": "4jDwNFxVaLNXxYF1GGsKenFmcFMNrbUvVBX6AVWJf63DMmaAAimJyJUwoo6DmHyoGHVsfMUVAWFMU9iDhDYaiR8w",
  "key23": "4yDddWSqLheNESjm1tf2nmqFjtcAEtdmwUazPbwfw5CR6xP31wNvh2cPapp2jGbiEo7FbwiX4nGQKiEQVQWd6LRE",
  "key24": "5ZU6TpR1TUsgRYRtYbuheFsiJd8fkxEzjwydw5o5Me3rK34Q62MhrmXMC5NSjMyTXoxbJosXg2XXZkBKweTeGAWr",
  "key25": "2wT6pr3rtGRpxTDQYz4QyASXNbByp6Br7gBQMJeBHtgqX71L2A7qFkjrHjjKiW1t39Rxn1TaG19fXPX33HuA2YdS",
  "key26": "46qSgDSEK2Jt8cRj96cpoJzPVR4EVPKbdxySansXCJmLE4YDN4t2pFCuHLyDbvfy5qQbZDkTyF2MbsPHctqhpp6V",
  "key27": "4P7SM1bu2NFjiWZqA7QWcDLhMwt2CWwjWoQqp1dZeXUXrLLowmiGMUrKqAjdrr4PSnMDBrVHCupnBogR1ERf7Lf2",
  "key28": "3dNE3nyd7SHfeCPJbGxkTWokTcExpdQHbztJwwXJjf9RC2BchbiCGBsRUtoJZmWUzxnoZFBUNKUR2nLb2TcbS6sT",
  "key29": "3v59iADW5G1RqvdaCFcYoRbnXdbrCw46pJnGk1U3TFLvV7yfsHvuaiSYyEFaUXW7jZWDEmBgNdDfqCKRQurz8Rgb",
  "key30": "Fv9YLXRWXJ6baS1QipVMAcTpLayRisxBgjZjVoxLv8kKFdVQo6jBkqKZjmoH49GEUjsZHZmmXFHyPVR62RAUDgP",
  "key31": "4fsxQk2uGmL1rJcMv9SPFGQvXjbKi1LJCTpbn8uqxYqZrrdSWHGfzx2ukzsDK7J1g6cB88LtmSN6TBTJJurkLAkM",
  "key32": "3A1aRdAt6pTZhX67DDYtVube6vge7BmrjJpKSK7phXjCvpexwws8yGmMjwdm37zPEgFoqj6Gm9YkzYS6pyziM8tA",
  "key33": "2SyzGSsTSojvVHqz7gWu6TjhaD2sMM5FEQd8Xeu8ZQykMUzkStgDw4xepZdYDL1DEQjy26VJCrLMkA9vuZK8oZ1n"
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
