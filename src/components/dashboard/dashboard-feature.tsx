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
    "3pRdPj5ZgvVKJH8UU5juVsCJDSeT5iecVncaqvDHaNzDoEBJBEu7kuvWiCJrt4k3V5vPJo2CRXErtSmPVmvhzMie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x676sVHUbBKKmimkZjvhTRzzySFYpa71m1VyvtwxBYCf49XR3hTYJjnJ9H32eykEwjkWA1tmCEuZh6pv1HR5tia",
  "key1": "fpmYii9sMNcULzpKANrvhdRXZykEi7gxdh3Gb2S8Aj4b1chZgfr3ZB4WfvnDnfnCYvsaLKJBYKbW9PuMFLwm7W5",
  "key2": "3gBANTLi6RVmtsAuUP99b7NHquqXCuu92xpWoWXVJQgDwXBNLPUcT63HRmnCSdn61qm9NWiZ6ynSX85ka48qgWeH",
  "key3": "5BktBmrd1AJ8dz5PyTB8XgB9tzfCA3dnae9B2qYyabNGHK6jAhwwy8NQkjEXyzkRfZHyXkEdqwE4MSC6YAPkiAHq",
  "key4": "5VWqCWQp3QukNr13N5ijpqtKZw1DxxU37rqBeffArDqqgtek9zxeXVM2xAufN5Y6K9YUTdJwKPwzfx2yNJQMv6Rh",
  "key5": "5VX9b33Sgmo9aAcoFhqojwEXicqYZrsMgg8gTL6fqfzRf8mSFLHKhgneLTmg6XZd8RbzLmgDmMT6pLHGr1FDsY8H",
  "key6": "3sP7uxU1mk5eukMgAj7xdEac4UXNGpAPXjDcgsXD4z2NhMnQhhmRjaA2vBbxgwnjyfxuJpTNj7tJGxphZ1xjq6bV",
  "key7": "3dGMXeo8xxuUqheUsHveSABbxn3TWx231GNPrLhjebCrLbpeZXgTBPrYigsVGtYrVpotADyL9oFpX3Sh8ds9GQs7",
  "key8": "5m16dtsvoQV7YGiuaEb4BqjeTu5bzmc4Vtezfdzaj68i6JJYLbzNG4hdMSnWYiqL32UYD8WsQdRjNeGwHznwS4Pf",
  "key9": "53JcCGKSQC8pzBpzdNJSjFcfGZnbMY9J8nTuRjifvuTC6yh9a9Mn4Y8urz4Xbs8KBhJVTTeLaXVT9QAn6x63HHHw",
  "key10": "3id7NydGRVqUeZdqVg3s8FTdUWdY2aMjb8Gn1wfk3cCgC9UQCP1FsQC1ZqTKafCXEZtjsh6vLiveM6EVD6wLSuUG",
  "key11": "2HARMpFzz2Yb8Q9a4Niu7zFvhvoYrRMnbSNxat3x2CA4zz9vkAXKLaC7thw2YyuTW7mCs1Sju2GYTcepA77xMHQR",
  "key12": "3GDnyC4D3HXAe3gccAVA67c6gg1GcMViqm6UmQN6DimyK1dMRu3pXCqACBs1nw5qBpt8xHFQLhunPscxEoRf3sTC",
  "key13": "23ti2R2331Js7iSobRsaMFLaB7He3zKTZ8xyj7DSX89paYQAwMdxW6iSiBnWJsqjq9RGVCaLMtUvsbUNXNWDPRfe",
  "key14": "ECS8bvUmxWQfSof2PYbAMA3iEkDKstkukA5cvwcSHyk4qHBQJhuA9L1351iqJUhusEoTmS58PujawfHbsw6aiLL",
  "key15": "56RiV2WnyzCv3fMQPwbgQJTuz55iwVUjaXYjzesnGChnAfaFsTi2hqwQY4Ko562u6jo1NQG58Bv5JXt81u16URMf",
  "key16": "55XZVzQFquKpqQmWecpsNZ6YjpmmQe1Vyq1akhqVasMPG3sSQwDfGSBsoiGpy6HuS1Bghxg9yHBpovmAES8Kf7dK",
  "key17": "5BCmdqibGSHSM3qcmwyuDGkB6WUQ58TzLpWugJHVsS25uTCvLn9rDZuLRFtUMoAFfBNNdq9KgxAgyxAhkqCzxr7M",
  "key18": "5MwoYWZH6DDAG6mQfgqir81RmH5uCX8YLQhks6USfT4TfqShfGdFNLJ6PMUjkk97n4u6D6JN4Av7Pky2opvhMkKJ",
  "key19": "582HEgwwvrfeT5D9tQvL4nt2o9o5GxxbkamQp7PzvrbfypEPsk87HHUZ38XeLQrctmcv54wsAFarDWaUuJNSAGXx",
  "key20": "3GRRD8bLCjbNsLjnwk3fVo9PDUFS2VJfPQ1p8EeL6MHx3rh6LFC8C8XqcXRNkNpdqWBBtRVwUic5ugHLrEoPS7Q4",
  "key21": "3kScVbVij57PT2x9W83dB8RR5aFUfn9CowhwsY1ngVs7LMTfvYve1Wa8mi8dCXaCQ6G9Tfi9x894ZjpZrN61JCkT",
  "key22": "5t18dzN1qzjtopTHkJv8jfCXdy2FPtEzmJjdAitsMNiayMELAuqGEfBdrPWGLWNQpqeMeKky89vshxPnC9DE3rLR",
  "key23": "aTy7MmFLxzfGq7ByfNhjgcV9139aDBVkJaZzLDZLvf6CEmMYefhJ14HMxyyS5ysnQ5vSFxAyCuUWhnbeLPVG7yj",
  "key24": "hAU7TzXWxo94pFJ5CXU5PUNeRDnimK1kFcuwj7xfaxBM3A12uMPbSSa2yLwW9VaevXSr6dEdrntJh4RhQ5Nryvr",
  "key25": "SpNiHYzPxYvvfdfckqLYVwrdFd5w7gjz31HU2ZF5B7LFbAMuK2rU9vh3iw9XecrWuGzPVNMZ8C2CnwaqadQDkCF",
  "key26": "2t1oH1cnUoJpYtBm5QmWULZ9VUHypppEeF31JTWbgfupQ4eYwKHQr4kWMqzfEgEmpdf2rZzxP6qd2CkVBf6yPV1P",
  "key27": "4RU9bpyhG67Kskd5BuoHsqQqQkdMnVHGTZFHcB4CoEeTzwv7nBHoLwRufh3DuBnethAE6puMf9thgww7xpjoScQh"
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
