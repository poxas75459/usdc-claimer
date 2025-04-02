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
    "n3VfGeBhD1YHZ3xEjLkoEfXGLmaC6cqHmZCGqQb62Spt6wWph6djqKPRQmPB5wrfD7okcmaUWPZVhA8cYyZUcvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58YKjar6rxNsc46XJwSuW5vnDQLtwukXGYbbREcRFi8tiKbBe3Hjpy77uWqWji7N6ZSTJA5awAiPBJ53vwC4Biam",
  "key1": "3uCPfvLoAeyf8zabT9RGYaba1Cigsem5pX6TgYhrxmSc8LK1W7Gu8JmDQcdZz8TzM3WthcbRRC3bmc8eK9RrQX5B",
  "key2": "4r9haUrNy13SsbA8pX2nDcrb8y5mLaFgc9t2SHyDJYGAVLnTBMFvanQgxJHwvhXT3Pv1iBe9f5XF5wcg4NdH2CtC",
  "key3": "2egUQWxVAttCt72mCo569vX2pEDvGk3KYN6G7mCQvbve2xBDuUER7ur11AMSsThn2nW3aMmmFG2Toy8qJQfMyAZu",
  "key4": "2Zb4mHqoFVh31uRhhmz63agUwndLYgkN4CrGTHqmrdvjKXjvKyEz3Mv3Ppp6K7ZXbK85vSVhXjMC3k3tGL6wcyPR",
  "key5": "5g2movThzSEwqA4KCQevQizPu713wxShxiGAUC2TMJ2K9gQoJ9EMKjd78b3VK15Gb7nUPmiMYxSbMxCMsYJupjVX",
  "key6": "54yo9ZwEtpDs2DmJ8gWYLsrYvFDS9Zc9FfykWNqCCxn9HdMNinS3YJyWEjCxgWzhNLXAEMjRyb5QFHAuJ39hwoDw",
  "key7": "5C2hVm6gVnQJdM6FRKwi9nE7jJsn8n1V6MwAD8BTNTKGUSBJT6rx5e6rswWNhWFsDoFzuxnftw36MFGHBKR1ANkC",
  "key8": "4XVPrjPdkRx9KyedNfDe2AtGrSoSDbCH2STByLzguaZxE9gHkyMP1ieHw8F9Sug8BoxPrDqiDYaybRLxD9Z1AxkR",
  "key9": "ZBREC7cRU8uktnxEe4fSBr792v5gp2Sfk7xhXH8se4Xyzjz9dpThMPwKfuoUGfZPPnhAaQz52c2AgBSen5g1nWB",
  "key10": "iWm6pdzpjMu8d5gXYHs2SBjeDf6HpjkdqpStrjrVDy6Ed4QykE21y7m9CgxhumrpqSgd4dGBmSWs48MJthuFTAn",
  "key11": "5Xpt8NFTUXq1Fnwtdv4ZcfPXxaUbVBgqSVi3d6LQ7kAEXDq9jQPG9KpnYVxMJdeFpDNVNhbSEw8tFv6gJijhv2zc",
  "key12": "5jcczJBuuytb9bfPCjYkCz5u1eYS1ZyJG8La7MEAikJ5w6wM5NRXxpXsGdNozfmwu61mPq8QMwpnMwCzn7DYceGN",
  "key13": "2UoY9BWVarfUGU53DUrRBdKujbNxmpCi33dFfcFGKcsJBhRH6ALtybRbp4LVJQEmdAvoGGNfpnKs3ut4RQh56BnT",
  "key14": "34RnUeH1N5AVrB6SZdPTQj4zHTY35SwztUgQEUbyJgk8J4gwgeNY7bBpU7Gf5TcRgWmkv5EQu9ZPdUbTgN2TQ6ie",
  "key15": "HTwhuhgZhWsMcBPrRzh6rPGYDedkTzWcmo4eisVTsXo5WB4JGTVP3RHzxxFjQDHddNMW2p3tT4c7o69Way3wGXU",
  "key16": "uFHoQg8RXMDCY2ZnQMxiSQsK982NPErtoAoadtYiJpqSFNEz6k5kuT1QBw2NBgm19Fe2jtMY18bCHs4TvAusbJw",
  "key17": "5S4qhVQKob7Mcdz4RE47uoQXn3gGHVpmXjpbwAbcVBBoMFHYUfUiEYxzphxtWQhTrmBbnkgHsk4egiQEPSoYonyS",
  "key18": "52U3ur3ELhLbdCESA8NF7zyM1aBaH8aZ1vh36RxDBuTriEyzvympoJ8H1EsLWcV2RE9AEYrYPqwLKSWgW9BpiXjD",
  "key19": "65QyLNb7TrfyC6PiJf4T7W2Z7zEWXa7kSTxKw3suKYcSyfAcKwgtCRytERthh3cqnQCdGYF2Nb27QuPc8v7Dw7Gp",
  "key20": "2joJ57vJxoDy2SdHMATfNEYteorahrKvQVwrM5Rdb47qUCadyob9oCxwo483V3f5QaidQseRNFFXwzWmHXiRZrFU",
  "key21": "LE3JTHSfhdWYkVw4WBP79YcuBAJReGc4WPLEvKKhRxSC3D1SmmZ8Hdky7598T6yXbiB2FPBwP8YubQnv8EKwzAm",
  "key22": "5ZGqoZpzbDTVnwb54VJhApHaRwJyHMBbpAQCeDFWH8hTWhzgCi82ANCPU4Q2buwKDmmgbLYLQ94K215z7TgB51rh",
  "key23": "4ec27GXFy87wZffnbGpNvQm3mDFu3MgJtmXYHuGDccZit2ZvhDz7LErTnFu6HYqexU8N7J81sXYSaYT795xDvWhS",
  "key24": "Enp1uU5kV22wEd9iSZSjSDNw9XHK11qpQY7icRwnEMDQEL9x5QitY3r67k5H5NR3SbdupNy73RXmk79ZQYAXppt",
  "key25": "4T65yJZiWi8Kojn52mQD3W7HQT3BXK1EUmgPbu2oLW33z7XmRQ9zaC9vjwqmjhNdNfFPyUriL26VsPuKA29HEpGW"
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
