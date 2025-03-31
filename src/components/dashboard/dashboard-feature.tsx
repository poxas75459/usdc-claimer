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
    "kfpnnhVaJyJipyuWX1f1z1x8pFYSEHtdw6ZNPFmoxWvEXsXkxoqNPimhCdUww9SkRgNar1XUf6hVSPwumtgtixj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewCFmJvQeGKLJtsWNVg693nteVwZQQvoaB1uxjcpvEQ8hcgqroJsD4XNqCBu11ek7jtNw2sUsooJPs9wiykUUke",
  "key1": "62kf1Zb1q94MPxwvH2yNrQVtBMAp45E99Xv69EXC6aQLkzxXPciX9YYLJyBR6saNfaoyknfo42WbGJxZQUud8qKX",
  "key2": "4hCuZsxzzNVvTCmtuqQ2kkFErdV8qi5zjUGJgKAMgzzFDSTR3NLYnT3dkMywQo5RexAJsANgy7MwQsjCt1vzzLU7",
  "key3": "4jpVk8eZS7USL82h7ZTCzMW2KBKv7CmmHd76aToxQTPNbbPqx1aE9M2rLMDYrVzJKARZRuG7wzAmFi8suTbWUxHk",
  "key4": "2mND7VAfFZ775wuPgcQybZHXE55HEeUEhLYtzvoCvRoiY8E9LrqviF2qvEn1oyxvt1dozdDFVKETfvwC3HbvG9GP",
  "key5": "5qEFHKSYqkn1ByYAmmNjhXQpdwv19jMiE2e5xEk5eQGWU5Ah5zS32mp4ob66wnLpBkPyZuTyeU21BMXyeYvdLkdp",
  "key6": "5SJZcJwygkqP1DYkfyq7RXzMhVDSLzJfMPBvSv3SL5F7bsZFRTQWywS65QFR5kKnaGpqqkf36ydtAyZozmLz7AAM",
  "key7": "qJwCdPbAHDVpwGjGtQjUzuj9ngD4N4Et3KHJnDrbso1YDFSCTEf2jkMmRyfqbThy2twQdXVewevKvg5UWFZ1ASe",
  "key8": "2GPgB6bD7LCFaGjd7JV7JkEWDJr7tEqyENyN9wQUXsXM7tkzsBiE8q7PyUei5Mb7oHTUpyHRdhdjZQhMPwuXtq9i",
  "key9": "2YaF4T4RJ8hj6EkCdpE4Z67f4hi5185BfqrQfGr9q8nnQnaYEvFi9kG4VpEFv87paZSLqH2oXDeJTTGMUMF78iAD",
  "key10": "Dt2srMR9UwPsfMUEcggdLFjc2CGr1w7ffPZJdeqNYcoog8rWa2ak2RAiESCPKzis16ChQYV3JWxSKuza5b4SwTC",
  "key11": "z9sLCYk4TqVUgRSKg8TuNfREDtjqrtXHoGuAXNTyhgMpXaTqKi2cg2ZAF2zRRc7croujSFnhiYRAak7zssSEG8P",
  "key12": "5HarjLXGCfMasWqd5TyH8stMSB64EBih98VuWEKQgfezuWUNEAPXHCfPdkXaRRavkZKA6Ca6VSVvA5WCSydEVnok",
  "key13": "MmMm4h9aS8xRmY4GYo5UoHfBiQpXBqCauNbnDusWRPrFZYVdq471JcKXsy22JgoabPBMsA2NUmdsDAsgFR9uyR8",
  "key14": "24EDv3vWMVcAdqabVJYFwEHf7yjfYdrwiut2mv54kfYRycoZRZg7w1VVTo6J9hZ4b64Unt4PUMdVVuWf8yvJwV4c",
  "key15": "5oZSp3edNyqs2t8d3fboFc2zteveUSWKXmZhaVCzaByiWZVTtzYTDZLTkrHFbemQX4FGHjcqZ4WmZ67jr3aUEXUd",
  "key16": "4MZ2C3WRApFfUvMeE827sBE3ajVrESivNF4wmBTaeNYpXHNRUisv22Wg41usNH4doszfZxcNGn9o7b53rxP5RxmP",
  "key17": "5aRp3fBMnRxSJX9xDbnUtyNfytWZpTfTLF5NwLVWiEHGdkbV9s7fjoCNPUyRnfPXpde113tvpLiyqeuCiaAC3SoC",
  "key18": "iEzE1jZHo3P3FJ8AGtyxTRb5tfQSc45GsN66x9qMCrmhxKwFyUV1eb3rBj9zHb48TFj3mv5qWYNUaC3NcyHZieX",
  "key19": "2DzowJnK8piMef8k11pJ4TowZVDp5JUjdaZrb1GtHPyZyu4nnSr6ipHArdhtX2Sy9MiWqRgJnfjKiPfyH9n9B3re",
  "key20": "5pHitcVVcwrgwQrnMzU7tVMdpojjscUPqRL3Ech6nKp3qkkMkHzi51XRVzQ7PA1omBWZs4tnsoNnfkN1abRWsk68",
  "key21": "4cpTBQGLZ3qLsRhYaodgBwzPbi7curYYfrwJuDRM4ysKDbwQ62NQtYmorcsev5GokkfeDXBs1otfoYfWnGJK1LXJ",
  "key22": "4kafxHXXn6VfHxNwPnYEqK4Bnu5aUsZkN7Ge59Kc4RWuUUwxYiLMhZiDNfk7zxZRPUAaZDKuZ7KuLTpu4q13r14m",
  "key23": "25gGtGrGVtYkd6UbTivfs63mAkLk6f2CisPSMd9hankgxhUgppJ7NR3aTSWR32Cwia6bHDkWUtwAfNaKph9vp7hF",
  "key24": "2fX1bahSj8RiPEXQLVrZ6VVSvsGe8HjnrGwtNgRxmJePd9rK6aQ7reuvLWuZSJr76fEvRM2UmWPoswghiCi4YSLJ",
  "key25": "28axNVvBL1KUGDbB52rVzfhjM5WkdTkvQATx8hetyDzVcZyLdgdt69Bms8ZNzc1ZGP1pdzTUps9oxSaf5Ma8C5Gc",
  "key26": "2kBQA3UEgAtCqGBrn9GEskgmenvjpcEm5ANoKaUxuWPjP8dpPWaPtJfM6JCeEhre2u8AWveFbZoZAzz9GcuiPvzD",
  "key27": "9EKuTwKvhzYyBmb66xHJroL6iXfpLx6d24W4sroBoMERqmc3XiDnTH8jbvodX4AQcS6Qi3jVTsvojcHtDRZo9p4",
  "key28": "2jGzBKF47pYKxrgveJJubSkXrqTdM7EzWQSPPszGmn19i9yDJiYugxPkpTU3H6k3R48zDovHar4vEMQhJxyNoxD9",
  "key29": "4KPJcSKooHzFWotjo6Yt8Uv5nXHskMu55P4Zu1LGh8bXVtcKztjdUCXpKA4H3s88JJQrVRM28EWZ9geT2YbdaRNv",
  "key30": "4geNNqmLjxe6tBC1JmN9vcZsjok9CVU6yMxfokMvroUZVjzUmknB4dzRPs6vT99TWNyGs5WG48K7kGmDN4biVyXZ",
  "key31": "45hAy7duXJaR5r5ipzK83LrtpyLV4WN7P1VUYejwCsLXiCvrdvVZwiBXhA4XscVTKqNdduFc1CrQ5indXGk5kLmF",
  "key32": "53xE6NPrpy1GKbxDFmpHyMe88KpxYEoHcJJx5GBvcKgLtZEVDhjpCmfAS4EJb84pRPkBtfkKbo5B2nDn1yvgBoLn"
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
