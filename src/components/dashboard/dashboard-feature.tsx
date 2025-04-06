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
    "3YeFcy3LUrJ6xLEMZ9UDJvJgaVEMDr7vsGV17j4tLdp1amqcqTz3ZZ542vP4Nfuu4xHoW2ViCkMvP8b1nyTL4U3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x18iKWcEfqzmcFYYYzFMx5W9acKs7ATYdmem4NQAt3auoWqfeRRNXZJZ6bQTwf2obw9uXjLTy146VPdaxQbHCCC",
  "key1": "4nBJQZ7PfbSiq2yo7bcFAkS2MHiGqNBGCQ2zv6XFQSv4P1jXqS5E4GfKyDPgaCAfNFsJXvkVhRPQJZWT4nkU31xF",
  "key2": "3s3LrarU4BPJ9p6TYwZDEYudybapAtH2UDpWhsn2ViK2sRugWqhJhULJpjDBxSJgoPiCS5TpfrUAQdzT5LFPjx7D",
  "key3": "5VueB7uQ1L1vNGJyk2g3xKVyQinuhoQFjJ4j5D1onGXwYMeZPmzEKfnQ8JkcmcPeeR9XDLyzhtqFokuZFbCP5UfP",
  "key4": "4RuVmkzbhHTNsYmQWiUpUqKTcwhPz6thkGGjY3EdtC1ezWAbZ2qNgrWWpg4jyB1rzRDksUkKY2JMwayc2ehgEMZC",
  "key5": "5tjJSgzUTw1yrHFkrQuydEwydtikGmXfqzCdJXSStLye5BBHPyBsxzxgPFVGEhLCbTXTSHi1s2evZQiCn61hetzR",
  "key6": "57K71DwvPnmQAQf7vW9iNwyZDTrPRtcJk8Tgo4giw3EWQ1ALNAi7Pwxkv4KHeGwoVvLsUxNs9TbiH9cgFLnSZoup",
  "key7": "xB8VgqoG5fyKzigwfjYsrtDJPUFykA2fNnckejXJVekBdEcegPsRqF7sz5h8uDGj2yWKbikoabCeAk9GZBgEeWk",
  "key8": "15iX6yttfGcfEyX94C4BCLBs4JGMKTMFWQPSE3pwkGWjxMTWLtq5CX7fq3f9wJy1rrd4NZbT1rvi812WBS5rN1x",
  "key9": "2Uasp5gwKGei73iabrez5h5DEpXyqfSoePY6u6Efja7GreqwgNJmeXtRuXeeMshTZtVjtPKTwJCsBDfFQUX4zVtD",
  "key10": "4DJ6N4eU8mBAgCyyNP1sq4zFeRSDHP5gtsWePVw2d6F6b8DGu98WCJiQY7E1Fkv24cYRWLseaSd2qnFyRQZumiai",
  "key11": "2SwcRHWWnZtNe1JDqKUBbnPN2EwA16nKHS1GdVZwREx9dbuqhw8bbMw3pe67iiksWHnhBPXzX3NJWhffk2LuvC74",
  "key12": "5b6DjVC8kF4HHmiQ7pnMWNCkcrTudARd48n14bojuoBYpCf1ugUY1UuQAjEx88LMNMW8ZMNaKwcH6M22GBg4uP8j",
  "key13": "rzmREGCNMFSBi29ERU2WtfAAdJ7u5Z1yujVm3awQd3xsMK2uhrus6aqHaarkkoYbnxKxnXQtJ745ygdsi1H4fGZ",
  "key14": "2xjs1YtosUmegopEQeHXjy77R3an6dCeYq4tzE9WuduFEpwFGaCJ2APvumF9xJM4xfURvJkPeEPcARWYRB89DAa3",
  "key15": "5UVTpzqevdkWoB8kshs9xcYV1kHNPpaHEEtqYgtPYV1QYPcCUfYWWLX8cZG34qkrJACP3M6RmKaXh8bgakf8wD3h",
  "key16": "5wsus5QzoQrKK4KTdrXKHCATDwBWLKQNVWgviuTT2gceZJwYUNgwqiCzFK9xkajWRN3yMXZkTioXYbbMkzgQ3oZN",
  "key17": "3XFZFVyUG8X41ZYW3kRbxVdwcL1hfbYJPeTdgyMPQHd4puTMxpkYuGm6mSd12zLm8xrfugfSkB73AqaU7KcbxiC8",
  "key18": "5G8dmhfnCoXGAvvZMuM3SCY1dJpzwuGrUGbHcCXEHgghK4ieNtvELKnY2SUhNbKN9xPgPucCmPV5naGHuoC3RFS",
  "key19": "4tZKPw81r3UeUVyCmVN1wrYYN1dw8kjaY2dq9XpqvqNSo4boDHucgbWH6AnSyW9gY9epV1Vg2xuPm4J3L7W1J1ch",
  "key20": "4BgFTRAX7fcogRihSu2CmmbABHctoSKmzugYVrJKedyrXrkUY8kFRu4HQ5moVBAnCmzsHyir7ygNeXM1nbRW7ufk",
  "key21": "J6VjVubFwnfffLd6tvzRoGd1pySfJvPmbRUfviXrgxjd56Kj4Ak8VdxiRxhDC4NvWJXheCgaWWabL7LpMGzH9PY",
  "key22": "47etmcxoxg1mJRURtDKaHMcdY2tVaBvZjGGt6vYFNuukrWE3Qbp5WrafEyiyCaPcyAKmAZKkZ5xSmn1tC5CQDsq9",
  "key23": "5vba1znPC9hLADbByaX9dg9SyKtUsKfqKn7afBQvoKW269UDLkmaxRiJqcuzNwPaavSjak8u4ET9z3sEGL32wLf6",
  "key24": "3gRTdKrCAU7vAtR47xJPaSwNCzcr1oPdQF43X4t2tYqv29BPwq5syCWP7vu6wfmp9hPUXLkW4SWDCnP5Th8tvwf5",
  "key25": "5zuNKLjEq8yAmK1NiJxFoptotwTHNy7KrMmQ4htQ9KXR9hftudQuePCMjsDDnwxkq4yp1E4RPKfDxjPZCR6dfQbH",
  "key26": "4t93rRau5uY69nQNb6NEUMazWaXhmMNrCJF5WhjYnbFnRV9vVm4yLsxNCAcJDGojuiUDJFMMAaTjDGyftj6Gjqv8",
  "key27": "5mifafGdJFrdP7yhqeLcCCbmokpTHv3DVpRPvn2AfRMWx5RZbJ8MScH6NLDWR87YXheRP71BU4aVHD5E8HkJwGgV",
  "key28": "3pQqfEhpnCJYMaHAENjHVU7aXLsUk8wBe9XGJhHwBMXaTJzjpMj4Ura7LwxT8Vkea7aYYLLP4hWFj7CEmbwBpzJa",
  "key29": "LVjV464GKxaY4RiCgyYCygP39QZodSVpMW3PprKzjhgE9tAwqMAt4AdkRcVtugwGmvueeL2gnrtW6uWSzGvhUf5",
  "key30": "5Jf38MurqYmRMNEUFtqrcJtgL2ch17egqzkWxgrRH3bS1A7mwop1RbGX5saRnT7UE3PQSD34StTdhZ4fuMtR9DEe"
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
