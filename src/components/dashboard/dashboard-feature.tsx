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
    "5ET7c2JPRJhVFgFSYnNw2jTDmwxX9Ry6ctDnrrNEtBVrBj8cLb3g5wSjhpt3f9oan6ro1hz2DPqgSgGdXQM1isLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CkvXWv8QLNaHqzg2yQbi8PXrt7LJqhC7E28BAcRmKxGGcxQUfTey5Hm5HGJjX5FmpbesboZds4Xzs1x9oDqA2m",
  "key1": "2gfxLMUYZ6T9nUvb8wAwK2gyBM84b41S1BfU1zoKHn4H736gZWVduTeAwcQ6ZjiEoc5ZAvTbVBjiVJDDCbiDb6Xb",
  "key2": "38XWdQBc2xun8QQov8bxwq9zBc4e8zk6cCGsw8sNRNxz5ztXtxKu8MPGatcnKgD6qQshec9qsRaUGnDLd2tuwwKa",
  "key3": "42tVQkKhNaTXWoY4oBcApepvycfcmp4ciLo9dxrELmLFS9AbG8BkMgqpCppD8BTRk8nrM3x9bEit4JApp6o2YGnT",
  "key4": "3yAiC6DNCBTe4nbn7GGKaFKeUWpeEgDXpLehnvDnYBFjWb4z3QBfLpza9tUd5nvvREeg5B4oQKJARsXsSWKWFmCZ",
  "key5": "3jN9UrSeNQyeHMJCddMme9FhxnZb8aWuMnaiQPqfPwjr9BE6X8ULW9TK39fBnuniTrPyKHswzQFnNAqfnN1ydYuS",
  "key6": "25VHr1HQu7eaQUNBohd426P1miTEodKTe1pjABBNmZ8E2N3YM6nQ1ZjUDc3uyg5w2Bx6Yuc3YQp2KzXbobRqwem6",
  "key7": "4nWFnCz8Vbe7pmtAQFtdkTpBMd5bVPxzz3DJNpnHvdCxcdP4aiUnteYFqRtGcbWxmSRTxhmQ3SqCAwft8FoTyPKV",
  "key8": "4yXFZUUmXFbFGWgY69UYdu2KYuf6LvVxkkpXqnoBWsm72NESozZFFy5Acq96BRVJqhrq9WeNjQuMV6x8TWPE2UgY",
  "key9": "43EFsCh9rhdRjstB5edsTd4vvvFrPXSDjENehVEi2qMdX29kFeBxbrxk7fpctA9DKxCDbdr3C7Fh1p5mUu7EzmzZ",
  "key10": "2P54yV9MyUkLRU9UXYCmNz76eyBk31UYpFstRQQffQxMLeFD1iv35g6ivDt3HaF2cpLTPHm65zUjmXfDxB6XgSe5",
  "key11": "37bawWENs8HgnPSYkDDbMzBrHNbFgaHQggoFsUws1bd2WM8hbQ9yUjh3rCioHZ4UAFZBuSv3YNtSJkTmwRzRPfU2",
  "key12": "4rmq6ed61qCrbjy4yZDiMTwsMBdAWk2JBMAQpj697UW7gp1RYqd7ExRYfbVSVYtQvNYSGwQxrA3dcjewjqk5ubwV",
  "key13": "3fchmSNxQKW6TN2s1tjrPoqvkXi5oDQVEW4yg4TwUL8Y4FWTp8Dy7XjKtc3dEN4C5CsqCzRULzcZyzgq19WVZvM",
  "key14": "38YcrToKX4PqWv81h4e5poK7iufgvooHnnm1fHAAjNGiBBWe5V3cW1t1DvKD1bactgLTYj9PERdZ8wKvygFxvqot",
  "key15": "4MKyDCNuzbijKJ8yqkVUtR3TkZkVSmSDbSCvpB2kK7vicSZTh3c14i3M3tBnYQcB8wiKqViZaHrhWoXZVzFSRiXY",
  "key16": "kKBcAiwBbKfVZyjZXndw3jXQMdLGC7CE8LCeM7Ht2r9KLZZbTDtdNNGxSQHLj4Mj54YgKBe5R45ieaXgm7wXaBX",
  "key17": "Hg4u4bmzgXuetJLSmctqoKmGBrnYWCWMojxM54uNFHboMsCRnBvqkcyLEsTu9ocpjQ2tW36nFjKL6iUVAmZdxpm",
  "key18": "4bjp1sVUdpycXKYsQN221PWy638Wv2jj2U3QJdJrcDjTQbP6JpbTkiegaQFXdkUcwQ1Pteq8Lzwvqk4HuiP6RmQz",
  "key19": "3AUETzwyXTM2eBntHj4vCDkWwC9GBvCTp5vtr2BwiMSfAv3LjHdiYQnMgdGFSVDVb8r4w54mCv1ss4oJaLpoaPte",
  "key20": "2uKgbJ4VRQaeEeDeaVMnSLfRebMBpQDWtLRa8Ktjvg7GuifqqZkAL2dmvzrXpJq5pMTpEBd8oMt3x5HodMuaya8o",
  "key21": "2kvJCJ1LtsKiySN5nDnLV2gon2PjQ5ZLZn6pii4f9HXtSX6TCGvSbVdvoxj2wzcXncAhwwxFLU9t6Q32WRq5ERpu",
  "key22": "3u8ABCmZ4vPHZw6XC1zh7JmVFgkcPC6GzRtf9vz3RBHurmqzknLY74aTxw1UUNcsHBooae3xA7ZbAjAJ7Jw7zqTs",
  "key23": "4anP6bvo6HQBFpEBCn6S5zZ8KXYxV5hfH1NRjSTQHXcGNygvoPUPhVsssfCJjGCb83vxXhkLm6M9GnBpJPArUPt6",
  "key24": "3LBzvS3iwGqfbhnJ36Fxhk4LqswMtUBw8HzPDuetn3pmvFrN382GomYhXL8NhYNnoPpaX65BiDAcuSQEBxnzUyWq",
  "key25": "3AsWtPnTEz4ujzEiSJJv7knrsDn3eEjBJVVtxbLN9GXJD4qqg9sCFLdWXHu53UXsZYVN7AFHk5jomwPEnpFsuSo2",
  "key26": "HQyDuTTrBGNWLUdetFnUBnHsgZ5tsmzkdH8aPjN9nNM3ZTzsLa21Q5Ft1s8uqLSSMwsv1ZAfnMZEAW2ALnffif3",
  "key27": "5t2sRvcxbM5k8RawVfw5MZYwFTNAA8PFKv6ooEVXwMHQ8GadjgXXHxwWye41SGAk8p9zrzRKMG6ewZUbv7q8Vrwv",
  "key28": "2nLRLFUWYkq6mKGvzRr4GNNV4GsVbMkS3oZh3ypw2SxY9KsbYcxzk2KbocAhD5cM6zMGDNiET9Lb2AN3oeFVPM4j",
  "key29": "1bsBoyRYND9RD96PKvCGDxUJQ8pAFjbxK8U3tZBdKNZiVvxTtF8RLBUNNRRfQePh2m2zasBKdmpFyNrZ3pJSmim",
  "key30": "dTCDCUCxT9Vt7hyB5WZAi3myrR7kQwB81QqJpkuGTrWz9KLUFow1JubCKsboEvpekyjWQcA28vUV1TznQ67rPUT",
  "key31": "2mhX9vHhSw3dbmEXZUbs2LSeYtVugFP6MTQVpcjN8htrNi9iwdQLcdcYxAWLcHQu4FS8FMDN34U6odMXggVmeek5",
  "key32": "369Www1xUFUoNX3gxLJwQWM9cmGA9Rp2Yie6BMtnKgPaJvx7sH7yh4yR83eLGQ8KqmvByE9PktFEtKJNbcGqTGEt",
  "key33": "2nU9v4Fr8NvJAgH8UTqZiFVvKX6TxNFmZYm2zh5g8YrrdYZ5Jm8wuS73yKpU2kZGxM7LbyQNE1hHpjkU3YDEbERa",
  "key34": "4RMT8uoXgBjwbqjyxGAs91UWEeXWPYfzmzg772r2cURMjgRvTLFWDBN2aWcaZaQ7J9RyfR7DGwvF99WiSJ49UgRp",
  "key35": "4t9CaGHVGoKf1fDbAx4wQhJhWM7u4uTUjtswQVL8kiyNEmnPPAiqvZ7v2CFUJctPC4Rw4z1NtfczRYXcNwDXofXf",
  "key36": "2q3idB5ZkXfzwERF9LYfotfFLY3fBuxSHAQVUjYuogEQPVdtsLmDGbwhDhUXnxnoBi2g3w2iz9JwdunaVN3neHxb",
  "key37": "5nmXUtNXyzjt9KwhcbVAjTTCeWKxwFHQusKyGtF28ksvLiV87XMsB7gtUB57DL6QDAzLiUY2FFREocB9tD6E2AwA",
  "key38": "3tdSVEdEVKjJAWX26FAqyitVfdnWA9yyEGnkYgHoPABzE4Q6WdbGhAQM2M7e5rShYYHCy4yFA7YDASaquDna4WNt",
  "key39": "5txXjrL2LnXf3PUAu6Hz4ygRAQknmSxWUyDoXxfzk86kEd4HgfX1SAsWirg46BVaXC7tr7NJux7sykcQXu15k8Lp",
  "key40": "4z4oSBLxgTBMF5HmhPvzxQabai6EBxzqdM5XvpbGw9nQK1BYckocafAd4t83PEopsRSELdYo6ap4syj6TuRdrSXi",
  "key41": "5N9ntGiF7p9u8qLssGCvax1PNoZV5eT6ZtMGJrYSyZCVfBjGEardev4hE99QYeGDfDC1HbWNWpbHR5fNvbqcmYcW",
  "key42": "4t28figke5m5R7e7k6WKuxWxxCwGyChjxLivBXey83od3TCgQVdUdqnWWoqrxuueq14p2sd8QG4CGchJYnX8V7eX",
  "key43": "4wNjwTP4haauyrpETe9Xe9DJ7sDmUDPwGS6ckZgKicsrpVJaGT9deha2SGivXhDQpVWmC6DsaTuEXk2xdWk7W9Ys",
  "key44": "67qrPnQTjzJUpWK7T8MkBpybdqmTXAT5hCwMZ4TgknpmuHt99iCrj1hvJd1N6bdkbSGmAusSZUKYczWz9bHEbTwe",
  "key45": "31XtzruyieyHSWSyYbxHVUEXi7kSdopYKeyeLq9HL9ApUc7ZSDyu8vEyu4uwxCu1BxfvNexjtdHbzgucoHyz83iB",
  "key46": "2DLihCGEogFjQf5k2gwJSTbDcWVagjcp16RXZxhdG38j6jCitYo8PmgNSfVLkFjhThKFu3djQzGaiALmj1Uie66w",
  "key47": "2k91e3NRjqp11MPYZSEL8XdgDPjGCwC3WuR3DkpXdq1YTeV1f6hMr9FGwsFc98m3G4UMVk5S3Euf62rjTqf5W5fB"
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
