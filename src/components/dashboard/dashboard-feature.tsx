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
    "22Z4gDqneu4sBySANCUhMM59xGAAkoWfRQZEqx6HJHJaj7qptXuq4WZ9ssRzBDuCKMg7LMyynfZwkn6hKF88g4aK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dv5jcvr4HuKU4FNi3EqgW4jqu8EJe5imM5bbfFd5hibtZzw9sTQR2eD5PDEYVZqYQTyYzAGX4mmhzAvvyEfsksu",
  "key1": "47p2up9yjs5cJwhc6mgGYS9LdbtcTBJREoYpiBEouEKsSw2YrgV5tkk4jTKCfn6GPeEBPPbGvSep4X9bbsXqBNJj",
  "key2": "2NzywmjygAFpxVE6ZmuoRjpMXyirm2PLYNkSZQK1yVy9x3hDWPdk4Vrie6mPhyMpDRovHGaUvmEfwRamy8B9Lxx",
  "key3": "2jWRY5tumVAFxLLCsDxQbXHvmKxBe4vAopoAXCfQRDygv4SNywDTRWihK44NSoBLSJhNNs9dgZu7ZWvYFaPKk64o",
  "key4": "4v819TbqLJmADM3ZTHGHMYhib63SnAUdnL1HKd4fkimfAuF9Bg4QA8fVtMBrphGyKYb51ddPxcw9xn79JFTxcYwn",
  "key5": "5aJDpwASkdaoWtxGLnzHURkpKX3UZBTLy8XDkba43hoS5xhNLTKxYMTKUmdKNZWSaTKPgvmTibHAi6SD87da9gYy",
  "key6": "4anEwpRUrKs9H4qWQLy6pA4UQ9BtJFhymvqfDNXXJZw51RbVRojEjxJJPuACXQUBXYxU7q6qYrGe5kPdj2qJx22R",
  "key7": "2ZxcyzVuFN9HtHdR5TKxh3wYVSvLCffcK4NJ2UYfcayMPPtnictyVE3rNP2yLqS96AXh9ca1qnQ6WShMfVtq8Ucg",
  "key8": "xHBmkJvBKxrBgN8P2k2EHzLFv7qti5hucfkAXZNfgYa6UeheK1t3nF8KwU2akiHQ5qa7zJxmzK3SuQ6t1jwq8s5",
  "key9": "4U7F8n8rbwz8vDov1VpKdCLqNaRHq7PygJP9R8MSxagxiqJN3LUk8ADRapmUVZhtZkHK1K8KtA5P5HwqvzzKgxB5",
  "key10": "cQzX55TC8NxYVPhSFkTXSqddeZarcWCKBe3EfPxzet1PtqtmqKNg42cKfbjVVAvRCM5Ne2jTV9VjLy38PDBLJyL",
  "key11": "DZVfvSDrcdRHDrKLqfrq4s9A9uNFhxJzbyNqPhm5HzHJgLbZhymbNYTbY3EwFk2c9yhodNBovaZQgbcJ7bMXVE6",
  "key12": "3nb1FHQ7amebYdYYv3pSfAcCcucDRqEfHu8wMy3MScW1oPAHdGYuwg5Q7VmNFjRYfQhHa9G4uNsSgNwVvGXmfRrU",
  "key13": "NL5oB71LiYPJnhumURgWyRooTU3gkZgEtzxKCez1CsfEgopnT9V1dq3pCGb3bRnLhUNh6BhWxNvLAsckRa5sEBK",
  "key14": "3nWtucmov2Wrv9TAnjVbHyYPe9dxPChKzVEozDdVFKucYeAKAmLzfLmi2afdWxTyURDHXtvjsYuPK9nBLmMiaTFC",
  "key15": "u1iYmuaPSvh2jVyndZSXRxRWPeSkPjvCZFQcCXz1mkGLLVRyvU9WM163DQZmoDE16UeAaFDt6BBUn4E3fEtt14j",
  "key16": "3WyCJxiFdmEre7U5oTSdRgTgN3xQLi7xnuH6JFL1mvuukzbj4bkaqCv7KhG9KwgL4Z7e7Qp6cAbx1ixDr3Yfqj62",
  "key17": "41KnizsWXoEYEX1HSaWxFAEZ4u2WYPYajLnyWKB9xE19Um2yFQze4zjkMv3ZnzCMbtp4po3y25rBnbgF6MJms3zS",
  "key18": "2Xsz4USJePoB1Fj8BaL9oGUnuHsqyLUVXLef8CjKNVGvF2oibCVwNgNBdzkNxtsKGr3NgyJtMzsmLTxNJwGHmPKr",
  "key19": "4MZsitUgjRFgydFa2uVBU8JLujtxDvW5i87sVrTUut4RPTdqg5w1HC4p96k6gCfmxusmuq66vFCvhMZzPee7uAQy",
  "key20": "3oZTV42zejXC9zyWto1Qvfsjg338TvZVby9Pc1Fqvu8ukUtqY1AjdBSpLFWhPPkR9PhbVNmTFHB4VkBxWSJRZKSC",
  "key21": "yBgiREjDJLuZ2aintWpccwDaKN6DARWS7Hzc49DCeNozcHWDYgRgvYy6cN2yi8EgsDnWJeTis7zLpxzB2ieYLvW",
  "key22": "3aLmBvTDFZb9BUHNq9P2jPSoLRwHRwoGdJNrt6qDPsma5TTK8TDksWsQ5Unixy1tf8g1iQisrg3JiRoDMxxb8mZV",
  "key23": "3SzweCKUY5EiAqaEZpFuYd1MEz7KduAqpTycp83dpuNKeaaBFz31foyPUanYW7qEvphEZP6VvWjkRUchi3Th2s9x",
  "key24": "2UTRUkmggokT74WEAHFRKqSBHBc8aEQnLXyFgp9rXwEqQnS6uDbYAPxPgdqr56McKCFnEvo5Ct8chwDJcseaDd5P",
  "key25": "4qE3CFjdor5KiSauE1tRoV51MDqCTNp9DubtEzrq5g2jkbNQk7auabuHCwKsh3MFj9ZqJHELEKUww818q2JxxZBr",
  "key26": "4xYxGNjPaWTnEmnwDYHd41MCdHR8WbQSaeSzWTjjxKVCcuVcsWfwqU5DrXpGwRTqR64T5z2LbY5GyCbrFcHnp2nn",
  "key27": "BVaK7dZ7Pwz5tQ1ts6rgFw1DWWDsVfTb5bmcYaxVYr7VnWViinR1cZA2Nbb5FSrRezvBqR9q4ENFnv1xYhmMKbh",
  "key28": "2nvkBjNhV8ftigHT5g18rPtNEVFMxbQiDb4oyM9AYFxFW3fFXSKEEG99TeENoKy5swefDAoqY9RWAYnYeESkpAKG",
  "key29": "3qYhvBXPQCjxbbTKgTLEsXU3vSB5UvTCh3iX2koHe3hvuMJ5GcDvXcNh8AMmBV5hFNVcoXh78JCPpWtqCvYNCU14",
  "key30": "3kjtqexMcV3CsT2g3dXBvuknMjGHt6iRnNW6G5Gv54GpziBVPbP4YRtHBjXn91GfU11cHiH1ELuASbaSioGW44vg",
  "key31": "5cvzJKJKWkL9b7562gLvCZe7SVh1vDJxqLSvuSRqDRgxKrA1G8nJGvno2Ntg4S2jAxkuPXsGVJjvwJ31iLmWtJYg",
  "key32": "4gJxrtyazETtFei8Tefa6CtMfWJLQPZPVmiSJdyDXjtJyeBwi7RT1zUa6ri2QLQvxDU7QhTz8VqiASrnXA5ySZrR",
  "key33": "49dAmm8EFTEbpHSjBhsFNeQao14ugbs8mG3GdA5277jGA8NUCHf52zjivDah2x6RZ3UK1RtUjWm88qk1XSWXiDLP"
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
