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
    "3Jv3skchRpLEPYtj1jWQK9QMwTWVsPxo3idMkuF7tVZ8op3sgk9an26S9y4PCxPx7auPJAf9DqFjFiJs5yqHeU7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1Gvt1esC52q6MREVDKMLMg6HnqKiwuqDbfXFX6oJTN6QDxgu5wRzARrWeXtQT9LyqNXrF1n7KAaNxVNL4ibJdX",
  "key1": "97qZggBUW4jGwNJefvimT6aGuZxjbSsYskAsbSov3Ss1fsHCj3ezxTYyt3pVBsL9gYvLcR2rpxBfQaeBqBJgPqg",
  "key2": "jbEecSbh4XtM5jxGneZWHBCXPkxDKM3YHiYDZBDnzsDvjXZnArjehjyKFEfqq2rxWkB9XtvU5PP99ARcicCJjdU",
  "key3": "638kDRJC8Ekz5rB2GH1hDrTWokGYWg9WK5XyratPdmsw8rMt415UFWQUWhucko3wNiVrzXF4NE9ZjKNCzTUVA5Pp",
  "key4": "4EmQQWCdvNbdw8BUhZf4eXBd7syJyQJaraqTxqWP5K3G1awH1tUt8F8dFhgjmhcbXTe8WXZbCHmHctjGtzoZ5AKo",
  "key5": "588vpHLuWPtaDix17LLC1QZdcTrbiT77BvvXo7sLzixP9dgD24FjVoNStiAn2Ps9LHd6x6eq84w5QtF2PNyBjHoG",
  "key6": "HhjpD817y3gXxZdpBD4YaxTrbuN6HSHFDnD3TXJFtKb36TAMjSm1ykWbA6LVJf5ichBuqiyH4PAsyGWFkX4Pi11",
  "key7": "3vkpf9zfHUazBCTdQXLVSLsFPgzgFbfLaqCu68AC4N4TSip4N1NuerAWvjYedCmVcQbiNr8yKzvmf8oAymBfnk8p",
  "key8": "5iXrVJisgqaYfAXd4F8BNHzbhDi9EUzrgRLtTVVytNx3x9RJvsfELyriBWaUcQ4XduiHHXXmXBdRVdUDohx9NhbW",
  "key9": "2Su8EcHi17pQM6ZoadzobNbK3zUUtw2TWyVvgNBcSswDMJYUm8y5v3GQ3FdjtGbBhQdH2nb3fUwvasLiHfUFH5kQ",
  "key10": "cutqbdRrg4fkYV6TjVXDqyvpUwm6nF85Y1cKV7PrCZde5ga6x3Erw7TS72S7wPBvZvwriA95uarZvcF4TtBfAv4",
  "key11": "4HhAc6jC2z6g62YeTH6dHS7YBaZ1GjM1BaAZh3keZWMyfdJ7VP7ghQFRVFtnGJ87U561BKBHwZTvoYUYHYTaLM2a",
  "key12": "5L3Vx3iHQxPirz4U9HhqKHSsu6gdegFxz4AapV17HGDuS2NkW8s2jtDonXRQANQmAc5ExneWkmXbxZwugJhtPoLW",
  "key13": "3LMR5kmAL3W1ESgvrgJccmrrbqeTvpgq1vy9pfSSFS8ikE9CSig75KzTy4HmeGSuxy2zBBEdo4QYsmudey8E2zkN",
  "key14": "3TJEB9SB8FcvEuN3cczq5EsjLrUqrxicTUKZfo5se4DH2marDEZP3Sf84p5hcSdw1dg9x27M7VCsWWSqUbTDu4yF",
  "key15": "5Xvs2xdDGsRxQf8V6wg3ThBNu4NtZDbgLEMwKrwTELdq5tEG8GJYaDkvW6Ea2s2NVCcU2ickUq62BhNhBZKZV7os",
  "key16": "3kyewYfceLXcZ47nuWF53XCEZNokgTB5bcWuTRxXSCTX8cwypdHsSQ3RiuKRCyvPXWjtLQ2u6gPmwEPhYSErQ4JH",
  "key17": "5awckvRX2kvceich3UzXeb4s9bo6bgDAnCHHes7V9fp21JBgdkH3KeLf9abKp559JuFd5n49o8tybqyuv7tB5Roi",
  "key18": "YhmZxnUWEHgATSWuW96yRh3CLB3vrNqcnAwZrRM9RMjEbKVTzfByqsJWadwTTno726CWUc8DBqJiwxQKDkS9fnz",
  "key19": "2iUDVbHWzuSUYgtssREiNvZEUosbEgobb8bTnvLxsSTarUrxNrXguzwmgVVgfktYCiDx8dDPBktpinny1hWAeQEY",
  "key20": "4QVtscrmh9narG3pUDKu5QYG8jrGYxtnnAjFY7sP6xzUd4fH9LQWYr7U9TQcf3BoAHxN5X5GcKQZ5fbgBtJqcyAz",
  "key21": "3GYVoYvnteGTSKP2jczJBXdi64rzbAXgDaLoLjmyQh6RyduLTVPaa9wP64M7gtREt8XjwBeAZEr4MS5vC2nfVRtc",
  "key22": "5X3xEDAvjNvmRrj7etQ4KbgfX4Bq3DjMdNeACTT2ev2stJHWSeQso4b5nmVEFDdzYKMkRz5ScosqVfBn8hNT2PsG",
  "key23": "QHWyQvAJFJypsjmpiUxc4FZWPUtHzPnUSWaXc2XDbMcMGfpQqE4qmj3pGpcbYFMMNwEJFEr1W335eQNhvKidcRn",
  "key24": "dteDuT54w6gxHBqSKn9U75Xg4ptYp4aserbSCnJp1xRUBM8Hh6ncifmC9dqSSoQBnVHsy3bsV2HzZgMgMYVdqXY",
  "key25": "fPuG2S1u8bQWjdkAUPxp6krGb8rHess3Ju7mZp3NgtxKGQwdLPQfnA3PufHZLJqKMbs7aRK1coRGHngaxvdLKKR",
  "key26": "3nUgmQB3jZMeZ2fPKSBwVMmc3tJZbHT7abKxKvXqCpvcc8gZGY6joi1KPut3T6Kb6LXDEtfwkAp5UaFQce3HubHM",
  "key27": "2jTskoT4jNFP5RHgiJCYpxNSVq5TT3q3j3tFUjfKGXHnGoX8smVmG9AvKTQp1KkpHcBj1D91fmFLmFDJFaSZSvJ3",
  "key28": "3XAnxd2v2uSfJYjdxLcgvVLGutaN4SrSsTTDEyYZKyvwwQGvZzb3YniDSoZ6KEooeJGKPwkSeep99doeNaM8DppV",
  "key29": "2nX3S54Aekqc9Mn55Fv5SF2TyqCuSc5YwQrx2geke71a1sP5LkirE9a9S4jE65ZRxqyznYhjaG1vcSPg2WjaRoQK",
  "key30": "KJvZaNNyDoh6a5u4K3feNWQ8TwkV8asNrpxXn7YgxbzahQSwN9ohpKcRPupDZFvCFFPwXBwQLqQ9HVBrwMN1rWM",
  "key31": "4Xkjg7jx9QqRLHaMjL8bw9BRR45U9bpyDLJ2EY28sTUkV7FjncZPSiucJ7gs5FmKq1aUij5XvCopQp14J3Bi2s9G",
  "key32": "5pYzup5xMbf7zEL9wrPF2DwhqgrpWnoLeWSPqozX6h9Mqc8DLwGFLy7nHJHmx6LnTZEFf12xwZzGSpvTH3B59q5b",
  "key33": "aPmTeg5gBiLxt9zuBSVgf3mKwhkQVpwL98nytG16yjJVifu5C7W2rxQ7kvmuE8jQhjgfoMK6RWnbnWPGxzKcF2z",
  "key34": "4pyqafXcVpP5Xhe1Uep8kNy4tRxFaBMqB1zzTPNhcM2SGc7qeoQKtkGqWeHGwoJqHXNRRf54Q3paRz7AowxyNPCt",
  "key35": "4jogABizYB4tNDqP7KBivwgKDZ648Vs8nb7gZ6dnRiFHNgXc8ESwi5tYcJD1Gf9iZCXo4yWXbix44HgEaYF14fDG",
  "key36": "3YBMekdZTZGeZU6ScjcszLSRN4aS94XoBVqLZUdFMad53AqcKEptrneG2NcTjmX7UEMzu5Ru9HgAFBuY2WTnpx8X",
  "key37": "4nSGPuxFmfNoZX58dChbqWpZRGwAT2U6CEZNkjywfvERwL3jczw5btdbyTVzQL2wf13CDLGvRSnB4MJMxJ3S5ui3",
  "key38": "4S21urSkPCL3Sg88GhcZ5s8QVD3aSmfrwNJeS2dPTxJD2Hmd3QmLHC9CG8xFePcbsAAYBoj1nYRwijjFRQs4aZeU",
  "key39": "4gphHpKDxQbwM474VfAhVrSB2XWoBmsmMbDFqjnjPi5gJbHWaAhV9x5T8yeSXcPg7tHKR7ZXVbnKPYAmbRLg7Kcf",
  "key40": "4iDR6bWvnBW3KkZR7ebvzgvnCxPWbyVFkwSojsnyxCkFoDPyxK2Rtqi33C5qYLNZ7a51m3xNztEN12HpbQTN3CVp",
  "key41": "3uLuqmJsrrnGhSQRC3znNsTtzPoEarHVuUopBDcUiiQYybYbqvs4g2Mn31UZPkjKbCeQWvMWhqGHdC4ELXfwdW5j",
  "key42": "3KTDANPRRVUCBsD4skK7AV5NEnYimFFzuhNN8sHYaA6EwtHPRZEzZmS6aQxepAYEnZPK7qw1nomVwjbH62ne3EnV",
  "key43": "3vT3zgpnR6BDdK47k8Xa3o9koE7UmwhGRtVVhFNZUE5wg52FrHETJNmgumLGK9kGW9RQEM8YBo12D5NcBeqKf1tZ",
  "key44": "5bmN1kEuPGUUwwmk1wbtabYVS7EyrSvu93WocUUtkqSQBKPenztcU8336EZMMUv5N3J6GGBTsRtiLPLri1aodH59",
  "key45": "5TRiNaVX7QT8C9w91J5dg7tHsmoTkAUYXcymwe5t4FdVH9fDjZxHjHKKHLoSwNancGSjibxyueZeTqrVfQxQX4VJ",
  "key46": "N9K8Ak9fMw8gWHRHE1VkfwHJ4WpWPX2Z3xpgEBu8KEoWRKnWpvSX4fNCMWTJ5JYEHcoKhMDBqBUPeJfDsntP2Zr"
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
