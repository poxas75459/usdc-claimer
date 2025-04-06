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
    "5B8D9apcDNPbW8XEXRZoz1JfSQe8abEE2QpT4TCFjaQ8yJw5Z7EVHbQQ1bXCsxtmDymgEuUPob9vReGPPcZ1T5d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qz7zym43y4GN7yG6SY7WcrCowVKUnHwjb9w3Gv7zztfZMA7ABwaTxnQSgw5BLU3y84JuR4dy97nKghjv5eLAuPq",
  "key1": "2sHwnZYMDG5R8tffDETawzH8uQMED16MC1MWfAwqySoZxTaC6p5kTuD2kpHodMwq8hTEuwU9Qb7eo6MG68N7wESg",
  "key2": "hWfvDbZnhCRZKE7aU6jst8RS2Y7422bNQP4tmRN9pAVVhDpfcg5xXSPykjnrcTeQSyk991cnYGhJwq1E3s7jZT1",
  "key3": "4AcGLSaC6VERSPbC9vkRjZUGybDhF5giWxJqEuHPudd6qmgiwJzYAdzTaGNdRiSPNiNkjdAUjnTEVfx342onSgyf",
  "key4": "5kPBKhY9XaGGyx8xftLb1pxfocMitfDXCZ8dqf8o4nT8bYFwquns68P5bHFbxBuMW41358oRd8bCEjS65zvbRvUK",
  "key5": "Puv21gHeMqK6a7WRYp73YLCV4CW3wFe7U3HrrLRi1FazYuxwREBKXTEULMS4N46Y9KvAeXoEDdcKreqJQPUX52q",
  "key6": "aNS7ygmhpyb5SnWvcjJFGXtPVqeN69yZQkAiAQUqQTmYjjhM9o3EW1J2a2YwNiW7zoEpRrAYmz7kyHVv3TJjWUX",
  "key7": "5ZhScJT7b1qaa7n6GYfAgdC2wKkWftgQqLKX67BPnTTbTN61V1iRNgVbeQvNFqbyLHDK7eWxAGxSsnopXeruDXjk",
  "key8": "55HD6LicGmjUyfPrQsQjUcrXeTKoQVi3L5kHySAKdZuKi5ur31CujeUE5ix5yepeKFgucuKJZ9QvqUvc9e29JDcm",
  "key9": "3oeMFYzTsopenSVExUD7UbWvAZYZde4e6UmPcud4TM4zov7iE67YU89NLTvLUaLsWMPb7pmE1DjfQQuMfUmwc981",
  "key10": "mjdjeXJXnHwugCExCP8m6LBXnxkQSHW37xqyyc2GYn7sTMBnSGhQDdBQtrbvS2p6uvVwj5tSvd9PHmYSzFK87t3",
  "key11": "3oQ9Fdg92CtvBBfzf34qWDuVtb6bZWq7tz64WBt92iAVVCgrmwwHyxWDB9oZN1dv9mVN9W1wTESYEJksfUfnJwWg",
  "key12": "4DBMqu8c5tG9386uPpWZhvipqvXCkXQW27zAv9vDkXaqiNACLD6ABuAKKMvnfgC7rkD6bGeAxPt2vWcgd7ThXDLw",
  "key13": "4Qk9ReG6DWKRU4mLRRPkb6Q5ZxHSebYAXW1cYt796h6Fnu1g8bLzTqmmtoWrmBKLch3V2qnb1qwLdV9LnGtGKL26",
  "key14": "26vFAwd6Wf81c8LUTax2HahkkPKE2wJWQTWE7cKRWQg8X6oF5Zu439Z1Shu82sUPhBufr5Vg5FgwQ9h4hiyn7VKi",
  "key15": "2K8MkNtyZmXNBTVS4rmvfMLCmZoTcFZquubGsL8zC4hLyAArCPikK5muTwpTooJGeg7As7vKWMw9T9eqkjTx41hX",
  "key16": "zmhSXVSw4e5YgkH1jkkifmQzEPQ3TWCVKjthMmUY3h9R7ErWHLxL3TAUnoVXN1xfuvNFoE6VCwAMz5CE3Cjcrfx",
  "key17": "4CqiiKLYXiSEyjpjVhS2jPAEhkLJctrqCLhpWgyuVogdvmhPvYXAgWTqrjXShvHcp4R9tgyNeiewUxXmxT98t276",
  "key18": "3yq1thdgDTVLWUz54MnRDSuRPEyg999nEhGSv2fSeDgE6wVC5Pkoaj8vGZYELX5VRxTocwwFcZ7SMfSG1BXdWaN8",
  "key19": "4vs6STHKzfVtoKUAqS5Gx1uvaydxMUr2u7tET1v1opAf5J2q2W1bXZA4CuuMiw56MzwwgGVdHAENmpoz5TSWhVLh",
  "key20": "4xuPKHawpG53fCaVMK3zNK5EQwcMhL33cPSR5G9rHgQziBiL4oeyBH7RyAWhQDNVhTjWfjsXnaai16AxvgWd1Z9d",
  "key21": "4tUawtRx4KwZCBaLULKN5S8KC863cJGQtKzxrYV9uRe1Vbb67uEZFxvSQYdBgzPpxBY5SJgaJB93Bzgxf9afv6ri",
  "key22": "4soMnzs4GCCkBfp3kJamjjLurHinQXh4z38kymvL6EjJVpgf5uJQA5ARgWDZWAqHzB7x8a7HbuFizfmMKPZeA6DU",
  "key23": "2zTjo3dxe5wRQCnRk515BWP1tq3ak9ZjbvuNAChx8deEiDpQNcBoVQzeb1DFZPT1EMyYTtqF4vBAHA6zRVdYq1wv",
  "key24": "24W6aq1DnQCpC8Gf1LQwj1vbJho2VCNoccoVE1CMtpwiHbBX8zCaECjazJntdznzWQHDahwF1Jc9oqCUxKB9Zxmp",
  "key25": "9K4R7JE5YGwyMxEwhCZuSjGmTb1neMdj1Aszgb6hs3Har9hrZZ4JUX4vHDSjEstEjEEPMUAGXgDQXw1CG3u2Nno",
  "key26": "5XFbFV8DwtL4uGKj3DaWHYDwwAd7aMKxuKaVUQRdFPdpWFLPCrYCAtyvfrwnBEgLb4SXU1XitVu6xbAcBpbAgCuh",
  "key27": "27hrBa7sJyGS7VZJUzxCA16j3QS8jhKJH1FmA49fPZeBXcQjnt1EqtAbWTjxiLgUU7pPACqmRhvh9zn6oFGGSkLz",
  "key28": "42USAYP6PBqwNPx2kYZr8kXtKdLxSh9zuFJvX7N3oDsJJB1XMqXLaDUcKeq5rjtoBJMAT5trHJydmcmCk4aD7C1P",
  "key29": "3q6VtqXDqfkvD6Eid2VyDuFQgHHaan3HnkryaqzWZCP5vmpx1QfNHigwoAUA2KUnyUW2spTNHB4qhzMXikSvnRQ3",
  "key30": "53iLZjqM2ZcGUG6RejJZm1MSRLAAG2uFyM46xJ56AcurUs1AXNpJBnwoBX6F8GQJgWFEW3FfLhtNUqM1RPpgXaNb",
  "key31": "43VadLmhw2mQ9TDY1HPSdtSaScgEYq9iEsvUvCYF8imzyZMLS37vgv62NMZvPDA3DWmubcePHnTHcJMxhQy2PfFh",
  "key32": "3UaAZ9ExfRvR38YmGrR71vDmtWRDve2KKMAFjX2eYNLRVnJFYk4QA38qUx3P7dCZr77oQPfKTNU21pzUYP1Y8Hfe",
  "key33": "3DmqH8kxCRoYm2G3KtjnVW1p7FUgEbkTBTMktAug1wmSekZawHFAMf1DCQABazp3AYBDFAamkpNZwtK7RZCGd2ii",
  "key34": "j5wiuvxhSXU78F5fKymQbzcsR1YHKDSyuDGKuJ94M6KXtLG9b1dGLFE1rLdDX4R2SH78c1XQ1VhoFr1nNZ6T9vL",
  "key35": "3x8rHh8CphPLZRFzsS2153ziaaAdFyay6zCjsgBYT81tm79zSKYU3HoymH6fqxCQyuYJsgi1KW4GcVGFhsQxhTFX",
  "key36": "5HaC33xDuvNBUenfekxAdKscMtLmexVWAcdRWbgDnYZNN5FvQhcoaKsNyNRJmsWnCXc58tgKZAj6TS6RfVMcfyCX",
  "key37": "3gatYeNiVe6wxoC84J9fJM4uWmAVLMy3zxjAdxSK8a2KT1LbDdmDu9rDa893CF1nLyP7yu3a2QY92aKyoqjkpFkh",
  "key38": "5EszY3jyPHsRmJ1eUvkM8NzgjADq2eq9YcQwJGUBieuWFFcC1a8ZZ4doTJDpoghzgWjhfeL2CpW5UsBBf9LicU9E",
  "key39": "2dbdT47uUhWj2QA9w8a419bthE1zsfJppJf5zUFnmUWpMDosZ45xVJV4Mkn8Gn4sQRkKnBfzFD7rJHPNfKSwXqXc",
  "key40": "5A91Yvueo49zYCZSHmEewY5h5gP55mLZU5oxe35kfbCvXEviVfxMJnQ1QJN1QgAk3VuW7PJwutaugbTLyGmCUiuW",
  "key41": "AqkZp2HsLUEsa1a1CQi3efsbddwtgHkNBKBetucG3gz9Kf1nPy4FRMcjhrbff6xXzh6c8LAwtHCJDzrm3xmqWAH",
  "key42": "5JwJYf45m16pQNcqLnh4HguibS7DBnf9gqPGd2c52AMZ2KE9WaxLLHPyvmkvYESZeiymFrSs64owQMbrZkjvB9N8",
  "key43": "2YqYDQxBJDjbk6xVEM1nbCRpbtCuZ7ZjztsCGrv4GkYsqndg9GYxM7P2sm1fzvVH2jcDFBpvfYoQpiMtauRiYT3w",
  "key44": "4SzMqgNsRNcqn8e9ie6MvL3kEu94ky5yukgqEEod9krzoMLBacynQxzsUqyFuj9sMu4iJ6JCnYq8aDNm7PSZASPH",
  "key45": "5G29UnR4u5AgVRP2GCKoTutwrduLzzHuuGnDaYHocNCvQharpAPQ4DdFRCqoGVZ444dSTiY522rLBYseXNmNNW1c",
  "key46": "GuKeH3KkncMkugUfVV8sgWQ5HGL8kywxT5R5opN863xd3eLB7G1KTZxz6kuGCeHAzp5HXva9VbXNwNHmG8w8yGd",
  "key47": "5oBPaUs8oS29iATs4nZ6ChLM6tbqPHBgxXiSUMESjBtnQDbJxKr1V3j1AqdvGsx1RysaRLwn7GnKLyeRc9VqihRp",
  "key48": "2wWoufR96VqkfrUdLsTWQ7AN1KAVg9Spew7q99Qz7Cvo9ZrfZu4A6jo7fbt7KKzxzMrUb5e5p8XyCpThWzTGnnVF",
  "key49": "356K9p7LzntjWRcC6R4JYonPZwPyT2DExJMf6c1nt9KpKcZwkLcqAZ5GWCyxqcghJbTSjFUBFULPV7kkkcwLs6Ji"
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
