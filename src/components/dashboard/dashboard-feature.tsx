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
    "3MrZx1goDLKeTDRK7iRxZTmk88VAm3j2hKRU7kRBTr8kFJP1P3S9v2LivobeSAnjrbL6cpnX6UwthHZcK4vpUE1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWRUnUTLkRugZdgDdaTE66GUsLSAG5TvKxMV72JnM4nUzJqkydTttkyzDZ75jmkMB94Te1JdcnMrYgReVsVgqrH",
  "key1": "5amVV8jfr7MGTWLFBpfjctDq6Kp9ZUsPhLoAFSRpuZuzuNUGbfECvJXcc1ugsanir7iEJniFREA1jhkXfLEY5iiD",
  "key2": "64kwTXgL2DzGMptEMt4QG9LVUJj7NEYS6WwMEv4DnHoi4zpH8KNAMZVvaUhc7dKWpJNFikoUFCVTpQUDUyhjsqim",
  "key3": "4QzDG21c7hN2hBhfcBnjpNsQmq5L8gxzL8q4zvYfQzn1ATt7mzXNWqpiBkeyAyG5p9bThKgioQsb2GB1WPrzmakA",
  "key4": "4Sd8DuUBXM2Ntp37muwcD4ofkacyEbo8wVd3UsMQMph7249iY4TygabcMjkcHs16MPrxrKVkmFFbtduRs1xsUR25",
  "key5": "2KiyihTidjnxrP4NpJqMh6Xo6zw7UHvZZ2NqfkjksW3JuNeyY2uSLAXNeWowicEtrsQ3LsiB87E3CXP5NbLc9MdX",
  "key6": "57bbpFx8UffFNZw9sPiRmnwDvKQMRGxTd1rk122hn2g1Vo3je2G36DXp4D9K7XBhjcRP6D8xbuC3JbarXjnH83mF",
  "key7": "2HkPfVS4ghbhSKPUMbcfFQ6ZnA8zADux34Eb8K6MeZ5wi6KcMj1jXoX7V7UxtjKSExhhhVpwQ9nMwTsyGDNTz4bJ",
  "key8": "yfZsa5AJyrXqojZkxS8f3wrZvzgCxTH49kfWdoAdMzhpaEAk2iWjYuL5EFwTmupGkaovf2redn3Sesf61CorCRB",
  "key9": "EG1BPDnaQMTvuRDBD4tec8Wb45M2biAVpNAzaQp2SehmfQQ2QSxVX89D7tgD5fFUfYGuvQ56N4BWbc11JgCJaY2",
  "key10": "AHDS6xUAkhHXKGGLLCUVgRSR4k2duorgLieQuaCuXuQs7FKsmT2dV2A5kt33PREddFc8CM83Vi5AvA828ZiMTTr",
  "key11": "4n89PYbtgJPbpqu5vdskZfwUJ4ncbeNes718NC3JUgM1uX6s61S8Q9H9Z9LDq8G9E8KaBnfeFT5E3VjaN6gmrsn5",
  "key12": "29iBPEkf2Xui79T8hVpUvUwjLjiYgzs3ssDMNV8HCmXbognkxkjXXAVCMo8H8JjjdRiotPhNX9LCRbNbbtPBZXdQ",
  "key13": "2ZtAvKqXYuAoYRapyrPasnUUUZEAUpHfUk2GCdcDdyp1dAUZA97EpJe732F76Ci8fektoU2HNxzz4oPoFCJ7dTLx",
  "key14": "U9JdxBgh4XC9qPLEUV1GbC6v4vPp9Tfppp37APqxshH2Ab3juwpjyu9cJaqKfDGShKZYtkLryKvaWBBdV4awRR3",
  "key15": "2tDP2xLVZM1Vav54jSQ1sB4D5sqtP7FMGmFZ1AWKyR2p2uxWRRZPTfsMxiEtLUmUPJjY1jnorB7T2HyJCUChVM5i",
  "key16": "2Nqn7t5UzkH57tZvdGCJvh5qW2VP1KcdqApa1r5EhxQWevRsb5FSZYozpk2DMDBukKty4CJWr6N5SHqX6bmM5syA",
  "key17": "22Z8SjPkeGWUCGghNzNhBeUdhnBSYKdta3dDB3hchXBJy9r16gGUgqmW6KfqCSEuz7mQ3KtrBoWjSye2KuUxB7Tc",
  "key18": "3fb7fP787nM2LmSaGuZAMCNzJKLZzWX2W9ziW3PLLwhZByZGdrDKQuWgP27bwBGGkW1wSzwFFNacND3LqzSvi5Wk",
  "key19": "4ymWHLuz4cH5MdDZz9n3FGCU6LdPC5owLmwovCRWBBv7aAzK6PstWyQCmmxoZjZMn2LbTgaFBUVycAmB2wP43StZ",
  "key20": "2na8EazJPSSxq1NK9TQhMaKAAx3hMUGALq3Ra7uY3Fy3Z4wYBDHQZp4ji63Yang7dL9Y4jt4eZ75YTb23ERcNdVx",
  "key21": "2zwiGXcjnRPZYoSLMKq8soDdJDsExZDapLk7txoQL77v1MWwcjLnGLZWoZtzy8V7fRQAFGhJsKVWwutC93gQxALT",
  "key22": "5p7G2ScXV6bbaxHH7TxEv5nMSzScoivczjS73b4pKon2uch78t3rLqTxequf6ptTDPa22pzBWc55LUhwECkSmtfh",
  "key23": "2KJmP8QzZANW3GVgVgzAeT6XK3wHj7WhJPhryrnNQtyhf2bXk6Nxs2EM2iLBx1CBPC3odspCLV5H7JhnEoPpeHrS",
  "key24": "5rJQFEHpN81Tjwgx9bEeu1QkpCoMGR8nxJRq4Y99uzU9MWnQBzG7T6hKrcpa3BwTV5vfzhSmBzzyKufpGfnEdnn8",
  "key25": "2Hi8g2YSPSgKLbqbA9vh3BvNL9XSfKvPee7h5mw3Mdzp2yTHWKCYos4TF3WzeUepVwiyVdNMNnjEWPr1Kkyhqn5Z",
  "key26": "2nHDVqXKG1uWHPNUHxhMNmHwRWqBsaeBU7xnswL71fUMhVgRWcpXDdb6fbMQWfMzfGrseHPhqQ3Jv4jfVpSpjkjV",
  "key27": "4RNRsXULN3TPJ49Sx8oLUucG5AaE9jTMp8hPD6QK1jVktJeZmAX6PGC4mMJH5yJxuRyKkCn6ifez7BkWvWajSHu3",
  "key28": "2X9aE4KfcF5r9bSrezCAMvDCGJ8UKeEPBYnczAieNaSreXq86rbW6yUXbH5NREaH1cX1CPceMdrkjsNxRrR84hzb",
  "key29": "4wazjdqUG1iH2umJVFfev9b6nYt4bavfJXc3Qjgm9jx5Jhd1Ss2FhV3wx62HFds8U2TRCW8mo1xxQ5H8Z8N5oWMt",
  "key30": "515CUvXWtSzfhMHU3RJkwLU2AsU6PHVNY9uAi8GTTDVBVbPGUhrgzNh6Ae5BjqaJWmfpXPZ7jcdx6nnu2R1P3VSE",
  "key31": "2tmguwY9Bp4BazPu46zMWhCuMn2VrZc9DqBQSV1bX4JSdFK14HDCzDwzBNt4nTFAdZvAb32bw2snNPhH55EZ2Kum",
  "key32": "26S7VLHEH5ytVCyv9vgrHaveGheiYagNsRTX318FQfprqEk4TZsseorDchh7aU4HEYx6m4t5vpKBgf27xP6kXdCZ",
  "key33": "61grVJyNMDaYwdKu5AvX2WDLFA7r6w4X3yELUw7UwZd62Ut3yhDPz6x33HDCpejihnhttA8fWErMHH3pRmXHAyVt",
  "key34": "3uPiwBcCcBLjrK2d533kkLcWj5c7RNaE7ZLfn6k1T8JtVFtYkfeufVjrLbMUsnKwLn8yhWnW1r1ycgjJvKxH88Uu",
  "key35": "4TiKKy2Fx84c7mXNwjTwwbJbNinBYa9L5HSW8pf5xUPyRmpwbSwhmrbVYZQDY9sm46ziBeoSXDcm81jNWbWrgH7P",
  "key36": "2fP6dXxEMdvpTALpQ56hmahY9YnZME92qpogeTgLPJRPMc7iGA6yQKJSnYny34h5vRw4yryUhYxLgydw52cquuQe",
  "key37": "HvY9qxeM2w1PQ2sRzv7gPBoQvUZPhDrWunubDKKR2291rTRhXfWLa2ND91mq9RgUfmiKqu84fZcfbWhRNtVd3ej",
  "key38": "imh4JW1fPtAgBX41hGQmoCuke5bzWmj9Y97s4z8RrGvax2EoeMxXMMKcpHdC1hoZfpSCyBx5bEcS8qG5ujAcvKB",
  "key39": "3VyU8uvzZwvo2N2RRBbrCNbyc4P2rdR6pnEJQmRaCnCc6dvTYoKjqSpG4JBPmJVtqHnguGx3LKEJ6o2LvaPJ8PFX",
  "key40": "NmE1uNSN9VtLeDqvPKrAanNtP2N8V3qvFeAagdxbM9YYe7Mha6RZbzskvyAYHvVXyGwhMA3WcofLiaAZrAxkzdX"
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
