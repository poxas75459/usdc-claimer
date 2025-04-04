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
    "2gRE4Kmbxg24RhZfL8HNKGCznuYyB6oQxsDPf4u75WfSiY3sH9PHvvU2jXC7p4UWZd6XewY2g8grRRZpzJYQbpgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWrE5vXzGAqGGfzw4npAnUCEJkrucqDy853mn2gbZpYu4r6dUHKngMRKByG7tj6WJeaGdvoaxZmKeLCZ7A6kzZq",
  "key1": "4FQ9xwyzbwLuCTsJ4zpwxFKg45awzeGP3URigxVGPBvkdFkPqqwLx7MoJGu7FkxAgkSDm6hHHkhX3tu1GVtn37Ta",
  "key2": "3zvrJBVWRt5gWj8JQXykxJSf18YxTC28h4mhrhbHcwwzRrHtUQasuivjmZj7Y8ForGcUqkfPLqytqU97j39Z3Svq",
  "key3": "2issSsvDHssj9KY2knRxqdeZRBbRVBgHKWnxdxhxGiWucFJPZRU3q79ggQASeTznNjHVu9QFsN7LfMQU2LYPtcBg",
  "key4": "4daqxoGpakXWNyzyCm9xFXrVUGFduSMozPczYF5L2QU5aLfzckQNALoeWoBRtTsmEMPY8KyNHhXbD9wHPneDDfXF",
  "key5": "65Usn1kMW2TYwUx76hXzFNe3CxGFG1thyosaMmwChTN2vJLMDZwKAzLvjgvjnS5BGJzCXPz9wNDoqx9QXnRsRPxP",
  "key6": "63xJSyB37p63xAosnbi9Gh3udnqCFh83M7w7AtMhDsQsHcrdvgFNJ6psU1mcCrACpQFeSs7Rzz92hUAGSUzVjKxB",
  "key7": "5ZX9q1LbMf9bmn4wALf8fH8bc4FWmLaW5rRG7X6yfBeSpG7NNSj3ymqqcbVmU4mvAbfVFPJtvZRpCott5KmpL3JY",
  "key8": "2igYXwATxLkZqJNgeJWdACpzYHfDa2s9uMMq673cAFgeUwtrTifCpz7Lsot5mqEfr12qY3wVGEZ3HKkSZ37188vX",
  "key9": "2bZ9pJcde5txPxAmm5XR6yzQZjf1Bvf6qqDEAzoxh29Qj7B8SHxGUxhEtEPwwHvaGCxpwyhPAqXJAUaEDugDi2hG",
  "key10": "2UbPpAnC23dcivZC6LgstXik6ABfsHACPJW1vxWHqmuydxBPgYNctWNAdXM1GEdqzC9MbrDa3bPmQyTU4W2EGPXQ",
  "key11": "22qKEPNepDQwgmTPp1ETNNVDBfJoaLUcnGh2hjxL97wZnek2EUxz9PaazhodRSKwaC8BF4gV8pdBh3Xf32k2REWr",
  "key12": "25uCZcXURW2nrvMBVp5dS3ckvrpkABCEotuB8FopkYXSj1nadjzhey3wpTBnKZrCrHGuUBAdNC2oCKNKh3Bqy9dr",
  "key13": "3u92oGYq9fGWCVs7i2qPCMxuw31iM5UYiGw42wAYE4458BNuKWiJgeRxBEX9vEjrx64ZmbFd1r6dpc6yGMjpVArf",
  "key14": "4kxiAQQywJNWqDoWiztumq1D7PFycGSthtsCpVkm6VpAcGX7LK5LoPrDTzjQGxV5GbLr9kHuaeQzBo3pGRW7Yqdp",
  "key15": "3US2jgDCd79hfeYNkxGqKsx8D6MadKnbXjd5CmjkEgi4CsUeVKdDXTtVvzYJGnjU9z5osTFfCG5F3Mt75BCbtELX",
  "key16": "2sUXN6EqisNPEhkq9ws4CN5Jc9ZcscaUqR88u2wdr682HP48b7H97mqvXVs17FsgJay2NEk7cHKbxgLsmwQ94YE4",
  "key17": "4hkUyrsMxNsgWcCYcP4SYQ3y9gR8wiwtSQUSpeuswGR1oMd5doMq6azZ329hZYWrAw7vTSRMXVM1FYo1GPB1KiFS",
  "key18": "3yLT8REAEwcsZh2NZPNVG8C6mzMVG1wcxnUr4XVZRjuT3BZgbfsX7rb9iE8xmtHQGVgUtP8eeGbED9buAK4jDdm2",
  "key19": "73E9ENmDGtHmozkvsbfE2ckLAyM38XMaDzDkLyrnXgep11c5bRAngi3JRk9J4NfDejAPXF3RyMwizyu2KktMCzi",
  "key20": "61vYC1fBnTYQ1gPRuZZSmdv2Y5YpTARi8Sg9GDptyPHe9zkP4LACxEXbuLkvLzerrLkACqmomZ85BW8XhENz7Gor",
  "key21": "2vV1d6DLaoLe5n1zT9ktyhoDiVixxuq2k9JiYFNKwJuTmdE5aeM5YqANxKsZUwiesQ8krVJwAc2iputoSVfe17yx",
  "key22": "5GRLSSikhgeQAbttEr5q82uATjurY76v11imcXsD9cG996RpZJTRYcpECro6FNquRCYDfF3f5TvqYDWC541PzSWY",
  "key23": "5kYvdKk2JxLfsTgXNQVL9xSxzeRZVZazJaKXhbWbhs2FTtbDoWQ7zeqUAJTn7qtetXA2pisajhK5GYCapbkw3TM9",
  "key24": "3t9VuWE5qj6anD7LSQnKwCgEBvbPzt75FmyhpuzwnzSrkijbat7btvEsT8hXBy4xrQBViL8txutQuYPrTFz7NxVZ",
  "key25": "4aKt6nJjDCwLSmVDJ8kW2hwH6WsqHTkijSxRhAze1D2DQ9gozhvZzwUtzWvJpywSasY5vKuT22SeeathcEMKxr8X",
  "key26": "3Fh5tWbpQbMBjJVxa8fmMLXRLjvhnfj4UDtZNwf79PgMEJxdgygntLcW8qHLuBzKy2yrBLnnhsHhg9UXTvpBihT9",
  "key27": "5TQZdh6f9vCGQLKWy8rFVxmNPuc7QYuCbVfm5XPGimERfK5Vp4d4orE16gq94jap7jcStakouXQVNjUd1C1fVC2e",
  "key28": "6WBz7bRM89m29pRew2ZcrgzwLj6yevWEyVp4dVnvEt5v6ahcX1CV29YPYcipZ6tZPjcirBU1eBtWpRNNx9V7fzZ",
  "key29": "2wwyvneJ4BZ3ArxVizotwKLF9SxSKY6cs16Lw12nyau2iGpXucoaqsEoCp2dgQVH6qbtJN54S8h9WehxHzVxAgMV",
  "key30": "3PFyrQnug5Pgi4QczL3RgdmbCzo4p99w5KEXkuKA2X2CA9QqXPcsG6u9cVyWFKHdgY3wmseYoUdxuXy93JReYvpV"
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
