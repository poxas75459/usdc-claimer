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
    "5FzL4oCsMTixHQJ46rz84A2WyCSkFvXCbh4ghNpQPBq7SiGjnpAPu28mACevG5uYyBMJHr8mSxscNqWC9Jz1dsWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKBDrv5WNr1rfVJVAmQdkZMP4M3B3ZnaXXpf6w7mBvaBA15HE1rQhLyiq4C7UwC19qCUPffFJgNH6cSAo9wiL1J",
  "key1": "5sEqWdZ2CNbtG2NZ4D3pb1ZAi4bCZtN4yA1WmhpCP9ajgS4sAhmMLk9UMdpUsJWqDtsYcPjqyHs2C2SXvy7ULxgq",
  "key2": "23beac7zxzgC87spFgmBPwjYvM9hXKeHixcfA8yx5Wok9Cq1HELXAboctRgot7PNRgugbQJuBc33gxN1KtvvMgXs",
  "key3": "386zrCZmKWancFeaWvfvqX9tWGhfsw5cUN67pxnbL2CFDngiYYe7MVmfCGxit13T8xuaESQLdgkQ8JkMQiMjKBUi",
  "key4": "3PmoWu5VcgszGbf8WokeMpJToh12VvhZqWvmFEVWNSKCiYUVN3t8RcWqaYPBD2eWgoX8NqFbh2fQ7WCTB8zfA8T5",
  "key5": "2LMfD49ywKV69kCSTTG2EkmcCygx2GwoF1u54xzgRPcJfQUuPHep8KDH4g5HnGo8eJZDkDzLNH29EJuHHRJ27RHU",
  "key6": "2AQB1AtDiCZT3dBvMjY7LyTeFidXEYsbEGjcVCNxDizGff3mVgHnejve3Yoz11t9Gn7Ptq2Se2Hnu7hXfa4WVWyU",
  "key7": "5SzD9gSycNBjiGhKstiN3F8UoyfJh5uzNmFsdyq2ifxzRSyBpYbTdVmmRjvuwWNZw3xfdx5byrcMtqeNabawfQCN",
  "key8": "ViyymBktKr3u79dpMq5P1bHLqbRbpVtutB4sHhgwsQu9sNG9JT8yuM32kF8XKrSu4vAKadF6VhzKDn4a111H7tP",
  "key9": "rSAwNVh8i5UWteDHqbMbANoJVJFKyhKNJiAefSuAi6KLJnWKwhY1xt2eiEufrEYcrUrsZSNQBrLeq4LtNkNtWTj",
  "key10": "2hNfssMEcFqqX9aQkmMjnhMmkizMbYL1yN99JuNYfL9iLzc41myBnapH6omMQeSSc1KSEbyWjwRkHDD3mFW9ekFG",
  "key11": "5SjK8EVeALRvLrsYSXESHu5WpAj1412XHu7b53o4psq2M6SA9j2RjALUrNAehgxeyBSWUTm32yQTU7VBAguAN52y",
  "key12": "5mZb11C4UjbVEsB7t3k1eHt8RsznhseyQzx61YEtSKnS3icqHYTLqJBZpcCPoVhrJfB6YaSePhVb9ATuFkSWGMDy",
  "key13": "Rvp6wZbcVM7JxSJAKYMFSDE76p8XEtJFTarTUkHhpXJVM9ZdnPKnZZKGN6EYNyidZCCWq9651pH3sEx6qbzk5Tq",
  "key14": "3U4UFhtrgVQhFFT6ct1ydtR93RPuj9N5xspT8BvYUSrCekVbediWPUSLt9i4gkqaHQqf85BoXmkd46M3Q9JzULRF",
  "key15": "4n5C9LLFWcbdA5M1SBw9gL9dCBJkU6ieFsCq55hjRm9L4S1zSrezVVvTDxVRGFFQjZf13wVM1wVfpouC63QTzCbi",
  "key16": "3S74w4RcbhKsCAQfqQSpYTqMyQ7D2N9WEzD5dQMMbtDPXjguJrNd8eqAzuBZQSKGFBHVE4Lzn1ibw9FAtXvS7thV",
  "key17": "3k2Cvb8BdYmbpqdLS3xJNogSQeHohMdTPPtDerteNK6iHrjcgrj2kmD1Y1FCXDHgSAgFnrgq21D4K563xBSN9cUE",
  "key18": "4zzBUxYEZPs4RuqB4AFL2RbfuHwfoPyir52GL9JEPJDhZbBtwbskZAnCAZon8tQu6iUT2GLkrsduj1FHqh7B3qyY",
  "key19": "5G96VMSYUHTKbXL2fwLEStN2mCfJ8G8ExBFNRbmbF5vDQq3bzh5HoTR9K2dXQZU37Qkfrf2yGQrigrmyV3aqTR4P",
  "key20": "4cQ4oLDwwuBAfVrFuKi7zuxNfzWecS9AAUUdYUABTD1ERxmYe9gZcAnz4m3pw7XyvWqDYRKeKFELAttBKzBnWiRq",
  "key21": "ianNaxZ2RA16K6W7tncK6EfL3rxsAs7yM2Vnrhepv6GKgXSUqQhEmoDw9vqdnsunaWFUCKAkgTGjSkqY8tcm1XX",
  "key22": "2CSvn8MiTsgyChavPP2Xh3HRRn9KtBzXfiLA8syiR3tYKN2hb94aLUQPkMh3Pnr75ydm2DFQWoYKtw2rut9xxF4E",
  "key23": "33h316tsrFAfZP6UKToMHAH53uDZc4bpW1g7X1AGma35Ct2Tk9bWB7R5DLnqQ4zvNiXLLNek2H5SyymF6ArqrBAn",
  "key24": "2j4qDA7MM1YJ8X4WopbrYHox7XzC1UuBfBFo8eBzZqEz33QPGy3S5maA1U4SuuViy86qiUyfusxKWxMXfyyuqfaM",
  "key25": "2UkthAWv9txN7XSLYKcfarbUpRLdqAXh9gyZZ4qQKhV9LEBBKdHhxdTu8vXwcN5YM6QQeLa39J8FZMwLUooM6Kfz",
  "key26": "5xuKCjVXyW9TgJFv3NLodJS3beHAitHEBWtzgD5MFu5oWJWCdBmGRB7v5vJQrhrtGig4P8276xESntEVFuZepDkg",
  "key27": "351ZdrmtUbHVVFqDnWijztWifrL1gCHsjy5THBiLVgazV7wZn9vbhxJtKNn3YNpUBcpmAW6MQ6aA1yjMKnjkKwka",
  "key28": "5Aei3PSUktDHLE1f52h4ENJZGyJQbGeewiL992LDAdbLdCLh7CTM9ZXsa9WJdz1B1bJgcdnGQ6eYiTZxtuzyMHkt",
  "key29": "y37bPoGiqRnHZFHL5J6996rJGdMPDz8RspVE6goUb2gfdMGV3Q1erfhK6WXwVuBxi723H7TKZ1JceLbzDCzKQUp",
  "key30": "5XNCAtDMAqErYWymYEWBnxapcTVMG2RV73aKaU4GSBri1Kdt9cUKHUKwt7HUuQYUsZc7Ax7REqCg9YyL1XMabwg6",
  "key31": "wgSD196ZBFbADcgCbKxwEJbt5LdATZkyxku3ZkfUyks4YBt5wtpF2LqqYNHe8S53CK7ymwEw9YzWBDS5rsgXQc8",
  "key32": "MAd1bBBhrRqUAA8RMncufg7nvsMhCXerQvyWVVD5BLYk4bzw3WneyG84uh6dce82s5taekVL34WXmEACBjqkU8P",
  "key33": "3tLzcSTyVp3EF6x1caNR4Va8z2K7E1mFJLp95LJJAL4Pkj4C9b5b43fkKfjbX9MTccmhUnNPApEAEpmpqFCLfdTv",
  "key34": "2dkwLMDEzieKMrWrAzmu7CU4P112TtsDZ65ZMruhn2byjqV8yYDYFrxqSbDgA67ASEGd7CMm5yKpRmWvq9PGJoC4"
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
