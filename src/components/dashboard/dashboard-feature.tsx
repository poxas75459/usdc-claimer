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
    "mZ55yWp3KApYQt8YR1jfY34toMaqiW5UpTWqYxZmVNM7kiZMnGSkEGvXxKEx4mJy4UV2P4JZSFQ65phayEHJsuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42GhnooJE8Up1yJ6P9RY3z6PBY9MrEKzYQas7kGjpdAutigXDTUSNFpqBJ29jNsCcxoHXjDLL5o1UFZahrLmrzxL",
  "key1": "uy6PNpiFSasKsHQS9GjVLspvG1swgJwyo4vREbQMLkMHL72V7bkQYbXvAuMAZcYURMUPHrf9Gk3ATVKzk4CbEqc",
  "key2": "2Y7LQz7dkrhBgmLKGRqqZRxTfVgKCNW7cKrRiVhgz2X1eMjkBoZpn6AumXvxsvFsJLBtcVL9JGeKYN8FLRba652L",
  "key3": "2Ake82vv54TfdAqxcvAkdmb6YrCECZhC9xsrLSA7YM1cyH6o74UVzsBGENgKnaMKejQJzMv2vs1v7ee1CDpWrJWP",
  "key4": "4ogwrrzNFDnjQNW1d4sZp8cHbxnv4AU4B844CfPfzofDMv5iLPdJCLUPt6ZyrihhKtaH4aimxHARUnr5wFLTWxtY",
  "key5": "HRDdGN2FJ35G4wZDEsQehWZ91k26nqvfNNpprd9okHEurWiKePDEx9Yovib63wMxs2GNibpUDnp1qovp5V1yerv",
  "key6": "57GTRB2z2mUYGDycc3WFYKpHJ1qEUf8pJp4pxBqtpe4j8Y4rGAqp1FwKEp7TdumgUyMifwwy5yymWj2enhrymmH1",
  "key7": "2XiqYppZbGRm6wBcG15tQHqfNj7DoLhgLTgNtykdyeYQ5PqxhyWotS78BJqFkbBN1fZMJSbwhAzxA8o18Ugv9FJA",
  "key8": "2QFsFMM2hmodS6HepbHtAkTsH9FMzfmSWVdsa1vnLXCW5GhQSdkvLmZrpiUfrRvpQUJmJxArYzXfwUoDV1mvPn9Z",
  "key9": "gpBeKhpMN7VsdXV1VvzwkpGezfDXhmVEy15iy3ZCxUeyFxHQ7xvFeYAWQZhunZpGW3Q6MNMfzCGfcxbFsG5q1EM",
  "key10": "zyD1oQX6g2YseY1bD6MfdhtPVAWeVzPHoajypbkLFTLWyetT2EpsCpCcWuu4b6Psk1FK51b8xPrfWm8mAFKdQxL",
  "key11": "3twN3jY5rMvPoB1SX8w4ccY5sJTebzXrVL4SfuF4DHrKywPS1ZvqEpwWnHU4KqBE734b2A61vrNyznMqa67EkkCT",
  "key12": "3PMZe1nMZvoS1nhkLqAWRBnxCKsVWLkMsmkE6NatHWXR5WTvCUw1vrYoBUUKfVq6vEJKQftzkfGW36MayWxC2RMg",
  "key13": "3qf5PCR8g2Xsms1rRYGKpxRsySje1wdDHPPCiwVtsb97q1FQPKG8HQJSZso5HZn6SFQNqEfZaU5Kg5tctErKfjuQ",
  "key14": "3ozPQApmr9GEddg6hHdwRYqpc3HiTi6CJuHdVWD3ByLvLdkNjHM6zCxfKujvyXbu6yvfYMYTgUofAxDvrfNXx6ko",
  "key15": "5Uvjgaq1Bd9BtmRxtJkYjfRjTnwMTG36363ef1SRusfCVHnJBucsAVEbmfjgzsF7Ar7MnxfjpjJzEXTmgrjgABC1",
  "key16": "3sdiKvf9dvPkcwRvnkxXW8H6VmkTicHwuRupkHGtHB4d6bHB6VsoFzeSoWM3gWcZx1htxs4AZ2LhxLnwb8TdM4h3",
  "key17": "213b7sC739oJjkhPrR7LJ3PKSB4sqWVZYiSgTUN4BNMgvkYkGLqgrJhocti3CdToa2nJ9KzjcZR6K9xzdmKTb9Xg",
  "key18": "3g4dtwL4Ss2o3tXuivG75FTeM3iTYjBSjBvbjYLxG3ru7aRmTchcAhQkscPfC6gw7pLZUuCeHat9zEqJf9P5DqNe",
  "key19": "552Za7KWneuJoFjFYe1x9PRL6amV8P2jTkcukRhwUJRsZMeavE6DYVGAMaxyp7rruFvSMUuamJXdgiwpd5u5Jr5H",
  "key20": "SCoSHnf5hU3nsTx78jvX7X6KF1RBTa1gx1M4U5WrYUyyZcjTb5zi4CdXDbkqheX7pKTAq184hF3LBEebmpcFVoS",
  "key21": "4weHpVYC1ZpzEQRYep4U3YKQh5Le5EteStiq3FkgPsaQcWac9LXYZfYWi2iGZAZncy7rXC5Nni1GNbQDq3LWjhc",
  "key22": "5AHW3iu6J8LaJ8PMPHw7n1JXT3k9NuUQVkRpFh4TX6DQp7sH7JX6YajFupkg1SvcmrKECQC7AcphUjVCKQGXPE6T",
  "key23": "5Lg942PL8LvRuAwVxh6zZxo58BtrKZBM93k6mmckL4Ghtq9r1WCihWZbAW6dXsNiMUU8XLqku7TwPM7onEcKxioa",
  "key24": "21xUXJJ5XNYGnNkMqraXKMVCCtSs67z9kCA6EiaZXQwLpJbmf99M3PGXEJEkdgFtc28typ5XMSVEo1guCG9ZqiM8",
  "key25": "5gMrgMmdn579o68fcbtBj6rwUE1oJxpsWgaNRkxSQD42GQph2YVJkktf9QJUojve5vVHgjFQkGYamxEDrshyufr3",
  "key26": "3X1i8XWJ5yf6EuZEDcrP9LhYAk48jYR2M7bdeHayfixuAzJw5xhapJ1WSfFymkFZ2hTc2FjN6A7ADMQwqMbvFm1i",
  "key27": "2t8Zw9PJe28r7MM4iB1vuu6yXR9MnSypsAuRiiNLjM6n5qEC1azoiTqb7qtLbmQDzgb4r4GwF7tWpQxFHmqAzMn1",
  "key28": "59jDyaT8a6XDXubQe9LNJGx3RMTBgxSwLrdTB51djmzfzYhHYErHrWtqgqnLsxAmK88GabimzCJHcqsvcEQg7vNy",
  "key29": "4TxS5NNVcikYnaFvimVbNqZ4CREpWYhfq8zZS8HVE5uGpJiWDHbnQKat8ucweWRA2WHwSEkVhSywH8vJs1wgh2VD",
  "key30": "4ujaNwpHAooXDYSNLfi8Tmk7BU1Xuo4pQCWAaBXHyKUFaqF3KstQ7VVy2ukP147auCuTEuVt6zBdeDJBfKFjzBie",
  "key31": "4KE4nhegMxt81Pz8rj4mZaTjjqTLRD7Xnmd1Ku9D9NY8icKgx4YT4h8pJWnYvfEiie2MLnoSyDz1bpNZ5QVuNe6D",
  "key32": "pXqCWChYhiSrN2VRxoRRGMiZg8VSkkSikacR1pfQ35ds5otsx16gxgh2vDgahn9vxPsmJQ4sUobD2BShcRqswcd",
  "key33": "4UD9GAh1vJnjVckJdfn8jqND5ME4mFtDHsPyGnm47g14S6mc4KLBe6EBDHfK2DZXdFk17LsHt4dSHknRDXfnPqj6",
  "key34": "59oaLrKmQtyY72Si5WC5Ks47BAdCcNv1Yy2vgSFijprpoxN4PYyge8yCoZn9RVe9NYBbf3yikbqGTUBQ7jo52qqo",
  "key35": "5QrYijxAh6iV7VG7DgnHFEUPz7Juk1fQuuurXR5d4yy67MPK5BR7AUb6YezSB9a37sGQ5zofjA9sTPWdGtkN4n8Z",
  "key36": "49RC6S2oEwN3soZPBEA7eLgPS2qanCHpC8dqea1kvoeqwzHmdqrqrmGYfGE5cq5iPAEiNg15iLg3oUihF4UwdacQ",
  "key37": "4sJDdfvtQYf2MqjLwsCScsyysQJcfyqCKAkdcEmv1QPxfTSFyEpgxPWxjjnideh85mEQDu1HCYT3aDiTkRkMqmNE",
  "key38": "3dmWinrfT4KCWPU5ejuQSuBQVdrWKvUXRSUw8aQvjMvnLi9E8sS4AsceavPperJYz4VMDaaHAsfQWE1QXQfTPv6P",
  "key39": "hjVwVSN9LW6uT2JSHxFLrgeJ7nu3SzbKQAgNdfdbTMGZ4XfRJiDS5BFBXQPeX6DYY2MsRevC15oZd3uPQ6GEEeM",
  "key40": "4YoPqJcRz1dgR3pffdUkgn3jZz4HCdiZ2sV3sJvBX7r8tvLjrv1sKbfRadSfEwd179Zoo3BUyqG2qH1rW3Zoj9fS",
  "key41": "3FBEtndHwyHejd6JXnmhtwU9g4ATkaHnV4oUBeyDWDz8MhGfvvGoVgAaQfHUy8tzeiuqhzmninfJcZKWYWzSGgi1",
  "key42": "PKz2rsya2DkZwKifCWcDSrz6zBQDcnwKzUdVbexF9ERypksbSYJJ7fzwgW78V8RVcZ75bMRUdYsawmSu5HKhJVT",
  "key43": "LFNbdXS2VNWb3BjRp2Pv73QBcHt19e9F9kLnUwqjmqxaD7nyxctSpqmX1YcTeijKqrfdoMomqZ2efyvZCRz4Jkb"
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
