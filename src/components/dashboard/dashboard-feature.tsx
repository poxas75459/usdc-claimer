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
    "5qoaWcVei5Bgu1FJ6CdsL1zbb5ByKPN9T3jr4p7ayGfaKw93gYkY3FnJuhkNcxvfZmTPQCNEudsj2u4MqqxzN67M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dfJkNP7V8LMyKfb3a7fxYS9BoizhgGXNJTRKKEM3DShJz8HgUtwbuadfZPYcT6memLUxWSdMu22GB69zfWYZa1t",
  "key1": "5oYfdBcXd3QJ4dkCd8DvZcSNQoaJHxRw5C9TdZ557YyEv3yYX18DnaY93xrrFfjJgf5o57iFbe72jRKHeZKsACJG",
  "key2": "2HP3U9PGGQR9bGxvhroWh1WPGB9dz21DkxLPHFGJnPxZQUFUwAFRjMps84QvSomhdBSCVF1e6peSQwxEPk4TwwwX",
  "key3": "u2oc7HdYEtxynn3bgmVVu1WhPZ2KCb2qC94cDUDvMUGwK5EMMZtduL4VJf2WkPSQas78no3C8epym65xemrjnTn",
  "key4": "ChKoYhcJ38ia3xGuBf4Egrv64mBSScwq4UJSGje71yFMXGFugHL9JoLQqpprhe5uQegCM7msEsDj8nz8F3Et3SY",
  "key5": "2x9c2YgT3mU4gGuguxV4uK6ftoMZb95m1BZ5GsKr4pJG11smT7JJLqhyo7pZGCrh3gjckDCVL73VZZNq3BLzeKWt",
  "key6": "2mtRmFiyBRc5Vo9bRvC2HvVvoVZsvyq5v7eTu4yoMNBg9nRogdMCFMm4P3CDVEsjyvRk4SUWhF2fugP9nRFcNVZv",
  "key7": "umotBC8vNxBkXPtgMvgm7xhR687zecCQhfyQ8X8VvAoGNEZrbzQUp2Ei237dXMbFBKeUdgtty75VQviFQHxNatj",
  "key8": "2vsDcxpexMuAPyLruRsBisA6PdFnfFPov64DWZ1JNWUThUQvdory6vtEXeYzJy1RJj3zviaKQKXffoaQ1hzjpJhY",
  "key9": "3nLjwYJGZFE12dbjvEdF5LY3ExeBgbD5JWm15fTnfzUpbeSs4tUjCdMpYz8tii2f1cwfozLBdbs4DTX3a55f4nRP",
  "key10": "2pXsFKx4W7KSxBv4gcUQBCKJDDr2E3tLNYvgpEcjM59ZBpnhbuWHcwWDVUraRQZA6TjWSafQytLJfD6Gc4e17G6V",
  "key11": "5RJbSXrkujWjvGKfweNTQcZBV8QhJn5jvTY4kcXE8xWdEkbwRGKAJuDR6dPq8Rzz6cq7pNMkksEQ7RbVmctHqe4f",
  "key12": "4xQDHmWdtEQKNtLtwUMoknVkanKjhGEx2qwq6i717jaEm9aKHSGkaYn1WuvXCsWz2oJ9qio9Eksyx3SHt2sKapSS",
  "key13": "2zvGtG3r7PnzuxjD7YNigZNypoWofmadxraKnowSjGSR7cYSGXqw4qsbH18s2B5B2xgTRXWnkMaBFSJGjMLbYW4c",
  "key14": "bmbqxoMQ4ZgMKetXWeebmWwGkpvMhKoUcR19fFHztkD2RdXDRxY1noPLpLgCAZN8ZSsjPXJ7GfuBkFxkzu2J1BS",
  "key15": "2n7kbs9GcuQ8X4jKTtRiPbd5Gw9LRCUXWuZvZSewrueZReE24cod3NyECTkWvgi5vnwpxzt3Xz66xJkiMyjR5KSX",
  "key16": "4RyqKojHyNRAWPdqy4inUFAinwkAb8RAawZhc7gXGUwF8H6LWK2X7tvGFmfFyYd9rCdgEk11mAsUAjbvHYRUYXgL",
  "key17": "4sXytE4VLkEBAZK3a2vXEx5Ve2LdwbbRQMnACEkN17Erzporegh3wD1T3BgwS643wjEKjJ4Cvd5cp3StDQAk2BT4",
  "key18": "2aPkGbKY97uJEiZjwtyLTmmd9K8SXy5otGEJoHKXY4a6rm4mvzA4BfXepe9sed7LuKQX3q9KUxxivXbb8VPvKvzN",
  "key19": "2LD5rgWsUAWq8CKWF9bkNXDCYzmb5NYLb5P6XS4XiiRgqij4vNFw9WkUpcZYnttyTQUkxpzvYdm9m59cLHrrfDXW",
  "key20": "TRoqYQfRALWKF6ZFwHkvujdGpB9KACg7qQBuQhMFZyu2Wmp1KMbaTAMStddGNMY3XgZWMdtet7zx4Jwm5uWFZTN",
  "key21": "4hzc9LuoTv5HqHWGzi2MnDTVwxFYBLqg9iXdysqnmBHGfELc3Q6nJnd83YGSwxwusJe3eLEhPhYh8AJt3yLb8rwu",
  "key22": "416Vj6bs2YaQF6TYoVai32Q3U6VkiM59bq21oUfec7uubaDZp7LtcZLA17sy1oVKaG5StpoLrqxkwAyDp45QP4Co",
  "key23": "kpLghrA19aJjuuWsTkn7x7T7FSbs1aL9xSFyh7EDePcojTEXt6xHUSnFgzo8EbpS138kkMgjkRsDWSYNMRCBp1h",
  "key24": "5ijK8J9r9Ry9MuC43zVXHFBhbhPn7E31QThBNDoS3seQ8qtphJ6RxDX6pXtRMS1wubWHBYBiViexFcWcHgwdTCbR",
  "key25": "5kzqvfPQTTFTEQ8AtqiiTs9WXPJA8WzVsLvVFdsnTfr5CmZagKXQepbGZhvt2Z4Qj1K5EjXm3WsJW9rvtXX9sw97",
  "key26": "2kLv8h1Eh8aZowcAgoW3v9uF2xjzG5rPX4Z1SjGyVoehyFAvpYkuuUuDeocpSUgKUixzSMGvCFiEuXUij7gKw6Cu",
  "key27": "2f8HT3Yg2vmbGY5sUkfjWELY3YzaX8PsiYVdxFcsk3Pa2W8oDv9uzjFE6Td6Hh1522JSvu5QjtN53WtfwC4DH6Ab",
  "key28": "4YzRFuHzFCP9NjJ1u6ZSuJLQ8wpTXP94LB85HdaXE27fkdbfQnjyPivVqZVT4k5xiGJCeXDWKHko4jcJnZNqjJVC",
  "key29": "4A1cgRhN6e35gse8XDHqGByh2hkHhj5TPMUkY7VggkksUFfaJeXC6xDQQhK2SFNnLonX4pskuUqSue1H4EgkSRSC",
  "key30": "2kyK5ACcHNTcZLRUbn4dj5Cp7YPRjXqWxzMJPpv14LTq21QuXfLe4tqYAsvpMVXTMVvjRYeeyNvKTg3N6bbnteC2",
  "key31": "GZMq4uFz1a9sQT67XZ2EVewKw1W42pk8tTx1N8PkUSy4HrBad3yUzT5jzNLmrRRBQHZ26oKnydB6pQEoEdSbZZa",
  "key32": "3euiLe8FbpuZ6cqTEtVUYAuTh2xKdPzP1eHFQcLCZ5dTkhMLYhf8hfh16AhQdRxrBQRtHPQCzTut8XSs5zuasaam",
  "key33": "2MQdBDev7R2F3LWA8CQMccLeF3PSQ29DfaRG64vLtW6amXiUc8xUnYVHiDPF8bYiqrQ1Tb13WysjTPivHK4UBE1P",
  "key34": "b9cCqxPdtQVZ3KZEkPmS6aHm6JXL6cFmMYMYZU5b4y5crTB3aNYrRwW81qZSgqKH4TSQtg8WwjQZgofDttitGgf",
  "key35": "4m8Rr8eoNZYMEXAd2YAWQXGcn4C89ZihABK6Cr7bBrgkYw9JBnbRPZsHgvHWyVU9pJz6V7nRQkDfznoRnSfeiXF2",
  "key36": "56jcW16JRMmBQDzSkhQJdn3vUMeSxB9WqhrMJcQGDaECZvLD7qP7zZoLsQwgGFHHy9eG38PrnD9oWh4Rksxkxwnq",
  "key37": "3ZjXWNsen3yU2jCpBCfr9QvdkZ2Q8fhW2uVEgp3dJdYhrL1dMhUUMzc9CHxWdKZfNdX5kDADktpTerXfiFk6itfp",
  "key38": "67Mo3FKhvUrsf58c92tFGQXg17GrJWUgowiBSPVAtYmGPYzgQLXVUWscYN6GyAYPT3zTT1kmVfyghZNtVNjYRdj9",
  "key39": "58mEkb8S9yxfyzoDDYMZ26w2suXJitmmjqVPaYxJUbiRXzPnLjWTv9GeChi8jjTZFT8LPRn5kWxtP5vRBa2Vsfyh",
  "key40": "2QBa4GFiaj9poR9JGq23e2J2oBUM4zXLgQ8pgYwCUCSb8dnUGjXCD67onKzKjuLuZq7pTwxxJHpRLXuga13BWUje"
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
