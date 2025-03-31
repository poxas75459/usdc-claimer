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
    "3TZssQCRE2qArgExqTtknsuE2wxsJ1XRDjCPrf7HtVyHkLncoUZNiJqn7q8QE6kXEQNyiJKT3toqXFS7wvneSk62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VrksQp9EgLVgzEvGnAMJXAs5NwmN8CVqDjK7XgF5QV4YFMnJKa4rDySecoEZuqS18bPWtcbtFWjNdvju6Tk77wL",
  "key1": "jZwX4Kja8f4Qz6BRPaBm9GfT2cJXiEjX5MLjWsCrVqnAkDSiqfAMDb2ep3YdEE3DegTWDLtDd4SjYKwJ4B4VBuB",
  "key2": "TNoWYsSKSfUgHVoDQosPcZuE4EopfwBsZULtkGRRjh7tfp6DoouRgtgrcvMQ3oiFBNzhfsp22rmSSsmTQtGyaD3",
  "key3": "F6R4xWZaqxhstJQVFs4hqSGfH7gHjSvXBGmqP2efJb3h2L1isYwA9jJVc6sSeDKdxAEG1JwT7BbtM3CxBy9Kg2L",
  "key4": "5mAoXc3eYwaia4t5kQc6eirt5VKAFm5yQazJTnoKd7VqMhzkafTKXavr1cSXWZxHAhWDhrBwxKLGU8oy8wzSx19C",
  "key5": "33LzFsKUMK2KTud6viWdPXJyS5PPzaj9nBVisPhwp7dLrpsDFZ8QjEB4gMURkZXCFdvNmE91yXbeQAvwf3Gc78ub",
  "key6": "2RsQ8Miv5UBXZ8utttK2TDnpTyswWPoYgcw9a4jKF1DzoTxE2U5E6KdWgD9Axw6WEerAKD5t6EkxBz5v3ud4Hj1Q",
  "key7": "3JT1EsJSmZsYrjmKW3fsVW9YiF3AbGYGtc3vtG3QmYW91JLypLhuPL4vdkyepGD1zZQsQ4gMjTuDkk8hYdmRXhux",
  "key8": "MG6cb1PT8FqkmRtzXUZ7NiBEofkFv1xpYFY5w2nTzDrJjafvCaQM6SooF5N4or3xPJ1LnPQZZqvvL6M9v3mXWiY",
  "key9": "5RWcWmMmVtF8ienfhhPtPKb6jzU1eCzwTvw4nhCtTiZh5DAiXLCJ4qQqecF5fMUymEnjAcinU5hMP5E5JFUec6d9",
  "key10": "WWhcWypPrf9ax7Vybivht5Ts7c6p5p4RZPWEjSR3LX8FBE2utghsAnBT2mhcA7PY3jYkBhJVy9m52RPkb57sQs4",
  "key11": "8n5wMWk7XBuQHxAbYmbbhCfroLYQPdL1JSUMe9n6bLAFS5sBvC2MQR7bEoAauvjCw2MJKNLb8aWeHN95XQU2tfW",
  "key12": "582W64rLeB1CkuncrofZERQMHCfciZYAwEEqQyTMRerDBLu86euShiVKSC4ZiMgpcDWSoswJALXR9R1hUrxYzkUV",
  "key13": "25uvWgTdUPJzghjvhBimycrp4Lp7EekW2RgpDF97UEcZM1rDhN6R33ajsQNSd12P7y9irEdJW27oEa9AdFozm3DQ",
  "key14": "3LEGkodeXeZzhCvUPi4ypvAZLi4Fz16BBcb6AYmQQ22NkaeFmzB9ZTHwAiRWwsqG4GnXp5RPuaSFbt5FCECpAXWm",
  "key15": "3WrgTki8MMeCLfFKv9ijXJW6HwdusnU2jcJL4BoeoUqDGMZJSwCMk83nLV4a4zQvJpPZxiyGLKKNvj6PxBTddXs8",
  "key16": "2EcCESrHQu6rHsWYmgxTubomFM3vTLFUkfpFp3Z62JZz75PLtyRRu7s4uVrA3rAv2DZsU7qcoD4iCi4umW3ftPoA",
  "key17": "GqaK4uvGyD5pgxQjkEKAZVrMkTTz7dEyRn5h4yPPr1z8CmNUipqtWBYEHbjVW3DjKP8C4XgMeaPv6q21o9zkS6A",
  "key18": "LU4JQtGuL2Sv92R6KrCriK7qvwYApURwQEVjnQeUkBxC4CK4UZD8EoBWaCZE8CxbX2GiWq7b8Qx8d4JTJWTMyhm",
  "key19": "4xM8Y4g1WVzgsfbdsDU3d6bDkYR5qNPcAsJ4AJNcq4w5E7X8eixSqf3KacJv8sJwrS1LfHKop6mGL3Q3hpUpsER8",
  "key20": "3Y6XReyjcV7XoRydQ3yQKk7DqizPcFnzczfFdcNS2LwGtSniVYy1zdpi2CuYcL7kUiDJkjiSZoFjox2nsAwQWyfB",
  "key21": "39ooAVGLMhmT1ndB2R25vAp1KtP1m9xjsNYkbhKS79P5zn8C66v9dh4e3D2NzhC6nLbN43u9NL2SS9H4x3fC7xuS",
  "key22": "6yEs7xYjK2BAq4zLPPkYjzFpn8jEWzZYnrm7bJzK7rAw3HYF1v2hKGcrdfUEbXeR59oVXdUHXeY1fX9gmWq8jSg",
  "key23": "5b8UWh7nENSmPSRXZLo7eE42gYczDcw7biwCuPSDNu874cu7hNaJwQGYGUFKMfBXoejCzYpm7sDAqpbnW2DjqDqn",
  "key24": "5mE3FjB8fZPwhJaxwzXE2BrWu9x1zAhNArqVhLGbupFgqkjWmQkiFo9AocQmHJgBRZVkbQ5oATLydygqeRk1BPWp",
  "key25": "4yRsFZJziscw3tps1dmMUHjhsuHECMa1sHxYxFwjWArmXQu87RjhxXQXhKwEXaB9ayhGcd4wDVXiNSzjX67M3JR4",
  "key26": "p13w8MxMAhW86bx9gFypBnjYQLCVT9A4kfki2AaHz9sf6VjwMd6EEDqzkZDGUa1CfFcgn2uKcyzjo7huZpM5CYh",
  "key27": "5LpLoLkkAPkKiUp1EqjLqUnzBWYQeCBVTceu53cpJSMS8K7y9HdtXuzqsB84GgzjRvCg33NHpJwjKb1YWyeqNTiG",
  "key28": "53bL8UX4fonfgDqyKEJaKR3H7qQTV7UXEWF4WbjKqREeFT7wLiC43SYEUZrGpvhhT1e4BgLiXYXi3UUuYALcAhUU"
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
