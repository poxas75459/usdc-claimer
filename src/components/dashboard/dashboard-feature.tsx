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
    "3vrnbGm27guSYNtE7x1U4Tn7e1TsgBwCa4rvTEDGmUxP1qCFWAY3NPs2A6dKxDWvcRb9Tq32qCc1ejT1zkh5LTBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwbBXALc2pzSyuVr7Gs3saeRtxWWz7ngDAG5YwTPZ4NmnUP7NTQALDavEuhnkkJ64KyXWXaLrKbe5vmta7e7LWu",
  "key1": "2Ab5T4rbQgohKwpLh1FbhiyLYFp3a94YSDxqHAPgCCoASJ8QJwEHSuNRWm3A652gKDj47N7BFH4MrWXnhhpCx8KR",
  "key2": "3A5ctuzvRBGtePMK9pg3MZjpeSDsqcZGce7bWQzQUasritULpeQwmc3HAkL8Qffe92WPdLERjptUqVsRznJ6fTNM",
  "key3": "5jNEXkHMcZrZjSWWjTnu1v3SFQgq8bzkCM4qVdJr92jmKdrMXG9VnCNospE2L2b8xsyiFH3tyDf6roZfXfoyDg7B",
  "key4": "41MyAptzRwmC16MjNUMmq6CW2KCgmoY9rrmGPHAE6DuYEqisehWrPhLAbihtQuFY4Cf3U2wcYi4qUtxfpxaLwk9B",
  "key5": "2ia4VT78chHcMAwJX79U4xX8PLWFr52TzTAipgb2zbmZhFvtJYwaRyxnASTLyZ2FLF9trN3fTcfqxb4enopBr9YK",
  "key6": "3c47vicNdeXTzBG7RL9ibG3gwioaYhnv9mnH7nTJN5yeU5N5WuZZuph8fw1AYofxynGyrBWqTs5zcpyyM4aiMKAs",
  "key7": "2hV1ZZpx69kCbR5NP531gSJQ4tXkfGuHU5V2PWUCz8hoE87YdWYGo1wn2VKtZbNjaS4XUbrxoL3VdXVBma8Cj1hJ",
  "key8": "x4j35bcVyAs32wjPirjadezZNvazQoBpnbC48wWC3HTAX1oi1BQ3s4xAg4ZG4pkvJa3erMUgYyxFeYf4XnDGg7o",
  "key9": "5Uhu8ADWEvjded7LqDtQRBZcftJnJo5oYU7vhFWzdWfGFrKjg44kPyhdtatPZ8XB5T4vxSUgdifA3dAP1YvDUtP5",
  "key10": "2E8Qo2v6eUg2a8dc7T3TcPJ7gJxWcu3cR3Jv1dkkcZc3fUhpWzCoUz1ZbMcnszd489hETJJCeJHDKzvMdGS6Ck2X",
  "key11": "226PissfSTk5exHENrkxzRSuksTCnaXytwnxdxWycrEHu2NUSmsUhEXRXxmGVYaWrqeQPwpFmwJvasKkKjxNJsVL",
  "key12": "3HGTNbFd8KT3UPxTab8BAZJXrxxNcqQfr8oBqncWk7wDN5i768oymH4A6CuDBje5Pz6YzaUKhLDmX9a8LDMWRcp",
  "key13": "zQz35ooeVhWbzNZ7eGUTc2jtyyEW5uUkddmwFxKngPH8SaGs1iF4uPVAChVH7ePZQPVKvigpuMKxBWdnhvDwx1e",
  "key14": "4xxPn9Gn6QogS1vT2jkUbzV1RqDJsgXmsDJRBpH8USZfK5LHBPy3C1XCM5AuN6zCtztWfaKE1GP5yg7i7Zzt88Rk",
  "key15": "mhh9wfAGHBagSapvm35HFrrhRMBkog9zceetXe3ubgDrYCrVvHYKwH8Qef8uCuFPSznehP6X7KTrxtk8kobpJbu",
  "key16": "2Gr1zL3wr4yuF34QED4XnDRgCttCQXJNPNZD5h3jAkCdteFoPLxWE5Tg4mJruv7Q4eVh4E24vU86fhLYnmBhpyAm",
  "key17": "3xDxFL1nQRvDrfxwtcWQR21Sp2iqiCzrrRMCvS5Sf2tdDRAkrncctkiWZnTWhohrbrXTiRsXJb3afREey5TQmXwC",
  "key18": "53YdkfipKYMv3AnR9RjbvnXonKLKUUvYJQvYt7mwhrhx1yw4X2gmJ8DxEKCaJugc2cXkmmx3TBN2yupvX9rosiMh",
  "key19": "3HJGzyQsNbnRDtEMrBPGSVVheK9QwV8bQfoshYo6nghy9bpygfBkPhn6iDks61ybAebgW9qdQ2r5pPSGokT9YYCE",
  "key20": "Rp26HPbxEW5EsSBphArtJpFMLnRrmXXYW9jtnaW3f9YXnCqJhkadGpm3XtfsYeE7jsK2ymSXBrB7oxBau7xH7o8",
  "key21": "25avDnQn99ZKqRk8YUDA4Wd5QxKYJSuoaYSM3DQKJ2BtsCuXRXnt4vwgnVV6k4jpjK4hYW5BzYJpHzDt83hJnHzK",
  "key22": "5kZtDeJkrtUHHh7MNbbtXXqNBnyMiruCnLqJAtvd7ZFRxek7HRygcJs9QYG5wHoJHU65WGCXTvU1Tba7kFR1Zq9",
  "key23": "tkgPXU3jyeipjLjfE3Xh4W464xEh3Zrqhk45brgaTU8jgU5aTFTikv5PzpByj6xwrof5ibecJLGekjLydj98tGy",
  "key24": "4pmRtoFFozU8QcU5MbWnGfYr5jUkA2Rkfd2rB5EiA73uz3PhvQ9y9vKd7s3kTMvQkJ6d7fjCbAmDiPowMrHUTeNp",
  "key25": "qRwTSfMdM4qoJoPcMcvN6XN1LdoreUQbGScgtkRmHPv9eimvcQQunq2Ca7XZcK78UMVWhfKy9CSan5jfjFmzFDM",
  "key26": "6cPgvXf58JxcX4VbFZqvnnhdfcwikqeMtoKGg6aYnSoj8ov95QsFBBatFN8eA3B9NvsoPhJKyZmHzGYJryfihiT",
  "key27": "3VYoRHE1PiUuSrQY52cGbUwHnfQtJeNtDU1kGaVQHJb8snYFSnGnucg1WcehS13Wukrj5tkrD5grUjUjGMJfdv3p",
  "key28": "3y1V82rLiqzDVqcA1ipTkEkLnAWhtkvoVuqU7quStGwhv42o1nHG9EkNko3v9biELkLKWk4uCx6SDBh9UrxfY5Nc"
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
