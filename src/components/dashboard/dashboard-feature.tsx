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
    "3WyNrsGYdWsr2vxwu3i7D46x3ju9xraUS9vRWkStdnkAFwbCPSEuMEr1zKdvJtaEn3GGUWQZagrdpYLi9iBwXyf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfTtkMkkF6d4cBkDcRvPskY9HRrPqdk8gNY2D5HdvbXFbCLQyCjyUGCNYGSBzxgF1EsVAuzbz4nPq4CKhNU6aRH",
  "key1": "4Fcx5GwRXQopgwUThYekvgc8mVjmi5qAw5Wp7Knn6tqe8WgJ63MsYb43bxNzmpiZtZ88sCAAgaiWrRdUtra3Reuo",
  "key2": "5aY1etfvCvzHqTTg71tb9zJcCP7dGrZ7HayrfPqZ6PE3hrgcUbwogPRrGx2r7mbxTUnccGkdpzAV8D9EJq56Bmrt",
  "key3": "3vCyqHjpK4K4LQvLByUyoTSoDqSQ8aJ8qNhLVqnhQ7MPGEJeSEf7RNPS4zffDhF25gn7BD52TueeCYCK2nyL4xzr",
  "key4": "4JEDUzkWD7woEfLGLoLuRxKnH1p917pdYbkvnXTPWmogUJCQx2KEH9nXMMkChptY7Ne3iM9nmn6o5fScBrBnYGnH",
  "key5": "4i5ytTXFSYsPHyQpkpFCMEzqdz7Wr6NF2FtBJpDm1YBcsMwGs5F2dctBEyoEvg7D9sbUsXXZEW1KVTLp3WMXRwix",
  "key6": "39f7ahha9Mr48Nusq7ntbzcp2aYmxiZMeyuoJz4RLTxV27KZqQbtAALRDJ1MehqWARQSagQSvUgHfL6ZsEaUi4Ca",
  "key7": "JKhZNUkUriC4jMXoNendJxC6nCTxXiYHS282UmmFbGYpfBRFjJfFqxAfewZRZS1YU1R1UJQUEmy5VdGuMVrWy26",
  "key8": "5iyaAQ4tqVJ7QSUCBvNn54KZrfWjS6qMTc6HMHMAaLdJvHPinW3XABwoXh77MtDbZZo52QGRXmHRHaN54rQvhddc",
  "key9": "ohbhDgyPjb9xLc9rkTWTd5VPCDfvjvox3JsE1UwacmC6WCEN8kXFdEgkjd3CFECbLkXbZy7uDdAFUjMvEXd89Ut",
  "key10": "2RB3KUv2Bz7Zfk2ftMi25k7kPfhTH9PccTjAtdPvdgyYb81FLHBedQCFq7cCJEBezqF3EW1QEwvb3KK4uF4koZaU",
  "key11": "5amtzzeQAYGzrv3NBnx7q7omBzmM9LtYvvrXrbfmbnpPnxy9DxYDCggWSfM2nwkG25tfcMZtzyFV1SeSVMaGgEtv",
  "key12": "rviR1FVe1irzQ6qKdZWPVEaGEbbdSffVmotNuy3ePcxGSw2rmkJaNwnPti4pgcz7go9cUkdEtz2kgBxxPFisYvN",
  "key13": "2dMTvWa37vgU3Vxdf8uUdyv4GTRuBHcKnC38hBTmJzCDdx25bQbxNhmVnruN898sDcusM28uPLWwahJqeKVXPo3A",
  "key14": "3ubbxDfUDD7FBvLvn6dnfM2RWmgVrMTdFssYEKhgEoq28AoJB6xU5W7jmpLY8guEGabwTjGqdnLXR48UXhKapoBh",
  "key15": "2rbgZqXC9DxnLDgitMPL7rJEvbk1EQjai24rDLuf9TPG3yYHmsD5wYszAjUDvcjAyctqkrzzTKxnVX9BkUkgKBXw",
  "key16": "2pkWJdcU14QqRF9t2J8f9wmnDxhGWGLMRBk6Jurq6VhsTCu7vgP3SrJg7qUUCEVGjCpDNUUBC2Z9x4F3wHPNGoJ7",
  "key17": "3AUfniYxjZoSp9DutH88yTmB1G6upTyzrfBiXmkqc2uBuuaRxKgGJageCJrubboYxwrmZB72Kt9VNke8xSC5xCD6",
  "key18": "2uT9wZJPLCeumjw7psWdbP4V6Hr85xe8L9vSrJLihz4F6uWFvWq3h3xrkYbhAycjS3fYMNDYto7bJ4bjxqdYwvvC",
  "key19": "4JhcLFxAQr6gtfwPwztuwYB7KMaCRy1nyYQUqp7inoYnuz6JJWyM7vFH3PqEQd4k2B2FFYFj9HQyo2eqYKxaq2LS",
  "key20": "HhS7bFVSgm7uaVazcM9HAe1QpMSFKDQxTjthD8iqQY4xX9uwPiwtcKkr2HJCwGKzgwGmB8ssmudXtCd1RdHZvdb",
  "key21": "2rFzJPNd55V4UbfV1ZNfKLYmpDYHENhZ4sZfBmD1ZYhZ3Wv7xYjDC4rtvWuLvqtTSYoPqzVD4gwPncRZGXNMyhjd",
  "key22": "5bszYMCrRU1JKyjcMRuYgyErSkTvNKcXJ4CfEAfj3GKve9ujmytYXNHPeasg6nZbJGUcVNGDA8RP9bGgeqVqxQSN",
  "key23": "3igcTq5w2oSgnr9Yne1EB2kwKyQSLL9WHTc2tcHmCfAAJDsvQnmbLm6FiYmKYZC3MDyQqrvDWccuXLMGEgjP8Rmx",
  "key24": "3ensbShB9GE5za6TsF2zG4RPQu6GXYpNfzDfL66JvWdFFWZzT2vWS895r4YuuTjfx5zYyBtzk17zKBrqYfxdWFDX",
  "key25": "dCS7rm1GaFZjSdSLDjCDt5LsDCyiTDqApNKKPEq5v8kC2zAWJKTx1pQ86NP83nkG9BBqPfsUEh2KU6gKc9UFt5Q",
  "key26": "Fgs1Mu7S853ibk9qB2JoLKpeRBdHjTCNyJb3w9BS81jR9TewJ3KnahC4ad6b1mC62EqRF9nhzVcVc31s8wwph73",
  "key27": "3GTjATdDfWFY4Rk333d8Lvh4p9zB6BXSqDfKXufEjxK24ZPGWjDyEFyKRmoo5PKZhgbfaqGdMz1QkN2pqbuLox8A",
  "key28": "5SPsAmPyu1v4GcNF6U6GNyGMZi6hMTZ5rstxUqvn8DhcKfWLmUrZwAtbT1CggVs2ER5exPGQtoey6r1QruQQtjjx",
  "key29": "5wCcxqjLD94dY2vzWsA878z319vmgNPWKcPucJnDmVwbKkiJf2CfBkBon3oSMNdquXPCSr2aKGAHkCYjvaVAi7cc",
  "key30": "34xYKYzQebxAfmdQWs3MhrgPidSHuyT2gbBBNnHUAPN5qgqXZMRYxFvhhq7AbaBmhgCpsH4S6pkZHa8SvgoKKjs8",
  "key31": "3quVEQeoK47EU5WTpCiSLTQheVGLCRd1uct3vWQPLDdf8fT3Lznee1PdeTd7z1W1XAgmPQ6kRa9XMWtXHUachDjU",
  "key32": "zyqZbouJx2txxb5r8hvCGQp6tNXW9MUsSzTYhEX7wPpTSx2hRGB5MyTxPsyvHe63NPMZuztifeyj8PdBtbKKFzy",
  "key33": "4doqpEhdJp8Vdyyd7L5EzUehngjWRfgm8W2ioKMSbkGM6UzPZwGiKdP3aPdjNGXzKqkLnHcdvHa9NaLsAwfTxbkW",
  "key34": "5kKWcnyjt83yJCvhnv6SxYcCdmHnjTzGGfv84UN5bowasBUuCNQGDNvVKTBaaaR1Lc8VAqsgpebN2dSPrkUuACEZ",
  "key35": "65P5dmE1PTV6fQtbaogKbHhaRJ2VCcSfWdLMcmVHxKUwd8vm8hYi3E8uHpNTfz5AmZ7tnvT7D9WWEFAFJfs74M9Q",
  "key36": "3P9gYrmUDYHG6VCXeLPcwmcNp7NhNBmHikkZ6RR1Ra2J5XkZTujpDQnXkveZQRL6aQWwjydimdp4hi2B4aPez1Jp",
  "key37": "5FpmC4tkqppmRZJ1WXZs53mz2Etnirqg2YYGfDuuTe6fAa87RXCVAm9EQHEuhT3cxFLnyY82YmhbrzpkXWFD4LwN"
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
