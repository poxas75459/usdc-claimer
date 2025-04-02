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
    "66HwnXhsDpDoxE1XTug9p2bV6nR48ex8BSytcc8ZYuT451pEEx9sdofnnFXhs9iQMMe2FiQkzbw1tDMPTeH6v5Tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MDGCH93UoJFBikctCviA7FAMWN9pLdX7GpFYE7auiheTXDviciuMsRMZFEUdjvyqRcfq5zLJhcEuAckwsqQMZCf",
  "key1": "5CBUpaLzZ7fuGMtyTgMqnjVBNX9N7nxsrc7KEjmy39gFaPeLo2LFTanvEGsWWYykqGzh3dnzV6jNZ9miUtpaNdMN",
  "key2": "4YcpyCUkr9RiESgPCMzfQTfUB867TvphNHCMGhAqCVZdcWxKt6n58MVxjn3QZVzCMdSWLHwcVvAGMiPuWHZDt1YK",
  "key3": "22qAtQACzStp1dRHibqWCNkmSR2fDs4VsCcjwVhibwByn7rLh93D27y8wu81GMRPoL3XStjL43sWt2YqVEKwqnsZ",
  "key4": "xHyr85ukWL7U3W11mqzUVPYPHLzvZpdgeMmcM4Sev8KffdcXvzrsZ3mkcKzEeAhHT8XjsiRVcKsD2NJ81CoeQpA",
  "key5": "3UMTCp1mSEi4jmNN1PnvYL9VUxFAE1qyRq4SJJHnLXse4Q7JbH1RDM8mkjm3yPPvDyiXB9JYfn7a8Jg93Vo7JHsv",
  "key6": "GDxKaYpNm65jm4nCXMzbJuoQwGDi6627XuQPT9jxQrJyTemvL1zRUhh5zobV66UDNAxhyFQD6BLELGTZbJTz3zQ",
  "key7": "U11ZecWBp8exQVGiQRdwN8dJHfX9WULDTgUu3nyfDisYcUqpoyb3fjTM1fEHxLkhptG236VPVu33QHzYYFV5boA",
  "key8": "2JsuFWBFQpyNXdvW3s4xYTCRQeNn9Lbxr7LApcDFj5tWA3CwuNXBtrcnG8qHBXaQU6e62Pmff2F9nduRnwM4tkbR",
  "key9": "bMHrATDSoyQEZfG1U1m64JnQCV4xj63CAWaem6TM3aUd8J65CV12WELjMCZxvEAdHTJkqHzoRvrDbJzRYx5oZMi",
  "key10": "4WU15my1DiHuU8NLC3A1yFs6v1422divCbmB7r1MGr44Bi41C2qSg6CnYD3fC1h1mJLbbQ5WohHpWJxwqSZDdd9T",
  "key11": "iU7qJRTBq8iMkfFRtsJt3FtGbhNCeT5A3g8B8sXgRLmxtuKLKomSeR1ifa6QDnKffQRVAYoxpmpqTYg2prkBZWs",
  "key12": "2aFRQYqmd5pGjBeY7JB97JL5GkBwvaiJaNGTpwLJGSLVo98W736wxtM6kQZWXMF8AzCeWKDjs4mdFGKBPviUizAk",
  "key13": "3RuCrSQXDt26kyR9cKyuWpev4KMne4XRFCNJs9Ce79i5YxnY6rixw9KYnsAGKNpkJPnVtWnmHz6ppvJuhuRNB13i",
  "key14": "433KjBcwWjnENEc3wgK9rw8oYRc35dVG4QxzPCn8TjDAzNASBjYb8nmrdfwzeKxYkHywzVZXdVP3894PvcQAj9Cm",
  "key15": "hXGzR82ToCDenqpi5gvKDE6WgCBizd2LQQ8s5624Bwx8o8DPZBfvbXKH3EHj6KuWhNACjuW6KpEKy2SB9FqPUDv",
  "key16": "3DktQo7DkQCnDXX3GYnHLn3yvea2KngeBjd1jSrxUtsZcQLzUuaZDg4uFWotXzd6qeTZARZbdBnF1U12qjaW3d4G",
  "key17": "2jRVUaPBby7MgbtWAMmJhTV6CZkxeBtJtUyd9qLM7meMkyatm7YArPkQoAA9AL9AHyxo2hkAf8cSEbqBEhWKjjve",
  "key18": "2yGUao5KHuucdx1q3vgM3Xuvyi1feHkSos1xEqMWRy8CsfacfFC3n1PwMVVxH6iroZUowjMpVHSEXPmRBKUNdkCf",
  "key19": "s5wF68MUfWMZEe1SpyNyWHsxbcsY1tDR2jnpMoGq9YjKKBsdEwZVixaW62fKTTKDoshL3grWv19uKfVvYnRN8w8",
  "key20": "2u7RGx6jbm4C2DSTY8i8uNa7zNajUWcqgDYSg2p2XgYMayzXs4y4RJgYZVLmn7GEDqkdmxCWrSa8HVk4SyQEQdXs",
  "key21": "2us9oTV1kkATwf8AieVGa9JXXLa6Ybq1iGyxZykQhi5D23S2EsRRTVjzPnmnZ7qBziknYab8Qx8joQSxKMKj1iCN",
  "key22": "2VU23z1PEVFHZXxWmwgt44iWBHcq1W7PzMugTaqqhzCYRXP9F4NcE9NZo12UNnmWUbkYiJkV8PQQha3SxhGSTyMo",
  "key23": "4m728Js9E3iMgZRH65szSvXRfVZ2Xarw5h2xvzksogcNND6TafWQHLkDgj7T52mtLu31ZVHfN4EAVK77KCr8ypS5",
  "key24": "3eaRanEuYcTAGMRna2BmbD7QnXFWe1envDYQVU5Zmvb8s3FbDogBpPDiD1ZKVHypdiCAQbg7nQC5TfDArAiX8oB6",
  "key25": "4EqzybRxLJaxkVL9z4ECzn9L1VppWfRhTigYJhhyNFqBB5VpP5d4pmwNttuLoCKiE9oh2uLxtv1z6nNXKE9PjWKA",
  "key26": "PnECqMqYt9CLLosEBHr64dFidZ4Tu7pBSyzBnybCzoHwNgGfrXpxq55VcJPZaso4Q2ZoXPu5ZDsmeN1ejeWFhZ8",
  "key27": "2zPzh4SYDQ23ELnJUqFgtq9447FMWrzmS5tVktfGhDYksvKXzHUYoQNCELXrBcv2fFurcgsXzaNmo9PVCmVCBZwz",
  "key28": "2SdsFT31YbKGkdo2eJTrU7JjadMmXtFoxgxVqAtPS1xiPk1B2Xq7CuRKUgkkGVr3vVnrd7NdKQKszdxhb85bVZHH",
  "key29": "2qEXZKBa1nwdNn2ZvdRNhg1KwcR5c9xVF2TQV9QvX5Xunz3Lg8EFUjyUk6gnz9GBc2uk5bQHehah2bsaNDQET72d",
  "key30": "4CAhVSqEgJmnr3MQRveKTc58DHzwTB7J6fGwQMt1bMtwWgMmHfpc9yuZkzuaKBQwHMLh7JA7YXXQHrhVjezJqXGK",
  "key31": "HCh2efZaVAcav8jJZFono3tVNK5WEmZgYUhEp8oXe2ag2mcG32HEuwi7DA384YA7mxkKGmZHGAH8YdZopygCJvF",
  "key32": "37doSR6Nbnh5cLaC657DQ3vqEQiwd2z74gMgCpRfJznVxdY1jhqeD6dfcB6U9y5P5BEqmhg9Msh6cRimqut3RQRF"
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
