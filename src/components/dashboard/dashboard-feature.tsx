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
    "4TNdu2kJFmZLhPV1RrYC1Nib9kVoRHwyxhcqwstBqfoe5ZwTcvKTt6Vc1J6CxhfquqdGPYErrctdCoM4mUe2QSuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rcj3ZqzgnvuLwE9BfLe7UwmWaPMXewsTHa4B8ZtYa9UGCVoJJPV8i7QzwyRJkfUxksr1tkibg67Dcwcdp3syhN8",
  "key1": "44xiC5KDDWEV1EUaztNYWBTqvyLsg4M5pUiVvCbp4miheEQWkWwpC5wajE9MpmowqfmFsBKUgw8naxzFmmbD16Dz",
  "key2": "iLb7x9jTeDgrXAmb48rTmpUrJUx6qw9WqVxn8rpZpVrk4GJ7BkmWZqZg68TTpzaHmDhB3hKXxncdFoYzT8BbdBY",
  "key3": "4RKuwHsvLxyE3HFwdP1JgR1wsBip8PtStdX4To3KZjUubucRvoT23MFPakQcUeLRjVcuGVBLPmC5ywNKCRLz7Mvw",
  "key4": "4njLxwXWxT9f4HJrHadpF6bBpm7qtU9bBonvc3T18mZVMkSFNjsyFtZV93vWxHu9wTA4GWEnQoWwZC8gj5GgUaok",
  "key5": "3bGxjCM9uuVwYoBijL4SkzBow2mgLpFaTALsn5ebyy6Bj9rna7LnN8jc5gaiefgrae58ZtXRi29XPceH3qmykGah",
  "key6": "3ZcP72qumaBVNxaL2M47my1fraR1vRpPJPnUowMWXuSK1YmguE9nJ77Us9ULYpTrQUpUk5Hh7CyaarNsMQNgJFgc",
  "key7": "4XSrR9cW7ccCfswSwLYpVWDtogZ1MXkS81cr1vpeAXFWaB2ToeecXv6EfSmXb53JsZECebodzoQF8XCRHeLfmkTY",
  "key8": "5JjpYXoMsDCs7S7PGtQAK8Roi7zF39mGhsmWjsCdQsPg3YQ7vFzeoSmATMtM44fqdZjVNWURQtB6kQCuv9kPqH7W",
  "key9": "2s7G5UCDdAhWbZENYtcELphDH2GadbFmZxxKZYezRyj43Wjjnq4aixBGZc2ffPAZFi1gtGVdMur6Beyj2hw3L5u7",
  "key10": "5iYCaTULZgeEwGg9yxYxy6ReXhFC8FgJijEiRbzrF63XUv3Nv8yNQnL6EBqK6mqhJnQsECK2FkZZQN85Zct8Vfgk",
  "key11": "4V6NsGSHyEUsapmtS8cGvgCERVbrBMS2FbShkWk2v2Uy9eL51YVQiMYcYqzH4Uz1iR6w5Hi9XAGAcSxoAynhJ7ad",
  "key12": "5fvNamG9GUbFa9dr191ug8ATEiUUbd7yVYqbYyG9nzaZLNaPJ9cBCip39Lczhom14P1Efu7JwmQuMLCy5emKH4uR",
  "key13": "4RDQRZEv2iPkifPJUckHEhr6AFQqBEekU4jfA4izQYN6r2ZhdnFErxSoWsPR6XAzC4LkXDdWKYtTz9ApTEAVvyK2",
  "key14": "4yFhR6pxDT3o3EYB3HQfZffgpjDmNapSCNYVSQ2KPgUe7h1GrFjrSBvMDCDLQkmjdpMFrmNsug7DVtr1YFyvtGFZ",
  "key15": "2crqYPssGUMBQGBQHRdxT7AmxvZZxyDWsr8oWrR9AchjXCiA1HwTuBX4C3qQiVNavkrBV25Ti4tfu6MHYtCNPYsZ",
  "key16": "4g4Mdn3KSZQ7zdstQfhkPpKpaNyw1WNV3M6VJoDzDg4xV2MJmrYzRqzikMFAREo6hQ46yJM6i9d8anrpiumY3xv1",
  "key17": "2cLMcBDZQj6Ef6BxQyMGj2XSRNLWQiXCE86mYhmThZ5vGQuBPFJ7Y92gjJ6Sj8MjRaGkwzm2fiJTTV2TQ1rJUkRY",
  "key18": "4PKYbpA5HtYVWtiYWzyHNzZNq56i3HoeAoJAF4ENKoRG8mAXL2p3Bu6mpzFhba5BTdz3ieDymMwGBotchuFt7vY1",
  "key19": "2rZozjTXaxqtkyhJsZghuTjmNJsh1wuHWZ4wDeq6WjJP1eZS2bUYtCsdRrQjd74mQmnWsrXfBri1WVbVk6TWgAbA",
  "key20": "2fUfJ1nnL82eQRA7qzCPjUmNKGt9sAC4GYpAVuhvtyEFvVwB9BvyWEC3GuErH6LPv4phHsmbp83kJwRYd236rN8u",
  "key21": "598JxG2Nb2CPdTBtX49JmX4GVYu3CgkXuvDp55vrvHcpSDenVP1fF2r51Ey8yrNj2bPuVV8YgT6izGN7i8oCeZGQ",
  "key22": "4rqaVTKGL2ytp92tRN73EFk9eBE34iqGyMfsZfFn5J39JthoGCEy7iincAhUiA8oEXdXKfAVZMrBF2rfoX1kvijb",
  "key23": "26TGXuRuzySm3zqLjJKbwwPV16ggRFn69ouQFN1RaGVe1C6GZ4K23svBzXyqBgLhgNwR6c8GV5zXcqDPGgJjcjzb",
  "key24": "2PV97j3TbpTGi52o6AmNDe16FvRGcKWhVKjvVChSkM9kbkJhKJf9RmMwhZWMWtYzp2LWJ45c6Rz4Pd7rV7XPHTVc",
  "key25": "5uVuVDBAeo8yrAjzNASWXKayydgxqx6Ux8onoyZyMtq4at64iRn9sGJJxUgRCqYRKWgzYWCRse1iBt9MbNdnoWs1",
  "key26": "2MhXjNj4MtdAxb6Z7SK6cBqqMW3aEdwQPyxcc24Mjcc4ptRqAPpgX4cxHXskcpJxWAVwsf5juweJyuBXLMkctzXC",
  "key27": "4C1Zd65vqB5vmiJxckdzBcVni7ZftyGGoii6D83woDbQDY37DiGtBWFdfgyPranKv3zCVJNDg6GMLoPhhYYUTjt5",
  "key28": "QoeDpL8wAmVPHoSkn4h4bBxkDkaPu7HD5fQtN2uHnE64ziew6RrP5wXB47gqQvEu1g3ihaBbYyYQneWxHtXs8u8",
  "key29": "rv4CymFnq1Leu94nCifgZi42me24P6VWeLfxTozPGkVwmXkPUNZsmmUNZFsk8Kioik54AEXagdfCAa6sCN3UC4p",
  "key30": "2jYhGMaBryg2m8RWb84CqNQ4AVPGKVUDYbWrQsVwTo88r3sPPwZaA3KfsYV8EmgWqS51ZxZPiZipWxxZh5gfCCJr",
  "key31": "5USMkX6qxuRoDc7iboYrgidHgX9f3Bgax47PmDFba5a9hEDdny9oKLTVbMr2TeawU5EVUnymoj3fGMnzK6EHPjDe",
  "key32": "2a7eiHbRkJzokH9o7FkHqZqXnLj2hn7RATRnSPvMXsSQofPD2AejCfFqiC63QQCU5yVtk1zuxV3hJ3e6n34cEfrf",
  "key33": "3f3NqjQ4G6KeuMLgNDpxMAhVZAVXMkf55Wcj3vVtrb77G7LJiJuxrc451jXC3tSfgBYB4kUHMcpUpkMqyV7eB5XH",
  "key34": "5SuhCnZePptmD5y5mSHBEpY43eh2d95KgsAL8ghrEv1E2D3ewxGjijE28tPLHHe85Ayg81mNaXUZigVvLf7GsVTS",
  "key35": "2QCrg5swJvFQaDQ642PTHj7Zn8CWC2dcg3RCPiRMgu7bAnbv7NbtPGEZQkrNkAw5h8WPWq7Ltz4Xw5tEzNXTihwX",
  "key36": "2h8tYM3hmxsoPTUksRZtzb19fEGzMpU22iRJE1xVFFWkpZ7DwJjx8tfQUawE8vbbbUnkHxMpdJae6ubdcy9RvswP",
  "key37": "2UxpuSCeLYwL9gxJqbqds1iPt5G9DBdHtWpmjb4t2P8NrHMCWJdBQV9hzu18hKCck6YhaS8HBpuA2fCq4BQWQnyh",
  "key38": "4ysEnog18gLFe1egXdVZxxQWAf8T2BUMFsDuiMgGrFuxA17oVL7ehbrWZPKkk3xhgNf6ZYu9LrLHgR4yC3FPQMEH",
  "key39": "64QqnZxKsfT8Q27Au74eE4pzdoKxf4NUUWuL1KcPuwoAvnL1N8eBUB5aYSNkXEVUYHf1aAuAHj5otbH6RiFns6MD"
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
