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
    "5Hoy3oz1BJva7kfJCZmimxBL9eUq1fW3Nmc15ZE19whPfQn84yFzorYrgzPRvhhPbroGdBtLCrPJfCSeRRM6pb2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyg3rcJ6ZNoesL2kr79qVPU8rCUdCwQS66pJqKjrTGbWzCZWErypK72YUUthP7y12Q21rRczvV9Bacx6yLrcrbU",
  "key1": "5SvwYxeBpXxw6eEea8kYwRSaGux6iUxsFJ1ho8oFm5PKk23cVbSmetj9xsyJ3sQXyvaW7W16v9wo7jJHe1Mc8G8N",
  "key2": "57sDK3PDx8QnhHn1APATkTT3rQrsZU1kWmq65zwLkpSyfbHu5Sfd48mmGrVCumHEuFbLQjympQkwiZ7dFpYRHwcK",
  "key3": "5NgAMz351sM6g8NYGRNEFFCKaGE1DhiUwN2dcq6V715rpwVzb8uYyPhZP97nz8ayLfLnsGYUwBQWCsMSkJDPgYvA",
  "key4": "3xVAGRiUf67h5W1KL7wzTcZSVbeDKSnSn5pTwRvncCf9dtyfQuS175yPb8tF78YDQzboGmm6SEgUm9hXvz2en8Ng",
  "key5": "4BSXRbnrUVi5E9TPyCewsEg3FVc6WTHLdirjLLMJmN6LztYKri2RL368pB9BVyuGEoszqyJdNEzpciSi9cAGRUVi",
  "key6": "4wJg7kD7HoYX5JKPXhdXJfowk7oAm5bhocKmzWbSZCiQrD4FwNi1Le3G3o3rYttqP716Zx76SxX1HSmeVUPGW3LT",
  "key7": "2bWLkPvfDQYzLkFGMFocY3wVZhJe9LbxrsCHV4heYSegfKTjkNdqYxuj6Dt6twh9SzUB3ZoEzfKqWEdnYkGMJxKQ",
  "key8": "3QN8u3CWejfFbg9eS5TVAdH4xeTEYuLZdq3suWGBBrF3JqtzyL6yzB91goHvSZEQPreDJVkXq16ViDC9myWarNgV",
  "key9": "5qgiUXQyZK2iD4iaGgpqWRdXEaJbSTgbsBsQifqaPDmZG7oDmA2VMjomWBb8trcdVMU3hFuiUdLZ9USz7BvagNHd",
  "key10": "46E9b1uEQYnJxpVRknm35hMCc3ZNXqE57qAgQSnFYapBURKUL15UkNjBwXRm4odVqsiAFgffYzwM1UGrmDiqhpzh",
  "key11": "2UYWU71Ux34ZMK4CpMzfW5AcAADJy2qEwwe8kLEHbVAp54G29jxxXxV7FKaqx8iAVtrDJFqjNcmn3Gvm6QNLzXGF",
  "key12": "3to4koDUJx2p8dY1w4xfJNsPUsmi47AQd9n4cZQmTZ19Jxr6P489z8AJCfS38KWAeGeb4rqyPuLgNJLSJFRPoESS",
  "key13": "5HQQFnKwgxc74LN4evFC2XuTQ5FJSVsrKGphYxqH8dZxkvP4Xkdsnf8mxNzwKzem9Lss8ZNqrWYpg1ZoBNQcj6k4",
  "key14": "5dwnixRNf7zQX8X5e6zSFPrFMLA2PKauWKuTEsp7pHFQxbmeKPzxTZAKtfTYADzqFJhUnwenPGhY4MgHeVLxE9FA",
  "key15": "hLGEdMWU1y7j5PScdGcfAcfdnFxvywrNyPW9pL6gKWo5cKKeUxaQRDkt83SckkJFyQpKvfQdcsKaU1Svcg19qDV",
  "key16": "3KKHTBYQczuCayo7vpibma3n4toxi7muQj2dz4qzAsvtm9ZtsvirPnRjnELDRKeZYiqFtnacfDSpQznYRV9usdYg",
  "key17": "3dzu3o1RBpJE8u7mDo6arZbnsPAAkDywSGZsCPT8vgPy1taXcMXny38dWP5K8tWSLaJiRj2SL4aioDVBiBMCamZ7",
  "key18": "tWrMFdSEBeu1Hh1KE7odZqchCPLsH1LDxBFcEMAX5szCSK2R2Tab6246rhH4evLeZnKocRqxbR9cBW56ARagiWr",
  "key19": "38FQL3YAGHy9bknEb3VQjkic7csWjd2Etptwjj64gn7THRqiGZdyJkwXKe1CZDUp3hJCEsNX1teWC1CE41kR32SG",
  "key20": "4LbxbcdBxxus9dr8LuwGN5fa3aBqoPZ1fhkBjq2BV4x5zoZhXu7bLQXNK7iZby9aUGUmCHrFctNnBUHREHohwXxg",
  "key21": "4JnCeqxSb2x6yh3J476ogQmKjvVGYJEuq8HjnBf5m1GhgjqiW938AQ941Hhw3rpWvQFyTZaQwfLd2rPeiogWCHgM",
  "key22": "417WbsZ52tNGtfV3iz46bbwJLqGZ5Y94dxDZBMiJRk3NcJNzPntc6YUKBEoYWWjGFD9BGoNAAxAjVSqxayLhFtNK",
  "key23": "3dBLQovPMHdfcwn3aiNPxdc3wqT5f9GoX27TvKvKnSv4ndayhLuqt1kunHP5kS2zPaQcimsFvE9X3SsYCviWZ6aj",
  "key24": "4apxCXNiQTbhEv8DxshzidTpwHktFD1VZtDSm5oDt3Nih89284FasjhGnA2AwksDhESBK7KNJSQYkuBRH1avSH5U",
  "key25": "2uZSuFmEHVGmhVrrCabcRTd33nmbea7M1jogCS3ZW3eo7JCsBdjBCZGTMhnN2oBC1aiMHukSbNTSnYxWxVL9VV3u",
  "key26": "3g88Hn31f2rrMCn9tMcFF1DKvN1aKiVvCXLaGkHVV5onEgX6dig9aQfLcYt9s4z4X82hHueKDXc8dX1UeJkjCPNb",
  "key27": "4KuQaSY47UExigJ4utY7EYGQG7EMNr4VBz6A8cAHHAn6aFpk62v8oPFT2W9cYBYS34oLFo4MpWRxeigB33R3Beqx",
  "key28": "27cBJb82Sab3VRKWdPS5RrQbHK79mrAZvcg9aAvq6L3Gwyfa4kWwP2P62514xXPtffougARefAfm9uRaTuf48j3q",
  "key29": "67HvC4AcTcwzNREWMTEKVazb4psjnxeQiTBty85v5uc7rZXUMnEwHtYpGy9fy1ZsLte958aEmKgmqx5Z8cyAupFK",
  "key30": "5wfNzKYD5f9TNkvsSEVvFD3dwTGycVMjk7XY4mDGsWvKeouh4QRHJVK932zSNM5fFWNxZniUUGtTE1pnSjBWczBW",
  "key31": "5LwJ1zDJcKRgsKs2R4pVsPoTDPb4JWapGJS5yuuGsoA8y8dRqRCaVNqoNe9RTcWHV13A2y8zTkrJeD9KiXPxe3A9",
  "key32": "5fTJ9ZfcQzsXtiChuWCmSQQjW5PF7Yu6mTqB8BanCgemi9f1veLecpZfyuw5NxLndjBaWYUr54HnSNo94udjTycT",
  "key33": "5emd14vhFJNGhJZWixGGMA14Shqs4YjcHamUhqogDbpqeLXLyC6MCbqxWWBEFfRni7AZMkV67mPrqVEHe7mDMT2H",
  "key34": "4dKAS83VWBCa429qRrRaP6hFauFyUontfHMcDW3KQsJZxBdX9uxMf1pGjN6GvNcwfpB1abV936QVxrujXQpgFZiH",
  "key35": "MwX7FjxCZi3YasSiSxgEvLhZ6Nytw3ufc5Md6APtLmvXMFi2Q7vy8owaTdubuNmbq8wRoy3WNiHnaxKJoa398gL",
  "key36": "4HCqND3KEvXmaSDha2NmMHUBPn8HP7ifLAJKWDPtmumW3cRqeQUfkSog49vmgzL8r12uNFVDyHgqGSxtZuNYQrQi",
  "key37": "2JwMNfwbP7rsL7jb15FsC8s6VUU4xeF6QFAELkToj4TZ2h69FtU1xSJSeQu4siBLke2SESnPUjQMTyATD7A4gUbr"
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
