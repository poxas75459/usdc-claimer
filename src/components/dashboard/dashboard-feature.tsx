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
    "5dmmF5ZbTQwQf7EXkV8vZyT5Lu4UJesAmaXnpV7Y97Guty5T1fvQwA31Ciy9QrZWiEdbEPj7yMsuH1zUKyZQs49g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MrPznMgAh4VZK9c4L2xCwQ3xGGauDwhiYjnuHSZXNGMmac2fQgWL8d4ueCqF2spFiJxHRXEL1erTLWWiXrArMHk",
  "key1": "2Ui1NxDJ4ZPnUp2V1KWcxuHZaj1gV6GyvS6cKRNr1xUKBDJbXGg2pVk47yg9wFHPxDhoR2LaEamp65gaF5fcwFky",
  "key2": "3ApNESJYNAaZKDFpwtA13P24KVemWN88EiyANssP5rMKMyEJ5hamRYrn6z4NgRNjCf38QHiWPW3H15cCzUFqSzGq",
  "key3": "4efYQ6xpGxkPjjDNKKdFUNRkqpgqDyfeCeVwm99PsGBg54CHTCDwRpXPmWYsVhuTpGyTQjMfXnwK35EbDK9TtzMR",
  "key4": "YxPwWVdPBKcgDnajkmmBCoQkAgvoHxeC9ccgzmkuJvWAFkRwHU28oq5QyxKs74jUFVEkPwVEz4vUyAqKaGZicm2",
  "key5": "5MabdyHbgSFCTdSJzvxfQyrLiCbUHemi4E6NXeW2rwa5Po4F1PvgD1KDEnW2WGkD42Lbh4WNBBzKSqQYxqAg4Y7Y",
  "key6": "3ARxe6np9fPu4NkD9yiRyJuvc8fLknwDv2MXbHjutMKZ1NcvdXWRpmiYFpzeuxRseJn6D8GPwHP2a7Q4MZdZdtHv",
  "key7": "4BZZkY6QfXzy6ernBZYoY47hBGWQn8HS8fX2YJBrFwbck7zVzJjaBN8ExjEHFFq6qaCBhaAFiyu7i8uJX5YTMP9g",
  "key8": "5tSGUKRCcv9DPh75trTwKv5iWnvPQ7QwsHxajjm6ZVdaDnGyPBuq7CDqJbbpXV98vzNVX1jMEuNnRbd7rrg3zi24",
  "key9": "2LV9C7vR5AGacs8HvLDJU6QLLtj1aRmUwGzbVcHanWaauR1H1zWooDoGvMwHxgVKz8T1T648h9kZtr4E1tNs9v4t",
  "key10": "4uvot3g1bKvb2LmqgaeZj5N1n3WyvKmdS811wm4uj5XfYz99LbTyupVmqrNXbb2tFTHQwVPfreWFb9yQe1k37MJo",
  "key11": "UufBB5kSYrEgAcMYCienFPNs48i3tTVimyCT3V8tBvzgFjqfxUoSFeFHENWv1fArfWxECezvwD2yPZAYHBigQxR",
  "key12": "5FudLGeUJyiGy4tykGCpUpk6rbrNDQXFZyERnTKzKf38auEcnkdPrAXWzFcThi34aKNz1cJ1961uDYD4Y3LkapZe",
  "key13": "5rofE8nqGa2uTev5oSUKSY2Drq9XtTYD1Y2B2StEw5RizuHu4vk5FYYPFv3kYD9ohe165Nb3NEH7By4xPGzhkYyH",
  "key14": "419icDe7JyvFpofHSiwcvK6pxQD7tmw4DoxCPHh8dbYBTQWmjQGvzHwB5FGjaJC6ZhrrFy82e9H1oJUCHiE9c3ZP",
  "key15": "JptFgJES79jtVSjYB48VNvTUiVSEjbBX3hUM5DcgsX1vH4w4BHgd8jTE9Lh5oU72vwrtHuc8z9Wtjo2KBgLFSWM",
  "key16": "516ZjqUonYPuhUXWf9s9HXNmSfUnPw9bxFMvk5mBFKya72m1D1nyP5xxJRNoMC2ZdSwJUgNZcePrMfW4t3r5iYKQ",
  "key17": "5oxf7oxBS3JbE38e7M5xAJXZjwjPZ16cDBBfnxnAR6Jndj4Zv2VFGhmZp9QZvM7LRUKQrXHwmfSqvoEwnK6AJSaH",
  "key18": "2bmYPJiiiWKACwBBvv9xLppnPbTkXeCkp3uLg4QHGRtG1jgvzJ54VvsqXodEHyBKx11TzppJc6TNPK28CPysNN9o",
  "key19": "aEDcAQ7246ayEZirKRwwUCTuFsVLgtCrzyPZVZmpfSYqNzKmhYUtqtwscdiZhzPXK6VSLjwUtisyST3Ju2ETtxz",
  "key20": "4ziF93iCd4ei5DZmiYPgj2naNdd1LVi9Fa4bNmmU2rr6rKR8dwRhdBCCo5Xwqw1muiEzovS2bFxnb4d7yVTLbu2j",
  "key21": "dfm9EJcYSeUVSujeuUbP8dmRK6MnZA3s2BkTSTxZWghVKbBsDAmfwACkxc5EaPEcjoXq8YS9Rkxrmox12u2kDW1",
  "key22": "5SFFGGfy6y8ftYGi59Rg3aHeguFVNLz4wqRDkgd2oWQxiYgWJQLneScKxj18ZmaAkcczgUDgnzVjVUBP2nnczgjZ",
  "key23": "3UhETzskJ2SnvkyYqMJRb68QF72MiJm1zYdABCZCH84ZK2VrVkji2sSrH4CydHkwYU4XsQQ1LyChWAo8QWr1XxjZ",
  "key24": "98jztgeodQ6BvA6WEzMnrmo2jvKuHi13NjnoY3qkotqmcheyitvgaLPGZtHuo744maM7JEKqS1rA31bfE1rDNgx",
  "key25": "51eSemxxdsZu4ZrqWJFqfeYjjNReLficR9eM7xRssGnaonmFFxHB2XBiJJkDgAvnimVRLDCB5TK1e1aGzrtHvcBV",
  "key26": "4gQsYymiQcUPnMy9gSTu1ojds7NFnjCtmgB97syVEfzhtVxWHc6kSoHcQAxoCQu68pTcmgweai9kQPBFoFovZfJp",
  "key27": "4MiGC3LGZR36hrQWcZsAnDa6srqDjNoCJwVk9RsM173jHDxmaBaZsozJSp32sGfh2uaVMBzyxovKNEZ6vxrzK246",
  "key28": "24bEWkmELgFJNz2zZEHFaJDs96dSyewKugH5LeAHVowaGNiMBEZuuTL9xV8soYCcBqCRNEsGkqg7cpWnyx7yKMr2",
  "key29": "3US2tmUYSZ7f4vNNuAhZEUbxR5UhcAifeisxwYhRmBcWpnepzNdkJD8ZoXUe7sKeP6nmYGbxcabFhk564jrAPS4X",
  "key30": "5kYC5fZCtZPDo1XUqqvYrhnkKHpvoKzK9fuNv2aGjsGPw4GRP7SnxKuheGTxxBa1YjRnjSTmXKPNbXxNsrXrkGT2",
  "key31": "3mDEtpeLQrRNsFW9QixphPLDL79Ec2qYbJxx4ZP44DJDdxJbP31ejawPRLjKu8HzVTXV4ZsxPAG2f5xWeGaYvbn3",
  "key32": "5k8wCMAFkDtqZQbqpovPvufWNTyT1Ueup66J65fGF55wbS5eFW9QF8TdwrciM6aSdcQS37VqCm4Hv8mSsYbUC8pC",
  "key33": "QberifKcPAtnFKVv51J7iuVeEdW49UkQMFMrhV6uYfafpQubyMJ8AmkhFdwpDXmEy2exCg5CwUvEtaiYHmu27Ju",
  "key34": "siJeGPjeEDpTyVCXwcvHGSLUUANmhNwyzFNRcthYkcj6utMGwcu83h4cP7Msaem3NDeQ46RDCUiNDXffKQxBnHF",
  "key35": "2FyLZtxC2rPCFmAuq2apbdx1BocDx7XCtJ9eKhdHgaVM3RyH2J4rVADQz6i4bWAMCcybfn1H3ytWTHUpK448vhS2",
  "key36": "3jRLTUUe5B14byd7urmhxb4aaWVeTw8RwBqRS7LFmMhYcpaVYqFcjoTeAwNswjcVJXb2xpxErSmDwuL9JZtqLmcn",
  "key37": "2QaEqxajaGZ8U5X5rvBR34UXSd1MYsndDXREyz6oj29p5f5sY5B65giiZaf2vWz8FKkUEmqmhazFr7C5qRQKmP2x",
  "key38": "2PHciBoeiR2WzfyctSCn5467Z9SY2Be5Dtp1B6QQ8KHxe3UWRcpDeetyr6xQSvzwTgauFsjGS2LQwUKvPJWpnavH"
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
