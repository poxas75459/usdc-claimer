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
    "MQevtNGPb8HUZSso7c4jfHBLAVEZE5Pb7HGMcmkPz9CUiENPHRPKDZEfuHSWvLFTnJbyorxZ5ySEe2CALKUXqef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMoPkSHsjHJnznyeivxzy81mQ1o66BijtqcesJeb72SZQKAnxgJTF9eV1JWt9oiv17CP9u6zXPCtxMD3SHoVYBB",
  "key1": "UKhisLpYCGUuM3RKsfonAZqFodL33VYNbzFDDgjcUT9ZUDjuFjMVbCJrvSvXboEHPJi7SFeRwJ54HxCk4AMUSe9",
  "key2": "y1QmeeopHAWsCEg3cTRi3a65qAPxaowqDMr8UhVt3Dx2G6mx97iov8515wzZgdpj3h51KuHMsPynpk5gYoc9Sgj",
  "key3": "3dueh7EAjRDvXTufBNro15xRrixvtpG8qcBmJZmz6gWXHsFBBatckdVjQk6GNVNJy8i5m1DQKBN1YKx3Pn2u1GsJ",
  "key4": "3TMfS8iW9sU6cLgiPH5BPBs7oWbqHuxZqZaFr8VPQCFS7jUw9AqAeqby7DcnF1CZwPr51aTEzZJkshsFjmgutD7E",
  "key5": "2rCDq1ynfWmZPSxpkN2mZEguWSgCMJ3uaMXQLfWiwm1SnV7etg8jsk7WuCgL7g9FV4hVmHBYo2YnSYGY4M6YmkHn",
  "key6": "JBWZugsvCrp5jRj9w49tP7Pku7pZT3yCDdn3hJiYea2MfR2MesXXpzrK9XS29Gm4VW7Aw5BL9Q6tG1kpTBSoynr",
  "key7": "5mdX71gm5g3T4mUVJEERLAHwEz9arxQn5b7cPhznDN748sestpeczT4f4ouFs7QxdLXJGvFAvwNvwzMwAHdeqP7f",
  "key8": "5cfFWAUvXfLzPB8BExXMzWjrEZcFVaoTxj1HJxYryLuPBpqMC9nF8gmamFtxEie8GymBARBqPZRrwwNwkkBAAP6U",
  "key9": "5mJw73ZjfLuVpXSWnqoGzeyPMmxt7WpYWKegqQMa2qV9Wq8ZZ4vU4Jijo13H5z84Cd22G9MSWAzfW4EStUEiiSu9",
  "key10": "2NRvzpfV8uYacxSuPGSLuHvd3vMQ2TMMnL1tqnfxXkRZwigMA697TTrtEZmV9mbR9GQTr1kpoKdCFmjzXTA5Q92A",
  "key11": "4WDt2pvHamApxq6XSX3rsiA3auCYBE4cHD4gGpHaAPdqnEC3us7fShHWK98cywq4RwmZHTgvAV7ZNxW3vbqxdCFF",
  "key12": "5rW8BNceu5TvLp3KRHcbv8LbNCLaGMMkzzieiNkVv6xKBjv8Ead9SY7q1H1TSmJfkCizmAtu3jmyWVGc8eTKFGGi",
  "key13": "4DeaU58a3Zt7g7UNgF8Dm6EC3teNJ2LchmuHprGru4sm34qXMXCLR41EKDyhHkTe4GPAuMwLMaz4SEBbddSXttVt",
  "key14": "sVPRf99q4pP9Fyp5bG5BCF5SF9c15bu5ZnmmXWCxSZ9KBJLzB9NbM8mPtaf3VBduhY2WE66eGKZs88YqwYosobt",
  "key15": "4xBdmTfPgkUuUQzoSpM2ynjFDypctgvXWnk4kC26kZ4xyCTUnP8y3pFtAncWvhH5zK31Qwbvsy8uf217j7J4mcSo",
  "key16": "4tRQBMZopr2CfvdgmE2o9TLUryDmpEHk353fuVE1RhxFhPLxdTuicp1r7wuzbmtiuMLCZcTaUJKgacpvBNKvrwiU",
  "key17": "2bk4dzCVranPmt8P2G82dtZdHyJgPJNn8KkRzS2Y4YeTB5Dk2pyPrkfQumh6JNBUJdoLWFBzNacTxo9vuFybKQMU",
  "key18": "49gktsW5kjdXx7DNs5RmVgYbagVXzrkSpPn4wn6Sw765F6yzXsWbjTSWfNE9DWfcMnvdmRfA3ao3URX1gLQQ8Wzm",
  "key19": "4WqPGGbS7Kr73pHKChV17FGbTUqjmuzTiFdLC7SoUyLysunhXAvJP4w6A5JxMwktyr6tRxEfkk9f7HRaz5LuhYY7",
  "key20": "LsSdhAmeTBDZyuHCDupXQy3n7hbxtPXARoTRSka9y7k1e9EnZyF1cWCZ4xLTZtcBNZn9C4eJZkbxsUyKKtCnJGj",
  "key21": "4B1na6UnsStrr8nwhkboLwqAj3UQXw9H7utdHi27AuAZRh9eVSc6FESzoinNicJe8TgwfnRpMEJxmj2szmQS8D3K",
  "key22": "5ZUM7eE82vGuai19kK8KRZgEhtC33rF97Lhwo6SQgPp8Wvg7sF14QgR44eAUz8hCNrRFMmQRa4WBiXj8UeJcXT9S",
  "key23": "4yLP7DmCRAvpcbZcXHDjK8biUXx6ZxDY9ZpQDZU55QCPNgmrBh2qks2AVC2W8TcQopn6G3MRwbTbMgxVfvMAj6Pu",
  "key24": "3BynfpS4NoRjxdsEKTQbtMZTkQrTXzn3dm8Ey8SqxZe89K3j9W6cxMrHafJDm4voo6mEEUXTtMiJ2V1xSjWCQA3C",
  "key25": "5HkCdrhf5SLYkaMCTeQX7qZQpGC4hdGXLP3etYsmpv7QMTFhqxFqQgcq9R7oTXukTddAeUoiA22cSbTfJgXxpW9Y",
  "key26": "356ofgUpU6wgYoJqumoVYr3wPCAFV97io81VVEhoXtmZ9Z3cSH2EbEat9Zk5hvRcasTz4rMsYvQMpSBHFpgznftD",
  "key27": "33MyPD8ZmNeRx7t9LaJR6pgjckYUMELeq52tsP5GCaWg9hT1FAJ4RgU8mujrPNzYCr3KknMTEvpAj4r5vDRHnJfQ",
  "key28": "5jg9ekEUVrYFkh8pheHWqKtZZEuZ545QTB3YhauSjfXRNQbNbT5Xw7PgrUQGS5f2nbz9EoondrrDNzLGL1W28pPy",
  "key29": "Lah3igHJpeckB71S1Je7ifqWharkydBqaN2aLRjsvsHeq3qqJBmDaLHiE8PrjprgUvMuSQv3yuvo9Zr7izLJwY2"
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
