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
    "2fgveuHgg6uzR6tCBsqgbFXBGnvvgFkdR9Q4DkVv9SB5xvivoTyfBKEGif6fnCtigQJQ2UV5mv47SGEeySMQ96K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqUUQLi7NM4e92TTEfCKrQBTKDFQZVK9g9ayFKJnUspFyMAnrAyA8MgYQdt8Co5XskynaKbs29NCRZwFMk63FU3",
  "key1": "2vvstNpSjjyFNtmCvy2ysqPbEKBqcwMn7mqwM8p7tiVHRRWCBPJgtqva2yPitkSfCrrg6bqEFbqEFycqGvSPDv8f",
  "key2": "V7HUL6nW7tD1e2BhvgRCtJfgrTc1Pxv2Q6j917XBonAEcdSqimdJr7uySV2PXirEZEoRnE6q4xovr9STMhS6y2x",
  "key3": "3UwQbCfSdu494fdP6TPExhAvHL1GZFJrwhtGL16YMe2bogvWJapzAZYWPCLsnVVPdWZ62p6TApMte3AE4iNhxfCn",
  "key4": "5b8q9vAUDW11WFvVggCPBkUoobkKDvXvrENdCUZ4D1sVBakf3Pj2ZeqBJ1dUER59djHfwjtwY9Ltb4Bz6wn3fTGQ",
  "key5": "5sJpDXm2fKKCxLukTAbXeRRhDHFMimmUebGhZZogxCJ6S7EJZeRfddNmrx6YVe4xxSgTGB9g1EZ9H9xY9PkQwDZ1",
  "key6": "3JCK3mLbJkniURkWN1ddovsZMHM2cb78MEvNmms9fhpy9DFzTCfTfG1xi6XRB7noKXuvSxJr6PJbbeYuQYLf89h7",
  "key7": "1Z6vbmu614Ykd9xLHBZUYaRqgp5Uxo9wrtZenHKhuH5JaVdazjJyNtxSHYZseJb79SDLfw4W1GY4xZivy8Koo34",
  "key8": "4YbUQpMtLQbi5EiS5ADFqS7KxciCewdsCx1dBGqNt4U6d73oHJxeWtSQbAC9wvx9LAHMrxj8PHvWtYmeRQLpLHDs",
  "key9": "56VpnyVKd73538ewmqvX6UEQbmKaAMFj1SP2uoLxHkD8zheG5WR2jRR8YsnWNLcwtoGLNUcbwoqvYrpsRev6pxTb",
  "key10": "68NPmcEwm85W8Y4YY8B2oG2TUkAS2eeQNU6cmC9XW895hVobcJtvXm5xEMPbW8WyFEqC52B8VfFDhRbEcDRcqEQ",
  "key11": "4NuiLzJjHuB6evDtzwN2km3m7AYL8N6cvQvY8avmGcvyKzBGQTwXtxRgrSyQQ2vJfBByrZYEHDXmNLNazry9HTbC",
  "key12": "5h7trgMMYAdRVk8CfDYhcQ1kr6Yi3ADZedaazeaBAn6KSRFXNiGhEVK8K6963i6Rc2g7mQf8MVQUvio1zqVvRHQC",
  "key13": "2bA2zFWdVEDUwkTRggicdeQbeyaqktfwDcczwBANSmidiUPiAvWePwuh2NC29E2A2VUEGxPLdfyAV1qWVSqsKrjZ",
  "key14": "kJefroYqS38iBr8D8Ya2P7SMuvQ7kJKUEgAc22T4sXZEpocrBB1JCFDuYZNBkacx45XoGUgrqNzP3gTtK1spTqp",
  "key15": "2Fxz6SpQ8dAywMVvx2cQ5g7LCgkraeRKoGBH7r8ZBfdqDb8aGqebvMzqoLdmDVeNTxog4qy8v3ZAsKmwuk1u2Tza",
  "key16": "fNbidRDtkEGY3piuQWk6DQbGGMFmVajdAYJHEkCpTyVskGZxkY3ocNW5UemVJpjAtpbiaAWE6iT2ezBDms2wgHz",
  "key17": "4Tqo7eHmwUFsace9izK1gSsMpuijYNdtBwDYYq3XSzddAE8yUyGE6tN3FVLg52qvPafFbBtzokPA6ER5jrKfv75",
  "key18": "3nMAD7QMRK53HzeXc61BaamDZ8MPzwYMCyHjavEofLXjSW3FsDygTT8C2xgA3kGWh66Mdor8LAjM83d7Q8a3Zjme",
  "key19": "5SYJfjaXTwvvfzzMgNjcXBFkPNLJx1yjTXDktR1gTZcFV3nCoriCXxHCy5Z5qmAXh2sG5DNL8r6G67YnbtxNtgqV",
  "key20": "5sfWvjsh235hDzZgD1eqFUoHEunSaqmVay4JpNy994cdcYMgT1QWmjmRL9tc3u7fPPdMEnv5PgX3o3PUJGN39p4K",
  "key21": "5rRVZF6tVftXesh7R4XdymMRgdFyAudDW7ZNb7jo4pqRzXskwceYF2hgbXCFrY5yncUg63ftWBRJ8q8DZHhiWpgH",
  "key22": "NCQ3UoJKuVrssNgsjG7az8Y2st2sUoMb63xC7PaywaLxrTcbxeHkJ26pJ9zg4YimB4nQb2ECTTwWWBJey5huVPD",
  "key23": "xcxyUeo4ntQRdu6Q7Aza7qeAoT5nez26fcktU1hKEjGJabhjSsSNZmSpb8kTUPVPe7CJp7jgBgKWfK3TqPrrf5R",
  "key24": "3bsei11fsWLj84NyBe4j8wMYgKu1xYQH6gtcNcUHAPUbBeqSxwN4vFr1VocF2qKCe8tFU7RxuTDBnZyEwVuP1NP5",
  "key25": "4Rv6YYEFcf1c2Aie5Nxzz8M4RvRWphsrewoWBSVyeFHwdapKJzNX2NPkbFMB5PPH8PWaWyqFYYdZXYJqe5bvXQ5h",
  "key26": "5fpvkUomyRGmJ81JRGDtKh863qEMYN66rmVusUPwXSbaDg8QXvTZk31ZSAZvHJFC1Nz1ztAtYvcLGJhCyHYug1kz",
  "key27": "4DFBRAFtXbRzq3Cv9q1FhBaKEktg3up27mCaqQoJabHR5xYp87n4QrMoBSWfuMVQ7FeWYcMgKoBPtm422bYFtP6w",
  "key28": "5TRw8Wx6yzHWUXc2xC2DVkPEoFjjwDq5utGwqgUAyPHFPfKVtvyW78RgGmzwGNrCoiDxfurX3kPxvAmyRgBYVW6L",
  "key29": "4g2AQzzPp7jBXKPFmortn3gTgL6wdmDey6HXvtc5qt2n998XPEfKkhZ3nAkGnoAVkoYH3GDGcokxhGekkztSPvho",
  "key30": "4Z98H8e2Jf1af6rnJSPsre12p2tqp7R6hCXNh8PPvEvTtcmjn23b1iEkEMcfxC1cXU3PjmWGr2nMmZHcrudLtT6K",
  "key31": "227z2fegJCbQMNBqjfRwiGbbVpYhkJw4qbYLzKX6Sbw15w3rdCxFnLA51zsbjbvGPnmesLxiRgZYAvNAA3sVNUaK",
  "key32": "4KzsuBUkAsrLQxkuk3nemkdDkKrJWG6fHsyiMcwtcdEYDFMJquM3dH3qtC9GKVskwtvqfM2TJM9jx1oTLcTS7iKq",
  "key33": "EhQSxMuprXmYy7yZk5yVk69ewFbiTkCLDs8YqAJJjzzQFMEXXVbRD762Z5BeWyrh5KnHC8bqAE6bYydLUgTkVPy",
  "key34": "1211F63g2NahifU3tgzZW8QHWCcVBp68EsPVrKwKk7yqss9bysF7toMbYv3ZHosT2Kb3AUS7UnttHikrXCP2hugt",
  "key35": "5issvxXCnB8djezukwrv6jiRCqbTweAAP9jmw4hijN8FujZ5gVwGx76osojKsjwE8Gy6gcpVXCMqYP4DPuTPkvdK"
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
