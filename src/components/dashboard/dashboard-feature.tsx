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
    "4K2mrNCprLfW8E932W372xjqFB8dUqdr8fnBMVuYZmrXxQ8bqpj4qDips7BJsxSjreMrHE9VQzfwBnuN9xbGiETM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exkSpuYMdn2r75aViNftqW9GEqBhPntR45ft3uaPoCXsJ1KiVCfZMNsAW1UiSTEpJBP5aM2dsTasoihivoZKmAy",
  "key1": "4kHEdFxp3Xas3gnUqCz9tjmePhMyejdTmz41V4hhYYuWW6J3QKBTAJG3TpDiPq8URwx2bWHTbu3E25YYEz93HTXF",
  "key2": "5sjPXtPDaxqRhftK6agmGJqyVhkWBLg6cxoyBhCij1M8sKaZChjwaFa3uEzKK2gYGpGMmAa4bfvFQn4FWnxowSXs",
  "key3": "3rLcBiz3uarhhY1VNtArZNMwrnDMviKBSJEGodAdWyazxRz24KpP8xoPrg6Q9oWEFJXBaukzx1B4fVNBRzHUbp7z",
  "key4": "5ESQ2ZhG8kXnxCrhJCBscXA4hh2UyGZVwgRMRSXz5Ux1Jn714SMzDyyxsuoQZdYuxkBVA5oSq7cakoX3aiXxLNrZ",
  "key5": "4pBAdQ7w8AcLD8ZftXmyNCPaYii5qwNwwCYqWZt2JJsMqAH6QYqS1BYwLa3LSemMABiEh5RSYXrhXvs28foF54nf",
  "key6": "2xM2TTKT3bkHF3Zji17ERbLpFscyTzybxcqLJbDm1Axi3VP371QnTdgjvAhCW7wPQ9BaBZ6dLwWW2kbSyE5qSNP6",
  "key7": "Hk5NFBntZ5sPxjxLuAJHMG9Ui4zxTs29u46tT99Y2YjFRqyx4rEeHxTTTEhzNKjHZ73HEK33ZaqrgaJN6i8YR7Z",
  "key8": "2svqDz2xfbZJwY74tAsA4S5c5MgmuzJT2QN6hb7Xe6BAj1yLVfdP88fqEmJCGW36XumXC43nsrPSCG6vH6nCUB1s",
  "key9": "DJvscPTMG5jiyhXaSdpzHWqvpTwNNuidmQLp73kDDaBzVFaWeuU8sK4notvBeQukeoNgnZ8JN8mUj9A23WEY3Fy",
  "key10": "3T1a4NDzBNA6hDeiz7rXfkVZcN5nZfW8RA3MpXSE2vWrCRh85WbYpDoY3ACK3ndu1tozgi65b7TPgAZfV9BBzg3C",
  "key11": "61938euwbzLfC1e5YHfwDCeHs4E3V3i7KGoBLksiur8TWAG86W6YwWpWYqG4iSrGkm9P62rJiDCdtLDShr6GUEq",
  "key12": "498RGHn22SS4czNCq1vHqz3xZMFpimfQPigQbZmhDoTdxoF6UtjvdRjiCWSFPMyquSuGTJrREJsW5HbL7SsTXWVH",
  "key13": "4kEiQLKWb67osx1wAD591CjgJnqyetNxkwYqSbdRox78L47eWv5Q3vKUnFnxfP3DjAH1owYG18a4mZLR92drt3dB",
  "key14": "4dCu1wWkgeJz9aiR8zA9CsmR8B14bFmb1F3BWZub69NADR6RaQ4gQxkuSc2iykrbcqqFKRUxwrPcdsX2KPKmVgYa",
  "key15": "5zoZsodxa9h2GufaJeFvPmD6q5ubSjbehbDVMuzPe87fpk9njG79gtRrt2tSctpR5C8ByhuBPL6vK3AynRWGtWtX",
  "key16": "aDoThmZ5EXi4ZkVnZGJnRJPZyTJfBS5ei7W757soRWiZoZzFZrnpJJT8Gta7YkZ8wjZ4B7M7YjLQgkJcW193rx5",
  "key17": "51uxGWk9VDchagRAXMFwyC76rXxg9A8tjvVy8ZcCBFQHURZAJZwbbQUCE2C5ZeiwgXcf4f6SLMpj53bfyFKEYiPY",
  "key18": "4h7Rb6xA4cSVGuwLd971yba3opHG3Y7AUHVK1BcsaE5FeAE3QWpjQWrbPBdceGqtRok4Gz6yFLbuhF6N8kTmsKjk",
  "key19": "5pEfzBH3KjNQGeA8bo2hiuUYVBFBwTJd4TTFVcFa9731XXSX5UfqgSdV6zRJq7tjL5tBYLw4baLrbL36AKp2kHHZ",
  "key20": "3UWFfwj7kjXtsZLcm6TEqV4sAAbMBQh99zWtsKauK4t681M2PMKpsSWVoksqhWrR9iP7kmYZLE8wgiRmVo6FFnMv",
  "key21": "3JcyXjtSgoQnbQTyvPX69bYLBzJGa4DycZ1hDqKpFKgGRNYc4DQpxjVG9apYd3UbVvWyXix3soHD6CYnFEPLqTfw",
  "key22": "ayS6ySCeJTwx8EZfkA2f8UVgRYcE15mcUdgoxXfzCMRX41gedGpWL79hangypH6toLSDh4PNmW8CWRHy3DA3NSa",
  "key23": "5YuxK5afty794tr16BBRZAFnkrBc6KGcZHGsERrUAp8RphXXw76Fa7ULxWTvXAkFFB3uL7A23sG4p1U9VpNHZLaH",
  "key24": "5nG28YTu7WN2frsED13R8JTvEbigHorhBcUPEx2ojHKGGfCcRQNam3yQ3XxmytqapSxQajB3zR8xGHPrU3DhF4qL",
  "key25": "5vfu3CgtLqB7u7XnXfCEPGQV6oBZEnhCP2K9ebmY6UshmKdHLrnV4BdD9nBKX5epQzb3mLX1RXciPgTme8npbWgp",
  "key26": "5kwwN4iRCgcPPyptEngRKt6cjnYkPujvngeWq8LtahYRfiRFGT69c4fnAxwTrFEPjK5vTCnvcDtL1SjmvETTymxd",
  "key27": "44jCMqwjmjGTyqQ1yBQs7N4zu4g7vZ3UDJpjsqd7YKVDiEahwH6NPie1aV86YHcYebT3DfDDUk4GTPaMPVmusavd",
  "key28": "4JC4deLMGxqLocuE413KXEFDAtx8uUQWjrpTnaXmkx9dk1CKVBxcvGtuy73vNoZiMKnzMEh4hYxVmDggB1jRBHUc",
  "key29": "5wgMf87t2hX5mofVKrVTAs1ubYaFXJkhrcWnWwBrfxDfjSHFm8iK51VCQNH3GdkzmqN5bUqYwSGc7HMgjyee38P9",
  "key30": "sZdC3dDPGybFaHgYAXBjhgqYACDGtXiSTjEUZgZxZpqcEgoGu1g6Pg9Nk6nNacPpPYP9aMtaiMeDFnLbvP4eQAt",
  "key31": "5iiMeAFNXt1RnRa3bCT2mUACdnLZ6F3BKXZyT44XmLgPojW7QpcQPBUG1MkFt8wPhzWXYzTYU9bs7knros2K6c7p",
  "key32": "439Rni6U4YqHg5Ks39fXJbgnhJNowPs8Jk4VLM49WVB51eSDN3Z3ZVsKeFNwgjbNF4F9eHy4admhvKG98CVhq8Pc"
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
