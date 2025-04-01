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
    "sh4Ao12jgbiSiRh8jaD8zyBap6ZtSD3afKEoA3mLBwf9e7bH7HomB828Su7h6i8GMMpsgqHvGKnKoN1oLMt4Nar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47zj5xYhhX3uCGc69Bdpyyo4kneg5swUnY8Akv6U7sepZX522XEuWYu1fWH9EZSBXUfPTidvGtD3h2NC3Cw1mtD4",
  "key1": "5SrihScgw9m3zkHkvRUa4nZHYSR1y2MHbtPQ35bLeJZknrfCakxYi9BxwbRdr1zSpNSWCiHeXiap6vmqARNeAbPD",
  "key2": "3yA76y9tQm3FJnnKYnrNW73Qcg6PasC677pWMhMYR4b5XrMXJWwFth3ekYWz7bFjKfpFbJk6SYZtP8rG2LQhohuL",
  "key3": "5rv4UWgEJMXZzUpEfHH72sotVJ4HRvKhECQ55gcqEt3H1Z63VZooGgJPow5Aty8Ha9u6Gu9kuggGgq4vbCmPaXtB",
  "key4": "C2H6YDXjTNX7diADdNkZzRHHAi5Ye6GnQbGCiW9tQa3LEEwH3uJJgxV8SLi9hr8kio8TMga3jhbLcVeKZgafjPQ",
  "key5": "5ZvYUAvp2GSZ9rV6XKL6Zj8GrqEu5p5x3b5dXWWQgktPPnQrLDj874F3JHYZE4M4VqmCegbQbCN6qNEQSrSrtwtH",
  "key6": "2b6nUwh1bHas3NyNEtGNwoguJmaxEtyQRpa25KynACDLUTp1sAxonPeCNMwC7U4Z4R6AjHQGR1bPMk1M851ESFXt",
  "key7": "48rJj59C4d3f5CgS8VEjZAknDegALEJNP3j1xty1HagRtSu7SqNQhXkAfj63BxzFu2cNR6E7DpU3rojLzoxJAEhf",
  "key8": "F5hoMJ5gY24Ja9ohq6XPCjhfSBWDYgDpCFMRyMDPyhiVyKQefgG6wgwcCgE1C3sbVMt5QwcPLJoivdbTK49Xg2F",
  "key9": "YEbMcMDBoFCmCHH5J8H2eCq8R7nfdbQh6pDuerRNGupeaCdXEfa7ye8cYu2ViA5LC3zBVdU5YBrNhtiWauREgu5",
  "key10": "3xweiDsJKPSBxg8KkmAEdjF5EJ9b1UHjLXYZadt3rDRotDdGji94qPU2yqAWDYMWLRgpB8HRuKLN94T2LAqipvKo",
  "key11": "5Ki2EMWd5oA76hMJFpGKraDhWBPanJLVjMbUJ6zC2nKxCmYUtjVTLoYS9Qa7Kz6XhYBtKJSkgNqd7s3CAoMDgM5y",
  "key12": "5h8MbN8jvLPAzoKVjnPQw4Y86bski93snt51jjdzMpgurfRRHNNkxoAN64dbj3jxov3tCRc8FAZE6sChpdxeh5Sa",
  "key13": "4opj3AtSTCJoAQz1yaCcXfMejocDpHfZVreXH6zR4f1vqnZohUtiZDWXcHqdSfpDTY8A8W1dtR4Qj8kpCoM73UkY",
  "key14": "5Q14ff8xykCPwFMhu1Y8rfLTzEeyUCq15StBSz1AUkutpWfbKcmn7fPfhMTR7s1o5xArefPbZJGjdP9pUoPQwWid",
  "key15": "4csvNEy1TtU2pwWrMtqi9daNRo5nvTzHcGKWJRNW15FNKnex4V3mKjiwV69PwqrSZneCoyvd1S6LpsSaNNWKCRcX",
  "key16": "eV1EwR8tEqN7L1QZ8yPanbrPEu51EeNtgfF4HdCMgEzjDsQM9YLJ7wAP15ZS4q2dUWHvN7UxqcxJ6ijwJfnfGfS",
  "key17": "5GqJzamE8SrwsnzSxgCcWS3Pzf9ipKa1CKUMZCd24hkgcHRNqoALBNDENDKbx8pvfD7HXZpAJT81YBjPxBANsXGy",
  "key18": "5nGdWQzgixgiFjWTcoNKea2VZ5PNYHs5DSHknMG9umr7FhE8gHUyFEcb3NecP32ERez2WAQo8PEyUfMmCjwcYrRf",
  "key19": "54wEm99XosEWw7cZAN1LdCFSrbdXV4GKjb6ETVKkP2c66efikcEjjzQt7YTG7hbr4X1qDBMjoaceAE19YDv2oYC5",
  "key20": "49pjek7xk8waYwf3eu5b4fuDCaW6TJDkuyMmPW4DT8nFU22U9NeoBansXMcggasEg8QoGqzfC4LsTFtGkgYnciTW",
  "key21": "uEasWq1SEcE2QmBzg7XraRaY6n33G2CRNmeFGjSqcyJuFgbbNcxC2xZFTP975N3MBgYGuC8vDqp4sZTY9qusKPw",
  "key22": "5ZM1nBpEQoetxteUiy9Aka8QXFqkhS7DgU7JRqSitjkwQEYocpF7fS6GZoN8ZXMTkf29E1YfpPzKNLxVUfUiP6uZ",
  "key23": "EGnPmToeHZeQNrucBzrkDiNNEe63wsjcJNpLzCaE9ufP3qGi39zrDYu7HuiekqP1cQjAfLR3UsuS5pa4U1ksVhE",
  "key24": "4LCog6Lz19mrYc6osPPmG38EXwoaJ3GUA2L9NdVkHDecAPD1pmVuRSTxP22rdKvf8xZ2yxhE382CAq1qiVPRjaoJ",
  "key25": "3j4mtZ2yMgQFF4pGa9mjEQpfuAPiAwR8zjXgz7UxJ1akLSiCz7ovbL3C6oMw2cEkvEgrM1iRbDivDK8xXfaCCNKp",
  "key26": "2TJVEU5A8mtcHQcAhvMFaT192oaDtLmyaUausosSccaz1X6nugXis2FHSU1LTAuXqvfmUPN9JGbaM9SCrhnqEpaE",
  "key27": "A4idtBmY1MrjTrTX8zPoHhvYTz1oZbXoycaYGBMrG7bp8T5L5LL5krmreJUgF5jkFjvQbRBUN7sg5KecWowot9N",
  "key28": "49wZYSDNNqagcwK8X9CvkpidobA7z3vLGX4zbGjV38sDHQ3jKkqnNmJ2muxRG3taUrXtG96urRzCkneueKPa5ZtV",
  "key29": "jq4BCo5mknMJCtq9UcrJfK6ZTC5ELhCdoTSHmtRzr7GPy5RZgrZGuyQSDG4wKEqKCnuzsa8zNWhwKnPJRV1j6Bi",
  "key30": "5wohXpDtbd5pGtEzoYJ2V8uhMve3NJ2TxyJzHd4yJmpcEiX59TkGSM8TPWTkg1zpjhhEvDDWNnwdt4cFWXBJg5DT",
  "key31": "5126rUv6CT35qw2Jaqnmup5LR44joXwfsmVYZ4dQTMZuJAUEay32y3e1U79hH4LJarkGtgbVesPEg2d54X6spMXv",
  "key32": "UR4var9jTzJkw2ZE2CRzwXXK9xhDVqXvpqcZz1rY82CFfEa4CUkxf5PRU3t4a7pqwsVR8Q3KDZ2eNgX3aEaYwC9",
  "key33": "C8r8kARdMUDds5f5JhBj1WPFZwx6GRwWEyEzU6zXGWiZ3ZMXXiX42NyXnHrXQrDuUmKPcSovzoFTmqU9pWHu1TB",
  "key34": "37bitLykQHw5w6RxLsbDHD7GDUmFe99Fdc8bVfzYvLUaiE7u9Sn3Dy1upnzXxQtYSZWYfu2L51b4zhRnyzKmWHhH",
  "key35": "3Y2TKCTaBo9fJq2U1JjyZbQfYWwjJFPtmsh1HjuwaQuo1YG84ZvNKXwM8meF72RhmYwQ7jbdya4tK8xmbgKDZaf9",
  "key36": "3RFAmswie2Yy2EN8aktejnziawKxiW563ESkJm275rTzRbGUF8ygAS3KRYJ4Kyde4SRx22TYTzf5HnFZQFUWKJmo",
  "key37": "2NQv12hQFipm6uaNRWS23pH9x2GQUAP9KuBEKnwG5mdLF4neTgHsssQbfqMDYHYJUXuVrADECRBt6dJPnUyo1Wns",
  "key38": "3vBCqEN4yVZQn57BzgWBu7QJF538WENNNQxrT65bcgnXcssFtzBPvj6mVe9oFoFwvLcArpMUsj7WyHPuLrxz5Bud",
  "key39": "5kwb63VHMN4onjMRzkAAyepmyxNeTBqbhNn8j1oMH6rx7QfPiMobVTjikxgwDKmCHa14F7LvrbSyqwmsqhitogbn"
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
