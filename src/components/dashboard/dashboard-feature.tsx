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
    "i1wASTbUXfW5RF6QpqmH4RsAyYsCsy6JMSPVfmoy8Wvo9nwdM8ddC5Da9ThokRh1GJosFktvRc4ZmVQ8GNPPX9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VYjS5oz9KmFS6FkCbvo5K9VFYL8N1BDzwgeKGd8yfHrPQb4oFQTzcTAsZUpZGF3EEpXBNR5UY1e2EKU1HgPjtD",
  "key1": "4f4p3LRnLxa2ocn9SYYrcs2pu2QBqWMcQre5nbjH4Ws5RYLUutfde7oD2f9UNAMrduTZcL72sjt7SbbTZQAjDwxe",
  "key2": "42FiacAp45UU1NWAfVH4UXrBH6TVkGtruFsoUrYz8JhbWDiegk9hFopGhBvunueiFtrwW7i4oCRadd1GgoFktJB6",
  "key3": "55NibyksS2TdSZdBLTr717SQNoKPsdzzMhmYasJ31cQaZBz82GahL1pUpw651fdHaCTAsUgfaF9cbxL9bJ9xC48y",
  "key4": "3voRmzkLBUuoBS4U1REdVVjhas9g5Zt6quN6zDGT4RseEQLEqx7TAn2rdGR2EAgWgebddajfU1m6vbuizGW9Uc3E",
  "key5": "3M3oqUJxdbuBv3kLgmyoG7AbbuHtMqCyd6kmkSShDx4v5sxjNMAMUETgMKnH3ZATXg7da47ah6BeLW57wh4JJxdZ",
  "key6": "3DgQc8eNAt9gtQygHbQ1YnqRWZKdeoYa6KtQ3oJEzi52uH5nH5XA4ygpGfGd6fG4BqqPchbH94KLcQKnr5ycNZ4k",
  "key7": "4SvUY2H2FAsFgdm5tsnaEnm3LAjCsqg165M9kcmdErmg9WcpoH6ir21zWg7HAbp3siDgARvdoawzpnz9hxZWHP5P",
  "key8": "3KcaG1C3c2yA2uu9yHKr76T8j84m9J7xx3t8EgF1Q4b5uqEjhSQUWbrHaVy8YYyDaLeAsjRMiHSydagKm59zsxYp",
  "key9": "3mEHjEt9Ro3Sn5knAskbKiamvdzmXMVhCMdNM88yLeyKApmzWxYsUxCjZYY5jQJd46PjenQm2XYPRUMq25rmkWy1",
  "key10": "2RqP1ZRKH3bWjEtU21SzQ3sJ6FjCouMmvCNxe4xN7LPn9mEDWJjjhLNG6b2kzE6V8b7UoZ66Cufo2iJcunLJEWSW",
  "key11": "2fuwt9NmYMea28SicmU656MQdBTTufPoPNPjULefk722fyDWhf1mzZn72jiVHfmGT1HxDTjNgyA5rPGFHSUafL9m",
  "key12": "3kV4b1pU7t8q3LGV23rsVAw6iwWnfVQwGxS7DrEyfCtdtdzDuukRKAD2dvNBTVegdPAaqhTCbB6epA1UgKpWyBAL",
  "key13": "48T3YxyyyHHEa2AY3LvKubYVHZxisnB6WDkf4EkHUoXoseggsKRACo38TiUVyRpkVReQaaHgFc2tqRQqDuVQQUpE",
  "key14": "5eWdKBFP5PpxwH1sSDWxtm4WpUcScyKTdnPZmxFi4XNBrd88wUYSx1iF8C4Z1fWh835BTAGnvL2eo8n2G7iRvCUQ",
  "key15": "3Attw7Gnhka83SSqf2UY8qdZRgU3MQ1xUN8jAKYeUSYPV2HP8epy5GTqwHXYCMJYJVesf1VynbWsw4ogh6ckAZYE",
  "key16": "4HreyXqbnpVyh9bnNLo8SAtFCtBJircXHJ7cgSpKHTJoq7YY4nQwjeRzA85Ep3h3NECyRFUBmE47xRPDVQ2kC1pE",
  "key17": "5QhSQMqG8m5KpzNYxB64GCpiTxRwMmDs97BWgihir6qXjxh5PxQq31uaQ7hPyuAoTVvSrVF8YB8UBUPSCNKPAtdt",
  "key18": "HaCcEeyJfbfsA7ZQvyFtFZzR93mGi6KnD67N11RMjTT2Z9y7QVBSFP73RQBSbjmUAmFKz6a3bidCdioi8L2WtxQ",
  "key19": "4Fhif5BHRexhsfZQeBjosCN67ScbE4Y1sjdaAoUsY2r14e84cdpfyBacn4PDmTZFF73MsJoQhmc4wE8dhN3izqjQ",
  "key20": "3qcwXrCadQfg6m3imKcYMAbaCNt6QCK5XRcimokr48XNWeZyLYzxzWxUs6Z7Nr6PrM5RmXo89Ag5ZqqSXUpeMLN6",
  "key21": "5CLQnSay6QgDcrGWutxn9VE9q3xWtYGXYLDpbrinwYHprzK5Ezkp4KWr4fP2fLnudc32u87xoWPfgDPEpnAQQHqH",
  "key22": "3JhBqrMLpMDuVdoscqYLypqzBdc38nDiVxum5s9oPVdeNtGv3AEvdnmApJhYgHHGYv7W2tpPWqVdynMkrFgB2w4W",
  "key23": "59rxbQYe9CdBodnqwaHrEd2eFk9VMrW9j9NU86L7nR9oPebAquCPaV54ZGTTJsENFApRmEEsw5DsqUWXeVynCmA3",
  "key24": "5oL88t83kkCM8FQXcUrxDxqVEonk9eXrtjgf4tboK3LoKb8gn4VX6zVD4DsjHDgNBFNPGibA97vZTcxvfW1gGma7",
  "key25": "3ws3yoq9FWMtYwAqS6wmzCyVEtmq1hSAuCi3eowf5WZyVH8wT5XkzKgRFGxhyH6g3zxxkmeDjgP2cEPspCBjfxPz",
  "key26": "2wAQ4zCGJ87Vb9SwQ6sfBG7aVdRNSEJmTSTgo8Eh91mmXN4jHSr9oM7odAefL8gGytfnGE7EKCzsNHVXeC2Hkatv",
  "key27": "4CQhtZfSDPrkejgT9hPQzUfPHAme3SNoFL8RQhhVg1FfPGGaEJe5jeNpQgAnHgB2NAaC9ArucYFL9Zvj1a4hu6PC",
  "key28": "3X89GjgR1yZLGva8FfcPeWtiizHfZjuVHngSDrxEnPRYioZ4Fo349Wj2a4b535EfvB5G83UYmHS4DVZ518Ww2Wd7",
  "key29": "5nbtkbt6MA7oGY8uPYCHxswnmR6gAhc9kGvLHpfTJ1ubUjycWfe46V7h1qHp4hKqHBjfeVbUphXKgPoXLFxSXUiL",
  "key30": "63Ej5xbHn92QxyGKZHphY3ZEdVZYEPwdi5SjLGLsjpg66mC4cfrS952MPnquoipccfhLJ2ECDgjzb5N2JsJGDPbh",
  "key31": "katemHpW21YuXiZ9AjQqXcZCi2Hbhf5RHy3wL8kTwhgh2VuJoHqinYVGuRctBX4oxTtBVv2YHc87MAsHrDV2r79",
  "key32": "P1pZKM8goVfvnyjyVR8Xm5e2DRuKcgerzpfNvbrjsJVL3iefki9q7yds59XLqREfgNEJN9W7baY85DcEcUnL7SA",
  "key33": "f8V16b1447C5bYyLJYeyPNk9Mkf9vNyE2i4U1oVg4ohkTUaL94EXvaw92kjBDpNVgtotQwuqHMgsVBujeoRBz3r",
  "key34": "3zqFW6FKKT8oybLyMi3dABstZ35NdRdh8Cevxa6bTqxd6jk9cyYvTy7mtocTQrLCTbaKBayZCkPFBBB8QtEpd4L8"
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
