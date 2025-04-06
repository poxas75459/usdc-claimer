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
    "2fxRRPH81tBXwDX9mESK2vHKg7CsvmEavxHrSJ7N4zin1e2vRdN5f9zZF8PiPYM1Fk8zdRJcG33J3afFnbEuJRye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWtNbdAnr3vL4HNUP4fj4ZNCGQGT12kbHWfkdQvueXRxCHmP5jjcx63aVq64SYstN6JmpdZMRJDSXqiPsdUwfHj",
  "key1": "2Ep3e9BY9zJZqJyubfcsywtW5fkYeS6tdT7yeMnp9vXdSZLTwwKARooYzodayfA43SfoTDa6qVbp44T1zc19SiaZ",
  "key2": "4evnGbHvtEaPWA78j4JUJecxRbV99tZvYyYCpNzbpbaTWCPzVhuxoWLZHL7HCmTBjYo3fF8vjF8uTmp74MHucN4e",
  "key3": "2yyEXVARmKAF941es29Rmi2nTAXehLVKiJbw9eFbfFhDezffsBsyYfiVswfAkMR8WtrBAwBca5wYWjZDcjZFUXht",
  "key4": "61sbB1dydqj1U5jansRNa525eHzzzwc1Fq7zgKGKbguUYQdJUo7Aw4Sb1vWy2o97PJjVYz4fUeoFrGiSA2fyNHht",
  "key5": "3KerZe6DjRi5mLXTTRTPVmrxTHN5SfwKnSn9AQCp9MFgndn28cVfYFoiKZpNU4pFDujkeyqPyaU6Qu2FuShYMV7m",
  "key6": "2aUQNkiGoTLn8CJeoUdwemLmv4V2n5eR54YF5u3QKYfJB3rZCsSahvrD1kwSjXQq7fKXh822qWeP1p8gWkQqRFRg",
  "key7": "2MSTAdjYTpXxJbuEGWksfRd3WSmKC1YsA5hrtXNDVYYdBsa9Mi9mvjkSby3XAn1uTN4WaA2Q2mE3QvcoSWqY8Uzr",
  "key8": "5doGmFPuDZ5ae6ougaf7V7HuEKxtizGLAxSUuAmQQgBESNTFfB4KUq4HxXeSw63APAUi9FKMy3kDYU37TJ9F8SNE",
  "key9": "5YQaakhD6hQhvxdxAddjY8mZR2R56iRsvLoT3KVQNC3EcHfYbUVv6JtXb8GHueiY4WD4suWJt1enZAu4XHWe6LNs",
  "key10": "1U1r84nKfYBVNCaqcphZ98jrieGpVZwecYdgQJziZsqb1Ve4VuYmdsvSpRE2PHJKyRtsBQFp63iyjTmT7zW39Lf",
  "key11": "42uAV2hZyWjQ76GYBbbt9mt2zqwKjtMM2E1eHnoPXs3Nz85WTWzn7CJz1QPEF5fPLvFNJ9y5sPMfAYCgKsoDRMV",
  "key12": "3ZR8zw5epvb7NXrHY3ELC8Vck9DaUPiinLXrqPhoGaqSVLwZL58p3W7aH1hATWaHJcd5engSubeyDLNa82K2JKg4",
  "key13": "4xQAH3qXqftpwtMVhaUUmkgmiZsc8M1CXUTRdgRnMmapc1T5idE1kdZTLCM9c1oL65u1YyGEUWzdiXbDJb98QjQu",
  "key14": "3sfjH3RQY7RcdVpZdvjwXwhjD5YxiVeJgWMz4S56ntTpw3NdjJPstX1LVFKzcypRYV9Num5h52sBkhD7RnUef7q3",
  "key15": "QgDRSr25vQmpGsiVT4YZnnpnyWMdanmFiEF9HWNNqy4ReYZKZWq3agU6ZTN8pwLauWkTBQhFsncXy7XTb6afx7d",
  "key16": "3WJCuUvby4Hmo54Tnnt3S8ieDb2SushHUE7Q6877qH7pV8UvRFViq8MyfifLzyy1i7YcgMzkicACvdgAYTUM6yEe",
  "key17": "2QVd8h3AysMW5ahXEVBFMW98UV4cFrgJQvuudvEAuPmgASTTz1QcK3tH4BFaK5hTGnDAint72JL52QfAWMV4vrZ9",
  "key18": "3LG15DxjANbd5fk9ijXriTaUo5q9Vw3kUy2ACWgSNv1wgmxHgiKnnXSBzCwJSGPC5oi6bubX2BqNqEpNVW1u1YB5",
  "key19": "53cCrZHMJGqic4Wg1sigDd3pVy3bRhQ27Ue6RxZxZZD7RdCyJcD6MDMXa1fsqRXp6w3RQG9GEeQAg2ewQMmpitjz",
  "key20": "2u9iWMnY37zrkae6H9khaPbZQULtZKhtcSpHNysgvJpKap3Z3asKQSw1nL68manPbLusfx4YcjrtAmptc3MnGmq7",
  "key21": "4LgoaNdyim8bSmtkb5C3pA4BTyXyYDGZZwQmUpYb3FGe1ynjQE5chxtNRbWFBy8uH8woXnoTdPPMfWgwXiz6VeYt",
  "key22": "4zTjGgxfBWPSbgHBDNnzXosawi5eHgnrYkuN5Xdn3eb4QYfVccctLTgDNTaqPmjJ12UaVF5KAnd5tFUDHvwwB5HV",
  "key23": "24XnNANGUeLwtzMssTJ1iYZoR9dzoiNkzVji1E7p8pB6m8AyYsJviTFj1uvPEA9rMs2KLMUeM5gPXz2UpRdEpmFm",
  "key24": "p3ZiGZc5Nf7Hf8QF28Xk55rnoMxWDzx8pc1oDNy42ZLMWQ42hULhpWDq3um6LMgQPaCHb7FPPPorHzjFaAKrifX",
  "key25": "UpSuqmgKoJBiMHAY4Ya7j5xmW94kjyYZLvQ2oMGvMasLHTZ8WygxsiM8nBG1KkYgk2YCMxLZSrrLHLT7qferU4W",
  "key26": "2YRWbZu9ERBBSWBW9fVBosDdopcQkvpspqBxvrn3fZNeTYnb6LsFvP9UH3hk7JGWkWmV9dg9zBXLjYmkAd6BcMWn",
  "key27": "4CeRwcDbfFk3uJ86yTD79ot2yR6qop1hHsz1Nz2xtD4r67hK5zLjWE3aE1MQvu1fwof4Hia7BAYXvUkxjhKsfBG9",
  "key28": "22edQW7EN6rVEKuEFLAwpgoStBZJzenEWLqfLLCP53TS6QFrw5pHGhBoSBTA4VeQemq8LXZ1RcQWGWvMmtbdt733",
  "key29": "gpGUiDaA5ok2MhWkPQVHDj1vv58j6V2C33y4QTXsxaYMesk89SUEKBoLAwLGNMHt3zXiHGGrzFJgDmVPVV8Tprt",
  "key30": "63NKr34reSEB6TnvyMmBAx2MA6aLRWFoXxCSNukvFmL92qiY9WUMPAhiXotH9D99J5YhHZXUhf6Ru6EYURWhShwn",
  "key31": "64iBgrScwSmcQ4zB5eVSMHgJKnAS3BWCFrWj9fHZfzqWF2DyWtShSSnyWgAHLcp9zmhPYtWrj22vFQhDC8qL54rx",
  "key32": "4ub9tKFx6UwhtLkjaAJh7bTBU73xkBQENfnEUY51AE116Tw378LyHrsoMiUaC5RfJd9tqLNAW5yVL5Dp5v8RPEQ",
  "key33": "2cKum4sL3D4VPqDY8FaKTA67L8wUSjNQWuUNaQexsn8pLEL249UbpVdtddPeS6JfEEikGaaHNTWsvVcUkzjpPzyQ",
  "key34": "4DWVyPSpJvVet4RuWyfGwQe9z4er6S4j9vB791syTp4GJD7qVrrFgLwUEhPfim19riiACmH6HuFTqTnw64yNQHJy",
  "key35": "3ic4dRnczHTkNy6pRXtSxcMuJTp6sAX9917zhc1QZKdfUPJWB5rdAQfcaPuPK8foqypypxDdkw3w267oN999qELb",
  "key36": "2UwWzPdnpb4PyeLx5Smh6gu6GWPHEjVjeVzBCWzY7o58rvyieH8r5dBUfvpGNrbPtEmyGmpzqH9rPhQe4xG9d4jH",
  "key37": "5wguGtRHLT4XWst1BY9RBzDAuvuvDRkVCKScDsVNMEk8vMhn1DbS4JhRscEufijeRjcPqFFQyfcbPeYcK8giVTAn",
  "key38": "2wL7NkgRhGZLHvn1fXQ9c5oNpkvUdP11FJq3UYniYXnv7BMhppjwdcBAoo2Bj8Mjw6CFTHU2M6qykcGCrVvGo7bi",
  "key39": "hN66U922mSFdaqPM1qhyfSqJj27s4TJhY4QfsQybJVxtH9ypFhiq1UttLhZLpaUWqWNQChJfsxiPSux5rrga5Mb",
  "key40": "Ku8qYK7GYN5AybfoYWTQ32JbDjsmk6NSgVEMgEXjWjX1XV6fU4xhNxZw35K8RzFNPrh4BAAMTH6TDKaN37Hgwjj"
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
