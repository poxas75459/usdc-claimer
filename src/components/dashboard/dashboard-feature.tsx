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
    "6dpEge2w4sfvNtGMGnSS2mvHNksE3DLyKdrYr7K4WinYc3w1xc6J336fNA8WvnSQG7RAETGnPTK5tgmnE1nZPNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLzQZY1rFtQ59pGTuivVw9dnwq49z7KVzDVjfGTWAjRGCnHCLq7Y6ajcZfEpr8p49euH3ddWEA2eyCdRDA1EhG7",
  "key1": "2WzaVaYsJkE6xiK3tL1bVdCzrpYsPS32WycoEb4VsMnvDZq4MxFEgC8pc9VbiHXiLVZ6GyS3PoQatfnYTfpMx7K1",
  "key2": "3nLgBDCeRAS4AQuSwCfwtHZ7eWNHt95WdbXCUhabVfoYcBEywxieeoFzrz84wPegEgxDB6F7v6kowsmmfR4kD7CM",
  "key3": "5Te1q9oxDJU2Q1nvqSffkxENSur12Zr93RJZPJpG1RCRkecBemYrYZsEE3ct1UFvHvRcmhe4yDVJa7gx4v4qThfB",
  "key4": "33hF1FGeAKDeDS8PUQNYMjDGzpsFapXLqq3up3m38m5nUatVEYsycRDdSwuUXj8VPxUvtLJUq3ZPtGWyFMtJEhyD",
  "key5": "34CDv4qf9Svj5JBpQwC673NDKeqmLSWMFKsuEY6Ju4H48ZDTt2ghC8vJpwJu2SmiKaGopnr4U9i4winhSUNDDuEn",
  "key6": "2sGteKV6Y1FcN9W9noBdz1r2HxrKtAEAUPAymGD2swi9tpMwtR5pvL3g9QZUmkWUWwzgRrEfTzxzh1XEDmYg48yP",
  "key7": "4s6v3AAbHuV5bEdJK7nwx4JHRfz4CYtFCPhsR3ZNTAqb5L3GkggW6KsUHgsZScEhosKsgD61wsKAVk4fM238vGnU",
  "key8": "61X3VzsUi3dVRWST6Q1Rm26ArhFcMAL4UrRiwbjYA3ByErskcuCCd3xLeTGipW4W7HGKbJHZQ5RBz45km8vZX7MA",
  "key9": "3H8NADg57BB2gVUkz9CrzZTzj5LU2v6eVZbva77EuEPggQ5ps2cyGZS3nUi9zwxWy7zHWY2qbSZnmykSMFKuNVsN",
  "key10": "UYXFnRSon6e73ZD9wm9oFYJh62o6Jk3TQfu5nx77YS3cAtT141a7kYq3FNFbUdWFXkpKC91xu7sYxpYuziudp1Z",
  "key11": "5hhAiWBkLSXRYmLwQekP41NyzjqSx62MxUVuw9RxV1hSUMBBQxmxKQ9T52yQiPN5ZDvB8zUnsu7bwPX7twU52kP6",
  "key12": "5FpTMGV4kmxwGkZ4kfX4Ss2wpEMNwc1rQenmcGsrjzRawcPoEYGuDCTeiTqFc5d5yCvCwoYXj8Qkhuv2P7BpmUpN",
  "key13": "XcwnD9nVLK5AhKKq6MAepyHZZ9fG3oHWBvNC4wWLJubGvSQvbxjV3rzJ3H4nNsZhzDKNma664NqHnjY4JtySCB8",
  "key14": "59aCugH23NBRBbQ52zdEmPHcDz8wuWu8FFKivyttN8wHKPhVkiNHzxdWdhxvqk9eYWo9guLhkTJQauZZfQmr76bL",
  "key15": "veHFhjVXSGUzZ9q5tvrtitfSsUqQJRcLabRrpiVA49c8io34f1GVkimL4bUyLNKLogYzimPw8Jvh9AJn5Vc2wmU",
  "key16": "2JrDPcQ2M7p1m8vPuAoeu12p3iBpefdPf6w37iWFTMGzZMvVKVwvKFEAkLbu7on7XrTz8r7bo6vn8WaC55eADgYH",
  "key17": "3Y9gUvnsRbsyXi7xz6fLap3LGNdwEHjMf66QqtWbXhWXHMBEqP9WmMbFSva7CBqQRK7Zga72D7FLk7AXyhzQFSPB",
  "key18": "3GiVbtq6KXVGKeHCeS6xkJvfLSRjmVbcKckgghvgA1ehydt51zUmcD5F5KsffG8PYRYeYghvcrgzJj1DuGeYFDmj",
  "key19": "2zmxhnPwcYr1CPjn2HGWGbu2W5jZM5fMugGswNrxrmKJWk27NtuefgCcvA6JjvRyUoxqNAkAGviKhrJZYd9aQScw",
  "key20": "6xFnfbJZwBqmg74Pi85dRP3qLDez93bDvFfu93ybyyXDP68wxd28iNZWkUKvVkwa6aDfv6CemiGfhwZiEND3LU3",
  "key21": "De3prqMHgTFHFM4AygHqF3JCEGu7bSTtKL4gREw3PVQXvo5VCbKUbADb2y9Qkgu5dAdLWwB7PVcY3RV3YypGMAi",
  "key22": "xhuMGkRenvfLJp7wPFLxAbrxoe749wiPS9ZGbhRWij8wV8MVkBvniDbWxEu1LNBo2r7HZFGHMCF8ZQmofYEog3s",
  "key23": "3Qap3GEcKBwhzdeHHYUffLDjKmMR3UrhjBWTTA6svcuXZHi3CNwFNRKqoqDTZq7Lg2vBfujmGNtkoKkT17fVtEvc",
  "key24": "4BYLAL1hEDhjYYKzSfx8yK2Kk75orUNjXEszfz2T1AHGSU61DbTAkMPePn4ZQSSWj2qFRzNLqmMKWzYgDNDNSc21",
  "key25": "24v1LkVJN9hjEbLUgq9n3jDhc9k1a8MYQY79QEk7VSynxBCihgv23xZAUDunijgFZprU74HcqjMhCGnSqmRUwBhp",
  "key26": "56THzakUgcmRCXBprzehDuUdGLxKqPLNv7YKDpuESNb5D1yMGMMsfuyLvmqooi7QV2xmX2ssKZS4DumhEE9uYBm1",
  "key27": "3ziZAPfQpLqy1XUGnuqVVGpoXXKbbhsdQGPTTCKmnEptRotpCBqBjQfTuUXDdPdgWC4m2N44HqB3nfGFGKyzAEZW",
  "key28": "XnBSEYvXK8EgoR7DRV1ugPFEPDJsRCL5s1px5Nci9nEBhgbXrEswcQWSJzP1vLYiokSUW3zw9nHy6ChTWvZpvEu",
  "key29": "5dJGjFZ4ba9v4TWWV77bfX1mFsAZ3z9ZEuzLviPM82kW2zodTWh32Mr1CUKKoMZoVkjoeeWBCvpWavdZ2px6qfZa",
  "key30": "48is7tyddofPGoejtwW6HG26a3Ak7nWfwPWKPxdtccgQAPSPLrJ8Suuu1kR1chvpL6w5SyuLuQ7KFP2HKAJq1rdR",
  "key31": "8SQ4DXq3qhud4Uf9RWhyRe9sYtGZAQADQHsDdLnxjqDqgYbkNg56FdEcUV8QYyRu6PFTnwEsNjQeg4nreYrahcF",
  "key32": "4bvTC97GW6zNEUYr1moNe4NjLRVsuErryd8UAGcwJmFm7yAPMKbyYDfbQB6pPRYBCQfDJwxEkqoA3Tz3gR14nzyz",
  "key33": "4HwmUcoFCied2M19zXpAmqrAR1qWgXXFEowMXBywSkFFqt4WwaCMsKLi4feqpzgKVZ3wXK6UbRSiEGhbXLc94msr",
  "key34": "3tMvDvMdvdnL7WBLb5wk8s928kxarcZ5kThBk5GLtMqgKVSMY7Fy48F9sTLNtEBmANDwK1MhEmtAuZg8VqAUYLd4",
  "key35": "4BJmvTVdRWNNwydd6T3qZuAmEKPrWjvxHjdwshfYRe9JNfMERDNmUykKJhYqWgNJnysySzDkSJC9QiLxGnNJEZeu",
  "key36": "qrdjhHwLoHqZWStgtbftCjadYwcPoBfYp3f1H8PsTGjnzYe5A5qKTkfnykLUo7BTincobx6Z31bhdGA6QfQVZQn"
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
