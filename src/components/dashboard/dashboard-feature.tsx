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
    "5t38PkdsxUiJeXq7ac8TNrEr79BqvHTFfFbVeFDGpSMcUvsXidivNPjDRCmaP32pktnZnJCiBDkakBoXvQ7FgCr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wuCW6ajWLoESwh9kqzhd9EZxxVNEFfvAvZhbb6ADdbjDWVoCgpbKT1EMkoNLwrRqbyXVNZAwsABaHBL8vwKL5J8",
  "key1": "4ta7mwek9fivEEiBzB8zKQq2mWTc86bs4JasKJuv9YyoDVd7BA48ECtBy3TC4JPEXij7atUtE9QAAczc82KuGCoT",
  "key2": "3KLrnXRBHdHMFBMpTBfxgPJZjSSK5K3K2dRaofjSscWwejGsqUDWVXUPnjXEW7rbxENmjXMdhuzRFHs6S9TZPPu7",
  "key3": "2zW1PPZb2NfCYwnZKJsdM2SiA4zxMzrTLGChDFUnNa1zWd9RkFJJYV1z4rbJEjhCEcTniz8Y1j64p6so6ZNW9woB",
  "key4": "3DJn4D7anDV8DUgCJtW8QzKb9EDaytQqD53nv3FeWchjCUdxn7bQhmm3DAcDXus8PNkrZTRVjo44jBcuvUvf94f8",
  "key5": "3b51FWuRQ8VLZpMTfmzMS1skoyZ95aNSrA4Bq7G944ZTaivEH2T4ueDEhPQUdzZXVRHHsSn5cQYF1wVPeNvxtAhT",
  "key6": "2uCk7eiqTzRs4k4BmdaXpxnVbKsSVE8MJ2xEDh4hZ4xnV37tTLCiPspeu5aVtqHHxU7hZGXigqiak7uCEJeaoQMu",
  "key7": "vpKpenD2b6Mcg48qTy2VYBuEcdN86Cm66t8s2tE1NccHLi1azTf4qXvWNC4wf3FQsJAAGUBvsuJoZusWYpwospq",
  "key8": "4sRRJYdQn2vZEJ1VmsKMFbhgFaJYorBKRsViGdYqSstqDh44w6KXJ1vDoNL1GK4hcUxvHhPNQbUaDrALR5joLGqc",
  "key9": "3FE4CjzwiNmBMH4JWKFhyVxYtEStN7hDgR6kBSgmxPfT4TyW1vKdHzzNPNr55UDAtLKQWXVReJchf15DpjX4Dxow",
  "key10": "3NiGtChECiAXN31jFvUutZrpDDhMuYAhkiqYKzRruHa3XTyPNstsSd2GLAHjnQjxwEh3PHseQiVyUqaBWhP2q7Ts",
  "key11": "3dbTAzLw5an7b7Yao6X4RyHM1Ehs5kqNZ55bnQ9A9h2UuLt7HSxVadC9iZtn2WdHo1Fbi1EX3v72kAhaksazgnny",
  "key12": "66D7m3i5AyY2Fdxd6wTqn8a4P889jphDUrqesiRbv3inmhUUohxyYyC9Qmf5We7NmVrFuzo6mC31C7oZLzV6safu",
  "key13": "3kgLgoi5uhoit58HdwaLqJrGHM7Q6taoAKJ5CDSzRZNoLzQLaSUkT3XfQZW3Ni3PPkPjeLXAQnRym9XPtGVw6zLA",
  "key14": "4jnWHxvKgZBUQLC4EvAUWwcpCDgs9rTmpov4BRWMnmKa2VFxsNVQkp7kVwLUb5WqPsi9VmFQ6EFmi2CR99nKMxmp",
  "key15": "SS7ScwwB82wwb3MGV37jZdfqJe4EEjAdg31ZXhxXWEQZF3m1bTVS6m7HZ1nV8yjs8oyBZ7BDrK7brpJ2FgyCjdd",
  "key16": "2MvbgKHxyc44U1355NTRVWY8SXxijSjvUyJrCawwgJYEisxRASvgn3KWX4cDj4V5v3g5vvk73Z1WoUMQSjx1Q6Cp",
  "key17": "4bSwQTmguiEztBuUEpEnSmRoqqDYUomsv9QRXAPrdHbvtFhfRadPGmeoSe4qeFsbx3JWAGitCJRKGhAUN3Qk6eJa",
  "key18": "T9tkcBJmES4XtvgBngYqGMqHkfoZUWmCBSiTfKXx6E3pLJbUMtp6N8wfdkZsFTrDvx3tAKsuVKya2kXGin1KBHw",
  "key19": "44i9UsWEdwBcR8P5nnnzPqWpEuBiFvQzbqJTToa6pnHYgDnTY5ozQyHjPfAVS7RFijZGbk8WXtHy3E4HqcHEVogr",
  "key20": "E4xxSFeQiP5V2YDNkCKZ4FBm5qDJmDQpBbwb68H3YbK1peMavoBG6aubATow8BN6svUknQFd44nxDDsrj3f6viL",
  "key21": "zaFyatzTPXRMiRaoAqRNFS8ZnSQkUQCrCi1ArrEn26TvJb2tmesftxqkaNbnEQZhqHQok42zFWLGAB5j9pfLG7M",
  "key22": "5v6W9i4iAZHB55sgBqMaARVARvyJRmR2HcYw9fWcJUs3CJKzhYAzLdUvSCWhWxKcwCf6b4DSBUebjScb1AcSKYaT",
  "key23": "2jmxxUpUMAb7DqStSBcUG9LDoN77fyZED7YPAhTmAqnLDHLZWMyV9nrMmcg3rTE3uAEQ4NWiW3Zmnqe8hJk3yduf",
  "key24": "2wXckCTynMnPBFosZBKZYfbqdnzTxxaRRhtMwpRknTCVuU9pXT51uXyvVi75WMAfCYo8kHtgLC3XRtEPhPFu7mdQ",
  "key25": "2fvFyin9rw9d881GSSeJegVZw94z9Jk4E4rZuKq2UWPaDH9dMmt3tHhPUkofdQdT8bm5BDh1V25UieAoiSwxwmes",
  "key26": "3qpK4ZDjf26Phv1v1o6VSX2FooZu3kSJTWuXZkfqDcMPDDepRgLum8bPR5xcrNCZeZkkcFHGnBbT7oJZVS1qSLX8",
  "key27": "23rEBDYzfm13y7XXu1PgsB48VCzb7ubDUSwfcTWhCJPXpoDM5PFEjYVkL5ZvLnQqTXbUy7LSn9cTz6AM9VT89asw",
  "key28": "2dikmEopQpwHxnjskC44bYWbYZBPmLr457NbdgbssH7uqTR9bDSwkpGzuu9s6Z4m7KJ6Pf8e7GGoz5YFGYD7fTtx",
  "key29": "2Rnnk8LLLpp4yCGmJBqoYA2V3GDTq1qYGt1CYY5gSoh5PhmS9EWnwkrWXZbuFJUPwSfUCykN9bsJmr7SoJfusVFa",
  "key30": "3caX5i77zREcbTUMZaom9CvkbqdEFbpQShmJFu8gCBgGaumjr8bM7o15eVnfWSoCYyJw6G4ovmwv5e7rSCZGYmCh",
  "key31": "5eAXr6DinRSfTLG86oPq3eAKWmFWkhKGbCthh6SB7zXdrnywauFE7CnvDfAfAX6toy6WrLkoQrnDAb6sW2RSEjma",
  "key32": "54iTWKPX1yzHXWDZEe2qErZCnfX72ybCce3TkKZHjw6ZK4Xc8HYxBQ7bY9T8z7pjG1S3T4XLvEbcceiBdqQa3sRc",
  "key33": "3VtoYTdXTAH5jUcXXqhh1HjH1g5obM9TnrCSdtciG4JXz3abkH4ZyrAD2urWvJnXWm8PPQWGVb1yjSwF624BN8wE",
  "key34": "tH37W3soBZnxg2n16HDFSasRGNPjmNW3rkPrLnkQEg4bi2nnzo5cP7sbzWh2tuR5rb2PyXbAXZPHNYuDnozVtEn",
  "key35": "2QRgGBKEVXx4km6WsFM2Hu4PMFo9Hu2X7puyqR858czJbsqbQPgox72FYHwec1dLA9k2rGZZvQijjLvGowMkme5x",
  "key36": "5v37mYo1hSZFxNEYCAMmYUAhLhngkwyrcctWcfAjJ7cTxZTxhPzkX2m3keL3Ue8YefrdYV83xWReAzJNt34LddPc",
  "key37": "2rKTJguHTDnz2sG6Z92K2NUdi8RKMZWM2LsCwfH2EdiVniD2w4gDhUtVz7DRLjiXZjTJ7zHLbTKE4GACnZQJ8WbH",
  "key38": "3nKJG25gczAKRh9FNrGvKBpdur6K5BdvHg3LtuWZE85z2KVttv6aVkNTzgxQqs2QT14w3KtEB9xoCSr8JBcjLjjZ",
  "key39": "sp7KrA18HqPqZzvWu5zELXu2wh7sva1sbjxSXuZdwzFtHQhnTYnMJDRQSjextmwTLWxPgdx7GgaQMbzCVV2MDKG"
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
