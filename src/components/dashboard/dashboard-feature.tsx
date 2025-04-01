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
    "3VEWVjHLQ2ED4GKE52mDd1JspY5aAkqy6pCrm9hDGjJKP9xemv79TAJWhhW3ud7tHZYU1dMoiBb5GLbEWbs6tnZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmvDEDTSBHqoEzQqcd2DZg3Qyt4VYgb9W9eX4UsLLeU6VDX4hV9kbdCQKpDLHSEKQAH3ZKrwVURNBavMQ5smjVp",
  "key1": "3gxsrSiKZCFoBXmbup7NcuLFXE2XXkaWjh6hySvsqSPCaWL9Ss1cfrXU468aDRkC7zXf6ux7VuJdGBKKkAQEpL24",
  "key2": "J5pJDETcQdmZ7bpXxoX1ayq698vUXP8UvRzcPwfxLcKVfXJJBK6VxtmZzX8RTm7EjXR3mpXiQcoK4rZBJ4oP23X",
  "key3": "DcZCzoEzyLgT7gKtDkNT74j22RcspVauq44y2WvshXqtzF1ijSBrQk7FscgNpcQBXdSKGZF17Zpb9GmowAPnZ6J",
  "key4": "2jqZFWgb6qrJSD77yLS1CDVXdjXZu7dVvYMoXy7rxamhmQQ27vVJbtpab6hMJm7WracUXd9bUfoDrKT5wW7eUvoL",
  "key5": "2sMMU51ZzkZ4pK1JnP75YMQRnX3gu6Hbx8X3TqVbFGVxm3teYpgAnUo3fJoSJNa4gzuojErMRyeHRhfunXsyQDLb",
  "key6": "2J9c4ERKmtZbBuCX2TTa5rVS2eFfwBCuVJWr8M8axuQL21iVeWSi7BLb9J5EjwQweTBVKY3rMeSt6rYGt8dC4UfQ",
  "key7": "45BSemWcqgVaombRzDtFVGsiz4r9WVt1iXpqhrD66uEATSQ8kAi1C9r346CypahvrobkSyaW5EujRpQa8wJmvTZ7",
  "key8": "4okDihLbqcGJdVdDNXR3BjvZHVaJ25Y18XJ9X9rvZBxz2hgzTmaiKeyYrfpY8gVpUYMTnz1nZbiCmkjHJk8XXR8n",
  "key9": "3bxWoSasFTaab6jjpJ3rQGR65wBvxE1UKAVx9NcTaMR426W7V8b6ToTxtCw1461WUWqHs1kPzMYTyf8FFSiGusYt",
  "key10": "3GgKehF5o9jzMCdS5wE74zaeAGLNPdKBEWdKEawKn3wYKe5f3XzKEunHhfQ7h8pAxQJceuSNrAHDELWPWvjLh69a",
  "key11": "TNuj1tqqkKaQTGwiW24dwFFUP5mNrQ5beUhA3x1SoR38s35uPeNr9LzidFNX1osR2VVcuSr7Xj8LJ2Y4gB7wJ98",
  "key12": "5yNjcabun987Pyzk91b6wzhwVHrr9iZqyZGpEiQr8KkJhsDMrvM5v6o8v8MVxPaW5nMqc77FAWMmxBDRGdVnHyLX",
  "key13": "aruALPgcAJxf8Sx3aoHDMitGJEPB2oxHKYsf6A9t526Xwhdz7Bst9y5q9MB8kzMJSCAYZoy9YnJwJNGCTLWpLho",
  "key14": "5i8xTKyHDyGtn5Sn8Mic5R5y2TwtB1bjnjTkLDUAWhtBnfgU5gXTWEZdmpoEwvB4aiaTmsvgncaqoyteaE6BXEcs",
  "key15": "5KprzHQHdKXbEuzdVxNC1C4jSLMqFDxUSbxgLvfoL8xMcH8zXGUeDjGioWV7DNTw3RHJxSFB3JS3rYzccw7D3geN",
  "key16": "2pDHJw9yww63iB7N9NfckNHPvUaR7BTkcR7uaNz4mrRzbet1v9SCA6uYEMH6zuKkvuUBDMTUD3xMkib445V15idm",
  "key17": "4s9arCzNWYugFhrm9QmCPexpGTH95T3SGbs7jLHTMHRk9giLh73rXdS84LWHGcGGWq3pmkb9K4aQrDfgPF1G5kTo",
  "key18": "2HUn53LzFuJLBRdR1gBkCeyqyjVsJqawjBJeSebTv4jrCLaZ3ie7xqyMZ87X13SNoCtuVuN9PzB8i14X9p69Sbx",
  "key19": "3pjQb5KuXahmkRE8C3Ste3NtxbEQaQ1wrdibQ96KkNjMHiynTZJSpAB9dhKWRhpgkP9cCSFhVfeRtZsKvoGqkAVC",
  "key20": "2noezWiN7HVmQHWLXVC5VQ591vhxHUz4SwrfG7EiAc1QDkXrrHi9w1vjJMxerPYciiJsirxPEBx2YWBVr6gTMf9V",
  "key21": "5AMyjsW8ZKN1XXrY9wvYVzY2e6tLTrG2H7rgx3oupwyiErTLkkWTGUETpaaftsp4ig1ZkmMbdeueJFCzybfc94TG",
  "key22": "jSzCPZ4FuKZF5LGSNYUT5yTsm6uVZxi3t7nc5ybqeCyNfzn9V6iLGB38ZpemMJ8m6LXCUqknF9NhA8jnqFGdivA",
  "key23": "3okHaYVzStfD1AomV8Yv8dNaDyLqRBNruKYehbVvx5uP4GwZJTqdMFJSpReasRgNTnVEHA8KjurohZhgCrzUdn2c",
  "key24": "54MzvwJ26SqhcZkfSYA9rZp5radUpmUHUvFz56cds7vGHcjHcU7bnFzMBEK4BZtXoB41b2GRAHWmonwPXgKabmNG",
  "key25": "5f5uR7kJsLM3DGRrtohxhmi7AC6hwdVcousYLo8PxfSWq3Lzr4AGVvjfVdpfQ33j2sDoDBFmJf1sUA3wHotBKUH6",
  "key26": "VkmsTofZgEQMFobDt1XKQCwZzrZZGVDkY6cqrjnk6vSaVuHD32VeABbkjSTGY7gZ8wVqm69mST7F5jUpwo61LhR",
  "key27": "5QxYr7qQFjMUMmZagq5ZrxFfXNzzkszNuLvppxXPisRiU3oEzSgHX4dh31ZtdFS6bXRhxjqGc2NzzYLh1v2NiaNg",
  "key28": "2wKN8qVKB89Nef92kd6B3wkV6atcDssVudTZoDmNHyoyJ6C6K1ecPCXaCXptRhhKB9fZn3nxEXz6MpfTazqYRrDa",
  "key29": "4yszeKNfVaque6AEEym3PQbvCvGiXyyMHyo5eQpRgvF4seW6cJBksTNcCA7Rb9j8BdqC25fWcGVr2aJzrUWCqGiE",
  "key30": "2K6A7xDaPDfCGMaP1kCQwCDag2qwnm32LvPfrnELGRCcq4UVceQmfFXoUpfWnPCs1DkpSMW4cZgUX21Dpo7qeCpt",
  "key31": "5wfo7g43kxbEv4eX74hSQ3MScu8kzvHVoGVxCWnWmEh5SHjNnxyXdSRYxa5j1YQJuuLXqcDwjqDo5jPRbJZ1fwy9",
  "key32": "5XswiZVUGdjGQ7nZVri4Dw6kfh3KPJFAFvXtgZRD5fWfnfxKh3rEBpmiehMSGJGdyfrDoFchAJ47kuCrMVri9o7o",
  "key33": "2PupY7DvR6L1SkLgKx76CahCursUAdCMCHa57KHv34WLUTPiXmtihuKEf1eSfZmWuLcwN2HafhcSuv1JobakbvFW",
  "key34": "cNdSDRpJA4fwq7vmvKP2HuJpKmDq58rVem6q9DfS8ttarnk5hS8MH9mJNv43JiM1Yv76ymD4mt4Z7mmZ1De1upn",
  "key35": "5Xs8XxB7xgg7pyBVETdUfbkukKDMzFTWcqvNTyxwuT65KAZGWZFsaqPfJRnTEyYk9HgJGrdhdq2g9nBzfJUuimoS"
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
