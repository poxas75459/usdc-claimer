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
    "5smDw53w1AL4p2MySWVM6zZABdtJBP66gCvDLNyApxvDBjtKzvWeisezd5wSVQhrFzZ6NKe1yBvGifGQhGEDavkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTayWzccqYN8wH8GxTLprWwGv97btQks6KRTwN9pPcMFHvvvrQP8naviYdtHVYVUAe7MsQibes3hXD7FphVQScH",
  "key1": "29vHJ1KZueUEBEkZH1U1cGmh3nCFjC9Ze8HsPz6eMSMUQmWxyWNtX1eWc5ei7pjjDLL3s7u951knKpuCVGF3L8xf",
  "key2": "5BoWKyxkhoKG7XdAD7CyYrEqGU9rUekywB5zKA8oYz3WWMy1mNjxUEba31M3niueBormKXRLQkvQdsYNqLep8oAV",
  "key3": "64sq4nMhfmvbp24R2n9aZY11w8y1zSqA16oKm7W8eEJLfoRX2feZGtQpVPaKTStQ6LufJKAs75ysCCjxsYBH3KQi",
  "key4": "2o8rAfERXbyQfQ3JsfsgcagHttXSKviRk58Ka8T1ikMbAi8r8uQzNPYND4J7CDMC29rT6zvzV9fejgvnd8unAeCJ",
  "key5": "6QPxdJTyZnxDfo1w887ShjFCFFHNFyH7bamJbAbxZXxBwDJ3BAt3aSVP74ys9oeSbvfcn3hzsRqtCYRozVBk5kP",
  "key6": "4ZehkaTvGHW7N5HVNYywF2iDggaU64ysqgafXNtunTBQipBmUXHgbWA2VhDqr5bYwPNESN9nbkeuFrzfLmMdTLkf",
  "key7": "8WfehNDE6TErw41rgV5hnrWfhVsUzKPRHC854ECzLBtPMX1eAocGY2UMjmMnjcfzPt71yiZJor3VMsVTSxW4aHr",
  "key8": "2Y84SAWhXKhFzeLKtfYJZJY2dHZGc8qcsqivFpYHK1dGJ7Xxdyq8N9gzCQPvamUvWNET6qCo6V9iUZr6Vp6584u8",
  "key9": "KWhoTEcFSNADNwzDYj5LnBy3xxHfdZsAxSctjXvffnrWxs1ikRDpjpP7RmX1D35syk7QQRAmqAUWtmF9pRgXShR",
  "key10": "5c4NygnH3Qh2wRTj1mZYfq5vAp2U7ut83drTPQP1MYHAiUaddkVsNYAj5m2m2uttfAzF6RxtsxmDjfxswnVciPFR",
  "key11": "2QRvwrDfRkAJ5LJrzvwymEe2AUu4wYXMZVq2EdbrVa9Ez2qQMKq5VuJUL56krDvcuYqK8FRWqsG4BoBDdjbPeUsC",
  "key12": "4ykjLzV4QogxEiZZPXY5XN4S52DncRngHjHdRXSR4Fo1QSvR4H2FrkHBhFjufHJmu7gpf9xXVtx4QYPUDTPGr7Mp",
  "key13": "me61QVCKaF9JaYqeVn8iq29h92gW9jpzBQnqw51BrRvnFZPCMLSpimjbcwzj15h4iFQ233Ze8jJ4Dzzu8i9qSUb",
  "key14": "3ycBkJEjoPhPAYBV9ioTW6UCsBVT8R2DtTHGQrVL8YUnNzyqyEZ1R9Pjx3FhHvnvdEHmcjUk47bPtgHRJbWufYem",
  "key15": "4vnrc9wikkiCcwsV697r2T2aVWKjVcxUQ4Ftg36sXT8uvx7nGpf4L1ELTjXaB4xMqSipEfVYmcGEYVocL8hGzoLg",
  "key16": "3YkjJd6vMiUtRfe3aHAThVikwAwBj29Z5mdr3DCz9zgU9uyy5ojCxNKaHDXUW7FP1dMhR96nK4y4KQ62M9E3LaaR",
  "key17": "4y55VSpAMFfzk1numvunkK6hYnANGtjMMb1WBpRRUyTEqngyg9f265UmPKA3n6tMHsWo3vJXSEcoYcdMuSm5hLN3",
  "key18": "52KfYuCuFohApEmS34LjgHCvnkTuiYZjsx98ksZW2DVo7wA6ghWn2UFG4Qdu32yCBV52j7MPXuLfJqiXvAiUhd4i",
  "key19": "2VfEmdHSmH4LKbvyiVHZS4aoWvdubstNaRqoKDQqANSmNX1snTwjyWQVW5c6qSA9hSzxvruv2EYoYTB9pndATrBi",
  "key20": "48xuXky6ZX6RbDZZeBtWXZt6EuUNDUw4ErEKnxeSV7madATHjVB79kcc1ULCtJLPGEwD6YScsrYFHNHpFXE1zT3w",
  "key21": "2rmTXh4yWJH87aLcG1m76AHoTfeYa6u4NPT66wxtiERoLrhgHq12AtigVPTDEDwX2TPUzD5mvVwfB2HR57CmsoSm",
  "key22": "5MGJJSRxaTM28dDNUxEf6oVhsgKAo1kYZaVN6FGCRDSyhnhw2xDXLxLJtzQHti1zRYsjASSSd3YeCHYWvV3rxCAZ",
  "key23": "46hksSiRahwjW9tcUMcaA1onNCP4LsvrzQkoXXqv4rxvErhjUCwmS2GUG4y9AbCCPePquM2FXaKbdk9Q2E8WKV89",
  "key24": "24KtcFphqVcev3Qyegpj4HZP6LGsaWLrgogPwNctKJu9UXULj662xqjzaM75ig6yFtHJksfKCHiATxjUU46d5Eum",
  "key25": "4MRfLbEh6uvq5jXGtZZHRo8T5HF3ojbgpv57Ha8dtVVgFrxQZGWa581aFVq6cZvi1ymZW2CS22Je3C7gPfyD21aL",
  "key26": "3CWVTqL5fdNkszM4Rn4MG1yAJf3nxgcRbTYmifCHCtYiBYUkQUmdJ8BDjLKSst3PjLyoh5uETgNgqXUoSERsUhNR",
  "key27": "4xDVQLiczxAAWxz8fYAxkQuwGe6D9h4jXijXKEkf6869S36CdvhfR6irwPRZHFbJuJBk4N5BXKzzRTVGhnwS7DFV",
  "key28": "g8ezpAfMewi3NAhicFFgKFckDonk8su8saD15fxY9aqeQoaDsYLGYKbHyj4KAuEWYY1g72TQppEztMUCqDMsG38",
  "key29": "28Yrn8hg2n1wMjqUS4B2HD1mnjA9vkpTKnXBfHD4BzdDHTtgYYSw1azNRDG29TjhgFNuUvNofC7b9Mf6bMfNZz2i",
  "key30": "3ch6FHD3E7csCe1jJEyyTLPWaMCwkGbycS165oAY2RiLn8DQPFijdvYPVac5dXG3F8QmixsUtZGuw3MGeokv2w29",
  "key31": "3sZ997MrkToYUuMim34giZtwKGikymHBdrqGkWiBZYpNYEbD4zSWCn4vzX9Yq55rUABzXg2EL9BW5H6uZjBMm81e"
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
