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
    "6AzxYgbmTcV3g24ibSyu1VGsp54ba4kZAKeu33hJC5wwBuKG3A73xz61tNngL3nh6CQ38w8rPccrReJ3qQ2GoYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38j3YqVtbi6QkDGznmSXRkWcpEmXHpMMpzWnrNUeb7Z3u11eZeGVRzUL5TkdP4NRWPRrAvkZEVADfH76HCC5Vjrg",
  "key1": "3QfEYFyMEWtvr1KLQ57QtFAxz2truRPLWpA5bdxHotVQVZR9msGsfFiSZ5CCLGUEcJgfTrmcZRcm6tfxRMfJiFRW",
  "key2": "r1FSMKDSX5vitUhaU2HW8ketrEfC91PFEChV8gfJfDDhrkSh8TcEWN8XfJyvMP6RaHwqSwX4Zr8Us61TiQMxuLd",
  "key3": "4tWQCrV9ieDB8xG5k2mzAJ8THr4sLczfm2GTGkvn7B5QrRCwvHaQ3ySRCrM8CEvtAC8aHY71FfoqtU3ccAkwGqbo",
  "key4": "3XWUXEEfERh2WHKMuxGjb6vJb4sTd1Esf6e13GXx8EycfkD3WbDZqR8SxkxjxkJfGEjcHKeZaZiqWhnuLR3BKP4t",
  "key5": "4kbyJmhmZE87DCNQvWkLk8aSXgjnYDVVzA8FHVALkTwadmDQzBN8rKWctn6PbqUs1iqTSFVhRuBg1xxDxvCfiKqH",
  "key6": "3Qq11tZqDTk8a4eiaQvfTi5tuhTyWfcabBhMHUSAiPen5VUpqnp99WjHxaXBv2C3YfKioBdNUymjExfTDYkcAPvf",
  "key7": "3mHZ35Uo3p8Xrp7tvNfb9Ap2pDihihxPfwVmeF6rnxU6h82bFEL3oLvBejhX324Vh596vfz1yTUW7Mwsc5tDTXmb",
  "key8": "3dLwwRH37S25NzMa8dRRVVxTHjbw1zV1gtLHPPnjvFepZL5MeNhAnuVPata4DE2DJ9Cm6wpqwrd4Ggmm9CHFNA9i",
  "key9": "5xncHo2o9vP69Whd9ZUF9uKYSQz8XnnePwq3aQP8XgDZ8SxzSd2QYDRNmzGPTWrGkgyvruBWi25h3kK7UMJKhbnt",
  "key10": "ngXua4cTfRDcqcemLWGQLgTCnbweyqwLWCyqnjbPLmKtmjGC91Lp8V4px6kaRVAZ5cgyMxvRVHuo2N5dAJ9zL62",
  "key11": "4zAXWXusx9qRESJYRq7uTBajbPH1E8grfj4aPTVnMEYhxJUXpDvHCMFTY6d2Jo8fRNsiZFn1GnnQgBoykqAiqYjc",
  "key12": "2kkUT2V1mGcL99zJDei1X1r2YTrG2rvCnJ1b6T3nXJagEUWgSLPekKc3mKggiLKiZV9hsbfMRYSHSoq1rKNXApW6",
  "key13": "662Jhv9gSfLPwHLgKMTq6MkqQ5UPqzKhzDXykTC6AJBhGTct3TNqSYbJnYPRJPn8tdcwUXbjVQC7e9W8KP5GwX4x",
  "key14": "eKeTQXoBKoGGTNGU12AayPCRMp6ZoNG2qjtWR9JCjBH46dYy5kMSYfqbA2Wb2PNYQ8D4e5yZQooUGzhJfkXKGQk",
  "key15": "2GcHRr1iMqdkKcDgWmfFrWffFmFivyf9R5mtVMZX6VSeVqmWZbsqQuuAWVntb5DnUKyytHaupaFsMH5RJwLNRhEY",
  "key16": "Md92PzvEdnxpTgg88NbJuYqJWXvhWy1CkbEWoiLLPVTmWEBactG54ujjUqKKysCUW2YodUqE6o7ct51YGWauTnF",
  "key17": "62Fi6qEMNeBcb9C26n442n6157PgYaoWRoKGcWkaJdKPod2PXjZ2bmwFYqEoBriFEDMK61Pu1C3xDx8Q6Fo9bTPm",
  "key18": "4eW3pXQzeBkvkweCZt5iUBd3SPGfq62AJ9mQ4NMote2ct4WKkyr4hPpeqvserHFRHG9JvrujStHZ7FkakVxi13zZ",
  "key19": "2Q3jif38NbP45TK8xVQ1jTD193j66GPZGPhCJoha84xCZ1skWufsGTtJuEPA7cmpD8wbLyHey71Bs4YHk8w9VmNg",
  "key20": "4f4Yf7wkdixcozMDiJDDTqVULLH9nM5aRG3BPc2skKPnxZv7ZQ1zA4fxLMdP7yUkDfWqfjv56NB8sczRaNVuJSBn",
  "key21": "66DFr2v3BwkKhk64kPPeW6jgDKtHeBdPz8SV8dP3yZ62U9vdXspeYJeDFpNgUWFomxvBiozNH1RTZC7pEB2F5opd",
  "key22": "38Gwy9SSZPtPBronNmNVeUNMn77Ba7BqMgfYnLDyXnGaooF9XVxsvtzYfcJhPbY8gb4Xi51hY8EVqzW9iJc1BVYN",
  "key23": "4QGiUdpVNbW1jUuUrv9AwPGAB6hqZRU7P1jbNh7zboGyczQ4HRXij7vqVdJXk5V1CqHLbaJa9geRfGYu3bFgcL4k",
  "key24": "42Gdg1LjQ9QoFgqr5iSCDTjZjQB1NXzhSDug2VNiJD4fFq6W4hQtxEWm54zo9VFFAzB7EeraNBZkgocTNa2HGtew",
  "key25": "2vrjCTYfQJFTRNAxwRFbj6hebHCW943NtQCG5Zj1dN8gaFRhWFhamUEwUcq5qkDV2ZJQ9KsLbNp26QDQY4qwQ9Gv",
  "key26": "2ruB6PXB7piiMT15Hpj3bHF76gCSG9rAgg8bXam5w4g6Dsg5SAfmy4uAJDM93ay2cUHRLbNff8dGu98fKd2STmE4",
  "key27": "24aXs2sFmZaUE5gR7jbBUUcjtTjvtjJB4bgMo7pTdWJ21pKK4947HAkyrroLqs4hpK3RQxhFGJxgiG3uFcDRfDiW",
  "key28": "2WD2TxkpxnMGW9H6VFQG3xYEtj8DrN2d8kPFu2fK5M3ev66d1nD6k7PxYurGXRHZLAZGGkgypeEbHFtcjaQhGe5f",
  "key29": "3e6zgvPPMzg35cJJmofPF6jWxW4xTQtBKXFnyNYzMhskciy3zxVqZJmjEqmK91PkNRTa5BYq7mtV7K7o1Yjt5Pwa",
  "key30": "4CyorFLsHo1TH3DoxjhroKXr3Uz8E6zo1gYTzoWwAYVhVRgHLoqirjZ93uphLfy49Ks535cuYTzDz5gW6MWb4oNZ",
  "key31": "37H47LZRWc8FxKXJXjzoBxoHBJFdN5yYo7e2jzydUoj779ixxKFEkJwXdqJL9o25P46HuyJXZ9Wzn4sKuUTL9SAY",
  "key32": "XN8rCGjvAegfzQcBdBkJRiSxZ2RerbsA9ibkfGF4Fq4rd5qEzX6cVQGKgYLGL7JfgV2wmg6UBqhnjpamvJXnoYZ",
  "key33": "4vAZhU6J7J7iyb4BvBhjU7VtM5j7eycWmZz1wjBhstwAb9xo5zbTpKb6uwh2UqG6EythXbKtEgx2nC7Dekf5yd44",
  "key34": "5qcfCAmZGFBuDCmVNXvPevQWvMgi6Cieoz3XyX4fi98W1dSvaQa8vFLF9bUxAhR1rf5LrjZm3bHfNwVhUta8VnAQ",
  "key35": "4eqvRJoFop3Wtr2MxmiuJqa8jdANBA6gR7ALJycBmHuPAncSRvkq1ShSSr6cGnkwUaA2ZauGaPwdNJoVhVjTVz5C",
  "key36": "2C1KyuN9J8zRZHMaSrMN4VPncwHhzZTV1ozfnoA93g2Z8g8TYPaPR8d6VEBsdJYTxN1Zeg97U435gc1pKaPHzrb5",
  "key37": "Fi1jkx9NdSB2gLB28Gvko8hboN4MyH6pEi562ekiNiVpi7vpx3W1ynqfNgrbF5gbqQZPeY7bZanTBkWRpdLRkzU",
  "key38": "3XUjnDyi42y2FviyBP8RCmzYCvRvKYu6D2uXywgCuAHDcJNAWuJA8fUKRsGGtDjKoA6tK47HiSm258chvXX3hqmD",
  "key39": "qAC6oEfRbLfMyh8gBgFptqSWmMJEdw6Q86N3pAYRWu6gcW62tAk4BU3qkWwXvtwM8kpxRRQAY5rTbGsRf89fDkB",
  "key40": "4VuZsVZ36HTq7LC4Bxc6WkJ8VvpBJSWo3Nn2R6CDpRnr56aHJXbYAhTYTt3s7wAep1LGDEHQG1SZGBeZRi3B5geA"
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
