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
    "61JHvvQ7EnkZsxtRSKZCaJiL4mEy6z9EJCDKe9g2uxpUrBZzCjEsaS4GBRjnEZRTZK2yHwLCnLQTVvKRVVYKzG3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXXbDqSRXwYDLcAKYSuqEByBRjnpYYdprF2VwBmfRNGdXTbANqqPFND5giM9TrzJDStjedManJBawpD5SntHJnL",
  "key1": "2MK71hHD9zfgxFhSmn27osefTN269tENhcN8UEmHKZejEmZie8su1Pz5ckC14ArW3mWQ77FNuSxey1UKCRYq8pCd",
  "key2": "NJFBJWAwW39DgkLVh2vxtiMJZob31PxwPght5G8hM3XaUysdcVtLT9FvJX47m8dmnyF9fSsFAT3s2pFXKPLMkjq",
  "key3": "3btq7qttw6S6SRSmN4uoayiSuGoA7DTVLwUBjnUgaRbMbdBSFnwiBRPzi1NCgPVDGiB6oWJL4FGPJByp5xYRWq48",
  "key4": "62Z1Xy53tJKpcRghNMk8QHuoW8a2WZhcHQ9Y41LrZfCocWCU1ysMsHZVgkTXk4otFT3Vx8vGBXksLBcqLaYshZ6Y",
  "key5": "5zVFEXnUBS5SfoVKLXNmLiPHCqV2vWacicJ8GhiEJsiwoNdyE1N1gpovPccPSZ4PJ21RBiH25dETGjWLGaConAQQ",
  "key6": "5ArVHKqQNpaWhRhi9moXrYqUHAFGoazXLL3PuhoTum2R1ePXgNncix858AuTbL3w5MFswh1pbevbGF5MEmHzkTJf",
  "key7": "5fX4uTHNZBqCz8bmwMzGoMVxA1a9vzZFu2GgMjGR6VQTuHdK3CCVTUCmUtvsFWNX2m868D9b6rGSCDniiSeQv8cR",
  "key8": "5HgC9aQ553kfsKbm27nR8yAQgtBKfFVbhJywW2QYjX7Q9ANrZvqaJKYb2ukAj3dc4qRQ1yBP3f7qSRhHTqUXBxAJ",
  "key9": "2N68N5nJikU4DfSQ4F1QEYs1w28fAvwrQRRZadgrFyseC3Wvs8ySHEwKBUq4CLzMk8Qe5FCJavrTR8cH6jUoPnG",
  "key10": "215FU7bCMYkWSjkyLsHk358B45womVKznvJP5Dwa2TsG6TQwGnPp5fyLZ3bLy8YpUtNuJdM9X44ZegfSmLtWFFTm",
  "key11": "3Pqr73BzGeLXhgigxVBFGf9CuQPYrdvDZqe93oW9YgzJnRTdan4MkHAhtjyDPnaLxbYVqAjiPwzpiGcj9yt88VeH",
  "key12": "4nnAyH4FGTB14i42KQ36bjRUfooutUHEuvTimd3QvhwHyrxqZrUvqejjEo3geboWQ2vJzShC9HrW7wTL2LJDtzcW",
  "key13": "3fA7E5Am2KFvnsYuzmez3aHjM2LSDt7xHw4z9wzZZTNkyRYUjDZ1ogCLy2hJsXY5dBcaTr12yQZRhHLm672ziF3a",
  "key14": "2LhYXed4ipZDmSXNMfuytVD4UiYHGyQMfaUGoULu1DkBDT5UsKP3XhGxmpnixjomDYdYcGSGBcNcYkXqeRLkUJ3y",
  "key15": "3Fo7GdXjNWfmezUCsmuN2AGEssbwEXuZQaNFkqd3eqGe23QvC5B58fMJWJVPq8UV1SEqfjtPbpKp8vosrkpN6PF5",
  "key16": "5x4HqVznjMz3DKSXLZxbcYnp4fjdGqSSusg1P23JDXav41RzH95QSAnT7NcAaadSXwD12JA6bSXWg5GZQAKVURHC",
  "key17": "pE5EDUkVWRJFqRV7NvwLqtntfBsS6exh8qmNwN8KQNrcWBQuh5yoki4djUUjTwNQPr5eorKJ8PKvrvetMWFz73R",
  "key18": "mqasiLW2tzvrcuXmcWpMDtsk1piaRsZkLpYdyKWFrKJYNoYjXP5AXdQMH6tScaBBdydExpf5L6skrhPPSNeus9Q",
  "key19": "2mzHabjQgoQd7MrUwKNrocAtUq5kcv7qhpg8WbbL7KWwu4t246aG4WHWBybU87nhF67zP89pTCmWHMZqLPiq2ynS",
  "key20": "VVg71hp65rpua5nzwG3uHj7MxPbHK6qsRdPh9QLCyaEDZypaoW4N9ccyiAvkYfF7GjhtwWYCMBBVuMmV1Ge65h5",
  "key21": "3bbhbRAqesNrCmSqaUZpH2FMqvc5QVwmnEbtN6jrCkngjCiDrqdCBb5i8JJeGzyfXr8AFMQup1YCKn16s4wF17og",
  "key22": "3WsK3QvYZiHkKL3udm6xBkGoLa2QJ3syvHYSpSTgtLrb3FTsGf6R1iBi8rTVLJeTHv6e1a2GfTzH4qXAAgtezcbg",
  "key23": "3xTzRUz1gBHKNwi1URHnur12hbEqzQqDMSCASLHi9RDs2oRxcLXwB17PxRK4M8y9BeDwfzrQh1Ukv7g8qeTXWrHp",
  "key24": "D9VWHrDf5tVMqEr8Fzoskjeryxe49XkP4TKA5VnUmEyAkUpagA73M3WdwsZzSS2tPmM8W2PxsVaVWyMNE55BLwB",
  "key25": "3ujzPZ3t1AcnbaDkBKcmEi26NncdLpkr6WgYG8yccNFtukBs2hXcbwkDfeXT5izMDm8Ng4q9zKxiiQ92YQ6DAsvZ",
  "key26": "5HeRUn8NVvUqMcaB6K46BWwbT8avFD6NTqgM8Mo5FS4FJM5gvDX7zQ6PgdPErVk4bz32ezV11u9NWLP1p1MPakHz",
  "key27": "eK6EhjhCmhid8dt1uRwtQtyHKxkK5iyxm6gJKNHugRQEvrJAMn2XvxT8GBevUPyiMtXsTFebsJb19jrrR1NT5ag",
  "key28": "422TYV3nQBU8LkjDwVNsDodcashP6CKSWcpAJKkL5pYkCD4qj4NGhaB989gndeqrggLBxhLsuSSDDFuP1iPGL85C",
  "key29": "2qW6ur26TjSgnBpYT1TLLHhwm2KaRzu8CMGo5AuJcaZkSrZvoda7f1nL8yFTxLhvHbwaRxrEPEj9sgVVDPckeMfP",
  "key30": "3WVYTFi7qMSquGbioEqZGs2Q9B3xxVMQRvZgzP9XtAtNA3fcmq1hNw2LN1YagRMLoBco83gudqmLvfxxZP27wrfM",
  "key31": "5w1fzdVcySBerps3pmDKnP318SLKgL1upodkFcPtHJooCejCpekN4LmRSH2xyrZTDvq5ySRWbbxFVA1H9cegJrpM",
  "key32": "2UncChrxJfiyy27fDesdLTyaH2S8U9dWDcHz8KrrqHScQoFnA6M3LTFkDsPyaSdFDjwXNS79nCuPW4QGVDUMTCKn",
  "key33": "5Cs2thQYf2dVXnYh1CuPLAYCkP4shCyrkoqsaa7uzgm43bA5SpYGWGtrSgt3Rb77DsZesqy8EZkgTty7tk7bKncR",
  "key34": "4Dmdz8w1xXk1aQNv3b26zYstk8Cf8HrmENR7v6XSUCcYsf5CXDHrhLTTg1TZ8BqRmqXeh7Qh2Uv1uU3GjFaoGqac",
  "key35": "4h85BwoNfZEcee2D2QHABxhZEpDc98cNwyQ16omnpBjhUk3gA2eYFssPzjAPC1j8qXT7RWJu1xo3wHqYyU3cNGyW",
  "key36": "3Rpxe5yr3AmsVQbwQ82z9DjuRcZNdMq8pXAJ3pHZB3y4JpHcbKLRxgkgWazGWwpnN2iZrSk53HNWE5XxGyutubR2",
  "key37": "4aA3FHxZynYovDGwvfuCU9DFNEHqtkdoLhm1ATXZLhXLnJ6ruxcHVUm4Wk7pKh6xNbPTaALqPpN96mWVEnie3cWb",
  "key38": "41gXiUocKERTonz1XMiN2FRLfHCBg7TNMmUsKQyKc2AhLUerBfHbWabV8RHHvSD7d2yMSShLCEtPWbUvovDm5MJL"
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
