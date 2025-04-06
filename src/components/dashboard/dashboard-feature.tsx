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
    "343zhE6CtgxLmU5JThWVcrCzfgCHzTxJZgvXwLnMr6DfqYWuMQ9QV4fqdPZsnznfgX1qkCvJGYKQyv4SS1QFAqLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JkbbWmkBXLBJAHR9fUi6HKdsBFhgMUzv4FnkC7jwryRmXnbfYgG2T71souq2Age2rrABFhm9eH7NgJeFqipPpy",
  "key1": "2sxS2T9WM164VJWYSFsAK4PVU82ZrTvNJTaUk8SMxz6UuqADAgjLg357bzR9ApZPxxAfHMZksoaNChL6CiK2rBDf",
  "key2": "4pYFn9D8pxH7wUpjNAZ39zF3NHZ6go8RPs4S2P6yUDsKyvHh4pnNBbGvR13A4g6QAgnKp3usU8rvbjR4tVf7e5CA",
  "key3": "5ZePd58C6ftWJPh1VstzLqrnEdyuwYw4pB4HJa13jWkWGt1ja6VL59i8NKAs4skpjZY7Wyq67tC49ya7K9bHPVSJ",
  "key4": "isKxeqbDr4VvmqqerxvmgfGtKdgAKF7jaa4oKgEuhujfo1bGKW49rV47dUFLFzMchaz48nWA1cYZa5HWotuafkz",
  "key5": "2q8wWFmCqhncdbpbEsEC9d1Znhf6nMArtTuWt6SszJWQUsMfxaoat8N1ThYcJS9YXQ1LaDRWaEjc34EggF9cdDfi",
  "key6": "2h8ApWL3ucR46HezxnstgsQXSx8YQPw9cLVkMAPsDNsCXpUx2xbk4ukKFcibjnNbyn8v6YJKJmYg44J4FuKUgRWc",
  "key7": "2WSWDozNe48BYs6c4MGH5qaff3doN16U6mcNvqWCaBZQ8e3dyBaSVe8HKaET2Vnbv9c7DiaxdewPeew3kkWrF5js",
  "key8": "nrVSQ2gPoEv6uah3XBjpf7FS4oo1PENXxkm8QAke7Cd3DULR8ykuMp4iXh67jbkhjNaKVYBE8SiNmpRMupbDQ4o",
  "key9": "3kbdmJqEagH2cQWy4LL57QddMfcc9pr3vub9iUUa3WQ38zSrZ39vg2tH9AXWvReaNgHHwPpPQBgtWbMBcj3A5yp8",
  "key10": "2rVWUWddtkTQ45K7Ta7QYuSXo7TR4wm5Eny8irTwtX1pmpFFiDpvK5VzYPWewztyKzTpsPNjEH2EherZsUzaxTCj",
  "key11": "4w6kebtrd6sozojJ2toaPZmZV5JC817ujfa8nBURKQSPf2914yYJPGfjMT6xkrSaAuC7opX16ZySgByh1mWP6iFk",
  "key12": "53ZWpu9fEBLgkpmjHKQiy4hip9ysEyvNvQNrUFFEaKqk8Jwzw97N2oyzNgi2j8AoQdUGAzaLcwrkShQ4sC34q57",
  "key13": "2bLS3zr2UUBNj8NyfGBa7CjiuyBW1ykhfGyWks9mTwyYCqoAVU4oAaLT5XoKRWLrF2KddvgV2d9uYX9Ve8PXrBJt",
  "key14": "y5WqHBCHS4E3SbwYoW66Zbz55jS9tNXC5PH1faNwHjZS3LzbECC15EX3G8tKwy8t9rfrkXMJEjhbCJXsFvt3dN2",
  "key15": "2KcBdA1sVcCiJe8jSSUk3Ud4ZxUs827MAQJCn2D54JaXpzasF87Z7ihbhskLj9n4uuUSSnKSpVhXXgufMxasFsHe",
  "key16": "2DzfdgD5VyVNkbGQPj8tm242BQRQKXYXD6dPLeXt5me64iMafgDgVQKzqSWyT12KqJDr2D4CAbyciNzteHHZb5kc",
  "key17": "2hCPsdwPSeD8Tzvw2Vn23go2EXAP21cM6jMxrkzmVtoY1Labe9WhasEdAXi9ih29d9YwnR79LRS1fJJ4UqnA4K1V",
  "key18": "3MfwoSM8A9HAsTDpFCMtKajhydMKZtzcqcj8Z4u4iMP8cfggfSnhpEj7JdWRKzuzAudVVrULi8kJaA3URm5Ls6re",
  "key19": "4AFcrLr81PL6FUmAAJTS3vNRJawCnS9B4hKzPZ3CaUtCUSmRyVt6vZSBMkNJhVXFPDYSqWJQpsHLwx4qL76H4cUy",
  "key20": "5N4i9NqWjgMA8Sujnmubokei3zH9m2XgKhdbGsbgtb5QV9PVQhPaNwwCPT5s3P8pGNEpV6NdfecUWZZBLT5ERTXX",
  "key21": "QqFXYBXnM2L82GT8P1Zh1wcAgkMDGWRQyeCfjfzjxKu9aUQyBytuDF975gY1PYM3vaHvciq9DhUgxigPo8gHyNV",
  "key22": "PpMksFhHeG499aJLxzsF76WjLSDpExGYk1WZUJwd78MuEQGUZf6bg6RbABKw2LDyQYFPq6hfV674ECnqxzAVD6b",
  "key23": "nJbK2pM87az7mmDKEvtnJKU78e7EEXz8Ly1o2ikzWnzEc1Y5DdfYpfNMuvTXaVEm2MEiPpii4AQB6Xbm18Czych",
  "key24": "4eJQUXBPEmch4XBno89A9swMoDSQje5j521UWtpfpfhgtJfgq4nHPkapU9jybvgiSDAg6YostVrspL5WNA3mmBxU",
  "key25": "31uKCon2iMnjz2whyKjDh8wRSrkAsmrTZy5smzV8qMnZkh1mGNEScDjCLJHGZX9Ps7pvCU2fXtGR8PoLjcMse4eh",
  "key26": "3bUQHJy16cRtk9ixKdt8j5ficjgi45kBKYEtZcrPDcptmJ9TLKXnNE8pmqSZv1mmYHC2dJWBtJcfEfqJqnj46j9Y",
  "key27": "5VHEtHCJcyQHgNkzzbiGPAXViGv67rLzcZrHbv8MihZje1ms99tBB93mHS4pqaDixZ4wTYZbQaDsqBmeNw4ZF8pV",
  "key28": "3GhNpCqmZWWc8c5rZJomNUCHBYsS3rRbYCYC59qjSAK8magBqJYKp3XhGc4tQDxjfgfeYYg582XytWKiRKxUdKDA",
  "key29": "2xGjYmkypTYUy9SGRF6sSWVg95mjX41PF4Gsuy7Vfidv4sYXHD9xoLfyf7bAsbgwP7u7yxu3GtkkxQXDKwakif88",
  "key30": "YMxbFjiVrB1DLsGC5LBBMJw3b3Tg6PHQcMPfXm3gazqHmxKx6fqB9yTbB5CUVDgqcrEgM8zHXBBrkoTsL2R6ARz",
  "key31": "5Wb5HbeR7Bms1UTLcRdUH27oFZT8zgM1jFsiSw4S584F9ai3k5fFtQRyxgR4WNwmbD9XNg1AmyF81oecGq9sBgmx",
  "key32": "AeojvrjzLvA6aUJV18X7zC5WKRUj3GgNYX1DBrpm5qCavByTAG3yRkqzbXNX8wN44jzWHwUuDbYy2zYufVBjVew",
  "key33": "4Ar5brj6qfpxQ2WjXjBto35RyGdg9Nj8CYU9Ma9xHuho2B6uikQaiSDdBqpTZcjTZr8BjYB4ebPh3BUCut917Ybg",
  "key34": "5hM75ZX4UMbB45dYdKU8VvKwE5antST3JauLJAP2AFGw4EfZ2Q7vJsDjpEQuesprGbDRG6cnDpNzX2csdpy5C9ax",
  "key35": "3qNABbk1p3SxbY2YDxYKTgTAv1g9TaW2hzKDwuJ3KAPyCCEn46pZwsNW3Srb4CPr5PJjFU6VFzuEEoa6XpcMPhDg",
  "key36": "4LUyEG8cVJGFeBbM5t1ocU15FqS36rgc6UHQFJTRV3LA8RhEozqVoAzRiHyUj49sQyEZ2LrSNZpDQkofWL1unHwe"
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
