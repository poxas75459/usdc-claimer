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
    "2yVunCgHAVz2MCJyHmGLdJL7f8h7nvQPHs9mmCsie8snCCiU5A6brBrfAFGrqw1vqMu5gVpdJaJ7d4aKAZTWLFJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLZiizKFkmFQgWi6KjRS5jDMHH4MwrQKCdSfqsC2xEiHdt91riX9nJEFp49rrntetuveyp86EAYkrKSH3rC8DSR",
  "key1": "3jwgtVdQxnnGoznMwszjUPGuEnxMXMxA52PUgqdJ7aDb82kVbUY1FVry2eHVW3FmAKo82bFzweL9o5bedwnJ5EH9",
  "key2": "3prBP6DMPFAgaEqFXSeqDXhcf9zUrvwKuTPm1nLgMCKRr85obW1U9KnTQ5oeLJQ42kjxmBLfcsSJ6YP5uBfoue4g",
  "key3": "5dKwndHgp6Lf8VSFr6kGGDEJGi9abzdkzyHAn2q4QtK7q9TeRjgbP5i5Mp2kpoxvaCiXFgMXd9wPLP8RTPaRr3P",
  "key4": "5nGkbkZAog1Y3Dbox6wECFpkxBwbrSwFetatsweGcbP7mE5m74yKUg5c7nVMQgas9UvjSPrbp6YHRyRp6ZYNXPXE",
  "key5": "gUxxc2miQ2m5C2dEY8FUip9wCj18hvuUhjfopB9ZmPpc227NMz1E8UHmah4cr3U8nejYNA2XHeiFv2CZkRTvFfQ",
  "key6": "4pQgzbkGAYWJCa1vFghje5MHjv5ZhwRRMUop14E46E65ibduXKF84BNg5NdHqdLkE6gZkHD5JF8HDr1o74QmuqyB",
  "key7": "5xwytN9EqhXwq4GXKxkwhdTtKk5CBsYTQVZ5tFjADeBfaY34hJHKWu2UQ88n2tkWhd1Jsn3WU3gkiPki2bjn9xEo",
  "key8": "37txiiMDh7FnbAQztufzUjDtGR8mN1MiziusvomXaWAwBnWpoVvY2AqJG6kKEEQGfo3JPvwnozpcHadyGuRzoQ3e",
  "key9": "2BKZPS9nMfmSHMFyznsyCZyFT5iW1Y9aKMEzQoCCKhqXTvDEkgY7UU6iKxwCVRhE8ET9ajVd8P5D4QvbRGzVSPKa",
  "key10": "5zmaHUs1CcpGdWChYwxQGGSXdXKt1DPedDkEoFet2396PUWnKmoTBcQFrskqVFYpLRwh5GnaSiKNx2qYpHHxLxCn",
  "key11": "8yQLdKQuCBwEhzfbyCC7MCGbVDnqSzkWUNLYTnwbAG7gBwGcnE8KpYgvRv4UXDBxHaUDfD1dEqV8cRmDevxJubJ",
  "key12": "5Wm49UWCbackRWcVYa59dwyAHmADogkUKkmRwfSpM4ManToMqhpASp5i8g7YioofuhqiYMQ3DPhBt1VMztEMfzre",
  "key13": "3qiPeXqgGSei1kDW5S8zhHAjXk4b7QLEtiao19B1n7a1gAB5zZY6ku94xnbiGj8jGG4hTvZZg3WjXMMpRtEGykDj",
  "key14": "3mghCiBfkbwWZXwLRsYMBKLbk1A5UmCWBDCYKV7SZGTNnsaTB7h8xiKfzzD4osxoQWMDDcVqmWXgFTQdvnLcL5Yc",
  "key15": "3KWkspHeg9wGWwmEhg19egyLc2ZW3uknLycdq9U5xiWAStNtEHdrwS4fdRbqD125eyUbBaT6oWZrCBQ1UAoB4dT6",
  "key16": "2N25RPED8bL6AS1YxR3XEVuQiw8qCDdg3X5sp6V9epKRhgUXYNN7esTFgJwYScjuE6Y7vH5E37Dc8gCedqCyAzzi",
  "key17": "4uyBYTsD3PYXHMiZ3jcGohCpQsc7pL6tQFkNRn39JSfjyQt2M8cBt2q4bQ9wRoYn5KfSwriUm7NWxBTXGao965Z2",
  "key18": "oV6pghGDYNGWzzdBrLUHfXgHVPXh5YfiQ3JNfQLh8wehfM6hZ3gtQFWQFyxteDV5NUUvPXz6fG2iQPb5AT3R9KR",
  "key19": "59pEAM6eypmEMyHkTBqoSgYnfJE73HqQsBhUh2sCfdPRiNgvdYiFUbi2ZmAB7fybg3P8J3yKRzoS3btCSdbNYJAG",
  "key20": "zNtgv4GwnYzJFBsRS7iXica4sZoTmHRw4K4r1X2RthPWDeWNooAPYsrq2hB7AUSFoXqcX5fxdTCcVzXPmoKNjG4",
  "key21": "eixVmSqvHEQ4KcJMdfWYLQZeexogFT5P7ZWCom6EwJ6a978K5oJXxPUzkhkz3k3GrVKSUUJuVQnkH1F6KAkgXvq",
  "key22": "4bitPFZWjSsVPsTmSi65yqxwaMYAX9cMbaLwzFgJ8Q1rsB4SA4d8jXwd8edJ2tB4NFkdAHrnTyzkr7e9Yv5SVWfK",
  "key23": "w3DhZLJgbAF7jZZbp8BYQcY2JbBinoWie4uG8V125nmpHQVRPK5YTwuvsmfMTmdbjGZNG2r4U3MMJD1iuuUDu25",
  "key24": "5WJzyTqSjHaCaXGpNk6rDCPQAoTJqz2GLCu2LCp7DE5ZxpYeKGvtCsGzSuGNaJVHwbqyFZz83ryUEsRYbELBrFML",
  "key25": "4mUp4fMss8KSihrCVgwoYS9WChgiWnAPCSPUyJm1V5xC6we7mi9EGhVxxpo7QscojKBcJUNojYiUiJEpukU8FWgC",
  "key26": "3MgbDAiL1J2zV4Voi5ayJzA3DrQdXAi3CKHGZoeDQ8LDr5yKeZhnDgct61F1uzmWmFTC1YLNKfbmPzGmtHv2xCfn",
  "key27": "21N2xAvwocioQBGRtFXZZyw1jYZAHCghWoJHG3Td1RWS9o3auDZecpKoKa3EDWoAnAwdzMDU42oB2ec6HatYJMA9",
  "key28": "25wznGBohkuuyaQL6gNs3X8u8V9y7dWXEZeM9D5AzMA5fvD84auXbX1M4txNohmbqAfQSx3Vu3aQ1wzAFP5sNmaD",
  "key29": "3NqDW7ptARUR9SNaRedFoXPTXsNZGGEjkjEPnUNVFPP69bsR5XrUQsnjfWRwaUYeWnGZ9JgurE6KK64FE9bwiNBN",
  "key30": "4if1QrDYkM7bJdaf8UYHojkDHVk7cz5bKdj8BQouKdZmUAkcM6HPBxSQuygUT8iRLi7AEaABrALtP1tREjehJFVB",
  "key31": "4n4z3FoMrk6ruwJrjRcRp1tTPYEFgP61S93N5AWfKpa27WQjH3mcFVCddBu6qTNuFaZ9BVyNTf2QWxvUKPqVYXvM",
  "key32": "3Rp13dkmMsGuwQY7J3zfevRamDG176i4aZJiV828dPY1VmS2aFH3wS77JgKN1R6QX4XxRFPuEyX5o8FmSZNdY2Sw",
  "key33": "EuZ9zTwVd8gabCb3s67F5qypybWwnzcuorcLkM9nGqtmX6JUSabYSmLDwqt5nXsiUaehnn64HHjwXHMBhMBNKEg",
  "key34": "4fMYWQv19o54S9NTzdYuNtHtuLZCwPaf5uWCd6p7PxDKtv6gfPBKNxCR3SSe9WU8axdA7eKgkgP6qcZGz765p15X",
  "key35": "3zgZ4y7T9fuxuJd8NY1MzCJcct6UBGHqCQuXq8E6gJPPeUnCMeswM2AqiPfmHMPaEnBmUtrRmLeWtnXTrziETgwd",
  "key36": "42vgPeqUregEyM2SYQHvpFDfTDgPcLNyHGmSBHM6NdeP5SakMhKYoC6fcZEfNXCD1mXi518SWLfFWwh9VPYoQEpW",
  "key37": "3KiDNaEFs1H3YyvedqAinE3QWXsmyNBT9niruCkhPaWu1PXiGBr3KbnTkcJCgYLaXcJXqyGWda3NBeW5g6LGG3s2",
  "key38": "3bXs9kduAP2jZK38zkodXgR6XaH45nd2CaNEjgeqDFpkgCVcnoLvPazVJtHHmrMRV3hrDG9KZzjbAttyhBMdDWqr"
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
