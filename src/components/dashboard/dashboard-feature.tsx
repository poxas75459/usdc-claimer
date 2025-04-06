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
    "2bj9TNaadKS2cJ2WdKBxoWZYpAfHEnzd6fg9b9q1RiTNFHTJf6V81Mgv4PB1VJLv12z9bK55De3VnMzsyrEzTk9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQrg6fFxwNwt3YridPy29UB2CLdp8Y6uSwU1jAovqeC9UU3736MiKvtdCvDeHNxZUoWkARCq24TgHgn6BBSHeMs",
  "key1": "27QKY1Nefka8kpXmR2hR66qzFoAAbZ1T2FFqbDsWEbjRwPsoJtNgU62ogYFpgNUECVVZ5i2qQRiK6xF8dnWXJ6wT",
  "key2": "4exnzVAqHP7egJhYfM15N34hM25CPHZJThtdMVPuFYZtXwArxLe3b2KNSqsr2EbhQpNFV3wytNPzved8cdSu5jNf",
  "key3": "2y9dFd8dXnuYgjXDXTVeRwrgH4txPkAUPWdi8wS4JjXQMPgWssbRJ24skpsaqCBvvK694N3gfKAkLA8pHMMgVB6D",
  "key4": "45PdNGbWio3nLQbreBiCYf4H1kqqoNS69mgiNCsARkqhzUcvrhrF1Ya7priBKJmuxur6kyFA1UreFdCekqsttfu1",
  "key5": "4Z7h5PopFEqTFjwCzMRmuooYx8xraVCzJzYNFa2v4GArgMzLYSQpAvaw42XiYrJGHR7xCZud3GLk83pwagPQrbS",
  "key6": "5i4LjUXHX9zbLixJ6B44Upo44NwFf1ntyxaiuCz1E81Ueicpr2npvfrgCsk7fLUbF9b1rRT48Gegz9ZTKjLQF7Cc",
  "key7": "5hjLAMw8Uqk3guq9UerQU9ypLr2Q2GfptaVDdJRXWYRXRzUxwbbuXCXwP1v8pvsvfrdVpmU4epSZn4KNJ7AJ1rZL",
  "key8": "3E6B7AFCt5MRwLmrjnQjRLHusbB4CkytyUPm98V2QtcHJXhxEwzQR7uVLP9DxnLqqWcY1QoFJMdkdAnsSfsUwfM9",
  "key9": "RJEjFxQKPRGECNVxGpDQ27RmUih2EXJq1VyFaQqfo5JAtBuy9RN5XNsKmFivVsCp29GrUUvtia2xuS1sMSjwKRL",
  "key10": "3FRbfZyG4iahsjMWgZt7CmyFQ6QErFLTmA6TCBVL2fuEtuYj4ttqf4KV4Zac7KgSYJhcfteqkNEQT3YqiMtRJbxw",
  "key11": "3bWJNKvnJjJicZLuEXHacx9qa9hgsfQQBDwKGANiFNp9rxm6e1vm2Y9DGorR4XqtW6D1uhZaT6RPLLaGJotbivB8",
  "key12": "2SMEyANrxUnYhR7SYmUthfoDhLLRpMaHb3dTdiMrVvvT1wV9RLnzzsAuxQwj61xLvrfg3QX5e5H4NCCo36kEHjvf",
  "key13": "2WicDwSF8wmUAAedABViGUH4xo73oPkoWYX6cu48b5m7c3c5sHPQfJ6d6o6J1WtoHHrhcykLcMcHDYC9JTK3x4Kq",
  "key14": "3Q4Bg3sHv2dmtCkhFgbPb3X2aNrDDn9wE5Bh5JgUQ4NrYCBZbCeG5FX4wc5LjYCU2RZ2UYkfjfkykRXk8EkydbMP",
  "key15": "2kogx3fPvjpZV3J1bP6JghBDiQRjpD7SzHCotYGYsEt7CJUzSbjmrP4FWLnBo2uYmgeRYyvm9zHS1DjbbsNc8srZ",
  "key16": "5yFMP2XKT9hU1RAyy1My5BwewUEQrSfrnMUERVym9Z4dQR7ZMHKSfce1uM6HwoknMiLtC7QcqUxMnofzZsCYTXVr",
  "key17": "X9DFbb4cYKtjcKFJ5bW5Ysun8KAp4GmtV2QTomnHjzyrUPduMJX5jJHRUBBE2dpWAYtbvwWzHssbfNJdQS5Sdx1",
  "key18": "4ApEbThnDbQLnCj3PmiF86UvrVJSkaTTPMs8qdE4mAfCFWu1uFfG4tHMhR4L3hERbo12gNy7tKPRJQfrUx8Y5W58",
  "key19": "2sbAYXbFqXNjWKCxEWS2JDUVk1usGQtm9fZEqbGyfKkUEH4CWzCFRrtMpfgmxW8XrtJ76SzZXnkHLX6LKR1SrpQ1",
  "key20": "2HNw3JfqfWrghZSpBYCb9wgLM6ebCfb1SyTiFUmtCHEzRSWXKc47m7kC2TgXQ2QWmxPtEyxmstUDz3G1Qp4XLGJ4",
  "key21": "2EpeZJYrA1W1Twjb6fRAZh7JBwwaXYq123gvJmi1stjJmMoSmE7UhC2c7oaL7JMt1Ph5tfgy2NdR33G1bpX3KK2Z",
  "key22": "6434YznKNbi6fjXmkuY8BkEtXqYFY7wBtFXKsY9BA4bteAo9YYa38ZSTNNVLfktzb9N1iR9xPmX4jdYnHpdKrJ9i",
  "key23": "63nbfeuTcGfTQ6ETvd1N66gZr6ZUospJQoudivJzfoKY1enTdGVZkVixYM4uNHL3MkYh92KM9YcidygnChwWfH5b",
  "key24": "4jFrYxfAMwTXa1inuwVVsKMctBLMGpiuXngwYZpv5oFcHZmNZe9x8rtDdN4PgxKEBJzjpfiTL6jFJbbHJUTUPGPj",
  "key25": "4cdoAuLX36VEgotzg19Gty3FCoFHPdzMZBGX2Mnncy1BLwwyyHegAroxUqCHThWChfYKz1EJM9ioySEPfNtMP44B",
  "key26": "5SoQL2dE5UEGVLjVsGLRLSM2McoCFLVM7JNTGQWC9gcRrSgFMzk9wc6viiD9ewhJDWg3feQMrzYsfsP2d9LVK2oL",
  "key27": "4pNEXADNbccMGS5q5S3NnQG6FKTKeCjYbtQ6iXbKU3ANRQUUM63qh3u52amr3Njm1CY7PHTvjeD2pj5vE3fDqb7L",
  "key28": "5bWv9ybwHNij2CyjtWv8AE89XzUf1pozUU4RjRwEirCwHWNgaXRGiSpQbS6uAW2gBoyfZNHU6L7DvWvtnHWkYT4N",
  "key29": "5VKUEMffmufSL4aHpzMh2RHm8BbnUHvqq4Lvozc6M8ADexE9TmQ9ycG85Wzrqa9t8YQWqD32953GzVTrJYztPv6w",
  "key30": "2EhjfvXmJzCX2oQdhxBbqeWpXVFSXvyPxACU49YRmeUjUrwNneR7w8iWbapz13fCrgbo6YuqD8f3NeqDuxNjiN88",
  "key31": "4YQuCsarybiDepZNf5kBsiaDfjBpiAUiEjqNk8CKow72KF73RUXdUgabTNCFreqGd6i2xbchag87oJsn1sA2RkLi",
  "key32": "qWXN6GfE7iPV38UeHCxPFMfAuQ8QKdifQ4UuBTWdz9eP1Sb1xjjhLwhYuwf3quFi4kQwhFCXEgJZa8K2vfYyYmk",
  "key33": "2pLpBMAoS7X8NwTYQ2hqs1UPf2AXionz39vmwCtfUaRhVLn3LbaDJaiGzsK3oLa6Q8pFCFRa8sSovHZVmESzYPpK",
  "key34": "NX3QMqZNHvFqapUNd3DyQnPLXiDzB8hicjDmWtkPCpd2KWS342SNhycozCtGk5WaSK8MrYTeEaFDrd5FMnnC3d9",
  "key35": "4akjxsoG7wrRLT6oP2e4RbumyBzk1Er7S6kx78zusXbrgXw5wN8S9Yq9955p7itVcJMoyJdcrxkTwMJjsPBLkeW2",
  "key36": "4X8aioYZ5mpYj7YRav8T9Zz6JiVP6KEdzxFUNKhuaMJDZL6xDesRwYLgkr2hS6kh6TZLkdEKThWNWVsc96ReFLoS",
  "key37": "2Nt5rAzbzR11vxe4wKsvFkbBviZLkZpALmfTZ1EzmNxuQxmMcxXDftmu5TbePCNE5pYqofpF7DvgP7t2soGkWUwi",
  "key38": "Hcwi4GHBMRLn6s1hZZCJpCuxf3r8eq5txjXMy3fwdruyhoEiyKaMkEL2yuLJFVCH5FTpUBww5qp5QQGpym5viG1",
  "key39": "4jLZFdBs9dqC2WK6z6cVPY1ANTawK3RcJTTjSLmUuqxRhee28jFY1uHp9m1BoVpHSeYYPf9bDSRc1kwNxDbqyzer",
  "key40": "2tvACv5MoCaiKogk7CRiM4m6bh9GXoAKi5SKVJAUrrJgJMGB49h1NoguS7aRe3w55ULgngzL7CWnAAoAdWynpjzT",
  "key41": "JjqUydyt8EMLw9dGjkwDM2FMXN4WpbyQ2ZPiDoZtfb2Cf2EGpyq2n2X9SLkswQEk8uBZCXSbir8JVtyc7ULAjvW",
  "key42": "a9E3qB2QdMcYMsb3jdSWB7gy5N4RjLoNuquVviwArBfNyuGn6kLfs9r37bF5JS41E46S61bWCzPTGb56c93oAVd"
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
