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
    "5D6rWdLvb1rXuV9yfE41EY4QHFzQ7SPGHg6HGvJbA82CCzfARi5KC3bukNyEPPZNBQNawcJEejXPbeyKQhpWv5Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StpwyQr6q2NP2PD5jkPiYwzy3x4dLGzoegRQPf2iiGKWUV6Fof2XKXhn5WdLMUDbT7mS3mdyquSwiuKEpiFrPo1",
  "key1": "3VHQtibQSsQx2SrdK7kzauzPbV3kSdBFNJc1wkKjFnnkcV5twB8r5FAzpeDnyFYiBfjGchxMwkRnApehW4Ybh46s",
  "key2": "3Af8Rsjw5Fw9wBxgH6VVqAUyfEgKWiAAn9dK3cCyKqpNm16iJaKBeNxFZ2bu6NQbHTn5mktqLQKm5v9EhHwamVqV",
  "key3": "4UTS2jiAtFjJ2c8fmNVi2xfL4YoMmQJuoL4aveyZqHPiBVLcj61rDATkrjsMKFmm4GjfLvYrw3BkbT6rZfKifrWv",
  "key4": "3xrmy1QnSAL6RcfNC5z8GYyuEvUy2FjUnQMRyQivAGptYF933G9nj3ggk8JjNL5HePK1ANwUWwKyi3AT6yRy65H1",
  "key5": "5wQqTr8DWD4prjWhvsbQa4tK7eX4s2oDjFt4HAsxwBT8nXiTyDrLTTxQ8zTXRyP8iEDCJ3iVNtB8j9JeQFz7FtS4",
  "key6": "5StKqw5abDXbUWm6M2eNJUvTJxpAsFwkTJPDsB46syCjQeQK5CFmcs51wx7mip2R5q1M75y1VzBPzxsz3hHmWSAa",
  "key7": "3TwrL5g4Rxk5neX6KgsrQEvFnRcR4FgJjmDTeMRXZubA4QHBHsQ9XmA9Uu1BKUHYQSWskQFeUN8QMbXUAWehpr2A",
  "key8": "5B1mXKziyup6sZ9JJn9VKYexkomH7DW8oquYVB1B4Mn4V8nPhG4RQaftohfGizyDNwtWXowKp8Ru2o61tvm8pAVa",
  "key9": "4TBLvDdEsV734YTvH1MGiBDUUhsjSsA3DLvqGrGggkVuouN69PPeEpce1vTw8nDRoN1G3ikH9tUrNvRtb6KJhyBT",
  "key10": "2V5u8DbmaP9QU8sfTJFrGiMojJYhZKhKuJx9nwBBeLecgS5n2sG6yin5ivnMVmoa5j4JpfKW23KTCgkwvoo4ejDb",
  "key11": "5zDx6NicLrnTyqkodwUnhXzmDmYYce6vxWaYSxbAijnMt2q3gEp9vKr4ieAUCsURU4MW9inneQKZLAyPLx496n2f",
  "key12": "2ZvmQeR22ETEeHaBYxrr5peUFM9hMg8L6Kz3H6UsLFAGTnDyREwzTnH75iR9zQ33D4vVZfEMym1UNjPmh4PcyGyz",
  "key13": "54JRH7KJMep6hn8EoXQ5BNj6ZUERX8ZPBkJv6F6TMXuTkudqJPohyG1rhbBwFmTR2H3CPVg9cEiUjzztQWbrN1w9",
  "key14": "59Y8yLop4P3QTFsYxPN3vtdUL8Y5dx29mpcTv8ciireMQVBTSoJcZemXBvzbvCxU8xu19ML6kkmL3P7NXDFCMSzt",
  "key15": "3qvFk1nf1UimW5RgTi8wW19PZe6RE7rBdN9tLc81V7Ay64QGJcB975xoTjGyKLt1eHJxQJPpDGcib5SvEDcj73QW",
  "key16": "2EC9wZ59GdY3KbJjN2hk37sr84RSPUHZUQhKTKvTnsimAHz2LSuDxfDSg2LDF9m2K1kzVfSvhMn2HMZc6JvUiPNR",
  "key17": "2yoYbwuj6M5rAJwh6AndgBusewi2J3RW16ZRiXsVcA3J8dMGs9FaCmx7TiHGMYKp3Q3FgbhH3tvrJ7NJJz7nJZtQ",
  "key18": "3g27mCLjNpciuZyngVHRqEjUWRr5SE9TiYTKNv7Sd62WvkJXTzf8WXD648KJPENmbPQFZaMrULTV4fpZpXMdxNAp",
  "key19": "T1fZFTw4eQCRwHd9vkycgpPe4TfCmQjZfXi42ZDHBCYagkmcM9eNKQR3XzbQo719pfw3QU9JF4r2UQBwkaKPvtE",
  "key20": "3xGBxM7PyMMJCb3oCUBeH1AKAjaNPRvMneY7HVoDr6sGbHuY6BLqTzET5qpz7xcaDRbZPtgxVS1RYVjSxWvnzqBU",
  "key21": "3AW7YzQChhBD3Ft2GzyciMSajwaQhUAM7fy68pWY8Fmq5m5RZZQ3oriynPiptQ7ZXypPGZcfcA8ENgSHGKQ7zzvX",
  "key22": "8zzBBwRbSA3jA6gdzvXD6qQQFLqppTzzgJxVKsH64B5qEgibX3BrCjJ8ZYMyay4JwBnc3zxja6NRFQT12rnbyu2",
  "key23": "1X5gkoym73UZejYo5TkMXHXB7QrwNdJpqiLWYqcjoVmqv4psz1mhYCNuyFB8go5whxjs9Kh2yFixXZnyDoM6Ehf",
  "key24": "2BvK1QHXjYUYq2pw3TaxdngBKffL3ugJa9jppFpdj8oCwQWoH7LecC7wKmbhdN9bE3jR1RPWrrKTfJKfrCGD723k",
  "key25": "58i8Tqry2FwKHPP3rjrwDE7JCa1L1PC4ff4fjQKQ4DvL6EP1B7xMSrstewMmZPENkeGDH5N5QzWvRSnjisQv6bn8",
  "key26": "5hUbwDqHaxK3SqeyqT63GVaVbnKQ8EYfphpn4q56jFxLJGPpGsRQDqioEmrQst4FZhVVFgkuAMDBEaYM6GAt1bxg",
  "key27": "5qpFjmQotmk9TwWEfwe3onSei5KsD3FNJEPmywpT4o3uWCoCBzK1uzwtC369ya4ujLSeHWdgPkQxzMVr86WvenT4",
  "key28": "2C7nPmViij96fhgL7vezNgYy4H2q9HGj1VViFmmMsrcvGfQAcvPNE3TrrMpbHHqi5c12dLoqNwq3gU6tsUAbXc3a",
  "key29": "5Rrh9abnf8RwrZhRLyGiXCtmkyCjpDNaVjutocWoqWgim2uziLmw2B8ZCgyk2x9SvPU2wudYn2zMsjUg5iusUMUV",
  "key30": "iSwxsMReNK9Y4xmYvegmHgvZ9dELns6MGRooF2pkGX2bo3r96vNyqf8Y266PLoFgCS9uEPfkoGdMaFqeoVFo7pr",
  "key31": "5PpzLQGwgLXbeS2eZgGrTqwKEW7tXqpdprH5TqDVymPKZyimpAxjzjSAGrw2TaPNncVq3xXRFCnE8JoRJUMDHG2E",
  "key32": "4TowcfJd5Rkyixq4kSLdMHT3TfPNMo7HJ14cN4sLyVhkAVaSH5FdkHU9LdcQTjd57X78LBms2nGhia6FfoVYEeUn",
  "key33": "2LQ7mxCwxm49oEcWeC5F293RBcdBWbF2MHHiPWDo9jKzU3LF2phy7TxrvPtUsxNi8aCVw8NqrtWYusb3uZqus6sv"
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
