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
    "4FxZDU9aySj8Ev13Cu2pQWHEn8N6khsYK695pDvLvogp1G3jZ6fT7f1EhHFeR9Fqc8gNxYAFNpsTnbuL9N7rUYLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TxWqr2XxeDoWEQLxyAh16ZFkMsdm9zKj9DxmH6zgBkLbYWRMuxDTGqSYfXXi7DAWBVoGrAHDB2kM9DaEncXYQf3",
  "key1": "46et2zpyHdhRBoGjs7KyNmR5Btkb9HoKNGUZ7W9z6JiyjzWuEcqtusC7mwRU7b2ZpMabjSL6qn6pbEvgR15HNQFv",
  "key2": "2gCaCEcuE2q8XDN1kt8SnPTvHPPcZnL4mkRwWfB3r3ag49jYgMeEmCbd49CsRPqDRevS6cY6zGQrhSiFWv6B94FT",
  "key3": "5SopLogia6CM2DadcEvqoTg67q3jKHZ6Yd7VeZVZ27wPxz8kkwd82mYqjuLwfdj6ai3BkNZ1HHovMkBezBxcUBa",
  "key4": "5STQrXSzJtU6V7jZvyy49Qhvpmq738TZ78RDqtM4387Wnb6MLYa9n6tuAyhwC24qNBcCa48Zr9YLE2VXoG1AjE5f",
  "key5": "3zZ6vu49T1DVoopRdv1ohBkjioLnDE3BsYR356uK2aTMJYcNGEiV47gM7WhvqnC7APMDRdK2j8EDjNH5UyxjpDUN",
  "key6": "yJuQ8fFABCWsKigAZ16koJEVLxwyMwc73UCfN81E4w1kSxiPrBshijJ4rE6JTg1zQ5JXDCmMqkkBQ4vVpd4jQY7",
  "key7": "LWaK4gvYZcgwpzQaw361hZff6XoLMAz53Cff2U7ShnwHSWyngHvq88HFcKBPR2y9zEnFBFLLdbww5TeQimz7NPQ",
  "key8": "4GN4bSZXpav4vBYaxfE3wiUeQ6K5gQFu5wafe4LfgoS1r47hVYcjfFfwM6cF5B5y9fq1eGPtBx5RYcfrt5tDp7Uz",
  "key9": "5VxXR1QmG7y5HBx2uH4gM35Pc3fmEk1kNekgaq34djCTh1jmpZU9j62rVoFV9jAKfEFkoTBvye7VCjsSj4Mz6JC5",
  "key10": "4to2v6CDqPF5Zrh3r8UtmxJybHEf4XsJvtyNYxnAW5ufetnh2jy8YE82yk8sRxyKtGbHfYtjiFPURT7aDBM6YMtF",
  "key11": "jKk6MPsdec6wJbMaS5vu334BZa25YtBMj68zV9pFwgHoHpmtnHxrD25MhLXuPaFygtdgn6ud32aHVb4xUd1t7XR",
  "key12": "2D3QYndWppRNTjRkaGag9TnWmhEmy2U1YFQKyHT6CAor8uo5Dt4F74evc7dHxXMncd61C1RYCWeXHoMWdSTBUP1v",
  "key13": "5MgWpFVX6p9716HzmPhRAEFooh22PJt16bHpSAeA49FXbDc3Zdgdibj6hSDJBhVnk72eEHU5cpvy7X5A9UkJye2B",
  "key14": "4cxhDaAPcZh8vnSikuwf2qwnw7eo4xF26euQfTjpb2zoiq7S11RhtjXmkmFTrkp1Jdw8RehYSWQoqxscrpudiZYG",
  "key15": "3UDNdRQXGj2qSVfRpXzw5exPmmXuUVaTYHSJcdbp47jEmfjRjyZGPmck33xP9Pe5dnzu4Lxx8zPicB5YVu7fRjjB",
  "key16": "3KqKM7ygPsG5BSfbAbXGyvAbntH2j5LH3WBmh6RNJYoYoWUR5TstUfxaoBJfbZ6aRxRTT2vQsGD3ZQcFARdimJpR",
  "key17": "C9fQ7JooxhKFPFvgzJr794xSvKGeuVzRhyEa6RUdr6jJUL2RWnXtzr6X7fL1BjHhDgSEncaC13kMvPgaxYRMGbH",
  "key18": "4fU11e9DAZPe5e6bYtBWHa4T2SBEEDo4NKwPvfq4BHMx3UDbejxLWqVM4gHd8bj5Bi4B1FPCTNmMPHPrmAiQS1ir",
  "key19": "5JmKMFr5bUWtHNoAoM4CBdaV3XJkH8ysNW1dnSTS7NBPJg1TQn5qPMY5sLKvx3KHZ3W4o3k8AhDs7kWCNLppyeXg",
  "key20": "9bFqHThnamYjnnGk44q7jpLwNbZLvxaUXrzJ97G39RdVUzo3e67EEexniDnpHFWjuoVjacoQ3JPJ1NS9BUnbLET",
  "key21": "kbSumYp6j4vKUZaC6G7i5Bhqa4vjD6RFqEUN4K6QzxAMVFe29oghJQJBeKE9siRcLDL9CL6K2qSksyTorkFZNJ5",
  "key22": "47jFdYg5FqAJTp9Ukun3t6BhL7hEaskBzy6QcMjumn2P5Wr8Mod3xNxk9jscnrt6uKwoG2Jiiz58DGhT6skskE1k",
  "key23": "4sUYMpGgTdW44pb574gCZ5w5PSXAw1FkghncHJeViTF1mRsdtA41Sx5VFtk9R37djHnPkEiXtmctMbVJAX8o4PKj",
  "key24": "7TQ97XwHdt3i8G9DkbDMkirJBHKSyBRDWwJWRC4HWQWkfeKUjmi1Y4jtDV8gSjGpmdcnJZfFJXGmeAx9gHzJA97",
  "key25": "61fNNw3jdsGv1yCTGoeyaHTTjYqoa48hyKgfgZRu17nkAub4dWLVXvj6JNDpVpUpjZWXwyBfonxe3gKVcjM2U18T",
  "key26": "3xYuhMYdGpGVe5VxRoVgGyHLYB6b67CfDWCmWDLsHzeBtyVdL1hJ9mgtFRB169NBerwecHcF65AProtdgFJpDAoH",
  "key27": "5hKseVmUZjDAxiGYPimYGpqpHkZQSyTdYJjLvwVKaMeEkoSDRYQGkHAbAtJxfDgNiBupc2SRBKirWehSmsjZdfyC",
  "key28": "3tMACLo9kG3SNVshkS2pZ6mSnB1MFaJa3K3xkhEpUi6LW4Q5ER6WX1YxggYYRxNGSW4PqMUeYydWZ3xtS2HkQuj5",
  "key29": "NDrQHysaPZAt1kkPa9FsD9HjyrqQgJt3PexYZyuqM1i564ErGPBLPbjk4AiDphqpPvshBeKXAHqssp6sdXQqChm",
  "key30": "3vSDet1evPazAYcKBeAYdpcGKTMjDWZCDaE8PuNbijC2fZcXPM2dREfTBxyzFPf83cL1zJh2C2VmsVExBi1VLhTB",
  "key31": "2uJjTA4smWoGgaj65G1sLk3a7ZLijeGhpnATbdAFKMArBpjG8TXSGgUELNASELgJQPa7aQ17wdMmyZC3x6k3gC8g",
  "key32": "67KUVm6SzqSPGYNkubZcx4n5PX9utWG94W6PKBDBApYHPTQtFPQpSm8eUbZVZ9q8zQzHCz3EXMRyombJFamCHPtA",
  "key33": "2UuC1C6ywByWNTMKVPgDX7pUoUGCmcEC4XFR4nWH2q2TbaZbG3A8uYQhV8XWxry4yn4JBiDv4xv5nayQwJqMbKMa",
  "key34": "4rxJXGJeko3xi2PSXZk4MZuNWhAherBewLX3JnWdzEHD5jZZxFaFgFmpXyNPQqxiDqMEsPFKHtrCXm1kbeM5XKcY",
  "key35": "5SAeprsoDxFjqZy7CK8n7tmnpVB5mzPvWKLDShR6Rtf7Bvm8Uqmm96keWHEfyyGPaPYGozmkRVGhgU672L3G9bkX",
  "key36": "Z6ZkJaM3r5M3AuucmbU9Jkj4tEXyiDDVao3Kmu8mRCQ9SZgbhAtKV6ofjvHaF68YBcGcchF3DduLF9mCqbFHYrN",
  "key37": "5pN7nNHGYDEYCuqB1pQetGXjceKebXHN13SH1gXMQ3dzQTzYK4mPA15uR2vmkWNxTiSz33Ei42X6ohiRzVjRET2x",
  "key38": "4R3M6LNovsxbeynMUL8V2t7sFFJf5ZvP7YbCXdz6UhLu3rAPjk8yXFiaNKaVpJW1k7V7wXyMjwTNTFQVP5u92TNT",
  "key39": "4ykWxd9Jz1BHTB4DwEHM9Xp64oawyiabQF59H35VYFMt76j64eLz397bxzm9eewPS7HJZcs1Z3aVqZCv5RC1p5Yc",
  "key40": "3BfPdSnuKRsmyKFDUN1xYV14dFpLg9f8bUtwFitmknExWEDKwR3AhqcuuNNqysPdyCcXWN4snoDtagNkEQf2bsW3",
  "key41": "CicWUExMDQ7HZGWvhUSbzt8jczLYRHtnskHiw7TGeUvrVoUEfqnzyyqvcMuqKFK9a3D2AppUy4wxMeaaRL5hwmG",
  "key42": "4JPL59KeRu6YG8XPePUvtB6MTW5R7UTbXhhcw3yuR7zzeJJ2b6vnjpqACuE5sXVAv6wUfUNh259PWZPkC4zBAg6W",
  "key43": "4TKprjeRz2bnDhNJozyV5Sk9ncghi9PKmennndbgxCZ6tgCMaDYiwFCjw5cWrJurmWhkzB2aysCYzbScnMKJeyNo",
  "key44": "2wqpBUAsXyfLE39w7pRuCExoDPGJoaPa6Cn93Qxqa1mVSc98dtgje8CPXZWiChbTQLM7Ffsb11LcJ7K2kG8DUeRJ",
  "key45": "BLcaij94C19aV6sBeKQNbbdeKejaeWdzfPpNx5n6fpYjne3YZonHzGpTyMjE5zjMyoUkfjUeZKM8ARkpMe1xy2n",
  "key46": "49TwaQzDrUyfkG8PUZoPR4p6cChMCnUwueqoj3rPoN9vvVEFQH25Vzkvx4GjPZo5ZByqVW7o1gAJfiUW9NDBtSP3",
  "key47": "4rV24tsQu6KtiH7SSRzuf3u3HbYrKSpmxAmf8nTCzKpjHhv3GvSj6WUPVwjDbv5LvqEJfGBh5CZtnNU4LB9tU2Xa",
  "key48": "bqLz9eLcZBU4xzYxqFqUNkN9CeYLqf2nEPy44wYULwAjYLTu6MQYecv6CGGtfmGHGTCcxeCruZuHCcb9gSjsp2P",
  "key49": "4AZL3cXCoy4f5i8pYtZGtemntwXXt81y35exxgsBviFUhLry8BJuEyJCctWzeXyuBZfuScMYK74Q9HQjvfSfB9Uy"
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
