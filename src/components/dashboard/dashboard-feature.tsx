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
    "3zLzD66EVM6ZGG1V5x3antpCMf4THixW39cHmrMU6SjfCnqWnnJYqCpRZwo7UD5r1PfwR6rcnZMFwtPNPQhVx2Ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493CbaKcypdWzPAZEN1xjRvBnozrNZzc3oHnYExWvyqsfdPW8gPk969YT25Gn686Nj95qcNMWmodRxgJ7MRosJ1A",
  "key1": "4j7HC1XgBWHPz9S1rBdfFWK3jjyhNKmnewvFuyMmGWC2MQQ36bgqf7c8TGADesxqEFNQuEpaBn6SAUYTUpG3xzEQ",
  "key2": "4PpunErCdXKJTcwq4bemowV97LfdXPpyNegCAS6vMTaHdu13cK61g4crccBo4h7ZZxmbPBJAw1KnAwVcentTfhM4",
  "key3": "4zU3ZGAjyqJZPqYJ28KLXsLTS1whQJKUVz4VSiSEZud5cciAYwcdbZvpcKjLchUDZWQ6cp1xZmAi4r3z6M2pJxd6",
  "key4": "3G8zJynoZuZPiuCmaba64QEK4q2CXZyYMcuLcuQ5Mx3Rof9AK2UGTupzs8RszqusRbXiN4hgNfar9KE7NDFQUPGq",
  "key5": "3UJd9MEihWxvmJj8bdtCNf155BjVpJsyn4NnVSyspMf3JEqX67DD7DCL9x4Gerd9ZCvWRztH7h2BXNaRcUkqg3WS",
  "key6": "ahJq99NNGgQC5FauEGAoZjUwRjwTDiKGvtyiJtLLKEP4PoUhZqi16tjikKfeJozmrULsJ9AkS5kvVtaxomQmGLN",
  "key7": "GbjAEA9WcTA4rzhPH4RpmhAw6L1YNqT9caELevAkQHKriPbPSuPM4yRNfAHQW9aJVWjvBFNB4tQsULj2vdawHWw",
  "key8": "2vbbMgoHTpsSh6UWMo9LaDDjnN3XNyZrVzoq352rc2LDQgY6Ln4zbH6sZFWsiDM3SJAiCEqyxcQydapbSLnH1DkD",
  "key9": "NcusL9cai2DTyhnB6Y1ozVvFn2a5pLRMk8JJL8ivT79K8cQKG3UK3652CMvkjFAuyAi3Gh7kAhnYYPLfEDuMs3g",
  "key10": "4nfo4tLLDvtcB7BXjRTp5EVC6DVAvviMUxGo9wt6TPSDfcCJ3tjmzdjrKtzCt2sLaHuNKScG1Prd3MRj9s5iyT9R",
  "key11": "BkCa9EXiS2HyhPHc1Wd8FhuinbqT9NbVpLr2RNFxefRHMLdDdFVHkRvcaUrEbQWBpCFhun7Jvqe9LNuNtzSyivB",
  "key12": "2cfn1EbpFGw9epyBrzvD8UEt53rubtuWbfa1C469mhHghVYX2CaHot4RLA7SurkU5dfptyPxxov3wiJuVKqoBKqX",
  "key13": "5GawAr7vZrAnN5EHFYKmUeYcss8BUomUBbNGoc6wHXAvk2P8LJSv1gzAXR3TXZy2mKRcJZhjLppmuZ9qhNEwvhHY",
  "key14": "9XS3MieXVJdP2orQz9TkKWu2Ji5yhEMDV8JDwAZsAjAzB9kWS5s8QP9X8twWpuf5ucsaT1KiRsASrV7ojXcb8r1",
  "key15": "3zF2D6fAgEUYDh3khrwen1hf5RAyeTaM2UQiBtMgSb3K4uXnRrPoSqjKcDWnK6y1goRtzuXeHyqGE3AjRyFRZRnr",
  "key16": "66zRwbeYuC5G84QPap6KuwaRGYhT95mUR2ZgQhWnRCFBJfuDhSBwNWssVMAVnfpW4z23yL2WP4vQarkCZtkUgJzB",
  "key17": "3TzNwKuJkejHKDeydPZPbranBLvF2gc4aUfDEuZunHUX6dfUyupY4ZczXCyqZ7PZP4r7CgZzdop8ysFCZptXv2X6",
  "key18": "4WbnTxJF9cHVNHiXjwykSQ1HChrw7sbwvzHAY5LYZPUxcRePpC9qMdbZM5BP2Nd1Ko6TPhdFk6WdenTtjHzDD7Ks",
  "key19": "2G5vMHcgJEtFieutCNd1Ux8hub7iUdwXBxG3tf3eETcacYCSoaHGSVXFJeaAdMTFZzVfwYygK3YBb44A2uPyzkR3",
  "key20": "4WwkiMMfCvYx4Q1F3ugSuiXNoND3HVeKVcL84YYnK68HiT61yMEnBR3NRkHngSwE5VCrs1S7JaUvcdAi5yK9o47",
  "key21": "29coBXHWoCRtuH7EYwNqQBZfp5QGjVNgZoCNNckPHxt6w2jYfnxRXTrqZNvavbXZUVz24HdCnRzRNMNv28PWTkdx",
  "key22": "3D6QxAqwCDAg8CFocEeV3zv47FcPTM7EgASbkueJyxPRyXTUa1aCFpzv8sRF4uUneERaPHzwGJ9syQxxSwYxFp2E",
  "key23": "5CBQ32qguYcm3U4ihiXR6byF4DtzbawtfupkdiBsuetJLz3xpj2qH6ZXY4WVJAGC9QZdX4LM4UPz9eFL35PmYSqx",
  "key24": "2u9gepWptuGJ6XkK2u859sjgxLYBwmiHwv3p7bKpu38KhdNhFvcPke3cGcwWJKUFBeazRPCGd5yWcTC7eJVXC8xA",
  "key25": "4HLHA7JVdfcXg3PcXJq7ekCNtfVMye2rHKhqB7wD4DTtQD5s7yqKLc6oPxsuhCLoTMEfobdKjVHPwNp4Mz32znZz",
  "key26": "5PhChmsorLhGq7RdMNaJLB8zWYhy6ymLWWWDa1rBZr5pobJmJyAiiGyDXNoB2J4J1kLHysWX1NcUX59AP7bQ72q2",
  "key27": "3sHjobcucyyucdRFFTDM7hueP6HFAZZ7R65LYw9zyAP3dVFbaZju9DLzDPoCKzznzEgn8ZC76ybcCP3eLiD44jAF",
  "key28": "FRgM7Bdoq86ELN6w848JJ8H2nWDRQxtC8dugaDZTgpeXMM5JUPcy1bufY1WqXfzxHBmzazQEU2V8hxQJt9ZPecu",
  "key29": "2A6xRHCDc1yEA84R9BrP8TJgoAFD5RFkKREHPhEapaEnvGGVDhaGsjVriByzNGBdH68dGo2UeuSAGFypAoYcgsAx",
  "key30": "5DgsnNSUAzCKUSm7JiRk3JayvY1VPJU8KvE46CWNtFxFbsasKgbCo6CVcndbpcGCumdQWLhwiqPcB7uuknLjZ9MG",
  "key31": "2DCeDFnhYjhnbJj5hqucEjEovLKxTxTDJoPz4t4bv9VpiUb6M9Etqp2SNRmDnpNJdv9yENXVgU448n61qZanADZi"
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
