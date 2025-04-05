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
    "2WXEAseJxBHzRw7GfL837nGHKBTf18csCXj32UpTfNKk3K4tQPa87jX2XV15Sztuc6a72enCQE2d4GTTCPuEAwFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZgfufPbte2reshHvRSvgjoEPyPHMfJHNnAhTCXfCqLxkWHvgkSSxockHu9BZ9ocS13hUqqjyPuBMDeyqPCaXHT",
  "key1": "s966ZyL11KJ2jaVTGy4dghxwyn4Ftgrr8YjH12ipvYF7tRunUf7uMzHJR1QktjV2NuoRVwPrazzBZFWKQLgjWei",
  "key2": "4dJN5tjQLdFbFZsSpr2WHoKjv6rNLg776DXf8ptURTdzN8SbE8iJ8FK63TqyTNTtSs2fBj8u3sNveqHsnHGrsnnQ",
  "key3": "4bf1Eaqpiaz5hjHnE9bn2AVJCzZNUKWBDDaGSNtfL3M8t7sUERXeAw2Vb6eqyzXPJZ6RPqjnRTJ4sqJWaxJDbJeC",
  "key4": "64JEvvMnxAAdxUMK8ty14F1xPm45osxz1GqMhbSrSawwhsZ1x9Cremu6Y4WC2E9hXiG69NPsB4RF8T1qVNcSY2LZ",
  "key5": "hpFc9DQbDbWiW4md8gosx9AeJUQaE5N36bGviDB3mq18UZec1jrSE9FVjUDaWWH1A7s5HgKrSpYhna4Zz1C3273",
  "key6": "32cp6uPTnWi4VPpa5pUF8cxPU4CWxv7nB2xRDLW16S1TuzSrYDcLDbdAx8v15iY3UrACxjr1sL1uhEQi1MF6RjNE",
  "key7": "4tJmTnEV36irCcCo9qVLTb2aJyEaph9BkGswuWXoEAYuDkTRo7UdX9ENK17HZj6qTc23Dud8CDdYbwGoqUARBKoq",
  "key8": "3EY6zjPDV6h9LQeoWAFHsWSNcfyVRYBBJdnsLNNMxRd5oCCWsUpTPSsMq1QvsHNDzBjux7btGX3SohBYwg4PXko7",
  "key9": "4Ks3TsPhGdoTff2TqoUzbQ3Yxa4MWNZXcSj58r7wQHA5xzQbNvbNFTuh6yBFFxDVUsT15xHYfKDLr9ZZBb5DxbNo",
  "key10": "WJYHqL7PtpmM2Hv9jCrCtWphQ9cVAZUXtXu4CSFfMvKko2mt7K3CpzsGmrb4MSKMq3jGQQ3cHYPKLNLoWqTTZ8K",
  "key11": "t4JAgb5hgTHPKY2YgjYAe9WJ6UFCL3vX4HpzGJZawgJiQyRZ3NUFpU9LRrZndQafeEpBAumWbhxaMe9DiqdqBs7",
  "key12": "2Xb1eiqEPBRSSsKtUPsMDBYUhH3mDWFdmsD4TDoyQ6Rf29PPbVmk9P7Nh5YxcjFyPJDxcNjP2M8XjMAyXMxpgAbT",
  "key13": "2XfMrsmNbMaBJDRznh3AsAi6CeptW1uWvUVfg7enp6wyGAAGzDe8RP42hpJRPHuJpkJ4He9szAPsXSr8Qu9ksPhE",
  "key14": "5qW3Tu9MQ2Z7iLSdCnvscHpqWEsqqGkAFGpBog8rYGPo7qCPCQLM4XPkxjE4qinatjm9GtvvpCweyqAr6EFU329r",
  "key15": "2WEMEzteF1gFcmJUpjzqRQzyAVsNg9t75y27j19tJJUgo2maGFYuaXmHYiHpBqJd4JQ13T13pfqiEA6nrbeu5uim",
  "key16": "4MUFBc2eFVTsnKGxWxbqB4DHhwAugBXmketvd8kwTRqcuTnTBPsbNcULVQLL8B7ZxvQwoKmgzKgvJUsSHNpX9swU",
  "key17": "EqF4gLtF5qqNhFxMzmUjNqjTM1WTnyHjVH6dzbPpha54K8k2w5aGPqhMqLrh5gzDwL7BBCkccP7QGSUKhaPLCH2",
  "key18": "5XArhqKNACggFKPfRb3mZvj8fNc4KxpDz96aJAd2eou59Xk2bH2Cgphy3tgaeDbZbne49D43tLorfq5bCcPipBcB",
  "key19": "5YMp2DhYkR5jPsJ2EYT982sx4MaScmbFT6h7bgpQoTPTzowzQsKAM6ccHWpcDXJo67XyhXrcGhXUZuDa21R9bNXG",
  "key20": "62NZDRDgBYdLHuTVfsqTSMqzVCuTmBzmDYEQc4v6Hb88sjKuHRX26LrL1WTYSW3NC6PzNLnncF1ymG1Ee6JiidLC",
  "key21": "4iVmnNKDhXne6mTbDdkMHvZFVTVzVhbcq4YM4bjWJNpPAJT8CszaaXExaFYBBredLdLsAfjWvV2j2RQrpi5swzAA",
  "key22": "439pHDJSYH9uckxJG4SDUtho7Nsn3rzmhLG5TTcMZqrYMFbrWfsqCVdrFWFBdNexB5kmM8BGmshe7bTPoqybTdej",
  "key23": "4BxFRnzQANNyfPN91rGe9HLFqqJ8HezubX6YaNbKkcaxUsmBM6BT66iddebDdQMgUNTvLEYd5pKthbbNmRULvN9q",
  "key24": "4bwTZeSug9Ss9HdjCYjknStMCWVuayjgEGHnneS5NSouaLrecaZbsFJBaekrx7MqHnaozDzd7AJEaBA8udszBUqK",
  "key25": "2dHhoPUThdd31wJTQ5dmLBbkfoS5qStmZHQk7B9WhgYCiDccuBDwq88p1LvoUR5ywTE45rhNNMMiFXB1odBJyGjy",
  "key26": "5RqbBXS9S84Uu1UbCZHYTd532dnMdzs9aznsKcX9YgUbKQ75j6hwoD7Hnr8nUwYT7FgMHLvErZH3mNN4qZsXHf5f",
  "key27": "3fWDd3TPfeAFJpr9mJmkjyaqwcNdZ9nuoX61MYjxDKgJrA9qwqXBxEB9gap7V5XqgsfQi2LQU6B4buhZfRKYbgua",
  "key28": "3weVhLPLBJiVTgkkH2uLkNw5enBEcz8jf2yK8DFrSXBxEawDuC9hAEYQnFQBc33Jk78YkhA9N37YEB3TNBercfRJ",
  "key29": "3KabKK9c5rj9hs8dZo1StvppKWNAVVhWTHUq8gPsA56JG86E5RoKMwBRwfAPCyQVqV3hqdFoBFh2vd4rQnjtMkhR"
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
