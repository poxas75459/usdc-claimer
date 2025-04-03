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
    "8iiiq5S2TsptBub68H3vASGiaHELUq4BH4xXmTtvtr5Wpd9YwXqgRASsGKuRGC7YPmA9mLbNK7UR45cC1fpm41M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXqTj3AV5MjPmoQpFPfcmmkm3pYHjtP51ptgjeDGnt5qnQZ9BGpqMgSN9QPaR9Vq14qkRjVGi9eHBkjmNcQxnbn",
  "key1": "25c5evi2GVW6EKoZa1KfkqxB5SuC1mueihNkdr2jgmetd98TsiYv2RrnFnRNhTZB4VD6TnQvZhFe57ES7s2WqLWH",
  "key2": "4xX5ccaBYVZk9owZsrAx9184sFYcCohrdXinNU4MzWZyt7rsWLJ1wBQVz94SuHS7DtM8PhpxYbnh77ULJ1Rd6K64",
  "key3": "1JQenaRkSW1bRcyuWzaohVXats5pg9hAPzpKVdy7PHsKCu354dw4oUxZLMoppMigLX5odT1jR6t4St2LyhRCkxT",
  "key4": "3npXFkiN1rZMhAff5kicRQTYzHcg78BmcCdXTj9fck7jRsvcAbd5shveZ7uV7qukMesEDetX1fZwVTmW8MpviuJ7",
  "key5": "27ULGBPyNzRn6oRdLCf6SKhEVF4h88VcmJL7Z1AKsR9wpbHgvvQHNME1nvY6SF5raMnMCNi6FZQwNsTYMfjULVLj",
  "key6": "3m7bsS4kACpv2zh95S8p3sdoFrHhdfgiGT4L1hEcPJxFfpZgBZxRVEegtFcLn1UZaqt19B5E2hS6A8PzHJXYcTbL",
  "key7": "2GeuWez3qw4DRnkcnMLTMtLBqgGrGNxDLRBFG48uFtbnB16Hbv5RgcDjfeXPBCzApQKg5t29CziD7wXNgxM2arjk",
  "key8": "2YbZWRaDuDm2TztMAc2wk2sQA8KnnnLMcAwaNaYvp24coLQawC4FLK4Ju9prEK758u3HhLrGrq9RWKoCkHX1yuMf",
  "key9": "3LJRxFduch4e3TRRiuPPupu3tpSMNZDRp25LHbcM9tbyqm7kK7wXtc9SFPuyS783uMMsv9qSjse2u2ARkEYnxcyJ",
  "key10": "3nxdraDTcdJCf9irdr7oQKkEwByHe8w4SHBD9RebdyxDGZSeBfPmfrSqDR2gbk5A4M8QEVfZGMhnXhiHoCZTjdff",
  "key11": "5BrCsn84yQJYuSBDKDzX28bGnZstV4npSdRCBGME1MYTHpUZGbshszpZQZrGEBTgfDPJRa1gqASKvxzj4UfDBJDi",
  "key12": "5z17jga67S73H6UX2VF22ccdboPaEFaBL1Dx6c1YTYN15jrDRAURRGEcw5RSWGqiScio1mFqu5Lg5SmrAEt2cE35",
  "key13": "2TFdJ9epZScj5m5EQaN11Hf1PRoHmgdHVtHiSyqnGyc7cq2PuHA2zV8uU5n695ai3qK9E4dCPdSDZHX3ZGC7xDia",
  "key14": "Dgp41n6dxxRjzWjPKajjAsPnn5tqDv2sGGzKGkEc8ezrcbU2unLAJew1NsExUiiEifRJze8o9t3BvcDK3x3sJrf",
  "key15": "314fBHsuuXHzxGc1C57pJpsuvD12pUfpyHQz6knfKiXrRTKxJg454joVKraP12faryJ2WXaqRM9pGnhY7AD6EBdg",
  "key16": "MBZM7uBAFSjUY7jbarYD8UTZU2FoA8FguBVtQhuKg4HpmruNcZ95yCV6nRAZgnqQN8EcybJL3fp9ALwKDV67HC7",
  "key17": "3Mt1B4aKuzfHGG8BqkyPpzx4ncimoqAFBg8XqbyPgGJPsuoyQHkbRhXFEDce6CfGhRSCgCvgonVDTpftPrwjrJo6",
  "key18": "5wxb8XCR2PwdmfTSckrmQ6r4Ewwmweiczb7wQqcQkbeWyG6j1yFT3hMz7moooZUfbYGQP29Xv46vGZ7ohYT1ySUj",
  "key19": "bWWxgVHtqioSMWdQ4K5pZHnq71ajeEwDw5NrXrH4xpZ2ZwhkQpEstyGdvgGXQJo4DGoL3Qp6x13wDYq5mj91CrT",
  "key20": "2ypKvN5F1m1k5TdAf3bF7mvrornm1gDS6ycDmcKUWCJVcRsdzBaT6qu9Pvi35VTrKFyUYCvU8kLththPt3gje5mv",
  "key21": "4UnVAGPEoqzL5BBUKjunU6dF63U6rnYXaR4XKmpCRt4KiQ1WHdKZ4KUjEy8TVNinPMnvyvdKJL6k2pK2vhUFsKGw",
  "key22": "2T7Wa2z9DEyXZ7YCvaYhmvwZ7p21yyYgRz5WGXFHgBvkSrzqwJ1FpXqBnjGzPxDYmCpeuvtPG7bpF6m1Km7AHdyP",
  "key23": "3NXeSoJT7qE4nkhXKyAp9g98Dk4aNPW1n5AyjjfmCSxUHinhq717YXLwVmSBB9g6HHvJ3vfnca7LNbU3MUXDTg8F",
  "key24": "4MgjMP1NA81Ssm4pwRJeBMauoHgiVvNZK6EnWa7oZncpzS6RSsV95vEb6Tb4zSpWV789GXbtEFuZJwMtaudxVwSK",
  "key25": "3QgGVnKRCX4cxRe6ZYY8RSHajxyoaZCqLc51d3yxmA7Kgh3M5WULAo2g89WuSieGj57pmex3gwoEk3ZGDMoANQpF",
  "key26": "5ucQDi91BmZtr8AjsTyEvRq8AXKR9caGcgKhtJVGtYViJ7ZLCGi11sS5KKNtC8X6Gtnt73Ui8BF3kaxaNuxzgMPp",
  "key27": "2DPT2L5yb91cyR6sT8MkH4FCMLjykoFNqkmdUZwMYr89mZ2HEpUuCDuoLCWQmzwp1kwKWbNHjRTw1ZKSFQzzE9h8",
  "key28": "27JtJ83PtnqFAAdC9xu528PwiXQyspXC9ST9i1R121tB6byud95B29xyxXhEUkUTSydXddLEgKN2YgLE6ns7gZNi",
  "key29": "5MXcf2qMcjHES3NRjQP2nmjZJzywjFmNUy73eDZhfxuyfMTC2gyU2coAv9zGjYLbh2UhsXFBxmSduu8RkJzmmpTw",
  "key30": "5tUam6x4nFPntfjyhfhqvcgefuuVdiDmo9u6GagMxkA4iaQKigYeaRo6xvPZUH8ycdKy4T6Dr6W2vSfFzXY8esXb",
  "key31": "27MH8w31foZkHgSvb3qjvTNASFE1Up1h3MkktNabq6RzPpXEh3rU6d2UGwF3jKrRhsmse7veykKHhNuDLZFZSDJQ",
  "key32": "49gXBAARmQTS1QCEZEzFo48TtHDHsA6E6GsfzHKrGW9MFuRKyzDuZWmcLrrJYMnwSCiK2mrgMoePHD628NaxsrkY"
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
