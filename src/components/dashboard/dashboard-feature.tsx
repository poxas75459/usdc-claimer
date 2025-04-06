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
    "2qqfVpXMLRZRMNAZusUFgytEfJsgmvzow6ykbSJp3cRegQdmRVNKuSGH46NUREgQudWDWBP3dqRzidJuyD4ML2dM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293fntr8FQ3aiAy35ATqxGSHfkuMpuQR6YWuZfKYnLXiZ8bXbEudCHxmw6Vxz4QE1BJPQWkgK5NEsjKD7pWYa14w",
  "key1": "58kbTxKTq4CHkubZQ7CprMDKgFyTJT3d7tXpip7qJB7BxPuLWtBnppFYBnCpWHsXRc3JuzdimoQPSDn9DdUJ5fgX",
  "key2": "41iAvC48TPyGnzyDPer35PEQsDJDxhq6z9wjhDsipBF4L571L28CFjyh7ph2qTDALCfVfN6sHBCvE61iNnbk6KJS",
  "key3": "48DHRj3NFXYXdAHgsXnuhchFEVsfsG93c1SvQ3QFXJcNKMX2SHwjCGUt9i8gMrXqgb6rKK6QYYqNokYBQtDX7E56",
  "key4": "JBTAWxYBgtpKeQ8k3v71wGi6BL5EpYTPuugqoP469Y155Ayw1dwCaZgXEmVyRJuYG6HEcd4NoTmqAMRdCrEQ5EN",
  "key5": "5Tvk3gytot3pVdnjHhB791niNtKvPevHXfmxyhEgPddfepkvEo87SpuA5PTgQAjhKbznnf21mdYe3rKToHTiFohu",
  "key6": "4N3hG6Uf936xhQ9HLjVWRMqm1GncQYQeEPyXfYSHszBoyCFzd95qmjEZPdfD8Vpt3XDjR7H61PaiwNhjgVnWjy6F",
  "key7": "3JazjYWhmxVaAdGzKgzF4LFvK8NYMCAiSBhu1aHv8dcLDX8u21cjshLynQxYXYhWfsSACEo8XwixJN4Sab9UCHYq",
  "key8": "4RbuCAQiYXBgEQeNPTCtN6JhV6KtV671ncnG7tm6e6XvDVRzzqtKHFTWFUkfrimPZrNRwXJkXeUFpctovaBUjZtb",
  "key9": "2CVPPxoZ3aLmmXAx6b4jdBz1AUtwfjRynmFAPds63QD8t8mp29CkTCr2CsPJ35wPAFW5jUXhFciPADxsqsmyWWEQ",
  "key10": "Bf6Ebw2KAiRPMqhKApRBPFLPUpKpoJ3Tn5UhcokFLgvcjaofAXYbUrXwDVsPC45KFpmoP1aAeo2WmErJRyt2Z8p",
  "key11": "2DEXJcVZcinZz6kHQ1P8fL5dHm68vfGwcbWCnpofxczXutdWmh4NpJDonzzo7KZGzxKME9KTWSeqVXKcq2SRz2Kh",
  "key12": "3i3e5xLWbLsJEDnaVVCcEPFCDjPbxdALr1XwgYRAcGmqkzZFPGtEPqSKVzADxyg9opRwCVEG55EqQ77oRLsJdx9C",
  "key13": "2oNVMMqi42YqAKvW6eCL22SmP8pDU1CpqxEwVCeRCKf5XxsCNTci1FrXwFEh2SMJgLEiEBs3UYhPB3LDk3wpem8z",
  "key14": "4yeZKPTmZhCkZcmP1BDjWKEqBmhxvSjQjhLjW4rQzj4SQy6TuqmTsuPVjXiPsUz2JKbhpPAz4EYvat6NkyNGjEDV",
  "key15": "213HS9qstVLc54MfBfLLc7xppkRZvhyX4ydEKYJoMuyWxUz6zuLCH3hCsngPuLiCt9Vg7ZkPQr84mVy3eXw6nnN8",
  "key16": "njk8TiknQG6zGpfJFaB2fqmmw9hPatioHBb8N3tH3fScZVmbbDximbftosTZif4DJM4n9oiPMt2vufqwQUw83zA",
  "key17": "2BJEQAnhjdJ3YexeF5FWr94vkYTPqCyhsJ5dETjvMZsBNgNGdoG3ZLZZki6vHGqQDBekTCJbYZgKtS8EMrZeNrHi",
  "key18": "65TsVuuv7t4tXYxfpncTYx2WA9pG9W3x77U8qnBmohUunMDrk8NXJVgnmk9gQwVhbih69Moi9tWX9UQAbGNAz5pa",
  "key19": "4AzitR5bnPMzRB81r26cw9vNRDZriSsFdiFoy36JVoPMZjpnF4dFkDRWCBEigEaUj9AWVd9AiTWAQx8oJ2Qmmu5C",
  "key20": "55qTquTKQE3jDgKJHhnnW1eqMrXU7t9hZr2L72vD1NJbYe3PKhNvSxvhRwUEAJtFVaWhVfeqV2vThrtJ49YCS9ah",
  "key21": "ofcP5GEU56jCpupA7NziBuwy2v1WxKvzKfrtRTTSZLg3c2VhrhmaTkGEyeCjj8vTBkAteq3td69gPG12UPCMYw5",
  "key22": "Zh4XwLd2YBas8BCN1Ef5VPWLfUdkYWS3wAGe5L7cuAPTjp8XaqhJuzfeawgRLLLaEpcJjmA6mxjNNj45m2Jp3GC",
  "key23": "3NB9a6ubQ4JRU7VVQyiqu2ZThFVtAKJRDL2NpVXEBX1XRVKprQTrgp8dYsSMQLTqW9vBp37YwU1FYbZfCwJ2dQKN",
  "key24": "4PNigyManS2fEBbhf1C8fcqegTqDdNkux2QtMXFkZFY2pPb42tEES6BiP576Wxf3FZBwWJ38j7Rqp4igwyjyTjAn",
  "key25": "62BVvVNTwb5Kvo8QrtjWp3djxUG7ruqbAkeDbCz7jWJHwKMM7fjgnMseFF9D7QBZXtbLA3adPq6UDQXnmtyYzPeh",
  "key26": "bL7638DqTXfgT78mQrxYo28FRuTMbQzqLuiKWQCy47VySsh8bGt8hh2JxXCtbA3NEJKET7ciiyFXoGS9qjLSjh9",
  "key27": "4g9xees1Qqr9jKdMta8MprBgAxGGFs95MecoZkM5WW3bRuh49Ub3oQ7srFqCEQSQw9q1rndW4czdnp38L2Ur6EQn",
  "key28": "3EPXnorrDUG5evhYJqL7RtpD4TY5nYv6jrCNBbgXiurAJE3THA7G1c16AbRCdHqrqEVAi2TLtLZ6uRYYekM5qLp",
  "key29": "5LAd4ufKjfFwUJPPPWP53ESBkBzrPvMqU39RVNbpd98TZsqutzv1C5JVqjsxqX7UqE4u79DJsRLNQwsniL58UgnT"
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
