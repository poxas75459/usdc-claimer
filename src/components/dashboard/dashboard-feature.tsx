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
    "5APrfUpfKLFfwxn3xLv5CVJ5Td7uEZg2qQoi4fJitXqwMGKB2tzbhdZkZUxn5cLb18dh8mAAb9LAAysRkfJc39cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589JSU6has7Uoeuguxr9n7hgR8LXCjdVmUGybQjgRhBuBLmLmDnJuVkuT2NCzd4mtQY1tHst6Evqu67AgUK583qT",
  "key1": "2sWUvg5r448Tb4gnnwZtSjtq6pQLoHonVbWpuLsxSbfM7XkYxPYGT3c62mJvsQ9z51agHTbAwbjjHH8wPxeP7KbN",
  "key2": "eW7BybVrmdSAHGFZNo4Kfi12GY5y4c6zpQDtiYCNTXx6LCgQG259x8RzCi1dPsY9HFweeMYc6nDyeDZWRTbv1xT",
  "key3": "5Hp3jUAtNU8AS89sirs6duymhyj6FgWNjkgZoHXWADnRipR68yVu8i1t4iKTWf3WMgqZ8txyJemsDQZjKAyVyzpr",
  "key4": "2ptF8iqEUXJ8vLjLwT9HuciNWpog6fd3e1RKkLFndJp6PYufqebHVe6KwZU1HEyNS9e4SGE4uQeSNufPMn5rHkuC",
  "key5": "8Bj75ooF6WU7x5n56Hy6aTJoeXLVFpsnE2ubVWkJ8Kf1wnJHiAgbrUf5NprxmGdFQRiwwfA3FcUXQNkMnV5YMaZ",
  "key6": "MYTeK7q8PSCeJtZEipEtoqH7apAGN1DpmQZdPS5L4JpKKKRyFcEpZcCvwwhgJCz9dgD6iBYmDosPn8LKNLpynj3",
  "key7": "3zjPY89UhL8mWMQcVpQvLae4MV61qVjfW1p8R8MZvHaZEZwDvhaUSWjDQTQjAGyHezVTyx4rpMgwQzCdoXQMFeXY",
  "key8": "4Acjc2jW8dtTgh8t8QrKa77MgdC9TxFqWzeHU5K1KZV3QK5dgxLSFms4rhagTxL3BF6qWK5aSASRNkjXe6JoddVd",
  "key9": "4k1L1ko79JL4HeiSnwxwAAHovDqLW5cWc9JxLBmFiFpLhq9fzr8GPDhhqpEwWUtaHroA87MVUk6pmr9rqVWJWCrj",
  "key10": "M4BNwaaDPJg6M2D4XmusYx4PpvbZUQ1YeSMQQFbKDWSAo8BFCeuGyyDJ2hCR9sqE2SKgiZEKxGpxzPMupmJs1BB",
  "key11": "3FkseYU8EbP8PJES7kurDLQ6UiuVyu3ioHoPgcwNpSsKXBmuUNcj9ZTWgZ12fbUnENj7afWDdY6HmUuxPGVpHo4L",
  "key12": "4HZyz6UQhSFYepf1i9pm82mB1CPcRYDo94tS5gcuLVoNWj3ZMv27V52MKs3hADpn4c3GiJkfEDiim3iCWLYTifHi",
  "key13": "5eUcWgf9j71mzPQgtWYtcvQ2UMKf71x9Dtwfe2LGHw3KXTBdcdj3k3s227AiEXqrbmjoGE3zmF6TNm7wDCu9uzXh",
  "key14": "4nBfpqX3UDvWCLtDYkmFjNWZgENWC5tzu8CR3z4WkvJSQWjCLxHLDNGnsYefxyQ1ABWX3fPoG5u2PHkSJoEhEFtr",
  "key15": "5ViKMoeo1Mj9uE7pncobprxy5ZE1GazSeZM8t5FmfuTpBvZdi8TqdFV7q6JB2tc1qBfSpT2Hm9PJ8aogzguUYsL8",
  "key16": "5SNBN8s36Y2steT6Ai2XycTZuDZRgLBtvHbmmJbmtjCWKKh81qFQFChYtpyBuC98UfFMx9D5pFnGVWJ9eLVzYpFr",
  "key17": "5A3NM1sJPbCwkDzbGLXMeS6qVcCyusSc6ee8soUBonfTD6pTAhQVuSzTxsoFHgz8uJuE7S9rLQXyVPsZdHkTpwoH",
  "key18": "42t2KnN9geNF48y7CjrJ6yBERkeDDFMg6kHjyFCDxVGUDPqgSNLCedoLTSsXTScv4KqkRzj3REuFERZvov557uiP",
  "key19": "4T9BAnQpqnnDuK75bdZNFS9mZRC5DApHS8nbvbtXPJaFsk5GvpcaGg4rmnZyjQkkaxStumVtsfFXE9igzhKD31kd",
  "key20": "3nK8FUk2G3QkeJeD2xbP6iBd1DJFWeKwWs7mfKEu6HyfWCMpwMqeTRpiGrKGmvgHz7ppRDbdev88GMbmiXVCywbu",
  "key21": "2Gee7Wb97WV5Q2wod59SqVuCvXgetcz4XPV9c2Go2ijDV4S63XGr1rJ7Wcq5U3CsvToKQRuASmVtrSpAfPbXXwns",
  "key22": "5uoPdQDrAtWan42uLLrWSoU1TARicvcLys2GmfExontNCCEnSKrxJ6Bj2UYeAvyYJUCJzeg8AhD2bBC8Bc3Xs8vj",
  "key23": "21K4MNoYMwu8gaCNyxXCaGQybtkczAYWy8Hw5S7r6vvUVHLshqmaZ1DXsZqqUza24KDHKM79kTd3ByMzaEXbEoq4",
  "key24": "3HcsPQfP1e93hRwUFaZ5FqMtPVi7TTPQgD6oScb8c7ioVrzQGfHNkRG9iHrkHMcB8TGu47LqdWhqAhWRBx5kV6uU",
  "key25": "aCGwHmNSiBHDEPWPZwmaZgkhQ1RHKiL4xcMeRuFz97H7sF4riLr5anybtXvH339mJuW3Zcwz5pecHvzqSChKWJZ",
  "key26": "zbFQRkhWgTsoxWwFBwuhmuUPyPyUNJ64SanLn72b7L7K1E1rCCHUPcitYxtsATcyUKgRkpskStvXdTGoHEjrNhP",
  "key27": "4wUixqVDeHxXvy6x7zJ7uQfwWGzNAXWJ3KgFzwVCzu2QhuX3yacZpmuWfecu6isvNdKYD1G5rNgyvV5i247gw679",
  "key28": "62FXf8KkvgPfHLGpWSUUzagq6yAVrAffon1YvKCSq91S9SG9tJ2FKfGzhoih5dsZfeXJjow4kxk4Ri14sjRkyyBS",
  "key29": "kFbcRiL3k5JM4i5VDaa1GzsfHJwACSwEEXjFUhu6wBGUvqcAGdLpEB9HnPjv5n2Qu3vWjd3ryiQbUg4Lw5wK33S",
  "key30": "2nL1mdkHtnSGGyddbvfytKPZxX2AgWSb7G6bCB7XaMAAT7y3Tt3whht9EhMiVJ8dYEuxTwgJZffHMYoxDcP7QFXC",
  "key31": "2Tp4XWrJqys2uSFVCJw91jBCowH3E9iMHsVtx5VaWaE8bQqM5p612Bbi6BvdPidiQ8ZQgfYHkZF56b2SZULq38Dk",
  "key32": "2HPw8fDtWc4orJdX5XNxzvHKKqKV156m8GDP3ooW1c6BVVxNPWiU4DeaLFE7bv6Qhomb8otYmnt7Aj8FCin6CWxs",
  "key33": "46bbvgEbkUfqYwzJJY3k63hiRsrLk4y23PxVB3NEDbAWSq34z5WRufhFNR7WDe4MD9UH8Pjua9cq9G2XpPZpoQz8",
  "key34": "3tvDz8WJEoi262Wbd3o7CcRtQiPLTtcx5h38t3Nu9Esoq6NsWFmUNKyMt7dbCxzaaaUkxLTApS4PLW9FMR2iYeCo"
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
