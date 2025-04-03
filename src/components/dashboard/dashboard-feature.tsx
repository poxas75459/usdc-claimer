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
    "4nbamiRFqxzB4ugxc6pm2h3uy27Zi7XaMN68woysNxJbbgvGDFxY7SntMzyCCpDxjPQvFbKWMHg6hk9QkjGNoCa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yZF3PuFyBged8wjGbQhbCoGr6F6xPebBRtRezHbD66pEie8Aa64FvFQAjLNun9cYD94y85MHhizZ58CR5vBx9JP",
  "key1": "27JNyFJfH8AcyBiManiSrA6xjo4Jpiw4nmKzgPxFVjF3k62RGSR2HENVYdyuXLPtUV1VkejTxRrR9axnTUEAML6h",
  "key2": "4M4SR7yriExaz8CFMykLj7Jq8tW69PhT5X3TD7vp6twwwTM7NDSisEa8SMqapB43TZiT2rvzjshucD18dqZfyRGC",
  "key3": "3wbRKCQe3JVMd2H4b6un8Xb3uomkdWWXDvNBaJZCPHJU6thStcrC7URFrj6XrnvxdakH8YXBLnBHfDfHk6yR9WPj",
  "key4": "2Gc9D9TTXqggTBSPgfZiNSEmyqjYAfqAq9cpiZ288Vp8oCQSiKDGHz6ZPwzPY8HXUXUQ5XdYbZ1mMEw7W4L1SfeY",
  "key5": "3SxfhZ5iQn3UJd6SNLdE1H7wPibaErPVbZs628sEHTKv6p9L7MvStk7rFSnAzJGEMnQa5BfNmNTJAuTQZBU2FkC5",
  "key6": "4cYcxHqDNiqXAGc59spUbPqtEvb9whYyq3nLTpAVBhd1pSetJ1Rnevb6iGyp5MyY44TgsfyH5UtF3ZmByNwyB2hL",
  "key7": "3zV28bnB4znHByYG9nCni3gaQV9tgp97oHN3svAGFroePia82kkzQ2562toweyFxAfCERhXqFRyAXmPU7m8t88eK",
  "key8": "5ekDEghGZJkWd8bf5kHan8FS8CKiF3PojCJUEnaC9kTdxneF5WJ3ngrKTbd6rM6MwoMMTHypQzUSAFFD3w21DvBa",
  "key9": "4MoiZg7bZppg27sUuXDtF3zx7RLigmqucQu86re5RzL1PHFuE79LAJ88v8FqtJCTBCw3FVSZdGmMTR4NcLyhCKMY",
  "key10": "5Am3hp2U3WFwuFv5a9ZvDBFXdA9vdP2uXJYYa5v63JsYmYWTSGmZtfWM2WtBVw86wvAToCnaaK2uF88RkyktTihy",
  "key11": "31UDAkiWey7YRfvqSXmaKSGFNRoNqi8CySjrQACftnVdA5gK7fBRdHBakJuHTKrTtg4SAkdZTT2d5nhnRfPyVicS",
  "key12": "46vfDVmXHPX97eciVCj4dGHsa6ntN2G6TbSgPgafPVVD3wvQPvsCBZPNhCoR88Yr23SjmcYWuq1fDHHMvpEvJRbX",
  "key13": "36qMirvHrb2ae7zKaNkTMnaEMbLzc6wDU6nS5AsRMNemvuKzecvLG6Qq7wysVfP8XudvJcs7eZ9SQ7gW5MAfM3Sz",
  "key14": "5S83Lexqx5rJvjVuzfidsdSfMTzAW3bq357znMZ3tWfJhmXSAAPVLv6q8k76rHs7Vn9sG67tEaBB27UbNecxY7EU",
  "key15": "4t915EaHji8gvwKQTgVxrMyFrXCgbYP4ySnV1Uk5uoPmELdUPwskKGt2kALJnYbRq2h7Ny8vA5V4gu4H6BkBaq5P",
  "key16": "4LYNqu2JNyMmNZBTWXZaAgWhvYtTug764AkDMZdXsD2VEL7y6rZ5JKsrwXoj5n5Ezcbap3GqxecGPeS5gzh9pvNf",
  "key17": "59bVHcT4U2cB7frZjMv1KNPKfxZF6pjAN6LPqnCipRN6L2RQ4QEzHsAUAfpepvRtGPjEi47PiqvpHyvm3jYMpP9G",
  "key18": "5p2G5xy4EcUB9QNR7b7SwV2HND7cBzPGu4kNatEkTyFbVC96V6MW5ek1oGMyV26ym2EjSzEnYrFi6cpaxgTtH7Vy",
  "key19": "G2KSuRpNjG4DRSPDpgpbZx1nQKt9aoY6qZLVGYU8KdEpvABpa6Dx7EKH9JRCkbsjzVWQtgriY8WGFVmDFHXdr47",
  "key20": "3wjAANL3F8vMiG3QtqxpPBt2CGfChLi4ZfbdPs1UZtsMwAPBTMLz1XwCQkg9m5uMmA2njeSjCm4RYuGCQu3iZNik",
  "key21": "4BMvQKVy4CfnkA2nKWoahbjWtFNJkPEtvkVYj5qRVWZ3GBREGeAkKN3dsmDVM4kKdLyQ6rf7ygL9sveLmbjJ8ZL2",
  "key22": "2oT6ayovhkHaKm4Czt2jaPJ4QznnTfS86M37Z2eeEx6LdoMjxozkaDjJNUGfHkpFYEvD7mW8Y9faXW6ji38bWZ93",
  "key23": "2zEH6HRH2LPixkp4iri9RHmDQzBhFn1PUgJWmAaboefPkfehWkK2ZvXA5aHHK6ymQCa7fjYTJzfj7S4wHdZZRKUr",
  "key24": "4f6XkKhS6iiw9bHvSG3aeaHDTKgefFDnaU6sMYsRE579DDuUjqHYTEzdr46o31cdqz4XKucfAu5gdXmM2bCEoy9E",
  "key25": "CPF5npVU6dgVDwBYgbb6D9X9TrWXWWmtnVKnfspHGjfopR5KF5YimuftyxfNm9N9bJXLfHviqsy8htkr681fLW4"
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
