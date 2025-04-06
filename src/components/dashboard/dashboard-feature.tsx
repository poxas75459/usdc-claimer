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
    "2cGKu3cC779knBRmq3EosZ8ooM1BA9YiytWPnVcwhZ5mnmqyovRNRzUSbmSz5Z6TYCjmhU4TzdAkXy2EfpRjmbYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVMkCzDuQ54EYELxM22JxS4YCr61zJyY76AGYcyN5rHjYMfTiyggcADvHhG69iEob5YjaT5CVMk8mZcknG2D911",
  "key1": "jAf9bJzG8fwhUE8xJwSh5i6xtxZFKNSY5Z7KA5PAuKvXuNGxyTqtBMynuGzkuHNb3eRRsAvwbiH2viVPEzSKdj5",
  "key2": "cTo1XVrHFCYfrubTpSCoVek7zdaJgqJFU3eAPP9iVQ68zbTdpT3fFso1z4t7CnELDz9Ygy5wLm7esvjgrxnWEeo",
  "key3": "2D7RS5UunxY1ekp9qxsk6qxscAaCKSBMVg8AFsnnXP3hTFs6DTs1LTJpjDLR3LSHYEMyemYavP3DFxXRMHH5mq2e",
  "key4": "5AEBSFi8UqAQ5yWhLuV78UFCZPMs1JZtHhV8Rbmd3nSRiNrqvVU4AFiLbcSRPdXwdzNJW5nTmFzmEgoKnTW6QWVd",
  "key5": "4BBiXgDgYaVCN2kdheMNFxKQYTYCYMbLzZ2S3DuEYivS5XSgW5AWmKfyaAKMbZHw8WXp6FQW6NuxdodcLDp6qqHa",
  "key6": "3UJVB7cR3cbwdmEwAjyo2PaCTy8CNBA5PjxkSse32MkwiG7ecnEGCX21m3ZPJEbx6KCb572NXBwPgVcE7MXy48Ub",
  "key7": "3WkYZkZZCnRMbwER6buTKc3SgsWvnhtyXAUAjKnZ8W4fyRC6hEszpop5ZnrnYCAArwz8Eta8G6VhTnShLGBoeoMB",
  "key8": "23Z1xQpw65VLpKeLXfYcjJQMmUG541F9sNUiXUaqgei8GXTYBEeNwCfcH8JQHGVhTCLWG67M836YDgKNGj5tHpNw",
  "key9": "4DQ5uFiYo5WR2P1WzKsFrEAfggB3tB3rP94XRiYRZRLT4yRCZvERN2LuWUU8ZbEGZ1DiLouA2mkRU7mYeTmUeyok",
  "key10": "4t2Lf9WzJ1bZVioutzzPPBQpUNLArGW3YCK7mivmyUADBgMXMHzVN6PLBN7dREncUoAnrEPFTP95FYUvQZui7eTE",
  "key11": "3gUuufEiATgvMYszVj2RM5vHUxdy53XyvstH62RYBfdtvGejMXBi2pMDBXoNwzt7SUdwfGckhmRjSmggy6JCQqEv",
  "key12": "VjtjUY31SW6K7r7jAnidQC1FFS2DowMjBYVFMNUWJvQz15QitQ5wzrDYbToxXAdcxEe7WEUruL7Kbt9bJo1MsBm",
  "key13": "4vQJPcfPWDBFXqcwQtrUHXGdkzi7ghRLn2ePsPszSirMMREvErJK2vxqSKi1cyeqdiV22hCmpZcUvjdJwPmT7ASF",
  "key14": "43Z5mfpGBEmBLm1rJe6DUa5hCVRmBt1TqgL6syPrBwXS3yLSNpkoT69iG1YHxTAnot9q3BYMpNkSCqcw7wKzhBxF",
  "key15": "4p7LopeP1bGAuVo2BFk1vJn3JuEyGFuHnnVFTkB6SDz1LzZ5MscqrE2sMS2FVyYnpwuik4n8TaXd1hiYQGHCujJM",
  "key16": "r2EHgoCqEBrq64rdLeArN3hFoAp11cVRoMrEeCfvifC3eUYbZuCNQJLKJc8eCRTwcfRc51NntnW77U2MusqzeR5",
  "key17": "SEmTr59DQw444Xy5aVF1B2CbtpVD42v5gq6shDWkXfYnECKGj3xZFXpRF2wFE5s6XMyMKHRFD5eE6HkMUD7mbai",
  "key18": "wj4EKitJWwbFAob4nXGfdZ2C5nAWeitbr9v3tMvT8eaZPkSgN36XEUTTdKhHHMby6tdaqwKQNPHPRGzPj6PKNEY",
  "key19": "2djohxVoYwSLuEWz8nuDofwP1eHELy3GZ4MJYdbUtuaGmJGxHYyruNrkwUtPhAHSnGAQNCZjpkCCNaLh5UB4dgg4",
  "key20": "2QkZxi3qVVPVw7uyMutmiLfckSXdTp2GzrwPvVht8HvRTrxMPux4Y77Xs6kbBS7QwLijLTZtdMxiCTQMKGxmQVAz",
  "key21": "2v4xWeJ4bSPUtdhbxWkDvDcEVJDBoq5RsBNMD6yZrYMKa3YLDtKDLXKjoHb9fy5BUPTPm1XCHSA3rV4JEQVXbGUR",
  "key22": "4GVdivntzjcxtz3Rbq112ihazrnACt6GjyX5hiAYReXXUdyfVxiknLT2JBbwR8o6cjE6xwhXsYPpDFvLnf7GNwna",
  "key23": "28Ckc2BqVhM1xynhqYDrzf5NjVzcyTHXQuzibnYLSVuuUUbmxxg9uZA88JazoCjLdWfxEkjFSS8WNmPaEZqk6Vt6",
  "key24": "2EUNBXDdhK68VrofBNMBU1HbqaNS8FiZU8GvRmDV4SeFtCUjAgHAVAx6HfM8niHQgB7yhx65xdZJBTtQBBL51P2J",
  "key25": "5Ke8Jvnx2ipeBroAUmY5Jn42feBbpsiaBydEWxyFXoaFGw2TvUDwt9KsmkzcncoWhcA7KzXQ2P9t4vTptQekBtwR",
  "key26": "3ZxxP6JwYCPjLFVGMW8Vt3uS2pBEvyyD2nWyYs6Lo4utacVRSWAZtYW4poB78SsGeqtCo781GJFdeHWRu54LLZ8J",
  "key27": "2h4R7um1B6kJ1qSQnTGpHBxySEM2UTcJntT7dW3SM3JnmpVBXGUMcsvyCGGxdJwE5REaEVBQubRv2SqnDXAVMQGa",
  "key28": "4dSFkxagFrXoFB47uw7MzH2dRw7N8r66UxkHWubLugZqNP83gJ5Ukgnpj9zwaQfJxk4tPTtnmQqPZCjxaQXskiaH",
  "key29": "2SiGDVNKEfuncFGc5uDSnEifm32BakTu4VPR2supnTEvD41WEjWuGCgvyenNQ1HCWnuakWTthfJgJEnh6Y5x1tFG",
  "key30": "5Tunk1H9qJcwYMHXKQK3epMUbMaXRfVDx6hQPLVzUJCg315AzPHvPkfV4BUbdVotzhh1X4mFhCneAPdi1iVbfCPq",
  "key31": "2CE4G2WBbfhb5sLzR3PG8h47o6CF7dvWR8tH5DhprakqfRPD8wsv6myZ8RjS5zW4MJypipLqfXvKJoPNFVC1RFJE",
  "key32": "2RcCaXy15Pr34E4pfupZ6Zj7sANHRc7q9uPjeJzix7Gy1WQZQSCPSYnwtYBLXWntmoARfQ7YfyzxubqxCpC44dDi",
  "key33": "5SeXffUwEo1prnBu8yiMRojhZ4uHBpeYmYLiVyo8aK5nGDQePdpTdagHdfh1xtWtJp4PpGz9T6c5vFdC1KKyGJE5",
  "key34": "yXAfT3crzP8DBiTnqB2iuRoDNZXYuVyp1NKLTPB8zYaNZMUoNrz67Xbv8jNhjrLemqfpxUDpvw7YKaqrjABcDs8",
  "key35": "4xLCxW4yVzcTRfc8DpmEMDjhCAhMUqk2vkxDQUfW3q7aLHkQfJkgmoJVZ21JdyhngJ7k6FyvXsWivPaZRAmdC9Tq",
  "key36": "3qrD3rpdyVCTQixXeL5MPqcRHGsxXCw2L2efL3Rn3HexdQt8hM2asdwPt3tiFDjvUaALg3VRpk6Lng6qFeyRbs7z"
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
