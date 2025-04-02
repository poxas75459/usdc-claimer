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
    "3QrjseXce4BzG2LfJSjLRWKBkcZjyofEdhy1JGeB2WEeZWgJFE48XzNPiRLbRei4i8n73SFMrn3BuY1D2W7Uhc4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LnjfQVHrLBfUN6juV2mCPvNYg4a4rv5udbpPpiM6fC3F4xufhKJooxeQFG9jRhurZJnLyCqCbjeuwt5B6dSKkm",
  "key1": "2HTsGUS9TJLzwSMqXQL7hAvnAgp1jDo1mmGUQcA6aFSvRzdc7Qj5Q2SHkqHgdW9fC9YVPGkX549GPApuhTr1AEfS",
  "key2": "51sqpCSYMemAEMKvYaGz9kEKgFbpNmGVNXjn1EaCKqtcLFK5EBgu92qmAKAHitD3kwmsyPjA8h4HvtEaruvnYypM",
  "key3": "4BVgRHBsB3xkiP8b8fUQU5hVTRSFiyCUf3FjTTwgNodqpD143872RgCgpbHP8FW139fZSkLq1uSAXWkRq3gfjvXq",
  "key4": "5qFCtoiZuYi8raka9MZhYeWyMvuXsJh42kyCCPCJB26Mj52NgL9h4Br7GCPQtycaHXfv98wiLfmTbrnruzBM269D",
  "key5": "9iUrnyMjLW67MYXCN5mZftjcKV79R8nBrHMXCGWHvxNXFxMGuH1AfuUu7cdW5QbF7NgpnoSWGviPBpLHu12rXyg",
  "key6": "4pNC8G7AcnQdLJQrh5NZVd2AHL84tQH3ER4ViwSVoLEjMk9giaKtVHHcG7YseBpt45WUZ5M3vWmrhXtRFYVNV8NL",
  "key7": "2xMwmTg4gSm5zrbweGCi16iQYdvgYB7mWwJz5PtHpUk3JCkMGwFY1MJ3m8sqGL4567Jo14gDn3KU1Bh9CAu3gpHb",
  "key8": "4ppx4dHSnB5DXHaXp54oVaRnP3M1bNMgwL2nzTt5ptAA9ik2KKoE1bmAMLDyheo8vMUyHMLBo85XvsHQDCA4bMMe",
  "key9": "4j73QQTCsbPfCsLo6vFTUrCkuRgqrEVL6btyN9byuzBTuJXguvJFudxna8EcPM5WFQuPESoFbPReTN3925D9QkjR",
  "key10": "2P3j7jGfuDH1uGKMeminUStksGiik8aQTuKMot3Z82qCBugrjeBYSZAUQEvhMnyXRYBd3gxXue29GSSYe8tDwoNL",
  "key11": "24LjKpz4x1k2A2dcyQv4urDzqZCDL4jaecyRXNaXTNKjX4zwDumZXX9oDJtVhVF6DmyQDco6RJ6JyE33t7CR2wgD",
  "key12": "5hrYppgCpcTapK53vqhE4YBxAtaD2jHcbcN5tLxvPVZqRvWgmzGXpkqtbgwbfB2DvVVGxZpQ2cHFc61D2MQsjhMZ",
  "key13": "3JWvNM9GrQCXUi4noJGbwuAwHyXx9Yq4dZgAFd3raNDQsDcLDi9zJ8D5yTvPPMYW6DyQTBQMka1bf1iNMBMad72",
  "key14": "3L9VNcZi8yrisrQM4eqyddUxh62di2Mzj12pLTgqGgZKLcmKF9EXUnk5X7MN75Hi9HQCRWU9us8g2uYAFPsskwaK",
  "key15": "5bqtVoQC9As6sdpUN4Utf2QCbsQ564bh7i5c7nZ9Ut9EVf2Ny7VqVzXU1BnAmsJVprretT6cyPh5bDTH6kf7KCRC",
  "key16": "4x6cCi43y3QF7RE1wmfYtSrNb6ATstNMizTV3vskBTjUmUJPxk7RB7yyjhnqri3qhAdjqudD21ARxUyTYkbAY7HR",
  "key17": "289YS2JUr2dWV8Hb7Dtjm5stmH7Dgrfi3xrt8UNsTihAq2tzhNM8QBU6cWAQk5dff1omrzeeH2VWcX2dtY6M587E",
  "key18": "3GRD1HBGPksjqaYvZaMGiTCsfy2jT1Ki1cAQ6rLA3nqVywuzS3r4GakBAzTq4YUHWmWSwy14kyeJMUWq4hHkAWnL",
  "key19": "37qiHYY4e1oSBRfTDKdsHhec95j2Wm2gM2AzuerLo6FdC6z26V74u5Z3GDaNCGVbMtPPWonhMuKb5ttgjjnJF47U",
  "key20": "2eCZRNWfSfeJ4eZzGqfcKuR6h8zMaoc1JCSMcWjLnnfh3V7vqxSEEto5sQLLuVWmUfdEhYeq4WMDruoTotzH46kR",
  "key21": "53i8hojECmEisTx6R9AQgKdLGn7NWDQppmMEdYwQGfFiXYJQvJzxWj6Y1cxxNcTqcpe9M7ThNKkyiQQtKHAaot1C",
  "key22": "2mREy9w2JEwNPrFx27WNamwH75P9GSMGh9zJkD7e9YXY7LYzmvE5gbEAckAhvvVUGGMA16nvH9g51CM8QwMKiHeE",
  "key23": "4N8kuj8F4JMSHTLyEgnjJ7HQPRuegVcjaoMZigPqbXMMCssp5XzFaXRSDKqrC1Mkckq2zmTEdG5YxAVfUrE5oA7h",
  "key24": "34oB6XhgJKpoMPeYRs2fg1DE1zuwxzqDi6Ky2e5J8XYCC23LwQRRKYPxo22jwc255PfX7ebZLznCeBm9oyUuY2rk",
  "key25": "4KXt6D1j8iSFTpkijXtbqaJDP39w8V1ymumi15rTGTwQ5HHZxtPkFFBnvjfVTHrLjQSiXExC2dYccHpUhAgLU7i1",
  "key26": "2mEKf2Bh5ziYxfJVhjC1koQcHTyFppDTefN6MhEkV4FFJcrp6YxvwJ5wvbNF3Wwsobs88mDseoUb4bW9tKqkdN61",
  "key27": "4nE3h4Upkc6pk8b5L1XUXNLDdhvGm4LC7dzbTbmnxpaa3pq92eDPBJiAxCeC3SNHQYLdMnhK1n6UCKYxfzfPChsP",
  "key28": "42jwMutc5yeYzXoATKuzy5GfBsz3ZFqdCQNzEEZXxewzLi7KnzfWufuAV6N7sZ3ZqtSsVkkvHBiE2vL8xXp4sjHj",
  "key29": "5sUPMpjkvNNdZNGzK3FNM4M6pfnm5SwRXeLo7EcYg6LFnzjzdqeiJFFRXPcfdQiU8UBkS63jKRPCJeTLrqFSNqPa",
  "key30": "45PCGxuzsX129nMjmE1KXh569PDUuYHUSjx9bBeReVTVxirqvLshWkT7DHycwh5WvhamUiki16smbsHy9Bwr9H1S",
  "key31": "513fzWFW9EYsV5fRXoQ6V6dfcKvhnTUF8EAcBhAKrG6EddDDZLKkAVv7W9u4MYV5M2GHCVsAjVuqodrDwEsGcPrT",
  "key32": "2T9KDhwX3wUSGbxSTzFetmLFquHAeLW9E912fKCGMD4bSYujBk1LtL2ZHktgg3bD7XU6WJVVR9AHmoxn8aSB38cc",
  "key33": "3tKYuCuXXjdNDAvLbkmK9nEed7rPfb6jKCzggi3jWacPzK5uoHLeAFEzNSXLYhDFXtAYrQPDH5Njzb7777m5TWDx",
  "key34": "2xKRanPLreKLPeVzBB8avQ3Gy7nEQK3xssUE9fHaaKFCo17PnFmU5SNeBurK5pxJTa6yLq6WryoRdWbWgRRanhBB",
  "key35": "24MqCqPhTXLCpu2vAqA6H9h2zNJBxF3WP6JaLPk9MuNAQaKw2g5RoAi9KULb37XnRzVWcW1y5mbcFvNSBA3PiuqJ",
  "key36": "4kHSvQxbVH2uSWbG21mqwv95R62UcEgAD9foKLg3KB7axTqBd4n4WLp8fooKfpm2TC61m2Bkgo3w7PftdacpgH9D",
  "key37": "PoPtAgpXfxNpivDNGB97fjQyFtXhAcdqqV5SxMiUaW4u6u99HAFnWuXi3rXY9x3DLTrhpHbMC8huRyMmoQCn68A",
  "key38": "2eesiyMS29gnZgJKPzJtSU5RTWXLd8b8zrSq8d4AjaKhupKtcjFMahjb8NrqEa2B6gf7apZkyMwiuwNH5C3TEN3v",
  "key39": "y7TsC5ukpJxhs6YqHpweC2WyiPvDD8SyVpK1JdTQRNfbsYZ9QAdK9Z5hhFqMxAaEZ7DDZJGqwSs2W76wi21H4a5",
  "key40": "59Vv3F9oRfLYMc6VYeofJKRKEzGxVxcv2Kn99ZYw9s7VKiEkH1aZDMkvYNaVX17VzL7w74rM6hspkno9F1oKW9nz",
  "key41": "KSbe2xHenSdKc1hqJh8AzgZ4CTGmFrXm9R7fKZsc1N8ULiMToMpbc7gYbAWQcyMmC35CKataDYYMBMYDmAUMkS3",
  "key42": "AGwrswANvyYrugAGfWGiAax5cMJkMiR8eUcRbZZ7fxLwxaRyeCZgRiyNzBdLRsdnAYwfPob3DartTpAZ3orz3G7",
  "key43": "Dt2RshnBtz2XiDHGbXnhKfcKCzBVcKdZfgQxLLtxdsSZkHgiC1ttSexx3h18V9g2nk3xiu2u4Q3mAnZspiZCqC4",
  "key44": "3As4C8E1wBar9kbkasJxVX37A9sTk48r6gsn6mb8dx6PxfGWD5KapsNBHyxtodYishpbm25gjZjAbuRPUCksyU9d",
  "key45": "5fuQ5EDXHoQxotXWpnrYKfxtK5PAk8AyTxceuQm5kU8CTeDMxDk53gT8Deg9eJYk2spSjujKtQStkxFRxmEDpPaH",
  "key46": "4cE2tDC18dRwnpD4HB9Mfze9v3Na9xNUxsvNcfUCLriv415BchRY4UQGoEarDoGsJXbwaauga78v5iotczBmXo82"
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
