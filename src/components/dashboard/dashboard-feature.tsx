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
    "4bKiJWsFJkNw5wdxFtHdZFHfhHJEDEV3rmjNJXbofTeJkrSNFnZ8mUDsxXS1HAeXh86Ggw1cp9rsUTf5Br8hg4UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XP77xqPzif1WePWMnuYXX6oLeJAgaNJTmRecFocmVcUA8tApAt8pgKQBsGuCK155W1wg7WmTV6foe4BFiK3bqCq",
  "key1": "3TjvEoSTYn91HWqXdQ39xMZWizfY9yYjpREfGChCSaHUzY9Fn4y7wfsh6mpJUfmAfKYSgW12Ui4rkQQ1SvZjFtHc",
  "key2": "2T8FFjPyUDmAbCyVd5aCzBEhiLoKX3rjh9W1p4c1qkkHPhgtUTa1g5GBFHgHbQ5bVGDheKqykbdJvA1LFcFu4PVt",
  "key3": "5anmjEk4ZDsDbi3EiZsc1nG7989amtbYnV964mNE5uUPueUqSZqpMdJnWX6bhhUkm3z77spJSD3VfFupDCPReCdv",
  "key4": "3VtyiYdyTYhsV3PxBuESai75p9JNKSj3Y5FyyPMuX1etTVQ5CGqK985dRBUjG4VSjxPAukSzzWy5HB8EGx7kVPWs",
  "key5": "3sQo6oL8e9BWZijaLYEaksS5Kq2LY7WFbiFAJKbVeofsJmVJYG5Wo4wRMiMesJcDxaQYpWgxPfHEXGxRxtGx8N97",
  "key6": "SPHDHRp9A9WaSVidFCiFd5VXbi3XLZG69ZEk8NFJSqfo8wQUSGnZREGpEjhRh5HXoibU5KnQFbxCC12QRXpFFvK",
  "key7": "44rUnYSf9dyuApC5Ne2ByLxVa4mAXWxRcfm97qsb2jZ564XWidhGU3zoeqtgLm6winMuRTtLVnz9MGpvUJiJUmQh",
  "key8": "3qYkdYQHh4wigCxET4F4wtm73Jw7SGCFb32gT7hmVJocWFhfTyxjkcCx7wTdRCVhSnhwuZ4oN7UWZLDyCkxBDKpA",
  "key9": "JpTAMrY3vaX9wyJwX2exx1CHYVJ2gGidg9j9u4612HtE1jz1w1ynnnEcCERyyHcZuJmkzM3ebDaLJGn1tkigbGJ",
  "key10": "3aJ8GsnqCqqGaead7VG3BskjKuApodkVkgRFmPrLugBekQXN8hxuHa5pjsNH3Df27aNavNDnGQcUehsUihv4fYJr",
  "key11": "3goPJ6XDKJMcR69a4GGVin1rtppzW4gJGX1Xst6CGLbXr7QCtDQFqiMptN3m7WnhgSbDfmixokGMrtirkFXH4B6h",
  "key12": "47FhXf2QmPGpiKTY2DMpUoqfwrR3qcmtockvUN6G3exCLBoMJy6GhKubYdmZL2DpGCZCKRUTBtMyA1Aq6Qmc5jSw",
  "key13": "UGQVj3SrZZdfLxxVkMGU8zo1SDNe1MKP3qBp5yyz5gxukFuzhLfLTdWZR9W1wsFu7zcpsmWzTE14uxrw9q4B26G",
  "key14": "gUe7o3Y6nw9hXr9Xq4CA5webivstRxzwimcPDedhxYSQCDjgcspajkTu6X6CKsH7xjZ9Axnz7CkXS2uQmjdMgFh",
  "key15": "5JqpsXNmKwnBM6oUYk4hFxbEL3TySCF7n3tbjNxEgU8iwiKXHmZmqqpBqvEtX1vHRmawsRu2fDgQL2zu85PUXTtH",
  "key16": "2keCkezHJvSZ5nER2QWGf2cPuTyKMDW5EQhnqXdm8EkUpgtAStQ868NwxfF1ZqCUoZixaPnzSDVnwkAYHCqgxJnB",
  "key17": "2GAv9SoxiDgnzDdKjQuE95jh7mFHHwbEy9Ftc6tuLCNdduNFLy1EBVhVkpH9W6ngJm9kD3gJYVuEDM5GjhfUqGqM",
  "key18": "5uueGRpSgfqjky4Q2CoDdPEYhQwBVmWjCBNRtXA1t37HNK9WtWC33AzVvKCMFUUM72dhHZiqZ2sJdYBp2PhCQcTm",
  "key19": "5w7Xz9xSZCAYC8r7CbeZvBnuWqNnApzcK56FSA8PH1PZnjLkGZJY9wKNk5CdqrKd5g46qaPDR8aVAeCgySQDnDyH",
  "key20": "zpYi8U9ijJxVJWGDL5HsmMetTfggfK8X2RRWxMyzJ8fvfCwfHzFBSsWEaEJpmAy4aMkwhe97Fj7qEHarKanVwzH",
  "key21": "4u6zctaUbCoyoMxfU2kv3NgLKYQy2jtMaKy7P8oWA4oB27hcDSuqSS3pXYivUzBHPzbfeNNvx82Fa4zvg5feuYrF",
  "key22": "3jSzCzR5hWBwHJH6ZHHiNK2aC2rZgeadq3HREMQ84Xi7S6dvcFcYSiHBzkVLsD6xX3zNTSyFkwArGU6JTpsrP12E",
  "key23": "3d5BSDytV31gpavhcdTHz8bqik7wWLTCvs1PR1RGEMFMVByHwhmkgoucDHZGcSJ2E4SKEtxU2cbbXQ7ueB6Q7yrz",
  "key24": "5MbqcUrVjDSPGjohPaJyEHj8sGHeQYQ8eMDKm7ooaYFMTMmqXxpMdNhh3fukTRyCyTGMQ17xDuCfExqQg41DTwEc",
  "key25": "2ufZxCdxs2Ajv8yjWWKy7na8cctuy1QNgDsLDVCuKvtPhNqp4TZGsthNnCJmwU3xuGdYVdSGNxMgUytHThLAdKh9",
  "key26": "2yo6LbWTR1Ktni4PARhcvgPdYu8NidNmauNkkSgzGNU8Tw2kNVQ3YyN3WQZUhy4MRRniWVYDyRogtRjUetMy2Fhx",
  "key27": "hP8dvj8h3omdSsgQGx6FfM6pdsC3wMd8AVLnfrvjnUdKjDFrg1aGgfMiFwf74mKKm4CK3u4SbhaCxg6bq4cLZFo",
  "key28": "671wsbUDn7rmsfXGHbHhHJdCXU8hE56TMmCSX4wWoLJXgTr41C2ctf1WiHNfTQ8DnSmPXNE9aXjt38uZxneuheHt",
  "key29": "2TbnQyvH7s8P55yc8iYrq1JtGz53TnLusCLqzykWMmSXqcjdVG94A7FbyHSzKyTCKJdsyyEuAMhPijWgzC6HNEpd",
  "key30": "hYVi42v5ZZ8HMyAJuYbEkjff3B2pL9vZwEvZdc1D2rDxuFqqFnsCoZb3VQuhkk3Z5wcfQWdcYtbsqC4wHGC1hRm",
  "key31": "4egbQf1ZgvTYzUZYHRvktqE9Lvyoe2Cjo2hrYYG56T11m8rop6Gs2sRVvyde4mwAU9WpgsTAcAUFrgtoULVRnXbn",
  "key32": "2DVPr83YDDz9yWavEHiv5WeEUkXagFynu2v1ET3BhCoimVpTwWeGpXNotsnksYWVknFwxrdErkoQE4NNK5MnFH7G",
  "key33": "4eGcssRF5mQJsppsGhYD6pnSodYbHWkUt9nUJuUsDu65zhVdH6BZg8kW6brB2JoYi5hMQy877LmARveThmfnZJ6X"
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
