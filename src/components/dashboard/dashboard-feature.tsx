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
    "9jwhUStw6nrQsRKgYCqH44HBfYZaKcme3BdH9NyJYa1ftNkiyd39chygLVHB4sweARrWD7zVtZ2pDYQtzTKzrwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDdf9yRtuQy3NR9jVUyWvezTuixxnN5ckLRt1AMnUtZqjH39vZ5EvkdUzF2Ajvd2BwHHPchCAGaP8imUA3vN8oU",
  "key1": "5va9Vfy4iWn9M9tQmSk1LHAD59vqNBFUkakx4mQsMfQrrZ5ViUEji3Gp5hukx6jqps371SLMi72fmuBLG2x5Gqyp",
  "key2": "5sPqr5vr5arqznsDsG3P3vxviHJa5dNMvXX7ddXJRL8fhvbQFLo4ocNUYUMR92f85BLBgpwT7EHZxTDep2Jb2BVq",
  "key3": "5Y1p4Ew3ALxAZ3E6sKzhMrGcXAwBHGxbNRupyaXKgYnHXa2aVPEiyFZZ7YWkqD8pNsB9k5eVDiziSCSFqKMMUogW",
  "key4": "5LkT47RNBG2MHXKx6ZFEP2KZYBg8cwsgFg4DCQbz25KpRMSxZZxmpcHodgbJDS5qHmmquYjkduRZzybGji9d8t5T",
  "key5": "4QyjvqxcPL3q4GA7dkQtGJy7xdxutAtVtFAncEBHxZMEt51Q9cYgNkctzpKyXARywddd9jhSUi7kME8VxTSWGZh6",
  "key6": "pPxmnNnTKw1deGSt7kNyyb47baX9ZmEuVZv7GYqDiq8fKspR4GFnWwyoZrcVVgCfjXrpsjBvP8x5tX8rHkHvWpZ",
  "key7": "b9WMGVHxBxH4MH2un131RSw4SorggZPqi45CYgPfC8K9NDHdw178wPue24v9inZMXiAHy5NDxnJt65BHNaBvKk5",
  "key8": "611uVjh9Ygfb3KFsPZBBSXviu7KRAkb7xLKWXkKKZewF2QU9tBzwDzZYS2SiimVuPmdUGgYVUM7HLdWw9djdofRp",
  "key9": "3fiEEKhG9nkFWfsPszUmMB9w1ndkmGL1bP8drjiUybjLYueiNndZZpDgDfpMevEEKVihsjR7Ui4oCx8d7txYSnAV",
  "key10": "4gqaMjb46QuWsdvh58eCJybaJFzJMxrNEcGbNukGEc8ipMchn8XEwZmkXMv2Pe56T3qZQrXQpouGtLw4aCyddH1R",
  "key11": "Q7t7UcRogsSuknqhJrKKAexZFoEzJys94PHzFCVxZJgyWhUHMunknH7ezQiSFJdzgJAkanp4SEYdSaLsdgrznSW",
  "key12": "uV22eaXyJyppzuyHbfviUxerbaKLFhhaia6GogtTRdFGhbwDBRsBDhpyE85eG2sVmrAHPYofRaimZ7LiGN3rnsT",
  "key13": "4BZvHiaL8GDbw1SGS7kS1fkJxMFW74Ag46NFVfsfy1N78gJinXLSJNdYtaMxnfwWfoPhWFAX9tcsgSLVu2GRAhwk",
  "key14": "65HUgMR2DuP26iNgvtBSH1JQiVVc3ZhQNSC6P6kn2izMDrf1bADe6irTG14sGGX42tGdECoz3pKbZxn1KzuFo58v",
  "key15": "2bUSPs6L2eu9gBxjcV1uW7Wem9nEn36PJnkdkTKX5FeeUG9JBmQHu6s2GbHBVS4S3w2SPLEfuf8coqCtPFNUPWPX",
  "key16": "2nkBpm86i6LVWeFWMtQvaMmtb5c2hink5ysQTyH8oHaow4bxLqqUxKgQH1K5xuMLYM2BntvodDMaw95mAQiwv6b6",
  "key17": "4FH9vSQDjqmFQevsrD5ifvyPW5FrvQqWxFwhp3srjiEcMcUJuTB9vorTU7BR6dhF41ksGd14LJgedM48PjQSCo8r",
  "key18": "29cLab1zKVWu8tnhJpofB6pQX6D4WfVpA2zZiZvmRVBxdKn7ErhMHtTgnovYpvJtDJUd41766N1r8ttVH7UopWkY",
  "key19": "4CiSWXQxEWMw2MSm6Fd4ormiV8Af9ASENBGHRKvZS6EcWEGaWXcvmjMrHuyMnsseEXBWatT3E3cV3d4JFrWLptqR",
  "key20": "4P7MzjAQCpHBepidVtcWpS5uxUWkFkqrTxuzsKLG9vDQcAJ5KaJuD6uTKz31aA33cFCq8PaBQ5EnzQsqnUGS3ENk",
  "key21": "GpqwRVCjMS5xvR7HozxAbWPvJN2D5G7etBbMYiicZWLtu1xUdBWr4yZzR8tbgLj3w4iwygEZso7rnBXQQBN45Yo",
  "key22": "3Nwh6MCN5QakVYN4A47wJxay6tzJUCYnBhFrL8EAD3WtUpSfjTJBk4yw2bpxMpEehDhmcFYWbxUDJBFEeYo2iY9M",
  "key23": "4eGi5Tzxt1kUykGsWqGFzub2RfJ3ipSNb6ARcomH1de39uU9eXR5wXn3afyxckENruhVU7b4DenQjgPWYhDeB8Pc",
  "key24": "pun2y14q4ifVupxeLWGDgCppstUWy8FumRLnPYX2BzkXKWSnTHwb3V7hV7UVBY3PNgeX9EopYN3wphvoCPzZfAy",
  "key25": "2CaX65DwQsBizSH5pap22AwA2XzRQiXZAodfHsRm1QrffseMJRVAhH5CVPoq7NiQXwBX3onCSK62uJ3DgLcaP881",
  "key26": "4NGEX5rZbYHkENqTa4FV2hePoXQsJBurzxMMWPbJbjzSkEa23PnpBVZA6v4hqGU8FgnxH1NA4yRseVxgqRxnCTuR",
  "key27": "F34ajxuoFmij4A3E9sYb6yMdzMdo7JfZv2VDVoMWGWXB7D5KvtjvYXsp6VpMK7vv2JJ1RwRpkLrkajKS8PUnn4C",
  "key28": "oKbpBp21Sg4Fab1fik2aYCRQy4JRGVRWBj16pzpJKNnoPEShgNJHDf23dMDvsXXUUM3Wxb96ia1wCyb3zRntohD",
  "key29": "4r286aVGx6JG7yP6zvTaU326jwGAPgRvwBQFiUpDFzVAwyJ6HQHS6mRZsGVaGTRtnrgLJQoVCqFenMExqLStRpoM",
  "key30": "48NA5usrrSb7bB965aDzkduHBZ2MtwWE9Ztjn4jSYPF5LLVNuhi3qcEJrvptkvrtY1AcGoWJ491XbeJ2JUjVgtva",
  "key31": "5QXxiHHhCe9Zw8p89anuDLbMxUMusi8Ry6hJdy2G97LgH7bo9XPGpv9tAgqquKhCAYKDmyFJsfmUKHVygtWuvCSH",
  "key32": "48kk6VuGJT7qYMggnnb5d4RxeuH1NzXe5BRjnRK11iLpvFvUeNc7NnmsTBSXQW6jDpN6RJqJP8UcHNGhUnqYvZhy",
  "key33": "3qVHwRJEGHXnHHzmV3cmsADyFCFuxWhdEKBBxK8qMUo5jprQTDb3GLA2xkVgQcGRWTywapRSZLuwYrPNVk4afJAy",
  "key34": "5TaprPsQdAjJGxFRS4knz9MEBUd3GF8v4UtfBPM68HrJmemFUh2VCESGWeiuqZ5C47g12uTwurFeFEuaGNr7m8Ro",
  "key35": "2L4C6qxew8F8qKNcfwMHAszArsBBxWt7zbGqCwudRqZ67Y2x8RAk5rgzjWJz8FUGgPf8ukJYRSBEYFiiTYbJjqbk",
  "key36": "5Hy7qEqSWBQXSMkUkryuTQ8KSczu9JUbF3DrcDdZDfy89fu6eXJFrh5pDvtfiRPhmWHR6qdmYAqZec85e2kWme8L",
  "key37": "3qr6eJQgkCCPWqnaaHr3r8LwzzDCkjMrAt9MA8p87pMDMBVt9D2hsxKD6ekcX4txRvPRt6A36EeDH3Sh1JV7uthv"
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
