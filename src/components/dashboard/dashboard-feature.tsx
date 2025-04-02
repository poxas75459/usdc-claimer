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
    "5kyQmLEiDRuxLeR6XrVkTtvLXAbW5q3JhGx2zNfzVY3cqsywtkZN1y2thGK67SzHeSYF9AtFPnGGQwk4o4GnGdoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdGsNw3YWov4qbddA5BQ2en47VECUZYCqVgpU8hkwtBjEEeVwFSqAaPZ7JqxUmmMg5mA1BY6aiY2pwJhbpHYpGn",
  "key1": "4bnG3obGmefQytSv4VspEXtCCPpAGH1oQGx9vFTPn9WVB9WKNiahaRP2okhTaF7u9G9S14yTjzCd41XH4QawqWHT",
  "key2": "22SaeFbX6qzdbjQHS4DAWd87XMKdKfnABiPiZTjDHsct8uPj7YtyPN96Y6HRjT2ZezVdCbKQqauRTxXzovnThrjE",
  "key3": "2ZqAitvbwERewt32VD5dJLai21j8nJnwsn98Xzdx3cQpBWULvXyCMniU4zQMeybhVxD83hvbKoEBYKLga5GGwkey",
  "key4": "3iTQTd2eeTNkhrnFkjFtSasYvBK3UA4WEaXk1kAVbLJNxNgTeyD2u9hKmue3pdNJmg6Tc8jaZHYSC6JGFv6GWrSE",
  "key5": "65WK5LU37A5kfdReqAFzGXUYJ3NYBqM3ShqFYUUUgPd8kQGNvD8eDDywySiJvW97ebLcrSBgo8dD6LEvpwFMv99m",
  "key6": "7g3EwQWaA932bajSM42AXKmAQXjUXiokTCSeTi7E3GmB69j7zpimjVbEmgEBF1Y7rzofa1wTETUS2RxNr1YhF5M",
  "key7": "46bvui7H665rSn7zQLAxe9yfYHpDbw3N79JEaU8rbAxwHtjJUXKp3ty5SRN4RjwCdN8xY4J7xgA5SaGgvBRDgXMZ",
  "key8": "3FrPY7reeG4Ey2Lq6R7QQrNsrbTFVJhmHBhgn897sX3mXjCoo9pT5RPesBs1hCU6bjaHPRV6pAHqKTQkY6nwrorH",
  "key9": "31j3i7Pz2f1SWcoH3c4erAjysVDd2iSAcz8hkzNZatMm9dh1sU9TX7PfeAtycQRD5W4YiStt2mfuJQpyDgntYZvk",
  "key10": "Zw3dJHUbBbMJovUz4jhsoXaFc9R3ZkFoHGXW6vjWEK9kPPDAJZmz2y839bmQFFnhAuZfjetcewjk6wA1zr1UFHs",
  "key11": "hXyzJorzEoG5xKeQKTraLXfMsRgvvE1xTJ27Uv61rQ3bLqKojCP7rn9PjJTxRHfefUa6gc2Urt2oYQRmBvv9sAn",
  "key12": "28opCC7452YcSAXkpxfv6JMCQ6N5NmFBZmWeVA9Rbvc2SoDy9nUwibA2hQXcs18JArLHFcydTzNhWUqu8N9begaz",
  "key13": "4c8ysM9itMwmh5M59cbZGSHzDYdMGWYsjd31YWDiNe5JgpcZU8DBEkKL95oz1SuVwq3AD9ShkCUbdndEYLVsMMdT",
  "key14": "47S34KJA7RTs9GAhs9APVJTfMMo2APzHifVXXqQtJL4ApY7s7fhoEsPdEsYT6j3vzm88WxpA4aMzZSeZZ17dUrph",
  "key15": "3SEb7cSUHAKqZPaFNmtkRyLAa4VnLVvrP29xpFufUoASfmpVCEHYY9Ksev8BfuJ7ND1kWqLGz6FqYAN1kHifVS6P",
  "key16": "3jwzQ3Dg7kB36igFM3ziMzpiRztWPW6PvjBYWBSqiDYMrJe8TCia8V2mi3gad5tx4KMkrqK3ggvS4v2xNonA6jcp",
  "key17": "5bcfE2wVNRZEKq1LExsWy67vw7Wp56Y9P7CU4SmDkXUQcLd7pbwC3JK4qBrZenoPgq32RoHe9dubDcpzNCjFw7d",
  "key18": "2JgRrrdvjV3tpWbn4q7p5w3KJ4NBeSsCBkKuhLduCQHqpEFrK4Qm63CoZCAaoQoBAGVsfzukARUEzY9Tr6K7S98M",
  "key19": "3QeVRSkQjArmtZQ1ZMgDi5RAof28SGQ13GuPT5s4qRdQKTkkdPvEqJqas68Ni2UiaMyVVsRfraVVKLEdn72qerRr",
  "key20": "2WRM7AtPdqTiFAcL2MfQ38GG6UrgvFJhEwsCZFkijXLeAabwuMeyFBC5neNxvjjEbVQdyD8gio7zgdzwyt2yJGSM",
  "key21": "3gvVjoUb7V7w5o6gMPSKiGzcJ9PpALKKFw5b3gHrLP48m6FrbDDMA2aYFNVNrZ95FPQFNDNThessjZGRnAqi5gbL",
  "key22": "2NFJnudYR8bypMe9gwdG7txczvc4bSWihyqF2AB2QESiw3uAfFZ64Fd6mbzuDikz1A1h5qPw9xdgvbZat1Ztja9c",
  "key23": "2xUuwrmAsh81eLjxs2GR1VMce5qbrxw6VJyvooGPrsx5SH2buhKExRkPn3hKYuzC6qcC54HhmsJJxsivZHBetdPL",
  "key24": "2HuTajQxNYejueaVG1MMsMSSH1ddYxXe6kDPYxZoJsHupvoiQqMG67y9Yodh6vyVNngWEnkcCU27gqnuB7Lhx8ry",
  "key25": "5wVdv4zW9L97NQXFmeLn4WCMgz6bjKUkw5cSn6RGd5DjDn4gygLdo3yR7UvD42RaLhHZsL9PeoCAEtFAnk1keYKh",
  "key26": "4J1uGx127AHp7c4oUsCfHhfW3b1D1Bh23ovZpZrhz64Cqgx7AG3GFi7wTNBm9o4aVQCwpMskWq3wuDY7PkSjoapT",
  "key27": "5P4uU8qArkBGK3gD2RTL2giws6gtjxYkecTZ2Z2wYwpciBRV1HecpjkH4BuJ5sKNN9XSdRkPKAo86YguPq9maPq8",
  "key28": "2W88socYVkEYTyyudVcMSg2rShTNyXk8x9JnSQbvqUn4fyxMpeZiqSJ6nhKkenECrkRxWfBeEf6S31QC9Z17JwXE",
  "key29": "5BBuunHmvGSWBwNiywa22wpzisRByBTnN7spUjLHr8PB4VWuENjg54TmvPYwWQDJQBcFtwTa8uw4BG8JHU4TjTMe",
  "key30": "77CPnPHcbtxQB4iG5T9VjdC54wsqyGURqZjwLokFHRRfrGn9jsn62R4qx47qwoe8Q14r7bKrXcTGRaqavFe2Y9u",
  "key31": "4cCNmUnarf7gBQJxNQGTT1Xii154gKuQhdsGHEVZRrbxonRwc9jbksBmGJDg5CGpmzyazSe1iJDo1ycZMFzJ88yN",
  "key32": "2F5gApXxSXjS6RAoHYkDt677hcRsooNre9JDQhrxTzrXHNU5iXUFbS8m4WyrAg1SZgZuj9U2pVuxmfi8j2FQbNnD",
  "key33": "4gZYKGbXfX2ZnDx6fmDxfBG1GtYvLCvgUmWRJMyNTW9NETYoaQ6s6Pnz636MhMDEfCfmoZH4xdj9cvJAdMgapWur",
  "key34": "59x8PaVJQivJB8Cg6SzkRPVKLtxbemPTz8S3NzCg3CgmzCsZ9fWqJAimKV4cEHYUD9Vm4zNZUF3byeridd8sWkXT",
  "key35": "4SSEZ1bZyD2A1mHJu7hWtrfnvcqeP9wc6oqzoyhCrXLFhJ5k4koFtt1y762Q5qrmytLGJ2z6JQ2DsbjW6FeFk3nN",
  "key36": "43s2C9pKYA2cPMtTFFnPTgz2Y31SSzt67GKTCnr7vB6qHekkA9pj9LehAH9orKWgdcEr6moXv3gqWZadcHswp7zo",
  "key37": "37MzdkutRryZR39gAqezmQtuurMUpvBuDYFBexsZgqDcKTXrsmL5jUpgVn97FixZDTeMoKrSgVR3r5xAi4DgX1bn",
  "key38": "27wYkcss1ZBq7Nm7ABUn5ja2SfaRu61YxdQJ9smnx8q9F8J1GJAymDFY8QwnzKGNjs8nM1EcSZ6zFW53LcdRK4PR",
  "key39": "241WiZQBnJDGBDvQiYWFXWNdUdcmTFAye1yyfzVKnq3Ad7ekTffTrFVgLNMTPQRSgqXWEyMA5VcLB3VQxGa6Q5ge",
  "key40": "4MHAebpCP6wgnRZeN2nC3WDC7D5NfwNVg7cZtK88f51btm88LsD4MKxNStsgF3Vo2NcmVJ6nVGM34RRwCwj44wrC",
  "key41": "T7aNaicGbkZMpochiK6HcifLACtgTGSvCjW5TBGmccCF2eT88gBQ9BKNdJQHwzwvCEYvhzpJ8HLQKFSAfybMofz",
  "key42": "3GahbPTzDjPrKAhxD5zmiZ8wtarqUbz2oriVoY3r1DAbcdmHmJYTxEMs8rhWrD7Kq8kjiXQ8hHtM9t1bNzAyacUm",
  "key43": "2zwsMSJ3mtBt3H32KH1X7JFPGRxy8nntDbqwGZrHHXFQ7M1S9kksKfeYHJL9PDjnh6aAyZwv7EyWgRxnKev2aack",
  "key44": "rxoJfECRCLpQmf2HNf3sjbZzo3Jjpwng2ozG522NjdiBDqGJnr3ShnmGpKkYtmESSZPNcwbEGFYqiSHx2A8zaWN",
  "key45": "4pxv8CNCzZwZigup5aM4BpKnAaVuAocoRHvVcVQDzF9tk4k2BGGZ1JCy3ZLMNKQocYncuLVearXLgJ556GHMW5zJ"
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
