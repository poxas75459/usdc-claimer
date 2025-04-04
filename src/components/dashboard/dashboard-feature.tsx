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
    "5A6UCByB553KfSK6BkTpkzTyKjYMnbQP8HMniZHumGxRyd5mNuGyTsUqFYDDkALtiSDMbaUX3q3AbKV8TD86kHyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPK384cGSie3BhT42UJVzLQCH9PDSe2XRys4D8jwKBBqZLTQ2CKTTL7khdn97mFpCD2Qr8bk11GVjFeW1dxhcaG",
  "key1": "82gWxRHSJXc7tpjcS1zwGG57SzJxM5h48yeYbXT4ZYqvyqrKM7i2XrMVyrk2HhN6pcisKmNy56pXdGgteGvLvSc",
  "key2": "4Dy9bWmb3AG8JoqqwLCUD2RUjWCxh4M8M13W29W1u3n6ERLToR5udpXr6UWMeDgFry68kCM5exS4iyPAJ1kavfHi",
  "key3": "EBu8azVg1iYHSaW9FnuUXWsx3f9qzvU7Xzp5nhzSDcj5Uzpnoqxp9VthQBZbm5TZPWFVmvp9E5Q6krJAD6aigma",
  "key4": "4Tk3KubuKUPKZCpD7Y45fAVj2e5NHcpoZ6ksTn4h7GL7S77n2XzoMrtWRciqojgheeojeheesvHyGjGeZuPm3RYs",
  "key5": "5b6Yspq6y2VLfpke2a9U2FT9Bt8mdhWMLfUrAzNnDscePnM3GVUDkNyYGybnwswaprF68AzB2z88egy9NZ1bwv9K",
  "key6": "5gMthDavrvF8LdE3J96Nr9iajm8kWPZCkJpvZuhAti2193VkRSWDt5GPTTFhFrDeG2mUqbMWdYhzLqEgGLPJSryZ",
  "key7": "g9mQqWLXVNxUfL26w35WedTJZWT2D1PNcXrVFpDWeoEXcSFM2AmnWQgMzUNZA4qQ6CdVvMnYQAmhDF8cA2Lqx7e",
  "key8": "5truidcEEhb9GVk3sQ3b6kh6KEZG1apQmAGhtUxwtftLiH6HBxHefjN9Sy7YogAa8jwBwzAKwSqn91HEWntAhyTt",
  "key9": "gcwAXAMSXHEebwaFbGbcoD4bVBBVp76eZGpdSBAH3UoffzoTRcMHHRLGtDFnkd4Dc48giKF7t2KgtsutvecTVEP",
  "key10": "2qZur4uomTo6DBjhiCWpx3xCp71j4MYtcfan5GGoX3LCPboMY2yEB4agBsnqEpgU8tt7x6diXHjawP7ykgNNgmt9",
  "key11": "42gHFBQ881DQvHpTPPdXmwkGSVbP3TcU4VUhcuqtYYHzWs7MJsLV11rLEt1oNtGVeE8RQBaN4571ijfeSYm8XVY7",
  "key12": "3cbZGqFwSAd7aWBYFuAMwcQfVau5tJBYuhbE9x1XU4wcAgnSLRdpgpAuhhdPG6G31NPjLz69VFqG8eJJUagWQ8VE",
  "key13": "27dR4f4CZZyeAjUbewbgEfisHZUpkDV3iBzUv6L8G6Zixuwcr5KJFiUoRj2b5fNSK9o4YqkgD5CAcXLCAxh2UCBe",
  "key14": "5EsKj1SxSeXiXkCTQLGVBkJULhzsgvYoJaXVqZKrjVqZr8zTfCAfj1mrBEck7S9sDryyE1WF8AaQg5Kb2iJnTMMr",
  "key15": "5zYCAVsSoUo4jVjbQSq5gKWiVDg2HdsNPqo9aYzQQzjMxzb2yyeCRmbmyR8JPPRpL8AjKVMpG1zauvNaJUbjwKni",
  "key16": "27qpqk47rFLyBdvk7S3CDiAqEVvfLJ2kyo8HRFX7rga9u8GwAPYaFfqBM2jAn4pg8fyRUdj83EaXxGQH2k5uYcbi",
  "key17": "5BjxwbqvpuaZfV2rydSPhw978Ry7esAeXK3mJSwiy93Yy5JsW8C3ikFPxFAu3MptTqf1MMSRrHu5M7Q7uXqtwZfR",
  "key18": "7mo6dR1hEoWfcZVEnhZnGRDPZbfcdcPbAExUi3uSgSsCKSwTMrAguem4SJKJbLWSgt5EHaEu6vRYoLF8zcQmR9S",
  "key19": "54CrTSVWkbLwqtuifGCBauSifULTqpPsqpQwEUR345szyQCjNYBxU7NnFvqQBvirsPSwjEduv41v2PCrX1WL6x4Z",
  "key20": "2onX9oseXnwWzqnC9AYSXNBCftJ9vz5fdZWmwVkS1XTah2vj47TYfJctyxdzo2wdaW6E9YxuGUu3x3jbvvcfCYSe",
  "key21": "HCfqQM1g44RUv19Yh2Um3k3FsDh2QQCKFKH1JWNXdcED7RbsCgtgrtsVTWaEsTqquScMaR7r9NZG4BhmX8MbdcB",
  "key22": "4A5aEkQQXPQ1xLEjUj2UbjaQ4sC2DbQBbfwpetm1MJmZJa44cE2pFvN56PinNHp4j4ndEHZXiJfAkeYectKEga4A",
  "key23": "nQwoAaf3AvrQp8QjnJq3kMVL5s5Q47v74mihXGjJTUt1RWKSQu8hg9K594gY2WtcgUrByhXdEGJBXLa4DFX7rJq",
  "key24": "53CwQBqYmcqwQPHNUj44cNS3Gi35UvG3im9JX68wBm45Pdi9XsSg9eFvH9wtTnmU95oDaBnUAR8AKid7EYU5ggPL",
  "key25": "5mGRACE2GXY2VigWXpGfRHBzYvQQpSpSsHmsH1L1qkxQvviiWAigdTzX4oeEMWK9bmmD8M9creP5jMJT576jy5j5",
  "key26": "21RhbGEpUdQ5SmxUbNUJPqAVJjGqGrvoJPS1wqiSdHTHHkHaVrC8NKJBt77eWje28opqhY4ENJBdDKswNcgTAbGk",
  "key27": "au8kxS8ffUYDxSghi9QqiHJgREs8G3jVefXv5Zf1bdDreE6MuQrkETkAoeo5uPbXTL79kMtj9bFAw7wUXphaBMC",
  "key28": "Rao9UxkxDiVdcAJxfhhXcP74shfK1dq8aiBVrM3aDyh1THzZFjj1eYwk1BTRgNd7yubTBNhoAnGj6HjETX4JTcu",
  "key29": "47S2Qdg6JGTRkF5BVxKLnrBeM8pCaLpWpa4Y8azPyG6XejbpW5aHp99q5kWQ25HJBiZ4xuxGR7xNYBFu5UnfVViy",
  "key30": "rWaaB5jwhbTQuovaujNLZj3dvSthw8t2Xq2hAEfgJ3f2C7jn7nAJUzjMjRCCkX5Ry1ewneQKSSGzGGhQtkzb2c5",
  "key31": "EK31z4yZUSTp1LgyDZmPmEpXDhLtap7eiB6eN8cQSGKftiZZ6Nd3A1KVnyxSpNXUyX5tRJwxAN1tQHFkPZoL77s",
  "key32": "5kMoQSxdmjSUsLpQMUDs3eS2q1UZXjyTNdBAe9FNKPFSyCdF7sSvPENk2duyjZBwJ7UgrRxQfaNyvUdV21QDqz8W",
  "key33": "XPBQem3j6CVdefZ9upBfjdFgFTTYDKLtdJ5fr2KpQkPVGgS9F2JZEG6XBE4QyVSJJzdStzcqvXp1Yi8kfV7tHCC"
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
