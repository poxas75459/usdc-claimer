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
    "4CD7JHxAstNWZAPiCt2Xzp3Z6iVpBo2HYxWBCfKCDgt622Rf3C3wVmzbAhcdYoeusyAGgg81wp1bXt9unhGW4YxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31C6RcCYicn8WKoG7C7uGcTVmvH9q9CaQoWtejDFLeNGeZt4QMAeDvXcrHkrq7fdXDq7dMdThyqD3TeP9vWUpeSE",
  "key1": "5LqwtNjZufBbGG8atxP3MY5D2yHA1mKbLP9vDtqRn2uiVqdGMUtYZPD1ts3soxrAHS7PKvLECSrW1kbo15ZU6m9T",
  "key2": "E9aBjTj2WX53qXRTNX6hUp6F84rsvVFNtE9gRqeiimh9Q5yScvMH5SgFXvq4X1Wr2gwpuhTkoHkU46p1nsYB8vx",
  "key3": "5iFD6ir5jhTP5Zxofy8vtFLuywHwHqevjoP1juY5Hbin86zxm1RLYqUaKePuHP4sFJq5yFkLXrMye2kN7C9QhN3j",
  "key4": "3ifJymVcS8VUcTB7ipUNydP1ReWyFWp3U8FupBok4u76QwiNt3fYK2HKskYJg5TpNJcckYLnikpZnYnuCBYDT9K8",
  "key5": "4VdGJULw8XqbS3ML3fhBjVh9YkXftvdgnqJr117ZDv1UbApgcFpqfddcgG6tb4ZqYiBTKSmBn8Xgye7Mg8tgLJsr",
  "key6": "32DJhC7Cm4QsErCGSsWvoXessYWrV1zNzCwQqk9oeZft4jz1tgMPvjM2GtzKEZhCFeWKHhdjP6nKoTfFgmXNd33J",
  "key7": "4A9QoBb9gGibCiJhTUv1wehihq9iBUxCd891AyeSybqsorPjDH5ig446CmuFmV54owyi3vEn6A6GDR6jwjX6DXcK",
  "key8": "5m4bYQnVnhNSRL4GY2tpwZxFn4dk3v8oPt7DgfVyu2rbbgPgAcnjEjWRcj2F1K1SWbysJ3nGmfPDrr9C1TBebJg2",
  "key9": "5RaZDy2bVk891B8utUE2BGf1zi9BBaB1xH2xxD3yCtXgjp377ZgYTajBpqkjUYW1Lmi4WUNc3jGo3y6sweAfwWRh",
  "key10": "4yy9EEL5inPGFPshqAxYriqUQMfZ3DYDfMzVX6gDtYSjRiSVQd7o3uVJYxVxmM53BQ5yExBcU7BdyiSGKd72wRZM",
  "key11": "okYstBR6ZZmeN4AM2Hf6EhzhZ8rL5hhRESGpkBfuwcx2RcGsWXeXCHkEqAEpTFXqAEzG9FZZDCAgtspvLHSeHAL",
  "key12": "jSfL5wfGaQynQjJWW5C8VQmWkF7H116saaaQFqM2qvGgMiYaMLEELTSrT541YY1oTuAg5fbhKGEoG3mkFVa4Lte",
  "key13": "5YWPxzse8p2gyfPUo3P25QQYrCDcQD6e4ufT4goBe3Rj4uHuib62pQWDNgNz1wA15J9bn1aFKMpoMGX4gsJkz8st",
  "key14": "3tBKBz7GRMcDDb46x8uVVxvZdGq6FT5SQTXy8kw6DUAbTFopjhL1SKL1tgdq6LpjC912dZEskcZanWZpSNrP9PvC",
  "key15": "3z3qB51SUZyHDybmNkxE9tLLueEAV9oWbqry9qQDZKg3cAXKUBrY5e6JTKYqB6zcYGgdeKtLXg67ZLksJkQCzr8e",
  "key16": "WsxnEgCaEUsbVrKyiZPjUTv2HYw96JxEUMvmRZZ5v9fZ9ed8EiWat98XDHyAR26M4DZvT9W22Ax1jqWB3NMXGGr",
  "key17": "wa8HVSKxcBy8zEdca2rMxdRBK3P47Kv9KWhgMA1AMSKauCfp6VzyGrgJ2bAA2FMW6ztwPqvjAndeRNsoVDsM5Jf",
  "key18": "CedFFdHV7ma3PrKG8JUxvZVrVxMv6xvnHDNGHnAF3cvqipyVwrrtyeA66b7hyKnumadLmuHhHD9GYrQpn2oqdPp",
  "key19": "4neeRs83Bo2an1P5VUBaVCey6N383qENYaLGUJL4y7Snfo5hHRwcWyKGS1XJeyNgGu3NvyQQmbh4PqfE3CvDePzg",
  "key20": "4SANNfdNNX6VWkedhwh9ozEYSuuvKb3y6YeDkcGKv8txTMNVTk3JPQeEALrWRncFWoJGCKYjV71p6G9WaLk8Lwu4",
  "key21": "4mbbwh9rCamwjvhNTN9KDuyfnCNPKuU4A5yW3CVrgFyTQf3hNeE9ypWGytFvYKoy4sJdE3kbV4fTvm8ApraCBo8c",
  "key22": "3CXnVPvHVsTL4883rUa8QpnneCR2HWmcECw3qxS3sXQDArL4fjLPBh18ua7VPkpvwbZN6eyd4tFYESABfmH46DPy",
  "key23": "5PQfyVUYdupge5Kc5Za15CPvP9GGeWvN95BdaSzmPXTYT6t6QVbbLLV1LhA8WMmNhiHAxKwQvYV2xtM8D4WTUQUh",
  "key24": "4biTNQhjxowDfmP6JBstgapJdzxiBy4L6CWrYrDeDn593pAb1tWDNaucP2JfraatRKUDZEPc6Fge6C62GbBuh1Ac",
  "key25": "62JHrnkYBBYJvdAngM7BzvFGpRCef2YYdgRnQfSSyRh5b6YTB7JuhxKB9B9AS51UPVogQEcgwBY48TosTb7knohr"
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
