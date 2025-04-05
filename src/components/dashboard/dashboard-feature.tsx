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
    "aEwBk9y6mxhWriMWMiAaBwfHYKj91v8JQybGGoWUsdfouzrt2e3axuK3jcAJ4Vx3RcZJDFGE6xW7Y56LLWr9egn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yewBiJsXCEXtSqGQev9p7WgonLjTAYP5iYkghKY8P7oSdjv6c6GfdzFm1YdnYEkRaYFSzSoz1UHHsXqPJ3LydzL",
  "key1": "2XHM1FFApJ7BcZtottzPpbsSAe8V71aHeyF71QHoU4MpMX8MpndifuaTQyaSWKMtxcA78tjw8shz8ZbYcVZZwuXn",
  "key2": "KrV4SmuNEswW16mJLTb63bxPqnVEJ6pdvBFZGhewNsJ417VCQteey9Z1dGXm8NhmBcvD1c2is84JsAGm2crRYkh",
  "key3": "4xv5VSG3KdTjEDkkYsCS1w6ciqw3Sm6mtwP2LTsLMSYY8qnUVJBZdBkWDYfpvVZDDMXH7ZEUuLYa2ygoAELXR5L7",
  "key4": "bznC3oT2PrcqDWzW5oswSQGZEVxs9ndw7bEysazFSCLQTTjEbZ9rB4RGCT6pSEZd5ertQ61SZsdAbGNv7E3KWb7",
  "key5": "3pUyJcsjaLwULT1shyBjqbRw1NwGAXxGc55JBGBQPtS7cLtxuE93VyBbTpCA123FicTRr164inSYBbkHLgj9oeSP",
  "key6": "4GjgLEEesHUfNNLYpDgG5Qb4UobBpbhWMpcnTHaGr58ZnnLUbAmhyqCKL95sfvRsKZJo5ieayMd2i1AQDEuGZddD",
  "key7": "qoYDfKbZLA9qEnVAmWHp3dDkQFNYetLf8krPh7zvh8WdPbk8RMydmyrohWzpNCmsazYt3HeNM33yQESFVMf3bnY",
  "key8": "5R2WS6By3KaqfcPFe3MLZHEWWk1UzocV1Ka718SqF9hHGEvsjGkHWALn7E5Evgpev6eaEWRZWrS8F5aDF8cNYGrn",
  "key9": "3ftLybwKDGiCn3cjRYjExkpFUseeWDC7mhGmEKYkscryjNHAf7D4j6tte4twZJFr684pNbQSai3m5HjTWBkTBJbc",
  "key10": "2cCqL6i5Bvmvz1qAvhcZoFwNJkBTJL2chXfbuET8cFyXDsfoccVhCqQgCucN1YjgFGme939Dw94euyh3Qj7ctGjE",
  "key11": "2hx1CXBjXJgpCSWVnaEkcosEoGN2KSBxHuPC6bdiNKXD1odd4fHd17GKzxC8ugsQkfra2v2ZMxnjmzrz6cbCsb1z",
  "key12": "3kPc7TuA2uphjNjbpgWbC9mePUcxRqKqya4pH57gRhBeAnx79oxZxdBbaw8rkwQbjuX2udRJJVUuW3vn4vX7YUeC",
  "key13": "5xTLs4d7xsJwjMV3qGWUGwWDRa9pBC7f31Cm6Pjj65Pev1nSeg5TENkrg6dBA2kTWRmoBp1zyGGN5PvcrjgeTAVv",
  "key14": "2griXjXgJuhsmjMDc9p8x4cXtepV1NWUJVtz8GEZJAc83ae3Q8hAQNaWa6nhe9AfhjUZBoz27wu7re3RfpfcdY3C",
  "key15": "4YDKvvDpUYymMne44eN3ZwQZmiF69kZQwQxgAqj6T9jANZz8j4ccYvnttg9KgtR818me6LNu33xWnUiYBgNGtui4",
  "key16": "foxJ18XDGzam3Z2iE96rebRS9qtKF7P66yPKzQUS8Mk9bo8uyLirPsLgKXm14oufGPPGpBq7EUZsWXLiWUZH5gg",
  "key17": "U7qu3QZVvgVXopwUCN2ixYRFhz9wM4kyD6s43qJmXnXzoDpR4WCr4ic7WrkRjeyAVZDJWGQmTPwgQ9EuubZpHCs",
  "key18": "4W9CS7s5dv3qiL5X4onKiBWQQrqdYL9xZFMpspYE7HrC2Lh4NDbC2ukznTvjCC3243ByS1nvYGNX1QsupuzUUaJm",
  "key19": "5GRsSDCQE9KGprgjjN4ienAMuW7pMAFq1BhHkCbFSyFfBnsX2R3KgxtrhPPyCdovbrdyEoN1ZndRj6x1ydZGqSKQ",
  "key20": "3UtaFDNNWYh9sg4LoV2unJ6awhhGWKgNgsix6H1e6YNYT28PMLkRsZAeuRYje9DMKPD296kAPHA8mwuBKuZfstxY",
  "key21": "2NJQfhfFkuqms7u3EBneYHPEddho2qqtWn8wAazc7Txie7tajmd7q699DMMPWNgt1Hn3WmX1y9gA2FBnjTHMpYVc",
  "key22": "5hhVH7VUD7A5U91ZjvJCxvDDbHyfSr9E6E2qZYaDNDMx7c5F71uhXxaRMC2ATtz6sB1Cg5834ne617d82cUv3owx",
  "key23": "5dhHHUZWSZpVZsXgXoX67DdfmE2fpXi5KNLXPDTq333U366eqmHkycSEQqsWYHYE4tAW1oSGZS8vMkEb92nGHH2v",
  "key24": "346V2zJb68gdLiscpXczoAZjcdUhMAeZDDn7MD58yKRyAm4cHt7CvpF84nWr9ReRbfQh7EDYaerLVvBUGT6RQrjr",
  "key25": "3bwhApUp6auEVzqZVwKfgBrKhS16VncbdJ74bEzdBGdse28JXiz4G6LCSmYNMnY54odPPRkx939vDL951R3mCjC4",
  "key26": "4NLF6MJPtzsFjB6icMQB1MrWSQFhSGfAiuiDB4PrDYxEVAFNUnZphbnBbqdUdc6NG4p9JFnYJicp6eSGXJBMQXhT",
  "key27": "29vhED8R67GvsP7VU7DgmDx1XiZEEXvkNFz1duLz4ZXvLM8cTsupBCmrxLW2EFsSDgma1GxwDXUEBz4Qzp2geQwu",
  "key28": "24z1Xjw6TNRT8xm7qHjL7gan2nmbgKcQ3nSSEmkUyFsQQgQoKYefBos7TFfXNzctxAHrfPYNLhAbYBVLJwFta7L1",
  "key29": "67cdBib3rgG4WcB7Jxzj52Na3N8Lj5sJRCzTVec6pSRHEzEpZN292p4Y8EwwYWjk69A2ZjNPqw148oib2H9fa2t1",
  "key30": "5WbeQYXdezo59MLQUYvXdqLEzJetc2xUsYxD24tF2s8SwCbp8LHkZGEDPFvi1kHjRskhCfhxJkKyLwMW1pR7PoqE",
  "key31": "6629F2mvSTy4azV4tpZiYvt7nUzMVqqjss1fottHyPMiDqfZnq6ddNQWxpn88ei1gXNDh7iirFmzE6mcxc7N9STe",
  "key32": "2694Uxc1bXxGQD8x3k6ZuVAH32ZvwZNoGT43eSorPRSC2R1a1xUosouyWvBQR8KbWvmJKNM1XsAuJ3LjNCeybn3T",
  "key33": "3P4fg7MeHCieLJrspSUin4VXDmzrSo4QE4o6DhrQKNf5k3UcWdqe4nFmch2GdSpQPN8iuY3VuR4FgfjNQ8EvEumm",
  "key34": "29ZPFJ6ULiNunXXPjAb1TY1vtRdqWvrhfVZoy1HBdU5AhoYVMh7MAc8cYuNNJk5xLLvA9LtBpBhSDUQZPMyJL8HA",
  "key35": "2JQ5eRV4EMKXSYftFwKGiFAstVsszc1MVR4fQkvNVTBUW6RRyiza7w1JgyEhWfB4fuMqvmbYPqUUBKofPsVD2PFD",
  "key36": "3KsUnaAFbEPtBr1ZDXAxCE5mLfbvDur3dm9gYDzELhxELijkRrBkNMeBDGyWm7TZJLuyWipcRzb1XwZs5mSx5w2b",
  "key37": "5iHpVaiC8juDSQjTSXw5C7mZoweg8TS9JNcTNXBeqHgoPGNPGB31gUPVMCyE3bkPoxVnENkcpLN9QnUiJPJEfyBh",
  "key38": "4hTEtX1jPsvhWs9LFt19zoTwxkQ9e4DgV2Cx6CBizayeitvtgA1jkS7NyZLEGURUZUW4aLrSdt2XwWCX4JPxVgwz",
  "key39": "574vb8N9HXMJQMTaHYHjuF77CKGbneB5hXzrBWpM8X41Bnr8JLE3oTZVnRR5J8QigdCqtec3UDzYDw4mn5Du7XMb",
  "key40": "3atzZQWbfZK4iCPPgyXoq4Lz5WemDYU8Jyt4V6yPrY8EnXNUJZabcxVAhhrZzkSo8R5TZ2N2ufFVXRZ9d9jQGiRj",
  "key41": "2Z5qQmskN7f8c7VbAyKc5jdYpJ8Uci6daGWEt53U3x17jcA9we7cEP7cVmCZPzY2LqnzqFRxwK3AvZSsAtph6RcV",
  "key42": "3CLbDZstt25LgHUR9cVbZc9VhXFnVmw3qafiowfpVcK6NYi8tw5dzp3RTVJUWzpa2WvZrv4YmTvbQgAU5JyT51yk"
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
