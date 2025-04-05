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
    "kfUVCjhgLt5pguQNPWZ12eqmLPhMHbTuGXzMpuMiNvNJcpberLNyBusUGy7HoRWLm8n3HVDr9ptCzwwjuvkFCFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8J2dd78pHsEEmGLd4KhjbZBPD52r8sUXY1fb4Fr5ViQ2PUBk4ggVeBHz9JMSwn121M6WNzz7cWZud1r5cw7L5e",
  "key1": "5imWAFYxEoJj7ASS1WY3BjAtx55FmrsdFqUJi2J6nXCxxzYeKfFxbTRdnUmF7BupVjUQhkCGHqbhpBC5FVknWeDz",
  "key2": "5QcnbtLmWrPkkb7u68aZB8mTtrUNS4ckcb4oznNrZqDJLtzHFecBTACFCLQ1Dk3UgL6JrWihKBUfYfrZ26qvH7Pe",
  "key3": "6ux4WFUMMfH4ptL5En6Gk6gH75CY6AxB5mHUFDmNLMc4mw1Ev1QUS4THr7QRwwPoxGRkZxJam222VzL1h7pNa74",
  "key4": "48KJxyaoPU3BfN7NEDiNhS4FB2nbzXXKYJJ3wzsEqPCMdtbACG5w1SJMq3ykNgMbYYSeKgVAsCeRRbsJ1MJCodNg",
  "key5": "3qT1fwts5Aez3Moz5D4TWcQ52QtAsnTfESk8QuWDjvhDECo4dh2uxH5BLCXgPF8mnsxCuF1mhbQdp1th1uix61HN",
  "key6": "tQ5r97xhYcEsJw2qeQ4yKyjaqtni8JFdx1iifJx1vSk74pG4hWFYpMdenJY4mkDtg6sKD77EgERMkU85idZu8ap",
  "key7": "J8s7MstV6acDsAUJ28geguc5bWdDgrph2k7rytAbMbeLH52z57Ld4CeDBNPwvJb4CahKuDq7xqGzpiHvbjT9w8i",
  "key8": "5n1az2Zs6kiZV4kHZYxv8eRQAwfyW3Wk2fFcEYAP6vWasCTv1y1n5ENLQEq2pnN4YJ7cqxHky7Rb5Z6RyrDuKfjC",
  "key9": "5syE9LQRrbH4nSMBUAdqQS5RnWxAmp5o8KQD2yQaW6qo2wSGVn2dAA4c7Azzp2G1GHYfntZ9ThNfNgdsnvuhpRYW",
  "key10": "5rzXLVWCGFN2CPbcAix3xa7RPCciJ8MAWbb9oh1i5ghYkaqiVr6asj9oCPyx4JyjXSBwsv9CfHKsTQjt7hvK6VKr",
  "key11": "5YnemKzadENss43qSscgsyHjmp222RKGFVG7iVSaug4wKU1yKZPUGcGtd7Ao6CLShSfR6w6u8nsghqi6kvQm86Kp",
  "key12": "2BWDfETjTLg9rRwp5P1xuUETHKe4w5PkZ4zYH4D8xavATyMo76Tm37jzKDV4oyX7bQdrQ9oB1iCcWAPoDzt55JoQ",
  "key13": "4a18VRwJofe6pdW7mxZVhvBXfGuhCk1fQyhbSXi8HwdQTZiomU8jKpfKLPQrnD1tzMCG2NP3oieCdcoVFwpPWkEt",
  "key14": "22Pb8QbcgGRPDKtxc3BiuQ93uBEPH2EjUQqrNi2zzkbrkymAYMQmf1bsxVvNNpLuWCdzr3P5x81hrk8iQ7KDFLUa",
  "key15": "5ewXZKwfBy447BJWxWaizmmdVYVQkMafjfdcwJZ7Q6GT1LXu9cL5LwbfcnwajL7KxdMreeAeQnGZkAXEX16HhFS2",
  "key16": "PN7DBa3B7GvE7bkEqrcnTTovwkXEVq2WpWsryR5ay6x6soQjQRREDrZs7nWA3yY8WU5iwNHsLvFpToUF213xnpG",
  "key17": "2JZvd5u71byYJjNoV5PkGPXwfnrVdbtnwfrKMM4p5EuV32kweaA8nBPr3JpzbLHZtVQvaPayrWouix94ExmNRxck",
  "key18": "3dG8t4Zf1B7HWQhWzR81QqTpeAH2Vasrq1tz5J7szCcJV4HgiH6K6mxhaRc4XKK8sPgehhWKN5a8jmZ8orZ9Q1is",
  "key19": "5NQSJwdpWcgHmsrqhmxfVd4UD1gAZkhH5vwJ7CwH67fDbrFooT6c2b3tEmDt7viDW7naUt77PJSBM1dMcDpFG93P",
  "key20": "3DbqMg9CLfctev6f1LANtB4wDnH7jMB6EwU3BCgsmPDbtpQBNAw8HmqvqmVZbjLvfhSZV475DGcJ8pykEMd2iPAe",
  "key21": "21MBdcAKgmk9KfLZi6Y4LZhdmg6xbA8zKkRU4BiuGvoYyYf4MbERGaj8vHCVwXf4EvfyxzvoD8ZYBMGmLRiHuGrw",
  "key22": "5M4vWzhLCDqrzLF1ndTm5UhrUqPA1JK5MsxPmcL22tCyGkZ4LJz97wzWTuSHL2HwPMA85zCp7xf27TVJAuJxKXH4",
  "key23": "3NkDMjGkyANp6whbJxvcR5JpsgrwLomN8wHMAXAQgV2XFGLxLRNgui8v34eebdvi1q55vYtVnx91s7pmT3ebnjUc",
  "key24": "dJNjdRfy3D8JyZhVYXk7CZPCMFDz7mdnv5dea2nbagjPjgWcecSRpMYjgYaZffSakk4tsBjXMYC9GviByYQFV95",
  "key25": "2YoBF8kUBMp58EWf6n79SczxPQSqYNR6FvxprZgqg9K6XiBnqdDVLbYx8KfyG55tuYZFbEG4udzvcBeUNDFJqLyX",
  "key26": "2t4WzD2ReWoi61CwQmZQV7m3Qmrnao7Sa7zqerhTnNyNnPFaoAJamnm91kAobWjpmpgWkcg4B9tdLWe8nEyQ8aBb",
  "key27": "LBXaYEzTtF53EjDLxgydQJxZUaMJQ8pazyumVrpvrX3zbxiErvo9pTAarF5RLjcZeXymAMFmifuDP2MzHrdsKQt",
  "key28": "41vkptHbo6aAc6X5Bw4WJF3VWFgTJAh9P86UDZQmG4LjwAXooHj2rj33Mp1eg2umsaeYq8TjnqpN4eotTTkJEyaQ",
  "key29": "vbEErp8UzpGUWUqAgMKJZZ4AfHot1Y24PT9AZbokLLwNpw5QGadeAXZWXn38Y2FWixGzh4waGufjjpwY9jjyQi5",
  "key30": "43AirDy2T4xeCnf6HQ97tC4ZzUMoLr8gJEJdk7UHXf2ZhEuB3cu6pxmrGRTSNGh7pXe8VwpgoWuhwTAaEu7CBFw9",
  "key31": "42FiLLowBNpyMSCcPJXBP5GmHbFNCzE7YqQhqZ2Zqtracsy3HVmeTkb63MevpFYd7iP5UCWoTMyzkwSZ1nKqZnsu",
  "key32": "4ndv7Ze2HVyiThXDLmDghJTvK1XicaAGPDwazhNKCSfAbHgSn4sEvMLiYWvf8tWR4xcYuErLXYwAAt9ARFh8N47i",
  "key33": "mhw9km6bdXiGoqPv1NndCGhfcQyRkmbMS2vHRfJc4VX1okQX3EtM5zUkqYyUotuY3TgBhZtiC4eskvMgieF8sBk",
  "key34": "45CVE59HEz63jFQuZH9R3PPEacbgyqfnpZAKbCqAvpHLZVidTAZimTzTgcjifktshAQZ4GQRyd6kdsqMNsC9Skau",
  "key35": "h8VZ2sMmuHBFSMGiTAKtquZ6dXwK9bL8gqnpVTnYCLkTqVpa5vGdNALfCLD3U6w9YGfez7KPj6w2Pt4oNSbLCwN",
  "key36": "9RzzE2Dng1vcMpVDa5DK73qweqV7omPhCSG6U98MLNcFEYBmVxeEzKGbGqBgEBprcbA7619GMu5yX6YKuq6Gcmw",
  "key37": "5gysYwnRQ5G2ffkDgs8uR7EjbBVgV41mYjrXTnk66avbLF2STvKndnNM1qcgTPRg9rgEcZpZV1PhbP32Q88UoTLT",
  "key38": "kxQh9Zfc3qmF9RURsh1dekHa8zsxyPh1EycUf36T6gxWMANopVud1m37H7rsJBxnfpuTkCHfDsxooYaE3nYkV2w",
  "key39": "4NnuYEM5KbjVYDKNaSrG5JmqkNmCaDnuhKszVWu3t9bQx5QvD3mDSLD1sKDWrD392ALtvkeXvcgMGfqdzqcPzcFu",
  "key40": "3jSCb7yDgYV25NXZcTLptByUfbhtfV5eoHrstqVb6NvbmS5EdxnkndV8gB7L7MWYQZmGWRNHa5UXfEcgmx4zEoXQ",
  "key41": "3v32Y7CNCcYL2aPr58Vjbjwb1QkhEXSjqAzFaX2VwSCJvFWZouB8BLGscAGkA9TExkLRocxYpN1ySMdLjj3dTtEN",
  "key42": "3jkP9bdHEyLYTVTt6fi8QrsjncmY1otooNTHG4aaqMtRtRW1vXHTStGeeriLYmdp7iViVCQbU761PmZga2WpAKkk",
  "key43": "4KK43riJdu3xRQnrMhsdkwqbEpGHvtjvDfDRCxyeMvBLovzBofp7Vj4rquj1pMFJrF6ewf1hWeYvbwk2tVAkgZwi",
  "key44": "5wk6W77hBK5ExUJvDKm4Ec53wCug8eB7ZaChfDaJMY815qbro9e1HqS5eXmnNvi1suJqdV96M1pAXybANhboxjh8",
  "key45": "YJ4ogeiUkGTqFPWuYoGoePeo2dT6Exi2zs9zD1k5tSPn5oyLnNnTnQm7FgE8sAb9WpxkgmLdaZizdUpVagVuneH",
  "key46": "65gjaJMMGKFGqwFdxCTrNie6hsfCC8WiUGDC3rde5joEDZnzddGXKd8WX8qJN1wyW4dnrh9mLwfT4ceg5W8GuzEH",
  "key47": "5ApUT83Ljz5KRkar55bGUNoBvnEerFuo8e3yzSE1p2GRHUMyRqtHLdQaU9uMoSHGa3rC1bFthhQjX3Gvov5PyWHx"
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
