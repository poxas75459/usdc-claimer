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
    "3DkxvWBpo139FFDFATAuuJKzHphvC9z5Fdqsx4F29oXeiRx5kHDYDLGVLF294xL8ADwqRAiFfRCAi6uWcDeR94RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ohUAuvzYPDvvJRh35Hmw7oVyUJTkrC5iyzLwSEi5qbZSnnJxwqw4nwyc1pnEW8oms2eDEuHghNVD977L69iaFq",
  "key1": "Zv5dPAvTginUbYP99yjLWPiLoykWWwCtXyM4G3LAM5X9SRvXqGL7b5XCanPQEuBGQoH5GiCJQVoRbYV5TB85RxD",
  "key2": "3u8qEQMjH5to9T2smnNH6UJ6r8qW47gNGs1RMG6nemZiF6jvJbHw2NeHfgLdcnau5MW13KwgYurp8M7g7J8jwUHo",
  "key3": "RoAYwTXtQHNnpxmqJgLgdPhLaWMwUCw5XikVSz3REwNxJRqxX2jAy6jDLhVh3UpUR9zmM6QKsY4JF92oNWD77Cf",
  "key4": "3CJyqk4nH3Ba5jh4VaN3zAixnSyFJdUQaBRp3JsUniCC9juoF3jUoLVvCHoevMhmzKvaUrxYYa7mQsQVQzrHfZim",
  "key5": "3QdQoYMuAkT2QMb31HufYV2PD9MgNDjzoPf75pTwGDMc4cTwn8DNpmmDQWCSkorw4nwLApmv3FDL7QtgjrLBj5wb",
  "key6": "5Vhv9aupVYb33po3FYhFyPaQ6QYSSBTVK6wBCiks963YHNxYpS7yWDmFfEjG8aCyBeRY6NW4DNrG8tmVFNtzqBwF",
  "key7": "37FEHehGLg3o8NEditZ5QxWzviBqw4oYNRV2oQjzXHzddesBA9p3jsjfnVZPQ6q4ArxXBnX7yfCxAEkovWwquyco",
  "key8": "4CztJfshUU4jd5N2TmPeRMbyQzZHHZpe1RoZeyLzzQBAP49aW6Ack2y71AG2NAVTrQaJ2pjNJ32KxckoySei4Ry1",
  "key9": "299y9cjTF23h7aeym1KNUh3bQrLDEKRFDKdRsCDkkhKr4opYzBNkRjkYTYaGJY1ioKo2a6utK7Aa9LGe1h1XSfpH",
  "key10": "47yLdSbioZSB8VMxm8uRNwGMKVqsq45f3DNvbXKwVZbeoDEWMg5wTPST7ybfphbdFemdq1j8oRYGojCJsExGDtp4",
  "key11": "2aHPLAyQVKFi7VuTTupfxicxupxSBF7WHm6w6y4rR9ZT6d7kVmyH3Nu7dHnYfjAwcznvyF3aJuRuun8i9qdbgkwr",
  "key12": "3YSfPfjtX5TU4umiKrdeQnN5HQAYxYZxmGdoDJX9ymjWWcu33DDxNj8bEUTpjYB8LL6Ai9o7Bm5rzQ1tvooLBEPx",
  "key13": "5bL2BijjK4S7f8ZhD9e9JFE2Tq1kmnVDEuufMC8iiuBxynVBNgzyxzWbBcUYxsCS9U8yydrB7C33PicGY6DTbei1",
  "key14": "5A42sYBnUhVPwKHwqcbw3XL1S5qifaCYXNCpSemTWpkxAJRi6R7DvtxcK8U8jLqY8AhJnjWWZ7hn7cP68aDDxrQ2",
  "key15": "3e8FALN9jpkSncMG9nAfPqPmMnM9qWyNuqzBEg16hc9GAfHofffBWTavCKqL4Swzn2epnryStJBWay9xU1vFNEqc",
  "key16": "24UNqcKFBDTUkjcdm6ynnRFNRPuk3GGoX2yuEH5W1M4iQ9BezWLKSQh27toN35xBxUj6vBVMLrJk2LJBBdgouePr",
  "key17": "4LeXo2erQqNo5Dm7izZt79BGG8BgSXP8NsUdinYdWsph9p7K2UHZNqpPJg7MKfo4UbugECSTksmhkwwbW3VbAvZh",
  "key18": "2GcXVwKenEmT7kE66wDpaFR8rUHB13gowXVksDCm6W4sqfNyN6QUSq1Pqe79k7W8J84X352DypmjBxHvUq3hMa1K",
  "key19": "5f2trRmohhteiX357eboycHYvQrF36YyHoEvd4NuByTSUavHDYKNTnWhcFgrKzWBFAoofD78pLUAV11BNji7eFcJ",
  "key20": "2ajVHdd7FcrwoLfVR49aUzRnuMe5MTMNL15nshyvNcabbNktBsKd93MLxD8ky5e8ZreBg4hJneEtuWn3ucGbj6H3",
  "key21": "4WjWfRd11hYwsShEcRSVSMEnsjCJF9E6CLx3a3fXoQEbZx85B5CRuu23LMhUmJmc8DcYuTr3UaW1mhhFnEHVKYBb",
  "key22": "39XABhHLiKQAQBChHMnGqBDnw7eWuvUL6JAD51FqP4kHk3bJCuAcbVHf2LZhDhJoRV7LyL2QnwRJ3cdRXGKWGgCh",
  "key23": "4vJVCwBeGVupCrwtGEp9KZGg3NFtJiGx8PwXwErJLmKk9DBKhYSQRWoKNiSFnk3NcTPJJDiFytx7Y4SNEA2ZEyRn",
  "key24": "pDcdg3zu8ep8cVstz1uexeKws91qmxfbKq6B2pSra3HUy2EkjMprSc2c4GUy4SfRJGN4HdpH3Q3prDfM7Xu8DjP",
  "key25": "2UcP2p5VU6p5yKYs8P4eL92AfnjW4Ei2bbi7CCBZe3xsY4j2WEw6HcSqSVX1YMKuxSNxA1axxhNuXdFhCDnMgBts",
  "key26": "2UFhZ4MReg1NbyuYGy5VwwmPsZsep29MSpLQp1K2sAjXj2NSr2bHsirkQ2MdGeTUvvSEMReYiVDmmcx9by3uLviw",
  "key27": "31ZcWSG8bX4Gse4MvgawDxu7kaNNZm48kMemPrbZyMtnSbm8EgXG7BeNNUheUVLB1MTUEMZgDYMQ4woxTJAP3GBQ"
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
