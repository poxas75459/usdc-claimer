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
    "28LnbK3PxikXCaPdfihefRyMSuqX3DE2vJrrd5hcwCnEdsXsp2MKTqXEiGQNhkdG2JXELvdmNZh2LhSsCHUhBZkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDq13hc43pTc7aKpfq8cBXXqPueRw7YC23Yrz4R55Xfz7FYxGu2oPK4D7DFKMqsTwynaqtfcHLWZqWxUrixhqe7",
  "key1": "26JaAGhMG4txkpvuZ3mG9AALL9iR75Ybv1JqZ8MwvSCnLfCWKpnUEEW3axC5oN6yBgJ1RpmPAwAw9WqqVq3DtyTt",
  "key2": "2tdjepcuTKLwrur4yu4u5cj1RDtA8MaRzeTJoWCin8SYYqe6FYNfy5x6P9EHQkowt6R7F8dS4LQWZnfyd1ptoi9p",
  "key3": "5kZdqkGRLdZVnE8PXyugBcDbphwHNryYDUzws18mTaYXWc9xApdZ8PxEgPBDk3d4NsKVajUJQED7m11S2Pj3nWaL",
  "key4": "KfB9PCpSG8j4gN7fabVuUNHNFtwdgPfwNZS5h7HZfXV86UWqkYVqtDLcnLzJZhN2HSFYqsqrxFLh8RJYy6YwmLF",
  "key5": "5YoUud75CcmNkiLns22FBRdRZBWRKrb3XQTzyGkbeK8nMNXDNbHeBkKmqeHL3hkmmNzmdNTKWFr1CNe4KpS5CVK",
  "key6": "2MLsLyYCZFdYCmyz9tcqnsU94jdDF4HtSzxzCqZVXoTMEyRMHj1rJ3XSZdauKMv1CvLE7x8AtNnYFU28wEQtqAQu",
  "key7": "4wN5QsavS4X5zUh5iANpxMfJNAW4WYMTK7V3yoR5GVBNk1r9awy58YWXNNQL4BWS6qzSyDPfiuk3jgBYNYE4qDFj",
  "key8": "4vbufBqY86G9djKLefiQNEjNqThh1Q8nkG1CBggeXjeNv2UnJEwufBdfQi2UyakkGvw81Znh325NezwHsEypDTJD",
  "key9": "3ktB23tLFxNmMwc13UWL2AR2JPDR5Zo6F6bGJBRTv42hrzQfAp4ou6JgLQjCkGmiywwkhnJxVqNXWdbEBwJEUQmL",
  "key10": "2cKQmmM8njoBeHRLbM8zjcNpbFk91aMsRBF2AkCAXxGiL4YAVH63EMDWXeo7bTxLw4eAYjgsXdhDNyCaPgaLyZA3",
  "key11": "BFNmiFHaqxsvaPVhoeJZoZS8ozo1uDQ5LvLU9LW3xvyAS39sdt7uP4vXjrSCMnAWi494xEj6omUAxRUmju4GS1Z",
  "key12": "3ghvTYqHXW2wGgpfPuHYn3vVSMumQuEWmoC4QKUSNJiahWsyKFZgUiTPLwMANnUvERLEMkBSG77ygWm5LgaWzg6e",
  "key13": "5vAbcajHf1eKAJVVZqzxLqY4PLN5aRqoFbU8JKH7qccGbDmVxgmbkYM81up178vm17GnD2R241c3BC4Vt1hW9rmp",
  "key14": "3oUDG4k5RRt6LkHrCf9h2p7o54u8kSrHoMbBTLq7h8L4LBNzU3h1zN27hQHWZrEBF9uVwzodGHRWBrjM9V4a5V9S",
  "key15": "37oF4sgZu52K6pwCQ6i4r7jNJYtCotpK8EiRyZ5DSV8oUbCvA1NJKsQQBxtqzRKjLjFXPDKfQ6RtYGhFcz9m6mnv",
  "key16": "2kobfnZutkH2kvKfD3eJCU8VpWzUdjKDd1KYSTLPhUAik6c6pD7Yq8JGn13rsxGwsUxYkAhnsuHwYse9pZEsik7c",
  "key17": "3PcMh6RHtw1ftLrX23Gwe9z8LbKkdRccQ42zkqWpn14mDb4ZsrL2eNrbuYEMvmsBqpAtBxmq16QebA6iQxe248U3",
  "key18": "2KYHT25TVBrM2g1hLRSk3i3t5KCKhUJZarHqAKfQ1Mux8my5Uq9ghKEknXqvn696WeaiYhvx9B6HbumSAKnLshkg",
  "key19": "4dNHGXUBXQiESDfHtXtyyNrBmzTpbQEbzBFwipFimta4EFL1jUi6cvjCVSNYbDxNHK29cjpNxTp82D2knKMwsfbD",
  "key20": "4N2gXd5Win9GgWftM2kypMVxyCiYLSUjsS8SgBCVZbNzHBChWzGM7tkQt2G197i4GhdSh7f7u1cy3s5sUQ8aRupx",
  "key21": "j1bfqPfhRbxEJKGwaFPf7MLwZq8cK246gRkzFwUL2jgE26mCsdMru3pkBsREyVFmieVsJCsbwXFucZ1149XkjtD",
  "key22": "CCaZaLKdUmDd9k8KmnY4vKGZ4sngxF5xpyc1ooJh16BvfiCFPQsELFPGCAVCxCpNUCgU7YSbgxQsobDzeXcxVcA",
  "key23": "5cqpaHdBnArf25UzxhL3yAMk9dVwYLz4QxYV5DTaGcD3Qd2AHEL8TMSxPSRTsMxgQkv6oQSZrzdvES9nBYRqrRoB",
  "key24": "29dcXgYEUvnT6naxaBjQMftYegiJNxUije54bbnPeDMdPKtHwkebCT6SeuJSAWwNaMW6mYFRaTKpmWjByXpLG8ut",
  "key25": "3BFiRV1LEL5VmmbSxyEAvyRvTYEao91ASn4v8GRDxVeYfeBSdvesvoxpNZL51NASyvYMw3B67fDoN8FJorMRWTvF",
  "key26": "2NV25YpHb8Ftu1EcyBXXKBF6WCeMsozVCi3EW3rU2o62PPdyCoUL59qnjgTd8Y9qDEcwYx4QGfEiK2iJ9knRqksz",
  "key27": "3fj6i3KoNr8t48M8ye1g8fMXRq1XuAJMgv2NS5gTERE3VYbaazTYXGU1XzhhX2t1iznnFKJ4ygTwEStYDNBcCyUg",
  "key28": "22PpZMLco7e8jkYzTfMXnPK1bbbssbBBrWF7gADmrNTPFZUJ2KuVRocxmtmgwJyEfvjANHC7Rpfwf9hhWn3ECmQi",
  "key29": "5P6Pm4UYK74fKe8xbwgcr3thfYX6DQ8gFWSXxNPfL7XDXYqXcikywZpN65Yx3mChAGKF5kGmRvD74gZw5Ds8uuuE",
  "key30": "2vqw4cZyV21xbpHMiHboHCxihQCsDrfTjYN9UQkGA1sALvf9EvfYtTESJoNEzxqWd8VSbDH5Ya6WmrrBTETyegpb",
  "key31": "52pmykVygJSCdutCdBvvtwgLUhzNupKuxqUzdHg6QtRSJk2f6nf4tga28SoNa6kGachUYL2cMXgFvHY9pZazYcGc",
  "key32": "KLQCFf11umFBkjWyKHP1NqFzUs8CW8UG3qDMrYfdE5Tg2Gx5nHRmAMj3cq6KEE9eD37mYvpZHBhMXS6GJJkPu4C",
  "key33": "2mQyvbVhURyNv5aGJaD5fvYMQD9MTcoipJuLuGn1svekJyrkp3C3ohPeGusB6oZ1j8VKsQqdESEgFdV9QdxvEX6L",
  "key34": "4dYjjzTzyR9zPkukVz4HDKmHiT9DSyRGoWsvzmNweuJesZt84WFNU56weVYm9A1Urh5o1Gsp3GvFQa3b2vca1KSc",
  "key35": "3wbNNYiQNNVGkPgNATVjpg29efavWBRK8RGHFHcaDLgftLAFX5RCqd2xqLEDEs4x3bbhYEWpoTpWwMEr5rfsPDba",
  "key36": "3L5qPCtrxMxyL8tCT9md6Drtgz2sBvz61knb6oQDHM5wGVtcvJhY8wa8yD693XF2BfdMJuDn9oH22g1LrCYS5gVx",
  "key37": "4Se3xvhifLALJpJx3zJ3saU7R3Pfnncy7bPyW7yNLHDCTnCkYN9AMSQphPUEm6Eog97kSLNa78oW3D5YVTvZu96y",
  "key38": "32duZtCJLPe1RDfLKEKqjqsSAkhrbvByEs9M2XVK64QzAn8vhKx2uSmyZJVLuUFadVmmYnh6yaDEoEM31nh6EUbJ",
  "key39": "2UY44taG4h56E6DeyvmLYSwjhNu6gHisC2SUDFx9EiXwnb14XJjKzkwR6vNqSCsXu6K18tFhnUCHPNwpeXwSSoVo",
  "key40": "Vc3JwJVdXmuj5VWUKmbTJ7Zq2trcd13Jenb23puP469gXcJ9jvotuFTQAYcGFJ3yCkaYY6gvBsvjK9pxpmv24VU",
  "key41": "3ccTzBpHuhY3hCVpVMePwpjHJBW3CpyDdEfwKxPZGBV5WPx8jAT6fHr5DiojG27bqcGmznJdxWzCGUEAqstnnova",
  "key42": "357XrdepzCfnBe9pcpDhsEbfdxQvguaBmBZLT2nC45LnEwDoUUvNytgPv2rcMRawhSumZMTJym3ugYvHJH4UsLzW",
  "key43": "3wJyGbXhxFj6adp3JFYbK33J8DSfxUcsA1HMd3hX5Nda9EU63tcRjcrdioxCsgGcS7fEieY9bKVo6qE4b1B3RFn4",
  "key44": "3NLBN7hAGHwpRaG9xokYkjhJG4BTJuxsRonVRRCwHjSpJZibYhpUBsmTAniwCwqMgn8qX9jLmmyoJXcvW2uevbsw",
  "key45": "fmYaDC1eM8AVCrRffJTaHm7dqKTTJ1AsYqsEQAw3HcxBbyBeTk1xXroJ7sVACY7onBbqkCSVPmSL42v3PZF1gtW",
  "key46": "32vFTX4M7fFPsd5X35W2wUbHFrSSNsdPUJecDWDgdprDiJhS9VKN7KwHoLGKVJU3C7B8z8J8w7a8zYP81bMvx6ix",
  "key47": "5SgZ1GACKfC1Gzb8tm4PnGLieLymaNKUcF6ZSHUS5io4y1idxtsjZJeim6BaRG6UrBtY3aX1B2J15ecq96Q9Ukub"
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
