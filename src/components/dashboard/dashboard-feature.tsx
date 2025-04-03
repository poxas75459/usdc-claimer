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
    "29ViEumaay3Dtf56JkWmJeUfGFcSiUaJyWt9MGtduqLaaZ1TaGokuG3P86oVVi6vS77au4sPG2VYAgLuXpQTeVts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYGQaM8BkrDd8HGG58Ez4zmBTDDRsxwSM9zRhEWCY62eWBzn4fVjLfexMwuS1uGffAPgKzmJadTTPCNsT88cmHT",
  "key1": "5aAv1N7tmW3hE1z5DnXBZMQzunkc1rnymHxQjDmstQoYD6jXwAmijTZPWecnZpzqJ8KVMs2t3PtAmX5hbx745P4Y",
  "key2": "5ro27JnEGKXXmMhwZgJKPyvSGDag7AWP2kToAnCyMSQPCwTAbGs6bForSSU2hwj5RQaGxKoADLGNAHoeWPwByXsf",
  "key3": "zQogMqfi4b71MquX5ZmAk5oPuGoTUKi68Pf3jvJY6U6nAPYYReM6eQpyLCHwjFCYYutYHnWxjbz124aj6r1k8zn",
  "key4": "4b2bbaRRdZPgrDygLKfY5V2ui9ZDju7kNR5KhMBCTdnyqMNeQaz4NUumH6zDkJbqdJaN1SVQwYiHN6VhHe3ARjpV",
  "key5": "2g5bLfVq2FvzxAKRHksoNJcEsmPt5cPojGdGTHdQ1aE7XchxzTQv8J99V9iHPfeToZnoHb14FmYaisRzksaNxAa8",
  "key6": "3RwG4krxaE1LZYy8rckb2SovezJC3QFhek5FDBodH1sH7DTe6QKxdz6rL9s9JXXn7zirgb97iHL71Jm6zPp81Jvn",
  "key7": "NPASFVKRZRNtZb6NJs9bGbYJ8QQYe9fmzXNNbU6NbNXb35PeWy9RBS5nAYc9bMkBAqTqfFfzsT7RQJVuUFvZjvC",
  "key8": "319wAPk8kF1DFVQSyL7eD4aphYh9pxCZ1aXihVRT64wWfxg1yVB4QtcDincFAZJaPcc9N5P178sZXZYxLSLWCZac",
  "key9": "5stcJZE1S2skrifbNRiC72khvuWJ3ZhizjibYBAkEc4jcKSYpaFuap3FfXvT3D666Rp5thY8YQggFaGu76zoX1GN",
  "key10": "261fjLScvkRg9ggAKwJ6Gaw4VNHP1uDD2FE8wRXRKMLEpUcaA4iR4W3os488a6KowkQv5SoFmdyspMECHyvkcXCF",
  "key11": "cZVbECDJuqZ7ebsyw4CweEu35MxrretYCjK6QuQq7okszmVHTvRCWRTXubwPtaEAFHXMMDV5qu6AzhDrbE74Kz2",
  "key12": "3ACExTrxuLCzpbdu4tcvhL9B6PV4cnkPZGU9fpeJHC2KoDd8wWU7D56wK6PbcH1K6wN9hCQtc2CRmqUK2C8dfsgS",
  "key13": "1AMpfXAmRNV17Nd1spLJb3tfP7GJejFQfeSuXweARC8xr8AVtHPAJK1CXyRFRPVFb7hoJQLoqjPu5aVGrFgocDo",
  "key14": "5VzxLobUeqioWXXbRtxQdYdVYBeui9mA5Dzr1HuDoxPw394vxrRNEfmTV37bhbASw7P3Numo1KjX1fusWP7JUuAo",
  "key15": "4qsNuVh41m4rUhS6U8L9VeqqmD7HPKouMXibjHTYT9iL1UgHaZYUDufrzoayVinraDqQxdtxyFNj8ptCHSvDLTE4",
  "key16": "4ke5mijptVYmw8VRLCgjqTkSzy52YWUSsF1BTcdVp5tvcwcvVuGmq4dM9RMpGn5tJNwwk7ubehDh7ryR2Mmxmn21",
  "key17": "2vRMQqieCp2PUzsc98mdD1zcQpYJgNtQbQwU2LnobX7PDC7TwTvcdCMHAswy1qme14yYR16FDEnXa6GurpCXucFo",
  "key18": "4Rc4wH1mFs8FpdYdFJojnap7oDYrU33H4kyZrD8L5TLAnHMJYX8SW5UprsY3XU4hgpg4Pn4NxXc85gRVs4c6qsWa",
  "key19": "61gnC2C7ZE7eMkjjMKsbKvKFe12zpZCg9tkL9r3bdMbQTo8CgguWEu2AMpbqe2HLXethfXpwMo72RPfJByHYJ3Np",
  "key20": "5VunPutEBCceU3kzma2HUBCVaybQNEJmBH8jBKP8GviRUcCctssJiwseNeRdZYZgoN8MJuMH2LgB7aC537qb52Pg",
  "key21": "37io7pomK4NKi2DT7en5oFUt2HnbMgP4WP9KgCCNTTc3Fr24kdHaLS8wyE63iMB9nHCNUtD5dsStArX1Lp1zNWED",
  "key22": "2JwjxqAaUd3wSbAjdrwr6vnDmqaJsRe272jWf9ncdbL1VtoXtfYNhkVN8dz51VvM2daWpDyW5JhgH7jx5Y5wPvA8",
  "key23": "3agctGt3WCw4MptBHWEh1vWguNNj22EzUDYs3H7L4VPczgoVU3FgKnBn5jHHtcP56UwJhpDYt4h4G9jUAhnYbToG",
  "key24": "5AB28vfH2ZcyTmUYAzeFMh4FWfpAatGignQmvgqzxm7yv6mmNpWB2hjr6vMgV4Yg9nuHvrNKjUPk6RDYYy8YiDZh",
  "key25": "5YQeqmoUSLJaigj6U35kfxmeiiXbiEpAWmpoXH9Hna93T9wfrsjTN1KBuAtKQKm9rxhRBjm4aX1KoiKWnnVTPFsb",
  "key26": "2Bd9adksbq3Lc14WM7fwN2xTj7SFh5rCAEtmrDBuj1sDmdSmF5xrt9vJfrykiqN6uTShUxuNwyq5yKJECKtsZRFm",
  "key27": "2KgVPAEFuMKYWRSQAJhkgXZ63acFbCraje9brfiKVquTYfJRAhtDTpULN1afSZyK6DEzo6cye3bN8UqBCAQWBTJv",
  "key28": "CLSQoNu82GJD87Kf6aDkpT1kYu4X5Z2hwh6LNospWD23JUmk5eDXNQ7gB3qgAtvoxXA2Xiz12ebFd1MovHxiqv6"
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
