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
    "2Gay5KWKZCeAKqHr6Uvgr9emKUVRQhjfX15eejCBiEeGDMs5Np5JJHY2oy55qj4ZpnGhRWc7tZvfJWjHc9hmrz3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfU48MnXqjtS39z8fZ8SE2rijj6HuSk1NqA7YM6PSyoVkKaNY8a9w6gS3uw27qTb9FZzP6A4Pptg1RSpAzw425n",
  "key1": "59ijH5g3o2Ufmccx16Zz6wk6Qh8A8MNjc9VLSxVLcH9CcniDeRzJCaxnqxCbgcfMG4LZKgpq5oMJoZXpBos2uUnR",
  "key2": "652ibnSWFxXVTcT7UetzctFBMLz1ArpiBLpzZffHP1auLFVFgEExnMxn4yaWUnLCb7ptmdCJaEaSQFQsosZHrGzy",
  "key3": "3dwxxNpiykweBFyAGqiVWCkYSXx4bDSmV5SBdZN7qDWoX3LA8nj6QwXxHpZgfqfFRUPj17ygeVTZBbLvfikbTJcZ",
  "key4": "4gjgiM7RqVEn6CecdawEaf18UfftWgjiud7k3DE3mv2NihSbhPEg7Lbkvpz4XaQznMoUiJ2ksejXVVNamQHUpYEJ",
  "key5": "SMhq5cn9eU3E7tvwiv4DirAnTV7SnHhgBEVHv5yydAzamAfFvvKUw3LurfYjfcEaQGceErZN3z399jVAoE3HHK7",
  "key6": "3PM3qwqdta34nxNsvH3u4L1PU2hcShBEVksqCUGZJiEJFmsaUBpWi4NYKtsA3QeSpX2VhY8S4NvMKw8ZAx3FKJPa",
  "key7": "uU9vvnetH6wNFTQLf5ySUNvckDfiXt6sx5PBuHYjofqG3qz36UwFNfw9Std28QjRXtXMUYTTzafqv372gtRSHBN",
  "key8": "5b87RFPnvoMetF9awioSaoaxL7YM5jKM91oEDaQGtyPDomZLftK61a7Nvoyg8ob1NZ2KFcRHWQZRbvNnTNPsT3xT",
  "key9": "2K1oNPsKU6UJxV8QANXZh3MpWK3gZRx6TNPMdcn988Qbgop1jfu1KWV76cqHie1c3AwLgNXSuqz7UfnXaJ8xPK8p",
  "key10": "UadswVEJCsbNecAZYpxEC7TCmBSerEyfqiniKP6QzwJzudpRK2mFv3a9a47pvqTyjQwskYPoe1Cdr9t7ZZs9cLe",
  "key11": "4w8gVDER8LdkrY9dYzK92pK1xgqK8tzgYEQoLmw8aLuCfwF5i61QqLcaRDariQXM2XbmnU5qwWeEEHzBDKcmdR5c",
  "key12": "2ZNCHYh5xVeXcWPrpHHsHDvndUggjAUg8sQveF3ipcyoPNNRrAQGUwKJKEqtEyPRS4e621fiSxEvQc1zNdYbwG8F",
  "key13": "4TBtZrumPYdke7fo9Unxc6vBGMwegg62ijkqe2aQtcbaVkBvJ4q7pdKQAj9Va1eLi6L1h5xGMWaxtT6fmE6HfXQq",
  "key14": "cwrgH6VzD9Q8r5fKKV1WoopR3Y9Y3d9xyfYRNpRNrtT6yZMN7RLuSUyB7VS3chr2mDnxt8WLqXxrF8dxWbcrhzQ",
  "key15": "5GsqnoybyT4dMjmCUzDrbpPydeYQH3PCX9UbwHvtT6o7knxxrpFvwkMcK3EHxCwUWMij8C5QFKDRDKiKmpbzRost",
  "key16": "4bdQmQK1ubafZLG92HwTiTh3yzzoRwsScWwqzQERK6nCxeYNj8ETJDgur8enGBCamMW6ATnFhn8sC81PRYodcNCo",
  "key17": "4QCHASFKmP6oFrMFehEUwPgcvYXVEcMzH2E9NXQSSNVn7xxJb7dAkzqNpfU68fueVUJEeKqPeyqq64Zo91CpR3qT",
  "key18": "P2ZXtbELvZy6jhkKuvbForkG49XdcPHCjNTK7JesnZXjak39KBeTS9992hPuagibjScTfoRGFcnrPJSt3EPe77g",
  "key19": "kZH3VV7P7N7TYiKSHm6BkSuFTZLy5LU3tHQsKvEUMk3aqLuQ6HeC8WoBBU5qg863kGDo52ZykrFBH7wAgYqh2Dx",
  "key20": "T3YoDhruM3za1D4MHYreb6rphUE3TmQ2HpDbDWH7rurBTb9jKzgc3dfWzDcjs8MpDvbMBhtN74uWVxvJ7JMiP94",
  "key21": "3CdyP3eHhYMqz7naKWiZ2W2yz8arKspMnW7mbrQLEaZBCUFFzwmSiQrzd5jr2LLT5kgzmmii53SPySYT1Rhd4k8",
  "key22": "43CqkxfiCjG3MFa5Zv1fXJQniSQnaQUdRLViq8uAT5aDoRCYK6PWAfnG6WqsgRx92sHKS9kdRBun6se8x6qvriYW",
  "key23": "3hymCyRrquZJqp9phyGeNu3xZQT7yNyYUqSHfskPmEhQmKkDm88Tw5PhSBksW1sQzstwU2DwpAickkfXvwjLhiAh",
  "key24": "5ixVet6jQ3mR9TWBrj1j5DTv3F1eDyTafLP72kRD5Z9LVismeb9eUktytKeBqhZHGqzgeWjfKrGf3DvNqfLcJx39",
  "key25": "4c9fsDPcXc4Q5B8KnswTt7QyvtgvSiihaJc8VkeoEshDm83ZaVTaF7Vt5fAnf4HoJgKsrdQNVJrgiDzuuxEMPAPN",
  "key26": "4RhSfEejwpbfAKmMCZdjzrHAnzWWah5XoPc1BRBK4UFZdLwQ5RbTD5RrsBpt39vVbqFsESMMszBELRPcCyjnXHm7",
  "key27": "2Q2et233joksBBBoNw1zLJg3AdCUVZTcu2CHHiEPvCvd4yD56hUtmWBrM7WzU3pLbbjb6nRNb9V7uuVeeaQQxz1i",
  "key28": "4g19wVR1w4dXniqcCYhbsDVQKYxo1wE4cZJ3zQc1mxLioXohdPMfpEdqYxFzvZVkTLPf7vPCnryT38S6jmfcso9Q",
  "key29": "2imC2BqY6iQqrXZDAiw1dK7LTRPVeKEN9VkGUQURYUyL2JRLs47uykJaXt4135mx8ZgnXBsAvjoUYFL7upbWxmxM",
  "key30": "5wzYm1r8aRHdwCuKnE6AvwPx9RpKVUdsjNWTAYAzAYz4igoQrpH8TDuvzp7oTJd5jJUe731ayMxDPQv1mbVMJX4Y",
  "key31": "4s4F2rHMDsVEGGpm4M96DUDsdWBiK9Aww4muotpnzM9pdRyMkaXvMQS83QnGtRyTjGPjmTrCGhND1nxQ8DxqpUZy",
  "key32": "5cbudT5HSDxs6obWzbRskS1f2A9tAxBquu73VPZvRnkKXGpKWzAZPa4LjSpfa9ymJrfypSR9L4bdWHuUdaND4ksK",
  "key33": "2dVmqX2bG93GHysPSWdMcJbw5DGGMSUsQhm1BU5TfdBDM1ftix88SprTZGZKBZ6jbPS988DwZv4wXC79D6WDiGFW",
  "key34": "khFz1cx3kzxfYZhicMU969rwCpkGNToU2h4zFdcApmW1v5rFNvwbBC9w4Jbzb1S1zEEd2P5eDS2ePTgPEGUoduo",
  "key35": "3Mhz2hZGorKqZ6DfJMxxJSdKatuWhnrNgzPjwbjFLFErCRTjEuyAWnbtAuB1GfhdZidnpQdGxCbaeMnXQuYSDRxq",
  "key36": "HV3W4QL15SxcZBB8gKuvGTUw5N7mAHJJAB3AJmQBGNEyRnoEguuEw6ec9g3yrqNWDCcBGJgPyyuSgvgK8vX1PSp",
  "key37": "3D91mnjewAqA9MapgT64nyKNUjALsiSHj8rjNEYJPHedTMJZjdLgBDdj31zP7TzQE2kx4AKiNmNJ3o2XsSDuyT71",
  "key38": "53EqKxPGojXKonH16rUDTM1Z6gsK7ajiw17pJ225FnPvL3Uu6P7dFYC2iTavpzJ7PYcACRxEMxLM4XojiNEy3DCx",
  "key39": "5WHRRFLTGaNJYvYFzaGPNoTim5f97xUTMDvVqeiK8umax4AKqKQg6Wy5o4bTmWTCwjHthMzgCBCcvxmvX7PPqQWs",
  "key40": "3PJ9xLU8kJxfCvJjzjLjdHGZFzqPfr8NMFYYue43q9ghZ7uRP7RdWfqU1UPZTmVvuZvEq6fnJCKpyLdC16r79QZZ"
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
