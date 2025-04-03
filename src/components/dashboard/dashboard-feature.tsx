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
    "5ULqVXDNMUv6XiuiZWVvnAYrgDyzzf42BwNG9Wvp6TZvikLRVh1vjKZjneRPUSXY8FqdhyR5kFifzvKcRXvdyqYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woRfJqdNR3ZRWnp9zNCRTz9zJkwxk2yQL3iXp9LB1BVZiVFZKzJdKP9cU29dznN6NjJjqYidQPE8Z3KGncqDT8W",
  "key1": "5UyXoyDSsJ3dRLGodRSq9EKd6zq4PyW9pkUfqckgYEsBek2RyCE2QiPpBCGSZvPHtuWn2t4g3d6uFpjxSbjgjfFS",
  "key2": "2FYrfUwsG6bQg7L5sVYe4kK1PqiCf5W8M61tW65WM7YWW2aSQeUYY1Gpxk2DRGfREAG91ssmNjuXmNLAWujZYvUQ",
  "key3": "4icBTVLM9SvPqV3g7S1Yhb6w3kKakkikXs19MneLiznk4A8Dvr1WVnzgPXeSk3Tguk56eCSbAmtL2UX4noU8JjNP",
  "key4": "2cC8isatNoypWzTKWTMPYfwXopxH7jjrNFz3fY6avrfDFECY5c9gehtB8Z8EUQmH8rR8pk4ouzU8BtneyaopfHXt",
  "key5": "SiLkbraan9aRoBnbQ94x9ZhPz2tvRRXw41rLfwPGWsEQeXmrzSgdm7HZTXnwKv7AhXXbLvrwtCAmwNfyC4V1qb2",
  "key6": "ibzcBE63VUf7wSgsDgnZ2nGC89oX2vCyL11g3tvHwtj4s73aBf15qs1toUf9i37eFaSyKk4xy4mpHqx8qhqYvko",
  "key7": "39CNEKjgARUAG9evJGLG3zsDhKQT9QoRqpUFoKoBQnSPJTmhHC54bEj5u1kvAqMX4YPheEo1Jkn9CkUdVgi2u5ku",
  "key8": "63UopL9Zo4S9Aebe8cibjk82syM1M1zEbzyFcpMvj8biMdbiYKQGGD8CN11sp2qsXkqiTVi1HbDEWCsK6GdqH33c",
  "key9": "4TmCyEQSerzZK8719V6Gzt4YwvMhHpfV42gFwHseJctT7tR8NQcr939Us6uk7R7QgpS4gj8xaTNjeHkYusZgQq6J",
  "key10": "4x83rG5BfZoKZqQvnPYyanQ1DvZLXDdanWrtkmJN9zK5Xq9Vz5mhY3HYkjQVCibcTqZWUuTkmLVpkFQaqE9NEAm5",
  "key11": "A43NXV24sZgKvdV6Sg5AhvvvpyFAd81rhB9uKYGxspud3Kd35TQbHXm3aJJKkFPsBbH38TX8i7Z5DmTaJeyztZy",
  "key12": "VdeucAih8bNibLy74pkoJcoNr6WxZ3aRmwXhNXeDExBKgKUwGy12aGFoy2DM816nok5usitjhMABD1CTDifGXXw",
  "key13": "2Jiiu14ZhJnfduJ5TfmocmK8aoCLkFM1oMYkzqyzFS2LoyXw8Y6aUGMDVna771ceSBPzjgMGf3cCgzFyUw4XkM97",
  "key14": "wGLWRwADUrWU1yPApC8LJsTLHmbDEgyk4XrW9V4zJ98fiVHeC1NYYagSQBKte8zkSRVvuPGv59oCH4hCm1ZvbdR",
  "key15": "2hNXnRAceYVvkfeQeupWdwhVW3GRhyi3pnysSVm2vfRYu7XsDenaFXZ8Ey1zqC2bDnUJEZkvpbgrT6SG6KJM7hKL",
  "key16": "4WwmknEFU9ZUujsVsdSDLp9CAdt9tJ5TdLSxtf1eRwwBYmpAwMu4TpSA4DuzbkS8QGWGdrV3y17siAptP8N4FkAi",
  "key17": "3ZC1YLWyBWaKQqkBTYUe5fAfCsaRFTVGHjztWBk5TKFKz9AsZTES6PekyenDFjZoJJcxnszsMEUYEEY8hBwUsPoC",
  "key18": "WREgZEBScZn3kWY1rLCtbeySacMKCJvRE7y4Y54e3riV5oNJt3y5F6pVEVWLbUBmD5pGcqLhZ8ZBRuaMtJkqudF",
  "key19": "3RekZgjbht7vZ2XfByoeCSssqF3HMzRVuzuHUBW7yfAHSdV5qBMtbUMjfccDvbwR8aKygrdMKE3SpR8PLWfsMe18",
  "key20": "5y7bFKkjAbgufS3JuABz5Sp4RwxomKRes7Zk7xNCsWhovTyHrt9Xqdrst6nhySWjXV5PKjgUFcS2UM9H7nym6Kfu",
  "key21": "5bUukUie7ZFudUJTWoY66Z1r5qnP3qJz17x6avM5HFJhboyGMnjAhzXnJP1hs8hSXMabD58U9pyonx7zr29qF9GH",
  "key22": "4sxfbRNMn9z9EmRYZAkKVL1o7g3PSwSy98mWFuEUztLA7bbjevbmdGSXExwG9qQw3STd1jcRz2pZqhwFaWQhWXr9",
  "key23": "5GZixPh4DbBy4r6XddfB7P4C56BsYCE2DCnrMRHQ3m93oBLVkQXaNsMA8jxB4uuoDwzpyTVjCu5uGcXbEC2nCtSN",
  "key24": "22KwxnGeDurERs7itpdLQfzwUELr3DL6yjv7L8jbvouSdtsFSbJ8oCejX9dZR2X1wpXY9if86TyHQtty459JdAKH",
  "key25": "HJY12x6zvXJiAmooDXnsWbswviWLv3dNUeVUSztBRqENZJgzwnbyqXF8koRh2JgUS8XmpzB4HGhR5B4J7ZQojvu",
  "key26": "53YB9x49gBP7NZkzP66kZTP9DHK4YtM8Xsz53nNqh1EP8zQVm225g8LBn2HggCXQHwkz9V3enxj9SkM9G8ytko1v",
  "key27": "5JPPCcaDHNUQamtaBmuoM3UE9PECCX2ogPQgEMpTQ2DLp78asw2GzvXz4ub9ro7DDeFYFs1CnQJw6eiMaQV4k7jK",
  "key28": "62G8ZWCJSisiE3ramJKNebHJZ9E6TS6mCur7RmTASGKNvPYznskDRTodkKqdu1CNws6jhXzbFhzUZvx9LBeXF1im",
  "key29": "3Tjkc2xCPNrtN7mLg376Hzgex5L3nXyvH6sNHj2S8kQay1qRKBdGm3TH9vpVibpPnrWncAChiCX121bkeLB2RVmS",
  "key30": "ye6YEjGfWQb8JJ69v8SBfGRU53fqMwK6rh1VwZupePTKmGoDCLKJ9MHdH5j1pz7HoDFJHHJ3JKifMHuhTTUcesP",
  "key31": "4Rrc81jQkN4RZ7pf7vvs9uqw55gd6Ugfg8cgUi8m13ejpwK5TzxwreqFjDuH1fScezfaABLAx7VbgsvZTEug8vDR",
  "key32": "2tapk3A1CU3bBtuDptNrWFoG5KD4mUkgfEEAsiBps3DwjeHiDeEiypo473mVBEmr88MBsxcGxn3BS3qH6gXVSob",
  "key33": "3pRYo7ManNB9bDz7B5TACkd9Mh3uiji3LopVm2qhuqgbGukRSXUMwYz8FwwvCPep479Kj17pcW5w2ASMnR41aCGE",
  "key34": "3jPYbBaqN4gGSHQaKL3TckRyvqeevdFmmSVDVGxvd15bRPHESyZNiU99hUMEfLPg6Dda8MwzgbBFdS3yW4jeD9h6",
  "key35": "25oYmxNJVGbBsEPKBUjpHtjbFjoia5GHgY7GN13rhRa7fwM6fqLbycqP5291WM2GELghyds5CBQzgzBfXGvFvuy8",
  "key36": "5zm3y1LfLCbobPsMtr4TSnf7j4hKgmKo85TiHJEgRoCjNSuxHBvB6bw2gMiAL3nLUv77cXoKsomKtWXQK35V7aPQ",
  "key37": "5pcw2cA9oEbD1wny3tbByopQgGdefiv7916hXNFyBkK6L1EYR6rqLXRz5fC4eUu5NxMndRKemHYdi5j9paVefFop"
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
