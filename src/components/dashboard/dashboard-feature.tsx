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
    "5qQdQ9iwYa6Y2aYePEUDkDukVfY63emB6tqNaRz6tiYJP2UDhYYKGxUcCmPSkriqh9SQ13AM7ndW4w1VDq6hcwp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49tJNm1ZjL8Xz2QBocFofDCmY4Ype421YaHipz8KqwbahoUeWWkpZFD2H7AzZteTfgi19Pw3dGvCYou4pfWFuPDu",
  "key1": "47cF4vyBeajELD3dJV7h2mfBRRhAs2yXsayN2V33cjsTsXe2BK4ifb629bbaSqs8Q4VX9ZHGg7jc8kPvQei9Qk86",
  "key2": "BxPefxqNAkfcskpVaH6snq8RPbwyfCHEuxTAg58yqXRgTRHJuC6L4sWU2ndAK62SdJcnci1kQTqCZQJHwydz4CG",
  "key3": "wEoQjRxEjMpSjKnPhie6R1DjKJVrTDgjcV1h5Q1PJ7kHaHmZ2kVo9UGrUJrfK9vbL89gjuzCFhzDX3nMgktk9eA",
  "key4": "4R6p2AMRR1KeNhM9B3Z48qyrVenV3D5ixrVz35Pio77KDYXAw3nej5wn1ojvapyXyE14MRJXJ2yy974bYXRFXQsc",
  "key5": "3o3BWkruqiMpiYPUugrww9zKE1dUpoW6BG54nVzg8NNiohr1jo5UM9hcVYgicGPwKohQKJessujhUW7keaRHD1Ba",
  "key6": "4hbqSPshKuhwdkdF8WK7CRH2CTBZ9guFkkbd7DCyEjyz58b3uit1CafBmnim2tvT6weawkYFXGNKLxE97Rmif5v5",
  "key7": "3bbLyBKxnFSXuQX91B5FXmc1LDUdB28nrX7F2gp3jiD63Pkn62CDB1H4KLabmHAAg9BruXrHa3dkjDpLk3DXmzJY",
  "key8": "4Zqwzf6s3rrF5h4Tt1rqYJ7CcJe76NwrMVjCBJYBtXkXRmiN5gpYaGM5sJ4H1S5MXUbLwPdLQTdcm4Jff6JEctRV",
  "key9": "3jUyLoAGKpetvEvDDvjHsqpXg1Fu3NjD5okunNKQ3CQoNYTBPJ5HWe7iBMZrkp3ZuJXojQFUG7wU7mazk7t3Exrz",
  "key10": "3PmRmhtJAKbpJxC7ekxTQmdFtpEFBiyXXyPmWhU2s6wCcbq3dRTQv7QdJPMPcPbf1GPQqusLZMAXjRVmAUqA12Ya",
  "key11": "5DwjHZmxK6uzL85rGaLJbh6M6mdKj3xmmmGLjbzeY1sRwcRrdppmMmhQMf6vk4aJh1StF2ikfULXvA689yG4sSGA",
  "key12": "3J65npFtCCmFDGFCLYyNaESnwPCEtNt5Fyf1f5CrLiKhgfgMdfAjFPzh7ZRzYb1rqnATHajv9H558fd7r1J6pcu1",
  "key13": "3LKnwESLvTQGd55hTiBewd9nhLuTaGhb3fhMjh8EyPR5MBZHzNyezvLEuHbbWp3QAPddM7yNPXY5yi75RjBdJxo9",
  "key14": "4nEMxPb2LUe98RLY4sA6aBZZrTjoTfLGFNXwqbyby9pqZAAq6XcSjHYe4wKe4WBqawGzaRBTEDJTb1hwsXoN84KE",
  "key15": "BNSNTfPEgLiWQ2FomU2SVxGtue9A2TvkToLR5ktvvGccjCastEVGifxk9yYMvmTsaNBetLWqzEZX9YBL7S1AK92",
  "key16": "2R772a61YJuLXPQttZTWFxEjuH2fduBGxrRYAoMLHQ1GRV5geUMswUF4gjc4m4ZSFdZtSZXdvCL6sJsFaKiF95jM",
  "key17": "2RPF5Gxwem3enxFSQ4QLT3G1Mc7LRic6tnmqutm3dAPTGAJD4ZohcBpTTZj1hRTZjNv4VJ8DikTDFJ153ntCh4xx",
  "key18": "5MhLwgpcfg3fcoeDpUPkbSnkjHu7sQS6X498AL66THnmrnEcWsg3scAdJiuAfg97eHCrxR1qvpffaYbU6nhwWgSC",
  "key19": "5TSAGvQLa3qoD33pNH79QQXv7oTFBzuLaX6Ui4PmPYCKtnxH1UdyEBwCTKsoXKryNb44q8EY1vUaUyrCDT384sf5",
  "key20": "5cbSrvbeYi3o4rFYo5o8s5q4y4nmi4LQkEbWHUeziLMpbqLA8jW3xSYgRw4CGunSwtSs4hmkrb1WscKCxL5L78QD",
  "key21": "Xa98q7dsnT8J3hjCLruppuZfPEymXwVgANTyC8pKgRGFHEdZKR1Z7gUxwzyd7Ygt8X7fjQoeU8w9NDtoq4i3VUb",
  "key22": "5xgKHntc5vkYryCFRP4ehEpQNZX5TLzSAvwoUVfTBYNF8H3KeWzJnR4hLKn1gUJumBEVV99A7w8o68bZ3Ftz3uq5",
  "key23": "2S8HRYtVZuZZMVHcULmervXrKoecfQwPHDTLZjD1o8m3rY68cFXQeENpSZpXQRZcFFNf8fEt7yusE1UxmUEvH2Q4",
  "key24": "2MVpFphyr7CY1iZXvecGSqz2Tjx8C4ip7cmxSxRJZUTD7Qcavwnm5Wxiu5XMafaWvwvd8emvPsSeVLv9fLiPDJvL",
  "key25": "2f2HajhD8ntiE1BwkM2g6hhkB9ixSWxN7cUuRpyVxwMjTWudUCGWwwJoEiV66YNqF7tUw1BkSHgER5Ny6fvnwYVd",
  "key26": "3oe4J3pKzWbxo5Xk1qiJiKnuJtZ2MEXTPM9FvGDja6QnTzMyVkYGqGQunYKsFCxuPR3d67G5JjJE9ZQM3hLYCgtD",
  "key27": "5jad8GeEQow3McBjm56n6xeK2BrsHiwHvwM5CfT3CW4dSD4qdMt4fd85gzoRyCktcxuWCeTtux2jD11NEoAzo4dq",
  "key28": "7gsZaq8Xndq79u1Ek2HjUFre6JMvSJyDQK1o6tkKFF3dAs3g8WPoBinTmLUDNP7y6kWrwUWnBnQDyEyBdZEoSyT",
  "key29": "4u7PkJiJ4Rkc1VyyA9UQWmC2J58VBx35eC2tcqmCNECKKQxmWRkqVWvYX1UVujysPctLkPKhwKoTadaNFio4emWC",
  "key30": "PivXaBnV8krNGkPwp3qZEgvyZuGqtVLeLYyWWHeGtyhS8BFfx1QLS8GNVy96PE9TUaidi2vnMsx6VxLTYaW25AV",
  "key31": "59LnaWTAiJaKRo9N5WC1Vu1sHcTq8ewZWdW6HTEQHYzq9tNifmB6LWoYmMEVAoF3bXzwMEXniRf8BgGz4CTW3dAC",
  "key32": "4otoyafuMAVA42fk5AhAk8WaWbpfQGnjj2RHD7ZLdhnwNGnKogz1qpH8Qut4HXgg2v95oKaSPJzp5yvjgAQXNviC",
  "key33": "2ZLJWfFHnVummJpf6LYJpqsX2itvD9tFWD3ibonh917Kptq4LpyzutXMQeEysmiPwzuUsq6gTBgUbPcuDoafc5Sw",
  "key34": "FvTbJ8juyak1BMpHsyhvek3KCwyk6G8T6ZM51mNMoi1YodVHVgGBkU63YQFsYUcaTUBx9gFaRNhJaaSPCjy4aTm",
  "key35": "4V2XpjJqJBZZLj6CrDtiDLditxKYWmkiytkJzFm3EdNLCgcGmopeS5KZorgxLhihVZe3wGudPjkjWYiRAxizQjfB"
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
