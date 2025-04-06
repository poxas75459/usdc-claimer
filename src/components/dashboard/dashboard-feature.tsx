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
    "4RfCTfjLHciFdiqz6knMkmjsN89ZnmX9A17XGj8nzxv5JxVmfFFb7cCRrwiqtpCt9P7uHAwbACbFrnLxASYZmYV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYjc51X4nazi6dotTX4GPS5pZqqtWCNWxRPRADsTxCFwGfvQZMP3X72XAfMt2kVuuaw4NzftUMXFbcT46sxwTtC",
  "key1": "5E2NFouuMqfGGX9jXvenEEj922GtbkfnYAhSsofGFouaFqmdaUW82mG2GfciKKMEFxWTGpiKDJwJHo71NdWfojYF",
  "key2": "3aLM7Uau9772GtUtCkDDjWRAPWsPH1QhZcxVtrnqRwtTP61TdsE9NmXUrB3toJXUaWhDhrAtYvSSRwei2bG8dQqs",
  "key3": "38BBfYgqJdRMx2pwNZt2wA6L55K3vTLiXbFBceUYcKNkwaaepFKKrKgtG4FSoBwok7xc2yPmzhCKcLU9zTrpQVVX",
  "key4": "3b4rK4rmZJaQxjfwkdKqC59cXVEnrJ7LR8v5KbTkwA3mfQbFSsp6CHaAqkQZy9kNnhjKjwPtxCsBgCm5gnsgzmkW",
  "key5": "2vJjar7BPZD1DtgSRxWDJtim412d1K7MCEkT3rCR5bpQhYeEjSXN5gZfGoeS61ZQNrN5ZFAEKX3MM8H3FsbuHyCm",
  "key6": "5rLsXRdctaNxPLNa6uZEpPbLBxM7R95V86dNW6V7i6sQUpJC6WtXM6hWr11GekhUtJNtBqCJVuaFawodGudbWDKS",
  "key7": "g7WcnEHf3Ba793J46EdC4rE3UybRAK3qfrvWhFUTDQNpNBi2WdjiKFeV6YQ3LMJzL9wjqWcWFtMKtEQN42WiRtZ",
  "key8": "67ZDQpRC9hoVhSkkQwqpBSEC2NATLHGAyxWr7ZwmDnvHfUJb75zP1ApBruGjSraCfNndqwAQKXheu4sqAiczpjhF",
  "key9": "5a948Ccsg9v3DYaxNuGUzcjT685LzF3UAyGPr6qcv8iDE76yLjEELTgSQC4WzHTwxHCGudABjxxBrHaQ6fBWWeja",
  "key10": "4iMr65wBQemgmq7DB5PAwWYUs7ELUqVE2Q6NyBVgo9Vum9EgGv2rTZKzjSk8CU65yFWpTtxR1B77zQ68P64Zkd1y",
  "key11": "2QABh6dSpeZBjFNgYFJvTqrgNQmrfR262NPioHTXrh1hSpGEVaretbJ3LVygxorL31wkZ8EJY6dmV4qMH2JH4Q5h",
  "key12": "YrrZK6vkCXnV85Ewmubu8e1bpqMo6DLMPY5DEi1s4PK2oixqMKPRkgqdA88nrgw27h8sh1nRXccma1tp4ityTHf",
  "key13": "2JGwrpnpBtC2FAzUWkXwc4ciwXgH7fvmYaZH9e4UuKfDAsHvumid5gds9pprJriQueHXVQN82aReU2Rs17G2Ew22",
  "key14": "4RnbQtJjpks8bxYn6VQr8NffxFRtPmWpvzZ6PVp65RtwWEre5mqbLZrcoyLA1xyfvhtJ54XR9N2anVnuwcvGefnv",
  "key15": "5EsJwANdikURhR5d2r7aaQBFzCw1k7WgdhkvHuLsdx294hUY53mdF2pN11x4bcBNdvhBmtKPWiX5MZvFm29fy1mP",
  "key16": "2xgrwk6DhazTgavAWpsgGidPyhtBpyAHTC5pRF77TzA4kHgJtr9sfZWZ2YWVN858j6y6dmGkWDaxApDZgSvt7M6w",
  "key17": "5zvL9meAQASZKF8F7GKDWy7AHJLyASBds7Ji58jeeu7aREcVzHt7819ekWbPre1CgoLEhVq2tt8zfnDYgdmAE7Y8",
  "key18": "2G8NarJVXuuJgodmBqfdnmTZhjQLtdVggM1DdwpJh4yk9LLHTJp4aFpNgNT3sAqJqsYqoQqCMqk1xP8G5hUs3pQw",
  "key19": "4FFVaq378S9dSqwxk71f3pxqLv1aceEe2GDqQ8Ai81DPhRjRV7qp4LMBNxxnWS3XkJ9dyghGp7ZJX58F8QnzMhL1",
  "key20": "4xAerSrGSPoHPqYMJVkNZAobN6hzoVaq3jn8HgURbf8uPzkyRHgGoipmDrWW5XtrGU4Ke4JEjM9ddvHhYWXoKcTW",
  "key21": "2CSbYQqPBC1FSxERQHyEG8Yzhe17WT3Npzn7k8tfBZXvtj7v7CDp7GnUeATnTWrpRSaEmrmCtmnweZ5s3kFd62dw",
  "key22": "2bUKoygzxma335LVR18cqvprqhhGBmhmpmM8iwAmPJSbD2vHzXnRVXmHAZeNzaegS5yxG9YdcAV6DUb7Akojgjg6",
  "key23": "5pUXsjdQutJZjgXAu2qiYuSySbkjrFf5WN171bu636dZV7fKZci4ZSetU3a8CWTtgyb9oThsJ41b4NaDnmmbhFcr",
  "key24": "p5PmXEvhFD7W79ujFrbUgsZYH1C5iZxb8FCW49zwu1bmbRR7o1nRxRmaSrwfFCZzxBptcQRsdjb4MhRNMy4AzWo",
  "key25": "eGmuVdAVesr8uHSJs2nA2xfoUyPcXYD9zDgfhUHrVyPQeudhTh6acVmdhSdon627FAJQP4v1MzQnHEA8ggHDpa2",
  "key26": "4gNZ2UGeUugZLHow9RiwEmUxvZWirRhqNJ4bAvde2PWtUsmB9uy9eTVdjwfzJE7QPu9GRxdfhdGqVphhC14NHbRf",
  "key27": "4x6BNU5MxyEr2XcfrVonWVE33foYZsActMaQJ83sM8E3fdo52MHtqAcumQMo8fegrySia2aSAAnM8NGqtLc3UeRY",
  "key28": "dq1LMYjGyF5VzsNb1mNKzMeP3UkWMP6sk2s2WGQDsuFrCcnTG2Pxs2NFQDqxuBu5LsJxdU3YLvCCFQcsTy3pfbp",
  "key29": "4czBFKZEFnyiK3WqKpXfr1pJbrj8VJDC626VcwYjFVDtXnvii2vYR2Mbv176Joq7iKfgbb5SdD76NB5z91sUDXqA",
  "key30": "5GeSdMP3T4DCNZA8oGLjrBvXWRmx6fHX2rqg9iBLhygpYuzSM9pdfEucE3TczxfbFoTs4iCzY3ccDXyNvgGKLMqB",
  "key31": "2oHCXQNKFrQ5EFfDFVy85nStsgPoyYosT1hjUtJWgFXECarzVWw6K4JpbuCU6NWKuaLLV61CFaUs6ep49UuKqJ5E",
  "key32": "5ydvjBVaxBcfn1T5nCq7F3nJeDTscx2G66EMiQgHVW9ktoFc59S8micFd9ebLJvXySjtUW8pTBMnPH4AFZULcRkQ",
  "key33": "5SL4WbEMVDM9GFu5T1Viazvp53Rb4ByiJqKGNPj3SZffvkt4UMXdSYJt2FeHX7NLQ8U63vyyGway8Jpgeuw6Au7P",
  "key34": "sLWZabi9ap3NXTJJFnrHJr2cFJ6t2rNYNKAGZGLJrA1UpUEow3U7yaj4RArhdedgkMQamh8XshLP7WA5Lw54TeN",
  "key35": "3jWz2jnfJu7zUUKLrhXzcHhea4gQ6NZ6PKCkX3xQ5JzQx8q2SxQ5j5CcEUVNZ8vANbsbqEi7jJ9KFtWFBEdctXBx",
  "key36": "5QFyCyLaD6AatEnF9KGwk6xpiskBZ6ahLo6fKLXbg9ohpGQ9rPCVFvYim3uhAwRXFuJETdXQ6SUXd5nSjFUvSWVB",
  "key37": "58gUDKnvqw8TSptJTFZoDhH8d5DFjrL3gV5NC7o3hZTQrRGhwz9th6oNMctKoPmBZ1bFPJhLopkabedjbGWv5xwv",
  "key38": "43uFfgXDN3q1VdXPbMiBUkbESRnHn5L6dRLXCJWswTrA3tErKeeZ7Nwxw2VShXmxkja4dQBGjtotZTWaSh726BY3",
  "key39": "2vVyikiEodBj8gBAq2egLpcUZ9fs5u7kVTAB7CGxNZwrxdPWP6is3bWDKSEqa4hkASDXpzNVw4NxYsH6oNKsSGVR",
  "key40": "3RKzvVaW5YH6Px2THDtqQse7xU5cZbxdGU5B3xdS7CX2seQCjeBq4ApDwA5ZD1YQG3eqDrkuxwC6bP2TLqXrNwhu",
  "key41": "5eiBiaTjjoALq75B61ZnVxYGKScGyE2TWpVLp3xhnB6Cxc3Hpp7jhXX6dTaiaNZUHWuPbpxQnWjN7F9aaWtiB7JH",
  "key42": "3aHGoAry6Qu1axcRV92zeBwzwBBuFnBHaXoLhdwTxYvcfZLcDaz7aKvQMkKM3Qzwd4vqLVCrJnZJnygdzYGKJiry",
  "key43": "4DcMDLdAeo7sfHFnqJ8fyNBgZdBF7bF7csadKnM92NjYm4AEegi4yfzxm9Rpz9rXNd7XoXT3hKtoyNoG5XL9MVZ3"
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
