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
    "2UA3wQkproDQH6WjSf4kJnDaGxeVyNbum3c2FKQqiussbkQiYa7Q3Zw64ZYnweUDZJb4DqqdEJzLX11iwimTLLJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55VZjrAbRRYuL6eQEsdUjoSTTDqsCcWZm7xBq8x7ud4vUPYBFueFEBoABsDE148fBiRTGQpxzwfoYYWLtoY8V8Sf",
  "key1": "4zfXaLwRT348GBbnDDRgaCLXUYbrjzQRj9m66PZLfnRpx8D2ahiCFYidApqcoQpcjUMg7q6bN8RpsfpJ4odav921",
  "key2": "2RXZ96WBpjnJjyXifPFwxxrd62JFzd2M79yC25jXdP4CGX6CrjW13aaFqcURPmSr9HYo8xPwtdpZoMYJPB5RhxXU",
  "key3": "43HxeApp872unPCb1mFy9x6p1bt3Uq74G5gZcdvnKoZDwq7ML2v9wxADW5fPTmitXZMLNkRiFu4LqxNymEnY5P6D",
  "key4": "2tWLHeQwef3MmtyrH6F4mkZ5cuRGXTyDYfby2xBztnwuahb8iMvzJseFSSXQhws2h24CgdvNFRumWbzQ1MQ59zXL",
  "key5": "3RdfQWLEdz6mC8HzPkhfVcfDHaPEM5KTVh7rxMt1nHURi9hq8mCNw8QtyCDfQJAyazRuRvvf3gRcteoQyycjvvkS",
  "key6": "TErbUMKT92WYmsNRrDoS4NH65UdR9bT6sefXZsZdbrgKicWELTeaUTrevz8ByLii2GJoufxxMVrd7NaL9sMrThq",
  "key7": "4oc7EnPDoLdqHyTUe6ChovhieYCJ7VKY4YVa9HhXbFe9U9eKKAgAbJ4LYj4YepYYtNVqsSzqXjLJrQNeBaEFcmu2",
  "key8": "fbF8B4kkgUw34gBZ7HwjkPybokYmW21dXRxv9sY9tZqsyxhxy6PbnT457NF5iY9FdU8j1vPg8ktr7SdH2Lkgf3T",
  "key9": "Ao1zp9G9R5C1pmar3SAiHjA6ZuAec759m2ui2RabxsWxKL2DsLJAhwPrdUDr8bS9A7eaaf8Fub16HZoBt2V9hWt",
  "key10": "5whafXjiHU5kwW7NWy6STUY2UU8ZKCXsiZtrQMxeED49pSWQ8YJkpCPyxKHhRQFVF8JY3h6VBvfQt4rMHcttHb8M",
  "key11": "rjWWAHBsuQDrPKTwULbiYv6PYEKHvo5KQTMKVqNoDmnNKGMXi7X8D3dJWcnAJ2oGr2MuVHA27eZ7k75c7e2wYkq",
  "key12": "T96YQBy5hoBx3RCR6yyrs7rmEHcCjR1R1L6saGPMUwTZYSg49iPHYbfANEdX2mrX67MDWmV2hUmNhSyyCUcr8zE",
  "key13": "6zi3eRUEd9jqR5ESkJkQBP6mv3hw9XWUSw32Rutdnj1aoFNvabBrekCAWDuitmqivgsKaMi3TXRBb5zRXRDRrdk",
  "key14": "4bnvjWRJ6LXUJYWsKzhMkF13zYaTRKnaFzWhQfic6EDsrvvDbwVJqke5nA1H7CMq5PBBUDvAeqq49AGAiY7ZrxHm",
  "key15": "3JiZvYvx9Gnn7BVh2yxXK15D9BHdapsyxG2Zb8ykUeJtPLqGRM1grUbLvvsLwinmkhxHiiewdwKUrgVRjMiunD7H",
  "key16": "3o6pCqnjgebrCed6J9QQKqbnWCtQwxYgzDQD4434a4w9DRPAdTPSCxDNXwzBb2n4vgph2hDvsLzhfPLbUZtBipyK",
  "key17": "58j24FJFmr1GeMao7rCibTNCnHgfEvBhmuN9X2HrNzrUnSH9ec1y9hvDtwKihk4vJWPbfiKmwxBmdKDcZhAazpuo",
  "key18": "28YRokCX88oeGgFeWWnQEEiQEhiLZz23qxctKSrcebdSXG1WLGJF6FCssrzsqQCJTWfmNwsFus21Z3fFq4tk7aN2",
  "key19": "ZwBN6JKmpDSaT36vXBHYhrmRrrCf7PUUxtMuvfjXgFS4Psi4Wrnc3b6MtLVhRhFL1tZQCxGhbeC4pW8qC5jz4Lu",
  "key20": "3jE4yeeAEgyihuF1UHqii7fLH9CSuUVDf6KGWgQPSqkrnSqsUsk14ehu68zH3GVCRoSyZHb9UEyuQ2qoNeyuqHar",
  "key21": "51W5odtKetpRzjT8cJiYsre2kxgLMsNEzpgKqAEm77ca5aaKtGXnxkyiRockynT4caDy7VytnVZ9Ao7Q9yZJQVPV",
  "key22": "41Xc4FyJ86QjfPVTNmccTTFF1RHaBU1Wg9AUshfPBHQqieSGdqbgQcM4o1qJTF48n3ivf87qgAGwxGFe3U9EdeJM",
  "key23": "2mW8MweBUFSB4ZVPoMKJHXACKLpgbnRC9tdafpVVUZha8aMzaVY6eSwWn72RSzvfa6K8gK8RHs974aAFyWfQBVtb",
  "key24": "92jcgeNKm7NEnZTEzUFJyabNncdTtt4qaJtaRnJs2XhNJ2ct1wsx7NbcLxV6UCpA5gQJGxoiUh8NBz5NDABtYko",
  "key25": "2EAidzGpBES5traCsmHz2KHQFCV2BEp63hHA5dGUBsj7HxUxBstW9zbRjfQ8NkCwD3hLxSg3PNbk2Q6ZsS1AnSet",
  "key26": "2Em7hXKuJ15HwXiCAooQTnf7k7kFmVcHhyxHBgq3Q37kRZVQrPd85KbZmHP3eaqu3mogKX1FiwoPFVSqLK2qGaqR",
  "key27": "4XRzKyNnhwLEwD2LTchcFibL6onqXwEM9ubCnVpQEsbGRiQdLMpE6U4C81xgo5u5TLat8w8ofmZDkqzGGpCPxRWn",
  "key28": "3JR3HtGM35pm44PRtNKhXQqu8vLrypMUJMpJqNZ2zteRAdnsRgWMfbu1yTvUkHeRdppR2XxfrDZLHFTrJeVwryDH",
  "key29": "3ZLuaWQQH3SsMAnv7CEK6bMETdoXqPzxZUXU1A75Lam3SGaSErEYekJhjAweDHxmoGnkxS3nKZq73maLp18Co5K7",
  "key30": "4hfDmEXHn2Qgr1nyanGsVYpq4ojgHevy9MDHtN2iTDHyp112NUSQp4RYSAuXBzaLYFMLDs3UTchUasDy3dtHcS8R",
  "key31": "2pCWE97Adxq1uK89k5Fy4GtQ5eDxq1i6jFoZtqwWqybnEM5HHPCnuKTuhprgUX2cWyKSF36kAPqdkCAqH84bxyXc",
  "key32": "3LViXdiQArHA9yCVL1AXYKibEPiwZ8kvbMmqtpcX9Ldr6VxeGgyXMwgAF9e6pd4QdRjySeHuMZWU7qe2x7UusPCo",
  "key33": "29L8hGMpHjVaWumpaVJ32Pff8y8cUVSAqaoscgge3UVNkTJcBm8gTK7yJo9YrnbYZKjec1XQgKi3AGAfEBAiqvPf",
  "key34": "2EaXFVs9pke4UP9WwncakzQPea21WrDwNbXuJQw3PrtD1ivkjztMeDzKpgs1b3JQs1KnNcVa3MfQBtaqYrRhh8g6",
  "key35": "5HRvswzZRMjUqLBuLDK3MEr2fVBgiMuV7SCfrg3dFPUuahyMToJAkVp8rf6ENpWGyhGhFGbxxp1RFcNm3wz1PZ3M",
  "key36": "3KMQZ8Wi2SZAWXjQxp3U43cjvhvP6bsdacDMh7FpW6DkZAUFyn6JhmFY8fXZkFBNbtxUL3tqqh72PDJHMTqmKSjn",
  "key37": "2RBRbk8cbiahix4XapvPFgvs5Ds5jJzgjxU6PjXFjdFpVjjWab17mzNAdyiS3cxi5nfxRcU5Xo1ZPpJoiAD5qmYS",
  "key38": "3zV3q6PxLHjythn7tz5DCVKpt1VVzn98NQktsBW71jYbwhHMJVr84TqjFap94wXdSbo5J4cMyXhL4EFja3DJwxkC"
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
