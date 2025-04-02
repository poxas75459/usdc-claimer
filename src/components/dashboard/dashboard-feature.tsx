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
    "4KoKbEaJaiAiE9nCpK2QoKTjzGmjX3aJbXipyvmdjw7LqPWwbtt6QCf7Way2xCjAJ6UR7VYcH57QbfXYG48hL6Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDp4e3Vid2vfjQ6gg6pqX4r4qDBKxmNoHjAd3ffDrie5cfB3rRJP4vSNWo23k7BARwACTnMSbZYdYhxyojBSYMs",
  "key1": "1JaYY9EadZXJvXHUHcp5yrv2bnUC1tauwgFoee5CcxntXTDNVw2MB9uKuPzhYQHZVJUjNqnPvhapSqvcmhvSCRc",
  "key2": "PhKryo6UNTE5ZupsaBrAbhBnSmBH7e2Ncs2MW2gikrFFPxvSEEDyvxkhk8PRDyeqMBcJJXKhsjhnMPBNnx5sY5w",
  "key3": "2YytTYawsc5ydErG61nvfG46tgpzNSLCwAGyvswudEWkbdq2c3WRcfu3FcwupYmMNofehKbpdNQZnkpHy4YzRvXC",
  "key4": "2pAtPbu2xfRNfkmmD2ojuzPCvUdXmbuoiC3jw6n2iyFy8qLFtqtuDthDq5cJM41fkLskBRuLQ6Z6EK6SiztzACJM",
  "key5": "4hwwStLnYnADjZVSHUqNEASZZMR6EreqJJfpKH9h8iNHQx5LBC3F4oXLqFKrG1UkMmePanz4NXFt27moXhSPjVrj",
  "key6": "4XvohZ4gvhJ5v134JGVsYW18PXnfyf5Dhe8nWFCyJE5UfWCxDtEGUVGbKCXiFLUKBN4X4CnZn1rHSypKSvZRR2Sv",
  "key7": "29zRgfTGXgXmmQw6EufwoHykpHSUtP9EzTwVpToG3RhMYrNh6TXnBx9LrUPNLivV972Bm8GnsLxnjoMfZBwLYqxe",
  "key8": "J9XZcmCfVhf94GqSAWKJNgzHHCM1m12BoaNPE6crm5KyZK9RNdkdmRtihfXcB4LGxxytZMGMVPivPBuTWkuapHY",
  "key9": "5pvqV1e1GpLLUV6wZYikVcYZa4Mbyvpp1AfHmBhYqaYkJip1UWVgS3Qzb1amrfYMP68W4HG719QVTmkkxR2EGsAx",
  "key10": "4DCwq7NDsu2izZhXWjLbkrLPPEXij3Y7ayVKB9FLZKPusSrSEwUuvqnyftQRYtgztmN6nn19ea2Yv2FLsecvd6RN",
  "key11": "34L9QLXtjacLLcjvK6gjAkxxgtnkrqqDmxooHLdmV7UJNhMLWbvXtgDwSUSdQsiGisdvRX8Nte2GnvPZvoaYoTqZ",
  "key12": "1Vn9eKadKE3oJ7qV7Ti5DqFLdpxykxtUxNc7amEKBqptXAtt49uGqGeA2g7XJrBRJLeFxPTTztrXNK6GVED2AVN",
  "key13": "3C4L9P4LgkHL13iWzWigkQ3pViDKd1Z6pRhK3j8X34N7QMwbHN1pCbz3AxPgqtGLqh2b8Kg4Xf27NjfdFTF4Mqm8",
  "key14": "4EZMMdskQ8z32vHP83dgmp7kbaYQLatLdKAc4vaJcZ23MfV2yXqvsBpoqsHDzpXRSckm4gzTDU7epdwbUg74xcjw",
  "key15": "36PiKVZRKyZbmX27GNXR8GJhbRiwjhY9XqGS9vDtRtR3TXkuREwWG9tUw2VUW7mQbLQkVsfwDNy16og8sHdy5z3Z",
  "key16": "37vdSV24LUmMeN2pDT95DGtWA8wZrNjD76r3nczh111d6aHw6xQU335Aa8YaeCjBT9nMM3qt6fa1pGNC12EgwZUR",
  "key17": "3J5NHLKarXkbgCNCbZP8ucsAx3p1C2hzWGLo2L6qrcMwc9nVagzs3LBbBFdsoHosXkTph4m1XoSeVmuzgJckubXD",
  "key18": "4TWneZ4KEjvpEt7Zn63qECtNUVkWZwgNnXPoJVWuLCAULcEBvW9kqTmWRnS3JBS7ccRFG5mggwPyCJcn9sRzMcg2",
  "key19": "3v9f9eJbZekTGHw26X331YvnZ5RMgai1maF66rHGoV7FNqvZPYUpPH5fu41xq63DR4XrDrwrxQsY2tn8JWQnVN37",
  "key20": "3FSfUEVTDak63cVMbCevNgPzycHPZmxHxFRyyQg4GCJA6fwp6Bee1pqcqcZHEUwCJfQeinsPc2ymoG4HUL2227VC",
  "key21": "2FQsGy9r9jR7RYbud1HAzNcf8dNdsczAfM49Y58FJc2uWTYe4cAY5kVRRkch1M2aecq9EKumc4bspWGzHKdW16sp",
  "key22": "2DdcyYx2ezKWADyNhLimFHEZf9NrJkaAkVraiMgqzBBL3uQcCGLGCoYxpkqfhgqkU6pn2AgRAXy6JucNm2YFXMkc",
  "key23": "3ddTpTuaCzWkrwMpXqv9y2ED47Jx16nd2CN82w5Rf6eBb1ivy47EcYswzFLY5yCmfZueQ7uWkvxbGfStEh9VGdpf",
  "key24": "5fsbFaVZaazkUHsRNrmryayzGMeCipp3vmP1RQnCeSPSQxJxe4aW38uupkkZXJgNShebUTzpGxErm7WZ91UJzVnR",
  "key25": "2AhTZtZypbVMR8QoZpAkPVQKce9JAbUMNxMpJCRaPCgC733FcPiTysYCVeCdJjvETAPWDDb39TuSGh8H3njjafzh",
  "key26": "54zw5fAncQb4xDbrZfNDs4ZbeRSjDuYWW3hVaMCwviYyeuiMau9ba8QHqhZNWV5BMLXqve8QcixqQjGE4ptQw969",
  "key27": "3pAmPSrc3yvTean8ZaiFhzTXuWTw8MSwY6kyiXH8LPoMzWK4c5tgAkoJvdJcqSUBKfdyXVDCugpEKryvEQMwL6xv",
  "key28": "67kBW655EKZHq3py9MesG8JvfEASZsNbrnrKCRHZeWrxsbkopQB1oPJRDUqRYAfmbnfCzqQ4utvbSc4xGLaVWxQo",
  "key29": "3Z48wD9SueeTjrgWvEyEq3Mwr5Qss6GQ4NGNpjTL7uk3DsvHeH6qwcDaEGMjmodqYRSBVwsWyEJfHqiDM4Wkqqcy",
  "key30": "4jAVUmSESpSSm3sCir6M7bJ1hg735Ucdmv1iAaJ9PqExhCMfzYrJMn21Cy6QFXySBDHKLgNCstb8Nvbbnm899Qy2",
  "key31": "5dd4TK7Rms8SwR9GZsoMSzUJXKuNc7jqKjB4c2ZxaS1utkAC33oBoY7pj4uShf8BvG8ZUaFmW6kbt1Co3gb1ZuMQ",
  "key32": "35hVVXyejd7HwVAriAnRqeBULkEzd1P7TfXTA4MoNUqQCUTApQKEb3TgYHh8L8vriVk3rRFQboohdUhmhHTmzttH",
  "key33": "4KV6DYFmgUXe1274rqyHVVE5NsTktpVA9Fv3PpNXToiYnnzJgaV33GndcFoUVwZ3s3iJhycFR1bmpn5Q7dAGdDP6",
  "key34": "3uPkkzP5wRuzcTERCrigWFXtwc89UkVzLeg3GGhonhpp79XwfSKhsJ9QMBo3S3iEqkEsXXFopNiT9xQwvfEBzFCT",
  "key35": "FieoLjmiyKf6szNYjXeJ5vqdkiEkJ2gz4tPnLM58TsPUHXzKfALcpX9J5RAWBRgMHctZPViUngzgzJb8jJm4p8S",
  "key36": "3QsbyTZkDG9dqTUhzFQ1e4SUQJs4U3txYVpG1pMY82tzFtHjbn1A3UZphW5iDHVReypUrkcz1M4WYKX4PYTf2Vt3",
  "key37": "4g5TrXacuyqDQnmFnKNxadwCwh2hYQxcNWzjFMSg7EagUbetEkkceWtEGKcWGbkWcYdJbTL5zo7TPP7TyWpHb6nT",
  "key38": "36NdLaZsj6BxQwfZWdVFqGhPzhhkcCaUnCsMfnkRyo9hGkWLYFuNtvTETYjUNvL3o8bPFwTofKvhHyJC2kK243wR",
  "key39": "2QocCe47ouU8upHuTBEsHmFkS7vfM9LMLUKrspmLe34MPr5p3RExdVCdNaiY5wx3teAD1HoosvnvwvhTSEU45t4t",
  "key40": "318D6YPKEngC8Nn6j8vJf4ivcPeXXQxL8JnG8wLPXdMiCkPD3LFTDG8PwpUa6tRKX4rHJhEAGeDZG5Se8Z6Ursma",
  "key41": "4EVoeGkYijn1zF5LEHkHbdohyg4pJdAbqMokt8dxSjZb3aWFGkDebdgJ8B3KxoGb48FvQfkUnvH6jyHgQSyzwdjk",
  "key42": "2WaQG5iDjQ1arRApRCwgmU9DrAxsqi9Htd7XHfXUDrMsTeVNF6jaHdpte5qXae9EKEHcvEhh25YqKN4DhxeTMoYR",
  "key43": "4npyLY9e7NNbgogPWHMxUhFhKqExeYLd994KVriyp9vuoccsU1SPm7TQBok6gbJyJzexNA3Kx6piCYaXMYEXrAPr",
  "key44": "41JnqWkY7nEHtS6tGCgXL87FnJcdhjaNoTQDGX5VWKXBphiGBqg1TK8TqFNMt5RSNTCecdy5cjHvNe9gp1dyyYSS"
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
