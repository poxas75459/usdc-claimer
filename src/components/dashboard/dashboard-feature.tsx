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
    "UP8G3q8fbW1eWPrMXEGSMTfjDzXXmdK2NfHnn3zkC7UGxmkcUCWL114YdkzEjAu5z86j7T7tAdChrfRFp55bXby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmHXUrwnhKBywSGmvknSzTaASs9y5e2jgqxL3doox8e2xbXQ7sAtL1d12RvSYHqinvdfwroyqhoX7fDyWwbCmXf",
  "key1": "2ZRcp2FDm5ptf7ZsfoeZXJCKHrx3wstPHPXhe8t8MVVWzsrZmWVdZhVViWqYQ4fsWYGB4r1t6YqTFPvFdErXzv9J",
  "key2": "LtJDKxDjfigpPJCYgNKvrPSbX2MExpMbjCsL6nhUXoebBDyV1hzhJH3ijRJGE8djWEN5n9WvYv8EcMCyP5waaYM",
  "key3": "LGNkMvDkMxuaWyY1jD27eT2asQmtatnDhd1R6dT81kWTy9TW4zMZUwNacAsbvDxypwWuJqNCsmdGaXXykhryGH6",
  "key4": "2yjrTDMdz5SeLtpBav6KN123eV19SRysTi44reMxAhRS7b2qRzsRpJS9uNCyTNq7je2BREgxuYNVkviYSba1Ej6b",
  "key5": "4FcesFBYFSx2jhQBTfQEUfz9t1qBqftcNnP2H8mqhGjpdHJDjXWs13YdcrcAMZP1vvxjB5rWiWTb2aWkmtYwYMeW",
  "key6": "bswHDmwKjNSNei4T9oXEN5JZJ8TojAQhm9MWchwLjzn6RkqkRPjdJfy1X3HyNhnZCqJLPwGnUmo47t8f69tKT4k",
  "key7": "kPmm75rw3EyHQ7YzDGTagDp6VapKh6Y4U44iPj1LeD34Eioi9QDcpbKbtBEQCTzB55YkRU3JKQZBXkEVj1yfuPj",
  "key8": "3PVsNGHB4VnfW99GkQmgUoZV6XDPzkB1Ldpt7eqeCtgF3LHk8DqSK2miiRxvpRhubFeeCF266NJ4Zk9kzRTXURS5",
  "key9": "2SHr2cknEFvozVh1UdWQx735ytinQUfjZvr9J9NB7iwxDg6GhK7k9kE624B4RJyTPXLsqRetjXLRWSMHtwc23Bue",
  "key10": "2NHNhyobKU1D2oZPBHRpkkkwanNE84CuXWoV7zBQVbBf4aopLzdnQPUfbV6yfvNSQRrB6ejR683wFas9N66at7jJ",
  "key11": "pGxHQnYJccentuYMCGNWQpi3cPzPubVZUH8aA98J1wD4hfKDxKvdtPfWiNqaU5iuiED8NggcHX1WedTA4iR5gyf",
  "key12": "4LqUvdNMTJihzEVJgXuUijG3aWNBZBqbVy1tZgP3xv3diano7Yr51ReJJ7aYLXbqMqY2MVEHo1mJzgk9GZnQyoSz",
  "key13": "3zR5NXwhNWMKFZkR4zQZ7p56XRqtc4E8ABK28R2EerhH24euXgnoxpaBR2LT4RQtUse42UB781t3R9vNeGSk78oa",
  "key14": "3CHjbnSzwEcw56PH6BN9k3VytcN4xZWQcjS7uuKxrWUFvpQVx7ZzJtSWuyRG7kjGcifKVg3t96RoAfvDYBwehixp",
  "key15": "5STppBQ651WieLK5zdV7jDRwJFb32GYCuncTN3A4RdV6yZpa343F9zHfch2tq8n54PpuWuiZ2L5eKvhQJ1YN5moM",
  "key16": "2qvX6FYpZq4X3N2NXAG7jcWVkstkA7U5HFNqq6Sh9NboDCLJyJ7R32Yhs21kMhkbiXdJNV5xmG1CEW27j2T1Xprs",
  "key17": "3v44r7V2aP9Svu6BDzDjQiyJDxss47Yw5i75jaouLxTZeHaSj68csncLNwz6TSAAoMs55uFaCXwo9md4etsrYnFg",
  "key18": "2jgUJR7vYycYSPykXPJbvq6uKBzj1NWKJD3QijXVdDPK6eKqVSE3EC4uyzKUs6Lb5Cb7q7yrWYoKiTLdVyJ4RcCz",
  "key19": "4TbQARTwVbxZjC49jyvKhWbD7ZCmDPyR6b6mF9JxomhY5g8rHva5gWEM41TuDwoK4U2g5bd76F9WBvCdM23xVWgT",
  "key20": "2UgfZ8iJW9cHjmLfhKVCbDRyXeNHxmH8WfrcmzKmMgN1w1u9zEapypBWoRKLRGuP6mD3ZZeeL69khn2DETcVLeU9",
  "key21": "2c7ZSuwo2zXffwp53aTpishAn2Dwn72gVm6aW1QMSz4Xew1vwAiZjytsDqwB8DtkJ72Sc7Sq9HQHvtSMTZvpQPSe",
  "key22": "F9ehXci3e13qRXmxZgZdDAtRy5PfvZSDWFmTLtEAuakcGJJ5CkXRQtKgLeVWLSUQuDX98MAy4PZVEMifzgpBm1K",
  "key23": "3gC6Lsomww1HckmPADkR6WvQ2qiNniiF8sWHxgwotgQ6vJ3BySVQrfRxXHq3db4xbwXEe5zk6UCfyyjJ2eFGp2nU",
  "key24": "YpUGCGDFoNqU4jL39CLxjDBgP37apmU57iKjYkHmrADxn6iDkHQhLCasSBWG2ojjAQchwvStN5EYqWdu4gt9F1B",
  "key25": "5pwCLvoPeKcuhPXWdMYPhWxAYv9SknEgBPR1V3FibYmAdwft3uxd53YxangMaz3VUrqiCr97iZTGuMQWx428HNUk",
  "key26": "65xkvaurg6DKFLG1gewvPmFVVTM9KpKFYyisv3Uuo9f3QKYssmCDG1P8sv2fNwvLTV66MisFU6f8dZdivD7bMrno",
  "key27": "5eDT9zQw8GKLkej4QZx2QXpp9n2LnB9ZQ9PuFgw56sD2xPF6XFJFW55nGfhN7sdnFyzZ7L67SkmLJh1Ei4Ru4zqP",
  "key28": "5oMmHs8Ls6UpKbBvyT9ng3AWBX3RMSQy51647brLrBr8VuemPj3kATqKPgHBkNU8cbBcX9U4yGd4njjz6mEN6i2g",
  "key29": "2fp1rgZMtE2nY7ycHhMPqHtmHt5R3CaystHwDrv4iQE4Zjf4RgWpKfq2a3VPEhP7JDnK3SraSn6ZXxYtNKTKjf1t",
  "key30": "3p4CjVHdpQMg5LS1Tnwj9BXfg8PHS5g3yv2XSeZBsx76qt1iCn7oacGztcf3wKajnJ7x1fZdKzJrfyvLhjeiaGC7",
  "key31": "4XdEYod8Pp8uxypjAG5wnvb6zFPxMb6f2za4DwLvtoFYYGJkam65R9Zp7zGCWUY8tXNsGSSvk8GbLPe2ksPSsrvX",
  "key32": "51im9rrynB5VGSXxpvKKoz7DrosUzGxt8XByUUYGgKfAJSUU8UgqGHtVvm949jFFAMuM6pybYBgCVggtKsYpMGT5",
  "key33": "5qFJ7FVLBjsLiws5czB8qfb5XJ8VCuyEnX3gFDBG9CNu6sGyGJF6U9pth17eTvpAQHZSgBdJ9HgYuaiigUEpS3De",
  "key34": "gXgdbTskemiaGuyBv4VfKga6F6aKRBFNX3nWT6yhsvEKuxUNaDwsxytT75RvaeHhrkkct6e9o2KeQ3Vr9tm5kQQ",
  "key35": "2HQqLTp47CLsDfWinJPRixGbSnnm8VaJrydmzYUc3pJbYYCazfbirD51gWmHueuy412xZNGaSKFfY2jHu6xJ3xBi",
  "key36": "5QBUoVsXsLwBe2NVoD3knK5fBRKeN3GQjB1Mj86zGv2CHaJBRbxYLmNVXmeDkBFsRvoZTwVgHVWoDtUShht9jMLr",
  "key37": "5sWumGoEubSiz1NQe1UwhSjhRPz5T6wS8wvf7CqHNuBPTSuyMXT2gquNi2qa8f5ju2jny84nJdUqSyNmTJX3gf23",
  "key38": "kwsnp9vErhgiZYJxZDGWkCMJ4o4B2EFC7ZRSyC6rw6GrKWTkQFBVVijew8BguiLLiyGn9QoY1F7BotaPsvAQdw7",
  "key39": "dcjMongKGpLi1ajREN8m5fDDzyQxpCYV7xZYH4tUZLkAvJ9MCWYkkbQc3TgzwwkVSMGFdx1MeepGbQTuy52EsMz",
  "key40": "456XENuoyrYY1Uv2NwG4nUtCaVFLZdbqvf7pa9Ep4irGaGfeZqBz3i4WTekbt5ocEJaaRuR6dByrDXr9xiFhbrgf",
  "key41": "5E3obV8Q2pRvKV1YFbpaUVKFBZsMMRfg8nDMJq1YmdmFecTYcpNL24urbLJBU6NWHCZxJV9GhLwUkiUipT3untff",
  "key42": "4GjwXkzTACL5fTqzJmY7bkuBqob6nEeJ3w7GSBVDMZABX8qB3z2FTKALdgqxZr1HXTRd1kctFQRty4WVmKrEWpPB",
  "key43": "UAy5CmSP7cinryMNeTjPo3Z1r1dgXDeiD6tkDDZ55wderjhAQG7fteCAG6zZYeyDBCuSVByLmsUwHskWZHoiNKQ",
  "key44": "YprKGEXt6w2EXEhQxxBo6UwDZS7e6uvPasfh5kSk3tFWrWNn9JwPcuWf7njCfrj33UV2zW5ip1J4y3324B52y98",
  "key45": "5MAX5okyZ5qpXZB5K4ZUPFu4X3js4UeFuV2MWFrtpk3jBYuzXdhcjPopBbPAUXBy7gAjQ5hMwa3cvLJqre4ES79o",
  "key46": "291L7cyB3htJEZvxfBnUHzkYd6zSDE5tBDk9ZGKLpHQHqrsZJ46828i7EYRuhbpS5id1auakMX5871Tqc7u3xp2B",
  "key47": "42mU8vkq3e2QTKWmEkSug3Dhqb4pAkyPfuvXowRJY3DeTcQqkiTBhVA5LPDK9TqBZRP6eTpYuCiJNg7fVieriF2E",
  "key48": "5UedDSwrxQh69PUkjrEES2atku1DSm2ebQpjRYZ3kYFC3VdgkqaUVyk9uce3Sq5R4iPAcmcQNuNFiLo87eoYb6rV"
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
