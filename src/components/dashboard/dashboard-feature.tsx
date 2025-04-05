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
    "eHqoyknTMq7iY658BT1g3UriYapumSTF88sAaXbJpZgPV8jRh9Qd7jPdPRds886wGW5gFmDCtnkN3y6V9Tv6gWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYNz747D1yhYdqamATYD1pfqbsAS238HLn9EZZg6WTTzRZLibp1ig8Z5wKj4vG1s2dRso6A21vuMb8TGPPqudYx",
  "key1": "35MiWvBTSJq3Sk2j7tatxrLShqWa3FWuXeA47iGdXUUoDTetCBPJ7iGgTmVhBcFfmZZstVxt2evPNZsShGn82uRS",
  "key2": "52pcfNexSmEe1fPDirmaKo6Zk8TKsVDuJ77j3T1o9eoD28z1t4dtxpxxgMJqxBRs5UsNFHL6ZXHhFEZRAWvAFyMY",
  "key3": "2mDd1x22Gj5jZpixGyUpQ9HFiUFfd1KbrqgtCSfFUpQmsEoKxn7T9bGVuyuGgcvLoBXwqcJNtnPrXU4HpvCV7ccX",
  "key4": "3K78Ug6M9fe3UAS6VHACTC5NsYzcKAnSvDRoHiTbJ6AweD9G8xgRRX9FQsgrChvoaKY2Zvxya9dYikL8sc1zfgtR",
  "key5": "2uwAGx9ZxGnE6LK7xystHUu5yoqQ4qjwQFmWVW53HSciE6e6BR6FJxiqf14d6qdwXkM68CrQ1LSqkt7UfTfBfNoY",
  "key6": "2QhzF9RyJLpd6XK6ZKeQijy36ZTAYV7PTvrT8Kka66enRWyyCfVmKux957PdmsUzetDtPv54aSnd7x4CopECe5wF",
  "key7": "bhdWQ3ahXUZydPwSPnfD7ocoq9X5Tfyx5iA652Jhp72istt3vSGSe8sqVzmHxjeCVtAxRBzaK44YgZZcecW3tf7",
  "key8": "3TzvzCHM9QA49yyeyKL6PSETJ9Pi1zM4KYfTJdEyzrTqPGaMXrTbwSDVAPPEYufJRTpX3nuS9pzQArUEpGEMp2PG",
  "key9": "otvRvbMCRKaekW6az2UaBdYz9Ks1wVwgXT4Vxi9RBp2y5LDPYJJHnJseXxPMvyZhrbhYhGczB6YYs5hTPusQKDZ",
  "key10": "2e3N1v2N7Kx9zP9eyXDE62ukBgTcXShLKNqjXF1p6tMtyks8XTTtHoB5zTowvAAeA3DCjspQT4GXtCXS4FngGDxs",
  "key11": "3xK275vQTtK93R6EfTf3QVUhqrT48WnkucPZfkjb6aawspXKd7296Xoh4bJKM5UTpNAKrpz6xcaFKvuRFyrtBeKY",
  "key12": "3qf44Wd2ekqZz8E6vt1Bn6KKxR9qEZNpZGZpjsRmYNHetaJQq37D9ddtqm2Qnaw2NNAqYPvKC6taC9gBhhVLdL1y",
  "key13": "4qRhmjowdc4jteNBwKntBsWE68b7PnzaAwdHnfBLu3wYaawm6E5aVo8j26weAZf36puwqGoDksX1teiaEPM5bqQF",
  "key14": "26r8DCmDMNXQ2srvGb16PCGd5gnQxoqeCPHHgXuwGVqm266k4M3ZKSmEZKWDWwVfQGQALVcFLqs3VVXJYJu5fJzZ",
  "key15": "4uBP4WkqzFTYJvq7JTUvrwCoVwQzEZCzCk6NVPYwnvQmpd1TfGVuBzCmYCG6D44MtUjPgcacfQWA6uW9A9xZRE4f",
  "key16": "5KtYF3fR1JfzB6kefbqJjCSPvngvZFRokaRdqShcshUkkAC98j7RdwqFKaqG9hZQKxwiq9MNgSWZgGsabKJuyMNc",
  "key17": "27UGpTAJLx7WYiv9may4ows1GdH1ySXJ3rGYuumDb1rMn3gZik4Ta8b4KpVxBdCq8MRpZq9bWstBjqPgVX6isSf9",
  "key18": "3G1amhnAkAvmcPfEJmq9X7QjbydgnSzACZxrQpqfWksMhQPQHJMEgqiHZkLwRUQAEV5FAgTg7JHAif8bSkUuD581",
  "key19": "nSxBPTQSkFpVA35kTqp8xNAJXTAMAUxVYBByN8aDKY5TaQetm54a7ENsiV2uaFCcFveTeqAJ6DudSF3D7MkxcFV",
  "key20": "21UUKbfPKnZdkLdMXs2ZtLTUSzSPZcTtkVo6c4En2Jsv4CoKWE17uXVRoBmeMuJ8fanB5JxK7TWgswr42Kfjo9xD",
  "key21": "3oZDLR7uBi5bZiEKodUEF95L8e8j6d7aBeAtT94DMiMxzYzS1XBHjES5diueXSE5s1Qv7LqtfEGmWuTjtqZn7EoG",
  "key22": "xmYZsMctx1edPG4HW5tmPmt4kUbUiXaKgJgfma3EEpc7pJDwVnKdmpBWh7thiwZMaVmLGFfXKbkSnshatBYKx3H",
  "key23": "2WqZHxG1xHTuEei4LLj3VCeBzEwccSFv759vN13TZb8ukhF4sWG5zBBnm64KetL4bFZ9d8tVKWX5c9PUNfaRArLX",
  "key24": "2ez7QGyorY26kcCys9hKUTn6dqqCgrpqCHWz4eszPDtJvCFW9Ark1ZyddpMSiPfWwykuLmx1j1xZzGMcrGKnT955",
  "key25": "45VGZeo53rMQ9D8izmwC1CL2fPKPKkjqjcUNgmKYnHofjM9qSupN5RtCchwdv4x2Qkhv3TybTKjiXDAtR52gULCG",
  "key26": "54MA2PdAWJ2qjrTSL2TRv1sHssELTHzbgG5GWW4wPRGyrU5kVNcBSVkjKhqRr9PSVYc1FwGmDgaD5bCWPXW5YDes",
  "key27": "3uXAkVpVujfcmyEqNpQCZYN6z1UjLWX3BB5wmhparLcejK638y5Vuoov7emqihU4zf7GBE4B4ek2a9Yjp4kyY1RK",
  "key28": "2AKkrTRmGFQp8nBMQdP5gYAvrVTCXyr3R1VqhxGGXfqWau6wy9BfMEuicPdEkZn4J7HguiKKnUdvNqLLM82vXYP2",
  "key29": "3s9BmTjPEnmBdqgPbGqLiqe3HzvbDxzcu2TaNkWDdHgHpeEiaCAKY5JzLcFiEayVi8gkGzvodDxBpCtyZD8RH4CP",
  "key30": "5jEzsx7neeSx5EBHps5EgJwWwg2HRHvEYJNEaUYrY4uUEvJ6435faddGwuG2D68hi57NZiZt4bFUW2dCizUnkooA",
  "key31": "t4Lhw8iRJytodtjx88TNXULQRzbZcpkE2aP64Huov1JYrcB6ndU5nDEMS1Yivh9UU94cL52bVafScmYRu5xJk2P",
  "key32": "4F2eJfqQ7r8Vy9oBynEzKaUXN3dN2WwkuLzLfeo1XsoLpecUmRZUAs1m2PVm8MBVpVwGd8k1NwWY2uxXXuaPKX9A",
  "key33": "58V7tpbeuYuFijsoeC44QhMBgR4TzkNLsnKnJp4NrT9mdUiM4kEybdqy8xqTE6dtdyqMy19Deo1cJWtLwojTs8fC",
  "key34": "4kq1wwkyexh4jiDZ5Lh19bsXjCxA6wYfu4CVuLrjUB5r6jqif5ivb8bTSL7ggFAXvo6UdFKhkxAKLk2LoCuWLZVP",
  "key35": "5aWmKz452gmLaJ6bxxXnBYrxbuWRbrmmSnrkPb4qHonouT9SyQBV7EjXVcm1rHJSfJYwUmTFy2cE83BPZVTm1vnC",
  "key36": "5uNEZ5sFp2G66kn4wSGTDYkkDQ7rUHhMCzMDSJGXr3gDY3i7EY8fByk1DYopKn3gRPCN7PPwUxo9yrNy51Krdcqx",
  "key37": "47LywC9XkvHHv1yUqRwc3YohEzCKRkssWFA6S8gronD6RtcGgYrJvLcaMbd7YSSdqgfrfPC61esd4T9jGuW2eajS",
  "key38": "8nFo6jFBeauYuKVSbdLaY7UMfQoVbwNYwDY7fq6GqaWYUjrhRYWLvuszp9jwrpanSL8h891xT1xa86vjfyYdJXh",
  "key39": "5Qq7cBbGvZJwEoZU9ioCVvZo4Edv5Nrc1cPpAkSoQBhQTGHsmG7N7b7qqUZcyTorRVZpVHpeJWYoSX9K8t7bVd69",
  "key40": "4yWqPS32QKaiSfLnQnjTqLLGAn2cYMtEBRNYzB1SGPqoMq9V9rKmEXRKXVU4ULMcASVVozszHUcDoKjvzx86s6F2",
  "key41": "5kjPqCnPUhjNXUEnWgSAAZAk6YAKGHFk7CgqtJxqV7ac6oK18wduZqfUwsnNUqZGHRxF4Yw1Nskdq5zsBYoku7xL",
  "key42": "28uLSv93sKVXUmx5YN2VLdNGeoh5Lo4fgik8dzukavKfxigMNVbbhng843z4HkrG2EzDKNhuCZDodQ3qj4rPjn17",
  "key43": "2acgH2AHN6YjFtGtnXk5B2R7Wdq5GwZo6dmAdkFPDjZQijryGmmJMboZRPgX92nbZ7yz5fm5tjXsEK6SdwQLExdV",
  "key44": "Ji9F9GQXjVos6ti8yaMsaiv21rY8BUqVa8ruDKRXxn18E1Mov9SBvB8Be1bTpyX9uKhNhqH2wom9MCyc1yafUgd",
  "key45": "2mxhuNeLhaRw5vKKCuhSie9NGtVFqh1N82qPAWLLgE6M39zeJxeF7266zM9ge8Q1GrDjps3BowiLmmWMdyK1Ka54",
  "key46": "eWgo8F57MtDMgCyEYSNcrHz99vxLPnuYZqL2rcJHGezgWCcwp74bbgrHXjYbNg2jwA3kj52ZxKDB4epXamjpCve",
  "key47": "2UpAWUHrdQyxroVnSjRAo95vLRMy4GUtng9fBtYuQba7ZbsCwzKwW4wTjcrAxtAQQVP78Z86vHh2SaaYswJbxRzq",
  "key48": "3bNqgF5RGcULcntekn5RJzp4nhbw2XpZ1Y58hw8EyAqKM94PVsYRKXC3PwRcpuDc8VsDNiniPVP4cLi31PRZxEDA",
  "key49": "5874r2FV3SWa5cxu88V2cAwA2uC5skx6QLQtA9wLRDyv5dkZXvnHx3LauY49UYg6Xaj4Y4MVP3o2hGHe1EcTwode"
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
