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
    "vbvLZLn6N5UYHNEQyPj4a4AiXBy91PY4J19bWWNpowZVd71rKYjtM1y7deYpi8pecVoSDYyUs9mHNHQZYjU5a2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CeZ6Cm8MKUr7uoqAD24oVk68QU59kvmdAEhJbEdGG96BeJxLeapYReYZkQxnagqYYkbvRHQqZKgZ1GurbkmcoJ",
  "key1": "N5g6p1ZkaB7yXGgGbWRrdoaq9oQQyMdbLCYgmv2xYefEH38YzEsYQceDQdMWWF9jM1c1ZXw38d7ALrDhM618FSd",
  "key2": "414JVaNtFeJhi3oDMCF4QnFnDsjvKr3BiPqQibtgG2grjYAGAcjnFXEBm27x2AhjNtapVt7QvWNdqYpU2MAMejqn",
  "key3": "e6s1wgmhzTxvzfiUV1PzLH1UA5KhHzXZ5DAjicrZKyvkce8jQT1g1p18sE1PTTXX58GVunw6JYJA29k8yKk4WGd",
  "key4": "3MbBntk6uz7FqP6LvFoG6GepTfZLvzGc54ABqq6X9Hy5sFpgHCivA1vpoS7tkeucQSrufxCt9LJ2jHbNe9BhC1Ta",
  "key5": "xqMzbPFE98UBvyTyk7LNa9V1nwmBxMZRGezmEbcp8yUYiikTxvdWYVoGHaSn6ShWQfzAiu4sgPcF9XYwCpnRAAT",
  "key6": "5nTCEhxDcur3oCs2jkgt7bcNGfiDNrti66hD3B1yqZsAjcunSH1Vn2GhGG1eveUKhyrs9DMwgK1m2oH9WNpxFzd3",
  "key7": "2SeAE5M44VSHWLFyiy8WgHrvc89vC9P1DW2NuTZHjuPT1peDyosocxvosrqfdRWzsZKeFkSsYaEnb2gftADgoyHK",
  "key8": "5oJPkem9XuStdDgmjEjKcwisF83LerAnndn9efUMwV5ZYn5a5CpzPP9PjaZgdsjT7urmsdVKcQRS3ePe1gtejKtZ",
  "key9": "5Z7a7TtQr9MXuM5uHd1zW59miCXFvHmx8cx1Wszh1TmxKA1aK8VGnyR7gsAwtsuZFAjStq8DwW2ViJ9sC5x7PVzZ",
  "key10": "5HzWGjrpmvFqfLagKyuGwgGDzGneW7QFwY4tNYFtQ54nzjsT7qxdSogPDcxGjx5iCdbnKfCijW4jZwt957v5tJiH",
  "key11": "3qH2eYS8AcjwqCTR2o59wzVwo4SH2rciueL1mSsUiEEJfHFifECecBny6ZiWa9xoY2qJoTymYXmrCrjGMphfhpJd",
  "key12": "3sqPsDfP1r2xaLmg5izd9TyqAPKZ9GgZxVKsZjMpny7c1Cj4y99AsvUvU5zrJtVJYfJj3TnXtFTmCRkdk6tXFghk",
  "key13": "2zQhTg27xU5V36X6MkJ9cVzMjMxcu3GciTyJtRSioEcC4ZXnrUEED9mEibqNLy3aiWQGs6rRUctSC7yAorixAEH1",
  "key14": "4NNUNM61BhpsfWifdUUmvAK25DgGYG8KkDLLto9j3yFXjDwDr2rFwDYWZgReQPaWWisPf6dWduBBg6JbUsZktQoC",
  "key15": "FCB3E8xEu3fG7SEJdZqpE6DWC8jDMHA4DQykp67awxWegwy2GbPSnK6UDUByjuCHHgx77jf6NCTsZrStQU1hQyL",
  "key16": "4c3Qki6qcPdu4HoAXCsXDgrfwyhU1F9XTrSaYkBKxtrq9YQwBKMTVd9iifrgDNFn3F6feYXFyxJLNZrhKoPKxx9j",
  "key17": "67L3mLsaMB25EdoqnDu6KMZSrNMA8QpoU1CgUbLG6PrgGTENttCvm2WvVQxpQYeZwd4LUZAyvzpm33r2HpWvPFv9",
  "key18": "67FtGnmPJjTntGSKTiXUVpgZuQLFh7QBvBFSxxewYN5pbCdWxj9wtwLH2qRhYY2aWLU4GmE3W99hMEQXF6FQbU8M",
  "key19": "5cPCNU4vjXAmR2UB9m6vCsqZZnQKJ56ks85hwPdYLW5dZyae1UvEfFYeMG2d9nizx67WFqbpfZYj6tu23QzE6HVx",
  "key20": "4B4kT4k9vLiukQEeVSnaeYbroLUCiczLxzNke8yeqsPPxqAeqvFox7N3MfFn7w5GoowMwWKFZnixnCKwibdziQH2",
  "key21": "3pXLD2smu8kJ5gxbL4mgJmFaj3Mz3HQEktKdK7jJ2QDvMpuYnHKZcNbhAFVXBXzej4f28eydwmLTBEg1YJD9Vmpv",
  "key22": "5ZibGyS1jsDfrBugeNRy8eKZKQDkLtTb48PZ1AMYXE2fBt4mydziQujYMGc21RoghzBxvbzKzEp7DGEnaewLRXnQ",
  "key23": "5bmpswvAsJF8HAbbHGKLQwVNnHHprRCoBz8iucbK96kxABVgYjXUCcjC3s7qftgnXaUx5CzEFQr3akDKtaftCknt",
  "key24": "2CCpgX3BVdBkFJuwLMXmygRvW1funiwGpB4NHkTi92hpjeicLkLA3ama1vHFDGNoS23mRFGDG6V9KUHX5KMt9gaQ",
  "key25": "4qDzHVrDpmEWHXxHKdQTeugpjxfv3DEFJ8MGJLmBnobVK6tE7c6zq8PtWjuymdkxxQfsrrWcsZMKXhuuoRUNU9Z2",
  "key26": "5yX6yBQ3sptzzK4S51rodcJxegZYDccABbmjRnnyni89NLSXn9Dpd18btxabqKyZfL1bqcFHqQ4KH1rEiMyWmhmq",
  "key27": "3625BaUgqcgi3kjQKDfn8RwQb6GFVEvH73LmQxqja9Xj3e49RrHus4taYg6zpBU2jZwBBzo4sEWBPkTXihEiDcCq",
  "key28": "2tStdgf3DwtjHJQgahMSfR9V31A3iRs6Uzdcd48Cw7Szx4a3qTkvYtBsKBwi6X6AD8oZJcgBC28LXBTbyH14yNJF",
  "key29": "3KWyd1roWijNxpMoNLbpEUpJtxRV18hYFrdntnsQkRpoaQGLJxGLLD21eXnDajJcbfkKCGDfgYcBf6rmT8j84dPN",
  "key30": "27N5YpkE9QPNqnTHzX4YiwfgRMZptFwVsuwovESoHrtcRtk1tvCCQPNABuDVMbCYFUtseHfm5sVj5dmBadLmdcxn",
  "key31": "W2fqrSytPsmh2gyBbrEbRgaRix6MLmCStRgPKQe4dMe5HU55PzSXphk451HtWV95k41TRVGafE1VBSfNph7biG7",
  "key32": "4mZhMtTm8Z7ujAancKeLahDXhB53gsmj3YKPWLBPrXr2hFCfrQnkzTV4kag8XgofkFEFsYzmUXTf9PLoJ1pGPcQC",
  "key33": "2S6oQ3duwCxC7DAyE6564eCuf3NgDnh7R9qxc5vykGFHM767qu7XoGTFFBwEf9AKCGLMDSANcvP5QKERQJhoMmK5",
  "key34": "37xaNbHVNGbfydcBURBZchbq8QEpVEv9XUuLka3LuQ9ngGiZX8wucQHpWV4yNV5CKVKiuUMf14yFgiTbj4ysSyMm",
  "key35": "KBJ652t7yhhC9xAP2qfKey7cCCtT1rJ6ypdfT8Ewkf6dhDXc5BH385ALiR8Vy2AJBjTT2zZpFuYacnBsJw33bDJ",
  "key36": "2cdPUP8spAgF9N8Wo2FLwBqapLZGWDBub9xgEF43KMGpgbNLgjJnD2dEtxJbme17BAftcyZYonmPJDLareB1dRai",
  "key37": "5i3WZf6Pt8zAqVDEA3u1GVNddsLU4nUFLB74KZ9tkH4CrimCv468DXrMwd8UVNRQh7E61NmeS3fqrejCsZgM1Ctr",
  "key38": "Nyek1AKScPWc6dpiJY2Z9LVVXdfTQZZquLhEmC4KazbUPbDGnL8J4WraVT3exvFAvDAdqAJAGiYwf9FeHYZrdFi",
  "key39": "3qXQVDsUh7JtuuwFxtLTJ5xYQjgGQ9bWppEZDzuvkoyRdHniQWLD4TVwAaRkDuexVz3Z8r77E4sLRkcrMCWaWz4M",
  "key40": "2n2rCxC3Cm2yjTrETaqDHgKDvAiM79uH5mz8bxpB18vNUhrHryScVPJPidXjk2Z5Agf9wckYEGVdi4mfbToNATj4",
  "key41": "4MCthz5joXk19eB7ruB9v41sn8CxjsG4Q2kx7G2v6nusV6cZqS9sx4XVHp2ex1Tr7199NLJTPKhSNbgZkZ9K7Rad",
  "key42": "63gn5SGsGqgEXLH9c5xyGCQzAFLY6YbQBq2AyT2q4wvReUY9vQzy7U98mRjMudZCsnLgQF4x9dQsAojKwp4m2Zh6",
  "key43": "2ARURMFFN6S47rSQwUg5SJJcAjNhgtET2bnLWULHGz7f4he7EsYpSNGWBfG8UdPeHAKag6TweFD26yCgerjvP8Dr"
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
