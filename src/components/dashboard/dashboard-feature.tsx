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
    "4GB8e94Yvs2YZEDj8xVn6xUg5BdndtWFpfDV3Fqj2vHbLJFepytKFxX6etG7Ckpi8NMc6AJeYshYhREF1V9myJyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKw2QHj1VDjqx8wYDwPgTGaYt77QJx7VxQk8rCwQm8nXJXxkxPRhHhkw2G6xsv4whCk2x7JhFNuKJ8dBDgrqce4",
  "key1": "xYmefvNgLNRh6QHcHHGCz1Tb9b3bb8GZ5pNUYB6CGSrMQTAaVBv6D2Q5DpC2i7sLuNRWMoPVghMy97n9gWY8WkH",
  "key2": "3Fdj4UdGnFi4Ltc65KjozGsUcdAksc9fLVJCRETEPZVKTCPYbKem58f3k24PKbRmTcBUctpaFvJvhQ9LAFc9CmE9",
  "key3": "C6wQ1vtugvy9wCgqM1seHBziYn8xWaSjiShEDM8QFsUHjyQb82JHyavTusngDmqSSqDe8EUvNs49GnqgaysU2e8",
  "key4": "5v6EusTkH7xmR16ars8b6b5wnvBpakHVVPKKHv7xxzQjdKBpp4XUPzMZWW3E7fXXJBwaBB5Rsb79SEKEwBCztBC8",
  "key5": "3fUHDA3mCCasDzGgu9QhUJhsed2ev9L6dKacCv9Spw1jZwuU4wYwPGGKLqxTJiQEXJ256mmMHdcDoiTHCsNvbn9M",
  "key6": "5x2qqNwtC35vf5ASr1Z2pEPgZHVVurR3fKHz7w2kywaoujk72D1UmcVmXMisc5N4XvWQrLarF7EWQeFhhVxpGLtc",
  "key7": "2mmwfJBS7jLuAJ1Hn2dwv2UanFpgsSoTMhgJwr211FYx1Ks6nHrv6KkCe3BjedRUtpqe3GJVgkCRNSKu4ZXSHm9g",
  "key8": "5iqi9XWVez6bbejxnZwzL3xDt9RZNqhmnjAiFK65K7v1wXJLns9Pu54FA5C8m2xFCCMXMJRS2o6XPWGW2WKCtzNX",
  "key9": "5yPWNJGBk1JvEGabLdX8s3J62dJvUyxZVnbb4tmgQVbXQGwyhXKvMFRy2TwNXFL1hpyWxfEj5hW8hycRTdsVEDyj",
  "key10": "34bc1ift5UGaVYGNW3S8wjXbxMxJUPpbo8N38hKNWvgp2rc6mZbxdxzdwQAtpKH7GmeasrCbYyVLYjLBAMxBgPKZ",
  "key11": "3Sb4bqEJ5Yg4TQ61g1saDjXyrjeFbgetCzfy6HQWnigkp5WfSDGGaMbRqm6KYwm5MK76FY8ZLm2y4wjRgbSguqvQ",
  "key12": "2HRqbW8dkFQU3Rkb3GLQGBo4SJK5ct84yTgBHzyKRtqTPSYyAj4FiQvBUPnC5nM68YAcz9yHoT1UrdqCrcCaygsh",
  "key13": "3iy49WaYviYqUyAarwqZRk4NYrSarr5mDRABFym5ZZtMggsSBrrmqhfKA2oc8LGEJ4BxXRDWhSKJS9XvWSKwVgRf",
  "key14": "4TDAP3hfiKxSFiaHC6w4cvNTsDMPiB4Qtf8zFJNFroiYiFPTXckFd7vZXdekPxECt1EiVSB5JFeZtqFFKL8AXFU7",
  "key15": "sA6kwCCJr7A6HNod4frfiykLXkcVCBdCJGxxLxnuQP92BBsm1qkTBbxyr1Wni4tZeF9NK2rBPEEHXjjPGi7shUZ",
  "key16": "3cE7NCJyMLVYFQHTnoT5BNdo4sKCZxs29dMD1ECtaL9We9NpdXnJ6aqpUETcpUaavjSNQ2YwJMpE4172bcqQphtF",
  "key17": "2eAtVZ6tS6nhFpcYnLCCzRAXkonyXo1aHvebC9MXdUBhuWRhgsb9vakWk8j3ifdMgui5B4CznF399gFi15uRUnkf",
  "key18": "xMazKbpyGNNcfoCDcvYc4Mg2uhAyw66QziPJ4gYp8eV6F1wAKVoc1mnbwA83sfFLPRNduvwtAAWBX2ZCGLVfJE2",
  "key19": "BX6gDdoEXchQM5XhAGhBhm3syqqTxZJ5ZZ8HwdArkhqXTuDAhxTr3hpw4vDJeuPgXc5urUQ9923cCVkPQfHjAQS",
  "key20": "2Gcnakr8BaVbjzopwyukq3wGagXRyW612VLriC9w4rKuYduD4bPnA8hrS1snEm6MHXYGGBJ52svujpUKK1wzA57c",
  "key21": "3Q6djN52PwMeiZnPSfntJV3Fd3TNka49HneSAsFvF3ixi6nvF5KF3uNao5rQDvWTaNdRUacZjRfaEjskdT5HuSFC",
  "key22": "3yq7SgopiXVNRomGn7UHQsDRHwupzCgknetWKZFZXaptE9gip1ygWqtkwLyjgx6gdvCp1SPRhxhcSNx1geDSpUBW",
  "key23": "28fBReXauYTThoS7kwxXVgZaQqM4rtbir3SLqkxpFrDJBF9Ch1aQSK6o5txefXTktveJRbYoK4cAg9Zciek5YT54",
  "key24": "SXcY2Qbqckf99DSRXKjmB3mjfNyDxm9GzEh9pcexap9x9SxNP9kjuVk8YDdTWjVBzkabbVsq46YoVsWw9AMxxV4",
  "key25": "5QdPU2YBKWp5eeGQUP7KLtPTd2HMJwEypN5Lg1khXMXcr55ZYUCQ1UnJevM8t51jRyBwqmv5NmpmvCRu9RtQFM7",
  "key26": "52Mxpa9SZg4UDtTRbDsUAfBpPdPDBQDhNySoC4rEcH2hTCcqXWUiTkRKTM4GPc8RNvnpcBd4i2ZUh5EvWgt3JH8s",
  "key27": "2s6i9WXk8vgt371sq8mAxfGknT1rTQTkurMD1THtNxAQCAu2pSrbwAWcWbQeB95qyL33Ws7mmSeNRZnvHPkYad7B"
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
