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
    "YawCarQPy2hNiAzezJBeAKGWEZKwbT3gnHc3fmvmrh8UujFz3ZcQsvoipbKcNUG1rud6SKasMwsfG2kxL4KJSdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UxinvRifXUbUhUxYmXSUQn3YHyWwWm5xiSUY1trBmkxtWgY4mZat6epfyzvS7KKVihYqZX6DxgmSvueCD53mmPT",
  "key1": "4eFx15FYFKBgnRPB7252QfWN1LeYhcMrWr5mmJzCPca9vgViPXp6onueEewRwoFsaVXwFgC7ZcU2DY8FUqZ5xJsp",
  "key2": "uyzeeYsNDD3ruSQF7JHk8pifdV22f6HktUTqztwbW3D93ijLkZMp6rbSEzvSyCsuBDUAevofvgGT9kQT9X8MLwY",
  "key3": "22mxaV7jQFeYDEeUdWo58RciFZNMAU2dkoSRFZLyUZ2zNPagk5n8YRdz4btRYxy3U2qrErZNsk4ob6j1pTKFGR3d",
  "key4": "36WCsjSsiPDmRByrkgyv2vg969fjAFiJDdseJQB56gQMv7CPEEGsU9Uma41EDyok1TxpqRJgwhf9ErCCFfxUtmQX",
  "key5": "QqaAuEFtSxjU1uPyrzeJmGhAZTzwTyU3cxYiYSp8LuEMn6PssxbjvyT9W1UU9X6UW8YFeTHYLREWsPziMP8s7jh",
  "key6": "4bNAhSZic52dGTRXo7iPrViuTePWCBdUoTG6z7mjjEETAwEeRoLigfEJ6ytcUNQHcaR1PM5W6asmt6x4GAP9oTFF",
  "key7": "NjqygiF4xvXygFiBfRUoWVeN6ubUH3aSDAhfVhgNmD3KuetYiCPdxgVZUiQN8CLmtPkvG29FiQmsHM2GXAtKMzK",
  "key8": "3SJNFkJ9kKjgdgQKzf8uyLE1swpijaK8E6uk43HrTaVBJTiFgr8e8chJAV8mCXxnKNoXNaLgChJAxSkhbaKkvjjx",
  "key9": "3uGtQ4cV5Qnm4Rii9B8R7QPea4YTjSsAs6cBH6WXR9WAjRSVPsGcUgCUWnvTenapaSbE6pqR8McRbR2Tc7LSqRGw",
  "key10": "4wBQMzMMdUTsgrEEhs5DnUEmkPMArqgZcSDxeHD52X6a7dgxLDn6gGGXZiWVSz6ogkTZXBwPm8EpbmEyFgi6FnTB",
  "key11": "2JViqWRFFNhZ4Ry5xEew88gNCYvDqhYmoZ1yxkcQgGUpeLwFVVzWux16tvqGbYP7ezdJ23F2D1hrkoJsATEMKqUY",
  "key12": "453s9uoZNaUnuVWPW5zypUX8K1Eg6ZANC4uK4tfLC9z3HEKZEdEKZ5FwpR83w3hoU8FXurPKWPpVNN2kspus4pXY",
  "key13": "5ccpFJ79aHcChURUPvKuvXxfjyqCgnYz1YZE1KBNB78RDU5ttdHUqauEAFAE12qW7b9zXfDaZLUPYx2qCeooKHSH",
  "key14": "3X5fn6SnFW9LXTTyhAqKnRcKApWb7VkWH51NkCb3Rb27StgD62HArv5eAEVMApoVFG3HRzUrssT7mALRAVaYarX8",
  "key15": "2nXnUukZ59gLFWjfojvcM4xPeDgwCDcqccae8gfrWrCpFt2YfEtjcuk84N2nZrP4KFY82jK9BQ2ZacfUqfz9eTjE",
  "key16": "5SZCEWULSWq3CPRVXr9KtPQVkJ2ozVgZdWhxdwaeDys3G23NCMZb4yP56uj3ASgUmKsN2AyvaPptRrocCEL2DGkQ",
  "key17": "4FjJyY5HaC68NLxTxJHDJwJvSorQu17Ax2csBueVPogrVY2SBdr4j7aVrzPrRVbBur3YsXQoidW4e2Zgm3KiaHh1",
  "key18": "4SGeWdXzBZ75qpe8CVGJu7ccywVMS7sKvRS3igkyG4Vy7Bgn6FpQBdfUxvaUPTVitCYhfvENTjay3svdrGGFkEaj",
  "key19": "5Lb1HpjJDZobRekdXW4sZpRwMGgV8gWrRyXnfH5j9sSB2gHcvFN1zh5yQ6VTqi5xMrrYFZuQLkyM4qswoFR8PX4o",
  "key20": "HacadEnpEeWZcDyajjogM1CHgaVudeNR26gsReipnWXmaPJXcx3hbCLz889iDwJRVgzLGhkkCUp5Zd8z3G6GPef",
  "key21": "3ToF8xgrd67t7Q4XeR6rARkM2Mwn4R3kBkoWpwtvkCh5fLei2AjVee5k9wo9EpenG1eA5REvyAdv3yQYS6yYK3M6",
  "key22": "59tCkkifDfoALdHUsUuFNbM58rpjxHEB1Zc1a3zWh7pxh3qgnr8tux5zMA9BLpzSvXjxMf7DtRCYc1DvQUCSc1WV",
  "key23": "3LaLxxMcSPW8sFsUBcMzPEVcgSTuYSgGwWAnYDWPYiDooKZ69h31eeumTSWmDjAfUHiSftBPNzGhLQN15o2JF9iM",
  "key24": "vTV4RojHVCd6D6kEXcJ4EQA7GxeJANXE98VQYBBHAbzac4zQHxZeiqxZkzm5BbTmeQtv8NNrnZ8NFX3NTxFGEgT",
  "key25": "455yQx6UbUnpc4mdr5WLgZMe5hNbx3wVyN2ErbNakf411WeVkzXR1gQFmED7yy2oXkVtjJw6BDsSdnjfUtyaRojo",
  "key26": "cc75fxZRqkzvt5G5yH9EWksPbXBJCdJpiny8MdMLE9CRGN4HoujMHWrGCUPTcH4Qc8umzuYPtgh4AMUNcPyWJsc",
  "key27": "3NTcATxBrvKfVmL84xALTiNicTKNrLLpjpui61oBBgrTsjcajUS5gQTYp1vx8K5WtcXXJiSdYvxJYvX7o6fjyJ4h",
  "key28": "6QStXottg2ZaYhm4hjPpCmxhGoR83yy3ZYni2kSsh5Y6UDiHqxA8wn6tW7wsFYuCn3nQb4Ye2PKAgAVoHPGdNgD",
  "key29": "5s7cwTkMmKJjricUeU4W9RymqHpvJxpXMzPHhUuASiQYVyQiYwfYANF5BGq3eWqiUHuuG2nCtt2Exiukk3AYAMRB",
  "key30": "2544t6PavbH3ZDLkJtB15LNV5PCCsqQvumtuyXQUZNJWugsm7qf7ATXH6w2TumR2gPN1PfEEHrqnQMQZ5NBiWSwn",
  "key31": "zc6HEErsAz4etkBXJfqxJwHGi9J8e7vS1fx2Sq4joL3zVf7tBfiLHTjKy8YGKxqozTx8kW4KRczpKA3cNL8LhLr",
  "key32": "FT9v75Gn54jLgUz9JvwrUkbr6Wv5zWjX1Awv56QpqFFCQ6e3d1exYD15GdRsFSawejLfY3iuDHp5oN5d25gv92H",
  "key33": "21sMjR9exkWi4Xu9DNYggqJohqCrRUcdj82q9QLDy7JoMd5zG58TsGqCLrEBBogJknawGEUzbcsMDLSBbKoZnA5f",
  "key34": "2jgpxjcFDnMfDADiZM85jBc8mVSBH99AnJmZ5G9D4qahgH9yjW7jzFC9uLUFmjyHmpmo6qKxSEppZjsWJkt27RP",
  "key35": "2iSCVvCrA65SX2JzRsih7QLHU6dzYmkC1VdATgb1J5zVYn3D4Ltc4kVwzHk9hjxy9nbaaJSTLaSEX93AP4apZ4EP",
  "key36": "3WPAS7Sb2GmnMR97RsrNXX1JLt8wxGYUM1KQ2MLoL8pGZFXPSRKQji6B1scpk4MJJyo3eyrxjkLUtdiosfEJsfAe",
  "key37": "63PDcPs8VNkjBv5pw1LZzrC4vr8XxT84gGs64VrMcSBLr8qK9UMkp6hrJyurZTyXRqu9WJVT1UA5HNcKurqa7iHK",
  "key38": "3196VsgtRvjUgbYmVnCisXdGWQVB3sZPhRpeZnsiYNf8wduiHS39fiaEkaapAmGuhJS6ef6cCvUrMUYyV5AgL4bs",
  "key39": "4Z3tPtYsapVXAReghVfi118Zm8SMUiUZAG4doLqiT7msYmj9VdHp1Gmh6ECFBFC1GkBMkE7ssyGRRAACSZUFQWpb",
  "key40": "mwALvnUSULN81nxSJcebk2ornQ9TTSCpn6su25gH8wrZvpsb7fKKjdLQgVbZvhXHaMMbc1g1gxkbvzne92H8nP8",
  "key41": "4dXWB5DnxepRRQmScWAYqccLMMYv7YLTYzxpRzAPqTEPWpkRs1D7BRyrfcJAjL3fvnZ2v1gq86Tyh3Smo72Zocj8",
  "key42": "3xngA4eBLco8cU4K9TRWoo1BsEfBCJYDsv83BjtgBNcitUfY8JD16yRufqdYK1Y5RvSwiFuZjqu5568HpWHdZPrK",
  "key43": "QcQYLPHDqDcHFfaXiHKXXHFDgKKL79oSsjr4kvqECGahzq6wJApLG38dqPynRJ4LoCAyCvCfs7nsPnG6mBa4BDa",
  "key44": "523ptXu9pi6ZoMcmNPsQdzKUj8LuqEUkfRXHLEmfENbEhcbJY9cgRZ19eAo6jnGePrTbtNvasGHnXWmiKYmsoE4K",
  "key45": "3iz2vC1fGVm5toKyYEJ1SYuBVg6KsuGYn9cATeRwJWS83bvbrNSXuYsSgAupAR4P18ccPcCk4utTBtrVj6QrdWgc",
  "key46": "x9we3auuNXoVzb97yhf5EQqteC1aFNNSv67nu8Mo5n3WmXNkQ8FEbnp5LB4cwLwn2LMhMgUC5oq12HpRHrcbbaU",
  "key47": "5sWQX8er5w6iq7bQ2vcT9qZr9BwYidjkZu8tpuqdNs8xddu8RHfkn1Bozf6ja3HnnxTg2f5dKhUvdNLkbDScsXdy",
  "key48": "4trKGwUUzBzaZEGHbiwLQAHEJWWkR6sgexi8ipvnrN5hdatZWdzQJCWAAPRe9oxdXiHr2LGQ4nTw6UuskmBf8owH"
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
