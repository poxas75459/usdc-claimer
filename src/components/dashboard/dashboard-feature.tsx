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
    "386HXQm44nGt7onCGhyMHmZUbg52h1mSiAvYrqbAKxAJvduk7fNzZVcub1Tu8rJ6EA4d1k2fQgnsNn9KC62kYR1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WAWRdEFp6MPNd67eVgoKA95BCbvNtEo1ukD9yJDMrWbmWAv49fZUEZxGHtuATfAvUSK3RHox39DCfZy2TZYmkJV",
  "key1": "52VdJWYx1hSbRvMyFyqoD7GYKBm4mSJCnqHuwkt5PQeZVzTKZbP3NQ7hsE4xat1KTazeYe2Gw2KPHgsHVzUvNa9o",
  "key2": "pJMToJVaeacLKSR8KPsHzw6wvEhtF1EGAeHLJtkyJB8p3Fgm3BZNtT1tffCnF4FHYSqCRTdPq7JkHZ3z61KmxGM",
  "key3": "2HGHsdCpTBwA8gbcrV9iqqUq5Jnxs8pghW1nWwSyGDy6bStmYRhhbiBdJGcnfrwJssucX6v85t7ZA12wZiXiYFs6",
  "key4": "4ZUXd3APwQ2UizFu7LxpNrgzz2NPW3rJCE4nYLwvSdUCvMrHY6td78A8uvabCzhNS86ERnXLT7QoPXHtJ8VGjvBk",
  "key5": "28Q4GWzpUuGKYBWFJFwfk5xFAxJ62yfbnGPYyrDBtc5Y5V5eiLQ7fg4mccqUi2m3VU3M172uswLAzpdmem3edpUg",
  "key6": "oyE7rCE6zyi9RZcXLpJaAKyDp8asJmNc6LtBMumoLvAreGhtSx3gHQ8WGz19bro8SQBtrp9gvD2ppejE8491mhw",
  "key7": "4TwDvuKKEmHsTuZ2aGhupUGFd9azfSMh1m1TxSxE713m6XpntoYQkR4dVE9uYB5bUsuoUW6SZpsJZZv3vFNaQEen",
  "key8": "4zcRJvTLA2D93gMF8NpzAKp5XKFBSd1sntLD8MugbDCszusDRnLXSfXCMcRX1QyzGKJCWw1XJQrk68NxZYx4pUv5",
  "key9": "47dUZ9WZC6Dc8gD73kjRUaXH1TTXi6JfdR8ZDh5ocgMfXUrMHNGy67qzyzGk6VS37KqiUtHekE1E19kXTGns3cHD",
  "key10": "4CPMkZdAPGzzPVYpZoNLbgYK5ahjjwzPQaYfq4q5okWxNi4VBorpHuo9LuynfPE1SfXWHVttUuhv9BLb6VbSCvK3",
  "key11": "3MMPTwXPcjQNEcsAtg6nPNHw8NpcRNiDG6PfTnQmGF2byi1w1ySRmj5bmsW5RXDLikREoBsFFb22r4ki1L6CEBHj",
  "key12": "4EbXNAorHsgG21oLQP1Khn8Fk3vfLhhGhLjevD3bYMviEpZrByENhdCV6HNdBFKsMed9CWJdJPMyZdoZfwhzTqZ8",
  "key13": "2w5wEzxZhijitP7zz4qxDsadAozvzPFCNqD4jxFWMLDLyFmyijgRGFFKWzvkZmze9cZNLGq4dGc1fBJJZ3irbTeh",
  "key14": "4d6KDuDJ8apAYC4SPhD4k6rZKn15FhkSrPRrmA9ZKGuJpje2tUwuBxZKufBB2eaLwXk77cUvV8yWywWRGHsjHgjU",
  "key15": "rk8ZBSLgvyPgXD7vADv7fKn886KJvsH5YaFSHk4NC1oDi4nDMKrYPBxgDX666xN9CLuPfAA8rk3HoGYofnDjm9K",
  "key16": "5imKqrtsERnQPH4Qx89PcYVrqJJD9PzyLFQaSdkD6ZxtjrPEMvZ5hp8rb38i6nHdwCoXgLmnrT5hCUAwHLYSC1cg",
  "key17": "4TJULCb93yZhLyGohjLstYBsG22UKLodDBnFEUXWYSx42eQ5M5sqdgkMgPUG27PUzXSqfxt8tiXT7jkmjREfYqcJ",
  "key18": "2nurqFNgNVvCvtSh3uG6sDvR15jAwZ7q2hfUfGj5GyT9obkYNibrCcKNEDTRYEJPGSRcsD1AbkBKyKGzdAAGCdw1",
  "key19": "2A5Hs5i4wRu9fV11vCxXaWg8eNbwnDtyS4dznSLVJ3Ai4fvTi9HQT4vHHEpiYwoefaSd9mk1TuNHo4Zd28NbT5ZA",
  "key20": "4YNN5gjPSWp3KJRt4eSK3UqPMbb9jrUjZXQZhf7P132Cp7jPD5ctpQyZfznFnVhgZkanwQJfHS3L6XhGctC6Pu4k",
  "key21": "pH2fwULkEBFnr2j8Jo1jRU3U9v7jfqTFcKoTzK2uVQsCGwafBAxyyiLP3YQVWYPtbZdFzLHbA5kuLhxsxWCcxNX",
  "key22": "ZxyJ8N2a6Ei8yBioxgAXMZezRDiHCFsxdExQhDjpDTMC8GQHSM4gFAZtdAr9quyx6o1Gyf8v1qUfmgkqRFpeuKD",
  "key23": "434rXJjhV1y56oDraUZBs2Miq7FuyUMjLup7GgCajJMt7hYfBLVaDUCxkdfvXME3b6gYM3aWrj5zhDkXkQ5xgaEK",
  "key24": "5S6wUtVRg22bULYs9qc9thkFkkRuokpR3oYNzWRi5ABH4E4TwL7LuGcWu2AxWmiDmzXf5Y8ZEbizo1FuctzdgHzY",
  "key25": "Xq2TzXWxcdoWySZkz9wdtNTajZzZtVp8DsuMJigMcBmRHBbcDG7PiSqxXAJ14FUA5LL4nXMaZHzvMZU61Lwza7L",
  "key26": "4V4pXx8ZnT3fCHg3D5UGMBFiwisxP5mZVdzRhKZuzu1rnpnDc3VuFSdco3qZNivS9dhpHEeXPjdFXinVrx8yFC3G",
  "key27": "53wUNocHdJWhKFJHusyu43qHjJXstDmj9CTbcCBaxjomDqcCNEotDbhkKLKj7xtiwRwWiVVKbiVcDieAprnTdmQe",
  "key28": "4fgtASazhQF8GyW8QkSCEywT4zVrtmzaGqo6dvQnuBfJNZ3nqcBjd6ahtbFbEofsF43LXc6KyFt2LNptMthT1nk8",
  "key29": "2SnvpvHzfkLPnmnNiLFBV9DYm16Q3uupdJUjX3Ua1Qi1N7CemygnAzif1qrqDGaEhEcr3VX651re25eafqGnK7f2",
  "key30": "3NQjskn3tXTsNc2QKo1AyThCxz4Ytxa1V4jBT8fa4RBehAayBKzNaDpDq5nEDKKE9zQDNVeT3eNWhcUf3NtZHo7v",
  "key31": "4XG992tBjSoPfWdVerbficvHux8Hnao8Ghja7a1JSQBzeQjNicBNMpJder1Hsr4KdbCBNBmhr85JnaPKhs1hLrMB",
  "key32": "3iudL8PaFktSGdh8PPeaZtmnhm85VkS1dr3j1sMWfyH6QTSFx2hsBWasYwZfnVLVyfTg55qM69atGJtXKHMtnGtV",
  "key33": "4QBVmDJhsz5JQUc5UDigwnmsAqc2vg38SSwtLPjGPtwQK3HYWqqQ5vZDFwRHFy55P1SNQn9SuDwuNtdL3A66UAq3",
  "key34": "sfCtpJHZAMy9oGrmcuwGAnfXFioR48AVgQYfDxXwWkWzTix2qEx71JnXzwXAuCRHUGKphJooyJF45gphBwft4yZ",
  "key35": "tkRKzf5G8Cgxg7QNuXbo5c1MkA3PsyPcwEy7cfVUsk8VoDouYVFa5fkFGcMwrPskzg77SPSYizjAyAqCP2fdmAu",
  "key36": "3CFzqnXtBJNTmcDHTMFK4GeEz5eh9TzvNRa32AXm3wrv3wwxbT3Ma2VUSE8jkyeHXb5bM9Vw4cUqgitgvSM6Yfxm",
  "key37": "5MrEXtANiEX4sy6zYo76eeYBzBgC5SGHX69UMxDbus9Q6CVB8TRAnczofWxMSBrssCE6q5YDx9M99YwnuSJYVHfY",
  "key38": "2CUWbrYuGueRyUa9zSsZddw5s78yqS1qP5UzLLSxB2JGbQ28H2QKGiduNdwk8ZrDPAXtiqagkXv7WnPARjZMRM43",
  "key39": "4jpMsxxuZh5aF4D391P5NVY1z9nFWdRAEmN1Es81bQuMQUTKMYATsWA363HUadzUZPvwZQjHeNvhs8D3N2o83ief",
  "key40": "5P6pR3D3xN6FtydTjA3mqokH2rKD947fnvcJKpUt2oWJc6mC4MxGhz5LehojQGysZGZtz41PTuFDsMyBBg9ZFiZL",
  "key41": "QyYFY2H9qy11Rt1juMqpnRtcMBQ45pVd2dQpEkh3wFLjXxrvjrSzxy6S2Q89xMGpiEhBGpwBYWtB6PHPcWsm5Xm",
  "key42": "4HvESyWtcRbt9GMzYp1UXEobqZEZXWEpMwDFXEUbpo8fFAKS1RY97RZxazYjsPbto1jadF3CzXFvCaPJY6ZtwBmD",
  "key43": "2tki9nM9HKq2utuaBtFMBatxtGt5E67AmejzmfQAwuhY1iTDeAYeyjWRVDCkTwdYBiuFtPibVmUPinmov31n6JpS",
  "key44": "2EHpj1CpeWPTGq9FsfyNTsCCTMupsqUJbxNEMfsUYZ43yhpccphSmcygxzrw6wTNn6rToq6V5t7WqFxmC8UVUUBr"
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
