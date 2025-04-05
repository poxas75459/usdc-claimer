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
    "2YcYJVZMWdHZtMXoAvjMCns4fXuHJt5DbCXQiRNKbmxQU3jG5LsRQsLJKxEJkE9HAzNAggkr8yv9UYDDwE8yPfSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Jrwqe4SahdcihYtDQncMe7JRGhz86TV9R3U2RiRjLxP2G5baNEERBti1pU6JQpzpHZ5xo7AbtcnJBzzfBagnke",
  "key1": "gSVXFVKETZXK7KmoYVemem4nqRFSTZrAzAuxpeCPD8GGoYfMyxUp2LEAKgzLof6agmEbyyLKZVrS9Ur7aTGtTcF",
  "key2": "31wQ39VAk9HktCqPSDW3T4Gi84zKMooEsSDRogjc4xTpgsNoBr4ArwqfzoGHnaewjEo9vEbnTe7KJMtqohoWq8m1",
  "key3": "4Q17gkfToPZUy8j1ZjTbLmtrkuXwV2taxBS7HcbnL28DUHfrn1KSuqtNtApGCNcHo6b4ZMve1eP5Ujpiu7zC1mgF",
  "key4": "37fZBLct52TKDQ4SYYVTYmEjSuxBRtxSsksCGnB1goBCTEmbaS1XSMWseW4BfggTJx8D8Ls9Jc3jFKjhaELYAteG",
  "key5": "5usznqsMzAqKonuztxGxhX5EGK9EPHUe3vAS9YEL69cKjTdJfwmEb1gPQ8p7zn1H8NvXY91o5UqYiNGrcfmDa4eK",
  "key6": "3pmuH6uH6r43JHU8sibUkeNC4A8RYjmYLr9VKK8r73frZTZW4M4QCSvNTNuQsPPqyCKeFyMAEohhpdfRb35BVEX6",
  "key7": "24ehJ6U94GFApsRBKiwVRP6ayFdSpuqzTqxXpJxiibyMu8MtTp4GYa4QYUD7PCJdinP2FVjyrUNE29SjvigdJ69A",
  "key8": "Ha48Jms4ciNjxCcfefr8fs4tbX7tk9W4WodejdmKN3g3ZWmahy6hUkFwqNVEc4qnEQMQLkHzxEzetVVKmywJcZ9",
  "key9": "4XJ2JyY8JVXCJ3bTcxMVCvu4FNZhcSj4y6ZmFAotER1fVmLH5KxYRiVNMN7q1TmCAMvH5YNHxqEb6Bk75zE5eVEy",
  "key10": "2z91Lt1UoSKYpACLBvUVL147DY538Q9xbbM2GXeaqqbXRxvVufHta7vs9bfLUV7NGDrjdJWS5ECCvTMHdRQYbTVb",
  "key11": "4yYDMTW5DE921nawRiBNDRvHP89kji7GtNvcNpxWXKJs21aeWo8ahjuh77aNk1CSSN7NEyRijZqVU6eAKLB6Fxi2",
  "key12": "5x85VLghhf1usKhnfPzpA5ebFDh9CnwW8Lr7jYW61SeY53ixdKbZvjjZWBLgMEN8fGVw7FCTZFE2fYyfedNi2WZC",
  "key13": "54huhVpB55rmz5KbyVpv8ihgFfPqAkN1RxNPq9Khp83EVmiVYMMpJRtsbVegU42X8EDdCQTp2QQ2Xmwkh6Ef4kZK",
  "key14": "2SUhaVngh6HcXQJSTBfvpK7Qg22u1CE1ALgVrF947HtfaUN5HUo6ywuS8vr4jbnsKGV9dbnPnbconUEJuwfJGAvo",
  "key15": "4hkMGav6NjAPhd9xvspMUCyRQBbZrXL5cmcX7eyrg2BgzN2TKLRAtQZsiWoeaP9FSFPXZBActgk55tRtE9nghnUt",
  "key16": "3Y8eSZqvbS29NguihM8caDyscmfCRVKEjyKKQpBXoYq8UD31anpw2phLPLULskPunMTH38J3yrpAxY1yx5RGsXen",
  "key17": "42xwSQXqZiedrak7a9vBeMMPh3egcm1kSpPNvfs5awKS9eJF9NUyB1obVxn6yiQf8a43PMeNXBVWDuDZXNEuWtDM",
  "key18": "24XJwXUcv89zgaTCpu4XAJuK1U4BnimN8MoUBiL8zb8MvKNxTjoqUDujWwf8q14YmpvJwZFeaaACxvqcdKc63CDP",
  "key19": "3wYFaMu4gHgbBm8CPhuJaxR5fZcLFZJJ9gGQ7XH9kgjx4pJUmDuibkAGwpo5smVZsPffPRrcRup8C8YMKVgD3NL1",
  "key20": "3qiGM5ZYSZVqaGZgAfGBGehV11YBB1nTUu7CCxHmgexwrwPFmgb7BmnZRKzZwV8oKiER8ubK67RnnQfTiBptVMDN",
  "key21": "5wjGNi14b7xdUHWmz1VsE1vL51npGZ29TxuyKC37aoR5hX4m1TzLfX1UMHJXLzFy4scjQ4JVHeoDmccB7LHfQByb",
  "key22": "2wadEQuJNvM7AauX95Xd38xd79pZWzpx5TCAjc2LYFi2FzX7tF6v7iFqvNw2xhWbFxiL65ALpdVfWEohBqseGxfb",
  "key23": "5rvLYtLCKZMnWbgf4yhdXLs2qUqpsejVr2BTKFVnoHKnvpF4X8bLXoKcYu2omnqfjYfwKDT5chKzWNjhWL5CVBB8",
  "key24": "2STmHcyzt6GX5mK57c4UaQ6P9vfKnvCBDwbeVAqbFrVjbQvyYGmNM1Cs14ZNkfqQpTAfiZ5WxrQ23jVoL5PMDVcH",
  "key25": "65fbGG1vopzSRi1xHxhk33G8cn2kX3SNUPrJHr2wt7mrMoum1AgGf139ka7fWsUSkvhbPiawX5xPY2saYGbs9C3D",
  "key26": "3CZTZkVgm9pF3hxySiZCAERUmF3bvCbdEDonBaeNNZjjsZ9xx8BYXnWQYaYnFsJXzToSTeQLZzM7ot9q4AFygF1S",
  "key27": "4hvoCihuS8HjJAoX4Aoos8cX13PwsCF5qkims5G8qb5jepUjUYkmhqyPxEbeTtNMYPvt6DXom8X2NJaHKDJ1fhqZ",
  "key28": "4gW7XL6FR4WHVzmnuCKXCRpJW72TzePm3x8vTBDTsMYmtEq6nRUqGRJ5pADoHgNyAjJS1Nw4XsEKL6DZQyqFzpuw",
  "key29": "34UH6FR2RWg7MSdKGPTFTSpisZrzqqjaPVYhwtyFPvw8uCRmeyi74vs8vGgH6G7QB2p1yabakiaYSN8mt6Svtbt3",
  "key30": "3BaHXFC8hr3TogwrGQeSkvKHeSfMdqzZ9hY74JpP9TsEGXNwQGDis8ZzGaLDoZV8BwkJShcajLojgGLTkhMDDtLx",
  "key31": "2yABzSVLL5Xcz73RMh3Wtr7HuUYWbh21d1Y1o9JifW9Rwh7HEiYnNKntE6s9aGAQhWD3QdQonuad6KwPdS4MFZUb",
  "key32": "63gD8nqyc3P7BcVu9XRV1BtbFdzxcriExepR8AXsPtu1x5nFEewEwvvrQctpU4d29E3mYGfx8q5cq3fsabfLC7AQ",
  "key33": "5GE1gFyrQeNHbKq3RQ3fiAeSVZRxPfQGjuVu9cbmt7jJ5iGwWAh1fmv78u6Dxgf8KoyBy4DBgzEWGg6F9PKsToKw",
  "key34": "BdWQc7Mo8oWtu8M9XEEThVGFXz28cnFuvBtoMQ8a8Y8stXniFSaCpiYvi26PHQdTvDh4zrt4X25LSVo2a5FPqoa",
  "key35": "62BuWjD4sYPmDsEfFBjRNGLz143yAUHJcnJx6SJfZu3cBgW7w6FWaDz77g2pS7diG2b1L95sAPSVvFEAFBsWJtJB",
  "key36": "4YToBVgPjFJc7KSVNsrvN1UV17aeeZ98bzCXwijVsKcYwp2bFK9FdRBh2bdj5UoqEv3v5SnKjrJUuM6WBW9mZFUe",
  "key37": "5rVjnC88h4RqdC92rfnHHs94LEphcDfzN9Tr4zZ1hqBwCAw7GLSRTxh9U841enrm11eJR3a6uzB5HmkMes8KnedU",
  "key38": "4QeTtBHqDxG8mGDTwNfqpwHLrRb8EKc51tyUidDCz9VMLcJtNzMFosXCBmeYbWbDq4W2bZytsi3XuqMwhXwCySi4",
  "key39": "5yW9AF8iAog5hiKfzzwyYGsZTjgnFGT49HbhxosWqas6tZ5D8epDWaK2eTCg1VivdReNZ4fEAVym4xpg3rfwDPd5",
  "key40": "4J35jNwMLZRz3ahTFrkgvLAYKRtY3kcw7x3kS2RoewxVTonpD5QN6hhq4sGeoW3yXbaaEkfWn9TMENQnMKQ9HY2s",
  "key41": "4fqFnyxdWxXtizB2PXMDfpq8wr37s7rkRD4RPCpcBpKoSwuHZsTZJcwb8mN83SqYzJKdjugmtR8Txvjdpohi3B8D",
  "key42": "3jgzzMHLw26aUPh2gVbJ7kr1tBmW8DTtwCgtTLAwj8ytH9MZEeeQKXCMUuSgouezXSowmS161LA4jjasH5iuNXWC",
  "key43": "33Sx1VCHC35ty89zVaTQbu7BncPg8AAX98j1wCbi3wvcjVtjx7KGnH36P8wAZuvgNRLLopt1uCE5QVXfTRwgUD6Q",
  "key44": "XxgmWRMgMUzAajTCxq6U2K7oWzoGZLzSjrdcXHNbBChaTipHXjjSjnwqe8CUaz1d8NZ7mX43h79Uxdw1k4jKSYu",
  "key45": "4Wix19MZYG8yoM8Wb7RmYTA3aM1ZzeVkveiwDcva5wuSZirSFKPgH9wVAKSpJ43my5DMj59JjArUz59UtcFrsZRd"
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
