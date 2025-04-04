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
    "3ei3GhNsXDDz99Agp8aw81AVEoeVJyBCxqBiP3RCdZ2ypNbaUnAiw4Ur5iQf44ca9mZaLbsLF8T9xCMaM7NKthcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVKpfmYhW2EXhzkARP3LrUvaZtQojPbqajhf3Jya5eLTgKHYVK89KS47LZHK7DYmh9JabEVd7rstEGovaFHDKtd",
  "key1": "4RpH9PyDN1JWwt9mX5mBmYzEkx5tEoCsww3CB3fdY7rr3Z7ehQocqK9JDGAft3qMZXNNPKwDgHmBor9E4VMX9CZ2",
  "key2": "X9sJ3yik54G13QXaGbMcRkftnKnMeWUxqofND6D7SkLMGnTivUwgVuLNjEbZwE1whzAHF9KEVG6az2xqrP6tn6G",
  "key3": "2iJZMFQRhzJbfvPu83j49WemKT5U9xtbQTNTuxudroz9njR9fcgkBBYnawtSN7uorRGGsyFTkby183y8kWq22c9f",
  "key4": "3ZsdeUuX7dxjCqAaaFohPbHApddXQpLmufWCm8C4adq27R2QUJxaY9QCVdbP5Wy1Dv9AcJJifSVKy2zDBTRJQVo2",
  "key5": "5sbTHnw2p1Zv4geeTUcRPT3RD19N1fiGKwogQ2irMXpfd3ByJnHZREPaMdrDufYprGNpVjsfNn3AK5PKAWFjGmZ6",
  "key6": "cfhbJYX2eSRcSAyK3EghzWahCKCrc3jk4vXKWuH4foFP9mKZkvt5PmhrsZJS2goYuZTu7wcQBJziTap6XKhw8L4",
  "key7": "EPJnb36wKKyVh7n3F3NUyfMFomAV3eG6qEafPEX8zb5EsRD7iBXSEt8SxN9jBx3aE9kkLjeabzkgpgLX3n3UgDc",
  "key8": "a59m7viigYvzrLyWyVHZ9WT625epkir6zQXVMoBRbZPTZKiPCBRBMnVVUruwW9PJeE5iVnZdbxK9qsSDofpDdEs",
  "key9": "3aUEjQnxSBRomHnanSaiDNXLAr451kTjQi35Xd2bzivVRh1SjWEFGddmykAh2QDTVMhtEvFBq5wCRhfMHwzAVoyV",
  "key10": "5UeZB5DAfPK854mMxLcRWYi5eZnNsjUrhqWiJfWxfJKh5YixPvt4pwxn9TbygcdSqd6PYMo6LJzm7L4VpUsoNpxr",
  "key11": "5DouJEBPM2Sz6aLvMWYYxWYZu94baWzaAFVsgCtgXgrzqYx38QSZ7vgwoLs7gdnPnaUrY9iemUrHWBYz77zfofvE",
  "key12": "5uMK42F2YT5PqEeD1fANQdJdofeNMXtBMVQ1nQP5Ge3oiJeP2Bp6RdxbJWenJnfLdvYjCX7eLvZKY6FeCy7Fjd4e",
  "key13": "VQDHAyrJQcZBDNrQbKrf58hwpGGdaQQGZ9GG5ixMP1wVf9cj2sZkNgL12aWj7au817qUPkDkCfhXmHdxNunzpvo",
  "key14": "3gxHLSFo4roXA3Qtw8HbKJ66DeZz4ZoMkT1GG7JHW7sJWsPk3DWnYkNiYewYwXuXSV62GU1xxP8PqYVqoB71nc2j",
  "key15": "4f73qY2rbChoNHo831Wz2Y1pb3ZpNf6Fs2rzsYqYcqCTP41YKqxPFTuoiHhPGJdwm43kurCPPCfQfybji2HNs9WC",
  "key16": "2RyacJVfyx8SAS1wc1H2xmzprPnYNJwsEautYjESmtkGV3A4mReThNSrE4XMdcXm9FPk7HrAnMcZeuTx975MH8fp",
  "key17": "4tEtYnUsqRzsfQzqNBz1CK18hGMJtb1PaCoguUgMUZwJf5WX8gCk78pTo8Zzuy86ZqEWbE2mXT2UHzjQNUL684aJ",
  "key18": "Y3c1jcJWpEHBmoz8DuG3t1BWMoomA5NAe9ufvWV2CXhbk6w6kTNi6Np9dKnPgBrVX3HfQG9uJnRFHUgfvpdjdMf",
  "key19": "5Q1sBLd3dPCQKMn88tAsjxL1BMvjU2x7HSseJP8UPtS13bN3Jj1S2qkYXzAmKwL33bqptgpDkjUyPXqGUGf31rpr",
  "key20": "5fAngAP9BDFiWHCRecvKt59cR7VFqE9W2i2kTgAu1wVo1L6MeUcbc7Zx9ds1A6q1kuHkRzgkjy8yEKZkJGNB6ZgH",
  "key21": "4sADentZKWJytjkn1ENAvLRLtdBMQ4Xo6T4nzV8NVmrrddaYxVAQ41c2C4N9KzR5YJxdbovMM8CNSVidKg7XKsWj",
  "key22": "tugiNTB2rDf3DiMtd3Khgu6DnKdscF3vtkcLzUmNQiqXviHr1cKLcBogrtQw1CouN5mpP8WbgTXGKmyvC7MPetq",
  "key23": "4FFknYeyZ1W1rSAC39Tq4EBkzEXAcF6m4T79HDgHxT3K5sNzKEvmuG2ADbYZvBgqYHVPFLq9UsvhvAPUgiknCyNy",
  "key24": "2Setue9vo6XjRksyky1AiLc9ekDrDDuKpASBmRdKoXEUeZ7NLGwxJSaSkMRMGSBrvJQyg4oNNRLUTUBmSnFvwRq6",
  "key25": "niLzgtbx48h5TixvYjXMJVsQ6u8e71tyFBWDESZJNDvWqyaNoJE4MqWMgtLR5GrdPXvsSkyNkw2PKddZJevfnyc",
  "key26": "5JFjM4FQDo9od8vAS1n5fDVAnLemS7zm4NnVyuFZ3LxTsbNHvHF6ZiGwdAjy2RdH9EBni3bFQTQfmc1w2fzvdxyb",
  "key27": "2BGBud9v51BwNjeiginNAsTuHykzHFn9xxvGTHqdr1VARnb7BvNjjhafN65VPGZQNfBHf6LeGwmcX3YpGHgeWmVe",
  "key28": "3RPx52f2qQiwzxK8p5h3rVzLdDhazQPKYf3H5rcP36Gj9ySa7da4cpKaxygxjh4JxsVUnb2deZg3kLzuxFSCdHKf"
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
