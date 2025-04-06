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
    "Jopo9TgD59t7ZnPUTKp3wJmNu5u9RHQnCQt6KXNV2D6NDZfD9BtvrKMzhm6wa94FYSRtU7BH236tAgTmY1TwCX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kH4DhmQCjCFHBPAfo743SYAXWosoGriKCsgA3VamyckcFGFGNy75GLJ87V7DTBoTz4XooZUscaJgbwf7a7nxDML",
  "key1": "5h5F4rV5uSqrK3NsCvUmiP9cjfSjCps5ArhHiZr7Hr4NmGcYeo6e6FsYwDYVDdR2RhsBDDQJvtTQHYfyTxad9PUj",
  "key2": "AALokX5jr6gwn8bqbmoR8dNTRaXedYPviJ3jBFv1XEKN1DZGC91gVw9U2HQPgfxw89nZMZBZrYiPfnxpzTVhZZy",
  "key3": "4dyZdAsZUaAmhsAS62imQ327zrTAEVXYiqKhPWgNteQcocPt6Wa8FB8fEkvnAxqmD2H3tc5uKvWJ6ww9vrYoot81",
  "key4": "51okT94rphT5PMBfoL68G4yD8qpXsDC5nUNCNqk1Y2MLqoScdkjLFxbRyj3N5snFTqvYjozhjDtDbBqLVZWbVdc1",
  "key5": "3MQs3Zzj4Qw2c9oVde1GzzexBaeZBfyLrqP9U6uXLNUdZDZ4tibmz6otahH9yrDVhLJpCHKQQZw7sdjrnX1Mgr95",
  "key6": "4uqeMR4SHNrQ7BbXdahdp6k3R1V1aXyfKguGMbZtSBzshceWBhgzrLfT7kmNunHHSBXYqkonQnnccAKA9rSGjfeY",
  "key7": "4A2Qj7xeZAFqYeUWqLCKjKdnMY76vdFd4P4tTwceREGV9QKyXoMbmGoV2AjFa8TAUudF2LFZhLDGcpWU2LE22faG",
  "key8": "265pLmQsdav9xj6ZgKdwo3MzAT8Trr9GBUvVosE2QUFuK8jKfygPTUEsmEJi3ZqGVSaBh3r6ENh2C3mj9k3MHPgw",
  "key9": "3vYf5ZJ1extfMAZj9FvS2wvrUZKVSpXQmtoGiByGW2Nmz9JaEJSXbc21huJZU9uGDa8RZS3h76r2Yd6tPRpuCyR7",
  "key10": "2UtAkNKP3SHeisPkbgg7wgkvrv6N43ByKqpbReN3aoqDkPXBEEnbUs5VPRqCPiEEMbQpGRRdYEZGLGb7ag2srJ94",
  "key11": "49oyyR7mJWjn4SGwVuSV883342XnviLKBnsNaaZw1RepkQXT73JhwKLcoZwtVD4z8QZ5Z3V2B1U8cKAAoV67VMCL",
  "key12": "rcx9wJZYU9EKExMCLKyh4CrvgvTHtuti2EK3TkAL5MG7gqk9wUBDMcjPTAdnXYiXg71TiJ6ZjR9Gp5ZyiTcbMkT",
  "key13": "4ss6bmDzQBWVHnUt1epPVCiP9wbfPsLX9dB2UrwaCaWw5iFfVqXSxN3HfajMEQTQF1iJT68VCd9pUVDbJbEuu9qa",
  "key14": "PeVtVqXCuCQZ2aY2R8kfovpaKozhGT9knRqdGS5CgDC8ChYk3XKxtPsQ96VS26jTHUTV5h19YoKGiZd9sTRfda7",
  "key15": "QLNj1M5T1FLQfXinHx5yrgZUbHV5jPQ5UYi4pg2xPZawNuWJYGi5AQGYU6FWpaBP9zx1rHAyAcJUE5MdNB6kAGJ",
  "key16": "4NfXtbTTgfkibb5EekDZLyXncuZuwFNy9mD5kAUiy5rsi4VUwXe41qnb2TndnoT6ed5d8deEniaKhz8Ce9KsGp3G",
  "key17": "Jt8cbNMZYhSTa1byjrqS2d5RhLhDiJBfghYdRdAbFxPFX2wEZBPvHfNY9618Wo7LzPSWRhN7RyKMM2bV355WcYn",
  "key18": "syjHaHuM294BCtgDXdQjQAf2RQE5QoPFuuLQ5QfqVBAVufZ1CJ5mEqRcbU8u728cv6KKuiX4g6cH2PCZDZPG7X1",
  "key19": "FpfctdNrFwHFi3LNHjtkVTP22FpQVx7jz1B8PXceM4NJ5tM7h1a4HNcxLqykkZ9n8JFc8fViNjNqm3nKxxMhgcd",
  "key20": "vSmiM51jwXGhX5v1HF2JuieDbXy6tLZFS9wsprSPKxZnTj5xPiVfit2KQ1883msp1m8s3fuURUZE4bLXA8CLZyn",
  "key21": "3UTh8KhvqduLdDHsuspcWDcfpeSaNchkVfE4PJvbmnzXGTGBJqwFP9NLXFiKjVLpGEJnMMDuUsUrrV7dHXQfibKp",
  "key22": "66NG9iTh9FM6jUjrsdSGGySoYVLomkHMtnySnkj6xSacCkubasaEX6wmSkkJhoMAsL22Nm8Gvy14x74Fr8mPxzNs",
  "key23": "4F5kHM651Cf6bFxpJhBWqjkcycjeXmeFWUYinNVnrso8i4DmVWq4wF58VQC1q7MKA3FwV7RH9NZPm2amnyWxBxm9",
  "key24": "CjYT26CSPPWN71huTKkyqFPiqGQ67hwK7gh6tGWtoKfAWtGcWvYTd3uLCDVWPVJy2h2VtDmeiEV44ZwS8SwdcMZ",
  "key25": "3j3Y7AxnLSbbbqjVycGkgWxErHrTQYJdMF5wNwMopdUesVvqKSDQEhvZCAPcCWXhFKRDAyGvojcdQUbMuk6K6W9t",
  "key26": "2Jm71pfW3dTV8FDxMCQJwjGVhc5hZW7DYXa4Lf57xvHvupqrm1BjZaS1sviWa1QtarsQng3QoJ1TiP72MavAqDC5",
  "key27": "4tEJQ3dXHrHGtNU3cC8kz9KvXwCLdWDGyB3XpCq3Tcaz7K4kHo7mFYM9b5keDScur63enNnAYMph2ZNPR8hQxUnF",
  "key28": "JAesxcbtRy5fBub3xGEczdDgF8pR4YwKZCPsJfb8VMqivWxbc6ufZbYmR6Br4Crwa6aJiHrZMPdRcTRNDMuA7wh",
  "key29": "656GttjXbVMY5gQBhET1KhAtJk8LFxHXgo46iJSu4gHyLPiVsznwJ5K7SQhv3yfgmSKiXh9ugMpAWw5oEcqDQsTy",
  "key30": "2adsxahbEVUrHgttaekx5LU9itEJCXAaVVm2FBaSkTjAi2Rs7iTFQKzfoioMsJ6bTWdtqBU81d7w62n1cn7gTiTH",
  "key31": "Fw1BPd7iHcbF2h3TE4dRwG36QDnZnRJCB8ouPKxccsmR2bZWW5rLLrE57B6Hx56y3oxQhVCxWV5Z8s9cSxvNwDb",
  "key32": "4PBgsF3UQZ5vDK49LSdGSSPtENWFZLqDWHtkyVUYp8KUcwv9aTn5EKmfMZmUwWDcX3EohqpgUvfvBD3wGmRZx8ZK",
  "key33": "64RRSapSFMVexe5TdFriry7hm5KdfpwEh547K1oQxPcS3F5gaqibcev1FH2K9XWsyd3boC9et3KV1JMNwT3PRZcB",
  "key34": "8Gb331HJkJW4NBBnyG6C9Bo41QbLzp11kVaTTCjPNyjYAoxSzxJjYbYHexsTgSrZ7fbnp1W4TzE2rHq2GwstgHZ",
  "key35": "4qa89dqKuN9mfpJqffGJMStZNUK3zZeN6yd1f3jU5nrsPMzGjhZ8Cww6S6HM1oWRtUPeSukjj6twKeC8xD1j2qwg",
  "key36": "Mej5zxkxqE76ooUoCkE6p2aPoLtqXg5fWQ1ecoSZAvdcVAX2LyCULjXuF4wHkjHadBAfhVdWcmhZMWry9bqx6gp",
  "key37": "5jzfsQQMBBJ9LNksXVeuKDxiH5TYTXw6M1ogEJZ2zgTrRiCEYKHg4jWWf6ruepmTar3PkZzZeq4nvEtWEcUrJAAg",
  "key38": "4CTKb941nhbSZB8ZqyyCK6Zcmbe752D2NWePUFgHszEpyLaYKchCTXPmM21fbSiiBMg21Gw7RGS9otdcTBZ3s2ZG",
  "key39": "4bDnfEsua3yEcD9RTa1BBxTXCxfSazhbCzT6KVp83Cs47sfm2cwh9RhxaXTb5ZaPRsBau5D57o96FZ5hyB7Ubf51",
  "key40": "5yUZzG1UFe4zMQzEU5jesQENyhJkxdZmmR1hhgeozL8uTzyC9PgQwiTFFuq2nvQtPxc6otfu83WD8HVffEUNWZHd"
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
