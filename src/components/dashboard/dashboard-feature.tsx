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
    "2tmeboH7PQCJcseKkUu4CFx9LciVR3YDBPQXVRY1X63kCuLSbNiLohyjisNLaVLDg2wFFUQ2QQHZxQzC9a1ohbHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TJv31WfvhFi86VSyi24FiG8LHw1JdUGFfW7CEPvicaPRjwFwsMGpykyjDcmkc4vSY7t3k4taNyGxmt7WFnvqFt",
  "key1": "jb3A9UJPSAqArUCqkS96YMNgRc9D2VsM3cUvaWcSsbRsdePHHbCPWFGJVUgz3d9yqUExP6nCssZtm9GQKu2ApGm",
  "key2": "36zveKXKWybSw8CMawgvzg5bvFbb8YRmx4J7qYGhzoAU9ydSmZSW46dt9tUfqb6KwweF2855aPM5yygxRirLg92i",
  "key3": "3yC8oUCFNFVSbduifoznbR59GqhFAentpBZTfRthfSsy4r9L9zZ3rxDTh5Pqq5GXNjBJfBSeZpBF7c8cSCyjFqA1",
  "key4": "5zJvkPqethqVkNvy4wBHEnV5gbnXY688Wpq8nWm5DptDkAB342Kwt39hArksQqu74diPrXWqSiPGK7kUJu3Gv5eD",
  "key5": "38zspoL6BzziuLqqvNexfynSZu8BEx5V4FgnLWXLCtrYez1cFVnUTb97t62EL4zAwbM3bhBQEw31gnizrTwGyLMF",
  "key6": "3GqWK7pDaBnVNBheLgx1GBXRirz8yhQdGyFebDLrfcNpom4D3vYE9SYoeECER2rb3pfn6duUKYAGxyy4aJePVdu3",
  "key7": "2bmMX9rw5geABgYYgxBwT14ZRgPsQgaBzrbTrpezybD5MDfZDTFi7kzDTny4UBFGgQngxaJSPAsqxc2BG72Eminz",
  "key8": "49RydjcYjbpGF1JLsTCBMRuoBjEsifU69tUtLNjowd1MZmoGq3kjH4SLsFE8ynBAaxS6jjkwJYLs4s7FTcJXQDt1",
  "key9": "3VTUJKuXeM7cUdxMGs6aYxgnHdhcQDqSwP3nzhHRN3RgbaC1QDjNz7HzEFeK98rAvrDbUBzNtxjJeR6vkJjPsA8h",
  "key10": "2A6x6L4iZJar2bfFkKVgDTKYhbsFVeVLd5ekQoL9yQ6vsnsGHp5G6Wqiasz9y3MxemAfU5hSs8AZBTvULiLB2UNG",
  "key11": "2CmJkr9yfbwrvyK774ybBXanE6zHA6ALrwcVFyBq2M5GddGWprNDavPDxaXBMZ78bd32LZ428mMokBs9V37F51KW",
  "key12": "5tErnpSuybdwQ123Az2qCk6TS4MA7iPztfc6sCUzn7fR2GMeDQZWmkoTJEaZ4zfMb4mK1Aa9cpHGfbXZSXYiB19g",
  "key13": "2xe4rAheJ73qWsqFgNLN7SH5RDwzJx8vYHcoBdjhfKTqC1NTeZRt7AtdpsGjjzCW8cYDL3rYfqdXEWgfYbAvzfu8",
  "key14": "5EaNrHsz444Lh1YocoW97VBQkCuDEfjjAf7fnccRXdy7VhtCnYSNVjb5BUD4huKZCmW9AECog9E2QJ6p3H3dHGi9",
  "key15": "4R2vJdZodDyZqfxE8JgzG319c5nKV4vnutLjYME8fmZaYXQffMcnHwpPky54ADBHrMyceujESawTVim6wK84rsQR",
  "key16": "3JSwdnEM3n59mMrkiuD9MB6wG9Ei8NNvw6ChYL6BZQ2Ck2prR65fXbJj656PxkHmjFm3cnjTWTyjXiWHRBMdAUAs",
  "key17": "r5QivFHxnAC9jb8vHTgxtxW5czR8W2TZq7sXChqoGCVaB8QtbDUCZMqX6EouYfmzhVWZnaojRQNDzdcAuKcnsys",
  "key18": "P1en9xBcbCBU4JuitaLpp7f6FXLybXjwT6jKnqd6uxk4cCKa4n4mjLJemP5YKe5mktQK9bwaX8hLvLtyFbj4PSX",
  "key19": "4sc3aWNFQw1tR7cqet8t6ew9nUVF7Hqi8aYn7YzSxo7tbCyMjmwGCFwH317Tb4HBYPJ4ZTobvnCaE5EfxdY93tKB",
  "key20": "5F3rNAFNcRDLVCBnXpYvKHaJkWGgb4YUUa3YEGuHjkxx2xTTMVEmrdkc9asuXGNvwf9XfqfK5eAEunDmAC72iLMP",
  "key21": "2PatxfgtL15tR8MCdjmu6ERvEQHULFn8uak4J7zxVPyyquteKFxGmnCoMyKursoo8ar3oEz6jhirMC4GyMXR2EvW",
  "key22": "3JcxQ8kxXrRYLANniKfSLQ9nQ12QqV7qyqoMjeNsS4FQ3n6UWLHMwKMYSXXBGtJ5GJne2nLxjGoddJ2P5UvCHoxp",
  "key23": "5yqMjtQafDGh6dUV8yPr7ETDZEnAGYyisrJMh7dqXprPk7i41k2qwkRfYkBgiDKZVkEzTwzSnfckaDyb1FbUZHaj",
  "key24": "3EzQPjdMFvk1Q8VDeX7wnDQ1W5NxpGVRpxRo84W16WFXc8grwpF993XCgvqxhwZtpP3o5XdZ8AHbc3SoQzrJ1C4a",
  "key25": "31nM8cWyxMSLcAC6Ce6CiDVo1wEew8mWxM5JMuQ84V8nDBq2ZR9XVhnLrPUC4dvdBseMh9PssW8SBuycJMV1fV1Y",
  "key26": "3SVDJVycapCy1uQddAGGbWQm8VP1qpEPtwD4ugw5a5qyXNJASEmsV9uhFMyLWBMkzwZBqF3zp25FFfSC3DVYvbAs",
  "key27": "3U2MjpFotLc7x449KETYh4YeEv4WMu4EmGYah9SNiySoB8wb3W3Z1rFBzLHg3XB6jdkyVCwS9Aoz28ZWFBx4H2uw",
  "key28": "3uHovHbGkgaMvVfx2vxDU4ifKvFovCSYvXBUemGsCi8phbXmy7PjRned3X54ktjVfXJBfWSt1BQuLiSB59AqbG1A",
  "key29": "5UW6jbrvPaeYoU74EVWxcBaQufAw69vLyfgavNoodhDu4tDuUm2VvqsiEWcEwp4TBB8aeWgU4TpT96kLeFTGMunE",
  "key30": "3L7PhZUPkedkA6XDSRv1y7GHnaUUt9MfFDJYMEnoPGByTtCc811koAfu2EbfHbUt4sZa55SSYQeFv8MZMfVy22ES",
  "key31": "2JLBLrc3FbXVuNosqjSKJsHSLeZufyGDF4KuPek1SJsEKQnNXNTJjVzzNRYQ2dFt43PMrxZBiv1m1AjPVacMkQVT",
  "key32": "3hQw15u4F3F3ajju2ZokiiALZNoGMnG8BBPiao4XWnwALBuqPEpfSwaRa9Zub7hpvj3A8pEjgwJ3BmZLYdz35MbJ",
  "key33": "fSNMaU7BZMf9rkjYjvpMuufCWFWgesfgqtH5TMLbZPuMm5TNCcdNNiij1LpFcVwbAFtEgMUMFRnJwSQZGqGL1VE",
  "key34": "2QFcpjiUKg3BYP8agBjsKzuniQgwxvBBhrx6WyaqciCqMQ64T5bZtY8K6GE2qwvkJACumLSch3Rk2yjY47NJuo9A"
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
