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
    "VcXpUHyEhhhwWLMcfW9MvDndx1vjMwwpE1qmBg8B4J6gGCXt8u7bsdKGEyRA8rEFQwVRzFMcfDpputRJBmAj5NX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pqfg9LM2fzHC1w6MXP9yFnFKax2PUDoyv4ehFbDyijrr5jN2yqukLXnkxUv25DkC69EmsNjVH8BgVZARaksPZUh",
  "key1": "5Rgrx2Ffdt98vzJBrPjsUK4Wzdmq2UjdRtd6t9o4ybvJpf513E461GbqCPqMkJHpXCstAB8p96rzLSBSNkvtqYYU",
  "key2": "2GCsN6S7eniMZRrJqFTPJfVUoxRtN8LeETfKUwL2aajFUzhJbsj4sfghF2Lur7zCeHM3cnJKeXNEXKSEu3nitA2r",
  "key3": "4teRjPvag2xfYnUQExvWWfUajtsNE2jKvEDCpAoPrim3HxTnVqfgFc17Baxe7MA8AmJtRUFneWjfaAB4KxvDLsiy",
  "key4": "3NU9NpBwfMsiT8ChNGj3uMHgtCfYsY1ciMJLkW5iegNN3uE5Fy7JuBBTj3kSjcpFpw1QZYhuRwBKtS4bXdESUmkd",
  "key5": "5eLYgi37BLW2C7gUSuBP277PUpSYJYGLWkf5wuuxXt9C9bSDBqbtRTBeeWbQEQ2c3UBcx8TweCpajJsnr4xKi4kK",
  "key6": "JGk7gTzFatpRhiaj9VBkV5vKFHWuacro5kvf8eeRNaTwCM3QDypX3KV9zisvKKFBuWDzPEdGTmqdvKKp5NtzGRU",
  "key7": "4Z89vUqxgXnh6GXBN93R6M7sGAmjVLfnnGakmcYphuLbLuwMDhqPQXg4pnTViFesAKrKYk6R2pYNbqjDL44Hu6b3",
  "key8": "2vJifUyhUKyoPwCyXfCvVYxJJUk3sEsb16YGHnDvpJyALSACbcTAdJqGasBq8f8KCJk2JXs4uqB9fEDfr4FsGMQo",
  "key9": "5KvdtusPfmgMm7Mg1GnjHhcTqN2tct5sLFtKJPmrxZaby53Bmz8HrGHGAvak942HavVtB7PxhAr6JENQ3PJc5aUt",
  "key10": "2keKBF3MgW7NLnaQM89KLauRbi364aAwfzb1xitdkiWAKcKvzE6sAZn4LHuZs49xDWREybwaTQFy1g9bEAXzrt48",
  "key11": "EuuNNeHFsmqKd4WePJs6p82uamTiuhh3NzNgo3PChnVzgeZsMuVjJBsVs9FPuvfuAPv534zSKfsN3j3NjW3ZmcZ",
  "key12": "67MPt7fntbqrBqP3MdJHTsXwrhsUSyXQzhxz8xWcXr5GrVQ1spRfpYW9Ti8GjjEQvYT2awrfpfEXb8PFZTRnwLQv",
  "key13": "53humtL6QW3W4nDtqqUqwj2KCCSqgaF37STcabG1Ru2jsQbztK3riQ2B4ECKj9gGoMm9VHULiSL9cH9VH79ssski",
  "key14": "5Zo8ZkpjUzv7Yth32hRWA7kBgYXjyQTaCMCaqwsHFBBi9N1f8EHSYw3jy1ZxmHTjf1E4EKec7Wmt1H2W1FdEtWmx",
  "key15": "2QeDBqKCDtrGNpgW5sqiTqpbGjUShmeK85diq1Anp78QuFKW1NGPKYod9jHoWk2xF3mtmt6sM4hkhzEVz4i8vaaQ",
  "key16": "2tcGQ2G3vxnsWPTwkYk7LixqbdwEPzwf3fC672exkmfxbSSANixUPLENvVAappL57irB9eBZWHKJw1iVAoqr4rJ6",
  "key17": "4JTxicmMz2uVwDNeUkVKvPGXXwPs2vnfwt6QMsEJyV5xxhEwTmhMtDMM8WmcmztdQEeV3Diq4T3haxD84UEe8KHY",
  "key18": "4opGYuzft6g16ueAsANpWA6AgpJtw1eM63vzJiPauTcCiC6sC9S7Lv4USR3KnqKzg9G9ZbtqWbSnboMC3r3tQHwv",
  "key19": "2o23HFxbT1P6HULMMkv6d7jDX1kY14VdsDfL4eTZxhzY6HnkE6yR8mxUPFL3A8GFaoZqyCtJAie35dJyjiuzXrCW",
  "key20": "4GtSHJS4dEniC8m6Y8LxotusswXBWJX28qNetVQXnuUrTJjpnrmQdALSjqRS8uFCnA8QyjpvEPtUz8mrnFAeDRZ7",
  "key21": "yYWSxDUGvaqgQ1CLARaWz5anDnt9YJF3RJpiPKHptxZo2MmcS5yvR16pCU5LKVL6Co7whKpBvnyYDn7KXpZ5Sjy",
  "key22": "3wSAfnWSaE2SXGE9F8siASZBFCG5ukhhuyDoiPXqfzbYHmUt3Rc4ya56WxBCaWay1t8oM5XDsPhfM14EENmddWBM",
  "key23": "3wiDEv6RY5rtv1k5Ca25GdxtMAE2h1pcB6HxmG6jUtFgErxF2Bxe83wPbNgSWknUQ57svGfQDB24pZDqxiKuWrWW",
  "key24": "21Rry9UBEgf8bUYNL2BKtJ6mthuYLVchtSdDKceAFKmQaQaPHgpvg1vDT1CtyzY5ALsYqAKopGBY1iChQVBFtjn2",
  "key25": "tDCVU6kgjiGrbRcK2Mswi3vxFfdJTS3HPQZFbMvFzWqaQrGAKmm9hA7yrNQZyRwC1t7BSYnm2jxMJXrgY7v7JYE",
  "key26": "2cdpP7b2SvSyG3sKqW2AyEPZL2BhGA8wjzWK8ixHE8RWnfVeAk1uXefz7gZ2DV1c66M3SuseKop4QacTSiyWnqxb",
  "key27": "3bdtErZKbEKGsin3nincrHyzTQXMNJhqqm3Bk96VkAJTNTKjwEUwrrXSAKsHkXL4pAcPNmEMJhiYqocUgbQE9tnq",
  "key28": "2BgNjVPK5U7op8xuB2G8CQzoeNhvvn3ZHfQDR44m7SyzsH1bVH3HkYfeoKZLdn6p8Tm7sjyhqmdRgpZmT68j1MQZ",
  "key29": "sdYUuiFM432n1hMVjixGDsHShdKN6MJ7ucoW6qFbwfNqVkEfmsEudU4KWUsbeqXjAUts6BvkKkzFYqDbAuxn2Ys",
  "key30": "RWZfae5UYGyhPXdNPM2CavFzd9nbXMWWRb6QiBb2skZDLAYektgSmFrBvp21MTaMKqEgXmvMdM1netuKM1wyYPx",
  "key31": "2xJ7aBF5grrHuLTptTfaJkZrKZGjyMLtKjgt2qvXKLEtDRagBi9mNjjz4eNMVpWPy7fXqo3cvh4zpf8Pn8jTAZGJ",
  "key32": "2nySx26DuRHRQCrRXhHCmSqUQpK7dzZTJmtv4ygwcJEpKFcmb67QjATXYWg4sJygj5Vn6QqsAseFjbYDis8p52np",
  "key33": "4XmeySPY24xA5ChZpczQECr6aheHTK5RNw1NBGzKhYjHfKcNLfbAaHrM7Q6HxGoy3UnG4VSGJvQE4KhLfEwfq9zH",
  "key34": "3fDSVcjELNy7t7x7iCGfyNqMaNzD3z6aRtXVmsF7wiaNP5uuPnoDtsak9madeDXwrw1jF3AXktBtatpABmqcmC6q",
  "key35": "2JWRMa8z4wD59UbavcAr3Pso3iMKV9AZP4MVfW2iNFewFBbFsm7mH1KRp4KdZfm2Zk3yLxTm4jy9GdGEZY8FCtkC",
  "key36": "NUvLqtcgihpaLAQBfnXWdgXJZhqM7wrLeVancaeJbuZS88bu3oW2PhhhYuHVyWHQSuTrYZgUc2aUdbfvi3PtM1p",
  "key37": "43buhuM8TyvotpnNuqFY7XNBSXHqNs97dA9n63EXcBj55z1cBMAUPa1gVTEKiTWntWyZKHFZmzs4qw2XqBkva7Sh",
  "key38": "5AAbP3HQZy9XxMrvBJHHSLQhmqc8cmCmCEXLGHMpRb3XajXWsJiRSFDqiVomLhjt4Hfbjmu8Xew9aigg3qYm4yr3",
  "key39": "4hsqLWLyGzdYCNb7SWi5r3udhposywQt8kk39S9HTyLW67xqRFBckevSYv35t1KYL8kHq7cCn5RMQTem12i4eBoC",
  "key40": "5UdDSfqoa947Ar1uinDnAP7XDbtUqA1QdTcWqzz87VxJVvEvmNLkT1QqocvyyvMXg8EVCRLRXN3JZPH2CQDkK6vh",
  "key41": "5PACyVKmGwDgYscTt8oNZvqYAfhu44m1GYeZVuPH5KXHzToJEnX9zScsBjznrVDLANNRgtdoF6tdoJCo1Er2jioX",
  "key42": "5U1hyzRYncJGidUqkswWh2JU7MAitJ9hdCPQWCrCCxcnytesnCSDLov5CQs4J8zGMXP1DBEyWxZ8rt9A7GP5ir17",
  "key43": "3Vp9EUkrP693ZCdnu5sSDwEaqLTX77pbrJFsJM4MP5viKWHXDyBeCaJtPwCqJB4kWiF4oocnsaDFxDZYHbDxSu8N"
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
