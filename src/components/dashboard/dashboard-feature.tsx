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
    "T3dVXnLvS1PGnnY4QXsBu4iXBh7WMowgYtXexjyvitWVX2fhiZ5jzsHFHvq3AJysoxdocBJJ7Zo9XpR8n8V5UgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JBtFSip6prN49PYzdTQV4hKhGxdKnZCmVwMvgLiDtP1ZUBg1VeAaSf77vmfQwxq6DUvGZfe9VVXMBFDkYtBkinU",
  "key1": "4woGTpq1dELZbVqbcoF7izRAAbwDYgbXAVEf8P5ebeR1Nessmtd2QPoUKyF2uLgxm7Gf6MjTKKHAZDs4VRvCQC2p",
  "key2": "2Y2rRtuRpiTB3vEJuTT4vV6yNwD2AkLdVbmxwt9ZuwhfroC9Kfh1ztPeTDuExMXJg4cusfvS7cqebLxabVUbhGgz",
  "key3": "4f5dmoQaZpiPRDFvTxhuK9yrNWxJ99fb3NxMZBUWp9mrPPGeBRxqtXVsSVbpYCDdYAqQs4zwNN31kHhQPWbtDqot",
  "key4": "2p6qp6tSkTW4HYSr2Ao2aXLLVCKFjTBtSF72ktfywnd4ATzUUknsFGzJxJthr9Xs8EbJ7TH666RkDworBgtDvn6e",
  "key5": "4TPNDHMBaJ8n5mnZ373R3Fwx2yfcsGdkGNtA96PkhPwoeMPu78885kp2RMRytCkCx82eYzXaHYdABFKGHYbSuNx9",
  "key6": "3NvTHEp9FCVkk1gcSTygKvTEQDwx3kWohvvE9FEYrMLf4jE8SZBTax2jZ5vNhiYKUeHX3zqnT9PqSmtakbbPjenr",
  "key7": "rWhVCRHRhNqZJpERznszNiMQwaNwC3mSZLT8pCcR54GzzZrJrr2NbsWk86pCpRfKqeRwTKJjY3yZJq96NXkYdgV",
  "key8": "gWcnK2oqT7WDtZGMgAAFDtwM8QymtB1PzBU3ZdHKBbgugESdAoGcgq3oZPXKm8yACAYy43LpifS498tgcL2sbHo",
  "key9": "32BTpEspxeBxBmhzrVGhFRcxWMnGDF3Q7tNgz5PFBw8fTQ2CU9ifRE1CT9QGc1Gp3xuAwVCyUkWrnvuQ5TtT7Mnf",
  "key10": "FDfEgoiuniagoiZPAn7V17ma6ME8qcmEoD26h8eE85W1DkpKpTvCbsM6bSbngVs171tV15kdb6QccSmF4Tfceue",
  "key11": "RBZhsrwFiufN2c5HEbx3hiZ8LH6V3JqcnD6UDRsXqLb6jQxBg81x9EZQJ9JThFqtZPbkw9pin8XRUPDaZ341D75",
  "key12": "mn8QCsuSJKqhrQ1mjfjv5aUGJVzPDa7DTtxWvVKvVKWq7rFmy4DYcKibPtMzJHHMN5wuWNQUHLq5JLRJLiYWGFP",
  "key13": "3j8J9Hu7Td54YqUC2QAWKx1bX86YZengPa96U2xH9UkcBq5zPxMJ4hzmALD5ghA4ELtjPGtKdEwK7r9uMwbSHVJs",
  "key14": "3FiZ3zcRdVCE81ij4Jh5uT5YZJgRSq3SaWqjT63YCogtgw3e947GZYRW5nfGq3YNUYXTBHsBEsymSF8NrVdjaS5V",
  "key15": "4WHW44srHF7mZ647UA8Z17HbLsCKWZPK9ejAALNRuUhjLjL33zXzsYb6UpWfaKTZ5hx18XfL1BGrXjroR4LHL3Ww",
  "key16": "4TZtxa1CbFcToCQT1WYaLw5QGKCzXdJa9ozcJVxR86K3RKaGgtUQbZ3AELvwiimGweGd32d5wvJ1XKQVRHW2winc",
  "key17": "44ABZcZVW4uKxXAzQgG7xyzyGngAUr23K7BpuA7vNZwFQkiHLBwR6Fauvh8ShqJxXfhddC53APVHtNXvdEdxT49Q",
  "key18": "2C8jeXzfm4oWZjeoNMT5gyE926MooTV1EsR3J6snN2Wnt2Wm4LFwcrYupVP8D3DVTHhQSYYs4FHsJGho1GGaTZxs",
  "key19": "3CMeLTw1dAhdkcb5Geqg5bT9QmLRY8uvmL4irH4zxqHfW6qcPRnGGzWCLHdduArk47MMkTz7ef2wv9kmciGjVkij",
  "key20": "43sSvoxuXHujMkW1UPdmGnsKSSevwoe96wxi8nNBUFYue6LcBvHJSTVJJeQt6jCUYYZUZvWzE3CvcehYsRc4xh6i",
  "key21": "Er6nZuwe5y28zbkbCJNcYQ3mLqL1XjgkLADt64e2vpyUfLchpGmLaFuWmomRQJx9UCkGJrCqAPkEeupuLs2LM3s",
  "key22": "276Hm7UhD95Dz6h4jdtEhgUFR4AtGGMFX5VrYjLfJfwMGVhfW4hvG24pgFFAxfWdBwo7dJRk8jE3KZRc59a6Fiti",
  "key23": "4riUjSJKwZ68JpKKCQ5Cd5y8arLVKZvr8qDACtcG11jUMBkLGZS4odggPx3dLpQRBN4rR4n8nDxV71d4hCF5Uvd6",
  "key24": "65RVro8NTAA4WqM9238N96spFzcsVmWCiDqd7jnkfLQ97TX6z8zVufoaYB4De6fjLP2Dxo5J4gB1TD6UTrhgfbGg",
  "key25": "3DZPgURoKc8zjAcFCybSEG8tcudExnE8JhHg8a1AW1C4W7xNiRinWMkwPVE4YKfUpwgBmYu2fSd8fJDpJ3vWMoDC",
  "key26": "3hzKrbfkVEKLnM18QiAsqb3tU5XumEUiixWhTWhHMm6o5aDobek7jxELNeTnG7we2N8DCLkzGrcjRJ3LGe6i1c1p",
  "key27": "ZinUmPPzo6G7pcezsrNH8RbMjceZ7ksScx5qqf6FjFjHUFzhn8aJVygsXTo3AxZHuaY46pcAQk7Ko4JbUysFHfS",
  "key28": "3kk6BYj2fXwP27mUEo9NyRn1CbD4DwBcyFBzdNLw1DFqJo12zmN6oCZCjCXEnn9R73EEBgxX263tfpr1pGSAwXcj",
  "key29": "3pPGLq7GUNKR5DzZ1YSKxo18PaW58Pega2JxxwfiiV94TqVgXE9ZmJ8am54CC4PptvvGL3gLB6f5FvSi38sB2sFo",
  "key30": "nnTWneuxGHYZrwQMJHU65Y8jRCg23fTePd2M9ZdVc2KpPAUcwRpeCAJAciQHCA8uciZeJRWPvLAdQWpMDV6tW8F",
  "key31": "4FQKGh59La5aHUxA4tQ9KiBJbzNk82RPSRfJNf7vXeieX2hEeyF3fMvurpnkCFs1F5uEFETDUbWV6DQZQFhGzu8x",
  "key32": "2B4Ju9q4F646ykokEk7UUT8TvAY487XsCSuJt1hYx7qeZ4pzckyshSEhzM5vkWYXKUBU9cyVBnpD3ewg9uWGny4T",
  "key33": "3DQEwm7gqKzRyhhRrLjJLmNkU4wpjNS8PRbgA1gsGKWzBoPAThDczwUkpwdTLsj3HW6mCs8ZmS92u6XWXdJLHLPY",
  "key34": "66RHDQ6amuQkUoYwxhH1NiHrwPDNZA7aEbZYK9NFzxWdFjDK2iEDBSGASWFx2Sn5PsasTmjy3K9QPrQ92rsCpGfU",
  "key35": "hHZw6XSvobwb4D3FtLzGcXi7XHxtC6ZeSY4Hiahgw3RByuJQiZNJwxPmuM4BdJs69f3RGcJxVYbVQ2VgEMYaTiv",
  "key36": "36dtGYZsiJJqueMxLrxZ9zTxgnA4FPjdb8UaTto67cfPb5W3UWywU15Q2JdYWdoeNjcXGffxRkeembekDo18yms9",
  "key37": "5ZMZE1ysNRf9p627hpUpV1iFWL771eDCrasfqksFrG9yUAtM24n3jo5ATRtuAJDjPPx1gNgjAHt4n1FPUJJY5eTy",
  "key38": "51kCUtf5wXbyq9iyGMSLpsLyTjjF98RzkisNaqy2WGSm6sTwNSS6pvJJXF5XHNWEnSk4tw1iddSmtggmXpetFAcj",
  "key39": "4c92Qf4pBy4UEbWk4D5CujYHUMstqmAWuHnq85JGiAqSdoam4NGN8A4f57N5RsvXnGWL47CRFJgGAv5eUKAyPkMW",
  "key40": "5bfmwEnmBVKvDcNTEoqSDQ6dWDAwYid4iq1og5Q5eMsrzGMRFoybgy8p5uZTTRj4HEWJmsKzoYixaMKE3jcHAhTH",
  "key41": "2UGX8tA3JY7JpYdj29ZjRuaZu7mcfHXB2VnxdTK1JPrEkhAoa4yTFBQTLtftBeAU1B8wxSB4VaS9uNxAHKqGFF4h",
  "key42": "4JkPpuuU6mRdAAWxf7bLnoUjXHzVk8gTZEm8oC7vPMTLaiiY5V7biXUSAVbZLdWaBHcdvrXVUZM5sN7FMQ4Nxxji",
  "key43": "3DmjLNEEjvZ5cCUvvTDqnmM2ZCWRzY3kAWaQfLe5FJFbjpCt2EknnQEjzvFSRzC3VTdH7aiA13qnAU4Ve7QYLpxT",
  "key44": "2FPDdo88Ljs6uFXhTQSkWgV5BJfaxG43GaSPNBreYwXsoKKxaeUmxoN4W4orZUZDSvdcFeF5G4Rie3DbC1gh433h",
  "key45": "4VnMApHeL5uNsS9eKcj9ybENseNJBj1YET8fmx8JHFkae474okBmi7hzwtRbPejVJDnNmwGFneJN1AtAgLZDymoh",
  "key46": "2tPFV7o9aZJQ8rqZ6A19FEMDLL2szMpX7Nc478N4nXJmsoW6AngS4GwgXGMD1zpzRB1fyzDFDWWrNjt1XG19txqd",
  "key47": "2uJVjHEyZvkf9ymKy2Am6QDBAsWstUPsaaKjn2crkqQvtUVbvYaPvFKgnZ5QfNPqR3oz5HgqBPSNmmP7kzCtyE6s"
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
