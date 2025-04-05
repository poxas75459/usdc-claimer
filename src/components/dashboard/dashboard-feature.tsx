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
    "3fcKKWGwzq56zo5Vq2c6bzmaykUDxEwWFoNBhvToXzAZ734HtiEHeEhA3ZsmT7fVEMRjrjWgGY2Xwdtyqy6JqEq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qyq2Sm8Kczq8JWPpX3TRtWhuEodo15GhJZDb15Av6KVALsmS25fqgFaLdH7cJXW1v5p7KMaEEFE1ESQmkzQPuuu",
  "key1": "JzNKwmPT6eKrUQsL1SWGAsKGYpTvJKPXQ6Hi9raP7v2PzKwwhy1mmET16zH7Cv56PWFVYqNtQK4jLQPzBJaHHac",
  "key2": "2b25krvifa41wHxVBfiXhAKiArjBY4b7ZjHiZHaRxjxhyPhMWktnestNPBN9vML43jDPpuabuZ3cBzuJ9RFotdyn",
  "key3": "5nWnnB2RZwLwwkJDvB6ewAvEFVMjzWYqigtd5fiZHSpDbHo6kTrjKMrtkjxUG8hkXxMaUcUkQBDj5vtXPymDpfAQ",
  "key4": "4ENP84pvXzt24ud8ZFPgz85MxSXAieBWLQo95HtbHqAgewGby7KpkayawxJECo3Ws48ghf8jMCmKHSEJuDKm7Aey",
  "key5": "3iR4TbWMDraT2wqBAqUgpPnyKzVsFbaFEbVbh3itU6iFyQMER1h5jcpgpy6QNwKwUNX5Efr9GwZ2K9pNXKpLerij",
  "key6": "2VvD3Wc9onBY2kR4ymkH7wJwP7VKHrkyc23vtBqxyyvYwHtKXH8cfKfTeH5wRCYpPKric29svdsQY81Qd7ixMteh",
  "key7": "43qZHXAdaMhGvPGLgDUUXfqG2XrNm3ofCR1W5jFLC6gv91Kj11g3SMcCp2R7Txy1vgJwsMfm8itijXHwa2f7a8TF",
  "key8": "5LRHw2x7RxRXHwF1XgDYKuJ1qUyxYQKonUZ1VJmqgHWoakWncx99HYBXrWkadwmxAXcQnSuW6ywcvBnig7Deiqmm",
  "key9": "678zwLWaMWNGQKXuaG9CazWVoQLxq9Cbmm4W34n6y7g1gCepqug2d2in1BPzNiFHVPWZdP8LDphhAWkCdsokdpyg",
  "key10": "3fQAsDK8uGsyDQE8BpZxX8KaTpzaHidVG4sy4KTQecx5ThDvL34uvUcW5wyg1hUT1SZ5aFTcNGt6h1MMr7dqVTuw",
  "key11": "2rwG1ky8CqUHvwW6BC4Xi3XFjQQFhBHTS6Xf6fokZx2H3Xi2fqGuReAHpFQmuEscDc3x3kj4yJQYQMoTj9UCMJfr",
  "key12": "dtEmD5TznY7Z1cxfSuchsCYmBVKipKnQkBHeFpQtnZ9BeJMFPorN7v3dFi2TWQY6rrv2b2BUot7y3yvxB73Zwhj",
  "key13": "2maYFSUsVLxuu8ZTkN9e2qhqK2XqoMp4ZdCA3LTjJJVVvzUGoiLe1DvDqn8UBbVEo1wEAy2qF87aY8FRLd8XnU7W",
  "key14": "5X25NVK3HHdbwvE6paEwqC6MsBvQXrDSmrnh757QiLQRaFakXDg72Ai7Cn5nWShES91gK6uPG8EBMZMPd91a9b8W",
  "key15": "5uvw5tqtRoG2Fq8RhNW5Y8t5cT7fuijDVjR5hdSejQwtfBQzXwQkf1FHDTgDxLFAwYg2L7xRD3TcVKGbo5jRM6pj",
  "key16": "5Uy5W1uBPVk8v2ACfHMZqpnbwMnuYdAzda1q4Ht1DfigYuKxSgkfKiG18rtVJrVzw3L4WmCxMzjmSD7H2D3mQi8c",
  "key17": "3EzR78VRjYdf8dUy3Qp7Txxhph68BdtB3LKDc1yzX6Q6DEEETbyyGWYD91WPgKcKsrmFoquuKLjHGDyix2tJEqZm",
  "key18": "qfLQEhifvPgbvmCBAUvD7UBphvipz9h1i8broG4w4UkXVPaKB88JuFMQ1ehbqfJqaa7ZXhVPGXV44iPdhbekSwi",
  "key19": "2othWn69MMZqL85y9xe2BNWyyRavAckyFqeesUSyDuqApLxfABNY6Xz1r9xmn3VWBcKkWyztEVRaf7eMyzKCy14B",
  "key20": "5621WhrCjDFVZvvhdC5DNRCGa88D4Ve7XgHyn8igsf1kgcFzLyKFA7BNMJPJ43wb99QYTR5WCEntAmM4fDycL9G7",
  "key21": "3krF1oC1CsXEqZH2d8j2jPP5mndziFv6Qrc5CHrgDxTDbaJYeSANaVWrLhSoH6PYwJR8NjKsiPenuxsD1wf8eSPD",
  "key22": "5xGnLgy1wiQhGjBxrHyCDmWZyLU4MfsGbtYBGde3g81mTfnkxseqgvdThhSygfz1F4QLRYAnpRUfv7qN89kiEGUp",
  "key23": "4pLjJzAEkFisCP6YnjRFoAJQFUKTphi1BniSwTNkbWhu3UaFQoUjFmJETr7LjYABqBdjQZNYRHdnjMKthJqiDHv6",
  "key24": "4sxATHPf65Sx7rK94hX4LRubGrcnVURChP41YupgBvz5atbWG7oYdEg6CBZecR4JcLPKGaTi7PbbGwV1ypypDZEt",
  "key25": "3PPUvG5SZVr7GsAZiHGCykWdmkrXPNCAL9CvAuoFnfmi3M5uqsHsZLy8mxoq7jvpwakK7RHub3zoVWFMqQYBhJaR",
  "key26": "2HA215QzwL26S1LKss3X8QRL23QJXY7MiNx9FNMTpGBA8Xds6tXgiLNEf4NVF2QtWRWM9JukWM2H8tN2fUiqhXFQ",
  "key27": "At35EVtkFUvta3uLUNpksh5KYoKYRurqJUxLaQkXkKVbx45yKLkeLqReFPev7x46xBZTmcjvWpsDmy1zy65Lnjk",
  "key28": "1ivZcL5QCQmpqayz2UJhNjkxc2oabY2aNZn4nELYodhpmCMuv7X9hUHvcMFGLCjR8qCEz1MdamNK8y1gru1cyMQ",
  "key29": "2H9ZY6k1kNFZKPJFRHBUgtwReejtENJ3y6gMAPi2FBsJHiW6Nroei2HkQdComVWe6a3PxqZXGC5asN6YuBkSQnCV",
  "key30": "sCL7D8kuCRNnqgjkPRZLfAAfCXrxxs2GjqZyjiNE2Lb56iTbv3CREscTyG3ofZx9X4QHQP8nzdZhwxdxvCNrCYX",
  "key31": "5pLHvzmoXsbK7DzpDSRBrAuRsRGVXokQqeJV9SWGqTvcgD1fgmbVNCGdHAzF8NgyxuvW9E8gkcuXCjBdMsB48enE",
  "key32": "59VRxrRsRtjVPGPjS3EuzhQYRSAJiaaKkKNWM1TEbnfunXE6ZsF68G8cw8YjrLKmMis9hJNwtaGBJjvtZ2vYGF3v",
  "key33": "CT7VqnebDu18KUdqDXhndqm7DmCHiKRgEzyQCUy2R9pBM1VA46xkkxzMXJ6TVGdV32b8qYRPZmq7h1dGzZsqseW"
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
