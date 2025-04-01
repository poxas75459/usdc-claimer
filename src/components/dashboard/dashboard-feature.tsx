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
    "3CuxdyUEvy8wf1mKwwqrUZRmaeztW2YPRqbR5uqhC8KXS8CnpSgxMz7oSq7cuXgEKxRnXpCLmYgr5zx889jYLcUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jS5L26b5vzEJzUWRfNBhXek9QA6P4zSg7zE91DN6UeWHPKmUW9RZtWQk4ZMsYfNVQLKzChTdq2aweCGM4hoGva8",
  "key1": "3uJ7UqP5xhrLLAw6TGZDUmK5vhqRFKLmcPfVVmS9NS2ggNtboNNwFksbeQ4Cjoh1p5y7fAG6gBqCVZKokou1cmCG",
  "key2": "5KyYmjmcWF1LRyQDh91NjrLeEx8TPkWbyYePpcSdUG6zb6smGmCiQANfmk2Urotm1PqBikV2FN9xCmeRRWo6waKi",
  "key3": "4CrhHa9bKViWWL9Xg7udSpdP1Pq6jxnH9n9RQqTQHwyWpFgt2LnBf8xyUaZurUw2pMsx1LpwSYm3pxKEC44MVyWt",
  "key4": "yqu2A6uPzUnAG6yZqXLe3925LQnb1ceXbB4wvSr1JqRud55aP8HoqH7UgvG8jpMw8bYo2v1PesgoELa5mqBf6j5",
  "key5": "5fgwDpSsuYoqwGC2n2WqtuyhBwFNUgVoMmb3iVwKabSW8V59Pr8yqEp5UB6u8RCUWkeVZPeqVo2UKuDpsGb46aod",
  "key6": "3prMDUZ3aFtAH4e2k9GMSJi3KdTThiP3bmNxTf2HVFdzRGL7MmPWBoiYqJGUwccjTHLqUe98q1m63kqLdrsAcpjk",
  "key7": "3zztwqvk6yuW6D5jpEStKrSa1tA81cmqSzZfrgMJwsbSSnYxtTUzec7AjNkHvVQoju7uQbMSQ1XvHWB9c5AUb8zS",
  "key8": "3dsd7EYNuwSrP8wHuHYSLd4pvNZbDpDxLNKiKnsKrUD1iw4eRUf4QvqSHMAUMSk3Duz6Bj5HixUGYxPEhqgrsKRZ",
  "key9": "5zA2YbnDG2yRjqZTmcxLKpqvDUNsL2BEV6xTZP9MtFc6SBrd44aFtXPANsr77W3fvmkFPZf6rCzX91bizyeovPWp",
  "key10": "5URYZsrd78TuDFTM1yX3kNHTCDTfyG6megQCaP5gixwuJ4WmWacQLZXgqMaaqoAytYyB1hS6SE7kf7namKQzXGUq",
  "key11": "5cadBYqSeoDUsURoA7hRHZLavKHo2LKiBUEB34vGC72jECvHuE569xrCV2peUtg7rrDG9vNewgrfoZLTSgQs8DTz",
  "key12": "2NRKtVyFLKcxYUh1274Cx7cbgLVNepUqKr3BxRAi5X3nyPVK6tXAZSGtgoAVVyuBweRuM3HBiv8nxZ7BbngmKUZ1",
  "key13": "5xLKv89PA2hn5FSAQeNBTcChC4r39rKgE45ajoQobXUppB5zVfRj3zCHfBJZztrZvHsNSsshMgVWARJXF2U1arjA",
  "key14": "2HdBsFmRuPQi2LowTBdtL7k78TGdH6ZQ7LLKbFGizU7kVUWwPBzoyNRi1NBvJ8Z6aUGf1Yf96a9rsZzZpfsRgeGt",
  "key15": "rtSYUGfjcdHi8ksNHo1V1qFxhTkZpVQ2kyEzTQHaWNfXAEBQZ7FfRtZtAn7s6t43fv3da2qWsX9WKNVWNFWq17X",
  "key16": "5AY161rQDUK76idU2cuhQqNBeeqEQrhbd4pJtn7H7LGVAkffG41xcewM8EH6zWEoy9YL93UUPxPcKpBwmsJvNfdA",
  "key17": "4QY2ftpm5m1BKq5zsT6jVonQWz9m9RLfAfiFE5Q74wLrYqNcYtZRrBKv9onkHnFAaDxACxBiWAXqX7Wr4mjN9LSt",
  "key18": "63eDGFca6Ee8GcyG1sJzyRNgAkpx22JR4QP2GZGynhjxzY2fhs6KccEtvXXNMFw5qsi77aKS9J1RsA2A2QmZH2N2",
  "key19": "55iXGNc2kP93PwSNRwJjo5shbdMEBxenpPfk2ZvsrGFh6nTi7SgYkE4mDQFGmP1CeDQvDBWR2h5gE6AAdvFvL8db",
  "key20": "2bo41wRKYPMQAv9yTrQnQ98NMCicdNcAjgVyaYuRaP83YuMvETa5XVRYzwBDBucn4rLuXcnbrekvMVuPpnczHBHG",
  "key21": "5imirfwm6Wjc8AzRASxV6ZX2VPBW2ERDMbPk4ic4J8dw4cQP72VsA8WDi7gUtPzfbvJu2PU5xSSEUDqjPhM7qF7C",
  "key22": "2gEFFmD8F9TfNq48saJws6FEdKrP3xYf7oLqd8iw9TxfdnH74B86biSHjga5WbNR9YYofXF4sa4Jx9EsD8KE4StL",
  "key23": "5M3FKVzmfJZiAfasV5tvLerBbppaXrrDJvxBqTQDcotaLHULn3TnwgLqjjnuHb7DREwq3ijm6zJtpEMA4dvd4yYi",
  "key24": "KYgcxQ99T5xDMxwxigyc68EorZptAscdmP9syekyyhQppQkS3ddvC8a3dABzkujFkCVe9Mpqnim6vrSk9dDCi4n",
  "key25": "27MMREUX5eZaAaJsKbQKKTUT9cfwwEtXiJAQ2bQCWradb5G2bvFSpndPkESvCAUnxZp1kYz85skXCgtMX7LEvB6K",
  "key26": "fyHP2KJxeewLdZTxTVAEqKZPnaWD5gtQudCzcD8xuaRxWACfiojqZLoDMvYTCt1LEKJHcW1RuhnqCTrJiJXdJgS",
  "key27": "EwiSWKc6BbDV6xf2zCHMdGVX4HQHCzkq8k3XrZzTuU2RD8wAK81G2rGy7WWQr7mNpUSbrrWbmSZH4CrKuTxSGJU",
  "key28": "Jmh8zd8aA1rxRToCzS4J3Gv9bvVijwMVUuMF6KaHw69F4TyYTjGA2FS8J5Js6TC9kfMDPQvK71eac45TCfckU14",
  "key29": "2KU9zvy5Ts1yrcbNLHN7Jf6MXsczUoxoR3SEKwBR42F3gN8MXa32KtuQA6SfaLfj1G1EdNqQ6cf9cAx3Y4njrbEC",
  "key30": "64gA6U8wc2Xpz4WHndYMJcq6p8h3ecxf7BLF6MYYa14Xg7bXjjbj9W4QJp8L8hwZPtyQJdLcsPN5sx4ZDrQgdCH4",
  "key31": "4eMaRAQ7kwmuyjyq6SMouyb5mdxLWDZWuP6UAtwxGfBV3abferK99QemH8CrxRMyMtMAajEgaX77RdBvsB2LmWr1",
  "key32": "JZDcvhYdv9pQiCP4q6gPP54PREzpewFC1r9ytuwWgcDfXwhtZdDygPVB3h6diSfMBfd3gkm5NKx7fasb6vfnH2W",
  "key33": "5TKQ7rpM6g2kzrSRWHrnpUoh546VzRaUwB1NEWNVdU6P3jtZsRwzRMZ9aXkBsZwPSjdVPfKmYsLquJq4ruekNrnY",
  "key34": "UJmJbnrxuRsAfzpZJYdEbG4R1BygJtf5pYXn8G24eU9zgXxgDsA8pmwGM4qD2jdJRUZcrgeDk17BMgJKtFNzXFb",
  "key35": "4Y7BYtEFCCjJWRXW4YiQ2GZFAQouicuoSrKb3bzLRQthi2PU77hFfhz9Pkh1xNTSsrAwcvCWD5VbPwnoV78BvB8Y",
  "key36": "iJMiQ3RAXNMF6f5XNh7HQo5ubpq2JBVm6irdQAVrsvDi2AePz3sKBDDgiqqLgZ6bh8eCUQFBuigoS9hi72eUZEm",
  "key37": "341LQS2zdafoJzvfAjCEm4gC4fhJ8XLG921XZetmKdFK2zoeZ4fei8ZE7UTWe8cSeifnX93AUiqxxLEd4RveyDj7",
  "key38": "3ssQYddCybsH6igqRscFXzrU5CE7KAxkW6p2h2ZkWGmeLGjni1aXhYkzq8WAN9pYyPR7T3ojtLSbzCvaEbVsCgem",
  "key39": "2xdNE7CmLxoo9o3NSHzsn689etRR4Raejuoj6fKoN4knErf4kG7u6axEj91CnJioU4tWa7UXF9LHMniA9Um2tGGG",
  "key40": "5WCwixjxcR8g9K5NCWfMndHj7fFBgxDXAcMDxHytydHWhszny972GtYuwJmagX4H9pAMosiBpPWbHGUYtm6ujgie",
  "key41": "333axhkExDf7KZX5UxMS1yf5zxqxbynQtHKRVERasvZNPiTb9PsVyZupptYqSxGuQt9HSy4vuXWsZcSWHxpcUBqZ",
  "key42": "9g4GiCJaf8a7jpje5QzpfrhvaDHHXSb4KpxAAU3a8XV59WcjcAqAqWrP5LEmkAzwsdcxH4pPhHc15aGL7RxNWym",
  "key43": "61EDR7BojsT5mdydMVFcJMJ2BL4w1wNBS53Xztkr4G4EQygmkaxoY7rFcFpMab7XyPHdU12dageUpirUWVprhsbe",
  "key44": "4gZSQozkB1WEgJY7e2XQvPwbEG8Dpvr6ehiXTgnSfVLnJWDPumrVvc5w6W8f1gJFQGsKeBnNF9PC5RrUJPgZZn4m"
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
