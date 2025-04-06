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
    "5FjeXtngJ8CoyUTjdc9uQdjXnYb2NtzBDukdP9EFvorx77ypNUXRp5HW7iavEdFJFZkSCGnLksm8EJXGeuwByQKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E38Wjo8RgLWU69Y51Nsi7dPCXXhJW2Jo6jswr1jmoLJgmLoovK95XMZZHv1wqUgi9NwNCDSJD691hxfg8U8Eqg5",
  "key1": "5kFZzuv6Z3HticrHiTNNBGsZUgZxzxYtWrNcfngubzZEDnu3HFAqeVf1aAv7ZPGA86L8ytHaXhQo7UxbzBdW3LLZ",
  "key2": "5iqL5fP5EsJVaXVH2LbJXq4TrLMUySayPaawqfLTEe8FwXLj7rgkr3g7VvCzisjaxXNnk9bYXxJDqcDUo28wkXZL",
  "key3": "5HSxd31njmNMCgZeKsaHC9DmQ6sc3biSqKb8ZPAphff6NZebaTkTYMd6BtmVHdBR1oPN4LejbipWQbeGB3VVbzZd",
  "key4": "4uRQK9gBp2yKsFVLUuoqfw8nMgZwiPAsFjSdZioH3WSUyGun7WWpovDnQd7WtaJERoMZc8VUT4QqVx9TPbtwpFt1",
  "key5": "4pzdWEahDzmrADJJE6yrN9MFPjsFKuo3AbFNK3FYBX913YM8z64858HHg3jbN39EBYtQWPe28ifG4LZhLJrTTGaQ",
  "key6": "4PKmHV1Lbqvs9FrTQDueTohaxWHG5KM7L8zD3M56qzvzwQQSmzTPW7nvJ6GouHuqUzjkLGu3ks8CWYrbo1Kjq2U9",
  "key7": "zg7f59Bev7o252VvUgKcteeHhPcrAS1y2mrFDAZwmTuxk6xiwsyMqt8JAiSwGDud7odfHagFzUr7kAsNbNWe4Gx",
  "key8": "BbDiXgY5r5yBGVu9NycyLEBXbpSyQLtK6NfQkiV8usR3eJdBhvtpQT6HNUt6KYpKPSuJabRp1JfgFySpS5PPWC1",
  "key9": "2gx2BitdjC6NKvEEccPfybD7jYMqBsfMBoQMChCQHJjqwJNazMAPdTDSSNC6dBDSKXSJT6hh7s2Dxi38s9i5pdnK",
  "key10": "4WMcgUi3xLPArexvVmyd6VUisonjXkyhJqweyhb3L4jtJnABunwDLq6oJrDNn2E4zMS2YGufCJnpjuotJcSVnVKC",
  "key11": "2rtrCpTbqYAuvakZCzkbys6ow7UBT7PH9qQzWLt2DQUA3opjqE9MdvTvabFx48N4TSdvftcrgbtyXFci897nTdKW",
  "key12": "4XQ9pyZQCAWYhP1Re14owpsJTgUopmmEfn5yameF6JCttXA8foDhXNNhrmtoeL1Rq37CL3EYXwJpRfHuJhk3nqjY",
  "key13": "4pPhg4oKjknSzFDz4hYJ9UqSZ3K5gqYWdYLBnjxumk3yLtzfH3SFeUd3vG8FFDnTS5JGAAYEFCzjcGA1nrXUygK9",
  "key14": "5DgJMAE8rXnGqDwUGcMjvjwgyVuWA3gcP6YyteMwDSf6bNCPamvc66sFEDJMg6j7VW14AJgcUJPThaatot4upTxV",
  "key15": "oPqkQPL91f2LsS4AXvpf5YR5BEgPDb8fWGT7jRs6q9DuRT1HghttSfv7ekiuQpYhbMue6hfjNSs2N92BxKt1bMZ",
  "key16": "2xEaLsnUsqbSr3sdANKmLm9bVrrTm7ayTNJyfZpGxqCcsJbejGZcR5tccbdikJKhcWZYyiS3FYXaboVHPqGAPXfd",
  "key17": "35AGk54bnfSjmsgkWFQzAnheSzMAnHF8AKbqPBRMPsD62uKdoRKL2hcm9sPghYB36xYCNmPJFvjMU4bQ5zF51ekD",
  "key18": "2MUKjgqj1j3igYzfnJD3HPpsMprX7mfKGLWp8EC2sGfqKGEwYGk9VQwMhv68eKA7PFP4cvi7P2agieFiHiK5Civd",
  "key19": "321gfxpcinQ2JPbMjNKVX6ttuM9ZwTfMMYWSPNVu9uuwdZt4S6RrCUzc9pm181xs1cc6o1HFhpBERhdBZEsWaCKq",
  "key20": "2EzWjpzsjLnBRXZgfszzmPXsn9mtX2UWHwuuQH4uFswE7CKxi9X34tshfrwNMbYfCE14XWXHnZCKczwrRV52F1tp",
  "key21": "4Eb1iezywpfFv77iruJT6j3MCSENLyHp2umSYtGqk2GBJEUfJ4aNb8KdGhZspjdj387UDDaUYHmxt87R7AvMUuux",
  "key22": "47GjSwkBTZMdeX1W1SEYfkn9EY9ZXMHvKgE2zbYTNGVYWSiPYS4EZmsQjJTiaqpBPsK9yq72VZafbGA9xhUyBYzu",
  "key23": "7dZm5jJapCh1CeXfBQjQc7cgnU2RmV1tPLf8FgdjXqTUAbWj3FwwZGa1FNCQMp3P3gX8MTCHiUJuyBU6Dt6nDZb",
  "key24": "2JMiVVvdRiZqELrpiqMf1v3BxiEDXnY8Ef2hv58oYApTBGUCmC5bwSCp5HpjQU6LFPPMQUBtVG3c1apm2Bs9mECB",
  "key25": "56SxShgtxV4gNucWonfaLv76ZwLWfY9oDT8b1G7vSZ6QWnNmm1ERme3ivKtDfd811QuQWuBXquMteDRPz6qGG1uj",
  "key26": "NhJjVE2NMnTztSaDmW2UADMv6ySECVAKUbLmogmHkMr9RBx7ZRn28iPcDwHcF5nS8xdUk8g7SzKPBCkqGV1mSZr",
  "key27": "5EArt6WXgnBAbkMYn7ywez5TVduUuvpj23PG7PDFccj1tukoN523G9ExwETjUjEizxg3z2PQfFP74Bs2YWKPCumh",
  "key28": "41sFQEEfRG5mUmAUaWorJM6yarhoGtQgzkPNG6VUKUmvmjcoUQmJi2Xyjx4Jac5HVKqRoqU9ya8yaLPrL9mNFS8k",
  "key29": "55PsMqiDgHSmAZ8KLpfgqzUaD3phNZCFn9uamAKLSNBPoujkH4XPyw8iEWp3kjatLQkDCVbi1v6aX6AKcDSRUSRA",
  "key30": "3aoAZ2cDuz7mRaHzZEG6qaTGgKbeuKSoYY99kgaASGEgr9icuLeof5vaFa8neD29zJYAjc7CwNp5B7YjhHtA6V26",
  "key31": "5VeJMTvQFGMdfeKGUL11GgyoWAeAT7LkaAbUrU79uafeA1eWq8kttEijk8iuPC3YT1kQ4uKRBRjJPvvUjF84LouX",
  "key32": "vtDmyEHHzKKDHWqF1LnbAhQQmAeh9EJP3UMn316rdL72BTWJhRaePkgWe7LhnCVgfqeqD54MXwvS5Ldekwmjqow",
  "key33": "63NRpUVjxnh3NwXToVstVdz3ZB9UhbNzTBe5kaqF5mtHXFCfwJUErVnf2Zb1tRuhuAbZYymY1Wbgb6a64f6kDbcT",
  "key34": "4NbCffwFZa9utfHMab4EMeR9hrjrQQZWYYjJ3dFrJCJ6TTv6d9YxUhbKeSdt5cn3qa5dszZB8CTp5dE31VgAFY6s",
  "key35": "41pvQJKp2zEs1fYocmCpjcUMRbVmWcGPT6L4NdmE7StWSiKBY4eaXHnM5xtVnyqdoWyj1psfRia5mMJ72diDfdwW",
  "key36": "3GsN8fsCqPmAzVFMog5Am6NwpofSh8Zn33UbBEoX1AEQRfKAo7brNwyRKagvUmtVMGX1nEhZhgHcwLFwe2vZuJsA",
  "key37": "2fNymEpukKXj76urvFprLFEc6o9jA1oFZ6j9o4YyWLhXffumuGmkY8Twu1uG4t73XiWZJNFvTnYwEwp74iQdTJCx",
  "key38": "2T41d3QnNv8YdsgsW76e1D7joM1doFZ6JCYciDPmsVxKXJpibViT766qrbdaiBZH2EmtGGhJ8JyuF7Qz4NuPLoeW"
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
