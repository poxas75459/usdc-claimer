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
    "2SG6i7D6XGxh7g8wZo4YoAD1eyohgHjkGAq9Rnnq2QdVn4vNaCEz2zphYBDxCgXDwLRjuFsK7anqEgeaRqc185tT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tiriiwj9q9566QAfAZkFctpPHYNecCKFJ3zjjBW7Tz2DBGsVRj3Fc28UJFfcBGjYPHAFfQehn5N4amrV5BMT4m6",
  "key1": "bPHNjHQ4zDCEPRaWMJjR21soNgtPWwXuM4dS2ES46pd7cYFyYWuTxe9eb7WpdA4TCRwaTxr4DH3unkGAnyVTvPf",
  "key2": "hprR3KXSb3kdEBCGpgsVLewyqgX56Yj4Do8S2Sitx6NAiV93gMbLPRtzCUQK1fnBrt7EgBY8Y3YhPf3tbfRY56G",
  "key3": "oSXKRsbpCbboWwoBtPwEQB5YRHexpoGPR7du9C3i67fbWU8sbXBTgXGM7hdMYLuHBXueMwpkf1F4MJE5Rzy2nN1",
  "key4": "21BGCmnmUJRjmAo75joGtEqEDhBmREkf3gZu7JM5fZzDAJMvbeuQT8giiZmTEVCV2ai5rcDy1MzeU89U5R6n46bT",
  "key5": "tt5qddL6BHuqNZRp8PCb5dqYcx6tuZz2MxRQs4rjar41nA6arDdHrt2GmcnW1KJa6cZZcDGYEist1DLLSUDPkp9",
  "key6": "5MeKqrNPLhtFmPwucMQrAB4fMtLQiq9xifUkN29tTaDkuMbrQfn2eYvyhsCSKCecnzttg9n66yRLtWuRk3eJQfDh",
  "key7": "2f4qE5BhWjsppnUJPaCVYuXc1KE9f6GxhfmxrWHDdLPn5UckxmM5MRBmNFJha8TtKrgWdHDU93k4UftpjHD7LgYX",
  "key8": "aghd8S6Nx9B6xtme1Sa7TrkeiPLHG5h9nPb2u9KcAEdpPhKuk6RZC77f5Vk6BYdaCG7VN8RBmph4GB9H3dTT4qx",
  "key9": "5aYBAtZ9Q9y9LFCh12Af4vje8qWFz8bZ4S3HjewrPQGgDUj8K2LwFvV2LtMouNiJ9pp8B9xEJwg2QBKFBn9BxsJF",
  "key10": "CrpSKxhrhb6cqac9aNEHSSdWNVzy423jLcXmZGVq7mRqJ9DonmU4WNj7ArhwNY8oomjyVcHEVR3CgaSPxy94Lp5",
  "key11": "4bVpoxwshAzFsSuHAAwAUAxf74mEMKUfwoWxUQ7JxsPJ21u4oD7vCrYHGbM5wpszZSsGp74KyFNNvMFxYUBY31q3",
  "key12": "4cUun6Av7VZPkV7JHoK4yaUCtPn2tLg2TXXQQo6yh6Q7wBWKq3UJvkZ3pYvgxPeLDArFVirPw78ZvdLVVcffCqQg",
  "key13": "uDr3VkPSr4c8X25Qxi9EFAhK5sBdchUQvT7BFeWdPquiMEgzEGoiZ2pxJoAXjx3X2PSAwSnAbhqdoGAqtHUrzQC",
  "key14": "4p6jrobizj22tsH2uqNZ5iZiMB6swh864xkNwNVek4Qu4Y9rxBPeM6UK4jgURU3SuN66juU6yd9L7oGU83GyeCq2",
  "key15": "5YPykx4RV7umrZYqtJAC3Ki7E2cdWQcxMkTAGx1YKP1RMiVyH21rqnV9M43qChbiRgZUn833J2yKtsnfowzrnVN8",
  "key16": "66Qkoa5B7REmhztMvt6HVCBGwU28oKNiVJ8qrJYtv1coansWdjwnNBLhbtK44B83owDV8TKixdyLd1orUwmAWcza",
  "key17": "PDDbGCTQtFBKmYoTF31gBxMCRhjY5F11ewodw5eSrE1itymbf4xLAqKUxLojAg9E2Tz3hTS1or5ZUJ48JkGVfik",
  "key18": "36HFF296s6xVwGd5bLGbpLuiG2xv5txhWwn6w8iq5ymr7tYXnZFkBCmwwq38RaYnyyPPjoVbuf1thrCuUdWgWHNn",
  "key19": "dhz922UvTqR8n1K45RLLMYMF712gPFGnPNcox7qFdjXPrWoVAWTyqFPCBY882ack993AcAaEPH2nBRUiKivgVPT",
  "key20": "51XkDzKAnmPTWibsRaFKTEWWuYJjGfGnocM6THWsTsN8bhSZpBnBzXdjNAq13YzAveFvTEy76hyLTHZYjegj59o3",
  "key21": "op7PHCQzgsXHpYz3X9MHBPFgGfMGjoKYi4jMVUmwtVY5Kbgt6KHttQbKFLkTaE3is3BDWo4BB3DxKLTFd5DX6en",
  "key22": "5pR4KdxeTU4qW4wGiQgMdmzb89xTQDf5oBCtWHitYmw7DvqVdjbaW4gXsDFZHN1UMimyqCxAb8kQy9QXcyQhVTV8",
  "key23": "43zxbG6Sb8Nf7kzuQ8vigSU5hTE1MjkzitBJ9EkJ2zdJPGSzh5gkHgtTzWwW4qHtDrR6SyYYHPFPDgatkHsSHUQV",
  "key24": "oTTYg28u31riP8goSEXmW8CRT7K7GtZsAtrn9S9EXEZiYDgubjxZgUcgzznzbRfAgm76uTL3TRthuYxNAxK8mzb",
  "key25": "5iiRdZ4fiGz3qFrqnJbW5oZp7Na4NjAvruWS4aKcjCny9AZnPcUnhSQkCs9CcBsuiVJx5W7eY6kkuiT4tJuCb8tX",
  "key26": "sKLwtvYsfyEB7xQW2CRM8SctTnfH3g49BnYqYhzHtHcGnkyWSXCqVzYNfSvXJZR4huuNYNZDBbaLcwShEnw5mWL",
  "key27": "5Af2EzTuzjhYT4U4xSg1iyMWdmMk4zUh3NkkKAuBRRRqBQeDx5J25RHu5zxieSavCp2WAmPtgz2yi6DhA9EGD4pY",
  "key28": "2vHvWoVcism5AFKq8YAuP3eSLwHaYcRfYbhVXabZDL6EvtZRcLA8u2HGZgFkcPxnoQiA41jyGysH7ETqhrn9jRhy",
  "key29": "4Bffa6uPyEjDrhy6kMZ37DmTLf6obWVaqgyM2Xm1jTucjZ2zGNkpB25TSfLaQYNXdRNmRuAh5eu2jeAWmt1SbYnG",
  "key30": "5dHKhNnGqsQyuxHW7qhEiCP6YwWetNRU2ytRD7NedNi92zhR19DXKEkb5JDmXLuhfZCmj1uek4ksYoz5U5b9T4io",
  "key31": "3WdbJdJ2kMy8w8LEYWevE53F6ZEP9VEWuMEUmoY4en8KEiFkDCa3DXEjCfVkawhL8c45rLGMrcApyrTLEWBK88YP",
  "key32": "JgdLvLeni1jaKE5zovcYupdAmDZ68QxaLje4S2QaYvRRYwnJwx97pUSra9bsrxNezf3cL8ZiymTL3fpPgFPzLtn",
  "key33": "4WbDMLLBXvL1rbsuTe8WCsuTCRptGTWMSzNRW6X7TMe8fE6SRPDkFrbXa879mZRwP4dwUmpxmqTdCkeupjPSwLvf",
  "key34": "24yAxZKhQbk8PsL4Rf77tvqiM8EUGEQ21Ex8xfTfjowRxwGMT1sbyroynqxJGuU1Mv5y46HrXzuq48EKmMwHyzz8",
  "key35": "4BUg3zqcnvhihTVS1iuy1wW29wjbyVZQHWVWihu9vVcfDGcvyecWdgLM77GQNWTY8adsD7HVUVaeAoFGMqZeXT1B",
  "key36": "457MSr1QqBb15FYYBVdaPqrTf1AbdJ11S4yEs6wVJByFYc2t6qi8yiN2M28d5bujXNR3B7xHZZqZFzEh7yJwbBYW",
  "key37": "39Eqckv4Q3j5Q2BiiZmmJ9RtZdAyV8q3MCRVV9VMD432jKjoDNo7t34bGxe8q5jdKnPEKWAjdEQKaHQTz3BvcgGu",
  "key38": "4DsrcoUECrRtygSsDbyYJdmMPePFqkDkzdFvUhyZ1cjDbbob6sRpLsCi5p1Cwtz1TQj4hy3NENbb2drnvCZvRJC9",
  "key39": "Bqyg7ZXBXFqd5kmP5ud9cdVnTZgde1YE1DWiuHBnVAAefrX1VEUbveC3wysLp1mCsmQTGBhP5cQ8XwuqqR46tqP",
  "key40": "5WCJzQUGginPdaoahcVttgmoWZWwepi1yPTKgvfDLzVBPKMsKjyjVxY6ifENFumyGkuH6xRtBTrAPDJVts8sHpxs",
  "key41": "2VUs6iHLUHQC8P1QzQ9k2jyVfgQq4yZAiMQj5sWCkKeNwLTu4Bd6jKK8zDpkLM68ec358JuPyr7RpuDAEskXAwfq"
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
