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
    "4KYktNo7HB6HzTYQCfgAC1RDwTFpUfJurJgDm5z2eMAvb3KAu5wsFozJMCqC2HYEegqxqWsYLRnxKs37q6nSxped"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJR5RebbB8C4tUcYLR3DwBDWM576urrpUbHhCx6QzoAUHJwQyKsPEijaTPXmxfvHrQcwGSGz6WvoGpdaQjzteU9",
  "key1": "5cQxiRYhkso4RMNPRpjxzCByv3wXQF5nDw4XhAT2pDUGCUtjQRGwZdJumpFRPYRVsZdo7jkHymCaz2ibH27j2UPS",
  "key2": "3JBDEWA77Re9S3nDk1chqBwhcbyn9k5wrawrPgSEVeUfqSs2GQpH2zeePbUCwuJfcdHaMiGhb4WQXHzWQw4tnTGy",
  "key3": "2vwSh9sRSmTyjx7dBfuuv3AbBCgfVYUHnTuUhXbzNAGiw3ADoHbyQKYRCPGSmqwQZxumSVYKgxuSgE9gRPuZhXsV",
  "key4": "47BATpYyoycmRxiXzSk7Dbf3aJXgm4MRNKtxedB7SZPJWafSqtzuDEpmmkWiqCUbWdxaMuZJukXt1L6sSzih8jdF",
  "key5": "4XsqxQHqGF4snL5cJMjFUT1vYGx8YTkg4AS5UYUcfk4XDdnTvKMXS8w9Jip4YSRWb2VqgPruZdVNYX3QnhFuCKYN",
  "key6": "2dAz3w7AxUzJ7eJ3fAF7kyALZAopoxsT1cKkZDny8XMcM1dzzrQuYV9gUYbvDZGAEC8u9JEjG3kcbxBwD3Xdea3z",
  "key7": "2HxA39Mgi5emfqphy9pCrBh8A76YxcFybZRtsUyWbQpaZufzQSCS6hpwHLSsR2fU8KB9gsJPV7cXmjedV6uL3iQu",
  "key8": "33pegEmpQMea5jeWR1BfD5xXzzxqbwYULpxwWrurY4YkRotHodzMyv5j7UsfNjvtPzoqYfgr9CUGwwLShf7NdVXT",
  "key9": "3APeaZ79K4s269bL8gqR1g4QbjKK2EB7eWoqg5Mr8TqQ7Ga1toSgn8Nhihc7Xkf1KMpJjDNYfLrZqp67eD87FYuY",
  "key10": "3pjtL6HnxAo2ffrETrFzDGmoML5yXPGafNCk8kAutgJe6HvaquTmKBan1d2h7Cjj32u3dSnXTrETBU2QtY3dMbs7",
  "key11": "3ABYnwGJe1pXWXJHUxU7z71n9Qy8HyRCsogt6SBQAF5D6Kk9U5ULXv2JLQ9eaB3tEug8oJGZhKLp8FjqzxQQhPgR",
  "key12": "JhZzDEGR1wTcrjppFZLLU1bUzCk2RW6HjuobKcd43sfmEMUWoakBemQC8nEoz9KEqjouWefCiESHnkLnCvjgH6J",
  "key13": "YyeVmSmujsFMvLuauYyYDsAoBQtStBDHRtXpB2RhwtTr215Z7Ny3tV6LhgdYZNn3oPzd3kvFyWiZmV1kYLQ51qT",
  "key14": "43utVCYyLEtEB9aH3FTpKpRCu62742oRvEdN3eoTLxh6oRXBrBzgaqsed5Zkgtng2NBxCo196eco361jn897K47Z",
  "key15": "3hfxvfRveZM6M25xGC982WSPK9i59CCa54mgfZqT3GfJYSnkbgawySSNaAVntog5SLfdT22Ly1JJnNuAXyxvjP5s",
  "key16": "3cfN4ByuzenyRzQdGbuu62JLCL3C4nNqvSgBLRDxbVHqD7ASzyPBBCnvDE5sxQEThtiqPhdscmCm8PGdP4hXrxoX",
  "key17": "K7CxiQqmGpx3Nvq8r5MQeQUM5ijh3L5sd7DHxMG6FYMTyiFEsYbB8gV79q45qq2R85eoBSmoi1qGTYwBvNAbjUf",
  "key18": "5fMFPBkT6VtYiqHfWKrBcp23LJWwDhgCgdmtTUrfgjjvqFCoUXN7ctK15BpycYS7nVbnfmGiEDuskK4X7GhqUCyX",
  "key19": "632txnSHtzuaBnvDJZUEDMMPYSCZEB1M5VeZaWqUdLv2Dap9HPr53SjzZnT35HvioChCeEv4oD2wYDF11wshx8F3",
  "key20": "4cMbho5uz9v74KHSMJ6xH8nTbK8CwGBvLjus3xmu28SofXeCgZ9PipjR9ijDrSyvYtBNiBgBbT436kSU64rTiwi7",
  "key21": "38AnVuntKTw2spjKcQP46W4esCVH3rAQredFNsVdxTQXuWRNcia6tKJPKK8MNsGtnXtC7QCMWoP6w84aMfNiDyUN",
  "key22": "2c6sB4GunibsBkXKs6t5Autr62UEjV8bJgH6nResiVrCPSkrbnGRSfrex6cMpoo1UfypyMVThZ5k8iikErWpHMgC",
  "key23": "4bZhjaA22mVKmRFrEAFTTyXhDM7iXg2GcMEx1wazEgBwGS1AJG87ohV4mLaU3kamSFrtHLrLs1izZ6qu5G3TBnCu",
  "key24": "4ZiC4rdUTtjVWvPwcd8h9FQCR7AC6QfbKU6pDu3D87YRaMnPWV3B5R81CSrgKfnPe57Yd2ED6sLXnzFpszCwiFn7",
  "key25": "yHyNDuTh7B9Zokm8CF8xKDbKamu6v2hwkWyAaofriRTAc1ocbSzNieXtuxQk4Mg8uWWtTYXFEVj2zXdStX7c2dq",
  "key26": "5rsbW1FKuL85zmPLykc6ZprEKHoU4rAin1Czeynxnk1GLz76gZ9K6HovGqYNduPTLTbn9n8rHZVU9MszkHpSV9Ej",
  "key27": "5r4a3yvAomHKTcrPFmyu66Rs7AKagu3rg58SM4CkPjH4sxLiRbhq1oRYgrEpTEfbQUJ1nmKvPDgqiaVpRPhX6PZc",
  "key28": "2sdsKdSfmWdRyb1cpYA7MVBrE8TEScS9LY5ZKUdCsqZF2TgsjjFGYoqhSAvLBe8ZZjYjGAnXLGS72xvYW1kt216U",
  "key29": "38WRCnNKJyasQSi55j4cqf6ztzjTDdenpCbLiQ1b8kTA1YTgh3dTVvN8N5NmRPYDvaoa7e6rAD1TYt1r6P5hZDSL"
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
