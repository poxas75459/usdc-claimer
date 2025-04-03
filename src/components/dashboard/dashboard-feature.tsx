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
    "xssHCskwTUrys8gcoB8m7CYVwf9v65gQEdTcRTVso8C5yyGt5BVRhSJmg6HttopYgo3WibP8vixLJ2CycKDRVpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZ8qmJbUFkPxnji3xxACoxupYZkzK6NL8trTeoPAB7YzU9dVbFH2FNB8rPEcuBfrpst4NEitF35bVhfjSGw4Rqg",
  "key1": "9ywwvNkfAM4KWmYGSosXoCVxUGru5MSW9qQVwGQMpkhmyd7qmgMk126hsxUVmHoLbPNDEmkY3xkB7PwhmpnAL78",
  "key2": "4HqgbFUWba5qVZrhZLT6GXGNfstTXhRyCWrgnKTWJhSyPbcWA7zNBKLVrAtyAUzcfa3aF3GCxr3deq918y68WgiG",
  "key3": "5iQcAhfxwfSa8fQBwNKyvZmpzh5pzsnYmD4RX9SdcmQ1x4MBTAn5MptyAAD7LoN7S7pKmccoCheahCTLUE2VoFgY",
  "key4": "4vBqPBiCxfacoMA3tHKocwvKhpy5SXCcifPenPGxwNYayqjVkfG2HSuzKn1uxmLzF3CV8ULnDWcZrGqF4K5rDj63",
  "key5": "2fWqicj2pFFbSkxQwVfPATgm288NDsP1TUBY61t1EsYZCvavvfZAswbf6JRG45HbTFWLtJXUtgCzNi5JDEC584Eu",
  "key6": "3M4UmwGdassPExcgXEppkw5AoECfShAdU2GM5RRbrXNLuwv5nJBqawUTimEMLZXEEavchtwBvQZtd5TA9ewy8yo8",
  "key7": "2NHeYsFfgKz22oGxDNC2x2kN4Zr9goZTEJD6EQNEJw6pGpzo3bSLsLC9tGxf1LmngvxrDzh8146puYCh6wirUEgV",
  "key8": "34xXxy1UThfhVT4WkXGne6vDTaZ7zcNFoAQRCJxDDoRYZhrCnwqfQNyZRb7UmAiEUmKFM8K2Mzg9wuLvJefsytvS",
  "key9": "2qC1jMUKjFqBjwhJ3QTYsthyE86TLE47r8s9a7146uzAFoByz5aqwWok6WjUfdeVkNVh2fQd3BCKuj6EuKgv4JMR",
  "key10": "4ckE9NCHyQEUGkT1JVqoeb5Hi1SVQU6gChWbj1zBWHWYQZNgzj1xQ1ChZWt8DxgPfT4U81kSkR8chfeo4bstjiR",
  "key11": "4DbheN39AtVhALRAKeSpowmoJ6URebwGYaKGK1LafAPW149Ldt9mBUj4tTGpFvtrWAjPJHXKdZJkDc7kbze2uPwQ",
  "key12": "323anqhPkKx5MaJAXZZ74XV1h1HsMY79ZCvYFvSE18DQEJgEFCQTwsZYYMBr9hD53M4H7hmCG2VnS4pD8qeJt2D3",
  "key13": "2RHRWVpBzX7H6FTPfEwBZ97bQ99jdTzwNRf1joH9jWCJBxyXHnzmWGgaTdFL28vshdkbRXfuUmhseKgtcHY7r7UY",
  "key14": "xkEQs9TUrp43fGemZB9PYZMH3LZ3v77R7kY1whrbT7P2RKVv6aeNvZCoEiNvSKKTLqbNqrpkMEzQWVZY7xuNu3L",
  "key15": "h8WR9LDXBzAt7FR48pYWe1CLYaikmKwESY3QYPSoeyRGa3crFcRijeSWofaqV79jDv4pPQJT3nLAnprY7otDjaK",
  "key16": "5XnAYnM1Me6bY6Ao9L7LxH973scWRmq2qUJ3nWB11oKtkSF2CEaT3YxHZKaYpBWJkLsKSVmDkENFs9EvYxtjxp3m",
  "key17": "WY5Ktha6YQFdkVikXS7Pfz26Lh8MMPkSV3goVvRZHssBXsSUT7ZAtttjirRwyFpVe7tXAwzSZhj9EUSw7s5NQiH",
  "key18": "5CTApNUifGN5C8E5vBmg3xH2tdopboXzXv2hDkDRuBU7HRy5K6Fv6jqqV177xAUsRbFwnaRFe2Cz4Z7Swucet7xW",
  "key19": "4zDHyb1tSVp8RvjvBGucwpfTsYpA8fdM6yHNNJnicAx4JuEpCpSde6a566SRsRgN6Y9qmhnFLN7g39TfFr66QuDA",
  "key20": "4yeYLUdsjjpjQLx8Whshki3Qshf1VDa5bXJ8r4WRBErnQ8pgPLNyEYzPikrQjmnJxSENiuKLFCopiCtpFxNv1ia5",
  "key21": "XSv4wSM42niF3WzfVehAGyADbZw7yz6NFbSKPDa1aQy2bfhLwL7BPrQ8NMBx9y6SQdVAJ5j7jbGT6RokvoAyasH",
  "key22": "5CU4JQRbA7EgMGLoJwfN2jmwqwxLTvDC6n1hFiFdZdjKbHmTu4y1mLQjE9Raf15MvuQA5YwKYZLomM8yDc5R7Phd",
  "key23": "yMKjVfAzyr2vX4sfdgbA8L5r5QDUrGTCX7b1PAjGf3oC9pn953EfzS8nvfTBuXwfp9KSB6XC92sXk5myB32bq1f",
  "key24": "4ygKJkFrZPtGTMSYXPUDYFfWboBDNP8X1gbrSUoQfnUgu4kZrUTLpWzcXEBp492A1VyN916ZVYm2WPs1YyhTA8Wq",
  "key25": "4K5gG3Zu53dLuT227BjLCRqa3rKXKzFJqp9dMfaVnQx9stocEonVLwVbsFnXgwHxm9UKK4ZGosrDsmzDC9vPA6q1",
  "key26": "2uZBsfso3gEi6Pt2gmgyykceB8UNYbHknfrnYReRmpfHXMNL8SjEnXG382GhEENPMPMNgxZRecgKmSCtTbbk6ys7",
  "key27": "2QajkoYQfDa2VVnF6uN2H5RHJa2qqHvhT1vxmR3EdVvQs2uR2T4LQrqFEs5rDx8xraTHywYz3hQzyy7g9jeMdoew",
  "key28": "4VcWwKn15xAvcSrp7eTVSPdcStUkNcazvieSCVoZhPC2KTZubNiPCTD7Azn5pVa2zJnjYrue8tywrRBManA91TFn",
  "key29": "5VzBj7bTDKG5vzTWo2nmhMETeJUR8kabD6UtkrMt1C9RR3gD95srmQYdFNgepHBFCP6Cpt1FkWQvySr91DZWWGv4",
  "key30": "ypfYbrrgWziNxmUxEzKh2RHu4MtayjKtkefz8saJ37p85MHSQRJBTg6PV8dYC3cJyR6dY3cNEATrZwcDrexxu3M",
  "key31": "39N54uhVia3VuQN8Kq3E2wv1qwvjYyNEwkzpyFYHJBkS8iweURfjfcDfVJwtBPsdShNAZ1dW5544reyT8nkvSkX2",
  "key32": "2EdhNrsvFWUioMemJB9LZqPRJ4xK2YwV1yWWEo3JRtS7z2NLqA2NoBVT48NFHijKR8bu2MALaTTC6ZspDTeze1JC",
  "key33": "3u1faGqYcYgk1uaikVFLgSDjM6rCdEHcJi1pPCmLS69qEYAEBd2bFEREV7nZ7qhZuFMRDGsxKsdmvbVaFSWPnrgr",
  "key34": "2pVEX7YXoCuDi81kowYZt7hxqJFzH41yc25KHW8P3m5mZAYkzWkdhGcLfW486iyUMjFSbeU8VHo8XhtDSJXCvsFn",
  "key35": "JNe51GeExmV7nBk7aoyFjpRGMEnvN2UYTRGoxHDscJDKXD88cxtDwzzd47BwtZ27fs2nKF1jtrEq4MnU74WNmtV",
  "key36": "Wuw46oe7yjKEKSh82SRRh142h1dGeREbwqsEYzeq268vKnkVqBwFZ9WYyB3HL3Ddwqe3dfiwSXHYU37tBLJ1hmW",
  "key37": "447ScvREZFC7uuLXL5pJpkPrssdgUou5646qGH89BVLKTr8U7QjUUG49JXLTaC55zKTUA8FuwaASm7ZeRD5DjBMU",
  "key38": "66RqJdBXATfzwh8cHS7F4RZkhzcVZCsFvXwVkuGr8dAACXNy2VwdQiHkmxjpP7o4wcPQKkCnhUDwsdMRFXUG5Lq",
  "key39": "NUQF1Rzcu3eAsszWrxjaKpR6v36EbSVzG37pSxNnUsKoeYpnKg9481k1X1VRDhYgsP58tGTx1rYt4TyTFvQRzW6",
  "key40": "5dZQUmDbEcsrk7N6bdnJ2YBxuB4JHL84eSx1o9vUbkdoBUyG6C2JpzyzutjXodz3b8LC3LtkuXQBHDgkjypbvokb",
  "key41": "5FaXY6cGgfKCrpeWTMcz6754MPWiRkydPGJCQku8GsQ7SLL7DVnUbXqXpAgkVVjFJEQWHqD5hSkY4z7X7Re7p71i",
  "key42": "a1imMou8ymgENbmE9keaynozznKFYm7FUpv3kiYRmbj5QBjkV6m179L6NsfGNq7KdyhtR1jn9dckyoQRRbJCag5",
  "key43": "35oD4aKM9dNJvfdn6cJLM99YWNijzNTvXqqeisgSfxFymXWb2LikYY6HaN4QWHc4S4GezsgzP7yg1S7rbiGYH5kS",
  "key44": "K22hChLquwvbXDfNKGPc2VG2EUeDWcnTnCEMtbjBYgtBYPYUq4uHNfZKizsBuj2eJUpEC6KkTZvWqNQYFkrrA8T",
  "key45": "596w2rW66ajpoD4gNUCUuSdqYPv8rkG3qmUkwrKar3WHLSy6bzXFTtGvRZ9aLB2iS8gCmx6StBCyCAniPBHb2GJL",
  "key46": "3iDGDPJfrmiRhPyHdkRDCxnkizZbB9XGJiZKCPRjDx58ntGY1QibZJzTrFnBWt7oaRa2ZCpFdUdx1NWHa2MrM26u"
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
