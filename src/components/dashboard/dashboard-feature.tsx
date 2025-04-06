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
    "aRUkWdcczHgiLPobeuqGzAsAFroH9ejj2xgdcrbAtjJ6yKiekmtK7Eiu9g3r7xAXKAxcTLgUEoKnEqeMkthMQKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txq1LkjNdTshpgXn813fzy9qASDpmqMphz1wAwoRfcKYETQCsKQkxxUGppHerQbgFGFhX3mB9v6M1cg6ya7tsP8",
  "key1": "5k1D8Nr297vD4C4igZ5mppLyT5Y5stUx4mQYWn17BgfJh4h7eXu8hhNT2fxzbyxDPihnYwEYtgFcgJsT2q16rdUr",
  "key2": "5o1xRnZ4msicKDTZktzNYaFAJwLsGDLSs7TcDoooa2Vo24UWbqiJy353UgEjsowfNp5jgbnXjN2g4ekRFuXs87Y2",
  "key3": "2bsoo4EMZZPqdEiax8H7V62jj3gegpMf6durBPAuLADdmc5eJAeaeHForF2vid1RV7VJr2P2hZritqEDmz1Pjvwv",
  "key4": "3tUBjFTZnGzbs9CtCk7KXjRbhg2M4XTDxXXuGWhCr52oFVad8trSjNFAoifRWgjJTW2mDHbYLKzBNZUyhXT537jc",
  "key5": "5tZTL1RTvWjGjbHjL9hd2tJtWLEmv4fQa74N2zXW8ukJkQnnjHo3sr1ZTSDR5vwLVPceFFo1RarK2HPx3Cvd5Cxf",
  "key6": "3tpBrQAXu2bukWiqfF9o7UrxusgrVEisUjrprAwVK6z2XDPUEqQixLuJWiPnogZ9RcZT9SHj2tr9eLXK1rfDfpyQ",
  "key7": "vLYD7k9Xf1rxDZEHSdeozyWKMKNiFsHG8ANEF27BPgn5NczZdJxibx3Jd8EB4E3QAonJjYWqBqJkkbZFfLEyx3Z",
  "key8": "5cZ7qnzP8NvFNFbYhbkGnBQ71S5Xb9Wv5dk3bUf26ffrKg7zhNPbWUmbW5wHYLdSHP4H1m2Q7XKLxmhW9NqgavuL",
  "key9": "4DSndyTMgXidNhZNKaFuAgiHMvTwtW27joipb3yEFjwdfL7GFEGQzqkxL6noraKceUDMjHG1LZfwLM3sS9fsj8zd",
  "key10": "3ivxxXCphq9PaaDDJr18FewRrpTbAe8pRCLfpnhcxkg4stFUXFoU7d2uXCQf4M8tB6RXNqyPSahjExak2JpLoPyL",
  "key11": "Ci7vcKScXbXLoaZ9yFnVwnvR9cNLcDiAcYLUzkQDkKe7pMhpW6UFUjnfbtTSHM6NSHzawupxDVefs54dCnmAsLC",
  "key12": "62UuXZPdYaTfuseoh5otpvPuWHyUwjfa2r5bECQGBgzi91reGTZU4bNTVypJB7nGXj1EMjqtVYZApoD4LLxtcyjh",
  "key13": "3bR5zxamicJ1yqvxUW6ckes3775Ud9KqdDKHVrerKc3toAHFrzKm5X9Swith7QetJn124AFfiToLUd426r9hFzoH",
  "key14": "2xvqZPqoiA1AvqFAnxAeFN4VowUprnkbXoFRtewyNy6GEnriN2hueam8KmX9XY8nEk6domn35aAcGrN1HnrHsnPT",
  "key15": "5iX7iJ63KhfXQsLmM1mttzkmdZMUqDzhMNBEXo1HQtZwdSPdGuVsu56mdkF2sRVKnDWWYAThrRWkQN6cn3GQTiEB",
  "key16": "xM3XEkAY4zbcHMsdTxio35jCQNYQWat49WKNEpNZJh6NaZfp8neRufCzRAm4ZHf1LVaicC1o8kzKPPBorat7LKH",
  "key17": "4iYkhhyb27shx69UEisZjSDwNpqpPBPkqJvhz96hkvqpFKdwDcLgGeqrJvpTEN8s3ZDcux6oMQ9DavUHecGZu4Vc",
  "key18": "59ThwjKJM2WQLpBB74eaMcmWS2hZZFAFmnWKVU1MAJNKnmQamRNTswyQHSBgEFRzXoaYKxAqGPmLSR7jFznJJLKy",
  "key19": "4dw9NPTa4Du8d8gyL3qwnebbgKvFULh4rdKHhjorxCNHuzfv95DgCPUdUNctJ6KXkL4AoJq796YwHLVT41hL42Zd",
  "key20": "3DCcx9CQZQsprTHu7JT1Jy7n8DAQd925o9qwT4c75sZKtPWV2QH5sGbNqtBNQkgatQbN37sRv2NCHU3eUWBBkm3q",
  "key21": "3CtCC8MjNqNdrdUiLDPYjExKzwzrdSQa4UAtw4Sf6Geu6pKGiVT5vbaRfDrHLbeNET86p7Rgfb4YvXjpZVcRLn78",
  "key22": "7oKCk1i5kBZzQBWDSePZtQ1QosWQsWxa12dFWEMqRKNgfjdzzWZHyQpdfyYLYwWLN1Hncgja9J4yj6Xu6Y5du7M",
  "key23": "5Ybx7KxuDFjZgEtoHQRGDhJNaNDWrpRNGn9ef88JyWHDETc6p9G3Vt86f3CTqwph4geN8TMYUNh3c7m2bBwqEyqc",
  "key24": "5Rv69Kas5LR2j2Yi26ZQVYAfbV8t95mnk7tWWRaST87syUM3DBfFE9RVMsUdVSwf6NHHuwpmrjiz1zgXYU8B15YS",
  "key25": "5R6jZ1C3ZwzHEFR4uPokhWU8YgmWJj5ZEaW7ufZW34bSrnotYS3DzgWKsDMMe77yG3PuinGjgxA9fhqEQMqzetY8",
  "key26": "2LjbWqotxtizWAMxHebB11ypAbdvYRRrrBMs3N2KWyV2NphWp5hkQyzQjJ9PQwm1VcUzNFEd9JPYs6TQJVUhu86f",
  "key27": "65a94HYeYkSnEHH18GHcuhGuyGGiJ5kC14KuKqa3gVZR75JFj9YeuadWsMWaFUtTJcMN5LC6AVPzfand35a6Wo8T",
  "key28": "3oQUkurx1LKUAmrdQyCoSLDRRqJAjPSm8bCiESU6KrBHyyiGTXCq35rb1PRDqBP7UnmUDSpJvj3WxeZBtzgUqc3p",
  "key29": "4hRRRwpxAjevre3NCCUeHUyJPUgBnU8kRjzb6GzpX4ycM8rhtguz1TTFuc3fskUgvTj9wDEvaQEsifx7ZbjFBbCp",
  "key30": "ZqhwL47vwQQsJ529c9dCAKLKiCVpKBoN4SV78p7KEcU9fgVdwVhntdrBxoqgnyWLQRzQALEezKyKJTpTg3pdEmu",
  "key31": "3EAPGkK6u9LyFxJW6J4L4bS6PquP2CEd9MK6jcbxtZY4D1a8Me53T9KGHyec3NqWihAMJiydRvyZPzpStPyi1bJx",
  "key32": "3TwSBFxP8QjSVt8DeHu5MHYEL5rjmskxaBUKRkn8qhcrUvB5gYaTeo6BiF97ty9s5yMLAMV4jGqXWZdXSsfpLrY6",
  "key33": "4fLrMH5B9ykh7TbQAfb1oDcd9pvMmcMP73D6k8DJ48jdmjt3KEFpLDe6ZK5oT2Gw1XUMnGzQyFWq32QuVQRvzU2M",
  "key34": "5KZVdrZwM26bxba1KuG3yYjdizRCmEbA4DMZGm212XUTCjufP5N2qbUKmzd3pZV8N1D5gwLaSfZSU4RnwNaQfpDt"
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
