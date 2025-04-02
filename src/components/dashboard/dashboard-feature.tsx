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
    "2dYMLi3sWMgacPD3aEQQ52u4s98pzBQZBeqaqksoXf7f1WpMJKf3wt2U66yobzHbH5FXo5j4vpwo9fRgqr12reb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zURYVQvaBu2bffXaZmAhxLmhnHBAMDE6N38MWvioJj93ujhHgs5oWv5yUm1iLYXKXkoTnwdAT74yFB7hYSXci42",
  "key1": "94uENQhF1RzFYMaQmnRYsDkKo3whZ7Y1jow1qT2CCBm7U5se41C8hUKYUYMCxDxYsjQ9LpRL4TVVMtgPkhPSedn",
  "key2": "HhiC4MvjEckN5qHQALF5Kn7gQn6ABAjLSL8JeXyhoHbwTpERNU7jUzR96WXwhA4RZBoEGtAkQUytaCAosBcQBTo",
  "key3": "3nmYgzSrcJpjhyVFEisohan1Qgqxx4TkoFkXZXNkXC18oFbUEa89H6N8vgVfxxzAYiV6qBqoWq5REMjmR48srHpH",
  "key4": "ED7dQVztpdcvCb8zb2udUQREpN87m1rjuR9Pfytz48bD3U9K4C73opqGCsKXLr1Gqe4R3dziYZRLS6XD5f6bGP6",
  "key5": "3U8SJwdCecC2CSsUDbCFGXzzwQC9yqsbWX1nnqzgbeyJAbad8BHVi2QAArehEsDqhLgCWMY1d5Dt94Ni9iGd3f6Q",
  "key6": "4Dn7KomazGSm6ZRvdWjV8c3Hcw4fowRpqcuFRMoHgd8EumTdHtQ1ckGWmjWnxd7knPkzSMrrhWFzfNPy9VhdhnnN",
  "key7": "2otz5pDHwvHrpCzPYP9Xk866vF3tGqfqg1JqhvEi5cFJQtVrwhPp2Hgu9xiDFJQNvg4VBoxVKCSYeghB43H1Vi2C",
  "key8": "5Pnr44rWQVPRvbu6YREjrb4pLrq1WNQR5wLy9xHXskH1VqmuDHEufAVgm1nKmCtRdcwqumN7chLd2qPR3Kssez1C",
  "key9": "5TQAnJYGtfj5SVsaXjRmUvmR6V2gjmTuJ8BFszzSHtrXgaTUToa1Wgb9KHH9juikZASpi6MGxkbkHHTEqdVUPc82",
  "key10": "3wS6FR9o7pZ7QW2xcRxD3qYTB2XTAtiKFg76g2rbShmLUG3WwDiyJpo2TJVjqSjZKKhd4HP4627FCjp4y24zS3ru",
  "key11": "2FPTDc1UyQqu7AkphjJ7YjZ2XWoUb5giKbFdMabCYSbzjUqmSsSnTw1ejE3kXHPD5CRzssQuCaXG8sAyLzYFGBN5",
  "key12": "2KLU8cCzZFkLRUB45ez9To25wWosD4sXh5vHPweDKz6MXKBBdNtofycron7Q3Rwb4woMDM31yfW8t6pwMHCHBc5R",
  "key13": "2bsSdgYxdEYo42KCKQvC9rJoyERqypDqeBFprz8m9XUtwhVauRCHyVkYhGeoJscDJtZJ7vpGHmyKmV3i4poutED1",
  "key14": "1FQMdtA5hP2R9ocmyz5zfjJLjq1LVGbG7YspnMTSEYvdsU11Nhzjdoyh82MoMUBMc4gsnnLQgpbyFsgH4F1gQ1w",
  "key15": "5mRFLoL5PeppztQGT8oajWjLDCBK3hxBsJoYmNHkCV2w7UdEpUaA1uyHHM36EhELo8zuxBwdSTPo9ASw22RMdpmt",
  "key16": "So6svLEPvBEY3GMGNqECw2AjJ1Y141Q7zFfsM2ThH1XqbYnD4icXcuoXY4Ggyo7c2fbqqg5Bm9hEq7G1EzrHfNJ",
  "key17": "5UERWdgaJqDYVb2qq5gD9eoAvX1WJrZYCggnZ7FkiPDFBx56hjqss3KS3Uoj8zrpW3YHxACkaNfebL7RMiG5eKCi",
  "key18": "2hGoUs3Aec9jC3VdqznabaF3oqFtKdexpomAyxcMEDKDS1bNdTkjwLt63CLsup9iZcgbCQJ38ifvbTsQnLJPZeye",
  "key19": "evWEDVJtNeeT2mYme48VhLCwXN1vPh4gy2dqiCxpMUzqpQYbTtjQGrXsGkYWTFXmTgDUhuB8PPbLqYVxNL9JNG1",
  "key20": "MPPVxH329nHabc7SRKqe3E1UZpyQk2cFH1ya8RnxrdgAhbNT3HJeT7VVgCbKmz9DzeSLgYwnmiYev6apVRJ6vjf",
  "key21": "5XMvmuooEjtV9hw2GDsx9PJ2TWziHQK3M277zaWhMZdQbWjyUHSGQG8BCwbAamdeGwSjj1TM6QviFADU4yUDDozG",
  "key22": "NV7EJYeQk7Jw5URRfBqwqLSYxbkXFkK7wq3iM2uziD9E7PDuhuv17f9TQ2g5nMxUNrSJtHLY2KXzni72LnV5TPB",
  "key23": "3JboC4rqaSzTEWoVf7kbP1XcySkAWuqeiNcztDqYRW8bAqoGGotEfqXmSsfESv1M8gXK7CGfjJPUiEBuqyFznh9e",
  "key24": "57HcgQ2p5p6o2QaPbJATmGhzzjVPEWPPwkwrfsjbpyKMB7bAMqb9deap2yAqJ3YnprMkbP4ThqumZfyTTLVLJvEP",
  "key25": "yWMkHWQFDFZpdHkRecqNBf9fU7tMPJWG2DajKXWKhPne1oXGfVfxGyZ7vcvmcbypfh8qiAbtjg6x15vwqMyxcre",
  "key26": "2RvTtZDn9yHdqcGgjALoBcGukVZajjUFstmGtzgMwHvJrYwFCiL8riJbkRfrL9LDbgmg4RoRJaexh4BnuKMnSeea",
  "key27": "2Hz82p3LRLe48RWLmX9seWiQYyENoa6wULrWdtAGitpDpsGByuzs584AxKtExpudfueBiP5fYhafEXwCPBiJq7Q5",
  "key28": "r8MvmU99mPUb6CB3owwHUxzL1q4RMyGxVs62s8WWm3R562kWJdNXqsD2MFT7sLJA9uKaGV8LwBGaRspXqwwKghX",
  "key29": "EPitkra8vVvNEjDmnMqqz51pDxFNugPeAeyx1ypai1FpjdRyBAEAcmqZgFcaL1McGewyyp8RBseTsXq1eqF1pEZ",
  "key30": "5USHdAdNQFbiVFuzNT3nD9FCcJeKVKNzeNaZQr9vubtKB5BGvQcHLYWz2bBviMNBSaZhHKvESArv845eZyMpG6qt",
  "key31": "412UkkwgPHTQhZ3F9X8oHwoqVkz6fRvqxxVt92XMjMfoaJjW6zXtycw3m7mMcDmRc4eayNXWNL4LEmzKompt9TkA",
  "key32": "2vMvw8HB4boGUvmrVubCgoq5maCySVLGrHpXqBny4FkvyL1cuupuVkcs7pLpFwFP3HBn32mTJAfxwNYUhZf5stzi",
  "key33": "5DHhvosopjWVfdmpJgrTeqyHW6WM2kwAJzwYpwviXemHPzCpDr7862K4XU2bYDeMr9zQFujhjNK5gkfeeGqzqpGD",
  "key34": "XktVYNuqHUy5izrmx6J6Ejg2CvrZFyq7xSJecf36eKHb34KD8zmxmPtmzLwdCEqjAfF6afDFFacYamS9cYHLBqR",
  "key35": "2V1bmU2CNXeug4bFQ8FtSYMbGKGBvyhR7eJBA9xhP1jxdEFUvHnxuFRu669U39Ef9X3wwqwdFbqaPPb1LH823Sn7",
  "key36": "kmuYyAYssnFrmtdAEwAUqD5zQaAKPmuTwPXs9q5z2tQtxeXd2FnNCFrkQHDxfdbdDSNfXEawpynsBVAWMsoaZQ4",
  "key37": "3xCW4p349nB7vPJsY4EZafxHWNASfapPQhPhrDY5GUvut1XDBd4G1xy4ofzyiyZorFNyyCdwGMeRAKkBCR9gHSCy"
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
