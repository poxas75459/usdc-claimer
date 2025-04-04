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
    "4jGfaS8BPiP9PpyJ15F3WrAN4XMeqLMwFRBvKXRoCNJniT6DJCRQUk8tDNQDxJkAuNVkRUw4QPGauPHSV9X3tfC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D2qike7RQH7a36b6hX5asNKdXVgWDnAciS1Qmv51uf4pfeXzggNzsAVd1BKahSujpZm4qaz3femJ5RMvxBKfB6p",
  "key1": "5MykzrQixe9RMiijfTcsEU19ATyVzzqM99mYtoL2cfvH9ppZGpSexpnUVAMDeS9mj2PvF9kX4WfbUDizydhaC6NN",
  "key2": "282z2BZNG4TerGvyJKDXk944DgXMM6fpWmq97RmHhJot2d5woDJ3dYqvuT1YKQBHQpHaabdLAEtCmcxw9gf9KNW8",
  "key3": "3eBh9sEmM6KcDmaEks1Vo33qDkpcx7JbCHeHMVLzU4ypoZdBjVwdgn2RgFhV5o12zjTaSSu74KgUvicRAG9vh3xr",
  "key4": "5kUjZaPeJXCkN8Ae9YBWT9bHCdBsAzQYSiVJhD9AnHi8dgdWpaZKi97zKCWL5gwtfmccbPeyD57xZAhRLzbRGBPV",
  "key5": "4VYRj61JgRjYvE2PEGLV2UzSqdFafN8tkm8JUCUSmfNt5bAecq4HFbXm6JQ8BDDLwJpRUpkhC9DPZyR8cF3HJVQ4",
  "key6": "41ZpNHS7hdHeo6cv9anY8LQrAJb18UPSpqnCmnrR2Zqwj3ud8Jgubz3nMXERHieKgP8QRZuN7svZBY7BxDsbrBLA",
  "key7": "4Fze1Fev2A3szPJoJDJN98urNmyH228r3U4Jcw5Yu3fQAnbVFCf3SPcWkLNPjnSnycPeBgoRMjmq2oceGUKcVGGx",
  "key8": "61rs9mpkE3Dr7RryEbUEoqWePv6qhqA2YaWz8nB8qzTmZtp1LLj32u76nkMxGz8z3qAAF5aaZoWTzq2bM9ocSLKo",
  "key9": "48t7bsN6zBR65FW31k5BNtNuFTrNi2qgaTQmVrRfdSwjXtpdTwcXf2s3WJcW1ReLasMw73ZsbdZxrG5EnpXfNpn",
  "key10": "4qF82K8eB6XCjZ8E42nWUHsan2hQNMfyh68XQfjVFFodTw9ahx6sUAh1X9WHgeNQnoearHQ37FDqftddBaFzeaRN",
  "key11": "3rAG2DpBokaMtVd86B6j4LV2hAuAdMJWHwiPgRxujtfiTUPm88ihLR5giMoc7gQWePsjF3PKJNBRDfbRbRvorGRW",
  "key12": "5BctiMr6ev3GC9Zye7hiditf7W5Cx8pKsYgny4jNc6k39dMf1TAbcbVac54jLTNCMuK1wq4SUBBdv8Xk5QN8Cvvy",
  "key13": "31hC5rsTYBSNHV1N3jSiU28TGA56kebR5h5A7YLvyb6X1HE8nXXdYmfMiDTwFfTJt7FtxWemQ7g9oWXBr2Xohi3U",
  "key14": "2YYLrqztru9PG6WBgVp2vXbJgEe8BZeiNeTi8Mu5NAwcf8LdmUHLDKyrESm1LoucvWLiqWFnXoXMz1yctcfhCipz",
  "key15": "4ydQC3YmoBe5HhAAELrSjCi7LW7NmHqoxDa5uN8dNrNXvzcv9ay8sTH5N1YWCUiQqnCnNHFp2wiTR9djVd5kLxtQ",
  "key16": "4T7PWdc7dgPGzggWkM5yxinNyB6spPe43Hxv5gzCHDoDC9U3UNRRHxr2ndtG5bsxvPor6aMMENadMVJUL46NxVGk",
  "key17": "xgDseZU8kkkxafQTwp6R7hxKtiw5BsmHzN9Uwv4juNEQarYJqwX7nU9T8kUyQBtTR5rt3ymQahWpSQaYpmaKuaA",
  "key18": "28GYptDJqJqYPkGfQG3aB1Tg1Vs2puuQRJ4fBE9t4ttBiH51iJ8XPvxXh92WQbWdwfpgiJ4k8aRfgR58ti4nZSBC",
  "key19": "acKtjtuerwwf9KeEKg273uHP9PeD6s7nD7E96jmZzMyr6ewiAnMKuMKerJoTyavfg8iGQXZSgGVWaAFP2g216WU",
  "key20": "bvEffbCPCeGUX9pKLfzA4oJbpBYiYGDSVkYdoQ4k6xH4PRELzJGqkUUUs3TroQBQvnzgAminupideU5nuodkCxS",
  "key21": "Svwvc5xjasTBn9wgVQAUbmfzCSuqQ794a8ewzDCaF4GJkhWzHN5ZFKe3MsSD7Why11d5VTwnpojQU81W8FQhtKR",
  "key22": "5a8w5XM4r1ryrk5kWhhtX6GBzxQC7b1hw3jMpXvdtLrFfw8v9EaGFB7VwnHftRQ2M873yWcdvQuXwH3o6E7wLSV9",
  "key23": "54G5vNooPPqRxJ9tdLbdrdWzT6icZNYfLR1JfH9WbT3wzxsWM25cSiSReFfxz543JRzFtmhyxAoKYsTJgc4SDYFZ",
  "key24": "2creXXSvQz8p5oAi9UzdCKqwMtczVeCtJRUwathpGKK3oC5vMuaTX48HRAxVyAwRBR6vXs7XXGYYDkYuGm1xXjeY",
  "key25": "33BJs29GRwYvhqcxdAP1yS82szKxUne55hXGHz5Bu93FmrEQndroKJfAzbd77JNxod972nDgfyM8Yn3huU5aYNb3",
  "key26": "jCAi25Tz4vHpwSZec51uQ5vgmVGZEsJycjnCb5kqmb5j1QreaBZjuQDr78vpLVB373ZEGHBUTcy3YmHCLMEtU4t",
  "key27": "3bcxT4gasYfFoZXMvF7RfmgpWfAaTiFsDDFrYQgWJhWCsAzNyGFNEo5of6GrRgm8V3LAdvWWwPu9G14EneunZCZc",
  "key28": "3T4uh5BXRmakausxbgGuodr89Y771dexFvdGE5miXZhmjA6grbBapwMFtcMGpNeojQ64km8JnD9ZbyMF4tbuezBJ",
  "key29": "49Cv9kbfRfm4LecNcT8E5Ve74H9xggU3CDTi6SeEpjBbH6mSGtMyZ69cMuZ8yNT2b37U7msZ26e9DqZrA6wbcVTQ",
  "key30": "25fEagMohCGo9a2wkKLq6jB2T95Tw9ANVv4dFx6Gwo3JLohZFmowCLhRmhhaVFBU2qYcssPwWiSQB9s9kMP6hSii",
  "key31": "5z3N8tWHvoHsR7WA7RhFopNw6XQgXCmNPMpNaqWFUs7zL3MaTRUzMEGcD29h9AKMXWNh4eWVMhguLwbAi584Rwzb",
  "key32": "PpZ4fgexCj7ymRGC65KqMYRJn24mADdCWuXEz3nVhSJdDAhV87T6SUobfkqzuYaqVHvsfs1roaEzs93bzDTw8KE",
  "key33": "2Gva8bNpEi9enxHgkkufB5m35SMnwWDejsJtAHV7zAWTXPLRuqi3eYTQcEpt7mvtgK7at19cg5UuUYgC2QKDDnbJ",
  "key34": "WwsyZaKvkZpf8PMreJywEcJBg1rSYBya2uHFewB5VN58MmBGsMM6UrfgGDtdfQnCXTku9Tg14QtDcRk35A8Awc8",
  "key35": "3dvRBKkjkfr6Cz9RtKRDv6nguMB9kZ2eVzgoNoHJ8hLqfPcfhHbG5iwjSHA4ZCFFnesu8FwM6RbiLJsCzayv5WaU",
  "key36": "3WcDYHAeCYBMutAfHYumiMeF79MQUshaGPCqvjLz75C4BDH9QQUMqt3sDNZyrWuodxfLKsbxuRSxTW1yhkcxvKJj",
  "key37": "4vuycYBvpozjU4XbwEQVRdN4RUMTG6Uko8Tp3GfhvpigUAnKMjLvG7k8hnigx3XECAtBgpYobxKKDEUVFxuP4HVv",
  "key38": "5bMey2yCcP5M5XNb2ouPPEZ57388DPVQH9Dc8qZq8cb3M3LN54z6Gxof2Bkt9X83bTChqc1FRd8hBGL8Y37t4CVm",
  "key39": "3BSXhhdzXn3HfMk3v42eqwy9oGmDsadscLeZ6B9X5RDdyY6VTBhawKuSEXjrcLPxencg5ATEtCbyPuy9fNGmXc6D"
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
