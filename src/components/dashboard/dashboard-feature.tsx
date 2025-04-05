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
    "4PFMckX6YRepimQyxZo8q3cza7ZKzah99eAfneLnhad8Yo64YTS6RAhbBLb1rJvvJUUQhgViW5uZfAKbNJc1efB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFkRzTecMXYd7DLwdRepgf7CqwsRibn5kNFAKJsL6dDQCe7PxrdATuaEbnsCckPFqCqx4fkorDjhuhaEXXjsdAF",
  "key1": "2NGMXz9ms24PgZf4VbJ8VLcfwnhfY2K9kYTV1Ywi4qxd1ZCJazJPAJ3wgEdnVEbMJGdFjZasB7sFtFwsLXHZejkq",
  "key2": "4642AC24g7Rm4oNEFfcVWyuaswivMC73jsRtTRFEr3dmSSV58qq1eTQy588jiKp7dNhyAyAUFygajmDxBc1JaLvD",
  "key3": "5KAgPpimA8HSic6sw9ByFpbFtX7BKRdkcZtZe1mZe3Li2AZy22ADNjJoA2sZWP1UaAM8PF6K8wqTCBj5sMWi52PE",
  "key4": "jLM19DfXouunhsRBduC425s1FwWLMMUBvoJnbt9QqxLz1nHKXtUzi8taVDjijwVBNi1RLYcmi1zF5aRDuQHs3wW",
  "key5": "4GEjQzqU3xkbX4ucfLmEETwcicqCMA6UBugwai4VsWqPgriZy47CpksVNGa4PWxgxLAMwkmZWPnmty53xVZFzFnx",
  "key6": "3HSozRvecyUMRSNTGwyqH9AAsVt73Gc8fCLaU63cJ3z1qrtkaGEsYuCCEUaz6m54z3k3pRYLz9SmRMs5p2nqhr7e",
  "key7": "4SKuhsEjFMTNCVUvn1QkxyoEJMfVBMhPayQuyNiwaGUuZn5rWj99cKMtfVvqTZKz5645QTi47cA7GMZLBpjqYfJ6",
  "key8": "5g5FZgyY42YvdhURxxDrxbkeQCH6Psb6ixHWSotCTzQEkNCYRMKbuNN1zT3mzk159A2EXS5hFbKCmssPrj1CPu5N",
  "key9": "2jMhrA3yd3JxEHH1mCkw8GXDQnNVSfvkRG32sTr6P1dF463vbYkZWjwGnzTMs2JtVZqVyETNP9A5Pja8xJDDKrNk",
  "key10": "2xhgKxAHCJqrFERT6qvNtyi7k8dPhpF3Zdw7aAjmWyyHyEvE6rkQnQFZEtX8eckbYjq14eY6X9QvGhLHvX4yHLQJ",
  "key11": "55ZjYcN9UuBhgNi11aqoRHayDRbsoMv9KjbFgXgmWNDuxZHLYjg3VBLnNsJSgemzQJRGjfH69qFSbD8u4qpd9Ufd",
  "key12": "4fuZnPTex8bHs6bjReDP4S6EYjzzZjS3Y6oq85ff99LrgVWk7GruhReAjPP1m9kCeoM4BhfvQ5vVRG1zKLoxLgcp",
  "key13": "rUNvLQdY89E7V5hRBpNRJumxPR9teUgdqmogqDhNyhQsEB9gY9h3fxQ2Cs9HgdqpdaDhYPRqE78y2BT4hoMyrW4",
  "key14": "23uFLQA2mQnVzk6nxB2dVuZkK6vNayNHH4aSzQi1Uzcz65XWvUnaT7o2rf89SemvDTZkc53FDL2BiUyodQTnpco8",
  "key15": "5bC9w47YnsTiyoVb2oi1ieT1MZgrr7HWGsMCDWwPt5KpoFTTqG6vr6L7Cw2pU6T1tWX6qMVUXVvARixER5zo3nis",
  "key16": "5pVDVAsPcLgDUeHQEegWx1aZDqh6DVqBaSXZUFBqCGWfNGHvUXoAtigUSxyWTpjPXqAkM1zrvH2FX8UhqxGpTUKN",
  "key17": "5wTqPrTSepiE2cS5Z54mwimqgXTok2Ur2hXXS4PASQokUugFv1jz96h7tSQ42d9txitLZs6d9FPkPWzABzgpi5aH",
  "key18": "56fLaFnCzMTjV2UC4Ema1GjVu3dLDPtVbzZ9NSYY5yTdujSqeoU6GjxWpuLB4bXZnFgkNbHo42tWCAJCnn4cJQb3",
  "key19": "3R7a6afsADA4mCXhSf7wYKsMEfdNRC7crLGwNC7i4fP7EUbuNS4dqyj36s6fmqGxZeJi7Bk5EUj24CjBrqmrdsQE",
  "key20": "5QrWoGFvxdWdkEoY8PWWwwaLzMgTCbZwyVS3JB7yaBU6TwepaNzknN6mQm5ig5NveLef7mS4PUVxTVaq9EAuyA9t",
  "key21": "6CypShMXU7HyhUP9e1N56mA1CLbrD4FokqDFMuSX41paTvVkC9ea4Hk1UFSM5bv9UoTLHMwXMnsBMMJfGXSuGsW",
  "key22": "3gXbiKxLnjRrdVAmyL6b7PjGRnvvYAtbLtA8284j4voXxjCcp1LQthhP4Znc9eTYrLBrgXrsTxaRgw1359WK2PHZ",
  "key23": "2yRSY9zxqy3DaH6kZ75KrLpgNW3ahHbjYJ91774oW4nZNR9T88iQ24PhMMZWXkgzEo1jiEsY1HZ4rurbMyp2CgtW",
  "key24": "2Auqn9G99MQqUYBBeCLzjh4Qjnc9YqAGkTs6jv1hYr5YCcuPuRdD37Q4XeUt8JdAwMpwqBpYhp3RVDn2eRBSjDzQ",
  "key25": "5RcF7Wus4b62AReF4LtNKmzXd1W6N17MiTVeMfsKpqZ3GMtKD6Ue3SNqnCuYA1rB7cQgaQcuksZMJFzET26CFovt",
  "key26": "5iyCe6TT2GhgCtkQbQbcJhZidVvcRLTCnEUEfYN8EZDwh9B1STdCi9XiEW8fzpsTTCu246g8cuj9xTobF4ZxJUqJ",
  "key27": "3xPMc4UtE5x7jdWgzSV4cgDmZXp3SngJstwHy5pYqLbAF7MusGFoEbQo23PsAnd34ZHf73s9cdLfqJHC465M5zwb",
  "key28": "5Vyqa4caZKh1P2YqMNeX7wBmTmpdDRFuK4DEuC5VGW1vPaYsuYiVLMLzipwKpFsLDzeFBacJUoMXK1faXkxjhUMx",
  "key29": "2FFj7fEFcjkrX2Ag76pJZpt9yuEovNTHL8DnX1RzZco47g8wn7g5hBVPtuF4Xdbsw8q8gN2kzmFFprCZDwHKXLbA",
  "key30": "34rYeJSeXRqtFmViWneA8iUfyReShCRsckUdVbzwVeh13gEXbtCKfNb83EJ9hD6a4B3vxe3nugKpX6GXZjMxpqvY",
  "key31": "5bkThFzPv4Qp2z1BBcKTRyk6SBEsSWodWTsVpGLjy6zWaZLnfg3w7PeLfZzyd8Khz2v97K1xgP4XiyRQYPvTZRGD",
  "key32": "62wsg1krJbeGhVjQ7yVggtgU36DA74gpJVw6eq7wRG228X13PPtdoDHVoxEtCkB9rsnfiUw8gJWjvGSZ2LZQqu8J",
  "key33": "gTwHB4HUjAVu8S9ut5NN3xqCLfpsJuVC79vzUoDcFgfPbc7HTp55cKUZyMbqc1LFaZQKSSBWQGFJPZr7Q9BvVDU",
  "key34": "3qUZK33v2kH6qwNUHzx1mAkkesQjkf8CHUnCERokPMg3BpVWbPCfQJsMYYYLTSxzBZNjnwH7XEwrLDe1LiCMeoab",
  "key35": "3RzYQf1Lqyiq51H4HdNjQ9f2FhQmtkhRe8fLf3J6k2d8iRoYf6zPis63nKfChbjYZ4LhAW7ymX1UGwyT76KKGVbD",
  "key36": "2MdUo5LDjgCV4LzdaqpbkNsM6VGxHcFdTmS3xf5qdfak1mBwNp9Tck7Ev5xcxNDmaZjgTeKtEetRn5TSYX2SPQRf",
  "key37": "2WB2KtHz4qeqLdDUgiqajcvAGgsrERt2T3Z7uSZKp1eqLo62TYarMWRhxgj7xuMEBVeAV78rUuXZDxV16FoQbAMh",
  "key38": "4mUk7uHTcTV8B5tU2JWy1iwRbSfarYyD3BReU92enn9uDGyWdRwDEVfJCXRaveU12QFyjkRjR5abWMtY2iCLki9Q",
  "key39": "RuryUugwzY1FRm1ydR6ks38JcwSwuqpnoq2RPt3uDcYRdh6ZZoarjVbMQ6CjDRbQNeUUi59TZVYwy4XpptHrTqw"
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
