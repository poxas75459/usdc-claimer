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
    "38yPHwyJTaPtCE5zVT5b6fodQiXFbBvxYjf6ocBopRQG6V16QPaM9hxrhiJkzj4xxEiUghiRygdymBuqFvn7foC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exWEa3pSKrpayDAM8SQJpNKp3KHWTfqxfcwXG8TcL18PXxmqQHEPBeX7FksGYW1tn7yFHVmndimHZAvAHvKHyNT",
  "key1": "2kC1KA1Nw2BwC6kXTDNwmr2Gm7PaCYFAEpdk2HJefjhwvLwC43RgxwGkoCn3Ng2mCYofuNFAFxAb4USRedbUiSUw",
  "key2": "5tfRZafuwPdMn6s2dCHQhc17bZKQ8QRFZ9d3ULStQFJXr3AyvGtVnqTSsRvXJoTrsCHwYG8sMFibeKArocuyGzDL",
  "key3": "4ccx2EjQTkA4nxweq6F8DuoBCFgdGD1Dbv4sZLXbHjViFcxUg4NfHTDCjXguoxnwWeMrvFBY5Q5SZ4wPqR7QXbJk",
  "key4": "4NuUSPjMs8uk9Fsxpf7AvN6NtqGDy1WRg7C8taASFxwVqfnQMhx6FAFXc8GkQG9dFVo3EHZrPQRacJeRCief1yUP",
  "key5": "43kgsvyTTE1kCAYHJSdtDsAamkUM3HoZojnbZTqd9PavdRCfC6TjosoamHfL6pWoUxkFGkSPFFUurymk8YszBz37",
  "key6": "4oFKHjzt24mF8mtzXWkEyUj6Pgbszz1Ms1MEM9dqF57cYgHyvFuTpWTizuGmijUeo1Lv3KWYPPb5KZZpLu2yZQ7K",
  "key7": "d5T7GqZrHjLyCedHDx9stRarb91Qv6vquoqcfW8kpacKjc3WPNRuGJ1Cq29eqpENbPFomkbugjVd1gn6CkfU3EK",
  "key8": "1axbPXFA26SqNb52zM6F3ewKepzzk8HZszkJSQTkhkfi7xP7DeVzKXS18zK88axCisVPa79cgi3YH6RZ21jZtQx",
  "key9": "22WTcyAvA6SHG4i7d1Kdr2ZMqVr43Sv9qLJuaTePYAFPHEdkzfsthTnFCJiXEULBRVbcxjL2HmZjERHEaLybdwad",
  "key10": "3CEjYg1rzLt5H2nHiDSjrMJrbmoiM24WFAhJCfbJf5vSNupKhTUfpLB74fa1sVxkWPCuuuVGtnoXFb2JxadWiB5P",
  "key11": "2XAR7cxzhUnQZTxFfATbRNApM3w1AfSpqUXp3zKFLYfwvspw58VuuhXCtsJbdJdxRWrsnbbpEw2zYTLxKiLxfQum",
  "key12": "3kbgqJFDDqK9GA6qftyiaEAMgpyfcDKMVZuG3twDNBP5tnRvH8KSBU2j5uiUHyELi5ZdrVwtr9ATbcDbNieaby45",
  "key13": "2Sjn6rkm3ncyfLC9DBfeixzwJ8SMQAkgSN6adC7XPXAnYRJN6Ex597m47o3TDn8NsjuPsDTP8BfJXKPRwVUDwgFi",
  "key14": "3WrZ9Bvj391yTMyk9LNSwjZoK3nY8uuUp87Er1QEAvA12NefHMLCFbWmzAUqdumwj7nCx35bVgGuoc5o4o2rb31T",
  "key15": "63hjd2Dsw36GrtyFiggcTzYhcuAc46Auuo166y9wJzNH1WeAWKk9PCXBndPZDDskwQRdsYqQUW2MxFKJvnDJDF8w",
  "key16": "fqJF6DqL5kheHZkU7vxWMz5quAjEMDEUqZL3GHYtLW9X4cifCD4BaATNuxoXwp74SqeqSB6Z2b1cLheCW4vmcmR",
  "key17": "2HA88QCXgM74RMFDMwf5y1B9jxAFd2SQivUmafxd8PbdzxkWY4pL1bCnErzSwq4EZEvnMehzuoRhaRxScfV43rQE",
  "key18": "5fT7nm5aYsbURitGG9EJexAMftURbMjdZSNNpJZsnJUJAqGRSbtjSFqeVMN48zC2Nxp8g3fDfJVig3eUTrL6kUE4",
  "key19": "3uwdYYxR6t8GmUjRKa9SckMSTbQN36RF24VD8bikr1VCH88HsfbsiuucfWpdCQcuxwxjnibSfoAwucc2iiuCQu8C",
  "key20": "2rnZYmxAufoXsG55HgJfof1wCisCn8VJh94rt68MhZkZnwu7MjZx5yzqGR9eho6vcgkYSZ9oJLr3kcZWpU2gFgez",
  "key21": "3PsQa4RRXsFxNZiRQZmjoFwZEMDfytQDZ4Er49rrfqFeHLweW86hqGCrmsufpNZQWNdTEfmNSww41f1H26BzzBhA",
  "key22": "2mUKQH7VaoAhSmCgpponz8S7vGsG7NHTxJdXMjss6k2gLZvTm2TU9n9uCcnR4ERAwpXcfoMekdfLkXyqdMRmZ1V1",
  "key23": "3gCku3FKsXEov3xa4JJVe7NAApK3KxFN5Q3Wy4dMjLyJQb6Sxrd64NxsMUNGmBaNg9xZxcUhK53Sx5C9THPg3XGo",
  "key24": "33nKiEEmchsw2XMeiyKfN8JizvawCzjd3urd8WnFs5NcF1rVKUbSNHkeXQGRxuXxjCjpaoQ7EzrqXXjvu5gHVcq8",
  "key25": "5DkN23kaAjjyQYPqgVjQUMZVhaxacQytutU8g96EiWGJLF2NEbQkyji6qP8xzkMwEBU2wJvzTzcjHY8EcGxcGQ4t",
  "key26": "26ZAvL1aYBQ5NwuMT1YS2CfD2ArEqJg2WdPHhXwD7t1jETK6MdzvrXWCuMN6fjhfiErzmdAZWtD789YwdeNC8idA",
  "key27": "3dmGUEwnJfhozDwc4s1DXGFX38GtnvVxQLLNFUDD2YeCqtNgze8aaMQjCZoCWVYRrFzqX8TUkdHeznyX7kaZGmJH",
  "key28": "4nDzexi6wdzeTZk1dj8E8jW2HYTcz2P6MbtuYdY5uVgaFrW5vfvNMMqvAhAzqpRBbfgWvpp81jSsVPLfhpiL26qv",
  "key29": "3JCgK2UUrXGJ2xb8MCsj6J9vgJWBmJs5nYsqpf6sGGM3LZR94wpzeauzLLHxaFU5ZrSrr5g6dBDnGU1Qsc6CeUT6",
  "key30": "AjkrcbWbQz7h7qJZxirBr8KUdRRBKfAn2fbuot6NzVLngvENQuWf9VHmdwpXgijmq4Tb7GCKM6xnki8act29Ruu",
  "key31": "3SAcyxU1YZ5hP9aYhpf5Tph2qXJDdZwcrZZB3kZn8ZiSpP4AbGCHDoQHYnSuSCGGsKdnGfVgM2wXx5TDNnkkYcrq",
  "key32": "3ktNxHWsPqBxqiJw9CVLHhyf4MUVJD6ur9Pkdgz39hPfHbWHCcxT5Yt9DrAKNmy5SM3jT9EksTnH5QZnjaNsX6YS",
  "key33": "62KmbtGqaqFrvWbmf9n4PkZwTGJRm5aa79bg1a6xfE52m9C2Jrv1Av7hDGgbJSdGsMFMwbsjP9AcZZ7H2HrhB4cQ",
  "key34": "Aj3WGb4v1WUTCM96MvZv3hxHPJiJScTRmZxena9jqpCvCHHRadUShwg2xjnUr2ixBFRUgvjpCighCe4D9pcnbFc",
  "key35": "3CqG2nRhWx1NqA4G5ZAgNrHQoBJCJubGxNLpAC8g7xaxUk8vrkiydVd28TEAm4ennifhNHyFWhjVLxXobUoqqQEE",
  "key36": "omNdRdSSY3yfoUabbn17C47oLs4ufBv25yRkFRLaEVXVsDJWZCLK1Br4FdXSyz7cCiNF9yWt8xQF7ZnqMCoZYwF",
  "key37": "2cQ6SCqbhtsidZrgnEfD4tkuxeKcFZBcmb2vBNzCwPyQcM8UPUDfAUQpj8MhxDxpKDgjZ7VSG7xPWWx3WgAqVPA3",
  "key38": "3fV5hnCJsbN5VfqCaV3wFxk7qg96tFha1gzfKFCn5ooDDVf94scrBkc3or6FS24m4kdjLrf1SqdrjfX5eaBJDL3W",
  "key39": "31NrMNjtV47DuPZGCN226LTfsymipe3fVFKt3r91oQLgiqevhAMh6JpriyAaa6ExWqoRX77JZ18PSUyfXitQP6Z6",
  "key40": "2YHAjxayDhWARdsWv11jNdzVE7S6Z6mH9TjKy2TvhK5psrq1ycQmakQaGEUsYgEAD3RoMSoTW4ae4u7ituxmaQ2v",
  "key41": "38yV8tUYU3qfMyaRmxDfJ5YMFGGddotvUc7bC4qpXZgxiai6d8pp61vhUdQjQDLNtR6Ls8Cyao2P3sbaXCCV78GH",
  "key42": "cK55b1vASP3D1Qh99Tbbmcz9bG8nmPmZwFW91KpnLU6sR1eH3xumHz6khgNzvupTwrqre5vhEhrEKn33bdVeUCE",
  "key43": "f4ax6DDhKNW6zQY7C7GSJZRtYQ9BmaqRGtUuuZADbVpV7VhjeA1muTf1XZA3FQtRUjubmbBGQiH78mVkDK1LscZ",
  "key44": "5LPosFSXMkPNNoPffgz8gw32kaBQjrgPSVfLPNzfEPj1jf3N1qDyTqtwm5pdZdpVW5J3KR1cHjSjUmWwU51xaL9S"
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
