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
    "2wuiXZngfKxcZLRiDvA567UrL8ULHXRgG5ve5fPyGce3uHYwia8qUD1h2Gwe96tq6HwCGUie1p3USB6foaFwrzSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPyUZkGNTx8ZSLtXT8jhRKPEtANMrzEYhveEvzdC7UvodX76zy165XgQkSTRBWM8BAPUcMZ7dUaCjnzyUkr6cL5",
  "key1": "2Bjf4oZVSDYAyRPRjnZ6GB2LKdzBgeBF3YPkan2FkgQ23v2va9guGDPaBcQszKZqYfWDsAasCSne5fngcuV2kMXs",
  "key2": "3QrusCdta9mjSf4dtpQWKuJv92gieEAeJTgYXWveYh2ZAA5tfUx8DmdkPzZgp8xbEy3xjMiP1e8F6rr9VjhZma14",
  "key3": "62tfEQ7qUJNRSbbMEsqznvyTeSDr9v9e8A165HPpzNtbeebTwCEkk4we5JyxLMX7mBQKRovuM6AQG7Xd32YLeCn",
  "key4": "3k1iXbUfbcwcsQtQSRdX6ALzBKpdLHjUhCQmRLetUMQGinDfhNpbdHXaYnV77CnT3L2bvhtqSKbErH8ZEUyaRig5",
  "key5": "6Vb8mK57hz7UNticRexYnYi7H9snHCrN1n4nkuVQPmwUAnpwHihRY5G2NDosssdCrmwk6pHbbC8vYXTDFpU8sb1",
  "key6": "4FcSfU42WU6bQpsQcgviN8yyrUjLHqDPcVwGKegsBA5b3EE2cY5HLxmLJCFkQuS56EkG3gobBR4QJXakPcax2nY4",
  "key7": "49hcd5RApibjmaVStdh6yMXyDiWzUsHkDR9tGmT7MzQx6ZRCk9H8mKeeiSkbeJvC2H8k7LRMKHF4nSAE3bX5LWi3",
  "key8": "4xTe3RfgjQfP52iWstzsHVeHzHWxRaNHq6py6fhr6VkTwDPSb52wj1CTRQ67zTPXJNCU7BNxRbexSM17zpZPJxiL",
  "key9": "2iVCkNCceMne77uPNMuJtjPfTrgY6JdDwxEabYeC34yBhn1oX1xSmdNScFbSFviiVkLR1Hpq4vrD4oJc9oU3HAhx",
  "key10": "5FLWev9YWST6oEoqbz3myCd5WJALAS3TntdpQo8orhzPgEvDBmYWYbSxo78n3t8JTVkFvExKN7CfLkVwmz1KMxPe",
  "key11": "2vGUKtNmjrUF7S7oMUtAParyK9fAZ6vCUq5rY6iCQQNDL5N3sjg7aJhdKo9SEXT2AnvgphzChGrVADKx5sC5CRFC",
  "key12": "4oLwfsgNhobia72Zbh393Kuswk6Nddvt4MdwyVk3iCyabHEPdxMR5Bo7aDHMtCuhFn4r2buDPwPE7gmWURV8bDTT",
  "key13": "3RaV76LVSG2g8CdMa5F5G1kdxsmxbynu2p1ieMqKBBdSVQpNwtXKAVMGCttg5LB1scSUTXhpmRJ7yYHs3X9VoodH",
  "key14": "4tq9k6BGsaX6YAVNR8i1jMFR3yA471fdEnKYS3kRsm6xjqMAkZyEm75qcSe8J65bQJw37E4Np1KUwZNVZufa9CPd",
  "key15": "5S8DT4G6wk93cuTxTu6z6XCSKfuQmDgzH6upCjL8A7sNQervimRea3ULRJCU4k9TWZ5qbJ6BT4XBcogruD6wxTDq",
  "key16": "3tg943h2qDnnfqbeMNda9nCLWvM4EmTYcz6WbzZtwc863ChLwvFAhFuSHdH18tUHqFvFh4FN6jfnhAwyCmsraygS",
  "key17": "3HRDeBBKfTSGX7Sg4KCBwBVgrgC7yEqKAKpWZXudP1jH1BLa137rgnKjgyBPfvp6pEwC5dPHsvGqsqwtK3FMhuyW",
  "key18": "5nj89GGp2RapikZzTD4n9f8u6NPCU6GocbN8nWXZuevv1TwJQZwt96MLFYypx6A9ExCSZxpAT5Y9xyXbXDWt59A9",
  "key19": "5rJpw8Qr3RYWu3xyEqYRACS2ANxD8bH9sVsqxARb7cQzK9XyJFwNkDQAYUEnmVcTvs3djCU3V2oSfeDjtKRHKGUz",
  "key20": "4yvxpxMFTETkgTk4Qg3PYce3QJeLzQ7tVgfXgo3twLEbSYnbhTcCoWGAMCsfCNTVHV8fbD6afqk1Chh4njKLhSkx",
  "key21": "5kjFHu3aRC2dykoZp1pWAH1c2EAm1qHzz5LJdy9EJJFHvDRpgtgSe1N7FcVYzCUEp5GynYorCYyTgpZv6k2NZqMP",
  "key22": "2QbYApA3KHDEDJiizC6SaEmaPPCUf1fSK6dL3nBKmjuoYR76oMigzMcZ6QxxMfQt7NiK22D17NDGiskxpPqLCqW4",
  "key23": "55sUPP8mS5Ljfzu5zpq1z2Yn7RNUgGrywmnEPhqaZkJzAQ2tCYQ7YZQSk2E8donB5kUVNtrzJnXM96YLev5iJKcK",
  "key24": "2PACrnRd5BFSUiSw1zNEzRwupCSgaJLcb1DJGL9DKwWLpwvyMkosuDhqYusnYdBAnZUakChgphjdjwL1irtyg2k5",
  "key25": "59x4WGbekekZkgk5YFb9yunVzVz1PrQ3ySu3AdSmxtkkossr3nTJM1Uo1k7p144JQXDtZ8Z5nmbPdKWxtw7ZZqq5",
  "key26": "2zPtj4CaHvDM4VxgPyn4rU7nDq1Dk2NuLChZhBViYXpspCq7ZaNBQDyQYfgdhJ4vj1PCa8caijjfmLepqyG5DQBD",
  "key27": "2dbssQFsETbuDG7ygiZknXgRBTeBWosp8WtGyGv4t7z1aS9cd8C871hFXQdVgAYXfxF6b5eTn9vsf1TsRiH47xAL",
  "key28": "5ji5ho4Y2jui76mNCeKaJjh2cGR8ahXt6oHFHhn9XV1huHkTevhPiHNGRTNTxYo62FEDz9vZC46Wb9uSCqYfafe8",
  "key29": "4tQoCstyLxXLCtWYW6p7jBcF1VAWtExz77kGNnqR1fjuccSgLSjcxW1EcHbYNfAhpJ7Cq9f8koNJEUzKCo4AsnXH",
  "key30": "m8LUr3qLqSgw3CLdbEVwfPWGPLa6apR1KUyXV4BAnvFkrZFRFr861XVSmGDqsKrSJsqrRn3yt8HBTxveRKc1R1q",
  "key31": "38wTiECSPF8cN1jD2CTNg7Hire3JeqzAsvkymMtrxtbDeBKTF4FXUz5UdvurSDJodDhupGPunoZmnmpRtxpzkW7Q",
  "key32": "3CAXvh8zdw8gpfBD1SYppfekZ8RSrpeA4ePcAHZjcRU63x9paY89eDS8zodpMJ9M9PfkByRqDqH8rm7CmTEtiFEZ",
  "key33": "3EuDy5fSnZTNZcq3YJ2N4vxp6V8nBjMz5dUDr1SqS2CSRkdcmoCPaVKtL6NCa9cRCmDhyv3NkLK3b8knDVgMzpqo",
  "key34": "43dnFkS2eZK81xERPtuTrorzAa8AsZdpxJgFMXWmJPdnWf5tRbXsm9LcBDEaMRDFyd4cEzjWyAXMGy7VgUfNpUG6",
  "key35": "43CgJeJei34nR6hH21NfKPCJqauMgC8jMsnosR6VmiujaSk3rLpKDncVm7SxztPm1fHfdWVHi21yqPCT4fRJ7VhD",
  "key36": "GdQYGpxMuJRwLcn7H8CrKv6CueEE5p12ou6icP7K6bnt9RmFLMuPYwD6jcPYTeK54SdfY5chpsEtiHVAwyDDmsf"
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
