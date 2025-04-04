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
    "2buWds7DHiXMMxaZyKH5DL7rohkuto5cUgoTUrk7MW6fngPjo2KWhErdd1ZAQWgHSzvFoxebSayYjNzQi9FnHwjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3toBzJxufrv8oxouUkNx9xu3yoEz9in7btW4krGDseXxQckCoGqKCmB3NWAN4zsTehdv7fDYukYUjPp5LFVMPjnK",
  "key1": "5GRnFhTL2cDMr4ZbToAcWiGoYdNFzEkHvYu6TVBtve4sYqHVUchC8MzYZh2ZiDfwtMgZUroHUBBrcAGhWitso1FE",
  "key2": "4nVSDz9CCMevfRWe2vTJMPJyfUn9HqaP59mtXETfvzmxeT3EHxp99wxXyDGC32JZS8jQkEMmL9gqbayfXvoqfQ8b",
  "key3": "25hNavVbJFhhSego93sPgJbMgvkpbMYZs6CZY4zUxweUNmUJVyfdTMn4LoqNJKjRpKoqGcEE9atwLWMqQBg378Un",
  "key4": "4qp1ZPz8ap9nmvuQGH6oMjvUtYb3xS1fm1jgy8xVYfEfXbyn5aH2cnGsNENjbrNvy4viwXL3MV75BPFPy2CDFuzs",
  "key5": "4DZjoAogus7BHHzebu2YYt8m6FaR6ULaVa9it9J51G7EcBBtQ1Z9mkiNNC41nBnGAjT49L4xWDYdhxaBTD83R4Vx",
  "key6": "wva2ujGyoptHyvDDgCXmVGh1KfQZUwo9jG6qFJjgMb33G3xSMQ671TZPMU4JPCNJB8rRyQw6sZriChcKCdQn724",
  "key7": "2R3p3ksuA3eovB5uzo6dhC18wtPCLKGt3eUbRX83kCbm8H4RfeDGaZrA5DVSz636fma9g2H42eVao7koyDkQRPYh",
  "key8": "5w82Kds4mqQf6pKETWMdJ7pr9ZjAsyx3RFzUqiT6yAqyUCgwT4p7xrGmt33eVojNY41bUZRhqTBPqwJenWa5HrSU",
  "key9": "3uQAr4dFehp2G2FyVtFhnUSo6KSFgiVTp9zst3Xc53SLRGTP2PtCLJzz8ocr8Ao2JhANfVPekEm4h7wcG4zQsskD",
  "key10": "3B19LAtGUhmWvvL4HZg2swAXSzvLZ5c7oVTY2BoZ4Jq23MtR3GUAZemAYrNJPqrXAhnX4s6n3mzkGmotQv3QgZ6q",
  "key11": "58XGUuNg3SBSFUVCCgDfynxvPRo3GwoBYwiNMwJJE6YsaEHAmcCyFsjP5p2hVshMdj3RvR26VWEywsQNARzWkQij",
  "key12": "46QE32kBPFhEg62h4vMm1XG3FA84HfQ9TpodTkCgySrNmzQ93gTMQEm84T6wnBctzSxP48kWNKrnXqh3pBm3Ri7b",
  "key13": "4KmYF34x41JTvbpQkQyuVRJ3uRGLnnbd1dzcBnjvKudBCYdqsFqbwUNmKQKeHEpqnemorAeuMLpyq95XohLsvEkY",
  "key14": "3mwmVP1X3tSVps3msesmKKCa6WNCWuYcohKK8qnSM9HDqh6b1L6BHfNoPf21zJHqX79hX583SymEoBGfWJ43rZfe",
  "key15": "hvSbrfHvxU696GDi9pfad6TvVG3RrU1U6A1dRM4QdPH9ckaEvAifQR5dUQ2x5eiYNRGoya3yi8spX2PHukjaunY",
  "key16": "M349c4gNt5UoQaJctMv9qCHmbXaU5aoxM9F4G5Bv3LyCovnpG8URAmw3G7XiVXhZ2bTHUcaEEkTapU8GJuNG2xw",
  "key17": "3rxenJk7WGFa2Hf45YCSnmnk8syJ5tRECi72vV8vPyz8cY76zZxydGQoMg3mu5oDrp5FPK4WGyTGeMMfDQRJ5qDi",
  "key18": "5MD9qJCo3AhMDSboTGzMLV5jGH1CvLNpeiUVqKFav84pdTp9SKNpn5jcoD7fwMVHYwoWrG7RkomgyfMDEQWcK319",
  "key19": "diFmEPNZCq7EpXdjNo5U5FFo5NsVeBfxsZFSv46PxqZvMbrg61fim4k9EBTBtpZvJChHt6VJGoQPE9BrqV6q2ZA",
  "key20": "42Ms4QRA3HRDsTurmmzdsmjTQUhvesmgWnBqe662aw5Pa4R3M8V4wznDvZhU9NKRGkWaDw36BAM1GXeo1ArffyV1",
  "key21": "3aaYpmXx47udNkskFXUbin22TuwJrJUqS6XgNMhLMtRKvrGrcu4DNSvBBVUwbfdJEuaa2LcEJSBbKs583PWykGQs",
  "key22": "FVtpZy4ATXjVmUDDapTSVH5DyZkVwXR1QgzRmg5MnaWGzMMBHnwSRYyVnds9iAsy9zWhMwuhmCye3vHJj784yTA",
  "key23": "3kpnM8dBgT16MaeSnh6juPPc6W9wJVAqZyeMjVVvcbND1cJhAZxKErAqiQBL1GLCaqD8LU7PBBfpR12Am3nW5gyp",
  "key24": "2iheRwhQRNKzTVo5PjjQvgtTdbj2NkCry4chQD1RKZ3zNrnetwrXWxTUnWScrqSFajNqzss9YP5h5rJxkM9TUrx7",
  "key25": "4S34oBZFCyF1LjPEvGbYdh8PSEiy3CmGMUoGafUStGUfcPmBSP9RCyx3Hn6dhBmqgZxiG6z4PY8EmNYdVhF9G4eA",
  "key26": "2j8jXjUAQg1PR8ewAxrEPwEx2DB9pZvSwRv62g4RsWVQaMbsxzWvi3QCBStDeD72Fvi8pSV9tAcSuCW52FXCfM6m",
  "key27": "M3XvB9DTMT432oWuJNvUseFsButeZK7S6565RpSQQtaD8czHKvAET8eVr6rFD36MXNPuZXGjsfWcoYGj91s15t3",
  "key28": "38sWsBx778VCvj1Qy5bKJPtPo7uTov4RfqDRNAnCExKcGLWfvu1NEUQfSTdgGjbBttVbL3fUhgdHQ3AZgxxnq7dG",
  "key29": "4zWkDCc3ELVzWt7bNvcuJtuH9b5THPxRbyNLZ23NTXatyDLDojaGAXWv33yYvmmzueyjc2fHWm56PA2YRFVabHpT",
  "key30": "3XYrArXxyGJdqSjb5pxTBrLZsUYAgBrDDaTGsHaoQeLH3cShMBhAcMTepwyR4NxXQQJgwCUxTAEEaYSD1UuBFrWc",
  "key31": "2pqnfQMZFdsVZP4G8MxdZkzMKzuJMMxdhXQ2J6QJFQL2pBh5sfNuh7CuL1DXAPeTrqXj18cfHwp4oa7Q7MyJvLV7",
  "key32": "3xCpcaRVBApJFnvJa6XjrcAMt7eNgL6xh1JYSrssuduGHWuwGY5DgnPs9XvA8wukGuAGxDzH2A8DxTsZJ6JQ82iT",
  "key33": "63w36SPHEtY2QNZ8WU8qFgS2kDDmzrW8FdjuxTjvneMDxVH6nLNS2Ec5oRGQUiojVchGzjo5s77UCXdHryS8xjin"
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
