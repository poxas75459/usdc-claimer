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
    "28JQZ4CUrkMgjFkSCcWoNnM9U4JU3G8kpjEf3uCuRzKSqMJ8jySQVdtLZ4zLUeF8fEKgWqzpRazxjETehtVN1ndC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qM7gZHSVSPezhW93WftrWT6gQHuGxCjXSdbDoNfbgyqqJhD63pznkBC5XhV1DZztLAGua2gNwmqCV1zAxNj1E1j",
  "key1": "5xNKezK6BgxxcEwqrAReGCoiUFmravxBRoPhqQzxQFmMZjrQuMSfK2dZ84ft7npwskoBHRKY2V4Mk7yM42auvuAS",
  "key2": "2EN2AYjKSYgZ1VvbQdhHZpSLLXo3gFhYmUQWq5Y743ZqmVqCA1KRUyDxpHEj6TUrpQvebrm2838nc8irgvmwC1U1",
  "key3": "4DgMnyWJbfKbdyNnedeM7Xcqz4LxgTmrRgANCY8WLU4QGsd59wCPPzcNthRb2CVqD55R7i7z8Yg6bQeokAqtVcHM",
  "key4": "E8dXrRW8CGuzKbStmYH1NJh6mAf1NDAieytuPx6Ck3sssT3tcxswYAQG8YDr9toFbh4oCnJy8uprzgkPZn6DAoC",
  "key5": "2JtAB8VhXXLbnpXaFhhiXfB2YBZCdnPhCJFHEWRy46PxgS47V7ojcoFitz7cwbpGSsMboAb1jL5S4P4aQ14R94Eq",
  "key6": "5QViVbT5d7pnNpVGYULfpfRN4oZkqsaJumqsJHUdPu9ihZz49j9AWE45LwJMXcAVcY5xdCtD3mmiaz67tCiqtc6F",
  "key7": "21TWzMdKyT32tKSChb9rb5fGPrwfM9es72gwi3TBRN1Jq1pQry2XcGZHNxbeeZU9HGsHYobXH5nrMtn8gPhjQfWV",
  "key8": "4SU9D2SC5NCwghK7xFrHmPjc3L2UBikxsa3rVh1jw4atx5SRFtaijSyWjZjzyZ1RdC3UpgkE4zR98pFfeu6Z3GkU",
  "key9": "4MenNdTMRVQ77sKKTrxK6WuCinsG9boe41LnDY4Wy9xZYfHtPTGyHq8sbR5ECaceMpZPzFXeLkDy6aZ1XyUPAnV9",
  "key10": "25RFWSQXcPHdXrcdrqMWH38qhpvbMFXTb5SB7zGojEUx9HgxZ7AJRDFZUuDmbo7i2zx3PXUPsW4RcyAFSd2NXeXg",
  "key11": "5jGmwpHEwFeQZCnUAzYnc4dXGquBS2dEiKj4kvz3ZHxBF8ZuKR78Vyk3SsEafJPp29okEDwFwKFyqf4mtbXASzeX",
  "key12": "3A7jrRzqwJAW27Nz17k7NAj2BQkFeiJLPYvnx55ztDg9NiB8zj6SrogwEmGLqAcGQEbtWykvJou3Ef9BQiGaj6ZL",
  "key13": "4c3oMCSsHrrMyQwA3qiqWB7mtMEEFPjragncieEEb21BgtrppXrmNkdVQVVEnopcYExTaSRuLEr3zaF124kLAeUi",
  "key14": "24JUV3xM6PwgwWfhGMZScNkrijZpcbYjKVXHXAaGqzGJqT9T6jcJPqdoSJNw3ampjnGWKrK9ZAC6Cdnj6DQk2Tap",
  "key15": "2assv8pGH1cJVwgCFXqMBpXB2zsab5i5C4Qph3ABEn8qxN5t84FkefxCy7LZEccsDHmNtCuTkG3VezM3jhHK3Ne8",
  "key16": "2jjWQCUtFQPwaDt1QcpY8fSDdZRV4mJVqNhQWkwdZ8Dm9gcYo9sXBGPmXwpxhmjqTSba2fEdhBgkUjFB4eXXLj5x",
  "key17": "3Q9QYbG8r6J1VRzpggZVK4teytGggJKWLS7Ze7479aaB9CJxVxAdXnhgk8SHx8haj9U4SBTMtPR4Gpm7AhDMqHBm",
  "key18": "9PV8MzUPMjkdE2eLEyGNRHWW6kmb28UkdxLC7oiwpcW3nLb16AKorAkAi2j7ebNueWbDWdhvJiqpzg4Pcrw3hgu",
  "key19": "zcmvgypLx7fEbGmQUPNhwi3yHGUxuMuKejmWrhGkE6u5c2bTwdMjPLn9XQBcWY9Z7UKsqMyofZg8YS4aSbeTe81",
  "key20": "5MiV5wNbSKikYxzgQ8pSSayYZptXsHyaY2whSMxWVdwxk3Hr8yuSx3CgHDG6YaJB8v7T3n6qZmVe7xXEVt2RM9pL",
  "key21": "rvfmP17GLKaCxGUtET9QnAKv1mFoARnYFWLFrREGCFLMJMLDjE6eAworN7zcKmn46UHLPzPSfwqM1wWynZHLJnC",
  "key22": "52vMPgf5Uhauh8NCoiTDdqTmxC5RPw5o72yA1GJhQLgiDL37pYr999aEgkNpMiBQGNHYjqCvacgx1ES56NEPjU7c",
  "key23": "2af8iR3GWicApqo7VyiTNrHhp1oiNe419WbCkxXkmTeB7811UtVwttfeo9o46qCDnctsSJyy2gcCn26QuRG9sEJs",
  "key24": "4HRGnEFFoJSn1gBgjxzHzttfPvC7hNoseyL5fKugfJFAapxYVcivh9xUuJubUXiJg9sJSwVvWZwJJ8DnJ4cbjiAE",
  "key25": "2RzPV53cCYFhnzBo5D7trbYVf5Wbr6MunSHVRzPpT15yCsBbDYvK28KxHZvVLP1mPHavR7VeqMYuR55MCUp775jE",
  "key26": "59SbKGLSd3WgvBbFku2GTHXBqmhpDfbE1KzmezAMmDziReyXgudytzxzfzCe1T9Si248CVijhWbq1axvZ71JC2gT",
  "key27": "3pBe9QrfZy1jBoD7QMEnXg2U93PEQZmzNWqAf4k4o3gByDXc7f3fbNZzAhg3X7HgG3re5vkkTcduLQCjpsmfw4Ud",
  "key28": "3SiY92PFPUgAhsq6jgm2XpjVnU5dVvvYgxDKoi589hzwtb94Qch1xRJCWJhNauZ1jamjK3dPoVJbeWj9Ucgkh5g3",
  "key29": "4aiZYfUXo1dw6hpwkiZ79AGhris2Q9i8TU1dWWBuXD9k24G9PGihKLroPEdCwumDn52Zo6kosqbn5DXTd4Gy7TZw",
  "key30": "5iArwoibTxyvjPe727u5Nanvg1BGKr8VebxAsc3DqVFPk6PE8R8JoCnwM7vReFVQfiC1Q7GxkLLurXbY7Hf2RzFV",
  "key31": "56SrEQEXwtSBohMEqju2s21ZhYJCbGqCHrqxaT2DTfjsE2SpSQu3xxrtfcJBnHXDRdr1QK35SCNY6b9HpAprhcj7"
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
