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
    "39PHXaHTiaC5q2wMZpMnd3xdK1sXyFp7HoK4gx2KyPATCR4RGP3KzvEG6JkEh3yLBSUHhmzYUAxEm9KiPZjZ4yxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6mLxi8926KYgkBhyqdFbuaDU3H5aiQascndYmN4Wo445Pa46pYp3wxKrUMkh7mb64shBV1GibzMBZYtEsHZdm7",
  "key1": "47zrxivJhM3nDwntpjVsktPmWj3b3a9C6QtnxpFxSPeS7sHob1VixdZV9vqSArcXM9zbvZDVaujjSqENV8SCvBcV",
  "key2": "DNDYmHY5YpepzL4XByi6Wo6NK3Y7XJQ2dpMg56nYGWSaLEmMzs26PZ51AD7jiNYA5SJEFRwbnzrAFADBBGdiHev",
  "key3": "3ZewzGY4YmBzwZ5Fb1bLMYfFZ6Q8pdsYPm3oXdp8fcScsiq3c15rDEq8jC3dTB4svhjiqPWFVTh8azvrVqpF4Yny",
  "key4": "5VSrzCUjTbC9g4fC6bRzsRPTszFr44AVtWTQHVAfY9TTS7DDuLRSxhXhvaPaXug37n7m11p6AL1JhU51vD4x1Fnp",
  "key5": "27YxoZxzY3p13ZNAA9dT4CbhTEie25GpQJZSmmVyPANorGqK9GzWqd2Cup3vVrqWAqEyxav2w4cSe3K2RSNbjtPG",
  "key6": "2CxNeYaBEqGt9UvNkMDvptLo3bj2pvCkKpD63UqVACsfE25bjzkrKzcAwnjiDVrWawmcSvM2tgWQZZg1DBwvhZuV",
  "key7": "5WuBazynSTLYwWis9QMPJVm9uWz6gXZAMEKPvvezbQ8LW3L28gDBZq6YpDjbdsDwuxzAzwpfqtkL9ibwn11KroHX",
  "key8": "5rCL637us8XeCLiRKWgQVyMJcWZffgq4WGrMGSXxVcfLGhxogdsaLGzXsoDj4beJvJoiiuMiCvZQngeB46YuDKfK",
  "key9": "K6RzCj7JPnAcE7DncXkKhTm4NCwacpJ2oAbFjK73zb7qVmWUELebpx8NdEuuCXNkip7ysBGDnwma6SzY1qDcU6p",
  "key10": "4ezECjitbaqTJ7bjDKFDfEfJEYTVEVMaBvXkKsESCY8TogSAjGVy6G5rxWVvSitMKd2WtsupsRkhmzY2i5T9THZc",
  "key11": "3s3HT7rv4b7w3FBFVKvAESJuA9m4vdYAL4DNFZt4m1WwqoiVpvLTDnY35xEwwmoyj4sxANLyax1USYUSKuvFu9Xu",
  "key12": "5vYPx9QhiK7WasFdYeKJpaLbjT7VYAhhSvaAeuzze5pfZZWKPJHf2fkSLxKqoaFJU87E4Tg9qt2cMY84bwSNSCKX",
  "key13": "2ak4qtm9TR6jYP8942HtVmCcKFT9EaVtNsV86pjFZehgefNCkGzeND1b84znwE3GwkhF2DoN5cjdJZcFuQ3kX2bD",
  "key14": "4Rq6ygQB9YXax1arA3t5jYw6iRAQKB3sdYqTZgg3XPsjrCz6tukG8jmPjwZYVqWLup77Pc6qkFTXaUpQsfMPcpWQ",
  "key15": "KEBFSoF783v32FL1AqFfGaLk8T8AM5md7hPc4FkBWc1WVuzYRFQ1iJcC8WFgAZTQyA7VaezGu9zPDiNaEMJHQKE",
  "key16": "4Mn1UWSUzT9xt1JCaPovcNn6sCSLgTPnGH9gGsVdMnv58NW6efBjdNsgo7d7sC8Tp1sKPjfwSzJWsjNkzfk8678k",
  "key17": "5WFcVFiwzWK49UrVZwjv7oWmz3bQe2mhzVk48c4rW1CR6UTNPZRAAGAvKHYfzfiPmHC8rz59wLsfV5t6x2j1UsL6",
  "key18": "5B8Bxf29xFJYjybhFESgt8dpRWBLArRHHrbTu2uymsZjHeLcHbdmVrzGSEyj6ZMEVcqb8xnhQTcTnd99LuYRozHo",
  "key19": "4xq1ytPusaPva4kWJGCZd6hRUdUjdTj3MeUmgbpCnvUMSC8x5767bVAz2GzUYdJ3UmjDhrCoXRN3X87Ufn7D3S4i",
  "key20": "iTFbY7rVAN8wPKBLTv9dxYRjdZLfxHAqr7KsUDWgfz51TRF6ydZ4kdVQDdjvZWzGjchYuxBU79G1ao5NcfQiG7d",
  "key21": "499jZF9uJ8xyt9onQNTeYv2TicHT2i1GkKT5qULdKshRfhuGWWuu6HAkTY3bojHGqgwziY4AFD6i1yRwkRXuUGzs",
  "key22": "5zjdKsWz75kLXRhcSy7Pmr1FyHVymbtVNzKvxaZrzwVjmjKR1pK5wDgRz1V4DuV1LtwPXQ9ActXNDpDDSkQKJewX",
  "key23": "2yfhkxt2GHsEGJhcxViHbco5dybsX2o3Fz2uZ3jvWfPEHKGEKiTn3Gm8ivSxVKRU9GWBeWF9FCeuXJpTZcyVrD3m",
  "key24": "4aVuaKXEapoLH5efc3ReAFYR1J4fdpQMmKFzMXcUNHosQdkqLF62z45QWRkAtrwaJAy6Be8A9wttfcNiAq3SCoJq",
  "key25": "5R2BM97n7qd5zjhNV4sQyKpWcnfyHyaob2tBYxZyic6ns16SZPtHr76pXdvf8z6T1NJ34K2DvGpHQUgEJpzuCP4L",
  "key26": "LpkxWYpmETKWuogd2fQa6pBXwduokrd1yTjeFqkiy9FhZfWEbcaMnpnZQWb89YEDfsfSV5eLjC39Ntdw1CGN1rb",
  "key27": "2MqRcfopkdrzUDYjvinovQqLre1bLi1Ds6ruac2oVBP1AvWDRY4GvgsXc2NdF4oWKM6ybWRgxN2TcYQdPkpr4Ypn",
  "key28": "ahBaGhUvd3GmT9oEdTLY344Gg6JRkZRdExrhvMQuVDdpyT1tjC7J9zYBG4xVC8KuSqperHJemRcXihn1FHb2b7d",
  "key29": "2bZqrSXdPrxnHLUQLjAjrREGvevYfJj6ah9kAjPj2Aor58Fhur7wcx63iZSBQDAcT9Uk63Xdk21Rog9WvYPcc5oS",
  "key30": "5RB1t2wNXkNgepsj9PtC4DSgEZmTBh9iNfvKCq9UKmwF1VMXTyP8Ya4jV6k75qBQxTE4W6u2R6XfaLrdvc4UJn59",
  "key31": "47qXucohuHy5cFQqdNFwrwT66YpFNnujdQtrzbYV7wASsQk8SztLJ2njejkSGJZuDVCDqK955rGMh3KCK5gWqfX3",
  "key32": "2cobs9TfgGJKU4Jpi2CC2j6DZGWKYSyYh9DzJ9sKuQKUQWJuVC6Hp8PAXiFKtnQVqYJn33K8e2hJkLL3xaMe1LgG"
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
