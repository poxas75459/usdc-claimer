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
    "xT4uDFiJoTFiKn1HHrnGrJUbRkxeC4ynYZ7ZCTy517xujr8VBEZh61hXSNLbUJpnXCJqr8b6gzo8tH3ZCURtQG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VghL72rQJoe2EjG2DGxN1uvP517sk3zKD8V4f5aWuVhq1HKjaZSLa7oR66ZSfbqAzRUSAL8zuoi4rTCQewrUVVx",
  "key1": "5Rt1k3g7wrKFBqdAWEKHtAGtgYgwGUZCX5cSHFAzoX3uAgjWpaxQneL6EktmwC55rhNgWPS3emZZPRd98A4TT6r8",
  "key2": "4ECnfpQ8zkQkQMe4FaEH3in4H6Bsj8NvztMM2U2nmyh4dcWrzDa3RvKswm97wBy1TRT2Gqi14vJoT3wcCXvawLvj",
  "key3": "5wUCvAERPGuijwQy1AXWYtmYqodRCEkmFC4Bh9LMe5iCvtPVep8AKPyQxqUgrM4NNgHt9ZEx6CL4TMPCAS2jqvw",
  "key4": "2o8cABGo4GMMhyj3ffoopgYaWatao3CwCJrPCpGZ9g2nm7j5jXHeBUoAkbUf981tQtWEwcR8KoPQdD5xerznX5Ry",
  "key5": "3hcnT2auz32HSuxejtsv7MWuM8euS5SqLDyH3dqyiNezoU4Dqi4tTUD6hsuJtsPwMMpeTjVh9AsYqMjLKHWpPUcP",
  "key6": "4G6WpUeBQbo1umhpHkhaoxC4zg2MemxmfCFjyCzPf9wjSu6A6uZn8zMvWYVr955w6PwLCANtdgRMKHY9j5Lby2SN",
  "key7": "4g5xbWWRffgZXuFL5bqRbNeh8zuvtbrz9HV2yvVSNF9wcxGYL5prUCcEs5DqVVJez3WrcXfCmCz9VM5d6uWUDH9Z",
  "key8": "52vAD6jt94ZmauxNN7aqSjGyC38r6R9BxeKCpbT9t7vtBxobHSSewL1Ud4ZajtDjwERqdrG3BEfQamsuMVcF98GY",
  "key9": "2aUmDsAgTSLQ6kksg7bYGaUEt4eg4jBqNDe2Mu7AbKC4Pzp5WXpHtzzshBsqsV96RwZJ3LAKBXZBGPCuj1cVP3Pa",
  "key10": "vQ5T7yf7tkshUQUYESczCJCJoMB7KphEsLqRoBU4x1xnyS9vh5h5Vf3B2ESJu7gYsw6dddB4bMmzecXXykL9zDG",
  "key11": "4bcz7fQfpmgne6aNZNgsKUyb4wShsGmFmwfTvdK4i8Xn4PbD8hyD4sMmgiXsHUrn94P7g9vT3C6f73xw1GuyD7F3",
  "key12": "5x2eEQ92Y9YjJFuACHbWngo2iZiA3pidUnjM8ubyTiwA2RCxjKv7ytjHQENjiZCXVXo18CuZ7J9pUHj4dj2E6n61",
  "key13": "5XgkzCyQKk172KFdFtFWBs8oqGW3o8jx3N4UHCHzqGtkH793wBZXg9LuVD1ukByEk5BNhd6bbwshxb81XBq3kV23",
  "key14": "wzAEgdWFFCsPyxohA4na4kh9bVtRPeScNp7cihQdG1qGRBCPfMtxTpZQzCDasQCzt6qbY4xKRYMxHDymWS1XMdz",
  "key15": "2rowWdBXyTKeHunrb2pxcv19f359gGbUyYTqiCieVnzk2vGDsQv8784c424F2bMpFR1e5Lah6S42jPaSe77QZnUF",
  "key16": "3wzE1mP2GUr2QKfWp3K6YHuN2fUN41iHE3oZdTcqKrVReqFEcxcmKiCkAHzFSvL6udNUXvEXcRFfsPLKoaykHhTu",
  "key17": "3yNsC2UW8KPYwGxU8PKq1HeSsoBUSTqykUZxxGFUfArN8Yt8rGWeP2hzYiWNBSy9amjjpbmUYPCBPVZpXcufmT4i",
  "key18": "3oDf3UjaqeCGEyVktDWsaVfU2riHXGGC82KAFy4FxgcbaSaCs9mipLLWBBwCJy5sjhwUmHNYK5h8MthPHu2CzQfP",
  "key19": "Yz5rM22J6f4xEE6MuWaMRcyqgyJfacFR2Z57MSrDCp4uZ3GqECKiMFFXZdXYYqqg8huUjHwmRAdvYDwuq5SYpTF",
  "key20": "5eEzuyeVQ4yJY5cs3owok8DhSrvX3fqrBoPcnHvJvxLTAR78hyVSvUHKh5bqTXob2YtKhd966poDzNwjVkBGbQj3",
  "key21": "5C9eDNnjyeGmZnCSBzM45wrzxoWjZTFbq165cax9dE4aNqdDtuP8ecZ7rwuPGWHkWRrGN3LXXSEhsjbdPSB1tS2U",
  "key22": "56DVtcTneGPDHocKvU2aufrATVDpULL9zPYwY3yBgKjwVx5H8LVX7i8YwCyah2EPENo1BzZ3NMKgygdPPMds1DqH",
  "key23": "4YuQiGFc9vD9iwMxmjDEnJLasfJXiRqPuhagngT5tCR5HZ8LtPw4seQSuoNpwi4wauCqdqr3biBG9QJTtqX7BDk4",
  "key24": "4Ea3H4EqmK71mZDjrmDbfvVCRK6qePDzeuSuitKrPGaTCkgd9fFDMarbRvARar7ZpzfXKxQKDJZcBuYSe9f5pt1M",
  "key25": "2dZStWLt6QarmfSy4Wmq5LSH35NyRZBD1QHQL4S5A13LoRzuCRBJ8z6WZakV2mPZVCvDyB5thSyxCyiQEyTT7TmG",
  "key26": "2Sg4vtQHySotNdcdekE8p3vQgQzJTY389xkcJUxqUp78KhqNa6rKgSCq6MYQZdPaNiYwFPw8pvwNXWRnaXvu77jt"
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
