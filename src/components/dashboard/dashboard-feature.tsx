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
    "5bbBuLvXRnbh3eotieEp3QNBWfUpfXZyrRsEiA486pKVdpJmuWpAPpQvgNS3xX8zT4wY9wjPJvWB5n23VhaP4PiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SzZo3NzdJxte7uCWPARzqqXsNLNgbPhohYtjG3vUy7oLMR3F3mY61N2xJUoWrAN2LsLR7V7opNGHMEUTyonxya",
  "key1": "2sWGYRw5iJwHL5iVHu6bRS9BKUUwrG9D87tB8B9hgeDLLdHw8PwrJWP7uuj4Fsd7m4tXRH5yBDEpC9fSMcBMd86q",
  "key2": "4Na2ivsjc5ap5axGbcMzVvYCR2PwxGVa4Pnf2VzFmvTgzVx4kVvTczJLwX3aNMLA621LAdJTc8RFwbRfgwPdjQNx",
  "key3": "2pvjtP4ZyqRDqNHzp5imH1kEMkiEtmJfkzxn1Vnjm88tmZbpFjMia13PeR1py4KwsNdMG89NVFKxpmzN3mRTMyGc",
  "key4": "8pqyMfMbHZEDFs28vvsnrbwhobTysPDFENpm8MwYkjzeB2axGicexhPf9hsrorJfau5TXjbLA6Mf68SJUptt2Vm",
  "key5": "3eUPSCgmaWh9N9HAZ9o9Q47v2QmEyG9ekY14EtwjojoZ7JAj5PBuc6rXbDt4jviaqjjYLBumuqa9bSD9VcUpGEP6",
  "key6": "Qz5nYwLwSP1BoEEnY1gnCiVPLwHVErDbKTQCBwPhGQnjAttJr7LwkHG5CgXeEpaSea7w6RgNjFtmJrmYjtvGMzm",
  "key7": "5fN4eTY5CQ6DYSci9fpadq4jYohi45ojSSCrRRzQWETnFC9b94v2Kgh63VrJqQDYNWSW2RrqVNQS1D1isiF8VqoW",
  "key8": "VKhxHS4JhyHBw4GtBA7DtWqGsaLG1JhAMoj2YhdkQZjxPreCv65b4azNiVMT7xa5KBCvL8BugJVhTF57W76cywX",
  "key9": "275SenPFAPP73Lqvs6sv2XbLPqATZUWyTKF1NqDk8suDFxvgjcGdzvevm8nfGWcTf4SA9L5wYesLJjKXbir7ThfZ",
  "key10": "5mmVzwkw4URAVZdy8Aa6Dw84qvCRjyfRgkDfh8BvTa1hDDHvNYxpfVVrHbA8wQ7RaauaxuSyrdeefvcs3pDTzxAe",
  "key11": "3xMuDMnevFjZ2Wj1KviqnajQHEeUMoKCeMEQqtkhMMt3g5Ky5wvLVKETDVPkaLX5tufSVSwafohwYin2eqToTsp6",
  "key12": "FZmUxr4iKmkobDDNv4fmMYvMMErFeFFxZ8q2zdEt3bqZf8dotWaBqAmbLw7PV5WRfYBL2UukEU1D9wsuRMaHnSz",
  "key13": "3t3u8U9m9rotBL6Xq4zM2rQsDCy1kzssxskrjMxggGL66pNoXrtoP2mF3LjCJq1awkeSSLZkFQCp1xbhcZdtaCM6",
  "key14": "2Q2fffzpXyGs4G2Y4o2Ae6VrMpNogki7oBkJJ3qaAubFZyuSzJ9uTZgEpbXJJGkNoWDwLjn8tpZLRWxfRW8jiWEf",
  "key15": "wHz3JVrRco9BLTYGgd1dLfkzE9kHyi3qFQE4ca8Jb83X721yrrvfvZwKzNNtNFFrKEcY4fuTxM6T5zUQRYPQUMM",
  "key16": "HBCvAAQRWw7ZtjXxLthsoCxcqhGn2DYvZYedj2wGTB4osmx4pFERqCacahqndPmSJfuqro2qEepwG6tocUoZmi6",
  "key17": "2ftHAdeWyDSXi6ubfP7qteGqFYDFbrzXHzHy73CUptDX6BCk49uyxbNAAgrNAB1TSGHEcHpYPxdnx41E3UH4Td3i",
  "key18": "5qyE1VHqkMBFP2NhnynNqLuiwvZxRTDqBHUE3FfQffCELfVQ6H5jurTA91jzgheYAPQYwX9NAjNBHCFjBfrc96oU",
  "key19": "41FKt81h4jZxQoJQjkWrqEzBruF9pvMQuPxpNLpY1j1AdtM7K9wcBco1jZzVFjL3UAekx9REkxQo9Xi3aCi68sKe",
  "key20": "M6spFsCEJSaCxdpGTRdfYxfjJwyp3RDuGZn4vTVpdezkvbm2hG9fM9ioXXAemsxns9xrXWfpiC5itvAdd29vi3n",
  "key21": "Ro5VADpBkZZdeGjA3kHaGng9LFuSckomAD2oUb7u57dXCU9e71gjUhmEahyJFNL25RV9hNuZYwFmQSURW5bWuVX",
  "key22": "42zjgsGkocdHMAY6JXixMsCKWehjZkKZw4Ew9wLHFJTxVtYBdPzCjMDHa3k35Xw9MHptrEMhE32TgRkt62sH9uhr",
  "key23": "2dDJCj5tgcHFUiS69qCMkyNw4MNJHTRY3oFkEsUb9xMccFGVtyynhzi8AoWwS3LqxJS6rg1JJJ21y1FmiyUX43Yn",
  "key24": "22rxAGw4m1uB9YvF5XKvjPBezP7EFkeRzEVC67B1axTwhkAC6fXCtvuQZvN6EefsEipLZuWxYmZ1xbnkLLxdvEz8",
  "key25": "3QvAqqkWKJy2VFFBNmqBpEEQRij2z9E75Bs1gwjJJE3Vf3ciASqMhUoUSg4RcaGzmQKzen6veTTWEZbk1vq7RRS6",
  "key26": "5yJoj5auTnT5DCmZxieh9uqWUuZtjhCkAvDEVqktUzgD7ZhgWdLQ6Q98EEi94TKrcdHLw6dBsic45WE43K6QXdo9",
  "key27": "3QjX6LPUReFN6qFsJaWnuhxxTQdeCPpe66e9zBXMP1DbU9CVCH7QpXzaoVi2T4hJnYXtK37eWJWwWU2gFnZviBBb",
  "key28": "5ymhWrgdWg2c9vemNr91nM5iNRexcKSscewCakeiAEmpQ9X3sSMj1pdYATyajFr9wLMVwxgmYSc5S1ai4JNafdmc",
  "key29": "evxddaEFphYFT7gvsRA2Z7xYgPBBEiBA7gzLHMYWRFs1TUqMDBxf5YjQEU7Jy5GBD3gqmQxgf9E1cCHeijgBA8X",
  "key30": "5YQK4gUtibbH5tSnFQf8dHNeJKota4KGre5xWdoFNnGRpApR4LCDJNSznubuzpWhZSyyFjBQx25RFdkpfuoeSmTT",
  "key31": "EU4XwBYXM4C8dyrsG7J6N632kdhbdJCydE4pGt7dg1NLxuKfUeYZ3pgxCdPgbPQhpuzt35fccuXNNpcXm85rhLv",
  "key32": "4TwuxMGNarL5CyEHQm6ADEak1AjyTiygASFbJK3tJ5W2BXN6eAzP45myHb3YJhfRabnKFaraLrMCEoZBWfZmyDjn",
  "key33": "fQjuvvJwbYhEiqtgTeL8Jn8xiHYWzESpCuBty94AQ4kUwGTiZjfGMvryD5hNdmrzrmBmV7q6U6M11kmxv2hcdAm",
  "key34": "XJXcXiBbiRdpiHmfo4og5mm8XuGoP9XorBKwiR7fSFXwFoiUQn49BMBzkoNs3WBgEvUgaqQwDcWRpXMhcoZSfJ4",
  "key35": "4iANxYyKqdRvYzJGLnWPtTeS4Btr5EhTKm6HUEiFte2sGYpMEbyV1KaKWUEXTa4y72CE1KtwLoc9ttc7ABU7LJcw",
  "key36": "b86G56NpHawrNzFSdnCzLEyMi9XXdiBhNRMy4NsTD4rpiWJ12RaeJe9Fy3ps2XseyFsapXv2tFirpSbeoVu5t8L",
  "key37": "5NY9CafvhSUf6NEfUY61UrRYW3WEyEFPvRo97KAw1WGuCoeQ3GrEjDmzzQ9TBeSAdkpcPG18jvjhgevGGtchqeS3"
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
