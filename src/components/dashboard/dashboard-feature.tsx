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
    "21zzQrueWVSU2QbBjxQV9tc7dzye93tNneAofKiGdPJnKQgyZjpPoKV45tDgxS65ciZsRQLKpMSmQmFGf881uE68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uoygrx9gNjPpsjWHNGufmn9gwNYc4SVv2BdDVWqgEKvows7tJgNLafrV8hDUqxVrtMRQZ53xEc7sr61HzCmK9gT",
  "key1": "2fbTKBsEG8d3u779rb5JNVjYqGH8KWxmyXhnJodVtQeY5uXXZp4oGnzHbYqxqj1YsXJHcTUoaR5fZ8KMic1LLPHU",
  "key2": "pyivh4y2mSwFecM7mS5hGWHTM6K8yPwTZJE82xjniCotp8ASgJcFjgEL7qzeJ6aAK9yugLJXu6v49vLs9Qx21aA",
  "key3": "53dkPfT5FdRen9DpzgJb3WR9YXbAymUBwoQ7nVSq4CdrnCKER7rc6NrQbNS9QJq4ss2sGhpZgo2kLsrqxngU2T7D",
  "key4": "qHRpkGrwiXUcb1V2wrXtX8yM9h4MNirk7CRXkk1ur8zJ1srGst2j6MD7UCRCjg5gMfwppnkhQ8SS3fVDjV16qkD",
  "key5": "7QdaE9NpYAFQmDpTpourWMvK9RqsZYopruMiSF7AVkCdzBc34WSkpm7zAj9P3TjiR1rTqywEMVwP1rN1DiabzWe",
  "key6": "aEdadQKnqN1g8wHYW55s5dkyjhHxDVJB25DocVHzo4jixUhUjvmrBxknCAQ5yxStU9xbTPNyc33CZYHcEbLyW3p",
  "key7": "4nv5pMwCwAJJs3zguc7QXwKuRzBrHDxEEaFkzpwmQUqaGEhDD9Q5bfitbgQsSoNeSQFHhnvAmNkn69QRh7L3peGp",
  "key8": "3sd5VA7EjPcyS6JhTaam3xmGk85w6ePzHv2uRdZHd1VY3wMuwZxxVFs8wqjce8duAxpHHkByT4jA2SBXWGHjUogV",
  "key9": "2RNYGHtyjm797PMJw4nMMNZrtETz43mPemrPcxRnJVWmHk9PnmHpnigaCsvS6GY24tutcc4A4yKhDdwe7dsWbDTo",
  "key10": "3Lvivy7mBJwtX9CjwJM17D7yVfzvkmNCK4R8MbqQxjaLLs77YJVKXKy45Fs1w6bPPnCbn7bZ5gVJzcwUDmDRAPub",
  "key11": "44gUusMmAY8o4v1CkewHhcPAGUJCRW7KxDyrRFxaaZhwMVq26orMYmYF9Mxi8aKQ4of77r4TYKskmUge1RtZcP2R",
  "key12": "3FNLiaMuWSLZiVxAN7C8bRspP8BVWuwcimod7tKH8BxB5iDtFjNtZ6baLRhYCXsZjU76uAxdcANSZzPxEZjYmDeC",
  "key13": "3Zrykdo6GUGxjbnFmxvCcwShDTjBREHsYLnbHBM4pCwyrsGRnp3FDFKiGF1H4jWxzHFUNTSaGUHZ66qEcvRuNyWu",
  "key14": "3J1M5eUvbNvp7BZjteVNhcxeB2DYXuiBX2F9brsgpvDSt28DVVDKQd1KiY8jR4MDsNcPHyB2DiSBurEeZzB43vBc",
  "key15": "2ovpWkKJvd689LHVWGgg3pfdQ62mMsdq1GDTpTxnw7nB2MWrnRFBHZ83ofcTFGjW2bQ4kFCLBfvhaFYadKVuXavi",
  "key16": "3nv7M96iUsRGTFEBfTjXzQEpYVQap1QVR6Z2zfHr8zaYzzdv5Sx5Buy9q9RFtda11ZXsdmmZfWCxnrq2ESWSK2Zq",
  "key17": "4R2dreUnsA2Y4CmePb2kwAxuHuNvQeVj82d8WPp3JNMWBwKB6hVZWTzDXScDP1AmEoqwUtfMxhqwrndkajVzQtXZ",
  "key18": "4htNZYupbyxm9ehLd1BVT7XzBEzknNeDjTibW2j6PmvE8SCGjgr6yWoEYmB3sA8Toj7q7Ndi4bLFj2MSa3kd7HSj",
  "key19": "5LucHQexW19rbkdT8v1XmR3ooXFYeCDkCoBBmDRDuemcD5suU6UkvnbyTFGoEYVKasRL7WNzgbVm73u51LsAoZfK",
  "key20": "2vDwZzEakzH1f7N91VyYyGpaS3oLJ6tqTxTBCTuvqXgrcaFevj3sAnYvd7Zm1QdBNwZhbFUJPrSKh7ApzaeZNiDd",
  "key21": "2M8zdno6n8Znrr7CxsLrgz182F6ifZn4mhMHd1qpL83N55SQ6qzBxZUPHHcE18Bw9R1K4so8rWpck2pTdCUoUhac",
  "key22": "5vs7X5CeKtHvW1oFXbpNzYhvbs2B9AbGsDD5Wj5pEvsj4sDePfj2F1P6vD2MgP9E9JrzqzLkX8DQbSPPQMo72fUa",
  "key23": "4rNDDYuJwtN5hpcnNkYUoPh3ueTzKG8naD1ugM6LLw9YKCMWiKjWChqgsfimsmzVXtYBcL5AhpA3x78muRtfo5MJ",
  "key24": "3K6Zkc99VW5p6rV9eiYbmVUGBLTszo5dNn1q21KATjGzBGtseYvzGKS2RqKsSPCgRLVwcsAgEVkL8GYbbxyVTeqo",
  "key25": "5P7PWNzUaxD21Tzpvf7r3qsUxpNTde54qYU5TnTCLCAFf3QprSfmNg1NoxE7HTVwPpNVzLot8TVWTzytQ4gLeQCv",
  "key26": "4afCY4EZe8zrhx66pH2yZaMcRL9FaMMz7cboFisYArLbhZBLWviXEJqYRJ6bMeQRG9ry6EbvoPiunEQuNJgUPwAs",
  "key27": "23So1nEc7owCPgfMGS1sANm5EjS2GJb6mRyDmwvZHWRSx1R5fRKn9PWzTH1rAsnHt3eVjcC7xfiQBKRCNKvzkaxq",
  "key28": "VstPsPMYnt3GMR7PusuRjzkmVtVoAud74E7aNY9LQLYVo1bKEGHD5PbRJzG31eoC7avAzJTkpBgwJndbaAecWhS"
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
