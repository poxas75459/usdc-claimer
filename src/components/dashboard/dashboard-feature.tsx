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
    "36eFRofCkGD5C9C7JQW7QLTGF3AZTKbhHuBqWRXvs5MgpJ7QQWiA29AvUzs42dGf2VkYRJ2SG7SyKi6T285Wgoj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUToUhRWat8mAuhyvBA6C1y1ma4idYEaGCicf8wQna18paMKU5sQLp1WMHfufwzTZHyZXjVV7xfr64CsuJt2TGz",
  "key1": "24jYPcJ531ZY2e1ws53c8iWpbFgC7jQrezPT1Aj4KRzSnXF1cdvG159YfXWTC89y78wNCyiXv4qTiNfSKHXZWaHp",
  "key2": "4GDbQzwiQf8S3vfDM1KovPmg2uq88XKTL6TvR4Y6EWNjuC458M6MzPfp5n5D7HKphNKRBt1RcEZyyHxuhENXe4td",
  "key3": "55wt5yRFJH1hogdQ7EZ6Jte3hi6J7rrh5vHN2ivbBFzCkvMch5pNLgbbQRtMsmY5DTogjDRhvVGYEpfFbjMSHHTk",
  "key4": "2Kuonq2DEEEir1UTioY2gQH4RNCfFMPeG5CR6xgtp6H8WfUEdAbdEpru98qHP23DD6pG1eDVv1c82ryZrKdC8gFG",
  "key5": "5xKKVPcb2tF5J6dkDninPay9rk1iedyuM8Ng2Tig8LZw2c9tH2XLozyc9eFAnnBtULhzr8xMS9QpB2wRSCCALvKV",
  "key6": "3aU5hSmoubWRo75qND2pq4UipEbpQyHyjrsf6nqFFqMkJTJLJG1gNjPJrgLaMCCe4tApJLKiQH2y6WexPgSqWn7s",
  "key7": "2cUVNXTdYicBRne3fnAoVPxnckXoHSwAavteQLfJ5w4mot42vBhyeXPd4yGz7AWSEbCFSFQkjPVKFLfFnfdJ9Xe6",
  "key8": "3AE2Q7GtHfk2BEXk3PByeE2nJtRZhEgfxxz3NFivkRG8GGHBJ9RPQBhYuMBBVWVGn2KabNwe2L1cpR2vL1YchE9Z",
  "key9": "4gBEr4Qeg3i24aMPHx3E9tMk7dAL16WLGfQ1mQ1UHW2Pri7h2LtmMteyYegit1qyBFNrmkhaUsiioa8vC945JadM",
  "key10": "4TEg1Vvisu2nuwry6QDcvogsSaRuLTbqPsTHQqrR9yexSUMqai6f5tYY1tyZtowYDyHVhHpwFQUCfVBeKrtsoZSZ",
  "key11": "4CXXpCGGR44cLugrnCn694pJun3sDcBuZQb4Umbfvdsm6y9iF2znN8njmEYwtedmF249Zsw7D4hXc7bevgPMkc3W",
  "key12": "4GQ7quHmbFQzV616S5K3JyBpkhBVevTMkn86htr8DUpik64ko7PBPTRPTRCZxcGU4VJR7aDMgn4vCJ4wTEEXUfL3",
  "key13": "JF4ArwygYZK9zyYnYohu28WtvE1Y8JuEMcFAaddEUjYtj5G6LsXuT4UtA5ZZABSWh7wCKe9epPMvmWnazydtRvU",
  "key14": "5LZFNa1vxmoqLDGJU3Av3UPJmCPqsxYuGYF6MBq1U3dpA6PCrepszjor8Y7JD1eet6L9nEtovea8uRtvJmYhPDEA",
  "key15": "4zRBgvt3Q44pd2rEHUnsMYCL9WMphMcW43wsVLwUbXL24e9tzU1vVUZFRZ7D2F24p8sJtAzxqWAv2NuurCK9mJif",
  "key16": "4wgyWSamzsd6UBiSrkmmNaDX6CuJdyycUgXcx8f7LC8JLbGyunfmE6L5GVwHL4YWkxZKqbRctmsMz7Zu4Dqpvo1p",
  "key17": "64E1HxvZzD2cfdgfcPqrMQyuQfDrDGeDVwF3sFrYbF5PjXG9JyBg6Lmcy6FVFcVwed8QEJknHLNmP4F6qhbYFvaP",
  "key18": "2r67nPfz9tpNZpRX6RoL9r5iKqSM3yS6xmLXm1XoZoRUV9w9eL7AyKCQL8Yb5eqmZwwLfRKwEaTftGbpacJVMc56",
  "key19": "4kpLg2vWxGdtJSDQW5kjHzDx9dFtx1ZqaeYwBFn4VvHCNcbdczJcynWF9uVWuu2vMw59ipvXrkY2BqzvhoexfK1E",
  "key20": "yfr4HgwXL84MqukEvqmEDzPoeyDodpQuM4pkcCswPmJhRFWxYS3AWfWJGvrTNrZX5oK8XbCnikFnSELfVeHKapx",
  "key21": "4gesKKC5HrHmiv8aPB62PieZGkED214JzQMgZkDmL3CA1YKUAn5kd8vLMyRwmuLQ3U8ED4eQQTqD9B6efG28WYDo",
  "key22": "2vuKa81L92gZDPqXfhTNCjGRApT8q2kcbogNJ2aGPRxpkWfAADTgG88PnEhLP8GycKbFWJmzApPdYn1LGRiRCGa",
  "key23": "1HYqjZAqbaafg5qDyh2cY65TnE8onHcrpHHHYb3ZFwE1dmVQvQW62LtPp9fjABjojehzQKMqpoM6Ud172qCBgNE",
  "key24": "4ut2N4xRdaaL4Pw6ntcaHhak8eLNYJTV8MALLrCTdRLpgV71vX2NzTFery7xQWMRDwWjDppXeKzQyNrFc1ysk4xS",
  "key25": "2qnL37fLnJKsfNkKZ5HnyamM4MHAkS6RRKve8Fo4ryNPCDJWdGskBCTSTMAYxoDensFxz25pei5BfzquEkiEmLPV",
  "key26": "5ZQUc9DHDvrJX91UNPgUULeiWnU1X6KiLYsWGHjeToVT65YwvbsBLto4wvZioPvUjP5rMntpaAkhgSv77wwwRn2W",
  "key27": "5uusprEPUCAsekVT8mKqwiVCA3qyRKB28b5v8W1prVpszzwr5c8CSkm87cYMvkLLfzJFWBKL5byZgW9qnhaXZeb3",
  "key28": "57xYkHLgdXFicsiaQHpa7M4dH8RCRWnP9cj49cVDt2nfLjKp2JKTurjU4KFsYYdP69nMMuJTUTFzaRmqyX5ZFaAk",
  "key29": "2Qd2PoJkSpXXBUkysgP1v9mAXxN3ViLVXyArHhgA1jTMp9jd7yVdHR1TpfJassuax2ZTGqoPEbZLUQYxfTFmFY7V",
  "key30": "4ewtSKoDWuXYsiath3LjiotpkmfpDoDfUedecmkezr9x87dzKsKAvtPaRP2L3TkwVRBZQYw4Wida1hUcSEiRdYze",
  "key31": "5zLUKp5SzLf6o8qxDfbDvE3vSm3kQCixdnffcWcmV7wX1pnxzHyz6DBJmmHwrTh4XQDjPTRmxxc6Z9nxkTZkyBuB",
  "key32": "5koxyspBzFmqwVXzfAUQRfjqDjRCVbQnFAVaYDes1TCr7d2GWC11VFH7zcbr6iWapC1fH42YW3JdJp7gL5zQ2rsN",
  "key33": "4fFaWMZETijLDohD4dXFq6PFewqPCLyVoMztqvRGkpFu6yUNLTdKQ79s5cvrRUxRtRjvMnhauiMeiHfDeVwA7UtG",
  "key34": "2E43nhCXU7dfjgmApyfREREh9kzVG9V4PSVCZhCfpHVFuWMPYxajXinw7fYFYhXi35DBQAYnp56bEtuDfow8mCuU",
  "key35": "3xTBsFWNgh4XuowBjcYoCRvFHmRoG7DSt8rv8PYntYtpLn7PietVx9xNjehYJJgTYawfrrYkCcFXLmTJhVDefQ3i",
  "key36": "4VNq9Zdx4AU6xnV7D7BuPGgVDSHSnrEmAHLzzdYSBtZxCZ8DjRMttbVBSRJ8utsoCsnjUCBuriRg59TNBvmkedEe",
  "key37": "rsodjDjPNAsQN2THynvf6FGoAgia2KRsBEAp9YcC8cfqYHkfJoKJMcAbFkc8q9cAtC6KU8E8Hv6N4czZuYn7L37",
  "key38": "5Zv3Wz872H8UVx9fnLp5zQwq2265SNd1wmLHZwW7qBkpksRNNx25WEF84uJeHDAuBZ2omu188Gey8Mqx1LCvSXMf",
  "key39": "4uxdw2cCec1Y1hcesY9pYVYub5SWMcQTAbXkb8FQMe9S4vUVRXC9V1G13VwtvSmYYp5nfWW95JoTq3DY2J4w72BY",
  "key40": "5woj2dK71NF6GDgRRzoQ3kYmwHApg2a67Ja6LBG2FoX9RNSukeaLQgkfmBbvHN2f7LjuDp72r5GWGoQScEtp9VUb",
  "key41": "LsbF2YSnAgHJ29hVBLaBf6rg42bxk6Hm2LjpEop5GQ3uFfxvJDnPUS3xcA2UT5P6pnqEdkYfUBmcX5niUMzD6pY"
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
