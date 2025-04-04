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
    "3SKKDTAeTLpVathcocdpn8U8gzgf76mEyN1YJwhdgejNv3ddUhAKu6UE92vXGeXex8oMhptzEDStd3x6668wdScf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MSPMy17tdEFW7pBRgDFfJXme8mAEYrxnjAEdeps1g5rKRUhwi89GqhCKCRwP3yyVF1GXPUzc5HutmWoQvCvEhfY",
  "key1": "2zefnd6x6F7P9mWRVhLHP9YtKwPuyBt1E9CGL8nA9imVWY1Jg3CtjYpRf8FaQrSD9UxiinjKt9kE4BjK1QxFmcTz",
  "key2": "2DJdo7icm6f5vsBpTRHa2o6VLzy6A69eRdScBysGpR3ohKhFjEJ8qQqVnLchRLpQ651aofFZXLDX7PGyQLTBkqWm",
  "key3": "vULA7S9eyDhfQhe3J82TTo8LDm7nUDNKqb7FyLGbAaqxGUUgJZeyN3NQvnsPDR8j9XKuHUn7ge1ypkYBycw4w5T",
  "key4": "4DC97kbj1D7rnU1mUzPKAfkNBfuWLYCYA6auAdQ6fuETBPTtDH9o3TTCyABACfUZ2QpShhGf2rbod13XXBp4mgqL",
  "key5": "cDwW4W28wxyou7GrmpTSX1HqcByaRQif84FNwaJoE9AJecj4HKJ13VVSt41y9qD2ZwFxE1kNiXhVQpmMwwDtRkd",
  "key6": "59sCo55PS8o1nrzG9VjArGeeTUdgUgyZ9XBfyoXzux1d1fQydPoybofZ5bWJxWhGGWFVTPKsYsp8Luyc3uT1Zsqa",
  "key7": "3up6KT4TaqVGsCd9vtqUiJRzXwF2VjM8CmQqkEY64TzkNX2QaAXVL5WjvmG9YiQWCwuKxqCM1eCAUrsBYt19wXiT",
  "key8": "2hehuzdMszuJFvqx3TDpMGxmwLNsexG5bCJHfkAD68D7XGjTZ1drwPYjf11pEzhH4mNEq7kda73826hymx9hCmkp",
  "key9": "3ZwkMULFQYpGzX3iEE6WMtcRSgwetdpBypyQgDF7jGFQKGDErf77HUHmXoGyPnsAW7UXZX8QkPuhE6mWT7i1aKRi",
  "key10": "4ph8inSPwMmrqp4sgJbNaHbTaN8CMQ77JuPAFoitxwxkAeqB8dqoGxny7p67zTG8kmW89cBm6gxmvs58r98jXDLM",
  "key11": "24911xyzhH6qjkyTu6hBxTNGmTtY96UZUZxo3LQhpfNQjZVXFgDSbjW3KhYYzD3ZHjbngrdq9UoS8HBd5HHr3C4S",
  "key12": "4G6FsZ29xoaus5KtqrGb24mmVuJN82DhKwSL72xKVguk8n7uPShSaE7hhiRVenLiWyrVB3ZXknMW133Rd4rXjRC7",
  "key13": "4zdCJQ3B8qRfaiF6VyS7R71rewsPLZpnaL5hAuKjiWH1F7J1EpDx7mjsh3NgtXTU8XaX3yXXyKFngiM5FvkHTkpb",
  "key14": "27xxZYq1RSjY44Ui1RC272NGPz4G74RKFWbjh2UqzLbdLv5bQQESShpYN62QS8yTJTcx2eBidewfKDRysRta4HBU",
  "key15": "2C13u8Yr9PFsZGWPkTbFfdFuthU53GSDZ6x7cXCshkTgJaQ44UtTppX4WBde7XKjDUhey8q9XCaefSt3b8kJNsJA",
  "key16": "2CmfpsqUMtTAJkshiueiUJt7LFyyjq6hyVG5ufDyHGgUjAam9EVi2jKwfGwC9XDYLyDbFnEce1LVBcFaPKuA1QUE",
  "key17": "382LoLfevdcJMUWa5LK6JcoXfvj8QNTxforZwERXwgLoYGrAJ2KmwUWVFHAdt6mrnjvZdETYpyqFeaYT12oMbKYa",
  "key18": "3aqMTu6RNhQt1vneM524tTKThKmpSw5jsNJ6C4BMqZj6Fxmxnq289qBWaStzn1dg9MSg9QWkah5aM1jxkoQfi71C",
  "key19": "kKKWisyF22VFt2TE9rNeHvgMZ9EwkzEQrcKE9Ai7pfD51Q6Q5Rk7UBjQXhUawRH4FgsBJpFFcy8feeYo43ocSrV",
  "key20": "2mAodjt7ZLHk4BKPH4L6M2ZoEjMMwZDNPpjEEc2rQWPsXjKTeqQG3iJkqpBx7itJ2vrUh5hs8yZUo865zRZxvzEy",
  "key21": "2R6JZzmoH5YJueD4VSsWDHQcNUTrpTtQPhbJ5y3JFoG9hW6hn1nvFCZYeAxheL8zGihoowZQwCgWkgTNTPCBvt9m",
  "key22": "49Gd5dFoN9npafirpGU3MvTfDbjWpPayqHWxsoK6vb7Fr7e9sdYg4rba6JiSGCrubMNwFjXVEmREnZ7nxesVq9ov",
  "key23": "3pKg8BrG22e63vxFodJ2Z6jbfcZFUc4tEobDg7NnC7T8DAnvsN4Tqm5t34RmrHDhEBxB1y8yvKCycdf56Uo8fJCE",
  "key24": "4uDadFpHHES7SNoCjTq5eAqsDsLhrSTGgqJC5mRRG9HiPVc6tWNtkro1XM6rphWEHMasfry2f65bauysK257ky8g",
  "key25": "3EqkHGMMEP2cdD7uiGbcf18j6pbfFWrZ5k7giUm47xNtjwWZ6R5hoNtDVkj6zB7cfdcdodMgBvQJ6aWKUoQsfQ9x",
  "key26": "2a3zV6U2L4CgBBQn22NRr1jwkaUy7RhDqKL63uAM7W7xkMBmbSmm3xENAsTiAA9yKNxUTs41CHnc3JnSFngCeWjW",
  "key27": "2rRgxEavtC6nFkf6Az7imJtgXr61JKU7J1VM2mBXawi7FKPXCxc47oFTiEuD6PENzqjqD3aVi4guAR9A4axYLSiK",
  "key28": "3M83CCAyiZ52Gsbz3QNoz3Yaon1p5Pp2sNTP2SxbA1eXZZ363foh8HCv9WooYwUnTupkvFJ3QdpR4TvKnke3iJ39",
  "key29": "FaBo8wUquESGn8VYgcpdYoxPiKexGvvsHk8GN4mbXFyBKkvmHMcGFBmKRT4sSG2Wyern9jo7Z5CA8NqzLyjwdAa",
  "key30": "fj9XeAgBhjh9gQbrnCmxED73GgzHX5erV3UYqJTZzpvLqymbGW1sdU4eS7gxRXMMjXHbn5b1DBieMZnhuVMpxgE",
  "key31": "2LzKpp4bYRt4gR1m4U9s177iLQvFcuLpN5Wh947dSgxXWb9eJz568b6TtoKAWF4ttLEyfDgViYw911a6acZmWSch",
  "key32": "b9WcboQHRFXVps44PGswLhConeYBD95zNoGPmLpx8yDXRvBjGyTgsQG5Ff8x3epNtVo8wgf3Qx3r9s2LeKkMRiD",
  "key33": "5DAUpYKv3R3okSQJVbVai85jdpZxBUEa17tZRBATJXiZvS3zUSHFD5C3FWxLkNAxcUeRbaM9WMZwpCaEuQHBrGzA",
  "key34": "448uMVZLEQ5AQerWrxuoPkY7nBv17c9TTQWovaKwRPeZiHdwFBa1QacyZWBymdDJ8veHtyAFEfXNZR5dYeiJTKbi"
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
