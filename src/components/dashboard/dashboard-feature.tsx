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
    "2DzpSHrHrLM5WKd6EqEVWHT1ApyMyDoyhyyGR1nSpAWFkGVTY889iNuGopkh5Cqi1V6ZQCussdirveMBPqcyo5tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGzSSAm3n72amVdoKZTNgDMNtg8WdFrqsPEbpDULqWLasdXtozGzBgeWVrvWiyMeWKmhYMNaRrGtRfmzxQNgVXK",
  "key1": "5aNP9QGP4wd2z2py1sX1RV783t97Y3CYtGAFJMD5VEsRpjX16u3mgzKGA18eP4fq9GkbwBfeQvPAaFxssisk7ZiM",
  "key2": "891rGsXfR8crgqgsPEeXP36QCtAr1Y8EBJ3d2TVA3a9sRDHsAinRkabxWPHEvnDYTUyXMhskXJQFaHcrgCuv1zw",
  "key3": "5F2czmMZKrioRytrY6mgFsXATFoDVuQ11Fbe5khgAxSgSzcVyXHoSKmBNqwap1rSxu6PWNGRyo5vke1XdChy27mp",
  "key4": "29eXS4KPvDY5k9BvGZj2WkXSoKaXqc8Ytwi6CcLpmfUGiN3XmJvEvE1vmmgN3GNCw92PPwEX8zxfDAWyDP5LZ1Kh",
  "key5": "2tYXT7evkcNyne8FPvA3bXTmnzzfH2m9V9j8H1AEtSGTBm7sGK6sbpH58uL71EaHxyVQCjyqurWMgTfkSQTebxN",
  "key6": "63KTrCrfRGK1rEf3yMiYstrQZa8ecKqQucEFDLdwJyhjoxapnBMuvnVduYNsH2at4SomjWDatASKTLyMMw2CoWzK",
  "key7": "5h42iQc2c3RbpDYhETPeRDV46zHbFyjdho2gefwpfDVUBqwMN1LjN4aeDcXLUKxE3CVaX7DoZVB8kPKfCUSt2MHD",
  "key8": "5yj9MRquWDsaDmU5L6RGx3F3bEXDaLiidNoW9GgmYZ12YYgEgXJbXyYAajbUWitfJdda6dG1cmma6soizJAP27ob",
  "key9": "4mXyWpsg7Pq2hbNy8Yv7moSwxXt57YmJnWxwXBuKw1zQY4nUox6B4TSyqJwmAUSRssXkJV6vZ1VLzySCZQQdVjcz",
  "key10": "2CRaYhLzbu9WHEk3zJ1SYBkXhe7Zx2LAGVYjWmudnVXJWBp75v2m4JpotpnbPqWhHPRXxTz4w4zTkf6A6eXdqEQ6",
  "key11": "5jzbdT5QkhWMmmVAWXpSZRFLr8r1nQPYjtfnGFcAf97h9Zwi9PfE9BGNyTnr3PRVvysX9dtMcKpGsfLD7h9hBRhv",
  "key12": "3dpq27CbGRxYgjzPTUqrd2WSv7AZFDCdLghZhYjg1kocMJH14wFarbidrGStzUM7cU844Y6RNUTA2DXpUkrQBnfT",
  "key13": "46KsWVibXgpoRYqdrsaCPKzu4WyXBSrqfBcTuAbWjhqetY4GGXXHsGBHgiUa45hYY4UJgziT2pquQnZLqtxpYszq",
  "key14": "5FxwL2UjBtMnkpNaRGhaxyyYPVpsJ7wUjYArYVT1Pc615K6k1LdH9eRcAsx6iizULRwh9i1NFozuiNN6CQY4Hqfh",
  "key15": "3yCLCFkniUWju4gdvzNvrFS87qnwYTYBVPrN7WwTAgVg7Qwub9SWPayXo5VjT5A2SLwXUpdpQvzJ6Ef1LqcoToqr",
  "key16": "5rMRZ7i5Tbz6ohqcno76NqmCD6drhausNpEFteA4DvwvpeNmGhpN1RptRKv9RhFU6647Z6LRXixdXMpPDmjMUPF1",
  "key17": "3UsSGTHXTesMCZNphptD48KUYnVvG2hUZ9yJd9HfsttYmPxX3xdQGuPhUjHXQhkbF6BNm6Wd9zD1Cueg4WC7m2Gp",
  "key18": "2HEtRMqkzyXWRA9uJ2tSX85X4yAUNSwrQKWTbKi4TxF3u3L1pDkr9ifPZSKwf7Vq5DJW8XqK8rnMPZQXGjQEpB2d",
  "key19": "66U6LUD4K4FbUK3hK388F2W6MLjY6pxaMY1hZobAeXpdp1oh9oKmjGqB1cVNdGGuEBZ3TX77GQVfdsBFCsUWL6Hu",
  "key20": "57WzT3BTps6iBpKVQczpRwNiUSoeAuWvrRJyxVPhf82B2w78NHM6Kzyf9LeHwfB6WaNc6QNAk6SCwSpTuTy5ocxx",
  "key21": "5J4GExHYd7GJCXFLniWiewJTMmvpvXiFnd8yg6RYW6PD4eZX1jugPY2aY8eTaJjJra6zZ7dxPnF4UB7SYN3GtTL8",
  "key22": "4QP36Zny64RgddQuiCXRG1CMcUKpiXUQMzZX4NxPpgqdsdhGrutrxBNS2mFw8NCgyomWvJkr8WJkGr5PGGMqoS9Z",
  "key23": "5tD2co6ZFke1WtthJizThLGCD2TieGSHW3RGoaU9Be8LeLpWduj4H6tzhYYvYPuzCQNr8kpyyQ5umX8euY84qnSK",
  "key24": "4BAx7iNQmQ4JhPDB7qBnhzKiVGcpwtNvB3GZqoVhwSWCBxcpsMoKPqW3wn6b1QVyXTSgFhA5UKVTcSLYJYZj6xxo",
  "key25": "4ti77TGxyU45HwmWKcsgMu6mfPgskkp2uiUh7JVTb6z2zpPhdZrAgp76L5fx5mK1MqCi515RGe1iAwe8uuZrcq1X",
  "key26": "3ujxUMix9nNtERz1FfiPzcWiq2a2WTnkS1cGusqkr8Sxgnso1z5UKN1d9wMnyutoYCKvDaWoGgwmcdYRbiGgpeJe",
  "key27": "3PSYZvPLitsdY5YcgS4RV3HZzq5WP3mHJLvNskygdEoEhpFHNiT777bXXzCwzyWcynmwa55yheNTxvRRmARUKMX6",
  "key28": "3y3L59Bqa1i1QUPep3dubnTeumviaCTRyGsHu7qXcFhyhr8WgudCtQsGcpUVFQuope9zJHitJtQ2QkWDe514F7w1",
  "key29": "bPvFWfM9R24E9JVxMCe7EjnXDWQNKa58upJSvRPSoiW4XcrQmikuuQUGw21Rdq7LPECLxJPY3kRZnNizDCBj6dR",
  "key30": "3ZSQLPBodbSWUMfsTGHC7S7MyiicwFLnm5746hxvp2HnDQ2w6AwrbxBgRJdCk8dGGjB3N6uW67Prm83h6FDatEjg",
  "key31": "3fyB72ZPgi4cbQAxYiS7AdvSpMjBQ7X28Ao7u8i9th34ndaxwHSzKjQ3DgzkWkYBwLVNepGHtXQUQKeSePfzkifw",
  "key32": "66ShRA8CS1PtQd3fDeDrqRwYJtqhsZX3sjirT2r3wYQ4ygvkwTh9AArcguNw4zu6wLbF2d97iLV3qrsZEUMwLinj",
  "key33": "3BUzBncyDKFVej7FZQRKRLmSSf6Mnv9VraKCSvD4xL9Q9ZnVNFnh5QszS3fpi9M1dc6Muzb647qmL6RFLYSvDanP",
  "key34": "yh5Qhkfsjr1x2VYSQsoBD5p42FcTFg4vvqFwHAR1H13UHw7kGycTd6VkXQowcssB3RoRmmFN64omuS1kJ44wb9c",
  "key35": "3pyyhetJDv8FnUWu1MNwSxbkc54L8Rno5iwH6q7UmcNTWhwmrMeeTtBqn8xx42hXFPgJeNx8GJLMrWEfE8LRmUDR",
  "key36": "4XWYH6CdasvZfdag12W8k58BJprLfnUodBhEaBP8eDgpf1CbP1egdksBpvRMEqft7B9yBwDVS2ddvsHUYBV83Jf2",
  "key37": "4iNKJwp9NY8TiwBxSdjCaerbYXvAyYhoxo1Cwy779AhW1xdWuxRnhrxHtEbvW8VtXppX9VeRdFHReA6ms6woNby8",
  "key38": "2aLgEi7jbkao4RYWB2pQQRkPeCRafjCyTzmN7dP86ZFW3wFQ3QfrGfihwGxeBzzMjUvwsepvzKKowaj59VoA6UUN",
  "key39": "2rLdR5zbTkVWFVU7ArDXXojD3CtE7h41WfTJJoEoyon4RSN8Z2UuejKVbPG3KzmfeF2u4F6vEnfdsMRnNQ5A9p81",
  "key40": "5G1PRykyyiiFTUcxYfL8VqxQbznksqQT6nFeCuNGaPcb6YjMtt5FwpDj9HrdM7qj3CGCWEDmnomF1yENHNqeZCq",
  "key41": "nBwXEvMSXPq5pQB3uPuRiyi2nZsSSirxV95sQrEtt5U2uc692n6PGyH5cBa1wBKwLBc5qogP4ASvkfL3WNGbpbg"
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
