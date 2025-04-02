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
    "9dSA4wKpTFEBUkQutohuD73eiMdnNc2AxxXSeaydeV2Eh7HUa67sii21eZFBoVRH3S7cnGXYx3tyMRLb58R3BLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2rXdUn2MysUHheLWmyykQh6d4FgnFiN4RM22VW6cuc7aYB4Dts5zd3VQQE7uAC49LSAsHC7ksPs8wQywyU6awd",
  "key1": "mqnNyfQdzMi2M9WUohtyKsnEkzdhpk2yWhrrV6q8ZYoPSqBAeLSeLSGwHrXBc2FQCc4mNz4gJ54iZZGL233gvY4",
  "key2": "dTccEEiFzo7cYAXfH31wSajS7zgfR7CXGpDGDzj4xZTrR2WPhbRwknMcxq9J9Dro7EV7nZ2tmuF7Ec3oraW3dND",
  "key3": "5QZWLy3GYYANj1rEuzYqm5DCX3vpkF89MQrsuWffLLSPpy6goKg9quChR4p3jktodi4EF4k11QHgW4WU6kGJYMRo",
  "key4": "3QMM6Ra1gU8nowSnFsBEQJz2w2ApsxPazXFsUkUkaDX1YsEtrbcbBZiQM6mBGq5LuuTx8vd4YDjmoDNRpKwCXaEU",
  "key5": "2Lrw9m3MWMm959pJ8mbbg34Hk9jZk5Y77ofcTFLpbbtUaWMdJGFFT7evFKGXR5aDwxFSGukNgXA5SdftuDL8xY6G",
  "key6": "RfXC78knMX9ytnsJnDzF13TgbzmyPX3rugVbU97SAAAYwXFu5TygYF5fKrPRLsU15ZhtciUAL2ENxXWrdgujijq",
  "key7": "2kUppER19X3J6KNutgmjPRzSrMGAcvZvDEXdcVqaV1HjGee9A9B71tV6pZFmLrUggNZMcfD6XpUr86DAtRgzydDr",
  "key8": "tmNpkjovfURJrQzw21zAvjHiqf9TCjVF1MBaQPEP3dXVDBfHtS1oiwWEN5SGopaHXwCrN2ZJNWK77HMbD2KbEBX",
  "key9": "2gLHydo8NQNzSCtPiabK7P6ePFSXsqzjfJuss7gZeAst4agPwKbKroPk1iGUxX84mkBxgXMFSz4xPm6Rn2S8a9nB",
  "key10": "2GvR9i2m7PuiHLgnfsHMjrgdUXVwmuo45in4xEedoCUSgQbF83PJqshWKLMzXGsHDw19CzbHNeehu6PL3YKimbVm",
  "key11": "5EYfkVpDHwn26R5NpDRJ4TQYsBPeNi3qcsQSggPZ6RqneUKtkeq9VPwuLvanayVZNM5HGEnvGAyjYx5EeRKdCHmK",
  "key12": "4pBUK7uwi85U8tBWTPRczP9UhFRps7JpVZP3WiF84yCSSJUUPUUGYMFJ8Acpvovfk79jvUoRiEPEjAiKhFaVXeoK",
  "key13": "54HDGp51W3NDs9kcnMXVUR1P51frZuM8e63D68RaGvgg7uNzfayhrQMctVg6sDB6MRiLFdPUQVCgDyZwckLRcfZY",
  "key14": "4EethiMGnV5MboBFiFakMadNNp1Ph4xx8KeDoLPXA2RG1nd7HHrFKAAykQCCCqQYoLg2bbNxuxP7oKcj5Gmd2MCb",
  "key15": "27XFGXYBEkkhNUGiexx4T2vEX11PxQ8575bMtaqbaeYkzShjkrkceFPEG79Kq58ZtzFS6wdyShHoPSaQZkzKkPeZ",
  "key16": "42nsosy5KN8JoXmvyfzGR6whZnigSXyM3tQAWLijSmNNNBbK1et9eoxWgtw5A6v2d4Jn4njdJyLHCw8P8LpHg2nV",
  "key17": "43xwzDb8RUbjpgiDbw9pBD9VG3Z5zXFAFFvn6QzDt4AzgXPcDnPZzXPoUcBbDsRPrYPQHHmsKhfoCWYv1nbc69NE",
  "key18": "3n7CpMMj7qQEEo2jTjRycnZ2TZnGuXNh8vWt5rfkCczDbwxWTw2vJHei5ycPh9T2VdgMHkTYjwvtJdk5ZTozVhGy",
  "key19": "3TLe86rP1xucwSBgHixvrbHqWVvEyLFWdJsVecFESxvBnzpfm1JPavA5SNhCzhnYyamXfiZHDoA8cxXLFN9sVkAU",
  "key20": "4dFTB618K2RaAoAG1dKr9sKo8VABway6gpon3mbAMmQxe8tVCMW4tY96LdDEQmArV14qJoQyZfevmL25s5spCh5v",
  "key21": "22K7ezxHarnM5CKe4mPrBVYbp5NZgHgk1mcc5tsr8GciiKsiPSPUU1Jd5u6dApN6JNkTcoymtWudWvpcLXgvDx84",
  "key22": "5jPgGr2LTgE6yb8Ck1ojFxJwLaJPNHtgen53aw7qyASzQwSe1auRCvhJmeL8mpZKjH23H8SQ5FU87Q3GhhAjM4PX",
  "key23": "WT9Ebs7YfS8JnNgrAoMMKv3gpYdmnSPqSpjWdfhBFC3MeZfLVbSQP9gS77TW14rqNz9trQsQGauUhbWhQ9o5o18",
  "key24": "5Qp5SFPzqsQy4mGasDsmak43WxcBz4u4TmsYzciYAd6zv5Tt3SrMiybo1XD5Mrow86EGBW4UN1hDtCqDaVVaYqvJ",
  "key25": "bKG71v4fgWF34DgWUMjipu6GndGxvtUVj6FTW7v1x4NpmPz3Xc6xPVkaeKWHjLc76iVigULZzuowygmtfVFLWvf",
  "key26": "qWdxqphUaRbRk2b6U4nMgq37Q1BfbgKYXDfdJ4cywcVViLRupx2L3XgvFSAojwbZXSintN8DaJs3aUnn4L3wkhq",
  "key27": "3zNWP64BqEwreKBrSkfGbo2zHrRtQHGExbhn5jAr4jKZBW7qRbPDLx2eBj5jEZL2gYfNmhkUf6LUaQDNmduGvf4D",
  "key28": "5dgjdpaz3F8zXqoFKGrSPF6N6BLqzwWJwoR8KdTprc2Mym5jh4cGWtsGXyQeWwiQdxRZ7GxDBmSPJcsTCcmnNVGz",
  "key29": "3HHjCzgavtJbu3w2fVggUejLuerC5ZeAimoG8BYwXT4CsEWjphZu9PKGCv5PySgPuGqQVUaX6T9jWTYKAbhmQJMn",
  "key30": "2vmFteQeZFNoajEG7tuPofiraPiA7QhHx2K3mPLwESyRC1Mn9aLGfQxJTjrb9nh2o5JQyrqZbxyjgNZFkT1B7sEo",
  "key31": "5QawmxQYnAMSNrndG5awXzybjjLchgtziKCKnUVAfdwQEgXroy6saSH9bcw3RgfQVUnEE5maoWZbrCau1zWLzn7D",
  "key32": "2i1Y18zwqWTp1wAoKC7TN9DTo2hc9RFWALzmg3Nrh1RnhgcsEridMBh5DwpZwQXsMuhF93XEEJaeUTtbFmzvoLJ1",
  "key33": "3EMtdtsf4Wfmz4E8YUtxfTb73FUNDp3BLyqv2aLZfYkd4hK4PzMPzF6EEvXsMZzHAx8kTsA7SSjQaD3DfmRPrDk7",
  "key34": "8kMZVd3LbZyEHB14LYPYZwZeY5qnTJ5d3mxuDe54frWzXdJMbFsFWJSRs6HEUzG8SDHSTUPHVHn4MA7PVHng6tS",
  "key35": "21d1Q5b3sog3hcUY9jqDtEqpoLp736bwGKMXV9re7tcpeyeZDDDD3q65UNs4xrNkrZQKSWw4EkXt3tzv6ST7kTQ7",
  "key36": "43dAxD9XSJCBAUET5scX997fUeM7h6pgM5bNypFaLrDeWoygUgifjdsA5qXm3K1GXG6MdQ9odKGiojb5zbG9yuHM"
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
