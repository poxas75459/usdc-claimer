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
    "51F7z7MYwKvJ6r32SCYqQAjLviTBDWW2XsMSHkXegwUSV9bjZRiEMmAFjf6coSDyLutEACoeNfck5dbQGD1ZMkBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6yYqzJG5EXmcagPeGSLo3nhfxvdRNHuxqJEiYPG8Nt9t7iqkazNzNRx8pYRMUkwmEeSKavyoAF3dphG2FKi7Rj",
  "key1": "4jBs7f12jTns5AgfjH3Nsy49ozgCKpj5r3Mz9fYZaDethPewrxDXSsaqsFx6BsbHjJgHpyFxX5d5Xgzic9PDtU1K",
  "key2": "2Py76bLhqqZFYsgu9LSbKwx8C3SBSY1Dx5nzqjS3zG7tELV1UTFymMU8YE4tPGqM6QMqkb9Yu2bhsNV1PfkiUoV2",
  "key3": "33Fi829SxoAW6HqwNAhgZkjBzBGDpK9vG7Dw6awCi7RuDz1Par9VJBGBqFHYbvGVuzrwpNXGccDTzQH3SCMujtdt",
  "key4": "3xnUdCRhN5sYwMz9c9ukna4SfAs1vjq5TzuFnADijusvEF5MMKFAGyMCaVfZH1Mmxf54ppDFyS3W9a5iTQNTLk9h",
  "key5": "2GPMqbrrKzaK854QsWG4x1n9EoorNinRghuMzPfNKat9CwbxCMpzsm63ukMfsHxUYaRGtU5FsJrpkUk62tYdxYGc",
  "key6": "3Vnykp3eVXnWEftbWnbRWk71c5VJqmwBxumFbnsmTdbV4Lhgj1qEAUjgT72zj2eZkfCCeUzwkt3fm3xZcNSDFLBs",
  "key7": "rWzULBLsJhSayt34L4eTFjyRV6Gkp3potvsa49hnvvB8Fus9jDGT9dbHJ7ee6hAzEMEtaM7YZeBtDsom674stLZ",
  "key8": "A58qAjMQPoV9GMA9CK1JV3L2uyLkavLmmbjpr85msRh9C2Q4JfTDuGDAR2LndrctFK7f3D5h2JiD4SwjpzQXM2T",
  "key9": "4Uz39wzDf1TnBoYJhazBrS1cRSJbQ7ov4i6gZzoPqAAvSAm1Fuu5Fi9bQ7PfqnyQviZph6zpQWkfTqqpXXz9Jp3Y",
  "key10": "4dxcenWk19ATdFz8StCC9ZjcGi9DxZWfSswEhTrDsox28mu7deo4FFAsZJVvrpXtNSq6LwpHjLwE2jKCxyaFoXiT",
  "key11": "435LBDC9fVogKcCSKbVKSB4UeDKC61AjqFjMuurHZ9juxtHCv4fvXbuqk7zuo8k4Vcsv4iPszg3V53Dqm7umuLkz",
  "key12": "5DJrEi9aX1E3BcQFN7GefQwRStDrLENsgrz1tKpcrVkwjwAWgGrfsxtEKbuF3n1kJRp6fayGcSX5D13SyEtJwqqk",
  "key13": "47YpH341MGdjfpuGAHKHmSnFZRiHHMz8DvCtgRTPLGjrV6ZGMicTFv7BgipfUh7NRxaeYXzq1s9jQA1GfR8AYH2i",
  "key14": "28ZipJNCh8GH5dZXRZRAyNYYyXpivqMLhtLJhCWwaZgqgksiPxuo9qK1LsTf7mHCLXVeDzekU63C7KqMh7T4YaeM",
  "key15": "4vDG17iMbQisxN1b3LpqgFUii7jKQCfg8HpPbfUSF6eRCfFs6ZTpkod3pTwZFe79DvuLNty1L9HWQJawKmREjp1b",
  "key16": "jd6P2PN6ak7ZZEAjX6Ky8rtCCov6UCfxXXyzV61h915HXkrGXcqsYfrcCB5A96qtNLs2cU7ZZrGH8qy1eZTaFHV",
  "key17": "3a4GfXXzWc2QisYG2qaKe7p9NhhwSJKoYrGZnXLL6HciCdGwSQasBVMz74PoELzKaZgUa8XYyPedBreZqcjMASh5",
  "key18": "Nzw7a3JYfGP9jWnNDVLzkXDJLiLyLqB6T6ZUDxQrkkxomZ9CVeKPY37dVKNrqF8Vue2im9zvLoT8EgKk6UtjqbY",
  "key19": "BqizQVzxFCV3KTmy6KjLkJYLttVMWaJh3XvLWDBSxeyRnP5TsF7z9fAXpAxkssvwJAXhUQBNTYjg1xBMSnfQk5q",
  "key20": "3Z2NH3PMRNHzcQuC1ijyqcYoFcQcHcgjV5RU9ZkGLSBcdDC8YsGyTd2niZpKk35F55LQk6WruDr5hfvTCws6fzbw",
  "key21": "LXixSgTx1r7UKcn4bbehmyLURFvxC7WHraXe2RFG81woHKzv2BRQhtLFsukxLCoKVXXFftNzgexXpD2PUdJjBsn",
  "key22": "525MVFu5DkTEcawqkNBqTKdB2gpKCTFApdWJXfapFpVdKV5R3UFEe7jimMeS26PL2cPxpJYNR7BQDgZJQN77LuB1",
  "key23": "31CvdC9R3DVHHQkkaHzMMtdnHx3PsqKiL1wr3kS6jqHQQHBEN4WqKpCkrEBWwqz6dpg8z2EhsnFC4NPLezYBq56S",
  "key24": "3wXPhMcHdjWtCcgoYR4bj5dt5yWhej8pgQNftAwgRcmQ1JgMJmvqteoFWB2q1XwhrVgwCVGmpe34ogwFigmdE7QG",
  "key25": "2U8U8Eqtdt7bE5DEckJ47qdXPKzDijgGyq7ZXkfF2PFnTzQLRhquCwFWSNoDEEvHqaBYxZBWHBXQTrPujjMPopwm",
  "key26": "61yZvHRoz5sd9VQ46554JoacSnY9aysD4GwutzYpguobHxFSLoWmcxwcUoZsZEF3uqCdNrqtKxoTi4m4rx9mC1nN",
  "key27": "3e1Nm9TUeqh6mkFSNaRqSeXq766nKDksp4PauuPsScvfPDGRqw622Fukbn9pLdSsZb9HPb5mQPBbE3aK8dvn7eR9",
  "key28": "5umSwZeQy9gxR7fzHwin16oaN2LBQWs4UPjnHiNcSqmM4ofyeKKS4TXQHBxnbYKoMTCdcPZb3FGqndCWyJwhaGN5",
  "key29": "4eVitqHq6Nm358ZCmwAEkLtUGBb46qqaGkPorJHpET634bWHEaMPVNFqJ7J4PowRp88WKeo8UwegxHUpRiQyW8C",
  "key30": "3L9MRGCog83dB91gdDVDr5ZhuTPDk9vb6GiWc1AHnvHvJyYKuQAr5zC8TnaKXp6q4zrsoYcdbbfFXdXJboHrkhMa",
  "key31": "4WQFAZcFd2iH3fcfDhnvaY1JRK7xy2SvXhdBB9hfZsozJQ3VkAULhXEK5SXHmcppPnNT8p3NcDY1XBrJ6RxcqHGM",
  "key32": "2E1HnSYTbYNMygNVH8KYXAKdjELgS7tmfDorXpFoxGyYvY6C3XrX5KVqsQhqeNYmc68HZEdBduqx6hZbH49YEt39",
  "key33": "3hST6m5nsGprh4iJvfkKakmTG4ZyNeP3r78jRCShoXFYgwe1TSiVtNBhpdLevbFtMcNEjzkiTkU2w61MT6ymbqUu",
  "key34": "4qbmTFCUumaQPqfu9uUpARE8F22P86DpDrcD83QqF2ECwHe2187rwYGzrZRs576m1txUqZmfgqyPpdY71iTm9bDq"
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
