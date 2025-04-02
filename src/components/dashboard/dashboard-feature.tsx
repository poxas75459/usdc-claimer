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
    "3mVV19EFzHLUn5CMAQN7WMBHyh65xQJoBGtj2MdLdX1KYcDECiASvUCJcobYHurwKyikB9J7YdGcW1VkrSUyxkUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yz1qQ9jDDFrVLPTadFg1TLxSgqVq1EuVJFcj892FARpdxoysh33CZMC2WEpE2jDp4F6KATUvjXTamfJB1FgAb8A",
  "key1": "5DqLrL4pMMrXPZjPZEAqhiZRqon717eFBT9Y6J6PZGakp36p9y89iexieVjreFMM3yQTTbTG1HFWU9yRi9fTtueL",
  "key2": "3DKmuDCDbemaFfevDVYVMSWzmTXPucNe3ftuSYfpD1FYR9udmHM4nhzUxRPEuCykArWBDRBs3StQs9kH6VhjESwj",
  "key3": "4ZLQt7bM26n7pqbCMuS9AmagAn9dkHtmnVdZdWSQt4pS4P9GaqWK1G32VPZSXoxJkLqGvTbwarwYBAhhLJoyJQNj",
  "key4": "2MTCB6dK4SxFeUYwYkPGuGJZxhF5JxSUFCMAhdCverXxG1c4XTBzPXoMSsiqP6ErbrUCPiAhzM1htXNgt3qMczR9",
  "key5": "2L9Ue2qG6NnG6fYYKCtugSQZi4AgLHFBp7vmugMLkd4nxDQ7NXmtgGFPbeg7G7hMwEpiiaYkV2sVY9wnu8hDCk3C",
  "key6": "ufP1iAVyiChmQQ18XRXhEeLknPgyVXu5QHPQLaftofhfEodgkZwdpha5obusgEgPmCr3aDU27suHhK1vYpn3VEK",
  "key7": "5xpewhmXsCcYYd1F8bPBfbXbLjbigoKAc3LCoFSNw8bvNxT97JzuNs1iiwhmw79oojAV7YotXRuWB19MBtv2qpN7",
  "key8": "eRNPPPuC3vB9qr4pXxLRiHUgkoU1xTqBFSrUHcCVFJyQsXgGY7FHwxYbFuBxvZDjdrFeGQ5VJatqREpDHvd5JQc",
  "key9": "43KG9scUT1BdGa6Xf4dhTPwEJiVSHnheQHs6waXdEp8xu6Zu7fpqhTYjyRpdxRm3H5fjh4Jm4r33N4BE3fGwgJxx",
  "key10": "2KEcxpcULcQk1RsdhSWVLmyUxSgr8HKXn3ukGCANcnCNEWBURk6tqo36ZjQ8sdW6FQPBg69ZjcK7nZYLmtbeifsv",
  "key11": "5KxWhGeqTmeU3t4Qze1kJabaz1uLcneX3vbv3jtot5EjcihQR22xBT5GN67t2xeEbLNbJZWp17FrwDmtFTYrEhN3",
  "key12": "5CRvsybXm2E4PoiHda8pCzuSnUqVFML2vpZhrvi3xbD3oHFE65o6GMC5rJ23ZkXtsUdonmht2oV9PfE15dmtAboP",
  "key13": "4M7WPhBkAbKRFqFHxxJ2AWjQwdmXhFCH7RDU1iLfyrfsjxNQXRF2bdF66Suw2CKkG6KZpjHB5Ke4AEUnMPF7B4Gt",
  "key14": "2UJMjZXpEzxbFG5FWShNqvDYoQcUfDhKnhN7v5vYaoMt3xwyTZSTvwgCYnUiMJ1C6u6HWBCU4oZReQ7rsREY9xwP",
  "key15": "3yKTPCLdVdPaoTRPsKgE95Szg4pnV8mb9a6hZq9epFFeMreoVBaBvdjCyePDKWwaC2JW528pHRXyFENGgGNrUVHo",
  "key16": "3XhTm8RSx6o95cNzz6GxEnoRaue6edWe5hJkPV3crvbcdFWNbNbp8eFWP5VskYUPbHskvMDSQGEr5yiEMNA1Uabg",
  "key17": "2QjhwtC3afZMQGK2o9tAK5tcHvFK6z81BnGyavtX284Bs7ePbwqNhGGrSgpKKWqrScJAXFHX4H1hUVeGnKwNGLJs",
  "key18": "2GU3YfpF3EFGnwW81CGvgVdqJegLnttf29uxv87dxv9Pwd3FRBG96eqJHFi9KYhwdYbxaKcV2YUusgjfFzaiQ2b6",
  "key19": "31SxdWkfqgKojcmJdHkYy68aJD5ew5KLVSsqjx6pFfWBZJ6P86ua4ChZm8u1pAz6zvKaUZKjRUeC8J9yjnpmk8Yp",
  "key20": "u4w9zi411x4jw5KVen8B8GrLqdWgJAMxyjua44xJFYYPftDqK8rhEhZue352BA4i2eDN2qXKynLfZGpYX6Virra",
  "key21": "nwoSBrxTCw6sUAyvnZGwd4YhhgB9s3iKQstaaD8TCAKsTxmaZ5sEczfyknPXna4bthmSToh8zAHz8bqbBrHwtYd",
  "key22": "2BYhBjUajgAW1dYu43ugVHGKcdhZtnGMangryPW7Qu2D9qSajv59cNULdtuVtcgvzpjbojXBz6iocjKtzJKbtXPy",
  "key23": "4TEpQKhPgDfzhvoQTtbY6uahWdHauiXSREURNBuoaWHD3ohhZQLpdavwMbXqgShKLfRXc3SxQ9LKMnsT9J43ZQkB",
  "key24": "61aiAyyFU3E6zkenF9mF1Ezk1R8JVFiv6boJVC7uxxy5HwaU8TGdQiNMM5PXDuNadHYZEp9zXncWUUhiuHbneWSC",
  "key25": "2txg5xxZxeRcPpRNuQpK7j4EKKFrPo6vngZUCeKohm3WQUDbV6uTXwSEtGGqfkt4tpJSfB5n7xmELFf4khwoGqog",
  "key26": "2SBmTRyxzZ7RVfc36xmtV4ChZXW4ow4NqwNQHnnchYSZEK19umQn5jxdtexnsLnpXx63BPZJ1B3VH3gMsYdrbi6V",
  "key27": "5hy8D2uGr3qrnjWGwD7LiWGzHdWjwCZRvhfJsR4WR1pycxp5Be12P4FL9w8zy2TytsLPQZm8RvZBP5p1dEm2qMCR",
  "key28": "3iyFSeWWMs6C91JZh1vpemmj6LmTozPZmLCQ864BAY6iiZV6WNJrt4eT7KZWik6qxYY38ASiT3nS68nu1QG5sEPM"
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
