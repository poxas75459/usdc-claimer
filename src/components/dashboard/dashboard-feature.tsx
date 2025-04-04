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
    "4naK6E7Z5LzVwF96r6oQfcthT9h1xc5NomEdwfgjsr8iYSd7abQCsktA4eHgVecnzXiEZ5QYDLcUKgo3uSq4euSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123hk5TaaFVTKtKEQUajFsn6ALQHksW4kV4ndNaoTzYpLNwRBjCBZj3QtANv6qS26MZzBvut4Up7Zw3RMPrirTTk",
  "key1": "5szGNFWg5gsiepsrg4qiLUomenuoo9A7Jbj9bAuASmPETHs4xVNqeFrKZhd29NtJWaN4GYhnRh26iw2WM72iygRA",
  "key2": "5fdKEgyEtvobdtvMfcrNwHSQxWQS4MMmoGQh5DuhFpSNB6qE26D2YRmS2Lbp76vS86Y92DZywUTDuVgkiiq4kVHp",
  "key3": "3jqtBCXXR9khF3ms2VuE1hSNWoQShn7tKqrnq4HYATh7xKP3otxSmTg6jY9TZqENxBgugWDWZ54qP1unQnb8mkJN",
  "key4": "2LrZAXVaviXJ8YkmhbWC2Yootgb1RFUK86G1eAm5h5VqP6TwBVUjdcygJRczPiUpf75APbdwxputU65FogsZ7kKH",
  "key5": "3P7Qag6rV9yhBQ9HK6y6yM6P3dnF1WLqrAU9EAR4536ToU6c9ECuA3otYBcjciyuK392PYuQiPj2PfbzuKGnfEPr",
  "key6": "9MSmzpWfvmh175ow1JB3dP5eEfcEBLJ7CDqcrJygQcs4Bg8DYPssKVKXdpBGfX4rHqomQ7LvRqpbL2ZAVm7uXXg",
  "key7": "2E11okX8gpSSjJT1hT3S2yfgRHhMviThxAVTuB1GqDYZ8Fs3rmLJmLyRBQGhsbcSqeMiyjmLaGXxaXWdf8bDxDbd",
  "key8": "2aEhV7oGGxRqxfbPJeorph6MD78yoJLNXynNx8A4jK8F4purDZKZuPctWtFEqeGMnF3ijLuGxdEBneHdtvhTbEV4",
  "key9": "3cFL62kb7AnNy7p4hYbMy7tTDYRwuk39AGi8Kn3T5rc6UZjMpyk9UYHLhRgJMSnZr4rAnA5KzRXdgbcLQFARE4qE",
  "key10": "3SjvmFxS784w19RBMEMbi8aKPHhFYbUSV4heeVbft7D4G4khprpyFBP2dFVBBfxPjVBjsSMrzSBiBkiUU3N775J3",
  "key11": "2NxubDLcyPDrDNyuRgaXFw7j5p8sT9qbK44DkEhjKdznZRDPBjstiADXZdGAbeSTgp2QQeC3EJaMZuPsFdp8XMd6",
  "key12": "5aThWK9AojHKyK4kDueDjcszAxCULAMbsiZqTzS2vcjrxJZwE6wdVvqLSCQgrg6t9sLerwX2FAGEH1sgftznwhcK",
  "key13": "4jBHSYh5U2NyXHfxDwiF4o89Ct3kXhqwtfcQ3JgN8k1LvxhLEtQK9zs1W67Gt95zLEwiVf9TCwcpcBcxduPHrf7r",
  "key14": "4XQNLYh72h7jLhLWt54tMM3jyaTzj3dU5PSAaFCTLFRoeWAKQxwAruZngFaN4Xvcz2kcfnYgk8kbjAZ2856957JJ",
  "key15": "5RPdL9e6SB8KAFuFm3qthJKQTE6mb6UhcDCQ8JD28ydAeA7jm2svA98CQjXSQNSysBM4wR32WGQjmP7qQoG6VG88",
  "key16": "37GrU8LHvCzEV3Ydj1MPucoyU9KMzoBmWW12vvbPeEeNjsrYWVmNNdoPBHgbdEkEDRJWF8ywrPZRJTuGPeupUv8f",
  "key17": "3JbhqXQMBhMhLTqXGMCmdv4DkcdurgxzkYr8y3afGxj1MuYd1NbXkz4XSBVK1p3spCSwowEkef8GihbtUfpjp8uF",
  "key18": "2ZLMGcyEFDDxVX76NXqeKgPNXm6PKkd9f6XWBEPpgwXWdWYt1s93ZHVaFm3YFGsX8v89Kzxp8UXfin1AFRpgBR3z",
  "key19": "2qdS4yBMKezTsHoSz1PuyxfJyaf8nJGJnkm8a2kwUHHvtGjWLTQVuDqtyi85iSWKtn8iSmJTj2q7sGF9q1zzMUTR",
  "key20": "3HKKgbhev7LukuU2MCwoTMLKAUiffCNhA2PbMNEEtCemrKC4X7et3qgntV4pwSvyCRYCRNxC9Za8QrkKGB8hgVcd",
  "key21": "4edLbn7kPCVNVRQPFfTBHfSLkd7H9bGFqjvDMtZauLAQQVexZtsB1xNyo6yPcav1N28XsfkVCrGBBQqv1FaULyCH",
  "key22": "3sksQPSn9XB33Ddco6mJQYsPEWtVTiikJBJ4LXBJGH94o7iUxCXMJanCxcWGYBe5RgGvAJGNqWaHn4owuRCxS5Jw",
  "key23": "3WJ4tpqCfVSRcJSL1LEWXJQq7X3GL8EU7q365FngvP8zjVPBrAtgTxxgC7MJS8wnQLXKXakWpByqXwBTya3ftLVS",
  "key24": "3Gh5JEdE4ue6UBk8qqPUShQJTEDwEPB1exA2YUo9x4aLECxoXJ1fBBhG1We58WS9eNRe3zPJYJcwT5FkzL4wZSfy",
  "key25": "4MTX78BCqnneDKzVFsjGHQE8AYrTxkNQWymnMmEZ7kasQZ8cLu7PHSyQWZjFGS8mAU2Gjbb7p1x2kt1aBH2zkpuL",
  "key26": "5jYtFKr92G8RJccF44kx2o2zRnQvoUYY8WQEHfkCRobraoaibkHiVuqqeQvUvYKNqw9SGuHgGMNAVZjdwcbW4KFd",
  "key27": "2ec9JFAnCLPTqtsUQA6fQQe3DJMVuYJfeDN7rqC7ACvnAx8PMsX6gnVfkmi6oqydCvnvvnBzErihuECjwFyE8Xs9",
  "key28": "4FY4A3MnvnypR2rgy6Ac7Eumtj7sncp1smA2baAR2v6Eo6uXMhpgbJEat6RNL2yrAQF2cnPBhN1W5qjGHJsJDPQz",
  "key29": "4JHnG4SEHZb2hGvjw4jHBFf4VYrKtazqQU4EdAh1pRh7BjmiX1ToHDx6gRSAMmMVUuuSaCBtL2jKJ34EdAk4F32C",
  "key30": "28ETn8SZ4zk1HcWbuuKSSioWvZAKt6c5f1tn4G4jfYEMwa45KJiyzuh3WjcSXnCBpEjwa6cpRK14P7MbhUfKmPSN",
  "key31": "5ByABfDttjb45qQiuxyCYx4V2ksSx45Gci3gGkDsqYrmKWhKqtVmarTLoMh8sVzgMqD7Ac4f53tQeo22yRv46tvq",
  "key32": "4kdrZE29jdFXGnvGdcWLQNmKrhjeUT5bXfQGRaqwfF6scZjpyiWi4xaNKjnjepmowShG6n8aHoVYDXF39tGTmcvc",
  "key33": "35YCoSYGEUwNiXK2FBqXCcvap1d4AHz974bE1rQadCmwkkTgQ5xvFtdqxVwiJ2DGJfadnQeDb6JCq9d7uZNs9jNR",
  "key34": "459cgmBq6M8VopVQ7pcGqFXouEjoeuoRtR9JgLYhKssrbRYaFunuP9o9m2YWb6GDUjF8P1kpkXBdZPvwQNqvBLPr",
  "key35": "49pKVqpGgjewTgNsHfdhkvVrTTesZoy8VxEHKEnjunosXkWc2QSRHSLEJTXmhWqMCeSfyx61btfZ9fDNaMvpGTTb",
  "key36": "3SQTKNVeUqC6USSNpZnmV8PGZPvB9fahksSrURfARWVTYESnoecEyQt2Wu65cg5WpScMxLnhzXxQr2nVyKLdT1at",
  "key37": "25MBTcSW4MNNprjPUpahH4Wsd4nivBXNxoCu1Ec5Jni7rzSjBJQu3HxBbLZzMEGESTS2NUF8yaqDfzKYZff7ae8F",
  "key38": "3rbM3QJuKeHnP4c6tb5Ypx1KrkwtJkUPtsvftzenJ433cLf7QXWNyPHD71cqpcMcNnH7dB7icmHQ8uZtsxMFHN2Q",
  "key39": "pSFFnrGLckzGCgYSmZ7JX8cJgcBeidJrEDNqag2UR7hbmx85GmLmsSqaGRXph8MfwBS3fRWvoK8BY1k2ocYg4b6"
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
