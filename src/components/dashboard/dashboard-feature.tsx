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
    "3DoqHCng61yg4UyfsND45zPYyYagm8UQpd8ZeuAeopF2Sesg47v1xC9BbeSbfzuTs6g27TVzBFBRDKm7TNUpsQdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvuHaQkG2vYDTEqo131L42FWmo8jGNXtfE7KrNSQxahDudu1rJWsqLt2myocUFhV4JRV5zYSYqGPZcDvxjtF7DA",
  "key1": "R1bRiK4ddJHz3xnEzv5WDWkJ6ChbfzNWQ4Vjp8WZw3MBMQopbuQtp5KJC8591rNJLeyoVmdguC7uoLDaW36Agsf",
  "key2": "2NK8MtWqxuLATsM3yzJdPrSHi1SBF2ZaWCv4dwnofDfKDzCY8GM4JyyoNGYpqscTBgdqP7Ui8JJuUDTMxJxy8BdU",
  "key3": "56Ef48V3emUcSJKRmtTZBkAbZ9Z2UPvuCGP6ej86BNDiz1Nk3vTEUdnTpq85zTfkLDRWNKuvTabJuEvvaL7zG2pB",
  "key4": "5evR7bxCXWSazsaq2QxeKxnfZRE5Lgqgd9f3NEkxonCewsg794qj1qwHGoaBovTnfgXqALyquJfkNG115n72ExVq",
  "key5": "5huTMfUGb7V881aEmzY6q6cchR9kE42QpFHgNnRiqMXXBRDFtGhnz8PSkn6gJa5V7C9szeGdEevAzGcrVUGSJtqF",
  "key6": "2sjnWFhEMXwBLHmovFnx342kN9HTeqGXQuw7C215KKfot9fK2uQ5y7VgJEtD8ageCDRB4dbSDnaRHvVHpMXgD3St",
  "key7": "5aMc2An6ZMVRtJt4qkstgLJgLYq6TEApvkuHL3LSMBpEoW534Fcrixxio5BBaWUyyR48Rjw7PWFrkF7Mxm8g1WKJ",
  "key8": "5p5tK4CsGQ9B4mY4JBcXNAxaUnn42THy8CYA6YjgwETPrbbd76rghFqxw7UWDaHv9fuL4xEb7mbuRbY9udW9vKyp",
  "key9": "5KkXsMxZA4vnydTocfDJ6QqFAgBP9iEWAmMrEuYiLmDfjUCLXouCCuM3chkwZdC63VoC6JENupM1BbSBXBqBN83f",
  "key10": "2MBsntyPYqgPrj8ad7AnD1KwYZ6YTV28hw5kTuESMWRoy2K6DFDQpmTfRE6jeZkErCcoQTXD73zZerHTKR2kvbUd",
  "key11": "3uGF8tPiXpgkDKgBGW7i7jLi4Jsjphdb1g8RqYYXeBf7W7JfffCGFy94zyXsCuWCZs12j8GeEKrvKdn6AxKCoUkq",
  "key12": "5ZmCSoeGD7p5ZerfQR8tfMXRXAeYiXzEYd3Y4HwFZXg9FKmQh1PQbdAYB8d54BEnhhTsJ6cScSdxB1V2CM1o1aqE",
  "key13": "4ac1sR726SHSvLcjErW8EahCHDnx1LRabSfaMqQJazB1iK8HnyDo7UMAiZynq7m82thDUpk8bVDUzPZKu88iNuhL",
  "key14": "XesiGX1F2MWsKHBaLV1WXn7F3sgZtox7d4ny6NBPC8q9cgAB8P35GRVH2yhrNh9DtQ6joyotZ3ZExgDCbwtPHqJ",
  "key15": "HWG9VtpNsvKyM9SYubzuRmnRx2RDbpYdUdqerySVY3TSvncvUS2duAPAr3NunuHfhT5U1QqzQdpjTboLe3jqi8p",
  "key16": "2NX2uMPT5A4H13fxUzs5H6UzbsaTpCTm3fpjtUUy1LGe5iPY4w4Kekr1fnnLrGW8CBFcJrb22hPJpvgTmyweUmxv",
  "key17": "5voHMvaS4Sh8aLKFQ4tTX3ZkhHKxDxiXsrBc1Vr9JHbUE6pkas2zxTn2jz11v2yTiVnB8qCxCRBc7tskCiJVYbCM",
  "key18": "KvoEEjKFroXNwAJEEUXGQNVPmD3x5xoAYTsHv5TLVHYAJ3PZPvAZkQf5gdoxV5ywey8b6yMyBJd99dHaEz1UjH6",
  "key19": "2ycXije8MHB2u94zMqDgiyaqDsd9z9qNzapRB49iWWTtSLh53jAtvXTRNEm5gJcdLbZFnG7Y6HgM2m7BnMtdjuMT",
  "key20": "5V499caepscBhLB5tEPD1uwTACYwZRXpcZg9iLQSJz2TX2PZY9Ydtozw5odD7NtKTUbwPWJE12ZGqNV44W9JgLrf",
  "key21": "3dpbPTKTUfGcihBjUJVMjY2j3PJJKD69rWrkte9HZxkq94QeHzLidhL6nsACRu4H42GyfLwWQK9c7vfXnRkrep52",
  "key22": "7YxT6qArGP2Eo4b9D2j5USG5HicWZ4jSS6ntJn2oZ6oPsW16VZ38c3Wc1Phcsb7whSQKeqTME7giFzX2i5LwENC",
  "key23": "3y5ozpwgeisdg22jtsDu3twM913veXAsU7Zc7mFWYAQkr3Tp8bzWvA1WACYzg3fJHaGXFDf7jsrsKmj2YuNaT2JH",
  "key24": "4LxSQsRmW3VudxTJ18tVXVsjmAsMZWzrQKSvc2KebnsAsNSao8gvgQPFHNfXetSRtSVPiQfrULQ41JXnV22hpUmh",
  "key25": "4k17X6NfmScn2whiiv4hek3d1aXgk7Pq5iFVQo3vjW2QBS1az9iMv5aK7n6y3gd2KAv7aD4wwKptFdVTdy4yFCaq",
  "key26": "htRUJ968pwrJo9Scemk5kW1VmdTHDFtmd5yBWvRJxeUvjE6xh9Tp59rzDuTgPu5qKZNczifdH7saQokm1fAkNhX",
  "key27": "5mNEZ92xNrAPiCEieN8x2P7Y2GBjd1PKqHCTaQyPHxTVmtsJqEsb4ibzDkfs4bJ7rPGdDfv75UPnV7ttgss78SNk",
  "key28": "5FvwpCCjFuCJ12MiH4FPEEHAMTXkDEUydrsH53W3DbfRAhbY1MnCuG3XFA1yMqej83Aw2woKsUcBYZpatJKY23ku",
  "key29": "2VzSq5m7uxGFLJJV3VyorYy1RUEg85w2shjRXUtM5SkoThTiiyDZig7Snx7dwgEUXcWdmTvKRwhsfxTxPKgmNRMy",
  "key30": "xTjVYoq6Fu17hUVv7BpvWZ8zw7WKGyV2kZK4o8FUqvW6fDFJWV4dwDEi3VG51xvwAxgH52KPgMYgZ5gxUvkBsiD",
  "key31": "4A2EnsQF2FkRAV9BUmcHDCSTtvrUuG7bwey2EsSYGhUC88Ho9KC5XXyHUNNBQ1kXiuYtNtKTzfPZuMJVXpNAzEMJ",
  "key32": "ayMUDVc5PHaGDVThskSN2VDsrk5sgd5cJEgt4Fusd5KvcsaeUTzyNwdUmBEGQpPJaLYX2v4dGE8A1iBuCRVMUuT",
  "key33": "2S9V5WCfvVezBHFo9SKcxBVNXtTXLbz4kXZkrLgsd15pHT5DbgrhRXtbfQshR5EFJRbBoas5HTr4NYbHFo1gUnMo",
  "key34": "osNhYWw38dr7mnEsmW43HecBFyNsjivJardZ7HRniyuqoEd5knhBPBHeka35qc6p67AFRdVLMh9BdueEWt4apSn"
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
