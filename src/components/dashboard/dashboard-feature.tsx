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
    "58rS9SKspTmd1QSyXmP6yb538ZzCffUEkmTKuWdKCJAq89TUKaep6izwnDRsj6upkWJzpt6LY2deZVTWh3ovFBYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXh6Vaqf2P9FfrjQbVjKS1jqnAwDX3pX9xqb3fxhXigivzrWo9hMj6zrrh6M46wVzrciQtrGhBUD6bA755Un91Y",
  "key1": "4RvpibKxuDqTqZTdxJPCq9ws31NEnEoKdTfSbjzrqbnX35GeUoKCKMX6ikMaWYyJVQwakrXy2XmxchvrxgtrNgQt",
  "key2": "22dyAT1bqdjd2kfZ3NRQj1b6k92Qaw1njoD9rZ4YMLAgguv4JKUQQ4XGqP7rrNZyanyetDbyLkDys8ta4wvgpuRe",
  "key3": "615yhpjxy1JMbtoJzMHByqkUYJ7hxWEmDXX85v7KTSbWUdxJC4o6aTbwN4QcxR34xADecqjwNSE7aWU42dgobzwq",
  "key4": "2ofZX33v1XFnucxyY7WZbwTspmdKWTMGbeuDGeRPLnszYvSA52i7k7dLgzko4Mrr1X7N6GDYNpPQcog48rqJycCm",
  "key5": "2GvtwVUZph2DwqLTgxAHEDYHkmqq2dbvUQaFzud4eK9jV5JjEQSoGfrB2YEMhEDeDKYvf8B3kjGJXxguwzeh7xCv",
  "key6": "3wRnsJ2QdsSjh27QkCsCTbPiYiavVnnYzrqNoGYU9kRhrav8tHCiMkDWy8ff4PphPXDkuZQfpoArXVyhJkGFGu5B",
  "key7": "SbBJQw88Vyj7eVqn1hNWb1vXK1mPYBRV8tMgvCa9dfHqakC4m8jdzpD2KnaMFMvjScJZctwJskCGwE893Anna7r",
  "key8": "3JvcqUUMvojPYvqjsehqMRcNy4UwmLsfpvVrArLELWp4GxPjyYnvoMwbGVXq3CGFtSENNZYzgdgtfP6J52BvP3Jt",
  "key9": "3H9Jxvg6Tu2qNNB15D8vWrxiNMVdtBAFPD7SdQt82XDJgfRQeeSFSAa4hbyNExDT1CsFTXNc6wuGBZdcXTuHvAjH",
  "key10": "4fN1iyohVx7fbKmiayffXNxGPhpCxvJPMJrD6GPJfJQACg6iNiTqeVhEvFk3juf27YmWhwTjh2oEj3niufe1gha",
  "key11": "5WgwoUA88k4YA3Z2hYP9Smo2wMivoXcDseYm8gPreFHFZzDzNSs7iaH2TmZu5fWW5GFmKBqgoXB4tPZE1cTvFnwC",
  "key12": "2vVWCL192pr7siMMAutQEshUu9hLxsLezzWxrTsUn6aukFfdnANoGEztkDAgdmPMhkrM1bh5jiFLEKTqPFZo1UgQ",
  "key13": "2anyz4YcYftMnhi65QoukiMrpuLrX2nGDTq4XYF5i11iH6Y3pouYPPAs176dkJDKpLxxY8Ag7DDszFbKfzyDcgRf",
  "key14": "4HNzJ6C842Eb77QxfA3tDsMoiQaNrjjTLqmNoW4ddEAwcRr8a1KMiLzihG2zBWvA7QNHNsNscxsdVdHguEFMzh7j",
  "key15": "4W2JpaEqGbuZAfFXjym3vA1ZvM9NVSUyyfVxxwmbSJaFWcxt1GpTYLKU354FVphb58bmVTtsTSKDtMu53EfE8pJq",
  "key16": "3TgNf5NbPcVZfKdJke9siN1wFPrvSKviAe5cA4YkZXkg3qFCjwWXeh3Faec9oAJ59BYv1QgverRFUQMqNGhbBo5D",
  "key17": "3Ee8LGUToavZ3SwFgU5ZgVqfzG3yZMBnNtUbi5TJuWHtC9CrjJ196SEBRvitarCRC6h1xXTnG7UMuJ7FipRwmbyS",
  "key18": "3uHMMkP7pDZUjaRz1cgaskdQSNtWKpi8WVZteYwt2zdiqxwrXYa2k1GsZXkVKrWiTqbZjY8uHc7sw1k3K7QHMBbw",
  "key19": "23K2CUBDQNVtGMMPzWprrhJi76GnbsB277Pq9BinQpogYpFx9KGwzSZfSmXFz6WHgeqyfttjBZBXJEaXQedkoCdL",
  "key20": "465sRdvNJpQKTFYbVyodnsRcktTRnNgByWCw7tX9a4GQMsPSRru21hDfK1oxU2ipNebjaFmmYRG8iCws7Sch9ipf",
  "key21": "nBWb5NrJM1f91PA167aNxFtxT4gFgdbVX9FwuDmbtzcF8Bdt61NLHx5FZosqwepMgRNbnTfrXERqtihv9aRp9Dm",
  "key22": "2bjsNPCcRTmWBeNiQrAGaBgQP7DMBtuBSBjxxUxHqdwDxL6HbqeUhdCvtNWukQV2fpwrCM4pVh7LDJNNNZcf4HPE",
  "key23": "2gVhAvnQcSNCBNhDhAsdsEDVhoSx2Ky5uMwit2BcgR34TJzaZDcXrmuQ5kUmSxfEN2ybwT8z14y6oMH3YeG8PUwK",
  "key24": "4KthXRj5ZDXogLn6t18B4ZKvqKFQqbTqsqi7mmEm8VxrgLT9itp44TeqTe6zWwogx2muCPQmv6pTgvqqBjKgEDz3",
  "key25": "5ZRYaKL8nk6D6oZm6ngTk1vCyCFkZqPVsLcfUrwzyMQDkN3kX61ypYCQQpSfREtUT7Z6YsgHa2vCyFu6VZWktnGQ",
  "key26": "4GEFA764oWpjZaf93bbMTWQWCqLicu42CkR6TRYgLootAbKzRg3zDZwPNkBRPjBH63ecfaU2uMghQu2cYC6BXizQ",
  "key27": "zQ5mjEUBoUAzfBDfLQDgPVH7wgVHdU9Gk6gR8DB2S8C6SVcHgE2iSh35a6mmqQ8k5iGxCkY1gZK89a8mQdKgkWR",
  "key28": "3jq4toHj68eyocLMKmUzabaGasphDDssczchNFWgvtuAp7bQXmfDawPSDCLCpmJkPMdQuZwysHeyv5q3wfodhJmZ",
  "key29": "5WXBPZtNyCP1DiiLb6er9boTSAu6FfCSutR7LT3jV34TfR8M21KaEhNGcUzYcqfHvYj2SpKdDSWVufMvokJz6XpU",
  "key30": "4Cdy7Tq95WfaF4HS51dT9pJLs69WH8QM7xWBPGr4z2raAT4XL3AAfoXgDR9XrdD1A27gNWjzGL9EN8XXByBEDnx8",
  "key31": "36GeZnBBDByoDfQaLSHnp4HwgZVzcgM2RNeVZG9waCY3YBkNQs9JEia7BUxFPYhpCNKwmpD9NQV5V4oXSnExhXEH",
  "key32": "FtW5k1EFe6vdZB484LJzVUSgA73Rbyg2QnReu9eaqiFzo6GuTaeXvABuQrvEaKngAd8ucuAPZNLYjVJ1D58krF1",
  "key33": "4NjMXG3T8e4jP1TMpUxPt5uXAHGNhh6ub7FyPQJKExJtE3r64ZJLboHwjhjQakcis3DchUgkSS8GjVjPxQhZeT4w",
  "key34": "jfJ85oE5YRvBvzdstRhN2yJTrDcqSxckPGzPJ5wiTy4wMehFmfvjHD6MnPEdqbedx2qMdSNrBJnTsPeBuK7ZiFe",
  "key35": "4AEHwnMYrLtzwoKRXJ1eFASgc2KUU6c1gEYjnHNwvuWRUHJxEbXLWFC6Q6ExzaeNcmrFWcobniDrATmtzJC1pPYy",
  "key36": "2pzovY8cbygaP3SJ3k1cjDDt1HAZHKQcXeFa8jqzqVqqpzJdSLKdhbZBsr5xibYFyUCyEaXkLZFCudnQUoDGLfyX",
  "key37": "3c4YYLFiEnd88ys1u2dWNECtjBbbCEQ6epkh8CeHcAS2cwANCiUvbiHcWKaKAxLqADFKsqPAewPuLT4ztJZtDs2W",
  "key38": "5u3TfZSLJxbT8Y6LJhzXQoMKvysBbh9w2wZuBhSGVL6u8JD9y3ZAuk5VqGyMeao9TR9RpqjvHtoVutGBJTCTbtL6",
  "key39": "AehmhconFBodFCTbE9xTP31WZgpaFo8ULoyGaTWemdSymTbDDCdiSX42sFTrftPQYie2BLDjyUCYnvJ9jVQ4LMA",
  "key40": "33gb54byNXbjUYzE9NSthp8PBxEFpq52za6WqJM9E9byrk76pg5owWAKe64F9iawism3LLmsdUGHvHHadNKTftj",
  "key41": "2S4wEtq185C5tPZ5MSXKa39LPqzBwcU1Q8EZbffFq5mBNz8USg8XnUTnTdPXXY9WS1PUquALTgDH7RVGakyCu3cw"
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
