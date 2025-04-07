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
    "5a38HXhtAf6qKpzWaZepNjsd3Y8xn7qjhDWwjNz1nc6K7vAGES72M3PEYZ9czpNuzaGgqx4tFWtsYk464ytJXa17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMdLPpF1S52RzhKMfFppq6yJXYu1vDGq451mimzpVGjnucrv5wSnbN95nueVqGqkLTiUpzHnVN34aexdQ4PimsC",
  "key1": "2h1aKeHiH1eNjsbUHwivvg2aRvY5LTFb6ye1xNQZQYVJmDEqBb2m2L1DhpWm876dyDAxRxjyVxjQ16r5eq3JcnKq",
  "key2": "45nowGPtdgxC5V1woGV6qZHSpfbjLg8oYJeXZcmmBGw82MsYGteCZAhkdzceygvAs7uXDJkiFyy1fzVsjrE5QRMa",
  "key3": "X3afBDhmBeRzXi7sTWqCnnDg4sseALkpbYtezvyPHdNpTnF2E3xMP9XMFndfYUhjvxCYTqq1PcgpxVQUEEUdEEY",
  "key4": "2rL5Hs1spqPGjFZmQjPexET1w18rXNXi7Y2BiJqndDDN1GTwTXU5WZoTvMpSZESWAaBuprYSe17RTdhV9je4qdDj",
  "key5": "4mYxYHgyQ4hHemD9js9osptH4eiJLnJtyxZbx12syUf8rjWPDpJpF8DFaQPFtAM3ezmkGwhHTW75Sx2tsAeyfP2X",
  "key6": "2axQgwBbxGgFYaag8U5dRtRRYrgjz9uvWQMobiYJdfny6TQ7qCfUFEhN4poxvctLzJr4R6MZf68c1aTGLLZnPvav",
  "key7": "4hEMpmu1fTrsydEFBy3Y31Q9p5W3mAD4JcV9FJFfuXc9ZKvsMqQeLRK1XH8jJQ6aieVaF7fTA2DqLy265FwjFDDj",
  "key8": "QAjFGoGiiKw7ANDutCznnDSFB82DCZXXZoCHyyDpxF6SUkevEtBS9bdc6jQUa4nrys7xm7y1G1RSA5TMYPFvUhh",
  "key9": "4FA61sPgLKjWSmwUbUGFGsmVudVjBfeEHUyXxGCrCbWA4qzWQdgMt1nVMrqKUtZUCmDrfGqFTaE3qHoLpzWAbN16",
  "key10": "4tAoMFTpLpZL2FXcsw26nFkcQ1QssYGhvwNsa7Qo4jeNARZdFKBL7zGMRXYfvU7HkWDmahxXEN7BC9JEoPq3dF7Q",
  "key11": "GVspnNzR5yXtgwbQrwct6rH2ZkwueDdhkJY62PSHWTBs2gvHv7xhR2vMmWQJSefDJESD4DZJUb8gq8aNay3efRK",
  "key12": "355zVUUGs3BMEgbZhRiMzLn49QcG8gHyRtnq73pgRzUsGGLk7aPA5F2HhD3Uq41TfYCCPwRodU96VTvoSsKh7Tx3",
  "key13": "27XYFKzoKGPptJL17i6s3p699Gi3doqckxDTZW5KANfTS8bTzzVWzhH6441XTZwPXojUSfX7oxRSLhABmcyomkK6",
  "key14": "4zQNDjQrM5APMnEwRJ91az3hP6LSk3A3VSJ69NyfS5T88VJc42L7izHUjxny3jvVys5cL83KJPTiDWonow1XEFy7",
  "key15": "5xfZ5VGoxDQyuJ4RH4ZkxhS1kqWnzZNNkobMjWWkCU4ju9jUdSXrM7Rt2erJ468ddcLodF4G8BiFxgiA1YMLmf4n",
  "key16": "3XqW5n1GJeSnCRrbnKGXREuinccNgNodNEsAKvDKKuD3ETuPQECTELnSUG6r8Jqcm6gwd5GGfPqBxYt7CxB1Gz5H",
  "key17": "2FrXv4JrgfSgpsfnh82Gcg97kDau8Z8fczc5XKmRBvDBNfRxhZxzRivk2W6LZg5X9NBT6JPHoDkDExCgodSGPtYa",
  "key18": "5fiEJfajHguiCDWQALe9X2toc4H2WHgc8rnFj1V91Yajkh9oqkmZw1R4mXJWWZPU8xcqBUqFgb484Nd9gZTaScKp",
  "key19": "2Zwa319KAowDavn6wTbMJBAaknitSN6U1LPXTiJemEYqMK6KKxNd9hyadPsbGJMjGShWSbBUD5SgFNno4eiQA9SF",
  "key20": "ehwmCgTSWsBhrcUNtWcJULkyBENKLEVRR71x2gJjBF6SA9NDgHZzTzkG8VxuMQ1CkJ5j3g4PZ1vQfmX4TR7J2YN",
  "key21": "66zUMJZV8q3ZmbzcKrcYn7vTCsj1u2QtavoKjQRRrudCfUP2DT7Fv32uRcb8ttezJZhtCdeLhJAc7kRLfgCTWR21",
  "key22": "5mbP777kSK9UL4TsaYZfp5xYXT8CMU9MzyKjN3ciJMAk1vRYXpL5ittnTA7ihrFhNJjYrhpnLJm5qcEC7q4Z3ug9",
  "key23": "4RGLv5gGXg9eLcz9c5xvdv8gAa3nhDQ24cLN2NFTjY277YdY1J2f2aW1wfsHTCKyzBBpCfEa6SDV9a2Ce85t5y48",
  "key24": "2P5WQgEyVncTNV3nc2comrfr4yxNVLfCyHVmTo2fV2nvwXczzx7Yr74NpF2qY2AXYNvF2psz5387N8fCQ3bWmbKo",
  "key25": "4UeQXQRgkGS6LHbEBm5DZk3u4pwZcLp6LSamFHWsMc1j8abQQBSRqch7eERnURMrCiBbaR8JrGx4mrxRY2faXm7p",
  "key26": "4QAWKhUdACpNsyi4XgidK9y9eAs5e49D1D2ua5dm28LE8Gq83T3mbdJ54gMvesYBtWCQJGbLBgaiYWCY7e3DyREN",
  "key27": "DdFxwHsPmwhuPeCXczS3UuSGm99GGBuE7517uM7xD7XqyrpaMbWBdcksGA8nAoDwspsEpQxgjDuUECRvMdTm6pC",
  "key28": "qdndXw7pfgrB772PuVP2h4HgTRvsUeGPswLgrytEaV55g21L39yE5cKxTcJVH1zCR9GwJrEvNp7R2MQ46YwLugC",
  "key29": "5sLFHPhA9KPBhnCih18oVmC3DpJDE8SeSrhJ8peUPWx1A3nN3H7buTPT1uBSsixvYC9dm14hxid3MXqp8eB8iBhw",
  "key30": "5JSwvP41hZsMQsbzpPtY1zsvNY4SA24pZQ66wwjQGpxxxR36k8rPMzVdMV516xLwzNtd4DGztJHinanXX3eHvRQ1",
  "key31": "3WPhABhcXLjKDGRg766eU78ews6ZjUzoKhr4JLhZfyvBQPb5DXiwqFhZYBXAYnqSAEpTwxUA1tkYWPTw35x6zmeN",
  "key32": "5J9TfkkLmPvs9nnNLNyLFRF7aWYoiMV3xfPdCwmx2iQqqnwTkuqsWZU8DKyjfgsgt8bjzwfi29ZzfCyiAD3LK3W",
  "key33": "2xyWrEoUC1s8tcyieuYsGJvxrinqtBwr4sgeJJrQSyPE9fwPXS3KkVatwhPuJS9yir55TPBYbGfQ4cjFFJkn7dWr",
  "key34": "4zvwomHnxj9Hwr6TfV3tpoj5FNWec8yjpkGZRnaxiEaag9Mgz2YiCCztihZxaKinyTUqQxHjAv9fPvwRmYgsCE2u",
  "key35": "4SLnXD3Q2SekQVRP9eR2A2hRcGNSmWEfYnt2XUiCvm9DYskVFhyGXN7YvYRS9FadikKifPqsiFbPKUkpjScFzhuv",
  "key36": "3mZfrH1gDkYNJkVujKQG5yEX6or5sk2b7SvKp53F27KjrT795G9MWTLSja583cqpVTVCM8oTDNK16gktRtjxYesx",
  "key37": "5S1iQ2PAh4UtVCWmE2Ly8vUMRKaZokxNv5io7hEy8Vbgu1bDmaCAe6cK5aYofdicfpigD8NP3WVzvs3E89Byztik",
  "key38": "4qb6k5JrB88qyn2t9ZyiC8rHQDHdJ7rQGRx9M2C6z2m4p3GjZfDTGgXikqYbZKsgJvNEE8Qio4PByV3ZN5xSVr64",
  "key39": "4NTpKUjFyUCK361BSMXWU5mwNwVxGTUL3aJ4EsAbYV3e7fJ2Z74QfF4RSBvKe89eE9wDZWbmGMAsgxsRe64UhcDY"
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
