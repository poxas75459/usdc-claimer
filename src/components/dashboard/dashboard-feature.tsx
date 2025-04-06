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
    "bp3mLvHH1XPNcUehWnJxbncFt9TYbFAsiKZ9JW71bc6Am2XvHZaxAtdpzZB3WmGgAjKYxQrLZMjH68gms9c19cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47AEaJVRfCWHZSFRLbArwQ3F8bXUcL8E7R1tRWiKYdpcYTynminNCQVuhjCK6SvDv7GNjEka1aK6g6j8p3wHfu9m",
  "key1": "5Pqs79seYNABuWyRhUw1XiQTkp4F8hNUpZGoUysabv4Mrjx3V3oeDo5d3QefE3uxTeNwTTn3yuqLoeyW7BURDfMG",
  "key2": "qAV3wCD6rh3CfoVtXcGHY2HTe2jkEzjp66pyQNCoQKZS2itzWZbVWenmqXcm386bykFVdmKsNJm3shfQJcC7bU4",
  "key3": "5UbJKNM3gRP8VDKFrbbwipPMZYpTMmndkjaNe6oy8nvg1QJ5crPnHffgoi1WQZxtQ2wr5iY799kSEoh73S8CZGyR",
  "key4": "3wYv1b3EgKZ6MPhuAyds3hYXnZGhm1dBejdxH7uqhjTTUr7znpLe76HgxPZiPRZQjqNSpKe5YFiDNumvGBKU5m8H",
  "key5": "3fbwkieA5dH63hr8MFmrB8oxYBBx48DDVWpnMps3VuTf4TFpq4DXziNdU6r8o3MwZGY47WsvPJeNArcvcugfNTRE",
  "key6": "2FGXJ4Y8ZmFgL8NVqEq59GCuAY3HNZTpE6uJY2xzfnA3TjEiqFviUBsfCbP3x1LZTpqytPDZ1UPbScymS4K6aSMK",
  "key7": "26aTqSsL3WyTxCWWyKwQkkqfDry4boEaJQhxVbvmGLnmeoE7LjDErJr2cSradxeXQWTEuev7iDkvgc4ahwzV3WBD",
  "key8": "42qBFYxVN1fDn7JrtLWAxcFe21FQPwc8bbDMemUyrVv2Hzuhm29xSYEhtJiwHTqhx2ezXo5VqSMt1byUjqC9e8t5",
  "key9": "3U75ncciAHaKF3hqata6jdtB3FeM4tiYzvdCyGs6pcpmhStizv9vA66daHrQ4kR4o1HxkqjLFhjiHvJ7UVmYraaD",
  "key10": "ce7F5dmJNjr9ofqA59H9fkPvMMvAnKkAhMd65hr73KPcz3XwdUHaKk26mA5xYQs6oWubCa5CWVWQiwBHDbnmqzP",
  "key11": "5EWhDQfxbTihUu4ADLQUqZrEDKSnztqYcrU8KiDVM4qkMSCNnEevmS5EG6rcGt3J1yHSCm99A4C9ywm5uRhHTiz8",
  "key12": "2LJm5Ms6jzMLVkA4Hm7VBcmfqeMWV7JP9cpP7x1KPJDVjXCL3uQ7ubVoYTT4DG11fqc9Wc1EJsQUWMDxK1N211s7",
  "key13": "zonBgWAjwWq3bBvpL8YmfNRbk8YDaZsiTu8smoUhAYmnNqPrZuL7xw1BWkGSEwk9FnSW3LSg5mx72RrqndezYso",
  "key14": "5VRiooybz5WUp3u63FYvdSV6Hz8SAn6DN5QQ4DN3tVxa91Ra174E7pePcXBtspTYchRV1sBwnsj5PCS639pTtW9u",
  "key15": "51Rj4Ki3ggaz1ziNNVrJnx9DmuQQXxiqw3GKCSjMZT1R7wbLv66gZXhcQViNx5CnALBBNBNSjpJZWAqm9k9FLpen",
  "key16": "3Hvg9QEDta5FGvTTM44zQerxjAhJ1UMkJvzwNPGyh6joxmFVPhtobqhfhhokFAP3iBXPirqnXLLfqa4gQLtbLcWZ",
  "key17": "3rzECbYjrpaNrrga1yHQHQzD7qKWBb95uwQmGMbHmnw6MxB2PV7n1LrHQQnxxovSMkAZaCdfMLXdqwmbjymeZCoH",
  "key18": "643P1uQMkzRa5izpBxFo4avnmcKSJvNSdWnYQrpAB8Son3ioAs3goupP3FvbWQUeCvQ3gr4M2WD5DHaTLCKJh5Mb",
  "key19": "62eZVFagJoTa6eEC11iEY7KBdZhvF2BcjcbTkyeGQYaipg8Z2eUwRzVc5AckakKTx7d4CCtVQxRZq3oQ8o1zxJz7",
  "key20": "2bKJ6v7mFCEjphaoSCDPbskMTahN4cy1EGSFmx7dAGvkF16v1dSqu2LSime2icdQ5dUH5BTdDVBEAMhC6oiNmKd8",
  "key21": "2McaSFKERQcZCkAtB7fYjBDpEkBZtDyXngmaWh3KLA9serTLUR1fwtaByoGKPfbX6LYMzUeg8WhNitkt4gfMak79",
  "key22": "3ajmxySBvq4pJRf2VL8gPn8f61kNGoRtLa7ztqmr38rHVcE4hktMha36ZRgFaynQTWPdAu7WBCPd2LHSzP599d8z",
  "key23": "5TwNWPxFGs2NH98wP1JGznVS4PKipZMj8UMusP2zFYMY37bWudjP3qYUkg1J9NFAaxv8TJ78wvacxYWxmBoiCAeZ",
  "key24": "4H4fKBTrNqnpb7zsjQfbYeK1zkGpVvoGQsguec6WE1F2h1GbCkhLUvWX7NnHopEupt15t8eFZRbwH6bNGYmXhMA2",
  "key25": "4cc4jbMDRB6pNKbBCSGqSJa2z5KffnvB6EfPvvk1ctXSdqKkKyNDn9qDhCMZu53QoFy5jxjuJFUNYipi1qG3xj89",
  "key26": "inpboTJx9YHmQFp2GfMqSb3raQ5wNSvEweCoTBnrT2q9d7dfCfKs1CEtB9rZeyMM9LZtimHseoAQBXDLZ7LrTLR",
  "key27": "3wNQwsDEJPtsJnc14PZUMbj24FfXroEUXgcCyeAPJnqH4eqaekJaDGLy7oNWrdR8j8pCTGKHDL8kHr3SA4f71Yc5",
  "key28": "sZhrc6nWY6pYRZjCJ3WS7ALjfitTdadjzPtKDfUnoagGpCvsv6dFdwnvKG7QVsCCAXjx9K6uYp4jr2sY1HBy6NN",
  "key29": "3tjhAZopPFRm417E4o7qJfDRsX8qVnnc3J7b6X68riKKH5k1DHiZj5tRirvqi8th26YEVohZc6iJQXnbiMd9o9dU",
  "key30": "2XqJGi3PR94mwyAbhn5nup9gGf4zZgXibShDQRaLrJcKPSrHEADbTrAdSfbrENai6zZCFT1X6jFwDRS11ejPJHCB",
  "key31": "jKa4Eg2YDMXPJNqcz2MVoPEXwu2vKxUDiWzRVk8EQzHiiaBYu1pDeEnQftsM4xfpLLyX7NMD2mZeewRFFuJeQ3t",
  "key32": "5g3YPuPpAudEDp5aeRaXLv5hcNirJeWRhnqUZ6xrYyh9s4tr55kLv6iNd6xrkBGTjNSLFwL2E1F9muQuoWpPeHwG",
  "key33": "31Mytz2ZrrY6ksGProjADV835wCqWxyCD8ELt48GjsEHzGJ44V2bV85vAzHtwxLasMViBGXAxzsP5jRydbUyFCG3",
  "key34": "KKRS3JBTCQoTyaxx8kJHHq6GzvT8X9PqRqf4kgSPkaUsekAjeA6nvk4UMkMNubJf9KJWbqfFU7skmhEMtXDCmGB",
  "key35": "2x9VmRUKLNQ71prN3pLaQsSRfqoy8MZfGdEgavUBXxRCxB1w4oL4g5FA8wBRyDXoe4ah2BRmZzMRAUCd2pCeSP7b",
  "key36": "4RnRnNXBGB5GvXSFtxAu69oo5RgWwHuUPaf2BNQwcvHcqWJn12nw361aTovGNq3uigoCMnskyvYSoxb3YPBUJeaJ",
  "key37": "46TRy7DarMRVJMqHoHUayw6wxSa4o6vYNqi7ry4eunZEmB5gYjPmhQTQ7oAkPdds5xWwVa1SFMHcnk4tLTf33qgE",
  "key38": "4cpoLqvX4UgZ7nQpSw2jsPmaD4z5BZeiLVbeH9pTRA5YhebPaMCx9GLpP6vgssBqyadewKj1atWetiSz6WKs11kB",
  "key39": "5SpdEMvae573Du8JLYu4ZscQKqzecrsVc3PffKmDYYx6ramnta6KR55NWEfikr8uUagsmobJ2zuwQfDU2NKE4tJJ",
  "key40": "3Gyyeh6R1ZVqShWMCyFm1ZbYt7uzGbTsM3S1jEYD6JRaui5FEggX5giKGKkPVAqezMuGEVsUuupmdTqf2YYf7EBg",
  "key41": "67oWDCSAsn3mdc4WBSxd7em4Vvwkb9oGGPDaUf4iQUV4PAEPHEs39bpC3kirkTAa3HpMeAa57bhKVWTpLXhiX9Ko",
  "key42": "ES8N6UVhukyfNh9RY6FQHU13cFtNDwPh5mrGBGd8NJWH95qD7rAaBPWEygDGv5etzRrANDrXbh95LkU6faGdFq8",
  "key43": "4yqYqzJQNoRSL442JVhanTFpJg7EysLjfiF9Yr1krfyHQPt1vKVQpk9Juq6fB1QQRGiDRPxczBo7o2azTSrpUsUp",
  "key44": "28g1Agm7GB6mVM5Sc1uQ9NfBMTVXbGMm7kp6c1PENY3H5GUtVh8WRkSGU7nUF5DR2U5uKV9woKu2GRTy1Gh7PjcA",
  "key45": "6ZVamcp7oLXXMSYypskAn6cZgiid3BnEiJxPiYpBRSRoqipZSaSMwe8ZEtZhB7jNkJRU9Hk7zq9PkdqR1fjeg3h",
  "key46": "2Ub1mGPqnju8BQ7ifVhVRDS3RJEgpozEezfCoKVxtfVgcAmiWa8g5eJ8Sw1iCpQXuw1nfiTT3syDt585GTApbTAe",
  "key47": "2wzPRX9M4tSPKiRQ1vQfJw2CEUqiLbi2CL5rr6kDgH2SVnkQQ5sqesnqHiZa24jSyNqj3H1HkFkgMPCDy8c3cXzm"
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
