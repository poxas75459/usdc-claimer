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
    "5Y1Xq7afPnpsAfYC3CLJwzN83mv2zZXhRuEC2bFKAryjt7jXTj8i1K9vYMzmGm9C4yErX3ED28Lx3J6SURcouXMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o1uwhJ873it2bUTG9tge4xkym6VaCcDuH8kCrbTiuk6frjmmcoHgYF5L3PDdTfTdPr5KuYkJzegjSfr9KY8iiM3",
  "key1": "2WEsexr767ebaNtpA1yL991wvfZKEEoPLjQjr5SPn4XZ7rjY5W2kytmCXsVFPpBedZ6GC31vPSbB4NSX9vVaEbSk",
  "key2": "5cGkD3dJbQUKQc1Fa6xvMMz1wpmkn7hCE62mwDXPqHhDhnsd4BE4xaCGSFuzX3mY6VTH5YvTCwQ4ch3DmcyDaFpK",
  "key3": "wHH5n58atpdeMNUwDfy31XQ9AnnPc9eogfM5uiVe5bM3b5BT5PFCXewjo56vBq6MkEXF2K6BXv5LegyTc1xWgQz",
  "key4": "46aLiXC9yBn98RUE9brwzed5mHAoKsz5E6v93Y7pg7FzE3W5zJ2Wi4wkLDbEkospn78j7MAd2TYGDBZS3Jot1m8s",
  "key5": "gV1sN8MVgYMPs8rZGdQEjFG9uNsKfRByDw7x1zj3rvYFW22WLrtpFZ5yRwXzYQpLLFgBwWJhvXDGVGQeWzQVfuM",
  "key6": "m9uehXsQpyM93oZKNDyu1U2HND8z6a2JoLNEFtVTY5ZKwPbPUYetKKD47N47DU9uxoqZ3knnQLkFfqbQtYKVKyq",
  "key7": "2iEAi2LDhAFFyPsyH2JuWqEUMoB2wDMNiapQ8CDDjxF7DjCnna2thead4XnnYrkB5mQoAs8W4KSKnmBpqBe4Z1AM",
  "key8": "2xZnbEnjVf3QNx4n5yo555uMExXvRTKtSt1inLKY2AQTYV4uq9y77GDzsWwvzJNHybeBLFCqb42iEXG3RQDW5W7c",
  "key9": "5wi9sb8RpgEGRmCbTqusmj5vtkKJ1qHotDJ119odazdTncRGMXdxTm3t6fbaw5fPnxiwLbBhGGbZVcjmozC6421M",
  "key10": "3CeisyGVrsozJXd2jB3fGwxLU6gb53htgJ4Nx1i56MVA6rA7qGMyCe1aMKzZL399PVNShnyJX5Kt84SJTaF94oiA",
  "key11": "ho535feYb9JzLJ2f8ME8BqEvHpyptTY1wz34j1o8swAJfKMEZyiafGgD9Q2L4Ft7bLMKgs4v3SSKPJLS1XgVpLt",
  "key12": "2M12Z2FWzkw2bedWe5h84txh4dpeW5sYbwnzosm5S6wDerDX38e1ZxvDXbuzPgH1DCiYDdwTmQTp22CvVuMHjkDh",
  "key13": "5hPwKkF7xzJhAHmMvLB72vzi1eGTCeAyKMDwPTuept6iWfLQnoYzRN5HRjwpLxroqEHgc6bgMdqKXxN8WypMBiq9",
  "key14": "UYdKbywDMzuuUzajstLnxjzB3F4jnerGPHmYnHrDhqKXjDKR5ADBcsmhR4o3XEoLke8Ssu9FA4jsbryzV6LsQb9",
  "key15": "4TsHyijA1E1aVxwJbz6wJ4pBJqHv1fdhsCizunWGvyDSRWhiRG9EWGqmRMaMVdBTVh2zoPG2dsCsa65X7cDCK4Z2",
  "key16": "25YTrvccSjGgPc4y2CMQ8iJeehurqTGm4WTGYHY1pkKKxkeZJTs1TZj5DrArK8GSsWMsCVe8XxnEHdLahCUDR7nL",
  "key17": "3brVWcA5qapEJ7bELvJZjBSPuAwjM3ovRhDPfbFx2mETk65mLVVdax5Q76SigSohSxFNm14AAbm4dV1BdJvQjQKA",
  "key18": "2P22AJmbzH4sNwZnKb6eWtcUrYtHqEL9BoQQSnXuYPAqVNB8w6xmNV3mteehBDSQS6RZ4FReXTSG8d7hyULEGBeU",
  "key19": "4G8hG4e5tHseZdz1sGF9RjvPReibh8w1VK1ZPU1QN9UhjZnC5wKLNF3V31AYMGUJJ5ztesiiFCu3frBpxXacDWCU",
  "key20": "QbTZng5NnJRrhK2PPyMrNGz5T4USS1VLhf3ph9EtkyuctQVnV76jaD9NG9dF6vPGpmJ91Hw71G78F1hLCur4UY9",
  "key21": "47cyj1U9Mc27hNhipE4YpYZpMjhhTTLA4o8xAUAys63K7eSxeMqB1tsUugmRfSMPWbnK8nvgX5DnpEVKMSx3B5bb",
  "key22": "2FcLrMNtemtRWsMMhJreSfvizCffVRVB1rg4ZHcfrWJYZWNixq1FW3zqD7xjKhWwAc9qj6r7Jzq3ZyvKNJskv1uk",
  "key23": "29dJtSjCMJGiqbt5Fv37czY25no3J7yYCV5frn4d4EvhrCi6eWoLPLurrqc8qTCVhHThTuVrbr6ptHpuqncXUhqp",
  "key24": "4cXTQJ57FchFrK1fqAxkeLsnnTy9tK4uudCsc8Mb8snk2cCSjAgQMusoJCsJeoNosdqAsE1sEVhW4hRJBkQvCXN5",
  "key25": "3zdy7ztmYqE15WC2tLVBd8ixHzx2RxKT8SoUS78DrVD6Ar5W4KnruZjucRg8fhRkLGQS7ZQLXKAuaVUqDVfEycbf",
  "key26": "UZ4M8Jbgm1nUJ6W9izqsztTaQyEHkLVueHS1WStGHHXPRRQMbDd6fYoJxQFJthuDPrTvwa8JU3mzB3na7veNfTc",
  "key27": "41LejCnbjH4x2jnezbLRvFoQpbS5215bd2QZQB4gFE1dAL3BkN21YuHdgJ9S5UAFXmpPsQgdwCodxCRqnPJeHcva",
  "key28": "3U4cyG2rrxGcEJocQxAedWXLnGGmhnjq1jRviUxU3rfvTmt7DMXWZF4RssYC1EGktLbcbxd3nQGgG2KkwxZZagsL"
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
