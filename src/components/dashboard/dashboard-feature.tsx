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
    "55d6Pe2Dt36LFGvWg7FSjuWCUxJWZUK7PD4ZUaPPmnky1VSEV5EwKQv5HDhdFeShGUS28eTXVgSKZCANtLzfrPv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566qPU2GVMoBkX5zoZ7kuQCzq7DFNhYyUr8vhLxxbN1g6qYK9he1zzkAMNJ1u2nos57eGRo3K84FasUr8jW6t33d",
  "key1": "3R6gQkWzrd5AarEWfqk5UdTfF4mFx1X7hhLFK2EAJ1hfDN5uD1RxifewfFkzafHuXybEHkXCz6jDT3X9QFMLgaBr",
  "key2": "4K2RAFU3gedzEJtXao8gjterQ7ipb562PhwDe6yeYe7oXsDfTpC3XcDref249ME3m9sQqSPTGj1JemSavXo3GUGw",
  "key3": "4r21E6MmV1FcPiCDumF5eFt7yt1fW95LyxKQBUoCLGGJY7qdKbzupAgRvrpEA1Bi1CWCbqyd6bXdKzCGnD5jNbXs",
  "key4": "3iHx6i7bbCFuGaqutAiy8Phq4EoCXWXu2p7nLwsy8TKwutoqNMxCm5JJ2HEeGLXPUC1ApLabaMWxgvhLtqB5FBVP",
  "key5": "4oLQiSE6uYQVKUVT14KdpzBaC5N6Tj3aSJa6r1WLAHXBY4kfRHPMYzd2vGTTXF9mzg9punwpDDbaBcS6qpwFRcqD",
  "key6": "2jDVaygkCmnBLRy3c53MZetwwB7Y89aYJzgrD1dGu6twhckrpNnseNphpv2tdeeC4BeNHnv6F5MfxTEbSiLe8iU4",
  "key7": "4aMo6MAsvUtjVq8FpBut8b5Fy7M889Q2Xq8ELTUGQHLLC29DwFJtjXwjV21VP8FkauW92mgcseVWfGzFeeWPWST4",
  "key8": "XzhH11iUy2skWiZpsePHRUWA8Q6eDDNaWwByWCwd4TpbQm9yrqpgUQ9DNfL5jdCuCxzsP9dtDz174ogEjCNFUAk",
  "key9": "642ebLb1XWGMC7pGDofj2zzxGxKeaVbMGAAgRLJSUH838tbiLNTC4Go7mKQDRLzA2Zz2Mieh81NPKuCquPKH5UUu",
  "key10": "2c4S9SftYGrPD5qhcs89Us5x4vsipuz4GxjAX5tgTPM986wiXLxsZLnnAfVif49PNRVD2hivFFnu6APnWiyYCNbA",
  "key11": "2nkN5J6hh8qpDkir2kzAufS6AzoQ9X8XdfLeq9fCMtZZKnu2BBBkSa8Ma5u2aSo18n7XNxWRVDCk6PxK4RVzY4gE",
  "key12": "53gcupCwW44iW3tvo2UG1eBVBk93MCEgn2Nphh5b39UGEcEChnNhMcRksbbHt8QhinF5GDonsyvxXfBXzLdVWmeZ",
  "key13": "424w1taBVvNV84cvuWXX2xLkGB2c4dCFkxgUWXLPd52hWwsY8VGgm5GgSdg41eDr8AipGd4Sfi1uVNj2dnej13tW",
  "key14": "2QUEHHhbWNQfsAyDteBd37nYiH99ReFnhMya2TQTNStmN8r5gnyxnWULngK5MiRi4Qxrpk8FPYntHabURCv1Xn9c",
  "key15": "5uBugtz8Gc9GsAcHVTL3iqxx1q4oW7armoPV5CirWTDnBLq6rBScjW4AKHD8zBfXeJ1CwAYAj8vq4z8ddpwjZvLM",
  "key16": "2QXew44cdJ58MEY6q4KckTevQwTaBuoqUcnXLRNKGcY1ty1qmEXZ6sBQRsLFaVPJxRqqdy1WgxQjd4ysGiZMkHav",
  "key17": "4fdvXW5sp9gjBxManzyuHrHJYy23qcac2DY9SZDTquQwWRTUfXns2MppfDQ9xEbtNX9nsdpjrxm5pfYDKrY9qmZ6",
  "key18": "5SFL5GCjWVc6vtvsKz6TE598yHb77XS3ev9AbdmpgMfzRoqzhzW9hqDx6E2eKKpKYJnCERyVgKsAjVkt8PQD3diU",
  "key19": "5RLfHrRy78ufEsjNAaE89enxdDNqAEdYFh9pEGJNyAWXpqCU74wjr9m5T1Q88F8R3BS4CfkWo2XTsaSzBxfU9VvP",
  "key20": "skrAe1iigV7QPCbFHkoG6i9Dhs4UPKddCzdWLreJMCWPQeVy92RiXPidKA5qEi8dJyXjxRgGDHczFEsANj5z3dU",
  "key21": "599Y5dFBCuVyCHyNigmkHsDxaScV7t8HzaJbdeFVhTuq144iP3UgiHUJMAPSB1ryo78LDaLHw1U5wxH1KnCJ7wvX",
  "key22": "5RvkUny28cMdKpmsGYc4HDvRYsCFtgLvPFEm1jzxdt1nt6Xfdb9xThmjRCEYK5AwBTbPwzTDJcj1YHqsCjjzGvC7",
  "key23": "4jt8AyB82fdVtycPgcp46UyWJu1wH4dCD2Mb34WwAMCCHmcdbynHJc8YoCWFQ59dBuK3Cu5rRSvTEwmYQobMNoG6",
  "key24": "3F23UVcuvW2DpSDDUZbRxM8t7KiUjF3mcgq5hnDFRGZPwWckKYTBAfB8UNTCcW376Adkgt28WCTegeqJabgCB6RJ",
  "key25": "5JzNrSRaz5uQT6GFuGJS149XLRP6PwHU7CA1QPeTLqEARkViB6DJiVy8wnaSzZgDoSBCeHqF5Jv47f7mpDLKVoiQ",
  "key26": "51h5AVmzyaTY391tkMqS5UdcT2xEWrTTpBPS6GXtrz9DzjPGyRtXxzjVrWSgmDhBLB1BU2GvzSqGZrsQyfQ2sFcn",
  "key27": "45154WSmYnXUJuwtMQNb98U49oTatayuJfo2Wuz1GBJtjiJkdHZs9Gd4ckRw4Gr5Rt2FLzfRHc8CpgQumontKrrc",
  "key28": "2ewE4XTwv3atQqPNY2LtHqNfFG82McAjJs5pavUVhkUWKkDmdrPVZSS4dwB1ZLKpkW6YC63TWM57XE1wqDpPTFHB",
  "key29": "3wwG9XDcVJo11HJcSWJAZyUXjmWobr6jLFQQjTkkusorsvXdUJnNsBvktJhJs7uzgdHwQgfuevzGBzCwHpsQ3HnJ",
  "key30": "gDAWwpeVM4thWE9keYabJ5jXQin3hgeb9scLJsp46sHNMx2dbnxRuNakvMRddYZh9tM98J4yjguM7Q6oZcEkBTZ",
  "key31": "2ss1oJEdibd1vCSEbJVUwQX9dGg4ukUSUM92j5iDrL3JbXSBF9e34YCPfoJKCfoef4UQ3PQgbtEHyXiXPk5zpUP2",
  "key32": "2wMf3nARq5ijpHnnHykEjhXYcpYeZhvdXJVqodGfh91gNTccHJJRuTW7aAzZVPX1tkRzR95nKkQkg57WaGyHuR3H",
  "key33": "3oe9fvG9y5Bbzz3428g11z1iebL7B9XPRZ68kBvwnxBka1idB3rxfqdCwijrbbCRBEjtAA6ynoZ6n6fXAsjhW2HR",
  "key34": "2D4C3QvWqZxigVjAWemKQMvn8ee4XiDmJ5xdgXosdNE5L3r3U4HuYHrtAXfboxrXLM11AMPuvnd2yR2kjExhqSwy",
  "key35": "4H8wCnVRdrPGzgboAjX3zyxsNLAwaRD4MEyhGpi38FhSrZabJFgtqw8vTgZDLHUdhUsuogzoSUczVAWzXfsSaxFD",
  "key36": "5e7rPnZnKEW2feScw6G4obgrkz2mv2zWD5nwer1S6UvmexMw1VKwLDK6U8snf87yhHwAYnE2D2zWXfz5CBEqxLyM",
  "key37": "t8jZyaLUk1Vex2HCWkrWTRRuddLzS91FwU7NZuhF3oVUYRhKHbPT45KhGHEdb9Q3jpkrcasNtar4FBDGtUwpUnA",
  "key38": "524cU8G7U693o9xQJnjuTZLTXt9yhRsCNwQawh55kLHXnKPDEcH5FZ77mzHSTevxvnMZ8kLntT3GJ9Uzt5XpsU8T",
  "key39": "4dUWVLykbvyfMZdVYEmtvgVuuj32tN8VaGGirudDWf3TYtSo3g1qB4252wcc3Rgkvv9mSu1V3yb2myYTwX1N1DdY",
  "key40": "4Pd9TWaims98FqpRVvwfX8D4ebTJ6MgTVLsDbXo662oEnUigrBvHSvF6yEcmZ2EjHXZR96VRrgB4dki9RbJPHg7m",
  "key41": "65BtvG9tXdYw2DCdtHjqbuComxK6kMvwC2hhxCZaswT3UXXBbrFQwJADoiasMmTFmN79fBjXbEyjRtJh13NkQH9E",
  "key42": "bL2YjFYnJt29gVnK4phmEEYYH5N4VeZNao8cLA2T4V1j7iiC9ZXXFTSDpeDb9ZuV11H1CtddKtHJPb1NsdTnvZg",
  "key43": "9kMNpigAVjL8sWfctA5AX86ft6UBzYwbMqZTEgohx8JoshnWFJPEKwFxPE1FHLkJiwewZ3m5fS33eGAMUNfsNg3",
  "key44": "4ziDoiQfEwTK8dYihhV7K3onuUmNqnkxVLgSwCTcJjFFbgnfioME7N6xGpfCxjrJ3XpS5SvdmtqZ87c6s3RPTZ97",
  "key45": "585yVZKtDCHTAxs1EiJAb5V66TnRR1XeKWmedDwnUL782orcoPujNLp1iZNqma5CtXB5RU1CW5BpX16nzoLynbZN",
  "key46": "4G1LkW1mTUPgRJ8BT4iPxYVwGTYLZ9RjEHrC9uBbUjwEASH3L3QP1umDbuquEw3R8aEyQrZ3xarEo3VD3diH4MR3",
  "key47": "3JtEdcXNS6PNT1vzzS6TMnav54Q8wqds5uLMejXdNi4rBpBw4h1yiMKPUBB5uduzvhazQyNugDjswR53Qe9o1984"
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
