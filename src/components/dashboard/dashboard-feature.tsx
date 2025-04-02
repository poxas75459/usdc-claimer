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
    "3zzZwz61f7U1nByRbyirfFARfoPAfwzvonzvuqHhQyykVB41mQP2qrGpSXTJvp3oeJmnQjfNoc8vjBe7qvWZZy1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GvbPUQtgumdEABUvvHo63Ta8sSXBzzyGYBxMRRzCUngUzJJhPZu5JAgEUJC1jxERuumZAjQWLhA7mcC5kGnAhR",
  "key1": "2A4f8bNwSZnY4Bxr8tyzuc7181VY5BDuSTxfLAakCtMV8Nb6GVx6LJiy8eXaHXfbZ77Xc8RvYeaATG8zNE5dL1JU",
  "key2": "N4wjfWWtUtGHsstboCLzF9HKstqBwBawdyG5Lt2ctTRjZrxNgnQAi6Ad5rZtxrtydm6c7jnMkkFkWhcHmpYnhNe",
  "key3": "81X6NAHR2X5oT6NuF2wcELDm1A8qyDZJzPVQAQDKzkRMJdmQfcG3FbTb5KhzXhmqBx4V4ceDMFQsWRdY7bgcfcB",
  "key4": "4TXbvR2Cwb86EpsvxRoBeY3gQjvy6kntWeDUJxg7Md9fcuUKBuKP2M6QfkcRSe3u5xcG2naYsPxp49GXY7u77YPD",
  "key5": "3SrFTYzN2jLPFgm4Ctb1NKKGrjV4dwPve1JkZfNR69DxYBop7vvFS67irQHj91q7x7ZiMFfpgmhHEB8Zy3urKvKq",
  "key6": "5Qv1qRuMGWhgDTV2MnaHoo3HJCjbd8s2S2JNndXSzHWmC4nDZBaDBQfVozrbf9K9gVPrFT1aqZeNU1xg8RWnjKun",
  "key7": "kmuMzpycPMNiYWHGfkLffvpn2wEwxbWJghEfrfyK5R9JY9iZSq2LT7hWcc34iTMv4Cajufd4iREbzVzsPU1QuRp",
  "key8": "zqREW1URvMyfXpDKNCebYTPpGhfJXc8NeZSNnhD7rz1dPCfcUzck4L8ZmVCBW25pS8SyhoX3QU9uREyyngCeTpz",
  "key9": "ZwPzepN1ME7Tp5oo7Wrzxp7JPUEUTxqEGv5ZzhpShkNsmnEYt19VaGDuHyx5434arQLMJQpV6QEJuPkm91USmi4",
  "key10": "i8brFmBuJf8hcQr7mqYtJgbgG6UVNd9ykA5qy5Zj6rYbrbcE3UPMCt1snX8dye8r7fKib2nRpGwmD6bJZAoY3ng",
  "key11": "2RcRppFbZ93YXfsTTRADxne1jq3N478RLNP4oC59CgcSZ5J89wUtkbJjDL6Eaz9GBLsBRiAj5qbxsBbb8Sm3fsuD",
  "key12": "5Q8akJFH5sg27kYZ5aW74rtXokqCFpEcY5gnrN3L3e9BpcsSvnYQCMXsEULu1ru2opGusKFJBxG2Hd22i7DiLfED",
  "key13": "2PJ1GMzwk9JA6gXmeRZnZcUFpcFKNChXb5eQhitx8E7TJ3KStfHqXPbZt4yQw84rYfaY9uaYMzWSf8LNWCPgyDDu",
  "key14": "mHxkea7QdKNfeJZ5ivjahqegpinCY6d7gewUnAQMETqznL5H8MACM2ZTynr8vHoLo2GqoZJvsARWTPdDicpq6NL",
  "key15": "31CaXwu35D67V4Aw5rXr7CMngV3EaJZBJbDzLtCNLcAdM5XanyPKKHMjX2wQBhdmGw2r1CkJnZnag3ZeGSRutqbt",
  "key16": "5k73WYXm2ARCqc5aQLYw9p63fVHvxGkogsC6Ma3WsUfoLQKXjJuBW8rMrwSghcyy9ZeXnqYvBTJN2dQunjBTa2dc",
  "key17": "5RDUZEdApkfjNd4bq1bJ8MMzZTFCx1EVUMwJTnNUysF49ikg6HeAMoeANbVsUk5yC5FfjGSHuGsbn4uvGfLBNqC1",
  "key18": "4BBUr9P8J8r83bLe8h4a3mt4iNEvNz2TNgXnZK3ZxAvdf3cHrodKZpJNGZoJamBZgD4USyndX38Hk7beVhZDmKEi",
  "key19": "3oVguQUCz9MaoPqKatHNDSdPcvhSmfHJanN1oANinLHoEM6BBgyp11LVkv22ckGiRRJEmkWct8jviToT1TPALrho",
  "key20": "4NPi7ZESedYcyif4YpCoMSyeP5nryj8DmwfGN6sHaSXzeHvh2CLx3wcjAYYjByVuQoARBv2yWBtYkfPEwnWnteA6",
  "key21": "3do7tEXSibqTKZGrTRcaNRqWhzQzJEnxjE27eGB1SbdD48FqwEKwpykjp32Pu71VsK6dawwpXZuyC1SR1HYT5D2T",
  "key22": "2xC1PfX3mLwJCDMJ2xHNkt5iDXXPFCTZVxGVHyS3wxJauvwT5Q6XzZWCzray9zDkG556ZBGD2NcmsyPNsxGAU8zm",
  "key23": "2tLnjNF5jSdU4SCCiEvsTSDK68D6AHQXWApUBwZjYcgs5ZzuUZSUDqxnsTWKyegNuMS6ka1UDcDBTkqNPko2MPnA",
  "key24": "3Czm5JTWd4SBpYhFyLGv7t5VSNyYj35ooPNxKVT9eqa2udzR3pSTWSYJPpjpYUm6JKrGJWqYkGstUBi7cwkeKwSc",
  "key25": "5hrw6aPkdbjUcZPd6ZLnGhdELC89kQhdngedkvjmqHX7g7eP58RFF148ZHj2VZWSLdak2bysF96d5pHf2ELPpzfp",
  "key26": "4ejWsDuj2dcL2byEjz6EVYbaWLqoasPHCvN2quetRuWzU5oMg884vGh5dm2yc5p5dVT9Mzxqz7WvipZJGeJHk3e5",
  "key27": "4VjqCoSjuHfR4DG6cyLpSjKWhk3V5gnBcgz1sjmApe4Afcwtgn1MZbH9BeS8VjsvxcE1tjLibhFS3rLrHLFF4Nyg",
  "key28": "KaPrDFACWdWthxpFcUD7Z398QzBrPYG6yt9N1WG8TFwTNzM1jwTHoiq2YpxcRq5YpS21DZDQ9BLSEKPUw8LuhtC",
  "key29": "4hpdP46m14b9w8wzpFuP6r9AY79vDoCQD7syN857AnZpwE4qj5Vy7AX7fE1HtMkK2a456R9QpeLsHcMTGXiNguMo",
  "key30": "31ySSwp8rBsS4jXzNhs1LmvLEjimacb1AnsM6xi7Be2CJgF82843yhfeXZn5fH8FuzTcCaVagebWvwaSXuPqzqjt",
  "key31": "2kW3t1F1hUmAHVjNEhLgHgxjKqW2zpBT28pdEFBAYKo4XSY3VqHNJna2JJFfg5ykWa4jzbMERmuvaSCrSkvmvRPY",
  "key32": "onJpndAhyKndvgW7BP7itcZDzbSNZWuDzHf5ZMpW8RnH8uMgkF8oEejH5ji2covLrfTGGM9JxRvCL6rbbJH2joF",
  "key33": "35JZATFoQwM5VerjGm6cRs5YuSmz4CAcPWbqnN4vFBc2ULbSDQdFeLMs3k8uTybFtixsmkszxuJ5aPg88xaZp48P"
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
