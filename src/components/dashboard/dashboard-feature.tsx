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
    "5s9WXfEMpXuKkMnxuzm1ZCwp4tsiHfJFa3PjKWq2JVkrQY9oLtqFiE1sJj9Ct1ve7gyN4SHaefwmpaCA3TRtaQdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4U2Hx18aWJTuPLug5tqqAmX4W6pvLL9kwCJUR8dpsyWYuFATCJTkKmMGtbfqa6yvgv5en2Tos9hZQnk8z4i6Co",
  "key1": "3MojayZuyfhdBb7xC5WXJJ9BRuecKgwW8JpdwggxY3d6QSARZSzLZ3vGKRh3FTF213qZKvHmfaevJQPPAAwZnSDw",
  "key2": "Ut963h9bsSWg1jvY2mcuXCVXLA8zcC1m5j3edSfudMGiBAd37yEKAN5QSyCpdVb2DXee5ZurWmxm5R5MKZSfaXa",
  "key3": "2NT7bEQwCnwstVoXdt8rCiauNzvDxgkNBig91AKA72MSPHqotYCtqS2xwunU9eGz8Qk5wpM1sKL8b1Xr99Bij4CV",
  "key4": "TWCMb4u5mG9H9baKG4U3wkP464xuBwCfYvuUmiy2Xvy9PUDDiTgqH7SKbJnHpAQKLYibpFWRSaCtPsv58yZYtB4",
  "key5": "2rdXQJTtXsacWa9ZVLMrXJ4AYqXakT6J3UCtBX8LBZnKFv8hLw4jwLV51GhPzQFsrQLhbuakdQBMqTseVAoMJX5H",
  "key6": "4zvNBaR2dt42wAGHov5bTCDVrNPCjtK6ekUEVsPuwDThSjvpSHxTF6cFwpxF5kyJGQpTBqHRbX5u4yPZE81DE1HY",
  "key7": "4sHFGNnQJwmDm4BiE7uYJwJsqDoS3hGMah8PTNuud27NxkXqtF7vogJmtoigRYugrtpDkexamAVWp1ZYt79WyEbd",
  "key8": "5naKigSeJXnFMRmfRCGxJxpgxA3Ni5Yy7esAjQY1hA8pCzj7qM3sUFQ6jY4FoKBQJcaP9oe432FuUCEPpYv4z4tL",
  "key9": "2RHWf3hmUFdr1nGHKaJxcfk5bb7fBk9YJ5nRGbmCmMCmH6iAZFaqMuLezoJYWtVik3wKFqraqd1cU19S3U6wmfAg",
  "key10": "5vudX2K7pnK5RVASSPebqVUGeY2QKtR2v31JW9K18PbmVjSUg9NEMjp9AsuGYri58UBEMSAmGUCCGafCUih7NgKB",
  "key11": "5bACemNHRQ77W96i9ZfhtwBqDMTthUXr7QUNEavKiXKwye2b55uLhdhv4ThUHEEgGiuPVTErxDGEKe6GiWidcmsu",
  "key12": "3Re1BYnkuzUEVWfeLyFaLZiR7tftAZ4gmJy8GBsdJca1JeRpnTNjm9VnWKTic2ASMPEwkrXowwhh2wYqPPWwqEQ",
  "key13": "3GS2FSoAXBrGKtahyAM2yJZhyXrZCLCBPuMH5Ncompzf5h1M9oHoKfv56yN5jjezYegRwdzFoz16DMgQRFstS9CS",
  "key14": "16FPzZ9ugUuhVytHy6vdwRJMKc6k59WQ74SFXRypoVuYbQuvmZwaCzpewpdDtEWvncyXrUxd7JFaFmbZ2jSJTWH",
  "key15": "4MxhzioDKMzcvHsgscB7EzQzy3nCmAgHwBtAV8LvSXJF9HNLR5WGaD59TzrGAWjLvtWBBJnKrthvMEew9YEE15B",
  "key16": "4pUcLAu4yD4XvXFYrtz1qpd4wqET5Xk1cubT9oLQLhcdJhpXwTU8H1AyqBWi5qWR9ZCQpcRxtEWfucuRXLchScuv",
  "key17": "5AgQMyiizngK8LSAUJKk3WTfKef5TMg52HYmXfVmnw8Qcfre3z1SpnGK3ob6RzSvEmTwP42Zjnw18kT3WzFUHaA8",
  "key18": "5gNKVoQUzRJXBf94AkhuSGTd89nJgaWquvq8pxwD5xgxuig8BnZskXGhbUpgY7XoPbj1Zbk9YQjKP1TTAHhBQuu6",
  "key19": "4Hs9FjrBmVKewJgXmfFzTsh2SPDHP2PcorA4iF9vH5tCcHYkP9WfAg2d3dNKKxKBFa7VgLCYPVhbHMdjqBxBzfEi",
  "key20": "5vvXtnXyrMqCjcE4aowQjyt8qHubJjLrqpwQfqDy399gFnvJg8SzG2zwsv7hMMS1ZFGTfyQqBzid9yB3YHQV7rvk",
  "key21": "3ogtUTDHQ2Q2TQXoMtSkiShbVsv4eGZSb7c7yJiwsa8NSqSQgBaZj6T6bRnkEYpeArjaYCeGADT6n6qf7qivUfyW",
  "key22": "5ocJNResMqsTzCeypYszGpy8thmivLPXQrbtgHZkSBE8DAfLHMSsM7bfbc1zNfpM29H9oDYqjZDhmJjgvD6qkUmM",
  "key23": "3Uuf7MDCeMHgx9VB8hvzDyoQbYJ6fFnesfvokG9jCyqyMx1FGa5cGeyP6CJLR35qrNhGvQGpUhGmA1XuNCM1J31Z",
  "key24": "MA29JK6hLVGNLGKAMu9BbqyeHznNoDDpFXWMnRsvDpNwwiusnF9JU6VCZSEHxSca9n1qqioYKvb24C3hRopwtiY",
  "key25": "63S23dAM6G7rBNA3pW3Fp5nmdLE487A17gtcXGU1QLaSAqy4ocsxmTK7YCZXKEw4sWjk3V6xkNPHdZseifMCUYHH",
  "key26": "5YmbJCHKwv5tGxJtQTPMi72jyKUJX6g1StcdC2KA9o4d39b8UVinbeJPXfk56T7jvZVRuCDdESynHNjSDKiK9xEJ",
  "key27": "5i7NTYWz3FPeuvSFLC13LpsjMfnHzVpVtmZ3LB92kVbZNwnm3XWbdcqaMdccwP9HTmJdqyMpfjt7HRZTKNdQw8zX",
  "key28": "4FUhhePm7v588u6oXEQG92arU5evcShUWnXuUnPSKTjcCWuLdCVCrakW84c31coFH7ZZk7jUdvCnK2g6qK3WSWxr",
  "key29": "3W4d3gg4MPbeGWjR8oY79RorshBGTCt1BppC4hhphG6kZySGNbFuA95vEtWL4dZWPzK5FSL3QKmvUcSDhwGHqtxU",
  "key30": "4tRpDhZSLT7t4tH4ox61zqz9MVDiTgaFQDRDDPVGBcBucAYVaPyRKvm5Z2CdUnPvfASQW7QvQEn5ELWcBWaFFCVr",
  "key31": "3R6bD3N5mufsNL1PywYP2RwmV2pcfLtujqsnVEEcspuaDpBoT1kA9Gz9JwKMKXB6Z3JFGrLLhEaKXTs7NX2MGWed",
  "key32": "t6ea8x6N81b7pghotSQYEViQWPwnfZG2aFNx5ZBo8Gv33xvWJACgQUNGbStjknoNSPn4WjRWTgfgj35PW75Gsdp"
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
