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
    "xbeu75yDwqFhdrBpoTwNVmhBgzJP1XhhBoq8f1QM3boB9CryeF217wsLcTUbq7Fj3LBuuC8PFAxx3GyUHh4AHbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3bYxEsSrnMqApdrunNYa3YEcE1xu171jauo88xwQ6oexJgtA5WDHishgBw2mewexM163CVYBGcipMdJP3qYuib",
  "key1": "sczN5omukhhgHXYZH6LJ8kpDi4bAYtkzo87zSikqJ3odPyN1xczpT1HRXBML3f6r8Sex7pAQfXUFfYDN5MyPg8W",
  "key2": "5T651V65jas6wTn6XEES4hmnyTdKWgsBTtXPDR9ELHyAVjQ3kWG1hN5Vop6vidPkFJeG1zafpwzEsLZv4rQV6MWD",
  "key3": "31e5rp1YyrSkPTrB6Yd2P8PDwGukoi9jnwbCKQ9dKfkAkQjjhb86gqyCzKwiZZEaXV7XuUDJf6GKAFzQjA1wDedp",
  "key4": "54ZrxsqJ5UKFUKX2D79FKPi9X4TD4Pwpw7XbzGFmjLh5YLax4sdt62kz6EPAxqLBRfJjyNGEhBgL7kCbukHxEXuh",
  "key5": "3xmU3BQ3ckp7bFaSvaxCyYFuiRhKwywhmBid2o929cbbn1A7bjvGbmWNtsKU4NU2kbHSjmGDuwPWp4ZJ9dfCJbUj",
  "key6": "5ASeK5uk9GWg1nSkAHLxmrkCnmEVty9G6kDTYpsdH5uQCf1ycWpM8TAoE5quBXWe3Due5G6dw2WaDPmjqZuRYz9H",
  "key7": "2rfqNbT93E7b51SVunf2zr3e5xPHHMv5WnVRsejgKCszoMsK8WWtCsRV2Lz22fX6EJUTKY1PvigTYxygEYDeLz5Q",
  "key8": "4sE3rwjmju466Ebjarf1ykucMJi6sfNK7UDw6w34BpEP5euFvsT9p3udiWNyWo9AbB6BzTTNwtMUaawTpmymZbC6",
  "key9": "5aVHL4Xxpxx7YDTF7byqkRcVnsnppm3oyo5njkGUL8hKEdeeZdsGxTEyQgD2SSiXefx78HYsuXAJwoufQMH7oNfo",
  "key10": "5u1d4EKSpeQaKC2qu6LYwZ3YCyg65dPxX4TMEUi7NmzX9tQ4yAgYcVaLon8jyhhKCMiWZnQaxU3brSZ7iP8iVkAd",
  "key11": "65CvzqsNNwpRis57FwXeFydkdTkZooT4xHD3zz6VHjAdUHMLvKDkc6uT95P28u2n82tazvzKTQhLf7r8UmaYkELH",
  "key12": "3gggLtbGRBV2AbmRHiEh825FhCsx5LdW9aEEBSY4Du9Mmm15SZTkTPqK8EdvcMRPE5fj2fqZ63VgzM3ysgu5APAy",
  "key13": "2ccLKtBqNN11ad72CK15AGEcPwfmPTMEdbRxovAyux1abRka3Q8bESdxhU6uu2Lsnwaru9iPDNWk6CU9CX2dfaYy",
  "key14": "4N2Vdipe5KvYTwmQC7RGjcY1nZifXDdoTs3C5oTrwf8P3c5XsJdqsspZvZAsPYSwj7FsXXqumEive9mMWwESo8LC",
  "key15": "3tnS5CfHZ1fCvsES4RdJ9CVGrUW1C1sgK3M6kJVURtrWggKw9hgpBwPJHV222AyTohBSK4j5NRjZDYCzutYocsEU",
  "key16": "NXuUghnZzv6uWhNginSEFEVqiQq9StzUGp13EnE37PEdFXWKpewHL6SMPgaktdqWdwVWSw1sbZSt6FtRTNj6xUv",
  "key17": "4CV1Y9Eyi2mq2MsUpTR9Y48JNDQGNuB2cWatymf7v412AKjyaNZkDmnz9KrpJsGm8nPRnx6tzefssrNJqKc1f8UP",
  "key18": "35U2FnugMtpsuKwtNGabRCUNVdMway96953HsLx5cQEocfqKycL58LQk5paQrpLMiPccvDas1wmZvAZ8xZQhJuY5",
  "key19": "49D6UmY94FsQ5zCs5GMkQXaSYz1snxyyeXnv35HCSo8QZWX5nQjYmLnDgyUCN3ghzW3B1xeBTLEnKDcCEjHUxvWn",
  "key20": "7PVm69pRboTnuc8xXjk5xYAoB6k1Zm1N5gc2b6t6iscsYvLkb8zs8zz9KCuYzc65yU9tbnn2WzPa7Qa1Hdkmhzx",
  "key21": "3BPrGvQnKULudRziVSzNHjyuYVjhUfur8o2uV2fxQnopiaBcZSrWdGmqZprS6SAyZaGF4GSFP2gJ8RUYvLbsDSbf",
  "key22": "AhJCCo6Lc3oY9AWEzD1D7HaAr5ZQvARSuxcfiCga6NMN9uNXjzyoA3fjKmPJHTcHy18MQnyekQ4hDpTGwSURUN1",
  "key23": "5VdrvxzHDXRmc5mK1GFayMkQ1gq7t8eRTj7ggBF62QKjWFN4NG1PiHsdxxCpa43AXM9YY7nJS25ePHx4C6miYUYe",
  "key24": "4G1qTDGnnsAPibzUpKQ65YaVpMujRyE7L5Nz5gNBmqs2wCKewYUckdB3L9FsMWFAVK3KzndtcUyKCpwtDCVM5eii",
  "key25": "Jt7h5vXCMLnpULHCXoeXHCv9s36RHXeuTy4YvtWBBopicEQ6YdiQAuuYdgQqdTdbGo439B5pwYaGDVZ61ZESRcM",
  "key26": "36ZGXQdmoDgsLfMyWvAXuHF6SRv7wPbWgH4UGXUxhfUYhfViSZmDqjwvEMrXSEGGeDynuywSjzKPMtURhyiBwipN",
  "key27": "4uRAj55KEYYMvXFYG5dcbRSCz1utNh7wrTQbj6aXjh97xugLMYHrLexKN6byiydiprUtQWmEsowBbmqhAbRfuv51",
  "key28": "5TJwkA4QjvB69K9H6FXmqmCs7sTdCsBwDq82mgcnBKVYkGrRT66h8vKgN6rm2iLfdMPp5eNjyuVMJS7UpTDUgK2t",
  "key29": "3DijPz7so8dnCyfeWirXCAg8rebx2zj6mesPR5Xv6jSzECj3FqWLYyikew3yxUNtN44zSye96xNmAdupWuzWCRmD",
  "key30": "2sciUdLwVkzfqwe4nJH4nHc1hejbbkcHZrMr2x8eonCqSyimqTRep5LZR4G6mVvcMyEumX8KXkggwjCnSn68FurV",
  "key31": "2x7RW4Zefy3nrEggfU7YbRDq5pmhNmGvP7ZzWFqdF9Mv8veedVt8v87ehGKfZ6nNZCTbxsNNj6w3Kh3HJ3JcNiN1",
  "key32": "vYk42b9e83NDtHU8QuYAxxzXtrNBgc3hWkg1jX2wgnSwReCdZZ8Utm5SGju5eooG7874zd8Ftyu7UGjrk7Y8iJY",
  "key33": "3bdByFMyZv5LVmuenBiGCJ2TjKaVErZ2NV5k641KDZ75CQJLaNcwdAy5F7ToZpjr73uoi5q5E2rg9JEq49X8CxLy",
  "key34": "3fuESeF5pkx3BarjVdKVB3ANjZozwzpRoLtEguFFw61jWANucRbTyaF1QBp8u11KmdeHbwSGD2Z3bzrKhACwS3kJ",
  "key35": "3s6i7Hf6KefoY1imHSwYZ1FUK93734UPCfsXz2pVAdNjDAE4naSFrpXvhQJpP6BBt4EQNvF18o53DLCPxpsPnRe7",
  "key36": "wBVvzpe1BCpPn43KSXdjg3pRmkVnQcN4rfS3oVRqsZ7Vsr1FASLXFybsLMN9ecTPQmS3GyQEi8LDBBkP92zoDnW",
  "key37": "4ZaWpskdv3RJLPk3RxKGeHELwRuE4RgVpAt5GQBSxTTHVGzsT8Kxzwty5cVdrWnMLeqwyxoBHFsd5GgBUG48gMkj",
  "key38": "389DvDTviAXM6CS8GyS5bGxZjt5qSKmhKmnjtXFQZnj6ia1QKQmjbgXMMBowxDv8wy6rvw23hrsMYzPKBHs3mwsc",
  "key39": "3bv1iwA4G8HmNz6Yk4w1DrkhLgPV1iMaRoSprgFQohmytPkbHEA2NFXpz96HvRP2shLSJnXYasy9T7fYG9mXr82B",
  "key40": "4ybfLy2kspq2np53ZSbnJ1QUbyy1VGuy4cvEcuaYnNGq9gc5KSzt6k64QrD7SkwxLjpZDnBs9z4inywtvcJHiV5N",
  "key41": "27NNYYDJjmuGH8N9jFnSgMpDsccsZ3Hooz4JBK7hnFsqzTEVmcnWYrBwFw8csZjQf4SfJvFRuHgeW7rbny27jxei",
  "key42": "36RiZuNTii4kXjdLJPrFG68mtn2WjPKhFwGffwqQuKdT3A4toSXiUTE1Uw5DCoTwpU5t8kduyMWTzyJ9PeA4eHZw",
  "key43": "37PiomDd8T1vAF3XgFkVoHHUmhF3BuGixsMDBp8aN4EoqNM5XeedD1Yc5nJ1KeAEakXEGFEd3mkiAxbnGd3uZyJf",
  "key44": "27y862u3stfkkLiruC1gZgQ6KX2w2awxKaW9ptyjkAjjhixLRvsciq8BoqtWJNPEdsi74RyKwdQAVwJuAf8jwkhB"
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
