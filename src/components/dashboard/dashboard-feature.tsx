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
    "4LzqDjXwPNg9REiiEhqF3VMURkiJmuqCY9kSAYwwHXvSof4DX1asSB7dNqmRJccxCXxGYLTNAGzEk2zGnTXWnGjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HSzCdXdX5shXFYAhsbon3MpuQpQdpFVawtjtMY7BQDY6pKkGV7AtSyME8MM6fVxBZ3AcCALSmMbcG9zi1d9R27B",
  "key1": "41UB1Fyf4W3F1qDJ5KR8sbLdNZy2v2UeXg1PMJiG2d4wLN3D1yZdhoYfXyvo5rWz1kxtbCnstPYXmhVMwKqNud8v",
  "key2": "3KpqSEtqjCZo1NxB1PgsHtDqyw6SFiKWzRnbNMZjHgqS9QtjoQJb6rNpvXgTsFeNJGuAWa1pXrBRGTsqB8jjfbjZ",
  "key3": "66C1o45afzZAoZCm6qvWFFymx9yuSs1EAZFnKzyiZchiHLAgB4SFrFhB6yLvcbU3mMPPp4kBnxYgC1h7zDiuAQwi",
  "key4": "3PuVJyypjaDiPENCVYbd8vj2aB6eW5TtC5cKNc6JDH4Zovtm4gDmuh8ec1ByptYDH9Pjkevs3SLDGGMMXJAyACVa",
  "key5": "66XTUVhn8wwfTGcQXa5oQJczZg7pPPy2R2UzgT2bkw3GwLUAF9Ek65wKLUJkahXKi6faEGRgnQSxkQz2bqqGaK4B",
  "key6": "4wHmwTTTyKYVkv69EQ8JWBF5umkBDZhUnycRt4ER1PTQ22H5sp1o6LqHP2MB6hxkugHyLAzKPvDuE7qAFxHacFik",
  "key7": "4LtXtPi5bCdMq4acH4eioH8yay5RxFVoXYoELZRS7bMfaNXkpYze1UE4pS8DQG2asyQQopRYyJTMw2ofFyLtdvFV",
  "key8": "4pVLTD4UvkNy56CJjbosSzjhndd66PkNbK7f8VRCUKYQ1iwfrEXspKnto6nkJRFgEM2rxzzej8RjKfWQAAyEbgZt",
  "key9": "34aNKaNhh8fVXAeXcLZts84cYdgxbHsAtczHcJyFaGC5K5aTWMxK7Hc1CV5MfcGF5fV5ZpLoLttWLtyz2cbmPrGW",
  "key10": "3Fn7E1WjPxmXeJAtXz3P2n39KxyiEpZfn9kw4M9zPmkzFXEuVZN3ShVwBQfoUgSqwaExkCUXfUAWhEfAnwrkRiRJ",
  "key11": "3dHTaVGiNJHDb2zVc8W8pbZB67vfZZZK7pkQitX3BKDXehZSJvzCm4yf1SD2qFeCeprAVrCBY8xHLo3vQpLLF6fa",
  "key12": "34M1s95XeYotVM8M8ZNMb8BoBQsDf6mUFqunjRQrA9yiKNyofTRyWnMLkz2S3LHoZdQNeu7uhfJ1S3umu4Qv9EPK",
  "key13": "V8gWXyRoHjdZBjwpbzhX5JNeodr9CBnczrbQZkn5Cf3JFXajJdcDjjdYdcSqE2XTC5ABf4oCvFpzZEEgEFviJRE",
  "key14": "4Yr6qJ5uZ6BxM9wcrJATRBmHcKWAcZdS4LEmTMj33JtFoEYVQZGR15zJbqAmKCq3TAFsmXT2iF4Dn9yaxR7wZimt",
  "key15": "3RbpPzFDG3QPhgrfhjjWZWfjDxHRbMTH2a77TeYSyWJ2yogNR8grrrdCD7ogDHJiEV8dKLoa3LGrGEN4s1ieQ9tv",
  "key16": "27E11LNyppD24RvB2jgdHu5hQkj4Vf5TYCcwdka8rpWJHh6vXVEYaaUrYyFVGKKyHPZRP3Gnb5ky44RL2XFF5gsQ",
  "key17": "3s7Gijg8MeGq6zk8YfnXhCaG1kBW7SN96YHTbrDZS3QXdrgRC2PkFKUiGGRA4AoaLX2RNesM6CmhJQ4kr5VBNNGo",
  "key18": "5Ks6QDjkv9ef3cW7ZkvJKfZQs4WzjZpF3Yptyb7pErpek8Uh7kAUah9vkRAZWujdrKvmYTUrjEVExGiUW1Zj66LS",
  "key19": "5pcWLw9VmjZ5mWgqDBgMC8tAFqukehsxFbXnv11pyTA3kfPp3wKTwNXkztXgWige4ws2QeY5se1crZKsPzrE9gMs",
  "key20": "67WwT8R8vbg8BTbjCybJ99idAoin7RBc2GynF1FGqp2eknL2Q3zgSdrAqNquxBqPdwE8CNY8GhH5d5Pc4Fb7YjkL",
  "key21": "2keLzeRToQyhhewH5hcWvSyG16LKJokL9Ee6bghQtJgfxC5bwC1qLww2vPW8FB4zvXrKFHYMhuXuCpQUyGNTsnNX",
  "key22": "4MX6mPstEYNvDpzxYSYzNfJcnrrdSsGv3WAWhanuC4249dG5jLXf3iq3Q2Zu2d18ovwka1DZYN1wQTzYRJcjoH31",
  "key23": "63wSJGAbYsb6f59kVezFgxwDFLWrrMNYh37tDNhWSE5TeibifVvnpB2edb9PC9AT7uQa4MXHN6cEgcrJv2YxSYL1",
  "key24": "5kDyTRat1wXFWksDGeZbHkAx3rGJio3YKe7BJBpduRT2UB3oEWfbSKiTVkoF7vFQ7vZjHDsXwscin67mLrzhx2Hn",
  "key25": "Qc4GehSVfiPRrC2FbJRhVtFiFNHbJQKz58nwJxp6sS63FNtk2QXWp3UVFV53PLRnVUdortLtXcdXzPyWF61L25X",
  "key26": "5G5NFrw5UJ6PNtWXnyQ1c2zbxWat7XpT96uwWcepSrXUpfmaENo7saVWGZdoh3eTSpp4vzdXRC9FARhaP7qUcLa1",
  "key27": "2Phx9ABANfgHxZseLQn3cuQMpifoPHumNq3DiAyuH1WRTuPqQEhWwEvwAa14ywo4MiWMFXTDRVVfi2x2vz5Zymi3",
  "key28": "3ZSNN2BbhG5h2ubir3TWdCgGJHQ6jvLZB5taGCsXFKk3LLy1SUNUV1M9PKXt5gEpyvcEBNL8wMUt9HyoNDKcQdEW",
  "key29": "GHM6dcxTYs7PGhGZ37jjSiqcFXjRrsbY2CnLc61aKr7i5Q5pASP3TabvFotJCDE5VuMpMx5BouGCpNSN86mndds",
  "key30": "2yFREUCTUtczn4qx6Pt8pRucgK4LoS8dQF1tsUsF1qqpzvwYvf1Yj9v7UntHQh2L3W1DpzWGanLt9cHzMvJysFUa",
  "key31": "2SZrY6ksNY8eK8xAdxK9o31uprHH2963ACk4Z51T4TQLmqWEHJSWHFtqmxqn4baUKLTuiy4cRomDq6yEGZQb6NNn"
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
