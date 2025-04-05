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
    "47T5ku6aVfzThesK8SZcDLUhoyDoKYGFdjpuFS9ajSdAJCvt42gFQbUN8APym7cXFHtCTGRkByX5jRYj4Dbkod1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJqrUS8v8ZicgBF1gedszh3exwg3Ld6uXHpaaVDQKryNZnqwa6hgs8inFELgZVVK7uUUhrjkyHowe6BVLRpeVcd",
  "key1": "5tTF8AjMajPoih8FnhdTaLy8PJ7YwoNrCDMVQyMnSPW24oCZ9fs1VPNhDjgpfVd9JedesHCKgaCZPWcyMd5sK2ma",
  "key2": "48xxKVbr94uCib6HYmfEakBh77irQLCTYuWzANGGpu3AjUeGoVUJizABSVDprhJZSeMpHtum5YsCPEkUsb1x77j7",
  "key3": "4mrVWEUkfd4cKoprZUsvDBxZnEph94DtpBsD1XxShxQcjkjkfE5Lg15xCYyis25vCuRxS2upfi7JVjv5KcD911Lj",
  "key4": "2rEMk1ERMJiGna6j8hprwsT9MRneMdPh2cFyoaf6aVBD6ZBUAb7SjGX4qb8eBYXke6ENqNh3tzwbw2VmbpL143ni",
  "key5": "51JUtwPG3rwCSUjhFfcEMQbbGnzimkEgmRbfwGe96KZhBX9pT3kkPGYcnv3V6uqfPVbwr9t8rRm8TtZmmUEoaDiZ",
  "key6": "4oe3NiPGy9e3tHkHh2jyHy8JGzQpgupLvskv4QiKLo8hGYQqWy4k2FRtH1tcJusaSeZjFLCWzu4crcUBFH78cmi2",
  "key7": "4kzDahiJHVgo6sNhh5YY4XcuxBCwUKMqLJBmPf4PzNPhe9BjHSuYTQ3Wm1MRq8xGL8QNTMir3fUTdPt5NxujhKJw",
  "key8": "yQPN4dGZ6JWy9G3Lg88ouNokAobZup6M8qitYTfvGSTdnLrKGRGgRoVt2hPkdHc1XfX1qyN1W7fwH9cbknnMb1w",
  "key9": "62ymGuTk3uXu5h4x5vj7eaT33mqA6zyYbspq8B1syG7LhgxZCxDUFU3i6tnLbUpsz2cbpeSWbEgCV1ciN1GpvEGP",
  "key10": "38kiPF3mbhCW42ZJ4oEFfLaaVpWEKJcFhQNmbxFy5Ai6qxGPQbJ88gEkWMDzeL7vm1aduTAP3sy76sgiJwFCSXeb",
  "key11": "2W4VKSqqt4aDyGf5Q72UBHBBrtVKTd3rom3UqsHSu1CY1CFabMBNk2Z2o9fcMQLy4HuzJuhSPkWTRkhobjWwymzf",
  "key12": "4RRMXmBSdEAMjqUCR7jy6pLGiFJbu1PMDPJMDAqSPNpqF9r32q2p9uVE7YZVERXdF2ECjmeLkgKH8xsVHRn3Je26",
  "key13": "b9bzBUtHVngyYHyb6DKmA3Y513adKWN98VGRKTqpoM446biQuE7ygaSityLDhUBzRXpWUVKE9NvZKJwPgh868FM",
  "key14": "63m9GCDYAkbco8xzvyVvfdqLTC4EZLpaD44LbdzWDfhE4S59DhoDCUoib4nqvH4AFrdePPXqBryiZB8cfBBFzU2Y",
  "key15": "4hSiSqwQZwFMpCgCpGDPeknekv4LEQkrM3qHSMca8oDzFRRJymeNVPUxSSxMFSS1pZxcGzsqEmifjD3ATASJKPiG",
  "key16": "3GQb7YMZmjb978x6CaHJxXSvNxSJLpagbekLyEcCMvRBxvSxqgVTav16rPcyubFVsJS981NaqTfWc4mDXYTaF8o3",
  "key17": "4YmrNnFAdd5txYss9dnmbsKEuzsVS2YX59AD3xfKZfdFijjd7b9F8TmYwNRQfiPWUVKeLGtytEPUoAkLoFHCqP1L",
  "key18": "3uHoedi2CkAFTkQyUdUELn3Gwe8Hz3BCVhJATCjrNp8Dz5T9xB1cixtYTLqNbTeAfjLMnvDMQCGaGDuHjrwsfCKX",
  "key19": "YrtWNJ2Q457qPinVHhnzhhHGhX4hD3K6kPiJAHRTfR5GmcdjRhiLdxCfygBRKGEPdJJxJ9Tg4THfRXUMgs6KJrV",
  "key20": "445i64bc9cF5c7kJPbSppzRYCRytGZi1tWhQiVvZjQZ6gqnkypcamsgDmcFJHyouaAP89ESY5CL42KMutwPmXcg9",
  "key21": "2F3YQhKy3DxhwH3ZT44ipDJoDjPSUh7mPQspM9yPxA2KAv148CgrWwirJrTgruAA8AdYMTXcirEixW4nP3imkEC4",
  "key22": "48gqYB7N7tdfqCTrjad5utNVcgmzwEErsP8dEjfvF3Na1o7VP2L81otzUqDZUQiQzySAykAsthrmXP6RqgNWCqJ5",
  "key23": "5zJX1tetStumt5P87KkFLiNxDFsdaSp4tcXUWfKgaMeBCpbLeBpZGSGjWNvKqDYcLXGnqZ4snn4Atp1BbR1ewVcd",
  "key24": "4qZatV7sjsc4KTwz4EvSGZTNVjzvJzmBHPFLhvFvJTV3FnfNccn3SCqvzUZhdeU1QDt31xmBgQr7Zyk3i3usFMR1",
  "key25": "E2SB4Cb1pMGTDhBqoSyxMZ8qXhSwUJEQtLNvBg7ziWcJgRZp1aS5CWrNGr9WttGLNAgpiMNAwcE6fYe3Z22Y9fv",
  "key26": "5rqQTAxX7v3CPZH5NiB7YowtDfNQcRFJbsDeXV3HFMgUM85YG11N56pNoBY1hjPkHkCgWzud2XufQu1VrsN8gZFN",
  "key27": "M8TvtSnxo9woaCCGMBWNg6tHV1PmFTAaibo5WPR1ohHrivbi5ySpyMytpZQpBrZpcujDeGeJh4MxwcwrnkHaETb",
  "key28": "4qy95t1G9B4erSYbvATnDrgENEzTeHzmi1SPVGiQfX3famUSwN6VF3bbDnaSeLdNLAmbwNt4qgmV1XK5DA74GPhz",
  "key29": "5MFct7UKNgPJeuEXXzt8nCWhJcAnLebSyWhWXyDznZNhqYQHKMsNMPvVCUnpU4hxiFy6Xpg5p7BsJK9jSPjnmERD",
  "key30": "56Pq5uLr14UHCBqg8ZRWuNP9xAeaF9Sw2FBwUzsp5jWsN3zYi7Djr8JpEPVDzv36xMF5Je5tDj3VUsrqRDbrMHQ9",
  "key31": "61RfdgQYEBXMHht1fbyVaTqc1cVBZzwgv8nfvBbPKtd67rn3fLbQchUaLQBFCNBUozKvfwuUUmMDu7gYmX5ikT3W",
  "key32": "5jCzR4178GPPjvnU8jjNGXbGCrj6UYVMSivvKMza3iUc1Ft32PDxCXdNhvUjSjBfrPUNV9ZERbVv7aopB6DgvLeq",
  "key33": "52eaSfEtyx3FL1QN4C1VYbQYvM33SK57YMb8A6vq7dCMs21b1FK5aXnkm3QCNYMKLNy8fjzHoTFsu8ooiEMo7Bxc",
  "key34": "5xETYdogg6nYCEi5LJEuJ7JpXo67hgCdPt7dTAAUT5PLmoRYZ91oSzCm4EsRrLLHe8mmCxyU744t6a3HLt725mLs",
  "key35": "3rU7ozo2uAKMZv1y4zH9v5x69GtmFSEjDpM1MFn53kJhb8Xc88oz3cE5UhWUJT3HZnYNzHZqxijqozTxq7eJC51a",
  "key36": "nkuhZqFkHAwpf7PTiL6c6oFK8TLsehU8VModb6NvXbCKEFWoqoBHNCqNxoUGMSMg7ccRyJThfcNHFs7812SyJTL",
  "key37": "L4eUCHyMaxK5Ti1oyRZbWCzVJcS1WWjMw3hTgtKvicJvQetCx952gnVezfgAyiCd4oCseR8WE1st1QHGQ69oNqF",
  "key38": "Vv4rrovmcv8eMrc7vYyd4Gmd3uapWsgcGCJn314xiru326QrTJJhtmi7wfiy9oi6Ngw6o1pVLjGkDeGdzzGJfLb",
  "key39": "2TC5qXMsFH713VvBS4jR7rpXdunka9rrHs4JebeaCDZZZpfBcnMJiWhSRd2L6Gx5XAdKrwivBwXFKAudunsd4fws",
  "key40": "4ePDuPgyPtY8P2F1Wj4ncsBHnYi6xrP5nnhS8c9F1ZVC6ZFsmmeopEEZVxQ3i8KRbZR8tDfnWjGxdAiBjp6qXoXZ",
  "key41": "5UMN4scHNhEdNp83SZF2cStPUaeTW1ethxYWhHMs8VvRLuG1exbm88iyeSrFfM7NtdnzS7h9varjxHPh95Wxxn7h"
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
