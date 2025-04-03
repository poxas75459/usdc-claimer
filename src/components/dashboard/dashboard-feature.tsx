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
    "UgUfpaFUVmzHPRjgQStQua8FyFQZWZEEMGYJsXxYuk36qgWTWJsFKjvV9xJqHfmdCFhctoNPRwtWCxMDqxfNmV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K615qpVKszYstRhLddE5HEqDocAaED7EZosS1dposnvSuZaGBARB7pwk59X9QAQNLxD2HL6srifDQbdBRuXu6K8",
  "key1": "4shbcr9a51hw4js9hUdpepxATGf46FBtFvJXch8bi7sTN2FvoCwQrju2rKQVPHSqb7znxhTa5Kd9N6yv7AAVhAi",
  "key2": "5hCtf3uLTBLwMUSjTicQcG99e5cMET1aSjFn3CTQh4xGrXSn3tfAAC9gu7HCgH6S5dFnpumdsKTjyPNJBmaRNKmT",
  "key3": "3XWRVNVLc7qh6dCSEzVjg2cXfJHeWKiJofk8z34XkwgaBbnCjDLFh2L4794csTXUzg6iEdydkjvAMB4qgWcKHT4Z",
  "key4": "2VqV8VzbiT37zua3oJM1MtuYRYgNMspmnuRFCJriMudGwSZdxqKZrH1ZxZXfcY3EZusrDyUfouiTjPWV7oFGRYyy",
  "key5": "2dxJJEDC5ua3sSKTUCN2bcXSSqeF3FzoJPVkDc1V44SeBAG56EzxBhUBBQpZZ74JWzukvT17rvUs6rwiK2XryxXT",
  "key6": "5FByfisvgaqnjctZvw6njLed31XAXViSQwq31Yo5PKgj2MtZzYQoHg5dGoQ51WmE19PQhhnuCF2b8f2WPyauBE3J",
  "key7": "5v7UakT2Tq5y5B79n3jDAtP2rVNNT3XwnWEp3YaXo4fMNsM9Wog36CfuL3yy6ZaCfZA9ap1NtTcGHi87UQW2Fu6o",
  "key8": "38bmcYM3847SQcqVgF7zaWtpNhxCUkXJpgy6B4Gwk5H1yjfVZEsRQvK2t6MK96dHp1oSje6bd67CpNgupJrjDweC",
  "key9": "5skUYMxwH2TNcjijh7HeotB8zaGF1KuTgsEqTYCMZruEhNCRxp5r7TiUNd15RPAfhsxcRaZzsXLzqit7QXbidUwc",
  "key10": "3i9JsvWbwVfM7gXeh4DJYSLMyoA4bFhr9NvQbfVyzbV4bPCaE1puAsdM1NozQByoRs5taAbnbZ97TVJ69LNopQ6Q",
  "key11": "2zmRhppLTbkLbUjz2u3zhBnQULvDrzXZKS3oUMvPsMZ8rVCWkzW9UcjsV42PRZBT6bc5D78PD9UpjQvDfkca58me",
  "key12": "4cko5nAtWEq1GBwiG6QcnmYua42ayjFAvhjxW1a1xMBQxByHRdrGEHnUJzMdyKCUcht1mjgLpeMWydKvwi6gc4tY",
  "key13": "3d8nSJhwt9bFX4vLAsWZSHcv9zS3nu38BhoJuuFgzvXxQ5DF544vbSrpdqRwM8xqCreHM4rsjfVL2Jxz5ibofwZ8",
  "key14": "4WCpa6xiGfiHe5XRmiSZcZ4fQsPJGYsRR5NRaBfiN8goKtJCx5HEQ3zxHzxQEDaNhoKxXyWsUChAP2duXFS3kLYb",
  "key15": "45W1sGUcDvTxkZ8hdrHKTVWeVigaUPnXYicf3KBoMRWQ4zA2RMZ9DDnNsbL376Fpmk1txYRbaJywCK1cP1dF7FZM",
  "key16": "2ZY9gMVSp8DiWJsYhoRsBGruuTPE9zrjx5Cbm6mkisfbbwbUYUBGNMTBcfMombTzGnMVMkgauCrpUbRgqZe3DJgj",
  "key17": "263n3WEk6KHFYf5iFws5DiNjaNoFp3NMB3iTdM381qatRtNimv9W4aSBAnNpqcUSRzdprXjJWvhVjGdt32VuLGir",
  "key18": "3n3r1Yjggcj187cd95W9qtHwFV36t4fUj9GwAaX5rJChDAgbZwBvLjm3LHCeUVhHVsoZbhEtanZKQgk2UPGstRMR",
  "key19": "mBri8j1SnYcqGF43Ng7QbZXJJYLyP9QWkdi2TdeeACAW2n65z4bGW9iFCTU3roB9bEoGJQaa85uMxMGEa1GcEcW",
  "key20": "4fQ9J4u52gY45W55Bw61EKV41EAJak6rPc3Q3SK2pH6Jx3oUFk9EL8snchDDgLM7GcypdyT8wXa3sjYX8dQKTtzd",
  "key21": "47st352HrhqFjjkHNsqmJFLAXaRUiQzqZu1a3Qb8PHg95kwVxvVN5DxAkU6GLXW4yPyssUmLM7y6U68Suf5wPRgL",
  "key22": "37UzPPhCmdDK5fZHmPejfQon3GY7u5wVTEucMXkfXt9be7YEr2PTCg2bkxPdd7VzXFcbo3DTiX8MufEbBXicYAn5",
  "key23": "34h9jtQKQJaPGeASN5eDpfbJCXxkbNSHgqUxCYQqubHyscbXRDkAxFV4gZhsnmq13BpztiNuG1qYeSAH89Jga9i6",
  "key24": "3YB5h8FQaKiBtLSsCiRBJaRkVtRtSRkzxF5eEt8X5r2LGQmHsQ7Hyg97jTuguboHiPFZPy5DRzndM1eYLfba1qo9",
  "key25": "3hAv7gAutjE1yjAETtDPoXrwCzSVdoeMkADmavfBnFsHqiRGdZgTKHvtzyr7Q1khiTCW8HAKAxytjuEMFEqK3xAR",
  "key26": "48yCYYgZ2oYURmYuEqZk8eUB1DqQpNimWfcUHzreQfrVkB8ZEBp3LNWxZeW9q1XB6iAC7AGPbUpDFsfXcNHziSc2",
  "key27": "5ZCdUMaahXZbwYu1zDFg6od6GkcBcYauN4ndaQhdPa4AZc9DCdfT5dX7vWumohXyNmEV5Si3GDVAE2QGsmhXRA2o",
  "key28": "2gM874D6ieTFUZRqHQzm5iiVSNBit3Y332y2ndHgA6dytcsbqieDpAYsK5T4QRdiJfeDVBjyMunsLwZxyWC62URc",
  "key29": "4ZYGR8ipn6cPEhUUbTDWNdqh8i3Ysz3W8UtGngLcXhPf9HCj187hpy1mKJyUvfkMsWs1JxPG1bP88kpDqzPUhMN6",
  "key30": "4ktvgq8mp2nf6RLDb7m4i5qj2GGFnE8RPqGPAu7yUzZaQvX4QKUT6Brn5yU5qNih8fqvbDmBgNYCCRcFkPrQ92NW",
  "key31": "C9PLAFSrnNMHGym5YaEuriUGbBF4HYWWE8XL6hcRQADhcqodRM1pp4ebxdRx6Nf59Qr4oKuWkg1gbhGeYFppUYA"
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
