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
    "RnjzgS1GAey66MgFNdHhqW1xHNVfs1qAiLcpM5nKXQ5ZBG8JUme7qGZp698FmrTgM5yLKPVNBGFN32piMaCg8tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCS6V2zS58irxRd2xiRJQVRuKsGD6sTggiSwsSLNHS8mfNKPse3TaoSNsy9s5UH3VfydWi4qRJ7HpH63YCGzE8C",
  "key1": "4aek4KY8kRgkgdskofJncvSD7Jy4kVNDfRedbcRTudZV12nHbPxGpJVFT1pqnZGoJA7KbovEDM1jAAVJkFbE1Ndc",
  "key2": "2iap5WudNTBbfdXGUoqWPEhwcZT3ePqxmRspJ4W5UspHdi4bxFAtiacnmqNvcu7tJXRDvA29Rn3PhgXyzgvhb1aS",
  "key3": "3oNejEJzmNDxCzKah47v5uubRFdgAQH4MsVdRkPxHeCHp7iVS9Pj4o6peHphtthjeXcYj6AY9QSKWDyQeE37BTqu",
  "key4": "2N8aWvZp4bCe6hUxnQe4rhAP3wtvhCFRjUoR6MbZhBmt4GT8d4r6z4kQWBww3bZwWmNBKfGorJnaTp8gh1c8kWgZ",
  "key5": "25bajbGepz6rx2jqokgMP4FVti6ub9J2jqpKAVDEGJhaPgajKZosDMAu8Grwny7UMRKxNKrM3TEPaMA8ZtjGN757",
  "key6": "P2te4MMqqpL25YH1FZokRNVzj9qPGpvSQM9aBvFAuoMr1YQsW5ba8e5djv2y5ybRzRzhbeBLmdcCKMjir8xL65j",
  "key7": "3kC1yM8J3WLYQxqZZpHkFaNrhcHXG7rGVqR67p8cRQBZGJjFwBAafCb28rTiQxN6AzPhChUESBsRUf6XvaKSL6BR",
  "key8": "4DrbUNhfr4bFGpKE8FnBAjfvvEEU2Szp9ukyjNG5tiFTdCwmkhaM1eMCwP1XsySGf9a5LjAHYNzZUW8UuhidRAQU",
  "key9": "5P2n9QPnYH4srb17WypMtPe84gcGapoDULfcwYEcPFbvTMPu6D8vadmArpn8kqmz1d7y6hHnahSLuGL6q7DpHv2D",
  "key10": "3Bw9Xy31b7YRTRLNvLw6iLq6XFuv5Yj4eK8uupPtHEkUAJdCzRCmUqgDLr6i9UcyE9UC8pCE68ardDvvbEHfsYLV",
  "key11": "buSPS6jEsm2FemZQrmFGpPuCGUT37PHPSs4TJkLs9nffKi3LLnrX5BHa8p1FaseVnCJgF3WSvsbQfpi17Uq2Yku",
  "key12": "2rjrbXayXfGZb3HGLwJEgwKz3YJfnjpZJhvnz1BqrPh7GB281cp39UGABgcyXXSnY5jGDSfrAoipdPsukGrjisRs",
  "key13": "2i9i26HtHnVz41ECoFwQoHQUpRe6SBUXxaUw3Bay3zFHnhLAiEZBugjMWxXPkiB44ecNPkQL9mSMs9ocmRSxRuri",
  "key14": "2Htis9zCDnbF6DTD58vTJQLwscztjFQrZtncJdMdMUxLJ3cMP2aCBAEKh326aMFNX5zitNaR2R3Lk4J7emDk2FyH",
  "key15": "M4WFANTsmth1rBXpD5Gsi2ViAR9pZQ3jDQi3iBZSZcxeFxDjUgZvHXnXkZHB4uVVMDb8W64hzR1x4fhRDrZLB6m",
  "key16": "4uzGgPw7n2qz8rUBkzVCF6qXKVQkujUYCUe5mru9fHc1f1MzqqrMVyV3qTfofNfqMqFurgodQ1qQkSEQj6Lw6L6b",
  "key17": "2hajkiJQcuVP69bFZoAXRWvyuzoLmhTLsMS8qJ4qAebN5eYEMQeg4m1ZGXtVdK6FfrGzuEjnzZKuwaCo4aibV6hU",
  "key18": "2KDUF7A1JbgGsAE4osbLaP3AwKdDc11oJqfDzNPg6eDimZsrX1E26Y1uxriPzGK6fYPtVVryppXMHoYy53oE89u4",
  "key19": "5CSrsub6bo1Qr3WpyrUz3cWFEektDiUub6wZXH6wpgLtqaiWrZ1ALDJ4nXpN2jLoJCLV3WYkjYHuwPXitiPRvbyz",
  "key20": "3dswhQiYKXuGJJ64ZB8aaoKBGkCzjSGHV6bVTXj5vc7Ku2qy9JMhWFvYyzQykE7A2acvdKGXDvyPzJqxiUc1cGG2",
  "key21": "5cXLETkMdYFJFg992r2EXEx78HEGsWhnpejszzRKw8ixAQVKshEPyewxiLr2t9vmwrFkbdKNsRJwdy5Un2b2KtoK",
  "key22": "38y3HgBRStmi9czrUrKev86XDzTLh4ECeTqysGi28rG9Vef6TVHSf3t3jzBmwmYjeB13eKmXz8bNw95QA71JDnEg",
  "key23": "31bQga86FiX8m86XYUGijZZponQ4Nanej9rTP6BSQukzAnxvaNAxFGhQcJaEGjgSUP4o5ehAECoRqmk5Tfd2CE9w",
  "key24": "41Tjjgq9tsdMZYBwiZqQA18DeyihLbmMC1JRNULWYRENUv4ADFexwqCBAc1DEhmqMryrgywwo4to3tBeQo2iQk2H",
  "key25": "abKZGV5TthDDeKVnBUPUgXRBPb8VWKwCcCwxC2w7Rt5eSEMVQd9iXpxuWBSCgkGTBvADk1XBvh628WuKsb8FDbx",
  "key26": "4TZGVoLLhScMnchBEzkZtE5FoxQ5Ncdd3kW3usQBE48ps7NKsMAdDtiCFWkaStkQCJVwyEVtnbx9Fg3XNbgbXfB8",
  "key27": "2y9RUQjvfZQ8Zv19Xf1dbazEKx4f3Mx7JnfjjQ9hfkvXKV6UcsWabneAbEUDedYaZr57xEK4ZYX82vrCDs8scF6n",
  "key28": "27xMAui2vbqzdQMfVFsHNJQxbKMeVZBKT7btKcCh77GT39JrGXVJdDLXxX4RBGVEzrfurmcT6YEZMXw4gQrYHfAK",
  "key29": "4qz4f7QRR8dysu5YF8S7SzV2cffxwd5CyDFcvQMJMBdsj3AF9LzmwY5JXTCUYoQzUNH2dXewvKz3xuWoNoUPBDLt",
  "key30": "5vrgAB4vN8R2bMnBKrp3LT7whf7ReQZi8yqti1LiTS13mc5q5M2DF8T2ziV1a3hCb5GuYegNPhH3NL2CHud6rCuk",
  "key31": "26L8j3c9zadobCZdaeaVGUeTiYuKFvjf2hngKARhGRYbBrgeQMmyCfUsewFAsdzrUUeR4KyHRsbTx3ZwERYMKuAU"
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
