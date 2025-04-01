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
    "3xJEz4KHgofRPA2ztxBY1WVCTJ9QTzKgzGE2ZzeCJKQg9VpqGQntnqwXGPYnJh5GrrDJvHWHrYn2M1xEJMzBbzpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XXaumSwrSGPorDnZcUiYZv2EB8DM8mQiHNiqFWXSBkX7X9dfs1UPK187jcVodEWtwEj9HMbxZqgyQq8ZjRbwj6",
  "key1": "2YNr3vWW4HaMC792RTDzusPrHpe4a3Sij4EDTLxrpnCyQxUVuvW66eTahdn4WAaYca8u2HLJ8rFrB35k7VUYsPyk",
  "key2": "19auRiSxy1EaJrcSKn6dirEHspsD8rAC4Ph6zXqVk4LQgd4yQ94X3bU9rfVwfFkd3HKVXL9CLwAByA454BJkAJg",
  "key3": "2usfCPhiqANvPWZLXHcdcxJ7hbN1AxKAdCN355wGFkX9ttsmzDV7FWkRARExsfBq3XKoNZY47RYbcgo1g1QrvssK",
  "key4": "63onX5pebdVxTGgiVJ9k33sUynkcb16KjYyANgNBxToUHzvmrcJsUv7MWQyNwX6dLJKTiSuHr5n6mW8bZqPt1831",
  "key5": "uE1onyZtghQiHsvocQuuHTQe2NanWXXV95eextXJrUi2W6ZHcWMJJg5ktdNBq5BsupPZNquaoNnxfh4XPvM3TpE",
  "key6": "3ZpsDMq363d44gfARxEeVBnenHGiogbQ6ptdgKjLkC8wZGWPHUmXHLqgf4iivq78Jtfwc5DxzdBhavJ94oX1vZkH",
  "key7": "2GnzCDXV5kFC51d8cGw3vdeAy5yze9fmAW6sHb1tztUCfGB59J6CSuTfrfFbMDBgx49kgUSwAvpuo7T2qcg8kkkd",
  "key8": "dgsr64H9tjqp9Juj5nBtdyxPQuwjnvGZjjgoxdvfde9KttvdWhJ2joQJedNRckYTK4WWm3GmgY7Hky6g71WtiED",
  "key9": "4YzdcnE6iVKQqe6JTd3W4jGLdphqVgUe5tJLoz5UJBQNrJihqXgSPhB2tw5xjo9324zVJ4GiXd8dhb2V6yn8RsDP",
  "key10": "Atk1RKhFehHTfAP27PXcDiVzLHfwVEAgqU4B3KgYT5rNXjq747VbKpshgazVQ56CucNVPS9fiuFpubdm9jY8zXq",
  "key11": "zBCcQX9GUom8kJVsgc8ipHvtSWbEnq8YSZpCM4nY1ryDAEomfRnY98E1dDCQgLUUbAGFpr9eLWH3e2NgdHzn1QB",
  "key12": "2wFiod7y1Wb7k7V9JDzrZGcUCS8w1UKzwEw8mfM49rinkNXzPq8BfcxmCmCB4zTYHgfUH89ciAFsQYYFqWJ9Ehyo",
  "key13": "z3zNMf7zbXdKsz2wWeRNZdFWH6sdRnkrxBcKoFARL5VCaSSpgoHFsEbETXstrD78FY4E9ymuJWETfTkm64LiDdo",
  "key14": "62BySNWXJ1UGBzLukkRLAbuzvUEUEjZxbVkvzkX961Jm4ZtPnL3QyTXsien9LgodpiN2JX69D2ZYVNsBVaf5vSD5",
  "key15": "NsyZtxTcyUY55CNP5DWFPZsF66dL8vBAueakb4mguUNZwZTTxXiChW3HvnSsTD9TGVNLAtshPSiYDCoGZGv4Jwy",
  "key16": "2zWj68LVDq8uQEae8iPFCJvGvgrADm3aJwPiRm7d2GLkmk31Tr3MDK7EqdcMbLwzXckbRjQ9y8NqmFj6SmTZ3QJH",
  "key17": "3irXVi5KVWtZK9obiSrPHd2PdRTAKigGeQDLFB4SMgAE13cfbgHAb1a2e68bvEWsCva6ELvFoN3svWaCyZet81GR",
  "key18": "yQeiUBsATyJvWi8NG88WSk6pFPA1m2JzZPiqyZiBskxJkJCyBn5sDpG4AL6AVSe8ZvUW6zSmDg4dG2DArwHivip",
  "key19": "5RVAZZ65takyW7hMEiXZAXVPUKQQfz51b3Xc4G5Bv9ZdnZM3MpyTxrSauw3V4WHu42q6hgaZxhQz34zrYpS71o9R",
  "key20": "3b5M8EFuNZzFRYVjLv92KZFVCyzWgfoqbvTWMTcYLikaFM2PjbV16qJ8gCP7eS112eYU8qzoH5B9muApWjJCmuaT",
  "key21": "46Y9UnZrhGaaekeRciXqoBi6zoP3CZmUShta7AFoCZxiwoTh36BUV7LjYTEwM3S21rqADNSXVxxqSjiUssKikGE4",
  "key22": "3H2XgYcVxQX7z8G36CK7NDM1k6YkDckP8LqV71axKnqw2rm5GLh18LCVd2fGM51Hz9c6QK3FFARZrUoAfZTvECA7",
  "key23": "5JT5qMiaLGhCkNvPekRazQLrDtiNsowUJGKreksFPJ7iekgVVwUF9hwbwvtdFyEoNoDeqoJ3BPG7n9Lb5d3YQZTd",
  "key24": "2V9ELKuWnaKF4jpPyyF6qQYe5ipZn63z5WnsWfqWKPoKUq7zYUKyQBeuPdsTkyC5oJq58BVa4CZLovnfKA5qdzYq",
  "key25": "5enrc6dNJxxM8CQS7aCzCku79yCZxTo8bCz5rWx82QHc5LgnWVjkePYJ1iCpSsKL6g8Zu3X3TWJahv7vFwzbBcyz",
  "key26": "3aei4JVfTTYWezcpQCV5NKLu9didhBVctLm7HaVcWaAZPhYyEn6pcz8cQj9iqPtDif7uKSrGCiheX1oAEkkBDuQ3",
  "key27": "4RwkBj26kGNWT8PvbJneyY4Vy6SAB9qXdi2fYiFSiX6jea5icTY1L4nWB3AD5qxius54kNv78kEqAZFS55e8ntDc",
  "key28": "3LYr64BUyqH964HPdVjjnSESckiDMR25y3rmGq5B4JS6ZfbiJHzgheCcwJcdXNLUYrBqwXHHqJh5MQheZKFvoBun",
  "key29": "4vuKzesvXxZ2UexA3vg5YQSVQHVrytKQbV6KCpetuRBSzJgg18j9NtPx4BUBd8jXrs4cuVQejG6xgvS4hTkHLNmM",
  "key30": "4qkWZSvN76DpunQ9SGpwoQpGsfj9brqa7434DKYGBgZnycLzAeWVMdMHyTmLSnpaQiyiFFvfP1f8xuoGRUjjDY4y",
  "key31": "4xRFBEnqn1Gw7HQ5cCdzvmB3awa6KGFpd7mXnBLVVCkyZGF1SPyK3mFF6MYFF1GgYjwzE2dgULsPR3vqmxsAogyC",
  "key32": "4RtNM1SN2EkoauFPzB3wf5S6XXyWCEeq3Mn1E3VRxG6iM7vTgJUDtpcbFf5eFgA1eg6yFP7jP7qyFCC99KEwoGiQ",
  "key33": "4aK6VnkHU2GfpUuEjCjQLSjzbsjKSwVcMgZDq2kyNZtQzRwArgbUUkgA8ttYHtDMPEcibccLBkrQ3DB3RHgs8XTk",
  "key34": "TbGu6EwqHRYHAEDaA3uq19EUwnmkqqEJHWFNtVSnPX6LLoXhGewZF3p4FidBrjgwPaKWDo58Zk2WrNqCuxznUhK",
  "key35": "hyyTen9zh2axLTfx1jMHZrh5fDJRDNP5kfCPQpU6gwL4TYdA6VAe2H6XwmUJKaed1g7V4jDgJHKfUB2gFDwL9Px",
  "key36": "5V4RDETAqbpbimPBqNZWF6UUUVUMu4BYZpvWkJNUkytojWZT8fRHMkhLSj8rGjCNQdtXFThQyAu5ovNmVTCB5nx9",
  "key37": "3HMRvp8jo6PJQ4TDksqeswCJ5Tyjztup7Pw1o5GP6JkKsmgW7kCKHEFe5yLtbPDP1oKwHxjtUjiLJqRnhCCzr5J4",
  "key38": "45pqGGYHnWf4hr6sogLXUYvqMYnPem9YMuNw3dnwF9tAii4cafYDAd7kx2EXsq8DNRvt5EqQVs9koupXJdR9FR8c",
  "key39": "4wP3aYE7MVC4HuEWmzvW7bMGq5mPjCuRwwoFWa54JDpTEDYSTKqTMZepMqsWwLEyFvXVyRBSeKhKx6cnVSXhcytB"
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
