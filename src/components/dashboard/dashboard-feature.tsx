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
    "2sLoRt8xy1vVp3nQAQW4rYuy5eScEWk571yuA5m2WQ8o2nRKZGtzyTU1C63SCUUk4dSQUe4SPJXquoU53aNw3ocp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uTa2MqmkPt6QYVRENHY2H5gGPFg1rzRtuukBXeCXHfkbJ2kgwUNo8TwMKJV9yK9WLPp4LX1w9whtrUJTi1zf1mk",
  "key1": "4WC89V1zGhAEDsgbebeMKyPTeB5uFA68rzrCwjBpqCeRz6U3tEnZAUfwXYjffiT8HwqPXkjmSnzZw9aYAYab7NeQ",
  "key2": "5QmiqjLtRbGqK7cyFfh8ss7yy9VEtbDeyjSni8hc5J437654GVmvGDcCmDR2fn8H56UUAjHhuR2ChkeSxMd8BnH1",
  "key3": "22MDsuSDHySxKrWgSxJGw32AkJ4yGaFa7ugqrt8owuBEwMVU3M7gFbtpikBBCTA9hCA3watNbNGEFHdAUMdfNsYR",
  "key4": "26Zb2EdP5C2JxjWHiXCCVcXmpKH4u1tJCZUa8SZzxxj1AhUnsf52DPUdxwA1FJiWpGR8B3CPRL9mgZMA9e8igqwS",
  "key5": "3zaoqYAd24aVsbeFwLXr88md35YuDDoKGX848yv9VRrqC1G3JhXPyD4jqeZZz8o6mfKkgNhA3ooXWWcY676mFYdt",
  "key6": "NPM5hkj1S3ekiUUwLMkzVkATxuikdoQr1XDNf7SB4CsgJMYeTUkEVRUNZf6oz2k4MQYB1q5f358rB7tJo5EMmYr",
  "key7": "3ByvAtbAUhQdTTW1Le98S5J3QshAEDkuDY7WZCo2YEsSeoEM8c7MHzdYZkrVWjv7a6WxRqqoTTM9Tbd681YLMgSD",
  "key8": "QWd89VckWJ6rpXMSEh9KLcLbCGrNpcWoJmKk2mZybYBpF35DDZ3qsoSSryk9vqcLoNz4fqkTKVADLpuYLafmE66",
  "key9": "3uCabs2RirDSuxprxGviQbgqc8GB9edf7zNRGPgPLdayu9S3L5GcHBCKrSzfrG3xRT2AbvcN5a3ibHA4rYo53kvi",
  "key10": "2rHSSakA7eVYGfAJrzfrmSsEmvmzZYZpyV1WaqD3iK16dL177hCBjgMGMpr8cQ9aSoL62WMBbJK5nD1Lde9QNpfG",
  "key11": "2W8vVGNUiVe14GrTWosDiEHwBE3kXWZYTFGbstKhf3qGXzm5c5zrbjmEAoXtFTbv7vTf3nUsc44dYCCM43xxtKJK",
  "key12": "3TNNJJEyF41ETqvaSqsGQs3FgRuyaDpoCyL3gn6L6b8CEur6u2yMogzf5BTWKWEm1SoavGCjG1rx47zufeKeuEan",
  "key13": "WQwSKswSQeKtWDbC1kSTfKRmDZm5hC3Dgo2nLC6NeSYL5x8wcoykuqgdP4UFs81XgGayrTJPXuipC4PmNywWcdE",
  "key14": "36TNL3BaFEjK5m3T9Yo4pBXPP6iVkW5teZpmPfgMZBPhXDpVu96nVnv1U3BKmknaseiS32BBLbEaxDkzddvDUEmd",
  "key15": "3kKF4zzAN94kLkZkGua3avJPceaKMwc6wBiHGBjGz2YWsd9vurvD9sSWUdZMF3JCaBppVXsfTgsTGRYZJXdKfDB9",
  "key16": "317V7wEnZwbETKxb82PxzEFqEpABvvQJZ7fZc3qFFSYWMpmVye8vUhzxPPGgANsZEpauDtQG7ZEgzxDLpRuY8xPd",
  "key17": "5BixA9Rf9wHTC6jLXe82pyusKPQ9o4XYLoHJ6kLQLxTVD9JxxYANMFRvS43cfVcEA5uybN9ioLQKyrWBB3ibdEES",
  "key18": "49JvkxTtQ5e4FtBkWZPvcgKjyKR3GfN84MEHddmwi4zTDhTaiDJCMqLw4xq9Jq9kLF2ERZfUbp4h1VEwJkriusqn",
  "key19": "4vcoFYWmfwNSPMgi9Jg4JCteGRFmATRoZ1u9FuXE6AFW661Zs3sqPYnBgTDsf5Q16bmcvYtVARgYWVHZVd2nmkeW",
  "key20": "4ZHHkJ7SoWdLU3aehbz2tp3pWQAs5gj4pqnMGEz5irnk3owbxqc5kESBYjSAL7kLHnTHL4EfwxhnBRikb2DHEJPg",
  "key21": "4K8TT4YJDs7T3ptC6XExvw7mvXR92uzqo36vhkQMFzZbrE3FzsJaeWZY7bX3M4tKZN5QheQ5NqP5aEW2uovyjNpU",
  "key22": "4EZo2if9MPStH6znBZRUzgtPeFnmWDvwZ3oekqyk7aEtRKSD3oa3hgzha4hkHZM3KLiBT4aouvfXKXD5vPPMFyMn",
  "key23": "3zLtHRvhiHsFQjWw98Twy7hUbv3CHfm5aED6yuu1WxzLZgE89V6YuBk53nfBG6SmmDQ8wFaQssoa3R54fphCp6cr",
  "key24": "5YcajyrjDAonzx35CC77vfwuBmrdrEJYpdRNvb3uhDNhzYGK42ENf7UNDAHEkVQGu9ZvhCLx7XXdKuNHx6P1YES9",
  "key25": "oebixcigf3VGg6tuGpTKKnYnhrzS3ThyjsfEkf2GhsqgzwD12MVQQwVXtx7LbEBKnEz3EqgUTNbEcNrdSG2813G",
  "key26": "dni4fSmRTWvgmx1TP5yZ4soWbWL77Z3ca49zs9U6nGHoex64MUVk5Wz3EUWhixsSZnwhCLS6h4gA73aZV9iUmai"
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
