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
    "4v6PKHbsR5r8tFs8Rf3Kpw3Ujt11G8iWZuM7i8Gry5v2x93BXoEDgWGDkvSy3hZ5w1bVqv951QLkU9HNWHvykh8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuWhAzdU724w5ngPxciTKT2miLt39ye6wEhT7QnzymQfWjnrEsoEaPFGkU8F6NYag4idRPfyWCNTR5fJNDWMw7s",
  "key1": "5c1gNpXdGvkWiiSLoXgLoUY38vDxY2mVzrTzrRYnNhsoJiySCdPwWcyri1HPqysRTtVDb2db7QkFzk2c1Mc2pwMT",
  "key2": "3e4bXchebAXBUAyT6L3bjJu12DVTAu6tvKYfwS6jJ33mEkdY8hUdKQ6MVTPpgiA9cxL7xFGbg7X9YspzZhitJsq9",
  "key3": "4KA4xe6g7pdGNFaFhf8swJVZDFmcorvyGY8USUxzQF3LV3zMDMw3QycRLpPhR278Sea5x4FZgdXPc6LjY5uv8XGk",
  "key4": "63wTvUBvkRWMuh1eEnGzCcX4w2H8ZbVvLMXBPP25A2RFc6ufx58J4ynJuxGQ89TJJcfmE51YxJP327P48FsM2RGR",
  "key5": "4uX74RbbfLYFoKJH56bRVzyNTSDXWdWGXz8ZEck1Smim7k1WBUjKQcajbBvJYPaocvt8Wyi9fEHyHARxW8i7uAsj",
  "key6": "3fxhVwDQhd5qYox4DWhnukCKZimTw72Bya7aGFsXcvfvmQoCcRQ51zg5nZaskrAJHgD7fLTj7FryAyoJ9eKtmLi1",
  "key7": "LePp8tZhu2cThgBsnD7euTVzp9coV6T55bM2qv5dLbrP1YCboSdq85yw2ZJAdDaVY2aQ9MZ7C3T5ebzSyNcZSVX",
  "key8": "5szPMskV26snxXTRucMXgWwo4RrqugynJuqakGCxkiq8anMxGQLxBBVrsw1SSJAUFmQNjMV8LyqBguwpxXw7HhAv",
  "key9": "2RZtXURqhiF82jpTXSCZVwLE9QrvkgPx8MCZU6ZL7VzusScrRX3jr85ybRY42AB6AaL88UDBX2rB69fw1QAdtX6m",
  "key10": "3j4Zyrz4kuKci9oiejnVQqoWXJ6wZStXEuTUFqDhJBxhTRK3tAijJoLTLV4GfPHfd9gx6gmhqMiBfQNhNFn83aoJ",
  "key11": "3MMSFFjfnmSaRUTVJiJyrNPyWU1YRxgst9ndjBDFrbz4D6hP3z33xhZDJHqPwFizqiLsV1oPunbQ3khV8bdFP48b",
  "key12": "47gdVZN6vsQFqQxmqqDwMpTrchoSFX1PAcpbiP5RrPK8383TqikZPAnZGqgmGkf2zuPcDYbhG2L3vsVsc1PM1LoP",
  "key13": "2xf1wcj6196L9rK23Ky725Mc9TtNwr8NMYtus96RP2NRdgUpxpinsL82gyS5rjZ3ie9YCpmTb5VYAvj1RvQAzMwt",
  "key14": "4cDDZxg1ZxaQrxY6oEY9eUgEPunws7WBRm6qiySi9QVar2ETUVgZF8mRom2ucaKceAYM3uWfUGkzAtJhQmzK3Rb",
  "key15": "2A2SQc2YSJcQcLr8nGFm1fvdHfX5ZYsSZFBsNGVa8WPF8Z6C8tY6ZpBrawrE5m18Za8Sh2jHxDn5yUsdysLnd9C6",
  "key16": "4xfpXbQJVZ1wWcGcLpqjT7tfyjiNLMiFWjoBgkmcGQW6ZkUgvwjG2Mhr1SqhDnB9yLNZyZz8DcXkq5PWrLuohs96",
  "key17": "5qZQVjAfaRvAWUQVuvRUFFKKmFTjVBopvbn2CsBMAWoFj9wUMYiYiqkKpHeHadYFssARkKZHJtUVKkU7HhPgiC7P",
  "key18": "29J9dDqZ5D1wFGYR1zipouCFJeNtTu4o2znpUKhDXvqjXNdw2TiQyeYQxM8caKcVSbPb6DuaYi8wrkdfsoimMyUZ",
  "key19": "3iwXam22r19WXW9Rpi4a8zMnZteMLgz8SU25LUSySvDAyjUHNEwi2su4T1gKKY7kG3btk2krhEpKwNf5yRHjRHEB",
  "key20": "5ZJv1J7uviQpSCgNjVid6D9qjWsDFRPAXTVpFrTMyN3YWrU8bHJcFTizRaE33ehVyZ1h9GmF4w9wkane82brHaLz",
  "key21": "3jA2Mc4GkCpV38vKTYfK91f4TAgB3T8pUKBk9MUikXZJdP3VX7Xi5RNPApysnvP35CbvF9Jq3PJGGJoRCB18Togp",
  "key22": "4hKGpehXWHKMT8gkCkMfzAUsDSm6AZPHyR9DrKfxJHiN8AQKoCMM53p99JzpN7JPRQC3LrFqJEofwrVtvNMrHbnV",
  "key23": "4iftkbjGQP7NijdGB6d8zYXf3euzdW5jfL11Wpq7E6oENu2p9uCGxGaFNzvmFoBEZBQpRLgGHnv9dSAvEFswzr13",
  "key24": "5mpXMoPW5ScsUPoJaaeBrkQKWzYcYhW5eKL9GNJ1uUXdDJgzqjmnwSyeqdUcfKBbJZ5J5cu7Y2sXHUsyvB133JXQ",
  "key25": "2xBazy9aVZUG9k21F9njZKrAWX86YjH3MoBPCnEZRhibUUjyJpE82dE5hac8WkJ9ouJG8VxEpm6Nd717ikzEiF1r",
  "key26": "5pEDgXefccQnbkKJUDWJrayRZq2yN5fuCrhXgmNbM22nKa9ZCzAwQAeGMZAzFZwQDQE3eJFou9MLQPQqVemum7xd",
  "key27": "4CJoD2bGRGnWySh7nB5u3DhL4ozHZUyYGfGYU53vuEqdGci8zQWEHPHkFNb4L36ufi9We2DhKVx4frpdPSUi4AQ1",
  "key28": "5Std3fHwcjK2Wv4S4R1THrhw98ZdNqGFxe2gNABwB4i7Nn5nWVNsQSoeSuxyV7ALqRrSkPb65fCd62S8HSw61DRW",
  "key29": "2rEvCWiu6sEg9q6KE6bz35szNM29bt1UKJjQjJHvy5gsjjcX7TxFUungKQju5s9Af4tr1yJXhC5dENXwf88VqdYY",
  "key30": "36Sv1CTX4DFGXKCHmzip9eoZNG4qmE3ugciwnTrhKNMWCVQ1Qze2uiG64mhfW8Mn6aNKVHJjNEbz7u53wJsGtgdc",
  "key31": "4ybjny7SLm8VxWMGe6hLPopYrqgCPyXcU6iaL7ZS44wxRA5yaSmvYbCxqQwNnmJFoKoeMX52g76j5hdrf8Ujd3Uv",
  "key32": "uas2Sg1ZEmfY2JARh4vNVZgWPavnqksayuKUb2CeamaH1NhPwsLgwZcv8BFJfwM8Ch8EG7Xrp5437gCWyG5NK2W",
  "key33": "3fs1C3ebCcDmWqvtNXMeGEFTS416QU5tj3gG2R8WLnvocJ7fZdSTni4yxhZm55Rh71NyxVxrRko7326ztAd8cBEQ",
  "key34": "EwDy6huuw3vrxc2XBDJhUUcqo3LUpfckeH9X8BwefPG64Nxpc7uCqtKLZPBGSqdjsVj2fYgJm96FWXNCZ3xd5NE",
  "key35": "tdQrZvczkjQa9SB2E2PVR1Y7XQFHqyXY7SzxqPGatDUyDKqt7Y3TKmoJjy7tkCHK3rY1uYFDYDTuhj9bEVSQ8FB"
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
