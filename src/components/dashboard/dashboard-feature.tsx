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
    "4oLjtN2cttFuEWGNCpJRJz1xazMUvFayAxddTAK9dWU2jCYDEHfgaARZhD66F5NDdTEeLRZMkBFg3dQyNnXbjT5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPDQ1FP2KGCy3RebS9Aw3NZGKiRMPeWfgWNYENjPptpk2ceN6x4SdQt1B7vZA1HHriLR6uC3i5Q8BHHUdwpi9tx",
  "key1": "2yYeuiYEqQM4bCamSprMY4HPnTgBEB3M8WVPe3U5gx68VMuxUAekkTTR6Q57g6rjcf6segShqgNUcbTxJzXtDFd",
  "key2": "2hA9FCJTGhB6fvLzsvUg2Wpczy38jgar5dGERK1zx7GADTmM9TrjCtRpJbfiah3fqQBjSanAoNNaymfg1dcVdeix",
  "key3": "2s8t5AdDEiS7mQLkNfPChoSBXdQDKjTYjmd4z76Z8sS22xskiTkLfwdKRxsQmiVgXwkB484oSv4UefxvMg6fkggZ",
  "key4": "5MxqTprT1fkxsQWv92mhMXUZSTqR2DTir5NJ92hJQiQGN3Bfc3H7HvtUrYVEQy7FeZEDz4pvS3DWQQWuScDKqwd9",
  "key5": "SyFgustKHCNfMwnJbT9vypVH7rDhMLVJKUAXizf1ysFSUz7m3FBc1q2DfWATdEwV9vSQg5irTxixtF6sQmfoKwB",
  "key6": "4iLrYBDJWLoMFPPT6t3cA5UaU9nYKtpTvE4poxBabm3fzUY5NmdWiQCyNntV8cPQ6Beqc9utkCJQLVwWhJBYUYJz",
  "key7": "XYhDEegJjcaEMmWipFMJN85rV8RcZHGkbZ7LTic3tDHgDKJBavSm9aui3uV8RTiRqvp44wL6g9TkbnKThtYjRNW",
  "key8": "28fznbcMRBQzMj6GZpNeL2MDFdi1DcvNoYQh2WGkY6bZWbpqsCDUtaXFUbm33Nrqfnepsbky8PgWKE9shzH3oQoR",
  "key9": "3dfBckxFbCiAuKS6QiUe7CdjfBqPaYhNKictNDncK8sRwwgV1kqXEjBd9dxg5HakLCWfYq98DtJeQrGbu7GeA2CZ",
  "key10": "3yyc26MG63rNsbSFA5bz6prpgMTSGLfvsxVHvouvfjDxnsQHv2g1h7rNjnGh21SrrKDiBsVuKvLPBFoqpzBBst35",
  "key11": "4H8Hgx7McgGeXUfqx5tbhx87KrRD3BYTWD8dJ23x3vfJiRshnMiWzWHd8PGe1MPvdoR8CLDaJKVEEgVy3AKCZqzy",
  "key12": "4ukc8cjtFEymYGxoEFw3EGb8zVrDHgaSMzPY8KG8khSws8Kp8VnepsiXTPiqUrKz23jpLx5vzk5wfcX4nmZ3fmsb",
  "key13": "b6dzYcKZic9ynhQx8U7BTK2YhSb5TWvVB5aMmH8h63deFp92FwJSgkJ8JKTC7qxv1znew9Rz2u6n5ncfRK1nRZR",
  "key14": "4e7dpERPCcJYMQbsZkJP4B2FAGpK8nNqgtrsoSRcbxqVUM9c1MqFPaiH13LmTspTJu7sQNp2ggxkhFMBcw28M6xk",
  "key15": "XMEyVExH8z2v6uL9cJUhS1g44H6CmgXgmFBL2cJ3wobrn2yNgWh5rmWgxYPFrqPknPmWxNTS44FEQDV52Uksofj",
  "key16": "63mvN4k5jxzr865g8VDSgt7PJ2UhQqejCKzJ2HR94p84pr7m8mfWJ5rpWCuPrNB6yeSHCjLYZLFX8ZSdsqYyE3Df",
  "key17": "47mExQSWsBSNfFKixXZ4oMq3MLd3YU7RBQC6dygMNDFMYjvXB4jrVkb3Br7PSZ4tK2fcjaeUtyxQkqU5x7e3bsMC",
  "key18": "64wgUkaxBajVJU3wD5oPSfyuLiKXPTKgfKu4Ewfza8YokmNfjv7AeSC97gQbRYNLdPa5yz5Z7M2xZZztS8ArtART",
  "key19": "2jY3DEc3G7eHmNF2irnDvAQb1Mb1qYfkz9wtaZsSTiUdqhHyjQprqBZG2GxKsc6D1R7yUimrYEey9zfPSbJymdjP",
  "key20": "tDWoWraVeVhjURLh7kSeWikA9x8sxYHvk5cR8myQeseRbCzjAyMJQeRXJWebtwnpBQHZBxJKE8q6di95PfBbrNG",
  "key21": "4WPPWv1YpcuTX7MNEiJHr5NzH4AazPKPyWFeYB5EqLhBzxkgW1v3Y9zoqmB1ByP7uhaP6xShrsrP4NUuiVn3QGRA",
  "key22": "3a3bjTmci3GTZQVgGfUXEDdFzHZDpDoyM8gN34eMizciTsWoYJFLREYyfdDkD93SE4JNNVhL7z5H1mHgA5UU2zG2",
  "key23": "3Phj1s4ChBDbG1FRTozJshFEjCssSdfm3pZ2FWZa7F6AsLgyJHzjP7rEY8oUoEct8mqyrtWWKxAq6EnJDoi5sxGR",
  "key24": "4EcXQGbQhZm5NKjeCQL5MG9XnMpp9Q7vH429LAmQnKZgkqBaMez5z1cWJZpdjLVj5KSUxKS7E1FQ85U12As8JcWM",
  "key25": "5wyQmubYw6t6JAuZxWez4dbfS8UWeTxTpvxNjcR73fmtgxerCBdWkijmXHjb9tNoqTCBoQrnUdq573w45F2JDud6",
  "key26": "4yc5jm1TX9PS17M5ktFK7RKWKLccgmxWNk7EFeAynxL3cRQDMvrkz2C1kpVApFy9FrVjpFth3BhJ1pCoWpNoE2Pz",
  "key27": "4GWRvhePfHh8dxW244Qtwbs8iQvTtMym6oKsSmuhGCqXFpUEZZWT56n4wDChPXSK776WgdRpqfURKFPcDfohiKEo",
  "key28": "2zE4oUSXhHMzMsdb7U621ANrTmtGgdGHnaNDStpoHzba9UqD1iNLBtgjK9p3oV4WnovbKLH3JnPvcEMoaRVjvGRX",
  "key29": "3cWDGFPV2au5dnkHtqjnbzu7FxF4rPLTh6Myjp6b2oed5KFa282NwmJraFyeWDanhnzgYjJSWJm2UuA9GXQJSacR",
  "key30": "4SZ9xVjC9uYTdKtc5qy6eauQwrKZNQGsBy4rJy229VeYjSzAdUBzv2XNpAYs5qPhmJS47S825MnpEuREXPWtBZzi",
  "key31": "5fLFpobh26afofCyPDyKugzv4iCKXhnkVdq93XrfmbqBSVeBqEmRPo85RvM1acuVVw9AXZBwbo6wETGbRLjhAZsW",
  "key32": "5AC8LBtZQRP6d355h15TtyfEpJAjaPRftXBPmZTwYYz4HCwSsi8Eg8cSFq7qtWYP1ABX2Yi7UXgFuEadM21nggDd",
  "key33": "2gxNh6pzc8ZtwVh99hjEEfVzqbGQ3RDTdqv1dq2X6kKfaVrmFbVxvMYiE67oY4xxSw87gitNFUEYexpGXjFAhDGA",
  "key34": "55xz5AxicUpdJvWRNQWMQC7UvLZqj87Gkfrfzvjv38bUY5DwkfDHDbBnL1JgrcC9zaGf1ZZvyKzTxsSchzkxSAEJ",
  "key35": "5ZgQk1wBkXKjv3ZvXmdN3amCiVDAMKm2tVvHkD41mXrBXWZ8BoJZDwKuHproAETPNRcWZg5egJYq2ZuR9ue7SMqS",
  "key36": "5qf3KHsfsjp6e7NFXVMBMNoXwETQyNkxTHA8WFpHpfyfY6VSE63vmAd7x3rhyHyYMnk1dqDgdaag4zZay3Lo5bsa",
  "key37": "631cjFbQpa7SB9bVqV9yyHXw5hncsLPvA6jaPfBbPCMvrJk4BJL8oS2WoyJ7nmoksUSpscb2VrdzHa5uauc25BjA",
  "key38": "AvGsrvbn4UzHyARRakFEaRVHr6eZQoCBLGvgaySyz3HYqs4w6HVvngXRSHeMxniDoES8GutsWZ4sej59gYwxoWo",
  "key39": "48L33VbR9dmCuU1u2Tmx383VcrzUyEGt6GjnE1jT2at37aBrXFiYfNjGdAGDv71YkhDDkEiXQy5tCAFST8qRv5dj",
  "key40": "Vw2HKsBY38ABCVpNRFrcvDmK8hgNfXHV4hZEA4cSjNe8kwP2cfnawhM12FT2ZErxBomQ1Cj3zcV4EmjGa1NiQKw",
  "key41": "4CME9fsndJCYv4Qgv84MLqN3Prhaj6nKJBgwFRsXLt895CwrXoDVcZAYLNPckEEpoaEX573Uzz4cqZY7yKU1tHsS",
  "key42": "2GD3QRaRCw2UEVyDZJ5Gkn4cYbimcuziTgu7hEn8pFyvYLEJ445QhBjMYbdM2cU4G6D8Xfm3hogaTdJxdBEsgYeE",
  "key43": "4PmWAQjFxm2vQBHMvxTvUhEfYdjRTTHjY5ReCVL9Ksu4QnCUDeizMsr15gwAgMTK3o44fQAX82qeZDhLZCqQmHD9",
  "key44": "3FXL6oyX9aCwEDmefvWSncdbDWhqQggqCtSodoiyUGoaPwrozxuqouDbSAdKXf5yxJNZKnaM3edSXNNBTQR2qpEF",
  "key45": "5eG4m4mvhS1GoYD4x4Rgj3rxQbWHu1x5Z2e3puFn8imqi1JhPZPHXrBZx9oiKYgz7jCfPpmrqkCvFPWU9EKKHH3W",
  "key46": "osX2JwdUhgVzZh58jZ2LX1vixCNLUpZPVDi9VrEBTEBJcYpZyYjCSNxT51DQvZjMVTWtkCus7nSbt2EZShXAs8p",
  "key47": "2VGYZcdBYBrST2MDxeo7Bc6ai7HDpP9KFA6mfKVm6RsNWsnVnDTnzRWVKchxxGQHS6EQa5hqBYA7xt95n1iE9BfW"
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
