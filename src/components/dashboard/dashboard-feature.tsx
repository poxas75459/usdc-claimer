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
    "CxtwRiGsf1neYUT7tnasPpHZ6QP2FjEXxGcuNhqJBxtH3q16qKNWd9RZw2JSEU29R6p3xjAzFb7YQDo627gJzFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27kg24Fo8wKYrDaAN9Z6GvU662YktLfw8vCV9mRXFFGdxUFkWjbmQSLiujtW8sEoap9bE9FCF9G81WW3Eo7NZfmv",
  "key1": "3EsDA55GD5FqJLRTwoAsj3K8SpHXf4QstTmAm8dSxdP65tdyhwaskVHjNvBXFBVSZ7jKZwPUcJ4Hahkg6Tfd9d9A",
  "key2": "657eEh7JBujzXYD86RocpZSRqR6xVyr2v3Mwu3rEqXmFdxnEJ2B4Vmw3DrpmWKm75Azacjzpn8wvexcEs6xxco7V",
  "key3": "32ix8GGdnqgPQha6bEYn7RyB5JrDZNJgtavc6dEQeKTMDSNLJcfeHZhVwVyHCDgtoXekXGL4cnXqtMTx6p9cdS7w",
  "key4": "4yXD6cA6jAL6yQYfS5fCAPXCBPkLFfV1TWspFCH77m4rWJtw8FMXsX993rdmyP9uVkJTtCGVJPKoWMyCWEiNQtZh",
  "key5": "2Kw72r4jz6kPjNvxZmAp2gwiMwgqXMMT3tLctwKRWKpihQ6155DWFPQUJUh4LUee5vwmpGkEG12dp2igdQVSmoZV",
  "key6": "4Gb3MC3k7kVVjoX1Tpo72tw185YLxhtAXpzRm7JNZFVPsKdVm8FCPb2tWtnjESCQu5wKxRjPbhd9UcS8Rtq26uZ8",
  "key7": "2zW7CRqN6S7iZPhcKdhFx4zjYfzUnDmZ18WYxuRofdLDaXKQNfjGeitr6yjkdaKAfhRAy4DzYYoAfSibb3SpWSn8",
  "key8": "3N3WTnZnnVrzP7wLAanAfLsWEePp84Cd49YUBjtCU5gRKPFbnydRSaGQpLqjXVXKuMLTCa576rdupvLFuDfDijnY",
  "key9": "d6vyPFK9Nen4Cgim2Zh5WvaUhtuiCK6Hdd6uKcbCG1TktRryGYbpbcGFzwgFNu3k6g1cDGjZtViBrbZVhVPmsFe",
  "key10": "mXdm4AGwXTDL1q9cnwo4moL4oPJJywviQ9qnXchU2Pms71w5Xncz1dPUqJVGyMiTWuuFkfStqHkCXwi8NBwn6W9",
  "key11": "JxPuBDXXkmfnM4ks2ufWToytzAdRoXHe5dxHKHEXPLW2KNukK1cFhu4PVUJqrXXzJ3z7eQV3pYZj58nTt1ZxGQG",
  "key12": "5rv3EmFFzbcpf9DtPXSGYMMKT97etaJZjoQF63xqoXfkXRZBGkpX3Z2dkCY5c785fZCACp5dqwduXpMFNqvmvLcu",
  "key13": "3pApzi8a7SWHHRFbp2a1RwLmHySJifA8rS7KKdFviygrF3XyxLDK5LmmraAv9pvrrCqutrcpMrYgMfD3LTWasL7B",
  "key14": "3J4SPkJCXVSrpeJUYdA5PgCXYzCTEZLM7VhGg3jxjcjTCJBfygaZYD2zzL21cSL66kZVgLoCkoWfiioqpUG6JKmn",
  "key15": "jr1GrMwVrr4CR2uoR8C9NzboSPijZVbiDwyeBnMvk3LGW4wpt4tsUq7uombtYSaefxAshbyWDKsQULofgiP8kJE",
  "key16": "55v3mUPyUt8KzjqGG2YwXKdiDjs44mSZGkv2uaSD6JQsvNn4ZmCqw6VBjDx4WyvfXouGrfESRWMnhWgbB9Bpseh2",
  "key17": "2X6WacbNkq2KY8VSr7pYEMQX8cVhJKMFc2v1CWDwTarnNN8t2e1eDCdvdjcE88NQLrwq4uaCRsZDNSZUpgLPtSY3",
  "key18": "2VSYBAqzMC7cz7pWuAjddEbnfJEYaomw1oqrpgGdzohecihm4bga98PFayXtFJZ4ce3Hc9u3SpPBnfcdhbb3PgQw",
  "key19": "2qS2kx7F6LoUqDbwcvA15shvtzJnJQzfzZFAUzGpvFNwrwfdJsxjAvxSX2cVpk6fxefeKxodozyV3xsjrry3Adtm",
  "key20": "G9bg5EFdJHbvQ8sQLCDLzNnyFvYFqoPB9oG8CaoVhb6kf4FqB9Mf2tndNqo4bqqUF5728rJpiPkNcrnXFKWa1ju",
  "key21": "61X9Eub2RmkgiAZvEvtH5qrfXWfKqERxcbQnmMuvMN3d4aoi6AuLwaZraWGAUcmTC8rznmbtNayJzY8Tt8cNfZXM",
  "key22": "5a1WVfbniw6BZdrGrdsuVVmhbkaGw8gv36AtxAgZx2vr9HN39iYWMJcewP2jMdtFSinogsUKogzCCWTrpRSGfDD4",
  "key23": "2YWzs35w3rmJfDcnPWm5z7TqMUejmqYupUPyWPXYSB3sexQfgWjoiy7cRHQ3BKj7czQQJ2xtzwFCzVBMMRNLRu9e",
  "key24": "3fqHsVoLtMwHvEDiaj6SQtzB8NptPcVT7zvpiAB9VqmePv4aLG1XLBfxycrz8YAsCCqf7oZsAfZheeZhPfUR3omt",
  "key25": "2ipGbiB9kmc4gLSDh2zEsYXZBbqXjQQCP9AzgSAtw9gaEdwM4t8fKjyzUTzHsxVLvLzXfccHoeZUVADeSUVF96y1",
  "key26": "48HTEF62zU5xj8pWFShwG4LUnAb3EBguKfgBh5u4UPybdsPnKViTVtSpnCfyTKaeqz8kas9Vv3zNYLBRFBM2WSMX",
  "key27": "8UDuKJ61CWSSe6EtMw65QA2x853XgDtM9V3gDutEvSs9Euu4kL6gWubZz7jKV32TmcVR3dwbZYmyHRDMhLMpt2Y",
  "key28": "RVKh4Yp19hrFMappYm3PEGGZkHMdKMLpZh6YsaSme2QJEXSNyPcB36VyYnWRSyio48oBQ49qEncKVtGLUTUkd79",
  "key29": "4PeEBRkzv84CBRYRTGEd9iwtjyaGnKWkZDbUQhJHbBcrZwtUJ1bZkQ6UwwyGJRBZ4moxAetwMVFWzLBW7JH4VTq7",
  "key30": "9ScqPkKNgJuN2AhTfr3pJ6kQUrFwLDZXiXfHegwnVs98ne4twPQzZreydyKAEpherYd679mFNUYvLfyUdyZRBFr",
  "key31": "35FwgUot9oaPacEDhtafVp5bJs3vbxrxLCL9khXgJKSy7YwBiAcVp4NhVqT7J2ayGEm3kpRXGsBdGD9casaXFbQR",
  "key32": "5qqACreQaTr5Poq7JJuMxmD47kAqFdjeupUmsPWveBUtfkfr2adpLZ2ugbuGsS7iwnPRdMh9Q2XorpMWt9e3MPSH",
  "key33": "3tpaqmLrxpesJmcKTbgZcuow5YK7hXoxfBPuLEXfHMiVtPScDuvbLhNQQLhrkZ6KeMj9fMKdGEyCaVCfAWEpBd1M",
  "key34": "2aotqnVU9USYbETWLnXYgo3bHGAoGeCYNF68nyB9FCRhhpQczbEySNsBK9zcrSn9D7oThAiCU4AHJ7TitqqsqLsc",
  "key35": "4vEQiyRQfLuhhsz7QK6hEU9NBQfiThTrv7mHBDTC7j4dYstekDotXZasN3EfTbremtaRMcZcMFjxJNcoyXqkDBSu",
  "key36": "4f3UqXMgCGiXTMMGtWK7DdcPL7etZFm4NTSow91hhJXYmb1Di8GmY5nu7pacpJHAryXCPhV5XARNdU5D8UHcDwRa",
  "key37": "LU21La7KkwXJRgthUNxj12h3nCcRuqEV9nxaYNb1N9stMdgTB91itSnhqcfPLdDDUJeozg9mJ3FpeyVdWcZJN1U",
  "key38": "3pCKu5BxW5AJcc2qWMkuajgX96YaBwbHtvV2pcLAWfcsCYZNFunRCa2AW9PjUh5PhPWqmcDcJSeXAt9Bq5DAMdub",
  "key39": "3REU6HSmx9yRFUEQ83aUVp3YRnEB8mwjYq2bycfQbMxupoSXw5rEY1hTzrq2YYv4gcWkfmN35Svx5sbEbG5wFFxJ",
  "key40": "4crmn7xVMGXjvBtTWCPhTqCEJFRTMvNxzK1PG739mahCNzUtVxLV38H5fyqtE52VzWwQrf2bXE3HDUUEUpCufYLi"
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
