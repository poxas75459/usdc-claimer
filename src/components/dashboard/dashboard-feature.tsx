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
    "4ktTZ8pswJo8YniKqmTfRnn4zHtCHMtu3FWnnoWCTdJXm3hg1rNGsJRpxK41Axi5vzpNieVEMssrWEGGFPe8moi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DpDN3PyYAkymVx8QrngiistVpbQLV8Fh9LnGGnWV1sV1XifZvpYCT6YAQH9413WWrPUq6mgpqwag4HriWvruPfN",
  "key1": "3jtfr6HPwH2CHTcH4MexZd4MSMhgiSvp3tSNRNoxBVetdopGdNT6zKXkqtwiFNffGjyKc4bSm7MSmvAZ8LmhTdsy",
  "key2": "66vbm2xqfgn13u5bD5YLgNn11uGfEHLPAQpcAaA7FkkPexkNb4gHKjsdN4VkFLQXymS2sai5foYm5K1JMgzX9fF2",
  "key3": "V8TBDuvj1DfwNCHRiVMnPg61aCUhmpbrAo74AxGqLVHdYmvr9DUrKZVBoKjidMfrya16Ggqw92BXTpGQktLFFdr",
  "key4": "32aWMASgGJYj81Hx2smT3bKfbeXoUPmDH5hx6XyHV5bpkqVUQSqVoGPYfMnRYZRZhBDfRmi59N3SHzeMRP334RVc",
  "key5": "3xpuP5gMHDrVbbvRxVUaEXHtjDFcgGoZSyAStVocwz9RksMDQv46uuurbUdrbQeimohHdbuJRVzP8By8TcfGTdAU",
  "key6": "4FC7GeLvacgq8j49B2tGuV9oKEQyetTsGbfQX5GB74bFHDRj4CTtSwYvcoRPrj8ZUhSyaxX1FrE1C7Wj1UvDWCfj",
  "key7": "4LeWKo338D684kjjNnafAv4gnpCXDRSWCLkbm6MWFdM2YNfDeBJC2NckDpRdbaWmhQnx5JqJcDBWMu8wHwPrkabN",
  "key8": "5jJ7byM7iHCFrHqzjmRaZgSjcJZ43fBxMiVYv6vjt3T34nMk4GuT4oRyWoe5WEhUscWwrp8JGnbvHyTXVeKx2Yt9",
  "key9": "5CfDdmE3Ta2PfhGi5p25RPrCvznLidk1UDorPCh5pjiZR6FzobxDoLbD32SdkQhhUuMSt465DM17dBBdhEcPZTvR",
  "key10": "oLSF8mC1en6WzzTbE39cffmch39AY5b7SBFX4hAn6G9wSsCNMqEh1UWKYcEJu4qaHSu1ozNPnEjnHpSoTTuVq6T",
  "key11": "t7FSgUe6aNa62NnpjvAy4R3FcZ1QQQ7pAQoe4e59pgBoQS8VxXwzJCFeUMwnmKkjVdtYN5qu61YeEKoxKrk1Dru",
  "key12": "62tQ1p2xuf3hZjLzfGjWZSsjSaJgD5WgV1iyzePe47haxjiPn6ff7DWNNzdu3VSwH7Xb8cuDCTDT93grvWMbhqoz",
  "key13": "3ihWqVPSp7AA8jLfT6aShck9RYs6LgKBemN1GZv3dc5q4LQebbwzEGrHMLj27VB4T7JCGxUEGfspT25qjNUkAxz6",
  "key14": "2gFhFSscpsvu69eGWPXkmE8obsc4AMJd2ZQpzADRbuGutfXpU3jbGi7RTuTVzgUJCr85iXBsrPp8bW74UV8g6KwT",
  "key15": "5F3p4AtZ3w4Ze7s3obWG7rhDuUnMTMkSU47Fz19YsETM5N6gXEryW16neCa8WmGX3D51No6eeb5fkUifjmunvxHv",
  "key16": "4jSmgfgS67dgCQ4dTKvTMbArZFYbxkgHkUtnWN7Nwbda4Pp5hNgUwoyXMY2Xgv6QwCUESBL8Vy9FCW26KRjc9ZkN",
  "key17": "4meKKNpSv33KXcMzRWQ9mQckyrspL2MeTpPCcuKqkmd5pwCDELr2ZLbDUoDJqXRAxY9BwKzEQ3vt2HnFh4HLAubt",
  "key18": "59oTqFxgenspkCgFqM9wBzx8WXU9dc3NoWPhCKgSiXvRCXi7sjkCZNnzmpnWuHoY1VJ75LWeg2VSB24HT8Jh4g2t",
  "key19": "25tZRNDpuqMqEqiqu1ksUH6pzrudkjCsQApGrk6af5MTFGZjkGWueWGw6RR7ZgRRQ715A2hpw8V63ZCT3X1r587A",
  "key20": "5ri8uZvHNX3ajzRzACCTHKtB8agMKqeJTN2cE6RBXkSp2ZwwZqM5BTnTNVFGcC3biH75SZzX42SBskgDYkTyHFJV",
  "key21": "5U1hZTZSNcj9Dnpge9wqmYFoV4FjCf3Td9mehkaGnfRQ8Js59eNHDAER2FaUjNXhFGgf4pHaqmC7hPmE1orAqpRH",
  "key22": "5a25dKmu4BKoPsWh3hapnDkYp3oaFtorFZsUdPUUPcH5WH1jGYRKkaXwdwVBKuxr51rfBpJKAMwwQHHcdaJ9bTMY",
  "key23": "4GZgqW5rohCBntdbg5KsFc57Q3QV6qgPmvRR6HvnLHWF597NNZ98N1i5F7jX7K3GhVcrgof7eEEj3hwyPzXG5MZu",
  "key24": "3ibf2BHgc7GJAR97nZUVwjiuQefRL9xhPrCnju5DdsWRGosVE4U5LoxDL8d6HFZWfUtoMKHUezSryUvM28dAsvwk",
  "key25": "2WFQE9VHziJKddUPpPtN6mjdjWm6PF6UWPfpkFvJTe7aCYG6gnTcvmuNvHNEMTRZiTrjnGRqsUtyCXcfHX7heshc",
  "key26": "C784Sh61J8REy4fg47un9By5BqbfZ74dEV69zjcX3vWTfhjHdec4atKnVEeuFvYurQFLPRvSr2pR27qaSnY21EK",
  "key27": "ituWzkLd2r3FE2vnVrRRefCZMux3tzxTVYRGyoUhdtWAtRBVzcGVFM8X3PPqjrx7i9TUK2sRDM2im4g83WMQvN3",
  "key28": "3oD5H87RvMHftooX1keRkpixCoMgftfAZ81cWMhq3WGJvstTomWo4mv7Kq93ZrhEKJaL3Cwnmp7qhCX2fSZmAVqw",
  "key29": "39jLq3tGkWsqGD3RAkibs39eetB2crmQLWdLbQzJnzsZVtkVjQkjohrpzFcGqBLaRA3sgggKiDHL33nLyhZtf77q",
  "key30": "2BLAzJSoVdMZrQitbbJXpt7TPFckxFLF1S3wc36RJdUEgSdG9t3ZEPtK2TAEbChajNfrfBCwX2ptHxot7yVvrARQ",
  "key31": "4EmHP1WZin3psXeoo9J7c7D8Amyn8EZh9Txfi7KnUaGdGPVVSTf3H3UBmvY5nXgHo3wC9m3n1J8q1WyED5yzqCvC",
  "key32": "9WFvWbsJHCXCGFZ2JXCYVVmmFsMbhg1ZS2YGPYQ8yowJ3PjaGJppBtEMXkKNSdG9VBYKtosS4cRMKJfzk1Giy18",
  "key33": "3XMrETHe6Fxk4vmXFGpAjJNMaFW4rdwb6X2mtqw6qd9c2VgcsagGkTGNrfw4Une1HkEox5AvwDCpeVNxqFGWiUFf"
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
