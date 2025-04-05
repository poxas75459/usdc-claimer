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
    "5bRH7v3WBBdfowTSEZauLbxkanH9ppKGswhyJuXfVNFgqGZDvj5yfB4cXxjEKvaWasQRJu4XknqqtCDta9k2XVvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNjdT5G152PmpG85SDbXyDd8Wmcrc2KhaN4oiQYTva4ccPwBaTsAc3T68vcZ35exqMGd2QccFyTom2gZHJLD7D4",
  "key1": "3NhhzGw2ANCaLW29anu8M5jekemmpKSgscRwRAVoCcU2vMbXkWJ9VGub3ykdzDMEf1hvxChvvR6G5zuSMomtJUjM",
  "key2": "3Thpv5h8DjgcxBevpE6g7XJVarB2oRW4hgnXbrNwygehRn9kaDDBq7zSPiuNqqRSXuDtQc9j4XBVmKhTypcfUR7P",
  "key3": "RCbLkuEsxpSqYWuVCft9Tm1f7EavaNr1zU6xN5FsM4ruQiFt3rH2y84otp9Qu9wKKzb5rjzH3cERMnR8ECWen4N",
  "key4": "4UXmun2qYDNQPJpNdWpAqKQLgA5LGAkb6TvbhiwL4wKVECcTcmDE7SBRqbfSSVuassSvhNJLKLUcSmERHXWA7iJG",
  "key5": "4qmqDi2yvNNPxrrMWkTtdt9WFrh4wfpJaHEiRjCWkixnH3CNZs3LvdtHzeDeXUAjxELd3puVPMkgW5DA9aapixob",
  "key6": "6Fz2rXpA338UApqQYYvfXJ2Hbpao22iQvWFBLbsRpo9x3rmtnLfXafSFUFAqziJ3GBHMoNWdj1VnFfzmtzSj9xQ",
  "key7": "4Yb9P1cgAVhhLXSRfG2tm5pCvCFhnXtuJ2EbyE9Z7fuLNECQnMW8PE65uRdMfaP128q3JEFBp2q34FCFoLP5F4Xu",
  "key8": "kHGHksgFHdRtSoWeHRvsvHVMxoKQcr9bM2upkaK7AeuWjTrZ9kzm7tE9QrXGaXK28Bsobo54sz4zA5r5mDh2ubv",
  "key9": "5c6DSgRJKBPyd6gpm1Bw8b79x8DRqv5wjkG14z4Xm7SUZPw16SfiUG9eK2qgugJj9Zw9M4jgBxm6h4UFKdRv5svx",
  "key10": "4mUxspfU1zHKVSBLfJz2kGE7hYfk4wveYJojVrwJcdc7nqaz7VFGSd5JBFQQ2aLSwdrVjFLiWpFiXqiASEPPKkQU",
  "key11": "2HDmKCjZ5NTxGKovHCe6DsR6AJw6TTVexmXqWobXGvREN4Mjoztqp3irkESqtdRW7arqzK44ipoybuYx6CvwgkUD",
  "key12": "5c2Z9VSCSNMYcitYgPjdnFhDHrPKB8tkFYkxYNT1wTctjxzHRaabRFoVSwkYA1KCYniFWuRFfVCgqLrHnzom3VqZ",
  "key13": "3Y4gA3Dz3jdpQYyEN6LeNyKPxZFEGkQ6pNdh7CdcinxSaMLLDj8bsLKkkHuMFGCUyPkMk3xurVBtSnmyGP8LmChR",
  "key14": "4NVxCHiJf7LE2fcg6sBEojXk2yT9Hi2yan1oKtSyjEQwnUCidYUWqjJ8AYFJoFvp5xET1t1fyq5xLxZcXJR5hyUS",
  "key15": "YEWLDi84yMUbsC49NUxbYT6LpBK6BsdFMHLgpcxrPN9BYLyw6cqU5qFaWBjEq2yHQbfoJQYHzyGV8YaCEuewZko",
  "key16": "4zHpM8vnbxYNnaYhq66RMzQXsL1qT9iAMATYx34aRcgJBGTP4Ct1sZgxgDGoGA8s3QfxwWsYbPHXZga3sDhS8NZF",
  "key17": "CeXsPw2X5BSSto7VSYjKaA6asaBVcweUwm8gSCnZCya9kAdrBRxJKiMsNpRHU3dnhbU1hUtc7io3GsntBqBtnbZ",
  "key18": "5JyvDPSW2n8xcAzFW3rco1ouQxMTv7LiifR489DzB3uvbijG733fEkiJR9MGKLiPRov8P7U9c4gUPkSEendxMfe9",
  "key19": "2gKiZe9dWnoJhdL91Z24Tn613Zon95vv8YDRvBGS6XctPumWNwFeRy7nRxSYoMcXw9jqSi2o8ciB6T2YbwSgjyMS",
  "key20": "2zFX5VJmb4NQcUYD6vi6m8S48s24hhi7VphNjgWkueyVbpgz7KjabiA9659eDmbY2FUG2x5Q4GbpT52P2PaVSNJ1",
  "key21": "2AhaGcL18d6ShpVbsq9qRhdjNzWQmXgCWVghH6wtW2GTAMZA3tiS2ZZsrJVyd1KD5bVyV3ZNCaQa95nRWmP8iLYu",
  "key22": "5xjBoPQEQ658DJCyE3HEU9SzL1vKZy2TmehhhtiKXWrSrsLcEWWH4djdtBqMji55RcBZHpDb9vQyv2RceCdyZ8yT",
  "key23": "4SkKEYCsAUHPMqxMWhWkxYzDaQRFoEXp4PW95pyWcJCeEN9tUEN6wmF5PbgpAGTsXL2cjbSdjc8Zjygo66XNxzp5",
  "key24": "4Fkff4fLAQgVJLpBiFvZp4ncgPWNU64kzHftJfSeN271KBQbqaSdBvC28cdgxWmFGz46xyxVxyqK9YNFbbWg8rb4",
  "key25": "3JyQRtTx3e5NYs58TZcUAChfHW2FRZMkdBsVkbUXzpr84kjHN8qxhnGVqC4fW5CiGp6QFVnwSebUeMw81Kpk6yZ6",
  "key26": "2SNtRtKsog1KVhHauutyzvxUzCNMYBosfBnphPEhAzL9w3wwuHgqmiyejJg7Vb65aENhJjfKtSyhXUANy5czkPHY",
  "key27": "GWmsBtsWyGcB7QMZPhr3AfHdopdW3Epcchudic27mXj2pVTkzsE1d68A7717ZqvCGBVBdjTfhkPaMLaVHZebTQo",
  "key28": "4nS1ykZgbXMfPt8CNz9FwjjMVrh9AoWaLZC87RnQFWsLuiec3TfBSFRMiGA5WnQriJvNkgVYU8KjHrguSnExHfdf",
  "key29": "3o5MmtjVDzgpNEJTmvx5ipm4ZSNwBSkRkay47CbfhwWXc2AvAX3TMqdkB7cuLHnBWzacCfA8Dk5j6u8Jybqyzw7z",
  "key30": "2XzZUzZBLSU9m3L2D2HHzRAAdRqaWNokbCfFuYTTLSXEWh75iPUChixk7TfH6GjhdsG5zuqBzCtrWRpEMsyXYqin",
  "key31": "38kkgs6hGRZ7PWEix2CwaaZSF5RHj1nUvgXyfbzi3ciQe9tsUewCMYBT3M73mUUwtxxNRxfCXVhtjPVpt4atVXsK",
  "key32": "vZYiLy7vUNWzk3zkwmegBx3SPJQ5Lne1CZh1FwxfTmECYmnEG8B9G6EVa4MZLHymxUZKENe4nNKWqbemRQWkuME",
  "key33": "3Svmtry7ZngfvAJLECvNZo6FZeXdqp2vWEunyEGSDrThWcA6ifkSEiKJjPbtgPjQb4kg3XCdXUir7TXtTQxkMpwL",
  "key34": "37wP2zyXpyi4FtRYj2yVkFSPpnbWh1PqGUPwTU2AxQzC6d61SJtfFgL3qNc18wATpUKiTxhn5T594Wt9G28n9sTF",
  "key35": "DgFBgg5GTFMGGfcAqDxkbwav8doihQ7M3Mmk6v36M5yZHqnjvZQzaFfcxVg8De28nPfT3YXt1MFbZzoFa6Z66zJ",
  "key36": "5KYp4gqqj38bEYqd9DpaqTnh5gxVuYWny9FGXJ7YYL42XtJnkvjt1yNC8dte2kDG8s8GUHGLt1WyberGAizuQXoc",
  "key37": "cyXNR6H43qguuNSUwPG5ks8tVXKV3XCbYdUHdDL6yCYadEE3GonicCAWZ2yYxJxhjSMtQSKXAhaZy4WZAmbetCu"
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
