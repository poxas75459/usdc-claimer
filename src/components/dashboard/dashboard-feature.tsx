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
    "4m1E8qRgE3rkR19csFxCtTK64CgnTbpNsX3nwTfqKMXvyT85NWtuUfQ42Tq7M89eKdNTm7vVr9FqHkP6KRuFtD8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPsLLMyKjC4Qp64BJfUAt5qnqyYabdKxZBcivFgT7DAS2u9giDoAeFCHG1hphkmEgv3jbJUiZrot7Un31iJpy2J",
  "key1": "91p4FSaPFqNQ63xsuqJRigmCzEPzxhnpQNVxhjhHpeUUvLTbDkXyYRVknmPZ1hRXXssRxYtKUU3QsLjrxzimqYY",
  "key2": "2CsMzDjXPkDswn7Wh3dzfqscEpiBc9VUmVVcDBpBKEVgtnopdwwv1GMtowpxax9dVFwAAPbPTgC1fhaa6doFq1PT",
  "key3": "5ahW1XEqd8qt5PJBhfDWwum3PQhPqNatdV2DNiU12Wz7yAKMqAtwNqeC2EfGLxz81tUedddBC2AmrkWwRZVkMuFx",
  "key4": "7RRK8SvYofWX8ZBkuNNkaWJ41ACZwgoZ2869EYsADnjUz1LZUumV1vZGSgQJwX2kUa58yZaonH7Sd6Cb3xoFHNn",
  "key5": "a4iYR5rq6ci1Yhh2PGUwhh3rP1SxyTvHm1nVcYM5upf3mep9LhoSRyNkZPXR6ZWuDxzEzq965GEtXGkSBFNWJxz",
  "key6": "3Z8jDA88eq7p3zb99ArEW2J7mAQGyh2FXQLxdk6HKsBiN4wRdnSYjnS4AU8j3iC6RMpyz5iAm4g49AFJNGTqJ8r9",
  "key7": "4bm94kxXKmUH9goNJbvvP2QAmcAjty4yGEBmcT5NUtGkWNokqRHZKKDoqfLr9RPNpMFsVqqP8L3Zj9DhGnZJFWEB",
  "key8": "23mgTonSt7DjpGjp4P2kkL17bQuv1tjtL5BX1DbMo4rkVqjaBrHMg7U6HK534c6cjidfUgzdeJihyvebKR2hYtW9",
  "key9": "4sHLj6dUzt4kbks5FcKy65EYTxyRTU2RbE7pMPYTrN6ZP68NNyJguf43oMyAaLvFXpPNacSm77zauwuid1yaHMxj",
  "key10": "44jw6e4vur6tte2XSUHjFay6H7Bqc7g6XvTUFLikmjLtbsjdud3cTPc94hxf8p7xHUJ7v3Y6Qy8GYN2HkmPkTdwG",
  "key11": "3X3f2ND1mKt2zaCRJp6CzSVp6VL5YNLFj3BMVb8EYy4JxLi44mRxdPmgsd15UNySU9XTmywbiWpQrxtdCuE8FyRX",
  "key12": "2DZyTeXGYN7GkmLYmVbm11iTLteVBT8FCuEpuxHqKxEd4mgbszBZHaXpfEB2mT46kYK5L3XG4YF9cncN6Y7Yycop",
  "key13": "2wz48A1WQd53VYdBtwGVkY3rcVcGYzg5nusCaYjRux6ihFSr7JFVBhu9w8tLafhwE6r1dNmhVQuwtJBhrJNxpXX",
  "key14": "rbetRNJtUdcbLdhqfUJGmYyBKDRrTBRQn5QL9uHdDWDfX2FGGgh5rmaq3BhH93sLtBhSY6TLyRnaY6fcmnmG8qu",
  "key15": "RqYzzM4Aj9V5eYrLffZK8SttAHdtNxC4Rx3S6Y7ziRVoLQT7eeEoi3uAxbX97qgmqzv94wzUV1FbyinnzSKb7yj",
  "key16": "2wrmr2ibtgMhzyyCEJmSDQQFUgQYigSq8zJeotqXAGZpKykYRqxjTW5kCz2Mb8jHphSLMANiGEs8pLkCqhmZztYu",
  "key17": "3PEAspSbt8Qmvy4EhBt42xnZ1b3xEmxPXFuQeJyeQSokxaKU1ZPve5QQcohHHGUmKgrL7Qt7iVgm97HcsYZrmS6g",
  "key18": "2PBdwWSZzumDLTgsga7bihQEJkQsgEe891ZXxjXjK1PrFPkhWX81zzdK4uUzEfSBE6pn5woHSrGJHtiBUVjpswJT",
  "key19": "2Tzqmhvzb9QsKuMn5mY99NZnnB21Z8Np2Dprm5GK13kQNgCvc4VBtxvQtYW1ySkhgxaBJxgUpMxk8pEXX2FJu6UJ",
  "key20": "kZaAjVuX4NYGw31e7hWenDWYTzyPqGhaEGLyUjBb5PNvRkyoXNzKYfEQFdhxP6w3Xak4KHMhyEUHUKuyvck9b9U",
  "key21": "3dqkYySrouCnPjgg6so5V1ky8tfdwce1wdh2yxZPMUyr9HFkER8NUU1JZ5p6kYjNGxs4TUCvdpBMfQCC24WEsqPV",
  "key22": "42oKSivgpe2HoMJ2JWU9gV3NrtjSLRxUD2zKtgBdxhJxFuLsHrcuzstcj6JSZfLRgEmTfkVFLjmqBivkiXrV6LNq",
  "key23": "5xhtr2swxaDAinbpL4za5GZHiemXCo5KhVcvd7mDkuAn4AK5rJnrtDVkJtrqCYxHCmodYvdzq8dist9TMoFxkXA",
  "key24": "4VRYMcr4aNQqeVFaks1AFExWJhRa8EQNDpDNMKc8ubUuLGqPZvPrMvDdJ1Lth5iu2qBxqzcceqbe1uTMGZLRLfW7",
  "key25": "3K6e87LkAcXzdpFBFgs7tKpcUk8wLvCRJgVR7iJ9cQUZbUCxi4SfzfgvdGAp44X28hjXgUTYGwQ6UmHjhTYaYtEk",
  "key26": "2GvTo7j8p2d3s9JzxLPEJxqEE61g6g8k9BoZEMotb3HdUeANDLw3vJyEJZwNKBZYQdMpLnWKJJcqUDa38RsdEyri",
  "key27": "4Pty3tSBbvvngXqMNFk4YCuyf2z4NvXDKiY9if7ZhWJrdT68zZsdTiBD6UxbaQZruFAJyuMXzQcBuyMqZu8ueNid",
  "key28": "2dVGE2S5m4Qj812fB5LALc6Dt3iXcd7qe8SH83dVt9WpL5iW6WJW1EPdDGNLXb1erdDWzcvLTKqhGdpcjzRBiHsZ",
  "key29": "48Nh5YNXBK8xvoQvd7sqqMFAhwypsAMzLF6z8DuRGNns5oqhJDgwbbbRtmteGuxWV4HuiYkaNw8pmG33nPtxWH9r",
  "key30": "83bCGpQoLZaS3kx5Zn89JfjiaHTDEsh9b55dwfDZmHJWaujtG96bzhB6bmvY7SecYXPuVS2GGB2wCQSSnnFXDzb",
  "key31": "5bSCjsVjQanYACGBj5CQrtosTVe2wmyBLXE44kXjtAMdA3bfkuDvzapxybviSwsrzn3tqP2tf9KZqFM58jMfiM7n",
  "key32": "5UDzTS9zVe7CZ8sn1esZNzPuLTvaSseyXCRrkp5u3ic1dyWRBdv7nqS2P8ATY83kZmdVsHVDK53ehc4tgdmMaPbd",
  "key33": "ZPEtrgdPBakiugH4U4iB5HbeiasDMnEsWkPfk75NV1GE1CYkAXk5LKxqJQgH1CuxFVbNAJcvSqe8yzwCNew2tsW",
  "key34": "DrFqEeZUWA7WBbpgpQQ69X1ejHK2XnTPVoTm8spC8mP7FYK9Xyo7Xt4prKvJPPY8r3JSa5ZNqqbvyRFKpNwQnkr",
  "key35": "3FbHTpk7MN6WwPdzxJrH9n76JZMhFc2s46qJjhEDp1QmZec2QnY2dqgxEEnbXYjwefid88sRcXZH2rVVDqkM7bgk",
  "key36": "3bSx3zkUXRX3ZwFUfQvjHcVfCjGYyTV3f66yG4fJALR66kCd7UTM6ZvXLMQrRLDiH2QX9f8DMsFb1r3PV6vdWbM5",
  "key37": "ZyVbKsrNVuhXHJX5fwgstSyR7RtdvCbQy1rqYuPUJ1t4exjZE2qamoGWnQVVtf7Fq91nTJwkYu7aJ56btkvP7R3",
  "key38": "3KggEBZYKKPwxGks3QNVvH8ihRf5VRw4xHgfFZvTxXY9V6mEDMWnrYnw187FWU65wmpHKxuPup6eWSs56bcZB4oc",
  "key39": "3rRng1FF5f3hKaJWDHHNd41vStufASKkcnmgeycLd3aCebwcmSmYR1aUWUgwE3mbebHV2SY8qzN3HjFWYdcimnnN",
  "key40": "3aX8f21wmM7td3TwnL99ksvpCAdKPT85eMfdUSVQkry56FnHkPPjCLJ1i8iWVC54Eni3RjzYsgmffZic5ujmjMv5",
  "key41": "3iLEwbkYc4RWX79kQ3h3NxaidKTJSUoxUueHwK5tupgZL2D4UFgFwL6FvZ4UMG8a94gfs3Ud8oFMLyPf88TBr7K7"
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
