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
    "5W6ZL2hkPn7cM3j4tk9TuVK4ufzF1751iAa2HMctsKjhabJfw9tPud1ijR2WmVbCDagBbhKHG7T1vnT1HMtsSrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJArnPetXb9RmMcRF13pNrmM3ZnhH4stNEuwQRq794RfJgDky3JBJnCpPRkfEpjMEEC8YLpxucWo1oXnAdgxqRX",
  "key1": "5ZqsexDMyzKzLuY9CpFqhgZs2Su8PZFEBz6FjEkkf6pVgASWYYFpmkQjptsHpiL7ATdEXx5DyLhJHNP1YLXSdnaU",
  "key2": "oybCnwAMD1TyCQZv3NTKgBiMqEiasDuMk6AnNZhdWKRFA2ASgRybnwnEMcnidDPTRksnCYWjQEPHyn3aHD6R1PM",
  "key3": "3VwWLUao5c2fhrsdz1QhMQiMX4mmw7AKRpDoMeFNyFR5AW4G2Q4D8UmEcHLRmg8nTBpbqbcD2rHD8TfNH8aESDc6",
  "key4": "2LfWoqtU1cytKPV3QmTDERi5qm9mJPcaa649co62qYGYFeK9pMYiahvX5hAbqP9a7WQQmWX2LVGwqonfWPogYR93",
  "key5": "4aoAE8CxBZgW9n2a1jqtDtgGimsg48NimKF5ntRQir7AMfBPB1YGKYtjMsd9S7TiXbRwvBQD6Kaiiaecy9L4EsKA",
  "key6": "3qYev1N4sT2imCHjDHLmcqJeNSQ4SXhzhkiVho6Qhf4tzbUiYoogeoNa7xy3kfs7TfgXjc7AvxwHeDKLn3LPuZSb",
  "key7": "63gBdZ3c8vLQCM6cHT8fLyNu3D9tT3kzwQbH49GjTdYpeHeQnWgDwSKLhdNmYu8236KxH7ahporDdkw8Kr5jh6Qn",
  "key8": "2bVV5QAhk7Yo1BwmU2CVNjBtDPuuBSwCGUQeh7NV49dSYDf2wEWxwb6ZC6sHmSoAT9NKKtk9QZBkAmpKmK5LGZbT",
  "key9": "MHsJ4VqG43DrRFRjTJE67XP2R7iiHgWAELvhVCko7shDu3i1451XdLCQ32xr7fq7Wg7kXNXoySPKeYracgnswam",
  "key10": "55qzyuVjfL2vDf4njFesCreGH6pjNKjnqg4WL6KyGNukAwu1HaWQqLVgDXrXijz33pyzzy6ac9ebkXQvebjRDMxf",
  "key11": "66ytkxhVBGVjQt8bbuvcEnL1SHmtEdZqufMdkStdstfkbrFWUTmQs3vMuQEhCyx6uaZhdrqGHAPm9druzUEvbBJ7",
  "key12": "3EGRpEgXnB8SgYjrv8sjmTfUoXHgMKhR27Cuus6ctuyoDfjThotoGZMepHv6FtsGpPddzFNJgHht9BGQMrJotvZs",
  "key13": "NwXApTDSwBQERqhyjFL2J3CDiuzKQ8E6BdUbzrcifPvGGYR9svXhAqo9DcUPbaZYJicMyvc6RPtBEGns5Q8TM3P",
  "key14": "2kt7bWhSTGBtmM4R9kQCmXGZ9YtBUbim6jz4X7cm3bz9e42pyBLatMP4RfoJbe3bWyzRPhzhfsevJuZfh5GNGjRH",
  "key15": "5ahWmTA628hnbGzUQay2WDruvd2cSYZDodAWajz6edbrxnGbxgvCPHx8n6kvJVmUXb6YzJZuzN3o4pqk79uyxBLU",
  "key16": "WwLVP5pVFQ45XrccGPWnwSRZsqS347ivX7guCUmJXZsMuAEwrRc42oThW3fS5XnrCXvDMs6saSSkqecLfQip415",
  "key17": "4cQe9w6NEZ7pjPgMgx3oDPffJJ7DWZNSVGfp8c2YVeqHJqjfauizDheu6muxiy5agxm9Vd7yQxR7t2jgbWdXZyBp",
  "key18": "Dogo6zhaeze7g2JWLSgnBoCU56AmCdNtbXeDsNdjR3P836AU141YfcsQrAmiu7yckGnpPTWta7k1bJAf9fBw7Aq",
  "key19": "2B4HyqruadfbSFBSMJjNRmxak1SAUzUSXR5h3dLWiDAoK48QoVrfcU2zUN8emAgS97RwEyrzYMi2yyVvwmyXYmPe",
  "key20": "5wzKu3qiNSMDKcKBjkcmCheky6LMCGcUUUZNdGgHcbEMygSf11CBRRQcGoXYgf4NH1diL3AwZsoY5vdqc8wXhaqj",
  "key21": "4tbMuzNr8Vx7d9dRoNr5ivPWq2WKxMkvj3zxZ65QHaaCHwNCJdLtAJAvfRSoyK6451UQZd511Eewa8CJPW4hJvKa",
  "key22": "4wGw1y5yHZpJRTyYnq6DVvcCcwRRoW5F6XVhHz4QnXLJUdBoS1L3tCxy7hCHE62Xo8aKAgHaTGXDWV7Jfkutk7Tg",
  "key23": "2PnHR8n8Mu24b6YdUWrPQSbGbvcRskkmNS1aCaiYxWL1MzjTmH2n5ouxVt5HHLT72GHTBXM1qzZdntwX5kw25Cih",
  "key24": "WdU2g7R5fjQGwZ1H3uU2dpHpFh48s8U4UR8DFM18PufHcR9gjAp7qrUBrbiPWKUQMZ5uAVfvLbBuMRuzziBrBEV",
  "key25": "5JC2p7oroyAMBvp9WQMEGNwTWawDkXkgzkbU4BJzYzbyHR32c8vwCPNjTyt5FNPCSLba7UG3fw2JxBZTgkvdDawD",
  "key26": "4UzLxjD3MFE7biz8jdzAFFuXF9YQBkUaVW5iRNBnqHb6UphR4uNS8cd1g92u9FahmbksrVsZRmFqgruPVMvnvUpG",
  "key27": "vuwRShJYhGrK7Lghz5bb2qnY9KWADHf7x5T9DxarkJbpAsdPeeEpgNhUERTdGu8QfkQVSRh14KgEq4A78nKgVBb",
  "key28": "2MTji8b5KHwfw3cmwqVMAjzC8yVNwKpord5Mynw5QodFo4WRS5WbLEQGgiWvCr8QLMsbo7e3NSdYK6yNhDuHAc3u",
  "key29": "2Muj7MZjudEA84x6kWcLHrvxwXVex3pRjwMS16oMFR2iVW6DULUYiTcCQjhgUqtABC3T7ozmvsm4cPCzj5hi5QwM",
  "key30": "aqbm8Mrq2odBJQT6qQgEmyRvhLLcRgtx2gGZte8h7AKPsFENCDCL64PsP9JfAmgr9qwsRn3xatbz4H6H1mBbW7r",
  "key31": "TTaNRQanPPSGGBChK6ZjtMGa7VpofAL2dSh3uco3kDmZEwrMTtV4WmWeNxnZSVKu1RvU4xMu6ZHJaYEHfCafGyS",
  "key32": "5MLezCF6QZ3SFmAxnabXArNYSs6y1wv8XKWQUCXnubfijikbRJ4cBvkoNaTD42p6WuWmVt8q4zsvawVzGFR1BwzR",
  "key33": "3jNdQBmfWkjUnbNhg6ptrtFyJ72dnrSaf7MAmddLCW7BmNPvrtGoXq2bo5ivhrDMKYL2jmtrjoBfgRBC9cAA2usf",
  "key34": "5CZfHYwBDKtjsLuKFP6VJkGWRuTo1FYtZLsqxAkPKDDo1KfHy8VoYzmWiGKYFZQr53fwa2k4t1kWzvu8enVJjV7E",
  "key35": "5Ftensw4fnKakX6XFv8rk3BsLUfPMcTBxzP6ePq6pXyAAA8r8y8tyKRERutmX4q8CGRK9MRFVk2aop5MGngiaGao",
  "key36": "kX5z7YuWtHMA3hG1JCzDvvdQYaSibMCGTen29DCyk3XchEQZfGGoy2odtiVctHSDda1i2CMTmyqPSJ8PNappXQg",
  "key37": "3Fb3gJvVFxW5RygkKgME6jbQdsn2aYs5wYZeVdkyszb6JL119FU6mdbc2inx2GED6RFNnJs7dBsBxSNmgDXMgaAh",
  "key38": "4G7zXiyqgU9KdrCC7DtqBiEs3K48BYHrSwK75WMuvde2WxhG4x3BPx2NeeaaMQnZ6NVBCuVs9DLxDwFQBorX3nQb",
  "key39": "4vbNHnmiEu4oL1wVSyq7CEoamA67BbM2fqngLTdjaVSv7UpWyUc9asfEwaBZN5gdB1YiFLnabicmBhRnHhwVyVb2",
  "key40": "CkD1v3vtzw9LEQMXnWfxU1BkLD3Yg6oKjpPEREYmQnt2AJu7MUK2gF7V9RE9Fi7bnLjfzoBACfMSvWCyxS7LbrR",
  "key41": "39FEzQZzmwWJG1UhBrkyvjTLjRVsRFV49eAnC2iHyuWFo8QYVvgN5xNczdwXy1EYZYBWCPzT6bg6UrVSZ7gs6PUU",
  "key42": "VFPBm44wqKAixWmutNs7wHD6eQ2N4L128SDKPNFd3wgjoe27nfiQUkRo4QScwDSmgrUaPgrdRpuD14rBFLQvfU1",
  "key43": "5DmGpW8fSNtS3osR5MxUeaALtBHgPEoNzKG4UKFW4VQYCrdsZfkVFed5LvHyiFerzdfSoion6GVTppBJPGt49rXb",
  "key44": "52938LjkgZee5ryaLTYsUKivdfyvhoyAX9heasUzeM7yfax2b7NbL9nrNNJVigaKqBcJz3PbXjfpQz5dgeYvAn4N",
  "key45": "38pT42WGysuxaKAaFVq9FYn7fayMzWDEUMHHduKGQvwQd1X5HAQp65FxBt8KD8xvLgR9EgYsbZWcqCbXAZneiLZK",
  "key46": "3r94vfqGhCmAu6hruJDQNxH33ndmtAeqxXUkRs3EUmBcDzzhp7TghpeTfdNZTXQuGWFPGYrDQrPbeKuzezqTfhxF",
  "key47": "3VjEwPqsmbs2DQretPpMySpepU9QfhE8me9Zgfynu6rUjKvcWbgBPno7B55VnjPnstVb5FSbE4p89YYAcEn4iNQ",
  "key48": "3qCqd3N1MsgZt2MfwkVdt61bQs74AfSXNkdheV27qxcyPoS7CAtrQzkFWy65LpwAKyTaPerjLPnEngLzkcxLDJnN",
  "key49": "3MktNhGBC6m4wJ8qKY73UcHjfnoDDdpCfmu3xMS6eZxnfqBKu4HBB2Vg8ocW5r6nXoHaT6koSwiZEBKXFV5Nqh4A"
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
