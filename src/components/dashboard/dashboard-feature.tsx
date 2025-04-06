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
    "4LvfA61Q186wfxnFx6WspVjgpa2pPZbj4nDb9u7MMZdkcbeqemVX7Kt7k6A6V3Xi5W8f4fFqViwJpDDFVSFNhdk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVGM6jc9UHwcyWpyZvzPnQPerVPi2f6eRrweEhckQjAvDM5QVictb7aNdTJ5b73e8tx1r9YCkxjveiNqEHL9cGj",
  "key1": "4yaXVmdMcdcmTooDgahVAMo2DCtb7P6MSo9iXNZWFow5quZEsvo4EXonppjYjtUsLQs3PXm8F3QATns8h1wQsttH",
  "key2": "C6AB3yhPMU7go44WdtsaAhVwNrijz1WfubSujKdERwkiKPpyWHnB3jpKUX86DUN1GRmy5F5VGM9ZZdZAqzapjgG",
  "key3": "2L9FaEuz661BgaJi5JHh5FnBSq8azMRZTETXU53JJnBq5CCro5ApF4sYY8TVkGwV2rZU2JQJebKmWzc7sVCLNok6",
  "key4": "3uWtj2GooVAJy3VFRSVqniVdvjBhLZiFqVVymkkx2FSFF83NoaDnxicPVibMpsJ7faNdVy2Z9gJyxKd9E9vrwLKq",
  "key5": "4w5jNwaNwgATteXNEJe2sFamWFegeFh4wtTZpvNi9mrbNzqT5nUjtVAAxDKkZgtDvntGZAUcV1Sm7LynWrmuDrG3",
  "key6": "2YHY5ngWbkB7H1y98C6x4hZuJLYBdZdzhyKUB8L4zv6bLQgcVbyiRNeh3GCjLyMogNuhHJ4vurB2HPtf1SRNCxGA",
  "key7": "57NyuMUAyKh1nLcJaw8Q6AYpHeATFdkG9G8yVMAVD4mJFk3gtVjyg5JyfiXvPVzW8L2a2QpF1N1oizQA7RW7qEkx",
  "key8": "bJhmKk4CtK6dzxenVDPzFx5h6Fb45ha96nme1dgWZAFfnHjJ1Ae7opU7oMpjei3NDfSGjncWv3Z3EBxr3kwqvxv",
  "key9": "4u21QZWDdL1wU7mNUQG3ijxBLEtaeVT6tfFvGrmrm3nKc2kGR4Bfts5sd1SJJQkiFqDeiqsCnmEkQdaRQXqAmE32",
  "key10": "3tPqcxsNei61sfL2EhotaNdqcWYoW33wghmwcxGX3x9EbSr7uJY2BjkQ5C1uoKr7HPxmHe2AfwVvqQdbdpFnuKUQ",
  "key11": "4MtUhxFv22NZQRiz9VAAfx5V9USUyQ1MLLY8kWvrYgv1mNvhGtYz9nQfzeQSTt8SpXmtwxYyssjiRsfybzDrWf1b",
  "key12": "216ggBjHyQ3npkbHjdzUD86a5GrkNFUwA5ysYz2Fin8dUh4sCnkBvGJhm4aTdan5cpcR4Yhe8WzgSQNqDUuqL2eC",
  "key13": "Q6ak5rjaqiyv7vTDCrL2XcgeJ3QfcBn8fJxZ9nFJLupDX27TQ7aFyt6azgnyz2YatGaP8MmDHwZmiVL453XnAF6",
  "key14": "3PE3U8Wqkau9bZ9Vu4kgyQD9Uih1GVS8e1z9BJkxDJMCbzFi3SPDyM3iS3jwzd6sCxSM53B8yvNGWE8LNfUFvTd5",
  "key15": "63tVBaXdQAd7o3X9hXUDTa6fvuTf41AZRVp65Br4ttx1CWuYByckBRpHMyLzBE7rpSPG14YmSxJpF12wrdsKoqak",
  "key16": "idiiSSvf7nskk9pxtxoFKsGJTRdTosygmsYh37NnreRXzsSQVkiFYE7yTBchVhXzVR2dxYBwLJCNdp5mxAVW6xz",
  "key17": "3EvkQ1ueuVcQoN8szeKTTjvNwCZVcFn2d89x5Np4PpijLh5x1PmQxHujU3GdVk36hN9zQLFhfuPU48RaCHGJzmCD",
  "key18": "5G7NQ29R2Ka1M2mxGqjxYkMnHdu1KpCtGYSExAUEWk9XHxpZm2GFqmYSsfPZSRd9RDrLxSr411KgZcjne4JS7CA5",
  "key19": "3StwNTnfG63vqLYZiLXj5UGJ657cK3Fd1wTR1RVPLwj3aqjeUxksTrqR2D77yo7Koa4BAp3tYUQRY3LUBfaSjnBh",
  "key20": "5kvj4mv9nKhdgJEtvUy7z1ie8eiFaSoPf23wtP2hEHJnYzS3ZPNePANZTSeg3tUV1gBD74r6oJynkJKewx3v7Z6x",
  "key21": "5u56PESBGjyv3LdyJVgtFLVEemT2yUvTMLZ4VgvsdJjFg1NVQfpoCwgxPHGPBrN2EzgFbXyY7vJY4Rd8PYq2BFYr",
  "key22": "jQQAQeeRA4wmCjviziAZrr4aAQdW1Eru5oPNuEdkeFWZM6cjJwBswyatTQUydW8t1hnTt2XGbfWF5nLTaRQttfw",
  "key23": "fAPXAramJ2Xvt6pSedAtaHNVhC6hoqvMVNEmKK5H4WDnbQSsn2M1HPEZzNTvFb4GbTpqAHBz2VkMSS28M5xv1jK",
  "key24": "56LmWDEBw5UzJMFrMPtkU2aPsjxC8s65hBE5wZMUgUWGxH7sjN1cg6RJtR5yMEBaC3NqAnBmEw573i1xjCeyn5TY",
  "key25": "2hb7PLo2XSer4wazTqfm8dac8uGVg5ZiWEX7oa6pY4kuWvshkeiVed3cXyoYSJqMqyyU3NN6gcJryXwB5fwhe6F4",
  "key26": "2cAvaUnvfqwyX6pkDUG1o7y1i8jWtNWXXoRy7iaKpfxWD9vLWANxKDqqZGCouLh5BHDJzFNPzRSFW5J1ZfK9zmk6",
  "key27": "3KN5M1J87rJYVTfLtsENbRedoTT9KfX3hP5d4p6PpeAYz4uVmSo4bjoKvZSt3gD8Qdmn5rZS8FMTthbNucpofirK",
  "key28": "5BP19C7a4LrkVAGf4Aqphmh7v2qojp8rwfwgSJdqxmiZMXPdVF1Bozpa7dmWiynySdyAmtUD2UaqX2tQdN3LLP4v",
  "key29": "Y77TCDMyhWNNWfqXYi35MeyA53PTyFiQy7MatSo5VtXYRmxqN48DFHDn3FF6hucac73QaDrLEmp21q4n6JaBAtM",
  "key30": "3PJCy4BPUeeQQbEUA3MaPZZmh55kB5N3Nu9GsDffpA4vDMgD9NWAhjNko7mdcuZQQW2ZAx4z3ULgDH2fsrrWfbCf",
  "key31": "53Nt2vj9LhugogaRSYawm48e1G5fZ1KCXtDcunrh6kMGGT6fQmK85LTJEYU7s9N994vNk2vHBM1pN65R7JiWCbS8",
  "key32": "eEwGraNRytEQnBcGapWAcBG92DTC3jszpAWFAs9yARMhUmvoNMD9jC1jVKZaYkMWJXpDcWg6DGg9Xd6N8pregbE"
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
