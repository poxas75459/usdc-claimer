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
    "342SbZ9LJ1yGzY8TRrUnhc4bkRXzf2nqKsNd7WMEW3sohWxego8Z6KzQobD1mRv7TDuvvmgXyENfS3xt2MqHF9Jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2if2NCgEfmStiyY4DEdiHj2rw3M2KBqAHDpsTfymEjkYh8HoMP9YrEV2LcgPd4PjeWXdCNiBqMJ1FbmHUGubamT8",
  "key1": "s3adaWTNyts5dsp3pBUcMPvKYjUU2uvrsxKCZy5x3uLMfzeMKovR5M8ui1n21SCMXMRo2QAt7sYD244zfd5HsPo",
  "key2": "3xq5Qx1ZChRqsXWePKbozfQ1sRDSwJCBspD3EmtxSEefJ2rQB19VokAoh5cvrB7TEejS7vxrewp386ru1gLaZAyr",
  "key3": "25NEWtDZ84qZv6utfSDRYBJvvAZxWLsKDCY4BCW9CkW6tTLrhE8oNwJBugfTuZQKpRVhDLWeNF77p2D38YmX3wBE",
  "key4": "5ykxVEii78QSnQJyXLvsr81q5F6LRdWWjny73qipD7B8tx21Dr2qP3tW82yL32Sfc6fz81eWFSavvXjaNdBNiotW",
  "key5": "8ebW677ofpGeAuVxSrWv2mmZDrAnjnX1NPyEwc6Fw9Wmu3KXvPiEUokuQ9aSj8TyMYQM24qCyCjjmRfsxkEV3s7",
  "key6": "3ey9vL6oe9iVT9Z22q6w2QDesUUk5ipppqRrbpPPvucFJvcnHLciYuobkJAKmfmTXh6X6iwdqzVyYqAPRgVkhYUH",
  "key7": "eZhHDCQ4XdJacrVuX99vUyAinQqfaZNhDTBuAGqXjrmAT3Vy5AKF3uPiHjFobLGFnAVhdL8BbwWTw2F9bhU1tKz",
  "key8": "TLwLgynvUvFZ1e5A8xSJeXj3RjdMAbHyWestUWc3VWDcPEAzpN9QKJQANfUeb68rfJyiPotMSozDrsrVyZCWr2a",
  "key9": "5WeGexSrf2EJ75oMs7nf425M2WewXEPcCN3BGfHSmbgvvMnMAR5im5dh1Yse3rJCTLL6bTgtgfqAUJH5KFuADmpJ",
  "key10": "61LLaxdkz61rBrEtxaJ5QDNp93nvhcaXM8ddWxdgS6WvDJNABsM8zNAtJd6sZo5pScmT8t7Fzb8XaFEjJPbffrBd",
  "key11": "3rMbek96bYRq8yDvCvrX5SNzasTY92Z3nWRWFZntwdyA7tVDecbbV5ZLcvqrktaoUJbMaMhi4GbFmnpNbDQc2Wd5",
  "key12": "4RkqexvjVc5tfykMr8vt7XE6QecjM5Kmp8p7HVSTD53B92bY2m3rjUnZDMjTVR9zdbbRcuxZLxMFbHTqm4rD9s75",
  "key13": "3kcnvsf4ELaMH7NxuMLo1r4B3tcQE9bwg7AzbwDRRbXtQ3TCKpVBDprWzg5JDTz9TH5iNqhWDwQ1G6Z1vgs6GecS",
  "key14": "57AsyF6usho2WikrW96h3PgdfktwXPJAHxNcgDy1LMUcXDkq1vZ6BEp3RHiiU4RKhP14G2honH5guKpk22mYTkY7",
  "key15": "2PPN8tL5Kpr38SQfkmDbhrUFY3K4wwKHfiUaUw2GoV4QYn5GG6u7GCvyKb9BM7SmhUiBXBtzyj4rLwxXZYASRDyt",
  "key16": "2XsfN4vB38v2MSs2C7Q2VxvQPMYdTpsbiEeQRDDhFfhqQmQBua8iXeqSKQ7p345vg3a61qMsJEtCK6UxqETM7CU6",
  "key17": "3RBZYUZimcKJBGKKbYtg8BNteWmG2nsitimts9iQuFTeAMVzGPfW2bqBPJrtJjf3iAhdUfyzjbgrhYXPCFNE4Qkh",
  "key18": "331YAe6QhzuHUJKxrsX1cjuQWaekDyyGt2xoBuRL7jFe8k4k5zCJNbqpTLcg2BZUwcrP6qaucyig5RgKye3Y1TwY",
  "key19": "3cF1tJt98tTDRGvwcrFEo2jNCrh24hVQC6D2hWbFGwKbZ1GUWU83eiwb2jeizqQDqQMsyY5xcnySEm1AL5bLxZtr",
  "key20": "5FtZn1DFywi2B44BnrJg2B2GDEHgWEaV5GkzEem6mzSVxACFmnBEHct3QTeaawjDWfmaUqBv1akjHMkyDtHD1oHr",
  "key21": "51qD4BtoonyhX7wEBACUgp2wYhbAwb7M7KpnAhFxnMuCAaBoUNkvJKZSjbTgqZkG9RnyGQ5t2VN5BFKmCNwBVsNa",
  "key22": "CxaUX3ZBReqWoU94USwwMJFhv7E8HHAeyK283gtpDWttsVvXXfoHC9Z4vHiYQueNHp6Ud4JcNLfELUZCTUpk742",
  "key23": "5j126ak2viJZo6ZAh8rroPf7yitWchkV4AHP2rHDoPcAZ5Y9jmQWydhZjdfSZPmdxsajqPrSZnNPB5WfRwsNbgFo",
  "key24": "ZNi5YdGgKAuSebFsBDnNyrh8avasPf7CiUYe1kHFQvQvDbhQWXaPWHXk6gpsqYJsTJ5ddgS7JJbFrWXhfqvviTc",
  "key25": "2YgD84Yukbr3h6EMQJ4LPRB2FrHE8FGUJysoXiGLT8bakWzUudaxw4audDdJyyUyGGJE42xTX9PZe2mTgQoVb61R",
  "key26": "3TpbsaJ5FTUnpDN7pKZef8vb77JNhQG6Z1XxnW21WC4rdhtf6UQRmBLRBqpesznvZmYfwcESiN7jP82W8UsWmxDh",
  "key27": "49ZHw2EznuDtnrhmHLEnMGBNKsokV8aTNT8RTg8s83qJU2ycPczNFg92LQ1GWU7Xc8CCpVDrWQgbsRSezDXDWY4J",
  "key28": "3fsCpYkTKEjp1DDRGiQ13H5jfpPXjP8gv47r6ZgWhK3fqrqq7aAUwXabpnhxSfHoLry6KM1uLipgVaovcLqYny1M",
  "key29": "2xNsci7BobC2YBdeUa2cKjfKd8eww3tkU59GeykoQ69a4NkU4hubmgCaWrKcScKmY7SiJ5WTV2Yb6HACwemf2if6",
  "key30": "JkWDx78JZvy6yA6hDV9baQmYBfQg6Aee9TK4fhXz7SU7q76nUBSMy1J5T77heJK979Fgt5GLaDARxst1ocKAyhg",
  "key31": "WJV95PfSRk56tdtgpngmBqXZ1rNPLKhsELgrwQ6G6HGS5TNbaViKdWW2stXxDeKkK7PTHdhyxF1CFJVMa4agEna",
  "key32": "3H5nE3FPwBQMxWyf9w8tMWcP87zTc3oQ2kbeNyeB4tpcxGEGbKLdkvtkCkb11go8EgoG2d75vQrdPuR2Vs8ff7T8",
  "key33": "3G6iQdMBzX3Q6EzbCUXHwjTHZwSCKzNGJsgjbEWnH7iRikHE2oUo6tkMSuS6kWWwN2Vszo21i4dNyV2CTHp7rN6T",
  "key34": "3sFpgKaZ2KnbYfD4w6kvYVZbMNzbabXyWMiCiba7MyYXhAS1StxZHyCAhuXEEk1DkZ1tCYNJgeau6TGkCpnGPc9A",
  "key35": "41vJn22jQzfeGZupmdEs4gCAzBzQSwzrHwsGzyrTgqSP4w6jtRZVDHLP2LWD1i8z8kYR3X9BmBnWGLP4Pw2m4EAL",
  "key36": "5GKWyPsvdoEgGg7mYkfPFZKws4MLA9K2WP6zr5xNmC4wCgrSehzJ88jMuH69SZnEuiMkU5wrBZ26rD3iWCTgRdjj"
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
