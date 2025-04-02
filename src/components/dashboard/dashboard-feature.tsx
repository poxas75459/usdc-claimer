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
    "4Mg3oeApriedRQutiZGZrhqHKi2ic1bt78yYykzEJdkdRQibaAAccB73YjbsJwqqAcFNnFu1MxhzRCBiQWLqfqQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rCLH1Gtb3mwFCUBWM5773NMDrBtUqj3vrKuRsWsLbq2ffTtjRydF2v4FRsAMqqwbqLYh5StdeM5ynhYDLC9qPMM",
  "key1": "NnDEmYyEqR6QXTjQNoJzwuA1DBmk8dNzyra3nUNfDd9HNXpzczK5uucdkCArVm9SXzubAvmpTPHYgjrMFMYhZ4f",
  "key2": "2yCZ8a9FxVZk5aBskjf7mY2x3aFNhk7WEmVdErxDUGQ67F2Md976tKCjenQ5AdfaJrLCk6GbcWyP3Y8gvwV86VTZ",
  "key3": "623Xvx4kpzqceDhxTTyarTNBGk8N3SNzPHcVhL1kamLeh9vWinq8BtELz4J2qrJBc4c6NzdqWTZ3G4xmzteXgHb6",
  "key4": "5jzTD3tTVoTDbdPYvPeoLe7yywCC8LBHpNmKPNNNT5SZNJyzMszt3sEf1xhbmLWRLLK6jABmHKhzNBJcu3RU1PYv",
  "key5": "5qipf9SvCXJrJPmVRaEbb1Kz5ENN8bJbo3bf5Vo5fSPyNm5DY26xRarkP1nnQxkZDB3VNMjutNNsgy6Gcg7UdfSM",
  "key6": "zeEjFx5D4XPvpocKgDVfGdC7BJLjgrSQoghmMGex9i1gtoPnHpJubW3nx9JmPg2Nnd1GFzbkzKAJYFWXsDzgetC",
  "key7": "2XrzmedEd9NfUKqW7Yv5phNohV1H6ELQhyqsnEbL87pCYsvATxbZ5uvVMWP266agALk4PPNmE14vn3ZtCqfHW5gq",
  "key8": "5ayGwhseBQ8gkWAikzpFA6oo8BTURtHbPowTmuHfJLzT8bjhXsK9qJU6ejwYziNXwx4nmtfdrqLGoTNo6FHv8aae",
  "key9": "UKdk69e7YKhKaBATBV2nuAt3cz7vpsMMgsMQQdPhxwCPshfVx6DxFaYBspWPUCPDqGMfRCHh3PzqdRwRosVNyQS",
  "key10": "2pZNBRRTaXRe4FUce1MMLmTBPSvqFrLVnnrbq7hpaaVnzcqKWMLTGsg5BpkHWwKmFs37HfcDk1yhcN4sZzCUj5dn",
  "key11": "5SuF1q8vTCcS2S4JxX2h57GT8nFvVibpmJwHG3Fm4kF1ttYQyQ491Bx64rYUck6HQ33xMJKkWvEZRk8Vq6H55pia",
  "key12": "5pbxwg1wgYQtdRNqnCKjguL1B1gn6Bk5fKzg4tZWyr2wf42QQNt2HqZ6dBjW7pAfbkTuj3HQ4DhgqF6JrVpoGYaK",
  "key13": "49fRz4E134m5CpHneHMnrUm1WzgG13aQKsS18Ag1kkz7NtWJ9JrocsRjH37sB36FHuGzAzAxk1uHrfy9ifm5HCGx",
  "key14": "2YWNZVh6ALDWVnG3N92n3jwB6T1XvcekbEwGf7JvhxLCBB9sMR4qC3sQeqfk4xjCm46jsbwUr2yZH5SK4rkZUH1",
  "key15": "ziWfvz4vodU6Sqr8Ygp6NLFV1ZDnTrGaJVifDzPYJNkgLmrEHmdt7XtUGMBksYTqwaxAyyXhVmoY3NkuPQc9eMY",
  "key16": "5b9WdciFMJoQP6knQdZo4Fvk8UuZkSqvEYC5v7esSGSmFxEnvvLye75pWEBvS6jVdFqpDjWYqwMZau1cPyfzcCA3",
  "key17": "UXtLmz7FtvujHfKAgaWM3iTs28ZJhaW6s7iqH4hjyXf7NLatJMi3GG5B1YXibzz2TsgcMou3HgPtoVTyjirnuMG",
  "key18": "3TSgXXiN7hnBFp1jPJcbHeZQhPuLMeVTDxgJfgMqJ14xd7fnJBbMAcv8Mt62UsUrxdepEpKaUPpwgm5K8JzNSTvb",
  "key19": "5VKA54VCQSgY3MEbLt7T4bUCW3PvY7wyVLtbt9ruKvu8wSofRqtN9gnQtNkY4WLKpkjuEVWgVNX7jUC4xdfLXKB6",
  "key20": "2kEWENPzErKUVU1g8puHs3FWSBgR3RueBjNxMDumzfJFwoDwU48nzGjzyPt56vAJNB5o6nhxQ6DkFZT6qiF7VDGb",
  "key21": "61BCEk7ST1wq4RT59suC4UfwHnFru52pGcEatUG2qSH6LspDniAY2CbdweTVwhGHSDujUD4ptocdiWA5LbZEr4n7",
  "key22": "9HhjwWiFB5KHJFtXaHcDcFt2ZQ2inWhGWpeUiAioAkjCXGNBXMisnYP5JbnrJoyyxF27w9xMrJGsCu6aDqWrZZN",
  "key23": "65kwRGCEvbyxMjMRnRsfBE1BmuURHWcaMAHKfufxFjrTg9Lk4Cd5GTovC3F1fa35pRA8puahRqNxAN4orS4WFF1M",
  "key24": "47FrD1zNuJqmr4FhV7VaGXMn7i7wqcwT7FH5eCxYmsvSDK9VhZBNFoyaPjJGjif4Us5RG5YqgAKDBDqb8QNTHa5q",
  "key25": "2eWHdV5UKAuYmnGXdXHZtByBWGe3r9nJMYCHMJ5eJHeb83wrdjacp7SiLUVRNEyC1fFaAXQCkHWU7H4VpYFpgTZJ",
  "key26": "tmp98RoTtwMzKYx2AFCDkuq2JLmhHpam3U6YMTXMtsEfU2kUekkpcJMKqfeohkKGQAu1pPiXbwkFoEez21AXKc4",
  "key27": "2Xhi1mm6Wuwh6UsqGoicrnYaDfWSVqp22tPgcXnA5XLwkc7U876RGGBv1fjaMaGw9dfUgqH6SFLhRdr1z3Zcagd2",
  "key28": "5xYqDPE7z4VYU4GNxMjKDgy2epB7J8aT9adQuWa6EqZgB1PWeWK9YUwrKmwwMP4usxDJ3qcx77kfWNaJEGkDEGmF",
  "key29": "2pgFaxyT5SwJGceTrYSGUGaMPcYsCuhZkq98oFwqbsKLLyCsYk4dW5y9rzgJavH9DAFstVuiKbay48RBAN4mmPNQ",
  "key30": "3ckwJRZD7ydPa7B41ApyHzsLtMLJU5cyM4RgY9NVdbu94sta19nvfbyLDwLxie7ZkoUehzgQb3cBCuEigTc5G7Ww",
  "key31": "4rv6LJcJDGf5p5UKr3i7aV9k4xhBy8nsRud2VKRr6Say8HxW4hf9KgqjxVnBSFMyRuqHCrR5Sk2QfpFLNZXeRwzn",
  "key32": "29ue6qheUYb52FbwGSPdj4uyG2EG6kUPYBxH69rTLhHAicDyaXfwFAWcBNAtQAYzLCj53o6MREnnsgf2dRrnhLFR",
  "key33": "2EagRwgiwfwT2FACrmGkyY1NJv4QTM8HuTLrJfS5TGfvnd9d6ieSZKAPHW2648ajcjKCm8WynHzXxHDp27uZaGbT",
  "key34": "vVPtAGQzcivLhSYxhbXP97pzj9m2GiKycqCYQbcVv23kxPvwyZpPBVaZdZc1JsQ4D9vgZ56zAc33C1eViuNgt1J",
  "key35": "5kehmZ77FWvXUxa2QrueDM7hNKqxAxYVz3FsuaqZMaQe6dBfnLkKJUm44Aa7u7h97EG9B2WBs7QGjxw4DNKTT3tw",
  "key36": "5T9EbNcmmggyMTRP1ceW3MwNDW8xAUXUwBP4JUDiSP6KvJhxKx9bBcENzx6Q6CAd7caDJGuDk5fghyeV9cVJbc1h",
  "key37": "4WQLboQEEu6zTexmHL92cpzA96XU1y8ZypVCmg22XRhNo56DrCUZY1DSZiP67VSN4unvr1ChMgtJ9AWbrkd6LrDA",
  "key38": "5J8Y5UZ1vp4e46muJgHzFF9MRgV1m35BqFey3GUcdnWR6GM7dC44kYrTg1pvpxxMX2ctxKqv8zZQwPy5RgSuybkS",
  "key39": "3zpBN8L1S7TpNKc32bJAczGHpfypU7CioS48GzDEr6o7CAiQs43u3xgLrT2CBgYaKp1PiPyuQcpogwprQT6Yv7Cw",
  "key40": "2QGKRY8WfpgJLXJV8w6tBe6ZP3n7cM3t8Wa7frKq2BPf14q1kn6fvS4Qh5JcfBX2jhBoeb99DbvEydU8mhFkMqzn",
  "key41": "1vdh9zPjJLCARPh1SQkn2cHYPVY31D2yoYjL2YWek7kjssr5dgBTFYKonsEqVrvJpxWoFgNVksouqjGL1GAbZvu",
  "key42": "4Z9SieZn7Ub6Te71T7mr2SwvsUxYTS7FcdBDHc7pgVrDLmwswCbWzmyBj4iH4uZ3MtUobK8QccB6Swh11zKBE3j9",
  "key43": "5MLzEsDJWqXnLTQ2bvsXXy3bo6cdJeJTbtuKhNigvEkQSPef5zM4J6PgL5RuXjqduh1nySxLgLPEpuZY5xCjx2NB",
  "key44": "k7x6Gjx7z7xY71y2pDxGce6zgE7cmvn5bvGmASDrcxP36ow63QR9bqMHcTrnL2hxtSht4aLQzddgRLYgNLmhVBK",
  "key45": "4P4sDqWpdLettyb32LXhSn3xc8cwnVXmw3Ks4tgPC6bTf4pQMWf9iwsd1sTJ64nWMJ5KyHTz4Hvmn3cfgKG4Z33H",
  "key46": "Lw19DJMJDY77zMbai4KyhuZaZaDeBw5jPMdbxyBdQ2CtcdVcgUoGbJ5gHBQDUhzfnyqh9qAB4XrAcEN2SUYJ5tE",
  "key47": "4UYiCRZKna98G4NFwdwB9bnSXNL8ZAa2KwmPof4XP9mBCq2VXwPsCjGxU5PHznUEydQqoTBMQGJqjxjadaWJT6nf",
  "key48": "3Vuo5A5Yhms8ZsPtpt6VonzUKq4p9k2SdU5WKepjdG2HAF9Y4SdLQw11Ng7ddjEfvRs2q7RMLrPdjXDXTFGKarNk",
  "key49": "37hccUYDLtc8M6C33VUZcRQmevoejAF2ofhxDNV9jseoQRwtSQttcMmXLN12kaAkF3LQaaWDV48k8WSHruNCfrhL"
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
