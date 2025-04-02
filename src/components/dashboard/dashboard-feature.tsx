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
    "2GA769uxHTfZ4RHhEZApQrEQB7Ukiv9WRSaKhFnrjsvM3czo9RLBpoYkRFgsp3pGNUD4JEJWvaeNj8mi8sa8zefF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7BbCYhB6yvwW4i9ekArSZeYTagFZ1BHa6XYUsRq81B9jgHCLPzF2VQeYuDjXjfY1eWjS34dkPKn1Kn55NuZwEH",
  "key1": "4nh9r7BX7Q3zanzUKP7idmEuiRJVHk3VxsBJhAGbzNm9gB8B9KBJbx27MsmVedmtY5b85GKb9mwBqcoz5ZEXk61z",
  "key2": "4CC2QTBbau69ykKpdsV7K1UodKeXDzJW755A18LoTTLCD81UxtKMLkx7wzbXbPknZU7VuqM3NVxsDZTTFP4mARhd",
  "key3": "4iDcLr1xX8B599MgYFZdK53EQ6H4sYt74mpSJrNfcjVQVSqugNPgSM86imN3qwduNifj6QzoAppNsSGTcLhQxHtE",
  "key4": "4meJRKA2mndTZvrrVPj15aMBuAbGC6xC5P8XdmcomBp6mt7PTU5gtxb7E6CuCaRem5YZV4sLtwMe5cfzfHuFT4o6",
  "key5": "3JZdPeDrL4FFhf6v9WZm3yfKRCCoVvdsT7i5mm9bVK5Hk6WJBJ6iEkQ4zZvAECT2aazB2iHdm1LfiXndVwXPDzaP",
  "key6": "4xGxixG8WudRf7RXcwS8WsZsAANztPvweQJzuUn2M2fieRG9RRzhEkt4Gz1fnBS8CcgnmNFgCHWbseaaUwbRvsxq",
  "key7": "2SEZNPiF2v7jXAFqAFF3yt2jDbsJQRkCTdRbzhz6hDdij3xqoF49y7ojQkiXmC8WeDvyY9GyKdJtDndCdEbZXyBV",
  "key8": "6QPJPc5oUC4nddK3U8wqTvxjEGD66qF3Dj2QtzLHGhVtYdGSnTMsHwebJ4mDuaTPL1E6oiBxuy7vTcd3P9NeXEK",
  "key9": "2a3VaiyNAMNG6x9SFyrMkY95Xc8SjvU9BuUm83YwGF3MCBF4zuPy5UgKvMDKUS2hXwnNQrSCCbKUakC2MXSTC4G6",
  "key10": "61kNjq9atJ6RaToBkKuy9YVLX9x4F4GPCo6XwEhaBMSQArogQxQGSSgzkNw9CgktCsKd9u8AeVuLAf2m8Az7oxJL",
  "key11": "2uBe2KwfD3S27v9SGLmhUVNfwLzciuVHvGpprNeRGfkoo9V34t3PxQJs8Fc4ATu7N3QaYzTar2Gt7P1N2ZMPdN51",
  "key12": "45eQGQYWpuLxQyB8V3tzzF51Ps5cWnQJJKT8cyrTp73yA6eDdPxKgnZgEMsysBWL49KFX8RoVFwhvVniY1hfvD1A",
  "key13": "2igTktTEkpaJfPLrTNfpLpPeakxigYNouTqy1pYEvzLvCsg8NTYmERgHCtMTZKg2Abu6BbfKq1SbkRfqAfjbaWtf",
  "key14": "fiCcqkaEyxjXwbXk7cwCYzUT16DNhZng2tdoNkaPQZpDfVFWREtvKEa7tVXturPHjAzYeebG7vTZtzGhXKWetut",
  "key15": "2T4okwMBUW1gYofvDsopWhKVeTafuXsTMja53Qt4jHR3Mxzb6kbgVr8UBYA9ELxe7dTeeX2GJeAz6EnLgauX5gLS",
  "key16": "5ysdAPA9bHt9snNonJaK47hvTo2gEnd6SY3oYjwom4b6eE3dXtKxu4QjmuhVBzpGiWBGkWUSpE9p7PkNBLbLy8vp",
  "key17": "61hjaFNk8cZ1EJ3jgTjgy9Mv252923UvzWNJ5EkRsCuu4ecb6Q3KVmnUK68Nc3Ezakc4pJ47i9b3Ha9VcjVD2AB7",
  "key18": "3WYhAkWGHxhkCHYLP7xy2a9AbDgGayUVbvAPwrtYbS2kT2t9ebXCeEYE82QRYQwrLQaYrXeTScGdsLjQjwpPt5Er",
  "key19": "5hBB6CeCSNze2pwn9XeuZXnxA7RLztaXCJrUehCKet59D3DUQKSTeM9DecntfQ62XPPhCJqKn22ETGvrXsmPu3Cx",
  "key20": "22Kh8ugRaSbMWP8HM4TngvFT9dm7bDBgyAU7KNB7vz3XMU5kh2Vz4BFGU6smFGgxbX7DsYPN7dSS8zvryp9yMU1E",
  "key21": "pGmukVa6nmdtbJEt4Krw9etrNtJSwt2ZzXeWcY8RnmLnGsvqz28FnwQ98QdgQfJaQZr2tXqHKK5QERR18RJj9p9",
  "key22": "awg1DXdF9EhmVSDE4YbfQjdsrHXqGQjsnnn3UoQSo49EPc4xwAhnukty1ZjTyUd7T95bVg77at31WEp4yopbzaS",
  "key23": "5CXh38Zn3AT3zkZPZTLjnmtrEY9zur29GRB1tCtG2MYh9rtaj9N2Pix2ZMfPcd1CV34uEC6Bha3E7TRX1KiyFR6b",
  "key24": "2umGjXM2MiLY4X6kEZXZ2Q3KyxQotrQPi4E8fB9NYwCqhRzE1giwmZqbnAACXhaFBbfYS1BWxpqy1FRzioPw9q4T",
  "key25": "2F8mdr2mtsDEYQnEwNCB3yJy4ZG4fgKhKYqVhkuMFNAZSByAmdqThohaUFcghtfP9qbQ59tGBwrLFpiKdsTSoVNe",
  "key26": "2gr9XTuEwtdavujYriynuqLbWSK4SRWtoZtMDWP3JL9FSyiTzELqES452426DyM3Lrz5wUrYPj52qdJrCdAtxSSy",
  "key27": "5EZwQrQuYW6veWJWbc3u6zezrcTW5PvuDVXjCbhu9F5HJ1ceba9i8SN2TZpWTrQu3uKZuxv7MxohBGumsdrcPedK",
  "key28": "5jMT5ZRnxCA48V5rwPhyisMbKnHktaeqMNUBNDruhHjKknmnnS3bCWiLmSk69qTsg3hKv3B53iPfJefe2Hhc9Cxc",
  "key29": "2qn8UmMg1D93z3VZ8UvpfrSFhKmijYFWbV36i6sWrVuTe35oX46dhF5TtBeSiQ2dexZvzEpGtm6jwg23KykkDmxb",
  "key30": "5wty7tM598rWfapv1NsGNoizAvzUcUH6ES7wvdTKMyyLfe1i5kXYZsAH4Phuubk3idhUGDUoTPvVdWWG3pXKzWa8",
  "key31": "9XZ59Xbwe4m3ATzPqmHRgQM8RaN2e5hk5nwXmYhDugWm7K53bLJyRiMcwVVxoW1i5qS3hHqBQhzmH4RGAJwmf3G",
  "key32": "2t1bbu6VJDt9eiPuRKRJ7rBVWypLG5tSGC3cZr2yQXaPJqDyTq9NpNitm6iqXz2wqKSqhoFopBuxEpd97szBWQNJ",
  "key33": "5ge2mTmGETPxLaw9WxsRopFN65mQ9ZPnNqeYSyLstodeZ7EnbiJmTb2FrSsJ5iMfTx6kCLYULUbyeLvv8TkLikFx",
  "key34": "5ZsEdhfKSzMqvhYqR1JkBZMi5VfqZGGjZVcHzHd6uTzkF3AT8GsvxGfv1zStz2SQnWXpUYR4XaWwsE5xtpHSedGC",
  "key35": "2pvHUtyFszw1jnFSaGz3Sx4HHdnZ1xTL7aDBtSTaQJT73h3cJbQWU2V2vLRSPUHEStjyQeVS21efBXj99DBbJWMp",
  "key36": "BDZ69qVgiMfvcUB8PsDkeceMFeYEd9hDewJCwcQVoRWRu3ukE79pDELJrFySjoWrRfMSuUcTRDorGa7HY9Z7fJQ",
  "key37": "4sx43yRYvDVJf3dKuynX6mKyncb7U8uTA9B2LYZRG4UWaXhkvdc5THVtnqEAyc7vSQ1EKgocQCN8dS16DawRQnP2",
  "key38": "4SfwcHAFSRPcoccNvWy4JHJUfnoGCawRzuHu2y5X3RoWfY7xTZwqytbc1pLhoLuEfLnHU42utjPPFtY6mht8cGb5",
  "key39": "Sp8wq1ddgzxfCtHK9CufX8JruL3TPV9iHArfnWsY574EPNLWY32P7vquTY3eXMbdGF3Pi7MX42q8bqaFfxyG3nh",
  "key40": "TN4jswbHw1MemotXbJZ15DWEDYaq3Vv98khMaohyT1xLkX6MKYXySvjvbSMi2dWxfNBgUVNyAKhV4WJeiHVuiZQ",
  "key41": "3J3F1qWMLKyywYnSQ5L9cFAcsQLJKCXMQ52UCBvw3h37jR4fRAGnnsSyFnqTG1nKgiyXF2ehY8WotnRdhkEuioFF",
  "key42": "4TiUJvmXVvH634PaPzG7KCBpP79jDFYm15itqyTVmTVRB8DK8Z9SV1vWPWdXbGNq7N7sNvqku2cwEREG8LwFPsb2",
  "key43": "4gmoZRTekfkWihNKgWwMhmbbTkXcsqUmEGn6cQfVpHdwafvhC8arZXh393uoVFhpi5VbPbWAnrECG2en5MM5s38j",
  "key44": "3SRn4qy73i5ehKiseHH2tqEDdn3KEQATkP2ceDnRAPTGpNqsecfEmtAvbxzXqfNDspu2dXYhmxhjpGMxxykh1b2Y",
  "key45": "5mKjMDoU1kg6My49hs2H2t3CPCWgjfefoxfY2sJzfxCBuxUjcDaWFRxUprDBpsJ5UJKR5eQupRJ4eDhYoHa4XJ2E",
  "key46": "66DijnHk3MQVh9iH2MuB351D1JX5E3MjeE2mGYUZPH47y15ib7JSuP8jTSTTAwZZ4udNpeoVpYUqQhXRRK8rQx4h",
  "key47": "gATSYoCATJxtC9mwmy7nCUHNp5Jrnt7CQpJH6EeicE1w9KX9Q8qfaNyk8pzT1ALwF8Vwr6efALV5oDRwrMTEoRC"
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
