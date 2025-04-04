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
    "3uRwBX4KKZQ5nSD87Xa75SweFJMogd7dt13r6R3Mp2LHE7hDmWhErNtid5pVhEsBZsekfYX4gbDGb7XERbWjJDaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwVS3wzJhYVfxkCXc8Mx6Vhm6hp1K1TZ95PbqNwGwVWoafSGkyZK3Wp4Zqxim4z9NCmLhaSkxhZ2BkssuA8VHZu",
  "key1": "5yfCRcR8dNGWsi38mzsVr7UMPCehSfVvi2UhgjtS9MLpaNFu9J7oaRZ3XNag6DSGfXvXLBm3dFgfUerL7vmxU8P8",
  "key2": "2t4qb5Ff7D8DpoVeP9eMA9eGRVrTctLVWDgzX7xRZhVQArwfugJanbUMtmYhYhcjih8W5TWgmrYL3UZH9TtH6qtk",
  "key3": "4iaNdqEQ9SLjJSUqX4udVPWoW3URe2JmTqxWFt72q76sM5xtu8cCNXWkPjE6dH1WGdoAQrS1Vyf3FkdSkCZnaiGu",
  "key4": "sDrDBF6f8tPwD5X3v2YJ4en92BhAKzounQ8GdceDY7eYuYrRz228Aq7HnCpPPKZh35kySZQGcXcaPZJ6ZKhA546",
  "key5": "4GL3zfr9QChrq9G3Ay4LvE9GcqCnAB55XtprhPdBevfPnkEUcu8YmZZcTYJzex3RbCjABbT4uMmRPfwiYBt5KaFk",
  "key6": "tWZF9j8ipMWc1iMR1oHzeeNneTQL39dkAKp7WyESiAfqGHQNQjs9WV8KcXBcQpu4CWMH14jf7cgU2EeNn7hchBj",
  "key7": "4J4T1Cr9zjuwW7TPPnftffYb3LpSFEZmFKSJZ5Si9AZbhYyUC4A7f6vgbKpP3JcRwGe9A5z2GiACB6t5xE1JgdJP",
  "key8": "2VosppbX3SfuSBJrDpzhviBPCabMJGFyVgzekY3QJs3EWkjA4m2dQPjJbX3Apugyo4Bd59i7ehXhAZ1JBpHdve76",
  "key9": "4o9dt6C9a1x7TJQqYoCc2TT3WYh5eYP1p6Sr9c9ZCUuj87ZdAgwh9oaJSJmkWRXnNPCQ13RJuN9c5DEAfsVKwJN3",
  "key10": "5B2a7nrxciYAxNsBHnAv4xX6sLr5e9EX5DAj4DPNuLHevZx2cjzet6RCUpZQrFSLFdij7ECj65vAfCnSwRZxrT8S",
  "key11": "2Y1VrSjzQB94DQK7KwCpdqgK5JKhNtobKkW8Dqnn3ueQgNh3rnBEEYAjgeB4NPWrbGEimr15TLSR2WUKiZwvTf2U",
  "key12": "4MqogxLoMVKuv8XEfatafzAeq4GN6xzYBxsfF8THtfq5Yaquq4wZkxeB3ueYvsJs4jorbqF3GwPq18r2D2SqjeyC",
  "key13": "4Zim2T5UAgwsPyfjVz8Efo88sNZEXhN1jXqjbZ4uqGakNMUZaphZxaaSea6wQXb6D7S9P5CgnZhJGTDMXtXSZtra",
  "key14": "rmsFGoZm2Z626pCG4GCQqe6T6yCGZqjAZCJWqkP381X2opV8RGzneGkYTVNQ7wXhrmpNBfjbWfNQpGKWQu6G3ke",
  "key15": "3FWZzBVGedF1SS7Bd2c56dBYb2As3cjmiLR7wE1TijVPAhtX89zW7MYqb7yerWCp546xV24ZBs2vnq5wTaD4SAqB",
  "key16": "3AaF3oAJ9jYtDWWnMX5M2KgKFEXDY67tddFyrFr4eoe7uSUWhvktivMHxChd6rXrTazbKTrguusx8FiMMeCF6Auz",
  "key17": "7GL7T1uV3Eq652C3yTkjxFvTNVwLC2Bs3bCXbyJS5sACJHyYcFrm98VxJV9ubj46pPkUWvQ3BE1FWVkaHdB2YV5",
  "key18": "2rdFwCMxiiLqSi9jP6J8yYRd6dwsoDQ9kSGN4PwDwDr7pHrXU7kx9fbECPPD97EgJoWsZJN1kpuiJE7MM8ZzWYK9",
  "key19": "21kgp789y4DbAXSELkfdiA3U1UbsKWPxgyn1AQ8hDz12b8TuEXDLLSUkcYcwo1kBTQFwhFjsTt1MkDTXA2r1uaQX",
  "key20": "3VDAFcFLD4uRupurgSsJYG46yi7P1F8uMp3d6WEc34kR6bZCAkNtShoubPAKNvN7633fRYtoGvAUkS6Wfqy1gH1w",
  "key21": "4SXQ1dEETVNn56CgU2ki3nxSNigG8wY2Tp32T98i3tQzSViW6mnzaAHktL4wvtE4k2bu9hAHznv9ZavHhcGZsa2h",
  "key22": "4ZDR9RPVMoiWJu8xZ97MUDbucxJV13RzMowLckQxKdfYWxDzbu8ELoktVye6hG9tFs2MiBEsNFBEWrz7mTb3uEis",
  "key23": "2pKnxPbXcyeqfxbvqWKAC2rKE7j5aC96fm2rePs7iui6S5bEuqEeYgYN62dpvvCLKGxNtoZMafuDmhMoXdyJoVm3",
  "key24": "4Z88VkhJ1sCRwhoBxAMgr8FoKtaUC2TTqPhQ2pZbyZ22Zco1qcNUgCvjYfApbCqihfcyjsTMfJJ46FkKigSiQC55",
  "key25": "2WWdYWUkRqv1wavqQ3xthi2vMyJnmPy2iWXuScHMcCf1mgpYuaM53KA2GiYJFmvRTJfkCwbwzcugAo8bu81FRJ7b",
  "key26": "4CrR4PZ8MniByYXG2KFMeUBqBGZsK1BXcH8eWGSFRQuz7pDGD3gE4TgGmoZkj1A3MtGYRMFJdFs5sbytkfghMjHm",
  "key27": "3fbjyTv4X7fsHaAZ4webMh4pPLVjTeVWwwi4qhBCgCaJUJmyDfn46YUNMfFehP9FEGgRoPBwbZ2RkvWpA2oEi9m6",
  "key28": "61DMMtYPWYciTT8S1jwvQbkw1S8PTLk89W9kqcNJTKQ2rSbBvqx3WTC9aFpjAN7w6H35V2ngWKyuzc49Vdtu3cx",
  "key29": "3YMu5gS3B5sJMiDmhQdH56VYQZ6Peb493oWLASEVadbNCPdrtEmxdf9xEwy21ipV58Gzwssd1bAMzQ5XR6BN2Fd2",
  "key30": "56n5KPWxncMN3NeZQPsCSfBsRsFTWqWjmQZyE46gWeXWAZuJzzAW8WCCvGh4R8EvRMhZpG1XfFtm4DWWUBkctqp1",
  "key31": "5TD1CrrSbqTQB5XbbUqQZZ7x5x93yH4VJBXxV3Bfz8LTVLUW19bsi6hhrBhsoEKHWLno3eErZm34rzbzsS2BqwrB",
  "key32": "267vxML2phb853RyCWRrtc9xmWrxmwPtu5RtYFkkxNhwEgwAnZcoqcWGinR8L1czqC1ixxJnYnfABZGpQtG5FFT3"
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
