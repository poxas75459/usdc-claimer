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
    "4NWVP7MJeqL7zVc9uAqH6xRnwzJybQrB9yECn3qRujqPyA7ivkNr3vAszmk1jtW8We64JmWz1iWDUVRGabTcUNsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cBhrSykQgQFEw5NFeDAom6yZS1HMC5xumgCYsK4YVqbuSfCcW128on9Lctv6xMnFShSjxXP423wj24cVqTqAXv",
  "key1": "3MbCJGxVhy8S1PeShsKwEvvNirAj7tFjPVtM9qV83xyixerDtew63uAGsRpSVh8z479v9hNnpbzvKx6Gn12i3SqK",
  "key2": "67pqoMpwZ2EhozRCCzTUNwnyUzZPYTvX6PrJEvHCvx5h5A8KVUzRmpznrSRFUFpLbexgFvaqAyfmhY2mrHetAss9",
  "key3": "2fTwKNnGZGkpJH2PNApTszBrkZ3yS83ZSz8Dm4tJpvow2UM6bpKKbZWMqmhM9XMFBuJaAhhnNVFrcYUgYtp4RZvF",
  "key4": "5JrprJ8JfFKbrqD2HQ69wV7rb1A3fbbzWfFf7uYHmexVH7BRkriPjZEwZZGz1Q4uQMdmhnyiZWLugobHoLp32LJS",
  "key5": "3b7VdhqtHVfKHiav851NmkasrLeEWhpFduJGj444PTvgvKULWJ4dtR972aTeEQhan1wGftm2xgR4ugbMHzAbzTZQ",
  "key6": "22J7XskHpCqSVASCumNuiqjkyGJccJytaYcYybSaF3aWhvV7pcHe7HjBMVHWSGUSmwgFMGKKQoJ9dQBAH2qRHAxk",
  "key7": "5qQD4CssyNQAJqas2GZy88H6ztjAq8mNa3KTsFxZi1aLRSM49SsQRurfb6kEiexpmFjj2Hk65QAxdodTwCN7Txxu",
  "key8": "xr8gTgdqza34aGeMcUnbJfn3S4SLbwQuzz61Ah2NT3XxLs65zymzLiTrUJ1YU5HSGBg6ENXHENkU2PZU79bNDZv",
  "key9": "BgLQbsPR4TNJZwhg5F7gFVkh55pcC71X4vHdnydsDEJiXJKc61p81pKMrmu5p6phtfvhRsFuWwVoafoEEugput5",
  "key10": "4zjNbWNRjJjgVxWa4WhcwoYjnhFTRhxRSJfJa4f6tvVKMqoonhmR8XMB4SaW2R15CYuLQuQT6ueU3xtTR7j5vrrL",
  "key11": "idFVKsJMAEvp8DPwDwPYe6wozkSg1QwaWzH6hG85JCEo6e9kHweLPBB7R7JAVBBmAcsgtrWm3y4CgmX3mFqnEEz",
  "key12": "Fq9vvjZk3QqVUcZUX2SzCgJXPNF5CXeKqb73PCK1JuhuGuP8JJJKcdPwHwoTWYH6R6CYf6FaZDuWTqf5vMWghrA",
  "key13": "4Gt1KQ916emCS3EhqPG4Dr7hQ9JKNjhzRgaBA4PG8M8P7crqkKjbBzQKFiiEg17yG9NnQVppxUHRyic4Ra1nym4v",
  "key14": "5xCyM7Dd5gUbMnopAMFoqYLXs2E9F9MWrC78xortR1RPGEViHb842Kgmn7fTuTdcyNSbFDjwen29bfXLKPpKDYY1",
  "key15": "44rebrEuSJMEDugjKZzstQzT4qbpwwjsNpf3A6cyPfefnwHT7Pfo7cv3PixwVSungHwh5Ygr956vD7N1jP1LQDDR",
  "key16": "PMWYFY9uHEfSPvMjZyzgCutnEcYdQtPSrAWnzQcihiyatUCu34ZPgihF381ChPX7Xg73ga7kMRiF2iAbCE2LsL6",
  "key17": "5UXEzLRbV3Yo7HLkdifWmjuy8xFm5zLmvD4FYWA32S3gx5gCqrcjZsxEbyzbXfRtAx73B8m5pXUadqhG6p6jTGYx",
  "key18": "2vBiPhZJzEvn9Gd82k4Cu1PjqmY7Efcu7K4m1qGCrArfuj3BtsKHpfJ9rVDmCKeBrT1G5368oJ7NXm9bu15RZf9z",
  "key19": "5DgJCRgDxML3Nm29TxeXifxL5pSrZASBeqLoaezcjYgtHcehhGNq3EaJAwcrmVV41HbvEdaTkjbG156RhBV6SQv8",
  "key20": "WZ8oxt2tmzsdu5ysoDhcLePKPqQURGHZiCin2ExoJaK9Na1injvCqARsGWDWLhgmaNrnZQDoLjUZh3VqfkJhans",
  "key21": "2YAgmPZvk7JwDdfd7u9QPWfdMLqyG8iUFd7pdyFunMsYFsEwMcwNsT4htRUmEzqTzZRiqDGBwfVXBHbS14CBAUpY",
  "key22": "4LMuz7AJaKLMXjXh67Dc7n6PRzHV8WS3RGbUafRKbmJgdHFv9oEMbJG8W35RqceKmwJ4xcY3odZJ6WQQDJL5DSj9",
  "key23": "4LzRdpaagbZE1zHNgKce7H3DczuLcUi8eKd1wQnF9ZYXgw2WUHrGUR7NS7cWHbobx98X5jiNoDUgiFZJmQnojkkb",
  "key24": "4KSghE7LAj3zZrcNxwnA9h3Yhim7xYstq4Rpj5LB12vWngaBoPxogd9vBwjGCDy5JP35HveN9V7HRyxExoNzSP9g"
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
