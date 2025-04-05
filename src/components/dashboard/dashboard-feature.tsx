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
    "4UBMK75ptL1GUU41dwJLG5UzuJZ47NwTmvfSoYDExQWfKgeQJbZp9f3AWq277iFDpa4RXv2QSAsGH53tuFcF96D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DpJrZFo44muZVW9GSccj24nARp9fHbcKhmmS1qZ1BzUNzEckH3VKjAAYrH5ZAmtRFqcQt1SdVVFf6bFtyWo3cWa",
  "key1": "3GGpwiVLq8AberWXcSuNTyqRT6tFwyxefrM2diFM2it69NTDj34oZqCk6g1nFtQ4UjCPR66ya6hhnJEMitKczKvk",
  "key2": "5eE2H6dfkewf8uJAeHopTjnsJ4CP3nY2e5ie9hEC5JiRtQsKTbGG2ePjG8QAfBBkvAw319YZu42RFnMz797GwaRx",
  "key3": "3ER2C2DyaaH93gwn2WWyS7ciuSqQdA8hY3NWB4jTNPRKGRYHevCvdCTUuRk4Papbifpz2td1pZfF8CYosZdLXCg9",
  "key4": "5HbE1XQT16QgDBaCTqjmkdtLf252W2U7tCrA31BoBHoi6zZSt7vq1cDLcsaE7Udwfm2tg2VuxWuA2vmq56Bn54Ph",
  "key5": "3SbtkdeTy4PjgnVjR9yb63mqq3hZGrusWSJ2hHGLkxCLrjLaTRFz9pafa481H7UCrgjVmsZ3j8imgmJ5QNuDPGEj",
  "key6": "mSsQ3K4f3aEXmpbeFfs5yDupD84UcVEkStWBACdGBjfPjsAKwtspKpTFuCsBcBVcUoAK7KU2WpvWwZCpbVfHQSo",
  "key7": "2sBknx9Ws8LdLa4do5rPAevhi5oFyxRebnZmy2vRawCNH4gxKnQcDdJ8fKhijkf4uMFPwfWuo8A97pzT3tmi17i",
  "key8": "jMdrpLxuq6kwBVT6Cb3weCXEmBbVDrZrknBdkEPXkP8oF1vHdotgZ7Rgxf5MBMBdGEcnPYo2tezYk6eLYMYNtC3",
  "key9": "qGGavdGVardBqS6ARGCwoBS9rUgo9tb8nz4aRj8ytHxvAGQ4LuxirPYo7n5ZPzhy2SKz9bmjsR7CerKzVZAqUx1",
  "key10": "4stFQg64dzceNhpxJQZzdbwxiKEJEhBSdLmSmWC2yvji2XcTwWkZK3m7RESxRza1gYYWQJeNvASeBRmpBJosc8aa",
  "key11": "2jurS7KSRzEEV2j2M6mosg5Tgf45BgbvCpWsGJ24978xyMSRgLKtA57XhHETtbSA7WapRBMz3LEiSWxrfNg8SL9T",
  "key12": "SmujGUBL1P4fRtC7uFreoco5LH6eY3jrYx5aNPjxu1YEvcCGTKHhScM4pcR7oJEsteFgw67uS2eMoXpinZboR6M",
  "key13": "vh2ZAxZzwkFhuWyBCZKhtiCJiB1jP1dC88MMdmGANsFGf5ifX83zFtFuPuuKXzZePC9AdyeFwxHUBw2uUS3CjLn",
  "key14": "5rwxChKuGt3THuoWsfhA96qyC9sM5k7m6EdFRwrYYg5GKPioGw9qKG1CmrxGvFCi9gAD1zA4FtxUHCvV7VQ96ZdY",
  "key15": "3fCHjJssDnWAd4s8ssZXxbr288rzowS4fSd8AoXgsPsmpXurLqAQ1QFgGhr2wb6EK5FMpwrfouGsorQNrYc2jYFJ",
  "key16": "5aJeTaHDYk6kGAiaDUTWYom9pFxVdAHTMXUDciVbdgq38XFEWsvRTUChZuhkuf3otefVfEgzJLwkSGLo4REgXRTD",
  "key17": "2QcSB9cney3tz89VCE1gfGDKsWPyodno6qxJxRkzg7XgRvhRuevMzYMmeiLEAXfaxBq3XSngSu3F7Rh2esyYPLJc",
  "key18": "5GM7JdKPZ9Vpse2zj5P5nhd9UwJrLb7YnTwwLYE3PGweiBPJXorZ9fM3TjzscpnCQnSyV4brKKHskCf2QLdAzknh",
  "key19": "3W1eFwYZACHgkwbMpEhaFQrX8SenET8VunzYG1wvYef8YCq4aYJR9hyW5ZqUwbtBpGcX8EH91preppYcrxJYAiJJ",
  "key20": "MfqMPx7eujzH6cS2Pxg1pPQTPTxX4CQG8J39K1WLEASuiELPfQsQ5ZsjRtCXn6cBf1Sh3CCVzuTtWJqPX1yjdK9",
  "key21": "CucNExUFWN3VXuhQ7Bsw1kH2Dpj2vtv9zFGkNjn1yNRQRTLPUzTGim2k48MHWyETFfrromWPoeBnpYjyh9C11ih",
  "key22": "4Z4D1W5p4cXiqpLPMYMcXLRrL7obvCnou7RG7FL5LXXeNWvMgXTDrzAgJzyYS4NHbdD8ipPB9eYxH7yrZ6VZEYyk",
  "key23": "3ge6oMfXQyaiygWkEsxwepbu39X4JjzNHNa1XwG1o37KciJ4UddCu1hYbuCoYvYVm1X7LPYLMPKmT3mqdu6rpTGB",
  "key24": "4fHBr3vhcyVF4DoTY8XFKP4vPAQPaM6BWEMp5FKib7MWvkokngCP4c7Ubp961kctAvuJX3cwULvh1NT27yDaKBeN",
  "key25": "4sAR55puxs18mRiFfMmAA6saoQ7scQB54oYWY8C1SvT3pBqjtBFCa5mFWjfzrxupJ37vDHgFNgPqKUQkXb6HnFTu",
  "key26": "c7prvGrN2gwhqj23qeJ7zzoCiux9H9QHqqyS4ZYhqz8tPty5odMpo7n1mBWniiwHombFqUGqvUkjWyomvKtFvST",
  "key27": "2vueQKNfi5FXLpNVK8rVFKbFsHB1aDKgh7qz6UaYNMWdpuTeKkUYYNAt8G1b12MftTRBif7n6bK4teKqpjNZHbaL",
  "key28": "jDVBdK3yjnMeeuRX9CDkRigxMAwNofwRWEimZcHsE1tQt2mi6cL8JXCFm1cwFwToMJZK8cQ3YYoXWNfVh9LVV1g",
  "key29": "2Tb3LUE2dzE4wamHARTanomVXpN7CUjDJKTFShcF5hDYwErSKSUxzC9f9pMkCVBdpr3Ky7CAo7K65k59s1c8RMwv",
  "key30": "3YKVYhYaCZsovjQQ7SVRUmKqjxnmQgAZDcEkrSJBpJu91uT5nkDs4AfyqoJjYGk7171bZS2tRCvBrgiFuRwv2FhH",
  "key31": "ByxnkkjdYzYcmcess8nHdZbVAt5TWP94gKpnxExG9jB76evos7ea1PEFhe9hmq9JYUpZaoxpMV39L8xuZhkBzcd",
  "key32": "2Z2jCuZxYNJ8cLH5MbHY7PR5PnokHtdxPHgySEMGCtQ8DsySUzJBNhwt5bzDviUtN4W4oYs8Baf8NbmYVaXAyrki",
  "key33": "2Y5dCBNAyRqSZV4NMxAeSyWhtBSDYfczMBHeK6a6sLJTwphwQpodaVXQzfmfDP3uLs8S36ZRUxF4tbaWSKBMTNGu",
  "key34": "5rF8yLtbitMkPPUEaQGvkFaqk6iBGkrff3juLehw6bTvuKgDM6quEsNrGLjh65ypuJfxZzefi53Z93QTUwz2kAQf",
  "key35": "4Z4J1YHhmB5V9bWmqBb43tzxW6SsdEntfWmV1JXDyuPQwdEbiUHMALyCUo1z5FL1e5aRPTYPqpMVYZjiaBbdGcrW",
  "key36": "35PLn1A7GwKuTDTCbjdmUACtecxmG4u9BDvpgUZrc68Wb6vKosjk73Vcv467WpLyfmWyqk8RJULiPLaAW6PZJiMA",
  "key37": "4Kn37izbcEbsc8raRMgRkbAdbuUKBtEPEeWYdnPCqKcfQ2hMQpMzybfnkwv413BoFGB4irADRzwLgaW98ppsxDGo",
  "key38": "5PPvX9tEv8JhXGmfF7mq84MQAx75LvHXACqroLExeSJQCKYYQa7kW3e4H6iY1CySsUBSCgiWKKHKc4mt6PVjwtAy",
  "key39": "2Use33e3nFb3Hi9vTeaaqeHxJTuofkZ9L35g4bCX54kMPXZo8GdPh4HU7jSidjiSa6fXTr8aTj35RqpTXyQShDWn"
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
