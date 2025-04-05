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
    "3ZC4n5cpGcnEuXfxACJQyBnn1SBx2N9JXsBfcAfo2JmFqoatU3yBYfWsBd1E57bnTfDKt9Erq2b8R8YdqmwRAsmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgjjw6zxa3NwJKhLtx5EsgP8M4bC1FB8set2NJKXjrqd94Ldy7D9W8Xbce7mQEt7UKiMMD2kzAZF2wvgbT5e236",
  "key1": "4NPpVU9yCNnAo3F1QySViVF3nY2DKmiSfDci6diBayJTSrPoVnVeNwmsQnRBnV8T3u6YXtKQ35Hf7YDj9pMGKJ1w",
  "key2": "56gSwSWMBsW61CcPgjhRddfft3ZsLRkC6VbX5eJUMipD1xgKLihzV8oArEE9ZDDe3EN1nL45WNJUhRJuCz9Ygom2",
  "key3": "Mw1zaB4nJHFw74LMWqqeimL1Ho89bo95nzkS5NpKGxrFmrKM6SmM36ZdTeyyApRS2LGoZJ9D2oSrBvyWDkhH5QW",
  "key4": "2wtafqM7tVUEkA4w8fwmUd8KA8dgqXLWeuipgnUF4NG7Xe1Lfq1kr1HnnqM8Yxnxc4r5i4NBSzo78z8vxff37Kge",
  "key5": "2eNvLUNkonrVBcWC4WadVbwjJ22AiZTHPchRSXDzfXnUYp2cahhfDKYkKVxTdg5jVx4KHLjAic8S9XxB6bWpG3mS",
  "key6": "32sakfGSAiR34s5iJTEK2yLRmXMah8oo9sHTxhSkpY3FnnKZRVDNzzT418JTzx8prW51pYr1EyLP7LMBeynM7T4Y",
  "key7": "3VVppnHwhyyLRXqwtkSsKskBtHRHgeZCMCaTVYSZKVvVHqm149Pt3yBpnnCv3dmzfwX1qU4B6foheTuNXnoCub4x",
  "key8": "NA42AqSgxV7do4jkRVQL4Wx7fQ8QqGrV3Pqud1eWy7AvcKoqPhyp9rEVcmgAmDooC1tCCtBQ4STqPcNFdZCMcSr",
  "key9": "4grV9K8CKViM8JajazYQKFnQfy3ajF1PYzDEV5atQwP6eypKjLrABX6PAn4uXcBz4no4LexWqo7a6vaG5xGptuSv",
  "key10": "5J9wA9NyG1GvaWEnoQFa74ABPQM3TQFrFKqUgxe6iE3pt9j5fBFBvmRiFjo9RGkmTUiStciBu2YpzmfXQAF21tWA",
  "key11": "4u1iHTq5io4i9RvAr1YbotaC4izg15Y8oQ5HUdJNf3x697yvqCRXxjJuEtoAyWbAuU3KVFobsCGyMSaL6zAM2Z6p",
  "key12": "RRxGpTwHBDW7BemLXpzRSS5krHt8k9tFAX9X57WmQgJc3kYnFZWaTxr5p2ajRnjNQ966C6Xd4RidCJ3hD8aUUfd",
  "key13": "5cpx1hNkSyCW9g9W1smFJq8SNKAx5y7jTxoi1Jw84zeL2t9jtp3bBcT3gu2J73qzrcDzvKMsoCfFxWU5nABiV1D3",
  "key14": "HSdzK7qAqeMwX8TsPFGhUFjizbftuWP88JfNWYZb2Wzd7Yb4vc1WyTWnwZj3tfuTYyyL6U6Ti4qc9wH4v3ZeNoo",
  "key15": "2ZPMMaQAeAUw48KPQtA5NwLkvZhZHQWGmA663NGZd6itj7bcEToBE5hw9BvPmDWLRJJJKd9e6sH7nZJrTSfs1joc",
  "key16": "R3uiV7PAbuRPpst7V1YxjzK7hBJucUhd99CZRgWHvG72kiupeVUL7wzmQZB9grincYqzzqfPXsNXnj5GW1yXCUv",
  "key17": "4Mxnz4SAfGuBASKn5tVVh5zfrpQYSbfXruxj7JXyjoERVZZ4tnSY9wJLcHzWdCoYGKvJRx9wVGgj74uSxnoStXQ8",
  "key18": "8ZAnxCo9uMCQtHdydavfYjzmJcwUqhs8XtjaR6WLSHWHa8U18Lm3pu9d7MEH6N5eWbAFjojMmEFeF3JqJzYX1iU",
  "key19": "5wXotyf79UaU225nXQQintBCLNrWWUuSb8zinB2Mt8f1sgU7o7xdYQ8ELTtzogemjCNBGQaBsLjD6wUMxtj4JKum",
  "key20": "3ZU3nafLHkCRXjXvQLcVvjAWakWwD9NGZBb5RiMDesrWAqYudA6hvwwNZRivV32ykgdjvEryZgPteQCiDJauwZxr",
  "key21": "39fQA3s6CXJzCtvwtkZ2otusc7xaBzqBNbKiXQXibWczfW2vF1RWzeA2GdbaJjaHCmzfByxgvQSDEVhT6bXt4f9R",
  "key22": "3zpsQpzqNmK2SshqdHjZVgFcfrAXzRvUd8wjG2WZNH2MRMFegiDDcHgPZbt2FEXdXNDacQAdBYCbxZw4A97fMRtY",
  "key23": "VzMomznjxVyJ4KFWBiUQACANMHDYSsdJB4nGQ38RbLLcGmNkGQp5duLW9dxaJV1qoMAuZ7pvnV72z6u7zmMMdys",
  "key24": "35uysPDqop1P7bw4dGYgfuWHCYMLLEALPRGcJYi9ZwYgYCR5aotPXrbtALoV6jYhHg5zmskisHf2rmr8J1bHjwXj",
  "key25": "22DBbGXBoyeYsAQHLynHz94c5sh14z5nuYNAkyyPktMZn25puvM6tQEjbr9qFNremZmF3ia9nSaqezqngFjzBUZh",
  "key26": "32noJdLUVbXhNRtsRdBGygfNoaov4WYzuPjHgtqzJqeYaQB4bqioRc2dPhZkwBqmfmZ9Nv3dca1q4fp2GFwUuiju",
  "key27": "2kq95j2fuRpvFFJYu9jKS1pe1Kf3YwS4pW3vEuC1fn4LqnAddzsAcUvV3LBJEJstHdUkC6zuZnnZjvrWMF3ceEgU",
  "key28": "2L8pRKYTmk3dsMnUtf6rq6kADuZk8Er5b8uWwTCeaNnpqvyisLCK37VViGsVmqdgtZFf67HZSo1pqLESeHLcjgKm",
  "key29": "LwGsWYkEQft9CMpxLC5coSMBNqzjgZ6eKXC4EBr2vzwHCnKeDWc3MgGkH7UQUdcYV3LZyeRDVnhXAkVq89noD1W",
  "key30": "3dghZB1vVuzDiBX8r9fXGSsG7eEcoF9GgCXnkrsKmo52f8MN9v6NLPLFUo4VqgQ5DjsmV3pwK5GUz1ZPGNpEXXTC",
  "key31": "3mGBEfCQsLrBrysw8yWV3Ha8F7EPCnZTbs4SChgKiKanGSkhemNWQeb1zZemL1qEEVNNwaDwpqCaxUunZPxqDem6",
  "key32": "5DFcwfyYsgmzMeZjYA23PrEdmT6U2MPzsZv288Kg895wM1MZdRD84wErDQTGZRnhAngW8PUMNVChGU9xroSEEw4i",
  "key33": "5emc9Qp5f9sRZ7cxp6Auejn5Aqh9FwUnNUJFkc9WhhCF95snedWvbmbCuT3oBrY99iK5QAK3XSq6pZYFqLU795Aw",
  "key34": "3cwVj86PVtjzQaXLRNn3SjbSksHqdA9kEYoKxYjczBZXixkVtzu4L9WoRqHHkFcXzKzei52SfyJnGhvpKRTemNkC",
  "key35": "3VFrKnx2jUngiBwpS4ANeELAmXwyZneB8Fi86Z2b3YJF4McX26RVEgFBM5btehdFo4GiKUFatBvwf9ysHrQALhwp",
  "key36": "2VWUn4jPWzVpaEbzn6QJggRGfjzLjs8aTnP1X1zCwBhCuSksDpXrHd7WkcZPTgPdWC7opBsqouEiBvyvZhKvAUX6",
  "key37": "43LTvkhQLKn6MbLxRhcGvQ18YWbHo4HiNas9iJcoSBxjg6XiJD9ufyfr8xpuRtM9rgSJxQuFMt2QT5A4NYo4kfum",
  "key38": "2nD3qTm8g7AYT1veutaB6CqQ7S6WMijAT3xfDyfetc1penabbGoPrL12G81VTq1H8cZdDN84uvqHovhzCc5GnDbs",
  "key39": "BydJcTPDp52U8DQKB5nwTSgGcWtADS57PUjGLeaPGpUkGnx9TQfgk4M2Wb31gcjGpPw1gVhx67sudH5ekM6yAku",
  "key40": "3TjWenuGN8jNgTBpmS6rsxXNBFebruwsiUby6Aen7Ep8cK1TupxDB9Y3VdvxsXzWep9Z1FPBDHLM3V4tCQTzhpqc",
  "key41": "4rPjwcSnoZBZDZDBNYHMybte6PG3Jj1Hn6N6RQJ3uHzGpS26JFm6VbvaWig8CHn74Y18fTWrcwsqsFiCkYm58RQh",
  "key42": "2YPzjeWxqUEvBzvSUaYG5znARKmnLvszRwGhRPJHvwBiW4GYZccwsf5hQDs8wdnUTdtXAkNLuW8UEa77aAox2mTn",
  "key43": "3JB4PkZtZZFLVVLMmzBz2HW9jx8v91uqbWWrQLp746tj6BWPeP2zub6WoPnhwyMt5tcVnqW2Zefavbb16um3zja1",
  "key44": "zLAgXRprLtHsVQbXLMSEeoRA12chEUYbyW5vWJM3PC68we3WzsLj33wmQC7Kq6zv1DVAEcRj2Eo16UWSVsHH1Yy",
  "key45": "42N68XoWgD2csRtGCZto5NT6DzgjGUJ6VxJtCSvytsw1X91BuqkCjmev2MNWFnrsJ9mNtEnrjT8cNNxPeAxV7tfn"
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
