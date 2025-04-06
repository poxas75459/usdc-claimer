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
    "3ZqB9zYjU21ZDmwoSAtHKpGHNtFAn8cd6dhdMyhkmX5JaEDBAxnt4ddSNmkGqS1pDLDPCjEub62hhwnS2RyE7cgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCCu2Ne19x2inggeMpwrmBZpEXZY3xsHtda8Nknortbmu2BoDATE36BquFoiMdn3DG6EMD6Z3pbgDjH7Mggfn7P",
  "key1": "ytbZ9Ue7BXnReUPYfFhXUZbjQpMDUh9BB5teJMH3Pah3H9JkcEPfQi8KtaEiZ1MDagZjpfHoiH4aaRu5DWUsUbt",
  "key2": "37VfunDesYAW3bXoqmhdKxbWESS7QQXxfBEKCt7iHPwaG4QW36Edzeopvx3w66GdBim24e6yZc6j8N69ppcewDnc",
  "key3": "3ZsC9nSbE54oTeZMTcpGyNtrzmwFkeVb2VUjiAaWy8ovC8Tv7kSehQXdQh6ZpGUTu2rD4vijJhooQRfeDXSwmcWY",
  "key4": "xNz8WJoJTN6LEYCQXjXUcwChaJaZefeWmEktPiEQLxBKQsPxa6qtztJ4CtwqCcSKFp297RCBNDv59DW4K3SEVYo",
  "key5": "pN7k7JK4Kc3whdWXd535d6nirTNrja6cLBtmgGn4iFBcj496L9f4wcDbtB5bEhQ8iDQiYgWXarPR1HP4EJzBwH8",
  "key6": "HACPNndLVBA7qtNZNehj4aP33V4Nt8i8MGDGJtfBEi8xF9swarNB8QciigxaEyw4UjPnNg5WWX4cKgnfHnpGzWg",
  "key7": "4b3LegbxBp9pBfEZWb68kiANftJvxPxWLq8BJUpcttVjEpyKQgwQJyobk4Thbrft7CaAmVyC3evr9GtTrTzVbEia",
  "key8": "2c3SVTDKj2S7RKoFm9ERMGfXHauth9TyqV5SCHJd12K6QBZQ9k8fSNFtK4DuS1ABMmW2zTonqDeLKK3Eae35TTar",
  "key9": "dzvyqN1hJ3Mpv5rGnx6zuV2mqBpFyj2HtrGHyqdTTU6yKvUvqFn8eWYnMixSiK2KDjwbtrfqYW5Y4APckYGWvLD",
  "key10": "jmNFWFEarCmfQkDYCUdPzQtF4KimAYXdTPKnJLKx9jb9KWQd7iYD6DyVzJMedUDuc23jHPb7gbaicRsoXG5p9cN",
  "key11": "3M7Xvan2aBJHUi47pGDUxdTa4ht3xsQaoPe81EygriDTHTidUKXG8cJgvKEJ6freEtCsSsqbUZnwjo8cpa44ES5y",
  "key12": "223aFa6EZTdUMSSdyYXtDr8BerwKgrodppA944XGRavSZys7MM3fE4URCiFi1mTWGuGhU3zxqbSAtU2Jusev5eru",
  "key13": "4cCqKnxicLx62j8JrML8dTdUp4j1XMzEGa1M4u15XaVWDQBvKJy4XcXmKcN9otuXiJmZHuQ3vCnUSDRCEbqawBFZ",
  "key14": "63ztmeXDWqW1ArGJ917rHKfQThmUPM5wd5Njkr4EbxvmXqkPwpLzE6qxdRUvyCFpontBScH84tLG5ZJywpDYW3U9",
  "key15": "5dutcmffpe3AWaJTVinQdbDczMFvmHxzGzfx51mCJcr7DkQkmcuc75JbypcRvc2tvtWAyjqDdpvHR7FsL3LhtUut",
  "key16": "K79Sr3BUwq7VcLqqt4G8bU45zbT2uMemQQnwYhYypeb6fTqQiEDP6HLz4Gsom3ZbV6dTs1NjwkuypnECiffjs5b",
  "key17": "64tmZoErGvod6u5rnxXA4n6ZCRxUHhsF8z8etSdL628ng7ZzVxkhvtkvuy5cPZR6qU1MLAWBXLE4W43p5i3grgyu",
  "key18": "54tFi3HJQepEU1hW8dRr9ZxhS9tEFjwidvQeNMJ8WRKXnKVDjJEtsczzAWaKdoVzCtDWgkfo2GNvDR3NyBJMs6dj",
  "key19": "55NHdgi9iVqKna7NrTZxctqavvvD6HvcbEeqTe5HZ9cnRx1zhzCjy9g1zg4wM4PSb4hjJmQ3Ha433JrUqDYvJaXE",
  "key20": "5B56yn6mwJUdkB3mhFrWbosh9zr3VB6B1Qv6XSFExrAnf6NMeZSfaeXZrxpRmu7w3u4sLvY5SYmZNe7SkQda3Y1H",
  "key21": "36XDhG7BU8aqM2qz9nxM73366KgtM21PkDnS47LigsdDTYEpQCPyta61KsntsAy6N7VBa8cQQBLi5oSnyCQKFs8g",
  "key22": "CFmPAzswrrkdpDG8LWjhrhwSwK4L5U6ZP88uCsWPR8ZYHx3rWK8Rcfn4yHjaeq4cqK1iBTNpudeFQ8hJgg9PKTJ",
  "key23": "ioCdWmuUCMcWGBWhX9CGMZPEJLMcEZLP7vDhgdoJLRikML4D1hen8pVMigLPHVxXKiz5CJKFJ7bpGGVsF1xeTWB",
  "key24": "4M9XpDKQr9E1stPaRnmHsjNQ8nNoYgzoGDQe5LZxokN4ny5nLAF4q7ASoFzNKJPQq1CWihDwb1ZteRncUhJn4CYy",
  "key25": "21erk98gDHLq81y1ZhHGVSvg2CcwpxH8HjqN87Mzx3W7acFZebWsSPqVZiwLZkMBAS597QTXabhCEaXuR9SqGzAx",
  "key26": "omqeNzVBo5EBd5EZEbhX4KpZx9C2Z7YonoKo1b2oB6iC1m6MvQwhaERm4wVNcRwg1YD9zmY2LLY9E6qrHxF7sAC",
  "key27": "3y38kPwNwd38EE79qpEGueB7KUthD9LJAz3QxEiXsa7tWeRXcPpL8bVYjqK3PZ7xY8vVjWsk1WmmvGfXYycNRdoD",
  "key28": "4TH1wSh5C8qzp3zgEmPh6wCZpYK5vELnvX1vwvZzww4AdVoPLYaAcTGfVyeMFqjAKk229YUCrBYrg4yfsJ82soyh",
  "key29": "2zCLDr91RY7FjHCZyGE8XEuEN2M1hYH6uTA4FbDWzcZcgjpsxuzKQ8FVjUaRzX6i8qAsETbLAsu1j8VeVxq1ynRN",
  "key30": "3VwizTgynzr8ypY9hHWzA25bwpA2Q6np96eLFLubhc6MRRqf5F4k5jwMW1mMjrnHNr9UdMG9FKPZREFt49gMQQiA"
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
