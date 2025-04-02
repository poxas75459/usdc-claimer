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
    "2rnUNMdCxVuwgo7LkUw8BwpA38A13WFABfw5SaqpQHiL6N1hvaJ5aqrtuxENFy5JU7pdPiy7pU37q9KF7dZYG94H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24mEvSvm9ze9EUnEEwUEHjCQ2xvVt5NCNtZrzEY4carRUJXMkLX5yNoL1gW1S6tDnxdcbREBoS3ayYq3fGeiC2aJ",
  "key1": "2ZudXkQ828CbhCbYuAYrQph4rkQuun73siMh2hMuhsBCQVsBq6HF3BLZv1zvgb5YbS7g8CHz8tV3SdGCVp6a8bAs",
  "key2": "rsgvU4MWmSjg7A5KrMqSaCjQrfYxjuLQjA25VTy35HFbrMwyaHGn5xhkjBG4oSiLE1yBpMbrxaBxvy5rAZ7RNvz",
  "key3": "36J3MFk1AjX3acB8LjixsWjMHUS7N5BPdobXzSVWizPqmnQU9ZfW5nu7ETMHvp8xkiENcQkpMarP8pYL7nNkkmGa",
  "key4": "2JvUBdsqtX9q4mTAb8WaSa9cQVsyMU8VNcWEv9Qyt27z3gWE3ke5GKTKL4Q2xfa62nmE3BaNLMNmyTQZw3RFNT6x",
  "key5": "4VndDk7otLtJfxgDiRJ9JoV3xcCuqsCNJBtKA1fKSSVxDnWnUtU7vmT92MF6AewRsEW7wHq7WMgKEnN8wQmm3Jzu",
  "key6": "46popjt3GczwrrLqFhTd611ZxStBXRem4JY4QDnFHqJYqKLdWNY1oeHm2kGuBSeSzo451nMNiL8ySHvM56EP2rhY",
  "key7": "UX1CgjxGP2pnH4e6HnbtSYSMKNdzNUCCuVdjSf2S41muCLkpR8Hngt56DNkfq4uto58fhZhACWTM8zZAnMokFgM",
  "key8": "5MACy6erSzyVZyxwRqus7GCRYtpPtTTn4xadKXsKZxMfSgEGe64jR9fTaX8BHbnFNrp73bi4B5Arh9sptTcPe2e5",
  "key9": "45orziYHk2a8zPm5jNGva6ALqHCtmSsF2GczHY3yGYD93W6E1ocwz1QhgXGWPR1td7vH6jMoJXCAx5yPduSFurxV",
  "key10": "3Pu2KnvpjBD7JWfK8eRvfjB3f6qmjQtfzDUSUHG8PDRwKYpS89VsLJqv9cNgYDtizDaFoxyX6sP94ya7xSZJFyjb",
  "key11": "4gmTtXLPtGtxRVrd2YJTbrhL2TJ9EtGKHKVk8T9ontzDSE3T6n7KEWhyt7kdw5D8ucQuMNA1dJmQWZokmRBt6EZM",
  "key12": "423bRniTDzZ437p1oCGM6wXR9MojbVJUSDkkgrgJB39C3Bw51prbrxxpNCaehYs6hC6CuUTeMVHPJL115BkqHooo",
  "key13": "iWopbPEubX65CVo8zG98ThEWfAGbEjif1cdfDFpuPiMSqYhTZF5qju8pMw6GuZ4En14ZPuqWqFqoov4iYQr4pBh",
  "key14": "4hJvzk7NuZ7kXrBis6ESuDagVTnHxieY2MZLPoEUVrrWV4VQAdcJpQ6hq6TnqKevz9uQ2MohUKk6dq1YD3abryKh",
  "key15": "5q6j5RGQqwfVxHzYwwvCD2iWnqHjC6L1F3x9vYfaAstdhFzgteA2fLkkQK8tyWLSoH3p7DANmSfYVD6nuW4JPJqi",
  "key16": "5NGEpJoFErbCxNeHMYKbyQ1R9gpXgLzgAWRgZBuE3Uyreqk7pTNEQAXjJve5W78ejjp7cD9994F5oLhPSD2Fkg8i",
  "key17": "kcjQf6SsGMfKCDsf2L3zrYyPj19QoUfxP72hSsaq5zz9bvqmontqQKkYfp11Rw8w4TUKPcbK5jEm2g12UAK1vyQ",
  "key18": "36PGBKb9rDD8o2zM1UChDYBDActSBXwck1TUvyQXy39tfKZQH3794anhJQ1v7wnXTACtoSHXSsjYKVHRrjhAxRSe",
  "key19": "5WAqmMw3nTX1tNxey2p6Fe6exX9UJPWKqxP632hPpn3Tw1jRvxSSbsnSgZby4Wt6o3FJeBYjBeAmdg2WZPnWoTDi",
  "key20": "3Thru8uMXpiXFDur7akvpHUimBqhvS3jtm8tKmGS2NJxWSUfxn6MXN7tvHEYM2EYCNAHi8UGG8RFXQbh6ZAv6EVg",
  "key21": "4Ei5AQW6CGPrhDph3KKi2wqtWtcRotticrHkXo68SKos6apJg8x87XddKVPT383r2PAqWXhUiQy7PNWJBmg3VyWC",
  "key22": "4HHzho7wBwbjKXTTcnR1gNfA8mgNMNrEqVDrpKyipzs7eozj6kd6gjfuaYJFVFTd3TdsNyMEmHf1R1tYPZ3mG6B3",
  "key23": "4SP9TepjiMcGnjaRs9nCzFm8mqfyguGE7KpSUmCP98rPcMqmUPwk87yct8R6MAh2XVn7rR8WwooWBNZrqYmjeuzQ",
  "key24": "4VmExEKDfJoEc1AZLhr54gv5FMiiiK2zQANcVA7QqcU3ALroKH1G6zLPSTvJA1B7zLikXp8hwSFy7SkbsJ3a9MWr",
  "key25": "2w4XqJjpRJqu3QvH5VohNurJiGXQ4T6C5LasPyXrTNhVsmJy2KkmAkKnuZFVTbXwz2H5KeGY2SHRFdqv7aozLb6J",
  "key26": "2geBmkrm51eNqicqEpwcoom665CZKppTEB1kfs7H5myAQw4zrNTVMz6gg9wpvdkRKwpsfj6xgjbqvShXb2YCPyHq",
  "key27": "CQvB4UwgDwcuqK85k7QddE235b6zHRDteQcLJVGYLwzfgAaS31JesjvSu5bNiwyAXPPDUdFaC1r46dBWYdzMahH",
  "key28": "3XQFSVW1AXxe5A2YPwufnYM6tnnm1JsF1yCGNPKhqh9cevW1uMDtcvuW7AZSpqeHSySCV3L2ByiNh24PDwrwsZ85",
  "key29": "5cp7BCj7PLEbiYJWjGJggvW8GsrvnWs538VmWbF88Kqhp59SqxoGysGZVFEhSEfECe74TbKeTd5C5Z9WHvuHGAmP",
  "key30": "5h1N1h62ab8xTD71P2JNHtKYjtziBT757chY56bxkBocoUKy1WVHJwk6JfmhAH6WwLGqjLQZuTmn42Co4jYciZKk",
  "key31": "5dsTReMNhJHwKwbBCgcdon5YU3Wn1jfACwbz9AQ6NJRDwBACfZgrGdD32TUuu33LWYqrz7csdy1UBU3RhhQTVb4X",
  "key32": "2e8ojMaJtdaJWWrBmH9nUtccRR6Xh57ZeuhmDHJbWjjukQ3w3zGjwszmPAPcn371LkZksdSATNVKwuKCG7n4fLjt",
  "key33": "2xhuKeTFa7HtHWmabyDymx6JvjUPg4ZNkpHZaYBb3DTvytaLASJWRDDoj4BtZ3Zyjyha8xVgVEm91RUBraBH6csf",
  "key34": "5FZoZAKfwbdRKnhpkSWcYuePrukPoaXxzC3qay9XueyFdwSXjFyS81DwkkxtzegC1YQ9ChFq1BMb9eDVi95miYRv",
  "key35": "3zT2rzNDZi8nuXJmARahM3xYhdiBLNDhYmEqLfuczXey7c1guA95b3D3URnbsibiL7Gg2TdKXJxqmQkFNXvyueir",
  "key36": "25aRzJYyTnLMSeB1Fio6UZdp75pYJYFb5KusSSQmVvxfiyWdKLpSu6v4BonASPy4FwUb3U2rh1untLyWNJ2ZR7YD",
  "key37": "2tHdLBrCxfzQT8RxgigDgucVkeVL6pd9W788X6jqHtNvHhKMor6tBXtY247dzcySBo56j2pLVSBgUHzdJJTRpcZ5",
  "key38": "LMkM89ACGo4usa1SDZbxY2TvAgzushKbiFNVrPzrF2wVnfJe2GNfNZqcypGgnRxMYZoCLd6pC3Nzd92xfHmXLEi",
  "key39": "4YvZnD2hduRgu6S4btHWwCkpwzQFfeVBD154U29cj1XTWH39y3Gpmqk2Br7cFm4gUvZgBZUDpbXtJqrPs1HHPaYv",
  "key40": "tDdKHXXAbP5EqiCrac98sH9KxGTaWLfSoqiqmZawEYSTtxVvkfMSrK4EZYTRR8FJxAzJeZqAyziNMHbpq3USoFG",
  "key41": "4sW3xF7daN1LBXVg4Rk3WT9yRQbdwcVNGqaBy4GgN1YoiNPfTjcGjDcHmyXZWJ8bRbfh33uoGUbLTBXeuwx6jzp1",
  "key42": "3qCQFSfFhht3gFkAFWRrvR3Z8y2ekekFFDJxpaj7N48ZidNcEydn7XYPfwEMQNoUnTTnbqQza4JawKfctbxeRVhZ",
  "key43": "5bo2vXdMSV4yDkiiVnpbpyV7TzNBYjw69RbsyrCdQAyknJSdBXMqZtWwgGrRqeFAJbxEK3Q5Y4EtJ957easfun1J",
  "key44": "3hGtD6DbTwaKrqGmFwM13Kvofz3WssH3fst5KkFydgrRaTeJNRzERx77w5soVX2Rpp8fdmFv2AtmEy6bCYeusrPa",
  "key45": "2FowDixmspHgKJCLv26aqiP4U35aBcsuPufG1eRL2dtHFHFj7SN3etmNG9YxgTr8pgwWDhmKbrU5B2oMGGRRXSxu",
  "key46": "5AGE1keYAyrCqJVCDjg9ihJ8urv6tj34gDzAubtqGtdy7MvLjZ6SqLie1k7BPT8981oGwHjxt6SZRbrL72LCMzk9",
  "key47": "5SxF1ET1oSq3jdTNuiYP1dsv2dsTmsQSnQSJ7rBox4VqTUEMSWwTEb9DzsagJAnanCtmLXS8jkwrJigcbqQk6TJs"
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
