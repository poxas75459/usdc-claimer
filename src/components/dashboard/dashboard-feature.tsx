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
    "5jZpYG6mhGDv7vMQXzJjCSvivRPsuVEKK5mfZZmZAw1Unj1qgVk3az9RbGCXAe1vgkfJyEHLhFJo4yctCzL1msbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uw8pRYgNK3mfmZUjJRTGCUwdvUfgoSFAjFiGJcFkCSs39sCxRP7rqtNUX87ABA42tXQo15j7859vND3qm5C1Dkt",
  "key1": "nz71EWTnsrh8GYZTRgpGAALF8NVURRAriEUozTENM9bWWnHvk3sibpuhFc3uNTFy3jYNkDS15hktVzjN5MHptZA",
  "key2": "2JSX6VqMsBQGLGkXQwDsn8n26KSqPTcBNcriqAAG6c99mYCaXAujsoA2irestwxwn1ZtGPCYA2ofJyTMCAHtHzCU",
  "key3": "aRe4kFf9kUqPKEfVBHKqnJDwQVEFf5KdaH29wogkXd2pZLxyKYsTpg1GeuxwUMxiD6Sa3s1prFTb9iTzxAjnfu4",
  "key4": "g3mD8JbjtgmKrMspFrV1P7R6VsTsriiqmUtympUYyZNqYBw9SZ9YJohpwSwrYE2qQea4FBmZWbWUfpf17vcdtTW",
  "key5": "W43xn5vXPyfWtWWcEcnQRyG8oPg9QnhQKgzWvss15MYz8Ykd2qrjxZ3uBPs51egzMxcA6YVzy3ZDYjYw4cjC5EP",
  "key6": "3XNjHgFaBxMYw3qPk7Cp2P9CpEPzo21xy16M3vPx4c2j28tkCaJRa6TzFvyELzfsSV7NjamMbRaGmxzpCBfkW3ix",
  "key7": "2ychTmhsWqKmWG55oGdD2p15pxKWxdM4ACtRwBR2JaUdCkAEUreeR7QxcUu2JSXJoo4FFKCTprZCQuzRWeHPGzra",
  "key8": "2V51CWoWrSCD9URnQg6CFxFhN23VKXjkG4VkAL4dqjDeCRuVYa57aokVBjKNvm1dDLGQAoas5xHzgXAk7oLSRRRs",
  "key9": "5H4U7PHgbraUTAkBPCbk7jEkEyQ38sjWt2YhvvkNneKdTtoFoYRDkVMPkuwffpM6jcC4GE2J5PN9us3DTVkgypDf",
  "key10": "3t4TiGCxsWwTWeJSkb1AQ3qXKZE5bgiVVTKbejL3c7yJ7uRVd3LHZriV8esnWs7yXLoBwpUyqRGpLQeNPrfpsdZS",
  "key11": "2ENaZodzmSycRFYBHUYrN1UqAQWf2kW3JyMur7D3t1wqqa8pdfs3YsVaRtot5dNYhWdysEW3PBwjCCugT7T3rCk",
  "key12": "5d6iBpBL3wGCGBAJjeXTs1iwmQCMFfhY9jwVeSM5veEqCZkUgwMusAQSr4BdeWVnCocQnKnyaREXL5mQBBaR9jTb",
  "key13": "5B4wH8EKbAvFmodtAygaN9E3m5Aji6i5zMw9MQPdTXpkAywAGn3KtyWF5APLypQWXS2M6Rqk9kMC7fwKsjWDAKEG",
  "key14": "3UeSSd7JMfH2YSdfeKFcWsJ4BXvjaP53T344Twa6Q1NkRpJB6cyJDkx9njqxCf19YcDp8gueuWEJpbHNihZkLrda",
  "key15": "2wMJZaaZr1AKTiZMWNWM8bngdBue1QLFu5jg15BT7kZV7BdkyS76BUePh862PKVprGjhuMmz3tNWZCL8BxrcA6LQ",
  "key16": "5PJLrB3gKSoucsP4TaNbGGTEi6wqJa52Auh98Hb393YxiR2d4RKLtuGUPDK2GLavqer7eSnPZydpRj6vNyMUfmLi",
  "key17": "2nMfdjfnLfsuPjwLMA5JaG8KKyW1fKr7abJoFitHv9MovbRCCPArJ9SHXyoDY9wrZg9katwBE2aRjwnZQYGBrMce",
  "key18": "3eM7spsqBbi9c3XvHFrDpTuPoz5XYiw79g3orAsaWAwng76Jxyx4p9UAotCPiJiYM621W68NBLWduRykQKToq3uG",
  "key19": "6jLZDWUtSnUHxvoUrZ9TZuxSpQ8d6drE1CQucgsAWAqW3u4s2ADpKudqipzk6xYFtQVycCi7QmUbKmjGwmXEkJJ",
  "key20": "4msutUytmEnNaajZpcDNToiNTEHei4DSEMhAJKq2DJWrX5nRpD4F4tKmYyJJ8JqppAwEeh6wDYANWbVRCjXmv6eT",
  "key21": "4oVTha2eSyT3Cn8bn6953DMLRbG2z66szb5WBGKTPoYRkJbB3K9WCxptDvCMjQXDWypq2MABTZT9zPL6ZJAT6ptd",
  "key22": "4W2y922uwTWsKG2TX7hkQGkSw4kdyFSJ52rK4shgetZKz1CdTLX6fA8KNJCCpBiZULie6GcJ8t6hTA9q9rAZg5qC",
  "key23": "4cv2kgfucipgbfPZdeYsH2vB7FJ57ttR4q2uE6APDm3nHc78oSg3t1rVuKJdmPsQGAueF835iYE9zsHAnNmUHLGj",
  "key24": "2z8ZqnyvfZFz24BvvyatJHcphimKDPZY968BmtoixLQYcurUbuzXE52WDz57s2FuErQSwLeg2GTniByh8nVGxazH",
  "key25": "3LYF91HkRQmWTqa2DTzLAmz3TT9xHoUM2v38B9CzKAK6yDYE6yCGaRmTVsYQnyemkbC5Vg4zY3Fyy3q6QUWsLUGT",
  "key26": "65HByodNqfnQh1g9X6Tjef6RLRoR4hYwuvmRD1hW1Gr9jYx2met2r3jTQ4rouHs6qXkm4BMWMopQDUSqk63Bd3kJ",
  "key27": "4BZCpTzZT8qkh9QSCF24zT5CP8RZFPwW1tEfcxGyE2KFXjzpt7ey21Sb2ZWrv2LrJXGTuUcJxEehHtvv8ofFsRJz",
  "key28": "5imbowEjdmmuewKLtAzVoBUqkhvL4AWCCkbtGUnaP5spjwm4igDrm8et7hsigJqtAoAHcrczhaV65zJn9avLzmN3",
  "key29": "41ca94qTqpikewjEJKWNuzWSY3Apb7QprE7ZoFDcEqqqNL1PZ9LE8mxkzjG2SALHt347X9Wp3GNdi9TaxN53pQMg",
  "key30": "6Jw3uz51QspUJahYd2N8T6uqcodDhqp3EkRuRR8xCnVntjw1G9uLykWNvNBPp35pGZLoUExuTzRtTKsJDwume6Q",
  "key31": "xYVca9JcmdWyF6N7kp5HG4GW6xge4cUraFGea1SmVv8Y87U6yK8a6STbro6ALSLFyHZbY1YombhXAqcVX8KcdZL",
  "key32": "3E142k7NpCfjLEtrpBLAFan7oJ8Lus9PEtD4z3j3jPyjxg9DUBoFfHoMev8hC7hbZ8YFG9VpcJa4ycpfJCvvqZdR",
  "key33": "4YmHqaCY3areo8NB1RZ49rHYCz9S4DEvXEpfJf1WyCHNEb4TAPB8uFCztHZFoJRW77LHFqhuZAMLYQzufnfh7jCq",
  "key34": "4QVtG1W1fHC7UbmXGHQtGaqtagYiUCoJ2y4fZ1CwAydWqmmUdqQdwdH47HGDsJsQUQeHYgrqtaEdSejDk5mHcuQS",
  "key35": "5rjojMLQeg4e7Kw8GdMQZXAcSdifCFB3HPyVVMLe9BbvFsQUAdh1GaYHsCGARs8UhbevqVbj4fqWds5ymqYH2hL1",
  "key36": "4NtUUdGpcvYsYnxh8zcof6jMmtR4rNsikt8yE8f2uKkdfsixeyyHswnHskriJxoiRMwKrDXTpAgsXYYH7b1bkTp2",
  "key37": "itMaqiSWgMyKbwppQiMD6Ky5GE4f1RW8sAS38wpiwjcehX7wbrfCjoWrY1rH7dot2XfcECHQMGqRe5zJreq5w5h",
  "key38": "5oRCvwT9aXboNa7JfFHFaPezPqpUF4MDaLKi4i9qSBAQUyi94UxDPvmoY7MpRfC814HkvkJvmv7J36gwonLR9dGM",
  "key39": "3otfvdpfvVFfXMCM34yv4uqPfGr4zsEa24u5iRT8ND2V9sjP6pjk64V1wSTjVLehpQtPeJ9GLkxHeqQJ42u8qYDK",
  "key40": "EsoBKLwcMxQW8AS9jxJHtXNCMHU865f8eakEWuctda95ZTWrpWCPGYdQwE4Qrgf9BtNu2WmCtYYxrxef7woTv9X",
  "key41": "4MvC5qvwBisSWxNes4RFkHwGboLkow5g6EN9h375UducP64QLMy6ooEjfD5ZGV9pHNeB6DLHRDyuqq2kc5Mxu6F",
  "key42": "2izEEx9RSQ5YUudzL5mHZDPbVT2B8jyvxG8f9ssY2NJakj1ZeAkbyEExZNbRYndBZZ18DEHhsykXfzfbJYZao5o8",
  "key43": "3CrqrZf3FcN5CchJigWLVMqweFJWsT82ybhSD7aJy8ARsVbsq9RE5imxx5iroAw6wGsHiC6eXaE3aFCgZaEaT9Pu"
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
