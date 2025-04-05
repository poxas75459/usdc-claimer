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
    "5B5RHM69QeRnAPF5x5eVAzL8humQyT1Rc8WxZaPCA9ySvzRxrUiJVS1UzZbVH5PuudKc2nNUhnu9zUeWWZt8vaXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDpWQzzwEXtvFvgfJfV7GoWUHei4BCxCA6p2pUZwtCNj4MzbWTg8puNxGLyqTJ257qmzWBnwVzuC2xubSxKnQkL",
  "key1": "2ZEjSCH4FmEpPNPcUkKo56Ujs1347vRwwgHoGH8BVaqDbwFDSY5AYURSmzZ7gcyCeeNEE2Azr2pjJRRh3FLS9Qxk",
  "key2": "4Fr4WSyjiEUpenk57qenhZJi182jNu4XnkavF976e6yQFUsb35SPKgVvefb9L9cU8kvJGfu7m7kJgMchrVJKapgS",
  "key3": "2rHB5WLMSPT4GPjjnoSZPHevxrHR2vLrPsWTvRSDc4QBAbqYjtAJWbURXPacWgGE9WZXbaAXzooFwWufSNr5Egw3",
  "key4": "3fs9HXdJUv2uKNGtXNnMagaroqs7TPkKk7muSJd2FtVkLKeFmGKo6rqVJwPmEQQ8JGnU9qWrBpZ87zHxKfHd7UhW",
  "key5": "65x7S54ERSPYQBvjGcB4CmefVS4jZpQvZnxB4FbKTPuiFL99PojbzQizteiJidTdCd5rWQNR1pEzMwYwSu7xJD9E",
  "key6": "3x2xYCZCbePvSqAZv6KWgowfy8mP1uZr7REVhKvfZkWHs36pShwKkYZHAC48rnwnEqQQAVz9QA71dbxCKSpZaQbZ",
  "key7": "4EwTx8KZP3ohf7NYvdonwnZSncjrnmHqXaNihAJdBZ9wyh8yd1shXudXst6bt3i46rh3rpAgUapnAKyM9q9moXk5",
  "key8": "5XmnsdEWwoAjNoZSGWuAWL5xSfVso6jYzAAjzYrqVgHrhZkvmq7RKWZiA6xTTm52cFFHo1aKHcKMerSvTyf9NY9G",
  "key9": "22CnfqrTfbwaN5w6eRFZza2Jr4NgmknqUduj5CrJEfPTTRYE91rMqFaupaRuip2wN1JkL2W6ssvMKRAsreA1hgTL",
  "key10": "5Koyt7nkSMqE3RpJvKuKz3Cju1FPJHDjtB4AyeSuX5UAPojjpLCeopvBNwprBPvzRDbLLGrdLNRnTvs36CZetgv5",
  "key11": "2xPfP9ZTd7N7NfTJ9aJzdPHS8JCtUhL4hPgGtjwnxfaybuCT2z4ZRdaWLThHGLCvmv3oAYw43bnu4RErcaa3j1De",
  "key12": "2FaTK2BpzHPwvRVwJuhauNoePGAR3tNcnngXV144Ja8SSMXyJ4TNApWbKaWVkVLJ3UNqWeUpnyUFQTNxobyGJfqD",
  "key13": "3mnPUJYdzSd1zjAVfp4NqRQsefVMwQcimcdJSZ3rCSVxhwohof2B9YaAK7bBuBxvrzDQKjhbqRsa4MB8NBuFesXM",
  "key14": "4uXzHcHa7D2BB5bgSr4F4j1waRhcB625j41qphUHPsDSJUYbGU2BRRH8UKWSf8z2UGxRusegwUoGjkL47QcYHfHo",
  "key15": "2Qc8c8Fkjw1pu6ZF6qZ5zgzvUjhxwwVUXqzUbVbVt4MBwZgjyg8NnNT4H1oWziyvQuxxeYxYwpChHw8Q7XGb5CaK",
  "key16": "2cgKJPpXRsbouBZfPghgskGg4REnK1xwUNBeev6ob6wyhiX8HNXp184KWeFdsqWcR254CkoGMiEFTye3auLE5aNF",
  "key17": "22c6by3SzwEuUSD3Mr28UhyMer8H4uYaMTgAsPUoKueKdTyw4DFNH994MukWL41RvgLhiwNExjLo3gfBaBKKhhEg",
  "key18": "41sp7knjtApmPNnVNjgaQjZgB9bLRVH2uTGMovBdE2xne8UGogaNwD61AouuYccUQZHfaJ9huqnGPsa1f2HgqyeM",
  "key19": "mLQSPMNLQoGtiZK769njzJA4ypbAHyQjJg6EBLhPRMPDPLfe2RKp634FzbyM9h4c5ApR4JCmABE7DUFDBihzvu7",
  "key20": "4osHojjANBaDTeufiUK3qUdbDWNTLUPcwur3FLi5UY7zNmnQuWefN4PeSjFVns8JjEVGGRqQuqd9g1S7wHfifYVA",
  "key21": "2qURs839LhRqokHLusDj9aktgfEUBUAnuBKMsLjYQRgqbPd7NX9s7Q5A9XGkg9yT2Y6jQKv5ePipesggzx9Uw3Mz",
  "key22": "61Jm1eFXunjfithphVEDakgi16o1r5ULAFo4FfjKUw6145xNQgrgruWALrD5KiJMxe28RT7hsS8ifAP8sFBcY6cr",
  "key23": "28pzRCYsEgwZpHTDpmvTx4jWWN9kXHeTToPMV6zPfHFwYZpWYjLK28ekx12minx5j6FTVita6BzRY2W7rwoVvvwx",
  "key24": "XEhp6JVp53DnMYev3iWkjpJ76m2Njg2yuquQLfyX2SADT7MPTXpQWs1iGAMqcKzBneNWnYZEe9YJs76rKv7PKV5",
  "key25": "2k5nFRmoQGkMHPP9uG1FsCTK18ZMinVWCGfZ87X2HCMdUSgh9JfWGQ9jD88TTpJ85rC8qXnErPbuwW79UEtkDpnB",
  "key26": "4E8AbUg4rGdrRjKbFDvekhTRmGi4yFyRapfWDTEjoMyvpXHwW9Vrd4Zs923SLCpFuBGvmc69a5FoJE3o2ronB1xh",
  "key27": "sAPeZgnk5qwSbhhgRdEHkgahcoto352eGEkfizrjZ7CWWJMd7xmDPmNchBF7ALakkhGwnmwFWpUzP5S4RWXxtRn",
  "key28": "5L9NFLhcyKtThiRM8rmEdLYYsSey7q584irM6ErqvydPDFzhZYMHt4sLWDPE57PsjK4wjfcrCgkuHFmEwtKQyxtw",
  "key29": "2jC8bgW1SMVh3gJatpvwvogNtycMZRNaNJeEoivSVp2HSbDGUxdMHo61LFoo2tqPpqSChrX3wzsMatrnLZhWvDiJ",
  "key30": "2SsJt5hxfDSzHprMkX1DxUMaYDDne4LnUNv2PHWKpEAvDfkwSgb8MrxaqHayNdsL8wikoGgS4ZssuLkWci79csrz",
  "key31": "5LEaroHz8nCDV1k5ZAWS7EfYZcjY6AJ5xT5rEuUkX5NhhurDqu1QzigSfQH6MDCFozAERxMN4MPQ2JKCfeyM4mrD",
  "key32": "5iTgrCucaMUuemBx7JqxD6Tn94nehM98umGEKpkEmhwRFKYPC1pkoxtFpf9nEtxG8rUiLoBLHbUkVqY65Y8EjFMi",
  "key33": "2a9YpMAFu9eZwxrPKenDz9PEzpdEEAswiVw6x6gGJRECpw4ULXKSN6EFpF1axsgkPwLFhMTz3w67NJkinRXauMtW",
  "key34": "4FvV4yBEnNhPybwha1SmyEXTE3G1rnK24ezkJfWc57Qc1va5hqEtfMyBAY9rVWeDQnCccNEp2JLL3HxHokbEDs4d",
  "key35": "8FNQRPqKpDK7NfiaTpTyiG8jimjVtqVBSeAuczqCkt4g3roWKp2KW1psX2BX7ggxEUb7uxqQu1TgX1sgEByemTv",
  "key36": "HW4auqqsyVpuzeBQwfehmWiRe2bcAK6aYf9QniX7u6iwvq5Rz2V5xUzm31huPaz6QKeRVwjhXuGZqyzAvfRGqan",
  "key37": "3GpST2YzU8AaKS3oW8UQYeViQ3RS1XFHBW1VGddDEwffhPZJNd9PWTE5sBn7di9oxYgGHFhPkrB8gzd7FoVWPmM7",
  "key38": "5snksbTHrs3ppkgTGWSaLMi2qDfNw21gVaR8crrPq5aMpoFZMsYa9kdcc5eyfZ44CY8VMprJQqz8APiJ2LzcM7tX",
  "key39": "2FdbawQAjqmoePa3duZj9TEK5hNuU4bQ34pwXixTJJvn9MLxFjVCnTpDW5NHX1ECvGTzu3GC7Uo1shcA5LEzskqc",
  "key40": "2irhMn4nLaJxRHwepEaenMhrH3dxqXcYkJ1hj5hTjSKZ9j5LEZczFc8UKS1b9yS49o4Rn76vB7pwCuz2nt23VhfE",
  "key41": "5hGGZdCMsa58FN5cDTW59SSzSQYWqcSrX3sGyamotPjuDaJaT99zkovKCKcnVXt934iqbhWCViZ7DPbrUGNufRW2",
  "key42": "2kDog7yGhEXMEmRA7c81VkLW3Js9JgyKxcaNx79nH9wyAdkNSAEi1H447NHk1UC1pcEMvmxJFhruyXTJH5oQ26Bc",
  "key43": "cWu2H9jN5BZ9n1kdYhGj5cT6W4CumpUdhs94ecxmTJ77WBYoRVDExd3FVhCgbf81pkGYgS3Wy3AUK5EebA6ppr9",
  "key44": "26B9xDphqvLusarcDwk57KLFvDkVESheHmM1zHiDS8mNgeL8rCV18WgeKFCeTXQojBdcbVkxgAdNHrvYpr5PHGm9",
  "key45": "4r83HNd558JEVJEfuu4fTbQmSuLRd5d7XXPmpvFWv881AK4jKxgu917R7yBU9K48NowdZwXK4BZcHzFTydJRthjS"
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
