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
    "3uCobvDoJ6qYvWDq3geAoEnDqexQFY2MpS2HRtWqrNDkBvX8PMfxbSZUenuxaC4UvWcDoggoKmDtjZrZw6e19Gu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAcw76CYwvrnLN2grkafkc4A4KZbs2Za2ZMPKvWgHTnKVuRMNqRv77gLBxasgWKrqJxdpWJX2sjSuZd4wA1nrtp",
  "key1": "5VXpF4vDrW1qGgdd8QL5m6Q9pjG4xr1U9VHZiysgzktPWzdomTCtoQVTkSDncHsi3NaLf8hgkF7KFktv6eZ79Qqu",
  "key2": "5BjgJiG66UmPKpXQJV3BfPzfbzgXF9rBpfe591DCyxXzGB7spB4cU2okLusbuXa96SiYqhqzSnpS6pjHagj62ScR",
  "key3": "4yjwXfyBbLjiBN8ib9EHgt3VVdTpgGYr97soD8amRas9TiYSCZj22YgxAcrmxTaiUsV3jGf6UCF1baEo9z3yZQom",
  "key4": "iytop4eepiUgBEBAJRL3dRHSoAVj2Wa9i9h6LdJBRYmzo7aww9pkknzdCu1Vz6Dpr3yEeHwxSVv8vNzTednanM3",
  "key5": "fyLuhFBEBrWUKhemoxHUqcQo2MDSg8QWNoYFQo8Gy6TrsUUSkdNz69UVz84aNqqznZxY7AgQCxutPATGJt1WXAv",
  "key6": "3tuCu2WpKueKWPQrYUDQKgusqk1tNBwZi6Y44ssE2qpvKYVEb66JYRMqetxnCQhMA2x9M2YNhwMXWKgUhTjutPqX",
  "key7": "2rV2AjoF5nqwxfCo1c46yRL6KhGVPJjzHESg81ZBGS3z3JHvp3DYWmDBQGGpe7HcEnR8fh8rj4oie6D3bu5s2QAX",
  "key8": "54tNhsc3k2BqvqTmF9QhwWAue56AGN9UygVfWhTon5qyXEusn6X1rwoJAcXNwPqJk7cC1p14aJsbkmP3T18oKCER",
  "key9": "3buqaH8Vq3hZnhCmDsHqrdi4aodrfUJZVsA1cvTXnhha8sjzuHVwTrgi9BabegffU12yWyeK61GQ6y8CoK7TDHkB",
  "key10": "5HhQLZ6i1GipsL5MzSKgWE3LWESydpBDYWSdf76C1AAADNv5zyLxbvSu8xBFAYJnAEu4Pw48kNTXXotBdWMDuVU9",
  "key11": "531NjH9twnJtdQKdPrU9Gtizcd1QP2qLvKkEEBmGVK6gxcST8q6uPvwxtcgMW4hUPus1ENqmJgubPUt1rfkuYR7p",
  "key12": "4vUSLYwwFSErSoVLoUXhd3rPEpRWqsXrkwrMbTfhQV2q79AHbsVx5AkWaJMhAzHfZwUEyJPUGVJmNDjxjaM43HUB",
  "key13": "37xFXUnjdKMRhaxx9yDso4cgNw9qY9XkU7dD2HDsJapFMqjSmuNDZthnZP17kRVpzZUSJArNfczxhLiMU9zJVQja",
  "key14": "2kUJf5kJToCF2qCJbFNzkJxiHr7oBh9czA6dkJ93wYa9CUhdypPUxsmN7MHwXbyssaCCtQNyKNocCsmhZ9UEnfPs",
  "key15": "2T5yxxZbmaJTWwLUrotJVoZj6XEFgji79ku8gywFQ7mRdi5eUiixAXKzTeKJ4x8fyxe6F6qNJ2ufQt9kvEEru6wE",
  "key16": "5W8M1ygg3X6Uxn5sZv2Yjt6gsXxwXJpppdddkThzeP5bvFe8vAXAHDCoAEuErKknmfngaoXXvq4S4LP3M4fEXqHM",
  "key17": "4pZLfxRnjybGQVdmujMYu8guCiTgyP8kuGD2ozh5C9mDUHydSQgqeGK9vneHtJX5W9ms9M4GQ37V7zHbv4c2QM7C",
  "key18": "4tyWCGMdGbyzEsaT9xkPtzubTw2Tn9txbwuNUyhS1hA4YH872aheRvfiMdzAgob1Nd5WW1JikQP2zKkbxB5q7xeF",
  "key19": "RcBzZumKe37ZTc8ZGb3KELaetTCWvwG2Ma7cbgMwmUZj3orQnf187JwRdJh65CWTJePKt1D9M7yceUwykdUGZup",
  "key20": "38q6MQiwZnzmVnPytxAkuKPR9DuQUumjModVFHG1Z8NPiEvTgfgSueT7Ma9uJkhf7ixS3kFGnCJp93XrEck1D5oc",
  "key21": "4sqL5sLnkCAqvBbgMMUEvwY81eKGGmtyVcfshPzSQerKF4NFYbqiEq1tQ1tW3tebj2La3itryksDLpqNaFXBcL8p",
  "key22": "4ZR7dpU3fGZbkHxcVd1SZ9a75e6W6W2wjkgU17LVygYDdXateNewr1yJUWKnqPYjBuoDNqS9ktdxyPPRCMqCn6su",
  "key23": "3jbfWt9LDdPkefCLnEXzYLwW8qTXkrL7RMiULRmQgQZhbg9A5V278wj1uzyGUPBD8SLMG6TnmrcScAzouenVahvv",
  "key24": "5NyLEGnywijdH8WrCfoWW1cD2PJAsXSLJyJf8WGFKj8diS8dnJ2E4EXWsoJhUHQyAaVDQsHvG2pA5NBqUXZF8EcU",
  "key25": "4WCTLkcWFjw8sKDuX7yWbRDmfTFmtwagdb3wJZGDxPhM4FVyrSvXiPiLBJXU5S3VH41X3BkyMhZDiYUaMuApVQof",
  "key26": "37WqhRbgjoVVvyL7s4Vo9xUucxaMh9pA6DiDc9vdrdF1Josx4DjLTrTiAbyaQYieUe5zbSahLPPmydh1PuuxgiGM",
  "key27": "3FXkwgZeCqhKvC4HfNh1F4b9cfCoub3zy7BvbH8deoh2M3d7t3zXjkUuCd86YTLbjiaHhvM7TYyzDXXmakg6VbHL",
  "key28": "jxXeKNneMRB75rVb6PMZcRJxmCMJw1FR4BNxriuPWxGNQdH9W6noEpDEhtw2AGJz2y3FqECJ2rTWEvb8RCcnozT",
  "key29": "3HZmzh4MPCQV44K6D5JDhWEq36Bozrx2zjKniiqqghCXSNJbyMgYTvjmDkVMYs8dPuo1oTHAizkvsxmuWoFGZeSy",
  "key30": "6254zEnP4zLGZzY3bsty6PC5tgoQvmEJRPRGnXhe2UKfyckL3dMSoM39Fp492XknSGwD8AmKP1c3ojXpHqbxQ5PN",
  "key31": "4TSDQcQuEEQnkNbJ9Djj2g6xNGDN21hpoiX6JmMZdkfTSTkfDrWYxwd6rqwchFykFtetoZhMuToV7vN2groXYckK",
  "key32": "3aBPXoyvkfnGfHKqaeB1CKZbxv5TesgpgqzeN7Pqog8ftLmTnpGhebrZGBfVJjwY3y2iBykU2ny9bfVTZM2nMUrT",
  "key33": "KkLFHgJkqe77pAZycMGy44fAXmeLcD6uAKkqAo2QWQvDZ3Xv7bGTVHgGNFM3ca6u11XJqGYois575z1sMQbNoN1",
  "key34": "5u8qja7NRiKVMbdRqwWPGF9aJH5Ztz5L4tc4y9hZsgUJcbBdFLv7injaH9XkW7cKtMSGmjFKJ3SJjrEK3sYCLFfB",
  "key35": "5LcmM2RwSonwdFesDr5pRazSXJmJ1XXHChgMsFWsaRfWjTRRb3rXdxR7268F8CtqXjkxgxLgZKL1PRqVrqmq55T8",
  "key36": "4Hp8Q6CpcThvNWMPprJ7EJQ9ocWSoUFE8ro4m55FDhm9uCc9j8it8r9ydRbL9AZKZWU3gJjWk4Nr39HrHy8uVDQL",
  "key37": "5bTjwuDgYw2C3CKwgpJgXXmZstMi3wdU3KiK92p2uiMRfFbvMAPCopvWMFTxnvNSLEUJ1v9YrbvhHKGbUeKVo8X4",
  "key38": "5RE7qi6axS2CBghQNLjqddCFHiiCw1RYue8RB2c851fP6pE8oP8ufuTR8Y5GqUGdE3PZRSFpVEXHxj9MHbk6xU9u"
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
