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
    "2UhdaN1WWhHKQYau7N22xUtjUNXTSgMhufBaDb1SwygHyuH6QRKwpf5dXkazrbXXk5QSnWGF9oyjoWq9jGWyd2Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHPkRqMdXaJUGoE8NMwbJ3tihLaUPZ1zXT6qSuWov69ppwtyvuHX2QniERBxdhkNGLBAoJuuiMkXvvyYcpdGxir",
  "key1": "pS1rJBgRoKThhZiMsFhxCErMXk4MHfdoLbNF4cSSekMYMT1Nvu8x3DJzeuDHCcQJJxdEF6zRUu6YcX4sERVJurW",
  "key2": "5Gh6ToQsUipuaobM3bY6vxFaX7SweG5fZmhYvwYA2kT8j734SZXAmJDAS7ojozkfbn7as543d1RSFRbs6BdNmKgj",
  "key3": "5uFF4jd6arRFDxhoiJoQyF9odyQYwhdETqPdLvDt21gsx136385oi4Up1h3jcKCaV5quQRNRPaGPr5Ggu1mt11vC",
  "key4": "47PBuqA7tgMJZAvpALgamyDnAEwfwdnRZzFU3VZiBmy82QMqvVv8jwJ81B8aUaPhEjZLuJfNuXEXFwq3FCbUgvvy",
  "key5": "3AaLu5A9QkZ2mLVNb64LrLzrcSvKr3jxFYodLBCD7y76QyAp8jCsDdmos2UpLX88oeHN57aopv48hU43h7U8wXgh",
  "key6": "BzFy68DHfkLd7eJVrzMKpGwaCJGWEJ5MtLJpECCPzXbifpL4iSoargioKDRwHRBuKSuMu9hAm1EAYoz2KqAHfMU",
  "key7": "5uKJk3eqqcWTTQiZVKT62FZXjMExdtnByDKEJn6hjythdFwAQCC5UiGPsVUjZ45KQ2LRebGC8KsWkgcqs4ikHegU",
  "key8": "5gJ5ub2YriHX7SrKnxcxthg4RvrRGUqWQAkQLjHtGGGVVhz5hvKmy54kHfk4X63xpkH6XbCBmtyHRfEiDAaaJXZc",
  "key9": "QUD3hx3UKWxeEn8LeHM72JMuVyC1u12BobNkNx5Sj7kzBWhvraZhMaA99rkwLWw8ueDwvLpQnS7sh3XWk8qbocf",
  "key10": "4nuJKRjRnpfbe7nmLA5CenDQx1vT9JWPhBLiyoKqP6zCsVEq6eBSstAbdfz9pu3BG99WmaUzWK6iBbFxoKi5eAzD",
  "key11": "4PLUcgcAqcnSjsngXuuk5meAE1yEBBASQDaBhRHvWwb9kbvS1ukm3qvfLb7uXbGi86hhvsTjWUfDtt6eTfqBdns4",
  "key12": "5Z1WsQwuS1JSZYyP5RYuo61VtGPwH9sJgB7fpcEosfHmt8w6YwAAuZhk4UdWnbvUCoMwYZHxW4zjYgBvgYc3cg1p",
  "key13": "28om7tCAJMxvRSY53WH1mi1865eXENGTCRs99KcYA9NSuQmsnRunytCXmoZ7JaLeb82y1yQT7Bmsi5E3HKxfnhbi",
  "key14": "22eKVhhGy5rUwRd3SPk5CWAT6ddYtk4Kapxz2egYq3w2R2AEtQX9TCZQkB613kLZKvZ1ajGzuc1S8hE1Kdkyf3rd",
  "key15": "5ZfcxjNoDtsqT5AvEz7vNj99g3pYUifzAX2VfAvDKuPuJbJo8HCT5qYrg8MNW6pohPRVaSt7bAq6RLGaEaciFBqk",
  "key16": "ZgJS53b5QLfMakyPFbeSjjLNQgDyCBnmPQEHLW5TjJTSiTF3bN3rKbQeNLhGGBPWqcDMwR29iB1f2zkSuFevjXX",
  "key17": "41z5butADXSmw5HhtvkA2E18JrBt8vVeq3UhQwxE6V5BytrtSAKefUsKdML9y8dWvQ8EovHnakha7aTbAHQFP54h",
  "key18": "2Zrn2n8JQbr8CjHMSf27kYh4ZfzexiFQMnfdUsPShLuWXGnaFBVZjKZ46uSHnDgYe34qu9L4BkYfkTtQr9rRA7Zg",
  "key19": "mBJ94DYrhFjua6yVUqE6nkSiCL5mQZULhUofpSwFF558Sb5pWTjhHMGZ9o58v2pDzhtsx5N62c3ZnxJZDpFua3k",
  "key20": "3SLzVQfUyjAxKeozk3amCTyE6ZcbVDGPmDpbhtaP6Go3BP8oHHBbJsebUYsJGEcwqWAZP8xBoHULkaezveNVoQ1Y",
  "key21": "5Lf9ymdbatQLJh4E94NuAXDRGiyZwT2VSAT7z7Hyn6KJYkPk71oWn8MLfbQhiXLk4Ae29PFiK1URLwNHfsH9J5MW",
  "key22": "4z1xWGjxMiuwYyKdkVetK1esH7CJ7QE1cHJ9r1zn2U21GqSpFdKZqwav3Y9EZfiLgA8f81phorJpuqhEUmXvsMxx",
  "key23": "2cpnbDaXAzbzN8EsFb2U1WYAE9yqq5n7djhhYAZBsjEzUKq7qa1KEmdT6zV1T5ZpcyA4hoVLaUiUGtsnQ7JxwHpP",
  "key24": "3cH9oYQiiikRYaypnXSBag5J3VyjPB3hMrUTzVVpW8MmvYtfcXZwL8VkKFCofGXqJ3qSKZBkpGfmSnehoc46594e",
  "key25": "4XVN4vB94X6yqzL2AYce99mWsQQB4qTKkUQHG6SNGcd2niDwmz2cgafzRzXqwP3wYa2HWBSA15MNYFMb1A5rjkEm",
  "key26": "ngycCgG8fCHuXJ1hj6nxLzVHeodmgpFyEi732JcALLKhyMYxrr6cfCK2BSPgDSWr4zocVUc9SRAcKg23hFq7VkT",
  "key27": "2iEWEi9ToRQVuctcQUaURR2A4wzYRJa7nSrLagc2FYLcLfNdx3pTpbnvi4qsAHC6JQNsgDR72DYFwjcT8d1T4QeK",
  "key28": "5htDiwyffbfFSZumXBktsiSDJc65K6Cx7dXW4i4TWFAbr5uTpWAuj2EiWhmiHX3Hfms49nAAaNe3o2yeHBbqV5SF",
  "key29": "2V77piRADJP4jzZmo8Yf8nGhcoGm17pXTJmjw92wZZBmAfhVyCREJTGpgMkBjKfhgKhhBnzyfDfwY6FWc2XvymLP",
  "key30": "55jk9hdoPRgyFoYWSDmmnXZB27kHwdBgQjbBEeoXPraSv1ig1JHMoHpmBZCLkSgiD37aUDz6LdZRHT4DMdQfWdPV",
  "key31": "dKkcp9dCMUZvzimrv7eX1dLGvaQXiPePvxGwbQJLST1pHg1nAF7ME1oGaKurKDniKtnKapb32q4qCmm1zoyMFrV",
  "key32": "5X6u3rKQtDf2XiSR6pWBb8QEEn4B6Mq5aRyqPXVebRH49A6quLN7bhyJnUpBTydMmyHXPmHWDcnLWpBjG3Uxnfvm",
  "key33": "373CyEXCQ1DC4EXhXcGAPpKRyvDbtpTCcna5FAztJ2pWkTaKHweM9Y4FLWHMzfL73ZhXayTqnM8Hg1CCLiKFAijG"
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
