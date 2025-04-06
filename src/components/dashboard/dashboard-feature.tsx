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
    "3Zv6wPJfKanuiPgz88fm8T6cZt39ux23BKTJxQPwGek3xUfzPDZjcZjwL483WU6jQzV4VyC1F43SwHPMXjSjMUg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAqfZHHv4T7RqNKUR8EHvvc2hgMpEhcGkFuMHnb9xjBLPMmZumpCPoVV53RchWeNgepHKjNznk4uR8FYq43eMmx",
  "key1": "67dFEt9ryLFGpyAeKFi2EntiWre2CBcwcMJGBU8vEehYxM3zBeZiobtYkPagmEATRfppgToAH4yRq3UmhoEaJyw8",
  "key2": "4Lp8gLmjBKGhQgvEGDe3JxnGVCvRwQnBVvVS4CMa1rQBHk7DPRpahbu8VdK853powZs9Aaan52bybWEHjGhsQqpX",
  "key3": "3sdiXXZBzipj5KnLukDYSRPugthS7KbqUQWEqmZMWkMLGkFPZsJKHPwU9xXuSRTu7VXbbcsgkvEVqJHGXCafT2NS",
  "key4": "ZVxTwzFPQSwWhqcu7XbVzvMVNHGiPJcaxW8MpPxNDZ2GrmyjSwvJ2hQ9VXQi48DNGxMyYWDayqrpdX6taM7hrR6",
  "key5": "5Am3kTX4c8chxL3yLQvvUW6GoTzsms8fG1bQWL5oxj4yB6uvu39JLJfwERreeDPHHcSHQjHCcXswA83g1jp5vDTf",
  "key6": "35Z9ykJYXEopqtN62E2H9yEkHmUjfYJTC2as1oVw5Np7CpVD7W9FA4v2r6AFLfPFp8ZAUHJ5Hn29fVecRADd3tBF",
  "key7": "4cV5tXMLos4JqRcQpkUsMi4RB6Khbwqux5dKwyFnewEFogGTotD2HSxENSuxQTTKcXeinPJZUcbR7C6NuY9joG8j",
  "key8": "2kMg9DB9wobsAXVdxQqugPD5d79LaixCHXQ4DUCD4V1T74hSHn4igyRrnTLdRWXoKYnfnmsk8ZjScuk7V16Vfxhr",
  "key9": "2sb3rnYfyetFUpKXZeyX6f18hZjDfTfMq5st6Db6KX54rGbRmujBtck5co5jNtfiDJbyw9DQ3JraJ6q6qRsJfJZy",
  "key10": "4XHMFZvUEHMJ4UnmDRvfNnkb9TeANDMY8bLzrn7YMgAWD4r2a6cmzoy4k1NPEDT8jGnvFZtb5WmhJyBHKckwBa7V",
  "key11": "8zMWAhfV8BDW43p9sJuWNSNByxtX2JMNAs1NnaPYrZDLNgpMNgCezCYJvxh2AuzDe9i3szddiuCvL9Amg8aCwVH",
  "key12": "3Pf9kNbSKhnmqndgezU2BqrXtupxtALuxpUd6oLAZyjPscjatfCPjqe8ekULfxDedEbEDFECUnhUns2a97QCA9Lg",
  "key13": "P13M34YZYx4Amj5VZTHhdPspNyExXwBa4yjoHjJYrcxzqpNvGKrUm8Jm65hcLgoqyTuDzWTxDaysv7MgEFHgUWC",
  "key14": "4nGwyHSHMVQTsL1jA8AqSV3fCSZKA6ZKvhVRqtmLXocVPEZbKGRasjHyM1hc7tUsURo9ojwDtoStEUVaenCwzqg",
  "key15": "4RDiycvxik782qKw2dr3CjKmeYzqZWPtc4Upa4jaUf4LSPD1ssRTArtPxK5kXLxiY2jKB8z6yZip55ekaHsXpzge",
  "key16": "5DcYo57u13hJx3hmeMjG77NGGKafzcMu6mu972Xm7PBhHpSbHavK4HidbHGwDAV8BbQMWo4RsqGQKRXt18Cdq9Vv",
  "key17": "nwjbPgQbx8VnLfyTBqM4aL9u5smyYZ76vrZZwjwMsP74HZfxJgteeCcsYfKj7i4d9wKNDVoKgxcgTsPmgDQLFno",
  "key18": "3KofnUnsfLLBQLExSnNmo3AGVBviCN6w7kwgn89PkYkD9epaqymQN5rQJ5gnS72bdRCJfCPviYbGJHWyxdrRp17o",
  "key19": "5WdfR4nmjVWJdwJvP2tW9LxV3W1ZhrK7MR6rx2xG7DLkNSieBzrmxs4MfQKMSr9qF5YHcEj7U6UZhfuTu8g92GXj",
  "key20": "nbyYPZ1h5Wcy5uqqWS4CgwnM2EB3z6ecDe7TML1qeYPcLKXMUgvGEuPibnzPb3D8a6YGsioXgdw3DWKJE2hkKvP",
  "key21": "C5o8yDS4t2KoBeJh7xiCs3CSAiFDhWmFwrkHKPVT4gjLGRHZKGcwst8VrQrbVp1MhriegKTb6x9oNDuk2zaGYXb",
  "key22": "5VL8EJ6LtnMFirt2RZz1tb8c3KQj2tdAqC1LMrDAqoDuQFbnLixg7FjzdVRotvjxgcoQZ8B3JaWjpEUeUiQn1uUm",
  "key23": "4gMvpEQDSxJtNQUZ3V9R3t4tcRrJYLCgvnd6i1XNcrt57kpR1Hdwm4xV3mgoBxSVrTf4vTuM6ViE842qE9HUBw7D",
  "key24": "4k1a5q6ePnStc6mMYdnVX9DK184LmLTzXT4SNUNVCx1AfgdtQA1TF8Lq2gbzTuNxxU4Edd8y89ztqqDngBLzscxV",
  "key25": "5NQPwtaG6E7CdueWb8HozhhYn4U3oBrjqNjK5G8yGaxDcRsY6nh59o8cMqFFCpVxCUZ6hFX3e246pTyGCP6VPzEe",
  "key26": "21khbczghtNEe4yHpKiZk6qR4vaZeFNLEDNnzgka48mCckHeo8SvZ6jcFUYxaPVy5gTYY22toPVNiCAPxMFQCQAM"
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
