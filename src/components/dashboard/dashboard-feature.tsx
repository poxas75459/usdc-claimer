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
    "2i2PgXxPRbsy9SJvp9dSSp9gsEzw5BS8pAUSX2X6WwKBdmNtUfTBGT1J4WYv32ftnX9x63je7sPUWGxtYyo7ibV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqN569ZPdo1USgu91fzYKau1K77L7KFWbSs1TnmfkxD78217wp7Z3y7UeH4QSCBJmLbxeGp2SZwCQxVUhmT2Fpx",
  "key1": "3j5AYm3DQZwuFVFfcmSG1rzb8Kcw99q84H3UvU3Z6qPMSy1bPxXEttTEUe1aRFkhvDvXSyB5q71zEfX3MabtppSj",
  "key2": "4JgPwr5zJsgx4jChdyDjP3p1dpSAQz8nxWy27DTcwK1HFn4nU94u6YuaN9VDVQVUDTkMS1hdZGXPkhu4oUwaMYcS",
  "key3": "fkMyUpXuUoCAbT9VRPkAwtdXJtZsXZjFyKSFSwdwzTuM8Tt8HRHXaN3NfZSybEbVr8jgc77KoCeFQjmqYTtpw5B",
  "key4": "5pYXTxYm48KDpecdoByJELtjgBhRBTXcbJN8bjp5pLNGxYVW2e5KMnR1mxnfXVvFbALtEL8QA18Wn7WsLVR7ZoZN",
  "key5": "swtCJ4m1GC69Kpx5QUFUAAxSFHhfgsRwCmBELhf5LA7mTZGpFboArEswd7HBmgduxAU54b4xC9C3EkNm3SdzVFj",
  "key6": "4jSdxyMuqsVqzHVhCcBzgN8HcbDqrhJg4JuJ4w57H9bRpSVtuwCW6RerRWrNDx3pPhj1vwD7WqHq1edrcqsxhyGX",
  "key7": "3D4o9zPpfqyCUVBWE16kPE5Lfx2WuYqvnERqzh6wa9tVpJiNmjhmRwgXNqTjoJMeEsQTwtvJDwyv9KBoaqXb7gqa",
  "key8": "5KtEarFBzkmRnFdLuaBKR48HTYdhVpfLKLsFc4NJEk37ejQV4Lt5vY7ByZ9YmqDhCfLvvBSY43KueEoKECM8qmNs",
  "key9": "38rK3PLBbTaWEZSdR23uMdtb8dNMi6KEQp1hrNLFta8FxzMFKYDAok9CwzRhqiGTyxVCZgdzCqKJ5xPzK4i2NkUh",
  "key10": "WCy4hrVeZisHjhfWQoUdQt8WtKsQSiaFKqLb3mQoMAaNvU1z98zz64hSyGDVtW7T7d4nqke6E84ZHsJf394kBN7",
  "key11": "62gMEarN3vVZmKsezgsJaQ6LrdtaHaoQwVBtVPxbmKvzGYHHkVcuq95yF2NGXcuYpDLnWx5hYsyWiY3h1dpK4DrY",
  "key12": "5ypjdCQtDCetTLUNkGxZPw3zkn7SZNg2c4Bu2JaPTt7vBsPPTAcDfDSejG4aRPU7cKPivwLXBqtgpC2VTfJCkWSX",
  "key13": "55RNAPxrdjB1fvMf5iv7sXtPG21bV1cUw4CdkabwuWq7SGQzNB2NMaFfEwiUZst6568iPD8KuEuQ95mEjGuCDhTr",
  "key14": "4xQUUAJq4RfYxkgwitVzLfKN2QLkJQZmd3i7p3HMJo18VChF229cGabfrgCXbG461JbByW4UTD8UPQsbakMTDUqd",
  "key15": "5MP9vJUBAtyzAD6ChLsj4H8vdZLgrxD8fFk7RrQAAKHgtJrFtgP15rG7f4R1FCGecvD1QToE82Zd9dTdeDVNfgCi",
  "key16": "2VV81q8481mvQ9GQ1N7Mxr48QE4LhCGAxQQ49JYwaaW86X3f1A9Bwnnt3MiC5t4RYKuNKM517Lpvg1JfiR4SWsxr",
  "key17": "p7xcrXBPxA5z7yq1TBmAivmG5CnLWkDr9JcTBXRCP4arA2nvKSgSuYEGEReLK66f4rdwgmRkJYbmqqrHWAQv2Mw",
  "key18": "2HE5Yteo4BWJVfKNTryLXDFSmuM5xMGVA3VpGnLWpEwxaDhyVWzXC98GjsKabARJLpsk3RrjVNf1miFovEoz3AbM",
  "key19": "5PP9sBA8Kz6MoLoHGbF7CfNeMgrfnueJuw7moByir7yPKvZqtJ4seKAspaSBWdb8aYJggfpno33dYtJkPKhBhbSh",
  "key20": "g6PHfhb69MG18nDZpvNNGonDtak9bBcsVoemj5Tx5Xh74vq7Dr1DM8fMdNaYtSrFonbC3YJBpFk3eE1kp7LTJAR",
  "key21": "5rBLBRBUKTfjaDhssuPejo16pdFwDNcHmixZnJg47SrhveMt4TVTnxUrPDDM1UvEq3hxm8Tk5ZFCNMdE3ofbAHim",
  "key22": "1BReYj1TaxYZj9SQauT99PCDwj69fhn5fgE4vLowetpbT1Q2JFeFyWEyUvBGezZDcapMFFafCiZy1NmjXxKjXkP",
  "key23": "2TR8kBM4S2BEYS2WQf2qBM4KHLnuFJUL87Df9mdLVawzdZ7yn4SK6jj6JpHmavxmKupEmSRKv7DC8bgPF8Veb2D1",
  "key24": "3Sc3R6EVkXeXD3a5BaB3MFwQVEPDJcpEJkFxVBgE4rMtWdqfXs5j7MUskEaWaS4BCdDfDaXVAt7vgmhA1Awmt1Bc",
  "key25": "3F4qwFN4LQeRavhZ9uVdFSPrXRDRCqPNbofLs3ruPipTCFSxJ6Mk7V3xpCDi3uEYWJyNQvA9whL3DYDKB8tpJ4k2",
  "key26": "5fvnMNibLFb2wua4hLQJMCyBeMfqHMCAFSJz6ka4rpznncaqc9oFs2zmWwuLs4aLTQJmNyB1qgu81e7vFNgbgopn",
  "key27": "31tSpgGwf8CBjMAWUoDtjsm1rjquaeE1RZRwQbAg59LhzS84bs9EuaSmUeBBrPpHcZwfH6axSyBM9tmCFjdSSAbk",
  "key28": "5g3yrtxEfUwdJ2WffV9LUToWpE7DaExm8RzJBmzekNa3RrxZQZimEoiBM5qzEKmzJZvQvbUeA3fC6ETJLHJ41Bp9",
  "key29": "W3qj24vUPg5uJqstAybmcPenrTQySEusbEBPVq8ajWN2fMYRRaMebaLuFmjUjhW934FaJPMo2MGmc8zAm2d2W1n",
  "key30": "5vs5GUUmQLx6Vgaa1mexc3tpfSeNxuh3hG1d7TEFzs6DvyN5HFYS9BsGNz1SbjLh727VAkVvo7YhGvWHw6bFNu9m",
  "key31": "ZPyf4BG9fYRymqTWRGjN4zdHaTbGoGMjpNHewjGqLvw7rnCSaUJojiCA2pJzVJrZ7AhUhJbSqQANBLkWPmgRRMD",
  "key32": "4GCUAEcDnysmLEt7Q6NVF6BbwFk2Y7sF2s4ZUfMp4Lw2z3oJ9wVn4Tjzz7sczeZwXEbx7bmKAykXHwLoMAdPDudM",
  "key33": "4yEScg6o9VxeSWN4arj6ehNzfjk39hZCwLHHg78Md8z6X72KqZVePU6hU93Lyiw4qFsk7Yn9jZU6XU5FF4YN3BzX",
  "key34": "L8LvQegUzDnB1cheBT8Vo1MwmLg8XTSjVUhy1j7WzEAQtLtqUo4Rh8EZtqSwAcwVmZuvvmcQLwkCpVsVxTifYCv",
  "key35": "5tE95quxHjRNwR29LA95sVBChqb4Aqj1QUKrtSfhrweLz2K9hkhhiUHMsqzqMdV3y7sJTUkcoY6xMw1pgFSuk1LX",
  "key36": "tVgUMV7AbMWj1zus4g64Sr3vc986XfsviCee8UCErw2e42CSBCrnxS8iTzuLu1AkWa4k94WYKYkL1faih9MCtGG",
  "key37": "41uir6kp6fr8wtPHFNYRJDqtkLGtxE2Sq3puQgxznE5oBcsWfuTUTjTYn9BrA5m9WtXqZgaJQTWpTpByQDVCC3Ri",
  "key38": "3bJFvFeKNiRBEyzferRE2TDtQtPxoSAaZC1afKXgjqqJfsP67fkRJXr2msxM6t8HRnvGuRDs1LB4Ue3S8i1Q25aZ",
  "key39": "2sP1xnXobTT52gctoSSpV3cCK3Fok8mLP62ihbzbE2YyLjYfa1W9hdSdfKML2Js9CJcEC4CWH2RJw3N3RxKnvwex",
  "key40": "Xyb8h7TyFqoeShNwD2f4H3kFmBR6aeQCdd5GpCes1NkPRA4yBvu1gGxg8f3AGCsfsNvXjAYRgfeeJV2UVZFN1Un",
  "key41": "3xMJbxPqqADVMATXQRXb1DCzDYJZDasTcHN1GZaig28TBqpFCnL2XeQYikP3ECxbp99yCqtUSwfdCSUbfqzZTJth",
  "key42": "5ugw3gLT23u5t2xuLaVNm28qVLcfSVx9LCiqcZbc1ZAa3Jjxu2zksH1M2ypZNTyqcmbukga5hFpK5ba4MLojheVF",
  "key43": "4cde2XVNs48xpDvv8TL1vddwKJjg44Qd7qYsGGParWMJ5nCb6w8AiMW2FeUrSpjTNHHTbBbRpdAh3UN6rstdUDVj",
  "key44": "o9Cq3KRVVrwc5NFX1JZSDobJVzDv2nF6QnST868A1uFNTdq2AWCCfbUbnBP9GY1R7MCNDWoud78295bUf8Fjr5W",
  "key45": "5s6or7iAgwstDzAFtNM1QQiZCmYTyGKxHik7KCdXUBZz4z9WCc4uwUEcCzp91MdP8H7h5E4sNsDV8HKURVe7vsdE",
  "key46": "2sVq5xnzNz9CYpc24hocF8JFGNJ8Fs9JrTKJGxm2H3h2huGriL6UuqoheMsyD7BMc734uc93HC5C8xobZmoWSfL",
  "key47": "4Tew48RupQWVNv6CyQXpyQmGZ5CjD8utEJR23fQ8nGuetoM5hETBbbwrwgNzxMcba5sgRiRQhi4sp9g1S5sd2MrZ",
  "key48": "2D8GE3PTAtgN1H2woXknmviH21H3cyyc18hQdU4qzUvSiJZCxxXvZN88e5jQr5Ufh8Wjg3SSvGcZ4QrugYFojT1a",
  "key49": "bqaUKK6YJwyAKG36BzGekdbgErvc66Qp1svbzWsVnYnPDCHxREwNNys8DrH2afRWjNmqsuTzMh2E9ASjMpK59Zx"
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
