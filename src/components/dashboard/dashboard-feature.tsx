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
    "3XeEiDq7kdV5DNuTk29nPJmbptefxGyQtbvFhYkF784XRsAgcXrpK8jyyXba4nRaHDx4gmfF5yFY1U64kd12aVNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7r77hxfbLTcpS7iiiGp9fQFKNqVLM1DZ4H5gfSqDG7yQAoZVb3yc3tJdbBH18KaBtP8vyjfzNtKmRwk9jCb7wr",
  "key1": "5UxA5jpTNDzavMff8LrrGQBdcZUgyfGn5SMRLc8czGshbsv6jJGEMsoKcPdyeV6ySjX2Yz73qckQ9NB9Nf159i86",
  "key2": "U62AWK22Hi2m7JtXVQSmWmk66wCCvTeGp221e9KYkkjaBVZfPZF8PSo4PfaReZVw1Cj1gUsPxugX1cUvwSTtVWo",
  "key3": "2Fco6UwFc8QXdxfDx9swzUDN95ZZ3z1WLvb6BhgQzjY9SpyP6cteAZgqPsmyKWgm5fPY6JwVPyHywCi7ujEgTzBq",
  "key4": "2sEGSXw7Rh5NuNWa8coaAF9r2Ng5bPfDWVj5oY4KEHkwVmvvEUhe2tRt3TZYn1b5cDFpVPr5sXYzRedpL2VwKLFQ",
  "key5": "4Dmf5u1JWTvVgfXRfRzgCRndjbecXBXcCHGXbUMM7fn9FzwNhBqEEVK6vkA1sJ6X6wVZP1xgUjYuU5ZuHTuKz1us",
  "key6": "5oS3xjSBBJ3wjWM9488wxLxassXGKzWGmXvQ2nK1uwMYoJ3z2UGAe1saJJKVjuTgEos7Q9dnjh5d1zS91KRLUjaQ",
  "key7": "5urSSXqMc5M1WZyZUmyfphtoVzXn576zaa2AmGfwjcLirYMrkWVxdFRHTJAHqdkda3puo4ED4smyGRfR9J2S5Lzw",
  "key8": "49vhYQCVwj929ZCZWXM84EAdGzHpHH8Z79CcjrRDu5eWhysRrjC7yk13VWK7xxyXQs4sMejpzUmrPnDkrgzBeUxg",
  "key9": "53egzjLGd4oeTvTwifRzXMFWFnRFpj4Q3fdYRasmRYcQxNV2AJhsFfXysynCv8WxJMrGRWYQMqbB3W4sbcg7M2Ni",
  "key10": "5efoBrL6CHcDcPxyoviNicpHVguoat3TTeeTwScLUaQWXAKbnEV4HVWcXBCxQVVQfpuTRgASq3sALPYetG189Xvp",
  "key11": "2LzpAsmYLZeA4j7gYs9wbJ1ndBeqqQUjGVecrkXLStf19K9rdD321dHVeYG6a3YusqQ5RzBPaNNQCZChdCU4vZz6",
  "key12": "4qxzFKu5j7CM1My5Jtr8qHQEPAS7HDpQTbyKvsmSppc5RZCHK8jNU9Y4xDb5LkVwJuxKUALxvYp8cGT7m42kLgPx",
  "key13": "2WF1Y9VNCzdXwtpK8canub7Gw6RwizAVhiUzctKREgRMZ2Mpym2UtWgDBuU1v33GoPUJFNAyu7SPBuJYoXqJRC9b",
  "key14": "2jVL5rxn1294wQvz4agwxG8zibcZXU268m83vnp14gTXToCn4cFtmV34gh2spq3dAZbM1VpoJ7GFVFvGJ9xdyrPQ",
  "key15": "5mAtmNcPD8A7JYAW7vc9eQdhjzReUDPFCGwpQ275LyTQWF4qSBGAG3gseaBcFN2sXfNyt6oVRqzNLEedBotg8qAP",
  "key16": "4iDeh3KW3zgaX5YSFZSYUBpWBaHTrHpaYbw7BcnN9mfErq3kMof5zr9kxNhWdGoyZxiG8w8DC5sBmynCxAG9Rnu6",
  "key17": "5nmFB27T6bmFrp25z6e5RPMJWcV5sFnCzuasiRpapDs2an91SVHraSg6w1X9nRsmjLN8wbm9rc54WT3hpSVyWTEC",
  "key18": "5sNnorcfudQzgKXCJkHPUFuzNnRArv1zayE6AHYY5UPhk9G9JaWTdQHrZD3ZDav2EcVxdpoH2kXhp2Z6Dzqru6n8",
  "key19": "4iUFTKnR6eVYkZ76A2Q2m3qWUQUYjSvDdVNWRUEqVRvU4MaEuG6XR7vzbNKxBiUEQ8M5utn6F1Qw4PhAKYjNzSNV",
  "key20": "3zUetipMYGcyeX9A5LpuLzdTMCH2UCpiuaYQQDXVasWBhsqRQV3ipe5yGSK4xeUw6gUhNPeR5R4eNuiawqUph7LP",
  "key21": "5MEYGqVN2xZCRgeWoGta2sCxYoaT8JW9ZYMnpm5RaQhbmLRWxm2jcCr1CpBnHYXsXMsuxxUndEnyV5TaTvLiEh3A",
  "key22": "2aEuwFKQ5Bwv7NwTHnDLo6pxmazryH9wfpDGuaDfExwxCqnvMR8atfSNQKnqpNZrGLcoSPwJaxya9ySJ1qkX87B4",
  "key23": "4cnzM3orTUiXoric1X35m52Cut5wnMetqoDQdtnHE7J6rUZuTyEqYrMoH4idXUhUeN4fnkNaCwhjiWvHgGvCegX8",
  "key24": "42YEPdka4PxQZMybJxhMqxLsWzLMVeyLMb4BPMcuNtHMYa1H61jFm3oa5MT9eh2Yq2rqUtnjsNRoduQ4DFcQhjK8",
  "key25": "2F7FZF1rrvnk1wVF83ToGUDXDCTWyoRJnq24d4KXnGJZCSPdVnMh166jz9dTAMoUQWgrjMa1AAG7tM1aP3A6fiMy",
  "key26": "4UHhzHFHa4B1cH3bDiwWM1gMazQwtcXbn8HKW2d6Yi7DDNo45KH13AbxNtjwwPa89svi4xMGGWuKuM4XqP9hhenY",
  "key27": "4LPPFLuqHFEinMZEHKBq8f9iNLwqH9aFkkGn8kAcbRw971d6UX7cbzF8cYejPNGynVzwwJ7cpF6SX6togNjqz9uF",
  "key28": "3kKXkL2Eb6MeNEqR5geVegioxGNRUC2GGyRBynjKZ5cRZLPVro77csqmEdv639GfAMnL7we14e5nmtCQpRmK3gPB",
  "key29": "4eVMfX4HXTa8y6t4oechV2qJAuQxmXooGDeKe6dwSuuaNcxBzrCr1jjwZ5EFWshGUDEwbG4jzaLjcXdDRo7Qkghh",
  "key30": "5otyfbARbyt7q2urX2jaNcR7R8UbcN3p3oaX9RcM8eL9izXQFsRmXam9aKrK6DArPpwDkhTtAERPWQcdGVyQwcLy",
  "key31": "1X7TQ9pftUci2wP9dmuYvBXBKWZr7jCbdY8LnUDSDM5QkA3w2S3SxthLeiU4gMbz6cGEhG5JNaUzs8MCFPtQLTs",
  "key32": "3koe9ttcszunZwYGmTbTz4L3zwkrCbNANPMMxQFBtwHPGy9ANSfoA1qSKDENUKvWC3nCFt1urYSYxKvasCXyYwKJ",
  "key33": "2ejir3SyyS3ZM7kZebnk6aDGZbYis6m6Kts3Rr8CfTjPoTcSRsnr9wSeptsfiHZCPz7aQvPQoikusp7TSNYeRCoz"
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
