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
    "4VPYa3CLC9TjECAsmJ9N66TXRchfH9wbn7TsgYarAbCFMuBXj8fQcmDNcMDdpXRbquY2nruhatd5phQSavWN3eV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWvZFUMw6c9RzHQiSqigZAexApL35aKRAyULCKGVNnmvykAm6hMk2wHkeJEvV3DjEZnrGYuUcBYQgVAeyYowtKB",
  "key1": "J93tUeUQxwcZTPwLk2vCBPf3GZpzPG5u3Qifk7QVHoAUfiJDnhubaED89nfucjedB3VHfCgNEzPtQtCB1jR5ovM",
  "key2": "32uuCZ5Vn1Toua9XBBD6vB2Nso2m89fCb8BBLSGKhvSQiJKq14ppoku8CzCrFYi4zNYSdtx7BvFUMbCymD1eEqGi",
  "key3": "4uvf7b4B8Q1yfkEqLKJD7XnLn4YTaXheSmzuBXv9dN818t12U8GMJDqstreTyDWmxzopMwu1iXj59HsjcqgEiryE",
  "key4": "5rddDEBaRp2oEXWavFYUE9Jr5QMrhuGTqpWp1xs6zyeQW5EDemRg3PrjzHENHfxp6NoutEenU8DoBppsmpfjrKo6",
  "key5": "coBS2rZPbEJWrKFrGqujUCaYWq6Zus8JVec6uS7q4JamsUU7PB9LrTVDwpdJ9c4MauFUGwW1oQYCivVDpHBDJra",
  "key6": "2ztALH6NHneawEKRM4bVAxHqfAMRJw5X2KB8WLJaruTR7haCmxBarn79SpsQKQHTB8jm9MU69PuN33EjNwTNCwQz",
  "key7": "3VBgppupFpch1svjJvzgG6Aau2u6DdzBEgkxgQa6YD9zByR7oX6SUiA7EDMQZ7U48etpNqMvDPimLjw4nLQtDTsk",
  "key8": "3ouXpDGGUmdUsWk8gBVCJDVf8LSXeNipE1WXHeKyYdukaqRZpPtZsT75wLmfhbDMk2xrCUPy11uhjR6AMVA9gKgV",
  "key9": "bpQY5u68bm1F7PWpejDvLj988cp86sqS65UocccAmxo9B4eaaXT1fGhL4KB7N1DQXSz2r5Ve4FcXswiHzvUHNtJ",
  "key10": "ABNZBjQRjLyUTxSDLoWnfjLGa7KAad5AnD8BaHZKLnVzbCfwbknKHrSjUNdTjbudHgqgtkqnaMiEdzFM44VELVF",
  "key11": "31Zx5tvspDZohWm2qKY3XsRkm5NtJDqpz4gkJBK1jg518N6SdPUrPjzbyqd1C3u2Urwt1mvAp5ZEZ57Zn9ZABR8g",
  "key12": "3WcX5YH3AbnVaSwwmvqs5DD6ApJ4U1v6kQ7ngSvBTCnadmCwnbJMVmM4PoHWW7RNgHQqKLikwh3nXLz2LrHFjTgG",
  "key13": "2hS1qzWLeaLeVg8r7wAwDphQpXSvJRrmbst1TcjjBVN1EDRwA7kjMDZFXgE82MFWq5s6vzcHhvaPh6swwdXVZEbP",
  "key14": "2fUUy8z88DM3LA5TZh7EGDf227x5bMay7q7MTpBechQPADahnt21HNyH51J3ZBFCraF7FaNbNtxteDbGG5KhMsRH",
  "key15": "UoeDiAXTG6G8gb95uYYqdgrd9nUkJGB7mtCh9gMy45niV5C9ceBEPWZBhxxXWdoPxiByDJSxYDAqyNqRcEYEot1",
  "key16": "3gbbkXv4zHUHzPwXztHPeRFGooZ24EfXXEAuS6tHCDFKaoK3AdZnc2nkVWdzvJqyPeBRB3GmkiHtKX4jEsdsmnoz",
  "key17": "2GEmieWoLm2SN5CH5qNyGn4df5EHdSJezX6adRxrpnuGdEWQtBq1osdNKVQ3eSYPm4ZnHA4ekDvRk5a71Loa5Zad",
  "key18": "22wp6SAWkhPdkjRtaKq7FKRx58uxYKLhteY7wgRZ2qNfn3EvHyMvPiJFGHAnQkgjRN1BVhCJcaihhtVNKpUfQaSN",
  "key19": "5rum5BFsDuYWbzYYCBXJdTTQwDAy8ZFUPsfBPmaxb7a3aEmuLb2p2teMqCknSkBwYoyV51g4XiG4CrWE7s1Zut7k",
  "key20": "61gCMbxYn5ttw8Yoc8yzbL32UepgSpxMANxUuDkEzj5a1Q3G2QLNHiDGD4dz5UoN7irFYumsQsgJZuoYHMd4Mjvz",
  "key21": "276rDcc9wiz2RejkU2EKTjACUJu2xHmfxKpnyMU2NQG8kghHq9X5pWMFWAjGcHUm4TSaveqDKccMwWde2VrJiE7m",
  "key22": "4EaarDbrDjcwYesMz3z7uDWTECzekrBgDLTQAwb4bm7ujmiaF3SrGuenphBHPAWRczErVLdXcX1i8jegjpFpNwCX",
  "key23": "2BD2Jsm6aoLkjX2hX9K8VK4zcA3kMJhvVX7DGp9euL6VY1stzu8ZMnsasFxtMGMvCSb4KBXBUs7tisnAjwJvLRmH",
  "key24": "24d9njkE3Usc6gsAbdYohnSMMQ9ACyX6MHLhwkNHRnnjAcvmq6d2yfxpHKWHaJTSzdFtWhRu88QpKBLnKVppNJ9f",
  "key25": "56HpxASQMrf8W3nSRHriiWrC2WxV7oidPhxfZn6Ki59aExRSh4WUsZsSL13nibAtQn9BTZUVMq5ibeEoPaR3c2AG",
  "key26": "rkopBo4M9JXqNKvzp29mVi1RFDpD4hw4czt3cub5pyT5HCvzDhK6pJfyoYFG5yxTCKMSShHGx4KMp9h2ubZY838",
  "key27": "27zNpjf2PmkuzgBk1G9Yp5Ph1HGXwqoeQbu9GjuWiSnMQVKrUWnRKHYSoZi7fzrdgcfZ4QMpseL47unmVGyJuEPv",
  "key28": "3RQZZJ51mQG8RW984TtQFW2uG55UMBxpaD2HmpNjeW8nde2g7LgTKsuLuzS99X8T4HDvvaXnbcL9CfMucuhLKK1m",
  "key29": "2TtDFGR7LFEdUmjnpfH9frATZcYSwD2uhDtiMpKqiCZTVsqHjVuGZTUgiZ9wu7pqVsuGgZjnNtLF8QKSTdM8oiw6",
  "key30": "2wi6DT29NYvXvwvnCoKhnYMAVba2oN8bUvjZLJQzTjHKqoryg46Bd71w5cshmsrEuM89cpExUKqdZMQ6Hr2TnrmH",
  "key31": "5vCacetF6pwDrtwQRRohZYZfFrpg2vhbfa5AKcPNhw5AY7DvJtYcs3ZZA58yLGtNkYoGdWupBp5E4jT9cAuefGLw"
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
