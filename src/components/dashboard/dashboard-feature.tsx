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
    "D7x1LpLq9fzJdu8yc2J1bFjPtAAWX2JbCybko7oQqLAfPdMsmjgqNGVNUXLUg78gsDSRdL62ABoWq727bWm1zaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7Qv1JgUDfXTg2pUzUMyss6kedpEQjs2nYx8Fe39pfagtBTbLiJvSxqxMe93tc3qzYXyTfFbQdGkan9ZfdcRgYC",
  "key1": "5UKuerGPbENSsPU96KGhrkdrHMYVu39mfcRhULcDEmhiFCUc4xqhLPfj5kWNtWqbW3hPpgEckCCnCGHpwigabLrT",
  "key2": "36t7tRtchHyyAewzKKHMEvPznw2jeEznQzbnJPYVgqSZagRfNVvNcmqJs273CWEUES7xtVX5yzrqDgGKn59wxFN2",
  "key3": "25QfjDV35wWuNgzYWfPqkkvwN7QUDyZGnuLXr8QhJFVXLqC2x6e7MhDtMwxrCEcXhPsyHauZ77mokwKqx99qWs9F",
  "key4": "3N3aG1uxAyxaYSzBbWZuuH7sCKWuMFDuaJqnKtgFenVXktc9c3eFq3JiCeJhWD92hVGeu8hq5PSLZws2WwnT4YrX",
  "key5": "4Szu7KVgdHKPZMcKSGhk6HM1GxWQYLPJDy8nKuKacLbhY4bjmTYWFtbdeXeZUWj8R1PtPwk6aGp2QhBADe2QP9jd",
  "key6": "4dcLP3ysQcLoT9nseGTpNjFXDR4S8Z7gRwMFkMddXUvhgpHP1NNehV3qHkCNMLaLAJ2nLvNnz5VxnSHM89oRNfw9",
  "key7": "4f3p3Sw1PtaznBBHgZPoW6NegSAanGqeWuxabbaYhkLobkPYzzK6mnZutMo29U7jkWWjxyWSYfWKoMP27GPs2uQg",
  "key8": "3YGkMg1BBRgLZupGQVesjQLLJn213Bg8YPhYNToCzvJ8L29yRchDJd5QkP1gdGTFRq4eD1nmuW8iPsFfUsYgGbGk",
  "key9": "R87kfPyYA4WbcqBSnpRmg9GtLmsrouryidwFuqJXKmXQmL9zLX8pYDozww34xwKGtDTt75thymeNWeDMcUbM14f",
  "key10": "4eUhNntu8PuNdPqa3827c8CLymENvYSy75qeFN11P3G2N27bWrm8erUUYCVc476RXdKgcNoLW54rS7WgphAbrGbm",
  "key11": "5iz7pGxa4kKrwMSX8NsewPNPybrQXANqr5MRA5pL2ptxobaky5kgUBtEYmnhe5Vc72whQiPShb32fqmbH4oUozrq",
  "key12": "zsbiP2fjxHpw9z8x1vF8fwvx2kp96hkSSqrxRVx8v9SmgSyNgrpfGfm1c4Q5qTZueJoAJYLXgfdqQm7oFw6TCfU",
  "key13": "5Q9q76RWj1yMtjN7pLMH6fjsSravhTehGm4Hsp1H2LpJ7nzKN7u7RfF7rTJETAdvPKmNg2VVEgwJe7KiRrRpukXQ",
  "key14": "J5xutu2qfZpJfXAL8cB4Gi66kwT2KMRZ7sKR1SxGCrK4WoLKu74F8VvEApTQV5D5HnpKJ3DEmqX3s2UJqY9FRsr",
  "key15": "s82TvfhRX8hc7wHtjYUcz8RbUBQSG1hAmYtHcXWGXV5gvbuh6qBAnY18otkoPJ4C2EAxbVkU892HragBiFhP6Nh",
  "key16": "XUFS6xaFxYr789h11yTSAFRdgkXiPyGFXCWXGE3dC6BtqF6ToDxfBw7ioQfExVcPSd2THWUyvDkFJRD9ArNcRbU",
  "key17": "4LxzTJPKnfnaUvDGVpWux1fkC6ggdkHYxAci41Xh8VpVb6z4xTj8vNL4ivvD9P8iWpUFzcUik27FHxQqLmwVERjZ",
  "key18": "3CV6HXvv1pVxLd72HgjEm8Ri92XAhmK3ho1NxQvf25GAhiDESigZpsBWM8EUqUHwDr6eiXA24nfiDQYPPLWvv7Fa",
  "key19": "4Fcn8WZYzzePM1rF1Je9GEPEZrhcUiGY12ZNpWfU5xeht4uHqQbTcT8kdqcU8brwwY1JY2jS7zz5KJMXGGkqYjBp",
  "key20": "5mhKDjyYQRJK8QKx6HBpvWmKpN9wKbsAzhibE2rqxM7KpNKYvfY8H7Ap1mwqGMDymjSAW4UDHwJmeUJ65MekpoHX",
  "key21": "3iRExDn8uaePyQcmZZNpfNDZ1wy4AwbVC4LLLtsoxMGYR7aYXLppxnuKhM9qHE1TX5LKyt6E9P7PGYWEk4PPMPz3",
  "key22": "64FUkux8f7Q41vTmvU8Ws5tT1xwu2PCwHzRFcH1F7FKf9uGGAhPmUHnj9pGp3WR3r9RrNmeu4BVCVxM8K8M2zDG5",
  "key23": "JepuBeMv68oLtXeMCZ94Hi8yRaYFqHUHUbTapPdBxUNvbw5XM9EDpfWhLbjrj3v8BXpPUwZWKmyvUGMVof6fwnP",
  "key24": "21jQPnx4PYne1EC9tq9FT72eKvwMjRLenD1ZdbMSWpnV8gxmtoHwKDWmJSnxr4Z4Ub3mzkfxDGsCPi1fFZk5eyXw",
  "key25": "4KFpZVmctVxKpVaN27gGw8HmbaMZoTsyj2w2fraRRydwLqJ3Xe75fvAyykH29mcKnnQBrMsnkvjPuvZVNbhnEEd",
  "key26": "64VWcGDnYKxbSymv1GWVnBMTrSbJzf7JZhgbQ9juNV4tdM9VPXhqHiiSTFyXrxhrc6HYZ6t7wGc5ss3MTiLMfDRX",
  "key27": "5gAf9Wc8m4D4HAdLDQwRMdxyqTEosK2kP3LXLdRxz6fbRCy7Q3js9t4gH88sH8dthX6oJAThaBYzdBNtz64BExZt",
  "key28": "2NBxkqnnPRSnmsfdr5fDWYbXb2zApZtjVR8qAc7M4YmXeHg1Q15aNkkwHGzbfNueD4KJKWahLk1ruzQZtQkioLdr",
  "key29": "5QMRRboK898UajZZnixBjxH1HTcSSdmatbyzxhdCUUhJsV1HnzDaeF62t5SiZ13nDdteUSeJ43aCxorPMgvSokgK",
  "key30": "wGkzQ2XbkWL2nAudzyidUNFDXH91nmPj7ne6G7RUx7eVytTTdk5Lg3yD6fre61UMkccB7RDJFbRyAUUztDN4Brm",
  "key31": "3Tdxq6kJ4qpzXas2s6rqiQfMCKuEhPJN6xP3RQJppauFJH98895TMVRcokpjS3mrmbUT9pHKG6Y1xuXwrv8imJnF",
  "key32": "4P6dWmsQ4fDkvh1py6i24YN4xsUn1Qir3hBZJigwQHucJTyAKJjQC9PLAMaxLorMXhsFN2NoAv5R5Cw1Yr79q3Ai",
  "key33": "weQqgYPcwgXLsZsKCdCdR54mZGjEY4byMzda1oZTNJ5n72DEs4acQcE9e4cnagLWprXxKLHHRSwMJWh7W6Qd1Cj",
  "key34": "2N64whfy84RicJ2L8S5w2LVDVHwTDhvxNncQJjrKBmZRay5d8gf3fVtDi7BoZrmKbYhXq79nMssqPy8hZUKv9d29",
  "key35": "AtCRxP1L9CkPP1n2ZvCHxHkAxh8khTjz2XBLWhUCqZXDfYLH1WjfNKQbiaz8o778Lv4o8TPG7gbt4b69EPjBaVm",
  "key36": "49VHZxoEasEjN4BxTJkQafWQ4ZvCEPTX9hWCZwHbhy1XriPEfBXVuCg9FKKHrWRTj9BBHuETvsySBPHWqrir8SH9"
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
