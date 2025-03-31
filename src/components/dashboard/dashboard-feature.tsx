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
    "28YKqX2kqoe81w4iJBke8ca6SFNb1SaW2P8YSftUWTxva2vjbZRJ8zECt59AVM9Lmq58Fo3JTGS21ZY8xPXh7qZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMxLx9JzqT3obsBioW38dVd6AJ29XmnPkLu7bvjuUKCHkYCTsG7S6KcJgRPZbWuc5MxXQg7Fde52LZzh1KLC9rm",
  "key1": "4RKkJY5DJPHigy25wSSknH2Lq2dk5ttnszYYxj1K6mmvGAhDEoa6rh4bskooX2FjGzD9WEN6GfbmpNNuaQVGRxFb",
  "key2": "2mZ5ZegNunnqtW4PyFuDGSkP7uKb9Ay7LAUpEgYDxTntFQESMetW99zYVCKbU6my7xqSRH2EnAjiLdPaKzPyGgsx",
  "key3": "3C27vNz3PH9gaj9TadyoeUzFmNB4SvCqYL8WP5z4e9hNrNKz9aL4C7t1gvdjqFDH3YjQFpqRE9CBghWD2Wz8SqN3",
  "key4": "3hEiwuz8ACT2bM5y5adNMSPYc4LJqyPNzZ94GFDfNepXmvCSL9C4sxzmHANJbKVmk7suEJVFufxQKcRcmHXxTE44",
  "key5": "4WsKApnpAYsL9mNyrecx3pM2DSp1J6nruHsf25NNHwjcyxQ4fPa36QUZR1zKisKqdeUWmx1vmCenFx12Notcp8oD",
  "key6": "4zPE2Y8V9wW8No6MgEEcDW6HAVb2EAufoPs4kK2cospurUfdxMuabAzwvQ5idUPPHpJQzDVSE1XJtVmEJcNRVPnS",
  "key7": "2KBE5s6wZZurZCUJZ6iPmMKh3RyG8QKAy1nKPU8X1ZLffviMHoWrD7AMeqmvJ2Q86923LT5cYZxaSh71dY9LydDe",
  "key8": "5BqRDabjxYiZFBeBFoXAdPC6wkswd8ZpiWx4HCgEM1D7dnvMZa1LCHr41s64wuGsgNf9NTDBxmPCeFVptRY86CY2",
  "key9": "4pGr2vCQnAFPRmBgpJNqdCBZV8ov1vis1MvRGpVHQH5BLBxKnbAyqFSSBD4wmjCnJWmHm9GYkqkpNkuKzEBDHLnR",
  "key10": "2gLTo4TjPSuAjJXq9Q2qhMTeXhzWExKXWfpkTPvYKQ4rWmW7feS6EKD7gpfHFcBYSanUmc2zjKytGJEPJ11A9Yip",
  "key11": "3ADFUv1KUEXJKsBXF8STFDvxJBGkJAZdgs2hRLvtAUe3rs7zg5bT6nFaZJqifWnZ6ey7Mhuf9MUV6YDFu2i8UwWs",
  "key12": "23ZJ2jVKf7BTuushxKaytcEQK5ZbxpVHGjyYFe3cHhdoQbqJDn3aUN6AjVxr3qSnXbEfhxVKoJfnfNo4SwyrXcCp",
  "key13": "5FVpp5ZqDJm88AVdStD4R1F2ihiPgi8BGwo3q4BjXYv4K6rBMjXdDt8aWq3PyCMbjeSnvUX3R3VH3EYVGv5pTxUF",
  "key14": "Qw7bU5DgKm2pThG1jiwkMjQA3sUbDsLuphRY5xZxmmP4mkTRAYACavMMpkPn1uta1r9wUq3b7BidxxnkW99x9sw",
  "key15": "64bYbD22MptcoTHRP2LePhvyU7c5MKc9bkN5c1GxGuHWCK8U5E3Px9exA42sziBCYBQ5TmymLmmS8zb9DW3fRB9U",
  "key16": "36dfMqZFALRGHRjNkFjsUEXDDMREgvbxFK1mCyoGwPXKDjS2nLDrUq7HSDyR8dTMKQjJ3aFSpWSKoBGoV1X7wGzT",
  "key17": "45DjiUVYDZwprmtsVecq5TYiGVg2RHp2haemWZZM4kcBgBopfiP9MuE7HNEZLEXXD7EhNgPNKRYXrAbqJVUbhjdt",
  "key18": "5iP4rqnLfSRV1TuuGcP36BjkqRuNkCYyhPE4nSwHK2Gj9wYRUkU2azxwHb7jVnE7BJtunK8dzHb4H2L8Jer6ePbq",
  "key19": "2eYHs8atzpFWnN14GtedpnbHV9UXopi6HkDCwCsNboCG3M19uFSBVaBBjD3pgb4EEosJQ6bYM7sHzCpoA7uPeik9",
  "key20": "5bhXicw3a3D3wc7vQ1m5fvvSLGDXTARUwXLhHCknUwpQS9F3Caniwjy2KFnimNkXS1T2r7kCaNR5W6VgYeg6ZvEU",
  "key21": "iEC4ZUJ22K9tEVPYvhEPpUQWt4Ft7ZtMSsL127UjQmr8TGtQcRXC9p36gZc1PpiQAyzwgeUWy9RfQkVxGPtxa1o",
  "key22": "KgX7B5wZVdaCX89HwMdnqvsfhXgX9CE4EYR6DvkrgaModhYTMFjhsPJB5Y48hvBxVLx4Dh2zMGnF3ChoxkGNjjF",
  "key23": "2f4Zvqgxb6crvfy2eMcGaLDtRaV3G9jt7hP3eN1akxh7AAfyu2WTnXsx5EvKQitgxfacgexyhkxKDRiu1LLxWEuk",
  "key24": "36sbG8RiAvwQKVUY59hT4H1r3SzLSvuVLKQy1K9UFazjAQkCue8zGWw8RibnewPU5Z1GAZFqk4EH1ckVMEL4ac8U",
  "key25": "4yJXj1DG3Z6kJ58SdiVqi67pSMcMt8m54a7h7vZpeEbSk4TYkZEoSBf3Kw9GaTteY7u7PYdnobM3koG4bzbWo85N",
  "key26": "2wTWvTfNzkJHJjdsLhUxryejTXymtFkYZqhSvDYfFUaYBK2qajXW8kb7ZBBuFVA3mT6Q18gb7Y4mBeJEGprcx7ZG",
  "key27": "58XJNUzmSaSk83vxq11JKuMYmTJL28YTJp6SxACbRJ7o3goHJxWenvgyRccZyNJTax7BRsFQ3TG1zW1gdGqibY2K",
  "key28": "5sCQNmcujeBTJiMkGLKVVjN3uWoK7Y42QWxGa4EmmUum72m52dS331r2d4csVmH9My94a9PUxZiN9jc4eTtZoZbP",
  "key29": "34t8djkibXXVojyUPfAe4hcU7HrLjojqgfFVtbybvW9A2QHBe7Fcz92siRmjg2i1fpRtvgQABi3izSDskiCqKXUz",
  "key30": "3YDbyFpoLsM4sTXKB8eSRtXNtyfDCeUhS8vKDDiZ1dib8Xf8UNKnerZdqEvZMYbT6fX2s2J6bF5KPYwNGe4q36wR",
  "key31": "238Tg1iefG4E5psbzkhJ3h4qv4a5csaK8WHYM79BjLHL7F8tT52soKc8MA1b1DDw6SjzWjV76TZ4oqi1i7s44Ru1",
  "key32": "4hoR3mnocKjux6kZCsujuuFtsEmYJPAQu8y29A9oFsjw4DH9xhmKDpji45RBQyZLjp5UPKYs4EngnFUUdiLcTYhq",
  "key33": "4KjEKEMQEKwcyZDU8RVEjLTq7wLd8JypNW1SFZvH6MDz2fqeuVAwHVwWw2J6pLxuramvntAfva5X851vt1ZgqyUu",
  "key34": "mDqGwcCXLBcEYAZSKtUrbMst38n5FL8vR4d2qHAaojtHrCYbGYhVBcWqSzTwgeN5Y1ELbDPWHfM82y6C67zLMTG",
  "key35": "FQQNwtg1s2d6fDAdbs3QhrgmK6KDxGbxufDUq1MrECdL3zUo7EAKLcznHaWWkWWDNZ9Y3BRUzub2iQmRtdYeETk",
  "key36": "33YiBkT6VTFkpYUyTSh7SgDcnqcPwhue756xWxRxR9ZHL43sVGqQs2a6aeqJRCTFF1gh85PS4zXbQE4zbLFpu61r",
  "key37": "5z4Aix447zVk4F5GNHX3JGMADuZ2uGFiA1CUCbnaB4f7gPEVNF1jsks3eNJ5KRDMhx4eQbk7kcVMgMWuEaSvbdBy",
  "key38": "p2tWXQrWdA4s9sM8hQfwKf5wLeT2sun9YdAomQmeuK8YzK8dwH6oEQvNX62KhcBRqyh4w9ZFwimKTayJFKqqZ4y",
  "key39": "31XGVxuAbNsiX25VFtvB2nkYNpng3e5Xkoy5LQSbXSDhq2NAGbsYstaKY8uA9frSkveJLNJtpGoncKxQvkj2gdzA",
  "key40": "UsxvNfQCtKXb39xapieKBLkM8d7pbUiBm5msfGVpNVBirwMHeS1AEBMSCVy1HyAAS2153bKbWwS4aeWT8QxP1LR",
  "key41": "285Cg5mGeNFGxxG2iXudq6mUeJmWswQGWptVVrFSuk19DLAw9N7tUWvyaYGxCvQb8xpJsUjYhXp6Rrwo9LkxSmKg",
  "key42": "4QjhrSGqBhE8rKqnu5WynUpdXnVKg3ixdU2GkiMU5Tmott1uPFGNjXR8fdtgEgq9MySRFVf2fDsWpNeTGw455CmS",
  "key43": "fXZBbecKEac4jcA8zSgU9duhHtzvYhLg4V8nh9jq96rK8x3jawzxorg8sgXu266kKYieNKFxqLh6GRZUmEs7MrU",
  "key44": "43y44gUCFsPUQ56wUWUepo8NbaUG3vETLEXFazr3pjAPan4bnDTEwR8asr9TJJjDWkS7Swf5y8ZjRqbmUuko1bHq",
  "key45": "43qStqmUAsAmeN51vDPDXxFEh2YLq32Z9FpVqTEV2MwmBtgLDSzJ4JPvVHQFey35we7bRigfWFgkTnWkVuqFZgae",
  "key46": "3gjKFLvNtRGiqAUzU3x6rn1RwgqdHkAbj5UrJ4AxDMGWgzk9pepdV1qNiYLR5GozhzLC8d7AdXrDsUpZbyqxjQYk",
  "key47": "32pF6GCqWAcV9XELFfzij4SaRFYCQ7in4zX92EHocsycGq1PG4tTK6mULCXpRbHkH3NezRLQeykbSUmTtyDncysA"
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
