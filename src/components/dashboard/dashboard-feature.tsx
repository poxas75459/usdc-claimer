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
    "3PBjv8JEeXo5EvumuVphYiNZhH8QUZ3iPi4X8snqS1mLwrJKSjFhn2skNAHiTHHE8Gq9tFob64svdNQnWEMSD2SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnJdSPnSEKdNQJXksFJpezyMx3WqeqaH3iZav5FGYkawx2sW2ua9DuXAP9RxpCznZYmQXjrxE7k5QfsYTAU2gka",
  "key1": "26Dha3U8kVLuBJWpaqDgNQJUpS1jeQktS7Vppf8BNKNhP8y1oV21wDTBqRvLTEmD8im466S1NRqTdrYNKgqvH7d4",
  "key2": "61sM2E37fqfUS8UkHTCvcN5taHueYDUzjAGgk2u73Fyb6y3RqevE1qewww5o4cGJYJ7Hs2HWZU9hRNQW1MQEgbkE",
  "key3": "5v7m4XKmzTywdGnHAMndxfmz5jBX15ds6yuusrCv13EoLhkn1LDoY6XC2M2Fo28pz7hEaRAYXYcXWUtTvkWP54Mf",
  "key4": "6JhUtcr7k2nhKGtv77Vz5FpxwaLTATscFsLVC84ZzBcyfe3vGVWw3Sp6E6Fufxc7jDS6yWfrBGwRpYkWx8bf8Hh",
  "key5": "2m161jZHjWwGZNLuPA4i9wRPMjNzgYtMr2xw2qCgHaPrrpjh8caL7jvwd5mRFCu6vDoEQGLeZuqmcDuQxD14m19i",
  "key6": "4Nu7qnqfVkWMLhHJdqMjsRQ1Xc2tcWDCSg6u6446oHzUg7eDQzkH5cUwGEbqCRHY8ZhrHMHWtbLCD6teRN1wwsVs",
  "key7": "5KExmjkTbs13fRuqmCd2r4UMmPx2tjxwXHvUAkJq9i4w2jH77eVXWWbuRS1yVKQTxfeprcg94Fyvk5UPF3vsBHPH",
  "key8": "59sqq8u5nD5cvmTstvQHYvjvGRaJpBzn14WsVYdmiLYkj7Bba5skMvKmfmSpNkX9awDVA2geVpswJ3PTANH7kfs7",
  "key9": "2BFzxPoNC3b88xERHQWaM4S5V8JzcHDEyAwEJqioY3dXRkgVWzhTcCLdehZNuy1UPtE6EPfvdDQJaVcNNNC6qihy",
  "key10": "2Pjxp7c1njUPSjiL75fWpSgJihH4X37wGvz2dnv16SrFXvmXy1LZcWzjF8U4jieNdYu7qLtY3cB7J1ppMB2QSu3Y",
  "key11": "Dy2MK5WDYkRMaaTTXrAuA8SeCJo4UzeZixsNi4kf3gkQMdYLSkbGyM3VKiXrSieBkxuHrJm3q444z35VuzPD6Zr",
  "key12": "51A3zSXiPLQqwdViR8NJNPaX3opR6cqhda4xLEbfss6ee5JJzcu96cyGz3hzpNmLseu4zK8uyy5Z3xLZibQdsEPH",
  "key13": "2x7dPEVpBuMo66ex4KrRSKe1ALPYHtnnRSp58K75L2RoUSFKrgA7mr77NYKgdSL1VD4rYWhXrqrcfoP7gggRQQ1",
  "key14": "4tGjhHwEtWYzz6xWxnCE61CTzWKXdQAcrojuThLh3HNY3FXAE67nBzeKBrGPzNXf5GahXYeAfchP42ecZ79DHuDi",
  "key15": "2dWPtBJSDAxXZBjYn2H7aaZpHEXVJXwcmj5mwLzgdUBjhvszPrxiaUVSkwPkR9pu3BfCf4KQor2rmfQrZ4Z33L8c",
  "key16": "SpLXAVjJhfCZBBppXWsgXrzKB9KtASnnAmmyCvazX2zwqGAuBHRwnaZKMXwFLqxLo1K298zV5oKPWSGbet7iKrj",
  "key17": "45fBBugdfsK3af6v36SSj9uASgwSw5p7r4WLs5zgxpzwms9JrngRoVn4ugEDDsGtZQJ7j4ivZSnWDFWGRJWNcxU8",
  "key18": "3Jio7x19NsB5LjQN91X9A31dTtrcsNJ5dddg7iegyBnf9D28bwzwmpRamq19b1rBFXiRe2pep2LQRG6er6Kz8py4",
  "key19": "2ug9tzU6fBwTTt9Fs9iD648BEMLRLdmrV7wnSdayBRiSbeHddyvWq6tyPv7XoSJkPpH7XN19KGzdHuLJzsZiY9xC",
  "key20": "3c3igYn8MGCdLqYWQVgyBmRkCAPV4ZrJ55CmvwRQUAMVkfzimEK8PLDzDant67cSf6Ku2PXEf9qKYYq65pjuNJUR",
  "key21": "5NwjU7b8rqxx65r47i1hmdzXZhWm5Gz6de5aDDYHSrThhARimqwJLZpD4ov3m6JsRHov2XgHtNyfLhicLqNht5VF",
  "key22": "3iw93Y5PTaw6L4C47jaYf7mraWFyudQuSKdirj2Fp7wwHpGhpmQjop39AyHoLUSFqzoD2d8MCsE674kAhsZqE8Zo",
  "key23": "5wbhuwNKXXLC5GhMFK8caZnqJJ4PRhHzBPGAksz64FNqVw6rk8AKYNsQEmhGA5NDpSqKYvsnoSfsxW8Y5bKE6Lxi",
  "key24": "47Lu5Cv7xZk2S24cAGsuKH4VChHyhqGBTGDXh366uE87QnVH7vrZwvzQp9VnEtD72GpLn36cFPbB4UC8RmZGsFGp",
  "key25": "5S2gRiyruqJgWfxcSQxXMsBcKyZfQAMpE4FTMxte3eY69h5tfphuD9YhQ6kJXcRKjcXmUkEeeQdUQ7EAKCQgNgGr",
  "key26": "5TXGEYvxTdvh3vexHKm1LKV3fD5tpbU8m3dPRbsc2UdKkBvUioxTYhMEV5t8JUthZwj5hSwf77m9sgTouxBVLstW",
  "key27": "2gSDqA2RfAkhKt1QmdkYeyKJw28mi5xEM5RD1QTsjmARfzSBUer7dDyujt7neBj4YJnEmoGhvTDpUkZqmALP6oip",
  "key28": "5egVeuJsD1qP1oqe4oTDo9cxZv5kbRD6Z3vWzjveyGDGmR2RKxapDYqSeXZc34CZf4nAVh3o6NSdrQcCqWtvvHHS",
  "key29": "4r3DUA3VXVouHYP2hZ93nT6axHm62nvNCfMmNkXzi2nwhvehYp6YMzw7c3o6peTpwmBgZFAQXfdAnquTyBRb4t1P",
  "key30": "4snjZuEpnLtw8NmqTWMyTP4VcLqNa7uKrCxBAJDVL8a2jiSrAdrjCpbiMP5qXXAqbueDc18YkzniwJq9hcExNfb2",
  "key31": "3gSAtLWybrUCxSRcJPKs9je8rRZU6ywrdsN5FaZ4MTam4XbTBTGZnkD7WVviFqEUKnAa6PivQGnsx9PKWGV2NoDP",
  "key32": "2D4k1ntRvsvwUvuVJYPhyuzvhPFQxBZJbeoAYJTEXUaze1XPL2t2V5zjvdUvxebwBjB8ZLQoEExyoTeeGZFuzn2",
  "key33": "qouK9Kc6sQoHr5LzfZDyPSGDt3cS5fVacUZF7iCwDS8KkDRfjJAZPJrqUo4mE9EzjgAbvBePJsuBhWzyJdrRL4j",
  "key34": "5ukQzhzKsyKcwify9EU67WaB7ajZJ4c993wSQEpupmR6KMSQNJ2Aahf1VB68y3W19QgbGz8pT8xmf6eQfXEVLtX7",
  "key35": "2jquX5EZAWj6vZ64hJogE9Jujrg6yc1qfrx6XEKUTuzShNwWhUsH2tdW4Tqcd9ZjDweDtJVchTwuNcp6HgUWE21h",
  "key36": "5tx1kiTHaQcktn1DPuTr4VKcx3iWw9H9VUsHHZJDuoY7tCTuwMqFkU7jvSwAotgPK2ogTZ3WhpewQnRVDrr35cNy",
  "key37": "gM252VRYUvjjHYvR7KU5Ysx6t6Q2jd7dwAXRK1Knkhdsep2tfsMYa3qVVAYsnEeH9WCa3VuREJbaZMQXpinzQ4d",
  "key38": "qaXdZ6Pd4ES9s5yFtKHYgYxBJWQKvgJeE35ZYiXqjDUKfV6F1tqkwfZU5P28TDRdwVWtxSx5VVcj9nsV6HwvhQT",
  "key39": "4aBafLNFVwjGqxvVUPvLzuZW3SBuRhEseX5hNLF57p4g4zRRnsajZ1HLkTs15tPxuFAyVT42ECuhth2XsLiWL3sG",
  "key40": "2bsvXVCAFHJm15v32uDfRXEHTmQYtKRvGbyPLiuFxkX5moPqjUf2Wbk3ag2Nv3XgfD5zZrzshEg4YzWnf7VfLf8e"
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
