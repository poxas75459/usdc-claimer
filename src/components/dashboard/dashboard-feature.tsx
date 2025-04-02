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
    "5xrXtQBhY5rMQwbp2gUmptdLmktBUvdexactC4YPw8XEW7Kako7TrVPDZiPoxGAHmu7PcbKiPeaMBQSchGiQeq7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxjBTvJVdAyUsSiYmq7qJfLMKa3TvUtFxxdMYBwvxfT4CTP7M9cTZGeivCrtVrWyRgJxt7LDHKEJMSG5BozMA4w",
  "key1": "P8MyjMWK4CaydLwfbSByVGtyyGv8eSEbPtbHmgm9md6nUkKiU39LmSGpasirV8isNykBhs6S4EoPD8rS7zSWVYW",
  "key2": "41kf7LF4e7a9pTJMzSjcFRXaqPYeLpe2CzLqJrfZW8M9xVpvqfGctxmop5zihF9utSqvweTmPRQeDSLeo7gbsuX7",
  "key3": "2r7aGHkyZRwSu12tyBnoNvcq3pcEkaUFMpYWjkz9ycgyog3AJNmaSrro9wAjhjGvqd97kEbz1tJQSEbgXFZwdKAH",
  "key4": "2Re7H9HAHsKyHtd49ddBRS6C8msxsteHrvQDv2xUp139ooUQ7UFEQjAKz37r5U3Xn1kfCiZjsbw5F6DnU2bq4U9j",
  "key5": "4XLMd6m5ogHMB364YXLuvvyqwsiV591nZtFrZrVGptorMn3dwnd2ALontqJ94RJ72pcEFMYX4SUV4Zdx6zRTxzrv",
  "key6": "4trRb17CkDTeX8URaKbstM14L1YWdGD4GxnBHWypPZcsfxwNki2Q833inu9A6LjhtjxaH8kGrvzJVEr6hYUwysNL",
  "key7": "NbPC5ZC3USPB6VEa6pKaWXqXDqJpcw1NCBCXiL2dvUAttAghoAUDCW4eR2eYp7pwSjduePBFuCfHubLPCyS6qqF",
  "key8": "3Vdj2o9g58HoJ4R4VcnySF8mDT72F8yQEvc9wV2jGaYDNxt4cPYD9EDm1KNMjuea4j3J8RDFqTGYTf16WqG8Ueyf",
  "key9": "4tEyQoojoRyDD7vXes2AyxyHmDPJix8RdMMk2dDVmB2HYLzNJ3h6GSSHiJXwvB2wUhcBLYms4z4XV4kANbkiyWBm",
  "key10": "4biYaJCm5DAW3FfcGhW9RCi5uLNUaoP6trzYM6e3neiBd1PTiBG3o8h5uC2gLpwDyxw3fuWqzo7TvSaaowxLEncK",
  "key11": "44pPjekUtuSXagAkeFCmxQsPne1pqP18xqdyuFhTVc7zyeGwic4L2rNL2YNgYnpF3B76NuPqgY7xaCEgxApS9jUw",
  "key12": "569pPQYsApKVdrbYqMG3Gp18VQvpzJEMA1MwDAJAo1rnfY9Bfvyn6c5cdM6c3L6EMpxL2qaLfwgAapmdbdAarfgy",
  "key13": "4ngCTUhFbhVLggUrbWcVXBzxWycMocSM6ehhHyaMKk1WrfPQqr1h6uncZ6wUtes9Ga8w583czUdQyV2jVUeu2vQn",
  "key14": "4dmrD6nSa8N6fgdE36u14AFMzX6f68gF8aeEFwj2EN1mxX7B5ZsLKokZ8BfSbyWuAYsGXxKojbuJW3KMmfAvSiEm",
  "key15": "32Ti5YMDGnDwnG1rriEatN3HU2CTYDazqfmuyKk41rHZaGgzSKMq2M4Xcitj8T3fU8qyz1NRALsvN8PPeRetgrry",
  "key16": "3fqfnCC4AKAwty11z8XzYJZE9vNcw55BAhJAdcda4GjYv8raEkjtm5cYbuBKQPj54yjkaZ9Fukxt5Y7HVJfF3aPx",
  "key17": "7MfaUCNyptpAQq22u26dJkRidLAwjCsr9bML1xWJnWnGEbAwdbEHXcYZW8k4SxcccJ36YsDuyg7SjQHrV7d3JtB",
  "key18": "5T1RF6zL61XYTEpZHgdxAW8FHJcu4QXM4cA8EQ9PgADbdrMfT8m4cW4ZhGA1Emgc93eLadT72f3eMyRoDAUTJ2dK",
  "key19": "4sSuuTkPhxB3b3UVZHNjofvzSs9ov52b5ZYNjhyH8MW9aqVw9SgikGuGGhmUvxnTBXxoTAgc4DzNX7GyPdLAgdYB",
  "key20": "5p8aidwZyt87uSFXVBnRmcsZEVVEdrYqU3Nw7g6RrDDVuLKMDWo8wgiXAV2VB2YDVZTz8iZHSxgjoUaw8hWw7Jbe",
  "key21": "2kTie3JrH2q4arq6vQKr6u9WdVnNnaU6drPUDJYrwsBok95aMEcWZRSMsK2CJVBWyxugE3tWHcTybin5ZvYb1TZJ",
  "key22": "3sZZwSQHAxw2nJkkM8ZKSacJ9GxTxDtScKQMhSvHypMVcibS7T4xactX79JpSKnLVvPZfiE9c8CgLw1wS1Vc2gpr",
  "key23": "33k36rx7rNSztGZ11Vtf2gAnZJBx4tMDBJPbYsHBpCGBtnyZ9TcchdGQivi11HBW92PGWowKC23APAcxD8ngdQDx",
  "key24": "2zUGSwL8GkWdpcgaXiaPZU7jg2Wi7SS59MAWrkFB9d53V3S6guhTQGc2ccEugRWey3LpYszuVh7tRuvye4mj35JS",
  "key25": "2UVun9xatVf2jXyf4NAi1pjZwNKNydpXVr8My8YW5oyTMeQYfsmQ9NBdQzgp5jAddC3A4oqygn3qWreP9mBCLwfu",
  "key26": "5Y41kDyqUD8GpYzsZzjwyHLqGenPsvnhnqmKf4pTXNvzaHsw5qrNNCY3Z8TQzARtyZHKzQVrUo3q3dMdXEMGPxti",
  "key27": "2pdVd3mLHmJhYDKkpxfHGXcByjL2ozgX84wKHszgvyEYpMhhNqWJuayBGMxEZYFracxUxNZDm7dFCagMRJ4H1JPB",
  "key28": "5JpJgbGUDUAApdjbhkVsp8bB7iXDY5f83iCVvkC3gCfFQYV3GNhGdnKERwf7e7rayPvRsxdm9EP89xcK4pCqaHKE",
  "key29": "5UeY8XLvrPLcwwuLcvhdqFUGfCb1vrZpMPYHaB7tLKfunu93pMgV7Rn4crs3WYKWQc4XqFdYqU68TgXtDhS2g7Hw",
  "key30": "2qxbgVCKUD8mezWVuydiHPgNmE6sMQ7LCattdtUTy6y3S6HWhFrb79usujneqmEMwnpBiPkaFcBLTtyThA3CzHZV",
  "key31": "38yL7mefVQCM1Cgi2EUkdYWeAA4a2MqAF8zgWh2MxJgq9xySwshrupBoKKToa82zB3zjvywM42r4DET7NydiHY2c",
  "key32": "5k1bk32X3wZ3fhYCQ52sfzK6zeKTRMUWw5xhgTZ6Xw8ddaUUWy6jkcekoeQgjY194VR5tv3252DyYt2ZRsLzgP37",
  "key33": "3nAJ3QvV1jFiyKgDXzfxm29u4uy2vuME8SMRvkf2EH9GwkbYnFkqQ3n3Kbtcf3c5Fua5yYu6bPEzgwB2Vbk3BX78",
  "key34": "5Zh2Ww5YwsZEyMYaGU3G8jTe9xx2fjsq2zSNBJsu8DnR8u95sBJX4e2GkzRnDBHvrgdPivMVJMEQsCU8NL7aQBrL",
  "key35": "4ypp9j5JeEyyD2zo6QTbB1JGXThHCdkpcGEFDKcz7GpiexDHzVQTAAS54czJ7Abnr3ZSs1Ne2jvTwaFPEgQAbp3i",
  "key36": "2MoWunA9fTBhREbNg5KkCGiQxGvNYttADH2UGMfp2XtRJ66g44ouer2uG7722k1Q75oxBGgQ9q2vygHdshaHcXW7",
  "key37": "4ZEN8q8WjwJCZyMYMN8c2o85J91tGmdqkRwhESD1K2gQ6JSm7H63xStV3JXgNiWZoX4bHZAa3KBqvMrp5SAv5XED",
  "key38": "3zjbfChaR6YyJxi3KQvyEWHjRCAx2bFoLA8CjNbCdEcfDP8tjinjPnemqbFbXCbpWdkKS3P9jwfCoBrQgbde8NSY",
  "key39": "2Abe8cByoyhY4r5xmuJ7XHscQWi6MD9ynqq3dXwJtyfemHzEGpSGzYjbAJTk8RURNCHQKGaSvwYtmJkuMgQ57MkB",
  "key40": "3QqmVUpF1QVTQxMNWuZ1XJtdZRLZXGhGN3NhZXhxAbu3gLfP4HaoEvZSvvK1B3HtyqsfLyAyG1BLPshzuqWTV47X",
  "key41": "5uWEZV7bKjCUv7z4MZKccBcT5VJ5vpvnumoMdAb1QekAgrXCYa7rE8Qfkh97eaW3EMyBoJXLuywqgadJcesvhjDv",
  "key42": "3EB7EzovGoRVL1z84rTbWehQ5jrH1vAMsvoDng6buc6aJpKuvvYubXh1r9iM5eDaWXYvexDWp1qBvP58QUb7i3Lg",
  "key43": "5VVnQakyfBkbEDmuqixeq5jRZ3qcWjrHmtLDVexj7v1V3YRaK7cbiGsUPdkP6372FGd77AWg1E5McfXEg8Bw2Thw",
  "key44": "4JmfTWBkJQ5JyFjzR1BKhnGPqBN7uzQsWPUkZt7GtjXMSRHs1d9KWFcecH5Y2adYfVetf1Npxw9AnymhFUusCuF7"
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
