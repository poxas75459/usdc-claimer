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
    "3J1ZptDKyzvbEnbTQTgNtGcSNN2V7wtqJ66EEAFpq4S8vmBzM8fa5xBAq1tnb4ZqZBjYFyqREpLr4MH18Rio7vEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YnwF6Pgu8BscG2N1N1iWre64PHVZawZNX6ctbyoStmucStWfYKFDp9wW7NbSPTJp29ShKfp68gVkR4vDrRZfRkK",
  "key1": "595N4TokSRKvck4EucbryxScd84ewd253yHKGFkuRWJmFxVPJqLiniGzNuci7kcBauxNAXeAcZ3H656fFFjkvbiC",
  "key2": "3cx13ktnS6XvrYEoWET3NYMT6pYbTc6FL6WxZhQFiDFS4XLGDqoKkaiPhRFUK3axZgjKpmLYJDcddWrw3g9bWwJk",
  "key3": "4Qci6uV4grToSmCqU8v9QwB5BMNgFoHG6xXunysKPr1A21RNttPsmhFXkDh1tyvDwN74Yr9jUrF5fjuRPHE9apze",
  "key4": "3GH2R1AsJ6FvG2D7gcQW5hCfugdqE35qXZjovtFjgX2P7ppE4zppehFj9RPoGWUAkKHjrSLLQtxfkfLb4qZFBFEu",
  "key5": "AyKTfevyPTA4vfF8Xiam6gMAPgCiDYbAeMhFn8Xth6UFZK25XvQQgaQd9ckAENijyQTcTNMEywqRDjrq6p2msHn",
  "key6": "3Mp4S2Tw17hzGzLB1memFHXQHZYzHm2wBEpJhYYZoEUzPCA5vfJgLbkrF3JTHdA4L4fjBi9NdN9eAPzhzxUYgg1y",
  "key7": "2yTL5LSs3B4TzDbT6kggdy9nuoppbKwBQkKqdmJpRmXtxs3FC934j3oSxKB3msBrKtwwA1mpAF7pfWyfaK3yoXNn",
  "key8": "58SQY8SujsNd6wEYriaBhkKDpQMKCyESpLeggzeP7hEtExVHAnEi3MWxkyBhfZCMT5PpjSbkzV5ZZLm8YDmWRaBJ",
  "key9": "4ZsK2UUH3vcBTQKukrfe6XfHdEskTctocjekNjLE9xcoK6vy5WRvwqfBRaTovZyXmKtvTyguDzwrsVuh7epAxoGu",
  "key10": "fxfSe5wMGZ4Eb3AmGKJXKnDThDdY2jHU3ghsR9iCn7DMXghe4ZPbBcsf7XxaWRVgW2mXPQyT2CH7vWgkxYZ3yFH",
  "key11": "3TqETkK1nDycaMmuhJ6DXcUmHkBCCnZuw77N8ouC8qLWWFdQVFEvnmjq9oQc88sfasr2qcpq5jRLf6s3U7V7QZhc",
  "key12": "akRTmtRkvxNSq6x3D7wfYFoPVJrEBbse3utZebPfnqG1AdDUWTYqpTctr4YzFjgaRQQroMduerK4Es2A1hyBKGj",
  "key13": "5vNgAhFoXVU7CgSdnKzMyMpuW6q9dG4Qmh9bHUx8XiaBpTFBUSobENibXta3Cqu9SamGdGoq1ShaBSjyMk7gWWc9",
  "key14": "2rgtZ2eUQLRNeX4hPBr3HdbBGKxMe64TxeEVb2kbuUdeuhpguiss8gjNUam74gnJWKMJ4uHYN35NvpdPBZNbfyV4",
  "key15": "2hbySYdB3AGXqw8kWJVkRP8MyN2NRswUuC28iENK3C5SaUozUcFnrCRGgyUStJCTCSqofYyTv81aPr1sWX9W7ZUD",
  "key16": "27Jy3twChWQWfb3KytW9UVFJjksRr9xwrTsbwkYV4V9GbA1L7LDNZQQaUdWhjbzkegXicCLy6tUEx7i1TPQEzc3F",
  "key17": "4fNYibFnn6Rdth9npx5p4gQaBpezyaoa4hHR236eTGZom7QXihWnBcELTAWCiGjdLcjQiurnJ6FjuHejHajHmV4u",
  "key18": "5HoWMm9YP7QNaWBX32EsfnwWmhixJVeGacBXj4vppLWa51aApFRVypaQEmpBqdSPhZWv5xiD6qoBRmVLNHjg6KAz",
  "key19": "5G1GN4YiEvkSmbiBQneyWkkkRDK9b89ynHXeamgzeD6qibBkdULY82cbMRJLVRd6vfPAZKQD2qtTXQs5iDi1FNDP",
  "key20": "5EmGTmnac4RTX2BG9usKDVCeoG6TNrohx1x5Sij6BEKCfg55WshkXn7NKm5rpHjbCnaD3neSykJRBp4tbpGXjSoe",
  "key21": "5Qw6hJUdy5zvqFhpHTwmpaBVE9KPGush2ZLVfebMgsRPby9hG3Bug4gSNBMmSycWutiNCfciULUHvtdyWDeA7Ef5",
  "key22": "McoEBeQaqunR4mXd1XzJ8QcaX9QMijFA64PFowobKPZuyDf9HJo6uSzMab79UFPjXC2d8B5uP1qyHwSTHFLfiMg",
  "key23": "A3xsCNbbTTr8VDVj6qtFPZ7xRrU2jttcUzG8aViULwLLcSEURgVgdKfwoNmLthReRcwiWnhEAnfaqMtQ7x72o4v",
  "key24": "37CKF4cphshAnwrcZSjhayczYwZhzPfxwSrX7Pc1mWYXVMeCngcLsEcKn1hYxVAUGVw7Cgc44UAzsMUX5bf2RjWm",
  "key25": "5NKbYCZcv2cZxb3TKQfuXN6YxjVRHZjCYGv2dmzqcAYLN4QXFF8DVHmq4SYtcKi2ULhz4yDmhimS2F3JjXs4puAw",
  "key26": "3fvuJvta7XWXaUedguxJLCHgnaNTkQiMEDDFuv8W4PDvEggC8ZomwYqMCwDu7wpkGku6jN3iqGodXCW3DsprynLF",
  "key27": "7haxWFJSvQmeN6mmpvT7Us3LqpaaX6usvndwxzWzp3JXuqVeCt2aQyDxWMSFVadVkXbdDd3ebTtmJoAB1usrJyJ",
  "key28": "zS3LRn2taKDVttSNhdEKW9B7R9heqk7eu83nVCab75nHut9M6w1iB2mQH8xovdkzbVSz6UAEMFZzagf3vSYhi5w",
  "key29": "3pFi1uigtcfMzHuBLBZkam2TS7rGD8fSfgK9xUSG5oAPjehrwBWnCQVtEh1CStLkFKcbNBMaS5AGzzb4cV8sej5L",
  "key30": "2BkiXXW8rwRTm2aQPodCJdU5u5FqP4GEYacVi5rPZan7BVHix3ngy3kLPqrmoDhnD6xQbWRx8eaeGgR3BhcEMj6B",
  "key31": "3pmAGbWc639PxKMMjGmQu3epegeYkeFgs3GyFy8FVAEVxMbW8U3asKe8wH8B5TB6AX4rzmfF5LaarepWvsnR1NXc",
  "key32": "3jQRQKHJEdKFFyR63wtHpLKTHdxG788qqPTEJ2FtaH55hZq82HFUEJQAXypfRcFcXzcMPniodeZA9ADtYLfFTLfv",
  "key33": "4z1fNbUG2B1Fvb59MUNjtMDgjwAQZ5mCLf6DXavGXQDvmc32xJDPWKd2kTFsETK7JrrXu38GfW9kMnnSguQ4yo5X",
  "key34": "3q9EtviEY3SCCnoVKaNNmbuvvRUyJMksnu4QyyQ5EFeAm59wLyw59gPH1mqtKK9i5scHG82AZbefKPjzCwAKCbg9",
  "key35": "57pDCFuPicot2d3gYFkTodWHkJn7pZfSj7TLPFM7HSmhW33LvoYkLrWE2VY5hvawhSWH8VCCYNbsbvK6aRj267S5",
  "key36": "24ovzKLhTGCphd5tCka6WWHapUQYKaJ2PrFcpAQxHsLhbc1jwJfdzR18yg1JxQZcESHj42SE2g8AJX4pDi2xzop1",
  "key37": "X6wkV2UFzfiJJMfpFocFtwMS7hjFV68BcaJCmn3uMg1cfTToJGJUKdhHiD2T38ambgMdjQjWXeH6rnhSiRcnu27",
  "key38": "2u3M2e7JL4P84mDnyc4WdX6TGkpAcUMVpdxr4wq52mmzUSRvMH7WvC3Yxb43Ga1Toc957p4vowHiVL38vZWkEGYc",
  "key39": "3PM7aqEEcExVphY7prSzia22nASxLiMLTacWgp5Axisnw82pQJzYg6mHjq56ALCjgREHLNCB3CJ8xKkiURA1g185",
  "key40": "5hfE1mQkd811SBSu71Nv9DFVq1mh14SnhacfhB9tCepk6BiUuiAqjbZ1S36gWdZLVSLnMYkQbyTs4o8byw5Ktkqw",
  "key41": "28YqZ4vZtKwv4gJzWb1KpMGb49sDzeyWGZ2u6ETo3g6D4n7zjYG7fuTJgeFGhyMvTT6abVff2PDXbUKAEyMKp9LR",
  "key42": "2qQgJE7DEXTiFJL3FSKrmWgNUmzHmDT3PFwKVquspc3hKfwyLZhawbKJwuHym3JjWafYZRXzqJG5bT3dUNRwri8z",
  "key43": "4481U61qhtELCE6n3x8f19cy3vEi6vqjTZcJQMRwebb7rmY9dgFH5hK513KdS17eFGUdVBT8wPMYydftzLVCY1Nb",
  "key44": "5cPRVXRrNnZF3t2r6XzDaU9PkqESt4nuTu5bEfWZ8dUdDVsfL1gR3V1EMBoJm1sqrcfW5NptbiCSzUmJz3Va8so5"
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
