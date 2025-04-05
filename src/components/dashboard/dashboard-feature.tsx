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
    "5zNFh5h7FfvSx7W6CGnyEA3mvhRg6pYH8GJn1tSc5MB3FBCTqMdCcSst8UeV5gTGV7G36GVTa9wQsF5PdoDNWaTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6K69MFv9hyTz18F2BdBqvk3VUbxxJyeZ9x6e1z9moKQKBiTnasSQrvY1E4zrU15q5wYMd9d1q5uB3B4d9vjiqGN",
  "key1": "2vbCxKHPSoJhDDSdUKhJ73zTc64FLAWjxvck7iTUyCrDfuCaFAug8kQQMqDtTSCx6jeUAdogN9GKqt5iVtxJnDRc",
  "key2": "2RHnP5WFQFZBX9C4G2Ct4pdSFWWHjPLKaxSpst3SKDiC2s4azpqsLfvbyvhauQLTKsfNa9ughSbmy1XvLQX6E1PG",
  "key3": "3CEZAwzinWd3DEcy2L731ddA3MHfeyHq7FH9Ai6hEFoA2R3tQNB8bmHXaU426Jcysyaic4Ur7Ro4E91v5C6oA6DA",
  "key4": "4YtEYBLdUgf13jHT9mN6p8XJwTejHNf2CR11zJTEf6DwqWYqiyy12438N139k47BKJjya8zd7bw98YRUVqJh5Ttj",
  "key5": "59E6vAcWBgasPCds51ndwfGGWjdbVa3tFiUPyM6b3HVUZAS1ZLVm5PQa5TWSRc4NLyRdY4KHf4vbqo4QRRAkPvZg",
  "key6": "kFhvhre8sZvqSnJWNZCu7boEkfJ8xH1SbxvjUeTP1FMoRXQ3tjgjD9oWrB7eR7PiQbXKNAURxAiwBRjCRDYthc2",
  "key7": "2H7nb3gXGJJjTz9uxizpTSLHaLA6fom8pEjD9Lon3yxRVw5YRMJd51SHYcCYrSCw7YbG7r7R9H8o92df1NkQN5yB",
  "key8": "Y1Y6jvRLjDnU3bTmkHc1tniN4XLQ7h5UVhMfw3Y97dHLwD94BZ8qNmJ9vZ8EnorvDdepRgmE54jNPoCFGBM1F1v",
  "key9": "szs6aHRRCp85UksFVSjJGYMnoDwbzx6wkFMdVQGRPk22XvPVtZXc6XBCEbCvsLvmf1wWGrsoUJXQZxuPJH4bqaq",
  "key10": "4jrYwvKewKpjBNuoLGUUqi8BDRPMw8R4YLb7VcjuirLgm2JqGHbfhJ2WSkv5RdH9TqKhcmpaYDCFpbCDVzrk39kN",
  "key11": "5WqtF9DfvuwJwbatvzdLdpdTrE3siM27sKBgk4JokuXFJGyNzk9cjHhtRP9vz4zv6GFwNJnt8UR7BvH6epxqYNcu",
  "key12": "4bnDh7ABLPRhrY323dF7tFnyx2Z3UGVNMHLABduhCVL3gB9pi8m1BKzfuxBvTqnBbR1cKsQbozPuqUAfWbzax3GK",
  "key13": "34afUGb3cECbCdMBTenNbwQHseQn8uqB8aTWUXP6LCPQroMHfYmiJPRnNfNsRs5m3HT2igPYNqU5Gbv9YUaxztdH",
  "key14": "5NXkAstGGkBvUafBNXnXZziweqBXfJDDpExn7xk4TPJAUcqCPv3B1iuPcXD9ycGggpfjud55GpdUv4eL9Bh9aBEA",
  "key15": "4VnWWY8pXuXTn5mK9qXUGs7GibDCmLdqy72N7FPx2HJiXckavr1NdicTav6tARSUF2tSC7WWpU18kD2pUeQCajXC",
  "key16": "5bsDEuGfqhJdjfjJgpgj5skFN8ZjHH6USEP13YTgB3wXEPhRAUZ1XrpAckKGLn96BBxyfiiPG99E5LEWQob2jDEg",
  "key17": "43GjpajVVDcmz6yFTPp8bepHwtnhVYTDua6C3iGQspUWzcXfxuJCAWjtnf3KEt4ZF2vzcLLkE4RCSNWnKrZfCxMM",
  "key18": "62AAAyY4DyjhG16vdCpp488ydJQsWkxAihi7nwr7jxofbd6Mm3BjJS6RZyAbA3tQFCnWaHdX6KshJRbyFaupKpE6",
  "key19": "3JfzSx5npwyh3RxRxYiWybtHTWAkeFvP8Hnjh3MAfr2cSwZ7toK2XEAc8X3iyo8scRSdpTS8cfDGJwDokeU55JGT",
  "key20": "3tLRvTrmG3VsQ9EbJ9DLFBpWQiFH4HpTha9vUYqmLgDc4oyqa62feWLYPjuxNyT9unGcRoerotBcfzxmtmk2YoD",
  "key21": "4yCVJ4UHiAbbM9PZGwRWmpJ9DaoCpLsRgJhCmp6qLdc7Zot4VaTELAC8mZ5ewihB5i4Ua3sJYaYd6CUxjtibv5vw",
  "key22": "4xSBo8351aLcdnitkrYUhCwSPZ8Er2EnQE3LLTVvQsdvX59jSymnrnvf47UsxMFWtBnbZvT3GQyo7ic2heeXjUUf",
  "key23": "5gtjHWUc3XkmfmkBZL7JmE4Mk6z4xT4Dq2i9WxngM4yniWJokLEZhV8p2DyqHRq15jTjAdjUycQNAuSMnAhkodz1",
  "key24": "44QggkyA5VaQHT9BaHj2f5kRAxdnvAtiqDBcJ24vhpmmxy2NX4AGko8vfYf47x5rkR4FueHVujVktPEiv32ZCQaA",
  "key25": "55TigKFqUfmMfnxRUQ6QPvTbMrJNrWBHz4t11NB7BP3afbdvcSvqYj5JD3r4o8QwMXLqarPdT5iBmWntgVnEikXq",
  "key26": "2P79v9SAWgcF95CeSe5ooKHGXgbgaMdrTZV9UXZwpono9kYNa5SVG7GPATe4phaZpajMBebqZW7QoAx8zrGMGFV",
  "key27": "5dmEoW6qfQBCR4nQHCgiba1pEYSJfzjs1GoBkYUEfMVb4VRDjNTNyQ8BgyTEvMgdbBbCcfPCepMeeyeUigYXnDxG",
  "key28": "5WHKrNhjPBkEfxeExrpwifnsMp8uMh3eTLsv1QHm6kb6L7dmk2ekXX36HULXY3VDCLVh3M8i9J3spCYcB7oLj8Jg",
  "key29": "3hgH1qNs3jnNkARayx7ttK8ZY1PBzcik7HmUkM8kuLqsyaPF8Ev8TuNRATonWQ19kDCzhbpUZJEtKQCKLEqAZ6p5",
  "key30": "3ua9tZudPNQXYsRm9RtkJhJg9S1C8deta8f69KjCvYUKiYFCpBmgicVn53EiaNRzWmgWBaq2STvEbSYvsYQvQdMF",
  "key31": "5REQYTENVppbLdAJ1G6TKS7m22EzB3RaqhnaLpGH2BuRVKdD1y2cGAjx7tCDjoMu4Y6RALqAYU4QGannuVEXyBA6",
  "key32": "4zSakpzjSYigvVAP5z7Po5ovYFCE3Fgo9nZiuPX8GfCBAHqXGsTCDJiNoHuTaCq77CXEAqCrrnetyTpoXdgdtzi1",
  "key33": "3hWAcQunvtfsQgGRUG3u1gRVTZ3ZC6LA7eBwj24GDqF8wFoPmP1bVyf7dM8oyKnfPUagtC9f4Sas2PUjmaoaxQEV",
  "key34": "z2yFewQJRr9pmYfENJWCKo2HRPcnsrLGTp2TSWmL2jzYfmNF3ne1kLbmPKPQQ3SQrtpXSLDZEX1heMrcFyHvBv6",
  "key35": "3vFaSKRRuSRsWCbqerjiH4T71YHYzYf6xfwj5qNUTGZo7sTB7DMSNSSsw9itubA76YTZMhMg5rwZhPMfh6zgA5Xv",
  "key36": "yV7c88UWVaZuYHuh6xCa8ESaCU7YPeDZcTzjZPqAv7fonJExjTy1EuBDYaUa87AgJUrSaT8UgZBVtvfh81yhLTA",
  "key37": "4bMjoqpPxjL1xChgKkPAFSA7XX94wENyjQ28DCbpbHgiCffZSKgdjyXbhM5EUm6zuRjGf4sSMsWUZYjHDFjw2Xa4",
  "key38": "4HvMVtPMtopMLvaQwARYLgYvDzo4d17Wwvzkmbq4vTS7D3W2ndY4gUe4rCaBtzpJiNVoSHUYPNjTKvdGjLYKPuzV",
  "key39": "4dttbD1kmpzNii1n6N42bVyyH9DwivpTxWwj4e9Hjh85avUgMFi4PUVZqBdykmrj6DCdypCQnx33uUECzYZcLu58",
  "key40": "5QKjACLpJf9K3v3aqkA57DU4HYV29eCAH4J1Uc9u19nXhZvWe4XM9BtLSMvrtaNNa67wuBRqfeyWFtHtjXHFGYA1",
  "key41": "2BgLfRf81Bqhve7WyUUxvu85NJtEDZcMENjsDavkSBhT7WewgpPMoDUfpzmwHA3Amrp13u8WmvBnrNiFjemLTqdM",
  "key42": "3mSX15ZKmcHLt3n4XXNtKYvFGFb34JeLBaN8gSpygHbXFUeVSyoqazuyeExLW9rVznfajaLBPVUCzb1iAxR7EDRc",
  "key43": "32EpYSzxicZFxMoejzfLJJpdDAE8VK7LvySigenhaEB7xJn7Smen3KE9qiSqAycBYqTpjcjGoHEjaRr7qsvPS4f2",
  "key44": "5NitUMZqgGrRL5L9YumH76uACwytMG6piXNMrbBq3PmPTZBbaj9C8gBreYv8L48acCBX8egL1q8ssgxsrmPVaxac",
  "key45": "3ovhxRQMMmeQhZWHm4WkMBJTfXzVNjmFfG6YhcMAeANBzSdibkakmi1ZoNv2QHRzaNeFyLrYdSypujUQpA1b4FnP",
  "key46": "2Yfi7ZAysYTYBxF8PiDz45b5b99JYX1K6D9wheeoogqi49ovcZorVdNDhyMYqdDCAikH4rWW4wwpTeqE5nMJrUz2",
  "key47": "3gHEdGwhgUNiWdeUf9PeDTwF63xWTaoXqhKwJojfeweTAiGNRcxT8cL5ciYa2e6STapDPV7u9wKSpevNSDBMwdhr",
  "key48": "jFr14nh4pZm4dJeS46tBiLh1pmZ4X6u6KKqMSDnhJrNa5Mq6BpCb43zNvxW1Ddrc1JAbGqBGNHNFeJMxLhGtgtU",
  "key49": "2WZtCwAmTNS1ucoryg46auzLrk9atQMP3FSmYk5Hist3XMQ9nYZuBo25U1c4v5ciwHqmz48jugaHc4fhU1kMbKF3"
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
