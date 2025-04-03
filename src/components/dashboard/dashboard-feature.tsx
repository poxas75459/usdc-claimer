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
    "3sdyxeSBGgNnPdS9TkDuJtpSD6b22iAK1quNCbf7sbgMox8AUGqNAJTmSNSfYj2w6NZyHcgszUKCmRpZ6amVLJ7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pwwq4iXYSZijSpK4eaCmNWqXWN6tSEjco3cNQzMvBkXQDPeDyChLriAEE6hc5oPCvcX8gztR4wEAfwCegJo7Uxw",
  "key1": "kSRsDFGhNaKULDJwq9RUJDEFZb1ULQA3gHE1g4gTngNgGVJ5WajSQZZ9PxCNp6e48h2d8fwkVWZ8zC6CW3kc7Cy",
  "key2": "5VrnMofZSk4xC2mx1zg62BrF4DEoaRWbGgaesMkP7UpbKo6QTm3m7m8DiwaWpaM74mpVPGiAXVWDb92RiPu7zVRn",
  "key3": "4nh8boaZqTTzhdPRWcJqWk7jq2NXTPQMtZBBD1HN6Na8Fysa8ifZScYLM5CEhkUhcG6mCsFRREBpqdXjjUw3oB6P",
  "key4": "3oKQY2TRonUPfBjgUyQhFbngFYATXQb8zXYVssdEbzhbYbp7TEPDgALSNAis6wK3JELw23qUP3KqgEvpyWTVxYTy",
  "key5": "5WLmA6oHc22VyKzeNBjCpi6mkEQbgd5R66zdTwE1aHJxJB8kXUBaGud45GHTkn6H1rgMs532USTvuKaG79rQT6w5",
  "key6": "3RAMETNz7sw8VWkbCsSwXpp2yuKWQ8DDPHTWuMzKp9u8N5FvgFXKTDZoKqPhskpK7tLt5nc4Wt7YJ9uBwzSTvwCA",
  "key7": "5Dgitv84ebnuiEvS6he3qi1wfgdR8Jyho75ng71cHsbjXcZcpxMmW8v8v2pbVbuUE5Ujr5vNqdjmLuPFjxGX1fbr",
  "key8": "3CYbmaz272Li32FCJxuPJL7yk5yeXE3G63DaUqVAZYA19K1beNrvMux68LbYpcuzt84tX8m8ce3CJ6vEnFDB7ttH",
  "key9": "y4ukKooB92xo2dhnYs5nuSC6YdqoVCDdKu8rhjSvt3b2z82WM6X3Meg9sTdD8uvZxYoq6Kos6xFEAh9yyRA5Bb7",
  "key10": "4g6btejUkbFNvjJX3nBEGkXAFor8nRoa5U8EZyf3AmQmXgQBKjfubThQNNxoBQwxFPvDvnUqtZHq38iFnyRMw9Qc",
  "key11": "41VZ1wtWBWfrBm8EAaDk1Jm9jrU7PHNqzim24pkQ759CqHWtQ3NZRo1oMNvvc1vyFyXmBwj3c84pDpw8RRXDFoX2",
  "key12": "5q7bpkePQkVMPpKpADVZz5KVfXiTud31ZrCE2oqhxMFFQNWNJ66JoFthBgeTbCeZKB7kGm8yUSFXSbvdCP1Cq5wi",
  "key13": "2RVbpSxKU4W3NDtUQvT4qzX8NhcQaSid7DcHpETZjLgap8Z3RnLCSVH4XLnKbRoftyJnsfNQ3HoKUSjRZtvDYQY3",
  "key14": "2W3LRRJWm3eJWDj1cSvPHKvkcZKcU91hWy94N7326Fy8CHgXPGqnvcGqJjYYM5du7Sa7T76FVsaHRwAZeb1Cp1aF",
  "key15": "3kEdkBN73PCTvTKyCPbHnJ69WnuXdtrPN4HrVSGPCNLBGMQrWtmvRtze3TPdvbrrG5YCtX1wduybQ73wpXLjoCJS",
  "key16": "KX2xbv1SjhXqLr1tGCwL3SQLbKHegidkKYwtAeEEKoH2ysioHMTHWuFLR1hp5ymUkePoLf2WfPhzZetJ6szczKn",
  "key17": "dDn5aHv2t1nEJHNz9vKm8wGeGJU9AYPgBFEK9z7a2NCiwwodowbeUZAmoVVw5NUxp4xc3Qza55o2ahMNMsBahMu",
  "key18": "3QnGkLgEgwvpfqfK68FSf5sX7i6SxHMVZAcNuoLBqm7kKth7VroF6VsAp6rE1qScFWe8WbywaSZh1YCmxPYW9gca",
  "key19": "5DqZw87yLYPpi2Z5CirSAARZrFAWJgePH3ytnC1oWD7zpKDfJC6d4zHHuGVy34C79dLUhGZHmwuwfSB5DNVySse3",
  "key20": "FLk5f6C9hnpVBtzTM7bdGoTxPYxYpd5ryoTiUjJ7tA17xULhMo5qtBjpmhzarNLnoF3kRrW1KGvz6D1zd78GsTs",
  "key21": "3PV2XM8UATDLVJ5upzCi2fD6EwSpEJPtcptYsd6hiVtVjoQo5L6RztzEu4NxxDvnhr7oA6qx2x9hWpdTkp1nd4ha",
  "key22": "48xbzipAh7jZaWeyd9jihc6ASNMB1gupTrTDtuHCMXM6jwJctXpaqJQZfkAhaEwXapxh8oMDgSqBPhYeyXBzw2HW",
  "key23": "393z2AjjWD4fhpFuDqxyEz5LeEPEjmAeZkJFTKeLyxpuRanapQruGNSGWQDvwLAnWhuva6yAEb4etxApCM4dMmUS",
  "key24": "3ytNh9xb4GmPbmu6pYnpJVFXHG7K39HP4WEk4VTBwNNsCKKdJSS39LpY2qis1kSWwQkPQQ5Q76YZ3LznCUa14Q7t",
  "key25": "4E6yZXTVsy21c549Y83Wu2CMWMyVB8dWJEkz71dp4W1Nw5JbrcxsqcXZRvue5FZ2w3tZqVuVh3zmNRBubJfFrGEa",
  "key26": "WBWAyLKnvE3DzHe3RBdjN4Vs4ZgZ93tpNR6CDBBuHwP3q1YrLsChBGMexHL8814ULLKSjVPTG1BTYxLNeyV8wQF",
  "key27": "3zXVnkoWDv77eFWW91LYXt4qPmwdvEneidpfYpuVpYYdm4CTmXtjkMwEqZkMEBHzAX1HqEstjaKCa9QLd9i7ibvE",
  "key28": "PtpW8thShuHorxj4dzvr9ahn9ryq6aCfpyvwre4ShtFeX7pHz7TYKA3PnEXXxjLCoHubdDhhNRQnSAekNBwh4cR",
  "key29": "AjWrQHRKPWhXD87vtbgVcNU2Sm9wcRqBeG9etw4oEUozW3b3CLoZ4tk1ZDs1614NPEeDd6vsJwCBPBUqEZRKkQR",
  "key30": "4gxtm6ymqxzFiNWztWjEBPC3dt91xefVKUwLrCKYFG4TRtF5pcMPKba3SjCTKjvRcPxej6n5KwgNKpG2AuBvtvZn",
  "key31": "3SfveDaNTELYYJLFZ7kGGHPLeR1YqMBUyemho42sgU4XVgZ69KXuKbGQp3LR6kmicf2XR8TG1ZZGLe473uNPrT7n",
  "key32": "3us2NArPudh4XhfR84QEPPaefTpoYqt6BP8NxcJ3uwAJPUExVh1ktkhRtagM1vD6SQve8r5DMPq9QZq8DLnRKQD4",
  "key33": "3ayAGVng6nQWFtJV6LG2KN4xxSNK5petPyQivBFRNSLE4fMvywRdMCxAH47cCKYEzx4yg8jFYskbYA7dSh65PVQD",
  "key34": "32YTDNenVwu2mnd5aXa7DZuFS4JumzpNp3fBKpRnpVYENUH7XDffW7YaTZ9jYUMExZSzKLLiHmebcHp79w3GxCmC",
  "key35": "2EJ5N7hRSzb7pqr1dMoUtj2N6LjRFcNogcEP15uv56r7aFweNabuZNsac6AijTXneAmQfUnGEPx6qEudYXzi3F6h",
  "key36": "594ca5WmEo75j1oF2HU71RTHFFxtoRpjGqhuknCGh5zsYjNUFdjdEKqw5cXhV8aMTJfBLH9KzndzrcV2LGzoWG7g",
  "key37": "5kuYMEjtDc3EhHgx5FSt7HV9uyVCJpktJLMmgDgiqg44Dokro4VREMuuvUK1eXKZeJajPZvZuCbLBqe6mmvRUCGB"
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
