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
    "4sMAYok9BuvmxL5aMFPJU5Kka1KwU9ThGufKDzjkXiBf7hShRTESMGehkygE6mALw8wRjBRLkRgnjkr9pLpAa7ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNsqop2peh4RKUUMhzv7ioz6msHxSGXBdQjDE6FZMWx4vj1GG1U4ELkBdKNqw79NDByoyitxon1k63BdN4YR8pz",
  "key1": "5rvRhzRnJ8VpGnhRXmcxvvoTpStnVUiQDWSVYrC7HmHmb6eL6DtQFsvgjJHBRqqbEwTfh8CdN3BJXRWayKNwquPQ",
  "key2": "5AMzrHdBH4dhwxHmogyokBDX1ihKLtXa9eBzCKd4cu8SHSyBDZgzjq9Yc1ntK2cwznzxgT1qZM5571KKxSFfBNYT",
  "key3": "5gejYufQbPuX4LfMn6oyGzSoBsKrUb4aCkk9gLiuYd7YgsyCHhsXcScXzc4wR2tU6hnrVKqTrRoJKoJzM2VBGPZ",
  "key4": "RommEVWDqjTepoc1pv3PMv8btB9JaLwF197UVD5KRxbzpSdLXQzv5vGSikaJmHE6ysZZ473a2gSYPNbqQL3uf3q",
  "key5": "7YHCjaXEXpndiaBrY92tyVTaYNH1cutf144iqScsyKAnbS2uEcryPSei8UWbZmvC8DACrEqCmdW3CntQzkiutP9",
  "key6": "2Q2Qqgz2MHJrgR35WRnpu1t3xvMPGsHeqgsbbma9t1Ux5aCoox3Z6ZxwbKwJYEAvQFsRcLL6fJ6d5GznCB9GaT7c",
  "key7": "36jJJuxK83DK2H9Lf6hgwV9H9H8YWvNobKB32DLLJfbXmj5PFAkJVnmrpa4AqvwkkYDUE69x4C4nCwk7hifvADw3",
  "key8": "3Ky6dLSEDfp2vPBShBJSQ4WeZWUwf7mtijTGyNkZEdV9ZS5ChM2bS5gxU3Ajj31y6b8xNZcAQfhRaU1N2CiYAYoU",
  "key9": "4quv1f9SUS6GJgPzwmWG5kJYPJSz9nTc1nZnVYdv9X1kGR9UPtJ8YSUJXdaLubFSNw4MJPK6q6VmCHeze4Smzvfc",
  "key10": "o2sHWqAas5yAbxedXn4KtLFrZCoSDhJK3QDQEa6GjWj3arEEFiKK29V4Nbvg5sHp6mjfQKstNACyQhSeawAL2F1",
  "key11": "WWTVLU1t4RMsT9hnfshydSQ7dAYwKyMcAq2tSRXZk1ynrKfMSrGZcsom7iE6oHa6Qs88mTbFCXBieaYMRhBJMaF",
  "key12": "3iNEtyeuZRWYJJTf9Spr7TjW7HdTdiVDiTHfqh9figmpaWnEde8U7W4xcZQcEknAshhrNbidEiBRSmFJmFpLkRpT",
  "key13": "4PW1u2KbZQM2tvoHFVpRBcHDxhC5TtqmPWaKY6Bwq6GKQ5QUf52GQMGtLnwJvsz2KB1gh6oW4JUrXYeCkYmkvbGX",
  "key14": "dsRfBRuT4CMg3zaUznC2tyrwxxPt8AiuN9vVxZZ4zNJhfEmFuMdsXmdJpjTBLhBE6W5WqjpK4od4hXEzmMBgVPQ",
  "key15": "63Sti8Jj8nnHHSo2fWLLHJyeUa9gp2S2Fs2fRcXAZtqiKNmqxqryn7QrsGw4XawECU6KhnveD96z6bjJMUpqgo4X",
  "key16": "5gHLbGTuwtf9xJcMnjYhwdR9wffJWAp7cfXP5HEJXXK4pRFpCqQcN978JkcWbq35rDE9EvcctLTkdeg8fsFo2mYX",
  "key17": "5rosGbUREzysc767595Eapd94kjx7d4qgsDTLa1SC8C4RW1ckNT6iQX4uHVSBLXeMudYYBBKKiK8FSyZ1rv4a1a7",
  "key18": "2229aRWF5rK9zBZWztaKjvzr4yknmvBNQnGfcFTsK8cJGPSQ54pUBKLkSjibqPMYfzXJiSViogUMnxoMyqgTAREb",
  "key19": "4zvZ1NGj6J88N7QtQXucFswVhzdJMLXuuiTc6Lr78z9g5MTpNYW1BtJwGaQJZC3QzF5SZweCC5HvdTYhSTLyjMQ",
  "key20": "41VuBViJbFnSnnisaWm21cwpxoq75BW3RzpfMFn8cAZCv8YbVgbb6LXoPi8BVjRmpZyvZJWxnYejzVxT63zesXbE",
  "key21": "2qnQ3qrYrG14U69WcXHz6qbMUk5WyEyktGrQyf3c6Cy8X7os3QV4cpkUSmQ6agk9Bv5m5o2vVj7pJg5zpYqN7ZE9",
  "key22": "5kiau556uryYYxADWp8D8rkg4NuN1U4EEBrUoMHnKHQnCr2L5pP945NFPL3MkfZq1WrXBa2DxqCsja1f5DUcoUf6",
  "key23": "3Tm9A7D1JhmAUAHhMCyGndGKVjvks3YNuf9zCDqUhcojTTRsCnYwTk3tgF8n6oWcfzBKSYXBea9WDXNJBLBzobih",
  "key24": "7WViNMDpKHpDBfvk8M7vJjGH3ty5ZVywUGT7JZjJw9FuzssaVduYXkyAdz5KC6nnNVvSYTLK1ZVkSnsLa2QDDXf",
  "key25": "32Qm2hHAxMFh7YMQgrYw3amwtiTnLUFezPMoWwjMqVFLPiogfbcZ6TiLjx2nkvs88Z43uJnVCakZcZJF2N7cYN3v",
  "key26": "P7YeZv5Nf1Ut4dUmY6mw1kjfivhyG347NuZAVHKo6ScTREq5AoEbYSLMRA2pyKnT9V1WaVJ57NsdzKmbiJocWCo",
  "key27": "2QrvxuLhvjzyWqDVH3sMGK1W5k7Fwe6pkorLDT9zLr89TzU9Sit7e7UJ8hPaV9NswYcSgRHs2wajmdPAKHWWXAWY",
  "key28": "5Wiaeu3uybNdaEK1Z4juzhHQ8JKT5SowcrrgfyAboJw4QTkRm3t8URv9w7SQQ1DnkKMb9znDwqy7QrXTCAejqsKM",
  "key29": "3tKzzyJaCQWk2uM1FvoD3NNq63qNrJduqqzsFzLgX1iQRKPsegNCzMhmM2dKPAEfYjeqYfWaYPqJpbcnVch8oCJs",
  "key30": "2F5K8SsDpn4AhKrykhmPJaYK57pKH9Rs2qQaxegmiVvQhFmyS7gDAeVtT1TtwW7XjCwRJ3G3vrRfEaj8EvYPo9Q7",
  "key31": "5Qw88LYuuJ7NM8Avr7YWjX7nkSaBVMywmBugX9BTBEv4mwSLj4Kzrbrf53BxTDDgYNMWCP7NvFxWKnNYACKKCM92",
  "key32": "59KsJZimBBwxEzze5tPer2Vhu4vafhxdB2GisSozvTiirfV2sP5HWqGuYfugB72ANqW4M6zXfLQAPh743fYMiYqS",
  "key33": "25rvkCfbMKQxksQQvh1RMqmYGMGr2USs26416BJiycZE4qrvLEH4kCP3oikAPshHdkpo6FFBDTVg8KRDtTyfd18V",
  "key34": "3DfBFtQu1YvfgvHPVTV2kroBKUbY7CRxEPU3UNB1E3K29YsFxoxnj9QSYsyyjBtY19yWxTPb1KxW3LgtejVNZgdd",
  "key35": "45CMf92JqgzPhskYoaWmfg84d9jhTRkjszigDAL39JWCGZtSRYBmprCZMxFrmmhLNcT5Yt9f2vMwnX1e49AnHb1B",
  "key36": "3ekztHsuvh2f3f6K7FNjUo1QzSHwwn5KcHucQv9GPZYXJbywGJ86y75KxcvaZtRnheyuNd9pQhGswW8wBpdBrtYX",
  "key37": "4LZ4UWKijp1iD31pwjxV1gXkqPb5c95UwUJHDxF87J2mfRCHjuJAAPe7k8Ld3nKKas971toVAZVGBz4FM9tZ7Q9j",
  "key38": "ox7DoxVLNpx2txwwWMWMRAq6rRDC9sr2hxmigpHD7EPg8pjAmxiaS685mdSFrwLDCff1hmqxgSW33ARdCyUL79o",
  "key39": "45RobTnMbvNwG2MRRBXHy2JTzzvvSVm2zqUXCy9GQcJCScErkdVnFMAcKxFsL9Pm7DZikEXCrfdRRc9tPDhkoHq4",
  "key40": "RKWGpNQTwki7WaPJzJDNiw3wx4QRS5eR65f9VWZhauU94AZTSPfQEXQzWS8YujxMXBC2YxqgXiW2kNhxEWu9yi1",
  "key41": "3Xdmp1udRreffxfqEPcBfgCMawcddvMLXVWUNDYFkMZY7Mmw5LpwTHQhv85VK8XVYFxCm7MPbFprmaAxkjQvRYcV",
  "key42": "34P9uAZYjdsVwP5VybvVLQmwqm2stXn2DTCsJPnT5CU1DrRmH4S7WF8QRM32DdQRoF4qgCoMhQ1n3fogZCGbDaW",
  "key43": "3xz4PrnkQUkxEZF62XRt456euPYaD9kFrHb4qqoaT2My6eQsKdJjgHGNZkFQxMQtdBvaFmNmrdezHKQYr4EYarR8",
  "key44": "2ZBW6SAaips2gzoeNoNMMdwWE1Erdvn3jXvGrzg8UZyYLB5ep3un3Q6DcMjJ3Wvewh5vN7QhD4LgAVzj7rvBiwD3",
  "key45": "DDBXUVcBVLBrorA76zbGbnUrXtaJ9xWTTnHGjCWkiY9KBXnsHiojeygbScXhVgmrgnhWCVocESqZ9R2MbtGWjTF"
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
