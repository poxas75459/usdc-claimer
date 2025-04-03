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
    "UWFfko8Z8xiwbZMVaVxrC58sxKFz64kDhKkQEyq8cLMHrcKeXPeijhXZH5F1VkJif5i3YDcARhnKdm4RktyiVWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XibhxKFoCezfENnHTHJRE1J4cxhMbRyyZqdoDzpz8zdYkZsQ8pe7cPYo8hVyiMNkbmY9o5DUnJ35emELisj12b5",
  "key1": "GXSQMhgTC5tF3BPNPSPcjeUy227pWX5atfdtmGqzXq7vQvTTbdGwZzLCLWbnrUFoEvz5Nkxj7W4xf1riph5YVxY",
  "key2": "4L65k3VrbvYgypAxEsMQ1GTLbqVzfCBNvXBvhbJGWV5i7WonH9pav2cBgrRcWBqpfFDiTAEyDPBDsxwBH7TCE9VF",
  "key3": "3rfMJcQPdc3EvonQqD6diAo72QDNmraksLMBt5hVqSUiCLvrNZ8oUWrzzKg3g5nMfBDGUML7gsPY875DksnZyndc",
  "key4": "2p6JWuT9UTQXs39EKyyiD8cRnCpnGqzt9AtRcood1C4FPrDf9u9ewaUQ7nPJNu52RPVZkxsPVCLx8ShhFkGET3Fn",
  "key5": "4No1zLt6JtQxmecFQjCoTgWfaj1Rn5XFPAcNXx3WCmHqhKaj54mD59cGdbzEDSA9njakENFMUb4HJqtwiqegCsHA",
  "key6": "2bMgjCJou8f7SKuAuhoXJ6i9oTn4DB1mFb9sgTM5QoCvwNn6QAD3msf4EHUxVs5At4zJLDd8MaCLu4nJN1xTXQtR",
  "key7": "2pnZCWgWtiQorF3YACh5pdq3V91Ho6sSasNY1PxveeBzyC3K6D3w29RExkMVZz9LvMctwaYY7ZnWjnZJN6Bqh58E",
  "key8": "62khwAnibRjoPvXh3wngMLrFar7jMRjXby4MKSt3m67TRdyzpVwUVTzPjSbTbmUATJANHzcP9LCjj5C9SSPUQNE2",
  "key9": "YU26ZFMyYHXpj55ojGyWUZBtdBGygnCF7iideuE1odzxt9VVh97WjGPj23tRWTgquWB9L9qkqAT6GUQzGnmdyNo",
  "key10": "3NYYsr3RbUk6CucT6XPkepMYBg2Uh7VgGMBSQ744CGLCeq8JegoJF6qVHWkhu1KzVmcTfVPJsLAvybZWgaXF2Umf",
  "key11": "57kBfz6fd18S3tXqBFKzvvcTHem6otGNfrLg7R7kZGLCMhjUBjeaantQpnxCkAZUbwC1de6Hjy396EPY3PoXjoSX",
  "key12": "6oajHW2SKECgceu1Mq8vd8iTkL2WTHsdcoM6yN5kYMgBBFyfpsuWUXPLki6aDUrSYgb3C4WncTrvpiCKs3oDp2a",
  "key13": "53Y3Z3jPsvMDuGNZsCzztVD6W9VAFREVdCTPSfk3XVqYNWbx3kjGbJfJRL6Lg5dbzQvaFM8rtn741bRUT1KcgCTP",
  "key14": "3RvyvbkV4UUXdBobRUMmhnbVkVyULtmZkhq1yTFRwGVh2difRW812Udjux3Kvz3a9egBKDXi9kfwyv61doe6ws6Y",
  "key15": "4JZWiJDnp9easptupHLBMy26P1qdS4GtXNNssCMkere3rWtpQEJQeNQhc8Vza2bSJYkGzubjXzy736ZNH23QAFWB",
  "key16": "5HKG2Hws3YyE8W9FsSzWAoT2ETWVfwSaxSrCepSqyF7ZrdZxyhm5HuRZNceeRTp3q2BXZT1pEdaNhxZKFMKY9hjK",
  "key17": "B2pv6LKbKPNKprm43vKDRS6MbewuLMXG21kW3Vifssj5rs3dNCQG2JGpD6Kfr1Wkb5m71L3P7cGnHxuhapQm3aE",
  "key18": "4ar9AuFyxgS2RduGyoRbJwszrTuYBd9UhT9kjHcyZeH5wSob9bbXn3UEiWorVsQ1dzSsXrgi3g4DnxGULTffPjE7",
  "key19": "2bcEKAbL5GuNs3gFFfQuoe7AXdyMPU171RkZ9qv9Wx37yWwjH3BuNznkioV6C7zq5JX3NTamu87dQYhAferACcrP",
  "key20": "2wARENX1eLJHLxe8zBfVvdutxdMtP8ySK7qnN2oJ4Wa8gUxxQm2N6ibDXpbUVMt5wVxnsstZVFCxc7hXNtUmRPG9",
  "key21": "5JjDs8f79Kp8ssU2fAxsFg7XSeoi9BGy3yktFddBoWTgaZjgtLNVs851VtwsboQDJoJTDaK5m3U7MkMszuy8WQy8",
  "key22": "4S5hRCkQCPxUySmRK1Gu9a6ajpDEzmSKiKyyvBEEUgUi9gagQPnq7p17kDF93nzTeQAcxz25Me2eWqtLFpupH9Wa",
  "key23": "3XYzn6KaUWmcVu81K21nWwGgQVWEDu68qcEPjPatvgAsaU8rZfK4QKSf5QBNRFkrk5QBJ8uFv5nXK7S2qRgy9NJa",
  "key24": "5gJ9kDsUf3hEAAmD1qVdEyohBsWn84PwmeyCnQTwvD9jh7THSSmBoDh4SafbgCKRfKWR5ofQN8Ww4C1SHnEFqk33",
  "key25": "3RNc9YS8baxChX6h4XmTtLuzkGuML7FG81bL6pMEDznqzMnDvZS22mXoAjqE1ZzY9Snqb8b76H8wVtkCzwQc43Ku",
  "key26": "PqoPERmeMnBY1wJLN4UxdiVio6GaL8QTubJwnDBFeqLb2VhMn5ef2zPeSju1bfxRHRLrPSPBFsx5F8dSfozCSsD"
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
