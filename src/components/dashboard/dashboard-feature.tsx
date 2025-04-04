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
    "tyX8WgD37KubaukEhqaLv9VJHy7tAp6Hsjkt1fLnJ5kZMELfmERWi41RCZzxsxJhhauzVWEArGWwKkzQszD5WLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARyXnGUwe43FxDudaVG5hvvh7NuMyKJHFqCVhqjNCvaACbJ9dkoFNXFz1yYz92tCZ39SC1KL1Jq2va3vFhqrXNu",
  "key1": "4Nh932W1FU2NB3bmWwJaXmfSKwuUkJ5Lo2kGfmdJyF3BK8hAVw5BTZEJQraPHDDvizQZX4N4CKBJZN4WHxmUK9z9",
  "key2": "26SZEm4xVLM6bhHhZxQs9SzAvt8rwjgUNP2antgLBBLCJLY28ZTevAQQw4Qr4G8aSswfYBAdVHrpETdUKTQFLiqr",
  "key3": "3pPkKwabuFNfMHLfcBCn8KWqmur8iXuaLAHPk4bxbsy2q4Mni8ckeQaEHWfo7cUsQpcBUH9p4NwxuGi2Ri9z579Z",
  "key4": "27QWayzSeZ2q1xmcoNmsLWfK8MyioEJagcDJEfkA9SoT5TUHMC7VAEyReY9L84AcPzLU212ETsqiQkQ5v1tvmYmj",
  "key5": "23SRn5nqvBZp9vYEEpc8kVakomUfDT2GrQ2Qcz7u48apE9hVCgMxYa8mK5gQGzGba3KzsABEfQfeRNYrQQB7rADi",
  "key6": "hBHopEZj4CvQY8jU9oqkB4CRhhhiGepvPX2ZgmJzLA5RkDvJf4wCv813e4S4tmn8SF1cV2yJAVGdf4HgpZtHcXG",
  "key7": "64AGnWQikMshQNKS5wLK8as9soVdCmcXJQJc7b2fKw37BxhFzDkQy4yTBue4JfWywGSWNaGk1uZCS2PzA9LYm34c",
  "key8": "2UoqqpxgYoyAYtkou6kRoFSGonP1GUZCS579BXXTDKmNGt87RfHAUzG3H467Z5FufTjVtY8AsKrAkRnjvDpAeVAA",
  "key9": "6134qFHEsnstRZLXEkR5rsL79q4MjNzvXfKbDzLPUKVbTss6zmwiCe18QfTsWSHga7YsPWPe3wHdgRGownDEJLL1",
  "key10": "59vPKMMg7HJyjg97vLD9rPzdXwkYCHbvAM15orbTwrGgT6R51LPHcUuJt155kG7Jv9xvcsZbtcq3NoSrSDgU5FqR",
  "key11": "4ZJBwHZfwJhJyX61Tz4DpMj7d8FBrUakAjGocT8PAvLE9Njya9ykpGrUcy8Uw2Fo8FS25Aw3DKLhMW5Fg4GPo5ow",
  "key12": "2DN5jJRHhSf3n3Fgqyg3AYFKUPf3NdYv8hSfN7fmc3R1pUHzAByVe3syxzw2woFFcXsQyw3Dh1ZofmtNPeJwgS5K",
  "key13": "5dfHn5biAzT5svxPMV6fPmD9gsXet6dhfif5RMMbSom1s2sjpDnHCvDSbYBAqZMHsK4DYmQSdjERaXejSM7odJvm",
  "key14": "4a5QZssjGAtteqZ6kAVBQEN5z1PsGTk56nEWwvhmz6L84WAbGKoJC7AyCG3fTUL42ECdtYCWk6SSpYdyDY66vuCo",
  "key15": "4rmK7MghN3VDpbBFyFbBgCdyh2s4HdphkYezKfkutSYA8QdKcyFGDNQGQe1EACVrwyTHYR6HFYQ2SpB9YJGFJRGL",
  "key16": "51WiCwDibHLLSRKzTHLuoyAAChbNo9413ySUuNLBB3w53EciYerGoQocqzYB9UHrfiqHWmCseE3Li8dvB1YSMzYp",
  "key17": "3KoeCbT8Xi4qCqFyj73NhSUr2cC9nv3tPnEwWGQaVT2xK4i2MVmaNcxYmwHEq6mkCv1ZsEBxA7jLjpzKRrWU2pJu",
  "key18": "4aXpUroBg3uEC4XUUREhd3tBEMz7AjyUAA7GUvFfCuWYoVbGUUD1hGw8S15wKQGEqMvBLpA1p5NvNFmpSSgnJZno",
  "key19": "4Zdk4GaSuNnoN8YiyBmpcjJW2c4eThYbggQ9Heyk1UvRPKu9kd7xc8CEozvNe8gxrqycoD8fKhSsfRHJaY8xiT49",
  "key20": "3555L749TvHugb4xGXSqFCYd3DBAfNp8o9YW2xshc79RM43zFqYz1241czxUFKJJLiz2wHRbrWcRD4RChBaT9Fpv",
  "key21": "26pE1mHb1g8JM28fcUKsWyXyLayrc6N5TUj5SasfniRyKycJdQ1WcLDFobb93vEkeVH4pBTgzRs7iUvSL8KDZ3X8",
  "key22": "4QsTPbckqYbr1SbYGvcGbAbu71d8yPfTwjGSBJa9ijhc2BDKC9f1JN6XVPpc4ncnFmFxEH6nyECpkne76V4KQs5s",
  "key23": "nwkFxuptoU8VzKqaU5YniPW8cGY3o32xAhHXhdrjseAz1qRRkgbTiwGVCoovzVxKEdnM8vuhdmTyB5QDMpxd1MR",
  "key24": "23KgN8qdAFLsGeEF8pZuB3kRRtdxBAGHXRLoMpdSHnZmycFNzxuyq67EnXWRgJptcsri4tNECKbPj1RiMzJu6gv4",
  "key25": "5ENQtswsJEZvy6URTi5UZMBt9DirVLYZ6cZMJpJTN1i81ebyrST9LwwcasQGh9RAdADBAHsMaNp89RkAk73sa49n",
  "key26": "5ky1S75sN5UNVfsXDuxeYtLYmjsGKxn287yXm7Qsghw6xHFASbfzL9gsCHmbHS4Ex46JKd4jQBBBLGBni8SUULNJ",
  "key27": "52HYB6YoLWgDsQEYA1frzbvB2mDNQr4YQxa7k2Hw3LrGcBj5dexGRYkAsUs7MSo2WGgf6xRyANXdwTDUBzqP73U8",
  "key28": "4CYD2hisZWsgLSiA1JjsL9izNgqrhNXg7RMc6D2NT1daacQ9XGZsfxr3ddfapX8HvPbat4isxGL8KCrhR5FNvKPa",
  "key29": "7gng18s44L9uXe5WWJE5spEV6pgEqjgAze3Fp3vjWSLF5Q4zRu8VdPeMUio7kXwzEaG3vduYQfH9y84Y7Ro9Ren",
  "key30": "4sKEG8u7veexAYwLJ3jUhiTTDqjXuytLjBsyqnff4oztYrRobTLwGJAQpHXLJFnaERNsJi7BVuMwXfyFDKybrZeH",
  "key31": "5DBXCqLabVatBdc7iZSPopZramVUaxcesQdGh5aWkoUX5bXrX4GiHiKeMMoVESKNt8LpRAzcJCCJuhU6vknAPQwC",
  "key32": "4gQckhLs3oJ5x7t39BRrX3uH9argUGuBXXEEWeSVqdxmmDdNsv2hLZk9gEWgs9r91RsLrda7z2sXTgcwUBwpLEg7",
  "key33": "5ZLsrv4zJ4kmEvx1HgTPq3YKDuNEtaZeqKjU6HrQNLUGW2zXPSF71uWBsif6dRHLdB5RMHtxRVhtgab9HG8j17CH",
  "key34": "2H64sUvtDpi2z92hP76abJyK7CmXHgWkMXRBnRNBZEhDzn9RDLjMdoXUijakWk2siqMojaFfC1KgYU4c1kdCeFdW",
  "key35": "25mr2q2ytLssVW9GSX1TibRiat33ZwhJa35rjMPCtzPjTVDQacVywxMQ7WSRWsmDLZ9h5hvCF3fP2p2fEqtReXTr"
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
