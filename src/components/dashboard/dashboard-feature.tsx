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
    "4vgRv2nBzPRxew3bEcMqzAr1N4gHiKyANL6PkGoGoFLJLhHUEaZVS8hkxfTNjZneTbSPrcKj7aPpYHAFW8oAU5mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGX11MQz41xb4Nnuz581fhVG91gpW1rtMe7sHETfMhU95m4wfDynJy3rMkmv9yjKtC5jdw1v5brAEwurzPTiL8C",
  "key1": "5yYBKUdEKhr6H44jJvCrtbsJ6FaDiSAra3rcvtSGyJsuXmJdoNQxnuMMBz3hLvgfXCYVYgs4PoBnzvUVg41FRxy8",
  "key2": "5wbKpEcfUaaVpfJa8GxQFios7Ct4jwNKXgv7j84tpmHit7YdefKNuLwcuRQKC1WxbiaJ3LkYV9SjSMPVRqQhcZRC",
  "key3": "678YnaoEDQeboEmFHNLGnAetmM1VtqK9LpXkALcKgKqdJD1es4TxcmZU41krnQeJiaaVLUZpzxFTzQk9JKbEkJhN",
  "key4": "qvveNSjz1bfEcuT4sHYNskNpDy1L867LqCfctF2YFa9TewjxMrJoMsv7oXrrww7xSkjLbjGcj544P4vwtdRXSFb",
  "key5": "3pVoATNXyRRLw6QFiw8SCaEpPZanthUdZGVHikVjGGqMvjnLQgQKj2yd3EpRxKAmWFa7sHQkB4urMSgCkD7fLVZn",
  "key6": "2HRN86ArPGRwmBsDDyUsfUv5mQHAqa6eVV7rggZdcTV421e1zNyP7LUyL137erzZKD278xXTzgWy3gLY8SzT5FVD",
  "key7": "5tdYU2uC9Mt6WV24ftAdWgEPAg8RDxgNMQXyDDB8fyHzf5mu4V3p7NNkuE8SRrPcFP2uLSaRBJyUYm9pbiF5KvXf",
  "key8": "3snFpXimTH7sbRHG3m9mdtQ99PJefvL3tAjYNRg2h9LFja8VX5yzJHnW43yp5Z6wuESN73nL23ik5MxZYYQXGoR9",
  "key9": "4yQtKHjWRTL8LsqZBbxB2v5fqmxbskcx5m3ZTZL6cZkmZTQkdCLhXjNHDJu8bHJaRJMckdDAs2r33GARGoVWHRU8",
  "key10": "5XB8EXm4dkmXXnAVqALEE7CVorzB4gfwfSxUoU7ZGDfdmGwkrASwjPXVcpLkFhE4h4YNiC6CMUqUDuUrR2eexn4S",
  "key11": "2gADqJMyV82Mnm9kjcd5f4R47a7Nugsm7UUX3MV1YHePiw3GTh9UZ5kJZxPY2mEk66wbMzAtzD8zeAcoGkf6qEV1",
  "key12": "5YQYoXfZhgsbSzATALvwYF2ZWbw4ojs1KxXbHUFsKzSRu8iuGJfzftbcwB839ypRtYx6gpcv1PwEM9ZWvPb54fpR",
  "key13": "5quh3PdkC6eesAgh3VHEMdDY8wkfELqDkUZbekyZEJHzHsGFXzYvsWFr5EpQNhoTQpL15FXtsvwvKYEcvrB9oNbn",
  "key14": "4j5AuDibwH8DMK6awxcc627BDogBkfutJDfCKD6oeHGYzLZqzEr9g66RUwpJAzxhmgLvbXmjroiGEJqJMVgDVhXW",
  "key15": "4VrfKpiUDqTXxwNF1X4P8ARenYk6tE4PVgLzr1KHim6iAA62hofkAiDC91c64gLNYGSdFQ4E6hWdpbWUQuxbgWg3",
  "key16": "bm8buvPi76nmHQHkVjKeQpKp4Hpru93jH6wZmh8t9F596ZvocgiBZTQCoJr8n9Skpy3EsCupmZQD4GahwBpd63d",
  "key17": "5CUodFup7tUsfbcDrsXJvHRfjtG42ebniwLLCmoaVG9qNZ62TADGeP62yTuxZm99XQyvdUidqVJahSU14C9HhvVm",
  "key18": "4YBXS2ZoyTK2TQa6xNv9wSrx3GdnXFos87LQNo6qhjqtbirmAm2JtS91K9uqjd5SZyfTNQPrB1wXxdb6ijeyfeZ",
  "key19": "4po4E9jmnT2pqL1UaicbPUM2rLs8huZRjqEy6sFxZiCcuKvwVSu76VCafQ4SVaqPw9M5QmzEiVpDFG2HAwd39vcP",
  "key20": "5DG8FVRF549XNdoHi4KoUmaCXeFB71En9v5nSTS7befver1pHZguEHqvUHjKTTGEcwmvSdUhtksTEahCeiQ8GgbX",
  "key21": "4reJXgG17bkDfb7CYsFr6jBfU7vN2XPCuQFvBgnj6pkV2CU3MYU9B1gbnGT72KN8SJFBnkbp41bjRzBETvHEnqjE",
  "key22": "5gk9FDvRbYLF6NUq2AtzeTfAtGtPxUkZ7Vx4YHev9qHxSG8RaH9QacDkCRQ8CvVJddKpxRR7RAPQrEG7tdL6ys4u",
  "key23": "5GjQeeYC1npvEnyx3NHehUioDn3EEm1BC84UUftj7fmhphDKDQFrSnyUSe1NvXrPH2PLaQHwn9oAbUDEVFP89YgK",
  "key24": "2v6eN9hkDRvmpoTK3WZ9ghm9wq2MyfZns63PftnVWbG3xddKRvXYdYT3nQkwZhidPBrUKMGdNYHP2miD4YFKe4SE",
  "key25": "3NtYJSpC7khrBrPBzLwJZULNxHFkis7mh21kfACutXAoYsx99w9dxHxPMDV9q6J66DfspUhBEC8eAXW51AgHGbXe"
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
