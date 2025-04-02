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
    "3nYADpRxHiQAGHBHUfhGBw1aXwZQQ3SkCv26EQYeQiDjoyfLXEhb9szoU7NkScWcSZzVgikq4QvfUNspnUvNTRjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MJySMvyxhysekEVaRsVPyKYNQnroc9P6z2A9m18Jqbkhie1uRSU4oDqwaicgNxh7Wwg5F26ZaGjasVX1P2myMyB",
  "key1": "GhcT3gSDFfP8T1eix4RAxUSDo1XGmwz9SnzvNepsFY7WmHbzGYbQaMZg3ytVe6YRcFdkEc19zwDPRV7rQ4Duju8",
  "key2": "2vaHyEjqnugitkgg2NVYbhH7WaLghFm6YpL6CoPKXZhfaXmYGqXUiw4633F6EgMTa3P5WJRjaFaW6Cb96p4AKeQQ",
  "key3": "3eRpNQ64vUXBhntyryzKkkhje3w588LRMpSFLvxoBVE3FDAtxeAE7YNVVLqmPRYL1Q9eBPMCmUfdfA84RnrD2E5f",
  "key4": "269xTfo5fCfzkqHPhHktYMqA2yCeTWgm3xkusBuaFVFGKqtLCRXvTcxxEx1fTCQtVXbUbQjzp77DYWhWdXagMiXg",
  "key5": "65rhkXm2cxGZ51tWzV5bT6Pnu7ikSiBEjmZm61F8n9wwLS19S7K85DNwZhLdjG5MqNYay9aWSPWqXFyw8cE77BUB",
  "key6": "2XrVZCrEu8PghZKLvuUZ87GvpajyFtioqHac85pWCAGTX2pbGXk7SxDzanxK1JrCUiEGXkaycxenoLAofB1vVZCD",
  "key7": "3KcDg6tG7kyfQMG3YToBRF3P2oKeZw222LcjYYYtz8xnyXhHVRBDZNTpN1oVVz8H6czq9BicwZv2F6DHyaqMveYf",
  "key8": "4N7M3QKgVTsx1nm2ycYd1QqjXL2AWVB1W4jhH47bYSt9ZXuCyQPgjfqzfo5WUA3QLQpyBrZN42hhckNFbMHBoxop",
  "key9": "nZvN2GEUZTqifxNomo77hC7u4rLyjKwxA3GrmrFBSRXfHMErgJwZkRHYiHfiVMfAXF3kaq4a2cZ6iQ1Wp63oTak",
  "key10": "3MC7CdCWsobkesbR3F3S27UdWRQx95PgbHETcgZWKpFj8TdwrRch8q7aX6VkcVL1aMgKc9er54CnhiUqmegk7QvK",
  "key11": "26ZPvRaaXHddLht41DCcA8oZgqTS62mUidbkcjBdSpZChQw6ycZwXb5saEwaSUyXxi6qdMkdXad4WnsVUYKDgpz5",
  "key12": "9gZbriiZN7kBks1FQYxC4Pzijrr2L4uHuoVLj8KZ6cNH8C1Lx7qiPC7bUMVA8vCTMK488oiXnNk22czeBWVG1CU",
  "key13": "QLLAS3TqRfzSuwK2tDvZpbttda6HCev9swEuCEVQJEBB4wut3XKrMjtiqtSNKMf83BUkpJoh8ev2hpGKrTZByqC",
  "key14": "5LaVDmbPYrcFzU7wmiqZwVNTZMjADRwsx6nYPh5aH5sMrUsnoxLnpX5GjVd1tFGePWFa3mw1ghpRh6W2ZvcXyXeU",
  "key15": "2P4YaPvRkxXPjJ7SRuc6Rfv7z57ZkghjidDJFLVGrhRifuTCU81upnqwBRiHp33yBjdqTNurXvQrjhfhVT4Ry9Ty",
  "key16": "5cw4eWGMpv79a277YwYQeJGH259A2CkLMVN2cGmSarG37QQFwL1vQPYmkAXasxzHTYn1YvfCZf2amSiX354XKJ4C",
  "key17": "5RQKaMsea3EFmu2rRHw9KG7uxwdRmipmP6kjqFUnZTZezVwDS7uPbV4iZd9yccR3BK3JJbXnQu9UiTfhVusfxckg",
  "key18": "2ZQD4bVZ8JZmyU4x6ZiBfKctmcd2D5FBQr5yTdpwpnHYyD4ght3xfiXf1BRf9sF2DijAXRhKXyjfAXrc3PRWEQBr",
  "key19": "45vsAhEAHVwBj28U7vmFSqr9MPgT1KznjNVo34ux5tuzcs7RuWYX2PumBnG451MQqUMyoH9hvgtbRTPUJJcMNabV",
  "key20": "4qGUEMRriWTnqhZ8wz9PhgDMSS6GWKGcq7JGjxrHedeQAks4yeNFP7ay6DYq9BXnwqEZ8KK2CpfrpGBFyYqdZSaE",
  "key21": "xz4jgMi2PmzXQeLaWKnvBgjtkHKtVjthCwe86NuvSLPTtoiz4XeSPwVEKSSTVY8ivzYSRwxNmfRTT67AUNK8LwC",
  "key22": "3wRWbzK978Yi1Wrs6Cs21sPMz8HFmvSLEQT6ZD4wWvFaEPst4iS9b6G5MTxbWY65cfbDJ66usNBqTq3T7ShARgg3",
  "key23": "41fDtgNmQiJoXBuJ9dXthc3qHTyZLnD4fUt8iZRJC1P2Sbdibq8NdxWDJ5qz5MTabSvRJFTvznxvgujRed9nKqFH",
  "key24": "4bhkCfNPGc8rjQbZgoGd7gerf1dsf7eL7h43BP8UyBE3QAbSMx3NeTNbrHA5whbDVxwyBdQXrgNvH2N3S8auBT9A",
  "key25": "3i3vPPzZBqZ4gWS2fKVcw6Ra6iuaoSZ368Rb6GyAJ4kya7pavXByrLhZHUeb1NEEPkzwHFP66ZvrBs3znKoqa72i",
  "key26": "32XycqTL33wP7P1747wxixg96eHZVmkNUAC22x7oSnY9WRZkFs7aoUcSv8cUZbJvqH9k8NUZbhod8RmbGQWZ9pgx",
  "key27": "4wZymbBcJxz8HVV4as4LkngijfizbsYSTXT1Lb47EhTX1b47brnN538JggJs6pCKnNPQUcDMbogcaZJTrpPkWyqS",
  "key28": "45pygrczGXfcYLZv7FYmJ7nzeL8mWFokQRoS7RANsEJa713JFDnbBEVykFQk8izomRqzyPJ8p4FxmCf2WDgf2wMJ",
  "key29": "2YScbMFAjkpke5saBbXyxEiCytBfMfuZk5EenEsak9wbXrLoiq2w9p9pmqAiPQNbEX79UdY67npMfXBxU6Tcr67L",
  "key30": "5uUZf8WjWRNhq1KBSTbaZAukq7asussfbKwE7tC3A7Lo3dWeLWtbZZ9jVMZXZQ8Uiax7KuZEMTfgrgoFEmb5bsnn",
  "key31": "4ss6a8x6t8vtLpFFoRdgdtYcddzgsz4QtdQAH8trSB3j79n7XvJHqEe9Z97t3Nrsr9JaqEbBnwfRLF39pbVuDsqq",
  "key32": "4nx6rjaHabsc2cVNB7QYSMS2k55qXNr2gBpNkZw6FnQ7yYTvq1NqvwmbBGb8tEBaMngBcYvTizgu7nm29wimMYeK",
  "key33": "3WK1Ng3qUWY2bTEMYWy5ExDEt55YkDdQgDgcK9VPr3CQBGTVzfYmHHQsrwumussqCi6Ctr9AJA2x7QAduQjyNVgL"
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
