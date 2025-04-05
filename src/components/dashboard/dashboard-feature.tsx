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
    "5nBZ6CLNNAN3ntRn8eyme3gpnXvWqXtogSF9Usz6R95Ss9Z3pep6VfG3LKR5b5YKpBmEyBZTVSctyzkbc4UcQ52n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nFL3GwGhAHfNnmg4XJJQgpeLcfyKQjayyHUmPC5SjC5aK2bf3FtuxWiZQvP3dUbmCQyYwZuXSvmFCENotvBJm11",
  "key1": "27TuAQXrMJKRDTbiRzeFmQyZeb87paaBX1cdh1n4c9YaQPhCEjb223i8BSN4eSKBiAk8zPLjW4WxZSicP2QgWbWf",
  "key2": "2MCxRXwYYywwVYHBtqy3BwAJGKiEGJTv8z64zdd7J4PbqvnYqNN5jFUxwZYDCGNLGMWLUEYLZMS4AoW7qEEx174B",
  "key3": "2nf2oioNum2XJx79g821GNSoD41Ex6YYccvbtvhwU243vPZRQAuSKK5ixKVEkWFVheWVVNNvErxntCR29VnYbY5P",
  "key4": "5bcKAhjcQibQqfiwHgp5X4E6RiHBH6LvfXYugzD82ErJxkaV9CwhYKhAcwPcACoUwSTe4Q5K1ungvb2yNKAfxiZ4",
  "key5": "b2HrRQDLQv4AbzDi5RDVbnR9qn8B5sivdy32LMqp4eVyWR7tzdpaY2Kse2WntS2KxwWZLbG76F3t346EFoB5ZTE",
  "key6": "3yougRytSa2gnYUKEJ3jTdFT7XVgZmNJf5SFPtXpqFcBAtWdf7KMN352FKXQhUDhDrtL4Va9KPCixCZq1UxC4M91",
  "key7": "C4np6QTze1o6FqVAjxjbKHcbdmgsYYa7F3H6QkacqwQaXrh2otS33S6Z4zGSjvFbjkDAk3Fua19cNicPyoo4kjq",
  "key8": "3hQP2kEkv9yGGvuvJFuLuF96F9cNHSQ4KaeSHJfojXqsmmQjYdrXsdZm13nPtXUpSAnbyhce4eZTjbiaEs74qctr",
  "key9": "4vMUY4FZMgHwAzruQhqU4ejDtUceajtuYsmvYARfafDJnrZEmQvF6FEKEpK5x5gTPtBR1GKKECycWwjcH4GzYYm1",
  "key10": "4ShXjw3P7Ru6Q5JwmmTNgTYsokCHYu9CQiyGpiVqfME9yDfFipRtyHHBsCCFwLExsFm3eyWBx8XSuVMm6hV3trnF",
  "key11": "GkjsEf8FpgkGHh7ed9yxUGS9HvvQQ7iTRDJxVHTqZmnnqF4aEs4LCAtdHv4TSjb14GKFKVP28p21g2VgmKmrwrS",
  "key12": "23HJnipCQEiZcYE8QtGbQnxyGoyk39vC6zC5qYMd5tco4Qscuh161muXkiUdjKNMAXTRYgjfKZag2pMtBzTPXxZu",
  "key13": "3dhzenwq3GwV62ModNnu6eaWZHGJ2hnFx6HJCYGBvaCLPopTqhXzwnFnCSBnaCGRqMRWAfiBFkNhDjs7t4kU4hbh",
  "key14": "2d7g7Mo1jdTE1rETteq8HPXqgjnkYhrC8RDJn3DA2zM2osABffH4MVbHYZzPGPNfovMFQcQ2e6sZYfyKPS2fZJJz",
  "key15": "2o7vG8tNjdvR5JkYrgSo6eFX8kbNj3dHXdrwf4p1MS1tJXjkdeuL8wi8RK8oe5HWyP88TzFKeboL2e7T7h1hTVve",
  "key16": "3rpJMRtZpTun9jV5Kq43gQWjzmNS9BT74VgE9HCf3EPLYTFLibMqpdaFsCKgysVXqVGufgeop5HSWGBhw7t51EHA",
  "key17": "56161ZTM9BstgyvD9gyhQV3FT8Doo3cnfJ14DCnQMF2Hf6DUE8KkPizYHSXDyNC1k9Cetb9MUvbxg8bVdwcpWNtv",
  "key18": "5eFhAHewJQheqMKeMddRSvGnyxSNiqXvJcJyLfaqWKtQGNBcFtnxhMtthdrTcp7wENkCNreTPnRv8meXPHSq9t6e",
  "key19": "4m2UHYcdexmwcjnCcbfP3A8pMbrTyaxqw43eTDBSZrKwLazxqNdwUAk6ajCmrsHMoN492mn3bbT9uPqfgw5VwqMm",
  "key20": "2K5JBg9Dg4tTEFtgM9MeaDYvHivQHB1FqAhgH56x2MSwNawP5r7pjtCmSGtyPh7CGujLWYcpQWk5JaZxghVuVQYU",
  "key21": "4SthY7SYR4vAd22jZUw2FXQqhbsgcWAdjfkMsoyWiGPhCo5tvetxAPaS3n5pLLBeqcJDAb1VCCjqwS3TMeYxG9kk",
  "key22": "4WtWoy4ZNoPmfSu77kszxZibxyKDaMaJD1yJvGRC41whBh4YfWAMhAPsghcG2P11stBA6LW7BTtbvq5P2cHPp43q",
  "key23": "u6S9onfRrMTGKLzsQxruLmxSgnJAkRtRM8wgYbdFN7RUNDKJLc1ibzTvtv7naNCFSsHt9vgLUs8UCGvUYVSGtYh",
  "key24": "45ciJtMkNBWCSbzycfN46RYWzWofRMJmaKT7djLCVhw4uWkAi6CQ1xXrA84iC1kiofES49WhQHZJwmabQwBqRMCt",
  "key25": "5YSSZ1HEmU14Sasx6D913a2mr5wFf7svzQ6FmWQMUj6CEmtF7GoPiaVFsk5fCkX4h3AzicX9QcGmpogVy7YVciJ9",
  "key26": "ovdNtAwLcZBs1bjMj8WkjvcYLgFW1bZYsmaVPoXq8uJbsQc53fm5KtZhAcpHjPHqRRH26zhYpP1qghZS7Xm1zrH",
  "key27": "5d946NeERrqX6u8qhvvj2igv9x85PVwEa4PRvJkdhx3MgvXemCsDJkUKfkXUDdtvjXMEwXmoX1bn8ZwxoXXn3YAS",
  "key28": "4VTAJAfFRqtfKH6xsb7KTtZNq55t8pxeQUAUMP6zmZFwJW7uQjHytwN4vq3jpPkSiHDAVLfvuuAq519C6Q1MRjYd",
  "key29": "3Gv3T8GPxHyw3FPX1HAX63h2P7hPKRmDmwLwrREon7jkL9ttFbEb9ymtmZx8BUxrZYTNF7XkJZhp4TWZcq7sB883",
  "key30": "JefTUy6U6nQuZ62JqCbLe71Dbej2npJsWXq4gVJPyoDxzTnLo1PT81hG6gJJ3yy4K4AsTyxqsDo7hSXDVFifJkk",
  "key31": "RAfztuiruCN2QRnUmrkMuiSMB3VdPc9wSFbETkP4Rk6AcSXmFNdGVrjVLJx8J3kePudd5Bdahh5BNjFx9QTrBDo",
  "key32": "5WmzfhSCKEdRAvQtJHeajPQyq2aCACVVd2ySMUkxhoUMUwsqYL8rWdEnWsF4KqqXAKdU3fhQooZsNNkDn7tFfuh6",
  "key33": "3HRbfAgcBhSVFMD5r5Cu7sXy5FfvU1WnSbjFdbhzFwzeabrmksfkrnei8Cara6CcsSi2VQwkfC5bNrg34aJ2uWRw",
  "key34": "3jXqGFzs6CeBoTCHcuF7wTJt2BgSC2jF828afzsZFudiz2D56EwCMkLTSXXqLPL5enQxJMMAWYgjVgVBY8dty714",
  "key35": "bpcvUJz3bnE4P4C8zR5aaXAhoqbrb4rEFhhUgxTY2DyFp6u7XvmnL3aQcpv3azqM8QStjczokqeu1nmBNL3PhKq",
  "key36": "3CH8bZZDjTeBUpGUsWXtfs2ua6MnpRqPfY2YDpp3Rs5DFMC9VfMQwiNTbb2aK5sDKPmpBH8Fcxe6tqL9B1qfoyT1",
  "key37": "2cWtamF6Y5CRbo3vBeN4TFyBAn6vgJxCzaZWEFSV9u8m1PyqdLESmd5CyjoAP5QBZc6nZPPBZu17Ad4rVCUY3qNj",
  "key38": "nw3XHACLHpuw9rbLb4MPieC1nVduaK8XHmZZun9QxaWRyencsLq5mctFDzh7cLkRHEJzscNQZ2GsHFxJjhrbzqh",
  "key39": "2GKGRRRvSUCMrGXZ2LFF7qCeoXQe3GiZQnknQSx7hRapT1zhRpS9NBdPJT9kJuWfDiZ7qdrRTxUMUo5gFXKGfKhP",
  "key40": "52a766totmS43JiooToBr794tagQ88qn3ZWg9mqWT8auTaDZx1GqXCZpboBkTgsRV8WGn3DjuCjYvVzc6xnoLyTv",
  "key41": "7dkBSeABeBDC1v36fex9wCYgbMbmV76ZdGZAajPfLAUHwrYb46GCjgyTWDVPi4MUZndv4tVMQ73NVSeqr5u8Mgf"
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
