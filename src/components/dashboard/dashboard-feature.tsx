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
    "fwzpZNbroCheuViXu3xqXKFY9RP8DiRYQgJmcrTkgA4Nmtkd4pZdFfTYHfTYZaGUHMBR2KgvafJ3Ch2fW9P8MmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcSCbWQNY2P4gZEz1QZcjrihjvBhEADpS2biit5YqAGJXneAED9R4GgRBTCYeYnaqnQcrV1wmtNuo4j5ffi2gaw",
  "key1": "31c9g2MpaPt1E9fcmK3Wk5R8mAwTdBSqowQdwEkA8AJ3aDwxR4boCBhsr4nw7aNauvtmFSEDzG2naReyg3kWApDq",
  "key2": "67hUnhiGPiPdHMRW1gpXtquxvXxpMxm4Ajub6ERgnFWvR9j953SKy1gTpGwXXQVFtJZvREUkJWr8TMXQVxFhSuXm",
  "key3": "gTebyCPiJXVnkziDGoDN6myeSY8Cq33YsfSXYr9RjQisdEiBudYDjGKzPEHKRXw8i8L9xA6nRuhofFC2WjQyWmc",
  "key4": "Mj6uzfg5auAYicJ3mMZiem3qtmKPbk4Jw6ArDQBXpCeaiHMDHfiPQqf3DqW68YhWPkYtpMP6D7Lxx3pFNhn9dTt",
  "key5": "he7yZnrf8VZiLDicjSqgYpNnX5P5G9PY3MB3tpaWofPaoAhXGYHsVgdVWhgVof16PnBwMKe4rZT4LWGU6YekoDV",
  "key6": "9h1hPVYztxksyhFUbrmQeNGtQSdW5tAnhBQ2HCEUdQaxsHrhNm5otPZyeiHv36kPdMyyi7xx5oG7bjFMfyYm4qj",
  "key7": "2X2SVQz755YNTYUs9EiKPjjENqqm2MxWG6Vb9zaQ7vMELiAXQbWSc65LMDcKEPJX91oPkFShGpES6D5Z9CxxwYVz",
  "key8": "447tSYpUux9ZRK79BUvSQKanyMPY5LhznztuPpynw7DBbGFDw5Vy7cr2wwwcUCfGRcmrSmbM7x8r7TpGfAqy5JD3",
  "key9": "4yEw8zowTLFdrsfuLqpi9WprgxfRecyzEyEKBdifdAWVM3nrkPeWcXC4RrwJs5MABxhWXCDcp4gCquUGUjTp3LtS",
  "key10": "YiXqMvjehDZMtKa7sjeDXPdw9KSrHENHBDexK1T9Xwt8Z7FNqWAf33UT6UAtVvd3wn8NesXVKfkx2tv4cVj5QAk",
  "key11": "2X6XJA66ai99mDkcHXqcH59YGB66NH5gHbgMcNUEBrrNzy4NTjKpNP2v1rwyLKxzCWoZHemruivcNR6xtcvhE3Ef",
  "key12": "5sXmaFTCAmXA5ckJvm2p2RZSBa3rvd6nUjhvbaBya9444vMQJmHjtV83bzhZv3fgu34ja4FP96J6eB3ywBKdBXNV",
  "key13": "4jLzGw4xza1EXGULZebk71omhuwgKFbtdBmWRwikJfksvvL36qgJEfKfBjHqVjNzSWEDdFcNQ2qefs7zy6ci3TGs",
  "key14": "4LqEQ8fHKQaaMTe5EUiNqdQL5MqxZw81yxLEgKCpJNeMYSjDUc78WZGYecGeVQnCLWF8QRArJsmpq3WEX2JrYc9b",
  "key15": "2RH711vEi3GD421mxebf95HCBQVZLPXrszHnr5TdsJsH5s7b25eDC2AmRMKSCU5FxnVVGg3L64vWL3iUZQhXhr8s",
  "key16": "nzBiGJY3Btd8xZVREBHR4rnKbkH7G4RFeLWzptkJunp9ACabZz4neLBbiRCWznhdruesqZXDnEdFrke6mDPfYTb",
  "key17": "213W4UJGvqaZEDpTd5JUp2WqZR95fTwEbVEwnEkfRAkukjxNnP2K1vMzsq9pv8RvwkkVPwSpPxDEK7SnTFEkhgnK",
  "key18": "2bivD9ygvTZ6yPVaW4EpZjHzDEd4WhAcw9Pts61D5JockDDtY25xF9aMFhowT6NTg8V7NXu7SMaKSy2UG2spzyJU",
  "key19": "4pYWZwwCbyGKG1ToePujNHkxacq27A62YYZzMU8W7GeVV68m7MnVERUadViCsaAKbvjeegXBixiwPcPeui16bSnp",
  "key20": "3qAJAW5MWyLm1zuFyCWXeBq3A1TDdFo9VDRe8VLu3EJbXaQHGSx1ZvDh74euEJvbHnut9FNviNf4Ke48dt7Su7PT",
  "key21": "4pDM52isHe1iib5RXiiD3DT7DQuLmUqVTQcDVXg8Dgd5nvDj1h8JaoaXffao2eNrAhQ4JzHA5ERUDgYt9UsHSgL3",
  "key22": "EZS9Ak8afDJy398ARzAV1XHmCww9D9ZpK3iawb2B2jv6ywBu5NNbstAKzoSB5XmePo3BhmxZPW1e32jBTrp3Nyo",
  "key23": "3ZZ2APXaQFep1YDiYu2M8mfn3isj5hqWKRbjyvRF5b9BKkfkfh6TWbADcY3ndytvmSoQpKu4navKCNP4nVdVYx8C",
  "key24": "27bYrTPcgjeShpbGovpMFPCbhdMaA6bAWmLwanihggJLB5MHZNNvEWLZXNZiuf5SQTkeA1jk2Lcs8TbYFYaRQSfY",
  "key25": "4VNVMehCGSxRAc1vmENADBPbiRoazELJnw3rGxxfBa3b1mt1SE4jecKpvYmn6Z2Taf8gZatS6kwLmeZH4Q2DYzh8",
  "key26": "4ZRFkPkmwXyLvwNFvTVFexFQnRpmwfDLAn7dZtnuAWmGt4LvVKDRe3dAurbyTcHDPSTv2bLTJkmU4WwrMeRfU6cw",
  "key27": "nZJcyVq4SCzQdegMrVZE2WYrXG3gzQeJPQ5zCUaYS4dpbUthj6j9f5eggvbXbZiqpAxgWbv3BVpXw1UnhApj4r3",
  "key28": "qTxVAcHNY921bdQN4V2j5mm5VBVuTJyDhmid8czQe9BwqVn9T1fV1qeo6amWtVYBWjJcvEqsETEdw37tp3jdmeP",
  "key29": "3oQigK25K8pqYj8ykDp2wKYYAhNxHc728pAv2pngnizMjA9LKP8rZtwSRhVo568tDi3Lisg7nHGKspgpq1H7upX4",
  "key30": "4yQcAyw2KhMxjkrkYdXCb6abkEB6h57kjAaQZ6kYBNjHWDvPmqd3Nv4L4jm2kAJemEttmHjQ1UW6mEXCRm4q4yjr",
  "key31": "24R2Z48CStH6grpFrbA7F6hPqQmcF8cGJggU3jUCjHuw4k6jzFNcDDJmuRFi7B3kur8w7wFQWZrBMeUznoWT3oVW",
  "key32": "51tfx11K9t5ZYQru2h2YncYAGyHiHydy7kHJokDAUwtUpfp67T1P6ExChrFQWb4xRkF5Q5k1UnHRTK9gs2S8RsRu",
  "key33": "5bnxSQeMvw6ZxdpXT2GmS4QmQ9WhfeCtsBuyiRk3LUuvDsnCMPF3VQjLoNXgQnLZbH7bv5y66kMGRfJFnf4sE2sA",
  "key34": "3qWnw4juqtZREBG6acTNKuPVemrxJL2fphQ8kWzPUJf8zPChAfeBcndCNUMu89tZiKwJMa8BKCiYDpGHQtoGH3A9",
  "key35": "5XDmw8T5fz8gRdzzE3eHhKbfZRiBmPwu6hNkj8Df8zgr4PgS8z58E9uWUEZenihb68k3V4iU7EB1g5bUa4MHGaE4",
  "key36": "4jKfuSH7yypXNJdejhjNtfnSQx7P8XFUmJ1iMhF71zUPmT9Cpfw9JSs6yKD6XCx1H758LztF5644mnsJFzAtn6H3",
  "key37": "8R4GxPZECBH1kqkmt8CvbMoMpAMRwZ8sEGMpR6nUv6Do5qSKRSS43AzMJUFuUTCTexYZAjvKbibPfbRrjcTugpb",
  "key38": "VBu68U6fdZxYCmRht2oAtMLgbJdCFUce7twv9xg2SV83cyLerJGUH9Wrw6MhwRwSAeN6Nrih6MTR2uggFTqtQ1h",
  "key39": "4JGNSyoTyCyPBfmMEUdYuaXTcwJYu6td65wGFUXe4TxDKfwQAHniUBF4jkh5c6DNBhQfr3JwmzgFJ1RMn2AswXed",
  "key40": "2bYjgeR3HAR8VSWTNVa2YUc9nioREG8wz3AMTipuGh4WDAAkcuUr3NcjppFZB38VCcV5DJi3TZZ5wECBZPkgEEAf",
  "key41": "4e1E4GHFAjbtq1J4rGQZVPG2bnvDytWHCUkQCDyUXgnujApD84L9GbG4F9MaiYfPftHL5Kqmr8VpujBo6LCLTLeW",
  "key42": "4ziQvroBvnBHxs7xt59DUkCByGiHBvTCgraZAsAVrp1d6121rEArb2Lw2QF8bKwM3w9Vf3iTRWBYgQ4xgLCxgnc2",
  "key43": "458gHZLwMrEfhVha1tafb5FkywTqxG4d8TNEfqi9JfiNmNtbe7Qb3VVmzfYnkrzBeLEvhqyZxMjFaNmcmA8rm7F",
  "key44": "48QZstvDdp6hJDaMvL4X1bET5auFcJULYzAeLPZ8G1Ep85qVtgXfsPeM421cyKtrS2bBeknKcEcvsaeRdAfjkqDG",
  "key45": "4RAg7wUNRV5HYZLdzSN4Ao7VsKqK8myqy6x1rLaP8XRSetFEAfJ2J7gF7Ua77HHAT8efB1XYRDsL6CbwZ37NgWGU",
  "key46": "47HR7i6FcExCQ7Nqyay5VeFZgFsB9G2buEHPAuJhnNDsoDdXbuG5r6RjzfgQqf3ZPZCLYijDrZNSmXxm5J6DteX1",
  "key47": "4kbzQwJVZkeXLnBV1DPaoU7qGGtT5S4iYwbKV4uY4iW6pTxnSyrwR4FSxN1xPxLMEXaKtHtZrocXr7RC79v6xwNW",
  "key48": "2V42Dca5dP9tbMWFh5oXgoP5R2amLZoqcwkcL9Wu62PpXVUL6orMYm6ykfXK6XcLFMmHDGZHeV53hKeBxZ6kMwjM",
  "key49": "5gnCasm3ttEWLdHyCTU6oPXdW7Uru67axEhPKTjc6dYPsM3LkY41eGjUid9ZrSsWa5tr2orjRd8aKG9FudJxFFXU"
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
