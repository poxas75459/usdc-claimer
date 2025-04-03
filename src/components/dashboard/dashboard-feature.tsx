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
    "NZHbXsjexyu186Mc7yYPnCjmSJ3UaaSQLAHSkq4SS5rykowxRF7UubBwbDe7y4DCenasBPVz6GeEMzUFLGRaQ4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXxeqj2NQZstFifqM6zKyopdrkp53K8TngHEDJvUvRsjWFymWBLw6JprR8frHymV1rhs7yafmfD22n6xvVbPciH",
  "key1": "guAxyq1jYDn612r4QCwXnfJRwhPfcXfTntd4B14THeLaxxVrzAD6Z2g6k8v8Xrh5BxLerzEj6TLxNym6gXuoBZ6",
  "key2": "Pkq3tkUVxgd1fwQJfdTSiriJeorKXkF42GyYVSKD3VVkSiKSNbnjM3AUffGR4RiK5sMC9JYHmHeZBUonjdd4o6A",
  "key3": "4m5pi3egVHb2tdQpaDUiMAXoZjTxbfpyYm9iDDmAGNN135FaWLNUgMjwWjUNxs8JrpDtpFWTfPMDwkxoNw7ruYnL",
  "key4": "51jdjJeeRHRZEAF7SY9uirD2BkRa6N2CwwRvqvZDzNsBfpnjYB158JHBNjNs6XwV4izfhkUapZS6qNUiBoiS2HHk",
  "key5": "2ojJQ4AB8szmEKUxf37cJsQJEcN2kEwy9764517WTNKiKTQ7M7FpQRmiWP32xQR35frSFj7wnKpowDBumS4wWS1h",
  "key6": "5Pf18y42EGG2A5YbRgeYLdPtqn7eYgu8LUW5x1x5hycjXqn4XpdCMdoz8ycBnPzrA64JqgChxCqZENaTmmGTHqis",
  "key7": "QSounWnZtEg5VRw2xUmMWjsXifneSadw2Q7CvajpCFwvyo3zgqWtg4zpyuZ2EiSJ4oodpgVig6yMEDNVhdy8mj5",
  "key8": "5DDuE1rZMzQCXX7Q8dLBYB7zzG8HpVJNMaZJxEfMaqL2LWK2Jg3sypGfTrU8uvk4JejyMbT4G25AxNk4tUXJboz",
  "key9": "58rP2BzRMz6KgBmz9Rqm2NxMAPyU5nNCQUQuLkDiYri1yoCFchMzqJCjQYzngU6SWdWnXrRdmKLksE5Rfqi5NwP1",
  "key10": "3prd6VdpFkqUpj9ago1rYiS7MZrzkwyFkLCAi3iNKXAsCZVHA6oS3Gp7UmE1Jqysm1oPyGVVj177cJ6WsGkMLGgn",
  "key11": "HoYTrLibvFue3VP68WJ8XjgortK6Tow9RBEKvDgGgSUD9EA83qN8oPsntCanHtDZ9VV52vWbC6vjm9UuCRWoqVK",
  "key12": "22UtfK8fbohuXTmqZedCwswxhgMe7YT8HgqEoTbegTEAirVFEywFycLLtqTst3jBv5BKkwYFpntYqxQhVTmT86tp",
  "key13": "tRHYLxe49GPV22XW5pNEsjPq5HaQMsqsz1817bwKyTXfcb73NMFcuFTYD1ZtXZXunjPdbP1smsEVcDrQv96yEFc",
  "key14": "P2WpN2NT9VLvJTNfRY4kCyopK7ARPC5FLxn3aYAvCJkF9YzKSv9X5FBpbL1eGNRpxhjnb9NMdVwNvdDVBZFzXyv",
  "key15": "uwi57z9jCPTixT5B8dvFwebXJhUGhzrKj7AT4auAyAFcbLffgkE6FtcENu5a2MPensVkLd6EHznsKUPLcPjEsF8",
  "key16": "28MySE6QfyJaffZsbjztJGUexAzLDHcfmRJgf58U3QpMKSyA2wdEXwBtaCYwV4h8vNJuYBsj8886iHHU7585qFxM",
  "key17": "4LdRUhbV5DdbYqZdZ7d4MkgEd8R2vqFUMzBL6WjyGgfbezNnTxTXgqcAAdjYgW7NrJbLgsbMjY9CvEQNGS1ijemP",
  "key18": "5nzaixhD7e6b6EvH8oXAe4rWHkPgdAMH4wZSg7CvGCy7zFQhXybF7FvmTTjrWRixQaJ7fUNmye9twKfUFfm5yWRa",
  "key19": "2jZzKxM9JXNBu63xJsT7g5EYC15k2zorSqQPiWFvD2TZcnfDQkHXvwNsLkkKfJeJmCXzAv1UaF7ZmjL8UaY64RJF",
  "key20": "2ZyRcy95gG7jHgb4LCqosENWXHCRVz4L8LRwtUGpDhsNPSbhMjw3dLQL5s4Mco9gc2KHFpfgzXgpXL5XghdWmEXu",
  "key21": "2mmH63TKKJ31isNLFhrUGphnWhEDxXDLWyFY2NqaLZgVYLff8yrEE7XEqANovn2DgHqeqm2eH1HHEvSs9VtDyPxz",
  "key22": "3CjjmqrunQ7eMSyZjh5vqDL1LBrmQYuB9iqX454uzbCnHeQHUmR5tDYooPrHSqNPmBuXjiTcuHT5Bg2ELK1hGBZE",
  "key23": "9y5e51qmjSAwSZY2iNcw33mjvsUAbVAd585q3t6sxJTfg1CYi5fg2eCvu5j4ZaDbYdW6sDbNUEZh8kJDTpqiXRV",
  "key24": "2tpfYFRqV9LkgWueCHZTdGzNLJr2w37ufvMUpeNMuVcMNzmtVcNq7JDWwP1Z4oB2ziRU4FtPptBMJyiQGRhBepMN",
  "key25": "aLnydJuL7imbinnF9FrDx6RB8D7oQMARw7iR36zjagqQGg4pw2U32XwN1fnH1AiX1MGt1VwWghsX2qDZMVgB4Sr",
  "key26": "5hqMoDJhUPxL4jFWyANkmbRw7nPrRHz1yGpBL2TGLb5EE2rskn2hRn9YWeRLvrCYVjHapyMv1ThTrv11bX4fQW3e",
  "key27": "4nSavttvNNGcmjmP3bmegfxaM8taQyLZkbXJGdYUoechAcT7va44Rj4G5S7VggmiTE9wkaKhGpdmT1BjUhFHd6tE",
  "key28": "3NEyJg8qbYyjWaL8i37jKeH1GfRBfdCpXyyrrqegJS4kjWVHS6JJDvFpix7d5wohoeaE632Ya8rMpc7vFHcEYMLo",
  "key29": "C5XKe7WPKGjmMZCNFRxxKjEKJwtvu1hGRruUtvo2qNJyQSvF9Qwj3z6fSQVE6buUSHvGg4CBBakQG7wdYeqM3zH",
  "key30": "NsMzZyzy1fS8xWwcb7bWRQHWi2bpHGWGtRMWt3LCedJTbpRwqAqUfGTGMmRiYKJqHvytAZCn7P53pKc65oy918i",
  "key31": "ULaNQKsxf1dnbizgeNuZC8KmZnh9fZFJPF3QGyW9G6N5JkxsfEagJETNMuhzWd181p1m9QFTKJqhHeGH4SbpDeQ",
  "key32": "3Nye3zsvUP3ZSX8kSkK67CxvLLQ6fmPm3HMnjZrpxPEczoUVsY3pJvJ875nzXTsCaHzezPJQhttKid5SSMNc1DHQ",
  "key33": "5XkeQYhkUKBsZbEqYTPrsrhbjNEdSdwGKt65gHNuHJfwys5gUxPydGyeDhQ4uF1TCFb9ot6a24BWnJ382jybXGDb",
  "key34": "ebxHV3zxrqQ5oxNbm2xR7r3qwtXvpGYSbir5eXPQo2t9oYQuJzBNF5c6GXigVstKUphvk53mCVFNaUTeBitEPLt",
  "key35": "2HYt23CZWrbMeaPsH9hLy4MY9TcwTdzF1qLviu6m2XAc5P438KiDhA4m5MddDC5hohtHsCnhnuFjZx2NLFgdupBK",
  "key36": "XjhxYUhuQNLasNmHp8XwWetVwJCxuqpLPBUX1oBRF2ReSa8n8wxagZpLMDNtMae8EyqTCWCcXTBpvpFRmY7za3Z"
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
