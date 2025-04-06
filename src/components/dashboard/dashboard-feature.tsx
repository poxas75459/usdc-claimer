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
    "3YKw4uaJsGxGQu9gJQjs5PN8c6GLs5jaNiKkiDVnNsh4xmvQcQXEoGVfGXju2bCi7pMooT5f2YSQmtsAZ6jpSkYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6dYygNXewf91GctdfeLZhXajrJi9eJUCD5Q48WSvNSjxdqNVvds9JaDrDMFagcPagEmcVsqnEA6vRifKDgQ6Qq",
  "key1": "4UHgP3x5XHu5Nesnd7nBxUpGi4RFgRAY4BDy9daakoysVDDs2rToGcqVni7fQGcgzwQuNubBVL8NhtS61moo1rgN",
  "key2": "3FydLPMVL7HQVKAMfj2xNmiom41Bte6s8UNvpdohzycEX2ARtnCRq2g9aRvUiUmNWxDevpWBCxnsm363gRKe15Dw",
  "key3": "XpMyCmkQtFFyi4hsN1hmjnB4dVLFvTtSk92DQnHkmCJ3cPn9FoELc1n8i8XeJQX1d4rB3ukSS1x5eToTB5b9kbE",
  "key4": "34oed2KTswA46YX35d3jWsdcLgAXpVtJJR9JBH3PmKNi4wR1KFzpbMdx7u8BxWX22xduwpkJimgeyeJmDXTCqNXg",
  "key5": "4MbYBxxmrWTe7brXZEm2KpAYsMoZKhvHecDWULYUPDUSRk5tdZbnPj1xQ7gz3inKPzrq3F7a8dASFBB8dCovosHP",
  "key6": "3rErk9heCnrRDpmKwiMKsXi5MJL225wgfJHJsPZLH83FSNBfHo4XueNAhWm7VGTtXo7MQkb2m2dbZfCq5aAGWD16",
  "key7": "vDt3J3A97zVbTfoZA6B6P6h9iXh2r3PMFxeA8EWJQZcB36DkEd8uhyS35UecpjBKBKU68WDGdodnHf9gJRHPEwa",
  "key8": "zohbqD9sedvSbqfBXHbeCH4Yk8HxbFuhxahWbJJGth7TaTwbdLnbBRFTgNgBUqJdgYmauwgawug3QWeyeVoLY6b",
  "key9": "4gTwckLQST3Q3ZSXLvUP3bbySh4oU6JpSKPTDb7rz6DnubghtqMDMP9pPry8Wb1A89Ksyv7n5ufcVEHBLDDrasuQ",
  "key10": "4hPqSg1iNug6vutaKnrBpTWr8VGv2SMapBboEXTMhACvfsVHnfYk1pFJboXK8wPMp9YLtVjacrMffE3CnABmSWXG",
  "key11": "A6RDHBZqQPF71ut1ABdma6t7VJP8qwaKRfF5RPV5fjGofFapmgG36zdLNdDLBFtCWkM8S5au9hQsNbrBfBpfe7M",
  "key12": "24BhFo4iCchqUjRgEfdnAFTVLQ6D81AxLmZx7nirAwS1ao6c7TSaSbueqSquPXvdJosduBUNXqoD8KKBKLzXp8i5",
  "key13": "2c9hA79Vq15mxmdZo6QgBdDEAgn4W97V2RZF4ZMDdnJonEwTcmosvw7ChJiKoqDpnxHQLAn9or1LM6EG9xP3J1B6",
  "key14": "21FisUybULUtZHb7ZmDwxtG79tcuXrzAMuA324yJLMavhgTP8ZxAiPWrRpeWxkV1zvgCArnRTmEbicvmMGHjdXLv",
  "key15": "BF2KF6vrAqgfYEiAXu1m8zWkn6VdsnMkhXXQy8a1gSxxcMQFyGhe9iweHVQdGEfG6RFnHXiB4hVruHsTUe2qErb",
  "key16": "5ggrXqurEuG6dKttHEYtvBCf1FbjaXcHQaAFD72Pah2YxpScNKVM9umzrGiAEjvbxAMhe2TAbqCSp84k4dVMTydc",
  "key17": "2BYwSMHWjzmN5wxznx1NTW8RWQeyrVArRJRGUyzBbiVqRQU71C3NwpzhzmawtGVnKbsv8gkiB29zYXy2t19tVy1p",
  "key18": "3DjohGMwvyJbdTLoq8C5c6QXPDLLqRShnLJUMZv3zjVKHa8KqDrjo8QVwyqx3XdpRstmjqzyhK5pYcoghDaTuQmK",
  "key19": "3bSA3VwLRJekcCRv3yyBimZLW8F8hm8a7oBef5iafBbYPf9HhcM7Q9bBCNUGGECXBsSRwY8W4Luzev8REdvZfgSg",
  "key20": "yfWVWfTqLnYYfim2Bhgyh4jffvbS8RaBLGuq2RsrnnL1rhEr7VMJ8i1gGoYuFPHAY856NLKunJa2tF1k7vKVqpH",
  "key21": "3M6PweYgCVUgvXX2F2aw4zoFhqjoN5E2ybAr1wbBu5vT8DadqAHqzQZJDTvZDdTzFqFfk6YJC6TdrEsccrx7oRsw",
  "key22": "XnYJBokQ9Ler7KFr98tiBs388iDSYQhgPX5Z4bNGVDZaaYMPx5VA8ttkEaanB3vuZ2viUXzZPDtVCybvxzxHVHL",
  "key23": "2123yrFrc6qBJnFeEzec1HWqbvSMY5hkVbhvAHPfynMCq6waZ7kNug1wYYBDZs1Xw65coPESHPBaAFHziXe7PZKm",
  "key24": "3Wm37tdXwLrjgzeezNmv3NbQyLvcMhUqxMEFF1XawCWrgX4y1mkWQ1HSnAy8ZbGnvE4ep3cpnTxjTXSXDUAmCidL",
  "key25": "4zHHG4iE8EmcRBakASVncBGwMtA3HeNNxn9PNhkUFuHk8nbr95khUDffWhjN8VqtApCFYqncQzbRFn4TP5Aw6Hk2",
  "key26": "DxW7W83mp2fVN545mUYmoKqSNKryKrjkGEEPm5Ti9xdeF3knFghyL2EkmNG4EXSnxRujTMLBPhR2p4XdPGsD4tv",
  "key27": "3EMQMyahaY3cC8qMXQgWoL8s24r1P6JvbmeNjKJonozb99ScXDdJBhVN1fNR4J4UT7HvyDRc2hc4fLb6zCVuqauU",
  "key28": "3kVcEV8Rx1a13Gz3YfoveCMigZvkwPxNFkXb77rpyWh2KjSJThfzenhsUyS34yR9o4g7rUeVN3TyxUAvVGNWvdA8",
  "key29": "5QVMJsBG7WDH836BC6cc1qfJ6UPDSUWomzWy5ZDPNgGR2ATYsy3QdJi1otjDgZAokdNfjjfBb9okWwNMoV7abWGz",
  "key30": "3LVSTG95MxC52CBLEDJwTvBXU5gFjzmBsafVgpcpr3KX52646XTQeYwTPpQKrcX3B5uYZcgXRC8qiRrcELkSjg4d",
  "key31": "5LGM79NvYnKeKsEZozWynCnpTDeBQ6N6TFvsHy8w1fMZSmHq7d7S6vbwPHzXQqyYPuQkz7hYnsyi84jk1p5sWbxv",
  "key32": "4fR14uVYi3SQQ5EK4vAGmyCih9abKEDbHLN8ZXV4KHFWnfTLQ1H7YvdMiP7SvqoSjD4cPhPt2otcyYn8Udiz3wX8",
  "key33": "wcB5zJVANmhYPiB1JjgPNy9je7v3X3A4PXpxcESvRjnGgYqPYdEUNPxmV4sMBG6dJFLeKp1ws2WLMu3uLKVRyam",
  "key34": "Ve3LoD7p7cuAfferREJ7diG9TCSFCFps8oZaYvrvC28q46PSRPWRYSW158jVCSv15fr3g25gMuJXEvREjALnYrp",
  "key35": "2d3dZB6BJebcmrB7UMBKMMb3cbEncRiH3M8TX2q8vcxqUUFMfQB2aLpfDrjQRFwx5rB5VkjBdXYnhBFjLpbYFvMv",
  "key36": "5zbrGsgA74Zj24DZ5c9bRaELNPeobFFniAxuZ29A8HgjrWwf15f6krXSVMMmoTJ8MTCtj5whAzkdSDe1QEW8eoL1",
  "key37": "FQod4U1gMSWi5M6Y7g3KYHjZAtwbQUo3gd6MnZGZucvL1xpv4yc22ZwVUGXPLhG2dSVNrxLtBvPNFiU3S1yHE7t",
  "key38": "3AL9AvAJftiShfyjZ5zbgtygZntNs41CoYNAxrRkiGm4pMycMtmE78mYPwtpoW2RzExzhH21cGUrw2dXaNGmBxwW",
  "key39": "7UGJR6keMSvAPAaX42qznaEmzBoxfcWzqmyngDe3zNdZMBp7vBRkZAhEoSqZ6ns8aVCPEQBBmiJ4QEn1bNBLNEH",
  "key40": "4qdgW62sYz1iQvxi8u3uNBGGiVg8L675e1cZV2t9xQBoASEB7hxAF4pJrwy2srj7HagbSCT4QAkTftoJj27afWkB",
  "key41": "dvkY4tBroeLywL91f9pZihH5XNiNHdWog8n1m3YK9LLj2QfrXkPqUjLWPD81UMqxhGaLPrxGiTX2jQVjbQz2UVz",
  "key42": "MNWq5KMoAgXdq8CE4rEXVju7E3SwppZAzqetuGas5tpPWWJ9WVcRAxEAt5HWsH4kXUg1RCYu7bJnUmsyDbugcKR",
  "key43": "5DQDBPXjgHtLUvUwEnGZ3BXgsMPNbVuuVuQ4Cz97SAiFJcSXPvG5UesgMKTZoD3MLJUJBeqctCgfM4jRWKpM4QqD",
  "key44": "2AhJaZ2PQDz3oVXgv8MweHvHgYsYny2haHDV8BgffH3WD6CQMD3CEZhRrqPZateycHmHPn9gD4cUwdXjtTg2fZUa",
  "key45": "2WewDEHZep9CQDmXb8rcmYmydxiVYwuY2QFpREggbTt2Qy2XyicvZFM4YFFQvcHQLnCqnNid6DrUyypDGfwr27Ja",
  "key46": "3eLS1ckcxyB5cgt4qSDYiooHPnQRVSctUpu3BuSviP4Dxv9NGgdPtvY4QkDDiX9z9TXX17Qd3rZ3uNefHK7NWHwi",
  "key47": "3oQ38g7iZYRqfV328J2skuSX3KxT5MEA8pwFdbmN51vX8u66S9Pzs4paePwB3AguoTXoZpESVt81hK71Syea1s5L",
  "key48": "2m9j59PgHtCkzfdqUG6MjEpgX8WaM9uXDn2joJW15WSfwBc2PJpA9dRpPoCyhjN4cM5W8CyR1qsNJk7h6QeJB47h",
  "key49": "2LY4WrucRRTs5FT2NgeZfR76yN4oA8PvAvVQW5xJaeXU25cT2pPQ4HUzHqJB2A87M5aQA7cJY23AB3b6aYex3P2o"
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
