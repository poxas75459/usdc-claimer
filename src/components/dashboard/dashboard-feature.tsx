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
    "4spusy25ba9eUKyLENiUaZ461Cn4ue13X6eyY1n5iEhzcG7a8AZK89hmCFksNgQTD7rgmxNVKuv4A6cizWLJVonB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qKTx6a6dqz1zUofH6yqku8Wq7E4x6LHxaayM9PjcgpSCJGSpr4mMhBJ3vt4pXki82LDcp9re56KNwJxNdNmYbVf",
  "key1": "Jnwwj7oEZ4DNdmU2n6bZ57xHbNaRBRwQbBDwBcxePbsHNa71kUp9sSRexn1WbNEebvy975MpfKs4QdwPoNB7SoP",
  "key2": "5Vr7UY6wbPFtwW27R1anwb4SN5dpZZTC91tNQYmvrJ6dCRT3fda7XPhf9KywmJV768anx4DSLu57xhB8hkY2YdBc",
  "key3": "23NPR34cCz86MnYSRfkkXMGtwKwsWHucEeZ6KDn9YSj27ej1sa2e3sD1UjGAYnnfp9dR5zKmUz8TJhzUSaWPHh5s",
  "key4": "5aoeYh6tDmkxDresRmZpvnrwL4zjMRNFTcW2UE9GVM84Zx3oer13c1hYBs5EvJeTYVBBRu94a9YkqUGfU2nRFbCC",
  "key5": "5JcG9RfFej33xnstbEDLJvA8oGRuF6XY8Roi67SMzX3fkSsQ7DhAssHPhRAnyNdUVcrR62xs3wUjuJuMj231Xsw3",
  "key6": "3JERSjLH2CDvr4JXa41y2sqZTJ5GrZZsgrjnPtAizHYe8V1yh59MDummwf7LjAqToYEEXFmdggLuCzCGbSMRguPY",
  "key7": "62Dee9ZJ7VNf53tcyvu8okbYDQ7ZULZM3JGc4FkF8em5t5P4HeJJHmoPEgYR2o4Ly2ajCV1YkQaPZiVKny1LJwLH",
  "key8": "5nrqhjNSK8nuWVSgrTScsUBJ4ZSxV4wLTS8LAC2UJqQC2cLZ9NCrzA5czrWnFGPxtBGtP3P8Y7fBWtk6tKtReB1x",
  "key9": "3DTYN3t3Ro1giSvgZnWn8gzRafXGAyUMXc5cB4rG7FTr3tHkTVqCcBLArp74GFBCY6s36i9V2DtGV48Qca8Zguwe",
  "key10": "5Q2L6gqTnz4pYVR1gjnG76NAgYgPLRhQNjXASmsAbuKW8uM6gDtykCSyumWAMfZDNjxUiYn4omnEaWMgSP35unCf",
  "key11": "7heD33FyTC3pY8PJ9YUiF49cuThHR7miBPuXTefJ6tqX7tzNw4zEnN6fLaX3jvLtNijV1JRyGb2cHXRB8ME2NwG",
  "key12": "2xKgnW3k9PEh417xKeLdzUjUUbkQ74UFSc1V52i8Wdd1S4DQi9zqYcNohWhFgjp6ypQjsL9Sg3jcnSSqtRLQwRp4",
  "key13": "2JfYhJJyPeABvLCD1MZmmr8yp4XiWgntKUjpux9KK1pxqL3davCVqbbQgoinAmJqMZX7P6PuXazEQHWLuLAHxqBi",
  "key14": "Cjq7LuSVbKvJa4QG6gftMqpXgmWz6irj2nSrVFDSKmDFjv9JfM5kTNGsYV7Ze4HfK7iheNneKQ3M2AexmX6ZPeN",
  "key15": "2sB7GmjYsiiFAQXFxjZ56EGyMWjUDqNhVkH6vCyci9CBd1vezshattz89yShfnPPSsXdVw69rmQQFyGpmeSKyPQf",
  "key16": "5YirNL8F6ANaT9AekeXWN4ifeT8icS5gqrxWVidzVAGQ2fakwXMMYiiwCbHXcNfVsA3dC5FsSrBDhvwwMEs38NW7",
  "key17": "5CUrRfitTPNQZyHkEXzaTzcTBJKNGKxCkvLbbraGkoGh2VBZDkn1HZH5uK8TbGp7aSKJ9G6h3mWyvbcdBKWrvguR",
  "key18": "RTgvtEtDiJce7aZJAG7cXxaJPmts3MLX71uYaHgdGSNo5tz4K35EpkpSfcvtwtKCRSbTHh5tsuGue4kuJMVHRQT",
  "key19": "4CZ77N78HfuakQ8hPbVQcFjzPoxKQu19FopYevdStrH4XwRqCmD72ogFGmRG3JWFSh5awKfwBnrV52YJCNFADvXy",
  "key20": "4Ho8ELZSCKZviAboAmdiEfZnNxgA7gLpwE9vEEKt1DMHNoipczeZNmNJz46oKsfcn8y43PuyhQ6eviGExv7yn6pf",
  "key21": "532S2VKjv5nB5vDgKNaXBYYf1RAUVuwFXUbs3wu5ZXy1GWyTgXgyHKybjhFUpxj24cUzbtwQbdanAJvzoDw2CzKr",
  "key22": "s3RxFZzCePx8jQuKEejvPLYXJMhx8hRa7b9Phenn93FYrhRpA2c49wHztoWVULbvfnDbekAacYqtUrRu6K4EEg8",
  "key23": "4VLSrbVzvEquVCKewEEdH2MGoMNrtr2PKDYbjMDWR1hb4GDtke52Arwd5vGbnSasRsgzub9tufeBGzuM8CjRziio",
  "key24": "CAnFYASP1JGusQc2C6oysh7mB2jtSJuvLTErFTCwSRX8tAKfm8ENaTcp8zfbGqJgrgge5dRuB5g6zFjLMJLptY2",
  "key25": "8yKmpzcVw6W12T4PSe8yAhvp5so5ynQ37RK8NFc3fe5W4gjDCPdHWKn6G7mTkwUfERxrM1q5ckPJgxWDDB2tYVs",
  "key26": "5vVceiJzD9SV87orvZetDDyiMJhfWaRdeQ9g4F8kGY5RBZqnnMMTojFE8VntT2zCsj7WxuH1NunQbiPWa2eZSjpR",
  "key27": "4Yg7cc4SMeqoZz7DzPHvhrPH6pa4Nk3BQ4rbkrAcW6SVN2f6CDdTAJLMtN91941bwHLdE1o65pg9mE7k3UyWZU2t",
  "key28": "3SWrGisUJBLkB3N8r1QDJ2jGNw31gw2fuVtwp8hL1hb9vz8WdTBb1hQarTumuuMZefXt6ftEF5aQB9uPDGqmJY6f",
  "key29": "5n9pDztvEgTUger94xyhMoiYFhuP3UmDepmBksNvqgADvn87JW6HAJMZQP5YkBxoUc4mz7rVUeviWG8DxAkrWdZg",
  "key30": "VaEajhCWPWWkeyaWrRP3RpfsYbH6eUAKyukzagmDLES2RfFtarww7YNjSQ2aVjAgBZhcYJnDKKvTpto99ETJaXU",
  "key31": "4AVLTtVL5zSbyudRr1SwA4CgEcdXy76EPY6cwWGcRQdGavfdvK5FWEMtEq7qkgcMAGGHSbJEpjhT3oidXu4ePe1J",
  "key32": "4hnuaW1VSUeijPHN1ggu6Ab6yzdUDU1s6xdW819qs7C5EM9xmnxV3bTcAKazyg2v6dUhnrwtG5bwWV8CuopkS8qD",
  "key33": "4Jygg3AgCFPnMdv45aThJkJc34RGTfsdTuKUypwe2dVeSfsnaArKM6JFBU2eizAt4uNSGuivzpDsoSb5hwbqVxdw",
  "key34": "32FPoYNwibGCDTdq6LPgy7p3iixgHKdXDYz8xrRiw4uRK7YFoGeMmA6fue7D5MASBevrqsHaonh3UbewMqvWvfqj",
  "key35": "KCQs5tEHGMkGzDR3pvRutnpLDymb8TBtL1ZjdzR4zQV7Pe5REr6jSjo27mrC6utUgA3WX2b9VMLHcuxLo4ztPCe",
  "key36": "2PCaDMXdFF8wY67rmnWXz3jngdQpgoQ5BRtMKsHhxJBdvLaaBTE5CgAtZCVjWcSkwdJh5ZDdUEbMgppQjXWf7mPe",
  "key37": "3EnZGQScXukYNfZXRmq3Bj6kXG4tmf96fJSzLJ42k2buTomsXMqbF6WZDFaMuyBstg977tjV3HqUWfrk9ppsLhyi",
  "key38": "CuLRDTsMyA9rdKx5QsDSrtDNkJx3A9Cgo9ugqhnqGCAhmGsfZiZGRfMfbkdREJbWjwHd3RRFn3yLNCsn9mnoeG7",
  "key39": "gJHCGGuJJum4Bt9YnrAiwikWtyG8Lm4NR6aXZyLU8Sv64MANCDrfWMKGM3g8UXWD5aYPMt2ouZfVdCiVSaYm4VC",
  "key40": "WRjHrt78vt1414nAeaDGxiWxK3akB2a9sBDHUPbjJVveb4B1jR4dbjsj3SiNQE2BwqNp9Jrxp1KgYq3d5sYySiH",
  "key41": "42Hve7oQevQGXad8Xio9qs2GsP93Uepewx6rtQYVkEQ97uy8taLoAu6EGzo2jqfxgPGJUq1PbZrcUNuSgVFXejjX",
  "key42": "49jTMmjVDjRezKSAt2DaB7vGaaP8NdNbMcnbKgQCMvrWXn7wS48wWZtppkZvDGdzqNK4yLk4RqPiqKYtdgusXNT2"
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
