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
    "irA3GuxXVWS3nvUJcp3mVLsyEknC7piTcyYeomg8g4GpoGXBTBR6B1HisyxHGjgptocWvGGtmwKwVQh34yvz1ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NWzm2xRvHgFGdpfdmrK5G9RHchr2swHtbU31XvodoGzWKJe6RkdGCSNstqaAXiR6vFLVv4CsDtRA1GEyjPJ57V3",
  "key1": "5RzsDdt8ZJ52uZumJL8jRrcho5CQDBKxLME86Y5si11QKHDbqibKnmc2a7e1Luzw66w3ymTKaxsVEZVLybZqAmQq",
  "key2": "4xZy9mvrb4QkNSyA2hYNC7Z1qBS1GFKJDt6RgLCcr2q5pYfvksAB236V2dnboAW9JDhk71B9c1GTu7joxRvjpz6M",
  "key3": "2s942NCNJQjHVDj92vnLUef4yRdTrw1q2ba8NefQLb4urRCcPRmLVno6BhezfFd3PqdhGgqZu9cUz7WmNNHtnF1F",
  "key4": "35knd8w2MgzX7hcjeLJgXcFtnuPbW5Xw4jUAgRNow6pTPFAy8CiHbDQJeGRvSV76HqdeakdZFYV4JbGEiNh2x9PB",
  "key5": "3ricbu3ocnCmqFX74YjXTCd6wbuYP7SrqHzCyp8o1nSm36ekoqGBYjKzE7ySdNtEaUD2Vmnwo71eW3oxXzp9k7yq",
  "key6": "4knvC6F137TnDdeAJu7BtATtMwzJCVrGsTttX6VpMtSkNhiFB3STDPQiQWLxZBdHmxFHzq57PY2qoecfSN3cpfCv",
  "key7": "3DnMnT2BrscNgC1fyuex7v26SR7EHtJQbG3nuu3CRsn2ptREyDP4abXc7R72HSRC4fnt3HNYfJimDCmzG5FGpuVs",
  "key8": "5JBnrRudfVaSfns5cKgr2RFHvbinnJ91ioznCRm8ztjMbbkbrU6KU8RUgPYgXn4nVRLWGb1f7ghiy4ydW46Z3SeJ",
  "key9": "5Qj7sLirLx8y4aZqTsjND5a1BiWFonihKLdi1yWEb3JB1mbDrSE4zmscRH2Mpp976BUxEsZytmjruD3GvBKsUQVB",
  "key10": "46rZdbP2wjZdY2W1aNsJBQanX9GX7RQwDjGaKaM8BMazvYyJumGwiQak7dKc8Cz4SXjLFvgB3yh3vhhMqbF7RdUf",
  "key11": "PYM373KuWBtZkatQZLsPm5VFFG99hGZZ8UXdvUTJimwEHsWQEGgrdnfniUw9Hadec5YAHu9jvfSgLvuf9MRiwvd",
  "key12": "3stvQj6br4fLyxh93Ce5t3cirhN8cJxAQF59oaDUhpnkPy3EuWZH1it6BM9L5JrLFeBjWF5TjdyenVCaxiechY57",
  "key13": "5TMpPLrVLER5G2NMdeytDpTLJNJwJ9sHNJV7W33Hs6eadZJjs7sKN8Sd2sCx3Yas2TMzgnwh4uDfqmvujfcPfV55",
  "key14": "425Y3ayz8ncCAKeRY9iTceQyjgAkgqJ3ViM9A5SNaU2VYys7GXVTCQFEqcYAFtGDKtsPMJqj1gYyextvZC5pWhvw",
  "key15": "4CsL6mALXxT7KBGSvzRE3YgEpiakSfQYJ9o8V8kCQhQkMrDj5eruZ3CTryKkxPgopubGnMJFmak2U2W8kMjrurr2",
  "key16": "4WJLWztmFuqN3chSZjHYeU4MQHf6cGwa3RDEzYVqgeRUVtVASWNc5A3Eif3Nw6QnERxCsubSG9juWNBsZVcge69r",
  "key17": "2nC4DXGQhtYCjf1G9qP15aY6YjTVQnRkJvDPRGcB9J6fhdqhvdPHFhUj9FJCfRpqyhMrfgAVNbsz7um2WGDrPFna",
  "key18": "4SniYpLrGQHat5CtNRQxCttSSaXHhMMKgpgsSaQ3p9vYuwVD1H1hTZEk69LKyxNRrqwUMonWnwS4Q51NGJqiqZen",
  "key19": "5tEVrZm8yPpaa62SyAD7gk6zBFTw8BU265TyKpLzFLb8AMZGdxfCK92aSez45EtodG1URfMjmxGCZ3sQcV4ZGYtU",
  "key20": "2RhaN9CbodYHz1FwPJASJTqZ2t7iLRz5qUuayQ5iJ1iPnt356ezM3xCKbTgsyKmxRWmUPLijDBvC9hZDQNsKwqkf",
  "key21": "4sijfCrriZhGHbuVGVa4n2ZH6GsFffhcXd5pDKGkx2Ug9mBZ58bzGKcEKGYYHFWJ3HdNz9mebwfvftTQ7DL2KgMx",
  "key22": "2JoSaU5qTfpVHSCZfpwU7u66CQ9fgVzFEcz1EmwPmrpU7MZQZMkwZGTyJWGZB1RrwQSGuV9r1mNpsVcobvd28zyM",
  "key23": "2HxRttH5x7MVUCEb9P1T6nwPfNwwVAtP7nVigWViHDoHjdUvPpPJYUeXEHiV7Qd788v9CcEwe2hvpfv2AJKahn4n",
  "key24": "47NW3mYFjKu8XLsiBXtQyztSa3c2GzXz15TyFTYMxzGYvGeAaGEzGo24qzDNAxnWARhrhdUnJGxiWCrQ3egv4MHT",
  "key25": "2szKxG1PvseokRwNavqTRB2rg8xiiyS1Efz3QVxt7b9EokLNxX4wwUYshDgm6SBQmRPfvXqkWz7XBZuQhLtsSVGj",
  "key26": "3QSwvdppk9VqUtTfrJ6a2K4hBcPuJzWhKvZH1zYj6Skvey2w2WDdhbVzcVg1zo8YCsBjeBeveHy7qQph3T12j4p2",
  "key27": "2crkWBWpoRTCVQrQiEF1EW2yDeAXMpeXcCYDvMcAoKdsWdrnu5NVcaFJAcGAju85jcWt9XYPw6XsiuEC3PFCrcJb",
  "key28": "ZcQA16YiAUQnth9vimg176znwkWLJWEECvpBduVj64ocBzbbJJKSWcKrMrnpheQArcZvWDgSimM15tkvqXsDFxN",
  "key29": "4JdpHANbvW2ypd5gEPrzv8oNtywaxvnEWftFEEADNZdVaxUpcqoCJYpiHLxf7uEsBs2Y3om6P3pL4BGbm9s3bipJ",
  "key30": "3BYrDmo1REQJH9Njv5rsr6SByqwhmwSKqxDWMuNnbrcB9hruAihGbtCAQGapbdMhAJtPxK1mb4FT2mBwbJq1GHLE",
  "key31": "2HA72XwD899F2HkipooQ9KevRp6gEX8JTCjin4jYqwu1TBYFCTcJs9xwKA2W6qAGvm2QZuDuepjUdJ3hSZJywEbt",
  "key32": "TGyfwtdmS5LZ753gsTMj2K7FsZ2PR3UJrhCAPdSArF5bH6YFDVcPaTfyBz5P6PctMYiefmkVrDXiuQgpQkRZt4x",
  "key33": "5e2eY4GXjbeJYy8iVcKByLJyvfSU6omp3VpHYwbPissLjLku8ffUerUWiipchZ3cEXwhXW6PiFRKeyde4135xteG",
  "key34": "4KgQSLD7fnnnpaukKTDNwZM4RXietnZWy8jm4errskVgHQ9Z9qsYdegekHh4iugH1je8B2cJM6HcBkdi2H9gVMjK",
  "key35": "qTanxZ7Kn1PNh6KpQVNbLoDSoz99VX6s2yoXQkqm6GcbgAWjb4NbF21DjKfF2Eg8RDSTgomxZqH3C18NGwTGurv",
  "key36": "4pK3xff6JDBXbNfqU7WAQkJXbcpWYbz9DXTgLYDj9nSJWRqhUNJ2ctDdnuUDWtwAquFf9r7asM378sW12KcX4Jzg",
  "key37": "Cip3ER9on9pMf6LMv1A9yVz8ZxyficRtHZjptqznN23dE263DWfGosnq34yaCXiD6qR3Z1zsnZpw1GY2FfDnK2P",
  "key38": "yajK5LJfV8bg3Abfp5vbgjUU3f5dcMpMh6c2nFJiwCofQZrbgvKWQjnoZQMihNiToLsQiSEhMFJJ76nYcA7sRyB",
  "key39": "5Q4fYYzn546PRcN8JLQ9BGJ5yhuA1Xgx17w4f78xHLNVLsFQ74Usabjc4bDoqB6aMs6rCXsTU1BoR2R4sb3hu6cw",
  "key40": "2Z2W88cQN6kfcFB9rh8N39REXywzUP1eVaM39Sf5yTCggwAERhx4koLhCZQ4wk2qPTG8uYU3E33dFJaGUSoUCq97",
  "key41": "9KyjwridVR2iLRLRuanzvsyd5RMPbyjYFgVJgjisD4Eg74WokgNBkJt2a2KtPCEs7dUQjbxTreSsnFrQP9nsiix",
  "key42": "3Qr9WNPW2VKfv92VNo7cJVomjmGpXvbvNGTJNE42vUCLAjHABnGjvzYz5bndT1BNF6hJ2HTHoywe8oAqpN8iEoYa",
  "key43": "39aWjS2sfvzW8KZP2jwbUX1L66MSiPnKg9RuCgRmuirvDyAKBUtTPAtYuAjQ1hnjS44nek3NgMQ5hKn6E4hoibKU",
  "key44": "4sPCNHYBxNaYNVAAFiJw8sEv2ULRAUiFCp5nseg1GAnHsgEPAvAoKwKDjNweU4LAXNXXqzbF39u9Bp9FJTEfRdZV",
  "key45": "4nKnhuHD3dJgtZqUtvi5Um7SFYMoGD6FUSqwR9ju3yp4p1engG2qx5DzuzNHQRBXeKG6CQZF1dNxWJmoBbeV7ZY1"
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
