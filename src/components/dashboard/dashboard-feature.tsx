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
    "RqJHJtAmZSHRSsZ9DSYpUAjwb96LFrvbpJbn4cmz6TiQGKpRXXPkWQEQN8Yb5eLahYrd2HGsstTVAP76zxkChbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RmtAvj4tG6PUGKGXpRHPKr15Vn2bE275xJfZDDTZxktUu9PCHTkWbdQTdvhKrmM7VtQb6Yj2n9ncvBpUqJus9cp",
  "key1": "5ohtmUS4MQkWn31Y1k8gHcJYczkzPbrxFgPWYwcULpVJanwHe5bSmNY5DPJikLfTmrCmqBAeuQNgzqxh7Dhup6g3",
  "key2": "2DpvFQN4ZiPKR2NVG34dmuSMb7rFxVdjVwP7CEZun7Pd9EXS1EzboWtVHHCoeiV2NpNUbqC4EMjmFSfZEJXD3Tkt",
  "key3": "5xrrY4sEEVGDQCTs363WsvTfU5xgGBVU424otgDM4PEovZxy2r6t48pJBQZE4sWd4TLereY4Mya6LiGbgk88k3wD",
  "key4": "4gHmHYxGHVu3DBYyG1SrfCFk779bxfdVoP2pk45naDrGAmTn7LtrKrzzKdLMfaHp1AUqWjRZpAiKtg4QrHaqRdGj",
  "key5": "4RxoPysJ9bGaocTFrBykrFbqvqwFLjhMwfCphMHtFEGtpV97NgJ6C9tGHrcFyUNFZGtgvyN7T67qgkwWVoN6Wy4s",
  "key6": "PsegRgseg4aaDyLspjh4TotcJX47B9TLkrh2aeA2Bdwc6GafMPNCvtQXC4942UnbZgCp7KitfXx8i8atKZMYcLd",
  "key7": "3YqzbQsVTd2uR86qSLDyRZ1qKz8Ppd9bEsSV6fhmaaWRjwcPyFqutcvqokzDVYvha6eKUu23ny8GtsxUGfnLMySD",
  "key8": "5tT9g4bEjMLyCnyhqmLby1711G3sDnTbmnofLWUVjeD5vvQfaywtR8B5TR4WQTp6wqZNXyVoQJ5LLvLRPGAKTR2q",
  "key9": "ig9mDhRpVWfU2MVbwTKEjLKHxoWEBTECFTLj9PPsYZN6ME2snGdEcsbUtFwTywQToCDpa2p4w194L4fkPFDaZMW",
  "key10": "4XYPB7Jx67Ky1jZ1UB7nkT1yNf8pSL3NngPCyTn8f9brxpa3Rjgf9JfhjnEXqVWqq1kBVpBRMtvoDHaAfpi75TCM",
  "key11": "5WDNofPyEXKV346LbhsKnb7rSgQnU82J7Khodgi5PUiQK8vP3U2PQANo7HG7wh8LTkALS4rbWYUTU8YyWn94iHY1",
  "key12": "2UeB3QvzNDHya6DgLdPMMCvQwd2FVikWQuTrcKuRuQPEqt7iaGWcYQEJVVv7LMwDaFquBc3K8TEugvcSwGZLAYrN",
  "key13": "44YCdyxvfz8HZsTvucJEKjUVCweaUitRA3b4m1zZkwbmkjShX9R6KPBJStetLtKjrgtZX6oqKf6gtEwB6m7VBkGC",
  "key14": "4XckNEVTVX9XfZBhhUhZPJnLfrQbJVJVx4k2wfZmj79E4UuBwyfqzx7RjpnPgsHAW9F9w4TfMX84zQtoxArAyTXN",
  "key15": "4bc1GWyJwCN5PKr1TnBdBY52Jcavj9j2bwdH5yxF4iqURcohTprDeu4eqNTPUmzQ2vGGCBwkAs7M1zwZmbuxNKjq",
  "key16": "2Eqy4766xkvWituUnHqLh8JRFKqj1qusQUzR8d6BChg2k31rJ7XothM5FQK62VrfVL6Kc7JC8oq1qGPSxwvQH8ds",
  "key17": "3X2UDryk1nAXxxuXpRiDPjkdASPRhY1anmxhAW2h23TmtWgZ7kAUNXD553UbUdHrqdbz9W8QtbFWcb7haFxwXYWv",
  "key18": "4JXWkdhH3b8TpEo22LPJW3LtnDKp6fbrHmMSpRo5MNimLjzyeHtT81PQKnj6M2thBhiPuzvwW2UXauDic4ELbrZy",
  "key19": "4tFc5n5j7aDfBFhGYq9enX4eETH4onvzK8rKhiaa8zuykrp7Ebp8bZUpYU8NbACycRnnADQAMCtmWMVgQAAPQGtN",
  "key20": "47yZToNC8cBHtFHfePnEsrSbcZRfmQHGent79z5fJedNZPnPmMds42eBZDveyby6hmnWUaYAWBPK5fXkHdu38HX1",
  "key21": "369f7Zcap66NkSFkDSWvZCtD7ic6ExXyLvFE4qzP85PyNXb5P37YyUxYtJJhw62bXYaGiwqEUYDG1a2vXk52jNcv",
  "key22": "5WMv3MNaFhyLGDdrqYx3kf1agYHKSWn5q3hRjnd7wCbtfnp5M4b29y7Hcw2iPkz5RtYAjGBADBLVDC1npJFEUP6J",
  "key23": "3JMFBSGkVmyh6o9Vdk5vpv7CwUtibRAExtNPaEs21GUmBfLTNsUmGSuyfxvmxPHMAKE1vAcS8bSLs7EeSsfDvKwX",
  "key24": "62aZ95UsErEUiNaZkLgsuvXpHZJ4m9THjUkfWiiomT8fFn7DuGN26tmS5tjXXbgsXGFJ8eHiXrYk8r6BRi34MYCT",
  "key25": "CV5oeNPCnx2hBV5AxmJKBEG9wKqzmcSFHAqo43X4pKFzXr8N5L2zTFNbUmVi9WEsGHXFLV9JwS6SZ33u7R8Rghc",
  "key26": "4xxx25KujP8Ni4Yn5VziNTAZ2UVzKGamR4MQ7nXi3HqcTZhqa4p62KRZrx4jHYyHf29oB2KcNyCg6XSuHBmxxBfg",
  "key27": "3whHbeUXphET1JhLg2CVN1L72NgiBwjH8wi31GifH3FrozvZvjKkC6MRAgYhydeL6FPsdpBR1tzDXFAzpbnfDiW5",
  "key28": "3Z8rG1RGx5FaamAouJsm7WNNby1GinoLXuogYhamNk7exm49GeMDZ8kZ2zBGog3tTyrHvYz6rstC7EMx1G8xtgGD",
  "key29": "5aXSHn2hS3muGAwiAZoBiYqKNmyCHgMpEY1qiPacKdYHc1Q39ndRVZJcsRzJEUBaY75jS2WkVPrEgWWM8ogefW64",
  "key30": "T3Nw15ZE7pf8LqR94vLdqi2EfLnWBbLGYZP5scW3FVu2XTfVntH2DLnpSWQiKP1YxhwFd4HqjXjy2UobbK4zpbJ",
  "key31": "94cGnq9irqk3JhsjTC7q9o1BdpTGXYjHwHvWeY5bFphHKniDs1wpiH6tNih3imsmPWtqnVRWU4v6eeaaqZmRaWo",
  "key32": "4qc5UMk2AdmDV7fMxchQxhyC4ZiHToHUeoyEgSxEcc3QeVQikjiaquYvT8DMKHFoCsQYmTDfTUpYfhCscGP6yBUm",
  "key33": "2NRQfjoYWaMdAnypx9uKK4pUCmgtEzqqCQtEv7YSQ9LTpmgqG7SpgXPQH2t7fWgPDqcBZZjW69napDUy8qqXA25x",
  "key34": "48bkytKh67kYAagt8gp5tayUpQK4BD1kjx91M4dif9RxaxakCt4sfZ8BH2NRySSLj98PwjGKf3gUnRNAhFCQSPte",
  "key35": "2mgL9cF81bZnTJhdj4KwHUZDBjkhkhKsi5K4QdiKU4KHBtyfDoNcnavyiiK7mTK5htanD3mv7fQqt8v5n324C3a3",
  "key36": "32E2GsmvhbnEG5zBnbPnxv5WzHc7ruxwEvDB6CaG3mLryAXHyHiP13w2QUh5fsvnhB1f4fcUJ1Yn2A4M7qD1ZYbj",
  "key37": "3gzuDdnGMVFrequ8c8m8xhpmKB4AxYNWspfB37fmVaUayPh38j4KYU7fDbPEjgFDaNjY7jUwCVYvzwNMYuJ7a7mc"
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
