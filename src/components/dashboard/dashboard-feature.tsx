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
    "5dCoX2uEodJ6WbNaR3apxf87KLYwMPRgMsMEgbbB8mWkA5BVgMyAwvnUW8Vn3aVBm61PybD76mdYczn5ePouMPNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooYzmXCjFEsxbHXEfVp9KB7ty4G8ZMthYQ77ZM1EHoJx7Xp2z2HkZtSnY9VqNK4NHeJfT4gT5em7auYxJZyAbbA",
  "key1": "4zsDev8ksqzxVxzFzHtJAeBZvcq6HwhS1tSPEathcksKAgJSUJ3kKfx3CmtJZCbsg3RhvECBTQpYx1vp1wNGqBuV",
  "key2": "5wJj9fcv16EvmzKzo7ToqPpHii7j2Jpkf1wFQBgPFZBRvwSM8GwkBmRggnUmH4zHEusmDQrFvBQCAuKjjM5n1918",
  "key3": "5jh8RChYeAtJbNBCWfDVtrs63bjU4Nn11iNDhcVjToadfcBEixS5qvXH4DNJXFM1zThGbpNiATGCAKGvvNzDa3ne",
  "key4": "57C7nxPR5WyjiKyTcUaK8Q8fz44B5HTmJz4jpQ7onAb4dbAZVvQ5ih8jHa8WLTNQZtGaxU856WdUQuWxP8wbcxtA",
  "key5": "3ZpBQwvSWq4WDB1LFZBFayi46F8vpctoxRRtNcbiduUFbkGYK3GwQhozeMYR1YR9mjECpaZKH4hk2cbppbg4N6dp",
  "key6": "39RJoBE4JT8fBSdZHa9oT8KZVe2Azarm5mZ8uTewZAovdxNcns4c8GTAo9p4jPpykNo3t9R6NXhCqnfGGRSdC29r",
  "key7": "4s3BBAr4UDjzTj8evr5AWgC7XSBCBmnSn7sDGQzXEW1Mtg8si9NUKRF3JHWdeqfLJ2QmfP9NaNnQfPQW8RaUbBkr",
  "key8": "3hLVrJpWiJ3GUme1JRn7iodHz4dt63UKnMzHAB3wLbySLivpBWz8z2wUKvoC4kk7GKCEecc8inDgP7UWFyvPJZGj",
  "key9": "38XiEBKfgn54a6FuwMK3bvZ49cCpxGcZeAXVNs7ktek8maMq5NfLAkvYHcM2wa17MxLjfLYXUCohhKHsqpGNWafU",
  "key10": "hmY9ezAyxDMi4cXfsAepp3eSMJG41jQ9CiSQ3iis3mpLMbJMqgcrqLqb5SWb6ygJr9KFt5cgtd6nemE4oZHyMtE",
  "key11": "BiXNhQZAeZKDLa9fEJVF79Voo36D9RhgzNvPjBTVaYU8eUFqNAJFhrJ37o1VDioZYbUjLj1MJfTwQMpYruMojmt",
  "key12": "3gVnhCAoXjJBGtt74GjkaCKdrVQiVFnH3nv5oJN8LUg11MqX1scUodtJz6h2WRFJ2Gv1HiV3DMrs3mxpLXBhwekv",
  "key13": "B5ozp1cP5H5GzyjfZdd2SY9kShh2cCFieFsMjjJMHUCTGEDA2on5RpmCvWBBQQEAskQXhujR5n3p9bURAJb4dxW",
  "key14": "2CUvRj8xRRJxznCXLgvWATwwQu1LQpnUAVXuQiWDC1dugEQ51yDbSrfKgCU2McNcTUZTryhnXUe5iawdd59RLoWf",
  "key15": "bSbqtGigkRqXnoJRjhWp8FNcgH5Vco311xE1jwjpmNuszd3oDL2AwwMuqvJYDXCeCq3J38LHZrNs3KKju5PNvLo",
  "key16": "omCuU5RNzhdMvsWAirQ9XbYeiAg45hF1Pm9jUXH8LixPJaRmZwgoFg5YAUHryKbSLN6X8i2L7ceXVJ9HyBhEJj6",
  "key17": "25H9eyhHiWwNhSyUneqGL66wCJ9sRPXssRsCfQttVyP4Cb4qLoNMQr48SGu6AudKRy5jZPu4uDXV5MiWz7VYJiEV",
  "key18": "qtEALue1vUvNnVhFXrmLiTmVnFrxgNv3KNF4wPTW86JJf3bra7qjA26PXioyHqnv9bu1w6GPCGwdv54EoN9C6gM",
  "key19": "puHHcZJuTwJgD1MX147zAXmuqokCD3Jb3NWAw9nSztA2udn2khc9S3am6JXp5AEPYwi3yq88AZK3YCCuodu7rUo",
  "key20": "4XAQsXqBWKArnacLJDojZf7cDhrTRngTUV9nfqYCLhWmbnCbvbtS2mx6rwMt4UfAb7E9z1TaPstBcyRnRZ6kK1JM",
  "key21": "4vdPmERroDUhhuBnFyqNPVAJbdc3oGPbUnCNxjM1LE11AKrPMT4bzmmTYjs5JdH7WUS8xsnw32Yyt8KctpCmLUpp",
  "key22": "26PnbcmxvJe4FJY2uJnyCwFxDDbVfr6JYtaSyfqEcn9nyAhVAJToR9SWZvzM3dryP8UpRkp6s6vvvomgxKwPRXfx",
  "key23": "2g2BENXf1M2XHS2vEz4gyeftEgYdKNRhMBCfgKuwN69qbUfdfdh4kLebj1P772QBTSqDQLF85Af2szmg7uJtgf4R",
  "key24": "622D6FT6u1FTM1F2pkcso7mnD571oy2S5TULpPT1MfZtsvuS8EyekeA5vnT5qM5M4iZuMPfehNky3bEiXpGiVcJy",
  "key25": "3tPUi63YuUztebP9bGXVhrA7H3UzskHvAPygc6A6PggBZiyC1TDADK5nq8RBADAUsH8YQ3RcFzSnTWNcNH7Hnmw6",
  "key26": "WnjjpKLMiBtT1JDiqay2YkiXbDK63Uodt49tGXbGEsnb33tZi7V9zopeT8LBFUAKxuaWjzBBka19czfjo85jbVT",
  "key27": "5zSYuCavSqeNs3HuHHoroHXJbMnZ9K76N6ZujY8Lzmga2t6ZYyTJSyp6tsth1mBan3oSinq22q7MQpEA5cQqSYib",
  "key28": "2tGgCrfyF3Jw6CZNxCbuNxzDbQS97JNxYrDD7Q9QjMhF24oBdeenouHkDg6AxpkcsqD5shkaMfLLkFmHCDfAfWsA",
  "key29": "4f1Ggn5UgCuCoQUhyBHLQpLmoDATBTFHAHPf1yrPvMWLfziJ6QUFaN9BKson34qXSqf7BpAT1ytfQnw6urJbU8RL",
  "key30": "2Yq35KEdAGzz6Ez1tqJAd6ZQy6uTwEav2fiHpTvEuHZ1kd9sBfdwJR11pYVNRD5pAtxbTbuhG5LAvYUT3j2o6ZN4",
  "key31": "3KZbC5wV7hfQ5h31bwpkF7Q5VaapnMAQ1X2cC92CYYUvE1AScPB2CbMf2bkjHVHnqZtkenTWMgVPofYz88Pby8pS",
  "key32": "4r54RdRyYAZz2EF2FR81u27r1HzHeKe5J8eWKRocf7Cqkok967uCpiHS15sCccGZk7ZrdkKGzTAeQSJgukehBc35",
  "key33": "4cKFSqoXZynXJsTzCQrwqDt8iGqFmCZx8An1AHTyu1zSF8bichmGBShqvb2LGjJMrVdiFECVpJBfpUeeewKSzMFD",
  "key34": "2Zymz1MJbnjV3jgx1nenLgMXspSFX8kZ4JpogDs7QtM1SE3Z2n7rC4As5BXrow38SFmgnXJNwprsyc2bc2doUPYF",
  "key35": "2qmY6tjAqtgv4d4Kf5aM4J9s4FLbVSGtB3ZXT6wbm7jrhiBQEwF9N5UMNs5FMZTUPpPSa9X9WTzEfqbSp5qfPPVW",
  "key36": "XDiv6aK8EWNV72wWB7NgRt9ArX1LDgF72Tropa4oNXyVS1cbzq33jxnvJR4gBf5SjBJ8yUci45x5bK3QMJGx9bP",
  "key37": "28jCJ1W47ZkkHnq8vZEMxaPkiSaSmFGX3NpJnMm7nPi5gGSorvRCEWhDvEMyrpPTYvqns3YMQY7cLNn485BphwsH",
  "key38": "5BKA9pR8tZUek374fR6GodXB5QCHxd8t4NPVDCD6aC5s267qDFJ11aNdHxzUFREzNeUSDrdZLwXC1w6giBSbUNEj",
  "key39": "2TfoRcAXFiKPn7aNXcFaUAkEfs9Ps8F6GFh1JsWBCZ8pwoJ7TSnrk9h4nhmGuM9y2nYJeAg6t1DnTmVgHwW43UYY",
  "key40": "5mMA45SUopoytGbFZT3u8EScRy4wEP8PMH8QVr84EuQMhXrExe2V6CfaLPyANW6cFRiGaBYaepAAcun4VSmZYRgb",
  "key41": "3E2ZHupn74woWHTqVzUaWYJvUfNrBwWrp9UmqagesDyBxs4JqBzYoiJWL1fdF1V3BKXLoBxfGirKLNriDFwvNyjG",
  "key42": "2DwZp5LXABjENystKJwwzP1iDaWWfVnHpKFUB6Bxnt6jFHDcTKBxNEhwrkcCXmWvHBwYyY7x9V7wB2AdDwUXjwSW",
  "key43": "66UobAoZiQU2gv7yUJ7YuqdznB9UJ2xBST5yCBEfGc1aiHTJ7e4oRvPWV1VLwfXxzc4FGuT3jnyEhkumkxnT7afs",
  "key44": "5HvmNjvjMKjMc2ZTGhYy4n8Hq2a6Un8RYEy4i48b9pavy8doFbXkFaXWpGfztktKNfAa71QszV8hPXaJCufLh7Je",
  "key45": "2RarjYTtMohCFXVxQsfio7GKzeN4KDBmCgkeAM6NVuZaXoP2LXpxmr48tGX4YPjKm4Lt18aqWGWm755bQeL4aLvG",
  "key46": "5sN1PkBgrVup94Tr9Q8Up6UZbwmqKd124GEMKBMnPMMjXZGPj8gV1nxKazp2YZYeb9JgaUrX4PnajQFF2f1FALX2",
  "key47": "3PnKhPAQCWfaqQL9am4yCMfjZWfMhD4mhY2erfpBZFUPDvPiLYBJew2PcQ5bzEkN8ZYXHE1axWNi8EPiQFkvqe8L",
  "key48": "3yF7fL6eDutDywLNLUQnUkPJqerdnzZ2U3GvbgmnSNyc7ZLKwPdtJp1nnGHxNwtrA236bvuFinKYZhWnvmUfJvgA"
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
