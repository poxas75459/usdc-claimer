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
    "48wGtd62u6438ATFD7s5BfVGUpFJ3FkCnwLsMXQ2tQLsADE2Am5mNxjmZFFNpKjauYU8yi7js2wcQV6cRRhPKc3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avPveQBUXLSQJw5cUhphxmbbotMNdZkvMHHqwT8VxfwmwNCuNAunZGMjDVmk8H3eYEwH5dS4WkhT6KYb2nyfZj6",
  "key1": "43X32ZoC3RcsaGRMUme4FCUrU4PVmik9tCrqDRuTuLUQNgAVhAGGVsdqmtdB9ZYxGm8AH85P4gyLAqMTmZSdPtcR",
  "key2": "562my87hsgvcNyukZWV4KmQwsit2NmrjbcB3AdAmoAwVy8jsG5GWSmKBg5hFoH2LbVZnxa7MwRGE4VX54BjpwR3c",
  "key3": "3M3osqvZMMhAPu3yWK8U3K7ukZaG4AkcF6Ctr6UQQVacjV4e7tHirsJZNYxTjhyXjbHfS9aa4Lvzm6vSpRz3ceKt",
  "key4": "5azDAwvS3X7TNBjnhJt1P6B7cUuVUArK6Sh5ijfpPLiSgumaKxC6vxnPSASLh1NPSAvdxxPfQdFgANojY9k5vttd",
  "key5": "2pis6ryKiZAgUU3rKTLRzTeEGeFwKPu7s25tWCorABJVSvX9i7F4H7CZKLYZDG9tXHRU7fTQhphvg1YgNP7e7HAF",
  "key6": "5iSqmz3XchoLM35pfG4gjCQufAj2ynwtVvAGAGxwrMQ5geZbvSqBysUfEsX525z9bnTm1KgmTyCZT9xpCUhbQ9QP",
  "key7": "5H5DpotLNk4to6d2Nw3aNTkjD87Bswed6iE6hPSPVm8qhNev6WvCsF24r3KHCY1XCUyHXxo2CLsvouRACtK2VSQi",
  "key8": "JYevmsYuigxcSmyjgNe3UaY8QN1a2PW7Edyuvx7pwSaQeHvr9BAKYK6kSNppw9BhWNxo4gRGXxnBwiFnF44m5ee",
  "key9": "2k9HAaf1G6CboHtu5PXbbHpeRqGMhgznxEyEM1uZLgJk1hrzB5kRQuQXq8c747PUG864ubgSiARUKFmR8hAQ5TnL",
  "key10": "2mTdokDyk6SBaCej9N1QkvTiDYDERNDqzE6j7EKpHmUMUvRbKmd83si4KUziUWDmMXB4byiouTRA8DX5skhWNeDP",
  "key11": "3CGkDafnhGUJzgQK7BkdqHUHCHq43mkuGUm2WLaZ37ikrLeqjm7U7M6JseqZbFtj5eQM19LqnXFGsdsrZghEcwxJ",
  "key12": "4cB6HwxzrkhnbZvvUKKadhJa5pt9UwW6YAajgqauvTcTW7oeY492ZfvXS5Q3d8t2Ywyh8xuLSeWn1jSQFfQ6RuUK",
  "key13": "24V7cJQo51dw9TF8Z62aQC3m1BkvQBj9bzGpForzycHc6zJ5T4koihKcumjWnv4EvjbSA1e78Adw7dutjyoFRE9g",
  "key14": "2QAqd6Zxqb9iLmqDnZY7XhQ237GJ8M7oq4kMvp8uoETmvpWN2xPBJJRu6qKmaipV3iienmFNRDfTe8tQ2UQmFzKq",
  "key15": "oAQFfp2rVungj9GV6HsBKiKHZgETDsjBPKufHtyD5XsdWpZguUxuL51ekfNBhcGUiiG5C6PLgGTGBPKFfUAPuYm",
  "key16": "3RPFj7uxcH7ErhRLmNtZfoYbUbcUJVjPvY5yfN7T78dUcZLcWLugg18tbam5754uS7q6rY3ow6TpzSZ35K4uGFUP",
  "key17": "QJBXocdkWTym98srNLUUs2uhe3G7VVZVUDE86y8HWv3qmyVxiTT2FRQ7Z8QHUs8b2UudeARKhNyeKjkCo1XkXAa",
  "key18": "4bHEi1jNVAJviHHGNRvvHRWtSkYnuACy7yJmrbPh2qEKKydbR7We7Z6tqBzSXBFuTiSBACDJRvryL7WKULtdpWrs",
  "key19": "kVBhLSohD72BfGUXN9RpGAeane7qj7Zqigx7BKRZKJKMrcm7UARkBBSviS722b3ZMptPoYT4Nr1kZwjfB2C3Utq",
  "key20": "h5jNom4KJXv49SrwN8n5HscoARUX9vYsWaUsnDwx8tZp3Roxxu5gECp4bxq49GvLZCSNVGbhChQSBsHETgTnh7D",
  "key21": "5qEfiF3ohggHvH5T5oJXq6qburrQUbPTBcHoqsqkgwaTJrm9D3c1cMyrk6egTMDqGQHPK5UkgArLzvrSJiSVHdYp",
  "key22": "3YWgm7BSJ6cB7JdWRpg6PD2B5eBaxdDWWi1aYxSwKRHhSNTCXdkergHHYZdzw6F8azYhdov821FhLUuY8FaMZ23r",
  "key23": "XBGDKHGz6Lvc4q7k9WSoeQoQ2FPY3BSDoP5Zyw2PNrRxWRf6xi3iM92sV7U54jfa4hfx2HiRD76m9AW2pmKMMmH",
  "key24": "2BKXrhGqxFkg4QyjymoT9XTb3heC2DMb3qbBkAu1SDvpC2T4CRiRvhMu44sjoJ5YMe32LUaqLM6ndFRLzg2uAHmp",
  "key25": "62y77gNaRJLfX6bKn5gZ32wp2aYhkn7LqZnnJL8YjAGqnkhiLgini3D4ZfweXqq6JaHDrzQ3d3n3teqCa9oCRZDJ",
  "key26": "2Y72i1DzH321FLQq7zUUrRtFtD77kWDJFS2R5YGXgm3KfyG9NWbjwYQuMoemeWeGqBNDCWNtEEejjtgcHSZ2CJfH",
  "key27": "UkNEh9CDuee3PxkpexKLt4aNMqRcxbpVmG9mqPJQmmisbNcxWLNhgv54ScWDBxUf8ExH4Av2vMjt8TWkqjaND6D",
  "key28": "2VQFWXsdboEBszcYHQg5phbQXkBQ2v1VmhLugTTHPdE9jw6sf1GbqT2kShJXvvsYisywf7STLa8etLtSxBSKn5mz",
  "key29": "53eBHsK2pU1hBhU5accAbVSmXHS9VGzSXLKdWMuk3yyXWEEGhUpXLR4aqG4CHqgWSxqsYN1PrjuTjrSxtzsDYCni",
  "key30": "4f94ri7NKJtTKnsEGQRC7YCxNKe2WAdomeAM1YeB2whaAk2UsA4evRetwjVK3kQdKMkrpMqYNdQZFDpiEzCmogNz",
  "key31": "24sKFpAHCVTxUkdXCC35n9pvfDikBYT6KRoCxWjupcR1HKGQkX69AxyWJwbQuFLcMC3fYRyqhmsezF3ke1YK4TMN",
  "key32": "22WwYU8yJceHGim23p89dbJVRKbWZkxYaRSP2N4tz1QUfMBGkqvMez7cx2uQqifTMbsQmiGWbZDZmNqqYY9tu1cw",
  "key33": "4PYCqzdMgroW5wVPggWem7oX21jFhTDTPNmWSChWgQhyU4HKBDBLUTzFyXCUX6JgGdB5ZAKqtgbbAcRSTsCCgt8U",
  "key34": "2RwtoMoP17pKf7NSMq1a79RSkBTVDQPc63y7kSWDnVzP3vGm9qWn32V5Q6CheXEq3vQhzMqqvNq5WqQNx8oNYnZi"
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
