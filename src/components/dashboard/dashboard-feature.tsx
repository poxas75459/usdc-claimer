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
    "2zDK9VJRMNQaSfG7CwJVjivvNCqye7K1hr9dKpYYVmYPpcwRonstxVrgBEt7wV6PZfgY9vF49n3D2Jeme19fS5y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwa4SrPo828FF18R3U2ea5dv9nHtJDYKzNLsYcs3PFWNcMs7FjpD1ph3Ug7iqtEpN5geWJYUcFZs21Nh7NE6jz5",
  "key1": "3XcKobw5iWDLKNvNJ4PTeKndiMDQCpsv7Dd6Dr7YQnUXiymzkCV7nSgvnUSJuDmhEpZiQtXdoJkKQtivAYZZwQPW",
  "key2": "cfMKvmEuZFGqfNTxveJ59ysvpS42CQwMzmNZyM6BgTyAVxTskigEpAGZCppe5kFMKtv1akCos8UJNGxpMFdUJK6",
  "key3": "36xfLLmjzNwBm2JhcyiHSCJYkRyHAGZt9FAziLqr5wx7pk2qNfzVxwf8R1b3gXiEzV7KLobNn3T8uccm1EbSKHt8",
  "key4": "2Rp6HUtjNV8DvcCpY6vt3zvDiYn66tCbxPsct1xs2Q8p7Y8i79iqnifjU2TX4DxiBRUKUAYMsPi15LMH94XXzdgR",
  "key5": "2uQoBPKXm2iZKVeooBJ8X2SNRmdPheXdEHW4ekCeGesAqHRvzKHZ3BvizJ8oEwZhAkivsEmCC2SwrWgxsn2frgZf",
  "key6": "39nPCLobCSV7QnWa1Vyhs3utC7nGAkc7YdjiVEnXL2AUfx5XcdajbW9Hv3wer1egcuahX2k8d6NenjHCGHri4pFk",
  "key7": "5NyXxxMNCCgbTufpzaTUaAvQcuWGFrUkZPJ133tmdjt8fWCqMni68VmH8jZYyPaFE9AXusydLvPUT1P6Ki18xKXF",
  "key8": "5ay2Qq4ZYjxmzVXUpQ8XAQzEc6MrUUxhkA4wnDEqy2gmjjkEAF8jVdwPRsNjFyUJLwCvJfPa23E1rHjSjcgPnFPM",
  "key9": "3pCreU7BDE9hMXbwRu3aUKqpMpH9TxC68WGoa2p4dCwrDkGmKPXArQHBmTZ6gzSoSozZLyd8NDqW8eesGeZPoegd",
  "key10": "63DJbBqYqcWieGWRR8XURHZqT9ztgwZA6CjgCLTjZcon9B9ZA8zfX7E595bLXdVfRm5QTh9RtsVc51AqZLvqzLDt",
  "key11": "2oRa9Rb5p8KraaHwVPBG8LMd9zogUkuaXE4rafqH6NQEZtRFy3pJkKuifPtTB9UYAWRrvMPAhJ3XEQkjemSsJNgj",
  "key12": "5gvk5MraZU9hxeuYnyntVKPPEe8an5ADvBHiDhBk9WTSshWBariEhs1nMwkteZPmDMFinLj4JfXLAcYknJzA7dkG",
  "key13": "4URkzJ4QACzzPMeXed4osvc1uRgsVT7ygSTE9YjKcd76HzYLZ1icJjeExke7SFtE5qLs26TbVt6bc5JQ4kT7r1Ss",
  "key14": "vEcctEmCP12WKH1eGbnT4Cip7vwuzHoDSnhVn8G31QABuYQvyVmJAMdmyfiFw1Z2EmeVbH5e47v6PS4yb18miNW",
  "key15": "p3iLi1q9J3e8XBz6CeHf82EZ26As7xF5RQNxzUnugDivpnSrasMCJj4a6AJZ3LtMUY9oCDxjS4rByfJoFLwMn9c",
  "key16": "49QMQRSkwXQ6R2K5HFk1sCe6SuNBDUT545iaUgAfW4sG6zhdC2uHrXRN4h3beCVbzxinHAXiWfJvze4myvJmAssy",
  "key17": "4Amn2WWdwQ5TVNWH7pdSS9mmfp6uYNSy15tLZCN4YGsLNhAhrziqABC8EuGTpjR3vXcj39Ewi4tEptNuXToGfCpx",
  "key18": "3syqjefhJgJjCWHwdD2YoM4BasDVLvTCFWT5adZoT18qDgvuKpXgDrcRyAYAmSSEkRaJ78Wud552YXNMcjFQM5uN",
  "key19": "4EfaYVVkQSq3ywugWND7f7jB6XdypfnbZpvzT645wNPyW3tF9XE1Tca4DAhA9qemvnx6qY5Fvx8As2X68T121H7m",
  "key20": "41ZRMMh7G9RoJwV6mjqe4nA1pL8ekW8gYVqMraZg8D9NzovexodRZFi7UazdTPSi3WSagNSjZU3ZveiJRGzQzBLe",
  "key21": "2z3vtxKMfRxxLi9Yqcp8FducgPoKmajUVgp1EjkCut4zcBnASxCiFLQ5Z9ABGc9KgZeLCaFVtPp12KkhZhCmKUZv",
  "key22": "66ac8xqMfKrnqz33zAGDTKvDUWNEYjj9TSYnQwQXPtAcwf62fHGgNGCbprDmZ2LcycJ72bZx9rXvmYQxLwvu6Y9e",
  "key23": "8s67GhGW77C2gXKsrgLN31Ch3DNH6x2MFFHd7LAtvU3wFzRxFiiVvtLfFghAfXyS16JTg7jLCKkcPCU2ZPXL1AA",
  "key24": "5KhRAXWyd1x5D5rjU6sWnd9DanW8QfaHTykbW1GYQXtRTjquEkaHjghWdhkEar7WNJHVpCBWz8YvNUobjsjcCW6D",
  "key25": "2TC3zT88X6T98HJtbnBWarJfnJ4WjWxBsdstXSEem5FtUXQWKydTwYUEm4He3ATJF6FM7hSazahSQrPHGB7VfdSc",
  "key26": "5wKs7aqEYB4AsLMGBNamyrjb49Nbv5TCLeviofcYbBw14Gf9qtp3oWPmwU7UShxynZgU3qSB5Bc272ZgMArNZXoy",
  "key27": "3bwMLEsZ24H6LvbkRU2hzKVFQYyWufHshkSj6DJuGpP3CXNLc2ev9o5BE8E1rBW8yrLho5nu1FeWeeoFTJwcv5sW",
  "key28": "3t6pAKwfeA1mbG5VFwRKUd6nD8FmMujJgsaQgceq9aZKtp3MwHHQ6ZArBKURjz3fJik9fv5bkExhYabjM7fRqK4o",
  "key29": "MSBggHfDLCTZk5v9rtV2pXxsicT55y1A1nEf9KX6bvEwtrw5AE78UknUJi5qx5b2FvQybX4dDuB4jgEvriUsmn8",
  "key30": "xDnLZdQd7qQcfRHgnwJYLZx7XWBqP6apGG8BjNvyDZv6WZiTqdvz5sd9g6J4c55EuRLopAJrSbu4vNCfod6Km8P",
  "key31": "27BdhDpGgFtkJZWFe5TSvEyW3XEPijjwj6MTokV6GswZneg8tpd8qk8nH4VgtegyTdSgYY5QmVnmXhVDdVLSEZ2A",
  "key32": "64KoNG8C9KPuiCm39a92hgepEjXkuXMfARZuvhNGQQAYyxZFmwBq4LeDDzw2dQk9npsUeaFNM5bZcX89GYn7m3b2",
  "key33": "tNBDmMvZQbrLWremMEu1cjvEhp4Bq7Y95nfyEAHZmPNbMiaJka455e3nHemEtsDUsPJzKG69zfd8gouGtnJBsM6",
  "key34": "5nHK7sebgc3eZeQo1iMLbiSGoNCxssBd3vyeP7uwDKEVBWTh6EbAFiU8J49JwdnJWjYVoaygMiYAqSUHxxFkfoVE",
  "key35": "5msHpSuc1sR27xt7ZGQbZD7P4JY3e7X6ZnAV6F4gvMDFFgzbqrunmKinrDLDwKeHvXC8RtFng6A1MPS1XXDG8c95",
  "key36": "2f955Bqcb2S7Bba1RUW7PhmY2nqPcDvuBYxa3QCbmQtqrWRAZabfy1fJut8c8tBqfS9vmi8X1PZcgwhVsKa9nRuB",
  "key37": "2JDBagTeAKLYZ1WXLmCLRMmEaYrcnkBtGFHaXWs3EAMoWG9MAXqybudKxGTFsx1JJuiYQcV7ReFWRYVgzy1CP1K5"
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
