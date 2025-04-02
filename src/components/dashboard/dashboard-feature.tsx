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
    "3xH4EpcGvow9UTvnzgmxJJrqXVUXMXUdeiXZweLGTG5HwLMzurvgeaGan3TmVqSGq8QvspXZksDGuwiVRdfiGis5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBNXR2fbYh5aYgVE54YbdHMosNRkp29QbLmP4LRM5bpkvwuPuT6WaqV7HM9Wy8Sq7R9ehCrrWg5RShhx6Nepxvh",
  "key1": "5F3hbSBjSmoM2CTAK4vwpCp9dcaD5tbUmx3cBcEGjft3VUGeySJ7GQtSwqMf3jiPdfxYB1cKjPaUiCvsAueUC8Rj",
  "key2": "2h9zSHT29vaye9Kudg7f67h1W1RwjjTz8ZyoB9EwHqFNhTAy4ahoZRRij48ZZLtqSpmGgHbgVvnQbdG3RGiB1Mpu",
  "key3": "4ipFKLHbLdmjtmvr1t8XQxKABVL2qcvh42hX9Zc4PZDCW34jUraoRoypL2TAST71sh1EnhcjExz4Cn96sqYfxGfb",
  "key4": "4RNNehQmnPmSbJoAJx7Hg5xegP6qzJvX7gMDvU8Dg8r6pagXPAsqGtUuwjoLAgfyHkkd27kDZJoQuAbk52DfCi7h",
  "key5": "3hYnHQPZaAYvvktKMZwCgiEwnXboaMuRYvibGm7kxLJ1XZbTwKAZvd51Ak2cUN1A2C17Uq371ZSk2RDMjQQXZHHV",
  "key6": "4M21U6G2GZEhjdaTWhkLQxWqQm43sneNazVsmdfZCzVyZgC2c7Z3xkibsQ9HneHc5AKYVMXkodkgQmzeFk9jDgz6",
  "key7": "4jsmz3S85aBPDbAuexW1i8dn2re3ZH8W6oXDMNhbnXam6b2BnzsvyEZYHnbZAkajJyQvfCkBZFfEHPtvveAwSYCE",
  "key8": "3v78TDB6yEo43Wo3aQhvSxSt2L8ZVTm1eA29jan8C9wGnnthFFCbuXzoCqvmCjPiUHmj6yKay526aX2UakqeXSGR",
  "key9": "4EGqSHd8TAybDCtxJSdqdY5j7ZgTnzmk1b5Ffo16zBpHw8EaD4XxwTVoLGTwePPHvygNFQNe1kH7BFCDCPMENbbB",
  "key10": "BUS4zLsFPGVzzoP6tGgdPscb7qXLhFpEU7wzuLf5eug2WsKzHkDk2C8aid4WeFQn8Gp75C96ipW5vEbs8LxHUqN",
  "key11": "2ZfoV7uc1LXbbVuhYzCKhrpYrTkCUXRVa9wX4X9ypqsprirdHcKCo34cChnFj9gCKDry7tHaDWs5bKPwZjfSkhcw",
  "key12": "PpFRJ7vNQn58HS6otTFyR6tXEm8kXTWniiFnFTUWDgfW8PrDrB7kQXsiFEM77U6jbQ6wyzs28oXFH1gRsCZ2f1E",
  "key13": "4H1fbLc4w3Anh2rYQpeeLsWUvdxy4fpv4fyEp6UfBYAG6q9ng43dnV5TPPTSTPoHWM6Ch7N5ubwVVxWzSgXrW1Qk",
  "key14": "sfoFwaPckPbFL9cUEKWjbZPuf5BuUsZ96VvoiPspY6ZzsU4bjFXjMHAbSsbwjTtAZcLEf9h48W9PeoLFB3XXDx6",
  "key15": "35RquCtzDSbzqKm7g8EEjFT4U7FTWbmiAN9TW2byCfm9A3mLg6oyNhZTkvReKCxQgnxgEMyKsJtatEFEaVKnA15n",
  "key16": "3XfzAKddnKm6YCKKgpe7SgDXYwV1yev1cfKJ96rAP2nMukxx3e3V6Ukwg8yrpZAVnkk7xg5whNohzxftCrpCbXh4",
  "key17": "ZogcCAiBgf6YUBT5XCpgSzMeYLe4KSWEtn62wnytKgMZDBjkMKFXkUms2AaY8xUMrrhKkEioLmxfcuoLfoM4hVt",
  "key18": "23Z1r7CpFrKbh27C8QMWR9CGKQykT35zb2vDRcABJDcEjM2AJmxkMwMGNJ6vk4sjGzKrJPTax5RS9UUuwM1E4TUf",
  "key19": "5TrmvkEhGBLi6MPMEZQBQZ1C6Ueg6wQUMKsXLN8cK7FThVWvGPQBsYYe164rdg7kKFNofByWuG8KZwMBkid5BYcJ",
  "key20": "2N4Wva5aXYEDhSUQfrhq1mYFLeNpuA7v24s9xaR5ay3BYajt76eCws5j7XmrYu8muJYWq38oDYSFQtDpL3zmsaJU",
  "key21": "24w9uJRtFa4AGkcdB4qfnSmYAGkv4ym3Hi3kRy5Q7Wv7qDEDZvhMauoQVDwG1qo4n2qRU6FFWkt1oo5zRFesooaK",
  "key22": "NuQ9amKeidpGFSXQbFZ2CzBaVTT36MAwghVX4TjxrghTwBN5newhDCJxm8S8aU2pa9iYkEXh8qcPg9Xr51DtL2Q",
  "key23": "3o8fCADZ4PZf6ug1fwjW7j4Km1FVg33qipKRG2ahkzNheLJnn458cvmmNyFY47TuF1Z3j36kiqQnMXEfXjt21sTW",
  "key24": "5xfN5onLxa35hKV8QFkKJXcy4S68VsyKemEJYABfs2g5t6FuFJM8uhLXB7tkjLyHDrEt93XMoR7M7PnbcWZdaTFY",
  "key25": "5h4zUxmonoixmruYrRXtdnMMZdLkrDcnvnsnxsTAGHUomJg4M4qZsmEiRDKaBZttDM4Xgx7yZqceQ5Ad1DiWBXHi",
  "key26": "2wdLtJPqnqhKkc9V5v8WT1YZD7wXEk5UmzV8XYHo4EjCYo44RSTmXSfGQ4hjrA1syKFzEvZo97TSsSfd3evk67n5",
  "key27": "55uwaSSMpmcAgeYHuVB8xLzMWLdCx1y9WNuPNvLUd56x1Td3GCWz3KXYg34Kb77bQR46q5ktGvi7E7t5NQbf1aUy",
  "key28": "ByZh3JWAFnMJBs5fEje6Vm6KrYEWxbUEZnLWdfaLoqff6uTeE1sabEBtUGQLhbngiFGvUrH9PN39RhXV3PCEcnC",
  "key29": "2fnb797oDnvxVFqdEAoh4uTSKKY6JBPGVewvBvymVPJGDMHTj3aPe1W1JNQyAYSSokCd4JpG737HFteLb773eLtc",
  "key30": "62LkjtnCJEjgYBFjmf1SvNxMNNxLaBWPYxHEVYyqyQ3Re6tkCp7mY5y4NQu7JfFjAY4hnydPCxXerxmDyNRjoLRA",
  "key31": "5xSPD3kUa9LWTwXvimDmDC6AX2vC65mqUnWdLB81HHjTFqFMbCC2vhH6GkF3WbMtdaPSZLiAGAKNgZuDnhX121Po",
  "key32": "2bc7swgHfMbJnWKs8PzTXvWMThRWz7MCu58nYWrVe7VDLXMuU3kssvqwhdBLnqo6rwmYMbqrYqiokcV2R5fY71ST"
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
