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
    "daR5191Gw4NNjJwsBbQ2qZ8RH4usAnGhRdrrb92qZ1GqCRu9HRDuEPaT43GLoKayimupUP5YN8KXt8nGmguUn3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9mcSLJGSjNgonZSkfQmUc9KSFnKiNQNW9g2HWVhC9xzSfw2fQedVQ8cqizNoxnaKaRyfwL6qgBRN8QPyihoVsX",
  "key1": "4khRUjsqABSe7q7LnNMVR7e7y1vem5xWZsH5TgbW6fRgYzh31epoXuBA8hpmuZ4GvUP2Nwze4VDPBRUi2cpdNSDH",
  "key2": "2mRQJYXPs2mipZWeqeSPz2h5n9cFEg65jHLEddgEPqHpc5FYLnq7Uib91VsWD6oMkqwB25PpjHA4jSAyF8ndwaNG",
  "key3": "hrfxmybDacggVVr61QQCfRnCkWNV9fjCEsmp2PcrpR66ig8SiGTQUNJDsftf9qkNBkZ7zbSV7oo5pcbAYGNLxtW",
  "key4": "4RZoxxueeDFKh52vjxQBYZwbFzETYJ5hGiRA3zmNqc3uLyE4ngP5FhEMmN4uDLh53S6KnpYXao6YxUPWNu1Ybe8f",
  "key5": "4a5dBzRqcPELNev1yQMf3Ac95LeyahdqSsUWsJvtPyrdmDXYaqQhZqFybmTWF5ZiG7cN5MnJrFxN36NiShnVUA3M",
  "key6": "2SbeH7FEQbMnQTt1vAhRu8dYY1pm2aaxzQUbbqFK7ajJ89U9AkAZraz5XAqeXraUrq2RYzGVcp9P52TXCgsntQtm",
  "key7": "KsAxDbp7S176bbSL68cPNBiKdKUJRGyZf8wzNbrZVNyC14CFcMdNaoxsTVLx7Y9zUsfazJqk9cPhCQHx4dHJdze",
  "key8": "5gEx7768KRnTu412eGyNhdyJuy8tk2b8572J6GapHAt3vhKcLPedDXWVizTsQLhUEUddYy44XWWKG7P8ANa153kw",
  "key9": "NPJ97cx6B8uvC81v6eXdFRJUTxeuqpqveLjRixWxS5RHcsPzhoNqdVq5yJqfzSzEWaLynFmq4nhE39cjg6ZDK7H",
  "key10": "36PX9d1eMy4tj4yMkRJUBCK8srBs55dSmk9yMJDCeJPhQboxYZn6fexBx7W45xLhsXvJDF853eJQjdyoKTQVWxZX",
  "key11": "3PwAWY2me6FyV6T2eGg9JV8hfgieGqbJdgKeL9LodM3EktvX4SUHT6miZ9RXZ744y3whmCAj6FZfVrAnK27Ksn5n",
  "key12": "2Nut22bk1i8Kj5S4hsBoA7ddt2xi2BXtTeLJDgeKtu3qMK49LvfGhUsufcepBLdbnSuEpzCyGjC48nFKH9V2vrFk",
  "key13": "58WQwhVguZnMK9ayJhHFNmBdi9XetYZGa9DeEjuH9rZSwMhK6HUkP2NK1ufUFrzmPtGXdQagFQcyJSuv4vuHrx17",
  "key14": "5Kf4ezcmJzgsaFtCmDtGU6Qw9TuuagJwGeLBCE3ECoi3TwzbGvDPdCrHhSHyKHXTXrxK7Kgbrs15mZgKunCvbzym",
  "key15": "2iF7z9KLjzTxZmfGQrujCPZVUdL3MP3wztxD2JEfyAjZCgQeWcnNDgVU4jWFkCnZVC2G1M2fW8owar4MpepjpRd3",
  "key16": "3hEJse5dA9SRTs9d4EtohUJJ76XA5Hn1LJP3FdbS9V4ru3avxekgfr49iaHnx7tkfuxoG5oTk7yir8KWj3HpnGPm",
  "key17": "q3oSbsm1Naef4CT81G6j96aTAAASWeES7DKeLfxQ1VjGoZtw49QRJz1Ef9uY8uXtNGAEwJergKDC2QeBXo1a1mR",
  "key18": "G5eBQLP8CeuyGiof7fN6c6jr8PPKqyHd3heuhiSgUjpRi7ycrJncRsQ86nqgytbpdN6oGGNvAgLfZxaaRYnZvgQ",
  "key19": "4syM8KEDAXBBLgw5zM9aB8CcAneRLeX3QUT8ffGbebPoy8kEahFuFwnLuzuK37VCwj59DgkHZL9W5JytpPiN9TFe",
  "key20": "5FtbbJGwbewa3U2w4m2W1XRM5R9HSrXXCYfN4Ng6VRywTZz1BXJco1PT6k63mT3mcYtGWXXXziXWyfjeGSHgYTf",
  "key21": "39KXHkYq1NH2SvHASv6EeX28wL3p3UrswjQ6dSW3fZx1j6Q45ErEGcxjjiUe9jcckG3ePpKdEdBmC5jc3zVTgkq5",
  "key22": "34Hf8CdQLTi6N5iwqN77djmNfwvPGgxPtzdaspYTAXtZ2pGWyGnLWgzZgH7WnmFyRbZNnN7aoE2W8QF45iGP7Ebi",
  "key23": "4bGprixNfg8SP4kEZYSkYLtfobVT9MREybp8zbcP1gu3vYwzgvpnUgCXA1KaoXzaoHfhdqzwQqSJhNb5pTAPYPcW",
  "key24": "4BEpXLJM8UHmfofj448VpC2TjS5J47SauR8UWPdiw7McoDciPnM5dk9dSQEABv2URvbCJf3iYkZGny9MqN7VcmhH",
  "key25": "3KzFrRXUCEeZ1MfJcQWs6m5VE4kSeG1eTjWhNFeDrFjNx3SFdn23y8gzAk1V2YdaNBDNfFSkYopjWRdChLzhhGim",
  "key26": "237F7H5vRrZckujw4St9nZYxLc96rJQzer8c7xG8x2chCc7Sa237JsFkxZ4Q5EghXGdiuCmaaNASQCKssvGkaEsN",
  "key27": "4ygyJV8e5znaoeSJB7fiYhkDjwszHqH2MujGNWLA1rm1gUFz1LzFL4RzwCCVcyfv2CNhpdxKvnSN5A9F4LFUn21K",
  "key28": "sa2VXwVAF1LuLWHwZy35hrDzR5veyhrYYWxvbRn6bdAJ59f1KMxAexCvwXTR5RRK5PAfZEr7E1v4WkmdvSV1J7L",
  "key29": "5GhdP4CUUcQ6K2x3E2AfpB6GfmyKDSmaHbTdDVtHpCkW8nguDMs42q6KpJGRR6bhjHuqewjdbRqG7A3uteLmfs2g",
  "key30": "2ZnxujeCUsRbsow7CKrKzSgu3nesdCyNy5MrLzqBcPpR4QncNKCT12CTNxTF9JUkYanXR5MoyhP23TSNmVn9CyQD",
  "key31": "439TgMeXF67KPAkziUHAyHL6xnyPYVgQ22czBPQUGgJpBHeN3981weUKNVreMtAeeh4PsxZoiRFpFwQjDZQkMESU",
  "key32": "3GeiAgfGNrG5igSnvgu4YYsYF2XxCY8wTzvyU1hAXYDSpLLsWkDU1xomovQY8P2cCeKK8PJU2Sc5d2otrMskvwRm",
  "key33": "4PxXb72YEidMxJU7bKwEABkS4rBjKpQX9WJK7M4CnAqtUtppFbvr8QpmGnNtqtTLcM1o4oHj18R57CNNKi793PG8",
  "key34": "62XPnUEisf7ndDf8yegDKc4Z8e3CHyzCs75XRtgWDMkv32gJEMMek87zU2wCcfFRsFWWtB9UTyBYeDY88To7VKxt",
  "key35": "54Uv1MQVxbokCWwjj6RQqn58GPRgJPFS39SK8Zqj2zeYpyZUnU1k61Jw3JnB5cXyDk8of826JoVgU4EA3qC73t4X"
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
