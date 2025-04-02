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
    "4oSpKAfnBgYPQA3oqryQsSHSG5UFUrupuNS5BEZ489bYCjeG6U2dcpqz7oiXdLNeR12psFok1w8tPVnHStay66b8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDgcWhxyPH5iGAkZuzBj1nAE8j3JibTzyzJzT7jpjS9UaHwoiy1GNBZzMaDm5b495tD4XNjsgs3VXZedDxwJi5j",
  "key1": "4m5n4byNxW8kjJjy4ZhK32CpAZxNnjXh95kAD13xv7KpmLQG379twq61aRi8WLKC9aLFKup79oR8dNvTx1feU4hg",
  "key2": "FXCsZbhqDv3qUr4d8s4T5YpfKgxgXtHNQzSAdpYoj9NDAq1JsFVNs9D3HMs1pqYbYKnYdtFWWvhfikGxNGhGg2o",
  "key3": "7MEfXQqwL2jqzNFA5BmbXeayjDEFc25QhBK8S6cioCtuS1xYvLJGbwQ6Z52MiiKpsKjc544wWM1e8KjRAgaLGrR",
  "key4": "2n2PKRF4HXqMikYMRgDfEKejaXtgXDBqZSVZxMpoZWR2hbvpDvHoNU5CQ6GKVHcgTAwt7FzQUm1oUhDbHGHaYZHF",
  "key5": "64PyfhGxbco7BbPSofFGHHDrvRzZ3ii9JDZYBiyPX81GhugULT5W2jtLtG8SmnZ79DjTUJZyhx9rtkuzMt5j4pvq",
  "key6": "34qM1vH7vWqfeQbSJMd7AjrSGU1pMH95QE3H92dViHJjdsb6pUNnKqdwNrQL76Ye3A15mt23qwhoizMYAgCxDsmz",
  "key7": "3NG69qREUWGPjcwT6bXxjjC6WQN6wAzHviGpCGXdy7SYCjwKSWYocdzFfpzz5oECD4F3e4ruCx7AV9JPgCjAqhcp",
  "key8": "52VCK3GMEtkZT7hg6QZgXPTenWDr9zSeWSnHraPLnYu1XQGPizTHwKExX6WKe26cUaV7PdTPS6Yi32Qj6S9ufL7",
  "key9": "42XYzFBbBgo2wkqwkSWJTeS1cty27XLNqhKuYdvUqRrekcHQVQe55YB5HUBrLU4tb7Kzts9dEhdR4r5FV6MdXjs7",
  "key10": "4qsKZLpHAajxpTjseD7NAsmTDzyGz1rCQy6sAYBhu7PXi1CbUBc4JF1rrQec6GBven1c3tfRjCfb2RtnBUjtgxj3",
  "key11": "2BZ6nUnra3Q5mTzevGHVVQdapBgweGxSHFwccXaKNMJLvi5BFvEPRK3UG7ZGf6wUZmv752ahp47cdwgxgqYyqtgg",
  "key12": "5YUxFuWtAqZtqx4p1j5cp23CbzjMHnyaj8U5nyGzrG7foMpxD6JiFVx9LKLrb6cmeo7NsDGHS8hHBzBkcJPpp1bx",
  "key13": "4FC541iUAUkN295LYf29QMgquxo681WFnVD3N8i883Cc8P2omzxZYHecsBmuzNpqNhksNJRoYNAdaP5YnDB98Nbu",
  "key14": "4kXQ2HP5LnsZRM3CMGMe2qG9riPUSjYPv4tMRFZiUuKAVenkqqoDdvKyWDE12aDyMf9pNiuizomZZ6Tr4ngibABu",
  "key15": "3MgqngJvnMYLGhPvGUoBxAFjEvFxCxBws3uipCoFz77zzCgQcNj8Jsop5zE6SZxx5nN4hFN1XLTcZFAzcC7AubNm",
  "key16": "4WkGSgf3qmmw6A4QrPsvaSLU8yFF62Lxb6heb7oLgVvHEsemwKqUkPucuS6NvkU7tov1RwzmTWMpNp4GT6QgiE1M",
  "key17": "5JJsuFaYjuvJXHXs6v42poo34gvz6kLGhYdbwEpZdTS7tHy4CeJSX5jUJcPxPWWYqynCmp5tKoqjLBaaubvGPMWr",
  "key18": "Xi3TRLWY2TnCLoyoJPk9v4D1fuyAzGP38zPEdqedfw95aj8fx4hP2fXbESBxyNMsw9AjYhwrWobsYDAZ3by2tAj",
  "key19": "2bqKi81S7J95zoncqAJVBNRusqoJwdD2uTqpbBaZpwVbeUGNezRbJn7HmymbizSqph2c5nB1TVHDrsJvehY3kYtF",
  "key20": "MgeXz8AgNVrQqVuYNM7hqY64LYPrMF8kNsJqBjxKLjjxCVvUG4yHKQhJousCMGTqkF5q6bwosoBDd9YsthEaJE7",
  "key21": "2VF1teULfKPHnCawrG6qEExrh97Qkh9xbvxQoQEpikNgNMadexEfmyWyRbwSmk7AzknLbeonW8e8bvDD1Uu9ztwi",
  "key22": "4Zcuw4QwWG1f5sarb7avZQs2bRRxRXNuXpA7VcnegeiN9v2ScrT7Sq3XuwwEbmAtugKDUw88rRnTdGFGMwAGvPzc",
  "key23": "3SoGMwM7S4FyCEYQtt7piqb9AAY37f9MjuSTjh9dzkmTdubLe3spR1RHkA9tpEUdevK7xhpvUGZGm5WoXxumiiNV",
  "key24": "4bucQZhFXjenVswg6qP1dXSttGY25mBUridr7kWnuMMhk5n8F72LopKYHyKEKQKgHQaT8WiT2K3DuWPkquhCVtNW",
  "key25": "3HCDbAeMymXtzp6PAbdxFYEg6L5GTQAe6iXTBmgBG4UpJv91RPyT2zuNdgssLmfFk2JFFkHjrTcKqXvaUNtoD5E8",
  "key26": "65VaGTDhicA3hogpvWMSbaKEJb2PejtBUMFbhCUqyvSstiDjefdaxPWMWQokbdNznDpPjZCukCy8BXBdr9bsh9A1",
  "key27": "2vv6tAMittUeUhuDoukRC7GX1GuxYzFSNxpGisMGtNg84iJstSvRjSDE6xJEvuYALkej2VKEMF51W24HFSYNwj2L",
  "key28": "4DmgenxZbJGMmci4ZBDZwf93uSuHUHrPW2rNoMjvMfPpeabxvCjcrDtpkJrpeN8AuYJAVpH5H6Zc4MVDu84wDB4c",
  "key29": "T1zmNR298zZrWCLZDitJ84GeLjSZD7k9duN21HW8KGsSnqKxhkRtHafzanvayNRdDQSbuU4NPK5ovmK3HWtocDC",
  "key30": "5zdK4VtbgTnSYsvdGYxkkXFoVWcgwZsxx8v8DQqyRi9bmbTrUWk1qfuACwcYv66JxNsmR9efmCN81DF7DnmNGnNt",
  "key31": "121AkhcfYRjUhK7AcCBDTSBEqfLhJWtSsKpc3uj2SnGwfAyecLdxnUj5xgq3HumWNRM1P6HTGKCHYfrbS1KwNQ3q",
  "key32": "2Lua6Fg2Uq4Zh2DRaER8vb5192YSdxnWnUEjANVsmh3FradnW4hkBjgELBGjunVndSxbmmmGG2tLYKQJeEuxYAoj",
  "key33": "2kdtBJpM5Jp66EZK2SKQsWjNR4tbDD4y2YqPFDny6uv6nwmgQ3ePFiuqFsdP8YFUYio19HdG4pTCASsrTJR4zu3x",
  "key34": "31dw199b1dLEhwiehPm9o85jKyAUiR7hVsNPosjzosxyY32JwSQ6vdva7kgVQVDKSAmAT1ERfJpvKEtDhyKxBvio",
  "key35": "aBa5uAxb3Ac8yApgCRxobNrtwY4vYbsawoUcvrjasagq9saNKWazT9h7ussVqddyrZZ92uZqhwVzspVk9ZN9xm6",
  "key36": "218UaH2vvrSVn2w5DYSdWijKs3u699v6c9F5jkj1QSzZpWCvcU9yuW6ysLBUTtTEEFtSJmg3XktVcqrjoQqAgnQY",
  "key37": "2LwXEdjJfEQEziFVJkpCpFvRUshqpDDT4in3L6VhmvPsuybR5Fbzw3X4PwUQd8JEzftvc3TqWSg9rfn9ELp1SFFp",
  "key38": "4B7d1LiEh6ock8vNmYdoZUaZEzHThzJYaohnF2eJoPFko5n2st7f1QYz18mCebMnTvgVGJKHJUDHbscGnZ16tvpg",
  "key39": "4Whxpiu7gc4RyD3UEANUeckvZiNZniLm1B9fKBzNNCyzCxFUJRmrdcJWDt1WQ4fHAZEx8wQiycy3GvYdUEWGYoFD",
  "key40": "4AG4xt5zbRyy9mdTxVLwgLyGQhAdrVMQ3UkPhFvdYniYHtFoELXeYru49MGGTjFm9RKv51b43vKkvPkVGAEEt4zT",
  "key41": "55ZjynDveDYU5hpdmKjXqmVtwgjVRd8HtbpFH2jCUboTrAUHR6P9dMBkbY2C1eAuv1sminXpoPT5ntpR8EfuLMNT"
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
