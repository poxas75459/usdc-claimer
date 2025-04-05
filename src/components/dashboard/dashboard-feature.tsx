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
    "64s2YtMYEznTAFjaKCscVqRs1wwR7NFZfyoreQrzhFFEMRQGZ9MGUoY3qwAnJrheGHALV3aUB4ypUd7BBaVDZo4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgeXNrxzqC9StVMamMQhc24p2ywKSSLKxf8YYcpdqJarB3nQa92wV6uFVJLAZes5GMcCvvdbVnCsnVh1DT8xBPu",
  "key1": "24dUEvPKvxqjaC67JA5fHtXxN2Y46WQozaNcehJ48AT8Yjif6rpupMmy9wU2ihLwgZ2m8CeuSUPZS4fxHkcwDvmy",
  "key2": "2eRyuWc1yfexhYCnX6NmuzBYo1JemcScYWfZvJu62USbDpn4pMq8Yqe61Ng7VeVbK3NpkNcAG7qKf2FmNpg1YKtg",
  "key3": "fNmHZtxogy6foN9PbpjDmrTuoKHthRKb3YreRQv92tUcZnVgQzvsWE8vZZMMFWt2QnMo5rKC14tmHmm5F68BbD3",
  "key4": "2KMt5HVetTeFhUnABSyggqRvqcKbg9DpyiEexyGZurnu6FmuSN4PLup4GL9pbEUfjPWWXPHk7dCyCEHEypKdqa74",
  "key5": "4ChsMPswz5dCAqB5PqLyGZpv7FNH2HQrYPvz7QaBLEXiP1mja3gWkXhYAF6HJUwitYXzXfzCxPbzABefhBVLrTG9",
  "key6": "3iamQ7UMUR1eAYXU2Nsir1hwYxZU17r9XT6LL8uiNzNJNrAjDziyMnRZZKxmUFw9q2aMEcXY5gRkRjbRTpyeGZdt",
  "key7": "4Xq5ErMCYEoetqeaY5H7JkrYaHAfzTfdsWsUWSUxF5RZoVwHo8F8Sgo4zE9ySbbiykoSeQuG3y7XqHBwQiDGmKhe",
  "key8": "5ndMb3hfjbaD7HVVhPGqSkwhbNnXu9CEFPcHj6poo6AW7AxgL5Vgjr1yXcJCtMN6jdFo21J33k23YMvhseYJziA9",
  "key9": "4v8Dhsp9kKmXevUCGoGCU7DLRwAMTdtaHzLuWBws9hQhgFpEGYCVPoira7KpB6oCtCd1aBXGKXLpaxC9am7yCz1X",
  "key10": "4GXLQHbFeGPmyNs86cunCnWrUKZSsJTAGrMgUApjYxpAZcBhgpReAApD5xDu1Pu9EvDxjsak4u4pXWUSg5fauvTC",
  "key11": "5AuZ8GXvRgmyHqVWFFXK2hBnSG2nHS9t9fpffAzKdkEoHovyJhUoLdfJEuqjX3DS5Pbzcx3i2dX3A3dHrxCY2AxQ",
  "key12": "3ZGPuwFtbRTdkmbTVDCNytp8Px9aNLqnJEj7fAjUJ2svKE3KLjksFaKyUyhrw2pexmdBNqhZhcJ2coLSRpmsuFSH",
  "key13": "2PMKzFgNQN8euVBzNwK3TxZVWmQWdSmgTu8mQNibp8iEEkEAspMHXzXxUQgFuo8yE2WEzW7m8SHgj3b39MRjbJiK",
  "key14": "2MHtgAGz15ichbTi3U3iaPsRutEjRocbHuARyUopLD4MTaV7dQYKpD5VqeFuEMUYdTisGiNCp4nKVh3rpfh5S3fR",
  "key15": "3epUXvmGj49qeKuRdz5XS1H9xRm2FatbQTDW7oJR2eX3xBgF4KXybaQCTerJB167UiAxwb91KLPG8x8YAxjhJBw4",
  "key16": "5Q6pLT4VRdPeFw4yyG2U6xGmeieF4VdzEbwZuMitq2XePf42sDK8PFTJtgCXWNZX3r6ijyNpRP29LZNt85syhHU7",
  "key17": "4PPJWQvbrC4yi9f5NJmAhUcKTaS5nDGUuMhF9UjFizJmtKPAeCHGUPMaScEiMpubfnG4sR1uNCL1RwLBxuRPWqqQ",
  "key18": "26Lxx25KECBYY5UeCw1EJGXdzkns5impkDgqrFVPXeDjA7mzrWRBquVRQFML3o3gsjcx84szotNmHxVyxrsiSWmk",
  "key19": "5Yw8549DQqstoC7wvsn444sVoUWvV48iWkHcBGmcKfhCFLfuwjhMSvDGPBDjjJcj5B5gWA1LZwU75WdT1HSMvKHN",
  "key20": "5eaiH5Ar27VQRm4fC2bQSCK4xGVh58URczfSKiNRNypAorxMKnGvrJLzfgvf7A9JkqmYhLDu6aUeFSM7u4sfqWBb",
  "key21": "4acXo4YwckqtEsbd5ccYoNykh1DdgjahxkX4JV4jH9ttRyVctU8RZ5Dr5tdhKFLv81s1ikWqqMf9jZJZzPCAJHDq",
  "key22": "43ft5RP5wA93DBabczKnesC17fv6gmi2sxR7aaQpXGGahSNUEnctHYM9gVU4p1QVDy7dGweZFvERmGAdtEg4JsMr",
  "key23": "5ScsgQCHYDxgQzyw9wt4hUSH1n616XSSyHVwPi9C3DnBPcCFnVKaTE5LvRwS1fw8ANWFLTBQbVpo8bGHqV5UEDW5",
  "key24": "3Td9PwJfTVy8HRkreupRgD9A3JKAgLzWMCVLvqszLWNJoKX4ARtQ8X4tBRRSii5BJYzsuJPKKFzw9KnJ7DEkiZR1",
  "key25": "21XLE7gh3N7CrQZJSqbp32SbVokzJZEgTnmfTAeyG7RzqPGvyx2ApgNkEnifSi7wHwTnniwNSspGWv7DJ3ZbfWTM",
  "key26": "4gTixzSpiYVuq3eXbBJRRAnGC3APb9UYFFqMqZma8NHEVn5j1M9MDmQSCzT4z5onXz3JYHrJRVMsLEW65iicyKJa",
  "key27": "YLcR4YmPqUsatmubHFf23ZxgR6CWghEijsCTe1fpPVF9GY8Nuq4piEi8fq2fUqdG5ydckWvwqS8K5rqCBAd1v3A",
  "key28": "ENsbn3WjFmjE3anNUYaUywFiT2CabJa2mBt11nm9WwfviCe6nr22Ssrt8nLGxe1W1xrARecG6U6NzPWRD6Kj4HG",
  "key29": "4cPxQr8YdfxPhWodxmaUWbuTKkah9mmMv3HJs8pK4t48jfXq1CazT3h5DPJ5LA5YHDWDWKs6iueSqJwPgUXDUmcg",
  "key30": "48zjsa8pyHeWrhECiqBqsbX2WmzWg47LGkmwvtFvatzAVGGb9Lyum2REuR84m7oXSHwoYqviNY43u8vifjV3xcMm",
  "key31": "5k5H5rugwDbfqHGu4yaHEEmAd47YboYWocmz7TUiEqVNWfWQ6nL432Twemz7ACpiQmb5JbYLbmJESFuxCXmrp8s2",
  "key32": "HW2KHZfAMVPmyiZT9kSihyQxU1wMrhhTMkS3jtL5QcTZUXNvby8Qj2P8XSS9B9Gb3YZ2i5VAzRQcJd5hGpEAKhw",
  "key33": "T23zdFEBpzp688oPyfWXwbvkeack3fLDm5aM7WxpzBkmfgzeonFeYiEAxGSX1t7FBPj2LbpM5UftpzQJrnHGDct",
  "key34": "5QQTGvzQ6RJCha5JFT44dW5dpkXd3mJAyMCGJAnbeCGhbPAHC36engdukmZyybmPCoT9Eyb8VYBXcuj6KiCKLSNZ",
  "key35": "2mtLSmXDaZHrBDi8qw9PFPKC8buzAo6pvw169JDrXiuToYp21JcK4aE4eZiwZgEt5QCvS7p2YziLuC2R6uZzCbTb",
  "key36": "3X1x5jGWcNrx2wZAbrUAFKrZcuuQHCM2zzk54z2bBkyAW4MMY2YfdKYzzMuRFwnmpVWoR7EBWZsXw9GG8iNfmHab",
  "key37": "2pFQ4SWZDDbUZYiYwJ2YmNoFHh3BfPPKniyrN74AN8JXHRigWwRFbvWSqSqfo9adFDWpTFECY3HLQec1zHyVPkgT",
  "key38": "4z8siXP7P3oBKUFtP3xMDQ3iNGDQK7mMeQifdiqjrxGHiUTVk4ECDJRqCEwznWJYf4g84SdEwqmDr5GKXgr7ysgz",
  "key39": "gsWmeh7cjYWEhgT5BSPQvkt2f5zPPYhaUaiqnyxKzj6VPZwHMz77VEosQoJhuXForzGUX7d7B4bzdQS6FWXxW2g",
  "key40": "2E1yB8RFBnhHaE8w4YSgrtRPTkspHDFELcPCXBTYXxkYDr68p2ojGVC8cXGgRvcLa2rkszCSN7ixe2Q7FbQAG4FK",
  "key41": "4BYNMWfJnFGDeB2Ta2gSXHcs8VxzkTbK8FcgTNRVJ7h2SuixXdoJhPeV1X1q731Jgcyfd2Yk14qfMwoR1JVqHW9W",
  "key42": "GfE3Ux5T5zKr1NQHF89TUEoRLwrmfynqUf4hLHzN5pEuoKRDyBQ457j8moBsoCSixTbp5vd3mDQbFkpdSJaXGhS",
  "key43": "2x4mwZVrVbawFcuSQmY1swMHENRLGBw3NbbFiw2vN1xrLN6fuwwZr7ibzERzwzUioQkiCzR2rmqp423vL2ZN6KsM",
  "key44": "673g8xAeyoYwFK1i693XZM1HT66eMGQLhZTfgNbcAmsdeKE8aSJraJUPULMkfhjx8ovcaJMiDWsQNsGkW6ZpWqg9",
  "key45": "2WivnAQaKqYUJEmXq3htM9KqSsp4Mko5H4XGoePpVteo5tdjvthMgDRGhCitUgip7ZnsErZFyQFMJQ3wCycdK5z1",
  "key46": "2cUT21mgKScYGfewYjn6EGMLSvsHXkCyehHbeCbgKUDpvDnPJsHM5WH7EQTubVW1L7jV2hzSSRyfaFAdHtBKLygX",
  "key47": "4Uvj5VMBAa8BpAhcVj9Vdi3ZcUNaAKtJsbSQp5X41mk7BXJqWaKHjPCwtTkSJiSLvNYb5rSWEx6Pp1qrqio8MQ19"
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
