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
    "3mq5bXKx7LqPoLC6QafeErXWaa71UWFr5rSqzB6Kn2kbGARw8trAeScWrdBZf2gKQjXBULmNJBoVWvaSN9ifPQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XoJ8PkynaWmVJUFKZddY3Xihd5wd2fujA5wxx6pLfbKd4AMtN7YTLCinsdM2HLXe1QtVrejYsngmBcQbP2tY6Yy",
  "key1": "5nLXR1wg2LYZaBi7DoRmBRJJdZTCyLdSoPjzuctpjSrYrrwmrNN2m4W5cLJ7SYbxnp2fuYq7d4xYjnH5GJCzzWgx",
  "key2": "46NtKchvty7WibpMu5gWCSMyy12JBEMnxovxzDJdpaNWLUUf87zoc85CiMKCWPbjM8nRpkhnkRgM7DzneVQrFV3n",
  "key3": "4WKrt6fXuzAWodPif5RwreJGbBgWq3FkFBcds5j39vdmYQ97tv9F11jsxYFJofzQuzQAZXpo5rqFvvTzBX1C3V7R",
  "key4": "21J4tKWF3mPmzSaKvYNVfW7jMfp3id6ATiME41WuQevJ8mmx2EwGHoFXhCBKPG686nWKkADpccbbn7yJaWBu9eDD",
  "key5": "5V38juBPfR5TuM7mzN3By6yyCWYesarRpoy29jqJHmsX4UatTrmZk5WrxSMtvYetdYXUKcJT5CW7U9vgA2Z96Wzr",
  "key6": "5F2tFUFcu2EsYbi1u7GziW3zm6XKVikJXwdvhB66KuvqXdHHTeKkRPz6BmzjJ5d7iTT3oGC9WzdRW3YhjsXjGGz1",
  "key7": "3jnYWk1vsPYd6Z9bwFeWX39qE3PhTEC4XsngZ6zwfTL8Mtg6Ukc8Q2L7ctstc8zY7YRCpBNUhimYDSf7Zyt2ATpy",
  "key8": "y5UkmTqvEd9guSafC8EEZfgoxY2YUV5mpiH58YeDW2ZmhSMDqXFfd2dKvCZe2a8piG54M26pvd87MF1DqG4DyYb",
  "key9": "2hVFt57u4H85TMyPfoQAe1D9EiaR3Ls3yAcFknEHR9qGy6nurJ8ZChGYPpv6XrHcJfv8UnaZPXqRhgHvSYYfon9H",
  "key10": "3YmbqRPPNy4f2iAbtajp6LW6YvhmWTvEgGE7p4j22xgGenF5w7AAMUewZzgkGC2VqSbvSN8xuWfqiux81GWrScFF",
  "key11": "4KMFrfB6QKdgmUib6R2dWX6bm3d9nCqxJkmpfSKV3QAFdn7y1jomugS211YRTQxcPD3KYi6gxi1LnmrTKn9cym14",
  "key12": "5txVaDQ6jPVThFCRUKoJ7cXsLbx3PV618fM6GDMseXDT7Ymbjgs647iYBpTKGvZQc2ss9hadjbf4F2gWHxzftsY5",
  "key13": "4yViNQu8shYnoMGyiMkKk68szeHohV3e9ioyT6crcEgmLviiwa4W6o9y6EhZyznqZst1TWAzL5CrFfZ2pP3rZzJr",
  "key14": "42UADz6mTJhm5X32L7BpohQxp4Zf2rjRe9hVjPkgK3ukrD2n1WeqJvA3dTUnE3745bBPmVB1FpDsCuBTpgdN1ygd",
  "key15": "2Giqb9vikinpYh6LFMKqR5vRNAeWH3iZH5gAZ4JpzPVBjLiN9T4CrjXXGWsRu8hkcQes8JmnFL24MpncvpR3rGes",
  "key16": "2TedsJTzEL6mVb5wFFVQywqtx1QKZKbQ3HuHSMjfHrLgG1dBPX7AQvd6tDMFXYkHWm7w8GEoUgP8amZCegRGon8V",
  "key17": "3fPeGdkb4hEKQt6qPyGSGKyf6tuRCAMr7juCBYrm44ZgDTbgEn3fLwEiGwRsKoFxwYuKuJWNFsxjknYLLH2mLgpE",
  "key18": "6qCpnVE687QKSzu5EE7AguGCVfzNvkySR5Bho5KdWQmPcN2em2wwat9xvr46X2ceaqqSerE3WVTz4J8pkMSsz4V",
  "key19": "5bduMhXoTXmxYpbMrstGxEP6rgwi91eR2Ltn7Gd88fF1awwgyHSCtUAz3Z5uCBBw7JeuGCLj3QKK8Vyoifjms2pt",
  "key20": "2NvK7fw5uqwx5gtVQQZtgom8svg7Eh2mttrZ2qFYsexiireWBr9GBbnkrnWa5ApyuBbC6LyGaQLEjagwY7biWKZn",
  "key21": "3Dk2hUoVbTyiiWV9jebAjDgH7xc9gErViytESgnkbCQXGXTu7dByVekbQ3rdg27EGkRhPfNswKrkVV224mfyWz3w",
  "key22": "2b2qUwfHzyyStmRwd6btTDcTRggY5AxvoUv3vvp5Du6BDFssa1VU3hBp3FNjUyYe8aUjgf7JxCGK4C6Gg2j1zsxe",
  "key23": "5WCFS3AUGCyXGgpgs41kG2Sp9ZbAu31NXrMwHwK2R5Y66TfNx8PCTZbmhKeNb7zMbQ3Mj68G24KZbUy8mZvaLJPg",
  "key24": "51VpBadTji6T4tUxkW8VXQJrDrmqtMp3pTj1fHM4pjJ4yXdGKMwqpemet1bAec6NAtQnx4ehF4HUERTmTbheRCCL",
  "key25": "5eNxjcJeFEHjf4yCraHA5qryBuiR5kTNqBUk9A1Pgi1Tdf4jt5PxMiS1LeDCXNFysyyKVtme66jXnrAzoaq76dku",
  "key26": "L5f34KMusku3Ye2RiFvPpm9ssSD68WWfQQrYsQx7hNoyZsoTpZAwLcoxuQtSYhkGHULF4qRCJ5BptY1fm8g6WW3",
  "key27": "3xi1CDq5TuAEWfiAsvi6uM9LLfcFKUKQpQiJNodA8qA18FqdCVASHTRUuzkxZhkD3A5888cZqeX7AppigGZ1VDqT",
  "key28": "QUNEv1UqhZAX8UAcbg5sPag9Mdx7GKS7vJdvqUXoTiBNWi3NywUCgnsEQ3dTrG6iXgUpRLS1bu4Qy2k47fit62e",
  "key29": "3aYLY1FibihZDqhEPGSr2XDukJZX1UFMW97FdtULwmjZjvcML6inLRC1trLda5KH3VFKfGQj4fswBNRC2YvZnWwZ",
  "key30": "exR1N3C72vFHjLvEmRLpen7dnKikADwGGzTRfKjK5jS1ycVteeTb1nbcyvJNV6saToG8P6qPDoZGZzu2cCq2uPG",
  "key31": "2RzkwECaByQYRUrJ7q2aKYfyz5C4QkF6MmZA6fJ1mjT6cwPwSBzJX6Bhj1t4QmDAF8mJiWsrk9V8WGbxf58HT99R",
  "key32": "5GrYYSY35mN8RSoDfBzeUFHgnXxrNdzJvuf2EUCjAooe5HZn7wxE1KccGfidXRZNh7QdAf7LncuixpnemSUS3m5v",
  "key33": "27j9HWxAZNhZoq3esw8JaY2GrpjXDP8685exAusRtzrwdgEuysdJjZ1FJUBDjUikExqHGXQffLoEcTn9G2TidniT",
  "key34": "2Sh7RC5zNAPprFGt5aLRZPyPSFJTYqPXVA31fRrmT7DroWchLBNnaBG1dyt4B3AvpWaaod2REjZnhytM7kfCCA6Y",
  "key35": "2Vt4mBAQFbbaxN5rL5YG3fW3bwsq17xwXGoRAcy5huAYJtXKWn6m1zh32i6rJYcsTNAxCLdgkPbUzk5QtaExeUHT",
  "key36": "3mez1JdTnwc9GEfsf9fAeXTBFGWRvN76VwPeY6fR8hRUJQZoniYbbs2vQdEeQjbAKfiyQdM7vfWehSWgbP5MA5Wd",
  "key37": "2UBBNCVfG4xW6QcZeagNAP9RpNAcTpFLB7S78qPEDpF6PJf1PrQnZ1XfXdRLxwGfJgLCH1Um64YonrQVZqbE8cLd",
  "key38": "2dLyq9kJ8KyzY5WgWqHumAwap87pFFXgVZqwqRT5t9h1WbG2igb1MpaSHTYuYBVAwmMHRu8D3e1q7nGruQ5WN7yk",
  "key39": "3yYnhpixeKvethXANt4QA37ybjEh6WNDz9R5VAwKtXiK5Fq6QWYzRhjvvkwhGL5rV13H7rK3zMvabaQV1aAPyfHZ",
  "key40": "5wNQWto9cFw4zZ1UbdhvnRW4GCB2ucgCWwbk6Q5wxaZCsBKm5FzMEW5d1DN25Fc33o9JUaidEBWDuVRuPqrmHbu7",
  "key41": "5sQJDZ6q52dWvM13YrhhokjfcH7py5vWkQCX3YEfKH2jciqsAy3Hjd6wpqpb9bCffr8e1mhUfGV583vhubjeaMg2",
  "key42": "2cWekVA8tHXAsM8e4HT7jtUkoBUoPSJ4xEy5RaK6SEaaUZE6kcyfz6KTQTm6tHSssJ3sjM2nbiKFm7AfUZJR3ibZ",
  "key43": "2q6iiGf99wrhKhnyNqfLzJrdF2jR9dkFpeRsEDnmTyrAWqRqYDABjvXi3aghFcKWtfcapJihqvCzEah1g97ruTx4",
  "key44": "W2D8EeA4cAE9C7HAzW8ogoknnRzksU5imyX9RJVhoBR237LR4c3Zn1moNuKfu2w7bG1VmbGFUriEoZ58BfUKAc3",
  "key45": "2abv3SWzH7yqjTYWqMe4SZHYmCBRxKEL1PdJb8JxE3yTCCqMdHhixNRqVRkSDm4MjBC3GD6QbMFmS32CJVqoumRn",
  "key46": "2YyTmrjr6xtxoyd33BAC4CicJUhcLyrJn2AbSKyW34vL2K1tVVSY2DiowMDbFLMTQgadBPuCQYgFMk6h5ATQ3m5u"
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
