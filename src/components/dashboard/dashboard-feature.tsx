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
    "3XCt39RPvVkRtvtAf31ReZc49sexRiPTiWbsspyhyYS3PesK3Hy6JKT9Xz5RAYRCZCNysGNFW4UxT9b4QftJp6c9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GzYaL5EdwdywupFdtHEGShkoo8z6WiP1giPsimPL8MAsvjq6MGRi4oV9KkZTgxkdyTkBpevY9V68e9sddwEJC63",
  "key1": "2KkaND2jNZryWHh3DAD6ZVhqssstr8YHuK51h1PAtHUMrejkBdoMAGUWiRVpZ63wVvhsfoMHTbWpHSmg13ow74ZN",
  "key2": "oJ8wZ6rUsV26z7AbRU8Rp6VBAmwuWveK1qUeGsAas7S9aZuUzycwFMD9J9N22ucdmpggSUZdtXLcRg2PNjnuvBi",
  "key3": "48SsbCFys7xKGGnK8GRCcgWrcp8MwN2nomRZ9XwfHhKWcjnp8F18ig1dG8k4j8M5XcFS3GT96FPcg1DTBdvsRvmK",
  "key4": "2VjSzqnG9YWc5eU2PvKBHCq7tkN21PMSsyzknpGm6p61eKnWJMfGFR8BoTGoadJ9BEhDxpVJFRHg6JE5xeeDTnRp",
  "key5": "2TWP3APZq9w8FZNuxRDhEAPZUGmfgtNbUuc7UCmgB3Te7DNtyUyGHTXxqzWufPvWSYqqsHtR8J3wqpeyMaUCvHB7",
  "key6": "5jxKWU1EevoVBRtt2u3ifnTG188BZ4cH4CtJqRaBVar78o4FiEsvpBJJUrQFxT1Z6jvH7av3iSJKfXpX726bpBbH",
  "key7": "5d6CepoXwuBLpxkPWGuvzmgcTRzGrD4oj1jLe2eLtZkJ8hZqYxjZn6L79rt7bCSr8AWoe4tszxMLXDvKrRGvzPPd",
  "key8": "2tMEcQU2wKDWCSzs9pyhW9py8HhBgSVLnArxQu2gaSmZ9rEzRKyR6d5H7ZLkcCqsC8pe3Zb83MHps7dmA5kNU8FH",
  "key9": "5TcJDWgVpMfj9uD4ZyS8SzA1pzN4BcKSW4vcwbcrVKL9sE5ugDraVJDyH5wNsXx5xF16pdfEwQWPx6twiMASoX6w",
  "key10": "bSi46PCKLvRw5Rc3zJkrWAbTyysRsfZcFJTmBiZ32fBcM5n3RxRdtwRUxCeXU6PjZi8rj1jg5JYqqkh1P9TGka7",
  "key11": "5MEAKbsWqbg2en6pFHxioXxK1BGmM8gjMXugAMFRB3YvwBDAMoscEZHTajWgntry1bNQxu2pAYg6SvQC8r9jQBKT",
  "key12": "5RCzDZvdintDxLZmcgfK5JTVBPuM7jbLnkGPiDuzXNxULFadmATrcwJBmKbY5y82HxsbDWja9NXWAyPGWpzmznpJ",
  "key13": "4E57zk3DjrPf2r6gGYt3kXLzXiPZxW9aKnjnhrQJQd3yYCm4cSdEwBKo43LPieez4Bb3CxL176QcNC6nQuX8k95H",
  "key14": "3gD2bqtLYgXggw4S1BNyEQEmgkJnxnQcjdNmtyXnJhwWrU8okKCzZQh9b31vNMszqLkD7x6LXkxvRE1RXE3FNzHC",
  "key15": "3hkdUAKztuZgZqqS8Nk2rtiwMvCUAov1iVJTth63ReP93Dv1jTfxA4naZWHBzAb1s9X7ptvdDeu8TAgTb6Qhfvqu",
  "key16": "66nKokRMZEKGj5LJmqo6JUnyyNVR7ddCFvsCwZxGHDPScS7gii3nfvCgXmKwf5X4K1wKvh9c4ffShXBYZcBNR9v7",
  "key17": "ugQD8cFkvvZPzwnovEsR4YcyeZQ4CYVsVSvYghBe7u48YoKJPynZrKn1ELFcoKXvQuipJnmGrBMMKRHASC1B9aX",
  "key18": "3bXBXdornBE8BAL4yVgQjLh5ezvXx4mMTuAzUfVAz5za8bhStnGyLzKKqMFwyWEQLnvCQ3L34MynH6ussXxibeF2",
  "key19": "3aRMHJnxqBrJarB6KEcBoBbtaFewVanbaEBh32kFATC3xHvasGy5bFvU8YcGAmPnFgsEWuKmk9cbPT6vtyr2LTmb",
  "key20": "3Qih9jJkzZDfKWja7EQAge3RU1VpUdqToP6bvLcB7w1y7hocngkTD5KAu31qu4PkwfEx6sYUakUQtUXr5Zsc2i3j",
  "key21": "39pASAxo4pTM59MZQxhvAhfGNuq4F5ThSQrW1rjsUXEfstMjM6iL4oPPvQCTSBWetYtHRotMGsGJxxHT8cWWUJEu",
  "key22": "Q8VCbWsFKmGacy6Y9rq2fiqeEohZvpBVgBQBuzEQaAMat2ujoKZhiwTiefnmBzsaE35U3PWBhxDw62VXt8jN7eN",
  "key23": "43RgjbjZzZejgSKMF4pDrixaqbgwziVv1t1E3zCZ3BMEr9bz5iuNEgPFDpCWBQYPd6ct9CovSDp6bB2yYadchKAL",
  "key24": "58qDiHqmtq2r2B4N3L8uQNh8Pz1MmX5wLvkgA87XL9xzoz3v9Qrb3FuKYifLzosrTAoajDXoJy7agWZVCX77z3Vz",
  "key25": "3mCUqmojtm5nXB9RRwmEP746wUc62kiZdwNi6YhqP8xFtugA2nBQ9U5BVSJfAo2eMXGBycdSXjQCuoA4RV77Lkk6",
  "key26": "2mTKB3DLABuckM4TjTP2aWszDqCxediEMrhJHpWku4nHwsTnjTjx4FYBs5RoxauoYmsuhc1X5hbdTk4qswMb16V1",
  "key27": "3k3XFYiU59Q6MHjzLJnXrcVENtoJZNkuiQHxNbuK9GVuzHfMq7WCCgGdsQb4M9aeUFHaT8SWFpJUZKxzfTk7uC5g",
  "key28": "khkyBBDct9r916K7VM7ejsrcSPk18Wm2dKqq1FEkkbJNo6X1AdxxQHauuus6uc1BwBnffdmcnFbmNS6NEePfgDL",
  "key29": "K6wUwDkygYAJzKggVgn2nSixMjbdhvdZwgA3icx4XbANE7SfTBY6dwrwUnrXgQvJamfNNJotwTNMzk3Uas4mmpe",
  "key30": "3Yd1urANCYPz3pZXdeghJw2Rg32gTfiWtyMa25AhJoNPZBeH2T1tN3jPd1ZLQv6zaEHpbHq6owmXZqGUDQExT79p",
  "key31": "vzZxRUurtBG4Cv1TU2bVuzfAAmiE3datobZ5dv3CRMTPi1YwZvWWGvDFNQtzVELqZ3aaZP3LgCaRdjwpfpSknja",
  "key32": "2bLQn9Ezqg7AzVWVA7t6ryCrNGHfeonHMpFbH1FgRLTBSCxkEaPEux5Vq4orCwWixrHXMtXxLGvjaRao9m5ctpAW",
  "key33": "RmJBfuW6jNUHLQbMmfoNx2c8vrDKWgWhsu7U9Yr2Zk94SrMx569fXwpkp5Hp5TemW6XjAic2qwMUFjs6pZv4tS3",
  "key34": "2CKpvQ7pe2qgDKaf7sQctHXYNoe8xt7iH7ahzeM3jWiNUeP7QomH1saXVgqb1UrU3evVfUw36jTf4nhk1JBE1Uf8",
  "key35": "5v76CSk3AzvNNmTAuzvVwiokUH94DNSNmVCYymukXW1EoWBBv64fgUYJGDkXQ8SGdHrFmX5PvCRUjy5PopHxpvLq",
  "key36": "2UkbcT9UhatUgwyxrt8muTevDj5kYm4pY1nxXa1PGnGSuGRyJK4Fr3VFSJQrHZwh2e7bo39cFrpqy2YRMFyAw38j",
  "key37": "cqcTz8AZRH5USr3PRcKsK61bHBbH56vvFr9PJKHGLvo1WpeguYc7SS7X3M2GycutaqWzBDsj9hHUTBdEnnGQLTB",
  "key38": "3UPjrwMDwHfVqM11GwEmrBZtnRbQsPDHpH7dwdKzHXdBv8Xn6aBcwGHpsS8zNSBHv1FCTHe7XfWvAGoDsVP9g4u6",
  "key39": "513tvzgQv8Vp1Ev3wkshFe2bK77E5EkjxuzuLNdBAMFaH4n4ZQFQYYGD16t4BKfVGaXni1c85jWFoBbWDEup7bUt",
  "key40": "3Ziw8osoY34i62ZZehPfnAcczsHmZRPaoDqLNM5SBFVyWjPBY3Yi3E9s9XJGzsSeiGoR6CBZCTuJE7m3WXXZYkWG",
  "key41": "4pJJvKcsUUm6qy7bLeSWodNqHGQfG2KWPjJYP2vZ7YfvKVAh4XBwPpshiuQqNWmPvuJmXADjzYM9cwBUDBh5WCfD",
  "key42": "i7MSUCmtiAZYVyyCFBuxbYPAeZYTY94hCicQ4GVZyiSRKCpm8TVFAQu5m5fjWs7jfSq56c7ruMJcKqhSK7AgjhD",
  "key43": "QvvZCMxRQDKhpi39roFqGyrNQ1JcN8pcsoHySnMjmMu8DspLTX7wqWkj8YejdiRbBjAtLWQqBQzmCdUUaafvNZi",
  "key44": "3LE7qyn1xBcijxNCLYB7CmiPDxsd4kkR8KzPLRxXcoY3hdDE33XLgtfRtALxHUzp6tQ4PRyXgtDyKAz5vZcmbfmn",
  "key45": "2qpLdiqcfpop3RqU9cYHuTDp8gR724Nq5kQEcA4hJoXiLRYjPor4JQzkcbAj6Ppd2nA6CrXkQGeb3iWzKgvw9RoH"
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
