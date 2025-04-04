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
    "2oAYTt52HwcGAJjAyWJ3QSb5LdxjHKbMnz9akX7XwMoCi7JB57y3dpS5Hzp2mvWLw94uQ5tj9DDCtLBhvf5wmZrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HkftvYMSNvzGz3hcE8ktZbRHWXfFQjPt5dKzQbK97K5zH2HppSzZfPKBbggASjhvwunL5kH9nbW6XFhDarx6Zk",
  "key1": "3FFGquNVDsJHe9X9ckCqVkwYSvurFCy5ynTWfi5nivUmBgfc393TmUNFQkccjRpSahXSCAdCHgUrNr95o8WfwLix",
  "key2": "4G9wXssGuhX1Di77HwYgCf25dGBMxhTFTxJvKA16sfb1P2vDQL2mbkGrC1QKeFBhCbpLASmMV2YdJryrvqmPsXbN",
  "key3": "DL3pRyqiyvK365WjDXcWfs5WVrr6FZUVJ1ZtFuHdsJC7rsBU8TTYnaRQBMW2kfL4JZJGGTiitaDtNyf6HTnCLgv",
  "key4": "2wMMK1DitYN4Sg6QUm2AkQSoJpRRcCBF7cwtCXauxSoH4VWAb4yVFSKEeZds24A1kxX4L5Kehrka6p4KZP5SUskY",
  "key5": "5YVZyUSZDXLTGGnL7cpEP1pZTpGGmVKgtxKgdfPaAzYiDxpH8JSXcwongg9Bqbt1mVJLFeoPvVSanPuyoKh2q7s",
  "key6": "4PVkiRMvGZPQk1m5vwoQegKGvEjQPcE7htZcNuTg4ZwBHPCk4WpWNqLuJaJHjUE6oGfqibGizgzBvP7iARuxnCuu",
  "key7": "3tqgdda36JacogtFqHHqivTovPBXmcjoKayx8j1PikQKdsWSZPCEHAMYHFQRwP5s8Rsq1kd1jVvZFGkDhs8VLrkR",
  "key8": "5EKByjFYtAYguBgzXrDKAA6aQGbKzv6FgjjqotL5KJt5LQiEZK4674dHUv2uZ14QBwNaQL289GcyZucyCpTcWsnM",
  "key9": "54JSRxmAznPDYFiVcv2M8xmDbYSWPSwhG4g74ZWrRKzgeFyRCBpihdBTMX8i6UXowP1QNrxU64AefbRwARRrazZ1",
  "key10": "ufqPFnhfdRntjjxVvn45Gktr1Xjhr2AFsytQPH6rjHzj1JZScWatP1vtwJR2hws8x9bHrohEKf4psbZwTK7n7B2",
  "key11": "LSCHv5sZnEhPmE7tp8rQJyHdRWFGFGWD298KGGFk7KjmxcvKbvBVeAXzX8fMAom39C6VF6n8zDxbqXYW6X25srV",
  "key12": "39qkitDr4YNum6y885P78kkytTMWiUZihr3MNCnYmmkd3puqdtvaEtBCkspPbTNuVq84XYxjA2Ks5yXZHDFEUBL2",
  "key13": "3aFSRGpCjBDBuFAKbLyoSYKh2t6oYnWkPuyAYqjcSDc59jRPkZC8N4fzbhJGMC3ywyu4AYj7jrVDdfnUne5nHCN7",
  "key14": "2UNuEYjwj8k9jYEgCxvBTt2XsVNtXKpwLpNEzte3NmCxnHxWnkpuyzZgm6ADg1wFNAoPnD2JzVa2vxNZr3wNy4X9",
  "key15": "2GHQ2BTiGsmxXJAo1YWdsRSihZrZWV6oVDqceQrzawHnqoycua5U9pPdWVnNx3zvUvyxidKg4PsStj2dyq2UZuY1",
  "key16": "bBqEUDT34Dkm6K1szaRvemMYTgoSujVajBf1nphExudepDYqHpGKoiZnuqqZ1AbRpEBJSp1UQbSs2ZLD5Y641hL",
  "key17": "4wkZoQ6KDQ9dKHc7ezYYPmviyRGzMpakSRwEPi1HoEYsVMGMi4Pd2Xaj9FRxGKtCo9RFCHbCzndGV1NXf9RH51Gt",
  "key18": "2qvtUQwiujdR1hEvv6Cm7JZGhXgNid7AcDYWEm6UNXvd6gJWNLzaGaTqkmgZwbHXmC9cZR26KThLStB8HehFHTd6",
  "key19": "2d6mfuNBeCkhjC3cJhNGSGVs4NZY75JdNVJGJBTXBZtsXbs9BiJMBpXQzXU4agRnqzWuC3GCC7Z1n6UmFHWHxUJ1",
  "key20": "24ZHb9vGj7mUp4n4NDhEXrmr9YpcTbqrwm4G6Z3BhtDrEibggmoa6RqdGNqdd6erT2N1J78aUVAw3r7bwVJJdZqC",
  "key21": "5ZeGKfizMkZkUfgv861fJx2wncPc1w93yqooDhJMpuFDhRGBV6t9FitLGxa1yU8Jnj4XhJib6GAL7DZdK12BkEQd",
  "key22": "2VdjLHZUSinhwTUFhjPP8Q5HDqj1C5UX8YADa1a5tDp2ViMWFvnEvcTpaUXhoiEBA9s7phs96ZZUi7XtUCy1ihqP",
  "key23": "41oaPoP4D1oLminmxTkAVP3KcANvY9vRaMh9egpphKRdunqdzgiVvjsjnAHrQtQNaSyNqqiMPSbPteiEb9saivYU",
  "key24": "fQXbxRbRv1YLQukjZagwpmfbZQTwpH7jPLcmB1mdwyo2Yiu5QFSrRXjn2BgWJMsJmEYRqmwBb6dJmoemowJiWGX"
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
