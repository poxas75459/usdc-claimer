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
    "agnZUUurCwBmcDfWDYQtiuQQRhV1YFHstXX4gnTYP1pHsbwCwgTdiV5gX7yYX7thhy3w3JMCz8hNJwvtF5DshT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45rSBNty96cmJ2H2febNyXA53eQkqNdR4nMfsesdPkB4TKDpGoKBsTXQT55PjzpVn1eGp1K273gEi6AB6oM3qTPU",
  "key1": "4c31nW25Rzjkt8PS7vTzNe22K3NitrzoDQEgjhQv6QUfGXFdb2GuhBPjNaLqbwBzLywjDQg8QiMfJXqVXcvpScRW",
  "key2": "3vznHHsvYmPG128dsYZb2PXnveKehzhir25THhjBirPnicwCLT2oa8oSJx6x7HDEo1cjf9q5uN8WvBStF3Mrj6Xv",
  "key3": "5ZGw4vpuPwELRsuHcmHj6FiwhjD5UQBsSeKe7JvsJrj8uCLSnEDtB5BrkjgxueMWRZVdgSL83C9wKN81PjEXrdF5",
  "key4": "5KT2r8k71BMfoWnkTAgMvKnvkXDALGVynyrLatd5ne98EFTvzZnTV86jYEzrG77GKrZM2EA45keTP3fdeRM8fxyg",
  "key5": "66CnMT2SpgLoK7HwSgFF2S8mXL1fpU3t258upehU3YwKkV1M2ZFjZMXgN3Zpny9jofN4DG3N9ECQqM54YPF5CUgM",
  "key6": "2ptmJNpin2Xzz27P7EaJG2A6cWwq6FpFqxRUddsvkYS9j5h42ZqLcuP1Qzpw6qLJVHT5DQG7tTezonVsbZPYuSsm",
  "key7": "8GhCmdY7odovwhF4Tcic5RNY3Sdx7Ukp6ejtBaCxFHrp2G8N1nazKgpPT4KMz7gcgFw4Z6yL93r2oP44KHmE1uf",
  "key8": "4atF3zjsTefMRCjfEFUxde2C1DA1u1erz9UEZiy6Qm5adhtJ5kkPYbkMCAJHW1QxV1VJ9HSjQ31nfsNaC5buuvqZ",
  "key9": "55qhNmrHUrQoZXvwXvpizVLzyxw9qJRCwUVtfMouh1jJ5xvBRdzYZSEeuQtrtJHRwGa5bGWGh9Dn26dUcoK3Fh3Y",
  "key10": "26B8YjT1rajh7qhSiw4TPMQehZGiomhRkXW9s7nbCY3JP16dHyZKGFgHhE7KZp4FHrE5a576CkwxVgiWksrnSi1C",
  "key11": "5ARCm1sBPwJ9vaQchE1jUMnZJuV6HbGnFMtUxtcRX8Yw58YPbh4saEQquppsrkwA2mpFRRvDedjEDmGhwK9awKtG",
  "key12": "5k9aYLHUu6f9Kb44LBMgFiQZpt5F6WdhQee3afGMGoLZxf9TfJFmBmavXjsDc57ktZ4hA1beMWXFNSYAzj4ZELMx",
  "key13": "347pmLiDn7mPbNYGKHmAbhCvLWr2V2hPp7jPsYSV5TXAJNDz87UeznmcCBDSuy8jzZ9kLXZVvW765FMy9tRUWbJo",
  "key14": "4xZu3F7heK7aMTwwH8uQpPoL5KKxSjaqRpUTWVaJTYhxZffZgXyMf1Ud6SgvFckvdxsSmKW8uE7kNs2qFxD9Rg6F",
  "key15": "4AynL8jhZw3Gwecxwn7FLAdDzJ4UXf8wE2vaBrXZNFgJ5Ei27L7J9mTgwqWnpGzy2XzqcfjKWinNQUnwoU7abEx6",
  "key16": "3Jwi9opREmwxNp1qHUGmGk62486CVHjT6Xgf6SyJxyamkdfzUqc3dUq6gmNCRtoSUoDKV5qXvLrBSPNGGiXvwZLn",
  "key17": "4q5UdNwkZJGAHBrcre3Wb1PWRTeCDR7RjT1CwBD2fRzreEFSEopSsr1hLsQ1N5YsE75HY8fngXSnqbbb1FNqCNtE",
  "key18": "5yJMc5H9vuTpdfSR6Mu2gZY6RvFuPcwhzfdpnBzCMo5W7jEEhkbyLwEffBRsdNzW6J9tn43w3uXKSYJfisXjHNpq",
  "key19": "4dPG8qAYKuftLooheGbYseCFwr6jG4mbJKCCajkdBLW5unXRYnGs5PCBjDFQihLU1dixnFc26rjTvKYqYxWqvn6B",
  "key20": "5j5nd1SkH88mqfBBx3iJugoGBZrpACnYGkELEJHuHQ1GHDRLxbUauu7GkkEopsjtnDcHCssXVcLfv5GmJruRXPzB",
  "key21": "4K3aNLNJCUsdZixSF34SLerGAWscyZvWHo7W7MPurrcpvZPedyL3ctHY6iprVcZST9doGEk6Yfgdp2Y8RwVk97uY",
  "key22": "vhupnkNt4Ek5oj8e9ymgLrfBrvJRu2DSVkJSwaAo1XX4saWNRNucSu3oD2GLiDavdM9PGGLLEpY2nZaPjtipPdi",
  "key23": "3KrVcpk5HnRBXgU18BY858jRFxnwkj6hoU4jPFz5QQT82wH7LBmYzK6idXFQSXcXpSA9EG1akJSLb6EPGTC71g9w",
  "key24": "4SYgV1cGV68BYQHUpNA4Dg929nTzGorsUitirYbP4BxySShXTfbsdTuNYevboL5GjkPQ9fEcWTmgEgcQZ7H7Gn65",
  "key25": "cRWWkgJtuV6Ep1C9KWsePjdHX3JL2o87nMG3Q2gipyG9fT2mpSLA1WZfUX7x5JTSDBBQ99H4UoiAefNjKYmgjtP",
  "key26": "5D2mqRryohspAym86A5sEVB3nRKfK929KYtbyjr13FNarPf9Cm9NjoBsz3QipCVMfBUuQE52ASpqiCizhcKo3Ste",
  "key27": "Q3s1v4yRi2WjFzBVjQ5godZBQnBvJ3jp6iNayAXwiEcS7cs83FAm2xCyM7BovE3H5yENfKmzV8k2FrovhjmaiAt",
  "key28": "5wdQjDZjXYmuq9xmnRFeeSLtNjtBAwpeD55VTswSLyioZpCCY2gur4MVGaEGEVXKbHpCPAvRZ8GNiXcs6gXJuzfg",
  "key29": "5vvqrnWNWPn7nVVhNBTRgChngGkQXi3h1mTwdqmGH5DMdCaJzu3x1LmTYZCfRFfUpANpka5Ug8ataHz7bdBaWFCQ",
  "key30": "z8DwU61y9V4kFtqQp6NT95He36y7eX1yXFUKhHwfc77KUvJ3cfcL7LoTqx4UwWxtrChzapWRpMSQTzeBQkfxGWt",
  "key31": "igv7JgSmg7vLwFPASxCcPqBur2FmgaFNrRgs1v2Ex5t2xEibEY7fUuFcvSaoPadATuRKQchcAk3B81Cksz2sG1B",
  "key32": "3cpFvvG5pwgtdViyVazXLziXCpAW2XnrBMySHcjs8NRSTAPWFKk7iay2rgcyZCSCrg4xf45E5FP6Zc7MwpTdeMvo",
  "key33": "5a9BZHpr44StrpPD3qa6YH2zEKhaPQ6hQYRYajmEBjALtMBccxwEJGBzRBmeKRLn779DSkUHQnAwNB1pKBrYUL1P",
  "key34": "3nwCfuh8fM4vYHK8mPkNFJ9bkVpjVLJwTXUEK6BggqxfJN95Aq82B7F2pqJm3bt62SQqjo3Xobc7tAtXpisR8VNZ",
  "key35": "5UkSTtyHuAbg4zmVz59ccY2KiBxjmz12xa42yFtAh1uiG3i3ikXmZ8KWDHziB8zsXcQt3z3reRdZVuK2Z4Vni1dx",
  "key36": "4PfCChqin8J4McwBsy4byPi8HP18Wm9XkngcoiFYXrb1JEMSXnmMh7P1zeNZdgdG9AKwSc3qbNKUzutBVx1j3q8a"
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
