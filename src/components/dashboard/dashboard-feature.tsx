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
    "3PV5PcFiteH2T8P5BwuevosYGGfFi3dKqbdWtG8sZjRvSzML79iYzyMPV74NoKFZyDKYSc4cjqkNYynZ8zPuwvoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AdpWGiEbQTksb7S2xwFLtp9iHFGEFCXLQaAzcithqzjMi37AcicCPDjFHTzzZYudSsj69RCSBfsY3pVm4WG5ev",
  "key1": "2MMaiq7uETUSqwk4r2osr3hdwd3V4h4EQABMKnnuk1RLDnMiMJNruSw6WuDhZXPSG7WEMi6cm1LeYYJ5j6kj8esy",
  "key2": "3YshFWPr9JwvsY2LYxFo4KyPyTZd2M3zvxF9krYuCdC4cMPzP1n97QGGMkBfrkutwShwyabwA9LfC8x5wgbr6wMC",
  "key3": "2vQgjPr89QN7jNPd2q5yzypM6PWRgJ88UaNFsxcd8kWBqAKCpL54aKXom5TuPv1Apda8LxCqoLdRQ3nB9GT5vn9F",
  "key4": "3BJa2PxMN5jsuYMeLERdZrcTgGTv8wpTGxgTccXvRbSD6yanWfSfUHTffVDFAn2GWqnjw5acjRdU46t3mNK2Kf8U",
  "key5": "5oraehYaxHb1hJTmRCcdjEacUsH4tC3T8quYzBkCmMXMRBGCSh1AxJx86m9Wimv8ZtMBxuf71MjJjUS8hN9K3p4T",
  "key6": "4RteF1mTVuBwyujbLyfZNsjWc8QsvPfLunuQV9wzZLSg8ozUhK8DS3HMj9Kyiku7Xq9qrYiBbcUfRSVhjRkU4m8L",
  "key7": "2N3h3iwzgZhgsh6KvRLutvWJrHZsfGEEFkQQ8Dn3TZbjMCv5muyG3c749HwGAtuN1ySAorgbgFuJhvcmFSrKCN1X",
  "key8": "3bBEB4fTxSwpezAN6eq7Sv3Xae4EKCsZgsze1UFBScbTDQnw1e4p5PkVtQoTupmNCW1tqiany3jeNrkQCE2EbpWj",
  "key9": "5KBbg6xjWSSXo5eUS9MnvFTTj5fNLuTyV4BCRzRAxMbS1To51QRUkgxctHP91z5EF7drjkkciqDDSjFLnnwaCgtC",
  "key10": "3qTxY2qBHgnntTbzFHsRfzxHbrBevFDoLFv3eqgC4KbAC8DCMycpw3JBg5kKGT8GcYAR1zB7CDLGu5gZUx3ETxSz",
  "key11": "wpn5YkdadsRM9WqdQq1KWHvB7x84avzTDAuPF3VK1zqkzZuQ623Mh94pBJBvxgp38K57Xm42gee1fwT39T2SWWT",
  "key12": "5y3jNow7GDkqDwpfYKjcDV2MYU9FSd9pzxC3GacnTcwcvrugk8cbtVYyS6HSnPs8SzwYEoQzPa4ryAqkLr8HB5Jk",
  "key13": "2oGdn9hQtSnULpmPzDZXYGNZgKZVdZuzqjVf4nzprMmzpMWQHjCTLv3B6eLTNMFeC78YkdPQBcm6raV6f3q219HH",
  "key14": "3PVVRFgxy6CxgKmVrSfUd9vNTcwasi6A3HHUuiv5sCyr2zcgUL4g1QmDmhQU9PkMztxERXTSKUxYAjH21R9W6gtx",
  "key15": "3EmemKNyC8oUsCxj8yQnp2nsjGyEiGhaPjLtPnsSg268iqZ6gfUGcjeZs6N5EPMFTqdvK5EUQWMr1q5kdw2o9vwE",
  "key16": "Ttj5cygtcXsUBGvwABmTJ8hu6UwHJUYAsmCi3c9fvNfKzyMjvspd9GK9o3bvozKeZRqpigt9HUYWRNQA6VvT333",
  "key17": "5FZ85iECBcAMqABN8RLbnXAnMb8fBVaqAf5hNzgpmXTiEhjv3nZxA3WXLE75quseHoQRdkT9nYtMBscHKzz46fxf",
  "key18": "4gbcXw3JmdaGjJm18tR17rQgcZBsYeyfumAhaMKndBKcx1QukfowYU2FVk8bFLvpVpZbtFzyUyKV9SqBPfQTKqmX",
  "key19": "6V9CcdiTj36ENwpdUyB8BCUYMgJnPKVqSyYgrhoYmP4N4aAnqPnifDFjHfCqyYQ2w61urNF7C9HEGtqiSDKkTTB",
  "key20": "5SecKaxrDsy4SgLkD1hr6ub9ginmL8N8NVESd3jy71bSTFhvv23cpYcvrgjiyY5uzWrUk5ceddnM9k4v9SVBdyyV",
  "key21": "2c2GV7FfUX6umzvB9QTsJtXRjJePBu4TMye9CFsKhtFzMfvXi1cLCNZSZ6oHVaXsFnyLkiC6wkJf8ifthRabHRgD",
  "key22": "2K8ob45jhYu8YmNrMFkcDSZDRMDixYanYUnHY6aEVg5AJ7a6qWJtDNjE2e6fegbqX22L2Rw3wd78TViX6eBVshTy",
  "key23": "5ZvPqLeU9dDdWkmzn6V6wshf2F1bu6XyBv6G4AJYgGCFNHsjYKPgcdpTvtC5d9bg5ewL13oWXu7FRGJ3KXGSEU3W",
  "key24": "38MKUN68nWrr6zG9ABJdkN2JLckpjCpp8aY7Mw9GcoYaUkRRbv7GiWK7DP2h2vBa9PA6RXJsZ2hTgUXq8Luxg77k",
  "key25": "5rpx4od1QW7QQpjkUWxzRQ1fC6AAdYLmnTbkSgRiSbVrXDTGSd3iVHZ3S9rbm8BbN5GsxhjETMhRRsu26ojaYjk9",
  "key26": "5d5bMCESTGPE1BDA8UUAuRwfc2wkgQYWQ3WU66gJnW6fPCdSvJqrRdQ44ULVAn7pBaGSi6nuYXXz6VDi7T1oYhiZ",
  "key27": "4LsaiMMVk9qdUQUiVYLQMB9QkB1M1qZ4uwJaTufmRBkp8VYNpe3dNtZSyc92MJ1zXdBoQfH4EYf1wE2pcDzqK4aH",
  "key28": "xhHyxnwdGqvvYgvPXAoEXsVUg7BMKUGLg3YRp6ErEJEvG6j1M3QYs3wf247LMQTGz9ZWQzi3QQQhwZfRbLM184e",
  "key29": "4i4Xhkjwxv3ovvY4VZ8eDg9pmSeTbyHnEcK4F4Kt3XMByqaT6AZRFAvDMfpEo2WnaQoJX4mnvMYFgnQ7SRzbP57z",
  "key30": "42afFo6cBtQbS68F85MYoSoehei3EqX6sJSXCPBR3Q1MzoAwHznxLHweLAWmezUqfi8NhymrMSAjHXU9NQ51mcML",
  "key31": "4YGdeyZZuApWR1XQUo6KomZ5uj96Wb14rwkzoDG8Er185y2hmn5KHyxQ1eJdKhNDpU3Tdky9pNRXtQBWGLdK7Jsu",
  "key32": "2k97DcBHsj2DTBSvRHoSDcV15d11Jsh3UHw5AmrBTh421SDzDaxY24DSH3WzoNdbuGpw753AD1wEkjUvuMeUXasi",
  "key33": "3S6vNBKgDinPmnAjTNwK18EMCPXgUZi4MF6eknSxwJeEnCqAVUER9vLuriDEAjcYcbiNKW3eHvhK4MuFhE1XzHow"
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
