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
    "ZXpzSKcuUJZKYt2vvppCC7NXEnrPdGNuJRFgXvCh7WUCQ92FWqPhnaz9rurWwhg11og6ufRepxHTiZJ8ZNAbWK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Bbfyatgs8GZH2UnuPfsD7DGrw1U3Li3jE8aS1iXoxhMsyttcW6ipqxF2Ybi3TpAYLC1HHUX8JGCL5ebW6Uz49v",
  "key1": "TvQvNKfE5izFXrNAUiqnZUV6XKpfFy3JgAKBXtrNvenndAJTv7wDDHPAS5KEsiTTFMRZiXFHgzw5iadeg28LeYD",
  "key2": "454yYGFcxgqpXYLrw8Gn83bqe13L3HzGxC8WzmSYLU2G8xiyUc4ynnaGq8Eat77NrzMyesKHUVuhVAW8AJeYxLVv",
  "key3": "2wrZbByQXdpQnviAhxC3gjjNnR46nrseMnQJ3Vhery3fopnUF2d8XNhsw5FZ5AaSMEn9C64L7w6Joyo4UaUpGNS8",
  "key4": "4ec9KF5UBNagFSrE6T48XNLH2fd1tgMwjSPV3Rhs4fEreNYnfLAdv9caUiicMVNU9dHW3fKB5AHiurcAjmba75F4",
  "key5": "515gamHWvyJBnonY2io3Wx2HEtF8bkvVfX8tQA8fKcEEcpp1dHjdUNG6RVeF1n8fgLQUy78Ww3VRrPxVsCqHy6Ey",
  "key6": "zsikxPaNKWaNFJeLLgrsTmffy6mi1xgNPSxuW3RYWnGCpkT5fYvp7VCjUikGkSSxSzjJqrqCMK1qkbQigu93VHu",
  "key7": "54hQ5Cb9vGMstqeFiNti9BXKGXNYghY8ECwsKihFinbsvQsomaebPHLSciXSFHZX5PuSTjyhbYs2ZdZcVNij5kGP",
  "key8": "KQyZTVLbdZ78DiNbdsJ5oHA18C5u9DrXF1azPKokWwNAkcycrCtTkW6ELSAkyJ7YcqdKD4HhGbdHJgWLuDDzjqM",
  "key9": "4Qt5ubRMMsVP7wcRzzVTqcTDSfaoh3A47kqYczyF7M6CP1Q1qbo8R9Hq2b2nxSp769BAKX72ChN6DSMATgbfXm1n",
  "key10": "5HH83wck6MohkE7Ag2Ct3mW6wCRe4ttFdcwxjvsnPdLLLzXgDHtT5avgHZzhmXUAdbNag9NDWkZKYAhq7X471q3S",
  "key11": "3Heg8L7bNpvw7Qit1QwSF9pBucrcBcao1USo8TzjLUVVw4J68Ki5j7ikatLzXi7a4bxDps3hEWzWDVqfuRQYEbPX",
  "key12": "3hgGYL8dL2Jh4z9pkPrtvyWLskkDBT89axj9JLM9WkFpbQZ6ydWiRfbra9FqudhxghVKhgSX1JbFeHGQgbTqFio3",
  "key13": "5kr78SV3JAHt5qELLg3FU57Arvp24weDstYXKRVvWPpRuppr2pmxP28qiJgrsdNjg29qsLAZzqucxGTWejUS2dtZ",
  "key14": "TvfjhRnhmFy6qHGFCN4N5joZuUv7CBYypaqcDXbQxqNgofe7uxWxQgGKBH3GdwGKuWpdopd9jw2WXaM7bpx1Xxi",
  "key15": "5y9nZ74tAprmFkoQWvLqxD3sdMJKT9prZM6MDtRquMktYpAVSudxjZX2iC5ErxAY1A6as2Yax7dRe8kv86VMC8gG",
  "key16": "36eQY4jgvFoKxsihE4PNmm2VuNKPGYUTcLBxPoayRLr1B3uWXRkBk2r4Ti8DdKYuKyMdLwTYUjthdGfWdAJrcy41",
  "key17": "2ryCYqXUyb34W8wFZSpB2PiB3Ua8Kp36pfpawuoJTt12SJdZTRnkaoSj7vNhMr9uhTW33TVbLjEpxBe9yrujrdoc",
  "key18": "2qDmmxsKXgL7bk6y2Wg4dWkEwvPCQbWvENRponbhasfNjE9PNr2N32pzB6PtYZpu6oLqtp3y9Jdak4v9bEEgcGev",
  "key19": "64nLs52eHW5mCuMzhjsb3t2MoyXzqtPWhKwirkreS9DXwmZV5Z6s6KKk6A75Y6N8Erxhvi5S2bsLVoy9LmTfivzS",
  "key20": "5vb2cQZoCBYQiHb8KGnCwN8xVEk8FNwkFXQi2riqqYzTVZVefxnh4joRWXbAmJj5srm42p7bXkuMUyb3hch2quLK",
  "key21": "3cxUgtwqH9XaoW3VJDqcXhvtyjYticfkTGrdRPR1f5ED9pt3TyGfvYc91rxCRhory97ApwV34sMAD4UD7KJqY2Nu",
  "key22": "4LXY1rHhi48My5VepXiYv23CuPnWUknf8QViJko68yCHJsXE81YSk8WLsmtzttigphMPddyaZBaoceP4zFb1Byum",
  "key23": "3AEzE5tXqJNav4d2RgwTW1WXEFGcaRmJvqnEBT2MW26Hh77HLDqCfD5shM3hhfvPTxiTuuzMXrrgbwzqkBhNnwaM",
  "key24": "2kP94YXSPy7A8QYTcftehJNGP2Hs4bXA6QRYgnTJZpwGZMh4WarMfhHtV36XSv9wY6cdVzoNMEr9nf5fAiXrQ3Ed",
  "key25": "5Yye8iEzcUWSmcd6BzKc66ewr2nV1NMLWNTVapwbbrimgPG8HjZFHKKJ9ykwhZHGK7d39otYtP84o3xoyVtWGehB",
  "key26": "44TJzUFUw5AwVnsS6HmSfAGtUZ2fi4k4owH79NcJnwkXYxGaotYPmRi5fP4wSrRxf1k5deVY6LNfdB2YgunT4gxp",
  "key27": "4v9Fc3KVTgojAuEUu1BDNKpqJHbRQcnJZcbXUD28dvCy2JCArpG9Y6fWSGk4YzxXYPCcP7j2iTSpMjGoEsxH6pWQ",
  "key28": "5toeSgXW8EzuMgaSYq1wJBQhT2Hioa6euEn7mFvB7UiqJiWc2ymeanKwVQv1cGqLqUrMM4iaP2HYE6BmpJzmJtVM",
  "key29": "5JEhHhAieeh31xr6nTDWv4tzdJJbuwrtjt6evUdnmkxBhc9zugT521SEsSt7mYKoHFQHjhQ8hBTe6mD6z79SHhvi",
  "key30": "2BQSJdJ29aAiaRm3KbLfe3QPFTgQAJipm8J8SWn8Rmu6khZaD58n8sVJLqakr5s6BMQEqeensFV5ja1kjAsjjSz9",
  "key31": "26KBN5Hj7kJ5KoKnqhh1mPJbcbVAbLnVcFPyFy23B5HiwSDgZ7bnW3LSYGKuWDeBhXo8cSM6LPMDQF8QpXj4BXZ8"
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
