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
    "5LuTTDDXNF2bV4n2beci8i99scEGqJmaSM643MHPRbyXwCiD75uqbmQKyqk1z7kU9suwc8NhYjGf5FWAaA5yWp8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDR7oZnM7wgRaiCgbeKKLbACmqoQVjyPZcuzU4KTSvss1a9EzjN59E6HBS49FmKyAiHMcmY3T4LopzByXtZGJhV",
  "key1": "55HsDx22qnLsPPVfYAoT84W5UffRDY7nNPQmehmN7QVWPZ1eD2hRnwEkHan88BfkeTRoVVJ5febpsDCYQuKqRVyc",
  "key2": "48trnv8Ntw2PErBKBRorrXbSSnJ7kq2pKoHAFpTeCiFrQ5AmRcVNo48wExkPFpDwWJbp7U7mNc8unpd5S4akQPpb",
  "key3": "4hLLswUgnbJCRmVDUKFhS9StoJ7qmoTLjbWGNtqqFre8ejnk2tVbULQwjHayuoPFar4h7kGuZc27pv54gc3rQjcZ",
  "key4": "526BYtAnVz8op3TnD7rCSh1yHMmnRmsqjSq4YiL1SnhosDhLfumMDFeEyrRymVPV68g6mveHkg5vWnym4zLzLFvV",
  "key5": "4iE4dS3d5xjYtwqAfixo1zP1BrULrbYmq81dhFo9uRYopZQr5cwFtXGgeRrEmV4vZt1k1ArKCvcUXo5ceoV8eCyk",
  "key6": "2xXtXE3Bk3YcqGBV1oWiasQH9DHcpVzqYt4EvTHyKzvumJxiXGc9HE2SeE4ZHn4R9cF9eWuj4DqezgyGNMBSZLug",
  "key7": "5eFBK42LboomZXG6zSDKb2Tpykvzcfg8gURyfffZwNjUwsQTxsYh9SWfKjz5miWDtVtKdaR6LEHfWuK1ayvJZB8z",
  "key8": "4mVTGVvTVWdepFw6qZwzgkgMDsahnbmqxSbaeLwBApMwUHap3GtzaQciwFcMB4LZhj4VX38EdowhW1iTqCYQeqx5",
  "key9": "3PPc5B4pSwK9awPw7VsDM7ZW1SwASBhPDPGZpSxrtdUmY95hjSwaw4DhFUS5EiaaTNUwymrsBa21oZwDZy5uh7Wb",
  "key10": "5mTiJrjmPZzgyMj8P8kPSWCURVywSmyfTAxwBbTVfyjuKKu6g2Y4jPkeHtJrsiYHqqSkq2uuoA6FcgZkkJsfTJsS",
  "key11": "3WVro1vidgpc2XefWtzLYXPRjZabaavCuhEqJL4AJxrnmbdjaaL5wNoUqRUj8dqtS3WZjCinNQ2JKSox9nkhs9ZA",
  "key12": "g8Von9Coi6pQLUSojqejrVbvd9FEBqJw5x24b9JVqd3XYxMQp1hTgrxdSG2NXXhopE8YLzFLspbKPXVSD7z93qP",
  "key13": "47UCh71FVoncxLjLgMFuLUQYBiPc5yKMD8d9BSPJdZTVf1qvVoVY5aT7oK84w63wNSPrZ434SJK5uK2gpJyLRgtC",
  "key14": "37ATDWkH3Ro8Q9RRuJWz7RSXwpSzQ26spk2WfDnoPTtBt6ptz7kr5PXB4cF3ieH98TBFu8E5NqnKtYXS3sXYJqPX",
  "key15": "2s9c7HghqxLan5o1eJdF8FzVsjwSFh26hNeLRZcAhf2wZMV1d1zU8HuHonz6yeGeGkRqGp8qdLgsUsJbBQ1Wx3sR",
  "key16": "5MvvvE7kb8tis6irzaWkgY7cNnSvfvx7qvag4MY2wvMvk7rEeT4cqzfN5fCAdfdzsTuyEzHsbbT5De7pUfH4jDKh",
  "key17": "33iMty7AsryJB5KfSXEQkZiqKWYMCeYgzipyP1rj6sb9E46Aw2PaF53AdT1an3ZELXLo1CxYJwFZs9orDLvqzPYh",
  "key18": "3G471jMQjZtJwFHKcRYmCCxr5yYQCSMUxQeAMxHp6NGzmNMUnQxSU6vgAdfiDhomAf8sPbL6pnGV6hwMfc9c5iDU",
  "key19": "22MzgyxsyTwt7sMJ3KQSznJ5RPZWiZ3X6eqiXmBCn1H4SQy6nRBaRV4z7v9KpH4XJeZ4QpioGfVGsSaA9cjN4c3r",
  "key20": "bwB8BxXhwodKupKEWE4LNLkoi1igKfe8zjWXgR563ngeav2n2hk9Wxie7dtuGTTb1Lq5Cjt9VoeCnLpc8Bzqg75",
  "key21": "5w5ss1emDfKLrjPQ3SafSVyyMPoHn5hA1atVfXDQC1s1omsCftYnAzi5L4J8xQentst8YKDu753Ps726tvjmTHkV",
  "key22": "5Ccimd9MwZ6zq2KrjmPxMbtcx73vbXR5aWEjr6Z2Jf6t5KxsMPLHeShJ6Hcz59zu3VEZ4Y91GCWZRiQDd5WsM6AK",
  "key23": "2B1b2fGNNnHHgyfud7sAqDAT3L8gSoDp4LAhuyDoWn1yj39qNCaYFmJNeNo1mKmighs9NAvhU93a3LbMmACTSPbc",
  "key24": "5VzBBLqFX6dCeWtwUwqBBSztmcJY3F4AQoCy9BTZJLCEgbSqFa5HhSzC3qQYLQn9yYHux2v7dL8yDaUfGqNLdoMH",
  "key25": "2ThLWAdR5EvcDizhSYNN3KKWq5gdDooTwXFo9o2wBr9cXJbgeoj1qA4RoJt2c7yXe4WmHWcBweUpfFEUrxQ2Rs28"
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
