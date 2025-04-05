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
    "28eBzAmkzwc66GxWNkygoBDPCEdEWmgiamsu8oBkdjF2GgPnxpvtRGbTF47KF8sJhs6mFboHSzrmW2qrFzVB4ad8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2optzzvbqJF8KZ8gQsp3Fum2BnGo19mb2v2XAcn6xAxbyNo6sWnSD9E4AAHG9AmZoAZzHLHeeNPSk4okGhqjnkHw",
  "key1": "4LcoXEu1sCjTXwRFHCFNYpGz8HGevmp2Xq1au2J5g1DmRh3RVwuG6YLnqGMaXa8Z6sjiw9maDvYJbThg6AdX4ta4",
  "key2": "zfXXXWDfSQDkoMgBemwAy3K2QJwbCtjFJDvJ3FHNFuBc4S5SmmFpYF2bX5bhqntkC2hdA4qXJC59pSHgKUZfzxo",
  "key3": "5ii6ahGU33bqf2cfSkJXj9SkWEqzX3Lsu5Ch96EKh1b1pym9d6yVAj7kV7dh5h6vN9ZZ7TDg12p94H1UmEuhGRMg",
  "key4": "26mZjhYFqzw28XvBteJST6mHp34kzJB8r2XtGa6PGCD9RVUijCzesnJM5qFdADq4SuCv3Rxxg8dwYNZfdPqHaLYm",
  "key5": "3e4Xp8YWaSuQ8NRnE2ESar9oAMnjmBHNAnrb6CksJVAXMfkaodUc2ZMvK38bwanTqeHZmeWS76YiUwFZ7NKfPFA4",
  "key6": "3cx8TNnPdwvjVwnLUDyKjaDp8WWTQ8TbwXiYHwpeNPveSw7rZAMNGAYt8JeTUAPm2yZHPb2bJ6ZouavcbEw1FrnX",
  "key7": "5UfFGagvmeCh7NGiNzC8xzMT2qYzt2oCcyERZzpnuu6tJp9Z1GFaDkJBdxBt19ZGFEReL8nKxGm219PMW5yBt8Ct",
  "key8": "42SAAhpaPoz3rDXqiZdobtBF5uS5iW4Qy7QuiotZfiUittD6eHBAv8uZeonztGPZDFz9A3sPWEyp4nREX5FBoN1P",
  "key9": "5fAMXYnfkiLYNdoBBmJkhpRzTFdRqzi8mUbsevGcsiQD3ksgCxqYfVyxBnovYmhx4cenzQZzxPs6pk9PartKqCpx",
  "key10": "2NpiCs7LxcpSNJ5DPeZSYnELW81rYLTrKt54a5cjDwNYKqSDmb3LW7wk7GHQUzE7ERQCziR1NgHgTuUZSYy2KduR",
  "key11": "3xMdihzzhmbXyJJk99EZo4qEKPQsJFj7NwJCLhhJyQCHokLo2hkZfjwk3oSFvCwFntU2St8aet7Lx4BcJdLCEv13",
  "key12": "Yjoz6LGUwHXJn5fWYyFiykzdVDLMAGQ9xAaUtSAkLMeCiWjLhTkdR4cHG3jY85m6YBi7iAXZ9j6his6LVdw6VQ7",
  "key13": "2gKThXy1ghGwpjVA3AJLCvWZXwAECRKQatYUrksCFKbQR5GGX72PKAiDwwwGWyjgQMwFrR11j2kGKoY8GP6o7kGk",
  "key14": "64iiemvjkLVgHfCvLLEhhpHjfPxEU2AEoxXVBJ2PwMbZFVxED8y18dubp3cWU7dnocn3YA7jG1JKxh1ESSXosdwj",
  "key15": "4h1Uvx6BH81b75ka3niwn97cqkatSREzKRbyVVW1MzkCtBkvXfMBEkbPpeSd9RyyNc28u6aeo9fqTvMj7eNwQgm",
  "key16": "5rUhkN9K8gDQJoUs2fBB77Soz6uEWhzrPyHYFVbg1mMSrPUv4kXknYaKc3wKBqce5FQFSpo1mCqLvuvWmDDeHcYB",
  "key17": "42TAQKxzcj3LUbnBsF6Q8BX9jufPcML3UMhQ2xhZN6ERGNcxuss6cFmcus6hERUdC1LmnwW2R8AL7GXFKkW9vkZV",
  "key18": "3FXCET9rkYr7WTTgPpgNDqUEGUviPEDccr89QGaemEGv6zZuabFkCM2oE57eZpcJTQXbzrqVtMmxK93VfvnWKcs8",
  "key19": "SCoZ6MTaJHeaS1EYEaTMHCcFnKHveisKVQKTQLJmm1vsqyhVbgbgnbq32tz7dthhZJWJkMHXpmc6nBcuzNytFRz",
  "key20": "5J9fNcX1htr3GCpFy9hNZZAF5iaJN5KdxEGvoKMDKHtPPNC91wRBYiB9saALzSX1mMFMPyRxp5FSNatH8mRQCHxd",
  "key21": "2usFJLBYVkZAhYJaB2HarSkz9V8a6g3a88nCheQPxUr8hECHtTuXxg64bA9sDLE6CRjwWNbe3vGPWEqyMbrBSKQW",
  "key22": "4T4m7UvtYDAadfU64bBcCGUCVXDjajaBHj8jnzDEqNNUP6zUtNEnhwyXm5N1UsibZFcuM42bfPLd6bysQK31KBMn",
  "key23": "hJ5Sjk8hVq81B9H4Hmr7Duv429X7GBfpNjN3huBdh7PH6bYifgvQ1kBUz6hZoExdQRHrdidW2qC2stshLnNsbmj",
  "key24": "5jxqapWY83eEpgmFzchGkVzDy78q3U1zq3iencjMw5uyFhHYJXg6c7Z8DqjVWmQPKZUccmqofNdsrBbEyZQksxeE",
  "key25": "3tMbAJALkc76FRScMCJfquKohUC84d1eLbZv6iT8k1T9nG6kJebeXyP5xVkKiJVfZ4bm63KRo5oxZJzAMEbCzAX7",
  "key26": "2g9tfU8iqH14BNHpJdvhJnYSWi37AGYFpnJdkPFrftiWf5jRLYKjzjXkUJHM2dAPwzkRSBYLuJxTDKyoj7qwutp8",
  "key27": "51BEpuJGiZbLLS8Nn6xKcVxGwcmMGY82Ynt8DGG9RkaMYq1ncyZ6ebCVmdrLjzVaycvvgt4yKNzwd1gdd53d9qus",
  "key28": "5SpeeG4WQjGQ11rEXKvkfNHkfHzouBSpCFmVgraZQbzMwir1rWTmZ1qVcLTPrCikqCnKUCmGpeuZWzChHbn9acAP",
  "key29": "eBr3aTorbH6cQWY6zspj27RJqJRALsQoGU953Rv2v994VaPhHa1GMLHiREWfcKNanMLhQtBM4756NViLSvSMvpZ",
  "key30": "4Gs8K21EKNCFHTCRMLrVFaDwsM8kMjHGXH12NoXTiL3SUmQfQiUkSzBEDaGg9gfaAhX3kwjgQYX5QnicWKsPGj6S",
  "key31": "4sTMRjxF2MMZnc1emQpnCswckuYzcSMopuTx2Msg8EPEQ6sDd7gwoV6EUZNhRK6Pz83Za22g3k7G7eCyuvQDzUkd",
  "key32": "2B8r15rAYf7Upm3gdMr15xna8sTfDUCSxSPgb3wkyJGQyA9vVeHJ4iUCv5cCfLTaUfPvVojy8a9WTcJ4JJj8TXsG",
  "key33": "4YCW1TrpBW68peoEbbTVcRNX8VLjwnfwQvfCUWcu5yNFh34QyYaN345mWdRLe8BgD51w9cfZ3Cp2Zsf5U8Dy1K5h",
  "key34": "5TH9VF4HHcLZtmzB3utaqv8TySVgRAwRjFAFpa82a2Mqr8Wqq1zUEb6pCq3aZy6KoA8USKw1LZQUVBR1keKqV6Q2",
  "key35": "56ZyxW5CFda5446k77dvda3S84NXVWV16jaT9WSgAJ9iNDNWA7tk9iQMDxGVYR4kDFAghNdKkExuLJdvJVx17RGm",
  "key36": "4Jdngswwsa6kbW1GEfiBj48tDCtHDo9vNGG6kXQ2SXLg1CbiUddJjG5c32gV12LFx2bMC4h3ok1SnxW1DGEDG31a",
  "key37": "2qB3TdWbfpV63rX4o43JxDmHPaz9X863zBLG5Qn5b6RuThJE3etKiJHs923YCL1dcYQkgycVEU2RsHG8UiZpK7C5"
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
