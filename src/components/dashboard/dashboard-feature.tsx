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
    "4nCXga4ujduX9XwpR5TxRJExoHZkK9MjgXSx2oSYgmtcMfDaMqgi7wBWhDvWhuVxzxhYeyFmQArmjgHWDJvRtmzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHfLBXAg5oX7MEvdE4QLX6d4MepRcdFDK8UJ6mMKbJYjVtJwFkC9SbpFSxvfJsget91a47iBQoxxPL2AZTfALaB",
  "key1": "3ZfpnBEGGrRX6dGVSz3V7ea1xXvxe8HeMxSQTBhu5S4bqQwzDv6eJWoNNLcdgmJeLy1zVkR3pnAtdRB2TmUvKypa",
  "key2": "3gGRiKvyXuJVVkLXoynmnVUu13ASjcJ2a2XER4n7Nqf5xCoKghVd1wTkhjQVT57TdKWSGoiEos6annkmVsUjarhY",
  "key3": "2N1st3VPZaYyPZBxm6Bj82YmBMXsFwQRu3g1xYK7LoA549KHXq1Z27kiDfTjAcyguWs2CxSHMkzHnzXG9H7uTM6r",
  "key4": "4dRa9qyArospoEqLHuXCw5ybshWzWuvTgJYbKbqzD1HwbupeWURQ8ZC2PZDnWNwfPKctRV89ijThsPM3Vb6997g5",
  "key5": "5wqtD59t4MbUxLHTjt8gqLtoVJGvmgYknZYUoPButz4XWrF4UQBg61MkK7AVdGmYN8uuLsipC23NGtfeKvndk5RQ",
  "key6": "27vSDWh7rP6xEeTuc6W1wTJRHpD5Xtn7keh3UM4fVTMhXV3c3NzExKGi6CggFQkTuvpgz5avJKnobF6Wh1VRTWZG",
  "key7": "2F6dkvzCVPyLuh6PoHmoGPLwpBX4iznaaBiFnriQchCfMX6t7j2FYH1xyw3MFxmgUrKagNxvL5N89CeGPnQAynoo",
  "key8": "3JBWHe2wFZxpsfpGebV6M9snMinBvrtEuEK2FF7DPZUiFqqcNXeG7yDTPQJS1TkDDPRuHW98geSbW91uySCtkDhY",
  "key9": "41Zz8nWHJ8pvqvKF7Hw5fCTY1hjM9R1cj2TRTs1MQKDMbRafCgZvdczWzdmBi6sd7ExpCwPzNDqsAdckyAnE5wYW",
  "key10": "214FGVhhx3ni4iT646gRxdqDzA7Xvdr5gNqGijMP99oRfM4CpcuFxi1hJpsuFjhGMuTXoYYzFiyJKaK3A63MHW4z",
  "key11": "5DrizCQtdaTVfYZbDZmQp6uucf5Qmbh5iRCw3c2E7EFCdVHRfHixYqByq2iDtX3HY7bBCPs3EMFhb2i7pWsfb7qN",
  "key12": "38DCvZ6BHicv8VAAmVQCKGUQLQs2yMcDKL5eYxr4ckT4jM5aSUMCe3eeATCj8mZjptxBf2sAML3zmyaVZGB5T6tJ",
  "key13": "57o5PyWG9nYaxySH6xuyHsDHC3P1iGCerVTJyV4ttRKnwULR2ktxmZXqGNtuff6fVRZLW8dpLcKahfo2L3SwtgV4",
  "key14": "5UZmcZ533yAPDdZwcoNrnGiGR7u9uh2NHV9wjzzop471THHspQN6cfsCUAMdxLxqKkb1weQuZaqk9gzxFKJNaiPE",
  "key15": "d5H17Fk9BbVDPHZDrKmEZjTjiizpts6jLkj8xBfXBY6Yrsq4cCw9csHu3KmvB1fC1KYbMv3BKp6bZFGJ5Q3gKxn",
  "key16": "QFBCVnUAXLcCvD8Le6kp8sgXKoYQz1dEfPgAqnLQDz82NNR2TV3KMQZNTqDE7CxMjsURBxqMKkoLQrXUHbGbTFi",
  "key17": "3prH5V5QJHKGQzdTH2uKh6todPsw4UBJtqyPcxs7h5qDCx2cfHzmLyJftNUQDrtYoNcbf1xMi1CNqHKV9URF75tf",
  "key18": "65pVCAw8s9zD8ZfsCgLt8qLDrgaM76a22LdSLkfDVkZs8eGQF3sCDzBrEE9cFCae7pZYNCgCajpn4qcRgYBSJCfn",
  "key19": "2NubGLsP5zDYZWB3n3rphusJdk7cjPGax3gtFtuKVZPiRm2pEagt4zqBXtz87LQ2kpNW4bpVZrPi7Wm7ds6xq7gY",
  "key20": "5VR5pVHp1phP2cKVoEXECjwc5sQYekbusX3Gz47NdKrLgzigkUDGesoth9mdmaQs1N2XTj2mNDrgthBB8sWnZrxF",
  "key21": "ryjAJLFtvBd8vF59dLHAF9Z9ytpv6hygdtqi6x12UqarM9JxwdN1Xdhr3HDPfiAor53CF9s77FENiRgW9M3chsW",
  "key22": "49vwQnjxzrCC6mjvfQx5r7SnMeAxAmV831rJ2ap8Zi3yJHRtApB2xrdJdiqKaqBteFD9sYpx68LQLM8Krzx7v85L",
  "key23": "Ka3m5t6L6F2W6FYDxx4U4N9VzuSGZeZMgEhuJXYEqUbJCCnejFPSFmRJt9gPBrJQvKs1ECxfabM2j37yqn6T78U",
  "key24": "57mCpqmHWYGACMVp4vSrt9k3RRYqJwV9b5CA2NQyQ2pbM31Z6xnDGm1MddWa48devz7AW9395N6qpcnktWR2nLKM",
  "key25": "47m5xfarLdHC1THRrb2M1E32gWK1M5PqazFmC8GgEdXJn22SjUxNV87ombwMreQ1N9xWibiDVqHdcjseJeaD4mi2",
  "key26": "3pWQGReuvJwbbTXP16YBK1eWyaUNXTNQaFT62r5WUL3huNh3vPu9zBUwREDyGUN7aM5ggjZv2ctK2tJ4LMiUcM8D",
  "key27": "45woa9Cx9YHzKFDgoQNcQVJyz3Rx94LZ5Zc8814JpdQzmAieYNDcnqXCovJy4xboakEJt33CpM9FbvxGCiccjWat",
  "key28": "c8nVNyRRxDKo3Tnx49w2nm3qayQnLXSfaAUFMUbwMvwYxzqrdJUH9PGft6vVKRHQEzpjLJJQ2QkxEhfUkt8yoB8",
  "key29": "3KBy6L9rMHmkbV1vuRr2BBQfQeyFyNqks4rhZ6mnXagEuouVN32mfspVXEYMe9x3tnb73C7oG7JHVpXxhjK7yN5z",
  "key30": "ToQqpg9LdTi4VUcwXqSqBTcFUkBvuik51gwimjUikV5f5C4NAwKCcjtCemthpmDGcQyLnu9sEHjSQK2KL858jcb",
  "key31": "4Y4VaWh8psju8Gm6eg3sYisC4qKseiQCZKfsqzmg8yRi6KuHzZzzBESipQ9bWhXdpcZTKXrDd3F3XgxyjhYgsSoD",
  "key32": "FDJ4jnuTsdXRAQWRfGeSz7QmQjk8qfJ8o87B5DyPyt7jpnCimjbq8Ca55Kqr1mU8G5WxmXUY9gxRNDyvQYnWegu",
  "key33": "5GCh2MxPrqwfHihBwnu7UUKXsCUL7XdsG56wf6NNC4SupHF1vuECkUCLhUYfBoxUhThJ8jMxMBfhoGUX8inZuwan",
  "key34": "2qP233xg7SShqsyG2MYoK1fvGTQn8typwvcVz18wuiXfN6acin2iznczcAs7VBJNSsxDmNrRiYMMemaQFuJKLphx",
  "key35": "4AVch7UCNocdpvc3DugufuqsTua4Fpe2vUYgHnXLuj3otYxjv3kZrGi6GfibvhGzY9zmxmn9fkBPMTxsbfhHQX5y",
  "key36": "2gMCf3dRxsW9bTyiJtHxpnitp5H7WRqg29wRYH33UYpNdQNTDkMop4XxLQzUitcTJZcmW2J3EjMXqwNebCwaond7",
  "key37": "2cQWFLATJVpGBpdiEop7aRybSp7NWWSXAkEqnAzDbtasJ49a8U6wz8rf7gdE7VhY6yLFjp8GXKWsgo3i5mpTuPWL",
  "key38": "4LPfNV282iAnBjepJkcf3bVJn9jswwzxuBjp3gRLQ2qaELaAasjGgADCxkdAc2d4qa14nW5E1jFLghXwn1YXUV6L",
  "key39": "4gbzZteKrHbpa4t4z67PkPBH6dtyq1Knyaf4pFAp2FtBP4c9uW5RwrvN8UUUh7VHNtrkK1DCaJSVXhuhxFKMhU63",
  "key40": "uBdwQFHZgqrDe1qwxouU2H9ZqHMRcQSwEM3QnQCeiv97WZj7NrYCbFdcX7YqhMAqfmzmn6ZX8JgvXtjLnKDRrJW",
  "key41": "3t5BpP19pSWGBZ8af58H8VPNwqf7MUeh6SGXPua9treEWAkDAyeqhKDwmhRRvmMoqKaDsNg1a2NnsMVHMBTXGmoN",
  "key42": "PKqj3tmvUSTAkQ83uCaMq1h3DqJbz6w4oUD2LRvzo6oA2Uqdda8U5kQN6XYZf8Mg27rWa91xr724uxkepTaTrbt",
  "key43": "xoFPNbQPnPmEKdU6Zqt46cBM3g7aKcSiG5mhSodNJfHdexamHpTargnXf5vFFhBC84LQV1ZSyq9pNvrd5gP2JsV",
  "key44": "5D2eRMr2M2vhjQgMwy4aU8G2Ci4nXVqsMSXc2xYLxzq8uqprjfqiidtvbSDTCFNjtDpBeNzuVdmvpzFCnHuoJ4KJ",
  "key45": "4fHfgF2EyBDUnb1DKbG6rm2TepKU72HWfuEDUZ6VTbNPcnxwZsYimEs4vYxcdC3aVWWmAGmgjZVJjKU7kAdWYWMF",
  "key46": "3yEQrcvvCeJmBN4uMQEuRkGspV4Cj6XNkfWLZLZqN8ZsGJAViMzG9sefiXX2r1JGLKA4jGzVbn4FqZSGrK9CJXS8",
  "key47": "2NWJFGNajGZQB9oJaGod4N2qJ6PvHzrzYNbuCfaRDxyQR2BJD8WcxykT5bsYDVY4o7nJA9xHWAXm5q4kh8wzNqJ",
  "key48": "52Hsk2MXDKnYq9wpwjc2t1crLghyyULhaeDJ5JAnKFPH6iCEyha8rubczAg52mPTrLJyN77Ke9TX2CudmVJzdmzV",
  "key49": "3v7cp7btgVhTFhg6ijKBM8so3LyYVMEpfLrWhtefU2mb737L13Lks9o2j5fD2LWdRjeJ977KGeEABUTafvvq9Q5L"
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
