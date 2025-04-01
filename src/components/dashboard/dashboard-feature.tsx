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
    "2X99w8nxRgQybeDGaYv6K8tR5D6fd9FTchcVE68dNV6ZU31wHmWET7GHufcyoSYpdfPuE57rLnSSUxEsomNbp6A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQdH5tggMVFGkwnahUdr4vdvasVgrYVNZNDEGPyzXJRPW5HpdnoZDKqdPhW46Ps4i1dUwRKy2RAANK2gqdJzGQw",
  "key1": "5Cvd4zPcWKJKA9ZPB9875VouyNkDahqC1CCvGgoWnSYDV76iN1RiSbjDgv1L4C4wVCM6isgGZdfWwQ93efL2UR4f",
  "key2": "4YpnnXaTQfafJnhgRh4AtBDhKqkZcpJ9m8ApuRfac4bSjtVMZW1DBaa1v43CScGuY3QnpujMGZEQF2SDn7KVugLC",
  "key3": "2X5uMrPTz8hi2FZS3fDmJijq6zDrRfKVzTMNbNzdNZ7EnSb4QA685Qm4NpZjwRZSjgs93irUHqyQ1w3aKgNVfpyy",
  "key4": "eyybA7h3H5NTFkTFrP6zDwWGDD8yyheCXzNp6bFiWM2Wi3fyoHZMuFq1nnWxgy6dQTBZn6WzKzumXn7M7CV4NnC",
  "key5": "3P56CoBMnGGw3VMff2Kk41ujfXvhBejm4Y8JZMk3tKSKpVcsb8HCqk6DDWMbjU3FcxyY47Ghjh9ungCKwWLA7ZXk",
  "key6": "2VQnLUtHyCurrnRCTsJQmSKg5aHyFtJuHG2jrMznyL6MeFsp5PgswcaEv7oUeSYmP18eZED2YDBvruS7cSp2RWCa",
  "key7": "5utzEjzQUK4wKi5xqKqHyJVhGCUNNr8iAVqxfyx7mZFX3ES4iX1ddDzhG1ZdTVYFikSiN12y2H5KHKRuFuoDeq2U",
  "key8": "nSbuUU4m38P9FR772wn9Yqw6NRysxC8F6mWQgyMrgpGgzWG5kMR6ryTNkmihkten622LRF5FthGbbHZVPvgVg5G",
  "key9": "4cr7hu4tghh8SbnNjByhxGrZFqwRzDFStGUtU9SwMbXxmX4aaUkXPi6u45WqPvtosqpyS1gaV2XDQqRS2vizjipE",
  "key10": "UA6uC58uG9W1SrUi3qpNRkt8jczbN77MRvhnUVAyHb8nBWP6KNHh9USVBazQnvFw9nn3RjCnEmzmzXoTtcUDZAX",
  "key11": "5yAKzPcQYqnuP7uk5TGHwEF2SGSVcaeLu5WcgDnHdahMNgNdvFbtw4cPgUrnRSNcnDQspAqQJg3wvKJQn5GuVVg2",
  "key12": "FiqFzS1Ycv3yDnYTqPMWJes8itmuE6uKgffwjRGrPvF8VaS2cLLpoN653Ah2HLUEHUq5YS2uf32ft4J3fJUZVa3",
  "key13": "5PDxyyjAYfNi9CFSNVpior528zk8Um7ggr2ZquS3Xpp9iN2vkwsPMLyNtMjiri6bp5Cjm2X4ttDqrfK5QGBddXdv",
  "key14": "ZgC3WZ27FvNmWxqo222W2LzCfynj22QDRggs8o4FVj2tPbN9XvKKDJZwv5cm3CqohMWJtybtipVd4J7DrcQ6wxm",
  "key15": "5hkxDFY2bCCSqyb63S43NsmhKJHBYhY4uFheze4mrAhg7pQYHFw5C9aRQjCA5PNFXGBUi9dik9sCBDUs6yLaQKuk",
  "key16": "3kq9NUdsAXxF4CK8e7HjF3dgqLHdapUcrrXJhZhi6BY4bZDgkvPzp62HP91YnuQUQjbddvvUctpRhLnTrodkuzUx",
  "key17": "2TBJCYtQpxfSRFmf5688QRDKZtjiqXZi8arxQ6JWDT3MMhTAGnj6mnZ21yEd96YwBDq3mB8DbCvKjXW7ePpc8ex8",
  "key18": "5gqmBRhFHTnpvCud8eVDkRNGeaiiJyWdWcog4bSFRTATChX51S5yUE9gtd6DA1zzFB6yxpXpuhgX3HkiWgap46eG",
  "key19": "3yZ4JDCgQVSy8ww2VN64z7P5q2gBLCENsxYpZzyQQLmsceSMYpSfakhFbRHnGSwfMjKmDknjkpFV6P1osDjweAcY",
  "key20": "3JcPeYnrV8jes9n8uEQpMrVQsgCCW76dEmhWJqs3EJacsY93E88SAJoXvUwMaLGLB4H8zzeYNDjLDR9Ad6dtEeai",
  "key21": "zRDjvjW9BiPMsay8GhjHFSfZRiLujA2fDA29F4GgpFUiTtKe8PUF6z8wVsVx3fJZ9XdAJBZ9tFH1LWe33LFqsDM",
  "key22": "MQKXjzgCsxJXgXv2NirCLwiJezDwA1cLihEQFYXNUqzczZFWpvWsTMKG1zseMZ6AE3MC9MBnw3SJtf4aBaEXZSn",
  "key23": "2Sm9r8A5tNaszFzpmmvb6GmCKSk9LYGDFq1sWJvgv4yBNJaMs9FS6xk1DRGHzgS7zQtKV8PkR9rn8op9fd5A6YR1",
  "key24": "5gmUS9FYebKN2QDfnB4nhtmmSYgGdoRwKmqjens76GYNfAkiXQsQUkn64AKZmwaTxjYGkAa5Anhar2UPbgshzBe",
  "key25": "SYKx4qmhVFKVdmng2cURC38v2q2c9xsmja2NYXrxnWqDKArv5L5i6bi2De42iJCL1YxaWUHfAEpNs27nmkU2wgf",
  "key26": "GBiPJrMga6Pj78AMFpaZfV9QQWWBVhPDwNX14GJDu5rFNEr5EYiYg9cn5hGP9MkABpQbtth3wY3w4NzyEiFurjf",
  "key27": "zxQwSk9KVbd9XFciXm1Pwjx738tNbrLdxYT7PMr3xLeQ8Xo5GW7Rnbz4YiTfuy2wj972yDKyyxKfL5MPuSKYix1",
  "key28": "5fh8ZxYRkT6FsJzp6MNY49szZ8CYMLNnmhZ2WtXvyb6kSAhCDnCiCRCvbRKxXw46jfYvMH4nvxdhdRMvHqXwMmez",
  "key29": "5Uvnc5QkGu5dwQQnaHTS8L34Lo7Ph82oWPjYkfxy364ch4DW2sJhMdQS2479iaJtQ7xJZpfuASJdvGE1upaZikA8",
  "key30": "2dcr7uD4nvreaRkYW6CfagQ3s1dpN78dSdaNcCPqDzx5TrgBgJHiSntSX2aX5mvMUSicZfJAFQeB9awET5spai1C",
  "key31": "3QVkMg5QPjHuakyd6xC9rbFjuqJ1pUVW8ETwdAzfMu2h1TB2BoffZ314Si4RuHbv1o1XCMX344mHDBEAR2Fwoc79",
  "key32": "5xrJdqYFWPyzCsiL7rF1w1bojpC3NWCHjtnpg45BT8MCQidPEUxDZ2KQ7tzeYJ2MdzgHQzrBf5RVoPoHutas55zy",
  "key33": "25M11JyaM3s4EpQFdNExwM4BAV7GNGGCBe8ZfxK4ZB7JiwZoZNEhBivZRh7i9hbe63aFWVRSBFffBFaDgmT6rDAQ",
  "key34": "SbNehC1XFLyvfqa1t4yFimkiAGZKghvHrjwfx1V2G5m5Wo7QP58aA46vANNupTK9MFtpXMGjVwMW9MB7QXtcsE5",
  "key35": "3P3zoAW9Me8nC6D8A5x4r3fn6fJ6TKL6tFCj56HqLJpjJy5Yoxkodfvpo9Q1GMjRhCdSmpLq2RnB9XkkSA6K1Z3i",
  "key36": "4bApUSysexCHE9iUc3SQqVdj6QUhcHjaVpeNLzD2WaXYQR3x5uHP5wTHAYjWobZFmvF97JdhZFz29ZCaTb92JbPN",
  "key37": "565Vah4gwqLH4o9fpN3bNv2MMuuDW7n4gM62rdJK4xsxDMZAjC8BywvmuXu7ci2EQyo5ChkK6hEC17r1rH7qKPWt",
  "key38": "3rSRC7BD4KS7oANQ54c9wzEpPsJk5gaVcMsRvEHrcuLB41q8EXv7YNQJn6V4Jac1F1uPy9Zp92BYeQhw8XLMGbRE",
  "key39": "5W7mjgmAjWt1uAfJr4tpFpbobfyj5gCjG22XRYBMr4PDuF2koXZT8zHEtEyKVtUvM1scVu6RMD42KMCXMq67jYsJ"
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
