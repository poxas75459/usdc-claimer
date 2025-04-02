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
    "3CYXMKNsTJZU2uKKBuF24wyCiPmQUaEDW5YCa9omMdBguQgVi43HdVPoEGVpgVKnoKBohgSHo4hJfkuXXavBpJY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwtLDQsMLBgVZzCuYenypUyLzDvYW6pDCtprxh5bqFAh3DDNhs8bnSui8ticKFnBZ2npAKhaDFpcc21e2CnuYo9",
  "key1": "SVTk2hLBzEt7rGM5z3PpNbq1ea9mbc2EwBrXdJudJ8dfcxKRYGVRn6QihCCVqhbb9pCP9GrLVu5Sy2iNT79XCvC",
  "key2": "3goV2c4XSVKAGQCy9cVDW9Pt8RY75y492YtJfC4YTpd3LYtHKWmDDEV111GhdrkoMoEFRt134LwiwRfbHFeHawDo",
  "key3": "5Np9iVsP54S2MP4iiLFzPh1BQw95w7KCY6qSSrDyMZ3oLMp2c5ZG8mL5Lz1Ap575C6yYveniDG1ShQUPVAWtTDr",
  "key4": "KjeCnupCxCpMZCP8gct9sDJn6MRusavAcSk9rBGy76Y4cZbijKseVmGX3ytW9tdyy9Kovk6L5iQp7tkNcMfecpe",
  "key5": "3sN2TFgkLQ29FFkbvGsAuMLDMZc9GhReMbr2irPoX3W1XMM32baqm2rkjyvX3YTvMrjZLUZV365o3Ga1LcAh24nf",
  "key6": "2oexJzKWysvpGPvqMoNXCiSNMEqfdjJSjLhNwxg2ZuQpuxekFEUDmhpk6eg6eSz1Zw9ja1HPyfqepkWdSxKH9Pe6",
  "key7": "5xFzMbGwos55BYvkSLUW4HwqKQXRcYSahE96V45QAeyt51sBCVTzSKapupC7rBtw1f8zBfnbr5XTbNtEZB6qd2an",
  "key8": "3t2VhmEXTUBaPNsDda2wtpwKSi1Xvjt2bgxE1U2eedXqb7TBPzaBtUMG5kcbsTrbRBS7Wg6LRWzJp44H25pfWCwD",
  "key9": "5HhJbznW7rZcUhciPNoWtJW112uV8dVM7SnRV6uwkkJeYR4fzQmfkdc8Fm8As7H9PrchPVjqr16sxNemxmUPYG7i",
  "key10": "3iN1qzMpvtSvhZmF2svY3BZZ8DDYPXszhAa8oc5pKyWTTGuyd3xPCLny7sdMZir5e5eKhRxDCAwQp3RLnhiSg9Rz",
  "key11": "ieib2ne6rdfxoGFBALdHLkRj9w9qfiZjvZ87AZUCwWph33Cc5KvMLRa4Ho35QdRS14oUrhxq9MHAUArpZA5UCDH",
  "key12": "PvRPn7h3xPdSyw1kBLTymZCK7CtA1dGjnYf7ydv9azxFGusbfF4tqwNvpkM8h7Nfb3xRi5TPRRcBugA6jLNNmAU",
  "key13": "482S71or8Wq3GpmnuVTd4xFw6C6YBpxgUveLbru32XbxvYug21CUiMorhLSgCm61tVyYwwCvRP8GhgnEzjhhSEtf",
  "key14": "4rf1sFPpGV8on6Xw8VAZkCyj8W2PjbQvdV2fbb8uXoyDUwnKnKkUqD7m4VWLPUvv1Z7BUPWeyvtjNB1WGmhz4fxk",
  "key15": "5sBB21K8HAZKP7UKoPZCfV45sipHRbN1Aj1VBC5QUA4w2L29ie7MGWDD1Nvgc6RXFPNyNTj7QrkhKWb9EA9wTtFP",
  "key16": "vWefc4j9HXiaA3oZuZUo7hh9Rw1YfvbLKkXXrnGG3nwr5Rs7NJJ2YbrjRx6VepNmD5r6t5FCXSGQuNxAJi8gUPU",
  "key17": "3cv1TJ8Y9jnuS9FPLZiX82ekAibEqhNnZUsXEoeuzMhiCYcu2ozb66dKQzjgxKLbg19NYCuFbzVQYGK8aWPrU8os",
  "key18": "64uZ8ehiCtgRSe5bD9t62wpEBYYbGs3PTBZkfqFGYPLv6WFYmGkckbBSzWNyBSxmpFTGm58GQmfDTvSqMataeVNU",
  "key19": "gQEfyR6mnMYEjwyvEQ33MAwySoAhHU6y8XSXT7ugW9ftvHqRQf9PN2Zn8sRsL5ycBE8jUEEMxNEqBfR8dJE3EFM",
  "key20": "3fFVbLnS5f2vj9e6cfoKJJMnVNrerpdMjhCPaVvre1TboNSjHBkWJh9LKXhQyjqaYqDTEMT7xeXMCnkHzsi25Mgo",
  "key21": "36pChH6DrdCuKq1Raz7XJKEQoKa3V6guokVhJaWf4RHHdvAuV3EgjYdr7B6FTeFx7XoyxG8Enz9kj5EKYskYrt8k",
  "key22": "cFjVnsmPnJpqnRyftqeM9aFVJgqVdXDLa9mKsbHGdi48zxf4VmqJmaozkexm57LXqotsnJe2qFKitddqyupEjen",
  "key23": "5uYsRouZmECvWuejq4HUgrLxibCWdsZtZf8EE9NE4WkvyTURJAG5JNk6jo3ShZGcsdWbUCVo5YqQS1JZqvf5ZomD",
  "key24": "2vnj99QutjyrbHAFfBATWaRZ1ZZUMhiCGminDNjQRrGkvsJtJUzWMYNnwALazwQnEwiPnn9L9rfnPvPzF3URthXf",
  "key25": "4aAFpEF3NAarmYnE7ARARK1v7BQXBW6u2McFNR2tHjuf5MhehFAiJ9cUrMgshGoC4W9zeY7qh7KwvtZGvr8Mkmhr",
  "key26": "5EV3W9m4qeB2v3fNCCWGgdbRP264iXQ9KxuV3eiQLgEjXsW8hXYwsraiEGsveKjyVjzDZschaVwkRgpCLa84RhvT",
  "key27": "B5jM2RhcsxxmPpKB7KAfXFJhgH4B77c97Tg9uSsS5AeEFv1qNZJ7kK7gD2Xw3C7dryhMfzFdhxWBUVpuw5qb2oU",
  "key28": "4NUQZ5MEXXMJVbkx6isieKAQqifCkhRKbcvsDv2cTfJqQWNQv5rE7EXpikgEyBKQst71mxieiJT1idymv78jp2bw",
  "key29": "5KASMR1Kb9ScFTedi6719tmVP9BpvhA5UkB37YkLTkx1bsJL3GQMgBNGimceDt8pMM7515h8frJfJYf1H73Zxy7G",
  "key30": "2QNcaHttqtkF1dsK1gtjXGaG7iXSPdJef5kJu7o3s6byequmLgiVu74rpmGDNVYN13rtfcgfepCjfzwmX6sh9EWc",
  "key31": "4V7UqoChfJxDqm52mmkCxKowMXa2RXAVYBQPrMY8abiD9JPa8G9NXMXKad63mxwCaGWjb5HNK67XWApfpTsVPPae",
  "key32": "22WmAaBqrY77yu1399A8cff8TSqx8gXFzoc51vMhG2X9aK1SbeHqTxH2ZgtnN67Y2c31tvyabVaRgxpUccL4t2WT",
  "key33": "2WbZ6ZXxoess7t3oqvTCWxQpEffT6KbsipjPE15DFjmCtRrmcJN7qgGP8ZjtDUv8AZG4YvFnBM1xo7oHMfK6zNGo",
  "key34": "5GYZhRQwifq4XkWWPGCi6C8wHz5awviiAVutEqx9wEwQpbPuFu8PAH2NQiwHX116yp7cv1ALk5R1aij5Wap5ncav",
  "key35": "5UzH3qSbF3byTGVTskiVidaNVtR9f9QkLhZRky5op9L8FHpCaS92npXvySbE8VQuSgZnFqdasNhAjmAuFsyPmRHQ",
  "key36": "2adypYGEW8T5acS8duQG8UZG8cZAxNxKYjZnAVT1rN4jFYWjcvRBaKMeATKq7Zj8HVne4j2iM7cwrKwUbevPr5mq",
  "key37": "4QUaQz3s5mdDm2wdGmXmfhMUXqK7RC5Mb9KmWyjuBKLrSocBNQdgTQrbATPLnavRLc6ibopcouTmpcCawz699ZdX"
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
