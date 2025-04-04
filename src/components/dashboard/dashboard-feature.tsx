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
    "bFPB9qmM48WER9nNGfEuGAPScBVU1YVb4dhBv4X2kw7Noe1GRmSoTWy9Vu1mBoou2ZuYLaj9z4KbANJ41DcjyCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nr6MKMFT34P2CVWsTr5tv4z43WLGZwMNZRt8BnJv9uBah2ft4BuNq18sgGkLdJHeQtsUKcVK4gXxUPaJUJ8fzJs",
  "key1": "3NHMQKuy8aZ2G9gtUDU7DiMeqncMKo3MNHFSqTY8g6opV2TpkJ1xHPgj4BQ6RbEEhE7k3zuXwxkbVuCx6zcy7bia",
  "key2": "4dgdcf84PuFjyq9WiZM1zzW9wm411P6yykYdXjT6owc2C7MH7hMQSZTu3TNr3CZRDFKfPQZ6HdspSJdd5UxaMLo",
  "key3": "3QqdnR7yLNx8afHpbnf9NAAXkpshajr3qTWLdk2tNoarVrZNhJvbp3SXzTsBjwfr7hL3EUEQAnj4NGtqX2iSySMA",
  "key4": "5LshSrGVkyPkSB1d8CTrehj9gaoArsTbBEyQC8to2ok7WThxmPDF3te3xDLgRqkhtK6Pjh8TXhVMJedSWbfJsMzR",
  "key5": "AoyLNG6treeBEDo1SrFgWzMcyxEMWgwLqWmP1bra6kDNi8nNtDzA8VgRpiMTq7pURNKsLWt5jT92ktMs2iyhYsY",
  "key6": "5NB8dXcf5aU8xqf9MBigFhVtLS9ZVHUCfmDu2DEBZKVurvivVWQ1SMTBF2F1dZp85BxJgMYqzQwPp9EXTTniQ5VB",
  "key7": "2LW3eQicajZKcGb6N4UADHGeaLo6TZ2WM1gsM2Sc8uRWzafTwoxQ3KjUkVhYLUw6fqqfqkxuivMf1iVSenNXAVSn",
  "key8": "5nn7h1KQQwLRog9LBswMEkbjuToACVEN55ePUgtSAewLRRLnsbR6J3dRCvLzdqC39W7ibYoHyJM3apQMgRgXX7ge",
  "key9": "4wKBZYrJ2yq9esKFazDxjJqZn5Mm8VfWwTLC5VUrRBZKvUiorSyfgkQpAY7VGjSNdvgHL8zWQ7Wbig7kSyxru3am",
  "key10": "4YTxQJe16o9YToiwmmj5ugX8JUffP1cpLLghBa8W4a9JFwaHG4cnoNFewnMxHsKP8kej99MYDGnUx2GwPxmbfEX3",
  "key11": "3Jnv1oyebBkYHiqq6AmJqbkBcNaXLca9PC6TughXxFqMTLaw7rtTxinAQk7MDuwncMVcjYFFo9nTXQYrGrPJf77E",
  "key12": "2ZDDVecRBb7XpnT5yadYsW6hK5HAPHkjmCJcAzLRB5ktgp91gy483VSYEUQrdL6LFwVaJQqe2TJqaVTr7kJ2m5MT",
  "key13": "5CTgCtoknHdKMerBx4zpw6Tur7UTW9SBdu42TrD3jFFiHV3EFwimWHrHx48yNBJZ2KHtUaHhoWL1xr32pJSunDXp",
  "key14": "5BenL5pLApLExf2N7abEfTXGuGzWQ75Aryumg3gZfYAbmavCgHr9EbqHhiFTGCbMrbmxtTTpTqjm2tMTxK2jpFic",
  "key15": "4BEKDE8LhYtXLD9g7fifUybvocs2HthoRpkfDk2GNUP4Hj7s4knUMm9kbi1pPjFXN5SDic5y6BtgHkaiFKJ75KZT",
  "key16": "5QcCE9enyX4GhL1fTrgBaFPtwpM6YJkPXku6HHLQyV9Xdr9UsQvwKeYdQEsbVan9Vkbi9L97th3ERX1ZNHcZUcEm",
  "key17": "kSs35Y2w7Af6sMNeCQ3xG4hPAu3uqFnQdE9gBsKWPggNCyP5hpu39HJqiZLVJgzTAokNqANN3DLBoZiis9oiupZ",
  "key18": "5oZqNNQtf3WM5uukVXJ36ZjpbBsa9WikneVznfqV3UKMJiMWEsaJ1a4GJYbPSPrhtggRNxu6gftsaFqXFYzg2cBY",
  "key19": "7ffAceMRFrMCQrqb3xSqHzJLPwD19FFbDjZPbN82ZbUctgsxF6mfgd8NxoR6j8AvJLGnDBDrQDVC7XDSZQCvEfb",
  "key20": "3gHTRbRBYRq2kEAV8BMbbJ3CLWW8BF6hXoj9KFYefknFiPkpxC13tt2DPBcGJ4DCidn4Ywm3JvSLoHVJgnK2kfc7",
  "key21": "49nBxjpXKd1g8p6vz3rQDXm8GPcSCDB37upZeru91PCEExKFbUv6KRUt94n2E5mqU75pw5LPg3yjGhSzUor12hqW",
  "key22": "5h8YGb34HJi5fqJfBLaTw9n2fn8UfwrnyJLxTUpxNnDhg1wSjqtd7KNb7HSPizDxbmH3qXavuwKLvmfw2CFgxdq3",
  "key23": "2n8ErkW37WqvTYoQHL6UWR42La5tQisXS2UM7gw7Amvpo83AdBmEqsGaj4dW5gRGZ93taVDUZGd7sMxKR5V12fAo",
  "key24": "29W3RLU2Fc1a7oqTwpqsryRvnCjEaR4iXEkkJsnieRPZtDhefeiSsJK4haezE4B1rpc6F3omkkQ4N3pLKcAt5yFP",
  "key25": "ootQfMGC9pPYXq7zQFxoDBRLaeD8j7v8aD88KFYgWTmEemuUco7793qDvxRffpww1qcffcEHYAjLTMczXxwitSU",
  "key26": "4gcHRZZtDQXK9GfV6opKaJCF382Nzfpom2iznHRNhw3QUyruAo6dgiaaM3MrTSWgZbvmeir3jJw79PGbxXfwzGsc",
  "key27": "65c9kkgzssmfZ33QznW7eSBaTwRD9qxxZbypgrU6EYyfWx4BvBpwCYTGSiHkwKfYcESR71WXVud3zYLYKkwGtYxM"
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
