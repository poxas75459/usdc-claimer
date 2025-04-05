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
    "3PAhpMcA8YJkYuF2yLTd7dFQK246PApJ5tf7X9QpsdjDFwpWVqRuLHdU5k2VoZaxmdj1PYqAL8rPvvzCyD2YUq4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJUn98A8Mby3HqQFPr4DMVHPmemAnsx6o7Fb2mna26CVMoTBMpzpDjoUJDGmL688NddShDmZVgquJpuJbVrHV3D",
  "key1": "UiYAM6LCUQiw7Ffw2Vwzj4PCVewn1mRrvqfyTyaPzcMgEXxSBPNVSxH8B7FAb5Et2G4cFacX1aKmE9bpUX3o6qG",
  "key2": "577jf5ixrnUk5BtujByZWMKvvyVXJLYjChknbDZ4fxYtiTPcQ1BXZBSTzKpaCrsP6g6GbLDuAarMaKtvFRhQb9kp",
  "key3": "5sL5BR1e9hFvCioY4Q6yuNEyHwnnitx7Pn3yZ8ZxiATCaDYA7DXQKNiBsSzwEXyBocJJVupQHYXdaB1D3ZUTEVrU",
  "key4": "4g567QWPp2Tb1YB6qCZwULUqQpVLw9aqM8LAo1gpS8f4Ycww15iWBrgSu6rVAv1mMPimQJSvFwUJRuVKqMkQi6P4",
  "key5": "5RG5ayCUH85cGT6Mv6MFV2uMicAhdQZ2SQoubGQibR6iCf7hw1Pg8rcdqMjQjH2c5veYkSVdb11p5SE1awh3Qmga",
  "key6": "5srWRAzHd7eyuB2BPVHtpGpnoG2nfce68Gtiv2NyxShwPzLvpqji6idpWMw4ZJqX792cyDQB1UmQwAncST9uYKGj",
  "key7": "2bToVRX4QvHY2bJBuPnDvPQMEA424AQrcC3BgseE1K9RbwehdKYoPQnDpuEQxDRfg9NJYuyLdW6Tp6JUhPTYokGY",
  "key8": "a539hKcLyq4iz3FgQ7zdjnrPA9fyf6eJLoaT5Uivai8cXHxf6PQhQ41c8S37DZ6oLSyboewkRAmea6BApC514Et",
  "key9": "5KYrgyegup1Qxd2mRgbZ3GYhwss6vQ8uR7xB8UTgiwwfnzTzAanLZNMoVR2LhyvpBUs4tULQUfWqddGnA7zsGZ4S",
  "key10": "3YBGRkCBNXxWeB1MQMJaXiz5xJe9b8DAUiGgKk2mHvNQkciXt5gLTrryz89PhAfKUPVhXY7WZ5btzPzXF4YjKU6N",
  "key11": "49Gimnw5KDrsM8BzNFCP2iyJp7qfsH5xZEdSDuEXYnz8mZUkKyw6zFYd5t7AnJe41oqsYFEG2iMGKcZayQ3YaMXZ",
  "key12": "2X5bB4pnvbXynnB4zZGfMqLekwHzEJJJss93DWLwMpUXZ2FDnW8k9cP3xJGNTd2mnMSpLKR6MQhcU5BNnjimeDyt",
  "key13": "3CqGfMWbWwuqpmhrbJ2dNZ2tjzN4LqjPohzLXRcoHvyTXfJwoGsoiG6pjESd9iXbFjbGibqwEsipLujfcxWGjpAb",
  "key14": "5irtZ3zXh1Pf7R2e5gE4fZihsB3E8tqFTwJrWm34VHCdBUSLFJcbsoKHwS3PgPYx2Zs4JVz5igaCnVaSmoGUnUzY",
  "key15": "2zrjF1ix5TzzXeQKMgDqHP18MJRBPvd94Sbh59ZhjhSXSRyaAwSPy1WdxZU6ULQCcwYtG8Qk3tTqCoDvgFQoG8CE",
  "key16": "4X8QnmqZ25Tm4PW464cTe5bBq95aog3khDumvZwJpU3uWojfGFxcNu7A7AZn5B7b9BhKzqWDDVDyvM5hgr9KuAJH",
  "key17": "47BAZnFWV4sDnR2DQiHAzwzWaSpnJA7VDKoBvhPpbF8C8iGrVDiN9RbiN9zqgcEdUC54MwchcWLPmy4SVfAK4Rda",
  "key18": "4ztLQCyeWjphSifj2PAiyGeBzn6RWtuzZk3F8TFXjvnLamnSufDhUjvG5vhFNoGqYGgKBsS4YUAJt6NEKSxUhCSK",
  "key19": "4jzZU64w4dAwZv7kEcNr4jUryym1Rw17peNyc5gSUfDtT9T7T13U8em4JCbjqR2JuFSi7nCcLvyuqgdyq9gNaxK6",
  "key20": "82xR7iGLWVj131USuKzXHpPptNuECRM3EoVwisjkoZ1487Y8hNcYU9Dz9w1CSd6KEKZdgAjaHFDGQ1pyX9mkRvZ",
  "key21": "3ZYkUcHDRjBDwX2XMPkrP3EkCBrdXNwCrWgJHbr8F9GoT76ziXRKy5KJ4gZ4tMmeqKSGtMUAZWMXTYdYK96q81s1",
  "key22": "31VWoSz1bW8SmoJSwLt5KPPWWrYbcSU7PJLSrVHmHvxBdcVYyyfGhMeWxUTeWqMbVFqBjGiHDvgr5k5z6jr3mukZ",
  "key23": "5froBroYHuU84MqmorrRwXcDnCkFsAdRBAHPyYPT4bnHX5J9fr3aGmxebiv1wfpGJaV4pf4i2dtfYkoiZJB1dAb",
  "key24": "5GSPHt3f42ZJzZ4FcS4PHSEDGxTqeER8HoajK8kve2K9WyxEcu31kQXpPN2Z83jSQxNTwb94yuaGhDX7SEcdA7Ye",
  "key25": "3pVDJdJau1Nd6Q4Lbski4EnAasPtsnytwwpF8SjJDi2FfHo41kHtGGYS6CAiVDpKmvH6LFGrrBLDR7CSdYht4vum",
  "key26": "3KEsFLnLjFp87r7X14XprVFj1AUMHLG1pYYEkVUApEfxgYiFBWMwGkyR9CVATMxD3iY8CvRk5tfcCgAbAsp6tfWP",
  "key27": "2CXZyCdFm6NLV9dfTBMXhJB8xhhWYGSjqYmLPvMcweVDgH26rUDZ1LSse6Vy8eZd6sptVutPFHubVmgCLYpAkCDJ",
  "key28": "57pv9Um5h3cwPspqij6a9dxNFk3cdQosxgSmV3VtRGfpVrk6Jcg2xHdkFF5mWxci3zW5Qvod8YQcSuPhxtvtaKFS",
  "key29": "4FedqiEtTicYBDZRZR4KERhjFKF8u72BUSX5ge6RDKsRbscvPxphymRH7zx7jJJWoyroesTPEhQn3228qWQrddD4",
  "key30": "5SVTLWvmxR1jrnw3FZmchgqoUz3HqdS9V7VAL5mZHXxd8JeAHua8y6HBpEQNjKMaVVA11TcBZM8uVjj3job7t5ER",
  "key31": "3SYSRxjn4CeHGD62qWTs43xkWddaV7Fqy3Au6ipqmP5bwdV7YTVudB4nXV7UvuMvogcVaqwC1TaC33g72qHrPBvJ",
  "key32": "2i9wvUpGQNjG5XePj9Md6rWoHhksio2HTT97ngNi3XXpN3R3yToNarUEtNRytcTohC7EG78hfWMord9sjtX4Ux1U",
  "key33": "3cLS8PnYwTcwRBiqKorV4xkTBr8sQJJmvGuyh25XZ5MtiCj2GYvthexHXYTXWf93YW48ChMPcwNRETjBSELKW6dS",
  "key34": "2rvfzTva239R57Af1R9VTMcTwV5kRAUMA7cWhfjgUaR5KUiqiZCtua8mHfBm35oftzeAW8z4VgcfygZiC2PrJsPb",
  "key35": "5jzUEuf22mdzPffag35ZDJ9Sg1g4cEKwBdJWNi7T6ghzccxfnpMnqjYqp9ihxaTMkj5ANDy6SFUdXmuPMK1oGp2w",
  "key36": "3dCEkCnkDNxrtBrYLz7Apt9PeEQC3XQAGWyhZW6KDRBWfvQBFFtxJnRCD4vWrRzRYPXzuz3CZCCh3cuzCkisFfCD",
  "key37": "3nJ7XwjWoXMe6KoDgou6pTCFgqKceyEDkecjeMbVM79FZR5YFo7QEx2rM6FmwTD5Fr7tkgJtsmktJCJygHLBG5kK",
  "key38": "2Ud9vbAsGkUz67WmGbJ6G3SWRe7EsFEE2gzfkGjXrXyrmJiYT4eFy5FQPPsNvEe86Mb6GxvMng8YpEqVUyGZfmPG",
  "key39": "4CconmiLCf4FZt3V9qp9nznb4QD7d4ZC7h2rgEVPSovkf6XZui2u9dnpJFAhFhBjTtfeVYKJgH2FXCBkcbT5w1rN",
  "key40": "32WnUcs4ASm4vKeATD844EurVUQP3KGXtrQN6FTswsd69pLahK4We3Ao8YDdexj1mRASM8nS94o6xaBSJcqJT22N",
  "key41": "3RR6r2iYYzP8TGDwuC1EBJxdcPp49WKy3WUbercWghNw4qYCDdTprqUTiqbXYWyS67XqsT3Ad3tZZMq8nx3QC2MU"
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
