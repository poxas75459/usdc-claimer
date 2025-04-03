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
    "3uvpbhSY7JZGaVBfqEG65TK4rDFFLPMFFGRPZtwu4CVYjvAMMbVJSTqrwwJ3tM72aPAfmwSQs6tb3Acgp4Fe6PLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWf9Yq99Bga1zY7Xuu4spYt7AG9fNGw919XPmyPh7LaY1YcGMZ8REf8FNdWrncuQUDKSR6htNMQWNBXGSg9trzZ",
  "key1": "34rEPFpUNz2PAVZ2ePtYcHAevJwkDN76xotPypQ6dm8tALcjo31gz4sdN91HYNbFdvjTN5fqGfBQ8Ke3e3J8cJez",
  "key2": "2GPhebioUH7qDgABdQu6HZ5oQrGfXXkCRf3WgejKHMtEjmsQ2qqb8onYxsXLQfjZ8stmpdKJxqatDxWMohXB7oLs",
  "key3": "49GM3Ydm5TLo92vvcT4WWEBBFcP3uwHKXeDMauyuxNTuALpdH6vrP6h6acjhymbGinFwrQg4MvMWXu83Ez3NLvTi",
  "key4": "JuWVpoR285jKDhmo87kxL1y9yZ5zLaPBmhzzFJT1z9LbF4c4HdX6Laj9UUU367C2e2sD1eAxHWdcFZCycoGYHsf",
  "key5": "4L26yFU579SG6AuFRHut8cby7UNq1WB5g82Js4972b9VFU3EKv7AW5FMSPkT2zHNoMFTmVQF1NLK2oUoXPg3GH4u",
  "key6": "2VFs5fKgerSCPQkzEz6GdwJxFUyNdX3V2fh3RB42snYBAh6G9Vr4K4ktTP8KPSZdXoR2VffcsrpEjxAA7j5nPbek",
  "key7": "5nPwLPpxDKJFzCUtTi6f76QyeLkEC1B767jrR48D6aERqEPkv8kkuaqddgNHaQcGXJDK2oqcKZ5iGHPRiPJBbLbo",
  "key8": "rB4nUwhdfFNZf1QSBh6TDE7NrQFvZHUtYteSVRiTY9Eha9Q3AAdLVNKUnMA4fy1idWUjvHKrVr7fdGdQSWbtGP1",
  "key9": "2iBkeGuw6LNUDYDDjUC3DGxfjb5yvkfRXL169crd9pDm6feuG2Xh12SBBY2sHmhtS89HX6mMDZ613td5ymtgADRA",
  "key10": "124ZKMNqQHCG2K3KxURMsYtkHwiNUipqsdC3habZ7wZ2o6JJBwoBny8FkYUzMzfbUzQVu95ZMDn3Zp2pnuJsRfc7",
  "key11": "2C2WEv3jAWZMNzhWeDStMAeKvJwH8ykuZ7r2Wiq2suY679qaurp6tyMzt7c3xQNL4XkcTkRTwZYDZGdAcp99NkKy",
  "key12": "2cNcc6gRUbqQHqmj7J41TNGvRhrNzq11LF51DXYNhYkYprh4wYeYT6jWnjsinmgt8bsBFCyVpZZEJJ6ZZ2cAgD7U",
  "key13": "xDUnjuTYJ4M5vQCqZtHnXzYa6GHcyLKhizRPEKhgfyPPh6ygjDDKNr6meTXD4mqTwCGY7U76NXLZGAen5ZG8mks",
  "key14": "4Cdkh3VQc6gP4JTJx4ASV4hPE5f8rV7NZ1AqHBQuWCHrLM9BuwG9JGzCABCPipLAPK77dciiGcY5yYgbQdGmskCz",
  "key15": "2KS1BzB6A7NaD7HFRkorHRFweKHV9M7JZW82u5NUcbRUbs33K6aSpk5iUPj8SUKroe6poyX1xqnT2nPWw14szbzK",
  "key16": "52k1kqdLjcw56wUiLSGGP2eAReLHYAFXKZgtRypGTp7RBQW99KiQT9hLtrhXPhUDcrswsZnK1z7K45W5LkToHopv",
  "key17": "5UWWqSh33Lc8hqPvK8DkztV1rYq9HjLcu1eQueXSyHc4BY2EzPXLQF2agThHDd8G67m6mdV8f49Nb7Q9c4tHJoVE",
  "key18": "7wqpc7C7EhC2TsJv5zyKrWuzBfwqjaGtSvWNeGYcC9H7JqiqbjYYxT1i52SXFGh186ndxxjVNsbHS1hy4ZsqcMb",
  "key19": "3mAh5ZhA51AZ7Bk77h3AVk6mpb2oNcriVb6oL3yL2FkUVtnkF5AGSHygV5NfmGAWxSY1DMf67c2UeNTm1m14votB",
  "key20": "2ZwYmNXYyFZHUHGBFt6AuaYbRgWk3UWTeeH85VjfvxDcspyHTRgRwagb2uB5dELxVGkXBTv3Su8jvEdKCz1kvJHz",
  "key21": "3xLABe9wttdZhLqLtnDkDAQArQHkGuLAoBY8ppKkz4MSnoD1WxSkcPDw2gUWdXtjmYAVPcQwkqzetSpZfj85Srmn",
  "key22": "4KtQajduu6xW55X5tpxBEcuZ8jBvHVAieaHBxqVdexgQ4BsDQ9SP2UDboZE6HYRGVtos19wRavp8uSY6x7PqjPWW",
  "key23": "ZDizUB6MtJkXyNV4mVfmVDDgux9J3qtCArvgLhpXgYhSi9FtMHVwb9fUqTHYMY71UvSCSfhRNEoFWLQQuUe2bSj",
  "key24": "2hBzkjRZcyvKg4gztboBWDe2djJy2kmEdAmBEWBfT1rr4wY7GwAP9zaZD3E6Bm4tuRQSnzXb13w21LcK32Hf9adP",
  "key25": "3JM8bebM44HCYrUf4eg8gkRrg3tEEkssQnaunSrubGGFX5DhkY37sU7SvTVPQJ7BUNmQumA9Ub4TEk2h4UoxVX63",
  "key26": "25VpjNychdEN1NcoTyXs2cHpvJiMTARDkx4NnTPgVEVBm7onwpAjvN4rx8CnUgcF5FzRCipyqHMQ2gM8n8gXMrnR",
  "key27": "2YU15dpA6LwMQt47u1F4tZsEQjpgvSkUdVFY1YtMniBVJA9QVoLXeqjgt7qVGSsMUM9sp8myhrJzQZdtKCw1gX7g",
  "key28": "3PFUKFGjBUWgG7BP3gnyvgGHmnhgKzEk8LQVHfJcoqfHSnSnXYnXD8WRjG2V7jKJJgCeiEY4CYwpPCv1yQ2e5VkP",
  "key29": "3ffbEcgGQt14dxBr1E1ifqHELFWrb5asStcY4ozcadaVrAfinsS5H6SmKrebhrknThiooPmeWhGyz2o5VMw25TqV",
  "key30": "43W3VuT9aPNSFXkWYG346qopXL9duVhzUzpugmtUWKGX6Geg5JqEw24PXJJXp9cgPcyVoPdFuHCmFYFpFsuF4EiJ",
  "key31": "v6uhwFP1ehJ7vgu5LtHXfjMvR3B4K9fcSX84mdmaWryHEXnMTAxfJGLoRqKyVu7ToK66tPFWPZHJzmXDCJ6oEAU",
  "key32": "3MLuszKCTUtSs886fZ1HnxVMz6zzUCP8micKJSQxCE7tQFVTSEpu8ZygVaQgQyDNmewPmS1w5T8iuoNuCRkmoP8x",
  "key33": "2sAJUMvDizdb78Y1DjNCcfqYDbUCvzMDvi2venuT18g1Fwo51pavYi78CjsLTzY9tdXCTP3funDQ9y1YGJgzDT8j",
  "key34": "27hUL833qTWUjPwyK9L1fUNPeckXjXCWRAfunZ6FzkwBqkrKqJEG5muy25gyEk2du1fFT7LTMfK7QQd69fS7wYoq",
  "key35": "61Kk9WMDP7xk8t8Yarnt4KjVAkQWzkace7BqJTxRRr7v2WbrYvNG6XsK8oQCdk5meEsZmYzonSfpezky2excoMDv",
  "key36": "59we6dNsafEFZT2bEPMusAGDV8dAuedeewNA4rvW4LXFzhDho2cXxdtqtTA6Z2P8w6ExW2JnFAaZu1biA464HMuD",
  "key37": "5y9A3vcmGabivyiozSEcRvapMPzmYFqMdusYsxDipfhzue5MmG8MSzRjpA5Yi89tZwHpNwKswMdDRmyaWDf1czFw",
  "key38": "2wxDQnqhSMXp2FzNiCuA7mL1ZxcxLDndE9NHgHawHm8vdm2iKkwXGs62cQveVbG4TDn8vSjwhdLB4de4a3Faqydx",
  "key39": "31tbDaAVp1e4BVz1u4ma7GohGWUVVq8hwEFcAJWYy1exQ3VVZ8suFEestPXkXEpptEMG1BESws9Qw2ZbZzpNUo4V",
  "key40": "5uWWne4bYaAwRYSH62Ab67dsyWNNpbfRNyDRPUEmevCYuGHeWn8jpeviz7tbGVHoReLDyxcW2Rnf1hCXav3yMPRe",
  "key41": "3YQBTVHRAZcQ46FtYojgZZnFvcx3cuteADUEgAHCycEkJWZxqK3SqFCcn1f9WY88Mu1XpGc1DQfh7EPEUjZo12zg"
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
