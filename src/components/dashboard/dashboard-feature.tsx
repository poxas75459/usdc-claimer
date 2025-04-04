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
    "34z6o5DbF2RBHMQBQ5NXbDqREut2PEg1BUpTTQ1WR1mouz5B5poM3AAaEQ1pAWRk2zxDbQxDT5WBwCQKG3ohHTc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPuaa5eViD7MZQHwGbBTUyDXbj6PXrSEACh9sm4V6KgXoJEH82ii32fc2teUhkjVSUVX5ZeLMiVrzFx6Cab5L68",
  "key1": "2U7op5dcv56LLpZ7xSSksvAkWS7qyUYT8wGcBSWgmwZa1v2SNsECpc4M3qP8UTvnjPFKdTjEMk8GHuo6YrYsuypW",
  "key2": "4i3HxdXoo7sbnbWYK6DTMs7BotpiCkRvPwVeEbm6nzkNcjiZ55PzNyQEPDTmNFigUNsUAbeq8v3z7td3CAigE5im",
  "key3": "57ar1zCJU3ipFwa7fy3NcyBymdrS3q5GBH1pDPYHha5twd5hUERoXYEwbfofdCMbhFSYyS9w4d7C8WE1wpxpHo8G",
  "key4": "263V1dWjWpDLxkWGd7RboaL4wZvosq8oD2P5KPLHiv5Vg2Qs9MPNoZowkTvVNnwkn3B38SYgBRpbezeju4YhHHQi",
  "key5": "5t1VHAY1UA5vs1Dg111TQCWrqqUBEaKgaAFuKScWV8kRtPHijiAZ2q1AnduQ6zFb7UwfSTm1gx8FwdMGgCA8bzgK",
  "key6": "5CKwkR98j4HQ7kkoC1pDdPAaXjZPHc8mrsrWaLb7VqAFYCVt9K1dLgNLhPtwurSJ4WsEHb1Fo1HgDVqfSfyvFmyS",
  "key7": "38vGGETiBz6dNNkP8fZLuKPC5gUgtZHqDvohWzuaPKzRa1jnCTGN7R8WCY8wY5ixHMeozTd6VJAfAh9vczcM3DsV",
  "key8": "23vZh3XW75swHyRB8zmrrnD3R3Qmc6uSTMDu7NfRBka6jRoYdqgM77VYnory9JLPydRWUqjJYgnqGgBDofNGJPye",
  "key9": "5x1p9PpMitoigFRRcUem9EVTS2PhayHmPiyPHbiZDCZs1WJuvoy5anYuJrwzn19iNvvEbGsY2Vj94KQ3oKVofQUt",
  "key10": "4uKMrAe4ZaUTth84wzhJUAuh25Vtyy3BmiMzPnKALv3CkNQMUTdjcSwYvrYD41bgvC9upfnnbTB747zcbhB3UhSN",
  "key11": "5VSeZyDGG8V8Bm4nRykML8DCnf4ZNpEQwm1uNRcz6js1ayooQ5G5wdz7aQiZ73oa5dUY62WyMrtvXN4r4J3NSJmm",
  "key12": "5msXqtGvuyzstEgKSDEYs3EFpGurBUUXMGzctRoJ4rrqeQfPNyhxvWPwMAVeDT8Htq5Gh1cG7ZMaVYNYwYvyKoFW",
  "key13": "sPcQXK8AKddUChRzcNtbPRDggJ7fd7iwBYzLoiz9ewUn5haGfwApQxpDxko2Y3U9AUtK4BXJd4w8zwKDJn7WNQ8",
  "key14": "33Li3X4fYTwVbpMPkFiUDN53kQParaBGNFYLBShGNG4oHY6wgWJEPfhtU8XR8tb7vB3RD5iWhQ4YnDq2zPxs7GzW",
  "key15": "PT7cTK3nfPHLpEwBJcu4yPqAVUocw4EiUvw6kSgd5ZikEtgPfCq7sJ2gkjSP5gTxiDyVv9PUbYRT5d12kPjx36X",
  "key16": "5WC8WYrex9WQfeHmfqNq2RLfPNbN5eNLTQ6zNfP1Ts4ZaJj6BG6YQwDKpXDqRsusByK5R1FLADczebAJmk2dRH3A",
  "key17": "3aTPm9YASM1kSnJJKvFU6TQMGg5Fh5Xk9ZHgYNsxJBjjxTEQunNKr8gT2AD3HanF5tsak4tbTx3D1KtTfwsVwFY2",
  "key18": "5GtMfWUpQLr2Dm3NNg1BuPBifDj4tcvoxBMYbzxNS7UbkNqp73wUCus6PpLyzc9Tk3BiKGg7VW7EjdVZ62yp696B",
  "key19": "3UVQBpiWYYxDiDPr2VdJuCfrEjiGgicy9vFyej6MCCaZ5WKKCHdDsE57PQaD8DR2sYr1U5MLRZCpWNLaxcJ8jjp8",
  "key20": "5EeqNjKVjpkWnwMfQTD8dRFvN8AzGj8pd9Ub2y8QnQg1TCPiwbUkdNbmUSRUsBrEBQ1LdpU46zc4s3Lrp9nC2JdE",
  "key21": "25B9XdxSqVeugoDPZXJcDma3Y2JTy3bQrFNRM5Ma7Jz1ri79N3L76DgCZLpDFkWb42aqmodNq9oyEYT7Uahobjxj",
  "key22": "5RW35Df6TqZ6mdrjVjn7DcjWp3iaFYB4TQq2EHXmrJdtQVEkUcrGbsRLPqMxzRZbdMSzvf5jexenpNwNvcGFVTAn",
  "key23": "2ku3suQqMzQNJfMPmBskeLHYpRtgtmMkTCBxoQTS8zrcRdBR6ANGMy2XbYT4eWckBSZ1wFdjwC9nAgtpp7Haa5fc",
  "key24": "4QXJ1Y6zyPfqDB53TEpYpUMyt5Egh6eFzH5hGfYA573ifhqEsZmhK146Af5tkW3eisiycn9U54fE8dbATzw8eZ2r",
  "key25": "4iYedoA35zycxynUiKL7dxU7vhSvMdc4USpkB5FAYqQhAdH6tYrqngzrsun3JsWs8ExJaD6kgoCi5a4n2iMF1A8X",
  "key26": "3hNbSX2Xn317pGxnN6R487dEFhdd2DL5hvo3JZQewwWYVJYBDeW3CFoNvFNSpZWwVzFUPticHRY9YwKHtud2mU2a",
  "key27": "2RspJ8WU8c49x4mRtQ9PuGFpTfzwprzp5FfRrGosGETXhuuZqsMoWvJknaqL1Ge9JSF6cvw45Dut9opvaKvNoCfh",
  "key28": "5G85yZbTs9XvA5vKuG8x9DGwNE9UVojqJbu6QW2VsCyNaVGwCikTWmSUjgz49CpBwNfVg5tYEegwa29KH4NwgK3j",
  "key29": "4iouzstcGwWHXErhwyxKBVYRY1wtr7RS8ZZfbw3SLH1Y2v9w7d1njQPjdSr5MLDCeTokngqTy67ETcy653HpsJJ4",
  "key30": "5DS5kcZPCSn6BmHpWNgE2NSCytnB9TAUfWVWNZ8vEvFUHrWfwvisnnsXnrUS75fAb8PMK3CbXxcCeYWWCcN9g8RK",
  "key31": "34sZVb3R97tWj4hcT6RodzgUk6cHCPiEUhLugKSHX5dSUCDnKmatnsGTbqWFyTY5CJCLQhn2NRSQDNdwKZ52C2vo",
  "key32": "64U9nzsVs8tj5CGDYAbNsAjKQL2H65cNR7xfBY7gqJNTCyWtrZy4oZ2UrmoakX9RAEK2pck7kjhunAsYPqjUk8io",
  "key33": "SoAkJNAfDCygfRapkdnURJfnNu49UmPwbH38PybNZYsSaryrvyzw6hQKnpkvzN5rsRGRmYigx6ArgYCmCsQX28Q",
  "key34": "245cVZccwbmEc8JbNai4LA4p6qh3ZSg8SbEwJDCH1zGz6yPGBd4CGJoQXCJHUbM6ALRPZwYCyxaTKyqFDEtPkzzi",
  "key35": "3pqLR477fZF4rsHt5eDrQt8m7ZFDuT8zqfVyR62rwViVrRgKU641mwVtZAerX3wUaTP437MbNRNp5oT1m9WSGVFk",
  "key36": "8t8KK9yZtw3r1qAj5zm4NZNCBf89ZysJcv4tmyiWb7YQ5GzfTFb9jGdwyDj2uChU7DZ24S8CvJMGhSj8vhvxjwH",
  "key37": "WreYAQfq78ei38mTuAWGQjuxf8QN6A6j2xrTMwMzMrknq2FaGmci7gDya768CWtUgyqf6q4Aiyt6N3eXVeZJnPC",
  "key38": "LpqPdWA6UYhbiScDnuhiQp1f8PTVLp6RjgXUSs3a622odY1shFbDLuGKdEjigMzyhy4Wxv2cG83R7NJQXdBbxrd"
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
