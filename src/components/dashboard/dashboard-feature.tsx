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
    "3jT2z3XepdRWvbzdRMQZ3e8bUiMqS5NBEQerownMCggkUffeocbz9uzZzBWqyfqhBayJTvUhnk5pewM2Peeopzy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56gmbDPSgauWjU7yDeKK4hNvzszjuQiXuPGNGP24soSLLDvsqDnKoTPBAwg6VG3qp2iFiN9zk2hhFkReg2qSVpEi",
  "key1": "2MDV1Kc6RwKRkFAEyQYxkv1xueyusEu5NVvEg6mkXJofgqrXeBjvEhbzY9ZJpKts1Zzy5sJatEu8pRKWk4aTqXdV",
  "key2": "5vcrvsLzGhf6cWEKEMDUCBmBzLYErTH9u6wyPMkUPbebMk2cnkGtbNWNZ6tjHoGWfFr6VG4yCd3pEdR7XVnuSayH",
  "key3": "3AQ16PyopotucvxDtHTiqQ2hXFvZzUoYLtpoJAQDZfc8nNewksSJd9Tcs65tfzqF67Cmr2kh9UVeLuahZFkiDzvs",
  "key4": "53pMbgkNHtb3ehRdakXNnaafXr6XoqiBULNV55iNqx3GS6M27BABGybHKdBdLbDx94tinYXZKq6Y72dH2JjVy8F8",
  "key5": "3rxScsrLxM8nCKXa7EKDhcL7TBh2YK6tj9rTU7bz8PwLgbDES6iAWnkok5WMG1dwVMoV7TRKVX1M4xa4dv44doHt",
  "key6": "3wmbqhuGuXn7SFXQXX32w5V7Mgdegzfsre3LsgsX39yEJ3tkYnW59C1skMpq8VzdYZQePNnVbkzyeJELPR4FZ4zR",
  "key7": "45ujjMoYLvRAYVSRpqWSUEMTvkdqqYd9nNaRzLuD1CP3TzwHjuh2bzASc66ksNcXndFQ3Rf5BwVH6kDPTvcmAELH",
  "key8": "5pw7PPDcwDV5e9jbYXCaPPem6wXbfFfcgeB3sY96urgyPofchYAtroFuSiaYA3WTYWbc9be2Seow3g4fifCCeWm3",
  "key9": "57dZxSxiUf4VyaW9S1HLURZU9jqxbhWwX1t76cbedM2jSoXq7zzym22m8vNGMcvk5Y6vs5LX9VrSxsKtgMFzm9LU",
  "key10": "5i6F62F2GsSUG9ezwG7229so34pYQJ4cB8jQqS92poo7VXGras4JuNQUogvq98Mz6QxrvhUnuBpQjr2vsh2ikTTu",
  "key11": "3N6CM1B3yXfkR4b4HpNPG2BVEoFKxQrNfZwyYzWU51UbypYFmxyRX7mSfz2XvmWu7cBHVySb49pFXrZgbPrH5W23",
  "key12": "rFrdvJWC8mPbv3e8VD5g2AA7D85EsXRJw814oUQRhJHMkSfq4WMY4sTxZVVs9JSkfFHeUmcTKMN1qUsRQmqGEoB",
  "key13": "2ktVUsxiuZWqiK8dMD2hJ8twPU8vqHN8ZV319DAD1Y1Aikpj1teWzE7XpBUfQLwNwQKTK95XuWhWXE9LHCHHULPS",
  "key14": "5FD2M3xqvKwBpwRv8sbJYL8cibNo43QYVEdiqMyvKhEWzAMyxvfp5GheX6sRoeMVdTGAa9wxRmXHhfCYsujBveEV",
  "key15": "5wnKzeh4xuo1TK8FevFu7yU1ixf84YVjp5VF62ZNUjoTLhnfNFNoDMYbnfHE6CXyHBgY9NZyuTb2jxMyCR2GWNAQ",
  "key16": "Jnfc7A3LttAzTbHK7k9x7vVJ2n7qaRkE6de8ybHQ8d7YwCTBpy3usVKNF2oL9EkLp3w11P1WEvWPr2a8PTiFfYP",
  "key17": "23WkA6GtNmEyUCrGgKMNrDf95dUgCUvPhhJFkVYPTr5TTqNrihNWVrtWP9sWdAiM3iuDoVj4btKFWbJTRt2cR6TW",
  "key18": "47GsaCab2S6cbtD8jXynYUez5QDKAX2MCniYux4TW6Fcdj9QCAKJDHKEBa5G9bwRmuT84pS9i78eJfW9CCxxnSLS",
  "key19": "65qZGjodofAH5tytJp459dFD6Cqy95jRYptVYgTXA7HVw26KAZnSHAN6GyK3FT53Kcicv1nXGokg1tabyQMjMgLq",
  "key20": "4TwZE8SUrNFqqucgPdQDkDK3m3mUD69bZ2wge8QZhnbyBRQwR3ewFpf3gFYXqbQodK9kZztvACZdb3thuqKK7HhK",
  "key21": "41YotyPhL3vRag456QS35GKtG6nYbViGNvwHQirfmTUDFXpi1MR5FQjMWV3Q7grFcpLFnmKg3KtPic1PYg61tbWy",
  "key22": "SYf9onV9DRmNA2tozwMyiJr8JbDR7EBHUwLtRX1afDd6SvXH2Wt6A315uEu7HDYiZmj74KncH7zJFEaBGiTfrLv",
  "key23": "dPPLGxa5dmDdNb5aVttTdtBrASjSuYBjzZPB7m4LtVNhDf7bNL1Yz1o9u1P8Txy2iRTxDApBLKEsakK2niPwKip",
  "key24": "2kWmdg9Gcnuv2DHscHiCygSFcrLHMpcTg6TJsPAEP6uVnFfT6c4egcZa3mAgGZog6QmkKpZtKfnxda47XbtXByWz",
  "key25": "2LdnpXbe1yd3iHoRigEbymRQeS4bKppEEQsEZ8FCYPd35avFvBGvw9ae4MQAeLosarDiWvVnDYRu4C5i32TJ9arJ",
  "key26": "3A8uBhRUggQU1xL1zeV8pKRMicKgQcs1r8sYRyKEH3mxTiSi1f6CkBmZvVDB8VBX6UdFXsdVLsNNg7Gf4iLGo6hg",
  "key27": "aVjgK5Lna45iqvtfkjtcijzfmKq53JJmsfgiheTasCBRYwcK7gj8gQjpLCPt8bcjxok2fdFsQbgLRAypEnTG2i5",
  "key28": "586oc79E83MZh6CYzgv9K9PMT8La2q4bX299q1pjHDeGpbTpaCaudE2r2fiqEjjSXELrZvXhERUG1ZfJbiuijUUR",
  "key29": "2aYynnysrjpHFnzP9Pe1TFch9Za98we4y1w7PgTy8fHKzTiJMBtGmTnFdFL6Wij2KgWgExqW6rJrVejEcfUMhdyn",
  "key30": "2HWqmmApZd3yMVc4aNzh2h9ZhM7sJZ5Zu1vhxieGZkY2Rkmn14ZDKdRpzWzQkhcSdddAVgEmDJRoaUDND16nwWgU",
  "key31": "LNHsLsUc87WjZu8q22cuwEAkAD5D7P1UFpueiCN8WK1ZT7MVTV5FhwHZYdZ2VbsSrWeDtFucYDdKxRKHBriYneF",
  "key32": "9EfNWbKLaNutzLaj1oqMkVLUjC4QnHhDA8PwHNgWzMRsMi9uDs1VENQ6gLPE81BzLtD7go4JEDkbvViSNgMWXDf",
  "key33": "3BBozF1fXN69VZL9GGdoSmUeuU4VWqQpGeJvXKpfhJc67xcsLCFjNYqiuSjcDtzcrQCHZuCoAhfnHHryazNjBAb7",
  "key34": "pdxaBKwn8M93jRtRVqEotB8t1wc3qeZcUYT8n2XTJSZcon1aSDt9JpfRFCkZbqM39kbcXq9ZVHVMUv8162vXVNn",
  "key35": "2gYksQg72mKMr5Nn2StreuR1W2E1DYwh9BWFQG6AZRc88FKm8mEVoZUUeuf76M8obVzgsxcDksChf8CyTaNyzLsw",
  "key36": "3CmdbSY7XTf7cYHRtDDp43erk9eWdBqsWDkaPdot9W3dAFbQptTPTJGw5XEwfi1bxYg3d23W4MnBLhV9Z5ecyja1",
  "key37": "3QEw4V1CXM9V8wVUpkHuDkWiGx4gA2u1CBPeQ7LQTLMLJWcGVfHQs1hwKR3fFFLoupPKkWxZdU97LoPQ6VAMdsJm",
  "key38": "4NSiQKMz1Bk2v1WfUxSFiUPhgyHkjvHcD63moUmx6nSqJpMUgBEJiEoYuXTY7FZGERnLetx16RCnv1Kgh8tmTUtV",
  "key39": "4M6vBVHMthDAwuwe5uzm6JArGWN5ZA1zdV2mxKV7aX9JPjKnxuZ6bs1cJ9H6GGKWXt4xjxbYHPDWJ1Ch1g4Hhhwz",
  "key40": "3QryuBP1FmXPTiTi1GSmVZydtx8MszGebmKijEe24KyRKKKuBi15fwGvRH3krSP1uFJtAyGuegmjPYf1ocdSHeg4",
  "key41": "3dZ2QuQhUJG7WjZfVm4wiiKb4ZBsjK9HF5QRuK3t1zXJui1xecErdxC999Ey18CUGQLVbM7iGfqtMrnHEvkC3MNw",
  "key42": "n4urLUXd82wHbZi7zSxuEfrrLv1VUVwfwUTPjLLsfpb1tWCV5rbFF9ksJLMNwFSezYPhaHrN7L8tkz1kLRUdFss",
  "key43": "5Zevv7spnPvpmy9yV7RiLoZyVY1QpNueCu6LB1NWXf2JQTHWWDHi3veDD6V5Q3r9RpZ2EFi8yoNhr2xqTcvRnqv7"
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
