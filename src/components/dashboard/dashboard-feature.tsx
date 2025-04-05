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
    "5p58kobEj1ngEZuCQepRnTFsM7b3uuYCGXJ41gftGFvzFhM6ScyBK5oLQPp1jokJXf698Q6kpu3ZwNSBWSHXqEHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oEg4BNoyRbhqpVKnLXVRgNeHNk3nkg7GNtbJ436xtN6aRdWwWVSmgzd2RUFA2mSVWFegeNLGYaYSLWmHSfbEipe",
  "key1": "3ssiLXGP9HmMettjS984jrchbPaTRCqFmikAAeLrFQvEMs16zdSaEqwiZL7x6t2C2n7n8jBXBrN9strLe2zJNRKs",
  "key2": "3VPSfh24XtS3xmiMPCZimXPanH9f2Qf1hxgvpn4f2FkCXUJCSo8x2EjzXSBUJoAjBrXtd2jMbMmejBzFVBb3AZVh",
  "key3": "35Wdz3Hv6oGTr4nuBwTMZ1TdCZGw9SwSN6BREjbiL2RQkXwdi8tWYG13LuEgQDECSPzJKwjN9iuTiB3982ChR8aY",
  "key4": "4yukRjkhrdo7zVG1LzAd7vZHAQoS4fdP6WJqTdMrnUwBHR9Fc5M11FAGaPdVkfVqhCe1AyQCTY3Ud9bfbTuMFXZ1",
  "key5": "4LEoABsYByFNfD8HPaUzp9dhSikpkkTqaN9rpGcUboo12j2DHA42DGo9BnNoiz99Jh9T8kfaVidLAYA557TRDuNa",
  "key6": "34fQKDzA6VTk4neyWKQ9Pbb8RnfMV4Jd2GqKYyjTdDKs5wVTepMwAbKnC6uK1UFdZptW5JG5mjYMuvnWMGowRAMc",
  "key7": "4mzzsFAb9Ve2EsV218eiT2ZHRVkL3vrQwij711L23KcZ2eGzm8PZdjUD7GfaftSS3Cq9GcTYXfCkrU9WNZqRbWAG",
  "key8": "eFQL7sakuDSCQUjZ33wJoHuwaZNXVx1M81nDN3d8CS1BzLkSMmqXoZkFiGj9nc5bdsEYG3AtCdaiYFqD8mDnn3F",
  "key9": "3kRDcH1zqQN6Q1ZPGuvcNs2ofkSQomo5XquJ2wHZfTcT9u3VMDi4TRxSEdMwJZVVdtf2Pzsy1wrdv9p4nUVCKPDW",
  "key10": "4Tk4WGP1pRfnmLbtZBZwFGvBYngWQa3453totM2AzQYqScTvuUAfkKE3QgGiRvRx5umcrcNHPWsWJLTtw61WUysu",
  "key11": "Hrk99hBSACtgp5vJ6RfcNmJc2NWstf27ex1wHGtNbWCwL3r8Xt82z8DAV1FPMx1GdAKs44LuPGdfn5odSMFFCo8",
  "key12": "23srkkdqwF4s8YmN2aSBjsaktNPKakCZt6zBruoosS6g1gUKWdXtRo129sCCLpGfz57qNuvM165tc3cUAT46KoiT",
  "key13": "4HZUZrgPHAWX4KUK4hqgnccqE5e3JqXbfewazfeMEVr7QbJx1gzZLoz4FfihPDUJMyNv6JWa41NUeYK42ic5QkMe",
  "key14": "3nhehtuXJ6YwH23kGPPFYmLx6vqQU6qdg4MrducYPpoq3hYeLc4ggjqy7GBd6RX4PDSewAnEpdjBBsuoS9kXxWgY",
  "key15": "5LH1bg61ABneuV4ZjtjpEQMgqL8t4JXDiU8JqxBMmuzLTsV9SrHuSmk1g8QfhF8d9ZTVYeFDyZsj2ZyPiPt6xwek",
  "key16": "5zoryV3rQXqhSkQEQotXy7oGp6yqPX7j4n2Wfh5HR4hWBwmGvNkh8qCG96VEk6KLoNHaWZ1zdeHmijBrEcWVhZQj",
  "key17": "32UEHh4VpYyujAu9cUssMpauXCB1QvYUpgwY5aeL8dxgcrWDLNYnuK5YnasDRQh9Z6zNcL5mSzKxrrxAbovRddYj",
  "key18": "5R5jv3hd324e1h15Unnosxd5mkG9gVejfYa8PgHqcBGLW74fDaDvQrG9SH6tGKgZiAh23WTyLegMStzWmA67D64j",
  "key19": "9HZoosW7spV6SjsUEVTi4U17wsrsas2qvoZsQkkFKp6XUoeTFkLtb1edBXgEG8maJ4t5K7tUKEqZP6rqzF9zwAc",
  "key20": "5YudwpS6izvscrCAGHce73tPfWgkvucAnEQtND9tdRibW7nz6avdZ5zoC3CHRcecYbMgLXL1z6Wj23J1YWG8MNtR",
  "key21": "3zVdpCUX3MLE13WGK1dAWnw6zgyMb3Jm2wLpiFwAYqYZbPSamujKdMrGykFPdhb9Nz6uHUXEtXQLprnrWxrGkqPj",
  "key22": "5uuwjYq7KV3kSaQ6C1e71qxYLL3GzaLcCHC3a44btei3EexBpY6cmXuAbhWWvJroDymSTB3e7GfQreuFN8RfuxQt",
  "key23": "4c1rVneLxcd6N8cg6VLgZg4hVkNs81tL9A7NjdhWUVxAN1WiT9im2H24hocHxLrL9dpPWxkxFyPMZALfgJe389co",
  "key24": "5hRq5dfk2yAjTKPAAwAjGJwNPwufJY1G3r2TBkdNUXP5iAwYUDPJ2MgmwGeTJSbfNwRn5PajqEz3rFkF85XKhU8M",
  "key25": "3wqNHwq72CTEizzW2oJvg3WACgNrabXaUigb9QjBKJt4w7io311xZybbEZY5AvMVMURKMb9gDkwAudB29v8jpkgQ",
  "key26": "56ZKz713vwr1N7yYQpfKZBeu6RXmjeBqcH1zqzrvvFz3XFHvPYChSvfoXTEZiTaoy1n4RC9QHKqvUwmFqySciFCr",
  "key27": "3HkujgWvVnqp9ay8mCB8Hkq97v3uyMssTuMZU3rYNqDPB3gb4x2M2aCzfdMCyfBd4WqLTYgcKA37wsiizukgXk3n",
  "key28": "4iYZRqEkiUQcZmwXBPbbLH2VEk6mNMW2uNuRY1YJ1nnJcXzf53HUY6RpCndDykw1i25Ld4ez3qrw5ry61EqjsbTe",
  "key29": "2sVoJjmA99AzD3FLhLhQ3fWqHYB8TMPZpqWk7r2x5ETHtQdrAwUBLtGDEYnDUvvYaCW1iREmrgdjHnA3pRkioU3Z",
  "key30": "4cDTe2FKSc5UT1dj4hdLQY1cfJPi8E4B8H6XS9YiQSoge8iiDk6CkBMCxXVXXKVivo8KiqebQexAK4GZfabCjX6k",
  "key31": "5m3LpLH3ofQ18wNJYYKqaxtojFYPLJtDHoWMMFpGR8qFwWHhn3sXL8VXEtMmz5WrnfN6eYwU6SytJEinPguPGNT5",
  "key32": "UAtnJGwY7WvFj2Kg9hzskxe7eYqorK7nzq1rjDv42BqT7MPk4usRzrAhMyUTyF91DJPXBU6h95WuUuiQp4pZmvj",
  "key33": "2UT69hENaCLFcESmoDMmxwr7yLUMDQvtboUwjZJPoi7sVgvJmgbRA4G1tbU9gPz8uqZM3YiRqBpxbrVh66MuU1zU",
  "key34": "3zb9UT2Unbm5TkrVpXkNVKJbpopLpcjtcYyv79tujsr2F3gLFpRPHshnnJXNKzFqBik34xRQGJJBRhEfmntpt5AE",
  "key35": "2Q1W2pZupGUh1tvtNVjL7Vp8MQ47WbPaqPhvw76m67Y7Q2Yh5MJ8GsfrvVccv16EcikEeZhC2osfzksnHnRheE1p",
  "key36": "3cJAN7fQRQeLUgvdsron9tnDjnm4Q5ozZkvE6LAZ7yEtNSg7Ecutw99qpKodP52mjZqoNsAxhwoe5Kz5XtqkGq39",
  "key37": "5GaaZKmfLqFTYqB29LWNaco2JVPTLDUEL8C7kWJuwtYdtVmLwm58nAYwSf4KLopKxGTFNmKipzoHcQHKwP8nTZeV",
  "key38": "5kcPNJMELL5YK7DvUfjHjhSvSNa1PrxofHs1oLyqQNYxa4gfkiM5rTtn2VhaSWPR8EWABmULWuMrqWn6k5DPQJxD",
  "key39": "3ZhA3QcXXxoYRGgyviRoZbjqQkhYxQoceCiDiKiAQG5EUAtupYZFw9YbU2jks3bD5agaHtVAdkJpb1Fv9ZS6fRmh",
  "key40": "4f86xnWnYMHHZR9GcXf6jeZ5SpXBiExVX3ch3v3Y9RHGuh5qxfrrP565C3YJBogucafnrBm71wgCt2UupSqpBhSe",
  "key41": "CY1vKaut7LWfJ3q49D2nSQ6tfnuB3ajJ4xLexGsxbw6YL3JxADhEmnZ3xpFnHXd7443CqvNWmfEema6YQ8g1xLm",
  "key42": "3P4ZdzjHRnUWSjsXU6xvPaWYM14zngmCBPBAYdc1UEscQZVAcJkxp9eAdPE9Xiom5JfdtqKp1TQBpvKyVQq291Xq",
  "key43": "oKLpT5zjPYt5cuyaNfYbUA857L4Vesgujon9ubow2mnGuStmn5NEToMmcyRM4P754txPvGNdQC3c46Qxeknuh1H"
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
