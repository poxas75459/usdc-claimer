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
    "29NwtjDEazj7kxfZ3nhKCr25sBybYkeUYHB6FFPe93cAnYDhiJQ5bUryh5H6c52XKFyrCj7HYoWuCgscGUtsijaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAcmy7cNQ9ej92PKzrTg97t4WqKTuoM69p5sdLE1JNmjWdsR8a3aKrUYSyyr6B9VyxCk9dZ6VPFd8uVUG2chzGV",
  "key1": "4rgFSkhvbJquZQ3kxeY6AMETAM4deXKFCZLiqMXC4Wwwxty3xbriNHgJ4wcGxGcU7aNhXZP7kSXCSLfVEd5djnzf",
  "key2": "Db9XmiL874nbwCrFgXfD9rZWyPRdiZZVxRBxUaPmiN1XChvsS1TWV96LghbD6DD3qAfvmTPbyxmYvdn3JYQ2Sp3",
  "key3": "3Zqi9d2KzGEBWM7FF1u5TCM8FVFhkHf2jpe1jPWkENM249hUmwLbNt1jaBgfGbNSLjgUHm2wUiF4wwgy1Shv6REt",
  "key4": "63hT1aY5kiV8itrLyVkkwKWq3bcgvzdvBmcEEqGcC92sFEms24HfxGA5CaHsuGa2vfNLCby7vx5rS8bK3uL4reoZ",
  "key5": "28Rmx5dU3MvYk2DhfEV2ryUiCFrYCsAs9Pn7DDUA2MrotyNZiwnguFcsUitqxuQp2tUaLqucDjJKc45kFawTAxtJ",
  "key6": "5GLgM6RWhds73WLSB1aXTJCMoYZ1CUeVKEAZVeqvjsxRXQyY8Rfh7qqFRzUhHPHy18shg4dhAcGSUnsC4rL3RASv",
  "key7": "2jqq793NS378rqaAGGv3A8RZD1qJEUh43iM1EXVX4bJA6RUoG6BRb14fkyTb8Q9WthsfobpZkyHidSdM3AHuwKJf",
  "key8": "3RPHCtto2ShnL4Q2iN3TsRWLgDtSQCVhshCHBppnPM4EhAki9L2Q5ALz1ZSW7YDhtnDZKEU8ikSUEBY7EKejez5x",
  "key9": "5gZ7PrtWwBTfZSD68kzgHFDPJYto8Uv3B9ApFurtEJuun4d3a71iP6sBCzqVK42PSZoq9BjJxw2F34stPZjoE8sD",
  "key10": "2U3zSAAFgLzhANXxmm3KjGMXTrkaJAPBc1kMX7knpud8v1YfK6Sj2BBGrBHtZaJwMsoQU9Sr6JNFxVZnX8SxJtws",
  "key11": "35uXhKtrooWiyEhaoCCAjfJ5QPoQQmizbnjRWyxJ6oyor1ifRyFi7tjKfJFC4RYVpmaGS48Cbe7VUbLQ5v4eaWns",
  "key12": "25EmhTWwfYPT9AiqPPmZRJviQp2oq2S4piWHRqLBLePHifvzdBS5cmCbeCYDmZTa36W2bmNiEpfC53VZXutnLSPp",
  "key13": "pPCLKA3PuhVoWQ7uTQC5ZhiDpAKpH7LtzV5xRH3ceopw4ZvS1hZQiDoS4ne4tY3uv8mfAAw69Fhgg6PvhPJXFwb",
  "key14": "64Fmu3jp4niePrE8Z569dEwqDJmJvWEizKohuycUeN1C4NvDt1jnFKddhfRDiLVuJNNhw2FQ4Dh3Ti1WWLACVxfp",
  "key15": "5UU9Bz1rxR79rQodgeufMLPqnt3cRSYH9QEGVsxLRuvwQ4q8iQMeJBnDatJXeEyPcrcn28LcX4UKB2nrsxK4gWAb",
  "key16": "qVdg8d3iJvj9CXwB8pCDmLHUhHPTPHifffgScwQw7QwG2NjxVZYgzmTAfh6hzDaVPddVVbTBNKhLtAasS5BqMaK",
  "key17": "2Kd4rSnyg5N96UdXJguyXFP2SVMoYw8fxvAh9q9SKMehKpvoQZfXyEWBdTuaMJAfg4cmmCEwqbMnWTASYhgFkw9V",
  "key18": "5qccACYPnEVUqPvSQ13crnP9pfJuKz1tk64BJYLQeEV7MwZrMwjdq3gHRTkQmFgCmre22hxCvKw6zzPt7M5oeEVM",
  "key19": "3yoZe3ejDE3Nh3YZcVwQBDMgTV826Pg9HPAqa3gmdontfXtaGDW7Kgi4f7RNvMm8HvH9G7z59VcjXwfAMrFsH5AF",
  "key20": "LfCQVN48vE24WgvvBG5eGh9yPEmpzrswyp9J51J7GzRqrz6uNo9p3Esk4BQBrSMzimLrXHrnRBX3AgTYvXSwHdH",
  "key21": "2S1m56CifSqmk4ZYvgpx6ZKaSCnDg74Bm5h8fgdGtxxTG7xaQUqtiAC8eioQgphzWVH7VQ4p2j3APb71qjfiHZj7",
  "key22": "TktiWrAZvtoVNNvGq4r1AzxfNCm4otgA67iuybC7RppVawQG7cfXr7ffqfBXeWZ2VdokNEMAyxWSAT2uCt38HNg",
  "key23": "47VkpqxVdZzHPht3qEnDtYXfFdiwUGFe1jsaLsewuTS1Vjthr9mw6Wfwqsk8ju9CBf4LK9rdPxQ6TBjiaAtmstEd",
  "key24": "AVfjQmpKuqEJTy5KNdKF6ub7pmia4Kz5hp6fjRUN6wE8N8aykAR5dUL24eQEqcZ8bwq8sK7FEm9pCzG5KoURBrS",
  "key25": "45nQKP8i2DCZoAY7fY6B2W8BNd9osBMoTwkMSrt2re1KhD39X2MPeckkr4vXpH5YC4oyaKHx7Tc1v7rTsbV4H61n",
  "key26": "5rnW5hoL5B7Gohc63TraCczPDrViAM7Y6RHtkNGrKs8oxdaaNkrubak68KJR8sj6vJjxyK2d6kHGXCuTC7RGdVqT",
  "key27": "2LL59Q3pnKLd8ByiTcFuDHVdR6okVp8pjGk85vHzUKfX3MGZQfUXsGpoXDavhCttaPjL42Hf8h3ua6SBF8datRp6",
  "key28": "3ZXzuXvj4jQwaAu5DfsvMibHRZ2Rr5uqPN9f1G5ZNqUYcbUqZDeG1yMBjUC2fRGoLBoqXdgc9ifGjsHrdYURJjsJ",
  "key29": "4XrUZvX7FQ8dsp6LAKv4WaaAPVBPe8KRLmynZHkEedoj79oQ5YLMAanUyiP6kcSRMWaWrbBq4FEbEazi6wgGWwuG",
  "key30": "GxomKB8mniNpKr5a55ngBHNAWv6fVsvat7rbRS2YZKxrt8Aq6qEr2G8FNcgfA7wZ5TqDRSCiN3uK8aQV1XvfQ3K",
  "key31": "5SNTeJcwExqQ29tVopufiAHLuazPJuKaa88ati5C4Zox4RWEdkhMvr8LC6LPBg9RAaqXvaak2Hu82HzqzyZu93Dg",
  "key32": "4XWb76oWj1KrGSoTvqKLkY3m1mt689k1tx2dyj6EpEU6DVmgga1jkUCuaX1PwZJwKVayhdswNgAHtrLhHYojc5fQ",
  "key33": "3CfBiZQB9Y89XLWyV3zZFUHti6bhpcspX9XbKwReEazuX8rwrYdw3GHh5EiUeSabzTTRvXid2AywNPhQ1xMk1ykk",
  "key34": "3i4sJgrXCa7huwi4geNHFUwUZUWf4vWpGNYixKuwbPQj6v2ZELYJDniJrs4JBLc76fum3UmK6zS6ztjffWpc5eWo",
  "key35": "59e5EXRE8zkoor8qLDEpNJjBr2NT5B4KXvBQe7Rpd6LhvXzNb5iPkZzpEX2UmghzdBWLW56T8u9AXPxnn2CDqUyz",
  "key36": "4HKtmDHPHvUouLCZJ9syMjoNAXMpRTrBMyLDtZg8qPqw3B9FunNVpcRGgWGz4VbykvCQwWWNc9WaWKAkYeggeNYG",
  "key37": "5m4bpiawt5CyPgAupkTV8W1j3nQ1KKZni4nege4ZDJNZuJSHNkvGYX3K9ehggMojZLbJUpnjwXknRvC5S5wxVgAz",
  "key38": "3M4DNU8UMReu33FLHtzFhaup3XBcy5QEs1pxADb5rtSK3U8PfBmSG2gdCL9Z7Du3yt5fCUw3AD4yskeRhZLPXDb6",
  "key39": "3DxoKZfs4x1nrtXXotYBBgE418FNbNNFBiLBhC2raGTuVnBzfcyCnXz5MrQHAUckTzxazVACxGv5gj9KBemzwwcU",
  "key40": "BmVFUkUZyDCvSTmZqdrsDuKvS6yGUWwaUunAgJhec622tEJhMqk9DVkEwLbJvRJNRQEMMi9aQ5CmH243BoCSZfe",
  "key41": "XyCNpCkWK37gVHctdtWFBGhKvNDiByxC8G8MaY7MncvLXHT31UWm3xPvBb1KHHfnutdGJjbFM5UgYEJv91act5t",
  "key42": "dAxZDG9ZMeTjq5idCZppy6impReudk7N4EULU56SDUFtZ3gs2nDEwEtdpYksUBhDRRUdgVJqbyJntwqtHiA2U47",
  "key43": "2ZfS7RBhu1mRJdR9pK4wYAMSaQiW6kZrCg3NPQFYcKprGwBcVsLNyXozM8BN9qkHKMKaSfqQuTguzqqtK33BzJDF",
  "key44": "5Yqps5tnnjZjkj786G66EP4Zc6pJ1QgfcBVa8XzJVBeAmsbfGtsi1VHqda1LAKyq4uRmZ9PsMN97x6fKrbqjvakB",
  "key45": "5p4TFsnnqqDW1pT74dnsNVUoUp1EgCpo1Rr4LU85EHzKoJcAHpUnuNfdR6GQdR5aTyrm64gZxR18PELdq1pM59RC",
  "key46": "2ekHdN3FeDMn9LgUxfX9TaEmWTECFjPttUr6vbDQHS6D3jx6yGHiv9H7xE5wPpAExBo6jmmwx3cxvqzHQycMvsmh"
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
