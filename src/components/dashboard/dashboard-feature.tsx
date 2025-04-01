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
    "G1qxF4cCDdHkVjGLrHnt4VihgNG4H1touEeTZW3YPfACX2ehAz13SYbyttH4sJPfb1LFF2ZkYdamHadrJU6j3NP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BtVSrk4Ld7pP7g6qKpbY2a2zhNG6xFwaWKHLrfiGuhzpnpnHSxeTJ4rb7ja26fpVt3iGgj4fGHu5QpNw86KpfL7",
  "key1": "47X7hNRkxHWCPbyHxQBH85KpkCDHYTXyS73MmjqqPqv8vtUuFMNtArQnM318U5qMSYotzXr67ogE14RuoYJauKUR",
  "key2": "4PnkgussTuFTNN49UoNMthXarzRsnGQMbBgstXWcT4wXJQkwZNR8gUvrJjv1tUVjW8tssX7L9uk2zVyjotsN6xR",
  "key3": "5dedFSWmyXg2a1oiB2eNHVX6QgGZrZmM7ANf5HNYL7AGeo9vcKpKZ6d9H2M1Vb4yxnc52e17yE6SsYSLG1itmd9n",
  "key4": "5vY1WCTToS783VfX8Gv2Ekyjfktq7zXeLiXYk2hnwFrkTTHwjF9UcDNK8FSkkLEXNjJrYupm83uo4GwefJ4dnuA2",
  "key5": "4uzCHgYo18XgCzmqyQwDWgKrpo9sNkf7BJoTiU78mFQpXrx7pMZAaMvAuhXzxS11X1SeXm8iTJHTAo5akY6L7VDC",
  "key6": "35YbudjF4Xj1WfkYudmkCb32TEaq5R5VEqxCfcUkXCZUKvRKYGwf5sLjyoZ3aFyCdEH6BCb4EU4qgoVKRwTK89Mf",
  "key7": "2PVo37pE41tt3RVzTNhJJkBbLLhnpTy9cgLqGQHy34rhWUxbPsk2ad57GtcrwwtTtzNexgbCw5LzXPac7NF8zfPf",
  "key8": "36gXTmrSs4vyZf1xXXcGiSbJsTeLcMKoCpDK7ja4XWgg8VsnfPWS98uAkHiKThiBirnUsmp5FVWxjs8zZgEv1zbU",
  "key9": "3ZRGtBfVpMfGQYqJQNwawfJ7Fhhs5RQ6UV9ZET3HZk6pyYf6y9CQX6kScPp2mSVMT7hPHEHEyuKf6rQpniVVTHvV",
  "key10": "4RmZK82nskVgdrLFpY8Gos31Fym7SwGAVKZM7qBTjWEDDsbZux6sMLB1o6qVTkU9DKWUGS2zuXmjgWdnnyPKztJY",
  "key11": "5MBWcvXZ9QQuXTYtWFhBggFxWG8dR7xFtM7eRrtqaxy985dinbWQwPrf5T1doPbfhXLEokHYpu1yhi2GSLAeQV93",
  "key12": "617RAvchvthd4cjws2YNZpWqxBPbGpHyR1Nbo1qmMvFTZG1NMgSPb1kFRmQsgTaLa6F9kNPfb1QXFrDjZFibvBGS",
  "key13": "2Neer811Uf3F6U4HCqpGQVSTpgDi8daxDjAKpLG9z439AEE2a4eBakpa4xVw8XeREiT3sjENFEzucBK2XzRZS6CH",
  "key14": "5CkPypxvbhDxZhWCyEicEWsQSbu2JTwwm1FRPpiLxaf7N5iropywXWdiy6XUW4YrAVxC3vxEyCtovu1j1Jx9wk2G",
  "key15": "bfTeyeuVUSLQP9qTniK6CXMgW2y1ia3a9tEgWc64gnWxE67YdJ5M2dAgHdVZU7wBTbLnWYnbZ2PCjQ7bu2Ma8Zb",
  "key16": "2qH9vMBuqojcVT5LMkTnqhqUGukAQ4q8XHRdxj1pxr5ymFUjZmCPaPZe4T5GPNeVTdJFXBVed73TkWc8vcYFryfM",
  "key17": "4i8WygxndarXX3uFELYEKbQxLbdsTt1SnDXJ1Dt8mZBHDmK84pRJ6dr25CntUUSWeUxV4hkZsg6C2EVR2G3PdWoa",
  "key18": "41jCrS8QNh6CxPeBxnz3GqPfAFeYEnphLYUKe2dKrKjEahwMJutszZna6vrWHGjmhsEHhZnki4zSBrictCtE5gJo",
  "key19": "5rkLyywHrEf4zRrtvfRjo6uWgREDsgM5cWS5ZDpkqNgSMkZHWwpk8Bu48AyuZ7K7mSBsaFAZ2J4QNhRSEgwCDrQ7",
  "key20": "2TViskcNpX8Y7LtnravbwyjqssquP4tB9PB5osiWahdK8V1m3J9qTWnyYES1mn8CLP51oHYkaAKDgSSsDqmCQjWB",
  "key21": "4bAvVgLxH4AWi6rTPtcrUPvswcu7SyeBTHCpzhwzDN7msDD6SUPLYzGAqSmeeAV2K5gpVBS4cLQr6BQigMZYXTEg",
  "key22": "27zgFuCeG5RVMazWF8nC2jL8s8bjrbpZKuBXHHELZo1zdsxkvBeqXoVpQez9HkHHzA62P346B7SkfBJgGxx9fWhu",
  "key23": "2udqecCwBpTfHtubKjz2JAgS5y49AsRswEj8oeAai2XzA33Yx9DAsjjHC7B6G14ANM7zeAuSZy6B4JjTP4GenkZL",
  "key24": "32xA1KU5ouq2zJcbDKRQDB5LYPzodHZ72o4jGgYEA8HxNjPuHTyPc4wFaUchbcfbzGc5nRGNuGA4QTcuWQgtuEE1",
  "key25": "59gbyE7GEt1PbfaevxvYg1bAU13TeJA6PkBYBnykFBrSoPMxevuevn4ofdhJhhkmaguWrJmb1XfzgGDpthMGDjXK",
  "key26": "4dB5dMRcPDVK4kVsEXjCT1LBgbChjFFpBSwa1hukRM7KgPxqTYXQf9DFJPs3eDDbvfTyge9uXurLLSUwCzaBfk7W",
  "key27": "3V81ve3HtwXxCL1QmUhBXFrn7eZn7QTyv4Qxth9DNj3MiuFEWN39mhWrHj2nQ89esKrbAvF3WTv8X5DgF8yhGkBk",
  "key28": "4hysCMpKudNyjWuJ7hsFs5SkmrTKXf3me7LYBwEzMfMxuQEuSa2kowhbB5xHgxvT293VawxascjAMWCjUqKM3J42",
  "key29": "8ZEC8JxJAMvg2KLRcsWiNBB5Wz9whqjEHvHVn52MCVteRqZUUtuaeeN5ue1ouzyGkFzG4TbZLQ6r3ApjJpqcUPv",
  "key30": "5BMXWThr7ipzKSw2oMzpNpmmwoeFcVsD9ZFXE7ZAdws2HUSibvgHwjUrRc7ESpH9ithvoZxB8D5MJ9GvFAJPPzfe",
  "key31": "4ofaKG5jL2HmqxUgyUYjmxewnwQgbpLeCJjtyT7uiQyaWid2AKa3Gm3HxjQyQBMLTWoBB153v6on8rcx5NG2W5oJ",
  "key32": "5iJppnW83WjyFAixCnm32aeypqxaLbs1LWEEoznU7yHQNdZqu89mg5UFH6rcrf4kM2TB5ZPXb1MY2KvUvbHsPHF",
  "key33": "2KPffbd48uCiK96tC3WmDHqiPZBMuuptCTUoF9FxmcfsYA252wqNyjbg1rpSmKHY1vSKWAeRBjBRZDybS3vXdMih",
  "key34": "4MQTLXUm3XXPHeUGWYpPaDGG9qYKdprDKnzWcuhKMAmGvQPwhe8RHCxvfZZ8kq9PS3RpVvrv2mLSicijPwe8TCtJ",
  "key35": "3wgL6DofMcQLn44BFowRvcXeiqPemh3WAzGa3Bu7XrJ3tpxvjCWsxXfRjTUV27uPwxkbMFi8UQrCEGzvLjkR3tRs",
  "key36": "5cXD5g7voTRKFmFBpWNL86jsyCbJLadSfqkDKkztooXsHMZ1YZy2iJDXfnMjvVMyxU3VTV75xr721RhP5eLd57hw",
  "key37": "2ANJpHTGJYnRUEte6EzuhKRzAgpPUXH2Br5giDz6o8kkujGJ1gMVREyNh88nWCWML5xEE2rj6ANFm1PtshCeySUW",
  "key38": "4KgWnCmifA4FA7Rz1afFZZqWkst8evfeLGn3hUSZUvXuDzANjnbH54rZzR69xvxwxoVdo69nzTLAU9QWT4nrU8Y",
  "key39": "2QhBKgeFkNoBMnUiYUojDPV96eb1pnKkiVrqLJCrEUtLy5EUhMK95UdWr2KUiA1rxy3K1h61egMbVxELVJXvFtd6",
  "key40": "63n7zSMm54qAVCrWA7vz1CTBKRp6rymqzmqjxcLLJ2sxwaLn9k5YLUgXLyVTszaUky76U7DNWkXi8ELtAKmewo92",
  "key41": "5LFbH1FVDWL9A9raMnA7gJiVmcxixPrdrvhGQseFrp7B9gEZLrrV3jXYUuh5awdZuRFcW6sd87r1ECqxuLNxz79j",
  "key42": "mZhHMgbf7u9vDX5E7ZBzJ8FZEm35umD8Kn6tprRJHEsvrseVhdQATXXunLMaoESTe7R6SChWyDFcubfFufHNdEU",
  "key43": "3BYVubxC6UMCrT1TVvtKLneYjsHdj7qn8kBSCcYokdAufPBg2FkfGKi59L78C3aTQcBr83NmJ5LStJys7ssAHvSn",
  "key44": "3YkZuEcUqPVfjg25J5Uhkadv284xpcRNHRqHQeoRV3d91RKimaj5eoZfVEmGqEMEhFZQ9qr9L38AkD5PcqHp7Py2",
  "key45": "4aDxTFgfweN2WUZzXgx6FacvREEM5sK3uPMt26CM6vuL61zeebkV9pQ2asKafTXc5dSzcKUc21c5DBgKa5QxY38H",
  "key46": "3bipD48LKc1mQvpHTCB9E1S64RaHsetasTXMbEnrhMq9q7sdEv41iTKCggB9KxEJjXA6MHMdSvHDBozU9cGYqVjh",
  "key47": "2XBDu4b9xZSnDDvhaMbSeCfqqgmp8zt7XasFGLauK9fu6i1aFe3ssiA7TRHFbyPZszmxJQ3jxDbCv8qw7RLH7nw3",
  "key48": "433nhjaQLT9cuqX6irMDNSAyXirAnyGZtuxTnH6tHC75mwUuZ594mJRTmdAp7hbUVPtkk4TaR32N3yvFTTtCFe1M",
  "key49": "2Dqeaz1fWvbAqRct33hs2CUThrbGJ47WwDByUHusGFurEe2NVshbmg16earHNhUVZJB1Z7dvyXLCWrSZmEqh6FvE"
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
