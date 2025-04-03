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
    "4hyz23pXvM7QqeY9KGk21LhMj2o6XktjTof8cQyEoWrAWWPvUekG3i5cTz6yewbH2GK2eTRqkGH6nDC8fsPurLDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPYb2NDThmfWANFSJJc9BeUzkx1ENESnGoHsy7mBF1wA1SJHytFkKwyKdeS8d56F6y6CyCodNN5ahobU7HvWMBe",
  "key1": "TH1kWzKrpF4Cvk4kTBAi8er9hywuGg13xjUSAUTXz5iShJLHTXLAwyLd3HKeu1GBKDzkKVa7pgLs81xQeHMAuBv",
  "key2": "5s2dBaY7biKtLaTENw67VraHffkb6mbvh8qjHYmLNZCGvWLqDEyzGJ95U5wQXCRzDEVV1cGBebxF6BsjE11wTMnC",
  "key3": "4BFoGBRDUS3TTAgK81k9MWDYsYtKkuKsh9jGFhcbtXZcUGNA1ztEBBJ2W4doqzFGtUbNbdcJcgvhhVknDfQhsndZ",
  "key4": "5TribPxNWLc4V4xBeeFWUULDddjoUHuqTzf8FNskgdswiPMS2GRsKLRagLChhmnHkrHk9L3ATAqzRQR4yRBj9ymw",
  "key5": "5dQWr4x6s4UtFUZyJC8goAiqarrtfGesYFgr2aXuFSvUxhMQWVcJwxFkkv4BnRhBiT7wL4nGAtzh8nbpxtDvB5tu",
  "key6": "4Lq7wXq714VBDaojoGdvsTf5UDZfyWW5uZv2GNJoXtvp5VtMYF8NhDiQNzMRtNNVuf34RdDdhjeG28JbjVfmR9d",
  "key7": "4Px3yhT4RG4TWJWCjzFPxvGekvfwm2UbzeQzGwhRsQLcfgAMavonGCmXTURVp3qSvVwpp7crkfC3QHccfNzH7NY",
  "key8": "5MWFFDaoihid8e4FQQHyaXhQGct5H1ZYpj6kAkEVb2LB4ViEywoSg9wnKjEw9mugVvcfyyFgoK1yvVqHJcQjMBU",
  "key9": "4Wxo5mH79nHru5Tt3stqt7PS7BaHdLi1Gava68x685hJaJwMcqTypQ4sJCU7x4Mc6uQCfMzS2hLfwW8B2Qkk4r48",
  "key10": "2LcjBxSq6sf53sXxGMjHA8n4AAEMRDJLe7kkzTHpxZZYEki3jDii6o8TEiASZ1Z8QBAVofhgLtaWqJroQGKuAKFz",
  "key11": "22rMBcZ58LEFkoXiBYwZkD173VFJNWbxsnFJvPRhd22tHiyXeGVbemJTuSZnf53F5RHHYCpKceZkGASisVSC7fPb",
  "key12": "3t9wXYiT618ZWGP7FiHkQS6K6gnxuxfegDzjQegQxFiGw3nZZKzAwxzzajuYccgTuKLwnVEzVb5KCg3cMq7P6FoY",
  "key13": "2xMDSroTi24PX7kNUJ7CesETadoHiH5kREqyQnFxYRBbaYUhLVSYCrWF6ychRngxTSjjgBNjG6Eq52ZNG5TEyu54",
  "key14": "wvzyGaGE8z6QobXa6jpedQFpo13LXBSUGQeCEHZNfo4o51AybwUhjsuGp8yvmCNWDdFCWYC5fTWU9wUk2HuneBR",
  "key15": "2kgcGJUYu7vUp3DNCGi723wr2RcWsM3RuEqXyrJPCLHPc42Xe9yMfNt8NTrRJ9uPmjVTapHzkHNnBCucdqyVsuMZ",
  "key16": "53PcoWbjQDp9gQ5xxSkD7q1teZwEq9zMJf7pv4CkcNymtUjgg1pTHkBjjSMie3pDtJ6gdCbWCXQy2RNKcSEEQG1P",
  "key17": "4WDxGVqrqx1Bru1EohgP5d7aGvPFHmmkRxn4YsxWy3gkgkwLKVzTXiN8q6DDa3PHN4UbV3zWgaUFh2czsRFku8Tq",
  "key18": "4axx4JAHXaR5kJeku7HtMRVPRNwBJzvTiXnbvWzH5uWrpUYmjrfhnLViQk9WeokPpPPFWLNmSAkSD82EDi4gUA8",
  "key19": "5jAgnLbciDX4orGAAhJh1HsXZx5WCHdUNmUYCSivduqUsyYwhB47XiCgj55WCVD6iLzB7NnSCh7roWqTxiux1s6r",
  "key20": "5q7qmz2nHYoMrN91oA8Yqfnbjg3Ya4PzZezbPc9vKEbz7SNtEr1ZZFoW3hQUwiuFCuSbrwXWEyFb7BCzRghEJwYC",
  "key21": "3hyhJcVXLH2sxs1J7odLzVS1T9pAMqjDCcK6M2ojt992TF2nfgfxn4DjdVNRBKMnuUzyaDRwQ7Fhynz3VX2HFsgU",
  "key22": "5qfkjudVyFDVDznqPW28cSE5J3NwEa6V54gDp1i4WGBxwfqeKKfDF3Fpm8F3bgJrPdFEg2GDbHaECv79Bu8eRxB2",
  "key23": "eJfPrpdSLL1VjHuW7e8ra2NftyTW1oxBS97KfBMK8jCAZCu9Js4VLgizuourPkNQtsBhhfMUZayRd7jnuKeqKKJ",
  "key24": "3S1bgn4QEdPDaB8criH19SkptJ4o4jUn8UbaDo7u8ajHJ6ZvgvztUpEeoWDktuzbGLUGo4dgTojFcQotAqw1zdFP",
  "key25": "KkHbQWp3a2b8aP3irbFFFGr1znSv633NesMQanSx3kbu3BedV7i4VPqVeCy3ddeu1NejKnr966dT5M3PX3EQJDn",
  "key26": "3PrjmTUMzcCf6D7SDbaatjp8QrCiMsBgteLPuuMigRa5gjnAmfmFruckPcqwfJfGFLF9219kLaqHyDf2Mu4Sbf8c",
  "key27": "5ohkh2yVz9yat6AbX7qMyyLWmX33awtdNquntavprZDeJPZBYMaTkBcejNftRLfHNMxB4VAJSyz1kD5ipw6cGJt2",
  "key28": "KLq7rCWsrTeTXHXqDUNpjpw9dGaiM3yUJ8nxpKMvBfwSpT4w7Zd7pEAMeatS8QWY3NUCZSkW4sPQfqF5MftCk4G",
  "key29": "5UFfub9ft3jmsfAhrPXVaCovA7VhjQZtCuPx7HXyh4PvT7KE14NRoMsqhEkMVjkAhPZWwXQ3zzuJDMX69dSdJkKJ",
  "key30": "2LYWjaF3dQZ1hbruypHHtWFJ8gsqVXEB8927fjvqLy7Rz1zuL6yhRjSbJ1wsGbu18aHRsEX3eyeimBapr7Cdg7Da",
  "key31": "ZRySegdbiGjSBvG8DG5RDHvGC6kGGDnBUd9AB8kX2rRENsmcWDAsxhcHearNxWwvWcjUUopcvYz1XBT5LwSb2Lm",
  "key32": "518BLod995LNS4ZEXjYrBcw4FFiJfofzyg9VPDobnrmMSgyCCv8qTdHFS2V5nAH55SmW4KqFBwfsPEa4DViVeP6Z",
  "key33": "5iYL6816TYPkM8eSTJi7BZB82UcepefiqGv3JDSmxiaEgGv2BK3JGigSn4og8EvNGsuxxuGA3vgEsd3n3vKFKBBm",
  "key34": "212gP7FpBxUfCqppbDuhb1SgbSgwCKtNLu2hZtXszrD7QqZyJtXLHoLUbb4eay8zeSRz8HJhz5YrF8jE4YQJwinR",
  "key35": "oo3i4WbktgEF92TUkUqMEWjEZoMnBtnzjh5Uk1jgUAKjbnf9CzNgLp7yFhcoMSynBp9z3tkwzEu4H98reR83Wqo",
  "key36": "5kSuJ9fXx7kxaGpfZZaYEwRNweDgYP1jrRCpPNJNgPhSr3oqXF1Xerhg6GorrHawzcBFC6RHBWcqXgrqTSTAdgyK",
  "key37": "4QsCddxBWHVcUSkT1rKVxrSA8EqydGACRDG5MT1kri7fEHCN5W7YaDyv9FTcyVQuxG8JdBukzhX6y9t4xfVCCcr1",
  "key38": "5hUWkfKHAXcYiXX5JTGFQ47dodrc8qngoZpHzNAhmc3C8DQjwBGsNsuf1CRnENthp3h8etyjx2USxWmpwZUfPyPL",
  "key39": "3Z2L4oSUurcksewTTu8VvwU39DGQpCpCi5N7Dn3YXjLs6UpRFKtfnaPQyfZXkxuJS93mo36HzcCnzcdR4ZmfnRx8",
  "key40": "4ARwwgg5azXHsTV42uEVtbi3A7znM7cr92Ex97EhfDrEp7F39MYXpuNkZqsgDXQGBnATbNw7bvSvKvUrn3DWjWmn",
  "key41": "3251QdmUM7Tec9Wx9VwE94PDPhE6oyQL2FgD2s6v1qtSoEJZJ6MRnpN96aALwQG3J2vgvKdrFHF63dE585GVJoBN"
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
