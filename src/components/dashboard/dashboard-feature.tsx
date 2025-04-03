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
    "5D271qWZHxUe9StPZnksHdXcLJe6kig93Yru3QDDG5tNku4E6TQheuauVZXg1PszaumoX1BymTAAQMsotzY7jj9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYz3BBxM1gQw1SiTFFPuvJiXMsSbMbp5fBkhy9rBCfWG2ZSYgxvzzs1uyb7uJowpXHsibvkAcbK2SVNUDnngnad",
  "key1": "3yXpQXwz4Hx8UsLb5x7ioNfZeAey2c9whXVFfbQa4BXaqQRwqnD3GVQJyurrpB5hRxjb8hh6hagSZZkRFDUpy7xP",
  "key2": "4FTFB7BXzCarFiCvsSDGd4hgJh4LJ2qTiwuE3nutv58sbZY25grKk87yi9BiwdYdrgNfPP9MaFbt3B6rTtzzadN9",
  "key3": "34EuyrSp5TC7WaSKTLWEsbgR23FqWsq2aKpZyRY7yZJYvksptgoPjDHXHgsTFo7KFR43My2KvTtM2RU4TaLhJF1F",
  "key4": "2GJZYXrgSTxosG61GgZX7QY6LKiXPoLS4NFtBECLicHPWZTJyBkNEyBKjE31bjyyNVCoKpcLwaxPvPMgB3YsCuj6",
  "key5": "ufgFmhuh6iZcmdfh3tVrQLYnWsM1TtaKAv8aViNtk2FDqkxRyHHok89Sy5D2ys9GWLG9nJkemmePYKdpgRKiyU5",
  "key6": "5KZvGP5uTnAerEmogAETorC5Gq8ozQm3jrTsdoQPPbPztMUiVgSeCdGDDN824nqdEjZPZxeUG6Pz6kQFYTBFykRD",
  "key7": "ygZXn1iQ4Qe8sCnfxThfiqCWffFJfaA6KieJ2tyaqNHNHDLKot5SMqHhAs6FeADuS2QLJL3PPdbQWWotbu98Cij",
  "key8": "3RTJhDRuLik3jyRbw5sC83H5ssCMHNoFbAhJhq1Yf8dS9B5BoSkMyRCsGsgEF1rWz5FGegxDdJEdNYfxyEyVSLKj",
  "key9": "3LfZC9BQDvDvnWEfMgyMEMr7mjCyV2bD9khHZGbxytmvbtVqttC6fJPT4wXvnatfC6nSV8bGLBxuDsYzdAiEG8Vc",
  "key10": "4FdBsiscgzMsndwQQsUs8gHY4oRvmjHLgok5mxmCoG5kSjupMmUS9AuVV3KWCToym89SFNV7wg3AxK3V7nKPrGnK",
  "key11": "2v64DSRvh9iChSvRRrYFUcQRdH8tkTTDuU49xL3zq349XJnPBgXJ6k1cza78P5WvyB2M8edJqoygBkNVT5gNPFBC",
  "key12": "2mXgaKS3NPgBBAZkxYK3iaEM53GH2fjUCt1QLwpXPqqhPdpHwNXhmTryDmwjCpYUEoUb7neHREHN9qfVAGvnP1ye",
  "key13": "4mZEmMRQ1pC6xySvxWciGEaZpuQS5wFd8eGfgmeDQAX7PR2PL17GFvC9nW9k992DiQxW21xXcsfdYtkRA7MfD3VA",
  "key14": "37xwM2jPFdswPSJ1YdVgeSGnwDJ6FhxS81JTwRLm4LKU8oMsVLfwN4qpvfHrZZm12p4VK7wquHCELkMQ6cvLxrjG",
  "key15": "2aLc2eCoqrpPHLrycDmpMtfHdWFHjRcTBKVCGPjTHV2YWegARGwNsL2eacDrT5NNcwMD7JWqpoM4jQBxqMjz7Yy6",
  "key16": "5dXRDmSQZGik4BoVbTHwapk11pDtAcZbsRfeUoDWySQ1pmQBywPvsjcC8Lojcn2VdGep42mavVL3dFB1irMuXJZR",
  "key17": "2gkuYTzM1pG6UvxH72F45ajsv6ijwAgNP7rFuTy5bGkX2iVhJwFPJsw3Qmze56qcawe6oH5HwnDSr4dUN15QSwJe",
  "key18": "3vDz6m7j859XgXzGXUy3TdKoRT8MF58EGeiKSf1ZyzUWRjTRxbYMMPTyBxRWnd2GCBPzSSWSsuQqKvUX3jR9Qq6P",
  "key19": "56HamD9jrfMEShcqsk6Gra6Sr7exp7NxHPGxDdKtD9RrykeapfTXT5WniHbB3cfTPViPitx11icw5C3ESkz1gDPA",
  "key20": "5DZa5LrXcuwCGkp1HrKovZxmHiCAxSi8t7QzXsHUge9kJVex5mVJPzigJ9MNhdxKAV6rSUJ9p5UDeigDvfi3LK2b",
  "key21": "pX9twU57GAEoqzwwZUsPyFSiyLziSZdnRKH1pzL3n7zy8g2X7WcqLowTpqdESHWZoGrF2oSdD9A1Kg8zzPAhhi6",
  "key22": "23q9AHcfCE8qygxoBP42tS4wtbwiBUh59y2w6H2kxvtn7WpQGGM3C4VbxquXEwHiMHaVJPXmbPDWUxazCJSrGGjk",
  "key23": "5P8yikxoY42iRVdwLvV5jS2LPjSL59XyE4kShcHQE8LkrUBKLLMvvxFcToSd28x2FZ7gKkwjPH4c5HaaG5WsRY3F",
  "key24": "3bSQhggqTv1XCEYYx9jTZQBu1NF5n5WqAuUERLQservQRef91oGJMhgMFsG943HLuLYZTQbvwBp6Md3NVk8JY2s1",
  "key25": "2U7EkNBLXG7R9vS5N7XFx3qpFUv6wApW4k4JyytpQcUhkEX9psKgU96qLHDfZoXbZCc3jFoGHRJsB2bHFiaZKCLX",
  "key26": "3Vj7FG3k6imQCUwswvgohTuvTugsw33d2UeW9YEkHotYS7tVh1WJcQ15DS8utyGNNjWvNfrZ7bCuF46e6noh1ZHf",
  "key27": "35exrnGG7ggUKrpkt1u3KvfoDaJRqstmWfruNBvFiy4yCcuTZVHZ88s5Fi7t61EpvvrP8KV37pr84jj6dNKEtnQi",
  "key28": "5NdoTA9gxp4aw2yJzJ4cG9piHcKSKbwwfKcseUw7qE1iRTZfPduv4kWyXsukqvyNJPXsMe5kcAPr5M6itg5TdJ9f",
  "key29": "nr54RfVMTnG8xq3A4dc6Yq3Tos7Dt8PYEj5BhN2utmxXYXFot6dsn7njDkkqPauLHdVM7jso6zwGkGxTCnDjedM",
  "key30": "5KWNaCQHm3bmgsW9bZQPzvShVadPw5XzwXkSPcxisNYucdc5FW7k4qsS7tUgZBNDxETuPscb3kTKf1RE5UP46uej",
  "key31": "3bC2retkGFmWrf9JSVGguA3aYPjhQJAGpUoEUfw6RXAJHuYxVozJqUi3wBUwdLb32cwnnGrkfHkACJD2GTNmeAWS",
  "key32": "3dEbzbJY3csSn8ddEsit7N7qr3YEUias9RQsjR3nfjckaJGCnEk2xphg4X6EpfP9FEJxdRiV7VM6HvJwiWcWTZMD",
  "key33": "8iehYHij6GRZvX3ePANqmkeWcadkBn6ruKUKfpqtDNEHjt7wmSZfQpkQuqCqtjzomvPDjkRcZGHjoFFVFD9bYdm",
  "key34": "5nLeyBcqB4Rukdh1TVt9jNR2JLEDznVWxdDzbTnhJFAWG56bo2r1AVtvmYW89Bv5xVttCHFTjdmUX14FQcMpcKEV",
  "key35": "4rTaSfsL7FmkUzb2ZjBciFVSFHEhFHAgSCmZeDTCdXvET6DXMt9Nxt5d5nRevPphpQmxfzPSHGR6TnoMRwetbsP3",
  "key36": "3YnwqdRaw595E4BKAmBMcDF3dAFsnBCKphNzpZD61gig8sBEsMadoy79R5xsa99TjQLBpyRY89Tb6W67p298MoSf"
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
