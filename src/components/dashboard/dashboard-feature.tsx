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
    "5HGz5pQgTegqQNoGgmsjsrZkaqUCXVRKB9uEiu7Z3Zch7SURcwF1tSHfr5HAZc2nCfKtGg6xYYFBn1UnTr4DPAkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LM68k4jJSo7iuoHpNKa6NSfhR3dAGw6VUDvo12vJ7LYmL6bFoFYZ9y67U1D3RhQK32b7iWMFjdMEFWpwygYFP5t",
  "key1": "4axP6FbyUBD7ydUp8quSRVqgewFx2zZ7czvdGGwNgGkWkgaubYREXQ3mTQhwhq9LuVQCUVBXvQ2oewiRzovxixKQ",
  "key2": "3KhFELa4Pb1UWY22sUeuSVWg5k1q5kHhHo7HTuhJmxpQ388jEAJYJhEevXYpugKpDSXvikPDPu18YurJReBvn8Ac",
  "key3": "4JuhjtKzUEmsceimLN8SuAcK5WCZkNM2vp23PkEXfCWKGmXuyHPaQRpWnoz4hF8LPMWfGsjGM1JBBR5AmufeTnPN",
  "key4": "2ercp56WLUgtDNAj9HoVfKCSZ7YyG6rtKLp2bHRTRBoUhM6VpSQzvfVy1Yiqy83NaN32Dh8eQpNqVAHzxkkvpBWA",
  "key5": "X7VZ5YoDxt96GoDq6APNctJKzBqyBKgnN7v1mGmBCkDX7QT4JZszw7UzbCa52Yfzztafs1LV5336sjpSPHbKWyo",
  "key6": "3LA262FjBbbC7RcqSDYphhVqDkambjmz3RYzAbQ27STBpUAi8U8uVa3H9YZnYLvJEfBwjuxBtAbR3mW1HZRf8ovX",
  "key7": "Wrq5F7wPS7jf4W4d5A4ym2gRp3LzWCwV1APfnjSpKHvV2KEdR6QpbmU2Uqg6uPZTDGHQvvuPza58VpJMk3tPWeF",
  "key8": "2543YPgjnafJB7rhVJWGd9au8QWrAr2p3HpaWKGSLtULp1nZG4GiroVFDkUgfCKsRtoYFgSYrqrugfPBNyuvZQFn",
  "key9": "2zdioy5qqqHGu3yWk5VCDUZCPGppeJvi21XKpCYGfQ2PE9yLyRoVXUSXvv1ywKi1XLRokUccexLkVzQd5G8XHcRv",
  "key10": "3jEFdGtZh1QtqM7bRCR7HihPz4CeNFa51y2dyxJYNBt5zNdVxW2U11o5B9ZFoKu2He4dKHYpNuw9yx36xK72DKo5",
  "key11": "novwGsHHuEx1HWTfDDQj4DnwtsQz62GCaBrkud3cBe3vDw4CuHjWne3YyE71gwF7amo3FpdCnD1LTXDD9XfVBYW",
  "key12": "3x6BKfNUzFFhiFU6vnhW3ESuigYfAdHDk4mWD3KyVbAR1YYCj2RyzuTZpQGgX8Tg3KJJd1ttnkZtvuq6TKVyP4tN",
  "key13": "5fJypBZMgaHbC2H42ZVbY3QjrJZj1JkzTMkWRDEy4SZ5FQVrTseYE8dqtYYe3TzTThx6PSSgA9pa8rUU1NRByUqW",
  "key14": "3mC3wnkyJ72XPo375WuE9fxiK9joYegJKsSN1L9MuyxLbJbEhxbShYjvHmvTSSPdwsxMc13Vw5k7ZZdCN83YvSLR",
  "key15": "2g3ua3Nhh792rSLaVdJChWypiw9QaH8yVFMRpqP3rjuz2rK7x9BPo7kY72JG7PgEdgZ2J5MnxFHnJNP61uuDHJkv",
  "key16": "E8CQFnXi4WihyCbhosXFT4P9i35fNS1RwyGdQHtGgWWgc6heiqmTkxug31QsaEqYeBvVhLNqoisfdjbSJ4XUEGy",
  "key17": "21As16MS6XVZiTanC4bdssYmm7mg4wJRP9XxhuQJyhtLeHzXUJJn7CZQJLMkwPuh8mNXpQC7ic3ncfUDf7nqQ1VZ",
  "key18": "5c5dduQTsAyzARsnVRb9X14Y3yVqnSKrY46ZsVe6qots6SEfscPDKPCN64jFBsHrDZfcsZ7LTSkZ8scpYqzjQgFo",
  "key19": "54QxJLygD5WTLQFv7n3K8S3KHK9oU2Lf4hhNzVM8QCm1Joa2zZr7ezNSpSRTsmkHjGkPgsxjH5bPRQLN7tqzGgYr",
  "key20": "YaQKAPVvSpo6amswT94rzpV4SzuXHY8iw5LLuKHyK7ZUWLBhveLJmS3pMi9hjs94EaSjyhgNhT5xtEoMtXjoJiJ",
  "key21": "3ZVVyqj6Y3mv7eFGEHvDKXnxyNwWiuLD8skJNsupa8e1wNY2o6FNKM52r65Co1Z9FnNza35kRebs3QvR8izotf6s",
  "key22": "3an1ED3obhj3NufmsirRpfW4P4i1hKSX3q51jSt6wQBZhLu1uGYWyJkz6nemPwNL2hNpNBU9gF1wKw8R4onEvDfy",
  "key23": "2yLFzLEu3wroMMBXrtK8eH54E5uc838H4jCpe2fj4TvZUnZ4KcmSmHfbvJAm9LqGBjBG8ZuCeFDR7FNWRpXjyHBX",
  "key24": "39pKL17nm3yvSQMZHX4ecsUYru4V3219ttUFnJ9R9qoRvTsiWqcEhDqJaoWZUuSaYrVKegAJAh5YavcFNfnSZw1m",
  "key25": "2zq3xRADDaSWZfSiUoRfuU6ibHYGv8Pd3vpPBBaNxbw71ByucshwBY6ZMWSfdeAu7SRh93xHuammy6EZKu9ZeGu",
  "key26": "3toAaMpqZwM98NrE6a5FpB32BW1EqmxKq2gBZFxRAvhsi1uVXuhjW7KnbbiNH2jag5U7dGKinVcW6kgbQXxPzRcc",
  "key27": "4CYNgEddyg3kcnmYneDdkJ2hSsqRgVMxgRVYeiv5zrDJ7wVT2bh2PoQGrBArDmjU23ute9WucRrdRDM8HNtP44x2",
  "key28": "6qyMR8SAKBD2PczHXAo7Ruhae26gdnBEDbhsuoi4wTpx5uwhTcp5kEZZiTTmsxJDj2JKsP2YnoyVxN9hUdq2UM3",
  "key29": "4Z9NWywhn1LryuzaQmnV3ZsZzZUwXnKVvWiHC9kvS4r81cMUe9wcGXTPbE4QW3Vcehx6DEhRVeCsRuMvcrtdZtYM",
  "key30": "2daxwuqcHKPDqgqL8zCTd1WCpJGPyvgvKhWBN37oPdBU4mSvnyJjw5qyeV7VpMJoHe3oj6C8uaCGKw8p26QqQWKD",
  "key31": "2eubqLHPxowKGvgxayDfDtVwiBqHnFYDBXmjik9UBMnfAhGBEdH7zeNviSr52XcmjdgAUYeDNYo9b1sPPspDtm8R",
  "key32": "3dLFc1nQMHtsJcJsBLHPjbfEXKZebECQvA1AWeQE5L2WkKWUjQbyAwewvCRm4pb51ttgpHCfvh55L7TugdWSdavP",
  "key33": "4vGEKCnofAx7jgKVffo7rgrrq4oBW7sSQU3oSHuU7RSC6HySm8zP4KbdYakpNP3mrLsecqJDHpE5p3h3RAvmbswC",
  "key34": "FpATe1fFjTGfCyn9fL7sZ2QoGyP5QMXL5ADDXEBeT6HpGQJkPHra988pU4FLqXW4o19yXEwfkZL4sXrEDucFY9g",
  "key35": "4ze9LogmJXuYwHYvkNF4YRMQGHHhMjCu1KVMdNJ8uh3Rsw8CsJSisK9M8tu8airk5vbix17WqmTHtnAPeFF8px82",
  "key36": "TWEwaYoj7veUpgEtpwA5DUWwfJQfaA3j4j4sSq5CgcCYa51C9R7BG7wjJwZAS4Gis2Ux57nkBTAAcL41XfZWeSt",
  "key37": "4HkoWMUd17hFV8JHGuVPkZMkW899HaSjsk3mcJDex8GBJxQ2vcx6bqViuXUmwr8FxMWarLkxgYR35P7f3NdcK77b",
  "key38": "JimpQu2TamTudP1K2xn99ixnHiWhudfPxRnkaXVEHSrxDfbEXvTQdq8eSRtJofaK3EuKZ8S2T5MWA2bw8gtDqVQ",
  "key39": "BDb4JqQhmgiy2MUwUb2CSCYzLoXAdbea3P1oiEfqTZzBdYx3CZNxPdAaoFtiHgxj1DaRvvrA9Fz6MmdyWxVVrkW",
  "key40": "3L6eFiWpA2U5sghfsWnkkuk6RVN8o3v67wexp2dEgAxF7Fu1ikAdbDtxg8nAspop96fUabNun6MFZdfpCnpS3ehD",
  "key41": "5uqhKKmKktiT3tYDihJCSaYeXpWYBPYq6nELsffJudjeKdndRoUoAbeqpwcSvCzHi3NqwYgmcQkq5vS6rduihxox",
  "key42": "5j1XtdNtwCbDBWFPPdRSWfa88hJvk9jDYXu3nNDpZ4E4Cbzd7USv8ZzJxudH1qRPXbDFi3B9GWq5LtnYxUpg3yYQ",
  "key43": "2WL3SoETLLLeBy6F6V6ue6hR8mP2T4dZ36atAhbhcGy9RiWReBTUd43uskinmpZ4TCv3zAyiQyLccXW66RvGUD39",
  "key44": "EJijwwX4sNxzPPpp9rCCbsGzeRECmzXTtx5ALjtQ5n79hW1q1FNXH66JPoRKVLxr7h3CEcWYKwHUNXGrQofrUXi",
  "key45": "wemtjcMUDrSbfDYHBA1NpiUUztvsNuaJLFG4f3YazQ3Leh7SVfSp69dCXGbuGVVBGQzQbXueGv7siwVasmZNBsP",
  "key46": "2tez5rntx3gFkYQq8hjzXz5ugEyCiexKVHH7TyhCzLS7PtGvDgRRAaEUxLmyfXRQW798VEB5rQCMrrvn81YS9XF6",
  "key47": "5x8Fm2v8Eb5bparHAGJvRGB3RAfmMRFoFn5o1QroSxi9h3zwesJ4PgVbGkJRttsTaNXgKa7s837XWTPfF21XajuA"
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
