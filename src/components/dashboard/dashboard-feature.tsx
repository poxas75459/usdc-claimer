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
    "5Vix21eK2fWujuG1ufb2nXxkkqCzxPkmaE69ZgsNzBoQQAoVm6ZhXuTJRw5dHJYeVVYATr2GME6dksnuDTucuuv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o1ey9kdh5xwCzx7j8iGHy65qLUGBRGW8EookzcWKcPJckFwvc9Sf5Cn8e2K6kdAnN64TfhL7RKzDwFuQY7YvyaD",
  "key1": "2nVzcDjkPVz4tmNEAp361gnPYyN2nWjfhfdgQFteGKVGBaPpfjiTTt3x4i1yKdAv2YDP1i4nDjaMG8wGePzXbxeP",
  "key2": "445aZDxXueTr4WuHYfY8oFECsfE6PJrV1kzqPgLv9hY1ADHEUMWGjLuNgYatiVPb5tgj9bTEfxUnGNjYCx7LMPQZ",
  "key3": "kUpcv66XrMdop7wkCMbsCjEfTCPNE1k8NotV1k4bKKPVWm8CKbdRhA9xZ54dHc8jN1zqU3GbMwh4aDhVD8C9RrZ",
  "key4": "4UuVx6kjxRyAHfMbyvrkBPHc7axtQAX4wHqRqFbomLXczNbtJgvUqnADHRLvJuvL2BMvW8RvVnrr4ntzMUKn3JSr",
  "key5": "2avcMqRLKpsiu5Bx8s1jTzGftTKkihksULUAaYJpEMks5gK57E79W7S5V3a9V1y7DWke4RSbgfpfEWk7NT1fEHZk",
  "key6": "56ZQ9qdjPvSGKD4zG9dqBEprUUa1GEMfJzUJV6Bh9YiJusDiC63ZeNQBRHq1nwoPLxsB5DUWsbuz5KtaagYe8Hzg",
  "key7": "5nCagHem7AzokaeX1ckcx97p8dJgf5RYULYq4hTy6XmpSsRBfSz9SMKe9tbFmrAHSBij8XfLTFyFS1qjBUaxLGzR",
  "key8": "5MJaEeH61yP6Pt6MNr4wAU19Dbj3KHZ861L9geviiSUah9e7AByDKjNRnb6HUBdzKijcMWe7jnXUQEXr1QkGSL2f",
  "key9": "4r3P3TADeUXR1qLhtrwr1B95G9wS6kj4WhxbQ2xqs6KYyynxy4xYt7A7G99C42waizJ4Cb8mptRaX44uuUZ2gf1r",
  "key10": "2ZjrDjKFe7v8KGWDCtURYG4H23nbz9F3oA5VuYTwGmC6LzChHnKGL5wUc3k6yaWdyW1wxzWKEhBhBnJfjv9M4PbP",
  "key11": "29uzzrAMApJaXPVWJUXC6vtLMsHdDwgAKp7iUt1AvhdPah5Ap5eTiqv6VT9rxyZb5SHXNoPbeAAQS5RB2CzLJXuG",
  "key12": "2HK7sCrt9ykAZr2YLgtiMBLPiEudYULN5yJCRHaVA3roRbA6e4gpKTA8ose2PqXM2HBzkC1YTh3aa54hh7UT3TGR",
  "key13": "qHv5YigVYJJbChpquFm8w34zDVqqnpJcW6Q5G7yM2MrburjXePKscR6S3zdCMjZuH4tp44xRhydtgp7yedhpPVW",
  "key14": "4AdbdoWg1hxXVPsRMH9ZXjywc2hh87boYri7BBKnXAynk3WipTcwyD7EcM1DMP9XXNvCny8c895ietFH7BDUTLL6",
  "key15": "39dHCK5RArRXJssHJoCuG546EXqTULCqXHpQ1Qp57HmDcY6mRcxayJY7wk8sc3m4jL9rTYd2vr26ajS9M9GjM92s",
  "key16": "4YVVoUmxzK8K9FqRPmLocSYVSeSjDoN2qiB53rV3W5VQLGDqm8TGxNiSNmFTeX8XEGYVjSHW94D9FkiJ71T59pHF",
  "key17": "jNtuHEMZXNkZPk9GVji7yJR4tTmJG339F75DriQLaM8NbU8Jd3eYPkX4FrYZUk1uxLpdKeL3EqxB9wDSmJTbH2F",
  "key18": "33VFsaCpkidcftvCYekEvE2iX7t3GeFXFAkoTzki8jGyz6QhHvdRyqMYBSLKH3CB7MuD8wmQfwYGfvTvXYzoEQWG",
  "key19": "ksUG2wGkBqoBqc4MX9BncP7v4uWwMQGzM1h6H81u3yFUAfGQHhTxYDSXTKEDqAi4VTLUriSw7dNGJyx2PyJXWxC",
  "key20": "5AVNYzkduUUY59erNTk6e18Wo7kqwf8E4FL1BS88t3vAbrD4UhBZmL3dRVQja8yt5rMAnxCkFURsXNH4cvtcFkpS",
  "key21": "3TbffJD3ipJfoMHwbvGhMPbKif2ZEQ4hUWwX43vWoUBULkNm83kBP33ngn4m9pJwX5evq9LDto4QovFXB2ZQkTAr",
  "key22": "3km4hewgR6hDh2nwSnoLXfxTpu3TviXNHi6YNaV9YMAv5VcEBzBdzqW9XQfTNKBroQMT4tp3KyZ3UqzkjubP9jv",
  "key23": "34xnE3piad4Lxd3NSrLFZKMrRcBEbRfhkKWV42WLPHUY63pBYXmh1tub6ojycfjwL45nKayWmqn9FEywb6twKE1v",
  "key24": "3Gs76nZZxwSJyknFkjeuqVSAnPJhcJB2SS2G9rf8Guay69LQHkShUiTmHMGSt2jA27qUbEeGKcRoogX7kp8HA8Y",
  "key25": "BF5RKj4wtks7qS2AoQwNMa8SzSikNktyD8a3MP7UBTEQTAdiofmyhxkCt9u7FuW9G2Wxq7MnKQi1zX4venPyLiv",
  "key26": "2oLrT7KNuVaPFLEXxqEnq4PukgTHXwZZ67UNTJCQ7SJs3PsTHoUHeK7LAyUhe2GyBydLcoCYqPejvXpPuAr66Jcs",
  "key27": "4mm2hbUTktDHby2EPHmeqw81fNv7NMxTVofct36mJqMBAsjPoH5cRZSPjh3H26xMshkMCPH8DSQLQmxy4zP6PXJS",
  "key28": "3YxkUFyKFCFgHDm7z1hybi191zPHimyL2xxSS5VBFd7SN3BFSfgtGKDq6YRU17iMvWnbKQEbKD7kuhHDN2sUcA4A",
  "key29": "1m31Ct11Nc3uBBqzxbZQuxrUEKeGxW3cAzG1DsMu9nfxBL3yrshWiCLYwVA9Fz3gDKpPZaCswRaUt8GAftf3pPs",
  "key30": "4m77XB1edeeomUB6irpGCwi3CC5swmPdTezYoMY17NSUxK9FbG4gy7kEHX6jnoFeebWK3ZukCwAzPEXvdcvAEpEp",
  "key31": "37PGw6CQPZgZaU4XRpB27buSGUP6EVNCjfwfBubx9eZ2KEPDLhVErYdDH43Xky8tH4F1PdxAa8PE6PrMBtByLnUx",
  "key32": "6Ns5nb7R1oHk91CxCYzWEGJ8QNATVA8J8ZVZeSTDqMXW74XrkVJDDPDG2sPzHGQSnVaHpZvWy61EoXk8HZKi8nx",
  "key33": "9XfRVCsPzAyqL1WJGTs3si5ij6P2bDtUZ6tCRySsz7borC6hmrjoMyNzV9eYBY28NdF7xDs1aDEPuXcAV37fmDi",
  "key34": "46kQhNtA4JmUKmvzbMMc4mBf5f9H4i8Vk93hii3Gy5HL8yJTx5ChnSk9bTuvvPftCPrDoTUGtbpjAgkTTakzT2AE"
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
