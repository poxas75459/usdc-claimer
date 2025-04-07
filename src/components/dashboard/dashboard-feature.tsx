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
    "5zFHuMSB6Mqht7pkLQM2HLwfighNj6TVsBwd5CQ6CkPzYMXsXG1DrTdcqb3sckBn1E38g2GKi2itpZERMp5QBTdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prcW4D3z1h63bxUrQpApQ8gbQrF38ZKm6NoVh135aVxoXfYvVd4QLoswpMuhBt1zSvyGbFEit3QoC5JHvmgbtDz",
  "key1": "5CG1ZRWepEDCw7GrdtRytp2HTDtHhdqy9KxFH55nfQX8fTMiCtty3aE83G89zhHi5cH5DfQPgnwzDXP3snm1n4Wm",
  "key2": "psWhMe61XBDvB7uudviFMckXqjB4j7KSWUF5eeD9WwZBinzNqEbGwthL1bt1ffs6JxjnrM9f2VXv6jpbwqjkQLW",
  "key3": "39d7zdEfVM1chdSDF5YArJWSsh11F2uJm5e9aSQmNuckSrTDSJebfUFEmnf1E4bRJNR1Dg42JRuAhs6jTUKEmKmv",
  "key4": "41GRMupmgUWdjXcdgMeUStjkiptDB1SMkRP8gyPJ49bMw6SFehWXDUcUx8BU9goFfLW4u1PPGg9x8FG7TpHV2adh",
  "key5": "3PNHxqhXQNirv5sxYNWCecousLE3gwo9CoyHGNwFbqiyVaYMRYGqaBGdFdaVNfXQfuycqNXS4x1xQkA6eqtwuU5C",
  "key6": "2KQ1GmktnXd2KpE9D9XPqnVY1iTaAxGhNH9gREMMjmsSga3dsMWtDmpQy3cLguKok1873TKT2cPQTfh8uh6jfCec",
  "key7": "4hTfS96ySpbYzQbgMMQv6vo37rPJYZD26XidrXLRPSLmDCu7kdKDFJNBmQ7ofcLLQaUrRtUyLJWaqFPrYkgFGwEk",
  "key8": "5h6fGCeSUQrF6DCqgQt5yE29NvchR3mJVen1BvLXvE2SXWd6MFSgvHwctHaYM6tntWYTDB7FP4ueEhpmNjAWUGVd",
  "key9": "4CYmhjEJ2fYBZH9Cm2gemGC7cf5TX8WZZKZ6HoyHrz2m7ifnC5EfnU3R4tSocADVq5ahQ6RGDTtXgTVbHqgJp6o9",
  "key10": "z67aN5qqoTt38vENFtPvM6eQwXjJDG4aPCGrwKjiDnqenmwDtkDQBazujiSnAcrDeq7iefX4Bj9NMtWxTyZGXCS",
  "key11": "26cnXt3YrKsjrcGyt9cckHpZLjkquRnMc9qBp4EAjgdHzDvnpLihQvbUv9PwnvM5MjuH4VY1B59PDspnRUWZjUZB",
  "key12": "3Vi2D1natKbzKooPqNuHS7vKduoyKrLan7B3xukJknpdbcPav5z7qi6KVxxDMxSQft8kDaV2mqiToeTfu5gnoC8b",
  "key13": "2FUsHKZcnZGqKkmtqiWq27P2TKJSDwxBApRAx3gkZyrzwtgokVyxi29E8U4GzGPkW1X8D4mwX6EuNVRpctATuDjn",
  "key14": "5whHYHztNbe3YtNnYKDsdQRdAAErozocmutXJUh8tCiAZBqXcTh91zdS42vzQwMgts41govkM1nP2H1pd8yMaH6W",
  "key15": "cgfbcE9jp4gEL9GbwjprMLWrU1zw81feBfB568UhzFcLPPrNLJKJEQ585pcMUszcTUewTwWuVfG57oWbNezCdEY",
  "key16": "2o85HZCbXzidn8B275oZRMCdFTrSi3ambmrmkTTd7ub4mZx4XPBQjtFySnrMpLTR8XfTvUHU6oondumfAq1JSGY3",
  "key17": "2kTJZc4y6WFZeYWTdJFTPMgSqn7pgt8tF98xKuqoHUKnBJQn1uhrLhHpV1DLvGSK7AZ3jTgRDNhDSPqvUr1oiyhg",
  "key18": "5Qc6vxjAm671z9LwAi7JQDjazSiGi37kwDBkssxMREBnZhCj9pjrA2HETxKyq8Bpga4SaFPpX4yDvDBiLvxV31HM",
  "key19": "3B3npDqaDATqWbTScyDveVGAjYMn9SCoDmjgVJY1ewHM3pz1DrUrsn2zvUgmQ4Bm8mtCH4uNLkRkxDweBw3mRJcQ",
  "key20": "5bwDiptiEV3MmyjKnK474TgxDGVY85cyqb251thr5snPQNYpVmbb26GR4RRk9vRxfNqHdkQYXX84BNkk9jgiaVBh",
  "key21": "3bpNVBUxihZQW4aW4ZqkQ1vVp6NAqvDL9YmnEhd9XZ65RaTdGDTxCaJ6PSYoE2Uo3UqCejQVwwUUeZAWTdvhkuHT",
  "key22": "55ZaBQnUBaBVPT27dtk4Y5qxTVrwcLByEutRR5CYAFrJwQxA1jV3oxuTvv86MXV6ehwnN3ey9UVAMph5xivw3Joo",
  "key23": "35rYfd8ZkoQdJwvMtZpE9UaW6ae7gv4guD5tvAVgLLLhwC4u8v9cBoAphJ7VFo7m8Bq2xJRM3VyJARrKVhq3tCmm",
  "key24": "8DHZQZQcrEWfvm9ZayYcR5qSCYgwpyxzzJtt6xGnNbAqhYuaynKXba7X9C2vhALgZ5DawcUQu3vkDsRDHWvcr56",
  "key25": "G4WQbAy6dUj97b4GaTqvoLAeYWdxeFjnkvJZ9bb2CJBaN3R6dGB2yrTZsybMcCUzMefUoFuumZpeWV7kvQYCu4g",
  "key26": "4pbTbJNt5kE49XJsQPXgxDhHrn4cpUsZHNZdjJCkcMmC3mAD5iu38obUCdyj1HUfco18s1GJjkHggjiFsUTMEFV8",
  "key27": "F47jV2etYLRike17tAfDk8MTFNV59eqtAMk16Nm7jRLnhoBwt6HdFtcxXQFtmwUDCme8Yk1DaxJr4YQEpUmTXGC",
  "key28": "8ZkQt7x9GwsMcppX9Ze1isa8HN2HPH8JwpdwyRsFTD9wTwvRsctpbG2xMAmovpvg85hEB5uNLxBX215CdqngoCe",
  "key29": "2FxacDdGaxkCQJTXgwkM4mPZTRkCj5VZobCmBmoG5WGuWkypqJnD4NWJk3F495THxYfVnzQMnhxzWTYX17nm8UbM",
  "key30": "5n7gME5Jiqna58xH9Yr8ssT156yGFHgMhs3ZoDBctKYj68zkbvVi2CwR31Y9eb7AVyMj4LkuQcYqBnLvvxbteMCe",
  "key31": "3oFJaL4syFNiWYZUQDsgVgnfEFUvjSAcqobF7MhJpg9g57WVzisFMmXTrFRaaqUPzti62h8AgNKmdoT1UwkyBMDc",
  "key32": "2kfquf8irfBXqVAf3CXJnyvdp1FNcNvRgMmkXp3dWa4iDfTUVSLRqtwwj3rRWe2XhusA7MyZWdZgoKL2nbHsCGox",
  "key33": "2AbXfexaS88PjggVPdwqRRDCRCg2A57jBxopuZCrHibkSBGJmweF44n5p85YYxm6EpaViqTJbSqJjCrUNpCDkPMV",
  "key34": "45RkVMq1YMidUMJdrcz4QEdLYi6CuRrKviAnWkMtJnL4tuGtRCoKfzjLaagunpWS4JtBqDnUoYcaptGE7VZfDGLP",
  "key35": "3AMEx4PaRKJ5izqoWs9PxTCEwLXRA4stFuzrBnQR6RaY9tMWuX2fB6Kf3bgRpY7NphqzjjtgTBbFwK9mTaCx11L",
  "key36": "5odviHSBhWnx5qRyKPrJR3NmEqmCjDcosF6B511sLWjw1XMLVQ7HGMceEAN2oE49PfQ4nSzB2dAX8LBv7xkJdFvo",
  "key37": "5RYyqPMKrk5R6FDVJwvqbmPp7JrpJxZ5JyazgTLiKttu7wJ5o41S7vWDxGwB6xb5gxhQ8ZgLQPN7xifT4vzJXwzm",
  "key38": "2GT7tBnreYYBDFLtpJagbJnRgXfSf3Ui5urPfJbfVnb3AFQ9MePNfHnqqKUNz2MQ9tsy1WpeSz7CYXLbvRvmj79V",
  "key39": "623jodHY9qBSEfdCD5jDdWC6mJKHqTcmPB9sPiEh7v8bpq2WfFURY3RsQ9eFVJTYgJs8odF2eigWxR2CtFLhK9EL",
  "key40": "2zV36Andbo51qqoJZTNiXfnZamv7QCzT8wgJA1CpdwUkfvNB2FGxk3aje2XXYuJwjhrYPKi6Suco9GD42UT1rCZK",
  "key41": "64mFP2jMcQx8XMU9L9EQZxDFdJRNdPLLYQJtNrkeqbVtQe7SB742yZKTdsiBzryZ6nzTJp8qWoWkjvWtnW9fgHzJ",
  "key42": "3MbjBdRWrs4xEE9Hc787nvJXtqeYQuBz8TweQA9sspeWrVoNGw7cTboAmEwJ5wWeAh7n8Te4HMePuxTxy54HpuHQ"
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
