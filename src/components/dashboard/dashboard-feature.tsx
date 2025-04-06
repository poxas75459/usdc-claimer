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
    "XmQjeBzJHtXtASvKRfZjVAZKszy43rLhUDAHZyUFmV8krk8GtNMszykqn6AchnGVAAoPYAd48kmjLsy3LWDsSNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7CpGjvq8ZqMonnWhtMQ28eWcCqCPyHfhCJyaFV3PsfLk29cdpiyiTx6E4DTCV9wKvpy82h8YY5fpyZqpP4Hii8",
  "key1": "4dWzFUiGB7zSbZx718m4hon6Uv7jGRrWqHx49BWgfA4227KRQ96x1iVifLcbQd5w1Us8CqRix9kmUHionsSuV9sq",
  "key2": "zaX7NKzkeRb6oU7G9tqLJwa6Nv9cAzD92emswyMi8dK7KAZGsYpnu9rjZZ3H2n9YUvTVogTHhCaRd7YEgYqd4pK",
  "key3": "73dba96s6kqyKFeCuhkKupUTqtx2ta4UYXQRqMeZL5YN1Fg2E7izQj5x6fNvbEaEe9c6dnimxK6CiNWLJURrreC",
  "key4": "3yxG74kHAoQWK7rQQLRFZ6jWEUmMFz7DwTgTzWk6eESFRJZwF5rhSqZVbjED8GQtewVNpWxvYq5VvZHnJAbYuDHE",
  "key5": "4Tb8PHJ7cfsQa9xhe5BcsbkdkzGLUgBvsPo4Z9nJXZidiM9ys6WJNk3XWc3dMvmu6huFAq6VeevmcHsDZhsEZWzD",
  "key6": "5gmhFNKbH4hmQUbXhXsYuCBQKXreE9wdwBkrG9haHT2PB48XtP21XYwvBG888aRm8jTNnH27df5VvaQFwfxDQPP8",
  "key7": "2PzFcTg35FX1mwPjqvBMRBxg9Wg8sj1UwL9VYbYBjpuDyA2wmFhDMJTXxmX4EoRehXobXV9zBtuUmcT2TGuCD1Zg",
  "key8": "3nQKDwa5vcR934vVooi6LB4Vyp8ZXYeDEAk9fnsod3FHThYn57EpbTqGw7bteQ1L8or84D6F5iN4A4uPhVzp9nHP",
  "key9": "3eR14wDkRMofgRLpRtCYPiTnUZaUmsmpMz458uNMMvNGxtBxKT1d5mcBC4qfutmxN4DiAPPhD6fYaMDu6K19gWEu",
  "key10": "3rUejtmshuVDF7RCjUJyi8bUBg1FSUaPNhknwSHRAKgyP7TNyrktbqiUtXdR4v3BH78bwdqzMUg7fQJb3DePKNu",
  "key11": "5fFdthdfjerpoMq7ZKPdJMjSJmdwpRdwDDZxgZABMrykz5QsUj2RuCrrcrR3RadMfCMaqkoHxFTVCruThj2gFJjD",
  "key12": "5nkm9no7uenhAYHNtsS5oXXr53W8nd6VGhDRC6gAce75qJsnaTp89TWN9NSZnjQzVnYQmeqMK7C71F29BDpLMaHt",
  "key13": "QuaYVsXpiJmrpoinfMMQqcJk8wzYQdQqST1znZB5UDQG2HAWuiHrTSJvEzMFF8CXafVkDwdCVLfE8hiRiBqaSYh",
  "key14": "59r42HpjTQYHjf64B5kei2n7yiweN7PzhPnJw1XhgFdgPCi7Du6gnoWvPmpbtnBe2PuQn86TCK82JdT45Fio7tgb",
  "key15": "3ugBPoif2FdQGcpDYTL5vDHLqqQCL7rhxYyB6drsPBDKAQjH9DtB1BWCVNtAb2GEFoNwZbTU5YQYbqCDQykWk5UN",
  "key16": "4tsBFqTLv1kyJBBCbA5Xzdyy6L6nAhvCfKKPunkMM6haXoEG3QufAnErFXUNabNChEA1ybZsw3QpBCsv22AkqMdg",
  "key17": "5bSqF3p8B2guALf2ukMrKFL52nheLbTZvpxNfuRBU1ZkPW8DZTnSzVci6KRXmG9FVujKkGE812YXDM1DGVeAXQ9F",
  "key18": "YbDsZ5gYhmXjQPncaQ6xBrigiqvVLTD4oWzWfoSDGpVweseFQm1YFTtivwzkf8GYvqqh7xhxAQW7p89q4SvcbWj",
  "key19": "31jxb18ZZ91mbZJUfoRSdMz4CSofQUMAJHSzXJz3Em8RXzeEnirGW3949Sbe5vo7ed1v4YafcH7ckLauh2GqojZn",
  "key20": "4kJVtDFhpn5orA4ZdxyAZWcxjQKbPqCd4WsgrfNCPmYcc1HwMVcQkz8TEqYkSugfj9xAT62rrgzNV2wKsuHPB9N5",
  "key21": "3UcX3FdoopRpHMAz1HboY2F346xAeyjTVS4BsPe2SMgTwEctreAeGpVJBTfpNCVrjwjWpmoA5CUJjZCR2zdSZQT",
  "key22": "Tq2isKJcvqhPjnP8kVMG3evvBfeq7XLChrKBykC4kcBX7GSFqjp8XQuUcHf5JkuYwAU34xh5dAwefU7HWVgUdRZ",
  "key23": "4vvtwNHPFW7bKe95ExzC15WYTppUjamxTpr95c7GcAS73hP61LVYWSxtbVUJbACWaMynneH8zeAkLUmnHXzHdkCG",
  "key24": "DFsjN4B39KiTweWJ43qPgwqL49EE7cjVETLhRShR9V9kUGLTQYoa7bZuCWmyvJcu3Lap38Qf7gboUM3kRVyAXo2",
  "key25": "5a6pzbBfHXyGJgv8Jyp7d9AhrepfDFNep1ymzBQ72LTtW97cCcifM8cGofQZ5f4NzrGvsvUbrTHz2UdybeJAzdu1",
  "key26": "2age5vbPUZhtzhWAnaz8zRq6zMvmoxPf9VTsd9iEmaqGpCKze46h3NVF1BudBDHueLhrcWqyhUbYWRbqNeuD1iv2",
  "key27": "4pHRoAvfpmgcz47qCvaTSHRhrdGUxjn8oVUjsSS2MWuNaBvWWsqCPa9By5J5pxRK6o9rwZ3hgPWt8bvAfy3rK5zX",
  "key28": "3MrhanUosyzHzogrpCo5hBkHha638uko2YuksNSZs3RTFLC3cMMPZtZ8FKMeBGJm9z5moesG2jJoAjU8Gn47xQAR",
  "key29": "33kC3FNDpPv6MX1uUrVpBkJiGGV3Dj4ABHj6ZtTLt7aEQaZDzrrPR4sK1QrDDVTDikkqpK5ErRLzkVKewGFuVUjz",
  "key30": "5WpmAj8YYLC5gN6hTKC8oz6GikQ9B18iocyRiXHifxrfujXLh95tcwV2ffC6iwiAXn54XoWgxNz9tnVfgw4pyQUi",
  "key31": "3yyF8dpPe9kwZPQigka6bvbotqM8XbYKdjzDWzNTpjN9xczsGq5HR7djX8tkwERyXoae6sSfdEW8ZUjV3iuYS1c8",
  "key32": "M21kDzXdH8BnTP2dsfzQC6UC2pf6hjYsyNWn3oWmWiGq1s8KDNGH7MbukTmcV9MBk55VucmuubU2uzmyRqTuDdz",
  "key33": "3khuHbgQGCVzXKc8d81PUCYaadY8D7PrDEz7GqeQ57x6pnqg5UNZT7SesuYK51hZUToAtEcGT7EpNoyFUYxJoK61",
  "key34": "3kjwcVNjLw7eqWXH146vvsCYY93zPcD8ZYq4LU7CuiLVBphcSjeYvQ7JFsLDHyfFwjrj9xvHtnny54Jgm5nPMEhC",
  "key35": "oK268HctWtGeyXS6q5m6JxqmfviHUGBjQYCprB9QxZipgxS1vFTmbwHwQJCBmvJbtB2KtX3eynM5uaYnMcdEbWM"
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
