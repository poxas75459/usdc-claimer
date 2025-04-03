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
    "2ZbWphNc5CsCdCLFsF5xKVUBubr83v3n52vfjABm6Zts1ZqW16auS19bbHoDwvE14su4a78bWAi1NXxrw9PCaqeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLXiA27ZLQJPjZnnqTAF8AGoQTjEKDt5NuQ3JH4JBDT3GKJVttDMDgPSswWoLxcAGQ3etWcHoeMo2xExtTeGDRy",
  "key1": "5mnzDSCSEevEA3euJcQ87J9FjXfVVvFLHpWax3iCqXUwAKD6pcBZtC8BE7JzzWGACfazFjWfR4jXjbgSMRFVT5fV",
  "key2": "4KV5TLWyggGi7ixs21Dq39Twd7gvmMB8ZZnYW6hbUXJwwT3LRAZPiJXy8f68QKbucQVNjqbwBEpBiRyj7BU1ynq1",
  "key3": "36uVp1dDPZDB31UWHDzwH21TAU9d4apkk1P7PpDJ2272K4XGTGc6YjbH2NGWJp1LLCiRRaHVQVoo2r63UV7HR738",
  "key4": "2PPPcJpHGsukAvjExRxZyVhg6gaUxRbopAJ3nqWbSR1yhwuJBvdNP8X6pG647znUvYdvytmFL86kq5SzHJMudF4z",
  "key5": "2c7R8tkS3i6pxxYazsnoHy2f1cYMAMZjmzGnw4LCg8yNNBs1bUsFhyKSrbx5uMJjZA3vwZ4gJXrcYvMGzMjw6pS9",
  "key6": "3R6utd3e5em1HFfcMG12magt1tUxbonp6wkCCu7Zh8XVsM19EaKD8QCwhhqZJMndG42hyupCWjYFKWswUTwvmGWk",
  "key7": "5RtCewHEEzyf3n3cm2JU9RCjtf2dj4atdgRkBptHaiGNFd69ztiUxsS3A4Ms33ER9xRG1wYXZRUzo4CJCKC4tPsQ",
  "key8": "4QM5nUfZ41n79nnF13LyTaRPEm5UUVcc17RnsfKCEz2cjHfRTtRQvPRviS2qrcfcvz787QDG8Kq3oHWaFtfdApLm",
  "key9": "4GThiPLNbnj43anP4jUfvrN9YWeVBb7vrKQyVjctRfNjautSZqKXVV1ohyo2z7Bv7xsN48x1XhVW4garFbXLR57v",
  "key10": "4uSmp5EdEdw9RgEwFjpefZVs5hpEJvEQzbjHgphPmoUodXRGWE2RArReLStXbGiwoN97QTAdF1dxK7oWariRmgNE",
  "key11": "2EiTgiqeR8E6o9XZW9iTuJ8WqUE3Bepzi9t7PFr3EqPRz9jk3qic9WU9KhegjHUWR6BsUm2XGBdgxuKD8CnXFroG",
  "key12": "iksakDk9u9HP5EGESwwqHX5EjUGUUUesMMpUxNWTqJM5ofXWnpyc8b5HWfDf3J3Mh4LBHGZQvqGb3GjpkoNgaU4",
  "key13": "4Wnbsz8KXnNN6XAoCp8Ej3ZK8NnmCVte2mehWkP7k5F86iydnbLkBE1mGMPA6TdVqapusx7QqeweeNkQiNgeaZTn",
  "key14": "5jK6yWrczgem5HztMnWwYFoDM7stK6zs7gtNGfsUMs1ChiUUNGhFbs6pow13CGrRk8aGJJEKyuMWmEA9LHX5xEn8",
  "key15": "61JQJHRw5dXpdRh9smSafuv7pGnyuoSFxHt16Wr5wQn4NeRQz1dEq1waKTP1HbmNuW1KQbBMexykkzNcfsE45RBr",
  "key16": "3UfFCJ2psrR5dEYUa4kf8L6Cu6ZzK2HxhrWDoEfmfpgjC2utsSrydPNo5NGaKJSZPVxBGmAYuZWmeQUJK1QqXezN",
  "key17": "8LTemybXh3s1H5yLNqmdWDq4z6V6XpfRE8hCLMjdGshRsKte9TAaXPDt6TZ3Tt5RKpBL2na16duFga7fvMj1xHo",
  "key18": "3jp6t1G3sAGfahURfSfkhjXoagfizGZZoGCUfxmfDJcTcgs5uAQS1wGvJTN8KzimWoqi8gH6QA4XW4snah1m5VaX",
  "key19": "2wEJRmfNmy95vNy9W1XCVSoj4guPhp8JzEembqkJtA6BsqRhHfmutnMdzTTZ9UxcUYTwsuwjg33f6XXLonqPLYoA",
  "key20": "5Bmb8kXCi1xw8sKA1kins86rV2MBZPQscQyLV7m1Yc2HrADAkR7v6BSaWFtgy2SraMFbPYwDAnJAXTU6QGU2ApeN",
  "key21": "61yyqBTUYbrYoXcKokbFLM5RycpY15WYBop43mYv2m7yLmkUeEWgNfqs1a1varbdNNbLQtnh6UV6uwUNLoSioG3T",
  "key22": "SSS3MAjuYgbMwXhSMdT7DxycuiaHj8AJaRf2S7jw4ch8kiaRsrh3oyRZUvUguP4rJfv1kjNeH8rn3qurxvu5aZu",
  "key23": "vMSPvyvGBKGxw8GkXPEaboa5aMaW5pSACq8CDCiAGWFJek75x5tu3gP7a1i9MUbVePfJHEU4hZpzkE6wdS5hPPH",
  "key24": "5xDtJJPL9kmhyWgsYkgWNMU81L8wFfvJpSTscWr9PzBjd7gZfnDnABpD2Qi1FJBdCf5cKoAecBa2DXGLtDdP45PT",
  "key25": "EPbdiqwNMX5b61L9aScET4rNBMkvgmGr7z8bw8LE1ufv5UWQdJVaqpH8A65QNm9rN2oRjCHnnmsaWM6T2tJj8cG",
  "key26": "5nQHxUBoG6EnbAqrL6Q4hvZoUVL9YigFJdUBS9m9PkEtDz4Ls9rVWktqxtXyGAEpLtywWQaqStJG8GresCXdxk8V",
  "key27": "3GzDS5c5BKFmbgwgYyko2xPKURHwCw6WugbHdrEvnK38X6FJi5r3Z5GHUYgmpsMBoV5fxypZj1D8WQpxNoTrrqrG",
  "key28": "5Tu2uAWpw5GTvrU38PuFioSpH9XLVMUPRUBQWuE8S4VFogTavM7iwKfdrYRjksTrobtxiRxKBg6fZbuEJThvDC9X",
  "key29": "2faF74RUgsk85oVNbMGRbE5KFda7XtfyLXqoLqBQVZB47MPfXbWydL8XuEFmnmHH1CSpvdLoryf2n2qNTUzGLMQC",
  "key30": "3x4uykh9qXdCxbm83ycnykucMDRgyhHRMHof4fzZKiQMz2FfeLMFYYWiCzHjNFBrE3HtNHZTRhP4uaFTL8zQCfow",
  "key31": "2qAhsym7i6bfespTyg3GTNn9rVnYKQMNoRKbgw38qwYVLtZwPk2Z22dhP117UoHyRiGn54VVeKMejXrarT1yiCWu",
  "key32": "4UcUc4od3zdEwDA3MNFJkwXT5fLYHbfvvakhTe5n84afQuPpoDnXhC5UXPqwsRsFSPTqv3m9rF7YQFVMA8G6WWQT",
  "key33": "A9M1Sv47DbC6Fx6hpBMC3VkLNPUgXneT2nvpbqcQgqHWE8BbnXzneATJfZhfLUE4sUoSoKi1WD5odYwwzwSg7ws",
  "key34": "4XyhwDQx4xBTimKBQmVobXTuzpoQWckmhJdYo9X7f4w8knM2wEmFggpLnn8xZ9dRVNJrr4JfTk33Hkrbc7yuGjzV",
  "key35": "31TMBegZzkZdvrK2xUMjrZopvAmZHvGSL8uQ7S32c5mY82nwD7b8eRW5weK7er7GhUurXCnbLZmtssMusAFT8iud",
  "key36": "FaR1nNU4joFQoiMzbKmqJeDG1J9QFTvJpUPT2Ewrzo5AqxgsESx77RF42fjGKpznfKiWZm9SkKVY8hBXhLEeV5u",
  "key37": "22qB8cWtpmHz62WNKG9wjFDJ5wBtHBsbqPpF1wjXffF55snLTnX11YGcEvenaftMRXavp3Y1CSawXXyvp4pz4Sgh",
  "key38": "42vrMXc8RtFw3gaD4mQPFLQ3k7pxY6yhQcw1Vw2Ro7qNpcTCX1yYBRmd51aCkFadPGcN2GpNhiWedUpJ3PGe1ETp",
  "key39": "bQvzmcwAJzcX7Y6FpXqfcacdrrPLwKR7jzVfFVKajAaB1Wy6AHYrXndsYjasyEDKDYqVBPytGcPDVQum4h8J3SJ"
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
