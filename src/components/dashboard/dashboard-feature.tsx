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
    "GHSwcc3Z3Nuij7jTxjQohkkU5BZXpBUKsBUs2xcanuuhs3HSsUA6RhTpkc1YdrWJHpYkktEgNSrztM3DwSXhJh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WVCWC4AuMNktR3s6DdTisHLdvh3GhbPh9eNnJQiBPraenAdo9o5My7rrqfHBbvazXnoDshwvY1n2woVdXzLVzJ",
  "key1": "2oXDcya4vVEBEkr81XsAxqypwQxLFrbBMykbKuZJyGmD5RXpaXw3bKxc4NWiFymXFPSH7GvQersDPX63wNGoPu6F",
  "key2": "47vpvTR8BdmH1zHWaAAyUCFFe4Yd3cuQmZThpLebeN5yoo42KUBPnqnsZFsg4d7zCzppWjkhCia2thB8RiJjcdvb",
  "key3": "33dbXguHJFyAFLoNwuz36L6kB6BsFkTWiBE5ywVvGKvNiuPgNVwhru2DdRFgEfQe7vjmuw9A8bpssmvqoggmU43E",
  "key4": "4vK76ZDcmByyDmBvwHBFTYUnz8ozSF2RYz7KwxTeM3yYEPi3kQaR2Kwu5UfiBrgr6RP3jwfjRuZWuoS5eUitfgx9",
  "key5": "2C7ggtMYzp3nogBsYWQdmdBn1ptPCnxGyHiBRgKRv91VSpxVPyTi2cHkciPHGRAtXkuryiHE5SRgfxWu5Dgcfwra",
  "key6": "CELfiZMHbPBCS7JGti1Hhw58gBUDkRaoTzqVmoCEcvQKL2csWeGbCVk6bc2Tu9Qfy9UPreYxJQQbMW5Gq7YTXpV",
  "key7": "5JWqs3Ykzrqm3c9MxMDxdAM2q7RfeDNANxLe2AgoCvNi6ypg8bKy8vLtkW9ebGwbo8juQoNG15XwhDE4cywJ31Ua",
  "key8": "4L7XRCSdpMKGgWeJYkUqWQPJu2JSJggEggbSdYAg4qMucravvcTwJnjrrEZX1AMmLXth3sBGkkbzmo9P73vF2FPZ",
  "key9": "5MmpDb74ihzufzMtZhg7iif5vER5dYkq3vR96SuYHuVAKgxHBFpvEDttwBkpDvqvTQRDDNDmyFCZGzsgrwYr6SdH",
  "key10": "4dxr3JeSZja7d7EWthjTeCFBYsPtBF1s9YbfHUEMouM9Ns5VHXzLTgzkr4bhvq3LYM8tmSkKtdVZKsdR1vKwX7T2",
  "key11": "58aVwEqsvDiJp4VJuU9yZXTdyrGYE3swobEVMV1pK1MneD4Dkw2b7U3avP354P7r8QqkbYnC6pWeKLgogEyR5RdR",
  "key12": "TPyNKtYBvTy2Uxu4jDmAg9VWq8GzdajGEpi6HtQeMz9vAqQdhc9YvcvPNKMx3CwXUqDEnZp5Rbjj7htpc3KBciT",
  "key13": "KPNrLdxLZs869PQtWMM8jtmmwC6TCNPm1AYeSjom9exDGdh7YLAPDxDvksxp3hToqcNxj73AS78zkgUm4Aezk5k",
  "key14": "HQVT9XiJ3RW1eE5ZfcHfyJgf7QH3iH9qFJLghYj6GTLZQfLkpPDz9VARzdVTbnNn2tzkZ3X5jziKdM6gmV8VD5Q",
  "key15": "XDkFjAcQbqT51xToJV3spFD8NNAF21ugBk73VjXKENpRfvhb5QmWqAT4cQrBoFshvJGPHsjCaUSWd5dfDGEpMCU",
  "key16": "DSjv17r84VgmyQJKfjbgc6nhKjEF95T7F9uTwKpzmrbj7nUeq2GztoQQgwhChRt1LcBHXkUFEQBY2PXv3SMtPS6",
  "key17": "5JaQGFVFY36bZnsDcfQfKy3sDkW6ufu1eCve6zP53TeChzc2RCwypVS5KsynxDyNryPRKFkvRFdx3sJdWXPm9p6H",
  "key18": "ED8ca2iF3iE6ue8J1JYYpMKKfQ3CoUjeCcodDbq2ef8j9AiwterQfYSRWhQ7BZP5cGv8jZ2q9JkkzmhE3C6UMf8",
  "key19": "2oHrBa9byjubhEtRaYnacJUBMnbxfwgXs4fGZiUzea6qN1ys7W45Yre2Z5G2yS3SLRrWoYGyAcnjp48dp5YLMpn3",
  "key20": "3dQfW1imoBAYmbRHbjdRnuWhqhmVsZCXgvthDDqMUSWvw2mhEUZKH6RMiBAS6i4P6SFkXwH1q5q6uZ9sm5pdcjcs",
  "key21": "3h8TgLGPXA9z4A38HH8Dp86df8KNK6isky9aUx7YFum8KVynGo3p5DKGPhJZUZVTFTjJJxgvZyuyZXLb7YkHegjm",
  "key22": "41Q6K6LQc2K341DWafCYhn3z2Yk1ydwNNKU2X3wTijxHrHiXqvKULUt6jtg5j8fvq8LoSY8Ao7LH5SSfVb3HrnEH",
  "key23": "YPVTZ1nRW9GkH9wrke4nMzkHYBWek6xsCKhpmPRTxAwTMZJxsL4CpmMxBTK4ENaWqDfbyNhAvsC5C2UuzwfiWgY",
  "key24": "pZ1kK38iguj5VdCFTD91EjRFNJutZr8dog9rfoA5AxJ8Bm8AsGo9FfCPhkHxzoiJXWwWUJfGb8Dmn29BudBkuHU",
  "key25": "4R4Bh9Kjeg9aDBKDS26dyUDXytBqpo5AjmsEtaKMKcykZBLPBi4W6KWq3AKXCmcAy5mufJ1geLf1WtJTLBQUHzuM",
  "key26": "i7S3zUx9BCUjupaikD5tk1C6FKznQ3TRe8N9UwvjK7zudF3ePq7QUHFGs2KRNFD9itDhKer8H6QPMfnueXQMjak",
  "key27": "DX1PWEKBXDaP2K9okVnFT5wzVSMAfpFcitmLnPxq6HXsHZWqw7wfMW7NEDDSA2v3pUdxyBuk5kuMBHCSSTxEu7Z",
  "key28": "3ycA1PhspChvowCebi4W7Z3wf8kvKhiJw1fAe31Qk2sLLKZ5wvKPVXxKeQwicsG6Wnszg8T9emv1stXsZjmAw6a7",
  "key29": "4i4m8ofvdK9giU2nhZy4mLmtV9mrXUrzNxCahAEGBB6FhfupWtfHwT6syfezJHqeLYbdVLzx26zce1rB8QwHFZDC",
  "key30": "3XSJAMu8PTPRVgMX9rAUa5kTkrkwiea1mUh6ofwvrdqCRbd2cXMkDzTSBTQ6pxqU1wBnN12NQTDuPSN42uZxFd7X"
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
