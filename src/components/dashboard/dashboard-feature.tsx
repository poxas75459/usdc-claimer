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
    "2a7AMNLtotaBZgJv3tk7WBAwhDQDBwWcmEbsFhAJn5Ra9TExtR4vX87X2iWpHM2vVfGMXovttAgWLunPPupzLe44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5SAodYU6KJk2vQqtwWN5jFqH2aeA49psaHXAmypvsr4chXKJiMjrSaj2dRS5JNh3Wsxia18hPZmiozb7QUwGob",
  "key1": "r5VE8vE7eg1h39WZ5Vwqk2Zgiw2bznANWzyq4Q3RnkdyjC8UX7LfdZbZo1FxepAwbXhsZz4rU5tgTqxKtYhDzoc",
  "key2": "5Kq3qau2amVTGWWqkPViAt6Vx2pFudwNDdC1gsqL4Z8HTng4Nmw6LFW9ASfGrrECyXk6Vn64iDyCYF8S7oyt9Wge",
  "key3": "4nVJKw9PU8Sxro7aNDRCdrz1BLRR11oUgC6ArjE5P2ec9DGXCxFhSCqZxQ5rUG9rbTRUuQ3yGqRJf2BJMwvbX38b",
  "key4": "2avP85ErAGJRNo2zXQJ9eeJuNrWo4crN5zcprSwpB3ykGC3ebgrvQ11XRRyvU6Zs6npropFYCMrnM71xeuYTMPkG",
  "key5": "hj99WaybtoZMLK13T8tpuFgkJpyWHhUwBW2zn85ehXcW2vAj2FpAk1Z1Zv7wk5PxF4SD4A15cKhfVan5SYQcLKR",
  "key6": "BdaATXxTGqSfggawPMw56QDRMzJVxDzYyQRcXfk1bYLJ53W15AAYihEefVPQB7xXTjb38LPjeVQUkwGZVsL2wu6",
  "key7": "5gXJ2fEkH4qX2wyVEe3AA31rsgFQwJKpLDoFLc9qwTMxCR2SNrj1gVBRkNSAtSac1EFkALSrE96MwbifbXbhtF2t",
  "key8": "5Q3M6WGG5SgPJ52MBvDRpFHjdWW29kC2FPFyoSTha1ujJeZ52FfPtx8uUhd4xzqNi1NjLS1Z4TwGKZtefHsu8mAa",
  "key9": "5C1CEUQNV4dbhi32RSYXyCEhsqgDWJL1HyUjGTQcowewpArnj8PqYbHFMdkyz1VFLowN1SszFbi7qVJH3y7qFXeU",
  "key10": "7CBEsLx2HFbXVq4SeiVdQVRPY49vu2WSVcYrxBFVxVgeLSKwZzD13DmXMuAvNDRd4twkCAn2SB94BwJ9cCeyN64",
  "key11": "2eEpiPtxogugoy5MPW4Vf4TJdmKWMhFQj6Uus2yBD1RAaJuqr2G4hqkmw1vr8KQXRtexJLAcFw1pp3Q9EBanFUvZ",
  "key12": "58mHHRSx5rswzCr1R95xsHbqdvUyzATJkBVaQ25P8rpfLDZETGKVeCtPyFKfnFKuqoPmcyn1daM4kxRir61kpMJf",
  "key13": "5MG6NK7LSoNoHnrWBmmTnWVWYce6xekHLKN5ZY6gpMQuoUY9QcMGjLZHuirpjcPDnq5QkyzWVSh8CVqBLd8evqRf",
  "key14": "34ykMJt9PoEmFRvdcs6e6hE5yGGqsJYwAV1ZrYnS3U9aQnnq6FsaRGjEYpUHRX5Jm9LRRVbhZgZ6aLHd7f9cYPRi",
  "key15": "NdGKHx2ZgthAxoF9UQW3kvrED6KjwS3Kn1y2DYwNijzBwzAzJimYTzjJfE7CBkgccdb4tAUW4SHoPkrkfZopLKV",
  "key16": "4K23E1MLmwb4FM6HXqMKW5uqxW4X1qW7pshnGnRtDkiJ7wGJXB8hPw9EpLp5w3gW1ovFmzftq9QtZnyZGBtqtq6S",
  "key17": "KtWFUcks5AFpF6mwBdT8bWDMi2dh8MvifSoYZPHpQeFSD7FEt57HyGsCCC4TEFeqzWgxbp97HkjhZAxok9ZoD3G",
  "key18": "2Ymh5W1wd7wLMRVB3yhzYTq5JCLL4QH5SyLipYBt3PNBXzrmr1UsGHoqNpVnkgEfa68MC9U8AzgDVftPXZsffqgc",
  "key19": "38skkUDbMaQ9p9KaeZLKnLLEQnb7LCtbzrAceq5VnWa9k9kvyHkgzr5YP4BnNB5q85GSNpUmebRu7jfd97VMhgT1",
  "key20": "2CiWUNXoyUPbkHHmaVFeoubBWx52SA5221jTzh6Sb2bJngi5geF9DjMdJu9PiZZjGeuQmsZLDDhYFnhGhMAW4Sr6",
  "key21": "r11758GiZDJBPNuZcdc5XY1BCKr4UjJb7M9GUZ7j967ma71geFQ6k8KGXKi62gXS2Tkbj1iyRrxPefex5fUtY36",
  "key22": "v8rw3zJvg5MARvvuq4U1S3rz6BK16ErCFQuLdvctm8Nh21Gpjm9emxKzr8w8p2ZztGNv4HwS576EkSFzGmFYvGs",
  "key23": "2NgAd3kB6ZHgapPDM7ySkJosvF8kG2sLVUZpSQ9uGjzjJF2eU5DTdLioi7hE4hCLyCRV246rXn16reRXMLVAttiZ",
  "key24": "3yYLcwBULnT2rewaPpjUvEuMgZLMBDfScFu6ThZchykjbL3jRifAHjAYGG1sMaNQSGtuGddELBK5nBnV4Jtc1CVN",
  "key25": "3yziCpZFQLQaFKKy8VCbSaCgMtHsbcBVzq7FRHy1MhFrpBMSjJKbukiAMigBXzGNAYmpdPDagQDR2PorMk3KLTzJ",
  "key26": "2oiK2N32taqo1me2boTUk5FhZsmsFdCXqv2ky3SugBPAySfaufrPHN5k3ExK7g32LQy3xXgioRuJszNsKq299FVC",
  "key27": "3prCy4UWgdjueP3uhwEyNz87Y9217gRsbo8vRQCUTrToSmdp37TcqkueYaFG1bNjQFKVT9NjtW5RbwEQvGAsFMYQ",
  "key28": "3A9tfy3wFD18K4gEEdaemBkk3FpgYTq5qaAAc5GofGxSvQCMf12uUjHAx3szkSu6jxDyDmzC5Zj4Q2FcZaL6tn6p",
  "key29": "5XKdVfthPGMFCK2EU8HTGYqsJpm8Ufu97UjrCVjs81NoDzuCWUXnA59oKHd5JAFJmSGq3JvhisTaVyHfq7gJ4Ahj",
  "key30": "5YethV8ZsQKF5vdPmXmZNiqkCYdgFHC6znSVdXqEFcnSmuhjtWptEBgAhkRaKYX8fgtHYkgH9JQ7hsb1Nz44CRD5",
  "key31": "4FwnGYqegYMEFZDR74sfeUeoGw1ay648B3WJhMxpkSRkbNLnSiVnWUyKvraKP4y1Fuhw7MGLkNsJ1gutncphEp1p",
  "key32": "4gTEwxJt7AYrBu7W7SrnUDkbWW4Zrju8ZD2wxVFTdui3JkxQSXfEx3EiiVWVQBDDoZMp43tYN6fh3nXB4umhdDJ",
  "key33": "4oLBPmxJoZeJb2h8A7ggFYpBd6TN2gXJg92aYTBhQFZYw5X6VaBw9JuPmMbMMwxrWQ9KLi8ZQbu38cCRXKe8n23r",
  "key34": "55T37SeFrhfci81aiZasacHsZnWxMMpwg4zEZ1An2WhhaozDpEfHRtXhL1zaD5Tx8wiFgNY2sPzEqsvKYors9Nrt",
  "key35": "2FrQDAiMbW9YRTzHFnrfeh3vwQSfuiCKXxPdbLb7UFixewKJJx1YkXCu8MctqdNC8yvVM9btB92HWo2uQRCs74So",
  "key36": "4i8TFiSgjdiy9sfjG2LZpvzNfiyYybeNDdhcraaW3ZTyhVhTuaCjwSJW6dUgfury5TpmmALprgoWup1GQfXHLo9A"
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
