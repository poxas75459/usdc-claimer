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
    "4bXYUvTuQcEiwoEk8BDLYLiS1g94FrAwDX6ZY5iqnPnToQCnVcHUp2zM5rdJpmY2zXCryzp4N1PQb9HMGPTRHZFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwGtQQCe5MiM3qhxjz6xgKdMzErvYU8SE8aXjFHS6HoSCsbzhhz1gkRHqRS8UyorSeJiMpnwNPAT2U2qN6W9AiW",
  "key1": "2TTDJMnkBAuwUwbhsD9tbwbnzgKBa6Ktc9ej48jckge82yjZ7Wac7dm5Qji6JVkjqaZgNjagBTV3XngiUFqtGHAj",
  "key2": "3cqQ7E7bKgs32r1tExJAKTZB1KQu98QFkssWaykZFcvrcUVqpxVxmtyprr3R6GL3S4wKz3p7gZXdRgah8iA11wgj",
  "key3": "2JyTawZSN37S7pRjmRjUfLyGKKro2MiG8GUDJ5QA3FprH3LHNUnChb1qHaeCypVaB1DxTtsa3wEwBEYFsM1ekwrn",
  "key4": "39AyFxViiYPqMW74GpNYFNzQPzAhDWhoWUSKfHNXmYJYQmVmjf6JnahxuirxK9zxidqexRN6y1ZwmVDWCrSZUT5j",
  "key5": "8PzLCPXJ5JVXW19qhtLacWSDbPJuyEhkTJDjfviqaUSdSRgXwt28mjudJ1xNn6kWZ7p8S7SYmucKoXDP146GoAh",
  "key6": "3GNqxhL7tqDAU4wVErodb2Nq7uCbsXVs6p3TF5uXewK3Af65xpDLCVwCY3HXbWhoCrt2HDHDu39ST83bqdrKpfs5",
  "key7": "3GCsgs18keNLZyBA7gW4skCrGsByFpgmFTSaFx4wGJmgTcu53ZR3EsibyeAcuMhNSCyWFyCwE68FU5v4GY5u45Ka",
  "key8": "66AE4uMYan6jafwYrjYdUkEMtahnbnzkGU1qXXC3UQr8Gw5NbWCNgofQjc8MM5sgW7PEzsVD2jGxha2QNZ7uhqiD",
  "key9": "5azuifKeMCGeRpYEHPbpwaUnX3MV1U8VuphXjYwZWmhjgp6BBwdmDf5eStMeYxB6jDxDrHZ5L4H53BabuRYZUFNy",
  "key10": "4pa7VnA7fxGTqkmurwkzVdAVdgpa8DdK9G2m6jUZmthkH6FkLFk8p8FuduC5i49M4uKQ6SbxAHwH9xd21tHH3WfC",
  "key11": "HPQMKnhebvTc7ZZbZSvpZwLvrbmDKqTxm7mgG3onsQ3JJw2vHZdmx2aMzTFtjk6zCyUE9nAeZT9wpUDEkCATYrQ",
  "key12": "5dpUp9uUTzcY39XfnAYKuxRBAgtqHcMTmcXhKKTsLRr67jbQRbXZb8epgF4JfcoEvTSnrWwkBK2yrv9asM9AvBUd",
  "key13": "2gLaPucKsqfM3f7ZSiMDZBWooN9Huiwaqhy2akZUjkSZRq4Mcft6eGbwwAUQ6jREXVADKGJAKG1haZdcF6JoDgU9",
  "key14": "4ZZ89RVHas76Xmsm79A5MFhLokktyX8NbPeeP8VDqXy5HGViZE4kC5wzaxKGfn5bhPmxptbU2wCtvGMSFBaFtYFW",
  "key15": "5CCzSW6ACKKya3p1dVUVPLUwC3iF5M8UFMiVWW1npMs8LAhoiGQxxWQwkHF4KXWDhdfGs5UMvjwgmMQyvqAVx3Sh",
  "key16": "YNZqPr62YUKncaxKJVpaiJD7rdJLTCr4PKMaYYde4aDoDjwcbAxU7EVqKZSQF48DBZqYuSzduQWf4ZGyv5jZLUE",
  "key17": "42x4HTJHrZbE58xfrmPnUsMzVCP3JEoz6WL91pDcR7bSjtjZF47qdMDhAhvfJgBPEddG2rbYA3srgigb6VSMwyrL",
  "key18": "32S1WoKX99QQxHWftQv5TmytP1APWHWxU5SrLmzKpfkNrsLDo9Y4WDNjAjJe9bMwLXoanc4r1gkHuy1XuzbbRsgP",
  "key19": "2FP3rrHV6ofHmMmFgk6NoHxvygpgT6ufbSXiseumUPQrnD7yjCy8KJrJ4f7x4aJZYUCUpWEWLg8SKsV8r3tEYfXe",
  "key20": "2VMT3YYpRon4UhipMfKojNs7Rvfk2RMoRTXKw63EevAGMb7gu3j3S2ixGRTNxfKz9j1MrMTso32FpxU6Lj3vXfgi",
  "key21": "5PVeBEbZhbcW48bPH1aKqFHxuwYU15oTKuoJkWqtgZNoi2NsSSr9bEKQzASYqbXBaEsiNjPgaiBm2SAyhM8WRTSZ",
  "key22": "3sBUh4dKjYLxApX5rj1pBReeeBjZWgq7sxSzPSg6rQUTBcb1jVzZx7oF8RoQKp8Jc5nhAA4BMVHn8xAhXTaHekma",
  "key23": "5ezT3vbFV8NbvrFqvejEKsrwWL7ZbFzUcmxqn9e9bW5zZgbkxWaNmnu5WQzrchrB5n9pMtFE78Dpp4dGZfcJcQ8Y",
  "key24": "5ZEeiUBbysgHwXnUF9d8M2yVxLteuy1f3sXhUFqxgFpV2CBVQRcGJUWWqqXoKv67FAU38TxNAX1kWvZKbr5V9Ems",
  "key25": "3ThA3EQv528kxQeeUVLpTnVDsg48at2m5SzCqx9R9GAXjz6MgZd8aRXnfftMpqGWaB6FNXZXPEg5TzKbkPoGwRsM",
  "key26": "4yp9RishUaEEe7QLKGAeqoUQxHdMN8aGRni4NBj1otqqxL9cCZZRKGKFX9Mnbiw576PqWhAyxCrgg8RjY4a2ZsLn",
  "key27": "4YgqLt6fZ1arnnWpRv1wdALicoPN7AUcPQNB1jxU25EDiiqRNGr1JGPPFcAY9RaLoVCmwaQPmmhNKK3DYkBDHrk5",
  "key28": "dfEL6weYd1PdZDti8JJURkCCwXg7iqptavVg1sTX5mt1vfQTjbH6KMgVwVwgbK4vjJ7qqe6a1UsZBLhrtCbd91S",
  "key29": "2warXECE8okQR84B1q4pU6GimuEDTNrRJ32fQhDKKPip3edvqtgZ97tZtW3rUF8vMd5Gedb54YVmYxtY7gs3CW8a",
  "key30": "3nEBauBG3Pk7PgHtXXSvEkb27V4DUvV2mP29Y6cvR23XQbtjuu1mR2rgVxui9wpovqvhmU7MSUm4kzK2N1s7KQSy",
  "key31": "3kmBYeHzxZiDHzaXouUQZXaGC26U4HwRJG3YSWwHUAmtPWUqqH2hiscP5gHmq21zS6wdH83c84mdNuDiRGt9xWao",
  "key32": "4VCg3Jpg9sjS5C6kNshNeTuvnvT1VTaD23zLsMT5jZowGFEBJnuM5RX31hmvBv5d9kbqwCNomYAUqfwppBWRQYFe",
  "key33": "5Hz89Hx48t5Ud9CUcRBL5VMNcERrRRUyUQy7mKetuLGTP5WA4wswpz3ND2dHXYWmJzrqiEc2fa3Ekm5gV5JsnPwj",
  "key34": "2Hn5gMwCbHh1yzFKnM4ppCuwojfbF9V7V4vpjYsiW4AYTg1cSg1M44darB8ZfBEzhrJrUsgFdp2ntDMFkP7k32Aw",
  "key35": "2X8J5u5LBCn1WZ2y6UeSSPoaajvWBukA7b7RR78VkjxpPrzKUkcG9DdttmN9ZLKaRsnFCXHJnej1e3ciTjr8GfHd"
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
