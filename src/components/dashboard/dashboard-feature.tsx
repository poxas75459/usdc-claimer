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
    "4tMpzs6QN6q3jqHr3N42b5Ru3L8ULu3F6RCGfzp3kJwf9QRmiSfuRisSEwcVypzMi7Bhzi1MvYyjWkN6D1pQqqc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45x5BaRDqmovjcmQG2vjWWtjhmHzPhV2GTsvgH3y3qGd4d85V7JjgPCa5zkx6bBHVRBbLxMJqgc86QejyUfcWqEW",
  "key1": "2nbm7b4NVKya2kxzSV8vkcA3jCVXtDM8dh3o7mQEY8obmMxtADtQSvFpkW5eVgVjHEwyGbmuEMiPWkT7RFkgXcPe",
  "key2": "651ehDKqSkfK4Biuu5uXVYBr4E4qEVXEB11fteVtM2ecxcNjozXkgfv7PjhmsnZcgLXX2Kcigpqt8t3oaw6cjMk4",
  "key3": "YXyGUydVmc6jmdWXStGENUeBHBikvxjLWuwqKDaVh6WLJ495oriKzRMxB2dLnZEndiboZhsgmLHky6gpXhYfFUg",
  "key4": "3pG73c6UeFiHMcmySPDnmCevinu32xUU45T6kx4n3ZZSroYi5sSvHRqTfzMUfbhBjLBPtiEEFZZB574yQSjk6oWq",
  "key5": "F83Wj6GyD1R5zfuzT5tGMHAoiUdiWpXFfXkKyBWBbKzu1mWiybd62j59UVYD8JFkU2ypXXeqq3SPH8bZZM84pQf",
  "key6": "5ToSEY4BYGmSCtC5o4ThVMdP258QrgZRQTZ9UDuu5YpqHM3jmVWqD999j2MSdxUgpYSjBJVfnJEziHDSKUywAbug",
  "key7": "3qoyftgBaw3WXouKoBdiWefy5LygFRAPswRdb6V9qSxV4ubvvrhpAki9ECQ9auj382uJQJPLWDvq8GzEUX5ETG1e",
  "key8": "2UBbM6qFeoVcrNhq7vZefZikV6PLXgtFqPtDuoDyzWr5VTh5jd44H7vbFsaaHDd7fKpZjBtkrkUCpALf7chpGQeJ",
  "key9": "5yT6dek5cw4UqtuDUG54hsfa8Rx7wuzCittTefRipnFmdB1vMAjZmJ4yEpUJuo4xF7BcRyMyJ3K3euxHFYwaFxai",
  "key10": "qWzBF1uZLv8oyptEVgKiPDqJ8sfaLfP1fHCi2BBoYnh74vd5UaPS9XogNaZfBFvrTvoFY3FDbaCqupPZtrkw8Ah",
  "key11": "AwWZdgBvMMqBqEqqL68rsd5Vp23sytKDqurkFJW7RSVCP4G5EG3ggJBC12ywKjFQBYbwneUiXESt5PbEey8sbd6",
  "key12": "5PUANoVHbC3R8ZWLADjcm2bxyr6WQjKUGqtPjcjgsXU5GG7dVduQ9XLhgVy6ozPjsj7NTRa8ZMRnqnXNykM2am5J",
  "key13": "2YgaUi3wh7z1pSuuF8xCgmpSixh5jrkiphrWTpfyZvr3GHx653ayNoKLfQUXRFTGiRaGNdPQ1V5MjfiSdt6KUNBb",
  "key14": "565FPoQ8V5J6YwyQm4NCcpSd7vSW9SfR2wwfdW2WB2MCskX16ViW5cB2Zx7auqrrYUCQEDbJmZJ8oBXtrZUiEXsd",
  "key15": "2GyzfJcYG3bAYVB9e7X2vobFxgof8qMNFbkUqg9tpNBaAhbA9BoRMFMdCN9ms6mLD2M6DZizASKWD2XuxtM68RzC",
  "key16": "24LJGPGAFcetsrvBoPavXysLE4RjUNVP8CabnJnQSWX3FKWCAmLzWexDB9W2tKdkCiJt3u4NxgX2wHmKGWdonWjY",
  "key17": "GptPA6mDwo8GRaNgTmpdwFXrvYsbsuwbeDbygQWebwLsd5bRAJovAv3E9rbLDiAAWL5oZLVpRETBbv2quvpoy6h",
  "key18": "2wHybNthogbEEmk7eR4PHGQkRJhR6v22SojZaxV2QptPdDM3hfWTZxDahvEm8FPdbd9hL5qZW5a9XQTHUZk2gc7c",
  "key19": "65T8FrMk13PgELGwjJUbMXjwsEaAZhSqWmdWDck4pvpxMPmiLN69SvFudgLNC1h9JsP6jsUAqpxHNMFPQthqwMB8",
  "key20": "5VxfoQyW2pGWmwdpV7z48jSQvk3kTeXj6nmmzKcCNyLN5C1RPaQeJzG2QknEvyuX6fsqxKJkQncJK78zyq8VNXrZ",
  "key21": "4aZGbuucC3NrntovQsgDSwNkMA3Pm3VQ7GBpXwTxDQ6CqK924jKrrNLefXt8rp9LsCqEHE1BvTZ5HqZ82mWb2hpd",
  "key22": "5nRP3xYoDtaiDboaHxdYnvKD6pjhiDxQR2Rdg8LeAdNqUvovC6gFWrVoo2r2chB2k5daNSEkdX2BVRBJE9Qs1tGy",
  "key23": "2tBkog3NZ57rahHg8fwRAhqom9xquQcT4kJbcMVBvtpENrfjD7dXfGWT9QFPDWNW5hHQzgkumfKyURyJD1oPhwcv",
  "key24": "3ghL7V257tub4c5Rusi259y9ExNYMue9hWRcKUVDYvr5NsP61rf8Ep86MXvw58XzSCBUUqQ7F5fRgqwBhHqMhWii",
  "key25": "551dwQHefS8ftv5icydJUFZaHAjaUZCeTSzfa7T1jK5Lp7uJuKYTXdLVAL7ucvswJr3GFzDjiDyBBcuA2JnmFtsn",
  "key26": "3fgMPRaFJ4jtsJZ3Er5hbcGayv8LtRFhGg56APuW512mBUkJKKZBjTfny5hBHCv7eCJ2RwRUe8Nmpz3dCnxEtKXK",
  "key27": "5ZB8JUwinMkXnoexRw8E6HwgXa3AmGTbD48uCy53jajiH4A7og4EDS47XCpaPJwWXFiJEwzHysbfS1joeEu2hdU7",
  "key28": "3gWJt5SYGhuV429SmvjX7aAgnericnLSgkiDrgsXZCFE7dKH77GUhtaGZQvUjrF3pwc9MThVoUXTYFgZna98R8T7",
  "key29": "2LkRXNS7oahiSaCBkaeTkuUceTakLKnqMcbyoYHSkYY7nMdeE8ceHewP3H8ULsz6YuucZwM3vUS6xjvtytf3bx5j",
  "key30": "3U8xBwC26TnQBy2SKxjm7g4pADfQQpWfTQFDZXbM9E55qtjp7LN8kYNTdHKMMdYqX88CnooEPVYHaBesLZiosHbf",
  "key31": "38acUwDuJ48VoYBHJ1t6exZA33PhYdmdUXsH6DYCFBp2bJoEvhjKU8wxkWF5P11vTDVmU1TwEuCRwtSa4pgyDrR",
  "key32": "4SNfP3E8nF4oof51EcGb2SmmDSS9ikfk6Fbc7X2MTdNm3PsYrzbrZKw6SieJbhErDSwmRMarKZJa1dHJeRdsvzq8",
  "key33": "2R74LeFLsmLjR6g2NKk9u2G2KLyVmnWayy1CkoaPzoQXQfG3B6pkcGMS6KFUECQDXsBYTLkhR8M4T7ZK35dGhJ8E",
  "key34": "3az8kV9WLPdQh2yy5kgEGx5QPULVZaGj7QEKSHF7vDNdJqqHjCXkECMWMBNKzHZ23y6yZS84jpBm7zbh5QB3gPPf",
  "key35": "4em5F8vsKaFTh7twoVEyHtk55U9HoWakdrYdbdD2oE6pckBX7YPS4BW52RY49P8QRjSZ4RpTEZQyjCfc8K9GXReY",
  "key36": "46LZpsgbeqBdfsg6Fh1uJqGZ6wphYT6r8opH6iN8SmYydX4wBXcYkVmXaV4nvGEK3zQVn3xmo1pq1WXwzqqgsUJ5",
  "key37": "2SycpUgMccUw3gaku5eSVj6wDC33fRVZJhnFY8UwEMeXp7S617uEwUuV6RHaJh4D26djK77WQMDdG42i1B3UZRWw",
  "key38": "3yJA34Skw9uh6is1gZsYVFRy8LoV2Ev2DZobacdAPs8QeM19pNTvnzU1r5SE4XiJ8wMe5EmMiEeDLgwbTqUPcsc4",
  "key39": "4gxw1JFVE8CG4zNinFJ4WtAYhfst4gY2dGy89wmiL4cKa7PQ7hEzefTncQMRiBXm2udkPXVUeKqedV9yZZaKVDTk",
  "key40": "3LqCF2UH6Jqo2s9kugk9fe2ZdBzdDrEQ9RnAYbancTEvaTEHDe3io8dtsoxpBKYqoaU3X4Kr8BFinYPHzUTPPEZ7",
  "key41": "3bMuRDedWwkFDkeMtYSVsMFuit57HFyQ5yh8bw5JsTLHWmDmJq8QgQGCnySP8dDrem6qmpcb6spta65fwwzrQrA6",
  "key42": "2f5rCfx8ejTDBbgkKjbWQv1nwT7Nuw8UM9ciEtirvyCDT8KqRYHLRpHdPB7APEj792x7UDUEhNE3jp8bGeUNDrFk",
  "key43": "j1huFBSiPEBAoSF3tbENYspTfYonPpFPLbG444iRn2EKBUucQwDcJzECKNW5Wg1Dsn9uktpdnH2J1ubZoM2B3D2",
  "key44": "2jJvZANiwg5Li3YmNjheLGazzC8gkQMPz6aum4kkkqsGTD76vwzheCasfk3Gsquq7TXYnmf9Phb4Jiaz9VfN17g3",
  "key45": "KvckfdWHuFBSpBdPoqn2VssHyhrpqRQt1xJEzXS32DjX8QN7HqNRmnAbhLUTjAfvSYcXceLWgcn1JJeymRDZZFw"
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
