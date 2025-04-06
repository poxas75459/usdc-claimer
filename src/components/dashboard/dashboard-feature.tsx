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
    "2hpwZxpXsvsBmZAemNnvvsQPzyfdngrHoXRRPHLQyHWpr1Ke3rH5xNmb7zgZNawZe3WP3f8d4giodw5ExHeUSRMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHvwqp1VEqVUGzio7szHMMPc32ZWT5EdAAvfdbss7hwUWgfbmEXBAd45haggntLPZmcZ7GDZ5Z35CECMUPrYexv",
  "key1": "5Way2jv83vrmDKSnNBpSsc4yr6E3983YEpoHYcm8T573sLGsgtniK8q5hBuD3bLGRwZjvNP9iwT51oZLcMwan6xZ",
  "key2": "5vQaLp4pABBhvw8DBzS7Fshth7nvUpBjHV2PBMwX6FnNcbA8KbZ2DFr5WG4asRuwTXqKgyb49Z6K8gC6UNc18kYx",
  "key3": "36Cnef7n8f5TJJatCyjsDqMiUrRU1MVszia5fxSku3vXuygyCUYpVWP8pHdJHH24DLMPMamTjJHZMK5r4xSLheuS",
  "key4": "57fdvPC42f1N9tAFhx8PgxWnJRGw8eGomqVqKgjx8PUryfPzUUHX1QSZ3mpasJviExJSB8BZHacX9kohJcqLFw1b",
  "key5": "GXCRwdZmD52HDNp6ruw252yQdSyJ5CMuy7QL4zTxD8mH3TtP98vqwBAT1S2C62b1LspvXfteHczRpBpo8D1gq6X",
  "key6": "5dQD3noSwQgcKQWqDdYA9YkQuQqNrwfUPJG8BXXNLLwtHKohcHqmW9tXbFu5oqtnReieTsKU7yUFwMHbz6YwKFR4",
  "key7": "4D522NFxTXEkyu7yJkJytToghq6rTXrR5qRHhdGxHPquyc5XN3csHMrq3oYoKPTHJNsVLZPkmaQuoYQKaQsDSrvx",
  "key8": "3Yk8NASKFDkhNRUCTmqrAZthPEAXJcu8ATjp63R7QaMPWEo4ji51LjmdxPYrWYNnE98ppMFCYercNJktbrm1uvgq",
  "key9": "4LiCXZ2waZeBr2yw97etRczu8W9jo6NMdYtkQvjpPYgvfQ55frfvsrLUxWHexcDfSAHR1aJUMJyNywHeAf5AGakR",
  "key10": "5fVWwtYrUyYBftCDpe6sPRFtFRzQG2HbALuis8PeknHHEfKrzfVzALfyP45fnYBGbnbJ4AetY242BSZ4GThbXDK5",
  "key11": "25kHu6LWkmRWGihQHsw8HtLdHp5KLWDE6wCft2pRd4g2ktd2YZQ1geHNtRvccxPjT4yKNbGVhHxCjvWScE8vuKzn",
  "key12": "2eupE9kNfjbB72xMHpoPRiuPVTyXXdHFVzuUWSA6gcLJRbJe4YFyCwj9ZyzcrLT3paQVwbDnFfpcvc3kMaCLDC1T",
  "key13": "2b7A8htR5XmxJC4pRkqWA7qJx26mYSBHJLTotGesEsy86CLeBzFmW2FgzVNx9xQTx8ynZLcNLKwMyzCRgXenKPok",
  "key14": "436U58dQHdgejxU2mNDEdPYT4xHzHtGrMhHWASm1dSbgcHnkApzHwzkbZXwL8rocshTnJyu8AZQzR4DEzriKFeNW",
  "key15": "4ZQRKQLynR9iopQ2mAJFev7MMGRjs5VJhFyFc5xfssB6gsFy1EikJzBLASNdUfewcB8enLfgTFXERzbC5JXLZEQ8",
  "key16": "5UR6rgDJjXfVoutWJUadXB1DEBPPesLh2BUKhnJ3VX3MZa3aRLhXZw8GmFcJwEuPXnQPf37njX7kZzEG57ybAd3n",
  "key17": "K1nKVHj17x5QjZE5XtwunxUccuinZ6J6NQ4uvSLxAc3fxN788Fq9jxvTu6Xrp1hzkEnq4ckeHnvZVpxZU59xouH",
  "key18": "4eVqr1TG6Et7ip1xnYHFqBN71Nep4ekoGdE2zMzhQqteajUw17NHAV56M2PX72yXwaxVeHB6nT2Mw3d1CUktPQVt",
  "key19": "5mfkr7DsJL7NBDaFZ5f8aVKcLLdvAE1jrPEG4rZonzuDkcQXqjEpVjqueFoK2pgqxXsbKCJyyJsdV1i4juZhnRnX",
  "key20": "3kD5r1hy7kYRdkKD8KDL9DV3RUuXS2mhLXKnuvBWhbCMvFtBqPzrd9x32sVYapd22KvL6DBvSM7wMrepGezczWdh",
  "key21": "pfqopEhXjFsowm2W251GwrYMUmQHi9y9g7EUNkzttefCcNbS71vDU3d7A9VhXA1MpMQV5TdYeqLQiS9vAWykZAS",
  "key22": "4TexujezaXytrTHRgtqwZxn996eKK7tL4bikBekJVkPUsBPnRpcT9jYAYy74cyXnC6ipYt2wAk5yyXT7Yp3437Rz",
  "key23": "4EG3QW8egUSqzkQphbgZFhiEDh6HFsvgQSLZm1UHyCHszycZaXz2pesp7DY3a9YNm6RX7BMmfmKunYYhP7N3T1Kq",
  "key24": "4wDnnaRbyJnVRoCzhHjy1SB65436yMVkgujndKiAiykETJeZCP3m4F7NvY7dJwuU8TjDt7hFK3jTor1gyQHUNdfF",
  "key25": "RNYcxwH8GQ4TLkQ3Zxh3UsfgACTmFeHbthZseho43C1CdXbKEFcB7cNJeQ48vf8G1GGJpPiXpaySKeRuU1hbRNe",
  "key26": "yPrHsfk7tuRhmmMTBf4Eo66HZeBviU7n9QnKdm2QXXULfxNrebhwaZ6vyAuc1WAMT1EALWdPCwGmhCwGFjtH2c9",
  "key27": "5NSkSZBuxLDrYpd6QEN7192Q1qwMzcLkTx2Mw4xXFjyMFqMrV3yw5q2pQvWSeJxbrW8Bmc8oiMG27cPdZ6kmTZtU",
  "key28": "583bHH3sPDxS7VyedWw4zHfCdSdjfNt5NTbwyqNRUz71v64ZBR6hAGcEfSLRYvZ5uX3179vzCR2doMoQymihqN6u",
  "key29": "2Gz624MHG1c5VP136uHeLVhZ8aSqKQYJK9oVjHRanxCD5bq64DBHriEnyfZLUqYAH3ami6qWJ7CfkTz3CFUz9SSG",
  "key30": "3ALEB4KJjaAYxvWH85BdWtmsPzULZDMniCVZSWxhoqc1VxqhWwpBCMfEj949A3bJTRaKxxipuUVniTz2iW4ucmCd",
  "key31": "3KgpmrcBJRmtra6oAfMvxCSEVYBSc4q34Lsj2JXbXb5JDJey8ooxdaZFqYvSZ8C1CDNsVTcNZWzCJC8M1dubQcKx",
  "key32": "5nJVMYP7Tje5RHThZL41BTzZ7fSavd3TwueMnysR38pqittbV29NcDC1yCQ6HTpm1Tfr7Jp98mYnndGWNhyzKJt4",
  "key33": "6392fxiASgMvSDk3QHrPGPqWbGhJmq5pnvArQC36XuA8kM132PzqCHabesFXGUX7BSGcME2jCGWjxSnzbSrwdVmw",
  "key34": "342aqF5d216Y36vAvheeUoiPpFNwY9odycZ6ZMjsKVdX5j12XKGeUZG9Sbgt5GCdkrEaxyqm95P6kz4FZHgY7AhJ",
  "key35": "2bpZzY78VMDhMFrWxVuzaitdk7DFp9YudDX3myqCxTiXj5jPoaWemhWnT2R2gkG7xHD6TTSg8KCHQ7749RVLCamM",
  "key36": "3RmrX2qLxsrwxqLCSuvhEdyVLjCbgE51wnqoUzmejBZLEQzojPZ3exHPmNM9fi2MuTquLtG4VmsuSszrNR6wPmyp",
  "key37": "3i1atkj1qwwuTQY2L7jMPw5tiHhA1VrPyKWJ48JFSN8vvShWxG7SwKwJEife9xm4naehqMxUrKECVMkUzY8TL5fP",
  "key38": "3ywncWByfXCos6cSgpUEFjUa56P46FLwK2cqtMWSa9mVCRuqRjS4hD5H3T4aqAyfFftZcgJ9BCRxrZtzGkDKqShf",
  "key39": "4gNg5Z2y4WWm7k1Rt753iZjBNBFmbdh2EEXUF92uqS6dup6yrQCJXM5jkwhatsVgGagu17s7D53aQcrYfN1JM1X2",
  "key40": "Jo93dDQFtJouzHn8MXHxMUk9BAmMFiWFcmpdERYK6Wpudaocv2HTQB6msvyYFm3wL6h3YanyCNi1TicxHusRh4c",
  "key41": "3LoaQBw3XkGjD7aw1p9j4KRDaCPUWfz2WgHpDsyQdPJpvQyCwAZHa5QuPQNpM149ZdbZAcgA8RS47kqempXmnzCH",
  "key42": "4rwz9Uywv6NGsuq6eK3yiG7E6rGLuKHiTjHVKcwzdc2ZahZNfPY4byGZu3vaJHMNZT1MwnnZ3bd2N1VWKuh47Joj",
  "key43": "4esFQp6jbYYjtN1UZ2VYRmdaXRZn7QgG6tUHx4VE7PSvPJ7ZNnau2Hfacsk8chaacRxhF4oRoHheH1vBRjgPYfdd",
  "key44": "3cvecD9892cmU6tvxXLZVcYdN9xHfcBR4j37FA2DqZXREjYCy8jMCJPbr3MNfEQYNGNiR4ZVBS6MWeE1bJNkgNRN",
  "key45": "4MdcAJcibtV73Fs26iPhdm6yfe87Z87XbpX5wrymDnWVxXPk5jqMXYRSy9RyRe6Lzi9mP1F7pVmFWBCGQSPjhYSk"
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
