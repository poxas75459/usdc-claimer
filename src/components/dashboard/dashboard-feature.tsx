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
    "4KpAAhsr1oWDyu9W5jF9vH7Ppgcyg7dgkcJRupp3JTBgg7DQsh4eABBAPvYpxs9CC41TRDKGkgcCHJicSaNVu66h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeNsWx83euLgga1uAwM6CGYefYmSCdmyrgWQDcT4D2YNt6GijcpWPR2MRZa2u9UwHvMwaXAgfYSDGrrzuuGUJFF",
  "key1": "3gWSJmvvLA9DYtxizurg7azr1SrxAoWD3iYZ7N5fRrPARz4awVe5nd7J1UqJJEK4PBQD7jiu4895YV3FdWfJR93B",
  "key2": "2rTz7R3bfPQAordFTr6LNRvmJ3pH36YsLPXZXNNUdb2mUDbEpxyuZpM1xr9GJ7gEdatJYRsZPupXfNtvFx13Ve3s",
  "key3": "ZzyhfsY4TdEbvsu8hH5uJufbapwW9NCvxnbFK87twBKybbDLvhGPrpnC9oQGsCLSTo7Xbozf3nffw2xpaZNpH9L",
  "key4": "3Hcm6HCT3hNttKj5agYJL6xWpm6h7sovV63PYxsgtQkaBAxVbypXE2Z5waDVTrWSu649E7Vo6DWZhvEsu7LkPba8",
  "key5": "LPaEr2jx44tc5w5E1P9WZJhXRhjTHMrW82HHucE4Gqfyuf54Ebi39TRia2tNx4bVYMgRuzxx3vygg17PKmB7HB1",
  "key6": "44zuGApnSEbuvKTDLUo84MbrBiHrfLmUcT7ikE6F94bTtXtpHuRjPqsUb3aFwAew2WzrpV4ajS6VQUvZhwYEDo8X",
  "key7": "55G5AooSpMKNBxeSW4Hyxg6RmZuVSHBvz92V2YvyktJaLvF9Px9oM6bgLTzzXbvjnvMassbyYno7YcnUjheK38J3",
  "key8": "5ZSJAttS3uK7MGQmGjccPePvq5BCqDJwdATbq4rtuemmFhm7Lgjs1sBFStj9hWwFBaco4UQ5TfaX8PnSLqn4BqZ3",
  "key9": "4RCd7uXLic4z3WkY1yiYwtXwrn3zkDxSpRp5KqKyN1WHbzRDKFRvvyypksZ6jQf5yWvocKPxG7ByaXSP7jR4wDQV",
  "key10": "6mnuxiKcd1whzZesaVrNsGLZKT3nfkmQy7rduNed92ZodvC91TM2Gy5q5tdViNiAXegjzmj8YnxKhJhyJErYTfs",
  "key11": "5DHXta5MqUc1aQEv1iNDfcJiKiL3uXqNXzR81F6JGLXRJEXzAGDw6z9wqqV8uHADN3x7kFTawwdBTqkj1r8JBqGF",
  "key12": "3aq722z23dYUXVFCoPZxXoPz4XHMBzmKoBfBVqUucoEnHR3BwNAwnepb5twRxapTsmjVc9pyED4b1vrQRsjEunan",
  "key13": "4Kaa1gtBUjNkS31jUeKXctwdcsjVZyuC3cU51mhmRKnbCHztEASPUrBMZyREqJSkhcVqow1DTjkmZKmbNdwEkmDZ",
  "key14": "4C35GDn6gEA3mAKK5ND36EWrQnQ3troa9NmU7wu3LegaBUVov7eHmyp4NjTh59mJR1PNLMcTAVqzDPVL2SmhK1fj",
  "key15": "257f3ZPWju3nCy6rcciLdmrAe24ztxFuVCH2YGJgKBBfvxH5gF4dG8UJV7NU2PEgSWTULhEbMgaKVvjh7st3kse8",
  "key16": "5Ny4Km2ipAHxiTsxetuoc9JiUzZR7RxrXG1Dwt7HKBnGpqYCt9ca1ccPJp3GqJ3yMtTBvemLQF4PznG5wmiqjqUf",
  "key17": "3jjvCtkZq4K19zYYTE5sUzC3mBzmPfTuJXFJw4CuKyLqooBMGxu8dabZkh3C87MkVEBhQ5WgnsYUzcxsZvq9PH7L",
  "key18": "NoRb3TvqBHWyJfTWfkCuTpVm49PLLDukTVmWVs6uoknCaMDiNmHseJxzwZVunruPZfQAy9jDtfjbvy93zd9iUbQ",
  "key19": "3UB9TAfaDW3RjQMsopMP2pK9dCkr22j6YuWupiyLjgkeVk8FcFN6nch5V2AGYp9Fc635xwbk3zpzuLux6XsSw7Tb",
  "key20": "4rnPkdaZxKce2A23S1xGmyDZs7wK1QEGikjjbu8hfVWQhmncWqZ8Acuy4mw57wh3y1yte5v1urhr5TUtckVNx6ot",
  "key21": "2JAP13kW1QiyLynmeTNVAe6iuv32BB2AxMWsEfyRknYRcPc1uWcP3rtiVPngLE4fuajzakmut9F9fcyJas7rS3ne",
  "key22": "4RrVFTNs3FxQr88sHshu2yJvoNgXkVvnzvGjrpoNZnXEhDEptkh7xKGHbNckaKjJCM1JCH7JrXH6TXvrUwj5binF",
  "key23": "43YhjN4UoUGsQcc6CL1dtUKtq3vWwQEWosyxZx7BTiXDUZj9jxhMatnv3KLsJQusCffR5aojC2uR46Htf3896cUe",
  "key24": "5RmLbWpPumAe9HT7RXs6FRYZxTFSn1aYLYK73UgswLdCX97ibC9amcchLmkRXT3KHryJ8FKpKtCTkDuahrwwRUkx",
  "key25": "YBricd2K7YRLHsHZLHwy7gLvi8dkQicuEFNgP2FVCK5M9svEnc25mL2UXJ9ttP877tiCP4KsziWnNSGH993xF7y",
  "key26": "5RfHh5NdkDayfruZD97vXkhNEtNyZXwJr1DCU7mmqaFkFHUGJ53rdjhmDMH2q1rT41xLV369uZZSot7obQ6LLTPr",
  "key27": "4MjqhA811xLUxybSNXDb4Co898LAXKKkn59pt97MJR9yhrftyZCLZtaGEhr37kUzKwZBcbYgn8fpjPf8v3TW3R4X"
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
