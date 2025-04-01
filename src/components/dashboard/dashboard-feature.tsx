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
    "nNEQjitobjnQaKdMuDEePh2fYouPkRVyRHLq9gywSDViCE4qfXKZSuR6YUMjnUfkd8CzF8ofaNrYaiQK8k5njnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UByQxAaDNW7CnQg4foAjofySDmvgkzpLKc12jcyt1yuhY3tWshTJ2rdLWUr2cUg3J8do5vWmavWPNoqBtNGmHxj",
  "key1": "4PjF2ApBTKFget5MxhkA5yvktRFA3jNLz9Tnn7AubrD5pb2JbK6L7M3Me6dXSBRBhyubsHeUkFaeVpiZYCKe2jgg",
  "key2": "3C4rhm5v6n3TQirCZ2XK1CaFwMQtndicdpoWy3PByZrUKcUfzWRKsv9oRsCjKqCXboYXR3Sdu71FvtEY935Eb6qT",
  "key3": "4STCo5kwXD6cvUutPCcjkwywSz2rUiNSyKhaBXuXpqHuw1ztztTuaibdsJ4Zsk9ZPCqq5JPpiBM8yBbcDiTgDPgo",
  "key4": "o6LfNrFnVcHZCj3oTMnMcURQekiJEg3VgkgdoeYx5CXuQsemE1xSFgnGC2RzXoP1xnR5e9mnyS88y8K6iCCehzw",
  "key5": "3WWjnCXKjQ9pZ127SKZQgXq8j3QWrEHnXuYTXBBUCW9kRh8eeJ6qHT9qTR2sSs1NVxpkyCr3HmgZyvVVjtahsgPG",
  "key6": "25T5gRWuvsxLv1PVRNCVXqFzgVw1cuVCBHX66zLtxnwv9qzJ1U8ogzFtTEsUHJfoHFbJmXTjnSEq3f7w5CzgNsKK",
  "key7": "ZSheHijVjbjroQ1fJm4TANZVG61FxfD6uSzUEhvxr4cBZeKAubEsYiRDr1UhPTYpwmvysCwGbrMy7ok7EjCuRiL",
  "key8": "4xSRqhnrwcp7BHNcDqGVLYNE5yZP4mGzf13bbcxCLXodngVtHVNTSamW8aH6t4YaXSL435jCKHUDD97U4EezrWBj",
  "key9": "jYtRejS5XwwSiisX8UwcYvCwVyAY7wzQuzNFcc5VSk1gpuFTwudPWioSaDWSAikzQ26Qu9tx8zYLvWMsSgCPBt3",
  "key10": "2mgLmu47Ca4HYzJPjkctMZE5Dzph6WTueeEFD4BdPn9rtAyQPEHo41ocBQ5ViY3poRNjPo8QwgZ8hLZvFV2NocZv",
  "key11": "3yswFoxVn2xvReQ7RbTevZt5dGDU4wcYNrHK318u6WNZc7ZMMFZW7SNCZYKQpDSHzxRj7cCPRngXqTzMkabBpi92",
  "key12": "3cxAD5C8qU5vzFBodGGxfsbNwzrLXiuQsKbF8T3YjeTYXSnmo4rynB6vThXBypoqS4ck4wyXJBvHT1XxWZSrha62",
  "key13": "5NH1BTFj2G2vVvQunbZC6i5Eg3oVHFPhEVtw73NWUZ4uxz5xnygK4RF5soTZpmsYxsxtMW7dzyPjHkK3NxmJijy2",
  "key14": "3UgfbnLVuLK22iSBaiMWsVgYgY3SziS5SioVhw3USGkPAFXX4CaSxiqDDGv3pgSipyoBQgbHVeWrcByvAL4uEZGi",
  "key15": "4ciuXDStYieWNtKbMczvxzfZnG6W7gZzpCTfMVAZ6APFrKEX1uH1YP9ZJ2jz8vihtZMCZJYtUKqqjzG1ichknFR7",
  "key16": "358ccwffGDTvPKiVCPg6TeQJ1oD1moEUKyam2DPRJthyvnZARjTtgEXEDcfsyQcjYaDQPehjujrM5zusfP8wFwCt",
  "key17": "2CjjbTa2bpscvoVUaTYWRDky9utWDCJQoXdtPgCfviw4TWhABn2pVRM1CHMkLA7TEJNszQBhoBr7wfi5HUKTmYPL",
  "key18": "58ZQPnoNp421inmAoqQt4fQFXvvBhMooqQH6FWtUr7UomonDhXoQF8H2LNaRYTqjqJdW9KvLpt8DaFJbp3KKmRh3",
  "key19": "72BeWfZKYujtys4yMgjGVLvEyYdHjf1uChZc5wMqPRH3TtpgbL4bHzTeT2i6F4rGRwM7mm9sptaXbg2Uo6DYp6k",
  "key20": "2X2iWk8B2M9fCEEjehv2SPyxZySZt4Ty3nkJyQY7Z5VrZnCK2d4vYLrU2LFfqa7FBFmsvUpMkX2UAfCVRAXKdLnA",
  "key21": "3z9DLow8U5SfPDo2m7PjxbemFi3W45mACxjv7nvzBC58nbGWFvcGD9RowgbFPsNECcczDKmSK1K5Cm7JFMGZtsg8",
  "key22": "2iwckw4bgj5U4HgsAP3cyAuX6JAsSKQsBFwHhF2vHPh5xoGrwSEwG6qyWFU9nnzxN5TKmTNMve5h3hDtJBuF1YrB",
  "key23": "2ajXrJT1AGPCMbFRRXsnSMuco1xYUHnxNwUiDAeWQ7ZhbcewPg3CeEYqjFVr93neF34iMQPgtTbGAUmpeYEwU7GL",
  "key24": "5pQhKgDcTiVTSPJTF1EsxQSaScYDA7XtW16fJLwu1NAGMjmcBt1V5g7SoPDYfj9kZedfTFSRfjZButg5FrLRZ6UF",
  "key25": "LzHZpu5fm28NLZ3g1j4cYxbGfN6hcd1VrYRFi5rKAK7QAfchEXbkTNnDiyTonKaw7WWcTWrpXBGNtfkhgruNmf1",
  "key26": "3vzFMVbJwH4ZXLnzPU6pQ8S2otuZmb5RGf3RAwgPejHSsedoNvikDpZDCkVvQoi7eR6W41QbzmWHc5HMWaHHhPsY",
  "key27": "4jSvy4KxRhnDy5kYkPUnETBXjCNuHoKrDKoTKta7rMZzNuNWtppmNZBs3C4Khq4PSLPTG8qDZjcgFh9oZYMkvFhZ",
  "key28": "5xadHbA6PnUe7StwCMLRgkXjNEcpGBadPk7D6Pg9Sn7hpgFCzByfyrh2KkSRAamhc7S3nVnhdsN5FiVTsgQ4x8km",
  "key29": "JpNNQuAhQgchsq328mJDP8ThtgtCwjcV7wUzv8NdMUdPBZnLPoR9Tw3BmCzG5iEjYVFNEUFmUSgQurhyB4rCnnW",
  "key30": "3dLtMZFmbHk9zFbH6bHA2obeqPR9UgWZxmq8T1KctVofDtrWuHym86GAVjxGwpAoZJpD3vmfn2gXo1XhyVeCHSzx",
  "key31": "5bDC1kx5e75zcxebbgePLtwM6k7oGsiLv4MfGMT2mvu36aXyb4t1JTDAPgqLwLYJopRtkdqz9B5WEiCB48k8AfGT",
  "key32": "4Mw8R9rp4hNXK57Wddrk7z4Wg8VjYvXqqHqPbEdxoMeeMv9igzKZN5yRhbLCQp4gNFJBAxqGoP5EWTe68wEQugQh",
  "key33": "H7AZ7RfbW8TzsE6ZkAhghGS868WyRWbvn6HTcA3Vm7DC3UQDeLwKvoSmEpV7P7BrWB945b7jRe1WnUVhq3rLkLj"
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
