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
    "32K5kb81X9Fq5U6Qnym7A1qwH7au49DddVehzUi7zTY7AVSn673ZemL44EnDkVqxvDfpcXfh3SYdR5v45iSZChew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1X9GXagcDUkBboUPwpBCb7Poox6PSrDj7txpQV1t3mYKoUnFBbKiTAqRdSXVzrwKJizCuzygPfBfUYgAooL3Lb",
  "key1": "5yVQuVaANaz2PRV9Z3w7cDrXXrjDJJM6MQGTE6xvCqVSqeaHK5wJrzQ4Q8z8iq7NS3ngLdZyMimUse9Boj6hURCM",
  "key2": "1BZp7SvtXd4i2R5qw4BPqzzzme3LcSm1yHiEkZBu4JWYv8A285HUz3CEQS5tyoqy3my4sZAfMKumG9qZQeq4e7R",
  "key3": "5YJ2ZJV4FdFY727zHfY5UCoFwjLn9kGHK1ZcUpen4qhnMLzWAbqWzVj45NYBjPf8aktVduUBggBrfTyrBz3vKtdb",
  "key4": "5nyM74iB6AMLPNb6fGH76XJ5VEHKCmikzzCUPSyVTgCKSG3my9nSi5p9WiCqetzzHe8ZNu1tSk6CbroGCLdtMVyr",
  "key5": "23RcUbrBsfLvpxWrZoE89acPsvADhVHAxMpiovui3yoBHbbhaDoZJzZAirLdCPFYyigxWdnkGxJcHY5hpH6FQyYa",
  "key6": "4HwhJsPZnNiuZZxw1RChWv4zk1FMKbXgf5393n4Az1zzEt5xhxMobMr6XXH1paaxZHthScTTUxN7dtf9MFdSMc5R",
  "key7": "4QKHV7oMgWeMz7pMgX4gXSobs1NE96kCz8EdSK7vWNPB9JqfvXZJxHtHvs2oW5vfRL1K3jBHh5y2SspjacGPrR7p",
  "key8": "5t4GTCPVpqcnERqybcWjjQbZCwoRp91Nr15gh4x9iVYSmsgCyhgV81dnq7CETAZ3jJxZWsEk282dLhwnTxCSesPy",
  "key9": "Jag7tUyahcwTcCYHpfPJVkg5JMvPuNbFqmGNzcheHu83XLdKzT1A3Xhx9aZkSTKJUvHLpdbvTq5bQpgzLMcTDRc",
  "key10": "Jeb95oMdidwmS8a9DLYaXtGYeYzfn2CeLRyM43d3hU93vCgwNeKd6eLzR6BYvjg8HcZDrVG23HzfYnUVHK8ES3B",
  "key11": "4wdiX9v9Z8PmNXRTE6Qbn4smciDMtUJkcFoqSszhQ9b67FjjmNe6nZAQjRBmJt6KjsnPcUaWKHSAs7qzTZNtB3Yp",
  "key12": "nugLbVD9c4v7aPuV4DHBmgDE9Sgw3AFkeroBLU7D69P8rbxZL1SnxmpWHDUbzbRpzxU7P7jbpe94FGqQKkxxue5",
  "key13": "3ycUNuSzkupHwEi5ufY6CWKjoK5zAVHk5DaQzP7x5ETYkjSLtKRMYj8d25cmegvvrqYmB44W72U2UrQbkKUmabGf",
  "key14": "3rhaxKQnuVAwtJPM1iMJ7sVKUv6XgTsfnVABWgd8K9hjLhxL84N1WTMdjBRVw5RLTdR2YhBLFZGnJvyLHuscQ57P",
  "key15": "2hTVMe2YauJSSzCzUgTbbxmhrtr3xJe93JtByG2WbUVADxreGSHAWd49K84z8LedVNjGRoEbm8Q5sTn95KDpZ9vY",
  "key16": "2AgU9CQv32ajge3fCpynchqJEDyLXJYqnnKVwgm9rFjUWvTuGofdkxBX44M7iFrqDVaC8hq9pDmX7uHk3vgu9Tqw",
  "key17": "58SugbPkJdyD5WsJUFSVjbsZ1CTV1PNqZMRj9PzwgJeqvb5qbyuf922Mz3EZqs3tFgEm3txxGPDh5TDBQv38GKr5",
  "key18": "5G4pBd98HazZshbqpyZuSwCUVCL5v8eNN4S3MqaDcdiwCFSdmd3PYaxC7cxTfu9jGiSEL2Da2jSCNSnZE83YgfUN",
  "key19": "qTsXjupaRRHyFBz5VXVcgKupCtYokv6ZvPyENJ9CW3VNqNGeAPkRR927vGwzLvFiuSRabsQfFd6VuBR1GmX3L62",
  "key20": "2BUxtVkUh61arTz64kdH2fS9AuSVgk3sTtDNJr5pDQMxbkcY4vWwB1aZhTbtKeV3ax5sxrZAoRxmTp61CPoJJZ97",
  "key21": "3gTJ4pMHzWzMUUa1iwQsnrqewcKymcwW6oChnSpMFecxXETDW5AoDyi3H1gBXx3xQZgVCGKz6damiXFEBgEVsAew",
  "key22": "5roiS5nsvPiPcYnnNhiiXmGqSYaW9f4VVtZ5kSiHaeG1MWK3ckqRuJfpVJFVttzj9Fa6CJTrErWSp3ttHdLEep4k",
  "key23": "stDeNcwZwEeDpBd8UrTqL3btvhqoD8DVeUXmqYpRdviePHhXAZQSJxwJEMHxs8vB4r5PfKn6o9QK7aKm9yAJfPQ",
  "key24": "4NHRaVWsEQmC4ChCAVLP6FQWzdcWtyVHgvCp1pNYZsTV81NoqjhnjddWctALizTNeiaiXRegJYTd47qE6r9Jkbiz",
  "key25": "3jr4tUV5QdjYQgZgy6pZ9noFsbmdvXmZVXNFcXq8rjXCkyE1erpSVK4faVTnYB53gkVHG3SpTDUDMFRwWaHkLRvX",
  "key26": "3NJin8zBXLdePWmQcxYGNzeybDkxJWMSiZsJ7pXhet2ZPA13iskhXThpv6tr28q2QJoediPvwtq2ZyA8fgGmynyf",
  "key27": "4J6kfRVfEUBXnhcYda5vdzKcEb7J3aGXHvE9NwcDBw7WbvXq3fsCTzzzVh5g4TN3nsZLiyspkY9VVi6qYakctnne",
  "key28": "5Vs5UMKvxUdsj2mBMdxFxTyoYBxMqaBvpBAhuHNxJSBNqrtQXi26akoh5KiW2PbW2E6n3BKzC9QEuqQqDUGz5hvd",
  "key29": "2WiDQJGUuyc2tQcUQXobgtmxdQFWTmQByXGyiKo3aj6Nt5451jhxDPyGbXrFgPw8aGAB9eH5X87428WJvUJtzGFG",
  "key30": "2h1P4DmghBc8Ssoe5DZ5RSUerP4DPd9aueg8eM9M8p6ywxFXMBAoyg3D9df2c3iekmniJ3pvmbwLVyTm9MWSvKe5",
  "key31": "4zyLBWSu9FAYWXyycRnbLmUt7juqnYznS4qqVjLT3XJS7NBe8F3GoNsSRKQPU1YmTQTwRQPJFv9CcPPfAcF5oqjZ",
  "key32": "s4CkcGsHfH4xEyALo5BGbNcBaNeGuB7YuxEzyaPiqapbizR58yvye4W9merseT9fMVYaVCtsJnpmDnhRVkWZYzm",
  "key33": "2XanYpjheZUXa8mDbu2MGkMJaXPU8rRe3VJ7xLdmyXS7koATXrqQo445tW5ZUwvQpRevVketqGMiwLtpeq7An6uz",
  "key34": "2VMNU1jMuSksnnxNePrjWqpyYBZK4JWoSDnDCsz1ygpPB8JqGrL66nz9n2GW7mXW8U6uT6bswBTeXYCBENs46a9f",
  "key35": "4L6Euko9zYCpep9MM7bbLGaDmwXE59QHezNtSLMhfF9KycjbfpQzAkZii7gA6SCvwKiJL3v9zRxiRHNSF7ycyDKz",
  "key36": "2ryvoSqtJiYz6knDkPR9PR1r1ti9F2S5E4AkDrWertWWhnHeKnSgDgpTg9R4FVwqJUBpvKCNrJuH43hbSE4Jytwq",
  "key37": "5AXKLopTAcLWNiM5uq2A6ozUhVrjYKpeo9hehcDpd3KGf6A5tmyHbmkhBZWrNTho7y4YhAAB4g2PH9ATqsViWd5G",
  "key38": "516ejzJvePAhsWf3Ud2phemCBT54YM7J85NJiTeLCJdyqsAiFQgAcHAoVBtambLJfRMs3NfaCBaWhVVG8SHK4gST",
  "key39": "2yRvDWkxZGwHBJ577afpsMb1JzzgZaoGsiTYY3jyqDqxv7DGpjbzAeCvDoSLndDmKMuapgR4DFX7zP3SSRcaNthP",
  "key40": "2aiPzVb9pb8NG6s15ymkT8EMU3qoM63HC2WVXaU1b8s7vYs3LgBrLR5R2JVpswp6cQ1G1vpydAmaj8HKHg8ugcmm",
  "key41": "3Zi1w35xPeNANhgQumivmD3LcVtxnHv6fERfpQNoeYaWnPrZTmiYesQihvSz4aXMwVhbMgzpHbvb24VQcEM91QH5",
  "key42": "4Q7BJ81CL26TeeKnuqbmrTUojyk3MU22ckDbToidewAxGMpW8ZH2AGom4tVznzbGYB1xvaaA673bQALLNEMoJHue",
  "key43": "48wNss3R7hHezQzL8uYFGEBJJABGsPT6BnXB3iTWkW7ZZo26Qn1vkt6iKXgK452xhP1HpMgcZKWXxw896MByHtyn",
  "key44": "2whaDvh4FH3A5KzPDVbDV5DBkSwMbV5MLmkXPPTXLg7bNe2o28uDNG57XPfMgNwYn8w13FcJ7WEh1YF6Y31hpBTz",
  "key45": "S3GFqigyUEQ1q3gnRNNNqJmcLxtuDuXYZBvukqNx4Dc8n3qBTkbfufG7p8cra5H9anXtpLWLnj1XRuJ9TTpuBBR"
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
