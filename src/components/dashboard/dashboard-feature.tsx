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
    "N6dJXxeZfYsVYEiUss5FDo1edSq7iXdM6zaUK41okCkBLkiZAWMGETXtwUznQ7hrs8i7tAHKrk8rCi3q6sfucdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMdHUA4h512P8mTp9nUHcnpidDC2J4RtzQN4CSDTetWAS9wT5uFu8Eooy7dr8Fin2VSmdThdgDPv1YsZcBrmGzw",
  "key1": "vj9mPdgvm6UB3kqfAUkNg1WTapPGaKSdGaur4xMJ7KudqKtADaNzEE44DRkqSkwD3HdN1AdY7JvYxKbL5mrotrP",
  "key2": "2z2CzwHYqygirh6EcCWHA8T5bj6dEEpMJJ5pghqoSxVAe5msjxr4M6UVT3AKfeAaSAHVV7RMG45JsNUm3wz9GsEd",
  "key3": "5RMrLrWxqFXRRXfvMowdmqvL5vaLvXTqN1CYFgbPKZEo95M64Xevz8PmXMPSFtj8FRudUSYVoe43icEVmV7fLgnQ",
  "key4": "5umzFWifxMVb2VKnNZpLX47cJn7G3f9komLhZp3bzg2JBDmTkBNH1CALtpSHKzn8VLPCgWgBA2Whpw8urWT6d8WA",
  "key5": "2HBuTLPAn8rLTCZyvQCbz4EZ8c5wtTWSazGzi22E5UZvTQXxN57UWg68Ha4jfNwsogZPYhAK66y6tix9kLmL8Efd",
  "key6": "qNFYDWfd9tB9ApSQG4BrNQ6JCDwjmfKNkiZ2q3WUhtDsyM8oZjPhAc4RHshui3HBjpuJ24RsCPvKAfPiqxWDG1Y",
  "key7": "5mFHz2FKQzcR5CvzUhXYBADGeaNCnUo4choj6pjSUUNWv8SdgWTFPg2PHrpjS8XfwG4yR5NPAYrDg4317DXuGM25",
  "key8": "kJjuvFXTyn5wWUK4V2suB2pQwEWHMsKT8bSYCCHfbZwemsZms7V2QG5BkdtWnDXb49t2wzQ1f9qKYrpNtQZDhwD",
  "key9": "2KoXpcb7SHbDnFpKRhAzwmGYiqqVHrzJhwi5knEcpdATpsLNuxCpcn99JCLRinCAq3Thd5ggyjvmBJbKfY2BtUUA",
  "key10": "4tYgiopMSH9Uioh88zy3pzVa6hDzCACNgevmS4rs98FmtAwxTopDfCmNeUVAgF7Jx9Vch1tMiao8d7stctqeJvxT",
  "key11": "2XVmQnmxi9HjQd1QgDt2rv6E7icxk2NScC2YcaauUVEFkxrkzYKGRWeUAgv8QGaQLrzx67tTu4BjvaNhUBVegXFZ",
  "key12": "5bJmG9osNX1gxqce8PWFHfwrJJfRSTgxpQmP8srDGxHhSWvUbW7w5EqwabRjYK7aDNtkVMCXJmgrf3cUsMxPREFG",
  "key13": "2VfAvhQkT1AxGUuj3ztA2ANsYjK9KwYQc4wXi9Lt6oHiyCzUCDde3qBo1wY28x6FMeqQfEGS9kiaPBpqv2FGDN1t",
  "key14": "2X8DfrRbQ1CbMKAXNZUGNn4ot5mbvbDbcLetg3m7Dv6b71yjA3PRjC3wWAT2FJuosMeSzGq3SZaSZsstVTo8o1rS",
  "key15": "4YLmk5deUPJVnhokQx246oiqK9fTvpx7s7yCLYCxCtVeo2zdXpEsgXRZYFRYGd68Za8DgNwzSheFfm6ftE6HJg6C",
  "key16": "5LHktjfNXi8TFb6dVaPspuuc1A8eB6RWDsQqVBb6HqqZKqKjj41MsTLAZSVQ3h8WZjb8u2pFjiySqPJdyRiBuHQJ",
  "key17": "FdPmis1SrswLvy5HjeqSdzrwepCz4K9i9b6bcCRrvPwJEcVdScJrRDQpiLEhuCjTMK5Z3TWcTWoS3kxt8KZMGjY",
  "key18": "3ZkW7uT5yhKRUQifFHjEqCV2CEYDqKwHwrfj6rZpgPRFbf8dF95uabK6pceeKJqaW8AePK5QaZXoRbzwLQPnLo9T",
  "key19": "2aStiKnLpxUmxyf2QAQJEuTeZgNDstR7MsVS8yxoBYZpw2yPNRc8X8G68RoeoQRRbujShAT9GZHFYPsXBTCk7pMA",
  "key20": "L4h69Ks6Hb6zj7ZsXf1DgQgzdhRJEXBRCKmrv4TuJGBjfYqMwwg79M56UjMEGPspsTAd91fvWL8LiLjMc3Lv8n2",
  "key21": "3SoCAA48Qe1tEojLjZFBo9j2NkMHJFvgLtBgqEBAmA4BTNKatFFExfgTgULvjEqQvXEwN2FTKYMZGVS1TjAHbfXz",
  "key22": "5akXBFAw1eMu7q4adfoxqp1xSJHEHXKMo5v2vt5qDU4LJ4nNmXoEPwGrHg4DDNKUsoG3FzbjiXtMFajKjf6BuJ8r",
  "key23": "3YPi4Sa8T25LQKSTWfHZKQxp6WYkXbzJ6nRobYZsVX7pqwun1Fi5kXSVgC2UDPtcK8KMkw8HuhQmAKKcoj7PzswH",
  "key24": "5pgREvxW9zgT3kdjQGqegNgqcu325cPi8iAhE6PeQACxxQ7zCoa35G9Rq8wRKoxCz2nkGXybmmkTRfndypH3CUH7",
  "key25": "4NrT67g8Q2Hdos9cNRbh7Cr1JrGsuWrWRmqk2A2cfmv4PvuyKMqqzfQ2yn6GNWGUEzw13sV4dBonbTj4htgJaZSx",
  "key26": "5ue5obHZAxnEUY2gJXnp4byK2VS1NXmhaXzNchVctmPBD14gayXpZ45dFfQ2yLtj2hkutw97KrTRPx1PP2TSv4Hh",
  "key27": "2GNgsVQbnPseR3Dzwxn6e3z6NTwpbEycYA38r7mzCpr1212ggzbDTBkaCQpqLT3cjNqz93YzgPcsSEeDsDXq7hBv",
  "key28": "3S7UEmVaMZALpQWLgqu6XCAbzEnTkGPsj77NxxQQMy35SdYchAVE7Nr3FTn9LXpuSGyz2spmkguNJtaGqVWNcqaz",
  "key29": "5YTM36sURxzzSuXmCikFd7CLXiZfN9hPsRRhZRUL6Q5i4YWrW8i8KJiiivqzFFs1WQnJhNqwEegfRJaPGbToLugX",
  "key30": "HqJeV5HBzdkZw8NSV1MkZvzuKPSbVS7aZw85kH1fsFSSaG3mNvTBPeZ1cVqYA4sTXi4qsiA2XmcLWSVNF6cKUY3",
  "key31": "3BkU17L6zmpmCvZK3gZ6ywRuyxscHYKut37MZAXEM4Q7du2mSHr6BPM59exDdL98huRG4xnTCsttyFuQJLwvWX5Q",
  "key32": "2woay4hfN1EJZpFJUBXSkM7CKmKSrcE8Utu5KkqcZ8B8gUqdFRCuBNcfK4bEWiaEpdrcjLQUKmDi4m4jjUNTXoQi",
  "key33": "55ve3uZtKWsMovkMMGqTrW41T3G6jc2GNKHstKb9dBhsgYUs4BExtuVA4g5hhf3bcDY897DJp2KbzUBeoHcrGDhT",
  "key34": "2R4Vgu1LiaPW433WGgfMmMBLq2wtH7BkjQsYooqo734GukWt8D3hgwSZDFXPRy1u8Qe92heqAp8xNbYiAen5vCdj",
  "key35": "3mqDb5ZLjsunX4L6Q4aKiALaUMCz1G8pUGd89tfGwRLXVrtBvBqovraGy9kWenEXhcZe2LqztC6LoNn294ZWF32i",
  "key36": "4tseR6UgNJWR6R1i7BkPEnuuY5sJqTjy5PCtM3MTucyVrFxeLkQSK1t5GibvtAUKAF6bgrhEC55GGbmm6UmEsD8E",
  "key37": "3k2irpLwQhFg3VRx3remku9baqQ1BYTX5433w9hyPdRin5HNwyWC5UDt7dRmJyUoPwqYNKMVka4nMzRy4YHubrYn",
  "key38": "5MmEbtfwXPnEdP5pmadzDY6fjJKezuVspzWW7YiCX15fNn7L48kcxGjPQ1arpXKeZhnAP5n8AnLMQDQP9TgVLsHE",
  "key39": "3iVdZ82EpGdT3k3LRTinozudzMAn5frh8HX5Fzh2znGsfcyiWBe6md2Wy8TXhGqWtTmEi5yLfTaiJQNsVtaFHv7A"
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
