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
    "3eJxVAJzMPfPnbtVhpzaXqs8dbH1rMgMw4mYFK5ftw6uGHQRW7ZwM36Yni1cJvu3N4Y3qdD9Y6a2JmJFQJVMrgHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lu43uvSzWwDsysPWZHVYcivQmoEeBDUbQtmJzaxNjMGESNTS4emzrFLFEZsLvk3BsVRmQc3TD4p67n7jw1XHD7v",
  "key1": "36yUetiNfnSQj9UQDnkG96v7euMMSGQKhwBEN6NVrHkvBdpZtppkLET8tf2U6iHNuZgrUXvqRsBgt5yfdC5F1EW5",
  "key2": "4UZmC3z7RMfDFDACsvcUR5XEkXY31WAtWq5wkNJ7eeeGMWVpvmGuPtbgeUoib6C2rJjQo67M3hfvEoBeBvRhHwiv",
  "key3": "55F6vnx2Zcs342ETkxu73sPQh7UP3aNPQwtcW1pN9DhRvEeMAoFyDxaf7usRmrhX23L36rW4HfX3Zjme8keSGB1K",
  "key4": "2Ts7zFFadmCQwduMtpEtahMjpm1WdfwcahMM7DVZtRdgSfrZUP6yDDg7pZna2Gik8ZMdpuctt6Y9za9Kt81DJQSt",
  "key5": "2ykXwLf4znWYTBTyBpQAzr8bJMERwZsEDkCSp4YuQKM7msDyG84ZUoVENn6FhVbBwibHESBnxvpvrUtWAbEtBEVd",
  "key6": "3UzFCwHsMsaBBbeQMRch5XdmmKz8TpNKPhgXyEtfyvWZFJ7AbVNaB5LZ4pxKU6TtitBng9Jjn91gWJvjjJDN9cwF",
  "key7": "3KDz4LFFKgce9jCSux4NoiWupFigwy3z2YDZR3zqQk7SFCNRCgyt8GEQnS9KtLkqq9KURVtMvhzWm1wyuJTgqU1B",
  "key8": "5VuH9MxKiJsM5apTB1oxQiwPchHqWJHYh9gvpUygSJquE9W2hPBtetQBE3aTfYbrqfT4bih98qEYQ9wSjUhE2o3L",
  "key9": "5LsQQH4N3NCK6GrA6qB5p2Q2ErabCc6R2zWypzNGMhZTGsxAmwo7vMhmhZo39Y3HsM7R5JJ6ubYnDoZFymswhsCg",
  "key10": "2nz69cgi8S8uFYMn1EgMZV7KGWk35a2iRyLKobzwb4QePvDAtzUXZEyJLGvZJs5KJKSKZiicVtj5VtVYsiysXwrA",
  "key11": "2cyteUPfvFNuwJeTX4p3n9vHuTK9vXxr2Zhamqh7KsVsK8om4BdzMMJVhZCA6pPmBiZnneFYfZ7nqgGLjPFZaxLT",
  "key12": "64QvduNAk6t1kAp1TfMtZQpF5EQu4hGhJcyLGs3MpiDL2SEEUmDsw2xLm47812YqsCdFXfSaZrzrUzJUV25XQHZ9",
  "key13": "5gd5FEi3pDvJgZHEN6ZWDYH99WFa7cNiWFwfeg4hkZZfw7kL1w4LqAvVLkrvr5wSizbwkGuEtuYmafuTGdDes1fo",
  "key14": "2qqutzmHBPf57KwbDHoHKJsPbmPbhJtwv8BR3WaE6v19tpsdD97vRRLUm8bu8kAgWGFwaEFjK14u2XZ4ALTxzQrA",
  "key15": "2EqeHsguTEurmk3QUv8e6WJMgLxRpM6jpdbQzgveKXt7mta21B8uJR37aaH3vxvekCQ1MoJkzQobG9oRQ5YpRvR2",
  "key16": "3CLWtZkE97iQQPcLU9o8LtG3kZbm8jPohc2GEFNbz7YdRjTvFsDXzMFyZ8DCk5r97aLcJiVayXve2hixb7AK9Pgf",
  "key17": "3NsF9aQUZ9GYonAYjXCMD1X8UkD8Ep34fuwsXshFRZU9EDNJNpmRtAt4yYRCSWyBRBhrvdC8WhfmpbDs6bNZamJA",
  "key18": "2XKpm71TgK1JFFcayPkBh5zaxVMKpouVYAuenmnENzpshKMGQoWQ6eGJjAmVR7Ngew7YnYgNq4V46Z3ZkqFvZq9d",
  "key19": "4tL977jT6QiTQWfLLBbVLgYwxPnTagRsAybeRC2HkvEuc72ZFKoSJfwQvaBAd8s7s3Mh5jMn1s9A4toNJxo8xy9Y",
  "key20": "38sHP2bt2VczwmZw4D64dLJfdgfsY77qNn8LM22Uij8ovTnAp4cyS3NNMpf6bDPbSG7oCsbi9NBN3ufQGZASCoDp",
  "key21": "wANqEtN7KNazkDagmAcVsuDHFszkcVsSWAbLFdFoj4k97qeBftuwEVMSdTrf1sxRZo7LFtp9Surhn5XRtV7GrUM",
  "key22": "551dRLDopzX1u5SG6xfko2e9onhQouWJGftRYENq39ZexFVe89jWR9p7uXkhXfr6Vz9om3kg4VcUkuCVJzbpkRXf",
  "key23": "2A8annLvfqBXrz93nvYfX9uc5B8DwoFVppyU5NT4yCfTfYK37xtgoBiepFUw6DzuzMqdDazXyn49otpELUpdRYiP",
  "key24": "4y5jJHXpuHugEFjKE52VR4DFk1kydTdLFD7S1WFpRzokVwJChBhxdmkjxzEepCt1BBmij1DTTiKUFwfKD9eNLY5w",
  "key25": "62kVhF932CoqyNeiSrqByp9pBEbE7Tgrzd31AQhxJApEM6qfqitK27eBXMHAKQUtqZzYxLHtWZv6n84sWDXffwiu",
  "key26": "1WAtm4CRgifdtoCjmJp4ykiyaxJa5rD6m9DjMY1MH17ZmH6NrLHJ9ZtXUXxNjRSR1sLG6tmXpciapEKmxLxmWph",
  "key27": "2Jp1uvZQdFuVCS95TwZu2hTjpbKnzUGvjA6A5MYFGbLG1JALz2k2yQD8Ryq9TuCh4EXhbVh9fMawj3J5h427CcYx",
  "key28": "4y28Gspoh5SDo7WeGFNAiFDMH9EAKq75MKuKMmgdaSmrefeUpenryaBTgkQVDxK6Y4zoSDD6RyMhUTMrhTWCTTWY",
  "key29": "3HQbSqHVCvTKWJZMMiRUnzVtuREhviQMRwr19i3X3xrGYxnv8k2qSedkiqLNsr7JGEjgYgtxDTrRmUf8npYFfpUL",
  "key30": "3U3GA29EKzHUgLcCPpVUo56TkcoyHpizx7dXD6QLQWctXuEwGomDAheCkx5XSuo28P95nEX2p3eJ623W8EXCQEvY",
  "key31": "5qtEw9c6jYvrKDTrJ5urVZoT2fRdqUBCGwjngm5hddeVrCfzE31LsYcNqn7HYQKCKsdv915c6AAHoWC9U1JxU8tX"
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
