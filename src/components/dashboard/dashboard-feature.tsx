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
    "2MF8s6PsDSNRXYvz5FVSuHYCtgVSAWf7xWeW6Wq3rDucZZ1JQ34ToK5EAYNnvxmpXisTyrCcreA8gr4Fhmg6Zcye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45pSPx8rhqFGmWYuz2qoYPUjKkBWDZWZq53gLAahX3CgdufhY2GvEKKnjLizbk15GapyXoNmL2a5ejcXAiNc6yr1",
  "key1": "49UBxqJn2EiUL2yLRjFCUXP9e4Rt7UbGAmALDskLXKPpf3shgqr9TtUxmaRhNKSTmdYDum7MHCYCUDQvk2yV1HUe",
  "key2": "3sURoqvxGfbBz2XjzDG5CVCHCcXuVYEeGhdUH79fYk5uBfLahy9k5nz4z5zCaFMGdj8oLt11h8mV9aHTbbfxKdLA",
  "key3": "5czUqpe6WEaRgiCzmnVTZtHYHEGXfb5kpGdJMMeKUipkw43s1x5GbhanY6AvZbXkxcgBoycWFe1fJiUr3MzsNm64",
  "key4": "5xoonXT1BvDfLDs3L5V6V7g8A3nGXXZFxL16KM4CxfbPdGRTaKuREpPQyX1TESe2CTpnQTiLU81Cy8FUR6yJH9Ri",
  "key5": "2zncE6fTd4Dqsgrd1BgbAvX4QFjjR3oA6UjxLJ2PsqSAPUWXiVwVDYyhd4kzGbcQbgvsxBmwQMEcKmU4p9qXHSxC",
  "key6": "2ZYwDXqeo3sD4pVy56tDTdoYNVcFriUq3sQv4GEgkBfAGNxTCa3r142cyvyVsVChbZtx1n8QydoaW1REYkKS5g9A",
  "key7": "wcyE48oRJyAemkfGDkygWVV68g51S1dh7KiTSkRQRgjstU8cBitzKE5Sy5pvQphpPEgVS6HBVSK9MYsGRC6evvJ",
  "key8": "63CfYyGkNsemCkgvFpk9CWnPAKfNMqTupGW2YURAqaJEH7QhaWTE9enUCm5MXH6sSrNvwFiJKtoTjbLkE8mgXEpF",
  "key9": "3T9DCxtZnzmXt2uF7EJez5AXw1mkLsFHs9SGZ9LrWr1Ftq6X6pRQUBwkZVEYaQ9DLrk4uCVzpRo7ZrjJqL2qS7Mp",
  "key10": "4cqKQeYtYU1hNVnpJKkPCneRUjdiCCoFJp2XKMGTcu87pgvz7atsdd2KWFmAtpmxdArxchVrVc9K3h4BuP42SZro",
  "key11": "3AUNCpjNsfbTHThCF5XyMBhhH4NW9JA7BVtQSoae8wjis47Byj4nb4nTiBcuobLWKRoKkcpPAzTD4F1wKbdaAfju",
  "key12": "65hpdErUqevzkiqcEqtjMz6E88CHm4WHDXds7rWiNpm8cmwRsJJ5bVuaRZQ6bKXGiG5fgJcGya11cWQnC1DKuW9w",
  "key13": "4WWh5PNk7FPRJSznh1etjJAofDJvgzbkaNLgnuFfhwguFWqf7kPhFaxk6315C4abDFaKoWKkQZuTgsdPapQT4hJq",
  "key14": "5XZrqiu2biqG6rgFggNt98EjHsDYXBVuAJ7esfwvToq4GX6cpHurHXUg6RvaH6yTzJXagdT9uGCzfapzixNZRWYi",
  "key15": "3fLLhqs2Hj3AniCAexAmjCiqD6RF1BMR4iWbVFKncmUUTKh8E4U9bA7gkVSnEotnihF93C1WTqphJXhDHtkpzwUa",
  "key16": "5yUG1hZmwmodJe1FQE2vebCtc2mq6WHseQb8Je6di9aJEasiUqKZXR2isWZVTHvT8JRcB8ovFfxdCmWoaArspsng",
  "key17": "4towPuBYvvHirJhqWXspc7mPwY14ZmhVwommE7vqhk6qzs91T4btjPQFAEoGEVBiTrnVvSFELwvSZ5ewTBVbrnxi",
  "key18": "62NAMjkeBVjSoPEnUqDt84gQo4FyrUkvfZVLkEDnyAfAP4CPFURPgNdDxWBp3wmfFYSdSt1pXwFSi7pWSR1qThWs",
  "key19": "2CTYaAf7MBZMPqHDKXuPiJACPSpxzJBmaa8p9iNVKhvPPq9KQVZJhvCvUVKpTpBGh4mSVwsHCYMw5PvCn3A6Ut2r",
  "key20": "2EQjDevG51Z6K7FmDSEoUMh86E8fx9S14NnHp8ZDzrCtJ7LRprgCcbnVDTx8TrdsXCjzCUNDZ9FsjYXZtY6ygDKB",
  "key21": "YFmpy4Fs5woLJngHEWkfXHTRDcRSgSWDiPNWzucYuGHZyXXXpA3cF5hswYhjLgL4iriMsBXV1HQsqwo3xBtqQcM",
  "key22": "6TVWdbygLyedbxSG6itbNb1GhNUxoubQXMbPd9KgAMMgv2XNtTSF8qcYKvCasC6k3xGi7vNK4MuqgwmykZr6ykX",
  "key23": "5rDGZfA6bFbP9VYozbYELuqMLgPtXGND6cCTnxqNX82Kcnc6oGAL3hwthG821zCn6iUF1gdfmqRWeC7qBVEJS2Kk",
  "key24": "6aqeX8951K6NgiXQZSqQwpCrcPHv5ET7X5PBn3gcjxVT6aasVYa8M7whW2Wx4FT2cLhGgUjdLLCAbfWoNqPQ9d7",
  "key25": "Q4fiJHmC4ZBZunNKq7L4UVpd8rGtichtyrGY8qz2B7e1b41zgABWqj98S6QYqxXZ9DvNsLm9NFN2axbWkxort9R",
  "key26": "zPcBEofzuNAZ9Zk74dejEjKiqcV7X8wMdR3aHfAVv4oL8nwzHQkL7ZE3yun1cX7ozWLxdxW15KZk5xZcjYDnQ8E",
  "key27": "254ezq6hF3qrembGiA3VLmCtdzwyB8C5Eq2XuTenCvPK36rmoT93oNyJUb58gbwXdGuyp8GYpfkB76yx5LJ4JiMD",
  "key28": "5hTat25uEWMHHCPZ7AuRHftXKJDbFS8PpfHH8cLPe2yfZ6M1PXcc5a56zWYfynwsX9McwSNmox7yvr5fpX13yhm",
  "key29": "55gFuovp1Pzwua9obM8HSfjiscdLvv7D3jpt8NzKxXWpmjNrpBUWiSzSkhVqvbkuMHaG6Z5EENGitoRBpxkHx38K",
  "key30": "42FSfFubLtuHo3mviGRgLQxMLmd86RtLoxy6KFtdQYs7oiwxZwnMiUFFPbop3qNQky1EwTD16JmMkY5QtQdPi7He",
  "key31": "5k11JkfBWQ2dmZjkWSvUgPBNF9QgWKAymrRTEZyn9UrwQ6WMWbfxLiEwMM1LmusUGEqi6daUYWM5AJYSdhrrqjUt",
  "key32": "4jGJynTFjhRzz7iyFSHqQ3piqF9sUTbup2ZCRJw18zKWqTnZriyWM28K2YGQPx5CGeAjjTnwBctqwqxm1hDUPi4M",
  "key33": "JnMT8MGiK2Y2JmKBG9CqKk5CRJ7edbkPfL2A3HdCs3vpjc1zMnuVbE9hTsfVAtHvFdr5VSv8o8zsJHXv3wrbvtv",
  "key34": "3qyrCWLqFPwMWxW2CwCmLiDfhmfxMcJNi3BmtD7xJGGds4JE5Qme8RXWyUzNcucrcU9xfpGUKwpeRyjsXA3Ux2zK",
  "key35": "2f4sm1hvorx9vDFCwjFLEKLxvn68TT11RpXNjEHnnEiq8MKC7eHf4uvmp4Xi9HAu6R9KqUvX9ZkAoTrGiB7SC5Eq",
  "key36": "2iX6JebSa3ReVVdmskqGkp2EYZRTrWL3sP2Z4SKqNQbNQfFUmjvEcGjCi4gC9nHnvr7U6DoK62xhxg1kPJ5cb5yJ",
  "key37": "2zmaQWWMVfNmVpNYK7dHfHUPj6awzGvxN8UnZhng9ZUKanKotzH5UihqqcJsi84o1odSMrU1njZ8QrqhkW4n48HX",
  "key38": "3hQYeCV7L5NQuGgWDw1zBhgZNBWPDFu9PEjoYsNvbKDrsWUUAhveNdxDkrR9DCHN9RJGL8T46fDKDLYZ3ULPyJsG",
  "key39": "44NL6VD3zJQL4y7dJeAZ9JAQukaMxBEeR8zu54RRuttSri6X84huEu1g3PtPxNveEQbwTdpPRTN9hhFPUwsVXnbJ",
  "key40": "4JAhxpj7wX2WrD2om9Aw4UKHRqfA7DvxcuDuaQT1TbWbwC3H7EaC98MDVpmQcUg8grCUc16XVhdYN6Ux2yuH4s8Q",
  "key41": "65pnYnjCD1DBsstU2etQLAdn4sySpUdi3NpNrYqetaGaErTwnZpXGQz1MeU2MYqWwcmHDxxYJ8FxxxZ9ZhHFbuE2",
  "key42": "2KEoavHZsfKvu9DvEdoDHRJHWWynuJgXqXNt92TJyZu5pPt2ngJNNZKVkEg28zY3baZdWiSadvbmTef6DVipoywj",
  "key43": "Ez1Rs1LoXXQUrNgGCahYn9GEDWZgpMBNCYNriV4Xb9r2Gtqng6YSYNkRkMAYYsUmojZs1rANS4xJ5xjDiEfJE6N",
  "key44": "T8hmAQPuDiHwjq1vEjwzd7a99HRmz47sQdDfyHfmzdm6dAwPZLEaG7ELZAZppEHpRZhum4LkkQf7qwFSDgdfq9T"
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
