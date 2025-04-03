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
    "B6VzTjS4D1BSwCYW3g5gm7ZtFK5TbXAF1QvabeomzHpj8pmScFS1jDBi6f9oQStW6QKnr37NhoLGWvxBkjdAyXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnFretVFMnPdHC2yVYqoYWhuAanZvgvvFBfw9pqu95WQyLbmp8fCT7FVBDj2M8Gwstn9QSQjRNnD5F5wU21VFJH",
  "key1": "2b3QxfUNWwr2vHek5fyKVYxC3YavRCdnY6kuHzQ4vzPsQGwHsMjRwop7AH6fh5cBUQKv7WRSSL8NBjbsouus3Hzp",
  "key2": "2nctLVkxM69EtifejUc97JtgJNfii5eQANGwfELokthdDB6sHcaij4K86QjtbXQA6gUfTKhAotpcYSfXz2ymxx7W",
  "key3": "5AtU1QcSJNy6HWg7hz6ETL2897K2tbH9iA1dR7EF8g95jiQ6PVUG549ZoGxd3HJZefnYRVbRhSiEHFpWStGQjusC",
  "key4": "xCWMG1fdiahQkQEfMmpyJ9q5ysxbnVrgA3QbJbPyLQaTGtz6uPC6XR5ue9o6YU71wiNkk1Xy9Jf1NFji61BELSa",
  "key5": "3ePiWimgWH2MVAnENmte7RynsepK48A3y8RvFe7Soac1JLn6TdqgiunF8p4VHmfF6JtJdPA8wDEBWZQiDUjY6BE8",
  "key6": "31sa4XD9sousiXMLnYwPE1rpDqCQAksbkkfRaTsB3SS1douspWrjJLmpTVW7MUWFBFMgD85xi3dTCDZYjzPpWjiD",
  "key7": "3SuG37DBH1phofb8vHJ1CVEkcvnmGZS7EXGuUk6oNo5WojxuRMepi5YZpQJF1JNmF6UrJNJxPzBotWHwCsDHMXii",
  "key8": "b34V7BFjNLwqp8X8vDrqKPbT8Dk91aGUqtiTVoQbvMtLHWjEsti7fKmtptEDbimXBdkmqFowKRTJJ8mF8xgdPjS",
  "key9": "2H8fVRK5MZbtCWkSXp2BUn2T2XVbFRCNKysp6LGuVGHdYCYwxHZaBsM4z6nkv2fb8KbhnD92bqxJkGPDcMBgCj1T",
  "key10": "3RekdBhsczfTnSVUtKLpL5S1yFPkb6QfHg2UZZdyc6kfJXL1U4ND1FXshkSGpcD3acEJMCQnAR219KR9BQ6HakYq",
  "key11": "4n9Dop7wQLBrPB9ymZ8D1Q1UpaZJQRJiBRskxoWeNfJ2Q86KaFn78WHKX8QREZBsU3R8xNfMe4jANR8mjrBhj7Wa",
  "key12": "3M8i6FmWMBPWHGhDmE1iwf2VLbLzZWJCPYk9fbVZ7k1uh2kyLWcoYpghKNQvttWnAQ6BE3P8YLK7Z9VkdhTdvsXY",
  "key13": "5EN2L6cjvVEPZb75yx6GDaJFjiJz5gd9HMsoDvTP8TDGgGPz5YE2YJUFMcrC4yvRQtWcVLjjNCXgRoDBUj697W1y",
  "key14": "3p85unVA74zgA8U289N5yMftDgDTARAqZ3Ai9ZX4rcokJCUV9oVExEANEwMfkpfLp8k8B2fh9ybG4PV3ikAZ1hB7",
  "key15": "CjQsMxXU3idJefpMG85GZFEn7GrpQ7E2BJuqQcynJgtBh7GTBNvgfZjgHKVedsPFwqEgzZypVy25jFKgygh3T4x",
  "key16": "623iSPPQJSw51VF8vb5y8shUJF8QJhKwwsaY58rYEebSnvoCiJVoGXWZDBe99QW6hDdNZmqmc7wqJZ9sVVrWqWTD",
  "key17": "3hyesUzxeCe3R8Unebo2BSa33UKwfnb2n3n9ujKLWHVWikSFVQKHGqyNZW9bnfHSrpu79b3j98sW1pKby4F8PMDv",
  "key18": "5A7bWc5vRZaY9PenC4YjPX5Fg1MuhQFN3ygN4juxUhh98oQaSvn7eH7qDNEaC5uMQ5MWJJxWgynpgEofdzvo8cTh",
  "key19": "qryKaUWcpwZYS9fC8YUhXhkm2f7cNcW8Khw1XMqKzPpkDZXnMQsVufdkxDb3SKmVyURJeHRUkXSUUToMomT1Y5j",
  "key20": "3ngPVibyRQtun5kdv2ZMEwkihv7dX8b3HW7VspLi9g25HVeBLEWvWqug1WR8PTTDLY8nPHqwKoj8W8wQrD7FgGJc",
  "key21": "5sjDAWKeP6PUdFecQ86DEbvwqqNpp6S4ApgfpHEFTorqqakTG7NCNRZZCLMpWb3UsJ9FKpZ3A3cuLCDUsV9aUcpw",
  "key22": "8WgFUjSvU1CcQik1mg4QHUth9XPFm8S7nW7tzBEJFhfzS2vXifPKNAHXwHGV2rygJCHhLLabKHstyDYAtEeTuvL",
  "key23": "2XyPPF8jyay4WgAvv3SYpzDKiqowMmTzHkCqnpW8X2UmUtCx5SiWhpPYgA2m47NHy6K1dkdE2QG8ZXafMibT713a",
  "key24": "3Cc4EuTKJyFHyMzMRoojUwXK7FPvmQv2Ru81ggMfuYohLSUFPAp3Upp7HbXDDCLtRuQi3A6jszwA11FBeyi369tb",
  "key25": "3cRED7mzcraEQGQmn5RqrqWCbw1j2i2dBTacpuu33ZD63qrjq7ovXAXyVhjAC9mY7fNtAuWRUusa3C98nmCzYq6u",
  "key26": "fKGNkQFHHLSKc7iKwi6qUeUKN3xvqEKAd2PjV5qaqGhBQ3Gw3f38dyVXds4QwhJ5VyGMEdvgodY3atgEgbZEaLe"
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
