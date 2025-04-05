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
    "64g2dba1synLGSgQALzMLYNX6u6nYDhfrEYPmCV19susE9H5f75YVecM9hZuJEWPHs6S7FFNFBKQsAc8xY9gtBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BpQ875KRdLch6TJ1kGUzyLWWN5erkKLy8bC5p16aeS8SP4zpJLCqEvhyQ3mWUBvagdKJhHcEiQNHudcp2kEq1R",
  "key1": "5RrttYQSbe3tgj4CPAUSCWhUQGjvLU9GV2dShkGdfFPj4MWbdrC8YZ9i5g25RxCXUAdsvnUH3cdkzvBvW7i6d3pd",
  "key2": "4K1pBctVWU4PtJNa5bDkbrNFhH4Lz6j4oUaeHvPyxfE9uyd4WT4fado8zSgZ7pxKE7pm9mp27HzCukXhkBz9AaPe",
  "key3": "2TuauS9EGLkzxQocZc3wEsHA1tejRVXkpgLrKWBK2rbt7nP3zxMuvaVb5sEDxzfLjEMk2pe7pYiaFm2dmKcmkDa1",
  "key4": "4ZiwG1FJ6eobxdTjDxCWmvQmABLbLyGAC4GpxR1tyDKvAfpuvpcaS3wfqVmbdA7VeAKv615tuZrAXb1SdkyWmDSC",
  "key5": "5hvSyJczm5CnjnuRNbgm5uaF65sHwiuVqJB7nZY2yb5Jpnj36df7ibBurpdpxXBq5t7whcW4FGN1YPu1JfD29hUK",
  "key6": "3JTsWDjS8nif3DEaptBMLfsjkMsEVuH1SrURRYEz1wiyaBs5fem6n81oMPU9tdvDuJ24Xesq9Gmsqi2HDwu67cXo",
  "key7": "4UkkBNrEyj4r1M7LCR1ehUcya1dvB1nCSA2bxu4734KUV1dJZpUsNwcdNCAQNMppsUwTvfbdL2Y58BVyYWvJaMj5",
  "key8": "3jwkuxR4tx19boRJPmSBEVNUJ6SpKoe1RfnsvcePbiaNoz5J8URQT4f9GRLct1hjLRcvcDMACcNt7fNQXx923AG6",
  "key9": "uVYu4p6Jushyqe5wRqSJxkzXsSiZaBfDtKGj47DVTpbEBRjsWL1JiSRtXfyC2oxoRQT4YGnDFMkz6y8Vt6qZyCx",
  "key10": "52R16RBjSVSLkroCz4gpYYXWVv3R9SFLmiciuqYbRyvhzGZUJQccc1WZQjR6rHqkf8Pq1GbKDfFAecQw7mGdBroL",
  "key11": "67Y1iuYv9aNrYPrWfdKNKQzBBKnzDac2zJcJ9Yzn4MzLcE5tB6SxLj7wVHkpH1ruybd1Lj6WJRhEy71i6pAqkjue",
  "key12": "3QQBuumWqTEtZDTx2eUt36CQQKrYyHnNSG8i6YDzqqeXuwpTi74ySsmvjBEKvbkPMMW3wS2Cye6vd1bFHEVdQ9Q3",
  "key13": "2qvhCDrqoa7BDn4T6gwVEoAeBmMxUc6v5gPCdxAjnHQ74vmNrzk2gbF24w5G8sw67VRewDhEvmWkgoWHW6tvPMBR",
  "key14": "51owG8WUiF3KjqymqW1QCwJbku9btsPWgpzpU7o1y3eiF4PuQZcCy157sFw8fWnkQEJrVQLKxEEHxbntVJQnRCxj",
  "key15": "5gy46PVLj14RNL98wjRJbvLWUnBihYJAaZQRbb2cMMV1iFdX2cUEoRGS5XQehcQUAEo5CJipsUCmdsKaVT6w1Giu",
  "key16": "3C5DPDaGTP7iiZFLaLtucRksHwN5hSGrnnMTJxR2HU2C1ppYCyGzGBJ7FBEy658SZ5enNWJfYWxDKyfA1FGxSjr2",
  "key17": "2xXNiXY1QkJS1Xk2HPH2w6hnZ4TTdhoS3f72B3WuFDkwFUGcZNwFJV9qAEJPfFpPUbvT87ymRYaFubdcphRTgn1w",
  "key18": "2ikXD5x6UaLtEHvoApnzEsgqH6r1L4TDy6etfqRp2vqDtuy2A4z6cSHibf7yqLvjhkwRZAjG15i7t2RMphvax5yq",
  "key19": "55nvEtqHYbruLXUC4UyBvQWDuHJLtNXKBcrkMCiDgMXMmTnxLhPxwTMbZp5C1AEg975x5qnFK5NevfsJXACTRhuz",
  "key20": "3Xqc6cjqj4TUuwSPvZLWfmyVx5fpqQ8SMJpM63pv11PTrgoQuA32673WTu3wmvdQNsmYMwo6hCvcD614thL5o921",
  "key21": "TasAYHYxuZwwwUdRQEihELNYHcFf3XvhhVtxAh5s64FezJy5VtKS57XbKThpiUsV3wCbdEi5ti2eFMx9AHRk2Yy",
  "key22": "LXhF2XGtxstXdTxdSbVsR5QNSeeYHm3juA8mKTFgA4ZFKgJxi23ty8K2Rok1nwSFH9ziKhPyTFfTnB87ych2CeW",
  "key23": "3KEuuF5f1x2BtSbA9jJm1DGiboYWTVV3u4wBpCTymHjGaxp91sYcVK86ajmufpDiH4wtDVvXojaiA9PLcp3FLQy7",
  "key24": "5TnssgNarbHP5BD1ZSCsXkuRkUVUip7qKG75Vc2CH3Uf5mtrmF4xY5Nv6AH9gdmtm8rhFAQyy83dfmzkg39xPEYc",
  "key25": "2T82BkPgShjuJ3SHeQL1jvb3G2GLt2f4hvvhDYTKstoVwvB3QfXuQwJgH3Jqezj2vdrvJA3PxHan6zx5UYj4qh5M",
  "key26": "28auqDDTwTHcAcvvC1FWT11bVgqRx5hkqzNNnFRkkEx4gHFF9eRNrrHqSgVqCLUniLsyEi9eatXUaR7oQVtAonRA",
  "key27": "5Lk8TNVWxxoA56cqFWvW9MM3ZeXH5XNcGLAMd4yPL9Xy6n53QHsEvdiYdWbjFVzoGup5CUi83apr5LjxKDUTpD1X",
  "key28": "3Wyoyo9hgFgrzJ16Q21UuR3vw9EgTB5uUXnqCk7667jyq2hLRRzSgp23na7shsxWsbFdpZ29BR7Pmmt5TkWWqYh2"
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
