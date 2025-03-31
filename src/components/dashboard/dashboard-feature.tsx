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
    "4fkbmKN3WYHWXHht11dQW7ad2wRtTCZqZcU6vS9AdTzVGUPdUWhn8soxAAEmdisiPBd4ZULmg5EDvKUVFC6nas7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WXjzR2ntqNF6CPaTnNY4CKYPny9F8RUfuoKiQzbKc3b3TK47M4JDZYrY1FYJ1Da5ospfhpCUzRqNFnoiDGrR3z",
  "key1": "4AHCMS5uUg8DZhNxMCa7Xx6AiZwRzCHq6UCDPz31hAyKyeJFShsZXstfmJYGQkcDtJmebU8Q3684iRLPue2EKiDs",
  "key2": "4hrpCGHy7KpaSHq87jp8VsB3miSZfx3GvCsYeCX99inYjmsmgRZkPcUY4CEFCVgHXk5JRcxvwKGejYkgepidGgjx",
  "key3": "3EcVqf5pZXm6Yt1HBD4insNq2DCH1uaKjFdJ9BgDMtyVDS7WGSooa3NvN9JD1RKSwu3QCQbHG82Vey4TmaaSEFk7",
  "key4": "57cQ3PBA9iTpPyaE8KS4dHRiBRcdJmU8EGUXbcNnatr7uh9jgqd11ujXvRinqQo455yhzP71KpyHMUBhaVc3XARA",
  "key5": "3vF6t5SBsfkWuDVDHV3qcaxw2TZYwstCSEMEcecfP86j9JzUmJJPPgJykt7fqqzBsK1gmbrHVQ1uGS39zF9YbuWs",
  "key6": "5a1oqMowZoTY67BXUbYMZLGM4NfVK1oo5wLkEtLkAJmTeuuuYB3gyhDdq4oQdggknAyvZDybz3G6vwP66eLZ9abM",
  "key7": "4NghAQVAjuxVg9oexW144xer4M2uLGEEGefAMkZJRxarqZpuEVpDpX8StezBWgPfwZ7AgB3HKAZQEXtibeVEVdY",
  "key8": "KJUjCMnH2ykw8G2tSTTeTchH12t1aozUYkfP41KWt5GxrDYFvX1HQKUwqLwwVBBKPSQm76qH7Achp8vuBaSVdoS",
  "key9": "rdV29MQUgp5fzbtSFY1CKJGoPGbXqong8po7ehbUNnZ1Wfu5JgZ4zA9M455LZknsq9k37poV8BrCmSgvVMjTULo",
  "key10": "kJJV5Ed8MiBdwBQniAQ1jS7hNibfB3yhidczqVYxayRRVCpeDpAbaVwpq99945htN3Z8uTS7PkzLtbsjFU6Mqg8",
  "key11": "4RdFVHVmJMxZGzkLUUacV9u71RfLhqQYvf882SLBuVferoR4pxc8H7YWDPDvGuFxx3soBmU4kPKbxkkpTLZXhb1R",
  "key12": "tpkUNW3ERWKfdPm7Fhpur1ADgSrxx71FBxSGX9J5gj1DCvYgFe1gTfWzATuqCzondcRFd4vKCgEwDbwXykftnTs",
  "key13": "2vGtAMyoNyAkPwMos8AqfYfnP5csHgYkYkSAhNLvdUjYBYL489oPDx3zvD6TQJwj3EQsjNeH4JoYmtiqSka9Gxx7",
  "key14": "5agvab85Cr4TvBVB26w1UMPYrgBEEVEh9PKC9Z9W4ndveASVSB2JzxaUdag5go22QgDSDaq7QQK24KJeEHAqdLam",
  "key15": "3bH1T5cKiJoUxXsy1GpR9nFB9ZMDU2AfkaN7mg4QGs5DG6kDXP3zTaVEUZpUFtWE6oTwvhQkKB5qtM7DqFZC8Ajc",
  "key16": "R3xMRiCAbAy26yBHQrWh1MbuMPd36f4iWznqYB9ZyTc4hUvtDy4zLknoViGyPTKNQ6f47Dq8VyHu8bm4ZgNwM1K",
  "key17": "5Euwz9rhJAr4jrbgVQ1pYEQRiQ8ePizACkCFgjiFiK3PyvH6m6iCjSNgeGVBoCyvLco3txGDN2hFQUZqt9uWmdG9",
  "key18": "5ELRG51tVGMfzF1zoYKkwrXWJ5HNjXtTdL2hLf39PMnub8geakzxGSH5LT2GDf8oSK7gUMbCLWXncMwq4Z1dy8bU",
  "key19": "2ZuQR9U3S3pH3aR8sBgDbw8jmdkMGTStUCT56doyzdRvqtN7kfLSPGtkrL2GYB1w5QfdF2NBKByJsmUtULUsVbfG",
  "key20": "3WDVGjf7jGPaGekDg4iUEQUerPGgpXbtLWAyQRCtzV1oS9n2TMbP62gAsya2GpGbNG1DX1UK7PXawEx7LXQnytS5",
  "key21": "2zn2LSUUY5KpASpfJsWv4FNPvaU1uzLJEgfvMJSuowWJJeKoodQPwcjQUPMJ2oyruiVSQy3yiCiRyBx8nTbPuUh8",
  "key22": "4JK8vKN3DUB7zoYt99trpUDRYuFEzXvXoFWE6knuToKSynMG8aMKabnM87EKfVCwEtxzF1q7sFptAuykTtjk6k2W",
  "key23": "47D6uQR9uaLNVkzULdkYUeTNEuhSBCmMKtyTsivmPVo8mspKpdUTBDEeMN5PaXzhcwchVAafoWJzYy6gVfo9d3jk",
  "key24": "4BdB4yXv5MAzgBwE9apYo1jXMCvp8CWJQ5isekCGyvGwkrQAUmZhTX7Nukn96ibR5wur33jqJ4wQwRZjt59iXrdb",
  "key25": "4nXF6YRFuE8wHLifEabFfpDLUsXkMuqh5A2fHvwB3sCcaMPsHVru3kwejVY3kL8Xfp2StGUyaYCj2rJcZTzMxTTi",
  "key26": "34B6k9tHJ7aubZeSumr7ywVJSJDoSP5vBTeruErL7RCBKV1TdbAPkhvkiLeKKeA2qux6Ppp4AR2BnDZFB3LzLGkd",
  "key27": "ZdgqZwgt8ktPo5E66uk6xzvUuqgXFdePHC89RMXxQbMZeT3i9QsLiSyTD7Fc4xXab2MAJ1z1QXHRgKHUz6nSLbN",
  "key28": "5xiHuVR2Dro93fFx76N6oyxRumEr75iNbENyu7g56TgtBkPDyHT9mMJs6zUJWkXz7uBybuRHUF58eyRCBrHVecvm",
  "key29": "9kJ9N95YH5GSwBUFfpCAMJpEohhj8mdy6A7N7QZ3Bi4HyYVTVsmht1gFQ9uWk8utYUaz3tv6qS9i1CYCtmo3iNL",
  "key30": "221dToMR2NJpPCKM7JV2VdEXJJGALtw3s2wDaQ2w9sfbpUCH65iGiwGrgWDZBhBNhrCEMkNtj2zamnwABhxZJWyD",
  "key31": "4nFrnsaHaDbDjWnQHvr7ik2Nxm3qsFxWGwr8s8M1zXhjDTbajrYzpiPZjcyEne7NEyi4jqSgJLYToqugK9TrPsen"
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
