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
    "6h1KhKdx9Z2Rv8jHNvsJdRbi1YirsWEC4wW2hJ1S6whsm5CYjGGPe7np3An1y2MuH6L4s1wgwGs7ii3HK4rvBY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9QVNSpYo2i7WuEPye2UCg9X8S4iBMREhWSJeWUMWXS8hYkPUyw26SwWcBQb7cT8u8yF23KHvh2iKgnzdx1ZMFv5",
  "key1": "2T1k7S17UxVCkxb7HijKmTup4zKzRDf4NhhNaysS3M7jv8QbsXgbAqKFBfE6AMqS4pPNJKzcvFTBFZ4221qrYrid",
  "key2": "5HWK55UNQrAGZNct6V1S3QnRi4pUmKTAHkRsVkFaSTt1cHiiBvX1dt7uPLduAt9m5KRENhAnTQosKT1G2KJU3SEk",
  "key3": "2CCtHJ7RVhUo3bFRJCYyToHj66dgkzjsJ4S4w1KkXpKhbxxioDTFf89gqyWtq5NUq8fSbyE4iidRgAHMZvcyEGtD",
  "key4": "46SzH2cSQUNbG3HBC93CGzrUyNKJvMGVSKyEq18mbeVMfMVrJjUidenTboP6GKNK1hFeE1bXNraRGhbDbbRhQchM",
  "key5": "4cBPtMxVN7mBBJBA4RtwqhVwzVRd8Z7LpBzuCTc4HZmekR2TizjmKWF7zcfUmFSTGji79iPrwpeqEnR6pQeaJnWX",
  "key6": "3xqP7CvtckJDugsDd1KupbvGHST4EuaZE4FcvsbuUcBDK661WdXFZSBMMKNwHewpon8fc92j58vfydfVnRVrHQzx",
  "key7": "4wGMSH6WNfNKfeUqmFtWkyN3uMvdijkbMuzNE9b7m5ATiFpP1FbedT3qDMfhj3DZDLHmNun4GYM2LxokpagT7ckF",
  "key8": "35jpVNc7oEFr6MQxjD8kHzaY9puN6fC8sbetKhRzfvQL5i4P7waptpXg7UvKD2jGsqpm3QSpWXw3RLxF6eTLK8zF",
  "key9": "4QJNvF8cvcUKRSuw2oZsMEiScQ3j4VovNCBTid7eWvWZmiSChpFvcjJnsZLNpGJQjt4sNKz9DHJ9h4jpgPxYBMRj",
  "key10": "4kmP9zsVFhHJCMUZzbugcXpHXKh37zoQWRhNCyKALQNzZwnQ7KLeMKhUNFsQrp8gik6chqABJ4ca6cwbmHmq7nNv",
  "key11": "2ZjvmWNnJVXso1ebva5NALhuYouui4pGSTww3sWrvbJkwkQuZYLAsDtWfN2w6vYFKp5H26ULAYBzrAQnBHRnUXKN",
  "key12": "5EneayUPDqLgHP1gJS99pndZn55x7UqEf3x17zShTBi4wrm8t7F5Afb1UPZdQwxKtvnKFy2XzJ48J1pXhctbWiWt",
  "key13": "4RDhRnUWV94XB3rCRSXPFhz16LbedtynetH2tTcqKa6wKdzkxebMdwj6wZQnuyGZ9xKUoALEFCMC97Bt2Gogrmrm",
  "key14": "4ANSxTXdT8FiHeZEzac88qvzsfGPP4ys7nTNhWrNHgRp5rUkSVdMgcULFxYssqra4PYFAh3xQQo1LQyLndyDzLC3",
  "key15": "3YwwERMJcxU1bQYFGNi6gePcueAYRRXFz1zw7Pt28uocwtzQktYWYQaqmEba7jkybcEqJygyGjf8zzdQJFxvR7w9",
  "key16": "HEnvXDiWFmPTgzaiUiqgVrbL9jwWdgwNSvMjtRXhEGYYemVi8ZGpGktDCuLJVcdGE6Bwaou1fZQReN4z2h2VoPr",
  "key17": "5tJzb1KEpd2cEdy1DqKbSB5bLBtLW4a9qG3iWWhQhjhXUR8VArhCpDHtbKnbafa5wVhnnJdU4xQHz8fWPCEqT9W2",
  "key18": "4t1i4i9eK3gxgmE8ZHGKzge5pjVZuAAumryRj8HCoDNy2vqfZzckrqH68G5fbJpzJn2QcGtv71BzfFGjD51m9xbP",
  "key19": "2GM3TjgEGZvFXQVrwD7Prnvo1AbiyfRSVzwL8LuVjWyXZfurjPNRHCCDzyDW3kEQeL5Wuqc4Y3XGkBrBNwAoYXJm",
  "key20": "nXzyJNgNQz8GTM1sp1RVZTHciajeUPs429WWUup4eovAY1daMwUVRonBk1mbQvW1rtL2TZmyERU2ZJo1m1i198j",
  "key21": "u3jKsGhh4TvZMGPoTMfnptc5KHdUqHuzZkUdyq8ocNHjS6hdXnEJ9LCwiH7GLXKAZjjDiScowHW5gdQaVdTiDh5",
  "key22": "XFhjSK4EaL9jg27nM82Ln9SWT1tsa5eyLEjBfTcJzScJZKfEMq7uBdoMYL9ZTF1GMR5VcLVAahvJJ6crvQ64k8K",
  "key23": "5sPUf47jYburPaAVby8yyATEtdMajVVqDvyYwojVYdKsc4pQRo4niKdd1np6Gf6bQs9V6g9GA8w2wggw55QLFJZv",
  "key24": "5BzVfMByS6w9G5jPEzMH4Zy58vByFn4ReyKg2ePQdn2NPQb1ZW1sfL18yRZZyHqeE62KkyUuSAtwiW8oLJmHNghX",
  "key25": "4iXXkLNazRc5hqGa5DpsbSwAgLBxCZXodxVDw8fUhx7rppVrfbksBsu8FFcVd4JZ9oRxexUfycMsWBHprFXqm7XX",
  "key26": "21PQhbpG1Dh8QEMVwrXYPGGyr9w1ezpcAWqYTeEXmjZ3Nf9DxpzTtLm5vg4FHYCUehCg7vZGNBnJNGABzdJhahMK",
  "key27": "2XbNoA9jyi3t3Ki1q6KbWB1C1TyLbXXjXnMWGaiLdLBeHuQ3HxLSG9p8jDirwSAAgED4QVagc2QmPw5pW2YE9MH",
  "key28": "5V86if2d5THMzC4c17Sr5fQVV5hXmrCL9zUrDhcXkt3ysyWLc6jNm8iZhygdEKTsca4uV2n2bCx6FqsrxKML4527",
  "key29": "4MDYe3XMJ4kZYH8zK5Uqq2nwNQqMFLbCPvHpxE3ARgFLAm1cAPNo9j8RXcGFMFAiJXVCxjbVYaypmJcHsUAN9CT6",
  "key30": "5wvDC9nwzjr5EvFQ55SGXtjwhNLMdpL1H8yztjMNGQLhKaLv83prKGU9BGVZ3RKfcfr8QWgtpXVCQhyUhK62H7oH",
  "key31": "2iBABBiD9EHy8mZsV6KGZQYrNbZEZsQzZksLDdEWD6ZZZsur6gpsQRq8bXBH45QJtxsq3UZAkwbc1a7Duw4h3Utt",
  "key32": "2eM7TmSmLA1SNZ6wTi6Hc5DPg3nbfsci368vt8ZEnwSPMVYQbw5aZozHwur2ZwxYaMSqM4xNikr44C4HgYczhY2D",
  "key33": "3wfS1xoCWMLYPPxJz3M1SXg6gasVZJMBKEvVDSNPQefujLSk9QNQ1RjmN8NeJinRtj7mKgKHFUxbPCeqavVthuVm",
  "key34": "4heJ5R84dapVqtKVsCgeJyccbxkXab7vYFEUnSXTk9fgaag7teGk1kUn74XxWJPuujfmdu63VhXsWWFjuS3Vbkpu",
  "key35": "3xVMNMoMsFXw6SJYgorAPPG9hmSuiKR77onCHzUbu2MacXkjTrZZhdw4HaV94rrVrcDWyr4xd2u9YtkWAD4astQH",
  "key36": "3dX8sZLMi1VkdrUaKd1R7s32324MdRkCwFpPAChtZA4RSwzFyEgqkpRH6df9Ek3WxULrbxPpLA3tvPZjPYcXrtzA",
  "key37": "yHWjnj6UnXwzDP2P1aRPKJN8PTmz3nF5xFRktAHefYkmgLJqSzNuDYyEzXfnt7Cb89364QEuMeqnYF1V4uCAcTx",
  "key38": "3MxEZBLYBAqAp1BEYSqR3pvzTePNKMyyTAZFWVFyfm1AhYWiUQh3agZQLp1F3wvbmSoB5mXeJj4Kf5wZihGBk5Cd",
  "key39": "tqSTZGSoGt5ALVwfmZJRdngzQVDWTjtMZ9t2RWGNk9wxmQXyiTnG5yYcHFKgAs4cbscbQzXcsgew8dnSAgzfGnG",
  "key40": "26qf2b8D9yAwQvfKDoCy6qEdPZHXopnMpxNdjHCDAmyHzB2j3XcWfPnP74qgEZTMPBniZstxNeBEe718Sh2cTgE9",
  "key41": "J7DLk6EHXrFx2yQroKyp1wC1r5dVcyPb6PPmgchXPMzR6jA6LYHQTcHAxvibB2H5wLBoRTmY1tSBbisyWfVj3C7",
  "key42": "xbKVqtabYmCay3Yv4KWapp3CeN6Z5kCmw3wKz4WDGpatjpujhYE4iD1yRRFpR5s7syXkhPZ5tvtTg2cw2obRFUR",
  "key43": "41uFGeo6U7EunQ5fsrCDimWyoE6DKxWRDSX2XDvAz2tS8TPwUSkYmFFjAJgq9jKRG2nFyrWwc3ygZeNkyFr3Ldsc",
  "key44": "CAYvifzJ5tXNd4R6jDw3AS2YStV4bkJ9Z6CKitLXkUqik61Yih58mVo1HCekctcjALsRjctP4mjmZnoVxCw6bEX"
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
