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
    "2y22bMozmYY1YiaLCrxfKgvokcndWEBzak9362rxLWMrijAyqi72n6ADeReShhSZ8eGcUZKqQodQJqwT9EWgDhBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NSpAu6Br93fkttNLSXGrgkyRQYK8M5X27cex1J8esNhPtDT2aAaqAHYyWq7rDo8T3KodeMzsSQUUzJysyNzaSdw",
  "key1": "5HyzGAp2JoPZQDWpbt2JYjwUk5NFeNruv1LgoQVdY7xugr1iARHt8X12GLfKgvVdV8CQwxCVkGrZpnBFkcc51Hn9",
  "key2": "3W6whs3Cys3Pdrrt6pA75Mumm97hESFBX4y4jEVMQjgcFgS6tmHWHDPArFx7MuX3HzrmGVt9kjnNpAZ1Pst8UVP2",
  "key3": "2WPJT22xCT8fv5m6MqT3oKDVwHEhQFKNRqjfKYhiFXhBqXTtSjSNPdLsQ3Y8vNxJpbNPggGNrzLDZJjNtkNn7oPL",
  "key4": "2L1y6ocj8mFT7NFZdaARsXE3am7hfK2d3hzWCX9wTjm3F3tvcKJPQbvh3YPZ5tfnHYaMAUH3PzA8F6K6AsW34b8N",
  "key5": "2BLLX7HjhHGHsun7zEJ3nNBoiDaG7W14NGopBSSuhkRYyD6xwbVoKNDQwWRAXTyyGhcbpEjcwq6Hdz1UbGXFMTr4",
  "key6": "5CNzoycsSdCLvz5o7SeFtdtjh2pu4Z5pbfcazbUXj9oGGHtr4ymNht7FhkfYJMfGZgj5NvpwXqJLYo2gnfRY6LNg",
  "key7": "84Vxd6eSAThtMBQKgbSPzspR5Zh87PGWhtzU96iWgPf2KkbQZQaJBaB4hwxrBnNp2uXFWaC3PME7ybGUqvHaaw8",
  "key8": "4KZAtzWjyG1fEeuMwidFTZc52TuJvQe5avmm9yA37hwUuknmjLc6ouGFKsm9wkhRj7eMHYpc6m3Nohro2QRfEk5Z",
  "key9": "5vwnUfGmkiBgcskrXyX2ccY11rYiwxK59AGZHXc3GuosPHjhNJcvKRzpktoHESNuVHk9b8KdLXvs3MC1bUk6WogG",
  "key10": "5eU8XaC8q3adD26vRoQyctzTcB3PKBLmbXMX8DAtnjUpAjHs1SHookAVay4jxbx2ojrthDqFRzvkNkZzecakJ4ei",
  "key11": "5XnoFkSQnSmHxojNnKZj7uAc9gf35B8onLjwxxFUk53AmHKfq6E1Dr9RC2qrAtfa37QDcZ4LVMNg1Qhfsu8toTN2",
  "key12": "2mktMTQcAyYDvAbY7FaAGAvFwyNuJnCSoZos2VZy8oxAPTMTvtjYP6Mbn3PVQAzi1LCpn1AmRGeVHiRWwNTLXJ3y",
  "key13": "3ePx5gQtFMQrzy8BZhruaAhcpiGbKzGqxt6QEuD3GeWJvUDrzm5SFiyFrjtta7ekcuoUnpMZ3frfvzwwxPQgkar7",
  "key14": "2gKXYhMJ4Rvs5rzQiNEQen1GGx9AYJjb3P6WHo9HViGWXyxZBf3xEoBvFvk7tFEvknVcStrq67xHzZoQLy6PduR8",
  "key15": "4rfaBtNXfxPKyFT4PenwyneAJZ1EUWZo6ttYJbgVLEQpoVnijJPuceQkovbhbH7ahvicJNGZ4VRBdfVkcu1XXQkB",
  "key16": "2GXuAkvvA2cZGR1vUPwzpCaUpZDPNhCnaJ4j5YYxHQ2cB39KMQZtkmd6hiNBRXPkbVHqfF1BPNFGhZyNpskigzjX",
  "key17": "5NuHvEjuY4RHejbRX59RkdknA25uA5PN47a7hxttQ5bsQmU4LrW9jxaLZzuCsDCDnqPuEp4WCjkcaYSVQhUVdDHC",
  "key18": "34qVTuT2YDEJTpTVYtUwpGCrSiiXP1sJHof6re8MAML9KnvTRV7utRxC1ehFySYopRBK88wvD1AiTRfLyjGnq9GM",
  "key19": "5E7mcewSwwqfuxz6mwjcDSErGiTywkj5wUHkYQe2yghTJtTgwyoKGphMqBE6AqRiDBriXQjBL4CZE78yRz15cEJD",
  "key20": "2dSG6qfdBFV69krbohNcSXi3aanmy4E8JifJyT4jSBjz64SgUkKqLQvhn2GK6DQzz2yCCA7A879FuFDrAvggKwxk",
  "key21": "4876qyU8s1LiJjMDhmpdH7xL88DDmi2Rd6Niq6Jb6BHSvYjX1R6GHVkPdyt4PfQq2aB4DsdRpMUhaHarRvEz6GG5",
  "key22": "3rPRVvnX189bbNpH9yZZkcKfjSizaDNE7g97c669rWX2996zPNzrMd6iwMBTLhVirwLgSEqcn3WgtUVU1xTYPqb7",
  "key23": "3CRscU8E191QDR3d9CyBRCsN4iB93zALkAsZuFJiGS8gCod2tenqEeKFQCpSybY21nwUVXAnvnx5ZCaLrURrTcdK",
  "key24": "HK112nek5u5nd1bnRxEDuJFsH4pkLFABq5W1e33yXWYz5y1WgBUALSRP3qprg6rZe8eYmqTPiMXej3mpsVD3c6b",
  "key25": "5imX7wGVnvfprePtrGLpXXpsmrw5RczdoUSzrNfFsm9XVgh8a2QnNuDYxvNr3eWCcvS4N9pTbemD7ukmZZ2MQcft",
  "key26": "4vjr3nXnHXRxHHc7UVG1cWbj6Be1Y37Awzr8tLwdTJ5JNgMEGiDQYmhFAnzZfXX5Wz2Acz2rjitVtkkbeXquhp8y",
  "key27": "5WtKYnCdzfk3EUaMWTgC38PLLUc87TBKNZKiojJmVezMWJBHXxmmMQaMTjW2iMum7devJhSiB1SGYuVjRZCKbAe5",
  "key28": "3k3nvorNqzF2Kr2ZzadcowuEeVpJkanUG8JGFnBRbW6aXciGQWNn78w44sw8BpbgDHbUA4xM6jSpP1ch26S4F5KH",
  "key29": "2z7TUK3ERCJhG9DhtUypKjmbSUGztz5VoZ3rCscyod9ufQSazmBDN6cW12ciGZ6SReHiiwWXHuJQoj7GKJ3Y3tLW",
  "key30": "3we8qK1DfCTGpc7TaKpUnegaK5SJTjtqwyqD8spsMdNQQsUYLnJiYUPqsXkc99z9bq9TQTSjL6Uoq15QyJUKrSGw",
  "key31": "5GN71uynMPQAqt8Nv3MGYTPenjmUkksnqTmApwfNKZkxUWMojoePxuoaXayA33HMjGnfgHaQFcPBxcmjtcbbHh6"
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
