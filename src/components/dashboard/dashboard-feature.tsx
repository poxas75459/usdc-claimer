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
    "3RGDQk8DQeoRQVnqxFBMzbHWbqgKRhfKfCkHLRowzhxEGqmmYvTCACLpMywqW3fjdn6oSE6cjy4w3VeZ7vEEDhaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShE7tM6SfaXD5AhUcdRJzKywpRbzW5zY4vgzih4KqqMkAqpeFc9DJZsdKmiDg5LjqbKPRr53PctPaNC8eofkUcc",
  "key1": "2LdjiMjKooQ3v5xmd7yHcQFBsSX16n8dKoGoNaWZ81HLff5aLvMQb3m2NDQenjQs5LrKKYbUSDriL7g6RQ9cZWhz",
  "key2": "3tWniPb5vkb9epqNsCe7XjRr2T9qYjHsPqtbVjJo9NuhcVj4c1RsNV4L3kpB7axrtZvskQKZnuBM3tFAYnyrj48o",
  "key3": "3ZwsY7A3nNBhGiyBkkf2UNJFvZk6vB2dUqCa1oXkza3onmsyfsKtfb9hrVzYU21PbkWorXHeCJ87WALawMjGLmei",
  "key4": "4eBkNZATjnVRJAkgBDEqBSX5TqcnidDbHWDYx65cfQprSWm1XcXvnCv9WaiLvMNfqvKp6Dv1zuUkqccHg3bzMcMy",
  "key5": "ZgxpAQuGX83N1PuJifXBmD91NCwBxojTSbTVdnb6JL4RkL2bEVht9ioYSmkkEUkcqMaVfYu5GAB6XtNFaAPmYST",
  "key6": "3b24E3ZpbjyG5uF3dXbV9oiK1bHJEvrpXaVRSXYSZ8VLMNKcsRq6PEXpYJCpidrsPp9BbVD1x3cGo1byPPcHFmT9",
  "key7": "4yX1jPz81ddFPV9Rxrspsmqzs3YrFBSfyBYHDfPuRQwF4rdK5y7oNLhpvjNE75pp8nm7zguPrt9sK6xCyXjYFiPV",
  "key8": "5bd3fuzaXrQGw8TEyooXuCzrBovumLTVtuHYX3uNbktNERyHsojXDzVw3aZ5ojYC1A1Ut3nqUAAZ7yx96yoWPg1T",
  "key9": "62ixTvTGx6gCLYpTjDfv9T8ePdQkhjXGb452Kwnjh1nX5g8emijAqDJgFDaZEGQowaJ61D2VqmQrMqgqFHMj6RQz",
  "key10": "4VogKCYcjx7Y2hF9QdUVRS6GFVYS7df5RwQygrH5Ugp8mmcoiyosyaHSHZ9dLVoWyX2ko4ZUCh9MDSDur34fCKaJ",
  "key11": "eTXaHkyAZGJNLueX9uTredQGTTeHKBT4CHnJiZ6w8kyAKTxzDxxLTsPRdwmFVypk2sm8YjiX9KV1hcKMA1vLh9P",
  "key12": "5fXYvgUwunwVVGvhboRd1LtZRAd4fp1YzzherccccKoMiXkzaXPkC6nFxSmL1yCrCmjN5Sw11aFzFajcC8p8uUdr",
  "key13": "4xq6HzuP3ZWGi9aavF9vf2pPSSEwq66yBs77C59KK7i5cPcFRy9yC55cxK8j6ZZisDwX9CdcbweBKb4PnfUz2WRU",
  "key14": "2hyCtSoS8Lqy4WDVyH8a4oWzEKHFS6DkYUZdHfwqKdoyNqeXJUFDeDs4rQXkcopRAGLXh5FTv9nH786sgn2vairu",
  "key15": "5BvtqM4Tr2CndwbjvAhJWjSPnRLiqF2y1Z2LvyvTWQ4os76rpCiHNqbh23pNbMz3KELAMPJyZfbfsRgDm6CHPSEA",
  "key16": "5NjCLVMZSzK3usiLxmXvJKmpxXRzME6FjSFNzTCff7gvif3BBbNDHLr1gDiLkKNBqFzQvnawPDDJqB5YDKurmEvj",
  "key17": "5e3dL32CWRmkoFJAja2Zmjr5qkW6ELxxcs6fs3ktFLUCM2jbk4R9s3Z8mBhFSqyz5ofwgS3yopHHW8eSzha8FwWe",
  "key18": "2iek6WchooT74omj55T62ETgjXgYtegdqeHLQWZHuPXs5hKztze8mA753wHyyk7D53GJQs7XrQZxdNQF87DUrUmg",
  "key19": "5MC8sSFooG9eZQjVQwsJXsoaY7XrDiEmNx9Xnh2gZYc5khXrXESGHy2Efmaif3i94iJSZph8gh5BF7k26FHEsz4X",
  "key20": "LXKV5wuGnHyVanbGcd2psV73yNo4SDhZczToQDegr6guDXVpu8x64XmycfSbEiHPjJGGxZBaAf8N4Ja1kBJG2RE",
  "key21": "5QNeWxh8UNrm63BdWgL5LusdRVzwwQ8rWGKRGVbZ9fa5uwi4LS1CtJZybiDotYTEZnQYtBY7PyMp1zLzAwX2WU5X",
  "key22": "4cgTy5rLTXTZo5icrmWCygBdYqW6Vj8PEXh74gYg1UZZRnkFkWfbwJNMfGkLc3eDBBTb8NC6uU8oKvoZvhaE7j51",
  "key23": "8okjBmH9ykq3m9mN4WRQA6jbwuL4hjpUTPbR5RmCwdkQuPgWkKnbKQ4p6uCMTTMXpXFg44ijxr8npgoLq13GY7M",
  "key24": "4XbNLQoUm6w6F9dBKAgDuhvGKzYqfFJChe7fnwbiTjWg2wQxCJbohXf8Uxr53kQtEi7Zgswgj9ZoaDihRP1pyqzR",
  "key25": "5YKWtTzc3ecELocxr4m3iwEXcBZ4RUjU5rsZDbYAuEXxceUa41wDw1bUd9zhKm1NX29z4RURYKowvGHc5HqNnfWz"
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
