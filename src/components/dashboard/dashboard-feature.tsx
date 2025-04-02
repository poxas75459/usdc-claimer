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
    "5oHSgqybzgTvehB3CnwfA3SfRDHPMrNCd93VDmYCAZthfSwM4YjbdWjZV6qMMns3dRUeiZ9o1fz4YdWStJrx9gfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVMAmtGNLqLMrR5HdB1Civ6YfZSetmzsXXfwem7dKcoeV73VGq2HrxcjS63EZvHF9M3Jrf3x1EEGVA7XT3CbSLc",
  "key1": "2yAL54Gyf9kinZ2Q7PSDTt2Yg7T6a3nbtCSo1xuP87M4jtebKXMU4ii7gxhQBzSoaMgDAvntZeZGW2hoARkRKzMY",
  "key2": "FTkSZKFo3odNkqGcssQzXJ741GcaQQTCubyxmKt6ADgBpkVGNQNF3zifSqmXwcmphem6SK2kYKB9v4qwb8TDpDC",
  "key3": "PTe6ytwSGKjeoEKVCWTMMTV3YUfizZNNDnzzpdeAGjDk3rp1W1ytf1jHqiyKf79bVRsjvxnJaPoNG6DYxaHb3Mh",
  "key4": "Yk1MRFF2XWrH2jtXLzWf579GBtSRHtUXpKchV2nvEExUyE32WmJSGGuxhrJuVRc51duoNZqwV6BZgyrAmsXYsDj",
  "key5": "3zJAVf45xosB9yobhDNvxjjm8GfMXge2uWkWuKwPzPR5R9f68ngRqP3gnCPSRicURtPYBEwvxRnTpcVt64XjSA4W",
  "key6": "5ZPg8ezDjc6antg1dMvRGyxhBnkxwGTGN8tQnPwQe56xm8uuKBurZJDuxyHrHxugXbgReW7Jx4VeBXfVJjHNRt3z",
  "key7": "KhoT24xxXP4gK1vAjCmXo5dHTj4C7RTHRgMuRC1BtWWDkCHApqRnp72kPp5SZtpicADVZpqqQGSnEWjRgg9L94k",
  "key8": "41YUKr7Uj1zkDBzFitUt8tgKaXMqbWwPZxumEdy1eTvzeaNpMKsh4Dhaxc3BjPJqvAHp6fmX6QXvomnWYTA1qWmU",
  "key9": "3iLAk5TM1dX3mcPRN92ANmK5rCjD3NKNQGjxksJzkwhgfp52GSoe4exkRrSNiLGXW4kyj19nHvQZzczuZRrsXpjV",
  "key10": "3yLoGU5rDcW8zRHh1AMKp8YwFJ5AakoKeREX9ej7cfBMHDYBYd9Nh5j522QwHYteWKrwoSxbrqne2TGAgPX4BFF1",
  "key11": "BhYAG5FVCm7V4pjH3ntErTVf4rYqUCttt2kwLQDEJcZbjMUtyQuEzF6oYn58cNwf2SytpxhgvqrDZ6BrVkbBAJa",
  "key12": "5uwDoCU6Bg6T93XRZyt7zBjSWthm8qmuEKje5whmJeiazaPi6H5566mfMyxsjmMmou3PjMHHTH5YY6fASLcjGNji",
  "key13": "22gjUx326VBc9qp4RgDPm1MdQsYjfawFoDQkoLtK97iYEssizdHeNx4nQrsUsRAPHNodsXb4hBeHBnRTP1reMa2P",
  "key14": "5LDBsZYzicVQYjzYS52oXFnh6wqVWNwFUuMKb9wrEZJ4RBxVSYPFxVy2DxEYzKPrZQMgexbkNTAiW9Sc3tVk2hyH",
  "key15": "4P83NJQvzz2AqtSfBaD8uGZceeE5teFJnNh2kanhRvADYhD7Sns3p14Fh7x5ty4TrKTXp7d9pfMQjAZmaoFgR2zr",
  "key16": "56Zae5cKQ4aa4KB9kJ9r2Qi7x7vhoFym38duA6jCrXnfvE1Di2p5pgxh8ZvKFx41Gynw1pgeDaL87Bd8dqZMzCxp",
  "key17": "3zZe45cSrRDDVhSXtisDHpqNNVqGa5E9A2p5cKCrDTh1uGwh3XxFsJ3jxGh2CGQ9nGqJPAZxwdUV2Dav1mvw8X98",
  "key18": "4s9Zo6WjhCnMHeJMwSA1e6tfjpsfMVV3RdkSxKw8bo1iivZyvQbVRNKaNJHLzQB2SyCzXXWidyCpWbFbovKrX4mW",
  "key19": "49iux3NxGciCenWNSrUwqjYubH6UDgJYnzY4boaAou4X1S7jwLiBz9Hq7FRmm6qCtZNxh2VYm3FYURsnTEeFYb8n",
  "key20": "4HHE8gq4ydjpQNNsJo2MXi4FDTVSPhaeCXjTavu7c2Pes1xneYzqCoSFNcAMzp92UHUQ34cPRSpxaUnWDnKkND7E",
  "key21": "4qAyBYbTFMxuCFboCGiijP5ifvojJru22niAgmHhYYaMqmrTcsW1E3Yidiw87m9oy7WBoy12fwYhqyfoaSjzVBMY",
  "key22": "sySQtxv9Enq22i37kooujUANZC3qvK3StbGq9zLcpKF5JTPp4nPCpEVPmyPtNe1BaXBDGEsZynnyfrNqvnubjsx",
  "key23": "MNWyjvURwC6iQwWMr71xjqrRsGpZWYzcf5n7JaE3yucp8PQU6sGZdSnabCuYCQU1Ui4QL9P7qfzsCMVV8KF2reA",
  "key24": "GkyPm54ThNNphQb4xQWJkGX8f77oVB2gftsRCzkgPwE79KH1S1oj2YMb5wSFzPaoNxk7VLwLW8QWARqsM5LMsnF",
  "key25": "qCoD8WHTAvQGanB543nzSk8iHoataLwtbLnif8qZamE6LRAa3w639bm8GCsK4yCXyGvwLMUCZNVYbDcmqbPiq74",
  "key26": "5GtAzujiXS3vosk6rshUGBbrHBH9gfHf9yCMwiQ4ty5mQpuP25b4x9Scm3dnKKib5VdsrhLrTTA7ujJNPDEC23vy",
  "key27": "VZJZu3NeoPsB36bUizUosBdgW9MhYnn4hxHzJLDRw1NMuGhGyqeCpegbk88XZpaLtdY1iia6wJH3j5hKhEw5Z3U",
  "key28": "3nUaYYJXYDcrdjiQui3K1XRv7Gby2udPe7FysH5WRnQXsxHD3o2b69j9AgjohDadqMUYyueGe2GW1PpZY8GQgcw4",
  "key29": "2fHTUYCUaNrdSUNTdb9MD16ZrRr8SottAfKXK1NmQftjaJHcMBrsnwM4W2BFnR5M8wGW6pfvzVbRnbfTk4rVG3eh",
  "key30": "4X6PG1S6fxtPPsF5ZBWoS9NoHx4NGsb86PkqMkkUxvNoGjvcrCspGXwYpdB8Q4fZM5s2UXUE4uDXqWBHEsEcy47u",
  "key31": "2qUdJqo5oxb8gypKM6oBL7VwG5PKuf8ypYyPRBJRTQJAwF5uHF3HTjzvoTnbj75BbCn976T1Ct3R4KfMdDwBvqLn",
  "key32": "3aF7Lfbcp2QAkTSwwCFBrmGPca7PqgVeDewAp7sTfqg5rHT36fCsgzfohYTnLxVqvDV8svj46R1uQjoX9DotLSxQ"
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
