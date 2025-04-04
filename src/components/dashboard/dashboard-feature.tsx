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
    "RfeJPfUXNmXMt1XJymPTz6L4r8YrvsvTZZ7uMG2VJRa6vef16xXe1kYGwSvtyjfTVMHdErVUtN5x7WAue7eZhUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tHig8X6E1regYqq4T6DstYSBXjfe5pq8REQbnL6jhFLWUdkXfGMKe5SnwUTnv1xPng5HYVSi1QUbthvrnBJa1c",
  "key1": "3PYXt6v5cK1BwkRaL8RisZfrXHZTsjYbVR9k8fbM7Xpk3bDEWzWvVqJXMW5p5tsxE4VXBjuyCcigmtq8TZpGJR1V",
  "key2": "3FXFei9yf1npMzn9gF8zgADafuT1EE3EGEyPKsxDajHwxvdZpNjtWKTKbupu6Ksr4XF6aAiznacQu1aeevHH9Tf3",
  "key3": "5xXzceQvkA8gk232hpPnzbufwVEuF2btKoY4VnXPgpeboM19mp3H3ZtineTfB1t1S2TnKZgXRAZ1kzCCF2MUyry8",
  "key4": "2vvDvce3utMpySwbmfzDrgmqJrFz2iX9D68o9F1wP19RasumjD1X2N1xKvC7u2xStHVWnapcpUh78nRFb6RacJGY",
  "key5": "3wwYPXjkMcdTDEJXKDHtJM7wEaMEiBXdnSoe5NkXWzAtnhBwpSqNHYKCc47s9XceeAzkDiLEbs9vsBrtpyrTweLm",
  "key6": "3c63XmuzCYyogYoMVAcnUvFhR9sxsNEkrg4ueRHbQxnYjpWE4GHcC8EgefNfQovUTZDfmyHZV43e1PR3ATdtTcVS",
  "key7": "383MKdDGsVHTu5euQCbTB4cNJNrcXZDE2bgzNhDBvhYqfrGSCBLHHc5aKHfLcwnSsm8rfmYsP1sPcEcMAosWg6Vu",
  "key8": "CxTa3DK7WfjioC2dfmtmu1Z715E2CmFzXEb8b4UUUUo9D4LsruPkt9iJBTngNnXqq2Xvrctkr7ZrRYMJuk8FfUA",
  "key9": "12viZmEB1oSZ4Bu3X9BBtirxoSrRb7G4BXDeMF5wXZWvPWZTxQR3Mv8E7tVC7NugF9Jpue1puC3udGQ47RBYYBY",
  "key10": "2mk2kd51xUY3PHZdE9X8W9XKJKXwX9oT6VtMbEiwxfG2X43wMEaFw82H38zwSyLBbhM6AcVX7zBfLwN5hLCE5xsa",
  "key11": "2djQK2BpFGA7WECZs6VeMKaG5rxk94vt838op8LLQtKPFSXTrExXTzGB3yyuQGgcw7Ur98T4dj2sTGxiMYHSWDDm",
  "key12": "4KeZtFKhhR1vQYXPTi2DS8a3uJ7kXqqvnmfpRkvtdNtXmA4bqnruz1rrwBFimjENBviMRndiKFk7zcSaVGRGba2s",
  "key13": "4Wma4uhFvJccVLR7qW9ubsT5eHAKrKTSZXMWAgqZcti3Fx2sJgZURrS7eypDpRRby6hSFHxwX4WJkzAGmz12qhqx",
  "key14": "2sS5KSSTmDKBr9highMTeAFPkMVFH1Dzjh6qDwExugDYXt8JVjVwg6p4sfKT7ErHUEszcJUfNqrf5dwuGBF59gRF",
  "key15": "AhyCACra9N6awH28yepoy6esrk2Nu6cCE7MktDCMZN2DK1zJVixLGBR1gU2Ubm9BXUWao8sYEezETiZk23kaQR9",
  "key16": "57Zh7oM1842auLoQvYzJhC1y1kKB6k2C9rbbsDxx1uQWCCC2YG68fgnfj42PefAykVrETc3N1UAgDLyPcgjQv1CE",
  "key17": "2ZQkecDc4jCMdT2tcYf74tLcDtVfdRh3iZxGdnd6aFd1U6hBoA93rVc7vNzu1yZDhiEni6Pynxp1YCifPoT3tHh7",
  "key18": "2kBbWxTLWKHkpWxjqtyi9TJCTdct4mt15HeWmM885dEbe2CnQEnoM3usU4VBT7C3jRqSdCWmRUpLd3B15VWdtrrN",
  "key19": "WcTm74iEXELYXsfe35Nu3Cp2zhKDgqYMSB7oSodmTuKUoy4gXThqyNzyUxVcHgQtPGyJk4tCRYpQsrkV1NmudsP",
  "key20": "63Uny2ccQCPnht3DLRnUNTXXZynS7hHcZGUqvzmdkXYsyDr5Pg6bxiW56oV7C7hZyLiN3eQSgmVgVPHfy9Wj9ZtD",
  "key21": "2qWfFFJLRSgkNVRP6tSmAkkTFyR6U84V4Ypurb1HycEyDQjsYkrMhy9jZ3YXNUFtix2wvzH4rfHK6EhWhofTJdW5",
  "key22": "j2fJRFkJbC1Tc4fJeYqrtkEaNw1xhvThQCdnzaQShatKtuFijzoMi6DjenzKKEkpwhnwDU1zeAFe1icdt6VZibz",
  "key23": "AYJFBDcZdM7XMCNVFLj5E2ZDUqnqk1zy7okxwTZEj4zgVGMrwoLz36SUmRxwda8YXbsywUAo6uL3iWa68HAyxB1",
  "key24": "Bh8JHyF948J5NpFej19gqZKYDFBoByXXzpCgtRc79L6uRyK31hMVYA68kp9iqJcTvd47oDVj6Lt4Ssi2AnGbWbe",
  "key25": "4DW5XzVExAhpVxjVu4Pw3ekMH2S2wwUmXg7cw74f6RzF94cGwr31KBoEq4Mvojy2bukhpFGbY45BNscyTGRDbAnJ",
  "key26": "28n42RpRKsFxnMZ5RTyyH6oMdhTFbmb1JnpdJpUyrwXKBsVdsDvdzUscFoE4rC5vLU6TCaF5CWw6JGve3QK3RcDT",
  "key27": "3PSxeLs9eEuXjK8D7xycVVYEuxGEg9E4jkbUQKiA1iMY4GSMibX4wDxkap9ZW38FzzeFq6daTyn9CoDBfkkZ4HSo",
  "key28": "3B3gz8kCHmxZb7RxPQqNjE3GeDZsDCGLJUbZHnGRm9iTPnZJM2ki24Xpt8LPNMuySS1ekrtDaRX9FvxgrtvyYerX",
  "key29": "4y41oX9H4Vq5ZvU8dSx5sBn9fkL592yRFv1nSX3AMn1HPhEx4r3HiRK7nSfoDwyW3ZuSVqrGpUYKQX6LArsGPtr6",
  "key30": "2HNqc1LNakGVkMJGyKiz8MpAyf1K25gUAMcSpRAeb7rPMhKLMKP9iP3ZpCWo5cRp99HfBKE1h78vs3SYR9id9bz9",
  "key31": "khwxXZLYdihoJVaBPYjiTsectZdYhaMZVPavGVgrfyvRvYvbGRgkhCLr5Yz4DxdSBJkQ34iWGKJWunEWrBqsspa",
  "key32": "4eFRqdGyFK8mNdqZ7fNrYgxDL9yVLmFaSi1nW6DhYPCTZgKY73wFEjxh8TYZiWjGJ96EsHrFbryNGY8cXzJS1X7y",
  "key33": "KB1GoUgy5MKA4JTQDZcTpf9Pz7dZ5ezXtMvmDqTRRxFmMYa69WXYaZDG6b1c1QzCCxfTArC1xnGHRWSTzVy2MK5",
  "key34": "2aYR8FTLTdGSmkqGsec4KCfZH4ZyrmndUpDQjgNUvYWzuCSWHb8gSTsygcrWpPbx26kAtu8UC8TvNiS6BSkkfpYu",
  "key35": "326TdmC4cUT2sZeEGKnbFEfj5ZyDMn3YLyvfU9hkeSLDTBwfJUsjNzTeUNAFKzPFpWyPRJ33HDNg4sFRxMxEFhKh",
  "key36": "4dSv77qPvmpgTwA8KDPGz8y63UsEmvnLJyb1X1ui4Pu9Nm1j4ihDcSPsWLkjUjikVEg6aynJdjnVCKAJC7x2W3ow",
  "key37": "3DYjEwBT1cBqwKb3jxN1BBfob22z3gxhkUmEovo22XiM9K2z7hHn4RaN4ksBehu7u4jmbAGjJKTZFBqA5cB11GJg",
  "key38": "4T7WzSfUhS5jV1KAZxetnup96BYVRoEcxke5FM8yruSbzNZuBnZdMWEMarSyikmp3YVuYTwjxqhv8snoL5Fgegc9",
  "key39": "DiH1sWijBnd6RqD3a42hh3zc4j5BFNgLcdW4FTinx5ZMau4uqThKM2ir2TYrnLCB9nSdiaeMhpyWdPAofpKEwiF",
  "key40": "3wbG9YtBsmyoZG3FFZ4jjoNRzL9p43wFKCxSpSuDipEbFftfBE937obD5wiZG6vP9gE6rfX7VQzKXQPSrewYBuf1",
  "key41": "2KNcN8U2poSBrNZCHZXoMw3pxxzp6bRTQktrVWZc4bgs3VT4RrZasD2bHPeB267QjL9rQCcgVwQ8r66fzjQCpzVn",
  "key42": "4tji92GQ1rGLocqwcaPcofjTVXowXL7QQugNksfj47HjoLvwoDaahMaFZGHT5WmBtUkoAfibL7BpuEUEPEb7caqU",
  "key43": "3UXuu1ZBJhqpwKCskhgABkujj5JZNMkKsLN2JCziD4ohy1X3mUeh8sQYCGrswpMJBb142bfKP68FRge2ziCgfRQk",
  "key44": "4C572o2XRet6FacSgKPccuypm8EyerYsJj5sRjvEXhbr76pkQsXVXrkraVtmJGwnykE5yLBwUxLFBABXXyutp2F3",
  "key45": "5JHjWsfcgFvbKhhsjGbieoB3MqsjewuKPuneEFvzJeDGk2MhuocnzQoU3vAvUxQo37gK8eiXywDXZLKP6Cs9ZrLV",
  "key46": "24SXjfmscdYzweDaZen5WT9KtXVk8mxYt6Cbjoj9WzVQmUd98CiXzNJzrG8Xd4iHEjUicM7fZxYvXNNPQ4th7i8M",
  "key47": "2J5x6zpqhxwn6tX2CGNwj8Cw8ngGSrVrsRoESDq8qVSJGG3Ech5Rw6m3d8Q8xBPHEY5qpjU4F8Hw1yu5j57Q1Ynh"
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
