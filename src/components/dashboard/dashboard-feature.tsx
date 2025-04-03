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
    "4bK8aTkQyJNfP7BxB6QLMzWnRv7kSgZZRmtFe3gJWd9QPkHru9yC3Te4wYUZ6oChEERE9jhEHGQXStMnZ7fkjrCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZiJNGfYs9yA51gmp8nkt8YnbU9TWKKMA2vb2QVJpXJo7uxCbTJCyCDkrqZ1SR9T5jPiEHAdMHaSg6EsyUF3vsE",
  "key1": "5NrdUXwKw3SjAiKDgfRrXKFTrsmEot4xhjR3ma6sm1VwYUuyMRkS3HkmudR21PRVNQxcYeCAEWTwsvF9uLFTUjA",
  "key2": "2b4YJ48GmB4LcVpSSBX6eXSTrhMJxQKjox1HdYZELjEkzSXvvto4UATanZdeTBYxiPnkemtoefFN3U7hcEYvHMea",
  "key3": "2tudw7jzsC6AFqyxmk52A6J3qDnzDAMmLbmPVNhEnzTr6NAdDCF6LFJBztmmJ8yn6YktVJyQvqe28LEDcMnHgwUf",
  "key4": "5QCDMKS2P5V1BVntYWLYAxrBS5ra41KLPv99VYx5cBkpqZ1axYgtajC5DMMrp3esQ1uCX68mKmmF1KyQ61XfJ6ks",
  "key5": "4YNTXvPNfYRYNndz7YXgNgdokCEdP8szU1CPZYCdq5JF66JGquoBWG29KwVzoKrNVmTgCJcYFa8SJA1RJkoQ3x3f",
  "key6": "5a8yFY1p9bsxno63obk8vYWYx7Uu8gosTeaX2qpNW9UPM8FboQVmzVapKUArxjs1vJGUa8ZshxqDSYNVdXDicqrU",
  "key7": "653aHMNQEFyubs7oekMjocUF6ugfPKg6jq7cipwtjDJwcNApRypuQqVVZUjdRSDu4MXx3Exy7ZK2ZJmHJD1Q1Ezg",
  "key8": "5wC1a56y1X4wtQ3Vrdwu2HouULcLyoysiCDx21L9Ce3EGRp3y2eUeg2XQD1K1mGzW6NLkv5emNvqGawvUkmbNear",
  "key9": "5wBJn9KHzXgg4NbqENRvt6jRmcJng2w7nyN2XSWSPaEtpxhEVcJAWCFuLGt7G4oeqAGtBgnYFdV6cgRuNrujDhih",
  "key10": "5BxZcYyVYtDEGSVpMTqo9EFgQLVmwsDpuxjsBsR2jXxvCJDqgckgA3q6x3ixS6fETKLa7pBVR3yNLJq7ANbCjJYb",
  "key11": "2qRMWPy8YQEaHYApUtDvPgprsVm8pY6RJ9aCA4bQtsz4sZAiJtnPHXwiENje16fh2dA39EPgCXQLXBUg14RbJqRQ",
  "key12": "rxXokYqarnzmtsrLofnA3Hh8oobPamGevG41KCZ23UXo24cLNNg4XKpYWzX2SLZHV5PTMZN1BMxYRiqdiSVX9uS",
  "key13": "25ZpFwimDYEpueVmfQFkovxT5U7sp9yuCWdKwEp7JEnSu6mCjPb8KwMiWA4jHcJKdGMe7rny9Zq7ZaBv8j4bUt45",
  "key14": "5kv56cUkECLCtjJeGNvyi3MzYWHhoKbQXactfNgd4U1s5wBNVArxW3iwJYRfjyh15Dya2jJDqG2MQdYMyEMiyVfe",
  "key15": "5WhyPYoDvsgEbnKEamtRCrZj2LZ8nEdMDz13tCsuXjCYmNGsDKQEqDyQNPCkp38Sep6PVpav5ek5XYV1rxoa59QD",
  "key16": "5F9qa572Tu7A9v4E5hVLqmoMH2uNxpaFmKsQk8DaekPrVboMYdyxYik4tMH7f1eUzinJ5peXdtF6Bw3gEFtT9QPs",
  "key17": "2kZcvc2QaE4tjLXAEmxRJJfKXXsG4eTearcqq1CQSwKAHNaL2qqPzrpentgiy21jVSnQnAa4aWEpRPjC5DHm28q",
  "key18": "2MQN46RqAbGN2iDVYtux8utcjquknnbqgEpkfQzm2QBpKuxtbGmASe2Y75r5hc9paqWvsmYtbTLHnPYUSjt1Nz1S",
  "key19": "3UN9LGHtq9aXzkQvEU8eG9gFRdHoX5N8UJZW4bf4mDEcnAcxDVpejW3RqbNVQWFChttsrwhLok66png9qfJvhV98",
  "key20": "62x2MtWxJp1c4VeYP3EiEqtmpG3uuqnt7ed8bPCySRt8y15GmVRgpD7rXTNu5HpHYDScTMjZxd4PEdbvEnfPTgLF",
  "key21": "4V4u4jjF3vHKQn8vvkM5FaDLqpAxjNJeVRcJGzJSn35AbhcPwe3sFXoWxYFeChgW2pg6roPzs6qV71Lc1djKoV7o",
  "key22": "2yaysJu1Pqqn5rWPCrECPsjoQRbVHwhmSUcV2WaHYw6ogZvYqZQNAitxcPPEhQA3PaFthV86A8cV38jdy9LgnDh1",
  "key23": "2Swa6LqLBi63kddZH7qAYBU2HT3f8ShN7fZz8Zpi73UEFpqm3AFFndXbtVZnrkxMLTns1mE556yPE2pV4seCiQii",
  "key24": "puY1upsi1AerSc2dJq891n4hsHaz64qztAcui2eUW2T89cHU39UkD2wcCKc47sy7D7aGr44Z7FYjBdv9sdMpGHp",
  "key25": "3an9XHCBWT9HwZKLrqfpYrp87HjksiWRaHiZ1c5kFRhAbBh5LJvkXYhf11n1ZRss3JVnByws2DEhyKf4bZyjy54C",
  "key26": "2cRZ6c3ZNttP8hiXsNiFyYmUU1Q6J3sDtnPTTwK8ErHt7XZZJNfhMrFJPdKBXqo36aebTVA6FWbaZnducc5keFZw",
  "key27": "C7pLtNSAZN2eCjimwcCP2jTB3U9kNL8ZjaYnYqcWSQWpRq2Pq7rvX9U8gv6J7Zr6XnEy1BTtavJYZumpztAsxpC",
  "key28": "46npQrgdBRfbYf5QhaRRa9gw4zEEhyTEV7HHKtEr1zzwijd15Uwjzb5RAjAuFbUkqzWmmbpDPHN37V7YfTCojRfL",
  "key29": "2n5An2s7RvaJRNZC1r7RmsLZPkErArediXH8S3gEBQKka7ZZcxzizU6rguqVrBQmgkniY5BzjMKvPH1PGyR7LE4x",
  "key30": "5AqF6S2Z7qk1rkN4faFRg3vTVbnT8Dzw8f61DxbAqpTKw9bVBGBzGTy9fpfoL8EVzp8x8PobUJAH8ggCmyF2KmDo",
  "key31": "5rXapG7MW9MhCwD2uLxKG4Svfk8qDQBXrUk6ncBzr36QYuwvMbtq1Vu85xtmJCM6gvsuwLGC5xDZ1t3ZwdnFCUYe",
  "key32": "3DbG3uFQgMVcdnR9VmzV9Dgr62D63rLTSpvA5yN6Afh7t9fSAHRw6nCqt5XuyVQeYTKBpUSCxNY5Dj2iavbMppee",
  "key33": "3MzACy9CCFDd9ikrsYaXqAfpqRDn3PT8Nkn7WheNHpEprB4kMuSx2spWt5r4erCaWZZ9417fRAA7BjgZtQtN8iMA",
  "key34": "67KVUoRtmunqvysFQRrBns5JMBg2a5S6Uvd6b8Bve3rH2tPfVxsSmKqqB83RqPcTPBRqGTjEPiufTY8mWxPrYnSk",
  "key35": "2qCj5s4wstAX8wtLGiPuCcJJjjgUHx1M6EF9sUA6NiNuJmUTqkjGCSDsqUtGqs4JmpzArNWcqF3GX5MbVXqFPpJU",
  "key36": "4dgWvc1dgzakbAW7DiGQQQAVb3Zy48KHGaTwC6vaKkGpoHcfwN8C3k43LMz3YauuvsE7zxknJYaTLrZZf7cByiDt",
  "key37": "5kckAfuzmivj9LZYHcgNn3rLSXzpUrKxMhHk7UAaM1ijZ7eCsdQC2cxUjowHSPod3H9mx5xpcZzQRLdvvGS2KCkD",
  "key38": "56mXFWyR8K5ma3VX5Kj4xgF3X2VFmjcFdAEmDWhYd7kNwBLHAH1LjSRksyzegQmZVcR9hDn72TRvdC94mS7XdPjW",
  "key39": "24QqCbsBLDBPZGCsn5Yh914LNdXSbN1JkdNz3d2tDPHiWVppSFgx4RrE9B2rCcQZjsB9wCMARc7fQpq9jd2maSrS",
  "key40": "48QgDVdu8MPzosCwQ1KQzYKcfGDk5bZHFMFk6Vk7xzpTggTKN9dufeDxscnRYPB7Rki1b8S6wv175MykwzsyGPSs",
  "key41": "3nKbHkWURtFHC4WZQbmtUhY9pVeYDMZ4XaqUF8WyuD3WXjLzBGQEWpQwYWjiGw445NTxrstj9WNGDyu9a5dtC247",
  "key42": "5RxWPTeebVyRozFXgrCWwQXKxPah1qS3HZSqc7PZmGy5f1UX9urVo33BKhYxADqazhF95j6TT4C9BUBBozx3B2LX",
  "key43": "2Qoeq9m1gLTtdQYzjnyDri6Rirnkwrf8qgqXvBksN3reWWfyoS5Eg1rqC88PQGpXeKNegATysE1eV8a8ZJsYrL2r"
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
