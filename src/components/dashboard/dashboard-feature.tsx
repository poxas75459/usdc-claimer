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
    "65EgmDKEeNJwLDyCHThNC3QPJ8ZKWWsPKbM7Dxxg1KQtDeLcRs8wkmGWnBZL2wdhbU1rq1tTxxxMSpQ8qRqGyk84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkvA8T37qcHfbzQLU6Bg9NFz58qRCevucvvEJw5aTXaS6RDtAoN6SMkFz1dWRggyjpoFRuwMyfZthV5TxuxFGuu",
  "key1": "5QukNgme9PJK4yqoSwCC3Ed4in3b73S6WDPUvDraDu5ZiLEyaJ36zHabkKfAJrPS8c72XT9WwB2SwoS1jANd2QdA",
  "key2": "3uwEnSZnSmApHxR2DwUG3gxT6FRfeLSu41ZFqmRv26mXYnjFLjrpCpW5K7gQcpGoyJkMSuCqrK7AZUkwmrfRBSM2",
  "key3": "3fQhZampBvrkvcbTgaGqbFZCF9rkcdktSMP5RuZK18tppVrADrGm5sFL2QEq1uJLJVkGdFeYX7TXsNRus1UwmuT5",
  "key4": "RPyHNejGMhaah32sspWzaRcitRRxcZGCxR7XTUA8G7n838VV63AFKmoUE7uVHqahnVtGh4PN7CAJWSfvLvdVeMU",
  "key5": "3Z3iw6VBJqSFif386RExbv9RnB3uw4Ca1HiV2t6aSWesPE4SdrTpkPU4PeN65zSDsTAzdqbkXVmkVnTpQupzhR98",
  "key6": "4DymTWb1QEMXfPJJrdVxAPioR2ZF3SV9qdtiCRTtNdqjW2wJGhgQ5Ui4y2oPs7NFFbtdwAWmzAzj2ZSYAvk2tYNy",
  "key7": "WQz1KV83vGDQAnH1yJc8eaL6H4AnvzEwo7bT7hC1hxf3wvY9GECSNSh34nGhXbBQXAqc6iRSqZj9zamLPHs2KXV",
  "key8": "2gd5d6XVWL9bt4S45MYTprp7TqrHDqbpSM1KMs4ZqsoDhMA6eYoEVQCUq1WgZXrTqG3GqE6dUR4WV4JgPGYcgwdB",
  "key9": "3d1ZW6psSJHUUhZJHJt8DCG7PDo2C2tS86JbgPpYzJozD6ibpebJe19DNVeCTgghu1dba2sbYKr9MBdTSpDSiyQH",
  "key10": "2nurnsfo2DHx2H66YEfRNYRcasW4gKadDn9yPJ6P5DoYqA8d623HpW3RE8Cmn3y387GobZsMGu8otg4rinX7NvAD",
  "key11": "3e4edZ26oEdxNh3eQweqaMFnJ3pkBKTdW2R4izmxccXDjFrED24LqfVkPuhzQUQT8CzmtbCGp2JpvWFSUCELXAMm",
  "key12": "4cZpAXE7iM6J6mNQc5CP6W1HmwzG7QNeY8egrRwjpPqUowvm8JXNCAf2vV2gGC2nh1njkXA7pEavDgzedzocunyz",
  "key13": "GSeemZbTJfsMTeLJ6beqYb878KEJ1br8PtnoTjjTiaaFsvq4FqomvV5Hkn9qMqte2jFjHDkgWMVSnAxHq4dxFPb",
  "key14": "2DEmo1n1bK9Y99tN3vkYiqTWVZSD3Z6TfeiQpmEipj9oPvs4dMnH5uuhcKafRxCRm1q5pMCjAzmhLCG7s1LGGFCX",
  "key15": "5NRg5nfB69oemkVrqgPVL619trH3EbdCjAwF2NRRH8jDEQUb4Y8PdD8DFM59tAsLhYozhWVVgyWD6sSmFSs37JNE",
  "key16": "5Uyoxc69SbtAt2UdQwGabjF9UTdBSbsPRMsr5xY48oA81RFY59Z2bYDCrKMDwZpD5iZLmjwQh1NYuDJzdDApLHLP",
  "key17": "3iNLgqUVSdhN3oPsHb74tdYfLZBrgjJLp7pE4nP1e9MFTnBano1XQgbL362Xnb2AJ3qwdczuKNgncZHsF2Ys9sVc",
  "key18": "56i7PGwp7nN6KzXsnrEScNobYanPUKiRRTuCWmrg1ydnNfuddmAAhWQXQ2yuLZ6KcrtM2L5WwnbofsQv7vfboHG7",
  "key19": "4mxTvnwuBJ8wk5TpZeqyx93HPXJ1bfmFU587Bean461wKJZBoehYnED2pnQW3uikm2P2nCxGhVucaMr63Vxb3net",
  "key20": "3i4PHMyLVLyGKZepbPa5JMm7peMKcDnAm3ha3tAZNdhFjp2qA3XUVhAk3hycsuXzJMPQtR1PrR8LyNWz3XKrJegb",
  "key21": "4xyUNJJrGWqgRXgv4AB5Bdx2bS1vcZhmsxKfw7MfDhCBRFvT1Cq8EVKZD8sEQi9UJbTW1rtDXhUUMj26Veoz4LZq",
  "key22": "p7fc6fWGeSrmEhnKCFny4aXkXyKbB8WA81V4gwA95AEyB2PQVJfPrP5EUcew5aVcL49aEC3PKuYYCSgkYV51994",
  "key23": "5H9X8LbcqYwVn4j6RGL7BQ8DHP45L3eGGi8xLJADVQ8zEqi68mJ5CpjttwCu4HnBqg1oxZrDvmgEPmTBvBM7ADs1",
  "key24": "5MDrFBZJ2BQv2ReoBEYvZr5fRgft5vZCmrjYopoYdRxhoVCFjZv2d5bCapcsdLesPExqZZKXmN8K59mRhF9vsDc4",
  "key25": "5VbeZxvSKPe6JQhNn8PXtcbN5ckt9AqfMyY6tyrqT3v19nUGKzS3N22oKMZicT6xAgQFD8sNmyfNK29L4qpFgXQ",
  "key26": "5xNVEt7tqJTTid7ReokkfU5hiuUZKhY3hYqyFwgqympwBP8MRwaYvTWwXW8XbqyjuzUSujpFW6PdbELyG2BrXWfM",
  "key27": "5CRsppn1fh4HNtAfhb7dhEEoEGWVSuzWjJAZUCTWXBGceqVKQkT2UvfeCpUobwFxQ4bLj8hp9DkeHtRKR6Bfkc5d",
  "key28": "5RwFupZfVx4tGycDihh2YmPSePfzaKmcyC4WzEGeDXPAeaymiSttEjG1XoE2wiof3ESj72dT9BECbS3G64FpVy3i",
  "key29": "deLgdMDxJRnXYzfVQbFt4A3bm7SvK3xoz3kY2rVANriq975CLL9RSh4sovr1a9GugSQR6BMbfsBm62HEyAcAMTT",
  "key30": "26e7kg38iNsdWkmLtvFJFDyheqjoJbwYFAtrdneFkLx4PPAkgq9bUQUDqa8brK8A5uhDNmdzez5fcQuddwmSBJ5V",
  "key31": "2hvBvasX35zHqj9Kzf2dqGt66JQfeT8dpwqdQQRoiWgfLa9FHiMfny1KuvZFLwWbG9PwrMfdktWUW96XgmRUd1PS",
  "key32": "2xgk4iMUXZeBs3vgCzGsHTG5vp1j7uUU9WR4GCwxzo9Rt2TAEx3frfiRXK35obv1i1bmZzTv9dLUvHzHEHusA4JN",
  "key33": "Ytgxsi3FiXmn4stxF5PvJdErTcJewi7SFuhcnERPihfzqzuLy5dizuJ8KZRXFr9Lzcoh8J8qQ1UXHfafBaXsirQ"
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
