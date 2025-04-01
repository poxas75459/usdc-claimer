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
    "2zZ77uiuXGMYsxjQn1BxkKcvCCdamYALspsUMC27ZSUyWbQ9kZrtqp4k9Rk6kp5dZz1deGnJ29JdjuwEWvDQu2e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6LHvgyq96TCV5ukb3XvMPGrk3jCdM6Ck85NQywVC29AusxHjHbbjvaPiSoFnMUQH6xHjboBXe2gYZva58TzvA7",
  "key1": "34rK7u63fy3fgczisNJwwVhLyGUi9siCmif7qVKrH2bB5iqeNLYGupHQ9CMXb9hiBiVWiJigMKTSG9RbM66aVTQB",
  "key2": "4c538V1TPzmRKWMpx5Yjb141h1SD5rnrCEGgYtQTLUHGJTQQH6nkqt6YpcKGNiS7FfjkYfnRUvRpr85WDSzgatcB",
  "key3": "3BK9VA4abGbHHrQnNibzNdWGszarGohPYiG3uGne1n2jhEeLhX3NFeewpKgz4tKyae3xfMmipQYe24LjLFoh7irh",
  "key4": "V4yBJQmM1LGfT3CNa9W2jeovT5F3CRbcYHPyvcK9H7oMHygodjYoshm43tJcA7ezCiyGbwZM4qTFi4uZLYuhHrb",
  "key5": "3QcK3rGTL85MgvV5bQpJB2SY1Kss7cDqoZzMew1YRffLQtjqdnpsUfrexrddXKtCqueRWZy8t2nSAweMysddtbV1",
  "key6": "4Mh1RNT7eiBhSpuh88yq6S1oH87tvTCLBBjxJDmWEVgS1rJc5VPNc3JWjWsG5aodJmWYwPTXg12TaQwdwszvM8oZ",
  "key7": "21UFwG7xh9LvUbzQVMYkfmMbTFrEd5rE6bxJXJGYv7EM9zMXtJpoDiDtrCKWea144KvG8A3w76cZBpM5FDRBrTg8",
  "key8": "4qSCiNnZ4gS64ALAdwqzVGCFRHPWGs96xo7c9XadK5xKsjbeFtEfQnTi4FqPcQJ7VTYJ3Dt2eHSYSf5apdBJhrrG",
  "key9": "5eT3TdAHiDJaxKxrLe16YkU5qVZnML9KexKAaJ11xi5Y95pReUCvxzE5LmLUiQkmmqNNJjBHf4L7TA3eoibLZBeD",
  "key10": "3zrPcGnphN8iZmNiJzi59qe3B5HoKYAKRaMrt7bJoT53SVvoA8R92MGN9Yr5pkzqgLrBfoL6DtBbnwS485rV3LhY",
  "key11": "5LQKjSVzNXUm3WHpahn2gxWv79a9fCuB6u8D7sznEDHELs88f14kFhBAMpufRF7ayvvv9epxaGQtNiZUkFnwzNYQ",
  "key12": "3N3ydHurZdGTPqfRzHgaz6cKsBPvudGDGE8KzgcsLeRg9Xz7h9vrnFk9SBLCQkSuKuCdjJAvF3JTEK8HLppqRRCd",
  "key13": "mKA4CNex4vpck5YVePUsJM3eGSGv6msnH3RcXfGoJxY5gjLNwAouGc7fYK7x61YGsPH9dcsSRncLCMypbM3w6ey",
  "key14": "5sjge2SwMr6Wzc39PJtwXW6bpdqBMWvn77RmzDAhfZ6j39BCEDVCpKM7jLFtsLcRfPwBB5Tb4p5qQqa6wVXBFnZK",
  "key15": "3gsHzJer9qvs3ynME2D3Qv49H27fvi3Q5coE3pF8ovLimQnKDurh6fzfM6f97Vi2aWuKcp9gj2LjFRLhBTh8NSSB",
  "key16": "5DfuXc6Ee3sxa9XgvPxxuNSsbfhHd6nhuX92q3SQuEtB1dVUQJRNotbhBa3FXkVqTFd2Keki7DaKexaZm2beATkS",
  "key17": "3kEr1NvzzdKvQ8vdP2JuAqAwnVhxzE25PSj7xyhPsLgPjjQWLrtUR9abwtEktMXNfYVgaMjwcJeAZLTRgVmnTsS8",
  "key18": "4Fq12h2rxN7J8r2iC6st3w2MBqLzgiB5caBCqGxyPwnPCsd8RKLXvQrbSrqp9sUp1mLenE4Rj3Zxo8jxF3vESw8P",
  "key19": "HAuqaDVwkytGTiTGMLGrWYhar275V3LMFxV3d5zWpa1vLayfSbZ65VxBLaoU2ABRW3SHXjkja5owWhEcyjwiVww",
  "key20": "61mNEjRXNnMY8Yh7zKTcHbgQTeBKLukDo82cXV9esSAgYXrvp3tQSf1vrJnQ7AL1Cjbd6uusC8jRW3w9DFe6zXK3",
  "key21": "127jewdCXkoAM3h5a2Lze9uvhrpKNxDpXPGsrmoHrrAkKJ8T4gWS7HPRkkznYaKPmPqTnsGnNBK7KheFvu41a9L",
  "key22": "5qr23zaKndTqBXRYU1MXwxgj1kfmKUnWxad3zrRbQgWBWAG2FbLb43b541gcivJGr6tNbNutwDgdMgpWCvpQBhPo",
  "key23": "4w7BbiYAXbPMBqVumPj8yJ8Le4XYYYg5XRG9zcyyBUD2wEvJCERTxnVMqtzXtKoaQ2THX5JwmgTs78cmUaZ42e6",
  "key24": "4Bra4vdhBpZ34TQ9S92JLL5bmRKo8rGXfDCFRsDhjxzhgqL8FEULCASmCXhh757CRtDhdCsEky1z5kC3BUU5D8HN",
  "key25": "33U3hvEoAVzFU6175HrQxNCi5RPds2KJJ8VMZThNfEhR9GgKxyFTV4A9gwSGp4EdVbKWwgGvHu9SqvV7HHyAJYyy",
  "key26": "3RuaS27cFkyPAzg23ypZWYYTpUoyEyuCHYNoHZ5BonZeodr2L2kbsD2C3aJhjepaVCpG2rukUp7aT64ZXckjhF84",
  "key27": "4muTY5ihFaweS3yaVt8ycUSesf1E7D2QyjZDi1mz9A3E2ZLNCE7RyARrWPAxfpZZuYVPjU5LYUZU8ixcsic3ADsv",
  "key28": "sov4rQztxfW9GZ9kADSjFSyj3enRkhut5DWqpujEuEe1Z5NYa6A8z2qUfDE8JkBnYnzjMkCF2c2YQf81WQuwrsT",
  "key29": "AM8Gak5RJDdrT3pN5F68doTLKm6b3h2x6dxkoogR2BNZ5RT45FC4UjVQ1r3aHsMF7jfZJEPMvX4YiPh9w7mw9mb",
  "key30": "4vaN26QpxorqQPRC3bkmZkDGs5BAFZTDYKkTifvMxhjgEQt14FSKuV2XhEmE4QbQcjofyb36LxUhuj8VqC7Ue3Dc",
  "key31": "2mWci5kDYuW42f3uy63kzAWG7zuz5zrMWZzij9RwvPsjgQQDJifjG6xhzSTrRA4ANgbpahPbVpvfwfjZ2rYWjkdL"
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
