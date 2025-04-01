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
    "3pGahmXWS7RTpoiTonrTLatEh4QYAE6BNL84GryKboCGCqQdBedYy13Pezt94XdzUw81YEasDsnHoiVHAjtirXMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G35mJ7eqmwHB9bTBzhD3b4uVwAgsHyAbW3FGh5Er7TsRGWehnvS3DeHQRcLfZyrSoDU1zXPNJjjmBevzXGSf5k8",
  "key1": "46aAjVddT39whzbzJ4QSkG3Z83AhLGr92XjP8mo4qpfqDLqUoziyopJrH3JURF8JHhag3gtkdKWSB93DYyX3Cf2A",
  "key2": "2H9RESjTjP3Wobbe3jsrptqoTabzQBcbV8Z3Em9ioXSiKq4NgaGqCKe9LGyHSM4pfunyp1btfN1fox5dNmHwvVPh",
  "key3": "2gF7qxYSjdHx6wPyGC5XJhjAnYmBFGZY2J29RX4ANTYAYnv1gezc5FSKV1mZfKgauGzBpnvafVV2xGbLXUn6WjTy",
  "key4": "3JJm1PsuUJjGmXUN3hKLRFrpQJUkjGWUZMhjdbKXY2cgBcivEBTg7dDd39W853XuYG3X39FcGeCQSg8EJHsgaGq7",
  "key5": "4LksTvie9GUfsJcS1BZfxocqpoyAfnXAKx3WLcE7Kfj457LXhVSTpZX2g7GJFieadWVcAzkwC5aTdSzLzdSHX9DD",
  "key6": "5neqGeZ69RyxCgW3yFmv8bTcp1cpurDgfofk9mibBCaAWQZFySXgw1nncv7y4i1mhyzwhtCahMQNLXXfJZaJA1pB",
  "key7": "2hNZKGSjW8vhpX9apM8LgfqWSz2wH6wtvUn9YTS6TEFmaQv8w9WW4Lv4rqBxjb3JHumoz8m46NQho9RGcvS3r1nz",
  "key8": "f5NhBVhLUzPG7BzbJGAXXCr8Gfa7hBj4GkZi2M6ctfy2W2ThZ59ydiw51b7kF5EUmtSPoe4ntkCtEnep1tAZQVT",
  "key9": "5RVJmjUuzrjiGf9kVCNTD2o41zTzzt5U6b2WVEGbYnrVr8dfrnectC8CWsa1Br918bDjNU7bb8LiEuXRvsS3QqxJ",
  "key10": "5ganjL4hVJfcrsCfrQzHdBWiwFscPBakaRvFQczfsZNGyUZUVYgKowniVnyGKRvLSQZduBiCVSfnkAKYC25CpqJB",
  "key11": "4SKmkrvyvfi7caLiJgiVqMG9VZ2v1cdwUfjiWpU2RZeTw9LPEkU2VbyCWkTQUCYQRhHdJoARosxjDYV6C5NKdzGu",
  "key12": "5wKk5k7get2da4mYHwJndAArCwHQHXVVeNd5VE7sB31mRBM3wrKZWuxFzJhea4ex3DHVAo4KnsHQrZFcWcXvqMsw",
  "key13": "4oz4M1aFL7SeHxqN2UCyET9ayHFQrn9Wxfz2rDTnsP8NoYTsZat2ffJr2vxbnN3nYqUwfaP3SV6TBAqi6yQVvbUW",
  "key14": "4dDGm7jnpLNu5JAfGU2L1n9qPwXG7zteHjp3bhw9yyBbDbkPMgfnu4HGwpsnF42HKe7WpSqTGCmix36pSyhmyS95",
  "key15": "5tzKwdMLh3aD9ZEotthMzuhhdYz8Sg1HmB7VR31LXYdFxYbBZfwV6C3KLTgiwJHYwYtC2wSNCkrGBVX8arGNwYbc",
  "key16": "3n5UxiVJSL1bkuWbqks2PqyLJM7YmTGwKUMrt97733fQCk1AcLy7h8HqEBHgkMsYuSBjyqWeyJXhFDBeEgarD7PL",
  "key17": "4bsL82DckRewLRWS8Sd7LLZJMajw5qRox7hAesbRNSN1uveaZ3Auchkrv37pE6v9rHLJLL586QLaBfbqjTe9JqaC",
  "key18": "237ZjeKunKPN68PVqtoSGQirUAgr4Y5ykpcd325ynj3UudbhCyRrUqYPdNu8U3L2U2ugr1GjVa7Q7ppUY5ks1wMT",
  "key19": "3VMjDVD1JuqdEgmyXueFA4iWf6VkCZbJpqNZyBhJYzztqxTurUjJs5eAQK2ToE8XcrbkufEZHwSZsDrXQWmtwZbP",
  "key20": "w8icMhANV2ebPunidxPN63gS1ZsCCfCxeF85GRWfRnqjdJ2Vcfx3ApA56mJzDyaRHvJyUAgPSoJ5hg5UFrjta14",
  "key21": "5vos3eEvpgq1VbNcQFUkJpYf8YHeSBCNjjqhjQnHLmKC9q7j5JQPwgSNnpqxmiBJZsQ7cGPQ2MhBWsY5gH8yG4MD",
  "key22": "3RX6XunL7pp38UvpqSwKTsxq64JzpAc4e3BpQ7ZSJydQ1xELx3wg5svvDmbk8r9WWF52QLrUGWa8ggfP3SkFANC1",
  "key23": "4dC6FiSdcPJFPyc9SQxHiodkptLvF1UwdHr1q8r9W1MNtrEhferXu5p7W2umWoydbFegqXmRsGzz2DGrZX9XXiDc",
  "key24": "4g3PJBG8a8Z8h7PA6xtKhiyHXkq7Zr28rWY4hbBZAx6NfWRWUsA4YJNcL3EC7pgmDXnikhvyovod1QCNZoCQGrEf",
  "key25": "hX2WurZ18ZmUak3tMMPPaGXzRTE5xrgAcFXdvGu4xmRK15z5aMo1ZCa5gc1BUXUXyMLfKohJJd9AiiTcE7Ez6e2",
  "key26": "4vVd9pWx2LkE2qBiexziRzAyH8MQMrTchQfb6UwHEpLhtaNacVKx2Tthq4pv4w7N9pgvuoTreRDxGifXYwdPtHx2",
  "key27": "kzKwW1dvM9GLgpCpwZAfi6Grpi2XeEWzDMZa9JkKYUJ1EHUNBU8txbDXAcyG6UafjzVwRNQtovQK5dG6YYrYxLh",
  "key28": "5UZM16jshkH9oE7K4mcNKHpXa3BUChob3LP8vAisnMXmM8hntgkADBqdVQc3qVBMzPn2GufpBBsmfy76nrTfoNby",
  "key29": "GSkUyjAeBn54MBgZf8R99xmhFeKLBy2Ygv9ffpshBZhAcGouY9kVu5JreCDaK22EQm35zSkPdcowukNYnyZWcMC",
  "key30": "5e4ViRrP43K5e2vJK58g9Zd7WgXPKi5t18ShiqpaEjCotxvCo59DQy96at8EDgj73UBJsQNmaVKgAmKUfPCjBdRt",
  "key31": "4PLt5XNYYW1sVy38rVUnwNZkS8SUK8RMdE52L73fbpeK4EyFa3MCeFTzpEtPf7BRKDWHxNbwvJofkRXpnpr5TaXa",
  "key32": "2CzwxCa7Sjb7yrAnPASgwCvQXXBQ9K8dM9tGjzK4Ci6eA7bfPz29XNgvXd8YiLe8V1TtDvhVzM8amHyDKuWB8mLh",
  "key33": "3ZXaRs4N3YpiEPvbR8V3YRdPYcZD6A1FctTCQYn5WecJ55h2mbb31iwWReZ6LZDp3KFYwHwkCtZXbhaJKqhgunya",
  "key34": "4cZWut8XR33J6vdXLJMsdM9UwQjtiGouKnCtw1BhAyyHTn8YWGDptw1ezm9MLNe6KreTBJJyZh9cvJ5LeWSYqePj",
  "key35": "m4TwUkQQ8ernikzZLkkLqy1zUHubSnK4NKU8XkGh1VwUvtid3mSJfbX9XPFMY6mm7dRB1HH8f8ouVSYAoqfUZUW",
  "key36": "2DXh9kMY2HzAMHeGZXZitiDVr1cdTiQVCNGpD4o4GdRLm6oG8hZgBFUBR8UDeYM2Jjyw8E8Jd1W8wZg6uDADu4d7",
  "key37": "2Cgkr7XijKsHf86CUYRz5pgJLHxKDp6PsgZH78y4AaeGo9rU8nAksERRCFvnYybieRmtWTcYgcyfHmR1N6eq6cFx",
  "key38": "5Nsmj8iunbRf7DF7r8rzFUHik2PnVo8VBF8jRKjPQWDJ3FoA5sQoXWRSUpx6fm9o5WXFENqdfBQkhWWZWcrAKTH2",
  "key39": "2cAMYUoydB8D2r51ZkTmSKuR8giXdu7A3U9GzRoKCf6mf1bb8kWDkqJRRTaHvu85ghG5nPyUgbdoSzyfKs9L8Mey",
  "key40": "4UsCiDjuM7B5xPn1viwXy1sb7ngS4ErYRGXbLT1Gprw2xT2JgwDJhDVstDwHWsaW7BXmqmcQwC9D4LoxqVLnG5qw",
  "key41": "3B2yde9LoHubCYXLK98y8Lhk7x6k4ngGW76Ycr12YkqcVmkN64M2JCtirDMYqQBpzoKMTUMXw4dRPxXGgiiiT3C2",
  "key42": "48FKxexHrJB2q8wdfwqrGSrK7fyffTFWjYU73Yqw5XYAqbxDtftgFN3juixo3JuN7QBP1Cobh7er1s26MQ27kked",
  "key43": "3w5G3Shn1ETwYwtKN5g3p7r3QyQ7Eyg6Y9qnhQDkL7DmCMf5XQ53ZoPdfre3ij6yLMskEhkYpFWA96koR7jyUj2c",
  "key44": "4ybjH2oou1Ai6yBBj7X1qJ175bMdZhsQDj9TJnamB9w2r721PecCvE9TfSEYgV3LcVCbJtWeHBjXAoj5RPhhmTL9",
  "key45": "24vuCeBMr9NXKGjzwXGujo8NRei3YkCwHMXTyq3X5FfXfqSpoyGZxdS5vrk2E2249ss2eUMWahopwG8vhvxKDuG6",
  "key46": "3Jd27RXUkQ32oipDJWYE3r6KLRGzcoy1zXFDDq9Hp1UNXmm3qoM2bkkBbpd7RioS1ouKYdYmWFv4ShZxWZPGZqv2",
  "key47": "5pXdCMNbaFLAWmUg4Vezajh5Cq16eXSgK8LhDK2CtYn9WfKjiZExVymUJc3HhiaGfy7Qy2kPwvbewXaUFagV8zbF",
  "key48": "3JSy8imiuTNwfALqGozRZZwGFr4SrBLmdHmV9aDvCFajRkRfcSd4fxPpuniiNA464xjHrzaTWUsoqkBqRpVNeaTt",
  "key49": "cs77AM7PJpqPbo6amkH7dhhJSzAj4aFpW62UnRhMUV8RvTC1CpB3vu3f5erQ2TnXn27mrePwKcRouaQAVe2mfXk"
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
