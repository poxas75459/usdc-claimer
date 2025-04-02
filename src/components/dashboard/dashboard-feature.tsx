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
    "5odMGNspnEBw9fkXWc5ow2CXhwZRNpteHZEvnAaYDZwWkAo7f7ewSRNnEgscqLF9agf8ykPqjSi16ApWzRohM6zH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fh2xD7hxtSriiZmgCe2vYuv87GhXRuqZckdnTxPrvAbTAwM7qnQdkUNHy7QQCk2QZo5h3qc4Hu8chM9PCDMvxDd",
  "key1": "2pnvsppqYynQdbDC63KBRzcUdnZCzCcVWMT4ayFpcXEqcG1pbycCwEc8j4mYpCcckSany3cAMEpHkdHbB5mwFLBF",
  "key2": "56rp2JNtjU1zKCgT55cgiugAmMefdS6R83PsPUhesY3cxroVoLxVJpEjMoVCezQM5YnND8DzaAeeZoFrkvsHwVyQ",
  "key3": "4vTaTqFynk4WPe223Kp38z3MtD9deqhM2ZkQ7LFMVfWYZEo57n3ZCJmyRoiGywVhSJEAgwtebkbUQQd7JjvLaDY4",
  "key4": "4GMzZMhzfw6FeE6pXwTiWR9V1GBdKAkc6x3GJcfu1DpqarxdNZms2UB4SY9FGg5SJLXCfzSrrvdQkyKbi5fvnhqe",
  "key5": "3Wqtx8DqA8xfmwTKQd53cZFUJ58nmwXy1mcrqYtqHRbprurMT8mSxUTyyn5258EhjZw9ZMCXXnPZguhtoxSs9Q83",
  "key6": "3BNonNqfZiMtLnFDWCcrRqnJ12LbcPSaqgW1iVAtMAgX1cEsDFF4zvuhwV98a7ooADbT1qjbPbSAJTZ8W9gcKqto",
  "key7": "5bdoADgURhY2fRZydqRH91SZNhsaNpApLKLD9xdLDi8g7DEDJhBKxVZ2J3UeX2hCis1XqyyPAEvu4ipiQyNZRxun",
  "key8": "5witBdUvCCmT8guVN7ZCXPJt65gBcaa8iSmiAXX78DCfVu7RvYEPcmpE5QwyCKvXMoEhsVLteoUgiJrM5f63PCU3",
  "key9": "4ajYoj2exmwRUjdTNpDAFnnwSA4wZuGox8VQDiJ7z61nKpESk1dp86WcZFoDajPepX3rmNZjFdHDsDFbdmdxoLT3",
  "key10": "2jfUcCEMbNHdfiyeuZvaxgYa68G9HLApYCCLTT9UP319HXZwNVBdAXbbbQqn65AfyNz8ZUUHGrrz7NKYbZgmhR9U",
  "key11": "3sfkqMDMBrj1kmp7qsTooG89mJDoNcNkAMAhDxXWhMPjbiYLia1xdhy2QRXE3qFLM5wDbUPfp22mLPTJoSNoCyaV",
  "key12": "36DYBjLrq1cCdLYx6aMEXKEaVcGZXA18aiWYQdBq6qKMZvifzmLV4A5Z9sKjVJcWUKfp4H7FeG6py78bWwi42TWU",
  "key13": "41mRGCtAxkG6thrGvU1JaDsA5vQK4SygYgDc8yEd84iUArq6tGR21WmP97zX3nTjnS3psADSB3sMGtENivrRiEE4",
  "key14": "5wmmjdA29orsTRBWp31LBDy43eAZkKYqnUd27ffxM5D9RuaeT1QqT4LXpjvbin2165gxJUPSQoWCySPeu5inXn9b",
  "key15": "yDwyBGe3p6NboaRDfbSgAeMBUz1TcKVNxVpA3gQGQs32CHaGZPuDCuHH1Fvi42CVpFMoTSZMkhD5Ahb5Vx7528E",
  "key16": "5Hd8V81zHN6RtK9ZDxUY9iBkDmqKgQA2jLnYEso3MhEa54FtZ2JR4tEHGoQbQag4EySuwKG9cpssDjVoXTXsAhEY",
  "key17": "2oDe8fbURGRBz7Ke1btCDk18La348EEMesrzRpW1Q3SNK6uQtiWAkMRQRFkNjPmxGnFDnBY24AqSMVMAmtRJVKmm",
  "key18": "2HrBbcZL7XQcCZaJ9jBtYuFdhmFWdE9LyikNoPwYohA1iENuCeWn5DUBVDZMDqif5X6kZu12XRAAdoZ6asdA9iXZ",
  "key19": "2SpCgf8B9pfHXLNUoa9FXri9exSWqKjHBqGuXfLgLtHVtX3J3kd1j65pTmzyG3RzdfWNkAJmSSgdts5GcDcZzAnH",
  "key20": "4u6CBr4mjJdm39ibseUm81KRMiY6aHF41yNVBW8WB3BhUx4PjoFK7W9QbjhbTyXCcVPSvM6swuP6JbX68EUhZF8t",
  "key21": "5dxY5LSiZffvUTbptM9M6jcCdxM2NobCcYgyTHtBsEAZtPBHCGcJVtEoVSeL5iUZHw4JrNghEu3Ww39AcpA6kw4N",
  "key22": "4qvyM87cZoa3wVJ5i9o666Gvi3yiXHqNm5YcL3WKHVh5UfXruLhk4RmAtgMHTGphiBi6UXi8WtWcbA8L8ypuy4bU",
  "key23": "QSpBRx1gm46xwHkbd7ywMnFaAMvaAoypPJK6haeSRF6Rdj58maVrvpZApU1dv3vgoQM96132Lradv3TDrn8CnQn",
  "key24": "5uFnCu491WpxZmR6XTRPRpdWzeTuVYqtR7Xqz9eTfWDPogC8osjZCPMDxHruaAaSDpmdnhhcYB8hWGzsKRxoUpf9",
  "key25": "2P7EwBnJqDbJCqfWwDnxJ42SxBZzoHEM5XyU8Xtx8EZJ9S5FgGcfE1p2u2W8kbcoyiEW2B1B9EpL3w1QBtkFAR9b",
  "key26": "4NHaX3WdLSsuFYfGNcmmkewQ7WT2XrCaaCKe9CXvKFg8dZr4ccdZPDGEEapNuytD7m7R9GedVoupVMgoXKDsUA78",
  "key27": "ivRb7YtnKfZetKdG64QxED249aFVdkzyNCPa3AJFeuRZbBkQvL94dZvN7JrTCDk7iRhDBFvNt1Q3TAr5WNJY19o",
  "key28": "2qQGUZrNVodq7MSWx8iQYxT5eUQ6jh8kduKcp3kcQgjGRdYTRzgmzXMYF2vizYdko6w1FdbhnykpctcLwDCtHzpy",
  "key29": "H2s2iMeRrU9ACpBapZVjmt8RCUwqrXfKTMtBczobw9C13Dx5r2raKD49H7oa7v2RUGtn77dThquWfFimdJSdX1L",
  "key30": "4KvU9VRuHBNihip7ba832v2hkBdhrJSkKsyd9mhCMTbNuNJzpQDzwSWszaszba4ydhgngCT4Lcf3kk2pyz8WXQmg",
  "key31": "mtmJrDWB1tMcH4DUHHZPc3me13R7Timp64mTAsTHMLJ4qj2tyZjywaNgvbcyRCXbWwDBgJ4G7gLbMCAb2bC6i6u",
  "key32": "vvgLXEEWFgSTX8989L1EaKFGWSFjmNgvHrBwmuopJCkhyKw5hcCuht871uFmPH3udnJV3B5XC2LudsDbcq3cEUU",
  "key33": "2WFrZnWP4sAeFFM3zMZeXPD9EU2EBdQFycTSagYSgarZD3V4u7UyqXLz6rHr6aWswdY36smfGJaZD8JM6FGBveoE",
  "key34": "5sM4JVyX1RWVx7zLmthdGMuV51UzjdVgi27uXntKMHYoPUwnLvXdPkPr6QT5XjpY8GL4WvYs6ScDa8iKKdL2Jk3o",
  "key35": "2ekQsSrYQP8KXt9JbkQDUaVzryqPR1jztEcpaBsFKGXQokbdJavCv97FTyjPiQNPWX42ooocy1XnHEMvyDd13MJ4",
  "key36": "2YWG5CKfXqZj3qVWfSnvr6pNCKUfT1jtTmpo2hD2fLEJemQ1HxsbCvbJwebmBXn5QKq7CKeq6975sCV7NEZiZGEj",
  "key37": "3mXZj6kWwsCYqSHZnrb4Ha8KLX6brfAsW6HsqyF3cNS18A8BocBWE5XoY9npmuEnm6sJRYZHP4ibr5EwKzRTBxFm",
  "key38": "5hUHUkbsdCgQpVcVkpjnUsFHX1QNjm6iRdV9ZPZLrrzwvCQT4pKcDZCY2qQCeAzCtA2D7AHptKpuZ2Ssnj3Kw53k",
  "key39": "5DNxK51Z9tLakRa2vVv998RenxQezXGDW1MqpT7J5nbPPg6AB9REw8v4tvnSPePmZS9tLAg2aKHKXTyri5ADjY5b",
  "key40": "3YCd7YEFjsNygWhN2XgJMDSELotPYernk4TbYrFLR9qX3yyTbFANivD9HVsymBgjZgxnJMAn8gdEcSdGs2VCPtcH",
  "key41": "2uAvpcLsMK9RqbBS7QEty8ZRvTzdKpa4Kb4d51VCMTxWRkQcxNPwWWVNsHTkmQiEtniL6JGf8CvqLD3HjEB2Lxgj",
  "key42": "3EDDF6w3CydjG1MbbwpjSS4pZWyKFXeKcTQDYEgzuDaQ3wiVGUquJXyJjQwrnDXCPVDucMY4QW6A8uAUxWo4TfvC",
  "key43": "4TXs33q5kC1vMbbwXdmiFDix8QgACxbTXGvGoMxQYvFqqJvSTg7XY6JEQtqF6mUhtP1hsLzF15yUXacMTynF8vhx",
  "key44": "2JnLX4wpDAEJZAztVrBLkPVL2ZNE9cY2ihZ25kbqxr7zTaepug63LfJqPPtpfCZfxRWVT281Dqr9cJcBHKW9Rb2X",
  "key45": "5fQmgLJ3shB4WURTAm3ZwPB185fmV2Z9Vsx1tXfB9u9mSn72Xi4e94crSZJbY2d3mZyZC8pRG6Dz1RXAj5oEaMRK",
  "key46": "2eKeeywywpJ85YvRAutzdGsfzknLQPaEn49Fajq6doRroBnhJXpBXrntURPCgUDmUotWqqajAZxQ9iBSKRFLY6Rx",
  "key47": "5F2Hq9yNV5M9QKuDc27Yq69EpSt2Yh6LphYpBX6PVLQ6xrueACKNA8UbAx3pwyFrLLmL1vXuUQDNuc9RQocXu3VS",
  "key48": "n4UWSDqTrbe9Tn7n5ZagratpgaV1f6ozZS1uPHoYHNkfZcePzLe4RgN14zH63ZALxt2TCnzyGvpjFNkEmeyuevx",
  "key49": "2huAbxqWbXirWJGNGCY9KrBuq1Qyap16cq9DZRwhmJyUVUfjXG419DFj5vJ9jcaSNBpfaeS44yRy2KZV2nPnVt8r"
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
