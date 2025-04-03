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
    "2CKAz4uGFBtC1wz3yLFWGQNyLcTUzCm1N7gK4wmruLW8U8WNtzAqcAM1BsZMbAJ4FXV4qXGTthxigkFYPMn5VgQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o35GyQTBMV2yyUmvX7ToYPcSmm3UzT5L1mR1AMDUquCswX1CG1zrWchtb2ALQfFjcpv5vSvtigihe3AvY4XtzEg",
  "key1": "5NnYF6evigWNG3KwLgWFc7ZZL4WPziUFwY6n7CsWNo1BqEYNcqnPtzku1qkS529fdiv6w2TRDe8TtbMKXQK5Pva4",
  "key2": "3z8mnihYXP4gfV57GqkQEVuoeFQKPSrMizeu7E28uvbbdhe2KkMpu66g7PRkVqGXmHBisWYRVxuB67ZijVNpdqfh",
  "key3": "37hRDjQHSZRZbczc8CXUN1qopiD8igmoSvJP2VZ9tXjZBYC91PV4FEieJLdtfM4sRa36NK6v7gZ13SmtHg8LZ5wM",
  "key4": "5211F6vQGuMeL5Kra2FnbMmkpYHTSv9GFE2bYUWXUX5yrLZ3S5KiXNQ3UQRohtYiV8xZdUw63nvaDrdSyo3VxsVb",
  "key5": "5R4VvzNW6rbzKfRFLXmUh9yFB4zPTstEY2C4aK3jpSdhRAaek3py5YdMJLd53KYN2HGh44iiMjqwTVbX9aLT13Vd",
  "key6": "5wiXBX354jwJsYuzwgBWoQQjjGmTVuDBbRLBmQmi7nNs3SxGBb7YhLiWvpxJ9zuv9m5RJqYt41FpvnAi5g5vAesv",
  "key7": "3MuLPMKPypNy1xyRKg9duuXt43ur7SzSPGHL4ZrYsAxDCYdAThqU48MGNxPCPBahRpUDXYraMUh6G5zicT72FeHR",
  "key8": "33EKiGuBS8nLxGVVuoYTQxFtjaLBo48h7oD2qMsQFUjpoJvHZy48pigezTGx9U8QSubUXMqGFB8Tmm4kL8ZybHDg",
  "key9": "4YmMzFhnsrbAQYd3jes8s4GhA4TPCL2SRtzTxdX4qZUY6Lk9YmKwr5w56TmQEkDQnR8PCrdUeuGAWGaa7nAK2Zyn",
  "key10": "3r2M8BBRGqmKZq6yQdmV3eui78dTh5YwCWdUjViUqbTrVchvT5d7bnhiUCpZnof37rtmJ48nyWSfkDZMSKiidQvv",
  "key11": "2vT98ifqokzY4iwkwEm3gom8gH7K8tjFCepWPTwhPXfijzfUkKkGq71QJAVGZtu3cLgjz5PD1eh3e3h6LDeCjggp",
  "key12": "4WhTNksdJh7mnfbmWzmLMLT4FdKSpEgtd4iXJ4Umznavxu8b93ip8K4zbrXwKp9tuAHpL7Y5XQgeqpbo3Avg3Khf",
  "key13": "5rd4NwFfWCVFiYnz9EntWjd1dxtAp4B1UE2YnoRRqToaSun8XeLLgDxR8qxSHEPRipX35PkUUUD3iqS68kxjHsTB",
  "key14": "4ceVkjbzQX7NSKvrq8FwDzhxSuhuogdhJsYm9zGvcDUPB8KKDdjwQHC2Vf5gaC4D6Q1PRiEL4uEitY2BZM95Gx5G",
  "key15": "4ebLnUJ4EKUrdREVHJTvh3LXamF5sPUsPqVnTcJpNe4NpXyWzVwM8N83TM6zLjFeu4ZpbT5qoqrKrMFP1cbMrnuQ",
  "key16": "VwqogC9NX1x3agLp9cwWjUNvcS6D7db7pXKKJe7zj1Qmizk6aWkgy9ex7DACUmDC4vXwP9EuGCZe4NPTNXgFUf3",
  "key17": "fqdALPAp8f4dSFFBcHB6cQD6CMGfX2C2tQVnxrnf92tSTii6ZbuUeD3g5PCkNXn1jL3cmHeNCzYbCL7p1sNUUBt",
  "key18": "4CZX88DeRhNJgivMaujihwp76CWXW9o6HjyJUfbLExpGQBM4bzZQ7jnNwTE1jfjWJRHx18XAbJmLyEL6xR6TRu9b",
  "key19": "RVvWkFpB5h6dSmxgS1gwfKgcxELyyPN1dDU27dAV4eTnkyUYURncgZpGne74REpbmxZSJ17MgW3JgH8vHXevyad",
  "key20": "SrwAW9r65YEEb3ybZMmJdr36N8yVZohXKpdayQo6bF7G6k3adGMQgoT3gdooqBP6B8UdH1QoKoTsADzmT11zQSK",
  "key21": "2eBzYSGfrK9jz6upX3PRWissGXsYSoWnKMtQEaDuqyA9KsWtDVW796wee37rEAndZVWZLFwB5mMVrASW1VzqWD2B",
  "key22": "2K9d11pFQ2k6bBhDWxVRHXoiyGazF59ge372KbDvyvpqzPXhBddEV71ackWr46BLH29s6wEPwJ9VA6GPvjBmPDRv",
  "key23": "3suqFgFoZSzYhFnG49ABDJLtjBUCcuwR3jdo4bGBGLRtyoWVL2qCqzAg7t7MuLg6xJ4BhR5FVKhz8q9i3CBfponc",
  "key24": "3KTWC3EbZt4vPqHXEfYcx1Vq9bqiWKx5Q4ZdVHxwXFZ5uhHy16p9SCcFnJdXmLNyVtWstCGENyeATNtzLj2dNTt5",
  "key25": "2zX6mCZT3qTnEXg9Xw6nB4Xi7fK6rNPCaiNgtuDv3UmQ1DbCuQN8wcnUNyx41re64kDsFZtKreDBB4YgSXCcAuB6",
  "key26": "ka3ix9SinpBFz4dsz4HCEKs5JvFEHggjP5hPs2buFCxyGMynKYt4vdFfVGS7X2CshEpFv4Fs5puyt6PSmMPqEBB",
  "key27": "3vhjXuvYHtRQ1ii5BsBJT422kGwaJomoDLVUHRAsf4QmXT8qkCiWr4VFzG9iYwyu1ziqV5WruXefXtD9RjxxPdxt",
  "key28": "4s1DsWyqz1UCRczj7rmuiadr3w8PawNuwMgurnU48gTdrcf8MXCTEALhR1Z3nAnnGv6CVDT1eGy8QT4fBJBLUnZE",
  "key29": "3zvvxFjVWvADcHdqqDjaVpt9Lk5T56GGRGbvJzH1TDJD1aWQ7gQeiE54rMBXZh5FoRjdxurbFwzd5eukX94vbbKV",
  "key30": "3bcVJ2gqTKHqrSAxSmKEEPAN3z6GG1b21uu3tpZxWNXbo6CNJ1nMVNMgC3QJ2dczGTrJjH5X1QaX3CheXKuv2ZDi",
  "key31": "cUnvTodtjVEeAkzeePQUsWCMTbiD77j992JGUPFwXzUnH91Ko59mAVkGyZcdjRSRkYUbsdbvLWedR4gUnTZ26F7",
  "key32": "4YtA3SVh9k5kKzJCcDHXnzoGGNriXW8Vc9HxPGb8bxiCpyQGdSKY26cKX32HzraWv1QgmaRPpGzu8FWTuZ4zn3Xe",
  "key33": "4i36hDDptPn17Y5S771ZUcUKV3Mj2A18AzCWiGQ9H2Wyin3fzAFcn77SZzSEBR5EKazEnugaDuCF3HPUu5bdQAST",
  "key34": "2w3SNmauZpbkp6hPMHBTEWbE1mYxpgYatCf4ZWDgpRGhAUaabsjSWFgU69W6TH9cx2LBFYkGVstkddrY5ahztwg8",
  "key35": "2aQmdkE8p588Pu9U4QMcUxzmmsTwyH6UsM2m6kduQUSBF1UntDTg9ZJSJkwHKNsQSiWTtkokPNQfurvczDR1YzqJ",
  "key36": "4Peuhh2yQiXuKaoNQnQuPJWLjaxgYcQ27axJ2R5pRY2GE63mxnpn7aCEGL5ihV9KDfeseMJtfMRfCR8nGLGPHogs",
  "key37": "2vPvGv69P7BFBbevVPzTonjVK6LF1iWhrVbnsS9ZWBqU1sv4U3zE7nZJgotgj3HLchhcB4FrJY5mKhbwJA7zyhVq",
  "key38": "t2qe7tZCwMwrZj8naNpUxEcvaxrBbsGxELj2uVCWdB2WxHJtVURpwD72wqxaCcbqgYUjPB25gA9UJohDdngwQdh",
  "key39": "2iLzyy7virgHs1QMXkKGFnTWMh6sGAHFVBd1Yun6CKKwBCdYZZqoQB5C9FJmX6W3M7EwMXKKXQ6NmEXqzYU6qNUV",
  "key40": "5hErjhdmag9dMdj7NW4ix1hJeXC3pcAg3GuLHSvnKbHY87pTDZ1NSkfCHzbfEigHfpduPcTkeFF4gY2hygwuS56o",
  "key41": "2e7ap6vzKzGz2w2EbV4bQzvQKMo27q6akMnPPuryNa3x9Q6osfsUHeRTH7n84WCZqmhVj2Bpt1fP6WJiGFemAHo"
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
