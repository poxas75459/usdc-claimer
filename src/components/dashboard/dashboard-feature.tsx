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
    "4N2jeg2ycdU9ZsgriywcVqGqTy3DFkRiitnCRaNsnqvViTWPwqUjRZeie5XvLsAHPTfDAzaYiZd65RhKBXuxhwpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dR2JFmYGAo88CKvp3rnNg7o2P2MpuEfoKPxt52aqaaiLtvqwPFc869medki9cwUAmtBkbShKeKnnh85QeYx9Wk",
  "key1": "3r1HWtH6gLFs1undmhebip4dbwoouR6ZqnSZQYrdcZ3QJRfWN9hGjvYHCrUgZCH3LokjebsbMBF8bRiH9R28zvhX",
  "key2": "3FeyYnBBuvy6HC3Y9QSxszoghBkrqhvmn4wELqC7U8aJfk2sMZ9CHAAKjL8Q9uVXBrAYeRNVx3Z3R2S2Jp6ck1yB",
  "key3": "3G7mtMwjkVa7N1GLbXb9bmqCL4k8YgUtGyKQS4DNDgoM7nptTqKr9G45oJdnadmycLEUXWvGZ3K6gFkbRso7irxB",
  "key4": "4FyajVVpN1yhbuYmFfSLEJRw4QTwKgobgyPYAiJ85F7LSDdBxZJuc6KPKL4aPyiH4Q129Ji2ApW29qb2PnmPQse7",
  "key5": "4qe6XSFSk5r2r8tZKn8md5HKJf64f7hLNyVnFeuygAauTTukiPM8YL6i3EBTcSeFhZnCmQR472qeTwhxMABbJCAL",
  "key6": "dA9Xcbn95UScc5mZhA5icmZ2LtbSdKsaGGWoDeaproyz6M84tf8J93dmKQpiX5kPhNmBds2xyfZpLGjdQhyyFDd",
  "key7": "5Y5z1ezXnn9GnpmBmPZn9Lyp5FuHo9LjhqA6bdV3Fj7xQSnySooVbpUzD2NRVeSPfniibBMZ5rWKEng1FL2A8YKQ",
  "key8": "28ea1uqtLmyt8pvi5PR1ane2AsLUvjoMhMbRTU7ERA7yDGcyYQJeTKrSqKNrptt95qosJst6vdQoTSbYL831v3xA",
  "key9": "21qm1zU9jAFYJk3sD49r36AvzqXudSEHTpacwASpGNWQgMd1vh1g4M7Arhucwst9gbtWxJdieXjWJqj234HG8jZL",
  "key10": "4NN47zYJNjimZ1LHhbKhxhGnaKi3AjS552B2Q3r9LDiZBnQ6ujiosuRAWnp5quaKEnUx9jkCgeeMJkzFXdcjqZtt",
  "key11": "3cDbxsximC5DtxZVLbjaKSepRqmszbQM8uP2fX15sLppMUR9D3LnwiqXmqRpMxP7dVK6TKQLDMerbVY9sJLjkcFm",
  "key12": "SZjcrVggA8KLuNGT4eqUwMPBzj543huUV9MB18RJs2Vvu9LSzG8vk4XSZiMBX2vUQhe8mq5LyJEYTQb6temHEKh",
  "key13": "CNV9zwBwkBW9nD3iyYGfxmTTjxLPRM411k24WtDp4gbxfAB7nYdt6i1AVoVEQd4pWeMe9dk236297mGAYsKmicv",
  "key14": "3nU3HKKRT6b596GS2v8PGTPhx8yjzfmgAZ6NHBDmmyFQmgNRU8tJA4G5uvXR9YC7vn9hhEPmaCEXFmhBeWCT5PTm",
  "key15": "4Hy2Q9BdXDXeXGxxJF6UYa3wuj7y4z3eXakkczfRJonGrr9PSBDhcgTdXMMvc14BX2q8rRjaQw2ii64HT6VgS4A3",
  "key16": "5caxYQbKgfryW3NoYAih4LYyyPfAQJu2dZPR3Uwq8nq1YD2eXVn5LZAkJjFwUBYH9WqoSjZmojMkihVeAfjWrs8M",
  "key17": "31GXsf1MzYjootc7UGhhXBWAgqHPjCEygzXMvZZQ1EegC37mNDxknyNWSkmrBi2JqE1Hfs8ceagwWXYjppruGVSY",
  "key18": "3c56t4SbAhoTnxax4st5UdJ9nWby9EbMFov4sv8FqJaWQ17uFRPn1ARY7sUSWTcpDwVDEALd6VabbrxRVUkqg8KV",
  "key19": "4VqzfeWF9jEaF2eW5vB875cqxVUSKVLMFhbtLzqfn481ZCQVbVjoi1rwZr86fzNprYhhmB7qvvBG4euAoxPNU8aR",
  "key20": "2NjSsoHD71ZcSShZdyhB2qoN347omWDSJvjccwwQn1qpKKaH7Y7FrWZToo3JozE1z6drc8PwGaK5UMzF97isnSHA",
  "key21": "iABXi9UD7AHKK3GYhMN3QiRmLhSkXKpyHjsPZA6Q4HR2GqQNbJmz1CZ4MK26hfdKrS6biZjHGhWUz9hMo4vCCJN",
  "key22": "4EiBPk5LumfAJJMMpjpgmaWa6LxYTvKo5ZcJCCGFi7AcwkaNGG5152vZv1wr1CvvPZD3tZLSMEXnDWvbxnCQaCnZ",
  "key23": "5G4yW4yqZAPtkLKrbapbCeZ4uDCkQxUsC5KBGoBSnnXmEWEWZQnMannbPDZGPAyYjLFcdAKLqDG3Zwn2tKik2QGP",
  "key24": "3tpruCQuQEXVAwZaAYqAuss9DR3SBZxX5QKAqJioNBptCpahWkpkj6itkF6QtG338mi47GLdCJgjXGcJmCZjBC2P",
  "key25": "4mPRoZ7vvjh6UBYaB3j6uDUoCbM1k74Akfh95N6NdjgpBHqS9SpxkTeZviRrkiWPCM8uDzVwLnXV3sXh1ariGJWx",
  "key26": "57xuB54FkCQkefcmkYZtNNff15W2PEiyi4j17T71zzMVgzcV4PvgZKazR1i2fSUy2GpwA7KnLZ36TTYPoi6ebW3u",
  "key27": "4eww8y8SCqroLfSMkYazHVXq5Qr638oNggQAcXhh51EPWdCqG6H1J6UQ7p7xLn5GHuEKk8kMe5Jf2okwd4SKGxMo",
  "key28": "PYgRUMijTuaKDaf2Nsfk6U5JwfKKYdJ1LTZ4iJyRtUU6axEzibMrGeH9k59qkuWYKwpCBhh96NGNy3HDbukrS3r",
  "key29": "65txzoK54xQvNUgZv48ht5rgE7xvBKVNyxReY452z9EASjA82tuLkJzSnYZhCgJMoMr5zZLAG6PAju5nepNupPAw",
  "key30": "3ZbTznA4etjiZ9QMfCdNHKT3pcfZrJPZD6RzeiLpcjJPKLTXqyjpdFCXkjYcdvyYZGD5dFMcjcVNebQ54Kc9XKxC",
  "key31": "2mna5Ra4tykZxrCW6RHNnb7oMNkRGqHPqrdRoHxehtWfnpZvmnVJt9sjDgPCU8Hic8uhwAT8244W4oZb9jVNTNK2",
  "key32": "4CdpwxiGVURS1v3hKe5oC7Ep7Dk88K4d8eJ1n26ZkuYHUyq4fPLsTZFby5QtT8avS1kDayp8AYN8RVAjW6v4WAvj",
  "key33": "2YTQqGE7mesURLmAP2UBRZ5KdBywz9SU4y6oh5bbmaXF4xRXgKm8QpwRYSiEyJnzCrNymS77dgzhqZSmPooycjfu",
  "key34": "39s6yiBvN6yo6eKdW6oCVrcXaU3cjfFgjY6veHuGUVTc6RjwWe3hHFF5U7Ce5hYdpnA1NoCkzBocxY9d5Buh4hfQ",
  "key35": "BLSYLZq7RGiujstt7uicAyFxyzjcUZEirMPkdqrJo6WXQYYuGxqMEAJSehSjZLxCB8TncH6HwhhfQDq1G2kvDVG",
  "key36": "52xvm2JkHdgUi5ttj13YhmRm5zci2q5QA3b9DiDyo1FyMbCbj2m5GgSjBeEp7DxMimj7UDsxTDQuQhkEru5iCF5h",
  "key37": "5wmxqU4bpdZQVcj5kNqbUgNs6cyfnmUbPt8qFygRDcXrcY34K3zF8vboT5q9ZE2m8aLajYew8Kurpm96xoJipn8r",
  "key38": "2v2yNtFhCuuvRm1D9Gg5WVJnZtxx5cKpmjeQ7jbFWWZFXTrYF55rjBGJP3r7aLS1iWCTTwwxCGw3A63fepzCqdyg",
  "key39": "1cEhtyEnCYF3TLyoKXQQ8G2yAupYCG4ezs4T5Yo7XqPEKsSm6KKmxoicgU5H3GuWSSAKoiJQmmmM29HJcuKE5x5",
  "key40": "4Lx1MwZCuGGRCd2ZT4nxDD5K7WKo3UVQaHz4KqozSLZH1MyzguBfuPksWcoqjtbLjXeq7V1HNT1n2gjpm6CQGAD3"
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
