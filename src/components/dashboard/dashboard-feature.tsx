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
    "4hnWS93dp5NadB6xkYhk5JSUNNGFDpQPqrS5aRqQ49b6fRQkvr3BRwMzcxevTgRhucPk6E9ZnCMkY8d7NogNWAfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjCpdFtGYcmfUEwkkLji9V7NFryadCS6bFejEQcg9d9mK17kPzN1rRAjpnnMD8sRyvDJe9fNshPP4aCsgEQVmrt",
  "key1": "5BXEfp398TiWwTDF8ufgjTxjShw4EE7rKjeoEJbrj8P1pcQwMCEWzuygtSwNfCtBgrm3vBrBsrbTkGB91efxX3nG",
  "key2": "315opejay1q5VVkN5qVRzw8VubDKQjn1SE9dXrFfXWKz321w6uw4169iF25taYvz6FE5N5Cn7wAsUaHkzSdG9hxm",
  "key3": "2eBY3QhKK3KEoAHTGTihV9j5W2CUVFzETXZszcJ6k75hCZxS7T22McUh2DptW2QEuCRuaFt4CoNsnJBjS7dj4MXd",
  "key4": "2Sx6HPpRQnFFg9JMibdWuqfksUo8oSEBtc1Uy2sZrYs4JyvD32yso3mf9PtUrBxbgntVKK8pZ5M5XwnB2o89LweP",
  "key5": "3W9m52rfN1fEBZpHu224E99qsZattF4rjLkZvDeqqmcTsoWVREiw6K8jHe2MKeg7Webd3XTvrkpkxVZmkuagrPSr",
  "key6": "31NAxjXa8p3wJD64dDWzM7XUp3M33MstTmERPC6fE9CKd2GjGRrtNwXqscUNEaJZf9LuqbNuaQYEQyKDueNRUsBN",
  "key7": "2H5HMFmrDdWJBSZy3A2URbUCmcJ1vMYFQugjLwP8SjapxbEQK5EHRaj2LzWHx6Jk9L2WwARJuGQyvmTNNPZKJXmh",
  "key8": "Ae5UqHJrb6UX7R5e7VAXdbypJfkAEaqYmu1t3A349gNADMs6CAnpb4hdgxapjhKzN1g8Vw1AgaDdXp7ZDPuK9Lz",
  "key9": "5k3xoeHPnsLJ5PNRREqctGt9HeaVVa2fwerrrgPnyTd6PoYbHLash9dtpP2PVcgxUBz4jFr2EGkiYoySS5PggD5T",
  "key10": "2rEqFHMw9hsV8DTnbmySpaqjGmE8FAfMhq1HmGdLUdUht2XyeNz9xCM3RWwJJVQys3XKXJHZGJTUnL2fvV6xFV4v",
  "key11": "cW3E6nHpakqYGD5894L1homyEKWfm8tLgBJj4EsPW5m3paYYXHeCnBiSTAKv2wKg9mbLR7XaUQH8wner6p2mQ9r",
  "key12": "BdpvCC7X4wyqaZgoy6Jebe5D4WogptiwVBbGL6BeK7kck9HCZx1qbiCAK9k3aS9PebRYPpihzYgwfc7XnJi1Wkt",
  "key13": "127BovRZQT1VLJGi4YB89LzvAHMxPeaKm9P6dcwQYiHx9F3BpJ6pdjHTokN2aoicgbUyPCt1Gygq4tHtpLSZ1FBm",
  "key14": "1DPDLu718VfVwp8DqJCEmaUcerN2mMN67pBhaxxubvZN7wBAaBjEvKDXQe3XtkZUhmmGEWg4pAAKvR8U9LKQQmH",
  "key15": "3ivvW4UpUqWEQqB631UhcUVHp1x134QsSLWjLwoVYitTxMTZyeMhPC24tiYhoCxB7Y537t8hTQWZwTbC6dsAVYxS",
  "key16": "3X3bza5L5ybe4NZnLvnrK9cT4mvjDAD3ERrgvEXTYXmnBq8SuKueKKgwu78LmWfntVe7wkk1nq3KsgYCrug9DytP",
  "key17": "5SEtRJ4vSGihnHckrQLoLbcxJQuTt9nywuVqDaDBSgA1djuvqRX3zLkTfNjNuxKd88teJbTKqPCtcXVSTfPeXx4u",
  "key18": "54wUWdmrGDCBD4V5ph4K7XdxkePnJ3sAVbPcidtz31729F7X2CphjUvJfxGUZajfK11iCTfHjiEob8t6JYwyCmHf",
  "key19": "496GAUKyUhC8cuSjaH3z8oYKfbs5wdwTYhxhCAh8oKPe1NKKUNjbYCVShjHLk5eDMYF7m7SiBbSxGtwm7xdwDhG9",
  "key20": "oNEFpPyDZvk17evcBeUHx7DBStyuVSaWC8PePpEV6CAVP6EH95k1FcTPjh8bcoWtyHjJBZpGXgafi3v8qpeQjU5",
  "key21": "5tyCDeQeDoZSLTdWNQHFGoH56r4ZcYzWxMLN1NU6nsXPDNvSrjzizVzv77MRzYSYPwpBkr3bFB2kbsrZQVdFFt78",
  "key22": "4MTvEgs3k28FKDBopTM4xRbPGeGR6MViWq8SExwHo7eikeQ9x2pLgHYdQkp9AtUhizvXx2Zfpit2WrbkhKADAkTt",
  "key23": "2YxDTT5c4e8YscDmdoPfMJrYhWjqF99xBbPcEUmnooo9gxAdy71nA5ASkHDEDh8bkU4FjhWk41tDAzs27PSXUb1C",
  "key24": "4YgYSFxDhUue8qTdHrKHqgBmby52QFVAKqUVJVp5ydcbbNJt1uzrmk4yg8ab1w6YYaCmDNcqJv3PY5VJVkZvWpPx",
  "key25": "2Z2yDme1e92Bw12VRTjfCRkPxhLLt6tWQCXrxx4LZ3svFY5wmkZQdGVF1iQcmfFgDBPa9B8zGoa4vuahhfD3XuJw",
  "key26": "3fjgvi7nbVXRxjebn8GnCXKqdc5gREqHfSWopxfq2TQZkizmuKhax6UbDpoH3oZEn9gAvzJk4iMaebA6uxJ9Gy2K",
  "key27": "2PJXp9rrX3SpDgkGhyjpzHWrvp7V8EwX7fspDqFkiASb9q6CK3z476hVARuBgaGf58yW5bFfqpYWZHWe2ksepBc1",
  "key28": "5cU6xZm392PM62hJRYkM2MjwzBZxY7t6LcjdL7nZnmXguc3j4FoNAKtghcxYuU1xnUao5sMWyKN5HCngnz9aZfiP",
  "key29": "4CQNNgDcdMqLXRsv4wszM71CN1uthrRvcf71hH8vsfZRoLbdhVEoWhcWfrZa2XtjE76eLFj1vUBbjsNUbDEe8c1e"
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
