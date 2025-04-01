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
    "37TWfHLxr2iE2RBKweJ5d75ETQ1p2vpbBMw8NgJ9GBTm2BCfxcUDPS17EwLQfHg4ghv943zu9oUA7jFqM2SJoCy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVyS3nfrxaHTFakrfrn1gBqkxaXoApt1Cye1c84FsGioniCNB1gxvgMUv4nvn9BAPrvRdy2ssocUm5Q28zbQW5R",
  "key1": "61sHpRpErqqDPrVTZZy6p7Jw2HEGdThWCxcZMdF4v4PzbyEitRvFJJKJtNYJuVwgRh5RUKkpUU9AsENjaVN3bbP4",
  "key2": "MFbkQ1hHDRvVFy3FLpTAihLnqsvxBPHpXtaAvCoEsa1niSUCqD8c8C7AJ8oaBmEcdiGpdhk9413hc1FSynFFwva",
  "key3": "35ZmfLP48uxAQBmy771cLJLRK1qVJXj6uPY5YhfuPQyJtySA2AxAuiVjwj2Q17QRUDzG1tigHp9hL5687mSK5Pq1",
  "key4": "2C8pyAfwEeFYLPiGVusB2MAy4EFDftW61B68uSQEsCGpwGZn6gxMKqQS16u3Mwybuh38CQRhBhQ8Uqu9aKMjfKYn",
  "key5": "5KyUKvGJnHu5RiB4VDFVniVoA4XoJZmDfN9QbW5LUK5sJasxoFRnzj46UQb1XsTk4KBXLQmConq1n84sK4hmTpgV",
  "key6": "38cpDdwrRLQ7bR786CWqpixtiVfKZRoAVAuGWSkuHPPLGnT6RChZA6Cei7C1gePzhZEffadmFYJN2jcPGj82AUJ2",
  "key7": "3yt8y2Qj634FttXoJgz8yJKWm8SGuy5keUqqyb2tLrZ7F4oGpqxpVE7b2vQQKHBtQJu5VaNPN6MWuJVHr2s2Lu2Q",
  "key8": "4tr3qjBPHaMVmZrhWPBq5UdDJ3bMMZKhwMbyPdzuaMca9fRjBRFEoV5p8nVsi2NwDxGNRJ1P7ncNETiwqfnb9jrX",
  "key9": "kXCaovVE9S6pG1pZnTSuez43UE2GyfgAGDESnaEJRFKRjLANaVdmdpNG75wsVaCKQfMZ3YcCFKEjjkB2X2WcPeW",
  "key10": "2rQxYM5fiKSsecMe76PdijyTvVNCSssq3HwfGCaMnNMuE5kUfANRgS8RmSVsKW4LxiNjEFzrNBjAZVMcrjfjcxXR",
  "key11": "4YWvttGxAgVtatzwkTG4wgWe7KX52c2888Qnh1SssvXGpfJc8mtbVa1Zgpz7ixvnor2NR5K1XSRA7bkKMRWZ91fF",
  "key12": "5rYYfyFWQJ7SX9wSgHqxYDQfA3AxdD3iB9VBKKD4UxUQy6L5w8JMzpTHjYhDHoHNwGhms8Q6LpnufFewjg6cDS54",
  "key13": "41w9fWRQ6ouN3nSBSPnhhnLN5E8Ke7SC8GhzXgmWpiVqedwtyeqmFZDtxBhv6cR6PCRS91YC6cLStMBPBejvpwGj",
  "key14": "3EwDxpjseK4RyhjBByigmaE3e6DDJSJd5ZioJWDNDRsvFxd4HQr4GXLvt6Q1BPCgtdkZDPFhRKf17jA3N25JybCk",
  "key15": "4266Q6wgD7ZY2g8Y5sFLWFBpnWtkmQtnyrmnu7pM7sxeZsn9iWwL1VhDdQJ1JnZXQWs6TD3RnohJJ2eefyuhNibD",
  "key16": "275uBF3vYEfRiUjfn4LLUfHdNSjrK6ULgiihR1kuCcCUZVC7kA7nZDGgz2WSBJqMxSFZSqhVCzLLWjhYbaXb5YAz",
  "key17": "4x2cHxa2fPB2KdAHScvpcWSzpafx4gmFX6xA2JpJNPiAjCaPiqwDEpiozvnJCJrHrc7ikskjja9f8Nt26eKbqPpa",
  "key18": "VNuSVYN4n3csQ42GGpiZWJeBH4bkzr9rMX9LXYNJZ1K2hqGt4wLXSu5zT15dWpuMi9b3SXjGav24oGNKVPUVrYu",
  "key19": "2UGxAs4bm49Xp3BxXJTqYUvhpt5UCArkEcbZBvJJkFNf2Hf9qF3eoyefRViJRfXr2nXq6Uz9r3wkV4kKifCB98Af",
  "key20": "M3Yf8pk8qWc8NHxdKnN4zPN6vCRRbAiSPS8P4sgA2vG51LUcpKFEDrzUVMisiAsKHwDzCMvSzh2Rg1snX7YtUEN",
  "key21": "33TAY2FAPpSrbgktzZt1V6gGeSgRVpK6NHKYe5VnQArLm93RRxp8Zb5xstw9PrcpasnhkG9yCc2gL59bjpSUo244",
  "key22": "FZRCeHCisFJE3YDKynKj6GHYaKefLWxiwWujFYgU7Y6h6a5PrCfDocjwJdFbiqCgKgBawLRaztp9MNqHPjV7cDW",
  "key23": "4ZWL4kdiY6jJZMsdTDsS66t4sB9KWqZqsCsjaE9E6au1rS4NKLbvxaVANfpXmPXDFSVYK8gisPmwSeew9Sj3xkUH",
  "key24": "qtz3Epzddf1dM3MyhzohrJJA7nYFzFCP9LUgQi9pvNSd55ZyTYqmrUBnF1UDYmrvB7LmN1C9pWjCqVzVRn3vJs5",
  "key25": "4rMyTiH8pWa2yef4zrXeqZsWMbxZkpzgtp4Pc6DRnkHYU3BKBziihbJ2QWyiyctt1S3tQ4o8UVpvbwwVaX1vQW9s",
  "key26": "uXdXuvW32nBWN9jfQhZeZNY35HGJ2mXQxaaSTdmw94QqDGn8L8FDXBbSGsf2TNw3gT6vYqxmfTXXis2N8YY1g5h",
  "key27": "3AVDAhxB2AJPugfbGYZvecSq8QmHoR7Fo6kwL6aBy7Vh5BpwN2st23YHaXbZWWbTt1iSqni7YTYxMH9DwebBswpF",
  "key28": "5KCcCnDE5S4orDLBLLc4DR5FBhk4UyXFxDAiyrfpKWvqUZtztLDyiUwMNGKVudfFUQEghXh1cTphqNmtsgDPPBnR",
  "key29": "2t6wDFniGgbhWA8U5LGtpQTZdw9dfLUz7yMKnt9fprF3vM1fXA2UBHJVkCmwFMN9MJj8H5oqzfyiwBaSJmkcjd9F",
  "key30": "2uNzsdMrCxaLSyFXFkFxMYXozyWKwZwuSmdaNV2yjQNiTzQSr9x35NkKLrd5E8aDJ7XxecAb4GJzsaAN29iezsvs",
  "key31": "4ztudwFEPqVNseZa8vJQ3mPfvK8mntVuUu48cgc3MHhc4StMDsYFojZoZBQhTGzh632qF74Qz6M2HzCrJVStKngs",
  "key32": "H2pD2hugD68QxFqqUMMA4Wg6onVcyDuhHpc8y5wwDaNcmnPxj8vk5c59kc93p8so2PguiUJgKhpt62R49FtNeSE",
  "key33": "29EpXjLNxkrVhzDpYEvcJEcDsk1HJYj4e971TXHiydmdbEBzU1sWpVszryzYWWU5x2R61NzKpp9HKgtE5dFXRswN",
  "key34": "31oW8cEtqjvzNnnBEKsnueDxiSerGNihmwwPYHUMc2b3LV7viZKCrmWamo9DKRoMcFBRNtWeoUxxY74NXaWEWwe6",
  "key35": "4hN3Yvsj8AJXEoH97fwmLRHFxRrAkQ89oUyPYpXWoQLeiQhZw2KmvHCJn8KiLZJRwCPNqRriMGoQFGjC2qPNpWRE",
  "key36": "4WZhfgHdwQbK3kSDvPGhasSw43GQAUJPyHAjRy5UWoafkG9TxFWhGbWJtwFqqtSWhP4hmJKmMWqijEHkfWuzWbwa",
  "key37": "5wJsFwYyF5vVyzAXdfgLfAjeysSkGGDKwTe28iV7wC2gDq9eTuMMi3Fi9Gv8BdAXuQ2vTs1evX5GEEfmH3rvs82F",
  "key38": "5uSzqSwzjPJaQdEa3RokdHbSNLhqFRBHzmnedwZPNtyRzJdFjyJRAaRHmrYzc3xkFQTaAoFEj6ZRJeuY413s7uM1",
  "key39": "5nywEb8kbkGB2guNQGYcrCeQGE6kEYGuiDviQSyZVRBXkb2yCb41CJyNiWARWx3LtUbd866KQ9bXeQcdDyYPsrk3",
  "key40": "5YST5TLhm51LzsUNJhmAEBE28rXBjkxaX95SW34YfNWZD2PTeNv2pG5W6vCFQLeXE3wUwmuj6eSPzqyeXUEzRzYd",
  "key41": "4QYRfWTfrowK59uAADbo1Po2RsnnzzPnTyGu77uQQXXEf3NtR3hyGqKSxWPVthehwFkJd3BseByosEAdRj8szE73",
  "key42": "5amQYxAr1BTkQitVXaWmqFPu3zXwgV2kyypGHDwLfSyYeBAdAqF93S3Y4FP5vpexMToEFq9jQFqLTPshKsiMbipD",
  "key43": "2pSy8wjc6Rzrkojj1dRqsXepnt4ZtNBkPxMZAPjzEHqjPX9ChUYTEn4rhAx8igwGQz6vm4yTdFzTDxkT7cRvhcC2",
  "key44": "TvPbreJVp39CPbgpPMYtSg8icmuWj3ABuKv9sNqbmQvoFUwX7iYRpqnKTrVg8MwkmFUeJziRmDVKv7Voz8QWQd9",
  "key45": "2S6Pr9U6TuBkVz1RX9zSfHqXLLWWDXsX68M9PGyQs3rv3BNpukeXYmcFWbUGBeZRFJZGP611vv3nYwsfxZanKQ2s",
  "key46": "2LR9vQewsbaJgvkbXfpLX6FPsmuNuVtSi492BSSJqVHzzqfMod5wfBZwKfu9b7uTXKrNeAAMu2HUWLUn9eLxDno1"
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
