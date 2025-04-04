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
    "3Ag7RZWYkj3UcjCLMwfQ2HffGWe4YKXakB2qSQc8FP8XUv5DASF3wTkaLJn9rB8K5gb3t5gvvXsoUjiGScUe6kzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EsozJQiqvn2jHmjCatcuNXyNqQhcbkMX2mp2s6V4KGM16aj6h2CMpzvy1nxWFu5sJsdCJs8bPxEM57o1zbXaAjr",
  "key1": "2BsSePzxXo5wqVR3BRKtmbZJVYm64FSUB9keVBseaWzoAL95RJyWCCzHGR7t68Tvo21fLe4MCNt9TPokREScLpFX",
  "key2": "59SKf2jGVZY8yw7QZ2NmkHRk4k1sKgJPAj5ZA5o5VrQXk5AtKFfc3AwEMjG2RdsmmNbHPrugPm9bGpd7nwutpHT3",
  "key3": "hDzwwSwvhvRkN4gG1ZSsFvL26jP69qvTs3JuFB9rs9rjVmHRpzeARyHK1jGTdZNsF5W8LTRNHhxUfUQpg6VeoMt",
  "key4": "586vFQnkM5QwsMC1UPsok4CGvyme1s3A5dgX9SwtkZKFSCSwuB2PU2mVaMWyoQSksMvjRn3q3YnxsyWtgHmvsAZR",
  "key5": "4dNbviBSLTacidEYweYqQETJELRAvMdcF2mc2Av8V4n6FVgK3GuWqUbp15coaxtcBqx9tbcv8XdcmHZ73Q8Qhm2n",
  "key6": "59CG3mrKSu4eQy91doHbm73DT4XL6uPbYF7LD69anbe6CE3QRnyuQeUsrqUuCz5sx3xQPuFdyzQb4ZH6iCjRGxe7",
  "key7": "2WSnYG36VKiMFTMiLiv6TkRvMqAphhf3b1zg4WLD3ucd6B1H7jdj7NgDHf83Cno8V9cSgi196RGeeMb7XZM3GmB4",
  "key8": "4KXbns8RPotZJhRyWLcH9HughycaDKjH2ktzB1kULRkKou3m1nicQy2nf92F2Qub5em8Lh5oQSxSY9hL3oZ94AdU",
  "key9": "39aerXPqBhJnJqmQRrCUDTqYDNcxQbQ2LMWMEAnt6fTMboqJRZb4rTuyjcXSbQobYSqM8mbXy2Lu8azSUB9BHLH",
  "key10": "4TNuZcuSAQnW6LHB2jcNhXNrD1FfkGZw1sDoQkKheszkA9WyK1KcTs5K3wuVNzi8Dm7HA8xXdSdERm6VnEiC2F8d",
  "key11": "suMepdmFjY8LDmLevLE8z3vSVtSNM8UJj9YW7Qf4t459sZHg9yrpZGEzcKpmYtY7LQogCnGgQvV8wfLp2vkRaiV",
  "key12": "3jk4XmywE8r3aJ9pBbXjucyg458LM7Y8KGzWkn5HU651JN5CcaU8kAQ8uSQborKemdkhyVy9L1wVCvoLCi3yBtyx",
  "key13": "2967yzaEgQdnR12vLCzTk1kods6GAJxsbCvLCbeZ9dKWwGpHU4BSRTqdXvfccWX5ZU7LaqsJepxY1Y1L6LWxQieC",
  "key14": "4FN8NQJkDyUQHA6pkXrPobWcKqvxyosgUtebPKpDZhn2LebN49EVd1UVrRxAY7nR5tCcsyqiyoTEibNks5ajdaU6",
  "key15": "iUCDHCfEDS4qJnoYah6NY2uRjyZNpsZfKhBomP8cYKTbnHaXnTJZ77KNsTdzxfndX8WTFZ2EZi1AHHBiQmtMaEP",
  "key16": "5ignnieWexYRrN83YVBRLdrPm6HuqrVDPzH7jgqaVVXbjPZvmRPYMiQhT694LnFeYej77FLipe5ZayeBKsmgYKeE",
  "key17": "o8DjdrxEfeTqoRbkmQdWEFZv819S55NuFLBxij2gHjucuFC8mH6awu4mR1yT9mF8kziFnWFcb41xbXjwJdVpzNR",
  "key18": "385sTMw23hZ2qc7y66Vc7JfK7a5ah7sWBcZ3TrFU5BqJUHo1Ssm9rwH6z8CVpafL2Ws17omtH7GQpbabjmzv5E8j",
  "key19": "LfNKHNbfb28xfJK2hCm9HUcM1UBcKXZN54ynM8NUDG2eNaEv4vxZohuPySh4WNLN2b2S6ZyGwoihvAZMtdGoFcA",
  "key20": "VvFK6x1roApgmVjyxAzGsvHorZv511NgYo7sndjTNirjzNWZMuA4or4KotC9WiBGiKZytCaUHe9sJVQpBupbhoX",
  "key21": "pvKXbmSnFTwgJUg2LG7pNfEjoKrpshrC6BJnt8K7xfcwAFrCYhBy4JdcgPaa8ScLxrfJwvBTW5BYMvR6NCc2vNb",
  "key22": "4N4HLi56tqkSAV5b22eJmHTZhqB6RwGRxdU5jdjomA8KpCzg2Fez6MvS1jYrofNKS9hbUnh6pmKEpws9Jx7RSwDj",
  "key23": "3rMc9dqX4aKUuQ3DmxYpwTfH8Tp9beW65VZTdDQEbrLEguGoaPNvbcv9uWYBY5ePzXnDuaSLVUxvM6xLWhyKNhyc",
  "key24": "3WaBHyoBmkBQMDUoHPCEAkv5bhcFs1T93NiDaCGfXMCkbMxRWZUMMgzQxTQwRL9FZKP8EjXEi1P3UufaoQ6VtSAn",
  "key25": "AbokuDN82HRpYcChhtXnWV2G4kQ5hZwLcYyHHHTXepsfDgAd874mBjwVREGgf8LxJMmq3fdNJghpuhxh1aBS6VP",
  "key26": "YZm7Vw92bZAUbtKTia7FuUbWFwdnNxirNs1qMgdoADmouPt6mgbFRhrBz8Cf6BCGaGaH8wMPjyBbuVQUznNn8sE",
  "key27": "3N1XWyLbWURQtUXgNQSecbKerjimzBngw4uRCJWkbMuAfrXgJFkAJrobzyutKUohTFrYeuNyqrCK2BTMAk7QFBJF",
  "key28": "3JzoBSpUAp1ASzvBXX7g8bLeerd6gZiJ76bRomps3yq4PiMmaiqwPtHzfm2kY5b7W96rxpcuk1N3aRssGPK73XVq",
  "key29": "2reMFTkDpDAomuob5cWZWoZBz6tnxEqgRPYyuXZ56JurUotM4ByxUsbewdMw4osaiygv7HDRGGfmLcQVk6b6mxqq",
  "key30": "25VtUJhs7mBziLvsTUG9YdWyBRwb9Ji1bask8SqfR7JPDnN2uikjt6tAp17t8DPv41yRui8mdv85t9ERpjjuai9H",
  "key31": "5vVsh3Kr5EDHyzUthY6DetKV4YunWbgcjK55GZLuoeygkLMcMhyeqnCBH4vWX4ohNPFh5bUSGu3Dc4HsFoB8WhFq",
  "key32": "5rr2LtUwv4KpYnKhvTkx2MYEtSbVMjSj6JYRAe1CzVA99eytSMH8hdX71Mc8hXrpUMHBm383hkowgd256LJv8fx6",
  "key33": "4ixUeGoNqp3i6C1s6hS4L6baVFDNViYe6mkEtxKfhBaRw8bfexr34QnRVVGiVpfiBdqi92hUP5yknv42EoyeJBfu",
  "key34": "5KEiyqqiumVvK1NsBhoznUE9ztZz1sq9HgDYX3kg9YNqoELZjJELGMJ8wBzUgDFJgQbcLDuuJLJ1oVPEtZ8hvUHh",
  "key35": "236Z5dGRagyXRPA8euvcjALzvYMtiwNV2sVFQNg7RkVZuQ4R5pSBmxx9rYXgddKd1BgK19tRuZJ6s1iKAnWUoxAz",
  "key36": "sT2sprS2ocGLcaqLcRjQJ3jDjkUee49ZEXjZUhArYQWuQXWJYkG1oiuQGZAkHc6gGYWpt4j1RNQgN7Rh9az5bSE",
  "key37": "2pD1s3iiiwAoKWRo6ek5Vghd9HSaeLiJRKSwmhc46BafYbFsFn6Q9Fu4avw1K1Vuw6HuzjrZoMaE4pqPjGb6MQDg",
  "key38": "4En5rXskJzNDDMZpKPpRgXQmW9W1yTTKnmnyKwPRXVBNCX8zHbjBcTwHAy2PCFw6uSSvmnYVQynDcA1TdUjdP4WH",
  "key39": "3oMHdarBmPdp3qYUoci8S7YV7tbbgbbq68ajG4Z99PYZYG2zWyz5ASgDAVaBz7HqdJiQvJMvLTVKMxr6Yet1WcG1",
  "key40": "23c8hgeAAKmWmggHgvu3EPNztorUgYiASaoAwySnANTcXkYGm1Dz4RGXx3Ae615c3RdjXAp4XhHomrhe9JEssuAq",
  "key41": "B4sTEbJij4AXDkGtVF5SCjYB5yVWF17KVvkyow52TRXCwjnSL6h59VSFjEL6qrWYS2UVRaqafn2FTzYdu41ZqUC"
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
