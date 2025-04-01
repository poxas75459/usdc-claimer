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
    "QRoSrb7avwrZnRKWkABE27wZbrrrtLqtt9XfZkSXe1qQRk7iCUUacbxjvqABUsMT7Y5GCuHcUdQoGti3QBBHD6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkQ2yHtigC42pfq3ZfgM4LcbNHN6fuJTadkFqEuAnEuifGqcqUUdUZjvxnm6xJo3e5e6rTjwacHHLioWwiu3UYG",
  "key1": "2c4ukBrtBoJm92GSWxdzRbXzqc7QaNmyM3EAw8fBrTvoU3X5KF1VyfwDK9WrfXsDwUn3SgDmbyeMDgr3JGyQUf5J",
  "key2": "521uSz5YRrXbpAL5NnSqQdBTx8U22U6rxPxm88Q1qCmX9qS5cDP2jzuvotUyJh6JVMChvnvPMo3uSXaWxyU2ooLK",
  "key3": "4Mokb8uVfPmt4du6tQKMdtaZBPX2yj6gokgfMvAjNcjyFN1TjyeWPvFbXjgLaqwFMPFKad2d7Tn6AZGLCArPdXuj",
  "key4": "4AL8tX6apjSjpwfn7ZnpMEYDC57KZq9VMgxiKxUeoCCJUn1JZ9r9qYwkoSUz7hj4fMj3UfWmsmkXXcFUjbYPShVX",
  "key5": "32aFBLPAaxn5TPqd5eSADpzVfu56pG5p6uv1WYnjK4PCfezPnrrL66xuEnNqpTyWhqvahBhzsztUkphX6ereSxvQ",
  "key6": "3EErMS9wB64yanLdE4aHMLdBLXPGvbwiBSb42T8Mn696eGtCZJgv5EmcuPGgaZTHsXEyAsiWJC99pHQBHBTYE7a8",
  "key7": "j9P7dSKPRLvoEC7SS5A4fhS8Y84qTow2uXKf2hcnwozwkpQJQRvVZLyEcqJRrxfh32Bk9tzNHJo6NiptVC6UdCJ",
  "key8": "4DyFKkhLmMRXFq1mFbgMiewkyPJV6rUPPtoJ4uLLRZ2xP99eJc2zxYwVh71BdkoYFej1AVthw5tCXkud3cj2NTaa",
  "key9": "2tx3u9T7RTp4YskMtgc3J1oDj125FcgZEJybu21ioD3bbx3L4ZqxeGQkZcWf4qjoomr7TYFnomj1P4AhSLQBQxsE",
  "key10": "kvHJFtbdBXUZeqiUJaTis3PLtdVK4g1q5xiSFuWepii5Wiyg8gZCgexc2v8bM9EnyGuhRPemLieoctqdgzcM15p",
  "key11": "3rHcjhRDMNnpuUk7xh4TFpPTwXG8WsQfxZ4SSqHYirWkUUcVfscc8cgaVNg1W1cfhurfHV1MWeUX8TaGPQ2vX2LU",
  "key12": "4sw73opMVfUe9BtBiVetSEswBERwZMUvS8674bn77XzuSmcYFRFYcw1HUtVxPUywP6vxyhshrL7QhxDbJybEG7Ef",
  "key13": "4KQiKatiPxiLVLf6NdNRDGFGUk3XnPKtHTWB7g87JbgFPQiPwhtjqNocGEnZHKd1HNFhG2anuD35rE8gyuGBzmEt",
  "key14": "6fGikBQKY4mL7nWk8bS24AsKwPYMusHsAGQFscj1DymPbxiVX7sUK9ync9RteHzKHTUoCfK9mxsqwLceKTkmBfm",
  "key15": "3YzXjhrnw4JCQznC4FExWGL1bSL4D6v2X3z8qKfWNFDMjTQdEYZEopkWe17hdfvPY4Z1MC4RvDWAjdVu1Cryu2g8",
  "key16": "511ZGrwyzhZr83FxMbVpbsux5oJzih5L24F9BCuwcJCS9ghnzdNpQ6ef48ts3Ec5pMmRiVkdkviHFkvZ3o4b4zJq",
  "key17": "2DnrNNDikmYpsycLcjZP5KEkFFeHr9hbPUb8niujT2GkZSVTs2mCTUMejB8L32kpJ2Avx7vpPGiirCWKDEhvn1p8",
  "key18": "ogCMkrAyQ4WXPgCQ8tfkXZxpnbNKKZNQshnjZWjBKCqMHASuooFkd4kbWk8sYi7TPQwUUSKdByoHG585CtfUZ1v",
  "key19": "3aPiY9XZFAvLaJTvaXorknWFXN2kwX3vJd1E2j6bmbfQF6WitebLCdxVF1X2KAvYjQz8rfAgvNTjBQBC4BQ326pK",
  "key20": "66jGZncfFjfyDgBQgMhEYcmYWNmfPsv1pNT56cK3HUQ5snLWLie9LJMuRXAWcMdFi5iuATEciRtnvmxq23fhJNS2",
  "key21": "3p8XrSDPrCqasyigL6rHMhNeaHejpdMSGK5rL5iiPjcGu2eubqPusZu9NoqrTXCXhmENJpGX6f1VEUu4f8jmcee3",
  "key22": "2zVHLJKw4jcuqm33xZq71bcmEVDZxgdtTo5fQbR3ovsHPuRuq5SGbeapAZvjaMF2RstS3doZrJDvxgs7f97AAhMB",
  "key23": "3xWgwvwo2YYdt2Z8r7e9ZR63EV3qxwJxZyr9CYmHrWLqkrHrgGu8rmrYq5ZnJvwDR7vDCGJNo7c5qHMUJZHNbC8B",
  "key24": "5aQTSL4ywC6NQ6tGsp388YopmbaVZAJq43ZwUGLjfLL2TyUjXvCRjLnmzPK2kv95Pr6HDyie5ZFRJ27NaHJ4UopH",
  "key25": "TUacQjL2Wr6EyK3aMTUMs8UQpZbFQdT14tDshfjrL6R6LHhgEwLqvrDoqCgM2CXAtCV9CEH8rtfESiRfAhguQvL",
  "key26": "573SsJiTUjFjniaTvvq9yWHoZHAmobKRUb2h8qB1FtjQUCJ9gpUaeKbKHWABFjH3Eeqft4RwXsevAitwELTZc9ru",
  "key27": "2dt1NXQb74vEjLxj5ZFMC7sUcoC7L3mexkwz6dKrZuhfvRMrkzCGUJifdtUfMBhkgwDJhT8hkSjyUc8yhVxMaSgL",
  "key28": "oiXDjYPHSWuY2wLmDLK23qkFgaZLwmt88qTDhDLkQWMtmYWgJ68c7Ra8c54VzTRsRN5Twcw6ntiPvnZVhrrJVGL"
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
