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
    "fq5azwHi5BDffpGNtXXDDgvhUj2UKDvXa5s92R4soedeWC2MEAmZoeBCe8sJvY52v5iGr4EoraC6oFgfKPRgZMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p1SDESzdTP9CtYhdD7EVijVifZMUVe2f17zVEGd744jWq3Rsjc7R1pB6GeVtkN8rmQKxEGEgDWw2KDaZwkCDCff",
  "key1": "4dbZdrfWaxpvFuEMkAJenxaBbpiw6qShxrdYBD1bqStHsDRd28o33cTJmhu1czbwaAKnvzpda6CbpQkf8N2RAjZT",
  "key2": "aBYej6KN9sLAsJHuj5u5NCCJLipa69HDJbUycZeqmwPWNUVjcbSUxDJ3rcwT7gpfYtj2LTVbKFZU47v6jsySsEt",
  "key3": "2XYTkRmZ3owccMDrEGeHydk6xM81acwq4XeYETa8EbbvnoFhDmkfP3M44FkQco7Z2zJG7zH7LNgrFSniDZEbfuMA",
  "key4": "gpMdc1M9FsVcepZRSvq2eyePz89m3b2kYUZqSJJHPv765SLqpko22jmxBZ2bqxNu12SAPa7jMRW7K6Ua1vcFzf1",
  "key5": "66Fa5ziHrrXneSpnmA2EmC9NcjLxdinaRuYYiwoQHpuMWK6J8sTJKn2e6bMCt9EQgjApGRpgcxxDcZ3Knze3enrT",
  "key6": "57QLXv1q3pdtLdcZR356UifoG7cMQpwrWGeghsBQz1WFKukcRW8VsP8xGt3Cqbz7gv4tF4mnEYtYa6LtkY9cwmre",
  "key7": "CA8K2uxJdayBnqxdykCbKP9U13bs8GMSJ3CrtMVrknuWtedZj48jRkxJqWVf1PRmpgVQRPisKwWci9h1GcU4NHk",
  "key8": "4o6Pgp3d4ZrK4NcD7AriAch6GTkWdoRrCPE8wmMiqYsPNB1fVzyxJMCcnnkqn5e8gYuTXymck8WdUq5VQqdXUetm",
  "key9": "4BzbZoVVfwGU5Lmn57mW7K3g7sumyWYNsGk9VaYdAiHLiSQAjG8XH3WK8eM2BTYxaKhvp7kvixjuyMvNkJdwusSC",
  "key10": "5nFfTtcvw4ykVXnPYa2gFGgEsuaw3pbk1xa2ZPnPTfUTGtZDBWCXzMUUz6tamEBEUcGU5HZ8niuPoViTZR5AwjXJ",
  "key11": "3MEf7cn9eQMZm3uBudRXRpQd9dnL4fRCziCzaeQArUwkVweETJyZ91bFBJajJnJ9JTe1b5oJUk386ubhneFhXcJ3",
  "key12": "4S8LsuyGcc36qynJ3ehy7e2TdRfbh3V3VvTeijfoMjX15jE4dRuzUe8T2K55E1MyxR7zpc8yhnquDknPzFasCedK",
  "key13": "58sNvjnHdkPEnQvKoEepSx22Ab72UyhzRSJY3RAHHSeVxRKKCB3VdGMiv4ksX8LAQLTnci8LxKXiNSibLYKR3qUQ",
  "key14": "5H1ZjyBkF8EE3dmvcczqosWqSuYPY2M1uKLuvhrFq763Xe3Zf9zEvGSxS86L68QaqLYEkowHG36B9YCBufCcB84A",
  "key15": "4q6PxNzZ8wCwgkE8QQFigoyYmRMYYHa7BfKdjJcKchbmAFagDwJFDeKFrQmdwbpCk1zahRmdkcxrQ6JJYY4VBR2G",
  "key16": "4pXzRwayx7chbpWB4FKbDSQa9BLFgDTMdTbM66y35eu1vjKHx6dzMPpUNtVTT961nCeedoHdMRi8bjoDUJ3ddEtr",
  "key17": "3NuXVp7EfHYAw8J98iqT9cmxg3chgnya2cLYqzZBJ79E4Kuvc4swaDezPVgV2skjyWMKvHfWQWc4rpbPgsJpedZa",
  "key18": "4MwfmGq8cBUwTyu1t2sxnpSVj3hxwarwGrjRJd3wrbchsUFqkb1opcQd9TusvPRp83X8VyRM7SnQUrocpviiydnz",
  "key19": "2tAtms69WKYZZUqqrEczXhwgd6zgbwPiYNq6RR7NvgG32EdxkzBEtMoBQniJxXQHsMPgvhTrQ2TNheHBqfjxc4vb",
  "key20": "EJ35XUZtDPDsmvswS6bZtFRaZutFMhUNCGCbMAuWHMm79MryF6QqZuteAZCBGYArkq94iWc2YCapwH1uTY5nquP",
  "key21": "2ggmttAYYgdVr5P5vQUZhisghAKUuBgPkt7GP526vE5Rpk2LGhAjPhWVQhyPsJxmsMztR2AaT7dLwKykTD1JkGZ3",
  "key22": "5imt2GJrmbiiMYmWq2hLwKQfWLsV5SKrXfLaBtJLBaYQs41c4X19GbTF5QYMXzzzhkmjbKbV6T1S6MdjS5C634Cz",
  "key23": "4ozqRcTdDwo55uXzKANzdXsJ4MKR6rnSE8VepzEfSF2z9tpZY5PM4JSKdBMPZvADFWjHCEj1Ps1YaS7oqqKq19Ry",
  "key24": "5K3nnQ1on7VQfDQSrZAxETyzcHq1uvbx6NuZ1mAqjWnpyMgqBJ5nn5PcTmzX17mbYxSfMM6uWYyYPZCAz9pHemUS",
  "key25": "28nrdveGXo1cn1yUx8EWTrbJBH6vbcB2V1Y9JraVsSxWV88yyAsME3fZYaRztPR4oRVjiCa4432rfuHRDEZnMdZF",
  "key26": "24gXMd5TQZfCGTmJQ4gcWBBAtLQwqWhCmCtder2qo85pVN2A3P4uWcchDNgJP9SwWsfBbaMZPJ8t69T5jaESzCt3",
  "key27": "YMiKCKd2A7saETMM9bSyk7oJ2EXPUVv7iQAUgYhA9goNsTrD3oTLqSx24J2KgsKuLhM1XsdQ4DKBPtHQbXGWeBx",
  "key28": "2akBb1scnHbzDqt2CsUG6WHAdrtJFCsFXmFigb9qWj5E91zX5SL3bKzRguoqgxoYHYUgVhp9hGGowxS8LPGD3B83",
  "key29": "5UGzxQDrbnckddo1U9mJvGwXHQupYLyqUVS3uWW7jiTyw7dmf3v9oNQ3jH4XJZUAXH6LbohFMTEczAsws5GwLBqa",
  "key30": "cCRgdYtetJW1KAE2gd1LYX1jAmRxUbvu3YPuC2ogiccQHmaLWG3CaYo8o7yEcW88uQXoDf8Vm1yyUmtBKeVvtex",
  "key31": "4fpGaPfCpPXVnpZ3eG6Yn4k96ZPvQdh1DLUGcPjPiCx776nJWWtaeTefacRqkeJb1CvW3oXPHWNyVHS19Lbx91RT",
  "key32": "5FRt9ixBddrTrZzD7naataLr9HqkAoLwBu2z4uEjWQVyn3VuSTY4qu7WwASXWpnZN11EWxFLhBddpkBbuvb1zrQT",
  "key33": "bwsfQRxFMYRRzKz8aKkps7bB7VCTcQYKHr7FriiyKKZpcQ8EKfj634Pg8EE4FATTaQQsjzfhTDNLLBH4WztBhqr",
  "key34": "5b183MQvPdnVpXSTvJJWWNu3hzA9f4t2URcyWqSyn8Fe4G1VKuqcysg5ZPhVTgEoo1vD7nyM1TZEDUQ6YeMUjC4K",
  "key35": "GChqSZUwh42eFGAT1fa4pkzr3fDM4Su7LbQovEwEq9vqjF1adZAkNn2QonTukViYJYw3GBwjaCwuxaHaX7m2vXe",
  "key36": "5shzFcyNv6dkvmc8uPF3YBf9GVHZBAwvLrkER3GdrAbkivFrWbYvTRNRoGBQ5XE7D4qDWQBM6FVmcotBgkG5eDb5",
  "key37": "s1beAYkpt4yhYV6RUjCqzWo4sVTkpR7AR2kmz2Wn1bo595TrUQoo1t5F7oR8aNyDUQn7iZy9bHg2pnNpcqyth4b",
  "key38": "4hHFGwAkMstcopkrhWGsTZGdvcVLS379ufwaUu1LhaNr7xnL6rTSH93E7dLfvik4r4LugXRkP1HL88FBdqe6zL5n",
  "key39": "BuQr7p4fwoRCQhfW6GTvZEgd1nCRMahZLcfMx99Yp6dy58VL9yctjZt4vYQPvWwB4VhQEBZGGgdDmvPNiwp7ksb",
  "key40": "2G5PGdR8s7SFWbnHVbxMiiKSYxREzMG6wqi2EXg9GQ14QGzpf9G1dwT1iVVVdiSu7tqQ38vAPd9nkDqDPJa3pU8G",
  "key41": "2okXXia1Qw4Kk4A1QupSFSuwKHTormaEGuKkFR1mRPXHx2ZWKWbc9pnwCPKoeSuvB8aVMTNqFssXbThMRDWS2Po7",
  "key42": "3QTr1Aa5p9yy3Utm4JdH2TYjRK8FSvMJcWrH7gNpFz9s9i97JgpXS9NFrDprSDvqomqcs9QCMNS4kbG1kqfZySSa",
  "key43": "3X5rbc4FSCs8pVY6nYgrhGt1cPDyHu1wKhe7Zqh2kKihPi1K1M9spruw7kLSw6A82FwSdq1kWF8yzWVuZB2SBKT5",
  "key44": "2WZhfVb56K15VAbnqv9q8nwD1vD2ixEbibun66VZKrganYXETNeuBkSaZjRJfpgMb8okmLTNPpLhLCY9QxnaxVCN",
  "key45": "7NcveFWX1bq1h2pNLUpvHwrs4KrehRbD5gxoSdfyNEBfzbbJRmc771wXRDqUno2fzHQbbwLpHwhSQ9c65Rq6V8p",
  "key46": "241r2tTbX8v11s8UoLtfSK6T2Yb3Drdr8D2HYWPASywBYDJ4XEjVQUEoGMxeeQWNMAF6BYS7GfV1zaq88wp6DVir",
  "key47": "xcitLbg4HQAW5FdTRN5rgzoeBsBbXVMPzA3y6uzZHLXb5X4eKyziCrqKcFNy2WbdJpNKV1jWKSjY8JwbuxmCCbf"
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
