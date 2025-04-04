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
    "cgNcD3VKub74fZJjPyCm1pRZA4E3dB9CK6kXTFEfkSakEcGFgYTFcQUN9auLvpWFXaG7nYXFK431R9cddLyayEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19UinmpZRZaE4zf3zdSnt4r8qX2XNPDKJXtqfMHqA6LLMdPpiEJrEZsXYRXYAKrBCFRS7ajQdMjUV9HymSAxEkq",
  "key1": "3rhvrDrQ4wk7UeCpMsDmHfcT88mcXiCrzuKqGCwyzrr59FWGJPdgN7VCrfCEpp1CyYhVZArJ5e6RB5MKjFzKpMLx",
  "key2": "3WMdemW8pn2YDfJAqAUN6fWt8fQ7g8zpfCVmZtHbkGAZTJchXnQqjpz89esrDR75x8NsSVyh72fT5SBV2Dr9992T",
  "key3": "3YEzVmjXEbVXruizM4XG6KxfcGZoUp8E5gyo19KRwmtuGNm6o2vCzNQ1uEfztWRY7h7aS9kUZMCHMmS6wdyRL1d9",
  "key4": "5fS6hqU12oHebdYpEVKVwhVENHBDwADckrzAoR6AfujiNGhAL3fz2gFL6GbZFXgKpinWUcSude6VjRjEzPtD2Czz",
  "key5": "yrX3wqgpxUUCXVe5uFzVS8vmyL4hfiNpVdeowaHCXj6A3ftH2XhXjymxN4m7XwfWuxxoaGzMhD9YgtKPSGZiFwq",
  "key6": "stpkiedn9qaUZhJyaH5nDyFLySuN3cYFJWkTwKPLuHhR4cqMRsaDwWrep3bAxqFnhCbTKYeWCdwnSc8afX4KGoC",
  "key7": "3q2J23VmHvWwuyKSPZY4j4wNoykxwU3bytxf9dc6VSioTdm6Ubmzk1AzknX9jZmaBj6efKWbtSSog9LAKkfa7aJw",
  "key8": "5JjJQ1DAncT4DE1bfhSy5BdtYhcKL6bFi2t5T71DSx2nJmPCKgTphHpoPJT31hnz91JbqQZWeaRhNFsucJcC1yJu",
  "key9": "5vhgRvK5cMXNBFNcyphUyGn61SGnmrUaRzSGEsAsvdPp2kgBc1DG5JLMxrbfHbDJzDT6stxMYcRGrvnukEzJYyhr",
  "key10": "2t3rtQH4HUuspcHmTZrVxgJhzdjemnKPgDQkocFcz8hZeTM2hMsYJ3cYaQhorx6jAFaC8bKLJ2oDf1ufniyVgEBS",
  "key11": "39JnX5NDsKXxoPif9FCcYkGfjxg91Ww17oiJmSDJFusDd82q9kaqwLS6ApuKRFxN63LUgUhifzUh7efjJxJVSJpm",
  "key12": "3UwYnVye2q2wRtEm9sZjr1BNyfGpvmBju3Cgk357XYseZt3oUo2Dc5rToeArMTFx1JZa9G3hM4zcc1okDpkDkze5",
  "key13": "W9GZtDHY9w2dBpxRpNCvxjSAEzoKMnxTu3mqzohRV68jPSEr9ccA9hxzmGnC47oNuDMyWpeMqTa8E56RknqTEY7",
  "key14": "ysHg7UB9X3Z4UqYzpMhz3eaKjznJK2yyt7chiqjXS8PsniEL7iRwRCHtmb1Ey93Cb59ZcN5aZ2TcuALbTsArGYz",
  "key15": "2jFgKcTZKsoEUiBykqH9A4dnZRJ92dLnxDqEFcU6DuhVJ1oYBVtAACtTcMHdUzFYdpAsYiDcnzasJxxNM4eoR8cw",
  "key16": "4YFVWEnZcCZkVZUk9kMeauENfSAprHr2JE1oKqPUR9Pk9azWR9smeUPj6bqUm63Jpon7yehYXweU2CxTcM41rhfJ",
  "key17": "21UUzu7NbgwKmu4PVK8Ud9GR2zGFuKGweCPrwZLSYUcfFaXJZg4pnFhckoAaAD9WVrNav4EM9ZFKkSPZxndBLNfg",
  "key18": "53DRtnDKwJY6DJV63EhMskqA1R9M7bVim2yL2yq8a3h8ykuh43UDZqzgnJuhwzQWeLWaJ5Q27qBVknBeiMmDJ9vw",
  "key19": "2cfXpV5RXsTeiCjTWgaMYwSwchSttCpTBP3RcxSMUrA3bykbjdwzVUr6Qeo59cDTVA92CnSebmZd2yCzVCH33fR2",
  "key20": "5kuJ8cArB8aLDw2E1QD29zvrX7tFer15D9qqcX6ZbeH7kCSzuKpppHJnL9TMN3KRTEs2TyQvazZexbCVFCoompqG",
  "key21": "4VEPS3LjNTurdgWnztJEobM85mzuMWB2BKLHfHUqtmmDJepwAQ1vcsZizW3zNAoGcf2o9SLAFm5GRmSVFqD44SNX",
  "key22": "35pjwGSYFZ5FB9UJq2C8f6QGb49KYtmEA5aAvannJ2cCDB3pRKSuSLosikixD3fLjZ2563FZhhA59TPRFpKzSWPU",
  "key23": "2t8wiST8TdQpxptWEqG7D4Q4tRf3CZCt6yVbYByN5ZbxMFUh6AhhUE6xFrMZBDo2ibzUSapVWzHwxspswu6dPezS",
  "key24": "5cZ4dhReZi1WSY98FzjzqvGSc4Yn8QyTKqPVeoy6nc12YpJk1kRsYwgtb2hDGzeUsBt57DfkFB5wEJa5r6SXX3Y5",
  "key25": "2mrjWvs2YPCTDazL7wdrzFwyKXTo5Z3oxsK8cTHeiL4sMUaaNHGpukxzkotqTuJc29QxaBn6hHC6wLLwMVEpk2YS",
  "key26": "3JTSigVGMQte7kUWMi6sSp5zfgnjvLSi1d83vC2PbMUCmRC6X4JS5UpJfWcueVDL1yWMUX9UfEKx7NkrzKoHiQbQ",
  "key27": "o8k4ozzxSXbXSxovTpn1jonv5EpnURfZTCVrzZeF4KNduih77JeMwhRryYRFhmXkTJH6hQ9zTBr6wVdCcw6d73d",
  "key28": "4sUp62aHuTym4UUSWAZqyKLkn74Hzyvmkjr5BFWPcWvTijQ7qWPFCquDfMQSbydhhCfEq7Qsz8ayH5QTupXUuhYf",
  "key29": "JnNpWx7JBEwTQ5Z52ghq4qYC131Zr8HL72LJgXFtWPahWifK29Pwe4bcDMYpUbKUAHL24HizifugfLTKwp3MFBS",
  "key30": "5KZw2kZZ7qWfYcvHMbvnam7jqz5ekn71zFgTTk4AqEFN3Dopku2uymoQV8WoLentdrZ3BqrXeXpWPM5VhLbUBrot",
  "key31": "4TRLJzrZpabnqkUwrRDYxfEdgTTVrfyV9NpC7Kbwiv8kJ7WZ2aNwHz7xVjXGHvkYwXLoY8NFpM2vqUnwZ4ByLS9T",
  "key32": "5QcK5W6XrUB8km5i6Yr9EaiCho7KdMua3XZEh57w6pbrLsAZQ16dZ4pJ1bzhRsYR88e2HjcT8xdpmk55VXsL8hVn",
  "key33": "2ipa4YGG4AQbqjKoYN9A4cLNY66nkZJC1aKuvvCMG5UXRHrDAeFBXZgHhMxJUe7iiaqD9uW1vWGd6rpx7xiszxnj",
  "key34": "4ZJmwCp8Qzvg9dX6b7vGSbm8MnFzbAfu6qnqyRGXXinY5WTaAa1WK7WqxM9XJksGDANFb7LgXSDPiq3nbXMqY2Kh",
  "key35": "4N7aLUsTiw36orppVEYktFqrbA7Fv8ZXGqHYLJLjV1xKPdJgVFSWTwnKzSfgBqetf2jtV1jnC9uTEZoxhq2zcJwV",
  "key36": "55qzhji9ksibX8FELG11LE76A8bXwfgehd9R8PjKrGchjucdLqomJ5rUsWGcT8A86NdJqdpiypu1xRHhTS1R4QYQ",
  "key37": "SV5YgyyuzHRVJ88HePsNfPrdU5jdLieHnidQ5WjmL2G1DVvh1YM3gS2M4YpMffT3RZTRro8cEd4z64DmhPXGsCM",
  "key38": "5SinWKfXtG4vZfz2Mri31SJJqHeQLMBefgTHrzn6hmXJehMr9SNpb9v6DAmwys3kHK3B8kGZsorkEQ2iPMGYDibk",
  "key39": "v8EXhSrR5F5EiNYUqeokPhTSZ9P9ZqkVP8vCKtZUg4YWgaKfAgYVZLYBshN59V2iAz5Fsf7VtYcSkp1hF7Mx1eP",
  "key40": "2nRc66TcD2co95cRztWrF5v7BGnrebFnAoho2TCUA2NkfdBMvFKAv2LG3MpryP4YpXaTfYnWuBcnrsF8WhTcowyc",
  "key41": "3U48ZmWaL4DWZtLPtbp8txShM5r29XPZKa27fBa8R1d9Qmhzn9Ni9uzLny3cWt9gEhEZJVVZwAd5hpV827ssBGLT",
  "key42": "3L2XdSvRHPtF9x9vZP9QgwkVRaUZ1Zf42YyxkKaVAfvE31XKiSMhaD9LEKLoiS6o1sDCFkWgP1DJtZUC5D3gAQJV",
  "key43": "LaJ3xs3ZFRVoQfwXr38JDhJcE4UzStVPN7BAzg5ZoiZ4RPTP1LcZX8AVgdRe5PeH3eUiLPjqxGs64QKnfzqcAUW",
  "key44": "32YBREmrrKGvefGPQyQei3iYQxNREt8tEtiNDwMPC2gk4FEwe99zJRbraWYRnSERW78GBVcxYf73s4GNM8aFJNJ4",
  "key45": "4nm637M8zSdao7MThxqBaLGcLJ5oJkXaAuVraAPFQKPCYa66cpFZQxwPhFudnaYE7GRrcp1kE56hVHH8DNdAAirn",
  "key46": "mzg3nT3DFiuyyoZLr9ucbQvEyFThJ1SNuFGLiTZqn6x92fUkkzynCLhhtpYNuAa2cMpHqmGsHh4g1P78BYBiJd4",
  "key47": "3yADnYX7uTsha2rMvqc3ibhnJjT5YygVSxbrpZqVYQVmBXNFNixkN7WNVPwzK5Wpvg6LYT87GpmsmEQmStU58QVs",
  "key48": "ofngci17ixwEvZztgFKVrgzakJorPTZtLd7SLjRrjVnGEbtdEWHFC8iMNF8YDGzbJJuBGo1GPeHZH6vLCXHLFxH",
  "key49": "5UJZeQBNbHwapT9ghFJB1gFnj7XKC9c6FtHAzg7vTV4iBvCp8fcE4pX336r5AEcAiPghqhYUakev3dkPrexef4ZS"
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
