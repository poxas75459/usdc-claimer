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
    "2UHw6jUz9m3RpN5z8cTUMvx2DWsZJN97aeYvwuQNNdksFazHT9owrns2XTHvU9AKQ3XMbgSi8CFBq7AJYATAgia1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNde9oPsySqtNdP4YxRrqMDi181Kmr282whbhM6Pg7wqfUZRmrFQrpNhwYXg4aG7HR55Jtz7EbBKZTingLJXqJf",
  "key1": "ZLShkWHjcphEv7fKcAoQGuzBX6Tvti2tPzratHYf2WNvJjeRXfsWHiFxSoAEjGBPWSCLV2zNupA5QxNmrC9C56U",
  "key2": "4mpGpyhf1Vs4i3iQGTWjddeSSTRWzNhCJY8EwKoDb94cRJFYk6KSVCxeoKWy97KymzcJ8vVCdwNE3QMi9ST12FRe",
  "key3": "2JqRWpogy56vwp4GfXkYCLYnhh8oySpsgbdSCe7XaMfRKePNiF2AKQ7yCRFzEa5s11gxSM4BNkavqWL1YKvwxkkk",
  "key4": "3Hf2s3psD7twJJi3uo52Jc9a6LpVhJTBNZ7GNBV7tSSS6TNbZVgWQaEUD88yAJ7rEPwSjz2Ds6yFz8gBroCE1CN5",
  "key5": "4gyE9DF9FerQhJysvjuBxbRjKongyyc6fENAbSjo6i1Ui296SRjWT4mhqADrJvJmjk7L4Lf5hKeRtnorhaoJE813",
  "key6": "wVqPxv79fFnouZSs73UDwjwnMZiRkNhshs9hDXGB4T8tU8L6gDFXES3Ph834GbU35q4BpTKTqNudX5HXVWi19hp",
  "key7": "21YB5DhXxQaKFZnwNwFpemqkufNHLi5FHeZve6a59eQWAW5RYvDYX3XJZkokdNYLHdZ8BVHNiMdj3e9Ugfd5sqPF",
  "key8": "ykqse1hVQPyPLgeW7152KHt2AeyxaUHyStmtJ9Lh25MFVgmYfZ6ZmueY2gzZSMuYvLf3cn52tNZ7GMpgwHm1j4Z",
  "key9": "2ZqC8TF5FW5eGess36WK7PvDKiXePhpJ2usUCn9z48pYNzw9jbLPGpVtm2ZyB4AfxRdg1KSCHKJK2pv1ZUkXHpNz",
  "key10": "67UM5GfvnX8d6zxGmoBTWRdTFdgHL3X36XQWtEE8x79CsjCs93JWontfNyvc6FZa8H3Z7C7EUqdprD3u3HFurX7e",
  "key11": "4XTYyCAEtJGgqA4Z29Pqa5qF4BMPZseXJb4xSuTjPrYePkGs6C9SJMHmxfFQKUVMNCCWwjJfJ3NtJm8e56GrtU8k",
  "key12": "3EVmkFbH4iKpDvD591e9MjiVLkRSTbAwWar93HTamKEATaYJLsSffFvc6Fk7xN3tiQjQYJ8waEGhLzpxpE7vauva",
  "key13": "oKJZaMvn1VMYdNvvGQ9kUB2VTGLKBt7b4LSQtjan6j77qjRu31RB9Q68WBenZwUDfBXqbrUZ2B3oygcHehMzdit",
  "key14": "2F2drfWjWyEUSPEwd94nmEiVUEBYgkrWxPKT6PokSJ9NazRJu5w4AmZHbrx5qbEBy6AQiKrpgVeHS3ViZdSRjHWY",
  "key15": "4NjVrvoS16o43whZRuHkwU8nNU38XwZZBXphhCfLNwFUXBnNxPwEQnxZr8oES8oGrpwpK2t1Uu38Yo9T4vs61uC",
  "key16": "5VDQ1WW4er9fuU23HTvVyQL5PWRRZPYqBgzcn7RC5yximyDL2ejBs9GTZYVc5VwFwjdXs41MM3PDrusS3j2Mkoip",
  "key17": "5TmTwtPVax3HW9zDvuxuHmsLWiJeqHnEn1qiNmjUBxBi6bCsTc9HMaTKqxoNhX4TWusFiwz7eGbEoozag6CmoyYb",
  "key18": "y2mYPF9yzrvPzEEpKrue3Jqnpi1vq1jnCQFv3oTyyqGwoMrsAq8tmYGDHv6bvkBqgN94hpJ39J26yCGJD4aHJtj",
  "key19": "vv7GcqZcxDUhWha4Qr2kt1HUy1v4jHZL3L7BCTAaQSe3N9RwwDycJj5ZcyMvbtVo6aEqeUEQZmsoGZxJbbMNGqM",
  "key20": "5Egotf7kgzhVz3EdJoaJkDV9yNFJ6f4huW8aWwFqPVvgM3XvubPNstasw4Xhqe9C7SyWSLpv33qPEU74uyPScVNK",
  "key21": "4uqtp599PMg1TzytDVjsZ2DBjWsMhkWsn85zmVD4VFYCQ58N5H72Miw5Dhm4KX3RhBSRtveba5SAoC8vy329Vx6w",
  "key22": "4qM9b5vS4NqpgBjiy9kb2PKEvQwr7qDxhMXSk7EiUSyZfrdjtN9EH5ZSGc9ABQHmVXkQADqGEj8kehtagviq6D8X",
  "key23": "5XjyaHfHcaJfrTBrb1iQ9nkzx33J2DeCaNkAi1rL9xE7MBvEAZU2KGdziTgY9CNR9setxrd5sV7LuNRFbkfL1foK",
  "key24": "5mBnxsrYRpLr8mpuao3KsFt1V2e5rQHkYpbUWyKAtq54hca25y956HBsGXEVyxEgW9yNXwmkcksWp7UnfxwHqHi7",
  "key25": "53ZPUjT7m7yRY1EN7rG2p8xyG5YVYtPn9e2QETaW9dFs2pJDJkHCyKQHjnzq62P2wuS4k7UCaDvW1PEK7rEW1x36",
  "key26": "4F4Y6v4DdzbLYgsonV8NK3HEegzKHPYfniBJApxbGW9eNTsga9SDHczoRmpU3Ftuu5a6dLKa5GumotTE9LSe2LHS",
  "key27": "4UeWnSzUzP4JjBea7H9nRK3hQBmwUmsgBWMhMQmanNXLEN6eA5Myd6K2cMNtRzNoQnXj1X4PRz5ZagADfV3u57jD",
  "key28": "44VQt4cQfM6gCrcEA7jGYG2pyMCvKGoCh3JB9Sjj2DgCWoQbRYkAmL4sm54YFbaSYvFrqzkgrFUJKnxbZeb6FBk6",
  "key29": "65Z4zwuPTydmvmcEXSgx6f5et7FAyrRcxDs7PB4YYTHhm1Lvu897g9niKkfbTGpkx2EgYjoca1p6Vo3XJfF1ywKk",
  "key30": "2xdahHPDWAcz4byExxcqwhmmKebT4dtf8KTn3w38tfWvuNycEHKDSKqTExPnXcEoxvhTavs197YsFBYb8CBmiUvN",
  "key31": "583amBjW6oiVuHj8u9bpNDRk6hC5R4BK8Si9smcWDTp8xF5sk1isYsGCWpMo83REeXqy7R895HzYDejPC8P9D7ri",
  "key32": "2XjymW5qfQ14DiuKbUZvTEnkWzsxNPzbQXCJocPPzVaAFtMxPnkq9zMXJRsck3RRbNowJK5FffwLisdQDZvsGg9M",
  "key33": "2B6dDNJzk9igGqHJoKtTqeTU3Jzsod2BEcpjY2PcSi3wmSdZjy3u4AsQxb4gjpdYa3feLGjP1NLHN2FH4w5rQG5g",
  "key34": "3uW3qZKBxs7Pc6ZcoRrAeJsPouEg4TAuBxuA7PG2HkoYCtikBN7sd6joDhAXmLFtExqp3Nneg9N8snq3sNGB1LoM",
  "key35": "4sx6KNTXZ15H1iSyRGDXaR7ExSZgZo8DPsGJHJ92hKW4f44o5fh1b7ZrZ76iLJpKX3Sn2Y782sD9QLyNLYVteF3S",
  "key36": "3yMdAUewqWJ24txnUPnsMQM6aMBHNxCyc3Kxpmtnc1LjyJuVFQbPe7Wc64jmbErPBBBfAnqc4Ss73czqSkwvhxq9",
  "key37": "3ZPT9pkePJxwETGBqc3Arr1HGxNDbck1UFvMqwhtGY6jpD2V5aUUHfhiqH1KvTWvfjg35dPtRouoBoeqaH2w6Pdp"
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
