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
    "4HSTa4eysDKqqYGgcAWv7TspTbHo8VjAVKNSDJV6oqdKxrwNHAzZpqsY5NdvjnVXSxndKf3wb5amR2oBoqbqNvu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kp4GEYHvY7xpDeDARJENpAZ3a89XaE8ymfQASF8FHj3SuP1XZPnnLtUoPK1LUo26DfbgN2U3Dp6FFtLv4iqQn33",
  "key1": "2y38guRVwSYgVi4fYpW17FRB6tChVhMSSvYVQdvCLDUAo963Da4cvbma4AitA29P48SzC1bppiSEGBM6jmUsxjHr",
  "key2": "2M7RPnCgQBGMfBCHJFgFBwnjjcQLZurdTCfwjFwcrqbHNmaWV1ZztVLmd7674qCLEa5XchbfwkxzXEybfY1VfoX3",
  "key3": "22S8fivEeziQ9EjLQqe98Pr11uLE7DbfQDVPUb2yN6HWpywzkbYkAWtiFddPGcd4SNFn5ubvk4KupDZF49yzCZzL",
  "key4": "25NmdKsyux5hdhUM152EARjNmBfvT4nnkpVbR5SrAKW1hGTVTYaWGMSHsDAxhKYrgWc5gj7KMCu5fMnNSj1HfuTd",
  "key5": "3NYj6VuVhbLXLKfx36EMLZZGGb7rorachKASSm4gHxQdnhuvH9X7QP81i1Fpc9dmLYetX54pypxEuXb32kG5YxUM",
  "key6": "5nSSwskNZj5SupFjZXnUCPscSKUno1qFtZSsGuCfQpQaz6zNxjNDAUqXzbKPtMA1NeT64pLoD3oumDr8SGdSkz1Y",
  "key7": "2of9zVBmnbimT6MQ22FsAJvWgFQ687LMgu3cbxdgRWPmduEbr4tubDao3yhc7TLSua9AKtV43fsYz5FfLm2RRTBE",
  "key8": "5YjV6yf7vNk4327ojYME7Qv3DaCcm3166uRcbFh5TqXTENsFhvqMydUEk71Gtg7FYBwozFoE9qhwWYLnTp1R5ND7",
  "key9": "2Jf9J6NphgyzoLmSvNSknFeVoK2zgkXuJ5mVSMsjLWpmfzjuwdJV1TkAsoHbkeckjkwEBPPo7jKkVvbX5dEGamWQ",
  "key10": "59EEs87qRrny1J716V9NnqBxgUwy4Z9ECj77Ybf4VkTpzf7VwENms6PfbEvoKVNbr8XfUjMqH5Tqq4LoSRRawto9",
  "key11": "32ZhkVGZG74RGxGHhHsGwDv8eLnnf3sgjwpJJbFTZQcCE1Nmr86mqfzvdNBhstPHDM3KDoGN2UTGxfdmMR5mAAaM",
  "key12": "3KdPfusnGuRU8UKEsjNsibBYWEvQXbPiSXMRJAbckMkgoCETcHgrhvfuEzre5XM4swjtKNqRaUnJHoZ28j2sfqJa",
  "key13": "38N8sQXGfAefeGDsSEpAJVyK3sNJzr5rPbEqMUra8aqqrxzvCzG99UxC71Gvkb8d7yPJHKojX2QbYpQRPpEL5cNv",
  "key14": "3cfwkzpP85P2sYpLw58bN1q1BEwWkK2sELQpbA78DE8mnUwfsJAECW63oHVTepgCQMCTyfJrGKmmj552WH6a8zgB",
  "key15": "3DqPdZZCZWDpmxm8ENe7W2sYqMk2ZWrwXt7iyLT67bwKUKsLQ8Jhqs6ZUZrLX9vS1qTZPE54xF9k9R9ZYYm4XYv5",
  "key16": "4wBkpUymDDtrsenfbs79pEwvJxtGw6nLpzS2nkYd9niZLNuFK9Mc1Trdgs1SBGi4219hG2Ys1ffKULq9hwod24EK",
  "key17": "2KMuf3q9qNeKv273Wqzsmy6h5Gd5HGxsGmfD31KVW9hpNTUvM8K1XA9Ps8CzY32ycoKbm2V6JBRhyQNfrSy2rWNi",
  "key18": "3H6y1MAhDypcsKfFQmfn4gAn3rPr5HXQF3C4LM2a6nEqhziqfZjcocmdzQVPFc2Z4iTrsGxyib8fJKrbH6fHTEh6",
  "key19": "3j5Ap18UeW6NqChU6WzLadYFCQBgyMnFTrMQKp8tUXGw8sWCxaSs4QjUN25SDgvyZDWN42t767Sozw27t7Sjo2vq",
  "key20": "65WS24LnuoK1gftdkGWSBhFGyQbM6wwZxFNfe1swrtLvQwA3e3x1KSevyjGpUR4N25HebMPaMuhKbvPByGwBWxVY",
  "key21": "4TWBNNFeeXnqHAFaGnReRURfXmbZAEAhV12d6u98b1MgnhAnwmcUgLtWfvUASZW6ZFHMvchF9bZGQpKwd7efPYHK",
  "key22": "3wcEdd3nutJRRLw6MbLk2GrVzhbQFA6SY7XRh9h76C8ZPXVjE27VYvW1LVGgpms1KwH5r2etCpa7yWxTAVERcBfq",
  "key23": "31xWymBMXJvz1tLCK2wsxKg82miQBkVotH26bFS4kbGm6vjZmj5dgQJZPRDnNJCvWbWWKjFQHHMBgSqK9QQ78WFo",
  "key24": "3pDXvCLpJ5TaqrGcAdxZj73hg39D1BzCRctrn95CKmcV82BYp6jEkTtC6wkCGTKk7jE3f8aCowoh54F6aii5ACFz",
  "key25": "5vQsA229VjMPqAL9sAiFs52CLp6Tnuhw1FPqyvEJiLQrdji5E9bnetGaoWtVEe67Cis9Tqw8cF3CdQSFzYoZHDka",
  "key26": "5PiXVKKtycSG1MfqD3BFNJPQbs21CcXcGWhgZCBGxEJLyoTAajyvUjEWge5h6KDR6DzDcjrXgWMDQrzF7AwdYn1m",
  "key27": "2YrWuKas83sdJ8WxkAFu5BHpsWF7Hbg5GF3waWEEb6LdxUv1kVNVmDUzFtpc7D88D1GvmcXSy9uohVWdZ7wVn1gF",
  "key28": "2xX8usexo3ruK8Mj7rSFqNqWfLw6CGxmAhqwZ5yHCteRPrp2kauUar9Q8WT9Rz2Gdm6mkTdjUbhGxNwKxeasSdeP",
  "key29": "55vABGdDskqmwJr2B9p1cJsZXXVsXe2R7U2SRu1otFSikFCpRm8Kav6yQmqYh81ZtypryHnSgmcbMQb8AiGLMCmr",
  "key30": "5W1VcDxUoGvQVvVxH2ayh2bw54Ki9pzPiEwuyhJzqfzmtc5dJhWbA9XAzmJ2X3JXx4hRePpDwxJnHs4JBmMc8yap",
  "key31": "5pKHLRbex3vLq6Yux62cmXsJ6vkpBrZ4UK53KTbsV2NsyGKQEqMpuo6R3XB9WDvsmr3cSpBjRwYZs8YqmcmBvcZA",
  "key32": "5JcxXuTbij177RoEqAyYUsbyVaAEmgCKGbvsyDuanxQg9kduRM3whpYKiNuzpNw43DbTG7yyaxbBjooLAp79dGSN",
  "key33": "4ZYJWQcjykjfZG6EWWNqoYUq3EBzfmeW2zs35E5XEpanfNtNKR2c4APZ7cg3MBjQff78YBfrFkRA1vwP8DB2Eodp",
  "key34": "4MW1Doq8d3xfKLRW1j4cLoFaDCkLXyo9KUd44rA2UucPpQb5v5hssMtsoGza6wHkoWn8SyXYx7BVpa1nVMQcXGLu",
  "key35": "2pNLz3EDcrHxbBXkt556sAT6kZjS2NXjFXGUF2uk2x6ddoQqi7TTo18jGaTJKbLFTEEAUr5spT6WnXhtDTKTophc",
  "key36": "3Bt6tbZTiFMYwm9dzm5t4oJ4obLs4pWCFtWMnumc2t7M9T5dpEWEexX6sDoVgppSaer6p7U38LDJHCBVQouBwnK6",
  "key37": "2jbCApycqiVT1B5FLUVtqJ1SXW6z4jJXjyGWq7iSb1rj7YSV2JxxxmG4kw1TU3tym42rZYt8rW4rDNPtbN2uZfha",
  "key38": "2oS9ytSe54CUuhQXGsCarR8KFpBXRUiH7FyFRgpd16JGmWbbZLkeaNR3n4xxjxzvw8XrzdCUkDnUqUhm69WiyHj"
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
