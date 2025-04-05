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
    "4S892xvERjx3EnVD6WULkM1LuF8xzWvYESnDG6YZmGCzWGcQSMhBBwvAT2W8x391bVYCVZAiSY1JATg962iPeHFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22i5P5opScKrcjAf8DbxxHRSkWocNpcDBammfnpeFZEDSQ1p1bCCjMzYxvCzTGCntdtqg24k3BZ9TxdF4U39f7xb",
  "key1": "5WsP9kVAQycMrj627tdRkmsBnFP9VZxe98njAQFSq8htMS7JQDx85gxY3teoReYk4m8DRxgSFDMeCnUGw7q3rWxn",
  "key2": "3XfbCjbxdtCq7CdcwyFFUctiuBFHQky222eD5mNZCweMJFbJLJbmwhAs8oAWWz2rihQDmmMDtPgW4T6yjR4bg8FN",
  "key3": "kPsPZgTy29AKx2dgCybyjjdsjSVUNw5RRPRWDKvz4pSa4fd2VE5pKHWo5UaHHChXxyzWi9ApmuyiaPMHRfFrKaQ",
  "key4": "Hb8ALhAkCwgB3aPfvNRakLka799JZy9AuDXY62nqxkU2aeAAYh3o3QzrZQ6JJmESJj1zgNfRMMYkWUC9HoCVSBG",
  "key5": "21RC8mgAPNrvtFdJ153hsjRdsUoSWpDoWW6T1oiSxyTnHYg2KGtNS4wgTgrwJjx4mNXFiRTxjXp3KTJV8Mxum3Bw",
  "key6": "i32iWvuDndPd1M5Ww9FYRTafnn5cBQfLAUdKs8vsDfGPDVp6NtZYPTYj8GTSQi99dtA68GonWpsbkU99r5TV85n",
  "key7": "2BvQrtkE63cXNe49V3jFyNKfCSUV2xz3rPNgJFNd6QdYtNL2VpJER31SQNo68dcMmTYnzyUsov8knHv7jHGWQR22",
  "key8": "2XFMtaNzfgYk4niQD3nszxAWZNjYNhPdZK4K94gaLsfjLr9QvwgUzB74A1aV7vFmXmX1XgWGtPdXvGn9njhPoSgv",
  "key9": "2FvkEPCzk8w9tgUGeeyGgNYmdBsNdiPuxdZCEEK3HT8ixVqvGoKnWF1s2e95X3bMQrXhxZ53G48KRHTq7MHAAsiG",
  "key10": "53b86B6eB8WhY9YVerwuE9MKtjbDwqnopG4zWRxCSs6ChzmFWGT9T91225uwmGnjNGNCsx51fNTecw5ZZTPV61tt",
  "key11": "yUU4DAvCek9aAgh2eE1orSwNcafHjMmqb3HNqidxzRxA4px4Qj2xc3rg61U4uBJM1SSiUYGtjj4b5qV6Rmh5EhU",
  "key12": "2egx1AzbJz6kQTL5zccdHN7VtsXbSPoP4V3L4yfpzWaaD6T4EKZmwbHMkX1vXBVgu4EqgkptUh3rVjPRchBeDA2h",
  "key13": "5CKMGvieLTNQVJ4RzCfj7DHeXLQvbeeLBrsob7zYDvs11pRqu4sqNBUGRGA3yYQeH7iJRkN2J76BAvnCTJhkDLiV",
  "key14": "3sC1d8oHKW6yi5P4yjCKQruXeJLZxFkTnXjwMW8oEoeVb8k24fWTNp1gJNoy8WKKo6aaBGnYwyvua1hCy5tp88Pt",
  "key15": "5WN278Mfy9hSThVyu4qNMENm6Hi4s8wvmmCYPKtizmnTnEqmek7SbsXnKWEDsKEzYb5Sv95fh8WcFN6yH33V8an7",
  "key16": "5jqSM2Pfei8DT5TyQaPDeDHgepTtwXNVqMVP6WMM9JydQa9viTmWHp3CzfYPYzi3g7i39Gxkex4WQephPSTpmqPh",
  "key17": "221FwzUhxW3mkrmyuxdxL5mnMYrzZvnr6wfjeQ8TH7p7v6HTXq3b2oRKTwP74M1tZynBdY4YVkMQStuXSqLc6uP1",
  "key18": "5FG7TDy5JCkvr84rtURWgoydr6gHxj195xc7H8nE1tVky819kmEYjyLJ6kZEDghMbWGx9ZpfgM6Lhe3orHn4MJ8d",
  "key19": "3aAEDkbxWGxvYVm221tURyPFmDmhtpfnjBDrqp5kCXxwfgQBU69bup27hNdLJhbRG8RnJ9LbnjmYkH6jizcgZaE4",
  "key20": "dghtYYVZRbMY884LhNxHTpvHLU3esEf1dqiYBncgyStyKRB2F2JtFRwRm4MpefL4cANqYtRQfByhucugdzzMWao",
  "key21": "95zooC3gWdj7s6UsmH5KxoGugu11YT9yM6kjSkHZUeLxMiB3vBiqUWZESZsZraTjGqD6MJzMBRXmwF6Fw2jnF8k",
  "key22": "26wDnzaCgrPiuzMtw4WeorSnJgJMk3a6CDusK7axJxCxchbhTjztXnRWXfo1Z8PCFGptWR7UyZqUtjjx6wp1A4qR",
  "key23": "xMiVscZM7fYnBBR2o5XUhiqA5LvRepmmH7QQxufFHuPrda4LWdS11rNsqF7ZCA3J4ofUuMYxkynkJ4uUh2sv5JK",
  "key24": "5Nhdux3wpdtRY4tL6T6woDyUHqVfyUmKVfvmKX5qyaFCQs8Fhi5ZL4wDyXUjL6SL5EyMSYdbip3cK496Mav1UJU2",
  "key25": "WD8b8Kmna3erubCWZsiLJC4NwDj5CAbFwAagLEHN3kQfduE6x6K3mdDNAuYUSrrpquuMADc5wcghm57ZyjKHCz9",
  "key26": "5eD6StCgxUPsZ1fTznAodRkLU7NWyns78Qkj88HNn7A2sek2ZP2T5ChLi4j3RRN7pBLoAG6iUbstEetJf2kqcd6d",
  "key27": "5i7QRvJth9QRD1anjpiM2yYNoGPQqt81uZ3ExnpFqbZTFaPibmzkCPcTKsrwrKaP1VqQfmMWNMswrRoSfCcwKarJ",
  "key28": "2X6Ai6sWmpPTzxopgmu45yEhckSVtqACHBuP5GNCaATdTVfDaHUhiLoqdFbKHAecprn8vrui5mS7ukKT798Gqg2b",
  "key29": "4So6e6cTscSLED6arfwBoLd2dB1VkQ23zi4toCdkWyjvaVzu7RtMPtUhbnuxNmstaXqygFc1w9C64w5Sr1w4eL4k",
  "key30": "4okcWTaQXT4YomSvwug1h9g69QVvBTDX8wKT3CnpghUDczMWTJEUAqsGcXsjcfTzYEGP2bFBsChQh8cdE79VEXDM"
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
