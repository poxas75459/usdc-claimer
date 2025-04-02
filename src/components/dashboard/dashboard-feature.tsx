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
    "63bS8WDKxpy7UDTTVKvUt4t9KfwxwGh3nhW8q453jrSx6hz1d53rNmWEa3G8nt2uJFK9B6sAUDdNp8Ps1HqciXJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oEQ4tJsAEdNN59eGmAHw3RZ1rsckSpmNzzYiM2DLZA5bVoyKCVg4JvXVryufvj9aFtmZzqmfvkraBtQ6JS3krpE",
  "key1": "29sCEgfXbhexW1FGrea31phQg6rRRS1iytovVb9xGDcVr2xawtCFhzC1iT9fpZFumLtRTXTzK3eyEtXFRUdX8hBW",
  "key2": "Vs5gbWGAn3VqwMLEDSmgRVcznVtsMt4utWX5KX1H83BUMVdgB1nQtf338M3fKyNksAbW1VGCyuNdXLyLx3fkhWj",
  "key3": "p5mKeaCKuBEMX4qaQG2SGpC2xpBXoSo8ZrCAxuVHbftb95AVF1v5v3tbA6bqbTqznQ6BmJnfuTHd9zffiw5qrcy",
  "key4": "2cX5hWu8vv3R89yEkCPbAGM6XWbSdtVETm8ByH2249yYVA9ViNdaU7xo3etbiSvXMbb1DibmRjhnhKcvcxNVqAeJ",
  "key5": "9dHat8kx7UoU57b8cKcmdkXFm16DLQyUvLc1xoSsKx1s8CdR8GmcPSUzV6XSaJsBxqVPsnpBPyvWSzk3E6X7fck",
  "key6": "3gizMsraWhiUXHvKw5WD2cdf9VhNyqDnZG1dYJnaKTQH23x8Diz9oTYDGKRj7o225xfgmuBjkj8sSpV3aQNx9wLQ",
  "key7": "5KwSLeNwsnGCjFHcWMM1gVkxQfWF24M3XqNDWB7MHsB27diPcDzzHomhfNzgKnYcvCrfDpKLHK5S1m35j8ayZ9Hu",
  "key8": "2VEkWnpEsHRfvCQC9LMqjS7guNmKvq1WYAxT8N9bsX2aHqyEFQSXD4GEm72CEdkUefCer5P2WKJecTcRNiJJnTYZ",
  "key9": "3sS2gZhsH16X6kEePruNDNsmph5km1gUWBYXSJGKM9No4aSBRWJurUtk8cR1faU4Kq8fZzr5EBzCsdqUdxwSQTLf",
  "key10": "3LhHY6uxQQXQgpFwv47thQHB484ddiUT6zCwfWBNK2DnToh7sk7XQAipkcU11K4STuaHhnHTUp67dk7zQRnwYLx",
  "key11": "4NxxdmDA2f2gAdNZ3GQ9m2vje4Bof1jYp5oJLqtwDT8bc75Xjv6acFFZgjYusXCzBJrUUFsQ3Qep8Ho8RmGcQMsG",
  "key12": "3smYrUQSTEmGAVK8HrtK8c1fr9eHMeTPZfahtYsYsVzbUoi7R8vQ7vYstBBZCpwCYJ3Fqt8gGnHi23hwYL8BCJoQ",
  "key13": "KDBy9gKkE26QTxQbpJkK1DFmhtU7keWVCmJDi8TbiLJ3NdJkpyMKAAa1pCTQ2Hks9k64jEvTKs3kEreYZxn62Rc",
  "key14": "531UUA6uvpWSHrSp8nd8b6xyWjr7p76Rk6htKG1eng4LiTvQaees79N5u5paAQev4Zt8bsTs9kGaWFxpK9agAK9J",
  "key15": "3cMJmUjfhf6oNMZhbuiktRZ2UNB7mbbrmPj3qdTS6Q247t1xGPxiS2KyViaSoZ5xWYyySwt5ap5zLMk4WHcrmd3S",
  "key16": "8yWgXPF43Cc9UY41WXgB7egM62YX9VD4ahZ2bdgWKjfJ5F9YEdvcnPnwQEsRtjbPSmuRnd2d4E3Sz66BdJ2YwgJ",
  "key17": "3Cfhx5FKPWEZnFpLvJiJyPVApEVqitnwduNGUkm3GvosaG7BHsG8oip6WL9d7LKFHoLZtWFYVXNPcupmtz9QHm9J",
  "key18": "5bVP4epjGQapMjKUVdn6PTteAG4xwUf1nHa67CCKFDW1taZ6ju8aH3L5YC8DxFnEUkscerfrMMWeqhwxtapuJffs",
  "key19": "3CYZJPYhGwuuDsAdPJfSM4xgzJeJFnNEfB6Ezym9GqZBScZmBzYgeEMeQWHbDBumVmvXxQm8Pspe5NaAxRNoJfbK",
  "key20": "3cUshXqzqkT6651oGFdKEWRZ5NsjX4eKsUxqEjj7QxbzXTapDpP8WnJgiMazcZBRrxiG1cUTtBe1GeJX6Log8nSS",
  "key21": "4zvjgwiygq228YEb7jQRJyyXqWKciZf32fJBPHGbdSaoWxMGuKApU2Mp3E7ATDBfEzkFmQ7tp93jR2jFgyiHerKf",
  "key22": "2oqyAeHToNz2hkgbVbfQbeup8jRqZtaBPduJF1DJLEZGNkGJdiRWC62hr629RgyeL1zkoo9q5PviooFk5E47ccWe",
  "key23": "2ZhGyoqNEfEZTqPkSR3vJ5gwjXQGgU47A6rkTKftgSWggQ9AdU8QaC8Phd9iXK3WLSmcZdw5zcUuhBkcFp3AuHRE",
  "key24": "3yMw9GgYspwwdomPTL6kEuq94BQvnz8m3uJdEmanSMyWTAvXxErYXuVbdwq8iGe8zSNDuWpUu4qYVXtRqMpqTmPB",
  "key25": "4sgmTSAhknyfDwTkPDsXwaWnKUB6hLsdTXqpZkYk8sejS4kRN9aYDFH1eVStbfwDG2fNGCmNX6WfaPxtpMVfX77B",
  "key26": "29YNbHdqByQ2rGNihGokfFFCDMDVSgNak8qciYhAakDD8vZjPGMFAU4QDPiBcDfNPGyYpwLrT4gst7aJFQRmYUMZ",
  "key27": "2PqF2C1RrvSpu7x8f8BfqQPwG8FZxGVuvCt8PXWBBxBTZQnc55vnn9FpUkERjtXvX8oBpt2DWiXhekWUzH3QbeNp",
  "key28": "5BKZUGVgAWTJKgQ1j1WnwixtfnkWdCmPUjcuWH4Hpgfe9Qyk6YHyGz44yjNoMkurdCK63W3GuJGQhw4HirZMuFE5",
  "key29": "58VWRn3HwfbYK99QQ8kWYfgzbrWkc5s3REgN7ALsgpn3aatZNwL32dssq7kV4fJWqin5iExMNsJMGPrFXE27hR68",
  "key30": "5VAvC8L8AAP5KZyzVTmnaB2b5mV7jtxa5LENtV4pes53AhGFXgZAp4TJcQcvyAQ7ZafYJFc5doCHhAKcA6XZQFwc",
  "key31": "5fPZxgF7HRRR82Fj2hMeQpJmfXLURtJnX4YsPaYTDGhtf5SErXmJ3EU6TFTbUzZD6ugcpfVtB6n2mEeaE1Vppt6D",
  "key32": "2XHLipbCL2Y717TKYoAHgMfSXMuKH8NojE43sdZq8xsYNGfSxtQKGf7kP1cPxfwQMKmCxzWMjbcRk9wDKr2ZSoHz",
  "key33": "5Fyo5vQroML7HUPs9tTgSkWVMy11HkciDcLp8SRCrcfWcKDxbwtyaYeTnHs7jPnkRQNNfQuYdQGrdQtPKXFUHeCf",
  "key34": "5nUwjqpoXapMS2gyy9zYKReihkeXva54Qc8PWvTJvVQVeccrEv1HtPg2SQfMQHaKE5rwgeipjnD8a3biqZep7KtW",
  "key35": "4XFfnkqHsEaSLz5r1PNkazKqshePQZvsyrE5NyyuG7vEWLeexGkCr9x6sfkkGY6MLWoTQXNJ6GaZMKp1iMpC6na",
  "key36": "5jNLy4yTokY3SeumxDUNVzogv3qSUJ6DBvjpgA8WVFkJQ7XkWzAK9ETJ5dqV3dqFGcvyZxjdU8sqatMLYkkzWWiE"
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
