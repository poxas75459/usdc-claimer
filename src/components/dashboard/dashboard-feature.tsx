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
    "3ssMVGRu7roZbGnwqA3QUoeNQ5gipb5JnZhh9JZorU4odBq3w18qJsYfS9a5HWvVRKfV9EG1sLQUD2Fw1pbPSZMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJ8jVdKzz7LgWjB4PBv15SiXyAfBeRcojQTxAsVvZU9XBAKT1mrfytuvUCoAxSHmeYVn7y7426fWaDSrX6tVJTm",
  "key1": "2ESgcScXxU5Hy7x2g8uv83bMgiodmqnY6X4cdKpfb14LMs1yFGRVeyayoqqmNoKazaFPy449ZFJqV3K8wtK6kSUL",
  "key2": "35TXCHfsXvh5nV3UXYTAA5M2NdGRMn1A76Z8cfJcPsMfmgaHAbHbuZizrG6wQedgZnYsgkoaZPXr17fwTRP3Ydn4",
  "key3": "3pXBjiVm8H6bfuFTGf9xo8mj4TQvNq6DJV7RnkQMmmCWVwEgwFfxnxNU5yWfgsw6wXWyUdgYWUE5o5TkD3E2D8jF",
  "key4": "9q9HNAReRYpd4fzJduv13AnGd8mRH4ssLc1aBM2ftyNW9hzQbN7ZeA3UXycfryvJYxEuP2QcBnhPeNHvismvZY5",
  "key5": "4b5pUMyN1HHTS9ywyezeSHGSyhmQ7JDc9KPa6bVSh3yySwkD1f5zcPnBWRaDJpyRjAGy8A4TBo3TJWb6oL9pbas3",
  "key6": "2ooqzyeDH1FzgkKmLNfd6ewZfhdTt14y5m5RUGhVVQPvZxbttCkWqJiWeN8ZYW1vpXU9zKQh9jY7HUKhkuvy79Un",
  "key7": "3gsgjMxrJJcDFwBTnzjcrMafxAe7E9758wFTxG6chYerGA19XnTCRmmeUArLCeDCkds3E17adtdhJfAw5z5ZjrmW",
  "key8": "yCfjC8B84gE2CbjHVRkWiBxwqy6t72jWMv3nBKw11udLifzqHqXYtFoqhznHAvwkSDoeKV8Zu2eJFAoyBVx2eau",
  "key9": "3QBDpzwkFbTQhLMhZaAt1mZKvXqBo1jyKCSpzzsmmLqskhFQekgktsevcbE1uUHrjnKUva7eyPgmN8LsCXi5oBPj",
  "key10": "49WkB4RCVnhhE81q2cj1y37Km7kvSRwHaCPxdTnZwHsQG3ndToe1TGVpxasfv1S7vdhmMcpR1nPYWUQsQc7C7kuK",
  "key11": "2m53Cs8LRK8azAuFxjbF4rtGZZrJSmZokcsdvZr8vstp9yFRjkgnUCU4q7K2a8ZaNnJkjgbiie33FfjzEo6gnsC9",
  "key12": "2FZeSgLQREgnXdmjc9eDgDiWNnW8M9ApdDJ6ss8WBiwbbZuXXYCerNo9M2TyBp61KMx4gTDLZbxkLBkpuvYuWqGE",
  "key13": "2Yho4e7EP8GnFqpvZmaW7nWT1PNsrtoe3nyifGTJFEHhYAr4Cnv9oVw1n4WDPwLnnRNPyKAtd1LNLJuc53A3ucYp",
  "key14": "3r1NztxGJfN9DjVSyxrjfvL2u4tSkHJR53Cxoxp4KdGu9eATv6YayF34eTprUu93PA5c8vTtuWF2HqH62g1ZXjSk",
  "key15": "5hs93XSDpdZS9ZkwXz6BCv5smiQNbBCg85AiXn1hy8EW4zUgP6MtiFfpkwM86gYYN7s7tvaMe5dGd8XCsbeWkxzh",
  "key16": "3C2WdhqxEb38cL2D7pcFJpjzpVfvmba4sqHWcpqNpd21TZoY1ArGNzt9oopAXryHKhtVKjCxABmbBj4wVAiYzKgz",
  "key17": "3964Z4F7P8E4TTnE7cDuShPR97hjMFafxznF9AiuGcaTKqKc5CZF9tcPqbm1nKx8hjxCeAedGjty78SLefik14m7",
  "key18": "527z7PMxb91orq4P7ApgnUtUJU8KJwwSLDKUzQGburH7n4F4rRSnbiWYmGcWtp3mnHtrd4y9E3E5RZgtCnKsDGsL",
  "key19": "2THEBthTwNiUv4a7CaeqUsKVn2UZFDLdnx9SGeJnqiaBAcmq6UuHcaSteWVsxpxFd1Wvbu6tHoD9vXiqhp3wQgVF",
  "key20": "2U4rdYC1aBdb9KK14CxEL2z2tRVQoSJxDcTVzs7Fn1mfMpeBVjjFrxUr1unRB5x5UWFfiV3YYZPvkuXtGevkqSq2",
  "key21": "39VTr9RvK4N7dGmyt5Es97mf8cLPZcNMwVhaHz746iaBi89kPSvwWuz8y1H1AFXiU1SQDXnWtfj141Vr2Sjtg749",
  "key22": "4u84rMMJQW3JJRosspHiS6cgdyk5hgSzwrKwSnJ5qUdhfkHCy4CYhPdmeYVUQH9qjr9c9CWyoZFDHS2DQVn7cVsy",
  "key23": "3zJxxDjP6GS5ay8We9cfa27RhJJTPM3hRf2EeZpLHqpC5ZsYeMx74hLbLw7DYGgrUMhRpq21VFemeL6DpLGVfxwS",
  "key24": "aU8vnz4SNTTVioVtzKSsXvbUdaWvbWpeSGv8RLJ8TDJAU2obg5znY8zVFoJZhCqazjR4EdLEucZtkMryxwFJ1rz",
  "key25": "3voZSpJAh4XRLs3zQYwbQJzRDXEVdf7ikZDwF8Hnteo1BUeY8G6MfpEs4Cv1LGvwseG5JTdCREwt8T4Sz7mMwcha",
  "key26": "5Mj4sA2xs4xDhXXYqADmDkKCUbkdvKWkrM1A1A3m8FtR3Q4xg81RazJ4jmB6mBbqfCkdUHLTdQAc5NPvVGerWUu9",
  "key27": "4d8SQfKhqH2H5d4Y42vWLbqhqy6CDxKE8iVAXsDLnFMhMLpqTCMTyWVcEbUVUbUzda1XqZVGVio1HqQcSXh6B1UB",
  "key28": "2fdJMYF1HHyyiEqjbBTBuTD1aFJdNvQdLGiXHRFHqp6ZbdnuzreBPi3eggcemN6Mm96oFSUtMSm6jc1a3D4xP3qT",
  "key29": "3Bjzh6r8VFiy94WpK5WKQKVP2nQ58gbTgPdfR2WVwsP6hJy7CV46F7VAjVaeApSrTMJ7EVJAPXhNvgBCvAGuDfMn",
  "key30": "4sBs2jwdPxocngnksW2mGmtHWx1g5ikCSxBf9SeNZgq9orL36mbR68qprU7g5ZfAjMHKvg4HNRWLx9FwXZRUU7WP",
  "key31": "5iBerhKU8yWxHKKT2We4iGGL7zkJzGRry3FYPifGfCbdRE9ZtPZ5BK4vdes6Qkasv2BTbhxLb8K4zwr1pdCCMGG7"
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
