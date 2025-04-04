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
    "BdcRBqHCUFpbSvnFt4tSTRMZRZy9KmbsBQR2AMVqwhyJJiXa9etMdrwAGFwYVXsGBfjpfSdKDQGkqn9eDk8igQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPiythuADZRTX1k8ADTzy8EkpwAgdukrixFQRe966NDs7FiMPBPAr8crB2UiKY1dv8qvtcBMjcqDtvKrseZ8sxo",
  "key1": "3Ad5646j2SPFVWGms4bd3GKfDjd1WzWxa6tYFNH6ArtXgNGkPpmKPDrPSFSAeBBCbk4bMzpo9XQFP6wF1oVcPriQ",
  "key2": "3BtKqtb8jpXubvPMyRZZK4gECkb5H8RHm7AKZJaE9bifCGQREPKtmtSfXxDgzZrwfs1e2ACK9tkSAbPJZawENpyU",
  "key3": "21bs4w2dAxoDKshH5WtCe3nBLhW8vgvhRynpbnRwonjCDVrmb3WABPiFEucaj8s5XPQ7MJ8MwWmLsJUHPAyBmuya",
  "key4": "vk8mgjmCY9cwEcGi8sTnCUmHXRUucdxx6fKjZQmM4sZVBtssxC3xTXriGKELcFPiTUHZzwieacy3cUx6PoDJmJB",
  "key5": "5PGxfzScWC2h1uF6esGypizQaQbppat32MmAkNwp6FZmWFJtA6uq1Tjn6NoziN72AUPvpYJu5DtTXMAw8syf6Vnm",
  "key6": "2t2nmZ95raXoMrZfJz7fX9gfVqHYfDSSWi7vYvM1zx9ths9p28FHsbauMzKnrEFET5HdjQf3y7tuksDptor8Ev7i",
  "key7": "4QwkJCY1fyqG3TUAzj1PckcE9sW4H9wM9jpcm5DTo5fUUwnE8B1So1hwTG8gsR2TYopGvcKVAwdnV93WHyxaCJKK",
  "key8": "4t3sXWhBQiaenb64YuKbxoJgzs5fbr9bChHMroTACezcKotfp54pTF645S6NuixmXZAxBncVQ3SuZyStn29aiFrd",
  "key9": "3cMjnzft3dpPJDqSf7TSpnpNx5Egce446xnJ8t7o4Qz4aDyz9QcjwdPtBfKLQY26Dvy7G3wYyskUUJCa3fGJKGCC",
  "key10": "53BwBwQig9RiBc7d2W8cx3KcYL8935XLHK37mCL8FHq9qLbJdf1YNZBabtDp2kXWmGDauWStdk8HtSL35WXGctXp",
  "key11": "2RKxv9hMvY819qTByXPLnJQ1zXtowDb8BmXQCScB5M4D1iB2s6ixpboiAGq83eMtgjWngzmiz8AM9SD8JA5vL8es",
  "key12": "3E7PaEhcXu8w2Mp36NnCmBcKBdPokuHY4DaHHJSBW48gWRiw7uLbx4a7sUrUHYLrYMmbABcWrBAZevoGHb4yyp1n",
  "key13": "5NquAKPTdV6LTZJ9MJhJPYuKejMufghi31NLAKDCWYLbJR9ne9mo7iWt49E4AgfzoHFtMjJUSvwwvDY6rDakrZA9",
  "key14": "3wYoWYrhkhPkhhwgL6Q3uHKgupjCs9CvMkQCEx2TMEEeKE5EKaEb33eEnhFnRhRvs4adUrJMTLassBM3pfxUp7ZL",
  "key15": "4drzJmyjzdRWGDEBAnknkR2dHJv9h4F8pDFVMDiGSRgtALcoyaLke1NFexHXZmP9tVbjPggnJUQdGpkLf7uFeJfX",
  "key16": "5uocdEHfrxa8fU5g6GHP33Hkmap8GtFKEvLicMnzFUPxLiwR2PsgJuHssj9fuqHRzE3wy3JZAyPTXSGnRw1UxsS8",
  "key17": "5S1eUDfzqn3VazhxPW38MBPVTdWNfZf7nCMtuVjg3Jk2Wv9U9GPw3sfPxH3fG4eWKtE8Z57HTCNTRi1SjViDctRx",
  "key18": "29Byp6xgSYkdZviBGiGf8BAWDFHDW4fyowRS2qerzFzAVqCGBhaT2T2UBP5RHFuvwfdgSaFy23yhsL5LT2aAh72P",
  "key19": "2CBCK4SPNg9AUE6vHzipuRKhTDqrtMUgzjAAP1use8mAytnmeobH3824tptCUJ5tE39i165jZkJSWSLL9fhNhrni",
  "key20": "3odJepUAs7ZPjeGi9QoEnGnDywSvQjyxqzpAqdZ944tUrfj31nYcaJKvvvT9KKMybrhCU3ZfqJZXEwAGX4wxLFyb",
  "key21": "3AXddjjdDGgPYh4atcX5BZSTYHGpuopkYJy9ChsB4cKYWx2g6jqDKiJk4u41YqNgsGfavHo27W4bphgG2ntesbek",
  "key22": "52exa1Gbvsb9LX1U6ia1UXG2riKAZ7aZ1xr6MC6dQ7r3Nbd1pcEhSRUQR95D3F8G8wSLAcZRcr1V5epiHaH9kpU",
  "key23": "558Sd9DZNHRHrCWMq5rmeJD862e4E8RijVsfTxELVHEQ8VQoWK1oEDNxN9hWNRLhFjBLaMxEJL9BCXSnSFmFmQwm",
  "key24": "3iLrAGX7NeSCUYAqGwbbKuacpCzG94VaHdKCCokQcWhFJ2onj3z62ood2doxBiu4RXWukyJambaKQWkoYMz8CVbW",
  "key25": "4uV3YsmP3ZFSUu6Eq8CzudJyU5nsDUY1zpkztUNu2bdiY9eYjBNGBfhpXNFjWkatSfoZwfvMi24cQ9mDkPGdu4dK",
  "key26": "4h9GMuUFMvZ46Q9N4jkhCuwhs9qkL5agXxMiBr4sNxe4BXEBJkb93mxHAkHfw6uBbLtmHH8gb9jYRvhj68kcqZHr",
  "key27": "4qVvwjoAjvDS53NVv9dvG3kzrdRQHfxW5FaPE65i39zviL3tsQt38ajKRRxHbvhRTwiwZSgKf7vBTxdx5dDycyDM",
  "key28": "3yd8FwbV2cxB3eGFvz2RJAAVyGGiP4WvkUd3wGoGQEJ7h3icrAHJqYhHXwACMxd6SjX6vtoaTm8AfcoxViCrHpuM",
  "key29": "4SXZroedaSCBdciUaToT6mxPawakAX9JucfhnCWSKJkS7Ytq5HGSLtGMWy6ctcc1mNNK45JyXvZ4M72xTxWrmCfu",
  "key30": "5zoP9DizBQkXeNAseMa8skYC9kZjeDBDbEpSQ7syEF6vJ1bvAGMNbpHHxVUrnypsCXhbu6SLcvJU735Pkx7UBxtH",
  "key31": "5nXPzZfUPaqCjPTBYJ6BLyDz4QL5EqaKQsoZ8Rbb6tj6nrQYw8uPGt1tdpE7ccdVtBEP9PTxCra3H1cygkbnjMJd",
  "key32": "32m4MJdUA9XgKCcumqwWLamheBv9wFf7gubqr3nPTuqXHgx6nNMmjh2eG7Yv7RwpuhyXRPyRfywBLjjyTe4p4eoK",
  "key33": "3RnEWHxGPxMCu6yaSm9SwfftKG6KFasNadjFhTP36ZB6ky48cPRMu4VdrDq6mjK4G2Ne4aygpcYTmKYvSV6ogNNH",
  "key34": "42p2hhhEXen3hdV9JKSCYEy8ZaLVCUVCBysGWKw1rNm26XyGerca48cq3HoWVkLxnJyVn4stpRHEaogB92FHRaN8",
  "key35": "JFo6NNKtLjzjEDLW6dzJXC9D6XX9nkqQvkJhnXYsGYz8i7mnXUo8EeRcpm4dbQ1ipongkhVdTsQ4zvYpfZJxede",
  "key36": "4CZB7c3eVo2EqrX293YBQeSQb3UvjhpDakbmdvkeZRsGhhLkFE7pTZdiZ6SHTN7pzaFeUsmnaSkjcuA1pgpchnGn",
  "key37": "3VP5vtjzYSoiUoAQGzzSQy9sHKV1pv1c9SrzkxeiXo5RA9DnNQgLhLtz2mehHFEUqQD6U1Baayo9cU3NBn2Gj3KQ",
  "key38": "5ETK8rWU3s294tXY4Fp54kBFLWoTa9TBfDst9CRmB9X6V3gLffzywFQ3GfNoE1kFsgTjedZo7Z2HBUHWW49zdJjD",
  "key39": "5zr6SNvisrVDztkVc2Xhs7tN9Ykkd3n8ovzcuCst7hv4W2EGo3PFbwjmbanu4uQrQjmT1ejEh1GpGCjFaW11LFto",
  "key40": "236CQ53wKqb5biyPcku5W2RdXzwyE8JyYgGu4vks6qcji6Gr41Zc8oaiRinsiUA4bvPKBGqbdP4dKfoHFrsSqkgh",
  "key41": "3jLYufhHwZzoqLY6LMBKnhuyHQJWVyxWVXbu8TeM2tggXA7go6tsJZuTMFDpWwdsHF55hQmLycERihs8kE2U6PtP",
  "key42": "5cMbadrW3ub1ifikiQZSrwrsyybnBYaMDX6UL7aYLQessaCFPpB3yH4kstB5XNKA9Bnr2vsvxWWKL6WzpFHUvGi6",
  "key43": "4HDvscGU7Nx3E9C4TaPwLKTA6SpkZtFNQ2A4xFcfvAzn3JVr7TAPMfFrUfRLHYjW1WDaCUPgs6NJDNXbPhmKBvpC",
  "key44": "2qiCeLQVTPPH7s7nGmpQjaDTBFLzdFp25ehU3AuASM3zcZNw87vVBZNiGTheAbKEt9evwonK3C6qAEcD6aP1xKvx",
  "key45": "2mmEbTeEGkA2owim3pCEXifjYtEjnkWQBNLWu9epCnuTgozmiuan74hCkqBqJk6Vw9GGSzdHNiyKeiwa8TBCJuie",
  "key46": "Pgf9xrqfA8jrAAHaHZxerZiQmVJVJRtZZoTACsT7cAVFcGUBz2cbFQ6ryHPaP7DKrF5NLFsecS16HEHyDY5y4Jf",
  "key47": "As2baQv182XPoC4SVggrxPL9jia4yD2qJP99fiMB43VxYx6e49XNrYm5uVbEye3APjJvjphRu6Er4ihSQJbpBGB"
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
