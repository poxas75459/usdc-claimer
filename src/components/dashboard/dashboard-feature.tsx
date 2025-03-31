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
    "34tVecf547G6FDTDnhKPFfiou7sejkYaBexEQL8ruNVLVWbzyBzQMZM3D8hkMmZm2hrJv9XLshm3e5ang4bSdzzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZo7qDNKMWjoRt4BePBbQZJfgj45mJsVLPbNxpxygFiMTinx8PrjqFMfuv1WA2BGpsgkw7bbEqTv4D2avgrjiMf",
  "key1": "2xfAEBH5zWHa8djVr8tVwp718uerq42zpk3APVWi5a5nGkZc46srbYiYwH2VdVqNRbbiCv1JFLwwAoTshcAmsYGb",
  "key2": "5mFfjYySLV2qGiwgh9DcnpuaNzwyYBpuwmhUMfSmXr5KuRFnFKTtRv9SoFeK5GozJ1Af9Fi7Jf67s3UAnHXj2Sg4",
  "key3": "2sQPg7H3Q3oqDaRP5pndWseopvvqk96hCEoRhebermaTQk641RFS1UQd72oxRU4jaNBfL1qvji9htBSD5z6pzfBm",
  "key4": "5wL6DDFqS6xgJrzJ8iyUSgVyiY28WPqLWMLxWQh6XUCmVMxDFuRvPim16fQKpsJBzMgrsCU23D5fEdpiP2pz5xNZ",
  "key5": "LHGCQtUb18V2vBgDNxCaZEpEXKR2vyDiqWnsHevzYuZ93jVeZaz9RsyKRrQZs5WFYMF3sw2W7Fs6qBvEiiQiuUf",
  "key6": "65MJusdAKQsjo4YZ1op51wU6utyG6kHT9sTKdazZPqYbJQaQXNkfArTQH12GaqVVbHZAnBYcNmVBAaCoiXhjuqgU",
  "key7": "4E1V7icNweX25P4bCCeq5YoTM2ha3xCzAa8NKsrHDGMUrNdsqRxExpPuo7rDb2Wdy5BuuTydmwFS9RrrpVhzU78L",
  "key8": "gKALfEupdyTZ8yyZkWYinEUrpPyEQrDq4wza8ssmcjGa31AwY8LPRscFcNXfCxiCNAW5THiRjs2PriU74WuauME",
  "key9": "d3uqqjeXT6zeqCJfmYZeeMQfQmDYYshe4QuUwM4WZkj56rPg93Ymn4xxenAEwRPNu1prCSHeRc3nHEFcPQ4uk34",
  "key10": "2sXznirGZSFFBc8PwCJxsJPNWHR56HxXcyEi4cbwrpwb9a2t6ZjNBeegmmi7rfFZvemey8w7jhotE2dLMQoD85L1",
  "key11": "3tY9ztvfTkokqRxdModdwFPYvdQPToCaHvYm4JfKebDctNi3iJKg8KW6CT7okCqfPz2xNrzziZsz44kmJnUeeLHt",
  "key12": "zpNVCFaBj1aprXjvq5FBDCunNEKct637jadUQf433ge9erbQWPwQH6mCbCYcWZuvXiaWEZTBEysdeQrYw1v2WEJ",
  "key13": "CZWfHzbZSZX6HthoseL9AXyTJYmQg7cWCNxuANeazwxcShKXgoRQJWrWJPjy7CNAu5HVMTZYcwxjYgm6AbMM6mE",
  "key14": "DL17SmatyFgYaNUWAPp7wtoVtU2ZV9KgP2soyN9e72ukyKyKE93n1uSMRsD1w2AN2EiArz6yMHaLzLjVZ1LBH8y",
  "key15": "3jp5GCfkYCSu856riVaweJqWNds2HbSGjVJDfScPJEbC6YK4WscMU8s694wLwezmCamvZ73CMvmL7uSqn5WSBU67",
  "key16": "4rGwpL9oVM7qKKXpf2Zwe6wVUVuFvJJUYeVMzPazp6jrsgCGEao6CU4UwWdoqKMnHEvQ1MJ8Rmaun2ixKwKGby45",
  "key17": "da5BhrBH64GycMksoH4ryjnPkMQcPBXBVBfqRYwPBYwa9qp1HHz8ZMPbyBiDHpPGT22pWCphDLLh52cQS7BxJ3S",
  "key18": "hniCmKAjwGRXReEySvt21QwikW8B44PiMUEjNyeZc7MoaL1xnp2g2TW9WMtBPiP7mRCWwiYhZXUcmfCQpbgWbFR",
  "key19": "4ec5RY8jDkkyKgJ9jsaXzqg6cQj4TFcbzwGZcpyGbcvDM8W33T1Y5yXNK1MYgAZm74cM8fkeVFTrmQmWxWitQPNT",
  "key20": "2XaYag32uLBih1Dp4oJ3vVi6qYBoDRyrLQdNdwXHAc8XFem6JmTS4f5yaWoey3eBBPCWQDRv2KiLQSoVAu6VjUUD",
  "key21": "3ezEozdgc5xTPk2UhUUjiH3EZTDVwteiNZ2BmtbJdie434JCm1AYj2pEUs9MiXDypE2F43DsTwkGrFhM6vJzFJYK",
  "key22": "5sCnC2pGwoVTJ1uwi9QUVGddXCQMUJrfwYKznU6T8uM6z2vLQWfge5v6RLQjZrjNuMdmyf2q5WZV5ktaRh9A39Dm",
  "key23": "37aRStHHkLBHK3whJ6XXmubCdc8j9X5e8ohNwjfWdGECJu9qWoVyFXxTA8WKdvXQgvWh8xGP7u59Nhb4WVeW2zug",
  "key24": "5J2QqovjHqf3jXai4ycW7h6Drvha3j26eoP7NAd5ai4JWp7AsUQ7sAb4Foe5134HE4uvf6B2PfYxi6mazWwk3Sex",
  "key25": "5ygnCmNzKpCJe9MWXnJkPU4SXngoUg6KWHpEQGS9oXKYyrVK396GDZV29h86rmWZUty6owK5jKnqYvA34suXtiFd",
  "key26": "3wATUF3AFdq5R8HvQgxkPRqWiheFp8qTNptC8xQtM1EmNtic4ANWsg4BJGSpsKLu8EqseCMYtJw3nzD1Anmr1LTc",
  "key27": "2p5vsQTg7tHTXXtuby1JTZ3hXjEiHuChRL7kmQxoahj7SjCHW1PsU7a9tvYmtdWHuAqd7hhj9NN2ngt54ZvWzkDL",
  "key28": "3gaKVaxhGBJJtCTE53xHZ5ja6RTizc6CQPA94SEFL5RZvu6mxWVu1iMMuMeEahrxSTbjSirTyQrT5RWhBBkmvJyg",
  "key29": "36xfPYoH9zbR3N7PoKq695EDKKgzaq74mhAio3w7dwrQeHDeTRmZn97go6VGykzAGTk3SLSBxY38GJJvHffmtRjR",
  "key30": "2dL6pHCkU6DPz7Mhyv3biAf93KzAF8CqmQoM7CRZfWT42uqQDA3TXgJNQtvvAptKARhedD1uSafCg4GC4wtgkTMR",
  "key31": "QFEAU7RtfwgfPZ89GdH5p5QYgTmAYdHTTMqhQF9ECgApNtXMQ56py6PQWKfSxCjssqvSgzhfHYf6o8gFpCWksNQ"
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
