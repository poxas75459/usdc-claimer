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
    "543zXb3fLoGKYnD8RqQ74JhoBuKwzX7ZtTEh2Jgq5pfiejxMBGpafGhabKLLbNLDum5V8t65CmhjCcaRgGBDjCpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJ2VzxC7iQBmRrHix8vjr1GUX1zRRw9ddQKDa2URusortmWN5zmKekhM5w9gj9FsEEVbXKhxnFbriTCSAq2dXWw",
  "key1": "3QzGQxsyBGcr3VYisRrBCSRHsdtUcYYHJgQY7CWEGxgj6ekg9jRgQ2ZLsHa7PKeVjaKFAcYCWjDLWwNjMZz6Zs1v",
  "key2": "41yRZVPBKDWGLBriTf1x1soi1BEDCPbPwGRqqmGZgyHzSh4cUL7CHKybQjPyiS2dEUP7tKPEo2LrVvioySdkfzhx",
  "key3": "6212AErow2fvXwzpj6424tSq2jQbjUWHGE1XwkaXe1uJ4wJ2JpZT7W2hJabYsA2Mrm9QLrbf4m5mSshg2wGoRzoH",
  "key4": "5nQVjGqCuVFQ46VoXD7TijEjZ9d489BbJb6BLnRta5ym1YFtGAsAWHrH2Ax2XHFA6KmaZmy4nDcEVN93YVuSSmCW",
  "key5": "2GJomLoF9gfso1gEqg1mQwtQ6eDxQr2jUDZzBeGLUr22ddmRg5SkgdUtuND3Wnqh86h6yNACoiW8pzHWwsY1y6yg",
  "key6": "2frxk12jRKwMJsCvDEJW6yTzZX5AXLRnGL16k9oGwLWspVfX96x5xSMQjJ68HsKoN6VqyzkwngkSDscUzu98RFp3",
  "key7": "2rKEZSjxSUQxcTZ9jbynpqmqWmeBebjetR9eKta29VZtszRfAUxpSvwHPSavSBFZXqUn7cuxu2faS4PNPnJdksRp",
  "key8": "2n5QgpCKQbj2bt7ouwRkPZZabLjymCLbLNCJncDj1KmLJ8NUByX2h9C8CMWCUb7nK7kfoXohgkJM7s18nYKt7938",
  "key9": "5nwM1VsjT6Puz28ErosqnzRFDioD2DQZ9cezYezG2KXQMD6BJ3zA9qQ6ANa6CPiG1tDGWu9vUvuUnM2g76JLNHSR",
  "key10": "3Hb3ogofDYBcojt3USDTaRHdAZA6rSs8GAjM6mmm829evoZEZJj1wmJz6CAzhuUGyYffuMx9ZByA24FuUwFbAK1C",
  "key11": "kxvzAfMh2uGBAS57dusM9ScfGxDBE6Q11tjHz2FiygAbS611CuNco2Fr4yWikmuJMw8V48mMnjTMFdup7DQ6nMN",
  "key12": "3QRYPphDZ6BXUGJnTyywAPdvUbiC8t7QtDbUtYw6Ux9822oPty9H9SK7NumVthUW5by4Tid8XXRf2EZh1jpWTGi5",
  "key13": "5RfChJtsG3qxepSrYUCeB9c7uMR57BLSraridSjQ8WEwrUEyMXX6Vxh7xvJrg6quYJsCsBGvYRue31k1Yi8gT69f",
  "key14": "4ptXyEQSbcaABcSMHKQuo7xJ7VMu7xQojzESSVxo725SCAKnYR1c7pRUPRCvKCWv1SHmw6z5YCgKvNtVbuoshXyf",
  "key15": "3QqaCYxopVsNmMd288o3Xw8KFQtEdbjn83RPboPZPEvrU6n2FzYQmHBmHceexsmQp9ADXZyM27RT7HmeVRyfCVaX",
  "key16": "2hZ3BGzc1MvLeD7ELX2HGvPhhJpyVaUjkYXLuuXYjVPQVcoF8zpa7JSdrSBEU9soSdJ4LUPvuN2vwvyvFoaZNqgf",
  "key17": "3Ga9DJ4oYorb6EyidrXEbqkyNuaDghKxhKQ9xGjwZptg7kxQBGehDXFqww1BozKe5giQTum21qc5zj5QsMwhZKyQ",
  "key18": "5Sq9t7aietePvCbHW5SuVEjKhytBckobVBuUXmg8wvAPnUvNBF3bmDZve9yBtGns7TLKTwZTKvkQqPdL64VKAUgy",
  "key19": "45opR1HGLwtDuEmZQVqZYgx1ttMeHJQ4BWf4evFVvm4ydn8eRd6Q6gjk3EZnPzPFErJQTiipbZUnCZKLbyheqnAR",
  "key20": "2qzUvesBkSgs4HYXhwxhGb2qESprMepFVeufsEEPmgU1GY54G4LL7JtjAty81VJAiL9EfsSTYQu8voYpCgUjQtsU",
  "key21": "32qhDfMhAGXu6bmfpstivHtQf36pALMN2MxcZGrJyNdt3GreZCjpFzcNFC9DmMsz8nBaY2oNUJ98rzaEMRs3QaeS",
  "key22": "25rMHVRp44BgJiTh33ghxddB2nqYB2Eqr4Xzpq8qPwbqtkenXhZC2JwHJWmg4Jn4wVoeAj1ekiGXoaMG8ZBmPvyH",
  "key23": "eiJWEjASmRNHzLHkAhGoBaYRanumL2Xp9WS2cPxgbTZXy7p181mBXsBYq2swPabNqTfk7ZWjDJYkU8ahP6aPrxS",
  "key24": "4FzxzWsxr5GfHK6qMzX9KqehawSyqeXkyddUnaGW28Kda4mGTzKAcbGuCwG8ihmLLG14ZQy1TqHq5SKPbURUQrvz",
  "key25": "2vXgYZVwJpWFF9r2hRyeSMU57qBfienhxBkVR4tkSjw8yMC8WutoMXM9N7nZPNnbYjjdabH5gevSJSARy3xWJX8i",
  "key26": "5kCK4ezzkLjHzCQC4XrUpxPFousP6rjNiFSA2LZpRqpTK7bb1VrPxuL7KKbQYmw6HvY2rb7PNcGVDGtYtRLsdchA",
  "key27": "2HpDxSKD4yEgtzRubUWWT2Bmgr6HFxccQo5nPibAy2bUH1KWFnvYTEr4tDUek3BUMYQEtcmA6cZwBXq8DaAvDbcQ",
  "key28": "3zFu1d5sqNYbbbDeuAkL2HK6Cpg3NvZMkEFarJ8NHXHobpPaqhjBq2J83WaDau82ydWcjA8MasHK7mL5LSwyxtHJ",
  "key29": "dCgCvXJmy2xyXBvmJGUNs4nhhcfLWV1nHWKRfqDsxV6osjM5hDBiFdeqy2qriThvV8StRqLy5Hi83Di5bTCHkHy",
  "key30": "xNW219vf7B5tDkdhx4WMvFHGNrh4XZLcjQd9MHPvps9MxYu26G1PzvUttk6q9WkepgR5EtMi7Ai764aKjbf9STX",
  "key31": "5DUXcw4iBD6PojKwWTfgnrQkMNKLa9AmLraQgvuswe12ouVrH9kpV3Cwv41813MPNrwjqFeAvcuYwGqrqqx4c9VL",
  "key32": "4KoNQwiUfdv4dz97w8hsD9sajq12LnerXfqT2EXtFnHZYiN6qHMA6yfLpJrafcootoDXco8yKWK2MX9d9PGCe6XB",
  "key33": "wszuykKkrSjZf5g1VAKBnXcSCcURwBuRu1SWzo35Jd6DPT49URTe6zTMxrZ91Yxo7cjpUH9MW8PNCzM5R61ydQo",
  "key34": "5EuUMtCWyMxEbkWXeLDqhR69GdRAMxKgx8cQaqxirE3TWjMTwSQDbPbrjfz3yXcmQPtK7NVq7zfG1CYn5uuETBvS",
  "key35": "23YHXucSpfXAbBJgDeCoyhmF2enrkf9V572n4BXgjr8GtCMxbXBmWNhDKVjU2iarEetqVPEkFx1nCKyse5pprKdt",
  "key36": "3Y5h7auEMb3J1EpicYzr9setyNMcWXMVU3kSwDjas8o4oRxKq6eYJ3i4wSM6F19hjSLKCNhgpeMHhU5FDHjcCCRP",
  "key37": "gwjBGEyoEPEj37geeH79UyLPh1RbLFBz1gtSwRB5mWkoPNsqb771j7PVQqTcrxceZNXZPjnci6PLgnQqEUhrRHh",
  "key38": "5UMZSujURoe5yALXme9RzGjnazpoGt9cN6fCdVuGqgVQ8ZyNUaLjnJXpk6Mecp9GxpgTiiimFktE6UHTYgrdYw7w",
  "key39": "oWJzp7FdDTJ3axoPxjeb3w5jgLGcLum982myEBnFxibQVgBRAC64NnWayGZQdvwUDQ6rnbYcBuoiKpZUPQaLKPT",
  "key40": "63soDywcoTN6v94bMmUjNQkuUCUnTn7no1rKHjeVU6KFEopeGWQS8pU7XB3LYNVYRixpFj2qucm2RoxPFzE6HEjh",
  "key41": "5tBoBC89yyVrw3TWnh1eyZ4XYT4KzaNkAmvDYtHrfPGES3YtQ9oi85ybM2MB4MYVYaLcAPHbnQ152zSDFSaGJRvE",
  "key42": "RUCRbQUxzQAB9SsfhZXcfsdaGjJptFpb939wxtyemD3w7rmc91r1ix7uD3RFVBdFQicZfbi3XuhLAfrJcqZ6AJ4"
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
