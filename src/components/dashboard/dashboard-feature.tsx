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
    "3AKxLnTz1ZtpRNTfXFHmzbYd4bJCbkY6diazBb9ZWpwxzNUSAndkERFdi8qt8Vk4mYWFSmBR9hKdMg6HM7BTYgUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAdTVpWktuGCpxxjUZHZLd3AJnJTNxKvbXaTmm3D7egykkHmvpwP9NiCWVP4dgwMRA4SMeYpCfEEypGSpSXoiXZ",
  "key1": "JCt1rno4QUccV7d6eXLSfpv1ujTQkPMZUJJPWtDVeZe5UHQtYGuNknFLEPToYJSQf2K7h2q2FnqXcMok6msD7Gx",
  "key2": "2Rthw49FFQbbiQsd5vwZPMQS4wieUvZzovs5QqR3YoJ5cthg4MW7Miz9rLo21yXAQLJzjw68fxhYxuCbQWT4Kcgs",
  "key3": "5h82EsLx2sZJmhKWV9VAaSeRfHisJykkp9BBwUDjup398Zpk1Mjb33et9bq8tdymRfTcL9bqYiBaXfM7tsBLcsTM",
  "key4": "KkN9sRUXq7dGZihdYB4Y5hCAqhuKihdyMk2Ttv5uioemuXtaXUhkc8K6C2b6uUVawqyeVzDkT4UuKWoiAZphXd5",
  "key5": "2P18WP8F8h2RDCenUXxEXefd8pGdcheUCUsMorvSPgcc7u8uTY3hntdUCvuxd7uyMrbSzyN2R85R3AEFpk4DYWtr",
  "key6": "3hKqLAQhh1SqCZxJ3xvknhAsrBg3SRmFsEiyKWxQ43yGEE2CaULUayidfMoSfnuWfsP1XT7BBbQNfMPWQ4QfDWYv",
  "key7": "63YoskKSJ8EnLEUDFffTmPZf9LfSK9AoXuksYyWb6fTvo7eG9u3EXZogZYSLFShyxTzCtYAcaEFW798DP3tEX67b",
  "key8": "2cvCe2ZqC6c2jvLDSfeobkARHUuTtitAkBVUUjdiPf7oZShvJbzVwTJDYc4JLEDuhEe7omFZLMSCF4SZzY6ppD9v",
  "key9": "2Lpd6VhQeGzYHwpkow1yU2Xkqduf1G9Lu6FsVwDRqfdSGAZQGmCrtb6ognvKNHD89umerD4RxDLkZezHRfKq9KfC",
  "key10": "ZAvsSJxbZbcZkGVZVBb5UHhZNBsREzbMuAnENeEHWXHzc7VstJAmK6UaNvi93igCLkjCWSym8UhqvFPgsKmiRu3",
  "key11": "4QPs6ZHBJChKKxLJJVCLia4KSocyJJ5jBwpAoTWzV2mTMssMe2LD6AkdzGeSnqtN6E8x8GcCCotbfDVWWaYUiwwA",
  "key12": "3M8YdWs4HNXnMqMLwuo2npy3RuYiJA762zcnpTB2MAH391GWA8qqzZGG29YqkQGaieUkmfaEmGhGTc3pjQLm1iGa",
  "key13": "3XmqmqQT7xcrzYLKYbCLxvJLGvQHtpwzuAWJck8hwDxpZQ6Je5tjMRpcdM3nhX36VprFRYBdTLfC4eLqYthLPTwV",
  "key14": "14PZ7tk7Xfj8KUYxnVWPssgvzUsSessUW8eQk3FZSSQd8VKSxXpDAZe44E4MJCz2npMhHCn1j5vcqyFktig5Dw8",
  "key15": "2h5gV3LNXsk2c4BURZGU16tsLfvbx4Qt6wbpVBtCPLg3RUPYDcXEtZGTPrEuAzozec5ncUkQUZs8cndcpcR5w5eo",
  "key16": "39zBdJZoecteSkDH3AzSpnC6qdjH4L7C8HNEEnCXBatEz5wXaKZRfLBDhS4syqxRVtJVTQaFZxBM4uNPHnZSH4h5",
  "key17": "359w8yy6QzySKkuKfDp9qStw3bqRHkN4M11JeeL1jC1PTkro3ST17tMS64CHPwc4KkbCReg3qjVs8HvzxxvY7EnL",
  "key18": "3zmXQbqBuxaAfzbM1TUVu6Ro8Z7ujQmuLgWxNhJx9zuk6CpU3xd952SfAFZqnMygXv3E2SWyAWehYQGV8bivLJ3C",
  "key19": "3VvfDMJJPuD8dhkdRtkpxqFmVDUtfUwzpS5mPJ53Xo4pSDa94VqzRS4XcMFf4jJbbbhBhQW8BvyV61ZHe5CgnNBB",
  "key20": "5zJoAoFZbAJZuGJHJcQw5szUBThLmkj6mzzQEwbetqoJoUi4i7w9kB9NyG6bvpjypquipovqyyv5KG7tFwgBM2jm",
  "key21": "5574cYEn69SRa1Gubb76H4CEtdQYVEUdnqCwCDxHiW4GLtBF8hWQQgQnFwEMpM17hPBK6vwpis2hs6f6CzcqdYwc",
  "key22": "4uKKwcLR5GxXcUcrUA7oozrAJcXbH8g56KtndKsWmPERAbvbK5ndwRAmytU7QJJzz5ogbjnhh9qvknWQAJ7CYrdG",
  "key23": "5srrLMjvSbm591JrijKWtPTeES1hJY9vaifaR7VQJ4cEB9dj92wb1Vfy7PooBVEaq1iNJmRr7GhZ59yYmR3Aon5J",
  "key24": "3GidoymYcsfLaPSpLStDRZnhUr6v1YtdjEFtQEhviN24HsbgpSSsUXzXaBCEnzHihsuKUP4X5q6PS6wQ7GeECuoj",
  "key25": "36rSE8AdfUU8Ag8fB7qh6mNgkKRqxr7jbLusm5mp28iUg4rHCQKAXNTkAfd7LLU4DKDscSfy81UEsCiwS9UJpFSh",
  "key26": "37kHQm67vAkC4cXZHUjBLGAim1eYezTAPajZeKPzSYeiLRAkseZVJNdnzPr1hSA1m5puRYtphR7c5PoHQvZPHrQZ",
  "key27": "61Uq6QpiMqxSgSAp2cHKyHBgVCWnzR3YipFHaaZxxjycMEi1cELeZqMboFuMUYcJsXdrR6NiN9KvVrQWkwakNnTC",
  "key28": "56daNtbwFDNBenUGcwNAVHP8C3faGTsWy9ca1Ntg2BRygvkPLqKZxQadkS3eAXvvBAsA4vVSvgYbT34edR8mMGWJ",
  "key29": "53aZjQQGWNbaShnDiMebXGXtqnkxQVvaKJoPSVRxnEvkQu6QPESfiefiiLoZX5o56d9EAeBkZMYzZbehGLGpfsvt",
  "key30": "3KMAZ7vhgSjRyk3W7Bta3e46NGQXY1qFzekSkFQtgbpSokiRivyFzqkJPq9uVuiS68ZxXYZyrgigngjiYdzD8XRE",
  "key31": "5KKsspKvsNxK5653cJPeZsEGcA7zF52SdkL4dstuDkNsx4HF3cQrfd6nW9QjJUq1xyEgbXXDRLCnSaWVsBfq5wD6",
  "key32": "5iZxvvBS3Z2qSjfuvBqukjccgjqX3oAQrGESc9YHi84juS4CAeEbGs7RT8fjBHVshsvebz794Woro5V89qZ28FCJ",
  "key33": "3ooxE3MnNY5dM1ygLwbqgSnyggrPcqD4mx3QMkJr9hGUY1QTMxEz2FguaV8ieZq9Fc2cVHPAtHMcifntiRY7wfoe",
  "key34": "5mkyHg14QDkhCzTWwoDn8tRLnhUqHnToPFxjRBuaP28L3AcyqAj43gr9YHattpzZpjPMNJU2v8GQ4SBTebecX5Xd",
  "key35": "3nnFxrgBugDXy3MYM1vC8x6UUZv275r3jY4mc3vaeVsT9LjAJkYi6wLekNM499mNgz9yFJeichUsYqQQkTupTFUj",
  "key36": "djhHnw5wRUdFfA1aQePnHsYooGQT39Z86U1rq253tBvrscao6SKinrhe71Vg65KqWgFHEbuzP8q5jHYwast1GuZ"
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
