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
    "4QGmGDspoV3uai42iwQ3ycoLe5wiXYsccDQ62E5pWkTCsiNJAuhrqKZka1gY8BazNZfL15bfgAZwEuokAA9mMwHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSG213af5tLakny8R7ndRzQewG688zwJ2iL6aBHBUn4X53k6KYe3ViBrihmXyVkBxaMH4x8PByPUH8n1Thk9cuA",
  "key1": "4uxLVBPNPxypZHvNYFgfu7ajhvfuy1YXCFCixFL9VjUf6hoVCDaQRPxgWmjqgcntdQuitQWtD9X7qZRuZmkDTsZV",
  "key2": "5Ld1Tof4xYSNct9oMyePsXhUknz4fm9DFHN4r3gpkkDFgdoTt88LWC3LLFPg1Ffc3BJxyJfedTCj5RaDXU3BZpnF",
  "key3": "i5CpnVYfwpwc4TmMohV9921easgKXEiUNjpsxWbVW1EbN6x4jiFVWyB3tupPviCfMjZtLVTKC6mMReWpapcdmMq",
  "key4": "3N3beohvicyxMDs44k5eWBa7tV3zVagdHKnS4QaZ2gqydGGEcmDwHaFrgK4SpznSANZ1vx6f42gGGWooYWYkddBM",
  "key5": "2GYrJdwoiivRD8iWiVCUNvzzc1eieiiNpcUKgvzcsBc5FKGJNxvwcGc2TwtxqQeKhQeaxWEkhcJDpDQELwmnkZmu",
  "key6": "5BnmvxnJxqDkM2vavGuEHGjmGuw59qMxRXdM9sJkGvYF5By3wFZu95wBLVwTM583pDo1Qe3rAgeouzSh39CgxxuB",
  "key7": "gJJYZHUAqfq3uPJcfACCMsGzFuGztoibwRYEthBpoyqL4VEQWnZ5L9T43424E1Acy4EmJkLt5wonJroZW6wTtvB",
  "key8": "4TBKpLSHeLXCNxvdgRaRwSxinBMn55xCK98jNfWKYe4yAbKzSjDa3kvcLJHAFwovQYW7NnbB4aURXGWLMtB3BC2N",
  "key9": "2juL3dNEu39WCt9WHrwGf5YZXtwzusUeFnfabCVCYr1RutMacqqTjGrQaAG9zdcsTUF4xDnc4X2Tsv8mXkh5m4Kf",
  "key10": "2uenrPfw4T54L3V9FuL3iWSSBbeo77DJNqSiaBbmjr2jZNwHNnFyDby4FBWhyUQTpSBfySVkrJopNJ6J4HspDvyh",
  "key11": "3rZDTjRNVz4YPRnwj6b63ogoF7a1HC3CbQ5765VdxCvwxTnQsY7PjYksCZHSwEySJennzT9P96e8wiybu5PBEoWL",
  "key12": "MJmDbugug5FWRYQir3StG8uY8KhpmRcxssSKj2Nh9UP2b1y9v3r5rcuBPMSR3XB1jhn4WiMLxDvR8mL6EEGZJHF",
  "key13": "CxsBars68t4fpc5CZSoXEr1AR56YMQUzeWEy3FMz3nDNAXaxnF58MTLqQEfaQ3DJB5RC4fybiYV5fBk7EZ9TkVN",
  "key14": "2ukr9WAmotjHeDS9FK7Xv33j8BcCoKdZmMD2DJiCxdwPiwpdygdJJ1qgXRXfSY4oAYJSwAypRiszMU5xnrzF8qRA",
  "key15": "2bShGNZKU2rkw7XBr28fDQ1yJ5Ru4ohLMnBJM9ttsAy8f6jKCxQU8vBxdzwmoqt8Z1RYeeLpiRToDJ6F97TskxTY",
  "key16": "3BriY1bm79JqRpFSqxmCnVoPHvgah5vsCRxaoy5QUqtpi296A8t8ejyZ1oXbqy9Y5qo6zV3TEiJNifAgMZqvE5Fi",
  "key17": "qHMQe27yxvLTr8U9yWxSvkhxvtZAAxJgWo9q9PvXS7aB2xvJt47sg3vPQ5MWdMtz37nUsxm9eHUhthzMZ4eXKWJ",
  "key18": "59Ch2eEz81maQW7st9aMa9Nu1eH9BGRmSxpsPWCq9PYinTzM49i1573AgJcUW2dZHQWLJdJWsUa8zZKsVA44aB5s",
  "key19": "5DpjNH9CcFGg1VS8T5p7uWHDmAKLtsEizyLEv3LuX17SLjAaqtfokjbGhnpsV7QHmwBvGXFsL1AbWo5rwxpfWb8R",
  "key20": "vQBP3wZbPkaDAMdvnYo8ztAsBKsLNWdNVEd5U4xsNEJhPDGLEaASQL1Yb6oXXZRp3KrtKUv6aUKS5wQvrSzhNDr",
  "key21": "5STKa65AcUU4oTcRJUCvsjcMTc4HThj6T7Fd29UTJci28ivk9i2PKmWYmLWJmVHZCZHy5Rsgqjg9cbkTVXdrRgkk",
  "key22": "7iBc4LCEbnFQ3JQ18DGRuvp9WCX6Lihd7eBbrPADdi6jii1NyHB6eoaFC7JY4hBuNNfJazkcTkc7NmTWXWUe379",
  "key23": "514ZStjm6yrhvmguahsuiE6AF1ogyh2ciFKVQxXTxftq85D6DaKQv4GeUyepzUFG1Ba3dpRdX4pLtpVc17niwMn1",
  "key24": "5fefwhC9ArLVKhHiEqubUwQrn1eKS2jzu9SUuPLfe49qx9qgZbA1s8Nnysy6t1y2zVriM2CVGvgtmveUnsCkoyBL",
  "key25": "4eP5CXqTazRbUE4A8iXA9ZCCPF3ndzmAVCr86NNGyq4wfYRyaiXKZuPDSwgS565KZADpinKNfwEbDndToYME5jpB",
  "key26": "5GXKZePq9DLWu3piZNWyyjDutNBGdj49wCeu8xScaA3ZgCXrZhdAGoTxV8hRgfCr2P8DztZv85bppXYSzWYwGHk",
  "key27": "5h83VAR9jZxAzcWo4qHf8BZgTc5A3fHADT4UjaSJuBwmzdPAZmrJXkNrgek9HCE1xFV9A4HMLSTnsJmHub89yb9d",
  "key28": "2vkisRNj1QZdXq1XqwWHA7wpCfZqm7Vpg2wcBpU69BXsR5G6eDo6XGRFadHSPG7Ch4hkpRBYn38YfUZwrTyJpCdi",
  "key29": "3NTH7EtsN6yA7ukfa78Q7R8SeriMDWGJKeqVHs8wyLaivK79SguTSDpaSWJ38vTN7mafSf1HFPRW5C2D6szHSiSr",
  "key30": "2EdzLrSZeZeEuYfcBCaTxmL2ohKpEewDr5kXoqFvtFJGCzgLcqV2oVoxt3X9vDPBdZvoKdnc6kqm9mxq6CD2QPoj",
  "key31": "5akPHSA1n6KD48a52tzsswYmHFWi4z1k4DH3baqNC2EyhC4K12L7dezFakdyLZhxXkZru3mux9KZAi18gAeMACpy",
  "key32": "zroUayjTCREUxvq1XNVD5EsTSMGoMLCjewr9pHn1TRabmgBKx8XTbRd3vJjM7xEXkmL18LW67kLhGA1NpFKLtD5",
  "key33": "4ZHC3NK69UaLYscY8Np25CGKr82KnZEe7RJBFT3CkqxWeNSxXJmsuyYHU7oPTBkKn99g3hSiJRUzVLTa3Y2vjW3y",
  "key34": "oNN1YNihmVx1ZhGHHesp8htf2DPepiUcA5AAfHeZtq2psCiipxNRVxyxrkJVjFNb2UseZpJNfDraM5CmfVXbwhQ",
  "key35": "2FYbUDU7JcCnUPMA34kyTRaDQp7D79YXfVb6s9dqRGKtmEk7Q5NrmB2HvZy6f3kxB4U3nMA9GZKNij54YRvbsiWq",
  "key36": "guTTzgfrAPvF9e4hXo82yCmyuR87WXWSPkZtqKUqFuoGWA4bZkk7fuH9ooksfMGphZdrnq9vPpohcEWrB7RmwZ3",
  "key37": "5qArrS5oS9VP7ihy7r2hcsjH3MyAWmGaG18mujUYc9LGjP8yG2A5sVmm346BWuBjepHHM4GeFpUjBCaTwFJhDneM",
  "key38": "aeq5BLmqiZme2LpqkBBCdr7troqKszw38EAdSwsTTxrEKWXkTtXsLfFFFLbqHdg5xfvmUGxR2zsj45R3rNLobK2",
  "key39": "5rp1ASLw9DQBeZVEaDfPoWMFkuRPo21YKBu1ZfqixTMyVxCBTFTkxx8xKj3iv9QUNuoXt1fTN8rRP6w8owojjcE",
  "key40": "4zigL8cmPhVBYuaeBCDCF732zwGs3eeZ6vqiNpQxwB4638QZLTRbTgVDdvfL6L4zfPbTH8sUe5HscHJaLJtb4MUS",
  "key41": "57Sh6jnjzjHb2dCMuKiUeGsmVhAm3RQnxSU4u8wkTQAojDex3Rh6gN16Jt1o9e9HeUGBVHnxRJYYb1LX47npg46Y",
  "key42": "2aE9NR1Y5j7bDTjZn919eoNLF2EjWYZoAuh2kd8mpVYit5DHQWic7F8e2nBQKMLVUxK66PW7AdTiay5Cq2dd3dDG",
  "key43": "46AEsJPjK8iF2ftfVQ2CdLeiodr1SaZDcaDcSudFZFojFs25rcEbZhRgj9nDKh8UF3YgHERpBxQWrzeHfabASMpB"
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
