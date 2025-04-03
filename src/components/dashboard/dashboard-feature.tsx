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
    "58jA1oyiQNd3GgDkztERq2xp2LjSVWh6PCBjbS8FG4r76zXJ32PctNWXxeo5kSPpMrX4LSLCcc5M5RXS7pQfKDWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nyesA1uu5S1kbzzLENqLcTasP1w6AndUesB2S3e1iRV9MRMEkZHzoZcuHPRhGs6KLENCbo5pqhp2vGVVqCCngqi",
  "key1": "3yEnBpo9J5XrMv3MYKRVgimqL1EqdBLRp5Vrr2jcgBBVvhBwnRXFTuTtySj5dJFmqpqngBmSR1x6fCP1DH3v8417",
  "key2": "3FCKZSZkvDwptVstEKa2PDe1abEpUsEytavTT7w8MsD3Jd2KWu2mrH9pcuEfNX4Vnspp1JxB8QDKJVPq2LWWWN7m",
  "key3": "3Wo72zcfD1oWcmNvcKDdMqn7WdkZ6TnMDEf5ZagtgzEQcmBjZ4jjnRLpfFSHW5n67ANHnWmqKRcbShpVniZp329i",
  "key4": "495VMcLNhb2EGSBXyB4jN8wtMwbzfc4x4sA8pNMnvmML3qzMcSfx5TxdwX6fLkdE1thKdoAPdts7oX84wAmrvN5m",
  "key5": "2YZYqkTyE9piofLqjqvuSo69cEqXfpQ93KPguwHdJAcXXpwPnUX6qZUyTcFEJg9ATzZiPPyRzR6cZvp3kYYKZs8c",
  "key6": "2CtCNgfuAmn7wx85itzf8ve57GKzwiKT8WBKnvmggZmCfVrWW4SoYx9txZRX7fV4eEsTSCNCbnDMaXVPitM9R9vQ",
  "key7": "5w95eCp1ajUsW2opatMR5k5uTXzXGbuY555KbcB8iKjXipPuqnKz3p6tp1E4WoU4rjE9h3mHVoCEWtk8qB9kF7ZU",
  "key8": "56vBPREpZN587mUWtrsXNVq2vmPaZHTSxLvASqnJbLPrmW8pmhXzKziauG7DmTEih7dKvS3dXpJYQeNEabHgQSLT",
  "key9": "2araBZpxJw3bkoAwtWxCGqu2g6vZdRwJiMrX6iu52rvbsvdiKUUFo8SD7pgniw7Tudjkke8xTEx7Uv3wgNQtMeB1",
  "key10": "muHyFj23YbtQjqNATo6ydfP4hotzQC1dCE9nk4L9LweW6HgdrZEL52VS3w3PAVXEYxMXTMDB9ChsffKbsNfWQro",
  "key11": "2xkM9XhSGsdUVjRUVGQnxePH9B3jyNcczMi8avfcJHeGMWP8Zigsx6MvxjXJR9VE5iWUb3pMDnw7BzQFXq4NwBur",
  "key12": "BPvJn3HDvuk3RXh5DmWK37wu468YZHXuTWMrjhtxmEB55pANNuEeDxYW2g3NrzxRyAtxBnUxFRN7yYZwcciuVhg",
  "key13": "hcqNEKjiTC8ZRWoKwUceHEwy2XHnpMotLZFfPjH8AvyuSdb6EtmrBMa6Jxeh3rDWqZQWYL8ZiCXGMQA8MAoGueZ",
  "key14": "YZhpkNyquE72qDRt4ngq2DyHCdik33gpn35F4jTbzKwfMLbCKV39rFBUgEdwLB48Ctie7t3DCvDXgBPfBSz6VRH",
  "key15": "2gsCw295bvYNLPVybV4rtshsrDY5c6Ch9zfBJzuHR8VTmzkCSWJtrXaK8QHjRbeDTSEFjd1MiNAk45jjC8zUY2GS",
  "key16": "4SCCj6zWkJ3fmpxuQL1YeCJVsdJQcHRcec9xJR6L2ujB2ysiJ58sQ736UoLoaWKPnAhUmFdQRfEEBjhTfYYMKyXL",
  "key17": "3guzHHmrUosSUk47Q2HHZeCWEg6Z1oEhVKzcmpaVNiLvgAz8qHhsJBbjG94vWcq29Z2qSSfF6NVXKGDGfTpqcRCh",
  "key18": "2czP4uKkPpW5bZhRBf2xvoJdcRVFWk4h4T73jLsfSruoDZCju9aEyVNDN1dYnz6EK5Y85HFdCbf9MhaT6UbMrzgW",
  "key19": "5PEr6buDDFcz2owkYDFCVKtbPdiiksSwgMnNkZs9mJbEzhemkQQU1ZA5xVcbENaDT51Y1SWdgJd5JrhUJWBzMG7g",
  "key20": "4jjZADBeuBA82G4oM4qBnNET8rJQrNgBoyqSjfURegrSeow37u641qLmDYcwqo6kHVHMVchRbw4z5T3pHf6M2iCR",
  "key21": "5YpFuCDbBryNeE4zWfHNoTM87oVi4HLf1WjTWuQbGHwd7a5cHUmVMjegxSSf9LBmynGtVBtXEr3tZFLysWHW6FGE",
  "key22": "rAokbyaoynUZZv6fBE9WMsvGs7onQLyFhvhy4DShqNAuAhhdqH7Lcz76nfgemWCfT1MRUVqrLnqUMz96rE7cncC",
  "key23": "9giG2UoyKj1LyHgMnLmU7jhEdFuHSoE6cRBt5M9ux6TMMz8GBm7LJfcf8Um6W2ajFNCvhHvjWERAXhUSXFa8CcD",
  "key24": "3exDZkvJtnrHFX9M9R8PGAYm9xyiAW2CZBS9gB3C5w6Pxok3UgNSVhkwEL1fWkygqE6TN6m3z4A37isq5WVyuvvG",
  "key25": "5tB3rZLM9fxjA5USipLPizgCx2WoAD1nuV3JdvbBeJm9WpgufW6yCRRbtQ8evsVh6DgMntCmUJwdnEnzXUaj3b7G",
  "key26": "5f7zkStmChaWmEvStZnMLBi34Uyx7uJJYvnsL6jSQMaiUTHCha23ark4DsyocEpmJCCj3MxxAtPAjMkva6ivUTDm",
  "key27": "4f3ZEXAV781vfG5pWRJotKsuGVr1y8LDD2N4XKncDtnYpcvZ4JrNR4syZAwCjtntk9ADbma7Ld7DYw91qrun84qi",
  "key28": "52qTEmAh2Tmq2Gq4wrM4CvkY67C1srsJ9ju9zm1C2vff25h6pQa8wCC9pv45EXQZr6fv7ujgvqTEH7BRRvaxiLKu",
  "key29": "2NZrM3haBRxUa64efYTyEyv236gBwXfJXMnUwVSKzTkEskujzXFUUs9NRzihPRbwgjVb4sycpXw9wE9nk6C5WaD8",
  "key30": "24CQAMbFJnRoQNWEHjuTgmeyu84Qo7djEBPrVELbweETT1vRArCmzHeyF5YbXtaQAy4sTaTxQi4qYMiQBQJpsD2W",
  "key31": "2pAeT7vhzkTmQfG1ZXGswQWJwtngAeZzLTXREcn7833DNtc9UYjWYkfytCKMWEvbhJS9XJM8ty8x4XUNXqSzKXhB",
  "key32": "2EdN6DGSwvXUhQgk3mXdeeWBSd4RiLZb6m3BYVGJcFQkvRPXxmBp4cnenenAkS6cM1AdQEepozxXfLyHuJ79pmVz",
  "key33": "3yD8QmG5Ev5TXNLt8L21vNJ6UQZyEbYrECwsXngKa7CuPdSEz6qT1k9CxtNLBMQ41KbebH8ZBLaWLhp6XZ5na1d3"
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
