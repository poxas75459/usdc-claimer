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
    "kDneLUFazfMikf27H1tP7XNR5kPSQ8cUA32gzNMLJpW3pX7tAuGPFzKxf6YGBYybdpeWkfnb8HgFoGFPbyFtV2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwpwHjGatjjMZdqeFtERQyYSGrPKTBq6BGphJetDEz7mbxf9sjDZNBhKZrWpLe5n2iLxQCbCGhx4ASksqz4mjTX",
  "key1": "42K8zeDUxXe2qd8epmB3SBVsnXzZy8tJBWksepNwiwkGdgXeT61fZBzmjw7JBoGj2WWrJcL1wkcK5XmyFuB1YA81",
  "key2": "51u4vYcYkM6uMnSHAqxCdMgML1jvu9cWSsVsyypDZs3d7Q5gG9rSY4hDEKVmAkp3GHoPnmWwtcx1Cr1QL87A5ZPy",
  "key3": "4DjAMHcWMLMfHxd6HkCUQ1VvKy7qNm2AQf3r2YbqQwJg9XfoWiCWDzmYXkJKvvknxfvTLCtxdAdXznQRBWnvEJqG",
  "key4": "5ev3Pr4XeTovE2ymKjYA6HiAzSe58tH4D3Hwnqi1asSmav3JG557VfCrKWNmedxZL1H8UBuSEacAQG88aayu9H5A",
  "key5": "3zKdC6dFMjC7hKqd5Pdege89FE1KGy5vyc4Tb3cu8MQA9kuEKHUy6WfxyzDTviERdn7sbJEaFHumZznaMQT2bv5i",
  "key6": "bdXrvbYj3vgbdU3vDMunLqVZR4xRcunWtY7mDw2ktVSjAdj4LoTjd8wvZbRqmHwPpFqwreKVbmD76yafrNhzz52",
  "key7": "4QPFxFQPLUqwEtTDGx7y9PSi6nuuycunPfwiDU9yedDLQRgi1jfZpAmsSFV5hgqMEZ5vQhrjoDLagw3ftTGBNvdu",
  "key8": "eGpSpi5X6pneCAybBCNnNFz7qVkh2vQwqPGbd7vjMV1ayhsg7Yk1FYhu6W4NEdrCXYdjpmfvgZhPvqgj6aDhwK2",
  "key9": "28PsHWVdoesZDnZA78zNAFXnoTjv5Wv4Ttvi75K95JjXaoz4Z2tF7fFfxoWh27tbQmdV3WXsurZkV2TUEkQouHUp",
  "key10": "3ZrDn7rNeCP9cH7vyRFRswN5bRvbyFcVUhDX3DYFNRnbUzuNhgMbgmruA1crJYAoFYgk95Joe9prBZFZTBec7zun",
  "key11": "2wGrhSWB2hyhrWHPGah17ye71G5fpVSqtPLq5PQZffxYNL5wVkfFTkEmtujhJtKZdE5d64itLvGxWUAiiV5xaeaA",
  "key12": "4vBwzPdEEnJWRg8hTQoTCmpWmXuDBXohcT8SZUYuoGFfvQwmzXXF6SyxC9fsd7mGPKNHcYwrvJ9UNtyPTtTQ4esn",
  "key13": "5m7TkgJ7zRDxY6PAbobnm4K5GALS2ApVyMt9WKHu8hoBQJzNrX2ih7nMZnDBL16WjytKPyfGhocz59bNVqL8dqu3",
  "key14": "5dLbxzDfjDZrZp1yPYraL6CRej6Wm6EZ1ZkBTYbzT9P244kky2VyZUN3eFqzAtAaYYkoubFdv3SRs71L2d574Ssa",
  "key15": "NVZtK3dUbKb7byp7SAyvb743cL4TmgddLmLvUhrmRGs5fXmmGg29tMVa4ehGV2ibT8fkv7CajbioxSrUqexRdsU",
  "key16": "3yW8zm9Eh3C4x8EriUFJ4wsVHcrusHR27usu3HKifi3KX6cxZDdR2dAkRiS8WDYmx2RBj5qFfeaXRbjhmunLhLY6",
  "key17": "51uisGSVzemfyKttLa8A9gZYq33pJVJuY32vBPiWSrtvNsos58EvCHAZZo8GgV1QCJE6eTZCCUaok7t9RfvgvCyv",
  "key18": "5zAymewnPeA1GMgSMVeXL78gqBUzV82AcxmNLv5ENyHWSZxFijGMG5LAe7CJ2FLPTDNrrDYAN9GLB43KmsimaP75",
  "key19": "9MKPyt8J6BLGFBnowshRLNAoe7dL1ABtoPLt9LyaAxVL6qVsWEaJcWKnh3ZUkdTVt6b6RSSFgFWVusR1Ch4LzgG",
  "key20": "4i9GtAcjpMJhmh28icjr86QTZqwrGVWgcWGUHrTjqXLJbp4m49Ap1j93L3EHjDXjMbBgKvmgKoaBTx1rnmKUtPqj",
  "key21": "zCfoByRM3NgviTGX2jXCU9f1pn5XxGsKSQvBWAF48T9yAKPizqcPqFBzapnV8L39Rc7Gr5kLbzUqyrMh8z6Wr9o",
  "key22": "kRam4gn3sY3wauizcvJNo1FLQmwJfTr5Gop8juW5EfF5fUFsw4h6CiT68jQvewYf9inoLE6JBSmWeK69LeUkakM",
  "key23": "577ivvWgVUciK5842GktcR8qCSdynKouUKSezcvvDdA9ae7pV1DwHbrrS67YSd5UQxnUG5ewHvx3V5xEeivpB8uj",
  "key24": "3zkVgANWPBZC3aCu9kkXdGmh5Fme45TyvSQyt8RvK53FvfRoWAAdbg24SruXRP7xyAgQngTBoJfWwb9NiGuHHLzr",
  "key25": "5qp223ygG5bt9f4UX9eRfK7Y3mgeMD67tq7YTUEkvpYgJyNsu9JyzgkMjMfUa4XpZy4gdjQyRSTa3697fMFc82i3",
  "key26": "5hzbMiC3GaEWGhC4EwULMvHZkhhx89cYjHyx1ozSoZNhv3G5fvA2hpp32xDt4VTwqwapf1GHvk995BDqR5cW3LAE",
  "key27": "47pdftdZpreSBKQ8uw2Gd9yBMSJ8mjTvJg8aPdS5ctUQJTayNbXonHpTjGbJiw3PZt2xxJnGd51dpNULFG1HozQd",
  "key28": "5v3R2coSjPJ3ujVEnwaDvi1SUepZjz6ja7aNmKvHQfbmjdgQ3q9De7WuL1nJPtHtbgvpmrm7t4eJ43HuUXVKZuqz",
  "key29": "G4MkffMqzXhPsLkBvBuzBXyn1vo34CCESu6Vh8Fu5brbGXEn5mDyCwoLFffS464ADHaCU1ipNSYftvb2cJwsAhf",
  "key30": "5VuUcn7QwdS17kBGbx8BzK442XHnvNkfjpgsfx2oEbUCwPxeVGM2qp5CsGqivfeycBzKQQ3NGzr57gDbzHAZZVJ8",
  "key31": "2bHLJqPy8sVimNzd2SUsbrQb2rmUUGsFDJdUp3AiYLsVNJSsfs2cw2Esqo8LFrEaTHpCKdoWZ5juTxUmYw4DFzVm",
  "key32": "Wh9YpN6VhMYfSBBtrAB1MSvTLGnVksr5QmVQQ55gb4tb3pyfQkfiREwf2UuWppEpMDYabjxdfAHxB8nD2iJw6n4"
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
