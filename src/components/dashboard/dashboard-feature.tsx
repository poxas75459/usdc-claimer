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
    "4wWE1i28U6r59t3PGQfZVvN9wjgXhvZkBCUxhYJzK5xVodCDcDjSeVvs8CfcETXLNV4AXNs44XXbDuGqm4uNLkTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPJBtH8e2Ri3krr7pca1Uw5qCRRQRqS4zBvD3fv5syQrAJvpSGUDxNTy6gF2TKkEDdyPSfsjdokLkhrja5DJWFm",
  "key1": "W58BRFMX39afDe7FxYvf6uihj6nijXhVaFGEVTLwW89t6KuobTiuWAdDT4LNCysioGyXdkFEucLsGeyizu3vAj3",
  "key2": "2SaJ37nQrEqbqC8o5tiP2sKcXibPCRfG9kdZhcoMvP6z3tVKSJDjzZqFQicGiMr3HCtSwwNW1qvX9HnKVARDjfUD",
  "key3": "4cHDrAbbuNUFAmJPepPunVnKe5ufHFAcHpATXz9iJmXvAdciLKVRzVLLxCqtqwMDrgBgs1qzTjkap7R1WLXV7xTk",
  "key4": "2An3xPdv8Lj46FWAKcFK4H9CqtWYyXByzWjnXqaeZSzJZftuV3uEWRiPfJjJUmAuuPfBfe1sr4y8e1LYXD7Tnxvg",
  "key5": "3wxVWMiTuUsXGuL4DVn3hQRM15L2wr4AHXpLxokD95mCcWkuY4GL7Cz6YERjt8ZeieFPsDmqjKj7cJ4y6mQJSCd8",
  "key6": "3vojHHfZuy1srCtXQMfEExqdyucCgseDMmqKgezTQbSwpenA2mDVSiWNWuppg5ksvareXvCt1RvhmcXHp82PQZBJ",
  "key7": "3N1r3ihryCTuEgtbPsoAEFKppzkmT3nSyJwE5TofLSJcpZVtBDyB3cfwKBEtnVBaEHMFywS6Jxcc9UvCtJ4bAgtP",
  "key8": "3z8hPsdorSy2x6okZq7z4P61teNam5M7gCwwMHjRkHRrGAVYwVRpcx8fJJ2N2qa8axMKg9tjQ4Q3f9bCGLrSiqyD",
  "key9": "67YbeXDonGYUyCrAiWdSxrfht6wyCkvvepGb3nSAK6Q1E4hM1x4DVmhD4S74Eu2FS7mJjyek2KDktfEnoNT5PHxM",
  "key10": "3oxJLxHro79kKhAAfcby7q1ihiGuu7zYLhbuH2fmh2hWxWfTE2hAwPe5sbMjWrTPwLTxiAn4pxHadHS3umNVPf7L",
  "key11": "2ZCoKRT6yRbB3tdCmE6yE2TGRLZ8qdsPXjEa2vsG7H3sFNWPJVr13B2RCae5ZLHeeRPksyaMTUwFzkM7kWy6TRsj",
  "key12": "3YFaJtL2d1RNPpoj587uePD19N5SF2qhLVXtn1A72rjyG3cz4V2B4RXMhv34BYoWdeepcXd9H1gDeoEAHH44U8XT",
  "key13": "4xWQ8YMJAvBwofB4SciFqZGGs3CFJAMQ2te658cvbF7kFhts9bdPwPbrv7qB53UBxdEFuBkKfvh5rTzW9xhZn2EG",
  "key14": "3nGnGtTDAnjduMN1sJXJXGpK4CMVkT8VxTrXXh6DvMPgxRQjpHATU2s1pKhxDFEw4ttNyMSPaKN51wrkPUC4x1HU",
  "key15": "5NBpvHHfU1E283Qpx45X6jPL7m1rZDXNUBYv6nyqGwL5XVsGGYXgGVCFFHPhwRfLX3wfyTTY9tqN1sK6T8Fppywd",
  "key16": "2Ajnt8RSkLSa7u3pZ3rSsaHbFDjb7DtWHVejZhJsG9L4rqX1TqkRB4an5xLN8Vpy8BZcbcTthCkRchbTZHmW7snF",
  "key17": "HtswUebotkxCeLUvbPznRivkh4r8C2y1N81pZnSzNz3Kq4gwoLLiiFoMLvNs6byz9qVRXragzkejd9ri6MZuoGr",
  "key18": "5juHePRuUXJztUoWVgt4xAodrEXYPZEypkqq6zvbqjDWkpiuB262Wj1kXjV5RKeFPfXQ4HAAAPHoVWEYbqSXc9ow",
  "key19": "E9HWJh94sYDXX48RRChjRYKucFB3D5pL91MS3KTWKNGvXsG7S8L68JYvDo9Z5RNsy9JwiJAFYCUW6AuGL5zVo9o",
  "key20": "5F9norbDDTMU3wNBBFJJGzshjgLZFXymGH5RtqkLa6gzSnhZJvUZkR5E9Sx3d8TiGY57VqEcwkMBpWGSdExVb6aH",
  "key21": "Dcuk31FK8c9NvMSijhfbDK9EnHKfpbdYEvc31TFjtnbUvnzjMJPW9MF8Vkiqy39gFB3uE6VT8qbDYbAGJrkzr71",
  "key22": "5fQ6yw48KnKnx5bPkArDskegK64P56XGhrKgrFPDq6huCkYD2jScvBCaM3EtfFD13tN1nzjkN36yXqEwbfSALgSu",
  "key23": "3spryuPN8jQgYUnb1vwZ7cYxuFTjb8qVhtxuMN3K66RLALhL5nxT7irexDD6vWTfJ4QCsudWirD35g3myJ7x4PbJ",
  "key24": "3REbh7tsgQnDcP4KXDPdGFKcayy2urg29e9us5tDHTgHRdJW9UVG1yzcg2sq5kQs3WSgRvd8HF7wh42spaFK5mtB",
  "key25": "2S9fAsmPTQkxA3jU7T6kGupVPnCB6ausHZDRJ6UmiKQBRYnjYybNHj5zoZx2U8u7fdYoaBSbnoD8L8o933qdcRAj",
  "key26": "ztTzW1Jr9kjHSuQPALeTgHLpHLrMx9UhigkfXYee9udS3HbH4AtpKMpZjYfeAff65heb9PJJ4oM4sHjdj7Btj8w",
  "key27": "Kk314He5LYJEQLejQ3B6967jp4vF23v4yGcduaqpNhtsP27ckZT8MfkrWZXRgZNdiKYJbCLpJ4fXhHPBWK4Aquc",
  "key28": "4hVkkBk4yPHLbkeZkisrTefJRCM1n2ze5uQpPCeQ1yZRAh7M1Get3pS6SqWWkvhfL21F7bNctHuZnb3y4Zr9MCkz",
  "key29": "3uq4SzvMsPcvzJzohYKPQkFKnuZYCVY9WAfpUmEwCcnHuNWfUpGjAUtCDqjQdA6ViRrUViGDa9TpVsAomEjvjMqH",
  "key30": "4aToVdRK4qoNhTy6p8NQNW3PVJfZKddQLsnLv3kDpj6e1pb5XacDoJdRjusk4jyhSfY2h8CeVnKPSs57SoV2AuM8",
  "key31": "3SEA7XtKXi3dqRPvwkSZgMdetrnwWqAV4GpjWFXJJDbgoxzoSgQHXag5PWSfNcx2rwPAQU2Rkd7KpqWvEs9b3LXP",
  "key32": "5aHYwj7nistDiqCKHdzGngNABJdsz3Zrf1ZuPKdC2BcLLbB9N1JPv4X1SYyLngvyUab9t6qAFC46WxqMcfzjhN9Q",
  "key33": "N7YcXaHcQSqGAn5FTj4aoo53PmJRsvsfibkeJ83smpGZRiE4zt2QkApv74d3Y8aHg62yWNMvu4ftLkcF7CXWhdw",
  "key34": "3RRKrxE9PcJb58FJyGcW3HLZ2GiFRMJARfyipWLq29QCxMEemYbuNzD8tvMXdpGzvqs29L9Ln2toGYxrffugMLwM"
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
