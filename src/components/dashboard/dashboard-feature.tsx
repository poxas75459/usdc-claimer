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
    "DwARuH634Aoic6A4u3CC1HQVJvnWdvVSDDnccQTTzJuaPiJzviVobTaKtkmyrBZa5PzUyCBm2f4j7nKKZVvp4hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gr3UNKtkWVjLZ6vSgKPpgPun8nmLzgy9kBjRgnvs2bvo4Z755M4CvYtAChTnQjQyxxkHEa5suCWCFmPwUE9xjwY",
  "key1": "3hqzE4gP7uPJHxZay5ncR2JuJneyHoyBRP2TA5veFtvqCpJFpr8uXNyV3NJZSNHCNzkFFrXcM1zfMgULd4wzqaBu",
  "key2": "3ozTciHqmJpB5emvX5QzKjVFcN3aaTmXMnvy2WWKEi9wetFJQRq5ei93fjNqnjpWa5GxHJMUh1XnUnNhgxCWzKkM",
  "key3": "2Sk6uREyCnqPeXYknbgafpTib4whGhgMion6wKW18qmVWfruNfGVw5K4BYs4YT6JQj3Qqr54ik2XyBaKVaTxyMgk",
  "key4": "2x8jAfTDEDs7TJ5o5Ltd5Z3eK5bRhoVoKK8NUCMFwEXvnjZXH5q1DAuwBULdTA8PDDke6nZ7Cu6yjkMSx6XypQsM",
  "key5": "23CTehwHUTLUHYPDkyRWDx7gynHWeHEPDmjJxyJYunq6AV4y5H4n8xiCRcQn8K2uXoceqHtUvMVKUrnNgTMa4MB5",
  "key6": "4iXYrnbcbKda8KZJY5m1a95FvVQRFYGWJX19dnGkxeQyzfUoxByGak8grA2UNHCwx1tt6bzdq6xAbzokAT1qxGte",
  "key7": "4H17Qg4ecbHvmL7WsGztKCJuj82TE9Zww7gDE7qGdq4AhnpwTv5N81K76G5tfTGUZ2m8zSfsPWxK6shuK6Lnq1Lj",
  "key8": "3hxc5wAgYmfepEwS8UAJpfD7FFKSh1dNtg8C2RvnmvNxStEaPyWJJzXccaz9tChcTAxpZdB6oqCAiqX7hsnQVrwt",
  "key9": "67U8MjeGZbAn6ryUE8aYA3xe6XTJyR2B8o3qjxg6JRWU2EAaYt9i7FiS26sYM9XKcFz7hpXbL2N6NC4rg3bwkKtr",
  "key10": "2k7WBHZZHmTw4iDgVNXSAmcKGHV8YuDY6ibynyYVKsR4fAjvGUycHAaQ7Zpkk8ScSYZ1cQ9uX6KrJ1MNpg3Kwbe8",
  "key11": "555j1Q88jcVSVX3RXVrt4ciMMtLFmMqUin5n8eytDJH4Ksuy8qATtYGgsuWmEp9j7hA3Nqp6w4KYSLrHP6jSyNVw",
  "key12": "59pugtn6c7U6tL7e5hQGSz8eHTixB3VbFfJsaRotH1Jpfp7CCdzvREz7ecHsnY1x5aE6CA9s2Zv8YTgfYAqzksJx",
  "key13": "2hKSkAxMdhvyQioRUWZ2dCKo6ZDcUatU1FngBDwNyxM3XTsAfStDJLN2VhdbgKNU3UNv6f8e9r6bRZSSua5kVp8Z",
  "key14": "5LBAxuqRwWfffdHksZDvfc9Fhuff5z12wkao633CcDJJsivq8atsjMD824fv4YZ2nxiLi7a8w2xtVjHdw5vuGV6q",
  "key15": "43jRLdmH36BBaQhLp414e6pT3DtBoq5zkVkLfktpijt5KZis2tF554oyCheYmco76gunL9qB3uhjKNZfTNDvd77P",
  "key16": "adD6GhnW3CgqjTc81saXsVWptXpNs8kzwRTQczHjeBpid2rJTzEXwgLmnQ7GPt2RLod4PwthKyYtEzYjDwua44E",
  "key17": "3giDQzsWdmuaUBkjxTD9Ymixg2deA7teUaVfp46csJncpEwcyYgHDaxaLH9JU8dH5tQpnYdssDaBgqJ2DcNPRGA4",
  "key18": "5VjGaTyiyVKTbSdbFJBMdcsScnThMQGojmLPUCb9wq4w8M2URSV57aRRu8emjh9JCkRfoFiuGxJkx6P7bXAdQKMc",
  "key19": "5gAH33fUGXwXvvBJEpZF83XyJbd7HDU7bQMJBCCXaCpUFkFx346pgZ2Lzg48b1P657TkoMj6fKHp1FssmPMCUCF3",
  "key20": "4gky3AbEMUCf6weBxUuDt5rLNvtQxXKfst2sGqu3rG6MM2pHYCvwLGne3LFfwc4q3wZ47xRKpnneH1Vy5C195DUP",
  "key21": "67NarRSnV1BRt47ZSq4hUvioVvdrPDitgXWYkvP1DGyBzqGrCsVGR4C6xt2YtEqjmis5FJUE9CDyxbZKLAi6HpKn",
  "key22": "mrAccbESfUNB3ZrWr7oVgUxUer7tAheNdShMbRLJqt17HaCDmraLjA4zgpRY8dq9QJEoocepwrRzKTQryGw6t3o",
  "key23": "pVwie8LV12Uxpy3h7ufxCsmbYCkbeyzx6Y29HG4ykosbCi2ikUssgCA9eHH3T1NhFiybH1XoY9R6WtB2p235UY8",
  "key24": "3Jep2rdNJFLaLEkYu2VQn9MFxvbtatzNqj5FgFFMXrqWgBSZtiSgqFjTk8X3n2YmLsGLFbRH7NBSCVhMbBVnqSvK",
  "key25": "2dQ27ncHtWcTuwWonocEab7juxpreBVtaatxihteCz57J7JRGj9qY74QMxkdLdjUVEVP3HZ6byuNtkKm4xkXcgXk",
  "key26": "5uiVAwiHdM8rmYLySWnxhWUWL1kCdvcQVe91W23RXHZZqCdonGziPgAi5pDwVFGvHZ9jM3cW1pi4pt4hfP2GKmpr",
  "key27": "3vcHRzP19GXzbbTtPKkZMNZXgPV9KswpWTVLSeMsTPCnoUjW9c4k52Noj61U9bBrc59uHf3AH8TufJhGWwYUPKZy",
  "key28": "49CgeqyWwYJFxLuFTMATJUPPKFi1GtutZTpXFEjtPJcV5523o8SGhi6yLk16qEK4EKPjrDZu4tDKHej7xBBgXve4",
  "key29": "4n28w4UUjY9KEGRaNUJsV38wBDMXMZt228JJt6MidVDe94kjLuSGNv2kEc4AP7wnwA9SedJAa7vBCWiPSWF6J9Po",
  "key30": "5VCKth7orjSChyxtaprFu5LQHG7asZPYSjBpodw7hcVZSQHvtaLQbgL3rGWS1QdtAMpus84GdsxYQMtJeDugxRKp",
  "key31": "5hS9kJNSQXeeUDPtuAKinwuyWc7ybJd2hsbktaVZf1f2fmiNiswQjyq4ZQqY8iB2ZeZ3C6GJqM9Ma16Pa7c7pXjm",
  "key32": "4s6nFP5H398fme3SNBtW8jBpJy1AZHnyphJAC54M9jSEoRno955fqSn2uNPc9r3T7K7UzzY9tEEu3kuTtcPkG7EA",
  "key33": "EpBLMmzrMyLcZSrstYt7B1Zx1qpJSuxytCtDvMLxSv6cgC1XMabqrQNFFfHZqwUpjzu2PagTCaw51jdMERt6yuH",
  "key34": "2VDVNzHpWCPYfPpgDD1QRgKFvJsU4Hwm3nYpwv6wFFK5R5bDvsL45Qx6cKvzcw5RqKyJ1XnrnRWfLnzAvZzACVT",
  "key35": "2dGgY3FEudLfmKaNNrdjBZMJRARKc1jYHasyH6CCTBmYHrddaVeCQVYxhgYdanngHrJYgZQAkpQnGHjFitPjWEmR",
  "key36": "2T5eUnrxLVTbGgboThMY916K5ZcTtVUF9MizAubh4NjwKwtQCPzHPgm7KNFZv6G9e7G8jsx6e6AApiZRCpyQqvEq",
  "key37": "3Ma4CNuxngrP9htEhh1ZEjyyQpNccxLNv11t7aNiZvmebYdD1MNQu8c8Ywr7CqQqSHydT5gzCP2jz2rAxcCJViiF",
  "key38": "2HfohzvzwwfuPGstF7EkBd5dMWGs3NtBw6Cpxvy6yVuMwPeKWYqf3jvy6JwodRsszfrdE7WAFADQ7bh1HZu3YCe8",
  "key39": "63dnCFVgSzca4FjnhFfm3oCWu3rWiduSkYAbiovuvv8d27Qoizh22cPDsLqrik2qzi4SBBoW4onwV3nuoTPsoWno",
  "key40": "3XYye5tLw3Vt9TE6FTj1qTUahU3CkZrnLbeRzTpGZftp2xTZcKGqrQX9VtBRfUobNkXbfywPkCpUH3DwmtHU7u45",
  "key41": "48xLuPerdatxLCRF4h8JQEXqW1CSYLVpYLGjRKjupvQ9mCaCZ4mqDbCuGh2S9mV3btSR4gzH4GhniQARkAvVLASR",
  "key42": "5f3wTo8TdUDruCkweeTsF56ec9WAx5ref6LLhD45ZnmxYhi1emMLaBXJ7A3b56NZGWnRDF6imdHADrjsPrnNp7Ry",
  "key43": "4atuKmBuTRiNCFi9RXaQDZvHDUuCRMMQDTLq41d1nubZ28B287eiMVFKR4mmMieWDA8GLeHAFzmexRY67Sj54JjP",
  "key44": "4Kf8rB89nDGSn3FBK1sWQhDTKjGNVtgxeZVHSHJBbj9yxv9wYeArT1WH7BZ68k27iD1igU4zyGWJfXWY2ZebAq2G",
  "key45": "4WVhvrUXFtehd51gz8RvyqS9qMkZrSh2FXeSjQtjXnnhUBLVmYydDCj5Z4B5zUrAte4zAnzaGku9XSzuZe4QKbGt"
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
