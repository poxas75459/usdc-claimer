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
    "66AjZyk6JNrAnD8E7wici1BEzDdFHni1Xdp5UaRKbcnQDezgtxj8fURifs7mWMDdKLTxkGRqQRsE4XqfTKh3kUCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrfVF8tR8ChsfVimksUCKkyzyS8DZAcanNJ62TEa9pM9iDow216MfRsHYxTHHN1MxDaH94p9R1cSgbUcoGhAXjW",
  "key1": "3k7hfC1YRWoH4GAgw3v6hQBcnWA8pouaSEcC9KrfcxDVULMM4KqMJBr2ME1JkvdzSUhBd34uQLbt1FXrmdCacNLh",
  "key2": "5b64vjj2A7NuAPQxnF5dGMjDEX3PJ4b7guue5tJAToYA3cQaVVy9HCphpHKdoVV8szXkyuuQjFstwY6USd3P8hki",
  "key3": "5Utfj4LejDfuuX1T8iNezMugGiCViXGHi7jbq5HEQVqbyPyAMYot4c3iG8ZvbTZJHkTxXKceFQDtzPjVBE16mEor",
  "key4": "59UHkqcELQri6AcEiguFzJKkLWKvzobhaEDyqkPJy5dvGn5PLbWVEv1tZRYD2Nu4YAmmJWcnQ9TRMTF7pJX5f8Wv",
  "key5": "4TJ9VPxXCZNvR24rq4EmVzNMCBXAGZBj726fqHdyTa2KMSWk95vaJqf1i2MUkzWDMrWYcaiZFhMJHXJfq4jQZwpU",
  "key6": "AjvgPsJRzgikFyxuX2pj8hDpWEkBT2g8c7giZ7x7yrftHXabUyPUGQMSHXbxHMuWzCQ23NzRMonMSWL9H5sMrvs",
  "key7": "3BiCqJVzVzhzx9nu1mSY4K2q39TJNmSe9usXHeVECtbft5PKnFBB6rt7tGARvR6DH9uxcHqC2bTBmXCnsBKtHAei",
  "key8": "XMMNFGEG2KZGpCKU8G3Fi8BQFzNNaHym83v31ZbfbpFSnJ7x3j7txMKModhpW5H6cVKiN2UZAZJ3fALt2CzcA8F",
  "key9": "2ciFcX3XWcC3MrgDBhsMN2UpRDEnYPVNC6Nhdu5TQ7Zm9mi6ByX5UVG4FXZnQ6fpuChLMQdGKdrJnSmCszYmHtPz",
  "key10": "2pC5r7tjaSDbCjRZxyvrV7nv4Smc85wga4rJhz4TqENi6ceC9eE2A37nwLLXkaGQgpCEfgdWeGg83uzerZLNAbf9",
  "key11": "4F38jVSGxUGyX12V8KPk7BteKpvoByEJ87JJqYPPCc3j5nHGobdF82Pr9fNMEZ7gbdDCAWknncXsFjowkkiV3S6o",
  "key12": "48PnjqsgWf4dqRrQ44xRXKduhumyktvh4V1dtmGDLgHPAeE6eGJEzY864BF1je6TQkrRS8HRHxpi1nXxoqozKy4H",
  "key13": "659RUtP6oFhVjmZdYMHz1AHWDQCfLXwGTypa8orFKfSk1oXZgGJmMvgTavRNTaPevPZPqxEBy4Y9XgZ8XMGcPWj1",
  "key14": "4kUwHbjxGibpeBrtkKadC95jtuusaBBj1Mvr3ttbUhFhyz2rCdcgmti9orpsidH9Mt5zkLT9CLu5u9yAaknAEAh8",
  "key15": "5jRSC2xyfo5N1io5mWKbY6bnLHFCpu8p5MnzQ7KXEBR6fNcJUSojUayWaXPbjXM5LRgaNM8YAzLrjugo3cJEcpuL",
  "key16": "4JevJnuyNMEfvKNaJuHvwAbHXYpNA9kAKo6QPevia8MTxuwj66QvbaGgHPHVUpnrPKZdpXamaSiThDgWvS6TRDc4",
  "key17": "5a8kWeBgmVepKnVGgSvQSxpo2jTAJwRy7BiMYwgvLAexjjiShd8oLXqGnwzhzp6C65Ra2PfEXxxPaSU7sD1n6KsQ",
  "key18": "2AjfxxanmkkF37cHYvpf2U1bSKA4GWRm163ybw7jus7T2ZymUFzeKxGTxK8VnoJ3uYhtphQpfUaPzEjSjzrxQNGF",
  "key19": "5QQTQFwHpWHbwKr6V2sq4qXW1TUbySePJivGjuN6oNHCC7TC2HikojPr4mCZQGBFG2y4oMHwvQWrzmsBdiJ3nGz8",
  "key20": "wjpSDPBzPQweJb96cttyx8Sjjj3rPhvTjB8bpHZaU5FuGtZKPuLqHoeQXAx4Wkw8U3enSRYnin7qRyFijfu82PP",
  "key21": "4KFPPzDeJ5avEkh3moYWZc7k3pTJgpCsfX6Nr1iruw3aGLixkq6yGiGAj3bvwE7wzsL3V3MtANvjZXQrST6U2Tj1",
  "key22": "26PTh6XkCC7yTxNUDjf52E773Tp8S8cbpnAAABVF36sEPAdvuZdbgcc32XSFyeMN25Z9buC5yNFoZwmeqSgvxEPV",
  "key23": "5SVihxEv8ZjP4jfhXZJnwKomzekfAD1FvscmHLfppCQR5i2Wv7TWr8aJRG9p8YCVzdGGjzTmRKNByHtsGMNDBMp5",
  "key24": "iipFXjSafdUmpt2J6kKt5yUj8Lqhc9iEHpTySUyTxYUgKwaduEqJjyahqPF2gFB5ooyYxZSLcZi7YtY4Gk2fJcM",
  "key25": "jw6PateqD17r3jogCXSLaF1A8sHCMwiw9PmSVNUY6F6LL4QJX2nms4MQepnco83b3T6RQaccGuv7Mw98cbmzUrh",
  "key26": "32HBCBVMJMCPb3jbPqDDrEZWVeHQSD7fhVbst2ybj8MvFUhqt1JbXwcg5gqti9Mp7hMsYog5gXR5zqDGWV21gc3S",
  "key27": "eXk1qZQUAY6KRXyo9Ju8rBvXhfNwWD7FM4ZW2ataJxfr1Lr6Kt75b1568Ec9g2B6nghzbtQnDY45MPZHWoFkRsh",
  "key28": "4Vy1UBPS1yQ16PK6Dxzzx4xGkgchALyvxRz27mDQqnaVdYSgHghoJohMHh2dh61EpFmAC8pJUNUBLvxLqbK5AskJ",
  "key29": "3TYjMCGj7b1ke8dhZxDguKMrDf7EcdEuWX24NXizQxHyRwvJgysa9bvMRWkUDbrQYyi46P1SmV98tuSShJM94sPb",
  "key30": "KnvKQhYAL8zC644TPtmpC3MsWRPPtw5gHcpiKarb3pHU3wSxjRhYmUovHFt93cBP6zBXBumhP6SyH7nWiEtWayB",
  "key31": "4kmz9dRvVqzVboVsefJcixmcxczYUeBGH8j1rKk47z8tzQmHArni4d1hRWAFm5L2cGoR2Maeh971UCJYhrkmGYrN",
  "key32": "63xVcJz2evZ1iu8BtxtjG2Rcs4FHT2RvEBvM8BHY2qw53GoACqbyuDDXfF8Dq91nq1XMdbCBJS15DLWqZqTUtiqs",
  "key33": "3ged2Zvxn6F2LcGvAT1koncPnMBYLiNnSamccaCT2JZo5Derzn5uiVZBCUn9ijBkgcs5MswBkW1Mwqp5MhLCwG1R",
  "key34": "42N3rPSVhsjxxFGyQpMAvfVEY2HNaihrLCtVZcXdS3Qg8SmgV8iYwuy4iQSyMLnvzZyKcBaXbHe2Dwzj8k9GgNU2",
  "key35": "3GQeC3MTsbtQpNAWA5srhcHnuexCUpMdqFFNJyXSrPxviddQKx3v3CXjDtRAJ6cMhJqih4FSKYUUkV9pwCcaWMPF",
  "key36": "4fT6kf9z96TJ3nusM3u57gCAC2Cci5LD6CFRZ3QBHKJX1CoSsPw54B7UqfMpP2AsRZbHiwkEqiajoUsdNt1BQ1bm",
  "key37": "293gZJxYwD2C5VDLBoGwfBW9XksngqzNn8ryKL84iTQtE7HBhKWbykEXgC9C5W8dC1SKPZTftjA3v6bFokLSTsho",
  "key38": "sDePf4QLoTyvTByupJi68qMdPB9Y9qdmGLZuDNryMubkohXsYLctGs7sdPtWakJmLJzVA9B2tbq9ke1iHXCeTVS",
  "key39": "m11AJ1JspyXrV813JYmikcJWjftkex6RPVmrygptTVbrHb1hhWB23nK8vc55ywGo5QhPUL4JApf3EhESexXfAcz",
  "key40": "3rd46tCq3587xhMQf6yP6ZJX4gZAsVmT4RzSR1grZLj7fwVHUpPxb8QiHaXRwaK8JT4mMG3zTHiichUwDitbRWHK"
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
