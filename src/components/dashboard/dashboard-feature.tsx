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
    "2cFvxqMdXJ6UdQQ5wLwtRwm1er2bADeJTqgpX5Njw9bmcpCCSqTrxULbJn9r3mfKshhPprMnz7D4muPMj9TvUPj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TpgiXGVH6gEXKvTeBQbG2WmLpqJHkGk3jC7VbqLocM69PEetxNvujJwH7szwFuNAkHBrSvh1te49rJfuzYnKyaw",
  "key1": "6LqMgir3XX8vJL46moP8LjMMa2bkUCkRz5xSySvUzFy5pSJksLfXZT4mmjuZvBLiYyixLWbEsWgDjSmmeF8YY1m",
  "key2": "5tVe88dZzPERzKt3sNHENTUgKD1UxEJnnnXzVFvi7kt8GCLn14mWYnCC5h9QqXxe2i4CEeys2BUTbgPQxArK2zt8",
  "key3": "J7TAfAw5BrfNoDy3Za4ksTyxnxmXi81htwHG6CCczQsihSVsu86r7rC5ahvwJkfLn8yFVNjazrLdCQ1q6S5R2fr",
  "key4": "DFJeE3wzSMJ2gwKuJyb1uVDeiJn4MjfoDMYU8ao6hDck1aEi5vF6dRwwunmkX6N1Fxr4KpCqSmcnbpVq2mmiRoH",
  "key5": "2gncXQuJp91QejWcemGGgpoCS5yLMEwRh66hxHHPaXPF9vZ24QCnPCgP3bctnMMddh2WGKZ7KqnP9xvAkhEn2djD",
  "key6": "55mgAfGwj3Fim6VwJhuvPGXfXR6HzRXsT7AHkudCszWVzhhXnzxZSJz3g5Rsj4U17zXfFm5utE2isACb1yfPCidk",
  "key7": "2a2kFmJuU8YR3oJFfTeAB1r1pme5oByZb5Jgbajt8SXJo33JdtVPm46i71M6UhizeYpkkfouu7S2HgrveaJW2av9",
  "key8": "3sqq6tV8m5CCt8T1gdnNY9p3ubt7EH8K3tNJttAE9K2qzsA6NP9jn56CpNCqAo1eiSx6isNcJ4XXbZ2hfzuytyhY",
  "key9": "MVqvEGKLgYybHstsFQZPf15mjEBcY5v8F4pfYg6RKumB7N7bhC4Zkzri32aobHDUQasdUp65G8ubA59ECMZAAjm",
  "key10": "4vARaGWbJ6CU5ca8ymYsc8eDQt4jAi4UpZttCTX3gtZE86sgmZvFV7QJFqitenSxGoxzJo552mDyAG8mWRsQMhGn",
  "key11": "3M17jY3LGnsvLvbAjaqimLTUqvhsMtTuSLLHZQoVMxSmn5RUwHSre7CjvcGtMsqyjw8U17yHgzH2xy3rmmBYEVpc",
  "key12": "3tGeyEYE8t3rLsZPtVn6qMTKA3KUKjhUkXk3H4D8sCyaM95sH13EdbTaWbP2BSkKozZ7WuNfYCsXYjj6nTakgmBQ",
  "key13": "2V6tAykmt32b13eknH1TU2gg8CurCmbxEyQzndEWNLpKq9RV8A7fKf9d6E7RkXhi15NqFD7NLDoMqf64cXa1qY8g",
  "key14": "4UmH1zDq1RrgNds3QhmkUxjv5K7iCh4Tw1TigiSAkLr9x4Xe7tghRdwRkGfzM88zvYeBpZaatGHdR7ZVqdDF7wLz",
  "key15": "dQM8zFnSjiFWffxCpoakyJgSkPiRkQpeYh66DfHNZVToUpEsAoFAU5fbK1izdzn7wjMjFDCMzhnMGxCKs2toinS",
  "key16": "4eTeprFae8SVA4r88rfy7gAcnhf2cFXA343hSLYwRyhAeHpL7veumLo2pJaWNhWMC5Q4YpQHK9av4nXT1YWbQ9et",
  "key17": "48Pnzyr9BsYkhcvfAxYvVSLK2s7TfsEL8JFcqG54eVgFFVHYbQAzGYrLnYDgiRnAoDkcJYjs8h7GdFTAQXpbBZif",
  "key18": "qMUuVYkGCyWnp9E9HJxQJbFWeusKFwGNZFCwYafxLKeaHQ42kk4K4GFUFu5izFRKJXkCYDiMP6CfDwwDKyxSFvK",
  "key19": "2DcqVJk7UPKNwjKAYPBDpnxvxBcFE1vTeSsw51zXG8dGjYSxY8xNEybzSPZHhxQ1wji5vUuTZBRsNoFoQGBGv1iS",
  "key20": "3VTdgLcUJk28ubWQQ6iWpedrKDUdRay5jqsM7jRCpUW7t9WN5vpCteyribn8m851BkvW1s4Fin3i7akAGmTZSwGF",
  "key21": "4WB5gKRNDU5WGcGecxPyXXKCmeQ7nENytDvAhMm2L9SyDu8cS4gFVotvZX395H55gWra9ku9tsXVQDn485YMQjk",
  "key22": "58eoCeaFcMRYvcPHC8HYasV64VduygEQh5jhZUYiHheiFFxd7zqnGeAJ25u58mXuwnGPUsmM6EMEFVFstME5Voa4",
  "key23": "2vewp77RuLxYDAstR7tn33CnZ1CoAGnA6F1RCATKs7DKiU6wosxAkZ7pAfL9pMXaW4HUsfmJmXUiFze3enncceUW",
  "key24": "3hRGGgXgPFkmVnWUY6ZuTWTYR46NdsHf9QArc3to5H6VKE8GjTtG7om8gzPJepwToovUWnKpGut7tzYg2BWN1xxC",
  "key25": "4EC41DPB4hKVPWbJgKeX1PXjmNK4qb2QLFNeWBZjCiuTau4TkN2635Cp9rpFbhUeiZtGgVQj8Bja4rc7Dae8mAuc",
  "key26": "4hRpdHGv6JHoqa48prQTjNTckoLDbmvABGk77FQx7nmVgXXQkCmn8fToFKYdB2GuLWefJvCzUZ1sinBZHr9kvL1b",
  "key27": "4bPTQF1BkW94YVyAtHnTvmLNxfppNVpstgTpNT2ADav7DqiB8qCNy77FHKAuHbAGMaWke5134LYruxjujCry7t2y",
  "key28": "5qc8srmBF6uszn1RNioTdWbYhMeH4dWGR4C55XEyfdCEHdtHgQZWsVEb2qaL6yxb2QKDAtxtd7zpfRTu17H2UQeE",
  "key29": "5AiyxawhWgjuBU5shfyHfjPhKXf8edw8wYCbLjTKew5VMaew6Z46yCeSyrjFHwg8pdZWViLkmqrPbbWNRq5nNrKk",
  "key30": "rZNW3D3He5ygoH5BpGApn6WQT1uFu8PfLZiFb7uHLKGi9kAaan5fFjMN3ZuVJJtCKueUwvnpRdXEmdMCk1AHXGe",
  "key31": "5f6ZdZUJpbBGYdS8VDPKUmoTBXg5FcAB4VtdhZ2M6A4tLvWu4GihEBgccaUBMsR5MjLEgFLWYVJ2XgZTebnJfqTs",
  "key32": "3jAMU6h5ZcB4JbohJGXK63ZAy2EHfeFavhTZTNo2B7cWeCgVL743zrgMY4rC11viUhBtCF7kzE9xnmHM41UsJ6PQ",
  "key33": "5KTkJEpQRCRoqHzuzvTtRUhbmVD2RwR4Zsf7ZLyjtPdRZScooGfnzuWpmgbKtWm353Sfx22gNCH38sD9z1fyEQaU",
  "key34": "2Z3v4qg714E8wcCxq7YcDCdSAnuWjRPAXgnSgnt8PVUFukQA6L5KQSFdyrGnEuPgVWEcchWVvYMgsFduGghscf4C",
  "key35": "5rBBQ55QY1gmkYrcLQ4WJjwRQehphYKv9NxTi824WC9NJQu4Jbmk3PzGF3gymtncPUziQ1r6xgFsJb1mqAbZAqzv",
  "key36": "4mfvxMhENE2X1XBZceUPW8geQzVzNvG51M5bWxKaKQFvZFv54Z4QvDPQFMD2gx8rfTfzX2VELeGwqgBCJQEZtiSa",
  "key37": "2Z5Xf7KWfUZAwU39Dj5kdtJXdpjzCRJdYT8zF157k7iDPB4aLWd9Qtru7UJWHhUg8spMymGug7hctSEx2m2Eenb1",
  "key38": "62bXnB35m59ZUBLF3Ug5CGDdcLMVdJ91cWMaNFMFTNovXjbuL18dtjMvTxVrGYP72vomgwo5a56VPwGpvyjfHtfu",
  "key39": "3Ky3bkPVjF1JW1MtHZf3gdVTWRmfFLMHemutnsdRsfsNtKugVX99nemnAsyPAXvzwwWydao86337mZvPP4LX6Q6r",
  "key40": "4WaWYwxwabzynKXCvrYygsErnF1q26cdi8tEoz8NHVXjd9MAo8XXcwQSspXuq8yFL5kNuhbMwSGt75YjBtAZb4Mm",
  "key41": "2ChnrWCCMd5rhVX35C4HVf8N16BQrhpnzdqqBCpLBs9PuJNjPZUADwmk5JzWGCQtNK84oS8gYcNEzmn2i61pToSr",
  "key42": "3vFedzE9CExicjeheA7ZJ7mW6a3cttV2VdTAGiYcGoRA37aiSqMQRkw4s43cuVjHJRL6zstX9hNbZm28UkFrW15k",
  "key43": "4uCNEuYuVWbmDX8hR7juAbcj6drX2AKVV3urheJQ3Ppi7aheLmyoEFR8LRAWXee5LXrLYK7P3NjUxez65JCV4yni",
  "key44": "5sk1ZLgU8tPp3oPBATuXzX2M2AjwBiaEGmvE9ASkZygnmLymcpQv2QRXstCsQKXqZ4KgURsuvYNhEkBy8ParPH9Q",
  "key45": "2WJFmgg334os25rNLJY5FS6VLsZ8tR6AojsaVdqWnNLumuq1LWmAcUc7YwBDEb6UCR741CVTH5MrNZU1kjkYVdUf",
  "key46": "3F8f7BKrKSoAQdrr4jFtj9NQp6ct2F41EbK1Fd8vCzPL71fUkobv9YSUrPZ9brBMnYgTBe441TAX8LJiMLg2VxBP"
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
