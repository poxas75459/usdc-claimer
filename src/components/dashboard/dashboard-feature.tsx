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
    "2Cnv81bRgN7cuU6izqhgfuMekfKFtXm5w1mfQwiusKngYaBh9dGZvmH5sFbisgXR6HWeQ9BnLG4RWVnSxLKAdvc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsxTvfz6oiBXL9zvKniRAaT9541GQ5CpvVopxq7yJES9Zp8LbPQjv5982ipfKhAA1EV3EUSzfnS8ZSz8aZtAfVM",
  "key1": "23RvMZQQHpEtRJLH3KdrrypN3ngFvsbnVbQg5bxTwK5CeujT8GwXh31WZDmJ6HpeQtCQjpH68pWysZWxEb4iVqKV",
  "key2": "4BkEhxXjc2qMhEYzihJMwWbsA6c6HP716KpSwGvZeUsPPjr3eCsBu2LQ4e7GNTKjDLs61LCWt2yGk2sEWq9UmqLk",
  "key3": "4oJ4ndV1Fr3ZR2pMjut3gMfb7jayyY5qgpLyLCkELLdJeDuwLB77d6VGrz5XcyN683jxzFXv6FeYWyHvhGBkq4sn",
  "key4": "c6AsMowqzghRcW8peTQ9EDbRf7i2NLR566ocdmV1d9h36EAJZNLXCsvEaecwcfkrSRAsa1sDofMEmoPvrmKJ4n4",
  "key5": "4bv6zbn4gc9uLs9BPtYUUMQKcrWts9oD2233dSkEY2NNNu5UihtQBYv1ks3C4LbsBgq4efwshwGpvyPKpzR7v1ZQ",
  "key6": "2H6V7c7JzLVgE2ny9NDooUsms2vopWYrDfcgy3mJ1nx9aD3iv8x1WhqUEmHCZoL4btABLZ2x8mieamrDQoTBr1A3",
  "key7": "2pCYNijyXMeRmEVRzMA5xhmTpoM25bL5DdcjYRaDU3JL5PkYBVn3Rq589D9sqxHfBkZcowxFe5xBZ4i2kj7tuouJ",
  "key8": "w1pMS6TLHcS8vxFtJUAUH7zsoYGDHLM16geRsrX1uAj5HbPGCNc6mHzKXbJh7ETj3SkLEdLkhemz9brPr9YWWCf",
  "key9": "5rah44C1JQQ9gTgxvj6m95WudTJ899gRPqaXNeKbaLw59n97xMDEx6Y2NQyTadBxX5hv3szfEP3SYAze3fAAhbQd",
  "key10": "Z9mecSEuQTMmsktgYidry6no5CbeVyeiyvFwY7cPG4HuzWjwPsEbN22WJqH8KSoPpvT3cTCHz11iLHjLCBEbZfq",
  "key11": "29F6V3dpa6K2utrHixY3TL422MgxUYC87BXUoZnXbJHzqL4z7c74ett2aoYwNowiswrBTEv4rtjU2ki4eam2wdAE",
  "key12": "5jXHDznGrLv4qjwfj2brgGze8t3hazgehrVRF6o5b3f8eKUNhKLugWTJ44pKZnDAm6ViaaAhLwjA1PDb93R6zJAg",
  "key13": "3xP8XG4EG19qbHHB12SrbbuqfD1Tk2EzZACCLSEY1LrzGFp7ptEgxmQwVtTaYkhh9mkktd9SuUP3DJqbfvZ13a5S",
  "key14": "4z9SuCNsm7YB2azmYvLFsKb4ikiZ736DxEYM65NMWVV5xRYQo89CMwxunkWTEtRRGms5nSwad1iC7GEAepXDhEuo",
  "key15": "4LNtbAorfkBeFHmA71LgSozMe4dMpdjUzSDHE5CKg79TS3KyXxHqwAdK4tvQn6CRGPRc3bQpGSESf8TtqsRDV5w8",
  "key16": "4ZWHqTecDamzKBXAkwraM75oVxZK3gNmdppYZnEhmgHDQkj5ZFjL6iyqrifHjxvj3FDu4Qe5L5oy9eZpVL3cuggh",
  "key17": "3g1XMNiYdzcTGMqcqUbprY31qkbBz4aQa4dvudcf4yFYLoruFvrFpYjpBgCzisMrYuRnvEBJbagiEyFHrMFANqzV",
  "key18": "2zJoMxECWJWCsGytsggGdBTWT7aRMmzoqYVhJrTFQ2Q4WoL6qLAaahP15iUYtKPKGw4TrCiJLHSTxDzdWQahusdW",
  "key19": "5jktjm3Pi3KaGsnckvkD8EPAdNuqNTHff1Fj5t59RnDaiVvJhv7Y37wFaGaDcjgx5nWEivxxP7TnaVvjXEbbLy9H",
  "key20": "3cLAmdvJd2Wc3yLWiLs9yVy51JhqvsYnDKo5X5a1sXWAnQjPCr7Y1QGGe9qRRCuw74tEx5jGqqqcsrGahbdRGzFJ",
  "key21": "4UaadzFhvp9yS1BuBN4iAVQERV9pGy6FbxJUUqeQ2bDs4imF3JJUs6j6G2qfxjHHa2zv6rwGLy5YdeYY4pp82YCK",
  "key22": "4mAdo8DdrnYGNqW2ybrGou4bgUKdbsxzi2Z6FBgDhP9epFgUGM5jVH7TTYvp2RMvLixpXixeSbPUvKM71uv2mF3W",
  "key23": "4BpubNcYRHMxM89oTgy4MS4CKfKGhwg3rsfYu9CTfMThh1w2MeCnWe9so8abxjfdDd1KwxW3XCEPgU1J73kpVzDZ",
  "key24": "4vXa22Bht9SgN2qDh8Ta7hA6TBVidWB2wJRH8DWrGiS6EPHd99wfSzUYaDiEEq7SgeaKzpHrMQT12vFnhuMowikj",
  "key25": "4qRzQp11RkvRo4wMo1WxQdKsFR3TN423Y1Cbv8Tvnv31eqHMer98KhjFRqCw2Nr12vETnympvMDqw8UkCsocV7Uw",
  "key26": "5F6fjcYCso1SQAq4zXyYk7Pz2hu8voHhk94u8tNUa2k2AGQ7ph87N4tmLBm2XrL99dqnA9Vu9X8BLjvihAjkwokJ",
  "key27": "48VjxfqRjGUa2xHwaH7Xv4qqs7vNeNg5j6Fszqi29RYyV5qMMUVM6V35Utryu9uLCPqAWZpMgLKhu7JFdvE3itmp",
  "key28": "23qF3afWhc2jQudyHbdnkRvH31C7vxRm92qKpwtxHzckSSjPrknUAQ7VGwaoUqG5mxKs5Gboiuqi9MToobtPigwk",
  "key29": "5zszRmZqNDwirb8zM1fPNxPRqWcXxs1JVrbxLt2WHZ8amxcMmw2bJvLFWLG1wn6a5miz5RV1ogigtAE5gg8P3xte",
  "key30": "2vn1aRK8y4ZtFD8GJhTYoQCS5VcSc3WTBrRJB6QhP324VZdc9RHN7vqKEGaifmYXnTunp8JQUqYzfFZwpattCEvB",
  "key31": "21wwLY3cqnKk6FKMYDoJfuKcf7dnFuybNfew6H11yDyEiCzRxmtNmzFErgwaGKep8bvDLvWbQpr4GsZtJ3EsTq8A",
  "key32": "5Fy4USF7h9dg5Jaqx8YAipcUAhnaP13dzqkfXhBBUsFBoiZSUpuj5S2mGjdN4uUUVJFFL3d3Xfxgo6BLrLtBPitL",
  "key33": "5txcNqrfxYw2i5awPEjuxFziatQWDzy7nQd3r3Gr3twzD8oVYM7xwwKTcywN89DAe3bBA4Rqqdn1eTdBo8L2zE1B",
  "key34": "4cpmEXv35SnXZgxE7qBhGbR6KwrHG1nvM3ceaJTLa1AKyca6Z5JrfEZzGGjP5ocGmVLDZdLJjL4X67rzTFRjHC9G",
  "key35": "5Ydts6cC3pAK7HQxY4tot9qfWwzkcmyzA2KYBWdJhTkAC1WzHUXTc1LAqk8wVewnYRtC9SeW36GUACHp8uAQhrTf",
  "key36": "3LfdFYpraa9WQQGFTsYyGM94kZaJZTVjxa9KFdBBQzLuYnkFi1AwVePdhBhdJDF2sDLA28e4rJxSWMfFjLY9pPrg",
  "key37": "2G5SbAwQiiAD4NKUA3PpuXBzywGPzRAk4Rejv2rdTYhcw1AC2a8cc6xYNMpnQaLXTmSJYUSSmDXZdVP2RYV4HvbU",
  "key38": "5Hht6PTr1bayyj8o8FQiYQTCZtnDCT4WLp1PnsJRCqartqYYkfWGVrFriEiQZ1fLJEnVSD5jYEXr1AjnLnJwHB6i",
  "key39": "3ZSarMUR6sX3Q4nKa9fVKeDjqLHHfMdp3Qjotqvy7ZV5nBtYteVsjFyaGQ5AowoA3hnfo8pCeeLPwCL8AzjkHMJ4",
  "key40": "48QSbVJCZFy7xPvBHAGD5Ha8voWcn22HVGQdVr83zxcUKqNAUfzfeyqMMRqPJaLuHC5NALegFPy1ii6R5rxuSV8t",
  "key41": "NEmAHuwzzoN7B1nJvBv3dJDwZo8Qbwu25uVwGPXao7K8bFsxzW54VTxtsad3TqrFVFDhF6d8ZtdVJ2Ty2RG2Dst",
  "key42": "h76W7KrYxf1ZSkYzCyeKT8jSXLVAvYk4Cxq9fCSBjWvzZ9Wt9yQcteXkoUSGiXyRQhUKAygqws82EaWPX86Uciz",
  "key43": "4E5LADtUXrUKeW7tuFh73yCRmhGJdEZWt9rhLr3evqzSRUKxZgBjxNxr5VUiaaUhUZ3sGHPvVoxcqGi8kGzXPgaw",
  "key44": "2NkWhALevt1kHW1UScbhfop5rPju2ruL7qj3n665kvUqAD59ZqBMqKrxNNCAkxFxWG5LcPBTP66RpE97TFq7kTZX",
  "key45": "XZk3aKpFf6TTQqMDpW1qHHhdU543Red5mhXHW4xUFVz1suLwNVR5GdBnGeAkCcHnQozWkHjzyptAHSKFUrhu3bP",
  "key46": "5j4Em4s19bvktphe4hVbB1bSRFHycM6A92mcypALhreHguUwjhCLTWJHyBpLKwvbeVpCtE1VQobf9png5PaTKaWX"
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
