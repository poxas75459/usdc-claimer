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
    "3MmzMZAfFvbTJqF9zqP8MLYQqty2A2djVsf2mbGpy381LVWkPFzizWUXq4FpmZx6T2Qm7vRftF1yD6Ut5ZfpHfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wreqtuXiGH5K3AgdEsmPkDK328NhbS4i29cAm1vRQDMVoeTZt8UER2WUdeKXS2XiLDR9iw6cQyvgnZV7kL8yfD8",
  "key1": "3xLRzuy1aMYUtTrxQNQSnaZDEk3URpJJUSouirdthh36izDjqageCGVbxGU9juCqaQm646SyPnkgCZQ55DsHaSzW",
  "key2": "2m7rQ5G6Qmpt58oRACnHQouojoCoCHpiHDeyU5vEueDEwBmemfkyx66Qnf3csExXivFwnf4dBbeGhrgjydqGw65o",
  "key3": "4NbvSpiAkbKegw3yRquprTjAtg7Bj58Y3Pf7W4WzGsWb2akL5GQZHHH8jBFtFYSeLgMxATpURzuq9NihvCXaYeXG",
  "key4": "4UUKWEkie6YVPk17jMLqD6hkd8ZUv94xpEtvFNCLG4K7SrzpoATsG3jATSjtQnJC1tqkP2nK95m5v2DExnAErNwJ",
  "key5": "38SMecn5AAs81Tr145XocA5R92M88g6B9zFUfCAbJxr3crMa421bkuhUBXfhCEdoiGMg9rvHqC3V8RMxEaQwAPJi",
  "key6": "3rJUKCPPUSFKVJwZgQe4Bz4zhBRs4wejerfianLbmBognHrkG5R98S8ea7PZQyFH3jSVk94SP1pYjjn2RpEYcU4F",
  "key7": "5QL9yRExnvp8YQuMFA5dBf4nKFNDZg3JbuWUVFAH5kknVuJXHFWpUD7GwTrLLi2MdNoqcTxj1MTmjPqQpfsfX6xc",
  "key8": "3dfUmr8So8XLcHWA5HTeqcEEvvdzxg9vVv5cxA64K4a2hbvNRiYRVEKsjqfVnhPVTLbjNephTsLhSb2WBw5kXbTL",
  "key9": "aXezPyZEUnUD63x3knkJvwEbWDJMhkNn1gkjqVG1DGfmRSn3CvGdC1rk6NWfHUkofBaHVETkFmbyDWMfowKZXiy",
  "key10": "5K48FoNGKvakpnWxeJyaUeELeLAwY79LTEhn4F1td9oCMsakcQL26YibVJAX9wUKudHi6staXujA2TvnPQvoJ77e",
  "key11": "5TX7FtyKeGGRPQk82Bfe1eMTQPgUYXS2gmv5uwSBBjsqrTurF6FAexqjZbYKpcwZnvSMp3fwpzeAEeni1FPcJ2nK",
  "key12": "4pLx8WKg7WQVL27QWXusXjk3aX13ZiQvBT1sB8M6pYtAfYGrtBBYmk4aTzTv6iKK4snkhWjeMyp3PZyRvBX1sSxe",
  "key13": "wNRfWsjXUSYwWryyBEyCuADn21BDsrk9yC8fYLY5Q4B7SkmX17UugEnUYkWZdsThLZC1LfXAAAD2QgGzYD1cD1E",
  "key14": "3BBJRVEznQdWLWbp1e3GV2cEqJwMxLU66rGLc6HreAP5WDVsBasLoxae5Zq5BTWrvAUXBwEKdHPxRcEjuvuHEQWW",
  "key15": "5a2EQSoqYoAT27QAaRQnZMZ8AvLHcEtttKAEVa1xd9s4oWKwMSGNVR4mH7PXHoDRyVt5REz3LHc7cphNDQncQVz1",
  "key16": "4PyJqpyGmvbohc5B6shVsSYsif7eXMcP6ac5aVH3YYukbXmVb4sMFh5iaav7Utg1aWEeMHHSdERMJ8Z5p75U5jD5",
  "key17": "52QJH39ZqxyqR66TC4g6Fd8TBFk3BzNU9pGgkGpAZVzS394pqMH5MNd4TLNfsqD8cwHsd94GeQxf13LJtFdXKDu6",
  "key18": "2Fwhit85hZXXsLP4LUDmt6fwSFf3JFNVZZg17HRi1ypQbz2egnh8sVBAmuqRCndZx3URrRY7ekCMS6P2MgrFf6tJ",
  "key19": "3J94vtrQTpnPVf1dAQ2EwbdP6a3E1DjhmSPfwH6H69RGzMo89TLjXS7igaVk35pNCLiQK9bYE7dkTHDD6GYfxsef",
  "key20": "3Ro8pexCgYhBfWQLNUoKiQVPZ6u948Z7dc1g9JTkYfTsLiaaKstHR96YXvEyD4tTHLVDANPvJGhz93zeMfpa84vi",
  "key21": "2BY1SASzPTNd7faUwAD8TkuaFaix2JszAULnFnrRXp1bXgpuKauXT79TwimpHtp8U5Q4rmwP8B6VxHyixobKtX7C",
  "key22": "67goYJrVmdNx3KqBMLodAK4py8GXfpRMZJ6CEpaMrmmJF8LtbhNUfHqc1b6dMbEBR8tZL6ixNxBYU6PmgSZ7sRC9",
  "key23": "oKG6y69YNpxYrsPkdikdwexrpTfyBBZeBxqXonYxxqE2NEp5KuV1Ahc7aci9fRGGSSosJeSQMnB3dmFjZZjcfNx",
  "key24": "keWEYqfiq3RrTBRiTY1yhApRhjV5KkgbKgZ4sDXtUhNM7WgYv3M6kABnApmCgWeHg7uJWbZNWcdUpzSfbj5VHB2",
  "key25": "2LRd8WcTvnwjiPnCcL9xnbH3Pe5ofrp5W8BLETxkbfEw9e7TCcxZK68THryKFHYpHCVGwxyPe1yttUutZrtfUUNy",
  "key26": "4FwDoi1N2jiVx2ofxmpsBTWmBiDp6UFZ1o2TwE8GPpiGQHjQui8x8YwuvyDDfxJCVxwRm4k5GMFHchrPZpfwTH3M",
  "key27": "Ma8RKPAroAmetKX7jN2APMTVoJFwserRjAZ4JJPp8r9dmFgY2EfJqZGUjjwX8q9zJxSqfpiabQVumY3c3hmN5aw",
  "key28": "4QiKE2yXhY7y15MFN6YgmLXJZ42QzVjWdeAA9sFX3APnHdoPCffwSonoQmRNiibcR17vyH8iJnER54tqzt3GY9W6",
  "key29": "2ahVXQDfhXFrn5uWFuvHMRKZtqQ25jC9onpaWcMeYAufggjGSpfQquD6LDutxvUhsm9TLhNqBJnSyLuF8Lc89oUq",
  "key30": "Gt7GmcQMfWj9qfPeYUqZrRC3f9TQwnkajpcMttEnuBwrGjzEy21x9FJgNcNcBXRm4pNfRPsgde9Lj1VPut5FVeQ",
  "key31": "4px1HNzafHbwi25ABpdUyRrDwiYGCyDoXLzZLhNbkGrrCP4gaf19SCdVCG2oePTcEuJu9si9RnNxD6eQrDLCo4CJ"
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
