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
    "Fj8AAGKu9d5nu9UE98MBgUvCcZRnruupFxah6HmJtx1gG8a9b8yfEAhjPbmbounyEciq55xmtgvKsXXt1e2A4gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "265rdmpcvnPzZitkboKQdMAzApY86yvGJtYhAYamyBWtBMWz3YHVLKF3QKrKv9pZhsGQpwjkBKDJHkx56J2NMBtV",
  "key1": "4aMe5iejKxbSYmzqhwVthrhAokoeXAd66wirpV7t8bqw4jFgq6DbdLkLP3XtBHNB6k99Gt8WwUZ7iJ4kkPMqosN6",
  "key2": "4ZUZyFCTWXXjfc1dpCT8mKU9WZgLt12r8PKGKBQHuG18esspezUM6q2n2rYcGZxrZn8dLXGJqXBKXxWCftfJqT9W",
  "key3": "3pucPhYcE9wUt5gpogtzZMbJ9CXHKJ23xp9y4TH1yrfFK2fgmW75sc9xJUGXR2YRCutWRfFm9yEXhTK3p94Xz6Sz",
  "key4": "2RJk8DNCYz5PcUzXuNQ7u9P1KZ3zJ9HzMWSab2T1wSGSRtvckj4vGvKczaBWNer8KUXSthQbkhYmGmNSdoGqjTmX",
  "key5": "63kEhHRohPnh41VbiczvtHAoUB7fKwNrw8BkNV8QeNx8zKMKeVHVTMC7uimzY9LQ8QYLUtQbYHWENrGVfd5rxbxs",
  "key6": "5716P6kNaLDR1Us3GHkddqTTbo8fPxmCV9kr1AacTL7MaUVFeBYP5yBcuEptoywSGvS2uuTTjqQ8a6oGy8PHL9ha",
  "key7": "2T1N1n6CSs1WYrb71kHnQA6Rz7781Lh6L3f1aZsyDaBSDjiodL7eRByeUKiuZU6v1YxDnvpHkYPXsjq7td66nsjj",
  "key8": "3Cvj4hw7Jor1EDgeCqo9zBAgBNPEwEfCMz3R7bZJGZuMUp2reCCZtW8CTMt4WZ5WVJYEP6UmjixpcdRj5fSkwyFk",
  "key9": "2g7Asi88jHFKzrboLfYbWcXiCTrzREtqsKJH8bad3qcdsDZKiLt8o7jCqWWVDeKNAF361BesEKaAnLF6crcCRuP6",
  "key10": "vNDoDsdki3ojyn8fMUiBrkYimrCbfCv2SkjPgcfutNV2Xv5wEc6RsC5NniVCCcHZw7NLsjf2411rBWNPW7zWaZP",
  "key11": "q8L4SqsNRwjdfgWaZDNvP3eppzxWNTAYV8QAZ7D2wVUTnVSkEzHCVLVCSehHRMEpjMjZUsj2GTMEr8VxkujkfDH",
  "key12": "3hAeGrVyBF4F4GrxJRafW7K6AJfVPGWQ8Hw9Qn5tokGHjQiJhcArsPojpfazwe7CYfbKQTPnxXYg7rFj1bLqeu35",
  "key13": "2UKUZWgGZbjiDTHiNHJBuC96oV3X9dGUwJHrQ89tDmhkheL6Cb1ghbgvu2rWbkjGi1Vj6svW2qUu3u4oN6D8JonB",
  "key14": "5bpw5BkX1EppLrC8g94HADti4fXo1B7eVLd6nudgJahsnrmdyquFW5oCosKA4PeWuxj5md8e4jF45qhYgBsrx3tf",
  "key15": "5AdGUqmXjraRtGTd1Lf1PsdaZSvensZ69kkQv4Qckmbx1ZAC236DPFR3WP68woHU3VMjJVEKdQPNopB7kAvj6PUy",
  "key16": "5WuEvuKgRqLT6uLMk18gygRUY59mVctgXZpzcHtgkXApdXkqYpfonZikJ4sP4AyQeFqrPqHpAvvZCZvFZKk1R47B",
  "key17": "283HcojPL9rtNB1JMXtbzN8vAggDS14JfGFKnudAZvPxgfHbJNYtDhY7UDeZXdBcj5feNR72YYDo3qxd9hjvGHNv",
  "key18": "2RKWSUaEcN7K1QKrni99eJeFiSEmQiBoTd1PBSUpG9AoNja5vUSjNHaFtDuSXhz9eTxsuREmmEpGFtRbs83Za4p3",
  "key19": "2RixzToJ9XWL4t7R4E8jm4BGQD1c4qFyLXyc2SmZJHmzJTDmJtqwHhTYHfVeoCipGM9y2EkUzw795eHaTFfY87GE",
  "key20": "5UPHUFSLtFMTaVgx2SCuNSA1MM1rhPKxkPcJY4MD2gFMmhavCp9ukwSA3itnM1QdJ9NYM9M5uTaQURMXE5fzbHfY",
  "key21": "3eha88aPYyLaPvK5ufDAwiFmdZXe63WatS8jJbioNp3DqaqidD6ZtuGpB26TjRcK3CZrJEj4oskzSgVpASfbta6U",
  "key22": "3zPhn8zJLRqJQcU2evUS72qH1LzsarbBQ9u6ERMYcoUrszrAvNpG4A1HRtQhRmzCBQkNXXxG4pES91bYNixMWvVD",
  "key23": "42ctRgeKq3rCcFpGiwmV7EAPv7iXEsNryc5NyNiRder3ZVXrad84Y7M6i8HHLuDaoSoh3ieJYrvrZkvpqaFZ36ii",
  "key24": "2btbjT9StohPKxUyNjeknwahWcn9tb9DSjqFhUdB9rTa9uRbMdEGwRptA3kxEjL4kubzDG1cMpMLQM9dyFg2MvVG",
  "key25": "4gmr72VHhSLBKQrhRtuMzEYoPVeUvXS3jSMTnDMK12uTBwofW8omWy477gxgRPr9iNsCjnusUmJqVWwWnHCSwCq4",
  "key26": "DeoTVdFWSQEh9fZhHyJxCdCG28QBoogi8zZQjtfQbHhY3cTQCDjpYDLKSuGGP9GspMsLEm8qUQ2NHS6eZUzFJH9",
  "key27": "3eJ5mKKVUHLrXAirYZmZz8SMkmsTKwWmZeDzwDCFnmS3WuNVD2cZXXB71PJ2PPhLesJL4iahX77cw5R49Xg5b2Hk",
  "key28": "5wT1G3Zsa3puZxUc4b6UvFzR6h2bAV6YChEkpyhwfpmE1tP33ReqKRjkapomjhjVn6tVWYw4YQyFJY84iywamskY",
  "key29": "64CcfCTgsiM3CCVitvdNNSKrfXTcffZcLJK3fVr71nmnCcC6qLyuiVZM5bdLinGvHH5wcFcQjxoU734xFF3e9kBu",
  "key30": "5B2SKE9X2besjaXugPcnpxCdw6QY2sDASh69FokgVcDxZvUpwXhkCXeSN2f8esd7HukxG3aY9NYYtw7yAAXoXn7y",
  "key31": "2qgam7WRSsHySP2y91wSZzvr8P8a2xxB6mG8DVLbjQhDPj3ZLwtqweymtc4tLzE66qZFoCsTFUSfydcKsAqP3k8y",
  "key32": "5ThqUW5LPkNjxeeh5sxN9bqUcKBYied2gMm1Jp76GN2oS3w3Ei459vHZ57EQ5t8KxwHhmX2eX2FrJBM3JksSJQef",
  "key33": "32cT5AsZpm496dAiuJe17Yuh3DCqtfua38FVnuj2jkar7Pgt77j2QXxxoU8oZN9qY4i9YuWcL7wLym3gxAhwwy1m",
  "key34": "4Ux7XZiyotnn8jqzU3XdWgLdYnQa8bnZhafkR55ks5bFKDRbfLKhbv7V7PaAtX5voxsjP9VFtuuUqjNH9tGTcFFf",
  "key35": "4onGRt7Mk2v123BzebRuXDRZD1y8bvAsfBcUF4j8JfFbNjqzaZeb9EtRNMHrAjGU4SnLcdwUteUvhr8yWFSdZLpF",
  "key36": "4ubeMxAuvrCfWZBhubBLMntPuBBN23X961iYgPYtQV6JXQiazWQrdb6ZFoGPJzzw4oatUd6CPFrzLKx6ZbowwZUd",
  "key37": "5SUVfqRovmiTNK7jSMsQHVSwr7QQp4LA3bAe3kwAqycJshzqV6TH7kT3yxxK9X7bVMqfHzoPxp3Brd1YoBoR8oKk",
  "key38": "nHypzduKwqTHtpdm5izKD7giqx6qsagjZihnyfZJ8o9ep41LPbHkH6d77PNhs6QacssHzEm8PxxM5KziLsKPEzC",
  "key39": "3C7XbguVfywDc3ZwXE45Zx1Xooa5hVkKHQWtwwaB8a275wsu3A37x8znPjUzNTTnb3A1RQLZ73o3AjJqNWNzhTL7",
  "key40": "4ehoVYq5dyUY6rMNWfw9scQBsS14BCwLL9ebuGwwmz7nTyr4LefQ2kVNsyG2V34MXvPwYEdUpqJPpBwFW8pTTFLQ",
  "key41": "oUhwR31nz1zoLHnL5h8cqQx6pkbFJGTPcSdGzy7RaBSNwKsAEtMgeHZFJbHHXBK3JxbKfHaE5sFXPFXeMaEVAjy",
  "key42": "2ap5YFBZLBtCTAK2imAzWV6mZQZFK79bzYaHF5Smx2UKSFn3dUrGP6pbaPLUQLmUYcETJzzh9EdHmJRk53cSMmiD"
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
