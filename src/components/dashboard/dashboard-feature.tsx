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
    "ibSWZ1nUiyApdgwV1kTF9wrpuPhvt1swvQZdaqmn7F1wb7xx9y4KaSdmh71Ut2Sx7YCKXAYdxetFWQBhxTSrzkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNEc8Gt642EiDBAXxUC2d3PxeL9qdJ9VKUnXKgnN5rgS9GTNNBeno3tjDzdDBXyV2nCso9e4pZZvRpyRpRBDqkN",
  "key1": "4ZJGAy8m2uMXHpvvy5L3oFEsozqaeiJH3xo2Fr8WkYsYX3XBx2PnJ1sYjyDr4iPSXnpCntjGeBGk7r9Fzm99hRFw",
  "key2": "4sWDjMam8hV9AEpwwA8SC6wet2z1gYuhmodubdNtDPHsVjtJ81ryvYS66NacAeDoE6VKRrxvCA7xr8Hz5xuc66Dx",
  "key3": "uvkXZrnMZJzY1aRFBda8LCubExzVag451xMkio8pzGdah9BtDMp1WW41gaKsMmwvGEcAxUeswvR2oA5vFaGYNuD",
  "key4": "4H1ozho9HS4ZtbmsNkoj4SpgkHpz9VP34TszGmo9qKhFLdqqob3DTjieovUsqYuTrx9ABdUbCwkScwAY9SpFQymr",
  "key5": "QvuX42rCGhKScs4UrQhNLDeHREX317cE1D4ubKJz3oyr5zYEHefrHQ44ET99Bjn2Qw5WRx51RwFHDTvMYsCyD46",
  "key6": "2SqmpsCEgUdsuN9taJFvXyeJdJ4tfJzKmN8HXSYWD56PconzKKPMevThgKQLNyfYqnDRsusrNcS6qFGrRBX4wYEm",
  "key7": "2URkCCXuNKJXiNVWXRrFab4C9Le37n7S3eqY3jsWMzW2LLkscmgSjKrQb4WjoPYYf9MKLz5tnm8WAyt8K9436svJ",
  "key8": "631EpZBNNJeU6jpGvAg9BJ6aquczJ16RuWveLxqDFgN34wMDzVNq1thSJcZDHtXkZM4D75566YkhCXgMt3Rvb9wS",
  "key9": "2ZLuLF5Kh7keyaMDrPYbLBjMFdo2hGMf3df8rmghmhPvWa9rR9GKuQx2jJKzJsPRY5Jzn7ZpZXYcd9r63kC2qU7M",
  "key10": "4VQsz4a8avbNncKVp2XcXgQpvZZzdLqaqrNHiruPcpyd3SoxpRKDgbnNqpJBRf332fcMtoD8K3skNAegGy8SaQyA",
  "key11": "2HCNjRLsmTCgLStZAnijnsABJZM6iNiJ3ZZpHZz6tQ1QTc1aS2qkDB37ZKFGNkq6des8ozyg3gU1uvwLWJTtHH3e",
  "key12": "3c9ZUzafReB93egfqYj2KHQwecC7rnQBM6a1kyY82KCdqzCPZ3qRBthEYJ64swn28r7wvcN76MeUefqaWVeBMfyY",
  "key13": "5hg36MDXrVvfu3U1V4Y6bCbGHMY12TzSBzCrnY8fTfMx6aYbPvx8W8H6eyNimXpd7F4yRHkxiT9CYWtUPqUZAqDj",
  "key14": "2ke1Kpm2NP9naZbxqELbQ5G62pVppPquhJZdspGxFRoVP3zeCj4dTrZ9BKoW2uqm7MTiWQjj6PaVN7UJDXa3CKy",
  "key15": "4Pzqgr5yve153d6cK9vupoU9oAd6xAmTiBPV9Egt3joPRDmpaWfoh8oUQL9swfr9UjqNi1ScCe1JZfcVfXQatfTz",
  "key16": "43TdgXqAZ26fKF56ZzKFpDEBWF26JWX2LZMTUTdKFdCZ4WN5SBdYbf5HFwdfX9GUsPpDNqx4Re4Yjy2eeQ1sLys9",
  "key17": "5eQ4iNCbbVS6JzEMLfotrBF4bjjPRZRgUgru3NzB24ZUq46hBzjM6XsunD7mAnB6EoGUaxbR7VCs3Mmr5i7npozZ",
  "key18": "2SU812Rcs3ahFsk7dLjyKebwwwSMGTUJyZhPT8BoAtjjATBuo6twkfS7bG3AVVBoP15JgvGKrxtaGEZ4LQ4QBgNX",
  "key19": "3XsmzVDu3S8G2SYKLQwgvHeFbChXR2eZvezJLSWvonukg3agzyhPHx44bNtqcMLVkHv7WNbChfBrcnG3E58sEpJw",
  "key20": "4UAwosF5Pi4hob196VbcHasc2NjsjAnYWV8VBVDPYeNfPM7KDBxcjYzvJRESXBNmYhCUjsQ1L2SRMcsRZAanXCVC",
  "key21": "4FL22WuGzkrQBJnjTQwdMbF8KuG8dx82B5pLUcXYBktJzwnNqLu7hiSrEbk4D4VG23QGDZMt6vykTa1pFUHLhmRM",
  "key22": "2TN37zo4Qngq8WnmTKobnSqdGdEnmiCrY2ie1A463tfYxBJGJKb6BdoPwMfZBH1vxFUPLLxuAAditUkzxdYfFUL2",
  "key23": "63YowZVhUNVhAXbyEnmwjnt3VMwm3pJdMZH3xJG5iSPHBfwKc6phGuhPY2s5ZXMKFobVU39YdKHQVo4BjMa5v4go",
  "key24": "2ZFBnafCiR3jAc9RtDuBCgy7wQJFct4sH8yTDpJW8dJXevvxXpmUCobqY3oeryChnjCQ94k8kn6w9a2fw5McNKhj",
  "key25": "pM67Hs3geovjqzE5oPJWPiF84eXrR6n4F9u8ZXVN7kJ2UXCtQPWDXf1kmQB4ZsmUKo9yUEoxvNqeouvEqkS9CmP",
  "key26": "39mbZbEdydfRukHVYV1DJsJn2E4WT3otb928AjisUQrxDatUguoDzdn12dLxihKnL3ui9kGELfiKa4TPssSWxGSq",
  "key27": "4UNq8uordENKbLLJYUwNCU1JLZRaTN75Zv5PKe67dUCxu4aFMRwgZqxyqCUjxsyD4RurCrQ47pVpnXbXEWsbmP9P",
  "key28": "eBKHe9hPjr2ziSGZ83xrYDauJDvBCWnZTxkvZDFjeShrGsC3ADvYiHgBHz29GW6vGNzyLJ4zFNjeRBPCKiPf9uy",
  "key29": "4qty2AYUQc6MRs7jUtQrA5pm925AM1JYQpa4dtQxY8AyhUy82vZWMRjqrTc2sdLY85xMHoRbzBXyKhGEsToqJyNT",
  "key30": "2jwZngk14ngidHT7foGQuXAGaVSmpHNN6urnZ18Pi1EW5nkWgkdReLEkEaMG9WL5okbidGBsD8p3qf8tGeWDyE8B",
  "key31": "5szoWyDg2QALgxr2VPKHuSWQJqnQaUGKNUzLkdBe1oZwH1jVuPikSgbyFyj9UYyEXPyR9oTRwYxbyv1BVDVYnH4B",
  "key32": "3fmCLdiFbyq63YAHf7e8TdyPSWQHaXiDjFSyeXys5GrtrDrhnSfxGHxgZakkzNxBmP1rWPP9SNvAJFhB3zNtiPGA",
  "key33": "63k3ynPdP6grcBaiTKe3XB1WgQUDS5ttmmjngUAibv8QemzBPiSoe4DYK37P59QusARz9yYDSKH8TqhfsXZYEB89",
  "key34": "5HxQxeWkuuz91WPMtDS3CqSxLUaJeWCbYCZmwj2Dj6HUMfD6jNu4KtbHzwAvhC4dXV1Uyy38uNDyrk4UZc2bCByC",
  "key35": "5qVZEVu258E6J7xMhY6YVGa6JQFGTTzzu5TrTExJwn2Rpv8o9pwd9GZeFZ6xEXnYhTXNUSwZPF9Z9c3FaEc9tbMH",
  "key36": "61kiWmzoaivLyy6jW7dDnfrH7ic5jACd3st36i1jsVdcNXQZySGuYMUxMeg17gtPPVYKi2LNKCW8VLUsMBagsaL"
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
