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
    "3DJW3B5BV8EWUVD6GzZyzYvDfXAZ2wvS1VSJcQsupeD1r84TDS7KhC7NUN5mWHDHMBhwrTdSY6mGtPUzNFNkzNjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iDp4NV8sr3eY88wZnn3Q4nHNWyfJ1Y4R3Ej2ghzZeprzDApJckTbeMCQW1gQGYbmcZBTGUrBtiakhaTWvdfmDZB",
  "key1": "5tEVWTDRaD2tc5xoxfXmTUcMBsxGWQvV9MEnA3rgsfGCUJDLLrpn9zY9rspkni6wXDPwGZsKNykpqSbtAjqHH7d",
  "key2": "6XKnbWgaWn5BZr2Sob5hGyEwrSECpcC1ehMoEqhG7Y5B6XKGmfi8gTreBUnmmATsDjGYLPcaqQ3tFmB9C8XYMZ6",
  "key3": "4SJTTfBsxzXd9iXm1ee7wqNkJn6SCubXLpbzqBnn5FPxCctj3f7LS8KsM26nJsN3KxQ6xJcFwZcqUWf491ahHuUg",
  "key4": "2SbDEhQvNs6MxQwhNZ4HqBmbbDWhUwhWkx84PvWU8A4DD4YJqqHL6di7AuYXUrZ8xnoM7wFRr7uXZ5dhmcRdvQGX",
  "key5": "ENXqAyHFtXHGnKe3UA3Tt9oSTcTLpriMXZgywpxx3a3NzPiyteVAUJeszZr7eKpSJiDYpiKyvFkgwXrHkhXEWWM",
  "key6": "4Ktu7cmr19a7vP6HA6r4AGLdEAGY1tgVVvdQzzHmXRBVJiTffc6eLwds8x2F9fWtBRmmg8nKucJcUTRymAAtUy8o",
  "key7": "Fn5NzE8XdNPs4nCiCYg5monhfFVXZ5gm1Foin1aT7toyeoTjfG9L2xhLj7pw9ar2JL64BMXJgEQj9Q6u4sxJesW",
  "key8": "4trVNj2LEe6RLXXZjAgGvcigiVVyyhq4jcMpUiJ2iAvVqjSMZfSFW7ZB7H5hvWRB7M8kXrEKxWwjMcqKfSPwCGcM",
  "key9": "4JeMrcx8Hsm8NrmSazhyiKMNKNuQx1mV3DgrkSMEgQFn54iTAKUSZMRyYc5UXs8BJkM536gTNMWrq5roDvqxtx1N",
  "key10": "3qUK5q7QgR6oqenNvx1hsb6cEsJ7AodLrEuMiB1i5kqf5GptMEXTsYy24eaTudrBY7iGV2hPjc3sS8Di8yWh4z2F",
  "key11": "969Z3boJbhruNoQ4YQpMw2MR61aTk1NAEctYvkAxq5cPeYXeWwFkzYSfsygtbsh7p7TVDQxz4vmuPddyymr9MR8",
  "key12": "3r95nDZ8UP7khKGnNkg1CugTPKQi1KAGjjb3EmydXf7LDG2X9tCrniVw2KaNBEFPWNSUaLpKDQWAkMwXZScgy7uX",
  "key13": "4f54iXF9JPeag7gD1tJzjjuvN52QT1YLDpbyDND5vPSseZQQs9fAm6mBBMA8AHA3S6hh9M2jJtZZxv9UvCnFTd2u",
  "key14": "3Aranu4BxzdGGxwrc3XACmir5CUpssxX3FqcgHerPbihSihfnNgMRtBnDVRwdeBq4SaXkkzAVmPmc9mK7pshmRNf",
  "key15": "J58DspBErCKwrRoTi7Us6TPQQT5eNuebHRzXfoWYfXEPkiJv2kZvNVJBvTruHNPVFmuy62Agq62EEwV71RyJxyV",
  "key16": "3XdjCHCcXZubd7mjwyuCdCFaK8qKgvRJjvZPFGqRywZF6QHyv3sq7FUjoB4tKEhrF1E68zHTFKnjGi9LDqR24h3f",
  "key17": "5i8mehH2pCaJm4So3fvVevbDseTrUo1EEYCiVUQjD5LJHEgarHT3QGzvoVEtQXsWLtHoVGD1YyingXuu2QtP2ynq",
  "key18": "31hpZpWFCXEaVcHg4d2vpTvcXYwvWWtDmGqL1sHfdmdKb6eLyAmrkb8uzL9dhFyrUaMQ6EeTa9U3GUho252bsyEo",
  "key19": "3fqHxYZuRg4RhrWQ2pGfDgtQjjZjzjt3oGPSjPRTW3bhsDBkyb7VMMhcTJumBYNYBQsEFGtbDD4ETU451hmN6doJ",
  "key20": "5kU51Dwb43oEwFzvX91btBNbS8udnACLYd1LFZx7W54ph2CZcvLtyPmBFx6TF4Kq2TQsDmYMtq5BX2qCbde5AkA1",
  "key21": "2H3bwaQcuPPj4i9XKHWo5gjyJGn8pgs3ADFr9WqUfYfwU9gwdAsFY5fAw6bt41uS61NmCdzorLcGJAQmCUc1Y7YL",
  "key22": "4WCRe1Bg1JvnxEPiLaSzoZpZcwPft6NQFHJX9AirHrgkxtzmAbhJCXxbp2AU95CtXCA4khZdytZuGTh2ikuFWAJM",
  "key23": "23hAphdQis9p6oQ5rHdM5MrJTt1yGuPWhan2GBRDYqvtqAHwXa1qdxCsPJmptSTyybQkzzwcN7LTWpEJE4PTm34E",
  "key24": "33jEtwA44CqEe9vAijuTsAsRVGWXud7tPbmikhR39T87Nau63FV86zcKYsg4At3cZ3i1HgGStx6mRkmzTNVo1VMt",
  "key25": "4XNcp4kV9EcTdHRbRKtAti51EivEjPjWFBqaWUcnCk1n9qK6EEmp2F9xgNkRSEhCyzvg2phsxbotv3uyQhgiMm1e",
  "key26": "Sv6qNvFXaeez1RRU6PdAFG91EB2EKRx2etvAEzVPgku2umbNy2wsAhjmvbzBkt6Nhd4WBF22MiAZ5MRQchRJdGR",
  "key27": "5xrGLC6ufegJeEiatRSoLuETHmW6ECJnx9KfBBCQridjk7hkFPEjGvrdKqBsZZDnrCbLkjr2WQgJLn5nPcsxWtvs",
  "key28": "ebXRfZ6VH87mACKRHbPrvRYdagR4kkNMtv4bYqCvhPSTKmgyg7ZbXtqtrdzzMwNUX6bQaieeAfZzLuKt97D5SZM",
  "key29": "4ijuydQ6g7SP1iXuZopfL99vDWy34DBCpM5wY6SgomT9V6jj7TU7ign81cTYdJ63f2WLhiFdJN2Gp3ojQcSqcEv",
  "key30": "Pn5jCKCVPo8KQRRdNrrEyDhne4sYFa1ttrRVi5Pb3BKtJMd7kcM46d1x72okE5n9GZbKZf39gmN1Js6fqU4RHqL",
  "key31": "2X6SnQvdH6WL1tADPNFomrVhrfkC86U2KjJ8yLAafZHKhq6wYXxKoSvbof2A4tgqBxj68weEBFHWaHK22oU7NjjU",
  "key32": "3Ut3bjLZvsB6T737umitCmwUnymD9RsxAaxkuoQeEvmxUXXjhZjcDJA7HgrFvhJyLwuDaSnQdNcfnsKUoLMSjEEx",
  "key33": "5T67j9BTBVEh6uG6CPacFY4nvD5nT5VQ6NuKyYincuDJqGWBbRUK5Tgz7H46ZYBbqvfkoR671FRavb9TKhWUr24V",
  "key34": "122cK1Vv89rn5whfBBT5N4usZV2saT6jk1DWd2LmNz2iaprcE3491DjbtjWyJq5mMhkq9Wp8h8sfdEBeonXyykTS",
  "key35": "5i8byypJodW9CvrgmiJEqLZbReFEpaarFe6BRxwnXz67kfLsUnpGi6EPQa9aWhrE21pHazUFwHXCQycVq3Fse1BF",
  "key36": "22zBSUS2MFkSkjjurK6Pq49gy4r6dr4YLfAjojc6BbUpz1idvJRcBPdazkHpPZ16rK5cZxZfgLyj1hFbToVdKjA1",
  "key37": "hRgLouxbN8UjwhLLxKpZyGcTxtsbUoC2dwDcLa9a84LnZyB8RFGEbNhtEWukwAtoVXRjnu77U6BfMLE1Jzhsrqm",
  "key38": "3vPpDwaDU3h7nhjroBe1m7Xi3SZNVyob55QX1Zxko4sD35JB8Dso5hKwDUwoTdWWcXmDYekdLZSGnrnNs3oYFk1e",
  "key39": "ZYQ8Eq8a2p5nEiWGkQ3g1KY6XT2D7AUv46SCuCsdRCysWr4jzPdKcT92Ete7rMoJY8D9tHCdmSC5rzTAacVcr32",
  "key40": "5mQjsfi94YqKpNtCeJytQAQALAM7TEkur7pyoZs2DBteN56cD6z5vTGZcmRss3QkbtqgquC7yxkHFjVzip6fA2UN",
  "key41": "3wABgMKtvRax5Qc7ySMDUEbGkDp78cJ5PDzjQGyQxpLtpJRVnYFp35CPsZjaUHohq4SEy3QZ6cfDah1NNAfivZpo",
  "key42": "4bA9hsVjUm4qoX3RryrCu2rNUbUke1Q32CxNRzbX9kAfnw8bXYCGa1BVCeRaWH48JKPCLKPxkwANA9JUv7k9Fbxd",
  "key43": "2JkhWN7STpeLAwsxDyQUgpWQd5j7c9LPpq3MRnM5VwdoVpCBX2KWTNvfXaKoRXq73QJ2WmH4WpTJbsyNn9FdtLbK",
  "key44": "sQnZq6M8Kvnft81K4v8sAxjirTcLU3yfkvrXUPFPbsw2vaRvnx5wRmGdcqUh9xJkBiYHXFaduvQ8mXwptvyo5pJ",
  "key45": "27gGTjsg9PqMq74z8VNwJDpaB5zX5x3ZUyZkbaEuMvHJng1VQkvxNkdtJZAhroHbRfB1pbusdAgYRMYR7e7kt8nT",
  "key46": "4z3Ww91CkDAnSNxQENC9DLST6XK95zjx3s1sTPiSmitjr3KvFhk2UfMiACidx7BrQ7yiq5g9FnvYG7zem21KpNgk",
  "key47": "2tKvEKpdSzmmYYEZmRMAu64CVGVEaFhh1DXMtG5iYW1bbLkASwF4LNNtBAW5BB9foFv5WxPRhSVhEekowEcHPCjA",
  "key48": "1AzxEvT7hf7t6JWeMhBikn1qn7Zgn1CALYMW9PkZaSJw5Bw7qVV8h6JWcw8HEf4osqK4g1apPZWavoKMMGtbuec",
  "key49": "43GMbKmH5mUoEoThf96D4hxZRmWyfkqi1ZVvTYhMKP9AxxuZGNb3P8nntyFr4Ftz9ZR8K8Bp5vX7sWYhFcNyxZ7S"
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
