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
    "3vCxtri85boBaBRDveb3JfEeT39ggXyQu52yzT6MmtBNezUsaXXbXsH2G4EYaYkKHutigKvTNWJ1ToVRRQ4cA97a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AAq6WuCVZSKY5JvMuPyW8WNXnxTM1sGweb29S3PZiojKqzoJUUX8Fbxy9fQ9AJCRyd5wp2XSs4WUWU9ZwtFnQP",
  "key1": "5kbuQSD8wYnxMfk6jZEYpaLQC9AxaEKGj5T8QdtyXPzk4zsJm2LND34HpU6UovxvXD7tXLgr26rrUh4eA3tFBfFj",
  "key2": "5Kam7a7s3j1DgMRNhfvQwaguc3zd6NzD7MjA7WW2fJpP1P52wdY3ZviUcCUiMrdAfJziUkaJfY1LLBpYpAYoqxpZ",
  "key3": "4GWGGLbt45nKBwXJX6azZiVXk9DQ7dY6zSrfD7tM2T586mCKFRLGgPXNUcrVNwug436ziZkwX9gfAboeTSFQKXoH",
  "key4": "2PWfPsFvLZCzZpSxhDYh57FWsC9x1n7HrYz5xcirgLXcE3vWyq3CqQPHpRSo1arsHh4o5h5p8ksyHzCeNLFYAMHZ",
  "key5": "5WrwtAh6eJRJbKFPYHzrZuBq75A9T2tHwCbXsCuqZYQ5kZiUsYK8FEo4XwvJx9VB3GdGvJqyoihEZc8JMcAzQQ51",
  "key6": "WzULPLyVynoUhrN8AAqAdL2QUDHqN5sQaKRonH1CPn5xEYCiqpzcK842KsAYTtYyMwgu6JSZTwzvSKmQQzHnFaC",
  "key7": "3P8GSu1rh1H1XKPaQrYVcX5E1kD9zFEG7XZE3ehFZXbqunAfbLVVYqwcDLFSVfx2bMpsGJw27qoZwx2ZHzkFFqKU",
  "key8": "yHU5mkSjD3Hq1mVViNXeUPskdtvP4SQqw7DcHNp4JYg5Rw4MKZD6TTQXH2tBN8zyPN3WA9ymJA5VkWj2EA4EB8K",
  "key9": "4Ft2rDfudbgAvZpPUYwPdui4ceo6CE7iFSs75Ji7BbavEX3ncYmfgikR3qm11MLch6vT8yf4tZoPRE8xPje91Nv9",
  "key10": "4tB7Tsy5KQos9cUFVe33BT8XE7JsdiiCeJ6VTu5SUnGYn232uiH6eQ6MpcwXiM2KYGjKg4BrKrA51CaMU3R38ZX4",
  "key11": "kX9LL666T2SecGqF2F1HCTsStcxWasoyjP59ATwRZzPdC7MR5ZU8oWcBxiAKoACxBosytYYqhZuwodTgaUuWMvW",
  "key12": "4NvhprRi76cXAHQR7bmtKCHqYoUvGPVGPgKYJuVrdhio8g2emreUGvT59717VgyrWawYtimxrQjGHpBZ577kYyCF",
  "key13": "5YscG4UJsbcqEWYwg8XsnLP7QzEd6oBEdFcJsf9PvVrSbQAXMpQwSbCttoGbFpzVpCNnXSX9KjDae2Le57gKAzDh",
  "key14": "2HnETUPUidJjVMFidXHJKFDApK3x6uoZs6g7HLg4QXJ4mPpQSe1mmVR15AonXZ8q3dqyzCPFKgtMveU2a6NkZ7JJ",
  "key15": "3i15z28yJMtLWNnhRwoFg3gTbyGHjf9EAAbsAyAX6wtSuQNTjMXYqe8aG6pXvwFac8vS2e9Ge97EfGGkJRTeziBs",
  "key16": "Bb5XwbY3RmwNUJDKeeK7ZvsAfrVhJbCN9XDqWGxQ5yagzBceSPJPttKa65MM1T3FLCQj3wvAeg8fxgDHBeUZfE7",
  "key17": "626ioBhAxCPYZWrcAnBPrnyEzvooeihL9n8dmXATbTF6fZyWz44x6AdecSV5nq4VAFjEPsuZfPKZbWFXYV6E8pwh",
  "key18": "3HSzBFijpHQf5j1hRjnrXfiA2FzbiT7R6MfmajqfEUJ7HAMbubkaQDcJN7kyresi59nt5UMGsmL8t7Q3i2PgBHTx",
  "key19": "2Hqk9E8ysY87KeWoH3C8hLCFrU1u65aneXKDX6ruqFybg1H6MEvYgwPXg4GeBeetzXYsmVF6fsPHmJc4s8JSVs47",
  "key20": "2ychW5hfpnQp5BM6XoTNbfQojEYdiTvtz5UcpksYEqCvYUXnpGu8jN4Dx2CsvPJvQBZ76smQu2ACXr5cK58N7FaP",
  "key21": "QYfD6Um7jh3sYXC53cK97a89WNtg41rrJvpvKJ69tJp2sTB2FFNmxv6EXR5HxMWC1RWqa2S1x5p2novi9GbM75P",
  "key22": "5WqygWxLEgUEZ9V9aFkXBGFXDQg9bJiVuFdRgoQFK7dnuAQRVwzrmAypP7YnYH4KAmUX85qayHM6ZR3xYZ3rqRBj",
  "key23": "3Nfoa36hYghCpKM63XgKXgv9vaNAY1PccQgeZGPTgDyV6GuuUdeEwDXiZax4mwiuj9n9KNYDvP28sw1dzU1gDBPh",
  "key24": "4jojgynLe1TD2tavpfhZV6sQdQdLL4iks4LHQQvBBEG2T4KN6dmig26qXke2uSgechTiAh6bSgBAv6KCuGrR2ssa",
  "key25": "q6qyDAbQabQjQ9FALg4ZT196DsMbK19dkUP78M96eatfv6QxND1VKXTpWCZA8Zf3FSNnDggJcmEUheTnkxJqyvG",
  "key26": "KhF7j6sG7MYpvNkYpF6jxqrLLFhEUxt9F7DsASz7Mz9NVsu1b1FsfGnsXxjCW6YB2K7c3EP9NXvk6TC4xicRX5u",
  "key27": "4ANCXjkWsgN4pbTXQAHbwg2vxt7Cw91JPhSviGks94AeibCbpBK4Mm6rCGpNnJ3sL4ez6wb6PuejCUs13TLeQQGu",
  "key28": "7pumRjZ5BZPrv2F85rN4fDGEA2fMqYLwPqAUxfoDPpEF1N5X42HRxPnRYaobrgVeEmvJwEHVQVsLRDtAb2Xoxe2",
  "key29": "5PQC9cZXYhoX3ihdL9rKE17aBsXH21U4UpGhVZEnduthJZu27ZwNFyYDpwmRfJ7HnKQeZojNEeb2kfjpj6wCY1Ja",
  "key30": "66ED1EKSsqaxgx6ztThGcRFnMbZK5osjf8ELLEBiacbb9isDaYHnZvqBZf7tWDtCaQaZB9UBastyHPQLoWn6nWCR",
  "key31": "5GXTz712EtvFw1NsUT3iaoxyM5YuFHtCgwL4VyvMCMYSLQyHQNQYPc2nYoZK4ycvNAKNq2WpFK9TNTtVpbimAA4V",
  "key32": "2bdrvCBVrBRASrtKmTS5dqN3PdEFuV6e7k8CviZe4U6iUXbaL1jqNDgQWnepYtwhshdNjBbvPA5QeQoWX3Ajmtrq",
  "key33": "NuhhLpobpBMQa7C7VxCMFm5SBqLrEPZAxfxckEgmHRMdfFZYb9iM4VwtBN4tvHhQmo36QAoz4j1uZmFZoJtAGau",
  "key34": "Cec3NNLuVvCmMQ1DinrGT4FNQ6nNDwMbJbstAQKtHWE8VxoNphy2nzzgQ77QjP9ghUsk5993Qk2APUqpCbFsa1K",
  "key35": "mGmXhXCXax1JFA8vbvq6RuLqvQMnXj1JneQGmvhAHyhHuxiQxGaPPxA6zVSv8D5p2LvLD81868nSzwjvwh7CDBZ",
  "key36": "4Y6eogYsUFGbne84Wq6yJdns9UE5fC4VWobosVT5GAqLWxfnhw5tkuTTi1xhEFc3yr6igVB12n3U56QXWchaPbeo",
  "key37": "2spxs5a6fci8RMv1zXFWyh4FYHuXAub67VFv3WsJkqsRAWEnQqxUoxMJpyZhm3CFaPf9kKrKzQTJikuhKdVL2cgT",
  "key38": "f6K5Xu8QRXUx2L7z7dn3xxxmEFhKfxsj6AarAwUpqojKqgfB2Xd2uWGxTS1dLkzhQJmCoZgH7crG7Zttse6s8aC",
  "key39": "Q6BK4ZrtMvzt2sjkGn57Dsrdzh2hPq3hKEJu4H4A1Z7jcKnh4V63dZiBN9oA7navEWnDNsmwGc8PeFfwQkYvfQt",
  "key40": "BgE4k4UXqCw91pphe9YoaFGuCV3GiwjrYypXbZ9pzw1VcmX7sRD8dWz43ah64UKyUBdv6HCAgLVVpYwPQydo7Tw",
  "key41": "4xKoBRRPuBkLFSi49TKVAmXjxFZhSU7d8HNwoZJ77TinsUWcHS9LxZSGq6DWQiDx1HKemv9d9BwaxpyX5BM1nYe1",
  "key42": "3oX7seTq1o2ABCJs634vjMSNE5KdUnsW2vuW63StVH81ZBrQXDnUTdvZeqXz7BTkvdrBqVMVku1SHEAyhS37yunq",
  "key43": "5CzQBL5L1EhV6hVxHkoYhdhkrM21zAFw3T1ZdCAZpWT93irprXAkVpNF5LzWGCMNMfGTfFopSgnaj5wM68FQbGnK",
  "key44": "e3wkg7FbBSXqMJ88Xkw4Bq8g3L9WpNmrxbXe7yi3dcP8VJbGNozwR4d166zA2wZqzt1e5u3zH3X87ZvmFEWFoGR",
  "key45": "2gKVLH6cMvGPBqpuNgyWk82yyyEJphcTLon7sYCkDnGDYk29Gmjnpf6V9yW5wGUB25ifXmsn6crM4VMzXeJE4duK",
  "key46": "5NPFyqMe1WFVFeioENoz3g2bA57WUjEWiVBs2U7aBEF8duAMrTRAnt79shCUu6cALeeUAWyZnJyuUAR4reXHLfJZ",
  "key47": "3ZTbiqsLV8n6Eh7TYUfmQod77iptMH5DfLR5spTaheRPU18H6nZmS4XRzf4eH93Mf7GAuNK7BvaqUQMTKeR6TAXQ",
  "key48": "317euXBuebWVqYsow1zDTFqT1S5zGfUT539o9jtMBN6z3iEcH8vnQb7uVU7N1BvE25qxCuj1UjfGaJfqTDi4GUct",
  "key49": "5f1AsgNeHPhKFXD1oqNMFjQZ3F2wv83JqoP64xvgTDviM1GxfkZFeyGTCxYCpxwGFRVxPFX9ECJqbjFgtuZ1MNDr"
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
