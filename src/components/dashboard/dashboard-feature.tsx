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
    "5LTGWkWLgZqUPDK9sRW4mMoAG5zgtxxXWA2FzJgak4sBktkMtc12pcqgf3uQGdVWiETR3BGH2XtqDr37CJvEzN9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633pbYG5tygrRxKUFrvykcC3WTimLp5Sb3FHGgTyMG21ZSYEhwR35tT67ciQh65AXxatzSyxqRzDFTZnQ3akJEDa",
  "key1": "2SZ2Vj5gehsBe2a4A3MJcYAderS28feseGiZ7mHXJcL21RPA8qVBVWqwN3eoDvDzN397Cn6G6xG4DK9KjaRhAZP",
  "key2": "4NHrxpyB4tXZkWKpaLBiVBZW1Yp9u2LWW8rYBrBZXTzQaPD2VF8pueynzYWVo591B9NtXBa8Y31EUo68aEMWDFeD",
  "key3": "uQ5uTKuXpQBnD1u5FLsJG9v3u5WRQH9BA2URa88j4xw1rKciQVPJzMWF3o4a13QdSUDbAX7AkNmueih2oQyHX1b",
  "key4": "3tn3nrR9fP26dk1iEEFRqc4PSKj26jjgQqL7FhDZKg92xX811AbGtQHpKg2H12kQew7ViPva6K8sGQfjsX1ZUti",
  "key5": "cJBbtx2LPVjqCLN4j19t7AgDFZAQ1KL3tgf47Vn1A11uq1LzJrCdHmQke8okVa44P5UDEJPmJC8Jb6PYXyRM1id",
  "key6": "61EmghHd51YNKiM6KmjSkEFsAZ7rhK5SC93ZdzYXKps9aXyHSvMdEXgrHkkHGjrJXKTGG17HQ4jzkDixvBVVcYyd",
  "key7": "4aumJUEVCt4YbpPHTUdWNKMeivpvJ8ogMzp5FZEWLxrRPEL6v6vJGFCL6fhAY3wZ8Cw41YYqd52BGSie1aFZftoG",
  "key8": "2XRzuCbf2aNEXTx3PVi9Vx1CUdp3heAdqRWYELDjgq1VRxCGTW5SEahBNLemnxxggdrjRH66XUY7o8uAkSbxVVZX",
  "key9": "3bkt5HrusGzBxjNihhNMrkGyjb6hEbrfcawPoZeN5S1MKdxpXXrrCBG3oVzD55WjP2TVsNeSRe1u6KgLberqBtYM",
  "key10": "kxpDM22p4A2t1db99GQi7doBAY8EJMbocMcuGccr1HCEtit5b8nxwzfMXmzPsyp7GZ4eBBAatZ7nHqRBaqXLtmi",
  "key11": "4gRu6oPfL7ayfPmZaEgWJPUMjMCvFNqLeqsDgyJ92CsuRJtAjQQJ5fyzWhs96pjsmNuaWL5nwhtcdtbXirJWRCgx",
  "key12": "5WhcwewrWEtUUXUpKN3L4g1zFfGq3ByxkZk2xwxAZsFQ3VAGZxmdwkhKLJJFeAMrpNeGeD9xXYtrLyw2TjcYzgtV",
  "key13": "4DdXMyFHfUpqQ4e6UzPLPFmjYDVvoDEGnvwitNcb8u74hwYydmFcYz18E5SnAi1NDRp9vxe8K4RxhmBzxuRdN6Uu",
  "key14": "PmVVtqtfAEnebaevtZvz6vFuVkPjjV2LVeRgAe6aknWjHo9FDqYWREdps9MXg2m3mjxabr9kjoacU1gnGRV6D97",
  "key15": "5VLAZWU1aSUGG3djxMqiU9gXJcQJpVupUrQcWnET7JYcZtZNnZWrJaGc27Kw2DNfBNQxnP7zRt2N4HGLcB8zrzBV",
  "key16": "5XdKmet6BRk6BA3MLCLvw5dfhqEgxAKC1yyKBEQjvi3RC3ZWWvwMC31GFjqXYBaHz7eZi7pj3eztaqitYq4eyNhm",
  "key17": "2bMvqyfSPTWD6jDuSQmg2WLqKvsRVCeUzkCwD3PoPg5XJZn9iKkyheHEZS9GX8ZhiYqkGfRe7gvm2Wcw5PfMLTji",
  "key18": "3kJzWAhSh3vsunUQSNhAHzEq5jiVJZiSZ4KmGsiL6ksG3GbEDcJPLrGd1QmgqdmscXbf5Bnnjyejnc1i7Q11PDYe",
  "key19": "2M9rFLWKke4hLTZJcwZxAe3ZL3iHeyopxtKJ2owDCeWTTNaEcPpFykwDwLzhBqgwzWMTwNLTqStgMENPUvxpE8kX",
  "key20": "5dY2sw88MMcSEBHRuG9L5fM2U7r3mNEQ7ji5Y5k26maD5wPb9MHQEZ1Tya94Anf52XwoRPz2UCLpV6uiV9pX9QGv",
  "key21": "5rKi8AAAQLHurRc1osVLpheiycqEzeKe8sgeFMbp1MReqQSyrbExg3XFp7eTw3FNWpfJsvs5eaUa4hn8YmxqR2HU",
  "key22": "2Uz3CpwAGSK6jMmyXZVCyvhVzvvH87hVNfB5RKwrcDjzhWoCbJZJYt4Ywc5dMftLYi3i9gamPXZSem3j9fKWin3L",
  "key23": "5HXg9WoWGZcsqQTyUQF9pR8jcKG62ZiUD8HDXT9kbKooCdXaXFGcdoPWx4L2fSMwbmDqEVf9B1GwV4uzStyLA5Js",
  "key24": "4rBHEmaP19YcMx2oPxUMhhcmoxdikDGPWrhJPMNRfcXizwTZTpvCfyLfhM5RdysgxV5yDRmeGWjxdUZ5K1VZk3PG",
  "key25": "28uGuutBKN5iVypTSArbBCQ5NzMG4KYsmBTfvbsghX7G1rW6hNgqXBSTW52HWMGkNkq5LfyUKuhYy7euRCHCU79j",
  "key26": "5Q7aTrKFTgEkHyR9F1ivVYz7Fyi5KrYF17UqJ5FVKB5eWYr9UXnjZAjiv8WHqEZ7q7XDjocAnLh6qZT7ztUy1b7f",
  "key27": "3TtLEcR4eVVV8J4xHwx9zwzM3BtQ4N1dgBASZNqLPDGxRWBTdBqoHig55aZsWF5fMcGdTjTPmGLEiWhnDuFAyJvm",
  "key28": "5VTz7PkhErnn8TCgejojdCJPev5nc1X7ovLXJfjrF5PA2BZ2Fw8PWy2MwekjiTWTEqnh94w5GY1Pb52noMGmzFJV",
  "key29": "5JXGmD5XAhRUwkBk5bQzWHUZtFrYZLDHMnMk3qTxzQWfanau3noBmVceo3LsqrePmASjrmjPiMtXaVhxL8Es7iR9",
  "key30": "5381PVmvdJJ7XgqpbMTzSSezKcCKstScY5DKft2JeFj6Fd51Cn2ob3A4W6gwBwD2EjmpNZph5XXwx3aekuUQ8Vou",
  "key31": "gxq7x8yFhGDeFP2KcK2JfYqF44krhHNJTuAwecsNDE6kotrsBioiE4yq5KJ5fAHYDcLvnV4JFkBuGkBp5ZZWc55",
  "key32": "Q5gSw1d6CJCCCAmdcS4sjQ1z93FpYEkLTGPd7kPay8CURj9uCqepUS1XZuDvqXut6nbzsizdZmaDiHFRe9UahZs",
  "key33": "5kCC4R2RUfLA61ujHkssU2cspR9iC93LecAVwxTG75xLnG7U54uz77JDzno64ddX4aJ7bhNE9kHNnXaKkcXXBWbt",
  "key34": "2ubZu3njdw7m1yJfTbuD6ciwWmmpULUurC8XGRfP85z2VAUgVD813HMZUcYRVKy8H9uUPWmMym9jhynYVY5PhYMU",
  "key35": "45XmkU4of96A5oYuyEpx9zo6hLK7DUJzMq4zFXYCc4SUvz2yMWr2wujKm4LWbBDGo1rF1m6n1ouyopm7AprPzZSp"
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
