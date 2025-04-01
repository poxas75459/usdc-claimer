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
    "vVnNjRW3nEWRPzJJkaVKR7mXNaBkUmoqsK2PcorkMyqjB1vshazN4NNw1eysahrZqyxcddGwou1W4dUjWBZpN47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYM2Bhz7LJYsXhZTmNSdnHaFyoBHiznCF8EZnf8Ud7u7ovy7Kx5Q9cfeRxturxjtF9y9MLLuW7vDSJQh7VFLb6v",
  "key1": "5hSqcJNHHkmDQA5ap16bXFrtz6Tj7YehDszvY8f1FuAJw5BRXmJQUqApt5zDHQKBZMNcJ1Z6KNZVduJ6YZeLdwdX",
  "key2": "4oyhAe38zMmLd9cqsb8qo5iv6riJKj3s1P2A7hPKQta1zX3VuFeQzUPyJsWLjp8mpaPoro3dQwYNmN7CrecTbz12",
  "key3": "2YhSGE6uzUKCrb54zgA85tyjGcXNPUd5ncL7sseVX5HLDbWctwzDTcL3ew6jLNEXGXCoRePs8rXXGeTvfiYLMvA",
  "key4": "5MdKeMsqw2AfjbyU1UC2goWeMcSa8Yf3Rm4rnBR7EthHmBSoVi3egQyNgMSr5Po1yJtgBcc5McHjHGPpQQqc3tEk",
  "key5": "3TJDkfW3t83tDGXgv6oeJatwdVuSb2mLPfedSGRhRyJEZBYwwvCMXDTP8LbTsDzyBdnshqR5L6fCBc6yprSaULdA",
  "key6": "o2doGots1UwVVEQxTtnhx1m61U8SD2YA97ZsNru9ydDY9DaWVXAXYBi6oGGCwQTAVRcg8F9CR7HqNBwPToZquT9",
  "key7": "64McTjtG5xQEUTZSkhbjcEwK3Z7d9dRy1993CS5UJeEezNG2xrH3rMc6xsPNvxbCPkpAyYWfeEgG9BgGiHzfys6Y",
  "key8": "5wa6i6KvsgxHzhd6dLj9DLz5P6GcmKd2dLzCZshw2nojDMbGzpsi1bcogviECK3HdKPuSeGX8F1h1BEvCK8bjkta",
  "key9": "4V7wSFjJMcCzC5yEjLLAcr3miLhPakcEoosxEq2uG7oXz7dDmctWdZWYukHc9Ejit48wRhx9U1Hk3YhtT4AVhNuR",
  "key10": "MnRGfSRKHmdXQz4gxSqdZc4HN3rUB2i174yj21cukArrquwoLnHRdn9VEuFNzLgRmp8XkqTcoD4VqwGXaLgTpXo",
  "key11": "4iiiKLkAt7cPG6E4WGHwFPgjARD47KcB87C5PC7sg5oLG8UPiWWg7th9QTMUPqGnYRqacN6kyRJggEc6GNE6SKsm",
  "key12": "5wpjXuJxdRrPqMAbiDajnSsTZhCpLW5qqXQ26VM4LLy4gkwbpetyr4QMcv5SvUkpKZbMb65ZepGxDpSYgi9r8pTB",
  "key13": "QwGY6WYem36TtZDqvce5LQMJeNk6NVRMGGmNXezL2iGAAJTYwPNgENEjrXyE5h1XfAnX273EYw3GXWAuWXou2Cn",
  "key14": "42iCsaLthuE6tcZ9AuW9Hk39MX9nLE7ZYyDLeEH7oRgoofZ9p5jAAJHChB6xDY2V1VPSSUd6PEYbzNg3rng6bcPd",
  "key15": "2m4Vr9yfi2ukB6Scc2HqUNJsejhvL8ebXZXFtk9nFDqed8G9xm8B3HpjCfAgJqPr76B1f78ijCTmXkXTd9zkaY5S",
  "key16": "5oVPas6jqJuTCVkJy1rYz9Xmr1pV4xqzF6XHa8amYHGF4LrAJryxFwC6u9xmuTvyc8Hpny6Q1WV1Tf4wVA33HPF2",
  "key17": "56SYPodZ5YQ4vHenQuHehgG2sbFW2YTHtJQ7NdCCnFi5srHLACwVZhc2bJ45WBq5883zGuoGC3FUvrwnfYszqZMW",
  "key18": "5HKfTAUUQBPr9fQL3KetzKuSGsENqvqWJW6AhV21D8sqikW2tqr1skUGzw2aBwpo5UdgnXGeE614TR7GUh1qWS9j",
  "key19": "44xpvUiTD3eBPTDTTBjS5rRD72WSQCdkujUf3CLsWT1Kao3RdVEaf6CiX5QqgQVufwLTNT9x9RxzhY9ny4e6eRoS",
  "key20": "2QWvmCEqptCfTZtcvNF7AbykQDqEnf99wbPhJMnrBG91qxWvydHHd4ADuwoH5FBPNMPDbrXC7jREJ2r6mVNtwWad",
  "key21": "5VHGM6jWz662YRWMH7BirLH13dSV69W1Ru5ZwsREvn4WFEd4p2KyPYhhxiBMpyi1u9xeMSchN2QKshheGXAfsZrB",
  "key22": "3TBb17tKwyFHMRR1yZHHVTMJ2LWGcVVedYXQiypBW2aT7bdWDti3v8infMbyczBbMifo4BHVACjm1b2BjKVsNvo7",
  "key23": "57aybEwA8iPWkmqpYTf8LNQTVrgNmXkGAwTC75KdNDYMsesnHQwSvGaRg1jdHx3FgeyGDZpZ9sSz3JcUhbLnFjDb",
  "key24": "31aRRWWhaRyFG2YMRf29PNBdEm8SRzFCNNQ5YuaRsQWF6gNRkCPazoGzHpzH5JnN4pB5XkmTf2bmqsV5bQf8dV4W",
  "key25": "2bvDv7auQwftpqjKDR8GJQvrwZFFBiBGK5PJpGG1aNzaNvgLPByqrVA5YWm4EK8NXLBC4M8xC28qkYLuohwT4cFu",
  "key26": "5yMfg6NcuU3KTAzKzGWPhBg1M6VNH5FoDfkZUj1SHsUTvUBsvVGgTi3251YfgMkJyejr7pEXwD9C9sMZyqADVqEn",
  "key27": "5hkA7bGFyKAY2ddcnvkzNMjib5yDpkaNHjjNeKxiY1vSm6p8QGj3vr7ocbE6hu2KVHzHKWJHBuujJkYUQbJ5vNVY",
  "key28": "SoA6ikDwpD9zTwYPJuhDw9Y2Fwewk8uAzWBQsEk9d5hi7gZhSdnp4iNwMFzVQzbSw3ihzPtAzp1Vy8w8ymXZxoa",
  "key29": "4NW3nSjyuyzSuQdqitXT8uyC4Fn8TevGu55cuHYkFpEtHK42v1fgZwCunEofbnqdpAUrxnvjgGQZXGNUzDtn6HLo",
  "key30": "67EKr6P59dCKXPNkfDRuAZaJ6o3QZNahPmYf73MZhgisCNdXzhXsRm8Em5YvVVeeKM56y1Gq9ZcUUQnhFLCWKEMn",
  "key31": "4t89p37fw14q3Njc3bEJAgGXWM9AmzdefzhoNgsc2VA7KLPkPPtCL1pBqEuivGm6yKJp7i47UNZRVRePDicukV6x",
  "key32": "3zgpojbepzM27oJhJACmYyV5Nm6DSqpCJFTnvn4A5zd5EmAveNYR7rkvFAutBsHWqquYBEaUAdiaywq1MZNqk6L3",
  "key33": "4E2nJZwyNLzy4Qbb27gJ9ktxQcuygpsiKW1jkHFXUK2o33JHgF3DbMNEzer881M4arEZ9jCJMVhv9MXA4Z7pCpN4",
  "key34": "2tL9jQqsqhyQ34vrkWFxGEkpPnEKGwp9D6HtwkUEvS3vdKHpV36Srg68GQQ7iGGcqZ4Lie5iY7tqw2xz9odjDxNN",
  "key35": "nEXUWMezV9G2nbcpUKjEc3vdhVjeYRn1XDVmAEuWJDU2yoKyPbMwSD6iXnsFcbAdmrVtgUyoDsWPU1L2Rb53zto",
  "key36": "4CSZDkCsdYk3iLZt6h3Xq1CsWCCiAiKh2yPSH3J2NdAfKbS2CLgVsP7LGXgso7Ln2TehRvoDfu2w5JSRFhqNfvB8",
  "key37": "4CcVEvfmM499tVE4DKC95Aa7BStjp7md8cmeBmp1Cgt7QPXEDZfVwNxr1GMkApams2frfvo9AzJsjV2UBLQ44hac",
  "key38": "2LR1xmi5yYwS7ffaekFQ3WjmS11mrC962Q7LKHJNa4PwPNSnyhhwMZJGav17fXhRkyN6n3A2fgsuMxYHtfe2ibzK",
  "key39": "cWZr43mWPa4EnvoarF73vpkYTC9sKr8dfFx9EdGHQ8J1DouecquweGALGYrBiSnvYsb9ZjxsaaDvDwX1VVojHwc",
  "key40": "3sc74qEcQqntPP7yDYDwfGHndVCRhNjXvJBDjKdXEnhh9otCgHQSoPN6TQh58fZWM77riDf26SQjnk2gTfYyZebG",
  "key41": "4xTcF9oDESqVa8aEvfyAbEns8B32jQzS7eQZ2F3utDjM3U5renaPd7myph6Wf4NeAT1j4Gw4uDzMMn6kysvJMbvf",
  "key42": "3vs1foZ5ebvFx8weovjtsrLuPLPYNvN92g1q7c95cB3CSdUbVvv48B7gdxTnr45MNqvZAGx2oXYKZZ12LwP9QcTX",
  "key43": "67An4XAKBAJsX1hvzjwPLeYSGkPB1m3MCu7dnhmRVhxpUcgPrEtYXmaR9TvE2CA71dYECbPuD5hYhJsNqSwhoSRq",
  "key44": "3K1HfgrcBkrzP1nHcwG3B2vTDSMW1DqTLQHuiH9G5MoebmHvppTXpowR1xoCMfBLWD3jSMP9JXPKa1Qq96rDaoJp"
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
