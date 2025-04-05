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
    "2HutDSTFTi4UJyjwomN5wz53np67mhBmH62x7ZYctAgG3jkk6J4anyMhnagunYfaY6zot38kV7PuCBy4zks9Lm32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467z9sKdgtJNdFwWm1yQ91SH3iwfQgVaMmh1y3EWB1j52ZtfskP6C7qGtwzqi9CSmrzczfk3N9VqR11AKbXfkUWG",
  "key1": "23Xv7L5JkYRMhLiJyKaZEcdayMDV5GTXUgfedhmtiW4rQNoSp3cwJqBVUEMaAfNEtq4zJxmN8QCydE6N1vJYusE5",
  "key2": "4kcMmP9f9Km4aJ2ZnixPof7B2Y5dFr4z5kocBC9YQhANeTZjTbYqLffrfMdmSo7YSUJT9bZ4NZzwuhh1pr3QVtMw",
  "key3": "42m7HwiMaa2NWH79GdRb3k7n4gR6W2FzWSMcVKhFVxF4pwsTFqeFDhPNUcBCqujoWW32yBFMAWoJaZaFuRGxTzyF",
  "key4": "2vo42QeS22FGhXF5hKdXnDqNGvagx1taFUox6Qk8enba7yc89ykvxkvgJvUt9VNBuKioZBbMTx6GYtTy4B5MW6Gi",
  "key5": "2cY6VpL7wM6FeibqiTte5zvbn2bvFhorMmbSR15L79y17U3iD7MAWtDYug5KehTF5vjqxVXYV6SUFZtYPSQPcgUk",
  "key6": "5Zu7B5VAHD1yAnJKm8vN7QyBwmt5GxFE7FQxvX9zrsgghnQBVt78MXzpQJ2DbgB2CsuGnVuVTvhGnuVQGLP32AA6",
  "key7": "5h6DaipW7pwVip729CfxKPKRcMP8KTKdPVes386uWJ2CE11GQEBGyitcpA6pVX9WNf4toKDyQDbUNhSJRHsahZML",
  "key8": "JV9JNJVBhW2b38Ad1Z8jKjmmMBcV3Z8e9LPKWXJyokRsDvzJ9zzVQLR57RQGY63Lsb4DEHUCUXiu31iNvT5gH9E",
  "key9": "2wpv21wBVqLYQak7MoaJgYVU3sLG8DT7cBbHkw85gLRgvH9ecp8hCwNKAwaCULzf6juVJZppcwTKYv1yEM2psUDa",
  "key10": "5ebYzAtq8x479DEaLrR6qK1gXbT7aXy5RdgN3PXL4uujTzuAJfYXGr7rCq5gW7cJQh7ubpvdfuUFp3cssERSmgfa",
  "key11": "58Uk9y15xM1fUCZ3TiWGD1ZkDa8SCqjtt8PdYvjC61dPCWh6VmCNT31435mvBLNXwL3a5s1ZqBvmjLXE9oFvg9BB",
  "key12": "35fZ9rDbXzGqDrjPzsgAfZSjgbDFb937KWzQqQ5Kvnm62pimVMNAtT38a7cAVAbxa7uBpLyCoiXRP2ZUPvdWQsiV",
  "key13": "4wY2r129NvXprtajBBf2e83QLADhJ8MdKEYCCBnShLuBEsBPCe9139bfsmYkTE5BHYSytFHnvPnzPCPt2REm1B9P",
  "key14": "2Nnbi6AiTPLwdQHEiE9R9kCeDueJP2QwKx8MCPUfKunkKfKg2vSWWeBXKv93Pa1QZnUYE6kJ9ezrNnBjmqgm4uGi",
  "key15": "e3Gb2j4uv4Mm56dRZk7FrfRR79Rq6hbsXP9ikDfT7AL56YdhAc7HYygSwDGfnUtBe48t5HcpWkDkUmnqG45krhW",
  "key16": "4fxRdTbkg5nJ6zMuqZsTyPyeAEkwBb5umQMuTaKrSURB9CsvaBTWvHPX8wTZPuSw8frmALNrBh1kDuV6yjzVKvg1",
  "key17": "2wSUAwGHb1jukz76HF7xX8GuXVtcVK7th7AWtUtaa6aBC3HhSfX5vvojBKuxbfBSJdxjoSoVdjuCV4aco7nugiqG",
  "key18": "5m3zYvkjtA5hWtPPwpGjvUnpQbguWCDz31kYVFgUhuU1rix7LwPMDue3yLcUmbPtivbiy2T8tfjLdUUuyheeHHwK",
  "key19": "3tCNMgT43F1kXgHCnxKPyB9ABUexviMHQHy24H4gEyx69Tg52RJJ2gCZCTMiiQ5a325ozAvm4o6n8RcVXvfQBaq4",
  "key20": "3TqS8EDtssRDu1Y85oijKDnt61jF7S6Cg8CgSF1ZQUM7sUPFA1AMch9TyYL6QvE9vLfHrgaPbPdP2QRE7eHURD7t",
  "key21": "2c8ceDkoSAUdrErqzyDqggMvqYP2YkJhe1FFUwHyuxDYSAsZvvt1MXEQWFWnYXRfiQUcpLwUF4n51fookBjBmXLJ",
  "key22": "5zqc22VMyd6pcxiAhswQpvzsWzQ4BCX43rWAmqxdfA8mqLbYmAgz1VyYXHSHUAzAaeXUF51dnbdUT9MQDxLGKLFV",
  "key23": "5kyhpiEZsCYNyFiD7fa1paf3jreKTWNdUtRZzZyQau3eCouXbEAy1LCf2giJ5zmYrzJvr4wjhkiEdJsJCvtXahqL",
  "key24": "5JvaATbfsu6YWv7kV4f6wJcAXmYjyJqMVHh8wCTz69FW2pZu34h3kNonw4gC7Ae6ZQPHSYAjv95WMGGnxdrn3Z1n",
  "key25": "4YDTbL3y6fXVzF3irSUDQaVtgvrobdUQ1kf62RosSQ98cyC3eKUp99V7VuWviQthPPBBVvG7Dk7WdQQGWKB6n1wg",
  "key26": "5yZAMErB2WDqjwH8wEWUfADwrC7M5khhVYoFSk9A8PzxyBEA8e56AxVXVHXbN75guG6feW7tipv3HnLRWN4BBU1U",
  "key27": "4FicEuBsEw5RNd3n9ahWnQK5f9J1eGEz1x39rnHZj5exnXJnnYUi6tTH5pZ76htswujWi8fd2RFjWJpWF7AXAMrd",
  "key28": "48oV7GavXA26wZSoffryLHivdSH8KC8TiQ9f1TrwDzKXeMbVh9FAc9LEmBQajPDCzEmcwdAvETkyhhCpkZi3zgXU",
  "key29": "5ETeUmxDbab4DcJCYzgqe2CfWQi7D44cBfgTALHxqS3j9LUYmSLgbceKh1gXkkuaMLBcxoYyBqz15RsvvixgqdHC",
  "key30": "2VYzZdHp8PHipxC1ENeBNaXAvkF9LCHE6z467A164kxYTyvpkiMjqLHaAYcUxgTZKoLYTaGfAokjfJsBJWUgfavv",
  "key31": "4Cx8oHYBniCyEJTtP6bqAnjZS73W7A5giNgF6mHjJRdJaYJPPfZYpPLaqzyyTFFrWRR571Z9cWQGBGHeQRvFJPAd",
  "key32": "57qMBFt35SQFDXqV66panm8D8sVUo3mrvx4ECM2nPY7EFMcfGso4JtJ96V1NQCcpAUurUAr1fEirPLzHknFH5v2H",
  "key33": "5Anqm8oFXjm3zczCJfq19ou7orcKNLYUZ8PGQYAr4VLr5UsC69BqgDLcK7NLRcYrhJxSz2kycBLfZkq1xSUihnQq",
  "key34": "2dnw4FU4ArpNxK66k1urCR2HUj5BnhUZbj86PMBT9FMbo5KQ3Bp1sZn43H1pioYPLLcRE2SV7igfRGAJLrn5Wyjc"
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
