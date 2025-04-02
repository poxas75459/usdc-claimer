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
    "pY8e1koiZsKCfVnWN2vVcdmXZNArt9f5mkaoVDWksLTKnUFaFip4W7W9GxcQ36Tq8spTi46MPKYuTsXwFrNcHc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HtaUue7XjaLwcn1q9fhoFsVkpsPH3EbAg68F6cdCJaKbPwGhz79ZD6wpiYaTZrrgF8rycfBNCPPkGLS26kvgcXZ",
  "key1": "34JhxdBfMwTjMGkvAXaEcJUTt28M8CFDRWCUCgNHAbZ3dT8hWJzQKYUp46eyXimykmzPRwuVahVYDEYa6xVhtrRz",
  "key2": "2aMj2SgLBQguXw6K6P6tdJ42UuUnDzmeAXtrybwnG5fBPrGMCCEzMemZBfYXkeXhTpu7NavYsbt6ZgwY4isSzmab",
  "key3": "2JPtxMitPRnpWmAR7XUwKdYVdPzM7ML1VoKjEZv4brmX1q1pqhAnUworTL1GhgkegJYBfKdgpeUHyCFtWQoJxgdT",
  "key4": "4mEQjdZbrwHz1YDc75SPWmDduzE2enNoLhGe9UU8SXrhLnWVwBtvYRjhDkLpjvjdSJxsQ8oMgzK5X7sssfpDmZkW",
  "key5": "5e2iNcicwY2BvUYV2pbzvEPvrirgLV7XfSo5iBbyUBaXnXm2qVefYhWBgJdg19spyVXa6rfstYH6vCj2rfNCrkvP",
  "key6": "2RJ1gd8xAcJZYi7wP1HeEuKZmsSukbcbg2GBj1SNygJpuQCYrZUTogyh3NhCAWNRa8diLUz7P1D2FHZpnemdfvrQ",
  "key7": "5Uwi4MmvDknppMkrpDKse3uPN3u38Maaqs23XNPNjnHQJJPJBs5j8K4zK7h9Sa8yWWQ3XJx5wuCL63re91AqPN4z",
  "key8": "4i5YiZu9Sg7fvymn26gvaP897YvJoSDzsi5idHRmWNukRRvqu9A9F5r9fmFjtcPiKeDXWyyEfGhjvr3YJkWMZi61",
  "key9": "5KB9h9XuNQndCPFZ2HCFt9uP9PU78oL2rRFqFhUqjx6ufQKJRUpqDjkn91pHUpC2kQeqbM42ZTwhD8Q1uh7tTYqy",
  "key10": "5zjz1dNQoVGhkbEc4eubvdkLPeP4e4cXE881G3xY7XRuTgTCxWDvFkEdwHt7abno3UySHsJd5p5E1c9TasEDcEiM",
  "key11": "3jHDZcvZusYy542qnuLGgwvh1S6FMASwkGqvWHB9wzVU4dv3DDnEBn5s9tKVxTRPXmxet1y3Uoi9zjZiuHpZfaYq",
  "key12": "51RmTBPmTaHFVLba3GmgV5nj1uCta7fxQRC3Y1kMDF5ivNnpTQ9rxFc3RiwLsuECH6V6XwDGkGxA5tZYHGaXFdSE",
  "key13": "2XpNLRbUw8oB2yjmWQHRufTPWUEsjefyvCWTyiyvrcBWeJyvS4BzSMB2jaxS3rTKoXHyNRT7N48yxoaxcphighKw",
  "key14": "3iebEHzJXQuwKyAnRcQKDKh4yNG1gUZGEd9LupWhoGrhmPM7zq93jsFLQQCbiXdvYmX6PGzpt2dggEwsToUU2RZt",
  "key15": "652LLUuqJUsFAXCDG2Cn4hRgTeHrjGt6ewozwyPaVKjASiZVYqdH6g4RnLb7jjz4DecQVr2PkLLe3fL6zLvqaC31",
  "key16": "5kVhQ42qfGuUQaZT9rxYF1WFKhfMH9UVphYVw4G7JSC8m8PEpkUaBoqkZ1zbV5DtQE5v7mWrb8Rg6Dv3nHKHbEp7",
  "key17": "65oFhSDuaq5h9BQ2iqRUTmGqGZPmfZuj1HVv5tfYf2BfHvKy9QTmQLwL8veGPPcEQKQmLnhEz8yaqyD9KEjjYyNm",
  "key18": "3Kcgu1k1TouvgAhpcegJTnNc4mt8uALThdguAL1eKBbawc78W9NrpxawaUfeXTTq7t8nybJJyjo3AFaGdGJdogLe",
  "key19": "5o37iwA8HTBdXTQ8tHqUQ3PRtW4Ku56CbDTjX9JnGrUMEXD8njHVLWnY3jvK9eNqhHWNRRrinSYya1KBx3SqVt8R",
  "key20": "DM1eYf1GXZGrxFHpKydHdNQQnNALqB2RbTss1AAkanSAUcrDLxDUHeAAtsYR2zjFfCzpCegFQKuX9pb8YEfn2um",
  "key21": "54LrAtRmttqDJfNm7j6NwFCMnreqor9bvdqhpFeJeouFA8fiYtJGG1WH1dYJT37xCSfH2uDvru7PDLGAfrHwDKQL",
  "key22": "4ua5U6AH2AEjSrLn6c6ijY5fY199mD9ULV5HX7EM67o4JfeQMkAKSDVbZyWSQrRToQ5uCjxXCUZbBovRmCbubWUP",
  "key23": "125dV1bUEzGDpaU1smvxyspdJFa9E27gtePzNpwA4f4Dro6FucEzPSFUANYUJBPxuz2HhoZzGDCaYLjqTsdd3fbP",
  "key24": "5q7K2uYkTL1BuCDuTefLndSFRP4dtbQ43vcfdc6K8fnrBi4Djcb3tHKMHTgXDh16DisWZzVyVgpCR6q6c3JA4n72",
  "key25": "5Mm5Vm9kPB5ZxLJKnePiGszbxVXv4kFUR3s6ZwjEHStmm8brckFgxsriBeoAvHfUhqo4Cz8ov8tb4A2E1DMJQ77J",
  "key26": "4vUtG1tEouQxZRacq46PNsUZBaBDLExKouiiFBS6eAUsFHackM2E12qCM68DarXQcadva8V5QE5Tts9F4HAg8vGP",
  "key27": "1YUiirTMvQ97NhG7eZ6BTKC31vPCrELMxCZRQ8QLTMU8hFVtGq1cDxRRsPupxk5Zd5w1gxPBHFxmaKqsgy2M6gu",
  "key28": "4zL2rHST8AqmqA5EQtoR2dkA9HBv2kVf3trLy3jcbnioFGVbYZnA5vDeZ3YFiAXoMLu9Mdsppk7GbwWe7bVDAJVr",
  "key29": "29Maz86mjdxPbXagtkiGg8D8Mc7TcZ8CpEbJvaHMFNV9Dk5jrHLifdUqAs6aqmw8nWmEKRzsBG1o2F2LXU6gd1WJ",
  "key30": "3XHcxb2C5YaFvVn1krzbwsWNaCabGy9irVvgFAWY9oxhr9zYQe8CqSb2XvdVtSjxufEPeW6bt1d8xUz4Sjnfi11J",
  "key31": "3sGFFGi1kFJ3SkuQvW9yALP4Y3ZNHbWXWBdmGVxZDWvYUopbUryh5N54w5o5agBp5wuVjRYZxKcrFFu3BBXaKyhr",
  "key32": "5L4hL6jk2JqCMsVgEGG62qKJnoxzcYj9NdkVXYBq4PipPntU4X14HhWAMJoNwfPVXALwLf7oV5UZFK4hh3FB87zM",
  "key33": "qTuQnSdmeJne6po613ctyY2CeWFm4JJrXk88xDhQj9AkaxhfrDPugjK26KaxsWFzoPHupYiobsxptx59jUDQUi5",
  "key34": "56koPSVyQGkBtUkHfK1vmppZn4Yhta6nex68LvYqFH2r3XpL8vaVFzqhNNoSaPWp1owSMWE7ZsVam7JJRevJZvwx",
  "key35": "3X8hKvrWB2NdoxKwDQ4XMSH18AAB1ncULwtLMG9nnRSG8LFFViEhukNwF9YWiZXcfnrWzCWTEYXPEeV3WXiXJyko",
  "key36": "31HYAU8XQ3WibqczreXvnyFhyYAaN87kZ2HmoBe7swmiwAzUQkRHmdXnrurVrC2qT8odQ8Cd6pJrGqzQmtCHBnbG",
  "key37": "2Q3ecvtGgB8CWZUC3U4qqNJtC6SKY3HZa146MfQ5FfSq2TgsFgcAr4mZvKNe94o14vSkLXRUPCxGEPYgHYAZH15",
  "key38": "2BtdSgvmi8QkGoN8pQkxcVDHCSKshFte9Zo1Vif78cYcdaKkVYGTnjw1nMrzbKmdoFZ5gPWuTckur5bRpCYn7VJW",
  "key39": "3aE9JPRfSkkbVXzFvzFqAAeBpFG8zdm15EgWVHsHbZ8h76rbsK9cC5hEsj9YEEjTKnuhVUJytPRJfyMHTv3XHmYP",
  "key40": "4Vp1d4BQtXCHBt3CBoENzzFCmPQCRZmAJztBbKyV6w4qbCZEhCRRqGy3DaXLtk46VpX9ZPyozMbAjTMJW96hJmqG",
  "key41": "2jU7t1CKuJkMBFkxUNi3dnmNKqLdxvcUYYSauchTkQd63jzBQc8ZSQ5h3ouGWsHZwUefuyXbUaQX8X8bgE1XUhr9",
  "key42": "3fjqpvpBnVrLuttUh6GYuya9ZXk3HeP2M6dhAyHpB6eeE7gmvyjhrB3ewXNjtqhf3X3q9vAK9V1VrXWSJrKXtxte"
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
