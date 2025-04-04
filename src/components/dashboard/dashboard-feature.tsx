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
    "kgRHzBZRaHYyaAycchkX6dYQajZoNw63AbkrFGxSabyTBfSJ1hKfumQjoJMdgJqUhnVjFpJ4DQseDd45DqwrWXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDtneVPvTjq8bKvadqfjMCANq4gCvFLmDizMfjZAVfy4afRbM9sWccXhzCALVkus64sGCMMNNRRCK4mS1YATApK",
  "key1": "3iapYDsdLtP5n458khfSyKEuU3mqm3GJEGV8EUrutxZxwYRwuBuwom4Jg1bVvQDJsucL7jyJracrMgLHge4DgVxs",
  "key2": "BN3FKSUNX9mW4NaYQYbQtKPSiiQbKRFtoTsVNn79L9i9BF7uyZc8dn21X89ypX3ZwrvJSpTsnyzPqy2LodcfRoS",
  "key3": "2MeCQjegLSxBmcFcz34N9VH8S7jVfrb7mxv2zohq41vp2MqDRaj9YcCMrwNJqpXrGsapTQdXjb6kVLJ4dktaQNVb",
  "key4": "3Rc4QPMipzGoQkC22K36aAntDr3gY8LPxusXx1hjohkGiyHGB5w8EYKC5DXuKJ5YtXn94Wo5xyM3gEuaZwvwGe4k",
  "key5": "LBcPpWnyuzv8PEXrZgkzBXJbra784Cnco6JCQJgGYYX2N1EC5hLSABX5K43x9aoYftfEs36CQrojrLnfc3xMHyp",
  "key6": "4PEykFdqzP7ft11FCRvgY13TVT4rbcJt683BveYk7pZLpiLxTYMzWTb5sEeZCLSGAxhAP3gQX7M975e2J8fFmREZ",
  "key7": "3RfrZ9wYcLFV21QuF9ZXmbsrtpvoQLiHD2zNzof9awaEymYYLHFzEKMeYZv94S3ByBQUgSSZJ2Hy2aFPd55d8F1W",
  "key8": "35zpDhoyJBQqe5AAoaQiUo6s1wVukeCvd9LqrpxLeHJYhhtHAh2N73b7zutbkBoMcL3AQdzEUhUDkEGPV3jx6UKi",
  "key9": "3YXhDuxdtbHzUxcqpV2gkSWqDetp9mcUUqCZYhepDnxf4AznUaBkrf5BrtTVRxL27ibzabpBuvQZCBo44Vbwe2rz",
  "key10": "4AeGnBFsnmbTaamnXAMVj3bV936cJoSQSUTgBBmCM8ZSU4yFtMxaz5Crrrisxh1Sa1Rj77LYWGnjg1BjeR2G4bim",
  "key11": "3gJpR79whWKo26YiFRpK4PMqxUYWLWkPZXe9xAvnHZMMmUu8DXLWZqqXU6QVNDgq6r99hR3Az2QWTHziLT6HZkNy",
  "key12": "yKHc7jQnmsT7BXokwbGWxJrCD6HTWxhK6oYrTU22NAHyrnmsWLKV4U57F4qNBaNKXsG2w2X6dMKpCi4DSwLKXkW",
  "key13": "2qoxjFskMJFVnbX8ydMMdTeqttJ5631wfpEAAYGppzchWr9LV4MXSdrxVAN7r8WKjtb66AZK8fN436kGXXTLFQBu",
  "key14": "4EeWj7RurMWGpcVWW3TRR4Gjgc8XRhU6YDe2TmMdzzHuGRWZ516Exk4cHBWUmg8HEv36e9kG8cb6Rth6f8D5nosp",
  "key15": "4CJ8bgHM4QxvuZz3iYMXkfZXQ6jPgp6RpbcqaU6r1fmLq9JLbxKjpaj8aWtg6yGc942tuWfngeBtnHhLcvTE8DF4",
  "key16": "45m2oNK78iZKDmxjbDRhU1e4B2nqsWJPpxsNJMG63kYSc8HLzdaUAj46uN8xMrwagYL6wjytxUxL7rN1eyvKrRrk",
  "key17": "Pcvnsg1Bn4y53FcKaxHAnsFJZnaGq8Jvm2DDUPSJ83pajFAq4KSyz8ShEdED9BeovdS8z9Fsuvg1NcFmZ79CrYj",
  "key18": "5vW3vsMnJYbECKczdExmswUmtkQi9oNtio1omCL5LehGqj9cEkf2JYZomZhQUu7o5d45ZJWMYo2xwST5N1rvh1B4",
  "key19": "5jzbKbqDtSFavT5WeafWiGfLpGxqup32PwxNYB1edxrgiBZc28gXSgx7aW77V2ZUsSdRgRt9mZTVBFEvUk5fnfax",
  "key20": "2G5jHRCznk3JPv6N6jAt7K6bsnzE7sqHwZ1fL2YzMezHNfry99jrf6j6VQC4jyWTA6GogX5R8xSvCsadNuESwRYU",
  "key21": "2dc15akynHC2whce7RWC1FB1uaK9DQeSPKBzGT6NdDzkY3eBXjJi2QP1Lk5gGMxBUSFu9YE5opZHffTKT7t9yaQg",
  "key22": "3ptqzCQReJSPh8d5DtgLh8RznMr7RLEi2YE3u5SN4CNGWHe2cqmgKocuVB5E33hHVW8cnWYBc7r44NkMGSnUeyNF",
  "key23": "1t4oZNcENpDFGV2MSrfHbQbzUXSr643bggDLDh27z7WBpXCJB8Yx6WmUcLNc61sxVo9Wor2qbUqADGZHRoD96AA",
  "key24": "5o2X3G3N7q8PmmSqddWacdTqoXiNA7Zx6gvXiygGa9J5gSt2fExyiYzWS3P95CkBPbM2aEmonBnmwitVuXi8SniU",
  "key25": "4tipeNqMvKs69XzqKiBrcmYvfkqyDbUGgP1tN51w8XP5tvnhneYKdxdNiD3Pg9v1UbSBRJNoHanj9Wfqw39c2gNu",
  "key26": "CSTDU18W9R3jiMreMetm9ZEz2tMenKZHSbH6uYTgwLoFQRPt6SdJNhNue137BXMEv95qFivT6Ayd2FNW5QB8dc3",
  "key27": "3M7Lt4M76k38hFon6RJDYRyqoDg65rWzDwphURhepFqQCgaha4iNqA2CRWnPaHtgQ24frCdgdC7B5eBgHRrn7QwF",
  "key28": "67QCxtXPfFkHhafY1t1fBNSpZS3ZeVe8dpb4qvK6VmpT38pnDX3RoN52z7Vb1NRBz76k32pwq2DyDcwpKSR8PWiw",
  "key29": "3EyEjBf4cyizeQf79xFmyyQW9c6YCRsSYk4pqkzfHA5toA6z6oQAv9BRNiSKgHuuqsSSvXuH6dCb7CqE15SqGXVb",
  "key30": "3hXG4kMzW1s9MjW8N44MYcuUZEYajze9VdJdR8ZYrpBRaaSGFs5Qt9oDkoYZ61dBbWufRBYZa7nxA1VWBM5M86nP",
  "key31": "55zs2MQmU2NzQ3PxHD1GArtqYQdvv5csNDeavJyNBMvkTkrCYN6CkazrfF5mRAXmfsQuatQxqxbNnejp1os8cB1Z",
  "key32": "4FbeNHqwEPDjmjdUuiqZVEeMzuq5rsprwWf1C1yBgkkjYt9ooc1srxNynjVMKnEsadEmGmufFk9L9mwkgxZQ7eto",
  "key33": "4bGqf5ULgQ9YwEfPKBTmLFnSpCHVadRx8KS1k4wcs7ziDCyHNJdinWaLyBkTZ8rMmPFQk1jnHXgqn2PRQfptY1ep",
  "key34": "55zbGBGgEs2B1a8cJ4iPHYx3vacNj7PAtERiAPvqYj8nNwaucCh87af3JeH4RSoR5TiFeiwKjSFKGTqW2Z2Qi4hj",
  "key35": "52JFwy1CxVF7J8UGuni33YF2g3hPfCPa77VvufygGJJsVBBXJgw6sBcWNgtkSCy6ejwpXyh3hWq978PWLUbZbp7R",
  "key36": "4DXK9hAtuG4A7bpKuD4N7HCMbgD4LKH8Zw3nr69HVs1F44HM3jFAot1xLG8LqARXMPUwPXJQVFoZjeo3oPDJveaR",
  "key37": "2cuKoBWrCDuQcW6wGPppLCAd5Eo3DyYeWMULV2YeJ1ia3pY2QY2bGqJBjuNTMcnWct13RXkZjFo8xH9udRdijW2x",
  "key38": "2cB7Xrv1cjSSXD9xsDQfHRWuv8JDCthugaAaDKhZbc4UxJJ7Qac2R9MWESxc7tfAqa5z9oVJqupF7qEyo4UApDYZ",
  "key39": "FJoYR1S5Xmt6EJFiN7hTNQ26g8hVa69cYWzCLNt1uu4ZMMp1rQ9ujmnEQUaoymWxcjcHdXit9LycoqMbkMXyHen",
  "key40": "kvVgLeMcnsKqt9DgcccgHwTYxQh1gP6qC9AWmtNemcpeFe43NgtdN198Wjxa2ZNZ4m2rXhp51hYVaVXTesisf1S",
  "key41": "55MjJ4FHD95Qc6tNiQAqHmLcjSTm6PgW2dHX3Fq4KQs5Ypuqxuu6z3kqg4fqAhfygA9udLHYtry5x5WMWncsib7u",
  "key42": "29BMK2eZG9jStoqgTZE8viDYcxFwmYqK7muq6FcPvF6W3v63tkuS4pY4r3kLcYsUMxW5CG8oPU3GzzqUuSE9y8RV",
  "key43": "4yLdHUdyzSecVZQ17auLr2pD3CsHE7hQVwY3NF1HCFDT3A2pkZ9t2GPRkwhjYpNqZRwwhEDX7MwrD78en4v5yvKY"
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
