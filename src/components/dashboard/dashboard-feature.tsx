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
    "62La66c5fBKZffUZ7hvpwv5uREB6bpdCu4afDz5kPZNqgmWrxFrDeccswUehWBHUFmuP8xAE8FxDXcq8QAUttT5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ru538Xo1Lb1wXRpyLMhYAGxqE2SNyCG7RsMoXGBj8JtT61zKs2UsURTMTrzRMXocLmfFiomL8tixmNZ2GQLQNhL",
  "key1": "5edmQBd4VKL17fWwRNwbMMiguoWUQFbRvdm1LfSqKLxr1UN72LzbhH4B8CrNWgD5HrofYsgrXz63qcWdYvJkVLgT",
  "key2": "3Z34yr7v4fUQpEXZEDVk6pegG9XnH8Di2MEWmtBSeMYbG1SRStzA9i3989Nr19UNNK31AorLNfRsUm2s1L2aHVCV",
  "key3": "5sUCkGZd8TstVvQRdPjWeiTGWpsjnXq2bNYAkth6dnnzgUJ58ctYbGMCqu3cDiHxGNGwKGvKyy7GrMFHUavM4guY",
  "key4": "2C7Fxkn7rz7xNKeffkbdUpM91tABFn9Wee6YxL7jxK2Wp3dyVSDPwE6Gc4jwqfk7zeNtZip9EkgxziMnU6es18MD",
  "key5": "4dcdVx2yxgunNy86Qb2DdchwRDkckZyUkrUTgmTMvU2mBcZgmFS46UdfrrGiv5jYsWRv8QVNeoqWJgdiMnG39sVu",
  "key6": "3vVyZWgHZoxebJ3rfMkbrQomt4izkENZsBCFCBi6YkbZtH794TaM7wnLDV5CtgeFGfjdHUCeptcLNDihKeYceuFo",
  "key7": "2Bi1uyq8JVFA86XiZtwPuygG9LnKGRm5Yh3vejv5PFfP15BqjqK9SbbDTWq4xtMK9mmdByw5wntacdrUp17Esoqz",
  "key8": "5cDfPe3J93YvTwtszBmpJDDWST5RPu7zyV6HDU9cJFShXsz9wBKMBsCNYyzhNi1rNdQpcfciaPqBqsA1xRFt6XsS",
  "key9": "41QrXxmwKfNqMBmcJwJhRJ9sBu5Sfve5rq2JcRpokpGfZB3wi89wX4GKJKeRyw1eHxo4yFd885yKWJFTDDi3zz8f",
  "key10": "pePoHSH3XoN8zcYpMKepvBd8g2imYo1yKP58MSU7vXwPQAEccoQoTMwG3jXX3jioMTHQiuy4AdJBrzbCMf2Crao",
  "key11": "zfpwtamZvweywrw9U49A7iqmsQdU2fK2L9XMmJoAghuR33gXD5EjDM79audvVFj61oq6PPGA4twwJ8o3k8Y4Hhg",
  "key12": "3VUABZfMmqo4KCKerWR5YwvEmmAC5Wie63vEDf9RFzTcmLunFwbFNNvKyja7ML91F8ULaTZJAj2H7u4QboYZg7iz",
  "key13": "41dMrJMznzErvmgL5fxrg1wxkB1dSosu6yfdqNozDA7aodkZ7Stb6nxPtjN9SZ9bhyBzmfPpw4tam3AU9v76bLiA",
  "key14": "5bN7afrJB3FU5f8wTuJ1J83yRJWqrF597JkU5GANBrb3QujrBfNKh4VhWZwhc9qXMjeyHgNiw2oapCwxpsFEdiaD",
  "key15": "2ucmTGRKm585jV4fmaqgicU4FU57wtZTnPWvieDNXoAYzYtVKPBQ1sPPCvoGLHdombzDMY9m6Q6XSRRQdmyGpuDq",
  "key16": "5n1x5zKbAN4bGWwdo3eRDfUBfXHCUhPH9Ahepgox1Cq3UMtTNM96pCt3pYGSyoJ8DgcF5aVw5Pf3v3fM6xfQV6mo",
  "key17": "5ZLZ2giFv7ziXVQrGBP3JKgrAf4Wunp5rKni8LCNznR41tLHQmucsWugECzrpWyWBLWhRKiYNbiu9MWvuhx1fTWA",
  "key18": "5m4m8GcxaUsqKNuLLZJ3FZZtsaniNBejWvSoX7vNhfZmuxUnCHJjrw2JAg9T6Ldnpc5ujmKd79cyFsEGJV8AVrUc",
  "key19": "31dp2cfBfSYNzoettxiNUZn1dfgKmZZ5BwHaeJs9hi9JaXCg3sxEh8KpX8MQGRBb46J3eg9tBv5oUyuQsPkqPf3C",
  "key20": "27YfeJqKfQw3TwBTvYAKYM1dVCXL1ahAA4UHbzZZSwDNngRjgY8PQ5p4pq11oP6d4J2zTqqcRAyYZvWxN1rX28V2",
  "key21": "3XbADgZzf6iYa8XP7Df2UDju25hf9rn5U6gzQqDgiL8mdre9tSV3uH2eHiKbPyNiMxAj4pVLzpTPVpuckKyjh4vu",
  "key22": "r8t1cJD3jV81pqPrfKP4eWBxnaUonBTZvpHRpnFQsiBQCdoEiXUuaEM4tRQtgkV9yhyz4WnJbbkC1i24nuXzHqG",
  "key23": "2PNwKmVKHDuwtNATTjwS69CAhtwAoB4XP78jPQHbufFUeA3RFjgrcoudJyyCJ1y4bgrnGuyc9NdyPScFruJ7XzwV",
  "key24": "24GKzxXbmg8YN4tXgDrPDUmjWKEorh8YaPQZ61ejmzu4WBaZMaCMMorZT2qnZ5MwJx2ftdb7ZzJaaZ6r5ZUS6Qmw",
  "key25": "2MFwkcy2Aa1bMTAa9EDJLc74n1J2UMytCPqVKTdmcqVUa7Mkfq9EYQTgvWADgCgzXuFaE35Ups8Bj9ktBa1LYtzH",
  "key26": "4EGmpx3ZVeYcZXPxmg6WorumUcQiP65jnyZHs4WpPTwDM87PDsoY3d4XMtCNrvAQSZBBMY85KSfuU5cKnQR2znDU",
  "key27": "MnP3aRKvL3oVzzmzBHGgny3bMXnyRHke3MD8AcvprmPwk87v56KAsqSUafU231YEpPWi8KeYk7RPg8C9VcjR2Rh"
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
