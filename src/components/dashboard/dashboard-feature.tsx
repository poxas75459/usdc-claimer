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
    "5wGuRhajdzb6QzkZAixaiGwyGZu8pXkT7X3Jo2EKzY56YizwpzfPE8HpvDbZT7Ae7t2jdmXZc8avtshwQyX4niy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUkoSBZXgQzbVfmkP4ghypPVn29uwCHSYEGo5pJ1mg6NLce2CqyvWShVvPxprCvMvSHAQarUSRBQPLVt7Rfieto",
  "key1": "4aw4JMvKvTEzpgaXXerEWCuJF4NVEzjQLASZT1PT2GHJrKYWP3vaThqxRtqs85QMYyYE5bSEhSotF2MNx3XQHGXe",
  "key2": "oK8GweR7KWsKFP1PFmynSmL7Tp6hddghT7afbAy5FcweAJNJVxJZ3QGopcVCVFHZStwUoCyTUJEykdtRwMnnAb7",
  "key3": "TZJaayBAh5hsd6QTMnPKrgXnffjonHvLq82jGBnaW2Ub56RLmwdpqR47JrmMmBQDbArqmW9GEC6LMTAFXTRuRys",
  "key4": "2NaLm8ShihdQPMaLqpsziFMY4fYfn2QXbqeJamcJfAmns1kqDwnRasqJ6N2d4d9QbE8295REZzVVSkprVjaFx52Z",
  "key5": "1EbHZP5mgcBs9MDx6FzZRW63wabQ19vtcZsnW7WxDFhhKeUzYWqY2bQaN7bstKQJAxS8ppaPKAYDmxm9tW4bzjQ",
  "key6": "2XH59VVu9excyLNZZ5kiswDozWsUwQZxGWNFZVHf2xjT9KbMSRfDjnZ35NVMJE8DSE6AHH5Uq8Pow6dVnSwsVaV5",
  "key7": "5GiduF2m7r9wCcKEpMPa5y9oANKF6nyNKXtf12Pe4JkPiJ8WtjLELpLxGBLeW4WXVC5DiF8jtMbxN5KZg8b6RTMU",
  "key8": "3QnMTEYVvzTEGd2io1bpsb8PGn9Q6wQdqKdmPKjDzty8PR4nQob8oEBRMrgcnYD8AkTWxPbLvGtWkLFQ2vntFnqt",
  "key9": "2umR5ctiX6T5sqy8VSXuTu2SAmWmV5FGezsogmhfTwBFcDcea4BwnPZpMhZ3ogcf3ZpaMonfGcYh18cFvxhGNwp1",
  "key10": "3Z8pFJPsDj4Ai31ZvA3TsqEEzg4cfS8Uz5PHVbKj6CZwWFufteh5QsD85BXykig4a2dqs8L4joHq2ontqKBsZnjb",
  "key11": "4CoCEdEBd7rJVN81Ea2qKtEqXbDQJ9LzdhMwJDsoATZWWApCQC8uRFbQNHxHiTXU8n6pRBLeE8Q2j9C3K1LhGno5",
  "key12": "5UMwQKm7HMT3UVRkmvJWbpHsJdPzEHEZmzaH8D6Pvo15aLcLyb4BBV2eCg4WVucJJi1bdowCkuZRYqeNJTa41RvE",
  "key13": "2dtnQsTkBQKdEFfmiqvydkojVneoMGaNR1uQKqx7XUFAS2R7j5thsF3HzrAdkFQJRpF8Rmk7Jy75wKTBqmz5w1VK",
  "key14": "42qTBTh5uQUcsvYMaQKb4goLeB5ZP4R3aZk88n6ztD3F23cN2n481hvbCB5aVYrtsixiDgJteaUsLWTMmXNvy5et",
  "key15": "5jna1VxxxnJir6v49XP1LNowCHHgj3xJW8PQUGWKD93wKXwJR3wfBf19PpRKcGvCn97TnnBUwQGLYwvXSSqpqeia",
  "key16": "2dqCNNiPNA8ZKA4sxqGtjZ5qJUNPWzTk2HJcSUua2KLeSLUyYkvRL1kkYcHdYqVZiTvznBGCdkcXiaUR99jMn68H",
  "key17": "qP8PnXe8Qd8j6yeuF5M3MNvdajKh9yyAdAWK3xkM1JepH4Au5zi2AWPMW7ZU9RrrttGDQLw1CzutgFZSJ2YYgeP",
  "key18": "4DJDPfziCLLPKomhKi9LWAwBh5cZgf6Wx9rejkEaaC52odPZwej9JkQzxsFm8usVaXgYj519UfKJYGviy8jLvAUe",
  "key19": "rrVBAb63pKya3w7dGey87inQ1HRU1rsb2YtHkYKCTmx5UNRPXfnsuP89mbwTnDakg5FFfMEvCSNzC4U99Jag9Q8",
  "key20": "yENbPjthGTCMwQyteo9TGjqhKeV4C2ZNghLymgfqjrEqumS9YZxZzWQ4eicuzFhscVtM6VCMxjMzVToqiFzdL5h",
  "key21": "3Yt3P7iekVedApT855hTVfr42b6WDzW11rsjoZYuhnp1drWbNiWTQh6x9MD6d4e6mm3B831WT5oR2uydLBFFtwg3",
  "key22": "2Fekakfj1xKpB4qL4g4FZBjQbT4dz4H9PBVVnUiuwmVi9AtEuzv3bsJ6Skv19MX7DyAc6uMozsfRAmt7MwuU1hSq",
  "key23": "25ePE3rajhpYUF4Y5Pi7D7u9ZnW3k1LFeEFnhjH1L9SgZvS33mDyrkvQFhMPqL8uh1Q4MzpMsDayBA3VfEazpzHS",
  "key24": "3iyGxCQcH2LMJEF2BSZam29nwYm2sxb9gKedXA4LEmdADm2iDYysQxsuNvV71YNhyLFKNZZHy2LW9t521foPDjeD",
  "key25": "2o33t4EFuftjd5JeUxS2QCX8Cu37DwCoDuj4NbeRFwVAmNDZFHMz1hyDu7kuNrZKdYvmZXfKYsLwFn4nM4KdpueV",
  "key26": "3ThokcuXYpq9mE696xUA6bPyVvd8mKTZaZuyV7z7K7qu9BkDT9Hq8THKS9Gi5JkPzGTEMfEVN8LxK7bCFks3phHb",
  "key27": "3pn5hSt2iokdVeXchQBnbeXjj6vc7PPitvzahPMB3uMwj5GFs47GAiuqPd8rLDcxABcdPvkk9G9ULz6ybWamMELQ",
  "key28": "3FfavoXm5XUWwFRQWPgFhSzcKiS7PJxoaxtcPzAVH1Kxa8X3dS5id5PAHoVVJ3WcsE6yfqnrnqn9DHd9kBhMtsJP",
  "key29": "4AA8SEknRPtz1Fy7kXp27iAPWpUELdDZ5gWKC6cteUyUW5k5irtZrULvyCf7jtRfmVUZ3F5B5a9capEny7D9ZbCs"
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
