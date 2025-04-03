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
    "2WkqWtNiwA7RdTvt7wKxpburrx3TuMbWTHhWc8SW2Noy1M24sp4ieC39mWUmRvMJj7YCyGmLCtWU8oieJg5WBvY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFTsyhwdJqUo85hn8zZohLQ74YitZ4cvHoxtuV93QN1BzfHBYUBHoFULZP399f8qLWGXx3am9DpbwkKyYBjoJ9P",
  "key1": "4cKV7L4vDkWNrLoKvEus1JQY5VzvtaY6UTXqknv7xrmkxESXVSbQr6q18JCSHSoagzJ3a5erxDp4C3F4T78ixe3U",
  "key2": "3YUBogD9PkcVj8W5vhyyXmWjigWwJ5ukmJPfyCo3Mk9JZjyh2j9CkLvsPA8qwU7uQjk2dXYayZQQpxtrdvwqTFS3",
  "key3": "4nryRxMKxEWvyC21bAum56Gv91EyGTHMETe5p9xdoVUxmB6e7fQVUrhUTjNee3LJ8a9juphntzBGyj5f6YDr9j2U",
  "key4": "5VWhNhUycGmbDBiF881CqN4qKfm9ndvMuJniRiBPFdGAhUZGjaFEfLLh1MSGAh2B1xaoHVB8FXcLQCmaWkZci4zp",
  "key5": "3PSJA35oYp4SzB1AD1njrmUaMuuu4djVnxcmgBzoQhYGmpCnVG2gLFWAJ2n6WEcHaZPN5sTx7ntiyWfmVS93ANQK",
  "key6": "2GRFXQYLQJJwQkQc14kBDVFZNYub2scecReNCX6RZKcv6eWwNYU17rAMnNHU8GVDUbezNp27FQx2yVB2XTc6VRuF",
  "key7": "2mhuDZPesLwCua9XUFzbX7TCWd4DUXSDS9ZpQjYPSL3ZhcURYjW6QBUkPeoos7buRwqosEqkFnpULt5iiXxJQBDR",
  "key8": "3km8uLsA57Jhueucd3XpfXg8Jo4J6U6jDZ6uATLVZsXxgBqZB7dj88UEzDnPHsCq2RSVCRFTJno1GgbSo1EKwdQT",
  "key9": "2f18pgd3bp7gAHjAK9cS5ixwBUtrKNnY2UA76JtpcAyuKCa51DGfvRSouNa4L9Ke9y4b1dDpQCiUxmFDmbwa9J3V",
  "key10": "5GvkGsrbpd5DmshXV7fiSuCrvXYRcTT8o6NyHYrK8RWi5dqBV3KnaAp4jSYst4YWZ7eMvNWn1r63XRXRDfys5pkk",
  "key11": "2wQPhMHQcnVpmbKrDh2MN32j8LiTncjE9atWpKbSLj479tNspwAGHWXetTpTbefWrJMC22XUVdrgAVUSfC2cN3mh",
  "key12": "5MP2Ko1K4p2URyxfR4tYwHH8hn7mmS4awCKwzqTd4r2AwPELtDmQBbGCP6kNLHu2dzhnHgYgGiJJAeirRa2PR6eD",
  "key13": "4a2cKTQKURXxhGDGfGgMHMXd7PtfX1aLU61f8BgbgfmydpA9QvHbasCSLtq6HBr89wdSWSCDhoYXPg2XqtAq7HW9",
  "key14": "5y52yhTKq3QR3EgfEeadxYwruY63X63fjhxFJhWuEhz45vAt7wAdQ9jFaJVTKjZWgnw298sgbNuxs3LfA8BRC5tP",
  "key15": "3H2aUEjdEqxCETfFwdCPk1wTSsXvW5gByJYkDkZPa8BN8EdmmmzfS3u2dBXTfG2oaQDE7UEiKXKhvWzTmJbrULdo",
  "key16": "6EsfLxBZL3xZ1wzLQp6mfapi4YwZYbKbmhWj6hRcPpY6omDEofSTJE728bW49UkkGFB1DbuBAoVmdS3cE5bjN5X",
  "key17": "3BRw68AetXkLhn4T5s3Yy1w5ERZXnYPuJwqjzrHXSapyJrE8qsAK6Cd6iC1S5omeL53dbjjEAGGv86qaP853Ydnw",
  "key18": "39KQTfY2HrdGDZ4zcYuX1mKy36VhvhJu8fp7dAJ1UDpwaNPB36Zj4svgxD3diukGNpzkTbBZt5hShTxe2zxjY5Le",
  "key19": "57HNrpRTsUFvSLPf9bxzFPGrw8bhDSzfU8o6GbkYV1nokWHxTyJTrxppwJpK1mCMCox9f3r6XESigFdj4WZVTbb7",
  "key20": "3x7fnxtyJJkjoc7VUYc4vNtEfbPNmtGa2LTiNyPCBM9JYQYEWXxy6nWGNTazKuP4UTeq25UXrTpPCAQ7dLmjCpuZ",
  "key21": "4xcuJcYJDaEq8gD2ZJVDFXjdwAAdckx2SmLDjo3gVPd51s71WXZXVeDR3xzvkibpzuVfba1fNUuP66gGjJiEzdn",
  "key22": "3fAu8kmm4i6wG9NMcvrXC9sbnMdfgAxkpnfptFWvnUxJGdvgsWvcp3dQbXSJGXKmxkaAHq777eM2HXF7Qb4MLSRG",
  "key23": "4w7J38i31d69tf3SwhfniUVzL8f9Q8KZG1sDNA55Na3pAPq65PV1Z9d5jmp5Sf54UhpgnwYTSC92HFaW1prohBLh",
  "key24": "De82LJpY9NokpEtPpAvVzrUER5RUMS1jFiVPkHZiwyqLyojjvjNc8QVKBAhGTKWi95urB36MP1rsKj4ajiVyfR9",
  "key25": "3UDgwXoV62UppXtZmRhjNAzuK6hHdvuHAAwCpeHBToBqZSTCJ4G7UWiG5y2V3LggtypLufV5YYqEaTYGiJ95zAi4",
  "key26": "evffuX4wBHwaL5ARuXeLcmDKyhzzB41KALHgcW86iKEDHg943HRQxwtMyFgwmFiTFr2vSdKx2QowYoSdekrAAiQ",
  "key27": "2n8kCDp6h2Wu6okqqFwDLzpi8VY4oPMJCMVERWJ1KGbytbhwV9gLtMXkpF3Gf2qCKELSCCrkRSbSKgA3AmvsEisy",
  "key28": "4AycUba2DiWqFN3cqZkC9fTd1ZxcTNM6keF49snqu1KPBuWyLwkhp5o1UriDQ2z8bqvjzFGhfvbBZhUS78yuPCay",
  "key29": "5kmH47Erw5QQg1pnSedRng3yob8tr1RReZDxxCpe7kTNG4rvtkBcX5mAAmabcCsuLxTUHNpWa6nWfLcRfQnRtC6M",
  "key30": "5anN2ajYKwu5YM4nbhYH9ahUgjsLwjEwwinzrVgXRMW21GadrmkPBBLQkCjmRo7ApXzVCefFFStk1hWS1QW6qcPK",
  "key31": "3E2Asf4SmceVjNnmoNUDbFs4zMktmu9q7a68tYMR9SYn2nRPn9FT1GEPs9qnnYwsZBFBgjcPR8BuvYNE5v7H9EeW",
  "key32": "2HMujzkbDZwo3xvZHd6zBVnGT18NBvs9682FbSDi9tm3aJUCfJRG1cT7MofvwHiiduPtZW5GFuBwxdiMpAHZamLu",
  "key33": "5x8doYJHCFERRxPkaTKW6S9JZXYCWw4MTirYX3jM8kiFxUnyzX5biNKqpA8kW5i7RU3FmdP8Tz1hL3SPXv8h91Mh"
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
