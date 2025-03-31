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
    "i3WhaWbtLxi54eYEquxU7PqQA78SQ1YCzanrMwmf4z8989uCxsvpyv3UBRFwSMnpoTJEJRvYcmEVv4uKc6riAnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbftczMK4NNbdXrrqvrxt31T8Z6EmjWCzykdN8kGL8yLL8gxEDESjigyiEzaBq2BAdzX6HGrgxj4UqKnQ28nLU2",
  "key1": "2CseuHqLdbPpkFrUYG9gqBqx5U3cXfcdTSGKraLoGca12XaBNjqRHpSAPo5vNcCHJSeHqbZvFcc2jV1WuVkiFJQY",
  "key2": "49yczWYjFNha4WGsxjbVZb4M5u2KLWsD5LMWw22vsexSEuc3vbfitzq78smMHTN1TYXDdmdpTz4jMZ56EdRoGcpY",
  "key3": "Y9jAY4rmaFjHNyrFmTKKNvSqCan9huUS2VRhBKbHSVpb2xJE5wbDw8K48d7j2HHnb2DT5aLAMEvuwXMWzmPwrgn",
  "key4": "4dhHpAmCxoZ9oGziE9u7Qsrpa5EbujDYe43QwaBTSKLa6vDxcaABhNCZpbeL2yAuAe6pK2aUD8dEkB5Jf7fBxQ1P",
  "key5": "2tNakiP5GkQDLr2BJFD9En3FX5LLq5bzTnaCo4SxWRA2ZdZQEb5AEeBHBwfCdL2aBXvv5L8295DEtURLDBdhNJxQ",
  "key6": "2JavQCVpdR9NE3zVmMzxdP219aVXwGHXd4uQuxt26q6gKnLWrG5QH5PaAS5HpLXXCir2Tza9RcAmAhAz7bmcFqtY",
  "key7": "kCd3M9dRwjtpWbgJ891GUTQwZJD8knqGVjG29SFRnrEYGwnBVWs5o7y4CBJv3yyi87A4g3Dc2xVafsvehY8KFDi",
  "key8": "3sUGQPhbR8ZXfDQii48VzUikCXEuxAUrrDqqe5TcV4KEThkjGZGB4XxNnru6ZKyW6YHnC84xKo5GR8ErDFUXE3w9",
  "key9": "3G5kgmLQK8DZBJ1x1Mq422mseaUuJqwDyNnzMZFQzgE5iLVUAD5aLxZmLqSuS6hX7Mp6TKutXwxqYzWhE54mALu2",
  "key10": "2Dh7mVBxJNEu2tKwAVBEEVY9osexdEcqafFSVmH5KjNN9Ka6Gxwg9KpEHPi6dwmnpj4yu2uZmsFXwH7nGtmSrR3c",
  "key11": "5YNYFHwQxxkQomaZFzA3WkzabVydS43wrMcKEcmEBV5EAmrHtpyyHUeWZ1BagWbesktPoQapaqmRDJBr1sB8Jtvu",
  "key12": "3d7NPgqgpBmPqEq851h3Rfn4JBqN6GLcD8M23AhBqLoVi84fwb3caaysBibhBvf1XKpsEWLtCCJCN2n5jpuctdDi",
  "key13": "2aknko5RMy2CeyJ4gGbkCNmDMejNWWbvcWw8x9iPLhqkLVMZY8sd6RfhDb6fNspXJVgLi33dsKo2enjjWXVVJyJR",
  "key14": "5GGTTNgHbbFnSPUayMLABhFBMF9HBy86L6i33pgAUpZQyZVzDogHrWb6TRjSF9PWb2zuLMjc1iZy8Dgi1W7rvvyH",
  "key15": "3hNRFayoYSjpsbzxVzLWSJkBjs4nF4Socnf55LH6JAwPYH5v9YTWWqiQCZp2meyb3Mzpn5jY5pz3utqLSui95xFg",
  "key16": "4jUKhpxpUBLeGEq37Cz5kcsowbbKtcSgFSMnJKitBQheJwecv94NW6Mz9c4xbVHPu8GQ9H6g2VAPa4g9CrTTUXiF",
  "key17": "3xejiN1j3imj1FuMezyTiWgxGiKpnqrSvhS6mLkzwG7CTLFFmjSY8YSWWekgVzrJSQZ9aSC9EuyASxweNpB1MajP",
  "key18": "4aCwRBc11rZ2bH9vsWk5SXmCmiFykorz32J11ZKd85r8HKWuXNaAUgqCAMCuWsYEtNEpAitEqe8n1qPU2VBzBZZX",
  "key19": "4VaeifNR9o23Bj8idbksVbqMQn4E7TCYw4sTUQkvLZvKDNLxsqg5cAppCDvimECpwxnL6hQKubu7gJ2GBzfcuwsr",
  "key20": "5TwQXXYbnCiAwiutDnp2mWMQCDFCtjxoaK63xQ97bSWLftVLgL1BgheEPh123da7yHnkRjeRyoi3q2LeAZsimoSW",
  "key21": "5vg7NTyp41Vuh3byLJVsjVx6WUTeuhNWSaogezrFAKL6TJnDLMvZugFgtHA6QqFXrmK8EfwYxzUe2uhLgg1eHRNS",
  "key22": "58n6f4LaLS4YBQY8s2uVEv3oLhhz2xCzQqM6yUphKkwsrn4LPu1qu1PLPTyxS1VbeAJ9n9bivdNkDK32SnRbWPpb",
  "key23": "3vVc9YuUtig7BpzHbiPfVFu2jirUkgdQMgLrSLwsEyxbZ5r5f58pWuBaJAacN9HfTYjfBGmDMQ8KrXGHuQeeY1vC",
  "key24": "439VUus1Hda4wnProq9scHPFh8LnbmM53ZzA1Jfwkri9gmB1e7XiwRjDRz3c9kjRShv2mvQDX7DhppWZWqQR5pK",
  "key25": "48erAFwPViFbtWF8XHLdjLYznESYP4P6QhXs5eKBasGqsYyzR6w7AsrSocNDVh8TjLMJwgTH95sFyt4hpeAJk1xM",
  "key26": "33dNw5vhbss3zazDFupT5zTLM2VgE5NBMmtcD93U579egCrR2nKjDdJAo53MkL2jE4ahFHu3jgb59L6BkEEiaJTA",
  "key27": "4yQCZk7aZ3A4zV5DU6qHkhCcb9H7wn7t8BtVAS5eJyEfjHoW5AzHkJuEpwuBCg48RrXAJiwsB3vk2s2HjT36A9M5",
  "key28": "5J1nwnE6B8kWkyLeHRRbvLiuFQuTfRkuTrWvSziK6qkwjdurq7UjyVF4HrRWWmtPM9qqfTbbTiBLh3sx8czm5F1B",
  "key29": "4xGPi2Pj9QjcWxPEKCwhi4coq1in5bQPEQsAu8WinKscfGZ7VQdkHwiXxREKnGcBKT6JnwNfQfm5yk1dyyjLYDHi",
  "key30": "3A46BsQc9xjhDoBGMu3w3RPWJHYj2k5i9fakDPs7dHhjepeGxWr2pY32AReaGg1gAsYKtrxArRyb27CuJbJnDPux",
  "key31": "49diYEFBqVUzJdPfVxTHdKwaJnJ97EmfUXkG8keeEPuXGfQqXeJEjTw1oW28r5Qze1Vs2T6V4o5nmZLd9tCYHJvv",
  "key32": "5XV2cHauokLBVKufdYQyvAx7CeWFsUCeP5gHQ3R1X7y8BaTFqqNFbNYFk8M5QH7EGXSBZ2R6msLnDaMojtNExA9S",
  "key33": "2ECwH2kf4hyB3ny28sMML5iwqMMvXiz7ExKX5b86sMk3e4myQXaXzhW7U2CoLCXwp25aGJjfguBdg6koPUQfttL",
  "key34": "gSH5iYgtfaB4ykgejF5zei2ERXnopPscH6CSUJrzULrmGkzJ1onSGvBGKiuiWwuHSgGtkZEyCv31R1UCx11AZxW",
  "key35": "5yaeVuSL9RpphfcXpGoUSdB1A4nc13L3WYa2vWrAfoicMzznKzBMq7xDVxDcZEuQ5Gr3SDYtuUdbWeFbuUQ816p",
  "key36": "qGgk195HscvtKqUcsC3Fj9piUESXMb2JfbHHVByJUnqmAPWvkKddcehWz4YrrzsUQBiVkb3BT3bxGXeffP8ML2T",
  "key37": "3jREPeQQVko3ePtKpzdqcSHqf338Zvjy6cxdUDpg2F5kdmhcK7BZmHKbptDknKkKtgmUUqGzaUssxqGeoFSmCARk",
  "key38": "zx7V6ZBNY7bW321haeKunYgXcx3cQnadPgoRTYhpg4C8R9CynUwn8DSsbj9KSaJJWXF6qW5dGQAk965zRJTiC9G",
  "key39": "8HvqCZMcxtq7GsaHQdxayTay55QfvhDqbMihWGfKscGRR3U4pD6GHNE3yUPg3XsTSnzwmTiJtSXVCua9Wo9LMoM",
  "key40": "2C7HWYbC2jdDUqfCJ3GvGrH7CgK7Twv1wWEaHpuSex9XLF9XJxuxVrJW44dU2sd2BnCc6P8NCDiwns92YGKEZB2n",
  "key41": "3ZMDDarkYfgEyTXjkYdwrJtTiJ3s73RTCgN888CAgeickKDFTXVig9GZzY8sxvxt3xvS2fUDqwHn357JqneiCrT",
  "key42": "214cvmpceZBmQ78uKtVUKFLTdkZhDkszBMQ3b5UJQAHjJJRievmgHhBmbifJ4z7xxVoFQAgKFDvVcTQjuJFPWqxA",
  "key43": "3akDikMw38Vn3rb6m34w69LrD82atxQfeuDMHsCU3R7JrLqco8ewgCmWjCkj2VjZfENMxrAYtZ1xs8EdJuKSyQ3f",
  "key44": "4uj9XXvwSyiBWzYUsKr2zNncWCEbQeHj8KqfRm7pgiRcSmTWCHbbBuCWWhHqwnERduYcaKNLST5o5hqWK2yctyEM",
  "key45": "39pjau9pyjPPG8jozBtE9uHDA9QThKH4cUzJpwtnVqWLQuvWByfKHN3R4d5LkAitrt7Y2DSSk49hymJndgzofhcD",
  "key46": "5cB5of24dCmiypFir5b6FgHHD3SSw3LG3gThDd58Wq5LczbNNthcoDzGvRGkgX7kR4qv2hhfE83ywGoMbLEVm63K",
  "key47": "TjxXDYWuVTQMAFdW6mEkWPmNqg6yibwtpjEQFdebzeDMsMz7jR4GxvfTxkmGkQvX3UD4mZCvpKiVvkWUPbbdGr3",
  "key48": "2bba4C4pVeVAnYb1kC4pEGJeNYJXAxaZyEdQ3czdtqNAdRRkvHt1irx9GPQoqmnvtQ6TGL2y5d8op61Uhj7kYSq6"
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
