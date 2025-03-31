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
    "3wXWEoviyhR6G15D8D7QntQ2w7mAVLQtUXciCQ3FHW9wzEkomonEqmC6UwB14a33QH4RGAeumBK5tCX9tzFsyjGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ec8d4VfQ1APyTGUCsi8ovWvKNXxRM2M4RzKxi1TzCWfzrENHuAfJyYqqQ7yU4guRnkzD7gktZApvGFpXjaAqT5U",
  "key1": "5k8YswK3vH2hPhhyCUmfje1os2x8gZ1eEqrd6NdYuwWpqJwpgJYU57E33Dn5Hia4Jtg38fq8fDhYJfgxHFk4W7ph",
  "key2": "4SuDcFnmGh3Q4sdPi8qqUsdMvxAE5i99Gzxp8EseiB5jhrRRTqjeSuo3h5K7XHosTeq4sNVFBFbEEaPhUbyhHDEs",
  "key3": "3QpzipYDHA9VoFcGV75KKEV532zjCFVf1G1LHusgropR1SxDfGNCUXccMcf2KQBgEEGVYXcyZSVAkV1Z27CHEmkM",
  "key4": "5yEnLW87xarPdK6KFPpCCNQQLLe2mrCKsWUCyuEXS4nZf4GoSxv74JiRqfz9Su2fZsN9122VZc5gnZetRw9AvYX1",
  "key5": "TDZfu3is5DzLkmgUp45ShJgY8WTWmCAX3wXgDc2qmSG6Cvr1rkRx8GgKs2uRyar8UsmMPgj9CufM8LXPxAsV1Ur",
  "key6": "3ETRGKqmZgwmrV8Xc84gLhQ8A265dvwnWpy3CwKHzewZzq7LWeB74vZ4t22TvHJS2Zt4R3DU7QU4DdATE3HwM6aP",
  "key7": "59yCZQ4eud26KAAwUZsggd2S3bXyfHzo2BnQsDtRGZ1X63YfwBh7mPQmnRwMn53g7hSkGw3qGGG8V5HGCPMH12gg",
  "key8": "3jFuNJgGboBBQMvsQJUCZk3hgmVD4cVb4YU3E8otcznGiACkBWSvWotx7QFnTAExjsHfkGWRLfBw7axYmzXaQzpb",
  "key9": "RK6fcUoyUsJznu95ak3zb5aySPyNx1xLP1y94A5tiqpTk2pF2aBxEwdmtibL5sW7STmp8GtW8Q5qkQTWxanwNb7",
  "key10": "EM9k46Luuvh2Kbd537JfnYESNZC5EKygnXrZHsA3Qvv2pLVFUDFCBPhCcw2BpPBfMV3DfeoBoER1vZ2SNLZnHNu",
  "key11": "4kCLxLvev2RFggKWUogJRPn2AeBQVBwr7mFRpM6Q76KJmvAf7ZFNK4vBwNK4hCR4rHcPF7dUfL22RJZrvGag85P7",
  "key12": "f6X1N3u6uoShuLtJ9g5ytdgKEmiPUGduCptUKyMQ1DiWjsBfnguuSwvboTsCDG7PZHqpRFhJ4VsUJbKAS6NorwZ",
  "key13": "s1xtP5RJsrNtiNW8uy2CaVmSyvL9dSm1QCW7wPLAnyksmTeTU6rmeuKuMD8LxNkbF5GdwG6JsV2i5iD81wB6ScH",
  "key14": "VhQqvimQvyHy9Qh4CC4uUayDegzK5e4gEPe9yjTSoN5wvbEo8ExfLU26gZBaNqiRhaQ7ejthUSDzmjiHD8aTTBu",
  "key15": "LDznsKgeG3sLFiqWYsCyirDECCzYkbqjweYn56XgcY6YhvqGGaMRWGqNwmZpLEt7bewiiVypSmXExZWZgy3CGAm",
  "key16": "36Hg6pvj2D4W3V13hhWswJayLhAV8vQ7Fu4D4Qjw2yNkqQ4ADtGHsTe4qju7xwYVRwQ1f1ojF7U5gd8SFhEkomRB",
  "key17": "5viemLAMwJRqw6SRkDW5gqRxNuAh3BrwkL28bVzuJ4nR6pqK7nPAqgcyGT3D56mMuGtU9hxEhZyfbaZmVFHUuYQH",
  "key18": "LYk3ZD1TBVj68zEpn5ybna1eT8Zg9P13xJKU88w2K2fkHyyUMooSXnvznQvx6M9CAk4dDs1xSpoXgdVv79giaNZ",
  "key19": "5mHBnSVDy4WFH8RJW2S1i5t6KnNszK3deGTnRJbDNP2MzZJh2veJQg5vJi9jfp9dtkywn4aPBzR33mzy7oB2rUtm",
  "key20": "5x2MmEeUDtJrx6vYkN2MoJkmqsDPrZTMdQMf73y8NP7EXT4BmGc3qBx4uVrMxEX7q61Q1hoa7FjSNUL6Pn6vUdhZ",
  "key21": "4pYB6KNBfj6snReYwpz4yvdWw6sPHE9FTw1iRVFmVSsjjw78MzJFEPkpewNf55KiLxfZcfSTiXGdau91gP9qHKUE",
  "key22": "8qeAq2PcyaWai9nL4upEbLjbCpEUkL1v7kojBscYfc1RuBpbKyVtZBnR1UwECJV981YN2Apg9PEJZ9WGMPbbrKd",
  "key23": "4Ag2yFc9ZMGsVhcg3XskKFUvFpcEbryFzTHvYFAcNKEQ4Dhe9PcccLDawTorE3uHZYKymVLvvpwyHxSpydwWkrDT",
  "key24": "4jWPjgqnvVDpo2KBvrCnhT3Mp4N4xEs3r4JTPWv9k2i4HiUYL3PdLznXqMCy18hS8X7dnUqNpECp1rXzx31Ctitr",
  "key25": "2fcqKEyRk8pxmA6Lo6Xnc4AzKRWsxu6tPRuEhxKRqvfqLgHBDKePie4dTDFkyAvK6SVoEoj7n3Bn7uiJKwQYbHCz",
  "key26": "5Wm3pLbJGafWcxFAgDwSmvKnQDxhBbjgZiaQAGntxaMpuCBWgNwn7moGLwifqDNet1xjxkEC9QnXiPeeiGWhNJDX"
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
