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
    "3wKX4mmAGHh73vf2P2b3E8z1LM4JFjVdgmbcUUgyuR9JorXLUZjFAxLBCq3eBXSFhfBeEMhemhtDAsz42PWEeWQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqBx18Pbxb66YG4qWKnoSHFR8Af9AT5uCgPcpJzowsvSthCspexyJNJbM3kQoZxqNXZGjSTpnJsF2NBnxxu19sA",
  "key1": "3fwuNE23F9ogU4BeHW14jUM23DWJ6zXUfcbRQsK3TKsEvXYdY1ZRBpGTA49CwacoWLwprAxKitJS3maJHBXv9a7S",
  "key2": "k9YhMWw7CZfLZ9U5SHnHqHLaTDWCQAVm2zJQdNNSakw6yPxQ8pNfNdvWqUPhBCiHsHNSXPMLSszgUbeFnFndgo8",
  "key3": "3aY9KwaQXWxYzaquB9BSrFR9nX3Gn3QDLUTKzPcQXD3j9dQmM4Bxi8zaknMhCnHtLRNx5ikStjjnHF6W5aqL37Ta",
  "key4": "39BbB5XqhQDKx4GuKQTfuedrw8ak2B1zTvnTPci5QpgPBj5rSPUv1WHkP9qRtPxnhW77LnLhARt33g6arNCwdGVr",
  "key5": "23KP7inZ73p9SWPhbA7dimrGX1DgAfeZua5hPKV65z7MnF72WVmKgcnhxdhN5ALHLVbQNpt2mDXFgCp3hSPfxt5C",
  "key6": "4eEvX5wWjcywQ6PncGKoLY3i1a9WXkiZiZwF4DrE3o3RsaQRE4QHjQ7os3iogfL6YrYtDuCUSmA2hrRSHGnvguT2",
  "key7": "3HaQB8wRHVGC3XLZDfbYq3rZBbFKcw7LnXYMP4j8dneD5nYGd9HwavPVk1rZvTMqvUnpiFuKDbVH5T8RXY6TAbS7",
  "key8": "29eHFWirAa3T3TVgwEwNnM1t33osQm8HWDMCPX2Wb4KygN8TAqgG18JYEVawRu8WZbhtvofkWoHuMTga9RVnA2ca",
  "key9": "4tx9cxjwNpWqzBniuQQsSk82SPZeSew4q4kTeY2cGiPPMDveuqmUcxbfSbTLryqEdQbJNogWSLXUMkL8mUK1gQr9",
  "key10": "5voJaqB4WwdgWcSFUPNEEmaEkKU3FarB1Aj6KdqpiL9VxTJ1pXTGnx7J4UWkhHHkzdkK2yU6c9GjxL2YbHiToQhN",
  "key11": "Xkob7Pg9LkfCEYRfviHWT5D4jNXWyjBj22yUfdHP4dBEaHhmeJVZX1e5WCwZLJ2u8JsBXEaN2RU2QNeXw2xnLiK",
  "key12": "3CTUiLfTYWnYsULqMFGtfwNLMnGS9dgqfM3EW77Ef8BcSuj9Tv1L98UnzLB13fRpMeYLG4qJJCERsjBM72swPg4w",
  "key13": "5rTDf5rDWstXMhbLeYiQJZdV467FtFfcDSzVjrXKQ1ko46CwEstXg6Kd9Hay5HWZjZzAZTUdpLjuh23jiy9S3iuJ",
  "key14": "4sZniQid65VQ3ZWhab7L5GehR3XFWeCGXaa5iuhLKWA2SUaTNQhGZVhxAYQrzjBFjcHih2uFGzNcgpyyS6HMj99z",
  "key15": "3F3UjJmrDrkade9P4e24kuqykwa1kh89qYYgbfXsVskc7p64QKokb1TC1HhpnTRzD4X5dynDM47q1y6cdABfGUXN",
  "key16": "3C1kdTVjgcoPtZsNtdKjiun7ugxju3t2raAfN4Zr5VTX5xqJenFeKwNJne6smTtVbxufja8zWs2ZT28QSamrgsGc",
  "key17": "5xmMD9S4wU755Ar3c68kqcVtp8x279oUTiNEBtaAjtf3rgNHQagzBGtynE2ub2K6vnDDooHkK2M6NWoUxEdBBUiB",
  "key18": "4R1wHAtCM7pUk6qdrrirNqfqEGjFFNd4XGCrQ9HXLfXvYhyrw181m6tgRr6GcT7XtGxLNJWiixndaPe9aSkiDhDA",
  "key19": "3UZeVartUkTpbfBS3MRWA3z2YL7uq8rwYQijeDpiJMmTm6kXspRkPkf7wap6BSrEYEENA97JKpq4vW7192YhDwWb",
  "key20": "4faqXjMHStia191HeB3sTe1GTJ5fi9vrUGNcGEhFS5YAAUCR6egDM8nzbzaxA6CxFmPF1x9s2WGHh2yopTjDuDDJ",
  "key21": "5Q9c5gPkN1ah5DRyDN8hqTumKFrX4Emo34Z4EpMNA4kr4cr6wrd4Hu3jUYZ3PTTp3FpRwDqcHNQbQPvmsS212es3",
  "key22": "4cT5wQPUpDbzLSeWProCYurLZV36pXBd214e2KHsJKrZ5Mk6PrBFXV8xUtCtz1AFVHibSYQFHaMAE6ayeC9qfK5k",
  "key23": "5BZfuY2uLJZUJ4AgvDLRvgiZuMqbRUxTvEybJJNbntRrBRVjfG2SLh3sc7ejN3CyooS421B7MhPZ8we9XPY5p3w7",
  "key24": "546aAruHZfXZAES7hWyjnXRwd6PFnH5N844kVfMtFivD4jK5GLw5mVXmExtvjLijbw3AWxxMqzA8x1HnnCfkX5nh",
  "key25": "3iVUidXZs7zn6DGPHJ9AfH27D3cWqZeDCVviLg8zTqBn5r1zUYbpSRtWLv7ekqLCAaBiaqM16FhxSGDBWG8T7R4",
  "key26": "22a3rFk9tPU2iMLZPSXGwRBsjydB94Dj9gG848h23ChJbPMVo94pKauC795LLVqiKMm5nGYp27qEgMtscZYyYFTm",
  "key27": "4g49xBrBdvf9yw8hoJECud2F2PSrNXPkyj6pu1tLtM72ZV6CCvtRjn2YrizGjyUYaxpnN2XjdniCgBr9CHBqg7qG",
  "key28": "2YYrHLeEHJHoUQYJuvWQC771FS1f1b1aJtX1eUiUWeUGKPMSpjZwcXPDnp2WvuEdK6TzqfMVHjk47r7w5BTqDZiY"
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
