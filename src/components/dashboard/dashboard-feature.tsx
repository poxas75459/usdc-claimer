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
    "2LwJ1dThLH1vpQJQb1ETysoii6k5pSgiGb9rce4woqJLVcDDwMVgvQQo7ApkwDVzg8UpjHK95Cxj7mEPfyhQVo9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ktvi1MPqczCKnA9JNfdrTKLN6vUMTzB4yEi5SjL2UVjoYXSeWPjvyUhokyxN1ePHSHzUgthk4NA1JrEVZ6qkMe4",
  "key1": "2UmJ29XWL89CpQGKd3WLwqyFJr6o8vd5uBDsq7xzzQDjnuRJfyQTSU6yo7FEKZhCJBkHb6RtDeX1vFqshZC7qL7r",
  "key2": "kU39aydCNGw7aWagcsNpeXYsrm3wvcAf22m323JC8nsMMEuE3feSgKCRCGJkEFrYJYfevuL4BSf6fDqw7BUBNri",
  "key3": "5qirXko3JwkGpwSP65qBm4cq4kFdx361EbkqfgNMoYySnbW7uaRdEHk2hMDqov98GYRQU8TDrVVwwLyTopwtBrT1",
  "key4": "54bjPm2QnpSgi5fkW1mcXfF4zcsnqjCSFqv1xKPdUxLs26zfFMRdSGj2MpTqij8EHzWcWV5ftNZvLCo2ghhTdSQ8",
  "key5": "5tkpHkMf9cSv5kPbJqAF3EBAD4Anusi5EppLGZZK3m9wdPTJcY9MdNmWBGjuQiFXnxwmepj96onBZUudk3MviLy6",
  "key6": "36Y1tXJ5AHRKvxJX9WmH27V4K5bqca2v1q9oDWdHUJLHGBN6uGmn2BXQLCjivWDiywKffpJpZzrTzXoXcBN4sMjR",
  "key7": "3DRUqdBT2gvtYzuwnQju45xj8gMWnYipyavwg4cj1zQ9gTv61XjnP8qzfrLE7yniduXG9v26f3n5PvmHAc9KUuyN",
  "key8": "25pvdJhDDwz2PjhVNnz4tRtkBRTkvorxYz1a4GXQhxc99aiaKAZyxktd2LPU28qx2LPL4MsZzW2qxZz2XKzEnEFb",
  "key9": "5zQztKACWSbqvWG1M9nXvmSPce9DxWDf8jCbM8kavAt4UFVfBLE7E9ZkSNLgojDCTWasSi4ev8eWY3xNaUW3pzYn",
  "key10": "5dfNiYhxHqvQxdYHvboKBcmjibiKuF4TjnWtf94FuLALVksKTHeMcmJgfpBafTrpMHgACbCUv36n9D9mxqRpWBUJ",
  "key11": "JYftTjEoPDKqRC4wc5Ko6RSFCtNzhcNeL1gSPvfNbL7NqWrMXVMnFfsiQxPy1b24i327VthEfx29Yv7HiCBzKDz",
  "key12": "4WGvZu9JU94Ku8425KPrJMvhW6GRGvwWzG9ssf3viY45CNEeDqHXTfFWUEnvyUjtuNxngZuBXddxKaLfuVdCeo1y",
  "key13": "3qQfLhUw2LZrgCGsLPsBJGWeH1t4SeT5N3GW8ZMkQeSiQqbqfcE7q6X2YSrqPfJjSrrkSV5SyxaU67YDvw5FoHwZ",
  "key14": "2PhuESxU2Bw9zr4Yod5acKwZ4G5825EqyDskLX9PgmZBJTWFWUiroJNtuLiJcVwuCWUKru4p8rzj1fV3TaHApDMH",
  "key15": "4DWGabwvGBMyT7o4AEXqYaWbAoP1DBQj9TvhaRYoJUaBToCfXwxwHPx1aoTnPt97KGD8rRXH9THxNGG9B5F96Bmr",
  "key16": "VSCerXNWWBLq8mhL8ZsdGcfp61M92fBc61osTzZQ9W8XJa27VEyj9fFXb6CHzyBUWFfmdTpQ8MHdADbdoziYGK8",
  "key17": "5Hh6JVXzcPHN3xcQomVi2bU7EwYDDrhqZsrrv1prRMQytE5gt43g1CJiGnTdYWHH7bWDdTqrCrYzugh175r3sPUt",
  "key18": "36S3WaJjbtGXgMZnebLxwbYYp9Wob9zVqFvnLoWjrit5AHNomu1E8n2JUgy3AVSGTDQWQ3vpGjD9SDTbNK15CAa5",
  "key19": "gaRrNiGb1k5gS4wWGhc7gVAESaCKutLmDSHGMCjXea8w1jSankAHya36ZZc7A8JDgS1E7cSZGpa7dC5dFhnf36a",
  "key20": "21V7wtNi4rkrLL2tvYRqECqSrs6jEqBrwyjr2sepbYVNbmRBENmCPwhrMLdppF7L3dWBv2WBtXUwTvxLaCzTyCMj",
  "key21": "2hqQvKBH4yzW2nSfdjg29t4SL5V8oyNCAJuHeJ6QUJLDk3qvssMdr3BKGESqWwAmT3grQVBSBG3U4NTodxUTG7aU",
  "key22": "2sMXqF3cEPBD7ZiAYefeDeXm5t6XxRXWQEZLnBdzRxYZy6J5bn3nAXZ9srmvNEdQWAmxqp4eYGVjxY4ikGcZ62PN",
  "key23": "62XKKNPF85YTy6hQ3aqRGsXBFpG76nZAVBu5Br9ZUyQPtDcbc6nBDHdcuRRvvX4sdZvaWrKZDc9QmHoRXDA75yv8",
  "key24": "52V8n8XAR7XSFxxyE9coyQrTVNanFCxLyeXmWNV8ZtVXTnrPEqNer2jxVQRsXpzaFUYgrvBxcrWN77yj42HYo38y",
  "key25": "YCAesTynupCR8XcjzRvnHeyY72vJYDjhvPsoLc2BDxBBiKCigfcJeSbYJX2Y62zxFPvVuT3NMbstATQ9UCFRkKB",
  "key26": "3XCHJRSdQD6nYJ9K56L91MYr8e6YyJwKREuaKZB1zhceYRQxxvEFND6FFLxWQHeV87BTETazg7c9L1EEq7Bx8WEx",
  "key27": "5csjcB6srfTLY6gUCkToXAvicTzwhsWYmbeVQeBwYyaeEyrq5W8jBkcXi6UY4gcrsLvaMF9JGN9wRHWrta6nBfyv"
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
