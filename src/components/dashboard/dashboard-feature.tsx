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
    "3uwTL94ik18QxQy286bx7kgG11LpqfjKjqecgCLxLG9NyHCAjAXsR8cZNbD5E9uhnTgiPqnRa5YrEQwB2ahFMRCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWUf9PJ8M3cJDvQRxHRRV5nuZ8Prk4m7yMyW8YFVeeKHqKjsfQ3sxXcVfANirTvijompFkYRPQsKkbLpDcUjePu",
  "key1": "3NEnsThKKF4rz9zWNhgVAedvEDU2Dj7MWDivu4SbMLjQav5MneevunHZYwkrLz6wDVB6uYj6g4k5YAzGb8WRFf61",
  "key2": "uJaN9iPCqmqn9nz3uRW4rWEopNtLmWfFRAR9oHdmK9CM8n2oJxHykeaG93GCY5Axub2vtCPabx8wWTvYu1hk7ig",
  "key3": "BmSoupHMzmrmzCX5RNhc1cr5f4U3SFYc1JqQCBqmsRrn2mCxNt15wUCD2uKZkMr2ajzLEfwCYUi2dLpef5VzkUQ",
  "key4": "262koF2CMukE1ay7ks9nJ6sojoh5pxRhT89NLdamCjzdB2B7CMSZmAfceuAcSEPTC5621sjzv9SgDCkk41o49B8o",
  "key5": "5AvjMf2c67HnizS1HHsveoGUdpKwBpW28qNR3QftGp2yHev92u4CvGvnfu5ojTXzhHCkwQEZuinq1m7ndMtWNCtv",
  "key6": "ejz7eaR4ogRy6Wd74zUyeiQaM8yXumdLSNvv4UW7unSa7CWDkBsrRmky1pHsyoWTCWgaPjs2cJRRVNRxi1fT6oS",
  "key7": "4GodkC9tNw2feumZUGZ5fstaGUZfEKGQZFZea5YNEKNvKFXRQwuMtaCT5HUSWaHRzg53VYxr2SPiV6SmkXXksGVY",
  "key8": "2N9SoRNGhBNX4G7754TGuvMRmdeNT15YinPQcGcbdxtYSnVmhKr4Ge91FRfoHHTQ6Ybd4pusCtNepPF21AaEqLvK",
  "key9": "2TVYM1nsj4zW4oajyi7Xou4q4fYLtNZ5q1UJTpTQJbakyoJ8JvkHhYvmwYt9VcWQDsNdJHk3S5QZXSpSkc9g3xdo",
  "key10": "5Ra924YeSiZuzHVvdrorX1DxYGKW766br1DCiBfyfwrPtCRmUh9MZFJo5i2HefvLjhW58MLDyGYCiHb3iy9rQ4te",
  "key11": "2c5ekrJHueHEYtb44XTmdcTk6cWavxZ9YP4i6pgyPqWX8mwjsHYGj2HLqrQwrqaXAtDz9QUbwPXdyw9tfAMdowA6",
  "key12": "3Cq94QywQsJt67JVXMwK9pK84Fg3fBNL7w8nGbDhap53VWueZLaiZ4ip8trdTTt2SZjaF9kk6jeH1BJXN27CnN2o",
  "key13": "3xGEW7CzzwMieUiiWCh7KYGYuiWzeGHqS52SZttWTs3BDX4Y7kwHTuNLtCVeT8MJbftcGqyd3ahzvUW9TiVmsNch",
  "key14": "5vtuDrcRLEJ6VCS7LzhbmQmF7uyVrHdPDoN4qLKdvVyvVwxqULH4xGof4UWYnWor3p5DYqyRftQqbeYwTt7a56cw",
  "key15": "4p2T86LVTnqWhVc9axYvDdGJjoZcjFAUWDmu5TZ3tZXNKAV9CKKRLzd2JWa4KshZfTkePTGWeAKWMjmDrcL8CtS8",
  "key16": "4CtGTTTpAXtChNqcnR2tCLQxjVcyQuakFeLKAd9CTCHRe3mosLkpNFGoy6rdnvVyk6sAYYWKG5JNahWg3H7nqZHM",
  "key17": "4SteMYufJFxxv92J8QtJrSJs6zhMdBVw4FXXVniCAdL7bBHGDR4wseSLNjwCNLHusGo5zedy8n9yJvSNwhU3qfEZ",
  "key18": "52iwuzjeQim9LQjZcFB6b8qJSU9tDdNCbFdbuSj6fVX9dSBBBmGcyqSWdxYCf8KFaUaMjwipMTy5ZdDFXBskudLR",
  "key19": "37N7txK6vPD3HtDgQqTf2U6XsPAneHUwu2jmYrXn3mXJ4JiXr7PrTMuNYg9qJ2PNVN4waep4FBXmsvo3Uzy1EKvG",
  "key20": "2nmhy74WoKhjk6sZn3twBJSN2K73efQEezmbhBRnYFXY7omuDV2o9Adp62iu3GUR9otHrRNa3nxTYgGirr5CjcW4",
  "key21": "27j2mdBjKYo1f1FwW1ZFtacKVCDDdNmubFco3zAwrbQ1qG1M7kjfHHT3sSuxHKGsdYRGkXy89i17anonKemaoaYL",
  "key22": "3ogw5Qn1QrDN7KZ53tTTYrMW3xyaS9GSUx3FSoGjzEASTRD9LpdSEEqDbC2nEbn96AaSHju6TyyGgsY5mcGLuPqb",
  "key23": "42NAEBqS9qWrs9cFj7jy3Wp9U7uJiasfqzurzZPdfMhNLEc46MZ3p1dxLL1Pf4GpVdnS9jsqKunzd1pyPfwPGExW",
  "key24": "3nKDEjUWNe4pRRjG4KrkGU4seWcDkyvmGuVeasnRLkAdCfuuwAmdjsyfM4KvKU374WMFMg7jDf5b4BGNXHEwn2zj",
  "key25": "Boa15hLdcSKaxqnS8AWBtwjeby8EJkVtXx2hDRNWKq1YQXPTcxGYQqMhMYpUs8ZySRqohKPiDQTzJnNywevecfY",
  "key26": "2RAtkgduNpXX5eWpQDwQTM33ZmRaCay5WAhSQ56m9ZqiX81MyjKetJWUn87NvYEAuzcgwAHwJwdm83PX1YbqoZfU",
  "key27": "2GL7sNqEYpwqHdz6FtpTyoiP6Km8vvLznzxjAXD6wMMBQALb46icFerM3torNXT2DAyGYy7zAbSia6f7ERmnwbWS",
  "key28": "46KWm26PFiag147X9PNjEJiPUg2eib1wx5e4oZJGBPB4VuF6EWtQsnhG1okFBCjwWMjinCx2g6HJaPwCGVnnZUkn",
  "key29": "4n6rQsPo3uUTDprh2WvnXTtvwV9evKJua9j3S8MFYkCTQRqUS3wjDUFy59XZDszZBvCAyMksGmsC8auKrjbvC58k",
  "key30": "2xtd8W9XAuv3JU8HrH6ShcKS9nYfvL4DgDe4w5c7veLz6ieYLYMZmDe38BdX2UXJXvVAVhx7MAduxv2cpHBazNgG"
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
