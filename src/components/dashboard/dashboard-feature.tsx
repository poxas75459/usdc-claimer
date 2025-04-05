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
    "4tzM9SeUH14YrYLmzDZxMJ5w5KEAXyPygEvgqJmg8YwsZ3hJGSkDCjmSksVYcsNSuQH6fZmifQq3ovsob39SXu87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GE23eEjHe3yWeKCyDsGEeKK4v56qR17gtFqLUws1fvSzUDvZzJWSEfpRkN8jwsJgtPBfJptFhvfUEVL9axpcuAL",
  "key1": "3Lc2GCupPmhsdbJPzZovrT5sV2SzK5FcAGrjzawcADVWtTdAF7nF2CXU6NM6X4AzMrZWW527yaBB3Tr2EjU1wyDJ",
  "key2": "2hAfMsgaYSzWmEjEz3Jn7h1ULuxQxW4DrEsUdxHjcSCrY2kZXoJinUMZTCwUeuF8SyKAfzGGxCg2H4skUrZKEH6T",
  "key3": "3wxiiaoH4en19YdgPgrZhk7KN4G9xCxDww9SQGCimh94Q8YF4YPg4ZezZKUaR5eEM1M8EyLiLS6dk2XFk4KZE2NP",
  "key4": "2hwbkuzjBU5Ei6VhLc3hmuCZFaSAiBKmmCFvz1ku1AMQ4f1eNcjviNfh7Y6B4uRuWHsdofd1Bo1rCbwmHUjF6kz4",
  "key5": "3QZAF1idwupNvAaSNsuLvwozdZ54rpzBwcMecMQrSZ5Bi7SRA3eyQ6sL1j3TPJMfPfQHYw5Kv91ByZEKnA4P168U",
  "key6": "5BdHM1DUr7cVZu4MfDPAncX7CVvinujZdTs4PQoXqWwspkadcTuadUFv4yMARfjah5J7guamFdtHqnbNC7EKCPrY",
  "key7": "3ib1cRQA4KV2tsAptrFmCFh93SMwBNW8s7veDGAm13rqBUWpwngYwK7HxMYuXz6ABQ9Ed7BRAu924t2npNAsgMdr",
  "key8": "2iGtD5S5tNq3eayQfSVpQM28cwHbfCzkrYcoVaz3GUifZwfyrh2td5xoNUyYxuZsHYFWnQfLthtdDQakW2wTDWUm",
  "key9": "3V7W84qpgM3zDSa5LvvX263HB5AbmCgEZN4s6uWiBEwQQiLgJ1M8imq8RJehGJB3F9c7z5EhAqwpM6cLqVEH2eXa",
  "key10": "4UEHJNUQsPxKSbaSmzqG8yC8HXCFeRuSYhBwEgzWXyaUikTnx6eXJZpx6pVRkqK1TKWBykPy2ud1n6z1io6WYG6o",
  "key11": "3NM2LApvbdXaPscr1zmnBT8LuS9H999JC5RZaHFspVN7rV7wVP52VxtqtRxEpysU83xktD3wY5SPE8JZZAG1bV2z",
  "key12": "4XCFLYi2xu1eLYunp6itujfN6WWzjnARddzTL1kAcEonUtpRmB6dtA4vwKGx8UeKpoJtaxGbbdwUqVsFmksDfm9U",
  "key13": "3Cnrug1QLgSbiadpptjMh8gJhgBefjJqsjk1ynGLG1zbys1uosvbyDmiPECnq6KV3u6C1jvzZjmVY9ReqceAugoe",
  "key14": "5EMwbatTNyXN49KNHsMajRhsuD948Lbteem1LzZ5DgAYNqaMNMLEQKJEFXwtb1rLo9kQTzzXN2GLTfeWL9Jwmn9d",
  "key15": "4TnPLnAv2zhiaJEgs42VfnQXxXEfZzaHqatCMw4iDgVAgBi9uEaDnmiH7k1tgomRUX6L6PBmNXxggMeKxg3gXF2A",
  "key16": "H5a5mgFE7TMPVQu5h4pf1L1GJtDPx4hU5DYpuV8uUrUgu6pDtDuRGRdnxFevq3UHgBZ1kLXBJ8WV9HWYkXvH2MG",
  "key17": "3GmFZxDxxGbPNqZXARkEUkY5J7n62g84e1osDE4hjhbB8YxZ4jNo9eKyKWvXicoawxuSLAZx3NU3T9JsW9CMppgN",
  "key18": "2ctQi8RZjaKQwrTRA2fkyTjZKTwVLhMBAdae3449z84wFAs9NVRo9eJ3zAjD896LHL3qznPRvG1yUhfASdL1HMAt",
  "key19": "575ZyS6M9FSUTvxqSSoC2qXkDx9BJVvj7AmvEJfySSdQeJHYtNx4mAft7gF7dTCx6bFDWACBsorac78iXgnkf2Cs",
  "key20": "5CgjyhMN5ejtyVVXsDyw2mv5PWmKu2FeGKBb3gVg81LqEStRBpEiHdvK14pjZ2waXfijE8Lwsimyzu97ikU49QDb",
  "key21": "3DdADMpog1WMZk9Lgx2z5swLnjksvWnF5cQA768QEmPQLQsREM7AXYyHx1bVD3N19qttUU4pJpbcWu1nDKC9beqv",
  "key22": "ogaTV3f7XEyAYQ53U1cdYv3ZCEG72afr5GRTbU1u6q9RMtFcK3vBBhP8uZZ9bE6MgfSPdnKGLzhbrFRbTbFsaZ1",
  "key23": "3iaeu2yDe93zTagq5KVH3p3Ud4fXoGN9q3d3B1skyTzQY7m4Na9xe7AaJAZT4Jqz4nNevwZWrQD28DyGA7FAenCo",
  "key24": "4wxU2vxRqLKyhhqkeUmp36Eaw61yoYJ5oc7r6xsDH5cVpZZqqBtDjyRvPke8aW9FqxQsfYz598WHVBDLKTZ89yv9",
  "key25": "36MyVpN82vndsnW9aJ2XCn8wyQrH7zEWcmQKboSb3ZWnayYXU51SpFVFMDbR6SsvrqBdKnefp55SEJzExz8SuDdy",
  "key26": "2PB4YW9qgePGM9E56VQ9nhRA4Gkwo9gCEsg3VPG1MAmXreTyF4tNHzqEUyuvc7mzVm7Ya5w68bSkyZHaUm7zaJxf",
  "key27": "5W3zx1HKKJ5aYcjBhye1ZGX5qNcYon7zDP61vRHdN6hApjqoPZ6xFVoFDpkJaMbEUfUB2kgM2TE85eDs9w8iPDTz",
  "key28": "4cHX5L7ndjRwta57sMnZKWJqFZ4adWzQYLMbbVXFJekLx911bwZurdiktBpidXkxN8KcHyXigYML4kKVYkREyssR",
  "key29": "5rqkJ58EQJjh2m5NuWrvqs9TmfD3ZoXyosWppcuW7L3ysGw2VsXpPyFrz5ikigv8bDA2Yd8dNanN1JRd3HPgsKTt",
  "key30": "xdPT8XEKu5vwgS5mCT89SybWqLAGqL7AHiwN445FHxKD8R3hdVYeoexwuvMiqa6ucMiitxj9ZM7fgissDPEu3Jy",
  "key31": "kJQdQ7DKUPZmkWNNiAgRPCdgE9YCoDhj7TChBuBVkSqRgTpGCqsaSSqaKnBFJwNea9fXJuN8MHQynbsM22m9H6n",
  "key32": "3aMFmYK77oaRK1vrpyqewG6Ai7m7vifLkFvcuw9N6zzvc3aKpCAf3VK398yBrk7huVUnMpfdJSANvBVEdjeNFB1z",
  "key33": "4G3GoSEAYzJsKoiFXoXBtwpCK2nPx78SVe9ugFZsuyGXds6LrtwW5who2HnpZ6edFD3zga82MNK7pDxjTfuA8yAb",
  "key34": "CLMeLT4DxhtV6mQ58UCrvjuu3S27Vc65TnAkKdxihCv5ivqMbQnB9AgLx2Ly4XxmdX8fzszsAFaC4MMrG8MF8ET",
  "key35": "CDJ3RG9Zsa1dE96QDn8Bc1ocbaWu5oL9CuuAy6B5JZhrqypsjFi4xpHyGYMV3Qgk16jLUxs7aue6Zy4BPeePMey",
  "key36": "64wNVS3Wxdx3EnUeWwBwfxPCWnPUpNL31R4tWy5mF7T3yVEFV2Tp7fZ1vF78rtQfiQkgxqmmtPEwz86jYNbJ3TJQ",
  "key37": "5J9C2139PoFJHWH3q4uHj2AQzuKDWLAE1o3AVu16MHj15qMbtwGSgDw9pxhKcU4fnW7Ln57WXdC33w4nkPJyXhre",
  "key38": "5dcQnoqG38ESBFxJJKWTY1L3XUv1CEyLvtVDv6PsSxGi1Me59rvGHqhSSNTHcsu53bCitb51pzwwBdcsQPZB5hYN",
  "key39": "42b5k1GeXm9T8KtaXjzv1bueyVzjDdTT7huPZo9Eo5BfQ7x5pk5z1tiTURWUb83XiyX8Bu4GkHcKszZN2g36PVsV",
  "key40": "5CqqTuq9m54btmGAfXcJafimbzVprTo9fcyHFz6kpb4FQReyAHQzYcUMQMBskdtYXgcRc7kenfzpy6BVbQk5r2Wm",
  "key41": "RxUPK9C5bDcHGUdftAJ3srxj3WdAtoggPGzZQPsBYAwtK1tsGfCs4tQJoHutzfRMSrxWCNg2BhvcM4AkuQbjE52",
  "key42": "4cd7NUVgabdimsxrL13ZoT64FPzVXp5zdmrWdz6TC1B56S7jDTVd6C3znq1sroJLvHgaSjiiZ7E3EHhLSRmNdkrz",
  "key43": "58iBpNajZBMZAtiL1EJXXn7hG9XFw11gU3mCdSuCPdmFzVy1p2VQDZ6s2uUXKPdN1W7kfPhsArpfPTcvE5YcRNtw",
  "key44": "4qAMvntkCxoZa4q3xKqd6dxx6SQfQYTAS1Qpq9bu6L7NMq13DkprHv6NihDH71WsxjjBBZLLwNvCx6b6bNn7mn15",
  "key45": "3Ssp8ZX4wRpgLJmZggXrLJGA3TYUHxXYJhR7uB6RVQypUX5rD63XjKGXJfg4fK3DZ49YQh3SKSrvEojpUxUkJ4vJ"
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
