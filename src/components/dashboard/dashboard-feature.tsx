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
    "3AqirdyBQ1C2peTakzYtywAysxLuxV3XFMwCd3HhxaHZGXQ35zTS6X2srJeJidLqC8fXX8FvriKKmiwvhxhYv3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RmrK5RuJqAv2etpQvGacNtH9kcroNKJco2QCy7Z3HfsVtRxbMb3L5c2Gacs9ucjGgwuz1fn6k7bdEaKxmRjbsGe",
  "key1": "4bbfn1KzWPwc56fKeJb5aKJ3eqvXgRMMy7tk5gUT9ewQ9cf2d6gUyqCDtGrrtR5HpRN6FV2pR1ucE8UZwZG5v9ni",
  "key2": "YtsmARYwJFzNLySMEY1niLFFG6a2cQxMwWoqnoNaXfZP5hJxPqR8Z96Hk6M2EhquxBWjDTE6GRhxzZfeB3e4qQG",
  "key3": "36v3RtYF34ENN4dQUcGqvrjgXAHLS1AAWFfuDKBkyKP23mACRrLj5EcqJSfdMqwJLV88QhhDa85YcKyKVwKqR6jZ",
  "key4": "3zfx7rFzg4qk7sQ47iBPByiDJiiEWAPv5F8aK37YXCpjyLQgbEyWvFB4gbckys3VJCuSKGqqneX9QCic3PQQDsNJ",
  "key5": "3MYZi2P5jCTGFDovGNWryJCrF4wcBbo1q998cshio7ZaiGPgYH4EgrJ5FX52e9evW6MUT3A3HcJ3qGXWJByXoRrD",
  "key6": "2BKGP9DLCWKQSNreHKjoJZK7fXj4S42W8BjZA8qxPvweBu7ErPMghjrfnNfrmVw569s6FSVZDz4Nmop1VGMbsitW",
  "key7": "4kmrvrkWDX6bBJniyDbWADgxj3fEPZyKV5519q7o7EXzbDQnCXNV7MXmZ4QK1hu4LJysCkrKsEozmEvvCsn5Rx5i",
  "key8": "3h66zbHE8sLMcSxvQjzE8ceS3SWqbBsYd85XPWozQJga3zGBrc3jWgoD1Ny9cA22GEdiC65CMeLvtwQRgroQUXXE",
  "key9": "jYSVDReohNmeUBG2TzcicyEkdkhwvZZNNT2LFmvxwog7iUbjhLyQ6mznC8uA7Vhyvo1ouZTNFQeTHq8141Mw8vX",
  "key10": "5te8YPC19vBchu4bGonHbjvFCSnd4zDutf212YgcTi8GKrZPD2fQpWebgMYRfqNgnnKCtHopKMqUTSWa42bGYmsg",
  "key11": "3xf3D6UhYeXZpDtS7Ds2X27Jrise4N1psoFA5ukgCouNhpotxNj7w91hWvrJbVrfx129SffBeNDVwyfvMuCDBLBv",
  "key12": "3hLNw6s6pHURYEjDyAvpJrgj1DfeEZkXYnLmdsk1T8PUaAWD98CMFKY1f23rScteaaxLiavdQKYmEfoZQcEJmNj1",
  "key13": "2ye1ZspkJTTYYXayCKmdrA7YFkCgRVH4CodcuLktkJAgQUcYpdneFzRADtwHPf2FdCjTiJM4DmqaeB1vCNR68Tvo",
  "key14": "54aACPq4Ni8dYMymegBg4A4Mdq6cNHNT5gMr95fqkH2stag97wvqYM5eBP2Y2qBsP2Yh6hLyMxXJUmz68o9op7Zr",
  "key15": "e12jQDwrx2Y6SMQBZymRd6Gn6FqUsg7b4JaTYNKZGoF5kFQK2TvX1YVJV2oq4m8QbMoDaiGXN1W6ZchsHSAk8iW",
  "key16": "4v98rCqXJvDEx2dyyZDnDnQaCGyBky3vHKVD1j7pTboQm8Z5dqt3t9HZvzx7fKdvq1ZFJkAtwyxSthABu27XyUzs",
  "key17": "4VvLDfmoDahgU1JQcdAf3W73iiCiNNEFQWYJ5bPqC1tJBq15zzSWe7YrXMpEF143zTP2JKCaR1kjRgWebuZyDp4x",
  "key18": "3jkSg652YKVMfcYE1qfRMuP2ufQaZXz5jAiv6bpbNUxjdrrkDt49iqirc3sTrkd7gk1ukrjiuq845Y7Zb4Nr2wx6",
  "key19": "3PfUHj8vgoz5LGu2JGSM71fschaY4WnnEk4fdCELg1CFv9S9ynxXfCFJ1hZNizGkxJfmkHRXoMEwT1P7aAzzWTJB",
  "key20": "5EP2rBSSzZDWbiyfctYs3sCZDjN7EyQGouHfa8C7jNtZJLcxt7B5hxJhECbBsckhPqhKWShCNSShYpTHsV2cc4yL",
  "key21": "3MPZihEo1EJFVFAR4LFowCV4ydWwkAXNZytUJsuizF8ghyN8e9EMBJtSHNDEQMjcxBu8bsXQBw54VQq1pM4xWo4C",
  "key22": "4YXqQg1Pyxgcg8ZsGuPW1G4KKeYVWJQ9CG4G3Zorz4fH6JN1A5pcoSxmTk4ZtcWEVmp2VQRhe7S6bYz4uUgr8rmD",
  "key23": "VHjmMUN6NV2ZSanQGp3Q5rpNiGs7zwEdZxffDKhc3QNxmqrpu5RjRvt2XSKjSoYRN4qdybrBRZU9bh5iPaYtn4F",
  "key24": "24waA6VV2wFKxUxwZhfEfS2XyEuYQ3PXzWLkavYkjB5BK8NBJe5Y3FM9GHSwGmJ6A7BKHPDyegPQ4sk8HQiWPEX4",
  "key25": "2twkaamVn7UpCy2urHw9PfRWPKiJa6kijTYfuRXv72cRGnF1zNnYeosj2sQNRf9hhgyKwFN3sr77tatMy19gP17w",
  "key26": "2m7m68MhK9ZvheA1t3jEAHCQe3zZ2y3dYZbisQGXKoWx59Wn7uGpJMFmfyu8Ya2mgaKgZuc1G9qPs6ZE9zLqo6FW",
  "key27": "3uYFLtddNsPthX5u6zzhmJDJNY6X3iu7KAWxYgMdD7PRKjcikcymuWPN942zhwnR3SCxQXcWgEmhbookTR9eyWD2",
  "key28": "4fFE5JvtbP3jmy37XeQc4URbVe3YcZoXH9LVaMmkuwBWCoJVNXfdTVnpZWQrUbZUd5h1GQNsWhb2URuh9YQwS3DL",
  "key29": "4rYk65NJtmo1eJzvr2mj1S8W6iJZdLYGPgdMs1WurLS6ELi9DjfVexiPLQfdtzYsbKn7SxK7vU1xvXF96krvfuxL",
  "key30": "3UavUGXY7XFacPjTfuvv2LkpLP8kM2YrghaKfnwiso9pmUF87kra8ys2dVEo6R6122TgpRSTmKoMvd9fGgPpiyDy",
  "key31": "2ShbaMMMN4vnyhZ3hykNnBmdzgNW35qKLkqoBBG4Mvhro9pdWJYPi5istngqv4VoRrPCY5c4puUKEr5xcaZFzZVM",
  "key32": "3sRtf5w1TN6jVcig8FgRGpgQ2tMryTbP1Ds5bsjp2DWXpN4bwYWZin7ZJCYfAKwu9LkG6cETiiMiNkpR6eik6jZ8",
  "key33": "3rPQqxNidKcZ2qXdf9YJSTZc5gYKtT8JEP1HqEPWycKb3cBKgBbKZH4yrnbFk5dWzZQXZnG5LR1vxRjKkKMDLV7W",
  "key34": "2LkFL3pMi7GuMujAzKA42CMVUrVS1FoBFxyPVBrzsHtmb95GBxMvus5fupQpqJXLpsc55Kzr4tm3dM5by4RKs1Z7",
  "key35": "5NVKN6ifNYKGbhYcadUMhVbkaJp2JoqtqKtJeHKTaL8Xg8TQWd2sK5BKWmQsjRk9hdconZicJ7VCWwnj3Mcmcnr7",
  "key36": "5NpzGgjXEX7wJabyQQDMW8TiP7twNr6yVeifi1ANMvF3hpw8TDctCyqtNbMDc6KsSgH5dGmznWMmJNuxtb35aH4j",
  "key37": "dSSGLQF6RJe574hZZE4pUoisUMBqBjc36kQG4WxWCETVQKjmxsmq3bJY9u3HU5VcCjMYvmnahqoAMSgMUxo5mt4",
  "key38": "47Twn8vM13aS9QJT1WbBozhtpcxSZ3tnbMCbeDUDVo6zM9BezXHVQ2M73vdfjvVPhfjLtSw2ADEShWccjHvq8EPf"
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
