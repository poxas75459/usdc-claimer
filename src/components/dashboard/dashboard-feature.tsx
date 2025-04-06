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
    "1Wk8DjkCYmVX4cBqJn69gUte1wvtkdgtvJSPPywKNLKsCy8Wn1hrwbQvtEJDyGHaa1pU2pUnBKUXJXt4fhsbcQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpFhZAakJeie3BS3MxVXDEYkcUn1cAWRbvWHNnXrSk8W2podyjL5JjPWR3bLtV82DDdt5b8CD9r1mnbPFH1Ug3K",
  "key1": "4hh9VciGQ8sLXVDCCCECBEKB98gN8E2EkQPRWKQba7tBop2157j3ZSddmtKxEyTGPqWSdFNZuex5FBKSDYzYcNPd",
  "key2": "2LSb2Ab94c4iQZfqTPucUb3rhksH22aUTfUGrQZzARZc8HTjv32DEr6uuLHkV99Jr8g7hYJbyDEhdwKLA3Hw45jZ",
  "key3": "3D12LdVjJJ8jcNzny11AYUedABgB5HpLZk29t9iQh6pWYRBBvBQuMHmD4uFsExMbsLMqjdzbFFc7XaGwrogyvJMY",
  "key4": "2AgFixVvGH5yXa2yuZkaQ9kC37qFfC8aytkkx2jmweHAt9Cn5s4oiEwb5M13krV3v9KfoxLXbpm3f5rKhxBEZrky",
  "key5": "2JAvJnm8DSXrbfB7egfoQRwbTHYTPVCfrSFFe6JD7489gmqsdeqaXZYvNwZcr37oVY4G4NUkNzgUHpTPWE3SwPMy",
  "key6": "4yVJ1R7nXqCeraDTG415DQr1ZFMcgkvKZsyJqce3NjvPyYTGCpKMN5AZf13Yu1rWA8D4KjXe2ZxEYE9JSVMuvFiJ",
  "key7": "3M96RErpWW3Mph1igZqX4u7HADDTeXdmbUMp2SgkEGsZbR49AGZHLneBwPKpnPtwynPMv88xpRwiyDCejVp5ZhuV",
  "key8": "2saFtVQFL4Zork7wdJnMXR5TfT9pViFzfDGHXQc3JK8HaTdEfGu31Qc7Bp6kwpNSoyd8Ch3Dm1JJJWVCor3y6ufv",
  "key9": "3UCLBzw1bmwvSJLowh7zBEr8e3oYXN5TMz5kYB4xqb55CwTZGHtwW1mEy8HNExzRZzrPZp17kU2dhZNmhbV1xGEg",
  "key10": "2Z7oPfVg56qNRnQJDJhxif7j9Na3L4ukyYkALhRaStR4BVdxWHsFNbvWA7XG7KBMKNFPBfWw7rDWBMn7QZ36kjzG",
  "key11": "2K3sKgTsuJ3AkrmxdzBip9Y9ojrEqJmjByEGB1eQbuMBpz6isb4Wu2CsJqja8chsxJLebxD8ymE8H3Lam9LFnNZZ",
  "key12": "67WPUoesCwdyTtF3CYgfrhq5sSHRkp3LCAGaX53eMcuFb3NW31PD5iP8KHXgfPVt1fVJ3AKKHLp21oVoRgwambrh",
  "key13": "5n5qoZxhd4NuyMMdVtV8VCDsDUWeKdMvZSnZEKXJ9JzK6kMwq3eyZFAfPphEgA8jARqdWcE5QD8DzfECK1Z7SKMs",
  "key14": "2mSAobrNbpsWN74y5pupSJfXtS87mo5ePsFER2EkxjHA14muhPtWfeC9n82QmuhvKg1rfZrmCqcX279Q4bM57g6M",
  "key15": "ogSNJpQLNP9tXSf6Q1C8yuw676joJp7uGpBMnHTvXSUHL82zyc2WhxtYYqoTYdUHVxw7yJVMzUsPGBHd5QmoLmC",
  "key16": "4MF1kCZ1ZRp9eH7hNjvvq85PrVkhn4exh4dMkJZUAoth5EgyxfPbXo9mkzh6qHCysXCPYpu9tewNGZsiXHjnvQDB",
  "key17": "3s5VpiTdgZiv8ogfjXXwe44JYwq8bdoSnae48RdAVk6aL6cVVKdxP61fxhjPtBqCVj6zkJSYht6K4rvDg6kVEFXm",
  "key18": "4PyDjXAYqhkdiCh4zqZspze9jU7K29xp17Yyr6d89p34ujnQDyuQtUDajSBMTquRjM6Hw8pDHvzP26Pti4gvmUoQ",
  "key19": "5cee3osW8eKrFsZp4vPDsUT8DKKoroAP3oGpb3sq1rJA5Bt9XXToYYyW7CuqaG6UjMBuvPC1NJwP82YeR7JQfMNF",
  "key20": "33GpuPnNVxrE5sLddbQNgyCSjPAxLCW2yQsbqrXonLa8y7dsqPDv7THcJyUDJK8nPgX4QNCwc6icGPdvjYTdjEEU",
  "key21": "4jgGz8fEE1r5bpDSM693ih32tz5emQnzPAdgZaYM3rhd8VUYP47UhZFhUtskQ8DGwL2Qe7cCsrevVRQV8xJE4Vek",
  "key22": "5Tz4TAPcm1nfAH3UWCRbG4rMQQvLGvbcDcKjX3XDGmtvz5NY2WbDDSFsiRA3CPvSUYh5ma9d5SYSwijzH1CGgQmM",
  "key23": "2yYBv8hMPgKZMkDejACFb4KZJK1xV1jyCwNZMu6sSoa5nAyLPtqEBzihkYGyJHEdxX3wx9S9sdvkuG8wKWgcENP6",
  "key24": "4vcP77iFGuULdfyRMZFnVedVx76MPb4TJdj61a4GWYv84PtkaBLxPikGSqbP28m4GCeMZz19rcj7oLnBZqt8doDH",
  "key25": "2btq8EfdYyegtWomXr96UkKmCpjqGYRf5FxNWziP1vCMXL57vsxvstzhoTC3gGggwYwovPoYmB29KJmdAm9xYBAi",
  "key26": "5n3CS8i1YHwShn5BmvNNiXnEDA53mXGFoc2Fw4N41S5SCZe9EuCRuz4gNtsPv4PaiBhNppGNGoPUcmCxGC4favfN",
  "key27": "4B72BJTmT1Y4rXL1cVWesP2SAZnTHKw9wZR2mwQus3ngYmoSek3JfkSwC4wcipyp9w3WyrdtpxsFdKXBh31QKxuB",
  "key28": "5TsXsVewnRUEvsqx2mBaJbfW9cpxwhA47AMmqgXNQd8A9bcu2zsHVwZyrtmBXtQ5zyqtCq3kWxzWMeLewYCDHpgc",
  "key29": "2RUdXg9ZGUc31uk3kiDxgcA9T8rDRPNYVkTb15k6WSbTpuJwRSesbt3i8rNEvZKpMPNqNKAVDoQCmKH7rwcZF6uz",
  "key30": "33hK3qc1bcxqTRFrexVCoCFkvRr5nxrEALaHojZcZwHu9CA3TynA9uX2gh9A46VWWBYfHenNa7jDJ4u62XGjAtJd",
  "key31": "4ErXMtawFKbzmap2nft1njTzSVn99dWCdEkWFw99HUEzAQNmbzSBG6BTpHQWNxoUSM8q4x9hYT9d3Pds6V5EowqK",
  "key32": "3Hnc4cenR9HTV6LbdYrMGxCEsAWtFnrGUwwpsi4gF5CnworY614zxXuqfXVFaJpr8iVDbYzKiau3eCeYpfpJbdrQ",
  "key33": "53jPHzPxhHwyV1dsemYQenmyzysdwi1msAX4j5osygsFLid9GyLTRa2PJZ9ht4qw767fgfgyLcDeUbWud4Zcdhoi"
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
