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
    "2nbBX1VpxQ56XF8HMsXNWC9moStFyYcur9SsfeMLHt1RvVryVTdgWPeAGtUeYWLijiLKtBpAEXvjyFzjY319Y9iD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTCF8ycX2uL4idve1KguzPrTBrXQwW14Mqcbkr7zQyuxuF6ydJ7PuSUeb3HgLRqPyEFC58hyxswaeCaNfE7FgJs",
  "key1": "3sJrUdeqknnnenWttg9J743Xdg3YpR63W5pGheBy28jNXzp5kekPrxbS8frxwxDhgk9fM3gqg6JKcBB75ZRwuFC2",
  "key2": "3Ts2zaFdutSwDKDWdMtgk3b9ysm2oz7oyFB6uV376xuW58s7hU75oqkLjEKCAH5djN5bCUG8P7213hUAGnwvvet2",
  "key3": "3MUGB4EkCe6eFrqhS7PEreh5vEf3UcHvCTHRXqFMFW6fuYm2Bj89kSEuCUdzqwPLu9VFLfjx8bW5c6KAgGQJ8ZA3",
  "key4": "4KKQUrF5qG29iaJVQaGUEzZ91s6Ydm2qUQ5TsxQdhqBbgzDxx9osgaLLdXpgwbwjHXsamt8CNF2mmaxsJfQ62a5K",
  "key5": "498BF2BQtKC1TcJPjeVyJBUV9gPYWU9qG2P7di4FjUybAdDF9MtDj2FRYENHEbUdqRmCx99Yop9nqfFm3YhLvNNn",
  "key6": "3h9qBoDhK2RPn4AfXGsWF83gZEHjbeFKo4zjvecEuuMkhGrcFwEswSpXcZxXGtW3AyXNh6gsLcBHPgrFHZUitq17",
  "key7": "WLpBBrodrCDjCBxQZswAoqgzMEQHuRVafqQeYY66B2JzRdE7PwfTmhydofsZw3GrGyn3b9wpFkHAThLyxs8X1CS",
  "key8": "4uhACxq2iSmtpF4BWGGxZ5zvxR6j85Ph3uWpMXivWUALX6v4ZhD93CGw3dLKrJadjL2HL259K7T5pnWCjNXbutG8",
  "key9": "4kDo9XJhRSWmnE5jMhGCsVGEtGvPR4Q7DMem9zRQZx2U9hLxFtzrKLzodZCGjVwLy1WmGW68iZ6ryNc4wrZfT2se",
  "key10": "3VFNMNs6Zb6cZMSHJVcQvMaMh3jHXfA2oU3yBi3D8kypV5dgyRDtDa2NGN78FKGtKr1DfTqTHbXLqCWdT5XieDss",
  "key11": "5SN1TfUmKoTChB7hN3RZqUZmtxL5x7Q99braJE3KNkHvocBabTcDEf1ZLRvC3tyPsnKmjUWbcHjNePApt4ba6KrA",
  "key12": "3CvgUFewxPKjUKkXJovZ9biwx4vkvYAzvE4og4nJabotfqWPkeVXFMYhxXqUXDerdvTyFmPWnz6CMPiV5TATZcJd",
  "key13": "2XtmUJsjzi5LQM9pDX3BdBJowyBGdvw3rqaZADZudCvfecwjk4NzwcvkNQTHhG8BqeSmAtcz3q1yMX2JE4kQJRtu",
  "key14": "4qGtXt4Jrpe2zm3FeXX5dRgRz6KNi2KfVNHDWbDhCwnZ8qAbbJAhKGcVduUfnvHYitZKtAfMYCzVf2ZvNo6rxV5J",
  "key15": "3Nr2cSsjqvS1WgVNfkZ8j2yhfAXhBrvmhFWoRajQdREmeXG2jiVi4D1CdAhed7qcRjUCSjMypH3jeHCd5Gke2Vjv",
  "key16": "4cZRWi9daiqBAGmkJ49Va3o9MCnWCdaihzXL53ufBhqRnYruJpwqAhZ3iM61GNYFirWB9NCGh4B4MSoER2W3E9zh",
  "key17": "3f58L8Qg3ekYCWaPtPHFVe2unGrcqGHwip1VqV5AALtY1yAyuJCsrDWwRvF36KaZr21r5DVdMQbGDCZGFwhXYd1S",
  "key18": "2VVddhgtdykY6APoTYBFSZ2vUfTuZRK3Bw9ytSsFQTCMqMr2Vpo5MZzmZZxpYqaiZUdKm5uXm2C4NCgykrckdjud",
  "key19": "4wvJANi2rYpFBrgYE7VA79kgBCHJzcXTwcJc9AYKgyuvEmEBRQhx3EZd3FskPu8ZxfX4HtHbNy7Lurgjq8qaPWxM",
  "key20": "4BQxgXVZizzW95mwthhjt6SS6XecaYVM3rayD4miTMVMzPJaxtpLPud6ESAwtyK6nE1pdC8RdGesZzeQ2rbyPhZp",
  "key21": "3WZ2A2dHiHmBEznqAPSyR1obxwZ6sKWSVQNCeQK4aZwxBjJDLg6po6PMJtQTYBvbCDAyQydLSVEWGxRbYeuetEP8",
  "key22": "3t2EfpB1jPYCyNGh6wQ54UjeYSgLZ2rYGbhe4ELhf58bXbrtWXzjp8233R9YHLSZtbmWJcroLG75jNZCRsmZxeAF",
  "key23": "4Xm4L5HVweXZjcS47dDqCfLSiNKd3Tdi2urS46rfDWqm5eg7ajRpJtcxTQUejbvp8yNid6isfrA67cAzax57Q68w",
  "key24": "5H6mFzyw6LYCqT5jCoRtkcyMAdLPRrZFZJ2z8Wh7mBQFW9a9cL3dnMpzJRryYf8EPV6HFFRFMgi37WqpTdi4F3cM",
  "key25": "3VtwPrBGMW5GY8DKth7GjsnNfRBC4Jt2sobTjDtMDctkTNsfVDzMfJhtsmD1uJhThcGgtTjP8xZRtsFMExWgaiS5",
  "key26": "37xes4b71F3GQvEaG69CLVpwYFcW2VmQJfcxZemcrt3jQ2CVseEtxHFSnLkdPPLLd2UW1kSqJWVvRUfw34Fyhh6T",
  "key27": "yFfvSyBWwa9YhLzpheomQEMR7zm7CbbzAXxuQqEMjbjpWXFfWTUhDzdinLDUuK5bG91QGNfbKsJW6LpdCtPUq9R",
  "key28": "4eJ1aa2aeHtxBk43i1XddVFAS4WwKYhPs8h4SZxRT1embA2vZA9puvLpxRvZmyQQBwXazbtL5adDtA47MUYPgUTo",
  "key29": "4EouHix13mo3t4jiCwG6cSXCn2vnnfNY4GA5Jb9iBCND3dGd21KMC1W2aoDnvySTD1DSivTUZMuY8vqbHiWHe72B",
  "key30": "CQK41v38LvGfuugx4rWTHK2ATfz3Zb8f9WBdQoy5SvZwGgsEam9GiAiegh8hrKvAZ3v3NptGxYR6JCd62H6GGFE",
  "key31": "48xMDVjPRb1c3s8DpSXxH4XwrK84TSpEoi4u3vyh6NvSHU8H23gVUe12cBqD3PFWVFjCn1mBjZu9fZzziq87zVA7",
  "key32": "kTYtkYx9t9pQ7A3pNBU3FDzaNNF5poZ5Prv4VyHZz71Ns6Esdk4Kz2CcW8pAi9VbihzZFUaNCP3kb3XpbwRnhuh",
  "key33": "7VLodT5RjsXmt2Sy4autrHePZSSypZfU1WJCG5hu2CXYpuwGmPAvRT2NBsc98VdBzRDmNtKDVpU8aVzRnQ532Eg",
  "key34": "5zJZTrFVkfAXzpSdiR5zM2Uw3eYUzZ3R9dXT95yDci6nmLKJgRYgRzJt1APwhbR3bXE22QkX6uhsiMhuJHCbvXUg",
  "key35": "4PDcjLiHr12MCc55LBqfiqsfLWV2pzKSi7oAjVtVDMcXoXnn6qRgb7SQT8PTzdmAqUSCGGkt2QxAyF9pGYBPS4JL",
  "key36": "4n82pApoKixFtVN1DWmfVfDGZV7ssrkaiEonNox7iKuHeqpyfPe2zxPJBy1vybxnwZ4e5Be1tU7RJUFGdmywwAd1",
  "key37": "3nYYZefB1fmj73uNJjezb2pikoWWBeBNMvTQooQ11YFib9pGQ19pzRLJ3VWQnrb5UsSqJXbA1d2UzVBvdHeAqnya",
  "key38": "2uj5Fw7shA8vCan2iRAWanQed46K8HWMzaeaRtFgDWwpQGqbJV7sRYTC9PpZpmWCryem746svtQcfKjN7BRmzMtz",
  "key39": "3fb7d5QpmMKerk4E6BabGXbYEBi2yYxRW33RhNmDQHe35po4ADU29jqQetEvbwLG9LDqVBTG9dCqN4yuWrDWJPcN",
  "key40": "jDghxYYk1F41cCSYhuw1VK6Nguj5ybeHckyF41sj7xbooemBdQaCKq1F3vYnXjwYazYkHSWf5pxEABBNS6TocN5",
  "key41": "4r8ycnSx36HEiD7tS5zPodf7RTBdFU38xommvFW9jmhGBeZ3Y57et4dFTTwdFKBo7mRqx3ZKAV3z6ZtvVoTW3Uhp",
  "key42": "54ksh27z1rri7aLNwkKbGQ2mCKEJNg7Q9PRJHegNEuQGrYnpNcsJRJVXPCeLzPqbdRHqqaALousGWF96ujr7eBmu",
  "key43": "3ZDj6D65bcgwhKXB7C6bKbyS5WCJg2df5PenhcXFjyq1sAKTjaQpExH3MxnYsNcccCBTGjb6TDPhxRDehnXRXmDx",
  "key44": "5y7UnMfriqb5RAV3oCy8qL8Sa1oqU4Ub5nRTTjUgj8taDD8RbsiFCYjUgxQvfUww1HbB7SNRK69514jJUS9DqBED",
  "key45": "jDC9vTnoDS9L2mZAmeQ2iz5qTDeZD6zGGDzmYxVc8gnvjpZfPA9x4b66XiHCWLFXZVasffMvcdN8TDXAKZ5avAj"
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
