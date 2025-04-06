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
    "5ZJ8LEaBbjWzZFtN8feKQYmQ8zQTMdQnBr29XgKZH7npbuYJhzyQDJ6ZtxeA792kJUrU5D9fvdmAYRyGJufDvaWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MvV2mJAAVHmWf9CSgXqJoQZVVnV8ZrCXShpASd3WTXMepCtmjMoaVksXyF8q4QEDoNdCUjacLSy8QuM2oxPZPV",
  "key1": "4EsHZMRvVobMNXwmNt2SFW9KcPxaUrYMu6rDqUMSRwf4ntWF2wYBS2HxkZTs74A59VoKbv3Fotaxi1yE5SAeuSAC",
  "key2": "4JV27tRv9kVZ6WVXoratdNoESLNhdqDftcbF7fFwFbZPFh2tRHw9mmPAq1TrLjb1BHEoKaSmSeuYMj7HtjNCECo4",
  "key3": "4XvdFMKyPJZomMNR85SyDHGh6MimCQqo9Hz1ESGg6TpSWqpi9CokGvtVipuozedZnv87bqQv2b7gCpQdcgKvrFEZ",
  "key4": "3bD3kUotQJhb1TCR9Y6dCqNJVmLb5N4KJHc9FRVK6aaXeMv4r5jABg91nALxEjpSscsqW5pJwcNmhkajP9uW1uK9",
  "key5": "HvXgqVjZipQM7QHBhmBo2rVYzLxUxm8iqTwU8QMaSiQKnQZKK6ea1wvwJPMXeKmV9MppsiSNZgUB4aA3Rhw5HNB",
  "key6": "4yKR4wz7XEpBjeUfoQSHwtH2ti5g6QywyBx6rXYHTQ6QyMZFMJt5ZGJ4KbAhSg1vmZmdjPeBnfRph6inymHvjfUJ",
  "key7": "2QC4exDdmjZmYJBFa3DpDNJtkQfCQiphSSVvNvz5xQTqCed8UXQYw5YFq5XLFx6356DzBxVXzXLMM86QcDBzSG4N",
  "key8": "3mA3KHsf1DzWqkcQvFJdJqAx61AMxdWxGcv72kBXwaWRwYKX8e6kpTqAGKumJKv3wWPrHRgm5pyjtQPVfh3Edtyb",
  "key9": "4Ce57bp5M3Fh1jAvtF1DWCJzayF1URzMRLEJs1FhGdmvobq7o4yaD1ndB4YbkCBJUbASV2Rhv5pYJXbNzLUwRbLi",
  "key10": "4VfhJURcHUK1UBbtUtT8kUGQukR4PiWoZEUYU6Q74Jj48o36DGz2pJ9GiXfa8aRJSAvhWkfFYckSJENrKctHSoSH",
  "key11": "tkBwCLk7kNQbHqvzUJkhvE3NG3tQLoc8fCmq68hT3MMMgYSTKgejtyZiD3ez11KwxfKUQ16vNUNtu1AKkDQzX52",
  "key12": "4BCQXwczGuL8NwC6VCvnQqf8xJrHsLNPSx39pLTDp5YxxQGLiCD9Cux9REpKHojJx9KwS7CP2eQe6oBPbuk1foDn",
  "key13": "Lm1SpZyQzjLHyT9TQcUoJzvLGsRkrwWLR6a7XR8pQHisbUm1wvfCmyoFVMWNSzLqszy2UsvLUPfQqQtb16Yt1Er",
  "key14": "2inWgoYRHgYtcqJQBD8pxD71BFcG34FzC8wqAzS2hDmpnC1VXGPTTk1FVkkCtoVoW1xDmihiTE3ijZ5hxD74eHwn",
  "key15": "47oM3ixw4eYPo1vfYctqWnMde8Q3uz9VqdVVpD8Ppuw83ozjSpSFf45tJ49x6xnDU11zPp9zT17dinXAGY5h7fDN",
  "key16": "jh1WP71UgsJJG97XFeg1GKX3TspqK4RRXz1anb3T58Tru4UGRVUuJhr49DjGnWmEkXtVZjEPDdV24xP7PGG7jZb",
  "key17": "2XUbr7LYEPTzqkPiBpawbPTYjYz8WCrMf4Phxeatibu1Bd8yB3oCi2FkvQjMtvsVShn9mrnp6BngVqfKWW47Kz2K",
  "key18": "4WQ64bh8gNidcmkgmS7cnDnugmrcbawKbAkyBGgC6ZCukHc8C858odvvU1aiZM5y1AZqNA1uYhTCRtYJ6MgznQLr",
  "key19": "5G5tYxcmHND6GjLhX8wRhyR7qArsGwPAEmiQjp4SVbuUHLy7xfgpCpR6YHSZZuJ4QjB6KoVpc6vXU3tKYEupmQdE",
  "key20": "3yzY3qUfYWpbwvT3NhZHVLiojC7VVJEyKWyWPBesM7nHdZW6dZtgEq3wybmNnjePt21FhdB8sG9kcnafXzqSVHqA",
  "key21": "XVRySw2QCWhYSwkNoXWTSbaDwaQhmLZ6asYLbNnMJhd21iYnzW1DU9nWoLMY2X5VcBL52DYQ8PU3qb3VrsXPHwX",
  "key22": "2SSCJYQzwJZYjvPXVNXw1yuP8u68Hb8hJAL1d5MhkQhcNeAvxKC5QBC4g39gvFvzHLY2ptCRt75fCYUEFjNscwf",
  "key23": "qKyrzPA1vxDKW3FBEarcZj6M4y9AyjcUkpWYDAV3EY73ACLmuM6BqidLViJ6YQ44VmeRmP3HPsfo9fJP8u7vHpP",
  "key24": "3petpdLtxdd9NNxEXANLYGU8SUEN5854naCCX4KK1fXVMqYzp67bo5SKHeRKc2HBWR6tPHe5othdcwetqrepfYUE",
  "key25": "5okFofPTnGTNpgxSyYT28xqBA14MDUR9UibfQsRz48AdjoXq8MQgvcfUd9YwGz7UuM1Rp9WYAEdkmMPWyVXLvT56",
  "key26": "62EeTmFrH4kLkYA6hN7h9wUMMxeW4W1FwXS85R9kbT8zNHsVs1bVE5yFaAnMMoKsBmtrrkjd7URFi8uRE92oKXtj",
  "key27": "29GPVwYks1Q4Q5yHR7rSvnaic8MNREcFtes2nAXEVDB1yCda7on5HdXSNTniTDqu3MhfKmWgdURUPGEkYd8EnKZ9",
  "key28": "3h3WBvXw9tS6Wj6z1KhmsgXPAoNLfpUDFHY3A7sbqEZaJ2djytdPyEEDk8sienaYFcJ8QjcEcAYnpuJ3Lc5kbHQK",
  "key29": "2eLFnaEZbZoPGtd9uS78KGmHmSuNahZuMVWDoftQXaadkoTne5Zym7DWFPGvuJbByaQ83GmZdkZzPK543ksL4xfU",
  "key30": "2AgBsyDogAVRJ3G6HuQc42ivvacey9rPvwgvzfHMwADP2bcsi4N1nSqun57Gam5yCNrz6tet3b6vLNJTxNBjq3os",
  "key31": "4z5kXnbCbXy6MUy7D6X97BxirZyxu6Mi9aXrdWtKUWhkqUatg6wkRVF4H4BTtQVYUHu62iUCMGFbNffQwEabPTNC",
  "key32": "5UDaB5tJAEZ5N4JnKMKV7cigUqFiQDUns6qmdEH4ypLr6Taic23xvUSBqtUwYqmRA6DE6buQMBoB3B8kMy4V346f",
  "key33": "4395rwH8MY24c8PfA59v3BmxEjQhygu8cu8DZsxjJBMSaC8ET4u1Hek1DASmYecitWk6dh3GV2qFMWkNSj14nqRo",
  "key34": "mmxv2Z2iFVLu1ipU17cAXQU8Buivm3BskYTAz21beGErZXQYtMW5FaMkD3mpbo3W7kqryLrPDDB9A8pxMMBJ2Er"
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
