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
    "2yFUiH7Va8v5Lt1zkydgQNgUrVavt9dZRxXXYCUnsjHYh3atM1FSXdNQBzmYAw1oSVXyFcz9UnKncGvC5u2Ky1Vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyax4yDywMm838roxQpYTQXHHAitQCyk55bDfMJo8MMSKjsp8YLf5o67ADGqiP5NyeWURtu3XFiqCktsZNPCeLc",
  "key1": "5xAmPRwCrAEWmWCpwrbf1DBMTrnaxWx9uc9nG5oQXzVtYgW9Sfq9mQsqHajjGZ19jnQ1YKWzJwut9XW6yWKpZhY2",
  "key2": "5yfrkASnYmjUuNSDToR4Nzep12cFf76fL3TFvPMjASwSDZavk5ZrTv4GbpnxR9hdqMHpcAoV1mSE7F1se8AB2kyU",
  "key3": "8QeGMXdiGkYfuKTkBjr2PaiRBQ6Kp4N8GDDZcSSKQBK39inxCCLHbJtjVq8tXm7h8hne2VPQWAWeyqBAL16w6om",
  "key4": "4hHLbpZKznyKiwHt3eJCJm9hsd3aKQbaZWzoZWwpEtwz6RuwsoGmSH4zwtwo1yfNBgmp4S6qGVXapsTKao64urgS",
  "key5": "5jGDnuSgmKaXp3BhQe9Ed3tchB6wahkGDXhTjJRs8MrUCGrES8NKkiyy737UfTfxaKK2Whm6azfW6WuytiSzppcw",
  "key6": "5kwLm5uCKTn8v6aprCDUKs94u3C9LW5yScpXhTEW6t57jNhbt9PGfXpRnjiH6Fdw1ePnpHZGpiU4yD2zMR26Vbrz",
  "key7": "3TRNoeqZndJstzYZLnwE4V2V4XUf6tKhyVuKsR3iExpictKcrJJ3dZQpbq2Kf7ptGkjRJXfnTaLkxrmwrugMbzPN",
  "key8": "2kVS5zLA7wtBjbtZrtrneckj3FvQrBwm4fGzn6JVZBFGANnTDbNn4GmbwrgWt9xMYD1fmZtfeRupbk1uWbLERQih",
  "key9": "5ziavFCBcBdozPP3nqhfaGZQqiKcPs2MmUt2EeXsqW7Yhb4vcUZcgWG8tGkXhCJf2dzz4n23dzPCNeAvCn84sGn2",
  "key10": "31TM9QE1YojMVK9vToFPRji1NofGnmApbTLHouvkLvAEwvF4uXunW9q18h67QLVyiuLPUuVPTzj3SuQzGrpCmYNL",
  "key11": "5rk6xcV3sdiycbY6goF2p2REaZ9maP4zB31ipHhkLjyqT7RNFtEHzMNmrHD1RQSemdyDhDDoUb9dZ6SVHFy1FsXf",
  "key12": "3hWhw3LLfM6LCNCnRo5yH2jD7y3vGD7TBz2VC86DxiX9trY3gyefakegk2eGpRpJGAFrgtFZYAudSVfZCBfC7yk4",
  "key13": "4xXjHXzxxDMYqGgAaeuhCBxTZTgBa4VHwu74MrbkaUogdqzyrgck8SMLgQBvpytU6FkcXFr9DRHBUuTdz9SCio54",
  "key14": "5zvbfKcdyVCya8swgt5hECzbBViwKVuMyxksTaAD4DdmwSW8gX8HZxqdZPBXhY5kTWXDKcfisGxcHPUYSfMu8DWt",
  "key15": "56i8Z9X6pjvmUcLsv9mkmWWtpQwqDK9YAf3VmrMYCZvsiP5VpvXFQMDX6373EowNCDCns7ni4Q5CArKiGFaek4SG",
  "key16": "quVQ4EAj5rqq5vrGs7TsEDWWq6mcZ5ACswQnhwSFPgB153bBgsSWFGFKYfefZnyNH689FRh1MTUXUhqvkeoUiCj",
  "key17": "2ZiGEaqEgS7XtsDETTSAKzFityDynJDNnm2YDbFqJr6zhxwgQQqBU6nWBjQsoJmfSnYc8s3oWyuy25ugi71ebgro",
  "key18": "4qoveFi9K734TZFFUBTqCdTFia6jPmNLKtLz9zSQ8YZVz1nLT8xpG6aHJJ3cQq5Yq5beHCJjjDncguAPHy9dpQqJ",
  "key19": "5w9XqSgVqWJeuVVyjZzX7AD33RGtJWE8Pu2gPw7jchQY4R8kLbgyt4f1TvLkVWEvhwKF5if2XRT4KCKDQGu1bch5",
  "key20": "5v2kycUwMSohCuZDp2UKVk2aktnuTB53S9nF9cLwGdtfeNjKBEZaiZtAYk2dqX895afMrJtep9LYWv2xBkwRFNpD",
  "key21": "5hBPUcWeM8nxzcz5168zV7fNpYncqEuukBRfhUDPSpBRuSwSfrYw9sQ5eggktKqurssJBdDz3RFyJUJKWXjKtqHe",
  "key22": "59iqxBU11y17jngnpHJ963rFHQnqr9msMfSaU4K9jKhwKgcoTTTnW6has9amNQbzGsvrRhhmj5c8CE7GxGX6ypVk",
  "key23": "4fVFbSwkJYz7WWVauSccsiZtQgiFbw7TpUDEbCWbw8i4CNSvkFQuJPXD1Zd8LSTSCHzogJi4vc9JacTWF9HSDyLk",
  "key24": "R49PigzPi7EWSBwvwHwt51H2dmQsWF3BxMUu7wjrf8z5ABDpAHxhDNDBFZvevb21VKrE81MheKra9sHSjrKDn8j",
  "key25": "5sYiqXr1TJqW5HwJXemPvxfJ9NbPjTbtWXTFZ8cNV84cHmBQm3QHf9x1MnqRnu3V6HzUkTCo7T7a6UmjT7qY86sB",
  "key26": "451aFiWJ8L82XaRTcxPPnkRVck4kL41S4hqtRqmzC8SeJCmQ6htXDT9FvkENung6JHWqYzisEWKbV1eK2qTRtrAs",
  "key27": "5m337hcNYyJwG5aAMZQy64zEWb7W6LNejYU4c6fTmtT6AK9QRMk3PS4vrBcRbkjNycZJv4XKjwsQyB29nGTdwqH8",
  "key28": "62J3YpyB3ib7RKD2558CABUnuUJtqU1JGZZJVXzPfHNnzjkoATCnqyix4MPRxwyWPhX2fiX1CPedAtH1VVRL9Fjy",
  "key29": "2X8VbvGqgjLyjBA6AG8AriHr8KVKDW9DjthRxUM22jEaWbnXTchyZ2RaTjFAb9ALEb7ovzu1uzCYzMxzs1qNRfBZ",
  "key30": "3wKmmHBwjWuu6JYAqNxMXz3mTC3m46ZmCAQgLnNAvjcd89sEe8R6eBQJho15zDwJM7eAQoSQnQgM8DLjZsUKbAVS",
  "key31": "3jZvfrRX5S9WyBkYrHs67w5RR27Pv9Xepx6TAbt9cdn4P8f213SkJVVwCDTckdrKSYeeGTwEv7M8R2AMmSjWR9gP",
  "key32": "2P43eeTZAdic7PAVgyqGUAiygdGdLEfaBncms6TSCVbjQQFEJsTKGM5pRmZuBe69G1Z1cqiPLdcd7z15QH8R3mrU",
  "key33": "oLdnfwXPuXy1LBnRKTRx8h3noQWDzsrjxUF4ZoSHq3wCW7M9yJcGkExLsGhFPUJvCesxByAawDLVvLFbr1LTrcj",
  "key34": "wxyDbNAYPDyrzmenTw4FKb9iu2vmhc86m9vJUVCsJFESC757GGVGsaTtaGMH7bRX69CcfzErGNABSmX2BZAYg4r",
  "key35": "3Y2tdXQuLoBVxnQNPGcefF7Rfk3j5bHRN1qzhAE3Jeh5efSV9jhG4ec21kVp9ijos9JsH3KrdPtWcwpaW6398dua"
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
