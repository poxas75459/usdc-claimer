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
    "46vWbSV98pnAfuq8JCN2HMXJMSwjVySBvmHgBDaAbhBGiWxnhLffj3paG5bon6JPr2nin7QW5gDav6AdJVc8ZtXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHWPmh2zWHjLfxqBn7LjeTpq3pa1dXfJFea33S3R75Nwwfc3LpsgVTHhvYJm1jwxDnPs5swAX3BF9iha933kAC7",
  "key1": "44FmsHU6CwWaKUycV6gbNddszh9yU9Ukj5qjqm6DH9HpiLtPDHBdsWkcj19RzFYo91HUzZiU7XASPcUxRHZYW4nh",
  "key2": "48GgwcwvuKtGgr1emJrL8meFMAjvp5ykvYHCE1DZTji7VW436TXSi3ix4LjQDnNrMS5PXdNcZ7Y5N39fusEDNiwW",
  "key3": "2WqmUtHZ9G9HcoDCtmm5qRsLL5p56NYX7uPb2VDSCqXEeKZzVQM59Lt7FyohV3oUCqJGN1Rdn8dYVQb5Exg2ceKa",
  "key4": "4HHCc4UpErPvwGHKA9D2S2vn38zSiHYuxiu6t8h1NV95f7sbx4NgPxswELhLNzvcHpRKgHbgAy6tN2LKiDnyxY75",
  "key5": "2Qxb75HYZ3JjfnYsPAvixKs1jbg9NhroKtw9LcSG78Qg5JtaxwgCeF81uYU1fmcPwC4vpD44DpcXRG7bqCsXBFnD",
  "key6": "hctNaNHkDV2GcbvxqUBccZDEf8L5LkkqpibmGLC3hjT3RgsY7m1hctKC4ZRo13JvZ3NWSyEfYKuyCEouwbBMXSY",
  "key7": "3c6knXBy8g5Nh6X9Wo7cbogNrfQRun1ZSfJ8aVQr3n4EgbRy1NXcB7ufqWLxQZCXAKAeK3JzRxhXCo1eeSa3qwm",
  "key8": "2je15fLtGs8jcTY9RtF2qMYc6KSy9tVmBDUM2ZMfF1TagRkre4nmZsEftgByEnAKtcSM3jqjwZUMNHA9zvv7PEQV",
  "key9": "2byUXaTe5ff4teZnsrkgRhLo1cPFt4YLhDUoJQ1goxVenmyQznmcR4vDBAMiMf3NHgyskJUPErcfpBh7GAdtxHCr",
  "key10": "5yaRCRxkcNYRAc1ppGPcixdUWmosFk7aepFuCa9JYEyXUran1WwAxATRKApp8EWyCjP96u7iNGgcUH6ZXApFAtEu",
  "key11": "4RXBzkLgBszx93PPx8AygEDcdPzrik8y9oZrv1oYFwbGL62i7v8SowVdXAmbcnteveUtVGFG5nAeUMHoo3TqBZqu",
  "key12": "5gK9ACRWn7iYdiDB7dxtnJVrWwHjbVZ8fk9Wwr8rSVdZpKCdCm4mfJjmt4cL7LJSWWKNYjQL8pLZy9sVaM1mxApS",
  "key13": "2t1DNto3eKUiH66F815uS1b5mL6EDmzKzDrsLWJPag65ioKXwBPP2FfERZ4jz6S35RfShznEt13PvGNWL1CU4zfn",
  "key14": "26xx5KMBpLNhYEQFiRLsmvqVFAt3JZfYcqs4qB1mKKTYNc2uuzcGZQpDogg6EDFn5yapx5vCDvzwCA7tT13VEd64",
  "key15": "5aMfLECAdN7h26dSj8THw1yFea16qtjSfSpTHEYtq8YhS1q5JD94iYnLuNBtLid98LbCh4QYufyHcwG5b219Aidc",
  "key16": "5wXrzoxaZWiJsoutjEBzCVSbXZ3TdH7Xt5yWUgKxfMFNZJj1HgbpLHhcT86zUhvrH5EgYbYMV3nj27aTg7G6ngae",
  "key17": "2DRRNQsLqS7ewTVY7m5a1ZiRx8LBPk9RmxMQ3NmQnYLs5rrE1UcD3Sb32nPbtsRbi9k4G18vyEpErM1AWZt87ZBv",
  "key18": "319DG8KaHdMTXrS7Jz5cGSMfpNgz9sK6AUiZNYDjoCRKAjD9eTxEv4e7VuWKuhzx4tAGapuzEMr8te2bpGpU5wD9",
  "key19": "2rrdXjZ4o3ngmTqM93TJEoU6fosUL5asvfWWnHJ2KRerbTtmwcxjEBHaZK5yrn4eJukbPVQQYFRRaQsqjXc1yTJo",
  "key20": "34e34diTGwLCRmTQ67No7UdkJS5ak7nuqoyGhEJRwdCSeGH8K6kfuG73rde6KwVFfV5Dgjv46ceBAhKW4myc1HLm",
  "key21": "4W5iatVS3h3EWg9PFh9yB4o2PccxBAb72oroBYzKoEnCp6HdwUnBieSNCMQ2aUoWsmAszFJuLmiHhMTxJZwkvAgV",
  "key22": "2NQXSNEVKEFGgtMp7qvRrefVdKaKGPhZyjJcj8D8eLZjdXGQFqWMLqwuVWdLVhg3mAbFSFrSTxPqEUSjisAV2r9t",
  "key23": "5TCffZCJvz9ykpnRod7hfzPbJdTeuZwi7m6pubhRWufKe3uEz5VxCqDWJRdyQjcKsFHAGcDAkC3TeXi9v4KzzYVx",
  "key24": "67NY3FGoKQQ4dhgndT5wAtpSWaM1vjeGZXTQkhbG1Uk5nvYqXGxowyspNWkgaETk5w7CLvivLMDuoR8ZeYEiA5cV",
  "key25": "2GYECyvdLZj894iGKgemhaWABwzCtavxRCseN8Np1JQTtt6LDcdChKHH8z8V9qsEoTdRBYCs7ApvffiWsDxRKCdB",
  "key26": "3hjhmAEvATHEnbBtPTt5ZbSg4e3JEvCrcXv53iqxdYuPHCUffzm8UD1bTmLJQ6eXEWDCTznJEcScs4Zm71iggtiP",
  "key27": "4vgse3u8U7em1kBYw3agFuzxQSreNC5HexyD39d4m11N36eyok5vG98qHLoJ6G1CdsJnjBVy3dTHfLjvsuSUZWt2",
  "key28": "h8e8RQW3whYjGjKbCFfdaVKHMQokBvQgeHx4L516MofCQgmhwJs2wyMLqKfVsun5cn8KTRyWrTP6a9Up1ehiQfL",
  "key29": "3WkGGU5phy6RZxQFJFhcocBV9sb4EMxAa9erLnqrnKsHgtQj8odAvL1pMK7cnCfbDDUknM6hunSiJD8eJHfL8Zmm",
  "key30": "27JrVwMtoBo8W3PsjZAn64Ux6b6u9NYvcWfbs5JQDzo22Qh55nRoiTtiKpxZ7HNpppb8j6s3GHnDV34ux1pDQT7e",
  "key31": "5CX1mSJwvHCs6SZcMFMmUkTMWXMLkzNgSfuqja9Y33k9euJxcJeGGPaYFCE3w6xP2YrFi4yzCHhod4ubE5PTQz3c",
  "key32": "5AiDBduQtRGyZqxE6AmKioiExhthAJXbuV7HHgepNAHcA8rbS74rZDKxrWNzCH3utR4WVRAr2jQ2dAnWXsxf1Bkw",
  "key33": "3W1z2sYPzk2eXjSAHSozccStasjojL9VM7oTtYeU454yLVATJWNg6F1eMmii9ALD9EKAXz3vygC8pQc32GNrj52D",
  "key34": "2XrJeaELyEGdiUMyB6TuofKjVc4MWg8xq5G8Dgja22Vs1dNYrSbzNuHhrqWhxi7F2AwsKQZC8ELMf9psysdmrpjX",
  "key35": "486zSuywibq9F6zYpuEDb6wikSDgWtkAArrxv9bg8K22eZeQW3yFv772qYxXJQauhRGzw87AGCBo2QfXLouv3CV7",
  "key36": "r6avdVjaQUJMswnagv1S5Tm23cPpj2Nzf294aNVRRCzoUUaz6YFEKL8LhwbQ1ijK7QH969mDoMFo3P1PT87H3Ji",
  "key37": "2WfCdTTmdAbuERZfd5fQ2BwycVt4egpo1qMTX5Shjme9LxBGrM89WJuCKQzy2EfKgFJwz5F7onsDeqH2vZrthtjV",
  "key38": "3bqtC8i6PQqU7hVvut6SxRkMgKWQH6v6agfLxFpZvEW77t2qhi59anSiprrVB2sEQdEEuqNXrxPKqLEqg1EKd6Jz",
  "key39": "4PP31JDS42pH1hn2w9qoBvTrWuwpE6eK81qp29qm64XswTLWbwgWLGC4A92EVLECN4FEd5GzLyYJenZq4b83bXuF",
  "key40": "Nn5cPavq1tV3Uvg5hGiL3rDeh9Ru31Ga7g8JaL9dGFNF7S3RvsA8XbtpM86bdEKL7mkHVbwkxRSghJFhKTJ9zE4",
  "key41": "5aNV81AWNBLzEc5cQBrEyVRbDocLFBXKZzhdhyoKZ2uj5AV5DEKxxhLvdDVYRyYFvWYqC4SutCGBtztmvuKWxhyQ"
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
