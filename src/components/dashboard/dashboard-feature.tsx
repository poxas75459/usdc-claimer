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
    "3Cr3wcDrLZGqkjGKH37jXE6qN11DUpic1twhxPvwt95m3Z1HCYa7TqEX5kLtcqXGp5LgJ5RotB5PG9Jamxqh7iV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33toEfjGSuaxwaMWpECRrLJz1n7rXh5Tbesn88BKRkCpAFFBXa4MDhM1LdKNKTH8VJnJqduHx39xFUSvYk2TQXTL",
  "key1": "3oQ7AJ1ov3TmiRgTaC7jruq1fcfBkXvmqqeMPhY5xZMPPYTPV7J68J1BDRayC5BA4BGRMoku7QU8gYrL5NTAhp1G",
  "key2": "25onwwLLPkqsXYFjRn4mqZuL53rZ7PrJF5MA26cahete2X8BhwA3B4RQ9timwii98zNGxq5FLSNTFpT9RAFYyB5s",
  "key3": "4sw8FTd5Wz8TwHPZAV9KcFUayciBXVZ7kV3BQ1GkyEAqg5GPCJSyS617ThmsFjaM6wW9x4NV63NcdDcgcNYgMccX",
  "key4": "3TGzXy9BNP7aPyPiXmEnkRyXZYY5vewQP7rC1cgieyma4kSzPiwJHCqkTRo2ZBdnfPnC3ywqaVqENYhwU9Yr9VJ",
  "key5": "ewBaVTgHfw8tz82Pge1SvscCnRcmBTRMtBsEC5yoNfGmoej3PZ6ntRX273iaTW9Fnxc3xSaXFtoscnfpfGjSjac",
  "key6": "4CNaQgVdq4dwYPfjZFJ7svGBWQwY9GQUhDB2iBuv125muCXXgotoWXjMJAHJkHH4MwztsbHYBSoKk7iy91d4RCbq",
  "key7": "2vPqzDJMfuw51Zq5UAWXUK488ZFcNeGreFYNrUeuWp5buYpyDY7K8Zi7pavt73faUUfmSBSnn6GGFrBXpJrzC5Sp",
  "key8": "2FcKCZMqTtkBMEtkiVS2RRmneMWUsT5N2HdNTtbTiYjGpSneHPjnhdd3751VF8UNu99rz478MsNwv9Dxk8gUn2bZ",
  "key9": "5d6z6EvJUomvdVD7wwKiwdT2QtJmiJJr1msmer6UQsjck9nizk1RSpVT6oF17ZfSqEvP2wCtDvHH2auWB2b9GGCU",
  "key10": "KxtX7NdC7yFMefa3W73fDgAvS8Y4PgUV722PDvwcaDab1FFeKWi5kpb6VrK1voNcsDzNzobWiR8yTikK8VnAiNr",
  "key11": "4k5yFZxJch5usEAm9oLGHE8qLk64DpCmN4QDNubjgCytpN3umyCZEvBBtkcJ9oCkhswC2s24aySCYxm8DzU1kcBm",
  "key12": "3K16ryamBWD2YfEHx5sh5qzUy8xfkuNyrQ6fZEL48a4wo67LcyWb51ofdZ3ABZESXjg8T8bHS8kTVyF7bhV8mYN7",
  "key13": "2hEvzJD6VxAqQUci8p1R7uCh2g8j5hgXQ54EAYq73a49XUKpcsKYMSYyXBaRKMNBrYccEi4nLZKnVUAFxyzyef7E",
  "key14": "5V514fNmuRVpQ9ig8pNCDxY7QKhTXsELmFceB6xFTaP7EhhutYHpYFgEFErPsXKhjfjJNkgZXkPm4H9ECK2jEbWC",
  "key15": "4AcT47wp2Ez1Dh4yxVvYkCpweq1V7q6KUV2Kbj1aHzXAFd6qzfhWgAGrdBjvGPrikkAZk5CazEQLxNjgBr5viKLU",
  "key16": "2TUvzarXkQBSLbC9FjP37joQZgb2YwDjjB9iGXh5TnAd5Y5v9rTFYe9vGWS6DSM42TDBx3XhuEJFDFieJqdDkamK",
  "key17": "uLMT4HcP22KksXFkd1QpS9Er31BcyTFjx5hFpZ6wSr4WAJfe2K7eeCe1pR4NpBrSCZRiQ7JXA63FvnVM56XSyTt",
  "key18": "azfnosoQRnHEyRqZP5BPaT8eoioiy1fr9a6eQWtUDJt7cGy4xKYv8TYqNko6RPuKvwp4iYN4HvAaGQqC95RNWSA",
  "key19": "3FZYwBZKptd7cK5P5U5KaAz3sWnGeNouwAhnhhfj23AFriXCoDb6Mt4YPyjZ58Kj78k3UCn3BAASHxCcHvgDgnGi",
  "key20": "5XTrALK9uD9GV3JroUsSxn4ShhPdT9G4Da8JLzTP3L36WQWCJytfq1K9bpLnFCcPh4paFNMHyXqb2aDfSYYJTiYo",
  "key21": "2n76isrq89c7TExLCgH6GU5rsJCcBLaETLbs9x4SZ494EWMf9MfBt2rMC1HA7UBYv1nEoGDcM4XyYhuJA68nbmhS",
  "key22": "3rHUHnshuip52Pg2beZxQXzQrrztA9iGzkELKKYBqBSJKxih9Vcru3xKenrHCooTPAu79SmyjjdQUy52nZifVxfo",
  "key23": "3hgLELUmrKQ8f88emowAkLGAU8Z4HcFMNDoqMc5zi7pFqQeTaeFjwcvT9WoJaaYsJHKWG1RPS4ZiqFxBL4MZeVXD",
  "key24": "3cKhRxwjp2VyBXLSa4uAcvCj1UJNdLou9uHdHEULLjqZtYD1kuFc92iBEjemUwPL9pfbRFmuGBvadJ5A8FFGYUMP",
  "key25": "4J2UndiWtUWT4fLQpbcSpT2UxuaznAyMNxhmfxEjAEfdbW69ipTrnXT9e4XBRFgHbZCgpyZaff1QuSJGKtbXwhvn",
  "key26": "23xKffBJXvVBfj65G2maU8uT4dCgYCXhJtpAVaqnNQfxKzwqzVEVzoCWnoQ3vVrRh1EGdXLKE8tzrGNXJfVDSZNu",
  "key27": "2YXiDcDVRS16cSh9CA53EgxYfFBG6hu3sbM6syRUKFJ9wXRgh2hnwaSPrGhHjB86CNLwrgj1J6h92GGQcnt1rk6D",
  "key28": "3xgA6PPuh6Ht9BUBPtzYptZn99bantEMGh9YkjYcTp3MZwT7ENtRs6tTfCpKKZZmFVcj5d48BVQquZvYuzkjqfCh",
  "key29": "1fmMkxxChFfQPtuJ7PRV7d7NtGHXMkZve4A4tm2dmTB8TXCPkijcaGpP1gFKXAjQYDqrAUczp4HWWZ8h4okExxS",
  "key30": "6y85aS3psFe8B2R8WYXQHX6nf7dGjWJnUVVQ9yh6ep7S4P5Q6No6iL9JZZ2GeCariVdrue3fjmLtuiKL2rGbcJ3",
  "key31": "42tRHnpWNSftB43QZ6J8Spxo8gRToqWeuiNDuizL2xqtbvjhue28B9snZmFn5njGpJ9xecj9E66JyjempmfTKo7L",
  "key32": "48B85k8ormH7ESw7YhwAJQzAxB75wMpyrGrVhdknFzbh6YPxN45NKnmNpzSRaD2K8HXWxsAvREYQTCE8tRhGrkL",
  "key33": "5iBAubPfew7TQq1YzCpBb73t1esfNN1ZXJFfxpxXzqBnSrk4oKbk3N631hsX8C8QUzSbt1RZYF4LWewzKMtSrFXL",
  "key34": "5nWWEwU2LHKdhSLBtXTzrQsU9JY6sJ72LshNZ4gPm1rgjPPsqbJMuczTmM4NZBVffxWCrbYG24QcbPGV9cureE6K",
  "key35": "2GTvkGuZ77UkDF4YRsLdRQyg5K1mrcA6CqjNFvx5JyusSdZT4y94Prsgoe3sSAM9BCyPK2GN5GAdUfMkrG9RLPmG",
  "key36": "5bQRjCNRsruEXuqo1xicepmfjNcWpDDqrJ69tzFESSsnGVQ59rigVKL8DDzEULdPDb4xRyvYatM6JmfPASWaKTNN",
  "key37": "CZfJhZoNhPMr2qgB6t25bP6inHm6Efvt52jfdEN7X73zf8uCu1AFb39VLpme4cArwECQKkdjR3DFAwrx1jqdjsY"
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
