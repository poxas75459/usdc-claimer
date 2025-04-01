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
    "5uZ5b8aHLUoH9BBhaCzEb8vTHrFyihfLMkKLC22Nm6VnfwaHbHNsczdgeresgq89tFBF3PomfEpJjNvxMtCee9QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7zwZTRPmNGqAxrgmKi18PE3KVjAQpDvNKvdZir4G9U7RZE3nHPPRUr73myAdSkFc2CwSN9NXf2UgPPQxg9eaxt",
  "key1": "3ECDJBY3QQvQX2YynxWeu4ncg4SHVs92JBdb29jHd4yZKe5CBoG2caqvkHKdxVxujeuvR9z6L9B1qv8vV9Ywj1No",
  "key2": "G9uB8f2Ue8eGS6ix33ULwrKstWH7JzFFYGzcyCSEFfPy2Uh7Y4jDMXvs1fzRtSFjW8oHPCvswkZ361PmQtsFPe1",
  "key3": "3NNs9i3AR6x4DyeqtctoFmNM98QHVgTshC36mrxjTiDa5pAwMwvcg9ppnjSZzfxPYvujhFbA7EKXd9QyUJBZXp6y",
  "key4": "64m936iDajCu2CzMq3NWFRJFJnpirmE3pRpKzkpUt3VD1EunDqxvzgWP81kyPNCRRRjmPTD5Da2LWAXueubY1xhV",
  "key5": "2LXcP1Ye6iCmUdryBBnxPAjKVgJHtAJQ1LNUQTsZtxbDdERZA3RaiBgihM9XBRjXgFLnwHC2CPHK3hvcsGBkTVow",
  "key6": "gGDMnWjk3Q8bnzuJmc8mdoZxGkppS8VwXh5TFN9dwSceNMd5EPuZgpLyhQrTvJMhagu2nCZoQk7K9dFcDYZjzZ9",
  "key7": "2WaW43fyFiFaxSYEAWo4c26N37LjMvkhuodUgToNc5GbNy7Nj5zxHtNUCJDvAsyyH34fzDYzHsQdMbCaVR262ykz",
  "key8": "53ux7Uvc1txYnt77pGkVEHQhuzxxc1zazToVooqD2m3p1M6yqJBMbBDEHe7Ue165QnTNi6fWirBh6cJoJ2qgSwaT",
  "key9": "4mUwoYSPmL1YoPyRpc9ZUefESd6J57A6isD85vYsRUaygnNhi3uEyusPgdfwMtHEdxUgyh3ZD1Uw19oSeknTmL6j",
  "key10": "66cJ1WLpNYP628nidopQSwhYiTZVKYxEb6gWCo33p13eW9qPptx9GFHw6T2s5ss8t7NzDBuMdM8ndK3oBhfPYF53",
  "key11": "2W19EwHE79PkHGfHTEaDhkiV62PDAkSqsQbNkPageeo3KnVryrdvn5ZUkTbQ7eXQCXV4kWzsUmNyrDRACAnuwgKe",
  "key12": "3Kdn7ictgVfGzFBCYxT5ya8p133UiQ28FRez2k94bjw8d86Pd385JY6i2EJ887YgSLhoiGb3cB7a1zk6C7MVTXFM",
  "key13": "8K8uPBFdN4QN8wFSCJVN2H8mRPRQeh1vVth1zWmgVUs2aCN51kSTvJJ2SGqBRBTtgXDBWdszkKyVUNrcHGaUuAw",
  "key14": "3rAxJxNrMNgr6Y4iTGtfg8Us1xHNKp9E7f2tJmPKdwU1p7B4CNKFkhWYBrp77pC4Ug6Uh2vUo3UcUSKDGzAEuN7n",
  "key15": "56jcBT3g2xKjcXw5Y3peJBvLz4t2ioJ5joLjdbaDXEbe5Ff4ToLTG7eetzEhZBXktnXxhePChGoXJxdkcQrAEzhZ",
  "key16": "66uvomQLBFb4gZDkW366CeXGp1Z8YHGhWG6Gh6WkF3CH8xvcbuLdk31kjhgBoCghZr8r1BNp1rSSjXpvJzHcKFCx",
  "key17": "4sAL7p8iuAjGRCRb5pe5UESBtnks7dWsDef7TZxasJdkiydCM5WjKeqfbVKSJ7Jvzv5iHYWfdkYEQWhjaoBCtyLm",
  "key18": "5vgYp2Db6XzDenp657sWMwNUb7UVcTHPL3APxtrpj9b8N3dLtbVBPE6AjRPnJLhh2oxaUxyPcnqDtHov1Mwvqh8E",
  "key19": "3uk2vdfW4H1SJw7SJECDgBtQmQNS8nWB9TcqzHMgnmahZ4iZJL7XFcpA2BSGYc7XsWNSccL9z4DheGcDcVLHhqxG",
  "key20": "ore7FKL58eZhSsaCjhZewNjDScDk4f3xNkUN7FPxnNadQTZ5A3mGK19ZbpNeFUwbAcSkKuwiWCjd4WSXonmtucT",
  "key21": "3ivp5V78EhPDgqhMFh7gt7EXjxJmnaYfejcKZggqZNHjF1emMagAT5eXK34Twe6v4cF7VUxM3L8tajhGVdA6Hq1n",
  "key22": "49zhoJ15funry4ntXaEwP2iuuNxSLX9fX1cPaUejmV4utXXK3vytKAmKgzkkrsJA2SrS3kDRjoXpYnrxj1S1LGfM",
  "key23": "5KR7b5oyFYaJNySqtt6ouwE6htvvQBZ3HaCacr2y2oAZ1dmxtYLouAyyZfq91rVNbkxbqKbd4mHNYqEkVma8CBnZ",
  "key24": "3BSS6h5vv8inFJkar3ioATp9raH8SXXKUx8dXgyEdvyzJ96VXSopQJkCxEgLMRT3jthhmy4EykgRoonCHsCor8c2",
  "key25": "5mJysu9FCyRdkuxHJ6MGCGJVrzXGWgYnyvGYRxtz4RdDKNdzyn7Hc37APUqmnGhKVh6pJTQV4eoHzAQSPUqiPQpK",
  "key26": "5cMWPfuVSbZNj12nt1jKyPAGJjXuZw7d1YCdEeE3mDx7h4mysDHw7FqkBCcfWLMYns12VPZi1YqEi7R5EKpSXuXY",
  "key27": "2nU3bgdVL9DJNavL5UeW4bxFmjSyf9twUirna7jYoSfNfMR1XKr8PZxYwQDcZtRiZFsSBcNL5rU5414T34Yxb6kt",
  "key28": "4Yt2BAHx3RRgYenEkTS3P5NWqVLmnmPGfwb8jHVDfmwVNsMgzMpKaF6Y9cWwspoLzbR4HtdPhVrVnKCdZK83ehgz",
  "key29": "5Ddh1Qj9TZc8fzFWJh2wmGnDVbQ6xJpPj6z978iFLjv2n6o9yDFu92jQsLyfntueipyHptFfX3Rh9yX5p4t7o1Uy"
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
