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
    "3S6Q7AyCxCPVE5oCewReGEkhymH9docsLWQvWd8QRKTZsCPrqycWtngWLPuUyHFD2Qg3bdPBP28omLVQcxnhd9tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TcqrJgjh5kunoUEkpdxehpCKDMXJxCk9mMBrSUFrGWAgH4zSEtcTZRnEXzEwXwhg7NysG8kffMMNK8U3BQgn111",
  "key1": "2knCKVyPPnZxAwYCA98fjMPCQDHXzKnUgcBYYvDh7fGE8ghtWSqZngS672aBJsKDwqCgfvWJ5LyfqNHyBYVB9Ghj",
  "key2": "5XcmxVWsb8SkbdrsibmksqusPqMY5iGzSf9BAEL7mModGnPhz9FmxG2yFguZAHomYdRj9ipHhNngeWKDm1uKCTkd",
  "key3": "5xPtuH1xku8reYXSnDkMuTE66EYNzPc8fSyf9WBESvQAwsy1jvPRdQF4WKgZ9mLJ9wykaKFKqsznsNkc7xDhdgoZ",
  "key4": "5Taagc3Jn2fMctRUprNaGLdpVvyvvPHv7WUADTZiHwV5aduXRU4fzHMG78TygCLo9BuvCedrdecYN1QYxsRzoVY6",
  "key5": "57E8AnopKghKuKYVLpgbUZH3GpbnnMYz9PQ5UGDoQsujKh5B8YYowxjry1aMh8qumYUGEzA84SjCtcZRRSJR6BTx",
  "key6": "5eg7yLPJfqg9BSYEB5N7XEsQfb5wU7ADqWEsGrEFGfcxvTfrMSSu6mHmdH5rHF9ApKXqkG1jvJxzinwcCExPQx2n",
  "key7": "2nD3T4nMYXrca7otk4N6RskYxS9nmb1LgmvtJVGKMkzveAPXZd57J2BXcutVSH4CB5iHUpn2eJJDTPx8FHSNnR3K",
  "key8": "2yzNQaizRxyrqnnVo9LRX7t4zMPhLTAP3yBWCfLJqXPfAJa6fm9ojafqBbYujz79d6mPtzo8hxAEokwoiiAMh1N9",
  "key9": "3NDMKzV6oNWKiVUWNaZ1yVxCXnxA2Ut1d52zF5g7XFECSi4qsuLMK2VRVVU8HshzNiXxdtWxtX9PEJTbNcZ42eni",
  "key10": "3URVAZSSCuNTYkypjNFbtMymSGJGMhGdYp11GhkRnqgyzS3r3Whaaj9sPVodTMY55Hy8czkqLqPHxLq3J4pqYJRw",
  "key11": "3BnbdSaUQDGayNq52JQefYM5kHXa7EbtM9yv8wedCE2sMnTjHqtk9ecTZHwU3JG3A5bwee6RHF8ibRuC5sFWS9M4",
  "key12": "4Rdd42GytyV4YVikB8UQs1dVcQ3LtgAmcNumuYb11vpNvd36rB1LP5vXVw83Zafi8qLSizJcWgrtQkdCPyCNuYMW",
  "key13": "BLBsHzpVbhnj1GCk9SBRjW8g2thXzchEBuLWVcJsmB6T5kgwxT87DXGgCj94Leuks8U7txfSkmuhGifjWeTbEuZ",
  "key14": "fb43vMoGjVeU3L5mFHByxT22xuSdp61srffu5KFd2NH5k4Rv36eSSkW5hk1QnSLyUEUYibxsc2BWdyNgBPNjiY3",
  "key15": "jxgUAe4W4w3rJ8s7d9igHmBLwwpeePWu4ZDfbUrB2mgarqFYdKg8pTHdKSiykRo2VwWo5N8uTeQm57GfnvZVr7X",
  "key16": "5JQbV7VcEa4UAPNQgrp2A11gh4q8uLCmU9oJBYFYrw8KGxvGRrqbLN3Xk9vyVkGNm8rz7qnNcnBubBDx8P5YCv5T",
  "key17": "tkpMQfhsDV9KZpj3TXqxwGUGuALhUgwioru6waWz6ELttrAhRQULqchvkP6QXqARv8Wmf289zzeGYk5DbFrzHvG",
  "key18": "4QBwk1L9KNz1nqXY7fBteygRy6DxkA9WcvBEfAjNesYs7UNR33usJnz4xnDaBdtxt3vu3BGzN2agja5x6wBnKN4d",
  "key19": "3f2inT6q27p4s2DfffcNPQCSyxo1Suq6msFVwuiu7FkhZ1PZ6ofcsJ5aMv56DPwiYBQmW6QVNu5xkphAM6CTShE6",
  "key20": "2E9a1nN7y9Bs6LdTc64WJM5kAZbSgzkocwXWxo8Fy67eEqEtAjwA5BvoNcPSHSLoqcQ1yN6rTjbrsNGbYXpHTTTP",
  "key21": "era6rEW6gFXmK2PUWa4WQv6q8M2GMzE4vJJKkz7kfAysLMoVb28fjpmD5R788SSvNDrZ241q6Qeqprr1YnJAt8j",
  "key22": "WZDHU3SWi2tfSt4WdYURGuo6RFBJs8MoBZufqe5Mm8FYhZLbjs2Mg4vvdyRG2rQg9VEn9u5uNtAwqN53vRYDbxH",
  "key23": "3GEz2j2XuCGAL23px7TC5ozL5ZvrLjFPKqfyGHSmLLifvdjTKK5sHoVKacVwofdJHPGBDgd4u4bk1SdL4kAJ9AFS",
  "key24": "26BfGbt5bkidTrD5Zm9M87hFMHjQKPnu9Er4VsCAYM8ASkBsKZyXq3N6USKUx5EEjwzcJzC4aWqQYXLXHxZp2WnE",
  "key25": "xujRmQenWNqJoUh6u5n5r2F3c9pZVDgLM7Qk5fAke3M6mhXUU4CJEy1t7xZTt3oM64s4f6FxMk6p5YxBVYAmYFk",
  "key26": "4VDTBhRRtN2Ng345dsiutaYjRrQeCUaXhPcyaWnWpbMXtVitxYhVzx1QF65zqauLwVmsFbb4Bab5pEYEv7xjLMvg",
  "key27": "5yagDamWuPM8eCyCDG8kst3kfkpbQEPeqgE4RAwm13kqysXPZgcNDBE784aJCsNj6V7HnXZHDNgchx6qcEVCzfeC",
  "key28": "3trfs3pMo9akWWAA5dfSdufypsjy6HhL9NWe2Z5gCqGzp1A1MNnkNkjuEWm1uPdnbw23WPL4yyueSJDvQs8UgwXk",
  "key29": "8HE7Fm9Art9m8oHZDWTv1tj95u9pmXt1aqyRFcLKpQGtTjTBFeFMpJX4n8B36iKC1eA3KXD2xvfQneEZGHuVSbK",
  "key30": "5p5zKSQH6MFcQj6kNriAwVyLzMsWYH4XKf4aYzBnGcpPGhekjHDrfzRsbBfM5nUZgKWqMxqFeW7ZYBrVJsNb7NRb"
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
