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
    "63piwBASUzzRauqeCMP6WRbE9EAupx5XhnSuTYz4KgX3haJemYVudApDCTcczYq9VUCDW4fAFAkbx27v7CgZAmHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCfLYfRpxyUxqzkC9f2iCQ9WQ9Z9mwWwy4HPK2NHqV84BzKTrWBEhCjXratGVWPAPY6dXgp97THDffZmw172z7E",
  "key1": "3Z3jwhbFJRSbAWG1NYhy66RmHL6PBfe2pcsbwLW37zEsbhEefAduhJeTeptjL6Kq5hF4RVyBhxinGfCvhxM3EMsf",
  "key2": "4cLTPFVoPovfm42VhACBGsbeLPSfy5SMMh45FCHSLG3EeASiDHEFF5peM5C9oVPTW8NCmTeTGyfVKneKz8SsGPNm",
  "key3": "5PsmoUhqiVYqcoQVBw5f2R524i6GBW4scqtFBYs9eBpAWN5zBMrao6NGp1zbY1yvELMAjFnVDd5gH11Yr1wp1y1T",
  "key4": "3nhd8hmCA4VKwsRBrtkGt8mv61PXNrEvev5D71ePdPnysnVhfJjMDdVU7QpAiXoTGuQByvLmsmjEtRf8QU5WvosU",
  "key5": "2wfS2PCzq1wDB2GG8jkqyHp1VDiEFLS5aauxUfzDMP3okZfwJL7tWa4G4YXuLxhkaVe9Qr4bgXc2YqKmxiqytNAn",
  "key6": "tbjx6GhMCHfvwAz24Czp2aAf8qK34YS74pj5JbGiveV36aMEGdmsRdarLBu8hXXU774UYm5qaDUqqJM91qcWdLc",
  "key7": "3Knu4AUiyzTXrdFcxBw6tsYAAvMvNoszBBy1VpCwRkVxttk8ygEv9DgAjhhP4VHm3mPTMtEGV6ks6QsaZuvLFSAx",
  "key8": "35ohETbjqbmh7feoGUiFbDetKjnJyBErNrmCPcwqF9WPzDTv5FP89hzcYXwCseAtVp8Zr3W4d6x3v1vpq8wR1qGU",
  "key9": "xike1Ty7K4wuNvUSqD1183CeTg6NbMtJMPqb2PtHhdJYk38hEBFL6rGCf3qmy2fbZNrx4qBnpinCEeTcZRytbUM",
  "key10": "2uKdgi9MD2gvFFbCJH3fAMudMDJSNBPJZmz3RTyRsze9HUjPVejo6D5b4Dh1GSHuG7r2wafqFNBFwrmgQ51xXs9e",
  "key11": "3HRuPkcs1wRhTQCGkTGreiyHhicDgPoZqngk7fVAMmtZ3mDzXA5MGgqk7PMVCtTJLKC8SncdxDLpfSfwTz4N11sk",
  "key12": "2KeiAdakLXP2samfpbDAnJrGfpJeUzmotwRt9VmfQS4KbRFFD4no8kSEyw5FUVBZpxgQsgdMnBTPHPvorjoyDvS7",
  "key13": "27b19k97nDLgRmb2MUeYFHXP6aCrDZ5dYJG5PLVQGSJaGNCNBmAzcFTiKtjBzTse3ykTVk8Aq3S3pnrjojsP5jsZ",
  "key14": "GL8SSCvvx7oZSPjreDyQDEEPngi7gaJYmjZES1646gzNNLMwdiaDnSCcvc1terv3qwg74hGzds6QkPcatk25K6L",
  "key15": "5sEAAJD3QLGYNCa9W9aqBSSkZAwgoPEGtp1NE6iZE8tBt69b54sxkK2u2jrsNh8AGobBrJM7qwEqEjQUqqUciAck",
  "key16": "2YbAcSFU5yrEWKzhkpuhev9SXp73g7hTyQVfUbx2zgseNV7VboBsxc1RpxRktvtszwF9Tdd7LoiNHcPDYG7Eo2NN",
  "key17": "Z9z7NwquaZyAnqz4emf24SNbGLcxWpXgFBrK4Pxjiwhbk7XsTxHWCzchLYRjvausDuqyeDGgiqRbZWBD2n1p1ZY",
  "key18": "2ATDTcPYmLizUFUf7VtYRtuUypKPeBavQgYU6Hb3rTajToHUG2BHcgigATPHxWPEo9kmB676FxLTiERXYx5WzJ2i",
  "key19": "2GYVnZiWBJMvZHxpKLa2aU7LR7pnjHWcrRdC5LW4WFVXYqbatzhjCDjFpV4Ta3BZR96sqzP1FMEHcRCAcpMB7985",
  "key20": "61TsievFyL6WW8tbdnsBVWWZqdW7wKtzMJoKi1q5rdfhdFWkfM7bXFFEr2ayEnJwhRRKd576fY6U62gTVWkApQs5",
  "key21": "3DWDtrTbwQmyJq9NuwhAf4a4Mfpd1WgMDRoyzSZ9hoLYpRGVmYPn3nxJ4k35DoERsYtE3M8mC7XdzF9xYTABvqsV",
  "key22": "2th813c7srjJjgFRfbsSyX9XFBoYGFYhb6FDCgW7yXbiZK17eHyJJSgdS9NzujKi7YCCmFBv2UyZs95yq59YKPQr",
  "key23": "5vgo99a7H4fHTZeQcoScQDd3D3E2AaLNQaHzAKxWVViG25u8yNrUknG9RByBQmHqjw9enLmmU6LJPupq7xPF7JoW",
  "key24": "2PkEosU2UcM35H9bgc3oYt4Du7VVnvMne6gwVcn7iKnzPXeihCYSyXmFRqgZi4MfS8WPGppFwbTvZRCU5qAirjC5",
  "key25": "5n4Htr9UU5rra69QZmQwjRiWXqPJhjZMvDwaUuEa8VyPQX2NTXcBj6eRZcq5R8RQ9P5qtPefSe5F3hsrmLY4ot5H",
  "key26": "5qqFbH8TvzkiMfpQR5a3mf3uXR2mqPTsEMN7wCZjfam6BH9DJ3dTMTXHxQFCEPD4Up3zw6BWK5AcwCCuoERWH1Gh",
  "key27": "5koas5QTeouo2MT6DXcdnWPCerZdWEqBEH3aKyDGeVBrXp2ywT7VNsgUUz9ypNyiLNHpN4xyCgDzzUBxY3tEsekT",
  "key28": "4RFXEiqPChvLnjwxR3QSvK1L85caU8rnyFQrEuW69wGmvrovMeBMEufZaukiu4yBYCbYW2bCMfat4wJHLULdixQb",
  "key29": "tLbRt26vcHreA2tpCH5Tkmva9fH85oUPHQqEHwyjcW5bgxWkF4Dwc4VuTwAzEvFfMHNken5CvCXz5stdZnKeMyf",
  "key30": "2NFTubWYySgSvrj4uKQNXnQDWAFsSPUuKJCrBoYFM5YNuMM4EtDYie95DmVdHPwPGJqHcRme3BVXJo8wcbJSC3Kw",
  "key31": "2W1NSXW9tRb3fcBPaugydimSYB3YVBphvkiBkyHT9PR7ZZcJ86eewtDZqyLhpc95E25n5TDbVnhUiCbiAWuejnFX",
  "key32": "4BKiLq2BXR8yZECcpBr8afo1HGd7X41Kh23STK8wiiWxE1DZD6MPEXv9W91ELWtrTcp7QvJNEe7gvfj3jBdYZYVY",
  "key33": "3gkTJEexGqm8QG6FWLECgtkDAHhU6krcWDTr68A2ADgnPr1TCPhSHEykNyQfgRBj4dcgDBRj8DuaY9pBKP2F47SX",
  "key34": "5conGgFP4juH4GTmLp87AmfTJdtoXdMJKrcoss3hN3UNvS3bu4Z93yBv9Kp7KWTrVqS3LtYwFz1Hi7JcKwqWX4CL",
  "key35": "5TNice23ZAjB5kzYmNMs3LhCdauW3UUNbCAy26r3ztx9hGnZoZN6WUhP6ZBDUELRebAGzqQZW6gYrKwwPsHfLmCW"
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
