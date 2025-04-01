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
    "oBQUsNroLZDGNYqh48EJxEXdUz6Ajo6Sh5aJgsCreGKaNzFthtnx3VMn7CqsaDoqmpraFjayFEuW57cM17r7EY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bePbykCgybAS4vTFY7tXyGb6MD9VTkk1pyJf9qAxJ3pkpJXghkHsGJ3hfdVNPfW3KiTwA1voTUXanjgFxt1me1f",
  "key1": "4zYm1EZTTbg4CQf3ceakCz8mJ62uPQ4c4aAqebZ7xNBy2WfYjXnWi8g2549a9j9ZtWdsAdzPEuy6bQfE9P1bQfnE",
  "key2": "5gd5KwhirFqhuTGtqAM51csDteZbJbxWAhiGoxw594Stxw84XrnDDn6Scwxf8WLKbrv18hizPoFAFVhhx6fuxu8Y",
  "key3": "4QA3MUcJwa7ZfuLrfMe8WkoAjC83mor6V2GbEYZaiYt61SNZyxK4GAvT1Y7CSEeKPEV6ZYy7HW9x5KQPCfBjAxb5",
  "key4": "51CxLqhxMJdnx94GjfPUcxjt9GkuJp81gRwqbaqb3x1A4433ypof6iA4XHzKJKrQfNvt7FHkBTJ7WeW6J4VL6VyV",
  "key5": "3ikQEweJmccHrN9WJg4GTHfTgqLRMf3AAeyL27tABBnaRH55289gN4kTdsrY9Bo99MfxsejdXM8ahET2njWaj78j",
  "key6": "47vozikRHRE9Rwja8wVJFCBymdpAdd7jFiwdY7vCDWS4zRVBBsSGVBNkuVtTx8izugMfyUkpUhoiLHHQiWG7BMK",
  "key7": "3hkaEm1d8tvkvz8N17guKGZttZjE9v1s5FK3bjqo3z7G8MhEGnA1KQzs5oaZzwh1wHeSSU3MaBCq47a9Kv9BBNeZ",
  "key8": "YneNcbCktsrMa5bxtkAB28d5TfzLcBdh8WkSiq4sxb2X81vxGa57uKY2RWG2YYm4DZqgQPDogjiNqyqTN8kN7Rn",
  "key9": "2SAjxwERHnNNhD2BxCAM98KKFX25KFPoWr5yE77hb8MPz1JBbQKYVauTnYu38Dtd15PntjjncHdLHKoNo7T5uEtj",
  "key10": "2ddoR3qEY6EpCtLWV6soJBmD6oPsGGfu16XN4hfvmHy447o3M3GBoKUjVWW83PJVdx1Nio3TkhBtt8r7W2g3JB4v",
  "key11": "35VLak83DW6MZv5r53hAMtdXiFBBrBJc6rQadpf7eR1UA3bePNzFbMFDhHgnVRJT5cZ2r9LyLiY6m4WzLoUE7HJj",
  "key12": "oSiUKht252J4x7CJty814NwEUCjAKPqz6fF5zfJ7exShuGzTNCFnZURAo1YXarUJBJbJa5oJiq1upZgSjJ3ZCyg",
  "key13": "4HKT7Xqyt4qG2WvWgG3oJYEJBHcjaSkLxh7SSyp4Jd9k178CtCt6YyQm8LkS3noQr28yhtANSSLk85AtfhJnjwg8",
  "key14": "Ez7oqyGqrnSsJF13HnB6L1c6Mo1hhEJqvP39AFiVSVQesNUhM4Yu63rNPfHWi85rcgGiSHMHUbCAHZyhud3AqZ6",
  "key15": "4cnXkr1Xyc1GoY6XYzikJthDevLsRh8AxwTDhVUupDcUgK6UXWXXuf3g5Yn4qEeP2WSuEmnxmsvB7VrDv7E83Bni",
  "key16": "KC2VGEymJiY4qghJnj5P14AGLSZ18A2QeNoXv5XVDEn9r73cx9GB9y3uzFdE8jxC8r2DdF5U2QXBNjTfXsMXkjo",
  "key17": "2yr21y2DXTa54RGQz8XGp3fcA5zBsz1MfL3ae5JqWVEbXQkc2iBL1chAC1EbrHwuxxMZDWY2U2MUomWRf2fbUJ99",
  "key18": "o1bksG3dvJ6y66PSJTBY2JcCu2f25YZ3EA4n1vdiCR86QK86E5b4784SH5ipjC8vATP5zTkYafHC7Lmae3EMgQq",
  "key19": "2obLNAPcKZuR2XcHjfVKC35XVQi34owCYQWW6SixzVbuQaHDuD13gAMjTM4HRLZgSLSrk3knsjwrprk7T4GMHzDG",
  "key20": "4tWFi33rpxnJS9zNEUJqkcVFK5JYzgbNwGUj2KZJi6ijxv6TkuKLou6LHpP3zghHoKPAMFPPjPx4ucJZeSBwh7LG",
  "key21": "3CK2mqMNLZYd4KyYRLJpxkitYf9CVwn6Mk9FDf5oTm1Wmk35Mk85YkidxYG5RcKgsMiBVqxaKB7iiTyqj1RrNT1r",
  "key22": "2idFnJpL8ZDuMtHqVZATAQSg5s29SF1Vz4eWw5QSshQRyvm88VFuWmKAUBPMLPriQ2QqsLh128Cxbv1PxifcPgFa",
  "key23": "2KV1JPWpXJRHqVnPYA4n8g1TyNKusH65gfZSs8JEg2FuHWN8skdQvGc8stScXwanyBYonPUHGtSpv9Ybvt1kVC93",
  "key24": "2mXuz4wTRdc2oB3iz5K6vKbEU34fh1Wt4aqjx85nYot6yw5dpgB5abajpxnoWirLZoL9Vjp9LULJkPLZKk937TZx",
  "key25": "45gjGwGg4eBxqbmgYm7NEE8rLryb4DfxVxMbhDA84Bwd7c6TYZY9728s25EF5UhHetw16wkpQt4f5QboGVYq2qR6",
  "key26": "36dynJByhTubp3dEn37g5btNXYJjogy4bEsm4WJ9YVsNUWNTcgXYdncZFqnm4m9aLgGzy3hFPtJqcW2vPSGw4KBV",
  "key27": "5VuMJ5KLjAbhYM3JdJo3MsHWrhxE1KivfNf716XfC4qtAbkqcRQ9vVfwDFPrwzJX1qP7Hs3t6pcxo35HXGSrL7RS",
  "key28": "381PGST5yAZZFyegie5dTGyQSu9WTwSoJ5hsmNcgCkE4oY9DCp1A6qg3vWQPkNhrVe5fWMEepLP2zHFvYk8Uvwqh",
  "key29": "2ditACVpBWiTfjZxNVVPpVrjrTqCZYde22V26qRpPKiaLM2E9VXeLts5nc25yksJyw1EKyn6mypNk677ufZDirXS",
  "key30": "3Fj4XFsc1EGryLTExH6ufrt4Ba4P8eYPgsVUDKkpPn5gcTcYtruN8WMp65GkHD9zDVQLhux2PMUDenjFKS3uygWM",
  "key31": "3uvTgZRAR1FihHDg9gFMvtDW6Exm3QhFKSfea7pSEsYHNDbxD1m6vHpDPYQU6J3uxfVdAJJe3SCDR7ecoATkx9kq",
  "key32": "5dxfusxwxd5f1z7VfaCMimEK8vktWBrD11e5nGB3o6yRbxx7veNfYkRRRXCtyGwrr76m3Hy7bmfbjiuSJ6rLn3he",
  "key33": "5Jduwj4Rt5SkavkXpmpbH5WrazeTA2JkN7eRzVX3Aj7ZFaLk5PcXCE1xWhrNnkyPAgnERvefovgfFGnykG6rN3w9",
  "key34": "4hbTwJ6DxJZuxcrfSy3Aunim3spbekAhUWxPeqgn7ivqHBAcZ7fMRsjqe6ZjxgGmpsV18duEYkNWkiAHhu4pJCZj",
  "key35": "5eJMZgaL7K9Uni2NzNdAgyDLXVmyMwDsmd3u3LJRfwEsPjTNE82zDcuUwNm1tBLPn6dCztMpSDSKPU3GkyC6cQnR",
  "key36": "B59FYSXK3j1ATBujYyvWMqG46YTyZkNBq8FontwY1vyk1Rs9WfmvPn4BnPDpVQ9hnMsxSZzokHD3xeixZE7q2gP",
  "key37": "5SMJqUA9akhf7jWQiWRpchy3HneydUBYk3vWfsH7N8tj3w1VVroR8mfLdbjP9A8N377ycdj5FbZQxqCPD6iVbKee",
  "key38": "3brdVwjkq7RegGFwtzb8bCHCPsHLqrFH3aYqxrV9pSLnaH3tdvV4kYAbD9xLeFF5sKawV8a1FYdFK16ppjkTARU6"
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
