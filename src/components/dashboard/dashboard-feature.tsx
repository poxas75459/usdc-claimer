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
    "5oUsxj9ycDFDFHnjpU2NZS1PJpfLC1gW3iUAGDxq352SiGYfTMzLYbNajPq9zEHq6c2NkXboSAdNj6aXqkD8xiEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHykFxV7eCf2pvQKDdWk1neB8dxqa81otdmnECiiRcMMGnEUncRuiEHh5P6dc8QqYZ9V526kZrCoWbtaeR3TtS5",
  "key1": "kXEvcCkNVfZNv7yfyd3YtNuK6kBraGvccyh1LsXMYzvyt5bqyR6gh3gRenzn4ECK3aqxiQnHye7k6KSGSzcxpMv",
  "key2": "3MLwLBfTpV3HBGm2NpQjt1Q42zFd7QkVLDHJLc6ZWkx8Je5F9vH3LQZZVtkTm3k3e5imzuk9xBGfrKT8Tqfe5iE1",
  "key3": "2Ys93DPgb8SNezmL6ieWoKQA8RhCmEyJZPcRHjc9rk476RyZdBaKKAevYBF8vCsFwLrJQxyy5XwWXMNXEAWi8wCD",
  "key4": "Xi48YuBmF3omBy2rsdBFaba71EZA61rLAEQ1Tzhazi6YCyeJxBkvvxJDXTudKe1Ho7DHnDGJ17928B7Ci7BX1Ek",
  "key5": "37Mi4QC8dvrdZ9Eo7qoT9YsSkNkRGx9sCM6hX5fZ1n5Q2NvKcELkZ4fA4YbvsbjRGsoWVAthhiTipWbkkPZvgkwv",
  "key6": "pRNAW67QsxS7pon3r1bXHn6YvJZi5tNXNSrgsNsgvJSgJK8Go774A1GE2ayN1AR7iEbvGRWBzgSs9Xiv8VtKyb6",
  "key7": "2FXsm8rrmHuQZatCLLKSCqLZiRgRGBjzsiwczhZr7tBtmaEqiJG7JYebfnpSzomrHMxJJ1FTcn9CrDXPHLVWCKdJ",
  "key8": "4PN3DAd18k8YjY3qEp3WLJEyJNkp1KmBETrNk1AfqArBLcHFRH1dJR3YdqSZY4uZLLULcEj51vVx1SvqCvZqkK2Y",
  "key9": "3CrEbRGyJU6keaQTu8XyrSzEd8mFUH6CaKC6BV6i6Kv7hzWvYqa4cVqii46SkDD36MneyrVxESeruotp4RbUh3Tn",
  "key10": "51dsJQJxPGv3uaPCcZafdkztxt7LBF8p2ZAeMXswvXRYgupMvTprrb7fi5CCHgez3MLQSsKdAW1ZHWEASnVfwGHX",
  "key11": "2eo5FCcCDxGxP1naBMSWLgHsQ91NEjMLeBZ855RJ4yAHbkz2wcwbYgaJu8xZo81fmCN8J5MdvmJ5cDVqBFcWXqMt",
  "key12": "3iUivScEwH2cPecSF6p6tCrWzd3nhXBepwA5g8JsL9nfRgWZaJNzfVZukThpRm5zNdC59v7fer5JokfpNF8wrPXq",
  "key13": "5dzjgiF2TovztRPPn3wkKxpvf8JbSzP2fY4LBDisz5g2YmVgxyApUdEFikVaYThiYYjiMLYTzWq5at68E5GNheBv",
  "key14": "5dCVs5ZBQ4HcfeRUYwEk4A1gsAdBjKLkjMNaH4NUpZTRyHkrZWcgmH7MwepFwz4h8TwNwKm6gtk3mpQq6mVJkUFE",
  "key15": "5a6ByTgr9REvLKVYMfDMyAfbd8iw5DDhq1zr2KHXzw9QQueAuj3Gqx8GGiGJUXKgfwFmcE7BXWyiKmy4JPehSe4u",
  "key16": "4uziEuzwn5i9PrGcT4CxGumJEVAEFVwQpmwihnkRoYWP2NiLZon5zzZE346w53Jd2KUkgEhTZ2KL91Yu61NfEtXp",
  "key17": "4tubz2KxBv8NC5EE7yUb3wi4g6VenMAMALKCPnwdb4JfK9oYDghSqAp8rEM9krzwVqvxWGw6uskzTrYV7pztvYPC",
  "key18": "2ky6i34qKxe59SUGqD2DM2sWV4B2MpnovkmQ5R4NqCQheSfoAPvXw33881EEygdxDhkHD3TYEAVXgt4z3wYHSyrk",
  "key19": "v75nVx9XeKGMAJR5d48Ay68uMYoS3dkaeBE15BmdMWDQdthRQBNcf9x2wFbrJBYgUyHScU2V2P4r9BQpnGkzMYB",
  "key20": "rQvmzdzd6TS6Lusgg3yFnruiNK9W21a9yPVjDB4UR1YtYdP1JtdrLtDw2ipEQ7aHG37LHawZpNn5aa15Y5sj8cy",
  "key21": "3wNaaEpQ5XD23FA5zZg8EezdVY1TrCHzdMkD1xBUoXTFomTvJuHwKz1eVVAtCG54ka5Pft1HMoGGDpvyAD7jXSzy",
  "key22": "2Gs643teE5caHvix4xtzumdw9Px6Qkug2HA1YBk6j2tVzSPCmB4YQsM8spLqQg3zXngnXSHbeE7YUYk4VubWBgBV",
  "key23": "41EFfWjim7MEXW1yfz8p7toRUgUjyPFmSbqG21P3e5BpXrDm16xA7UhJivb8HF4JPMTp54JVvBCkJfL7Lcb8Htxk",
  "key24": "9S9bTajTpnzb46iX4JztW86E6cA1AdDJUmfHmPUM7ekAXbd6FXES5hyoU7dRwSNeZTCjq6P8xYSkwFX3cQCM8mM",
  "key25": "5Mg1GExGyKQYRm9BptUmD2Qmz3vNumBkFnLRTpJnNjwNFXD4VgP3i2175nrxf1bFLm4V2NnNAMMpWf8aLWGEnV2J",
  "key26": "4g45t9jam5zfTCBGr7jKNrdxbSbdLHHmysgoW73uWb4QaAaa4Avb6mHyXDcMBTUCsRj7yn2RTWHi1qXbsFWW97xY",
  "key27": "3pxfnSykLTggXFuTKbkYHRMxNjwJjj8GSzAW9u1U4vwCx5PJopPWqWzAmyDoyY3Axim1Qmfa8oEbEnVkfzfRBmSM",
  "key28": "5ofshnU6Ap1r2nqwaJ6s7A7p8AsKvheCzh1Ve3zqyYJps5XiKcRGHSzX1mFyJTwFaVGeb4MKVp9uKRWz2nA5ZzTk",
  "key29": "5QWyeEmJREquwt2ZkAjeRG4bvGjDLZMefkyBtqCHbHz9CGHwdwD422iXoxFfjut87RqCfW37aXWqgJJYkN6NnGiG",
  "key30": "3cvigW95ygXQxUmC684W17PTNLJNpY5rWAwz6d9EwjyQLK4EBzhkTYTkpCaBuKd2GaMgMbeKw9mfTKeGiaTtTzJE",
  "key31": "5odg7BNXjDBQEsRG4SKaZ2pUWZ2NwHiRU9hfLUskU479pkPmD5y1oMJGtxxvX9gF5EKuzT8m74p4MZMhidoAcZmB",
  "key32": "51pDUpZ52SZ5ZiMtnNQCvfMhnZR6MrA6SRaB6wFjxx1JyZg5x7H58eKeQkrPDXtnGncWXwE2XWS6fn3RwTowTdhV",
  "key33": "4rU4yDUSrLdSDf3yHXqhJbpAeQzrJk6pw7DGHDL6pKzsffF16jJmZ1cPdXjkF9rg34s3prcF9mdZXH5thn6Q9d1",
  "key34": "3DmVJDa1LH46LLchPo5K4CiHgnKYNU9mx7SJMVHNSQtwLkfKgB5iEeXemefK6QM4ht3shALAGcTt4riz8m51eEVg",
  "key35": "5xsz7rU69fjp8sTnWGH36WdfbMW4yLETgtspuTudgm9TbgEYdi3o2wM9XYSzFdv5wfbEEkyg44neoT21cDeo7dgW",
  "key36": "62fFKPBAjwnuzpQ85a75BdfPcXK96agDQZQUHxsSM8fthTKygg4onzangzncVmKFtLQLndsRGUwBB7TSkm7yWCpH",
  "key37": "2Gq1FEV6Y5x1D2AQydqqE6wX4ZzAkDrWr35swBXjGs5iq3LpknKUwtprM3wbc53L9woLYmGhUXf6RjBN4CKaY49t",
  "key38": "Gr9NqNmqHwEH9vzC8KHYN8yDzNawDdTiACkQQx9EZ23H8G6ErGWMmTJPPdJgT9g1mtZFpTb5anhLKmfu1kqDn43",
  "key39": "28HNmTftt44qn9XxNpQxZQddDJH99uwqbT2ug2YiGgZybf9V5mJu8CAVK5UMiduK4gN9M48GHg7en3nd7QUqQqT8",
  "key40": "4LFo6dN1UB72zpD87cmMVw2ZsQGAGkZ4F6mQKmWJBWKjwSvQ5UfvdHnYFxZc3FGtiygM5BP8ovoaZxBb5JArPG2S",
  "key41": "5K8KP3WApuhfex1kFKVHFb5euNrVE7qKgKAKeB1gYwTusBsRpJtCeheYdgFXZBmqopDCyTzNnqhr2bAR6SKqWS4m",
  "key42": "48WGoqMsLt2zhEkubb9N7qGeA6RyQNirM1GYStEjZpwEWBnMjXW7pm4YJSFA3sRqHD6xjzXq179b8BTCv6HVAkrF",
  "key43": "3p9wVWfsSb4NavvDF2PCUsGKZykmt7nNpxoigjZp5R923kkyEqa4kXT55vk6Fgs68sgfhPkwbyDgbhCwcZMD3Ao7",
  "key44": "68r1ZsfdBup8yfBZaAfiv1mGvadxasmuzYSzX9t8oWQqzRKEGYb4kFR3bjv54awa8oswRD37PVo37uaoNbq9pH4",
  "key45": "qGaWHTtU8knVH3rowonFT8sxo8AZerLdnkw4y9tgVZYE6uy2XVtu1dFWMv87BzcPDMdfKM4KmyLDEGhY5rQAY2M",
  "key46": "4tqB1T5NsAZTySpxa5cXoK3KXkfjWv3yinJrjcLP6doCpyo58YKdrhFSbYntL6gvjhM3qstwiXXxEB79TBbtw7ee",
  "key47": "2552qgtPKzwEMEQn4qVgmgA8Whr36mqdGS9MdkWc77KHLmFjeiURCNJuiSDhcJypKc49Rag32wBcQNuXxf2HabKq",
  "key48": "6287hk9VNvZAajNPM5KSzRGneDDnchbxtWfXy3rz6TNgbvNChawxnHPoweAGZU8pwKi5XEkctQXha1fmt3FXGiX7"
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
