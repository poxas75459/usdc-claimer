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
    "4HbfsqWM3Ae9exCgSFVj5FezfgS7xRuCYBf9L9AT8KaHyJnhdcyMfayfvfH8Vs3F6Qe2fM652fPnq8WrqJUEwVP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khktbRGdRMxLXuAvX9zrDwiESSAv5qQtcV2mLJYwNieDQC6Jg4tRt7hHW3nbvzwfCY7kpwNVVpRpbAtoX89LSzx",
  "key1": "5Uah4LCD6t6BpJYKPx2rLHAWP3HGPAaVFPxixmhNqGoN8QKNymqF3HLGC2BpTRvA2KkBA51NedjLet8ZxqNYNtfJ",
  "key2": "WswvA2URPZD9N5hSYPUyhx6RgC9aPNdbUdFs1nUaJrvQoheJvTY5t1apchmKQFJhjoQ2K56mAGtBwUQETTBkGL4",
  "key3": "3NT2uVn8vwxWtHwQ27LYV3EPH2M8T8EC3msKoLHRsoKaeN5ywvsAg1Svo6xaaYCLiPsyyHPSJQjDSxGsc3SRr3su",
  "key4": "3wbEwGmMvT4EGBcutVa8iY9QBaUAiscjHkFyiLWhYreNRC9xvx8EjWG6qj7meV9cgSVgh9tacQgGvntYNVcTbLpJ",
  "key5": "4ZgAVcSp6sbwWQynpm432b5BBetBLEJeWiqBFjE93VAANTAtv6GWEmhmZdvBxfBEsrYf7WnFUwCDjx8icFvBqAmt",
  "key6": "5Uidm5zSkWdWbnGWjcDBNmJ7nyML7H2apaMdaEU2xejqs4hZTxZominXiUWfUw6QiLxuMC8LWthTzYaWZwojG26g",
  "key7": "34jMeQ1b3eEGf9hn67K677eDfiME5E1w1F2NNRMW5Uavrgne5eZ2r4Cg4yxGQuQKJ5y5VNww4RtxdLqaMNtjzVSn",
  "key8": "xQCkHiDFsB219UCeXcqBRZEbp8YELc3MLPSF9i8zH2FTycWK87sHjbvCmf2JvUrvw3J58eYzNQ1gRKJzC2ebioB",
  "key9": "D9eHqQXpeqXQWa5kvzbVVR8eJipztGXW7S4hrGwhDc8914JmEXiFYTAN9LsTHJrTpWXVYPHkkmkVsdCd9WWxz4M",
  "key10": "Ny2yT4FUAGG5R7gciqPFd44haoHCtUeCqYXaDf6mHKFbrnXAiKUApTmw3qTxzQnqgP5vfa1CjKCqjMb1JmbzrAN",
  "key11": "4dXV8cKm4heC6LCW6VZPqXzDeGBy2sUdsqxZJnVgtE9M8ysXLVMGvThSmrG8utyg7dA8EQxixRUUk43Qm3MteM1A",
  "key12": "KMybyAUG6QByDPqs4g9B5PpxwGehzK7MQRKkzF59k7Ma9QYsvLLq3t3dtijaicg9dMBBN7zGa8dspjY7h346zW5",
  "key13": "2iZ9EmMQLB7nqZKWpRG4MENCVa3fNNM9ixJTzGgij7EdCokq6o163XS5Z4WDXxunQWs1pncKhJLwBtVqCpDsofBG",
  "key14": "2x61YcfkusXpWKcdtyKKhiAYVhmUCxpp7XbPNFH2Sa9EvZz4BMBgdsLG65yRZwxkRCXcspysSw7TZ8mpMYGHQJ3p",
  "key15": "39L2bEXn86eSsiS1CUmrGMqdrDHAkx4kagFrcKqkzWa5KfkFvBgWg8ocQUmWMqZAew6ZetHazHzhkHWfniPuM1be",
  "key16": "aQWdpZ4PsXXiqEvvGHFVyqH3hGtvVGKSmmQA8HWgjgJAcKfvZRxfTe845E1hXjiS9Fp2a6dPD9jhJ2uoT8BgPz6",
  "key17": "5eDq7ndM34nX4WGaS6qqqqHgyXpM8W3NjPAwQmfMzEo8fLMqKoTDg82PKWa3bfrsDs79hebmM3b2wA4Tmhbzsg3D",
  "key18": "3s9p4h77kiDmXeUcia1MEmLMXQxPDqwZFeH29FKJLeEHVY7YZmC9rdtvZm28Zruttu2uCehJjpetCU5mhk8hyqWB",
  "key19": "3xZVxyWPba731YgtcRpnLXWLSLmsgP5sgun1thgJfCSLe8yrPUJWUWdXeCptiWNG7igkKjkmvsN4azbnJL13AdXf",
  "key20": "xDceEDQsqp41GLhNoXQPy42i5NeB1AF2mXJVqKc2zpP4wZKHc8VamDWX1e42ZyG9MDvrvdq4sAGtWZp9rw4Perh",
  "key21": "3ZXd3iqTVLinw5yG2oYYF2skHUgeYKHiFmEfpC1xgYe3umHLCTbgFxCLW2vEjKZqBg3jc45vhLeC7PPuotzVLfU8",
  "key22": "3kvteW4DCW5ZMw3jRoMCMa95Ns4LhfyzAKTiDKr2wzvVN6ugn2dSTMXodXipGyqHtpuGDqxSQd2BWjvXVgLtvQaZ",
  "key23": "3uoxjzMHzdGucH13QkRr6sN1xnEEFybn8RVGJAzDW2NSys1hDsug1z3gks75QF5iedYTHfg7TypbpJ8KXkiGyZfN",
  "key24": "3UH98shAQiLx618TM2NBDRv2emZA9TnyMjRyM2fHvRKngiC5CRUHJoGaYZENhPpHAGaUMLTiaLiUdFhRPngme3eA",
  "key25": "3iUtXvhWTwfViFcaTC5ouknX4kMy1iy3Qzau7v3MYKJhrZBdxtBtdt4v2bz9KQGHG2TK1ECqbH3NxX3xazMDa53i",
  "key26": "35ernsWLt2sBxi25z1usjMCrwvJyJuFKjBSg3pP6YoCsbWNcanR5KGT2Awd6TazyEEt8mqkY4MMeYywVif3nxnbh",
  "key27": "xLMJzdbq7cYN4SC9huLjMd8V4Z9yE5S822JkiJizeQ8i3du33h6npyay81n4NrfZNCV6qe5X8SQgRg6s6vWuFzB",
  "key28": "4qxdtQBSxiAhKQRB8it2aT7TZBbBxgxh9EzdMfD5ZN1mNtGs8cFVZE9oDxXDeky1G4gYZx4bKofjDDvo7XJ4mPUv",
  "key29": "4MGYHtXRN9bNrmid2co1H6CEuWHjiWeZ4rcNnKm1AD6seNMoChjSmE8ATsyMjsegER5rU8VU2cTPKa71zgnVKCX3",
  "key30": "2oZ5xdf3vhtdEWhxkJ5LAvVFpe1Ln6a7dsPPE65DPUGi6HZLUbh9u6WV6z2y5ykMguTdiyQJ9jfkVCxg3tXcXpxo",
  "key31": "3K9VgBreaRj2iiF91zwjVrvV3qCGkVC2zp13dcQmwUjY4h6CB4V7iCSMnkP1RBnKHLfZp9firMwoc3ydJ2BN5EsG",
  "key32": "24NWbVM8VNWg9tTvzW5sBhsdVKdbkz1aP279mLEC5SSW3LYDc4Bw4ii9y9HP1wfz9skHHgbAXGbNA42r9XUnqpCS",
  "key33": "3U3s5ovt4Pqn8Z72X2R1SvxXhKXZujv9cyHRmwZwyFzLES5uASBtfxgpBFPYFGpzXcXcsDXQTRKsDPqhBifL4uvX",
  "key34": "4apFzbmWD9PnbtD26wLRgqxcDowVJQv2QNDxPKoBrcEr71ER2W4knN4iqDrWsqdULibLRgbays43PYg8xS7U7X2o",
  "key35": "4yaeB9haNMRevh6ZjuBLeqHKkv6QHPLNUapKRy8jFHWPYUG9xYqJxUY9QSLfzGMUfnHGrESdK8bTxXpRiZQtnnAR",
  "key36": "31viBcihNu1QoY9pzcbBrJZVGDCYZfQpXwWBq2EN5FgUh3BjGknP5Zib1rCuDws6X7pi4772jGzipDTLwtbcfgSL",
  "key37": "4GJGHrqC8LNzW4awMLsaownqUPD36fyi643PtBLmXSik9PXz5U1Pe7HF7ZXnKr3DKJB7zRYR5npkz97yE1KdERTL"
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
