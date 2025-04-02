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
    "5hHd3tYWAh5JRv9qtKq8K3Q3QkANBGoKb5vSKpvWbCG5jH5VMf1B6R7tS7YTJUpLrfFNSuyxa4HzccXpWvuBNvwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrXbshKGEJ4zTNa2ayjdar28Hk6YNSgKPCJYpceinh6Dd4vah6F9aWuKedncrbzCEufh7PPBcQwKvNuf1YA7RBc",
  "key1": "2uG56BVGsg3mcCYPXojchuPtgjzahyA9QDrbDHKG2XAagTS7rStW1LBGnMP5zg6MNkktESJfWBoLeSAJaJ85dxtd",
  "key2": "2kSumgnqsVHH26Tst8jFPtQH319XFHzMBezsJDqvh2DQKwimVpkWynnA9vHgp8DSa129WqBKm1s5CpNYjxptUTGJ",
  "key3": "2Li66vzFaPf1nGSX3zwXmed18ovpKD8zmyjdwAucG9u2JtwP64GqKgZTpj594WCN6xshnUiAjRxFEPSTZVs7Lvwk",
  "key4": "654d45VHbeUsvjVpct94D8j5ETWZJXy99bfRijT1523iEHuTVoJs9aY683xGJYBCwxVmEwVycnyTC5LF2ncYbUj2",
  "key5": "386Ao6iv4SzxBZjc7Kw2seLBhmKnNsXZqPJP9BHRxB5g2wPadmgiqrU9wU1uMgzbgnms9ZJrcGFpLLLEo7UwiKrn",
  "key6": "43w3avvV7hzoGqs4xVpvCqskj4zaSpHvPa9rq3iidPqj13GMHqzXHkVbWMjzTYspyAGqFRCBF1p7cH8b7LF1CHs4",
  "key7": "4noTqzbCusJdoBtc9sNLrVLXEwbMgrkQkVJ7GTU6b2V1C1UGqpdZ6YHrN6EKkLXW1V8NeNfTnKN5z6Y6feY7Nqja",
  "key8": "FgGQuyG8vGeWiuDmWoWZ2SHW1L2f5zGNSpPZGWLeHfp6VsXThyxmyT2KvSFTE2hKDB2CcSJiLkcBpXTrAdQgpna",
  "key9": "45JUjbdUR7ZxpG6ydUYdLzHJMRDB5hbq1SCJ685xVTokixCBxR8V8Sc5eLutMk4PWi9X9uQNDwNSGJS15y272fMY",
  "key10": "3wBFUJedRaVGfsxqC7XibCxekyasAAVkg6ejRPeHNVRGa6Lmh8qJr5YEdkiLeZzw6HyhWFdHmMxKdb7UVsiKfWwX",
  "key11": "iGwRAo5qzzfkg58uPeRbGYUutKLckyp899RXcbKeRBLHGXRCkLt6V4g7gDtVF4cQ8CchoHUoJf5kpJ16UpbgsWw",
  "key12": "22DjBdmsVip9h1yQRsnxDE7c6Awt8GFCoXn6FihGTjLevjRoR3dR68kwdsV36qnjTkNGFTaDQhxxFGYuC36Guau2",
  "key13": "4RjWtQEzrZPtCUkKFScVQZxyBE7mwvm6dYRGGmhTknBcG4CNZKfd11B3BrtufjD3u6AskY5V6QPqSsNEU4hC8s3B",
  "key14": "4ebiwywky3zhLSorbXBsCpR5V2QHhLQuBdWrDcnrMz7rtZ64sp3uEwYNKqT4CSBspyTwH7ZyNCK2GVRgL7XK1Da",
  "key15": "2vjQAzJLCteKEcKqwAvr5VEftx9Teyg5F9xufPofL9JVTuRKwiYJbCk86ABcnGMM8qHNtEZLJsTwegELbubnJukv",
  "key16": "5ctEaWw4wbRY8pQCxKN8wrnThtUKCYbcL3nfVAQkLz2MjJjDdVEozLm9n4JUVEibJc4NeX1YuJsVyuRpEfkZ5ghP",
  "key17": "4Kjs4hHcKr1UvS75hSzxXRBGF6PeTG8kAbBGqD6rHnMDM2aZPiucFFd26xzEk5DvxKvXEuL5JEED4PMPBg6JitRA",
  "key18": "4EAeau7JbxPCGVyHUBx3Gbi8VqWu4CpJt7LzUuRWWFgSUBdDrVrmEFewjKiJAYcLL3VcR2jGzFgmBk3FSq4ZgNdv",
  "key19": "4VKfkBpevJWU99YfjrDoJDjP3XhJBJt597baniAfbiSZMHAGN8X3edZocNcsCKyAZP5eYWHj28KoiWsFfNPv4zGR",
  "key20": "3M8YoDQEK7NEMabtfwYYR9vf49VSQnW4LRcqxxP2dRgQEDjKHPYyNNdJZvGWJ3hcqgG1McoTs2xKG4sKVGLWnvJq",
  "key21": "6EsLsYM5mJj62mPDs42KLv9fnRGh8pibfhVprJXfAHLTtitqpL5fvxzm7vGCKoeydnu7twJNizQt8xuWUyGDZkz",
  "key22": "3xESNAvuoUw2HtbysmSykujUTo22FkTJYjdxf1upg3MKAXyciycVD94TRw3c4DxHL2B4ZsMKJbXBxcomBrVMhDbS",
  "key23": "4Qi5pSDaiDVyp5kqFyusBo7A2uJPPku813wQnqJbaPYpEqBRJCQvQ3VPXykrRP5ZKYDMYsC4C6h8noH3x5w1PoXu",
  "key24": "31Rqb1j11GQ4fr7u5JrBbnhYWoJ5oBkDyiHYh8UCPvVef77tixKmaTMhFnJ7BBK29GhqQFhRN4TUSB4jos8SJFXt",
  "key25": "4qJLpRkHnj68BK1yqWR5VVDqhthiHqvhW3LEJ6tDbWHhYLuhJiXFqHbySyLPrj1ShYF5JcZi1oMaxrYcrEDP1Vve",
  "key26": "xviMz7cGft3uumdVPPcN9K7w2ULBDGkBChdP7NqUedU6sjFd7X7on2oCeU27uhNWAhwxE8yV5ELyidvtRufVxNs",
  "key27": "4mEHsVStTL1MF37c3L3hPuMQD5Upwp86HV19rUUZU3qB9crkfyneNEiJ7bJjwkVpo6aeueQbBDPkfm8eVbaiLkjp",
  "key28": "SrQgRGhBgkmgUoJXdRAP6hND4V1wJ4rv1AxRzZ9EwQm3ZhShNyy3EyPx7o7K5Vf9a3ARUN1QTiEmNaVDqdrAfdS",
  "key29": "3TtfkWEa1nmsr5V5QR1AA1Yz4UkYwiNbfAzuW9fFPPejrwutnHAkVjbY2sankNHPfL99VFvw23VDwTNP11eTab7S",
  "key30": "2byS3dX66oykraqDSKEMkRRXbfx9uhmoJ9UNiKNGwS3ynktYbPdeufnVbDDCfVuWeVx35j8UNdXVbWGTLCj2vqga",
  "key31": "3NYkVwTxGccPYWkWnQT1o2sajCPVos58T74NuwpFEaDcpZ8DL243HRDK1eJ46Lb7aU2QJVbe2FJUNXGbXBWtEgJo",
  "key32": "7JMpPKqSdPK5oRbFFL4MLJfjbwT36cc6ZFtdBQ1kgihDXhGj7divcpjW25uoMWc4DqZWsj25TTHNtn7a3KWC5Pp",
  "key33": "2C9Akimjoa7456sANC7CHq8YFfnoCx7URzRKYvTyTWrb6Rsgp3ae2PnsZKrCdgSqtVhDhfQHkQawcmDSf12MKnvP",
  "key34": "5YjfMgvRBHi2QU8C18k3p8Ba7vhVAJwYzi2FPdpwECrEyc9gJjC847JvLn52jLiHQC9QMGLT61mH6fXrRt6vyhxw",
  "key35": "3Mp65HGVtz6J4zwLhM9abQuSnhAVbWmLWmVYNScTnaUSs4u3cwRmhcM6KS3qhJjs2o2uiNiw7CgdYQvkgYynxWpq",
  "key36": "2ir4vQntaJCbWCzTuh2VYfxoy1Xt97LJWuVgAkeJKSzVWS4JTcCx2Fz9nTv2ceNwa7ty83zM5HPda483keWZQUVa",
  "key37": "5PDcpt3y2hMBpCY6hzuZ5V8ZMHrzvhUcZ26ToM1iJqPQHHNkkHzX73GcVYxJUGTxbsqMXFubXZdRPrxZfdmKbzst",
  "key38": "3S3hgMK5LUoNMgyXC3RUXrze9MAPzMSVBsjQsBmtL2FBzuvqEsvNyN1XWYXWX8rsJRpiD7f9oXtLdjRp1fV1hFQr",
  "key39": "34ujufwGa6Zq1kihAqTfh1pgcdZXibKNrzkDY6e4CNVMRhSZNBjBFnYStFt3L7VKmDtCMQce6MFFAEd6V77kpQio"
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
