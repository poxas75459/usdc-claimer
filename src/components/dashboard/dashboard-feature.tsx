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
    "426Wv8z6fnvtfkJn5QpqecAxhtWneYjC98f2vwDuQCwvmsuf7jn57BHiw7qmhkxUVtzwGuWFfPfZBAEU74GzsdUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1QcWEeueo35Er7hJyyuZsEUGUZNtH4rDaxmbu3aRybgH6RbFjMmqWeGwp6g1nqpwzMox36WMYGtG18GddWZ9mM",
  "key1": "2zagKi3CgvGSdB2cbBBrSNYrpy3tRQ762nt2pKYfd9ETimnY2d1muL2KBaiRDaN7zohWGtsJkmJu1kDHxGkVeLvN",
  "key2": "4CRcj6Q87XwBxHKuc3362yPdEniYLoFNaM16MDeyGqdukAWC4fddCuQM2EvEQLXUnAM7G1ZEvHWLzzmxgKARgc5c",
  "key3": "4mUSxvUPoxsnLuvu3QTxGYhGrV9RDFxaLfsPjXhntrjNpf7me72TSzP6cpG3f9dFWoCMMbskRpoKTmaPwLewDm3X",
  "key4": "3WW4yf4yZreKQYjm9dww8WpKxRmd4sk9iBjGpdfiAgTDxwGTwuTkhK2UHev2EWvUE5ZbTrgZsy6wpS4NuF5mcGn1",
  "key5": "4tztf5jGtoCpzArXTXNPhKgv31ruartEeaHe8WwE5EFoNFaamaJEAibjARpTBuGTTNX2AWZf3BKi2SQphM6BUQvp",
  "key6": "3nFtc9pmQDGvnUgpAZwwuyBwcbHwkvCCyStnzfeXCfyTCpRYKhn4gsyVCXLghpipufoMLCgZ36wh9LtH8P7HccEF",
  "key7": "3QYEKLzJsSA6juF66ReVLjxUz1E2YYKB3rQ8mDimRkRQcB3nhuZeqaGaZxqrReYaq7iQBYMjvpWLY8fsgeqLsvn3",
  "key8": "5umhZGamFijccHQT6sZKK3KuGt2obb9YC6t5rkGwRSN4khL38km9YVoHr5sYmjaSZjAq4cNqXTGmf95qgMQ7Fy6Y",
  "key9": "3QmULXVEqVtjhv6g9GF8QRzzy3oHRjTLuTTpmL1owo6Dwa9Y2ny3heNc77LRgkfGB7Mrc7XZNKUtnGNMxMn6oBUz",
  "key10": "ZciXDgWiHnBKqnA5Kb63x1VbLqwUySay9MzKjg22UCdPGfpmQ2fL7vk3H7qS2kcXVLmbG9PjFrSpCxXMJMbEB5K",
  "key11": "Yza169EG2vnoh5mjtUb3oi9gsv8CCWrJ6v43EEd9Tzebv1MiVVfc8EMorwGkYJRJFvVvcRkoP2NzAPFRuzCFGqV",
  "key12": "QahWT1RSaqbHAUy3koEWUnEGePyBFVLC4jT9u7FXdSP4MrZLXgN4e6cR3eD3ezXkSjJNzpkAKYjGzi8mXFxPTdJ",
  "key13": "3JwpJXzZiQ1wNjFMhBPX7DDEvUSrYrkKQKzJyK7vdDF9nR5Z9pSzGtVmnVGZsJUu1hzvoF3AwoPUvsKw6mfcjCKW",
  "key14": "5XnyPPKpo2eRatYVy2ghMusDWaMdowVqiG85Z3zXkup9mK5CHHedAYbpC5Jvt1JK6ddyLR3SpQshgsExjsoRxtbh",
  "key15": "639WBd3YD1yYcVL5RwZkqCjyC9nC1C4iwoB3tJ91TbfwRCBM1engQwxxobXoYXURNcyL2aPRrhuaoA9YHCiQhq8q",
  "key16": "3eJWEsdDDLKeXVb9GMGufyEbRadRGtiU4ibmw3PxvsC6cho3uJMe1hwQiVGMxWxQUF6Z8fGXtFcnySBNsQNyep8x",
  "key17": "63VQZuyLMYi822pARLtWMP5Ss33TGW1PxWypRLf4VkPnW7mexfSHXxUudgVewewa4T1f92CPWNPyNXuNwP72eneC",
  "key18": "ZUuGU5Rjsdpc5CPBEDFCB8wLmN3cmCBF8WCZ7NwNTMJUWkdj5BbnuRekyrjsnUNU4sWhwtY3pCm7SQhrNCyDyp8",
  "key19": "3nS3vqtexmuJvdedVGJbgRc4KGJw4aF935MNNJ5AS5iiq7mtjbQV5Fpsq1ZUWrmvzvk5QqTTDPVSh551ovDiq8WS",
  "key20": "3HS9tj9f1CSbVRvBAKE92QYgTNQyusxgnM4xj5TvyX1Z5eZv6UCmKAgp1VVB2xmYoRXRkVPBb8uW8dBgfXajLRgo",
  "key21": "22Yx42WtjKh59zFbeAGneh99t8YxaJRgmWgkDzK4KJUYa4iF24Y7QcYPVAZH4fa4FHZTu1SqMShJiVTSuC7XxLFv",
  "key22": "5qZrP4U8V22LAUV4xxrQ8URK7BjKf9CSs831cGfroRXJQCG8g1DNSPpL9fvttgGMxKw89HGE6hac2Dfn49G3yxbv",
  "key23": "2X2oD2kdSLfrcJwogkGe5dXVu1jZuA2JWGiRZpQ7wUwjnNXgJmswdN2wsvrEvnGGdPGqssiUoAV5m2vZA7FiYfpu",
  "key24": "3asyBcCZddPaS68Z9KKXfUd5ZZs5qnwjpmcvDegNpiwC54TkQKgEcgzYHDGukY7yGeqVRN4697pBpC9x48NtC1RB",
  "key25": "34kaQw6QpDEF4s8BkzEhQp4vXEyD1ABNo9gaRns61hEQNBLpNniXNVtT4unUnKn9Z4HEokJ7k5w8j6zTYwZQqwcP",
  "key26": "3JvyC3Gucizoh21j4KEJ5yVRG7m6MRXpB8Pk7zUbuevi5hqgmHrhBGeVcvTr4N21cnAcdf2tfzCq4R4cLZYdUKeb",
  "key27": "t4ZsZR7KDpWVooqWnzLJbBu1XPSVZufJwEWtQ9MV7M8FFSxtJx73wZQP7z78FZWd7yeuNXm55NvDPeGjsEV3CVJ",
  "key28": "4kbWbjuXSQLFDM2iZnZ3pSLr6W1GnwYPQJDfYkDwm4TMgerJLM6sAb5YPjfEjeENkQRiQWrbm7ULqxDUXTCx3oJB"
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
