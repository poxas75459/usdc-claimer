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
    "4TwBu4o6PL4Xqi8VZ73bFgdxA91CarSUE3MkmUsqKSwkTFaDS8T1nDrpnM1SR9kgrKHb5qe48tmm5eSdFV2xRNVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMDPm6Qt4gKxGEgc5km3eob66PngUE18Fwx2aEH6LFmNJ2M43qenw35Wc7dxqxP2rgbx9XV4dGGqRe7Sk4wJYKD",
  "key1": "2oaMj8jqb6xatZ7JL4Py1k5EHiVWPaQTgHHP1LG136pyXze8Ke1sdNoJ8CLvbdMsrycwEKKavSQL6NhNp5RdW6dK",
  "key2": "651ersN5FoeRCk4k23BqnfUF2yNG9oWhEDnqsMxPVb9k73jrTWw4yyYhhot4imZXCGsY5kTiKq8mdiumzdM9pHNR",
  "key3": "5oUjtLzJdjUDs7yvhRQS1sPgPs86duXUN36e3Y3tSmtrDU9eu3q3neM318odvsGneakoberXeX1B1bVXujCLDqYa",
  "key4": "4pmQ9BiQ8g7HsBst94Tq6kjewBoS4f2Jp6LNgMuUQh9zgsDNcexpidhAzthBX1sJC4XxvQPCHeCmsPyJveWQhhGD",
  "key5": "2G5ueSuPDmTyuevwXscqtRBhhZ1PfXeoHDpb7HBaGe7a25YXa5GXoC5xkjdgEcZYTpWtJM7DmRCBG9waUiXinZwm",
  "key6": "48goiwqfsoVUoG9Kb941rdzcudrrt4wv74iJykj3ToKpTvVuu1RTCeJvydAL2vpVeu8vSmP7HFMRiVorHiPQNW24",
  "key7": "4c2DzP4LrZELrTYx7CAwm9iv3wSa2yyMJLE6fJ9GYoevEkPqNFca44roRnN6D5miSptxm1c5sa3urTFR4dGbTK9b",
  "key8": "46h5TjVkfSbQtpQaVy8TWs9VHNxgwq2CtFiyxMPj1uPcv4Fq52xMXAqGz4s5gB6MbFRx4htyZNEqxvURK6CExZSd",
  "key9": "5cQNLwLXnEcRqEeoHryHx5fsSc999WopAY8up1gxZ23fPmTyeggGoeD7G29PDPrR7UWqqezY66SZyDhhyQ7jnLUP",
  "key10": "3CyrqqZCidw9vwRxCV4VMrRu74NwcRgzNE6a75u6CLHfG3qTnoVAYJuXN8dSWJCp8SmEV9cUyxNPhpdY9X8nSY4d",
  "key11": "SrPg7CkRzadL4vP4cGeFxfv3VeTBBv3JEth4W2o14LSQyiX3g3UkZRhdLYGCwvAEdUD4hrJcewUwbgxRTUG6vYf",
  "key12": "qEUMPeEeKtk2MXAZRFFYHnC6gJXCUNtWoyoB96HZy8bLe1iXxohGJY3CYmvQ95msjQtBdX9SjpK6dhUsPeyNGnG",
  "key13": "5JQA5bJ78fHfV6B3SzTA9Zu27NL5Ran3heVoHNEho5kzvVnHjDY2Y7cqKv6XpZ1GK2Crmm9vBFc2z7qrsJM3FQG4",
  "key14": "2BMR1Ud19CypXG3msXVpJeAjPWD3KXR5h89yTamsNX19ob3oxwapWkbTsWqa7cTqpYzp9eZHvxkBtRG1QQ76QbkL",
  "key15": "4PfgAe3mmR2gLzFUbBaSayjzC726GoarFyxQVxvRBZ9wuR39KQRpKTDSFj7hjM4Hue4Pk3fyfA6yMLhMHrE6Fk8A",
  "key16": "X9Zo8gb3VKij3Sts1jHfwBST3YxmkCnekGyPN2U2nFYJR1u8nshkzTyFVKYNfyAcHiZsaviM84vxafCoJgzG7Zc",
  "key17": "2MuBxreeCm142J5wcejy4Tsj5twpA9qFdtJ3tYhPBv5oRSx4u6J5HxtmDDFRHyUxJzZFfgvb4LLZDt1kXRibwYe8",
  "key18": "4ptsmRs9SiVHC6rcAoZWxWAaP63RLW1SpfnpwLjMPhRn8wEY4DUzdm4FBDZudJXDdZt33CyGzzvZGkGykAAPa1i4",
  "key19": "5xQotWexaHvSBtJoFMadjUPU4782FxtW1yVpKH1B7gUuAZxnTvJNDF8dWcFfDUNyjJVLtmYa5kzYFsm3iv6D2Epk",
  "key20": "n966i7YGKBPC8frFaYoChiGDCi9yw2vdorudHGGtZYHnVr7cpwGk3cj9Vwrq8nUHj2JixmSVtYtNcdAsUCWk9PD",
  "key21": "taVtFJKC6jyvzNh2ZUtnL79ifhj9bkqt6fQTwQxG4XJFNs6zwoFA4GGpcki2J7wFBhxAZBk6WFkMiH9BQgATWtG",
  "key22": "31RMU2XDUxULbqoXZ9LMU6wnKhyuhS7nZH2bvtF8Pi8bdaXiWFxXw47nHxSExW3XWQxQCWhzBkeqtBrrjTQADtXX",
  "key23": "5VzuCVZLmqWPGFqDWcK6q3w3xk9Q4EXduVvNGEf31e7yWgeSQ37eYHtHodRku1iFznoFpXP7FMAEmgNNdgPqS3SL",
  "key24": "2TanKiWfX8j21FPS8nQ83zAkorYA8dGsiwxWPfXvNpiLWfn9uHS2RyvKf77HM8jw8THiy6aPRrSN3DTVbFHxKzt3"
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
