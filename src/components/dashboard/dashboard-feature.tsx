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
    "5Hd8CKMVSKE663z6Cm2wsEdt812HUBtBzJSq9K2RQD7VfWp6d7aRMMdqWwciF5jv1uCLH5RoMQhthVRoSfuitprZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89u23auiqEPGWiYVzZNQDdfVEGXpzmzfLbcjtdGK5ZFzxvkfeyNp5mZd8b6w493MSyAp3kxCRREZXTxxF1HxeTy",
  "key1": "4AScbLeMYPGsAaQajNNaHACZsoP4JX3KpdZ3y7kVwF3Uw4hQBkMcKnT9u5MXBkPNnu2YaZcs8BPLiU7xx8PU9nqa",
  "key2": "Vh7rWJ2zhgAQcGvyTV48U9BnKshCYYXL9G3u4oxnf6QVpUnDefDDYUoVL4grpUFkP5ohGKLtuf82Ef6zcUYedeV",
  "key3": "2K5Uf1j8cFqoygqj8HgQq7v55o9EtXFfBYB1EF55kNMrhVKv5daHuATySw81AEG6FxAxSBrdJNigZmjZohhkuotr",
  "key4": "3PHpjHmhH9sB22bpXfwKVLuNBKPAMJNbpUpAku4aqSaMC3JAbKtbkerzgXpkrLuKbftHsCPewBUyn7UHEMFG531T",
  "key5": "4YqehkWjsn8LgH8x7YeDCXH5q97PgjacjSh21SRKV7Zmtgk5ZrBNrG46bt4bDLguXuJX9Qc4JBtcJgbJyamYQ1aN",
  "key6": "cb6zaCReVQbJ9mqM9RjkQtXbXHp7WbQZ4rYtS8KLuiuvAeZpUrV6Jdn9VDrNEMsRCyLo9ZUE99TZ4QAnGxKUyVK",
  "key7": "2PfHwiLpCBLBvZuB35ed8ooSCBZL1FNBwLXC4c9WfCdYGfkzvrNtypv8HGE7SCi3G47m8HESfZyGfA8jbcaYemnw",
  "key8": "2JB43DbM86iKhcqNuxtJH7d4X29APN6c8MAbe68NAJtmmes8HmHeVYf8RsU9cyNKj8ydKCstq6WnLTdSkzFod4Xu",
  "key9": "65ScKGt115xHvf4KiEWDpisjQBMYpiKXgSn6u7D15xiicxzkJPfpDoy1CVWTvzeHtFejoxLmfdM8E8Bh8SzatZeX",
  "key10": "65ApazMHbKfCx5KEXezXbNc1jgrHuqzWwoFjvhd55gQZbADy2th55EDR6ZCfbQpsRhmrEHCsLkQiBbTu2HWZcYf3",
  "key11": "2soNS1XjRKeHRvuymjEsuoAu7ZbtkxS9rAGWLbdxVGEjjhJzgwQH9fWWZax9M9wf29J7sKwgbT7dVLVxhbk6gd5V",
  "key12": "2Db2fBxGuoR11G6rKAFYVaVQdVzTUBzLQ5yE7V79nuC8VnGVWbGjJgBuc4VZ8YXem5gw5nj1nj638hMo8eCoUbRe",
  "key13": "bfx4WbFUM3YJPCHk517fYesf1eSErGPx7wEFucQweBuYL5ZHMuYiywjnVti1GxLKJFDK5mq2XooNmcNWsgi21vz",
  "key14": "4m2EiphSWA18M1UoSMNTajDA6LPnW7NCN3Xth4zeX6rWsZ1npPzczcDu3Y8zUAqE64eocXbb3568q5VZN2uK8r5S",
  "key15": "2r4jPHVDw9GFEziCsMW2R1DnfA4kXsZrWmKwCrHwURjGNbq9wHssYq8upmWq4464vDTjbAUL1Qaovg71SRvYNj9i",
  "key16": "4aQjMksvc88zS6gTFmL3LknFoxwSezFdMsrru1zCBfCsBZWzqErpwL2HpMpMR7Pogg8fvWmD14AGQMZyZUnFeBx3",
  "key17": "5V14LnwzydDk5QJ67dZfz51gmghtoCRrYobfExJRDtdba3wXeRR9i7gpJu5kEQr5NzX5AFxts1mgFD4SrzEzvFjv",
  "key18": "DBfe9EfgJjV4tLRcvHTa3igvS2YG69wXbCNBtMbhniXnHNQXnMTAGaJmsti4nEADtqyc2ksHz1C57yZDCiDrc1r",
  "key19": "45RAepjojRkCZGfVPFZCSAZxppvZEZ1oNfhtu6gh25GNHZbydRQYrkZYdZZSZ18HPEy79GqSCE4zGkQgPzZb2Dus",
  "key20": "5HpW3B8tx8e6inX7T3yfnJs5DJet8bzWZ2JXkWFKYtToyKokzF4dWGxYe9W1tjDahYBkFH5Z24nG4p4bqrvjiJZC",
  "key21": "2XWKighuqntweCf1rP3BrQ5wEH6Ku6MniNfZKW2j5eCgsoH4knRJBJ8TbR5eQMx8vY9nfDWSyPfryPCseCZtHRuu",
  "key22": "2EGvyxorAaC9PDBVwTs5x667LDFdxar9FoRbMXUpJKUWwDi31TycXe93Cb6WJSsY9pzurXBXorQg7out7CYVLnpt",
  "key23": "4D6LoDsNJ8hTT4bLHUR7uGJ2fSDC37L2Rg2Vro14eGGebNmyH2a3x2AKW7Qc6mmpGUZA4EHqtC2AJN4s2bY6n2dZ",
  "key24": "67hSHGA8tR9CYYx82fr3hkpejzibt8JLoj43y6UQq3FX1voAAJpGdDTg5vtubrNSPLMHysiRYFJ8Y2iDCt6gCP64",
  "key25": "2Kh7J2fShUbns2WxgnmfSH4K8gxaj4k84ZSdR2ot49Htrwe1aTfoW2Ywn7P8fubgTcQv4Y1FPxQF5YR8Xd7Tr6Uq"
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
