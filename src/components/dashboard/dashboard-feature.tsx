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
    "4W1JyFj39NVcxjKeE5zFpeFfatdayWSZuz5HAP6mAXwevh3FStKHcMW6KAxD82qAQorbhXUTFYTdSfsGEMRuhi5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXYPjgua5bZ95bEGFi5qUA4ySH6XUX23cuqWJbzZpdugRdLiC6wAeQbN23MWrsdode5TADsrksxtnfaWewFfxuL",
  "key1": "5z9ZDRRMtAi4awkG6Ayk3jMMecXCCACt5u5GqJutzj72UVJ6v5HDSCtMeP1rtcH1Pd4mSahccMtfRSuuTNAfj4V8",
  "key2": "4imaawTNKB3LR874fLa4jP4mfRDyeJxUav5Dtm5b1CK6NUKmjVNpiV5cDFrcwkfJSxpRiRk3oyQ1tZez1kSZyRtU",
  "key3": "2JyswSTGneFBc51LtLjJRT8qWXrBPEJewdbgAmRLQyR1v1UtsbARV7KE6gxHuibh4YNgWSN8xHsVvEskCYgC4JhL",
  "key4": "3mjrSx8Ky8GQ7x6rzdgFxd4wrCj24ax1pZBL7Cz823G9aU5JMjYcwcmwQe7ZQZDdw3aeMeqroo2T4WS54C7YJWnZ",
  "key5": "4dLm3sSDgh2K6A2ehpP5whPgRZ2oJMdMjBpd9xbBXyahcoHVVFPcYhtXrvRSF24rDu4EJGaJ3jEAEDMHe6cyCecb",
  "key6": "5ydZesPhjz7uZF7vzmobn146AZsKCP5pQwa73nUEgc7DqPT3CYYjgXsusP56MP8EcuBzKqJnwYRbKpM3ieGtuxxM",
  "key7": "4cNbjqq9LkLQrPHhrYZexPJ3qhsBY2wbJDf6sxfWm7wmPKRRkCb9TtuKgAB1K93c91TGxfnJSg6Gjtge67NGyiL3",
  "key8": "4in8GwDvWaEdH3vcsSbeZwNp5kSdQ8SB27H3XvaJiEEk9HbAtH9JEHmVhz21eBBcr2KSmksvsduPUfgMRXDVGcsU",
  "key9": "5yswonufVEHDVxfYoXuMXcxbMurpwE9We7M3Zbx29RWCT63H6hw8vp6GgVCpzAi4myonerWnsbnwCHXaqovzk3xB",
  "key10": "4MDkXr5f24UtNe5rh4eGciLzfr9uHx8vGg4mpvwYzepi7HDdVrCXkqgdnGN7SWjjLLPm1FsiUseVkb5rDgN1yrBq",
  "key11": "5o1yj6WwKNddHXQPaJyWysYWQMyvDKFtyptJhuwHtwA3Qswv1PiK3SSMG2CYmoFYhkP3VQYfcbALLT3qMnH4GBGa",
  "key12": "5zPvVhrz8oLsb5LbKHsK4tiaEyskacW8g2z1BPKCLogYkK5trM5NRQZSLbqijGZC1ah2waEJ7ywU4R9pWEpRBaUt",
  "key13": "5dqzioJXxiH6TLh2MZHCbG4kDAh5EXP2VJGWoB8ckbVkXyPpJW2wDkJeoEVQcCJm4gX4ainSEpwwawurNnnGGUfw",
  "key14": "75b7b1nmdjs8Q22b1fFAg8h4xshAoK8koA8mTeU3tqWjyQk5vKPKySAvfkBPCmD8fKC4hVk2by7bvNYZ5vVMoM4",
  "key15": "37a9y3CxumoFdeGQk2ynsN26VDJ2kXqfjiSwLC5JHovwcnPcrR6Kt4m2h8kHWZ5914e4uwFUefCiyoHG95BtMikM",
  "key16": "5BmGSi5sQeTB66QSR2xAvgfNd1XGdmZwdh2XfG97ggMsgHGk7G7PqNJyyrBYPZimnpeaoizBQzHypdpmNSb7tpWt",
  "key17": "2m38nWPVVnq87HXo4jQmXUXY8nG1aQJDKkFasy6gAs1ANt1J5emrqPftwrTmKsbwBcxU4UdfKn5fdMUigBp9PYF7",
  "key18": "Wpw8eW32eppxGSaPSbHAJZpHU5WC4Lv5PUbXV63fQh3uxckxzVwCkVTUa787pfqHck3xHwUQ76pWPTemyCW5cNz",
  "key19": "22eRTv3SeCypzDjJDczsUpg8xVhdDRM6YPCdLhyWN2f5pfYBUfg2o9kedMB8seA6LegQrx8iZoLa8mTrpxiWx1dr",
  "key20": "5UsC6FG5jbqZJAB7UweexMn6HWgDo7mRbA174z8GgDPGnZPTHLHhmcsBe9ieAS9hE4APCV2t5wSHXSfQh1ic8KBd",
  "key21": "4dD9wXvK3mgzBNQvpoGgtqx6sBaMwoZBQ44C4pBmKCdc9jaLfZZqXyRhpcYBZ5gMYZf7oKPy5LVGSAXH8DB1FFEH",
  "key22": "1tvF7mbgYPPaUdem3MjLLa1jvwngXn6hsC8dZ3hshnqZSe7CCkqndDmfZHk6ELzZeoMpfATDrFqw3BHrJvposF6",
  "key23": "5TupF8D2xhsKxJdr8JB1irYsueuiqwF3bJwcwMZGXUpxZAwpcht57ao2nTtQdE1Nfg6qJi6AP7HBPZsyb7ZTATB9",
  "key24": "5rwUMLVjgx6zjfLGZ5wdVA4U98RYt2zUHj74FBgrmxXHwSHTxp64emEgAzZafer2Sqi6ZmDoz7yAnLyYVTRUGtnT",
  "key25": "2LEScttEMDWCN6i76UjK2NFe3kPKohfAWwSxU25bui6ZeffctW5rYHZsFSe57AhTnQor5RhWVx8WUWDLffVVT9GF",
  "key26": "5sJKWpGKWfVq3vWDMFNo2vMnreE9S8TQEVCRbMUKyrfdovye5HWs3VqVPd27cJ1EYfT9tph5pNMkZGya4enMC8az",
  "key27": "5ebaYGZMKb1QcdYo7gsV61MQgDEqpwu52uH9QNme48pmVoS3g3U1s8S4i4qSfh29gpV3uQVQwr6X1YuW19BQ7zFo",
  "key28": "3jLKwE4LsB7TQBc7H8YQswEYQyXmPyKB9oGMNWQ4pf8181AEtmEFZr3MJvN2AzzzDrsBbCATmdkREeZUtybhgvpW",
  "key29": "4DX1TV9MjPJ7Lxeop2kHrCqDPL9N2SncQiRHrxyYgsmrT6bpLCQQ2beVHKfVUSUQdWj2JLkDwoV9SDzeffVx4ASi",
  "key30": "2bHcz6iwfGWZcfNzNAuMgkQQqenM2sggQEPRAC8Pr3DvjF8wyeWNf9DxVo1QiKLQXM88Aa9BqBq9nyyRUfUDKCrv",
  "key31": "288jxTpmVPqMN6V7HoBRdn9c3WgDibfziVvc35qNieEgmn9NBNT6yFe32LmhPKvkU8SeWZdy2E5Wx5668UyWAKKY",
  "key32": "2MCxxDXtow5hBXYUaLvBn5d8qxKekdpStxJSKRvmF366YQaYMso22rrwBRAdxHNRMTzMFqAGgQCS8WiAom9nqJr6",
  "key33": "5TVTDzyYcw7wWCkEasPBbsLxdLf2GKTT2i1GiMq18AWj3AXNtsnxPhUEQLqMsDtZbn45aWUJNxtJuSLxNtLhyap7",
  "key34": "5AjF77yfkE6ExB894MBZoxXm93j79MQHyVQC2SWUE3oYG3j6dFp1gx17tjV8GGH7fnCsqctEne5j7JnpRhZBVHb4",
  "key35": "539EQ6S6CuV9jRQ1oDfQVwSub7BQUDXHLqDr9Q2Lc88zcnVBu3V4yXsQ7J5X9QnkWLCYtCNS2ydXpRK3FvZsambQ",
  "key36": "5HkXRUpxmnpphG4QoR2rY1gev2mZoBUFiSKrwQxjm1PDV3Ppr836mZ4kPXWQmb1xUGGixQcm6YKiby3kbV8wrjt",
  "key37": "VL9xz13Lqi4eYzYEX719RYy26mSGq5DTB8aaW7EnjYtj62Y2579Uj1L4S27Ri5s7eV2u71PgiYvqtwLMm26UtnB",
  "key38": "5Pi22jqmd6h6Bz946eGDiQytDyBwzMupnJfQGU8r4jccZWJDyKiSAwhd8xZyNRibxdGVV8ywVcUej1ruD2QF4dJ6",
  "key39": "2p9R2NjeiqDRsBT22B3xnsZqoyk3dsVqmUyUReMgveWGDP5pv6QaaCxzfaSWjQu9hJPmtfAnkXM6bVy5NyRzzwoA",
  "key40": "5tw1BxfhLZCi6UXX3MWUgqWSWQUog1P5uDzZC7x28rY25gekbwqXdAJszvXmXgBUhqnp1WMJGwbVCq8UqxTwamDp",
  "key41": "4X5gzsvEFjryfLBj1bLhbUEpKRc4JsF9D3XiUn5JDo1EbKrwhX116po1Z9Ce6KY24vpAUv9iSySiRGr5sTw27PjP"
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
