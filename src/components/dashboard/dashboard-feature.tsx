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
    "5aX5fAv3PkM2sQh8ATH9zxWETayC1peBGMT8EL7ZHfEwVY6DY37jTFsnCVFNqEqbtR6Y8NGpDvfMXhXVKuQkpRhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixbwA3VaMGgvg6uDYpbTYgTgFAitfTQYSfdLwP2fAgpYnLtWcBwqfXH1RaSbzd5puVqrCHBNZVDh9ZfcTBgHQVM",
  "key1": "5dSsFZwBecDRX2w4UNTCP7fy7NPM9rgsnAwsGDSARPwSW4GG5tgAEsyNEfx6GoRZ2mEDA96LXbHoPkTHKQLx9Kb5",
  "key2": "4E9YGU5gLbBiXcjQbpG1fSXFMuR7oLSNRiyma4o6ht2z7UAuk7RS7cE7JczUccN3xDUKiagaMemb9tLVW11dN5HL",
  "key3": "3Py9PHMmQSykfQSeFoq2B8AVKyLm8zwikV3hEeQij1aVWK9GSjvLGtnmf2oWFYQxjrBH7V9g9ejyKGHZXdVvTLV7",
  "key4": "5cbkWxTvafzhP9hEyGpq1z6ZiTqYCotdjbJe7sipCr171V1yRbwp9BdGdGnuJ1jcnFVGAqwJuysmEY4HEgnUNcnQ",
  "key5": "62CEiUiyMg7SWdtCDfb2DGsigBcEgbVpy7ABfVoXYGyKVQHP2WxCxFNDzzQizbZu8Qq5yPn854RmQB71DfPDvcc3",
  "key6": "4WDhzBxkmJudb2qRw8GtNmmX8zPAoQsJBXFr8tCApkqJE8FUP1489b5DeVaP6895ZCFrxjd1B1faGJw2PoQudEYs",
  "key7": "4FUt7Cv8W9fGhMWMqXrY1dNwoqVsHLFBUWXdgKL2Rsi1yycfWUy8orgEW1xLM2nAqZk5SxVtMxtzQuhSCD6WAJgz",
  "key8": "3kRzDM2G1XkvhSfmKGeNqe4grg4ekRMcCd2nA7swbejPtBYsV6qqY7js7FYrmP4QRweSKSi4hj23xE8rH2YHJkuB",
  "key9": "4UifjFMg6NRfoq5XN6rhjadhKCYrPZUMMUiJKcHc3uiGhvUR1z1FmiSmJCTXgtxuPp66rCbNTecDuckdrU619CfL",
  "key10": "4vdugu6KHJtBxcw6Ew7mdaRKJEvEEPtfFq1L1CX7pwnCxBDtDTuVJ9A71Kkv4vpw65HhMaWvpvHzyZC2R5Sf8HVa",
  "key11": "4N1S1YJ416APPYahDPnMEEo2e6Y8LBLSBmfyrqnWSiJQNS3XfE9nWYFySQdmcgfmaPQRgpXgkiAUkvxo7k3UV7nn",
  "key12": "66XGUWxBAceXKWSR4XxvPAyfqrHegAqQjvJ2G8EGN6cK4rYqNw7nyK1fQwKk1R11PqjRkrc5gcFX7HNACzihKmEr",
  "key13": "3cbHd9voULJNueTyDJ7rUAU87wEZGFKtH8241sHgJ7wFnTrvkS69xZcGAZ7jsFPGKx7z6TSzsP4pysKTMrXYyHYL",
  "key14": "4pKfa6Dm738rELcgzHEjoP6YFo1sUMijLhLs5gqoSNyH5HRk9fMbs5WLvCA5D73YpYbCSKmsiKSFfMdwfmJ6nPXv",
  "key15": "497ZzNN7nqgEtQiAG7fUvffV4zuZTgA7jd3261vQgsuNAVWhdzbTB2phSsMXeBzm1FenEYMyKZkiTGtCd1hymSpe",
  "key16": "4GvouQeRvXL87biNyMsyfcuZZekSxt4GgP2BSUkG6KMrKHd5tP84bqQTKaetnyXjPeMBTS3z9UoJy1mkZ8U3i3WN",
  "key17": "3fBXB9BzRvqYir2D8N24K324Wn2uj4ZfM7sTfL8LkRLMkX5tD6eoF9JeRoB1QDTfakcyPSGU3e7QVcPDBaDHCjzg",
  "key18": "3SukwsYi2kbVcBFQGpauDvSmyK3X6w2LCYJvoCBh3QmGDF121U1u1mKuZm36zKH9iZJTcHDSVDVVEy9kYfsZEHrr",
  "key19": "41CKQaNbkuTtVu6UxKCuS8b4KzN19NtJkFsvJuRx6tSjujnZFyQwAAzk64weucfTCEdZt1mXWL4k9KhTLDvTvXPB",
  "key20": "45druSZSnr4YKYToF11B1iofz4M6zwUh7ES5aZXoQjqw8DxBQihPr5PbZfvzU4FvRDFndQUoxbCAtiBj3YApG7Cb",
  "key21": "33PMkfqWKy5sDaXr2uLuFabD91FFqCR6yRZjUb9QogsW9k4Z2ekidra9H4eyjHxZHydZ2yZsBvwaJz9J7m2yYmCd",
  "key22": "2zAjsTDgxYFJrtqwdcsDMDJ3FUjDft1h9hF97bt9aYRQqV4qdkTHCog4ruXmNsrLPDRRZtmVtfzfDxHmcCr1Ak5q",
  "key23": "5pskzYGHeKhE1uRTYeQKAznreCkUQ1cYCJQCBbRu7ySLFCAGgorP6yU9Yt7pgEjZkrDuFpsx3azq4ofV5usGwt8e",
  "key24": "3YYYUBhqMK92wWgGivxTZEKtxD8fqo1JfB8tBCTqJfs4AzJkfmhCd82BhiA7HaETBvGmMqbc7midWXtWFwtCgYRz",
  "key25": "sUk71Tx2VinF4P585pi9yo2aZpxa5J2o7AcwPY4CbPreMtu5mBaesE8eBJJrAwyVU2xPKS12SKXHDq6T7ytqKjf",
  "key26": "4Dv3pH8QhesYLzRUp9Jur1wysvhkLWjShGhBN1Hi3jgLeAq8A91BFstLVyuvaYTS7t11NH8ECCn4YHvJGXuhk59h",
  "key27": "2VRXbQKSw5DBuicY2zJ2dUjbVFD4GTYhTVB7wrW1z8wvMYRza5T4EqBfVYJvZordWA7fRyayv5KPoyPU3631bKi",
  "key28": "3KJrzQQF7ZKM8xaFGxSXBcTeBoc3ZL1pu3janpCuLAHGPU8WapXUDguhg799hcDSZiskDyjcLRjCMtuLgJH4pQRe",
  "key29": "31hJfdaBqczNegF8iv56hx5L7QkNBsvXuQgTkoerd4uZt1L4X2kwYwqKJdgjhyQsG95t4e7uxcsa1HqRVX9PAHna",
  "key30": "HeqQ3Zyv4mrXYWkio9vZFAFjAMm7BSH6VZM1FFB2hhB4sVkPYbggc37uTjy6XP1w8wJiufu5BdBD6vmWDWwt5Ff",
  "key31": "5QwYLk7K1apS8yitBQMQdcjN1ErpwShXgb5VraYWXrwFBMZ5xzxNKFiPj1RbKsY8HHiWqgivPCjKn8zMmoBqGkwA",
  "key32": "59sJhKdFrwnQ2nKHNJuq2pvWUxbSc4vXG3gNhfUT9QhdVy5D9DwfSGS1dmUSYnfEPY8nw9boCtPqENNuEVwiUH2z",
  "key33": "5x1BLT4Z7Gnuc9oQq8uX1BiRi8tEtE8UHjEdW6Pe8AUkxQmA6DC4G7efDsrPELM1DiJgGBFFckiuMcrmp1c2v72W",
  "key34": "4R5jwNALz1b6PeMuKoLGh2EvS3hxJaP5GJDTfHKtNHuwciXVDXGXDQEoAwfseaHKxgEVHLxx7YSauQpkT8kLhgah",
  "key35": "3BGtog5ywAttC9VkNxvp7u6ErYY3qSTjbphCC3TzTxixp8Y383Pk7XBaT5e9BR9F6xke7njLjUvdUUgnv2jytA2W",
  "key36": "58AwdFyoBKAr7iiynoFqAxrfxKUio1hc6UPit4t7269eF2WocjemoRppNaGvJxx1ehfZ9iTRWVFJyQa9pMnEtw3Z",
  "key37": "3kxwxdFnSxVwSEBz3XKJAwcSe1UJEYZahf4qNp4F4gJuT5rxyroQqmvb9HhA5Aann4Wzcj11Tbg4XcPMzmQyQSY7",
  "key38": "eKmujYNfiLCGu2UitRcFkWycu3g2M348HMaCZwKWnGbyqvaJLdg6NCw169513sBZb4qcpVhz3f35cpCadxzYQUK",
  "key39": "2EM3vkW5666gwUd3XBfQyQCkU5VmndQGcEwPNrcAU5KyH7bbKD8RfuGMYRzCFvpkTzpcToo7gtjdXSS5yqAY3ugq",
  "key40": "5KvV5AgNCvDeSc3C3N6jgknhdJAfGL32XsyZwLaxy7iwqqfdNvormxiUJGDB4chQaPjqfSuktB6v6EPy8BUbTZfs",
  "key41": "4oH6m6oQ4BY5HR6sh2ocXPK2SDUPoXmcTbArEyp5PirRKo4EDkehyMC1PXzA1oKeR1TXmwdnHUfrknSZDrpDwAZ7",
  "key42": "5qJVWAEtqmHSenrc1p8TX21UaH7Mk1SXKY8VeQ4BCAGAfSzmUYCx6AJ58g13WYYYGnPsFEQ2ox3nbxSBcjBcrwYL",
  "key43": "5PrcVNDFqmjyA4MSZTu4GZrkLc9YxRuxQEmAeMVnWXKufB7jKbzaU7ZPz5nXuRV46eHRSbmyYkZDEjtDnC2hif9R",
  "key44": "VwVj8tExsBEvcxDa1FT74KNDgUTGuCmeYtVWHFEbckhBzUGnmgssfAxy2GUeyqsakBBZ9VEWxTu5riZVF4QQyfD",
  "key45": "3mwPJLWJhrV5Y63sD1BL8Lxm66jUHfo96XED4YkFUbfmjGc25p7p1cqAFAdEixmRcjrW58JH2NZSFUegtN7pDZMd",
  "key46": "3RqktattgCCPtueJ7KRLeeBCnY4kRtgx6Mmm5JpifdiC8KerrGdnGNZwZ7kDtP7xoWWHcCvWjS2j14ZkVMBnhLMq",
  "key47": "22X5GTd5N73iNbYpBMUBndubDPjwtUeKLFeDXokLFyg7zY9eqWkcH8eVUNrgLuc4QqoFyj1XM8bZReagaVrzWXV6",
  "key48": "5hFJoPKBykGFVKhDitvhgt3JtzTBiUwXKFwhLYgwNSVWLUSX4Xu4yT1fsskn6Su9BeNgL3PEJ1ksQkwbmnLtodQc",
  "key49": "4i1GsTY2aFZNEtxvdBy25cWw5sBxS5o9vBb7v4xFQkx5EV3Q1GfTGRSoiuvVLdpQv9moPbN7QZSyKc1s4NFxpZJn"
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
