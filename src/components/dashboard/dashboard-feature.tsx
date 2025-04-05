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
    "5h1dwsU1Er9E97rtKAphADm5PuPRk8WSSoZB1cFV9r35cst8y9GqnoiK9fvkG55fryQv4hCn5LsJwh5C954tje5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ah9Ryk1Wb2jdM19ECoqXQjRnt7ciL3NSKyF2MGqhLrbAXcSVQfHcHAGMRNoeN4pvD3C7svumQva68TQme5nH35",
  "key1": "3VkXCdS85pa1faAu9b3WqjnSNQY2DNVzRh8T1GhqHrjb1Wh29BGmkrJbkqkcYfmQrR2TKKmFLJ3ZGmjtq9gw5cT5",
  "key2": "51JuGVUgZ1kZQRQ5sPQrM7tChEMkE8wj6rLKZu3tsNACemCHCEgMSDgWkf51g51fhsNVknvC7DhuyRWjUqsbsvSq",
  "key3": "bzAbTdFRzFt4MaCFigE6bsUPtRiDTAVaMbJzZq8okZm2ozCKqYCgPLhXmDvnu8VhjzinV12x4Wy64m7TissmBn4",
  "key4": "9ocNiuZrPctLf1FafJwfYqW9H4NasX5QiT1bCcyYnSSW6DDrrgbXJwuW2ECqmmJ3BdcDWXFNxt1pabFfEnCKQnq",
  "key5": "AcSLx2FysLsppbh6frjYGhNNtS8jb2JmfhauPyiH9RmftoeqLPzbGCTgcH87qQpyLX6eMrGyWDiN1QtdEe1Tpjt",
  "key6": "aQ19wh65w5Z6QQcbH3Sk7W7M1Kk8Tyu5cwnLjp5xwekE7FkS4CQjsuTuc1R75oma1L72s4i3u8nqcPEWvsboU3V",
  "key7": "5in6wsTWPVmRPuNJ9yPUncf19JohoSBKFgLc9JtgHX4DWDXmJathzk8KWMrQENoWruUG4Pxen9PHTksDPcugzkFw",
  "key8": "5gz8xMEt1V4FhNPiaJFa47ng41atSaZediSnkpwPC8bZBZ1s3tj6cCc9ctCZva2usmkMTq1aePggAv4HvW9q21gL",
  "key9": "4pvnDm4qFV3Ftz2bBKf9hJCqqBo3YbajR6aQ36dKPYpFSroMg4k8NhiiJJxzqi5uHG9gi3sjvJHuDRNuBrUq88cn",
  "key10": "4GHtMWbABZAcRUYhLQE5AbEuBxMFAf18sFx24ZRSjWTLwnGJYKuDa8Wd3CZCxWjiuwGw786JHkNa6ZWoJgCCrr26",
  "key11": "21CreSvQv7a4N1sTyVBajBo7tzHFvwQpHpwwzDHMEZ32RBsD8EoShJvErJDQDUbUazH4PFDVxmmSKQki88BJAfXs",
  "key12": "2E1jiqYxR2JajXKRRNerChJSbtpva1dPSzShHsTY24PRcQeiKy4SNJi6wyDZ91GBDKs3yU1GuBK5jagSHPf5a3Si",
  "key13": "5GfKDdmCPtxyif1N6d1oomgf3TxeQnHqMAsyHbykK1uTUXD6GV5NE581d5vcNJjvP3b5uoR7mUybkefJy9o7PCQT",
  "key14": "3Gcedhms71tRfEKdvRTuf4yEBxTkfrK7DcetQ4ShVS7mhKBWHMw8uvzPewut4aBrApvcTn3zbKADCYkXKGamsR2S",
  "key15": "4M3LiL6SB3mfWSHMd2pxF8XmE2MXYWBRZVHmneTVdPg58WSnQpU1MExTAUgDUN7yfrPE6amCcwURbiwkJHjfzS9R",
  "key16": "2S4QnrQoxbXjsb9eZ9QXiXsC8JrvWikdBYMVqH57rSrgDP1UhmP7pfZhGhGk1VQhAcjmTG9mqwYPRK8nAfPvUt4x",
  "key17": "FKuVr41jj5jhMVxWUj6YsJFfrnJBiAAFGFAWhtStXDLm8mei6Cp3wpSLdyrGgFwTZ8Wi2Nfvq7p3V3MPG4vV2m9",
  "key18": "65j8vcyHD66nKgRLkwqEMGe8Y3BXLhrjJRpyKiuHH9NdivmqkYMsbELtLZuMcqyeuZHXb1w8noCXUNMBeYihMKFf",
  "key19": "4UAqAv9BZHV8WxgNHDSseUja8Q8swgqLujyf1CCEHDMpZP7v9Urnw9ob42B1NKy12FELtAGqA3FQxc5aqd3Xezv4",
  "key20": "3ZLzpLN6afgr31ZHLNA8dF54aHivzmPqR9NUBqA8YcxQFzbDqG27hLLaPpzdMVM3LU4BKuC92SJEv22mFvEwtiLJ",
  "key21": "2HgrJNZLqfxs6nL1kRsKq2pS4r4J7qADb6At91S62Vg9q7qHp7isx7D1Rro72zcZHCu2MRK6MjTQszeURBXhB7FV",
  "key22": "26hR6WUbEUbdzfWp6goPncc5sWGvaXVwaLHfzyBYXwFfB4YLn4MZpxDdnU6ipDn8v4wFuFxv6pVqMjQiB8ocB85E",
  "key23": "2bUuGrjAejUvGQKgkrcQHBiPzX42wrTrsNCQto8mS5KWBAyWYvw8Hqgd6hgPCs2QpyCSFehddxYyxUsy1eJX6qfM",
  "key24": "2EV8mPnGQ9QvCqMrd7oKyGHNYMtA4fAdJr1KrKTjdKSwgFA1vMqSqc8fL3aADYtdUS3nJtsvMx7B7kEswsjwi8P2",
  "key25": "N55XWdXerAqwwpGPYuXjJQyEYRntkGgnVSQj6Bcs3V9PBHcR3HAkY5iRaA4n8GJuXPY6r55xRXZhLEoGbcgCHKV",
  "key26": "4b48kEvFu4UenTUAWbAsd4tU54sNgnVV9B9hs36XSGQgqKRceHzJ2MTskTc9KJ9niWC162iJGez8nS4gFNzCcXJf",
  "key27": "2D5qjpysd91x7woWDeyr2voJUAGJeNSD4HR2jszGEnL2rzcGW5KiKcvVgGUj6yQCFe7PwjtoC3yh4pyzESJvwcxw",
  "key28": "5JuJrEMhyJcqc7AAmbbNjVHJgvjuRL2YZ7HgrdNTLAEPfLGdnkhTzWysm1SnZfxZWpXArQFHZcuUHgmkJACXQN2b",
  "key29": "3uKacq1wQpR6BuzZ9t1h28i1PGcKAkrjNtYr7FpW8jmoV8RhQf5RpyLsqMoZ8VgsaYvncyjMmAHWyNehn42JWRF6",
  "key30": "2pwMRqVHPgsvmw3QeZzcBpce9dqqJX7MKYRLfi1ddEBiW5S1K6LAjuZ2GgFhNpMTGGzZQgwneYPDt6DqxdDhGwTg",
  "key31": "RqtY3kMAWZdg2M2rmjxbDdgVVJGcyjo9UtgSYZGCK3nd8K3FNKdXy5tRZsMzsSf5Hmrxpj97UX7UzcGHjMbecSk",
  "key32": "ovFFbox6R6vmJj3Q1CHMj2wmEnJ3pzREhNtRnJuswHchHnJXAUW1gqCaA4uNgYVxZvQ78kVF5iKUwgERN8bktDN",
  "key33": "3Zk3BLW9S5SQaApzMk4Lwoi74PLMCjAw1eFWT9BxpWrPCWZRG5bCBqcoEEVchuEADQqmWD7wrE1sUdNyYszBbPx1",
  "key34": "2MpgJabSQZeNM44S38d89SdmXxa2kd3MD3dJRxUJSpRt5Tne6UbQSCG7VFaLpUZjq7EEvks2WSsHY19EtpzmjPUc",
  "key35": "5ckiRYdRLu7spyQnx7mNWnNHTDpThbUuoPaqv7NxTW6Xeh5takKiPhVdoSrBtBdERJ8jHjznPJEEmFcEBnanaKun",
  "key36": "2Ub2mYeZbFh7XddX99eUH4k1VRfyKwavDBoj5zchEseW2gPSAZykTrJBnwa2hYURuSn4QM8CSPMqggMyQk98KBzn",
  "key37": "4jnjhjquJss4rrLbEy5JmqDJfBux8mAMBHFJQGqYaCumpV4AMW42ooj4VpmM4dtZsLrFmrXFFAF46cw2JGeqE33v",
  "key38": "5ApnFkRFHy1BheWDfrYsp3jkoFn9PKfeJUsTQ4pd9Rggc1V3RYunzXk5teWfc42BPem53xUYjAVe9c94Vk7HwUvn",
  "key39": "aJi1515Hs2uWeyP9UeHZwRRzLvjMiyWHNpLbZkFPu7mGmi1eQQStPZ5snd3MHyNVzVMpNSQqdeJKXja7URWgUMS",
  "key40": "g6BHCT7Ebqu12otEKjWMCUhT3pJrWQmNuvw5WXFPsGirV4o59AH9wHNbfufewY1L1WjWowJNXSxzfB9ApqAWB7F",
  "key41": "4PgvXG7H2FhXWvVFreU7bimKH1fQek84UePXKwK5DcpEKfAcekzJmg8Xg6mNMGhiUdw1iCdDBw9XEjXra1z5UdRB",
  "key42": "sa7dQPvki81ken8AbRuPrg3xh7FA2KV5h8skb8baSR3oikS9q5mNYhYUXAEags3gtkCJu1NB6NDu5UvLBg8BEQi",
  "key43": "3roBjCFM3FieQZtm8PYntmXhRmjL73z9UNAzmNW9r7T2wJDQdRobxYKMHuXgwbzoxjxEE4Lj7eFukWKBwPySws3E",
  "key44": "3XoRRuaim8rmbsn88tj1nvQvhHZWFmyvoDG5Kt3jgCpmmEbDvikbzP3C2MeiDTdUCgEtai8CrW1b68BJKhVL7qgj",
  "key45": "DTYdwmBSoithMWNFNgoTVfgsDPwkXV2jiVZM9kYvGXGnkXrUbT3WwevdiGS2b28j93ER2jtMP8cNekAagw4qCHw",
  "key46": "METZVjAYqTca2947R2TtAhGphzcfinho4KtE6MqbW4GbEJrbKjYQL9qt8K59nMPiyXDRRiJuczgXgpUUyBU8XVp",
  "key47": "BTL8jKNzdptSMDujQyHJrytX8ipYan1wGHcNFMCD9dE6S4sEq2rbBtBDJraiCoFeLxE3Nse4QbPEnuD77KSPADo"
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
