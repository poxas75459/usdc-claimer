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
    "t1y4G6tTskWdu6zDQi8rXXivKSLSDUC29bRLrCJFGUaeReBP1B4K7TDTpbTUwPzrG5J4fhJChADDQKEqZu4mDY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WeaVQADmkZmGYKsEd4UH12KUHvudWnjuMP74nj7LNoYcrfaKMBXziGwzFSyY6zGstqNC6EYuA3PByq6NorTRbd",
  "key1": "65WTVUk3YR5cqab1o8o6NwHPzyE6qicZDudKgVFKcWZBAneMWfwo9jcaKxcgq6wf179G7fWRipCFzMXie7MPENyS",
  "key2": "5S4S6HKorg7qhgciKJwvBQqSfkazuJJmcQHXq3pTE5tB29vnqCZSnQKosCwKHtKntaVrWDfbQZx3rUANo2xMbxpj",
  "key3": "4LHepBYEg9jtex73RXLn2oyRXgSU8VkfrDR4iJTso6pJzvh9wM3rtKnrhrZ99tAiQ4w5XBQ6TQBav7Rkc3XW5Jx8",
  "key4": "29obwigjdk39JM5BVp4fCm9aQiVRSBvEqQcxFXX1zQiWQ4Zq5zpJZEzrd1LJdErGpkwWmBemFLpUsZwqpX7us7NE",
  "key5": "4DWvmswYfmKPCoaQ1vw3RoK2MGoVzedBaP7xsL925KnChue1UV8fuoGk1D8BZrom6A2QatABZghVLruGfvvxRD51",
  "key6": "3ETyFcRtdUSuacDco6PNmxPyV9sFCyLuxXcJqxeTEZZY5wriC88bLup8eZaDrDp953UUa7bUDriACq3MYDEr6zea",
  "key7": "2uQXNop7ptmXW5LUhtXBZJrNK3AxsUnV6wuaFrrVgYXNBCKz2xYmkZx9EVL4fE1VbvAnxVcT2PkTwEggJ1UJ7Ypd",
  "key8": "3LtwLn8EwjqC92gJsP9gPNPfZdb79Gj9dQRnjXXEVnhtKsMWBUyrGhMTx452ywaR1J2reDCfxfzBDPG2MoHYNPLh",
  "key9": "52gn8TvnuUWBaAhZEK3LZeXMg9t6wWnronUgisdsvcVGSeSUfUTvmbHZTkmhgb4CPJs6teUHZM1tuahJszduJNC7",
  "key10": "3aALWN4skveeFqahhynvKu16J4u6hHuPx3ZQAmU3tnAsGUbtxEwppjycyomisFZT94V76dgBXB7vHJg7KgaQLgye",
  "key11": "XNrScxHnSxSgK8kZVhsjD661WSwwCuEhE5xcyQbHrU42KVcyKxBz8h2W2zvZU4re2QAB6aK2mdFxLvLsyNDBZo6",
  "key12": "r1VU8m9csTd1QLz7oc61BYWfL7j47bzFTRwprHUQuFdKJ7ukt1ykPLbcn9CaqZhSJFhoWdexrAzUiEkem6bET8a",
  "key13": "3C7ukVYxmowbfuN6rkour6WyaECsT43TZMmvctZuoZUsUpX4g3WG9mrkE3nkqwsZkcK1WdipoymAB4v2X36MsJpj",
  "key14": "3jB3inSESnyi6VZpVYKF19eA9fdT4zSNsQt5q55CeD969K499UHBynBhqEdaVL5vJdWyq6SbZJqwiBiWf5Jr6P3x",
  "key15": "5epZVeDKakGg3d678ifiXekA496RVo3f7SUC3gncJbjRHdWndbUGamz9zzEieVeqhXVrczMhvKzWgmWFBm9vSQbK",
  "key16": "3SwNkRdBGnk9efufd66VHatoDdeoQgtkTa7b9W7FBe4v8WKcdxEiLX3t6yRttZmEQjXxA8QQdGiKaR4Yfiqv3UAX",
  "key17": "ikXKgq2namJKHZei85seS77PMEmN2upgm3knWcpPH5s2uiiiwZWBVhRnTR3E8wC1zKsC3jEwW4TH1zd3oKw2A5M",
  "key18": "3nNhkNy9KbXZesFSRHi6PfaTJZJ1YBcX5buLJotXjaCH5Wrn7AztF5zy8KoVScNpdZRYDr769g6JuHbpie6RT9eH",
  "key19": "5oz2DdJaoBPpZuZ2Hqtnaw85BWQZZ6Fvs8kH5DC6wWhFKccCMVW1bJRppnwsoc15C7RqBrYxePicptFBrW9jAHh9",
  "key20": "2PZmmF3B8DCcxtJL3eWfL8gAQ4tbNDphMsvbFJkxUeEKRNDU99y4rrg3ghybGGqgdnr2DmUD21W3Ep5qzi96MREx",
  "key21": "KFGHmJGSesMXQvsEmArLrUh1AKTvLmNesuGTdApd5c7TwbDuYB2ciffDbL4uR87cvjBuCee8SWFj4YH6eRgDbo6",
  "key22": "2tUkyPQLF4F53A5nU1zoQoznAHfJ2342Rc6JJyuz5LxqzFC5jhjKqnwqmoLT4MW6DbARZfFzF97abCi8fmgbfoz",
  "key23": "52hzo9yqhnB3tcSio2Mbe6M9f2qHAxtfmTmVFsKKUjT5AeQTVxKzUmxGBXHwriNknEHeJq5WRkucBjMZsXYwP7XW",
  "key24": "2cxLHHEF2mr6nnfhPUoSwF7nhbv1VMjczDgL84LhcSVqXfuZ64wiVPBDegHyWzGJhXnfx51xnJf3qzUgF2hNehNF",
  "key25": "3Z6WLpVQFF5WKHBVfA91EUqbTjLUjdyvRJUctqFAfBKDwaWyCi5vGaykTzTfhHmRQsSBVKHTJhNmn9m95DfovD4k",
  "key26": "2eNnnXd8hQRsNV3z1o78m1o51otXETYZV3tmf3wE6j97UjLte9122zZJNNxbXUVHT5hiwrVDvcePRUeEMnRdnzkx",
  "key27": "65V6aPqHJT19UzH3wPypfiFckSeCapT8LAYTPXaEaTMKLdGfJhzpJg6PQpmaTW6TxQU5AA93BxPZGFnZUBxW59do",
  "key28": "5dnGZPvqktiY2wwn794Lx8Wwhz15tvUTCqEjNCmuDcrWUf1RQQxTR9GziJrEHNYSTzMsQxqULmQ7dqGAwa5q5A8z",
  "key29": "p9F37u1zoaNAUk3YrdyCNVwncHQGkbc7LnxCAgyaHUFvZiMcBytdL6nnmhUVUwZuk1BSbv6yLJBffNsMvoVESmp",
  "key30": "5MhxSHUETtfChLh8pc9UfZtdJYF3FfRa6o2e7CtccwR1KQwGSsZCfyn6hXafUdU41qBRWHCEKMzZXm29LhLmKitv",
  "key31": "3fTsrsYzjkuVcpVBxqmPXT1Q2x1YhczHtLsVbe3JKXWeu8fZLWMcK78ottNdTViZDDSeEAAaWZPM7waTsNzxUgoS",
  "key32": "47wWLTLh4QiBfoFaGuKELN83qUrMAg23KU8uVfTVb6NwTdAjTMHnaXWTnBbRWuu2svJSUEyWvv3KdPa5ceHBgW2Z",
  "key33": "43zQywyEsgVESqbshCmNJacSpCpy9LRfsjUPF4QDXfkU393KfiD1D5oTH2ngsQHtc9RYCK5uu5B5KFdT5rSrNKie",
  "key34": "5jBTJZnTQpvcy5fMeA232nSjV8XwsSnVbQ7g6zniCbBDCBwAsLS9dosqvewbCVBGHF4uxh4RwXNjLrov5G6otiGX",
  "key35": "mNrT2QZHZnYaRa6MsbsY2a63XfN7B4UkHWry3GjPtDKyJSgYYWFkhai19VpbTSQKtbUX9Mps13pcwvVRVg1cMvm",
  "key36": "8w8ax5Jd7GcWnCCZUA4BDXEkkvk24ZXs6EA64RW38yQTAAFJCxLAYnbNfsLBaikdYZs9Fa8cHU2tVWqC4NkHyt9",
  "key37": "5pVL2jgY6AyUzSk4kwvfxkSemUFa4FCBpfeUL4sKV6MYHaLoxDfwmZ4veXzLkqvCLH4pCcfhgpdZzqdEgKqHJE2f",
  "key38": "ucZSDk5JD7EZix3yzyzZqZEghWDXP1EN6CLUeqwt1gHzGR7e9iPSxmDvRXc2XaB9EhywMTqokSNoTERMmAmKJcP",
  "key39": "eJJobuXMJwVotCucPZUhCn7mGN3fDs9oL3h3mDbSo7fgpytC7ztnoshK3CMK3c6pCG6bXSSdZxVTzQp3YuBTHf3",
  "key40": "2eZEzowGnxPu29QNYDQj87X18uMUq3JvkWjx8ZRfCsSVAZZuddmCQqD2s4UX3dVoQswbvLi124bYnH8Ap997S3M3",
  "key41": "2W8bgDB7Pcqy2fGuxZRjsSQo4GnmKgbypExYojMUNTGcsmdn931C3zJWwz8YH5uVgwSA9cBYZFyYc2jGbeVyJpmq",
  "key42": "sLhpkY6BWSXFaK5zeWgfNsUQwpmAH9JxzRiY8gLZu6yNXGpyjg7Hz3bskQydGwSeSw5Zyarp9Wx3ZGj1qh6dRD8",
  "key43": "4kKzpzoY6nFSDrHYEMecjJiozKtAQ2iaCso97jx9BsnspuEmsGus7JotGaHHtHdqfUmj54kkZYnp9NNEDV7Wx8Ls",
  "key44": "39FxnoUPpHhj8Y6K67nC7Mwkf7x5o6X1mLvn3hyQEQ1f3GFLN4GwBtfHsjksw14o9aCy3PbSmMcP55hW24Ddbpjs",
  "key45": "2kio6KEgHaWYLLecn4tthu1iq36bdzrTFEyBHmuT4mXZZvFN9Wx7J1y5XTY4k6SvzGuWFsNu2ajQUyRorxFiJGp4",
  "key46": "2ukueuN8rwTtTjATAaRhBWLofcPU2FCPB4fKG3GQAnftckKtUt1SB2zHtouRm29WZBxxDZJaQDC6TvqdfhC7iE3K",
  "key47": "4zUPJQaEb8p6naDqeXtxgN3E5u4G2Lk66DUemddLsCzeZkrJdPT9HrHZZ9jMK1VYJb8QnuddRV1MNjHc8DqUrsZS",
  "key48": "F244RPsFTLXfz1hH6w8BCnHiZFKZkUDV6TpHocE6gMYRtrJHxMyTpeVvVb9JJpBonLQYM7WY8LkZtDSNPH1i4oA"
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
