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
    "4SKGr5tfWnUVkcFYrC2yB2TNUdVux4BLGc9mXoEXpTSjbt4FGZycV8V6NZV8UcRAywUchpw6wDrfvMcyixzgGGQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtA8sg8FgCXcpzQ8yktEn8x6SWzQGqQpNGL749j2jQz6JNJVBEg5suhawgogPGRbbwZuQUV9QATzKeM2kGesdHv",
  "key1": "3MKYasgSv3SMym5VWHGxcnkXqt5bmYNCXKRL4HQbsUujpFv7MR1rcrtcsYKBjAL2MUX8VxPxmHsuwvH97ipNqVV6",
  "key2": "4T76q9R93v4TZuaDvXWTi67giosJhzWsXawVUtNt8LZbuDhwFQyQHY59wv8mLQoTwkPQ6v5sERozuAYxS2godQkq",
  "key3": "37ppJtFkZ9kazFwCyf3rTy5HoHEy6NbVtKS1KvCHJYr4NVTgNNbXiwE8hfRNw6HUXnsmwpeeZwYZAabWrpdco4AJ",
  "key4": "5o87EakCmXXWLiX6F33bDpZRPGL1ZgorxszsHQMaspbBsTsCHvah3sxvZkNvRPXjjkozikdDY263EAdi7zSs66q9",
  "key5": "433rFLm8KxYqJUaiybSAGCKn1QjFjVYmNNoDSUD9fbwjCraUVdGtZ78xMBZU8eEjBfYNm9H9X2nj1qSY9kin7m6w",
  "key6": "2xwvJSoi69Zn2iWiq7YaoWcbrxgWYvJQSaEk4G3BLNDmLi7iQWutJdQDmrYNmyV6SnxC2ETXJAK7d1e5NUfEJYXG",
  "key7": "4fjTVYqmQHrxZ92K2dYMtV56YeovsQ17FDeWpKsRMecbbwP3a1q65sV8dWcU9EWMaD9CKYZchYfDE7rppee4iu7c",
  "key8": "3Jx4uz8K4S62JDH75fudUqfEmU2nM36CdfPVtJPpoqXXWgFHGrwDrSW8Rpdto8BFEUg51Ww5TE77EqnnZiogbMzN",
  "key9": "MvEMbVDp57ayLP2pGxYQLjqS7riCKzK9HWKYQijxdHR7dq7D72rWdAau5QwmdXvceH3CFwafF6RE3LMQTq87bTS",
  "key10": "3EQun8Y92RTFcJgGKAoLyi9sxtHikLBGL5d6kVXt2fJnCfPHgYMczj6jtPLmtAEX1Pv8e9idYhLVAQd1DyMRCjTu",
  "key11": "3ymBNrygQtJTRgsK3eDasciVxPxHf9tz6vj3R8VC5WMLy1X5u9QYqtx7kptaCtUXACtAnHQ9zyJmEJFNJiCJAxoS",
  "key12": "66CPgKFNqNQk9uhknPGUb8zqUKoRK2jShPvdjLPCh4ZVMdTJhDD4WhNEvNRUiniUa7Fz8dKG7cxw4MHmgPKpGLZu",
  "key13": "5Aa2ym8mCkmYffwSuimkpZwecda1ivNqY5r1kK6PqoYxmvHGbBC19AbmTtjqG3cF3Nw9F69WzA9jA6LJ8G1RUxeM",
  "key14": "1SEZUubTufB5DYg3qDLwSkEKGXTYFJNea8Nhp8YPqXjkCB51D7AmJCBfCezmvrRYta2YA6nhBAg2FZn7NnJxTvT",
  "key15": "5SZ3KkEMqxfrFaoSpCFThEpeYRusezyqMYcqqxwRsjofoAke3D1bJfKbpZjN8W9XYP7zYUswLNtb6SA7vdKdgzFw",
  "key16": "wLu6tEfNatqQisLuXMq46w4ncKNQq6ZU6ogLpgtUCRyMp83R9X7ihxhAeUL25fpPsd1v4Kh4gzC3Rn9xBuET16n",
  "key17": "4f69wjb25fpshvtzXxc32QeJ6K7n2pgvwuCepZWEi8nUPreiNvv9yb9tPeb8yYs3ePwpkU5E3nKJxeofayC3V4JF",
  "key18": "5foXpq8N2PTzUEeyBFREXkZRkVxUyzXdaVe2CDqmZwNNn2YEkFULHof38amuMfScUkGx4S3k7aCicw4qHCxp9uc8",
  "key19": "3pZCXYMNwLmtQ1XgCASPKBvsbDMwd1XQmecEFuXjNCj4EPbFWEyDoZMJj5ikMCWuJpMXnHEAqXLUYPKS2tLWz5xs",
  "key20": "2YCu7rRH3WKnGuAj5wY1wtZ7rqdmUnEETLqSmuFEWJwHqqNegECukhdPc5xCcaBntd8x5DT1WyoLDmzQfxqicFp6",
  "key21": "2TpHk2sXo888fThJnJmmR3hrExvZh9TfeF82XTKyaMTZVzzca47jf3sGqWNNdBeUdcr5J1hrzj4KMxVz1NHsB9Jr",
  "key22": "5TM9PoiXCBrLuDA4HPtCC13s3koMhv1xhNzJwRmY9MiUM6KW9KnUYh1DhcuCwWjb6maPdXU96rYsc4G5vEXuWhxx",
  "key23": "EkT9bm1nC4y7sR8VsKd6AuJgkrLHsyujhrsfW1aNkyFDjWgMKiSoCh8CjWriSoPP4bBq1zSeKbS3VN4EFeRQYBJ",
  "key24": "4JrDVEfvHjdcgoq45mvzL6ijykuSp1Vw4A1daST9uWd29L548THpp4BDa8sEY4EmKbMeQ9o7EjB9CautAkkoerFs",
  "key25": "3YcMT7fALy8W5NuNcdaiRLibMy3f6y6unPRAhsYzhaVg6Ga2R2V76DPmeBxzjuxo7yJmacZMFg2tCHMZhVkMWERU",
  "key26": "5opKWPJv4gRqAuVmVwBzvnfnwboNpK3FgWPSDFT7wHGmZoFsng2xNJ45vV53wpXYv7WgvSYhE4PXnCzfoKFz82dd",
  "key27": "4BaTHc9yAxYdP2xvihkiqZAJ1GFJqgD7vaepmPpp4KYvzXz8BJ9RDGBbjvVNTTZjiUut38XZHkw5hEHCPZU7AutZ",
  "key28": "5JHKzxMA2fnZb2sxgfLDqhXsq4hWfFTy37HeR7ELHUYAKxf2jNRxQKu8Eh4QZYrtzFrL9ARmfDV18o5CGmMSXqKQ",
  "key29": "L49wGPbpMq9j1mxHckcX4G1dmjP4x2NEwdYn9arxokobmfuhhtZkgG3fAZSmb3cSo4yMMFdHUjhXaxxWNshJfy9",
  "key30": "P3PYLwKjXgg6ksFmdBRdrDi7JbuxrcLoDnuiXR6QmopqMKNNEwRiv1TCoZ9CLPbV5L1UrhRanTXqV7Vd2gcyTrk",
  "key31": "2gQ9FBBH66KiKsEy1y9cMRCgVxW8XDepbzheBrFLZXYU8LpKDoBZw84ztUGeoDQjvYMNZY9uRHM4ehbG279gGDED",
  "key32": "4zikGDtXfbvFuNeHPr7R8YhSgLgGSgjU7dLHSVhTxtujBhqBtHho3aSHSgqW8UMVJDvG7xtGqxXh8vLTE3yE1aub"
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
