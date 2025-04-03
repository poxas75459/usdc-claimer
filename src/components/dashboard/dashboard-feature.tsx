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
    "4T7QSopwfRXkQBcBhrvRt6gce4kFFpXmJ1dLSdRU6UBtEJiGpveCAqeZtjzSth3G9iTdzRedg1HethktRJh4kWG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XY1LKNeqNfbSX1RLv15vQzk4gnSSvff8iRSXEFyhjkHkcu5g9pi69PUaiD17iyYxjUhDgbjD3hfJdUtD5TgBbGt",
  "key1": "4GLKMNpy5HQzcSsv1avrv4EatGX7uTTRDccN5tJrBfpaJQTduAhxLytvbXtX5kpXB1PTercFFU9fa4KGGWW3dvnp",
  "key2": "4qXekQtwqaJCWUTNPKjG4jtjgWMoLLqo6GbQcNg3BJt2oKt4gBsZYYDZxhGeb4wt3uFkeFSNHXBDSiEyruJZFQLz",
  "key3": "66KDDkL91auGmXE2dhfkoVXZ1zARaVA6Mgqwi4LmBbPz6SfSUN5QBq5p27TuG5Vsg2r2jsPDCeu1ZjXWhQMRPb6R",
  "key4": "4MoNyfBZdyy2eF11psd3876Qd92aVonQKnH473iCpx8EMzK25n1aiz3W9jRTv3PDEaRhE4xamHzAEbvsS7J31hKc",
  "key5": "5zwuxFPwxuHNxbJmwjLQo1f3GaNwyuXVPWLcQXZoLJYKVBaRiKQGiuGTdoUaTUQVzRir4RvdV3ZsVoVetujeyimt",
  "key6": "2pA9owCPJ1nD94pm3fQezK8qUGvmoWwN6EjTWwwqE3k1XcMSrdxZPYf1G1xDhvEUYJ2XzyuzBcvxUCCa3oBSPaCR",
  "key7": "5ZGErizMYJUw9S4DpZp9gLJ3AL8ZsRcXB4SDB7WHeWVTgU5N8qFWgF5zZAbZgAEDaEWGiobqot1UTc2SfeHg37Ze",
  "key8": "4iSgnPA555kMutDwwzsMFCcvxmf1KgV3fk4KJKph6ERtp1VVH7d591q8KGiQa7JJFjbvRRWWo4doYzM3fExEUCTh",
  "key9": "38mnxnC3cNSozATfhTHt8XEEEDhECAZqxL9ppGe6M1mAP95aK2oYJ1h6o5mRYWieV3DmCM3AEniVX3gNhph4zBBk",
  "key10": "3pPobXaR49vBwzwfVXjV6gjEq7G9Nz2KCNUgA9AxAknf8Tq7kLPgQNDD1TzsApiMMnRmyyFyFsg8qSAEunRgKHSo",
  "key11": "4VVvGHRqpt7QgqmS7BZqNLwL2VYTZXMFXrcs2QdsGThjTcRc3qJfZJyK7pU1baFu2BrjnNK62e6DVfb3TLiWNru3",
  "key12": "5ZbLLkTKNR8neqZVT6QfKavbY7T5v2X9FVjK3fZRpSE98uic8mACY8R1GpxkQ5DhxKUutQCxED6sQ6DpRUntF4Hu",
  "key13": "5jGt5U4TNMojGdzyWPaMNMtLHkLp1Tq3A1LDT6iiTjx3KVv55P16L2nbYabs8sMgjCZonnQMKEDRhwEDkdA3xgb4",
  "key14": "64dEttLTfzgdvzQuV2fz936PAb66HpMkdyhSggjJwNiZcBJRX2syEv77ZuHNuHURqXAaLwSkJtFHezMmyhhLkBib",
  "key15": "4Ji1aQpfCXtCefcM4Ktbd1oQuZ7Jxuh5hRAERsaQ9LYRBNbDm3aNcPf3ewzd4i2RT1iG5Sb4Qki9o47WG5n3wPhU",
  "key16": "S1n3GPSh1kGUmYe1GiWxmE8YBvXGF7T864vqKjjByVDY5tbe77MdK9syZjmapx9w3d6zBt9uBmjdRpHiad2sBzr",
  "key17": "4Sxsr78HQGLU4Dzto6M7Z9gg3teEsVQ7oXVevvXc7PMQcKxb5cTKq1axwS2Z8Nh9aE5fEuvhXi5mGp3k8u62beyg",
  "key18": "3GcrsSr7h3TPscMJUTwbyRFvKTFvXxf575UGYdQPa8JJtavryYNt7fMrNWHtD8wcCPE1FAVM6uuS9YmtVLZZHTvS",
  "key19": "3W3tjxuhdEsZMuNgjgwfdvNmEmxLMRzDTJtjbwJrDmTHnmDNJuq2LbDiAZY5ckqmSuaEP1QmP7gpJjxkgPaWSs3R",
  "key20": "5udA4SjDtwkAtQzUoVmrXfdegqVNn3Z5SubPfszfrVV3T4EwHRfbFJh74P1bHA14VDbn8popS1KGTaR4F6GcWy9b",
  "key21": "3LCQzE9dYKLsfyy1tnPrLUZF7UQyhvJr4fR6nQQGMRQ2zNRhNXj9TUsfHBMx4dgcbVZeAC8DDH4naXPMmyBvNycP",
  "key22": "2N5LfVqPHN3aGd3oCLCHcFToytujoj5Wn7moxTf2MjsdyL66RXLLsXwj9F8XZhoJhMRzhRUarjXifnCP39631uNz",
  "key23": "5JLLG4qR2PtgYPGJtQynhtxmAgQpZGCheBTSzPnqRsmzrPFw4dNZTpbpgLqR9q7b87KU1LLb5fJbgde38fLyreGv",
  "key24": "4vCT1cYnp6faY42QjKYr9sCVFwSR8EEdRG6M6DgXGFmcZzXt9DhYmcNaoLdcX3VRiU3URnDE7U5xJiZKJKbevD7f",
  "key25": "5sEbEmd313kAZbe6AGZGRC2NykQKDYKdmNtvYvi3e5jvpXnWnk5PwVjzK17bLSoYuZSbfEdNMvmfnqCJX48Su7Wt"
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
