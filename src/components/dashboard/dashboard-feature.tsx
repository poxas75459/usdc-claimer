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
    "55ZnLCW8ndJ6k8vkmRGQNdQhWZio2AjqnUQgr8WXXBs742C862VGMiCGc7YFrxBPAZSobh63EVKGyb5zCDsbG5MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ragpJ2UViBLH53zKAHoJYPqLuG1KJKwAjkb8Y3CRS7mNrVM5vcrVPHxeaRBF4BGfnRRFyEwEVAYJeP8AB6aw94V",
  "key1": "34emehRuj3xcbM5WpEKSJk3KdDSoVbgDgpJorA9PojDijXGfKXVtoq3crsDMhi4unqbrqg2vhYkXNSuV72C8tFYz",
  "key2": "5ecoonohUwXUzyw43VSmms6Ervekzv9zreWX27gfKw14KUx93TS2fRR6u5U6ycv1dFVeGUPRTjJseh3iUnfqhHGM",
  "key3": "3jT8ntjFYoEYJ8mac3ueHCQbc9TcmRfFswYzs4TaGAf64wvtCyGeLf9KXhsn41wLLEsA5aw28Y5H2Q847pjb9xpA",
  "key4": "5psvbm7jBt78JvW6TMh6W6iK2NLW3bUtt8ubFkZwPqYNVerQJBTaFRQoxytB4F6PQtSmRinjf5pXtMaKehux85Q6",
  "key5": "2dsAnMqMJXXwYz3VMMRX1cKRtdTsAqE4iJiuCZtYokgEE5xXg4re4aChX7ai4PsYwgDZ1N9d1zHwU6eiP7X6Wi6y",
  "key6": "4c5CpUX14LECrdvt2XEb12yfDA2U63QdzTYjNkcoWmzx2dNNWy6wFADPUxvKEcKxYYd4JuAkAuqKuYsRxZbStNSe",
  "key7": "td9YpDkGCN9bi5igCSfdP9qNS1xcs5gLHYok4sNmWpWcv6MUYxfnQ54Wm2vFiT1LLwrFGXcLTUr4kc41VVVdhAJ",
  "key8": "2Q3PT3R9oi3DJ3rmZbPbaaKaP5u1o4yAp2R4zHqZfEZMJMnRDP6KcbBWqfwRauavX7J4nc88VL1BeosamwufYsYj",
  "key9": "5rBW3YTV18YEtgpWSqWWWTeXzJtTQESk1sCAQACEBBh6L6RHgVHDnWkzzNxQd71y4QWiCeACrTXqBDBYFsNJd4rW",
  "key10": "3AvizJKGHMDuMzH2uzRgzDkvSPj3qiWsxC9V8z2ygammxTSuf5wCALU8uAhqeJQqpsdbMHaXic2YzCMMiPq6TCNz",
  "key11": "5qaBVEbnWtVQeMWq7SPo8Z2mjzAu1pUq4oLPRDDw8TDgDcfEe4WLvbULEE3Y2o3VjzDEonfY3GamvfJuoyrNwZ2e",
  "key12": "4ftAXKZrRJSioAzR7HicWzW3krFHGzt7sGQ4FkKw6EjEjaoYFNJimau76v4UkJrmBYQBCA21FZwbssgdGj9zxUMA",
  "key13": "T4tirqmrUEBmfUaffz7QnXuec5AVGJArwMuVsokct1C13K2Gc3giRuYwgN3gyVM7j8mCZhnmkQ4npZdYNfqgh5K",
  "key14": "3LYQMgpQj53S3aVygRMHnkqAgGPWJHDmt3diLYUF6zrqUGxQVxzaDkQoxHJGQyHjrjfnC4nKH1so4nvH45HgzSDA",
  "key15": "3a9kLPBceoHeU1FBs6xR6ccbPWuQNZD5g1QGLG3b3Xgbj31chysum55eDKiChAGE59atkcJVa7djx2Nw2AeQX3AF",
  "key16": "65z3gXu1jbonEv7rLF9gvxVWe6WgyUyLDtmSLYiXzMWaTARYVBFv6TvZa1j5JngbGsNmEK3VrAS5bAWdUCsJHrv8",
  "key17": "518A34ovACH7XtiUhuw7NTtk7W7W7nax1XdQEyzPoGNxHt1xgiKGky3igyE2Z8y8uq2KZrGEooujLShrhjwHMEjW",
  "key18": "3EHtQhTbQ7boxoDmdwVFSpyytiquHgaQFHXPztm2yfMowSM6pM3ZGdupfVayakCKNNQFuQMyM2cug1bMenuqekKL",
  "key19": "4M4SuKcTYT7u9gkEKiZoBbjGrwxJyycJ5E7TM7BrsGUy7941UFyn2oPXrqfx72ugDzevEhyx5JCBc5jFmcxFQDNZ",
  "key20": "4QLSBVCrcCK3yDKKuyEiHBVyshzJF5ZEqLAv2NEAtrfp8ZYbFqc5Dsu1icDxmi1Pq1RHy3D5EWAjYCLeS4qyWDqA",
  "key21": "jNGTjuhYXjtWmLYeowx5TwYGRZrJCKTh6k4A8z5nrVviqnHTRmBEyJ35tQEsr1g8pQDNcAheYFEXBARsxqESFBR",
  "key22": "23omsstaBhtW492LW8vxsN2rgvGQ7ZVpyCAVcVDCA31u7D8ap3UHG7jSDE94ChbF6u6eqopuGXb8kSNSDMF5bq7V",
  "key23": "2G7Y249w2Lo38ueVJUvBWkidVidip78G52x3jhVYn42DWYXps4sEdsojVKMBBhizfS264m9pV1cpm9XnWnYmQkmJ",
  "key24": "4J8yMECmV9anEa6NEG7HqzSJn5WaBd4isPijMJXyzKcke9N1VbADCkPmevmZthar6uXd7N5wzgPegmaQ3C436gSu",
  "key25": "2RU6ow7pCXaTuJNzgspHfwn7RPy7VnUX8DdDu5jSeozSH4WMu55cC9XBvWvVE15Xg848iC8ytuZbYFeUYTS3KuTJ",
  "key26": "2czkhutKTLwqQwSTRNyikn5brQwd6CxBPk8jZrZhsUwmj6GLKJQq9cHujLvwCqUCQJxoLobmEeqdPzfSt8qPZKgn",
  "key27": "5TJQF3J22oKyCcP7ofdaXu6PFKbs5UwSLkkPwYWkdYdernK67ryQogeSz2jkhsKFUCKsvZuprB8GNyY6PiB5EUU9",
  "key28": "pTF6RUPuiSf4EFej9cbBDz6GfuYVD8AyzKHSmZfkYPYyNvvzFEXNp72eb4kAxCp33KCqhraj7K2bSsZDNQjtG4i",
  "key29": "2y2WJVz7GVqM4BraRBfrjBmWbyN5zXzFvtfJoDEzjfYoJRdoXVv2ax4aYBULNiUH7LU7j479GkDvvfFXMEWSQek5",
  "key30": "4G1kWDHFqEMrCNXaDeRzz6JeNWtc8VjvdpBTyfUprNNR2n2KWvB7kRQv7ZC15SLjGE2UhM8erkdbhQKywFXyReas",
  "key31": "61AjEermucFCbHVdDzBSDJvdhMLUkpPRihAtAGti59dkpVkdg5R3H86rYsiUJPW699GraMUuXm2Ekh2tTZMRupXP",
  "key32": "54M4ShRayb2Ztf51Hmnw9Qaj59GdDtxVGtA5zDScJCTP5TyG2hvRmTdDayEdr8nNZ5KfNa92cnhaLrdqDVtPT3gQ",
  "key33": "2ZWwhnVv1JpAzUTXcAAuvHxEbnusqEuLDH3RTnNhjZmyHZr7sod2MYBDyn1opLr2UeR37bnjZN2SAwSDsfGWAucR",
  "key34": "4zB899U1WC63mtiJ56AzLiKvN32XLtbNWKAtpjCWh2JsenNjUW7Ry8AkRZxhU6NWURc4JzYwY7qq4HB5snDUTPoD",
  "key35": "31uMZLDUVyPMLDVP2QY2keQXSwcfCM98DuABS6xycYRspFrqLeNd2xvjCtbipTyB3Hdfjhys2AB3ah7u4mDjzPML",
  "key36": "3SYRC5VJQS2cPxNSqr9h3qTHGwEu1yD3qqBW2s37Wwfw43ZyJ5Ys9RrCJymDUmBfJxGZ35iugjBAktrDJueCcyaR",
  "key37": "4ibznEaUYv6XVR6eZDakwjJz1S56T6sY24hCkRQTwK4WfjMTaspqX29i5pjEN2Nqa318an9hbXQC7szCY6t7t5su",
  "key38": "3spwcjiCqT3hGxv34pvLRKbqNPDqnwEQSLLtsherj6Fw5zL9xEBHKkt1aTxpAinLDsVnbyjzMbHJ2CMa2jQJgJs",
  "key39": "5ZBMkwrWMQYtEDSBDuRs2DoAejUXAj2et4tRUcWgLtYg4TPQYezRYcbt1wwLJSdV9om5YysHxsubpHgtd4pFioeX",
  "key40": "WdJzRkyCDWetqEMNSNvNWQTfeVpqxSJjD5Hw2kS3ps4rHw2X2hBEXCNx1nGTSoKbA17LCpRz7SDaKapBdrWxUGX",
  "key41": "4TJU6zoqm24LpdDyW95BNdc5tzEB88zDsWyqA3pLmDBz6kAuibdk39Kb5hCJ779YeNoCXbKrNVrxambe9aFdqRsb",
  "key42": "45Tibv8G862UXbbwK8ewJMJZquUv6PeTp58UMvxNPoWE1WNNz7QunFF274xpWPZbfutnhQz7PJXu1D1pKg5NMo6g",
  "key43": "5hYJGjJ23GK796FUiFwcj54MP8QTGZ2rmVMrrzEnVYD9C1nNM6fCgFeWvHijWe8ZonZV8MHBv8popbARk7TzkQs3",
  "key44": "214rEBoGWhnsdhoVHdrPDneHP5bh5NtXjKDDijKDcCK5jNoF2pU7LZWoV816JBTzzK23KV6nxzwJa1qyUY1zELG1",
  "key45": "26msKf886ZszC77YFKoGsx77voXLmMhowutG3rEkGgPbptxzi82p3RhQozGTR3SnUsRXWfZWTwvZ64SX7RqgyXbY",
  "key46": "4beKNMf19cXNMzrcFX3Bs8uGVkzufEzHAcQCuwcgCMvjhKg4zsQUPTe7CjjosqP83ucrLWjNb64t5dgSTDWSweqK",
  "key47": "5qvL8jDi9wXV3cxQFrsX2Bjbss2eHJCM9S7KbTc5mRFYDP9jWUBSSQHnpGt5Sbi4QX237SU5zUFsWqsKgFMvgQhA",
  "key48": "2Ksssnqms9Bnfq9EKwBV7QF5sa4b8UL66GKmqQdaUp34k2DHdLVaPRCYW6GKYAoUXXCfw37LhYzoEA1kraRj63HY"
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
