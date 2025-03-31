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
    "5xPUHV8bwPGgL7fpgDM3b52oV9BvDrmumEpYgnmPDhrdZBVdsAxvHdejFJNb1o4ZEEejnLm2DBTP4Qj2TuEjqnR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578zuAStpSSfdSzKKcFwyUDYukhfbsTKTiVyPCUFhQZ2SGYdfYLe9Vzj8xBxHJxQmxc55PZPoe8W8T4pvpjxnbqC",
  "key1": "481VuhNRNnLpPzvvjuzZbzXtWXk7yJdHyEPuaDSioS9k2VBZjHvs9RngA7sfutkKAsdwhMCLTmX64ufXyJuFnDfM",
  "key2": "4kYNhwSoFmXft9UQKfn2C2wyWMPPb21qhBks6QsDpnWv3DpHKd1h7BWivKwGLtZsdnaMFVZYhRK7mE11m46VYuBT",
  "key3": "34tPkvNZpzQJ7Hz6T3dnEYHq1o7FNudjKheNfuS4spMJyFKUe4bBk5PgxbB4JNytVzWcV5YZyBFz45Zbf1UQ9XdX",
  "key4": "2Ca8hvEfwBQUB5BokCK76kkd1VunANbbKjkJPAcvoaBrHQGq9VmrN44fLTTx9MV7gNRhoYGGk67CwAjEuj9QwQHf",
  "key5": "3zDCFJSJDiSKmSt317HphS294Ck58VSKdRKrr9Ui6j8S8oF1UMP4ZHP1zsEygnpcyFV7e6MiWCL7ymQ8reugYcMR",
  "key6": "CGjgGsdymKs9yby3DmEfmo1QtcbPTxu7bvc2f6LhSvgRqCsLk7QncPsc3piUQu5hHVi78EejVHXjadKeHwzEZjk",
  "key7": "5nAyDcYoR7Ua8VpLMaEWJA8WQHKfTU1bJMTeBcTCfUdnqza8JcPt3KBPt6fY9y1QXJUMfU6etWVfG1ao1JNGJ3Ka",
  "key8": "2vr3QSGysMkhLyzd21qXdZJ7RcmZNFggaMCPHhdbWxkS5eRT4qYtSodQFvpwgNSB866r3en8rzuvcEmsgXmBpExX",
  "key9": "5RFe77dFu6NyDWPDLip1NNtBHcEdWTHruC9YqoJAjCenGYP2wRTv1BKd1Whs4x9619kfyNrwnH3EACPpyuiReKa5",
  "key10": "4atp34WRLWKfbCaMF4wqJBoranM1hvUiC8RPLcJDdEqWrQwCPsLgqKhNSNm5Q4E8LyyQjJw9BLis8DRT31WQ3sj2",
  "key11": "41AhWp2PNbEXWiPDDKon7Pi1owjitGicdPvea9c9Ga1r3yW38zbteBm1BSzB7GKeUeZb5Kh17udMtc3q5KUCsrtM",
  "key12": "4goNHnPJWV3kufNGghNNkUp2XpprzMGWJfXsp5wWj73zNb2ZNu5UUJikfEfKQS8Cbh7Y2ghKbzhqhDmfReo5GQjc",
  "key13": "mtJcM7e8hBou6wbMc1NbgYkSDcuA2C4UtzAoKHi9y2NhCotWFFkVG8x7jSDSaMuKxgsBnxNFBS4xyu1c7KUBaZo",
  "key14": "4samHo8rDepgSXUdSsMtpbxuwvLdj4YKpkUfGebeB95UHxUKHaTCviutFZ42JpsckMspB1fZFjcXxoeJGK9tdHpw",
  "key15": "3s7f6uUe4mcVizU5z9nexFVE1hYtjpMEHQG9CCncJ7UgDAy84Z1c14Fx2o6uT7oEGuYjQW6EwgSPmcAFRgoYhtwG",
  "key16": "3esCvttEi1FPhN6PAQ3iJseh3Rp1BHKiDEmgrVseVh8XLiDBtzF8VgRPb5MR4m8t7F4iwUcowhNRkPbMfTWLFzkW",
  "key17": "4ous14f3N9nvHRkFr8ozLyWieBp7wpawSmtDbAWnx5MqXPpiNY7BCMcXw9eZXGAyC2jxLdRHW72yFuKZ4RV2NSLm",
  "key18": "5eULM88dMX3PDcUAtz2QKaspik2uF6EmN7JB8TMz9EDCVWzkGA4VwXTx3PpRyCLeefLqkJhMT6F8u8nkojQnMaQn",
  "key19": "5o2hCa991wpLWDY4JH8iYhCpbVQkBA3HzNAnnM3g5QEvmiJyHeZxtvf7D23jdERcicn2N6D4KqgEAi7A8LYbiNG8",
  "key20": "5MHdPg6ecUARW1iernD2uobhwiVxWGwnCGKVWD1my5kwQ5GUB1XDKmXdor2XXpCshHgC9RWF7njnxAankxZpKEYv",
  "key21": "3YJWkSjp4uxnb6ec8smaEB5kqnBgPaWNH6Bp477Ua6pt4RJvmZccjfqdFBWpdfQYQRN7fT17tbGRyugtmSozESYC",
  "key22": "4pt6U1wb4K8L8aMnuwLuHLXT1SZZydsjjCKzPcz6PYCd6DgkCikf8s6gmrkpM9PqhQYP18y4iZMddjxJgBYJuqB2",
  "key23": "4ZuqMajHDXMWDft8hyonXLH1CQNrN7iFqxFyAMJWo1vHoyiMPS72H45vym5zuQv6CSYyV7GXjnGyNyk98kT8MjyX",
  "key24": "4KUYvre3eYeYBkPh9LJcmcEUZr3URw3iWyUjANee47pERfEesxEbR6VhtAt4XsCbRZ8vVXVaUP9Pe1r5nJXiu5rY",
  "key25": "iL2Qj6kPM9ULkxUvYMKMj4vZsmbeCyWjUoTqGPN2rKFPL92YCQrFqCcwfCMQZeGif6NemDHA91qatE26WWvhYu6",
  "key26": "4xkEb47ePjtUXjGnrsb9gBqquktqcfUP6E7Lr7ANwyazwq7cxdkctp4rpbKAKwTTEoTwkt1xUa9Qxeef8ji7TQPU",
  "key27": "5VF7zLxattB1iAEqdbBL34MeAGX391k4QrYzu8Sz4BE4Bi9x7UV6N7DVVnS33GvvDwn8s3WGPnLsVeAYaf1JN9PM",
  "key28": "3DSQZkozUKP8aqahgkseAiNFFefoZHEe2iVBZhawofrR2WSY7GeHHHMnSz8o7PU6p4MTyPGkTMNdzLHTBT52oxR4",
  "key29": "2BiomRhixUCbpaGvfZVRGg5eLPnsThFbxbyTdfXpg131pnn8FpQDHzv2njSdijXniab3QyRXFit2FRjNoE4RLohV",
  "key30": "AaquuhUGnCC2ZhXZp2MYLRWT6PYTjufwdG95GMcDcUST8aSzf5MvaMqUsoApEEowVeQZYtFxMWAhjBL6YiLJv3v",
  "key31": "3zMTPwo6zqLkaywhrZsRQRDrC3brJHEEbybE2qf6cbmvaurUnTiKBSQ4pFPqoRDGmh9w8paH8VTNfQL8BurBQeNs",
  "key32": "25MXFFE4igfVbey8AsSQ5rn1EKZZokTgqtfP7wSDbaJHicYyKTWimf8STNUsL83ZwFsnDBdZonzouDjt4wXKy6tJ",
  "key33": "4jkaWS2cr9AqspRApk7tjcrBKdftmixgy8bwM81biN3TvzrNj2ptQ57SzKuzP7Memexki7Fot5ZBYKbjLZFj7vVZ",
  "key34": "2vEbdfVMmJwAR6v6dvXH8M9h56w7wt9rkfUsj2e5uRMdixLk7cjRv7CzqwpsjfkmJnaDkZ86xgLinNPWCfuuZYdX",
  "key35": "3MFG2QGFL5sCiweq5h7hWLrW4fPXdnPEx9GDr3wS42UQpinRYbehCNiDMLHh8n9C4Y9tSFBnmd5ba5frYmfiSbrc",
  "key36": "KNA3xYzveikAmzgny7o4KFizjFkX3M5hEHFp8JhCEXrMiMtFkxgjmtNw1qKTAkweJfPmkYqM4ZUtCkURpEZdGCd",
  "key37": "4nkt5TJUcQ6ukcrHqjWRikz86srMoPmQUZQh95jXEaU94aXbzRfVMPG6fY6m1SSjzbG5stxMPaeYSjfsbkHDsep6",
  "key38": "GmTH8nZPhCjoV8j4aVFvCoFRFSsJX6iNoXdHJuiDEWakMhURjTNYJYLFuGkqYW2rKXUh9FHW35Qf28k1onFNS1s",
  "key39": "5uKzQsBGThcrD6FgtpwaY2jNK4VqJTYSWicsEqAP2xPgi1dd8dHEJqWCvDES64DQrMe2iBCQgrLaJQX9UnihPuq9",
  "key40": "3FnmiCGyzcKkTNcD21P7CE3XZyfYJ4opig98Y7oAbKKx6PPb1tA1eGEQXAVgyG24ypiCCF1zpQBZn4ddQxur8TDe",
  "key41": "3kHXShANYEDso8TWGf9SJdqafR2ShRQ1245ARqrzLYWm4xzv5T5v2HcHBAvQdnUPyQnxn2K4MX8iP58iQ6wLXHbL",
  "key42": "3gdwS7u8WBRVsuUefgCrfdWAaQpEPPSrzF35cpeFPRDokMmaowY8ZVSvsW77zhNmUCPqemQZBK6eYcEEXB3pJHrB",
  "key43": "5iPYaWmBJWkcB3W6jwKPk82aNrELwiwkk1oX2BrvJGnM8DLe5ZYfX8u5tCdkkg7WnReyJuohqkqhf94TUM6k5grw",
  "key44": "362znmTtRz8x5ve7wW9q9AB9ivxJPXDkzhc4igJUHxgCxJ2rXyV7x9i1EBD3XdwZ4RPkfqu3dwwu2RrD3gcNTggx",
  "key45": "2hFGCuZEyXuKTW5dPtZTLyB4hZytrwGtvZHmQ34Bd1mwJdegnUNddJzQ7zd5weeas67hMq6oPty5pABLCofzYD95"
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
