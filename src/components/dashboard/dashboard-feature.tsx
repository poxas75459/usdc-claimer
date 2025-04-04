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
    "4EGypJMAyiJzDFBfcZQhicJHoJ9gLyGduZxUeyo1tWkcNsQkD26z1rqPuFTUo9kBiKZt5ZvZZxUrpYVPECRrqZr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Xv7SLFKNDzqG14N4f6gVyP65ef57VcMPbSBVPTgySZFCqoZKPGEPK2NfqzvScQGi7PGVcD4x6kjg4DPHhWzfBC",
  "key1": "2kJVbF9dNPVi5MdcFv1tht753cfcsEkhygRoBWeX5S5opZpk6rFDqtDhjjGq12nJuAwWFYF9eSUpQKGaHqozraia",
  "key2": "2knGWku3awYbJYitCEW6eiRVLecnAwVT1ePx2ZHZZcT5uXZq6Hhf4GWNrtofmEeKuTps1KdtzUC11ijc76NZupqM",
  "key3": "5Bgh9mPiBxouYwD9iTKtXUrBnwTxbBgqvMYi9f2mHEJTGT9ggWCp7otSML3uqRxF6Brd38XpCSot9BkjG1iXKfGU",
  "key4": "36SJPJTJtwr2PSTiBqFLeZkioQQ3L8Hxs3DGKWZYram4kCgSmD3fHUk1asuLyv6gZV2p5VeSqpL5hx9YbPoMDQEQ",
  "key5": "61mtf7oaJFJzbgCzEKWkYwBN578zDtXt6hsBFfpNtNnxrvWKBgnUNoHZA5EztpYiUiHHtyDb8jfCqC86CcKuMB24",
  "key6": "2G6pD65RM7mvfxneZxAz1z3bfYooTMCS1sGHjQLpqHFkcxirkhsfWKQ1jngwGXfhsBPW8Jx45AHGNvGR4GRyiQmY",
  "key7": "4NY5qQJB21AQrwHH3VR14MLdeCV7q5q5fPSDwUQwiFch9W9pjFeYvnuHq3HxkpYTViXzgWhYW2Re8MA9zBbRqovg",
  "key8": "epQC8VvqHLe1UgWezqt1LddDAyXMXjHzoFgZcu9dDpMzS3gESosor9geZcrPiuwBRGQHBFTdujWTmobme5yaptK",
  "key9": "5UVKiV3fb2VoznzhKA7FEMRYBZfFHvBwFVzdcfXCK4AdgvbRtQjtLPuJG45XAiHJK5xBbYKoCs3JhymTUWXaxrE7",
  "key10": "VXcGn2tLSHrGavGNrnzMgBj4HiF41dun2D1ps55AkutJKRoNeWU2GLFu9Mv2mrLViCXmvW5VXGmzJCDL4V8HT4U",
  "key11": "663V5DEiE2RdC6JQpjbssv9pfhx2PmgPanETc4cKo1zAy9n9QdQ7g9DaQu9KEp47c9cCdtQ5mcXdXk5tnnVEcdkZ",
  "key12": "4AzAVK7EVX4UMtRcDVLRst5SL26swEsPeeRGzXtLbQJjDCTtTxmq95BuukJDPY9JnXMA1w1WE7yqUUYjyRyATyAo",
  "key13": "3kiX1wNPw3mQWCY8Q426Eji67SZm8LuHsVq4kdonk1RWzD5Adb9jENLNJk5Qs3REJF3wk141rZ9AAqjfoUwaqaTK",
  "key14": "3idpZKCcDUGzS5BBsRC5k42XngNfXayFDtwywPV7JDUan43vTmkQvdiMSHd89Xd5TFUgwvYcfrYu2hwaaBZ73GmE",
  "key15": "TKcDW78AJAK9SWnyFPA5pLEp5DQiWMuY76ETwBses8CVaoZHUHZspU3k8ur8dGpA3iMkz12temd7TQSEdfPrnos",
  "key16": "2pRdwyo2BEndv5aadRdRUHr6VSkLiptAynSUqkRqnTyZeKJ1QW8r3C8LrTYaeZb41wR7iLQSEdkvu7ury6QVtEWB",
  "key17": "5rp8NPvNMA4Z7EgKbEXRhh1EhnmzDSyns91QUaToZi6Ft4DJr1SpcAQoyq3ceMMCvibjq7cPGQ8btowVxf5esrkP",
  "key18": "hrCTM2rcwUnZ4KbS62uC6B9uKZ8UrgNdi5Vx9TS1LYE4i4qAr3sqUFm4BUSjH6Fx7dJN4krTyqk6GjLd4TtAzZM",
  "key19": "5uHf6puUqGMyQDAyXfnXdZerdMgBp5ah2i47WfYpGAuh12QpitmiSkGgJQf7iPRdXuXRgmXA9KmyPiUNFkRjYPeq",
  "key20": "2NqjCaZCR1z1GcPfVTMZMVwQm9bMT5FGPUAYLdaJ8URUWj3eUYx4zyFfL2BNPsYhRAXsFxeiz44C81y5tjfGsBsq",
  "key21": "3FJWJV7EAVVNAwqLDtK5rYgpnF8ita7AedHQGNjaeQaY4TvbCe6CFwqrx2mvwNyeoWwjYPy17KDQoFbvfkpSvJ3K",
  "key22": "598qU9TR1ZLWJX964B4h8GWLxBaoigjHiwvZ5cdqzFaWp3co6uNK4NC9JietVW3Kxenps4Rsgt2M3hivYamQXaQo",
  "key23": "37cjHDyhmRdAm1ANnK3afHKNyr1EaCCmfx5jV5muBh3VFN1VuQpDcciXbziq1FFfKUQEX9UFbbwVHrJYTnSvisj2",
  "key24": "5nUrbADJwgkBmArGJ53ofrBTayesZHq3JquwvrxG3swgTSPnHjy4zrDVP28qYiSXZCC9iHc3nXs2XXBHDoTvx4BW",
  "key25": "3nvDw8zZu8eUYjgSqzZVzJDphNNZhvc2ZxQRp7nntVDnZg7xLBvVrfchVcFfQxPB244vi31dEg6WebRNLg4xdpbZ",
  "key26": "31Dkgr3uXWBWrvA5Yn9MhN6MPSFuSUHjQvZWYJzA8arp6ZBJh2oGdFz18i3MP8vmc5QPnsRdgLnjp4qRLWXFmBLH",
  "key27": "2JNS7cLmkuudXUaSDCQUJrmYa1aUg8WFsBCv52WtF5RbXr6jESx1qaJperVyHd7fNsUPDCZrEo6XiYbSSmLP4Px1",
  "key28": "3z5qQZE96pK9XzYa16rSUos1toCSYvc4sYQ5WooG5eLo4o2HyDe7hdipPhbAzbmq4znfsUq99C7FHguzmYd65QRk",
  "key29": "2K9ek8Xd2mP5dXtw8RZtVJX52BAyiZfA7gdMtXLfGgH86LjtL298oGzfqqEmMPZWq7tJsuYzC4gudqd4dVsKjAu7",
  "key30": "67nkkBgeh2HXZ4v8BSSgGJkHaBhi3NnTbkkFZjyVqVbQruZw1ittFHJP9hkfeJEBbh5KNDqqPAQdq4xbyFRgYJH5",
  "key31": "5LnHtKt3GCNqSbH2zsVQHUfEvseiSXGiNP3iiU2yQsC9DnrS3tM8en6YWv1ZYr3PwLF2yddBoEsvLugbV6SFX23t",
  "key32": "5P47t5RN4TWxNqNm5X18PUKoCiswPqhwHVeFALYkpW5S66dNcj7j4oiMeBWTdzQ5RABjNNLCjnWpwDGZ26snpgyY",
  "key33": "4eWDSPDhNXUhQKnNtyYF7ocuAhn4drpKHjC7q6vmwbyPtqA5Vnka8f1J5wTpAvRcL4rtDWTM2KnBY7voKa4vwJb3",
  "key34": "4JJpRTJUb36R7wpknUgXuDVJpDHyW5e6nsf4qtEEa9NCsgNbLwMuFjTVcKZ43DrF4PsHqYaUyFxaMmP9U47RLrRi",
  "key35": "5FcpS4E62AZ5EDnNEGcMCJVoCHrGeoaQY5buefXkjLzm6HFAGU6MQZKj2DRbtq7isdpu1eqeVXWDhdF5tDD64cxr",
  "key36": "5L6hEGLwuQdDng9raUmYKHyMvuogcNTt8HWggtPViXf9jy3AsDGaywWeKotb8zv9dSPfjixnT5Gd57541pfRx9Fh",
  "key37": "3TJc5RkmFtr15cYbXZYWZAcJQsvTS7fhbTGW9LKrPtofn8R9TCiv4NspQh2fAwMR55GkFEbRYeMPXrfqQU7exUJg",
  "key38": "4suKrhLz3vhuVL1bRwSKV3ePXQ7XqZJLy1UpcqdzFcTjMyhVNdpzdSUyLgXFqvfX4cHCq1JzuRcK5M7mNSzo5yBE",
  "key39": "4fJ3gcLxjnNSDooKQqcGV35ViTF87tafvGH8rrr5SVzGK4feWArQxS4Aq7xRAq76DbgVpBdAeprMHR2dXnXfxdHV",
  "key40": "65gwYB71kh9ToqrroP3oa8DtnirRiQDcxRHJtdNnhFyFTDPq2jPgeey8eihdASK1NKiQNw5jdegHTbqtf8KLDQuj",
  "key41": "24qmycHiVyMThyva8FBou9UhJ1wuvKbBuQRBCFiS1iZDRqG34jdc7MM8uZNieU6hSWJgjARG5czr5xkMbKXBtoV3"
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
