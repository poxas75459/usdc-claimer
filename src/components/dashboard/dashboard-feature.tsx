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
    "2mvuQFG4rUV9NMaUzB5zTWK1tbBsYXSZ9Kyxp6h67Y4fvDYo9i8SZY5qaEzzWNjyLFuvXhT8usaL2CoRKq9yNp8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfmWADqUL1iE8ad3is9JEkHnvybQxtkZFQfFMDNw9PNUgd2urzoqJvx2UuV81CDmKYFwSR3usnLx3re4vnDjmyb",
  "key1": "4WgCbeddYZNUtg2tYud6WuzMjbWLDsMkRV5SxwYgU5hmgPmZDyBd2oDThQZAr3VT8C3Zp6BrEHUQgE9R9isUUn7x",
  "key2": "5SJGfg1iWcdWet4f1JmWr9sovT1D8FXehdf8fiWBhGsHATiKXJj9Za5yxXQ97vt3TGAoZfjMvH4Hs2EgDq899oTU",
  "key3": "2mCFRjvZJGvR6zU9MiWRLNpLEroevituSyhruTFVCcosK7xzmvyd7kyfQgAQj5ih35WhowcH4c8U3ayX9rft9ii7",
  "key4": "3so92mLf28fQMvCbZmzi8a1u4VvMDFBCaY7pE2r11GVB5wyyy62FGMttwEKQggiMhZsS7vuyAG6tkNQWPZR8LU5p",
  "key5": "6553WFyub7Q5pwcQFJv6BpD5VTUr4epVHGEH4YLyjUhPjjFiS9osNYTc7ryd28ENhxRTrLXHHDuu5DUcD2tJugu6",
  "key6": "59xy23GoMMifMWT2SBL2MkQCu5S7HtavJFhuhoGi9bB2JVCSkrN1QtzZLQ73Ca21jjpkTPjbBkWv6EC5s1UCNEgP",
  "key7": "2xrUjXMwancpvetrhXxpAfst6bp7Jv7HUTLbDNEHgZXmn741TKgd7yd43RydQXqk3UiFFTZZAUaNFVKZ62uFY3Fz",
  "key8": "2YiPXGTptvYwjdQPyijbhmw5V47QQSwbEjhcsedphCNGnffEdrWzpy2jzE5GU8zX78G8s5UusYJYYfGu2o4xvCfG",
  "key9": "2HzkeguwRPdwxHkQw3p1foi8Sxm2Wz8xDDCy56Zof6wxKhwb1af9VUSM76rJtkmo4apwVrYD4XgL3iDoBjpAkTxj",
  "key10": "4gFScbLD8PH3U2G72FDj8ieuRXRa5QAse1oycCxSSuwUuT6bCQCRrZGp4uEhPPdPgeJ4V4mueUZe7UoGXUxwKKgH",
  "key11": "5zT7xMzhZe5UXWDMyMRkMWeTun7hvmGVajXCoBBQJ8WFyckJ9vHwKWeZHoyzRQYz4W5J6wtHUp3KmmLCu2GCxs89",
  "key12": "4ssLttU2WRDS2q386RHVKxeyj15Y8Ug3YkTvBTuLrkyY1PqHz1vHmFmfosmPjMUsi9FHKhWTPn9m4kAYD1DWtoQe",
  "key13": "5CbEv8sPcqv4W81ukobU5MGZye8FCURoog14jtrKKxkwC2o4A2z9JjFWvvfqkV9kyCXRYMxB3RALZft5tWFife6N",
  "key14": "2EBxH4wv5DrjaN6gx5Qe2CJ1gaQvXiKSuDvuYrYo4bA7atp7HonTKrwovUSUHG4QuUtpmB7KeWv6y5rZBLh5VmH7",
  "key15": "5K3YyoAJfv81gUWH9GedqiiNMgvvqDJaX8W2adsrpSK6rYFRprNf3AZbw75Zu2C4bDa5XyrLQHpgwC9a4tAtJ4yx",
  "key16": "3caumz1vSi74y55QZCFwFoCkQxPaUkXtfz7zHTJ4PqY6K8NHvfk7ubqDK6udDg26xFfEHVo4zPFPdDcVkn4DpHJP",
  "key17": "uaby4mtdCrPzinJim1LiiQU5P62jaR5HLVnySjQKwxBkWRAfDYBSGtANftMGAXW4r3kSMRzevB5cZtZky9UUXGZ",
  "key18": "4p9fgEAs1Heic4moXec1Y5RNiq2mhKB91fVFXbn47NPyZgg3PRKYPfQcBgVgy1y3LRPPV4zWNr7YSKEx3AnKA2BT",
  "key19": "2c9Yvw8hmY2gkQBx8nw1n3cPCxJwTQYFZAhNaEyYxoPjdfMmWWyNcWTvbRyLmKGhj5FGCHub9oHWX5kp1ZtSXE5F",
  "key20": "5vk2GdoNiqsbrPpUtvwFm6NFtrUcDi6PuTzZ6ps4crrTYyrK858kQQVj9Yn4MGRoChuEEc4KTLF9t24mqpEXKTA8",
  "key21": "5B2iPAhWSgY1mLE8TKkahZi8S9ctBhwCQtVgQceMLcWCFgyCC2H3uTbBkMPLRmgExg1xEbHWUSaRcjU4zXrSBFra",
  "key22": "6pyzutJoUcjKr3MNYpVwyXAvtihuRtvm4DM9WSgdpECMdk39iRRTkceVELws83yPvHdT91NpBqtfxQsfkFg9SC3",
  "key23": "2pYZNGtT64kNTSbnn7akNMzZo3jBR951Ubb6zUVUd4967oPcbV6z2tD5uuDbjxhtcZfJjzNPEE6ZXVwXXubX8C4L",
  "key24": "w61BAHAKCZrnGb1ibm55UWzCUbfFfoeLsDme923BwGGNxpYqCt8VmokT9jAAtRGEeCdtX5C8drqgt2wHmFGFjSQ",
  "key25": "4vz2KEUdjTeHphxNNTNiwhHW2bQQrfmbw27AMNqCQ4A4RnwJgsxYtHi4HoCREnt5v3bsRGvT1jnW5KaMF5zTB7eD",
  "key26": "FJXq7Soak4bBPzaPCQCcm9AyNz4ayVjRYq3sp63maGaDm19jkTznD8WpWdMAHLC4Ndpky3xiVhyN5yynbLPGABu",
  "key27": "4HobW6uWRHQ4ANbaAVFkyDGgXcs9B5kqmYG6vupGTqQnsUdkTuJtGcGj5ieTPCb6KWEpKJE89wF7UBGiF6N6cXwN",
  "key28": "4eQk4XqGA9jLcVV4GQQm5dxi5MEHMZ1xcM6RFiPVhp5bCufuLDwdwY8aB8J4deHZfKP9B9avx5WR7hXF2Ehxa9wR",
  "key29": "vLuQLxwk98vjJo4jtazAm6RV2whNpV2cLxp11AaUoPY9UFiCQkoXzKtDgZTBFA6LURRpr5SYZX2sez6b3PBLZ49"
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
