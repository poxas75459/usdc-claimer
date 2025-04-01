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
    "5Ht45bWfqtDTczUtkdLEHj9S8HwrgHrH7j7ACBL9fd5UgJJAJ5JN2QYT7dcM4TshfhB1EwnMvd5M4N5C65oCRZyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1HsZ5kfSsXtxGXqqhfN8WhEnQN9asDgXMXgRutqGL2LK8FEsgn14aYaJ4diaSoK22h3vPEL5mrhVqrKPHmwFBzw",
  "key1": "46hFkM8K9nQJUKvHDHR4f43op6LzFSVwFwXdXSotzMGkDKZVmE9p7o1K4zJkmUQfKfBJmFa4AbSoiV9Xsz9EVMmK",
  "key2": "5G6N1jrSyc5dc7FxNSwrHqNkqZyVatK2CkVvafREPytMVKBdRarpFsq7zLbL4fQm7KF3sZzwBbiEGQu8bfbs87gt",
  "key3": "2X4XhXDN4XXkQJo4oRTuL4wf7kirfQjjLwt24PbsqEBFBpsWJkujU48FSFgDYfVciaDJsxxcXKigTsKfBBkyo5Nw",
  "key4": "3dYjBVj5FUFxBF4rAX7piS41RYkb2nrfj9dVuDLvxSagkE4rXAPUYgpGmJVgqZvnBBkALNQqTVHvEabjtf3vHD6i",
  "key5": "4XBcgZynPJ59KSEksqKRaWJVrcx8psEaD5S3uKtAXZaGqZ3AweWe7SD1CjpYuq9m2V7JUc9nxndZPYZXL1hi5Qov",
  "key6": "2roaQnEo4HWCjVsuugPt21HX4uKbswvtPM22vDqYGaU6Sufs5J68WDdDf7BJYA9v2iFyYDeheawywmw9GgFU1MmE",
  "key7": "6GbCY7iuE5bBeKryNY4Cq7QoEZBa9jJKioTiNwsVaRnm3CPPj4J2aYLCieNWZSqnQW6UzGZv1PVgipbYxZtv2j4",
  "key8": "4F3U4bBTR9NAiopmzTUT32WE8ooXheVVEDSokgd8BgUeLfAyBeQh4ag6M159aWSrwoi9xebjSge9UQRZkejMdmeb",
  "key9": "2fXafqBUmFWVtDVuqyhertYezkceq9s6Gds6yc4jPUt96R49kGsbegsdoiYVADZQnX2QpcMpYQM9pFmjsZJvjkZu",
  "key10": "3VKWbMKYz84cQavwtSTFcwmC829y5Rx1NQSyx4rSFHtx6dLyNL727wcdr7ZYCZC8SPKPHLGuqGGuuKzETCww4QfX",
  "key11": "5QQp8Z8TppQnzxNWv4UA1BtypJrD7HtDeVFCfjUbfqERawWdCCT3JjZG1bh1AkNeqqqgw1RKt6Ktm9KSB94KXnib",
  "key12": "5d8Yw6VJ7bn9D1m1Tu3StxHvwrYzDmXknftfTfSevbXqybwfFfXo6wMZN4Qgb1pUVQB3KZxodoW7fUnxcab59Dzy",
  "key13": "5Hunt9gpqq5wpytkwVhoF2AbiyGxuYXdqWDzTqXfdnoyeg5Eh5ZTjgE5yRoSa2YjzndKcw5A6wuXZiVeg8KDvHiD",
  "key14": "ddR3BmC95LFmsH9y4865hVA6U14ChQq8auhvKMW2tVbAkphXxFxJMdirEXXWN6ruokYBDck3bsDGrM5uSjEKpME",
  "key15": "4u23QyqreoC4iEY4gDZ2Asih7bdCpmMVGb5gHWhbzirU9142JHh79DtA7wtPZvnBb8MHPPnFAhNZQQhunBBagJMv",
  "key16": "2XufSxoasNEcYq15ypt96WNGRuvxLpBH4UPuGyEigh9cAQMFzTAfCyJVZs2Qoto4RCFMt9rFkYym7CaHLP4PTrVR",
  "key17": "4HEJzXav3JyTZ1wuqTXf783TTBbMGQBgYvhZYrwjja1w4nVS8ezA169Q764hAhZGgJ2tHa9jyTewgM14GmVotTmG",
  "key18": "2Ea2K4b47cfYj8oWkp9rUjF2uFMeLmRJmSbErgKpZHz5duqU11r1NxgAzH5ui7NSGRqDRmaWqKRi7h3HW1cJE6se",
  "key19": "57nbkmDBv3FLv2ahDD5XU4JaWu8PrmYBxKqexNBwkmxoAuJ9nJcWFm4C21zsbbmrr6fdZqcvqV12cK2GuSkwjDcJ",
  "key20": "5A1GFBmBSobNgwDa9sarCffA9SsLydFFYZT14kwDdHqLrcFQyuHLsXGDhVrMLw3TTx21fE7QGF1WNByfut8mWuq4",
  "key21": "2tZUhRRJ3F6yQj7BxcDfEp6pBELJg5HtM8N8BkApoBB9RBr7iPhhAvPB7nrgs8jcyVeHykLvhEDgZVhSownUzV9k",
  "key22": "3SsBAynNvknJSYkG2tjwd7bzjFWqW2dGr9XEKcVuQa6yZDmwRLvz3pLUapebEKdsdSCS3HDjfbfjWq9r3CEXWxLG",
  "key23": "ijZjGNTNBkHf9pGFdat72ZnkHaaXkNoVshkES2XZpSr8asxJGB4ZnoD3xbTbqNpsEdTaNg1P6YrAdAf8VZNjiA1",
  "key24": "57n4ZYSyesZq5HXpgh5M2qYkW79LRmeGd97Qh797ZFY213Pw6js9FPwW5wv9uuorzcRTvi4oDkopj5YFDvT7MLns",
  "key25": "3wFmzbVEeT3UmmyR8gicfnMWuxYuDTK9f5RTUTQHeUvTfHDRCwNopeTwkLPzdVXXb1tuvMEjPKzvqGUst49VZoGV",
  "key26": "y5V1HkxSZvNjxzM92BEx1ujGeSKmMBrQ9hRhdqQ2iuG3finZw8skQWKA3oLhfTWkULRgNfY94AZa4MdvuLW3Xht",
  "key27": "2DV7wKKYgwoenFki8RF5ge8hWPhCJs3E8eFfFCDUYnu2MuCAEuRdLLx5vaTtNxwmobRwy2JZ3WhAJSPwb45qjgpy",
  "key28": "4zr7hRLVCTx7Gc613WFJ8KhTJFFdvnHazRBAUqywNaXTN6yMYjL3yVw7xkM2NJyGNpdEhWbVbP9QcPUEezkxetch",
  "key29": "38KjP5qpGbCfXfPgmZAKWwUMpXNooi3P8ejCnR9jCE5ZipabzRR1qLtcksYVPDK6nwFLMwYtapwAQUWnXbRsDNmK",
  "key30": "dP7N8GLZvz6eyMVzLdbdDJjwuMqMH64eNS6MsVAssUqtUUooTYGS362BC6FkNGXCRqhBJTPZNwTXu9tpytvTuGN",
  "key31": "3wnVv7pDLYmk4YmZETozhUQKfyKnAeRQQPDZZdK99eDVBZDS4sKrkfhAniNLYoFCSpVBC8rhFaRmd4r19NKXZ5Vy",
  "key32": "4ZRZzg9x4ehL4boCJFYvRsauJT8yR5BmNFKRVNcjSpX8UFGnL6CXiEV2RLheBamut5jaMUBk5cJ2quPBF25v6Qmz",
  "key33": "3X4K723T3oPaErMfPEZyg7KjEsU8vFQxTQW5awitAHQpJ7XgkSGdawFsVvzmnBkucyeM9RwG1vwa2AdSpLVDPKyZ",
  "key34": "5ZJwK3MLzpvgSAZoBwAoXngMBHcHB8BeSbR4VRNKAW17oLzcKefh5ZKHYCSXk1P6GCDWizg3RrnuyyQsfGiT95pP",
  "key35": "5yfAEM6jDpgfo5oGVZrzztpA4doiFtUpLci9yxxBiyE8Y4foKrGr6LBmzLDwW2aMLRmiSrHUC2jStCGj1nJN83JG",
  "key36": "4Af1cVqBrkPToUfnEpRsgHAdXLW73U3YTF6jKwMsYhHxWbbab9fd6QoNBM98dGLUDAovKsrWsJA9CUFv7dnPYNBs",
  "key37": "5CMUi9pinCLKMV3Xrq8TCCETf44yTps3eCy821suL5eBAhc4yh97PALmQyUV2jZdjVdKdSuGiuwA4QzRCSnMqmxx",
  "key38": "5ivD7NRgwRNTkg5jLwKMARcCdUDzFBxDr4UMTAHzugUvHgpS5ZuXCa5CZvz4GeHdeWrtQdXdnVEf2NC6Bpev8eTW"
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
