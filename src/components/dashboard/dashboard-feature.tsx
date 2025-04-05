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
    "QZA2YEWz2e1ViKD1NAChkvnk8ApGYsh7qUfwPqGUFu9wW5m6enxSQSLRWpeACUpnKypHcq4ZBjqgni9PrhxQf3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66eoq35c4vKsEZ5wyaPKcRcwHjJsBGPHv99WA8BRF4C3SwironkkvbXQB34b7kYEFJV2hfpbbGCLURNjP3teSQp4",
  "key1": "H1BqRKrt2vASnFjhiaY1eBm5UnXCi1Jr3uuSNBviaYRq2ZMnTuSe9mMCCd6nD5avEFJ72CBj9TE2hnEZzy4mxmF",
  "key2": "3RXh5AedD6S66AReWKjfqUaFipHhqTyWobiJPCfnFNt5xmDUWCLojNp51pikL9MCEpfd57s9ssmkBWJKwrdBTLHo",
  "key3": "2Uinv695SPiWsxRPbTnsyDUh8Kg8BZweHbKLCGYfa37ZGHXPkQyqahHQZUcoQDuYem1M3o1dkaHGGtDSA5sBLHAS",
  "key4": "5AbemtisF5yHvM4kLvxRHkreKzrYzCspzyNHYZxj8Bvc5uwjLT2yonfACztC5WNr3DCw4ZVU39n6uEsdSScXFUo8",
  "key5": "26KwMvRZbfkMAe5fT85UcPXPVQwFKjKFabZE4fapHCzHGLsrrGnL5vsM7rpw9PezxarRirZXcFLhyP15VC6kGa1X",
  "key6": "2jbW46FHq2RKQD6JYPWrGrQh2Hi5gA41MBFL5wcmqPizdQEK9n6xDWusq1u1EqAFq5udr9VMo3TDVruhVxoCvEJK",
  "key7": "46E7GeQBFp3LLbrsXgctJPfYxpXNW11RQoviboe141TQn6kVuXciE6ntXYCtXx2NpFYeu3jpBe4g1mmGTo3ywC7S",
  "key8": "3GViwh4XydLd9nD1KcF9kdUjWK3PN55JnepvXbq8eA6gm6LM6deZ9iHcEC8fTdJp9HvUj7d7ho7fzfBDi3xbvc4A",
  "key9": "3G7G74oRyDo8Aqz1M6qx3QCYiuJNk9Q73QePu4BtMCA4LoVZ2nN38EfyJu2ymZ4yLGKStH3XVW25TdzBArAP9nht",
  "key10": "62vGj8bQ4EJTRbVxuMPEWLLbBBLY7d2LujuDmoDzudTiJTy9TApZMPBwDk2JABe1zjtWG3s1xcWaADHYez17gJf3",
  "key11": "4n7Y9mGFWXFjBJPzXYvcUFLLk3C2s7tRzBrUMbHoZ5eKG4KoukQsyE9pnsQUyiWjPfidsEd5v3nxybJUPX3LSpXX",
  "key12": "4ha5Ki6CtPBFyNR9xwr7N5PpKc1qJ8F8eiCaTpJkGc7kxYuqFMuZcecnd4Tb7AB5x1gPfyH23ZuLwgHP2Mp2WBMD",
  "key13": "THaU8CtwBjeHagz5zAVcAns6RG1gYMCm5xaGuk3i4Ah3kLFBmU29R5sC6ryx9pr7q7w9nGL77xpRpAUd2ZLsKuZ",
  "key14": "2wNR6YMQ8uDDZHhEdpCoXKZpuhvM7GVnD5qKaL1LvcpdmobMHKo5F7CY3ctjUD3b2Gb5KM2xcjH3NVeJaNg7PCZM",
  "key15": "5u5Jhx8vHvZjijjf4D99qHPtaF8DhBKVixDKhNJXGXxGgQddeFjZAEk4wADWbUAazcGk8ZVWDvzM6ogkHp8cjSoF",
  "key16": "5BqDYA5GLEorUhcdWe47ePR6PE9seriifurXHXxqUjbtxqCNBoEjLphzKVYWr83vnVRvdjRiBcy9hu5K2SMGpHgJ",
  "key17": "5eeRosXAppEPwnYJ91qDbKim9gCQ192MYKwdFwdSsEFTFLdUowryJJxSQJXVR3NCE5PxMJZoki8U5X76a3uDvjcM",
  "key18": "29DvtSqidRhjN9Ud1RnGRdaX3Nj3cqnwkptiCbpRr8wwArH4EE1BkshRedPZmkkKU4vG9NjBBMCNJ93EH2ciG54X",
  "key19": "Rj1HD2F9ixGqopaWT87qQ6WHdpeGFM2vjKSa9AZryKeDycvJSbF97pHLjuZd2hv7VEcXihfsrVdph3fDL9rRCAR",
  "key20": "4mg4Q91N36sL3FLcLf6pk8CzkraLLgPHBddAcMX5hrqoK4iw6GCFWLSAmDqbAisHiE3XXjZXZonKbkRT28T1W3HB",
  "key21": "zSczZdLTuZLguNcAbyCKJDJP5Zf8JtAxAzjRwSmg49xhuqWcJMLxYNSUbMJdASTePPhnWHxNidMbnwAyKxjxGLp",
  "key22": "5v8aXsXVKe1ZHResfGSJPnHAQ8Rky6Zhi12GL36KycNkRPEHwnoKSig4amDvrrWMwHcFsaHteHKdp9NkeyaRxtnf",
  "key23": "4nHuB1sD6Um34ztDv9vSSDZVcnBhUw194TCXpkpsA8pdjTe3WfGPVtqez9UpQ3Az5xYCvH9ukiaqGoPL4pca3r9Q",
  "key24": "4QieNK7dL1zfsP545JRQXVVMRxU3ibAYuEtSzNE6baq2uwA9DB5yrVc7vznTa7T2j98P84GviVGE12LynHFCvk4j",
  "key25": "2nycD8WUUGCu3MVQFuUua2QPex9Hf943USxpfCkftUfmVhWp5y5hgPyXUM6Svkemy91Yh1cry9pZh6QCPjRoAgU",
  "key26": "2eD5t4AcoJeXPtzUnGuqmHKHY2v2AwPJBDY2ne5kfQTEu3b6PNupVRe4wUaTS3cLdBrHGadzYdL5TXkvb1ntM9E9",
  "key27": "5eC6MTAtmHNyGrJyvetdHBpxud13g7Zp9ENhEC9soiiSVNbD6sqnHLQf1GR6pbWVz3ZHuFKeYoR4CtXx1hpoGc96",
  "key28": "EFmVJG9AytZRGdsaistPuYVQVx3RwmhSxyDdYQE1brayYLLboJxM2q6ekqWxtJVSAd4v5DxuywwUjFa1jF92YoX",
  "key29": "CskTitVMEzTvQW34nrB6TzxkHgRzytRjPGiJSaVtGNUdNFa22dJthh9shpYHpFhJtxjXmi5XdvpbEGUgYMyWjm8",
  "key30": "3UQhvDmza4mSAKLUVo6pe3SJAGJi18CZbGtvoSsZhCeERWCxnRSPrfq286opaUpf1fF6qatQ2UpDJHdJzG7Qsb3G",
  "key31": "5DAarg4A6aBwkBpxShXgJhoWYVj3ek1SJbPZnG6saWGBid7nbRspLNRe7vobfMJi1UiLCLgVGnPzQDHBN92Jm3kT",
  "key32": "gCakvcEy559k4bvZjAv14GouVBuT1kgWT647QcvXE9v8WTLo5mYGtyWRfwWNGKZdyHexS8iwHmpNwuHLFfqWoru",
  "key33": "23QqXtUf4q3sgfjXuGo1WcWdsyYg5hWaGJy49BYGCV6TncNECGJTtdvNwgp5UZ3V8aNhJvbs53B5QG61wPvpxgFv",
  "key34": "1p3R7pJWgmx8GbZtho9yc9nMLhWURzA57eK9HRrQzPygEmUfwXkFvdTyqiF6huouhQYjRpUyaRgegjw6LwC8mus"
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
