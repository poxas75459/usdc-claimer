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
    "4sH9K7yyR2H58dByGuKo2EQnHWLPCUipZFJ32L1jg24PLr8J47cQJYmEY52z1hkvd3etSoqxHprVeC8GXMeUEdxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q39pVdxqqQcS9MWHDQtme6aBRYJ8HX2M7Gyg3grh4AzVwvajohEBqZkAhCfWiSkj6BsFYvPFAoBHyuhRWufZKQN",
  "key1": "3mJv5kZ3GEXKc6F9pXE1YJygUYHpDoDHioyrXsZepCjS7rkCM74KXtriAXZv5pUCproDcZD7ouAUhgJkk6GR7ctk",
  "key2": "3bYp6YqBRUqEac9bU9ePSxRUrExeJNGAxAZP58TmNiSVuAPt7ifQd2xbVfpUiFuPBCLtd3DGhBRLNxtQXkJon2u6",
  "key3": "3MTuym8ZjiFQa5LM4W86Hw5T3yPmffGVeJAnkW3ihScw4eZ5XVtpNAjMTUvgfuTcY4SzJaU7Wi6xxbCxxdN5gGS8",
  "key4": "3Q5n1Xfua2XoJSGuawAZTNXDAVke9Y5NW3x48TyLhSywmbtK4Rwqz2DBxYj9wj9kw8dzw4zALJSwZdZtivZEVMFg",
  "key5": "5xqVKUPEkjX8Zdg6JcHecZY2HNXDQMd26kdJf4SJioBNfzfjhavmQgw1zVyRN1fgRj15gRCVJkZtGGCrysa2refk",
  "key6": "5CiNcvZ5MN1pNkPzZGPs9SL8AR8GKwYC774Vj7nkL7FnJ8HCNYobVeiNWbU5b9TpTTJKsLH7EZHK5QW8qGFtsHqc",
  "key7": "3j8J9u3BNqVVNYbexNaL9XjxV5Fnhv7hbHQdwGQJTsXPJGrWEmV7nNKZbA1mYJHx337LiuuNyvkhEJMY3YyGTPtX",
  "key8": "4bfnpCyubJQFSACdjxGEb4kkbYB81nNaz16uyiaDNb9cQXsKJ4gViR1QS9QaZywskPD19QbwzdXHNCoqDLAn4GVn",
  "key9": "3nP6tk2MjDLDKmozqjctEEAEQviuVU2xvtGfS93235TjxR4smg9dY6BbKzC76Wx5nxp22px8rPL9eZnM6uHJL2ZG",
  "key10": "4HkP1PHUWwj4YjoymARAQRum1VLGRKzkeXbtn2jprpdMpjEVMF3zqrfyrZw6Hvaoah39ZaCbr1UtazCXykNZxhdi",
  "key11": "4UEMJo9pEWrkdsphNi2cg9dnwz1gr8gcdV3DhCh56uS2Xqp1mwKYCrTRFWx5ghNuLN2g9JXpoFeap8aBS1d863cR",
  "key12": "3jDexzKaV6KVSKJxBjWEs7MvfAx5afLy1FUo1dMzghYxp1MtmWsnNmfGSA3jx5infPhsr6gYWLUmseonjMXLDU6S",
  "key13": "52kBjmzcNC5kzpTfWhcdcEr2EvgVoZzPHRMUS8Y7b3T4ULDewCZ5NAGYn4GkHUj32ZDbfPDqSfzSaJ3gBsMMcat1",
  "key14": "2EumQnL8cNDXXDYyS7Yau93xxocAVY2fAzJwKNoDvMeh8QHncbnEv735fWPj1xTTSapvmHSW5qzgtSnbrMDghr5Q",
  "key15": "3Ut1vSq6CxEkU7u4FCwLnAEpYUCdtz8ZKww2gExb7aNbuKW4ZLSCbJ5MokZASdErtpeZ4KwJHxXb2Gsg3MJ2ef56",
  "key16": "gthLK3KcyDMEsbi3jkdoamP77q4NuPcq8MvyrZ3Cs1ak2yq6CjxmvS7yhdXHddVV6cXMaGQrVfPcPbfH7ayoyGt",
  "key17": "4gbsniiqg77M2E4t6iKJsHgcXdjFu6GCJA4kT93w5Po2q71p6fwmc9MaAub19ryvn7LUJPMdwiiAFJUJaFTFkbSf",
  "key18": "4k7AsjrGL9wBpEBJccTY9B65PMFmBQenc8eicDj8XRCCWZ1tZhg6yxMDZDoUuo9E6iu2SJTHww1uv91Q896QJKeq",
  "key19": "4JWtw5boA7f1Gii63NcHKt5kTgQNkBTEVziF2Qj9RgwSspXQpvCdsHSqhHSSqes7uKRdtBwWRxYoK3MVZVBNJaND",
  "key20": "2KKtPc1p9xfG84LW7FihX6sEHQZ16x1yyvkZyEqAzew8SVoKSW78yRe8raziMJGVy8HoTGApougKZMF4yW5tcK3E",
  "key21": "4ZuEHbHHqAUvs6cuXswpcRAuetfTNHhHvoDcFjeP2QQsz2mnYBC9vrhiB1cwyJBDykbQmspcBgV2satduWhCGZaY",
  "key22": "165oJ65wpKBjkGtTL6ChSKejybZ6E64nwfGhL3GX2SAXLkuzEiH3D4ymi3q5eu69m8RKWufLZB7mRZnNpCNFApQ",
  "key23": "suLUyc5N113wt6wJobumZqVo4p87K34Gh7KFwkD7vPLR9HE8g84PEzC2MTHRdL3bDHXpCkHALakJL6gChms9bcu",
  "key24": "wPDiHtXnyFzxNZvXN2L6bKwgBkYaZhMWELHqgmt5aVSWwkibffkCs1xUhQpTPpEMG9Aw1bTD7CRQjcpWSBkKGsk",
  "key25": "2ud7vXNgcUeYa91BiP5Ss7dxJT2vEGEgJfooawoTPSKUz8DQ7FSUTxPhj5nBqqgomC1mtwJx7efK3b27AsSz8grG",
  "key26": "5SAWbRQPKt61fhMjmRC2QRmcx2tPNRuy7rqer6iMYK5wbeyARC3sXNBVUBmuqWoQX9mQ28WpR5Y2ncD7h86qZB3P",
  "key27": "3xfM8DikdrisXCiLgVnnXrLgK2G7Y9mWmGQRZdvx1HpHpK9xKH65mVGUHRRdLHeSxcKF6EbQDGWwsUkftgfuudrb",
  "key28": "5YBJLJb4XU2Dpx3GH5cBGE3Bs7mEdrfspxEQTLR8mSkYUbSHs7ocf3TQCU2XdcbBndSgzYEizr3U4nPVzF5DZoYe",
  "key29": "5EBYRWay2KPi4LYZ1Ppcsig4AaY9PsSv33eAuY5xqUw1FsrYFHGLpr97whQCov2NHsAFniMbDaqa6Uq7ufovacAS",
  "key30": "4iWuseg2XUjaBzm4scdfzQfAoaU33gMKFy8Aad43UT6YxgiNDHbDbm3JATy4LUiALyiXAf15ktMiTNpo1nfRTxW7",
  "key31": "4oRVWMBvsxGbkhooJxDJCHB5qscmYF5ZeZjfGCxMkeGw8RgEmUsSGGR5TQaCer7kBoyGo49eiKomz7spPcnZUZxY",
  "key32": "2xDD9o6SmjJ8uXQnu2o1DLLZVsBBTQnr6FD28MGkhFeUUjF8hXx4KanHDvjaM7sLEkfL2RBL168hWoZUiycXo6MX",
  "key33": "3XyDkQSv6kqnvEB8CvbugaJX5K35aFiyahTHYs6iuTHqKVrrKHzN4Fn2DFfpbFUoMMXQLer8LWPzP4iD4jPnJYz",
  "key34": "41tqX6PBv9pTW9FrCoAyA9k7iyvixG1EUTN1BTMyqzGMb1o11wApb7zMTShkg7Z45BwJbp6ohkGtr9TUjoYmF88m",
  "key35": "2aMXjzeUYHaiK36drt5ijs22Q12ZYEEanvcrjjciSEGLnHEPR8gbJ6aWkCZDqSTV5tJc3CJSnt357kbdVBqa3p1n",
  "key36": "GapuU9nemS5Jh3p3kPFB2sqPYXsFYV2rHwFhcEDfD3R74eJn3tbXkCUSNqeVHATgs4G7vWreFvcZ5jNFoQ2Mhs5",
  "key37": "54YNRTBNGS95w3b5YL2o6amYGNw751E7SzeSJiKjruuymD2jdn9KSygWw38kUn7B3236S6HeFP8TJkZ959mt9UPW",
  "key38": "5RuwuB9YpBqfsJPe4ZruJca5QQeKCTdjnDMz9r4onKMtGTjzz5XXUwY8xKZ7HRkGm36QFgZXLKxbMw7TK4MJ9DUi",
  "key39": "4Pj9ZguY9DLkVz4rgT4Cx8BVGSrqwDog3Xfx6UD6YZdDrm6V5MV3isLhUibGHkQjKFSM3yENunCjTd1tZwzSVxJK",
  "key40": "2qVn8tnjXHpk7Me8zMwp56gRKYF3ECHPMWeJxioMA9BxThTZom5UpGS2JaSKKW1sgkiuMyiLdMVsEm5tBS9nqKTN",
  "key41": "4huFapXi6Ma29UJugfa9WopYeDt96MKCbRiUSSSyMSTyk1JQNUqRDaxbzbpBcRceiR3zKZaudkS3rDDQUnduRs4b",
  "key42": "5h2YzQ3G1xiHPRM7cHuaew5JEcAmbFdw7cdnpu9FiB4uHdWWNCYMyfJqyhdZo43ZtXCFj98hY1mRzWSDM8Zgkeft",
  "key43": "3NzAwVw83xj8p72tbhAtqq9ddW9x3LiWYUYFtAusBC5N8CeoruLn3AnPybDje5FVUzc2gnpDjgtcbzVTX6sUGtJU",
  "key44": "G8xfTeydK4BPssf38yCXfr2A4CriL6eqd1GQCcsKQCfyFCME9NPXD1PhVK1JJHHPHprQE9vCDGkLibAq3wxNj6h"
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
