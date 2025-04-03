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
    "5z9DqeuhekJ6L7u36pCnXyvtA9vGwDGDZxWL2o4LVdBBcxiD1CmMYzEGyyRaUKHySEXgXmJHq3Q6KFGFSJJCSJrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iwwM9dY62sdQ2ysF4FV8dAn4LdtPmAhLNfFoc4X4FHqpbZcmWGuENNZnCcUzuZM74oDfZ4Ztcvi2a1kSejDmSrj",
  "key1": "5vTjiM69i8oKjWoYbHKZTjabAAKrod5oX18n1929LNb2wAKaowfWV4f62AowQEhdCKwFhDW1HYpDxfy3FgudCqKo",
  "key2": "4bgFTXqXwpXWh9Y3XwH426cbL9wFdEvbvWFKi9VN9tESkvZy7V3JNYviBsSKK1g2itt6wCBiVTnvtpUeqZSxXrcD",
  "key3": "5aJ94zpWEJagfBuYG2MXh4bnc1pkGbGhLhLUU3znVcQCHfwyq7JK6YeBddoTsj86RPP4ceJKg2Z7UywG4Qi4pt2H",
  "key4": "Me5snngHNCDTAWx45SAhpGKrwv3wAFd7szjACFJKPjg2RFh9xp8qJ1d6UZsZJkNUJeqWSTPWshatGErbQuBDqCn",
  "key5": "2ZJuXXLdZJMorCf4mQbw7jGwySqAwgze3X9hSLSUL6xvp9mgvDUghbtT5F3uuZXHHeydFZDUQDVJaTT5nXVdN144",
  "key6": "4NYZeUCZZWVCsAXmKYEDJ4F1Ei28FnMLs4RJZdtgcK64je58xHNxKNRKfTpTwECiWr7KKG5vbEwpzjrsugaMDwNN",
  "key7": "65a16rHPq1amFxLahESbSzwf6FRAncg5NufVYvTZV1Xp7uYDZZUBmqLhotPBBheCEC3UqZeeP5eoH3DX6dGJUTxm",
  "key8": "3hSMtn1v5TK1XagJw7M9He9JFy4LPmWHSD37h4cNymp8tzhdvj3aQVmnYZQf8pBNvUuz6ZZt7V3rQyJaAkHCrHZ9",
  "key9": "5Qsj5YVzd6tCrGoxjL53iMB3FHurn2mvJsuvx4efW6wKxLpGPvzYfkUXM1hvrBbBGNwDmXeqFEftBiGig2apSbZa",
  "key10": "JKrcXun1c9etBrJVTQr9cFrhSsV8PgVL7dpYBQKQgtQXoqTbZGWndxswWyevvms3fBWgfBDRe2is7iz3hpmC8Ck",
  "key11": "fkZTQpK9ce6kL9PyWsxgY9CLg1iaRateH3NUY9UnNuEgTjgXdgH4QhrvNo9yKXW12GdCjKvHYwCkG9P2hw6zyag",
  "key12": "vqwgwhPDBppSWAdaBZ3txom5XEa95e4RhepFDWWxp66118yinXwS6xwD2iL1HjBFRyVavGysPLaAie1GZPurVS4",
  "key13": "65tykX1mMqY3kuePyNehEunk4Uhswh9F3Wjk7vT1BnsiREwghNSCz2kxYuFaRzxRD3qEUFwd6FkjJ3UgbvKXCMQ8",
  "key14": "a9yoS1zooM2gK8J2yAiMYq5L2evz3M5odDXfX93Frrnuxb97VhtyRS49zde4xMCV8eGUuCZpALX4xTTwrCQfAsu",
  "key15": "5dJEN1WcVnXggeqvSUjmzJ6ihyFT1psw4CGYxEXd35Sa3LN4AN7htWKyqNci3VYKgTVnnEuYTESVJPDaqxc3vB7Y",
  "key16": "5uw3qLGnErE9PFqpg749f5S2Zh4p2Rx2e8v5o7hpkxNwDqtJmAKqcmR3mbALpV9LNq4pZLKsEhvbeJhNyjY1kEGN",
  "key17": "c5QM5Vwd9ztMwRUDJpgjG9S1JgaoKtPw4fDR1tmYqsZfZpMv3ceHjFaDBVDJfT7vp8M9a4Wu6KPvLa8xmrFMRYf",
  "key18": "kDWzKS8dRTWQQBF6AQ7b8r6i6sApt9hPg77DNSHfH5HNwGj4KgiDFhqQYr36drkDPWxGA79daKPasPs1syCurjz",
  "key19": "4L2rh7axZqXxW1HsACY5pik39oWjDLijzyS6x1LXvTiXXTWJKUbp58UJBdexB8tHHb4Tjxbjtq5bE84JWtrDYP1Z",
  "key20": "7YRvsX6wzcBEPfrduazJ414taDQLACzXQ1XjRvXsreGnGbvDxU8ksAzmaJ6MetmLgiqrv1sNoEbEC7tqqxwq3Rw",
  "key21": "bwfhi6jC9Mdpw5f3zBRVdW5r4isGwvHe7VUk5uttHz8aPLWXNDj4ATryqssgUvY29zupGfD7bnqH3qMwtg1zsa9",
  "key22": "2WtZv94sa4JWSXMyJpq7wzvanSYeYaqXknUZy1CGPbmErw2f7p1rdiEcw92DXhWmNQnwY6EpEuKBA6Y6FtSiHzky",
  "key23": "52VXbNSJ2TrF35f6ePf815FHS3zmXhUKrsZSaUg4YSr5uVM35QP7r1uoEvAeWg6oUoSQnuakjx5gYf8UZe9mtjr",
  "key24": "5biwbokAfQ1DQqLLsEytFvTafePPpkoThpJmJ7SgDnuamMHGRriUQ1aeVwJ7zLXsgU8oAeJxxgLLzbpmZFzqnoyV",
  "key25": "5rWrr5VhWfmrNZT6kGmYc9d1wa7E5s2pxD2T1qep18TdiZ7Rb1sBEpaypTa9f2qASGQjSi8kia6p8MEUDufVfWbo",
  "key26": "4jfgGefu3BcYn7773SfLCN4MCRpswSZvfSpqKg45egB5CH9ZAZAodoJbSE1wrgEaQQ6xfmTQGeZJRfT3ACJSPTaX",
  "key27": "3ZzU4btAu4Cav14Vm9yoUhrztYse6TJQfSXrFZdprs95cLZCYmB3sJjUDPcHHL2xw2g4ceezdZDo2k1R8h5q2vQ8",
  "key28": "3cSdrCFFU3RhMVPskiC1LnSJLV9QzS3KWGJrm3dAsXAY1cqFMBFthppYmzNJbr2vYMNngjiTZHtjK5TpEU22dUMM",
  "key29": "2X6J3FjEAEntDxe8atAhyMQSTKQL1p7ir6iapCWVGKr1Fj8pm3Z6X6f33TmrahPBTTpUJSWydyu6gFyUK4GsqrfS",
  "key30": "5ULJRFXhKN2TPCYNS779v3G7PL8UPiDwGixx1mhdDkN6sJDZefzFu1DEYV2KTQ3m1ZQCU1eGRzcEpvmSup5sTDJ8",
  "key31": "17Fo6oDKKyNN2XfpxuFfbXEUz4zRqJMhoWdcddTFM1ANNmLCwDbXV9bEnfxiPg8VbHNTPjMhYtgxNnpi9BwDFeV",
  "key32": "32wrhnHWk3WaD7TP5giwXXwnZxVCoiYQYsUGy15CEXnjkmF1iBFqhkt8DWx6KazFNS8qAERXb81MEFvZBJz29Lte",
  "key33": "3uPEzYUV9Tp1BgVA8ngQuRuFGhtqPh2BoA7mn1JNYpWUVgp6VgewdnRxTAvdkQDERrCggk5Qt65WJXReo1Yv6poE",
  "key34": "5chWAT888zUL4MKVfAzoKNKtZzWgPeu5igucAf49VCefyA1TXogvzM33fMMgxXT1cEx8WSKcyrRddBDaqsMpahxN",
  "key35": "3oWd8r221dZ1twRqPJvGesR9e6FaCSgPu7zbxEvVFmszCr4D1heXg6WUj3poKKpH9j8vgiLpQxDRBzWFEYUNKrGy",
  "key36": "4tqvZAEo8f2xwJ7wmN9xek7HLSjCGAtKoXZfsB8XHToQbnmgUt6YkvmYKXYG5yvHsAosoPtio1ptU7p7gbuuPJC3",
  "key37": "4EhE5ZSCCWz2tD5b2rXRzKUNKmDs8MhcnearVyJcebTbL5YuaN6vBhpxuZoCwsPEY2TuLpEz39k9FkGAJXw7Fsim",
  "key38": "hpZb3vK4EZRjD1dwdd5SKgKzozVdVBTBHdCwy92aRPVHycdUZUyaJDs6AH9qcDqHCBct2rcZpWpa5r4JjVb618s",
  "key39": "49V8cfNaWNdSHNSNpCLcot29WT4hLiLuq3kHFXXxvc2RhXaL2Ed27kFJYsWU8kgKckU8Y3rV9zf5YYu4292TEmTA",
  "key40": "4tGp4bk3F7ZkEuRkjfx8r1QE8wRx21ayn2Z7SpaQjhqRYRAh1xjiTwmpT9xGmEeJytfYgHbaiw45bj93QzQubaUf",
  "key41": "3P3n9x2Z6n98XuV968ySAh9biwCJPiuh65xUt7trWAd5gTkbM6D7zd8MLdDCEtdHFnabRoefpMQCSnQKDarj6kmq"
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
