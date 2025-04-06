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
    "3K8AAUVtU2QdtTpeM9rKu3LB3mSH7UJTvLBSJrMZ3C8AZytkdMU97bbEcpS5Gby4xAdb748q3dEUDT3UeHzZucxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrH5x2NRvN6WkGPL2tAKmS3ZwSDKWdDXuS3hTPUoVzgocXdrmDHognkcif1va9VxRDfZuqTPK94sQyDjFzfUXep",
  "key1": "2RXKaLxtALfwQeM9F8dSAHQi9ips1ZWxpMEiBMoYh8QanC5uArDR42w3PEnPzwXkCpFxzVWdHcoPcdYXyo1WsswX",
  "key2": "2YxPXLEedv2ujzkp3ZuPA8a7gwotL4vjWY3zGNib5EAxLD2atrvEDRQf8CJeKgccV9CCUE3hnDxXMi5Q1LLJR1uu",
  "key3": "5KmjNHiWN9h9zDQzryM2jcXQLfyzw4s8G6rwCrvB6mByX9W51vznnj4gSZptjs9UWCZZWf9rrnz6c51VTKftQyxM",
  "key4": "2ruTQHmGi9Vdwk2kA5JkYQ56drDf1QK94RT5utpoV7JB5mcxuvtBxmt2eh4jGLpG791n8kVpvPpYsUu29SkLP8oL",
  "key5": "3N3fct5ttmiRZm7LLEA75N7Ms8bnW2qSwMgDNUcKKGT4MkXjVxB4FPEdiTXweb6eaFmpoEyFJZSp8mKxXYSTYxeo",
  "key6": "dm96KUPyDKZyqNnkwWtdYG4M7NsCtGWvhiWyY1RN8tbPXe8euuJ48A6p4V4Gqt6WyXRbQHReRwj5EodRNAnZM5c",
  "key7": "4LYM9PTeGdmNr5HhzNmndMWvUrSz1afmcnoRYR6PRgdGNeXE57oStJ18EFbGk1xmhmFNCXVFMwAqfo79nWE1Apss",
  "key8": "4tXb8ejgsGDYZVBktZLMZA8PLDE8WksADJAzRrUxXBuCC2C8SCkzUGpE5Dicg4S8kdkQo4rrS1ZdGPdNBAnNP2PK",
  "key9": "4cxtey1JgAvkzHHaFZ3nHjLfRhfKrmpx8VAv4DLThrg7bLzzjDFSZWCPjbfVoaRxFXJxKJ5t3NUc686K61DciTWP",
  "key10": "24PQ1BY9s7bcG5EmpsZaPwZq7oYY22cdGgCvYAT2U42PidFshiT6Ey8o9s9cey1BjxRSpx7CMjF8DuFzt3uPWMN6",
  "key11": "5SzDscnv4TLf1xkqBaAtNwndTcV1boZNd1oihV5xDEt5RKZ9xZs7PVS6UajBc7AZsVXQJeFoAHPNVqTtHhzEejS6",
  "key12": "51SaMsyZCMfTmXTgMwuNqnvgsjWzcR1BE9xK2LQdT5EUZVevcY3PokRWwW9Ac8ovvuPtZYtziMqRjS9u5i7BRVp1",
  "key13": "5YHwZrNhugD7pNzjW725tCrFri63cAEM27fQWTrUGJUQui35MDoZyCd8STQzPNMspXzEo7ibZ9Bo6euJjMyZPL1q",
  "key14": "4mp8HTe6jyKduA3hPYsb3Fet5DnApL2KtLNqo7SLHwirQK1kGLGPfhfFvkAFhbZX4fA1iZkWz7HhHUm5m9L7sWup",
  "key15": "63KUyNvuNddTQmdkXfKtm8FDwmwc9Rp62cMpZbRuTDXvQ8UCkEXCXDCArwjQqvRVb3NwzX52bh7R6tM23MNdZBjq",
  "key16": "22hfPWWT67SjUuv7yfom1yZeH1Cv9mKg9XTPXkTfNjYBobsbQHaxhPUwcqbakqtFv1Bm8vnW6CsyvdhT1KKFXhBi",
  "key17": "5WGzwGzFM9g6wVudByEHEWzChWdnvttguS6tnKTM5xphdvisGnhjti8PCSJidGs7R4ttnka5P7uhbT2r3sTqWLvN",
  "key18": "4J8P4Ngs7qGrSEPVUMYzPXLLuQd3Rs1FmqmgFs56xK9QuwfR6RG2u8tnAaem9TV4V9Z2o55p3dhyT5PegX9xuwnf",
  "key19": "LYwWcCXEH5H462sa54vpVmUVyCj5DfxKrpqJU6QzZC1ZWGVFD91Fkgisy9RZ8rZoqZsuzEidumpgHETraUrmRQk",
  "key20": "JFVacbqnSWJiChKCUb91dKFzNii6vtYsJbavar1KUJZ8ti3JLfqkZAotjnC9kywSpTxtNXSah3Q3uDt6HdVGxxZ",
  "key21": "61zMTroyTB3DWU7VGnkRY1Qpy1JSeJSgh3LV8TaWfTLjehTUSXk1b993vnQNtpPKJkGGcB2nSCo1Vxc1gK6Qft5p",
  "key22": "CDFa5XCvK69HHKg5KiVUBRuPdg79nbYHLGfJ2iBxcSmTSBMmABgjVPooVFTkc1DKBvaJE59bpRXvDNfG7M813jP",
  "key23": "KcL2j5pyvM95YjrYfHBADBAn4HnkgNChWrbqj1zH55Nw6cmNqUx3zHfo7uHQoZ3c4RnuGa26xZZzbimeXUkgSxW",
  "key24": "5e8XExa6jyaUMBbih2iAdgaSc4ZtwnxVtmGjbB9iU8xoDEVfrSYWCn1rv1U3ywhW9PyZoaLJMuhYjWKz7bzhPJBm",
  "key25": "5BgXhcfm62C8XeYUJ3sU4BRz43mP2oQ8cnE8tSByvhsRFQGTNWnaUBG7aCPsJA3yGxh7BeGWty4UeKx4A1LT9SL1",
  "key26": "XBRd84ffqNCRfKSaQWN17EoQduenLdmWcZVnz1vgWC7Whxq3vYiCdRyuDMymiTLaHnBFvxxFgdeDQzXeGdWZzdi",
  "key27": "3Hmo1cxE8TCbiEBnQjLjt7dMdh9wCTj83GHcoozc9BWdCDjKToDyvXiQzwKxymECCLe8ZGx1sHAiJt2hgGnp3W46",
  "key28": "54dtHdD74kFkbUrkU3hV7UNAup7ANy7vvDdJDyfbDzKccUkr8fEn3GhzoB4vwoMscjcdWbNgQRSNAGgGjTrKmvzA",
  "key29": "3EChM8YQy7EfTpBAuDMmEbvxLbwP3QyUe8wMV9cQyf9PnuznJhdpUzDWaKRDHS9rTYJuj4eCYi9nLhYmzcwPNLmp",
  "key30": "4F3kmFgTF2GEcNz28weiTsGNBaRX7bBm8UtKaDqqwxFirNAuP7xwhVXeLQzeXgshZiW17qXZcNdHaiecMUStbuUG",
  "key31": "V8Zh4GQDTNk7biC9ymJs6rHrLikMWXC9DqMkZnutmQVNyw2rQfFe2z8mkJcm93QsDs5FqyEhcLjhs43q1nKv586",
  "key32": "GHSdNnHWaQJ68U3dpthauijwYu2iYTVBAVfzR2SHvY9Djz3CCn7HLKHe7ZxArZ8Jevpkt9Ks2wMNdiZFXfVft6a",
  "key33": "43WvzSbG7zAmsyWvT1quGe98U8v5WSXQqsvRy7DQfgqGZbTyxoBDAEd6p4cxyoKsRsi6Mr2KQuUiRGTrNQUvnZw8",
  "key34": "4XLSvPjfT54kKWnVst734cUSR3sYg1ZEA7F5pBWWviL9VUK4WQJkz8vNt3pMLWhLW4WJnAuTADsMcv66LmMTmcuc",
  "key35": "52Rf8bZ6RDi1Eq7a2Q32uATx1EDvumHJssRifyfNm5DSHoSnKCHXN5hhFUjLC87WtPJe8ZWG6uYkABU2P1NAjZJ5",
  "key36": "vTyXBLumRVUnfFSwNKfhH4DriSysQecafWYkpGd4yojnqCwmh2QGjfnSJ22Uk7dXFh9sMJvDCt7ZZzpjf5XPkzF",
  "key37": "2f2yQPCNBsyfgCiEbjwo1dfdhnm3LcYUWLWmAeAaauc4MXY37uSAk3tEBcThZgfNd3PpSxjmParrppfE1vJpxb7b",
  "key38": "3Do4zwVWbpZn9hVyr5sRM5dHjJ9gHLUo6dpqKDuUGmYArnK8ggt2sknNA8VCvMYEzgPwm3NkyP9dPBattgY8YCVh",
  "key39": "3DQyxRbo8AQJiqLQ8yLb6ijbAvEUktXGQDhZ3r5KKeEqH4m9iaPu9U1spd3QRXFgARq7CP4sHzum98Ktk4WBxEuF",
  "key40": "3QvGdU99de3ejGZB3rZLZZ2WDPu6KtHhAUW1jXGms3bo2wpTnfJ5GU6ncsocRhVBh3ftrNV2nrLsGu5KredT3W1v"
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
