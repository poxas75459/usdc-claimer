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
    "WLo7fd6psqrppBBdALYWDWcRMAmSYZzTY2kWXLzXRA6biPjTu9nWLhtK4r7PQBX4u1v1x9i3KGsiBktXrXgVKD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TrCawrphf4cbfrXnDnHwkPHdgZ8MhqeF85NSTeH3ibnEUpnqiADyXijfrMDtPGVxjEtgisdxyjH1Zp6AcbYaSN6",
  "key1": "5baY8b6rhUrJM8Dpj6uhvzWU3xEcmpRZzq3TD8SXgpKpSZjcmZ83GbhVbrYH9BuRJ4MLbpv7Z8zgAuws6fEDi3gd",
  "key2": "5jaL3HxQaLeJSr7kRaHKUcrfnUbKCSmAz6Ga3GkFobMZ2rWHCyXpgn3RD2G87yh9TasdS6sVE8Bir6dH6jQPFwF2",
  "key3": "2EhcSbs2K2ZTQqW9XPdi6J1hpmKmdejtwQ88dbZY2xxwJnieYqXFQhpFKjVRPm85gvBtn9bZ6BoUbR9Va9Ggze5r",
  "key4": "7x1M3d72uZkjkAcD4zjtusU1kZYmvm7fid9gZDnKaZHVp7gpwri21J5gN3jErH81dBEPrQQhFTp6EZU9oYcSG8L",
  "key5": "34rL9jtzSMSV4NR7sK76WXyMrE3bavs3uysvhZrs8S2nzW4b5i1VYDQu6pLgAdAcc3WbbXxwuTWh8ZgBAWvVCZqZ",
  "key6": "5XaUb2cTEiYnuDzsH4upecHPKjSozxFRo6rmCdff6UvydZWusMwyEmkPXZUJvgfxMwo142ouhwANmBkNGZGXS6Kw",
  "key7": "5tpUEwvWqapLCsDSxGpU5qSuEcVjENG7rTP1sPi4Takw4cGMQKchRj9spNUE5CgF7Adgo4JJJu1MRwZho6bXADaL",
  "key8": "256WeUw7RKtUC1hyjgh3SpPUCHNPkvpWYPkPAE1mM5Fwa8AbdBw81SSVAArBkWeYJVsEr99trBM6tnZURH4wNuAB",
  "key9": "494fYwsVybUv9Q21GUii1cjSET1jY1CUh1zydZyd8ATV7jBHRxC6p7vD4shkdjpBK5iWFuKWRSRGRAoDSKfrDmey",
  "key10": "3K7BCFkxxMyj6N53BhdgY3VDVtCrRqCexc1zyYhvrbtK8MfZKgnGi3oou5mLQEUMw1E3hjjpPyWk7MBHVi8ZWszr",
  "key11": "2e1RWsDKmWu3AVH23gCZLfNKusgc5sB2G3AZrKMeH8TqwX4t651UJVBNY6hqedaWy2FQT2N7QafWwAytnY91vVJN",
  "key12": "4ahTHdmLnp7AZJZDdza1aRNMkyXmJHxrTekrY42mqFSZrLDEpStperEADciUGZdmXgTJv6fbG9woxtXfQfveZqfk",
  "key13": "62MGsm2g6XWWNBXKJsDG6Y2vVsBc6CpBZN3ZevBWg2DsCCe4mvqnFNgUtWWtSG3FP4d7BRupFG9htuMzzajcfwPq",
  "key14": "5jSGwtvD4Uqqv28sQQqL1xZy3AphwvNoL6aEFRecPNhT6iJ5oYYffGkp29PzmXXzGkVzCaXy9CzEbJDaWvVo7ZN2",
  "key15": "5qJnj755LQrie88MHGuqNJYEEEGtNDTS6U693e7FDhUXHiVZiKJioK3bTKvzrEhJkGzT263XFdLhHHJ1jqEKpMGV",
  "key16": "3EUVfuYBNov63hQxqPRMGamfQniDfJ5PsVmoa41n1UQ7YjJjsPX8CYrBsE3TUSrwikeHky5qhFxCkY5dvEA3k7TP",
  "key17": "2Tf8h1WGkDBWFcrKxzFmsc9SMrBKjyiZbFrsdUhLZtZcU44xtqXzYG6Lh9pgBPeQCETHFy2bnbA4i6NJGchyiUxh",
  "key18": "49EXr2gxhscbtDpLJmnapsyMiRTzPdtXn9Qb7xabKRWhtuRNn4A839itX8GvgutRFfzGTPx1zXHZ4tMS8KGYbRQr",
  "key19": "35YR1sNeziveEzHNLvrqB5fodTE5ucJVAm3kwaZJNXKPmfPzpJH6TCxEkYAP3bpcqn3E6oCyzp7QM116QjfuipoZ",
  "key20": "3EbMDMhSZpAEbJYP6t8jccgJ7joyhTxjoffRgQLnb7V9iyqmEGQG3wQz6zHN42BLwYekKzQQLVHm4dibfakVHJvs",
  "key21": "4wYnVWZX7PzRRwnk3YgjmBAgzZ7ugEKWgdUZVQdY2Rg2bfPed3AvHxfftEWt88aCy8i4a4RaAX2aBEYisvmwDQWQ",
  "key22": "3rfQWoZoB8vygQ9BRSRFkgiX1KteLAKqShu3xAPF7Zn3QyqXhQoAUYq94JFLWGj9bR9CyRPLb98WDGds6z5j3qiX",
  "key23": "4M26XgB8X15NeBLQ8c4AWbrRAadcrZfC8zZDUJsMgCvn6gN1AE5UpxWFMkYV6hhXkoDp8z487jP2BqEhtdPoy2qk",
  "key24": "uuoUEbvxXKzcZ7XfbTbQzW4uEgagsPeNBvMsnT8Pt4xjHvWCGcxcsyZpjfLFQZzfrSk3atic54yZyfiQryiKFsr",
  "key25": "2h4p5fcZaFqzcQsa6CiRDt1xgBmDyBH6LLvq1b9o4G8yBcSXymftDYmNv9b2UpjY8Mzccesj8u8sRR14JPYJCxAq",
  "key26": "5FAvwrZkV2zm8BvTUHBP9TQsno6sTbLEYTo54vXZYtLhwhzr9nX6FRsZoRYu4bqUDM7rMEVBdmxiEkYyBCQEjbdT",
  "key27": "2q2jJZZ5BsSv79V5LvTeFSXYg2fTZbgHQCpAeWjEcgWQrbEDJ3dtBwcEJ117q2PsBppHDjUQ8LbJEJaB8pZjUQms",
  "key28": "5xiJ4iDX4oUKmm3b4JJZmJUJ1kwmCMBF8guoC1xB3BEoEtEQA99ivvFzEUWBkstUs3AHYz2yqpw8DM27sYY7wxQG",
  "key29": "2JBEQyJYpX83iNgMSq2bNkFGZnof6Lt9vudJwe1yYyy385USm5grsb8T4bMrKxJ6XQiUQRYa8JeNwQVRBVXEm5Lh",
  "key30": "xttUrHwd64gwkF5mVio5zMcHVHSHNNjoExXQa1z6VjBY6s7F8XwqQWBG3XdPU9U47jBH7MBTGRjC122KdMh3x5b",
  "key31": "4ykL3B3AqWdCMGPJng6kpdzXdPCFbeMCAXTN59KC4ugG3BPjffyy3F9LoVKYg2D3reGnvZ3TguxQ5tWzwriFrasP",
  "key32": "3ybFPzfFAd1u17VKdiE1rBD4UAk2cP5u8J8SPviFH2CoGPWgQL8nKkimWR91YbmFsXWit3Ds4FvGxBojbdkJwTU2",
  "key33": "2TUbZXdQUrxZ2Sg8ZCgZ7y5CVxn4AGzjtAeUCQS58MTDAQFf4aZS89TFUzd1G1z3tYbYJSjVP673tnsZkCx77ibD",
  "key34": "5nUikDkLPX3K2gJ86HcX3A1DYtyY1ZFsDGhjnTQZQjvm75Qm9PCduM7cC3pkBNqUtijx5awu69PCjfTumpnng5zU",
  "key35": "5mWMFunv7XqTj7QGkJbtEjdap87Ci232GAagbMES71ufW9XoDyTC8QeJtPCZfzNzTX9RCGwSuTit3tcE4avs9GJn",
  "key36": "47mLi1dX8EVV1XQabbsZhSek33nsCRVw9nxGPDqHhpReJK4rHaowqkTo2ST8ZaexJQKUib3zFu8V8ZgYMBXab5Za",
  "key37": "ARQfKEQwtyobsi6rEETdUXjud9dWdFfRkVi57mtqytCc4qW9XEgyVte9wai8tGeVRRVbx9CbDMGeMwQCMFYPBy1",
  "key38": "3t2gxkapmSYwGYaAPptfQcVr6yq7UxtER6jTJqm3BvhW8rhit4Dw3BKSqpuYbvTXgBBCj9Zopnjtv69tc6jGWky7",
  "key39": "51Eh8vMMY2epYRM3HEEvJp8kBu5t72jT1mkRmWdWBwWe8qDqxHz78c6UZXjCf2qCV1uA1jdu5ck9hberFyi7AcBs",
  "key40": "2UR19JgxCdXGprZ4gFCBFBt2z3gQQoBhy38sjCKkSAWMVRYDXft6bc1auXKAEQ7MZSSyPwDKR98Ai5QFBwUfpeXC",
  "key41": "4YcYUH7ovFcoySnEmqKM5L8PvMs4GSyJYhPJxMCie4k3syzywEnVD1FqKR2Xxz4ohug89qGPbCEEDiNvoTrjc2hc",
  "key42": "5RocgA389bAMZqy3csMBay26mEjBSYyLaMxS2dEYz2N4Ube759dAkE9RPCj7zjffbXzZyr23NdgfDDQEwesDzT5M",
  "key43": "2DznT6arGcNWTGgZ93hPxWQwg8EkUKFTzBPCPjuXvENaMUHuawC9PuAyUpu2mjvq3NYEy658gGP9Xa7yUG2hgdpK",
  "key44": "Fq5WpdhbiqmM5FzjFFGUPxy1ALH1yHWqZWoHdBhXTsKM1ftztK4ET41ZszpRkUdkDYm7bSra5r9eYV23wsstk9x",
  "key45": "3goooU4CtUixtUdXSihwxwd9rF7deP5UArcMNM2WBVmupRaSU342rCQzCEHJPLiRCFJP9XKM7MM8W3ncgok4hRWd",
  "key46": "4xS3gophKnr9uPabq19jAwgDpxLc97xAnUDv2ts1auNesMLNiX6hswCGtfJQFp1tn33NwcUdfUo6TfUFXdc4SxpT"
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
