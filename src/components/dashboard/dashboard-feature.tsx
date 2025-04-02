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
    "iLUErfirMuzfzAjsPk9gfnumcT1nLb1uXRmnmbi7cEqUo6p8kCWLCiRQpf6FfRXARb1tApnaBgeeT2qGhukZZco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnTyaCkjRXHaNbNrCZTPpjT6MLQQFB6NswMs573crCy658GEahtaZBgUvQXisYiDWw95gWh5BwxiAsYEjVEXv6K",
  "key1": "6rJstsDWadrybziJmQcyetysi4pG8Z4ZjfuniMQENXphYegHk9ffo124jdLfgnsJ6GLni99uFpBhbV2aMNadpXG",
  "key2": "4XNXPMMnGBAUTg8sNNDUfkEEcki5xAzK7qE6KptAebvF4Rghf3Fs5bqz8Fh88JgJ1ov4UEi85vRby7RSd2AMiVEh",
  "key3": "5NHRrhDL8A2zJ6bkQZYyQrho9a2syh5Ki73fnpWBpzLdKwAbpvZP2chRYgNkQVfjztNGSTcz1LrxbxgJ9Dw4EZno",
  "key4": "54ZNfare8fpi1dA4bzaZw6WjQSPt1Ne79ShdMYPycWRDnRDJoUdhUbGYfXczfUBjUMrqUNS3KRDwJDDhaRhxYo9z",
  "key5": "4hYG2zeHFYeno2cD4w3wDZyBEt234jiN8q9xwdU8AMW9KDYm92ZUMNTwmjHUR1GAFsWU5e73Ay78xWQWj96aYSpx",
  "key6": "5jqvRveVymqjGfbkxNaAt5ssVnjdVG9fpWkqEbsq2EJKMRDzX6YdBCkR483vodNR5jsid3bYGDoX6Wc8EZ3pwaSh",
  "key7": "4L8XwBaoUurQBiuiMPQsBqkXfxrW7Qyu2G3NACeRj6u6jueaS5Y3aWBwapzy39TVxwRjbQcVFtDaavvdBzCPM3PW",
  "key8": "4rpAXjQsyE653tf9yg1PLxvCvTLjZwiKJ9Rfn9h6tJp2e2bpwjgbSaf5mcuxGzcHh3FycBZT15fcGMoWNbFHENDy",
  "key9": "mrbcx2sm3x6UfenWtH9hdg3f3nwr1BdApUPRKjwSjmpGh9wTpfotyAarC5jnLtboAeDxts43B7j1sRqLakemrLr",
  "key10": "C1hA7fpiGodCtJ8FLqE6rKWuYDYLdYDUYNAv5kAZUgD6YujR5HmS66Vq7Y45YFtGuyTqynZmuGruSjz7iPg3Et8",
  "key11": "2hXv9pH6BicQN5KvtkdaVvS4CqVUWZc1JLEDtKwt5cBsBgWmR8DS65h4oXtZrARz1gCHTNpfR4s4yj2XdEoKuDrj",
  "key12": "3QXjLwHkS4cBzJYrFQXMupFx1D6KzjK6ex9NQbiYjEQ37Rweuhz7wKvH1UrSzSJc95Q7285S1WPmt6LqaaNHXmNh",
  "key13": "1sjv5aUvqZDWnhkUPBSCaSuUydQAbXbKAoHQ8tsAG2PfC6yYUux27YpXZ3suQNaVyM5FtQGKym5MT2D6k7w8c6f",
  "key14": "5SbLpYGJJN8sLysKRSMAvXkT9ezvQdSAf7vkF5gZooJHsq31vGHqRhhj9PQYG27s4UDdREmJf48PoRfn2P8VuZTj",
  "key15": "4g84s6pPQ6gCc1kxQopPTfrNDZh8ujiTdB7oGYj5vKxsQUyMGH8yUAw8CHsJPQgsyqwXLvcQgqzs76ypua1Aswki",
  "key16": "5rpWjs2GzWjd4q6w7u7eWBGWENnBefSUrbBVNjfTQoYKdNTC6JNRswJvzBZDFPrF4aMnxXfs3GpeiyPkmDkpwBXY",
  "key17": "5MSCoMn22j1UVS8n5ZdFe6AHU6vmV31vVNhaJZRGUrA68tXSmrVcfs4yntsEFdg4b1NjRbr9qiWxdR3GsisNVMKH",
  "key18": "4eEZNg2ZeroGm3FT9vGksEbSVPF8XAjstiuF1wP2sv4wyxuWgsdomXUxgZPer5Zb1m8gjPGoij6MZL3w2sx7WksU",
  "key19": "5az1rLM2cuLBpGAuHGLQhhvnTR7GLYygYXz5EGH5Tb6zsEcm47Zy5988LUmbjUD5fTdfhtpmG813UCeej8Qf9W5C",
  "key20": "4T2tJBVTKPtLULftFJwBiXch84wfW97We6m1Kz2D75FNgB4Fu1mAMz2Vwog5f2GcJy8EvLUjynD5LrDQM6nbPQgN",
  "key21": "4iAhq4tmraUGLJCKDSuefJ53oArLXdCGFMUyH7Zf5zdxnDLfaXEpAkwkBmdcrX3acndX7dRFiAsJDvEbk8dP9fKH",
  "key22": "DzsVpRRJNYUjGnfNK3zC9oBx9ot7MohugenmX4sF2zh5Qqe9HRJ1XbsGLCX4Qu55ibJ63K1szk76ZTP8eKYHbHY",
  "key23": "ba6nWJdeTTnKVNUBtmyUmvDiA7gW8mCLJ9dYRaRngYkE7PvWU94bdTzrnQ8aVhAfXziuCBXK9Pqd5si7T3iSzob",
  "key24": "5UJoC9Jgd6gJ61F6skn1BqhcNy3Kp4Dutdazw7rUNUkS4WnMWzTcd2bAQPm6Qccq6qJHq8w94xoYMvQnHvY7ztsc",
  "key25": "4bKk7YUPVGaF6racZEKPokyoTnhFNcAco3Yeez3EM3FX85DUTtoTG3Gbz3713XDWnxNjfSzEuTqMjRYEdc8j1KJC",
  "key26": "2uPKP7eadpyKWB1NXATPSjL7fpR41omZFqWtt1V9AzxEj3ynT3TiLAjikveDJwF9ERczKXvR1drqwQKQENLbmqWu",
  "key27": "4KPHNeEU9c8NoQqq67uPBYbfjx6vfmSMmfAYGeztZzFnKPjeLiBaUDtzXw3q7hKKAfqk5354xu8yiFdFpR9WBkL2",
  "key28": "5KT62nFXJ5av5zDp1bSDnJZqJvZgK6TQGrTh9koWfEBxortG5pDUM26bAG8A751CaHAtMA9ZaKGa1Yk4qfZt1MPW",
  "key29": "5ku3BjSFvmFP3GDSAaD4PNLbgmjaRrpZyVS8CQJA9auwCL56Gimjx8GVMAvkV4EUKvcMsP7ceV2PmBqcYZEHFJxv",
  "key30": "Ry6my9WCXdoa12R81dV18h2QVFQ85teL9nXkBk1WJYTRjBjnxWaJmojpVXr55XtcFWnjpnZXAX2rkMSrTtBx2Tn",
  "key31": "Bt82vpZGa3p7wNuQLCyUgQ7MBw5c3adqNh85HmkE8LwU9d54PSaBufrEjzc8ATh3Qh3yuSvy6dsJseRzsU3hsBE",
  "key32": "WBgR2Bw8GnG6aAdFjHDqzJSEnMWt73YjM3VjU2j8cuDmeMtJHA8iSbtjNBnLm6uRgqtrWHrfRSsfvQ8JEyUVner",
  "key33": "VgWUctotB6Fc4tvDeELAs3DKQjLYjVV4pK9xny23cwaY1k5cQxdtq5hvdJ32XrwdfVsJC98QwSdeyFgDfNzvoEd",
  "key34": "39N1M1kqkAxt7fMkphFyVbbJY2roeUtEVnF9Pm8H9AdbgQkZv6a3WH9FsYYwGeSYya5SMYpkkT7iHBQoFxXKaiNg",
  "key35": "vFq3sUToDnTQWnLyHArafQpkaWNd6KNeknuBSXi9mA5BmVMFjGg2Rj7NKLzKb8p5VFJu4YKf9onGRvNva5hxfe9",
  "key36": "44Mqsk8unf6icEgkTaJPt49PH3CiSydokZeRpBbcD3GKqARQp2WpxKBDzkFxNYtUUbYK918yMoyGxemUWYCic8bt",
  "key37": "4XZmoRHXKR18nusuwnBV1UdmgNN3AxfjGQnK8ABr4s2SunPyEhSZ2PDhDUfgCkFPRqZPtwAQqRpUptcqWSDjMPvQ",
  "key38": "guH9aVHo2CEEAjqDzsgoCPvGU9NedcrD7TaMu7CJKt1ASFxNdGfqwdUxYKN1FHVSvLNabfjVuNEYfZLeAgQmW7D",
  "key39": "2waCZHvaJz825hrDo3PDMuXDQNSy4jAZVgPDQYXjbruzcohWJGsRinKwKHdHuNDukCjkAwQtRB7tDoRTvxh9ubMh",
  "key40": "5jkHxsGMDK55w1vTSYNbW9GoEccfRK8Vy3ckAxVa4pL8VC6z2Qf3HQHKq4gbyzDbsq9h2Dc1SHRW4Nw1SWV36eyB",
  "key41": "2sDRVdfjF5MNcitmo1wyuuDTAgXceA4WVJsWdV7C1Qx8PfYnZ5hSEhrzv2Be4fx1UcBRsadJPTq4qzp42nw4YsNd",
  "key42": "4Nhjx9A7QJoLX2E1fsXbU3CuNhuibfkqKceKXzSQBPw1b33pz7onDGaR6TXf1mVpGQasPXtyu1Wjom18Hv2AMBWh",
  "key43": "2WarUtdjEx774o5w76jhHF97Juwxm5sdpkkkFN8f5L6yzruW41tTW64HmqCT37yT7GsbeeuqFsSanJbevtVTFc6c",
  "key44": "4Zdcx2Vi4SA5FByqeS9H3LSgtgDcuPG8eiSNauBHcCSQYzkLgnGuYY9hhYFaUQAtzC2rvLzYvAYj5FntJJdAMCSq",
  "key45": "3BZhd9GU53Bw8rqwx1Uzx81q2hWsjoTtMqjvtvRqTtxrwxoopbXJ2UgiXTcFbFUNcmYm58zf5yv57C5md13XReme",
  "key46": "3QXW5NGMv5o5WdJKZQcadCys5gGhDEnZZN8oCE9KBdLYUsSuwhtmdiiYEfZ6wmYYkYn1eAmsBmR3H1ppAUbS3RwC",
  "key47": "43qd3LdXNfvxeu94DPQHDvJ27B1NsrWYBzx1aDMciMMsxDNVARecSgeDiiXthrE9sG1JFakoLRt5fJ2XV66eqxQ7",
  "key48": "61oXMxPRy8M5dCZVu27xx6kazCvmoN6jrauJHnsDWnc8LhGhzn4aHp7T9g4WRKwP2dRyTg2S7NqqEVftHAk4rUs6",
  "key49": "5RcvjAxbnjLsgVN2eBfAek5JhKg7tmyYY7waEEeoAf3XDRabktLBoDBr7fWywWMMe1Lp8LgC59vRcoEQ388NkumN"
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
