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
    "aQEvGpDqzur6fjiuAtkoKTZxm5n2ZG5WoPNDRKPJLzo8QPwiGi74fSz1JecuMauRhXsJNe2tXcqUN6qzsjc7Ux5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FCNFE1wx4DhfW4nNQfGJR1PTRNGvW1Bd8t683jWUEqEVUwV95VHLKa59Pr1sijW61ZPjwMNmvq8r5Kx3VdqKS13",
  "key1": "4epqDWRL5t2ZRrniQaZn9oyGscwzW279toXyPbQdM9ynYevQZQQB4t6FjgEBxwUbN3yz1cvrCtQmfKExoLqVKAmM",
  "key2": "bu8XDtzA1PDoJ7ZepgDpTLDkjoCnrZ5dJ7w5gSGAh7p7kjmgCRcp7vuzYqTaEA7KfuHv5rCS99GXZBrbx5pr7H7",
  "key3": "5MUH6GAvfFNfmfBnfPboZFBfUWYA4z8o2DMkh73NAeroX73qJ4AiF9Ha4uoNYE5YS8DFRxev8CUipcjYfeXBMy86",
  "key4": "MPJ2EQJKjKb5pk3FMoHjiAg5fQKa32ZyGsVVsK2DFEHQ7ZEmPtpAycBsgoW7P6XYZZaSVmqnrJUSPqzqvBNwDRx",
  "key5": "4XgVpW2WxbuRkghS227HPjo72RUoiMzKq2cUM9iuqoLKiABkpWUftof2H5zV4gHEFQLUTYgXpHuyALq9zfDxkERi",
  "key6": "39ZGywU7MXBgVRTeNPQ2UhoqHVzSAqVAqT8E1tVJ1Am1T6cXnyYCfaQSHr2fZvqcZFZhBbA7X2Pn2aeemaZ5xSu5",
  "key7": "5LL8cjXjJj6LQFLxKWqC9d8e3iwrn68GKEaNmg1t8p37HMh1mRCDJdsGZM9gsATGjkPqRnTgRR99C7MkWo9o7yM6",
  "key8": "v8YaBAD2vhKbSUJRLn5BGWaZDgrTLDhQGVqCvzgrk1Kz8oM7eKCYw6EqnK5j59Hq4H5dXkZXzf5m5ULKiCyXg3Y",
  "key9": "4q8rErqAfC6KEVFtqwn8pE8nFNzYwXWvNG5cgF1Yp4R71ERvd7s2SSRiQUJNdvjoxkKNZJhd3sWwbA7jw8VQBT2K",
  "key10": "5vq3zXvFwYTbiFeu7JPpX6VmBuWApUJPfGcGBGd918cfX398sEGHDb2ufqBtyMQtXs62J8jXRBZbgRdz5Gt13AVA",
  "key11": "2oVUj4RfEJEgojKJ21eZBCryKJi2dFwa5xyAjjao4iijifQcFuDUt1qZARreiM9Jtr4aaDhxFLvjoawRehtPgpuE",
  "key12": "V1GtZpjk5FaQuPHWkv4ftvVXGVjLEE3SmNiaCPRctv7wznReHYKrwBkRF2w3ZdUhXfK3K8H5Uf5Dag2d3fCW9gV",
  "key13": "iPFvohqScALRsqit7fExJpAEWAiM2ZHUZcHRwD2ABVKw9xr3zPwFNSucajxFfqkYE1G7JwNUXucHmbabnB6JLoS",
  "key14": "W7CwAMenDyDDY3fVQhx34NP3QZcsMfMhj8nUkKJkNwv6d7oX7jCn6UVb8tGGztLHnVfMBQYkfpYhpEfVTPRuCbF",
  "key15": "5GrBPvQwKE6aifAW9syBP6mUK5ZhdtivTfyU25H7ruUSC7A7fjaUn2iLgkTSDT3R8a54GNWpqXDPgzjWfwLM626e",
  "key16": "4aRDdv9b1xkTTezstw61ta5hjFKEJyr1LgPgjbqFswwkn6pygHgKwPLp8EFyiXaiCU9jdkgsrRJmWHx3SyVcVoyx",
  "key17": "52AHgQmcEAFx7PEkDD9uQXZydbX1kKoGdnprp2buJ7MB3YaNqy3brEQocwZQXP7ebGTWy1ER8SCfR5gwxMpuoEgZ",
  "key18": "3FWG9uMw4HbWqrpMmW3QpWZjAskEfrxgDBQVYdc3GNioUePopA744vvbhtsijiyHUrAtX8HAPArBpg7voc99sQoe",
  "key19": "33g5QwTFq8XtXahKCrv5xnrZHvMbxY8HbynKB2tEobUpTgRMq6PdPtxjxQJygfz7vUUnpB6VBtdaDY6FMETkbQdR",
  "key20": "5GfZzXZ9tKEiCc4cHGqt5L3gvv7PkS5gZBzEV4DzSi3XRKGqroYb571mYJrDndvJJis5BqektQShPuViYkhpAez3",
  "key21": "wbmUqWoCGAEoRDzzra6grmgVPqNyoSdiSCN3BE7RfXeQkfrS3yfF9nSYtbMkUpTX1oUWZhQVnh6rphe4LHZrjoh",
  "key22": "fekpKvzTzoCHGnNLZ5E8NHcFqWr11MKq1EV9Pgm2tJzwT1X7Y8p7ZCPZX1rHMKdLsSX6AKWronFTkafrtpemhN1",
  "key23": "616KRczM2anahv6XtsgeoocSrufsAc2oPbhaLDjFgAyZhk2Kmqfr24CB6FqngHg7V3bhqc8WN62qyHxTjQbwtAGM",
  "key24": "3BkQLiFvXei83tZFY4rdDe52rumNzJnkDSqr6XiBxKE378yAN3aGiDbdWNWSM1mkxf34t8oJ25mPv618Yo1wT93F",
  "key25": "2PcVCdELYuGZP84L8KV8Fd1vnJuQkBp5CRrpcgqEbkGV65G8TdjkTakMdtRh3uhADWMPDXtpDbfg4HJ9ererxCri",
  "key26": "5WUozqqpTQ1s9phyWRTTXwrNvkYDZArjsVBH3BqdtE3gucrtUzEuJGJtTEzrFXFb5CYyoLS9EXNhHb9NuN1t5KEF",
  "key27": "Qc1uXVTPyARMUyh1W3SzqvyDb4Ro6HFYP48wak4bwYj1B2qr7sTDdhLHPQUVjkb7WJ8tbyJSDfXX5ocV9eexuvc",
  "key28": "32WR6h1JnzNesj1B2mXESrc1fPgNMfuAyxGhwz7r7bi6uxSf4yvF1igT9PiJEJDbswqqBbj4BCHuQbEARk4ew6qq",
  "key29": "5Qmj3Kc4AAqLpK1S7wVjvMrTW3x7rwEU3EzFHEmb4XxjunRzRzy6MF1nBThJ7NiyPwqcGNJ1UQApfJyDUT89NDbA",
  "key30": "5VZRH9Y4h74G7gQGRikcycEGN8BLxBpmuzgRGTidAg5fpocqbUKUxxKBAo4hhjXYLjCKJWRGtaEUi1F1yY4enzqf",
  "key31": "37s1nGCEqKmE8fGdMd3tx2DaEp6QV5Xabx5PYner8uvEehy3843AVvELyw88dU9HHrFT7XKxxyhB6c4jC42u3Xv2",
  "key32": "2MfgrCX3RhqK26Vx9MbE84VeJzkjCFvkrQByEMx9W9pnW1Ey8EVa1e4v5KZsBW98RgWjscfc7t3ZivSvUndrRug4",
  "key33": "39E38s425GJ5vs7r5hVLQi1zScR12onxZtWRMxCzKFGJ1LKFZ5Lp2y3wkD3hH2XJMdnB83ET2FxjDEbFbVDxm9PP",
  "key34": "29tgv6H1N4mUoqRXLf8jR3s2tfrJADvWkCUEFfGvadDKrcj1rztxbCR77WCzYgW64uNuJYtqbBMHLmNv68TtwWNj",
  "key35": "TMEZGePqPUPZGFhBYXz6cogKG6JXkKVYN3TeD192RaVZxhaZzBBEhGM4fKWMQdTfAQXqkH9ps4an9iP2ac26VTh",
  "key36": "5FNgNTZDBVfYRvwpURktwtAAHq6hHwScQEiF9iAnyNquH9donwDvstTiNUKsrvAhMtcGTunYjTQXDc8M2QehPeXh",
  "key37": "3Dq6qFnbJQFX36S5EAU695wPrFDnrsXPvmVvA8iq1a79FTJS4pqYxyTqG7eNUK7EZYSreaoEADCRWbAzWEj157JQ",
  "key38": "3npZKZtFb5XTxoVq28pegFzPi8DgyoTmZejm9YGTUcvB28MpvWrWProBjFmFpNUUxQbsvETFHETCbqZFvceGsH3w",
  "key39": "3TfVidrx2qMPumSfD3LAxDCZoMRpXi3CMZvxnQsFbvuu7H4d4vYcpMdbNHk6mhJySuRrg18tqhRH8rGuPnoCf6jg",
  "key40": "33Ed452Rg8zh276wGfsNCJ3z36715d8cCsL9c31PbwP5VLUyZnseYjRanaLe9NHHsDHdy5wSnAhwmawDYHDy1B78",
  "key41": "4BoT545BBA5Y8j4hA1aApk4zk6Pu2u8u66maSB9fv8DLXQzj9ZVdT8rHnnVtLeJ9g5Lma2fzgYPcLnuWVNXtyDQj",
  "key42": "51VYt5UmgR3ZqQh9Tmke7rcLannWuzeWDQAEvALxwncAvz8J6YmYRURzRHnhucwEv8Cfs1iXAwrKoMFpg7aiHXuP",
  "key43": "2nzTwuKX1vyjQdSVAgLot4ScWR7pTpsjRfs8QQiur74wwPzXVibwmta1hoLLQFUmonJ1Ah1twDMHTuxSDFZRKW7V",
  "key44": "243sUmkruPESH9XkkPUfKNHQDH9Cjgmsp3v3ecFMxyRHiExfsniEJ2p2PvfPDPF8s9MVUxAECbAG1gd7fGsjjci5"
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
