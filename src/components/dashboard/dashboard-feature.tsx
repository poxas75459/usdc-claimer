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
    "4wxM7dRYfRrAjbThBxkryn9x9qirGN97kuSEQQtX1yedYUi3AxQQrJnhFnNiEXuHCSkGogHfMb14duNLfVfniwcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JorY11Y4VrebYK4VJymvHStVBbB12TvVrrBhNRUUhYS3UdsVZUxevzGmQrxbcDFQgpLzrVLruoieHZuCmonK68M",
  "key1": "2h7f8ngowCAihyS2KE1meTH5vUV45t321igBDGt32NGKUPeiUGTfwmyoFJE5TzYEn1AQqccUSqfH6hUvpN8hxrcK",
  "key2": "2yZiPGaRcVvUuPWyCbtGzWRKps9psS8dRNNaYKmBBRTwNH47VHVSCPduzbzBJUGdhABkkGQw8B6UTSo59qCqMdbn",
  "key3": "3Vz6jpbpTSa4h1tfiVai45f6Q3kkBgpooy4t8ELNvDKgcN5KqQNiRc5zkCKUhoXPQg7qKmEWrABwzcUiuvN5fkN6",
  "key4": "2KYfauVpqKHTmz4aLdC8yARGSvpBY8re4XxUQAiF6TMpSkr634DGWeFT15zcKF1ZtaBwszuoYBrh3xD5CZ5c9JZg",
  "key5": "si3Asiwuq6m36bJvSCL4mE2mdGXvpHmd5zd6VQrgqNRpzHsstPXQJ74vtrNxNarrk1jpx7GrLNMEFHeizWhfvKw",
  "key6": "RNv9HJ8NqMwyf8wH192GfxARNE4ahhJRjxSfK2SyUs68NCzMYjrLPw5zaP2aNbSH33HM3nD6wHN41q3N3s5d7fw",
  "key7": "2UeRZSEBPPaaz5RsB1TsmG15HX1aEBneFBjMx5nmLdfJczpC8cNfHj76Q1VdaT1pwX3sZK44AsRuGarXkEAqMJZs",
  "key8": "3YfWbpvA1X2XQzqMaRPUQ7ReXKGJUqyNyLA8D1MzAsSa8BycCJ12aM4UmCzc5bud3bLVppyEokjrsAJieZF7TQ4z",
  "key9": "3u4MkMWtDBPyZaCtuzXLqYJUAagYJCw2MwoiuNqGWxttMYrXGsFJh2m74TjBTK62yRnndHotxx9u9MouYcz1S3n6",
  "key10": "2NjWo3eCFPKth3xE3Q3k6TsG7p1Q7pS4zRNMy97D58CCbg9gz2otkQENGNfo6wY7KjRZdRQU2Nds9es1XayUDfQv",
  "key11": "3Aj6zqt7kGysPC3zWPoQmY5w5kSVQHgtBmob8nUNsHPoqPPNev5vf7sSQYoQfGKhKTQ6AdefTYWNE5UvaCfFc9JA",
  "key12": "4y2Uqpg1Y4DtrURrVCfTa3HSCrxbfp5Dw7tyXPQsiuu7NEwpzuFuLbNbRMNedKoDmyTLNy1btNmF4x8A81i5frok",
  "key13": "jvC6nBKu1fnmY55Di1TxpJd3J4aKAUqGfg8F4n9Ss99LyTwiWHZuaSLAdH8iUa9FUyeAR969Pr3Ua5SXskTRehv",
  "key14": "4rfDnbCopUbk4BC6ZKEdBtB93GQy3En4mMHfrrmXmKkpf2AqwJKEs3bmg43Weeag8GbLr7qaTxPL3g6iBxM2aoZD",
  "key15": "BmxB6H84RBf8vL8H3qJs4MYGJHq5cuVe88H9rC5sqw56fLMb16ZSyoq8icTrCuUvZyuzc2AF5pgr3pDzG4T8Gh8",
  "key16": "61tvUd917N4M7Jr38iY75kTaVBJ8i3axBytzRPJautGX6bALtPBofzACqPXYtW4UVMzMB4PhonmJKUquFzhyxfZa",
  "key17": "2hBAdY9iKTUqLaQ1zJg2ZLBqVtQHt4Va3z6JbZHdMVm51b7Yk1wy8NsrFtUzGj4WhTp45kwEm1xfHRyVe7itcX85",
  "key18": "2RxwGFpbz9XX91x43Yv42uymWR4v2DEmGcvnzT8PxuUcZuypgLb3MFyCwYnk3KBxvg8HRtWq1S9JPCJPXDQZBN86",
  "key19": "4RpsTs17SaWs8gXqDhXCgKg6xA2FUaRBr4tQpRGMXm7tiN4ry28xYAHWQ9z7W1mET93swhLDwKmroCG6BoRzgHcK",
  "key20": "5DSHF9uuysudtZLyXDMjM61VetbRzyP6bwLiA61kEtQNigEwUceHPWYTVpk5uGRNB7o2giTR2pQh87z3HXHRnGyQ",
  "key21": "3cmf8zw2YCWK59Wme4HRhoRfAMySFZeK5NhCwNotLPwyjcF1MHE7wLiPzJcW8wCBftKR32cdXjtuZy9X8D8woRkR",
  "key22": "2QTuhxA9z4rozT2ATbt4p889Z8mfQxbqHpL7wbmdnE2EJ1c3ouLYFdzRJJTGvfLZf6r8r5zToRFJLNEbAkLwzWQv",
  "key23": "Nfz4ZQiqWFs1YqYoCh9oDZ4u1R8LJftUf5zKKRg5NtPyQFbwdZ4obUGJrkTJC6nbcUCS6bx4GbaxR6XHFdr1LuY",
  "key24": "4JBYXzc6Zzv7oNjyu7ytHRPm89o5BJckuF89xfpQutbcvSaRVtHQUyoXpDq24Hh7mXQKfJFAwRx9gPMCe831vtek",
  "key25": "W7KssjPY7nbMWuVYyigxtMph1gvxQtB17NeJytorHmY5ocVY5DJBnpgRrVfyumxJHSMbPRncTkrmprDxnPiHtM7",
  "key26": "2sUkguLQSP2zciDE2D2npcDF8HVUQY6yNeNrBcPyh7Ery8sY21C97tftGQv6q5GMWjZ7q2Ma647a542xdnd8Taza",
  "key27": "2pgP8diz7UsoY7TGk96tbJJJc4joDxCk9TYz3jxt8kCQTs1MJKrixRQyVouABBvLz3kcB3yqrZRSVrV2HSkp27a3",
  "key28": "kKQiwnS9CqewEkeKbzeg3geMCRBaWDPqRhRuazVrGpT6KUanWTVZxa8uKjhdUwuFbnm3cUY64NaeiFGE3jwtB9v",
  "key29": "27gRu2nMrt3AHT2dWqLMBvKQodWNK91K4LBHdMTAh2ZGQZVoTUGcRbzchx7xYxBF8LsZAjAA7xwJBeQfz4SEDP3M"
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
