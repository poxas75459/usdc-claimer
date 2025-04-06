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
    "4AEUEegLCR49Ct2Ki1BvMPUzV7NX9hpGKvqbCGBWAHSw1Kez7uQJ3MmWKjgeZs4Km8ARu1Eaeb852hVvZi9iAPGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtxhS2gNiQ2yRDNQNgY5dDvPZS8nAcJJEEpRRCC62KQeXeRkefcQeSkCmDdyVPymzYhxSK7Q8WCDmnAH3BEXYZs",
  "key1": "3F4nJ6pZL9FFwaeNhaMSiB9isoY6KA5GFfbeZebjbhWjTkJZMpssUpYyf4X5sTjLH4nKe7f3CQJFFtCVYeWXd8j6",
  "key2": "2kK12maZH4s7BZ3BBcJVWx6Xw9tuQymezHyi6m4e2nAx1tqvar7PrcfW2vsW5kvdj5VcYaskAKQp53gzs9y2f9mq",
  "key3": "3o1HDPAdipbcnkELwbzURQQzForCCwYcHCgY5HciYynek9VbnUj2aNHsZQwvajR8TFCvN7A1G7SaWU8aQgXCEV1u",
  "key4": "4EzrCSGhcwCsy59p8wPtDkWSL1RWo2DGpUKxCwpr5SUrsnx5k7qdDZzkWzYN2cNtoESNU9YD6A52VaLFtqDGLtZN",
  "key5": "5dJK6yqUhqJC39kPnqDtjyvDbNoxofJwE7cjPnNtkpQ5XoV4r9nTTgYtor2L8aJANfCSofTkL7wGEd812zQJ2398",
  "key6": "3zciyF1DyaQy2aa1jYmMk4nBPSTSnVHMwqigBmrjragq3SyMxE5T1yUC27v1bUw8XAqjJbr9R4RnsQeTCN2JJzzc",
  "key7": "3ZmkFvmeSc8Jf9woqGPXDxckr9mvJRGRDkcbLs1QLHPJCZHgqe5XSToL9CeLTT2zyuH4H3NnwJ4H6VeN1o2GfzXA",
  "key8": "3WsHPbw2dqH1f98FeErAijSN6yKA6c54mzrrYFrhaTQBVScGamZZMng3kEwLGYc4YCBkMWGUe6Yxb9f1N8dQqLtB",
  "key9": "2v86Dd3NA2ScwoWwftW9m8d65gx3opbfBb1mCJHuzeZzFQBYmLy1cLmmh7Pog7Gu3Y1tEs9SeDAo7tGstBi3CGpE",
  "key10": "3oxpciecfRBYWA8Uufk3Up62uVh9BzyNCU2BfYvkmoLMq5oDBCaqM1jjPkoaer64VB9GsEpMrBffoDWYxmjBCFpN",
  "key11": "WRzHHm8zvVR8PWfyFmGr8Q4RUu8Ag79jpHa4CwqEga6jZkmesdK3f6tViUTjNz34sudHpRdfUSsPQTNQ3U9t1p7",
  "key12": "257wSJEP4DB2LUEWV6EL3mC3J3wFcJkfFyBDakc8JXTadaxgFdJfKyNqyL191YzWu9qQWEb8S4PDS9GSeiMZSEBi",
  "key13": "42DeW5Up9dnRq3uARaQvskvvh9CMP8dFcU3sKa1TvsyyzkWkvj1N1LVJ87yM9WyFFQ2pDNMjgjpidYqgAWSZYYVF",
  "key14": "2reDtELayFUzpg6DtNwCLTnkWBnxc2K7MjcnaKbb6D1M3pz6JxgAD6GpU1WjvJuJzBPcfsEYYfhQdEEdK6TLXME8",
  "key15": "EEJzN2qBJJWdKpVKd2sHiCWidM6yqDpue2jTaeJsSCHZtfd4V3XgTQiC6RY3Cxz3aSJumm5ecVaoZEqATyxYyX1",
  "key16": "4mSbTVzSf1DtGAwSgMuPgU1fraHwNz1uszCUrsKNAXgSSGirLSvsggwc1Gy7pc1uDjFZdqPrGwv8gNWVYWH1QCFd",
  "key17": "qyyQVXxexzkpv5cdtpdzCfknWoXaYDQggfZZWaH68DV9VhQ9QNyW3uhhQW9TdZjQkJ5wtiEUD1kWi26EYYAtLJh",
  "key18": "3Rgr4Rke1wnkjJym2v5gtxMdrH9rHFsRY6BCFPp7ZXrnhuZZduCBep585fnHdW1UeEvjdoDf81FLm7YZTtkfBbJp",
  "key19": "4g3UxQC3oDsPErzCV2ejwKGrAaib4BF2SqDSVaX68dau62D57u7FUzPscAsYHqBwDf1yLNFUV1uatis7DXcmhB3G",
  "key20": "5hfnKASB3axw4ZA1jU73eJcXyLijRjM9if1V2wrvwvviVGmTJwtSn6kpBTQ8gE5MMzDfc7aApQaVdHNd4vN7bycN",
  "key21": "3cpkAM5gMSvnBQe7WyLoBmUZvpjU1Ka3swFos2puVv5WTdVrStedbyL2rW3oQDyLPKpy273Vof6cXKSpxnGgrfXa",
  "key22": "53qWRKq3vetphLc91pGPTGzXPtFpF8H3neHnyJGqL7pPJzrgdWPieZQqqcwtUNYNkXTSrZv17Mej4Jbrwey34QsM",
  "key23": "fJxXFTzaft5iRALhxPYDq97pMCcXJX8Cm1Nq1JRGKNnNHLtrUEFFbarhr4uziuDRCa6zaCcLatLz6PhJtJi1fEP",
  "key24": "4Yb2kvufVpUjCCkSeLMhgcWWKFAKFGuwVfRiGvpqaWRAbJhsGa3rNT9QdWJiPGibwtouWHJDA5t6kFTC3gxcxZA4",
  "key25": "uDAVD3Sy4ZfnYmH2zJ5TzVgPXWi9UMvmQyZfBxgpoRLKmKMM9fmipyyTxHE2hNTntEQdYyD7FyAVbMBvc6s7xDg",
  "key26": "YWyQRqj7HCwXsJgxes6p4Z3HvVCiqFiJV2AajFt4gjfNe7UzXNg7Gse5QziSYPAHxicWaBLdVGTgzmYUj9tjCoC",
  "key27": "iLsVpJcpK2yYbQd2GxYnHbAM6Uu3r6L7rDENBzDBRQjCP2EkcYFKCqYFWhWoQLxSHHdG67wN69LiAnuwK7mDodf",
  "key28": "3LyWDFURJEC3uzxjoviSqcQpRbjmmDiyZRYgV4P91ztYXpzt2ZzAGRv1QGHFpF9EK1jAvrxhE1thjoP3hg5Arjrg"
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
