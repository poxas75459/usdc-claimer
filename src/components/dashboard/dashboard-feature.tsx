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
    "2JTY9UVtzS3fmPv8mLRKvGDLk96FLo6Db3Ejrq6o1TzsDdfSNhrUBZYusVdxAnkwMvWfd6A91HXzsxHPYa48pCkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HxZswru9anNKXcUg3znW97mEYSUwsaiU1uvCYNNcefJHHTRBNegMMmck4bQL4L5DWVjbNsJyKf7V4mUGWQz17u",
  "key1": "5xgZG2hHT3hS5uQy7pPCQisqL1Uoqg6Vf3hh8kh69VLsEZJyWuCyiqkhQ56fApFbRp2qqyJZbZcKUNUEGEdff3AJ",
  "key2": "DpfYjkT3VkQpnEmz6UQcKTAR3qmZTnmfBr3r4FFV8iJzSjBESFPLxG5pqXqhW6rFjNGc3xksdK7FZzPRUrfNyHL",
  "key3": "2oH9ohqebNg6MEmJBuEkU7SvJLegKT7LWwbJ7rw4fadcWZzmfnYXZzEifSqVYe3YCRsgRwykD37Zaw2aDNSWtZqM",
  "key4": "5E74qQRucCMGZtPpVaCCYt9bBy9MZ4CTiWWeXyVXxsNymXHTezD1GLSDj2UJPN5skqyYnm71zEZs7rMLQdqH4jvt",
  "key5": "hgrUkzhtxSk7Ptwp9t2LKfUYiHzU7U67ofZiNH9wD9LcurA18YyeqZgnYVfLDxLLXs7MYM7ucY4mFMiuEnpgUcj",
  "key6": "3h7DT468DukGrf9mZKfv6fv2wvj5NYY3VCETk7WVz7X9jJKXeytL7pKK328ArqSnVuYaFwBrhsBua1kYrywc6y1E",
  "key7": "4vjufvw1x8jnSPUem36u4BdiVhrUJeNyvn5qTc4kAd6wvL11gN86hJT7n6v1epbguLAnebuVRPLGvJ49opDEYaWP",
  "key8": "vkanbPm9LpuvMDRXV9NYjo75Ns2f8vYE1ht3gMJkSQxU1AEgetW9AWbeaytDrX3pV1nDbX34PefnNL3kP6sPRHw",
  "key9": "Pw7rxWS9sUgq7sg4H8VftJWfmkFy7oD21J4LStk7YmP5pbkb4xUtNcVqpbXhXnfqazKmQJ4NowsCpoHJrzE7DV8",
  "key10": "364HCfZp5Jtsm4tynJyvV3H8yxK4aaNGLcMudrYvJCRT4zcfXPxWZVG2RDWhJX7bnoYchQq5RVJxByHykiGrDyNm",
  "key11": "5F3w4vo1y4orUaaD3duVXjQh351L7CGEwSkBWbQ9YyWqXxy1PdUkiM8zUSDVbsb6SmNkXNi8TFXTG3FcSmmx5ntq",
  "key12": "5WyTEZA2zSRVc13vpCW5adNQn35t5TbvFH5gMgEFsP66meMAEnBJFtMgDx9XUMbsbZamXEAbSHAS8EZPEHTTftN1",
  "key13": "2uEe4m1V6wTyKGDRLWF75SUXmXRwEAEZhZtM75LdDrpQDcfo4tEC78vMPfk5MsX6abmcEtRaua94ggGeJCRQ6ed5",
  "key14": "4T8Ki9YRkBR5Ep4dXUeezNUd4genrpE8mhAmaxkcD4yBrESXTf7y4HC1qNaJr6ttgB7aSCbs9kW82KPYWYzDwFfF",
  "key15": "21L5jxnyuJEHxszkAxw6tSimJm4zbb5wZeH31ied35oq5woKSAMBXQHiZrjLCtrXXU8uMv85hNgAJAg3BSbdbDfS",
  "key16": "nHEN6c9Hxs1SBWcSiBiTcqikwEJnAYMT4heFzFGvdY4owSqJw8C9Qov19tiYkuLnbAm22RDBjsPsVX4egRnErvH",
  "key17": "47XAuLs6LTLiDSNy7V52UiXVevZeRgifnerai7xwDfsduG4UTQm68fEgi8KyuhnTHDTSkssx3k3E2zN2KAFHJGWq",
  "key18": "3upvWBHYkB68GbNqP6hmX3jmnWRo3RJaPNKvqHyniYmeKCvCFDBYyzwcNXWC2s2vRKHu9wAkefpwGHQpB6jBGM2G",
  "key19": "4Ei6tvf1SSTM1tiwMRDpEbzRNFhodM599rv1fq7mPcaiko67Vf129xdZgNe4Di8VjQBTjFWDWuhfM4fwAd4DQGXQ",
  "key20": "yg2vy7DzoqS5hkdLNvj1XxqA2vaigAg66GLgUABnfUXreTzpcgoY9kfPayajc4wLnxcs7Utnw6NAjmErbnJWgpV",
  "key21": "2rD1QA2hv5L1KoHf9ZSDn12QWwCvp6mh2nqvgGGGvrTCVK6egYHAeThvyFzAAjoQthSam7FEFhaxW2ZFiXcmDLsi",
  "key22": "2HQ1V86kJ2vV2ButsdxLKPYXXiFomzkbHY2hZXzsSHp8rtA9xvTZ8UXB57PBnY4876YbTYP4Yubp6KRnffmYDHr3",
  "key23": "48sbyUiunZZ96PfVm8DWWiUHHtZdmwkmXWhpSfMGZ9cfhaTHQHLrqzFkNzgpc3DjFVYir5oXQ5GaC6TWQYdMfcnF",
  "key24": "Hq8N4jadZ8V3Yr3hAaGA9TYXc1GqoJDRnrhhG3Vec3d85DBDtq1HKKFPwBuyaAMhyD6gSXAQg1H9Ecbm2bGAA18",
  "key25": "3LifTzEhLRgtXmNaDFfcWA9sn5ASLPJYN1VpykszYZvPHAiJtLEa5D1ExgG8wDbVfndq1cykQSuFvEwzHfeBM42R",
  "key26": "CzqFqgpU9xkDYq8NbFwUMdCxrfxv8y4DX58aGdtnjv6HvnHdQoWoY8VNsFpHpxWtQiYyEALqkpuHdn7X7BZAAXX",
  "key27": "4GAvEFBNKBdiU78QcgAwQdvYbCjCa79DM98e8rvXxc9itjGG4vYGhwSGNVPdT8ngnw7yjMYUA4qmkkFRZeqZbaXH",
  "key28": "41h6c7abExHjQbaHELgFKbYMn735KBKjuA6aRggBbh39jbvsD8fVCxrm8UqWFn2x8Ph1nuKMi6XTSitrwSEUuQ5k",
  "key29": "3JjCVE4rMu9CGvao7wZUaMPJ9YGvLtX6QU3ErSbyz5GfxQrUPd1YEh7qtZmV2qGJHi1FBGDfE38ZTThok9f5ZEf1",
  "key30": "387CG73H7MjK3hwbukmT7bLa4453CJ6QuMS1f8NG62rmKxvtqHCcpncrTtPQhh8Q8zy24hHu3ofDhZviqsv4kgEt",
  "key31": "67HnusRJaoeHSdASkBrnPUNMhMKpaG2ZiqvPr6CPBsPownfuRh7JLm8fEcni9mCxgWSGktP2LjeCKbzVWEnqL1jE",
  "key32": "NtVzoPmSbCsx14tQJvdd2aE1RwyU2rfCmWwLkLQ9RaJDNfZoF2K3L9TCuHDUv2uWvyaA4b75WxZeNUtmVKideYd",
  "key33": "3SoBDQWLkXBWLVUpC6nwppF2bAsckuLDvZAyrvWfJzRBEdcKNQTjzYnqWXScZ7kecGYstrv9rAZTtjPa353vhJGM",
  "key34": "4pbkFUSYjat4EyCBcsRNKWwXfZHukYTwLb2A7t7bC98xqeC41eXyAoACmwt1cTPSCsmdj2xTSBjYk9qpQbQPBjF8",
  "key35": "3xd5xr8imG4qdwDRYdigSWUUhyZ8N87MJ3zMqZJTFWTGJGruHTouPH3xVWDwHoobph9VjjVR5UxUAftXKKzk9Lhy",
  "key36": "dUpEuVVXxbXdaMenHgztvfjwzVGX2VP7NK4WzXZYz6LhHYXzR7TzNbrtMMyrW9CqEFWDj61WVwfbidpHa9c35Mx",
  "key37": "53xLr2MbBiN3bAuaN5NLhHNhopLVK1i3cFvpnuds69811G6SocSYFKempZSaanhCS8DZd1ovC5qjayPw2T1MXE7P",
  "key38": "5GJWTYZMzJw22EdaUW6fgrvyN8FkBbcTAWsimhgK5ib1PpU3kzj7bLw2n4PD1HYK7oKNZLY1hoyCaHkAEoAbgCSV",
  "key39": "5XGedkpedHpaJYR9Cpp81LmqiwemRPqjJ4bfjKTg6koHUDa6q3pxndWmVe9VHazoMdX4uYwz4D6qyTg1LMLxHg6m",
  "key40": "4VSEE6BJF9YuVfGafRs1M5nmVEAm6pTHj2oLPAy2upfH8ZeeT1qhr7xrWSvara7JBHmd947j8T2YQ2zgU6WgpYoW"
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
