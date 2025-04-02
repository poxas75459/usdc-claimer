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
    "24gsU9HjmJZCRqtFP49mHmUcCuuZVJiu3WGRy7MkDocTSu9naezBYibnJ67LwgTAXsuYxijVUXQgHQajMQPta2GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EH75iJH7DHgxKhXNPTnwge21eWXA27Je26JNnzfZCGaxDYd7KR3V2mbtQTgJY8WPSyycSCB3xR5cX2DDCpzcNu",
  "key1": "4XTBy3oBP2LrtzGMGXBjSjmActr5zy1gGKFVPYUb6orv1rJANsY4rrywqTxDqHjyzVSnKuniQofvDQ2W7RtHradG",
  "key2": "3tCpdVoJmnKeLckeHjZDh9RW5GG327qCBNTkbR2DEF11n6ff43PaPYw9WMR9ayRcDa4ZvBBWmincJdZx1nXJ3Kww",
  "key3": "4v2RGwSp6EYM26xBGssHGvexLdPKAALSCmr3icp9EKwPNUeyzbJ3n7R1pJLSSMkoFB18nTNPwjX4jhDVbHEoARJb",
  "key4": "8o3LmHmDJE6vHzZhzAmAmbuve7TSNoiXzYj3q4x1T7UTVQRgto4i1JZk6oD2P4ex1wna7hsjWhubmDooV9DB3m5",
  "key5": "3kxNnnqZbLyVuHdVAhpPgtGAXfUD8vsPP9cjii4pBengidQPph3C8dh3Z7GjbvWutiTMp9c7maoj7XncqQta6sQN",
  "key6": "oWxUjhoA2KkDhyJHeMWkKukPidYhVTGTmYi5RWQPYkgbeKsUE9a749X5oW2bBdmWdgVpc7T58PtN33NQ9mvvhEi",
  "key7": "56auy6cJDzfXm8Q4Bs2ijgNm1jky5iFCVBvaA8ehNiuf93rfkd1acKDt9nZuZNGf6bhSQXqMcq9T8awdooGXNiQN",
  "key8": "4SdvPNhmdr6Y3MdVkmGKmgFWzmCnFvDad4mBgVcbVETZdZNZK5vm5QkisXnBCBy9urCiDAR7QDxJ7aQm6dVcPKDf",
  "key9": "5BqXwXv3y1HayxoS8SEu7wp8MDQUD9GamjEiLzbMDyMgsaXnJMoVhY9FGT6fUZ8yT6nwvHxuzTuj4UCh5vThGR3A",
  "key10": "52iFGKgiMsfYVss56vVZayttAyhy3iegxvvDyeYKzdTHXJ44YuESVHf2Y3PHGqiPQJM4fxBnwmLLMvRH1RDdh6rF",
  "key11": "3HMpJBwFcwATz6it6u22zWB7bVZF43aUvUx3zTAqmGMC5biAbE2tCBmSJ4hmNUX9MDh8oovAoSosREX1dVosqEJ5",
  "key12": "vuVtLhPJoXstNGp7Ji1HJtZdf4RkGJHjASvvwBc5mijpAUehh1WyupdXFr4GJJn5rdobg8UQCN4jQa5hRWrdciv",
  "key13": "3Z94zck81BBxVDH9FBfHvmow1ZpapeeKV2Pww3Rzea3VbFHxAJ6XWW5f7qQZ3jbPEs7TyqeKBG2wT9YipxnwfTBr",
  "key14": "4HvNZ4c4urXrjpzPgx8khmYNZYx227U3iQ4QuUZ54ppGyQaakN7G1oDdxafdxgdftykCKukzfjrd4zunsSqzH3Sr",
  "key15": "jxQDSPiQGfBCZjniaJShJvJUS95CLLSHkfe2r9DB3gbfSiYBsc2pxH53aZLgSHwFDvxEKBFLNG7GXVsE79Yd5YP",
  "key16": "35p2DfTg9HEfqoWSHfu8UuWKBkdjJt9YLK2KgK5Y1rxocdrvcbJszqYxDyUzsuUX2qzHu59vyYr4NvHbei1mRdXc",
  "key17": "543JsTY56uNB1mc7gswcwbPX6ip6AA5cYjTov72wCdSzLYFatHDgY4nSwDJMiKhzY2exAgAcT63yuYgoj3J3Rqza",
  "key18": "2wG2SLW9cKzri7g4e12b3YzMAt5qiST2Mp1bcRVN6GRZhxzJFKeaKACpmH51saN18TARib1Kp9hyLbYKPMGxA47B",
  "key19": "3uBRHphqorLF5zqcqSYVnMHJ2jTWQ9PjXgPqaotAMrux6PqqmtZkvwkzRuwa7BPaqWA2ggaDK8p3mwMrjDMQT8ob",
  "key20": "4r8PhE4Svf7qXdL5n9LYh7i6knkj3uRFxnsd1CvPekURoqfQcXfUvseHi8crWLQ8je7ZFM8JWupPCr3Mqk3BHNhb",
  "key21": "s4qbUDNiFMrpp3QitraRD5FwPWPpCikfxFNUa1wSkPMtK757T81oiaUrjNuLdNXJiwQbtpKQ1Ty8caMsFHiyGdC",
  "key22": "36Be5gqL8YUcyCHNBgH9ThQWRDRSUsokdJgKLai3VpkG8JUokxvgJeaXC4bsav8qfiiWn9pQEz3AF964m4XDeQyS",
  "key23": "5S8GpDZ6rrW9MBbriW1Prwir2vgJbB4s7WLbWuu9ZwXthJ6FXqUBsy4AtWfduL2qAzVZ3eRVJKFs1fUP5q6DvkDz",
  "key24": "3SG6PUdT8MR5kTnF6yTff2H5B6uXvigy9oVkXhGytaAkdJEjW4xhNfzoGDxeREzboDimRPZbGwL691grsupo6b3X",
  "key25": "T28UHrRbyNM49CBrXBCYivD8TLY3vDc7DwekWZMariuCyFmfqZtPJMgTsfpjXxSZ2xtEVYT9Zswc2vAPW1Mpxrp",
  "key26": "4WseGuSNonnMKKkRjUxqFiqHxwDaDBfUqVE8reTXHJDd8V3udnKpT1UQ7idqvFkw74bdEcEMAU3NUpP94YG6mt7F",
  "key27": "4ierYMCNQ8TgbxAiEayJtH66UX63pUPNztdLoGwYbpJzc9ZmgssNwWbz6Yw1hVhveLUZkYypynDmP7c19A59tn5R",
  "key28": "61jyPyNpV2ZxmEFTKGAUnY2RQnwyMfqzgtErTepq3Bf2qw5yhXahs6MHhX68AsGrzrnvn9HLcSSTZyJWpfZYyPER",
  "key29": "4wjUYqEm35dGuCuMetf8TjzvtKPDpTghhJjkeixh24EyxUycXFNfMcAUvUVrg5Q1t5Z2cMBe4QH4spCdLNktkAWh",
  "key30": "2Sctb3aijYV2b3Bwcxyy3TbZZPWPbpCuS9wAaixppkK4ReQ2ZoCpeYJeyRD7u5dnD6HGBBmojnpKzjrBLk7oVWzN",
  "key31": "2JrEpyy8Xs4FfAgvsyCUtZ7MkHQoGDi9ihmigva3vPtdqVCxupmS5aBw2Hn4P4CRU3X4mJQaxZ2FmYKmtZSr8KWD",
  "key32": "xeNKpb8evNVKP6GzSmGgWfeLbibijuaqPcqf1kvcneL4LytLb3zx5n4yTu5CsAn22JNVxYr8m1Nk6CDifEVqu5x",
  "key33": "bqukuUu4QYVCEV28gSVgT14GWyZbawKQuuREBxQa2pNPc8YQwuftnS97oDawoYJsfH6abxNLGqb3FCRBPK1zHC4",
  "key34": "rE1Gd7NQnZQmPDk7zyisN4e8j4CAWa8xifK6GQchPpM4q7NLh8LZBTNdvUiaZ6YT3ZgDWBCVPamPHPq6qM83VJg",
  "key35": "3eS8wiaTNT323UUCEwoUdZ4ZyUb5J1Mm5Xwsw3EKj7LTVoynydrat4iR5WfnuAhcWHerDyaX2tTQqBzTJTbqZ2ku",
  "key36": "9ysUa7y8rrzy9gGDepzuojvUDATvn5f2ow1KTgHj4jHAjJmhSGsinEsjZFnXuxLBq2BwQuH8FmrTR8doqCJgPfQ",
  "key37": "PRPJr18TBrkTWCFZhHhxWkGqxwcpujBrfAFtS2M4hrsVzfWfDcMVT4oXDLsY1pFdHRSxeu56FQCPqbAVdqWpE1L",
  "key38": "3RhE2FZc1mJV1NwuHZBqvdapbyuHGY65VqXyrz65Ub45myqsqXYntd7pgJuk6RcqD9a3k6ni5M1HPa33hLvs6w1Z",
  "key39": "2UtEX5nPurnfPhMGhXf3NHGGMzF4WCtxn98ggLvDrJyPWjbb4Z1NxS4aFERjKyPCuoaPkmGLwguGwYbt9RFXbJ4K",
  "key40": "5VRPadB5aTF3pt7FLJZ4B8awR3FvU3GAbr3uM6f2iLWZgHpJtAvzXmcMmGaBFFwcAxUe66ujyfHLZXWuoeef8oLx",
  "key41": "54h2SVNNaYX6FkciGVDu691JCrFbMEBmKjim42Soj9KsYTyw54ZoQqd7iuAFBxzZwAMvEbXDfuQE2xwuX6Pk7s3z",
  "key42": "4vcGRtZ7Pkx4nuCwR9nReCXMfDrNgHu1FAb1mWUabFQeQc8fsA1BqU89wqgQ2LSF4b7VJFZQwK8daaK9vU44xj7o",
  "key43": "4Js1QRkTNnuBy9jEp3vMTypCbb9is7aDRb7UvJvpo9xZqmuHr3M6nGchtDtG9osH61uc4DUgtCa59H2YNXUvrjNV",
  "key44": "4bSdg2tbNyuARDx9x7sKZbBu3mV6iy6FKyZeLNwKZXfQEX7BzxpnJqBokchA394zgDELBxGZwipHr6nmN1jRSaRK",
  "key45": "32MTWo2Ca8i4RSnYG5TgRHbweSERojKaG61XnsDQaEZyqGRmuyjxN1f8mcFmzt7HrbK7m27sAwGWaX5abY13f4ap",
  "key46": "2UQDXuJQW2j53m8w61b14VV6Cgwt5ZQwhoRrGvNPyWL13icPo6wuc8jqdn7J8VD6RgCorwYHpj3V5KuEtqAVX9yE",
  "key47": "4DsrCZpy33t2UbvwubreT8rjVF5wK5gLTTGtt6KQpAuQn2qw72UxH9GJ5sJcaxbd9MNCDPocZDLRwhV4PDjnnTyY"
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
