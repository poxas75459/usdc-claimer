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
    "66uwN9inEtiqYNqVWZwo5YRnkrw2NBbHrSxBesDGNopxEgT4oRFr8Zvq1u8R4UMnorY8odqhgfAmHCYW6KGaWxBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HW4WTuU3pw3x2aXu2TcNHLqr9cEeprUZFmerDBnZRfTjF4f6vXuBtAKqpv3w2iCd2FYwB5xWWZZgqr4xSq161QR",
  "key1": "3X1rT2AyFa19rTjavpS8Wr5HzrmoCMB6f6R2vVAfwxsFPtAfR6UTWfsgsr1cQwz6dYx6AEQT4xPKskaWd5daCRW5",
  "key2": "mdrNXoGmk6dDXofKFFkfwo4LjYG6G67a2WdEPA7WyrNNnt6vVEkSe2PSgzDy4avDn8H94Q7SXiapMM1T7AiPXr4",
  "key3": "3oaXzN4oMb4R2kktoVSVRNuBkvJAAozsw9VC1L8Go7omag5vzXjcdSXAcRLsheTJ1hKmTYQpmpTNd4Kx7DK2cpGo",
  "key4": "3wi8kAq2sWPWDHVQpsFPkjmNrkG6G4m8PmYeMx1TfvzgN12HJNZnHR7Dqw8dbBy9wgK2udxToFQYYrYtkfTsobmq",
  "key5": "3HeJoqrpJaYBfpJoRZhLb6CtkT2UTZYhWpmyvfSrYgQhqZi5Z3DhHAAH1YjpScUnjv4sw6pJfxi1LxfqMGiMM3F8",
  "key6": "9zEzeJzjf3ZgV8TML5wjnnNXZntYaQd9KVpmEZmQnYwGzzkfozZVEHeweDAFktrgET6WPNd1zYmNaHNUnDF1GRg",
  "key7": "5ZpQfh2XNrzkXxMWqgH1g62H83ajWgwjTw2MRzr6Gqs2ZLCcQvEiuWQY5Ngc5Y71h86yduLW3dDkT9uYZRqfD3ag",
  "key8": "2uJgYrT4iLkP55TXdn8PUNarpdfz1wftmqFTdpwfYdwTbwdUDMkd38NAGZbqbqi15bzywb2kBBfJddiqpvGKWnF6",
  "key9": "5pHiusN7ZPpJLshrNjydTHsZ8tZrvfmJTmj1fzcTQWc3sgnj547sBfamR6mK1SACtaQFut2SENmaBvFgyPVfVRpX",
  "key10": "5nTa2Ce9SaYfaGGnZxxanY8VaJ5abnu5T6wVtQdkvG6xhs8A4JXhNifzDk3CRQ92SnzwceBEvDYeypW8CxnBR7qG",
  "key11": "5uEVk8Q1u9zNFfjECeBB1Uke1nsGY3Qv2iQ53LYxwft4UwyjAGt4TBnZmc4NMh6vJYvwJdRLfjBm3ByYzz2B72WT",
  "key12": "57n8U2nj88K6B3UeuBDPdJ6rccwEcrmhKM4yMeFfpNEaQz7kDduFmkhsMAXuMrCgRLnghfh7ByCku3a33gWn8suh",
  "key13": "MtunscPeVBjWu1kZCXqAtyVzeoLZAFGP3ob5QDgrMjqjjwHSXp5Xaz57Cgzbk7kMY2wgtqXnPdx7xUZDG6E7nmV",
  "key14": "3QrWCgkXaJcw6b4KFXyZnXGSGBnFxjY2CGTCwMsixaCmD32p4V1RmHF36wDNdKPXzJx6bczDogfzbdf6unM1Xd5W",
  "key15": "3qtcpQKxyxfLKRhdjQAWk8dBS1s819bChkj1xh4A8fXdDdxpLnVfZ3yFuiLtfRJyXC6TUAnwT7EaoMqmLkRWxy8T",
  "key16": "2P4xF5ueD7YoyWAB8eAQGhfBAideppsU7fbfvDtEg8d5PboUTH2ttGKc3yP33rEWL5fKbaQwtyBk1J42bQfb22Xn",
  "key17": "3ed59qdn2xMeqaVCCmJF5vUEnt99AtiNpRWGHDmEvQM1bsBSoEe9qz84msD9XCPQsvwTV5uFBRMUsCXHBmotq3r6",
  "key18": "5KD7zTQdzCt1WDco6aNqg5qRpC2ki2YFStwSECx3XQ9qyam2iQ3uw7USCxWesdy5cEKkSX26MfP31v3mWePkDEez",
  "key19": "2s853z9ALfhQPbZ6zEVYBo1hBWPAv5srotuAiCaxDvTpfZYPK31FQK5pN8N6J8umzBqtwmwD5z3wFDSCkcWVQKkK",
  "key20": "5iQDM8ZzXBDmV41bKe7MtAoofyP8zcDevPd3xTMrTx1L1AoCPj4ZFAq1HfHW42UNYX1fNZvTGZr5grtSnVRsX7dz",
  "key21": "5kk2ZQCX7mdNc6yzgWfLyLbwAZJvL9mLo2V9xvALRk1kTZ4URr1iMFs38dXLxnLVTPfivyRdngsKBeNpnrC6cPsg",
  "key22": "4VtobC7zSkMpZYz6EepkyCETnGz9GFMLsz16i3bcmowQfATYM6753idhrQc4vLuXLSaruus9RYn78U7R6YmhzNKG",
  "key23": "2kRzceXTAUGff6NNZfofbAWXiwp8r4rRwevpLsAqwYDUVVTrav4gG8y99sNqmsxCJ5GVYpndnkVmHegVVnLhZGDu",
  "key24": "4p1xmyoFoLGhM2TrEVc5RxAoNRaUF4dvTYKKxfksrmWgz9yDYs7si1wzJdMYDBQcUBdxX1DvMwowZUCojQEKAd8h",
  "key25": "19oikobywnKB3vtuJ99HtQU2f18y9yuN4S8GSpv8rw2p3XFXVAQhfWC6QainRsdkVjXoGjrNKx35rPVdqDorPde",
  "key26": "5FHsJb6hK5L97dw9bizUhjtzHzwwib6Avbg6rJJEsv2gBdwjdqvts9kxo7KZ2nTUGchV7bkH3nV5B8LnCmT5A3gd",
  "key27": "4kMpmMThKSX638yjaXtveK6ExdaoTXahL31ht7ay3KWpZt6uv5ixuu2DKj4CASA2MmyqCVPwmTzWRHPQcBUd4BGt",
  "key28": "3HQ46eWdxqBDBnhdqUaqVKn9bppeYTX5y3vZzyGpfbw9Q38oz7T4pupqEFaLmgv2TpfQ8UGt5qCh5hYqcJPGs75S",
  "key29": "2weK8bKQkWXsVSuPMhP6onbftQxBdv3fKsvhGUz3LxjRpttgpu6SMDF1xUXbYjrhrXzxjpiCEizAxtkLXGg5CEjG",
  "key30": "47sZs9GUz4cBHvkDCoYqSPwgBAN4dsr68qvc2kAauDjoQAhtZvST3KnnfqxrfQ8pYqSJNzX5XhCPgJpX4z1PGxap",
  "key31": "5mvcxGNGrE4dA6MpkWNU54vs9Aj2NR4gLgEFgkU7EvKZ1S2uQNaJy1D7JN4XaknBatn6qKVf8qpiehfSZzMhMk4j",
  "key32": "45xyZ3uwUh1gJ2EAkYrSWUT4Ypgwoge7hzEmHNBzkz4drpJarfH8LBh3bjW7dCACeKagxjmdkcQDTCHbtF4anPAK",
  "key33": "2kTfErDpbFauKf9sT739p385zXmQgfdCwzE93ZexC6yMPyGTN5Lp1XA8eKdJpsmBZq5N6a241P7aF8fsQ6xw4m9m",
  "key34": "5dNdwbHFejNm3ddv1vFdB5uDt7a57x17pDdyUXrLLoNCw2tLM4xWgDMVkPtoNfQcfZZNBMV8GNeFogcVvzX8DGup"
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
