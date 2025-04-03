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
    "46nrGwqxTKwyHxBTjYFdGYycd5A9AQa38ixMFT7qVM5F1mPEuKpY5Guwj5qGnVFsTPFBiq2KXidKkucZZcHH8SVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fow1X9uE1QnXpNCw9kzmJ8PbnduqqBymv1PyTJMg7MHyto4zVh6yuQLaGCu5h75s71dM3NbGNoUJsjJk6An9zw",
  "key1": "5TpmmiroMbm1ykPW7cwJpu6aVXpYpV3HbCCqf6JTqLb8Exuq1HLdgZysY9FRzhDwpYxXCRsm8WQHwMSDysPXGeJD",
  "key2": "3BUw7YtjDTK6MymH21jNRF254y34GhpTJbuDB335axDonZq2hXPuf3BeQCrskQzvG46o4kNaTfPrBh8Lfosqs9pE",
  "key3": "3dBWb7ntPe45AVgMbMnWQiGnyr1ED6obLagcWkybiRq3z63CEL7yCnKUzE4EC79qq3pp5JCCutE6kg9fBjtLeBxJ",
  "key4": "5KAyq9tVj8pvSXFo8mcBZMKBU7twCbhe6xgXJrr98ybj7ikuK16XzcJXrjar5R37ScCMwAeRYBwxVQo2EK9vKnZL",
  "key5": "3zks2TZGCz3SEefRAKar8VkDM4mKo5qsXDBWVjwv9EReKKhAzVMgA7hAqNDreLGm9BXHSPEjsbDRRbV4tfsDSfVH",
  "key6": "4xuyPna5MQ6knTNX5C3NYyYcs4dojUNAhcB9gM3BYtue4XJsKmaf7jdyEMbAMfP99ErZKDtVcDLghaSiPgmycRK4",
  "key7": "66Q69SajwVK7fpbavAGaAbNB7FDiQgxJ37JiamJoSJUCBBVWK7GgPbv9NSaB54Hs2vEZJuRmJBGzuLgvVQ2vq1SU",
  "key8": "G6SEZPx647mC5ehVJRTFnxvVD8txZXVMLi1HkfCfDs7DmfVEfhy43DS1YEE2S1j5mjBeNc7ENLbRPDhqqXsFiXj",
  "key9": "586WvSazHfEQEgwkcR72Bo3GkEcMbCSQ2rHMQ3bqDgv4kgSGTdGCXeeQ6catyoRrWQEg2GHHbnn2Cvqs5AFnR8hc",
  "key10": "4THKVeQ5g2qj4zDgakyCvWWzN5DoSKHeqL2azhN4BPFvtr1GUWrR9LRukmCq2WyMDSSWv2megpycLDSSse7JBZVM",
  "key11": "mdGTNsD8ghw9hNiq325gaaeZ5Gk3LxQDb3PpQ5BMMbAia8drrzbHAtgyG6uJQu3LGGgW2w3Dn6vXDxt1NK3Bipt",
  "key12": "Sr3vArPy78zna7nV5HmE6ifK4knDcEQ53CcVu21FXM9BFUfmWWvqgMb4vPK1s5n5b1PXahDRafkVdYABVWHpVSA",
  "key13": "5zEJgbfHfBCfBGqhnUgUPknzoZq3e9BcbZDBaGWanxXu8Dxeun6QtGWUyficPdRhbMiuhPyDTo9Dcz9c4BLCCrpT",
  "key14": "4gWQpRPhKt1btwhtzkVSL5QJKqv6xxmePq3V4mwYt9ThD5U8JFsQMW7vozdBfhhpeBzo6btBXH79PCdehgqccvQi",
  "key15": "2HrVSo8KweCZgZLAquxF4199aQ5xpLjPUosF5J5C2aWkWxYfHmevv72ahCbkXY3JQaGnqsMbUjt2t3cN1GePhEjL",
  "key16": "5kJTXP3W9ijDTG9oJcTm9DayzR1EAqR9ZjLyy4zx6LUwgyF4q4uTeZhye5KqWt5E9eXMo18HyHpeEmyenXwjfjXy",
  "key17": "4HdiPACJM175Ef3p9vZew1Vchpyvtr5sENC6REZhWtvYpTxreHmBHhYp1XDEiiABN93suSdkUjgnLqpZhcHRaBMN",
  "key18": "5qRpBSR3aabFCVGhvAznQddRNtTXn6M3surcJLQmAvDhdSSKy5ba1TJN2BMAvcMy1VES93sB9K6ucNhYr8KQVQSx",
  "key19": "hBhUaRbzjtvJRWdRpJirtv6ifKQKQuudcsnRwv8za8Cn2TPfXHfFyXB1JKNp9AQGApx6Z2JMGfHkdha8MQ6f3Nb",
  "key20": "3CaPj4mEpwPmeRGtuoQKAX13Ay4qKG4Chwq8KhQxhfBASjeHvojNWsh63RsqwW1GVEVx1SVmeJfMgtkLa1xjgFkQ",
  "key21": "5YFscsBnsNhyFrQZ3MxWyEf6rFAWVhYxT7LvnjoipHKhrgyjh17zoLNT42sxdGFbLXfedAfCutqg3WyyNMFPfjDK",
  "key22": "5ENDUFa4c8ofnzEcaUzA6RZRSK7Codzkf68L9GBXkEwS8TdAb6GXrSXShhc6qRcpJ4XJ37NQNmFN2eyqQin9eEGZ",
  "key23": "3LFs23zsP7ivn2YjbYYXrHsMdW2A4kP36ebZmHNzQMzRaVWnyubwPshgJoFDY2Bowq7NXUPd2tCxbnr2vcddobUb",
  "key24": "3xQ7XQ51w6MnTTxiypWTqjoMBnTUv5LQi1eC76XLs6jvVLLS3vfTJtMC937UfHvDh2FztwUsqx7x87UuAFEDCurQ",
  "key25": "3qNznctkdu9MVWaPkBRBYfxes328bEK37Lnr2ic17JwxYAbRBnBT1yQBGNYd6SN8Qsgs9Lebf3xgozgMHQ8ZaeRx",
  "key26": "4EKZYed4U3Zq828tv6HsJMiksPBGZnbELNPDfLyMKxduUtaXsjkWLUEGW3c4XQrck5JJXWCXE9swPFB9PKRTP2m9",
  "key27": "4DjhwVxpyeq16c5cdcy3i8CESvb2i1CeYo9GctGYo6U4DRn4cCHg4HsxbyugDdn4kRw7z5qJMqCoGc1n7RzjzQED",
  "key28": "2UFMpzLvzcKqg6mVji9EV3T1HgJXE6rHCveXbSFAMqrGW2Hjub4ZcqrjB79YegYFLr1tb2cyrJzQV7XjwBwi8khh",
  "key29": "3zuX6t4rAN3tZ2oFY9fW9CJ2V7EYPF4X7AT4tvhuXTUA8kW8fwHuPyD9ve5SHu4gTSy2SSvAPs6Tp3Q9WQuUgJpu",
  "key30": "5pMbDRtSBPFRY1QJjrPtQ7ZNjU8rN2TPYzXk3xT5kjhWn4bFzS3k1CkbQG9Bkh5YfM1RqqGUaMQmQxQg3AaukfyJ",
  "key31": "g1XiGSNZFrtwnEp4Yktnkhspjtgb1iW8a3qxKgK2J3uA5nzzBw866qBkXEXpbXEaYgpqhesTc9ixWH9waddhrN8"
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
