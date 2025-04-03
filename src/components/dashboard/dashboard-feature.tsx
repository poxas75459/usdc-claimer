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
    "2YYhNyiZsTCpcQ4f6e95LU2cL2ge9hMEfvFUXEdxNRgCdJeUF1KLzziV7WW3DByhsuD6owik8mnQp3FFN5J9qHT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531xnuGst8NYP5RVds71jQMw4mW3TgWMzNxEyDzpuw8wuav2ndhV2VXDirt3e32DtrgwvLpuDkCducBwd1fQVLWd",
  "key1": "3jfFNPCcbGfdbLRVkW14DvzWYeRYdy9xkkLARrakK5zWTzMcJ4NdmxJjGfnaw2jNVhSAab8MHkuCpHSBgv94AERn",
  "key2": "5dgnL79ZAa3KwzKoV7paoZVZSgWRc6GAxr1YzBHDnS3sKf6MRhH4DkwyAkcgQ8uyZA35vzc7HiweFK2ptyW55u3Z",
  "key3": "5WN9yhGPKfV3GDnSPkncXj91QNdL1wgtjvkuo3CQb3L5LUw1BWW88UavPXAGY5ggnmJFtkxhKrUHWvnYmWhQw1Xc",
  "key4": "5U8yA3wVfPwf4FPZK2zQGBZTuQciD6CBaqhwi2Az8k3inh5v7CuE5UAUgbWutaAUxMiPEgyVBoCDQYQAXhf3nDSa",
  "key5": "4gozMQzrLDCvedjTfHSWihJM8Xns7hF1MPLv3BXcKGGUoEFJXxe5mFaaEnkKCJCacD46KwodyH3Kg32LewSHEz78",
  "key6": "5DPfs9vQGcXrBNzjZWPkfrEeYNUSqjjpupPUeAP8XodCjbSK6ypJthpMvUBqXzC6UJq9cGfA4CWipjGs5LjKeJey",
  "key7": "5giZxvi6nXJzrrHTGQJ4mskzuJ7neiGU473oMj94uK5jnakXtQZKjc4EXQQMnxH9u26kbhsk862DLJWEV3v78s2H",
  "key8": "5NtCq3cuk9DXhWjm1F45ySHesrCKMtcB17hchP3m2VeYSKctnVygkYx6f2Wp8d4n5Ad9iELH7DmzViDeNr7feoLZ",
  "key9": "4W7V3tGqNyUZ4n4eQFEKmBXSoRcE6aUAmJsBc8npuHud5UKrvzvyD14VWU25GiFaK5bv9tYeqTS4To3A6wGmRC49",
  "key10": "2aJXNuzDUD36zcFc1eAD9dXwbw8hDaKHmQgcjFQEsnZa5LXHH5jfm7Ac5YDcJtLtZnM8bAfZHQYny84Qm1MocQKL",
  "key11": "3Hr47wWNHorBFstRc2FuvAdUndjj4ebzeMA6XArVmVwyzLmefXkEg4i6wWbwZFWRu85xErXyXyp7Ebd47LaupzKr",
  "key12": "4RraP28Pn1PyMzDDe8x24Un1rSvK9X6GcmJbDbTXp3E3Mh7o18D9ZYDNM2sjHJNrxo8Gc5U41Rpur9EKsE68azij",
  "key13": "TnGfXnwG4TpPjAgdFQeSRQSRbW3sYQWoAhSFSmnoqiXFcfo9HEBgVZeAPhAAerWZCYyJuo1RkuYHYGLVk4989Fx",
  "key14": "4beCiLbeosGy8qWwgvFfnRk4N6VZLmBVpmscNb2kQCAD88DGZKwBjwEqu18VkxH7bEUazdQphKkWhUZ61TzY3MPF",
  "key15": "56W72jEGrwCw14fkMoU6HSrz32hjW3uAqFczi16zuTPfajLG5FJ4oJ8BVsgDMfcsw8hGEQrBNodfAEth8bxGe8i8",
  "key16": "47pMtNZAwejvCS3YKyABn19Zpu4Fa4UxLozgk5cYD7Y1Zt55E67aMKz4xt2aW6oKopqQmjYwtMz6pqJPRqv3BD36",
  "key17": "2SU2tzheorcRwbSBLWV3dNFCoLrWwTki2eLHmm5cDTobSA1ZxH4zEZJy1xZX5qsCAtvGRGE2NyaVoTUrGtqmhE4N",
  "key18": "3JbTGPLei8mJLRFkKfaiL1bjRJDvU1sN83CcXkxTy7Yqm7Tg7NNoVZ3UCaLu34TYfj7bYyCrRgwcCHVdaSYXAt8X",
  "key19": "5p1kMxH2tknMEiMeQn3daQXAPe2h4wUUhww3rKxSCW9nsnM4RERmG7Gbv9KMkbKHLg1x7asgKzTQskzAt1kK9QzM",
  "key20": "23AGhbpMxa8ykjrtshJHVbudm4AC3WHrHo7FU7AGJdEsbE8xn9KVpFYSmcxS78JMBiQzVoLWNAdCkHPBBhN8qK2i",
  "key21": "4tq2JSyw4F7ALBn3wSsKw4wtgVKHKRAFsdNeZB5JsptpikYvqAgHPhjTiuN13PR7fGt5ihAnWEcoq5ZFFrgMPk2C",
  "key22": "5nTLjcyb57sBQhx2Nj4b9REbpX3qWuJKZpvnREFhVeFsspF8S3sMzSbyZDAsZ8ipj3xazdUwbVep5PFYh1Jr8SuP",
  "key23": "3j2u8iwHj6vDdDaQgzzwhgycEAWoM7mSwwu4TPxx1YCV72disPp5SeYwwv8dkasBzhrLfShi5AjbU8E67z4x6CFQ",
  "key24": "5yEdE1SvbGKZGyspD7HC1Aa7kZzkwUw5nRc7KiKnXXRjC2pz1zfqm748fo7xLYZzCRdFK9cKLmADTgJYjLYwydwo",
  "key25": "5QwRUT9cKf7paS7fUUAaUNrUE9AGk6vkD5kDAtfWY54eH6X1n2vytWvnFo6AcLPnYTHm5bgFcotwKcJSAwkUMJfa",
  "key26": "4W4eRNbkR1DbsCZdmbqPsGsjJUiobLdwy1ZNhef8bbaQeLM3CcJdimeEhVi4ZwTZhyQiF86jkxoksQZmhbLeF8hq",
  "key27": "5M4x4oXkq4jy2Q3koRdF1SDMpuukauNro8j2FFQDNkDPxbNbaDwMta9MUdsaw6N4SQPYkdshXfmeYTNnQ9ieW9MZ",
  "key28": "5M9s1kiBJvHMCQyxKgGMwAaFRKg373CpysHDCwDg2MmcXZqrvPoh51VaKxakgVU5J5XfdBNo6AC6EE56ujmDdGa9",
  "key29": "2jqSEond9wPBf9T4Ubmkq8PNKq8CAtkRnKLWQU353xAN31oEiNcaddAD871K5hj4P7r6EofjN5xEZ8khqo3fKH42",
  "key30": "3kb1sVLKbd4XkAJD9gAWKSaaWkkM9caZa3oH8L5WJCYRbkgAMuX89W7hzbx1TmxaDCTThnbeHioViweAT1EdVenG",
  "key31": "2EfHNzzDthsz1nPwGhSZxELRPRW7iLSx5aCdxbpZyD8LMmKYAu6y5peRt1brNHtYGnRJsmWavBhQc1jk2LNhkNup",
  "key32": "3WAjNCesMFHhewMiiQEJeERdrwzeKSm5Lcz8s9XbSX4gQG6bX4mPjC1oFa1NkwAZZDMjxFwu8tb89QiAvNMJV6m8",
  "key33": "4oLybuSisnDQSpKuVoGvhTBUEWqnm5WkEpqQ63uRS7P7qkCsKRZe58nHksdAHwkoKRQ24ESukXzEEezFgG7J5RQ9",
  "key34": "fwDNVDhJHiTN8nYMkwnKTyXd3HMnTcCTg9c1La97u25x6gTHPJmZQZnbo9PHUd88k4QQtsqtEEAb3P2kUzU2A3c",
  "key35": "5SBXyUET123fYUuA5hcggftScHdL6VSJnK228wKyy1LwMGiFXhixRQWReNKMkwcv2zRZFAEDDkicQ7163mX8P2sC",
  "key36": "3AwzS1fa3MkwtU5aqMsBoCxET6gNfUuh6NMJBji45ZepcejNURpPquVeQyoD635hZC86SHpa2CxPd6dwiFHhE5iu"
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
