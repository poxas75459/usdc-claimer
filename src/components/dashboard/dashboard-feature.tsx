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
    "Kgi5qQ4oFg4c4gaU8X63ry3ozKFcTvfDzVvQNMQAuakCkQ7pYpczUEAXDvcZVAVsAqkUx5wtW6x7f8Uodw58T51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irivuMC6p92yxc5DyRgyBNsGKfC1wtbCw96HkbQb6oHmpEvEZafSeKUTb3SbUPhBmjPHLusHq7HeApftrUMXEhY",
  "key1": "4KvMHKU3p2Um9Ceek79ay3iWvovvKiU5QvkSkJ1D5kq9qn1mM6wQLV7n4td7RtCeBU66iackBWXtyoBdvjmjSP4d",
  "key2": "z1J3nn8X9J6DMyjAX6ChWPGQhUAeCodA17fgJHKEehAQh9whG5q5uFiLKKwBdbbfoCvb8gaSFP4PA6MGVhZmFED",
  "key3": "3FaCFmPovtciqTFbsAv8hAPwaCj5rhyJTogPHVeKT8BRR3kHuggsYrtWvC8M1vax5bUYHi17uyw2vnh3VmJ2Hres",
  "key4": "4s5tUNy8FLA9EZEnsxYE4gL63UEGgFVM5972G2v5cnDHDocmjUscw5a7spYHwEU93y9TJPpwtprLQ6vT3xoRo9GA",
  "key5": "2mkBEMghsE1xQe99xg1f9pWQJEhkAihT3NPfwFKQ1mXtFj4z7X8w96JscfxvGmHWngLqkfMjYFZ1Z1ySoGHvcyJC",
  "key6": "5KjoBb2Zg6bW3fLUzxSb98PC3Ph5GpXnzjJZtSNckcHTuu6sUZVTzecxee6J8GacoBbHBvY1frBUH9ipcX8n4GRw",
  "key7": "5agdfgqX7s4hagxyx5HW1Tm9L5Jmb8GGxNKkv2XWGN82LHgtZ77dUSnQb417sRvP1QiN2eDGewVGTFrZ3xbixTMx",
  "key8": "5MSeVZPPQjEaxurk933Ti5xgjFy5r4viiRWCg8DD6wGFbLSykaaPrdahZMJyV7az3fKzf7xRbgk1JGb758kjBHU9",
  "key9": "23teTCLfg2FTLkdZCxP9vDJfuYmogZdk9CCuAMzPwJoeFf4GhBHuKyFTfez3PSkz6jeED5WnpioSfVhNK2sNeMrz",
  "key10": "4mnZXyq6db7bTwR6V2aAt2u36tfNxjhNrNoWmwk8KEQoK3ZZCs8br43GwaFrnKnSyiWdNg25E7tRjitbNdWr6xbL",
  "key11": "2PgQJwGzm1CfmEhycQQBeEQyMRtG3b9huARr376XwX43VtPRBCq7GwD7ApwhbV5es8E9YKvAC9Dcgqf587uwbc5z",
  "key12": "4bo2eYRvoSPZbUkT81b6DqAhESYGLK3MFWUFvLSLQzG4QSUPFtop8p71oMd6pvVK32SGnzNkukRSpRCRC6DARL1L",
  "key13": "5ZQoxe1Sw6tkaVDQ3ZfiES2mYYmBxEcnrBmswuBk6SqGWg16HVQXuqUSrKwGek2sVdk5yedYBNUc4veDxQvLXroa",
  "key14": "51U4pjt4sJ6TvPHBNBKJYs5yCPr3iiGTo49Rag2TUF6PHHpZAcBV8mhyTGRMMQgkT1ywEipHmmdH9VF2cAGAgFm5",
  "key15": "YckSgume8avksGz36wCZgsTSXz5hJ4NDcAegf57TKnrgpxKxC5mEgv1hBAsmFe8XxSqhiTAdA9yZnvC9jSmuYRr",
  "key16": "3X1uanV5WZwx1892cUhiooXSL1Ge6KuWkuzZozZrV3u2n7fMUnJMWCURYC3aQZKvLc2H9STuXdDoNQqm7e4LuZHp",
  "key17": "5jXaqpVJd8ddYQ5QMUj7bYGdtv6b7FuPEeb5Hdysb8yGMW87V3qqCjD5EGGacKQLxCw5UNBphLNcDYdx8rhVZvL2",
  "key18": "579isK24Da8HRbPbKo6izof8DJfPUsxqzVGDg31YdE97srubytSaiDj1A5sQnazCeUaYy1kZAGtkWG9aLLzNQcNN",
  "key19": "278xcnRzytQZkDJp155CVpnDL3iYym5RX79svxLRXFVLtVp97UZdQU7DNWEiETr5qt8dLTNcMgeqFfUktVGhSKCD",
  "key20": "4YBLKJjzmYqUx6G1AAJbgru3imMjahXx6VBm7gkMkGfoXiuoWoRzu3PTxAARVTM3FX6wvF7ittn52p8WNmvXCBi1",
  "key21": "348LNt6Pbw2RPEsN5QdW1nfbgghrDfngn53nmsPqGynzaX3QbvXhUokCkYhuyivjKAHRexGEoN5JWTeNrTMijg9d",
  "key22": "63KURdhurTkq1NuAbtMcNEvGmzCLa3q5ERDfy4JHVVJB1wu4rx1bcErHNALfNZizpJbMdpckLnt1cVyBsLjjr2t",
  "key23": "3xTjWkfiEkQAkT748byEvxHEY22GbqTDKLHYU8W5evCjsy5uWzHjYgwSVNGCvEP5Ees71GkHULYqDT7S6ZDsUHeM",
  "key24": "42tmfYdV3sdmhbww8NiWP3F2DejV6oBQMtHhdpBZZZw8FHr4nU3d3x7TzG7je49WorX8qE3rJNvc8dEUSXLDucX4",
  "key25": "4RthoeTUog2vQinDAgijAwXjNCxEMf1gC3gYHHhHq9Y6qtWSsbtrifJmiCm7xYDoK1to1f5TFQNYi9nGs1GJHzqU",
  "key26": "3ddhXUYwdwY8XDDxsV9MZMPNB3fL2AF3zPKY7vnvUhkxwcBbTmk4WTfnjopxkQ8zbn4oMRuUB8oBoG5QY2bnYLLm",
  "key27": "3yQLPBos971uoHmYwPNcy2KNot41une989ds4iQcNbuNT2JPiynAiQprKFF9wNx7PMBa63xrCaforKdQjzoeJXjv"
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
