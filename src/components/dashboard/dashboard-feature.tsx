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
    "5PDu5f5BYz1V4zVrSBogZBEoRpkhT6Nuj67kfd2Sf6WNvsLCt5PmzZ1DU2iJRePSoEdpawNUZUUAVBs6as78hea2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eSahQSZADLh5C25bhJT5wS3SGfRgLF5j8yqqUCbMMB5fbhofteivFqvWkhTUq9576ufrGykBGCL98EuQWnarqJw",
  "key1": "5zuZpf6bTF4BALNX36q2rFPGdPHey1g8DgzJqdNW1JDJKxWKFNmacsx2QdPXA8gfXPFMvAUf4VJ1Lds7f7H2rzrp",
  "key2": "5QjwEpsevHspAJYigaNizQrFGarxQjqRnp1dqvr712PYnpz4u6eRrght3jAQzDoJAsTeVdv4KJ3C4JgN2nfTFj6W",
  "key3": "FmDyAECCz34BDpQFbvJPVRf22gKAbr4xpvV6z87wAVm1BMnKpNYeqaa3XaGA17WeRi1GVDs5q2EGr6NMRaHWu77",
  "key4": "3qnbCgDCrzED3oofT31Adr9Usj68sbEvmUoH1Tq9KNTMzMbp6JGZhNsosD1kXdH765C1cQNQmWmGDk4ztgxKWXht",
  "key5": "4oFi9UV6HkfBSFGZPRiRGnWsv4FA1iBh65yjL9CN33eKA2xiSzERz8ojVsdM4tUopyXYNbu2JQSo8Hww4S918QNP",
  "key6": "45VjNkZjAXTs3McWE6HctpFNbgoQ1SukqSHb4nH6Wo6gd4HMioXgzsQv79JM85vbwsuW5vKTUJkxXBLPHu4G4qe8",
  "key7": "SrqJx5LpMZuaXQeMdUdPqBduJN5vKxC2942yGm58UFFQ3sRq1Bc3ceojiPhN1qWAHUrUDJVSxQfKNWoE92vbUss",
  "key8": "4zh7aYbK2H95PNNMYTfJEvtWfoypwA3oxpBsX7J7jSnzGvDG8RvMzaLVXXMJh798B9JGvTk8AcCeiHkmdyM3CHdM",
  "key9": "3coWdWWj3sGPtMUpzR4MXFiEuTG6doRUihAGVXUX6LHzRVPBVhHuDfstY4oVXJLCUsdRB7aU7qr2hWjjY3TZUvbo",
  "key10": "5iU58myAr2hsADe3ckYX62HEnjp3YgmTawGkD8npEqaskGZDEpXqL6ThVv91YNDjREVo3nz7e7gH8ncPf5PqVHj7",
  "key11": "3uFDXD7q62hV1kyVtFAx78sdWS1P1NHQociykTtR8g8GXg5QVTeATTAzz4ahUwCyxvkoPDzVhU4EKn8NCWTVw1f8",
  "key12": "56Qe6KEDy7NvAFfm2dzq9i592bApZNdcpnLicYNtnT5S91UTiNy8Faw61BEwNP76DZAp7ehvpQk9igG2KkeWwcxd",
  "key13": "2jUEi8shdSVi7TSkxbj5wjYwgfMtG67WHq8s3oAbYRYJpo3SNrPJkHAXEehjV2yWUF3pfgRLPUWRCWg78JPmYPq8",
  "key14": "61hXmYjpvky1fZS8LTZiBTCndzQnD5sqQmeyisJP14H4B4qJCmw9vLeqSMvvj3EPStcmyJyKqMXwynRLcnX2G8vN",
  "key15": "2mQtco9bjjednsWfcPPYrzu8VHsGWnZcV3k3u1Ppz8oJcurbo3bHhYkLkWM3UuLDWsmwFczTnAfAeGNhJUeFCW7R",
  "key16": "4ZQLFWnXSY9Fc6vYtT27gcuErRVApBPVu47GwiAQm4oCcsPRSQZrWxtnamknEQr6jrigDxEaR1piDJSnXu7hofFn",
  "key17": "46QQYbqg2oFn8HzgqhPfXcspYzdHH2ia6yH8CVFCpFHqw8Xp3r24two3faeJNeSX7ZkNhhp3uqbRnidtfVAuHj9E",
  "key18": "4U96KvtxVqpg45G1E4zkYBBcxHGgGQPo9xsin516BamWMKxEzz5AeYEa5r9ZT8n9KUHvfoPXjsW6WUzCj4ErUyDM",
  "key19": "4cBosModBHWp8XtwMwW2haH73pgXRyxRxK5hnQqT9Dt3t88CsesXMEf1PQVZSu4K7VJN87CLXX54oA84PANDrhcD",
  "key20": "33fhEGNMWNz7cF7bZo9wqe7TNfoDcmfMHQiu5kYYGEiWrAwdy6S8bzSSMXA7WxLjJZKS8xZo96NrVyE7XCorTBjm",
  "key21": "2zKZevazXksuRYvZTxY6sU1mPZENHVthLLKfVupmL19KyNG5cdxdGXVC988ogXYWJdMZQ1hMfNZCt1LihzpLQB6k",
  "key22": "2HNRMMohBSFjaKoLKH2WsVgR44PYTovSVQAkxLbrVdCPmrcYQjDhqBrGx4MgJUAirmpuSjc5J66uHy6CxWaumJiq",
  "key23": "3geMmmM7CTyKGNYi6KoAMigg1SDmQatsFmcfZwKGXEEksMq95b6E26XiMXappDn3MQiAVrS4zmHyPL3sHybZsj8U",
  "key24": "21n2GHKnyaHxuaziwHzvaTWNLFqyHXB6jmXqVAaBQoGcUaHJpw7STRnPxrboW9NL3BHgV2jFSYvFMVWbsvxuDkdD",
  "key25": "4SLAneAouZLn3jZiw3LvqVzjofLeN2EhttP6CPvBu9RKEQBogURFVWZDEFWt64i87VGcGi2EmrHvCh9hhv1ggUgX",
  "key26": "5a5kvcF9LzWYDbSeBatKGY8oiBCUcYqP3hweT77kjL8ZSHiFX619j5Ytj7GUBMnxY5N3hxDUonaysjR4NX5yyR3L",
  "key27": "5bAP1ernBKgSMcpdgXk6eSGXfj6i2C3rW2MA7BmSCcEuAKVCFtSg7qbQpujc8EvWMoFdNq9Bq5ehtwRRtneEb6B3",
  "key28": "JZZkqHdAtRRr5jVgaEvcpMomUzCvfEPwNnY53r3PE95dU2dNBHao6VCkewKpVv3yc3y4jWDH7prF6CH278647MB",
  "key29": "zqtnkmWMXiP5gDadCwy4iamT2UA73UbobSYtCQfAPN2tZtC5zWgVoainTmydb1fRzHksK5DXh5h4HHZhKjviqZt",
  "key30": "32EXzqT9whD3U6y5o5SfZD95W54G5gcw8ffAW6Fc8jRP1aBJEom9pUhSDk2nRUDiPrfM4zPckKZTC3s66gTYGQcK",
  "key31": "4yf6Qd1WoBKwaMXjWDBcZBC377XQEs7meqmKpSJQEbJenn8j7TGP5YCrCSBYo5YhrvEHLszUbsvaNarxdJzYNGXG",
  "key32": "34EE1ZTtqcBksXNHLqsGbqG2pz98WMicz4MCXK9kKUsmB7ZPcbqYw62fv8wgdvXSyAQhVeB8YxTq2ufqxPGJBug9",
  "key33": "5GADg9rh4rvcXo2A8L66y5tSCkkeQEKTPexc7E1uHsbnMAXHVZ4sEuzcnjRJ2mSjY6e7uHT26pDAW886quUfq4WE",
  "key34": "49DwHUQXMF7F3tbDFnDSSVnovKzUr12qjMx6moGTcKPSAyaX2UMndg2unCE5ANeo1ti1pZHg5Xm3PZradEisCfjc",
  "key35": "4rRBU1AJ5YBt7wJdeTGVgk4ignUPjN9BTFsnHdctojHtJ98X2LFtRojSfVAaoJ1mbrf3okuu4EuKNjd6mFa5awZM",
  "key36": "2gnkNvrjTjg62EiTMqa4kSfeYXgqKpoycqKgcWp1DQbvyoJBPgr9vpMAi4KSsaa26fFgkmcpTVfmJ7pNRh6f6Uty",
  "key37": "3TDGGoFzQ8GixFwmM8UYeAGh2Dz4zGbsYRsVhdzsUXr8e2vMxLazZQgVU73HDYpiftbcAgsXQSus1iegep4uWzVR",
  "key38": "3CkELa5aqtEMfxJaLSda3TJtoLuQU2m72C66duWT64FuXsUFBEMVtnLzVdKMf9MK1gufTkFr1waba2Eq8zMky9VV",
  "key39": "4UDtNR1VaLHENSxqrvamSwM4MxBj76XJp2YfV1jSoPp8XUaUvJkkD6GUZwkdixUvcJ26UDpsAPBhWAAQLpg95sH3"
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
