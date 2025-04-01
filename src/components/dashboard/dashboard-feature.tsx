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
    "3ZG2tK2cWfJMSieSsWqJVNiaGSCLtAvHGY85CDv6vsF29BAbVqtdG2n12BXvXa6oN2KyNceiXUuC8jF7NKhcEy7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGxdhmgL9rN7cfa2CJYur4ubA3wN3jpa1UU3tw6774PBYGqjedRWdH9hretGk3eXHTqjxh9bNsEo3Sr7zNSvSST",
  "key1": "4gVN1d3AiNEqPXCJC1BHaMGVyGY8PM4qUgjTBzeSg7jZgui5X3ei9qDM13wAS8NE4eKLHBGcJNeSkpyUa5RBmsKH",
  "key2": "45netfa85wzKMdzZkqA5sSE5GRFyubtKMbh6HoE3hqz2eWEmTJTv6vpkRfGX3boPPYAPAZKURWFEvtzo46WSF23n",
  "key3": "2FsHnP6TTUnzRG7hJvdACfb49oK8hLmDtKX3fJPUBY5QcM2WFmbMbWnfAz6h3WmbcsvcM2wM8t1TUPJj1Ep3Qdca",
  "key4": "4XQqLtAd35FWfh5YuVqCxXWCKHHcaJ464F48XEAmmS7gLJTARPgq7o7nuciGqPWecaYvtqs3THzyyyDExP12Hi7i",
  "key5": "nrLPoMUzmUFTwGQ4uSbUUoQuexR2BUnK5DtHuhGB4i1PFeqjrRBejTrGkFZxV8q3r4hepRq9cX8y8u7UT6HxxM3",
  "key6": "3wdx2UzaddVZt8CkcWVJH7QGmHoYkqy143VwnSJnUQ9FC2vMjuYugDzwQcQ1t4ADTcR4QuNmiY4zRqLdogz55qUD",
  "key7": "3H1zqX7uad3gvqmhmnzS7bCMQuGQm4HNzxU9wHzadnhG7E95nw8EwB8r2TdQc8DmWtWoMhHDGJoPiJYnS2ZYrjxZ",
  "key8": "3vsAygRi3D2Gcz87yq297SFhVzoPvX3VXSeCcpwC9WqRMFgBAGXJ9HxKAQMUu5BTPD2PYhVLFbR8eFWt2aj2eNML",
  "key9": "25cpyvQoiCRsmbLxi3G6SN9fVUW7GocfCDhyhrqQfmgEtB5f6gVLLQauAqK9oNDcUeaiJnEHkQjUzGkwExXeKuz9",
  "key10": "2MxgVuWMeaUYBVFfLYXtewNYDCoG3Xeq9AxdbtykPgbTEAvctNGqNSLxkiuCQpg4u1NhHJCuMj4PuRsh6PeogC5Z",
  "key11": "3kuuhbpStxsHp6xJuSWvx6XTFCfBC3wqt4FZss8TKwBigGCFUqA5a4BE7DJu2MFUqMabctvF9ix43nw3nCrrTbqt",
  "key12": "2E6Lq3AWg9eriLxTi92KXZ3pLMgxLw43nznVe268RHbJifud74GRABia17hoEBhNuhuxqPY9wEiTkgErWmndMNMK",
  "key13": "5pYuyMhPfHVaecmD3mtGG6zLRj5dBLeEdvHpvTCDu8jUsXvAZ5TjcLtYPqCVe8jc3fqK1std37PboJCb6Ty7Radc",
  "key14": "2Q9kdnfDaywEsbG4UGUiWRozUjxu6W9h4aQxka2UP2keKwWdRqVBPhcxo3MSckDvZXsQqfWN7U4EaNpUhjTjBiM1",
  "key15": "yMtbmE7pkW8z36zygnuR7KX6RyK5X3BsYrVsNYj54YooXT6QAT5K4EunqnVziipR2yBd5zFnGVya1MKWf7ttEN1",
  "key16": "2a33WTMFALNhvYwVoBJvY6pF4RCMCddTfUFGeLBWWVRFaX7TJAm18T5pLReb9xZz25aEUinfCVfHft5bY5j7zPMa",
  "key17": "2ACTbxKLX1aKKJzr8NBaSRT1KkQS5zhCLwJSbRLKQd7aBFQUw1Hu9HPnf1xtySxyvgdEhZbBU788a7U3v2JxKMSL",
  "key18": "4TkgPpemowMwshYJjUoZvz1t6aPThgNAwXAA8p31aMot5BsJKYUGBpXD6TEvAUUtSHxakvmZjtn9Fr7Xpq6kzcs",
  "key19": "52LbwFjAo5BnsB5p1Z9Q4HbhxLrqfyAabW2e8SjHtGuqtQaMqF4XrE5tN3i5ZBi4CASLab1EfCtgz48xMCPCGoVU",
  "key20": "3NfnAUczS3MzLNmNWsqVqixFiUK5dyDdEL7LEzK4Dnv4pMnzYRUjM1M9yD3RAwCNeABH2BUY15ajBgPRptuzeQo4",
  "key21": "4VarnXWu95St54iqhXfTMXK3AKLWMLtPs5LcDcgbsanBqTCUtp3TFP55RfssfAjJhRhoF82eunUc5wgaPT2mhh6Q",
  "key22": "63NPo5oaVmeWeduGJvwmVSETvH6mEhvecMUueB5fmtAVEUaqTyDi5wpC3ETysCaWZKwXsHNXiuxcVHov7NgUWKDb",
  "key23": "51XCwBjuTFMnaah8ZnvY4wnKoUsbbGqf5yEPTrYXxNgn9uZhKXonBh1rTLEGyEVydBy2Y4sapnhN6vPdCMW6pBjP",
  "key24": "3eduGE5Cm44M7DAtjpzgrBhuvC4FCCfsnrhPGR7H5ieqpgtPWnEfwevioqDSjume341MdUpExfo66WLMB3ZbnCqV",
  "key25": "yMWTuvxb7QykqXuQ8sXHc8SY4qHQeai465oAhx12XMSHTe2MNBA7ieqUBZAEoW5Me8EFrz7aBcaRe7hpC7WLf9S",
  "key26": "5pkmNqH4KzMheyyeSsiqeXWqEp2BUYwu59bUx8gWL6LCkzz1VDTLiBgGRNW2yPkFgQDLSq7JxWcyWX6ivNx9AsN6",
  "key27": "4UyWUiCxkfPwKQELyoBFyazmLRNJxfG7v8bvCFd6TUYZH9fcR7jW916TdiGRft2gR5A5yheHJhCNuX8R1tohkWcX",
  "key28": "644i252a6VngVtUuUFvmVcnsgUjJwYk7jqHGWhaDN1uUfj7LYR8cw1cgVGTzzdg6mhwrjZW6H6dyoghx2wgoTHmm",
  "key29": "5LmhJ2gNQvuwYH4cCsxkvE9GW1XvZf86BkbCmYno8ri8CNaCadAgZ2vwFB615rK4tVgNXVn5zQcfvvi1H77zemPv",
  "key30": "3i3CYy8Fwykp6U3u8nTyghiuA2tBcfF7kDtZPs78RFPFDoBFwwugjwpHT8jM3L8cTPkSaugJhNUC8gDfw7RHTB22",
  "key31": "5eLtEuh2kbEuphAfdTDUpZ3qEmKNV2unBPztW6rK5mmfiSicTQtxsGJMRF6oJYY4SViAiks8goExD3HnEV7tfNXb",
  "key32": "2RFbrcSUv5oLujv4QSgyVhF5azGtEvQUd9cbZTihihDcnuuVxpVuwkoxRyXq32CbSUTVxQxf15MykYCgzUzGVQmz",
  "key33": "3WLfd5YJA2KW2H8zRU45nXR7Q7T2qjVHKRr5fVERibJJetzS9eUznK5FknJQFQAbDd4jjK6Jz7EzLXFA7FGVrQ53",
  "key34": "2S96TziCLC1qhxj4meXbFF58DpCYeovv6EqTFgUfhoD2fxNs93MekEuFvKQTD6iiYZNBxhjtbZEg6pbn5UqZW4vk",
  "key35": "3CpJCeHgnYXfCSFEKDwc5MqJRi8u1gkpX8yWYH8dhxWiDsQFWcfQViH9PJc4Wdky4dtnMVZmX4FA69SDxwRXtdr1",
  "key36": "4qoH31SNTQ8Y43b3jLAAi5YqgPFqPXpB3cpdc9Rwna4j53i8o44mADeCEd2UrVAqSJdYa9LGtmJEySotZn9t79vq",
  "key37": "3LAKSzozPpp6M9p6ewkzvx6Kov14Mcx43EJyDSZsCiQVdtriiNZ1qaG4AvmjaZVqZgPSMqYubksXsJ7k98Mcg6To",
  "key38": "5Qna4K11krBhKDHKEqk8Wac2orPt4QXdaTmdZBHiLXpAPwYmnRzza9m6jpE5GyZxRJK1WYEZF8ofyZ2MCQzS7Na8",
  "key39": "4hYoHMqVJmAHHDdAc3M3gYEMAEhxTRHtq8Rqc6bfmxKvGESCC5uqhzKsEWSj2ak4zth9cbfvTmRaXZck8GPLAjaT",
  "key40": "3fjuDpUghMkKAJ7WDaDwrYTH4c7o46rwJgjSLevNui4iuF2y3twgKMLKeJRGd633PmESCGd7MPPxxJzuautnCyso",
  "key41": "rmfkiwCsqd1eAXrKUzmjvJc45d1ZMAKBoLTBBnHthvpSht5tCcaxF22ndYjwkW3Rn7pde79Jc5dFSJRySH7Wb5i",
  "key42": "3fasnjTscAADCM5uJDMxjZQCDB6pDH14BVwgVgpruJX5WA7B2dTVjZRwe5TetuRC93xcmsDLNvzD2y2zWvr6p6r9",
  "key43": "9f3RaSMeh5nZbVghwJHegVnfQM9CtqnQ2ZehXUNrk29Jw6uMrMc3b1kc9GAHFRqfT6i68s3TKuf1YRNRWQVQGwo",
  "key44": "4FNdVqXa5gxxtRVVDstkrB4PSvNMjUCPv5SPWfmmcnydAJYpmKaPYE6jjy5E9KQ9KWy5r4kAS1pyVkrzPW5YQBYo",
  "key45": "4HPdxp1VAzs9rcfekaQ4sqR2nm9J3Wj64sRcAeJuBNNFrSYCFGE1SkmvA6dsZcHadZH8ySdpQLnZN2DKj3v1QhQc"
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
