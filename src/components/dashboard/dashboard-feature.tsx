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
    "tS6xYXmVRkXiMPvSyBraMrVh9djGjcg1c8wR6MEUkos9qBfjkXaCgpZGnD9qM4QFnhJ1eF1tzcnAvmcmqckqS6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWfxK8AgYQnQoxELZFRt1gZWne8gQsey2Aw3jR5MKScVTipm1GxMPooAnuttXrAfx7F2UAf7JoT8ggoPxNQ5AwP",
  "key1": "2Ciu2XhNb4hvfQECcegmuCCFv38P6RyRjCqicLT3z8csQY7ceaYxBSxmSmGVA6sCFEYD4qC4A2iVWkDNJfQUENKj",
  "key2": "3fuy8pyKKGkbni57iVaGaLXfwpXvMbV4QXpdCLw7s83dtao6UyiA5QHUF2jUw6viafoFJY7U51wkBVziPKkBTbPx",
  "key3": "563M6ZyTu6hZxCFGUbD8QuNVa8ngFb2vDwxs8thDnnKF9iNiBBkWCjyh7TFXcZhsscXHz8XGmrSJDQAnthZW2sSb",
  "key4": "5KMScsgPhszVi7zLairYBKH8u1gQNPz5XqvYpob7toNkj2UtdNYGsLuK9LzfsK8JLvUGN7BtJ9NXexUi85bUtc5a",
  "key5": "3sSSHr6R2fahwFPyUm7KiT1QSopNDtR5z8iWb9QyyNxEPGodxEkhCFkgHoTDUvK64KGsHphU45NKGPoeuU5LUb5v",
  "key6": "4iJkSTtddt9MqbLMxwL6dwbARELHA5UxW8R2Aj1PJW86FogZ7L1gTgRznVCnPfYsnj8VigYWm3YCBdfhpd4zjxqr",
  "key7": "3UgJTRqVoBmRV1jiZcerCdUZ3esEUJSyhwZZMKbg3s1EYdt5JBwbozsWdjYseGeNKN5YcA8sTdiDd8mvFztDh3cV",
  "key8": "4MhP6tvWXn5raGfPXbH2KeNupNa7oVazLWeaESyRxnjoDaNXpPrPVXjUAoNmPQvW2RDT147gVBPrgyeC45SmttGx",
  "key9": "5q9BuAoUwkASAiZKPvt1PTyxvCfW2pYKS92bEtGFzXy334iUXxCKDv24SakrbUcJeLnBwnp1GhNHa1xkWGzzrD1A",
  "key10": "5Cyd5A1HhthJrF86uXX1Xh4XAaue6AL8e5DJUiANhENLYju34FbzxVCT2mXX7Lg1a1TGhmE6VzN2dTBoCB1WUuML",
  "key11": "63AqxdVqNhepB2ATSbiAC1uCaENhggSYbRuXCEK2ND3JQbKYrjbewkjE4HzpJPRhtxAwYCoanHUGhqrzuyeVZPBn",
  "key12": "5gk3PvBrirdUBPxRxsT4segHZWUcxHgd5PzBe9f7i1JG2iuuLzkNuXHRaiPPr1A6bM3kaZtysdfZj71t96NaErFW",
  "key13": "BUCxBGoxwu3ztrXbmyd52ccuKYDB35J5HjfuYQ2g9aW8v3ogwWgLHcmwvN5nzNJQjCBoZZBUYTamg6M8n7T3zFN",
  "key14": "2WwCmmn9U4eVE2ZyZggiptKyn2HX2w15R9Dthis8GRa8ULEPoeRKxRzHJMqN28678fAiTbCZVmRARZqRLfqK4Huf",
  "key15": "21B2VyMekXmS1G3fcwDuNLJJgmf4VPYs28zuo3R3YoC11j56ZSDo8h5aT6bPvGMi3T2Csx2toMEAnuL93pazraax",
  "key16": "4DckJKP8ybgp7bzNkNumoRKBM1caNEfyDp9eKHdjLVod57xBkLEqFZsJ4n6ZHJEGbFbkvQfmneiLJgPQUzcni4vu",
  "key17": "eZMHkWrYjwMHUYvwWkxAgMamQt9JB5EhxCGjT4QJR2q3SeWtnJxVhj7QTesUt2fa7EtG3PRQYVYy96c3y9L6JdH",
  "key18": "7rH5RiDAWZgEmoag2vXMx53VVCF951m3dQbzZHb5pChp5Fy8MuPMTbwyy84mCEFQs2y51WwyzfZQ1GxGKMkuzpt",
  "key19": "4L7JHp1VUNcKnUumXWwLLpBF6wggGcAhwE2KMBdnpf71Nd69ZGMtYoTw1BwEMMwiQrNVnZneS3Y7qQy76RMkfupG",
  "key20": "5aBe7sAzTzTDVgAG1DCMjDdGxrnPdE783arojHv8pBoRd8hzHdKGMCTPL173fvz7HGbVcEBg4GhituoGKx4ASfQp",
  "key21": "2gaKScwnbgkBm3NjQxWYVt2PgjaCLeqJ2uo5jh7kDVShu97yaiPmKDu8D5uv1LYjTmcmGhEU6K34h3Dr5ZNqu2Zd",
  "key22": "3FvFc2i5CQttfGjyq4VdJkUNE3gSguxPUWb2Zw6JPRjhcwAesigHFXKKxt4HhXAhoaRjXxbxbRrur5NYET73ukQe",
  "key23": "Swv1jhzffpFaFQnBcSXUzF87Lc3G6sz42qq8a2gfFKFKiDA2815jDgzuQWMh1U5JUfgH2iYDjUfM3sQsSP8BpGE",
  "key24": "4Yk5KUMfoZwv5eCdEZiCDyCykjXzt1yjoHRcqset6RmgbBHCo98P8Xd6QMNDe2LpJLVKfYwZSkjoF5GpoMrrUrXY",
  "key25": "3ga88ZLW7B7oqa7eVx9ZGSrsW8UnMKSySQP2BqjjmR4mDfeDSEgiWjwoYybPAFPjbCboVxNPn3atYGbFe4gEN9JP",
  "key26": "64Ei64Ny9BnsmPQQmFarahQfSpeiK6z27HvSPisD9Wh2WZWYBmnu15G5n7UUmjtNK8xGpwo6LeAjE6USi1VFEsZA",
  "key27": "47TWbtD3pLVu5eh9s967AAu2pCYCGLe8zirmiriCtEmLBTTFYH8kZb6efh2ZN4eUaBHdgiW5H7jZ8EctCsoJ8Etk",
  "key28": "K1F8Ejg1jiA2GuNvYi19SJ5KTF68Fr5iDQLMB7E48wegpT4Rdnf3M1U8hjA2rCtKVd8vnXgrspdWoQF8kzgewVM",
  "key29": "NYvpqKbcknc9cB3ash99vAaj9KBX5crZQE1znkM6JLEjWt2RazSmDtefwd7fYbfvEPa9jLgWSC2i1u22VPq4wVE",
  "key30": "4V3jTj8coWdX926GyDrG2idwWcYBuRJkkRc9TA6ap4wYVjdta6r6QYB4X1mm1wu5JNaABo7dbjoTW9BCYsJyVkwc",
  "key31": "3U6kb7Ng8714KoeGUHWrJqRHyZG7Rg1WbqoQBhTG8Bz5p5eF69rU5rdJtC8Ri4HpovPPTLVWt1B6uKERUj2LtjhL",
  "key32": "SSse47nRJG8x34vJGPBDNeYER7cwYhNEJLWQ9WbYHfydGFgzKPMPC2ecLN1zRUrewJhETDU5TEursyTiEqJZ7AN",
  "key33": "4ycRe8EnLTEkFN7L3TgCHurTr843tKi8Yqn4wEuWP5WH7qs7NgixVb1aUtgBQmrAhJvZHD6Tmz5oWm2LySs5NnzT",
  "key34": "4QUKLnNQZVtnUSwxEXxraihmkR8GgiqkMjWzajhHHLQEb92Ro7xrmBiVxR87wTLUVzXYcqvjhaLBQtVpPR55esDC",
  "key35": "3ygroNnewyeRECaHyk3uzUsAgeqqyfJWHfrB6fhFmeXhehVHJoUYD1X1RoPSsWwFYVXBoroNyvDLJ6GWW5XjC4Dt",
  "key36": "4q3THihGVv9hs9wQBhHBADg3GELHJdqeHUhGt3cAKLCEp6uUJwVEPfL1unM8N3htGo3SDugbozF4UimTEdrmz2K2",
  "key37": "kM1i9tgvnNCRbJUpibkBiVH9aWQ3ZyWHjKkXL7z2qqojE31JzyUkFxhBeQxnajyTqZfppLbjac6yjx6X55DRVqP",
  "key38": "AGxRFPVesdnSDqq6349nK44A6oBqQMHBdMJ2LMuSS3GQDbuHh5yHxoiKn34NCfNNvQfyWioBHKG5YH68X8sCqzx",
  "key39": "45v4vr2brwfzxuRHrjayhGxRsaqnBfFKgY2K9kawngeJWWsX79YboYNvCuyb4raHJmBam1f9mxmbQKep9RNYx9c8",
  "key40": "3LVgfccYk5FEokZzxDehja2dVk1KqKRGPvAucmDqznhsScunHzUn2d3ShxWWsGkjYgs61h8eP51xUw7eTgnDzHWV",
  "key41": "pvZnSc42ivbdEPWfrSsVXJAwRkLBUqhDEmbU7wPPLhufNWs53JeQyEprAabbYPTTUcEo6Ne9vc5fpYP1ThTKRQH",
  "key42": "49seGQXtfZaKhZ4G2XMy5W3eWQhQBgvQAjEpnuZhQXAudn73H5o6UQqFVqCuvttauiz9wcQWCXkoxjUBpSrPNzdE",
  "key43": "4hHqLnh3yTtqSqjFGmQUhh4SQpgZVr8XcY5CCqAJ2a377SVmew1GBxD68fTdLa8bLN4SMDLBqRfyXuqQdH87vRTd"
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
