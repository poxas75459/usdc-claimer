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
    "4NbZFnXwUBtR1K5uA8viGEaPUMiaXSVx8HWseBnUSBa88zg8fpKPo7FP77gYzx8i3sp3a5HbFGJfKEsmTS3BTjHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYenMzeBDJBTiyCkAoYUEZCFYq6n3p2XkP6Z3cDizjFPFmoCcepJjrHpc4byixEFyCjZvaPwyxPMqDseM3Ufabc",
  "key1": "5HwsSrWTcew4ACV6qrZuFPV9HF6E3ZSfyC6BYpRV41umyW3Biiv2YDage8vwP3dgJBtAodmjiohSrnYXmi2xHpYw",
  "key2": "2A2kQ42h7j4pFzppCyiyYatz9iz1XPJT4WgWktSgtaHm5nc8ENvv66pJJaWw1WUEePgjhuFfYnQyUKUhuBdCRDG2",
  "key3": "625tC85gyR8brJ294RmCm8dJFo64pqh7kue94xb9ryqPambYvRC2AFD5WzZrnpNRVGtXKvqtUcGmNjhLpjeFvUe4",
  "key4": "4qrFe9vMjovj4DER1uo2JcFFo2Fx7N9jwPLZzyRFXj5WDgjZa7h9mNBJRnudZRNFEhpVK9KeWjBnVMzG3WAsyUD4",
  "key5": "66bJAA57JQDjdf95vD87UuNsZWnnPPUsNtPe5xAKuMuFxCFM7S1WWHbMaka1KRdyEGfjZjxGGUo3WEwomyzA3Tdj",
  "key6": "353dqADiaPnhSNnokH1aojwQQRSTonHwnjpVLx9oaa1HNr2mrYQJgbhmGvoeLNVLDm1Ao9yizD9tuXD2FDMbxyRj",
  "key7": "3nbSkMfaQLw2SpE1S6hpofTwLgbkvEJybUmYf21xxJ9NVTGo48HVeH4EEne8PYYUvwEsqfgoZ2xaHh1mWnX8uuE3",
  "key8": "2TX4eRtcnc9Zim69rNGYM985Nt3w1KdxhNVteQwY58scRBtjkQt1hNLTEGcH3a6vo44MUHmhFfwwDjwaE91jQdKT",
  "key9": "3oeX6CnRwtgxqDu8Vk1HaAJcJQ2Dq3fguoa9N72iBFhx8sni685hTDyAerMkgLGVGSbFgqMc1LM1G6F7zKjjJaKD",
  "key10": "45ncd7EaZPMDgVmqjijo8WUuKbEknZi7yioQ1Z2NLsLhfdTdbULwZ3RKfQxmdZAyh2fUJR5cJ85GEeN1DFoM2z61",
  "key11": "4sWUD5VcYrCmzdPHDPTej7MeqZ5pAJFKJoiGKSDt9xQ1rMSr5UkRwpZ2ZVN6yuixbnBFE1guLU9T2FsvMNShDXoN",
  "key12": "FgfPC6ftXi8xwyMFkNtBqQXts7nimvogHtnWMyg5pYpaVDFFiqF5pzPueEwMY39yTKwCfLR4r6ws8p62nkfnXCk",
  "key13": "2iZt5V5saCpAcArDBLWD4ccx5DG82euhoq6GCb2oHiw65EjaA2kY4hXyVzBR3pcouY4DQbzJEPzU5reyuLYCFPQn",
  "key14": "2evQWoKmicYUveGswZRSxogrVBDHffSdhgkohT74T8kh26VJRNqw5QZ9B9WhbFiuUPgU4XqiWH5Rn1T1Ukip2jck",
  "key15": "2uUsiYYpKVAiiKSNuG26VNScoQrtJvnyRpmbEULHL2koKm9z3dJQQSoWQFv5KBUhzQU8TmUqKAy1YWaS6FdFmAWs",
  "key16": "3zv3TrNvkEVXUHLW9WqPj6tucWaWsZWdStW4Yg8tQjYy2Ai4Q7m2aZLyffTkgLbnMt2oFHx2BzQJTi9cKSwoXuGc",
  "key17": "HbUyDFXfJKM9QsMc6Ydbb55ecaoTrVVWCAADJ1zMsTZkho3j8Xjz4mQvLXAefgreoos69yagmh7XWnnhP4U5BFf",
  "key18": "2dbwdZ1pqquN5HacACE728yeYmy9vVHT7izt6MAGZi8HSJXazCWWCZbuSogWJ8do7iST7RKPEovZAWXiymu1SA3A",
  "key19": "4mvPkujjUzCkWnBWkCzeDdm2F5R5hrwDXMPeayfwHdakfx8FsS8arTWsbJR7RJWobZL7mJsxtAtzhVY4rT6zstdo",
  "key20": "CkQZk7bcjgPWsijshqzqePfQUkcaddCez3xWQEmCgRLxHZWuyo8WrvMuB4fryLR2u4CprD8PujATWuxtHxFoprw",
  "key21": "4Yh2R5eMJReCRD8cL9YAyrbYGHFSGfMWEHahks6Z8pAmVdCoVY6JDrijS5DwGArB1R2GQ2KWsreLNj8LfpZYuoo7",
  "key22": "2dgG4b8rhX6BueTZrzrW8gy4PfVizcZV5RsjZDZZaLdJ9qE2LvSGQc5ZoGMynxrpGXbJsGKkGhp2GnwxkzbieKsi",
  "key23": "5CDbsAVi4hPFhvSTjp9AX5KpaRU2xQL81PtyvKimcRq983MVpt5UWzuLAWtpVWbAWnx2o6bPL8rkAzB5PwL79goW",
  "key24": "QCUALiTVvRiW8Qdkx5ToAm2evfBsPhveV7cr4k2wqehJkviQiZhPp6LiKdjPGvc1VHeqp6zRqxD1q88dic9aXCJ",
  "key25": "52ADTMxkMQsZ2LvFdvjB8m1HsAaFYga1mxzvdPSfhXv3nJcthTKSMsTE2saoTDQPapHDNzAm1mbU3LpFkPF6XMaa",
  "key26": "5NaWkjV661JGZnVkfcrjb4pYjmKLNgjnfk9cZHFPYPCEkpby1yB5hGV8K68gZdKELHHNNhNHdULLrMMsPwewri38",
  "key27": "3LdAGWANiVv3cioUsmGLvsbiJzdJg8ic2ANLMKKUXqaEPJu5to9YFrf3aazZxD3i5jH5mFBMMJ6fFsYaT7wFrv4Z",
  "key28": "MyVSAhUnpHSAWXwJUfkWNNeuFtN4WavcGXcBBz8xqMr99dmBzzHdTyCV8vxSdN1ZsFpe7eqzHUK1FCAjHmUTkX6",
  "key29": "64NKo2vjX4nsi4ahRguSerUZCfJeCmw9zKpduAmAGJeUmxG4vuruhAUmWhuRqX5dccLRCnRHELTUUJM5xbsWBbwu",
  "key30": "C88exSKdxHwywMCYJQ2fhtfwt5YjsnnuVgAnpJGmEfNrB9XP7RCYyBXGjT9GmtyTd8Y7aEDSCwbrtqEuQhM9xUE",
  "key31": "4dzRjFmVtdBeLHiseuhjjTy5XWpeDrvT1wVWevMPPQfDLtEdMgsKTWNHuPHxL2FigHKJLBADpK1wiTbiNAsAP3uE",
  "key32": "AB6PQNui8N3QA2CMSoJ2q5Eky4TyrKCfVH5uAMB5nz3KKumPVmpXKFnAgMvBFD1Cm2ivJA1YYQGRbzpuJeddq8J",
  "key33": "2DMSBEGM2BsnjwTAcUsZpgYKqvwuD7a5B6z8HyaQBnHuWYjSaajtEe4ugmkP9xUGyWBtdreALui8RnQc9Mv5JgUF",
  "key34": "PbEVLe2SYyk5j4px8M6GzMFQd6Z2hHnz1xdQyN2LQdk6RQRPHLdyRkk7mwWTxynj5nVPyRw5RNAp1iMbUQXgzUN",
  "key35": "3PhT6Sa7aLT3kVgHVxorq9iQzpHcTPRcNEFexA3wW7V3WVFWgrphUT6PUvbnzegWDr7CEKntHPJCwFE631aQbAQr",
  "key36": "57jTmduK4yayqFPbjRVCpdAPGxgL3mgn7CP82XcfwsiVUHEUi3JkiCBgHcWyPAsGzPuoDVwRZJ9eqPy3uua6tznE",
  "key37": "yBhMUmfDVZxiQXjTBehN8YKAbkmZmPtUzKJuVCgfFQdLAknrk56qCqR8VgJYTee8FcgHpoWDK1YR2Df9qT99spr",
  "key38": "4MemoVDK5Xqy9JFDKu3zHTMsZmuFKzw5PqnNZbcLQGLbF6zN6bknDdBKoSZwenzfXVLUTixzBj1U9Uo77kNfwtmp",
  "key39": "F5kSeFcze1ipTaxzdUsq9qkMfKuW53aZ86M5qCDSLDzHfi5QJEd3r58E5m6cvpuiVKcmoH3GSNwVnvKSWZvbxhe",
  "key40": "4dTzxQcehEwNVFnPL9bYtkiA31R5oCHcMKRerqCfUzA1gWS9NXG95TTP4nUAp499fg4KcAMyHaJoomcMDjgddXUT",
  "key41": "5VTiEa7uxuNechgVymVthkX3fmEyTLHpiu8xyep8ekUQ4juZ2xkNe6XYH8tnU1PDwE3DDZwCtjRr6kAncBGKfiZ2",
  "key42": "XCFETDVx6djMJhdm2WgW533XERVhRFLgFBDYzUkkGm4NwFh2rL2xk2MqZwGy3pTjSZhE8zYQbs3ikrQmRvLXM9u",
  "key43": "qJcnYVtP8adBYRGQEJGxsGrUV2V5V4vjZsfQNkwn5ukb9PHCFfWCfkGKTfiLARdGds2AZB7C3eXUBgUJJ7Z4eNH",
  "key44": "4xw5N8WbBVJnypUsXqDaU2s3TAf4kC7THWPXCwUn34fqrUE6ozo6hkDNHyUDBKfzzoSEELYfps8HxHyPHziHG3kb",
  "key45": "xyDpVSzmBc3onQZb3MbKeDea1bbm3xqebxJe1XttCPpg9QFJtuNJYey6vMkGRqiRkQAFcE9AoZ6UAs8VowFCedE",
  "key46": "5wv1jjC4Dn8pCnhko2SDwM8X5xQSKA2Jzy1sDg6DQq3pUt6npwwAgArfvJXhV8PdA51ixRQNfmENmyZELTGLeord",
  "key47": "5PnXESWUfcBdjztoRkn1MpWxHrcX7Wb6p3ptckdun18XCq8amkm4ZSCmnNEZjHweadW8P6ELhMZsr8WU6xjynmWn",
  "key48": "318EF3WbSRdyLZPuB3zYKSfbMfJytGWvsTgcFDYm4ZLGfpvAYEJhudz8fZkZ4jh61CyAuewj3Jy1mCSfeqfdrqbu"
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
