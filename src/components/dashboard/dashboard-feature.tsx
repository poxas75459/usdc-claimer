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
    "4WqTg1Gcr1deprWLAYYj4q6CeBoQnqwfauvJjKFTaEa9MvPdbvPpyBx56H95Vej1m5mdKnmx8R4pheJTqUmCMfM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPyT23G3xhgtJuFkniKPztsdmCRsaDKkHG6YGrZ5SweVQv9SqT7yYMXJzPViKkm6fwJS6Tyx13NyhTovaDArRA9",
  "key1": "3LDjeVgYsmrhacfXcMPdFRbryLERrKjYi7QregdoLWUaYdNvGrMuwU9VMkQ6siWZZwEoGPRSy9mwi6Wu3LHLPHLS",
  "key2": "5HfjpmAbtFdo8UocCsLoMBnH2675C5QiCumVW1aWquuxfqY7eQeB3Uh7DPKjUCn8LfpLefgRUT7fmj3itsB9sdHv",
  "key3": "c5YR1YLUAiLyuTpKoQ9KZ2jp9uPo8F7ypNSNe1gSCoU8sNXK7QnWW29uVpP7sYUsMBGgYZoQzr68tvcRQJXWn9y",
  "key4": "5wfzfoYJgaSYQziU9VyVkke1LEV9fvyh8PqDKFaCBSEXuga4P42v8xKjyLDtQJJKmz5PqXPDTFqNTKLUzVTr3HNj",
  "key5": "5fHLkFkYdswydeCweQYY3R7vufYTQd34aeUMDocYhEFot1DsBECg9H2LYaPozr9sSC8A3yoJM1neiATYvTNYq5k",
  "key6": "5m8ghYnLs1vAi73kaRFjEAu9b7uE6SGEL1jbyhimzgURoCTDXywzVBwkX29taFUDdx7wXjebvFQ4i8vQwgDSZXdn",
  "key7": "4gb5v9UuA3kNMn1T67niYbwCeZRovFdxG8rdrcaDfhes6DnyrWVtCkRekx7swBREaRznYkz9YzLz3dghwNnfzNcT",
  "key8": "3RmnCp8Am3JQSh13dzXGg819RKHb1oR8ytbpfCRZHFvr8aeCFUWownC6SXY1YBPzNDh2z2QjhtV8Y61w3o7JLVub",
  "key9": "66mfuYfAcG1BnXuuHxfGQJhaZbirXSK5WFKnsx25ZktgWUyu93rRLWC279EMmA8VYsSqXUB5o5NGiniqmRoGrzug",
  "key10": "3worerKKovcn15cgmGrbGJUkTJdeT1kvtpDBLu4DK3UJoxyEfd2jNhS74DMiyefrdufHtBLXDZhBGuxHzdkjJuAp",
  "key11": "32ur9GXhyYMMztV5m9UDb7Ah4nDNRcidmdmH4oWbyi8neajxcnQ37kTwZQPZ4UEVAPufWBMJnqqHHGsTcfZWWJWa",
  "key12": "4pphSVkg9a9WF2bTftTVu1KujDXhaBv4LAuiw168X2DhtKfdKgLb8mwARcayA6WYBEUL5V4QuSdYWSGvhFFRP6mx",
  "key13": "3Dm1NaDU2FqSXQMEeDjgL5q4d1Vendw6dZ7yKmaS9W6bYTid1Fkh2Vi6FomLVpVtio2qWPdfz9VfRebFLKJ2Y2YL",
  "key14": "ZdS2CLzDgz1VYnkGffM34c9mVSscrZGqhk8NASJnuE4aPapLZ1P7br9ZNBNvbu3N7ba9dTPXgqomybwUF4xAhMj",
  "key15": "4gdRaUizGyKhv6HvYiUtfg67JuQZ5nCXTBY4hUupiknjYvfrjfKdhAcvhzwTAAdZZdo7pVASBHTyEWUHvbcxJdND",
  "key16": "5Exk8SGDWSbNBW5nqQstMQDpkod3ngLwEAw78Qj6RaHi5RhAVtjVvB3JpxcZVBcPQ3jMYE9mfDLLP3V8AUDRvNSe",
  "key17": "3e82qP68P7tDkSB8ag8T52wUejKTv7f1f96mjWFwjebnAkTUXg4Uj7QdMEbK9VM7y4C6au55HMbSPzmQ4a7XRQ6u",
  "key18": "38wBQmX4L61HcKR7bH2JdgTNbkKn7NCa1L2hX53YXGWWi9qSLK3dPwXgrMRRqqjEUnbSVdixtKZD7EPZv6bFNTHV",
  "key19": "JvmzWKiuN2cFsHDXpMdXp5jZfRbYKt29v5hmd3Cr7Yrs5KHHtrakPP85K48yT35DLpTBYRMDCaY66WHQk2fQPiC",
  "key20": "2vyRtwgmNSDCYcF5MYgdfjr8fbB6nKQdQU12YsnYiEdYjqNMoxmqfGjhfDNTz6n7e4zvcrvo8cct4HKg6ikTANfm",
  "key21": "2kK4KeSMxzgS5qxfNFviwnp4UUqPpYBW9rwv1x3vanhmVDZpbFETHGuVZSfkeiwKqtnkrFrxGaeDipiHY5c8SgwA",
  "key22": "25f22cgBpZq8U7MKgQE1Ujac5sZNZoMpsAsWFiGUADV8W5pgCQVWuwxoyCcaoGpwxz6en1myvJHQWo34BZWxbgAZ",
  "key23": "4EgQt8R4Zk41LUz86ZGAib9LJoVb5BPQndY7CZUKxPzpBtvtoEhZnMDLGWzA8Ytu1r7EASfS3zQMejavX5v23DjP",
  "key24": "4LQxdE75LcvaZmLcM5qsfNuwikZeBTBkF7ZTKAETTpxX1FsAR8eoLGaPPevmCMw1sLJtxgvyVRXZKYhNnDQqHrL4",
  "key25": "61HZEX3T8iQjtzj3nNA53ERAUMqdrAoK46Ey2fhxEfDCDPGQ7a4pyZ1yGEZa9gGPq6c7S8GmGgXxN2vXhuHDgk7u",
  "key26": "5wNpNHaHvvp2NhLsgaxsatvJaA8AHE2H7iuexRbXJaBxn76gXUJCAvL5eeg6CHJgWetjuBXGjUzVCkewEA1uf7PG",
  "key27": "8L3yXJcTctqCpQ3ziJgEvhwkKFMnhZy4zx8tDwpXSbAYBGPw6Q1oxn7hwq7nK6BhKLnpdmLW8UeTVz8Z9rSmCMw",
  "key28": "2nPhLq466WxSHnLhZoFKvf2N5PWZuBC8XJcJ8m4NX5owVVQSQxbEeYiLtUnmz8JwZFhFismwsWCzSaJAwU1FCgt3",
  "key29": "2dEANEkSTDLK3EB6y6kyvU9GhyRQaKhgg9r2TBZ2ChpQzMAZGLqZGamAbrHJQVjhtEC1VBjfuKeJ873mdZskcJk1",
  "key30": "5oXr2vgvYJGrnvEMeKdnDzC9dSL93LCWq6d3h9yczJsS5SaJVKjEutmXdfE1yFb3KdsJVhsAPSPcBebfzMZdod9",
  "key31": "5cWGUEahLtBq68MrKxYjEMTX9cg2qjtRWYmKp4nqrNtXGwz36e6SRQ2tJ6dYMthGipZdhMxQ1KGZBiPCULJ5q9Ba"
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
