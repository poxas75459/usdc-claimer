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
    "4zeSMPEJ7GpYoQKssaeras8ynnqU4MaMgTGf9hgdVfLQXsspApnigRkN6ejsV2GVnstKnQKsfy4xhx5h1jE4BFEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muE9N2yDX8GEzyxSkDXigmacA2dq9WkL1sGMepbz4pDxiDHLYs7ETMeUF8Ad1BU3sTeA6gjcdKpr5bvuRRbG6Ww",
  "key1": "2Yooc1SZ96JsTaD2TTtqhoKgLkWCeuUSzSJ9xeg1pQhHTkwBUp3ycGxhR938RyGXvaDDMAfcBxksTciKW3N2hS8o",
  "key2": "4aKouhcMCkrkLmnPcTTBhAcDa8XcSgw951dWH4zSjeTpXAf7GKHc5RMdFSUeXxcZcPqzrFSrrx5N672fjUfbwPri",
  "key3": "2uw9V2ocQJUsJ6bFAQ78TXTdn7QgcUWooLG8kqBJ6fu42EhYuFBUPXSSJYFuRKe1sMkYmokKpBZHt64rLS435WQp",
  "key4": "4PKDPZ7Y1DfrFCBnhcamVcQGaXWhjGdyrYdZfnptMeyBMmRoArcih3HQJvYiWq9KYWM4JBnHxohYZVdte1USRXcu",
  "key5": "3TvusUc8RYwRaPaT3HsCQ7ubmj571zFckHee6mAAmdeR916xzvGPfM6yYqjiMbXpyFo87X1ZPkFiK8RH5awHp7MF",
  "key6": "25mipp8GB8qyUtsNLEczdRvvfJGkiNbSy219gM1UmBjP4WoaB18oKzTBCrc2FURRdSugXBf3XTwKPKUTTBxBkH8h",
  "key7": "R68qsgsttekFquxkvAfyUXXW3JKARnppuuCMvauGSzF7jSK4CddekJjsKNPtBABBQhfJzcVGY94RKRy3o5ruo6E",
  "key8": "2Nd9tktMS4B58zUGAxaWzYMT2mPLqxmT8NRUihD87FxxSieSgwiLguEECTiYke3sGiyE7ctCdXUB9ZKHbrvNYRUL",
  "key9": "1p3bNHMcA8pQdvCZrCqyqdoT5HTDMYDGZg6N8v89GEYK9ekJokNKhoA8fzisDHxVgaNK9HSCL9FMxdGQVdVnw8i",
  "key10": "45v8Uxh9P9bkvbSKmjwzR9UuBeGSPWraccgDUbVieaEGQhdPt3oifg5gUo9ahbDUxhDTPFPcJ6LwJTqL2tQUz26y",
  "key11": "pGZRS15TdfdJQDLix5s9xaBHnsTFmHiYgsEo7Tjwp6wH8e5K13matbxsKjJFJvUqygVovJnQKBVLBYdxy9hv1JV",
  "key12": "462FVvzJx4BbPxVFzMwBTjdRYpemfSGqwr1ozkjT6TXph9ndTY75wFCzdvwEW8LSGVcEnhCsuHgYVvoUDp52hMbb",
  "key13": "57CpDfE1Ciuyionn5A1vSqKytL7eFamdkJg3dfQqxKV9Jivw95Hpo3dGhEJDjgPavQaGYyJgpBFcEN26SWASmu7D",
  "key14": "3wnifbscMJ5XHAbxeZa6cthyRpeMGpKQrus8oHTDDxsSGCE4KoYvTobkGacbSgMuaARMGNG4pHZFetY4wDGifohV",
  "key15": "3kCqxb7LYwUJivoKnng867kSmGKVZQqgzidz8wvUaCoCzHVhmFsJfYaKtMdwAxAHeWPU9Q6auZJCeztdpkPz7Ez3",
  "key16": "hsgX5SQP2HTKi2VyJYJ7RgY7ZMx2HyiH8ZDcH9PSJatJethgQWngGyo6XLpNJY63Yytw4dCqdRKBDzRD5Br6SX5",
  "key17": "4m3yS64yXEBvgoG6zewibc9iku27YR5ZPNAC8qjPg7C3xJ8tNxvUt3ts4Jz89NX3RLL5Mn47UxCavY97FDw42FPK",
  "key18": "54Tu9z2mGdxaGxTb5edJneJAyiSBfPfvRvCYbuDLT9nD6TvFDRBbiqPTUDamq1W7zb2AmNLtyHWSsgwoREWwR8Sw",
  "key19": "3CWXaCx7tFWeZjVXtWKwRLxRT6SJhVFqxKD5gnFSrFtxJrmT1D3UHMoE8EvNLdGNJtDG4gHm3DkH2LggBUV2gU9a",
  "key20": "kMyRqu2ugYT5wEKXjupPhgnoRPHdaTFF7ReA333VLyXmmjv9GJZiVcWSaF6BgQnbNdamLCxQADW7MBSLXPZtaUc",
  "key21": "4hLq3STij4fdBc3QKyKuEEAsRx4VU96MRCJ6TBxnCokwxXkfzaAz6W8pP1CnGQFoTaex29fJfmM5tPCevnA2rqAR",
  "key22": "4bH1wkyh3KjKDxrmg4UEb2eKqZGT8YbKvL7R1Drxabckbi7ThXBfnT4Xkof1TcD8ryf8bU9VcUt7E9bkNUsmDJm5",
  "key23": "41cCjcQSsqrdD4V2sPw6cjRAqFEneN6qjbSKDYdEEZGwxivMnn25YbLrM7NzTsWjL2kAEdZtVybbTnM9i9dYuuCu",
  "key24": "AP3x9L97WfoNUdeX2LP7HewNbet9YMmiP6qAmT7GgsPo3WyWpMpeG8rEQ19uHSEBKVwsrsQh6PQsxDw8DvKGPS3",
  "key25": "2EtQfhS3dmLW5mJiBVndscnB3ks45piPRZXkTRzz6vBJtjVaBxeERC4xyoHirFkcJuhUjeNzNH55ZUKapL36tv5a",
  "key26": "5pS1krKFw1EUB67YD2Wcj4aBdhDgWF5S7YN5xjD9Hb3zPMM4uFBXuvZiUrT2oqx3FT75hKqV6GjWP19UywuRe6W2",
  "key27": "HnE4V1hPGVaxPLbaKwGjzwqdYMm9ohjCHntheJS5i8cmfDw4L92m6Nf3MLeDT96CRx3Yq7J9H2zvZzWZU2uoTVH",
  "key28": "5o3FLnujZBYLRRt7z1cgJnCmoMEq65gsaYKCeFPtNdNUb93yuwum3ynf3HPEsS2cjzgtzdw9rKSx2iCGA2FaHMEu",
  "key29": "44hxjQvyrAAAT9HSUVMeJVAyx6YvoQPUDvV1BKV1CfyptUkU2FEaKnTZAdKtsfyvHbPD2ADgUmxn1njuzyEmuwfy",
  "key30": "uz3GFQ68Wdrj3gmg14BHyZLSy2CXA4x7aVAJ7cbY3R8D3T4HjspaCVsrwZyDzrcVc3V1DiTEqVLPDiswSbwUk3M",
  "key31": "2SbAHrX4JX65PKoo9NTtAK98BfBMW97MpSCzUgQpz3qssE5zR9g8VVnsXqUWqXwCTBLKGuQzEPNsbErq91chd4rP",
  "key32": "4jWnLhjsvsfy8nKU8MpdmP28NBYKjHGJXK8E6uX97di1rL3z4m1udkKwnvQa3JLd2yR8JskovFS8AXhaGX3NYMXs",
  "key33": "3RZxEChZeYPT8e4k8gkUNM1BLuSujekpD1DjgBN9E9Cyt6mPUK1bkWjxWGZWd1nyrmNEjYhPxeRak7WvG9p5a3sB",
  "key34": "2wMyh6r65hFVSrUNuRSbEU5BntEWWSSqVwUm4ckhTXzx8iCfiQ2rnYTnuRSuuPAWJLHKpgsD5g5FtcCFShxgwC8S",
  "key35": "4LrfPr4zmutbXwpzD1KLQvP7NPxdRjvuVJ5VH6wAkL1TwY4yzy5ALTXK7K9XoCaLiKp1RjWa8DFy7UUkbJz8RBQb",
  "key36": "4k918g9ptboTBmKEc8ikMmTcEb8N5ayzmxHbqnnGeYWrvV9jbLfnyCLoQmtTFjA1cMG2N5ueK5oVxYmcuLEfDsiZ",
  "key37": "5kdyVAKseqCfxgTgFkQQka7RicZr4HP5z5cDLdMk1jZ3kXySjtSCmnnNg1KwfM8nbrSSZ5eTVQW25gRHvp5F9gpD",
  "key38": "3Y4jMEBPjafnz59Xk7k9bfGmctAHM1ewZ9b8fJamjxugjkaGMkS4wjSvMqQ1adEcENQgL38kgZ74jmAePJbcBBWf",
  "key39": "5FTrf7Q2d942DTKKfrXWmtFKRSXJEzbp6C9vQCyjfZH6j9LacoB7CpEGksiztg5BcFZK5Jyd5TLVKJTyLc4nTJt1",
  "key40": "5j71jvARByJRHELzzjPX5So8strrDpn311bwT6b1Wx8oapmpcSdWGdyS2M8cu6S9Z1RvsvcX4mAXBWHg5w3spkfY"
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
