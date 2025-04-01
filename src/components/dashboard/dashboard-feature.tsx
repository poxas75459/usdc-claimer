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
    "5pX9Y3mmDgxv3mYbX6N3LG3khdhMjQdt1bd3hiRwYxyKhDDNYW6mMFsXcQCtZUCuHoJtJdgZ2bvFJV8A9vBTLiAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23RfcGZEHMBfK4k8q4LfzRN4frasmivaj5hheQLTQuKVacf3sskRLYT6u6zkqcu7UKSJ35Ghi6Kdk2UvCKYevWtj",
  "key1": "2SGN1sZJTKDMsFq469WAFdarTXSLd7ZafX18VFkH3kP83eSDxnFPpaGmGRYRreC7Gm9EqrJF3HttcP2L2YptdG7x",
  "key2": "2h4qZ1AyZiASKirWEreuDzKuyfaWaorv2tMRCKgEFw6xFsXmzLHzQp7UaQUzN2uaMR7BBvpEZRWveXrHmAJ9EHbe",
  "key3": "5DDqzxPYLNspvLd76KwyBVwRv3w5rHu1oVm6bGYAsQtkaWQmtidPqQyvFumC3NAraGm9fTMXuEP1CgpAfECeHBZe",
  "key4": "4YHHKV5HT9W1x2Y86ubiSf4BWMsey6DX3gPbAZXyb6eqm1Frz7ZdBxR7wYYnkhrPFDDdgTMyjVSMK1N62i9PwUsM",
  "key5": "45V1Jf2VSoiVZtpa2bCUjWcdyyrGSMdfDGE3N5ACYM1PPLGKZ5RDH8b9n7xxWcEshkuJ8YAMz3gZNeHtzPNAbSPN",
  "key6": "27ruj16CHFTZWnvZs98G2iU8Sr5fnp2kU1ZdbB2raMfax7ohnRtLHpZk4J44MHrhXUCNNgfyfgQNCHLhZ48uodVN",
  "key7": "bUkB7kNboNDKaTmR3xyHSMYHppTjsAZGC5zUVqQZGwM3UMTw9hjXRRALGqxXsE99aeHrMT2ix4CucGjJ4MSCxW8",
  "key8": "47zGvNhkMDwhaC5eM75n8ZUDD8B2FpbjuLm3z9vGpeeSR86JzhrJkuTaq52VYX5HLa8K1VzduNjGE6vTadaBa41J",
  "key9": "DTN8g2ag3D4C8sa3ps8sKAmaLX4qhDmk5KfDkHKRUhRARTvWkuMHABZxd4SJdJctHLSSL67fFA2ARZhp8UUYNHY",
  "key10": "3KGPM3bBmDcXLs59NGE8eRa3fB5e3sp3PW8d1zActCTL21MrMeC3j19Fo9raDrGhhKhNAWspBsEZg6EMuBxL216a",
  "key11": "4c4qVHXUaAHjkX6hW9fXEBKjfp1GgzjYH5f8XNBv5RMAtcHEKM48ZtPM53WHUUrod1UETP3LHRoA3aDyVzrZRfYw",
  "key12": "kjBcL5yKPsJaVNQmbzimpwczJRHUyXacpYb6eP244y9hTFZ3zp76k2o5r8eKsEbk6RxMjfERBErBZb3pRj1Rm8E",
  "key13": "nUQYi7hqufnqZbt2JqfEpqjgipjm6hsKSzkxDiZg8EuSPJQ1wzWXKL6tkU4aSGsMoeRKTmMyByNSMQLRVpQ2fZC",
  "key14": "2iySyuSNZK8jmKp9jCHMkgm2K8TtPL8SrTg2RfZZDRoHYcnsNTzydLJAJmEu1ZN5PANnbN7HsWueBrwEMYQKwwSU",
  "key15": "HCKtSJ7Vf9nRXkJTFs57ECQe3Lwk5ixkUuVcKEWVtvRDoYNr1ZSLmXi3JwzK2M8kbm3ko7r1Y1eBAv9nKRubRVi",
  "key16": "3yZSXBBEGzYiph9cUyMnzvRjFMyYHAb7aFkG5t3KHCoMgfoBmRu3aioxashneP4JCiebRsc9GqafnhtHHm1ZQrR4",
  "key17": "4wj7uLe76V6PFFMXV1Q4fcetfCJmURCD5Jom4tVJmG48mioDoEyxUpmGTqbLLGBMPCRNaiDo6XagNVkccijYivvT",
  "key18": "2XjPrV8T399aXRtMhvcQDahAbuLeNCi5HgK9vQ83a6x3pjMHke2n4SLcbkUpe7XFnx71qMwZ16cRabUGNPUaQm3R",
  "key19": "FhWvkZz3vRzKYEvqctUUnz8Xt4ho7P8hmUNmxg95WkeAwAp7izkefvr4d8GcnVUjv1rEzK9mYZnJrYbDEBE6GrG",
  "key20": "2EShh1wSTe4koPpsdsdzLGN81LKhVwLFVbiFmwKvVVzjxp3rYAvFW8Zs4TyR2ySrBmfvoZAVfWWmhXGftHq8HhfH",
  "key21": "5S3XGfzaUWk7tB2Krdvw1gNEQz4mFDECsoyb3U76GhFM6LzYFqQYANR4JRTr4WYPNqHu3wG2iLZ4RdTbjoMsTarR",
  "key22": "5EDYj99DEjuDmbXDMYyHtRKLe2zjapm8pdRnL1kD9hHd1D9QH8c6Nk7sLfVWhboyDN4kFnzVDCvCRyuYn54au6Z2",
  "key23": "Dw7hEopxJZBLUVDvJ5srEH7pTRt33fdkBxMqjfrdyQrhrqVyuP4UHp21Jwr2WYGz8E8LYr9YEDkicKWJTKH5YUa",
  "key24": "z15U4tzGQYimcR84YWx3RwizEPCFwgG7r4J8syLcWh2Z6e3WgRQFAZptUyNZzNXyVsMPr8qy3BzRcE5A1NtR3i2",
  "key25": "3bMw868ooPZZCsXxmQbU5ZodJEzRLDte2ZTtNBrvEx3DLMxUsaHJMdAPPytNYEx9sE889pDSmEpTBVkcWzP1TMij",
  "key26": "dyf6bEHzRherxENYLnKWXwFyp2mJNJkieVSucT1Epafhp4WZJSggvyennvyKFLLqMDAbPbHUFKDXMBq5rLonJAR",
  "key27": "3mdMfqK2byanxbbxvetAXDGAr2fjPoou7r9kSTaqDqrrvHHPHoPK2iXvpBJ7QK3gfAiFMocpHDDZnz2XDL58QqRC",
  "key28": "45JCxmptUsQQHbFs9LUNsj4biwRo5ziaYfuwvBhzwLztLDi31YpAwGdizFrbsSvrqQkrLHxEMGrykiehDsVkVvck",
  "key29": "2UPXzciZZBLGQB4TJbywnc2d3yoFvW3ixC251DuF3v8yEAxb1bKs9Nw2r8RDpwao3RerDYKeS2tiQhPcSCBiBVZE",
  "key30": "3tkHGNU9MCr76QSMNMMsDagrcGLF51seCeRfqFshEhUKrPAYag7CRr9aAH2vQTb59AodWdaLankXK5dV2rA3Bhx7",
  "key31": "2qCVas2oZcodzVCNtQ635qDDD1zpVBpFu44pbueP6qZ7wVF2wTqCymwe7Lcy1FcgLSf3wAAoFGTPWxUaSz9jfPv3",
  "key32": "3SVLuakQk65AxbPUGcZLVMqXJ2zB9ijKdYjLxX8RXwjnHLR5JzTEEXXi8MgFEJvomyDZy42oRcVXJkD3Cq53KsHH",
  "key33": "WHSNLU5nUq4oUGATrdkV8xTDm9nya5cGbXVM6b8m3G7jnQqeTzKtYWqKY6ZVdsY8QoYFX9VaYGcG8LAYh9Hz56X",
  "key34": "NBowNjjdEjzi4Nn6HWz6mbN4EgkaBbaZtaPPruRS3Rt3WUMPW14hdLHbzNgrQCSKK9vM9tTkgSjMg8vPHP4VLi9",
  "key35": "qavqNXfB687xBxveZYq8yypsJGev95yeziAJ1CjSn3Gk7HzZegcAWytap59uMazguPEYEyzpFHEe9yM56Qjz8CP",
  "key36": "4GJJZ6ZCKtRyKXwxvTM2F8LLXjK39Bxd3mCMkE5J8m171TV6nBnkujUAev3Wn1BkUGCh6Vn1jEXxiTp3qw7JBjc3",
  "key37": "4CzMdDFeizmBV1CTT2tiCcuq7pEpNn1jpz5gVSvZhW8izCFZbh2mfAjSZrihEUtbDCyQtXRxB7KUp2VxzxvB25AD",
  "key38": "3vFvM6zdqYSPtucXrrQLwReBZH3YhZ1JaXHUDtTb1srK8Q2bBa6vwYQ3iQaLvdxYCWhYvJiPYGUBPH35KG9ZKUAc",
  "key39": "5j228fYX6QBSnPbYwi4qukfaWqLXq65SZdNHjaqKfVU5n29DWZKr64LUzw3kkH6Q2WAgVpe6fDekyxxuZhmrLmdb",
  "key40": "DF87wLaMFCcn9Z74XPdiNUVuFNnNYcH8DdiPMYNQHYV2xVA7V7P5ceFQCjxemhVi4LQqBKHRdJZUTGd54U7SPv4",
  "key41": "3nknPf9dxJNfqgnTEMZsp9BMGAbjs4j8QJ6zfc7gNWkDp7u6v98tqPfRtkJs3Xe1LAELLcmWnxxptj9CWcJLsZwu",
  "key42": "126a2eRX4HxSR1TWkQBMTm8Kbi2UzJ1M7BrcECSMNNEKL5HQwqFeXNE9ByEsheKdaxmXP5HG3csgdk8eDaBXsXCu",
  "key43": "HBfuoYDjQL1A8zSBNjfusXZ7dsWVnnEtyXpqrQb8h1DAjdcTEHCuCJseRqEsRXWzG7b4wZggHfHvxLzQzAcNnSG",
  "key44": "oWiERhbDYB8PHB1hpSTg6SDK3yVeV8rWQeEvYpunzAQG3hTqurgXFzqXmEhpG6DSE67UvhqiCLKUDg2Qo49FbRu"
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
