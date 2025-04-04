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
    "2RRnuDHPiG38guVGutaPyiTp4RhiyqrDMcCeH43327QyeocAJDPVhHPTDwB4vdcHSjTXSk9ZXZLzhaHzHA2TaDc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLyDPXZSjbLzBpkmRLXwdpRZFku7Xac66WtvJ2gCZtFR973iPT1fsr4G72sd97MoUrCjQAPhPdMi2einw2BYwxW",
  "key1": "3ETZ2gePHipsww6T6HeZ5NheR1hU2bwQoS4DuEJeKJGhWfZ2VU6VQKPLU54ejaBWZfV1Md9YXxCGwi19gHBQzLzA",
  "key2": "3sMpE7N2tJr2sq143FjqXGoViEBxCcmYVA4oGkLRtNDYrKhfU62eshF3fdu7PYvvy7WrD1rQXawJzBnW8n2AJiaB",
  "key3": "5eBi7X6tZkGiKRudCka4ngfcxXz92pv4HYeRib8wQiimTpuRUyU9F4KuKu5n5mKEPhYnRwisNKLyAHdsYDB5T1aw",
  "key4": "2wQjfAtb2vUBhjCRnM2vH2upXjuFphbavAkobzpT8NCzUWxcK6xDemBtiLccFZtNs4oDYnSNhuTLRhL5n2WjwfMk",
  "key5": "4VJDP4uj3CuWf9W3XHgqs6NXqxrRhPCpx7CYkjvra3fp1HTPJWLY9rqVqgcbDLUJcwi9uucrFszEiPvMuHqLj6t8",
  "key6": "5VQkcvfNUT2aukeQe5pRgKB47oZkzoo3t7RKteT3xj31UwKRemGLcsouEcaobYBAMbXr5oTdTZEtUhqKd9hJLutT",
  "key7": "2WGEothnvuBb3mAhetwtazuzApcGNQMNVqQke4vqKtMRyq98eoZx3EyWzvavJVfb9NTLMLWntPZNotuDZrDesuDa",
  "key8": "67ZnZRJ3hs9z3RSo1wyopBzL95ogNWXx5bSupewDwsiNPikmaGJyaPnhG1GzaPe6QSWvKDrx7hg25ujTdXmLyDrS",
  "key9": "P5FmpEgp7j9uz6sb7uQXju77Db3Sb9WRUE3twPHH6USLnfXk4oLZtbUEE9zXdNLZP9hj49PPhznG7PE2QMWWjCd",
  "key10": "4BhwFww1nkUPMHfVrsrn8Fviwdkqg6Sq9Cb6LYcYgdHAm6qN1WBUYGVuChHtzPXLYbBThhYeEbt9uMLAjc65Sui9",
  "key11": "3cZoXQJE8YEXMtHung85jFVNBvKeD2p58VcJEsz1bY6YYc1EzGP3GYWfCsAXWMMQV8Gu1GkrXXg7mtv68Vn926dK",
  "key12": "2VpkKZT36faq5cBJ613yvxMVt4vPyuZDshP6m2fEfDgMU9FKRUsgDwDtgBLdtFk6AV1ruLxu2kpioi3KQSQNru4q",
  "key13": "5jBNHWuistkoFguqKn8JsEjFTD1NRPbs9diFs3Zh1FdV2hZZADhhGogstKqAuov4zwhc4E654mnw2Ug5nvE2When",
  "key14": "3DhStUP4VubAubCXYkZTAtMh8tPmezM67xcBgZHmDJGNdjij7m3NtDGzAqFfqGC2RVsgC3fG2Sa3bHtssRKouw8L",
  "key15": "47m8rXnNNFfmbAF8eASV36AY4zTu4ogU46DzuZUGB6x4nnY34JqvdCeKqmoor3A1gbBjj2nqVaaKy5Ro2downLYK",
  "key16": "q76PUfKTMemaFeYDe7j168k3nvsVPmtD4KXXqEY2kaifzTkg2erq1a8YMqwM5Ne7hD3ntPqwqK7EGk85hbM4CW9",
  "key17": "38QvuJWht32wxkutPnahkdzjs3bR46w2wmaA7Vh1B5zCmCm8V2CTGRUo3m7w2UaouTZA39bzmm4yvTBqqZz3yFvW",
  "key18": "3yBKG9drbZXc5aKbpSFUm1Qo5zv2m6Qs2Nu1B1yk35bwXz2swvviMPpcV39iYwUziaMoJgkKDjtNSrsLeAZUUSYf",
  "key19": "2UyoXriepD1E4Ezx9BJ4ru5eQ22wXeyBcHantiN7qULknETYLwWhb34XGYHKa22TK1X8SMGUNKVx2msruZTnEhAb",
  "key20": "bWwMmWh4wpa6kxV2zshHTYNsorhdjQMsQkNXaQ79KSUQYq4xhztS6mBosYPJcLue8nBpuapMAXiUFPjXEjwQxGf",
  "key21": "4TU9EEkm2mHx2Ug8iJnZBSKaWLNaCX9AhYjLcdpR91G9NAYGV1hBtymHYe1CkhhDDs7ifZbKKaAhgCjJdWhByjd3",
  "key22": "2Q1oP9JFbepURE5Ka8tjpcW2MEJEd4kKNUVdUC3w3esmjfePerwQYmr8pmJMbQqKUxsVfeGb4vwQbKWKaHRrC9WC",
  "key23": "5QT8EJc3mXZDHPqE49gD9Xhzz4iAe8Supq2i32qwNEBTynxc1tTo9MtTfqLfv7BkojYW9y1dC9S1tXtL8kQfcFJ3",
  "key24": "2wiuwkcqHvEL3p2NUZsVMSxFaVrfRb7rydYJRuhoEPZvfHQY63ESv63BCAsDXk6K9XjrfBsdAbBmsPkyjJCBVgyW",
  "key25": "5JXmxrFfwDcfqeSbUJb5pq9CvmPEFYbb4FNfXFVypj4vTzopDbeqMj9Jucwgidi3Um6oAkCoeztRYKrho2sBXyhU",
  "key26": "4TPTqKQLiZ4LhgAdAWkADPcn3RDd2P6SS2fqYvH68tTbo9PfcUQ6JqDkHyBKYH1JqkKxP9tvNdiseRXxcompWTLe",
  "key27": "5FKUuUbFzru9UBdm8ypxNJqXCwo2JWULYnYwXiryJJvUKHvVsqkzTvX87AJP7Zmj2LQXmYeDRdcfeDL9rDyiNfmB",
  "key28": "4BQCinXNDUsKqKDB296VVNvwhVXRt13PxX4P6QxMKR5sQs8dHPP72eJvjBQtwj5MRMFoE9mbqkErmSWSuyG622hC",
  "key29": "AH2mSSCtzydPzwGUTnh2DjkCGTrdCZiJKhT7WTnerTBmyh6CL33BdMV5LMNgQo7ar9fxLxa1sTaqaAv6n7A7qKF",
  "key30": "5aw36yoDLNWuxfjxTF7kqMJ8QNLudRzL9LPerU49x9wxGFT3ttX5UvfQjnYvNzmCT9tHmf5D6gg4tqSnst9HqbNN",
  "key31": "5FR7Q4aFfdQh6Qnc9ycaWuzmGspmZUFqrMgZv8DgSzkfDGeKNyQi3GRJ6sY42iabdNu52guJYQ7nPGdYPvjWGT56",
  "key32": "5EE335RaUtmeBtX1ghifujYBLDmPW9E6EJ2DqtSxgDtGJTCqcNzo8SB3ny2PkcFBGy5jHfTNVZwMVtLhiGpPVfJt",
  "key33": "4k61fFmGbatrJAtCJmVk8z438p13Vv9gyrR6Li8E9XRBbYLRRiRXVjwfNcdDS3b4aaA6enQ1Ayvy3fgCizz7fNjw",
  "key34": "5qg2kqYqyHAUvmNNyyfYMQUFBzKWWnzMAohgRaSwHvXDu61vbSSQNsqzWeDafo7zrtwwBxhdNtAaafQ5ZWzS7XQo",
  "key35": "2BFcbb9iRAyFoXxfPVozb29iynFLNYrbK3BeumkzKFonZNkjabgecabr927PuwSzixGJboBbmJncgxm25KeoGK1T"
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
