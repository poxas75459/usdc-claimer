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
    "3MUHpix6rhifyiPcAwN9PTGEyxqoKwWNa9jR3fkbE4WRjgwqAExatj2cMg6u2NRJfKWSXw2ozp2svZjjh5ikJx3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czibWsMxkyJvWS8bkDvmvKDsbExjx9gNqM4vbJxAD8Anxnha55qBa395KGdpnvFhuELXNwhrE7nowbzvcy17ip4",
  "key1": "2uXDuJCELqHkn6JsH3SvSrSnaVBwiciSJcp8e1EKFj4DDZg2ttEuf9eeJGqc68GJgY4K35d6u7eg5G8VbQqaFt8s",
  "key2": "HUxMdsAXYLMjasT1xMptZPftFZckMaumFBFJJN9DWNtoh8Xnzg5VXKNMECoJnv1isfWu1WEYu6zhTdhEEN9SmMm",
  "key3": "Zb3qC1VzaEKnXBAQR6b9UaSEgaN4T3sN6zF9A1QrtBi4xYQokMM3Qbm5HyP5ZR9BC4nqyqQT4Ufcy69Ch26233t",
  "key4": "4HJK6FoeU9xHMmc84HLsgxLNMemWn79Xkf7n97yYRYWty5ti6LtAqkq9ScVz5KxDNJZmgZQfgi2fvkE5Vdd9MHKF",
  "key5": "4iaszRUYeFcawH4jUcc8E9PTgHiSqazWc5nvg5btWwJey1UgDkqnCmEHuSw4iMy8yXhCav3Bo719TAvac7YhzBgb",
  "key6": "f3r1dND9BuwfB5rsZ3mfwkcZyAwZhkLmhjy9B2SZtFbsTwxKFcJ7Cp2dnN8sDKADeAavhJ2eaRoK3Jv27dCjXQr",
  "key7": "3Efn65vUrkVQJnYbTnGVE7qgwz2ru7GbWqnMarD9mQTVx5DSM3o6jwxwvC8EPcb43M7EA7hPSkAdYuzzpVFLEVz7",
  "key8": "4vyEoMDkhXrG5gQtjhne9aQdhb4JGJCnYdQLW71XF4qfcdCZ7dvfkERZbkoXqSM1pB9tRRgBqT2CuN7jB3cj7rNE",
  "key9": "4rkav85fyuRnYWzhyRvH3Mo68bPG6WyKFJSzLAxv9dhEAbfA8snceTMkJ6WxPedtmVdgcCdj4f52vZS3xBWeszAH",
  "key10": "4NtNGfpfGDV6J5FDCgYu561U38qYKCEWZSyno1vVeNF2XmBZarsRmvVKbhgpAKbtAEFByyyPbkfUHBJpvdvfSvnw",
  "key11": "WpVJJ7PBbxR11dZWXYPuD3qBKgc9xcdU6FdobRVJKWR9esnLffHERfuF7mgiGZGVfWFYuT5m7GH7soDjZ7Y8SLb",
  "key12": "341y2DUgYQU7KLMKHHjuKHYcMyGcENabZBoBZXsp63sPov3gwFrzR57LUyHWwUmevDJDLY2dGEaKddRMEJUEezCJ",
  "key13": "yn4TF5cZ1ZkSpdBDbhS2rMPt2GC6pTjed3KmwEk6oNPErfvm8s4YgZinAbovLWKv5gWxJJRSxM1zpLJMVitL4ec",
  "key14": "5WLqNdGj3t2YfZ5TQXbDSCQUi85fPMq54S2ADFXKzCEVNSft16dA8qNkXa6kM7oJ1aDtK56DmBcW3AMM11TeHvg8",
  "key15": "5H8CivwtpDuWys12uD8ap5RsCN6HBfCCjg76MbdyoVKCR9xSukrcSbTpwh4CTnAt5fnmuRRSpoWp2Javvy4xZ7Az",
  "key16": "618PJAWDP1AWtPSePjz2hf92ADzCHXvZ9ovWM6SzBMtUCyJ78SuSwgfGELPzSSRm3s6hLZkYmYWktkAdZX8x6gKe",
  "key17": "HPCWYS672NAwUD3ZkBKvFKfrNNBkkeZ6ZJ7rkNDxh2JVddmVENircRxcYgoo9o6xFpERrDCdmpwFNLJEmfPjm4d",
  "key18": "2scUQxyqQeCtNyVF5hcr3AoegLmbeEAb2E4DcMqKNbVbbiXfpRy5XPCJdebLH9gE7EDPUfr72JSxAVtrxfLEUTKY",
  "key19": "wWMZ4m9F7FuCSnBpfaaqtiRcdVuy9guSAhMwMemG3Ain6kedwZ6a8hRL6ntn4vo7nT7SfGXTFK8gK1BxuE3ZPoF",
  "key20": "5Vz4WPCduxRvo267UPoectzLxJRUw2966WKwmUjN17LDDWzdMacL3oAftyqLYHF6HXtFAxoXH2LhdmMHVDNZofTR",
  "key21": "45mDarF6HjDvXLHvCVvKTQZZSUnK6E9gbEfmjXGQzmKND3hPWJvBtuagC4SwTFpz5DKDwBRQH1upjz9QTQMi3yhU",
  "key22": "2j5TZxxevfb5jqYrr5XkX1sh7XDfykLC4wfzQSX68dWYXP49eAKWsijbi2jtYfB3aJg7hE6KeQUKJ4Yvw5ugQWxR",
  "key23": "61LB7522UuSVNwoXA7i3xBhi3rRDDSD2F2hbnmDJeAxtZCnKdf8obnwT9LmkVVfxcUMBUFWV8FcedkerqHNXeVyN",
  "key24": "5NWUGpQoeA3KpJoVBUfgVN1NADbAtsMJRu7MFTw9Smy3w2c6vkE2M3EUVLvoa1fJaqaT9TsNxD472VCbPopVzDCG",
  "key25": "AWHFVHP6BJXgUQKPaSaSqNFqZt7qwYmEUwATgtq9cKMYMPQu7r4JTGchhqx3gQ5ErkNQ3M94x2fkLB2VmUDyDm8",
  "key26": "2X6gfXjc4G7hSCWQRzXGzjHtkPsH7JrhaWRn6f7yJY812T8E8ZyzuENPW9M38sr9yTxRmQtY5aDfVjdvAXzk2Nig",
  "key27": "2adzLrXvLMWsqP4cGLsM93btw2pxwJScgHbJyfGtMYQKNYxjzu74SayBfVogWL8f4CJcFuPjNhgzvvnphztGTbHj",
  "key28": "5AQXHwjEiDnthKGKjUjFzNLsVspmWbqCVodXD9F6jtHpxk85yXv4Ex4TFsuf82g4vB9ubLTykJctuNxMJsaaPFMK",
  "key29": "3pHsEsDtY6cwM1siW1PBewcPnMi4WsvxnmoDS1caYPjNe8cUGuAs5GrZGszLUwNHACk6dgWafZCBVPH8JHYtrVkJ",
  "key30": "5qqN7aGtfPU6RsUmkYPYZSXw9m3JU62gw3U2szGsBg9tdjYXcRudXFDpaiv4hLgizkN1s8Ud893cgHUdgt2qcX67",
  "key31": "3ytq87bBtHAkD7jnL9uW1CuD8auJxMcWhVDCgcCeABMeJ1ohvmwpaS49XdExoZrLrmuTd76D8k6vKB7ecYBxPmGw",
  "key32": "5rnoKUE2ZjpUu3MJHSKK2Jrbs3yvGmUmA96fdVvwhqDwWLs8aM8QUKRcGqzd2wEyetE4nBUseTaQVoSZS5kHrrUF",
  "key33": "v13jKvJEaqiLhUfAHUjU8Y7aiuhxNvU2v6LgKF1vtbyzZ5sVx2HA3LuX7SeXMuCJSi5eX4ncmvkDMCxdJcC24dy",
  "key34": "66E7ymire4AEEw2yddwNVsWwUotrhBmqAsu6TU7saz8tg1UiANYAi3pXLWqZHmnp5w6pbF2Ps2uYdTDy8JqGc9qQ",
  "key35": "vg5nbQ6cGWVtF22riL7JzN3Lj4LKCoUj2JdMPRNEhQ5bJXBNN5zPYMoqs4Zp3jbiedfXUiMurhT9gVTfxuUCpTs",
  "key36": "4i37EgDnPrySisSv1PrrsE2E1hhL9FJRAMGxujXvWtbH9yLnstXetvHWNVA9fRBVw7h3JKcKrRYuc8fmho95Ru7x",
  "key37": "3NnRBX3tiPskbofanuG3J2m9V1wy4t8KUXiWExSMw2h5sLGzvaRzRLgn2py1ab2ecaCvDxSdKvKQtr9RoyEUVhuJ",
  "key38": "4PF4tXGKuhji5LxhJ5HC69zZfnPx1pByFFaANdmUD42f2naeCKsdmjYgQeiLJnSM4CkMmcbJJxzyHqEyDn8KFZty",
  "key39": "4cWvHCYpZ9S3ysUcidrMifytzb1A14fU6p51sr7bPdePgRefmQxDQWVupVeYqqMC6rpg4N7tAyvuf28U2DuaVquJ",
  "key40": "4qERsCWnXyPTYPiajVNQ3AN7zKPhzwbyHTRfNTgjDWrLoy3zbgT35ifdS4U37EzUPBWmp1AXSirdK9uo7x7zuuNU",
  "key41": "4zZ66uC7xDJj3rtb2E1YsQF77e56Z8uYiRjKZTaYgEk4AU3AfAq8G6NjRYF5XEwpRWWf7VX5ExSsa9wuTAvM8bJt",
  "key42": "5R1wvwcXM6QBUveEgU1Qc2CMUgjjdAc25kiZQH2LCs6mxgkxveLXnJN7QuGbPM6G2R42ScoC1JcivkB9Kw6MuQy6",
  "key43": "5mBrmsQnPM8qXWGVH64pQrEwjhWsBbUKJMmhWR4aceNAqPHafw46SMMHeXXMPBYLDnDgbZ4FPDegdYLq5avW9fhD",
  "key44": "34xBHyU8TdrGyUHJHDCEFsk5oZ4L2sAzfkSk4NezL8o8DduZcd8j7B1gy6o4cRDhhzBkMN4J5FsEKAU2vEHSKzKV"
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
