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
    "4K8UwJj9q163X8zzPHFsPWH7Vvj9QDSU65YoCdSGNUouYvYa9jTMcrKV8RPq7ACD4ZmkQJrwcPCDGsKYN5DouVfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57aW29od6YJm6WCdDQVPMzeWVRiCZVSRex1SauvQFrtWt2CCuZStXSDxfEoFUYum1EKHbHbzHBZQr3QdXtovPK8M",
  "key1": "3HtW65uFXvbAh87MJ4yFSZVpCRj18pDCcbsjJVdacsPoraiWUMwXsvDyq9HuBH8DWKWzmBTnwcnFtfR4tLCkbjnx",
  "key2": "5TEcqdNsSstzAHwzxjHV1p4S3kAywKrsrm9D3Eo9LMG4VNMrsXLCHHSuuUzJZXKTX7RG9jq93eKWaWXSeNVAKkPT",
  "key3": "2yr13yo6S8hbfCwXeAT7bqRywmJeNCe75pMa59htBq3rDVHGzzosjKVZqPGc77uehfPDgjL5fqMkS5LQyZbxABeJ",
  "key4": "2u6AfvxeuNZPhCefNJFeWF944d1R2NxvWMcN72s3bcbzkWBBVbyFncY1Q6Sgs12PjcyEGeMBSTnPi2V4Q2CnesrS",
  "key5": "5G5ZHfXUmqtXAPFbazAGVcVDdg5ffuxs7F41XesQL7xsvfFcKwf3CUAtGVo2o1tJxUQdAsGy3FM4WLbspoewLoTR",
  "key6": "3kdc7JokShMSV2uYmJvDnj8vLkmvbDPRfb7Jw2DEsfePHVBXUsipsVy8AGP7G5PGaJNsJiehqV3czEuhkSUxbFBE",
  "key7": "2Vf9MGcX4kuu5gtDUfgaqmzeqProjWQe4FadJWrtuG8RvRWWVVNesDZBGmzH7Vp3j9XyaoyybxCMxD2AnRFy99FG",
  "key8": "3HWrsLti85UrSVpW3Ri3acmJJYmLpiKFwhqqr1LEpgoUYF1DAmGodXr3y3ovTWqab6WvR5ACcLuVg8yxZrYi3cgp",
  "key9": "4ejP8GSJdpP83z16Csn1SeWgvE9tjE59maaAnsYSfJgP7jQY3cKyfa5xaj2Y8pJpEw6fbojgwaDAmj5aqxQWTnP5",
  "key10": "45memhF1nzM4iWLz8VBkGDJPJextc6jVHf8drN4ueRW2pa1oiab563dp25sWdQQ3fWkD2kik2c2rHR4BHbsjRM7g",
  "key11": "4eDAEY67H2HM75oXDkkgcP8iquQXVuB1a9Avw7fc1myszVrJeNcEGYXMpfSyYuPaMX5UJhNm5HL8D9aobVZQ355a",
  "key12": "4aWRgHndeLMFSngKAAoq1CNeU7XFmCXk69toxwxFk47NT9trtPuQdHChcLHr8FYbQi42g1h15BCr67rfBcv9E22Y",
  "key13": "1idqBKY4KRLzqp8ZGMpffv8qKBirBUjYjibdA1u5zVJWnnBMKAyWkERRo7g1SkAvd4xRiKMFTmdXmrCM6awLes1",
  "key14": "5Lz7QADK8cuCG6F6TqFsuXfRiCBLfxZVtcjvmoucWphFSkjE7uXn66aEiQaR7muZEuxNWyQLxAXCxPsrRLfRPYsX",
  "key15": "3h2ukhvXikhE4vdXJjS3boncSbFyAV9AXm7Z4HetKgnYdxy7mytU7dr93LJq7DhQcgjt7gDanvnG1tBkWLENeL7c",
  "key16": "2vk6XG9di3mMXaP2xLtugTsRQbiM9tosXq7rmaFnwx3Y5bCtVbUC9TrvAsmvhr7h8iQLkbvGuLUJV2SFbjfnBSgB",
  "key17": "3LjgdJJHLrTfWHVqBnHGTRhYXKvQciQMHZ8nCTQyQifzKNxrK8YMeFYfMjnRc2DYtPWXm7ip78dCrESw3L5g7qjA",
  "key18": "3X4fXNZz7FNM5EtUcamzSyy2HHCCUywFgrkcAgU3QFF6HkC9cWcAwCB8dSp9J6jL4qXWhiDMtV1S1a1vRpRMpbDq",
  "key19": "5qg82h9qgXpzDifqRb6vrGjCZfMjyqrQyJgmmBTj68rqNJqKnKBwTDrp9XhTVVxh5HyL9oFy1Gt8YjkTErgxGmeD",
  "key20": "3jUTrs9tjfWbA66yc7qrNdSspSvCjRJqxkPj369s3LhHzeEFVLF86a3E3gWBfX8UdM5189U5CWNmoyXF3G5Mj64U",
  "key21": "3YcjDWnW2qsRJNquUz6YJh7SQRu94BrcxGiQUYuxRY9bMhPGbAYjKj81NqGvprQL5xqz6grPuUHUDky5kZvJ6QK1",
  "key22": "2ydvwVJKUVj6EnarjeSZi5tu9nyBmSQ9x3pFzYAmxXemJgsoxr4NxRwXhjgNu3MKZybgb8RcDABEPZsFwDhEyxMD",
  "key23": "3qdHGn9scpsnFjghuZL9h5vwEQVhtFLkucSZnE1V2uY3xk6WysqkrBkAmVZX3Mu91E4yNfyit9tZ96pSMDcrFjR8",
  "key24": "3Y5y17kMrWouzaJQztc6r6Ct3YYXVPMK9N2wrLdQY2LMuroknW3H2w9GRurwubtWExGEqcdK7Ny7svudqqU5UnJF",
  "key25": "5sYNvVuh9iFdzx86C1YtVrNzfEwmupMD2Vx2KsC55NX8u9VcBDHxYSVSJrS4CKUvR959999riDtky7PvsZWckmC9",
  "key26": "4diFydLtKAhSPD2mevrjhdsJoaoJgnjtA4RWLD3aAqsz918T961EQCcPrYeKhPDdGE54mKFFJdieX5HdzWrFZkeL",
  "key27": "3h8FdJiZ2DDtRnoUMVmqGg9WmPfzaT4KeedypzmadSA8QCx3Bws7nmC9FKp9ViLuEwi6uCiHqoN62CQGEnRJk6tT",
  "key28": "LofYdzisv86FQtxr99cckqmYLisS4dFX3RYrvM2QYdXXfjpKTAbjanGNhvvLJU8rD9mT99w852dW1EvAymQJxG8",
  "key29": "8YJ33jbWq2aLggE8hkQrPqcVHR5ZtbKRTuPBX41sJUV5gQmTXi61GdvQTfQYxkMAnmM2RzbuAXWWdRVeZLTWJwB",
  "key30": "4xhzQonMpe7cipgBCpCftmVhqX38M2MpqFxEp3QUfDjGA1Sxy9fkvaUvWgSahYvigqKeirURhroJ2scyzn4yzsAn",
  "key31": "yLrKUrk9ygr4taLgA2EMKXu8xv2Bdq2KHnPs9VDyPqYexv9vShZ3h33X6xZS65NxuX8vf4hrh1rPp3Mix79PuTA",
  "key32": "5WZiWtJV9dzhwZGSfwa2ZH67RUyQWmfNefhTtWnui7zgqYoi4pnHhtvnL4XcucdHFZzQQxhrxKo8hjTMuBF1eL6v",
  "key33": "53TqXuZRZEveqrxpV4Jy6HG62NhcncJnvXooajDs1srBUvAHhxXi42V1Smk7E985ocjSgCBA39YejkmGXbvD3WQG",
  "key34": "2UBh3YXSaYmigpmBrurzGtrPq1BjbqtGPDTYF3u8BgxgZ79tdV3b5ADEma75AxYVT6YX5JT9rLQMucoToaBRwVRu",
  "key35": "2pri3P9qaoosFGJYFLvQQ8dhN6Jf4aDVouzeLVwNB4FmZLk1p25T5KiGAi5jPvBXRoqVtQPLpFjThnNrUYBnwqXi",
  "key36": "26KFgT7cMxpF9FNHegJWDgPDcncdU9siG2Kjpu2MiXnx6ukXUZLFwLrP63NW3wAmfdpZChQ5XneaVTYM2TUxL6AZ"
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
