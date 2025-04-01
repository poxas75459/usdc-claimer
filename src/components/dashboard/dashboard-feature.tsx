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
    "xysKh6uG7jU17t5AWmfwM74yjYpb6QHmUDwyZx3g4TmCuGHs2Fef1kPVorJiMM8MnomLfMptWbCnyHbefmZje9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WS4iSBaR3gJ5veXUVBRJHZGtRj9vcbNhUAeDMsNWh5zv49Xf6Pde6qEwyi7wVKa37TT3o5vTWsHMhYTXg93otpL",
  "key1": "8VPWc1HRoeNv5cS7cwjNKY47CKEcj7RkgwFAJqmFzY3c5rMnY7jtwjb4ZQZHV757KxviRbyPJYJt8DiFi6x82xY",
  "key2": "3WxUcspjv4U8BLwRAUvmTd1EvNw58dupuWUax79sRorchL1XKHsWQmQmRWnepCEgGEDxmyMPwv72vyuSiJGWrRYW",
  "key3": "9fDRrZUTaSxcNfxjMQGHaZaMrhty4rKciNfnPU4kZ8ZLpVxaqUmLmQ6i4ZYL6WvwsFEmVKQBRw3jqJaciJ6RUYY",
  "key4": "4fb6TgM2TE5rVmwB338iz8ExV1qQrV2wMvVuJTGVQbZTjhPZfpDLZZfwpWxvpAZPg4StdWWwE3se6kNkxCB4UQxM",
  "key5": "5xp5BU45iUywAGumGTtb6o2fKYmrPGEBggFuhi675wzsGXx2MziqWyZSRM6fm7KH5H1YHoL3pJEC9hBZyQbQ6nxM",
  "key6": "3BqfTUu9W4gG92BwKkEpg5Q5W85UHDbGqrkpz19PXTvywk4XaqQQjwfjCSEJGWNK3XykncPApVQ2qRi5CwDbUhgd",
  "key7": "5A1j8mC3ky4wdogFxreTxoSf5XL5ZssVuMXCokSGSujN8Ww36EP4jVSkSDufrjxDLpC24A99vqdoLDjgP5g899do",
  "key8": "3m5JjaNM4Bkv8XvKcCXvJupUCFNecjJMD1gJYAq7Qzt8TBWSU945w45ZG7f7JXuZkk8g6ajnixyTnejaWxDrEDe4",
  "key9": "bB3Lx5QoTCXu3VwbxyxoyCnRukFGqyKoUMQXNtehZVdsPhyW9HgDDnEgCZvS8nCbQWStNeFj845Ktdfer45S1a3",
  "key10": "5VSJmRQsartxbF7vLNMVvbYnbCaU8PZiXPtNzggMyZbPaXTt6tvuEV75AbAFxXcmR3JaFGPqMWUoWFJhA7uVLhzz",
  "key11": "4QkvVZwdHB3AfrD8c1gaJsMSu5nfNupHuL7zVEvB73AfTQunRLqFeANt9ewyuPqEiCcVLfCamnuNHWNYruXUvuWw",
  "key12": "54nQcJg8PVW9GhbF4mncfiFBMNdpJtZgihvqMkDnDPGkdGHybr6DMFTx7gwyKMASDy32piEzG1G2HYVxA6opm4Dk",
  "key13": "2HUSTG8JWWPGrf1tcoqUbb33qM4HwonYhyCoMCyfFeNeWPVmFHpASTNxcnUgbMonoGVjiRHa2HGKWExkRC5Y6VVg",
  "key14": "4LTCyu5od2guKwRK8f8FLbTxMzy4QFGFcfGHhevJ5mEv9EvV8BEwazqNMs941a6yesr3aUmG5PKavJ5Y1m4q7tCD",
  "key15": "4KiKcwkNDxGC6Ez3gTY6ajMw9jptnw3S59PEZseRT7cLMJzBR9PZtdzbs9o1fVUDQ2N6bFQ4712xXaiprFDv1kLy",
  "key16": "fta3E7RJXoZD9jZL1LRSCMoRZZxWJjt5Ld2zWd3WTjWhArn5ZQEvYCiVyQUEavFU9PkjUk3fvFeCSLDykLpYds7",
  "key17": "446rar3EoEBbc9qTXoE1njLk5GPZijH4uUairqcJh1GxQ8AK1Bisi54YL4GTVzvQALGqzTsmcVoxLCT14XAnAgxF",
  "key18": "2ZzvzW5tcG1L2JCebTDKRPAozChd92PBg2hCuz27Kxnp1Wcn61GBbKA1bVfStbGxMAmsjM783mnaRhdVxwtJu8ej",
  "key19": "4e3LbXpqWKVBDUywkVnMwHXwFRTTbbciGPj84LEb7FisfNaXLz8Qq7hoVJWseG7hg3uYbTBowtMbbiQroaH3FKhu",
  "key20": "4tHj7rPL9qURMvCQfZzYud3NxDPQABuTuChjSGzT27uijuxH3m342MTpYrUQR6x1e9zjwEeRsUrcfGRzPASYsTiU",
  "key21": "UUMcZ2DgBWrkY35pkyA5ZJVmCZtLPRhUA8Fh8zdfM3CbPzvE1QJdPDwdh71xqEuVLkCduTDcKuB2MHPQjrhGGZc",
  "key22": "41ZiVnJ2Fyce2cR2f8AG9ANgerqmKmMQrx9NbjF2zgFph1UMdWHoBNyGu7eq3MzcAGV5yMMNfDk278pcDqjV6EYr",
  "key23": "3dTttESk4GXkozBYA73sm4Vc7YswgcXGNf63umwSyqBJ5Twe8Nm8DsEjoTCqKURqYEUYETjhd7U5NPabZFUezGjh",
  "key24": "rXPLppK7nKskK5zQu2EwciBqaFHhQnVJiib3enRew3s5cbLCyoPihZHFQmGeyMb1a7pY84Y7b1qDitywGzy9ntt",
  "key25": "3qnnrytFbSo5haVwk9DY12yvFrosrovRRtgsB4Yx3GyDHawz9aQicXN63JfnU7RgfAzb3gcuNYFuRqMLtNxrm6Qh",
  "key26": "9ah7QamhCtagekgBxdV4hBsn1yBxF5trmbztdYevwVaGoK9xgmA3ysF1uTRZu8Evu5YQewgTponebgnaePCsGSw",
  "key27": "3bVSYg2vxE5RLbCkEFuiLg82NLPtwckj8hZMFTtmRsMQ3b8bQ9cT3sxnn8SgaiSTmLWDaGBkKrXwWSNhYVf8fy69",
  "key28": "5KA5fiT5HMxctxKT6MRQySmQQadkg24RknAnM9fxULkAd43aoVaY3CeHpcvkTAAXD9Nm3WvcHPcggfX8aipqWYyh",
  "key29": "4Mxn4D4Zmat9PXejWWEQc6sALPevJh5DJj4LJdWMK3ePzGhBUnQ5xrjyHYLXEzWg3Kp6mZDPPuPBe7eiXqsgarN5",
  "key30": "5FLz6FnteTDsRn1ZRVPWH558n1KMs3AEZN5gMu8zaTHgvxFaS24GheQGZdUrW1NGRoVRPgtZBKbKSLcQ1UWumnTf",
  "key31": "53VMcaa11rmDqq79E1HUBW3eEZyAnqPWPxF6ZeWEDMo7MbNTrVetrrNLYGc5EeCNo1oW22SyrWVyPGixv76ziRL7",
  "key32": "32KqQymgVjFXvchnMZYZYZmwSg4oHTHL4ZW4yiixSEjKP2Uomt3qwhtS48aFWAhWWDANxhMcf9dchMKPCqvytJhX",
  "key33": "2TyNLV5aAymh2WuFvaYXdzVtkJwUbU18pMaTficv9M7MyqbptKmtzV4ghFeoHqu5uxrztTX16yGZtQBSCcYjMeMR",
  "key34": "36ju6ZkXJzFKWdy8nJ6jJMUcHUGjJVF9qx6YtcDhXHnirh6VbBH88joYdxmFWf7v469rksUokWqnZN7dAuu4ZxQi",
  "key35": "4N61rNeh2MQShCgB89ruJu6GVizAkGhmBwqgAipfDqm22G9DANAsneVHnC4A9ehB88XAFQHN5PgiCf55N2eTLPmf",
  "key36": "5kCyS8JPpUDeeA2ckUyY1tVjSJhPXqpWe9D97nUjvZz9WfrEwBL9V4KfQyUGtpZuGv8Cvw2UVusMvU3MMoJ8GNQ4",
  "key37": "JBQt1zvjbjGMKsbfc7Hy7qJSVBJUerZAX4YoFkQs2paaEtigmW2WsZwZGwsoqz6Eakhoz7UuJaSnYsLcwHjmq2L",
  "key38": "3vRjGBkSAbNnv8QVnN7bnf96dH8TGpkjjdwB8WKzvXNMVCzto5nX7NiDSznfo9vLukUgw9kiT9ZXLB9E2ohXjvr8",
  "key39": "2ZSQh3aGrzVvUEDCiZA3dUSare2sdw1ApX5VvxM7b63WMF4hSjD6Nh9DbAvdgMW4x91pn6WjF9XVM46S6GiATQav",
  "key40": "3hi1EYv1t32WnEuRLLQqtSTRyTsg9uyVJqSZkox33BtEPZJqx4t3RqAYB6NcD8wySxjeDBRmW7aWBGGHA7scaWzd",
  "key41": "26emcbWdhTggCSYmdY475J6Z4JeY6GFMMJBjvUB6AkfME9cKPpVpBuFZU65KRFZTyeC4C6zExtXUc7S9tHU1EeQP"
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
