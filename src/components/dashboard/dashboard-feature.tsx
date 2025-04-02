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
    "5GaH95uvr5ybCNEitS6RPRaHH3dDZi8Ti4TWFefYXx63pkBmua6HD1UoyBgY1Yuduf1SJEayM8NRj3edhQDUDf1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8JYwi1WtLeQn1KRQKQMdvNGVsa5XXKzFhAc2AHrEwpRYMre82JMFWgjvykMDMEJpy7S7RpvaSnBePf6r7oSthj",
  "key1": "3NV6Ztu58U4K8EtFK2PYBFumY4oNRJQBGNuG9TtSqK1bUKDmfXR4gwN62k4qzwh6qNixFvS1LbjuKZRFKyfY1fim",
  "key2": "CwjBSBRzUxCCvS2DR91FQr856yAjupo9yELUG5JG6ixbGfhM1TyPne9FntdfoVw8ANKrUT5g6R9tZZQFBP6ExfM",
  "key3": "hG8XQtAY9zQWCubLVSApfDMkz9gRvBDi4Nm4pxWdEqpf6nhFLbyXase4a1VwZYzJ5uiS7DkyJwD67eTSgMKBvt3",
  "key4": "5ysrKrsLb9RwKbxu5TnWz64apUKiujNhsvMQpp6U9NnWvUKWrdF7rErtpEnK31d6tG2W63X6RdELUdodfNwyj6Lo",
  "key5": "46ZhYvHqmths7UK9JbdXoFmJCz123zVtKnpFy4oXRyXtokxqf4wsK7XrCsBDHdFX8vSvPmHBtrd1FA43DG2sJFoN",
  "key6": "2nEfrYLsHS5aRAhnwKTUpFvDYfrbUTNogn7dBqGTP4d8fDkamWkdoUzgppvCCaESrycwsTZtKBfELW7BktDrAX7J",
  "key7": "QgeEtqAXei8WCkvbKXVte6ToF9xk5wss9anaT1P97VEE58icsz5qeMBQ6MRHc4q9z4fRJ2YFQh5GgCrbrSAdbp1",
  "key8": "RhYbmA6LEi88UqVQikj79W4iqr3HFa3MBCZmFwbJgHV11a38iV2tMbFUh1WXBVPPG1VR3A8ywACA3QVoqi2MaZf",
  "key9": "35z3QMTe9VUH6zsfZUiqr6TUVDPLvx8D11o3YLUdXa7X4b46QjCfjsQHE3Dzam6UyJZb11mjTS86A65dDDTHA6aQ",
  "key10": "5yEH6Au2pjo6L69x14gAi1fFNNTWHUBVShfqy48mQ545NkAvxwna5bxJ7z3nZCspX2ZtbX9oLuRsdZ2hBPqL8tYN",
  "key11": "38QBFZTEHQ1jfzc2z6mYgpJmiVMcMMiQC6pW8ScoueiPxjGXrFccpkEMkBaPa1SG4kj2cRkBfXFGn8QM6BZAB4JB",
  "key12": "2LVTHDezyHQXaVDvhiriZRptL7RVhPLsqLTAr2FCar7djXsYUjVjJ7St7vNxgXpHyFMYzEstoCMeL8kJYMbht156",
  "key13": "27jpEShdtkjWXx5fDFD8VrWL2sEK6KSWvcg9Vtrg1cXarFnrpcR1Jsj9CNXfB6gy5FZb2dBmUHd1qtrEGDuBLFvp",
  "key14": "4opiAB5hzu96H2AAtAv75EJRMDYKpWRFBmifr9Ww7EoXHKNqXZpEoJ5tWy74wg7qe7Zsp2v7drJiNrbuGtZQDit8",
  "key15": "uwh2eugthmzRBu8uJT78fgURPJ1sEzNN9bce4cAc1bCzKmH5EZCy1FtWQU5Hq91uu4cECqA8mcNtHzxM4SqDuPR",
  "key16": "4KZrjtHvoY7uCMdUVzEXu6qRgCFqn9pHhc5gfCDpoyk29Ezh8zzMjyWaCx3LH7rnqQWNRmzWrETTFQHv9xwmZsrn",
  "key17": "3mmL9GQE7mB99jLw3TgkakEpymfB9267mRP8mMzL8JQF4pjMV1t7RB9DZzkiCniGFw4ht2Ej5kQL558Qd6Zkx6QJ",
  "key18": "5RHnExRNhKketVUo56v2deedwFjvtNuVF2T8GMp3bPa5DPtbphfs8FK4LveyeGvH11izYRaNHHxaeSVgbEAQ4Qag",
  "key19": "3D4ZGTyc47jpf8kCXrz9LQJFjRdZtXbdcQ36Xx3QXRxxg1J6Jpo9UwJSsmD4oW4CQSJahX9pSrMFL2X51hWuhCLP",
  "key20": "zpbRYnZH4kkMEAnVeZ2ZQzB7bVRLNnG4rCMvkcV2jK3QtCatSDHY9MktEcxXXKjcFxM1JnmPCpe5avxHYxqkX1L",
  "key21": "3X2Bq8D5q3jFFsEzqpBW6VdGiHhUdkqA3UwdRB9H38y4YPftEY24FvgqmJM3AjyddWhu672FMQh1E34PqdVGPMTz",
  "key22": "26djYq1K89ttseAtwpkXj7etFfkf8JVqPiSBf3DsiWc19ViVCw2Rm3TAHFXCFSPQZ2YXDARLrU9mYAqQaQMge8SX",
  "key23": "9S8rYveLLc5Vh8zTRWkg6shPSWE87twthm55ERW4qKDrhoT9BA12Dofw8yQ8cQ9oCXaq8s89W9WYyHBQnEBSuXu",
  "key24": "5PaPFHQ1idPvibYj6drR4Z8ddU38hjeCXpNjL3APnmdvTyGWrJDmopaz112jtaoR8zDDyNasArG5h9UBKiz2vtJB",
  "key25": "28UFJwnUWTpdvvjj7AsEJczQd3z9a3c1UUJB51wM56XuaJrVyzeV9bi35z7C5pnticSzriuNoP9cqAQtToKMexZC",
  "key26": "5FJJJnuo7Qre8Y2YHDE2pRXZ1XHqfP1LehGm4WEHwA5Vd8Tmx6pSxFmfNXe3RLorUcERAfBdNGrsP3W6sQcYNmrY",
  "key27": "44PFNSBvCTbDaRtetx48q3ci5g4n7HJZ1ZcYGX177s5bQ7D1nKdyFwKtU8xpUdrp5wJUsgmkY9iE6nXKbRQ4ErhW",
  "key28": "2uR4qx2CdFiUSjBhAfnnyYZVn3iB3EuT19HcXTew24V5itTrHyWjZ6xan6pFj8EP64adhyFsz3hSuam2PsRArbKg",
  "key29": "5afQurkgR5EZGDdwBivxxnWLkRE65ZS8eJHYgVmMwmULBUhuQD6haQZYsiz5SVcdGtq72NGX5wJGDMafmQkAWevU",
  "key30": "mT7mfu7kpa1PtdhNnnsmUZ63mjcgX7GNAtvcyNFVTiZjLviAdJpE55Kt4Ca1sME4nYN43F3bNYpfbHzRrxvSDxV",
  "key31": "2qZ2EjsQbCCwJw9HghMYCbajFFLSTnucCtTrWGWKnt3NBKVBfbGMyQAJYc7Aps7uR2wCGHoHcYtVuQUwiQpeVWMk",
  "key32": "2h7pPqBYJzkQTjt1Qgf4A3V4WkWstCF9ifT5CEhWq8ajcg44gSVHwgxp7gfwhzMyCL2EWstCe6dRcwrTdPjRfFGT",
  "key33": "5xQjxB1LxQHp5yeyniCW4LDQfQTfuTsxfQKtmj3Xe9VhGbvm8DLUDMnC59VjyBHxCjN2q22Ye1hfNinbqBYZLeJp",
  "key34": "4oey1H4JKnNqdvBGdvhsWY844g8nbm5VcDo16EuaNCt5rG6CKHB3tv5EiqmyFyP1op1j96KtdnTcvrey1C6ZoEfV",
  "key35": "29bT84wyshPbVYEa99kYdMSHdH4MqBLLV1NXJQTJvMyfq27uC8aE6jUoZ1j2M7gc16AwjU5e9RJ7XA6k5ZBh3Xid",
  "key36": "3nHiKXfJNbUPGBc4sRmia4TZDUMPyDT73KVxUpeJwwPdrYtW4NN6RNEnHB8btdVxB75g6sNMZFjcfNdr9qYUBhuf"
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
