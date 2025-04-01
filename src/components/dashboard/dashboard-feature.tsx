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
    "5p7qJDnkUoo41ZMaVzU8iD6dN7FhkKM6oWpFY66BG33WZMaZzpzrqy1WNVe1rwZMpx9kAAYn2poVuGyJySMFBR2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbHNdeGoT95685rDFEC82AefHBM6VmoBrM4o2PkhxTbNd7T6FAAAQAAnzDxmCVBXwdHZsWhnMBgcp9XsoEdDkw2",
  "key1": "shiWZTR2tJutQqCKf37kig8mMUS3UcmNWjSW2MuzZi8trwNxcYvNV4sKVq8WfK9C3kBRN7TCCKxGmCWJiCvhYW8",
  "key2": "5iMzDadhZyFrPri5pafPRWmvvJNQQmr3s8UwmKfw7vwNDPH6DiYSRpbJgnYTMixZBRaSzbtuhFFaHCzyeuxDy8Te",
  "key3": "5rkYA7HRX9RiF85hDutekhGjp5c7VPUHSrLjuwMQjAQawimG1tRSreSVhBoZhGG4yoTrDN6mj5kTmc7qebEoYXPF",
  "key4": "5B5hxvagkM211qwFLwYzZ3wEVNiHTCaCEv42n4pQh1WhB95AsXgcdqbn2ms9e9wEfANZ1v7vq5mFoWnR6C1e78Uh",
  "key5": "3iJDPMnhPwzphHPkVa1hEt3J2ZWJPjtzKiEQsVd7UwYN3gGS2d5zPLUxGyF8L91j5uY4QHQaeswtr6XAj8rHJwUh",
  "key6": "5JkXiUjXpz2BxiAZLbwUSGBYeYS1sACBBc36ypqP2R3HUJ6CF4uc2A96Xqv4VSBEWGLyDaoSQ8jxpzptW4u6MeU3",
  "key7": "4CfEv6TNoX9egiGF5yY1FGPXeEvrerEJ54UNoWxDXWWtQj1HqpKEge4idF64U7cqrToWeZ4wkUCXsKxmfFpYPWm3",
  "key8": "51SPPRhQWzPfnbrKpWTr7UuF3y9gpYVUgsWBk8sj5txfwh8RdxooCj73mU2TGnSKjskcJC7tw3gVLrhaipktfFCb",
  "key9": "3dacnjkHsmE4LCq8Q3HM7RcyXXpT9Wr9kRvBQhB1voBrDGpaw56eWZNjA89vQYuThTCccA8Td6nTMVbqYnzVveub",
  "key10": "3iQfLJtUVodMVZrmGUSRBgH9wdRin8ckX6A8h3H9dqdd9A4DgQGk6ri9qoh7dr3oJLt9m3Da3f9Gg4T7zwocDqtf",
  "key11": "2tTJPqY7QiYket7sK5htyyjVaJ3iPZeQkJCcFwachGfdSTxJddcsyf1TLiRQzRDpGpUkFDhbzqhDiqMenq9WQeHJ",
  "key12": "4PTCcw9ttoJJhH9ngDkQSu4ox1RYPpnJ1hRkUH4vGcStU44Zvb3tCsWskDzNZ2TMD8Ft1VhSRqKNjZEYEhttBEBb",
  "key13": "2pUM6YBtw8U1XNh1vdHCz3PYjrwyRxgH5W1gWqprH8MkdDpdpzHXmbecJ9LTNHXDidH54MadqLKrXhnLGx93yzAo",
  "key14": "29TKgcmkyMBLEYFh4eer7bDpGk2WQK29VM7gk1HbEewHyiRujzbEeZbBV5qnzpYFrzt6WDcbwaQkjRJfh2q1khhd",
  "key15": "3qYAokdEc3t5DFxYPA4gPoBNdmjcxpApx2qbv599zid1NPLYsne86u2YMfqgdFiEYCircb8juyWTHDH7WLyRTpiS",
  "key16": "485gifnr29hvgFGV1YFqCUpKCKR7aHsReH4uvGb2ahYC7YiMfA5tiqJ2D8k7oBqa57V2W8ZSMtktAUfg2xg48vjb",
  "key17": "3vtLTtctEHaNePufWkAMS1UUv1X1v3cW7JJvscVJ2ocADabU44s8pdRnpPx5yGg8F6auSQ2ajcXAA9VkCjSLbkbW",
  "key18": "28S66nBKjPM5GzqakreY6N97BBTFwuGA7MQmQLWoyXDDUxBbL2kEp5J8h4U9G1285E9woc26w8ydC9Cs3PKtBxD6",
  "key19": "26JPPshvW9Nn5M2ZVTLzgu6QLbC5KGrctSQtqUYXRA8vbNLdnmzK3JSkHQx8QaebcU4GpXWsxQC9qmmLD4ReDr7s",
  "key20": "3mzHMjXYUtTR8JxiWgcxtSd2xeRj1eQ9hkSmobbz46Seps9oqCj82t9vyZbmd23oaJ7ZBWJghLAFr4XC2z1QiV2L",
  "key21": "4kpKSTHk852DfBVyxFLiRDAVFVGAkKuiRrNLjTpbn7ZJbHiif2LBgBk81a5wcfbwy8daXtSRVu1zR4jEAk6UHvmU",
  "key22": "3F7maBYWbMdffKwfL2jWZerPKDenYGedRgrXhVMfhMkyksdrNEwEfJ49S9KcE8iqjHAyzekC8gMvYqgZ4R5rb5rG",
  "key23": "477z5m2Wwa4uK72ujZdzak18JuiYutML9vEtrqtqsX9oZLrf2VWeFQ8NWDCnCkX9pepV8woeMrEHJrDycMovu2K8",
  "key24": "5wYRY5udEbkyyi45Eed8ZphftY3mFXGHN2KhGNZu27fH25GUyEnaQgFV7Z8BeVBimTuiVBGWSGoiSrUHhVZUhsAN",
  "key25": "4xV4Yrr8KNrCD3r6rj4crpT3vYBiqnUwSNczqU69B48jqo4MNvJs1A6z57hFJPP3syq7BvLFsnwC8TRVQxyULYpW",
  "key26": "4syiVKPE2Sj1HcL1xFDzfsKXK7kh2oU7LWD4RywYvbFCG9ramY2cgpf2Gp25oLNQG3aehNF9Qsp8qsegXV6v1x5Q",
  "key27": "4s6eewN5KyrB8W5euZTSEkyt3pGKVbkTrsEDVv8UzFCDUJXeceXeepoBuCRioJPuUuJuJKCYisfai7UXrb12mJvG",
  "key28": "5WgPbDqH4WAnTwi5HRoNiiXXuVDbymZUpASHWeqJkeUmPr5cf8KyrGCFsgQSzr2ebWRPCDT9G6JCRZErAyQMDrNL",
  "key29": "4uio2mKFWvFaV4nYyv9KR6NwujiwECA6NVUmNSf3J3qPEu4EZ5XjXuLPfFLugDcAPAi445kAdhbBvT3FL1Tcnswq",
  "key30": "3SsBNbEvRa2aHzXqzwKEkH4yXBnde94EZnzY1Mqmntaft3UgPFApsbTsNhqFp5nqtqSE8ocwFqxRErkS2oN8M5Jx",
  "key31": "GHPAgkN7S2CvZ9iySXJFriUM2qg6gtvBAQYWCnEek97dt6DDYfK2aQyeiDxgdtxLHHRXp2GSKeTLftz5aqpkpLt"
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
