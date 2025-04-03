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
    "6ymmmEHbFD6oQ1RVHRPdiLimsPNgVKvYi5WJVGkGc2eiRSk76JKb76ncctW4XaA88ATKBDuG1hrRkmrES9Z45Uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8xCNjFpaPuoUVRVxBaXqLx8AYUVzi6ppQeTQPK9BfHHL5aBJkzw3KDk6Tt1N25NMkbRhy5UMLsrkzatU76rmzV",
  "key1": "5RynwGzcedomKUVtQPHrvhqPLDWeZJ2Xq1rZ5a4yPL1gX4eL3dP1CjDQJ9VL3KzLdAA3wrwPKmrvXE566g3WRXmS",
  "key2": "2qctTt3XYhaX9FyQqxVmbd4nPHVsVjxyy1hHpwRJL6HV7BkYM2SSFwPgAqe1AbNu5fmk54TcNFW2sN5mwHxaAU78",
  "key3": "LNHMCrjyFZJHxW3fuGctRxsHQUSckh9UJSQsuQLvf3rw4g4Vzx2m65PS8Jpbtn4zjgVJ2g3FhmmVRMuuz3xpH2u",
  "key4": "2NT9N7DEwztBHpgwpeh9tK1KXwVU7Yjg1bfY1P5FpnJUsQoDnKd2UYR2NDoSXVE5LBXTuBKvSEGwp8eBQ2Y4DEz5",
  "key5": "2sHryecWNZZ1srwT7WFa5MTGdZcvrVKFbuevcKkN3bUBbgCKXPNjqXkgm6WYWSayCYTNKDqM7wuHdEJR1N3gQsJu",
  "key6": "66kYXMM2fuAX348tAxfbhLTRQGSmgmuB3aTFS7W4DXGF7DjFngcQyHmYog1ds84f1cM2TzVG3ukSkEm981CprMKA",
  "key7": "2vjucSzmzeB4UJrQRti6eRTG7e7Rh7qfKSSvyBLKrKkxC2DQZRTH76x3LG8W4krLV3Tfd6bxTPEMfLbjuSJPwUWs",
  "key8": "3JeUKAcw9mh1GaYJU7ENLXTxtgds9QUQhPacbiwi1ksQJRS4eSaaoVpDZEJihhH3gbBz1DjariNiFwRK5ech7i1x",
  "key9": "61JxZvSvS8aQiwUGyEk3YfnhkXqGrVB1BMYSUxahR3cs3uiqh9ggPeDGyu5gNyyL6THLnHw7cBJMzPci1agC37bA",
  "key10": "3HPh5jUyZk8JNZZGnPbkRsmVqQbRvVYZTeMae7F6fzqEdsKapQ4tZRYXqhLqRazT15w7wgCuEFTiT9wdHWdzx3jE",
  "key11": "497HEviEWfvs57LNiuiUfnLveNM93MQD8aUYemJdChbfHvXZEuDQZPNgxPN5QfeqZ6E5ssiSQUopHJy29rbQNBqC",
  "key12": "KGPSoz4AagpypqdqApTqwpYVkLu4PGi98ra14bBSsPuHUCpYE29KVMe9LDc2MhuMRLT58aaVdG7zzgemuawEg4F",
  "key13": "5QGvNZ9qgyfkfoMnEYVnmSBmuyDjT9w68xig2xQyxAmqPWSpHxfDT7tRCuVT5qqendx1poM7jCrgys4fefHHVstJ",
  "key14": "3jdwZMbPSj1U1ouqApiRf8aJg3cAh8vXtDMa5bBrNUjJi6rexqPVBAptwv3Vo8NVP5prHxfT74QJcFqT6yek2YJ5",
  "key15": "4XMnxm8hxzbKNDfXL7jNBW3SRswQhvpXRzR7aDYzSYf2TqZgsJ5D29RAzZVKzgfphw5ZKcRaQWhHoQnaLvFakJXd",
  "key16": "3uHiMBGtoFMwTBoHFgfa7Xv5jF4tVHwsYvdPumu8sRL1aGbecWv9MLRNHCxjKw5ExwpBbGEYen5mL2REA6uqBsro",
  "key17": "3tFUEwXENMpJciEkKgZxVWa4Fka49UUkdit1rARb7pjdrVUV25vABUcRHDDCBDSxbHWq7fgq4XX3PMswqXZDYsUa",
  "key18": "3epvLuZ8FHQBufitiCw3qTm2n2G3Jf4UjpEvXe5QrHKZUzz5fz6Yz5bwCEmi1fC2TXwx438M9NTpvVYkAiMB3ud7",
  "key19": "4Q8Msfcpg4LK5VEBZguk63FNzmVb3Etaqqbsd3wWeXX7sYCHoByYLjNwQDWdpdhmRsCu3YxWkQVkJU9o85nrZh7D",
  "key20": "2zFtAQ5peoW1orXCrYYwbZojeUBmYg3GSWZHktaWB5QhhL85WS4vSc72S7WNwtiiWDHZsY3nZavL5hsntaUvCcvx",
  "key21": "2Cp8L6KuktzgEQUZmuW12eMbidZdMQvvRmF1AUDDaRY3p9qbrhqdTR9LGypmTixdoVgZjboGbsimb9vEMt9WaNGr",
  "key22": "6dmpw9bED8iTnP1FvD1C38RhsXtrTkr8852s4MMrpDUkTxGr24m6zYJ745qN7CQ5STAJ1kuEN4xce5MyV4gnqZZ",
  "key23": "4RSjRiL3jjh6DVPWS6GTcqUpGSiCXBC1zXGckkK8M96NTP4x6Zp5Bzu6v5R8it2aDRQgrLYdk8wfNpS5WSXU9D9q",
  "key24": "2xMQJ12uVfeJG6eGAh92Y2AQN3sE5qxrDyzPd2pcynpooinKMEUuUEiAM2ozvEq5zeHtmRXEs232Gnpakcr9NMt",
  "key25": "3s9GEXvtqoDvpGHCgjeg8LYQ2MNfLjwkEhV7smSNrHJgAkLtMQULK3V3xDhtqKoBJ1cauCzFmCL6LMycKnZviPQb",
  "key26": "36WA9xtAbMmBz8WfDnFXD8eD1gwWojDAASdMzWmdzi3Nduua9hnD4kP5VLiUsHAp9YXvqJfFHSqdjBuyd36htnsL",
  "key27": "4xbiTkA8Jh6FSYFH6fwFAPuNBfyWyPxFDzSvC7cLJG2FRAH7vk3xB2rYA62WmpvRykHjLfkk9cNYcuqhoXVdc3uZ",
  "key28": "2Jrs2uzKGbdyYEkxjpBsScVtDAHYD7NUZPxJ2KQZY7sM2QQ85Yq8TK3gZwMxs4U69zwNPy7769inTpeB9DSvZr3J",
  "key29": "6mDyJVDZuLLoDLCrVZ492bFUT4gSJbe4mTBVaQhJuKhL9kQbQ17hTSBrqHvHmtYPbKmJ1v6kgZLoj3s1fpJJCBk",
  "key30": "4qYqkvSzgmBFDGpXGcHh1BorHdEvMsWg6KB88LB1T4aQdAFDwfP6nRRGpmnm13CDRaYzXiNvhLhLmyH7A6ARhFuN",
  "key31": "5v9DSMdTxBHM4fX2hb3uibQFXXwQhyj2QXAPcZ1NTV8iFripwpxTQ2NkNkyE3ARcqdBjUq5bm7mkCGUPJGxWYuCf",
  "key32": "2NuPCuC6psaRJy8vYotMJR8pjRGPJB4Z1oVvW2a282PukTCqZg7TWLE6CmPNrrZN1kQck9k15rWF75frXTu6NqZn",
  "key33": "GvR6JhWSBLN5yJ5CDHkbb8K9t7CE92tvipwvLoij6je52peR4iKGphYfdPbYXnj6hQdc1XJ7AuLyepYdsaEgQ4D",
  "key34": "2eLm6AC6uc48NEAo1xmtYZY2zXahprkXktj2kARL6T26rfHVsVjeaR2L2KmASwcvH6zFDpsTTWeHtyVEBbzJ2Mxp",
  "key35": "3uDzAxxn8uDdtAYmoYv8qgBBgvxnHTz9GHuaGFHAvmbnKjLXEfd1wWoEhQbmXCx8fcuDwgzRasGVvqnu61a9LW7D",
  "key36": "oEfv7cHXYo1fjunf685gdFJikDo2aR6AA5hvm5B9jPo8VaC6xm9X7pXUPM8zwkbqKjwykCot6bcYGc3MQX3TasS",
  "key37": "2cjAmzhsNrDkJBD1iADrKFZ88jNBmHExnYzVUP6TtoFYd72VWMTF8fSuTmmRQxwsVjKqhdvn27gU6KSSJvDYxFoj",
  "key38": "2iMvDRSKo84FrEP88KemtDvriCxBxPKNMQBU6yogxX2jrWVFnRfCpmy6WUW8n7EhdKhRG2YWy1UBQW3m6AKa1EgS",
  "key39": "4U2sALYxxEFxSbC2TPTWrxPs6ePaAJ4GQjfCV6aECVhxSYAeoyCmjMNDGiWJmPJsyynhD6KKNUMPAQ2GnZ6Nksam",
  "key40": "V1yBagzy6Tv2wZj5Wj4DRx4scwmwamNcZoRvDh2i8HKp6L76DKrAzucWmW7ivR1cWRYFrtTCdWc5YF36CEiYRM6",
  "key41": "4MuaLfQG3Ydbsgox2yX2eRPbYsVWDxyBpNkzzG62gqEwS2SQZYTCcecQWCPR2CPJyn6j6obU7zbWoYqBTczNS59W"
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
