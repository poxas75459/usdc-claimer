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
    "4eHxXBCJZv5UQE7fYyJpS1qpAiVZmRpmufS33niwfCfin6hu1r5rD7oaVMso6c4j983GCrxKzUXJDJHQjyogyoSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZgrpTsAK4Bzd24HMdWwACy46mueR6Drfaha2QY4ZkPsKxQm3ck3MAMxFfZYVGKsrHGiqMngaLbs8xDNEBM7xUS",
  "key1": "3UptaHnzigk4wcGbnpUP7E5LH7bnYUXx64PLuGfvQv2x3cWejQG4e9a3HKWA4jN3Kfq9NFM57FNBrsS5gBxf41zE",
  "key2": "4BqEtqW93bHvQGkkR3KSZz9QPhAeNtpBMeAe6fMnmZzc95vHeg1uLw2yaiWwW4R7D2kjPyiwgNYBXRzaejpXKt8n",
  "key3": "LZHvX1wzdAQE8KnrTDn9VRQQEbZJvUsggULWbs3fWXPS2aSZfWx5vCKL1BHToQGxVNFgJT47FW7aAkFNWgHb3az",
  "key4": "4EGPRx751hdMkcZXBebx7Bsqge4tqvY6at9ze5TjamJktzUFqEG1hFfykT6xUrTKoTSZEMXK85kKnDGarfgNumiX",
  "key5": "3PDHth5ubRgdqSWEBzgdsTNgcBX3wYGsAHoqWivdMiGxLu6yrfjWNb14h7FGiNtZxK6EFu8UHzmcALJm2hn82wRA",
  "key6": "UgyT5H1owd2xqDy9CioifygkPzAjFMUWkk7dWsx1EzVGwCoq2XRp7R1TJW6TWsPmMS6H52RfTViyvVFWVXXAchG",
  "key7": "EKygiZAJaL99WEhzE3ftTNHPnqPFR7yUpTRQwGdd4sf2d3VVo54onyjiH5GTCNF57EUbCBxszzz3fH4TYfomGvZ",
  "key8": "47zNsbvuFjgemfHYJMQ5mr4gwjGpQdFPGM3MpE1kGzApn7MCnRqZFpEhtbQxSgZX5FoUqpkTHQovuqEAFdPDZcWe",
  "key9": "x9w1ojM5GLVeauQagA9WqS3Kd5WzdvRo8qEEK3v7SYNKKs3RrFmT7yZsorWe6CfpfQr7RghAH9dbaTWHczowaf3",
  "key10": "62wFbbx9KmnbmXyDcJKWNgpMNGMk1dvjBNQJR5RHLwWtR42NLwjAQpVkFkcGqaG3rGJdSgqQ7Nq8fUctQEB1xTam",
  "key11": "5tFvV31fKnrNZ8i9ULzGqD1jnmJoS9P5K1AyayoX14yPgVV4Svs8Qfv1oaAvme3VKnTxdNonD2zaSVtqyr1rJQ9G",
  "key12": "2Afr6RzQGty4unP3bX4LrFUraTrfJe66BvgC49442inQd6vLnuqCmnpP6KGRz2XUR8zQm4x4iEHLDFrxzAV2c7xQ",
  "key13": "axgVNjRGHdqcYYr6KLbG8ZbaNGT75xqZfxHkBLyQTYTrmJaA9PGmUmDKmbMK2CYC48YxCw7PAg7ryAbE96L68yQ",
  "key14": "4FusrtPAt9Gt5WrSxbBEVLFbcoXWqcTRcBWF95M2hFf9m9WNSiHgYM6WaesaDfmBPVAxXe9bCCa2K8LWaMLYtHNk",
  "key15": "26hzhFwc3iAyMPX2CzE4iUPGNNBKZAGkPYGXmd7THq7kBmE9SbZ5AhYeCgioPYGLidTDSdrrcLncp9yVRcso9DC1",
  "key16": "3hfg51vCJrEKp9RCTh3C71iC7DPkjsJDqtA4kNefCDmWA3Hs6f7b82ZMZzzdRiiJXQYyCH2Cnp5vqhpeKUfQ3tiR",
  "key17": "3D7zyU7NTz9uic3GyPx81WkKUKQwYResXfE7R58Hr72gfK43TZ98jncQaD8CQvGso72BxfFiuqf31TSUKnP8doqk",
  "key18": "2RTwg6ZYQUmNLnn9prHb9wJP3ints7zmonmbNnxpChwqBxwqATn5j3rUpaQaDYFU3jZS6epWwKDc9QTnSVoiwEms",
  "key19": "5m2vfcEwe3sGFwxUtcmmn9UoawLykUf4K3jb4Wr4YEK2He18ehiuS6p7AFN1BooB313dh72TTkR8HzhNiwAdiEVr",
  "key20": "4SyQvzVECkSnehCpchBSWECErW6Wg6zsV6uDRxkb3drLcdusb56rzTUMSGfnYtLghkrrEuAxxyj3DuBL8ssv3EX6",
  "key21": "2iiGREstYgov4XwKs1JNtBmwZMbEyDa8Ls7ARo5Aba5MuTdA8K8mefwUFwxdDghoTTQjvWHKqsnVzrkReaJL8b2B",
  "key22": "2WZF2SRoso7rh9EymENDpDXJt8QzBVT5FWcPFFNPzfKixgAHgquG6yfkYvkbh2nBcHiUVKhTKsvuPHpja19Ng85N",
  "key23": "2d9wCFFj76v71pLEFJiVZWp8AwyXVuQyZft2us5RKmpqH6np6au5QiRCYm3XumGuGyxe9ewXaLDWhoEgYbFN4qg7",
  "key24": "3635Du9KSa3XBW5spb8ur4LTR2RWJRdwm6HNQaCkeaXCnWsLdYEPYCLTeNw1HfSWaGtSYqdVmpoEnDPsSoLss1dg",
  "key25": "3bh9rdhTvpdyQMRi7BbfZaLfVXLMr3hVr5rSHh3YEG6EEX5qbz4RsKzqZpAzqzv4WDQzkRkTLsVoBMRdQpAAU68X",
  "key26": "4Sp2exxiAypxhHxkNiugNyUywMH3AVm6Hv3UgyXwcuGMYcP4DYygmeHeUrJx5Qbke5yz8Eo6ZAaVG2HV99mzxsia",
  "key27": "5b4cmHL9v7PVALNyyqNsedirqx7HdCGqASgSVFceNhC923e8xnhF9An5CN2EeGWzB3r59toXC3Am3MUSb5WaJ6yD",
  "key28": "54W6FQQ83WvxptY4f4mqjehJCgWuboemJzUVNTadSxm83NfkqgzZBfKwJT2CSABaZZ6hMbU8AsoekqBKZD9TjZyc"
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
