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
    "gFUnFBYV6D1mJMhom2xue9Wj5bRtB2BBsPtG9dfCXQT1hgEXUHW7nAKU8xeYhPER4zt9jQnFn2doEhd1eKtR8Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHCZDqyx9Vi8ih7n4G1dpa9yCFvmrbJ1NFrga72AQd4pf7Bg6HbMQyUJA8QWUDmG3tSQB42gYk4Zy9JU3vHunTh",
  "key1": "2wPeFjEjqXqaxttQ8nuL4NKcvwUVZm79ucUbVksEpQCH9vBBUGK3CFBSPqc5HfoAM2kwJZKeUxY8ybnPTAGhB7Nt",
  "key2": "4Npu34Eiibdd9cF7jU92d8m3dbH3FLkcHwypM7zccYFT23X3Hm7CtLEj24vQihDQiiUf6aomv4NnA6oxSZ8WD5cq",
  "key3": "44kZC6saer4hHsFy34C9jqumn9EsBHDiFGLdzfMJRp5UMs6KFKZQpEiC3P5VfVp1wLaR5r7X53yjGGnKHYqauhdr",
  "key4": "2PtCw8KfHDuA3gWv7GA6wH6qSu9SUnDno7c3AAsxirgB2gYzNvWWxxNefcEGVRWqsVZfBzZDwZLNNCFuf9v3QRsn",
  "key5": "V3BjmZZ38WehgAbserfbpPPpA2QgJfDoB2WUeoQF6wvgzkYex3A4WFQZjFMiLaGXDUyqYpjU4zbLoR9BeCdQoCF",
  "key6": "57iVi4hZRuaTiZNzBGTHdtM8nMjCdQxVztk3gm2DBefHtVZSmRUdmC9A13e4XnMQz1tUt8JTUisoNqAuXaDpK9Mc",
  "key7": "5rW5NgvYnFpu69oeB7tURQdrBS5zoG1KRupbPX169uVQfTu5qkHdXqFui7KLrT9W5frjcsa2JbAaY3zKVSTMhBiz",
  "key8": "2GsLJG6YdwaGP5quCwQZDVNpq2RYVeQj6gNBbRnrWsH41rTVv3q9VjcWY2VVNhgdGoP5ih1Wpgfo7pkK9pzJUc2z",
  "key9": "muQT797xdipuhiGFz1qzon82MoimfzxKAKgRQB5pTBAiMWLVEihCXu9TVsvgsj1k8o3omDuiVHG7zNfH47pDkHr",
  "key10": "5vVCFzWFDhAXUA6uLmu2x9JMbics7mL3s3eDh7upJJuLKDcYDm94S2Ee2QrTTAtU2228uJsb7cnGjcHNmpRkgKDZ",
  "key11": "5wKAtpzoWnggu9tXQLxXUg6bqaUcVQ6N5XyP3VBdVmXSKZcvahVLiAtBJPv9Gy126LR8Q1zxftLbU5WVCvbfneZQ",
  "key12": "JvKLnM8LYsxc9fbGXexDf9r6gEnrL2bcbhKtogSVT5GuRej8fWjXXJNQL2JgxrwRPoY5pq8ZpXDxeMLt4yGGM9U",
  "key13": "33VuswMAyBrmYChAjtwfcrvpFCjWabuK3vzp2hSiN2Q9vMNrvpFD5dAPefwQMecSfuLfVGoCWHBkvHUEG8ZP4peT",
  "key14": "2LbLCTQA5g2XQL5pq55i5VCohEP26ERtnc5PohVaYP3LUVK9BJfquj9FcgozmrynZRAhbHBacR6trJP15f6U7th1",
  "key15": "5Whx7tuTXNiz1jLLGmdGFWWUtauC1HKiuWoA9STJAJ7dhk6jzKSbn9D7e5P18hd2ZZhyPGjxnZw5B3mAPkqa7Ap5",
  "key16": "2SbS3r5FHH5nABaF6kWcu5a9foMhW7ajaUUbPegQ4Ewj6YsyMK4ewMKpdQgTiMk8wjGvu3oiHHRFAoDcBZRtFJaf",
  "key17": "2G9eNUEWL4GumW6TLDm9uZhARBGG6jfjd5rH6HZvnVrFwxtmTog56jvcsHMpwnix45MywLXhZjVzwNA6BXiKR1ft",
  "key18": "3kmBVufhZ4xF7ZPyVGbVhezPaDNoJPKTTQhvP3JwjvdQWCjA8eb4at88ANYrSfJorxvtWRVRDuy5zFC94UuGSt1t",
  "key19": "v26qywqjjZFAsTqvjgQ72DvFjpZdrENQhFcd76m4cnMAQLouSirPJsj8E26kxUuij8GBGDsn6vsD7QEHMAGcTzz",
  "key20": "531fnmBQFWMokPnALDBQXViwyiVXinetVydQcW7bkLRv19Va7R1Jv5CaMTQSAhGYXg9tywUGfT5TbxNP5uac1qyp",
  "key21": "4cPEmgRnjDBd5q29KN6NRFA3157vMJKxNeD8RtdxhcZrAou34zsTokjRfzbeaRkXjBvJFcLPxK9ZfvGx6KVgm52M",
  "key22": "2kDBAyDbiWS1NjfNxDKgvctQzcreZGzYHjMc1VR9ufYVYT1UEJew73dGf6ULHPY6UBhAUn4CBSjnAFrxqnuFLQ5U",
  "key23": "4s1oMoirFTCigC4hafkbh6xvQT2JjNVEgtm2XNrGAgxEzeYugxfvZsLe3y6aCuV4GG3d9HNB3tuDwxdnCxapwYaP",
  "key24": "3hoZ2zjyXuWFWieN5MXdvq8wT212g3bGLKyLYizHxmjv6KmDYtZacfsD8UqvxL8vQhXe1ffNB7V3Y9SX6K5LKpcT",
  "key25": "G23YtVdFNRh89S1VmCn93VvARCfi7mckn8BT8Qx6BEfhGFLp6jpZ4hcVULRJqmiaRNgMfpz6QxvxKknS9nr8h39",
  "key26": "4URizmcAdrpr6DP4tx5oVPPxV2Np2rypbW8ARq5gFrJAhcJ9KB9LEMMTh3qEeXfk4q5ZppoBSiTPiPYTztuzNe78",
  "key27": "56ZeCPNu1Cf8hvU3NjxFcogrZzPcPQMnyx63iYv5vUP6TAyFtCXTtmbZmraSsvEM32pjaxGKha4TxMSrf2muZvP8",
  "key28": "5uaeqU3xFMwfvV3SHzVkdFYfhVs9MgpNMp2RgqFH4BNjYEkMSX4H4p2upZG9b3h3xhiqcCrq6pvsm93NtyrwdysF",
  "key29": "5s9DK8C3cUPXAeNs5BbY2XJCPdi7KGiCKEr7sjuY999wR3yAKojfFar3LAT2BGwDdenxPENRpPoYxZ7HegcQruyD",
  "key30": "RDxN2hdbp1ejzuUQCvFHL9NDXCRJLeZKq8uiAGnQRUx5CCbz1o8U8CvQmVALcm4w2PFKUPj1tpGqHrp5EKxrvH2",
  "key31": "2qY6hbars97bsajGfA1Cwg7cpJVhbjJ8aAGWr2SBgb9p4B1vcpTACnaU2FAj3yAitMNvrPzAKKczqWVJgucNZBFr",
  "key32": "3NCrokBPZY4bg3vvDA7g7d2WPxFLbD6Fo63WdcGBakL8hTshJ9ye9K5sfSTxJHMVmntiNTbB7A6SERJnCpQDiBKg",
  "key33": "2417Nwnks4jUpdsFtQ2FaiXtTx1HsVcpSFp5NjNtqsk4Ujh9XNE8zRD1dKu1uC2dzzuvCu3t4jM6RckZrDtDqd5A",
  "key34": "2ApsknwKHxzpUtK32qU2yinrtYaTbGLuDDL8ugEe6RmcrUeLkZuCnpNvcCdAJe1X7NqkpXpeexNUrxiQ8yo2DU7u",
  "key35": "3pQuW1sdmHfGVowRkGdZ7JY8YSBLLbSng8SWiXkGc2kCjkS5ZdmJVJJ2jaRSUu1vu2eFUhWzNrgTpVdRsAoEcky",
  "key36": "gumJ7xgxd8ECF27rXYW19Q3agiumyi5cV3AZU2M4YXCLhT7Xm2wwfxpgKmD6j7gqJunAW6rghoPAA4qKAz4eWA3",
  "key37": "2oopAFUdUdbGxUp17cqT6wYFUhwDsViwbj7ReFDQ4zyagcBbGdqnLrPr29FPKfkJ54598UgNy3johSNVYXQPXzXq",
  "key38": "358PYtgPHmM68fF3xbVcSUgB5yUKSK3xouJqRJKwoAWg7PatipgX9jyRTupxCj5L27utk14qfu4iKernyUCsisNe",
  "key39": "5zZMnnTxf7gVZe82D8jQoJihagPrNvGp7qaTeggUCys5srudrsBJuGaUnzLdk11CLsHkuzBqn53Yi5mKE2L4wMvY",
  "key40": "4MNYy5FkGyjPFRLMWFMwFt2FhyEZoakd5FFzJo6hEPb6dQ4JiCaJk5eNaw7x7bRFWPeBLo953w12qKg9bnCdHXsY",
  "key41": "5ZY1Uciekr6pJrW68e3umrJiMy2MP2P22eGrFC5eJPpR55bLJpKGidyTtRGC7VHC6Ukqprc8D2fBmDMwSjq6k97k",
  "key42": "56ou1fWtVUPNQNTcMwNAdN9yzeuUZbyhTX6ZZNK5r5KhKKamNPTv5AoyBUL4c1WcLncZ7rb7yZvczrjqeAcibHzK",
  "key43": "2reMx93ruGqsn6BMB87c4D5X5ivzdJsRe4W1sPnHMW9UeBJMxvE9uWxJ94qr1SbuXhgriXmDwzus7Samfwow7p3e",
  "key44": "mky4EmZLUuesXs8nHdJ3k8j3kJozYsSFkTCv8a3DYL7HnUcPH5ckDeFALPbEiCofskgMFQXMRA4a8xeHk7zRn1v",
  "key45": "peq7vzbMbEgQHTx2L7pMMw6dHSktu5cydqubjzjnSm9E7BgPSxvKDEhKvRSLgybSrCsh3KTbtSBVb6yBN3wKgwX"
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
