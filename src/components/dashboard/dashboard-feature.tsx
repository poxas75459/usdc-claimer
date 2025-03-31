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
    "4hzqr8toZtGnsrQQGvUV1dG18boBWzqWgutP1jtXg8GxnfrSVFZMombz5oSMQCKQwq6uqxTzKArARnNzYoDp8wxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFwyGFARzwqPvFrspYNP7oMN67bKcEu1WzDgfksqPmtXj48HcHCAssftZy1Ea5goa7KoTf6BGQP2rDNrqLa8fk",
  "key1": "4SDEGKf4LTY2psxQAp1NbfFetsUFBiH9R1SKPY6RuubSz3D3m6p5DkY7yxK4P6Jr9Teb9ceBdmUAF2mvhvDE6Rev",
  "key2": "5yksqd8VqoRMagsHaiYvYmSUJx3qWmQHysPfgu4FCiNdjx8bMfvhH8hAUSs3ZBWef9NbVkMe2X8uxVFxZNdu5aeL",
  "key3": "2yot2kY7o2i5KVSvjB25LUoTSksg4ZmA4YLzhGbbG7VbmEDJEpvVNpKTNoNNs6kHYeJ1yXhvLFHiZnaPEq4Q1WSN",
  "key4": "55LA9eycNHwDW589vKFNJptUiWm1udcZmxvStrtMauf2iJn6DfGQF5YppNmfKNddi3FvRbAYproNTErBykQCjcWP",
  "key5": "26iS3WRRRaWmVJpnggBAFHMu3ep6Z2rWSryZRPWwFNGbsxkPKMka6YFMjTXB1rEsFdiLQxMa3Qd7SqbsZQ3qAVsh",
  "key6": "3MTRhgiz1ibYdwi4B2dARtuomMujDn6kvaKcfgLBfaeRSxDPN4kZxAshtwNBdYoPnUZUmsuQLJr8QxGCQtVeQa2D",
  "key7": "3jKRyuoGtRQaxJ6pUCxGcnLK8YhM23LbMubvPqAxWgTnQhF6NmBCgPBiHPb6a1amhsnTHKDwGpn6XEe3C7vwsy61",
  "key8": "37Z4GxWmFufoRLJgyQ7NWQZZd6qgMk218eYpitKzoKasTkg22RfYp8VbCL7EzHe5tE6eRS7FPAx9iRnaTU8sJzqG",
  "key9": "4AAscZ9BBSQMCQYdAhaAE5xzoE2Yn4H2Rdda6Mnaf4CuEd9b2qeC2YARUhTJdn3u5Y5r93J2zUAFo3YRm664qcdx",
  "key10": "3Xo63pb8KwEhzG6LwyrYqiJbue8QJaRXEDpWLgZ72QmrWGFgUHoZcpdKZrFV7Joi7u7dAkFXZ6ep4XtqTohBFh52",
  "key11": "ABD9ST9VvhxLHJ3Nw6LqB7e17z2hp9uUN4qb5KMvbNhh6rRaQVbrDHb9YLV8mjGwnrEUE98imFHfKFo6UxZUEfy",
  "key12": "5csbE9xoZjquUNjjvabxYvXU1RwpjDF1gqjV1DFoLSs8qQUTyNS3jbgqUGTTjtWjNJxkbz8bRGtjABaUDkXvvXst",
  "key13": "2pX3JT4A3N4FV7xH8o9XRgbWPQJKYWWCs7Df6L4wbdyHVYmaVTyVz4WGh7GLbDvL2gkZDCs6ewvhzjMNgKThhJgJ",
  "key14": "5bNCMSwjBAF2GoxsM74WLdEvCTUhd99Re8Ym3a1bC8w2Sxi1pETisVnRmNXVG3mEyfJge891LTvAFCrG5kM1jxsW",
  "key15": "5TUGvu2xpYw6uy3kymFEXpS2V1psytgpZ7vcXhF3ve67PbTKurdDKRjexQ3dn6tNUXPGYHoCYuea36FeJELhRs4F",
  "key16": "P64zE4i1ZFAsMso29tyU1QPRjHHeVKXPXNzVk6fbs3Q8pRjkkiq96a3AhUMgfu6RWDE89PHWmdJZCA2WLDxYUde",
  "key17": "2D4wmYuLhsmSyF6E2hmDQdmRFH7df6Fnv3UECrPyCymDHp4k33SWXmKu2M7hhCbhRL43AfCKM819DmXMc42ybNyy",
  "key18": "2xhsx7Go84cZLBvn3NHtNzSSpLNAYioFzxKoR95XbgAZ7uqorgfvKQp1EdwvLaM63AxMdq5KDikX72CQoHkJPaKe",
  "key19": "3xW8WgkRUT9DavkMffFagfwrsTjrjEJ6G8qqeWqRBfvy2K4sVmi6f8a2eU3TPC1gXWQdmWmrbNWJGHMMTJY9hKt",
  "key20": "5QLQB9fKo1kNCo7ekE5aT4xy9VmeNyrR27PfyTsHXAvWmWxyzHfSqKTjc2yhcAFta9xMfedn7dfv6nqrPUdEb5ZS",
  "key21": "MCUBRsfyMYJjPieQDmLJ18PqHhZRBbGTGUtVYctY91K2dDSWsUymGobVUY5EbP15CGxnYyP8YtThof9tjQUZpBb",
  "key22": "3NPfUj4BwQWRGZmLm3Gh2Ti6kvceEDbmVRj8wRK6WpREFKf7MK2KHfw7s3qZx3oPPApfzy5HZbtBnfNRHhi9ig28",
  "key23": "2yFVPSKXZtrQBNHuZFhKrk2HAMrzS422ebZHU6JBZBXYzYAY8zo4Wsot5MK6NkucPvbDzf6bwtabfZnzQR3vp8QL",
  "key24": "5NgD8sD2s55AwP2aCQXXw77czav6QytxWCoRk7ir3nhNrkCXaDSRqPUVrPrvreyZsVxG1RNdXC1YKgCcAqr8MqHU",
  "key25": "2iGTnFBBrKxeSQyoEf5BgBEaEn68PyPJsBH1w5uTrBkrWe7n3nuLdACqgnZmfsj6LaLJYS8Lr3kVUFrxKYowGRv2",
  "key26": "4vDSab8RCLNjBQw4w8x79mc5inH37uKAmbK91KjcAqTeW4HMXNRut89yTKAzb3UWXVUAsydDF7S2w4BsuF4RPar2",
  "key27": "5eLzKm3jqkHBaHkTtF3zrGUgZB9nRCDNcJA64bxphN2EjTgfULfa5BnTsc2hchZ3mVHjiEL3MNwyhiPi3P1ttBLE",
  "key28": "5j7CxPzDzBQ63Z3PpL9ptKCCngmka1sEbWcfZ7xFTPMhFNB4M8YN9Vks8bdxGSeitrwcV5NyPAbmqUKvh4mRMGZq",
  "key29": "nhGdtyQHpCtERQpJsa6Vaabp7rZBFWmz22uGnKd1EEM7GYDGT724LvAy7S5MRqi3BMhRPmpJHu2pPREVTiiKV33",
  "key30": "9ZSBqiR86Pyft1145z3eGQJnSDVAc2AtEYoqrvfbm1UhxMhksdqHeL4sAS3DMsoaLxN24vt8zrnvJyec6Xqi3XK",
  "key31": "66RqvXNHvVCoJs6yqhNn8hi2Gk2fkvPsyuV6JuZKSGLxYo6e7ikcGNJWWRQifvnS6nRnYtkFNrr8XvcorSKgSfQW",
  "key32": "4VCzvd1vQEGVJ3SfcwrjMwqLCFEs7Xx6s9mGddKFP6QfomctgENGJWruWTcUHMAkobThjPpbk3rqHF6aW3Kd3oYq"
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
