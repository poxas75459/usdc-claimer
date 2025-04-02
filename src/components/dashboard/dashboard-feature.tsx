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
    "4jfau7wEu1V357NeXGjViSvEkWMzAsEcQ61A4NBkypnDggKQ9fT4CR5NuSurrtY2YtH4nWV6bx9atsGFrmSQ3paJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o39zYrvHq3Q3WNbwroWdjuhRa7y4UkcSZzXv81Ebvcg6ThQH2B2WsconjmuKXhwcnMN9diSXs5CsYzUSJVfvMTC",
  "key1": "3N3Snwy5rYkQRXi7uZSzQjQrYhAGk8Ftc7AQncKVEm9576R4o4wbqkQA1jGpL2aPxBMc6NymeuxDbhpHt7Q167Yp",
  "key2": "4NHF9Bvg1GD7Gj2pksssjDcLkfNNswVdtJTdUccfKqbT2SYL2oNFT2ckiYtLPKL14C1Xx8KVMgjCBL2yBpa3MqKg",
  "key3": "4NL3iuwK3w4hKybJKVre8dfeLHS1wZLwK4tS55zSMn4kh8qLCdKm4jUM5KENp1Uwjpb8UYzDU74ajw4o4Qw6zeFL",
  "key4": "5Csem8SEVaojkFAixiJddDd3uyfNwT5RpqDmpT2strPBTwSTNiTZhhuGDL83DJJ8gduDP77bq8M1nz3WvBQzyD15",
  "key5": "2ZeHcj2fUn4Cc5yZXeXPzjn1gsKr4FGWCg8otVMYxE1HN5bvx4H1vUeRREhHpyca6V7n9xRXs6KqXEDVguMXJ4zc",
  "key6": "5xXjxVPikiFdzwqn37boy9ZMvHu2rfiunxbSNJYL7y3ZcTSrXxazXEbPhNkrDV64ZmLdhNpZx3g2KyZJNPKYZL4h",
  "key7": "5GaQTGEruwGvt8CBXAPbeeEEXSXtFJx3584GXhvGBNnojsUtUdMZ9xZybcECzyww5a1EkjFvvhNQzMETVwxbGeVJ",
  "key8": "2pMYvQiB3r7156fBKRMhZT1UGmnueSqzAtZuh8JMtuwF3ohaZddXCGwkSaFusDCw7jZaTDmG3V4Kxg31EB44vAwL",
  "key9": "z1tQMVj5t8XHAP4u5KH139JwThq3xNSqkx8v4NoQ4QpaB8fgna5AhoeU3At8j9wVxUDnSo9UAsbPwcGPRYAyjkX",
  "key10": "4qNGnfXrZYifTLmuyruViKUNKAfeToAh2JpQwPvJEbtXCQNiqtarLNZGRfGKB6Ea4nRsGCAPECETaC6BKYyFa2oE",
  "key11": "2JWYzz4ozGR9mKXfx8X31Zt2uVqJTB5FfmoTU96FeC94j1Ayh31g52XaT1dreR8eCMDqqKbSjpehpiwXYpN9drkh",
  "key12": "4QzaC2GCCuAtKPw7Vy6cxQtoq32K4TQAMmBvwHV6BmpnKfuMR3nmcdkTWsxHvnG95Kptgu1YMoDSd1P1oYD2Xb3z",
  "key13": "3zCt3BH7p5hn9g4vR9GfrvYua29V8gng7Dpm4u8jLHwVTCyP9Uuqticp5SGzAYSVupRGULePRAZdWFFydgS5ndoU",
  "key14": "4prewsPBVUfvNybeHD5tdjJPpbr4Ceu71YifXw5eQDPod6rV2Kk3TomotHmor1XzunoDrESTHkVRtMaeFQM8hwpd",
  "key15": "4wFz2u19HmjQMpDZPwLP3DYvW85d2N47LvHUtKZ5cE2Wv6CbB8VCnaWT2e1REVcRLR54kEYWFevHTCdy9YhY23qa",
  "key16": "KJRR96ekkUnCHtQV8rajym21gC1MCxnMiPSVc1R7WyFxDGaxfBTjj9rwefUk1XCDzC2kXAky5a3VJYvGMJehwmE",
  "key17": "2oowFwZsF3U4uwGXBr8wgnWRwcbw5gLgqZoT2dtVrU6QpZNNzeidpBbpJCNuP8YyEaXikoREscYnrPDv5bfCaMfU",
  "key18": "FPcMSpsxeGps1eHNWLknRTNisKfbbFw6iABiKj3tbdhw2vxqRVZo6uiXz59vXfq7gBZ8HqVJyt9jahkmHmBgRzh",
  "key19": "24LBz7gG94DQ7ttyXSTDM7ty35h7GMDa21h1TwJ2rxs7SgbTHmHAyCxxJYLtwgnfc8NLHcVkFybpGNxY3Ax5iY7W",
  "key20": "4fTCnEb6QCgKBsJ3SFxM84eB2iYpafsfzBdf8fs9dArEYveFSysTawg29oGUDBGwKTGoVcaKSJfEyEePmcGNdvpu",
  "key21": "28bUW4NFJmESa2GFfXrpV8BWtkaSDJhc5AcJFxipH6azjBvDfoL5ChZcLUSXdbpnkH1NTVDowMcWYWrrNnuxTsEe",
  "key22": "4dAut1Zvj1oP3huHKDTRtevyniagX8aqcBTmV5yxHZGSbz75AWoQPSqKjEUUNTbq5h1evGNnLz8puF2vaJcRw9Zb",
  "key23": "3Y9ySqafvQxTeTt3a26eVi3YyXgidYH2rYgMkHR3BaduUMKusb3uWeHJ9shv4zUNjuW5SJPNpiVmSZCSzqEhbJmq",
  "key24": "2Q2GWe6Kx2hBUMRdSuYapKeuwtXHxoLwUnCJHuqccoowt7o3X3NcSCyFwptAEz2d1ZMGfwuZZJ1ADhoDKCu34d5R"
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
