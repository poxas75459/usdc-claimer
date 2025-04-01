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
    "zPiPKTXYYYgmuYMMHX9yHw7x98PqY6Jhz6spsk2QVWamYScycoy9oLJesRh3ryMNU7P96NRG4akjozUkuPdEbBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioXALkDYN7KQQ6HvKTDjXAVD3QvABb4QrxDRUUnRPTNBQKtQtg6Fs5s2BumZ1yPKHGXy2XueRNQJNzwc8NtygDJ",
  "key1": "2M1DwNgjdqvcJ3WF8sciiT2JmxmAFfKVJTcaswqA6jZ2ijGzWqEBkPZ3vCyxFLS4aj9FH2axnFhGd4EvBQBTjgYn",
  "key2": "3pjamepndj6ECBRpEVLdN8zAmH8Pc1iKX8MgdU2ENpEgWaRvQ9FeNA26VqBuY4pKr8v62n2Q2DYXdMrPV51Uvk5A",
  "key3": "2RZ4bgNpj3bfkpd1mgoqmyqhkzRhxCEnmompYDfe4AKureR293gcrN8WKDSBdUtJ8iaqwKxHoeXygCA5or4vKrLE",
  "key4": "2toEV5PHx7yhM9VPiRV4apYWH9Aw4EvS2kdonsEBX36EShRjuSMokAti7s7SShFv7L7eg7vLQKQhfnxY64anSVsH",
  "key5": "4JYVdepGopTRSHhJwzFUu5KbPYihsbyP38dydM2SaWKuDHvD39KKCEkhDamKgdM7sCn5Fi75ci3Bdjn5JbAYDK5w",
  "key6": "3YPiLtCBrTduxcdtiv8bAyfEDr8W1V1BsWsbeMEPLtqEnJ9g6gyPWXzuSL8DHYLbYx6tJnKe7MiJX6yMtin85XiR",
  "key7": "2uwZPLB3tsdX29JR12z5M7aCdUzzp54rqykqLuzkBLQSwxxufTCZcVdJdruhp6SmNZ6UpvnkeHzQMrqKzYxevFGL",
  "key8": "4b7HwCe4NEc3PJFLq4hymBB4hAddFdLkua2Y1WuMwrCMdbQPYpjnV68CkBVaKRVGM4KAkW2u4c8XGhYJBrf3iARd",
  "key9": "4dQ5jCwBum3d9R3gjaShAFrcQdz7vLxzDhvvVG2xeQwYxQX1VumSahXcjcBzL1jNbmLZVuRwE1g3hm2spMLZMqNs",
  "key10": "59k3yxQG49V4a8LNnp1NW8QDwJUteoNwM5q1ZZn8Ved2CvrksTkT594yeWCKef39BtpHRMVeXWvHhgQ1big3351A",
  "key11": "4pW49d3omcZ4oUkss8mU67vydvcmGADVsTXaVx1jM9TS3hgtqGW9stuv7sxHmBv3KsWN2mwDste2MwK32tg6eCBv",
  "key12": "4B25WoLa52MmwhZBKgWDfKK7Wi6x1FWbt1Kaqqrr4Zkn14NN3dVF2LzJhPNSxV95dCWX9Dm7rm5fj154CAPRTU35",
  "key13": "5FihKAsECD6DrfLXZvnhZemZM8EYn3Bc4bGp7H2vohqjQYWSH1ckUYYg7tkBvK1rtSgr2dBS6yBuXjWuPSCApBb8",
  "key14": "5DYRoVptpPzjZUEbz6aYfQnqtN3yeMkXRsu4vbicchvEH3o3sQ9SBnZXnENXT13N8c1Ah7PB7E29SJypex6F4PBZ",
  "key15": "PuzaCE1xACDakC1UytjtebEpcVRMHK8kgXSh5mgfZTKqMhs3HfLfDrt3fWxz6G24AUnQYstQykNZ1YEcKa8SNuP",
  "key16": "4or8RQXHzFnSpzEV61vLhFiL5z1ZaRvqkFE87oZK3twFia6NtYMtUWVcsGqSkestgGjVW9xUzWti44noV39LUHYH",
  "key17": "NCXSWKEJigC7BS4NeVLPSP5VsyN3wf2c8KkjEmYPczWSa82ayRJriFXS7gSe9AWsgS9WiEq7ZUQ1QHPuzQhguRF",
  "key18": "3A9rp5181qqRt4nKfeksKVUDoCbL6fDsp2FirGTvyMTd9STnmKHAvs2FMinGS1iem3vC8vyTPSFmXWbH5P4GwbVe",
  "key19": "5akMUB3D7uiwnGxxMvofuff1aK17Rbm61Nv2zW34yMDb8xoGdpJZgAqCRoovw5jgHGBvDxNpCYoSqMWXXQ6gMbsm",
  "key20": "3f85EJcB6ZxhApmSh7SHz3hgJmLYKujmADWrPfyu4Cts89CG9y7VhnwMwq67LBTUNZkXP8dNxRAieagdpwcLFhYY",
  "key21": "9qifBZf3tFqi7ZT5q59rtUSEr1Yf3kLqMb4DRh2kAHieKUDYbZpd1FVsJzhB6KBcSjPJrSFU5Sac3pgZqZKFc8F",
  "key22": "4Smab2HQJZqpa2PVKangzdAKBSyYg1c5NntWeCSAKpuCSVNELEcXE3ytqQv2q8cvc6VkXtrvZYehoYM5EdH853ue",
  "key23": "5xTQ4Aa2PdeLGHbJaZsdWNsDciQA1BhAm7uYyym6tTxDCH5WUSbvvnPowUwhddJHjZUjA5i9YVhkFCj7rUb9JFGM",
  "key24": "Cm7e9SpV5vxCn2XRDASH7S46kNJzz97xcS64t1JDTNbtU1VL6vGa5dxV8bjK2TX8ZRJQBRVM5ieY3yq278Ewije",
  "key25": "4ewah8ad2dx9Rrb2KQeRG6MRbwK8gYF4WKmchK6VhBMpj5M5uGDhZEDRJGvNNhBjHXYsX5PrUayQvx2haMQ8ffEt",
  "key26": "3nsAJNgT5WCALg11LDBMBDpdxQNsSBmEMdmLwvyZ2iEp9LwYrTyXbfzbZdiKd3G76vFEBPsx8noAdC1yuKAbnFyc",
  "key27": "47XK7m1viAV6rLkXcwAVd2N5pHMAUiDoq9LZes1UbJrDx8SzHV86BFejFDMancUHRyNfB6CN2kH6u18DDZaqwGDX",
  "key28": "48EkMS6sbv334QKER813HMdGf9sCyn176wmES5RPRWrt7CtLVx6nuvC4q2kLEbZiRq6PQKN34LMGs7sNqckrdUVK",
  "key29": "ooFWJ1CGkFee7vEiUVwGBEW7gEEFgYAokT3QPxxmGehLKagbjAZRQbscGb5gZoLT3ZeZKxMg1coePaYmeTpvWkZ",
  "key30": "5S26k58eVCvZFvMeQ9m1nVUPGq1o4ha5ywbQGc7pgXgM3pbXU4kEGDFWQ69kAheaBXWkp22zmJy7j6Je5VNX5EkS",
  "key31": "w9RBJGGZ7UU5Cd31HgqCV48s7jpF2qCF5BUwgYbBX1GmTQkrtAppN1fG7XPbugEZRbJibRZtyWmnpxP58zLGQ5N",
  "key32": "21EnUnV5Ai39Jvy2zmJKijZoq6imQqGcfz8kyMqmU8s7Sy44Pf7LpUE531FEc7VTcDW6oWNo99nZojo74tNFi9R8",
  "key33": "5sqirvs514UAW9dR371tSt9WDvaFiqgHgwjkkgi5XFkppwWBR5wZu6bPrg34oWPDNox6fRyKkS9DokXBMkFfqdTT",
  "key34": "3yMWdQHcv46B44khiSLJGyZFfRqJ4MbHjCu7C84tUqnm7kXeYz9KR9nZjsfMHNsiGmmYovbTnhtUqwNobKBUET4h",
  "key35": "4ujxiJdwy1eyqJLA1WX8oNLswD3JK4SWehuCxcMuK5Ed9W4cmxv86mTnqvySiNqFgYxtYqF4uguBkWtr7JK2es74",
  "key36": "21vbadEEU2LXhv67YhFLPF2WgLoqqdoQf3FSbViXvwGvHSnG1vqoehHtXxmxj8nr337XxDGm7esLWzzuoCmgr3kp",
  "key37": "4S4HWxBMUTYoQsDi1j7UyUzstmTaRDPu5Ln3jxP5d9QP9Nw7CSL48x7Q1ZMDk9JhrhHpGxAsyoEMHmUk6ZXSgVQt",
  "key38": "3u6Y2EBsRAUsUkduJ24e8eUZ9SU4MwwVzcDCYiCf693wqdev169HzFnWHCGhT8oC22qCHtqfHEcu1bdioKX5AYYL",
  "key39": "3exQzTKhKzck9xiLZ5ycJ5UCSaTTrjDvxJTjkSnyGSPZG4aEYv5dfQPjUD6cXofdRNB8923RSUteSwC194LEYwy8",
  "key40": "64kM53esKUGFeuqi4jyBhPtLanu9o2jhyA2vTMq5VgHnbFfG2Y2zuNcnvEQiC7NUwr5LNy2QBYUuy6vFHcEc1345",
  "key41": "3zfsVFy2r9ps1aGWEsE1a7xC938ukuiDeFH5GbktzEohxknHVgrNqgpmoRTrFwjzcPWLfTE3yQ1sCqF9d8ta5EJA",
  "key42": "5TSN3ZJmKfy16G2pgXHVvqo1KkasNLZtNnmMwA793U4L1c1XcMJn6WmYopnjbVwvyGr5eRkg6UqbFPamChb689rz",
  "key43": "3ckE72D6Ui9Rjt2KWXeyXFzCSkVvcTU456iYCVNPfiMdSW9bhjQQEaAPxdc4hUDG6EyCEaSXyb7vgXe6dE5bU9kS",
  "key44": "4ALWwEDRNvg3kv9hmygRZayDDsPcAPMnao9qaCyQacQUhWsfesbmMfjYqsT2BJVfLHEe7RyoSWvNup3CYVdQevWJ"
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
