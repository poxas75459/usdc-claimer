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
    "5R1JW3XBas5bRP6eyEH49s55UofhNqoNGXJ5bhKiGuxL1vwhFu33qg3JG6xqpfAvaRuFHg8fE18u8wnAPtfeMmES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4v5pL5w6JbpkmSY4g7fg4E3S2BbBkkN14PWhozcEgHEDPBunmuZ5Bu3CVcT9W6iN4kXC1L9yF1fP5TZo233owc",
  "key1": "5RWa7ASn2tzB7pLbSFghQLLan37MnyfeWRRsYxj6PpajBVmdEMTR6kpiPzabayCJ1ZcVese6AhSMCs6PsBieGYUX",
  "key2": "4pg91oZdisCtAthH8p7o6kw1FQpyWBahXDEn3qkYGPfsucQapZiJUsGG84KrTcfk7jnXYPXy4BZfN6SA5tQpL59h",
  "key3": "qnrLCZJW7DghknqAmBMELtT2JuaT2a57ae82CWXYnMokd6eU8kbfnSmhzrHu7T15zeKQLpngrzvqQCouYxF1Sw4",
  "key4": "5x38EfUbT5SctbhzY46emg1PoQw149NoUxQ7GMqM8KW8ovyuaM2PgTG9WU3KwebgsHHbnppqyPicXELmTceNzKGh",
  "key5": "UKrzp9Qp7T2PzHVeoVbZN2wtYbFTadFVyeHWrB5KZBHD8Xy4AJLGxkxN8bDiAhLTCg9Fias6eP9qzdPoAAtcqAY",
  "key6": "5bzvWghvB5DC2BvLv66xyDTD6S4RDTHSeBq8oZQwpa63FhcvZ22iA7LS4bhb2aZEJRJZDLGMdqSn46SGyQwsDu8o",
  "key7": "4wzguXJUDbfR1gwo8RxuuWXE1nPxVXUxSMRjG5Dc1S7L7y2g3gQxt9Jimz6Bq4Ezy2scNycZFqxMLZ9ASKKgM9Am",
  "key8": "5c7Xe3bzM2K7ag4XbSngVQzzvDkcQjisStGunbCG7t1aYaGkJrL1dNRsP3mgkie8EnbttQxUJhTp44hkdJCLzJQf",
  "key9": "2nE6ca5vmdbyWYWvfJRSRdMi4ccfS8Tegan5DnfLqhN74VcGsj35fmsu4qguBmAmM5y6gaB468ddLSxQnu53BRD6",
  "key10": "34LfQQ9twZjf2ukA4r3R96x9Vd76QMhdZKKYC5M6xvUSxEjYBzS7nEP24wE4XnvnRmGu1twvhafHZtT88kJ8s7Mo",
  "key11": "532sVdwb8mfcaefa5mCRw21Xtkg65kk7VJTZ4725FfHCjpVBQjdZXZvrVYS9qwzWXR3bygWbQKei7kuzEjYfocPp",
  "key12": "76nGYtpymoskLH4hp8yHmJb3wDrbJPkPMxmeRDfrxeNv5u9GcksoMbTAzhQy2Q2FQyTAebnamkfXu3F5BpfJAGQ",
  "key13": "4qDdAWTDPCoNRbLp2iXGZqHkomX27t8bdwow7d2i6tRP7vMVmW4ttL4wDArnUqCGNm1h2skEKHXrScY3ezuzWLHY",
  "key14": "5zrjVMRZmakSAN6YkAMkwfP8YcwYq1QuyxwTWm73hTCLq3kNe6W7bJyEttc3LhYauM7acggdNkN5s4wkGNg6jttD",
  "key15": "259kQoAKG47xKFxdFo9ZDYhdAvhXPursJdzxtJd2pxs5upHEoixAyPmeqXDSLcB2UDbnwi94d8AuXTaTvikkNKZj",
  "key16": "3tSq5wM97bNvQ1rHMwQxUa8xjVKhvM5XkaYK64mm6QZxEbzDfiZSdvKZSLeiLFJQSDG8d3LBFCqqiouENNCFQgq8",
  "key17": "4godWJc9VkenjD94GTw62SwMXd3VEmhwd96ft5kELdv9tMBSztpiu6sr8sRfgeDnfaMTKqDDaFnvRY1yi6dRhQGT",
  "key18": "5TvvXXs2QQcfVy2NidCeJy8E642KcLdpdAZSx4zk3U81G2ntGQHZCpmNADyifNPduVspZWrV5NggNenvatdk4jh2",
  "key19": "35twxKovv7cTvN2oJVQWiKWaZHbgLw3hg7LrQvS2BLPsDza2EPfjRcpndF3Zh5MpbWnhtvmg7Uj2AwwtaJDdrxur",
  "key20": "3j94utx8L3uxUp4PRwsvS5eUSqXnkuhsiW26d9FUEQCb78G223PX7neUShXLLMGM7qJbY5ce73kgukE1jHKaXMPa",
  "key21": "2NFAd6BHDmsuvz88G5EdibP5phaBCu4yyHsK8uujc9xNPwoX2SbosueEqv7yvjwSTtMcDXWqcRtjxwC12amnQsmh",
  "key22": "CFPv64YUy12MqWRS5atz5qgsZW5q12zgx9gz5uw9cuK3EutQYibJKaiWTvb7ttkfTTaypkfKC1dyJoyWgnDc3gu",
  "key23": "CjMyArT1LWX7eGQr7JwdJoqQx2eLFRUmrWNpzohTTMT4dDP7jYRMtcyvnauF5VbLx7aZsMvZR4CGfHVEKs5fxR4",
  "key24": "5H5yovH72BPKmCdKDzyL7rWRaMeJCfJgnqzrETDNWEhnyrhpkefVXALsKJTUjrs8Trass3jSBX2iUNNib5SjSGez",
  "key25": "2G5okDVWHB1BtS86L45ZGFYKPFwVGes6rJTnWfh6TZJetruADC74GNKmGKMkeaDnzFbGF44RvvTotnbS6LdZHBCE",
  "key26": "4rXCwExgFDXJ6Zu8piumyHWr62cQnDhhfTKDM8CYfs9YFNtNWF6U4soHFZ2Jwdmc49FSPhYn2Di6g9mau6soXaDJ",
  "key27": "4wPxHCYn6RozSz674Y6nKMqczF6qoZWKuNw2immkuYN8AM1B9SEjqK4voebDTEfzFGU1fcbvysDiMYPmT6jA7kvP",
  "key28": "59SfAyxnyoGeFdf6aaQuiZNKmmLqovFTXh8mbcLsZzeeV1EMEK7ridJXzuNqdDsJoMGt8vsFHdNbtZxf5a9GhdFu",
  "key29": "5dpqpr5tAxoULWzkvzfhoMFKTV6moYszFsMQpuygzxf8GbaWeeXTZR2SMMX8jA7Y8tRuRoFqdcAy8nnCYFg6yMtR",
  "key30": "FdzpjeUF2vfMyPDVGAU65fzBthdarRBQbqc6uy1wwDD6fetuxwnTYWz7YqpjDZfp1ZuyXedH1moguuXrxncYPrk",
  "key31": "58PmNmkgrW7oxRUPNyA4a628JMWiAU7zb5bU7M9FJ5ybrhfLQGdvU5psad8qh9ChgKuifoR7xK8RKxZZ36JMJiVE",
  "key32": "62zJHjXDuix2TDWjjXPasFF8uEopaaboZ5zQcijzxJgKZwSnA5nAe5fuAajZMXcDNJC9r2fU3LoJeexMbXfcDFyT",
  "key33": "4RvweqsQWB24jmCj6WZ9W4PqnZ8M89TX3HyMtMFSfCXezJiS7a25W1uaVb7yAdouwa5G3d3FxaMDBSJhqvuMUwui",
  "key34": "3kedWjBmxd6xP3RYkyTEpy6auHx7AkMBwJuZxkftLPc8q8r4cFH7pxe6MunvGeCm5AnHVHK7JSy4kXTcHrHD3dfi",
  "key35": "4kgiXRvpGBaFuEeH3dhxHHCaRhL67qaoaG6Yrh1g87YFquHNHtJZV3HP7AV7c83sK2WYE38cJBiXjG7nQXLwisiE",
  "key36": "2QGo3RHm1ovqCuK9SjTxZDoeifHk1GFLS6RRL3cPoj6hs4ipJYdEv9JYaDUtfpobq7xA6gfMqBDwfRQ5B4aBpdGs",
  "key37": "PZVFwtRSGtYGiYnpJ3BNf12mWvWuCr37Vxu28PicXnWgcD4dhTZzGjcw7AXcGJHq5ioExX6ryuLH1Rh2T8X5T8r",
  "key38": "5cMDZTXe5sJopKBUM1biaSy53Dn2TDnKxBYzKg8YVzGjsqYyhFmfAwZzAcd4QDk7p2uECxyVcfBtNDR9L4NbRzND",
  "key39": "5Yfo1pocGMPJT9n1q8pAKzU8aVG1MdDKa11Rmyf6ZBpjsHABixvcbEwYGX9hDYvojuafEpr54AAJUuRfkmtWLjyp",
  "key40": "MaV4a2BexyNMAsxmtr93t9BRcnHTn1mmPbygrQAmy4fVYCeNNp171u4ArJE5bJhSpgPU5ZvM6qrR18wnBqMpNXf",
  "key41": "5hR79rx8f95hmEM1DPBkhzvZw4Kfe4EeK2XvWF6zRGBVHST6Vo4TjRfU8wGLQwpPxUY8hyhFN4qv7j1c7RNbJHQ9",
  "key42": "5oBCrx9NvgTwVmbBUTYdeSUAFVdzCcnKV2PJupjZke2pmH2sGWYqRHWTHvX2YkdYQ6QQJH2Z9sfivHGawHZ76gXo",
  "key43": "5LHULcyzVriAmYoRC5VDFcDpGxBghHy7YFCBwXBDXkJ585r47zrtJbSP3PxJYjJSvoqq4eGgAEVy8aFCpZcjnKJQ"
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
