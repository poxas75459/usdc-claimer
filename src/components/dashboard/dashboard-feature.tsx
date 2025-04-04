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
    "4HMdLyq88H46U5JTkSyZrxHCc4G4bYwGQAKLdtRBwcx8CmPuqfHmQ1zbcS7aRHWvSAafJ4SnVzb35CLZ8m5X6YZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WEWSHSf2aNJACUg9BYpFxuhPi4JH92qnKjZWRq8yJWEjPF9hMDnNgUZuPdHiF86BF6tJtRXewNfvTH1foeoRVKo",
  "key1": "37TXUr9ZkL61WNcSTiw7e4gkxsZ8pKmheERVUcPPorik6YNxmapsHrvzr8Tigjqm5S7F9efzNhyGT4QRUQ54CDAv",
  "key2": "BcGsrmAzHAwQ4PXwuS4hrBJ3bqDR776LGdYCuLpxhE3JoN8S4GjZdWS7qT1reyyPgXBnFQW17Hix3Cov2d4D9r3",
  "key3": "yK3h515hqShTGe4Ct9HRff5U7qUwuqadmicxTGzb9BCuakwMwpLvGsErCPcYHRkZVMVWC1N68tKRcWNLty2vzUX",
  "key4": "4P4GcTHfjuMaLdvHSCJiWJLTYhwT6Cti9UctGdxP5WJSNtNSS7UKCiXw2KXY6m9sM8xyS9Esn1w26qoXwmQys6da",
  "key5": "nJXG8V2YHZsqnRBhDwYsK1ck9xQjLTAxCpCXgTwCdV3iGzrfTMAc72enTNpAHabDj3iy1Aqkh4yEECy2qMT3CSR",
  "key6": "39yH4W9BRbhgk58zrDX7oQbyJVdoaLPxgAWr8wS2XXFCGsTKjdiCV4qNTEq5XhE5anG5FYbPKDqgQX8GFL19Pqji",
  "key7": "afQHMMabp79zK55wG42WNpzQkShBC9CF1AVrf6UAuEYBTsvNBHddPXqc6663K3Fw9pTVKorES63PpTCKdqGDtSC",
  "key8": "5fB1Tdz2xm2pTAMY8NEjwQgsUpiVUHd9jENvB6cTDvs4me3NNvAH2DSZr285GPpCzTE77hskmhj623Un6mBdRfRQ",
  "key9": "58qaX2QUVetEryvcz97cbY1Tz1KpfR1SAbGDRs13u56SUe4CxVbxbgZfxy4x14L55VmHK1tq3LEMVBDgbiXHH4pX",
  "key10": "5okXZt8r31ow9iGQAEgCP3C8aGRE3vTNFH2NiwgWJGFsx7Afv4YApT6wBKyuiqfPPFZaa67PwgiAxSUW4w1YZvsc",
  "key11": "2aqYPmWwUvdhN2qhTA6aFddhouwesuTACJc2RHN4EWZKW3SQbnJZkXwfoU4gBSYN5yciEXsckEEgBkvF447kmV3t",
  "key12": "AXpvHPWKXnBpxN7nk6ACPxjNeELA1Fe2Z2ikcv3cTKDh1oD8ZWHX3cz1vc8gpbfTUPEMdMDjXAUyxH48FAtXc4o",
  "key13": "gHR82SohhQsDhPY5j1wdyQ5sbtXszrQR7aCFQeHNfeALafFtGiKcVetsMjNd49B6HwFDYtck9xMW8gBYy9vALJr",
  "key14": "2RZR4rG1awey2DPmNYGgKEaye69Eyrj6ojXAvivWw7g7QpRibGUvbz1VRYcUGp4vPVohL1HoXZui47z6gUyoFxMd",
  "key15": "44ybV5C26n72kuTsTEYbtvGKGqPU86SmUZ2pzfowWnBZsD9ceppEh6QM9em6sVyoPxyxRnvDHhigT5iE6sjqjxeu",
  "key16": "4KstikAVyL97BfGoScf4QVjTbtgcqn1pbqiNyoYR8DTNxvJpP6SoPRwGb1a9aSzBVTggtFBKbDVftk8tVuY1FxWu",
  "key17": "4rfzbmTAWh1uPREtz6WJVd5g9EV8hSvL8gA9aH1o2Ui7Qi4jszKH46PvpQuATMmKbZ1mLvbfBVFeisAhK5ve2roy",
  "key18": "2eQhLcmzWsXZmXAnxjDbmEGcs2NQg16QxrPKGPEEywXb9KSFoi3wx1Air9Smv3CqmFM7NHFCVUS4j9EKzMjRdBi3",
  "key19": "5xYYUwRxHCqAWPTznkWNpvgBN4LyefwsU6NoAy4maUYY1dTbsBnhkJSG8HRexizQ3HRFFb7UW17jDxA6mMjEDwTt",
  "key20": "4oyWnWBnGQBx7pyjrEzYdQTPkKzT8zzx4DMaQxRcyj3L5TvEwLQMoyYFF9Du7ZYSBimWk9h5UgAEmXsh5b2MjfUJ",
  "key21": "D5n1PPXL7d9yDjGNAmpzuioXLMz6MqLAVsmqG5FHJrLThCwDVgUZk95fQ44j9JPgM4JFvryjZjhKHYzUce98muR",
  "key22": "2DaD5MVU7rXwsaCKtHTSnaTKcPKgKDWjVy5cH75rHKmV4cA9YmHn2NvDQ5YXjYoMyZHW6Tq5SZ4wErBERw237MMk",
  "key23": "216Lha2gpFjbFxXa2NJZoFnzGEKJhoyw28p4gRBqoyppEYFCiw3y9dEdWq54Ag1hisaXDCKwQVvbzx1X11yiix2b",
  "key24": "5eCM3xbKSmEy8cbTKr8nMNSm3A7gTYuF6fnD4BVzTNsT452gYnSPF43hiwqiVaQyHjh3qAEY2xm9YjF4b6ukBeLh",
  "key25": "4KM3UL7C2LG31UKcbB2tCxdLxG3KaEgiSfVThYBXPj9RiA5dx7teRYpfiR7LHpVwfHLJKYX3ikizCMQ1MhHmiFZQ",
  "key26": "jeEVA5U9KerQULDg5ByGxjSTmAFxsXWZUZP2mrfSJABUJv1MobzHk2RXS7GNCNf9j7BUsKb1jhXjfSmRbLLE5iW"
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
