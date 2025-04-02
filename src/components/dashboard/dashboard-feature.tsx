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
    "igSGpS8TkrqZQqLvkqE5zKMS1rdyvZBy5LxBwasyf3kFhM3R5nmDdooH8KvQTeuYrFydNA13ej6reM7MLsb8Kki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bLydeZQnK9ZDbVcz9ywaRQyaYLh1GhNPcz9UoaMVkWMVSx51giryd99Qqi19hpmDdC4XhE8NpykXMeBLCyFiZr",
  "key1": "615bG4FSakji76k7gKXkJrgcuG9SdK5NBUr4t3Y7TkvgakLXmhmuCzP66LuEzb1EfJzhTLpHh47aBwjkNeB7GT4S",
  "key2": "4xXHKq1DiYKshfPvFdrJ6DqoJnWbS3q4idevmYL5u3RSQpBkaAFdZnu6XzJFr1DdkjgPWEb2RZNT75rUKWR7Jx7",
  "key3": "5kT16KwSm2h3rwfabE5YpTTC9FcmLHu5VeQ87zzfKmTLGiVWaMWkG1cKyzZiLSuSYPqaAebt3gCpqgg2MZpxkqkC",
  "key4": "2448yAHLhi8LgPcVdmVr4eaDWdDmW1yqZuPbakHM2w7YJncQ3wR4A865XJTXMzedZMqVLmtMZDhVZTV3xmCAhgam",
  "key5": "37h4MtaSMc9poQZakC9o5cwQfrG2CHWsNMGBUUdbuRZn6qGmojRkG8w8iXsfrFFSzev1PDEu9g56v8yk7BNnocvE",
  "key6": "3BCoMiyNE2aNGeDfKU7Zx3ot9zAenzs98nW5LeWfXXAuTvYC2WGgGnyQCQWzzt45VeDBAxuFJ1PA72NC15wvKanb",
  "key7": "4h2jRHmSdEJbonGSJn3Zb9kRGRryYTTMoq582UhbBq5xjb3VqNZLxp3exqm6YhWzV2j59V1AcEDz1qHZ25VS8fbv",
  "key8": "5bv2frp225RN5ArDPpUEodKwtzxAVT3XZaVHqxBGf67dLn2NTAcTLqHH7m7YCm2UZiXKYmwCycSsPUQNGjCc9wd1",
  "key9": "2mqNNMYEZgBUevRBt3z7g1QEjn8kVYMCt5WkyCfHFpwfzvY3WWgH2iuQmPnWpaz7Uk7JjSPdPoSPMFEGx17ANk7N",
  "key10": "is68TCaPEYDZCfLL8KzgwKYPahMJzXf7gbTJDqufov57rcAEdg2M1kTrSphWkHuXi9TLQQ8uWZQYPRvjCrNSq9b",
  "key11": "P3J7FGqBY6YHm8HnJmoRqJyH4uszw9C46hGa6sBCp1vf7Px9UwScSeZuram2jpVNRiaHfnXBL45PQCfGSNLjYAC",
  "key12": "3ge2JqrjABk6JpiuMJMiDQEbsSLjs8QKB1rfwUKSZZxeJnpC6FnLT3YoDHY8Hn9PLDn4CxD7aJ3p8ryWMMqUtDgy",
  "key13": "xpWpsK86EdwLD6dMd6zHzcbwF27ceeeeMzsEqSE6j9GVuR4MB8VkJXHvuyyyeW3tNe5H52Fi8wxbXK6GDUtg15T",
  "key14": "4QAY6FUv52YraNE5b5T2PmXf29BmmhtdngQP59udzPRgDaZxtjhMWb8aB88f1PQ2JtrZsAzRnauJk54wNqifFCqk",
  "key15": "woMdWKV6dWTxv47rj2CpH33iebcrXy1ffCEvj9X3n3LqwzGi9QYNikLPsAjqcmQ5vAF7VvVL4SepHBpMsuWhWg4",
  "key16": "4Cxj25SQXzBUmTo3qUVGs2B3bajTQSi8nQbS1YChA3xUnuxvQxq497dbDEjSy6arEBeM6RFfGLs8TQtcoX3RLg3S",
  "key17": "3yAbxt745gtsBqoHtGELwuUHVQJjcfwQoWxav1ASm54F3qPCRveh9pfGwE5wgjq1JZPd7HqvnfT4QLRH7cp2p6ZJ",
  "key18": "5G7MCvaPK4gMDBamUBH5LRuZdk6gsz6TU8WoobegWM2moUTmZNM8oWKdq8f7vtSpoLRD8TDypUhAnHFFyQA4bLp2",
  "key19": "2Bbvcn6Smow26s7mtYKBX8xYbRXfJs5qt4BF5tazXdSuXn4fW7R1M1qKV1jE7X7CV1UaMwBSEi4duY89bHLjE2DS",
  "key20": "M1bXm6qDVay7uPTFVmReDZDiMpjYLwxrcYrk1GVpYDS66vHhqNoQ22kxQR5qvRABccRXF2JvfYKLAdGTViBCwau",
  "key21": "2SWAfAutk5YfR2xeaugfocCGocu7YVMvmejLi7M8aZW7vQiidXBQ3DKGXCxSaNxB4QSDeMXFQupRRjX2w8F4kBTh",
  "key22": "2cibHErzXrTpRRp2bsXf9KeQH34BKRpAPZQMwt3G2h7yiaJ1iXLuj3HfLwPAMS7yEV2pHpGzSCv3nRjVTusZN3qi",
  "key23": "4aXF14jAL2U9NrggJsLXg5Quw1tRYxcESQxmfebwxwMw7fSWPWhqqDHV767mFULkdSyurRDQRo9GdcLUUzzoc6Ex",
  "key24": "5RjCgdAVLRZTTuwCADo2E5aJbgJHeF4FsDDQ1CNSAboMfm4c5cZPGXoUT5fC4HRdRZBJZwJchxoxNV1EumXJUtHU",
  "key25": "53k3aJPpnHoUvEJ3mpjtAs68gQ7Ecw6twmutADqby8Tskt7tvKihuCyJNoURnACoGr8Xr3YMgfLNwmqgR3GrcSBY",
  "key26": "2ZL5EM1DWEsPQNASSB7pDVtMK3oScsAD8yHohUR2fTSJxJx1DZXDQkVo9zmU2h67JXq5TLvGkL2To7o2ThzM3Ek5",
  "key27": "48sYXRCthp3zif97fEgsF5ERYYGBH94riLLeRpKYmohppk9WsRN7n3s5jkNenpZQxQrQvbqmMwCFuSCo9CsDZ8Qv",
  "key28": "WtDV6uCoYnVr1DtLdZcPvUo3U583CaUkSdsp6uR7t2H1Tb1v9Jw9SYC9PaPJ6oxb11qBJLKdvNxBEZ6BfTxMXL8",
  "key29": "yHR7KqwjX6vG4YfnJMBzFDrL3Hx2f1w3DzP3MHg9WF6KQPHskyBd3fTWc1ceZeuh5FfmAogQ1WkrUyB2NUsNYvY",
  "key30": "2JaKWPAmeTbQBnahk9P5r6XS7E3ESpySYWdSKsB8uFvmkUyaBTGZQSAst68otpZ2Z62JXWG5qcoPaqMVDtvo1jnG",
  "key31": "385psQNBRQfiBojX8kPPD1QD8EytoxJuzHsMnVyBt5RmxARbvr8iDmLcucwh8fmLqRsTB7ditxShgM4K91TEo9HW",
  "key32": "39QsVCqnvUQcLgQcqcdM9BuUiHDhnXyhsehSSJAa8DF75X4xEyGg38c4i2rTrnJqyrkUh6bJQP7JUrCVxwPpF5C9",
  "key33": "5Txw96ktrVb5ib6ZQkPEsZ7mSTfw23KTdJgjtCe2E3918krBbqhkzYDseJSsWsmoFmvXv1o5U5Z7D8R41zdfAX34",
  "key34": "oea1tQ9L9TBP8NTLpjWzNV1v7dMWGtexj6V1pq3WscFtp86pkDhY5E6Vzvzc6YCbJaaKfNsprs9P3Y7GnEKGnEe",
  "key35": "3MDA6qr5osD7tpbNKTrK4tHnnmrPUjotfR2HRDhMWoh5qTSj8vQyvSV84J55XrAwUZxWWaHR8KgjseafFKG9n94J",
  "key36": "2oJdzE5Fy4Q8ZpZoJoeW2c25KByKr5vkQq1yHayrUa9S9Vdkj3zsVzq9FcCwuV4MFUzw2d78mhUwF3WRyxnzRrWy",
  "key37": "3mL3xkprJjpYJLuHuZPok1p3MEVRKgFM63MpHXznJkHUWNL4Ux1jRHornpNLFFYmw4KwqYDzbnWG7i9SSYK5vBxo",
  "key38": "4C6cxFaoFQvdQewFSPdYTN6DmUrjnYKnnYVD4PTNsnnfNcFjycTEspnBRMFpEUuVWcEsKkUrYRxbWVM3iFDyGtDw",
  "key39": "iexu5Z9M1L3XMeZz5pBgSSCtfa8e1ovgmkDynPuGZzmGzjTXgZGhRrbxRnRKhf2LsRAaWNadFLjSaLUBe1soqZw",
  "key40": "SVis3co3Pc89edRMWX7KfwH7PgaWTd9zPKYpUpuq7YY6QGPbJFi4itt5FkR9Tm85nq36YcPa1fvaueanaQzzjNs",
  "key41": "2DdWkfibauWHZFZekwi5Kx2nZAL4HjmrVdQfpuDiDNhgzBdukhxPFtf7sBRt3drF5rcht7MzBEcBpxshEGs2M9wG",
  "key42": "2pV8q6AGYvdhsaV97stBDjNVHz9ET4rbaHXgCbRLYb7f6WsfgBQxEzvXwG1AQGCLSPH6rhzz6PH4wJnNrhk9DES5",
  "key43": "47iTpW9S8ikTBwkMAoBbbvDXn1oWWsVPLD7CEcX9DDb9tDNtkmdLrMx5Lw2vsHATUyc4u9Fn37rTDZkjkoMkGWv4"
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
