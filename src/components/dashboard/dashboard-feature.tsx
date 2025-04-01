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
    "4P9Q3cVatDXadBFyKz7e6hsoiMTBSswyyx5HdyUig6AAjbvhHzeee5oTpUEJB56uZjtAo6dY15SMkakcei7chSzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRKJFp3oX3r9BHK1WVEJkYP4dudTMG5e3obCRkDV4qYEvzthVNnwk8jJ2RTWUkFwTraQf9mBkjXrNJTTU78bAWe",
  "key1": "2XNXmoUW5NqnfbqSqfTa5kckBECUzBNVYzSaX4gkQFhz5ZjKiwL1YGZ3qZKLR72wiySU69AWusTbPZyu1jn3Xd1U",
  "key2": "33REx86DLkTac6qp5bBcSpmKeRKf6CxqHVJWFGnmCkcVhwPtPYeRpmeQw5kJpvmce3jgJBqJuNPrpF2ogPobeMfk",
  "key3": "4wRjmU3DKxtYHVwhkCQHvjS5stqu7y8HHSiodB7mTXGBmBMXqL7Ct5rbkHowzsNmt6gcfGRZG3VvbJBwN9HBMuts",
  "key4": "5Ca69rDM4bivo8gRHy1HQ5uA3sFV7k1grZokZL26jCeSgdMdGW2DHGycSj4pgBSiTtsWDZiWhsQsTECS2KWy1xXs",
  "key5": "2LLbSyoqAi6ThePdhmLmFU6EjGzAzPPRQj4APxyPoZphxEmmJ3kGQUHHdsLg2qEo8Ri2oZaWXBPGhYRgTdUgM9t",
  "key6": "5p5Q5WaHHcL1fM5LFb8fXDFotfPn5mEYhdAFJa7PJa8AQBpuAYprYi8fnYJAHQDCzJfZnLWzPsYYwMg2MpyPbPbt",
  "key7": "5LP4mJUL1MvewtGU53tdZtMG6vN2vjc4VPU4z942pix36QcfLwLzs1GYQf6JCf3W7V9X7FJcxmRBRhk9D2jCbifj",
  "key8": "G4KE7rqG2V9LAkoHfatykgsbpScV2L3x697v9QAxJMFF2M667sgnD41G9oqPcooek1dJh9pg4VAfmhYmghFC97L",
  "key9": "3VXDu5LXL4FfYiZECPfqA8Quviq7SNTcLhCK1biNWhheUQWTFmRjRMjdihgvpP37Lu11f5KR2P9QqMDUg5tNZ4A3",
  "key10": "4WgtvZ8LKCjyynDwWfpmdZmEF5dHrykL2KgvQMSvZNeKvRUQY6aU2YAXSS31BXydv69Zr8v3td1w2Mq3bZS7KoCf",
  "key11": "659cY9vX1GtqSMDfjknTsQtvaZ3BpwWCn9cTyo19wHJPC2Lnh4vt8V2Mu8SxpyhyHDw7gdqnkagvUQtEB9Y21KtT",
  "key12": "5fYvkyFoK4UV71FoHSoXDLAutEVVGFwAhyBJWKEYznVURpDF8enEpvFcdPH7KtKXtvNjorXTE4f2JidL4uq78QeW",
  "key13": "3euiM2CvK2EH8c4FoZ1rkwYm5MX6PpQLBtiV5bXkaZ5fD9yz9PbgvUJhAirQ4dDDoBJxjJPdmj7sUbJ4TJUqemyk",
  "key14": "2KFtsQFZ2HnLJ4LQVBCj5mHkX5PCWvStFmkdUycKsqVj7PSCLQrp2iC2VBXwTrZbU7xkZo5wHSoXSmFWSkQ3r4oo",
  "key15": "38b6fiFm6VFRxUwY61x1fLz5k7RTbALULJpQpuqDBJTSH2pDdimzGrFcfdon5MycXjUmJzAnhzPfAxUjwWtq5Jww",
  "key16": "29TSynA8NE6S1aKxw29o2BVy3ziy7Z8mWcktftgURDz7eweaQqjwaSNRz8EcSAgnfe6WbyKnpSCW1hZHHXTrWGJY",
  "key17": "WN6AmgMAUuigtDfk2xUdvEu6ieQfZB7pQCG9X8Xd7mPSvnCRrqfzwt24tRF7xXVrA7vwimz3DbWFmBeAc7Q72m6",
  "key18": "jAtDwpgvJwe9VtQd8HWLxmPyHV9BLrz95qAEzYBpbss7W6TAD67AfpjFoxj1iufULMoFdozKt8RYUoLCQmNMZUi",
  "key19": "zbERMRLGWFDuLxPiEeRDGYfycFcaQv8steDB7ZVyJuZg6fdxbwvrRHsSr5SovGJW7nJWyoe5j3PLL8gBix5hX8C",
  "key20": "2N2GyQqSReoLJVfovarEB8N4i2Ac8miRiTATGq2xoQJhXY4nWPQTFrxGvGdQgFPPsjVSghx9axzpChWyu7sftJpp",
  "key21": "5Dd2xEUrj1pKLoQ9Q3hQuB2oChyyUBkY7vfeCh1y5xpRNvPAh6KqXDKPyspyfUv2ZJSrCftBi7nVUADMBxHZansJ",
  "key22": "5mc5VDnf5ecqarXJax3Phyrs44hj6sRiSpSxr9bEVaham1cLzi9DisfzYbYAXmcmg32EWHw27iQEYhL2kHomyESt",
  "key23": "U78s2MU3tmmmo3R7FbQvfqvqQJke51vUjo78FC3aX9xNgRUazKfxzGRcyD2TbZ96hWJubaMjAkDy2u3dsHBkYRG",
  "key24": "4KsP2F1rHbubUXGusk63iLG6MdDXCEiPkKjgP879gLq2S8SQLsNKbzEiTyMTeipjk5N4ybiJu1ehbFfBWu6awNFx",
  "key25": "38xTa5CUybivN2y18ae8Fzyj6Ru4vUfTPAGpd2ZWFsgxWHCqvxBSGGSrYeEqtBmmTYcVJwgCqEsuoPXZgTPq54KY",
  "key26": "3tjreXfPVfDq2m9y8ZkmxrQmELTgEVvvL1UWopyBdp6J86BrpDkb7hK4rAtEjA6JvjgutqoY4rvkmbQq9hgUNv3u",
  "key27": "3doKhVYrgtdZUthnaLj2oEDBw9E7uKiXo6xsy9dSQhEshcy5L1FWHdcUnzeE1HESZxAFFT9fm6K42KQmQo3kWJfh",
  "key28": "2vFteeyR6myHtwjpztExWCK63HrUXBAM6MJJQa7PXmJj7LQMSAsHzPLA1PeKJ6vax6a8j1gLWEYYyV1uFRL1C1j6",
  "key29": "H6wtT3W2mUGF4RQ4WihYPB87QJBzD9BHrwGYtV7JRDdGXfJymD1yJh3xFSv9svdvpPxwU9cvRFY1nbuC1wq4Jrj",
  "key30": "4qWCb7nKbYePQYQB6xAmiHLMoP81d3yuSkEedMTnZoeWGob3X22xqT628BwmY9hmk4uxWfLUbdeSqsVMTUKFFeS9",
  "key31": "217D8xnyLSBFFG532P1bNGuFsg1ZMRC6MRvYHpoFrYJqLKs5hXfbPVC7m3QrtN29H92CSyzGw2cYzRq8B2CmZy6c",
  "key32": "3hsLQ5bVELjsvPNywbrthhPVPA6yCRwwRRGBfAhTx5eVfJNdMRthMMn9sc1xqZLoLBmjeUBYTrwJCAC1HjEq99GY"
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
