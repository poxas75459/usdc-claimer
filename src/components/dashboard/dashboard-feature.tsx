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
    "3Y3owJFgMFPtGawHNehnfoHhZkY2F5SHk6vdow1ZNs9hjfzJ7FBJgT4Key6oU4TfyS4uLzxKv7cXimgUL8UNuKi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQm3PGTjJ1oVWaqVRNGba1VjbFkVBKGf62CayF3dppLKipHa1ywRK8UZMxBq98ccA7bDtLQ73ntFjqgFzDDKssW",
  "key1": "4pdysCC1yxSyarggXViN4dESpE8Ym8cs2mhCU5fftpuE6EH3CjCyuRau85XvBpzRYfpkaoky4Ebjggu65d4KmRyk",
  "key2": "2tuistoVXLeikrzx2tQZ6Hhnimo97fsCtZr2sc9bACxRi4pqWfE3H1kFYQ8CSrj2kAXUKWyC1A9ay4PUjXrx19me",
  "key3": "3ZrHmonDe8mcG5oYiqD1oyH8ojBCzwhRfakaNYueBtmwNoNahvAa94iDZqan1gvLyMvaEsqNUQNXfFzKquHVbfdB",
  "key4": "3mBgjbeefPLCHLparAWRZzU4UHKckrauMfFWg27Anri8BF1aDNfrZcpxGUZYMn6w3jDzq3N14Wfrjr2PFU8xNYKr",
  "key5": "4PTy2xovE1u6j9xKQ1fuWCjL856SWcUFPHt4JiyGJACFpxVfnkX57GtpFjL5aGUbt3uyxXghKE2ZEwdrcLUgFz8H",
  "key6": "4rwj8QuXxVAmdTt5y4JZqokpx1LbPbYt4zSTvj4j5YnLxqfzj4nRLLFWWaNfJBE22TYshhMDLpCoQWgxeCibHsvR",
  "key7": "3mJPCjtV23WM1qZHg6bZHg4xLSfi6UzbP5C8trcDLefopvnUrgSu44sCqmRBV6AvkUxHLPWGKdgrHGXY1haE3JF8",
  "key8": "2wWKSWQ4Q6WBVLRL7EAtuAahZRNfLXgetFxzrUjAWDCZYgiUo5LxnbKSUZAouWcGtbDEDoR6sc7kafraimjRqyxb",
  "key9": "tVcfhQG7CRzjifgHSyz8j2ksiay9CoUFMqcfeg8Zbg2EGyPRnq6bzn6i1q6iZrTagVPGrxQBu6g29MoaJvsBgpV",
  "key10": "4xYqnDEfUG5H5kbz2FrcWd4y8FtorryUj88xzHZME3LLekY7Efnjbaq9vAPE98rnUMCa7DjuMznDTUGyYyP128Sc",
  "key11": "4kPM45h8dYB4uTRLyb6LUohbTea8MDNnGB1wvYVhGvJcW1tENys2U1PsMJQECxxzsFGsiCPeXCb9Bv6x6mRFEjrK",
  "key12": "jNCLodUXtyYeo22d7nq8xjT5V6HbXh9R7hbJU76tTDNG6KNuKi74W2YdSRiEL4ZL8rJ7vNENpbPyJgw4hjh4nhe",
  "key13": "4BFjFMFZWxLuTcbQSQF9tDaq85vbbPPxDq7XbFJAENGLS7keJUnySURfMiemtNq4i9wgWkWxsNW9fTkuw5RirCv5",
  "key14": "3QVfsYMuk95x3WG4tFw3jGGxLA4wfX5yq6PZdyASGuXfhRFLpNfeDZ8NGAUPFrLfy2YfUQBhbsFMtMDpCHuJThoQ",
  "key15": "2RBuCHsNGaXcavKX7vKNBTCi968Lvq4mqsPA245jLBV7AmHTfqkMFMhTYH6FXUuB1eZYCdiA9NgFzwpiZzDNfZbT",
  "key16": "3hbTDUX15EmwhBjgmzKgKHwWVodXk5fcihZPwCr52WkDDF7MXKhGhvbjuKSCqB6mBbiXXu5SgE41X8dxohNuqzrG",
  "key17": "3AoiN9Q8pe8KWvPBkCLCERu2A1wJcoKcr8Ly4F5Dzo4aucnke1zu5H8ZdgesPpwMbJfdxv5JTuoJNFrMq9qxQNw2",
  "key18": "AxpDseZtufeAbxhgo2KNjSFQVWd4esZg1NWgiu23UsVecMRsu7qEEnbqJ7Pr298yqcNAZXjtUnifi5zac7VcZac",
  "key19": "2gap9hcpDmtHthzgDyRDiF9cZxsRT9WfcTsh366PLRCpnpXgPNnmgJogmPvbmjqw9DBSe7F4frW3b7kTopx3fDxq",
  "key20": "2NUfcU1YAHvLDh2XuukpVx66NUHEMayervgapZzxqxYJTLS9roJx1dCWt6UPCJfjbpsFSYzuwUM9rM8sBeqpbHBV",
  "key21": "YWJzf2FsVCnda6onRBf6bo9W8NX1q2yJiToSBwbznePzjvZWqg14gMf1Dr5vSgrCuajDP4wMBmpfTEnHZ8j6vKP",
  "key22": "5Z75ezJvQxdE1JuES6SAx8AXzLSdTm5wG9KAKmJLmuQRU2CpxU1wMnB5cyUvSzMkrYGnWrPWrN9UCMgs7xrXVZtJ",
  "key23": "2bhrYgB73iQSpNgjuUCvynmJpBQqhZwQMhLtwNgAbHXvn8k9KfNJAeN3ysQnKnsSW4NRAXV1pEZtdrH1LTgMH7rt",
  "key24": "23TAh2nqQ1wtU1D6sJuGyedsdrVT2u1QNLuReMz9ZFn42a3TN6T2Tmx33kDHx7YYH3XCpUDm3JoKoQTVPhdQYsFv",
  "key25": "5VZPiK5atgQYitGwJJxTWEi3M9fZUxwq767ui5MU1NQq1krQnd4s7VEEgi6Dx1H5NNvjG9xfmVXpiL7kV37yvb4M",
  "key26": "PmNdkja9bnPWmz6RAc6yB9krX9bSCGRmjtFsw1m33sJmAn8sQ1CTkMa3rgBxyh5M2dudSjDVU6kuJ7D8e83MnRe",
  "key27": "3BjjUSCdPtV8GLPhdAqQvLFepMVxHH3J2SCexKMeKp15feNsrWaFktjKEU1hMxswGy52WEE45LmYfqW8wRxr9YhE",
  "key28": "quwwmXQ6PdGEyDxgw8kCLGLkFBSoEzjbnj7PMm98AA7BykVhdMJezaFMEjxd6Umtpgo6vWNKNUn8wbeHJsbTaAt",
  "key29": "5uVBSC8B6UCcAy9x2B9PUrVVzx7RMdtfHv2xmxKCviiPWgHmEd4uNup5ibgDswsKGA6orEfLDv4jWsgshBorPdzq",
  "key30": "zTsJJbYvDtq5zjPhSe2UhiB3TK26JNttuYv3oCXRiDwQUQpttFD5p5dm44HQ3puPnLr8VSiFX9wUSNFeTftuC1y",
  "key31": "5wViSzQWNDYkDGE7McWP6ty5G2dxk57fiX8s3CnDUQnqYZDaZ2uEigY5msmVgBd8R8Ko68YMNaPcAfrfW9faMmP3",
  "key32": "3Woc5P8tHcAwZQTDBfkgHiMDYJjR6HusFeHaGMTgVqL92uvfatWqmpd3SBwGV6PGNxjbCYpYRfcmJ4gDoe5aJmNE",
  "key33": "4Mbqp7vBvitzF8zRhL22KBcdSpr1Rv5w92t5jr1W92YeCXy5iVK8YLZ4pHpXK4ogP17JeMQVis9WG2aVVbGUmJrN",
  "key34": "5Gzeknm6cTbXR1JeAup4sDBW8FpzFiMqwYz6kqCgkQppTAhv8d2NUAyT919TM5sbssMUyAXGFoEn3NW4yqZP9YUJ",
  "key35": "29asGehDo92xDZbTpSvb2bCX292emTquV1VD1Uqox8sG26ThfPZ74zvagUPyaYSgUzgdYk8D4iQaJBhhXkUJ4LxZ",
  "key36": "e7KTQtPgS7c9ZxR1bAZphC8NWNybViyXJWpujPAbxX9DRszAbBMrZgULQ77PFHuFPyEqNAacY7SnJkupZKTZw8g",
  "key37": "5XpozYNjqxh1NVJFqKkGCCtGpPgFEJN9ptB7uEztUiLR4mQavRXnCYMntp2xgTxyqqJa2L9bWhCzWgkZZ9PQjmfV",
  "key38": "5GQWbLfTGb13U2bFgNU2QzFPRxzTweHK3r2qEwaUV5UHp84KjjXzsBDHDEH5md9AGMfc8MB3jAKWpv7C1Vy7UeRY",
  "key39": "3EY6yP7c76HRo5RFKD286WfJvTsLBDpKscpoH7eKK5Ee6KEsdxKYWyJQmYTH7YtxhRoHXRPqDSx9CugqfMt6KL1r",
  "key40": "3dzRGAj62mYgmDJcFCC8Bj4YdLzU3dWs7vx2cztrMmc95ceKXaRYrxxTCKkq3xRmxubi7WN7Q3cqF6T9L3faRWCU",
  "key41": "5Nc3FBzLgLz4gBPiw9jzj3PcgQNcSkm6gyZhhbhgejLvqfqkXRQoi8XwLJpK1RC651247VZVpu9TMXBwecwL7G1v",
  "key42": "432NUJd4Nvh5CV5CKzcDJuNxviEtLLJJb4q6oanPYxnW7FfPqTzWFwtbgKnh7YSWX8oxWQ5ewUhQcNkuw8Petqd1",
  "key43": "2yDsVnF5scQUwH7RWKKUn9rKzVh7Y1XWMBDBTbA3t5WFxBpndxBbDVfKoDyZe66DtYhNHUYkjg8rayxFeRwEpMn",
  "key44": "37Xkg6tGwPAMsuH1ym63KE1U4U66sKhpHQ4CZe2iVH6cPfVbDZAjsYanKzSUHg7oDjMpQCtvttrQ2YMsyyFMKQFA"
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
