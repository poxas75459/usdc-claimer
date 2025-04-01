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
    "2KGa1jT6dVt2th3tUPXFVmP9VcHTKHHLgPasRJHrGhsrVRytLV2q2es1ccnCiZrnx1b8GjADNoEK6EaJaybw8Vpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKsiTVxuCdakEKLbQKoN5SNkXCbaDbFmXPk2FtATszPwo3R5CQqmsaV15oDfMs68qpWf7NaqGCBq2wvV1NxfQ79",
  "key1": "3Pr8q9nLNFDDVaUECQTf4xQMTa3njgzD1vij52ZcWQagh2p7MJ72PAhZ7iPLHUwT6Pg2vAVhrt6HfMEt5WxCLj9g",
  "key2": "3MecnZMUkbYJJEV8QiQaZZCBw4eBAjgsfeZ4PhRggA6xooAUmq7z4DXmUBZ8RUwhMt3x8yFo4jir18dEDhT9X1v5",
  "key3": "3ma32Y7ByQUom1PVvjuA8HrMr13EurpvX5nx5hBYS5JdQV29Moo9r6PUzkXwsS2iEBai8eUiyf7Z633ctvBRhpuq",
  "key4": "2RfXfW9DKghEG5e3LgQmDqMXKFuK5qaK4ecYpxbfbBBBR8HXbZvabot2y51zUTu3irFbfpLnZ8ZHyDxG9vED41F1",
  "key5": "3msUKSvPGVdQ57uWuco4Pg4Us4N7gWQKpDqpyQ1pLA3Zrt32U6pXZq9MYkW8mDJhoLjCP8m3btjiSr7b9wQwNxk8",
  "key6": "5uxCKamViCVLhZT4LZDbhJ3QZYX8QktW2suWG3GvWi5Kpau6yGpEjxKzHP2DrhnVi1xdLXnPAgs1Ne2U99AJ6b7R",
  "key7": "24oDgjohdYmVjWnrCNUiqrrfnQ3cvuJ77Xb6jopnJWQwGTBCQ4TAVwZYT2ZzPnBRVb2tzXDa3GEZuPJj6Ap7QohE",
  "key8": "a52iGvpm9EpZXmLvQb8Q6XSVh4YWAGNpsVfiCQ46atWUjqJCZDpmAxFQbsbxtVcRVsNbtdZtLstYMz6quCvAtme",
  "key9": "Ndu2iVRNLtbifSbEwiy45GGoHsFWArcyRu5ccx8hs4jdwVzT6BJ47eUnrvGitW4zDRUDmkWFBXMufqZtXLXjcAX",
  "key10": "5R4Ex43KKAGTqbJZJAPnUMksUup6v8xKLYqhe49sBhUfJdv9rDjKccUBqMRZZb4rarpDRtQSsiBhLx5sywDASotR",
  "key11": "4AwVKyM1Y27q3A7ofex88aB2wj5JaQ8j6a1bUSLMSBMuRGkNP6mVvXpnFjHpJsNrVxMURp4nWEppjb1YsvJZYkCV",
  "key12": "5boe3KxBmJMtDcJr9rydWKBdojFAbVFvCNBuNNMJg6iS3DiCP456LTZ2KJZsMKkRZ598W8P1F8v2j64N5Lytf11y",
  "key13": "2RvwthAm9YkXYf6W9xyQM7CTj8c7Jpg963E33qx9QrW4vZ7XF95RbtgoSPKsDZrEhrmekbu5BLnWF7aVPecAECDc",
  "key14": "KA7TsQfe9qhzu6PMGHsf9scFMdmNNz7GP6M1kJEk9Ru27DvTT87uvx1ofmMZKGUqdjxZpACy2y9AZVYjsbTGmj8",
  "key15": "58RGqqaj8cScbbQLPwobnv9msAzvEwGhezpxaDr2Ftn8hwjmqS7Ajg1wE919EqoGhWZ3DJPqKv613XBVJ9u4rpJG",
  "key16": "28bxPQNzK9uHQietMxwyewj2zBD7sM2cszLBJEsSPWKG4s5AStpZiJ4gdMSfq99ZdQ85oUCCfrG2vqQFw2Ajr1fS",
  "key17": "4Nm1qbEU2T8nKq5XDfCbWWM2HKtoip7NYox6HvAL1HqMMvPb16v6t447Fo4YfJ1TqEx2QuMbYT7WMBshv4VsH7fL",
  "key18": "3G8Gas6xSbj4LcKdJjKnqxsoGP3gPqwAdcymyin9YDsRybjMXuxzE53NRnKz3The385v8Sr1o9MMPppgf6mkZ8VD",
  "key19": "5xxZH3s8Vun4aUPygUAb435DujhLByMHckiwSNdck6zd5DPbSQ826QnrkSyhBDbLhnsnnWmuSpjMuY6actKPEowh",
  "key20": "4ASahrM9csbncsnf55REUgoGxuEXMHsv3pG1Wxnw4LyrCTVbj3LeSdPyXbykp98HcTsqoN5hcdLR2cwLJEjYC5dM",
  "key21": "2fcnQcaHBH6J6qQuRYWeYsQxFJK7YriZWjmcDufc4AeWFunLQhDTum8bgGFrT7SAViU9Qo8NEhq5QAT6VrkDxYVz",
  "key22": "KQGMndoccbG3KvzfZWTJJ7VZCpbnE2i8nFKf53syXwEc4n8Muzb7QApBbzP9AnfQFtQ2Kt14eUsZagsfh6nCtvk",
  "key23": "4fKU9RSY2yAe6F81jmQsiQhXTQedxZBnX33iVVw8GvaL4pMb26JFT1dw6xjKRcVX8pZsF2iwphTeXuspWmJXbpyz",
  "key24": "32xxfBKmidSJczKvTCwhJK3KCTUxXB7M8q2S8QnC4kCm3bMtYkphzCbsfTbLUiECVVeqc8Q5kwi36SYEJhdv5ELV",
  "key25": "3n7fizAqivxukziYowKCVmFBzCyE8RgaNqTF28CPrT5smnDXfdTHka6UrATYsfshYSTfrBLe6PKufaQvASqFrZaJ",
  "key26": "3UQaabxPSuqFhRgYsoJSZgWgrFzRDKgHBie9XX1P5qEJkSVuL3NveKbcWqD2JgrgnLeysjbzHXzMCwFSdpQr8bFy"
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
