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
    "2jJUPRtAKmZAMsXk1CWS2Dxs1bhhUVCytxc2Ti7LdDFmTTxxfcVLAV3gWUd7hxm4k36epBD7voAyeQnuUo9kTN8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWif6jSJdupF9gYnK2qL5avRptHJEmsfDpnwf98DXFDGeXTWf6rkXXBbKwf9o4n84nYGpPt1aU2Jy4k7tUwKW7e",
  "key1": "2tfXcZZzUpPwGwDT2sgkbNYvEXqJVUsmJdthqXSLpPckHb1uq5PDaXu6kP9vUfVmqrbPCDT9Qkv8zRY8WaHryD7b",
  "key2": "3kN6YsquZZ9UfjXxMCUfCvfipJDy5678HBvo4W3whGjvMsinNa9CgU8pggFMH5Pn1VXKdZkDVdhiWJYTu1qstTEX",
  "key3": "3sViGPSPTaJ7fy76apBA5X5TUFXukSUqu57ExPcpv327xW1Hw2sY6pErJQ3wVWfQsbVqXhLtRezbxq5KtpzESk4s",
  "key4": "5xp5F5UQVgpAM2zfyydb2Pf4ekn5kz6qzB9x4EBt3ttfesH8ZqJFNDJ7wSGtKfwDU7vKqF7YfAWJDaJUGh67ZWbh",
  "key5": "3vqgSDqcpvEQKegcpVpobpht7ntbAXis7AjgpbK4qv3rwi8UH1dKFQDGv4Ykcb2KjaMRNziE65sVaWpjs16EcwQZ",
  "key6": "2HyypdKjVEqKfHGdNFAoAmHu14iMHTp4LrgFyRQoW2vbKfpngAfMnHMuwZMH2NbxGqqSmHnkpo2eTnKEXpzLxLC7",
  "key7": "51upFiuU3jjw42biUUBD6m22xxXQ3PLKb1Xjmoj1SuBZhpYQPm8tR21eEWJPzBL6oSnbwEKoWPuz8bfAv1qKXHWS",
  "key8": "3Z8hnbKEDwBLfYa17DQwiyTwyde5f1kW4YJy1Fo6LvT1vce9c7yWuWXyTby6pTAmZx5m5qHTvaBXVSWhW8KPUY4p",
  "key9": "3uvhgw83TJtrQjGanoFUw39zywRPvtK14XJWnANftZftTjjC9jWt1VrvsaNDo5uTtt3bwFQXrbDH7B2yfxPLV1vy",
  "key10": "4i1qMWgPwSixgV6fv8evxN83beQ2HTAv3SWRmRWpxZMMRu4H8bZfEniySZkuLLXhTjMH1sMeHwHjkH8J62ci8aYq",
  "key11": "4XMzZhmL3NMuTdGT1u81Ej25T52EQ9whCfipDoGwyMPT1HRGjv88ohS7vubN8gqQqPsrFwSCq2CeDuAPbzM3Bp1p",
  "key12": "28Sn8wp6x2i4qXRs7zrYgyyiCqwiwjJuw6PHeWm32KBTvnH2poAV9U3yWsWGLebzgkXKjpB1G1SJN9DrcmnR37jt",
  "key13": "5tr9QR5P1cLCmXdJWGfhvXDiHh1R9MQrFcRFZwjZJgxW1RpxcivBb7iT1DmgTG7zAk3iKYWGeZesxBnQBPDiTrDv",
  "key14": "552DFTViJQBWX1jDAC3NXJ9hB8HoLuZRwC417WvPqCD38BGsoMSpQKWABHzxZ2q33BcHW2rY2rr1ukeFMtja9pQw",
  "key15": "4c6yy9Ku34Nsj6EwviSgA5UZwLSGpvk1zJSQSbkzBnZMAAZpuFx13K2jzc5u1PRyMtmM6suTLUWcJP1bSqN4FKji",
  "key16": "4PapHJKXkSxfwkkahW7fdEfXiPHq2SXPkuxMnBMUzTU3ei4NZgWoVC1rsHdqkEPZgjWihKwjyQ64agLzhWHANYR6",
  "key17": "5Eo5k7sn7VpL57WAP1rKWcbFcsp8sSK2HejSugmrVfLV9ATGqxyehT7bTxudNik8QneEWxjcfiWTL5QEz5k7CUKv",
  "key18": "4XeGGBqvrNPxwf2YGvRkao9ye18k5eo7kVpXvhyxAEMAUQ8ki98CuZiS85Ft8LHUkBU2ruDH5vnsrhsEdjb62gKz",
  "key19": "5661mKvACK7mW8Vb9mzdqyhE9LQhAWykCN4JmpEQCHVx4ffYoYxTZtRYmQVA1DXzECyZo8RpqT32ehH9djCeX1x6",
  "key20": "3Wdi7bWAnD9zXuwD3CtEjVqAFWgddL8gEbKNght7YG67eqSy1LvNV63PNVTa4aYKV28XwZyVeTVepmQ5DgrHzHzx",
  "key21": "51NLcZmWWLwz1GLESCnt83DPyCgAsEyepP7rggtodUiUQdnTj8sdB7Ef88Hc8F1fF94r6Nzh6aTfQu4hHuFYiSYs",
  "key22": "67XCDkBrtV96Up6q4D2XeVjVdxg7ma2Gmb3euFzYzotrdeHtbkgXXVZ6qLEG3yD2jqmZkysNZ8N5AetkCuXd5hHk",
  "key23": "4eHz53takNNMsYsyWLRDxvLXMhS6a3hTmTTXiKFjqKhT1dvSRvNpVPmrMZG8mVoWpDYkDMbZJ1KJtVCJkEbD1eNL",
  "key24": "GxFZjjuqeAP781NsJjc7QgFUEXrZ4sEyDPAsv6p57fzQWQhi7TBF9eUERUru5Cj6ukimgQn3SwAHfEvfJJj5i6H",
  "key25": "578D2x1YQjrrFsu9LsQgoU6smXmnr49vYGwxGk12qTda7YMbhRpkGFoyJECSfycnF4YvjdDpXKY6R6njT4zaZXFk",
  "key26": "2yva7Ri4dtQwha9xqBFsHNigNYmv9SWqfy2J12qZEZJRzwWmuBkwJR1tsSzBUoS7GkPLjRw8oNi6CHS31RXw6Gzb",
  "key27": "4yuVEjYinNsNaHkpA568bwqDuePVEQtFkeuscj8cYVqyb1JdwCL7o5N6RQmM5uaiAQdH44BfndSq718kDWkeUjfa",
  "key28": "ycr9f3rKCJofm8LsY8GaGCxBfsivJowQd8XsBVWS2J8x1sbWMfe4axJCNRxListkQkxmXhh2nDgtgGWoJSzmmAb",
  "key29": "63VuwKQ99ZCSNEXcDa3NCeQTbzpKhbPumDpTFqgwazDmmeEq3pjJRwZVvhFMnDx8AA2hQs2Xp3VPnStb7njbPHtx",
  "key30": "4BBZ1mqmXXeCU3eLeM3QNFD8p4TXFhuDqcbEZYiYf2s3dyBEuxPnjFLyTuPSNJ7Cs8S9WjUqFqWowdXtCSTRZ6jF",
  "key31": "33549Wv4WYmbX5CfdQq75sXWN1N1q9t6xA2fnezUKgg6SLWzFKTRPsoRokHW3Kt141yh57H1oYqibF7zYsVC1MeK"
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
