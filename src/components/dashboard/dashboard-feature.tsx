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
    "uSncKN5mxCwkzac7MQcPd5diJ4jFT4cpTRXiHsumFpvYuJRvWcKU3XZ6tJYeQzHCXqg9zmNpyApTR6v5HE3ZJMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSRGsKdJyKrrJSNHy4iZkHmTbzzmZ5WHEgwN1ddnV26mTHQnVQRPU3TatoEph1LBXhds14d49esBE2KD91ZCGf1",
  "key1": "5NHK86CMcsA26UkYjYXV3rpqWfEqxXKrG7Exbqc1iYktC3dgcJSTUqDow7fDpnoGWhN4L3eMjZYsqNAQnzUCRBeF",
  "key2": "2WGk5372ugh8pRTBBhdrwtnavk9q2yjFYXwbWkL6C2RbNkqk8tXSoJYbjKcipHXfAozsjVRm9zUNjJB2TXfximuo",
  "key3": "3kDFdLRAf8GR8fSFBrRVa4Q85okzKgNFLVwcpRU6ueE9RGMkAbd9AcwhJ1ANm3RenqVNmZjTx2xTE5vDd2YiFJpP",
  "key4": "331FvmRBgSMxKoBke6UJK5epANRQx8ewpZqpYSNjdKNY3hvg7utuiVeKWbVws5q3KHMrisdATS3nGHXCNx6P4Jdn",
  "key5": "X6oLw2i6eXKdyF5EZhfMhZAozkKhzxF9g2X7cTZBSBYF4kC3vVwkobx8Lb8zzksu2UL1NneNypN3qDeHsChesnG",
  "key6": "4XqXr6vbrHrANeq83CighngimBxBkAe3kvqktZvUxwK9py1MSos9PptxSNKdWNgpQ32adDDkDh6Z7gJeNX1N16WV",
  "key7": "nFTPc43mcjNXvvVyguDn4YwuMBPRUw3vx11e1FwHob7gX7T2CJqPyfNLJVaGw8CLhaaDwvTA4mSJGQRhsYuwxHq",
  "key8": "x8BFkMWbbe4GvfbsVREjGEDpbCzE8XHzMTAhrRDCSbaHyermvw8yq71bnYv3zLuaDnDU27VtWeaamJWC1t43gfn",
  "key9": "3mg2YK4FMtC8Efyhh8Ah2ygNWLLyQUQwzkW589DgEmZWaiagefByJk5HyVr2wbJZUdKAyq9Fe3rdZWnsksjoDwLe",
  "key10": "iK1dRABEXeTcHe5XfM9yDf95om18NKQ5Rh3xzypfEz1SHrqhaa7r6vUGR6BkLT2A2PPCJSV4ir5LTVi6Z6Gh9uP",
  "key11": "3evEt2wg3A52Y34VYYnQYJZ4EvUVzScszLWjFUpzvTNgAC1gYu72ppmyfqtrGJ6rsexr7R3AWGiQVB99cBDYAMqb",
  "key12": "HhiyYURdpAZTBLf74fxmBHxtueJtLzwzJqxF5ySJLZM5NrotRdK9jAhG7KDNzg2Wbx1F9xUhebBPmeJZmKfh471",
  "key13": "3ZqyD2bLevBUdMa8iCFuVDLgmR7hHE9s9gZZGWcrQTru6WCfgZwtyizLwXYT7AYoijTUsCW2RKgJBnbNJTnbp6Fk",
  "key14": "5wamrTrQXiwhv1tCyraumkwNUQo7KSt3yS4jt7Gu7GoV5mDvhmm9T1D8Kr3QMKMyYwvcofgKZYZiWhSuKiJcZH21",
  "key15": "28vvqTDzjDdWdj7ZptXau4omMpqurL4rD1ugeMJgRvn6MoNpC5sCGFp81Cw1BkKMEpf3DXQTMUMupLa5fBPTJnVY",
  "key16": "5eGa5FSYqRyPhLkZq21nP5jfSR77cqxPv9vA1gdPyQEzKB9jgo7Y3eQFbZkG5FxMb5XnaZJLuiV4hevwkNJnbbA2",
  "key17": "Nnqur7TiXpbZmchUyR3E3FgWss6vZQnYuBRQxKDHLHyySr59CzgPubjDkyeF4ph6zxtBdPXBGd9MXBFEww27PYE",
  "key18": "ReJ8sEwWeTAdGw9SwJr87KsTkzLjYMXXde14rV7JiFFGe145j2HreZrpyVbuz1j7MonQ5ifGh9WxVubr7gmfzUE",
  "key19": "qrafFcWUkVCQQGhQEiTwZCBzHJNHNW3V1n71fyyhoQ6j8fR7g7oeU9UFmPA6P4yV7txp8zxMaXbNdi5FHN7hm2X",
  "key20": "28Yj4gHKMJMVT1tpscD7gXszmHu4rUK1R9U5bGKq4NZ4q3fzrghyeh5WTrJNNqyK5kUqJRvHMSkSbkifXcMtxFqF",
  "key21": "9GTztLpAXYnyfjUSXDiXZtYDUZQD4MjdgxMUugaGfsANq6AMJTFQkPx4Z4YzwQ2Rwyfn3BUceKrVuxkTGHR4QZy",
  "key22": "4dFebogy9FjpVf9Yhh7M7xeMuHCqtEuGbMpDhiC5MSw6akAfKzoh4s62q9GRaf1R8jAGU5DBtq1snemRDKDrE4Ue",
  "key23": "4mpDZgCXg1PjxzEq3mW9SEaZd2Jk71jbw5VU76NNjZw4qB8eb3628myEcjPZLHAY8gBMJ1cDpAj1cGgbajEhpjFE",
  "key24": "5mjHx8KszJprLgiiC8odma9kA4MpVfSm5dS2E88P1vd6StUU57k11d9w1uzsu6VbMa9PsrLS95K5yPuc3ZVj8RQJ",
  "key25": "2CeSNEc3ZuoNP64Z2eGaXTgVweT5FGLkouEShZVcfBy1vUHBFVq994vjktWpDEeczDPjjUez1x5hCRkogvNmCjgD",
  "key26": "2qieHTCeZ5bDurWsVyt9GF1MbwfqwsAXTk6PXMbm87XZDDNqUG5VS3JfTzpuKpYCZLy2g4vMNmrpcVDSfbinHDvZ",
  "key27": "3xtdE16DsQ32Uo3HS3GVVXPKkJ8e7W7vBrZAJWs5fYfKo3qfA9fQBKPKEjfiDnPg9A2Q1k4ANZp59UxRYc62767",
  "key28": "3gpbYaeMCcrfr5CGQc7AQhpFBzrP9SKkiBszmCx5tuQS67xWqHxpyG8zHg1DGhvzxKjQ9wrvnNQSfUkSP5QgjzBw",
  "key29": "64MDCL1BGY6GVM7pwQMA43SvCmuom4BebJcKrSGttPuatWgUe87F8mdBnvnw15nVnVnYho58Y7HWCo9QHPHmpjh2",
  "key30": "4N23BPzENafsu1hWjC4mcTHtyg8Ckq56vWJHDB1bJDuxmHrP5vXSLZUNSZYB4nzZsEnVvg5C3gbgLcJL7oRuaDwh",
  "key31": "4bP4LMuYSLDqzAUpp4Z1jG9MYwBiRhVyZmTkqgpwGbQo16Pe9ELVs2XmQoEz8TEw1z4UD1HvyQTdK2xhyjUbvbEh",
  "key32": "51Wv77GwormBQBNZB3ML3eaBEhT2LFJjNrSmmM51qwZSMQbjw3o34w8FxU35RgvsUrh3pjpArjjmh4D9mknZoUFP",
  "key33": "3SUZxAB32Au5yea4ah3y5YQrCKxFmQ3xgyu7we9CVv7w38mE1BVf1JShV4x9y1u9Q6jZ7zwNiWdNhAAnEW6xsTTp",
  "key34": "BunnUvnme7zjaurWLiWQonmBWFUZhUfEY7s6rH81mvpcYM4biVKK5uY3dvaKb5RLfnmJaFbrT35H6qYRpy2UCum",
  "key35": "3V4F2uXKzNwBukFWfgyM7nKKwMHEgTUad4FvJ1NZX5YEE6v2EhDN16rAkyLSUiWGGWtrNCrTsXcWXVCtZjvcoxKg",
  "key36": "2dWH4uJSxRgGZzCgi9QtKceZV3bwUg3gXvzk5HujSYL69ZFPhRsayNcNd9UWntLS2SQgtap64n4j8yp7gHh13vQr",
  "key37": "4G58cVbNjuzVrdYMJsz5364vxto9JQ3Phhw9gj2w5S4pQSZDpZFZUonzf42vWUS8RySjZqgKwqrCLVFRCwmLs5wN",
  "key38": "42QbJUK9UieCPSvxp95w4ubMFkW6AobQA9SSXX2ifVADFTyQ64oDaDHx1LgWXPAhLa3oxP86YmCtCmWvRPZyJjKJ",
  "key39": "aDgnDQ9ghHTetswjgshgG2XMXWX1jbKGdiy4t9WKMYrGMWbPRWzETFY7i3hK2jQJkFdw7WLLVjCctdDhdJAqHqA",
  "key40": "3PeYW9sVavsXyNSpRXBG9RyqHzga4fVY38PX9rqmy4Rj2W92LF19sHySWQtwkhoyQmgMu264VNcAmaxT34Bdx28H",
  "key41": "3JzCnRGbbQdKX9HPALLdjYd4BmECWWGHpQwaRfLiRSepAsFbiDKPfvLddu715YYJgaP8Gq8AXErT9rpMV8xqgaUk",
  "key42": "3LmWv11QRwtvt7qsZW39YV4rtKgU1TDGHBgL64UGbgvkLk4mpHFVW1wp1sMP8EQgXwfdeYQStg7Q8Mmc3XUCBq4c"
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
