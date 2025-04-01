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
    "5YR86dTScWiC21pLsehUom94ismk1Tmk2FbKkyKNpYGJMBQvTnpNKnZeXENtKcWgWv8kfyd1z3uSwKw2HaD52VRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvyrS2qzoi2YZFERux92NG81y5hYY6wkLqanwv4Q6DhYUiPHLWb1CqmJyxzarGu3sssM7q5p9UZaK827t4c8WH",
  "key1": "2YEEKdQjEBLind5ZxBpBq5dAz82cWvcbngbbHBuAYqen5fJoKUL61LzJamPYcThYT7teTwKnLw8EF7Po6FXrYkpi",
  "key2": "3VnvbnuW8JWEWAAjEZaSSqc6TApnGFGBCxfvbyCBLd8xHCNgUjZUTmFF4zmAsZ8jvMZyywdGqBRXibPdjy5Asw5c",
  "key3": "5octDGJaFN3EAp2PpQMZDYGDtAHCiicPmvwMJckrohEkaJYukx3NEof5eEbSuJhWGJgPBkCyJ58Yp5gSW6pyHNFy",
  "key4": "42wqUHFcMqp4EthmR7x9dBCoTH8mH9r45vj5yEwPHdAcEYVBYtjbmbMd6YqBviiraMhrmRcrHKnTMjrkFQ2MWTbd",
  "key5": "2qmpse4BxEhGqoAJHMRj2VBpw58JP9mNZTfPfnBLhvtbJsAgoMycvGTrtFvXtujECKadiWgG1FFfJKEzxkz3HYeG",
  "key6": "64FV4NnFYLZvcPDDF32qwmPFANxJUneenwtuGDn7wW5Pq8K5aGEu5hkEAxCDDRxUd2Q2neWh6dABzasndaJF5WqL",
  "key7": "2AozyK5ojpMxUdZaPKLQ6kyq2ECgLbdo6D2ffcWdrWwBwAvUELK3GdsKyovDEpoKFyNDZdv6fbFFt52XvsWGsUVn",
  "key8": "LhrEC4GMzhoE3iwuJby6bCHvRMufVx8sXbZAxCRbj6kgC3GSH2zSjCKimf2HoiwQGqCVan271yN93JjFNrdsgf8",
  "key9": "8Q28fy2Rc4BBEJbMbBjbKxfRqXAiKJkjx6sdUShYtD6STCeqDcU3sMdFzM2CYBkmEgaovUxTQMRurBLQTqsFfEL",
  "key10": "4RebykfbsnTN8iSTCxGrkaSNCPbNsAaKB8SHDqhXUJMK7HoSLvQyuALsQr6JP5SWTmTfwgC4ZybiJKcRuXectpYz",
  "key11": "4Mkmhv8maTPsFX9YDFgPg96oYvoQYL457bmJEA1uyZpo475t1ashbXyFWqydpoTY96yEu6Tv7qhB9rbuE6MEyBet",
  "key12": "4RHxg8g9Jpngc36EfmDQjtW2LPeqPmXhSG32BgNFMTR1sDQqJaPuqquQsnMcNenykkieeFXBbR2D23UUuS8HBf2Z",
  "key13": "42abauN2mUgzNm8iAAZHumFoxaADoYGNepgsPUow8HHuYpuJ3qHbqx9JMx5ndGJmoY1R2o98PUkuB2FG4G72C7vq",
  "key14": "3aVAKyebpSQgjGTToCqUZV1HyptEN95cd4jQ18x1XVqU8skNMQRh7iWcUB5tLYt9EYfXWNUJVittQzxSw1ACiYhD",
  "key15": "JbgbXaB8JoMfTpgpHQTmGNzmXXYpTtBEgDpraJQnQ4eVc12kgpCbphpi7jxZnXiS6XR2r1bikL6m8mFrapyFphM",
  "key16": "5tpvwzFa8NtoAkdJDNLpo3pRVfbEu167mwXFZ4KDHNaNd6vALEMsL2gxM7xzgcqbP7e8LKrgKzFoo6cNvRq18nXM",
  "key17": "2SVsfitzzAJ2Wqi31ZR6QnP5jQA5chUzjozhFLC5aRDQP3WDXYVSawR84EEKSwTLcCEnVBj7RGHAnF5JL9RmJtAt",
  "key18": "5T1kDXAFweXF8PYfNguQk6AyC6BS7T5K8eEFv32jYn9UmPBpMJHtLvUiW61BL5TL8k4LjrPNYDbZaZsNCRPVtvf7",
  "key19": "2NwQqMR6YAnAarGNKQFEZdyqm1Q8GHMwauQLmGFNZaWfyJaHkwbVoKFdqHByXiRFtzAe7nVaYTD634dnNNZKcPXq",
  "key20": "5912yQYgkz2QgRDBd3D8zPZLdQ7BcvgsHZvXZeEqJ4woKWL6QWMtdFgvsRuLc4Rbj255HCZNL9jESc7CJKbdpxPn",
  "key21": "4RhCc7NM81rygDaNwEfTJgQk6CjYLsqdP1s5pqJbbHAv2xkCoPuMSLWQi12JF2iqgMFLad2gLc8x4YJr1qVDdUkj",
  "key22": "58EtATuQhuoVEw1FamoxRGiW3dFH7oD2r1VhvM2XvtFqijpnZDnRuxEfF8xXM8d5CwtMrGccyqVXaqeGEeTrxnsd",
  "key23": "ruJZafYM49xaiDXfEDwbXYmCxBTA2CCigwgE1kFTPv8gNATKoEebaD9br6XEYvSzc9bzFTaofU5bdC3PAyvruXQ",
  "key24": "3cAepv6dLiL5zgJYuwM6mZHtsimCNzvYar5yCTUUs325VFAcbrfC6AHGuWtonbZx8fEnyuGGXu8wj4zEw9pR2vBH",
  "key25": "3s3sX8MpC9naEy8A1JBNTQWyq3k8GNobNRCL1XneZHqPVZbBVo1QEGoX5V5snV6ebrYUE1841yXiEHy2KEb19ox2",
  "key26": "66JSPuQ2T3AnBqCfEUE1a7W5fNDfajNaqnDwDgwvgcr6ZrRxf99H8KJBmArTGFJtKUJiKcehxRgabKub3oHBgxWu",
  "key27": "4zdEiH8RVjDczNaBR2YxPZS53a4uwvQf9KTBrFdbdeBdbuE4pRii3Go76GoSdrB6tewjR8dSnCHWQquqDsvTYqHe",
  "key28": "VkQR5sbLmeH1Q5NBpTFF8wEBLbLGTVvdAc3wpMaEHYgJB5VWTrNJ5csSJxCWfEoxnuUwXUQUYNnCVPp3iCMyrmU",
  "key29": "26seFtaARqwMFswwdg9YAfyfKq7NPEgJuw4HCEiHmiWd7JrKta3pXUgLUjUXcoRb98KqFYriapvvQ1KN5p4FnYak",
  "key30": "5pi5LdZivUTU6L27jGYjZdG1xNA9oQjY7Cu8Ggu5Zzdc8Cod38rsixoFdKHgp8gcMtVhYruaAi69dtgJivovj5Sd",
  "key31": "5EqSuHtjspeyTb8dDVSjPASGreiJ41ct2hz8ZjAuQWTD8DfLJFvpgXE6dbnk8vRt7mS7y18FYMNkt396YKsw2Y6g",
  "key32": "4e5W95seSX7jGX5eKtmtRn39vGawJcZ53oMuF7MbsRVjvUY8AMVQvF1ybGFAmQQYW3k9sd44kYCsK9bJmQNeYLRQ",
  "key33": "a4d6YeHtDQYDXUBB54YvG3h7MuhQiP9JrRSmx7tN1Uc49txm2dUKCb2QpRhww4GZz9pGk4DtTXmbTq5sXjvb6w3",
  "key34": "CpHcRu5KTpcr2w8a68CtwJxuDkUMPePCv2rthUfnmWF41mfw9mNGMnvmhq2fr2rW6LPLFoJPmH3mwfSf2TEEXza",
  "key35": "2A1c7xXkqu66e5kfBXV8DHHSDTHJpVsiJRzy1eCmg6cFc7TXBESnyqnUfKtj49YDPFU9HjzyuzwRFwR8GAGBhmfo",
  "key36": "3TD8J7jKhQ884ethDh2bY5tjjEmgikxLe5HR1f5XW3yGgE8dLbmWDrz4tN9QCwbtdTd2tZRBSZVs8cKEiQnFA7Vj",
  "key37": "3gEbyBEjgxwyZh9BZRg3gKGxsD4yyj94jGVL14awPfLiEAneXMZXiDpEhQfegmccZ31MkqBraduBzmRksQ3GnvmA",
  "key38": "HNeRo1Zq9YcSRTHgqYd2BBwzPyRtt65odqocJXNZURg338C4LzLapXpHgB9ZNj3mDSq8W6HyCXykTxtTEQS5NUA",
  "key39": "3uCoX9Z8ZVBZo5yrwbQYJgBb4stMdyKEpgc6x3SCQHGaecg2XKyuCJh2tm8WaAc5RhmGDxp4QxaKXNgCzuZY1AAP",
  "key40": "2r8BX65puhvTovXqhR67oPkYvqCXugLVyq4tBA2KngetMbKm36CkLkFsUTLGv4i73tgeJjKFqwvpxmnK55tVpCe2",
  "key41": "53Ma4t4hh3ocQDxfthcoAiEomXTXEkhjyWzUvVXRQPuKsESUzDJuQnaZYcHo7Qf4vGs1voF4tKb2yysuDKTjqupq",
  "key42": "5b8mVnFEmXswQEkQ9CbikUtGF4Pkbg8BvqUGhrxoRmMvchmqKgmpdoTYYF895TsmbpwgyfVyYCw5D3ihk9TkMGKb",
  "key43": "5zQ3NRQBpP7xa9hojhfEhGpyXNdgAvvvbVeDdeLCHrDCV9G1oW9N7oaEcrdHU8c1ub7tMsQgzwFHEBXPhSaNCt3q",
  "key44": "3ZunzUnuVsDB7oK3CwfhJBg8sgzUbgst4iirEDgheaofzbURF1qJQpdWGEiEocDjCUkG9vFYDuHRYoYXx5JfzmWu",
  "key45": "P1WXjaFu4NGQhHo4sqrXXV51D9vM5aPy1XW9RD4syi3MB32atXKBU8hyzbcyqSHuaM8P4onAcnNLXFA4xEukuXg",
  "key46": "3xq3DieNwXST49MxKppsABKtU6Uasr38w2pRb6o4AQPnHdzPzX4chP2saZj9zjpnRx8D5ZoxjnXNvp4qC6jq8GQn",
  "key47": "3bY1WgSJUZjpJFpGJgMK9c46bYmZLjhDQ3K84C8FBYgLYHjhEdehitjrz5iZ5QaLLeFvtZ6vEqphQbCPYNjzCtRM",
  "key48": "5txRe2XxuySfUa5HpVHSvg3tTbYwjpAHeompUb3tghDqWXuhji78TE3Chg3WpCpJqDNiZkf7iXsEPUaPSKHezk1n"
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
