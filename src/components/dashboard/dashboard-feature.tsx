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
    "3EtXeFTuA9N6Ckbk6mdASscqFKvuReXiFV2iMganYbQgMdDH94cg8gk8y8gWP9QBTrcQbUpthUiCzvfGVbuKp1QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYU9oNQMaQGPUGWSnJs4FFHfF6B64RvWtKNwwaTgZMf6m52iEKote5WiFqFUehHBq1Ggq76FYvGSbHJmgoHLKKw",
  "key1": "2zVLfq9HxdQ4fWmiYozRznBP3WCxydChn5xBAUxhgLqcNx2i5rULS7eW89Ewaga7tzwiqh8hHWi2sW5PGFnak1VP",
  "key2": "ZpJpAas79TZENBofFanYaCUSkdoxDzADN22wiARVmjYxjTyarfjyFVQLDrA87wWtmPA2kDdikzrpLSAhF9SEhbG",
  "key3": "5ZATNV1wVcKN8JqrVHZiSMFb4zVFDSXKCxSE6NXVfBCC8u6JvJFZh7s3B3graEE4erXfiRZX1RPPiZfJUyb5xzEn",
  "key4": "3muBqGNWSsy6wg95oEPm8R8BdiW83PNZHHCoKFh1MWirj74DYpjQVTjStvxUBgZfD4WndnubrxFmjsPRKDsuS14f",
  "key5": "4rqftExS22f1mx7LCCbgCZYsk8imrS7CaixHvwg4v3TXLz6zrb5CgTEKWZH9YHKzch7V3PnbBhFszQgUskQ4VRTJ",
  "key6": "4UToXdAWqdAuz1dirayVikH3JJ4YraDTM9JBcLzcMUN1kdYSuzdeKiKX2BTyp5TTcVzGRLFw2V9in8EGyX9PwzzQ",
  "key7": "JBzbPxQLRMHF42NDFXyNRi4gKrnVczkobF27VCkCD8ap8bNRNK4XkeqUMFXSi8nQgtW7hRPCZrH2pmbaqJgnRyN",
  "key8": "4CMTRw9iGLehk8bmFuQ6Yrs6Fufwda2NRgTuoBCGda859kPRsmaD4oYRbVxXegmjSnoVWCggiNRRubxNDQNofihz",
  "key9": "njFnJULRjYVXQcyS5fo3NKDvwgqaqLisQL7NFKSo7g3vbQFfFk4HSiobhinEpsk1SDBxyKpo8j7vZPSEqN8E6uS",
  "key10": "4KYat28hVym1gwsMS59QdPowGe5EAsjcSS6t8UFwD5ug7gvX6R5S1ioavgWYvQE7dmj9PAHcBt1d6xTSHTFRs3wo",
  "key11": "5zsHGd25v4arLsxLUeXBPaGE62mStv9jqNJKgvK4HgQb2KAijxkEW5p7ZbaiTU2amPaVrNu7HBLTr3V5p7FjsQTW",
  "key12": "3y7FtUehLVs8b6YgtawKEL6kj19tG2v8t9jAAbFJJp5poLoyCdLxMUXu25ZjyMZLQCvCNasuv9NDcVzNPwTgscfZ",
  "key13": "4cc1n3SwNYp6ZW1jytXAYLnRfviT7t4b67ZUS2s2jtKXXLxBKq6hNrbrFvVjqE56DT1eNEA6rTw2hgDX5Xm1SayZ",
  "key14": "4AFtfqafUNDiqiQN6fmXk3k9SyuxHYWy9zpzUeu5snbiCorUHHkoLEnVqRHenfm4vVYsBrV1Ru35Z1viXL9rhiVq",
  "key15": "565xSRD61jBTv5XDkgvXwNbstfuS9FFx7ykNHBJFGT9wuhSDBmRLWwAJLYTBBoG1vwFtRFFSFZi6pwuX79CskCke",
  "key16": "3KusaadLrSmVNeSxP6U7gwpt5XcfkgjCSmkCwVGag6gceQGnHi4kehytB9deHjyjdVbJgbPC5xnoEk9vrh9yaReL",
  "key17": "236Y9qVnpEkqTvQE3XpXy5qBY3L7wDSvDJa9iTtvV7kuQXR7fiqekXTTgnpEQkKfsK389oTVBhs5dNPnRnrKq479",
  "key18": "E2vQ2Bz6DNydPektVnyNkNFWeX2VdoW76HZz2s3mJCf8kWUYCoUQaqVohSeL2pFDr6GiE4R4Rut4Vwan98EyeQx",
  "key19": "FeDhcHPTGXKciA6bD6EPA4WbZHWfN9UZj9LQkvRe7f82wSzZPviMGTtrJR8r1JAWQgCxzuAk5F3wNFyVLdUAmXh",
  "key20": "3BxvxRa3utfD4rdUk3aF1F7agDqeUaGdPpAZ3Sm92HSMfSZNqKots6mThgXXESDJhMYrTaiaDPShWQTdVzS6saiV",
  "key21": "64WsfQmUxo2LWDSHE9P4P3bhudr5RKGTvUeFdyyqDJqcs4Q1Xjp8uV74fzsfwxDcC2DmhLUdSzVbSbGYzBLUVxnv",
  "key22": "3teyGFgTPic2RyE2CbaRDAq7yFJfuXXXNYaBg1RhKSoBQ6KnFFfBirwtWj76GKhfnu1Az8Cb8mDnjcqCxtdZQyj3",
  "key23": "h2QtH2G2kyT9UZbkG8yUh9jghwamq6iqhtnkRhcxGxfXo2EEDD42vMwkF5aUYtMdX8TnJcvyVg1MHTTubveRhbw",
  "key24": "5WuvikyP1EjrkoQ7bV8k7fcpcEfjWZVPcEXpwu3rpVDTDsGKUkzodRgU9nRvxRt5TD8SnD5gz6aiuMCAZcGREieh",
  "key25": "4cxBjUPKi6LvH3pjhSBic8ZzDcd5eMVHHqE41cFkmEX35MjAJL2p14t31g7K5oKiaRM354xf9FkuHQUvbexsVgZs",
  "key26": "3wvEzit83diMfgQNhzkbC1dWgFU8UTmhie6ZFXUKNp9vzFk2MDW7G9NFW1BCiDjVe2QqXJ9PcnHVnQk8XKhhqHZb",
  "key27": "4HT3vhmT597bZZ8LZdUF8eFVMRuziUCGQNn2MJqG9yjUruBeHg96raeZAgQgfDViFRtZKie6kfcamTuE6ZyGRnkx",
  "key28": "4vwoCR6zTxQsPodghkNffMD7QyMCg1SFMdSAUwG6wozDE96YfbUPktqq913MLjHhXk5xXD89XZhVaG7MTzdo2ZnR",
  "key29": "kFm7CVJD4rJyDRPfephmhm6Uo4SMViKA2RP462VMUr2Q846jW2nn6YHCLMQek8yZMUm2U7T9D2C9cQd1AZStRb7",
  "key30": "3gc1WYSPZCBQ5AMiQGbDkd6CMtXdQiFguoroFHU3QJF8MBG2BLxLGwPgrRWWCy8TeoxL9R9tPFzK4GSYz353aDp1",
  "key31": "5G4zcA2zExKGcdVVPtAQnDnPREzeuFtQHJBBzHGcY5zNgvQqUV57jTZi7Gmh6r5RRuZ95db7jFgeVMqJSwdqMjqa",
  "key32": "TPxfu6uyU4tFSwNrmnRNxpbDzc28BdXYYQoC4VeXB6JYUPvG5tx1is99vV5cLt3kR2izFwY5VyhxRsxDbXg2gWd",
  "key33": "4xSgrw2SbbYvkYVe2LfNWJ1912syjpXWrGwBPQr49SJ6i6YRU1WCX1TPsKLdzYaVvmkHcR9VTmX4xWphQsGbXCb2",
  "key34": "2SYSRHWNxHHpBPvePsXNwVSYhJ5c2gw72CufeQHwTX7UAz1HPg6Z1pboMehWgHzajg1CjkvjiUX5BVcBhrPJoUJ9"
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
