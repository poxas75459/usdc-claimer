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
    "49Qy3PsYUNjpex4NsNS2bCup4btVYuSLgn2Ad5BwLrNtgzoX9k5sKGn1wdpbjf7rSsqXHXpoF4DcrpNnmaQ39doR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZVBTbKcFME3DSjovYq77a3y4amguKzWSaQ1G7NAdJCrZYM1f8VH4VyN5AbVmNtr16MpB7FgdoSk9Ab2cWVWtSV",
  "key1": "3qY6LJveGkwj95h8dEhfM38vT2EYYS6D7A48XPWWVb6caQJbi3DC9LdYBDFCpBxqq5kR7stUJGgmBM5kRYZJ5iz5",
  "key2": "547N8rF2Tqv6tkJiExbAfhBHUJXZTqrjue9fSUkLqtdXfc7pQo2mYs9XY7CvnPj2dnC5JPCNHKD73mQ7CsS4Szhz",
  "key3": "aF99BjAAe9qtKV2jaPsAwWYBX6oLVdWGsbtpjdhYSKup7X5dAa3fjnFfEkRu7ftZ9WTDTkFXqdipxhbK4UgDomG",
  "key4": "QcJdjU2rFJvEGSKGhLb6wVvFuStk92J9ojVh2qN79KJEhZQyxoqzbPApLmnYb5HRRCbbZTcx9v1Cf53MRAVEjxj",
  "key5": "4kWmyDC7zReMrFcLbV3MAF2ARh7kSJWwTJgxRLyiK18eDP7k2rYmuKM1esAHwaVJoAA5ii2iBMg4mwJsnYMt7MNE",
  "key6": "2WKSAgRJzmQubAiztsScYqTj73KJj8ygPfcjZJDzFEdYupvmJaBxch1nGvFKXgsPxyEvVE5yp9mfVHNmJe5X7NYi",
  "key7": "Leq3HzqVNL5LnxtTE5ZBQj1JE1EAs1yCd7AMLsiTH6eTVRkqiFTQh6H2augHBqNgJTmVtF5HjoGYapdsAr4X8za",
  "key8": "62Q5JqfhJAfieWh4qXDZvqU7JW5YDxsvuAbQXsAH3yrqcu6wNVgADHKe8WEeeXp8QKg2GLe3RgW7afz9o8osbzxt",
  "key9": "2ij9KpyeSPouSLpnFgctSeSdLviCudPK9EmF25E7joC1x4JA9Z2ghWkup5hv7NW3R6kaSeeSboi8jkYQX3GL4Fbc",
  "key10": "e88iYr9fAGymJGUpzNk5mXmfVGzZEtbXiTMRauFqHw6YxXo9ZNMs7Kpk7keJAgQNG6oikzqsw3GuA65QadJB7fn",
  "key11": "4wNoX1PNFd4BrnEPpj5Nw8peWhnASbPu8fQ4hkdgTp5AdY5iMFyv13x8o9298Nmy2uaeDDjFmFNFitHgzDVXjVky",
  "key12": "8HFYF8hwFLZW7r9wd42C3XhSKnonyziqSEDbiDrByLxDKuHQtswth5LNJUWe7eYYhAmr5stAKpRCpGq8pjYWfJF",
  "key13": "5E45u457uWXtZWAVUREVuiAAjgELnSex26ESAVMZtXxE6hWub75AWUntoyhEDrC2SWU2bdWnjX4xfP1vXi1cn6Dg",
  "key14": "55QenPMFw4Um8FzrQeDZK1prce5qLSqKj2jK4amwGRQVsepkamCLEdtpjToCs8suyuChzFvp9ehzRqpjWA3TE47x",
  "key15": "22Xog2EwBEDLngscegA9UXH45Y839J3JiMSfHS8xHwXVx5cdjBKfnW15iwo6hpviqcoEXwGJMw4uLAZTCHdVpz53",
  "key16": "2RmZvqkWP5VoCsyMDnvENPVRNtJg5kwPKz68EzKQvptgQipgz8YVF6qnBpvjZUdUSnN8KwQamua5uEzwC7ECiXUr",
  "key17": "azLRwgeJNSJtd1focd2YiuShWLs8vCHRYaL6a6GNxHcSPGh1vSXA6xtCkZkNDg2J297NohNQPHs14G3yLPTxQKg",
  "key18": "5zf7BNBQtBkXNnY9LXegatuGTdN55QD8r6EVf7aP7NsfHbC9fyyeUNPcRWN4Hh3uok27vtkHK4nvj4oSybvbkrK5",
  "key19": "5dKccEAgQyvaa5X4ommR5FykDHTBaKaQzQtxNTPWopEinacqTpNiVH6cHgybsHVxyK6KHrccwVFSj1kiQEr4rWty",
  "key20": "YsTo4Q3dnVnTTxdE7iwmqoUG3R5v4n3GrWgvBniSc9jYJgsnBpWPe9swa8UC5wym22CM3jCZnkaPA8KeYQqtLg8",
  "key21": "3McCcvkiCSVNUGRBwLwCWhaz5KnJ2qY9ZNzX9zH5Fimx2JaWzWKAofGiBMceRVNEAALM1zbnoKZ6ENKPj8UddBhU",
  "key22": "3ACp4NGkSVUm7DitVhRYvnqtXrL59TapmmqGsCb8afh1Wb82m7TfBNgAnH6Z8WjPsjHk7PDJfcdxnfJPhRNMQE1W",
  "key23": "4ABgBmPcnTgL4WCzraSmVLWwMVvXGi58iFA5kj2qZwL3KKYqk5Rmrf6vbEZFTDW37KKYyKKzv4fnU7w9ma34jqKT",
  "key24": "DZCAe4SRy85B3LCrhBgv17iRFLnGDGijiEsCYFtUHdd1YZQmvZDxmpwoKiBsJFgkvK691Yhdz93joeQpvM5uDQA",
  "key25": "55pZ1h2wsnpb7Tx6byaRXc9rFwPppDq7oQ4ni4LwBgciLp3rUxoz6grP23VRWnUZR4JqcbxMqhGAtFTDF2KUkmqq",
  "key26": "5KQcYn2XfCRYama5mGRr9pa6285kbZobSUdKCrUfckjVoK3Mmr3RYbXkmXSnSDdEhBSd5GDgYidr2FmAnqkx5BPF",
  "key27": "3Q3muMRsbnrczLuEK2yeDdgSkxu5fqn9kMPdLgc6rfKvMBfap6KZPHWTLYtfn2xCVHNZyhBBBj9sNSQ6Jn9WVstH",
  "key28": "2RTCYrbJ9UrZc2N5ALjA7giBk93osxaPVwKsxU32EUvDNRy8wDhMqouBJfUnvuL4a2KSvUAKwtxYgn9TsuWXFYbL",
  "key29": "5bBGneh9YeFyk6LsMgqapy2Kz4ysngmnWeitC4S1QBqWWEdAkbBo9YCeuSWQDh2ziZtFNKjJYzKz3kTMt9xAsNmP",
  "key30": "QsE5YWJNupp2HVxWQeZSAJGXWvQ5cUSWWmhGn7ZrHccgMfmk2GXZeP2pijpMnvvMY62HGVBsa2JTZPW3dgdnzE1"
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
