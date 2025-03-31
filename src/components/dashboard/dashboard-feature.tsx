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
    "3rUQZzSr1k99mpY7WPnsFaQKeU2sbNueZNu5uTag8ZUiEv2pD13mo2dZAerXJXbb4yF6Hr4A4dp4AFjNviLz83c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oY2mQWiQfxwheTTXZkP1nZF18XEhUo6fkxJZi3Haym8gBRutkt18NwqJrG2sgGCAAYzASJQus5J8pLsfgVMs9aM",
  "key1": "4hgfd69c9dkWMB5ftKK4B8hHwccvPGmdgGwEsDdsUefibkCFyqELTgGbxw9idK9pp6hpYBB5ncSMNjm9er3WvDVj",
  "key2": "2DjFNXZ78Y9DAFHqTWixhiDMJYEKh57t2ftYi8iHYKq5t315PCJZS8cEcq7KQnr6BgqhR1yTL2CAiEsnKaTHHiAR",
  "key3": "27GwpVsSczjMvgk6Vr8GFxUAtwcGn6tEKe3Hbr4KSvPTnSW9XQqoN1TmYei9H2FEgBhWJFaTAjnYgxPFd5g9EmFb",
  "key4": "4YKad8bde9Yf4G6aNrufcshBweUVgjRp4SAuL8ndjLSqDAkKxys7DcAVWvAySAoQraDJxLaDWvBigD5eiiqZTpSC",
  "key5": "41pkT4c7GiUX6LQyY3yoPaZKAV4a3mNAFiff11Z4x3o6rtPKCErh3kph4gSeXDvLoBSU7PLbhvcL2Y9bHrSkrQkJ",
  "key6": "43CxYimoZANpujCYPfFjEKYkNDRCMhASdpxAdeQLUfzoaJ9uMPG6MqZg8sSyF6GTtWEhWbjrf3rWQybkMJ2u3nHY",
  "key7": "ifVnbM66RF4WrtXRzVbAkV5oYoQxhUyRJnQdS2njtyCbaU4cehKoEMxj73VZDnfSwRiYo66wCK6xoSLH9km1pZC",
  "key8": "oSCsP22BWXaoHd5oj5trVoxLr5WzutYuyfQ97ZUjSGyfHd1QdPBZs522JverVzqBKYxqhQwthJuWXSELAZXQmEv",
  "key9": "XHVDEVJPAGCrqkGqS7WmKvVvkxp1kxJLj8WvXcyUdjPkye4e7hgfdHDqwwXHLkmBb1WFCxkdUyuDaTXF8ipjAHC",
  "key10": "25V8iukNhEyKy5bSvbRMc4kSJygXxn1GXkvSJ1BWhrMkYrThJ9t99jAfX8TaW9NH8edXy3HV1JBoewLTYKtGw9Gq",
  "key11": "VSM1oJuRsDfogmzJNS74X33a2gsVL31zZApnc4Kh9CwEPkpmrybXtQxEb81v5AenSrzobKH3jPasxAmbNytD5YW",
  "key12": "5FgBtkVpgXrj8pYrkUPcHdqjN1ZQjSntBNxZEFaPAz76Z6vEUMsmRr4JJriZ34Vah7SWU4a3ixXXUqS3kn3tmwCG",
  "key13": "3pLyjxHiLYvsarVZLRu9aHfL4uJM2DYkNLM8jT6nNWAKJgYsK9YA2PUvKdXGY6j4yuZo45uk3t4RfrQeq1zZVyd2",
  "key14": "5MDvq9wrjg44aGPMnhU76o3bJbyLS7abzFageu7MteZaJ8FVZ5RsQeXwn72ySET9eFmxNQxiBqdmZrGNgjTNUCQB",
  "key15": "TE6PtdRxMSSAyMqBk7oLJFZPTrvcDLGyjazpBvBqok1CpnzXgEKJHe9te7yWUCpnyYZifQK5i12nVpyxrN3khng",
  "key16": "L8b9zRcsjVncyuNayW5rdxgDvHvhQeq4xwM9a91pSadNBeKCr3GExSq27josXqcmLawDT3qJmsHLM8NFcEYPB4y",
  "key17": "2vkoqa9kqKwAG2hgfRfiDUkEq8pewzaRe3t7uS9iYBLuHsU1mFjGJz6ty8vnXRkfuN6g8prqHwczPY876sC34S7s",
  "key18": "3oGy8h7L46s4NKC4yJNLTX2S4429BzdSNMHfrV9oq9kzW251G18UYEqtkqdRAdDvirYMmF2wwpz7UhoNPBEzyn6d",
  "key19": "3N7hiqcPQiVrUV4LUcyg5iSyj5ZpzsxMAUKD3Dw9eC6mcqegBMXjiwfHbyRMFGewcYeymcp1EiiWU77rVtohgtyn",
  "key20": "5Mx8j2girUM3WP8LrEwgR556LmPcFc3HRtj5kqiwnbrYRN9Cpe8dVfBW7rkVscKno1Es31fyGgYaBscRVjGPkbjS",
  "key21": "4GowiQBZjmDZmZo8d1pMQ6VvjCZmXWVa7YVSHZZapS28vMM3gjiDdCe5EkziUdsoqPGKtQrc9FsxDrt2E2NSThKb",
  "key22": "CDSceefk1TzCevEb6rMUxhuxg4i2AiKhWowmD6L8v1XSC4D7XhbSe4JP9kTwpkzNftd73mg4AdwmDjYVZYafy9s",
  "key23": "3FcTUBrsUyX4k237caSkuy3wSmVDBYjgEUfBxa1ytg4MngNgvrHSxJigMStFoUByngpwnnYrThfj8gGbAEArVMfB",
  "key24": "RJ3EjFcuSZQiyXotLaYukovxUXRNSNMRHFGSKfoBXu8DNZZzfw9EJ4HLuUvU4Jze3ssa4YETYbcQmFRFStSFG5f",
  "key25": "4o8j2Xm4VuJBveotiPU5RYZazQ4KM8Hov2kM1sJwKFcQxT8FJKeLT39z7Fj2jcFDJi8ceVEvoe9josQ8vYWnqG64",
  "key26": "29wJKCoCwfiERhGSTqR3zgwaMQF37iMqp7WZbSZ4yAasfYf1eePRnwh9zEx3ScNm4BKG9RrPMZzYDYqYwE4AhPby",
  "key27": "3WRExgRq3VP9AJJWBws6nNgF2J1K6AvPCt9kFSaPuA5z3FgWy6RWTbBckccWuCgDEXThZwR4VT9V5mMtPvfYiGmB",
  "key28": "56gqY3sGZXEsfBAq7h9L5RyFQ9CuQpRnrQ2cpFt7XR5dD5kLEbpkVhJNgJGwsiDUiAgMym5i8x3eGEKLdKjhRJwH",
  "key29": "32Lu53Pcmd88NSESxThxqnTpxGKPzDXcHhTS896QE9TBPTZwaD5FGujp6XpHUFjCdqrAgjSJrgreDyjYe88n44ZG",
  "key30": "2qGYbLSgLkWJpdv5fcbsVMoJyfnKfJXJPkrQ9JUqa9suqBTyYBriyYaneGhYWSjfrxKYMsrDmZKdFh3UgrozUtqH",
  "key31": "5RCHe1awkg84GmyuZ5kMRXbpA4yGGTsDFvUTgYVyXkknpvZYeWNAZTkYgrrnV4XmnkpmYJuZCHFTgDbVdLHdUv1B",
  "key32": "2ChNQP3UQvyn2NYgQaAjWhx5BLorp2nzevPp1FV9jWhx2Ho2b7sdnBw4Lof53sAqhLm1PSGCKZZs4LenCXNwPDvW",
  "key33": "5EDzq5n8Yz98azVv684tjQKBEPPDykwTACjZusPkU4XtprA4PWxDWA3sA2Te778cvUZKdDzZ6ccWvqKE2shoxJG7"
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
