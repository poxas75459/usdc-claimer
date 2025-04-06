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
    "5UbvnWsYVHaecRaZJUjKmjtxoBHBMgi8Pu1Eoa8ZG9MRqX9Vxhe5ChQewQnmgwBXWPWxZUzyfDE5Y8EdS97Pqaba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QD6MBKgTg83PhRwayJF8i9WaxuFhjjitj79GTeEHPF2EYTP8Fgw5zH9i2uGhwaDmsM9tS49UWXY9uD3wvD16PXd",
  "key1": "3hTXu5RduERsdxcaSZx6phZTJVWuf7iwUmAAtBBXGKSbX9aYiFKtPJvthjBqRWWN1M6HudnqBT4Z6iZQCQo8aigy",
  "key2": "5qu4uwck69Dib6o2L6TGFZz2sVeLaLVeKnMsC8CwE4fDvucJhrkJV5pNXvBq5ZM1dNRA8XYNZ8ZWMtWDimNev1MS",
  "key3": "3yn3StLPWA3qCVKpHbfvxHftPe3KG8oRnSXzmpDZQ3f9FPEg7Xv37a9ayzYSdG9U2fykwYVonsNEgQuoVnq84q7h",
  "key4": "5XJxLiYjp2WC9MZ52UWBwBn5G8y9H6LvwJDX3EJnzdAXxsARmC8BenPX4c8wY5PXzfsaxftEriSS5zfsm75HpNqd",
  "key5": "4B2Ye4pDXoTHsm5155x7uwDQu5LBGiHRU4GVx8JZAJnakr1XFFgkVtscU8tZobejWngbZGy92qhxuj3FkhsfP3NM",
  "key6": "5V3NL3DHFgmB1xPe2yiwTr88krZEAxmYPvZvZtVvPaUybwKGsMvwDhhY5RxWf1KE7kmPAyVazJJ7obTAVuQ79rfz",
  "key7": "51QjU1QAmXdpaVK3r28VHjoZFJaWD9dADELXJjbMNn5vTxLdKXBpAoLKAydh2cXmLq5d6K3XxdbURmpo7YFsNbpq",
  "key8": "48MY2cEE47TJEuUBcXarjUsngy8HNwjEVU9XPRiGNKj4QbtCPdURHNj9HYe5QD7hjDQeTSSbjaYuqeJoGZutXPYt",
  "key9": "3DJzsWGbTesm5xc38mEZUBFHW5usqutLyQPpbchwhK4fiZJaxLWaGdXQooTP5vjqMZnv6RAmssEckCNrAYq2PQFC",
  "key10": "5pT7p3WGFeFdp2KYnMkYAdDM3piuzViRmqjC9V5UWDVRmB9JYA7ts6ib7nmhmayjVkHe2DMieMAKmprRUSMH4JcY",
  "key11": "3pMao8p4V1LMcMQ46bgWB7NNqk941G5TVkFEgeCbHHF5zmyieTwKVSWLvKDyeWLweU3sa9i8QxqS7rCyvG5Cp9Nr",
  "key12": "crgjWGkYeCFVPYycCtcgJ1RMnizWyfX1WbpKa6vXGD5uCJcwTVb5ZTjiYmF7t8rwC8CswhG3viUrmMFSKZdwKpU",
  "key13": "2jLhdC2zZZJ1aZKhZiaoFN2NyH8rngozAd2Ji4votrMNczQovbGq1z9Th3hnuzRCdq5knC8RtPRkkEGSaiV1qY23",
  "key14": "6PEbFGUQsnMStBXys8kpT7dLAHPTd5m8haL67n2inqrvDH6BEnrqEbdop2eFBajXd4qzJcLsQEudic7c7EiV7s5",
  "key15": "25uR3LQujsmf3z6CsFovPbQbEVARBjPEbZqXPai2cPPAadYizE2EjrgMmjG2VkD6M8r2eNFUQXevQBMRrtBmiygN",
  "key16": "5onQ62rKWoxk1XUC1BhCL2Gme4D7b7h3TGP2R6CQ3ELTJHnYEhuAmyq9TGjamJoV9FYcfGpZhKamSSymMFedcJLK",
  "key17": "2E2aYWw8P5HDDxZAf4pe4S3edZ7YGZv2tJ437zxZRk6fCCCFXt61JEm1kFZnshNkRtorVcWhnc93ExLhHgSBY9zH",
  "key18": "4MYoUojPipiEoNZoXE5KW8A3aBTzBZkK3DiKfpGMH9C6Rtp7LeJPbkdRyaRoQmHqEzpgib8DDtV1yxSV8G1mDTvy",
  "key19": "5GLSkfcqhJh3WPuJG7id2fBn5wNAbPXcH6E8k5tsrrRkBPupPPFRWwvJfN9W5T4pLKgWge7cf7pzqhQwckZcB2To",
  "key20": "2YdZZaG9g42iYDGLSJJs5LCaNcHnod8RwNeWvRxPGqBcykeXTpNQMkT56DaTfthNbWVWHEBr1Tz7QYPqqvJuGypg",
  "key21": "2nyQ4h6K9ykFTHoD1qxVH231gYfkgNqgtmwyCbgf3uiSADCQCAEDfE1ii53x5HUE54rMXPKYLpNZqWf9EqWfKjP9",
  "key22": "3y4G8XEafadfwtqV7WGg8e2asDeQ4Q21hJ9orQ7DvCLXmzrXT8iCVRGESJXebRuzdGzL7HppwcdE6DJQmaff2GVJ",
  "key23": "2hMZg7BqpriPWJCit78jnnhDZGTsSzT5KqCAwpZvxA8G218cewcThiRJJWXaA5neoN8b75n5KhaDViVTCThwFyVP",
  "key24": "5Sjort2KLozjhJgGCHwt3wjWa6J5McUtnFsgBTN2jRMdx7jwobqFzDWFHLYET82ZhD4Pnx3BsyWx5FLtbNALPL8y",
  "key25": "5YvWFZKKaLjeoNJdTeaxhNMkc2wKMVEXb8LLwsHyLCapKo34D5t9ndNY4jKYWUcfmmporb8RDuBDNbLQGsnDvErD",
  "key26": "58fU3DZYBaZYeXgU2xEvSqkqFDjmHLyMpVe2E8vqK8Ew15w7cSsQNJ6TYw82KqBvbmUrK3ggH2BNdGKifKUojosW",
  "key27": "3WoD5riAjS3pGffJf6YcVgowe6zf6pTV8eweKo6CbAmZ88c1yHSP5ycLofczn4MTuFfi4wQ45URK2vFzvruaZ8Xp",
  "key28": "4smmcBwBCn4aU7qyXBZ8HbQfmt2Q6JhCNg675e6S8ryd2rD3xZKtHbd65D3ezy7VUWP8iMTMowHvCfVAjnHLjki3",
  "key29": "2f4sTA1feaVbyVA4ACvAzwmUC7ZkFDQaAxyLkr6a7bKzk7Pydwfcwf2BvVxq9xSmY6SfY4sAG225E9vbzw1m43ew",
  "key30": "4CERK9WDCwoLFnsm85r3UPoSokyZFkFwbS5Y8Tx5phgKJwFSfohSELXSbVBXWfR5N1oK3nTGyKTXgGBxs3kiiLA7",
  "key31": "3XUxeymx5C4S4bVWjwA4ptXHdZrBjpZH4oP91n3KTwQFcnpiU4Ngs3eaRUWuc89kCDgs52WsftVGPeHdfQkPrqzq",
  "key32": "UjaxeRK3QdWvAQi26zENb2tVzfDqVbwTq2kZhSnCAzEYr2fvANQncTrYBDQwRCrTueWmrGWYZTiw8Qwppk5cv6Z",
  "key33": "3iYMMQFEp4zZFUP2sMn7T7tL7hDPVFWrVhKiEb8HshnqYWir88XCsE8RnwDSq159P9P8krJtGawNDWDj3Ky2ojkW",
  "key34": "2Ru3ELob5GHvpjHy11K77qaSaJkjtqcLp1otfEEAZ2DTiUiHyioR6Ku2bQLpZf9sQ47uqMkTMGDxHHV1zjY5fpiE",
  "key35": "26ujftmiRBQDYRiohM7kFSdcJ49946zJGqFQzKsy6jtvT3qeBK8zJgWVyiPpX4EydYPw4G1HZvXB8qsHb8bNJfiw",
  "key36": "3nAuSRsNd2YhEUYrCHcCqj84PKKdDXMPeYtPDyQD42gcpe3sZH4av26CP5JKcjKRfthFdcshmaKqa6JD7giavVWP",
  "key37": "HiLwBN9bW5NUhSTmxC3SP6jdPTtPZMzScjK9bzbLXZVcSQNBEDwFweZLMGWY6K52VhdcCkbXnKiLcwpSHASAEze",
  "key38": "ZyxHNmrTYTFhzQXKLoqn56Haj27VF3w97SWuw9DeoKFETPcV2UjJF5KjhhoepAPVErD3FCt2QyFjkxTxjrPHHus",
  "key39": "ULC4KzyYgvzNSssYbD3YnmcqBMXsgp3bdMiWxr623KtoG8ThRo3ByWwe4ScooAzNB7hai46YB3nPc1gkRhFhwfF",
  "key40": "4gJUkdDccEUswsBHz7vzHeE2rsSx7BDR93xBMbmUQZJujHTna7kHBzkBMFUXwGP1Hf39KnFD3EDWaqMCcGANjrdg",
  "key41": "5FcvEcA34S1r8tuDYsRBq5AkCQ2TkQNqnuRzyrUk5R3rs3UVVTUdFb5JQ8aFo7kmKMUVBPBRztB892d1QSFPzC7h",
  "key42": "5gCcySZkYzekVQnQoW4Mmdt6JcnTLDpEfjLt7E5jdn2NCsAUMGxUEK44w7GZyA5eRVGMx2nZzAY5CPZeiMoqXKd1",
  "key43": "65f8cNCpjCPKLZm48rq76GE9wSBwGZFW3rebm6ksWJAZPLRpjQtJNHEA9dBm71hPgwkgF6R37njc5HgfLoW8yqjs",
  "key44": "4bxeykCMJZHkjs631Vsw1svrBsdAqfnXFcZMt9xrhsJBKL3o7qDHcQfqJtGE29AFCHjKKsULKxGLKZEJ2cDYAKzM",
  "key45": "5CoqfGyr5GmRZXnW5DDSPgJ3mZCwHT7hC5sAb86rs5XW219DT9M1mNpGmdAtZNrxbnAySz3PkfyqWm7ghTZKin6j",
  "key46": "MeqEggspJtehLwpJxpwuxgS1JuiKgsa61XHxVLYUzrwjR6h4fZjfx6eFxkxJZfPFHJdotcqNRETVyjWZDUWuhAQ",
  "key47": "35poATsoHdQmqWyV6bTuA9kwm7zWFNei5zMEufZgsZeNbAqJganGAjrPwp1FoSvknUkNCDtJoU3nurfK5rhFKoWV",
  "key48": "qjdxHiaEn8iH5jPAzD8Vu1wYJfEcWtAD1Q3f6WFk8EPgaH9EU7aRX1a8ckec4K42cuFA1VUsbwo6SC4o3wEFZjR"
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
