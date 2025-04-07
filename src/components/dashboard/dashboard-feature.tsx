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
    "3XESiGWkPhwrjni9f9i1sqtZLUaBBRBemZVeemXVi1VnpPvaBgq2xUeENu4uFFtHmQay4WyZhmnJcDkLLjefAJgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36u3nrc3MjgBNAp9jXnstKDTfoGQ5eNKQo7V1QvPMBoT2ttzy4TmKGgT6FsrcU21oTtGNZp2QGASHPD5CStseWDG",
  "key1": "52TfCdDFV3Zfk2HR9ow8uk8QAVL65Gq9VqGdsN9SJBzK5LnHvt2adpncJnT7d5usA2VuBAytWZdXRt2CuZDfMNH8",
  "key2": "24UQCrE5MYBuaP7UdaYXCNXf5fjAhg796rUDsjonvFNXjLu7yepVcTDHt6FGpGKcpkJS6wXm7uNQ5RBtX6LEmjMw",
  "key3": "4GRYaF4NwqqzaEV7S114Gptwtc3tzEJnzY2PmLQNDgKRWbRp3Kewyz2Cv6GGH8b5ET4Ei8Xj6kFR75JkqRYNz6Bq",
  "key4": "4qKMiXNwNDP2AAkhRw7RFsBgysTw8DPHEU8rc7TnUApguNXSPR6zip67P9PHC4ePnAvUX1npnjBPrunXPadWhU6u",
  "key5": "5oZ77RB3p8RKhtJ7wFjGRZRkrqaraSxnm9N8dvWfYgAkTsSxxCi8TXMMVxkPC16ok7dSCF3oNG9WAVdRZ7xu1qyS",
  "key6": "4pgUAy6PqA3vtPVxurJT7nsFv4PguWBbkP1a5Ux5SohFnsWSyfK3EHrSPp5HotYkG8zNzrUmMJo9XaAu4uCTH97i",
  "key7": "4ioXwDuSrRBhkQ6XArW5NHmdiHk7j8q5ZimjJ8wgVXZtaUzwsUGraYbHzfp11DGYRwULeJLoNjNAUU55B1qYt5EF",
  "key8": "64sAuJjxZ48hb5jBs8UXntNecnZFZTBzDfo5PPgBoAvNQ9z3wWHdAATg1LyWT3Le7rvR8cMWAgCiiiW9NEtGHGuu",
  "key9": "4KuMur99YfbyuWDZDUSRySCmAy83uSPRD7P2BjSZ2WbLbatCwBDCqFb3mnvsnpY8Vu6Be7hTaZWniZWDe4AxGxDm",
  "key10": "2HCnPgNeTw9FuXPVtA3zcESHuzMstTG579v7MXqPqKr2D66mCgqQmWnKZ7hsNsGSb6zpaJxJZDEEK677z1YHDijW",
  "key11": "4FV95vrZzTmku77ajeVGkqMFJdCRtUnNjHmsNHJ3jdzp6ocJ2daeF7bGkvc4S9DMKQ6B7WpxxUiUyPo8XsSbcQ6T",
  "key12": "5uxdDGQL7EGaUDcmfvGHFP9HKggF3P4mi4JKmeC1ssW8UvQ6DQ6D7iKh9UgrRe4krryMh2r7TDCMPp3NcfuiZQXX",
  "key13": "21WgHYA2peX81FcvkNJJJvSAnhzmJYyBBbUCFJyqgeu1KCTGSFW2bcCvgbCaLu3L3HABigWGLLeTuoW6JZSxPtnK",
  "key14": "4Md1Rd83eFQ1hUhSH5vVR8LEBW18bCid5MGLfreeTjH6GJCa57cXNhxbQjg4T3eLn5HcvS9MFZfwDERS1hcxeZuM",
  "key15": "2jNrBujKEArbVigzVU5HwtmszrdSikSDuRAAc7whi4V3gBuF1sDt9LfApE9u6ubYZwCt1B4BxMpcyTiTwNmmwjRa",
  "key16": "5kEcHsVhszmpThXwErSLzrP96c4xnoFRXVaea5TXC2T2C6SbmJ3A81ned1D7YcB9pd45XDCJcNKyFPvs5MwjsHwj",
  "key17": "tzwqBTXo75ce5ZKgJUhFWgRgodX2WiGsuD1EvE7pyGjs4bbkRFLucCaPJrmzum8dFqfvJanjYDGoR4DpofpRYgS",
  "key18": "3KNgrc3KSDzMfo4kpuj3t6ntudPBXPH1gvisiZWRw17Xg6CnQ9hqxVtbVjmZ2gvtYeffr2Fj6mXmg6FBrszsg9hq",
  "key19": "32fzdfjpT9j8BQuGP2cqhga2zbAvTdDbCrT7nR93KeGSvZxuZwTixa7sVwZBoTKovRTKyGbHXA1CTYYBXegHc69j",
  "key20": "4cL2tddkDTkZLZeVkwwdxzAK9ikbaiHut3REXDeQMjPM9rEhD8yrQywA4mMH1jbcHxWdAnJqbrVN6tXYbgNg3qRs",
  "key21": "3piQE5cmZoFAgrn9Upge7XW7zUCt2ZUpbbmmnMTDWac6AJ1pdaB9NsYpydre7z5mgfc8Rgc7qqod7LGqCH45NQBu",
  "key22": "44m3Lsv9XnhDbDTYRnW2BXLKAR1xm4qASocvZV8RPzAVRCX5qWnDxBjzwDYxoJixUCGE72mFtHQrvpB2QuWJEEpK",
  "key23": "25k4wQfKA6QX5hKQagPehyLPMnCtzGMjVJtUKDM3mXooKHar4XPYM6fxvGF6vqrtcgoWhrWJQATEGd5snGs1x9im",
  "key24": "3dHMZCCSrkd21yR932SYsr2MqkeVk5orbnfP2U35Wkb7HAwSsxjgMnSWmoLAFKLVTTRFr3uC1Xvug5MebSgquWC2",
  "key25": "3L2V89b5zxrgG35UrWEdaJgsW5gha96C6TGLTEa6RNifa4W7XeZpb8CSSqiKiGMMdWWQ2TkwE5Pr6oS6GhyoARqN",
  "key26": "49rAjavewRnBqEXCLZe6LFojAYpkMZyXSfQQfZkRy8ebXXQkKwkQGsabwLeXHv4M3MnW6qsK3fQD5PBGhAMWv3Dt",
  "key27": "241U63yAtd7H9Ms7nHH5sJ1oN6RnqBWsdHba6kEy4Rp9S6QC7hGPGE714knT9xqGJwusq7zSW15uZuL6EBJ5Pujz",
  "key28": "y36oRkt9dL1PBRWU1eWYUpdZga6DQws3wbDoNfrXVkr6PKMFMzuKHTRCHcqVatDudVCezSMxcANQfsZ8PmbNHhn",
  "key29": "4npGEMdw1pyg8cJTJiqSYRjTrAz4LTJvepZ6gxdFf4e4qcZmaNooNUvcXuaTmofQx5EAK7nLqzji5MnsK3Qmu7SA",
  "key30": "2WQHsN8ofuRG3JG54QQ2oLmiuaTgudFmS8SxLPpMZBitTKHyLXLRqdEAhfVFWaUmUdL4toEDt25PT5cwU6MPMdDn",
  "key31": "VFuvbMKd4V3PVYY8yYKBDBSwKS92HJ2SJTBk4XUnQnwQKWinixJxyz4MNLNawpPTks7yWTPhYBHGKLdbB1Hy4AS",
  "key32": "36FDcgR4meK7xdAz3gSADJ6L48biHkDYEhJUzMqkbYDrzpM21wkfhjGUwMSzGqoWBcuWvBoeVnT9i8WF4o8nFveD",
  "key33": "4YbJfwyNwfxYZPNVPcAw6G6R45U9eFWw2Mfhqqh7F894kcnosDueFThrJnduVuUUTGp4VDnmR2eK7RvevgJtCmyE",
  "key34": "41Dxe7M2n8zk52wjQoU9Yq1rTDx6KyDXpV73qvgBQs5PmXSzk5ZGUy9zQTJyFeH5in2B9gcAqwZZ5HnRLFriwfBy",
  "key35": "2EqjbYK6KJRYuBnCvBs9ZiEa1dqVmWYkwWVsBwhgeV2VKvgeiPypr4ef9rXdxe6ZztXbN8mZCZMbGnjtoqZ4vGDP",
  "key36": "5ARQD4XYtBAZW616wEFPHhQhQj1XoA52ezwJ6DA2dxJ1KK3iSFkaeR1tYZhM8wtfDT9z235VEgC63Gs6ev8Y3g3Y",
  "key37": "2BpoS749sLGx8TqSYe84BMbisHUgV74yqZ3kpV7m5CvcWQUa1dGRNZgwkvjMgTnQVovxVrdGZfQsjcZttDghsGXT",
  "key38": "5ihoSZt7JrvUcn6U5iAvYrdqLSfqxSfnGuxYsoi2b9b3bRJSQR1vQMcNnvzcE3gTyirLjxQQ1ARvYSPMtAnpbtws",
  "key39": "2esvwHpRkYf3WY4XyEjogbGqS2f2icLVryfCsowKqraymg5qhBBXu8PXqcqpZdgn9fweVk9bK1tfxdze7KrpMSL3",
  "key40": "5JxxFuVSoFQ1b7AxWJWRRg2jZDVxGLpwp9y8i4ijTNxRyv8VykqfGzFkPtwL2Yf54vHDtkqZXQD6hpdJLeeGvrv3",
  "key41": "4meGtfN4ZsiGDVcjqTTmHZvacJ58ZjmuRp2r3pcQWvTomnB1xPVjysEexaXq9c83UEGAKNvbUKg8HijzF958g9rX",
  "key42": "4VzEMLdWYAkds9STVhkYeQmnHhmd228WgPQgaEUAMWhNY3gNopmZYoVkcjXaeQ4SjqTyB5imfNUgjrun4tEzLNSt",
  "key43": "3Ttjpq64xYitCcUz2msN4aEYtLUZR4F7KuGgHfXFVfFf4bsuFxEyKBtqfXG2qK4yshpQxvx5YVNy1NYhvHnkqPHK",
  "key44": "3oQ1YBVk8XZgEC2rnTM9xPoShNFts1c55qJfPBEiQD51zj43KYgumrsmuhSb4z37i5wuAmeCxUof25Fe4Eyui7QC",
  "key45": "62N84RiLReRiNrfcovmq1bf4tDTz1dfC5hE8heK5L3r7Yd1szSi4e7ekuP3jZNCoNL8nrAC4kyMHWmqnvRrmXHVa",
  "key46": "NVJPt7zNEiNPRVYxEyemP7xRv4PrWxvXBkDuHekWmPCDsDfCM9eGwtu2YFpm34kjJMceR3ehVmbrPvzwHPYKvtt"
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
