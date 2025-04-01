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
    "qmAAabyY4HSGWgNhn9sxbb9mAjLMYuzvjQrq5FSLzKM7GUu78iFq8RAVMZgdWk8VrAH4Gd8J8KLHVATMFZwzHEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2DDYzKFQCuGN7dQB5XbiR9c6rR8NV4NQkrBSKPXooR36Q2m14QwiNivLMkiNLhqG2UmNLkmbzA3G3My6PacxRh",
  "key1": "4keSvN8ces1pFmrX2gu2i5cDfKJhRWsvr7smwgbw6hS8yWU4W8MARdktmH1Vp7zUAtY3oTqPHd9YzpEyPbxd5QMc",
  "key2": "4Fj56q8ZzDiUZmmyhSGLaVNDcybyDQcwQ82v92sZkD8fSvfvv2MtR4zU88cp4QqMnJFYxkBvPghFQHA1cUR62FMp",
  "key3": "2yUapyQFhMeAgoWYP7nKBMrvDvDqrwW96eUoTeLhT1wxZKttZcQzcYuvy4BwsGopN7T8J1Wi8FDjiCD5tEZz27VL",
  "key4": "WZh4HVSzDkKXWT21nLqmWpj3bzzskqnEVLXDXYU2Mow5xmfguE2wdBJn49PsQ2i8M8tJZXsbkcLySq8jX6V5vkb",
  "key5": "5LN7ma34WWY2Y8KWzZvwBJnVnfqJF8ESqQ8Weeh1mbCVghjEY7y8RWTWR1G1SegSAvPWHBR1hP5p7Ux3G3sAZNYg",
  "key6": "4QV2KA5hsiyPALEc11m19syhCY9E8k9LtUY9AWV9UqCdKgMJUzvdGZAEs3sd6JSFUzYebHTD98kzHUFkw3vV5h6V",
  "key7": "5S4mjWqQ8TfXiFna1iDsSRb5y2NnpRb9Q5xpYWhCKMJm7FGRPWf5WYw21hVY5dnZsRvtyDTUjNVYTTvBKz6xYKg7",
  "key8": "3nSxxfFMb8wgHNCB8zexCSmNASdLGR1iPmZ2RQiTpi1wg7cDA1cfWdBbzV3RTcvkwPajFRP6cCpCPgqXVqmGfJR1",
  "key9": "2D4cS87ChWZL9XGW44on3PG7Tx97sc66vvUJcc5cuJBCm8RNrNUGnGhWb1BZEN4qygQL1Vj5o8suQFkeHvt11rZ8",
  "key10": "5zLTbq4V1ZHFoipwGqK8Hibgp9tvdx8u5GnmdzYRaKd7CFxLLRbMDXdtGcX1X5wDTJbdzF2vVWK67wsACgi56pqf",
  "key11": "3iaJcvUBPC1PJELrYdz2QDZhJUgyp4SUwHtR5ffuDbcUmrmfwSax5vdFHspGhY7pwcascapkcnPicMEoTuonX9TX",
  "key12": "48P88mGSzcHgpMarUyfx5rKydMkFMWy4iB4fR3sJTu19CHypJv21ju6rFvGKUifdzDa4iFXs7DdaBWSmpCC73sZi",
  "key13": "5BHxxoLAvrRHP7a4MnHrkpqk5GNXKCgsUAtepbKHFoWPBLF73zSNQFLU8iwBPZwXWEBJ9aEM6DvyxKrRyKzaqhCN",
  "key14": "4F1aZjR2K5GuweKqNTxsJRVoubjs61mmRLrcXgmxivcPPAprWA2b2qC6ScMmPjsoD8eWA5qUqTjr2mQV75vz9McJ",
  "key15": "f3N5kmGHXjhZk74oR1i6fyGhLRZPkSS1xhEudD63KNUbdPXED9dA5Nz9orqDCsaqcZoTANTGQ1qQrY8nHuKv3T4",
  "key16": "pFYyAtzTPezY1He36eU9hMnhURonNrQBsCsaES88V4rFN2vwNMXW6XUZ1SZ1j6GdJKA7t9HBp75PwvhLzdHb5FX",
  "key17": "4nsCtkeLyQZNafZtCVccMMP8j78q8JXNB5mB5GBn9NKyZ66ASx1a9t8pP87C3GPkpDLiTHGLSi9DF6YX2xBB38KX",
  "key18": "2uCyE53ioKGqX5KTAp24Drpzws7eXf1Q6FRZMkZ1XJScf556SEncwupyB8SeDcPLDZ2XrKAE2hyTCboRTVnShuP4",
  "key19": "5kwDabgExe96V5kGfNHbY8Xvzm7cVouVJy2JXUFMHkib3VB6v1Lyhue1Q1vPcANe4JdvGvD3L1fsiXrGWVyT6qsS",
  "key20": "2VpoxmXxDEyq1uycGoh3xRvz6JF2Fq3C74AdkDJgno1kBr7YmHBiCyrjLwBKRcpj3yF3gBxDh1HBeBYT7ggYs6W2",
  "key21": "5y124V33LmciMYnqimRmry78NVhpeQiEXd9CtzsoxLJMXC96LsmnVc8YZrVPWGVySrdqccqtLDWhLFRoFh4AZHfY",
  "key22": "5v7UdeCK5CReUdLNQeai9wK9pZGejjRmYGtsWZocyC8K68KRQGX9SYWrrapGFtmYtFDzDGtzL3Q91oUjg6q5WvHX",
  "key23": "5BeKw5wxSD7z9pkTt59DtgJJ9oKfgBYoUQgiiDQNfDak5xPbCAypNSc5cHD3TcuFNX8grtcqtZievvyERT9igZbc",
  "key24": "2KRjghFf2MZagKQ9AapWDJBxcNh2UwZNZNpjab64vfFJhW3gkHkcR457YBxfvY6gnz19iWPa82JhqsZik4zpaLQ8",
  "key25": "2dy7eB1Q9Lxxqjwg2raHhjfjUXd5BsDnBaZ5sYKvsXKq5q13tubP6Lwu2F2Zivh4X78cjzfawzzfWMswoLpGb5KV",
  "key26": "3tk82AM855aHXRYtDxi3AJgcjFAEN1QyPbFVBamfUeYTCUbUBRFFJjo4eokGcu4oXZSqFRQ7QBgNLh1rvxsvyuLA",
  "key27": "66FJHDkZ4a3LMU2es785JgUojqui2fNc7rByCsq1LL9HBS6VUJCQAW6RhKHEifa5epSjdLuaEiXvfhi1KuWT8g37",
  "key28": "2hERMYChUEkMxKXLqqxhGZqsyuo1MErcEhVufQwZi86FFxr9iVYwyVHXfLNFyMyfnnN2a7Qxc94s9mPMQAZpJciZ",
  "key29": "4XGVmBcqWAHQ9iWTNT6wSxiEz5QZw5u8yvBL2aw7c1G3DQtzdoAb4NMoaXC9AR6WFz5uhQ2E71rWikXnGRiSX5WE",
  "key30": "5UpAhD3zbDmZ4UUrPpR7UUBEuqj22tUyGP23SF5tx4j9XChC4UhHSdnBZJSjV1BpTecmb3U3D3Db4L8AgLEWnfzz",
  "key31": "3h18fscPkGDer3biJHZhdwGBVm7nVgoGNaa6Jxg5MhX2hXFhq9KqcXaX6NkBxW6yidPTWDNzof6NV2B3UeBDGAZ9",
  "key32": "2qyacP98spnS3kqG355VmWBp7QwC8NZ523D9f9yi2CZ5XHNwVynAiPTQDCitXnQtUvPKFsL6S96VKotcv1YkEJtg",
  "key33": "3NH1sCnLd7DuLEkCw2QTJ76asdqKVMpcWkuHYVS8Ux6Sd6hLQtSTbwmxedB5M985VatjoQtJK86jyTxBUA1heUnq",
  "key34": "4tXyPTcLweGigAwdWNWkKP1VJ5mKWMYoTdnAfoaWSuVKVFbJ6uL986MWU5xpogGgaV46QZNCFtgz9DW2Vb7PDqAa",
  "key35": "UXQ8bnDgesTzwiDGkWHacHdSU8VSjWuRaHHRbNuHyUwSktgiyE8GmC9ZCuuESQCm5tuWvqdZLyng7rUyZ7RUDbG",
  "key36": "yArZRzmtZGwRcR4adTVNUS6h8bk6owfjogC2yNZZ7SMLDwcYU8U2p3XqDQLWaDgrizJYzyttx4yaj6AcQNFK3SY",
  "key37": "3gcUczHFnfPmwfrXNbuJH9nWjcdQUwJdFUhxXnwdDxHBLZ8EcwE36zv5Ya7FCmuv22YYCjSHMzv7vb3kjHEmo6Gs",
  "key38": "3RU1WK9Wbp6xA5iSip8ycgUH3zSqEn5qVZgAZJhEnPSZ7aYS6m4e2TDLuSfpSdgySFcrCJKkjZK4pQUKjpyZkjLs",
  "key39": "2KWY7ga5L6eitvcXyyp9PPjyMbJsfczE8AcvCF9M62c8vbPzqyuuFKM3uffVMj9SbW8bZ495jenu7NgCzZBs1n4L",
  "key40": "2az7EAdr41d74mLxGLBrNH7oC4xG2HzUoiYGt5rgTWQBQMPfNxqsrtmzQxMeUsKnM33GcZiXsF4qZzaPmvd6ijjW",
  "key41": "26CsM1ZhprTDpBYDdqYeRL36CJgt5DCuNujMCVJPP7T7ppjAk1VEc1MUSWjdU9NXjG8s2roKmstJpT7ru12LQaux",
  "key42": "5Nf4ML1df2EFQ1ACMo8PQLgc42nY3kkS7eZPHNw7H7ucN8o5bA8JBykZy9rDmGjLvWbHrtqiuhEPtJqLQyqjRbi1",
  "key43": "5u3vX31gfYkkEWD9KHqXJVkcGJGvYzrtTLp5A3DCDXqESB1aUiVEsnzLiUPaWKchiq1gGXzeWiKtp4pzc5KBNVLs",
  "key44": "2r8xxFHcHbW5FnGNPrzxrAktYWFSVyZSrmEtFCpvJQ2YVaGvgW7g1C8bj92LszscuK3kB4gDJkd3V9hfhaHKTMrK"
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
