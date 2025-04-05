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
    "64qTtZEgPzj66kkYHYVxFyjsYM1AWSYNaS3SSAw2QJtzFJzoi5ESeqRjJbg7cD96ncYhn9ENCfosvK436iKt71BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rayd6z7smZ4gULa2M5LQf1pQtjWZTnJ85Mkeg9DWxGckE4f3zbbaQLnHzu49WQKmZqsW5Rhgokyo3rCVSKKwz8M",
  "key1": "3LAzAUEp595qNmHSDZP45dfRcFFscz2q1SKXwno5zHqTasRq8tD69v3mm3ew3qZQRACbUZpZVCBYKryzVo2qgazp",
  "key2": "5XGhUvBjmPkxHhvn7mDkNFectrTvRYCm4RnmQ78GeVBvMRhVNwD9NpyYG4dG6acFpB2P9wuni6NBagRnZy9Pw7Za",
  "key3": "2c9Ng3eFXC36QYGNcy3YVBkYgNcarJGXpRzGtixR3vpedEEvQDEyV2eHApnz9quEeRbZncHQMf1cpQFo4JABpc1e",
  "key4": "66c66nnPg9Bb6KDKSMGNM3XNYfBSxXDRpbj5JBNV9Cs6BMhahdJDbtBXUtcTNGcPuH78gEP5i4v2FbjtVhLsQDbH",
  "key5": "4zTokCLjxAmYhgkauJKg5G7TRvnYuwumL4oHfCzhxMzy244cR6bQRJAQU7wAZCCgnmHiRBrMZiSYdMhxQhSfyzBR",
  "key6": "qKSpS35Lm5xdxeG1GLcQBVNDkzN2PTaEFtrWxSUpQPQUGXwcvj76ZbhyoeFfkbvPK5XTyG71fD3JTC9XKrNWbYb",
  "key7": "iEtZfGiPnFY7SpoiTmHDGZkJesHxi7diseF6HnbjRwhA4p3uDnPjccnUTQSy2bb72poQDFs4VBVtKmucyC4z15W",
  "key8": "2FXZT3KGdh9pWBzjW6VJbHR9tjMz4fBNY8pXJeVMtHz6BUX2dxTbLPbMUcGaLJo6gz3wztESu3PP5Pirn79oK7EM",
  "key9": "2jRveidHWKJ2rBvbcvqmh87mbYGVnEQBGBjvcP7npQS5x2hmp62HFhtvND3B2sMLhbihiGssxpgbfk8RGrrZ9KfN",
  "key10": "vw9MJARzKSeUyLrAAuAJ5SPMKQ7caRqdWagZbsw1BS15kHR8ebUyuuq2vxywVJPttbRinTkHYwNvAeLvAS3p8SY",
  "key11": "3rfzAAxxQwZXCBX72RwSyVFU5NjvkTjd4jwS5TiUbg4k2mEZPfnSuTXWBiPNB6GmBAAKYdQTFWLndCmDj3kQ4kPh",
  "key12": "gd7kgn448DXihfNngW977VaNzt7YnZ6scPBsF1sjee7XMjRbCvwTgwc56k4za5EVbwiHdX8qNqt9kRhPFoUY6ZZ",
  "key13": "48HB3QBn6xUvkB6uppnbFJ8qDVqdkyfA72mJJPbfTMVwFui54HhzQmUt67AKhX7Gx1cHBtzCDbaGEdERd9GZhSd4",
  "key14": "VsV4sswk3EfF5sCgoZ1DgSwnF1QXbUg5iFdHLWipvBh51cdtjGy8zExGxiqjBfs5HBV5KWuRvuztCSE3V51Hsff",
  "key15": "229h8PPdog9L3TBYWjB8QWsn3LkT4H3BFjA4JbYyGBrY2qXqA2XTqBVkDw5sszMRAUJ2PYq515dp28EYhDWeN2p3",
  "key16": "RAFz6UPV2Uin93oABnvpLceW6srj5aQRg2257pjUgUcZ9hF8dGxZSCnw7epbmAvnMF83xu9UWgg7DntzrsjErnk",
  "key17": "3NCh3URth1KPWjorpfgVwxYXmbi346TDJr1QokYC8qAvFAeqwjaBH8KjTgR6j82Gfpzbqqo6Cz9R5gzLVSXt7o5z",
  "key18": "3gcaPnJm3gG78EPacc25xe4Hb7KMBBZMivGfzDVjfiuH3PWELLkRaLGr628gLXpR1SLJBb9HWLhedwU6Toh4j8tq",
  "key19": "5g9KoPiWgnxUYmrcwc8m6vxZRjnqP5aP7iar4LXFbXMFTNScFB23cPFgff3J1zQBvCx5tFx6QYcfqZDyvccSioNA",
  "key20": "5q2PFm2qDXP3mpWothNYXqQBombVvEjfe3X3DpbK5v7WVCxh7oXWZRkCZLpLGfZ4m2CWm18zZQf8kYxp5suMtDGF",
  "key21": "48q7DkPWvzg8Q2yASPzSWp7eYtnuaTKchDb9Z7dyFTVtrmEY4RVXQCs4r7kpCgCSbdtoYLfhBe6gZzaYcVy9jrCi",
  "key22": "YU2H2RTZyXE5xSbmtGYkcDzQtxXquKPLdxdSpxHmmGa8oibTi3fpGbSH33gyAw8bBR6NH9UndKoTNBQzKNPKDg4",
  "key23": "3qb2Fw54EaaG6trPv345c2uf5eT45ugKXTG2aeyFRBH4QStgoE2s1itRCTMTgiQ1zWwiJFqbDwMmpjjVBK9kuwbw",
  "key24": "29fPTBpX4q9yuY8pjTTbYcUD4sz3vknG3xvBchWVJNT5abAqy6ySjRW1vkaQVjqirfGoKYmGM9yNMezbGT9zx9aM",
  "key25": "319piF9b7zHnD764MhUpp96hNYrqaD6gDFzHqsQT5K1QxscbUecGYD818hrMYmd8kRihVvBGQV9vacN1GobhuDDB",
  "key26": "2P2xyJAzeqeNTQ8Ahrms7STWacg68CHHPhAiwNWXTr1DEU7aQXcS4SgZ4AjFMNBS2ZtqPAzisgkdyADt3YUs2JtJ",
  "key27": "3EJdP9VASaLNKBBksHqap9Pmh685dqdwg6Wa7iC2SauHoNEtCR5vzy2beJ8Q8buFjDf8SHsi1xEGarjwuz7BVDLi",
  "key28": "pymYr8cBRsAhB6M7eZimYzkPzcJ3jrcMH4wQjwiyYEenYyBpVUkvM2NFmUHBwWat4rnxyVnHBELGoYnVJ92RbXv",
  "key29": "5TQYoPMsqNB3kQBbPG5UJKSFCwTvAuH8Q39xqZnPwA5cGfkzgLUL1zQAebr827pc6MnYmBXHxWX82yaNpNdDGfUH",
  "key30": "41ehPLv3AuZ8kqpDVhbv1KUcocmgUQT9TnLnnusH2QtJ9ue2xoGY2KzWSP5isB5JXxKUffe45yvbEXMDPi2TDayL",
  "key31": "2PU8CqavdCdsM4rUZge76KhU42MpQ9HRxQPCoKbPgqmgF82ytniieTZ5joijSVUeSNiDp6wGT5tXLgZ3Xn7K22Jx",
  "key32": "582sPVwWKmsLyr5abqqo6qCy7R5YyKDhQHMyK6HWz45wG2pb1JNya19XQUU4YaD5FCJh74qFW6LXcgmAM7TL7Rse",
  "key33": "51cSsEpd3PVa7E3GSqQUgF8DNAM3vWPr7JeNEWK6udSiunt7ozLXBLhwfNhXU5A8bztbx9fo4WunkZpXvC6CWEaR",
  "key34": "62MwLbPvWwWsiLhkDuSYeNFD8CD1jt45MqszLZbx9LpFpG2LEh3wdTb89movxDJQAhEpk6L68ThrzQ1cS5wBJwxK",
  "key35": "3g1s8fdS8XrAEckK3FR3wAj7GDmdXhWLb7L26PFk66XsH33biQLqmrwtgnJRFc9qzGLDk4NoXH382d4oF11NFJtZ",
  "key36": "5EapLs9e8SXN1WNnsKTxt1CytCFAohrHndwwi9oXd6Z8o6o4b3GvpPwGLpJyats8kptTkDAnmZnHc79iN5EvuMob",
  "key37": "umYJQXboos9kLAoK9XVov4oumCNPPirUsT5k53c4PbdL3E3WiewxvRUvzbyb1TpEfkCTpcNcbBEX71Zf5L6JYEs",
  "key38": "49J1GsavN6UCrNmyrtPUdxTjzK7aDEkhKZYwA3XfsEuf4nsuzsS5PEcfENaxuxh9Ne59CVnTF2wwaoGbAcCh8V3i",
  "key39": "2YQ5qdDZb6ye5QS56PN1JrZjFFSjjekFUvKWUMfBQMCzAsmAhRLxEXZxKeE6pDahRkzkzJyiTPrP2nmNvLxdTwoh",
  "key40": "r2iT5WBp8sKdLgoRwn5ku3KRXk2hB3JxSfLeRjAjUUmhuW6wozmX6CVQLzYwJ9kEWecwAwmfCFw2VGutre46CHr",
  "key41": "5DJYTThpn5t6pjhuK5NCCxughxSuKdAuowxW3hXZe8QSDCpo6pM4JPLvqC5qRSRsa7DzUmBnj13n49zy4yyxHtpx"
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
