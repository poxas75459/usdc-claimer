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
    "5r39fuEKjwF88JsBU7PhBiAdRWd8rD2q6G7vamhQUcduXFpRumKACBwjJ1XiERsn3ntQHBVXbEWKmzirALHw1Jp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KC2zn85RTVKdegL1nRQUgffxZUyrornBuhLK4Y2snfs5xLUdAbwTyCwRsBBu5Gov28uaJPAr7oKiy8Qqqsds7NX",
  "key1": "igrf45ZRs7RzFMdRvXykMaXGFyTfEvn6U7UJw7hHmScK2RAHCVzwyHQ6waBaAP69gh7nC57Jf8VY9yvMRwPM8aq",
  "key2": "2t6quXhhLpdquF6mZerbJhnWrYNcYPpbVKzQMF7uyAeEBfinRXoD1EDaHECuBB2BvB2AWPWR4GeyGZ2ffnEcyzDL",
  "key3": "5BF9DufRAUzKz1dp9rZcvHLaKN3XqZPiWk35Evd3pN12BcCL5MynFxWphyeSyVufsmSRziqu1kvQ1s9zqASZTbqp",
  "key4": "4sCUxk9s8STDKGwzZNwencPj4QtbwKYL7m8z3seF9NmZQj9mgATYEpvZm5hgKesdj6h4AiqzK9RvwwbJ3nxSTtvF",
  "key5": "5Gx1vE5oZQbc9kZo7cA5L78L9v5tFBvnom8SvhcusGTHbcWJC7PXicnWRoznCeiJTswK4DWgwb4gHTSQXoGA9XxA",
  "key6": "2MeutYpkEfog2efvnp6wHHtt1NoKsXgDJEyd3HKzJGuziwyCbWLXD1vZNdT28HfjLnK8d5p8egLLLPa95c5kjc3y",
  "key7": "5GDBwHGCmbkP4PpX32wxXvrW3v8cQ8UyFvsjGjSM9H9dDXCMWQMZmG2ct2oTAYyfADPoneCJ9a4vwoQa7xvEQWfg",
  "key8": "64vgoHFUXCDnsJfUqyMDHxkeReGxeFE29jLenR6UD2hVLa9hXETHmQSGqk123CvkJx6B1DVkqySAfC4UessKNtoe",
  "key9": "3RVgNC7VnKQL8og1MrEoosYfsbFHZr3Ny5fL6JUgHbCxGnNuitoWFszFzM4G5ap7kh8AEXwq4gA8uoqB7DUgRmro",
  "key10": "5k74VJn6CaEjMwaNUfF4E6g5k5zBVE3T4zSwja1ato8sVXQtgmEZWkakiPKJcaejpCLBsnir7MdgRWiYwriPVpGa",
  "key11": "4uRfUkktPM9118m1J1ScHXHP9KsWXmgbApPPTLqFjzbdXafkNpusuXPEGDQpXWJ29B8zmcFSSzHCBbFxMJf1WrHM",
  "key12": "3mMjHeADAL2MAPRZ63f6YsQ4ThD41LvYeff7z83jBA2SeKpEcybzAdMtGrotXGy5rujewnp44KCntkjYUxs4m3nc",
  "key13": "5ouafRmKyiDZpqpzR3sT91DebnNneSTLAXZgJQGv75YT4K8i4oNDJr8JQvmFqtDgN753AARXiRcKVbbzaPCxfYQL",
  "key14": "632mgngCHZT5Mswp7YZSnc7EgCBfYmyPMDDaxNQarjNQnFwUBqVShnhfMpsvu5Zt6CUryraWfhCqNpgCNFy3ubs7",
  "key15": "45xMr3k36GfiucxPjTPxRd44J4Qip7DT7fbUGMpB5u33NWExdPTy9h7jXAz6E4nkQ9UbhcTJmrJjBTswMEzM71Nk",
  "key16": "fkzZUV5EzjKJMEyScjSLt5NaadvhwoJ2qcSRbnFujXqzNCwMHipxCWona6op74Z87rpJy91CX1AVpQcr8zUJcey",
  "key17": "3Fj1nPkBiJXMzLT5ZEsf3oxKtN87fFaotiz1Wq4iagkcFf5oFC1piCPEDnc4MwqpojdZXEyPETvDsagWTzrhWpv9",
  "key18": "3Lb8kKbwaPWbgWJpUSDEgJLdK8wp7xRCt8EyNh4xJV5ziLaziNeCgtW2R9bBqvzyaCxov63bX3SpCmCKz3vtVsmX",
  "key19": "5oTeGyoinJRFJa7wzxbVLGQpRcoLSqAS23uhzZKmyZMmxcAX2bGyKRpKMBNGXmF2h7FPSQcQkX1KFz6orvaRw9Au",
  "key20": "4WnTccotzVy7VMLgfMyYYvRZgSRNaAFNpRszgyzPU7zFWTCEQ2LPxRz5pybEuVAMUkzPJi2viRTpyMYLkkkogX8R",
  "key21": "5WGU58ZwJgEdV87RCNj5s3v9X2AdyH6fJ67HnEUVMk1o4p2Wrj6r3oDiwbsebd1upT4NN6C5UiRCVmNP6o9ub8HK",
  "key22": "5cbd2Ha6jPPmWDdGjRAng9tP57rCECikKN4tcTioNfAH3yMcMwrCvEyWNokZKps5Ffabag9xFQDD4qfF4fnEgUDC",
  "key23": "jLMgh1dwJRPqWZzvzn3VxcWUYm9a8zeNuJqxBMNehzMnRbk8bH9RfofWnv3qN1LWiN7UhBcoK8i1H5o65o1J1Ay",
  "key24": "66kwqf7HjCi2XcZDXnitwkVjy4Fys8WQRJDXVfvVqn8kNqWS1oLnCQY2HLJ4KxL6xtsXAU435Ark5kqJ5fkCoS6E",
  "key25": "32c72UeRLkraCTDiz5M9Zhpu4QEg62scc1tCifq3vVLF24KGTnNzH5fbHaejU7CcSfTDPgzdgpwFHtb31K7NKYhE",
  "key26": "2zRsMZWDq3KmZeUU4rCGphtfbx7MT3YdTEgRsxEXfG2jnPtKYSc8zGCEBVqKvtxq52WiKvM12NdGxWggMo7AqAAw",
  "key27": "4igm5JX38fiVcEK283KoUULUN5ASsjws9BG8yfcFnLrmfWtdZnL6Ceaf9vux5B8gxs1xXPjKaTrmQyhTjLSjtbb7",
  "key28": "4seNNR8K9o3iWiS7ZEc41gCvrUZiKTkR3mR63KvTy14Yf9fFc8Z9yRVVJpM4AMkUsPqZ2hSxuxyrmGH2FN5Y47Kp",
  "key29": "5766Y48hhnDr54YsH7kavEwZm5SoTdynZXFFfgVEEeNV433dWhdXvumLyKqggm7Crr46nJcSxbRx2nfD7yVwatir",
  "key30": "R5i5YKnRve2yMtn1Pa7S5YBQY1ceBqk8b9pjs4uxdBEXRJzg7jUT4w2yWt2eQgwyD3mB6HojBd3yDMC1ycPoYig",
  "key31": "5x5S1XWH6cVtyvBArHjBGbTLcnVwU714h6DYvipAEzhoiq25Sq9Bm7hHTFVRLQJgWpQCSPShxTDm8EyW2Q82yuQ6",
  "key32": "5mE7RNk9sgbuTsDy2e8WmJENQ6UKPc1Y6cHnmxsXX4cAANRSZYyyzUM9H9MMRZh3bWdxP8wSLsdsJa5YVtSUBE1d",
  "key33": "3na8DCLfAhbmvaDd7wzLYuq4gsaXT44uys1PQLBH2vDZSqAd2g6MHMvmP4KotsYycLhvWPQY8FJBv6gZV5iYMK6Q",
  "key34": "4XoPeYjvTUaGMknWhJfNvgDtwuC2bpbf7wejFDU24Si54hbabPoxxHTFhhjknSt1i7waWvywx1RPKzSXTnT42i93",
  "key35": "sihjwZvaDSmcpCh56cXsaFyNvd8oYJdoKeky8jYWEZtzTiBmn9fU1q1KdoujypDpqA9xhu6toWvePNEzsLYvtEa",
  "key36": "5v31K7jCzYpbDqndLD7E2UuvpEU5BrHkCZ7h1n2K6YYUhDr7Xx9HQ4oqu5yDWXNQQPekjgU4joVqodHowwrsxNit",
  "key37": "5oucZvp83kS65j6aU7RkBqKZ94L8EXtBfboDBvGt1uC57VPqH9Me3TCY2Sz3zHNcvoEh1KfFXYWTjHGQQLPXDQMc",
  "key38": "4ApJzU7cjRwx5YX5mPoGsNKruMrVdMUP7hX6JCvctLPK4vGsw4MtfnrNMVBeAzCkHY2dQwyDR2LTwub9jTFY438h",
  "key39": "bJDtpXLYVggur5nB35sgMnhiD1gRmjhGYYv81kKJ1oGXrNTcb6DQmzonQRGb69WSjdGKtfFvKS5kHAqyLJnZSwE"
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
