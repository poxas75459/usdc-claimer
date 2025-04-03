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
    "qJeaYBQeZnEG3WVPQPKCwitR4L1MxJF6uwaqb9RCoTGeS2WJGDXbWtrJeoN1D4gh9FZmAdT9ZpnJPMza15PhT1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrxdGSUzmg5tg2xBrdcyr6SSRTrbY5C98mmYHxwGcoYhyeLbvhKFjdSeW5HXAiv3mYpVg85YaHajyZYm2M22yqP",
  "key1": "3SdUdUELKtYmrMJonvDLuTMwxbwpEmEJXonJM4qP3mNVny3LaEhAeKivCzpHpHbRGqpcmyXmGppK2Tru7enb9Bav",
  "key2": "2XLbeQJM74jWZqRkcRBxrx4zyAZ85ijeMBC5TgKmkB78DeyMDbxDEdiisJQonmv7nwJTQxemjGiNnggBfBVPMrsM",
  "key3": "3JZqS5jsvmX9jV1kPeefRESnoRR7poxnuJrebH2EDk9gvJhx6gLNMtYkA7Pch42h9DzQipxcpAq81NjcjRWyUSZW",
  "key4": "2TG4s2M1PnKSFuicPkUF97buxX3seqQBMfizJhtEXHuDFUUSGQNz6ZGytd5zu8WFUAZXbZn1q8sduBYcER828i57",
  "key5": "5nMzPP53PMbMLadWNh8e9wU6mAK1jdXN5H74LiscuXsgiYJjZhU2F77Ho63NaNbeALeAkhetQqYbjETyB3BAP7rq",
  "key6": "2v2kMR9F8Z6JEvj8TeSPGxbBU1ugTPqkgrVDKs5pbB5iGPon7ruD4xpZ3JWV89cE4MP7AtiWuuajYY82Ukbuso3n",
  "key7": "5vJBJUfpt1TkbwDhAMEiEMwNNMva1R79Z24mPJRoxm1KyronYd37ekoPS3eF6C8U1deTdUTY9snioME85H7mJAt8",
  "key8": "3baY6bUebu6hgYBEq5ErD4ewX3qEmMzZUSiPN9tV1EwSrHNx7ftNCABhx6KJkXKSENYLhZHDq82sNhQXwetcXpjX",
  "key9": "6KbNkgef7T8CphSm1T2mAmceZT46u2Cx4LaEv2wWLjBtgUFphB573825SgQdBkvkcpM5FP7WMYGf1pLS9dFb3sW",
  "key10": "5Nf2fkMJczU7AViXPMchQJNz35zMwtMYLbfgQ1esRaLp5XhAK15UVATEFoXwjgPuBCLfEUoHBF8YZv9n8eMQKvvk",
  "key11": "5gC9unpWuGX6LvMQBRUo348b9euXUnVSAbFjjNAQZrUiFaMq1c1zWspQAGgqTAfkMPxGtSdXMpTULWEYWEufNwKY",
  "key12": "2wtMUxpzq8mN4ihsNUxLGozjmz9wi6Qfy39GKgdozFLrK9hVU5AT76G5YZyvYxcP85LcEgguAm7E1jWR9FtwKEKH",
  "key13": "2Gze4KUaMUfGKZYmhgKC9v8NPDNqw3cRESriNb8JdZ75PbkdQGMmwTV93SRt5aGr4yWcnBKcGRXPE14B1DMgLgWp",
  "key14": "561Q3YjttjVP3BGU2axesnPRHLFJCGMBJLkz81jbvkLezr2LntnEHKFzbG225yRquu23cvn5m6zfRFPby2kjxYLL",
  "key15": "214tDAvTvEmqp1VnB8VmqRFAAowRhyWSPi5YnARtAwNRWeiEmrR2sxNc9az8vRhdK9ctNM1yhTVru3v5npWzECJs",
  "key16": "5NWxcgW88GsTkCWg3wTmuoEdSTdDByqFiqq5UvG424orkPA9tAYqDN8UoppLkNYhdYdePxJbf3ey2sVmbfhbEBmi",
  "key17": "4MbEcCKot82KDKqbQ6RUdYkZDBDWE4TWs5zepA2J1DGpYveMfGdxeycgbsgQ5BXEqQGDiZUkxYraKqW4gDiCa62g",
  "key18": "29sMtYfp635RR8Accpt2RKLUd4yf4heBnSR9XJbfA7hMja9wRv3ASYeoEni5DW2oMSCdYV7u3kcJvtcVxpkaH2Di",
  "key19": "2uWKE7bCEN5DoV4f2aRddSyexwLGiJB2mABUy3zJKPcdPNoDpQ21FgXQcZSdp2UvxA6rge8B2QifeKkWUytLMAEU",
  "key20": "5sUkfqv4Dk3Ge9btqhCTh6JgpSax2kpfEtpPd2qoS2ezLh5YLUHtRtGXGwHQMp9xn1U1zQymbCdjuJmDaWgmwbJe",
  "key21": "3fAwg9wqLvCEeCYbdtXn91mS7pPRe6uoW1wU7hVdjW895Tsve8b6gPtxXd7PU4qSBkaMrmHhAwS8H22Arc95iBjQ",
  "key22": "5HY5BV8mAQhBFc6JJibN886CMSsNxRurcGbXKRd9p4vaatWh1EVJeYgHA6uvKDTn5rbhR9sARtfNtxKFXqXF9Wgi",
  "key23": "4Yf41e7VJ1LjejMo7eWpQ7PdXcM3NjvbLvmemML3GnCoWdRnz8PejE95dPDS9tM1i9fDAUhH2WLFjbCQeBPXK6Cn",
  "key24": "sV77gGwwNegu67TPVVanLLCTtn1HDP3Lxvh1VYA64Cnjp8K7F8ketL4NF4GkirNEwzL1epBdvj47wCbmxVK3vQr",
  "key25": "56KEgPu3e3FFN7P5U2wukFR1dcYFez28Crce9CdXKy1E4f7jX3EfinBdvDGPkCiW9N79Y9wxsAgm4hxgeXz6uQ9T",
  "key26": "5vRW9vjSH8TsbkreDcXUteENzkT5FNRXemWYpEnnJ1ShMQ78E8cVmFECevmYFDR4outCbuyhrNsPy4hMoYBmNYwB",
  "key27": "3Jsa3VFpiAfjZ3Q5p8U2WqgE4djkiMdUTRisC6KGTTCzG3V2MYea736U9VL56327W8dEgSSuCFMvZS5pE5gsoecC",
  "key28": "5DZrA8uNxJN6HLwZzsLagLMP9KdbcBvUsm9zcimTPtvQJSA2rmnVBMNqV5yexfjdWxtsLgsbvgTDwef7xz9BjoXD",
  "key29": "4xPoY5DR5mgMitm6FQykP58PJUBwXMnCVY2FFGotZQFmWkGovkLZTXN8kfUh7bLcKq9sgNvrv9HHHJVfbSovte5P",
  "key30": "5Mfgsum54ohtUniAeq6Esqtwfbwk2BEjEz1rAV7GoaojJUT2mnajkmvxpG7Dg4K3YWizHqJ2CQPkhNg2fPXtKbHa",
  "key31": "3mVw7hJYqcZgqNDBuY7iJg7fWAWupQcKvukGNJjgUWqBoWi8joaUPF2crCshG1j32tBfSXz1HLhHExF3kubLqCQs",
  "key32": "5cdHnYvgYRgSRVvRKUjHStwpVApimyZGd3iNgjbzYkPxtQTYT96Z5BqRp1D1StfwuVHbB8rztmMoj5zViGvBWXZn",
  "key33": "4JSVYX6MYjQPbmV9BgQeGrRhXqX3eqr4n9VHBpqeQ6c4Wg7R2CfACAJKUc3xHMt6fqPBHBccsYXnyr5DG8m2W8q2",
  "key34": "49PFomneB1YbQADTUGAa1Z4Z4VFNZQAuhz9CMEuQgAeeW7kf6uEjmjG8thnhieYedAMJSPMroxQUKTobU8xBsbJD",
  "key35": "4zcwZ2NWWwjVWoDxeCYdLZhQ7yn3xJpj1q7AKYcse5A2CdMQZx5cyaCfVN5ChueWg7eztnHbBQX3D71hUrZZbFAw",
  "key36": "39aMiRrq4mKnTWUAKCJ297PtaLUpMLxJS787a9V7iMBC4BtHE8eQCpPU2Ue7dCeK9LFRd4nQVk3JYmMu8g6L6voR",
  "key37": "P5tAGy2UArE3NdygJkWBXntuy8LKEHmbKX3stc6xuZQJwGcYKQEDF6K6mi8X3Qo7KZNqq8vKASBDCrv2wo6iJvA",
  "key38": "2GAv6k75MTjNmEwcywHJStarYtpaNnV11jH3q3D6k5BzzP2rX3TPPYWzgMCkXLBNAAA1V5AcBGnbwjFdCf6zu8XU",
  "key39": "5SbyoaeQtu9VREmonvQfuKxetKFdA3MZ32DN5m9VADr5i1DTYgMMrYVEUXKDLEfQonF7Hf81L52UGPkyZUt7fxPw",
  "key40": "5uLfafggNJ8GTXj2D8cQpHPU4Fjx7xB7txo7oM5ydPNmGXsRAFqTKHpbngaRaEFJsqhj15yGPpEEjFc8QVNHWmNe"
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
