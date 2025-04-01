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
    "CSgGbfWE7EovVz5EANYC8pFQoKHvrm3NjMz4iStRUHKUE3FVjZSonE684LTV3wtGSBbtfFjjBP6jJH1d2eHBcny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKBjJNE5CzQ9WAvThmM8S4CiiPyeKQPrbLLuF47MDbSPNN5NBuhgjXxFv8N8ssVsx3TP6XMhqcS6kn6db3Y2V1R",
  "key1": "3sjxRPz9LPV2uaUFx7ezMhZg3xCLAvefjchWZR7bQKJvCGqk89UCi7ASkE2r9DcQD9BSqyimMPQr97YfUX1UKLtK",
  "key2": "34aG5NaokBVkCVGVryNj2WQSnssDHA48NtZud6uVeQafsZ1KyL6j9SrLVQFmaXPyKzi8sQsSEV57Bxi5HZJ6zm2W",
  "key3": "4Cte4gHEFvzR3uz2SzK13ETqVwEcwWfeq69biDmsjWF1Ko64BYvunFc9XZgjZDL62PdDFqHG5gcCoaPu9StwDxnS",
  "key4": "2DskAxVNzE76ip1693Kbdmgf4oQymmiXPkDQ7kK4MyvJtqU2azFGMoRUqAegCqKpxf4ychCFCDVhbVr1MBvDzcE6",
  "key5": "3bEBAvphBh1j3M2yhzHvkt6hmxayrfzjqjbwxyPpdfip8SkELZuDW9H6cEUMnpxH74WSzjnQMei2m4GKVsXV6whd",
  "key6": "ah4ZRktwELT8cDJhLnkDo3kpHDjYxpsRVxZpGtqWs6SgLSAZCL7Tu878cjigT1uGZb3z66bhBbryq55JiGGVBxt",
  "key7": "5SzTqPz5WR235KNbxDRppdfToZUiNRsSE18zVpUwdWHNFKzMZNdnAtjCWcTubgGU72quZZtJjVtPeP1qjf2PRhE4",
  "key8": "4baLf3UT3y5JGXJ2egk8rTSERD6eLXeJ7GMzDfjQDkwQCVXHUcnYpRsmeasWj6NanQ6n89eG3NXqpCvLD94LhCxh",
  "key9": "4zrRuJLLeebHwqTaViBAQbDnc6rGmZ1MvnXhkHnrsJocV8BDcXkpTsQdxfsWWkenmoiJ12PARczFFE6JNVK5u7La",
  "key10": "VAdyaamL5WSx9B8khFPoo2NmEv1QwehdtCaHNVE99pdMgkd3rLEPkZM3mUZq9kBgjpc5hJKVgpPevXXP1CAM6Fj",
  "key11": "5NGxKo5mVk9orgPRTjaounUbkeBxfoTpxsChCEoANxsY4koCXXqk5k8uSrSwvjceCqFwQr4Fz3orZ4BPCBqJEkvR",
  "key12": "U6SrM2Z2Ne9wSdbjYTPeLCohPJatct8NbjRiLfjS2Ao5Up7eR6stmA7nRm7UGL3PS3MAG5s3Lrxu6xAUn3FAABh",
  "key13": "3XF6FykKWU4UpwGZREryNiHXDsPWYKHywk4HRsfdaRA4We6mJ9d8ohNrPKpDym7oGofAciqtNrGh3KYbxbye6cmU",
  "key14": "2452v7M77CwRmzxzjdnWDwCHGAAMm7yY2SdXPkzcfmSJnxrNmnbFjRW5R5baj2UrVfEj8segcMNdPnpWUSGjztff",
  "key15": "1zS6yW1jQmaT1mFULYSVFcW3urzDeqb3E3g3ihG8oHCBM7b2w4egSi7fjM2G5W1kMFxmTv9fAjtDR5DCWbz83en",
  "key16": "3xyotdNZUkyE5HaLTKK6WGSi4L2gLmjhZZzjhVKfTKemPC76RifwvZqxiwRaAB3nSJcfwDAuHT1nvKLb4r3JaZm4",
  "key17": "3M5yFU4vmqoNo6mSsHxGKCQuPTFg8bZANcFz9tAysE89CibpGVjYzBU2uTyuUzN2z3BiMT9524j72YYBLD6exL9x",
  "key18": "6mFC3ytHmjo6nx6rfHBGDiweSJKBiuu2LtcfVLivurHkQyWEkSV6mNUiB8bxC4wKhELcvDW8d1y6rRfFDtEV6wv",
  "key19": "xBNrsdwa47CMxzwx15hYBcMBgjwgZSzQpmcMzpJMDVsY8gB8YE4hgE3F89MDyNcnzCcGKXvPW57osU4qnay3BPW",
  "key20": "2rvtuxcJNTBYrGZkFfHqTs1NZcL6rV8iF9NWAW1vjLPvXyU7ZFrLaNX6iLmWafT75dd52yTTQMdpacJpZdoxZoFp",
  "key21": "ScZ6ipbYiyPtcj1qMRWtwJphZA11b91rrtYzLEBpVfZN98Fue4LoDL9QWV7UHn6uok3sP8RqcJ62ikQw8bkPG4u",
  "key22": "61Cvrzk5fqkEDsNUkwH5FhYg3kGqbqx7WCu6t3RmFrnM44DUboUkvLPAjRfy1fFrPZj6N7RZ5yRVvEc1HzSx5Pc2",
  "key23": "YQqsA8GQrP6RjCYBoVqwdBSfL4PXCicw7swdV9a9khomFhVtNZjbwTCoAYCjGFCzMkEf7VHVaU5Kee9CCPCscC6",
  "key24": "2RsjKXj4n72Pz27yQux95mrr8vW8EWiiJWnYDdPpGHZF1BRmxdEWd5tHnUYCgYbTibDxkoewJzpf3MyTPMezwvk4",
  "key25": "26E1CCmXEBd7Mm2pa7Fn1XAqjajy8eFXbRSBXonUjT2oPcoKPsEDTKS9ncQqLYBsFa7UKLAU9j9m2ha3Bs6cwuQb",
  "key26": "5dzFyo4n8SS64Dmvq85d8YWMnRUEVAkEdxS7ecPybNzQ7HqeB33Dvn2U8gHbouNQ14UrGEVhvYmhQAihubMPp3vQ",
  "key27": "UFMrLXqjhs3KFYkP1HQ2MP4FVtpcP3aum2HKBB9sJf8dzzG1RaopGd3v4qGqdEYNbfkkYKwNKKBxPcTk39jkEFv",
  "key28": "2vtzwqxGESaH1ccwDfP95KR1VJSx8nPg7UDMbNLbx7YsKDqYV28mbVir7GxGVPzp2iwe8UWEbN2aq9VBLNFNFDbW",
  "key29": "HtqWUbW514FGb61qaqdxyTnygMaBC9if8DUQmMLaDWMd1RzfebXYHuNRgzvVcUEp1HYFw2aTbumwTFdS3VkhjhY",
  "key30": "q1ymUSW8iQUJXWDJM3gYeS2cTkCAra8cfd8B28yPPC8EdPiEiUVw1D4XtGnHSQQwUdFSt7dWxNpAwZyGTw7ar7C",
  "key31": "2W8ZsxPa21dmVsjuzZPySGKqSvCnVCGQHiVCPqGGJA195PcUCfxYYzXXbYohX8nvV87eYmQuuLkuqFemavJD7xRF",
  "key32": "3js261Ph5rYP3sWEAMbrtpYDEVmStaXXm2K1wJweM5EVMD7K5i5zm96pzq77ZTbVqCka5SE6vD3QkUXkXkSZoeH2",
  "key33": "FnvhUWyx1VyMt853d8a2EE4U7MHPCH2EFCY2uQrabbd6qbBRRFPAFP59igMQPpeaUm4ZnyCDfHQxDm6RqfH7kEh",
  "key34": "fuBotzLhKX3ajx1eNRBhEtoYa2nn8CNTXLFt6PdYj9bd2dqfuDJTYAGJBcpxufgXHtXo1q57jLtzyaNmLV6bray",
  "key35": "37i3QBEoQ3aSGYHS1NNaJVeAL6TtXPRNj3szGcozgaUPYbWpJEKc6qi3Zf8iSjiMPJjLXTNjBRoBQ5J32jutQGWB",
  "key36": "3jq3GKfAgjs49c8RQ7ggNUvJhG9K2aAEopa3QAhZX8B8bjW5PmViC8DYArzULAM9b5GkujF1TxtuLhNbf1iA62Zc",
  "key37": "43B5NX7XNoWFqsYxF5oxEgvgYXsukeU3rHoXgtYd7fYjjU31JaJo9NBLYUfZZJ28godvZxow1q8Ns7enBkqD4TWD",
  "key38": "664ZrwWiYZdKKh5TKU3CNVgrjrnjbebmPYzsqgTCCGgTY8sDJ8UWpKm7cVi9wTDN9HJStmUUn7bchVvoEPRdr3LC",
  "key39": "4jSLm6cGKM3WDfx1tQCAsNxvBQHRBKVQJMQak9UWvpzS38yUdZPBYKCxcgtjiUAfsAX2xvu6qWh65hdJcZxDNMnH",
  "key40": "MvKiJEhY8jMyGbuc94o22ua7evEPSXpYXf8iNJxfZPtm8SmPgQywXNtuEquBpTy8oKv4DzpFsucLmYfFvq3yvXB",
  "key41": "3M99dhxjyyBuRAA1LA9AY7LRULsMGNS44Vfh2DgmsGsaxakmifWpo7DvL8wPUV6adXKwztscpYzstW7buZZZNJgU",
  "key42": "5cPETa4RdLhwKaEsnfPEuhewKgheU8Ufsqexx4AksLntShHkPV5y4bupNvXYVBrPUhuRLUUcTRHmvtWjsP9VGBTY",
  "key43": "2hFyF6MnaKN9vfqqv8YNybotCS5doLkQucbuQBguRB6ygtY79GVdk6YsUEACqeipLpcHRqjj4CApjU7u7RKYsz4W",
  "key44": "49N6Rmby7Rs9Azai5zDzPPdJC9z9TrgCUkYMt3GvheKRxedUbdcne26hyTrS2UDyjKMje8ZKiUVpUkz73zfdu2cz",
  "key45": "4o8ivUuy6ushJHmdydi12w7GZtnQ2e99w9fDgV3nNYrmsefvSCJm2d147AzS7DquTi9Th3AoKx6MgeMUS56H8YT2"
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
