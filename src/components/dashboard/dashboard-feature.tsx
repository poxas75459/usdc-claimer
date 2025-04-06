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
    "4SFJgwKF5m1FFjWwginaCWGySY3D1Ssp4hLNMuryPkWurzRXM4YKwfGwQYUdQkUaPu5TUwMypZkZdxZnZAzrB9uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6JN6kibX54eztmumuMUR2Bd9AcQiaGZmrYLpHYMpraf36Hf6ArUjEeb3WYWPxy1sb44qMLDgXJLbNEAzZWokJ2",
  "key1": "3S2XWwgLZim7MkDjMMRZzXVhn4SurdmsH8Jt7HS2Y1vcZTPKBb5EpmoUyoPSxDqRTPpQECjHs9fefttn6V35oKeb",
  "key2": "5MNU8nVtXqbuozynEnAeNMLBpFh2ovFmJMoe64gRnYeUs38D6QwAPEAYDrirRzNfxMkggmftE7Szn35U4ngX3S9q",
  "key3": "4GgqFrWbrGkcevJ99bCTZQeB8cYuYjXt6Ais1k9SWs96SecBk9XbXYR1LPMdniKRoEnEFH8a5w6r29pRtS44NfRM",
  "key4": "2Jf7YHZxh7LjTg4q5Ly1BGNSW6px18upATuqMSyc8PBeUK44XahYPNWCZuqedAAqfDeJhgboNUrVRpHBtD9QvLf",
  "key5": "5o5G6jkZqpdRcve7a78wB1Rz7dAU2ZNsfKRtCcwXMVD7ThED7on7fzgsmfCewdnCmkT13NCr4GLgNcPDPX57nUrJ",
  "key6": "3TXNpjQUDoavs7wA98sAmxZ3fYFi6xB9mee4SRafzJyUHX4SW4ED2PtHY7RqRS7Yt3qrP2hfnAsbK2jctfNYVNxH",
  "key7": "4HQV6dPHUjZ9iNQX4NTbg4UZg61pu718qtaKkpsG8rSt7262cXEB5UTMXVT8RkcMtbyvNKGfBjFVJtaVqQhibkrc",
  "key8": "4TT7UvXkUaXWW96RAsRHiN5AjSk1XZNqXkYBvdejQrJMaYAGa5MfntWp7C2KrZxR17B9ypkVD3Md2umqPn7PZSDD",
  "key9": "2Ny8rNvvPhoNYQMnrFrJnQisMDkhGVTkcEVXRmRLrbKJ6TS9L4xnzjiWMTWoUFFUBPJ4SZJ2icgJTfESJBkrwRDi",
  "key10": "35BhRPJFxPv8e4SrmYuHitJkaw5PFG7S1jRgNfCmHrKV3ekDtFZbv6n7HyKuz3Cx97WxqNiXH3gXQMbAZN7ERejo",
  "key11": "v7obfbSvoxHzomiapSCnE4qwj7BLhywWzWeTijQJmBRxuHKhWpV2tsxcpaWzBUDpMS6txxhMyXvUG4eLYpmQa5P",
  "key12": "3ThLttyVeYReaK2L5NALh3UnN8oiFXe1nY2DuNYZqAdqyn1SN6zSQ5thyMz8TiQS9GNwJD6XAWzSNBvv9PnmJ2kj",
  "key13": "4JKFt8Y9bEFpttv3NkJYxUDYGJW9fAbdXwFz4mv9hRoEfN5JRiinwcwtrwzV8p8jAxqLhB26Dt7ExH4dxqHZvhFJ",
  "key14": "2MWdaB7GetTmPKtptYWP93Bm2C1Edfd7ZQM6B6afEDW33j8U78uiFaNyHsDH5p2b6udk2NTbWtCvnwSC4DqkHZ5R",
  "key15": "2CJUx5kXKuj6Kv3nKMRyYX7EruWd7rPef8pCVLDu2H1krvbWMfsDzhc5BxRZA4kmpqYfmT2NaQNYbjLQuKpt8Ji5",
  "key16": "2YoThw71BjMcjwc54CkeadZzXZv6bH8zsskdwKbb6mZYFjPotQ3KnFau6rTvp2nqwprL7amAf7MU1aDWLxDyU2kR",
  "key17": "35g9vScFBKFLyKZDheTJ71bWM9hpys3LuoaH1FdujtgS9Ts25HzqaiLLEKwErCJqYRMYRiqM4FSXBSpnPtvGbou2",
  "key18": "SQ2hw1orVzMf2w6GG1GNpJvjvFQeG4L81uzirmJ1Ur1ckJ9TzXVpouM864jRt1kY5DNWo8bTMbMg7qo6FE2UgwV",
  "key19": "3Eb5egtUUKQf67Yer1wdREaGH3jsoebQzzmoy86fLwLR2XFUhdvHJyTyYCuKmvQKiNNJh77GwakvT49rGULTMVJq",
  "key20": "62vwnbZmphQeWE8BfWGfjE56W2QMuy3Jxhhu1Rz7JTEYKwZLXeKarjQn7tgRbZaY7JG7K7yfkq92jUuJmDVmQJzr",
  "key21": "5rDG8texrbS2zb5YoP1zEPVdB4R1UtAJyAjL5H3dMMpAM7fK4K6Hsy5wkMyvGhH8kZQEttWmvSprnifK8epyoUbi",
  "key22": "4Yp8k9sd42p22KWNJE7PY8f8UjT84bgVH2juUZP6Hh7XDsppaNtt3hpoSZeZ5tsq2Pd4NzWbb7qyC2UhGaaRkSY5",
  "key23": "UwWP8B3TLxpNiPuruQKy3FJKoFcqi1Ui6jxcvKCuN2wdVsPbZr87RVYRAmVMj3n3V3uoZJtyE9JQxBm3CHnjc2V",
  "key24": "3wRfeSHZzhvdqDu8SCmNN52ewrPZhqKga18BKcG3isjKCWJKsn8CW5V3jejb91d3bfZazAkVAkjkqMQakE1Gbt7H",
  "key25": "5XergQTneZpDaKTkAxVjadXYWKMWL3V7k7PqxULR2m554ayJnZ6hcrs1m336oe35JAFJPyar3Qftab5mbDtexHc2",
  "key26": "5y5xEip6HPF7GMpoqvhN6g68MeU2TTBfNmmMYXEJQijhNg3NYUzbz7YWo6bDFPq81wGGvWz8j6JV58zwjZ99Pccy",
  "key27": "46grfqcqMugWEpgjoudEmaZNTyD8BQLveTWr9NZQMdaytXw3Bn7EUZt5eJMyJZtiD95B7iJXXG2JJFehXFyn1D9M",
  "key28": "3LaP1MxivN8KQsqzJNBbT8rXUpGyw7NfDMvas41Kt6DNEKcHEPYCAPa8mta9pG49NrthLhhT2m6U5QzGhgCEUGy1",
  "key29": "4CdSWV5sfTC6hodsXFqzecsK7EWrVYHYFioqk84Qee773FXRXnCwq73nmpA5Pc8zhMYHyQ2TuWNhEacfxU8vfHa6",
  "key30": "55ULjE9x8YJH1FuEgCap3fTkr6FaqXDH36f4j4S13R2KHN7PG4WKiF9P8MeFJFyhZ3EB8ACWgX5LYt5dvCreTxb"
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
