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
    "3qpyU8sDEqreDt25XDZNmUNi7JVREp55NZVgQimkjih27iQe1AQtnnzrenpxGT43Quz8DLnnmzbBBSbf6DoeXAEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dbnV6TqjykxYqWVfrPm8iqH5VCtxR2bqXxeGueBxstSW8D722Bjqi2R5NBKqG3aPnyNFLmEeakNPyc5NXbyDVeb",
  "key1": "2kbLe1u2vErcTkRdyYH6d8DFAiSsgiriu8r6CZBZ3YxivactEeU4y7quPhEPnDzGg86wicCAAUuMZn7nknU8rDC3",
  "key2": "2GgBSJiS3YjFwQsgKZeLXmqqmttohZdvzumHZ2ZAu6hqTi6zKMfy8QiexarnnRDZhp31fRwLHaBhxUjxFeYrCSBd",
  "key3": "2tDxUnsmMUwfVotcXLJ5YwoggJin6JoKdVrosyesmzRjGGJZQhoxyUrANUNmgJByKMHhyPXQoid9qZSHBwrtT6Ky",
  "key4": "mYBrX7aPCfkXu1H2vThmnX94HAanrGPc1BZfbXUkJFeowz1KYb2KKbYCTCviX6Vgr21YNCiQctooDWVXexsMXZp",
  "key5": "41tCnej9AEoKQ8QVuyLh4PQK7D7JxDxiQ6VjsMyQZDWERxa2AnMtt9Rfks88XGi6pGKj8e72tNUk8qWcEydZXdB2",
  "key6": "3wWZpZJzJJ5Y3WD4Zreyer5J3VMpF3R2vfWFFazth8Rv2vqiYXZtFonEJm6vbMGamSC5tndC4g76YHtS17U9XJGk",
  "key7": "4VzP3pFF96y8v8vedWPhQpzjzYsH7MM6QZbSK9VFGbWnbSRKFPnVzVFjWB3PQJEBSeiugK6uevsUmu5LfmSpAAFV",
  "key8": "2xLozqYWnh8e8RdGun4krmzYhTT6KYGNRqMNCVS3fQjkSepSKdzenKwYFmteURQ9mo26RdrBet6oYaptPWdQHoM9",
  "key9": "2NhCwDwrEBoeXz1TTvk1siS78eLWqmDsLQyVqf81aND6US8Z8t3wD4s5Q8vheWYmeiAEoEfLppuyEGjYRgiDtQ9w",
  "key10": "5uxV4g6c5JfBDy4DvQgs8Vsx4mrhVhMThaqpDnHBH4oWBUSPPcr6WSNug87L3txWuhXFi1GmCDATqnnX6d34zaCo",
  "key11": "hh7MYHihBc8jRDj4X9xnRp3Wc7AfaARbH9HkHeDkWijZwyTWwGNvSouUuVyhBskxgCkqrg48ozyk5aUoYC14FLo",
  "key12": "242ahkWHstPMcbHVhYG2EFUCfGu4zWahbUNPiuzdKxutofbr8XvN5bCbVu7xZ8jsWcbLk2usLZ4G8ZteTGiUwrg3",
  "key13": "3gL3je91TkztpkfME89JF9hL4Yh3XeRSPNmVv4gdg6e59LD7wDRsXcoy3nM1MUZGCocRDKqkLaJaKUJ3w6RAmoxP",
  "key14": "3BnkWqncJzmGkkGGqjU4mrqNi6ZmFAt5xGZL2w6i3TESRK2AkKZH5Dqj3RenkTkBj5vgfUi6YnHWPhdbJFw6HgwS",
  "key15": "73K5QpsUqq8vPVaDYKDSiw9nqWqYfrXvsmRC72bzPGgMAr2MCtZm8CurRY9WZ622w9eywWrVQPvcz9yEyv4JAKN",
  "key16": "435fWXt6jcYfpUhw747mbrhvwcWuvDi2DAoe7mcsXriuvYuxYRsRkspnsbRRp3Zn2U9ZLCnjMiYG7RaT4dRYYXyG",
  "key17": "LD8u8hzfg6hrutv1qsdq6RLMdS9SA4RH3sngpyJmovJX9iRfngHQMJJWUvoMhQ84Rd4bSf9z5zzFD8NQuWvhSE7",
  "key18": "2puuuUKACLKB6rDuHRxqPH3A8wvbN1F44RcYbkVTVzkFTcvS9JMJurDVb7F5RB6n72RnmcVst8FiJgUEqAPK1DDj",
  "key19": "5p7xCT3oG4KgvnsjqGLQPtabjvzcaTYTZyKH851GPZDVaaHh88QaFk5MikwjZsBEmSJS49WszshcNiYrcQmNcrtH",
  "key20": "SKPrhMcc4XvotzvJL13XXYi3h2jZVtZfteu9JK7uPTSo9hAXekouFuZSGvqPSwPBNA8tnHBUbZCkh2fmQdJZUzc",
  "key21": "2ubDamPccmApS6JgwLMDs32W8v4CqdsvVhheeWMdHm4sw8T5oHA768pQpFNV8ikKsRwmoz2abP2SqXsDA6zHzqUS",
  "key22": "3xTB9gH4QQ1MxzFNL1WKpGVzPPfs4hWWW5RoZZ9qjfyeyqhvfBqBb1bJ6sJRmdDFbHJxyGXQ5yXbRgcRPJp1CveQ",
  "key23": "2jaEQqgbmjh4MSY2bxcP4CrkWBSTkcRqMFaijckM3C8kcGmnNg7uDzx6QewjqK8FHAuyvvGttcaPzapHSCZDQwdY",
  "key24": "3R2yJfScFEmVAh2vbbuynmhP9LSQLpEHGnP6G1mRsyxpkn9yEyhfsmHbGTGDZiUbdpg6yefFtiFE8bUSfXF58WLQ",
  "key25": "KF1FjiXeyhUCZhW6tAwjUb8jhfrQ7D3KBf8oPRHdUSHHYTscqpTUA23xqwfQPdD8HhzGGFouEmpK5GpNEo9L4Eb",
  "key26": "7EN6y9q8pkAaddLBNYcq9mdmwFM1Crn9gZhS7CC9i8vCKCXpXyobHxantuEaiZDbD2wTqHXta95KVzJPNp1gtCr",
  "key27": "3TQ6d8EEbFfMs1MaQgy3hXGazsyS1NaenL5WLU3qTTgYueZxhU2Sfs4BmiigC5sJsV3x2L1xn3MmRUNXcTwcT4mJ",
  "key28": "fjPHNzDgYB3VVks82UXEqN5WnwcYhbjsJis5QCQLQwwmSCPHJWndrzXdqKchVKvEgKnKtrjBELT5xSLq3Nq3H36",
  "key29": "5GswQRMeKbatF2cgTTwFkFPyasqmAcFsaa5bPXb8padB3kXXduMnJLGsXVD9jTyLZuQgf7xPJ9AF6Ku1aKaRh4v6",
  "key30": "BRBUAoCjdQUV7NWrSWtJKMfK7yKgv8TeXkgiJy8rN57ikRdvX6cwytz2XMZQuCyvFExCD3ydBc6u7S43zaWda6n",
  "key31": "3CPK4JpVQXZD1afJGNmGfAzwaidq3mfxmHbehJvFVfx2ELeuRWYYDFZP5Kycb6wwgE2rpdnjgF8mHYBAh2K4NnSg",
  "key32": "iiwqAx8CRuWeWAyfmtrm5b2mAqJJr8DnZT6Ew2R9Zddx3LyHd6vDyNhAEhkkLLk1xxGJwEWYNno4MbkYVpwsVNe",
  "key33": "4QzBoUA4S8dqrKXspKHnvbsMgRpFwL9QSq3PAnVWaauu4S788E9zVZtbbqzJSTG6eENswWeTe32LYhJohA6D48tq",
  "key34": "5YmcRaUuiHU2mjuTsFK849SnjBcwjhfWmo7ey94rEeWkjGcsRCv4DwU3FbfdBnG7HUtXyrWmKTGGB9JkJ87aGjqM",
  "key35": "3KoeLezWt1M5pFhbg3syaEMMFLPcR9YbZ3gfYe7hH818pJ9cQCC9CRoafFXjaC15uPaZcqkSGsA5TwJLPYgq3yKz"
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
