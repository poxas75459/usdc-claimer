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
    "4nx5kg7z15b267XAgxHCaEG9Hjj3Gsic2z9rBez2ifG7kfB34FPi8DCmbUknNKXcaDBFMLook8kU2Wh9M8HumYuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HF3jCgvNesPWFkmqq8NVWD37VhQxheATZv6VTfNgdr4yu7eJGnS5BmKbvFZJg2u3MLzsDNus6swyA6VnTBPVhEC",
  "key1": "5vJxK2Ph3zjt54jr84Ywp98Y1s1n4KLxRTJtZAFyeZLQzK5yVaxarc39zTNjonaKL8k51GnEozU8Gft4bUNsg6Nb",
  "key2": "4Ry4PNyNPCmdkr397iAvjTZeqRRpzC1TCZLpfizqjcMcgRCXgAWAo1kHUBumiRafQtSJye4umWnFUn1UT9LEuSUD",
  "key3": "3XECrGitS2WXBTjDT3J18kMukXd4J7cywxZ3mzekmzmQo4PQN7AuNVNrM4zhKpRrQhFm8jWmCffBeR4MuM2HwqU",
  "key4": "24xPsc7p3jaDbtpibEg8sm9hkB2P53DRBxVkCPjyApYyE3ftoJYsLnv7on6zHR71mELc7ibK6YbMvE1jynsaxw5x",
  "key5": "27E8G54i4mg5RCXrZzuEemXex4JuntYhaWgaB2mfDBnbdRVoj15R5q5kyce7VQUhRW3vKEyqNSeML7PQqcb2p8TE",
  "key6": "2KYh8UrKxPZRAQa19bUTurRubLV8sYmbLVNXNfUxy3BoRZXwh5dCCXJZHdCvZzTLfJNd3iQdMdT85gHkk4YZXKn5",
  "key7": "hXa3J2kM93WouqkVLTvm6DR3eWQqQSaHkBLBXYHXAPmH8QoUotre2RMYfSd3L4UBKDrVkHvN3UGwJT9mh43tdzh",
  "key8": "4FBA9v39L4t6ZzyfDyMbyZgEmr8YyAuRSWZDJe4GYh3gnDqtYLQE2aboKYbwDBcvpsWxDpnaCdqchDBq71QDCUgU",
  "key9": "5uLhWpei5G8Qbuohaf9NptgWAHcoPUbB3aJYSjzCVa3MPk7iJXWGKHdMTfCzS4k6bt6E3M6qCm6JGdcro39DCxqb",
  "key10": "5x1QEm3R1XaL379Zu56KKX1PSNjoHuuwAhBV9BHWCBZh4G9hZnZAjSZ28zrQbbrV6QquMSGwhjHTG2Vkh91fDioe",
  "key11": "5WekV8SHquz3DBKfgvW9i7RencPcWwgjKfu87KjkfZdDr6ZZo72rRFfU5KLoCNpDgTQHziqkN7v9Fevuuoq9k4gt",
  "key12": "4Sm2hmNN6LspSSGso4ozyvQUqeMQXUbER6uxaC15G3EMPNKi814etCus5QeMVGnXpANu2bon4tFb8GRjuXE2v95r",
  "key13": "55S9jKv9Sf2ZHYs3pLJqJHR49wahiydLTdJ1prtXJSn94ZicNzgvoZZqtuRWPLctLNFtbgURfyZ7pxPkzLNM8epD",
  "key14": "4gGw1vfueGabcjqwbGg3fbzJj1QWEKBipETctjVr1oh5RjoMqqK1HDociHx9w6H8SNbnLafU9aeshvCjhVx9UR7d",
  "key15": "5msB2ysKWme54sSnGSmHqzhGV6XkBNAymgBNzvfjmoPvvjBJ4njqqBuH3vxbhm3anNFGi9VJBtEj6iaYk7YL6bgs",
  "key16": "4cDD33BuDWYZJ3NtJ3g7hjzCMoNKsqVeVfihKopEp7MoiAYnPDcPFtWG1BqPjViMy3p3Ca34qoTcqUvnyWoStAX9",
  "key17": "4TmiojWLbmtVuVdqAYk3PZLTdYpNqPkwN2X1KWYDTfMBQVmu9rSyziG2KGXduM9w58gdFWuqSrbBVnqE8wF6ToPZ",
  "key18": "2GF3ryEQqnZ2wW6rqdr9a2qmC8LjnpRvWhqiEJ9FzEijpk7eusu4zAdESpgCFTSwFesPMNCkTyTLJywBGyRt33ye",
  "key19": "4ATKfcVRXosHRWnYhotc6aRREkdm1HkjBGJLF5YgVLtjMsJ4StYfbQJgTgdkQxaVAyAqgdyaVJYB4nX9u7RPA45J",
  "key20": "4bUhhbwd76xyH2U38YxkvrHyAd4etqsa5C4X4YQJjz9nUYtQmFk7SWZhVf3XxR7ALyZTqndGf4UKRReXiFdpNTuh",
  "key21": "ZgJpMRx6VhWzuhdUg8RWRmNXuRnZi3bPeqZeFJa54nTYvxJQyMXiWgRh4AVJTNzQt5SgX7iDAiQ2fKFWw7h9xr6",
  "key22": "poFNGSHUsfsM2fXt7JKMAaNBEcv6YznESEDK7HHWRhiZVZwJ8pb18LMdHZyU3UoqovpDBFD23KijdHs6RJnVtaC",
  "key23": "5atjzzcU9Riko59vJCCWmhSJbzJShGttD3ZwtQ36jyJx5fNKhurF6MBmBuQ8ostPHxTicRDy5E1HaCvDRDMc6Ze4",
  "key24": "54Rmb6ue3M7oneBn8MTkmebgEQXkTQ4VQJeaVtajhZKtRQfo9FMX1s2H48FVrZ6FfnMVDkS44R9ZNFMxamHzvzL6",
  "key25": "44j6wnHcqYAz5dH1D89sdgZ65McdpG69zo3eweXc51k1V97k4iyDUcC45a8dTSVgyitLoJCjVAN3MzC3U3DuQSgN",
  "key26": "mJe7Nk4FEga7vBXMiFYAJ1U8TeUinNg4eH2KdwkVEWofQ6owPWyqNQPX6MkBWEoUaDnFohi6LEn5TG7BHwhPsii",
  "key27": "fz9Uyz1JixuLL4eMM88H6gC9RKdECkZxwfQG19wPnHRyyzK9s56UHvFdowx5YL22h3FPUcPMX4AYNTHPhsCjVSc",
  "key28": "rMfmLzimFyFNhCVkV9Lk5MWd1Yr2hQmQzFgFSGySbzCz7fXEnhWFWU8cF1gjQb2DnZ5NMa8y5hYvD8w8dwtnMy9",
  "key29": "298ENWADNARpqFqsEL4Jd2Racxb2ZHqiQ1G1HvgNzj6pZqHVuPWAmVCaYLPYM6GUnXRD3JJct3txS7KdZ2iabbek",
  "key30": "4roky9JS3RSXa7i1f4zYegq7756NEqE9d2SAHgtcKAfZaPXzFjYFZG32zemYhGCvb8xCaJMStGYuHvCN2ZrLCbWD",
  "key31": "4wsT43a8Ld6Hyrp8kFHMZCPj2C7r4WemwMPaNCawP8B3zG1VxpyxCkgky82XVkKpzzcgHdddyZrfiH32wFkQo34y",
  "key32": "5hwxP259L9kh52FRirFLK5zTzkX9Vdvo4BmAojqf9bGFKAGdirX4vUkW3rNDqB5Sq82Uw7YrVwT9CTVSNotW9uMr",
  "key33": "3zqFEJSHCX5RgNrkWNCs5koW2snLFJ2LdzRn2Vk1yyP8YyRxS84e715RhLpG3qYBwGW5oKf8XQcAsKMhVvba9ScM"
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
