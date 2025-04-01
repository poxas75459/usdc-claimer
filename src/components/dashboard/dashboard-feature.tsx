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
    "5eFtiV7kJoD1G1LpqEMg5GvEDUwDsY1G83JdgaQV7diuZa6pnbsD9BkTnzNP2CKKhHN2rjYrnW34uMNfFBSEVanh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d4NCuwcyY9GMyj2uaa5W1FZHbfpsgP7frqY5CeroB9p8V1izQYccBHhygyMFnHy5n4GE6zej1J2e2SJxnsXebSb",
  "key1": "2JGk3W8mxQnGzGTfjd7nJxVA5XTeZNDauQcEgmDTgrocmZtV7nrh3F3ALyxL4LEweDQLwo3ba7cnfSSdhSgT2GsT",
  "key2": "4faYWBn5hz33mWfzdHkUbPVDvqiPLyJy8KXJCWHBRgWDWkNVKcEJpaPAQCvrQeEUJA6XRf34bKdDHXT3XWfUJqZs",
  "key3": "9rU2TEgCQdRAusxwyZ88GYAV6ui34uPEKBKjGqPpmZeBUHxP8icehg2Y6zeFJY5QZka2DQgdynDTQ1j8vXvyTqf",
  "key4": "35Q6z3pS7KvCztq9ZyKL8GVtoH9WebsGJXXGDwpbJNRQf8UWZ825ZFYhn5m8owMQ1w5c35epo4UfkTLw2QdaH114",
  "key5": "5ETNB2WHVVocJMY7SpEUHCiFufWB4qD4fth83BbJsoFduCwZXfG9muR2oqKqYSqAWsRCo7BJUxZaAtCrboqGStq1",
  "key6": "3C49DaRPJtUYFNmbyX95ppYxgDnRWwq7RepTEvTw92zrUFdtWxeVLTCo5jwi1Z6SAQE8mYhTgafyw1Bd1GX94QWD",
  "key7": "3RUDTScTM9naC5yQVexWhLir3YA1xpCB5jk56BqQB93GDGbknxPz2s7EgxtQHxmQULX4CaDTae8vUetxjqzMqPkw",
  "key8": "q7MQC2GTkkmZ51wknJLaZ2ar4bwyskpcRz6tooRtm9jf1bmarHhcLqi8MjcWLj3yDDYQjLMzEn89WDDNCXhbTYS",
  "key9": "3pFsZV2jHNz93Tw95REas6LfDDqAmuuWudWTGCTTJ9a829sdac9DStqmKg5Nz3t6JytvLUWwWLcahCqZcbSFcCD2",
  "key10": "2HgkZAsXZvDPmYXj22wYmjg2GhjLh564PauQ4HPTg8gP3ATHs2yKs8Eqfj2mqx8NbyXSgH1UBGGHwHaayuHJAiYR",
  "key11": "5U9qAoHqz8MShmuLqKNCK2TXEXzcv1JsCZXZ5VYjFGrFPXF4pn89D1CW2S8MEDpRJuTEwX1wz1zsdEA68g5eGrAX",
  "key12": "mYWJaazSuwjPdhPxe2gFmo7xyBQevnw8GZTfvZqdiquYzceW4an8BjVtJYhn4Feu6ENFH63jy3oRxnxKyNkaQWU",
  "key13": "5wjUka4n7jT7pmDMVfy8PdMAzvTL99MC9xS1xjMKfzdR1kKkGUMvFxpKifMXFDgcVfKrk4A6b5efhyhJLr3dvfUG",
  "key14": "2oBh9CfLZAGq4HRhTS6KJ1UBLJUjX79TwJBorwThveGU69X8jDsfyvZwcwVLAfe48Pncwj9rSvpuJXsZsPZqWReS",
  "key15": "52KAz8jvNLgHoVknuEid1xCQcdNBRU1QuvmAvdGjfgwHXNLEP4FibMFkY13LtJgezMnPy5Tzu2GXigEe6bmxSfF3",
  "key16": "4rbVfkU673orcHAgL7PpzGqCDhxFEBPdgXFCeCAdGFheGFtAyFHJJMQrJisJv2YVM1xWuGiLctm3AWXeHBoC8XSJ",
  "key17": "4pTmNEMbCoiwSEEs2GGNZGQQvxULUKXvMU2eJqSjjPbky1BBucoPqHQHXvZdEjXu9DqDU87ySCtWFWYT2b2Gs4JH",
  "key18": "22HcQK2CPgzfn3pXynVuh8U4YE1uZu3oP4QP4tTxEpypph6KdBk8kqTinGamNqj9zErn7THuyLuJuewgwuYLFZds",
  "key19": "nwK69hxDKiqDvzAEMiyNNu2dXZnvcF2wJ5kTcCunJK1mudjL9rnRKWbhHew7VMZTSf3GGqjFgQjzKmXbmZzsvX4",
  "key20": "45Y18u4WDfFtyn7euiKNZZTWgS5tikBzV7Jm32L3oGLJoSLRmZrNYAKwBgpyPaC4Ng5TS7Ho1njNELqr22ehKbDT",
  "key21": "4xSaqWEQNatUtYoJNdvwgU2vFcKjs4BMkcjSyGHuwApnKX4Ad1iqAk3nXtBGyKkcn9tURmwBrMYPGyLSWd8ATYnu",
  "key22": "saj5gtj5Wq5nVTFVk2vpor789rj17gy9Uoiaswx83ecwKtoxwABgWLiZ8rb5Du5XDhkZQGdme49MMUuUcRRfjQs",
  "key23": "3Z6tWUAsb2hKbZdsnR6T9AkrhyQQxpix39cLjCeqcaSmCoomh3bGfjCWa42Fa6F76GHtk44rVqiMQQRKVPfGQKPe",
  "key24": "4MuS1x4ujQYjHmP4KkBjzAEEFbVcJyx3RJP3QwFkk9mHcdw3L21XJkg4Q2y3hcjZm5gfNTkV2NiutFDPuPekJJ44",
  "key25": "2gRYEfqNexHdWXMwx32cTTjaBd6sQbFpGVYsxEJ4Fw4W3CkzKPvLH3HqiPxuXM2Ahr3Phiq1kWJNVhdv5F5PDfst",
  "key26": "673gKUpzRVMFuQ8qoPNe7cR1HJF67QiJrSG4UwwC6RWruigBwC5JG4Gojf49Fo5xuCMdoiQxdEGiUomef77K2WJR",
  "key27": "5vX79fNnwX5Xka6tiicCKxxKv2dmGW6HE5WQx3thiJzwyRt3ts6aNLwwSKL94NkiZ5Set4b2MLY1dGqjcS8uKPMb",
  "key28": "5UNUZ9DfcntBp3kf5RdHFHxw2LLcPwHXNxhbWq81MZoZ4uC18xGWcFkwqpApuF2TSnLr6hujT4NZKUk7QFusKXrw",
  "key29": "57aaGkikUsY4y9TnH9AVhsoSBhVT5VY32y6wSydCaGFPa862t8Tc7TgztQ2L3fooCn5KGLGmkMxjAfYLqhqPy1Ef",
  "key30": "5rya2ANp4awxgbmA2DUQZifeLaYZszbgSR3Ns3EquCGGTYLC9iKYzPJHecCKFWKWKMfdr3eNZhmhqNra133Gi9HW",
  "key31": "ucZ2H7yxNBbMqFTBGAY5wwtirf9qCyiaFydbBq1P7PD8Av5QU9CGEwzkjAWzJMtnPmo6rBdJB4aLZyKTGtZws79",
  "key32": "2NbZhPDgAcvekCrFAozBnSsvkwUGzbQLQ7DZzfk6jdoMsTcu1hcMcwQcL2NEW39CqL9YfYNLvynCMGLY8cP8tcax",
  "key33": "4WjqC8vuJA4Qc473XB2aFNPDfr9DaJC2Pg3Wpw6Bs3iekw1a1TC6kNL5eiQyDugALoivzaaTU5YZfXiuTXFwt4Zn",
  "key34": "2F4pnWHxZ6WLPoo5tG3hm2P71QtndkNx8GcsSd21ZURaY3ZHRhiZXhJiGdzVscGPmtLHrCTYSg1qKLCRhwD1YqGz",
  "key35": "2bHvQ6BepoUHnJ3TEhrEePGfhJChiRFiXswKrksZ1K7YM4jrnZ9mzepUHwzgqh4DRk5zRxXngvFKg7Mvinse3DkT",
  "key36": "3cY9frHqEEmi13VL6zdvpZRrFaVdPeshb8ZxJNp5pUAEMbpxvgbYaGW5dBNGPSmy4QraNcqF85HQesaxHHjVqqqF",
  "key37": "2CgNsb57ntmQduUPjibtUWcN3hLZLNs91jqGVZPLsFPj41dyc8MRBjgxWHEZW99XMPkcBfmWTPSzjzGjoXwCA3Ku",
  "key38": "4upoGgWP161S3RLLXZFDNGA6FQm1VXJBY2hPsNUPamZrDTUTje3bwfMdLekc9NV4YQnnMLuLpf1iSCVHxqEZ3kXF",
  "key39": "5BGucs1wQnQ3DnKFtwgrqbVWaxLSCCNqytoQHSWGEgkAvBugxzcnDuU52ZvHumqY44WPjDbU86oNpASuiZnJ9ndd",
  "key40": "2DtKWCHpinRVzyuWnaYScAoj9pZFH8YoPumQVmHkn5nTqrXouY2XaPmsWQBGxyQmptjotjAVLuTdnKvY9mc1X9NJ",
  "key41": "4ptxA4bgmTLXNHPkKGyXg3Jw1xwnn6myKu4EaA4jMPhjDmnhf6EijpXLwn4rrNHSnzMRe37HUUT8P3S7CYuyYNzL",
  "key42": "5VXF1EXvXaAbRe2y8ADv7tQQCsZYbumtU4kxcRDC2EwLj8nmPueknRFeCA6NuPij5zJhEy5EiHuxKpvYRjqMkajT",
  "key43": "wUZG6tNTaV61wwGQSvZirz3qVfRZA3B34HFpsHiXJoM7M7exEi5UCL4t4761DTVM1fEPvXLXGphKry8LD7fCCkm",
  "key44": "46dhV2JUsQBFgTx3EXDDCSbKagY5oCLfcDC81fyRD3u8gfbwaH2ZVhYdedhkHvtgTNusWzayCNtYnNwAKGMP8U3m",
  "key45": "37nJy4cwLjZAyZakWJZ9xX97uBVkw1f7WXNTLzUHu78FR6TJaaYMWpwzsWGbe9dTTxvqE37zQdVdop97g4NTKgbP"
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
