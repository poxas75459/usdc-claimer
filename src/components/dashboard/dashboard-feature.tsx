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
    "4j3SEnU1PyANRXTmATM4CGM2KDH9UneDqJ7QaBg6ucXUX4Vw3TP7VcqRfWUqq9wS9uTkWNUV2ex7DU4oAT1xBoML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hbF4yjJA5hgWi1ZVCejfV44x2rhDjxhT9xmSLnysEWgVy44sU6S2HTbg6nrV2bA6F9Apea3mJtdndbgHgAo8Gim",
  "key1": "5EH4K7ze7af1RP8dkURFn7dn3uWQSnyk49Q4yBRdRHmGCx7QvcQuYpvEWU83tbKhWbCkP7UdALcuQXuNpfA1GkyQ",
  "key2": "4n6srKFFxcLbVsmvbPgVqvER1BdU6zeqqw9UVXhyKJUC1FGhBHUM79jmRGJZ5seFv97rexAPEfv9VyDvucXxWddb",
  "key3": "4oscxhwq96sBatHzoa9w9ySTVv5yCZXzbEmhnMTjyCoN8ddQALoMhPULHJEw7daga4SpXoxLz1mxLbcUY3oQumzC",
  "key4": "EZ1pJF6VjcL2GvgeRHgU2EVAZSpSZe3nyVnmoMtxLvzbQYiZtYTs7dqaXXGQmkbAhD85p9Rnp1nBZYqnMXn55fJ",
  "key5": "2D6vNWyGGQWXey1hZcQR1h55mB6FbC6SzNg4EBzhccK1vBUmCJTpcQoSgvYpSnVgz8PJ8RLiayTicER18bioB7pZ",
  "key6": "poN6WTi5b9mZ49QAGadDjGY7ouNdGNdy2pyi6p2kQN27GgxJWvCDcdBdqwccMmmwN6RxjeQvVEB5wqQtXQMmcFx",
  "key7": "47PRmFa8wDaWXKHLy92GpQ8PDDEQ1mbjpeKBsYmu48CuGbcXKCZn6pZ7s4xZSz8x8Zduo9AQKGHs61rKSSXuSG9R",
  "key8": "661eaEuTshb9ByNs5bQqYcDuGqQaZ1HoFxyq6xfLkeyxnLFHFrbkwpatYMcTn6uPNMeg6QgcNxcATfu8jiZtFW2A",
  "key9": "2dPn6grdAQWdh5uuRSFLscvN5Wx8pjESfufv9eBmmEmy1BUgdraWoKHAD7NqgAjdy1xpngcyW8CVkzdCmHzVboQD",
  "key10": "ACboqrCoKnBWKJD5oqSX667RLKJRdz6rXwuRdh8mZhTowaCMAqW7DJWyuCFEXouzL45V53XqmMeQWU7ssxJtwnc",
  "key11": "mrQP6pZaYfRXZna97HaDqBXzK2FwcsoJsKXMybYwSUuHthYaU5YM5rtC7Fiwdd4eretMrsq2Wfk8MwBcEKrvBHN",
  "key12": "3nDkuPFd86ZrEoQsXHcTCg68TR2HhPXpDcCt8bz8RpY53csM1UaFBABt36fNYNQpBjbB7kzUZXVxoJEWNS3qFMQz",
  "key13": "3LpguG5R3WA7bBdfWwaMn3LfvCCvaj4nvc7zNyZ87z5PTSZA1nkGpftefKYzAJYd53ctku1Y5zRBwDfGwcQ32vXK",
  "key14": "5gi5fofF1arWd3JmNFza845iqwKST2hZMy2hV5vcVZXk4S7UUGwYoXt2mprxGPp75jYXgzzuncvuYnP2ssxmFFZE",
  "key15": "2GPGYun63kQtHW1AfKfZ3XAa7pDdii72nPP9uQgHS3VANBtYoXuxqiPavLHHUrdcqjusaYGrnLjQBkSM8X3egsJx",
  "key16": "2xdecxhBuiKPF4WL6gre6DUBjQAmYhpmEjfNtU6EaqcQhkWReyWh31T986w3GZjSUZMjYok3cbeZgd16QXCtAimn",
  "key17": "2ujxVHc5nYpyaF3PJ4Wd9t7gicEMq91mif5vjBoeLvyaXZtv2EZZtmtG9UAgnvSjWhCjZyAbKYK1DKPFiRu3BHPW",
  "key18": "2fRCdJQGkrZ65y6uvX19mR47ET7NnEYYxyXdyGiNF2P4kpaBsLd25tPN15Zzcsdx4foFj2RSwNQ2e9YdCbfLCdyQ",
  "key19": "4rM2D9H6uXnbY9Bd89374H6BqPdCVhDF6BJ8ijqe9vzEUb6sc2jx2sW3iJbK9VaCtE7jAkuDr7zTBY9ik1dcxKa2",
  "key20": "43fkC4WN3y3Xrqge9D3m1wGBjAFv9UWN72ZBUhPLu3k2yp8QtYW6jnjXKhCvQQH3KweurSw58BqhFn98UrMAYLoS",
  "key21": "3K7QRCVZqpUvzxbjw5X9RBM36tvEJormZReWHktpwUaoU4T7c6QKRC9NpRKpcs17jUHFuWHm1e1iqamP7JikQSXJ",
  "key22": "52kpZrDP93vgDcBz6R1moxFZyjc45U6NA5hQKHS9Spz1ggDJMQUpHATUvsecTyxCAYyk23uw13XAqD76RgkEnMuq",
  "key23": "4Au7zTXjxhJ5BrfpHAxt3VJ7xX84m5ab3MWvzu1tva4PxFnqc7NfAL4G26PSLu23LpJnyoXxxyoJjP2rivcnPe7n",
  "key24": "54h7tt8zS6XDVzNJTeKyw95A9qmw9sRSSAAzvLQEuwnRihwrZ1pbYDS23MZgBJgqaZwtDRCQbGkXxHitgizKmmii",
  "key25": "2BLYsnAUPRMMRJWDNrbBViDM6uv4m12qrdTzv9yzv3yAN9ARqLft66uQ8ppm2Fh7XngvKudVQLoor1wrMeA4KNah",
  "key26": "2DRFLRTK1vbJsSgHbhdfrjnGCezfAerpfcpC6WSFxmnC8t8oxPXFipzpzaqFtj1YLZGp9WEm9ZbpMU2tw8qYmqRA",
  "key27": "3zc5UUVDZEjU11KA7oFhXAW5T5HXuX6CiTjsYaB4Bsj6iaGum5nZEB9eUNpXiujewuYZ9APTd1PMwKmq8XkijmAw",
  "key28": "49kyfxRpKTMrTNW9yh7X4fq8K8aTEkXHX8vXbuWoyLX9C8S5DUd9VrAVWwoH7poptf4gcGtDectn6fqCozXz1UKs",
  "key29": "fnvi2t42EtJdEZBzM3RAknpnNPzyXVEuVC5UdLY61XngswD15Tjh3unGYvhPHSmKsqDraHGKM7b6E1HmowWHMfK",
  "key30": "E3mcgqE4f433NjxYscRwZgcPQ1gs6Gknay5P464RPc7Vvm7LQDdWZ192Pzgjh1Y8NmgeniTsD9i9PiCgsSZZLYz",
  "key31": "nhpt6gju7ZiPxx58M9LiGswe7yyobvNASfEd5xy8EqZmq7kff1uiKxrLsuFnaEHr7jJvtGn3SsGL8cDCJ2yCCje",
  "key32": "3xPr1Mo8hSdMtLqAbdQA8MiVEj64mrVJaL4DZLA69EQseAZnAomFcmNMeYXcVmwfaKWHSJRBwFSs43Zc1BZ6t7t4",
  "key33": "3Em2Q7YGhmtUJnH1FixJK3QpTc6aQmRiwSKZLfcdfrFBCGZu8A98cKmde231oPd7AEVjgsYX1GMytwBGZdHC1PkA",
  "key34": "5RwSkMVsncQpUhxhuWeiot3ZPsEb8PT4pnwURRLM4nzWkoGtPYEyKL86KWsuUa3FiH6rhekcpVprkJqHspLBE3b5",
  "key35": "vPuj5oa4hxjE7D8sGZdpb9rgGg2VemLW7stKDD1nQwjzgjCULsQH3mxoyrD8LgVF1pXD9sfBtT44YpYUNx9Wsra",
  "key36": "2XcxzXTzSx8pRnj1iC7Z1XecQzkh1zazWctrc8AtdfzNirUuHPfB4RR4eKGn9QgEQQhCU9qxoD21cXrC3xSVGy8J",
  "key37": "2B9kVHqoyRfMt2nN57gAg5yAsSk5pB4134aFDAE2JobvRrNpvz9TnaRRU1xZwBctJvhjPYRZFGm8fSxsZR5zbmoS",
  "key38": "5EsQa8wBPsg9rvver6rMo4XqZaWvSuDimn1Kr4FbWJTwwQH8kenazPCtUenBayZfZ7MSNK8uyDxx5jNevQn9vW8P",
  "key39": "w2xKxCvQsVxzSq7sAX3j5vmQyQymQ1tJEwYunjKm5fWjzsULjB1zTAHgciGAVL5JJKyxV6BgsaTwSVKLcR5ZXTP",
  "key40": "5fJYPwhUHQ2H3Wb6PjmVg32ewNeWfgRAUaGroHaQjL8Mt8u1ooUPkX9jT1LRnMC67HYxQyYULDcb3D6CBGVZXfRC",
  "key41": "nV2xxsXsZpgznwQFBcYBh3DqrRNGXMPGiaECA5ABfRUQoupMFjpooHEFETUK96AKLBpJbvFRZQKeMqvUwWv8WN2",
  "key42": "5EVk8wBhDQ3KCiM5dhP1E76Ca3p5nt1b1iCj2bTEcmKmkFSZaDoGZkhY1rY88xwkApg15FwxgcbyLFzQyaBEH3P"
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
