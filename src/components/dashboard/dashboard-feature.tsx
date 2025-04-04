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
    "4NXExi7FQT19jitJMttycmfSCs5YJL6yjoYtb3QEZKhwNSi2sLpfBYkcQPv6KKRD7Jkm2Qx8Vngo83HLhQQaAjix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9euuo8cUGjHKdCFkQtLBTUZvRBHkhs4qqZTKyX5CebVVS9i9FiMGpCrYLJVCkcytbjvk4mjxC84BqLCd8xrRMb",
  "key1": "3J1DdvqJ1Z1iUrF5LkzsQWjfCsj9aYVQH7MEAzyNrt61vjWkYg2E2CcKvVgBD3SbewXjgJMeVitvcuavT7Bu3J4T",
  "key2": "5zeys43zFjoF8HGc6ZLtQ3UMQGUyaV9AZM7oPNMH52Ad3DojGhAY2BSDbhe7K28GsdMMwBqvuSMNcDDFpkc7pxsb",
  "key3": "5keu5W5AdBoPCXXruyDKUkAWQLcPqjU8PBDDa9cmX8fc9RXprG7VZdsRn5nxVH5XjrZAc4Hb7zM8uyAwF9nfNomt",
  "key4": "3UxwQvLH4v8ABxNnFAPuNSq9iXh8nZRakXjmt6Ttq7WwCqpLrtKsjAcZFugPs858QV72bX5R8wqfuQtU8kaLgUvC",
  "key5": "4cQcwKA5R3gYxC6SYT8wYKP5wri5vCStwctj5C2K7VWuz9gk8K8JSHoGxSP6bgq2otsFkbNyVWsvT7KNLeKKtCok",
  "key6": "3PdvhWYdVbkCPf5KkpuJ5u51GTxETFea199VGekrbwKLQRmDCKqWX6wsnsyo1f8dzp9XvQ1yeSEGSjgryDrasBGy",
  "key7": "Kq1Bg6q1SreuSUEuidG7cvpBisVsUR8AZnrLfg5TDDu9RSV2Mgkae78mipbQsW5qkEcszhuBU2B4jT6Qfe9JrXj",
  "key8": "34n9XmoGEGQhx4qpnAtMtdRDEsH23sMFgUPtSqi7PFa6RKug6iTeEZHaEWSgcTCrTp9TaUf7tb5k91zFeCrENh5c",
  "key9": "4NkH3JUYcCevQpvHBXRL76LYazJ3E4V1z4ZtEm4NbnMMMgod3xZys2TQSbpmymjiJaM7pFyzJWLgFrJojvRFpe8J",
  "key10": "4d2B4QW51hZD6fPeWkbdLUPRGkh8b8gSBANbMcaBbu97L3Q1GD5L98ffzc3nStKwfTq5U4fYxCkREzVqNH9kCAZ1",
  "key11": "GjNyi6MRJyP9DPgxvC33KW9y1Jg8AcgGvFyTtPqTYDeTBVveC49UFHGxq4wCAtSLguCaGh4d7Qy6qyxraMr1TFJ",
  "key12": "3APSaUr3Y35gd24YSuHB1VVMzFQXEARr7qqwqZwEjsaMJdXmMYNhfrgr9E4rvGprBf1WGd9CcdW6jKwXAxVpimjo",
  "key13": "2bdpHt9ZeScpQvXJwaVi7SMsVcBRfZXzgpsBdqh8KMNF5Ff553QsNd3vixipvEgVLXCfiPgVrzrnQ4XjRh7ukc2Z",
  "key14": "3LWcqmPEDUUHLSAiq2vWysTuA9Fatrzo5aUTGZZZ7rFwknFd2GBifxN9CgmkBF5VxD4CW1YrNZvyby35XNNA4psj",
  "key15": "2Z5acguycE2qDoShtjVRwdPBrfUXGNEYa7YkP9V1Db76KFusRB4JxaGmtY2RVGTaweKWtKzTQSWWFZJbF4Q6kn9Z",
  "key16": "2yWrxP3qiG2XhCXewakYNCMM3RfoDmjY1MyBxFZ5DyPeAbnwxnHnbAhQNRSWdEkjogeB9PH1ELNu5X2rF1rcYLCG",
  "key17": "34ERtyBqJMHtyj3hkFCNzNR2Y919cTYMzG1N1j6viRcBiw2cPUUgdoFkcnqAzW4Y17eJX1vvLQQ2c32joCivuFdZ",
  "key18": "55B97VxBBJdoQYnJpSX4y5P319zWJ41jFQt2ERJXcPFdEFBczYXbHGmhGivGz4s2pWJqcWajtpnzbHATgvU7pjaD",
  "key19": "44o4CiH4tSRf4KbjhbVLCFAZumiLvAUhAzcb83BaMvXPhFEjii7M53bXWhLJ3fhKRFstKPbEBuVHMBiHMhAz82Z4",
  "key20": "4XrdkH3KMazLao3sCQzvo4nTdcZ3DjP7HqwJJcupTAxW4dDmcomftyusKckueQUQ2ZtCFVSkYSM8EWdMjk2ocRCK",
  "key21": "3zWHxdoNkW2QzTqa3CFAXqQt6GTbX3J93qE6v4MFsbjVL18P6xMweTD2P61WPE4dtcRjnUqkH953fuHtwxuXgvq3",
  "key22": "6TfRX241rra5cXyLwr3LJKSTMapSrK74uHKpU5hrFxFZV5BkB9w4vQ5XeQ8YeibZ9g9bfH8aN9ufd9TsmCjgpKc",
  "key23": "2JzpKhJjarmG6HxJt8sjiNUaA6CcvNPTRh3oB65a4XwCEBe8pgc7W2GSFnLZ6mKFby2jqbiSGoEk5CG7PwwJEgXr",
  "key24": "4MeUCNCDqsfaCAJQtEHAbuxbvzXkyZDk2DdMadpM63CgTDH1Bz2CdwadYwwp5ufHnLWLWobdkmsT2kaBZmagNGA9",
  "key25": "44Pa8n184SDRNzZv72jnZC7u9XCLz5u3NvqR85CW5mybpBbifZUgJfouiU4ski9CeUYeSuSTRPTy2d7ufhzXUYuU",
  "key26": "4N2VtJLC3PJ6B2QGVSLa1PWsy9Ckfp1pd4iwubPFmECH9TN2FD7ykW2JyqY1YZCpANef2m7PBF1miM7zvzowmjfm",
  "key27": "2ZuTjbkim3fBvD1xfD2kdFYtkPChbX78taEhHbS3gSk8BKKNeza6XAeH2aUrR4BMwGpuPinXXB4ENxYSrqb9jTEi",
  "key28": "43SCSfdveoNvjqSDNoneBQK6gFNZqs8JhKat4QLv9sqH67vYrKtGLyeQLUWscjNmZE4vR1w4j67XbSqbC61j3Xu2",
  "key29": "4v91gdRwk1JjJBpx9gWU3cRSKdghbVmqWUEMZyYrQ52TtKngAdg8sj3ghTYq5TR8UyRgnry8xCndqQhpxXovx1zB"
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
