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
    "3792jtZn39VYxX8Mw8MmAwauA5fBhBd692qcvyvfm1wJTE6b5CEsT2s2ahdvW2R6sWoCXUzm2LbbbZMyCqt9PgaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgFY2pbBKE7eyKMTQ4TkZE7S8En5UMf3Y4dmzdgW2UzcsN93JaPHiPn37BfSdhPyn612V3A8zhCdDfinTfyzW1h",
  "key1": "MUPALQRgHRfgbpZAAtDpsMaPArbCRn22qNzEiCWQLy92Vs6ks6QPRSagvVFdmkq64MgaqDZ1jNJa5MfnFi9rrV9",
  "key2": "4jcCEnrscFSGfBhNCxrkZeZ5we8USchVcVaZJn567eDk4eVZtUbCdzmPM38YMA5VKBzXZnAacJxtiunJK5gB8j2W",
  "key3": "5aSzsrm4PD4a6KZwUahu2HxgiWYZ1kbi2SWtjF1fVFXqvPcnPXDCiXZ6645jWbdsCUwC9muWR8CuhTEDToG68471",
  "key4": "39cqNmk8nTbMmDCKJB7RkxtzsbBwxWbx9rpiyQsdvarFdgGykrgArm5gUMaJyajPZbrRuM4uUAdwAY7phByTd1NJ",
  "key5": "ZtvbZYxh668mHVq9Q8UAWUBaPWg6nEVw6qcUaJDdmeqGeN4XGN4sMhbo29KspdFfotrwWE6bHDQp6FW416uZagt",
  "key6": "5ZPnRqz7CLHT5VNn2x4UMbdvpnW8qHJHmyF3hTKon4hHz13U8GFXTpL5LScAAQf1yZ8ZGeKayqaSAV6msefAFmCo",
  "key7": "4io548ENsQE9tmxv2U5tdLqdeF5HNb7wariB6nLcTaHyCTmw5TnR1xnAms9uJEMjvppHjmPQEzEkbTjbNXijASsa",
  "key8": "ajuZL9s9YF1LT5b5n3VwZtbFBpx8m4K5P884XLr9toPEiDEdWpS5kZy2qboCXoFhNT4onhc3e2ne91cZExr567b",
  "key9": "5T3VaSK2oNgAPJMpTevqfGF6TVVBNZGhSCUEEZxc67qazqNe2BM9LgXUjbjMW3DyP2nGV5CfbzTXs9Pr3z4fuBGS",
  "key10": "49tbHA11cZ2P1w1FXJPbudcgmu41CmLYGU9VjDDs4BivkEfyPUJ2sGCk4RmcwhnzLVYfRwqQbmJL9omikwWVAMZb",
  "key11": "4NqmtVoT6j1D7rTU4912EgSgo1CB3m3JpxjBi5Lwh4s2Vj7W9t1oAxU47AzGBDvyYS64fgL942SRpsGPm4JxpzDQ",
  "key12": "2dssNiPSti4UXsTqNEs5vwBbXt5muqEzWPNqm4Sa1zSo2AYGqJAh8oHWFt7RA8nJhVpEJe7oiNLc5iuQmCyCLLoT",
  "key13": "2U9LUJ6vtQ7b4rjm85veaYN1f3MLVQnVXUfRV2ThrcpNZyBcna6zsiaiYpjShjH9BdMJPMDgDyWYday9Lpr6FXK",
  "key14": "3z2nqm3Eez7yudY1zhLQ7bWQz5cAAsPPpoYi8kZRAaptdfVsSH4mK85EBYfuvmcGpdSVM6t4KqBz3EUFuZA2cY17",
  "key15": "FfUYodJSUyZ1y7jL4b9Epw5S13nFifxK5Adv3RHDn3SH8h5UKuLp5qEQXvpKimEBb7KtK7iSby81NUyqAz2TBaD",
  "key16": "5E4pmRvvVsTm9J6p1do9NvN4XtypJxE47bRU52kPxAmcxmSSCgbk4SXwH7xYVQBVoXStHnQ4FB8tjjcJyjaLd6sR",
  "key17": "39Wa1eqMtsLFZ2brP8beeJbbge3fzsuFi3A3MbtLLtkwbW3Y6WnRvw1Lf1FgtfPRtPPvY7oNGdjabhxjRoJv8L61",
  "key18": "67878MJGbo6gFExhr8ywgWAXWQsxby9ZApdymdar7JbK5LmUgrzNN7CEYikHER6BeHDYUXwed5PFYitQtPSVvVe1",
  "key19": "4irUj9rPjabjDJmdzsd2Eh9WenFW6nZ98EPc3RWnQR4gYmiysToATSciKZWRtp4vAQnuT4EGraYAsthjvu8gNHaq",
  "key20": "3tYJuxJg7srNRNB56g5skfDWqoM69p7B28m8pq6A1cXgQuszCgzBVkvxLoD2T3NuFB8Q4XLS3KxjdPTCqKKvuEc3",
  "key21": "v4Ymm9CvkGFCz9QHZMLkWrjmZFD6iRzTyQLm5347VxQ5kJrnMpj7GgfG6wnUisXTWs3Tf1hTkGpdp6d26gcQDqJ",
  "key22": "3SRGc6VJtijwpwPq4FaqQrhWnYHxvxefoiFsKNjW2e92NCAT4hW5NN4YN5DrtfmSF8UYbmv5hsy6jVDhDRRKifNJ",
  "key23": "4B27kAZiHNeogDF3Lbqmc4jLMtFekCJXMPHFZ642t385x9ba44Gn3ZzwQHFuEGUpiiwWceBDdXvAPftvm2yHda3d",
  "key24": "2E2Ajvko7JFuSZATDHRMYbXWTqCLwcAx8NEpH1a71rAucWsCuX3bKtVzK175RM45Ywd4eykTqqTymvXYoLqKyZGX",
  "key25": "5tRq1YQ6cjhLzd6TSvBi6drjXGpn4AupYoKu1ZFMHSqarC2qjyyAJxQ7Vjg8kZ7PJSezoxcChvZegg81MNcmvDPe"
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
