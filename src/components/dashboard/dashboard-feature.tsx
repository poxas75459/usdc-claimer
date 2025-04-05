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
    "5bjCTVYJ6XtYkcJxUaQEcaN4xrRhbQH7V7TfcxFkTLehBt3bm3881g7PdqLcyoKgBzoCipQGhi7s3vvZ92F7V2CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLiQtiT5y8S4rxfmLgf7x6zQGsRwxYKndAwXi4HZssg4jaHSbr8bWAakfCJQANTjKRuNiqi1V5PjPMY4QThimNY",
  "key1": "XyuXB3wJiMWCyFqcB7SZdAYqd6Y3JzNC1Lv4cssKnVncbkoWxgozHQyFzMNhf6fHRyRbhR15MPCxKe1Bx3ofGK8",
  "key2": "347qmsYAcfKYURGtiwYdxyPKiJbjsGicmWa7eNHzn6uLABVsZCUnp9jKsehwJobNwwnykZvYw8ZsDRVsFqX5CVbb",
  "key3": "45rg9ffuitEJf3sK7wuAyuoLBksqHdAeMyfttitc4kw41EefzpKrhxgHxc57j7vhh9Qg9ibUEK9eEsmvysdiB55q",
  "key4": "37oz8hSsLCLndkfPGxh3Ghddf6TFhXDqynYuWrP6Z49FaffMbGmHQXFJsnmwK5xJjxpNAix2LnpPNY1DD4y2p8BY",
  "key5": "4BqBcM2sPZ4aWzntCDM74QBeSqahcKVh5HDyfzRJH9WVdB2Ucd4BkWo37XjvPGsUwzmGb94rTfxE4pDV7pK64gUX",
  "key6": "5frtV5oejDaurDTHwjXwiHTuxURpm7PoLbSAEsBJdd1AfEhpA5M1b4ytVuZb33o4m6TntuyV8ce28oDzS5PULoFQ",
  "key7": "38EFLZynLFhJcEjvzsv9YLUpVVLkQkee6pyB8qzT5nreodfRiFrvuDVib8VLJsxKqfGBSiDUXTtQ1PSB1itdqZGP",
  "key8": "2ivHtNxhj1uoV4kAWaQJTZpgBQkPyLdVMckRBgjNPj1kesMv4wZJQsC3tQsjYMZiuN52TT8xHNBJTrxgMgkLNaEN",
  "key9": "4yJxYjGgVoyGdc75VE9ssLvjK3frt3pe31d9ow5CXwXDBdNAWtqYaCNoVrDigtTfW9xkLdkJZqYYhBH8vDMsteV8",
  "key10": "4hPrwgfE1fEuzbiDuq31Qw4dNerNY36KPsFWFAqsgBVMZdQCmutahBKuMj1ayRf8bu21nPM1EHqQKT9tMiYUvsC8",
  "key11": "3F9LmysoJuKz8b2j8JKkJ4EzkzNGmQXEdyFXGJifpH3fC43363sg9JXmV6yc6maoZhjxTrsJAuyuTESkizFEwnis",
  "key12": "5tLrqrWRzG5223ComJKDP5Ecr9qfH94Kb4oUrxVN7CkaDzBeJDWM4FUozDPTwvZ2r15BoyvJaD3ys7QRsoenh6H3",
  "key13": "3eqYZbpBQMJQ9TT2s9CztWWeVGYHCd7hdGH91iq3eMKJPH6RuVy1DzWdi3LC3n6wJtrp1Da6sW3ftAGtoZg1RfQk",
  "key14": "4fvetJY4gT1JKgSEisjyNfjQpsnFg3L6SoAKmc8t3pCai5CqBMMT8VMhdZWd8EoPDHEU6JJsGPx7pj71xHSWCtWe",
  "key15": "2VnyhGzFyZWsady5FGtfjK3Md83XmU3tK2NS4RfHnL9cnGaaKMW5EcvoTePvTEY8gKnr5YWobXyXvtc7MBF3FZS5",
  "key16": "rjusNCyBFM8M8dRWxq5N6PvkA9AZhJYDaqjm27AdzgKRDUGu4XsvRxcM8oWp9jk7sgbA38F2YpWQMgMS7gbTbCc",
  "key17": "SPharp7ihe7t5XBTPmV5tS4UC7ZUr4B7xQkZ5PvgH6pDmP779CtDnpXwVhHFj9ABvAYtJ8FkDYZVNo9D6yAXG56",
  "key18": "3AD6KE5aTgJBgCzzdmoZJ6fb7iTJdcSBMGAvDU5Nwk3N37hMrSuuuN1avE6yQz9vWfzoo4T3sSgJoUb22kdwfXcf",
  "key19": "5H6aqhiZEaHCwrMXxHkUFLbYAv3Sjg8NyP7QNzSK7gY6jnTcLfBRQw6wDbpdncwUx44xPHs1HiP5izcgACwFzyus",
  "key20": "5oA2DeTxRaNBCXBTm4CGd7T1gAdmRCKUV43guBJmDF2x2FiFgrnp4WHdwCmntn8ewb81GofX2GmuGwqSY2TXAZQd",
  "key21": "n4hi6C1Umtvyu5YApDntRK9roqLyeHqd36iRMgVnMMhvNHt81rrmdCoBqkPnZ3us9eP68qJGoiJWrBVcAvU6sj1",
  "key22": "DQCYzmBQJfiEJ1yBiouABLuQU933epR7a2R4UJ9fTX5ZGzakSCp1r1f22n8AweexLaxPg7qP26aEkGJkhhZaGci",
  "key23": "26f2y6r1NoyWBjnhYDx3cQm1cDdJzsTmj6BWWG35yto1ERFWik8dq8mCCRKiQSHD4Vz9hLK7dWqVwMBd1qTUwXmF",
  "key24": "5yJpynUqRpXGGvUp5wjWJSsjfczqJPCnufho7mkVvoR3LSyA6MQDBLVf2pPDLjoG9kkCyhuwSX56AGD46Hfe2j77",
  "key25": "2RNEvfboLdAhMTWrDU3osoAap1iJtW8Cpijqmw4L4KP8muKQocKsZZZSx8W6zTZp17Rx9k1BALHUja8ueaxS2UMt",
  "key26": "QR8hNYEi3X1kXUP66mjtCfnHMmUmMz2tqQnGWEXH9QxmXRs3vmBHVntPqS3SsMeUTDSkd5w7ghavfAxNNpTE4Uv",
  "key27": "4EaisyjDy5Gy3Xrkxbwr3w7SyhpYnYMtw6gCAsXafkcEW3NvN691BLzqQJBhdA7GkXYfm28HMEFAJvxmi6j5BVnF",
  "key28": "2AZSrxDxnvXexk4A9WjfRL62Riq4X4N8opDNcTUn85PLFC28Qh4jY7PVBrHcbnPYC5QNswPHJ3tsQPWmDadXpes1",
  "key29": "3jHKUrDtGxewF7hprLFUiirFaU2wWrApm9L1mTprVy9hXND9K3reNzKWwGcWZrYMHpDwWJP591Xczwr66NeDZxEw",
  "key30": "4KYQMButTvjVQJgZFMmxfNTaNd32RoEvZsGMapGQgkEPq1QxSw27JLmv3hhSZzLYGUVTS1KLN4gLaL5oMA2ApS2r",
  "key31": "4LS9jj6vRhV7Xvyq3sPiKgQPdbz1SNKXafD9RPeCRqHSp4uQ5e7eazUF2Y4zVS4o1Y6e3dNm2B4UdZA5CUW22ytT",
  "key32": "2oews7bVnAubpUXVQYv8FKyXNizBvBsqj9YG1ZK9wpXGjH5LnMpePi9YZsqZyVY3GR8Z8mXcMzKckmTNsNaMmFAE",
  "key33": "4Hhw9E1g7BTHkrmc8oE6gDVk7EzjsQWvRVfA5eJCv2XXhnw9kdeD7p8ay8ACQWU6AUtBjj5ZUBnsgu1nYn5j1Di3",
  "key34": "48aRu4pDJGf583woepQ4vSgzyqCBmG8MK8X9crdZ4zUxHFKzJ4M6zDPEEgqWTcTSrJCUgqszEQt6tGop63tedWZb"
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
