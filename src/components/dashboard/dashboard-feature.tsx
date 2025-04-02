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
    "3sgr3ntXaXXV6GaknRABYCRFw57PidQc21z2VAP1XvBDynep9A5PWNDkTsYAi6yQmWqJzgQ1wQdtrc71pC7egqM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJMJ7CDjqW65XLwMXaVBgGVmtETXxs67yPznRYsoQx169qWJdYjQPr7Z2Jt16y9s35gxLuoKveGHMNspMNBmUnP",
  "key1": "3aLKzjyjLtXBgyCxKsZ5McaEespqffDM38y5WMbvv6gyUqxfWGsxLt44RnRRJWJis997cSL9NNunUpZrDdjaME9G",
  "key2": "1LWKtYV8X6XhxTm4YR2ASf4358PHtustReNTp8vog1NPvdHpMw3hyhxqKgcP7kRghrT66gBkipmucy7AsET7sET",
  "key3": "2bvstBYTLemscTN1iUGJZWJ4gZLsoAyiTCfHk8Mex2PCHFnPJgSLjsriBGjrfzSMRM2w4UHxjAYHjpi4KhXJv3Jg",
  "key4": "51vSdZtNX2UmJpZzvUGYcZyBKFwhRsJnmthag6GgZhQBWgayF9ghbDR9RvKtMJZq5HgjrzZkAELdA1QjQ2QF3zFm",
  "key5": "5WLNZgY9NBXyaPtuqqLawxtopYF9pAfiBVQKKhzjMRP5bZm5FoY4uc2wmGikfZwzSzhnc8atchjuAodWwzAEutjU",
  "key6": "2yKAvn9v81ZtTEKPMJo3CgNCYT69jGLHFxLkMtJsbyzoeaXu6GmJsswjJzrh5cL8oPUZHSf2b8HG5hcGmrBXJtmz",
  "key7": "5hTRQKmKgq67ndsfn52M5XRED5arwyBvYAyGeLMbWzBqVs4RV1ydU5McgbxHgDRvwrNVKc4fiUPuUBcdhnsTf2PK",
  "key8": "2uhDBJKAEZnwGt2P3azEeVzh2hQ9uTbfJ3GzNKBwKML1QWL9ziZoQB7nqHb2wPPEjRYTSRwjoEihPR8JLYs76ejC",
  "key9": "KHT95uQEAgC5vpWxxNx4YjKXRWGZQSJ9XmhVDYsj88bwkAt2sdeGH84zo34isBdpbsSfoBaKnMFzcFMp5Q9VUEg",
  "key10": "5r6RgKhmsQWkkA5RwzhLADbFoV1BSDNHZt9wzaGqohio5hco91kXaGZDmEHkdDQV388rvcKaRMdZsNfmaV23W67b",
  "key11": "b5BybahAyH2BMZKGt7tr4wkYWnYiR7qouUPrxWWnq8R5KWtQqMyWSEMnEa3ppQocHR9eg38ri3D8k93SiFP2mSb",
  "key12": "3XhHEkxN7725eoKws92ianjw1geH8zmH9zF2NptRpyYkeuLxS7y2yQmwDgm8fmeGsxFzHTGjooC7FWCZjHu12xGv",
  "key13": "4dvVdpPyVNkHKhfvswXVMfrCyJbZwCMD8MKEa5kMLvdXgmNRQdAG9avz2qFDRkXiJnHsciiTUKjHnK6YHESQPwqZ",
  "key14": "2bDYvMyV5uXzm6frQSwCeYs4hjPfs6NvnGq9ejai1kViDjbWPmkmtPES6BAvug9bRiEsn5Q5SUALqGQ4JLher8FZ",
  "key15": "2rREeViUE1S8TdLDknhEn5jHsjmhPYvxZoSkpGX6vQudqsZvssZGZ42YkJ19qXq2Y5tGUDb9YSjfq7ttfyNNUBiP",
  "key16": "2HWs95gvyhiFDKpbmT8jpRyfV9cGAj3hewR5pC98gXTK8t9BFQTezFDJGc62iMiY2Jddz57wnYZwBHejbeC1V8Pj",
  "key17": "K9Bjf1qt3D6bcMVBdtQbmLY8VBTeWDs6dwMJrfmbhFdpvnc74dAUbEtSaPxqnKQ58HEXstiSR1meZiSEC3tSReW",
  "key18": "s5HieVVGy4Bi58NiHsNqpnDB122ocHdLcgE2JStJWdZ32xVkiwob1Q7iRVVNeCLuvH9mosPCBqJ64rUBsceL3vk",
  "key19": "26Fsc1yBXXrmj3CMpUehHBpujEAwpjsMNRVdMVjeMoftJWqedcUaHH7yqv6Z8SbR3p6jB44WQe1Y6K6wovgRdKCt",
  "key20": "2Xkwnjzt7QS2NSFztXHsUVoQf3n37sDC83h3rx4BTqduRx8hSRdQCSmJWw8EpEjmX8AWj7dq6mvaYxVCwi8pkMFB",
  "key21": "5Vqk8WcUyCvAiigEDH45jLq6erJ5q2LRvCkRKpLbRUBLeCENbshW3hrcBV6Pt883VArSg3qZdjmzAa85i55WLxe4",
  "key22": "4L9N5TbTrepEnu9E8ecpsTym6WDBjE4wSh44mL8zCaxaEDvZnS1TECbhzoHEitE1j8WrBkNVw1Z2humY23hVU9h2",
  "key23": "3u6JsxZ3XMnAmD2G89VoopRVcsH3JGoLDb6Mp64XjQyfbZspGumdk8pq1xcQMy7YsKzTqpFkwGFA78wsKToAwjTJ",
  "key24": "5T7U1XrVoDA9mmwKcjZkbYSb4mA3qWysj6tH6UDMt5np7tdhVZGWN8JetRDm6zxhtjmeAjUc2Z2dxWLLRK2jzPx1",
  "key25": "5L28UqVqyZRg6gHfajnW22wtV9Bt4YJ1CF5FDpKgPgS3RAwWUjpTYfqKNbgfEJwg6TtEofzxDJ6KPL9uFN4sNUtd",
  "key26": "5UD49uvxNPQ3E7fk2V6XohT6bd4J8GPuaTwf7TQQ3cToNKvF2vBBSLYpL9ApL68hTRRDeYPimTrwFXwRhFJ7FMBq",
  "key27": "36C3MZyrxcVJnLnoTZ5yZ2JrBHw2JYfAKZ51P71LwyRT8hcShipS2Yq6HcZpSBWMJ2wZZHfoasepu1VUjXCpMvWf",
  "key28": "4hpGU9gcPSQXVFX4akaNsjWFqhdSW26PAxPiSFxcNSBSNnNaJyXCLxU5TgBNbjCfsgCSCSAvkYMWtZwLVTL8S7ui",
  "key29": "4F4f9rkbSCNY8m6fQWLsMP8mYVJvzhZgUNanNuBEayy3GJHACTHkWcyEsA1XtM5TVTdnjQgbUZ8JtU3J7iX8Pa2q",
  "key30": "4Hvd828p8xonthMG3GsLouUmo2NPkt1abrfgce7qQUyh2jfxtK5E8T1hDrpHaByXNovWizfjQWFb23gRJzLkfHG8",
  "key31": "3y7NLKsvFNTU9VomTtRmpyFk9VSqceCqng7vEmRZ3LUeX2rHEaMo5CiWmeuhvDFHsFHwzByHGcYABGRcHGwYpuFp",
  "key32": "2P2S1oF29LcQhB7ZvPx2Nk9kHxKVJVhrbxrKQrC8ZjfvyQyffL8qERa2gSkFSasKWFjhriqWnSBSyd5MKymsPNJ7",
  "key33": "63zhWjvdhXgyKpn1s99kyNj8bgXm19nnB6uDNJSNdmXHNd6hfkByF7rJyZKDY3WiWawRAXrLJWzdTRhV3fPgiyej",
  "key34": "42ZBVegyHyQ4ciVRA3a115er7Wavd3AgDYyK9WGDJybsXNKtVBTHtsTsXLCwCkEYvcFTQkBBQUR5DbpvMHNa9axj",
  "key35": "5zGLcbv4mV8bqnA8mtrwG3WW6qUhv1WEEgQvBC92E1CwCADfDT71pJVFcd2FtgnxkGdBfhPPBhf2Cec99w3sxQZE",
  "key36": "5NDqkpxGNy1Zm6N5gi91LkFP4DfqQby5LJrVpawic5KUHp2ZhvG4ukcSqsoYU2952vN22YW9EwmUHiT3YzSZX4hm",
  "key37": "2r66eugyqnB9yWDQRL8jTGQVaNo5vnojortZ6AeDRPxU3HDPfwmwTvLh2DVKD6xL8YFLUP7NrueaRuVvJs2m8nCf",
  "key38": "YqBqHnmPfgpbaFZb5ubhoRRtsdQEgBn5XTw4pMhQie9fZz2BrkyzFHdH8sYxxgtv7cEQEwQ2dkDw47ESeocJJCB"
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
