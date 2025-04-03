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
    "653nZM3Pv8f1EHuDdTfpc2Ep1ziP1XGUWLpukTgiNzHc6gQZrY34J21LSZ5Lg5DJtshYK44AXhsdHe9Dgz3Ky7Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WdCAaaBUXmefUH9AsnvKVa6DHJpnRpc1St6tZuXpbRNjUkGVSw4gtD1RpLdtDP4cPDAaJPyEA1ns24rTAtRaK72",
  "key1": "Z8vsohAXhE2YNEhe632N886nYF6kPdXzx1x5AFsNL94FF6y2i3VftJ3wEHverV4kMi9nVHKPm9gvdxbK49C5pfb",
  "key2": "4QKZozCQ1y5r6bwryUzHx8qJ7r5ewy56L994HQXEVHJtia5m9xGDCX5XyijG1CNZ1SVDcrVogzBQL5MCnSNGwUjn",
  "key3": "5JwZgvW1nDHZESW3SCADhUTUiy5EgnimsHJ7tfiPRwC3udQL6wjXUtK2uMSysLC8b79GJbFx7Bq6RtvrN4bbKyjX",
  "key4": "ABkpv5WbiAvAd3cdDiatQ4eKujzB4N11nAdksfx7uf2sqpTS8FVz7bw3tD7mNMBjFK3DqrGXgmBgDrsuTAedf7d",
  "key5": "3nmDdJaBZQBP5Nt3cXdDTfBGTRjiH7kRB7BpAkxSGxV1yJ2cj99RajVAZ11gvtqBwzgYCMwEymCcJ17KQVtxrbT2",
  "key6": "2B5YAthCuWNzX5Prk5rDjKBAGVSUTDhyYWGiDEkskKdSvrD2fUqqdLW47biVaEoCJjukDpS25cAYqjmQxihSY4C9",
  "key7": "5zQT56Dpxam9T5cHLTS8S3WrjibyjPgXU63DVYYqXdCpMqURqnhnQqS3dhw7xjCju3CgjtbQw9NAAbJQTBZHQXwH",
  "key8": "K7dF8BG4M7KLATCJWv4qCdxQtoCXFj5QGq5f36tfCuuDCLPDfD2fmwKUonjWZYqWriSCHJEtUBNpfmRDcPBxuu1",
  "key9": "4FoMHSPA2Jq4vFFQTvWPLwYbVRuFgzqbwPynLBqN4cFRLhcE7NdB8pGgAietzdsERZQwgMpjFTStjmagjWuz47ye",
  "key10": "5m8ApRg3nyqnq7YMFyGuW8tNKk7ej2JSV9aaZwicCTYoL4w8XNTe2FsXTWF3AKVE5WWBNKrTZ2q6fg54Vv9uFMaq",
  "key11": "2ZvXnAdaaqR2LnB6yk6f6kjVBdrF6Ndc2jPfZd4piarB73k6xFN3Mye3dEZicQw8f1o7WxvnWVQo53GBh9nHRWPE",
  "key12": "57aXVdRCvpnvGYcyNhvS6AE2qvDwx6E5nRGXrBS3cHmysEh1B5iGpndjUK3s6fZMYdoz8XG52XWBkk1L5Ei8VLnT",
  "key13": "5eNiT9BasBfijs56Zj6GC7Rdi5LZrNrXocy9S8XzcycrHYmBfBgg6WaPH7f9riEr7YprQ6JZMtVXdHtQu7NEW6Ux",
  "key14": "3MAMwWZBM6RGfkRwn1MqRzRaYPxVvwgKqWpSDa854E4UXHzF9nA4ywRzRvLTe7L8sDMfTDhEjt3xJtDDnpZBXqYr",
  "key15": "2KAiKmQRD8L3Dxmip6cveBnHjx955Z7xMdxK9Hm46dMzwd8tapyTcAs3mqJJ7Wco2nYtTuEM25T5ispsWcdXEkV7",
  "key16": "413Veu2sHWcY4u6rzjzC7qRqiqK3SvD4PFBgbdGaxfKPz3NRetEGE8C4UNkkm4ewwGeXzRs8wUx8Xx2ipCDvtAhW",
  "key17": "4bn1hgMEYxQJk9q1HKfn7i2WbM7u5vFKZyCHHzDXytR1cJgKDdhMimeHrF8LUKtevq2uYRgSNqLwGoXFAqL4X6RT",
  "key18": "3Zr5ZHKDVc5Zv1z56bxQszd61o5PBCVVc2QStapKkDVn3YQynAzBWqxrzFduhoU5DVszxua7vfookK32vJgXKY3N",
  "key19": "RZhsijGMB5cEg92oRiLjcfGD3GPFbY8sQreWuq5Cn9oxu6XvMHnf3KV7w6sZwepLH5mRLSJ8MbHBuP9CdgyAKb2",
  "key20": "2yWweDmUp28EUQqZZ7CmWJBQJP3qxoe1uEKqF4Hp8VvQkS628xXWqvLL821tMhoTLcq2QsM7j4DBX6PjmJ6iK4tU",
  "key21": "4QRXF3hrVCecfvv2yEaK1nPAV3VrXFZMJcpfiX4pTq7UmZoFjiv6Pvo8Z1wTncJtd3o3qiDcPqFdTz5GErWFHjyv",
  "key22": "3BBJSquYqzMCkSXEJ7abrFh3GsPFQ458nbHax3wfweebkhn9oi88UALnbE8twHb4ZNd6ahX4xPAVHCgjaFT8RZ7E",
  "key23": "5tRQ67kHV4ddLusrmBP9HEF3yP1GJemsD2tp6sGdpfF29gLMXZ8fue2HYSjj4ZAvRPkZr9RT1ZkrqWHTgnzNRVfa",
  "key24": "3UhMsSLbn2iKSJbgx9ETzzJqrP2mZ14k2Jf1NAMMat9ARBjvaTPVCb2hNynJTbCtPFfkwHVZXNCAxWn3Y2e7sn2j",
  "key25": "3jRrhoiuccxvoSSiNCktbtU3wxq7KpCszojjUa3AifBmc2BwFx9gtktHKFtFbcNfsEBPLbqrtC6WeLszU68wTKe",
  "key26": "4uX3JwC65H8NwSi6b2ehnESW9AMucEKPhnDP9y91t3rSHgdKARC1qe9r6WUvrPZ61AhiYr7wzBXYadjE16o41tE3",
  "key27": "tYycC3NQr8pAF6ATZ4ywpJvSeyWEJheGwDcDBek4RdkSfrpSaaNoZ5yqvG6U527mUJEdLazeNiusy2PTgp81MHu",
  "key28": "4gr6gPsm9srGZ1ay8jPyriSH4KitNfpzgM8ggoHbVn9BTgTUyUi2B5jVJT3B6eCWNtcWTB4i2pxFjZuoFM8UxSCM",
  "key29": "BE9ekzc1gPswSb8EziWp5kQdtCcXZCBaGgjiaUpRAtmCwc728Xg1rWqsRr4rNvipj4KR4KxQi4oZ3VakX3HySLg",
  "key30": "5E6sn2QkST4KzhA1uJLatjkTpJP5n7qeDKLdAhuAK5Adg9ifPosEpjuXqoE4SZRtZ8hfZKDtLiQoCVMxN1Cek7YW",
  "key31": "3MQoLMzzim5rBoxy1DpMnjdB6h49j28ANPEs8aHXMxmUyzDFjZQkTvJtKG1QFCKKZwHbz3YYnd2MWspQULQEcL2z",
  "key32": "62AiPP8jeRQe5uiMeXSm21q3tLM3K4mzAnDwAwu7CERG3nTRZHC9YURxi3CXBwTLhM8F3GkCr7L8FgbDad7TAhuL",
  "key33": "2GsXFkqg8q4qzBsjQwLLaQ3pwptZZjXsHpoagYiFWKuig1Fz2hBY9yozLfY6wxEhP2nbEJmbPD3kvcysRE3LRMec",
  "key34": "3H4i5gYwFA8Kw6FuxvXHNCaftYR9EBJXfU1du8vBZZMGyRoVwow8fgGGbH3m6a7t46St7xP7XGw2fnzhR5XetjjH",
  "key35": "28HHJgZXf3DhY2T4Dpu6cj85PBc8oND8Ft7BWGcFPwLQZs8cHhndsnmZTx7X1zjkVZGXsbWk7AR4dVv1roYnGQrS"
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
