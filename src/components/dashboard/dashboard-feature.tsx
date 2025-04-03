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
    "Jby1WeqkwGChdad4XcdNGhTj9cv263hUVLqFPpsi7PWU7eXCj8SHWRnvAXyT16ZrPvXeRBzmfcqEUp9Xh5TLC5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BExhfaCFgorLJsvpVisjGp78oyBxs7VGsRU5a6LJ2JmxbtNU7y9wzgKpQeD9qN3nDfaXEG6fmk71V9t5R5pynyB",
  "key1": "51c6DaYyZSWZDsGLXRScK926Dd3ujcKL2Nn5TFYdYeW8qHcxHsPVgYxwYV8cUfy9isjxCF5LxiwqgkNHzfu5pAtT",
  "key2": "5dhhEL2EhBZzXBN7B8bUk9JPLtjGvQtHwr38fxV9mQ51aVkXvHm6TDP8YyoviTBeSbapPMQxbiDu2DZPnZnEqo2m",
  "key3": "3Fqjt9dbPi48tMzCc47g3Xv4JAq3fM6jmPFMayM3GqZCA3RPQtffwnRNTzLHdw7GMMKCAkaXghYPrc5zp3eXdWxp",
  "key4": "4VdUQ6hrw62CmjEqAaduQRhdoUhqjJUYkZFqg88mD3itvVNfLWRUZZz39pCoDv6ymURHqQxkjP7vGuVBtWZr1GTf",
  "key5": "3DP4N3G1mf4Xhwj51QL5cykzytyKrnCUDe9whNYqVGMp7iKLj3R3TSKg3BeYGSWJnWxBhaZzwKiZVXtXhMLEbqR4",
  "key6": "x7kwwCEu3WUzpwq62EsCi3VQc6rKFM7o1pWxr18EEhvqykFsrA9XXCG8onTvCtYcTMsffWf2sbBTVFzDWR3Tobq",
  "key7": "3VNYHCtqXtYYUYxyQxwn5HbLDvWViJHVYqRrcJRspPXU7nao3HBk6UJX5FiCs8Er8K7xbBQU4PVbMp82WLELwZkE",
  "key8": "3eDkQpFkSTKLMXGECptADwNWPRwN3HYAnhKpjcrsfHsqioP5NmUQeu71tAr68VUd64Bz3ike9ym63i7BV9Eram33",
  "key9": "27L3gTT9xZnvzSaaBBiAjq7SXU9bxPCemgsH7T9zWXAVjpUqNwHc4w5Zn1WgPuXjsc26nyHGLugVPodUuhwWD3M5",
  "key10": "4mgLtaqpN2KbGhp7o72sU5utT1Hjv6z16EW92ZWTaaSPcSatxEKnNwKzqQdMFWipCPDS2qQ6Bqa1wFWYPMkHKqSH",
  "key11": "2nBTdtAgjPHdP8L8hR1hNTmZ37d3ZsAVFGtZ2MwVnZb46aimpxzSR1ZcehkEPJBkdJMeMe7P6tLQGf4qhzgiSjnG",
  "key12": "62ryy3baRRqfaKEGTbU92FRkG6FJ5hwHKnsmibLaac5Nc5tB3jeummmRY5mHVqQKv6xTfun69oUwf44PBhWqQK7V",
  "key13": "4givaoMAaXsk9pJ7Pw473aX3HYUPXA2zikpHNB3FLnY9P7dJk59oCRNgLdY25t8bk4WAPkj7t3MjwbHZLoFd4iST",
  "key14": "3V2FVfM2oCA1a7FS3acGxzpdWF8cM7CCrvn5HzanTgXSW4Jg87NcXbA4atBibr3F4ed2zFwbs7e61MsRVSD8MpiM",
  "key15": "2qk7fJEL56SVW57JdZrfiyLnb5gLux83UV9C5aL49dBxmEk9y4t1HkCKb6yugq2YTznXssgDu48Zj2sXzjsp287C",
  "key16": "33vWq2961oSyxJYD5W4Y4vqVbwyUD3yQ8KqhtnHgRG7YFGp6Jhfxwtr6ULAkfonEGzrnqUQKNK44NfxwWKiZXpm",
  "key17": "5EFqZ2HCrK9vosx9buyeGSwMAwgLFuw94uf6prT9G7jE7vsM1jXLwVwEyR8YaDqaHWBBoPj7xkidFeerfeXezSS7",
  "key18": "4g1XxCPC4UqDSei38upAbsspSTiiPdLv8m91RAiNv9u9whG3tfJX8iWDaxKLePsAywAQwdgn8AYwZCxATL57GkGP",
  "key19": "5ZC22RyHESv9htssLu1bkutVv63qzuFEYd12ZfWwirLADJfEoJMUfZQQBasXrBD8JFAb7Zm5q3AG3Ws2SDcnf7gE",
  "key20": "4FFFZUbo6SxNkccuik4U7Xs4wrZRMzKhkRzmVsw92YCxfYzitXB8yqxaEz7pfKkL1r8YSRpAcpXhrK9hANbGmA9Q",
  "key21": "3PT2ismE5C535wLCPtSQaSQ8BnJQbXRD3KycMrk17qUbMXvLX1LzjRqyXBhqh4BNx4uuh3zPfkk8RDZLgqDEeR1c",
  "key22": "5cVYJMATLDqPDhE5PUve1btHEQpZHx38LbBYnHSenHPdTVhptTnSRvEQpnMN96ok9e1odsPiQRxkFD5hCaUoQsMv",
  "key23": "4Ju4jFtrfrRdWxLyW1ShrnAKqR96vbKapTAUv2bJ8vKc8fPvXo7bX41xg2jqRuDTGpCF72X83tEEsZzo8FkkFqPd",
  "key24": "28fr2etcqEJ9dBj3L25HaoJ6QK34p3yktBaYxkdshU6NANfTCgdb8NXPTL4CBtyphwUKh1wfo81tqWB3TXQ356b2",
  "key25": "UqNngXLrnBfyidGPKezhuS8E7UiMVaAzcaD3RK13NC9AciqcRzA2yVft8s8og6oDUtgZ6Q6EqT57CaqecjUUTRo",
  "key26": "5uuZCTJsm7DaBMQfH7VAivPmjtQ996cihkjSNTs2ttLAj6iTSssDvfKhxuZ4DaCXAohnbq9seDLReSfraLVuUmWX",
  "key27": "3qGBpCDZsYdKUDTCVPdycbnGxeT8awAjf8NfE8eAviXHzsdWF1MikMiGuFrYYDsy1KyWHFY2xesXXVKHZCpS71pf",
  "key28": "2skaKTpi7BFenYwB2R6ceg6zrqNnuoSQLS4V2PpTjnEtQQV3SgbscSijAvjDvjXrxhLhoCnobt8b4UDi14xGr2G4",
  "key29": "4EZYKQCKxg2LNuYkLLDYudexjo94SMNJt7RyQX5dS2TUH6gXqTvz3NPYwADvEtGnCb4grdHor9M67J88duoVyeaL",
  "key30": "4s6PvaZpUkWfhScWtmYoaoRNa36w67NzGUQ3Jw8HmURUrY3oRBjAD5pThGJR5NdDUsJLBRfD1j1x1EfE2j2q82bf",
  "key31": "3VVzqmedkRd7ww3TJsiuQRvsvsTkd3keHwawoE5q9eNeWBCwFPrDScBhwckcYSgyUswXqFG2qdMtf6choqb2x7jB",
  "key32": "4jB4YKRFSQxU6TWg7AsqM2fLatpM5dXNKnU7W5vekARXZzy1H78KhEwo3H8GXC2u5UguxAReHhkDQ3mvBYMeNpt",
  "key33": "2W9PmAKkFsy9kdgQFgdKUSbYnEvn96NZ1LPsX5XXzYJQR1M27H64xqgAMLCwFMq4sf2PchP82FRaQSzkRUuHnftw",
  "key34": "4k4EosSt6EUMHrv4424k8pCr27DojeeTkPhEA44rQkxsvUv4TUxz5kTNekn8hRnp3hVKT5Az4HYDoPmQTZj1EWR4",
  "key35": "2m1B2D4GSKbfGJh7czbNvJn7qVRgwhMHU2AMVW4LthXETaCN3LL1JXQ3m1nSwuHGAQ42k8btXP6BcGzCMzJo9Agt",
  "key36": "5j7fBKcjBrZ4dHXmVYW4SZDFtvhVXEGdjwYrALHZuW6gYtrGKS6v9StMCnv5Qf8xBGf71sTjRarzEAa5q4BqsGtx",
  "key37": "4p4b93R6nhb66U3NSC2ikptwy8DP1RtVVvrVobxo4YxUYZNa2wbtzTdNd9AUUZXHgHxZ4UwUP538Nx5PBxzKYdfg",
  "key38": "4k1fbTccfZBZJWNjF74VdAuY9vYh5tg7sFxsKYNmaBvoYwjb35oN42MhEC8z7DmNYZKhRFFboP5reuVwiKbCNZEP",
  "key39": "23bNDPHhebAoxUctTEXupDjkj2jedQEkMuT9ZEiJta5Bo45hoX8PUcWjZb1ghzUq3YD4XyFzj28JeziYa3YysyL9",
  "key40": "2CFjDqAa3fSoz1zLDaoVqJ52289iPT96rqScFU1gSQzg6hULg89qSWGwo15rKK5q8ikfGULwcJjgmZasiRgfki8i",
  "key41": "3e7KydWXxQxmtZt1dxmEh6Ubhgtwxchck3B78DvLPcjwryeXD9mjMCGtxsm27arMnJcH5xZ8hFasDEdJSjZWUqLg",
  "key42": "BurseGrbMNHYrvQAc7aovNC3FkVaHvPKw14yr4wgWLrLgvSqH48XHM2ybHzp6CGgK4zYvNYxDvizfQ2msoFHbTh",
  "key43": "3CAr3A75su1bxtU2zNYWb348pkMA78tixNk2yzrEytAfeSyJfU4Ar8DWfnDaY65w8FEkJzWwZZsYrAu7ejjgSugo",
  "key44": "gFUYFpdvqasW8nAKFu7DAZdSMB9XVaTY6aNpFz5R91DqzWesYdkZxWpKw1B3HGDBzSfB3U5bdLEE1tG6YzSniY6",
  "key45": "55jc58XqgfLGxMgZLYWfnq7nwf48y8sGxRDrnYLgCgvQZFpnjuYsU3uHNrJrFmMRnXY1sgFNUgFtfDn4JGP3pcJH",
  "key46": "5DxpsCPpQWtJJUTQVTWnkZ3Hb37WA8Znfbnf2dNmkgHQcp8C7PPiNKXWo5MdLxrQ2Jh1Rwj61ExzTw4oGJVRKxBc"
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
