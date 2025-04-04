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
    "3dDkGKg5ywgtDBriwPSNSjNK89p2oe7xzTkRd4fEA4RKcsVSED3mDJCxfgvLBEA66HsQ5uPbYF8iRNqmDFfUghZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9HVR9Fncjt2Bqv6yazVTafRwRcas3JzVH5urhapHUmht5uisJER4sz78kcVrpQAiS65oKx8XmkVHRQeFCpTmmZ",
  "key1": "5sGxYjepDH6c77X6KGG9wPjsNpBgPS7X3i1VB7ovm479JX6EXhPzzTdDmWmUJzNzJ4PFWPi8N2uBRwYazhrtPDNi",
  "key2": "3ZW9oH4zgxANoRUP3v8FYhfdAfjw8wvP3y9wgsfJq1JUBMVB32499JWxoRjs1SMaXmsny9UH64gGFULXHMPmrC1B",
  "key3": "5DS3XYc92GPkab1tZUpK2dXC9ZXdgpj8Q1e8hVvdZado35HFMWqTpvdgzwptehndH4jYR6eNfjjqt8fzPM7puzef",
  "key4": "5CdUhiMGJGmjHhmgsa5vqhkEM6GcS8Gaf1AsfLUr6NybT6jYDmxgA3EvvFjZ9UUFBBHw5Gm6DfBUFAtWUG9xZTzu",
  "key5": "3v1uM8CGdeyE44MBaPwQDpMYz4PCHDA9EL1hoDehsXQhyXCaxmnyYVzdGWfWrDL4ZHGQ2krzazLNCp5KzzPjSkgm",
  "key6": "yTc8CN2eWH5fHCMWUuTqmGqcG3fu8CtS69AWpKQsRe7dpYpQ4ETbagCjjAx3Mz8NxNR78EzXtrJPdGw9v9yNFVM",
  "key7": "3cCTFcPTCeDtT6cuggjABJBmMX6oW1sYsiUTSVtMY6VtWXqfnFtsoNuS5AR7T6WjCfmNRbqMWa8DQFSMozv4wruh",
  "key8": "3HTWThcuiXfoQViEJcZiyRdXqAZFc5auMyhGET9U39guGh8DHHTBMbFEKm26opTQC6Xzyo9GvPBd3qLdVrbiSYvk",
  "key9": "66LY9fjvVVbaAWR32fePvY4mBgKU43mVD95d3YE8Nsh5bEp1rNYwDJ8VFHdy5HVXBa89Cxz86yPfq2HSHGnmxJUM",
  "key10": "4VQTjcFo9rMSWqf6ZsT7pFTHGHQ8AQ9cPBhZyozKg7o9YhvivTM4ubnN5aAok7Vq6tz6SZQusRDamRbjPiUPyDo6",
  "key11": "WFm4KCb3rAF4TBPc3wvQM38Akpe9fcAgbb9yrGbbJ7qDmyBSQFroZNbdBNAYq5f5ue4ishYo3eVkjAxTMkPcvt6",
  "key12": "5HYmgYP9WuYwYdWrivz2Npmu6JsSSeKy11MTYrF1k7FW8gdob7WKctzvuDYWduGSz3Mm3GBf95arPzy5kKvnA7zQ",
  "key13": "5EA9mt428xJurut3UgKMWXKXq9zoW66YSQB9X3PhkbccDa1tF4KQnvufF2HYdnQXio7P6PbHbTNd3rMBtGpy1jQZ",
  "key14": "4jjBgmiyFyVF7XyN1UYMXGdfmpyxz27cZcbPnGFEqY59voadsZpcjy52Aqnb8R8YGsD2uachZTTAwA7fMMuvNW5T",
  "key15": "4tMw9reAxHjv8Qu7GwkbW4M76wJxcscax3kAwDdMz48Vm3FVzftSDEg6aDXs2CZ8wQeKpGWvzzDvq2VMCWNTYp1w",
  "key16": "3CSQ77h6QEh1Gydq66yuLHFTLgAWDx4xRXxDNu2oxuPLVnaQHyd6V4Vq5kDSbkTMwvEikmw8sA3icB2zQuBookRH",
  "key17": "2JkmM6Pj8rwo9TYTbk8wEeawP95sBjLiKqfpezuebMPMcMCrzwTjWvjytiNavBiWWi3ynovKfetvZXBKoiagnMir",
  "key18": "45UEx7hCuEtayZULLh2BrPD7usRihg4rtfDeRtpZR25HCEibUvT9FLdVpKJTFhYTVfqygV7t7p57m1icE59D6xTL",
  "key19": "3seuuvJSi1BZ2jWjpBFxyJAF9jZgTeiWxTXeQiZxqvke19LdxtbSgPJpRjyiT5fxnbEgiHKyipsSzkETFexWcqh8",
  "key20": "3wzGqBThgPjhcNTJCkfQGHSvt8AtzczNTX4VC6cEFNmFFrADJ9YPrFqbLex3w1nyEPJMYFyi9eVDN7AGhsLaxAy6",
  "key21": "4mfhSdaEzKNTyujnaEjTLv5uH5mSNXk8aUCGFeqTtexeu4hz8sf32nk7xmi9gWPMWKA88bWu1uG5L543XqUEtxpj",
  "key22": "4nsb8Vjsgkb7xCKPj5Haj5tgmn7qK3V6HuUER5GZp1CTbHrYigZn6eLscHwY7CsSnyhytv4ivzdptGkELvwroADg",
  "key23": "QqoWwUnUdQF6wNJLfgWhEVXCorhhYxQuXjYxjZYt99MoMjp8LtZyKQUa7Y2BHXR7VFC1E13JFYL7EoJ4c1rVKcs",
  "key24": "4UhwEEXNTWVXLgK2k7H6B6wXTnnudb25c9FqjhfLyrcJHt5kgx7cw9jrmhQUSCW8b8TWtA5BVZMKUABBdx1VAa4c",
  "key25": "4sqxEnPwpJURCUmeYPV1eShHxbJLNNHTLVt8m3CnRdjXedZFSoS73V5NhyBrSQDoFuUsKKt47EnW8AuRsuTx8zXL",
  "key26": "2NhBL8TghryX3wv3s6kJiViypDaeX1HrbqGwnA2QCPBUTLdevbSwspVDrYdnQhjRGPLgjt8aLXM7wPpuNbTJERPX",
  "key27": "2E2cR2v5tp2hECNs9iebLTLw48pkL99wvhaLYqcwW9SiU1fCtazMVCfsVot5VDL7745BHZzYjCgq1jt7rx45xTie",
  "key28": "APGFeFfz3X9kHB2h6B19yzrvj7GDwQgTSEpyQS8St1Cda5dor2G1YjzaGsqTKeQiucn8zcrpyVk4Zq9DVETBD8d",
  "key29": "2eWkAJyRP2cB65x6ZE8bRRm4GDFaLH2qPQLpA1ijKcRWnaUjQe2tjkSA8sXoDB91nYwC8T9yifHb68SZePxF37ai",
  "key30": "2e41oiewEnfEo9jMshQHd2jaKP44heKzArMMJPa2mGj7UV3e2QaLs8TAmoKdZnDFCv69rfZ1gfHqwyrc6Kbt9bvi",
  "key31": "3VhKAcn73XVqY78WAdp1JDnaSnphnkvTaaBhhwBDxcCM1PiCii61uzgv9RK85CVK4pfHjVN5fPGLncG3s1gXEhTr",
  "key32": "51hYgmr1zJ4X5tyRyqUZmvWuFXy2dugoGQN5sTcCEAzb3ghubfxjwiqdVAcXyv5sRs79fgU1GGqzP6eBCrbshSNQ",
  "key33": "4cV7YkTDaAEeKxpapJEPzmVtqFQjcYtCNE5WsxtyKC4hfxkCQguX9cDfQVjRD3o64Aw77L6uH47vBbubQS1h3NT9",
  "key34": "2K7GKmgAn21uihDrAydq4ygmzrQKV3HRm4VTj3znoY1922DxmhS5hbGbHVjmd29Af529mRK7bae38qzQnqEgz7qC",
  "key35": "32RiaUCHGcEJmttB9SAaSbdamtwWvy3Uud8sU66PfPDuBuZVme7CG6kwzWGJ8b8VFZ1ksbkSM6ekqocYxmXoyoMj"
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
