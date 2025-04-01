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
    "47jN7vTzbbYpf25LF5SbtptWTzFftcLvzQQGTMTvvPnJrN6WNy1xsjpUY7uk9uMML349EJgdYGzEbRaSaXS1A9fY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLHG3F3nGRzvkQSJbcbvFvARnyGa6oVJWAqQtgNV1JWFkStEh5aaFtNFJUi41AaULvEWKFR6d4pysT4fFN3GkMC",
  "key1": "4xdsV91di7RwQPtG2XyotXV4vDp5wotfnSZfZNMZG5KFXsSozUf9YmE6b8nDFCdoKJ5F7w7RzmRtUvteKUZA4LJD",
  "key2": "2Jvwp8H75FsGbANeRWCZXPyB6scLGfr85LXHNKn9jfss8mvrzH6pbrCCt5iBBzqsjwVYiYaNbSY6bf9Hoqq5Hi77",
  "key3": "4Tt5wJtewSjXogZ1pNVLT1zG7L1y4nbyiHuEuzKbY5UGRMykaF6mjeezRqb9StXYkbE4PNJEqHMCE5MkUsuFwz1D",
  "key4": "jwJrjVv8ES1fPoMSMZz8oWWx74KrVtHit63BvpecHC8L71syYrsM2Z186Arh6sQzTB9TAArUnXYt3KwcAAq57ju",
  "key5": "49Ts9RfRggom3zhLXQnRCwiJvwoUZrjgcxrdRVvWUAAqjCwkYc13Z2CFcmCt2T5xS9bGjDkYnhozTeaikMbpCqZb",
  "key6": "AHmzR6NbfuuVAa2hW9apBXC8eEoy54Wg5mYmi4ibD8M8bLpA8qDdrWiZbqoiFmZk9BWp4gJSQnJxTX6noZBjL4Q",
  "key7": "5BY4E1psWXJL8JvQ5GVMavbQb13HwBhFZ6bTRu7kjpiWTcdG2mpgLQX1SXyR4RioaptizLNTjCW7TUwYwKhHhiTh",
  "key8": "JUJZvJJekCuGeGF94WVhdQEXwj6U5UEq48pY6vzT8A6Kvmb3kLMEDDn7sDykyHGzBw3UHA3JTrjqHQBbRg2kgJY",
  "key9": "442dLPUdpt5BHZMfw83ekoUr9finGvpFqPb7BvUjByzHjLXpMFLvjfsf3GcEg8aPZP2NgQhRRqTELBrUTAq7Zza6",
  "key10": "5J5ps11AehasD4Mwf5tRtHUroZoWouzxyKLZtqHWJGXxJfF6o4LQuwN1uutqiZEA8YT2Cc4CUvcJioFwpouk45nn",
  "key11": "4e6V7244NmnA9uVGt1eAQSqpProUkWNxBoaPXSFWQTw4MmpsUMKbxUYAxyGSNj9jdARvHiphcTkEEZzV7kFnpKBZ",
  "key12": "36K9Uw6v3b2BVC19doLWmchyskxgedNb7NDGx88sPhTMZycx3gCKzo4hQxetWZw1wZfxGERrfcR8jZpwFHzSg4Bi",
  "key13": "9cJrw7LTidXJJqbS9wjFrsk7yGMqc61t3mg6H33g5sPveAiroLJ7aTY8aSMNseAXQMH1cbpUEeKzpmYg5rFW4e1",
  "key14": "gQCxuY3EcW4TkdK9CNefePzRngmMMTBgVRNk5HaTxwSBkyaAaFdQVWJCcqN4tSyc1HfKGk1BhNR2EcsTMAsAL1w",
  "key15": "3FqkuJDP4CFqESW621ofJNnqz5pSW2xoXbjcxmbdWXanUfh5iUoj2fzkaT5GW1fyqYnLqqNFvV6BXgbvsYV5xJBz",
  "key16": "43qv3pUZiVSSNbeo9MPhSe1MsoqeEDK12N5Ytv9LXmnPG366WGxEEMg7JaaKYhkPAtB4bFKmJm4X7Hi7hatXjJBe",
  "key17": "57c6uXvEB8t5bsWB7TFmkecXG9Cwvt7YX5WRQv3YX2YdJCxGbogjkKhjLxmXDJJUoQDQ1TajdK3UvrxNBbPfpp3f",
  "key18": "5E3b745zNS4Qvnk7X6h3JbMmdqLNG5autVUakPGqmdKPLkTCh9s5XgpEaQVd6A5rHyNmHiqTT54uw2mxvnANTL2v",
  "key19": "5B4fWb1HMSdjNbfY6TSTy8TstSDb5evfVzGQk8TpSuKT9rASuVh9tnsL6ZzR33DN8w7nU1N1CcXP8nYRsXt1nexL",
  "key20": "2u3hPaict1BUbGAqBQUyp9WxEKzSqvUumpX2u6Uf24gw6jGtdYv7pDQ1GhjstoF1oXthjTSGnjh5GRDM7cHsexDK",
  "key21": "fh79pFos8aazBTg1eKx3K2sHugJK6wa6NA8P2xKStVF8j85Z9Vtn8YaGGPLnGuCCNW4JNp3exHeZwtHvxFS8VMJ",
  "key22": "4uThi8MuB6BhjPeuEc4tar7Kf74cMG4yRZJ1StVS6wRZMGiq628vF8spLPu37hnZGLEGLh9BD1g8qSskZdgSD93P",
  "key23": "3XpTEehu74gNfVfbEfWF2uCridfnPRwsQ345pNYWVgmfEPBGF6nUdyP6emgKSDPc2Bgfr5YVcUhHMWcSQXjWUDDm",
  "key24": "3ZNRxNZpR3RCRJpoAQ316ihM9JsFeGefcXoaYXbRC7pQm4U4kzH2YY5DPuPjRFRoCDosTkB524YfvCcpfEnD5WEe",
  "key25": "3hyxixQuZqWoHKJfPkagvyHcPrVEVKiZ2ZActPX5QiwBaQcRAJnwm7zSEwC8V1tnn2jELdHG6PkTZfoEQ3LRZ6LQ",
  "key26": "3GM3XsDJ9jYMpZPWxwKqm2XYPzRy9i3u5e8GjU3HVqUaXhJss3PSyAXDZyyXXKPpRaVGMnCKe5HmXH6EiVWjvbx",
  "key27": "5UVHrEfQsjszVKuebHgq49sBqBZpG5azu1kSrahd2Q3rVDCBpEa5wB6U3KZpXdpMdEn5fccQQpv4jd3xLztWNbni",
  "key28": "egY9QqLB76KEP9gZvKDezBugTT4EJneVnt3UmMsPqpF9qGYsHYQywCZZbDhznRkq3vHZ6MS51GQfAyHuygNrA4x",
  "key29": "57NUyXdebh7W8DEGn9xfXKQKuiDY7zQSzsLkWKNed5uzTgqbbsgAst4XZF9HR2QL1G9jd9ofFWbZAEXLkTerjuHr",
  "key30": "miDz3gVtJitadEyf7zvE8G6XqPvw5rhhs3BnrsQ2BPSEzH3vUXsvx41EuyJESjZEPZ1brvJ4dh2bYWcRtb9YoBj",
  "key31": "2Sc3K18Tp8jouAyNQxZqFMwcgNoJtADgFTnhYXgmSNeUnH6PS6Frp2LCEc4vMDUtRMaTdLr7B14poQh4fHEGpTdS",
  "key32": "3myZRfvwqJgfq2bmHjtvtKf5QvChHSs97Tg7qCPMiLjTFwNCyQ9DBjSXqbe9T8n8ACucTqzCfrg95kfBqKQgnGJH",
  "key33": "2jSwza1DQTSCgzykzNPDmPV2K3wny5w3NDqbffFmPB2KHHY21vYCb3iFsfxkerzkCxHjpQ4646fpaYp45MWrh6w7"
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
