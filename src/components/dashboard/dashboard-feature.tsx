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
    "26PLJWNSHgm3q8YWkbxTHEcGkVXQAJQF6e3o9N3PZb1n8rTPVe1WpMAApatyc74rm2WN2d9xLKAp1Ax7uy66vdf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5EUmxwTZn2LyjVQDh6h8otpPbW4xgx8PF7utQbk1iqW36YVRhcBeVjQHypCHcGbStioeU6NVF4J5e7SvyrmfxW",
  "key1": "2iTM8zSsNkHZZYEnEb3BZgY2go5QrQUCZsvvgmXLNF5cFgAyv4DSvNNorT6gbETgTwEqijktT8aTcdy3GV2JsLw8",
  "key2": "3GJEWPirayX7pXhYS9tb613Breb1yVBx8sqtkPosGf7NqLPhxRuruRXc8Mvpp2Fsf2Q5yoosb6pDe3jaez2kKtY2",
  "key3": "4m6eCB4z2xG1msnb7ChSBaKsQAdZDi7dKB9URqwGe6io1P25o3mJukWb6yK4VM4Wjo7556njeaurvGeiwfB4Y6tv",
  "key4": "3iuPdUWnud65c18A31ANEPdUGqjri9xViwtcxX8WjdvSXTLLNLX6QoymNRMaxr2teZfGLWMFiSMzJfPtvy6GcCFb",
  "key5": "5QpYSJX8986pWY5FDtHmuTVJ5GEdckVMFAnze2ibJAjoUQ3Qzx4SKNhu5LteeSxzUXiHf7Rphq6dDdq4SUDDCSqw",
  "key6": "ZWqVRfuzy16XucUwNn4t2D3HHwQ5i6QXazVmfc1p4zaxA3HeCtQcpvXWRp6vQG5NVhwjrPPgCPygCknLDYxmLhs",
  "key7": "A515voKf9RytnJSDkGvaqmAqDxqvxdkwDyT26aZXd18Safn2i9dcZgEYbCYQsLHNPZMenSp8UfxwEn7nQ3uPVZV",
  "key8": "3UvAKfHu7Day8CxZ4x1q1EWjsTBak8DZ5uwxS5RKvedfM47QWhYsiRB1MMmVQ3oeGh7h7jhSCFzATE3EoURKe9NP",
  "key9": "3gE3wmvHddAfumshycWHeZa7wbnsQ4QGwMHu2N2skvTz6YEkHmtc62ziuo2Wx7nGzRymTytC5eSokzH6KRsXS3X2",
  "key10": "4uB1nCzNU8JgrhRdoUNCGG1FdzMXE1kk8GMemNfMpaVGuCQdcSYcx8KkVnhvEGxah9f3H5b1d2f1aiKH9qs7fdZb",
  "key11": "3WtLAhpm3Jq6WDYw3pQSqDDHCZxjFUcCyZsx2mfKoQ2Rpv7s7ywEcGg8ASNL9u1UsAgbLoKLrSGpDDwTRC6Fwn9T",
  "key12": "2D4h83qUCqNyYEvPNJArosHCqr8gAUTCDUYdLF17c2v4FnAEoxSCDD8RxWV2AqScsC52rkzvo5jmdFEwkUCDRZQL",
  "key13": "4hADXTbnWYHpAWvF93a96MqrdNwLDFYA912PXoZMNdLST5Uj8JNbcRKxfRaUVuq4cCASnVofbiTH6G6dVKH5fKzp",
  "key14": "4g6aMzFjwHp11upUZAXt1jtBa9bviuHm1BpH9rKEDhaLAdzTn2hjLhc6tb2y6qh1iGNxkPkfpVoLMAdedk9XovAj",
  "key15": "4XXE2XioDLo2LDJpjfUwfxNDYWeC38ry96qKRqCYGzom7DTwSWQNWNFjHvFR2Kcg52JvyHLGuEmvHkM27nemSGEy",
  "key16": "41voPakp68unpMNSkuSRnkGAMm5Ez5c5wNQd9xaAqGqZxy29ma12W8wC8LK2tcL7CZ9qUZZKhDUMf2b8k7QJP8N4",
  "key17": "2HgtTScgY7HugXvBwxFcJrghsKoV9P9KjcQVsA7Xe5y6hkwYANQ7TdZs1q2VAg3zsrTqzPzJd8qqkViAtDDjbBx1",
  "key18": "5DuUEGWc9iRnBzJYVxjRTQHVGTQJ3WwsGpTgbvsUxUbBstHQYuf75VTQxR5iXiakXP6Ufvkv2WjvgahFoh87Bn5r",
  "key19": "2h6kUYHD1fsBFXnusALAC92pyQ9eX6XETJer254kbrZavNnUABR8mFaFZUDXHJRh5p4WQQNtZEWXuRR1ZwXcH4Dn",
  "key20": "4TuNjE3hbeqAyRCP7h4J5n72AwEFMZXe5cWQwtzSkPf3BMsFD5WJrW9FcbYYbDDYDdqLJQg6b78npYbEhd6gzu9R",
  "key21": "uakfLUAqzTVeyCPr5bXLr6nqzgKYnunT7HCbkhddt88AwuD1HJpVcqmooUxyHDBVmPmMtVikdDmzVBcC5hufoJ1",
  "key22": "4PaQotcisJVkrXbrR5P74Wb52unW7LPCtn32St4X96x7ued3KZ2XHUvCv8nZjayj7maVYZG3fT8kJJcmybHoFntg",
  "key23": "4Dc66DbUMgBHrWuPSJgkcGri9GNW8xFXwUurP15hkUtuRZA5re8at2yGdMYBiUf1KbjAwSDgnQWziAebytfA4CMK",
  "key24": "3Kc415uBoJHy9fij8srLKsni9XiYP4nQbT4DDFQnpFKmjKiX3N4zR8iTxrF8EqZYPJ55VHw4mc9iA4bSSxCPSJ7i",
  "key25": "3wtib2MU3uVPSCxT2BRiwDkgoSNcVtH6KijV5cXfVXcaAY1Z3dNtMxwqsjt8nxkHm5FWV6mVCYBQa3paGMYdPev",
  "key26": "Y5HHc51STdLi42NvznCbFSSQHnXVTQSyQ8vbZbq84iEQyfwmvJ7s55sNJJRSGZAahJtMdKdhNGrTdhSm5k5WG6Q",
  "key27": "2tCVszJAmfEbdFaXNW2Ehsp7UfNLUZ49wjY4QF1PEH1wrJKS9739TyZoVPavE4d778LoXBGEuJjtUFntBs3WvZUT",
  "key28": "7KbKVXifUispNP9t5jarb51GsEtCFjCaTmEEReAnjNUHdsYgwZhaowe4gpwgX6bTAsczZAoxjtDn1cgp6h6dKS9",
  "key29": "2frQHhJAbguzNsNTSBe7fxFRu5nqeTatqz5AAhHCoKCye8qnMcHhpoZ68bQtpRcryTgw3kCf9iWxJWi5J58yjb3y",
  "key30": "2RjDnZhywDsXyf2pCYb9FBMxLdDqcddVe4GcunM9DVXec9xXnu845UcKZwRequayTJnojGTtvsn46DYZyy2sspfJ",
  "key31": "2sGGRtsyJYJ2ZGXNHyXroKddZSfqF1fVs4bnJ89tAnP59d7qtRKjYfqDZyD32LeNqhnPkpPkV9hVf5nQkQjrY3HX",
  "key32": "8Sbgwde5JUAmDEUaYN7rRD2ECqeQHRpqhJgu3Qq2eLymkTDut2N9ySxobrzi6PvVe4EATs8JbA1dfauLPKJKr4r",
  "key33": "51mwD2cjPjiYHdqQoqNBG9xg6SpEHo8g8R9igQxYKkcTo9cczEnKPX4qRWCapLSP9mCrDWYZj8ev7NQPWwUPRedy",
  "key34": "3Uuznp3hyGMFv5vPKvk6H4M8ohoP9r9cNHXuQysnSgNQDiKrmDZKhUsWrUqcsp2SdZr3NMYNSrdhZgD8QDQQxqbw",
  "key35": "3NwGyEuPeHtUWbd15sqKHKsaTLUn8VWL1wWytu1DrRde4XCEFTNxbF5BFT8oFq43tq5dKvjjyJqUD7a13VTByyjz",
  "key36": "5BsFTch4mUNH8WbnyDDZCpjC7gX3imWBANTUmgoTMumMgCFJS4CscwL1JmqYXG1sSNfH1oNYqQJiBj8FdUYsVbGq",
  "key37": "4gZe3EG7LzAtxHVFxLAHHroVXZvvxBf8BYYvGW5y8svokR1bAL6hYuodSzEUzXVe6qVQMsSgaAVhyGN2fLnNN1tp",
  "key38": "2d1D1zgzBK3MKd7sc8o2UCHDb2B7iN4kBJZEUZQTWLEWmvkFLdnvohR3JKiiLGyat8Z7zwHVxQBPBzP1ukeq8Us3",
  "key39": "4iyuX3vW4dgWktxkGaCDGRj5g6odcVitJcmcn7r3ffdW4ztmY2zDyFNnnPENjb7mjWhsFdKxF3UKK9vdFSHwA3VD",
  "key40": "2yFYyE1dEKAvpTV5a5TmimPu75mp1pBkkkNjgbAH6y75nMvpgUWrk1eViZtKFUB3wgHirpWTCw7MauNWQFC2s6vU",
  "key41": "3zNPjDFVPVHGUobQM7C9TkknDgaLu3san5vfz3usARG2kCN2f6J8mGbqdiGf8KrbS7tvbHBzu4XLykEdeUhtiruD",
  "key42": "3LkcSwqVgQ1rMM8gUphvv23owEye5RzbJGvZryzAS5fpndKkvmeTpmC2ib52g1NsZgfxBUQT9kZgBJo73PpnF6Ba",
  "key43": "33ogjadT3cCbSAYDxSP91VZpwcQHjcKWsk5CnAeULjxfsRBKmM5Xjb676Q6hvW2JZ2iYs1gPWjcbFTQFUABqb6RR",
  "key44": "333V254xUpXSMQErwRE5nx8eafKXpxpzzg2fsdtYG76JBsxpfp8vXTAV67xicKz944KU5HH1kLhPxZQyCjoNWbuu",
  "key45": "5Q57Lvb1TxdkkGxptMpVreqJNSgmY34MLL4LK8gsqRFmfaUw7L4wCLgkWFUBGDcb3kasKPLteDHhFhkVKmHB4xgz",
  "key46": "MnjNufZGbyi7pbxptawNc7XBw1uCnjRNJCWQPaKpFQ2dz9rxcCfXYjs4Y96AKeeaH65q3GJDjZcqnZYJ3esxE99",
  "key47": "3XRiXLX7kvwaLNEhjGX5PxHpANCyCsYQ5KnzqozHqpQPZhmpSfrqcGWoNShcrrAzhvqEToY6t9nCDzr9jPboUv6x"
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
