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
    "3xcmmp1jiGSRxfxwZ16T5eQFKYGWhtKYVK3CiSKpFL7eKHKYGeFnbznmDJ2EfoW2GmoyVPQ4kanQN83mSpta4TM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1HhSavKBoXE9MasVAw54MhvoKLu2amyZAJJ9gJ5y7FiMm27ymhBPBYL6NKpywfxALKd1G9NCEv92ARV9u93NPz",
  "key1": "4qfje8QDmesegryp9Dd8ubDss1CyoNUTw7SiVfjosdP6xDavjSn8Ap1zEQ6c48bQLfE3DAw1Mt4Ei77QpFgUdpW8",
  "key2": "2uC4H4EAEEWihEa12eXHZVdr3wSXvVJzHR8mXxHtnd8b1m8Lf2T2tcqcbKfqEZ8r9hu9LQ72n97UF8HBApqK8WGb",
  "key3": "62kVwywReeF5YNbxVuo3WnvoMbF44LpYb61tz6BngRpNE6VsRR66nVRMXVW9551J2Mo8AUY6dnvvMmxhd1dfQLKD",
  "key4": "4xde7Z9MyhdYcAHg1U1hPkjsk5aNnhawuCxbTaiwetDUPfdYpuDZKCJz1y2JzKh7QwCTZns4j3iLmGZPNUa2SAh5",
  "key5": "4XbuetD5gzobMbLRinfowQ4Bo4C6GrTZ9d6KotAW4gAfiWuGsaWSQDnCzcLSfJy2KNx6Y2ufgxtCBs6jLo9yrzmA",
  "key6": "wu4f4VaFViPRz9Y8QQU2LvyYyNUiuY3fZbBJryKoE3cbrdEiNdhW3Y5hHrSQbi3YZmJhAupnRT3vsxp724HvFpL",
  "key7": "XCYS4xSAFGrjg5obwQLLgfY4riZjpY5RktRYatNYrGBrQHDdgBtaqXFuBKWvZQozXH1Rvx1V7Ad2e2eXYaef8Kv",
  "key8": "zAHAA14z8D5sV3YeJbpectU1R67y8SEv9vU698pYRYRZNsNP99qLDpUkVqRFfCFwRRvRowcCTnC4JsaoTxZJSLs",
  "key9": "2227hicqh3EqRxMryByF5VXQGmUsno77td3F8JJo7fKdbVgwfbFTsYatXJEpsEr8nBAY3TCKMxLHUDZayzftRhaJ",
  "key10": "5WGT2KF4D3CAKae8h4Gs8SGJE6vxzxMkYWp8hj9FbmMcGFJxNvg4fLmCvR8oucHCMBPa2LRM8Mm9yB5mMBpJKHZA",
  "key11": "3NcaQZP6D6di7KPTwZJwNdDXGJUnBgYgYW6YfJEQAMabox4EoV1oujiFQd1PpaCbB7op9eZG4NYLi32QU3ZCXbw7",
  "key12": "3RZXXCiY3Qp5yu6VPdsSWcJPjAkXhbMP8D3LUwsdZJ6zvVfxLKbmGW3pCRaLjyud77oB42k4SGTGDhzT292ACWiQ",
  "key13": "2Y4G6DVDNHEiL5VVGaVRxuAufkuJN7n7sXtXQbdTCmJVCuKE3np8GhFDRVtTAZU6kBFjvxUjLgMbvav8nmKcwR42",
  "key14": "5pijEecbjYyH3AJrXiUt4G9y85yghajp5JEqFYWQ8N484Q6jgmk6Emh9Zp7w4w8ffwGfSS42qCDjfX7qGqQzWMnP",
  "key15": "233G5gvsRKMhF6bbRUjAdRNhYqdVG2eGtjvSPxzWQW6mdPD39L7BEr68soLd352AczPFuhvxKEcAix3bi7YB9PTS",
  "key16": "3Mi1aMzUacssohDbbtYCyqJbpFoTGQABwTErVREZxW2AZW4BDrrmRcoYMKFuw2MbKmxQEiYdGhfAyVhGVf3MLPnb",
  "key17": "3uGum34u8g3g3Sa6zo4C8bQDh2muuyswujnmzxZi3gRFZegfe1uoF6VgKL7rwzQTUtFW8zeEnyF6RDv9uaHwVdRY",
  "key18": "o6wsvc2jFGjhrV531i6egfDPvnJrQoPoK3HbpuWD413rpXtzw428BbQ6LKu1HFUaU4Q78vobZpbp92PwmApt5XH",
  "key19": "U9nwr8eNTWHHuYf4Ne5Z9q1rugLAZ8TU41DjZoD3dceNBXtXzvzqpc5W1Dosqk3MgMGiVXCsppVZkBG8AgDdDS4",
  "key20": "2Ut4L7HaJ267F199pYjcHgEhj5spdqY6Knm3ApNRFRSCEefgNLfVCaLeNevDX7MAv4ULPBBM359WXMYaoVEgmZup",
  "key21": "4WG58CqNqTehX455Zb2bi19Jr2Rh4KeXE74KCotXX3deJjp3xyYkCMn9TSdkUbT3njnkXH4frPhW9nZEFW8V7qpK",
  "key22": "4KCTBCSuwLLVQCNMkA85kjqeNJYBZk4CADRzwDdiaC59VbSJtH7GKDBqXDGVfwMiUBKPzLzH76kWBbVznkttY29f",
  "key23": "2fGmzLqTRinvLjQRhkR9xcTUS8FYEN76upZvm97VoteGPc7e2jzCM9tCxYfUSzgWChmfAtDAMooGNMXUW3uLaQsv",
  "key24": "3foeFohvw1jTBJEUAFUKptdErSk9DVd8AyBetL7J2vZssuUutYiKyMEd2STsejDgjYeNkevv4ZDXUQSBNp5mSu6",
  "key25": "5YEy2NCR2TMCLjc1CpqCTfFZ2WwEfFYrSWTJeN4yz3L4zpePXKHpXM1We5o5tUBwZN7jnXtXJW4tnPQ5XbTMX7PR",
  "key26": "Y3hiu5wi3zNXCSihUvpBxhXcV6AdRzj9twLtQqtdz73PtEqf8sCHVdSVVVRS5uQpfaWNcVPxeazVHRpy1DhxNk3",
  "key27": "3N7bMfnGGx6QPk35UgvzYL9AcQwUwc1LczeEwegUwXBXTS8jQdQzn48xZWejf1wo62HELRkf1NerDTAPYr7568hu",
  "key28": "4HFXLWjnN97uvMPixqTTJDJxJFhwL9A29wSx7eoxvkynhGm3iN3kSE7gGnvtUQNEQ2eow1PzuaCUNHvcLwK9Nx4d",
  "key29": "1EwZG3YwcD8k2nJDrPdESpDkq9qiYb3VLQ61P8Z6LPcDMenkCG8cb1LKNvAozs1bZXqTXSJkwqwyxp9i4RaJ6T9",
  "key30": "2KEyijwmziJVxCg6jgdfdozWG11PvmmXka7sGhFiKeNqFgqLcSqNBYcpDewrNDJ9e1yVRrhKX4UEfm3LNZ6oLAyV",
  "key31": "4fdLKgm2cvjphoSC9YEkp9q935j4PYkdoA8hBuYLe6rfWUWYrrE7i5cazMo9H9kTRJs9cckWxvNUD9ZvhgKWED3z",
  "key32": "2hjga6jLKwEZpMqS19mHXF5NzzwhfkwM9duMdMkxvhcRUvAiJTdJVaq2Y98kQpQKLTtBBQ5kJqxr23sRGmiy7eEb",
  "key33": "59UG36cmXuef7zQvEy2b8isUrwsjLUPMEcLBEPsAxi4vcVY34pTbBFqFhFs7vbYZA37oZGaDnkxuQgdyLnYK7dNi",
  "key34": "21Lv8bnqsM7sPeD47aFHR7PFCxhNFXVrcBm66xtTHhtcwKm1sTp3NBxvFTpkP8WPanqjXqD3fzKFdkH4nGBVD2nr",
  "key35": "4cg3B8sQ4QkUTLfgHdqBrdKzFzQBmq62DbEiezRsaMYQars1m2grD5RP8ba5W1X4i8aUw1BZ6qrKuo4xCJT5Kxip"
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
