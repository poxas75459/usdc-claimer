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
    "5NLbRuFzf8HyjDCeGMFSFCMpU3VBHNvyvKmfi2Qas2FzkTJ4xmr3tUXh4NQcvJscMzJbFyUHrBxK1g7rsXtr1u5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSHo5ADAeLwVBcrdYfpAfNTkPdFBCoBw8hE8ZaLWviMwqUYBX1nVQcvR5qRBavYRvcPvidT3wUbkMCiBDA1aQGC",
  "key1": "4K1Xp8jdgjuZkWi8vYE6X99ui2bky8HLUB2yVfrZayWLcbdvFhUXthnZkFYzDwVkcrWa6ir7u5LXNcTfd2NK5DEP",
  "key2": "4tWXvmMuNwFc1fkdZsbsnA8KZXeoXgXQH5AnPsBtM4ofvir6n1SKqW2ySruapMd9f8reUNeL66bhUa4PgHd1ZyMQ",
  "key3": "5gypYFbojUQSxgjDMJHueRt7wLHBL4cHKFTvKogLeS3HkUAGmaoACHA4N5BxqtLabVHf6ePW98VYFcaPVJJnvYXw",
  "key4": "3XrrhmfCcBYadpskduG1ddh5WcPLKMbwnWM1T4ygkCW5zRcFok3aJwagVgDR4dsUDbANRufeHTtXE3AVySGXDGKC",
  "key5": "jeAPQvMWRkitMtuy4LVznXfMa15ykrYzShW9DQuuewdnPWeyuTRgoLK9XmcY3nKojvewUsCuzyA5uTD1QJ7Qh2u",
  "key6": "4wakeyWoRSbSL2Zmw3nD8Bd5fcXQB5fAWnkbDs7XiVHNWQxcHPkyiY6adnpZgPe4CPmALQfA6CcNLaCD98jd3KYy",
  "key7": "4rN6Ri8QncAYqoKdJriJFxqL4dBuKGqXE9nhtfzdvqwaD7X2p1mrUNUY8qeNNR8rwAZjxMACYJkmkcuRsuQULd6g",
  "key8": "4vrjLcxWfhURs5WfWUH9y5ABSszisy6irfpasujsMcaa4AUvfwHDigadbvjhDwhW8XHYxXvRt1mn1J77JPE1bRP4",
  "key9": "4PtEb7k9dEJdAbqNv2ayJ43FjQmbcPTooskDTan2sF2UYmDV8QQKSJSWjAFrtwTrQKwvuTjTm7WUYAGF95uE2hqq",
  "key10": "4yY4zQvpR7BDdHndgArteAeq8frP7roZ98DR7nNBgbXRmBSMr7DtTW1qKos1RuP4HgGBLfmDp4U5NLXNdCriLnZx",
  "key11": "bjFSkvrg6HATEcTJithZdRkoZux5WUZKA5Fiuj9iGTp7sdd2oApC16BvkTZavqZLk4pyiQBEbKiBuibWEkaoMV7",
  "key12": "5Gpf3qUmWqQAyeEV1i8RPtZx7AQn1scwVT2H62rSmTzuhM33tVVyJE14NdyuaqUkEYojgAEZjmqHfGy8ikRGe18c",
  "key13": "sq6uY6N5ZQAQ9uacxp47QuPzuWuQifudFmPS4ydoCDXaeq4PhhQhaCmkgLFe7VpVJGQKBkBzYbrz2kvRaLbkJAG",
  "key14": "55xkmTcdTMKXhV5sF2TDfcbZJ6SPPTwmS4ZNy3XZjmucuSwjSgBbd8co86K5NFg5r8pPstzvhuHMsgb62FLLfxgb",
  "key15": "5aFtY2WPfXYYcmcLtXHSWo8XsbAJizh3itaFATCvQf7G8a9uxNSDbS5VCd34XRXMGKEgTHp7FMq9xae29BMVjua6",
  "key16": "4TUZ2kCxdr7Y3yxcqzo6bBXwkH4NJvgAbAkCq6iu2wzkcKzFEq4gG48ibUkujMCX2M5tmkeeeS3orxFoo4Tg2FC3",
  "key17": "3hFd7gvFmDUyK8hFLN9nRVUFzsw5C1hZqcMemTeG92DYUUsWKdYAhx9LkyoEpMznMP8wrDhDGW6VWK5vKViFpTSD",
  "key18": "34dy2LWBwYnAqU132zMpMFawNRULLrsVm7BDvGbmdPzwnqiTMaBuDBRFMB38YHoQuHqSqTGJ2pH2KrXzBgLv4Fno",
  "key19": "3JQzBteNpAqXCuGccyxy7spoofZpcP4uN1CuW6Lu8RVUZhWPQhtQkTJP3ZD6Db6RpZiU69sFYC6FTLR31rVS9eB3",
  "key20": "66PmhiUccW97r6t9vRcSnMnWhuWDCqUkQiT6YE1rMgURXESFbJ1MW58me7UiRvv1SC4gHAyH5PZaGuMwEBCJAozM",
  "key21": "5QSuqvubKSQsgKKir9DFqtvKECT3vHren6wBqiXr8MvFjmPVL8k2wVFXmbpYQZKhTcqLm2n3PdWBExwUonyrb3sy",
  "key22": "DQgAoyFA7DwfiM4qHwcjxbzamrp4V9KxjkDoJ43HXBZGuqLNfx71A4AhdhDr1tXhg1FCxtfW73DuHWRUxcT2dxm",
  "key23": "46yFRADPkGUo1bkkJvD6HTkc2xprGNsda8SLhBdUY94uibkSJbDefpFP9EAJL3pB46WHjxWwh7hS1yyYKo9FJ6yt",
  "key24": "56FNVg12Rw4c41adpSeHhnuSqcPAH9xQuscp18vB6MRxxmpd5BcooHqC7Gg9PH2JqZYi1GnPHjHqmfb7dthLY3yc",
  "key25": "6S83jNai89QLZyoHwTe5ayKvMFfGHFez2tDGXaVJFKH5zBArumQ3Dvzkv29YMRwyrREHq2NgKLBtchKQhrXJ8fM",
  "key26": "4TPtMwhJgoCsHLYLLUcuqovxinjcqpD17P9n41jN7YZYkGVSELxFYjuVay1zyoM9w13oUvhyyXeTdaep7ABGNDDM",
  "key27": "67KTuTJSxjYiXKkwp43k7QDApxZoA3VzsawxCniMDFBVBKDrq7EAD3b2tnK3mPAtiKKVkpLq9suBDrWVtgNzvknx",
  "key28": "4jXEzLUQ1CWhrKPyRPNADGoZLpwvVfLm2vQJnVnPjXPsCtTjdyQ5xzxL47R9CydcHUihmu9q3rKLE6bjxhQ4UfTH",
  "key29": "47oYqB5hfR7R4nVUmJpt2AMwUbUBB2n9itT4jdmaGHEoSRJ9TQkGMJB1oeNkxszbky7DZ471uwDjZCZZdWpGG4e1",
  "key30": "62QVxMku2vDz13SjGQMXHTgtxYqShkpKm4x1HkfLTYVvJmeLnF8Usimof263og4HqYgEfK3knGy3Rrvn2bYvKePz",
  "key31": "5177iQMZXoWfHxGztjrrv5ctxSMuZujtdp4kwFqNoww656VjJg2pyi4raxEERUC6Fy12Tumy5PssgiZ7RhGzcr3X",
  "key32": "4L6cZKHfpa2yHXf1QroxVp1b3YuwR1hbcXGqXNCioLwdz1E9AoHd8TdAt9HysmMV3owPoGnkE1iB6aZdgtjLFTEX",
  "key33": "41NZjfacYTwdbSZi9x7khLD6bcEaxT6LheTnu6GkNDSVtBqo3v65fVvWmjYEgJMsTGHiStU3sXrpNkFfY2HdZg8h",
  "key34": "46fnuind3DppA2hNWmdBLYSr85fiq4tYZfxstcGmHTryDzYRbWVMTadmSCRRfwE2MsSch3K6tLGZvXdoYuatNjz5",
  "key35": "4stLDwGhspeiQxKAKmDhQEVALKMYmk5dbXT2oDwpJXRLg55GZhPKWm6G8yP6yrRnqTfhpcoxyAsVVLFe6PghdJ5B"
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
