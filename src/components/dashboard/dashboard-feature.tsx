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
    "8yQXGM59wtiYtjZnrnDs549TtCkggNqBWY9MchMCuSHXj2J9FkCfajVhbUqD9DDmsDiPs7ec65T8AcADjV5PMY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rZgPgJ5juDx3nyUMxtA72WrJzd6sRskZLx7kzAYX4mfTR86Wk9hcCce1WQqmQkXx1bHLUooxQ5MaEpkNex1uXw",
  "key1": "48f1rQjdtAgN2cTow2R7GN2stmk3juKJKU1shdioXJF5TFk2x7BKCJCdnjeXZXiW61gYUei3awKjjeP1uVmc4BaH",
  "key2": "4HAkD3raCc89VLyhicLA3jGmpTprQ5auFpUHKVTxChvNQFGSuE8NvHz9bLe4EEfpfryPEeyCGM38eJNoTsmgCQa2",
  "key3": "5hvx7Z6V4c6ht6HYCEzB2bqEd13LyWrD2LAL5GztU74Piy6T9KDfn6LLKuxBBQnxD7mJ9oVBvduJ5zsW5kWKTCGM",
  "key4": "37miWrjosXSLGGx38S3nS2GbtupKiqHL8zWXoK9rz6t8xHZToMZiZZmb35cFTVXH7pJkEGqmey1Jqcizf34M34yr",
  "key5": "5vxkdLtcM4e5armGqmjXnoJPhWSg8Bu15wHUPRmv7kwx9ws8HGoxziK9YS2md3Mq4FL91sxsvre1akD1Q9aC9Nj",
  "key6": "P64GqrzFLJfAg7vx913NCjSTAYvc6uYPEZ3UPxuW3raEqz78DNthSUweMet8v9EYhbXjocCKdBrx92hLeATvhky",
  "key7": "2q2QDqedWSPHWBYrsCXcgR7UE9R7BYRLBVDx3h2FREDtkvUyyQPpL1F3xoXeQQKJ7QC78WKhor3nzNQGCZSzJGB7",
  "key8": "5uHgvR7w6f9HZuDpJjfS58Gw8PRd7jHmahMENNEKLDjpEp957WqiDePDVVLzBa4qFCCuT7aHsQUfEphb6umYtFLK",
  "key9": "5NpPQ7okj9mft5z3WAM9fz3L3144YHVt3mBoxdnKX2j8h2UK65hpHuwF1kNi3pbD684yHGNsbVJwVrtmhCTNwoW3",
  "key10": "5wktjVsEwedZt2uR6hnKCgK5j2XUW4wFAhZVrtVXLRy5TuHHUYQCzhVRqEdK2NCgCzUqsUGttpiZdAuviV2yJ8Pp",
  "key11": "5kkcGGLweVMHGBDSF3ZzgBMG1tUyDxMxq7CEcG64KoFXxEfnvqqbD4naXnFWzdwHbQcaDfionKYNkiw95a5N8S1h",
  "key12": "5HkeTKk4xL2KctaY8vkEv5LrobLXjhYdhSNKmNx7aRDJiMZwYXcrNch13DiNUWWrXeYVu4E9zxsxivjnkvrA9bdb",
  "key13": "4TpgW2MyiZTWivSfvnWALsiouBKnWkoP4K6jVmjym1sTG7QSA47e64QmuSxdXKUooiEo2VZSgEHCKSHg4Ejptkfu",
  "key14": "2gdncvLJzraTJv6xjbEur1pvweMjatYREqR1FFz8paYe8SVBN24yg8pqWqCew6rE525p6de8AyKMwY8d5rPbotKp",
  "key15": "5Aq4FEd6BZZMt5aHXYsdJabhJP9PzMj5zs7Lppgvif9yRhUCsXRVv2WoGxiStW2cwzm3uSZeXUCbjMGVwPrbBDBH",
  "key16": "3dbgeh5mbd6kroXJVyxJ92k9iLb6NeG9yutH8FA53Qrr52i3ovdBPs1YdUBGfaDcu9RD7RzoGb6jmcdcZfi1NnuS",
  "key17": "3mKAQQsu98SmDrCpjp8iHsVLGeGjhonKKZsWh2BCV8PimWphdNrXXLVWqz24iKLjkxkkbLcqKbR19DDEarGedSug",
  "key18": "m78vT8gEZSeVqjjspo2PYLXP8r2epCjY86Zr4EiKPxaEVQ7BbgzrkRjtA2tY4m2azh4U2L4th9HznUNAx8tVc9R",
  "key19": "5cLcSsq2FLT47avK4KnfUPp628o9ArLaCyCHcPmAfMXY4wEjXTqzPfpQvwuY7ApWNk7LTxLYHQ3wTUVqkGpXkyGa",
  "key20": "3A11e8SP4JoHP7AueGXgyGMg2yucGpQbHE8BcqQcyS5e6TGSaNr2oaxRWdv3yiemJgfnf9mbjg1gcgfiWc43P569",
  "key21": "64YbvggGKnv2MXfCQFzApwP4TrJshRfkdZNJzRuDTA88idjc6TR8d2YY8ULy3s5NCXaB2GLDfN1Zsm5MNNsPeDS",
  "key22": "5dobkqes2nDH3MMQm9PvSktQxM47zp5eA6JuxKbX3UsKquqGsb81fh7UfoazJcNDwym82QiXNdVCUH7DtCEj9hWQ",
  "key23": "4mhzFkvjQBFyesbst56pi1wp45fQGhcboHU1n2R1DTUVFeipoPevLSUewMJPSB1WxzeTDUoARuU9SMBVEWmyZtpH",
  "key24": "4f4TZHo8F8EN2rB8NKxsFW7x22HNqZGT1joCPfTr65GE6qDDhTcR77Fy1arJ8ZVKB7EKiDYJt6SCVZzf8xZGyH5o",
  "key25": "4ioxx9smTTvCgodUPefU4s1KB2h4CbzdG42Wr3KXF43vVJq7755F261FYPpovCTRPMK1EQdpk7AuGtRqksQkv48L",
  "key26": "3D15gSuQTVYgcHDrBREo1cGh85bYFGdLJ2w2q6X3fAWideYxCQ91RXVVknUxhmXrbnTMxpEXyQHi4bZYaoXnbQZY"
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
