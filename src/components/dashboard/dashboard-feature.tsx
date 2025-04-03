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
    "63Ei8rfNLtLnDWLmyfQnZpzJLUG8Xwx32P858MSfFAt6EP52kfGF55snEpJVR7mzpv8VQX8ZDwi69qc7Zk4yRf2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqmgixegSaa8qLwg9EDSHLQzZjntoFWgQB8gM1uy1cK9XKoeM2dZjU31ksiC3TJSjXtLuMGgm5kcq7bx2dXWSZ3",
  "key1": "5P3nn39AUj7oQgFzLx1qdKCzkDJzfjgYG81eovGgqQSywCGBjkaa4Ue9We7KfiywPwS451dx3WKreBGywuv2mTbD",
  "key2": "4FXrE8BVmkU5bHNrSKWRWiv8zU8K36KHk1BBMjGAfxfL8jN9wqTgtK7ksZBaTJRRVD6maVf9p5DX3peQfPbBGJ8p",
  "key3": "3dLaaGqV7z51mKQ9NMBnDpoEhxt9VMidPGm4EYcsdduH4TAndmLxtR4iNLoi728jHo7YRBtJLPShitfCn22kBpnH",
  "key4": "3oCWz5uzaBdFCWmJ7imYXgaChiaoCUTu6xfvmyfvWw6r46f9nf1CMACz8K25fMCBjVs3gYwEVQEoLK4AAcTTmWK7",
  "key5": "4CqUiTfuo9esvW1jDLpDHjBdDXJYYfbBVogemQJzamuB4659yCcfHzVcVNEkBVoRG6raHUeMBtFrXj3VY5RAZ6UW",
  "key6": "4Tpx7SEah5RYNFz69gNgUJzGvWBPs86w7vR2Suf1zaqa61P9S2Wd4vYmD3wfFEkrF4Z8bivpe7b6WZSD33z2fYiu",
  "key7": "32gmMFmvjozGH21A9aaLjN5Bp4K5tP4E1CTgsW8iYRYzaAD8LQbHAtWhqSYZV2vCuC8or7D3vpgAP69Tpz7VvR8x",
  "key8": "iFzAt5XE5XVEEGnkJPK1YAf377RDd2dHLKBBAJdJmnNo4iEz71EjupVDKi9QLVARY2FpU8WEnmLU6LCc8SJRwq6",
  "key9": "4rf5xbCykP3yW6iQrUNcxB5gSDQoaLroMb7pqjph2HhRyeb3wCiShvbZ7rFX4M5LfdvXoPeg85wm5rFKFsaFoeti",
  "key10": "2F9F5m9rzqLrPghFDMx3igpJpSiQVYkkmZtz2qawnCHBw33P9hZysZkRTwd7muPgSbBwPrpmCPiLWFQag48EU5CV",
  "key11": "5fMUbRcbtEtQAEhSP5YcbDAodTj2joHuTK54s8FRfE6PSLaUCd4biXuirnDQkmcMmW2EGRta62AumH1HXiPKf5Ev",
  "key12": "2B5d5Anr6W1MfcT6N4YTwDWSyXUQncudgtt6zjH3suPx2gKCLRz9Gezxw22ZsfW2F5Dnh65DJzunFGaPGLGRkFR9",
  "key13": "3diLBedm4H8qFkU9oTmA6rWR9XzALumgzNMHbPjbdZAeoLUtLgcEVVE3z5Q37eUVndsqTvHUiAzNUQc7jFgectdH",
  "key14": "RkmWwaiDLyXuPu8piHCyU6pvY8EJLBkrrYqh8eW82Zj4bR5Bamf6fdjMnKdoi1BDyyenRQmpfbFtJ3UnY2V2qz2",
  "key15": "MPb6rv2agSXML8zA7k2EFudNkS5DHtbyCyfC6Khg6HDynEtvmxXT8HC2JcUdqB5zxS6PfNVRE3aXuEaL1hTe484",
  "key16": "5NG1YFHiyyRQ7tHXRK8DAmBn1zPLcLw7FmFEByoKHVNKP29nU8p4Pe3utiobLWU8iZbKbcGu4ptizR7m6PoQujtm",
  "key17": "48jukG3tABuRNVJHLNmZu7RqxjromG9ch8iUHnHw7yV78ERvJeBLLQMuq2h8SNfm4p92RZVmoeqXToPSk34CpKUz",
  "key18": "4yXN7Z2Ei86RThGHeouSzY7PctmNCcmNAPc3xyMRFT6QTB1XCtTfNR5fJFXfXei3KJT89J13jArspmGVpy4KcWaC",
  "key19": "2Fn8GSgjYxvCTbDTNhUmkVPWiZpX5HsqaUzVccawy8ownXM2bnV6XpKuWdVqD7cWtweMDz6UqWNvEaRakAUMRRLN",
  "key20": "4JFFo5UsHkRDUSDCQv6V3TJuBX8TNSmyPi9tAF4SwrWWFG3hMAq7fguoi4YvkQLA3ncfkUPep3qrQUEru3qdm5At",
  "key21": "51a76eUZmLp9hkAMVkc6hDK2mnwLxd1JWobNBtyWJM98AMnLzP8May2NiyPPAS6AX3ZeVyTxJAv6FBnDm2RNdBJo",
  "key22": "2izosLsRSnis95TKw9r9Ls5BBEGtYe5eruUn7xKGMt28jmeyYog8ANqG9VgzCw5z9hzFWWbg6i4zKXV5aCfguqsm",
  "key23": "4SzsZ7NSyfJqJ3gEodWg7pY3fKy9paVCnXJd1nGvcPSLnyd5WGSAPKYsMKL45YEKZw8bWZPxrHYDKHTgBHxciUTN",
  "key24": "EtMEGT5cM8VaSWRkDc2zEobnnUu4cTg1oTstT6EwLnBfssii2gXtjJXEevwXHGjp9gui2BnHaimnCr76bV4jV6L",
  "key25": "RWef7gurXj7wu32S9hwxHrd2zLSKtJZcZ7huUuNo29NAafyYfYApBdG1tuAdqVYQ4r4xKmhq4FfhY83ARCSaP8J",
  "key26": "4xMmMMQVjBjwK5jioXUQ9jkU9GTSbnJRjSSCZNAJXGSYULQJivvczLnkEqcZTridnfHuGSuonLC5jmd6buYhBFND",
  "key27": "3nonsR6fjqpuHZT7wCDUGT6JWNEvng62JpsSi1V9quHAJ3PCkWPmojQSJjKiMsHsy4e1UPUTrDe8aB1rCtzhwfgS",
  "key28": "w3eVBss4tT6Um2fJn8A6LXmKmoJNrMShbx12b2DswtbZ88nc2s6Sodmq9GzGh3XG7a9pr2VVv562qvocW7x9aFz",
  "key29": "bq3qAWH5KmiSkvLVYWPVufroxksRAbTcDAnUxjz1LTbbDdjov3iHiBHcarbnvL5kmE7Ha6AaHsq52fvWqmCKv8g",
  "key30": "4k2xFqH1ALBxVbjmE9r3VLWWZ2W9bG5StPnoy6VPxJnS6cATzkcGoYvu2gK3VygP64GiqKqhoaiGXJQ9AKKQQUYw",
  "key31": "2WpgEQTTXkQtNFbBHcBdrUUDtN2NwyXhPG1bRhXbuJijEK9tRU9PXR1Jwn8f9tYLGN2qxUppsqQTeoKgUFEKLf5N",
  "key32": "3GWZ2KmfnRbhzTpgJbUhy9V4Yt8ZCL5cjD41G6T29cMWVxZE8MJZsPxjQ6geLQnf28z3bJe9MREsd2fBWp59BUhE",
  "key33": "5nDK3re7xTAt5SDXzF84ugG39eMu8eLqvg8tQcvW283XpBhoMd84EF45TQ7dyvvLjBAoKRwZ4NnJnyBs2frvr4xh",
  "key34": "24V8D8X2Ap2Qtk9DeC1PA9HwyYxCJ6LbLfniHshWEsGkTUShxLeQqvkTgmfKRPZQF8wZQ1nK39qhjKBCNgRtfUHu"
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
