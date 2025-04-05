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
    "3EZfbbstd6VN9r3DY94qJQB1UMCtMTBR2ppNaRAr9kBd89hj8FKxrTVMMrjg6Pm8H1k6BA9kBFCXg1SGWRrm37Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftK63fNMr72MqG957QcmvqpYaCx11qMRA36XBfRTcLKFjNFcaRG9BuPhxEGRYuyyxDJuXqjwy7bzMaqvFRMfdH4",
  "key1": "3q337cAqac9QuGGey2Ecc47M1BjVmNrynPzq9yHZCPxVh4nnknZNGgEVnUbwui46BiChpbvFiFtwarV7BznBsKD5",
  "key2": "3v6Zn7fdPENnaeA4n1gnNtQPVPVWB13LtjHZuVabdrkjr3QSQVPr3s4YwUTySZyor13bii5URZ44zRXfAxSerpv6",
  "key3": "5qp2sbftJPDnXeZN1HpsmY7S7zDJkoFQ4Pqtnk6TgqfsSd36eHFs5tbjnGxLKBMG9HTgVa4d1vDZJgecCxaVQt6p",
  "key4": "2S4mhsPdxhyui9WjcaqRBtgCiRrqw6cSbGCLgEYUFHuXVPfdEpRMTcrMBu13tjh7kCeXPrvumPXrooL6t9ggPxvi",
  "key5": "5geqWvnd8JtyJf5aDCgU9uF4QAMn5BDY3PqVu5YrVALF6bd4WrDJp23uQ68eBZozSs7xzFXdkhKcwvTBdq6S2xex",
  "key6": "3NBdA7y7zkcL4EhfqTFzSg6PRv3T9xZtfbH1T2uh6knaEvvzk135irTjoLcJkcgBkZKhAfNv2ChPdyaQaGAgcvYC",
  "key7": "3NxMqnfft4VXGvEW4AqCDGzZdZCjPQTYU9jX5NmxRmg5WLF1PGDHu3XqUeCxJYVFewAXinZWaquftD3JiKvDRHts",
  "key8": "2CMfhgaTuhGvBASn2x7rBoerXXkgGdWmkkVw6BqDntWoponNiRJ5ek8PRWW2vp6ao4T3rZ8bwgmoRosMJzcoScvU",
  "key9": "4zDKVvQGtEZE7aCCkgms9MUFpgmdgxt4KX3qYWqkepLZ62vhGGLsdjVPN7RoEhKTXZmJWF8RJjVP7YdWTBjcjMFh",
  "key10": "2E7HR6E57ohtkNC7gXvnjhgr6F4fA2SpH4tStey8vrs8Yf8MZNxermFtUkvhyBmMb8Jvd2cJvRnPUWt6KLwoNVjX",
  "key11": "44WmM4nPYo4b4ruEeis6G5HDnsf5VNmnKk2GrbqCoznSHtDjvmunrq4N4UsbnkwwfLVGgRaVYYGD4jFWqTWkKjnT",
  "key12": "5mQjdwG1ShZ181ig9rVS9rRjgcuX9m4VofdifnQzRZKfkW5XEbTCweWVAbbDXoAUN2bYbdjSi87QxUXGbXGK5Zzk",
  "key13": "31k3SUqL245Vicont8zCa2Mq5h4kGqUUUqY4y8DyrhTcZ8uhVvJFfUHREPbURWg64PEaYJ97eeDYF8HvD8eVfbko",
  "key14": "5U4SGf8kZbPuTsn3xmYYtDLNMJszFF2h5YabNpVDoguivfzQJS4Spi9GKEK3J5UkvgXbSagpvH58BioKWaHa3yxv",
  "key15": "4nyuyDHKY5W7pmwET8qqDGXVce8LxJDLu1jHgmkLR4g5SoqEJMjGsiuZCrguEePRWGEazwsMu6x61bytuD1G6em8",
  "key16": "GrzbCqiYEZ6BF7Cg7NGjB2J1tkLkvSfpi8e5tQ3ZwezFqPm6BMtkhxuiFyUYB45RLMKyhLUggRzYRSZs9w2N1TE",
  "key17": "3Z5kPYty5r4ZFMS7VtgGkhHNKKyRG9K2U2TeH4H2CmFRRB5Ar1WntZ4pMrMnGz5coJqL2UhiUZJoTy9mYRdfyqgw",
  "key18": "9CmF3p2dfRz5PUKjJKPPtwbUCHyyHyY8VhMSti8Xyi8YrhTJGNgg48kpyaXz5Y1nzcTyiZjwCPthoeWx2ndjvPw",
  "key19": "5hmtfaMMzZsPYQfSDnPefq64Qj8RhqfoWCrwjyKA5FtDCrXo7yHXHxqm9xJzhERkHjdacTn9eHdhnPG6otJ3Y8YD",
  "key20": "5xq3fSyyiw4kzdrznTQdRatce4gWBwb8X3AnEanYEBVHXtcCDaQ36KD2BD5EidD6gMMUMC5v7mYRgZXLuWPXGZP2",
  "key21": "HiVfQUKZRnAggnaQbw5cvkhrUT8NcazkQTvpCiZmEaL89ez5xzmC72kYaxoiPjU2tKbb9hLuQXUYXLzxW1wnYu2",
  "key22": "67Js3j8GLmXibY6MEj51TnCctYooWtmoqv5ndtaoD9T5QfGspgnGFKkrV5hmbbRAH7iGBfiYqWswm99ugufJbuFW",
  "key23": "2iD62JeXwTh4YmokhbsGzh47E9KwVeheE5mNSUevAMuvN35f9Zt9ie8zAyiUc1U9XxkPJPbuJYhPdq2rgQUPLgEV",
  "key24": "VXVvyD6HtQKoJzzE5tcc65kRGJUwXWXd7LqJFxmx34qd6akntQpPHJqEtv3hUVhuYhvzat8W9uumXiyEVeXZ6A3",
  "key25": "3PVmgqadZj1guNLeym7P9VCDo1zAFLZ7dppbQvQRNpWV1nm68qQCk9eMfAcUP92iEL8kBC3P6NPuDnu695ZTwp1u"
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
