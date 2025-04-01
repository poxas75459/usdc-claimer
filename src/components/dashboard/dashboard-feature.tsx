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
    "wPyhRwfm77GMBC5hxL4JEaCNn4GpBctgWuKS8DziQa3oZmfYnvaNxJui1JQWCQw5pKEUwHWcdmrKUQKBi3tqzDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHfr1LhPXM1aM2crz2CESL9Pmpxc8ZdM4HrBN5DEwy3LzR7YmxvzyCnCrYocPYQb2DaU5DjUELkcwRYV1GsBfFt",
  "key1": "38LVfALADdYLaorADdzoQFTk5J4D1Qy7fvKoZYJJwG4ZLrUVjn7EVZGdGzgXsic7QL63dCeEivCNrCgdXXeumeXo",
  "key2": "D8aDood4EfSqWPkptCc5hTWFHwJ7huiEQETZYuZabmjfLapLynDYLWS1e27hpciaQJk3DH8aWKHUz3iBRdHKnpx",
  "key3": "3k1KoypxAqVQTU835xxJqPYp2rDdzc4uDR9CvSDQDguGCqBBKC8SvYWKmZXctXkjXpCe1eQFVqWArwPRiVcu2udP",
  "key4": "uHxK4WUVKzeuRjpSjmq5DLY1ebeZPhxASgsMsVVaifLwSdkMEZq6d6hUoc3GmqLuEX4PVHEDp4MZKujDmXzzWyK",
  "key5": "3BTyGZUwCByAsXWCqkYReLeFNJEn3yNV1pxH4QyZ128sTq9SyzVM87CtH3AvmRzzt8HyPznfW1QumsFv7PWFTrF5",
  "key6": "aWxDHaqY5WL6fwcVijuSR35W8hhGkofGeW879o1bh1m9XvKWxD2Fo4a3K9aaeCRJiqSzhnZi568e7hDiDaoTPVn",
  "key7": "5UbtcyZ8Z9Zq5kUfoZ2h3HAtBVBBLL9kyhBshsHphoyRcdCWvVAsUQfmvXfkV6ZdducKEbN4yb2QBihght2sH7BJ",
  "key8": "2PkTY1CVaNf7PLyZTDdVmW36VAba6ay98CkBem58tnPiQp9jGW9PW8f1kd8goXSAKTgudMLhkL1iz5xttRdTMfm2",
  "key9": "5Ls78Vch2y1kMLmLtsCv9xuD625iB1vJ241c7j8hDaPyXupHbuZJGfBQ61ZMQBLBT5jPRR3qUabYnSj45JtRGacu",
  "key10": "2DEh9a52dwhA9keD5tnNiqfFd8t5MY3Uffp6fYgxnaH5zCfYh96CbbPX4eSYKoHTRyfT5k8tGxy4aFpF84cyyPkA",
  "key11": "3cmcpQcu9Euy8aebPYmjobLA3J82p9ZnjixXE1DasG1QPPoQFEg7RS9aR3yQ3MxR8pmiWKeB7BCCbhwrfa8BYHR7",
  "key12": "676v2wUhvM89JQbdZrCs7KGLEETqQ5rEB8ja8fxV2tjy6PUaaF4te2oWVzTfsz2TJhQvJ4N7Wg9m8iVNBvh97igK",
  "key13": "eKregBd33ZQfAh2f1s7wCAiDyc7jVPMzXLzLticaZ22coXYoMsXEkWvfkr6WP6eLG5eqYpPvoE2TbsQ8KUZsJwk",
  "key14": "3NFJ2CxoSNy3aNqjJSvkZ5E5hRNzShgbaRSHc8BaNFVn6pu9a3FDLzuWCDxkhj1Zf8Rsr2ZJr6h7hF85LzJpxSaF",
  "key15": "aWWFdW3HjVpnaqSF2MwNW4WCWtBwBt3HRxneYqrwP8uVxCmGNQm6LCHfTrd7YjqM2z5Ur6umaebfJEGUfye3MHv",
  "key16": "5xYCZwkUAyDdpeHW54FDYndu87W5tgrRq5wn2BE2uf8VjmbEiEo8uUN7gNhoh4QWKrpYmRqEgLBowHe39rrLMLm9",
  "key17": "5DeRB3mJwoQ7b2cCZucuafGo1RWqzECvC2Z7qhSMu8hDzVGyTqWP94XaTcupgL99xSga4xhSZf1FwjKT3savjWrB",
  "key18": "3NXfJyD6MruMrptVS8CPo8vJGnScbpxaGEih8YbCYBYAyKaWackXKM1JPBFvsPkhPENPoXA39jA2mgntrQteg6RJ",
  "key19": "3M5wzXiTjHD3i776LnkRLMLmpVZ5cxaHjrK5eMbQWcXFqHCgR4tCfadDS6iESSwQeWBM3qaFiEjnTcADnYkcsMuz",
  "key20": "3VzPLeyCAyGqGweFkUFPzdoEuRRiWDDEmyLbcGGr3ynpjCEg8Dd6FMfRW3UGRGR2hwgr65xpFRM4eeKU57buutBE",
  "key21": "4e8wnddRCDbAKE1Xu9neW715R68ce9wGwpiyivf3k8uK2E4yBij9BzpofUjUJNmom751tSinRaCm5aSaTxEQSqXi",
  "key22": "QwPACNgt8CFAzkD3r1mR8mBTXJz4abxmm9B9jeDa845skqAAAsWJs6GhF1Vsv3Hv6RyzvwbJbiMqsZ6X6YXrAbm",
  "key23": "46eFTySpjqN2JE2XeiPWkvHdxzoCktBxhwW9VDHQykY3bNoW4ZwV6edWA99N8G4S9uc9Y4ba8nPWhryiL6ZvU6Xh",
  "key24": "4LYGnKhgcPH2uyatMFdjCuVwWCs1oAGX42v7jupuCiHAXWHJcTEmxQtyq2mxPrYRHuHQgidsobtYBPLQ25iE1Vp3",
  "key25": "5gC5QFeosmNnTXs6nCAEbCGSFZBkDcbH776wuaTvoE2tA1V3rY7Gsuy12QzWaJkXLvFrvsxEwREwSVufAGp3bW34",
  "key26": "5NUpL5YjVmSj8eaqbFDp6pWVTxf2FJTLQjDoi4fPYddPsKW5JRy2jvXncKFKJ1dVZdL3DHQV5oeUB8HsA9xDXSaE",
  "key27": "3MyYKPxv3JG1Bovvd176fdXM2k2vznegSgeCi3NwquiAPmqzRkQhZbpM4g2HRCZxmCcpnxB7MFWB9dqBLYjD2Zbr",
  "key28": "28VWSVmv2aEbxoXwmGqgCBZnbYhb9wM6hxndL9deVKaeVss4MLQq7CEKrKwNzqdtPYNyxrkn89QZNYvWixHJ2syH",
  "key29": "2BywabMjdwqH9LPywopDefmgGBHaiCiZKYDQbrcKmqPVSSmzC4U6bkruoF4381imWMvogLqwU3hcqQS4EJSSYczv",
  "key30": "82sM6itYRwNTYQN1KxH87BdMmgBvUHF3qakrevdbMVXgNgvfPnQo5VCd4VFSak9FzfacaiiCFBpsapwxWM4m2Ju",
  "key31": "2fm5AzihScQt23ZKNk7MnNgzt1vGWsk6CHeUfEY4twrj5XfUmDrzYGFPC1rDF8WizCMtRktmpem1c8JNptARExmj",
  "key32": "4FEWZuTnUp9H8qqugFL84wB6gqGzysUBXDeEDx95J5YvSVcUW3xj4Ws6Q3y1Tzd1bE9h1zGUuxkmEx4GDRTsL8Wf",
  "key33": "5tM4R7ZeBub7C2hDnMU6HKtpADkFxSHLNQhDAPY4aWQ1qx29WbQiqodExetLUVYrYGwB5TatiSv53uajaeiUDkKv",
  "key34": "21wfS9pgdmjYFvc4BCve1HB4vMCmPLDfuCDhVyoR1StHnK9aQhDZdRR57x925K5mw3ocUZtEnNspqeJHCNaNQjhd",
  "key35": "nGSoqyaQGq2D6oeDqSuUz2R3cusn25P9WwRqDNdqAhCDESjjCnAqgb6BTLPyVGjUzdPD2QrL3xXFu6tZDks73Bw",
  "key36": "43vDRrYvFQyuSNW3PxBqthShHrf4Lp2T2rWXKTHCbvArDze1mUiDrbKdmYXQ5pZRR3WXnoeEyHeFZXzgvS4Hcya9",
  "key37": "2S3DtD1AS6LqgXSGA5dZiXyUJz6mkzgdy6kHmgwbz1g8VUuHBDSrqHR7Pfg1xoyanRmbdq78hbQM3ZkcSDLBYMoj",
  "key38": "W6DTfQNPa52ECX2F6uXDtTXmmQ344ELN49ZZR6gnayeDm1Aa3xVJFrtFD6n8FuCCpC5mavtP32MCBTqsfFruinA"
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
