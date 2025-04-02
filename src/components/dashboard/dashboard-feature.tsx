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
    "3XgaJ2V8vvd2DvyY9KpQKLKsg35G1BzbP1ZaR9GDDgXZWrHTfPy3Pg4t8ruUkghonAmJXQpyLW5Xdsci1skXs7mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LV7x76t6yj8pBLqMw81zugPEVsxopKParb6Qkznr3Sacv14krb1PNpisH9PtRdkK1TtGdpwvBmZmMbZPv9j3mS7",
  "key1": "n2XDk3m9M7sa62wtHEH6rbiBBGmAE7YW27Gu8eEcqbr4iqVbh3WvvLRZcfdUKF3CspopP8uHhfjUy6Z3ZqXoNDH",
  "key2": "5kUJQaqpRfa4AjRapx3AJx9wWdMXpcmN9eyZAW2gdwJAPQnqaPBp2HytfZAFMf3sqEXiahERfPy3GENTMGbSCxNU",
  "key3": "4SyRs8NUu4rzf2ryAy7cLi72WBHPYqDNnYdvBbGg31cuJ421nMVGjfNHejgBSW2ATUtc1w9TbQGusiYdFfp1e7vb",
  "key4": "5RS5dsHC68eLA3JUgDnNChLhaQou6USDUawsiwaCa4gi7dwnQVT1hvXBSULX1gZJnadQFBeeJkd33boaw4ECzCnT",
  "key5": "4eFi3XxFdrtGZ5zbtuomp7SfdYDpC7NJRSggRJYgzkUNSHo2UhUkDAVRGh7C14sxkE3j71ocqAsVLvprwkZhRBEG",
  "key6": "uBiEdaXmeCGaydn4F9PksKd9ygFYj23qTiNqRjeCusabXsfmxzszJD8wSNLkf9mH9DgqzAuXzRFPyetYEdumjSY",
  "key7": "2fNjeRUGzxRwKaArKGV8Gj5RYNLyp4zuXtMHpxcFNu71g23EqhEu9rdqtvYC7p24NjeHCZbhQ49DxkmuE5ZWpXk",
  "key8": "3SfywrXwT8MR5d3wvDFG6rGFznqeSLpM79fVgaH5dqCvNfCJgdnfNbXFzcvztXBuv61fAs1tDpnj1rcBETgRsGxT",
  "key9": "5fhNTYtYA1ccfSaU6rm4SzPYGyNCZLVUT7NqjS7aKzmGXZ8MNWW35LwW2c34LM4gY89iVrXR7NKLqZcRmvpFMHYP",
  "key10": "4SRhCTGbZeGatN7uP8GoM1Yz4AtTe47ghWLytqJeMgv6LJYRevPPkspmbdEGjZvB9gcbYwDA7oB7D7n74XzmRBZd",
  "key11": "4DnF5MJBfD84UDeGeBYpebQyEEFWBPVZGdpFZmnAF9eGr9Rn94R8BLhhyWwNKPqXDWKfgMufB2UiAsZ77NVbJt8d",
  "key12": "3ymD4x2rG69b2QNLjVPakusc4pQqKNHZXaMYtS1ELBi2dXzfM9Zr3o92WhGeCwQ2Tf2zknTNB1GNyvQUL1AiJJzg",
  "key13": "32F5TxphWkTvkU22uoAtdFqo8QZDmFQ4nAvkSvgCoUEaGKGXCsoD4JLbnVQy3WUtVhT6RM6sJRn5N9dUZqFq7L2s",
  "key14": "5RjnhrgPDEmUaEaR9iL8wGJVc8nQiNh4va5GnZnuJDXWuMyF7Mo3TcDxdVMCd48U9vVdRJBsNPWt3JdBLZ5pbusW",
  "key15": "5ZpD3Jgakoqqy19Bk63v8R41HsDVt18bvuLazDC3mpCj2TTYTbMiaxqbM8SYR1kFzU28MrbPJYgPMc72e9z3HAvP",
  "key16": "d8ZZwsDEfTvCFZnVt4hQBh8bhE4VyCWQsFGn2w7Uo7AubAyKxGRAzcPw92nMVbDy5m8Pvn38UuhTRBwPiRRsiAp",
  "key17": "TswzxXnA2urxjKAGxKo5Sr3vR4CoDvT6VJneTrKSYPLziK1kNNukDjNWnRsW7wGd8uUrvET5hHM5TNJi7zqy6M3",
  "key18": "5fwCfsNfHSFZyTDBwasvcK4ZXz4gC7xxSz7FLfQ6vTVVyJ7RwWEF1cPsQJvsrTMBDndhWusQzjXzH64iTzpENY63",
  "key19": "4TRGpoUJXHTu6jfN5PLGXyQLMUULrJL5M9JvwyCxdPzqtu6kJL7Uu7SRML34CKRQxtMgPbAhMJzvPnmSjoQ8XqJB",
  "key20": "jL4z4K4BVxShehuimGq3bpGDj6EocAtAxcCwuvTJpRvsRr88JPVWn98S21QSG3oanZhktEc7KWDahfRZPc4oCrw",
  "key21": "57yLiDUhYht13xZ7mwyUqq8nzDbejkrkHiW9Mi6F5crin9aVQoKpAVk4LHYzdyNUtGnCeQyMAudQPzMRqnc9ZEQf",
  "key22": "64AWCfaBLvWekhTP54unK6UCZSnRNMW9gmi8dWPRE6dC3qXgA8UzLfSvDahdiWVyAPvYjPh4dtmBAcAvCFQAtBVY",
  "key23": "35kPbmrnxGNLkvgVXedHuamU6jxuFoZia7wu3jDdPxDdgzxP6wfX6jYd1vf61ko6JGeRNWc3Va8gsUY5wur7t8Gh",
  "key24": "9LsSRbtEeQQGFjySBHweLWqsk4hDXSvtbc2pVFkaudcvrvEmTqt8xiSevqSv6VQCw4SJ2T3X9LCbcfi9b8vU88P",
  "key25": "SbvKb3rz39wdnpCFpJYiTxR4WtoXZBA991kgDtdhoifUAvBeGPFSdVMC7aEtAKiqXVypsAgnaAkXw93qPziPR58",
  "key26": "67UycQp4giRm3LFrYce3Nq59HA1KzoUkFSVjHyoL9R54hp61NUmLiJco3hFR6kesFiSePdE5MneLLaGQzTGDHMwi",
  "key27": "3BjtQYXtmmx9rdqq6sHa2ACbKRp1aLKRHJEWcA9kLPvVAxUCi2mGrs8w7pidXypSXRar48hMb3tLXutaRWfwN3zv",
  "key28": "2FxdGVpzYgMk4Q7k4uXRYGar6zfiB8L7vprPmx6G5VMib5AACEvVpqKrZCETXmSHCoET47V2R2K1P92WivHdmoj8",
  "key29": "5XV1x2LEMwuqeqc1FfbSbBQzGxPZaFXm61CJUvPBMueZ3HYsP4t8RPDsd4oum6RbiwuiZLoThQKkXTJGKwFnsQiu",
  "key30": "4Us2HYGzir8QRpUzK1BNJf2yHqMgm5U5VwyAHPmKYtk4TeQ1ge35ZEQbbXdxrtSsJbQi6WsNrMwyX2UwjYCr7GXx",
  "key31": "3Evvk5GFMmoBJquLepzdm63rko5tZPEuAjWiy7avFZ8goEowjRrfvShdnswx1cCdQxPZgZTueWnSoh3pbW53b5qp",
  "key32": "5EiRLassRxnW76D9wuY6qC5AvtV17VhUe5mC4rzNR4Ntg4J3PqTkqcXibw7ajmkSA4k8arC1jhTcyeXLYckYgXnm",
  "key33": "5Hv3HjKLbRTJhh63Tb8LyccgMuEi8oAj5RkoSB1rZqK5GUDPnikG2isoRwmgVj6SDSHAqCpY9skV4qnzu9FzjP7d",
  "key34": "rqhSYvnCHohZ34X2MgmB3Y4RTN3HgN4gMVSre72WdZVnWvpaE1k26pLVyZt8paR7oZDsAiDEQgGR9MXmw4cSC2Q",
  "key35": "ZLvc3RoBpAmbM4nf67T6STwf2pGsnR1mdqqd6Vo9uhe6xPKz5bcSuFjDCoF9pceGNQuxhqQs9tKPocFbrbVryor",
  "key36": "8pq5nQeJWGQPm3oEWEcRWnyhrkQ1WihNyQBerDsEaKgwMgRNhgWejKPeEbZ8snJuV6nmPPZkH59A3MAN3qdKwnp",
  "key37": "29csJgrLwjPCSkH8YGto3HZFAb1zaVmhBDiqaUcbG4Djd4ErHpoZYvsha8GvC5ysFuLpUBMDxYoxvutgiczG7iLn",
  "key38": "64F14eVHSp1qsr6apGmipSpqBJxbBt6z3CZpy7Fpti6BbVMX1Wb1p3DDxUAENhBTLX9TYWKjXvYnuVKohcHVw9ri",
  "key39": "2eCvNkccu3Z6tBmYADCoNmB1qRGz2a1DhXfLDZUwrBBm2Uj9CcpqWv5DjDZaabn4g2uJnccnG3YzbVwibLQoshLC",
  "key40": "3C1tk5PJZeNUXdiRPnaLsV5tLzZPLE6NARGvDG2pk1NfabHpPs9mtXZmMfY15s4BCDXYg4RbkuMbj1Y7LRHLaJQv",
  "key41": "3cFY2WUGH9KppVfuoi34QUcAffEW8nDiRpQTKbcNRb7hHA9RAxCvCQoUubXrSsVez3uyFU4UtmagMKVFuycnScGC",
  "key42": "4zn8VtBmgmQor8Tf4uBttE4VZ5oknRMkKpShmLGQ3LkpugYXGKYHXSBAetnKNez6bvBzurqwkvM62nCubm1hHaYY",
  "key43": "3RnYXB8sYkhdaytvhuvBg2F2NErNgWewSaxsEq63hxGsLS4cUcXjJ4oSW3oLjSxKV41x2rj7NrCpiePydbYZyWjy",
  "key44": "2qKKrCMH2m4qnsUtE62mzT5mrr3FLxWQuVqjJykunXjLjwqEgbMTwTN1XQKmzQ619BaoW8bGchL9FkpCvvcDRiKn",
  "key45": "3CfSABE2EyXRs9v26uCBFfHpMJTNHzWw9GF3pF1jSuufbutWYao6inZ9EFGRQ76WiQqZGYtmicc8bV55tYxDcPW9",
  "key46": "8Kn1zbqqEGsafvQkRzcCzBzw4Cr2XJmFNYgmBoYAhkprAaTTg5VxwicG4n97T2c1KuuC2uc4Q4FGGNAFaxFvnSp",
  "key47": "3iZwmwJxYVs3T2RZquffM3qxNixqfLQDaG3k8EnQRanyS7TfMoF15QK3RPxfBT7hkGNpBB2P8ZeaG6vFhnbzNW56"
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
