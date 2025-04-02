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
    "5N5aw5R4jHocwCSTCjXSu4GCaYrHSse99LYa8m9g4ANnQ1FDn16CDqPfnxNKfcJ1LrP9S3bHB8bLDD2XMUhiAY5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rbw2bH6eTFFc2cPLiFSTeMLWmGfzaLto5cf6FfXXC1TpKfkRCByzsr93trEx1QGw2CDAdr9w8zsSybKKu9vqsph",
  "key1": "67JnGgMyWgCnPqsUNaemT1evsUW8j5bFEa4EJu78FVR8iixzqNpfCN57yHBR7upNmJh1tfwsDVJtaEkyAd1yuQdJ",
  "key2": "3mENY5kbq8y9vQ1jybySidKHg7QhUkjJVZRQJ3VzJ3MLJxkJxkbhiGPqkAUBPy7rafHRnozbT4wyiFMa5G5kH4HK",
  "key3": "PmuWHUTdkyG1BfbohuA8dBmfDbDruAqaifZw1PiQTUPUC6xR9PKFFD9GNksGe128DXGAcGCSB2HLiSbaPuR1FDt",
  "key4": "55MKW6thRMJhwcDTrY2a3j6QTp6WUhRiyxcSxRb7VeYVQ6Pf4dAvwWxX7bNgSAS9L74KJ7pCkDQwmegrEBFWJFTu",
  "key5": "3mk75z1rzurqA88xWA61QBcXZpoUKS95DaFnpE1eKQ1BaXNybfhmBQUZTgqQoDDMMQtokW95AeKZrCSMhtESdqoL",
  "key6": "WB3bqCTSPv8V688f9qcHp7n19bhBbi1aLCJ4ALVdB2iKong2SiTrpdBJZxUsDohRU8n5qBe82dUGntKnKTfNZXP",
  "key7": "5Nm6QEyVYro9wGuyLb2SMJZk4db8qrX62qcsTJs2ofLjZyyCyFk7m2aH84jZg81mkpa7iNFDwC9WCogkW1hEgFK6",
  "key8": "RdNMGTURMzdNBTVqy5hEppaBFpnm6MT2AntTpoPLsaL1r75h9FUbsHSamvtfVu9UeQRkcQGq2nxg2eEVQjVXzpv",
  "key9": "5EpXhLG8jNL1AZcmUNBe2fouv2E5Kvhyo7USYPzXTFPrtHD15qkkxEr4Rqo8bSCPQoDW1nhbqemaEtoFffoe62gu",
  "key10": "49yjqLb7wwxABszw4MoeTy1SMnewfRdH31Ja1Mc7Pz74rxQmLZYYXYEHgRW6V5H9RaQeP2snZVhMkLu8CVVS1tKC",
  "key11": "45NgzQYTZHEx59N7hQG14QdDUSqVYyFKntFdWKQxNHbAuxXyXgo5vnGx55q5R11Ji1zqRoVtHEz5gEvXT6N3SwhH",
  "key12": "xZpbFvVd9yL8igUdiPth9wWjZ61QvD95qdtR94Q23vD5v5dUcFg5MMPmntQgwQAPxhRnC4weLnb77nzm5zS3uD9",
  "key13": "u1suS4Co3ZHcpsai4Hb23LeQ56DabZd5aq3JtKCzrfHFJ7QtMXVttoAtEC8hhw9QQuPUPWnbGwwVreWmnp1gHaN",
  "key14": "4Ju4r3fKbeS1jn9mTeg4xvJSBoYEacEDtHb3jESJUw8AWXaAb6XdKuhFLLFgVzpGPZNsBGgbttdNdyn9tNzXzfMP",
  "key15": "27YYVYVQfECuu9krwDsbfRT2w1QiKM5cD5VVrprxKrFXGizKb6XziESAyUJTe4d3yuJgyE1BUQnVG8Px1JZyA9hM",
  "key16": "jJFJkSsinzg3xYxPSGRESDMVRUchC817rcJxnZFbxULTH7PK7Spw9acKqhc62kRe2Daz36FWQ7cJoD3Z4hqg1tF",
  "key17": "2CtsSRbJ7eA7G28qFEv6j1HeukFERRgqCEL1nn1Xbp4Q1ZqgHYZ2J1uCD18E6MAexrfAtxDrcpPz5AxiF8PafwPn",
  "key18": "5kALvCVBDPhGRxiSF4GeHxELdfvRLAmyYyaMRwg6Vy4tdynjQD4EFxfncv6FzX8p76d2kzfmyyyMBsyvv895sLiU",
  "key19": "4tShnryZ7F9ud4ai5bbzK6BAkx8VeZ6spD5fireNQvR9MUL3rd1ru7geznqZB5Rdga3H4xHuf3babFHPkLqZR2Eh",
  "key20": "24Z9XUd6cT4QqZfvdhkYJYL2t3fin4jYnBaUMM77BQ2gUbY5c3fS2doLDMBiuhCrpcDToQhBkyUYPhmwPhBsgPGv",
  "key21": "4XQwM4GnbfXobihgAJq2qxfdZxFrztjTdywJ5aQQF8i1PRyGpUMVDtiREe7udvm6pFB8tvQCqBN2ZbcXtsgpVXP8",
  "key22": "5twDabCFx3tiUyZnFSLy93RtmpVixB94oh4TaMdeAVCGRPLvyd5tTE15iz24fSYq1ddc6LEo5zeCGmUWHJV7zTjD",
  "key23": "3atv2DmAv5AJ1p3UfJr4vzBER7nDXSxQdYy1swdhogG3WivYZk957KiKRvp5wytb21NMbeVeKd8CpCbwcNzpzMAf",
  "key24": "3mWVmBqKwqfpyWwkcTHRPsBYLoCYetdmiroA1LfxuLajVDo5BqRACrCX9YvMB4rU694GYEbHYvXRU4hkGALoi8tb",
  "key25": "3Rn9upourD8vBqUR29fQqfQoQkxMZfapZN5FmhkyvhpQi44qEeaKyi5WtJZRafQZvbYGo5F3HYZ2bai7mx6pN17U",
  "key26": "4hBx6hK3m3ZgT7khTU6mJpPMjGPrjh8iLV8juzb9koaKLyFRVUd4QhL25UPhAFQACcAF663196v6MPZL1mKXE7r3",
  "key27": "3nxQyLEiMWX9TXskUsGHxrU7L4szY1Y6AevppCFyDkrBpGSPZyHRWnwFyMR2F2ghkafYuA9KBitGPMLKzQ8GzmE3",
  "key28": "4hHvwtdz1CULtrCufgxgbmBjrs68EmRacVcD6rUhFEUq3h4Z3dqfx6mN4FAavuTbAAKuQpShRhRcYhnXe6FLxnXQ",
  "key29": "4iNkTAu61d8aSUjV6rXU8WRNqBJXa3sJMy2DAq5PcsHRzMcswL5Z2wTCeNowcGigFDkFkZ9snoXDpRAKW5aXSDAL",
  "key30": "5FBmbB9U5gVdLd6SwifdtFfGe3DepHQbAPwf5vneYFMDHmWeSnnMAV5ZCu9ZF6HwAap5MuD6kTPexcjSLQ9MPDJb",
  "key31": "56jvQFWcGBGqwvaE4byYvNXs1DQNJBVbRizSfWp2o5ancE9yZiQsAYEZCnVCoPGibPWUzTrsPQtegfYioU7Vpwyy",
  "key32": "XoCkiUtR9PYWHKDvVyEX1RPmgZeXcFH3Rag9tNsYqVWijrrLjA8JTon6gTbz6z63vY8fFb78d6S2oMfmX9QM2y4",
  "key33": "3ivzrxERx1PJzu4qSZtUfUeuvAPXEuqZW8WFPeLdTziFveAnn5bXqBkC5zyJuFYCNW7r44baVpMQBdG6AXduyxkW",
  "key34": "Tf1Pvwz6wYT81PXDEL412Hcw9W26jaadHNBw167Yoazp7cYgpafAD8uMW93rqh4vWm4xGFMY8bRt7p6tSRvxU9j",
  "key35": "56ez8Xc9mnCuXg9V6AaRb3rqMCQaJeMMvRXYYYZdAnWrcmtQp8mypvbw5YiMUT13vRpg9DU34kbAPj7gV6R5eGH3",
  "key36": "nCa3Z8gtBk8ejxTwXghfpfo5eH6XxuKLc9iFJbBkhJzLPpXtBvAc5fmQGoabGNE7SKc61fuePisp9KfVt9KdGmV",
  "key37": "3RXKRs5iWpLPpaF3HMMDJwMSJjxjVZnDsdni5XLaN6nt8VBTzF8UZn8EqFV6yL9BxqK6Ki1VkEpdG27238rzXoSQ",
  "key38": "trNvGGWxxBW2e5P4UZtWnvry9nfdUUTEjfh5Ljn6et7zVQGLkjjmscEXNtnU7iPtTpQY6xWivbaMU9RFrazwtTs",
  "key39": "3j7qWW8dN9srz1QztzbcnViGv8HXAhb2RbmVrcgPzF1L8TBQ4vkqQtctbbfQ1qSasGTJtMnH5wsuXvhPfriNGMUY",
  "key40": "2ipUKz7c4NJJ2zGFYPhiVQDVoYbtLXjvrz6Yie8nDsNGEd1wUXR9uwAWHzXcQXtf8Ytn24ppZfD4ZVCrKrjvTzt1",
  "key41": "2fuFVER7bWCsprnnTPgREr5uF3wrUL4i2zEJzbuas6sMzJNJ6qoPdjVijogcETGdFUG9Hr2YodkmPQJozyP1juh3",
  "key42": "5dcWpdZC8ALJ3Wo2xFpMUtQgm1pnbuFn6eL7o9YJV5gAmKPkfsAsJuw3sYSpM97rz9QFdb8bBMiyho89nfYJ4g6M",
  "key43": "4deknNjh1hE1ycygpBEhh8CmxEz4LLjrrmq6op1XocHEwxhP3gxpXA9ghYNJrGrhDJBwN2ie2D5xEMKtJxxKiZfw",
  "key44": "3KbHcxDiS7GiW9mXphuPASybHSunFVPEkFHM7b2HuptbWgj7viQNnaTGMu4hGejn6NEJp3tvqJDuzg5FPjpqsQ7m",
  "key45": "3xB3Fgvtg7YSYeJpmzTw3tDWbvNHVCyo2nj4iCUrtqJmAtJinb5NHNmMcUU5LhaWKe1sZqHEPLchYdEfd5KNbyGB"
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
