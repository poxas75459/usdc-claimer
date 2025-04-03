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
    "4ZjoeHTHoMTioYN6AYDz12uv6yA1uacKmH1KiHU4LABgNi1aKKPV9X37nLffqXCgU4hRh5K78cihU6E3fhFUQou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NGRJ3hFDXyf3jCzpWCGgHfrMHzau2MCSpKNjufdBuJYmZcUdywA3xAmaKQpXphEYCiC71SqVSYKWsWvyKVT3eop",
  "key1": "gDFyDVPhyXhKLUm8jSwwoH7Z2MLLLr9vdw5BnKUp4GCzWpXw7LXm4HXRQCoCMgnF7ZdHf1JoNAEe3QtBgUQTXS5",
  "key2": "43LhpuQsrKSFviGuWyXouKAVpGKR9fA7fk4CtSYi7yZUcftXPG6G1MUtbyF1vEyCvkHCCuod6vJwvNx16rFHbUB7",
  "key3": "2TXgo8vtCVczAbYjcPdXZ7k8oxvgtgBtXVKH6X5C9pn6SUsANQnz6B6QRfqjNQZwVUYcd2i4ofMXZQkBq894HMzP",
  "key4": "QGb7UMMqfRM2yofqgdHGHJsDb3feViaKE7dvWHsvn1tzfw5xbPQ4gpB2fUfHK9UBb6LeCFm9SvSjbD6onHmMvKy",
  "key5": "5ooV5UNedzECxGPP5HwfjEzfcw1d3p3pyuT3rLSj12dX75qiqezCuSjcy1y8sVD9k4h9Rj4gDwWEvitsK9yS3fTH",
  "key6": "27jiM8MdShVCPLAWnuFf7ykTc1cPNmYVoYVmKh6kaGXC8T16576C7pHF9sMNa9JzUQs1rUUxFBVdtpobfwXoCYMT",
  "key7": "AXxqSxDbCiUsKiNqwAD3ZngtUjQDcswmDNDe31iME37KKTFmx8pLKGMvuv6mx6yr43cBEQGKGi7ewd8jbt5d7tU",
  "key8": "zqNAW1mAhSZSEPAEzW6WneLWztxt5fWtz1jQd6M8LyMrYYfDiuTJDLa253XdFjd2wENq1txDwP2iHUydvXATdCr",
  "key9": "2Sr8MuW572e2A7Trf5NCjKRzkZnqeS74zoE6XVstZc7cWWYNBvfFAWRq2vSp2Fxgs7m1AxwJAGHWg3WmBfi9JC4h",
  "key10": "4aP7sSZ9PGNiz2gvsopktkyAoCj47RXcKdJzDQMQgHkLfBR5MfM1B8DZGY7rbRWmrd6emp1SeV7DZFdV4fSJozUY",
  "key11": "nJVbzFeKMbRitg4bY1NwkpGuRBhHX6AUnucB5ixBCHVKSk4NNiuFifGz5ZUpij6FFZebmgPM3cCCNFXdiqg5uw1",
  "key12": "5xC8dKcUU7o1dg1dGy4DiaetGh6Zfst9n366scvVnjUxjPYmTFMtAgDkPyUMXAJaLKeMgz7MM4GfZkU67tja6geU",
  "key13": "daLcEP9USPHYNBLoqJh7BqWgc4tMzGRMbmiBKR5neTLQMFYjbimCKaGHDVmFATwdV33Q9ZtqWsFYhfddVayiiwZ",
  "key14": "67mXADATVKeBPHHPB5ojhEiaQi3ZgcS4es3WdUtYGiw1FG9DXktR5uq9gmQnkbd66ysWEHiuuZKtCGWLneiy7J3z",
  "key15": "52niYszFqC8dn3WNHbHbVCNFXftPGk6DLW71UjvdLvHuwtLo2JwQzy1wTaJTU7jEN6L9ihZBCR4uVDwrAf5YTJJ8",
  "key16": "448QyAWLQvyF9wnTX9TRXA5ymLtJmG4CWC6AyFsHk13PXqUDopCsqQq9BGzvh8riJ1rt8dJUZFYVKvr1A5d23n2h",
  "key17": "3JNdfL1iutqpq9q5JEcPwu7qPKnAkSQ6XKvXYNGQB4MN8DDhuSioPEb95tzPtdLpFJ5qGF95ZNj1NsfQVQxCuX5n",
  "key18": "3NUfSGbgt2xQPfidzjNRxNecKrmDZ4uvgi5DWcHYmaayiLSiqPrJTzSgiXiSwoKCmMQEAJw57nh949fy3PzzUCc1",
  "key19": "5KE9e9CA4acwr3js4aAN1uGRUqSmvt6PzBZAS44A84YPGHEau3CaZzUsabL3un7BgQdChRUDShRSSGiHPRqfeF9K",
  "key20": "65CEaWsycPtwPnpstvQHmUEK2DQTWKXFmWUfZm8n2aRdMEZgKxm7iyeUrAbwit1JHU9WoQbHBVmraxX814BkmTHj",
  "key21": "3nJf9xxn1vTpEFJRrjMHuhNcN9PunQjBtxXJLvQdQa8nmXwrgXpZu9bVz1oGMfzzNzvCrwAdz6tBkdXPD4gtkKxZ",
  "key22": "3CmMb1zyHe7o8je1FwmoD55h5nsfQtVZhMK97UPwHV7DYb6EAHnBaV5kQbJrr5nJpoT4T5GsrLU9KLchCKraaeb8",
  "key23": "42VHYyjQr2TJPKyXQNwr1MgicnG9BupXRGFBrBFwQz7Ekm8pHywqnCVwVqKnEcmgdkLttb81oTfYdwKeUdbFBWTg",
  "key24": "2nHLvbGjZEiRxRX6LgFXFGkxGtTKpLf4PVY6wxdR47JMTLLa6v6kGfPiHCt58A145R5Ltp2p4dDNRz9uh8UaNMsz",
  "key25": "2VcBzo8a7FB5xwGE9UDy4ELZmhrmczUCwkuLmGNMJEZiMJJzwwwxq5mxa6EseGRSXXdHwt3Gtx7BnzXbdycyhbmC",
  "key26": "zCLAuc57iNmQmKYc4CGzC26haA3NQ2ZRp4UGGEZXyd4BoQUbtmj9zc54pZg8FDKbo9sZD33sqJvhby7j4wTWCQi",
  "key27": "GAGkK6XyCpsoPYVL8PRGRdjKmd3Va7WGYRCVrDA4JbR6h8wonZDdCaR2czKX7i1PZNXBbGfB9cPtVZBvw9Ee2h3",
  "key28": "4WjsL9GEzs6pNpu4Jk7jEiizUVQVrN57GM9RuEqWLpbpSVHEmHNNBf5wvw6TqKXZmfeC4DW88PSp7fMugnepczgc",
  "key29": "3ViAgegMPNDHfzofYcM9NCwwy4Sf14Uan5LVQ3UFLbCfy6vb6SxKP4MFBzWP1fD5WyGaySHUFVGMx3iQKjhcddr9",
  "key30": "4B5KQZR1Yzb7jYM3DHpf8GhvyZhiWB948aZHWaPQNshmTibvqK88JkJ9fZiufVRCTriNqgyiG1JdFL4onTpxhrwk",
  "key31": "4VPoWvvCyKKVz8eEZLbqaeH2VhT7gquvSXVVCrxmpMidZd1BMsQsW3XqE9t3RQwvboAEqLHWSFUkscyuJSDSUwFX",
  "key32": "5sP33yHjAqeR98moXwsAg48JQEzPsNdShwAFAGXrqWN5DgJKM7WQ1F3rMN2vnPrPeBzUUgXyZ8XJiq3nLKNrmX1",
  "key33": "3Pw3bzW6qBxWAb73LGp4Ky2oCrwpPuEjrTE1ypmEGv8x2s7TJKSjRHx8bggfMRb3afNg6gM1wwf2TbDckfkuK79B",
  "key34": "3RcaXgRwfLzyUV1hubbmxV2xNE2x2iW4Fgtgw4PTVGRbfeN5FcnSe5xbYnCgXBBNzxCJWx5mFPcvtEwsPdKdkNL",
  "key35": "2f85EoaJ1YvNm5SWG5hbu2sahkyxEucg5vcWVSMqsE8kH32nbD9WkvS5HWv7p4XaiuUHwscHe4gL7341CQLGfMyC",
  "key36": "3wyvbizb5znYskrLGJFjNVz96981NtaB2eo4VVJeogeh9HEh4k5XUDomJxUHyx652mAA28WUFoo3HGAndR552bzu",
  "key37": "YoUDbPyweuV6iTM4w75oRNvcJXuGPWbvYWYiMC7PUGLBzALBCRLDyMjW7X5N32tUouciMY6gfKeEWfdL2FERGpc",
  "key38": "24kjLaMpsP1hrUmveaeyJiFdmoZd4Fxk5ba5a1cTM4GAfupLVcum5nswLjhomtYNRHqDrLYJrEfUhXUiM76zJcpi",
  "key39": "3fBwDgDs6Aqq4opER2obKRu5qXGtHY6hBkNLv5TEjddga5rD62znQu9pa7hdcEbNLR1ePp7kxpL7wJoGY3VNcQcj",
  "key40": "3TqpKrALBViR1T3BEcMwvsTHW4MrngPT92r4h6PKZCvW9TiLa2AtRLwybjCbTZurDSoEAVWBqoY3g42yBoz2kBG5",
  "key41": "4NCQnXZqXXxTQBujphAwPG4nrP7XJ1ubzLfeyT6zAWwgaWJXXiASQutWhtRpAyjT36tTU5SRDifg54CvLaggsZ4z",
  "key42": "3FgWUEihUT1DNS1ZwNpRVLcKxpYS1VcEUz7givCNp9JHeAjCgmD38BUtRHiNwdo7HJrdYv3TjiVcWjtrRnFEnP91",
  "key43": "4mpqzRczf4v3nUipfAZ6TxXgJBQ4V8MA3fjQ2maEySEC6gRLLfsjcQ3e2bTRZppjJeaUaRmWm5VMuysAWJi11kx2"
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
