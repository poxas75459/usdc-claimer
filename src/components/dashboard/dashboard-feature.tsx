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
    "3x8xMWn5yxVLdHhuvFCiDzBmj423JbcvGAkKgr5wbijRY8LaXSD6kb4fLtWeNpPTwpjmNGpHE9ByKwXimXTSYVcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3v4CV1kh6DzafPsoGjTc76g5ShaxsSky9bWrnTWUjmyyajJqxpjX44EEiafVVqxSegvhYnwDHmd5khLhZ5kXCC",
  "key1": "2nkSBZWXysQSoD7Mae9kK4BEb5M9RfaaNNBwTZRTHzakPwPeyzRNHdc6U3Eo2CS7gtkDcwzSac5f2kPJi35zvKAe",
  "key2": "4DcKqwjyYc3xyZmTRpnhH94JtZefvMAkArFnaDwiBXThpK1p69e9Dha4Q6nD25cMswg4vKh7ENqPGuy3U742CfEh",
  "key3": "4k9n7xhyvkeqx6kDxhXcrR79bBuVUZGmrVrHU4937UTpjxvhqRhDzBRh1n7TKYMCiZkE6KtoW4w4AWLHiiPesudu",
  "key4": "4SM78xYVBLvjnKQCNPsNxoT5RQEKDzpfZZDAWVAtEF98LZoKhCSFcZ6uUupP6JV6Lu6Sf1hbM447FtxKo2Po3ueb",
  "key5": "rhisJCkLTNTTE3mYbEqDGAy7tGJLBJ9p6ofPX1B6Hs2wRQZuY2LCRz6vNf2BVhZDcki13TPgQAhaxyg6s77dBG9",
  "key6": "5Rog2HA7QRcu5reCrSRFFzcDDAQthtmHzLcPd1zxLA8iP9hSa5VVmdAzPuAQ7AURjkC6QxjD4MWTyep86Wffa6RP",
  "key7": "3BnGrppPqSS6Lg9kvjUu6ewVVugamiDaWBTSZFuUXdeepji9w4DtXgLzMsg5v3KYjSJW1Ke7yrBn5d8hoAcaM5VD",
  "key8": "3jgd5sYQmPvtLSUQ3suwD5W6UTyfbJn7FDyrx3yjaju2Ja3wkYoXBy1WtwaPGNi7otCYV6uXwXnXQH6LT4Rb9r9v",
  "key9": "2jmnBkv5tWc8odPwmU9VSK5v9VQzmTTwcXEw4YeFQzXwJoEQDHraFrh2TiwaAYB6e6v6xqEr2FuZyLtSDpsVQZmU",
  "key10": "vLSLm3kxzg9ruYZQmGTpSYPYnmWRgMhGPhrf9kpbvauaSmwD96pJybXXRcH3RJbtUBMVBr5BCBy641Pg6jhFbX5",
  "key11": "4JKV9TBNKxfwipfSvKxsCcbneZqbexa9Hb36dXYJLtX5tJbkYcj3DmYaF6DXcWvHAnp1LocqWyAU7c66B1V6mLSw",
  "key12": "W8YRCv2m4zvzb1CdTb82UXKDgHj9jTpxACHgq2VcKdMo1bM9A658qnLfeKb58h9kzf97gGsgo1Snt2dAUg4Y71f",
  "key13": "2d5Hoti53tcX5gxb6kuTBNZs9WNYNo12pWExCjQu5ry8fbJL246PJNka6A6sDo7b2hFhKN67ZmvBAuhVJDk9FC5W",
  "key14": "2dANcCtsC9vWYKYDG4X9WWd9REqkxW4xpHpLSnRTMcDSQ8kVzzfjHUew7bGg25Dq36LkjE6gX2iejTxHrfhB25Xz",
  "key15": "3JqQ9aAugnz66oV95uf4dBUWZ1vJRESrtLVWewzaefDyHnwPEpR52hcjdxbAbH9jZsLWB7B3ZjCXJdGVXuX8mbvp",
  "key16": "2yPAwZNPPqbrF6fqcghLiuivKcTM4RB21AiC5PHk8a1xKmUewpAJeS6zqrG5oK9mD7AWJae3ALMFDP7oR6fRWVTq",
  "key17": "5rxcbr8nPtSMo5xWzjUXH5o14na5XoUaz3vYqR2J75CmyxKFjPYuZtpKF6peuNMu7Rft3on4AhkF7t6Q5DmN7r1d",
  "key18": "2DMC6iYh6xb5oCbMrytsdrLtfv74dxp8tM4YNKnEhVA2r2wp1dbLGUD2mZQESekP142jKe8KiLRA6XvnQEBGZfSx",
  "key19": "3c5PjN3TgMMWMoNGppBzNZ17SBfw91Fv7fAeiA5T9FcbzURkQDWu3cctDok45LFpD8f7TdQSUUkX5gTuPEQLJNfK",
  "key20": "3xsMp5fgo2uUJXkspyc15Kr5b2xoCHgtYHvHw46nSxm6jx4g9b6qzMuxHniCMgLrdEoZRoLmytxXxJ6wToBfPwEw",
  "key21": "2a4ySPu16EZXjsFqEyGPADnqpRKZitcnmhrgBPXJM9dDAq9EygFucZfC99UEpgGo2t2qYvENrGvjDgn5MR1EjShj",
  "key22": "R5ZyHrrQj5YyKV8nWGkfk1MurqZXnqMUnMFFxaZ9pAkA4DPES6NXU6Sj7CTgt6LBLcrxXbmVYYJavpC2ZTieWEL",
  "key23": "3DMRipzYY1ngxZfyhgQYKjFzpyDzaKbLBNA1deXEJbXbHCLCPCF5HhsBKgUuaPGBfwENoSKLkEkcasGhKxZqiTTm",
  "key24": "GBfpsGfEMWjmsSX76eQDPrhPsfYs57HzEZ84wLxBiaujLQ4xCZ3PKkpL3qGFqKbJTZ2oRTVYH1nA5Tvph6JGtab",
  "key25": "2Ua4c1uLxH3pJx7x4b94xWcrmVmpfBLfZXgARcR9cqqfi4Cj47LWm5QiJRz99bK4wYKjjHB4dAHfvWyn5R6os51q",
  "key26": "4oEatg6m9AQxMogKWVFWpwSbbNDi31NpMXa9zyLtfZZR4L4zgx212MjbAVrZfVLTXEYtKbCjndr272RwkkVKZDs6",
  "key27": "4nqJHrqowyxptpXWRvt5V3sqG6q5PfzMjH4rqqs3ErjitdzE8AGsStPTVF7wVYZJsrohoeCdssri2EC7Q25PH6ko",
  "key28": "31G6qD34EioyLf76xcu7g3LU5nisdz1okPKTauzZLQC8ryhD9myBv24k2vbJ7KdQv6BnvPsPQ7CaXveSnSokgj2J",
  "key29": "VijRgXG2adR467CUzyS3sUCE8xojMb797Gm9zYkoW7V7MEcstkApVZhF4cAyCEdfjV5DzxwuCbWjWYuhkZJ2CEV",
  "key30": "4zDYgXSRMEsBnFMJmL1gDoLw67fnAcYuTDEgcUJiiLiu3RWaVh8Wtdo4FAGcRnTdmLrq9kR4fXsibdW4mWVen1uu",
  "key31": "mMPCPM6pJtAatkz9NksDA29epMsuzYkKP3ktASymGzM3z9dYFKuzKDvGqhNwLpqhRmMVQDTkcKpi1NtbFqTGQRb"
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
