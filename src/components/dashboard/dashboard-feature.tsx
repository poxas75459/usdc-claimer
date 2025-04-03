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
    "2msWM2a8AeKvH4r1MUizHTdJBptcaeMSHgngMGDWxxB6mfHk4oqaBrcCuDPFWP19FzU3fiiDNeCoWXKU4BkaWZ3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXZYTza8QXbBHuRjzNepp2PNYoargwd3JrNk1YhRzY63iqkj11NMtq9mTy1F3cuefgEDWfm1TxVi2MfAVjnryMJ",
  "key1": "3KSHtUFeyVcVcw4BKr2Uu5r8Xpvik9NPQQV7qdbAHPAC192NMj9PaHMMYCBwhbZ3BUbwvPUWGYKn9NPTS5BeqpMf",
  "key2": "4Mf25JWmH5SHbyTGbVt6jKU6yitVHHv9TjKivkfajKA7yRUHRzXRNJgtgc3ugdDEaXDrdviRVBkUxgyaU6AppyT2",
  "key3": "3oU2KuJRwgFVsjWhG9FsRyB9HzMsJebQnw4jv7aSFY78vUH3BwHRr6FiDi8ZTDWoUEXYzzx7pSa71jy9MrNH8rd3",
  "key4": "5GXM3h4osvWfcaTLC7Krj88TiP2fBFXrSvskLUkT96ehx4DL9bk5qmkSMt25kF97VELpUXyHeanyj4TTD9XP4ny7",
  "key5": "4QyAyKUn3E2mmcEkHiMr9NHFW86EmXbTBheg5jgLdXAjc3offunmc3ZLA5qkcgGkn2vqMYkDfxhRsQ17m29t9cA2",
  "key6": "2eF58WqMWqUPHMSFAA2B8EMrv2e5mEwUvBR7QH2vt7h2r51rxd2ovmmCZ65UqrbGYWNBKHrbSd2g96XSxNnegxiB",
  "key7": "RqbMKs2AVkVmeTLkxHTpp9uMXjWhWqcnjw1WMxGH6uFjQ7vKGCCjvaJ1fLbcPZ9SjZznYvx77DAbCcUm3oxH48C",
  "key8": "3dEZZ9BWhfTUGQoU7Bc19bxVNyG1gbhA3h68tV2qUSYcMoWrEgnRvsWyaP7Vc2hB45zgCJvxgoFJch64fxHFf4QB",
  "key9": "4CDCWG6dDtgmdahqn2UZvyKrjvgBx8QwJmoZaGKoQ7GqjtnkJqEcXS1QEuLxTnUjnydNvrgGooWYe8CFQTwXG2k1",
  "key10": "3rRDNveP9yKzek3PoGzZRxj2E8evrvMU6VqMnL4ehUF6RXMiRk2HuTDRxyuLM3MqzjcdxrZpB1h3bxcPwhs3qsuG",
  "key11": "XZVwu6G9Rn5fcM31Y4mnV22hrXN45d1quRap8A3fAVp2d464kjUymSwTk92WcjsyEuEkbLRinybW7BksWDkwBKC",
  "key12": "5ZMyY44RwWGRxuNLnJzafcUiXf8hKgcFNKkAvECHbZYm5heFdVkgCh6p5nfgektptLgRcfnZuLgucQwn6NRTHi12",
  "key13": "UyedjUJ1w8boSUn2md7zbTMBHmEUGMBoamipRsP4t9Hsq8geZVvTihjW24fEENAQGNuEyUrYJAMPsnLJMn5fNyc",
  "key14": "2i8SE5dv7WvPngF8FHAFXsMoHVa8vTPo3rt1GRbM9ndgywyrayxMZZMhEJBkzn9hKdFppCnuvGTb4Rfdecek8FQ9",
  "key15": "4mwhDqVwb2wbGbyn3uvgSNWby4QKw5SG2wU9QnDUNTwMKRRuBGXWZ3SDZuhw6JdBQmVpfeKiwieqh8FfcAqduXgn",
  "key16": "5GxUTgRchgSeQ2Gqh6DnmLZKW5dM7e6fFQvocN8W4VwqffLfcwDpoNuvnKcEvU3Xd1HFApTRS58ggj68L4G6p2x7",
  "key17": "3dRdBDnzvpmBo7kt9FrVEK3JAWt3N1LoDUPQ4n49pCHEcFRxfhkWHoJytA8rF6ft1LHLwQJppxDQg3SgHyJXmjgP",
  "key18": "5dbSa3vrZ6Py73a2fSUNAqqcQ4YeB45FyVZUFxijgvRXx4QCYz9HAdFGdwKfxEPemRYPpbvvwNz9w5gg8aDUEdUt",
  "key19": "QePMKUckWDAS9mjAK9iZdaaVRLsYtkLm1CDE8eG8TwsBjCnEmf66Rx9VcFmQWXBfoGmNoK8dJmyLWpr5UjSPTNL",
  "key20": "2gL5MgQm3Wzx4mkYf8nLC5KFYBzogW8UMnwcuPra9ewfpNiSkWGeCkPdDVYfg4oeSbKUsfYDykSuEYzC3zNnGMW1",
  "key21": "5miDKNaxZnp7VannS46LuRyEZSXkVfNcEE4PL2JiZB64HwwXBuK7K4kv3cAessvSFF2L2UBLu3akKyuPnK3pnNyV",
  "key22": "3TuoSPjRSqpJuasRWQ5cL9oWAf2GRAFqdBUrb72hqmRLkk83a93HsunNG6Wb7HVkdWrWGQR6NTkUDUp6iTgoYxUC",
  "key23": "5K4mE8xaS2zwP2KHSHzr7pZqs8af3K8bNyY1qPVCUQmyXFmqxprNqnfiVUKiJL2UDqoCG7PFuLLhy8SsndAZ65gz",
  "key24": "5sXYtFpsc2ycV2MAYpj9ES2vVKGwvYSzivD1vwhErZPSen6e8aJmZEbGrcBTqRm9JjZZfeyQfYmLeiSq4kr9Q3on",
  "key25": "2gWGAherGnCqbCnhw8UmEocUnD7qoKpUFvBr6TJGmrfaKZzeN8vf3gpLEcsYz7oSpuEn6j8Utzbv2RG9osVR6wpS",
  "key26": "3BSJwg2fLbXURviHZZBwf2aF3chB2WxNDA5p7TXUdTPpRiL4Q2xhp7Tg8Z3PRjbKFZhmyFQtvZkhUH5d4a3fzqMP",
  "key27": "26KQ5nWQ3jq1CHhXtX3QNaQzdFE7Lm5RVPyHYxA6akZg3EiszDCRDZsbo4qowobnwkMa9CG39DZYdQ1iVUkiG1Ro",
  "key28": "3dqtWLadDpWgpN5sHTp5Rr3yxHVaFtzCBHfnFUR17XjChsXeFRkJgj34hmUz6LptCs7bTFJJijYCZ7uhHgnE6Cck",
  "key29": "2BWvJ6xwWZ5dQfC5TKmPSwiKBYNDMjvmrSGW1maeeEnB1JQt6bFsZha7iGhZAQc3MMEWb1XmXs8z9vjrsyGUk3Sg",
  "key30": "2YQU9NwfJnFJWzqGufcotvBvNd5gZEeaXtM2oszofCtBhisM9FpX9pNSfCuxqcAJqYcvEf2pgbApdyU4Q2rddDZA",
  "key31": "6kkiuZEVZ39Y9WVVSQiokm6vWLivfdMxzJYooRvaqopv23JRPDcY9nPpo9LUBrymBtYfFvKJfWLjSCz3wKRft5X",
  "key32": "5u1BAX7bGoyKFS5sPZ4QBNoVAYryUEphrjSJYdcZShcLGsFh3a2wy2PNMV66r23B2JqNiyRTX3eX2nFJU4KBfKKD",
  "key33": "dt7z4ERSVBY1AfB37g8P3yquoggtC1oaXcSSzXxw1fp9G3go856JNQdt8R9VxoLkg6WCK7UyNPxaJgKrwdhrFmm",
  "key34": "2FSnf4hrvYLtnbtBpHVekL39xsrcXLvzogf9xQ6Wq2H96k64YsSLH27wpP3TBVgGyytphHmZoTPWTjQaoyxBj2rs",
  "key35": "QtaZ8GCL7bGoTRdNsdU4UKjNjRpKKJXitQj2h9R1rnGmjp63Z5phbKG4US76hJxjcom1H3Ha9f6fpaghF3eMQqP"
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
