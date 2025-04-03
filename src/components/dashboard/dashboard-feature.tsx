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
    "24LCNLDvgLwYuaNd8epwt2WXN3CtXjFv1WA2cU6L9UN8aHhwtbAtG2owKYRH13Y81x1Veev4ZzJsDcneo211J995"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mujCuMMSwm2EsXcziMqSCCuvzg5a78Us24m8SS64bPgd3FoLeQZ6UkpQcoCGoA8ZDc1xavAGEkjjymZji2tqDdz",
  "key1": "2wBa4MaZH7cyzGRFoZzsmhtmfzHsBJnVT8QepP9h5ZMstUxVCD12FkrpxbHiWvm9KXQ2eimSqTYcmnB9zQf9gN6F",
  "key2": "3knQPPC4DL5QrzdJnzyC3dZc7G9ezCEUXpZ58A3WG16bhWcb8s9B23vrCuFR5AGx8kybiJ2o1GZJS1JhEDDCTm8a",
  "key3": "4K5AYpbPGVwYCNXBPiqpBNf9EHZq3jgym51Wi6L7uHYQFHKuv7866bjRNX39nETQAP1fyTsgfrJnUSRRE4Zruywr",
  "key4": "U5btmZwrSHvcWCSQJStCtHZpbQvjbwZYeb9eB3PAeRJo88NWKeSMpAuetv9kYQWV7ty9NvEf6igRUFbty7bJnir",
  "key5": "2GtRCjzpQYvqtPJyUJYRs3PsnxtSB2yziTVVG58jBjJKk1XxY5zy6V2xYTkswsYmPqTqtQfB66zCninSriUjzFW4",
  "key6": "2LMLgU5WKeaGK4MQsnTcm5PBy7fHc8G4W3eSDuh5a7GNm4HNFqMdVRnzpyfYxNR7MyYFDajijT4NFTCBU5iYdN3r",
  "key7": "2g7dCPJV4W8pi4ifp8d5gmoCjaNm3tBW6LRKddiLY4kYsQGitEmmWDWsVXUWSWtA9KLGaPpUUEVEhxJJqCJfFfgp",
  "key8": "3YPRLithFKaQ2eXmxoGGkFG117vwqqYyxePefkqtHXNNNpa7GoF9WXg3wX1cc5P7x7J2a1vF2tDBdFnXDZtjvmmE",
  "key9": "PSEFX6bckJ7bsb2NPUHRfvjuoYfK49rFbXV4LpYENCrZn6bhsB9tUnAY2pCFdmCYikroHWPf1ZQJCZ28f3FFatU",
  "key10": "3oxzZXEQQwWk1cmYquzqqqbgPW9QM1h1S7vhNSra2VoYJbHdPPcv5EBPzWEG3ot6UQ7L9MLq5QDVUQA26v2wNvTX",
  "key11": "628BXcQr46us5Pb8xupeGP4g1coiEvVMvcxWCoAmCYoujQtt3RhYvZKwAQ4KyiMBur9NK6pkY7ebidmgobqPzMKQ",
  "key12": "2xLP2QFJRi9pqZUbkZC3BTJ2DhL8NmDkvkyk6htsTt8dfstzxdZeqY3CyY2DHg6AcF2NgrseC5zZLp5bVtxoyCHT",
  "key13": "2e81PzdyhEvaiRYs5Bv4LUGcEe8YLomx7rfnaNDPeUyWWmuRAHpuWNq749vQnHn1XMnrs8khQxe8smNmztMT6n2k",
  "key14": "4JFRVgAY4SmXhU7GZhhf1UkuF3BmQ8Fyqksqq53ap82R1BgPh35bb9fijvVty2e7FCXs8xAvHWLcB94eENtE1a1a",
  "key15": "4dQMZNfwKS3VtNVqFcqjnhfsKt9hhSEVBCiod6eiKCQJgCcPEhbGXPtiWHiYoLKqyMAC2hZG8JqJ5QT4PjpXZ5dy",
  "key16": "USgx3jVGBPq3mL9LoquWt2fqRtyUKweYcN7a2TtavV281UK2LUwdbNK1fN1Z53FjZmQjjSTDFyrNbFonmv9EcCH",
  "key17": "5VobJ1KGAZQsbYHryVtqZWrxSAd4iHbDJPQPDMZfP4RFoF1MTP7wYC8Qu95JHCMoEjyGvmnqsPZCzgLoFY9FywDy",
  "key18": "4QjeyJjZFTWRKyQxV4ryo9MwphnhUUUCY182LfAvgptydxKzAtPLRpmmrjpBgKDUgrF2ATj6ejCCTWq5sW4t6Rwf",
  "key19": "2T2nCAzJN4SarD9nnN9g8wkjDBrasLA7sef8kFVy44dSTPh7XjJMUwQDM5gWCEszwgopJBr1k5jgKtypNV7S3Q3x",
  "key20": "268d4nqxXmv6AtyrLXELHpZi3o3VqmmbPSA2fytiiFiGrB557SsuzPT3xdufz7uTuvgv4h1ebWr7baqG1CbaU7Pt",
  "key21": "4yd5Vr42DxPx63HakrTvSJmpvf1s99pJN1u6NMuGV4ZavfSzA695Q6qUHf3HBPncKSUaVHShLUKQwcdpzkbmqHyn",
  "key22": "5HPKfscNjgEe7yPsuYwXmFdtMdxF3kCWTEvwxUPaaUiYxmGjTjzF31UXdGNJhnSR77ZNnxdQ5WWdfuLFsmUxcodj",
  "key23": "2QDrpzRPzyWsxvkbfq3hECqd1M5evtxWHcExdc8yXurwAA3vdd4iUqteH7uu96Z6qr83LbZk8UvecVEdJRM4ZnRi",
  "key24": "49QzV76qdUjpyn9tDyMNdkDwhLbivf5pGiminmompREKSEYyenb2yfyuE1Z1dnFzfjfwP1k1rx2MBjjEatke8ukE",
  "key25": "dwZXhQJEtsHXFYrKTLKjk5chRtjcdY5zrrvHvN4onRpTWEgPKGmt1FKEH2qygWDM3gh2ofkTBiWKhLgNaKnHWfZ",
  "key26": "3kSmLSjYSjtm4Ge3eRZwBjVdak46hLVjTfFcGURfsSDqqPZEmZnieaNQDjFyhKXxS5BkDzrf7p4b4i81VUviHjVG",
  "key27": "NPNBuCj6oSztS66TSZ5wzsVHfoN1o1xgU9CNQuDmNiqdthUgyysY8QwRTV2qtJZAbzwpByC5sbAWCremifAieYN",
  "key28": "43Lt8VXfnqSSmVRq4b22anLK6aFsgxztZowdUVUoza8771zUGjGccKhAbJWm2SnTb3xPoeqveo2kfC8UgneALKmk",
  "key29": "MeM7iwnahAiYQYNykPfgqZm3pQYcvLdhK4cnSSAsprSK649NaEHerUDkJKZdmAFWw4CLpA4dbvVP8wQ3i3BFGfu",
  "key30": "4X9GmfFc7f9AUKmKcGDjvzctaUbzMn5cQNxS3BCLxoZLBYAgVxoiwJAaZjC98MGZWgVnutzqVteHxRFC5tFAcjQM",
  "key31": "2DUxNfqENAxBMApCJaiaxMV7G9g6aqXLnBNbeFnccqfDjTnLy8jZgn6bvDq52wYm8JvqQvjHFwUqEkWCiskiRV8V",
  "key32": "5aWucN3PkZ2YR96c7HNiv9XpbQtDkV1ywKaGknRbe2TpxxxiF34LFtmn8qhd6Uz5aKJfKEbRJUo7nVztgXpiiCZm",
  "key33": "4pvhKxsWGkbasUbxT6imFYEXuaYShNtfRKvM6UMp8xbsGToYPC2wK49pPwaw1j6hKec9MbgAADGAUh8JDFbiw8kH",
  "key34": "2wRpa12RXoTvPk7cWB1wEoSk48g3z12JcT7wWF7UQ9wK6u362p3H5C3Rrn6GQXqkKBa6FPrGDZskHfVUDrcMFFqK",
  "key35": "3DufY7Exj5yTA2BR4mVo9DbZAaMSP44hEdZyU1LrZPhfLKS5KgaMHGLPLhiEHj3zp346nvTbDjtQdu8ooq1yz63Z"
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
