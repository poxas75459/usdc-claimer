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
    "HLXWYZiwxcwYoHmn4t8e2r6s571FvBgCUeTjSnp2MRy5zdhYJD1NvoQhHY6HiSMHJUZyuTRJzLQ1QCgbmchpBJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GudBCSXb8F1VC4aszXAj9NMcBRwU1Pf5UHSL7XMyEGmEcsUrgEMDnK6WawEoC2thrZJpdqTiE92PGMdkamETUg6",
  "key1": "2qKKZ3LqqNJ4AwsXrPi3Y9XMdMZW75TrwsVZWe6BhZYQoSMq9eSXYrVnxFvXjScHcY4FvfgzgUcEvnRpbQmftNxn",
  "key2": "3i8hTBEEd49Zc9R3AxgZwjg7jud7TgP7KMHE4QDAMvqtndhvZ4sPzSQs6t1wbeM54QaXdRFxq73rpi4abu3SoA3u",
  "key3": "2HgEqkyMHR9vEnZ7hFRZaFybKtvfrUhBtJZRHqxq6Lf5GdfCX9GzHtW95C1eVPppCdCQ7AZ4hXrNuXsax1iqu2PP",
  "key4": "3HmHk6FmQMexExeTKT5bxjGU3g8at5vpGL1SqqoHS4qrDowH13SeDKMNKTfs8ZempvWr6eq4vSfFSEHD6WDVFNvc",
  "key5": "3twYXnL3mpNf73SYnj4C8JSn8XDrvEZBiCwPM8az83syFFpa4E2W6wtjcG4BJSSzwMwUDnPTLMe3vLn6U6uuiNQ",
  "key6": "5BViTS12EqM1dAgZThm1rSDrmVLR2bzC6VrQGrpMUWiVMbjnXtaQxMFtwb3hTXJfj5tpWwGMw4XhUNZhZWu4cEN6",
  "key7": "44kJGjouumRdps8ULwaEFjDyNUjMvjhw483rvdPD8s8jJQGJ33x25D14ynxbtp57fA54z129hVUXjBWuYAVonP5K",
  "key8": "4o8P6Ws24T8Lv6NbwacXLChcfpEDoqNr6UQDb2ZZ41q7syjyxxmp52vooba3WWrA4ZfBcmg91Q7kFSZAq6sQUDyw",
  "key9": "3iGkpsQ3fBXPLQh1FkRUXxA7PZdw5apQHvveFEMsS4wCnxmBThJB5qcEUkhJC72oUdUi7jkoUJGUdfhNXHe1eCth",
  "key10": "4NpKf15Z9vjvYBsa2HhJq8ja7Sac5CTp75RDcmvqugSP5hxMWokXGqLNgyUWVZUX241qyWarGhBtqVnaHmxWduBm",
  "key11": "4Sk516xF8Pfr5Z4A9HpyaVFdUVHvmJxix5i5AXcysjb9DkrW3C4WGKBUXZs5GRpNeXgu92Ma9xgmQBpiD5NqD44G",
  "key12": "61RibWryswp3HzxKc6oLDmhVgCr161it5pK3V3hhmu9vmLfoUyXAkZAGbvWxzK9V4BonctVs1mDur4gy5MsVXUJ1",
  "key13": "6ac2poQJrwjC73wZ9hCAPFMaybctnB1oDMpjuZow48kfpJKJ6wTfKpwwZP4jDgaQqi3o81UJyLuyoTY5vb1ci78",
  "key14": "JQR3efW7UqnPwnv65r5R1fKvZoK85dSKAUwWkmnPEQbZfotjyd3LYAqwk6sGE6CpMTKFqQ4Um2fgsUpoqN4LDQc",
  "key15": "4dr8V2JEGFKMB1PjRF3z8MAqh9dxVVPzJZfMppZvbcnLBFka2gbyLYGwbMWyadS15SrNQtbw2XRGowRuJNPE9Rak",
  "key16": "5PCeRuRVgNU7iX36DxME7Pv69tdBpZyYzMzd1ZdpqP79jcukgAeCTt7XjSsW4LpbeUeoFQW7m2pLkEpUm4QfUYMf",
  "key17": "ufrCWMBAUbxv6o9BKWzwWnBwNHmf3X5YXYfshohw8RxEjNJyfV3ozYEHPSJaH71LGH89eKo54QNocXuo5trzBDL",
  "key18": "5vXGbUFePQpdMKeA6g1LqByWiYvyoPiMD4bxHM2Z7c9nZPayrkAnApHuDZZcRztd6TrnF5HPDqapwxJDAConwst3",
  "key19": "3KSAXw1irwCUkoTWCZMQsqeYCxzSXTCtb48FGUJscPAapNHD9DptzkVb7jx4TmQv2yYDV1FiqyMJ8YtbWNSeZdJh",
  "key20": "2faCvqvaGgqE7J5DG5aSuJaVVwAktHgTDsNGPUXsDAjiYboJ2KrDMbGgphp5sjMeDX7oXDdkiTVdiP4fqtb24ff",
  "key21": "582sz3qVnde1K44MApoqTr35LALfCGJnvkwLNGZWwfyR3Eb4g39Hd4mRWJuxFH27WT7VhfHy5WDNVN2VCox8ZQwx",
  "key22": "4n9XmifaxziYuGwBa2A49VEr5RMjU2CJZK6RMTQftzrYTJn6JAaPZEsk7A5kJyqZuWy3mNTf3jaQob4ignnHztt5",
  "key23": "4fS95uqx8dHjNFBewYd3Gx1HPoXhuLUSe6ppwCGfEWm4yMFDi4gcnnjXyedQJXXbKZ2ocmTeiasdWb3faQYFEUp7",
  "key24": "46zr6GCPCHVJYY8NzNsV9DJ4eMPYxsMp6EUzT5Xm5XK1xgGFy3VyHD8uu2i2WTTx4o8VdRafGetqKvMCFQ2nsndM",
  "key25": "3KEMyXYQ6md6xyrngKDxhspLgCw65xKiFHifHWDyAtYe1fguV9veg56H4tFNNpzVSctWyXMw49CFnPmAV8gWcQsq",
  "key26": "3AvDvUKTPdCk3LY26q9VVRs4f3PaGdTBXA3NAcvnwkwAccY3XDs1mjPfrB4syEAXNeZ6ALTdQac7uDX7Zd9tiXcx",
  "key27": "8mYTXbkowAThPJ3PvveUjsKETEPFJ1B9Vbrttby1d6BUPJtnqEvYZmCTikpb3umGuwjdxfoBG23aAZPKrVCwRa7",
  "key28": "DZWFTncKDfW8wYjRcFWVQZL5PvY3QMpEuTPy2LeYjkdnEBTV86oQ8n8y3QP9pvZ4m2dG9T5RdgEm9nKCShiWZkg",
  "key29": "mZxbuNRrwnrdSigZNbGArFBy6geDj3hcmYG8QFeGmQB7AzswN2gzzrkdBktf9Cxyydt2cmzbyWi6xNNfZ15rv3F",
  "key30": "M178H5Srk2pXLQSTnEoLSh9gkWv1AhjS8h6gPrjpgmb8xUtTniCqBuJvJsQv2FnRDMn1t7LYSmNYZnyy3C7oSqV",
  "key31": "3Fm9BZM1U2pKiUsGajrZztyF9YsWhYRu59HgpKvR8uMA5yxy4onAQNXCvyPRM7aqFpnRbHhvAkZxHdFauGRhMkzT",
  "key32": "usFw47ZSpEyqQHnFb5oQfUxq2AXCDhh4De1v4MmbTgWGy9W7taHx39e65brh1TLN2dzdX16JXZesXDTpZRH12pL",
  "key33": "46deudU1eZoZw5PhQqUmv3U2NYd9wnyeFPG2UJgiFNd4QHmDoxP3cjHCAp18sHh3XpTRH6FfWeNGPhrafqYroxyn",
  "key34": "42mgkAaPyKjwLAUVsc9bifjYgajvyzpy8Cx7vDV549FGvheTF87SiV6iBrP1oLjcxtrjCzeZUkwQKB9UxcgZpBi7",
  "key35": "4k6k7x2AvauwLTnCW6LjXcGEqNhU8cRGDAMAbepGR6F35P2AyemTDVFrgrY2LfN6YAL4a7xCK1HuS6EU4N2Dtqxb"
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
