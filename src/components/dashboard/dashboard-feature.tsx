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
    "qybXi7yFNEZLzuUaXw6ZzwJ28hVh5jgYWCftdtTiEGWnTuGdAtUewWa4JWrXetpoxCjx9842AGoMKqQ3QfLvbt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bvworGjyt7JftsbN2jtHJU6zRMrB6UDw1AbqaVfdv8kinTycrazKGKUn5VXdJifmtkBqVfcny5qQcvd8o9RtDv2",
  "key1": "habigUREs55Y3YkFXwRPkr1qzpgAHcQVjeGzzxM8FA3ugGYdZLfEQTrFVUHhdQNcBH7acCu9EUj1G7VSMKC1fPk",
  "key2": "3TXjPCeTq5bS3n2adTpx2ts7jUTPBEcvYVcb68DGWaLPtrXQwhd81THR5gDTNGQR3LP1BkNWQtb2LfzX2V7sQJqH",
  "key3": "g3TPAmFh9ZxLX8hzuDxDWRC92yhXhyVaS3ps75qtyZJoTR7Q74UPtfQguVnpUQqHUsg7LdkkxNqa34NJVGUYdzs",
  "key4": "5jBnCEDxfa8PGpNJBv8BsgVKzDCtqHvHoDioxUAU7tDzaorAHXDNDrQVfMoGNsRSZB5Pu3hXprzosY28GWeDJ4u9",
  "key5": "35tL3x7KPGiQ9tqcrcScQZVDRyWPfbmF75uRJnGsuAeyspX3cqR4CaNqFJHvSVS3iZ24boTM1dQzfjYen55Pqmi2",
  "key6": "5PNF2M2UEipLMtSvy1WSkEDVbAW9FykFddXYaVRpk8fjF9KBAy27LCbhWWiCozT9jPfyZRP7DoUUJNFKaf8EtkAK",
  "key7": "D6VD48qzqnbxZ4F9LnHY5L4ff8gFiErZE4pA1FYoV7vmxkSERCAwPkhq2Ft7By69Km5Gz67BZjPib6vR9mh2yk4",
  "key8": "5sxPje4HxNGhCy23gqyyu5MDLJ5K6Y12YpCYLTjLSrdYdm7zqrakz7Rohdfz73LXV791CVib86NMjwayrYU1XaUq",
  "key9": "tPp9voLzq65nMjRDJKkAMfDsBg6AH7YUqjdq4MptyoGq44rUpcsANWpuK1bgEMVij6C8CDw8TLWybrtpdWhK47V",
  "key10": "49bceky7GVLAack1KWkNLCjYd23r6awPVXTpZERogDtMbhrcWzfzAUup1QYPvRF9fUih5UQ4LPqMnrsCknFaRXUB",
  "key11": "5yxxeba3uDkXFi86eFySXNRY3o4DFvzRDi3LPZSWPQFVsSG1S8ZeKmGx2SSZNangWitYMtk5SBRvngheSFvZyANS",
  "key12": "4JsJWNmhvxQLFVdRFhKB2ukaWiehbpGP7F9LK9Sh6gdhmar5NxGHQcN7aamu1vEbifHyiQMtpC5DX4ePpgLnX7Bq",
  "key13": "62xsLa33oPdWFViSZT6cZiHfXgSrq8CeJF8SZSZcXwQjD2u5xUc5q1hcEvMd2vF1iMHAA21YLztPKVVxutciJBb5",
  "key14": "4pVZEWN7yEHzSi65furDxJUZQYMcjuUyUFGGD1hxtMrpvvXRnfsYo74oB3uKdfmw8e2DmybAPeY5vf4zceKAV5NX",
  "key15": "5gpRvhwrGVAyqAMxzXcyPChEErpXJKfhp4P4DSjDoEt8h9nkiB5APM92MEMfdbzNPyVJwFYFsrrpCNgCfSrgGtYd",
  "key16": "3ReuFu5gmxrhFZoEe5RRHjLn531uMGVBQKnUWqW9HLDZtVLZL8Evzi4eizuQKpz6892f8dzXomJisbAaVisKzqDG",
  "key17": "GVD9zHFjp2QkxCedV2bYbNjZcXoh9XigzM8rMvPa75zF6mr3pS5FWG8FZBctj6GaGVFoBbNmNdA3cFb9SCEK3x1",
  "key18": "4snq3Z98VYnNAQB9NEDu1THq94XJhZo5HDxFpB2TbhEshFjTuHxp23bWqELmsGwguY7qt1hL1CMyFvrrYpa8e2z4",
  "key19": "2Kq4PQSLhvAyGSke37TvNUimdsBpg1oahsXYXDJfTLWLGc1n53fu8r6SLgR98d9Cz5ymfmZof7XqzZcJcawdqj4V",
  "key20": "3wRycPziPUjTShBLBZj2uLnj2gGD8Veq1Tb8BXGicyQwXfZuBeCU2kdb3WzMrZomsPmXFb96QgTAKGiUStbv6spK",
  "key21": "2aUSM9zk61xtcgTwqtb1fJx6gAzWuSAxoF1EiWmJ7EwQiajsAaVvgbsi6k6c4vdKih7jfv7AYnHwN4Pt3aKMH6is",
  "key22": "2UysFUiqeRcS2p7a4gkbGwgbPzoejN6gf6LJWECwf8zbkJ4eXJcp9gLMmLuUgQPBnZsRCWx7JTbXtbYvedto8bP",
  "key23": "4goh3voNAiyApQCfonAKbWZ3pnpn46oehMtj8q4rRjvZ2CYVcnHSChfq5GNNkwdrDZqcmUCMkusyPDQKJgVzGrjd",
  "key24": "4GRmY6BNzRm64YkJAGTe2FvZhYA5rQ4PHveVTq3xkvZRXbWkDvP7ivMUdgFKcQNDigXTdgeAY25DvFvAxW3qcYaE"
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
