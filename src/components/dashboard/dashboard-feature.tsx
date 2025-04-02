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
    "4M3juXfGYq6hsxwqXeXxcfDu3GCtJ9tkcDD9D9ZLuYeoBzDb3kFMuyoZUhBaot7RMr6sp1LX57VSwfoWHuERqz22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsAmSTRywtnAsekK7idks9JE2ojY85ficx8qEtWvB5cNah6Pc41LSXyuwz5L8CRu6fd3cbRtCdqs14gTUa1ZfzT",
  "key1": "58hZYgJGdHhw47S1szHk7AXmG3yTNwgej6LkhPV8LnP72KehzKzHALms2aZvDC5G2DEE63xf5tUfYcGqMFHtYHfz",
  "key2": "bvgZGi6ptbDVPuaAQkkX9VegAgZXsNaZemDdkREo3HCJ9MCD4PCHHGBXnHNcAqioV6aVMwpjhmSesWyhm8vwSPL",
  "key3": "4hjpc63Xbknahd7GnUYQLLVTguWMVjnLXvWy7WzqXErGbjjfRcTxauSd28LYRc71omg8HS1gvdagN2AnbDcgAPHu",
  "key4": "29f7pRRW6QT4iRkAYuRZgtDXxBUUzgMbiNz3Nwj9J6sQ5gB1RpmYcWeZATXiJpBytYGjxpckPbxQ5ZnkS85RRAN7",
  "key5": "54NxbuhPyXndTF4gpTcuEGu8MHgxqE79r2i9QDmAvVPnYqJ8EyLd7PB1JXCRjn47RkkCqXKsLr2nbx4KSbPEccuK",
  "key6": "5kkHyHwazGdpsiY3efjqra9CvPAeKBeRC3n6LNQMtYeRhNehBaPDK4W4x5EA4YFfUvnq11bDq7yk57pckXYy3k2n",
  "key7": "2VD9x8nrZ4rUpxmKVAbGU3NMKUavC67DacT1jARYpSWixGkSgNKKRUbdobR1wVpj2NVj4KefdM8YJTramCmWPwej",
  "key8": "3xkevhsySh46pqrZhvrN5JmGmzAphUN2Gj3G95rAFeAwUputuRowHvmULqyFcRYgY4e5fuh5CuHXWcpga8UK8Sm9",
  "key9": "3yUiHBNtFVyeBMtehEsJS2i6eFg7hBT7DYu1L69sS6oVZ3cLRQqQQRPekjsaFM8HEZWdsreYvr1dJAwk1pDmrrfk",
  "key10": "393jTpUQrQXf2KSPRvJbCEsyw3nQkhSyh6z1E4pQW2YgokvFCw7ZfU8FAT64wKxpudsPHE9k33uqkHrjh7WaCx9c",
  "key11": "2rqLSVukbPMaQwwxKNF16U34M6fPckazkRdFFTFFfpARc4DMqtJ6rLAz9wFU3N2EkGaERyRbQLovcdqo3M4RbTPh",
  "key12": "4WL3rLfi4ycyFdoYh7HscuWr124x6XVf7Uo8xZPmU2Nmdt9pvWs896TD9xBHy7mKNbCjCyQwtqVLfMaAgufemyir",
  "key13": "3Jpk5bigWpSD68dWwa39GDdUA25f6gkLqK7i4uTnhRpdRoE4BDXU1Kg49XpGP929TP9oTHCQbyxXnvHpQYH9471t",
  "key14": "3gLqefSG62HQFLTXHPNNMy8j5JzUcPdE5MhaK6Fi29sGVbPiyzXkv7TQk2NK21KL2RkMCCxZQTzRoGvbK14uPbFr",
  "key15": "5tqZjsMxxyX94xLUfWHsbYbUdZMx1BemL2bhaJrH3FmC3usHMGUEzexBPo9UaCnxmjZgsoYeCkfYLGwwTUKotk9u",
  "key16": "4n3EA2CeZgBZ5AvYt7NM1EehScawEbKvaGxQgRFtrHR95Supqp4BSD2XBT4vL1qj4PJmqJRYrZEJdG38jjp5ngEa",
  "key17": "4vWwm9DA61mVJ5GDx6h41bypMaXEeMaDZZE72eG9K53qMfmMLdqNd41LEYs1UT3qufvEDFg6xmaBtkE4t7rfQdZu",
  "key18": "3uGfVn9vy7C1vh97aFwwtp77rrT4v8m1G2ELexiaiRhunmmBjETanMSXPud4AmrnXJ3fawhBfgmkie4ZaJ3PQ1kw",
  "key19": "Qruw2Xs1jke4VfGWNPMkhyRYQ6HtoskvjraCQj3NQ9XL2eVGt7Fxx88wwtMrYARkBWkpgkpDju6yA2qynHifWcq",
  "key20": "2RLRg8eefnZQSsFNswHeL2tqz4XR8BDgLDm135dwhVcwMrrn8zXasDa6eAKhPst8ackedStRQq561VHKvvrsWLQE",
  "key21": "5Hs2UYZVo5SsZk1a9RYGox4mqEoGctw9Uy2mxivNmRPx9vCLX8NfwdBkJd3CiSuurZXeJH1YBpjzG8TyzQrdEWB3",
  "key22": "3wFUSXqi8jhdb3SQHx2psSVr3gGxRTbzHmq874E5GyPPtTnwg3CJmzivxvLMp2LtiqnyiaWdni9VLjsedhJvrN7j",
  "key23": "65CKVXjXGpn1ZHg5jFASRbt24zUCsb6avqdAo7WxVr4raybqVsbZkRxTKDX3yaGec56q2uaCjm4u1ybFRCc5GkaA",
  "key24": "4xweKgcpiTHHaye9APfVmh7sB1EnAUFNxVRsk8QQRUYNimQpEzqccZkwu25pKbdPv1dHTPL9n9vGom31oTqmuK4i",
  "key25": "4Q3sEYVYLFby97h9BG1LPbnwEipfmWy6QNCeRVA1suhzF5GCwT2FdXgx6RcpkTqGNBPgr2RfywvB2Rmoqj76xon6",
  "key26": "4o6PgXZRXUFRunCLTZRHmzGXUFNJA4GcEcgCH8tanBmSYSmiuUNjBpzVtoUs7MnPMj3wdntbkf4vaw6WT7bKKz3s",
  "key27": "jm24F1sMtNsJNqdbVya6mYmhuXxvAxDA47PBVho5K46NRhXU6sxmHAq7zhskEeYby8UkoYDPk4Dv8HiHEUi4ag9",
  "key28": "55c9sXfYAkhnrmFbEGFYafRJt7MAGedhDzgyBu9aqKeG4xBrQokGk633dXqxWsg566DnnGkPsxL4ntUfrnHdGSZk",
  "key29": "5KgYE5MKhTRy7NhrB7gKxmzrCN4WBJzEWgwSSdnHEsyyXyPvjWjtegyGhPoVn7KdosXEa3HkywyjUrVRXHremXRq",
  "key30": "4CHQwh8w4DSZUgG9of7HtCpAfo1WJREFzVBat4HUh3Dm66ofPWib3vmQSXAhSvZKi3yBkWnFrbxdWXNDfoK6sXMb",
  "key31": "51XFRiBk6RChE3RnABerVjNzxLF2zT1kE5pyh5H9xtDn4RE8uBmtfeaLYktQryHcUXMs6B7N4dF3q8j8Gxhnj3E9"
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
