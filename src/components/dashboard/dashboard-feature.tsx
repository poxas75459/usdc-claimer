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
    "Y42AT4eyijjUM4xy7EAQiRkGzeVn6m3w9R9aKija99DhsFkTs2wzK1V1hGko8EvsivksVJTjqUFc6gPrvVrgip8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKAqum1f2kSvZQi4u6bB413Z8zbeSqW1qBSwyLzziAH1iNC6SEgAqitvc5xFdoiSaAjxk4Z7p6GWcHzNxZEX3U3",
  "key1": "2uDMYtYUkwqE9RUA2SyRz1E65upwPszCaRzE4B4pDsCmWfvbZXR9js7rqahMmLZMWwXXSEDJTofAB9vmVVTMH5UU",
  "key2": "2Jkd9HnUhvHbBESwFz3haSaTU3sAX6hwWvoZLPZihKEZuLT5YGYGXmk2tyM6hUKLf1kbBTJmJhJ8AEeaFVr7xVf2",
  "key3": "2GcatPMLMDLMBMeYK9nmJxSNVKhu5nitFFxPraPqeY3R9nRhJ8DD4SUnDs3DVh7C27wP2JvNRkCwoY74Z8EkWe8a",
  "key4": "5Wd9dcY6khgqPM6To1GA46aknbZx6ysyC6TpspjVbutxNWDdMcymaZ4XPoH5zvzfwm9A4vBarrcJKZtxaf3Yiak4",
  "key5": "5GwcAikMDjx2kkzopAKhctqASa7vWDaTFntN8FHnxKwNh92ACaQVULNgBm5VK3qE4uesuxaLJTgghXc7G8WSTm9w",
  "key6": "4uPYUort4VqtunNkuSm8VQaUjXsz3xcrRjb1Aj2Q9qzoigsmLzpRch38ERk1nHpME2jdeUFMMYom8u1Aw1jGnfKg",
  "key7": "2pC7qxxKA1WSPr2EfHQTJRXSvm7EZ5JEnw2fC8Jm8rcMPVBnd5q89Qfc3a1KQaamzbopkiS274e32MrkGQWeN9a1",
  "key8": "3D7rQ4wbre5Sa41Z2HdfNY2nRu5s3d3FchEJZGFFMZcUdXrRbWCQCPnBpeV5nJ12uMXqWbwhwdBBqz4hA9z1BT5N",
  "key9": "29NPjPwXouoYk7zNCH5XDnd2oPDCXv9Bf2SdAz1CqGeLLYeGf9fJfVEnf1GxPov7d7oetJiJo5g3DRyNtsHWKeGA",
  "key10": "3rCS2zY5mFhcZ9VWs5tTcYp2M8inM5dhFkgGa3n3KEUtEvd9RgmDigdLiv7k4sRFFz3EA2CzNGb41a2rrSkZBR6h",
  "key11": "418kZuhkJA3oqXaBJ3k21HHW7Dq9Qjn4asXeejEwAmvik7Ug4oJ5HPjWsxwWQbJisTZrTucaXNBLHEhdR2bsYuKm",
  "key12": "595qC53QR7JVxSzuHaGwcQcDn2TZ7atEWEk7ugmP5jD9MiipFw1aeHFVxbKhntbvn6vDSLXH3GF3Xmhu6yAw5Dbj",
  "key13": "4HrLAHHwbMhHcNbCQ11iqFRBin8uXNq7dkkVWBSCxwdAvDG6VbQLy8d9UDH9PbusgmL59WMF13Mpd3fvauHQKAuP",
  "key14": "5EVzPPzyHbJtYWAKywHZcfBCuDydSAomixC8CeWJTmJf3gs7mDfJThrT6tAT52ASmfhnKzDYYFyRmz2BA3QCbHhm",
  "key15": "2ou9bLaosP1CCDy29ycDuxknrYkPaLMoDGgsjDbCpPQKPyhBBDP7zpEAugxy4SSEm1KeTKbEAnGTPPt73EdutPuk",
  "key16": "GYrRwVdxHRXTPKYsWMdSg3AwjsmAtWfkyyzhvB1u87eToJrLY28q9mLefmZ447QrTgPerzWKtHbUHm4dVetQhzr",
  "key17": "5kkhgLanq5JY3LBYiiWrMHSmBbzZCLjNnxa9SN4ZvUqS2WjJurGhZSbkFQDo8LFHqVWkXaHtFFDyTLn3aSSqcsg3",
  "key18": "5U3Js9BWTLjUgCVg61hcAHUVgtnBkVxoMNznRNHem3mdqD7f15Avy7CfnX5qkFf1UzbAxqBDU9VvRg9VhkgYCoi3",
  "key19": "4hPjUZpVZqeEiaEBtxANtb7WpPgmBvtW5LpYeM79ZGhTPe2hYrFYqg5EMjLYJFigECyrodsgKDSy812yvs8rgkpC",
  "key20": "39pvU5B1WrRJ1G3UEwhBmDke6w7EzCNvQRupLea6L2Twg8Hhd8f4AJ7TiRrVgK2brUNJfFuMwxnGNvb7XCEgwZz8",
  "key21": "2Zut5FZFGctUrSfpcTxH9Y33N4WGcve2GHBdgSHiDKbop8vsjVXhJDz3uCSgioDoA54vgmwfcB22wgvMYZZhZND3",
  "key22": "4ZobzV7PnwhtyT8PKzjSirsGaCGeN8kibRRT7YmfXPKiJSAdJc2uxeknVTUVPs7f8BzN3bK66xXrotcmMVrDm9rW",
  "key23": "2pbxhADvWtbv4RjmRtgqdZqQR3BjghpfNVvKXstEgeL8BTo7fBGW3BjiUsL1avt8TkCze5diQs6MPnqzRAqcfQPr",
  "key24": "cwmyijtL8rHWKsjcBoJs4QJ8MxzGg4A1NY2LZccugpgJSiFEuKMjqNQz1F1M6oYDMaif77zws8U1XHa2eA4DpoS",
  "key25": "46EouWoSQgFrdwMd9KPLB59wecoYesfHWmmCPvPUybeQgi54sEGYSqv7SRkNMRvAbr1ozCJpVgdiy8Co3xtSGfC2",
  "key26": "5pREjWc95d5UsAz1po5ZyCmEYQrnHGjfe1MBavvbigBWBo1MBijUenCuQwgqYtGu5GKDkRaCZspVbiRmDNJLPZdm",
  "key27": "2BYaDHBFwXbqUUuB4egwZj6MP1vAuHKPaTa4h5p89uK5zF2xaN8pGqNGpayZLobbHxYAx9fXEiFD6hYZAuPgCCNV",
  "key28": "q7H4JoqhUuearLNycvqpSPCKTDyDPsALH3THHtA131Q1o5bZhYYwmWS5iF6dYcVVRaFEaJxQkBAhjmxF4DSoVhJ",
  "key29": "2RLfWGKxpNiVxeqipbqeh6X9eNofSYdcqVURVpbFPYrsRxWDExCow1TSgD7N7rKSGcwZFFgp3bhaVNUD6k4TFjY3",
  "key30": "21gPTXLnsoTWxWijaBBDV9GAisJTMfHSM1KRra81N3WwZK6KH3Dc7BEz6ZdHhQYAMbU6fNHfwz1zyE26B5XThz2e",
  "key31": "KNVELm1wcxGCMqpacrqDKdcL5UTwEGfnXvFANWtHYfv8annhZWuNCZ8dAA8DpYNdr1QYhv1QASi1nfCVMydyJTJ",
  "key32": "56gCksVL7zobHjXw57HbJGTpSDhQgg4SV1rHuW1TuxdPv2sQrJEGThgcgfYXZKtwTNRW8fY5Df2vwuAsjHizta3p",
  "key33": "4bwsJTUcXDZ7uCUaBpuzpqktcq5u5PcKPGDZipPJGPdC7nKiTha4JLsCXc3aptrXRbCovE8zZQArd69quJ6W1wU9",
  "key34": "62z9tyNjZA59AT1xiqZ8N6V9CzJYETHRqVJRhbeEtdESXJgBzyCZDBopiRUAye8fFaEsGMaieKZP43njjn9kQtem",
  "key35": "kj7JDCoWzXgWt6L6u5xb7Ggq1tZQct9jWXjnaXnh5K8rQWMfp2vLD6aHKWn9rUVxxRg13qBn4pSFeKtG7Dmj218",
  "key36": "4NoZ3hJNPJHxs4F1McVW5PPKqxE7kDLVcAgGuT4VVwjdh8VwdeBLjMXocsPk1obJUXzG8D8iTY3N8tWzUavuAomT",
  "key37": "3dM4zud2k6gXtupCTjw33MPDAS38CcAC7zAarPccopDbxMLt3j8b31LirVZYGamXu95FkdAShMCatx1wpBkXL8RN"
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
