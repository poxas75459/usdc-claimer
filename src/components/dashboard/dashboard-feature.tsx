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
    "4nVQTzsuoVYB3ZcshCMb2zEhgr9Dh7caL28AC3VcxVk99JAodKu9Fm52VVuhmQ9q4iDE2wNK32tKWGd5527AVA2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uMTPwvVQSiRvkk2jYjPjBQZcPRmuYDCZcuPybJBjDYxqvcP5DFac6ZKoM3omairjPgTKfivT62H1onk4MsoGhG",
  "key1": "4iXVnaMs9hSAkpES2yS1LWxM6YCkKzf89TVhm1D5UaGAFAawXmqA2xK155SfN6SSXZhLBkG45vk2GeGSnkuhehSy",
  "key2": "3HawHMZjE9RbrvyRkrxAAR9cRiGkQuSRNWCxQLVWGSFSTny8ryKGf9UuAU3uuLZmXbwwFwvKUHN382ZoDFd6z4Zv",
  "key3": "2wChEeQ6NLVHPJMjGUy1efrULPaZUraFZtDBoSQZ3t2QFuNmRcnLUPrFddJQDHG1Sqqs9Y56uCQgmkLo5aeotoU7",
  "key4": "4X9RssdknuFmmfkp6tEW77rhashyYTPJvChqoPL4oJgvcXGxS2Xa5NuAfFjzVfRNtqBURPfPSyGTzsBWyMVomQ62",
  "key5": "TcuCfd2VkCp8tsuVqF5dvQPgdz6C1Sp3YYxMYyHXYod4jkS9gdFTKcdzZu4CK3jjJuDpSM5TLuHKjgSLQ5Pt3Lm",
  "key6": "4i8vqapToQLW3UVAffpidA4XKKGMT8Xt17rHUiuuppMrZ2AQ4aHh7vTHKpzyWTwVitiaDegBwkNe7XyEpd3vUWkK",
  "key7": "2fs4h7vUhJQW3mFtn5Pai4dbbFY7GskkWccswnukdrymw795EmCDPuk95Kb6ecMfaphrbaCgbytskgeLZ9bZipJn",
  "key8": "2p4NBaNv2JXhMs8uodLRK4gJ6QqHX6cJZE3effdQv66VUZX3tmxEyPovgDrT4nJuH6DQoLzRmuro4K6EgTJzRWxf",
  "key9": "2FNLevvHD5WrysjeVLVemPtNUgXp3iEakcjRwXJi3PTtrz7wVr1BmyezdHjmaxXL8BemCRg98bYsdKgfkmzcf4Vb",
  "key10": "4LVWS5Gc6SNei28gwPGYmZuSfBRxo8bmRDYWYd5RfMfB4ibez8N1B6YdkwaqhcDyUDnC1grUCSc2xHw6x7yBcmts",
  "key11": "5sTtvbYLUSprrGP286ZLGSv3s9JgVncCgD33U4aVyp79egZXjiYN3wz49eP9PaDs48cbigLw7BGrrtjCNUnVSzrw",
  "key12": "3fW1DMFNN2aHJ11oMUCRappYtbhu16b7ZJDfGEwfTySQa7w6CxoZsFJJW6dpvdAUGbzATsiy1RAZXZE1HLLdWyxG",
  "key13": "4j4DHuHzRerdSgGYBZRJarhzt9MDsEYFkwypNqp6f7TRJc2MGrreXqWtJV9vvP9iv1qDRNH98RmnD9No2i6Yx9fT",
  "key14": "21DjDyUS1GFeMJa75aUmDroB4Lp6RqbPxPRSbQWcNpyfYwC2db28ZzTjsv5ijzCaQHtBQedi7eKwJqCYy2jNGn9f",
  "key15": "3fqKcDQxmDzziBjcFmJVN4U4znCjSsk1juDK87AzsASBcvXxHjigYtRGfxBferY3wjoWkgYGs6jzn4MHnaoeYosB",
  "key16": "4gfmGAJyjYQwnKKyzdUE4DjNbfU9eGSpGLCZgBQ3qnafWMadUjvqQ5ZwkcAiF4k7BjGeMQFV7nPX2vxzTUufCTuK",
  "key17": "2w5xrP8rNEoJikBRgP36Qv5MmTHYc7jLV9nqmyqc6WZ48SvMq3D5KDy33kPqU4Fn28SE7tW1hw7rgGk67Z4NRjBZ",
  "key18": "5dnGt6R4JUcdMEdfHib38Y8djWfPzdQ2tmHdReReEKVPSu7SMfgFtmYAhXZV7JXLLK6nY62crgWF4kTyjgct1676",
  "key19": "JHFwEPaCjEMTgKGhzApaUiHMnrBLMzJhoPcGrkdQaBWt7YPMYhosJwfRHAinw9m33pue7CmimcwmnKHmYGugv3R",
  "key20": "3yPv2iADsxWpS2nY9NHkxzXFa94Sq83JZStdRdLHFhGMc7ZvXbzqVQSiis27qQ29P6KQMVgrGFBq1sYwRQzA3KZ",
  "key21": "4cxSxxuNC2PDqG1wxADgg14WUkVXReh1RjuFoQwUGkucZt2TnGbTVcjMXmenU448TXcdNnno2DsBwNmpSJBcdEc9",
  "key22": "64oqWZePK74TUEz8u3bpYYmL3JEMgVVRgA9W4F5QDaPrMj4VZELUVp73a6vLr8pwRXJvdvAurkZNsi6FEMM6Ajjy",
  "key23": "2PvMq6gCyDDMsbPMugApafshCpfzuszoyR9J25dKDSCswxZZ3Aeu3RBuKxnyPFxcbfDx9e7SYGcS6a5qxMiFWexn",
  "key24": "3PLFSzf8iiyxw6B3hBDJCsxoWF18Tp8oNDfifCJv6FbWEqN9VP91FkZpLxj7cqGZbp2NDU3DExGS6oq1SdYg8SMU",
  "key25": "2mNfhremx9HXnxRYoGZzBpFB7FeEsKufh7GdMjY5rpD55DWG125sK35ebSsELfeBHH188v3Wdv8mSZKrPzH6WpPB",
  "key26": "2ZJdBaybuEyMm43trSURfmHV54gorBbe6KR1DVXaw3p5GLMr2XrHH7RBd9pfkCQhqXpfTCpUmG3v4Cgwb4DEJ5WR",
  "key27": "eFAteE9bQpdQxBF1htpmP5U3Rsb3qBVMmfPnEPxRTFu29ute7RHcwbb9ZQKPVwQ7taTC2Jjmxziwia3FyXh4NXN",
  "key28": "5jLdrRVJC8UbLaftyKpFJvGStaExEggNw6rYXg4ZcNCmobFVnt7UiASJuuRR2sWjBGt2AcYX3B1Q7NUWBwseUyJy",
  "key29": "31odj5QoGWrVKsp9rSdrTnJE87Tvk8XUFzEv97TCw7dRecGAQH65AEjGQtb3HxCvCVKSpdJwSUAUJ4TMwH9htpYd",
  "key30": "4Hx9LCjMTgZv4WxLRLW2ZxepRJM1AzGo79gTw8WHWQfRHJ6gMv1UBugHDk4C9CLy2GuFRPjJUhzt8zYUiacYVRtF",
  "key31": "2zTep1rZVfj8ALN38tSxuSGanam7BMrhmLKaWk2cvTB6skHqMKoX562kTeqSz6zyjKqUVYpMCtuDDimWZPqZFeZs",
  "key32": "467tpUu9YKrfz1c678rDCKSARfABbh7wgRGFAyvsLsHqGBmLFBFZb61tDt1zx2TLKWZBgXLVr5czeJ8Ywisymkrk",
  "key33": "3EpMuLzSRyWV5YBDR9UnrJcU652geCmuL6uHgbk2f4ySbzrzsPc5gVNCXLStscusvt4ZmiGYE9ZmDZ56sHptHVs7",
  "key34": "3tpL5cezkoQDcCJab4JfM38WwRY25BHogZQ4UpJJG6wTGYBp4ZD4PCDcgEsxunHwuVnHHomsLxbhEJr4ZBDcC4j7",
  "key35": "5GeAUdPkR6XS8yMfEoiwhm5FGD5UZ1CUtLjwDbBCR799RxVGSMerMhxk2YZ8NpaptAwJB9r4WG5ggKzdHpXF39KU",
  "key36": "4FmgvtwdVX8Y3GGZzS9TsJYaojzVmAwx8bQLGvb6cyrgD3QpSAUzpKFU3CNmS68H7YmPu2W5SfceMHTaTDDzhJVC",
  "key37": "2EvpRRuZTHdzGBEhpSXz6tSsaSVtHeNTMkPJ73zSECTvHuMzE96rixt8vQsR5yurpMa3m8EaZbNy7swiP4ue2LWv",
  "key38": "4AyngQdgG1Dojj7XZwZQsF5w9tSQi61bspNme3UZkWATeqNhy2R1mCP2g416GZByNHPXcf6wDmy1chHn2GCJPpJr",
  "key39": "2EUgQztca928qTRS9sksd1e7kavC1i3dCkBWenaoiHEpTdKvFPANfmSLHiPbVNkS7VxRDDZ5FrPc7RtY1Jz6Lsms",
  "key40": "3cbd1KXo2ptLSy6SpwSn4NVTHM1XbF825BM9C6m6PNxXUVgyzseka8T4fNLST418pSan1vwivDyHak82AV4C6GxK",
  "key41": "brGhjiG4nxZakx83a9BSCNJf5KNNp8WVvMBtucdAyuLxHRQPHsXZV4CdqHNSH3Q3nLHHpTWbH1eDK2WeNqPhKpA",
  "key42": "2b4tNunV1o2YZhdpYWQyNiwayabhtKDaDJLpm1XZ4kDRwTtQFhnVroYmq19gXDrb5xJ3fWNgxxCYY6UJvJC4CHUE",
  "key43": "2s3LDGfyXXu3dPLkokT5xzvpYYonngzu7STBiGPbLxwNwytftwgmxapwsTXqYydotJHtqtTpmRbDcf9VPDFbMZnZ",
  "key44": "35p6kCiYxY8YGTTASX8cKucpbLZ7vaXYFgpAkL8Y9Rxarjh7rVeBKEc6ck9ouNenkEJye4G9CLJdWfcouUiS6goF",
  "key45": "5tDppVmGHt7SbFaf1UtV4nUL5EN2EhQ6RXdFeB9oReF4cmXDzuecyDfMNFdDPtD9wSVjEVX7az26asyU7pBh97q7",
  "key46": "4hx46mUZpGrRaSQa8d15htZ5KVWdRfRYsHK6uXCG5hzATmnW53wqpuhdGL2E5xucdAQE6UQn6aG26hVhPx6Jy5QY",
  "key47": "1nS4ggCdhDdGjvbW7E3PB8j5BpCZtzQQYNHBuitBD2CTYpe8M6x15jaxbRoxw15qYUbs4QgD2Bc59vZh3UkbNnp",
  "key48": "4fuNJGmcHQuhvNmj5xvDQ6TcZRhq85HCrkCKN5zE5bakaSRYG9Wt21awwkQaWzPPhbq4YyrhB1Sus2mdkYFKVMvG",
  "key49": "5Hq25mPTDJRRE9G4PTQimzwfexZZSiKjGbRVnDafQTJZQGdaRPmymNsr6XqgAdHfpVMogsEAbkhCFQKcEL8haXwz"
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
