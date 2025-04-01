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
    "2oc6gTaQpsYAKnvKjaf1sGyN2JM5e42RmoQyu8MWNRJcT7ryEhuEGM9cmBHGGDfEPiTP1axUPCSD2PRL8qsPNXQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574BiRiGN4BLnZfzRDpimW82YhC8FrYR6Q4QZfiV3GnN56FfcHSxZjZs6mMBxbVWf5skqgTAdayD1ncdD1Td8PLg",
  "key1": "4ufXGh6N3acJ4xeVRAp3vh65LG4U35mACFv2Z1tkqqCMRQU2LRp8aTi5cfxZbfp8GwCdoRPVeTb7e6A45APumzom",
  "key2": "2SSsyKw5qvgCUj3h6qCeqFQkz5fWenLAnTHrvnrU8wYw32nboP65ApkNwxnFZiQcJ1FgRk5vxpxFWMrb34mL5WPP",
  "key3": "fePk6iyqKjCPUDEgRtuV4QPh1bbtDPUUbvTm8TYrkD81qEKwsMBPhRKaVtCZcSZNCqgybFf72aHGHjp2nqZjmnk",
  "key4": "2ooSv1yxcZ26ZcCQoffGrs3LV39kUbKYLWJBcFTNRsnrqoaMpTwhpuTN8AtKcFEDwgkRsyyreDiKsijN3zTaAatJ",
  "key5": "WZCoUBa3Bfhpjitxy4z8YnW1DurXV9ycwy9uUFGYEX1dQfq6dWTdLer1R9eWNo71QtHGqjXTtYFSjCd9JiQ7PSQ",
  "key6": "66rhY2FxFh2bxJnH5uumcQuzcAhW5CEF5Yn15TwHHmh5CCVoynfuutWewgFk7uqonx4uEH89A36e1PgFZT6JCpha",
  "key7": "4PFqSoehKciX3MYRxm4Ug2TjboKnh26VxXzVbR7BfDbuK65UZHoGXNYS6kWUcqsQaNbY5tqtamaa9cNULDKWdFSK",
  "key8": "2CykftKoUxkombEKWvUGjEigCYKABxYHg6wSSJxiXxoyenWGYFFz4oShdE3kreAqaYRQBmKoyu2573dU1md5mfrZ",
  "key9": "3QWX7QFSq7Sng8cSbbvNp2ZaoR2V2XsbdumrvsGBsz333WBEnUK8wkXGgCKCNcQyicJXowF8mKFWQ3WPiYdmNTFN",
  "key10": "2KoDjBtthnrwyxb7Q6M26sRkqbxgVejt5BDzs5NiMnj5YTT5rWp3RHZpu1P5hnKX6FsVpRzjM3Du2aqotTLCLDQd",
  "key11": "5ukWqAZ2EWZBnd1pYGFcuuPwgQRqwd1kJYhEw4xNxubp46iCU7aUminKy4oF4BzLAbEbeFm8HFjqYft2KvCkrfkR",
  "key12": "8dpHdUE7NQEikZkCySub35aorXMqaW68ncF8i9Ph4BXsyc86BRV4Gu6dW8epsZ61LMe47qLV9YqNKQUDEMvgKnb",
  "key13": "2qprCVnSyrMG4yp95NcPg8Y3EfHW2FBdKoMfG34SLJ5ddRF4VFWAVpWoz6yJHRs712pFdydwbpDMxgYJ25FZa9hD",
  "key14": "5npcUmLPk5C7W3c5S95vm3uvxNkPpfi31qJkVfTEXFeS1e1XUVX2uXzBjVodJW3MBVWvt1aCNafTP95vVkDYCaq6",
  "key15": "j6CoeYwqYZLdymrUgJWrdPTR6LgD2bZqYVwKshMTZ4xTytLruSksay3vdBjutQ6sR8jsJPe3a57U5uGo4Gz61gE",
  "key16": "XRdeGKKjcfxJ8bDxkJhKYHGLsCPRzYJaAioeLmZXtMJKeQQnQfMyo1dbk3mf68Huw1NLx33z5ugtBHy8nUvg4KP",
  "key17": "35aUopVBGw6VcCKxnoVoathG5vURh57Lz4gPLEi8TDgEehb5pY4znzQDaV3zyuomdxdLu6ZuGiqPcxQyepSciF7Z",
  "key18": "4FWPVY8RV7dTLnB9mpLmpaTCnuxhmT36dqWxLgwCMFTVrmuTFPHb6pjuY3HNrn7W1nYZWSGRarowytgV798dMpcd",
  "key19": "2TxZoa6yCRfToB6ri6JN2xLkVq1Y2XMp5Bh5zPLGybQ5yxD2mGoF44U9ZmEAawhLTtm7Cz1eSyYRFyYnwKdLwg2X",
  "key20": "37bfMXXRFRV4yQsau8XyeBm5rw9X8yESbXyEjxjTH64xgTfCp24VkihDCtJxBm1ANbmETc7V8rqEgN6nmjvPexBP",
  "key21": "5J1L1kqtAS8fqd1bwZNCLS5cEGhFpv7EeGjPBqW6hkaABZfipKaKahr2BQF2yLEu8M62zkgLFcgQz75R46CPbj6W",
  "key22": "5H5UVJyVDUrykQiFsjgRzcuJ7wLtaLfL5Dh2gK5bAcJxLwYWu9Nd929hhZCZdkCyEnn7rFYb2fFJMUp7HrCBhnbP",
  "key23": "65o9jfor6cQuJUaCL26vEFg1m2oxJcCYxxUA6YjTSeRnxP2p96MhbUy1mWwqdzGsYm9AjkwmREFABvcx38BpgqJ",
  "key24": "3QfdTNkvRGG6WXjmmukPLpQzVfdGZWGs919FzuAU4SoPq1YMMD5RwnxCVU6qjXFaiMZfeC9qquca4BZeDPTmiVr4",
  "key25": "a6Q4kJjce1XptpVjPiCWAJVQTmCqiyF5jjiGZanGy7TJHjCawk21v8fTFSWoGdBptJDA6e1cVjt7Qe2FzxdLz7C",
  "key26": "32b1GncverfJUvkhX6Jyuswyc9m1LNghEMJkuKTSgnrVAFrfqwfioUj2VvLt21njKmk19QsmcXhZkRBTwwxhTCH",
  "key27": "rVKGbV4kg4whWNmgdhAoWzgKpSKomoGPu1rVLWLJ3sQfDSd3X1WLRi4BJJDWYFurSYtYhKa2uL6PyPN8swFAHjV",
  "key28": "4nsPzRByjRPsXFuERAU2PnejfDXzMA2rvquviucgqhtfcSrEgEjwjmupdgxzGz9ufjvdCEu5VGgh6EJuz6akaWkL",
  "key29": "5vYyHWWmwpqh76d9hucRgXE8rpphca1zEMXiuJmmMKhv1u433hbn82unyCzJpXqrvBN1SeqGH922kM2XBXntxs5v",
  "key30": "52wP1M9CKaDayvPcCfV5YbycnDhiR6WagbSudNG5XGa2NcvrygjaXcTTw7DvsrHLM6iVXQZnNwy8kTGFdzFfKyTJ",
  "key31": "rCXqeKaWiZwXWZvVqAqsVtQwH13tR1V9cq21fxBzAZ4KGgZ4guANymvkWFYyWHWnRxexub3BKVvhtT9CCWB2rUC",
  "key32": "3cycvnPs6KLMvdsByWVNAu2C2kQfMvEFn2NChy7XV6oJL5monQESNayjLqXhYqYHb5AVspEuTyCu9PkcB3c1duE2",
  "key33": "2rkwxktVZa3HSUG99eWW5dBJ9yrABr5u5tiVPZzLuxPHqNqmfeuNZCbJSntWkUC77qm6FiLA7MbvndsL454MEVkE",
  "key34": "2ogzjDuFZzE3chLjnTJxJ83VTTSurdYBfPB2L8UqR6JXECCAy125nZRdLPNyVTitTqEERENCYW8WFb2R45PYUux2",
  "key35": "4fyb5VpRw9DSJASpcRG4bseisa2wsLGcLPUhbwLBSJAyPd3Zgxn3B4G8o77gHgY8tmWfckB4NymA9kBLJ6vWrb7G",
  "key36": "3pEg4iXvRgPNDhEWUyWx3PKupDyXzPBQpPdaiAQ8w4jipdnZeGZRuz68WuCH9GpcF7F24Qa8W9AxXNdFsbgxRZNw",
  "key37": "VjeN18LAqLKmbFhjGY9hS5YSJ7UJsEQyT3aJZWjX257nRUQ9Vv5GWJHPNN4UFm6gsXQyBkvWfkcbH1AjnWk5q5P",
  "key38": "2osyGiqcqeT4TPhPfB8wnorbYTydkT99ZfBjNWhCLyxooLiYUMHytf8KuSVqECqkVesaXyzXbKG6qKBh496a96UF",
  "key39": "42HZ1NaL3zDsFS2oU7AgefSfYKkoDjGfFsDC88yJbQKBGGTFGdJYRVEtqZPygD4cUPhuLWqBXa4Q12zYqDiYJwQK",
  "key40": "66S36RLBKbRknuL1SWuMEFTfWbrzmSqn2us18m17x27PRwULbMsiAxqMLRa1NnjSiFDw4UFtFcaMthum7piDLqeB"
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
