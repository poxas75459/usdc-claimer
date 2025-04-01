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
    "nUcfySYYhZ7wHxeykWfbPxSgopKjeU78wTJRWyLhUZiH9vCfkBL7KrSk18YfiAKWoBPaJeAXDT6NB1tLoGGfC5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhFYHPdDGjuq413nfmbieiBEDe1yFcF9zLUe5oTzoRVqxccrUjDPehyT7rv3LVF3Hu9HXx5pzg4s1QDZExQqTTD",
  "key1": "1kzVa9Vz4yxSCKUMmaSeqsC6BP61NMoD64tLbRn82XEb5UUiu2KBUkVXsyvQSubq7ydDQF227hD2A7N3AWSUrhq",
  "key2": "wdVzckBYuFWj34qy1xJb449YgrtSuGM5YdQm4KHFMMiYZkZWWYuBbqw6PghPcBEhabfNgA9God9pN8RKJq7UWh9",
  "key3": "3Ub8tWEnYotKqMCBX2W7SAx12e4YU7PmqvjcvMRXaCsgeDv1F3ZcT44V1atJtEQKW4iDJjk55XdvTEPszgxxXDy5",
  "key4": "2iMMvBQGh6zNVpLQFprs4pLQM5ALBk1GsAvYyWnGZGNWvcPP98LCAPuwWekfJtbwxvdb2qZCPEywcTKh4w1qo8qJ",
  "key5": "2EJpYtAtYRAVJBrKfZrFaUhkgf67meW7ZkWDcWGVsY6tHV2oKYj53SsCKT1RismFPSmwxtLpqQMAfT8uDoAw5RnX",
  "key6": "5xX4zFpZdYUZ7tWARdgVE3oPZC5z1vkvxzdWvPLhhz6PfdfGEZpN8rHjDEA3zoyR4Zoc5Uu8aNWZDsmu8Sh7vPtc",
  "key7": "41Udq7HGPgV5yeFDmYEGNV9XY6sa8DfsSeuoy8SWXQEpL4Y8q9UPqi5vSmvz3dybgKicwe4RfoxQCYrcNrQViYo2",
  "key8": "2vfCDqbQgi43JoshHo39drEhcxcMz2THXuzhUx9Tv32kuXHCuXTi4U2AvW9kisf8WYRrhQ4Bj499hfnEk7egWSmc",
  "key9": "3X7nQdYiGJHAjRd1KDYVHPRyJjcjJLHSGW7sYc2VbpvWcHACrZWfMzNyB35pyBbjYY3jC6KbZvR8BUcXpxsFXwpB",
  "key10": "4bLUQ7MdY91kdEjC9YcnKGozigPAD8ur3MbGJ5GPV624jPQndupn7gFH54JHGWPHkxyfWmNgtFcTzvUGM3qu2pLg",
  "key11": "4Est4DqNewfoVzTyFXvZhgZPCirDrE5LnuoS3ndcpCjPd2CrMYeDbju3a1fxLdiTwtFYgBeZqvYVJbDwP6cxbKJ9",
  "key12": "61A2fsDU8gy6FEXA8yJFFiVYgNEPtjqPAPZRHSmKHX2WqdtsXUgFwwSidYZzLhTEWtjhwcqrr1KGmVptU1BTrVNi",
  "key13": "5EJNvjQnzxPsYgVjGRjF23YFHYC8sadmhbVhUUFuwiZR7Gb4HdwLeDaRBY12f8fHxUzSAd65MBJ5Ka6Xm4hY3MnH",
  "key14": "3gxWipbwfdbPsVx2kqGVeKnSLdF7BLEbBAU8BXdGN9dbi6fKWC3VGLeUWMMbg357ZchAyZW5mSgi127ayvVXvoDf",
  "key15": "2f2hfxNZH7xyv37WMhAw4TmcMs4qmjC6P2yeXWdK1ECHKwXEuiAe2pVavq9im16vBha5FuhSS31fyWmPiFU1pu3r",
  "key16": "3FnTKEjzGYBpGisMhjf3Qe6ur7FZwTK1YNapb9VxeAewRrAArC3Lg1tRDEWUTu5tp9qy1H7LHsZmYCyt1dLqRRRD",
  "key17": "3oUkm1Tut8FezGREeePDRRd4oDNe6Cwfq6Hjzb3awrmWhy6JrcwGqm8chefxGJ7TWHDFpLdcKUMeqdF3dC1YkA3q",
  "key18": "5eGwwU6u1Mz6wr8E4tVu4d7sqMy4jKyAXH67VLxehQnwxtMFZSv3UHuWVLLqStwZRQEipnxhqsBxpmcfqfbUrupL",
  "key19": "5XTt9ANVG2gV2WDyDCimSKzzisfBr6JQD3PZ8Ze5i3EEm8xsM9RuDsWpAAAiYd35RnZn8YFQF4QaaWcRUxkpEtWK",
  "key20": "3nDT8WNjfouax3yPfFXgDkrRkss3fmREAtMTpEM4xcFmm6dpVzKqUy51WyejRerjuiNHF8JJBVP6NKY1cbf3zX3L",
  "key21": "3svSWtDSgdQcxWex1eRydZeUQ1ZkhHFJGkRHSynt4jSUbvhQE5RWZZfbP1PavLPTYvDXeFvpbhk2mCBaDrPuvrB8",
  "key22": "j95Cf1MjZMXQmfQRfKaCWCxpydpWbj17s5QnzjQXkeehSoWzLKHtno3SefMmoTEbaKqRTiXANFvgceCsDnJUB5v",
  "key23": "3cgkYy978sxQQWccNRu5hsJUQJBizq56Jv36GZTxiBT9CcLeVSWsVgcuV7L2Cep8vfMwpjG34ByhDm4VKQ6pzaEA",
  "key24": "4B6wP4GDiT5xbLYmMSMimfMwfU6ky5FyZY3cPLz7DMD11EWwswDf5KhMtyZ9dnnJZK7Ham4vnT4jbgZn3SgWw5bd",
  "key25": "4uen8YMBFwF8UY83gaBWTKcZCcBRnaRB7MuEFmgPwp1LH2XgZ1FqFndzvQUnyXrA81gjGpNVS9GZ6gvkrtRNBike",
  "key26": "a8TkZmY1pakrriVcEBitkWNzmFDaS3yAZn6wVasPLtEvn2J7zBd2SW7VCe9tEVxKYduXK4acA9Dt8nXRPWYAcaz",
  "key27": "3QVszs5KmYw8X7M4EuLXck2d2UYSf2vCooeux516VcUfgnudu1DvxMqPdah3Sk1doTG5MaTf5LPRrRoMTLH2hrHQ",
  "key28": "3a6HFvjSANaxguiKg4FA28M9FZP81XKBEiowBnfQdzSuVg6kFwdfQg9ndp9EHAdX58VLTVg9XzpLC5NxHdcp4ctM",
  "key29": "5qTQkexUTSw47dUAtb3ATvGnC5XFDjzsCsaWif44UKbPbrCiAqz6oYNJbvCPD57kPkgTuc8xJVuuT6xm74spEGD2",
  "key30": "5WMfYkNb2cq1qruFcLeVXC2DPbNTKJR64S35t96dm9HWdN8TNW3FWxQYCeeMqBygmzYaWX26wj6o6wgBHfs5nF9S",
  "key31": "49qY6FDhXZsXpb3aDjuF8BYJKP86YyZPbEtJpGdwEHqrhpZinhTMqWASrBQY4gWQgyGbm7MPke2Akfa1KZ8dCpvg",
  "key32": "2eGYTyyx8gqq4aWbmzvKubf8cTLuaDQpAkpyd83Cgzx6zZrmf4MUYFsvWVYqU6xFmkqdR2H9vb93dbTqeBcjkpWQ",
  "key33": "3MtSrjwpgK8TFuQMLpRkJ7b7KsdQhYXsHmbjj43tLvXaJM5tDhxvGaYf4vbYtjtdcHpsvnHMsGNqrW3sU6Hqark9",
  "key34": "477vYLovyZ5ioMUncURRFx5sUa3rCuKe7uh1BS3iytdYH86cjsM6n81UtBozfUR7HsjJcYfTbetEpDdiXi291aei",
  "key35": "4ncZvHhRForfUyxCcF4NjZG41khWQy9paNNRDzcoa7JYhFF3tKageEnSxd1ZWgcKAXCETb65aqX9a5AU5v5wwCtW",
  "key36": "28v1iwix7xA9u56df5XtVnui33RgzV254a4VehBWkCSk3ewzFdZyW7wRaDbx15bstKzberiEMGz4REBbk8Du4vVX"
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
