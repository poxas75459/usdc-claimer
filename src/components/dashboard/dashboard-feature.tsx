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
    "2j1iu6jA8VPUXBGgchuuZqSHDzjYihLP2Sbq7QE9DzrL8Z5yCeNn5ZbSC3bCGvuzTGwoCJFer7p7WxLL8An2pNke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHY5ahAKwnYyrKEskNs8TEuwayuZjBXdPdNFWFK9ZXMY4tmCAE8qhsLBVPvVDkE6hRHJLzR1ir6jMainTwG1N58",
  "key1": "2qtf8YH8iARPDoSb5wiu8U4EBPSPLqCE6oj8td4Vj6DzJAVPx8wYusT2FnhD9nopGqzYw21SNJqmTLcGTAzwHSXJ",
  "key2": "5UpExbnWGvDGdUf1p1xSkh7pgw77Asa5qhAepm5TGUiFMA3ubBvmv3qzBw642SJGtgvzcJDLD9TAje3FVRASExnX",
  "key3": "78wBLFLfVf3aaQLcii5EcfHCodm27gaa3PkSpHbfAwdYn7DTQLUja88iFFcWcm1xR3en2vRwhS6sT7vvTsB3mNV",
  "key4": "34iBtM7qPuBuBuwmbcwiYx8exLhkkoUTCnHXH6fCKgzZgXDDVntzzD5j2rn6susYjUhTJUWPDEjvgG79oCnksNV9",
  "key5": "eF6hbAURr49Kv4GdziDFZsMsXmKVmddugPEoUTRhxYgbgrueqaKXVMkFyCXT9JcgmY87wE4vL9eLf8yKWwVduo7",
  "key6": "4U7QUE4NXDieP9Nz9GwbsCm8DMcgNHotopveQXb4fSrUYyEKFLndd8pMTgs2cokhCu67nJG7xS5RHnv3JFk69B7C",
  "key7": "3PRgibsii41NEtLqvSqWJcHfzjBv8TeCLXa4dMyboPakzwXvCtks6wWu1kidwVTnpvj5MXRze2GLQvE8ZmciFfiW",
  "key8": "uGhAWS2svmqcX1FRWY8XjktHYtbuMQCi6LxiPwcBjZWsn9UePTWND9Ay9ds2mqzzZN6RbX8Z5hZbKabmG2UYLWS",
  "key9": "4JNTM2vSjK2PCNvCc6CbCfu9YMgHCUZyfZ27ZkhbmU3oEbWCScDKEdjXhktUkcTY1VTp4d9zhiJXTReYuxCGq9t9",
  "key10": "2A3YPTetdhDAMKWA7M4ep7c5mxGQaD3pWHVmXm6JV9B8pS8EExCGvBgGzvqq89ziFVZUt2nvJj4pLAfUBgh6x6Mz",
  "key11": "3KbeS7UGnw5gMB1GeqwK9fhBZ7NqjKHDxM3Nja187JBqKy4BVAMtwBweCYuK8MpBcT8PjjaxjZeAM9mCftdCUwog",
  "key12": "LLdw7wgLJDWCbyK3x9LLLramBvQFaBnm48DTHJtncncGm1WLkoy8NxKcwaxSRhKSGcKG4CfKGdd8TejDZA2fZLY",
  "key13": "NfBEtYm6aqxn9MS2zhGBy4oa2JvLGjwck8GdXAGshwixB6AY5VeoT6tR3kzkmHnzzYXFSCqPRetqNTtVmBfL6xN",
  "key14": "34ZeYWNeSZrZWpRj58Y2Wudfoc14UN3PybBGhGGXRc2gQ4u5tkFYQFLFUUuTJhfyHXPfoxsjdLCvv6tC5RpUYB5r",
  "key15": "2WEQqcx37dUqDTSsEq4RfwYh93QubbJs457vgGxPd5SWmeEAfmYNfkfyBvvBSf4zgHCV1LpvTXMkcbyAdgyEy9YC",
  "key16": "44Ny6Xc3BYRXMTPxM6AoqV6XBGDuvK7yLmpUGB3XxBrQMWPXzZniPKndkr1W8bdPYw9z4pC288Ct5i4NVQcCMNEa",
  "key17": "LHi3SQjcDKszuwPTFFjv5JGg51S6WecdGo3pa4RUJ7CfnBWMwtNRSYEqjwXMqMdF8BPSHr8BL2HSTi6Nz2MZMnc",
  "key18": "24iT6meGAGtPZTg5nUk5sJ8uVs1HQCgPxb72psdtSsDQmDTSeWqCaxvmh5vpoxdmnvySPNGXBHZzHy5Sz4EHca7C",
  "key19": "2vNRBJ1Zq4vNNyheCpvpHQmGcjU5E6sZs4eJntGzey52VGAtVDL68hasckAcypJXiCT2yfxQUP7mrBRSrQT3ehiy",
  "key20": "b6W18W9H7qfTqY9pVpwfPKCHBfnk6F8aqweyhRqzXtk6BzotEGqoTSTvtAAiTHSdjVWq4xe5X989C6XXXE2QLri",
  "key21": "5Vnyq6baTvaD3HxCWQ6YsKZmeJ7GMqMTXfy3fafRHSrkmHnbfk7oPxjfosW9J6cg11R1UWC4d41XgZ8tt4UJd8uK",
  "key22": "66UU15sMGoeaa8n8cXgRdJFvzZ4yGMjWyLL9FYiXW9BXRVYVT2FNPyvUat2BDrkEUCLag51Psqx9XCM2iPfsM1TT",
  "key23": "GFxFqtEP68W5APqobT9o13C3Np8MmGj7wikxhFASVH4qQGtumWmc86Qg5TebkMCJc553ibPfvw6wvsQztebc6aU",
  "key24": "2GYL9JfMLuVvy2eNdEZtYxtne4vVjiqXitR3KtXBhkVZbwV6pp3qNDdmrt1wGQKKvkSGZxdzVJz7qcHXwX1D9oKL",
  "key25": "2FHbYA623ZvWTPq4gsG6QuNr2JRrP6TdyhLWRFPpwwMn5hy8N56fYwzKxdxz92T9QbR4DjmSrYe1Q29HP4yF8Cht",
  "key26": "3tUQAbskZztdh5FTwH3ibZuX7NU13yXpGmEWeZaQ78pd7qkRHEcP73kp9oBqMwmrXUaAW9GeSKt4BtQhs6Wmr8r5",
  "key27": "W6F4hKhHTU5tieuWWHVKJZfzyEyLGnTP2qbBNeMcoM89NgyPSsziD8B43DNJJqXGap2KQUgfB9iR1EBFdNEkWLm",
  "key28": "4AStAtw36FzAWQM3MsVM1PmE644v5f2RAf8JXEuEyo8WWhuqdRGNBYud2MQCHCCxNmTMgR5mqkKbQt3AYCKMh7Ra",
  "key29": "49T4BNQWRibruGE8ke3Vt1npSAFADNCTejNscwYGksb6SjXxeAYb9Fxg2va344VD2NURB7Xsj5ZoSfY44wH5YMCV",
  "key30": "4NsVpo6WWZXxNcccKmhUvkZ1SDrHPgpoEvb1ZF6QN8B1NiDkewvwFFkAzgntzi1sKVP8WG8ZRuNTmpMnvyELa77f",
  "key31": "KT9sYuGv28hsX6X1P7ZZ3ratQpDoxn1VwKaTLTqCq92YLefGvkSVeZtcta6W8GxipHqLNNXXityjZKyRSFfJvcR",
  "key32": "5yrHoj4gtaza741kaU1j6Hy9UZ9XxGSHBj2JobDxUvLJNW8TFMbUj88ZPjCQUMSemGzRBrH1QNZmmx4Jz4dYV17L"
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
