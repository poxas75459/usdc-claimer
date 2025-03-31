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
    "2As2nAUybMVBpcUSwcJFrVqWQFpQLftJaM2rf6n2ifkRfJ3aGdEmFDu899WL6AQ62fNop5GUDkLy5orBu9xvnWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VVoR88GP1zmUD19a2rvQGppjxJwkbJeN2LTKEnHFSos5KQU2faKnYcUW6q3qnfAMVVZ6hjE2XiyoF3gPvAixQ7X",
  "key1": "5NpqsTi3R9cyzPJ5GNR5R1KY8AzQMyQ2QUniDLCAx8m6JEsT6FXxBZiKZmSfLyZTkVwMoHchrt1kZnW7PCygQYwK",
  "key2": "cGWBWfHFvqmPJxDKsJrWDFv3NyDvtoCkgpEhYinX8vCiAJhLX5PKwarULTV6fP9umbHJqR6jLXZqt6hC94mGAav",
  "key3": "dwMfz9eNQvxD43jBTnBkHfKv8RotLuem61TrxczTm8Bbm3KRymQSBnp4Bq4ahfbaLCGYGDyi8qNF4DwxMf435CA",
  "key4": "4KRa9KV9ojdh6jQ6g8MXjQrHrKnfKqxuZ2rokTTPkUoen8UoEEeHhFZ1upQzbD4PK9sNjFhKXukShYwmshUtN2Q2",
  "key5": "KUUVkD7TbP16vQb7Vpo2yhJZ2hZbmb395WKvvxPgKQauC1X6ATgdNuM5mB9yff6KxqMJVsZqZK1PANUhVJ8tacF",
  "key6": "SASiJSB83ohiJdndMW3hnm6gNQywKRdGn4T5hBY45Hx9o2ZqJbGAbfsd8r73BJdsNzUHxW63ABX99TmkeoqDA3L",
  "key7": "5MRUv5NmbbFkyndRQBNLVgzPdpJxegHJsSS37kAndWtdcJg3iadM1Aye52NZxxyLzX2AqabnecAxxLo1mEXTFzti",
  "key8": "3rPCF1dFKY7h4hhDtNiyABqetR3QpyafqwyUjFyLtn7wB7caiXQYRAkfuzsP2UQShpw5ZvVjUAK8uuhN1yhMd9hj",
  "key9": "VucneYHAhsFtkGVnU45xvtbWJTxKq6Eof1voHBcRiiWQ3MrxaGGbsDz1pJdym4fs8tZjsNyKq7NxWx8vmKtpYkm",
  "key10": "2rddab4pCPsbzBV47awe3F5yce7R6M16B6aHiEZtgwLEihmNfbY8vnVwWVnp3NjfVd4SCCiamHY7YU1s6HKFzSTP",
  "key11": "FQ5PkA4hiyH5ZHkjTqKQ9ZSs9wewRJwWkjXraJ4vEVV2a3EE9p78PByAjVvqbN9p3Xo3AbYnDygP7HTTusptrBy",
  "key12": "U6VkEkBHZWeanMmVTimJEW43dwt6gPbtbGNA5HpAVfpi5zzne3mbkq2MLsvvYA7EP9w1HoDBK7YQLgnWvqscQJK",
  "key13": "4Rmfg9L2dyZD5A9nRzEbceptG6Ubn7Y4CRHpeHLX5NzferiL4kmb1TW96CyHRzDxP6pzxbpEhLwdHuvVJmC3JMge",
  "key14": "2mRigWeqt7sedFXze6FWEducdoWjaUS1jr1ZqTeF3BC5xkYjFiqjNyC3sD3pXCAKn1QBUApuFdPqkGwRrLomXk7g",
  "key15": "3WcZQMqSF5W2T9fq918JMKQkyLLRWj3vwAN7b9b9j5Y6oLJKR75qRsbuXmxWcQYNaeSnCrovCwpPWLDppE5vzHhN",
  "key16": "3ZktkkjSJudCV4y2WfytSVzTyKTUwUQD9JKLcCS1M2cvTchMW6QdCYEm6BVjWgwjKgvKGjvXPoAzHrhbjW5sPzM7",
  "key17": "3qbVtwWnTMU4YS8bq6dJvoMGwJ4JHo7yew7kjCoWSd3g2VnTjthwgAFn4JpPCLkw5wchrsiBXxgZzeo3KEXHddqC",
  "key18": "rq9zz9H6hZqu5gfeLdTaLYg6re1zCaU4sDgRwbHe2DcZP3VBQN5USmAY7KjPvLvUoLChvo9Lv31TJMPbGGEcJUX",
  "key19": "5JB9aXcEcmaCk47Yrj8RQYj1rr3XFTExF93j3LTRUxav5a7m9faxXEpNQRE7r3cqv8fGafq39gCokPSM9TYyUN76",
  "key20": "5Um6dkY5sX2QmXJi9NLQDHbYpT3qJLLw3MgshfA9HMDHgnhT113nWijHhfxUq63uP9dc7pMcfQycyB4fpP3UgdJz",
  "key21": "5aKsfzobVZyLFKwnXserg5KRh1WcBoMGoX2dXmWj8A6TXoWzMbuteZZ4yEo4EQBMyK5rx9FiVmpSqu3kDxbrcuZ3",
  "key22": "4a3R39i7XxZbeA2oF8gTN4MM1px2W6fXTAEzgHuoU6x6aTrf2gzgXdt9m4DDA49i8BoqK5HhQUkM2NBspmRoLABX",
  "key23": "4KPEBic8xj1HH36MzG2VPb2qkrko3nekm67yDL6zW5Ko1mztg1Eb7kWJGGCQxZVxNt3Nu7xnfZ8Dpwfjcfecsffy",
  "key24": "6k1prknvJvqz91dYWKRjD9BgZeeDfVDgwabU8UZoPsPfPzjbuB8hNNGeHCLZqeSU9wqeQoLFix4fFkyP86Tx8hD",
  "key25": "3YcV1nfNYPX2D41YUFcA18XuXZwuw8kiAVdC5qPPF3p77gCjVKeQ6rr8WPMjbAPrC9ANu69n6QTsr9B35Bs3iU1C",
  "key26": "1kSevsAnSwRaTzNeteJtSHcHCDx51Waom4Zf68YR253bPVjF2aTpgsrDqJaCWMTYieyJyS1HYqjCypwEf6SdjNY",
  "key27": "4fLeguYN5aENRhxG3YdmL7URs6tMLPM9QRHnAFeDeKbQtqophTxpqtNVJD7xMsCt1vGk4CbTR8SfcFb6WLm9Ra6p",
  "key28": "3T1EMiP57BpeJhap6KAAiSy4NPFw2UTjjKbq2Hb2RzA41zzjw8Ry5MrDbxfbKLa9s4PcFKs9ELM99AzzZNVcjw3c",
  "key29": "287emqJfPfWbW1pMNkMTjXZSEL6DJpVqjna65Vmacj4xq53EZHVd4NW4wdms8tacZSCHZA68Q1wkAHc7AZ65sYE3",
  "key30": "48xk41egtB94UkrJ9HZhfFhfgRAyZYFgnTu8uFebbaCAzKM8h4fY6fz5oEFsuv9ZHcS3kwuszdwktqMChWEDkNwV",
  "key31": "2UWnwC5Ee95wREvqgK5nkuzmFCw8AKKrkswfADGuqYMW2aswRY4CK46fwJioB76x9doe6T9bXyy5HNrUqRcJCwh4",
  "key32": "3Cxc3iGbncVvWhPyYhEE6Evyr7vgEpJnJkCbbLHNntcA1tg5r73XvZez2rNGiErtoDgLuAxyA1eJLi9UaFjSXHGV",
  "key33": "59WGYuEkgnsGeXWpRTyKjtn4U5SW7aZ7adhNTU4AU7sSkFDb4ZNNbeJqWddeXd4YsocoFc3TpbQMNLRDrXsML2Jp",
  "key34": "j7GHhBbR796EZUftCjxvuNBWdfAjGibya3ihgAC6co3MdXRRnAv3AZPPNpbzG8sTbxcrDJ1eFT2n7qWYUjMgypD",
  "key35": "UE1uEpEjSN6tKZNz7qPEgsQ4XCQnGUmr1R6yGTrzsZ9c66kueLaTJdisoThVVVMvXM6YbYJd8m111iCdUPTTr2E",
  "key36": "47U8j8m84mctrfBkVZ3wRuDrFdPatX63NdbjQb9peJeQGyoSNQvQ7eQWmiXMzuuUCpGWFQvMpWNzrJpuS2B928Lm",
  "key37": "4hYh4udkqoDqJZgzxjZKcjwgHrrmaxQ1tYzoGCgDZMWy4Kk3RfniPztqTH73AtTCuxLz39GxGNjuSuyTnDziHMWe",
  "key38": "4FjtcVdzCbpAVk9QYGmSyCV7UtsvQmcbE5MfFpNJD8zcqwTycfzeMMzDaixLzL6szvBqjeHMoEGjdRP2Nmeqz3Pj",
  "key39": "2nc9qqsMyMykKuuCaFN13RwYnqjo7wZQ3vLFSysYHSysLJ1zVoLD1N9Bg6BbphuCGsNdFCpEy2ipkMWv8n8rYHz7",
  "key40": "trkVhzaQZPQgFXDJ7rmBrmHQPgYfwcmqyMEK1KCQdz4gDax5X6EwE2HTTSKQPs8yQ5cfWGg7vgQmEFn9xp4LAgY",
  "key41": "2EH5983HvgLZvRy5yWdqxJYJRhKqPbX1epSEnsDhxc1b1xhoW6qKFFHFTG9dcCfWSKCN1pV34jNxgu1RX13X5nzN"
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
