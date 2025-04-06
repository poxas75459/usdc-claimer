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
    "21EgrdBTsTFDzkiE2vvvWDBN534tbswwi6jy4iYwMmZMtyk59mDUTKyT3YV53y88jk2crp2ATaAad7CvEL15XPKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cczurtPYhRREtYpckofFdEqg5XWHmSJfcWAVwdpg4Q8c963gaZBDJ9Q7Q3eqhJu452cLNyeZ7Wf95B9kY5HPQUg",
  "key1": "97VvrmRaYCNeGQvapsWLLtnzXViwu6uvUrLM7BFMnoMF7d39yL9t2mt7ekWmrcTfbGgdBMbdkscfSNqTU4AfWVT",
  "key2": "5Z4ZDtbF9s9xVhq9srrzwMXhG8UjYKbTXsvrAPixW5VntUoc1mbUe8GncdL7JGWqCAWZPGzqXdxHNaFFgo3X9bGH",
  "key3": "3t995ES6aEy7MCBeRRSZnt5zQZyMfuGb7thCd1YDCNibrwBcbrkJ4J3FFoBr5pAS57vo6mKPmrWbZBWpKCqRNjCe",
  "key4": "2KcfMyuyjFoREsiKUJTouKLczmCQg4nerAnidTnZQwmnz7s9EiKz5BdPdoxuB3G4V6YiwKKTviXGBXTThjTfBbun",
  "key5": "4hHL6bKjvxo4iExQEE8ABqnxC5mhBqSmmoAKJ1FpFVxtSApKXXTszB1QRArHPHTe6gKbmBdYL7jZvysy9a2iWLSp",
  "key6": "U65cUDMEAdq1DrFh17CQxDCtnmKak2X1BrcvfGksEgU25NaqRq6Ydw9pZGxBdUrCbnvnPn6MNppPjAsC29HLaZQ",
  "key7": "2t6h5yAmiH5A3TUmYdcnW7J1PmK1P3eYvU2VJp2dP48a4RJ3mJDSL7MpUWtN8Uv4TyaEmBYsgDafcrTRPiWKUc8x",
  "key8": "BS3G3tpCQkxaQ4gTKE3fHDsBpMTpectLNRFtn4CdWHPeLu5FAnwCevskkvawvWG3ouzD59LJkki2DQiDivS9UrR",
  "key9": "5ikPt3tg5Kw4ak1NY93Zu7U9jkHZdRYsex3Kd6P3jUT8jgPV94QPxcvSAVURRTJyPeHjTtpVV57t4f6Kp5wMcn9V",
  "key10": "5Q9XzJyigp1HXjV5cNv87kdSxk1WDGqWjnjRzM9yzBS9NgQqKd7RK3W4XDo8bW7wqRb2vfinngrhroCq6ea7G1Y5",
  "key11": "4gazbx8GetZ1cSZUBRYWTRjUHhgZuqMquZzHMoRPUmuAAuwDbEUKvTy1G2WahBgJ1vqwNrqNBffTN4rjWrreGN6q",
  "key12": "t36A4MHe7qHMFoVJ1zuzVPzjzRkpKCGyV8v8XnnbHkuRVU5kRBrkYwJXqmMLJAJY8KCSpssjo4WJ8pf4KB3fETH",
  "key13": "4T6vbmXX2ZSG2M9rEZHS3PWdTrT4z7shsB8cMKWghnPYQT26UMQUy5jcqXsnXVDvUaz5eLFhYVjBHNcgcCxRSfQo",
  "key14": "4kfMyamxoBRiLadz1QBzLYAFCx9qAiQnojmuikBPTiVrvJgYYs9AEvDwqZFJaoYSmRE11gKUCDF1hZT9y4curYbB",
  "key15": "31Ltvrctrbvw4cfJfvdkFjJBgCRTxakPZ7SnDkpmj1nGaPSyJZfMFVxjwnLk7X4G6wsGzexBYg4miFnManPiFvyL",
  "key16": "5asjMAAVNiY6RVDM4XZSPRo6EEck49dDs2TPJkzYgBB3pynncRtYBcZTuGhoipJQJaziTbCjVvXy5fWb2wTRFwVv",
  "key17": "2KWhDwdkQfny83cQHagrpLWDWr64MEacFnveLyAkDpExLgm5CBEaU6cGMUMrKVV5t2RE6KqcSXmmm57G8z1RUdjT",
  "key18": "5zEetTRZfDhQYzse9atr5rAF2zBd75621t7rXRsuaj7PzFbzGmsSCrNNZfJdvSCTELE11ffxdRCnS61KEjJgVjVm",
  "key19": "3GoKp8BtkZq6DmKE8Vy3JfBDwUaTCx4bgtS1c5EeBgm4CEULS6h3YsFnxXFNbMJRFP3SafU1aV4HyofCFmPU8nJM",
  "key20": "TEeCryF9JtMTFdqqZWmBnQ3iAuUe5AVg3RD3bp2Q4cF3fmC789LdfkSdQZQcpSzPZrAfBJoPbQ2z1A5N8SY3x5Z",
  "key21": "2ukdWYRVpjhPMASDjGYCpPaGFkV5jmviwuc3xay5VqBDfHjCYm4VJ8dHYyQafL9sP8LeWDHf4hytzmELahkVTmBF",
  "key22": "4RwDowJGBQDUooEJACsPoNa58HqEeyFBCjgagu1uvB3fuBYUoYqqvU66TqrdXu6ourJTmK4CoxD6EJKLoW4EugGi",
  "key23": "3aTXpQty1sFaxEnMXgD2bchLkLBHWh1wCfP2sB41fqbTACPwxUPnCYHQhbLU3nPwHmRb6uwxAwcaWa8XiWXWE4qx",
  "key24": "3uUvmXb4fSDcLZRaaNTqMnNeokewtby67AWa7TCvzdyFdwoS2MARTB1seCyywnNDGDfJcBuFP786BFUS6xd4eMnM",
  "key25": "2Yo85vVTY1iS41HjnaBmsgGAqqX4SRj3jBuWjrtXZ3gRD1e3JzmFB6T8q6DkaW1TjWRSazYuAADnhuNbh9tw3VCo",
  "key26": "2arYDmi4WQ2Md6ZeU2UEQBdxp2nqtAJ8P9tt6kaxj4RtRRQSmQEUJ84adsRgSFVbRfchGhEoprvBHALLAXC56aQN",
  "key27": "4WF96T3LAqfSSk5vffgHHjEStsw6vXbGVYzGqa3mnCckAG8Wo7BoNamDAH4xfdLtR2M3AfMnS6D53RiaF7uCGo4v",
  "key28": "6VoU5ekUP12Sx6ot6XRHEHxwYbuqbM1se16DLNJc1PjanJfbgS3Ky3XiRskNYkdCW7zfsBYn76Mmyb8Fv6TNZtN",
  "key29": "5B2YtEKko5atLi5hHyaQty16eEfqhRQWWriZZQw5m8cFG2M5iPAaGiJXpXnWxEnatDg8UnWeRW8CgMe4ZMchMQDL",
  "key30": "4ANPc894EaAB8sqs9JKXMjvMBN3e9gGMVj7541PPnxPKRuuty1X3Y3VQ1k9RDsvscxxy8xWcudNUJaVZvXo9v4jr",
  "key31": "5AcopKWorbcXwq1xjH26cDaTZnJEuQsk4C8vQ6q8BRrxQyzK6ka67iNHq4J2Jy3fxdGQ1PjwLAWAzD2oQzLw3nNG",
  "key32": "5exj7R2kFBi6rxwBCQnMGpEXFpjNL9tNZWPzNYybSoVkyP9xq11159aXpt4gBwGLCmsSENMYkVn3QHeq1abG6rB2"
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
