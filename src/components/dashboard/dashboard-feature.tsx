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
    "5866mZRzXtZW8Pfn8aZn2vQyGebUZ77VeeKi8Ub8ApzRqhdcdj6AZgy9CqrkT4TQLgikQDr82UFPbA2YLWWBfWAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WVJSu7V1X1oRXJ6XbKsDa2pre163s5WfnzugRZb5uhvho8TPu7WwNmKpvh8bohXvKjqBCJL8JMzC8azgbHLFxc",
  "key1": "3sHWg5GpcEvQRSX9Z8bJ5Z4oU5MdgJ1iT1SAjgdZC5fjHKuCPKUkbmrJv8pgACTiTJtN4VABQGkyMrJANUpmDz4F",
  "key2": "4jdjiyD6vmCP6jz9okpuFrJTZtrK1VdocMHkPqXDh9NsbANJU2C8cfhPjHHfgk9NWHRkHew9vkqQdtWU8x2ZwHLG",
  "key3": "569icXh7KtL5zgY7cTEoK33u44xZUrJKPMRp2KkK3evA4wsCqhBLx7McJTwmUPKjXbsKBATrxQB4WcsMPHZu2QHU",
  "key4": "4YhMxqULgLZdPpZBdK5FnSSfeWeVuvU5PfbvGLyDxoe7wxAmxH3E3oKC1zQdRJsHdY8JSzZVWvmyMTg5yXLkrswu",
  "key5": "2mzoRyMi248NxkTwuHGnwei9db7AexpDWrp7tVXti9sTucN9mmHzyodqXBDCiQS7WK62HbJ1VrfSXHfGjmz1TZMs",
  "key6": "3dTrzX2wyV5cMGR3JM4ifdmi9bEMh6Tru6SSSAFEm8cAxsQEuALUjrG6HbgN2inWFdZVW8pJjgDPicTmoXdZK8TZ",
  "key7": "49moZPNQt91szmTfCfQv8sRHXHpjACkg6E4hHmh3BfoET3SHFpgja1rZLo8eGh3jReiwKpxk6KRNgR8QoGCGZ8KP",
  "key8": "4MZgsXLsLA4CiMyVVpZQbpehoSpa1jcbaXf4sUkPxTwBui6vQPTBZZ7BEz3sygJtucevv7bLWqgsZoUrb6L5Zd4C",
  "key9": "5vQ8R5ioUjHRgxhR1ssELnTs8fpM7ZmXN3XTsABJcf6a7qfn2EaqJBUCuLr2gZHnL4KtvbFYNJzVYrKmH3LPG1F7",
  "key10": "4UW7VgxeBbeirL6ykUGtYrKNtuUV9QHf6D5wnzyFUWvN1DRGX4mQ21BbMotyZhEzYiVoaELeAQyFnGdP2kYeGJwY",
  "key11": "9RWFRfXkdwBMLMyaZ8UeQZ2V8PXk3CA485p7Qm2XquEtmkP7ovzqy3Coh3uhvzrTEtu4NcJ55ypcM5jQBJdwQNn",
  "key12": "62cfLTdKH7PYGwdcgep2RxPGk6XYvx1H5Gzeivdx1U9AnHFN133MoVt6Ha3SVUA5mTEyo27xBrZmZNMyx2FUMuGN",
  "key13": "5L2oHtKHG5EN6TNgM1rCGz2kvjRJFcthKqKMRbUah2WhUCmHDYzbm6Uqs2Vu5bT4Bzt2bhrDS6UWAon5RWG2SSgN",
  "key14": "5HL1Yus8ComPjHTCwnehXm8Eh4LXgKRu4Gqo8KLFiyanQWywShWgtEDNFm2HazEFkQ1roEc5JQqzsHTovYbWsVTr",
  "key15": "HMXAPcGLuTG2y16RHZF1pmpWDzNbZ1NLa3k497Lxpz9YsddCQqSP1W2eu9rB58GHBdbr3ktUPP9Un6K6wvzAxLu",
  "key16": "2NekBrkJwuvPT6NntL6yr7Nm5p7QKqr4aDJ8vupnhm6ULbwMbhonwnFYnTiVDDnHpsLTsqgW51KvagUVjdmutHGn",
  "key17": "3MXboVW6JLJDPASvGHNX19Z3sYRekwB7mLBbM7UY8kckR2xgXJY8y31nfXv1jKZpg5vLvBCTFdpfUkvEQr5Cpxzn",
  "key18": "3yUP4Ccwpx1eaKzLzbBCANkSGvUKBjLMxa93rat25n3g5D7x5Gto3xmE2HubmEzYBJQrVKnpapG2hbyWi7TQ3P9x",
  "key19": "2yuhEXceCGHN5Jsj73k2is4sHFe6UoeepgtJH98u6S4tSyTgGsx5VfCfNFUAj42LpLPJpRqTsj1EVaB8Fcu2udRz",
  "key20": "4bfYUZVmbpaRbVxKiioLfzCjzgVs1AYKxi5TfdXQ4J6pYwYiLx6sxD2nVHRy1NscJkZroKLMJDuyKMx1KLwopWsq",
  "key21": "2J9SSpezqXmrCBrtQb9mDSnk2zP4viVBBW2BoiHpV5RZ2xyYU3VXHfd5H4HzV778NxXAaFvq9CnnTUvVQbxsRfer",
  "key22": "5LZRUUdWv5Qzf1pm1wxLkBVRn8stw2hYQCY83dU6TD4tsL7gCAAuyvPac6z9XdqzVPnhyxPbeE4gdESYDZj1VMuS",
  "key23": "4cC9L3gvHFTP481KTJrTTUagLFmvNt9sjpvdRZznsLKE29mh94heprGJ2kc8BqcA6sFGJwRAJ5Ju4QgtqG71kwQ",
  "key24": "5fhYPQnkUyvdCKKKvsoFErjcDF8BHitJSTdGoswGa4GqStCswQUT3BBg1yt26uJ2t95janPNs1vzAYE8uRPf8eyL",
  "key25": "ehiKg9QSkMwbxVQuz1sQbMYCLK45M7phx1BaBqRDL61nkaHTfGyrBHQfwgQbBCpVAFEpyTW1prxeT9PA7WxjTqa",
  "key26": "5FSchAmCsd7ty11Bium14CU5LdLs8GtAdeD6EZ5hiUsSKwog3EdtdHavRrwnKNJ24ggKk9iNQvLJLVvr5QkPZeBS",
  "key27": "4RssF71DRDwvNKP69bq8LWCjDscgi6mNviJHgnj44kLxLLSjk89G8SBfBHDRfimEvgmr5LRRVH9xETSCsRQaH1nn",
  "key28": "5nq4jX3vuiP8W3rKAAq1AvDh34Zr9dgTWh9wJVgqeYXoh61LPqrcTt9xvjSzy9kU2LSgX139qWGiZ4XGGYH3cggY",
  "key29": "3yXZzcExixSgGgivqQXvnpV9ZZcfC6S39LevudXQj1LpT424Qs8vGEh274NatHDYBdsFnybJCprHHfAnsJ4ymmdf",
  "key30": "4wvfkJjkAfqMmsRJanPdUgMiQDFKJ1QXevZboVABAJfWyryn5gjoz4Q9or5zUjYHmZTz2Y1MWaE9BLs2mFNB9jjo",
  "key31": "yD8Jy4pPeMHzGm9aavY4ELsVdSuKg6NrnwHG3385HFAV61Sshz5BWLx8wxztSoFjYzdMLkZeEKoLQBd8F46PaLA",
  "key32": "3g9r8DAobn3Earh7svtQAmVDBoe9SvAVQkjrD9qiMp8neBPd5UPWiGWsjrr1L2ixaWhVnURHFCgBJki9y8pDAQBh",
  "key33": "5dW4Lc3b3oSuhpN8JcKkV54naU4Fqe59WCm2ymmV8B8VLvxGEsosozYAzKoCXGyYwJLKpq7DWsADJtfJg4suxEYW",
  "key34": "5viREpkvgYUxVHrwRF7udPniFnow2XeRDWR3vGNWUknqkJ1cnvw44SbvUdtrG6pZsSV5v4fDFEHQ8GBEfRdXpNmM",
  "key35": "5Uk3JtRd4ePeaM5M8vPTedckCWoWVtKvqnf4u7SP32MEcF8NMf1vqBcqSbJBbWDcxC143eZ1XWT6Bxm8CZHLnAeq"
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
