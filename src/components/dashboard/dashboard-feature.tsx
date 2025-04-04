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
    "4VLWvVwgbuWcs4z73WmQ41Hsf1LFCcdTRpmm6uH3jN23GvmK5i5qWe6CTdA6fzbbxwMtejQopurEvmjW88xPaK7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWW5RkZrgo3LRanrKW5P5GJtuSspTxa9C5Jj2VGWkHoGfdGsSmHwYWatYK3vaxDiDQgGK3F4qwRkLBz5Tb6GKLL",
  "key1": "odydaao6tL9Q2CSydj9odnZSqsafKSpquj7zga5GrpyksuvDe2FGJQuAp5XE2x8P3xe7o39vsYGfTufEiRys4iA",
  "key2": "5q5qSxS7kKDrnrnEm56488CVqoEsmbcYcznDx79UHTqwapcSTPSXMkELLHsNzBWpb6n6o81zSgd5BWpTa7RqZTdj",
  "key3": "5vNQ4ybVMG8K6i7Hgk15XjdNu2DiWxDwDwVehLbQLoW9SZ8CHMm85YDWmvruV2tVdu7H2NZZn9dXPByj7Km2c6Ym",
  "key4": "5DrGC1ZpqW5MzzbQ4MppbKLQAfCTJSqvip7eiYgoNe2n8QXQTx4X88qTmgdzWYYFpAKU9fq4zTcwVacGJGyihJ4e",
  "key5": "66BGRsKRNkjzZGVLCacDDBF565vfaPjwXHn1Kgg9U6VjmR2HqoRakPqS2nu8vtyCfp7jn87HZb839XMdz8sZwGRU",
  "key6": "4DTveVnXEV1gDE6bu8jBcUpmHzvUDs6Knsqa2XQuaSabewT6e6JoxXimgjchXXhYRH9DWPtKEzoLPTS4T7pM9Pd2",
  "key7": "2YsryoAvmgxhBBhN5tFtg9Qzqd5aK1FEb5ghgVnvHm5RPyHfmeaPN6xW6q9jdRCjm3yJB2YCCsCb7s49TUPGt4tx",
  "key8": "4eyVULxfq9m9J7LupGUMFSCEywpm7G1A8rg3ij2unBe6H9rivxQer1kZ77WWGU7gp1FqfjgcKouBkaR3UkAEKssm",
  "key9": "4buw6FX7VE2vGuS48WqHg5U7h2Fj4YjVis9vyNCrMg539Dqcy7oqbtSfTZWGGHxMLau7MMpqk1ApHx8thbq9LQYF",
  "key10": "pjGGiLGK16p3g2jt7LgH5Cnm1fP2F9pxfLEXbNChDXQHcrsDaUuWn84q9PYKWc36NMYpoAgMyyehjf64foYJQSE",
  "key11": "5EY8KpgMhPgfV5sXMke4wyMdzoPksAmEBxhcrp1Z41sZXhMSw8YkV2VMT4BoTGttjWxmvY1A9W5cQ5ekixnRZbGU",
  "key12": "2ZFv8FmJKZZWcc66AEuzZmejnUcwUz5VuM48JnAcHyKmi4AYL7V9dvE8wJynjLor5o2Ev6oChtYXHgmNc9AZMu3V",
  "key13": "CQ5mt5ntC6W4T2cMTMopChD34vsRgRsrHFGQVbW7vQZrHYKh6BfmoBdVnubdui75TuNFbkHznu4e4gg3s4fyACp",
  "key14": "CAadtHacWP2E3Z9b3EeL2MRJLRC2LpP2t56Fey6q9iMc5SSSpgR7XsyBPYAdk8YNX7FsrNKDfrW8NHPJhHDmCvv",
  "key15": "3cxE7t7xreV6JpbMo15EYpvrvT1kCg18UrXnLdTbF7uREyafBWQDkFDCcGNkyAoZaPnJAC2q3oqNnjuUoEe8eBTA",
  "key16": "4P9rjvaoQa7nQA17XVpnA2PMtC3YJT8ps9wnWeGoAXrz1oRopjv67j2yFyYHuob5GQ7wsPT3ZdpYX2JqDxb8w3Us",
  "key17": "2mH2WX46Zjh3sZ9U58xKMT4KNc1xcwTw1xDyqgcQp9VnfcPbkrFmWT4XCnGDwbX1KjcWDpzaUoDucxofDhZnmDwh",
  "key18": "2SpRXAAaAAuzMCBYmU8hiimShxkgmQR1CQr6iEDeTnZpZKBxxWMN2EWqgzHf4hk9DzcJ9HLpKtPJdYvA3KjNK2Qz",
  "key19": "46NUo5aSnap3x14u6nYHJStzgbT8R9JwzddXKqqKCU4QnnLY78z5P8ApucS64enc3DGV3aKDE1ZwDjHqkJUci9Zq",
  "key20": "3CQgBAqqQ7ZVJKNSkDgYxYAwCjEoeyMYKE8XMcAbVy5iDNHU5AoQKMWyA6B1es83DPHowQ9TV6LN4bv8cpt6GCXE",
  "key21": "23EEsP8ADSChC9yMnJye7Z7FqiybzahVuD3en8d27FAL9x8wRxewcfVGjkMvab6Vy6sNXEX3nLXzDs6nDBTqaKMG",
  "key22": "3vR5TPs6ZS4LPtocg9XNoMV2zKVesXT9jKhM668XCGjkBTJZAi9DkEKrCgvHBrL27bc3gabiroAsWxb1g8kmgUnB",
  "key23": "21oX7SvYWMyS5FatiHmxyJXDVfgLrYRsk7ZdYaQ28cv5DqYQyEpEZL8Zq4pQtTh5ChBvjJf2zh9WRkVfUmZnKEfi",
  "key24": "3dMwz1a1wdU6ZPnDhAVh4cydkbpfUdbQN6SHsn3qx1t7o2Pma6CPKmA3CQud8n2KRJYpwLF1WxFLLpMsPyKR1PMQ",
  "key25": "4b4KYHmiQCywT986gAj6UFvjwDQP2hZBVDF3f7QzTzWWQauH2qZMfwwpvSHYXFtgWmzAqdCy6KjmB6hvhABg9YLg",
  "key26": "4x9SE2FuNayXbotR9M6xmcDY6vFgEm4Ym1pTEcV92LkE9F8uaka5XjLme4aGo7uZ67ysv5bMKcoUUhbzEdrKxaZk",
  "key27": "3ogV27PKFfJZH6vEWZCtgGnodhLUgMhgAJ4AGTG3XtHCkD8zPwymPzPUEtLN4mmxXDbK7dtZG9hHAXf1v6EyAVd7",
  "key28": "5wfiUh7MAFS8qwQXh1qVjprgNXwuDk6Ev4pFYfudvyeXN6z4jHKkLPzQd8jWpH4t4L8e9YyD1SNy2ZGNtb9Ae1tN",
  "key29": "5avtVaA2yvMzhXeuLrMb63AkZzUkvfDRxYEK57jekYSVYN817iNh7sD6x2R1ZGZaP15JoM2c1Q2KGALdp6QXZwXB"
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
