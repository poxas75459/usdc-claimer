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
    "pUmEaXhDAVmcShvrXyXPLM5NDoD6UzxW8uzeG2gWwzpmkCCai3PsEnq9PBH3rAdz1etqBf1Zo7kb5bExZ58jNNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jedU4xix8viSV8kj7JaK8j46KhDStMvCPABWWZWBBbV7oFEabVAYUDn8C3NDmEk3ogjwWLwYePtwQCvoiyFajs",
  "key1": "4DQkW2ywT5hGRLYD8fh2o2doiV2S2vWM8krF69ZydubsRv1ThDKpMK6qn2eVNMZRfVtHiEF5GWSi4cVCMX9SjZ67",
  "key2": "4KTZ23rSYZj15acAuGgpfcyWvU7vigZUP4WUdRyk9XF11ScXo6AzzP2N6gpxFbcvbbEzr8J5nsPS3NhqUM221T4W",
  "key3": "4Mc8smvXZeVJrwJjwhcypRSgSoBcX2Z4VrJckiFqEAi9jJodNQkFisnFDTtYhYHqPCkzmc1yQRRjKaWLZYGpHmHM",
  "key4": "7Ldka41UpyLc8ugvSCszChKAeaFPu77gMQA7C3Cx7SsgWYwucsMA4bcKtCA8bQr2czr8xrcrSkhksW7VV6Jha23",
  "key5": "4pg5g8v1Zm2duPFajqJbNZ9F59WsWLvYQ2JTHN1E7tPE4Y7pDZmJsDS51rpkzzGoBeMgK1bRJSe5aUt1T65qEoup",
  "key6": "4jWuLyXbpyEyckNy1AUBKCBJrNpiG436XqjhF7btA6oo4XLnRpZi8XwZZbTdRCwziHbATqNsz2fdhXqotLNDRUpr",
  "key7": "2yt5vvUe1wzLFzgh7ep2qswgRUCpyLdzH7kxMeDZFU3CR75cD3VfpQ3CovtgmwzSYk7NHpLpd595PZNX6yHdaU1o",
  "key8": "5rJQPTEZgAxbBuYK1EZKhJJKsSNXDTutYhZqT3MkYqByrcWTGcdTR4JtAUUWMBXzDggp89Zuh1oUi7sz5iHciGwB",
  "key9": "3gcQKFZkouEdabtZRBiZRp2UwhQX36xwSFwvgSie8BQrRXgECBLtFUobEgicz6cFVD1CDmkkH9qTZEdxCwZTeaVN",
  "key10": "4fcPzubYZTw3o62DMW1oWosDJzFejn8bDVuyTfEKFJmqjARi3ZUj8mqQdzJv7v4Jp8gczV2aPqo4zR1AyAUtf4a7",
  "key11": "2MMwVWAmtkmQpzrfuYhV9A6tejUW5EvdxwLBJ7KKyqw52D6kyjmaebWnB5kQ3dtHmW2pKFZVoy1U7FUDyYcEAEWG",
  "key12": "46jVCHzzXMgs3Yqq8id3WG3yQAiKkEaBE4FjkNPoT8XK4MwvayzcbMx1dPSVT4iLzQjk4TJR3ZoX5TjT2xv9dgn4",
  "key13": "3xdv2Fz7mHdZg1PSqMnSk8mFS6Ty8HmDPpSqzGFEcNWLgCz4pqkSAzdvoTgGMUUTSkhzJifbfCy4ySrLyVFcRuUf",
  "key14": "4sG1D7c9RcffYCHMK9s6FkHuWCwWZ3MbTyq4dukhrP6LUUWbXgfWfNw2tbN1hE99cVXbbVQF8WK2HCHNztQHJmzJ",
  "key15": "5xhGhqHGeXMT8fRd5LUkewHXTmZSnf9LshkD7ob6x9VWcjrtCnnX2TmqL8PwCLo9o9keCo6y1RhZ75Bab6K2gHZA",
  "key16": "unmjL2jxLRCHiM8f1ACLPRpzGi7QxRGr27yXTgutFWLuG9ngHA2iRoakNwu8BP1wSfdywxFpknEZua2WRzxVbzW",
  "key17": "ANwKw8dpWwy5BMjiiiGnsJ16cH4WEjTmu1PJvYXJ1FJimqubxdVhsrEqm3NkXgLS2Q6pGUDRotteG59iQYFzhwb",
  "key18": "3iQKFMVefJVPCNEsA9BTjVwNb4cUvTkNbyst8mh2dzpVfJSRi8JGXpajGCqWgjErKtpCFfkWsRcUGS9usnwgFi7e",
  "key19": "5XHAzxxYgNDMHWMnF2karCJirmNWUW4UvvvfP6mC14AW3qPjP7WcrqYzvLNrtwj31TkBTZ3gAUw88mdTMqALkJLq",
  "key20": "4JJyXc6ihiMaC8yydrhRhDKCZbjJGsKRXu5Xo7grgvKdBwnC1gJL6jbdvvHnQGdxvQ3PALVkjBFFf6xcnjfE7SyP",
  "key21": "66DZimr42vexUZBAygvtwXGL3kgDFeQrCxABWKUdbcs8QARANDhkoxJkh4iY9pxPmhNJ4nFHAGQjbnJQUoqTxvZb",
  "key22": "2XFL1p1V6Jg3hNHrgxH2maSfPEYRaZHqD23tFXjQsKYLy4MXnFu595yg8Qic7b61MXV8b9nPBoD62U5J9MkTSYvX",
  "key23": "5ZPZyLi8T8BmhKzCkukELV7UCe1XUvEFniL5k9pqZD5yjPzG2mWAXRNQyYSVa5ezancZyiUs8KyF2TubkRAPK4sj",
  "key24": "5rxx5e2JpbNcs3Ntit4if3RU2t84zjtv7u91E52iJNs9yYHvAuxbd68P6SaTTY6w1N1MiiqVTACQSfdQwWiiPA4r",
  "key25": "41mnz2qFimiXJn8QSJBVWkNZGsbnCDpc6DautSYDV1J2rRuXyVPrABJTpopFMuZHZpoacZjEJfF8amA1ehjkAUM3",
  "key26": "4BMfEDbafKfuhJZd7MdR6cMhZb4LXibmEPmrundgWzgwukF8ekDyg42Mackws3jBdJNiGGSHgDXK5PXVdpBiey5t",
  "key27": "21hnsAZDRLWgn718LcuZSRgZB9No2vtJXzGzxKvXSpTRtLtu3h4XKj9SavXke3Z2hhyU8fgqNFMshJ1xd26eMmng",
  "key28": "2Zd5s59Qc2uKUkAzWTUKuhjeDmR6Q6DRf7kPVKbdc8g92fayJMesnwjR53bzLKoSozbGcjBKcJJuDVE1i6LJBrXG",
  "key29": "pVPJzuwFyH84NurGqrFPBygnHvrAFzw8e5n6JV5qm6tqLoGkZJgenNdAvaD89kkFa5ChPh1DV4THexXCbs4JUze"
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
