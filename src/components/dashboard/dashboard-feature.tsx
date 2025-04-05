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
    "5Xw8EwVd3qYPpAf7HBvKf8oxPvxfPsY3HBpNtBzeD2P3G7a426oZrUdBbgiRaNoJKiaMWVvn5AKprhZcRv3MLxYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qyg5u8GN63E21cSnEjaDfYBuTjwPZfBwyjmCYVWwWn3TLPR5GihHShpEtxPh7XiajuF4RpRSLYRf1jAgLyPutRq",
  "key1": "5dJZFvw8hC3v8hyUyyM7buXpDUheXzp3d5fPDQ6cRr9wbMVZkPHADdVnPL6ZWm8o6CVstuxdLPJokTKa8RZSVMfe",
  "key2": "4EpZ5r6JjewskTrSVKGy2uKVxYCSNA6QvozfAMPw6uqEQiiUHjzJhJuTuCtB7FTgJimLiFhT6z8bdGp2NQb2XBPU",
  "key3": "3Zb36CciVxquQAXj9CGzjHJ6CUyTBJNam3gy8rxkTpbFak9a63cXZEohC9Y7C3qgw3L9k8PXsk6FBSq2JhRrVUmg",
  "key4": "2FCePajMBPqtwNakwwvCLChXeyzoWPpfrHiugca3DvnpQmGnxhDWaBKdeKErJ5xL7CB8Wndxg9ubZAoxR6yj11vu",
  "key5": "3EzX6YKnDN7x4fhN7xCxaRYG4UAzogmSEgmocxGFUeZCwZUZ2JBsLtXmBnUM45Bvx2tgDUoXGyKg2fMqdnmMjomJ",
  "key6": "yKDD2Sw83QuKxf3bm6pRZsb3veV6RucmtQxKDxeeYYof1d2UuJxRrhF6zDPNdRLFmVmRuNZzH8JCRKMAXhJrsvg",
  "key7": "5vbkpLTkB7vzy8KYFUfuLciqHV1kMT4NiJ7hAZt8XxwDMEcSZyewrzLAfK4ZDBxTegbmpdDSvNQC5gRh3FFFrt3F",
  "key8": "3VDtmcceBNCfqa8qHvWUFYs1tk9SnC6Yhwk4wHFCkodsh7JdGtnaM48KLWe4vL4niH18K15tCD5mL5B3Vjd8ZuHS",
  "key9": "wRYJg5uHEfLBUhLyxezgeY5eD6HnEpVk1MpSpzimXj4KzioxzTtzvAvzxFJouf3r9fsciB51e3JeUfW6khA5E4K",
  "key10": "4AHr7v5kK3MrAXGv5PfsrEfKGsUdbvcjaHcKMYwhLddtP64w6fBWrZ6kuFm7trsRH299awteccztnXUNxByYHVE",
  "key11": "37C8MZqhQHLB8zKE7Gdm4uAXMKXXMs4uNcN9XFHNYCFe2NeuMG5BAMoLxijqDkWQ7zc6cWgsQ1Y3P7C3ayK2Bk84",
  "key12": "4tUe5fgoGsHU4Pw2fG1vL79Uar9znmUqfkk1BystCkxaFAQWEj2fMkq9hFCfsbK1gVQhVx8RjVoNgbpcxh5YCqcz",
  "key13": "2KkXEhmEixXrZM5rSxB6yS8yH13qUXnsFRjCcBKBydPPd194TJqAWoJJhLUYzLmrtuy1Ki6LXsHFcqry54kYcnTW",
  "key14": "4tMvU8JBUGddr5bYUpLks5xFxiQrf5dgtQbGQtzqWc4v3tqQZM82vztD7vszA1riBFe5eVm9tbV2rCowuzf4UieA",
  "key15": "C89YmaA2UMNuqyFA7nTqAUuShXbARGGAHXShgeBeBvmL2dAG9gMWU8PqksaC4PgGMoJnU9gYzFfUjCfcrR3Rg2w",
  "key16": "2PZtTaSTKyTbSPBdzKGbEeHSaSh4sx9wf5ZUYakPbovDpDoYb4PnobYvWs86kezbw7Si2GrRVUio2yBMgNeZ3Vxi",
  "key17": "42qpWN46ZETR4daKfhKKUJhwzMNCJUT2DR1jCwV42McKP1d7YL6nTAPneNiP98naanpFAp6q7jYyhySgSVdsh8ht",
  "key18": "gyLrqR65hkdbWLZ4KaocDryMGh5ZJUN1511UKukUvBBQ22FNjnjN1AEsNgkXF9eVnPSusQejRaSzBk99wstNGa8",
  "key19": "HrxkdqHFJRvQJDkjeEbDg6rR3sb2CaYTRfL9TknMfGtDumfq93HgHQghPJN6U42naHBbUCT7UYuAu7L979epx7j",
  "key20": "2a63FhjxEVpKWELT9Ed1EQWUUhniKd1sWiUSyoAkRnvKzUmPiN9U2Zra6WLcxJweP3zmZ9dHkNAWDPjfdZkbFuzQ",
  "key21": "2Jxx7aUejfiU4CoqZA57pR9Q97vvWkCt8YXNkE1Mfv4gvNWknQ2QSCmxXoq2ayUxy8R46LzvY3iQvzrV3Lhq9Vk3",
  "key22": "62Gv3a4AVC6aeR6DCYvBTj4QGpZif4YQHUpJSKwrvf6KATkCRuiZYUGLxshDaG2FaAEU6mVDjm3Be7pSQeo1NhUt",
  "key23": "pRhnD3PYkVhrvJT5y9uTNrFKCZKZzN6yZoKvZeAKHvAH7t3gjFRb4Yy4o4oLxoK3NVYH1PXoZ1SdNiv87FxQsPU",
  "key24": "2RyxENbaDMyzDQpnnQ9dyhRR4VdLRsLx5mu9zMN8wnPzARsWQ2oiVkTA4dp9xcvQYFuDg39jCeFtoZ5oQhCdHEgu",
  "key25": "4eyaFT22VDrqCAUCbRkZPYQPRA4CWzSXUBT9dRtby7xYgyThUPW1JT1pjYJeDCBZqN1TfqSgLVQcHqMkM3hqPVr3",
  "key26": "3TaU7LtKtoCWsgCRbRYdFXN7KyKja4dRcXjHc3YqdDW2wEYNckkK5fmewmAD85WEUcRQA7P2bN31L7sQVbUAdXME",
  "key27": "4xcQhEYnSNU3fjsYnMzba5VRE5RYCj4oiKqqy4FZJu39sX7ECBVjQbP2xMtVNiEXdkJCN2JRhY8z5tYaifUPtuip",
  "key28": "5QEqfPim5yCS8SfW7xpDWn1ZvdJ28DD2CwNbU6HXKt5wWr7nQfAR6tbw23WGduGrvz7wM3jPqfc8RyxAmYtqVT8s",
  "key29": "4tmneEBayZP9rmEtivMnEJPyu2cjUpS3CtF2XjYLd4cRKXNexQAcyQHKvkF4VWjFCGVzptkJXGMoiPwgBbaRChEp",
  "key30": "4N7Rd7pGZF45f9iPTVVSyMoSzLxH4umzyuq7sm2gyRzgCsBfxcmDBgDR4n22vjixrt44Xqw3qmZmqBjWamqpjFSt",
  "key31": "quQzcDjH54WNk1XB2euGRPD8NNHH5fk9phkTWwnZAfSg8vrzEtweCpLJoJ79QUno84MYwMftJqjJ6aL4Ax5fikz",
  "key32": "66fZeN3kJy84mWRLrfQ2e68CRCoDWStpppvqKx6HimgbWvRPfXac5XG79Ae2x2dFCtgGaPahf6eHnfejhN894bPt",
  "key33": "3yP9ZRTAmHcyzDvizHaivrKVeMMz7ixxUvfPqU4fe1UReLV754Q9QLVHX8SngrBM4Hi1VvvgPqkJR5bgsuuZmMeM",
  "key34": "4tYHcentP37ZuQtfvMZ8Emm4NZ7rB2SBKj5i87Y4QAdhBz4d4r8bseJp8QU6LdZ19RXi4PnDq1iyAuvQtjgpdgKy",
  "key35": "5EEkLKxNhQ5p84YH2VV3tpdPxxDRYuuKHPaexEGFuo9KV9WM7fgxyjs8Cdb2ZNDL9iRVHv6vnrTj1B1cADkhvKRu",
  "key36": "4obDDsdDikNyWooP63xzaEsc77FHSBpJEsBPze2rmmmJk2CN7rMr2xhmobKBY3J7ixXgeQ1cJTs514ZgGh2gvpVv",
  "key37": "2GNJXsNF4ZoELYSQcJLD8YW4Sj3tuzFJo5XTY6jxsR7G2tRTVViqXtcVdeeM1aAikrjDTzE98iPLkGzQFnTPiLE9",
  "key38": "43Bd3c6PbuTGXbHjDDK5vrBQQh8GXFDrayXDF7tbvFUAdgzJPo5pCuvTVbNu7mkk5HArXF8Ca6zYQ61xJsUgDFi8",
  "key39": "5euCuAYZ1JmzRu334Fcs5cuPAfR5QR5gC5DiiCLxS5xifvxE9ta5UJYPkQ52qD7x9bqpav8vzWHMQpzqLSm8AmFV",
  "key40": "3qJVywnkDVspvHX7aqxNxxgFgfdTixUccPovYSGk3t6QRpctj3HmL39WGsgDu3dA5H2DQUz3pQM2wT1s4rgE4zbY",
  "key41": "5U2iwYz6YEak2HEpcGBjftrkE9jvJLtUaTdWGyyyUDd9zpQJ6sG4bkW76owB4uJVdP8gbN5uCKWbBkKLnFZKkbyU",
  "key42": "2Q5J8s4VhqxRWQS9wPXDVut7g76JrozF4gRxJbTdaoM2sXVFPLNnJXR7Jj1kkunk6E2YXNLuVCnAmeEHyQ4puvpG"
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
