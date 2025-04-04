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
    "4LoSEueECVqqMGg3A89Tb17g2vHckEKdpS323L7tk14K6eXeKqCHQRm1jRHnVzsYre763tmbDFRYKakKY5LHaqXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSfAycxoBSY5jRzk9iZKYuxrVWFSxt4hKsyfvVU6mwk1RvQDaaGyiy6xbmGirdd4LyZoRr2oNuLMUWcQL5qz6G5",
  "key1": "5Nxmri3pqARw1FbDWhMHtN9MuDrjPJhcyuAF8aBBtofucsqgBWELxFFsstGMWUCr9bkhECX3BQqK9NdH1tP6V2Kz",
  "key2": "LAibfZroRVpEV2WNuwoDkXgycodwcwY66dkK8TRe9Sk5pTNJZC2tiMRymUeqqKsqo5idLa6Az6Ui5w5dnyqxeRa",
  "key3": "4UwoWcegvQzHsqFMiwTuVc6TNaan183xwsZXMEFoxzjW6PKM9aYJtHygJnpbqbKHY1Sg3M8fMHJWZhP1XcwTtypQ",
  "key4": "4xkShPswaEehEYUrh4BF5NCRUBaWjeVxDvfFyNaGUemFmyHbDb18Gowy6CwPqicRc6ixP2yKdDWTPapjKr7HqzUX",
  "key5": "2RRVKbjDQr6pJkt8d6W8q5vMncm41rW464qKA8nSm8je8uBzGgZ86ESAiBWF3mEqbo9SEEQiJQNExtBQmBsmte8f",
  "key6": "2GMyF5S9dfN1PH1QZqgi9fnmS581okpaZc3VSZME4rTTdabHMeRtrvXFdnoNbrVBvHpRE8HLuS7wb8VsvAMJEyth",
  "key7": "5NJQ63XG8rExyejYMCJubPzmsGpUjmtPBc3UkUhnZuyXTb9mx5XQ2sRe1kseqAiMiLqZuu6khtL3qydxTxqoqiLE",
  "key8": "4X7ubyBbzCrpvmUBtskUPXLUmiRVXgRLTumJDbEkAcHg8yr4bDbcTko5qfn2RwwXu1ekVox3KHovzhgAsYBX7tPi",
  "key9": "3qfCiWqLK5kqNrSqRsswqtP1axJMhTiu9faufgBouhXU97MoQbzQcmgDpLouG3T9tqR6WYF92FrovBxUA43tnjca",
  "key10": "4wB4TSRT9ZyyvX29oocfxNJewCZHJwSkyKvD38fbcRnFbQ78QE5TkL4UD7DLv4Nu4S5q4JWKfiRu3RHMWNpZMNkS",
  "key11": "t8cbTqtX2a39nuSWBjoRK3EN13pqVjELrqU9RueYz1WkuDawPE3yeWS4inX9cg17Ps8myTgiVWNpoAar8w1HSSU",
  "key12": "4WtHTFHk5yJtYqnWCxzGLcBktJffhQjFKSXAg5UTZ9N7CMtiY3CNaRbdDsBPcPoHtKM2GYimxWzXXvCNJXPr17a1",
  "key13": "35HqN95BKJJm6BMSrtz8AP2jkCYxTXpG5LeMZRTjJCJrmqSkMSx6jXiRQhq7vP5MQMpRzs5kSy1RsTxHXs7iqCJP",
  "key14": "KTi3XqqLUtGeqQVysfYCaW9QNzsbDAp6QqD3eHy9phqTWSxH2HZLB2dg4Z2uaaxEaEeba9Vkaq7NSo4bhvieE1S",
  "key15": "4tH9YRgwYeg4aE2dUpTDYnwSPcS1VxVaMyK5waQ1HFcddTUWnBwdR9uwmixKkBYGVsAMZD4efJZ2KtUGWAPnsM2P",
  "key16": "e9oUM5vLPki8u3TUS7hEJ68n2K2bWFYbRVcyjEz1b4HS49fE1c2PvWhtWLYTAGLU4RsFCaP8dKah6o2DAPCzLnm",
  "key17": "5PrYuVXXBbxAVPQprm18a7iVR6G1VPLu2n53yqYAsrU4pEiGsNgWoVSzjVGXcuzEWezqBxo1o59jgLP1Xcy1hqBV",
  "key18": "4XfVijgeC4Sp2whD3QAUf6hbTv6TyLEoGtDdndtpEmc3n8WEsM4g13KREQusfdr2QUnkWT1CwUpLfgRLqBHmyVHy",
  "key19": "4nykT6J3ZNt8BpN8VcptTKwMBaUX5kgmgJzTxKgVjYLh3zZEpaLHosKehEBGiexxkQjqE6oVy381S7WUSAMBmGxw",
  "key20": "671T2PRvKMU8YFSWZiGSQnd4kietrzpSNEMUn9JG5Hyj8HNudv9svzAHtEBVChEGAm3dDeBMGdg9Qh4A1RZgnFhh",
  "key21": "v4k7gtpBQcxJSFPp1YVRC78G3XMgKeK7fmJQSJLiZqhqxBgeZQXP84fpvyiGgk2dLv3UzyEvMW67Ycxq5ceE8c5",
  "key22": "Kbsah2Ya9iznHrCXaA9gspX2t1yiP6Yh41uVQRzQXFv9fgBiQAVBBfUwv9ajshXNKA22hJWYnZrYA2ue8X1Xfa9",
  "key23": "6umBotNzjdvoUPTJ797XU4GyfqvqKuBYeGvRPmfXCpGQLASCcsZ3S9chjDTaXUhcYrD4h9GGKZRGqfQ58yAvNF1",
  "key24": "4zcwQvJnz4xoYm85YLo6Ajh9FuC7Bd4KQ2wVV9Nb4x1HTGJNYb675mat36Ygysw8YVXVEUPBShtTAVRPVLU8k29S",
  "key25": "23j9vVw3PKk2omm6gscD1WnHYwZPDeChgQBZYzQxCbtV9BamXTGZS1Js7fCJfieSesT88WgMSZXUaZyBmf3GJv4i",
  "key26": "66oYKyJ5EGvhiJQ4pxS6PqmL1XN2tcuWJveRLbpcifKDm7KBtiCTBPH6gcHjAnuzESr38zSsj28BYGbgksfAu9Lw",
  "key27": "4VZxAZP4rSb6CyMkHHqpBAoMeM4Pcf9sjxgJ4HemPYsEF8tAYA2ncPXdk9hopBvmq9WSz3Pc8C2dXWfNiwn2DQ89",
  "key28": "628bPRvfrBzZoAS2sbGHJihW5d9XE3k5p4U1tyB3jFNQppsmR18mWMocmaRnLvvBzuonsHR7J4cpaNsiSFf5uSrw",
  "key29": "2xdA8KUiHKRNCEnsJJHY3fQisg2RzLeGPo4QK9bRfp9kdF9sVLZz6egueEgoCvohsrP687hK6ytacbyQ1ms2cr29",
  "key30": "5RUtRkDaC8CaDEoGPrDzmC1Kb7L2L5rK4UNoVPKfPwrpjkuSjd4y6uavcP8FpHDCWArbDdGf9kthpVYuN25RVSNB",
  "key31": "325p2qxfKZ7HD4puBDcEV27SKEwfM9jNkjHXDTnHUFbKyyeu7yXsJTcfbVGJdLn1hpqH7pQdicz5VaQVJeGxwtC1",
  "key32": "48duPcFhd3hAtZrnDas8ax5F3HJQSTPRKx2NtpEjuQ6xoc7222P3voPxH95M3eJh6PoCgqjTcWJfwgTpxWyV3jGb",
  "key33": "3B4o8GVH4SE7R6VkGevtaBQXk6iAsmC5gmKcyhPhSHoS2bU1T2QYvGYULFCwS2SyNrX4PCoc86wq39dUKT1GoWaL",
  "key34": "2hY5mJj9qBpoftoGWeR5yE843A6gy7EzZqp1VnBX6UdDWJQbPyo5zya15LjMdeamzjPbNoQdibCvkY7JcNrEBZYz",
  "key35": "4Ft8mTK96e7CXxa2GKiMUn7r8oTqJShWnXR77gUWf3bRArrxCffzijovYxaz2R3RM6fM9g5rQkb5JrS2CEFk6M8K",
  "key36": "fD4UXFojjUehxYHKsb1FEm1CRi5jHWhhNau1gPPF2MTpBN4rzYaUBcY7QiifsdibL3vp2jWYz8R9RKaMZXwawjU",
  "key37": "3MZpXYY2ttVziq91Xve1t4ZEc1amDnDNRZYXRRRqD2DpBJmHRUEuRezEMag4Q5d4ZxTye5uMZtNWpfwt2WTbhT4G",
  "key38": "DH1gKzP7eP4vTDmBDHUkF4WRL5jHVT7N4Vj9fHtSBTLm7bJnUZXwWr7WgNNJNCipn6s8qLdLaEZDv6CCacmUoiv",
  "key39": "4PV1qtS66e1cmp7WpExeDkJPJFxyxmr3XHmu23eEkhyumoSGWvbwhJfSesi7NJfhTmLVH7n5oWHHnBr4612fR2SK",
  "key40": "43VbHj7KYNvecHYKoUH51shRrYEznWSEPLPfDrioNsNqDcY2tViwvkfshhcn5n5nfLgRz8L4okEVZnndXWAzkHes",
  "key41": "5D6tegdMwV5WPbmXMVEjsccdWQcpZVpcbaiTR6VbUq4AHvrPFdwtnkqqHMPHQcSwUMHtoM7cqxYpYwqc8erE9xKM",
  "key42": "2Cwr2NRLGSoi81Y1bNZASsRSFYww2EUmrWhwJ26MZ67tPQTkSRcJXszKUJG36LGi6gt8pXm3oLLcNyokU2BCnVYa",
  "key43": "2ZNcGyZQqPSCiXjFsSDKB55V24kdSdu8GPAhUDPfJk4JGdobqJDbC7Kf3SDrd3KKCXzHYNbf6ntextpgVu5Bv6N9",
  "key44": "bWd2kzcHJJQwNVaJTwF7Ce3p87Gw536W5vYVSwxtzSZRGknTVUooNLArLHgzVuaX1dCD4gtXeTBoAmGjddrkmX8",
  "key45": "3kQKSqJZaAPo9YyEjNWgP1rPdgkdShazw5LzgVycuU2VYxAGzz9XAunVXWCq93qcZwvwpiFnGCH2ghzEfuPZHzMF",
  "key46": "sqbxm913Bac7hCdrSFWzWhCKiresYtJvMb5pFJVUBKu3kS2FCPPoZuD9hB16R7UBYjUwgtX3nqWKqu3vVTqx4qj",
  "key47": "2ML5zox2KojXRnEwoYtepV6EmaZT5oSPS5yYYcxJNtDT6wiDYu13Kr5yHutYCttXBPUGBUxqGKtfvdJ5BzTHuvAd",
  "key48": "5Vxgd47vYbiKTNUqZenKKqU9MR51qEpMvQHLEJj864R31iXmyBpkSW9PAizi98adwC4i7KKZasDtwow1BLnrPr5V"
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
