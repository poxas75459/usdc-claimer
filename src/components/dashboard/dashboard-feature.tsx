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
    "35SULDowBpZiYvKs2qLgi1suTy5S58cNNfdtqLCKYY916M1ZKXVVf22PNPjnzCBEW6oiVnsSEnis6De53ohyvLDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQMeDCYbU1M1hrjRbNN8k9qnYoAJ1YomTDAN53UCUbHuZ17iuMjfXm5H79uNUCfAardN6aeDXXyUWiEgwup6AuQ",
  "key1": "4TMemhpwrsADrGwHDaaM9ozCLc4BqeZSgR7RpdQ2U11yrYrkR1uGp7cgoFYnYx5PGvBv3veRC9BAnH4tgrqLLh5Z",
  "key2": "Lg4UPyFEo6bvrD9Qdu7bodZH7aRctPmnHMmr3f2wnzj5v91xe7LQhxQq32MGuiNkvRtC5hUeAkGPKFcFv8jUXhc",
  "key3": "4utp5pnVFwouHTk19x52CyzDQraz2ZwJkbVXvGMzyzZPD7NQmiRw34EQnUMpNr5XmAX8MJajC68HnfFCzD8pdDVb",
  "key4": "5vKHTkBXRKzhijwsoYEXJ6xox26KGYEgTsQtcYAkunmnDXm3w1RQ8S6gEhLkqamxCnsb5pQWm54tNNzAauLv5cuW",
  "key5": "5nJ7S6qfRsBY3ESNvmW1cndkgzoygLf7iS51RRzycc5hqShoigufGYhfGCEAVSmc6QW9nmEp39kMyENH3YfT9ZLj",
  "key6": "2ycbXzeD3tUgvB6bMzBzQ4GcBQuf7zTvSSQ3HwL6D5aHS8VDeAuYwRWLRb8H7Yh3VymzMXbDDg18Z6ww1qzaBPwc",
  "key7": "2HjR7Y9V3TWtAYR4AQyk9tDVpwQBvHdo6BuYep1bimYf3xm4vmEECjJsnREAiDDed69STVeMXbfotN9tQWqxvxw",
  "key8": "NF2Scju4LjGjBe6phmvntKXqtYrk6BJoUChiDxx81B7NAsyTed8YQtNHrvKsExUoe3AESeT2PdMPd7P88YrAGfY",
  "key9": "5vTr4eC2HHGvzMMGrEJTpBQ6ZrYd8PiAjpZJUTSnU91e9rpN6FaZKhzVR2NJWc8crinpsxUhRAgfkfy62LZ4JXf1",
  "key10": "2fyMuPU656xLxvJxPqjT2EiojgS9XjocKXhZ3qQUtvtwg2ubgJYHC96U8LiQf23Hg5KNgNGikCzRJWe2fK422Don",
  "key11": "5FNPCH8m5YmVjtVaeHnuF7NDm4kKbqZpZydUnRd7XpR2QunXq42Kus3TqVhZQSL1fvfiHjzcGiDdNf7niibDsrNA",
  "key12": "Gq2SiA1EZHXxLdnJJF4iV8Zytx3JkoVFpjBosnMTYftNuxjLk3ttbMci3TG9FHLP4mzTPGLYNG53ttZB8JCT7vN",
  "key13": "25MMoNqYsxh7c4SAKzFz69xQhnUZENTa2XCTxwt9282GTYG2LYupTDQhnEUNqwFKrqG5TpF2MpgAHgWM5vxhYoZT",
  "key14": "395A4Ke8dwMArswjWCzF9AFPHtYS5KaKgkZiGSEnn8ZDvWA9dmCZSj12gydPRS5twJ9VVNJsfj5NBPPeQLXJzw56",
  "key15": "28qzFS64DDXH4jF7rHt5d5KqixuuBs9qkJn7JmRNgNp5JJeH4qaDtiMraxTXvn1TZZSvzYzvQv18dwERuYJxPAYv",
  "key16": "5mk3rovsGWXggCcdQgU9tY8Zz4uv6FDspN8N8fui1qHTPriygVtqeHAwCmR3eE5UuD5TkxrBUZsAdiZJv6y3jjqB",
  "key17": "2RESvg9pktt7HgVsauGSoGdDgq68mfuiuSs1P4wFdiYUKMmxQLpoG9KJgEQmVkMDPJaqNYk9cpkf72EM28p4mqVF",
  "key18": "J1uVDTX4Sc2TNoR2zMpRu23ffRrtfzSWixbMMJ8k8w23ZhKQdAvjX9NUrMmwL1ajsrx6nMGA9LSop5Sj2m2NBKV",
  "key19": "4tvdMUUE9PymbMmxfUCjQoY3ejDgMbVW6PVnjCdyzvq4V1LSqkB9x2mjDHrfaVbMSzNBfbSU1oqohc1v13reQXVy",
  "key20": "4PRmMc6fTpnGQwAm3ZqWmmAx1xJ2iSsT56HzVfgNKckYRY1QYp4JJbCvz319Hj9sacBMUsME7gbfxgF2hv1eEwEH",
  "key21": "3vCBkKMFFzhZfdCMMdHiVuJTFpzd23EGKqjZyqQKxq8hnNHN58Z8wSbnY7jxuBYtGbasboYAYHFSXKNHoJTwpycR",
  "key22": "eBsGmJGoLYn19C2DnpbcSRKAkdcUABYfBDUqyGBjrP637gkhPJ77ypYD69hpDE2ecXiY3yuqut1vej3NXB2bmc5",
  "key23": "KJh3rVvSzPrfcVDjcdq4jtNsjEGZkfjQ8Rp18mtCQMEwGTKTKYEcbmQDy1kx89uW9roQncxCzt8WVthEuTD4xYZ",
  "key24": "2zAATe1rCbcmwrTtYjSaSpC3DsFi3GYUCcZUy6x9CKMhGq2QP1WrdhvwwmVDYKrK74AKGF4vM7a6jnATCMtN5niR",
  "key25": "3Lr2WRQS1qqt5NsdwpL7jE3ykUMxTJrrs4CKQXD5bJt77cSQvGifT4DPh8wJc3zhPbSz1BLA5AX1ZNsXYbWWMcJF",
  "key26": "62gGzjM7c6yF1f1qvMhWetTx2j8B4LW86sjibjUc2yZjh1w3Gbhx8pYcPKpmatH4xsVW3KF7ji4Ms863gvxyXR2s",
  "key27": "2MwMTJCDFCVedbZJLsNJppKUQsEmifG6b85243eYMqpvpU3nE17fe6VZPZPRWdFRueEjQrxzrwY2BUFw6Warn2sJ",
  "key28": "5reBMVvLG7M4PbDhrPCK2viS7cDBPaqwkZXg9X8KHCztSW6qPWxfR132Xsy6usju4VvNMFkFGhoHsZ8Qo9PWYB7V",
  "key29": "27kLLcaNPraQF2rYKoqpwfdApPcqhH4UBaTNg6kGEfdCD8wAhvANoA9rRbym6pi4o536jVin1TonxjQepHJxhpQJ"
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
