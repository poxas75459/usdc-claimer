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
    "3XTW3HeM94WowHLeFMJFFKH1C3KHSymddV1BToXPqdEMR9LWtP6Fs48cMczr3KB1Lh683SECZFuoBq43snkRGbt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKYN3X5oxYfx1unWWshwEt66VaQj3bXz1zuqzYcSM713vbdjRmZ9YYsSpeJxGwjpeDxLfQEN1CDSBkGZuttBki6",
  "key1": "6WhMg9ee2EqrKoKQLpkJxSdKUjhmXR2RDDgta7Y48JVMePskjGTM3PP5Tqgg2j3YJ31aFT9686p6mND5rVgU5Ez",
  "key2": "gmKQnJMmMXkuFaVrJZdQVNu4rVixiHbSwLmtbt9bQRcf8VDyV2j2LNdmb1C6DKqgGdeywGwEpA1KAxzEq4FfK17",
  "key3": "3cgPMtQCCVxto2fMv7tSVzuuAeGVjBskxFAztFKJtpj8iGa252Y1gmtaCL966rtfmctpgMsnTMtN67MoYgmMMDN1",
  "key4": "4hJgB7EPgRXbtcxLSZ5bmawLHx37XCWU85Cow6rKFuvqxu8Rwhd2pL5oEEqrxSN3QJUaTetdTtGWt6eYbFBYijCa",
  "key5": "4GrjABBTmCUKyCVGzP9nsggosmJhoPPYih5UGs6yqwynaxPmtfXxr3P14qtEFh8oFrvp4uwV6tSwhZd7QurVrSS7",
  "key6": "4SYWVLLKNtNBjUfsCzwjvd7DKwhbaWbZdEmiY4AyzsrYfj9p2rXf4BVKmQ84NoeYke2uTzbAHhTb4rbt5j8XjZHX",
  "key7": "5c6cczbAR5qmW8UmAaMGvxMykzU1TLEZBV3jz9922NvxsrePog5wwiyjkhC4gnPbSiUB8jiPvTyQKevezQ1TzwtD",
  "key8": "3HAp9h2nbCF47xYsys7iyTFvHfeUrGSxwUDcfWcFZfeR8r1HqZeuwFtHt95ZJ4YvD36Q3wC7VnEP2EJPg32JBSNT",
  "key9": "SdRJVdVbU4rtydjVW7eEVNUy5QM5BAAprNQQrbYHX4HSudEwxBJ4sDDcSc1mz3yJ1QFhwwL2k7dbP5AB6GykT6m",
  "key10": "5H2A4cBim66wb2AphXTy5RewN7Vx4PwH8QvwcCJb39mFLNoY8aH2MYQ8PrJ9mGodFVLEfc87tT2zPEYwMoYJWzYs",
  "key11": "52nmkb4Ceb6mbKDkAS367GjugkKDmQ4hgVTFqDpvS6FHA5aa4joLafgUuC4muxfGnvrzSYrnrL7SBGEMqRS6Q1Ps",
  "key12": "55atFu7RJGBMbNyWqoB7quKqCnzvzWQUnfyLFWyJatHy9nPSGwKvUfGkX4SBSSZKS6Cp3QqMaPSmcT5TM2JVp3zz",
  "key13": "KbyXF4yHn3aUohXpQDyFmHoEvNUVGGaoxag9hyZmKUc2h2aRNBDBXkndRjDWi7VvXKkwJqefvYwA1Q8Eg4LJvZG",
  "key14": "2X9uVYCtXprpfTLtYrvgsMz8ZrUGoX5JVThV6JKZQaZWSD5WCcAcBd7hYyFExm5kGwkJ8hLow3yHp1cifQGFSDAw",
  "key15": "3BLeyjo87oTEqGgLxjnjo2VsPLyk2HgbWrne94LqFAmruSMj3REjwTuwQwvmPgqjKhd7S13T3tEWQcJJ1U7EkYYG",
  "key16": "5xRGAkLUh5XYpt6TuCam7aauCFLXEHHzjTZnYuKsicbLYBjFYMYAeircY1tia3sorC9PURybWogJAws6X2kuHca",
  "key17": "3ZS8Do8hB29vFRQPrQR1JmcLd7xZ3SvYsfML7zxX5uNouCvqXHsvxCG89kGihJz8Dk4oniyUfeS5aGy2NYFa7FKP",
  "key18": "LBXCAWS3upwMJ6Q3PGXnRJxSmwWe4BZSk3D1NfECr8kQRJ78Dnywk56TGyuq5pEbwN3nb2sm6Fwyn16JsRDNz5B",
  "key19": "2s2biz96CVbMd2MRjRJdWuQnQbEk9hN36bxMEvxxfmqDkgijT94ghR5BREJqHbjiXM2ikgM86WcWY2mK8gtNhACo",
  "key20": "2oXw2MQ46a66z5nqBkePtBziZcij1tEsmfJAi7xddRkSBGoj8SY54vKUnrr6erbWpq2kEAjzGBAAyKUPyguRdu6n",
  "key21": "47HgBW7AV4PgZfHRzgPv6v58KqgTFSFqXvoApCpvsNKU7bjuXfLRohAe1rZWQheAejJhy26nVrMtovKpQJk3Nc6r",
  "key22": "45iWv1e3KKAkAcd17iQCDUgWvUAFAuVHtstgma4qkEMePcX2uM5LTCseTCMWQGXiBa5iFHUBEyCFCexbfu4oUzRs",
  "key23": "3UD9iADsP5iX65Uv8hWnNYvpKWcaieWov3J2p3PNUrTVJXKF6Ra2bFJBtKibZaoeoiAZTrBmgdrK3hHbxkxxfUpB",
  "key24": "fse3h1CdmdBpp67xnYg6E8CNDUKoZQcZfXQfTSmGpjuiPZ9GfsYYv8DyGHG4CoSU7EPQPox5rBswopbHoBMzLYS",
  "key25": "aJoBcziENQKx7r8WWkcEzZ8Zo9nwWrz6UrNWXFuDgio6Ae9D7bVGWMMWTN7HHecvJS2CHcmmfGbWRVn1XejXc54",
  "key26": "2qDGjdSga88V5eN6kEYugLakdSXU4LTz999nKSxn8YSQfzhFyA23yiGCJgtQRTUvK2aMqnEVoPgXirvyZKiydEzK",
  "key27": "3YVVnjgrMmqqFzc35GjgJhusFtHdZYpGtbyNkxnjnsn7wRspmEwywm3UPAJWD873gfZeRjvpZj5XMcYogxRq6G1G",
  "key28": "2TT1gKzUaqETt3VCQ9H2GnDfsX2hQrvbAxPzqQ8W7VVznZFUxzy1C6DjJ614DeAWQF1LiWLwyvxJEHt9SdsSV4bN",
  "key29": "XKJTEJKxZAHM6t6AaA8qPxVjQ8Yz5JV5RyK513DNRfqQPvj39v8AH8T3yKWTmnPr3uLo8YZYdxJHmfoWLBgdpVT",
  "key30": "7icZM3pf9LV5yXnq8cbgNYXrKRA59CgKdWE1erYkS787cWgJcZEenpH2YmfJCTajGD1GJakPBnUev1yjeWKWW3N",
  "key31": "3QpQLSzpHqNMBgn5ukQSZQToHNJs8MS9ZWdNjUnFX9Kqzf1ZvRz6EzYT6nnEdjDtAHUZx6E1zuu7t6ykGCnuEmQG",
  "key32": "3tjeGo3fJ5wsdLywTyCJFArPMGdkqEe6ohi3WpeC92pfR1va6xd5eB4j4JuPfyAoD5pVRyvnNf2pHm9oZDKe8KhA",
  "key33": "4j734GbW4HjxaPV2YxtPULXK8y7M5edeq3UeK6xseQsBDbDfEQUeFdXNX3v2JQh2Ded8SJn9RJr2GH6BaWgnsn6J",
  "key34": "4dm8eKBe5GBSKwPDgnKHJJWGTCXrbwZQ5ip7JbNSSHF5ALNf5eGtKJRYA6sSfMCMMKNDb7c91wXGuCeqhHykjbfa",
  "key35": "ic1AXUCTEPco4KBywT2tLYuUe9uJHaetssVkqTPqHTMSmCmkPLia8d1Jby7YqkU65kEBu3DM1j3J4AWQrY9KuCB",
  "key36": "bRkiuESNrEqqAHz5qK2xhCRGCD1bUt4E92LaDLEHsbuwx6VywLzkhVGDqBdSSwy5PRjouSf8y249rwpE1sRPcSa",
  "key37": "Xv24nPym3k14YBvWVauBenfPFPEJYsMT2Svh6QMqNe6nosQkKdG68S4JweGzdzkncSt4rzF9ajuTb5xz2hgR9v1",
  "key38": "FCfXjNR65dgadb45TTMQ6gZwS982r6bVV3P17tYEXufMrMhvsgRxKobEn17dfcRVhyKFmMyA7aGWJtiEem1rLRg",
  "key39": "3Zst73j6C83v6JHs9RSgakB8daWByBKkCeZ1PZ3VzbfNo4QjwnyQr2CtZ6kDbVSV8aUBXBP2rxSBCLzyMkuugDRw",
  "key40": "3qWW4SyZ4RcR5ZdYRF21GLkqW8HZCNfk2bZGcBLJZCbqipCARLTTxE7k2BbaoCe1Jqu2Cni8mztdenVZ5ai9npM2",
  "key41": "FxyQgRP7ovpsBiUe2ZrYKJpyeRwhy87wWG9E3ubxRGfVyvu7LDne5ZKw5BQnzb64zQxwM1HAxwA5pbgpSLGwx5b",
  "key42": "hFUKJArMaEjXkML9QG5a8jdzgTgpHnanosmmj1N2CWpEQe9abHgHyLD4KNtT2HzLrrwZWfXPCuoKT6VcMXUTy4h",
  "key43": "4AmNu1HYP9a4tduARWUn4eTpYotAXSoRMbqUtsQMpT8UDD1uao8PJLRbT8VpdsZDJhQgb94d89Cm9icrgzjCWRpX",
  "key44": "2gV9cC3BWtRtheHAR8aXhnY4ZDWfPV2tyvaFyus3fXbfi8L8m2PRqoXMUibxCJ2T6pFah7hw8bswLT5kK4A2EHBw",
  "key45": "5KeYNGt6SwwU7pwhknLLe9zYj3yBkQAQEGobD5DtfurqLt2HodFaGfLWTQUMkqApiw748aVmPBTTWvwPqDp8Dxm"
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
