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
    "ov1LpqwmUvHJxRvqrUYNqRkhKuNfGoVxE3djK3G662DBGNLjNGGkwJw4vd5gk9CTdBpReZR1eAxn7NYJamEA8hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571gHNUuBshE994vupudXpDH2Rtv4fF2Gosg3TYeLbq3Dg6MJvZopgvkTxjudNLE2BApYrACHqdJcR3cXrzN4RuL",
  "key1": "2UfCWzSLpekxS8U8JyqVLJg7aNRag8hqogJgqhKQZvC15s3ZCXQjLEJ4JV6FDQxxyBMxaeX9hsxFEGzz5aCyNy7k",
  "key2": "2w8qkBqksiFh7vEsyqZuKFo2y4VntFt9eNpjcM138ho5PyGMRLwMmREoMA5ExrehTU6dcXW9DG4s3Ms8XsmGwGPv",
  "key3": "3xyEvcgMawBSjCF8FwMeR3mbzAU62zyQyi3wwVv2BfEaUxQTVJgNH6Ge5cmtoGoJpRnyN1PvoVf7qPWTxYGDsB4u",
  "key4": "4RmVC9JJnPgkRED7XkwGRywY8Kw9E6XXKoDJpK8Gheeru5EKwaJxb1G5CrfRLa1P11BHTd4H7rMfa7hPzp9MiLpZ",
  "key5": "5jUdieYJf8TMijBhHiEP9fkyNUtjrHt7g3VmBMTmvLrshu49TaUBj35oEN92LJ3X99oSScWKzaTdbXPXJaEy4KmD",
  "key6": "3b5fhkYHz5Y4euogrsCBjHP7C6UPmvKLhGAGT6cSDYhjKJofD5djs86yGnvh66QKbXRBKhR1SQDqbQqeGNoAZYVG",
  "key7": "we2NYcEejb9FcvAeEM7m6hoe6qUtGVy3ASpG9QUzNFoPwURnGpRN6DmU4P5aB7unaPxCSEAjVwZyqBhBeRWeU3X",
  "key8": "4ic2ACtY8EBwVLoPFBYhKKYi8Bv1tqQpprgEsh5WzbxYKafCVEoqTtPKV4pSE8voN4n2U7Y23R3QHifaDbG9VSBh",
  "key9": "5wRnEB1qkWjrMRMtcHK1a6cg2xEUn7JTEVYb1iWYvdnwfAJeb5VhJPuHPQB1jp1Bd1ybjDG7cjZvn7mt94qRQ34Q",
  "key10": "58RMw3wW1HkWwmUPys8djxBPnXh3VHxFZXTL1gFWBepFEgjgyoHV9SHDpiv7t6jUhPejGbmULVNhtbdp7ozh5HQU",
  "key11": "5dgN9rKzhLgQh9AzRHPqB1jPrbiU8kxcsvyCPe81W7DhYQDQxWyDjT6JcAkcBZt4pBhvvCCARNWYUHZByvfFx5ji",
  "key12": "65XcbRLLieYQjrNJtqxoxJAS6wGxi86hdZEqdXHqpvt6Pmu17Ep9L7focK2XgQ2c4DR5murCsXLzkwMQxnsDYwdj",
  "key13": "5X16L4AHcyYcjtKqkwjmrM32umn5VAg1ehEZwYoB1r4CeqK46HZ8WyGDgQkdZCsM1DXGeCQSRmDvCidt2FmmgdPZ",
  "key14": "2XuNmxmsWf9GBSerpUM9e3pnwLR8DdGdoXoGgtzX9QgqELXSDuBkPDC8J1Kf7dRbXR2gJXHSqqGCpXFmYJFFs9P6",
  "key15": "oiEjPpXgfA5N1f1KHh8E4yNtWuCQYJr5v94D7e4VdhDwaM8UtN2h2yasZsz7dny4S3XzZJTENurqqSkuUWyS826",
  "key16": "2SD8gJvQjFPjyKtPDuuTiThFxbhk1sYpS8JBrcsnaZ2zN5HT47nY6LAPEW9ir7hv5Qb48iFE8vGdLET3qXGBJuSf",
  "key17": "4zUpo45ft6DSSChHnPgFqUAZEvRrygDtGv51RUPFbWt2muEcQsMtaCTL8dEHWvDmFBkupZWQ2ZWdnyXeqXN7BXg9",
  "key18": "tei6SuFaZPxK1WMEnFektNciZmTMb3U2LACVXK15XD2TAE87pNUxBMuacWN7C2nuA6HBq5xqphsu4s64A4tNikh",
  "key19": "5tNs35SM9a6VcqgbYxEhTjrehfTDp7dHtbFbmPEn2Kd5jq7cUTY2Qy6otfTmG5Khcig2Fx2Y5kc6CbTWujV9iGtm",
  "key20": "4PaoZX5apWA9GdiFAf8TtzJH8XC9UrpggYdWrQZHsYqxCQNg1VST85zWqZeNnPwtAzCGdZypo7MqSVW4dH469kNF",
  "key21": "5W4UmUtZSztr1h8bss9SS7WvDvSgK4LeNWEkKQJVKyNpuPUF9nmqJfCYo6mwGma3fajJuU6WWd4c4Vqa8YtUJRuk",
  "key22": "2Jk64y8GKEP42M5vahp9ru6yfp7N7uwBiEKNbxTkUTAf8sWj7dihD6AbJTiVBVFk38StCyJu9dT2ZpQhzbt61BLH",
  "key23": "5AMjCAZSZiAhoqjqMzvMxwtpJTxo4dpDCbnrEzqTYsG4qx3YunwYGvL6HP2i31CnmnFsjqEHu1DrebkLgySeftkE",
  "key24": "3XaFWZZJvsVdM3uvDuRtiMbvP1ayg1HsULvsJCEUxxAYumkVv6SkSBa7epBnkzgLfc1YwQrtXsGGGVL4aocc41jg",
  "key25": "35QHVBWX7aL7k2X4y8pzzC7PSFREuMtmPUzBfxEnejVk9dvPeFCm4ajY9hMViNoxWcEdmAbVqSdG9TcJGwhxrUdA",
  "key26": "49ZhHsoX8SE3EvsTntTGtCctD5QruMsmKo2BxrF918THiNRVn1wwXZwiZ6SThLqpEEwp8fAkVRapfwN1pY9kPRvC",
  "key27": "2QfWghpG9pNHBtiQKJ2fCyiH5Q4Kocavv6413yeMp5Ab4PcjprghgaqkrpvMPoXEWceMNVPVgYunJ2S1EyJUTSNz",
  "key28": "5K2TAapaf2S4yqDrgigdCvfeJuAtM6evrv28BTcKLuTNxpa4LiufqyTZCA1ddYi1VNpJkDW4NrP7s41vadXJDSMc",
  "key29": "296iUqzvxpm1i4LGy5zNFH2yPtPA2uVzeBfCkWiudms5qnFcweHouwozMYmfRVwGfdpTaWV6WA32arzHKfztai6s",
  "key30": "4Rga3qnLtYnjJthnLkWU9UTK7NjAZXFBxe3SYmwxm8G1mE5V38vtfn3Kv1WkdSXHp42hbRVW5gkQLQYcZycxci15",
  "key31": "4MKYB578jEnQJX8opDSYxivWWPKSq1XF5nQ4hXJPn3nXvMG3wsA23QQx3aWFUXaJWfQyCYX5HGojTyxW8tRsmuWP",
  "key32": "4GSpX2iibDetekSp2u7WDgShi6pjFMXdfT8qCo7MVejFVTEnHhAictXugpoHK2Xn1jymBFK8gzs9WTB3iR3xXPjH",
  "key33": "2Zoa6nAHjwaRH2nWCMFAC6rZobQvLgv6DSBGpeAoPPz6iRFKmeFavyc2mokpHBtCRNASS7bKJzxDQUiKzkbKzmTe",
  "key34": "667wH4CQdvSSf4cPK6DndsktMTUDrS6Q7bNDhX5z86CgZ6fjwZy3DmYVHC4RZ3EEsiHs4m9xZqSvvb5CuGMNtjqb",
  "key35": "5PiRf9ad9i4j9cp3pptaGk4RB85iamMQUT52kAzFyC6pXpq2phKFHxrSFyYBHLrLGjv4wzTL3vmu7CtQG26aXi1Z",
  "key36": "3BeUuHYVBBjWuZZVLTZTd1hxRjnv6DFYaDU1jrbQe2DVbDNQ3fN3QUMLPBnD7QwpFB8hZbb3277g8sEvuwHMPRCY",
  "key37": "rYfWmxaURgAazaQC5siSS93ppxwurJMTQ63RcQHbUmXjo4RU4Hc3YNUuTbYkhfM8RMHnkDf8xoEVryNwyqU5snk",
  "key38": "FTo7PkHfFmaGmA7GvgZkdzfCL1WW2YzTaD5FVpmP3kfeRxjxrJwxhY2jxhuLRYF7kBZGq9hUcav2YmZYTiynRJK",
  "key39": "3FxL46XEzKqCQiH1RoeWTHZq45wSgqKh5h9Q7ZcdPEwG52FYf4bt8LDGjsk4zFrSkXe5HKVZyHSTwSKKXPyZ3Dna",
  "key40": "5G3Vj4hTexQQhVNL8Lrh38moqd4WYLRuabb3JemgDpUkNdjsVbTCFyxWBuaokpwgcDe6xmqeSkd9L9VVK41aHpYr",
  "key41": "3moUnsBH79JMST7USTL96X2nC1KNtVjp2DiKsF3LUvcFwRQdX4rAPNPCiDusCM4Safda9bpwaFyquB4mw8Jef2pJ",
  "key42": "3g7QtcMELLykr4u7usYdqMT4tk9W4nhKcqRnYmXWD56tTLivzo7rr2UW5pw8GASHmVr7j1S1r5QijUmZ9vjzpxQc",
  "key43": "59N1MSDDVCFW5wENiaK6d9ybhdYnFfPw6gFHZPG5Jps9AKhagYxGY7qdaCuz6iMmHc46XhNc2VWrWAqX1Zt4Aj7N",
  "key44": "2SEt7TEW5VTPYwu9WARJrgSmzP36rZ2vyWKR8JTm6EWK9FeRbKoDfA2WUCSKMeNzN8ZKMv33gBMvDKeo5xijaRLG",
  "key45": "5EeLn7jKrBoi63MCvLT6YVa9QpSgFvzB8s8Uc5kmNVbz4xYkExTTeeGdjSC8DQQN68DBzWuuYnKN8EbHCRtJrvzz"
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
