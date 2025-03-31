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
    "5CfS98JbfG5g9Fm9vGWumtGCwv1WAt2vsgcrc7VWymg6cBEhcEed4rKCSfPV6HFJu38P8wmdaLpjUbFs5CKEnwvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RU57JGeZV9vkUF8yGFa9ChYyncKPvZg6eTzorMDy2xA3PF1Xurhbh5oZrvXRTbpeVfd5W7Q1Qv35iEMmTXViNEf",
  "key1": "2fLgbkWs4xXFuxMCC2rjgtJfDpFczpoDBLTXQQhedKDvuLhTAFzmuqtXToUERmQMhxZx5tMdi7dfmzm2DEGeWFmQ",
  "key2": "2rsy63xx7bkyDF7DoqM5dGD9KVZbYxhFLtTQkEKTT6ifrAEJn2pTLz4G4Cwi9MdJaQeZ5PHCryhe1YPUJiLthxq",
  "key3": "GzFRcsumgWAPFkFzD2VLyHwxWZi2vqcq7w82WaH3m7a75WqK1T1sBCdeMPBX64fucZJxWq1A3gijaLh9xXYUycv",
  "key4": "3SygS1BvCiTSXydHj4NF12QvbD7tqYCc4qnhKXpZv1wgZVbkxuLhULJhK6cJSY5pDzMsERuuik7W2cBRGVrvQJBm",
  "key5": "2ro3M3ihMFf7QLWdqDgNHb9Vb1VHzucQvUMzw2cjr5D14mdP4yRF4g4QpesnR6qLzZDGiNZZid6uXEonXojS6316",
  "key6": "2zoNCmg9epT4sHsJGjrtC8kaZrSy7ePh6haCWqpBdGgszTFoiskHhDLBWSdWxMCzzUKYZFT9UD5akLN29qBbyoWH",
  "key7": "2eXvzrrtfAXR9d18oJ7ow98NpNzbkDkU4j37C3fpNWts3KFhopEfx8FQyVqYfyxT7uGWfWDvXC2kpcCMyifmGRWz",
  "key8": "2o17yrtFHS7Xt92do218Y3nZS85hUW2LPfKfW2DVapw3ax2ZycBDtr7Khp6NNpANn8NgyBqRcgXXyTpe6dF5gyNs",
  "key9": "xqVYZzgjZ2gMhisSbTUgMnAv9FEmMUBhaueNzQ1pWBPhS6XcA5tDfbAA7a2dAZaXYgjtRZUx7SmHbFRR1XFwgoY",
  "key10": "5ziiXM3rpdUoo5NpDngNR6RLmHHPb5qxqPcZsnHWVoaseQ9UdWMy2uNXREZV2W2wKTiZ4y7unYS9wjGBsmfpq2G",
  "key11": "2aSSKheWufWhRgC94cBCWLs3gbWTYQkKRVThU5XKPpsGhKu7UakRmUi5LaN3YffCnYzVKC7dbpdSfN1F5FqXxzLw",
  "key12": "MjpTr8Mx3XAVvjGF7EwCzdWkkTxTg9PUtczWFKodxnLCkvKfhr34omrvwek4d9sYmjRNJNM6Ltbd4i3enab9fnZ",
  "key13": "3K4GqfAYvMTqoXAQnzg8WdJb5LFKer6hiHtEmC7R7tSKKPJacivLRttzHbAzJNHYWgS4pah1Za9U5PCfxqrt4DSe",
  "key14": "237xGkeJv7RTDo3qvnbHhTj5BTNSTopHgXD712njCfruFp84qcoJ52hJ3BuTuPnXWX11YLDuKfix88EFcgsUR8pm",
  "key15": "5dkNFn5AnzEVvyv12biKeLXtyfAz617kVCK9fCYgfrUGCQm71EVcoZg3odAcTgt3JLgdWS36cUs3ZLjLzWQPXqQx",
  "key16": "3DxtR911wkjUrTZ81MMdyG8YGDHNyY4MjmAML2GVnLw6ruBwwuo7QYrP5HMnNFpYx7wjpT8Fu5qx4QKTrQ4AkQFs",
  "key17": "i3t6cHfga7uSsTC5wV3fd4CP6GhzDVKxtnU8uW1pkC3nmaZKZF6RRvEZ9KVpkNmFKXULiv8RrBqh8DeYgBZ7kBS",
  "key18": "3GszWvdgbRCyaoHMw365fnLckQqjtQQEEaAXNRzuEcMcoiDuLya9WdT62xKNDFvStwzJHCwy5cBQnqoXqDQYGWvv",
  "key19": "2RsYbhn8QopUUFuj7riLtrxaSqdLz9xYHU28XwP7CC4Lr73BrPnp8mAYqD7LkonNBoXwowL6NgTUEakeLPatFqne",
  "key20": "4zhTYRnpCsiC9fG5trzmtTfvpE5r5z6Q8irkbuaLXAysP6pAvwzAj31FSYQ1QH2tJk2iFkfwjSeSSWJjkEx61d3",
  "key21": "2nV6we88qHsA7Z4w515w1WgrMBPHGEKBGgDU13ijxgcgfAQmGdYaUpYQ7wk1WeeAUyXbai679Lq8Zrhp4TzkQYT8",
  "key22": "54UCbYREfVQ4aaUb8PwJdm3EC6kHekAAwBrrK6hsqJmzxcfhPCcD4m3yjsqvkeHbzRv3d8Cw1tkkRFR5FiE8Y6Sd",
  "key23": "3NSpnuQYVhFJgAeo9EnDoCcNBjDUTuNXfkSdoWdMTwGweTuNksLVy8bLJXWLWLJUFcun1GkhoTASCGJcTyeEDuRE",
  "key24": "5JwiSPt36FMK3JFccQbUqa6iYUbZoWKXVRN5M48AMVM96fbazcwHMY1JQW9W5jF3DzwLuNt2sPYhwd7bo4M79xt6",
  "key25": "5GiXvQqw3CVVZJ7zEVGYBwyMujNpZ1eiN8CKB7ToiL9WagqLMvMaq824fJz5auL2ey28AMhoZUWXNUbLBS4ebAgC",
  "key26": "5Wry3f3B76Hx99HBvPGQBaQ8EPFyGnkAijGM3cZzHmA4euCg9UYJ6h2GahVUAMhEwrUqNfGa4V4oGQrjqDG9yCPp",
  "key27": "3k9vNUgm9YcbygTVVhSyCNv7SCy7E1yYHkKFcxDZvLV19J3kpUqPh5BhEA732imcXHDhVdGdWkEZrqD5r3ZWmeGy",
  "key28": "2QBRFFHEMEGR1qysJvKoUGG8ssAXfzGHyC4mUCTu4P28xADR8nYY9E5xbeDebtmBaWFqeearzWyybtDhz6tXa85J",
  "key29": "4rEKCbQthswhykf8GztkmZgRpdK2ygvE2PhPxr36knuYz87FAMaf8781XofzfgzWZ92PHbu3s7se7p9Aq5hagGpz",
  "key30": "3DknS3njtCpbK2XDZFKNJcSwY2ZMSLGx3WoEF7mJ7SwT5eurQa15dRB8otzmxvh5PZjdtf9cAFPXugBgsDGGNogD"
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
