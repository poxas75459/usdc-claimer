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
    "5GCS7HW6DY3r6iZodx7EK7TJc8wJTv2eCrrFdKkWEn398JroifveHD1Caq47mVf99x7qCg5VW88j5BRWfB7YPR2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqKM1yPZr7XH5rV1mfiXmwiiZBwC6AMT7NwabAaaxYc6nRnpsZTN2Y81BXumcrJDF2E8RPLR4FWhCENMujCFE6r",
  "key1": "94dQVfHPtaKPrs7kVMTLqqnpgM9AmnWaFRiw1UFT9xPBQr1z82jvqUd42aT994H3iDZkees9ngfzzNGp8s9hp6Q",
  "key2": "43KdZ9ZQh7LNT4wJpcG1HRuDLbX71kb8HkjvopA8fRsRatgtr85ge8gLuj6yfJfJ51y4Ze7gF9h1kNdgXzD7xkxG",
  "key3": "3Y8YBi6pPsndJXys5W1VbDwBwgFFiZL3wy6gQMT3eySntApdPDGzuC6bHyXxR6gxXwMi8HMtMaaKF4tqshTRyv2L",
  "key4": "3QyVg9oSFpzqQS6BAdZFqiJzmyNaz6auwByyL6t7xynyWoLd7PJhjyYVnjC5zFCioo5nA6Bp2QeHE1hYuy1e3LTX",
  "key5": "2JmYnZyvWQxpqB9mDYhS4EnVNygPKz5pDnWuypicJC2wkHWYv5jmRVPQY2oY9gjRa5FBi9WJgwBm9jQoiQJVTsVx",
  "key6": "5UkWVCC34yf1kbf9CjxmmkME8sCPfBBy3229c8rdp4LggwsRE8CY7ifR5eycAaEkTa5rYxmN53F5mKNpzVsj9m22",
  "key7": "3AfihoHoAZnGoXJPT6J39sJgBcfGZFgnbCGNY9kgc3kAGYRbFy5yUrMKxfVnAFFn3bUC26RWKQGLf48S3J87dgS3",
  "key8": "ih5mtZKm7SZCoiKpMc2ab1jrXQnA6FD7826tmhi8etpuXbcvDM5XUCM82sanY3dhZaTfXYbBzDzK9YWHG2jz2z1",
  "key9": "2MAJ1fNVVcrPBjzKy9h8U6qieqfwo2ixXAVSfmReYvLPKexLk8yH9RZ8u8vrsszkRVGB1HEkS1cvwC2JhTctQTQC",
  "key10": "5tuSqF6ReYtnCnZBGLjmHpVcStV5vDoQKmgYaNxw292JLKAarR7hmJFPkShKK7boo6kUdTc6tPhKRYQ5uDQsogFh",
  "key11": "3emXQgMig6Wyyi4rw5xBftMgaEcTGg7d5bJ6kZfJWwVcoTsQndV22FWaHPfqY8wNreynQfURLFmhXrXsLsirGVTt",
  "key12": "4uSqHRvXVjsGjsGrv6eFnD8FpJ5oC8B14zB3v91VvgQtAheAjY6xhpacj5FdsEqcCT7vS5HPaWf3kuPGSuf8xiW1",
  "key13": "5NXKa82oBUdfz4WCfWuhu8w1FZaZRMyJNHfcwW6fX4rYEwS78uCASd4d68TxAZew7QPA9jSufyLeg6nsutHVspVH",
  "key14": "5wUWVhXVbdW4VRH7oTMr92oydLPurTMeiv8xTA6ymGK2uUGpLwW7udnbbfgFft9XZVdxJUA52ZsRcWakDiGig1Q9",
  "key15": "5ubkoTfkE9npz2bW6Lvp7AJDjBBDW4JGye5jX1NT6LYv1zqGAPk9dfT43HqFm4HydjPNMGqBKNAeBJ3eGanpiwPr",
  "key16": "5483jSf2JPzgwRqmcrMrv8ZZPSuFn5NknSkUK64vcjT91ffgB3a91HpRxqQUBGkMz28vS5BCFsmu98GkBpN9nHQB",
  "key17": "5zDZmCjVXEzEHhz55ASsZE2PtzQr9CRv3mVTW4jFGpCuyjt5t6W1uP57B9tNpCNsVggSAwHRZUtb5MsduKL337mj",
  "key18": "29qTUZtRpgXVaiqXCqaU8nxGAZiTnnCCvHF7kKAyKbqY63pMiVioKud5VcoKofYCg8FH5emNqhwRfF6rPuaT16YG",
  "key19": "3j4AK6sGYpe8qDCXzrqS8Zhfm6Y5ndEBaoi5YUDUMgzXwks2aZ7n9wbB4jBYepAgr2apC7BMBvnfnhxeDRNbmjVW",
  "key20": "4avzPqCqJVuwiehkRA5TANG4JiLHTcEUu751wCow4bBfugw3jP7DYxTESgYhWSbJCNrqzvQNMFkd7DZRXAvNA7zG",
  "key21": "2Z89E4vYtJhAbfc9hMBsvEqEybvmJn1yvfaaLjpqkqQcUYVXLhx8eP8XaFtzMGJ3HydEdAbxK5bDA899LAYmejpB",
  "key22": "5A4yE1x4vPMFCWPjkBDLZdRc4duLDnEFwdc1cBoPQ5afQ1wBg1UuVkoNm61sksxW5s5mDGEfaaJiCo64iU8ibnrR",
  "key23": "3ScBeLAKAMmhwgY5jejAvmZSCxt5vnYzZikUuYiwtmd7ToUuit3GMDhZpCgFNfG8PZLuJ7bhz4WiuzYxPHwqe9y3",
  "key24": "5Pw9e382LjXAeZ49crsWSKT7zew3HssJuCmdWaQDsAx93AaYy4bRm4R7w5RTC81JTDLJfdKusyqKixJkuEZ2uc7D",
  "key25": "3CS8PTryEBYCZ2bqxoaoD5t2j5qJREiEKvfZQ4Emx9CPQZjYeEzJC3MnKXGjyLxAxczZUXDUXkpSyc1C2Y9F3LhN",
  "key26": "3tE1CMHnEEmLb258yq8UxirC7CW5ncxt4nxy11vJRHLDScdGEH1oNxS6eMEDyGMGtuFH6rCi1MhD7tcEZkGraQ3",
  "key27": "5eD3A517qd4MfjY41aaeAK4CihSChXBAj8BfyZb9kz845cwNWTn6fX1jCyVnbz5qWXxAyCmjhcGbZxxfNmB7LUAE",
  "key28": "3azc22QXMabJbxbUqNeHKj2Y7WvdhAPCiHswcjxUasb27VAz11t1JLXiG4uPrwF4qXVtaYZUQKGVcRb48YukqU1U",
  "key29": "2uQW6tebaHCbWmeycb2SrmUVGb5wMasc4oHgG7Z51hesguHurYL2CQ8QsRK3Xk2gVGCKxjGhsdRw9hFaJGSevcKm",
  "key30": "21v45FiPkKREQfTxK6HUYPTk5sbLfMD4hMoWHp7qeucL3bC1abSV8YybiXCSFySpcprrzcjffyd4ASbzWT8GXQZS",
  "key31": "3BYwxGdx8p5oq4WvVE6AR5xfxizfBSvXFtiyfMCxfmfeViSyt7NZ1qpn18y4VUnRu9SyzsnmZ6iLAVfSDY3N9Wvg",
  "key32": "6wrfJx6NQKjmGFxmtvJyh8X5UdCdJYEhFHB7zdWaM6uPyN6bo6oZ5PDvAdBzSPHZ5VEjVdFaKRdvGcfK4prsvtU",
  "key33": "24NwtC2ND49DRpAVoM3gYoeUyTzhtTcKPcZsWcBjDLfbxgaA9HefA4B2hVX6kPci3Upzu1AGSnqaeBWUUfEDWmpv",
  "key34": "5ExvdLEZBj2yuybPowxfUMELmdEj9goGTpySPDzitxiU8cYC65fqK8sSPoeSHZVX3mEAxzBtE5zXRqVhtdyFyWpH",
  "key35": "3ryeKCzku46PPBouvM663GC6wGGXhqWYkJPjLpK8ZT7X5MGSbsabjj8Y5tmw9WYQtuP9gCKqcwXR9NntbXRR1aCC",
  "key36": "2aRnBhs3KSCVs6MVrRkYJTPefZaLtGSBzvpsLdPZFcrutvToQTiEwL1qF9Q4m4SxATMAgtUHUCZDsdAX7mLff7se"
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
