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
    "33k4QPcESVnq12h7M4eWXr2s6DBpQsoCymEJ8JTmvVCU9jC2bqsXktbYFuzKuXetdDeD5LraDPx5p2HHzJpd91xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCzUdrVUeZwXHPimSiizyBCJ7g4TXSKzjKvUnJY7ciXtMxffFNqtkstbrdku9RayxMjo3q3uTvAviT9XCTpiGgT",
  "key1": "Nj6cCCqovwoDEAtMyzsgiTcViycFV1Z5bRr4ctMoacQsXu3hm4evjQnFt7XkxW1XfwPEy93DTRwmnkZmHyi3Jxf",
  "key2": "4tCzqH2393UdABmPVt336QhgoxW2om59RXkJEV2cjpG8WM8x1MwbdwwfZ23cpVxyzAC8wP2fEDY16YaHg3MbK6rk",
  "key3": "3vGMPWsgbPjgnYccuNrmpnGKe9cL5Zt35PFoGjZyXVF4Vp8nCMcEpxhmgRAnWiKyTZSpBQgBKQiFa9TuFDZvGPQb",
  "key4": "4U4un17MpN6hANUbtTsAPXQ2TD9sKADanzTcryueD9HFeFUca7xE4cRngC9BJa4Qh8xYjMZ3xNHS7fKsBGAkobWx",
  "key5": "35zodnMnRPUoeCQUZ3BGrL8QqudUweEGr74dsiwhtTofsBYvvqcCpKL6RakCSAsSMKDcjuwa8He7o8WyWuWiuvhx",
  "key6": "3itfoJn4YsP1UJGZgfZnQBsgRbbaMsbR9kAoNo9VLH1RBaFAB4g3BhjVnSCqHxcmvosAfMBEXsYiMsiVnbXPZjRd",
  "key7": "42W4nfrz8QuXebPt7A52RpwiU6MSk8djyzSvyShcRBx6FpdD6hU5Yc5NqxxhfPe41uvcrnppuxZz1ueCr6CywER8",
  "key8": "65Cqi6y7QYyUWWhvwWsccJYgUWRR583yFj6NaVrVuZZcrroxKFAK9t6A61Vs9AoyupF1uzx2TMdDi8rGHWDgKYk9",
  "key9": "185ftizyqVH1ZZuDC2WwgEpxqBaeD15rYwN9u8RgtcUa4VGVqzrFX1dwqPgZ3HGgsXwjMwgizmcmR8RCHsQuABF",
  "key10": "59s8f5L7yAYMwMZuPRTS95iAhgYqq2sfAvkXDTCjVy1yhpZW4pGjhQsciBNVP4ipQAh4zTeYGUqqH3fTkwxCardZ",
  "key11": "4spjKj95TzstPeFjvWb6xygVEcxm1KXLfa5io51nimUwicv67QcgnDp3MnPQwsVCDmwmCDP9bj3wCpmiBbnMKhXm",
  "key12": "HourKvC1CWStzezmarEhdqWNJK2NCUtCmQmyR5Ux2oAJ6Q7D6gCyeCUcWz6ym3WS9pjEfhjtxS6nrpNT4rXH1bR",
  "key13": "HyHaetNNv2kHpcSUFcHM5kqhFHp9YnUZ4LiYzAtuEjtE9N4kLzUj3aEckxoy6ESZWB2nfYThqY9Pyx7RtryX6gj",
  "key14": "mwEhwxyiAWgwbtvYNZsC9VDJZkb2XeEWKj8o7kfUx7Xrt9N6HrkBkamPKs17Yue3v6vgiAFofdNK4AgWxVz54HD",
  "key15": "5RYkeRDarNRTaKNuZEzaB1aVTpFiQaavnCuCU45ecKotzutbP6A9nG5yCt38y3m1gJXHab5EFyXrSPhss39Jvh4r",
  "key16": "YKcmiUPPyfdNuhQBXFhSSa8y21VHRioKirZU25ksqgwMHDRterZxTmQPomrE83KxzV3rrUrjHWczbhd912EGGhd",
  "key17": "4U816RZmnq4U6rzR1oMKQQB93FNsWsgjtkwdcUvNtRvnn2HGsQMH6N8FS3CnqvcXeSFH4V2En86fzdH6iut43nYR",
  "key18": "3UJVVYGjkuNDAtDArd4FzwJgLo5EvUZHW9C22nemjUWPb1seMZLp7e46juHKwWgo48DQx1zmL9s5kPt8U4Ftw3C5",
  "key19": "4MDjJ78D23rHkVznHSyiTVZB2XdqnMD3NPz5SqNPunjNebexhTujd2qPKR8o2Vf99kPAHwkHJuahLgYLMhPcMsxw",
  "key20": "MJk72tohjHbFR5jeBCQPceYJ4qiUbfmrJw9618QUKg37aikfYMMARYhaSKpZhDqJJS3xBFiKPgKBTheJf42snQ1",
  "key21": "ghiCqe7jJtvtc7ZxJ9oN62NYeZpDaNXk2nVgur1cSCKaKLDJPfEVSJp33G4cJ5Ku4gAJ2CGJjFuVhtuJVDKMV7L",
  "key22": "HWXPU3DRZqxonfoBPBvS7MyzhSZpKJagqGMpNPzGuU6v9F8D631EhAUW78Ftjt7g79tF1Deez4bZaXvs62QcViq",
  "key23": "3C5PdQzzuwauGWW4Rh32P6dQBizwD5a5jSjaGrQmHkzTsCHbAoJEvr7WVJA45WCWG8kPgvRZBS4FJDNtwdmnExjF",
  "key24": "63Xk2Wwdpks4Hvzk3MPWWBxwY8JFpsgp3H5VerRCUFaHqjzfTtPfbsAeXHm74Kpi6JyDS8erXL3vnhwEaCNvZWHA",
  "key25": "2BMuSD7vDuFDtFGphDanUXk7icQj1aMtyTewwwBmUPDko5xsUQLvfTjd3nd2C286invNaAbxDUB5LpV7g3Hinr2e",
  "key26": "YREaAPJiHdcAFfTE64AxV7rYfryEjTmQMAt876BQC8BVjBAohsmUXziXav6XKGAz9Bg26trRW3X1mRg3jrxQg4D",
  "key27": "TPTZCSF1YaKtPa4JhhmBXgSJsSQMrdFqetv5rrbsgkjNSjQV8q9cGXDbN8e16rNAuYYmv2Q7zykwq5y7bQEiEX8",
  "key28": "2Dgx1eT7AE6PSWAKv63NiyVZaQB9Zx4CEzkyTqNK39LhtUnKr6gDRwhPTFnzVVMxF5Hh28oqTaZVkPX2mf5rGk5A",
  "key29": "57QKHWCtuyNE6xz8C998KWU5Nb72ZMffrbXVx88K8TFKEanSXBwtN7XJaBjhKVFjr8V3uNx5jVeAx7AeoftZShzH",
  "key30": "3wgwwxW5gFi9JSwGSYynrPgDM6YsW7Whhr8kByH2eChByfBCw9AzDqQPToyBkaidW7LevfWaY9wPv4eg4NLtizMH",
  "key31": "5y14dp7tyGYkHp8jWbq8X5Jg8evszEu7bVroDJmyiRKk3e8YB3EvWfpGyMNTMn2GYg5ZEaLhwEUSNYhpjragj9cN",
  "key32": "tsjJWUYbiirhUGX3oVSFr2G1wudFP1pHZv7txRN6XRfhbLBx4UmNc3ErUVZ4DmRwK7zkBYK9iFgpQNdrJ6Nuuo9",
  "key33": "3MTjqK4mtRybzrqXY31CQLupry5HqGccQwET6R7vNYZtF3jdZdn54MaW2PD222Y6RWmoJxtgMdWnagJWZpW2d3tC",
  "key34": "3YS4AVi4khMQ6f5iotzEThtS4VoSCjm7KzSn6tpCwhhcJFmqT5QZdir2AGFaXuQ11NuRfVdmHvCvfBrMdjPxmQ3e",
  "key35": "5XzLUgoRZb6abT8fHkUvWFqUygoo5rLdNBxZoYBTzKrqq3s9Ypp7y6ZSwEjogtJgE7sXHPgkwxmv6n6PGAidSTSS",
  "key36": "3gidRjrGSPXJpVB4R3RzNx3ypGbrWTMh1ZG5zYVrK49BiY4KXVDtJvDMot9MsNRn6kU6MD1vwPNNDtmxdkSMcvzc",
  "key37": "4XjNxW5DpKBrK9aS3QKqZ1sJmhVafrzVneNLETxEF4gSjYc9KGbWhBkbvv1FVcyLF1Pa1gTyXdivxTAP8Kak54Sd",
  "key38": "3WMs5RjT4Rf1L9E186M3gQrXZU49KdQ4zTvYBpYLkC352uXCyNo57rjmqexWEbEfxkMnE6gSh8tqiH3qqwsx4Myw",
  "key39": "2RfvNQ14UU3H83jUQBir2HbtoJcLsWbDVSrRvpCFDm8H2K3JdvnvfH7usGNh8HVNjTysgrCYuUJsp8MYvz2yb5Ai",
  "key40": "svpSHWdEKQFLWZC8ePmC2wQFmacsHXQsG8XULdzcKjyiNhkvHUdS2Pteyh9k5F7UzbGM9V9FPJyA9JHCv79Hzcu",
  "key41": "2pYnKDYR38iBfLVjaoimaV2pXzcYRKgYnnhyYoV42mmRtFQZKWQ9WAKxXRy2ie6CDn53xu32mKSyWJNfMZQn17oJ"
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
