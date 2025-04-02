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
    "3eAjPcgnp2qmcCumERfnaEetLBKkRmAKaxFixi1KmEEMNs5PYJZXjUmfsUpJuikTvc7Szjtzy4PmKWD6LJLaPH6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AjD2b7QrUhMYz4zair1SjfrXBcp4v99VWanfjKbXyHWSE96cWxXMZSsXcKX1haVULmKBSgJ5ja4oB868Xsipngd",
  "key1": "4USLxCsbjq5LLrPcWgnvKrZpG6YH9v3dhQ3vDosH4F7MAafBBSZZNGVhmX51PdgkaGurqpqNhW2ZbhneRhsPnW7e",
  "key2": "5Ns4qjhhyeheAeaXL31E8rsa3bVaYEi1ZmVHH6iDz8M2AKvuhtbqi6epAqN3hjG6anGzrudvDwA6CczBxA99BDac",
  "key3": "5ovhNDjiSdaAieNC7UvrVJEAgY3SdUBBSHR7VsbrrbcHipkgHKtHxYEQ6Sqhbsmc13VWc6dKopUDHZtJPfsWBDmW",
  "key4": "3HzhXpBMRDzDKMrVREPHDBFqL6q8dJCgRkgxJH8hWVgjT1dx3oLWa1NRNMeqbPNu1CGUoN6h3Ka7rRY1PDZvEQVG",
  "key5": "3q8CdTmSAF2LhMZkpV7FVzjAvV3U5YHbvhUnH17j8d7P2q2JwyL9yu8JivQKjsrBaJjJtpA49MPfPrbGXgcgoy2g",
  "key6": "22CYR6ZMSpk1QHestq4d3JtwY9u9urKh5krbkv2GvNPHPd1vbgMo8V7q3uAJkL1RGGUayD4ceZKZnp41jDKBbt1L",
  "key7": "5ywJaSLT7jxqDEK3bJRpGyPJAZ1EfmodzbdouvNaPKWhgeSpoJ6j78CpSDc4dZDAVBbUjhNn9CzEQpJppB2tTRqo",
  "key8": "2pGTB36zVYg9iAfKm9NZNxPRUDEeY4RL6NGQ7AgPKyC2xCZ6godGq59eK96jRrNNWUJugujW7Kb8iEeXe4crPQgE",
  "key9": "2AsT1nsLjeSJSfMWajwmDb6PhxGkG8WGxzm83EwzAJSFkTrikcjxSSfmqLxYDvAHMMkkuFA1Fq4ZGQdnD8tUi3rH",
  "key10": "3qu3ZKMngj1LAS6Hh8iW3LUNofhPbwgoNB23APxAsi6AEDzon8E2nk5VtXUdB3BvRz7LYwgK1kbp6bFLBXiPsTxg",
  "key11": "5rvL12CHzhGtRcWjNQdQyed9ZLrPV2NxvSqjT3e3eJdEm38n96Tc9Mgg4fYwTv8EgHi7Sqt5PMKo3E1ggVqYuABF",
  "key12": "36YbpypfjSSzs4iknz6VFRfd4Q61EEbHdFLKRrPhzTNn4nNbbhbhKMdxR61CYzBWZN1czdGhkyBEggBwX2ACPmSZ",
  "key13": "TwdaNXi4my5eB5CMqwQ8dQxjagdijy3YPw53dbbRz2t6LsrBxoKsmycMJxW4kK1cWzw16b3RFmossBSo4TtRNxx",
  "key14": "3GaQbJ7C9KAtpPfYp5KsdQeXezKhU4P461keQKh8jYJaUyq7eXmXiU1w8nbTyoHXH6LhzhqiCSZtz18xyXjBePJu",
  "key15": "4UWjuAWkj4pQKpX531ERn7qcSJWCho3LWofGvjA6PpQnJFY7b76hmuhW2hxzYF6yVn52E635BwD2wkQ1n7nF72J4",
  "key16": "3JtBba1XZhqHdNXT8e2TTHsVDQ7vUD5TL6qrRtN6uNtUJwMBvXdktNiRLnQRxtjKMUy9diF1dxQoZUvQgcJc9bH4",
  "key17": "334G4ypFzj5hqedPQt9rAH4Zu3SnUCES7FHaLoa4wmxRaisEQk242uGdapfGPd9tiZqVnU8NnoycB3Ewx6Ewe7d8",
  "key18": "4528RcgyYGXwg3hbNZGAavD8DSehNpjHEhDGZyTzSsf8qYAGi1qFG8dPkZnx9ojW6JRAfT65sc1qyZTw37DnAiHb",
  "key19": "5VxzkZz5gTKGXWzfXsmYG844apmGWRQzR6Hc5YMqp3ALPGBXY3D5n9UG9DMoGcYvQk87tyNB52nSBQkbmJH325jP",
  "key20": "5dfkTJFKoqAwCnmQaYaYgYXgCEQ2dzvGG5DjAx1uaMGfC4o1DDCjUTVwn96nDJfBbvbkd2g81RfSjWhpwA5tLfaA",
  "key21": "eEUXAc1WYmTotZH9caTYitg7fm2VsDrs22Sa18M2E4VzaMVEvwvdkND2sRKtauw8HPDekXZ345t5XMYUna3o8Vb",
  "key22": "5CNhSVCRhVcjS2zSJygHRaosiPsGaKwSZ8rqXRcacjhNM9WaVbJSHiJWk9KGTdWKFjPJoA3LxMMSeaPc3FF9brEe",
  "key23": "2iPR4e65cQA7y7ZHbzigikZYz8sAN3RLFRmuC6EjhZJDbpVGvXh4YXVvEvBzUMYFfMnuv369xccRNuTkfZ8GKS59",
  "key24": "4xEpBpQEzfRYEcX2LCyHz4ajuKjXi9KnbmEZa76jiYyAeoQzFybT9qBr39WbQRrUMRc3BnT3ZAMDtwi4ohhp5eEC",
  "key25": "4AiG5fz6t5YPZEho2ZveEu8GZfkjussHvWYgk3MjPr7BVQf9GvGByCSPMkfstXQtmG7FYqbvYg83ECRbomyPSp5L",
  "key26": "57uNyfa5QMRdvswhe7toYp63sE7pQjST5SyvQAgSQjtN5yWUycQyxsgdgUgQyv1TRsjjYCB6tvPbBSs1PcFc8KdJ",
  "key27": "5WdmNLiz92AzUfMQofauTumnqK7oHojFFm6kyVJJm1q9pHxbRX4pSZPiH7cdoManMWHCE51KtJXWs3mKFzfzFNTx",
  "key28": "2FyhEVx8KeoemQCvXTnKqPEJ1HZCEdXfu7z9GFp9zZKnEJ9DMBj3fseJ5HPha1RANigVXKCz7Gn7Lh8MRREV458V",
  "key29": "56vL2oWQrsjMeRAge9EQJHcf97pFZ6JwHnuC62qXso6e6KHPH4gahVW2M1Ndtsfe8K3VpAFtnBzuL9zfuzuwjhji",
  "key30": "CVcQ7q5VYHknZsAVgodsEzoFgfFTmSb97nABN5qDNAfttN9cEVcf81NybL24NbY8j59MoXRUfeYSwaj2WWbi8b6",
  "key31": "37G2j9DJqTFq123DHz5Jf5JDuaU88Yy99LS1FLssexcABeouMescH3rGE9RJS8EhnF7wfWe97NCMVbWFjiQ7rWkV",
  "key32": "5NLe5nnah5rRDnYzg9r5uoxzP1VqyfrDASYGcdu2oeGeTpt83VyEnGHX2G9kKDBoMFK1qES3PkJadgnWs5MQFZDV",
  "key33": "4C1Q6WQYdkc9269U6vUrh9p8rcbhnTuLC2byxa5uXHCaHK4q9z2BfDibhuGdhmVdJXKgfRhsFoFhAXBLHQB4ixnL",
  "key34": "4TedGLbE5CTPWEHPEGrNvcTi5R1TPPYoXLJC8aotDqoAxP3uFTk58sNXTHHvGYFmRWd6DMesfkcQH7iFDpESk9Um",
  "key35": "2e7Dn7Hq3rxHyU2QAfAjgVQpDbqhd8SGC2xJhRKrS4mWa7TPPogcCRuSAcgjLJCna6VWPBnSj6ckNhAMDZQHJJyu",
  "key36": "554boYHkeXaXJpSpGoPXRYpHMcoNwTeyDgJYRdDg2GyXr1F27jYXQ6aYEqmEFCaTEVkt5RTT73ymARzWSHT6x7Vv",
  "key37": "5WnhLSyuGxzK3fYFrVjJTv69JyxiX4fFXZEKMFyRxmYqynX6z3P8ew4Rwkiuzk9K72rXtN8bWjAQnEEqHCmzRkXK",
  "key38": "G9m8eaGj1HecPUpcazwKLeWQ7XtAkBTo7y9V1SvDcmYxrsoydt8tn9kK8m8S8U57q4CJUfEjFtG6bhBTEWHfcU5",
  "key39": "35BGkgg5N48ff43DgmFL2uTPRjrAKxjddWVFtuCYD7tkujbyNKaS8Zo3ZmLZv5W997ThwAPZcq7et5Y7puuP2sXr",
  "key40": "Kg49Gs8mWAzRLyUh23WCLQUZgsTUMaaQ2Me2VTKZwJN1dLfBD3kFduThrbyxLFCQtoXmS42ERHNGbx8reD5NjbZ"
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
