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
    "6Q1NHvUU5ZmWWznHAUBBiEghaky7FzNxrK8o9nCNzEwGHbtCiRP3DaL9Y2f1crjGmvWq781Fat98WVaHMsi585p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RQd2xfYNPgztwxsdn53q2qNcjESC5fLJC1wQhq6DNCC6qPyD1USPJmHRYhx3kBvsoXrMsTGTTYypocqN5DDuR2C",
  "key1": "3Xu6cj2D2GaprEYwTHDDJiDUdR8c9T6aRqS1xGgV5WrsxbmUbTGKBRnepAhoQxMpDFdA7jRghm2vTvhpKSvemCJv",
  "key2": "4qKNqKKdcNdJuMFvDfWiNZzwMshagMBDJ2LrhDjmFXu3JwtJe5aFPn3rfHkaNtdxxFWGy6f79dHMR8Z7SjC52kA4",
  "key3": "CPf4bLaH9RftnTexo34QEBZoGey9t6XjQryi3QmAM5f9aUw4sBuhFECsrwJ2bJ9kq8e5Ur17HQUWmvdJEKe4voq",
  "key4": "5C1jzZnR9eJCuAq47BvqNaVdnXBTzZYdMRTk9jfwty2dHrVXwtk24GhCBM5DT4646Dwn5gwjQeNrnBfDkp87gugQ",
  "key5": "4FybaXXs1p15FXXMzJsJR41FreLf7oXiCQc9MbrCj1Rhaq4dH3FoeeCZYZppPTuNXX9f5F8eAxVsaub97DeRy38Z",
  "key6": "3LynewnvBHGJfwx4GfMNF4SJijJJnCbrALbiM39t4HGoBe6hccPAcHyVkCDrNKq4Uj1NbWHQSPJ8vVJQvJTZ4fyf",
  "key7": "34m6DBMjstW26baLyCYB7UUCScgbRHqBGCdANhPPwQkWEHTpfmPBtge4NJKJzAdCXu2nX65uxV5hzJyraN7tCxA5",
  "key8": "5h8ETyvDCu3JusBA3TPRp4fayT1Ce3cAqYXbmsu6VNbwzsNZsiXi9fVG7fPKLMc8ihSoVWa244LN8ELWohw2DvQD",
  "key9": "NmhjYXpfZAAVMpU3DaRT4hrL7C5jnmauCjUD3VNWYDNKC5NFhESGrLuqLa2qEPYc2R3CUoQq11dF5rgB6BpsFP2",
  "key10": "4JK9cmcWUagU3h4wi7WuTXes8Zqyuj6DJSA1UDzmbtXRLU4Gi3k1QQpUqk8ApCZ7NYdwHpZzB6EALfuX3yBU9Wc8",
  "key11": "XKA79NSjK8pbt1cqPyAF8rubkxPXruJHuqy7gSwi5wdGfKoLyNFkJ9NgaCmRUnHg17AvWzh6e4WA6J3VpyLjfP7",
  "key12": "22THYHJScJAD76rxgHV14nn82945aBC4tikctYqipPoW2duCKdVTKugaR3MUB77uo8HamsFUpnPFu74B6dkDpNps",
  "key13": "2MC7ToX5TaJ99tF2bymrKZbuffciDUMzcorJiMo41whxkqMaW6GGjF7dKrSANDHZbTRb3doAxvDDcWpTXMtmTvfk",
  "key14": "3bMj344XjTzXxMhSScnQeRWvsu1rs8rdeh5crC6xDCAgByZs3Hn1kvMTTgnGuGibSxhZE3BDBn7rzC9oronPJiHD",
  "key15": "3Xv3dtWR1JahPYVaL5Wq5GCpdoYMy1kBgQicC7AMg2thC6CjohHvsRW9K2Uuq5ZQXnLM8a5CmnKjuZgp5J8THo2Z",
  "key16": "5yxHhvGQmM5zuUPYAjYVcZF8wmAp7R68st7a1Eg2Lb68DQHZYst7h6VzEQJVKQDxx2mSinYJDegpjvsHujY1mUH7",
  "key17": "38XDQWr8kSA9ou5rs8yYCbHuGXKCJNronHDrpqoQ69nf5Gv5Q8bFvA1aYbwyMmX1gqpsENwafCANwpRjrRFgJiaF",
  "key18": "49QT3rAcmRaDvBxhyu5dStW6WVNJti8FzzZkJVCx3VNFerK4WLhesDWVKig9Bnpx6VLMWXoja3h3t9s9Qbq79bQH",
  "key19": "5oZckDZAXTJ4VcmyfEvcLDriARK4CehdKuMjpv4bowCFNZqfsM53zisHqkd44CVqaR2GypoEuMnrwm74UmumMvih",
  "key20": "2a6UrS3YxKuyqppnNc3ksgZFPJ4SzQxwwvjm2T4k11sKUxJkJcYqiRsnPkgFz8PZCAoG7GRrQ5UCkhT2GkYXJbWM",
  "key21": "434b8vR5evv7FiUX7SJ5pmqQvq8dRFhbpYo3sgnwA1gtRZiwNQmew1er7GuZho9bynBbuQiJzyL5WT2eST6GR3FX",
  "key22": "5vWC7Uh93ySU7zWjLdwRotoMBdubuX6JdyCmcjV5wKEVaEXyCLtS41yFov8iNiYCkgt3QEZcgvnS1nED587tZUML",
  "key23": "3NNDPFw6bp2L18E6xgYpbQHLD6YZAzxnizRFk7EfFQjzHQ1pKLK75jzsDgZ93uPArjXNYV7TuKuBiPJYyRqUD8P5",
  "key24": "3uN96eX96S91mibkQxnpEzoawgFEik3WRkWTXszbRXn496Zu4uaqX6mVbQWMvaJNu5X44hGFRcJxqUrbuYqSQZRR",
  "key25": "49uTWwvNzayyv5sGoGANXVsJJuuTox7QHtqHHUDX2aUDbgAhj6mCrzwYSVRMBWiu1e5XDiwihs6dmXC5dj8cuRS2",
  "key26": "2Z5yyAMiqi5NGDYHsvZpPwuG4XGcEQT6TvgPv2iHyaLSQDZnF6uuT7YyvkKiSBkrUWYpYh3Af9Ve9KZcKcjs4PcJ",
  "key27": "2zXCDMdVG2f4abaz9gmaJUkcJnAMXtNKwTNYuczPC4mEPhL8dWTDCpfdzdBkHjz4XSFGEcgzh5YipM8q79Cfc4Mf",
  "key28": "jRdpChPEEtG74ffyjsfHdTiSKHbhgvZb5myNPkQeTZYWksvNyde9vXDj3ZCejW1Ly54h6Ja4iHAhrSNJgcvGJ4Q",
  "key29": "3YQbRB7Jm67fTUe9QQ1TxvnMRchsJiL5UqGpxREeQjPiJKzDp2ZYU5E1EWwVJxq6FRGLqtxkAfkwnoHxgp4P2xBm",
  "key30": "5KqjtnuqnADTNFRY2YNQWKWQ4hS2isJD4z1SPfjr4w9CkktpddGFEdCDA2FqG3H9Hya1Jh7MectUzoamdkbLXubK",
  "key31": "5hbr5crjdgbCZEJMMpUZSXhyVLYwyRCF2tUKvBJmxz6vmvtVpZzGDMTeM65utcHzKTeY6FpMqCygAGfvf4eo3jTw",
  "key32": "v15Tc1WAax14yhpaGj7uiPWMoJo2WPy925RD46CN1NWdRSkU1ZBw1pbSGeiuz6bSLauWZ2Db8MGqBe5F7MU1xkn",
  "key33": "4ZDPamQivx4bkBVvbi2zRLj4CwbV8tEzP3dEmgeG1vGHFz8rucosHH2nX82FegKiidDjrGLN23cdbfqqqV4r93u7",
  "key34": "2d4f5A7HDGap9A6d1SEUw5ycYtKhhEAkhtUkKQk2HKnepDj1ueUr9wXBSib8TJn1mtXkKvQaWwEP4gfwQm9ojqXp",
  "key35": "3mRMYdZd1iVKbhBpmnZuZTG7SrrU9yYsTFqqRouHyC9zpyvaxXjArUKB96ddAVnwAeCLepE8VNVauHH1t494bBma",
  "key36": "36ZBLQvti3JeAdVJkTgfsK6R6TRDDbfjTbpkLuUCDBq3RANHbyB9QB6XJCTNSTbEJsbkoKR6UfJR5MzrU28FT86x",
  "key37": "29vSM7uQqtLVNo1s1hjQsTdySBxDaf94cj8fc7eYDkspddfMnFu8KH4tyPfeAtWa1miZpYe9k97xQWAVquFoKFq1",
  "key38": "TtGVD3JQ7oQRDEBjp9XswGrKyiiviifTkja5fvNYBXmEBJ7jd1br7JjBrmmdqfAKUShpxGqHW7SAFpHmzwUVqTt",
  "key39": "4Y53reMfKCHpYF1C7HPEv98oo6WMk4Lgvc7LdoQ6SEMC9qfb8HYBorYBUbpt7mg2KP7fgzBzRu6ArFiH3sUvww59",
  "key40": "WnyAyRGNCGvuKzmowFmFN4va9MJg3MzpqQzyVMss6UkyTHTCmktK7PHhhhGKCHzNQHM6Ey4QxzUsr7fS5f2ZNoy",
  "key41": "3zp9vBS6QvKMFerDKdHVpdPAmR3YRqbyxnDxn1XSNua51VUQYavrkiUE71fbjuAuqwLz7JeRB5pmBqJdz1SbtjYQ",
  "key42": "5GJEaKbYVuUqnpJtqpCbS1QvFM4mbv6oCKdvtHNT9n3YgMBSYiBLuYm8Xsdc45eXPjhbKTV1HnJJrStgKd9KPwa6",
  "key43": "4nvY7sxstMUSRL4iZK4T5De6j819o8TrjHwRg8oqQG5ejbqLUZJ3cZYe2aRodTem9AXvDUA1rqhsoq8s7gY5bR9n",
  "key44": "5Jiqp1XAJT8v2wUMvejKCdoht7jS372Aosybck157cTYWpG3TcUAubN7A5Ej8xhyaf7FEu3jB4WStqHy8R7PJ2AD"
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
