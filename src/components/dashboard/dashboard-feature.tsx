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
    "2Z9yCAN8cZ6DAigDvq3m1LjN17p69N56g8aRJgu15Pbk2HcozqbgsqAK48nfDb9snPStbPiG6GoFJFXGgLCG84C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQ5FcVdj7tA1pGwrxNoYcWXFXosTXGWsfLeTThBVoEZ3muyYssAvv6k5BvWRn7hpUxqZkSCxCC4coB3bAXCDT5q",
  "key1": "5TD8J4NEJXuX5tQbmDhF6RiaQAkV8NVn2qXPLhUj2RvnghKMnEZjweL4fqmAMez57288AnAmUcbBJQ7csX839kDd",
  "key2": "5aFYYLG5kiHaH4SA53UvMHv2TQARSuE4XqzSzPGBbcs91M899VURWK82NjfJgV6ja66UmnUeqd9CF5oU9e3dGUnc",
  "key3": "4WmfCzBhzVDGzobuwNYbUmFq2yiBRnxiiszKNCno5n2Dghzt3gCoK7tSppvYAAqQv1HEF4VpWpP2ukLmDJpF2N54",
  "key4": "eThUjYhpbh4qpspvPunRktqf3AutPn26YMCCNbtPoSuGoUipDd2XeCfRq3Ta7DfyqxhqcFscGTaWwJi6ir6Kcp1",
  "key5": "An4CUCsM2AmH7eUNuMMtAZcZYonSP9mBm4kjGWysfubm5E3oiMwy3GdFNB6AwkMRt2rfS76BdCD7vDuJw78CprU",
  "key6": "3mRM5ZALmQd3x4rpaCRLrTveBgKLrVCe2qKsYcdjhyJsaQxuTqWSnzCPcfRNjWmz4rNEW7yTpHh1VpZL7TrG5PpZ",
  "key7": "4BSvgga5PKZFCXDJYyFDtjoUCvSP8WZeASkKWWPTLUUtnLhf8pMZ8qpB9wruqqhSRgPi6F7dP2aUo3XuBdRnkMXT",
  "key8": "gFQ7RZLNBignocEY9MDBKxJ2zKNfFcJoWJ5QwFE7JRMYSMMxGyrX8YC8duw2DDTbAd5esRRrtcgs32A4n69KiUC",
  "key9": "en3QFoPz9zDHqhJd8GfoeLAW2zs1sqehKxBZn8b9VtvnisbQAEdaQsKFo4czS1W7fR35Rh4DGY2Mphe3BRfML9j",
  "key10": "4xq6y5ihWEzXA8SxLEZPYrf2ZTnWZN7GLrRQow3M6tg2hs52yY2KpTVrRHDpmk1mrxkbGax9FMRQH4igz4dxbDKh",
  "key11": "5mTerz7KdUVqW6okXk6TxVCQswxpWen1NomHrhyzVDphif2ax3ShvwvmV9xtN5scwXjBi1fkXptDrsi2XQW5YgFq",
  "key12": "2MGh9ASfpYWdXyzYej6jBCGcnbW1WYSR26TGzFLnAxgWCCbtwuhMVzAKKR3m5fupFVwLSv4cRdcTAbxUZZoC2gj9",
  "key13": "2YcBSstHb1NAtMbDqzconAdpkS135cJnAZwqCUXrMPxywpqUE7VtobfmDrBzyQLdMRr7ftAxAnsLwHu7dNEM2pRU",
  "key14": "4dwdUKNk4ANZoD2JrrAcq2WdHgBHN9feS6zpa8UA4dEnsV1NFABmb1ZWtD8YgAP4Lnv3fMxuFqvWdjkCfzuu535i",
  "key15": "3U9aLVBD8279iiEwpXH5sSPG19XSrLMMuXhCayfThmoNy2TNDgxEDNoXz5aGwAKZdWCSnYAWrmqJHMpRfAFFaBqM",
  "key16": "2gAjevc8624mBDp59g7T4eB72TmfrtNqC4pcLNkuxDagjQ8nux92fUEgY5ov17bPsBMAySbwEnGxepqzEHtrjWyQ",
  "key17": "45YqaoszsEx8NNpRYV6yoFQodj1VL2ZjkfUhMrgRjQeRXEyARV2X9rqtjT2YVvYLxMi4a6fmLe7wybksXcCKf5Nv",
  "key18": "5u3E68FkkoFfxNBdVY4c59hcAJtqUFjoaNT47F9gQz1KHzkH5TgEwgB4uAfZFCbjgbLijssE1w3oN7TAW1m3vxuF",
  "key19": "5isXAfY1B21ffLZRuUR48YdJLx5UooN84v4azmqE2k1fib4oPiirqwgAYuAGV2ecFA1Kj76BikXSZv8f6rsJnanQ",
  "key20": "47SS9TYDGeT9h21zDqr1Tz3CHMcu6GgZGz6ooDdrCQ9orNCviHWwFrk6L6oYV7qboza1noNvEkGw5S6oWBvoDdd1",
  "key21": "3sDyHdW9thw24tQ6tGyTRgd4ULB5TmCjByffKBpqNYYHWoLfDpVy4fZAbkRsGcCBrdeY2wtSeGVLur5YbmdHTo1x",
  "key22": "5JYjEpvcc1dyNkVJEuzECHD8pyFWJaNUA9XzkaJfdPmoiVDTFche94JNtx84oLoiH8dQzXsYu6kCLJTX5fjQ4wRy",
  "key23": "2BRMEWMKt4J8gHvUUUNtTEezwnWc6k9Av3f4uVqu8VfJzi6QhQHZgqcA2fATM2HX3urBc6qA5KCYMtq3pr6yE1qD",
  "key24": "2DXFXHKHG3kJrYXkdhJZDRaZkphzwVdGfoA4K5ewnmiEgRsNbFNY8m5tzwiEq7jb9jQrcsznWTXK3UvTNYNThZwx",
  "key25": "4wimKwMsD2AkpQcDUGpNUZd1FiZeMEUH1GxuXCv5dJsyCwJhYY7SAg4DtudDvDC1CxhfLUL9g5pgcbUvZ6Nv5CC7",
  "key26": "3HRaWq6sxb47RpwtSwa6r9rYsQHtTkNSFRP8JZnKKpcDXVybo5txKtW4ZNQe8uyQfZWUSpsMpDStjasdeYLmt5T",
  "key27": "2RKp2WoYyGYp9atn6c2Cc9V33YUHSnQp4HZFuUyMQVizjk8AHcCqxuj9668G5YCaT15FGUw4d3o2gYCzfLeXt96u",
  "key28": "3DaTFgxq3JvMbepmBGWgCKQhMT3UYQD3qLFiHbpADXPxazCFzTDLwpUMu52TgdD182tSubeoe5Jc5ykdRcXuA6MG",
  "key29": "3DKUGQG8A9dWhcYNjd8ZcwUBLXXnn68gFT3nfEERJaTWnHrHxy3TTgVLq6f76pnK7ELLqbcFvQx3AXtErrSe1o1y",
  "key30": "2ub9uyqurzcHbcbojWUsv4VCueJFtWBJQ3zqAnaQkFcAtJVLtRtHZ2nR9p3KGKZ1D9XBCGrRwptnfsx43oiXgaoW"
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
