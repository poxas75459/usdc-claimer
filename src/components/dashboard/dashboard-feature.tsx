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
    "gMwa5tMp5CTbzHTEukBGRMj6ShnzEk9xbn2yxS3dvkeZFK3e8yHmBWpf76iRY6z6CPpKFsQ4HvqUFczmsx5JdgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43N8mFkE2wd3skidU9TJkqvzEvP9Rh5zsmTUfLQ59XFqxZrDfwCug5t5wEr7ocEGq9Yw6RpV6ufJBxE9kxRaHTPu",
  "key1": "ANW8j9AufFn154Wrghg9e5tmoYG3LfdAGmc6qkTLvfCJVby57NyaXHXcaVMianRWyZrRohJ468TkrkwxTQpui7Y",
  "key2": "3VktVFAt6VxG1WL2UCs65vSK7LpSecPcGFK3BtQ4jgZBKGwDaZoabEvsbrZq3bUPd9545ppXZ8Lp6ek1hzm1CELG",
  "key3": "53GY1nEk1DefjHUU6ZyJyyYWYnTguoMMjsgGRSRrxSdYhRtbUWmuccDZDqoiq6ZELQHbmzgQrxwVHB9feTRG7LTc",
  "key4": "4xdXo1kTYYmSoaCZhYCVEfMfHg6e94yYwoLtbRbrshMkLEE32tbq11677xK2X8oxXpbx5h8geuk86HVYinQmg5az",
  "key5": "2d56WGrrqQbYhzUTYvPXCadcREZQeyvRuDpsGNoRb8UANNSHUs161JeAfEJsEYbaRmt2coSPoXN4VZ2pNnBHP9SA",
  "key6": "4d7gc82ekcLDmwFjYSupchdGw9FxXcg48qeJmCGm5akSCZhk4szXqMCUpXF81vbJaARzdGYVF9SncUkiu7gzUDjM",
  "key7": "2LBNfMSjwxaP3Dtih84cgP444UqM5nptz1eZtRgRhDnPPyzHwLZi43BxxMk4wjTAfhq1LwYNgJmWSjuJ2JGkbHL7",
  "key8": "yBvd8AtpMtmmT9pGtKLEWrP6MF4TZqnN62pV8oMixaJHApDghqNvcALiQ4LYvxs1iK91SurBy3t2vcxyEPUuPUq",
  "key9": "qwoxxtWKZX8k3FqhdvXK7J1nJhVXnQDRz1kqDTyt5x8fE5MzhB4bqq4WS4ZNNP6kfuRBsjUpYAPeBqEN8MwTxW9",
  "key10": "3SfGf2hTcKbiDM2k4j4ZLgZi5ekzCh9gWRmGjqiX5k6qjxScgxoXrPhf7dmkhSoCBuQMPrhnuAVZxa1oqfuiEx97",
  "key11": "5rTjzomkfNZPmwXezwT6vrxHNKWPjVynD6RtEB1CnqG9JZnRBpxbQcEfjXQ5SNjia4awA4K8zKwQ67gVxaiw7Fbr",
  "key12": "Qjs8sCUNhtgsB4EG5YdFCBoZJpd2pAT7bpkgbB3yDmzAfhT43umxykdiFC2iaJCXNekGgbp9AdbdhJgkDRqNfcY",
  "key13": "5g4CHy3WWRksV2AyGrrntNnCgLbvUyYwjQDejaSxD7mWzdGYwHmgcGBLrkBYdL2XnxA54iwk56dYBvZvy6irAJjw",
  "key14": "3vdRPqGBKuJiH7EsR7NuqFwE6u1k6e5U9iGSuWVc99BJ4U4pqjE4dv4WbDkfRGZJGPC5NpyiXgcKVNzfPztEKidZ",
  "key15": "u3gBXuCNsyCP4oYptxPp4irT1EUeVbcGBs6GQ7FNbMbAR2qsusSXumYJ6QPdqzmbvY9nBVVMAEx8t1BJw9X82W5",
  "key16": "khrJkPUC9XuznqF98gHoKyATAFQJu7vfCN4BFRK6jFwzuKnVk9rDQ9WzDUAGkFzQpiAnJD2UURbtviPQJWehEe5",
  "key17": "22247Zdg1K5Gxahav8VQbxf9GXHPZvVNYGwQbkWHsjvA67bwL2vCRhY3nEK6YagXbDgiRso1XYVHQtEF8PNv3NCD",
  "key18": "5mpztpvaVG1SVPcTigCNC4tcg4NkSPHrvrf2CN8qPEkmeq6uMBQ8Pmbt62n5wSETcmKRLPC9JbusPhR5NRokq8xY",
  "key19": "mocbU2zLCznjy6qnEdBMdMpfcb38LaPSNiDPiVB4mCw2BLZ4ZaXc149ns2NCRJyacarRQXQ9A5QoeKD5y1V4Wp3",
  "key20": "4M5rcD3pe3TD36obrghoroPUEGzJ8WjwR19B8WE7KvSuhGp26gQF9S141Becp9SgW9kym9c4Ynzygasb855UUT7f",
  "key21": "5PvjzAJhVttanyUgdL59C38xyAwEanW2zLAC9k2JbbrM5DxgNFbT1f8gBwfgMJahi6KVxM3KRyww6poq5nMW3DiY",
  "key22": "27XgQJa678yQctmheQz6BJD5zA9Y3Swm5WfhYHPsiJ9wnowXKapFNJe4kgaZ5FdHdXtsjWPFa43dcAtb9wRALgdy",
  "key23": "4fTWaTFirw7J3RAiVLm8ZxWfjbwWX9fQGqaxpTsFsqVJpRFNd5AAm29KuTLSHra3A5k4auTLJ99yLE2vKF9z24UT",
  "key24": "2ibtgpmwyiY35o6C2F5XGx8tJXPefWPuRdbAVCEWQJtB4duNfTaHYLCb81TbyudCtbrefPHKZ76we291LnMWojda",
  "key25": "2eHCpBZE83yQJyqZQzQcoSNm3BvJXpFdZEtY5bf4ryfGuwXj7m6citpzmT6AuyQj3r3MJakQffMt7Y6b1xz9oxbZ",
  "key26": "2bc2aaP2iwfeXpyBmnCbLHtGcVaW47JVsiykBxqiKRGRGK55vDVzYqndp6urvK1LmpLkV7hMJ5uYiM3U5uBcotjR",
  "key27": "4jEXsH4uyfrar7iBC8Di5wnSs2fD1ByFdZD6D44EJds4hxcpPnx9uTaQwxe8jmnLu7LTiVuo46FP8GuRuYGnnoZM",
  "key28": "4AeMAp9CMU3aGqQdu7fvpz2T4vQN8ChyDNsSrT4KN21SXugiiSNAgKtVRxMgbSwnQEBHFRTWTVs7redzavuHUeZR",
  "key29": "5cKRYjbkaeAfJixXBbcUbvCGXTst2dEstxhEsj3S7aXTsPBnCiUDaT2rMSPnSGq7u5VxwWiALaMcQixm1wqugtg4",
  "key30": "26dm56osFweo91Xhe3bjh16Kn8NN4vwUynsBcVzkEaGgeYzB2iZBdDU1o63rVfmV7vuWSu3scRfPxavdJ3n8YFng",
  "key31": "3C5YRY2XH1ZCQKoRvVb7ziYyceE948N3dovDhbbPCp9pAeLmFp3XXSu4mZYH9XWdxAWt4aTRxfkmiJD6xUbhMf8W",
  "key32": "WjrNxQSDgSgJALGinP3d34QMkBXiynH6ATJrSbRSheHMXGkA2idmexxJSfLHyRgvNV4tGV9R8ZdcYhWAYSv3q9p",
  "key33": "4yiUs98tHt4XrqYKxhWT99VxNRj2qN6ZcDYTE1pSXRgq52BnG89mCcED4Gx6CsDy2AkwuWf9KGcmVKAJJ9GxEno4",
  "key34": "4ZQECNbHJcyWTc8gXoy35MToHZoZbw13XVLsPrY1pr6b6bBUZCXf8Um4NBCf1yH8CUSfxyXSeyiU8bL1bbjwBso5",
  "key35": "5xPkXFq65csMqyZQf6398PdaYQxfMv8wPaShr7rE1N19BKuKro2AFzhZKoy4h17YhgUFb1NZNiRCkqjsmLqqoDWJ",
  "key36": "5pCdP7VmUE4TzhE4HRfFNiwQMVUmrnKhgBj18uRQ2uDyoAN2RYz6XLeoSva8hDDHEqznqaGUGeM15Y6yFqGi9aSK",
  "key37": "3JyU1dGS8g5p377U3qcQmA15NdWTymzamFFuEKBzyA7nrjnnV8GkoCo2LcSzSAGj7pDm7TCQLbSFHLNdAteKU63F",
  "key38": "33APPdtkpxqVMSJtDrBQPCQjjGAuebpLSHQX1E3Cx6T2zsEgFQPBFDmDXXqNtaRAriwGVvp3sh655xfX5rEYzgUM",
  "key39": "5jMVi63vayt3Tej7LyxJUHRXUTTMReaSzkDyeV5CAFWKWskQv3cxBxgS4qJr396XdCHpSqZuZgTNNGYDaAioUm5o"
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
