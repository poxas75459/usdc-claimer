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
    "3vxqwDat3AEgqbxzPS6uPRmkSe2HWwiNw7ERWqCxGtXJ8oqeSxGJ5gJLbLqMmyZmeRiDtFurUuWqGPpYghj8Qi3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EciSa7NGh47zXVa94n2oKyn3PAULBZ4z9eyAAYcj8yc1n9BtHFA9dizCKWEkZhxMvhEmmuVpaNwcwg5psYqfX2V",
  "key1": "3tmvmT43sfLN3TzDDt4j7ggSiKuyowccxjTVzof2FMnrBcgHRyCtMZxt16atCo3e838FVPaQsRuzDgKrU9YBv8cg",
  "key2": "2Jp7QtRmxGVVRq6L4pQmcWnh7A7sdsPD7zsdsNQq9BP1dBRv65X2QfBpKbrzNWDyjT3wwBzswdydumiHJ898qFiV",
  "key3": "2sscL47xPLEKoRfrXMXQgSTMj8jBByU5vB8HVd5qPRNMzRjWu7WwTqFLotey9ToDu7uKdbrfj7fs1SQK4NohJ5Lz",
  "key4": "4numwjDhs29Euj7V82JKZsb4PeHSD8PZ7cvTkXcNuq9ipzzMoSYqMAwdj6crHBmwCHVrPPmqAfyLjo6f3JhaZA1S",
  "key5": "2AbwGsf7hiuG36N888WB9xkGQPo3fNBvE43WVeChGzMjSuWkofZcouUt6VmpFKUCeiVqXPVJbS3B1CTh3mBdbdtY",
  "key6": "cmwjZjcqVUTq5EAt1NU31qSNc4rVU1UMhM4sTLktg9xWBopFD2xwgAsv76MmYRgNabrZpB8TZNWCGQHA9ebjDk7",
  "key7": "4jGRjmXpmsmzo3Yqr697Yh5pm4vV9aTrDM7hsAyrPYPQtZhdw3sGzEwUq7iNYpTU9Y9AeJbSnhZ5w4tUDKc6X3GL",
  "key8": "2qdSpd2mB1UCwPM5FxC9dMFngZ6A13gnWw83ja92SpuhsHSESKjJiZVHyqmagFN5efohLocTQpcMobUhGPaKipe6",
  "key9": "29MJjPxc2djYpjUpcHxTgwja7RJJAdCTyATxZikNFGfcabCStYawhPtSFcbiZN75GsvHY5qD5cx15kH7ZjhyHYfd",
  "key10": "3ewdMgDzzxFYxVoLSpbgxmNHRwA1Xf4yMuhPDJbdn7JdphmptMoU2AJKJkLJaMbZb1x7CPuFRGNxKWj8UtNu3TtR",
  "key11": "5f9YbtPVsjpBnfRj9vTn39DXVUWFfgdcfytoVK3Ko7Y4BPZnKoUw2DyDJ6qK6nDWnP2CFXEBWGnL8UtyBY88xSBk",
  "key12": "5nbYKgv6jSWNZZCde7vxWS23Q1pTC91L6HMYhHsMjv3au2nejREF1SKQkiBMKpM99xudjtBzuHBDeqGsKJk5pguu",
  "key13": "2eN1XWeGYTXRmoENWf3yxivwP5fA9MP7oLNoTTo5WnBzkudgD6EWV36ExLvYCemgZWor9JiUR8nkLqBcQsUEhUka",
  "key14": "3ENF2xxwTF6yM5GtteeDQjQ1MzsKx7Luksadhsno4gQFRx9C85p4sPN91ixerDoprG8T4k9gr8bABWFe81Jr1ZK",
  "key15": "5XXUi1fh1C56itwXM8ZMn9UD6wHu2EJaGsTEfg8vqMFkXwnCKQJK3QKB5Gztv7DhLLXG5Z2oVoEk4hLh4k4xCto4",
  "key16": "43ekzCwq8S62CBqT7sVzBpLiQsYTBcD8HnEm2MFtun9HPiyyAaFb3G1cSH7bkvpiTB2GreB8L3GcoAV6dzRNU62V",
  "key17": "oD3bWHXfqjevWVR5qGJLTevA3cxJHWweuxvVtzmHg69T9sGbSHLvuXvpaKGPmhA3C1x21mMGCh5AYw2DfBdLqYf",
  "key18": "4CxtChLvGJtih11pNEAntyx6Pr71ZHLBKC93UBM6sDaL4sQMqSgHUB39BSp9pZ4kx3Kb5buZQeuLgZvve2wCv7G6",
  "key19": "29frQ5qsAb9UmZ6LkYXbpMmhZmXiFzj1Q8R2ejnvRdhoZ474Yehn4KwpkEtc92PgERJ3uzAQfvyjkXWa73YP45DW",
  "key20": "4QUurmJ9XHYp8GQ3ghSJF5fZA5Qrnttkf2SEyi5Cm1L29hEtmXoqBJH28CHt6FXDM6qLhxjt1UYMoKFeFWn4wUe4",
  "key21": "47Y3tSnePVTUXRZVs32gEMTDQw6Bo2PhBzmh7FBf7k2vV1a76LQPj3TjJ8Z1ij1c4rDUamQxGMwogXWgf2c1EEsM",
  "key22": "2NorqK3YErPJyfeg5prDU1SUEPifnsotX2yombr1qUCoiAThtXhHmSNPEmrRuxScTYkixctQDZ6mLVF14xL2wKMR",
  "key23": "41FXwDWs1n89GNjqnEhuVa6YXaXJJPBhaxD88n23aXzsWQDeTBpvo5t1EdXuGXzqWaP1vb2nE8EmMqhNPjinZfJe",
  "key24": "4LBoPUpsEC81eyfFGP1xX5erVuWbG2iyATE8Ft8Y6TNYJxczUhDNkPdPdpE2EVTSkghMwL5de9kQW8hhUqjRLkLd"
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
