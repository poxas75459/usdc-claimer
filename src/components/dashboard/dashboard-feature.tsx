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
    "2UGN7zuS8LyUuD8mVYpF5FLrcSzJzfGcskrjZqchPs6ipeuqJt1rHRpKcfjJEszx1dams1KfXXdmcsDZTuxrwo72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvXm4HxfHdKpuhZYU1Juo68cvXSbm5mqK6e3WVFTx5RNpchqPzgMRyuUa7GrFsKu9BiBjLhEvrdDyXSYdLwATJZ",
  "key1": "3JXdyRX8xS1bZLmJuZuYH4YBKk7y7fbKsrg85v9p7bud17YZX3jUQsSkTnpDMRDALECRCbTouxXKdadEmcw1kHwx",
  "key2": "2sqedxaUpLoHivz81VPdsLd87e96cdAtrmAiCYLv1o6kSfYy7rXoTQvum6bXS1Ak8ugsiGbqNkHKrMHjkUBvXWeP",
  "key3": "a4tfZvVsWnFmt8rpYoU9eyCAXpPwHzPYsG5FyV9ccgKNChFwCfDM3azh8PUuFPnD1W6bnj9gEMaHyiWK5kzm9N8",
  "key4": "4cBLygn2oKMfXFyvt43GRiaXMeSPXmH5ZXxEE3RggZwHgBGp8pN9498ZaTsE7zw8Wa3Db8HajXsgfjkxzS6UXFhg",
  "key5": "5Q6fqJwW78vL5RAXRReKbeN44yngtWZ8zR1H62EuBLfjrkGdjpjwibjpbK8KNyribwFSvu18ckJqtFp3y6foM1to",
  "key6": "4ytBxvCWxXB4XU6bGNUa5h34NBAN2hYyr8eAYeEvNW51QuCdw1cX1yonif2d9E82vZVdh8o7W1C7WqxMq2fegKjD",
  "key7": "5XMDRPP7U2NExKp558ELh8We3BQDoKF8jVnvM4qyX9pXV5QaCzcxUxrtg7J1WZuW5VWqFW2WCYwpjJfpmhXm8ogo",
  "key8": "2NTB9B5e7NCmXNm2w4PZgDqvz4Q16pdka2UTURVtHPfojurCXmcEdZXZDYhEvgRHGwqFmpVhdkt9jsmm232RMhi1",
  "key9": "4tusLCPqugSD5Grtkixmr4G1oWPPYHnPgxcMsrstMBJLuvM2p9GT6mBHAhjsPZHzemKM3L2yYZjovZZvUDjPiFJV",
  "key10": "2U24b4ctyBeDp84Luy5Rt4H9AwWvj7qKATnzB2ACVBpVY2DHRHg97KejPS4LmMmzUomrtMfELR8uc5wn5d7dKECN",
  "key11": "45zRzUEPSfGzMrennebin9mKxTrJDaahTfyWEfPuQuExeCptVGvFDFX1W4ACgpgVzPfd31y97wCDoZHu4Vx4usEY",
  "key12": "5EYZYfM7qzYNbb72nE2hmGzmaVd3nC3ZGSRS686shNc5g9ZoQxWM6JvTTzgKyuivukdjmv9nAXfpFR4d9eb3Vhjq",
  "key13": "3nZAZpGHyVhxUtphDD5YfQWkq3Uq8nGh8MSuakHwzaDkjtgYU39mG5FqYebqoTYMxa7nvxBuUn2sDPu9c62btF2q",
  "key14": "3j8d4qpraDsSMgfaUAHrifgA3YRKfc83kPoS8h6NRSgXAW4Mn1mfagKstqRTG9E1W9Rbiv8bYpq23x37NHgyQwXm",
  "key15": "5QNdVvqoekt9EpfGbFE8gf2mFPorxUdis7Zsm35468N3ZJdp1sjCzWMYFXmai2gAEJBM5CZwap1AW4L7LoRgrcm",
  "key16": "PztzMMMYvyBCB6ewtTJNm7HD5i83NCrpZNNGiqqHYyha96iddFXyxZ4xrVPS1uykHm55TvsEmuPY3ptcdEhypPi",
  "key17": "5ywQeLwSKAnq1Xw2YjHa5ZYX1JTv8u3fS7fY1Ld6tbbJQdX96xi8DmcV3bCrpMa3JKGqea2EhU2R63BGCnHweLa9",
  "key18": "3Ce5HRQBp5LBnB1nm7fLhFDL94WABnMqpwG3eJv7hAMhB6D8eK4rzB8H8gEjvTPodcGNrBE3otXK9P4qc7HNVLLj",
  "key19": "SqGVEbRCwmemsXcJnHvabMiMwRnrwfGaC3qa8YS9gSbwyGNWnpaYSBzqDSjV9dtPdrbFmPrKomt7BWcaFieSrn6",
  "key20": "5zRo2NxYHU4otjSRAnHr9n9AywZf3M73fGqoHHCKzpcvD2d4iRH9qMPBQc7x6rmtmfZM9Qje7pMG2dhRxavuvJsN",
  "key21": "5WkZXPuBUd6iUoDErzX3UF9YHdSgqYLShLWMLbjHfPE46b3bU3vGiZ8MfC1ECRxssohyHx9xT85Dk3BMApYakbNN",
  "key22": "3w9TipaN4Bg8YasAb5nuV4DkTWbMJs481jMS4UUQ8FopkvaxYr4VbqjYs1GoyszJbZEu9ALFETzJpCr9TmDDJuFQ",
  "key23": "2CyCfLTuPLXcK9AGcj6sS4tdnJZjMBx79C4B38G2Naxsq3S9pvKoM5KL6xEWJnVN3RKVpEGixiJATQZn6vL5G4u8",
  "key24": "bKSTycPmJXnCivqbXPNzcRTJQyzqVbpWfGhjLqmEprzQ55NvNNfWy4YRCpZwR8r5gonsuH6RtW81CjomeRApkRs",
  "key25": "4d8vMFBTda5toThWkZUo8qXRzkudqkw64qfcqFVzRA2s1pputYvLbAGfDCmqQQw9ph4pi559qoJtnv3GH5f4Gy8h",
  "key26": "3nZLauuG1v8XdSxnSU5t4i5gK13AFFZWA6iPeeetNuYX8ir3ezSvdrXrPHz5eLiVD4dWofU6E1WxsxhuHmKqutHo",
  "key27": "3h31iY3k8eDV49YSZ4d353FSmk93ZqhsXGqhHQj1JTRxZiPMLGc8LTq5mNkAzjMJcqAFShEp1BTKjUhjVUunxaqQ",
  "key28": "gD9b62bCU2HXShqYaNBr6moj7FFAtXpL7KUSbgV3YqW5qqYaNh9BDrodAzGWhG7RH3CqFGDp5JiBqcBZFZ6HHRG",
  "key29": "3pHMbE9JAQzT9Mz4S7KnqpagnHioYL258oMfHZMVsMApvKKFLiF9CD6pETSk9a6wdFrs4TwpanDzehb2AEwPKT8N",
  "key30": "qSJpQGqDjwjR9MP43Sy5nWhyjBvt2rDa2uWEZ11xexAVa2G9GeRbH7sjSNxeQGFJoJBDHhUGKUNJgFgy81c8M4a",
  "key31": "2fJdFYMhUtcQetaH4tc2JoRiVqme4BzWThYWZvFXzVQp6DCvs5sbqHdDSTd3mVqbLvzanAMHfegLkqBowrKZknTc",
  "key32": "3F72DFosiLG48f9VxpsqYXYQs6F1npxwKdHd72Cz963bg1YufWduDtaQbxbVGZjbdFC6WTHCHx4prGJcTdgy5HzE",
  "key33": "5W4KtRNJjydUfDKURpf1qs3iLi1FNBotW6tzNipeDib48p4N3FQqQx2B7BXz9ETcqitaGdkY6Kh3fGwiVx2ZPdvF",
  "key34": "3E1NwFXRezyLJK6he76GAJeSxaZU9EBJkh6i5M3NV9x7DsQUpV6pML4jmhysby8bZFyWp1dEN79K1keFtuxyRHyE",
  "key35": "TAWy2pkmx6XRfNq5qskEU88wirr9xJiFiUByUj7dWzgLp3MwKwJfEJG1YA4xLHLLumuSKqUU1jdvhCstdmB8VZV",
  "key36": "hwbq6gPMeBdTTQvANpf6rUywK9jfvPtVDmsaBRVvQzrMkYce1LG9ijtm8ydxMo1GUQ5Swyd25tA9Fg3VKPY4X4f",
  "key37": "5m7wukWBJGrX5wyBsaaqanbfaYU1sSWyTSUwBVPRwx21UaVq4tSVMJcWudVHuZgGJdrj45eshydSV9WSJdceZMCr",
  "key38": "615sLwFUJuFTgf77npvXcF9XsoJ7HUwLbo1YTMy4QM2bRVceoYMw9yYGixNFqZeD8t8ZhmCCzAbWdLkZTTJ9XTCp",
  "key39": "29jqJZFhavtSvFrhynYunf6U5HYSV549J79CeBSS696RdzWRa76Eb26d7B5cSiNai1eE1f78XWMbpXSenecZi6oZ"
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
