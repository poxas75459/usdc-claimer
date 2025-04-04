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
    "4rxjmGXDgRwJCf1m4GykvHCRHJpqMq3fAaSCTCvx1SMxygX88AEx2frqPeyYETeszFGDcDAZABLtNmyS9qF2zEFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6gZgVRYeoTXAudFQDijLc7vgb3y4amshg8U56RWxyMiJiwFBMVqcr12zEBFGEzLV81hxk3tFsPZzCgYtTSeB69",
  "key1": "5Eg7ypzA97tE4YXECAzNCTpPfpxBxnrwxDbyANFGTniiRCQHM3SyFLjEExRgw2wAMiwBcy4BMaxptvi4xQFh1DYu",
  "key2": "4eqNnxbDgSqQYH3CXyM33FpZHXY3qVGUpmLt1toqSr1fkHzJxGMj7xQSAMv9EfNFzf16Sc94VFTYgnBmHu5tFzao",
  "key3": "KXh51EoaXFn7bEUwY5iv8GGieuyKrTo6QoaTXecTh24eHhrNHHA2hhSCvAByu3BpowzdnyVsoSsGm2Wd72qqf3h",
  "key4": "61TR8wtRDZ7DHPm56PAC3CEhn2uX7dW8XN7k8oZ7NRJpPfRtjBWZKcefviXzxoTQ8TWSQsVFq7fzbhCQ6Ly51wcn",
  "key5": "ANDs4gLum5EAVLaBAaYoHie1vyZYtcEVmWqZBckXATN6ogT7wj8Lq2q5WW6egA7UmyLgtANok3B16XLfCbHB5ah",
  "key6": "2DvZKFSr4XoiVxDA28vif65sQaL9wXGpSd9iM7sRXF9baJFHqKkVxEDJdJV7hhadM9X8LmkGLczXqgq4MfwV6cPv",
  "key7": "4GxSWcFoWgef48VC2VhaekGrxnnnb84EwTXPgapD4uwrGUpWZE7mtRxTENMFFLeL9W9dYoJwrcyikwcpnDRb5QGX",
  "key8": "5oTc1n3GYqUj1Poj1yo7eVMucBgyEkq6Zg2tfr4raQKBF1ECXfX73DZbHV4SzAacpN6Ti5qbBg15qwkhb6R1SPiG",
  "key9": "3xLjBFvbwWgPdWQdToyDk1ucJdtrKb7ifwe44VWbiCjAjhTrBPah3Xd1Z9NoSf79JCFi61T45fm6zSb2uHRFZ7yz",
  "key10": "3tiE4ei5aXbgA8GLcX4kfh7zfVPkRYcTsk7cnY79J6yUti1osdBniu2FW8y51DTahY7uPvmmhgshtsziRntHoJvU",
  "key11": "2anTz5bHLhYRVnwGZXUW1D2Bw2KnLpsWV542yp9W7ghrtH59F8D9ii9bUqRaYSLqWAxx91nrwTFFp3wKCodxZsqX",
  "key12": "5EEXkrEH6ZLdZRiSLZ4DBgVRSUFdkWcXkZW6pStQWTM3nWzkSWgDQizJj22EWvkPHtfZCZUjFbWrWNgEiaVuK8z8",
  "key13": "3TExgxNLAT53g2v9Qoihftp5g7hjQqfsq4vFsvRToiaDbCpLrVgu3yTcuKGJ6Xuvr7hhBaTPA4q6TqYRX8PTSj9T",
  "key14": "3b4Y7HUogvrouBAANE1WyvpCM8x3pBK7HdvWUMtfVkjUiYiUqeWGRFiLajHk8xVphWY1wuwGHFY7uyRcrhhtz95X",
  "key15": "T2XBBm24baoXeBD6p1VaEhVAPdhxegYWxmmmZWxpvjmUwB5fTyxP7n3VAFEYoeq261C1e98rQnZa71rWfpE6NuM",
  "key16": "vuSnPfqfSMZNW2DPJE6DRvtQWKtXhMhqgN6LPBxwYRtmQLVj9pPq1NYEX3213unbZ6Eu8Xgq7wBJu9ak1dDe88M",
  "key17": "67p5WDjhRj7oWVcgZ1RhxcQ4WQCzh36e5r1QpVeEhH91HwGwYpnQ6HwzVTizeFv3obdZpwN1bkLNRVqDUa1eiLBu",
  "key18": "5XoL8FHJandermv3VqDU6jPwwZ5DjHFzkPia44HVX5AHEfYXRLNT32xy6na6x4GbKKQjLKdPRnr1fG8hSuGvC4GN",
  "key19": "2PzntVo3D3J6PHwrskxxeVE1by8Z625xZR7UzPzJk9MThjPBtVgXKoCDmNpsKbsfUuS6bSEz9Akbvah4JY6aU5XX",
  "key20": "54Uh4wyg8HPE3N4Lz7Gzy4fvUeNeXcdVssiACWfo1wjuG62WuLxa8CfzBQcjPCVFUgmK5trRfNzMYnZoPC6RJerU",
  "key21": "GDx2E4iMvQEKfvP4BKxGfGnZ8tXSdinHoTtbV5dW8RpQ5j6EBnfmqY8HdrDD9esMG13bzjKY3SBhRbYdTnV1ZGo",
  "key22": "5dJu3YZ7wZKfPifpCeqVob787NRWp6U5YU7nhPrwyJrRKUay7hK31DhcUTMFDQQG9ddXg4wptqYgT1uCUfpQvLYx",
  "key23": "3CzN7GKud482vRQi3Lunw6Fa9vKSf7wFDzkkHnJ3XT9qUXext4mbDZawA7Ka1QA1ErLSUVWkiKp5Gx5vHnNXp7TH",
  "key24": "298DvUXxivixQjyQScmdVr81BJLddWC9DzgAMMpj94k2pdVcS821t8CWroVaYpvRmiTsHtRBbans2K7SgGYzrUH4",
  "key25": "qMWi6YMZ1Ag67WyHboGRsUA1CHUkKU2wEMw4rJYKHmH62Xrd92V8MjDdiVASLvVm7SAyu9UmgPwy1BC1K6u7fAv",
  "key26": "Dq5ittBzsVP1nePTJaDMLB5svgzsgasLEcpsAYPtbyf4Wt5uy2fXnVWqBqLxdjRMrNahkZdsKFEe1Lr5KF1USyK",
  "key27": "5FG9VqfbpH45BfWvxxtDtTXBcgpjCXbBM3XrEbSqeqy5tf2fvE1VxY1MNEFKycL96ztEszsoJLiF96tfiKLBMx7r",
  "key28": "57cQwLdKBFwsUTCuMc64Yg3iUutrJWxepBEyChNPWJBt4gJiqEPCQZVDRX8gc3mUu8GFNomkmo84iyMcg36Ak8qb",
  "key29": "3trdnhwCkkNu6uJCpwYNYK4Lngwo9ecTBEA4wZAybqQbqVrCWsPgu1pUQiVNVXahqmnrjhFnc6bNMu1CoYUsVpRZ",
  "key30": "2hLfcTnWhAmFW5wvhT3DLPGUqFQeKmW7W2T7N4XMGfJyDfr91sbdZNWksPPmrFPvVnmB831ZnBJtM5kmVF5MGDKP",
  "key31": "57FyUYD68q2Ub4SoY1uVDy1zqPiXGnm6Rxad9LbRfYkfC1q4bU1GsG4dY7c8h3dEZ4gDf4WcdvGsjCP8FF7LPara",
  "key32": "nKLz3Dxdtig2eZ4gniAPHTpbZd2seNQvE1skhfg1sNGBLgfEzsMJYTEi5ivCCtNmU3dkWvdKK47JXngej9jMKus",
  "key33": "2fnQ89DBJgykmxVK3YpraSdSCnqdrXgQ4PDLTDRq9VWnidbwCNWAPf4vwn9ML6jiX6fL1NU3L5Ezd6KrCbKuEKLD",
  "key34": "WfD8cN24LkWTF96cVcwVeCpbHVbBJ4STtJmeu2TWiDixKbDJti4UJmN8xGWAXGfkj4J9QWhzkUfGaRGtCpLhHmR",
  "key35": "2xQG4BbMxZq2HmKAFwR85hW74rgfjKRioF9cD4kfbTShqXugXpmd1x2NFX9zHKniZj4hxaQmMpoUQ1WcZ86Rucsf",
  "key36": "5eEhsfgDFLghw5miQgLXa8PPw9kv9wWSZQoHBoY5mS374d9SzgfBaFVUDrZiFtvBcNNYXDZ15Rso2eHSA1ZV7tdb",
  "key37": "vp7QE7Z1QqJjy3E2ojCX5mcV5we9KgQmr4xMrZbM7QuyxsXNBxwAwvq2Gvf24ytz5Vc1NpgWFo9VcoVPfLSmmmX",
  "key38": "4reN3ytY4YaCwXpv4a3ukcHMCCZp3xBJg7eCetHrTLQw4Sm6xTmUehuRCK3Rcs1oLaHgLFRwP1XEWSz9Zx1PnLmx",
  "key39": "33ZCFUuBAwEZ5MYS6cxCPWgdmwRYYmUZ9M2d8tcjtjAmA5md19tyGDMSGV7NJrQJzy1Vh5v2sw5JoWbwoWfAAdsy",
  "key40": "Y25MseePgBmL6B319cMh9SsyGXU3bHEMw1Cfn7Txxqmcpm4dj4t58q8WWNU4QvctzaoyJ8KdMkh2DzV2XqqxZ5G"
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
