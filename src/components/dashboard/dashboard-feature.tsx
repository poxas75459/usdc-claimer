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
    "2AkqsG91qqtHfdsRQjh3raYjyaC9vpiy4Trq5L1SwcuZQPrhBNve4zUzPrBMZYjH14wU6bdCdLrfTCC6oRyX25N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxkooUyzyoDqswrbraZje4sV2Qs3tnEt2RNERJ68uQcgj1Ecfvgj9AqdV7GeqLzZYAxesh9GZiAKPhMJ1ah9Frm",
  "key1": "pMGzJL84JrwPaGjP4RLoA2fS2oMQgWrNs9nxRUj3BMumVxvbCEQo9jeDHB4prucWb6bj2oGamKurxPhaZQ77gC7",
  "key2": "kAuDuNjb58aU5DvuNh9jW1EDK1Qkd69kc2dCCTRkCuBK63DsZ73s7qaedWz6XqDuS5Tq6G8ttjwT9CTk2ZB2ZLP",
  "key3": "4QBpPnrdUoT5adeBffrX9vQNM31yoobDujXN1EEnbsjpB1piXh7xzmtDw6W3eNWuNMfWu2TSfHsWT4nomT5GR7X8",
  "key4": "5EDr8HsqCJKHF65XDAnBGZNwCYC66jpDSK1bQH646BRXE8iAqwooBxSR4rmTD7b5wz9xhbaHTkj39UPZAHXW5bbg",
  "key5": "5VF1Cau6b3urcK5RqJ5DAZqisVXxnQZNsoLxJqcubHGzeXC8Y9PrCt3PnjqUhmsfNJr4pxMumZpXuRCf6y7Gscor",
  "key6": "3CVDscXcBvhVqq4NSj6nrQYCH2Awp6UXRn6tBgkmHA554YBnr88iUCvZLDvc4a9utbBQcg3i2Y4mwLpgpfz7kj62",
  "key7": "2pMVsM5VhPLn4C75seZ4ThEUFqyee1SVkDk6PgDAqDgViLbzoLpMoh1xKngocBtgPYbFm3W4fGH4f7m8B86T8mpR",
  "key8": "5L4oj24DgdSk4N4nVH21sUjXmaMnmV3F6XynyvY1gb7jzMGWPcWpQusQruH9BpN3kwsRJYt4Vo6aXx9yrTyoorru",
  "key9": "dP8hsvPD3sYZCHH6pWvoe4vVU5ey1AMzJ93a7GVAdgwPv6XhZTExNeUCV3fa3kZpzGM2uToCEkEV5RVx2qgcnQX",
  "key10": "4BHSQbmuPPvsobH8eXwzj8AqLVwBkTSwgWexQxb1bdLiBdcD1o2yS6dUGZ6sAtiVnb2vLyHNqPfhEBHqYKVRGdDS",
  "key11": "2qxzTeMHKS5nRrnyLkYZCdaCrMbiJhALn4QZouGQEW21dymJKq534SNpiTRZiw8r2kgRBhASV7oFPN9ftVPSEJoX",
  "key12": "4fhw4LEY1ikSvJNJ9c95JKawGjo6CrLiKvjXEkTdtUuwYA7TeiqHpeToDoZ4UYtS4vWXMJPyqY3ekdnyiaU15uWM",
  "key13": "5q5mm7EDANVWeR2SWivKUpWhMwg4fib7PUJvAxxkZrFeceyio5pHzVEG4MqJrWg58rrsWYN7ZUh6ijFShBGScyQA",
  "key14": "bfnXdd6UyBTR9T92eWmJm8Yt7kgjgKRZPuzjuZBG7ZP8Pb2UeC1bUaDqXXckcQsS6PJEpo3Xn7VNhR4uEkgDcy3",
  "key15": "3kGuDy2xTPRwFjTBUNEVrH2wPcyHzQRAhWQgKM7t9TLiiJDe9boQ4dKDEerKuneFBTEvV32JCoccYMQ5jfKfkgjW",
  "key16": "61XntgTDR4oWN7oofcsqWqHV1GLwEUZn5cptSBy7zchmbLMD41ukCHFyoY3DPwR7V4KGvqUnjjHHkoSQEeRCwtp6",
  "key17": "2iU9fUhTXSshruTeQFaYwjgt7hLAjYkKNpco9wN8yE49n3VHiksvjwPNMnR7PMuFN3VB5GyeJeQfA5d4w9a9btKX",
  "key18": "3Z3Esb5Jm2AV51s8moqJnpjv75WPvMcJntaZWw3ko2o4EfWdLSsnSVq9hHCaAvBxccCDFsxeuL1GLFMuLued2BX1",
  "key19": "5a2dTJLd1dZuMB4mK3HyEkcNxtWP2fjStrM1st3vSiXR5sLojDEZJyfYX8KKAy8tBfi7YSRZ8b1bXaK5agy5DL2X",
  "key20": "4n358avsCB3TFz9WSkNzeBPEMgWmBvStxa2ybyKgJYKcQGrWDcW3wnRNRb3mXZJjWxzNRMvTipmGTE6vfswLoFTi",
  "key21": "2n7JovtJAC92GtmQHUqwCrD9uv1oJfDwYpwZB5FkpZ61mT9653fdyvb1uLvsMd1YXHTo4uu5sk9YULxYtPgz6zbm",
  "key22": "2zPiLsDJWJjgeueZx1odmWgotnQG5srTkPSMMVFNfU6kB58kxMLHFwLpthZKKkLng7FkvF7hkzciB3FKBvZLz1Vk",
  "key23": "2LsQ2yyjNQxnDuWcU9yBBo4KZ5mhtRmfRYWgK2DWBwbbkCd5BvjJPJM15uPxpDvBUtu6hdNYWsGxnEnLJWUQDTnG",
  "key24": "5qrX89bVZu3bv5H8rFA8EQuRZgDvUrwu2rZTHEB48Gj8HTUC7xcYs5vZ8f4i2oPHmHYhXvGp59cVfhHRC84wPGkF",
  "key25": "481WsdjnSDRbfKoAKmkQVUtkfSHNK4Ci1xVqyCnEiYBBvbfATf7uEsmbWeTdewjNaZy8smrHUkARtdH8VZgrvDKo",
  "key26": "5wRjQ4MU6oVcd4AXEdgtws92h3BZQKxmz24VuCAAoCXCwgCKS8GpmFC7PJWbEQe2ema8aD9HPAQdVRecZETwmd2a",
  "key27": "5wDMAvuWQKHKVBdwiCk4qZw3eYE9riUEHTgFa5yotyK6EPagn9DMfQWrabKryViYqNHqvWgWG3z39kQCTxGs8rPf",
  "key28": "4Y8j5rxsMEV2rTBocXSgV3u8cFH2yJZZU4FoWRWpkQUoEHoCNioyvQ4MfH8gQCkhN3utvxariyiHWqDenfh7GouS",
  "key29": "zh8c2147z35nQj639xtXfg9VywaWn5XVboxkiqkm2Vpu6vPKbYy3R29MT7NTr9YqffJwSCB6o9nYasU6GJh2R25",
  "key30": "cXaA3jxqpMHUfrRAPSLgU1evgbVwyXMSbWEQ5b1Yz1noC1xbRX9nVmivaKWHjtXhLGWxBCWCUp1jGQMC1zRyj1v",
  "key31": "cJ3uFwe8PpjDYK4P1gtk2AUrjPfoeLV6AmVWxx8UA1YKVaYqynNaBYvSQt6BoEcoEx6aXGCrw82A5Bi1rbJUwmz",
  "key32": "63m1j3MhgjEXMLikPYXiDz6H57xh8H76twTVTFWiUPtGDnQ7GNEy8cDMWboecvTLWUozqqhUaQvS5zt6pSEHpSUY",
  "key33": "DW8z3noM5WQE31tLes6ZG2XzhWFeHqCeBcZVNidhfEwms8QrboGVxVYKvFX4UNPq5aKgXpmruXuaAYcDZV924xY"
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
