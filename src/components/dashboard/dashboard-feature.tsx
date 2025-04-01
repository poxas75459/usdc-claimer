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
    "2Q2Yr8EUUFZbGiXZh3eJDcYgc1JgVzsWZbayfoZhfzkmkY5CM7c5UiWdAockuXh7sbLkAwr8d3Umf5GJ6cXwDWQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFqiNfXxWJ6xSk69M7MpcfN64WuxQaZskQEaL5RidwCJ5Ts8yaEaNN6eDmBt8saHvhTMT1vsdQbNa2xANfQk4v7",
  "key1": "3RK25NM1pj16r6hc1B42b61DbKmV88QGq2zyfi489NV4i3aMnPGQMXTb2VJWXWPuq4DSAAzyrV638y7PoZcxNT8D",
  "key2": "29W4tC1AqGpb4YHWMCH8vyYXNdYra9bFenMSJ48qFa9cZCUucQGmCh53v1NgBHVSbhRGMNkGyswQW81QrimaMUSS",
  "key3": "5UnidjmDiymBSMMzw4Gd8DCJAWHa7gUNaJgvxGNUfXMG24YsJvFon7GM68YhE2WvfVDxXKkeKhPiSm26fE6av6VG",
  "key4": "3BdfcydqzuDihmn8NDfPN1xYHYAjgcqrzGnGRpSFctXfebGg8Didb7W7QRMz7syxP1APEW3HTAmqsTQps14u84WH",
  "key5": "5QNemssPVJ4kGQx2qnidA4w6RUoyotLy3kLkoHRMuBAeVYLVmZsgXve5wdtafprTXJ8tLNtN9qker2EsJpMCsvyQ",
  "key6": "3vqD6c6FsgGF1LUhAv1eBR8pimyDPgJA6jCG4pH95ViXd4uNKnJYA43ASVoJVdGp9B9hbiQQYNV9d4WkgWekwuTk",
  "key7": "QETCisQuhmsFUe6W287SUnkjwiqHNLrGKNsCduoaa5raxGNy8gDhU39szQQtm5GpgkNLtGtUUVNdpmTq8sTDdeT",
  "key8": "4FPDBdYZU98ccLnSiww7UXmrRPJiDnM5rURVm4a6KaStt55Nc5N8iEzFiqfDDvz1ubpzQbzoRttFowX9A5bQN6Po",
  "key9": "27BdHop6trehQwMEA4636UaSLSDG4yQm9YBvkPpCrBtUKXcnVJgiMedgX191fqWvwTMBJ2HWRo322x5RR8NK9rAt",
  "key10": "5UtUXpGZhgjHwTshvGACLgE5QqTPR6WswXhvUH7Yrygm1dF6rdpKfpiEzj2sFPawx9YSfJ33sjpubV2vFNnoHyFJ",
  "key11": "XyBz93X52dPtHC5AfgcTvfE18U1kfWStdA2Vz98sywUX2XzRhmW2KHdb3Hz9ji2kyH9qMDn18jMx9rpZdA38WNa",
  "key12": "2uvQBGgpUxJJuPiC5AiAcn3TYxXWpEYanSQFPT2oRLXHdDVsFwFuLcZkGSiFPyyDRbbB9mzUTRbYwvxRxLdDS9Td",
  "key13": "481qxPJXPCCxoJuw4e7XL4d3whU6jPrA9DReW4GH1XweJCAz5R16683T872zvjgAgKTzKRVQfVASUH261W9YYnHq",
  "key14": "FUNdnrRkbr4vPe4YaEbCgNfbGbpB5BkscashErXX6toMzGm7R4XazyKDYdieoJ476wTicgQ7Zgcvo21QVEYueJ8",
  "key15": "5BXf4wpHzMApiBdCjRbb178hYgdyutvpkMzguWeDvo6h4dKs98ijf8hJxk3TbNpZE8RrCRGDTjCfmbLpXPtNHfjE",
  "key16": "2FxMwKwMFGJzNQEgmy4JdzasejAbnC4WQUs3iiv8vmcLKsnDbftpzxJvpaVzKgydH1gLw8KajxPhFaZBEzaNA4UJ",
  "key17": "2N41B5fpiaqZukRdtMWejNRU6kBNg9UEB3SXS8cFwff4UeE3MCneZUbGdW2UGw8pgYYTL5wpRwDjbxPw3eFiR8sP",
  "key18": "bAT7pkqU3pBuLAqnJ6tu5pfkd8aqvi9xadxGLEXr9bDQYwmSDccrvKqtmA4e1nQja58kAnfyydicjvWFD3Fbkrh",
  "key19": "5H8h3hnKuJToowKH9Fe8j4wNFCn7fQmR41FaAFhajJq1PWMZubxVbL84u3nJk8ByFXfC1kbZMc8Ws9RfK6oEP4WM",
  "key20": "4tZuXJPv3y128mdus1YyNdcmwW8U7HxpBiJ2abuv6gH9J6UiS1vAVaTyQ2fGatBmDxyMWE2mmkfbV8nqVPn6HML5",
  "key21": "MCNm3A5ynKkqWbKmA5wQemaUHkSoH7c3M4TsxjbfVwwGSS6sQZQj4eiaHsMaMDkR6K2enUNXEXwaPTCxYjYcHi2",
  "key22": "5C6KPdnwWAKqjG8ztoNSm8QR2dXsxpStDzUKrzv3E9z49bkm2ftnbSev8MHk1Qv9EsKL3Ek5rGoRzgcML4YdaPbT",
  "key23": "qf7bdvhj88xj9jeijXMfenCxMySXa9RFCyTzujhCLNDZyrWHdvzzzuSCVnYfRCwC398npoycKg6JwJ7mrMMi9kd",
  "key24": "5et1VbzLgfCzdqxF9wEM4SzhNLHEDyQiTjXVrneFt6SxePV6zz7aFTD12aaM4kRoZqmKadAQ28hRSBrrZ63DvSR",
  "key25": "5nekf382xcEzWnZYVw77g6CxpHFRjks3RNLoQMJBv3vQXsGeEG5tUsez9VRCus9okMv6oH2CfmSttqJJcnEPqaCK",
  "key26": "oCdNKReN4LaA51FqX7VKwn2HXiM7LqkRDhgSokw9xPbfj5Y2pKE6JAYJKJrmUSThXSdnbWhU7rDSCeSxnPoikyQ",
  "key27": "1iEJ7gxReAyEnQ8vjELDTfViuY4grMwfkAzsrjHpznFfuf74zjyT4J2oZYDrqCojGkjGAbtaL3ExujEffRu85oK",
  "key28": "3HJtDQEpLsLwm1KfZd89x8v8oVThWQynvgmSvBXXVWMw82t1WUW1bNPJJzUMfNu7NMy5YnRnKjPeAJZreFMrWhev",
  "key29": "5JidMwhvZp1zEkvYjoXsXSirLqmYhSCzGhodshFodCyDVBC4Viv9oSWytoYCsFAhrR6M1hFktgj368SU5iGudnsF",
  "key30": "5uvsAVi6UrAUBaAmEbM9JPPHyDq19xcbeeckkHfhJ7DYiqesegM6YkMiE4rvTU4mihtPLnwyQEa4xideTJ2zEBq",
  "key31": "2sXWcYbQmhFGxjtH7PmswqmeFKRSg1mfiW8ZEyLKLGNDVAkAS5Co5a2r1RRcfvyYk5cGqiinYtvMwkQ3vwSVCJQA",
  "key32": "45hY61u8PASbPVHe4aFvVJRgnKQErDsrKZCYG7inERQZTNuLFSEQWyoLMwbGRp1DvNyLyYXEjoofGUjRgfd7fUDH",
  "key33": "3kbmhzyiJs6URy7xEJqneTyrjw93AZLzYNNEN4TLtdux7Z2ZgS8faBWo3feH54twJbivCgCLBmjUWqSoZ59Fm79f",
  "key34": "3YSFjwYZer8GHc39GhFzyCj7we9q7u7Zs1dRbq2hxb7YJaFh1qFAjnatk3uNqywkNYdCBWUBa7JBzKdcvpnoq68U",
  "key35": "4E2Zz1WEax4RoMypUcHEEErDQP1ZuSyAVZekBttCtJemxEMAqHZP6jCqaAsU7cdpzPakxzc31CDKFb4LJGv3s9U",
  "key36": "1Z7fkP4gHGDDbNzM6PeR6quWpptHK5yzp5UfJE4SUbjHYht5QteQMtVsgt45agbhWKZXXmLHA6MTcXR7C251Zjm",
  "key37": "2Vpj4qEfhCCGpB9M335RN1yBGBRqNLmPvLFnqhLt3s3tHRHHwoksMLsb3k7Qzwnhzc8MHKbYSmTuKrN4DJJ2wfby",
  "key38": "53uUPGVWjD7C88yspGuTV8iibYK5Y3WfRTgr5fnH7SrtZFpiGJpt2QprebuDwmymq1LbvJ5RYtNyS1fUEVa1AQPH",
  "key39": "47PEMJpgqDYHg31VZFx7oPU6dSaY6WsyTpseK2ZWhk92nMmwffNZAvaddPrJp4EdSYT2xRRpBQ6dcAJdCPFNrzgp",
  "key40": "guk6J1nVs8e4rYrpBtfGgyquyAo6mz3c8AumPhUpSWdEdj5cvLuF4o7dFJj6zX3cpqwWUCGnvzXEhALYdLViU3y"
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
