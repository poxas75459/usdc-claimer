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
    "5epsJgWofBqALcxhUM9gkr6HHFgf59VLbDPbWzczX4HDj5EC9hXt3RgWTZWMKmm4iefjHRPDgTeiHRvX8itqFdyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677nMx24vNuV8taA7tNSaVrBQKhzf5aKMQVepnSoh34qocP8Y8Bo8ARw5ZrNyvxDSzmhx2N8RVg4nTqTJWKiedic",
  "key1": "5FVyfM4g53DtkhyRJLeX9j5F6howhPn36kLqzaAD9ve2y9aQBM2Pndt6SBgjbRtLDjW57SU7GgFHznHPr1K7pgcY",
  "key2": "57e9JcVt9EC7S7RguVoGBsgZBk3XE7tQZBcPrF2gdpBvsSVSzmCVDKL83M5kt5cXzve2pHPAtwj4VqFX9bcma9LT",
  "key3": "3Wez7BsVDZ9e5TENgK3WroTm7ugqg7w67XChnLditG5ivLexpFYHx3SEDgh212QR5ECbj6umecHB2RPUdfs6p68e",
  "key4": "5525JxeoaEPDRmdsAbq2DXJt9jCbr2znC1EiAWP54Kj6iQu2oJc524gFZqSNHyx9jZ1gWhRYxD2KMyAABGWoYJLG",
  "key5": "4FzWkdB7y1RJpzH5rYKyBxs3EVbXXBHEdY4bmUUMBMUdTJPphz3A7jjCJ8KbEnXMaQWV8LU1JR7swNk9UmaTcM2d",
  "key6": "hBLXTwzmte9aUsFEpoeAtHHTnXVyQXCzwwu4YuHchTt2HAABj5Cbuw9L8BsVW96bhqB5JVBFFaUjd2TdkKX5HaW",
  "key7": "3cztYzXaZXfJSYyW6YHYy3U4596EtcZZBXpi28yHHm2pFpzAxUM4VTDmwRQzZPJm2WKm7JtgxLjKBTJWad3QGwpq",
  "key8": "3vS8n5JhoAkKGpgq2scJaajSsng5X4nAosKEfgoiiHW1zqENe5ECh5eh7VXm3JkJQE3GAt3LQKZdRAJ1ir9c1Q1d",
  "key9": "XtKxrikur2bcK46Ux8QBFdbkNNjguKfoSCNZsQxHfD9u5YYP3qtLraLg92xD7b3ijdScVWPF3KWLmvwtrNKfhUA",
  "key10": "4XpaPs9q4yCYQPuSmfMh38nUcdnZ2KW3Ng34hWJKqfwXoL4mcXHpmyM3s7KF6sCkuHbb2cqvCagdXgeceGe5iPau",
  "key11": "44iXhod39M7iRKaCduMHwhPzMzFXzdAy5RJA1XEd1LL1TPmHT2Ewys8YwrHLyoB73S2gnxAbCiTF2R5aLRZSWcE4",
  "key12": "Enn6HX6eCzgswsvCXdHVkDva6os9e6ZWyEuFjhPQBx1kAQgbGLg3iavQ1rtA4tYXqxWHym8BB2xtEmRvGt27Cyp",
  "key13": "4CQLc2ztutSQmdqbmxhCCPkoPYFweozxz7nWjQZSEY1MGkD4vaXPzUnzSB792W37QYANp4pVs4fPQmXMXwZGXYgJ",
  "key14": "4WkRUKzX5s7SExx9QmNADU7Q1rUGmNR3mnRbJNoTMBNu6Ht5jT4u2vsUVK7CvXrfF5BXfah2MnZrS6gqLxCRVSbu",
  "key15": "Huj4zhsD1Lbt9zzvjA25HVtugbDL9BngezGtBszQQZmuEsgDaUBFzYoYGzSKojkmk2Q9Pe4JWAPHUfE56LsoJX3",
  "key16": "4ZuRkw2FXZtULrEZVZzBzAEdWiX3vsJ9cQ3gkh38VYTP7sjqxUyc4Q97FQLd9nSRWFZPCjDwZhgzfrqh4hYra2uh",
  "key17": "2FWYCzH9CoXyh2SJkZ2brUFNV3vp2Z2D4G1t1bmivh9Wv9kym3F98xt7L6USpEAgpjorcikKHFv6HdxzfV1h1qUa",
  "key18": "3hJpRS4temqjRtPhsQQhGLm2Bq1Wn1ctJ4yefWwqeerrJdMEThh4WPeAVygeeVtDeDT1m3yUjHE2NLtKVksGwQsV",
  "key19": "Liks2HGwCPjRZEyGP4b58JvbAofguRB5jBo2n6bj9CVmgU9wSCcg9ZjASoPYuMQR4vrMHo1KdAyS25LZbLasKm7",
  "key20": "4UMdrt3VQ2QepG879ofW9CzsHbfirY9NnRtAKPEPTnProTb98gEFtNWCReq9Cr3jgN9eGLKNwr5yTZhokFzpK28X",
  "key21": "59HuBxkYm7awuFJyFbbWJhxPGeyta6nHzf6YEdqdLY8SGhvd3ajxaq4xnGvDzjaYaQDwnZqTRz5Wcp68eQ6Nn6dQ",
  "key22": "5o3Y6BPm7MoxdK8mCbnoCua4cGrwjyLH9Z2FQrSqDmRiJgeUfp6MfYdbE6qbUWQ9txo3Sgtu2JTgeQtSB4FttnVM",
  "key23": "4j6d1rxgqQ5MUp5eqSbQJo2B6vSNJJaouHN1ZMMJi3inyzsFjqsiRngkC6Tpf2eTBQk8vi53sgCKCNEfvbgmNmYc",
  "key24": "rSUwdfrurRMRHR84SCeQ4oEdotvNJyN4et4E4BNGZADb2tsV9ZusvmCcpDmnUWqRY6pT3wJc5Fx8G1hVLpgFghp",
  "key25": "3xXcbR9BptcaVqkLPCcDrCXnG3GpWdsffLXjSJBMQcELMoch74kJYNXfMjJpDWbzwyFf7qSyccAMQjKzZriU7NSf",
  "key26": "4BYyW9BQruUW6DeqkYqrXnZYot4WbtHiK6PJ8HAmSWZc7wXmYL8WAqJCuK86yhHJVjXncFoH64x8Ri2JxGEH7PGy",
  "key27": "CtgczTfXgDNWQ14seMTWEccJab3KdVXvLVGMxsm8QAPz1RdkEh2yjbjxMtqECNPrueXdao3LtGKVwfM2fNKMd76",
  "key28": "2gRNUeGwQu4jd6SuY1vrjiHBzMG1fsWv1HkFVkWucmTRxcCrnjGsDRffq5LpEr1oKSNs18jjKBXgFoSuSpiWFDxc",
  "key29": "5wJsnMPUZfsF2NB8fgqECkr7Kys6t4bFvhKDdxWVWHgYS57ts16VXaWbSTK62T9CVi85KTqwGQ8DX4ACmCxWKt4J",
  "key30": "5s6YFPFPAPB53XZX5oiV3C3CCbxayCF9hzLwmL36mvJQ2JQxZhw4BGMMxwXUmSzNvpMAQ5TB1pwQQibApzWdgBxv",
  "key31": "66zabfQZF4nAtS7hjtSYW3RKeLniJtKvJBE3p5Vd3JwEA7W6yXnF5JRp3ib6UBy4mCzcgfvPZRSyMwY5MvJKfbFk",
  "key32": "wcLBwzyZrA9cQKjjnpY1Met4sdiZRrgxj1jSd72x49hRxHbt7vUoELKYnaSvMK3gtMZFdhzAHJHHKXXTqrgtjwA",
  "key33": "4Tu489J3igC7paUSqQTxj3DWqyu6A1EEDfcjqm3sjpFvx3eAPZC3fouNFEcuJJ6dY7ZGx7HkWfnbjJvDAVY75SCC",
  "key34": "32zL97pDLxeGM8H6K6QGF96WZG9UGVppN3DmuccMuTvgigtSbQpE4zkbuAbUBS7Qy5EJNpTXtvHLcNjee29i3tWM",
  "key35": "4W6wThKwMiqwNigpQrGhdDRDQK9vMLvMBXp6veCtCtocr7NW1G51YABAmG54nDy6cP4pbyBMK9SXJDPo9gtx1T4B",
  "key36": "2Em4YFyo8kKSeXs6NeCnrJW6MULqwktinN1TrbQiy6xPDymkcPHsovtoD4txMf924xC8FK5dW4WQZxnothud4std",
  "key37": "36EB7gAogueG4yWrXWjKnQrA1g1Dh92JqscRYJoLtTqET8Q7dGMcKkaXDNRyjKoWspHzjhPFQN5GkReKEHwBTBxg",
  "key38": "58YhJhX1foqt8QeTA4Jc4Ni8d8fiAC7vEpq1XttBKmeB1fXguQ1JzHjFrmoMEXY8pRysxqF1gGgzV7cdpLsNsoFB",
  "key39": "DXMicSNBxQSw8DQSMGZLGPcobAWLAqAy3u6vzpUXZ34ioqDk4EQyLEndth7MJ1hjP4YKRs1J7cHyw4hUC6Lhzr4",
  "key40": "35YMjDze7KxYssYaMPjxuD482r3BvcVtzACUXpbXVBH3Tf5o3HXbSf8bMDArHr5VfJPFpbW4Up4X1xBtiP6RXt8z",
  "key41": "3zvyy3QrBb3xFP8NuNywQ9GNU3d1zhYq69iz2jUe6YYpANbrTBaSQWy4ptWvQcSMaaPbqhBRBL3rJyGXj3AqZSUc",
  "key42": "2e3au2WTNmfKLytmNpTdf8Wvu92hTa4gEFBwWiWfS9AYk52GdXGSCRFUsT1cswwahEVsfSERXGrotCrsZKM4Whaz",
  "key43": "dicR1ZJCvFrp7bmBubonT6k6htZQJYQFvuYxt26v3xCeioCnijuZxYkhz9npRcTiSP2vNQJpXteaBjzZgKiZzLX",
  "key44": "67S6CTctaN4QKZKgE1xSJPwTUQM6dcrmkKSEcbKDB83nF6rSg9WHbkBzy3raoa2ZWtzhxp32SRSRRJQQwVNQ2Vp7",
  "key45": "5UvhXD8E6AToNWWMe5cLd5WoKfdjQn44USy7s3FBu6jVq3hmZeLca9TkLWxs2aiR1gDdtFemFChWoVRMzxTvH3Gx",
  "key46": "2DkwfoD7BspgBmdABZ9UoRP9cbqqKrzCtkNJBnjvL4KUELhbme2pTLohudXjBAShHLrtRqUNR9ETYwQEAUtX87Dw"
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
