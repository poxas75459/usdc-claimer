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
    "f2bhHJQBtc19YLVEMufrodckK4A1zFLpeaUtQ7uxRfA84oTUyzzsujehyzGrgwzacZsrvLCMPtUKmn2quWkhQ4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nUzASmziS5cnptT3qZ9g6HqsmENGQw5xjYMg7iU29xXdXmrAayA17yrDTJTNkHMWsYaFXeit62mKLGsbBq6a2BG",
  "key1": "3VsQCMMNqeDYU7NBJH4Lten6sQDdH8Y2BiwpCHdECS6ognX3EYRxQ8vWP6GB5VdTYFtLgBtD4WNHQBi3jebjbiV3",
  "key2": "4WxYYk1Z3b4NnHoXi6VpgMeeWBYFVLHQLBPYZQWMwQEABjrNnGekGeGKGKQM7UUVkRunViyPmXi8LkdCwDgcuUAX",
  "key3": "bTGPau95sAWyvToxnqKGnnWSEpWXz8LiRcHm4JzL3dhyT2R5G65bQ1h9Q4DLdm9VL1txxXa2vRqSxH8sHUaXeLd",
  "key4": "ydcGQUTuGWh6VwEYrTFxExTT4Mo8ZeDoTmVUpRVVR16XmmWjFgEYYoRdPLF31Nw1HiPyntbGS6hhM7U6YVMCkEx",
  "key5": "2aDUVSbqqUnkZR2jw1nKTHx29fkDqLT68j5S4E3t2XCHoFVC3VYosaWHhpHooPYeFD5KTtp4vbb7rG3fMSUjAjey",
  "key6": "5nzqMLKu2t8WNKAcDdf1v2CVtCWKsEESWt2ESkdkS371HB8kRG9rEbeU2QyzUkVy6XMcYjoCYvjbrWSr9bDauYBq",
  "key7": "4fbvjEQPK3KgoYJLryG3jhdTH3wrJYocZ4k42iW5s7zn6F3aVZ4oxRFefZwQu61V1sCs7LiAqeCVDeJYVjnZXAFj",
  "key8": "4SxgQbZPchYQJdnXvQWFZMgnRX9TvRJgmrNyzozVgkFn7nXUbbnxX6muCeDDXJR6gJ4FcAbjDtGbCKZonV8hzbbG",
  "key9": "4WDECX5PCvzeoVRPJ59Mj3tQJzSwd4WebB9fWxdFWz7H7YG99BTHXDYT4F4S7yjZJJVDyUfDSdnteeaHojvb6zbB",
  "key10": "3wjKogCogV4NuUg2yJVox78GcEj3eRiNjweRao3J6tZ6MYsgkERJjYU4hcpYk8aiurpffAgrNnYFN5L11kYpncek",
  "key11": "2KFCWuBaUDb7MV5Tpu5Bsecv1Dr9upXd5XYz6XBquxMb8DvRe7uN93RKFt2GzcrKFsXAuUxN5v3axokQHPjSEpBh",
  "key12": "qtY7iFx1QsdhTg9HNxQ5b1CwHk6ghk6M3PiarnBV9s8Eum2wqEvYRZofnjdrkD4hvi8Uau97mLvuR9r6xKJ6JB1",
  "key13": "4fXTq9TnwwVMHkraiLLSckypdx6vTCUgVyege4xwwLSJqbCZ3GSaVApuBS5dwUjvn2pKEPRPyGhDeYxg6i6sMgzR",
  "key14": "dmvRsUk87Nzyis7xZ73H3mGriwf2S7JBNMKDEBFhWBoWRXiBZpNy4fWSys1PKmJXPvN8CMfsLuj5QpYGR33WVFe",
  "key15": "4y79aCBg6wHRAYnYwAeHCSaUbxdzRKm4GKsvDLoEpZ5fz5k3Kk3PegK2dBk5z1z17HgbTfUWBxnvLd3kXr21mV63",
  "key16": "j9JaqfiigJYypSXPnhSdaMJAmtYtd8KxxVkBkkAgmhVmhkSNqVRh6KZiqMjyHZq12PYKHfuJ6aavYsNvSHXmWV3",
  "key17": "Zbt3A5zREPCSDYgqdq7k2p7mUpZLF3GyxJYzwZunVgDZy6Xkaee66jThjdJCzyCwTmcNdzPL9JvQtk6uYMRZbhq",
  "key18": "3JKxkyYQrvetsW7fepoPJJ7bTchxDxjDL7WBG2oaSktLWgAq6m8BGXfuUM75aQ28YWLpfg9BCJzhP1eQF7EoKWRo",
  "key19": "43G5jybBBSx1dbh6QwkHQVpK57Sj5maB5VSF8LYemffrn3qv43bkWzC1TA5RfCPcXtCDXKCPvKfuJfc8onnKTpfv",
  "key20": "3ASq7RgkD2xpvHjNvsRtTe2io7hRRcRS58r6sYnkNKj9kmFnBEo8nEk6FN8MQGLkcNRDdvrt2NMh23cnppg5pPZS",
  "key21": "Kbd7SCMhSULCsru1Ap1B4KnaJJgEyEf5WvfmPgbyJf5mDwFHBfoLhvE4k1ovYYmqkWTQYM1aasXb7yi1ij1y9Dy",
  "key22": "NNUJQPqcK1p7ZbvQoK3xkdofTAutMC2Ev5wAPqa2kpfuDR8nmnjEhcQWcjTfA8q7xtMxcSYL45tAdXgq5Qdphki",
  "key23": "5c91RamZB8rH4z4JvDam4YgwPEHCKhL9TVz79mBD4nBsRj4bEZRLXoKLjNaMLoq4gjyP4sAbuBd7jNfM5yyNgDNK",
  "key24": "2tTLz8LDdo1fTo47YfCXgPJdZ4aReEySC3L7oArk1YM68AQ3GsKtDH5KtytuvN3crwV8odnADA7GQyLjmKZD2d31"
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
