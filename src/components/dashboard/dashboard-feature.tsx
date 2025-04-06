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
    "fhw4qZvLnauohki3Gj5CA6hL85h1eA7mKMMr6duNU31DJ7Z3r7eUNYwzvcXYnP1bf2SNGYR3dX7cpucSNYavXTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQwanThd6XmDcMwguDaxCD1uuUuHT4Q6T9kJF8dD78R4DQawEzNXyowJkqeAQgMeMYqPKWdwAraWdBcH1oUqTQj",
  "key1": "5sDuvKT5f1LvM5ANJdgkPdnQEQhXa2G7G4SE5FLfNk5rv6x6hWaLDjzkb7hfTaZVhtwSAntgz1au4xGFQsjt2ppn",
  "key2": "2dvCNrUKXS4eKaXHoHomFF54b6xRoFn131UZudTdSy1BDrLVWdTokNisWyXeNDRhEyf4E48W3djUtraP7QPCb7Rv",
  "key3": "5VAruv361Vo6HvdPcbSvbvsgf8vBkwWrgvWWwMVTzAaD3ynVHTd2VJpRb2uzhwnb673MozuT9V9WmUUhATvKEoKi",
  "key4": "kVUYaCHQEFUYpNEoNngF4EjFFTez4Vg9GFmYxXRp8kLT73x17348DHWBDgeBcTn8b5kqhDaoRMzaRF3verS9aRE",
  "key5": "3haZkRfzYTJMd9XnViC9cwXnyyNE42dMMWVhFFPZxFDRArNTGGsHBn4431owCh9q42kDc9HrUmrmLHbzJnjEBrs",
  "key6": "rCXpAfoHF6XkDzz85Y11wFkxn3XtqBDpmRVxHK1RqMG4T1Cc44dxQi6MavHdCxvnCon78izhaXJp387S4zZMSzJ",
  "key7": "2b6c98fCPyuzRB8CetHKnjEweY3b4BdEX993byeh2Y7E11SzUnSftsrDFWhjaPwyQ12G984zebdRrgnXmWrJt44E",
  "key8": "2uhG7RoNCnXaEnRLVKs2PMTtgdbA4wkEjbmNZR9nMTsXRqkdKi9Fe3oDy7RXQ6h5LR3dEdTJGZbq6Nq81GbJV5Nw",
  "key9": "4cPA1cFCQTMkG76Dz4meRBBEsVKJbxWSuQHXfKNYBMY6pAHSgHtJBSBvPU59SCrGaX8khNVP4bKkLC6ecEwLgLdv",
  "key10": "2u14J586n8ovhAwYG7ZrLuEY5FfqQNGPEk6C8Bva7vquL2yLn8nqicjKmHQCq2AshGSfSdjCM6ch7tJ51MG6WGPB",
  "key11": "5KGLKSQNbpSKfYpKNqLkfN1ENfst1Uq8fCN7t5xjQzZJgeosrUy7sWNXNs2oSj3GkwU6oyn7xdB7Rz5bXQfa9shj",
  "key12": "5KFiJSv1fcd4en8NTeduR3Q7MqknAHsQB31tQV8qygezVnnBaCaj5cGPyh4KcHRAV182riPF5B6V55Kqd3uAmdTp",
  "key13": "2omQy5apZF7K5uhhcWPNQw4tC5ctroL1bYsnHP8QLgd1a5VKkiYtVLtHbTjfgixPWxCHn3wVbdEX4DYRJk58cZ3U",
  "key14": "4Bnd9k9y1yX5hhKPQde4G6s3B4b28DbywLCj1sugnXf84d3PDB63pcGa51bJxhehM8jrU3YkRQnKaCmDzH5bSvFK",
  "key15": "kmqDYPdEYbeqZJnTaZeC9bzkwQZkJS9m4rRidgJKgb4fT5u1cFY8s1xN3AuuppSKKLd6f6oTVJ3KW9NWiD2nM5C",
  "key16": "xYEQAVPhPShdiZ7HJRmphsw5tv2ExMW4pfCoizyambAid4HWk4jEjaoxVHKWhjLGeQxUDev4tgNCUx3e8FszYsd",
  "key17": "5ZyrLqP31CPBFZnC1PA82XNAU3Zzp9YgekbZ4UmfABv4Lv3zE2TGsQSM3Szuwho3fKominD8AnskWWWhBJAwKnPr",
  "key18": "4cwdxiZ9DnqjDjfhUoEkpLbsg1bXvXvyL2Nxfno6CenBhMLPdz7KLaKhtK5GNiNZRr1QVwT5rFPV68xcfzvTyFbB",
  "key19": "3HBVeY4ZbRdjYsrVds9kmUaTrXZR5BHHmjsBWwUwpji9EprrmuvNfL6bBT99sgRPbgdQf1Wo8rkotBJRCff5JbE2",
  "key20": "3H1xBaSCgAjR6qMcZzcKS6noSCDY4NwBavaHDGoD5XQmw4oW5QhVeTvCqmb9Sf7iJZTqh65heVqeuwWWssr5C8XA",
  "key21": "3x1Y19Cy2QQaztiJP9GsVP2fQVjhd6kzBgsL2g1LPVwEd84F8zQysVxF3ZhMZtY73SWcCV1VfgceJPktF1217ttq",
  "key22": "5vATmUUnNShcSvYF8mGE6wN8p9CLQChM48nqwJP2kpRk4Wod65S2eyAefmgHbKHgDtDk1LrFSP6cawPMZ9NAALY3",
  "key23": "kkdd2hqHjwRyHfXiuAZsNdmCN5wXRqwqpfjwSvGv5qRCdDnmHuGMQ5vN5a3VCkBbF3HUxAKwB5GyEAkW7YmRbkH",
  "key24": "3xRAczocfvY2noRfnryFep4JXCC698E8fzxciSv8R5KX6auMfeFzPTp8kVhic9s9KHdzaB4bh5itD8ZxaZrwUTPh",
  "key25": "5WGq6PbhRLFyv5kQRXAaRdBuFkqKMMV5GHqs5yZpFDeeHdn9EwaSNBordqgM6EaYfphxqrDZQkYV35XA7C6hamZy",
  "key26": "oFebFV65TfFBrKXCaG9wJHE4eeqV31bSwpWZYjFeEw9VSfz2MA8PodUTRHKMLw1fDJhDjMJobuwToZKUfV89snd",
  "key27": "5ypanPsZqkwnsY1JFq7psVJGbTbcj1QDBsq8xSiUDqPc91dGXaDpgMvga2bLMRdqDvG9nwgW6CoMbMWaVyoe87AP",
  "key28": "QTkR4P1CaiyqDLLoVTZ6hQZvqakQwASL8QMsoyDUicufwYqWTZmvPVcBRSra9Kafc5QZrktDrn5Rq18WBqbQ3p2",
  "key29": "3JGkfVPsB1S6VYnkbNnVXs71UChZR9M14HLBn57BiDKcnC9T9pYeag9ASEui3RAGtBWbVuKWSPgz4vyRLWbdwj17",
  "key30": "2HuMxx71BSGRPriofhZ1PWReiAr2sSCtFrXMuGvochGjq5KhY9CWuzxgANYCsEAc3aYraCwEAi6EggYjeBdDQV1q"
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
