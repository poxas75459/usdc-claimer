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
    "31Vq9qazqdREvR3oMnNVKixx49ToShn38cmJTEBwbffAuEonydGdGkt4P3F5M5ZFCYRGknRSUohwFhGy2vDRXjiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wi8VZo6FcSrbw6cPYDEj1gvLxpM65FN1vGf6jm7VgvQsZ41FC847rS7v9MBEWvyv6fBVZMK3rxpUReYE7rLA54R",
  "key1": "JTgXsrKWiodPgqc8gk186MzvBWpDDGTZ1yZoCdXKr5JDEeQjpJYFbwM6TTroUj7anFHMiQqLToH7AizEhaLsoR7",
  "key2": "v1pRKZG9MTTcWYXJrDvYJaSYmx9nxhWun6jymWfGRmwCBDRGaL9rGQmQwUL3EUFA2vKuGBFRHmVTjLcGheLcLcL",
  "key3": "3iSg846wWCsKPeEJ8qRPnfqSxnhi27fCimGkK7TpajD8JFvL3snxy9ggoLLvEk6t9eieMCfWy5eHfSN1qzcTtTrh",
  "key4": "4ST9JnuXz1o9rikQS6gCdgXiYt6bhPG6USsRSKXMoTt43NTBVszGzEyFn7sWnkGG19uFrTBVtCCzcXCCiXjbHVfG",
  "key5": "2kXbKfsbedwJmMbuyd687LSMXv4ckmhXrzLuXcrAPnuESQVkNnZwQVzSJHR7M6rZ5ntrdQt1eNXyVuk6AKXktbo6",
  "key6": "28WxHJ43i3JC6WoxVG9apDGW7pQafFhYczVLhap7CnJywwPTEePQSvjq3ZkpYXKDbHHS8uC3FwbALL1G1B72aDby",
  "key7": "35oAu4k7B6GSMwpCi8y7SCmBMpLFrFrKY3fNhGXDhoXnm7RsF5496JTSkCsC3E26BohbXC3mhUubtrQVbexWcURn",
  "key8": "2VtAHEQGXgEem1jCjNyooQkbiiiNTxAv2aZiNbtjTSGBcJggHrpnEkYZyYouKkvcWSw7AxcoPiE6iR5FpDwcknET",
  "key9": "2ARZYcXyrLZQk8PPmytzurGw5ccJWdz87VELMx2ndL3uxQodczgxW7mG3hDhCnLB6tMdw1AKsHp5hXnTsrYYr6df",
  "key10": "4SrmEggABtvBccbn4hsa7Z7SUD7gjGuX8RZGUZ2RU3eSEd6ywkQPqeBibBRU1fW9YJnKbosaUq5pT2hUCCDaguL8",
  "key11": "3UWPLzDt7DC3tMmx9G8gKGvg9Zy1SqPdEGcMuU8Ex3s8pgG1dFT57c4kbDNjiVE5ACStdEfGHaoqsRjBjNWgebxM",
  "key12": "4xgBnAp9smRmsYb3VcpwWDaXT2pyNN2iqipg3W6qhuiw6bfEMmsK1C7MLu3S21U2UZaXaJE55MSygmafHa71vyJ4",
  "key13": "5pXjh1To6MKXQW72M7zKN3EP5wuHJhnuspvZwxDrPpqsja265FGdjVoM86wdCrw73vhWbJMwnvP6jL8ifQwmLedB",
  "key14": "2U1xHuqKjuSnzJSLANVLMSiNFAzYqmXpwoENqqvLtEfKcYm5rPJcUCoboXDSrupiE6rwS4cBP9oUcyQRNAaGm29n",
  "key15": "2dLsZFjR4XpNp5BHmjeZrpt8qUQVpYKNrX7v9pWo9GVjAUa1bnsgV17RbYZ1u3SrtMptcYS3RtBzVeyjjxJNwpgT",
  "key16": "6ei1YFLdAuUdZ3QMZXUPUiBz3pqVZfHbDQnnEq2WXbBfEuiMuqrvAaBkQBGuSHmexoEDgrNoMywyhHLtJHyEVj8",
  "key17": "2exS4SgcYXRjgaB8K1kUdmKgCRD4Vc8fPse7WuXXF4JMF2XXcFQSAHsS1wg57BiLjLP14hKq2hzsdJfvXYEUe556",
  "key18": "5Y9CaiwDiEJKV1RsQFQWMKLcREzPH3Cnm6vvUg3pccNX46DaK39iWk7dZPFBdR79BCQPpWSGq1derEc17mnj6tGc",
  "key19": "7FS8dVEr6xB6fSnSkFPTCGvuxSNdnoJ3yruLKCHMb6M1b14Nu7g6GvkshgoXucjy5aEfNfpndgn9GtXRo6VWMmG",
  "key20": "8FcThbNszt4vKmrs2ZJNK8VnpYRNQSpPLAtKEP4p9MXGqZSJJSRnaAY74ZCfdYPu2b7AmV1YUbx2kHmK4si8Pdt",
  "key21": "5SMkiqfaBKAhGFo9b3eiJqbYBfnMeWm7vjzMi3PQ8rGAHFSwDB55K2j2DDe5bCkwMVGHq9znRRvifzZK4X1BkbWK",
  "key22": "4SFta85sfWoFbeQsL8w48QGPGxXcWhptFB7z5RwpF2iXozRBopFKPMN5UmvShznTr6YEq8iteNyM71SWKJ3TjVy8",
  "key23": "Pz13XM2hVcUuVL8NPePs6Av8drhJ3K9SBSS1oSK9sDuE3mK9okLDCyyJKR1N3mEMEH4Ua9R9jMhRs676eC5uPoA",
  "key24": "3nuXhUUw2aavyQDzEu3MaQZMgLUXn61QpZk3CYAGaxM9uUVhS32kcXYiVwPHCRDF9x9y6cQ4xjjzJvHQyjDjp1Cu",
  "key25": "3ZrkXH3bUAXnegrd1iSXSKkS9beNsoxy1kH5sWg5VGxDq6HqJsi8qVz9BQiBWNT67T8Xkxse5aRaKMxD8N7NLhR1",
  "key26": "21JBn9YdNJK5WjWuRGqHqankN5EDYwEdQYYPLY1huBX3iqFGeaPunhmWyRw4CFE5VHqEa4x62amQZfCrTwBEQVMR",
  "key27": "5wFY2LbG4jpGzer6ybEAeJaEwQJA32vktWEaURZX3TUXrC2gDQDTseoiutDFZKWzhoWJPp9W5RWYLibVre6YZtWo",
  "key28": "5AKK4Hets12GWaRA8KuVcWRyXvQ5j7W4d4Hq4Jy6oCn6sLXweBGzhYgHxTYvMGu4v45nBnQC11rPG7rMdMNoDTGY",
  "key29": "5BnyuYTdBM3VJ5op8RZ3ESiiNMjpc6E64yZPDAHT7LQWxxKrFFJfSj3VwPmswFNxCth3RVFMVVmyqb1ZSq4WkMM9",
  "key30": "47TBkgkZVimsGg5d8hB67eCikZFU6jNGsRV8PNMCAFpSYzyMSDUuQpNjkzhbnkBKGpzDNXKfATF7wDoRVpfi3mYZ",
  "key31": "57SJbUqjSuVW2fmQj6h8pkr3ryUQhkTc4y9UyJf8mv1tsAnyr3JP4RpdwKY6bCJBkcwKuWv7VLU8SQ3mb21TQwd5",
  "key32": "2e6SYDbS1o35o6PkrRyRuXNZcwUnYMrVeupYwokgvf8BsofCSKjF2jrrpJ6asDjeXy87DTAi24wjiKoxq2x4mjBb",
  "key33": "3ncs8eUPAdiSkUqZMkz7RrrQqERvcVfANKK7HHi4qcWSPBaFhGCYuTpnKoUQyh9qAUJJkGLeM95XHkon4udHadhB",
  "key34": "2XZVX77FE8xzXxh6HCq23rh8ZGhganqYWq8To3vW93g8JKyM5BV25psnaAGrNDpjcEa7rWnqUcovBiYRyzVEcj1Q",
  "key35": "Lsb6spyXx6x8xJNZ13kfjptihkDP3DvHeYwKD9p12MBG55Fe1meH9aknRnAW3CqkvC8Pa3kPixydqm5aM8dPgaW",
  "key36": "67JoBVWXTGGPDufSG6VcrKSr8TjBMTczmDaksL3yPbBBJ8Mz1ipKL26GomGAEsgeSYtGhEFB6NN1G74epWhrXzZH",
  "key37": "3NsCT73ELLtkbLrBybnGpq5YM5mxADoMxrTtPNGWR58NSNBZvESEQi9SqDamyd74dfY27vpfVo4QkNRKrCKwUhnb",
  "key38": "31TYnfZahPEbVswPXtZJCeDSucdXPJSug6sTuvmZFmysEtMjQCYLJkEShZVJ1YShz1LvZvaRqo85a1DadYF1UvAR"
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
