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
    "567JaEVzNAut566DQ61FE3JWYt7DN51nNUeC1q7jJFdwifRWARrCnNU4VVWvKcbykbXEvKaLKdM2SU81Pe5hBELn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n994XxEda8kuvX5ncBkHdVspHSzmiuX9tMNuuq4LmUG3j4dXHi1XvNTJA4T9JNsv2vH7nhxoBcNYL9efg7sLW6P",
  "key1": "2MpZnMaeTbUriqYYpYkYDZedZZXHZBpLvXqvsnT1qen6uxGr9CzuHrgZYjxyFBtogUrBCYrL5nDow37jrocnifyv",
  "key2": "g534DXkDobe9B6Cgqdw29ByyBGBS5RxkscvWZ2cQ3GRMGhmnLGXAAzW8eMsXT4dG3dPXfgvP5yT4TMw9sPMpYfm",
  "key3": "62he2gh7V4MWk7Q8Hrq6gLu89pZPJARaELzHBYAT2bdASPdwoiSymUePi2rRV7BRDVBxTEzj7RzXxxRWdHys7asx",
  "key4": "6647wko8LqJP1t4Em9EMsgN9eg5aff5mGJrmTiGXuYvtZrP3RRo7uTePupCfEJPiCUL2HX5ww9UrrvKCs1WJbWzg",
  "key5": "2FrtQQyrxmRV9kyZxTZYkR8nGZ5wEUbvZo2irKTZG3YmMhaBSVgN13ooVUEwZvKm2BeE4d6qgRuuqj4B9nYCfYjR",
  "key6": "976rtEirzKBxxLk3YvCHUiNstcKjp5VLz3xS2VC38vmTzXXnBkqz373mC3hWZWGKEzJrSV8Sd9RfqENFVVpQFjQ",
  "key7": "z2T1TDLmwrVXxaXM9nFTH1t6A6CYmHXuyR8bbGquPt3jjpfg7jJnUJtnrs1czXqW9nTxvHnA4xq8ayKbyasoG8T",
  "key8": "45vAVwRrNEFeExa7yQexPChQzXNyjvqqoEbTwz2pWSHRsSDhPbY7iCjdBV1EDse7sbUr93Ama8mG2vigurGBTmsT",
  "key9": "4upPSsCjqvpsEP2fjBB8A9mBz485WPLEbVtGydT83pYnY89VBuRD5T1i4wCq7kkep6o1Z7MotbyZ2n3RSrBdegcU",
  "key10": "229iizMiZSxE3Yo2CZKVNhLiSZ8QUrcz2fPm8A481JRYag6jfNkR89RmotfcTkuk8Z34eQNZ8tzmD9oS9vFuUyQV",
  "key11": "4MYDyjnMc7g3ozpCF8zArKLtGkf6R4pEfMVZYDRRsuxTKTxRvx3tbrbPTNTXt41ZUvaXoXZRAR8thyPCpKcgWqhF",
  "key12": "5eWWChsr6v5d8g7cHZXVksLkKEByycgeGbvxZZ6EvHn2jn3PzHkffK2HjCty24EoQvccxutJ7gT7Ln8Ybic9Bpnt",
  "key13": "3xMf2mJhYknjLUircgy3XfJbu4oFYNfrk57LgG5aqMzJEbcgvf9J1LZ5rHRTYDqyW4UcCeowBQBnMhpPkWvqXYy6",
  "key14": "56fisbcGEMdqpWj12jBGihbSbhJvXZLhH7QeiY2D5eA124ZjfJAeAz2DJdk2E93jLEEwzKFjT95oUY1GbeNzg3pf",
  "key15": "1fHkf7kjVupnhvwpYhcb8LgzKWmMryQXYPJRiaqRUpAWiQ7V9YMnCRH4PUTbsz5tgpu2zAj8Y6aPXw8YLJ25Jsf",
  "key16": "4T3FSEoysmVhjvRNES3dm5JcNuxyvNN4QrN16ozvotC46xqUv96x176D4RM1ghKMjK8ndVqkGuWcXeSUcmP1xWZa",
  "key17": "adCD8zRFwCwS9cZ7rhdFo9vupjuj9Fup2mYQ5P885WcdQaWLA1sSvk8KJdtqQD5eoJhbpbFdR97PdZgQoZVCbcM",
  "key18": "mkPLbAP8koqCgtynTaL4SrFMmF1KpL59GWEpo2qVYDdbStmRa1aHzhmsKsQxs5qRZUTfxp3A3P8hGX8RQkrWeNF",
  "key19": "5327QN6WXGfsuc6oGMw7xMfWXfG3rcmj1CZtJxb1f82SoaK5oD8VHW4hHggBW1VRZXofmYCFH1sjRjDcqZScJx9u",
  "key20": "2uuSRKLof7vkaFsSPvrACQsG2iref1q93eB1cEcRmskFpHm4PnXJ7XKj44DiiJQkwc69A7rYUVvVTU2oHaWhb3vB",
  "key21": "3RU9ot44qaPYPK9T1VZYcqCtf48uK69v2wKAqy5pPm1YJqMKKUeFPbG8ffhoo8J5duTeW28FqiaKKBY2TMefWpwg",
  "key22": "5mPVM7tc2uARHMQadkcjQwZj49caB4VG2Cq3t4qDBFM1vmEpicyrzHD9hxzKU3tRKPkiH6Ww3kDHybcpk7kjMgvW",
  "key23": "3pGaBk1cQSLoeu9F62JdrNtK1mbaSc58EsTu1fLXjAEaeeR9n8NswHL7By6ttPYB782i5WPcVhaN4vUZogb8sBWN",
  "key24": "z27dP8NkeQXpdQdkmKyT7MtBTEduBqwd6uNLZXCSZ8v8TFKuqYoFzHZ9DmTjQShrwLiB8L2sLWiDa653AukrQmt",
  "key25": "skNgdPbViUWLgBxKRv1UXJtNKX4upaSHUbdsEk77sVbkcg2CEbEKhvZu5wG7sSe1n8V5mYJJWCJcac5hePXdNYj",
  "key26": "3agoSJ5EKfywjX4q6zm9AQcrnoVXJtTg5io5C1zqRKQXRioa4gdE7xbJmG86La4AScwNWUgGAMrkevitYCT4chxv",
  "key27": "5YTJbix531S2uqRWKr87qCw8bS5jy4T3VpJ3rHgnPrQ7yhw7zAdNz1SVc9suivJCr3nrF1UNfiuBYsu1yv4YSxc4",
  "key28": "3pEP2vkY8zdobo8cLS8EumCKRLg9erQT1DGknhfFxWyBdMPJJyUAYT9MndNJqRRKmdNHGcQBvfVLQejQT5A2Gh1a",
  "key29": "5wyGw1VCQBRE1Y2rJbYicjTH3GqDtoxSp2gG1k8CaGR2MueTsBPrHRrWgdEpjkEqbs3GoCikUXv3DUqo3CTX8eW3",
  "key30": "4h9Psf8XEVxVgN6ZkaVsn8x6unkTrJugR63Bx2G7ceVovx2T5yJFEKC9rHJ9aY7UEYdvMvEWhykeQQSJa1Mn9j43",
  "key31": "B8GU8ywSZh7SwfiE9vcmDeN2cyHS6NgcYVeet8dVDS6XLp8bNWFR12kDqenUovazbsoK58v1Pa1oeDfJkkFiaGP",
  "key32": "4RiHwvB4W1b56o8bLjsfKoSjhB6ns1VR2HqkXPEVf5ArzchJpfEyttwzgo8bJaHaubFhM8pjQcYuv8NWfhG16eCs",
  "key33": "2aCoLzFVmqNcnXRHP2Bb3uAFQf4t1xM3iXWkU7tehDFt64qyVg8uj82mAJ4gCvHVc4vshK227aYhiRfJZCf6nAsq",
  "key34": "5SE7Eb3UsbeUWysf8qWgWLKwEfAW12FKyr9YYCMbXjRL88zZbohFUSQfBLQ2iRPeYknQQxndbBPkD1UgNGoXdWja",
  "key35": "4WL1ecJsCw4ehHQ7SNTDkQkzqbygz2XRhsv3q8A6jvuNYujtZHi8RsaGeBefgu9cQTMYYygWoVKc5UUAKqSHoLb2",
  "key36": "56XEXuVV6qrbq6UtZzxqGmMEkofMFVvdxEg1jc3MAm81eeqMkk9aLtYtDQ2cFyABMDjqKrR6SKYaZWezybdUB3WH",
  "key37": "36cMpmJxMX9x8z4F6LijuYtxydFz46SS2KzvfmTwFDhoLFwhwx4LNWGR6NnmrYoxuR8wFDFUom6W1SNzBSVbzGtW",
  "key38": "3DY2Bbmj6eAP2pER3o9PLHDryogcqZyHLMWTkVUJF9SGircsbFGMNXeYmfE8odWZDgonsSVeSNqH4BszK3hYCKPd",
  "key39": "4e4d2GkJ7Cd9Kq9qTntB1juQkfw7ouXKac7748VtFhcu5HpDYNnyGBHtFHksDefpvF1842x8R9qW3DokpuQK9Edk",
  "key40": "3TB2Ccag5nWUGa2wVm1KP86mAqnoWLz35NhJ1uZsKEy2Xu7HL9JrLHYv2X8JGz6Kz3J7bzpYh5QiY5HKNpmb5Tsz",
  "key41": "4Qrc5mJDWn4Hh8wNtedyGrQa5Mnbd7dXbha5LuPyYnRFZKcYAZAa2SppNc9sq9yAs3TWifQNqAi4q3j5JCYLnXzS",
  "key42": "UiW8ghfuvz75XQfEmikkaNEXDbW92cUUPensAzyVW5Kk4efUGSEfRNQhNMnR3726jLSPhCMDeVLBwneirtqCzHe",
  "key43": "61Fcu8k7CwcBqfptoDJcmgL3C7mJApJehywp24mQ4oQYtsMKoY42qjnvWQbePnK1xHadyxzqmwRpAtbcMTnDwzMD",
  "key44": "5N55BTLp6i7khJ9Y7n91gSQETXTHTs34Jwr2Ndd8zrb447ZKRfffFShdRVnqSJMVguc6WjNy2cJiUrPa5tjXiGyw",
  "key45": "4FfDAtFc86Zvx8soduamkqQddQzMhX7buQLETEvWtcCNJxRuPyVYgbc42zHM9t1ZWB2Resx4UycG5j4ijuft4JjK",
  "key46": "5wzvDbVrpgBxiz5mGF6CU3jdsoeTvKsyUBrCBDNEMGcibs5vuhjqhAWH2Wz4CVLY1AS8aKhJXse6MSSMy7hPraJx",
  "key47": "3AtSWgdbTVoR3gsH7zwUFfMFQLRGKMLCE3b38KLu4zCrEvZ1BM8FrcjmbZCUGHQ9aovRCpCKqy4KAZXhXTcxaTf6",
  "key48": "3819fp8VgoZVpY9KKcAujpPRx3uN6tekatvB7CNWrs2T6dK2Mvuzs3vpLXddLMjuXUBDpevHXHkUpT95s2QuabVs"
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
