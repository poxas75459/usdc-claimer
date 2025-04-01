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
    "MgErrLjPv576FKePW2iTPgRgHsYW6Jpe2to2mdqAi29xWoWPXBk6hUSc4MsBmz2pMmW1eUdZsfcAG1rm6wJKzCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUfpQT8hnmcYHY1reUXn93cDm1x96waGVarhFTxTLr1tyx1Vp2JvMKGpHg5jnkcJ7xqk9iYTwQFc2F1EYc4mvnf",
  "key1": "4SDPKHhqDP7ugQQVK1ByCSPU3vQzpJCZ9jawQm178z82HiYLgQLVcmndoyzpHzzbDbmcsuNHh27qWmcaVEa8BqYA",
  "key2": "35gemLxzo618knXx7aPweMJ3Nm4RxrntnYfzdZZN3UhsDTH2rYr8poB99eyg2XvjTMHu7QWfYcpBuESWNA1X4n5m",
  "key3": "fqh5p32Prs8LKX4K4iSK8qqWKHTQPpsfEqSmi1tRUg6VZSndQybpeuhE7oSpMpf6YV3aXmKnkdHQJEAq1Z5mMdc",
  "key4": "tcw27ikxqBiqVj4XqTygGgeqpC13WTrJzjD4YFwumemJgv56Poh5UVyVqajEcEgeFoGMgdx65vc1oSwGTaqaYRc",
  "key5": "3wCQ65yoPjv7k2n2vQAWp95GudjYopMVtuJK9oQhQwexuDRaKLEwC5BfX59Cu4edjRfCz7reH4T5jDxj6xpyyuDU",
  "key6": "5oPmpLPCriYuKQcJwGE6UNeEckdDvJ5FqbMFaR7cJQNiJxsorewFSzomZRbSqohG2HmyfK7KPHQahXTP3cFoftFb",
  "key7": "5k5BS4JckmtnmZeuR8sYzrgUet8g3PUaNb45m589oSESsUe7JeP5SjMgEYSJCG1CLdC7ruVbHgs56d4QmDdENUzU",
  "key8": "3Z2yUotzve7THa1v8kgP2vNnnRriRMy6XkQKuyWnXZyFJi8J3yRxN5NPi1bGaMNJY3qE2ufU3NnqyVUhb5ifGpB3",
  "key9": "31PW1TqR3iK5o7KYPMYMBPK9gtcWrgzXjNo3irW7xpvCk5oJPqZts36ByvWxbuK3XdtgzLmXV4BPU37eXFG3RJKA",
  "key10": "3V7YmGhtCFm6PUophWh4WU27a3Z6j2bsyTTj4KsuZgd9Pr2oCzK1nztmvEjQ8bSdt6hqJBnA83GEd5xQnRJYey3L",
  "key11": "3Y7SQAdbQg1qUYo9w34qWSaXmn2LbxwHuQmKaZfW9gtF9CYvhncRfdBQEg5rG1j3Mp7eXvkeQn1Bg9DPmenHKjPn",
  "key12": "4beA1c2SMdPAYAzusHAS4Rit29nex41bWnNcpKWmCW9f4PHUM7Cn7VY3q28WZTcSo4ydDQiAQVfbPtU71P4aj1X5",
  "key13": "2Cq7VReqBUAXsxfrKk9cGbQyf7MsMTrNaoy4xyYJQmncP6CyBqz3LaxcdtPq34438LhPMniuJpzUs6KTUsPbvepc",
  "key14": "5AEf9vfdiW14ZeuywZd9k3s8ZSRG2TmA5YQNBzbJnqp1VBz3LS8BCtiNB9vKYF1uPK6S2rxz8c3KhSuHwmCCykMq",
  "key15": "2ApgNyLL39p5fYy5ygCUHaExnjAx8mrJHqCYjjSEh14hRxi9GqipDZWevDVCv8MiY26VRafy3w4qR9Yorghidxxj",
  "key16": "5HtyQ8XzNycoRpzDj2umZ7y9LBjdfPSwiahwkon9rKU2niJ73izKZUUw2RcMQnKnqGGV31qFTe2a5H3ov1XEXHkM",
  "key17": "4suwDby5C8AtuBgtrxWdNbSSfLef1UxfMkgUd2TJnuFQ1Ff1VWZEGcCgaLDtNZdJcjVB1hvtkC77NYboC6ehGnfB",
  "key18": "3NBenRyVhzihVX2SiDHgFCWC4DaWqe1bMMyH22eDvy5JwC1cR1ydE1cAKVhGvoEcfWrGFJydp65fz1EDPkB6vbVi",
  "key19": "5GUH9kcNNWn1jZB33NjJRzpLPSXJ5f9oUcUzJuMtzdAshbgP8WznBveB8ApRdjmEYa7cwwCxF8D3YHJNhs5cs7q9",
  "key20": "iqycJiQwqokgw2JbxUTDdcdiqqUjVyT9xc9Ag5aTK3ekEQkBGnAHaBfn8k8tBcW1y6xXzTV6sDCEjU3omXJnfRT",
  "key21": "h2ASov6h933tVwJATqiMzNevhT11CffuJgirMpnsXxnyosRDybVRUCANTkPrAyz2qDLn8qViV9C8LsrtYWLoUwZ",
  "key22": "BTLwas16q7aCtRJrqbk3Erj54XmSicddnnMq5TdqFh3MfLyevaPdfX1mipsZCdEm2EKzneSoerwrJmCnogW2mP5",
  "key23": "5W5uXoCtJoy96jra3VGrt1W9DfNK3x36H9kV5b6KjJPCCZV6XWVyp5u4zqmDc1R3VbD6xbkTL3EGwTsYSs5C2QTX",
  "key24": "5aaHCq4M55aw1kcNU4gVDkpVXdooRTUs6zbsMvaTZtvJYkWmD6UEEioy178fc4WC4eK5VETPsN6NUNVpzvxRRoYy",
  "key25": "3WiCco5yLASyWGfxd7iYaGMMzjC5cZ5CHDpo35tSqXg59paGQ3SC2q9Z1pJwx68dJyfH55FH5Hj5mz1zjCL9GYvK",
  "key26": "5PCmq8zkKEPExivzNK4FjrzhatQUPdJoybDpRdmUAFsDf5r1XietE9HH3BwnRXEDZJp6UpuAB8qGtBN9QaCc57nr",
  "key27": "2joGGvzjWy2Ur7S5QiEhkfUGVXQtVMwf3cCHi1JxaVfDZ9BJAnU3tFHZwHyVuLhDSt7HpGmke7tMQR6zDtVn1kp4",
  "key28": "2MYQUhcDb8YEtb2A3sZhjmEXFTZUeaM8BXQrtxyXGKVKY9M8uVFT55DXSowQ2UUvB81wfXGBhAWd68qk6RzuDVHC"
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
