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
    "3inUrnAymvpS6M75DEjteDHDkjCqeQYZL81rS1XB2kTTXfyyQx8mNuLX4xQSLg8hPHHCWhxdj2Vyo44hDUneLQtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNCcvUcg8irenkKXzNGpQs8GsuBzw17sbK2ze6y3UYqeoDXG9MbZqreTdSU5fPXjz9kwQHkG7o8eTihLjSkrAx5",
  "key1": "uQ4E7cD49t8y3cn9vkvwZ8r9KPnUDwg854SP6mMijvsbp4cw61vPnNG9CPNDeugLDPyQbrrqjDgm6b8t3G5c62W",
  "key2": "5xMiNGw8aQBnxHmP5VzdMvoLA12FG4Y7q4yMti7E33PzN6ZvJmU7jUEHYy7kkyV1jyTkN3cPCtWPeBToQhNrV5cb",
  "key3": "2FJRLCD5NBakGstgZoUb2bYCbEEsiUMbngFR2mZZ4RTBAiKBkn5DDn687vEWMqBnrT2wEZs3YtMJ3Jw1io6CExPg",
  "key4": "rDL2RpkbS8n8D4KPpS1dUUDku2Q6Uj8PKsiTGyEaAgw9SL9Tt5BKGSyiChqPMiz9WrbHNYcBefgkANAiuuvebqP",
  "key5": "3ai9ELLhaaR9HBxDYFGg59AJ5h56Yw4BxdLZqYATbhN5ekYwDgs9AK4Y8jJHAykeu5oSZgMJeDx9G6hwZpnJzxxr",
  "key6": "2iDfEzD4uR3Z7zzEejquZkTbQY8ZG7B5y5DTciFiCEw9DNZ2SHcD37kYS9GDdLkdRfhxE5PG56MULemviLMsnfNU",
  "key7": "5iNEZp8D55N1ejxZwqhf36mDChwVeQEqkTQTvKWzqr8j3kJqvurTd4Ybny4tB3QAN6diJjY1dws1qWs74R48ZrWZ",
  "key8": "2V6gs627BvnzQyH553nmyGt4nx47zySdGnMmVERGksvT1tJo5Jo6ZmS6HrxBekRrHDapDGG735pd9MYstuywXHM",
  "key9": "4M1SzCvJ6Fqr5or9pyACdnY9cHQieCeF6Y6SEfe9ZTHG5MGkvtmiXmHiVVDHb7ZjSk3eJZeSctWafhnibELr5GJ4",
  "key10": "5mndny4JY8Nk8GCvAoNHCok9eh9Pt56Eu1298EECydeRkjEsDTtk3ZTnoZePpyH6pSuJkPX6s5vkdXVrc1E1cs45",
  "key11": "2yhRMCY1MhQdBPV96XHXgDJ57Zw5ZyE29fYQQF4h2Hwhyo2wfcwbJ4yB7tyuKejsD18U5yFQ8a22i4qnDUTGRQ6y",
  "key12": "JFtdhqcSJT4mSxc8rE9YWJWidUPSzVoruwhqGDATBFSkQeaCKwjKJ4kSX7Hdon7Dwt8BciV52EVEm2yJUZPpgYV",
  "key13": "5tHSHh8MHjsCqzePRXfapPni2qM1rZA2Yo2zFvLoE8JuQm3P8m4UcWQbKZeYAjmQ5yZZ3vGZLmQHLR9vR4WAsL4n",
  "key14": "3t6mC8MJKJHGBVSyG2psQcLZiJ5Vg3i5mkbKZrTmRWW5JyoK89DdtfbHuiLAY798cNCtqB9ybWFVgjNpZWBjvNMq",
  "key15": "3Dohhhm1iiR97LYD6u9tphPc7JXjZYwmhFJ1CcpQxSqGnzJDvcCJkAxwK8JiJ55A2gRKqnrqo5Edr9rReJBau4ai",
  "key16": "rwL1YfUJue1jKS2kMHr7YxgjiipHvtFCnkzUB9WPS57S1rWGNsJucsW1sCGLCq6VrnE6NYs4WThkX1H43yyy9aA",
  "key17": "3dqkG7AUU7G7SuNzHZj32Xio5hvNkDW1UHvEXp8mBPwADs3Y7Kv5CYZbbT9EyML8eKBJFuVQWeFdXr2k93oNMN4U",
  "key18": "fuFHrBZSKZkntTyfSXUBUJTRi1doZT3ExmgVDXqMgCab9Ga2ojojsU8txvGbLE6hmGwj71ZqCyiNYu21Z2VFF9V",
  "key19": "5ZfM1DSPSmBUHnbpnUryQprSpytVYdPWiZBvB4hCRngo5jJiHMZSLDMNh6JGG3FHVhK2WsiNwgiJSzo2YpEAuh3c",
  "key20": "2r9k62n7CCDhdgp47wDnBKNbvrrPiwDBT7fnNMKfD4tPgdr3Ex1GmUabDEWsFBwf3XSb689opSm36GwRc4TzDNGc",
  "key21": "EFv7CE9qN9ExH5JTkYoTCUzc9D1XSAaqHGTBK1ou8wxwrJYdAycqGPTn4Tjt4PW7MogvFGWCq5x1AHX1cPGbDPx",
  "key22": "4JwC1W9gVUUdxsNZCcFc9uUHHeUKtLBNP2SQba6CkVWNq2NHj6sbTu3so33GeD8zV8b36EWJtuvqqJVmf6CX6FcV",
  "key23": "365vsQpYjANg5ERYnwbvmSjmp4aN3rejAKNzTcAr2kYtTcxiSGrJ7ZMYPU1Qv44HG6sM1VpXcpRDAHVkRBHsWFqE",
  "key24": "VKDQdr2QXiuuMcyDCZiiHsk5kqmpMtok9u3aiGjiQd33Hja5LuS9rGdRbooxN4s132HXRmRMqkcLZd6S6NKtuGv",
  "key25": "5qQzJ7rgDqpMtNxfLHxRs8hKioDoFSXnJ8gNpnxVSxKFRAJcaAgRAqET3ipkzjFoG3nnLxLd9vQHwtsdVwp1AhN4",
  "key26": "i5YVVAovT2ALK749ergd3RVpprPNT6dQSdPLLBiJY54u8oiTx5THj4LMBoEpcGEeWydVvugpCXSA9YNuvAhjTh1",
  "key27": "Z35DUpTFdB2pwskqaYiqMMRrmcd84byCpJvmE8WjgPnqK44RKUTNJ2CxYKbsYXeNCjDBQKEutHpike7qtw1cjhN",
  "key28": "4DfcAQBR92RzXg6jtCeV3xMAzB6onTseokdR6xm9uwMXeMgtafyu3xh3UpnpvpG4sRePpxtQfZCFkLkHy8kAQEMm",
  "key29": "5pMDCk5HqQUSCsnm4ueCwmG1WpDUPYgHCGkPfThvnrpSXSeo1hwD23j5tQ65sRRRHoon4o76Av6cskiCZU8FdPWB",
  "key30": "3qTHRnr9HXY43gJ3ciw4i2cGEDXxrqvFo1bP3Dtm9KsC1NrVMVnx7riuSydHJ9dLXEtdeF5RLpSLRoXTJ947dVKJ",
  "key31": "4J6uh6ccGJhcmTVNx4cq4FW9BZyidpFSEiW5zgDZBdUHnCwLX5gfXfNAm45d23tkwQibrefNPuH4HcvYSAEHkNrJ",
  "key32": "2YMo84WtoWpXn1FpwgeyXwybHGeCAadFAhdH2pg5kBgt3QLu72gSSF6MSSVvjmeo6F3gzqfSeWWDrQSVGqPctoEu"
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
