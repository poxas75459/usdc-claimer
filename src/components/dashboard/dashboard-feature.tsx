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
    "vKERLjvLABTABXYCRVptBwb4NopMa7z6z7eYXB7gJZC7h4hUu6ASZymKoikQ4YZtRDL7ZBJ81RbvHAXJrebfwM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519eE5xCYW3FS9QtosrhfT8PyHmpn4q2H3oX9EbZDQ2Y8mp8JXkTVhP8A2WCLv7MonyYJ8tpTJ2m2T7vdMPHdi9c",
  "key1": "23aRw258zc6L8rWGc1DrqzTmd3o8SY3fPJ2635U83h7kBFWFKhhSh1cQkgc7KhSHLWb4J1gprBdPERAjUotWjq2Y",
  "key2": "4F2VT4yNQd3rFRXSadATHsvUkxbLvgwyrppdyBfdAJqHF9AHkHeDFA3kotRsU7WuEc4FUDTTPmL6WNq3YECJ9N1t",
  "key3": "LybjEtn7SeyqcAR6XVqUV8KXkeb4WeiD8hyRywCqR3jMxE8uqK8Mq9ThByKefacU819fXphmMnT2tqyUvKvafHs",
  "key4": "3VjeXrciFoC1zCGnW6D1dS2AEd48FwHqca4G87vA8BXSv7bK16BUcUyxAE8kN6hnnw74q4S6CksHiiob1FxZBsjt",
  "key5": "4r2jizWZRnB8MUJAEMxDDKFcvpV1tjXB9PaHd2BhBmUqo4Amrce9wCJGNBnFhriJLoGsNVfbzk5W5AL2tWMC2W5W",
  "key6": "3z9xm6xLK48ThzXYHHvvm11e2C7Rv6CxPWKuDrMkne44k6ikWrcnao9kJwPaniCJvAWAgR7DBT4PaDJDVoeGPWmW",
  "key7": "mjdjyRqi383BXHaKZ355T95TLsvg3i1F58MkGWYZjKibCUG9ruT6tz7bvteR6dpYoHhiaJvCZ8pXraBcZ8Qipz2",
  "key8": "46jxy1QEk42nvKpUbfCc2T4E7pFJjB8JgESfLPXwGf4KW6CU7Usy8U2SAhTAzabztRc75GdfJByrscNGVxhMEw9L",
  "key9": "49fGkXxFFiY8RYS8FJUwUyQxeLNj2hS7f7muY7uwAwWkiaKiCnThRrbnX98ZqJqWJd3beFv7AvCwaMhuteGPWmrx",
  "key10": "3BE5eFwHZAzRaXEWKNmhgieyZqyBycA13mMBVVATf2hUh5eamjX5EeAv2bWJSzjcbLyQmsHtJneiXMy4zNsCB2xK",
  "key11": "2EFNh4RtpGVWG7eyasMmkpSkCwpbpdqGSrE3zC7wGdce9Dj4eqveE1T3KrFGXBhy52qA14Um4WyGAQXVbSuzDpRf",
  "key12": "5zEXwsHezwapFDuJUWCxfpPmv1z9DK9jiHvgnbUCCWY8Ppd1gYDE6psQ7gfWjvf8mXHyYmcHpXj4zBg26e4uUhtw",
  "key13": "47E4eBpqQJZLPZk2fDrzZWog17d6xdAspbQUQy3pjrYoNdmPEKmpAENp9FwYqiSUn3XHmgS5Mis5aFQFh6a4PFAd",
  "key14": "2LNZbkybzx1EcFTWP7TR1Phqcc7B84pk7jbHdidmRVoWG1TNj1jtMgm4D3jMguUTjAtSgYWYHDRDXTvZiAXauETt",
  "key15": "4v5rvxa3ah1E8pn4YB39sCR4pSgW4re2MG4GUUKt7E1j6yzP7YiQBc9hbVVP4b2EdMw8xneFNBofwcGaLpzNnCCi",
  "key16": "2pMSbwRHhUYb76Fssf7ZWnDkgkhc4nKJzoU7prRoSQFzpwRSxTNbgy5HFfTn8QQLBZqhD4PjfYszbtFC1hKyfn7r",
  "key17": "2Meg5tm95B13MZbqDLoCqqmYoYdSGVJtyR9qm6JMxchrzFLV2tPPG4BQSt59bcJLj5xNScfvkPar5uAPGpZFaawB",
  "key18": "iuUFbydukcY37zGxFST4ohmRSQo9treVRBpxBf5n1exkPj4MVdFCeQ29nUf98mCHKq1zbJ6NafAUrbHZTvzLhKJ",
  "key19": "5ptqwExA9r1MZuXsDM9igBDQk85wf2DnAC1JcbxwrBeYbcaXggG9TBto2Gu18F9dSSN6uMtSZQiRZNd49jZg4Fqr",
  "key20": "4ghtQrhG4CLX8VJyZQNYKQtAnMkqT41mBZNCqPWLrBPPmwVU5qsWvwmJeGDi2T9AjD5QHFAyYWLau4ZzP4N8AptB",
  "key21": "3zhjQA1tEsFBBetd5Fwmyau4vURyiT5vxHH7jY5saMKNq73GrTctUBAkVU5od7fnGExpEDdohTj7wCVMTmHDJu71",
  "key22": "66YtvRq5R7o5JgUDMBTiPpzd96zV9fke5M1GQfQ5CoEn7bB1jvaKn9cC5ckzch9m9fZk4VDJFa3Ui2cEcuC7F6Gd",
  "key23": "4mHR6iT8Ej62zKQo7ebsNv49EKHDimq2qLGnaQJ6khgK2z9qmo6x3GVETsPQhKRNUQetEQQE6oEbpikwXsSdGhgb",
  "key24": "3zgG2mHdLSCdvZDSYrbDTQfZHNK2i9TcwhEc3ZJEN5w3jcEvJjxiqjcjQ2T3qqt2gZQ9W346HV12dDGXW818m63R",
  "key25": "3uwH4vQSpudE3gyoGvdnZ2y7fi4mXowHi5SsDTaoqqGfajM3tu7mDsmCeU5kNfhr1QsyZkpUwyPhv3vdTeuLanWS",
  "key26": "hkiZV95zVHBUVFYAvCqG7MtprpCU2HhWg5bXJSgCd5Hyo8ubSavPbPXD314y4nrJiS8qYEPpzCNPPu2ECpy38cj",
  "key27": "5AGyVzr75qFHDy8svh6732SjAafMvMEGnnkH9R25rZsXE6dftoBu5evwtF8EwQFS29bcZ3MpygqrsQeZ52UFoCgK",
  "key28": "5VbJAaeBcsGUofGWMCXfXwgLjACc6PuUaBByEHcntD5vrzJZWShj2UearcADzng6wT45MQzLpUb4PDJEJrinXhkk",
  "key29": "58d3qAFfD7Kb9BCn9QedU5HjNXH5itVQQW9Ctox5GVv3PpHoEvnZkwNc149TXmfyiYy9u5EWeko9uzWMsCJ4VCPt",
  "key30": "3Jfz8Gp1XxvLLH1JYZrGvv6n2XkEpeZwLQBA3PuWrBEkhAnjMrKBMrm1bZPit2CBeYF2JYGSC8P7fPg6GUJmKsmH",
  "key31": "5mvTbPqmB3XbrNFPMtrLMhYdLLzdronHGqxvopmeCgBpmEvcyjW8oG2hqtfZnV5xZSXYmGFhY4zSuH4KJTyGmkHE",
  "key32": "2coKZrgNPjELPXmDkHGcZchQcQ13qV6AGKWCX1FLdBZVd7q3HgJu7UxGTKK3YfpEJy2PQc71DeFfihdoSQBmLLCN",
  "key33": "329gR2f9duE6yX9ftMqS5HCaTuUfRD9GXDze8mWwh53SYHxSd3bJfsWQnev7us3evswr2D26grYrrAWm1W6XMNB2",
  "key34": "2cdxCLWWHAxR3jdFuUpJ21AmsNbfwTbCtMRH5WPmvbFVjwa6dUYVi4y88BfoM9CNZdBTm1jP8wwdWxnG3ntF7kn9",
  "key35": "5biVzwvZLjbDGEcgiXsjnwBfjNk78MWGwTauL2aH6hDhPuYFzBwGf9GELGmxj8u9EoPpvcbh44j65ChM3PgGKH47",
  "key36": "5S7w2VNZbLxz5R3rUJYutSNoh7HqmSQK4fFw29AxLN7M7L6HQjUcr63yoftkruwmUyeX1ncQBaA9GZMAq8tgcbm2",
  "key37": "4kqVbgduQMNGBNjjsSCKVttci9gpXHQE1jKhQwbT1MS16VJpE2Tbt8a9wQzUpBit6d83SHRyUXEAYvSc8z78zNSQ",
  "key38": "35ovyj3d5hsbcco2HUYa2KpgMPnncXdx37URLKbbc5SxPpcTZ9axBiwgiFr7venbC1NuUjyjubda1ETtc3bKy39P",
  "key39": "42xN5i9gmxkm7G4G2DYcvvfY8NdsMTCCjjDGmfBP8mJYi6uAsCMTwWXcy8szY9GX2ZhmdjBz2Jo78ebLHQYymk59",
  "key40": "5mfssK9TActZAGdwPQgrLMBtVjKveG853HRndGHu1fNHkr3SniUbXQaAgwRb1Mph4FX4eExLPgLDhCaoyszQyqzT"
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
