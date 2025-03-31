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
    "29VdApUkAATxxyZsrJsLWduWW5SUu4PANXpn9924Bc5uSAxqKeURFsm3LVk6GpcHJ6ERoAxXor9LT3Gt28Prp6mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BtHJAkL4ENgrRjnqddAL2hfSvpoC6dHLHPBN2CxFthagmbNGYWjUMbXNeaHwobs7TjQiqXLVZndvzf7F8RY8zve",
  "key1": "5LSJKdHvBJXc3jcxd8e1TGCJRCC6YCRP5kq4LuAza63oXLqWbsfpgTvkQnYexLYk8ukoZ5dXQ7SCm3t8s35sfeLm",
  "key2": "24VZqyAhA4Mt26BvPE51s6YvAXUF1eomP7Dz5yYfLe8ELrwzkpmH7XL468oue1MHp31z1zQhPkfZA4uTmJGkKjyD",
  "key3": "24gPrJiuJpUTvn4Lpo8PcX2nAbUaYVfPTU3ouATf4ufxo1NmXp5srYAN33MMCYSGWAr5jBphLc2gub2YbtztAj1c",
  "key4": "2VPQSCLKs8tJHT5Q3tbcdhe21QgtgQpDUoJtjpeiQuQ5N18NZ1qfVDi1iKefMCvcK9NmoqPMXpi2Smg523hrVayU",
  "key5": "4bKfWVBM42cwds9KfQ7dunnVnWKws78c9AMYPjWKfc3CdW2s2XNjoJEr3Cw7cZH81fQagGLtDz3RPPsFUHoEU238",
  "key6": "5URscD11kLDYKBpyW5zbsYRgfKbzWcPfTaYBPLeshoFmYbxHkDPMj8CkA6wHDEbxsVESVToLmK7NPAmBCyEa7nMd",
  "key7": "5eVUGzgwAHdU6V5MGFgD4WWSLWTyg3pHjzPma9ZeV2QAqnTbd7eMKgokuxdhm9VU38YhiajxcGNZTrjEbtmsAqCb",
  "key8": "5xV2e8gu8gZEVif1vctzWuoTfCKugSG2HNZ1eJEwb1JtHheWgiThiUrbWSFdV982ig5n2HxK5uhQb27LFbPuEJ8u",
  "key9": "3o9DmSd7EKEeaHvEHvDg4aGaqZgqKxGZavsywAr8FGNS6LzQMdNjQByrfksHScY3pbd3fWEsmr75XE3WYemZMTG5",
  "key10": "27Phm7jYyjt9hZMnTm5PwpxkVjJ4DEpSpETMak6viqXiGvRjjZQw4jFHFDAPBBYB2GjNiHJSG6pRpuHJf8QXpZLi",
  "key11": "2gpgspp2PUQ6Gya2JPvDPxDJWyYiGudiw8tweS1HAVzxuRvMFp3tAA9iYs4XiaaDepZGF4ZbDuaXMtGAmwVA22Ye",
  "key12": "3tEarXUFA2wmozM5fz4SJTU5B91K8uTYL6dEFk3auLNxfSoZcX8BkPxqHLX3KtH9TinWHJiuSPpNqFcvLFabFaA7",
  "key13": "3S7B5mGUca4Cob6h4fE598ci3vg7Gj26e4MuEXahqe8fnPxWus3JgkL1sVvcx7rKQPKD4JmZVMDDzXenHNbZvbEb",
  "key14": "TPua531Q1vmFBA4iygjEMf2N59okKTG21KSi3JcgLd1NjccZPKaBv9vA1EUXvUkMSyyd8y9wbeSakDAdtMdi66E",
  "key15": "qitwq8saynq9kSmjFrF4FFbLUYxQ6xATwASBR51iGBHqEmBBdTuFbuQQBofQ8XWpyKkDqSapoXxdJHY67ow5oGF",
  "key16": "4WJq2fmxsewq6PPygbSoKNex5c7XPhHH2L7amqWbfg1S9eMd6bT1VUqxUdAhpNACHoG6EFEbHPt55GCcymdXkWPg",
  "key17": "5LwirU5SPyH6c2xVLjSkzVj6nZXYWaeB4HNoZ5XvvbhzSUrEyJLgwUXH2v7v6w2jZcR9pn4SMXgs8r29QQG9nuKM",
  "key18": "4wWPRyG7cAuwKEUU6HfeVrmbUK3pHF5L9gUAfdLgxAvegbX5Bxs86gz5nq7amQWoPmdDKz7nDbaTe13WzP6XobJt",
  "key19": "5HDdtQm8LrYYK4x1FVcAMb4E7tbB53f5QwMHmDMBioibBbcmrTXQ9TM34DVyXYtS6MaLJvEG4qa3TtjCxPZK3rTB",
  "key20": "6S6fyyx8bL9uYQACqgCF26qzAcR2p4wWe4NhBjnGCvYpB12HRL6itv9dSQy3MjBHMKYSpMyiQHs4KD128NL7oM4",
  "key21": "27VRoFvJ33ngKCpoCEKDodfoMXy24b2SmxzYwCPi8CjZabrfCqfv2weQY8wWnokyNgnvdu8NwRShfYJjTmCGgNgt",
  "key22": "26ffnosSnqhwRWxRfwM6HqSMMa3aiU2zAhhQEM7aNPtJHff9MdjXFPtkqLxnp1zTtYXy8L4UZi1Xwjwg3R4QL5BB",
  "key23": "12SDSDeht4GfZw8jZ2F5dwM91bss7jW4hoKpHDaZybdL9xgGyMcFNvG7GBsudSCTV7HiutGvNqTN4k5BdSxyyAC",
  "key24": "KtQe22ixVr59qPwmVSoH7WS2EJrRg9jf3xVSc5M6V99sbqBu7BJYVwV6pPd5p3ZrQD2HqHE8sGGKZzWyLDQRjQE",
  "key25": "4rkZ45U58FQGFNhW6DPdyGkZS3PJ3DaY12LCwEuJRR99ZwRv6FnYBazB2teMtrjtZpqWJnCLQBKdbR1N5UsqZ2LL",
  "key26": "5keLwCEWYZK8ayuRspPgY7fuRop3tpdMTUrLXMLPG4EskG7RRfDymaDydfVRQiC5AZttc5faZKdSLwn7UA7eHLH2",
  "key27": "2yMBHWXU9EohG6h9qaDxegH8tZDz3yM2a7HEt85M8jpussD1N11zatkpzzfcjBJrqLFvpq5n2eHdb4uHKquFbGoD",
  "key28": "37PSpLeua4BPgxhVRRK4kUdVpp79PSNKK5GacoKQmP7eC3NvPszH5gNSyJh2pJRvReSLfrJ5vFgwSGTtRX1rBM2n",
  "key29": "2itbHyS7KE2nPCBdX7gzqor6a55fRnvLYcKpJ5rBfARUJAFerEt5h1d18c5EQUQHFzzKcZGdgrGxsztxEQrJrMdW",
  "key30": "SMZGEtXSSM46b2hw787iNCayFTAENxt3NserzSA222gorLtDHkvoBFdbrAM8G4aKButVbBtK54gu2xZMNeMocRk",
  "key31": "22e64cZFhhxQZcSuBN5hhwsQnJLgXNTFFyCNdJkjbiJ4AaMmE2HX9mxhLtTf8vk4ubSGBVPg8s39jqjbfmhqnDve",
  "key32": "52bPegUzVFnMj61KcDthmWkCizCCxaPxD57GXkX8U3mVqPrwnitqcshgVvrDrMRgVp7Q6tSGabyg3ShjB4zmND6E",
  "key33": "3KK8mc592LczRng5yzBzLqT2ZftmCKCTMP2QFEcHCYHGWfQAgHC4nwS7GL3GHRYYztP3vxGCHqY1mJq24nugQfLY",
  "key34": "4S2ThwfVu7eA9AduDky2HizaZBkSqmEPiGZi4J2SD4eB9zrEj7KWA6rCVbAvEjWNH5sfefhAx7NZkfV6kSvucetG",
  "key35": "65JnPbmeykSxcVakhiYwnShTveX1oGVcKgRPcKNsKB2rq47G7ZA24SA7FkrUjUaCLzNU4q5uHu33f6tEXgjHTQst",
  "key36": "zUmPej8m2AiZLZZk39C5wKt2kjfXai9xaMGSyM4hLLFaBEBVENdFiVPmWqkJqtwnNw3AiGwZyxoFkdroiDFTYmu",
  "key37": "32wStQZHtv9PE1sEhV3af4q5m3RM94kiS4AnKZypLnkRgZvMA8tCdsqaguZmoQNNcbptokwAWrjjmoxvCBNPYR4q",
  "key38": "4xDmTLnQbKst4zfqtaKgy8FdcZhXTLxdzHB2Mj67ELui7MBuVr1g2t9YwguXq9V9tjQj9wXRdFqT8yHjJZE1xZow",
  "key39": "3xi1fjp88Yiyzk2u7DyCgGmf2PHXwAqM4pxQ5gAXDVtjDx6bdxL6kLnyDVDVB41Ph5PirrgoTRetD2YprFBE4xe5",
  "key40": "2RXHPPK5m6Lby3ZPhwgvzGRbSSL5tfJMVtuhkgCQ1Eax387vhA86vSRGNV9boWvSY2vy7nh5okRe5LNdgrTaJT51",
  "key41": "5PK1ptshM4yZfwCWkRubgXzbD4meMnJjpAQWg13bYBDyEaUYF3vk8gHjfK18cUTW1NkwKDmTtsAkNBrqPRYYdTPS",
  "key42": "3B8Ug2oYndSU46SXHMeDSdA2mn9SZi3yNp3WBkVzoGdVXBM7uznE7uXdLbJQZu5Svn4WuhUzMd8afrFKSgAvNoEz",
  "key43": "2Fr9bFWzrTZPwGBtwKJM3jkCqdMR4Je8M7MDXiy5nzwG9oJhSTYkP4TXj63curpBwvy27BCanFQHsmii1pMQqNvi",
  "key44": "23VEp3ameLb3jWCW7iQJNUS4LcpeRM6dtBVL2JzT5UZvz27TPjrdYQCSWKnvi6rJqHCkhGwnih1o4jub5vqADSKY",
  "key45": "3fnTsQQ57Cq4T1c3E8hVEjJhkUGKaQjzYrPGaL5yLKMfhiNjyKDNfL9cB6yoKJjPb3yxMXUXpLTF47s4vUhtus2k",
  "key46": "4GvWSqWWpQWaA8M7oBJ7ujQ8JePKa6KZ24DE1fi2PhPJRiFYqA9bqzAW6CUBkXMQWLJzkihFwPSGKK9CB6aw7vND",
  "key47": "4nJVh28huZVuvqbWvSh8RVpvr3QJnRpDqth8RdUS8DL3zEgiJwfgZARvajcaRTzm931zkf9McDKUXJDe7mDcsGu6"
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
