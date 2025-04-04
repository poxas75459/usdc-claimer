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
    "QM7keFhum44tvxvtJyvwig25Ry86VEoXX5h5K1jH6J6QDBXhkW6ZAwgDLVxGatxk8zQ4qmNVkKPhqmKzLqYM84b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJEybsHYaV6AFycTVuhPbEHhqexkw2BjASHuHqUpTYjSZi63vnU65WEKPx8PBoZE3ETLNnbyrJ5MTEbU1PkY3ma",
  "key1": "2MVt6GJZGfFYEbbL2RTRKZnDgHYG3M48f4uGvkH2GfR422HWHJKZHMR63w8zoeD9o5oUJtpcTDNhGJXZ5DsMpg44",
  "key2": "2qzk7VAm1T3n9ijYUsmTHvRawrgtRRQJh2SuBxXi1A1QEQQVfAMpoMuWs9eNss66pa1o3i8wUfBNW2MpEgwjajYc",
  "key3": "2tZ6nJKp7rXMRBL1qbhzc2Nh9nJhuPQc85WkXBuzGqGRmHakWkJPZFj4m42hVzcKu2zVoscBUoxSGFTjLZcydrub",
  "key4": "621dix54td8tWcSw913iW7LSV3ySub3d9RCemh2JFfy8onzKdEunZde7ux2K9uSRqMknbeL2g8ZkffnuBmQJg6zp",
  "key5": "5vEEciujqPBUAGSZxb885S1wkD4RekaSfN6oGi4dRT6Us43D26P4toRSEZ3fsBqU6dhpL8m5TrFyb9Y2V8eQg3Em",
  "key6": "nGKBBsQFZdFym5mdDUfNuyjXX2wA7NFXDvtd6M7RfxXjx2n7EQLhttiwGZ6c3adnGuaEiFteYvf47j4C7yNv5nX",
  "key7": "gd37xJTRpJES2Nc5JJjjkTTqpSEWxJJLg4MKUR2P67PcmVxmb27MBvb8mTn6r1itHMowP4dQ8rFLrBtkuCx1rLK",
  "key8": "3ESHP9u63xTg34vyXMe2YxKcRmNJKumL9WNr2TNp7YEMGao1bRkg5fzuiWPTc97eTriMfbVSFPf9NfjmwpFyA24d",
  "key9": "327M43pyNJTPS8ro3qxGA9tEYghArF2xSuRxSwRML7HdyVkg4oSzfRJEdEKtNmAToyUziMaUZFeT7Hok5whLdMxg",
  "key10": "4562N8t7EjhJcpKyTQBC58UXvTu1AoHc7P8J1D1cMdfrUASHY7wN4AHLB9dhdKByRoYRHjpurEKVn6rX853Mc3DG",
  "key11": "4cGd3dB2RPEV7zLdhAxArsotdRFyyu5wKbTHpNiNDNyfGhfvcXj6q825DxmrcS5gtrxoKBRjbpNN85uYjHo5GtD6",
  "key12": "23n2CC1RF7F1JhQEL5kd2KvBjVV4P7enBoNsukeKae8ZrEdxWk4bjZGerdZ3DujHemZEYwaeqQoa49ShW8LqbxQa",
  "key13": "2YGis9xTCMbAjHHBP7pNEzqVnnMF2kUXcnhsWC2iKdoNgkAPp3Brwymv1B1NRMDGUwaZwD1zaZbpCKgGsWY6GYrx",
  "key14": "33MPLstQXmw7EJfvtxpeH88rvbn8aniq3DxPFyA8Jo3f5RXkExf6yLBnuM2BYycQMDzpH6aePj7K4Mt9sAc6ghRi",
  "key15": "DatWnhLNKCKpdufk8FugV6ugPH4ifopu9TUcqvX4dFtDotSsRF4sNwjZ3WZJCPVz2uH9JmBFQsjpd34zndMeMe5",
  "key16": "3xjCrjkdRVem5w8j6eCpWNUgfFf4mBJuFQzyTpW1fAV6KY5xXFtuoLKt2M3wGdHTMRXFVBLVCyNtU2jpeWNCjKGX",
  "key17": "4L6nSkAT1w9HSEcaqcFyTRg1BGAsj2hCi4iaahAVEosa1m5uFAJnJ7KfnuhNCQ8CFky8WWAUKmXCFF5dbjG4uuaU",
  "key18": "kNiy5EfPMxTiYrbQEfGGeBQDJQR6RSAa4TqmdA3sp3PYmNwv3WUU6ivfM5wRpumUXCB5RCzZTXu94S8MV9rPXTN",
  "key19": "61aW9gEUKAfMRFjXiQGBtMLbFBkKZuAZa56H662b2efX8ZMfjQsaF1jd5DATLWhKM9r8WvcAgHjENfkVMCqYi2e4",
  "key20": "5dB9VnK7eWufUP1FpdsYkLuJzVekMYapMYZc5dKLTAFMPJdqNRbQu49ZXyn4u1k8ocPzTNZnzKStfiofrzbVSxXp",
  "key21": "u6L9ELTnk8CBBVRKdBQKABEDs1Fy8N3soqFA3Smu9o61U64zmbG3HqUc3RUMnyXRaNcsYgaqtxpZbdKMoD2chas",
  "key22": "4YenTQTa8zQTV7RPBdqM9ZyYih7kFdwu2itbH8uhrqKhSMtYFa6xXZaAmVdSE4Hk5TaWmqfoCcfdrzKdesfbgeh5",
  "key23": "3Z6YjRbRpGRHsUdiz1vvm2knxuBtAVFW33UQYmJojiRYVSiRZM1YDekZcRw2r6UoaCuuebtowmGkwS5G8FuPyVPQ",
  "key24": "sKck89QFkh46eHMkSYWjzz3BPahTKnShbtffLzgzWCjFtFEG6KLCAgQhHUuEtdTzHXy1ib87U9foigZUnCxQ8J6",
  "key25": "3PLhsnBnH23CXzwZLyHPL9QfFTVFHDBhXK17bgorZhHphk7n9xfHjp4mzMEcHKYp9EZ64bFf4ohLM8aUcQs58dEw",
  "key26": "2ThPtA5UPcApc8pp7oQpuXHGbm42w6dfdwMNczeUYdbKKQGRUuEBLXhPRhEp6kpiRhCvmqE6eBwcX4AozQkwrPG6",
  "key27": "ibp3ZMwC49LTbD5JMTeXvy8ntjR9j7VsJaJnxgmezGNAcxw7JMGxCaocd1UhT8nYMB1aF5gntNLC2yoozKJSRwf",
  "key28": "5Y5CD34XCkLWQBHPa8U2erhxmX2ohArFEagtwPjiESRJzSF3SEXx2sU7ALV3xeewKmmDznbxotjymiWVCKECVRF1",
  "key29": "3Xz6BMAVkeQzSPgEvod8t89ERZhkcTVPhn3yf6vimri3H2xWVFwZRkMoswdSQyJMubpzyoUiLVsR2Ddg9RqntBub",
  "key30": "2ixtw3Qr7WoAtZHw4jxQiTFzvsUHuXHNgPEuE9AD2mYTwwA22saT7UbAPWF7bD2r9QbNceUWZodtc5oYm7SA237g",
  "key31": "odn1aF1qrP4nSbX84rEEmenMuyqQVPGhb4gH78f6rHr6bqFGTgMwyEwcgRgKDWfkrE7VmYHrgk167Jqp3fHN9v8",
  "key32": "4eVSHx14w9oQ7VoYhVwYtioeffkb7yLPSQDFuMLV2yhB92bJS9yYQLbiUbzXfoiLQ5T764YuEa3KH8Sfqnnqrsp9",
  "key33": "5o7UxxCku35EFR8geySMKwGNth944sf9s6DLpZjFejaCG7YCAvxQScmfMLqnGrAjpyWJ1kpwRxMTJBPbWJYWsV8n",
  "key34": "4v9CvCGMJSSQADGbgLu9jA4QdpwA1Q7UzfCVsJBQnTPHJeEbAtXrBHK4f77xAoPDh46sJkbxiFLGSjykLGHRg4jo",
  "key35": "5z4xt94Ac8qdxJzSZ5YvbyJWfe5mjSutKSC3JjZ3uGbpCKCComJ4aK6kbQaBkLk44Q11JaRRbaFp36Lip2WkayKV",
  "key36": "3okaDXzoBWGnoMR698ng4yVurqAWMnCw6xfXtmuSktmApPzDcFE1skn5ZrDMhjrpc84eHNQxW7hBjToDTVovaBHN",
  "key37": "37ZwoNnBwJ8Xu1gJm6KoQk6rBPgsdNnR5WdMTpQFQizWHaeMNuGSYJesaiU1drE299KNyHDe1Ah2h1Ga42iPL4Ld",
  "key38": "5sH1q9pCegVh1RJnLPW58XxgBdhC5tykoScUGNdtVPm3hyF4PauXYgnCqZ62DPuQMvbBJfjHyqTev85ciCtNJYpD",
  "key39": "5VkUXA9sUaY73SAee5koYVUWj4fbqcUDVskfxvtSPKBA45Xm6dqp86ZuEnpYw9B5RSoYD16ajnwEYWb3dmTwSrx5",
  "key40": "2uEuab2A7A1F4LG7uuSogFM6XVJ1tGKWLnbnXi38conAejpM8pn1H6pf6AWZZpkSTk3ro2Kqd1cTiqY1wzPjoKft"
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
