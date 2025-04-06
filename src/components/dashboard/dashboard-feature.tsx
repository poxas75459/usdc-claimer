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
    "3LPafBqaF2GD4iNZoW5bWvEK9oiAocpqRn2ooT7vduuNUNRKAx9XeBhXYRAoejPmbhKM8CF2JRsqQiNZ9i99GbDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rz4q4EC5vuiby8hbtpprPb6JE7fRRLYHNqyScXPisAN3nV6HbqNEsKmxbCP4A5b15DfPjmn28LXe7Gd99vhwrv",
  "key1": "BdQ2jnkWG3KLe5MkgG9mQDcCp6QL4jmN9dJYo5mnoSGM2X9Yu5U7aecrPxqS6E9nuVqCx1uAmbsbH7TeBvcBeqP",
  "key2": "bYCYFo4vApN6Jt2Q2ZnLqDarCY2Xt4XsVBb3rE2pQ4kKXP3S7ysUptobkChy4yxU5Upoc8mFqwRx5jGSJg4p275",
  "key3": "34PPfxGZn1HfMJTBA3RtbAHg5Vo6EQQ4dHiSW7RbRfTSBZ7Tp1owJgLQpvkydbherVaSK5727ZZQLdeQXHkYXD3V",
  "key4": "2GkWG81YMvao9GpZ7Vu84LxjetBruTddgJmQJS4M2XU6dXKsihZrcRFrQvthRn4oypYwYPWvAMHHveT8o7yPNFTB",
  "key5": "Ru1bjnYsTeN7LBjLJgtaY3gvxq7ufgtG57KKJr4G7E85sFSjvoues4aq8VBoa8LbUKgwg8DFETD7PtjCGu8mkGj",
  "key6": "vKK6gcNwvnQjoJtdq8Mio5hGi2EQmXMfcVb6XdvAHvDvi7oo4GkTbuU7zeF8bCjSKRNdQFVMNTufjER7FuMZ3di",
  "key7": "46cA5Axuy5nQ82k9zhZ4fTKxdYDrFNDX3QmRDpYtTxqPgQBnZ4s3qcqHcmSmnmnQpLvu1Qmv1JvBPU1aT3CtYp9L",
  "key8": "3ferRvWdSni22uo8LxcjYsuPTchbLWJvRCaFk8MW5sMhJS9tQjAMXM2iwQ4nuFxvfkz6kf5nZwa9CWTgaP25FbgY",
  "key9": "4MjrGMusW3QX2kS4vw6sehM98GWyw8TzDVENRp2b5qrPcvhEBaaMHqX9HVqjoVYFyBgs99ZksEb4wGXdGndmrA8j",
  "key10": "2zWtn4tTjxMjdBiM1txP9zNopThcZfwc74snBUh1GFiAnnzbMukBvrr6FTCGXYkCTAd5xH2E1ndxw8r35ex6ktr9",
  "key11": "3Qay7i7v1wihkxWLLxzoTqz6nmPvWnzUtHMUa93jFk83pfoGjHh7DsmTykr1nusYiCCH3SZpAwQjYmTdUrN4Yucq",
  "key12": "5eCJDfA8Jc6Y5ASi9E4HozvQeMV4oZCW4trgCYbmVhPdr4guKcm7rGUHSgFXSfZQkni5T6SdoxXF7yDrxujvDcgJ",
  "key13": "3y9vgFX5L3g9ZVr8cW7DKLjVdcSYNc6sZJTVg8QwgQiNhzpcq33AkUgsvWkBo9UVT74H1Ybjh34rrdhF6K9ucgRk",
  "key14": "3UGxeW9SAUq76xE1jRzVKuqQaPB919jHRb3DdYHeHHjqejHWFPWkdKmLiUZB1cW7LxaASuLhNR3B3yvYAHiyzVNK",
  "key15": "29QqVKMAzhDbDQXfdsZqAkP8f79TkZoAL2RumuxiSq3KCryQeCHDWNmU4L2LMmMakyfKDtBJFXJToURdH3C7Qc5g",
  "key16": "3QW8KXkrpeMebHcenPmwu9tannwEGwK1io4Z7uhPfwCrMWE2HEkPkfLTbCgfb8FfNNZC7Mso3dsnKwnoQpD64Emc",
  "key17": "JdkQapACjW6PtcR3t2EWJjgN5K6HUdyysozK2a7F1q85RutsCCLnZxHjnH2hYoRbUiBkBKLSk4GCFovdgdChktP",
  "key18": "3XWdUoy5QnaEJ7CRrKRWoXs1UDRqPtve9z8kNAZsxyoATz1P8nGKJdjt3QMVynVKCkngNUz6Kotz9kfEimu66rTV",
  "key19": "3ar5aZ9qK6LxYQog35gW1AdKVxrysv5RTxs9wQPAMrg7yRaKvB4UUPUtQjgAUN8MoEEpGoX6cXSzHr81TJLFF8Jd",
  "key20": "3MbeEEMuBhmy6Rph1RZg7YN634FP1rcWBK5fBQpNjz1CNAR1EqRsYXZeLAWZNHMvZemhJycXTY5jy66zVkwx1VMZ",
  "key21": "3ej9dH77APrc6grnXapWB7byQJaG1ZWe5ikACerupgxFhALEnTeraqGZqxeJLvX3jSMfW7KSGmvh7XH9joMFvQUr",
  "key22": "2dfR3CmS66JVxBYiC1sWUn1Yz1vQmeFFTccFTScSssa8jTqqQxo7jJk4TdgRzqMikHfHdv2P6jocJ2Pd4rLHnQct",
  "key23": "33e9x4rad1u1UJYg8U47haQfz9aZQ6FcCdmabw7bXbr1zbbGqM4GeQ9F75wEMetXoJEuvRoamJRLXUChwxNKTyhm",
  "key24": "2G7GLm7dWqt7QnTsKYn1J8xMprASjhQbFEsFjELwPTJyYKt57yNnEy8sdDpDerXf7XRySA37K2CPyW3iAQh1eV8T",
  "key25": "5jgQ2ck4JqxhWN8yTtTEpSReEG4GdYcbXW3Qb4Koaa2BjfqNQmbNVBEjtqSQSP2gcE8kKjdiMmrFyfr9iJa3ePRQ",
  "key26": "62QzUyHqjJPiJbra8Wy4sHqQKLg43bFn1hXwg6jbk4PxHnRgiDPEkTcMYmtfwkGWKRVxf28hxDjmqbRM7AJ65Ty4",
  "key27": "4YfMDGFQDBrVAutXoHV3g1JSZnPN1Pe7fWo74mdncBYhwrKE8w3vByeKwE5vtLHzcoibsWE2EP5HutsU9YM5LUd3",
  "key28": "sABAKRKaWrVebRSzTjpHee3s2FjL2VbRuLHww9aSiL8PVbhn14tN4XWynsQGhqg4tFfqWsfdf81tuokR46ck2gh",
  "key29": "3gmdAgHtaXyKaFxqTid9r7AALkzqF81eQdJVay3moCNGTEFtFZvGKnm8eQFwPzHyu7HTXTh1gipuUhyjH1NArX73",
  "key30": "2hBnnWkU6yYbEFYgZqRAa4J9WZsUxvvKigVvDZZFAtcZLjjq6rbAu5LDZB19BhbytAh8Xpyei7ofVEeECk2FjcyP",
  "key31": "b9UnwmDpoyqYnBJfuZKdYTBKPQYfLfVhEkx9wsqMaJFF85grUc1GdwzxbfxjbXvP1vLGZKpyTzWgi36tkL2RMLC",
  "key32": "3XDuPwaZF4Bx5kjvYVX1S43zAh1vKV8JF7YdPCjtZWhpmZyqYXD3cFgKzMAWYS3zmkTJXbh43aqkee5V4XThEgJB",
  "key33": "4JqDdhraUA4GekwqjfWEiUThD2HyznEC1ya6sTAWUivBrTKb5SUvbL6ss6mXwdhXTA8y3wrLyJjz6Bcn6UrY3ouf",
  "key34": "5aCNtdcrZQfjGTeh9T8bPbYbdci9j4SqMh5Gb1GiUW9QivhHRtVGoc5n8Tbf8RW16UUHMA4pTJWUF3eKCda1pB1r",
  "key35": "iUXoq2yzzxiJ5uwf1FmAygDpwT6ZryNs7vkrh7Xoqhu18N3x1FZqPn1xm3RtzuXND7MRh3oJgMRj28m17q3dv2e",
  "key36": "3fBnG4FiMwmrD1ytasdXeKpFWsfPGNcXt5dbygaw6QhC9zx13F6hqkWgZQAp9fwa27tcLKpXMc782bTfaHg6spSU",
  "key37": "26XZi3T5Uo8gxFLYmXywUPecBCGmFw3vPwTXYtjSBgEtYtueKwcfwbm7KmmrrN8wtCiS1XkhghPntabcy9sLamcA",
  "key38": "5miSKvVywWckw7GBcEDHg8ndwo2qkRngRgnw2JpCDa6TYmMLoL9q37jP2M44vZU9KnQTJ5MtroDrtzDTEju5adsQ",
  "key39": "5DHs2Pu4r7rcw7yaQBmPFqBkhDqvozgtkNud6wR2aiZJdbCZBbP55hoDr47pYEPdP9SMCi3szgg2qbBw5vHB53vH",
  "key40": "126U4AaCs32CakNzphdPeChXBDm1jDVAJr4a1ANaNipa4VxRwfAQQKx1JpVvVs7uk9KAzQmqyFpUmqzoF6JXeiwE",
  "key41": "2SLiS4svjykqXWbM4Ea4KiU7MeC3JwYiS1R9KTrrLyVSA7T8CSFSYw3hcVM41VHrNXZy61vYLDv9CTkXh59CLA24",
  "key42": "3eXwzs4aVFbC64j1RZVdHrefAMNpgkBXy4tSKXA2ZZLt7j7d5sKKiwpPxLg7hS8Fk6YirxEHDitVUetEofvXFQqS",
  "key43": "26Mi8tDosfd7aSSPMdQBZfqEh3qBomv1pLYrfPGAhq1JMhZaHjtt8sGSMXUeswEY296CcseCUPy5uZ36qL5qrr9B",
  "key44": "gUARnuvC63r4ztrPQ52LfgaoF2QuZUT6kap2pqifRkvEtbtp3E8oD1NkBfdvQuz6EotvbXf6fn2d5QMwANGYMJZ",
  "key45": "MPUbHjvvMYRCnBvurHSQ4U7JaZBLA9Qg2LvPxJKWFYxhPEHD8sgEiUU68GErHxB2MHyXwekmYohZoMsvh15xRa6",
  "key46": "2ygduGipQ9nx7FjBozBHMkTACDGPeTuBAQ6VJVVcy5AZHkYN96h7Vou7zkH9Eb1axmBy5MHHjpKtGWTC5yexehXL",
  "key47": "62Mkz87amz1FQoZLbDxTK5j2XwiMJhDsVH2vi5ZinbfwfyNco8be4U9aTatMz8AygqupCL6ZAdfSmD29BXC3vRMF"
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
