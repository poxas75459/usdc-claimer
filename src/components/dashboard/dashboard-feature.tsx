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
    "DN8KPaPwbNY76AkrWYViC7XiVJXSjaHbMDdSgeV4AER1cF5Td6n7CEFiA6vD7kxULDHGAK4wzq1Wva6GByhCosN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFnCHMtU1xEdo9z8Wy1uYuAD9zA2ztPx3zzL7XWqEJ425T2mfCrdV2oMonNmnNQQT9ii6V3nkqEGsUSdReTzUjb",
  "key1": "5tbLSDmvKV7j5ZcmC2A1koihPdq73Uacdr2jMjfG21vzZEVc7YZEabKYkM9pepVNMeH8iT3sRaDWU4XMbrn8cTXm",
  "key2": "4KDuFcUxdvgh43JiVTxgnizYbnxWQCvy7JcHzL5j98hr426nicC7Cf1Y5RaxuGmdA2D8FPqKhH2j5RpNttW1YaeE",
  "key3": "4foxkuv49Ep7SEqLSXaKYwKf31z6JYgQbaVEe4zK6pQegMv4qjtaRSV3GB7LQzgbVuNTqiUnqhXmvQy5o92246i9",
  "key4": "nLEzDubxd3qFLABfEBt6UeDxZgpuNUVBrAcqteivyPp5GSVMMUYbFqwcUS33TXaSmvZrXuBt7CjHNnNrg5u8GRv",
  "key5": "2X5THLk46nAL5EiQ8ioiSxSwMNc2TDi6oppxqEJ447GgmybsQwvYxs5YU2n4hsteR985TuFNuDevu1sBsGRft9xU",
  "key6": "2fyG8zpjgJHWYeT6HjUyknakx8Rdn5cWck3UkU3Lv6VAnE9xuwLUGi36pdioAAmBnwuC9eNbs2Qd1TRqXYuiJNmR",
  "key7": "3aXNGbQE1uMH29FPgVbqAFxgibvoY55wUiu7ndJM48KhrKWzP8QUHggP8kpkTcuPSiHMJPjNXVtyY45dgvYWNUAn",
  "key8": "2JbrggQsufVbNjT5iYQrLQmidZtznJaEo9yh53L4EHdj4BxootTrHLb879GUnTFfZxPiw1cH5s66gBzjuEUriz6T",
  "key9": "33e2CsY4SLTZHwPPLaZem4LZFyPqH7pFooFmduXkQG5c9Dd2ypdxWdbMsoXikFvUCcP9JkMVigJjWx8tWjFjfdrM",
  "key10": "4c4NxApaJJmuywbX71jdcLgcRonX4kGWwAQcYQmBP6qVob6Y4WUzHaQRFMJXaGbagxcbq25v9preTNYghqcghMud",
  "key11": "48rR4qQY2ZL8JrLEWRLFFRwQXffbuk3TgGSP6Zj9fTfJfHpHzjpM5wxarb865bKckaF849JwdiEqeWHHRWCrVYyZ",
  "key12": "3mNUzPrHMWbf77UAQ4q8YNCR1MekZjRNUtaBZwRNdqjec2ZawionvfQxQg53TyDUYLpJaAeuFmdG8Wf1iVCZCGji",
  "key13": "3jW9C6GSDSiww4E6f5X5BRgJQeEGsjqVxXoRZvY8Rt2nrmidDRDfKwJ4aLXVM2hw7S658o4rNNGPu1QDA4uG37Y3",
  "key14": "twGc2mdSaea7w8pvG9YCXnBn5BhGFVLYSDJDmhP4nUHi5Ytvq5bL6yB9wSTh8gBfqPyCR6QudoaCp4JZRYyfNu8",
  "key15": "5VZ3es2vKxpAtG4CR7dANZGPEKge8dkw4s6Be21npCz6ySN5kJcdt3n2gapb5gnmJwumBMjhkKfZaiVKM5Xu6GPK",
  "key16": "4gcpDp8Dv2ASDVKuxSaY5xNFHjBJp8rqFANXjhFeRrynohYgoegwzyVM8mgsRjthmDhcgrwg1JyDWU9wdLgJe6Sc",
  "key17": "4RF1rLZUqSUbTNWBbozSQ4cpcXAA2zGoCN3bAxbzxK69jihWkjWiFXW4zvRx4cNuDaWrU4NXNTstrnkGHUiUSVoR",
  "key18": "2mQxHAZhmZxjq32ERApX95ANJa4B3wrSfPhn7JNJCvEZwPHGHkVqbqzBjxBQaAWWb79g6ibXQakp47FFwhGzYQjm",
  "key19": "4GmWA2SnWwn3inP3RM9PtuGq1dnAy7GxTdJ6HJu21Sx7uMDraDGej5i3bUYuDVXb5DKa3eU2zJfNRz9997zQoiXN",
  "key20": "5sW1Qatwp3gAEcBMLUCB9sEPbEDjAZQNfYZZbtHLPs75B4Qw8nyNGFzsLfZtP8gA5qWuVzD1MG9vZYwgxWNXL7h5",
  "key21": "3vzYZe45ajE9poNre1eYYrEeiE2QuqvuduNGaL83LBiHDboewuu5moNRMh9sftEmAdZrv52R8ent69Rcwq46cNdK",
  "key22": "QxFYvNBZAXsBAL1zF7Va9ABrZbkc6CbbydP1tUKYWVqZSqXrBoe6i31SLXcuXBcgpqjyTr7KmnUQKB4brzEn9Xk",
  "key23": "351iFMxw5kAciLqCzQG2vtdS2aPqPsY2nbepXCFyn36apVi7KGwmJpRkqw2sKzq7Vkrk9xbf9czeas6iprLa52H6",
  "key24": "4aRQNqQPZzSna2KXPWRK266xCeWAJEBe3RBiZfWbmiRJ3x54tPP2XHBd2CcCu9R3tuiQFgQ1gmToWuwuFEdFP4jp",
  "key25": "66KCs6cUQZwj2j8iVY91j6ZagdTWQGSHwUMgTDMNExvzNDSa33Q1wL6CnLTURbL5fNMhLT6da9a4VYeSi7hc7q9m",
  "key26": "4bf1pMRwJAPNyhzjx9eTmmkEUcb4iwCFar8T2cUbuuR8QGaC1RFBj3rEVhHU1PZPqd5VR4rduY5L6hBb8v69Zbhj",
  "key27": "FqiF4xgFTa3PhaPRXsE6NQGzCgASL9mJEVRVZnX1127uUmLzxF5JfNnUkc5966URbh76pPGXMZXmnk6ULii3Uac",
  "key28": "64ai9zkGMY2upZPZQ9hdNpZ1srapcba4jQEK65EfLUaobgkbzpHYQoWoohUCtZFqSBJR6HYgjzd91P92QeFu1aaN",
  "key29": "4rGKin8kvoXEjMVHtNMnRq1Skja1abP7Hs2WzKSsQ5kW4ScPpXtBJ5JrpCCzRbvDMFPGSZBEi3csoJuavZGwuLXr",
  "key30": "4kQgUiyr3Bvfw4aQkuJcPDcGX7Tu7989VxjgUPfdLdfRpamGDtY8cSdZt1M9gVQ4RA7UV37TcwZb3H17s5bmjdDo",
  "key31": "am2rW686HSMQMi75bzWNsGWmYodo7TtkQyqQu52pe7ZGD6yaefzd4vHfntAUb626ndUZQYKcUtVt3rurWrZ5k23",
  "key32": "bUrLAGsCXEbru1HN5PVk3j2hps4yR2DqA1oZGSL46nyVCtDLHdnp3e4BhMuU3Bn2jQpqpmrPqU8wuBUmmevjk2r",
  "key33": "4yGD9iYQLmsDLno2hbakeujFqooVfqnXzewnQGMRjHdbw5exKEo3NUxNMBb2HWAmFauaqZhmbNdxvvNKcyTBoF5e",
  "key34": "4a6KuzvScYknseuQfrbzM4WWGKcpXthEvKm2MyLhYdHALAh8WnHcCc8EDfrRuddVdrvnqdY27ttyQVEJk856SyrM",
  "key35": "633dgTA67AvexacDTc4gZeFPsZaCtUEd3XiHRvUof9vj7rpiK29yNj4Fs1LDkFuhxdUwKbaPVRcyEc7hvJpTyHbz",
  "key36": "36RHRGLfUa5mL2QNAtjtuS2AZGoZoMZFRRX3ZTgDrMtTjaeo55xZGtu6Cju7zQ7gVzj9BoszrkufGQKuAUNU2oMj",
  "key37": "2oUeVsoFoSRUGVFW5hLAcebG53jSBvKbRAABNdq5idMGZc71LW3DQsjRDYBjQ264BDb2NKKqmDiU9BxEPDx7RAYt",
  "key38": "33BCbviFTGy8M8FYgkjtwH6ztBiNscTHzzmEKL2Pi37m7HKJdBAGJec3atw2PQha9xr6JsmpicdHneGedDfgiC9s",
  "key39": "2t2KxSz4NEZNcvJTkDoK3YtupPZxEjfm5QF1hmHrdSR5EV6o1H1XXt9J2PQXiS9BojEC9D2i3VvXbYXaTgQxU1hw"
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
