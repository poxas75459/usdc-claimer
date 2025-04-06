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
    "2JnWUkoXzCPznxtkiFkdWxHHE1JF9BGTx7SXPTpH4eJUZVa1nEG6do9X337sjA5f4gZeTyx7BXAU85B2rgQeMi3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41K9g2bLxVvjW7W7hwrMcXoMSBgvsgmaXUgcGNGxZvb1aNucjnFrHMJZLtjWAGVUwdtJyp6Xgwd7ifrrhbuQg9s6",
  "key1": "5p3AqjqQ5jZZ3vRnwvPLUNoyTGR9fwfCLzjetrt4dRUqsy6ujuEmrQnwiZzGKxzoHGQ9MZGPuzGEMoxcZtRZvUzk",
  "key2": "5jCRymLxTafXAkxHAFRJHRgAKPYsGpeNgFS94tPrpzBizmrVpGXczg3tm9YETEruEJvqfznCMoDuDm1AG8VM19HS",
  "key3": "3gsV3kusMXf9jodNqrUxJgNACwkhdM8nzmHp3CFKGnMzkUqE5o6SjT9AFS7ZTbGxgWJR1L9AanDbJ2xNQrduByDQ",
  "key4": "4JSMpFVXotP7F2NQ4WwAPVUDyZHGAXevbJwSxMw49n3FBmmHu1dfPuTA8hXiadDkcX7msKSAuHkuT66npu8SkbiL",
  "key5": "cLcbhSgoH64xY4oy3T2eFNagM9tzgoAma9nuNVbLdz7SQcxK8tNpS4xTb2Hc7kAi4tAvL5m24WzByv4aGQBVP3F",
  "key6": "PxVo7Nik61WALcmiWToVAhnHpbuuNdgDqWqoHWqW4mss61D14f7rxWPjbtb8FvS1Lfq5VBaEQVZAXWiNHt4YS51",
  "key7": "PfKoJFPBq9hPeZgeBkuhMEWbVScCXXtwNEMc7aMMQPjCmgkVPbzBvpVAMqfj3anL29mUCXSNXHfMRrNyvNi6WFY",
  "key8": "hEmVCDTmmTfNNYd9qyK8UHxxLkiNr9u5JidJsKzJeTw38p1tv15ULpdxyUvfs7v69Z2TV6RXnGfburVnosX48LH",
  "key9": "3d5szrM27Bh7QDXWm5ts2t8Ao1VWD9LLXEuUji14Py7f6upV9DpYwTncibMRCBr9eXt87Q76EqSJn4WqT8a5bjg7",
  "key10": "4oCkaaa5x9UmEXbyqb5ifLrDuSsuxEhG9FyFvWyj68UESsj9t5AKnQhB3TmYmRMCZBHeV8zy6PFUbFKuQzthjNv",
  "key11": "scm829Ja4wP6xfSeHA4WwKj2nQZKmd2wRdTS4eCT7FnUnc39QJQVTVJkkL1xWeFgK1reefP85uTbLZvw7mcM3Pk",
  "key12": "4UZmYVqKM8P1eAcaQeCAZFKgtQ4BbQGJv4RJpC4cnHwjDpSgrECrLmfFkTb3rF8HQR484H6CwD7vSnRG1rRFud2e",
  "key13": "37RcYtFsCBWoqjgzsfZWGffcacNb4STvvx5Q4bSgEHgqsycVDryHwZJNDtHNcjhaPtKnk46iKkhCeG3BHHLL4T5B",
  "key14": "2jmovoDL89PCRMG6hrRN93kyeU7NqUjFv8Qmg1fx8nNUD2Wu77cMuA55389ZE7Z6YVSRomh6Wq7zv9tLa6oPpapq",
  "key15": "65sR5i9Se9hShdWav55wNBm8AUy9CWgtFGe9StxoeR49B63f2et436Vnpu2G9t2esRq1Gk9qzWqynhfYhZ1pJvDJ",
  "key16": "5A7SbZzshgQmkS1kRjbicUUeDD2b4wBxaXWMxdUtnMo5yBN7RUfWLxyYWZUcKWXaZdHm5AbneTJdXenAiLBgskm1",
  "key17": "2bMyEmtj7jZMpfvVfL42wYCnPdNA976ZXozNt3UKywxxP48Rci129NQDg1TJQGrynPmaCU6MbHFh1bJXyoBpVQVL",
  "key18": "mK5tJLB1bf61P9zm9k9cKc9sWx7v3Cd2mxvKwpjkYHBCsvcfcLdNLWwPFHXcfAT2QSfc3brYb5tusKjqEW7pqMj",
  "key19": "pfKHm4MxRZBXokyZjNzjjgNoNEYmNVobrepNVeqyw6EYkvVkPoVcL4ViCLXTjePqA2GmgJjKLiXFDDjCu7muQrT",
  "key20": "3EZLsFG9uN4wUSH99yXJDnhuUrxJwGPeP1Hgwt6BNaZyjh7FougvzNMBR37AeUFWQnPgtDBB6cKeGgDD1eKurxZn",
  "key21": "4sXKfSgNjqbMCq6N9DZW9BKqort7fJ5tqqkwndyJvH9k4CrB3yCNArDYsV8abHjM4Vfq1x9QWY4KkUs1oC5K6YoN",
  "key22": "2MJvLwZHLdEMBu13uzpkZBNiTs7ndbkHYd9dDJc9Wr4a2SVtEyZ2ojMpMrpTZ5G4VsYC1XMfrpAgRSsMS5xkP7H",
  "key23": "37xk9ZB789WV95BjpP8BknNrYQ4pdEJRNUAqepKmquTCeWGHLTq7vviBRLdhVuMUtakFSHYFHr9pjS9XP6p7TGVX",
  "key24": "26TtVkH5tcT11q8rdGhGh6rJfgdSDUvXFQFYwpDuNuzhJbRXnN4aDQ4y8G7Z8N9qdSwqZcVBaK63RPYN64Z4Q4dA",
  "key25": "2Y6Mh5F3sMSR9RLJLcuW3NaWDW7BUaLu8sHkgsjR3rDBYkLdZQQJW62HhAEDdtHbMsmbF4qUng9hJGnXuNTQumeE",
  "key26": "4XWKF6rnV3B7Gwbn4Yz9FeqvwzGBTkX5dP5tq5hcK3bJbSa1YkWJn3hxXeufNPEqGa3HVaKYMwUxfkTvtpB9RGNP",
  "key27": "2w6KqcBoX4mV4SR4kRNpqJdZrKYMmMS2bGiKA2VoGwDncXFmEcWYk3xT18s4yXALe48NepbaVNU5Jab6b62QJgJ2",
  "key28": "3RXUYrAMGSWej5Rkjq9sy549Byn3QbYHwg3THUMFAcRLCn93fR2ACyPrdgkz4VxN5Jqvoh4Q8RdhnMdnkiCUfg2d",
  "key29": "e7q1GzqW8oRYzNGbMY3ipkLL861bCtM4FjU6QUwh3CwvBCscFA4UhtRzhm4BFbfmvUKavbozE93yAGrCDZHr8T2",
  "key30": "y2ZjU3PSzxyARntfHPy6WYZ4wgC9qA5qTbbty8cdsFQ5QHtHhcLWBjfLQAF8iKWDrZo3J1RxHEvVfrrZdtwaf8Y",
  "key31": "2HmPL5dqqgy1NfM5jy1Um6Czhd4N8SuSpxfBkZ1jH4tBnCYcdTfAUaoM7dx5S4TP8fjwkkmoHJkwwQcbGVkuAVit",
  "key32": "4rd89N9ns8BYzGtBt7RcuFReheFzioTqGtfn9yE524qzQjLhey5qRoB4wwrRzZgjZ5mjs2t4MNGbUSFXS6WegxUb",
  "key33": "4RgRW72vucA6xKSGxjHazaJiyXLhGFYhtiMPQQvR5sf8o512ddN62vdMdhPhLXhJNrmC138Eiz22djHhqKtBzv1h",
  "key34": "32j4PhV2AkjQooeJsrFLLS8225vuKQNk6FB9nF83h9JMGdgA4tGM4MmcY5AGgLhQZGLkuJzL2H576xJZPyFqJRGK",
  "key35": "3uNXE3b85cCaLLZPayQ62HghpJbpGPYCoGQ4yzZNofqEj6hZWLDhQxu2LEYTi9sicqsnTu4UYdfEgYKTGT69Y7Dx",
  "key36": "43C3HDV8wVbr1sJvYdCHhBURMGRSK8xvKrsE3oRjAmfY7fuUc9hcjp1C4NkAcBaR2R6j5Tkbi5wPLuxpyhGJoZnp",
  "key37": "5nNWELdeaNAymsBWHVcMBEymZh41PdakRPwxU35DnQ4S1LQtNsYxEd3pYfdpLc7LPzBkN4JFT84RnZ59Qcm9RJWq",
  "key38": "2bo7RJ9h5CX1vxQD1c8yLDsfEdwNc6MiMYHeqehgRhi91LNCJ5i9Letp2d4hhr163Ym1BVXvoeiZw7sUoxJ4hPMg",
  "key39": "3ZYU8fFGkAhBAwGh7APfWENHmhFg6ZwmQacMR2BUsSszgdbJHNLeAeKfD2MjFtBRBpSpcfJtnW52P5ADbzNwyVdH",
  "key40": "5QNauxzehVJGkHY3RKfrHwC5EwdKDouuxcde2KdHvTwWJrCBrsAdoZo7qWnSomQNGUiuHLrTwW9FgLEKgALZPLRb",
  "key41": "35aB5EN2cV7VZvhfFcrWf27S12J1ECjGR22eyid92SAZFSeywuMgUTezYxnsdejXniVK2Tups25SnPa5CNcofouK",
  "key42": "4oPw3fBxMM4jtToch5RnPQeyp5h51A7emTM6ZL3zrRWyptGhid4MkbKLUAuyCJKMH4WxL1Dsn1BDNL249sWa4mLQ",
  "key43": "56NFUXdgdc4w6Zu4LCnvwrEZGrFqff4jxLVUJjoBCWPJeJWRiurML1y2Scrd9kGgDeH4xRMKSX5chC4SvP7pdGf1",
  "key44": "FHgRFRvGmoGPyQ7fyfQbCz1UngKLKRd1Mhk22UjTRWCWtYWhpCG8Zb4VLp1SLWNYK4wTyxapWHNE9AiLvAqTAsf",
  "key45": "yEfK7wV9pyayLKTi5reB6KF3yUEjMYaAkjyQ4xb4r7LFR6piYpG7L8C3xe8aAWRDk44FcUH7tDvTHvzrR1xSVxF"
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
