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
    "5V5s2yDkXrfAdR3m95JNiba5EGn43Vx9tQc1MZSp2etyPnYR2VxQqJFYyk65ybWGqPcgKoKf78n5whV6nYvZVkBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jZpUeCPvbWKS7pZuydE71EoTEL7f8vGqeR7UVCKRayawTwGXdoWodE6zWNVHni5iykpucKN4qbdys2qY4stKof",
  "key1": "53nR1ZK2KZ5te3zbTqLUwYk2q3Eg4mpJP7whfhpX6E7By2DNtNcLNPgpXwnVEAN3cEiM71tBivtexirYZasXjFEP",
  "key2": "5KvYxumVE4R4gMsf4WXRjiGJFqC27ZAF9sivyQx2XjD1eUNFLgmGKkUZP23qT1s5LqKNgiS1sgYBH5EaVTeXfB23",
  "key3": "5zAhoDyx1bhd86pAn6ZjkfiEMReibj76ievNuoHQfafb6LpDRZEZtRGWLJ9hqwgVQsXT1MBEjaZ2fqp2Cppk7DXy",
  "key4": "21z3i4Czy3St2gYJsMPfRKKCrHwwFwbqWgsoPTu2Q1T2Ldz2yB9iKyJex6siyWAMGXJPYqFqJVbQ9yfFYybiZeWd",
  "key5": "3tqyNhtL865pBzHiEWKj4esTYVw4KkHbhYJAE4wJV6VKgp4Cfp1JtTV6ZCJCeLsVCeh1EDAEATcyzmPf6XvYWKP5",
  "key6": "5U9PdU4jj4yyD4ctxvh1qr1jZHaJeaYxq94N9rhBg7v4CYHw7fv1YN7vUdrcDYhofJxtHdUaunMrAeD3PKni6b2x",
  "key7": "5cTR57gEf9yuZ7SWMbShbVsphsLYACLQnsbspsyP5nVnL6NE7vA2J24JFaoWb7mnP4TDxJv5Zxzz1PNk2gvbZ5ag",
  "key8": "3MwNh7rTijt6hnqyn6P8cfv32vNxRjAUNssD4mPDGMGy73N9KsbE9S4zENHJNJrEHm8Xuz611sD8xuhN7WGh1jAt",
  "key9": "mmNYxcZ6jAdyC5yUAfBLG1nhEP3F9ixcFLNqydnBjc7pYPLwmUM3SuHKUg7mzGmQwaVmt25M67gVT5bcLm8WRYH",
  "key10": "4YapLTFfouRwweC3nhHZLxEmcPBvFnr6BP5iwbPiRenXUnCRUswicdjGH2QuqitEagcFzaEdkuqibYyPhsYRnZbH",
  "key11": "5WEDZRdv7w2f1kSAaDVyehfJFEyXC4PvUYTXqEtU7piGiwvm8TU7uVuE96ZZweAjtKavmGQH7cwysG634WkjLywx",
  "key12": "2Yh5KPT3yhavhxbmmN8hZScWPvq4pnoRXrzAxKeqLcFrrGSjtrZjMcCHPkLQwf5z1qir6Sj4N4D6U16n5wb4np6m",
  "key13": "4jJKzjTUfHVYvBBqjJQ2oJZGrRsAVhWTjUZ4EpJGp84L5D2Vkp4MqoYn8YmACt6CKBWRuFkMaNmyfEgecgUoA48t",
  "key14": "36h3KBBJ3JVpNJKauYVV6TeWoirwQ1XaSSnrqdUAkXtg5WmKbpnv2x1a2GBbBGzSgkjT2vYfDb3ep5F4aY6J2gxL",
  "key15": "2E3zgeuymeVNWDJ9KsPRQhaNvjAnjUYtYWCqsAoE2Rx9v9P6ThyhAXKZNuCZSuJnsbBBhwCCUNzDifnpUzYAtka2",
  "key16": "4BjFVUajZm5ipJqVUoYAvtmGrN3VXMiqrePkcCfVGjfQDpFjyD2NHBYndREvEFkkbSPBHbzjqA4yBUd6CdvQXJAF",
  "key17": "rj6kKYSdfKgMpEpGkPj1X65dvQtGg45UFD7Uj81myAcGQBkBtRuy4GM5Va9irVRJv175A7iNomfrQFB7Sng7ZEj",
  "key18": "32mSF19eKx7HULYeXxcnTSyXi7G3MVFwoa3o616CZQmWKSGaUj7fjUE4YdqsHBe67RKT3K213snd5C9w9v6kvNyf",
  "key19": "62UZRZNdEcp9YAUWFkv1UeKdCaR1qgBk6UsBD7BRcajxEqvvW9GN3E2B1MskZYwRE7YwSchbLMa6hq4qXMnSD76o",
  "key20": "2vQKyQ7Qk3XTfQiwa5oJSpcQbAa7D5TkQYpDeQhGneo1skJwmJUW3Z5Pe4rmanQc1Futr9hbwwGPEo1VVsJ9ZFPU",
  "key21": "3ZaJUobPcbByJZA3VQUgpspG932e1VaNx4WgdJRbjpFsfCsuqJJCk7nf74qn42f2k9U3fs7Fo5oXCmLHTQUVu8y4",
  "key22": "3Lz8EWyEGBCmeWzyLvFW1FskZGwvAL46jsW4E8ytz5T4e9akcf38xNyDoDfuFDdndFF1uxyoxYyE1hsGbFqJpttw",
  "key23": "ckkry2XWov59xwbs8AweyhmA86KzausMkB9Ti5kDXRs7epc5hyD7fJ2XxK82HbkeP7qZLX4fCdB4N1ezUvFRZBa",
  "key24": "B2JehF6fiRiCaQ1w4NJqZWZ6FsX5jvrfzTU8uUa6icPASZGEXFszZphRaZ3nkYVFNiqFqNva6rv7TntfG5PGBhP",
  "key25": "5GW9mY37JkZx35uku8kKAXUzM22YoPvZ9eMJNijw8t15aiMe1tfmQNgxDKdCTXUNbbuGJHrJA5vS7hQPgu61EZjS",
  "key26": "4KQ7G5sNRPSqwSzeGyJgbRT6dviF9mJHArnQNN4ANqPT6KLS9dgdp1MjrvqeKASCtT6EsMQDVF3279z2JpE72hda",
  "key27": "66gRv5L7P8XkSf3NNwh7PvQnwesiohLttjjjdcBZjhiQqdTC16cuKdZyv9MdwWZJSLvFAcsMrnDnv3GZG8VUZqic",
  "key28": "3XRE6BnbG1sio4NZjWk5coztbqxrheBZDonQztfycm8ssPtFuSErxiPTfcJLeqcrng7ADdYGiwG3y1hMuFad5m7k",
  "key29": "5UrNUjV8PSnWq8AmyLeECdScR16DV4QetosMYbmkJ9hyjo2mc2KV594u9Mpk6qbhWVNzJWSxpUGjo71nD2rLcXrU",
  "key30": "4cA6dSSrVbYfAXxZvdWsD4SC2tf1gii2HsbbeJpTepd6u3xr3z48jiBy315xcFrrvgT7ErBydRM5q7YgpSakAWCM",
  "key31": "3QPRKDzNb3XcHA2XTHPANF2EGGoBoxCc2joC6vh9WnQNV7GAPYNCpcLWZenjLCzV6MTaQGcrPATYDgMPdjZQdcQY",
  "key32": "4qugTPQgqpWpVjUZ7AsGwLzcsWM3BDtC67r35PqyB7SfZLfUUHhWMzGi2AkzkUBxf4NV2wmVM98CYVgYJ3VTcqaM",
  "key33": "56mmQ8q55MAYFbJ8hUEyzGkUrpn7PYjuGGp2yVQZSTaHdFB9rGuQyNcb9PHNff1pdTwmXoijjV3Jd6dVnfSGa5Kp",
  "key34": "52sh7HbdUorguwrvHD9GoaCAM1vYipf6CvyEdqfJ1ntjKwsgqU8dDG99y8uwNhaXUtWeaK1UrP5WjxF3ZLGG3urM",
  "key35": "2EUx3BRXHqX33mnRpAxcSMPspUmbeyoHpWAEyUkZxUJV3tLy3YHhogUJmcU2frD86cnuBhtjdAVB1XupFSo9kk3v"
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
