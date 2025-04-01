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
    "5rHpvrtEFGNoASXtV2VVYV586fANmEQR6quCCtYTrqgAW7gUhsmHryCWuvwNhuvQ6D39WSBtb9z766QvG9zMFTz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4UYHPsAA1sGtrLgpo56vxipLxhi6znqPAYend9SWFRcCEgz65YeJ8fTqcafRPyJWDgmz8PHut4tW7e8BQkRm4a",
  "key1": "HoYkqRHorAfPcqYxDngWFU5God1FiyTF3q6N7oR6JLe9oYZCLnhbELaLtwRBetyXRYs6cGhR5UXt13gcA44mKqT",
  "key2": "42ebrBJXQs1HLwGd28EWbziD4AHTNx1L8bLkzS7YydJCvdnt19fDfsH3siS1BrYzydEVaRUNoCiCBWrcXpGUW5bk",
  "key3": "3qxZ9BGV1LtRdfmhzcYkVtztZtLyvNqaiJ1cC7Hkr3s2qnXPBBvLwvjYrhsbpjiyY3iLjNk8ezmrxwQdnV5z7WS4",
  "key4": "5piJCTE3d86bxrUUEMKz9P7zCn1Q7aR9chcbHirNCxrvuwj6dGUcCxo4Ncgyec2VnwxJ2j5N4DxcV54ANYRdvhGH",
  "key5": "532Gjp6Y9U5oTDXgRwB83rAqpJtwf73BBFqMVEkCtH9z3YfqCjySJsPJSuCVLRLULrfK8fvEr2wQW5F7HoaafDJY",
  "key6": "3NpDmX9pFjz8Ztazi4JRjAsfCNKUd2HNuY319BkRKqVP4Sk69rUShj7CTdzGnwuNGUYX91xR3bNnzrGKTbThftTY",
  "key7": "rvJRm6HUS1J83LcYgBsyJ5aFMdW2Mp8SZ7au6rE4vTgiTqtHskRNDj8RBkW5VUDpituSZydeK2AeVuNB9fVcBkB",
  "key8": "3HnUCSKgyo1QXzTfmRjBN1PuGkacMccxKovAU6KTby5bjrra4gXcstuEdHVy9HLqYhZk7G5cPdi4W7qkJZcGV2mk",
  "key9": "5X9RoT6Li7xKrnoTUYDanUhKW4QoFS5hJiZ1KxSp8UXayhCvyDpCs332XCmXCmueFQrPMNzUJsFu2ejT5EjzRS4",
  "key10": "LAYaroeS7NnkcBpsDpFe4DSvpBarTTgcpd5A2ZJjFui7pD93gw7VmJ9Y4bQY2pDYYzh5PzRKjPXnKkgjhvTzAaq",
  "key11": "3YhJoERVD3LXZoGKtiWZZZFbHwQDR8LUnAf2zUkPxRZ386eHjAbRpze3c9ViNc1ooFT6KwjYwFywoNXfkfHU6z3F",
  "key12": "4xXjA29oSiHkFvbYxXdK4EgHMweBWp3CSwfXxSbct3koSCCXtiG8XNcSy8iENe5cfwXgyFwqu57Vf5TFJHNa3rsu",
  "key13": "2c5iKbWGUU4AKj59f4AtheU9VT9eZRjUnyTbkPPBg7E1nZQciVkW43oZoAdDE1X4vUec2fpUmyn71rSLfSP3mzst",
  "key14": "3ZaSJHKc2EvZnvHgPAnoaeiZHyZX2fcQadJSQndTYm1Ybh2DHbwST5534WUm73cZgz7MG6VdFd6gpBKnT171mMMe",
  "key15": "4sPSwZNzBey1wCbyHW7tQa7MJTeSRHAxdCUp2DVG4bwfURJUzMZzdGCb9dgE7Nu2wT4CtcnyYdXw6cDDMGn83ob7",
  "key16": "2tKTLVPZ3p3RxifpHgJiggGafUQGhzTccqE1yGfgg8Pjfas93EhyAa94x1eVe17GKCMRff4fDe4VeSu8Smg8f8Wr",
  "key17": "5BFVNuupmCBjX3WZNrvWP7zBS6qwxzitGm2to1FmwxEeMCfxr7XuVD6DJiDc9RyhNfYo1VfqRkwet1rZtPwznaTm",
  "key18": "4FsgA1znnUsf1PFvFbt4fEnvxyvV6vyyfzeqMnJYZK7FmtpDYTH3SCmFjFTdmAZsY6WGmDw2N7cPgFwTBecRqjW2",
  "key19": "5U97EwFmxrrHn4E8cSEPryiPzmsZR7s1tSsznXmFLCFw9afoNN3hSkFDqCnC23aSQdHDj8XpAKVWXn6vyfRDdbQv",
  "key20": "3aSTBs2FSazPb9mgVCtvLXaJsGL2vQLQFfDvCPRnHrTciRNzc93EY8vnDCNWzunxmCWaKAvTV5F2qhfrXa7tZREj",
  "key21": "5e1cwiUvWQVn4EU82qkKhRNWzsBEyRaA4QvKoPCRoEmmoyPDdUeqxoRP58Vrkug2reBhVpfQCqbq6BgmzCCA25D7",
  "key22": "5n796G8agrYhNxU6n24i65oc5LjWqznspMbYWsH1SYkbsBwhQLSU7ARLfFUoQkWWoMQLCvgt5QXCu9zEHSbqAuW1",
  "key23": "3UXtRQRvQ48m2eRfL9v9Mm9bRb4aHXYobpYSNmGK5BwpzCN71rJXd7W9Lzv345rE4zhQvijovvUXLKLqk3TNnumB",
  "key24": "2aCtooeV5tPX2YTChpXN2PavLaKCeprZei89iTrcznmYkRh2Qgwz9YXsSKdYa9nKL5sMsZ6XHw25yhcZASgZrUMP",
  "key25": "2Ygis7QnCwxng71GkdFSyUyNQ7eMzEwo7YmbG7wAhPtibEwuazh2jgiQnSEUbNKPEVpws9fPZxnGLC6zLyeeQ48y",
  "key26": "3V4JjLz4KacQEE16b6WsD3SNoi6E1ZU47GGhCuhkvcohiNJdm1pbnv8H5nHKtdnW5UPCBABayge45tQeHA5r6tz5",
  "key27": "531quqybQjHGo6faxS8AfUTqzPvuyp84uwKeGo4WbYSv7qSJ9Uxh6gkLDDRFbV4yVzKqieJZHMaofiyeGvWaEDYt",
  "key28": "528fCSbNq8E9P6ftnnXmRfMkf1hptXN2XimTkdrEfjhk5udvbrKNwhQiqRhithfUPB7koDzUUkgCRSNgxKcX8ENp",
  "key29": "3jJ1799ng4a9Nb6ZqPPqTPWE8Z2fbUUUfSfHwRfNAinHxVfwMfBHwwjBaWCq92TNPg5jfnYM8HSnwphnusBrHSt",
  "key30": "kF6nN4aB2TvLz8n8JTBESFxSgjRvJ1uuzb8o1SBuE3iUABGrVvuCA4MCMWxikq5yzm5s34Dj8ReQFeV1j3hf8Vf",
  "key31": "5PpVuhBNvf346ES6Vv1n8wQhXqvnjPzg5duPahUZTbnirUsvzbXB139LZvtpMenh1UPEt7rZhBdK5jnMSyRBZpNb",
  "key32": "2mXPYXYy6cmTW4XiPDGF1K4aBSdvct15gw8u62ZRUE17Sx9kSQmCnZTYHP8y6KQeA1J4zr4ysUorWxnsRwQqCJRK",
  "key33": "4b2SzqGGxp6m6rUugrcLmGMTbviCM7TdKxbFUWdc2WjfaUJcQiYj9qvbSkftYUx912Hawz2a4Y7i1WkLfxtNZrxg",
  "key34": "2JExckyhuCsuJ25WFkvsEPZhEkzkTDDaU8fRLuCKRoiC2pkQeCdDX9Scob1ru8mKxNSWqXHFXrWZwc3tSkTYRevS",
  "key35": "4gr1TQaTCyUcSQa9iSYuypCfLiKCHxKHkwEy54zuKF665NtVmFK2fhfzLhqXy7CZmYh8FBDvxrnpDttxcYpwW4Xn",
  "key36": "3ppmnNisBdE7QQNCpJBkUpLnabSB5P1assTg285SX1yvAw5LfG5W5NXvoLEfZdgaD6qNy7aQbDDDEM4CgF1XYVp7",
  "key37": "2UkTVzajx47kk2KMDimNeTD8Gdm5svBBjAbx1gQyKPFUW8vnLTM8TWFU71tsVvHGAToRU7ebLm3x4A6rGYnLibxu"
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
