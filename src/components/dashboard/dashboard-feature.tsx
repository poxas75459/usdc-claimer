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
    "EjeW4EGSynbF8UG9dPMX4spY7Qi2cwPQWS2XSoUzQiKmsG6kdSF1qpdmYqi9fbraoDNWRHjpvSjpnPY6oGKk7ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vMudVjFPjRixWksB4qdjrZC6zCey3DSRFNKHXRYwTA4swXDJzdwJSM3PVAHEY2TwCoiGBLm4Ff5QqotvBEq264",
  "key1": "3rC8MFiwA4j1kumDJ3u8Es7oTavQWgE72vQpZi4VCwK7yczajRdKeLFBM1uFuw4JHniuPgyAQ5dCETQGS63RYwiu",
  "key2": "3penadVxzLgSHb5ipt1xpnvXEVjKUHXRCUBx4ux9cSK9Ao2D1aQLmgv145fqnkBM7fQFsQ6m8gnZoQY5dutoxaCn",
  "key3": "difygaUo2M1UPUCs7zjDPSTxvy22XHG9ZV4eidGfTLvSbs6b7itEiDV7P1LCAZvASjExnqxfDxREgByrpqvgwtz",
  "key4": "2qBSHQ4xuBegwuCrFhi75GXeEXedBWkuxH6waogefrT1s4TybxptR9rQ8mQzqWAWVcZnmew48q8FqvEuStoQRLGQ",
  "key5": "4mpCdRk8kLk3ExYarjDuHCKJ63CktbUq88D57aQX7wLgKTztSDXmA415qYmcKitb23jwSEQhS1Jr79KHercgQh3y",
  "key6": "627cBnqUwTce8zWbSFFAUMDv5iHVY2hU5QBT24t3EVYd6EbHxRunZJ1WMxV5BandY7GFDw6X7WPaNoVUd8Qhj6ps",
  "key7": "4EAGMGEzoCGjgg8C7SUfprXLEM4WkyjxkKaiAyqkH9wc6KvNJYWHD1HXJS7myTLHEQpRx5k8EcuCVuG6z2kJeosG",
  "key8": "5ewvzWYk5bPFjTf8t6dm7YDHF66fXVAMVHti6jGDpSj7QQCmvkGr26qAawDCKVHUyuFBBYhqnba94XtjWr1LaLzA",
  "key9": "fuEoiKaLmUygZnYPePNABx8cQytUPiLoJEuJYrYPtxvZF4JgoJis2cyzQAmX6VrnECfoEdXmzFvzTfQdqcmN4WG",
  "key10": "4squLyeWJNxB3rmGPxJMuTdcKzgSbENfX5Jvq7cbCAmiCVYSUb57MdTeADQ1PYHxGDSbfbAhifgKeCbXbPmxxa9a",
  "key11": "38sBijXCeXPLaVEeYKLfR2ffXAYQYFF9BPUBf3fWgnZEkF7izvZAYcBs7HYKvRZ8ox1p3aAtaeVu6rzzcpYRuR9d",
  "key12": "5uR8aqFaeqwv8MbaKKWk2oFkTojPQWisxefbKmaGRFJe8rzEUVGxRp5qYNAv9BSnQ3WUncyRriBoVvqX67xW97Gz",
  "key13": "2qBtfQvdsz5paxax1tw67Y63DwgqQssYTEMehqhFoTMHwn3uu8KCyKF9jdLG9jcWHji8PURdvpuYQT7MMHSLxLHA",
  "key14": "3NyvieJ66XwARzJGc2wMSaLvyrQD55jRLFpGKNp8hjy2edqvpwt5H1h3aJJp3ZPXPxcpmRNC8tih49jAvpcGYdJT",
  "key15": "AZX6mnSVPkGauAxv1sktBc4c3Nt59rzGZsMr9wekZBP3MJVJaEYmSsFdS4DfjEPCL6qFeGgPqGwCUrLXFLz9yuH",
  "key16": "56ZkEzWZuKb3CTvWZRB9eUZnFtwNnjcUDF5SdNXEJWG9JBZgRcxi8KUm32rUTDqwqEKeFRFEq7e3gYRDuRz4QRz4",
  "key17": "BK5ScDFSqsZnWUTvVzURbDnH5zZ3UVnEWqvUxJnJWU95B8qwavjZMgrU9XA2f2233anJoES1NsE4PHmtr1qit1G",
  "key18": "5Y4JDcG678cAx5ubTCqz2CNbZCgizvGdCWGjV8Q8DWBa6mGrhmLMdRhqPUjtWuESi4XyNuLQK9jDkEEyg5f2Tdbt",
  "key19": "2drCRCCyDo4rLsniw2AjEEdxPati5ba2nzhsiBCL2bTGdAX2dq6XQLgvCCKXWZYTHfeW4mmFNDSbegSMA8XJLy7K",
  "key20": "5F9H7f9G4SBFJpaEMx7SpM4cn3mPi4A2u1vRow2rdzanCdj43jRhTGCiPgHew6Lcst3jzVQ9N5Cp7uRXMUk2X7EV",
  "key21": "4iHr81EETANMUP9AJZE9VQAQrLQ8FpQj12Ftau9V4Jy8wiba6tW4YkX48HPL1y2R2MJrN7apHTdtMPdG2LJ8ZeGY",
  "key22": "45AxLsm3Vzbdp5v2GLFLfjgRyrr6jiSiNxnKnnh97Z6RPGGJuZQqxbus5BshSpAE9KLA1LkEwEx2wGkBtjbdF4n6",
  "key23": "VNpHJTXt9MyZQxf1TJCjc4HpTsYnA8UkuoBx6s3tZ2aLnn7JtQfX5jFyBzpUxSpi9BAkvXCQSR3xhmueRCfySMC",
  "key24": "4XVd4EELTAJfRz9QEq5ybmwuD5N8QmQ2XksC2tUVpaZ91TpMRRJKgyUmtHHRqVYcHJq8fSYjyQZH5e2yTHRkS8QQ",
  "key25": "345iDh275RtLu2TDP1QggGcZT2hRMdmGbPWqcTMNnoAKsWbFkYUpMYoYeH3fy6gyf8yDjizXsZoKv7azR92QFpUM",
  "key26": "5GXH8WFbj85HWwjxo6an6yM4U5HJaun73BHc8nsN7ASPCWytiAAz7G8kFKYEq7KoucmXYvXehZ2Tzw2JWJt4rdUk",
  "key27": "5XhNny3ESeJQu7BPqDCi2QBAWGEb5SSve1z36xfif3qZAREiCcMDbJhHkekYUxmCN7Xwe4xaCMpSxPZGVDoJoumr",
  "key28": "hhAEqCDnQ7wjmGFMrzyDgygt7i7QDFpX7PvNcFKPz26Aq5AhxYBPMVXo1NLWFbmoKJtq7nYbymGVe7gBDqRsVNS",
  "key29": "hyRm2cHcyCB8xrrDxJoaHHzoNF2FDns6SHr3VQaxoxdiBTRbsK58DYz4jYaeCTM6SgGwrAqY8B7vYmcphfMEoXP",
  "key30": "4EtNuayBDDwfkXR2M8ymstcmyc4zbzj5ttR9DK6QjGYcGq5Tf15xpyo1yc91tJrRVPABwrwGnbfczCkd8mZ5gLkh",
  "key31": "5JgxkTsFj14bmpqF71p354asdiJZsZW5gQ69e1PeknGCWBmQ9rjUCaHzDqqsLZFPAVk1Y5HwECBy6R6zjfQVv9wD",
  "key32": "3kQpxsGEkuTfN3JSotXcMNevonwZsCsNSEUGyT5GwfxXo6tJsjtBjz6hrRbGRfewwZTKxPyFtHwRsgG9zrqcDckG",
  "key33": "4LdwSVSgn2yCFaY3TtqcuEnXLEakTyLX4vhQCqGCG2SoScsJGdyC2ABnjREEL3EnVqPF92WueCmtBbF41wXFzfno",
  "key34": "64wMAkdMwSXK8wv9ebM6mWCm7AhdYjqd1YszgwxkHHngQGCKwWSxqxZAtgHZMoj76MMXJpj9iYtspmqG7ZRbWRcp",
  "key35": "qx28RiLt9W7bMKmS14moNyrLaziGYmC68XCeAtfhPsznEaqWBp4EG442b5CjDrXSn2FKuEyRjGqSoijzp6cABqi",
  "key36": "5VgJfyxyMuAnSie7BdzYozLpsHBbKH3Wt5AFcTEvYDZTKQAbek59YbuEZ3Djk81uHgtfCz7p4fVSfJK13d8P4xmz",
  "key37": "1xD3GG4qPLRsrx4cqanr6PbzA4zBmJmBd3e7MTn4vgoTVBGdx6Ktto33HQh9RX1uTi4NfKAqdFgwW8uSUG9VbYu",
  "key38": "5CisvULZKU6jtTYTf2YjCBprz9uM5VxuPgtdBnzsfn7oN2kcvtjJk9md4Ga8SGC2iTxaRMJEDALMcgeUPnMnzAzz",
  "key39": "2eKf5ABcwoH1aoEagAtmufCyzxSHbYFgrf3VKkJeYKoMfqFf6VqLSsdj9anEEDjD5hyVdUg3x7dc1ZpEpxTYzH59",
  "key40": "ZB5kCq3F8A8xn5MDDDoPvS6pedCV5pzf7CdnM4JgzmWb9FFqw8nAbWTV4VfTcXa1NtW28483JQt29Uw1ba4MZDH",
  "key41": "2x6QNtHQsN31FVd5z3FaJShbnYynvvctrixH6by3DVhuuNeKohbfBTsNu1R4eRNAtwVPF4pyzAAkm5ujC92opVS",
  "key42": "2nLCmDKQ9SH1wRGra4uBkKFHdWMuK5KmhcZoayQXJyZno3CQyXcTQ4WArggegvnbYe8rJdf5X9pMgYo5YCzFoh9e",
  "key43": "2jUxMvvJbg95LqAJ1SDmPS1fBRzUdvmgKPKuKurubpSZ1rKEe4cU3Z2njKuX7iDMS3JdQYr8zytE5TUQntdBDUrb",
  "key44": "44TxW3jyHyr3Z3cwFQv43shKeu4JgV9t9SCFaVNg8J7vYxrPzi9naWrCP8rynkcEUdS8arpFteaFRG8CYaKfJBd3"
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
