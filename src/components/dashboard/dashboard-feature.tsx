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
    "5RCG8dooNCYeHYSUm8BbFjqR2Y94GkAtX2T3jgep2Dp981vskta1TKz4AhMs5VEwFweGEGjVbgoFbcsQURa2CDMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uc5aSWySygH2xppQXiZVYsYUG1o9dssnVitopHqzCkfv54MAmjf5scWRUZXfdxyhtoKqz5L4rfY5BsARpVkgpnf",
  "key1": "4TyKXkHdUeSSsryt51C43Q5Vr3TXjdxt8MDadrJowZC6NHMX8Z87QJFJYbRzLnWz4xV3vtkbDNb3FUnnevRVX5G2",
  "key2": "45Qu1smqdqTqThWXdEUHwY9TxHwhN3vnjVLUpvMokFGriwWUuKNyparbvWZ4snb5GjtafZEUk85HrK2pEeGNpwpp",
  "key3": "47Y4C6ycVAnjCi6mndcY4AZkMD6rQaU5K7s4zGn4nCZgk9Txh7CeVDDRUM7n33i3rGpwvC5UjTxwLWN8RdbmJzux",
  "key4": "44sVhJwcBe3J9dYtiM7vq44qMee3LGRHkDj2CbHQjdkThNK6rEBBr9AMQjH94K6mr5iCvqD8pNX7gRCGzwACke8k",
  "key5": "2DQiXqMEYB2yQupsVZnqQB1W5rzTtTf7JgW4XrcLmLRGHa84DwYPUcG95S6tNjDXQ9ja2mtguuzdLjFUTowUuzWt",
  "key6": "25H5Pi5oVP4dHvW8VtwrYxqa2UV55VJ1TMCb5fJQXcMKspV63HBcV3gtSmdd657ZvRCQV7CPrnJeMo6kjn2gRj7T",
  "key7": "4bHa4zkYfWgVR9hbnCLM6sP5BEcMJmEo94EJVCPQH7DxpUZu8CbnPUP3NhxwVvDxoVvQohTNN19Y2UWNafVSSkLB",
  "key8": "3NabmjBNaP8hxm1zqSXyNtypcePaveZFSUveTQkXSqSsN53MTeWwGHgXS6BYWGcxcihqqbrnGgMUK18gptpy7iP1",
  "key9": "3AkPpv2cLaEtyYDbiSD8u9LSGn2VuuvvKSH2HmGiN9iVE83E8PrRUTZmZ4fHeS5pBLV3RsHsvus3gy4rLwHdCLGb",
  "key10": "x6VuBSzRNYsXKbRmZ95rQM7KH2KDdLKdrib4jjkzPN54wqy1QARjeQHw45kQhGfiJDemdQaR6aGuLcFZtZDvfpv",
  "key11": "4Qh4GxadjwhaH4LfzFTe8GhEizVj7jqdoTfNXwq6u64guwdKs1yHw1DtprGLQFdSkH4jmBFtEXdzewv9chMr9CXd",
  "key12": "4yWZ7nJ5YZ89G5vvJ8hEp3ibvVNsPr6ugWmvxZPHkPG8fgAFR2j2JbkkXVYVuH9cMbmQUu7F6d9vwVygzFUeZBFo",
  "key13": "ef5B4MLbRqkZzqGbBwxKYDRpoVxrVXpZWCSUgf26m7tdSqrmTdrxQkAi24Am7iizPv8LGYKbtrfP27BCz6q6tJP",
  "key14": "3WA7DLENp25yLVst3KLHfoC7noPHsE3FZiMkByKY5TvS5ZR45EicTAiVurPy5rMrM5aFTFk8QA21jxpwxb3n2HFZ",
  "key15": "3qzE4x1a7gk7XSEjdS6QBf67RcN5Pq4WmqcRC3evzVyPpUguRqoBGBMEUe4a4bXQwKW6Vb66XLBYMNvkcsNbCbTp",
  "key16": "2PhbB1mcWC1mhrdu2zS8NRkhhD7Rfg9sruvaFZvof6nR1Wb5N7eSMsyXw9XoNP8FDtoYUK3P5kjNU1qzDKyhZ6in",
  "key17": "4v9csCH9CGJbEmMFxqSiGqhv7DpSRMRmNWVazeWriL9p2HiQLhBBs9S7zFvSoqqttNNFKRi5Duswk5zyknDuiAeJ",
  "key18": "5by7N6cNvXbiSZxCLjbTqUYtWHwuhAQcEWpUFRQAE2qak8hbRgAYjo7Cs656LujrtVWGyWgguqgYdYvhx842VZTX",
  "key19": "27TBWB2wsncTELhWveYoE2hp8qP9pV3j1e7oCJnaWQRtAVsMN8qQGftQ8MsmzqHvEh1j8sWE6Rjn3PZGMSNcxdNa",
  "key20": "3TYm66txjurmB2nMtgrE8MGDHiLH6YAP7citwbRAn77yHdWQu2gj3ycAmrNBFAaAee8dbina5ThG6nV95F1TvSHq",
  "key21": "4SUt7cTKXjopoCvoGUHrrVLua3sES2qrDfs4pHcJRV3Y4HBXfL85aBkD6oMreek5CTvn9gG3DLXYCBc18aRs7TxG",
  "key22": "2MZTFY2YzxemcFy2Hju3u28smVbzUVMnqnTwAnRpVUuuUf7V1wZipdA2Z2sn5CUhYbFWjC76jWURYNXMrqCzJhTQ",
  "key23": "23zPHCndk2fV9dqgoudbVbmWAng13TjFFauYaT8hTZzUyENKevYnL9aZQzei6VPZzJCj6E3Av3bVyEYQja5V1CMJ",
  "key24": "aVGv6sfAn1pHoGy47YB2DktxytSHpo51ypqkcqaypQCuSSdzoday9dJLYt82rziV9L1F71u9DkpiJtVrvJFTe9Z",
  "key25": "3doW9bYwXNfzm8KNCyTotdSGDUYmMbR3KqvCJK2XqeoiC8PJi5kKpUgALs4QpW7WArg2nWcsQSQZw4Ld2n6UN3DL",
  "key26": "5VJXvtwMmgTY3gteKStjn737TA83kmdLCaPfZVJwADenEToA5ACjmoHeRyEFQTH1vRxn7XsdQUy9ifXvdWxVLQ3V",
  "key27": "5NaDnn3DFtLwE1CgsFqRDSTZk97JJNxMtqDBFMbRsAiv9VJTMruppfeD6zdPe2ukyi8wy8DW9cLAd1TsJnabnKpP",
  "key28": "44SA4JmQZZNmaKh1zJde26y3X2B12MZ8EyHsNGdB1jqfoUijdgX6v6fHNHy1xSLTtkJy7xiGTSt954iE5LNr2zpg",
  "key29": "5W3MbdRdiDMPeSaersNS1KPy2UyAqvSdSoFbLGyaXWsyyEoBj5WaoBmNphnHd9uuFahuzyufcA8RMyPBLLHFSRkK",
  "key30": "511eYbvUMr1tjwtkLTvecA5cKTEKzJwYmidXNbGBPccTUnD4CPXJNvFxRMG5zXsDTZ7dioyw7xRFK6q1YD5iKsYE",
  "key31": "5T4gHFhauTjpuNBCH15z7x7xNLS57kDfV8YgU3mpPWMc1NN4XyAnaANr8NeLdWbMcryJ4BU1irgtKws41mF7Ctef",
  "key32": "4xgoqBJpyHbCfWyYYcLYwFgbVZk64Yh9YhzkwoXScLda5HRiJ9HuWm6Uowxo6aLUr46whKvsdiBZN9Nt1jARgHyc",
  "key33": "tttfy4PpACRcvGNKP3wvzfs484EWGZ5Ckir96ajnttpxaE5ykQduDgr3Zbf9e574giPwioZemn8JwR3zZk6mBnh",
  "key34": "inuLB9Dxed4RQEQDddQmo4M6dLJu97DAC8t3myAPHwbMbpvxcezF83HV8gY7jyusMZpGr6umCvNbtNHNTg5tstu",
  "key35": "3tuMcsuTKMCXU6XSnaH1m2Y9cas78EG83MWt6pevbovZRpcCzKtB9egzZME6zNuoV2vEtKLnesCKYtQ6udsK23cg",
  "key36": "Ew9uZBqJcYUguoaiUdiqStPHjsSoNkfFDvKPBsxCSiy6PFTACMiPiZ4qMZQFDykije2HcE8FCo7qC8wdBaAXYrB",
  "key37": "5YbUQ4AWg1MmZhGMagdSsW9FBewRJbaPGGLkXQc2UfsvU2XhQ26rN4rxMWjt2GLabc47YaGj5WSCEKuWF2VWVcA5",
  "key38": "5H64ktPsAEJvEUDRQ4yCwroxpxAhhpLJuNHkGefNdKLGTbNjwopTGiYaEnoRFbFdYHmhaz7rgQNpUL5Qjdw7oqa4"
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
