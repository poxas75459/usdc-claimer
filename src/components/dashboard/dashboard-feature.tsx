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
    "4mnwRBA8fsPa43veXMe7FyYYYVeBs6qMFRXS8nGDzPqpgxEvdzzXFpdaVSUi2ckptAUSd4YgyRT2skuCvBNGDH7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6dDh5TjXeYjNU6NsRzLMqtH6WBjNQ34EHM847VZHdub8DiDmn8jPMTTEKie4Sw4kMwDJ7aCeSdBkz8UXargY8A",
  "key1": "4BAEp6JEDKtbYdwUPUnER2ZctNdPAeYMfN6YDr3iBVN4wTwPcyf3RL4LMbDUevFChPkj9qTtgh6tfok9M6mZKCvJ",
  "key2": "ne1ksgxpn3ZRWCXCNmxYaAFvRw6L4SgPYm46kArPDoWC8FQ57ud2ghtDgFrsHRhSHLn5HoMMr3s1jm5xeSjC8B4",
  "key3": "jkKNdesydeEkF7QCmL8Ewi3zjExnZSv1b6rGS2QPa5Ca4v6ujzntExPWqY5nYKu2LZ1ThUTsKpG8kUKrHJUs4Dj",
  "key4": "o36WwCkyp2RxiMAGbtmLJcbDTBsg2RWtNCRgFakAeMd4Z3b7ceAAofriSEQhLPwJzhdUSowx81npDTBeJwJjKzG",
  "key5": "2koNfx3y8xYd7ZqUhrBdxMHVMXddCcxLkVWb49fX9b2nNEEPbtcHKmKvuu89aatndZhcyVqkEG5dBauEGNN1uYu5",
  "key6": "43ireQXVdhkVHheUYjVJHBoBZMncq89HwpAHYbxfG7ACMXh11L71FuhixHXRDPLyr1N5oE79ZK6Q6g2Rw5sEyswa",
  "key7": "5SC9ZtGnqgB5sBh2vrqGTdhFgqzLFsntJ92uh9SrZp2pLufSamqGyWegdmdM6Wvpu1PZbk6uNjschFzHnZDx7Dp9",
  "key8": "e1ssEKstwG75372QXNunMCPgdhWKW8XQYCxb2nxkAppxPQKwy6RJJMBXncrJ8irgRFcpeEivvyCUKG2VnrMX9rd",
  "key9": "34pZaxUN6UeFSD8rNjK8FwZezjs89dmbF5BGCn3txkbFqNmTq6rcw6dDCuZgaihKXRiyeh6Dpwd74XS1z8KGB7Ax",
  "key10": "2nith5UHYSncj9Kjn5kEVkFBJfnVFhWiX7cqw3dvjBAPKB4ZiMYZMaj2Euq9v3hp2HA9zWXDg1iihjKkT9xYREhK",
  "key11": "3YExxFcv4FxYXh1MFw23wCqxUQ9FuU9ob7isxqmiL5V7nKJMETtzhrxbRxrMGpc9LNkvgrBtfgr9ZkC3MbJhW4dG",
  "key12": "eimePK6YKgyAKXgccVe4KYHoCDUmMcgx5rKATf6n8fNiPqanEHFAsc17VT8iZ8K6cGo4JbomYn7tQcu54sYCMrc",
  "key13": "53QjKSQtoBFFoyfmp2dFu4GqLMCE7iSfcPELPTABQbFaTtmLV6rKVN4r5opzRy8wVtczd9WFNc6JcJngMh1i5CEh",
  "key14": "4z6Md3zL5LqMPwgVXRLbyKjTyWaEnBrU3ZiVxhFKrecYS3vaSovZYaC7cTxqP8aDwC7FowXhwsVbCh8o8idsigqZ",
  "key15": "4ofKa3wM2z9b7KohXT4r3y2Gmbdg5FWg9ST1mPh6uuP5xWWvRUZhEPYpuPWZNZZ8JP9JuRzEDPAWoFi2SXAcTSv9",
  "key16": "257w9Ca4yvE2Zu6wixmhiZdH3YU7ysvdRH4dSamDq3GEkCvQddHhBFNm7koiEjsqD4h46rpBQeagnyWZFmUsRbQX",
  "key17": "3G9ohGbmSeE71hWJYHgVcKZK7dpS4fCgzhsyWHioy4nBpNUGS3hEa6KoGzssHSDcZE7hamtTuksTjtyXPBtang4Z",
  "key18": "4zM8XxgdY2cMENM3fG365Vns3Q7k9TQuTdvfBeSyWNxBVpkUr3oDDzbCJy8xH6gwRqH5tMLk5k181gSqGj5iV76D",
  "key19": "5EcP4U8MNEqRyeKjaVkqF3WnCpRmcSTojQ983mF4pghuEpYf8xqF8H7XwbFLZAxkmmLvpfKcvyU5epvjuaNMWtT3",
  "key20": "4FncKFBGPzy2QFE5YimqmoJG1prZQZ9y7QJCRVe62cbL6WPQY7pKrWYyM4p76aMe9vJSJpDFetjT1DrKKqGnxwN9",
  "key21": "5ZDMZm4vZoai371ReAgnrMCyJ3rjfWgcDwrKvj4MCP7UmeoeZ3SRtRnEQMe2TqoX7zMdbEJnuM9UN8rR8cXgjB8o",
  "key22": "38q12AjLfxMfaZ54xRvTXzQhuxz1Ko2T3bJEA5SPMGotpA5NmBQWFXDJqX1Sj8BSiJ5ePRqahBKvbvSeMAqL2DgM",
  "key23": "4iecFJLeiFEBzzuaB243yLdGXzdgEg2PyW4YBVJQCSQPmVHWDdKMfGxAZQS8yZ5TuXSr8CEzjjPg9zog63oCvJXH",
  "key24": "2mSfgNZmA9khVr1BQnLc97EdsRsZ3LH8M2wX7NJr4Z97UibL9Mda4t1EqLhGY924DVANQgdbUnzATDWxi4gVKWnR",
  "key25": "4r4sB9rpfddX3Ldc7dXR99qFiQw9SquBWqwfCxLZV3SSxBwe7RQZfpRvFNRYknjJTAo5fYjvN6sVomKMwXut3u9g",
  "key26": "214ATERv5dzCvQU1ZsC3BQFMu7UbMsbrft2ux5CNSgZNGjRi9iJiXnsnGcuyyTffGSgUoKN5dVKi96Gx8KhTew7r",
  "key27": "4Mxk1juMPG5kodpK3J14Li6BLQLRzkws76bmvUptxWmMmArYxt91frLc2RVRdPQzRFPiVipMqFAdvMffGWiPA4QL",
  "key28": "3zJ8ufUASNMBdyQiscgULcWbGmCv4Xkmo6vxDyqsf6h18KUDDTDvcoMHyJpNqVRZRYhx8moGVvktsn8yk5sYT46N",
  "key29": "5SzW8hvk6KY65TaokrAEgZBGx2cfkEkoCvtWyZQueDuKuKHJ4i5UEF5oKhn31yAZym3BTLRVcYTFUnXi4GxKNukZ",
  "key30": "5KdR2ELkq6xJpRduSgTAyMSzcCxDdvRqbqrB8ioK4BGnT3deu81g3FoXvjDrbqJvvZUxSYDyWaDLQNBwccBaHARn",
  "key31": "4gtgxXbcJm6vDNeHDfM849LjmfqTaysAwi45cLg69UR9q4SZJWJwXWe4r8EVngJnbYeQt5mnoWxVw8Ld94naro9",
  "key32": "5mNDj6mU6U9sRncLfPue7hzP2xzdJXnJv7Lkfq2su7W3GHf8S7MDLhaxbEhBey5VxJzVLSLgLkq4Ny4VUdPrdeAD",
  "key33": "4gx3BZ8QfKknNkvwqZ9P4gcMXwoHnTF2zKsfVJzXCyxFRKi2rggtRkiZCxETSrcGJPRs1azbHaWdyJdXUVSdA5yx",
  "key34": "3UH16zc7WN7x2Q9zpDK8T7tfrChv1BoucA3jRpsLWPkurfseg5XiXoMtczA52Eyr1DRwgRECLfAhqNMeri53pG8J"
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
