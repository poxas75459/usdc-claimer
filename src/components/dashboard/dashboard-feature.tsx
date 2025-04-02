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
    "4yAfeQPRK5rWZN2nVKkmzgxFBfnuN16MULTJDt2AYM283NqN3bHbXHKps9cxtzDSaSH1zwhkbyrgJLTnMiVrEHek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6m9daiiKzstfTUeDmoL1fkxdhgWinejWdRQQ6bULXbGKDXGSCBt9sQvjrMUuFDyC7StXXeYhLfncZtd7rJwHRw",
  "key1": "21qFyEmdFGugWv4AMbwE5VQtnwCw4GTn1sS7psAWgTjJXqJxZg9idraSZtftcXQbhwuiokDSUxxUwyetkjZq8fwV",
  "key2": "2PCqTRvzYChQZCFAvK71DZnm6PpDhasi6Tn5T3MEv77CRdxwT7pcUw4RaBj818G5Q3X9dBp1UXUtvPMxATWWripL",
  "key3": "5MpChqzfvNcnp7gq27SkLJdRTLvYWrigpgQqazeVvjWrmZgKfwPRtqPJkfAm7K6sJSHCCGAQA5urDwzy3h3fWvGX",
  "key4": "3U7YFAcVWHc2DicajUjYUNJHiCbKqqYYFfar8RJxQdVj57tcZhxJ1acKrMn16TjMgJtFBcH39J2KwFJBn2FZfB5P",
  "key5": "3UpQoPWrZoZapkZjM1JMtPDQN4SaG8iv9mfX2pexUqYBRJXqujzcCrbvVKsXhoVCWydLNAUXeMD2tmRHAgBerH69",
  "key6": "4egqNLzZ3YmcqJgvyvUSordqzaakEVBvdfkvpKBDpvmfWYvAur8AYou9t6u1TfaYzxQS5npMPsCJMQBSac2ofr8o",
  "key7": "DmeQ4xukhMz6krVdcy3rVRQwtPAFRcf92ZW56wR2DqD78rsHbiaUKZMLnJvvGt3P2uK9RVyefUE6nJqvvFT3mH7",
  "key8": "hpdRNbtMD5fKLjwLTqMERNjNCUk6H3Yxy8LV5kqRTFQziYGiHqFsjTRQJspybQgrdg93ciDFgUQLUmnWEZdKAsJ",
  "key9": "2LjesxyqeKs3kCRTbkWnfQUbqCunfTHzfd9a6HpRXTTmb3KF2JyUYq8yovYEMh2otJGt3PExqSf5JGhAiNArraZZ",
  "key10": "4hy5VSVUWx9wYcwWmGTbv7tv9aQZV3qJkZohqvv187ctsg8uYtv3FqBgrRH2G29cenbiPAVndfyZGGTSuu4TZVum",
  "key11": "P7FZb4QaTMB29Bqf2FxUwF8tjVnPMyNniJffePAb1hjYNEjdDW2HfCS1jaeZnActmhgeUhQBsAUwkYGWJBNdrfy",
  "key12": "VaKuCxoQYGi1j7dw2Uxm7EqP1bbdimJMUnRAAoSfGSE7An9d25xnJt6n1norLMKg8dLKeSArvS25pFgpM5RrWWk",
  "key13": "3Dtfr4i9PewTPLVzAMShh8VTDqrSEdPoGB2LbRyowmHiGzyrZYcreMaQHu3z5DEC5jWEAQ542SYsWCGYrGCF7X8i",
  "key14": "5cPid4pysMFzRuidbkZcPQiXHKQApZVHz9mgFDShKxYu8YL3UM24FwcAKiXLY9o6UJ7wHE9nAiuaop4JKbiqM2gj",
  "key15": "5Jcx5LLk7V2WyLW6YT1jq5LpjKtCgoQ3E51EUcTY9f36SbJkvxEPU5nwQqg9uPAhh4LYekKzbGCZA8LvcWjhcwY3",
  "key16": "5EJBLMD8CAR1yuRzK6rTwVh1NoRi6xD5KpNRUwVZLD2Uuf1THM6dFEK6PXraTbXeGehRTxPHUatcFLyiDMtUr8K1",
  "key17": "2KmKucwxypiZzG2bsgufg7XdJP6yDNThcdtjU1PAhjkLkatgsJbcuYEWqXWip2hSDgsLQeUicVodqt2rL5UXfMg2",
  "key18": "4Li4vj6tMRqDN4JzyNDRr4iFgtgRh5Zj29RRgsAvvd8nmMwtiYF3rjpgM4k7cJxPdEPm8FuHFUU21zFaevCZr3eC",
  "key19": "3NKPH1KyMfmHfEUmDaN1cY1Hr42LF6qJrBkWheRYFSsiFBScbK68FPEgDpRRchnEXV7rgnwq9594e1SxLDQW7eMY",
  "key20": "56L72FqaLniMYEcgcZisAAMrUGu2ADqQ8TipVmhSrtZSGw9oHkTYoznh7yMp6Lk7fcpkq3ztkq3s5TZe6HTkFxDx",
  "key21": "E6MV9yg6S6xx8Mt9zP4y9mAdp1UkMEJacpzidggi1dxboAaBqY3x2Yx5EZwLLveAqkFkzvNS5RhSY3UtFuqPbZi",
  "key22": "5UgcGfJf17yjSqa4ZYiqe6pPz3kbwyC3Naeyio5NTmUWMrqU3tNtM1GJB12Xr2UXuAH3sPWLiVDiSj5U1EJLa56Y",
  "key23": "47WwwxdzE78T2Dxn4h3sUKXb3GmSQW5sgpM7FJqj21WNU7TWutprjbyQtP4CUt52nsE6WxFzWJWQCKMoEGfEu52U",
  "key24": "55Y4RrYp6C1ems7HCycY4yPSkBif9nDpPwzNt27ix8usXAA9iyUQzRieC51KdXPcxXpsWNm5xa5Zh8TqkQ2tCMZw",
  "key25": "2F2RZdSoyPYK4tnp2Ld4nf8Xw18TRVwb5XqW779AePxtahcPvB1FysMjRzqV4sAdkLnAh3LTJFAK7uQTGsiHu7GD",
  "key26": "yU6cK1u1HabwtT8k9TB1AbNNCwZMmur13FhUi8q6KqtCqyVkEmCDwpA8EHgxgMWVJeHy2hgQWfiJjAyrRkBqCy7",
  "key27": "aqYTZ5nubdfyKdG1cohCgj1rmG73TLFXf2gYbw9NEbo7fNhw9sP3rqVKNks1MXh16Bhs3QnYWMgvRBC2HvnRn6F",
  "key28": "33UxCqM6YBVUui8fY335odehJrVCHjSHpjC4XcNF9A1q35a5LxNwgsG6UrxGaZ4rxXwy72EYEzXcZXyhUaKTDHU2",
  "key29": "34NvVr3yWdLSvZktPW2e2EgpKeUPCDXuv4PXoysAUv8tMeDRMAsXZgFZs7ohfM5yMcmP9XkFxgeHnQKTYqkRfwqm",
  "key30": "3hEZzi4CQFEv8yS3pScGonfxJpEE4pxp1Ecg2mSRF3yEFrefJuYuQPDuhbnXuBpwGoGmQurcYcKo9Vei9NTjnM7x",
  "key31": "3gNvoj2tecHKnnk9ZT5AM5MYECeP4zXuy3BPLtwaJB3LwQrsBNTP4SnXLCojgikdn8Q8gZ5VZadgXDtUCdiRCBYD",
  "key32": "2sEbupJeEmU7VeQMwHcaA6sW9A1wWprgQHNgxa8B8aa48b6x3q9gkADtZenzH4S9vGcYTyyrMVDy24viFN1czVv7",
  "key33": "4MzaGWriXNg1PJVv178R6MHYswzUF2ek625EmQMzqG9hGvcNDHxZvJSm3m7QdfEM1kkyfPqy5eWNHEcis1zv929z",
  "key34": "3sAjBL4MFT9ZLf3yRzWnPDqGLAWoXaxuQgrfcndPG62gcSwoE5x3zuBthcEXA8hepXhYuHxBB1tob1kksxwrHvRN",
  "key35": "372aFeLd5nMtbGfif9QDrejtth5Y9qMvR7VTLbPxjX9dyrMqL6eFBv37iZCTubfgLC3E4MCewdRUnYuK6mprgnUU",
  "key36": "F1M3chegd3L6SkuW2nmwMwGkTqGCKHVqHXj8Zu3xyY64Y6eEyGxKn3E6mF2b97j5AQsHKCjAnMYpaf3CXXjZcqH",
  "key37": "2Lpop6D7femyWCprEiJG37iQs5H1UjqipikfkcDrtSHBxak2NkJz64EX7FVpVuEPzgtkDpd2XRs7RwcxDbaWE6xT",
  "key38": "4TfFPeTiPxvzMLR4RFgcSGLwL65kcmbSc6oxTJuSDiBGG77gWzxP4rM2umK7Tm3DN9Gka3S8tDPJScFbenYxC4D",
  "key39": "42or8gkb997B6Xy2G8NsY9mX8HgJweamNTdcZXiwK7ckswoepQdn8ugkfSTV8qckFuJn4z7PKRJcH6FvjYTGc85S",
  "key40": "3xQA2iG7sJu9GKMTcSMcPUSAvp5vTd4ZxytQSGWqXxQ3BdRjQzURUMP4LF3PmKSZHB6cjedCYRtF4W6ZjwdrrTmD",
  "key41": "2VXUp5fEXFJWWNHJVY3qDypjxrTyG2zmjQHseGRwQjcp6SJbDgEbZ5ZZ4Cjnkq19QpJMu49i4bWwW3snrqqYpycb"
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
