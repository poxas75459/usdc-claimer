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
    "2bqehAfotqqFTrUmrXeZjY5aveg9NtGpW3XL5kmk4ZEPmqEQWdsxbVPZ13CEgdkfNzBrLwHKJiUCZHm3J54mpstS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ci5qad5zUyQv2RuKvLPY7XtcFxf9XQJammneGD9zmF7uMHfYLHVT8mTxWanT9UnVub1qE2dgMjmKPm3hV6BZ4dp",
  "key1": "5iLZcREHUbHQX89QudG1aU4CgndzCgnKaGuE1bitj7MqTv1ff16zgC8WMBV36VobwWyZVzb3GmrzpX376WLYdMRe",
  "key2": "jaTNQGJ95Kyw27yApLtV5aCgYo7Q4YB7CX58HhE8wFn6WJWqHuJi7Y8seoyp6cAUB1m84tgCWbZDnFRVmbpEWDs",
  "key3": "4ooKxX6f1BSQtvxSHU2snb4Dc1bQBDedzekJrFPBzLs62oDGrDZZiDZpf6MYx8c8D5gno1BHKwQPfDbBKAW3T8fC",
  "key4": "52A2KwgiBABjs2irsozQxHjzk8W1yvUFvTHFk38GSuUe4bYeybJVqto4gvxhNfdYyADc3XkbhD2cerkicHUkT2cf",
  "key5": "3EDtqbyRmPyYkX1Qt48zCy1pAm3UbmnuQgd4Z3XTRFbinn3hXzViofhaFoqF1hJZxYThFGSgz9PoxY2wC566wLJr",
  "key6": "qtLaZecyuxLnzS5mQH9QQakaRykzLy29AfPHgAxBB7jyEtxUyWjhH32H6WRXEJL2v4mPQxL5RUbgW9yyVLjHJf5",
  "key7": "2mQ1akWrKp4KT6A5bNswGKqyCJY8BDLG8ksQgpx6JXSxedcZy9ZDhT7NjnF63aSqbrQ7xkshuufj8sAMwirBqa5C",
  "key8": "44aDsLvmbswDEztasdE9hkxmyc9mQnKsk4nwG8QZus4ceCiXj8K2BjUNVA4duRnRHVriX6QFYcQwgpQpB9YMoP6B",
  "key9": "3uHUrmnfT6rdk8vehzqSThA4macqYKBwAVQPueGV58Jjtr2qpFSfLQKVB2Mduh445YUQjcPy4JCpj5D9V5D9zH19",
  "key10": "4mEaHa91r2ubvNwx2oRxCwKrhBD2bnUxvyscGDPBdZ8jEgpXPeBtk7fmSLixqXsqDGXtqaRtoiQXrCnaocWmjCi6",
  "key11": "vEoktfz8BKeBbn4yumzi5oCHF8WaxkgELbFfcMt27j3m4jHCE8G8dD9BusUzf3H7c4zJzaGhUMerFyDARH5UCiG",
  "key12": "ZycvgDSLZ6XK9jWuEzKxzABBrjffU882K4jqH6virPw33SfS9NAd7NXmvHPVagEyBNhZjQbAnACg1GEzaZqVYJj",
  "key13": "FC5HGxWzH2spCf4qx3Paygh47QEH98Sp2PX45PP6zktbbRUeGgr9GNuf2yRtBhWR1WSVrcqvtTYyxpKpFWqjdA8",
  "key14": "Lwvq7Zdt9w39n2xqdVBxrDfE3nFp2UY1dcL4dRmd5U8NagBDWbnQt2N9h5ZV74opGLxNx6SwB8CeBRBGLwHynea",
  "key15": "2PPcuQbmCHQhgzFTMmh5b9T6MCqC53BoinHfyzBbdkYfCFB8Yv3s3S3gMAztHaMWjKeMvvTdgFmN4win1x8asHXC",
  "key16": "4nvvW8soWUUeozSjE95fdp2hi5Zs265cZDmauFTQeyvKo5wjmcaLPQK2E2knthHwCYkZQryKu9JbsCuMV2LwdrPG",
  "key17": "59fkh5v6UgeoPz63XmZ9a9DfRnEvFSZEeXJebv5KJWZHswGNW8YCJwnWrTyAveDBhZd3FJS8gCnD7Y1G6Ctf3GhG",
  "key18": "2y1RkT47vD5tExP2QnrsT36ZBsQHMvmrLqVSVFSCE7To3tRjBcVVjP5tDexngeDoBEKQCVwKhZ9bfHd3dLXuRRBy",
  "key19": "27DGnNQvb53FJ1mK8KDNKSFFHb6UL9wQCkUvBnU5w8oaLbAHBhAd47XcB2bKZoa9R2BR58kVLSALrwpY4p9E5uxx",
  "key20": "2acDmxTp7ZZ9GicJ8t8UEJ4soDXsGTRuX1ndgbdjVLBmnFEwixNCEBuqUamXCsTZqQfMe8p3KR9Lu7gtjpYA1qNB",
  "key21": "3Xc5EMqgyQRaSp4AEabEiyH2LieLJRqF4nDZZF18LyPbLLdM9nfbLTFpQwiwD7w7BUWUKbb1y3kcUBqb3s2Kq14K",
  "key22": "4vHTnVSBgYMDXKhT6FJPSS5UNTxNxoMt7EmhUwExYQsNSshNYdfzpDpZnP4yYHev6zAjipNYQenTkPFQxwLgmgvK",
  "key23": "1rxPxhxmyHPMfTCQ6g1NbgJTbfJ4eGZpujgCHNTjziC72Fai9ejRZyhLxL8eYBXXyFMN2yXau6brqT3Veh8RRuX",
  "key24": "5nyCgGEy1kXMnvnMKq1VRq81WBj8faTZ6yhm5bTadmGngUVWgQWLNT8CxUFbRdFtp5msH8NR2XVtJpRf3Re55n3B",
  "key25": "5bKCfz2PcNLEbg1MCYDgp5X71TKWorMq1N5HLhjLKtSKP1sauCmEFWW8WYpKhPqHFaopLzD1zNyyiGQoUc8ZnDPR",
  "key26": "3krY27sEFhb5uAPh8B5ehpEMgmUwqH3JjQTsTnJCpEh3XYfkysCPejE7WjjKnBrm5MBXKbhedByp4fw2KEggMKAk",
  "key27": "2kvJ6hf6ycEj376dCjk2Ra1WLYPdN7f6Gd2da2gNkM1zY7pWzm8TEWyM9p9JPqBHGsGqShG5M8cm2aM3hGgC9bqM",
  "key28": "4qc4jCXasqVAuaLiVhzG3XHQGPUiZpjnHyvDorZMzecPa5e8mKYJmGTHzoz4nU9oUGme1WFrqHsXBtWYr93jsL72",
  "key29": "2gPgUAmNyWPa1Sgvxf2imT5W4vqTzVMGjQggUGBf2jjGUKvJjhHAtrYZTzzeu2XAebLt2DoCpLo2xnhqSskYSNXo",
  "key30": "51JtSjfgYfsqUJE11Qtg6jstWfgMqnMUgER7Z4roVxM9Fwq76Yi5ScZXipQHwV2b4Fzctt9QDNc1U8iRTEgw6CMM",
  "key31": "WqUtxVHSSkr8g3mabgbrheEJWGwKvc6TTZxD5ua2tfyaJnbrY8b2tvPLYaHHeZzMzMs62AQERKWrPAMQcgaVogJ",
  "key32": "3mHouaiedoaA6wat2NCg7c3H7WrDCRHnc958fUcmBRDMLmhthGPmaEyyQxYpffC3zNqscBMZSiVVqLSmYpzWP8x",
  "key33": "5uS62xus63PAK4GHqXjoVWDCvENoCZpuz7mmYG8EadkngsGdyvEF9WJjpe7TRM5hUq8tpjZKBcFzMFCDuPnWhLFK",
  "key34": "q7BoKc61y4ffDETLEtPdrjD8wEGiZdoYjrjNZfS26EeDR4rLjd7ZE5jhL8JetYRqfu4zAWUTL89QyGmHYEEPLGb",
  "key35": "2zPxHTCevrbe9r8fzLEzS1XvXWwRtpijhvAMjEqCrXTM13KmSccGifT9kuiMxnyD6TJb8Tv8Q2ePMtuyghtipDKW",
  "key36": "hyHDNTk1Wfy3bBmmVangSnP6mFzqGsgxygC61VsEnjwMiTApcVnX9mXv4DavZiJdQDM4LpEXtyjSDCC5wjjJwpx",
  "key37": "3qZVTrgBLjK6eeFuK8gEL4KXgK3fskxZ3Fy1uuvsz6b8YtUmHyeSNnWWo2GL4uYEKJN91f4334UXiJaEuBXz7cPA",
  "key38": "5UEtvL4Hw1vdnHXVB9xbw3Ewk6wfMmhu9fhxTUfguD6tMyT848tLYoHwtbt2Z7mkGqybmNumj2vDhiviZ4hjjp94"
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
