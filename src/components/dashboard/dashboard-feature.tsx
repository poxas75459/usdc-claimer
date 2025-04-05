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
    "66jCPkwhxorgcL7BdbDgHxTnXevzgyhqVc4DQGC4Vg28wbZFPcBBWuwZ19F9wmQwuAiKJ21gq1v8zJVLFFu26z1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FSaVNqmnFVLq9F4Ea5DymA2d67MxjsJ5zZEeAbZYBk9swT66xXUjiYA2eD1LsGhBpmwYtMWxmMV1615LsAXVS1B",
  "key1": "3uXPZgipJpAcN1Am6jdwhupUXJQBztSCCUyCLzxS4CwUcs9TRqP3PojZLPgm9FhEazxfsWfDR4RqFsnWtA2HCMUa",
  "key2": "4EZ14XLBDiqx2oQ2WgFbgYQqVAcGqzjjffawb2dxzcgLWvsuBY29gKZhHVto5v7bzwW29GV7UbcnUkWuVUWinBew",
  "key3": "4RtserevydSf9QtrpaMkCHWM7vbyzc963FFmmtnhoojywVcwEuYkxzmX6q9jPpseJm2RVxBkPvdkn6k9igrUxHXY",
  "key4": "5NkLw9hzTNczq2TwfLZ2s1EQofQrNv7GtghT22Nthk7HTM7a8oxzK359W4xHiaG3rhtuTBextxPGiyQPnonZKDU1",
  "key5": "5ANsf9JfbNVqhMjEt5sJHz3wxKUPLYgo5d9NZS5G8uBdZbug6tCHLWbjjPVc6abiYSYVg2HZYrdS81rPPuNbpzop",
  "key6": "2FGeHWWmsJUC8EZsqzJRAcsm3DTYP662CoTFS84DXcwfpmsT6sGPMamczAphMN2iJ6TppaYpZuEg7jLD3TLx9DBo",
  "key7": "3xY3qEEi9KYGuz7dqFE22NixaZEn5BqymmtBtBZu6xWpE6KtsDAdDdtvXDvHcHVariY1Lvzg4znmsZNWuufHRBkd",
  "key8": "2GVxYVgyGvQ9tdSsfG4tKCTxtsaYePedJ4G9FVpvhh6Fs4ouzwheka7ynwBXQNLtYgZqHo4fDcWFkibpmdkJXQB3",
  "key9": "2FikJJpNtNwf25jnwum6wwXuJusBxzPg5gWqVJFHuueyowZPRiSfMPbe58y4kcStdyQi9WHckrDoYsUnX98Ecu4k",
  "key10": "4knjWTSdyABLokkM76NjuxcLCnHpZbMPsKccBbzVtDS2oXZmruYkp2vMHWUkFefu5dQ1Lt7ZAAGJUMFxBA5VmU65",
  "key11": "2ASw5AiiiHiSZkDfAebDWYsuGHn1G4vpaogFeAeiQ7K8khjqLhMkKWep2UCDtd59xY29zpkCZmq2dm1ctZx58T8A",
  "key12": "4LQqXFEZFp1LKFtUwkW26hYt2QX4qtPveE6P7DL9jgSqX4XVsXkxBwMcfj7PryU6y2UbT4CVAY8xMaeCakkDK4b4",
  "key13": "5RcDugcVkRQ6A4EQL2xuayRCrYEFxNQPCpFndfF29RYLssYbzeBEC6QzCmQwTh3zfxMtv6jWmxZioHMLoLXTXbei",
  "key14": "4rGkGfFa8Ncz4s6j2xD8SwS1WReZjhRRVYfrt2J1SBdZ5NwHVLsGMubf4fv3caNBefAeg1GuNJzTD6aB4whaSFBV",
  "key15": "4ShTB3xp3SWEiuHA8H7Ln61xHLyv7NzVsX41FdhDjLyiNDg3f75SEsWYK2JNqWPqh9mUC1N4j22X5NyPiFASuXUe",
  "key16": "3Zpd3QpEVYMT1Q8czSFUR5EuocABiYy68UXifbi9dUe81VKNm7y8fF5NMWcTinjfK6uG5SaRqqyWFsPZYojDKJMD",
  "key17": "3knwhXbXNgaLf8hC8wRnNC5VLrZW6SH9LXiJ885sYEHRiHRti4dKtvMUHEbGoJLXGLczC7NFrkbNg9CwRT1Akg7x",
  "key18": "5ZxP3FMvLE7NZcoRm7A4i2Y3a7cPwY6xT7CqZVQnCbFHWsjNaupGob2VUHcyQH2ZG7opYcfn88KP8AdSNxGfaiXB",
  "key19": "BbmmXcZ5cAKtKA4kspfwEYQZaEMjGDXLQyzvXhcJxv8gKGQRdCrKeCFDWhYEskY8i2GU9DaFajGc6W4CZwHmVbb",
  "key20": "4ZcQgMci5LKpaN38s3SQzgqY5f6DXTWJdoUZm1mS4UEJWMK2YawkBUjTUbLmygiCtounJYuzMzcM8Kz3T2daUfWJ",
  "key21": "5T4s5q4KrT4LnRy63jwXpNtfatESYYVQXPaZKkZXrvGsNSNP9Zpzp9n34wrgVXMjM4CJRezWGzq3qK6ePhcnfPdJ",
  "key22": "44q8TZjKKQ9WKDoYvkSC8cSt4wAB3MnxduAqWRaVm3N8zZHcCE842Lw4uN6v5DSwEkCjUKbGDsJjakrzGbr6Bxp1",
  "key23": "3Dgkkj3CVKoeoLmKoj8pSnQc8MNo67NN9iFfYU1YW5aRrnUcjUDkK1vTDeBPnyySGvtWtoQ5DhnK5fUuv3mTmgA8",
  "key24": "3FBgvq8Jm4UfY3KxuGe7C3eCsfQDG8Byh6e3e73XXJqWFzAKGrtnABcg2JKU62YkyekYe664bRUXeUPFpgXVRaMF",
  "key25": "uH1q3S3Jy5anjA9czqFhcCR1N4Ewo6dwekG64DiiGxngUtYCvJG33G2CFamKqCqmwvCFisZUWeGRoixKrHm3pGb",
  "key26": "7YnEx1g6Dwe5K5DzEX8vqFNxSPK55cTBXBgUyXYgdKXymYwe3T62KCA45zB7jW3xSaR7PWscsMf5KEnsMb5SdXE",
  "key27": "3977Potiy85jo7PbN4oVJtbtJPxBjacVYyGjbEmCFhUM8hcaTypd3N4SU67iVUxaBTcQhimWTFKSGihTpZEFVTTW",
  "key28": "4mi7XRW2Bebx1k4LXWtwwvGZ1Rdd6cjtUiciUg5Xd53zhogJJdK1WdspZibzV2D54CRKhEqcDRfeoBjHtDT2Ltsu",
  "key29": "5qZYstespmyxjMxtB7nPyBF3EvhXqZ61hRssH47uKBXuiQPsPSJAQrLvDdUBG47p7s7zdKqY7LPd81Ck4CSPeh2p"
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
