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
    "53iuHJYvtMRVNjDBRjYy9TPYQhmkWF7Gn4qet9ZHWr8bvb7Hz2RhibkziPjDYUnPvitM6vg36Yz4Vc6dtWpsXFxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2rkNKqrDRarUqKviBp344NzwZ9byvog4Po6M9hnFUp5n9zGaFDKJfh411yzbQC7s8Ck1P5UbHxqXnuy94vhwTq",
  "key1": "2EWaAHP1XSUeED8smHX9QWG7wvN7V8hfrX3gr9fZke1X9Zf33P61ip8895DMNEPpzKPuKfVccy7SqUPqioFwJ89T",
  "key2": "2zKLjjeCj24eVXvmmWbusQNTAQQQcEeKRkQAQu4DepTmLbKps1kcJznncg7wyG3fNksG5RUmCLfV88hPrVU6a74j",
  "key3": "4gMyWmipxVTwzsWFKXBaq4cFEaph4V6NnUdjwpSGnjWpgrptpoq9PA5SzmYJ8Ye7JNQ6Apoq5iWVZMLG2LCugPXZ",
  "key4": "3Rc1YQq3eVCHEthyzHmAbJJr7VMahvDoH2YjWaFK7fstJH8mUTKoE4Sif4BqXmvwEaxq9CkShghRgKWEDfQ2wbJM",
  "key5": "3xnWaD94FALNKNnXbW364HRo1PR3uD3dMfvEMNn7sAoQHyVZnr5pC7rx6B6QZCqksQ6sXmVd3T8iuYHjR5VP2e1P",
  "key6": "3NcxDt76dHD7B5D89MJipjsirT9UnJ5Ec2Xgtt8LVpw2oShE1XNuYNKEMVMWS5RSpK8eHRWH9AmqD1CHbTcNcBZv",
  "key7": "pVnJzhbyhKBxxeWzqUQosKo6NjXyCwAC6CPQsGm72myVmTU2kPZdSn18eUCkEBf2QhuJDbMZyTt6hjDkiwqVz24",
  "key8": "4xcfHc98PNmVBtw226JeYhzjTdETmX5LUqNjA3ucBMGwz6PgAYLWxrgtmBMdHNS24wKDTf59tBpWLybyiviTt8Mo",
  "key9": "3dzkVXCxmReDfVYyE4PtVo6GeRE9K1MfvtGqAFxNzXBVByMpWDFnqJihC3ed4VL58PL9RWDUkrCrWTGMtpP1pRoz",
  "key10": "56FpYu9f1HVnMwT1CLrK3MQEbSDhwsuuTJcrPNBno4fca7nZyJdVidq7YtWebtYdNwmhkuia6KnGRnxosLWoCy4w",
  "key11": "5QxLGUkqhVo36q6fCAhUPQtVbt3CezyLzx6yu4UCFVcFke6P285y7HmHwMs7F8GZ4dh19BbSKybm3nuZBrAS4Ja1",
  "key12": "231gHYZNaW7W1QPc9GWUW8ie9MWZ5eoFJGfAnSjhgaEk6DysutEQ5yPkkPUtGccirzMynF5grvjepkhwSgrfao9i",
  "key13": "3P9E2YMHoHJUh1uyzpaVPCyYWTASpwdHdEENuHnhXWFBa5M9BS8iavZrmXYKzp8tahCs1DeVnPk1pCqYoSnMpoLF",
  "key14": "3YF1xv9dAPveKs7THPKWdqwkJBpM1Lp5xeSKGapRbPHvHgUQtnCToCPpcSRs9Y6stwKXPw8pcrqmbiuVZLEVipkg",
  "key15": "2BTESLNLMyD1qrhcXBP5h4ketzbTU6JUW6FVmaik3Lt5T6myYSbk6ynJCfAukAAFy6Hum1as65YnC9ovbtwt2MZT",
  "key16": "mtUAvxEMWqaHPqfmX1E6ACJEwiiewuz5ST8wsQ5aNR2Hpb8yPiqKk483KMiC7yBEctsKvW9ygSLUV2vUUJxyss1",
  "key17": "3Xp2xBt4rXhLuC3mBG8tx341WUwoFrmMbWVsuakPYLwdFGdE34euKLxzLccxmz667EuKJCJbViNr97kttRW2yN6L",
  "key18": "2cnC3hJk4Dh4DWPMEBV9KJVgWo23uE9si2yzP5LgDoyjZ39zGEVpEwvZKy2y7NkW3UbKqLjiEpXXyZYKP2az2yjD",
  "key19": "4ko6gHsPH3rTumt6PJ9mrEPC2xFZ4oFtXw9ajSmVk9QyPen12zngPdyhWMgBSeL8zHdZ1SeCDJR53eFiFE26Nxgu",
  "key20": "4jBJ78NtporKujwFJiDeVGvzHk6DTQeKrR3AYeo5E27c5WC1yLxkYLX5Avk1Pq6BQAsA1p9Ywrwe48rTvr4Ncfvi",
  "key21": "2ozu8vQ3aUfqm18xV2HqBBWVSNNntPBp9xrHxnU2XDzAPaGcKCnwBySnEMQswUTe2FHNqSYXSMZncmd9a3SmMNLd",
  "key22": "4nP19ATZnGxk2gg9wmLwzZFb23LKYJz1i25sXL5rEh3gMWrueeAvTqsrfSDdxgGAEvpqbUdmoZyLs5puzRz3u1sh",
  "key23": "2JzH4sPuk1Rv2gFgHjujfAEsstE8g1YonHKQSQrRkB7o34Vc3JUoXYWC7dpWxMXWwd5UGawTFkAtVPR54wUVEKDv",
  "key24": "4q8KrWGSv2h8SjrKZjeeQmzng2we4joBtHRbqMa83y57UPR6g9DmveiyKtYEat1Z2Eyb6rpTFcHVW2GUcMiDTHbP",
  "key25": "2ftmxsaZk1uroXoPnARtBmwrLrWHSnuWicGDGjHB9uiEodt68FjcDaUcqDcsJFyY1hWBpikBtQN5sJL4SVoSuoxb",
  "key26": "36MoUFLAkz9m3jgkjcfswFyu6oXDLFySQM3JjBL9Co67yAtULhrkuZXuoQ7w4ei5mfCPoE2pT1xiMPJjV8T9YC2G",
  "key27": "2S3CtKRPcRbZTq1xeQ5VmEDfq9q3UUA5RwHgBEXdidQTKBdCzfQFromahEkU8kGkhJK12A57PaMA6A2PMbuFFUdh",
  "key28": "31jw36QKJizi4LKbK8cRnrCM4kyajw9JmLrxzPfZXRef8LzDCMA2sTywLH6BCRTqJv2eHizMphQZ9APAX9jj6TEe",
  "key29": "4FHCTTvGx3e5aJM1MzfZVmU3RdXTFWxShhKc5VYN39TqPDFxCThSSHg6kTy1k7y4gbMA69TTju5ntegpcaDYoYZ1",
  "key30": "7JeKK5PSojAFYUKv1VPctjugDCu6YYrLBLBF4kgq5YgKVptLDmhNniaKdjb3qVa8deeu8WwXBi72aA8pCQyB2Pd",
  "key31": "4cSUKCRpMPVGBncDbRCTEToNJPLTcMsPfNYGkpeKhzU4ins3gmoJTDgw2ZqoXaLUQcEQRnH8BGbnWd4p7Udz66Q5",
  "key32": "4n5VytohmfEqjKXtikwGAMrZfZRtn53NPRxGvHgNBGGMNqP7S3txMiyWAcmEQBJ7ABtrzu31YqUSEzRzRSSoLXkU",
  "key33": "2LrxvygoPs3vDD4AGcgoMmMXW8EaCcEAzsMTrTy26uC85uMUV2NfgJAMVvR7CDxLXipLxrcS97KE1d1jXU91NBLM",
  "key34": "623W4x7SMVGZx1sEijzPodBMKucvecdqit8oXCY9AqDokkazr3NvE5321XiuJTwWCQ11KnT1kD4bEMeb5FWbdEwM",
  "key35": "5kFcXvKxYRt4j3ezZmGxrt8d7TsHJNNvR838TMkHzgVQrWPEGiXVy5ageLpGXNDPZm26dddxvx1gjo2BxHL9mpj",
  "key36": "3Nq2QULtaaNc6xEH1hm2veyBQvbtKhRBbHcbgv9JkEzh6dtgw6h3nrdfknVetWwB1um6ymMLrePNkPkpw66ioZbt",
  "key37": "3MpVcaUwMxfR7hB8pmpfCPodoCnX5AQHJF87yBdy2LqHHWQn9pSeBA23gBjU7tzpVrhGQ3STaYsDAg8gFc9LJ4sr",
  "key38": "4ZkW9FrRukycCqLz3iW62PbxRTDy9tAHZsTcJtSc9CGTD6SbNKWd6YDhj3w7TAWEbZJhS1jhw6DBL8jk4THswYmH",
  "key39": "2Tifrav2rZyatyUVSRCvGY3FUve5KH6WbevgznENFp1wQsG7SkNPdhZgrA8YJUisZS75wTTpY4akXvSUJHJf8ptc",
  "key40": "4LhQqMRdmhhxa11CPKJsFiMdeE8jLpav1gv1XtijSYBoqzLpMwciA1kuVqXkAf5rV4xXFzZ5ywWf91bxdeLUuKFj",
  "key41": "3LRrWfy4bFnwsFH5gfCcch4tPkyz3BHqNMjqH8RnpDQTivdq4JsDas4aW6DkS5nXzGNndkCCacSw6rGUhJ3MCaV8",
  "key42": "4L3S1Kzz81fCuriMx1nDH46hjc9q8TyNRLkQCwTQRFEBCd2TgMLnA4gunpuv37keQkMvdnJJPRHHCwaKX5oG7oUJ",
  "key43": "2mV9eQ6bvMCEfcJ3ksvz7TXMx2EpZ5u5nsn9DPMrECqToefZCvAFhfyGgPSXuePEfmqMQ5U9aQXLJr6s53CBSEu7",
  "key44": "5iqmFzxTnmEye7Mb3vy35TSxvZkVKbfrWw9LhSvBFU6Bx1KSV4ZxxfWhTs58iA4Tj324SiaX7rNr14V3YoA5mp4a",
  "key45": "4NX8WD5bnKtWRo5deV9ckv6d6r9J2B6SLNeLeSaYWxqzzey5LAjxwRfa68oB1An4WsMwdyZynQ9KJd1QDGYUuej5",
  "key46": "5j73RTiisrNwRjeqnQQ9zNLLKHFdWVbNmoFSFNzpyRrijkoxHHfbJLs2xA9KSPJsv7DtZ1U5MYLbyRjdmW2x1naR",
  "key47": "LnfwsrncPj62jj2wcGjr9KzCe9HXvqotUXTSyfCoRFT75FNqqg9VnyvP6i43SSxc5xX25aj9muuZyKWKiZu2S1q"
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
