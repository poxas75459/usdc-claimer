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
    "3d2EnLGHcYzmk4Xh4WeLgDRZGU16xSQhQYfWVzttjW256ifCqapqkdaid6ph9CCPEp3iUkJ5KBKtYfBuQN4W6oqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kAqjAbWptSE2bZAgc6QhHXVKBf8FNLvvDFfRRRuEgiiXuVDWM54q4h4MUVwjgHf9KyXmcRVFc2fqAVAFE99RVY",
  "key1": "4TuvWXe8PZtWENHWs8hDBUsoLkt26JjmAkitPVKG4aygGcqj21fxT8ZK8darwqM645zDYDJTjopUb8fFGsKz4qHK",
  "key2": "eSC9ctAd6hwSBuWH83EqWfBqG39AKAquQqd5n4AhXYQn82jgChAY7QLbvCo448SdvEVC5DXa7QP814VTmkd7wpW",
  "key3": "48knxSLHxTP27ir5G1EopZz5iFsPtFGjf7xnHYF6cEKDRKMcu1Kj3Xa7mTxBREvzYYY359EdQJkvsrb3r8xWimrg",
  "key4": "2tdTjHhZG6hWMM5waHzrPKtbTW2NuX6stbAztzSQ4BxCLv6FCgdjcJG1pWKGCd8Qy8k9TAmi57DtXNdXWJPcckD4",
  "key5": "2WtLB34B2QPLSob3HEs6kMHeWHsvn3zJB2piqd92qwmJovDmY1ZCzbEXRwjNLkWSsLRrk9VaA1hmuQa367coxEd7",
  "key6": "4RATkMRXiDgbvjESTsKiBTeZ1zuLBU5pqqcZ51BFTD5vREJnECqPgzZLh1WaSHWhALCLcXgYdF7MJUYtxAbcBaj",
  "key7": "4GnFv3XbsFMQVdKc4GFrHXSfFvMAdH7ofJKBjkKb3eH2AXTEA5CkWGzeLGAYVijYjq6FNNvdf2N1AQRt6niMY35J",
  "key8": "JAYYqQ2H1aAUmTtmE7APTxcZuo16PkqRfY1YbR4wEDgiDSjXcfReZckSMjhgQhwU3MHTZx1SUZbE3kfRvjQnB2o",
  "key9": "3LYisDFBdS3oAnxjQSDBXZZc4BTXN4LxijLw2D6abtiTGcdW11T7wn4ddnKkFLVJmQRvpWceX1N4kGajCB3a2KbZ",
  "key10": "k2ATLKzGjR6WsByXiUQ7xh1Nt789CugNoBEksAZKvq5rbyKxTKEvYY7GzLXe2wfge659heWA9VLHM6AhMQuLMr8",
  "key11": "36CQk9dXNDpYgwL1BLGj4aoZV95EoCpyngQ8QZyYwge4RXd3NEYA97qxKVxjLs2LtcB3UCEfvSrptXkfzqJENwRW",
  "key12": "2MgUwJS3WATbVyQGKQBXa3qf5CNhvdbzgqym4nVySfunG7AkKJjiyMrgXiLqTY9vWXTvQgDiX5H4shEUfuDHNM1m",
  "key13": "3UcTcUWzk61ZxtvZYMNoicZHg1UNSLVGvUEpTBTy3mi3Svx9n4DMsgZYk2LBvGWDUuZhBWpQofEgBKR62AHCBqD6",
  "key14": "5U1epf4oSvXPxD1hrTpk8g1vj3pTTp3kBKYvhfD6FEGm3oDGpdWtwf8HCUucZXSj5TRix95kU76wSFVcp1Batjeu",
  "key15": "3A8UNPwRLBSrerq3fCCVG8SyqnRFQwZHecP5n4ebrMf9pGqPqbvEjQJDRVH8z2xm9bZMeymoC4C556QeM5boRacU",
  "key16": "5frnrwtLzAMADsNfXs6Mjw6uSWACEd4jP5wu4KSEJNqKEAW96yn9cocYoKNqf1xERUD6mWGmgRo2YDKSToWiUvZ8",
  "key17": "4zbCvC6vKmgSwt4i8zrcS87jVgSdgoTQmx2isAiA2BEBDpPg41ScBybdYkwpA6uNRWpTWRcEbxRJQfsVhiAhCSUZ",
  "key18": "528CRzU7ESon6MK21pNoNigiDHyJD19R5j2j8k3S7QqS4Mj52v6Qhsj2GM4RWYcytjpQdge16vpc7CTSQtRVyGkD",
  "key19": "47SkZdFQ5eN6CCUZRoT3UDi6U7SqiSBjkAP3kRqXbPYFHrpK21CRoL8tMu6LkpoorkqgwagbBvXpyVwhwwQ8xkSc",
  "key20": "3bRUcRQk4xJuYQNe3DQ5QCbMFkeSkF1yLgnpSKyUtLafwYntCMLGTUb4TgqkFTdgfma1awH3EBTi87KyTQurTN3T",
  "key21": "5FBGJC7sAEcsPMoSHtkjMJqqZbJcTJNEyaVxa6SNd1u6KvHi838Qrgm9o1vofquWWBDKzWfN9rvE4YdgAx4ai2b8",
  "key22": "5fVRs1vcvbcrYhj565Svz69m3qoGmkRS95U5ALWZUZv3EJFWGg7q84k3ubWQPuYhya4SAp856nLMZp5yPgAFBBCC",
  "key23": "hExfSTtv6hU9HAJZnnkZGxSETXvqeH6c7PLXiW8wEsTRnmTzpKfwkT28iEec4UMds5WdgAitBygYiSpNTg2YTLe",
  "key24": "3aAa7QCqH7MLkszqDqDPNGTr9jiL3VsxnUVsf1iwuFNutrMS3zWToAnKWaxaWAbzdvjvPX2nVhaCiGFaDMNe7dSD",
  "key25": "8dsffBGCmGSchtV3YygFLeY2feyVGckvwJKJHhiD5QaGUJoT4pGen6AjEzzavJp8LQxFU8Z3SqeSxyLLD9FvDcR",
  "key26": "4abjJ27DUMw5U8WbmjRb3TgdnkML1PBfmt6GK1ci5PH1vMxTAthN1TYFGgCJXpnHUatv8Vapi3JrfUbAwcnkMxSy",
  "key27": "4f4UMLeYy6NAQSL8SWWRFN7vSWtRWkNvuJQsPAZjqudCtgwdTSivLKtNJsQhkWCwPg9GQWEQCd5cQKPqKHinPcRL",
  "key28": "F7PjUVzLuYKDHhKMnRAwV2858zLkJ6Y46TxxJw9uAJ8r4hy7SyWrnggRbwMyxN8ZF28mSSFNATCMvUy9jNPED85",
  "key29": "25xjUZY6aWCUxLgqSizcp8q1hHTsuy81osMKpr6V91Fv3T3jMqCFYHqhVn3xVBiDEhGoSJKfNbMBNiwEPvzJA4Uj",
  "key30": "36xZcf9aTDkyLgTr2aXeP4cVTisfGcBX6QBusGcdee5TFc2Py6paVtU7ABStkoQW8AJzi3pr4kbSLME6CNHx8Ho8",
  "key31": "3YZUYnzrZvfjaxHsH6zNSRbhK2B8XwnXvZ8vn6Qi8MkqWE5e32nrHagNnLWbvoUtq7GfYa3zs7fyTHmPyMcnHU7G",
  "key32": "4KvQPrKDkwstbZc6piQpHmfCujDXrFw9Rq5zY3LMzZmCsKo2iCWFn1n2y7J5EknUq6oBtjH5Z6Jx64MExPGUj6XQ",
  "key33": "3NCHAuusRPxk4ipgQphW6uBKgySKzvwfar6h3vS6Ftqz3h9qU4FR94zWUs4AYeHZxoSLcXJaSs2By8BdRoq7f12V",
  "key34": "2gjcqeBZ8L4igwSDcmw2ggH7943T7ipQedvtgh4ifqSedtJw8mwQ9hsarKKXDjFzSW1FqfLKm7VT6ibZ6ttRtX37",
  "key35": "5AzrPU3qaUsqqmo6jScmGe4Wksiy4xVT7CCUdoy6pcWmjknS3qQhf9dzVC6cHiuVYg2wm8jMYLLPSxhgFC69kZ9P",
  "key36": "5MfcwstViAExNd3uEtgmJEMGMtA4mJuMJKdNyDJwnF5iQeVy2USCTk8Wncppn4mQ31jDX6FqVFv3sZnCMsbi8NYn",
  "key37": "2oNpiy9SwpCeoPm1phyTp6jBjJuFqQRkgNGM2U6ovL6pc5A9ZpCqdEP19r963ekHntESanSSr3EaetXreYg4DmSE",
  "key38": "5aJs21oz8trpXGBz6dCpx5tG5Pazs8J32vHqfPCyokuQCDUTegFj5sc2doRmX6QzuKHT76mE3sSieG2HLr2XeaFP",
  "key39": "4rKDpCoaBjnKLi4tzBQoLTb81LeGak5hRWmvkLWyGzDNCRyAJmyMxrNMLPK8nAqpGyJd2jdtNyWcs2Rp2L5EeSEh",
  "key40": "4thacc1MoqwbSG7q4nEXkyiy5WPnZjaJHF9WmD3pqiMEhQMDMDmtctYppVTnQZc6yiR7nayPPyBQ3c8fPW3UXrhE"
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
