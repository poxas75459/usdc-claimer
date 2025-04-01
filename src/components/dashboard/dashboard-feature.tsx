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
    "5H8vT2VVHz1UJcd4VvWUKqfxuya3rJgWwPAQdkqYHe6zz5M9AKBFRKijGroqj4H98YqK52zCUxhPC5yi9Me4WFg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ryfsYYDhRbW4qW1bruFroBSGGHNrgdxrbFGhVvsXkgKth9cnm6ue7FQsYiQfbsAYRAEYbvjoQNHdmeZLpAPXcD",
  "key1": "4LL79ejTrZH9vtkUw8YBA73VJ7BnMSVNWoNFyhBuCe296t4WrKSswqYCuWpTZ8YyHph9v5cEG5e1K2BBSFkoYzVZ",
  "key2": "AWP8Tg9PZidpWhsoQPFZhJYnTNaVRZzdAfzowtwcwKxB9nvr75iHuTHHxnD7HubdUqr837gSnhNtyeGWEvL4UHL",
  "key3": "kKZGfJmhhwLjLN8B8LH8jn844toLbgxPc77GyDPBPptztpAQ4cpMTiTJeHVm4V5ViLdR7Eudofszx9yowYRJ7Qc",
  "key4": "5MixX6Ur5HSHXQkuvdCtdm94feP2aqe2MDuBfwrUau6D9jYGpfhS5DLW5FGci33zMeVwkGzcapybXH3essqHUvd7",
  "key5": "2W8gBRsYHDXN4oQAdhpbtVRe9gi5cm5CNejpvKeojAUq3JptexuCSqK24fEZ6yPUjwxnSx827R67GrciaScYGGhv",
  "key6": "quVUVbivFbkPMTfusvgzTSmaavtLWv1jUFhpafxfVTjenJPkTcUcmgQssnUbos66yCbDafWcJconnrp2VtZomiz",
  "key7": "5DAFMtZ492PEQD1JzMFJu1frHreRm4ndvjtL11eDNgijCaUfP3WJjwFYCQ16hJfHjeduReWkKCdvCfAEcuUgvUih",
  "key8": "4cMzxcHERtgpeCZCuQtDvb3h2ihUbSzigbVT1VSmYcTxtWQi9saCmMZk4uoXhRQxAayCpM6PwzhwH3FyqFTSfKQi",
  "key9": "47ng62hs6JsRaxzAN7qKewFpLKEPXxJiA4EkVANyYn9BunrSBz8cDuJAgwfouEXfKuKb1HDT1X3kDYeSSA3SuGPN",
  "key10": "26k2YsVDBgnawvGPqzcsyTHjgNEoMMMLnCBoifbhfR4fJtcZ464Q2MBXWJFyjT5AVCP54NetNhrpheVDKg8D3ryn",
  "key11": "A6d9KRjg5D99aYfCCrwmuCbmx8LSiqVhbgRKJboC6XgEZCeL49AbyF7mFmFmT9wkFutt9J6Ler5D9HbiSDmvpvF",
  "key12": "4AZ8CVWMPVzc93o1BKwQjr1z9aLuPvefcrkQtTEr6uP6j5bm1T93DdVQXhuvJ1BLsM7zmT3zK8zQX76XYr38psYo",
  "key13": "52EwMqzudjsU7Rp6ruD9Lg4mXgf2wJCegUiowhuU9RCET3wbVt9UkeyDJy36tzGEUisc9N5Wc4toaqGfSUk7Sndm",
  "key14": "4PLHKaQiJk6cFAcKZAVBcdSGjKxwkaLCZtAiLL9Q68S7vUv3VhZ2iDzZrBDbCtJY3JMV5g8LtNqEwYmaFWEySVsk",
  "key15": "4pBfhLL7kJv5SXyEsNgMDRe46CKaYH3XyEF82ZBjZzPVkYRGMMZ4m4JkTQksKx3fc7GJreXqCjTwbaJhWQnYrWTg",
  "key16": "3Lf5RskM47dSy6RMfLaZjha9zCiTNPbTAiDDEFsEf321FvFhFspy6x4WiNDgUN3mKZrru2L3ygWY68G6WKAbzHbu",
  "key17": "31sMGLzVPuvKweW9RkDx8GiWHEj6jRRj6m7DfanoYYh1EJ9J3YQJFtPGKGChH5Cpz2nwbRcsFPEeK9M5GAVS1RGb",
  "key18": "3NxLTBdWxcNrDTgB8tJaMGSCWKVCojcztY1wY39vhakJ42jF6ciCBUzP16UChoFWLdGDkYb3ArcTV8CLh6cJZXBv",
  "key19": "2a5gxdsUTd1QHhG4RXvKhqzAowaRLoWLkNK6b9LosowNMZ65kCoTSKPBpUKgEognKi3YFzGfZMtpyVPzNYfRvFPS",
  "key20": "32HH52CsQBhp2AJQZgtHAyikAnsUqL5kJeWy5qZzkSv21TRPzsdXuGL62B5whbfkZytvoaVZ91bqTUumZFG6wQo3",
  "key21": "3xbQs2i8Q3ZYMFNbq8vjYTe4rVwmY55wGVyAdJUdMCx8EeyiN8pvPUpRCkfov1aeZ4V7ZGrHq9zjA8TUthfGcWHH",
  "key22": "31wbJKigHqQp8zFAFryzBgXRu6d7wgPZpLTSgTsMZk2PZnfCJM7wBrjTm6kQRRDJ3HrXNmvT1f73yfoDRDt7LM34",
  "key23": "btUXNjfrorugHbsKmix2fiearkr6MhAiGS5PCTjCv3wDa9DHEe23TrER5eZ8AQ7V1ptYfaMGvR7dGgiBKrhu2qN",
  "key24": "4uMuGcF9Y935KjWUjyy3q4gLJ73UYvCx9qJ8cksqs8JEdiLJQh5nD9PdXEfQSR5cXJXHfDV6BxL72UfjMM5rwfS5",
  "key25": "64v7etrNqGJsERpqexjgUcZgJQYL8797bwGA4zCDTs1MhKXpcrHUT73Kc8jK5AYfQupCCUssT8M8ppNawiKLwwGf",
  "key26": "4Xnco2DuANbBRMHcXEUHfDf2voWU1CL3p3DRKPDBArx2eeeL1zN3kd5Y5Rfq3dwcyWrSbm7wacumXhkhh1ULxaTo",
  "key27": "2DNJST3xxu92vJkKPr563p1YzLyRE71j2ck91SjSQHrcBYwxHQmWeCkcw1715yJg8bwEQtf5KBqKeMRbT4ePttCJ",
  "key28": "5amFCqBBAH9ke5Y5o4g12v8KZW4YSRTbnh4YjHY5AHuMcnTKzvrRmcXFWkJ28pMvhStLEMa69Cm4WHCkBfB6ZvLk",
  "key29": "2dYYsadWxRT2RiZECbww28vHbVnTDDKucWjHFRWMUajUK295DVjFatjDZyC9bQqJzc1nFGhxASWWTNsyU9FSgdM7",
  "key30": "2LE9VX4CimSNeyvpoZxHYH77uthcoX8ao65BpyEeynat2QHLuDZJfJbyfBX1726hWU1tPJxPSXLzvwdRgfDYwVAA",
  "key31": "2ePxongx8dfQEvwzKFY4NDZ8BP9uVqJkSWvKZ9E28Bh2nfnRejkLoYdgsqW24T26LLYUDVcZT738ZgxVgXNEbDP6"
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
