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
    "4SsCejB2GXUqdeVAx44MUZmiSAyBohdshvQz3sQeiKQtLGDkuTWw2aXineqWBu1nKcqb4tGbcKRE7HBvZZoz8eGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p4fWkfjQ5tgySdEeRReRXQWfy5pnbQfDSmGGZVDBYvLX1ergRnC25j1xNJND9YGn5YM8YhCYrQW7pB5UoQ65Jxq",
  "key1": "3Ennyiww7sGp8fYJXh6CH2CrGDvL13p1oQedGsTTQRR4xJC2TkQBWgx4Rf6BFVdccQzvcPVFHFMsx2t4MNWe5LsM",
  "key2": "cW8dvEtHjhAGxNKTGLt99gAwBMtemwqFPMkauopUt7P7xopKtTQYwbq946FZeKCBNc8Ff7QcbnfDjGLLkkN65Sr",
  "key3": "535s4KmvxbmmVMADJLyeEXCMuNMpiFejW9J2E6iZaPxe73TYfWDkde675iFjRcLzxUqFVheENRs2QnARV45PsH8A",
  "key4": "43dYqtJR3jSjBwMAsWRdovt7em3oW3UScGSjmEhM68PGpmcSnmtd1vGEnSncutGSh25TaCVUHuPUkZmJqwWJ7Efu",
  "key5": "QipTLKXCsz8LQpXAR37hGaFLwTrfL71aMR7U5jh8DM2peQfj7VQKtSf34bZSjYDuqvTScKQxxAK2r488wBicjqJ",
  "key6": "4rhX9KZckGP8yr5yjH92d4WYm1umDrA1Hnbx657EAT5gT6jVorH1pXZ5J8jGqLYmxhGZ2tNKBHjgfDpvYe8anzDh",
  "key7": "5gAhK4gJkoTP46itvdZbZWvuyL51bgtNeUFU2SyrSWGqJ2xAAaAVcAC9L9uEGwRv63GEZ3xz4NzaxtQSE8bf8Hk4",
  "key8": "Veb8vr7XyW6Hs6zfQwTGmo7Jr74fMrgX2ABFsfmts1srEK97y5GKdt6ANZL15dj9v8sW3oyjWRuSRnY35ZN6yXm",
  "key9": "3tLHpAJfYTLTtxCxLT3RsubpgupvvAED1XHtWxpZA7XPTY9KYw7gJ73erBCyuYQpxAWjTyQp3vHfV8LvAAbqMMzU",
  "key10": "4mbX3SFJGEEk91rh5g1d79pZ87sBn5AdkdH3mGWrjCpHKVeCEnzbcTcxSBt7jMf1RSrG9WwFH1Hkdoz4Ek67TfHT",
  "key11": "48EX2oWbqNzrrd2TCoZTzVcg3hQgmuxf3kj33CJid8gU9fe4thSAifvhDPcGiFGiTzzz5UY6SKePuvoN5k6iDFrr",
  "key12": "32z5sFrNa4o1W7JXPiC6LkEJ3s9LzXnQmEawvw4eQkrovQyBeMD2jbvRzKWymXmE8m1XrEuFFQHcW5LZKtM9tXXp",
  "key13": "5hdJwYDrTMQkXxKa77JW9pBPoXihkQmpS6UfkTYHMtbXSh8omaP4qQJaWPGdtHjxtHN9P4jgzh8ieXrWKnBYh44k",
  "key14": "3XdsgbLC8cdykxvUgftLmdDFRQgpZarniQh1qmZVWyMy18yP2NE1WkCJe8oqBQUr6rKpzJWvur8kVQD3zuzv6mH",
  "key15": "4pYqUeNZjikWxS5oTg91DCxvHKan3Av9Kfzco2iAty2Dtc9sgdZYgMG4AME2bWm1h3wxv7gTF25DQPf8XD8Kb47h",
  "key16": "2pULykMk6w78ZVLtKYksqbBGzSU279h1LLZpeD2rG6c7kLRhWwnipf9qAP8pRuYeNu8weKh4UqpgvujEicL2bnrp",
  "key17": "z2nMqKLz9bFp2XqSUMDmeaZaX2NRKQnxfpb2yj1ygLaWkAzmq3h6491XCYmWKb3qevHmXvP9rmR1CqBEUb7saXe",
  "key18": "4q7q8KanSLWyg28jLfZtbLJp9qp4thrme5CpiMseeYAhxrv758fVLfmHTYtF67pLenvrrFuBXL2P7UrZirnhPKj1",
  "key19": "31ZkBJS8S9pHj2pTrE3rnAUsznnbdpks8BwzYNkBED49YkSVpq7Q2YVDVMMmaCmDJGxvXXk5ZsyNJFsKexoahEau",
  "key20": "3UU6ha6U5hpsnxNaTusLnDBewPxAa99hU3dgJKSqszowurtDSygyFFgxDmjTHMvidpSitAC4sYZNhhR9fP7SemQj",
  "key21": "63xFgHETxgbJrDsL7MgTwvTwYBs7XUi4DFnCER42HF5Foper4mkNECVN589HfDcguaVCDhei8Y6SwKr1kstnMF1t",
  "key22": "4msC96jmMmf6QYUJR1UXJVo4twSLBA9Q2adbJ1Pjs6JZpS17GgV4UVfvHVkuyp88596q3LY23ASka276jJ17Y7x2",
  "key23": "5hPGboAtSaHCYqUoECuMkhTArZdk3eBLgM3T1MXsUGnvyCwzgiujsGU4fdR5jwzHZ1mJNLkcn2tqcEjBmsMRw6at",
  "key24": "5Si44i4W8MBFBwKcPJxXXNAknFrxNWEmgCgfnneEkxrbgSQZtQMKHwSPkHTVdhpwTTL7wfzqPxYoFEVAXHXfGszL",
  "key25": "3vSo6dU4f3HbvVuePuPZ9YCeL9CFxKvZqpCzmV6BxU1PYWFJd7DV79nBcSdtKeG9ThCVBNdhVohSvuAmAbQjvqS9",
  "key26": "2Tebg5G1R19G9yjq8UcGPRMMpZCyLZbAYd2NwHKSVrs7Ar49sMZgpjp8x3BLnYChCf2yZfLbCmZPLDVH2ZH9H2Lc",
  "key27": "3FPSG8pmQvC1nodhxKRXENjKT1PQygq7HSdPd3TihS3tybciifhh2LUtCDWzy4HJBqhMiqfhq45zcN9AVqwJWB5S",
  "key28": "5pnkP3bAyeqYhLQB4H9KQxADVhuofiFj5Ekw2REmZRCnZqivKwMX1fUMagj4RzS4fnPpQEWZzQUfNsB91NJhFWC5",
  "key29": "3V2g49EqCQvsi4PbfMg8n51d92EPBAEADooJe6cJxcnF7zK8odwLUi55J6LnobM42CfkHHsdEQBSXtwrwWV1zDVe",
  "key30": "65dZFHNony9VY7cZsb9FgUnmydiawGUyRkWFW4xbLqZqPXTFvkj2CKDKebT2fnorivDPQjYY2tseH2mQqAFaZKqi",
  "key31": "4oMzQqdnM9G5haeKmAtmFf3Qnz8iYRDppvmUP9KT1i71TdAmYkDKsShE8DL4cQHsezGFDfg6Mjje6KPL1ynvWHJk",
  "key32": "4qsBVRFNHuHZTySDUsY89LBWr6YAZaxnJMidg8JqF5mjwhCnmxeWFJzJLwsXBHSRNqXdcGvYffKxKwJCffAakJj5",
  "key33": "2FxPaVhRkMhanirLaQW1yx5fYeibjj9xwhKapGiyzZhwxLKjGdBf3GEXojwsiwTAKpaz4UHDMQkCY2PbuCsPZ9pt",
  "key34": "4EBmDoGXiu4RmDVpRMzRno9ihvg8skhb5y5RqhrZMSHKRinkTzUQ5RN7Y15H1aKKRky6bjnWsFaEoNMQnzQVc4Z1",
  "key35": "3omy4dBAfJkYs8twmbT7pCaUKUgze5TmNnraKZSd1AooxkoK8TGDfd2B5ar6ubVggoshr5SSPMHvDxmkeGXgetT1",
  "key36": "fS12gjWNtTJQJGMYptBxh13kjZctJehNHyXFU5pyAFAJRqgVpb8qX3dHfssGyhrW8twH3S6vWghQv9ro6GSvyey",
  "key37": "4eqjr37PTttjyzbU7PH1U5nYvvWchr9juHHjJUFeBYdZMLU3jV9USarFY96JCHwBzuQ2PoHUs3S1WSecoXJYYSw2",
  "key38": "2S5d4SARdLWQFBgQbcNH7PjmdSXXByw9Zqq6GzBwGLwMprfEyDAHKk63ec2uePeqWGDesVXZWBakeGGKUh1mHdFT",
  "key39": "DtwD6jN5nHtrxbDx2G2o9bf1Lo1J85PDhMTFwajmwGzTsn69udNh33aHaahbZAqQAwQ9gDZe46urD8miSW3PWwT",
  "key40": "5ntEwSsEVHS2kvD8T5TWBZrH6iYZwkZ1heU8F6XjbgJasv4aUFqsNRd1bsTRgp4sttrddDfHFWiohmhWgWVPwNL3",
  "key41": "2uenFwbzeG1d8qxJm5o2BQuQBHANr59w6umFRenVKBwiadbxCtHm1qYXhRePG54nk9oKRnft8QVbSdwqatzdwNSV",
  "key42": "5mY9cpjbKJ8Lu9EBmVLAaHhSYCGwYF3uVise4MsQknDZxjeo4djgQUYX47JqfWCWFMH42yHaTQF752imCPNvTtjv",
  "key43": "5J6Nb8dornENbdb5Z8oA6KoSFNjQkrBHKVJpQ2fhBKvbAWk7Si17rnDphr7MpMVn2UqaZhGDK1EUY86ZpKtDocGS",
  "key44": "4bMjvqTKVpppSbvBPBxM9Yh3vFTBNpMD1JxEA2FTXUSN4VgEoCqrjzkAjj5eNzw8VzhHHX467RLwJvRvGJ1TCTak",
  "key45": "5QuQ4RYqp3RvyASeAjN3ocCkPaknuN1Ybx5vMrD4J4pvgDdZJA2wNdAhmQARRAQGDRqfPVZM1RwsnB74kWPbMMWi",
  "key46": "2YrwqASXdPFMJwwR9HYGu6jsrzY6L3nbLPF7xBWAmHR8o38ypH53xLHULM63iqddAzXeiC6JzJM4tXz17mvS2P1E",
  "key47": "3tKEgJchnLyzZaUUUZNTmF2254gTjrXomqEPX6nbK2PuwtzA1Xcr6t87cx9oVTwZrJSGT6sRB2SFkdrqEmaSesD7"
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
