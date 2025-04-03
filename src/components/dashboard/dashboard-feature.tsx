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
    "5EpeSPopA4bNvxFgXLimLfMRchk8BuATyjuh7meS9onorqnPtBP4WvEokSheqN1v9726aX2yWs8u6rZ4aBGM2roB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJQiY6cR9B2nSF4WWJ8SYQsdYZTutxKg7jtLpqwD8pP7rYkod2hHAah2BjnxEbuqdKQmQSuZPjKXFgudC79Y3D7",
  "key1": "3hdKUgAByEiWe1HCkpoWczMqAmgWEeKbd6Nebp4QrZ5n8hK4No8HFbQmWenyJU77v3kfqmRjoAhdvYXEaputJoGn",
  "key2": "23BJXAXM5gJqyyR9XmgWo3kosmEgfiLNLAnQSdjefmbF1CrYhUJKq5M4aMvPRnhr7EFGQTsy2Mk251VSnEYBMXjY",
  "key3": "4ezLqqjSs9UNJRiTGuzkDzeaGXaKGWGSyQySX9XHoq1uhGVea65JiSrasLx9byqPAad595f5f7oLP956iDQbDEHL",
  "key4": "sJebYwCsTA2K7Y86xt66AxeSJ8CBVgyxKkiMiWDcgZmmKwDqMC3hCE5bMXkH12byqNnWwYse4ufAb2ZVeg8pymK",
  "key5": "2ecEBNDMSmKRXGA6QhM5ZLV1dU1dJicUXMtT4v9TevHqHReaohvSWY2V61TNFsepkbKLV8ZkdY2t15mNho1ykFHc",
  "key6": "288wfFcwn5UXZHna2GM7A9Cva9s4Juif95L1YZB7hpVcU2Nrpm1uVecKhKuVdDZnJGk8X3HJQk3mvB9wujmqsDFM",
  "key7": "4z1jQQHTRCmYcNxNYdnjbKA1U2882EBP5Cuq1y47Tq7RntGEY6EQCDiEyYVVoFaG5eUuypc85Mnoh35CndnvQgUy",
  "key8": "25DrtKTBLMHjSYZHCvZFnN7xLny31NMUeAebCgjygfz4BApSVVErPyEM4W2MUMCB4qDajPdfVDbr2XY4t6n7xwm6",
  "key9": "5ps8ufZ33gUSL2MYSHMS5QmfMFLXLrthepSn59ucvtQPnvsL3fX1SrMqkEEMzo3aBcZFyUh16ujXTvDahZLk61Lm",
  "key10": "1qxDsVw6NjwcqEgKmU6mTrYLAxAxgFVeQfZj2YYcLpgsnVPpr4e9wYMFTX6ASiF8v1fr6GZ2FcbQ6jE1JmdJ3Qo",
  "key11": "5BcCxZ7Re6wfUfNr3GcNAkvvQsbwr9VwvwNLhg6JvJqR2sPtohLF8hbEGExummhNDxVE7tgCvnCibtN9rp1SKXF5",
  "key12": "4RLJLsowodqJisXbUccWgneFCrj3Cye2a1dK3oeC3qU1St9k5BaJt7JXPWpgvN5YWmhW9d8sBaHF9dvFcGCVWGZz",
  "key13": "5ML6TJQd81h3DKEaGhHqtbeZB86gsfdpu4WRce2RiHYggRWusFRLKAD5j3SWXS432TuZbpWsQimJP1dPwykMjfd5",
  "key14": "5NKqz7WcgEncmXjhkvtTYU2R6n61Fjv31b9a7qZFKxRJ9LGLDo2LjKQ4Xtoa9EsmHmaXF6J1B5xtqfzXNM9qGrGv",
  "key15": "4nU6zqdhxKuh8MNBoa6PDiSWgEnjLKzBB3hPEnKuHVogWLuqzWoJ4Bs4HyqueoCoeYabm9FU6xPFZDDVfjceY22n",
  "key16": "3uNunX4thapardPTFEuJ8DvVCgakMhaqW3DkKnAudV96m6CDAtBa19JEXn5uLgq4BwnJ3aZmDhEGexGmYTekBSmt",
  "key17": "51GiK5xJSEFdFySmMF4tvEgZssqAY9yHsnRyfgSoB2Q9SW9C1GXQrYGfW2fo8hvvuJ7g5DSH4wqyBg6Hee5rCwgZ",
  "key18": "4pLCQbeHshwkZGKbuqZkfCf8buqg92bsH5QRPvgEh5ydYjvS4yWfb4cBUmpmsZc1mDGHJeSVrLm3Cqw1yo8ZyDz3",
  "key19": "2KGdp6umuW3bvsBi7NPpxE9oKnetqNuPhPebAUPiT1jsQGedqNgUvpYEoMdmafX41egk5J8L2jj2dn5B8AEdUNVM",
  "key20": "39gyX2Xidh1oHYKGpzVcu6HuBEzGzX4iv2psge96QYtkxG7t9CR3kZmMAowUWggxZzjovpu7JwQKcLrGigcaJAVe",
  "key21": "3XdSEo3peueh3fFupAqgW5ym8QKBEdqmGvbiRmXYPWGT7gLZhvuvFzFvVY8Hw9piTV2QUUqPkBmXJ6MsYtPQow7b",
  "key22": "4fq2DpHYYVSVcheRxRbpqY7frPbz8kRwg2uTa3556Wh9UgaDB5vcnBQe4oHCfhcKkDh4QidzFsxHDUz6DSP47AC7",
  "key23": "2bznYuNG7oRDCZQhndGe8kuNqfrwRYDWatpTJ1F3ZMU6To3tEmBrg7nycAjWJ9fEmD7doGLC8f5QEdvyQRFriGwv",
  "key24": "3duiNhcMNaWt2jEqv9wmAP5b5DH9PNPLABG336tF28FJ3XVRmNN1oDtQ3cuiwg1gEACnYKXiHp9yRN2KU79Ar7MS",
  "key25": "XUwPeNZ4puH3qtXQQ8KTrCTH8BmqnYtW1dFyyVjucBqbiDZoRCwDrUwLX1y3v7vbn1KL2ABSGXqNLnE22SD54Zt",
  "key26": "9HhwQUbCJoufSnvnQT3VLzchyUkkSk9aWg2TEbs1JhMMyT1yCQxbwXDiLAXbCkKh3yW1UHD8BYqtBCQhAX6LQX9",
  "key27": "5jjtwNDG3E1WWWopx8B9gwBCgqfS3eq5QUk1EvSy5E7XySBe7DGUCVc4LXkPy6pqcT11HvJhBUX6D44HZQiQ57j6",
  "key28": "3RXcSx4rFSBtkWVNbhKJ2eLkzjJsK5GyWBm1a9MpzmgDPiKsEj42vdXwzBkMubc5fLg2FRNHdLoXe1wsj6MJawwz",
  "key29": "2RLxn2LJXSfd2JeFQBa2iWhXcsQPVUdMLTceFKQAyAcDAWJjjyyU8p3jVWsFJvZp7X8pL9M1zzekKtvnRDPaVKgX"
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
