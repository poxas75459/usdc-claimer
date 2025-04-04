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
    "25MRJVyg58yzPZXPnD9bYLy7AMBo45vgZHWdHWTdBkwY93Ges54MNP9N3B5mwHhLEcZJFiVEBfxxSQrR7Fd59UYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZtHVN7b4ByATGeeCEWAJ2Pk3PKqDmSCVyjryEcVUaGwASrSAws4h7Vb8JYVhwQ5N5eB7t2qQ3xDHyDKNnKN8CS",
  "key1": "51rUzuQ7vcvwDzVg3RiUnZSTyDZcEvXAxq2YTYaYZCvB4qdjj1zEfW2Yo5Y7di4XYPMQ24GzuNTVcH4qk85NP1CR",
  "key2": "5gPgRVme2yUYnVx2ALrTSP9GxY2oKXTnJNya6c2vZQ2dyHLJBhJZ2YhbSjVWYk95LfuG9sWeuhwwKH5BgicoyXV4",
  "key3": "5NyUZpmW19voPtSJNvcfpguYfNXhkExJCoLqrH3eZYdtAeciFTJnFbwxhu5zU1cjJmrWiXNTba99ndBqwtK4vKet",
  "key4": "3mNDDiUmwUCfyQWYnw4zmoinSAqkUceU8dpb2GVKaUwHRQVYGA5Pv8pxJaju8gi23xaEDXM6zAgbpZEGVE635y7i",
  "key5": "2txJbkib6z5UnpRhwEnLUFVc41bRDCAVViPpTsYgDU5d2iAUSLQx6y3cYri7imTsRrG9T2vxC66Xwe9bDd8whH26",
  "key6": "4JcSs4sL6h9pYZa11vybd4nUy12opCm3w5sYBmPH1cgd7bPnKeJajs7ZWDRtkNTdmveJNTkhqyBPpeNji9QxHL1m",
  "key7": "4E98WrZQPnRZ19NC6XaM79rEjN8b31BQrMMHwMgF2CaBoQ3Fxnu1LFb7kpLWmxenQoMv5NqKLm3hNVgRaJb2nX1B",
  "key8": "2JqR7qpo3vgoJHwq8vfyy5wphNxTYGvdZzshjcGq4Qce1USQuWbbYm7FjeBppv1fA3hRvbSj45NhhjW3VoW1sc5t",
  "key9": "3FgePkKabL77T6GDxevR7Esx6bVDzcXytj9K3qaiUF2mH7Mm1q4Wrnd3cZBDzt25wfgiT1kXx6dmTnXgdkNBTUXU",
  "key10": "NtJBK7D6YnAQSoCzB7U6E1mbZGGDn8sekaUYykvPGFK6UFkDAYfwtP33yJJu3eccdPzJEgbgJhWTpXWQfZYpfPw",
  "key11": "JG4F9VbvrM1aR7TmxhG9ecrooVYQzqmpecP3gjQqShQGEqzL8mWfEp9F8hxCw6GauFKMRt72jLvEygkaxwPxbZx",
  "key12": "34jPb1kaxEsZ166R5KYEaMpy5g6JyR4xjaZjeNmteCTiS8eHGs82it8spQaqJJXDypPJdNNQUjCZsGrR9kmTMNTQ",
  "key13": "5YFKNqgi2F9ymzo1qDR3neVCbwbwaoCBBpXjMy9oLa2Zrxfo3P421e62UNWf1FAtaRU6GrRbvMszfdp1awL9BmL8",
  "key14": "4R2WnAmEgo98cYHJbmSt5qjkRdkgiTQXXA4vjyztxfiHApyKd3xgiGTuK7i21t1SCCHxCVHC3tw4qjbm5w7RhMPw",
  "key15": "4PDWjHvt2kUxeZA5rNkozNeQVe92MgFndAJjUPEcVpePpNpUvByhwxazzWifG9S8GRShjRFUmepFZiZFvSsN73XK",
  "key16": "5hEokbo8nUHKPMohsaQWC5KxWHtC4bTwD1vpuxaFvXx24neAHFRfFdT64LLRshrtALeoyC87fFoSZRB2NZyw72D1",
  "key17": "SSLQVT7KuJ7zAnxo2Sc69MwqZ3HHXEywVHbE4GGYimRNmZoSUa6XKcGhQxVRpZbBbjQw1qpY3Dcmh3VSw7TGkSQ",
  "key18": "413fxXBpqq12kSGHBb519TBLjyM8i8mxMbQFFkwxSxRj5C5DYmxLL6zqVeZrzMrdSjvRygYmdhgMPPyNap8HfMSp",
  "key19": "QWvFz2fV1Bs2gtMHguAaXoddqqnEYmCKYdg5XXEyqsSW5ptzKwR6fQcMJr1aEAyuY9LoHPjVKbVUW6zXdGhu7tK",
  "key20": "2j4Mh6kFCDKePaye8Zy9xdUyp79GDE9M233fppoEdn2KKdNRHwKHZwSMhRsdDTzCkUQV9DaEenhxnJVGg23Zhkce",
  "key21": "4Cfi4iCTYtYUFdWKPVvd6m9nGAeS26L4eXdpG7bSnecQaVE45eTRe6pCugHL1HmKJqm4S6YmoAhGjzkbMzZTscvd",
  "key22": "5yiUVuPhhqjwvbEjW65QjsgXFruWnYXrNGdydov4kwjmrskpEfFNkyvapTAk9QSVLLxdWGbLQmkRRYshMrZHABek",
  "key23": "2VHyUjLFvHWvWbXd73qJiLi9s8jEiTCpq7g6BDWSV1kFoJgEiiDDiiBFvJt1ZJqNjwNNTJcTceaFJTT61VYhH9pk",
  "key24": "3gNqC8VABXdrSBAMBYCZ7kJuMUHzag3nRq7RpXBifL5tq1fGp9iAiSRYkvc5LyNi7yGnMpZSbop1XDGJuo1aVQaZ",
  "key25": "54mr9CLN8XkHQf4SKAs5NpM8arMyvPeDiU4qc44MGw2Qe8KSs78g47EXvB26V8n7G2zGjE9cC3raDhrb51zDy2Q5",
  "key26": "4pPVHTKKSXhtzmVx2sTmjxw2zbTB7CzJdfbvAQsC7pnrJyH65rBBfzZnqaEjjn6guBw6c2J1Yojcs1j4ZE6zke6S",
  "key27": "3Q8MpQpL919EkGoEgHQkcdmL1Nx1wNgaQYrA7uop8ak6dYjcov2x7Hm1GXkP55LSPrRPpkSV6NrDTu4rxepAmmZx",
  "key28": "5bXUyaRe21ctKavk11iEDjbJEQXGFEgTjK99sF9VkZEjQYcZKiLUF8QMBdPFkSb1Rerdokte3sVioRf7P3S5vuc",
  "key29": "32S4EJvqR8DgdZzzKHUYqvPsDevyKrtSQXkxFdBFrxgKxj4QDYN6izqCnxMqfm6vwb4ToxdB5No3SdNtpznxWxA6"
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
