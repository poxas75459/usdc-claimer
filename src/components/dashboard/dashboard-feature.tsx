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
    "X1PMeLRGbTELQoc4bgeoMTw6KUemrM8aNM4MRXcBxb5o7j7Hzn28sNB91kZimAJcEwFtTyFqnm5dyRf48pm1WoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQTECqjbRpd2bvhiECiWs7pv9e6ET56zc44BWH1Nm7bGFzqRdGxWpYSSDPk829QtqAfuDf9zKV6AFiJRjo28FiJ",
  "key1": "23bueh7JUgwwhZ9Xg2rAiZBM5J9o7WLpnCVokdTjDhqwJwwPLYZ9Gf3zneQMF5DT44ckYoEa7BmXk3wtoHpXfMsi",
  "key2": "nydBeeLQjAKwZSC1bgUJrDGtTX6MvtUKAZzmQizEtHMsxRHgrgChgEonc8RWjnk3Sji4UCpmKiybdpKvAKYpXsa",
  "key3": "3SBGA8JxSN2oM4EhMae7seSpdKy2BM4pt8h4eANMFLaFtdvdBTGm63BbnsT9qNmCo75XQfPste4G52BaE2MszVuE",
  "key4": "2bJ7Bpf4XBtvqmkkWMuALGzvQbG2Lf1i19HB56jrjrUNghiXWYdzirP2MmnB5jwfvovf7EySS3bymYCsUk6U28Lu",
  "key5": "2AzxKgQNgCKZRcXE1aNpKrzAfFcwY5GbQtwoPjQ1ETw5FbFQXkwu7p6EpEpEtGwdUQuuRGsXCHNPUEiSfPB6DykZ",
  "key6": "U36KM6BdgNnvbea4jxG1JGVe5TXg5diTHUF9wURzaFVqmE6xJGcVtMBedU5H2TabMZ7xRt915B216S7QaQCjNrX",
  "key7": "3596PaCbR3N3gvofQZz54fCwDmCjWEYu1qTmbtPBqRe19afbQLELzYsWfpomsinVbgSN6gMCR9g3xWwXamh9j5jj",
  "key8": "2VGmhvGtqJUY95jBCDS8XrEELC5Bjm16BQQUs8JyxS3rGGgBvETrDqwxMDAEsEHyxWgvvxrhZCx2ZqHUfp54NPZr",
  "key9": "2Lvyk6FHXpsRib5ToJ41CUqkN95gvhPYq1P5m3w8qzWWKG2WFMkT3mc3nQ31LkeZdVeDggg6mvZiponH7HFe131J",
  "key10": "5mLgHxvU5RDe9yefYd6BzDxKTT3CG5ww5ZQ6adExNsvMEMDd8LTzJmyKSxX24eDCdHfUoMy4fpNVwm2tRjPacThu",
  "key11": "2egHuwWSCCtGmAZtoWRYU5zkrtRghp16H6KAbtN7W4razUbvDsXNTy7TKwTefzTGUGsZcNAVih28ny3FxfJ9yjdz",
  "key12": "2CU7d8oQQpyS18bheU71Fr1trVKzrVNJg9SgSoSqxAgZdTw34aqz57c82JnmdzbKN1ZM1vDoXSmYoECBEqXbLum3",
  "key13": "25QqTgh6DFC5zZq6FPzLwCPmmTFhSF5nHcq3ExCwng8LBCTvTWNTvjEkwmSrY98QB1m31QmQEf5twqBfEjwimWnN",
  "key14": "2Niy4vcfrH3DjJVNhQYXgNkSqGvcn5s79dkYBqpJFkZGLCA8eJPbFG1HZBrf9smtMc9zqnELRvYKYnsL6uY5X985",
  "key15": "3U7UaewxnbrC9Lkk21Wp1tet81ZHu1jXo7XxfhAdpjH7WbjrxaMwaxvraCDHw8TA4F3pvLQ13cEM8F54WbYYXytn",
  "key16": "2rS4mUWc7ttR6tp8nNZ76bN8roryUoHYwpvSaupPxa5SsCnSizZmFiKa9iBNhZmMjnPkcLSDVi9emf2S5T9WQLsk",
  "key17": "2q6eKvnWMNmUZh57dbmSeDDzqK9saNZjYhuBBYsvpkGmd1KxjuL2QBfLViVqiN3LAC4nxqHXDCy5NwnHSQ6C4oVP",
  "key18": "4jX5qpPjgKaRNytrGk6wYxMuXXztaGm2VwNN9jwURh1z9pVmSTRFT6vq5gsDnhCKsdJFhheG3KUAeXHv4T5kf9vi",
  "key19": "4G2VmStCsQqRvRb9c7Z4vZ6DazYTHyZ3wT81REc35ZLSaDR2aTgDKFn22dLqzYZ9NwbW5C6dM3MMMbiq82obi65h",
  "key20": "5SHJCkLM71Z6r8diw8spxJ4zEDHESRTtNgbT79gHY8pv2mJxCtyD4XBRR4Aovi5aA6Jf7XEWVvvKmYHwX6CoALqc",
  "key21": "2AqGTc6hzD8W3c41GTWFoYq9qRAdEtSfgNSSgmxZb79PenciJXV3eWyoN5Q2QFKwVCsYNz7tytPK87CaCxmv4vot",
  "key22": "4qmjVnVtEHcbH3rC1BxwPVNfnJ2Y9vFxn2Ht3hnwFtkpmyofehof6n4ukf9xT7kRMH9DbKTtpEFqWWukFUvTg1d1",
  "key23": "8zNpRvQ5k7UJntbjwFzFSXqkPVq6GAr7dWaDTcwsqc3MVb5Hk6khh9UxTCDNfVkCdHZgGhg4jPK4qvjoEezez7Z",
  "key24": "2bdknqMtfEoATnyx22KnDd6L7myU7vXDHCdRGxwMy27Sd71kRLNeoGymsuSdkXHk9L7rUkiUMMk3J73LwESjqb1X",
  "key25": "LNBbmn9mG4Q6z3KvbLPzDBvjPZLHTDZ8UwWDgUpQFjFspRcf8X8o27Fv5kQESReqyc6DsRJb3Fk4oACnYo9J8Gh",
  "key26": "2Ua9iKCAUkL3M65aVXUySZeMvQivHjXanuPBVr242mscxx5UQbK4ahWASxUNYyf1QYtGMfmWhj4YRRoS4hKRBz8f",
  "key27": "33Any6FiKgyzCkofEtz3U5p5hqdNHdw3S5JfRuo3yJDvSSejQ1ReBmd3FCnAXkb4XoZqRWBS5Z47VG7Hdjc5quzD",
  "key28": "5mpfhgUSdWEuNNfjtdyQmn4VWbjpsFPkvM2CjyyNN62rGjas1QcDoKmtcGntmTT9A7Z4CGnXjRVApbgP6Z6BQozQ",
  "key29": "5WNSdcjSzkt1Zoxfz2gmEu6UC9mMFCo86TK5z9QTiHRhPoX1pU6atzHezBLPnMBkL7psVLGveFmHmGEVi8zhPsbj",
  "key30": "34DWgAF4n7UjsJnKpqd7RV7KWtEv4BYkD7LyRkiKvDTcMvsVaUV2tToC4qMRJ49YrvLFGmrYU98TdAyJv7FHVC3H",
  "key31": "39GEQH6gMa6bBgrgpivYhYkYKQwSMDyUomXzhwS86qZn88BUmfyiQopShDrnEU9D18RdTFnQUaFdtF99JcC8YjM1",
  "key32": "2N2og6ikKNNZzWLTzxv2vge5jiFAhENtfW9J2FmUhFVXQLhXNYvnVdE5cAy7dyvnxPk7H9yCzTv6eCzr8CkLB3eU",
  "key33": "58D6yHxtFAtSu766o84AkQnPyZJcJxyHXAmQXSptdNE1i9VSoTmVFqviY4RVfV46uhKLUgTncY2TCMJeYT48zUov"
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
