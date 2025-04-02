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
    "4qVNpAXCLr4kK73tDYg1fGKnVrJYiZcL5J53aKAwfnc2G3K2iWsZZPMhubBQUQkVuopheKhRunFgicRU5T5w4Ty4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNj5CjwZfAzVdVsXqz3CdaA7cW49mmCSZC9wci2YW8gEA6aQ9KqM99Y4ycA7AZXZdtAvet3qgePxGZAZ6iKCLSi",
  "key1": "55Nw8w2xJ9WNLUJmKSo7jpxvTwkcYPcVmqb44buckkwJcPSHnSCgrmKSxggpYbBd6Qrr2bnMv2P3FfKzURTL6Rey",
  "key2": "2NDWhk5YahiCsUVkkciDdrXqUX3dgjDr8XGMi4syeBxv5XQAaqmA1r4ULirtBwpruHMvkVfuaLVjXVF5BUB4hpyB",
  "key3": "2YmkhsoTqbnp6qZcKkXajewbh7XvVti8QMqgjwfPN4AocYdruK3o3MmVSuvxD1kmKB8Ednok5sRiFndGH5BmmpsJ",
  "key4": "3MyRe5EPMbzthpm4S6sjjVBB4G9fRviAvK3LLC7z9CVaHnQgBtACdTwAJdBwHS6nReW6vWzmqu6gpMfV5t8sqFn7",
  "key5": "4TGVYG12Pw6MujBZ7EAgceTKvGrQ9gEMDU8F8HSeaP3cRMDVqxZ2otSCnd3Xh371qR1rCu6rTuJ62bxCCipRifHM",
  "key6": "gKeeBNFDWornCXKchYJvx9mjxqDkhBfJgpbZRnRtaqeghgawtKSzLawXH3qhhAG5UTLLkeZi95QPc2QinDXBuYc",
  "key7": "3DdjdgiKGiMhqBFGiaaC9SmmTzbhfkfT9f8Mo1Vs3wN8ko1Cedi59Q7csEYGJXcUfSaRXzn1RmuQeaC4dBdCuWDG",
  "key8": "4vMUpTEGxfwB53uBViidTWD6Dq2fkTZUbjNidNccdUDstTdVny6Z759knUG7f8JTLP2zNob4mgdL9cBQCoK8YbVM",
  "key9": "56mK5wy9ruPSzbd6oBX9jZEm6kicb4v5oGSDkUHjjmkKvLdHRGkAsVZkKDs3RGCdWj45RQ8nQRL3ratrpbbqKPHi",
  "key10": "3EhSJAokaSQ6xkLJHm5k8N99bg4Yar8E9p7AXGbfazhpvukPVg6MRGX2BhkAqiS7MA2iWvLMfvbLBpgHaSXxzpGL",
  "key11": "2eJjTftk8CixaSBGXBiCXZkTSsiATJENzo7y45Lwr7gq6Vg5LZPHzacj7bxZo8mAUpsnnE7me6CDmZogrsJL8paw",
  "key12": "4LJCCgKKTa43rxUtJWUcLUSh9cnHgsC2g2HZnaRMzj5LaTGH86a2fZvkFDp33Wceuc3RBBQYh3u29UVXS2VGJCtA",
  "key13": "42YUX3aKrfUGNtjD4EskxajHdfjjopt7qxt9pvgRoyRpuH5yK7xeNLCfxXvs3LT6XkjrEWJMeR3H7YQXHR3En61Q",
  "key14": "5cdkNt9PQtnmLjcKx3FR9VjCwr6YksmMUcpVBXuVB3tvkaXRVwYEsAsQMW6RykP1pBomFeJJe3DP3Ko8XStxuC24",
  "key15": "4NmTfyW4WW7ThQM2mC9M4ZuoHYGZnK8UE7CpsGySmq43vhhFQxw2fGCQM2QfXiahBr46TWCodVVfxzrwt1obiyCm",
  "key16": "4WL1ZhoAaGS6baqNXFaKYnw9sc9j9TUHUR73mdd45wFAUyNSvRL9GYXbBmXwTABCLG3AsBLDxx7Z1W61caA4FVzf",
  "key17": "2RgAGmeCeaiA8f6vpdikdV4dLGm4uMDhiwEMpeJAJAscBtS8ifjWvQGyb1bVby5CEgJcAREZSZXyrW4iW36onE82",
  "key18": "5un2QSCPfqy19A2cky8WNeCmM59dBS7Pjoo4p31rSNYYFKU9vjFA9JwZWdfraxnjqRDbBAZ9LU2Xm3zHc4uSeR59",
  "key19": "2m7VjyEQiL4aMb8zqJt16m6x2m7efPbqHRGkarWVXoXBiiUPkSFMpPRG9a38XajtFaKymxvT6wVeoZrtGHkcKYrD",
  "key20": "AanCy6UzJPv5fLbtpNXnNtCsjE6VabrJSQhQB5293NxguYs1QyZ1cQyutHu1hBkEYzzYwaFZxDNEuh4KGniKLvB",
  "key21": "5Psc6g5Se9vacFkyFTn6nY3xY9QahG9iaXU3BZzQtEPLWbnbYqh5JeJpKB5dyf1veyZGDQL8rtf4AdP5dLCNk8nf",
  "key22": "4ybVBDfcjMDo7xCUdGFpk9RLqqzdyrDciTZ3xcgc6Po6Uug2SCzKL5176wj5SEFS8x2g4SR2bBVeUJy7A5n1PA2t",
  "key23": "2DFf2oPRp9i74MUhqd4GneKUNL1aVCmMNF8XsuECqChS6ASe7C93uJrpErdHrgaGHDktJHq8tgPEiV4ektZNmeDP",
  "key24": "4tKGecYozbamJ4YkzivfgyU2qk3Kh2J7EGkEFvBc8zrjkaWiF3d2d93zJ7oEw9mbhQKkFKYCzFLwRrsJHMDnf8PK",
  "key25": "2bsGJAxXGgqpofZhGESyD8fNRJ4ZzeEez8ym2YLxiG51oEEWCHjWYtc6ZVSVbyLQ3rABFvYDdUwzBYw2ufiRjaxw",
  "key26": "2LB5ePr4hNgdQFLvHgjmVDMYTqf51JhMUXZepvxdupTMs4tJ1GVvjg9ozxa2RpH5Ux7C4JdwDc4hTRZJEcUnoLi1",
  "key27": "ziVSvxy8qpaxf4H9H7HNm9kqS5VYumipicSe5RZsh1AZ1zcrxJ6DeARrmVzEUS75kLSEAXDwsYT57iuoii8jHZb",
  "key28": "5Nu4m6YweJSCTM52tgWt8q63D1cJpQ8Kcu3T7qeS3rhg7EU5PEGHf6AcKXuL8GFYXKabYdqsJjzVjLyL5WPvZ14v",
  "key29": "39tozqMnxCUjkRmYHG9xc1rovvDd4kcHeQ7wgDN7heweYeCWr4Wqr7CLd6ts6tYpcPmPUptYgPyB1jAKJCvjGx9C",
  "key30": "ABnFSCT26ecgw2sdMQeDE6bvuL1XoDjRyhTQTKzBb1TKfCqZxzjy87F7kTi2Em39R8L1c3HeH3STu1aWiwfcpYR",
  "key31": "3npwqkqfU5pT89J19diKiE4xhpEvy8TWTyjeMLQ1DacYTqo9kfCNY5hcPERdoipafQMrGjPDdQxgeg9h9vvREvB4",
  "key32": "3ZmJLNb7yHE1wr1pAnQdJku15Zo4tymqjNJYRo55qr285XW9mWMfKLRxFBd2cyuLmSvvLiM3MKLU86rZkfRPifXe",
  "key33": "5vakPXPRsAWHhckomwWsYR6SKbA7JeJqfpE4rFE8XArXbP3zgdg6pdhtFK3f9wcDyRu1zqXR3MsNkfJ78Rxi7xB9",
  "key34": "34uvxmEqEiYGaGv9PXMnSmHNV6XToFkKBR91CVmC88L83T1TZDnPaBudVEEtxEJqW3noci2tG7C6uqHfuxeVm9rb",
  "key35": "ehmzQdTrVrDjHpsCFvR4ZQv8ZNasDyyEaitJ9xd63qRVVR1Q8ngsVpKSLeJGxibZK7Z7nNewWGbyhBfE4UyqjQk",
  "key36": "XLxxoK9ufPdgHqko3KRALBygn95utLJqcxeqfb4orTBTQB5qz1AXqhE6iSL2evuW5L45z9go9t7gmxFPriRupzN",
  "key37": "RsUG4qL3JZDAC99tWPcBCKV43hyREcx7988Y63uc4zzeKeuxMzofT9EHBuuXxmcuNKHtBqj5r6ukmk74GaA6iqV",
  "key38": "dDyNomYdp8sK8x3fHHb8TKqMWc7mxN7ZXCsruPZkApeCwfE3ASGfLEUVXePu9Vf7Xg4NmZoHBmHyD1F5Kdr3riC",
  "key39": "5EHf3Fmryf7kDDZfeANw5t4PBCMahdSeqXTn4Ch6mAzEQMmJGYTZ8vMe7e5pH4bng3NekhdBjU15D6unzkh8J48i",
  "key40": "4geNVrymBtffs2zUnaAtgLbrQh6gFHMdVejWDUMqrnZKB3YHAEbVJeA9Sd9eemdzBDAaCNDqYcAEH4cK4XvV7sGD",
  "key41": "mPeFqo4UCuFewAEMkUfYWxgZc4LFPzWqHwsG9KFYPbzbAGnmEkzdV5Wxdii5F5PVqzCFE2GM2wTSgti7gFxY5Nh",
  "key42": "3rjDTKASvSDdiMLqp7Cb6yKJj3E5uqtiEmXD3tTrt4wmFHUMq63YjCvzySKJqW8XuKRxrU9F1faPkx86FBDG5G2o",
  "key43": "2dUCPTCJ9H9KQ8xMUBren1Ng2gWpm9dU7Z6WHyTiinYthbMbV6bmmq94d7kE3bgWZtiR3wTwMKndRBrawPoNkM1m",
  "key44": "4gjvULSYJHh6brgq9D6QU94zNn33uo7kLzCRDnm4dKT1W42Ymj1RCjUEswa6G4kxvkTjefmz7pXL24SZVrBUMmqU",
  "key45": "3nWFbruEA863ZGVD6gYdHX26pJntj4XzrGejpZTXkAWEVQ3RUhaXabus7VdUdjW4S9fxqxBki4MRzUCJXtvTnEgY",
  "key46": "4VkuzkKRwSNQZbXmxKYJazGD7zQs1REV8u8FDVCXZdJiuLqigNQ69GNqfGyW1SHJytoBjBzSgBCotQEs7EdVwUAQ",
  "key47": "cdj373wtShgQN833Y5Yqi268rykDEi4sFB1yAA5pSdGB5hWDfZyi9UCSf5zn7BnYE6DJkZN1bZrhT5ECdEkAUru"
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
