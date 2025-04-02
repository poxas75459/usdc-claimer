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
    "2XEuojBEKEpAea1updr5u6LCNj46Db8eiGAcUxziszbheXENqsyx7UrjyxpYAKyuv3a199Tu4kHQtrCfJwH92Ffh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33iiDv5SnTJxoWnHYkoXuDhd8LhPia64phDh7Sc6NYYL4n72Jb6MZAkL6LntKs1A7oQzUnfcMpKtFEJnqoEcuMqY",
  "key1": "4uZuoewdZdfrJadJ89mfxQRwoWntebnk1eQoAtdRmCdC5WaskazXy1239XeUtRvMrE9jAi4bMAjKk7X7zYXWWHCj",
  "key2": "XZYnpArCm279yKb4ztbZq1cHnvm1onT6jD3gvLTd9ZzAbdD1hxc35kMriL6vPt5TDVMEdv7tSjLS6X4AnqvZid6",
  "key3": "3qtYcbkBYPtvzikrGvETQfRQLU5nUXsEseHKsq2qvb7PPg3RqmW8VZ3Z2rHMYse7fXm1n41jtKi2Dzqaf6jjUdFx",
  "key4": "4GWesP4rDJ8MFSw2mB3nqzqH5aeKbZWQaLbFdTrmbW6p9G9rz2q68J8E69e6csWzs1e5yfej2seUnemnUjEdc8rJ",
  "key5": "4ZZmkx6qVh7VosEryBiUH9DvBBrHbE2Bm9LTo6ppQPPKeJVcwcVQuGFz7YVpxv7a8hiV8eJd8HGiWGoRptqVmcQD",
  "key6": "2SWqiKTg99SwS82Aizg1KzVU8vLKzcfKBf9ZToRWzg9YFEz6dYHPgG2rtSPr71fC1g9rghCxnbfrgKLs5fnTNpwx",
  "key7": "S4tBgg22urQgVCS4yqQyq4Xe5gAWbRqddYSkpMkyB8AhRysV82ArYyxmYMJ22rMbtoRgfehXWSXXsA4yBjUYSuo",
  "key8": "5BTNVHtsFSxwZK1egfNWG2AwKdZY6akKkf7fuVaXFMofmCYdJXvvQCwFCjaQGZiqwcK4A6nyAt2WR7kx2knLm4B",
  "key9": "5nFZv9zcMU2nDag3yetPuzV6tpbrFhGXxs4RtvyQACgJafX3DszVZdmMfrAD9GZG5hv8fqoHfRibX7KmK6vPfjhe",
  "key10": "2sMH5p6NKTPDwpDe5GPFJgVk8jzHHVcbWEEUavnKso7n54w1LDySYd7dP3dcvtDEriFmT7wgMCS7WMQYdhiMXAyt",
  "key11": "5qbhUqtjsCRJj5x7heKqrwx5eP3av1jhSg6cZGB9x8rLwkb4Ff5mrj9z6ieiVK5uTSFrBtoMkYRWgpq2e4WJbr6P",
  "key12": "3s6nZdGbne9LVtdSDtzimxuqbXPfMnNG9f9DGENZZiaozaeb8UnjkJwkuYFytGdYicFCsafe9xLtXntSXg1XiMed",
  "key13": "25VtTbDaDdZX1QMqj8Pdft3ubg1PhzaMxyeLhVnXdGFpUWvdYRZ6weY3yqecCeSUQRhMeVBP9qehaW3PiHVwYe8p",
  "key14": "4weXo2psChREbHCSZjeHdswGTC4YT62BuVu7VJ6N7CgBxa8QYLMfsNufko5tXDzh3YbjQbXNwrJ4khLHgDrkZ2ci",
  "key15": "4xifzhGyr2PszXbgJHWGLbDvVzGgD1BatLpiD5G8zSqctnb5ZbY9wWgZtmSxHo1S66zhAva3NRJhQqw53CRTrpsh",
  "key16": "4dBkSgWh8WBiVrhgnUZUC234aqQZ4oD1UysNWcGU4eD8qLPLyDFo4D4rQGTZyerPPzhqox8L5NGS6w2FGWrTcTA4",
  "key17": "4oeScb8B3awwnfz4wQj6ydfjJVJ4Zy9fLMNa6viu5m4UNpdjnbKCYpiMfSboXKqFDjrgdp8CBfNMYWunAEdDMsD7",
  "key18": "3sKiPd25XPXU7AakeQAWLVd4zyyEBEuR6yxNkVeAA91H3RcDjQ3F1bVn8fvHU7GmZfAQXWazmMYbhQjQsZ1Bqj8q",
  "key19": "58ETvqx8nXSuXBmH8S4UpT2UyUQKbTjqTZNPx34WTzSkATVuvCWbCvSUGuq975GQg49hstoaSHiHNyKPheR9NRh1",
  "key20": "3hJZBnSF3sViACyy2zungse9jEtj4p31jKJS2nw4zXAszQMraPJedNfMvv9ENYyzLKNPjo8C5vMNKcXheTVHbocu",
  "key21": "3BhRsewkAmNw1Lj57cL6J8eiWUwAGcJ1vApJLaGQaTMPMSaBA5gp54jZL9HdKrDBCLGwNU11S55McLdZHKPjDdbg",
  "key22": "3fpnYMoVa1eFJdY8C2rDMuKLxnFVkeGQNMDNVgqzjuimza6uCWgahtgvmkf396rqo48m6wdgmybLZm3ZXiPUsZJ7",
  "key23": "44mnR2fhQkZfuPnvefT73uxJFTgVpMDXVdFQfG1n6JyqfUZMf4yx1gturdrEQf9MjSrathw6XCTSVniBAfV7Z7KR",
  "key24": "2XCmJsXhPbrXCFVRS3g8wYPinr6gM9GLf84wVdxMSznMPJxiUNsx8ft7b3FE57UgCrCdDqGYfXNKoHaLdf5xfzrW",
  "key25": "2ZPm5zvE191jRCGE12LmeJo9QZy2GyRcScCu3TtC4Yi5pCba9gKHZHPd6M3vrsMeZLXKnVtrtvXriSz12AB1tJ5Z",
  "key26": "2Xxv9zQ8Qo6vVzLQ1HqTjH8FAryjErghTcCJojRWXzcZe3seTVFkp36YFmP19GMAg96MHMUY4GkNKAnABEdvetcN",
  "key27": "FMUg6JRzMQZ3EEvKd8ick8Wqj7KrmdsDNUJ2447iR5x9dvxWLW7wYetKKkimH4boTC7B49bxKdcsan2NF42KVda",
  "key28": "4Ws8RcB6tGFaarnY11B2oSESRSv5mQ4JxBate998C8urtXh1rKzxmLA1oUeHdfnsBP7NQzQrGoNJxeshEKq3BrEK",
  "key29": "4eESHDztJQELU23DwpJNMghRsBj8Hjk64TnRdfJxi1Z9JfG3GvmVNrMjSKtWs5QokfxrfNDt8JtNM2qZM7WboJnd",
  "key30": "qyW24Q6iRw4ZJZxsuewPoJoDTmb9zmhU8rA1t1dYGFpg93LWV4ofmd7GmX2wFefHBriAKbSpd9fefW56a4TxeJC",
  "key31": "3zcznyFk8RLJUy8zueuc6QKcB33VkABCffpc1UHgs1u5ZAw6btfvyAxcoFshwCVtVjvwDApvcDe3ikExDi52r9zt",
  "key32": "5CgQeZTohFJmnS2FRxJVNGGEfVZivmKFgekZ51GA6kappw4kKjLRr5EUHdW57sHqidzovGSGLydrVpLM7wuBmNsR",
  "key33": "3oVdh9zWAAACzkRhXbj8HSfPyjF2bxV9W7iAnE6RroAK9EVvR6HBN9xraQYz8ggW8asP2jzMDBCd4ukrRSHNLwNc",
  "key34": "5t8pvJGqNsA9sLJj6DbfunBPnu2Gga249HM4vbVGsouJu6Gnaw2ZSqnpRBDhD8dsbjoAxZbtF9chCoESNV9gGPVe",
  "key35": "Vw2aM2ZftTcSy6G7Widb6VJtpDwCe3iXrSVs8rLtH2RzBV8BMWnWR8YhCoxmtfzYT2hUeAmsWRuw56vJtxPZcp9",
  "key36": "beSgmxBtin9SZ78S8DNX2EY2Mm92wAGYQeq3UAbkGTnwu2epsD6sMUNzm7YgY2ZrtPMp5emd4B3Qo6q5gX1NkTQ",
  "key37": "4ja1WrZoBWcjUL9BfKDcPQrCbbUav7VttCoir1hpT8nzmmyb87pjtN293xubT8WAVMYs5WGQ7Bs6ni5YcppL7R4Q",
  "key38": "5jDuhmrtSwdgmAFEGhDeh7k8HktFnPyReru8TBLVzF8bZVX1gWz5yLpWdi5Z1yoy6vfAGz9cRm7KgmGAJ6hTZxE4",
  "key39": "2mQiwDkaFDWWMqqXiaYwPidDqxKSq9SUi8tLQQEh4Q1rjFHpbooiJ9zizaQ8MD7gwRDKU8soLBSuhfEAHgFucTro",
  "key40": "3AktEF3SAjbhxs1KQaC58Ldw5skxg2uF7JzccCQYExdzgM26G8pGJx58HKLEZMwfiyyL6uthoQkw3gyj8Wtryjpi",
  "key41": "2fswFpVchaCnNC3pjKfKg8DAnvcSantdBiMuT5o9JNYVRq4QfhBzZVYLFp1wqbfAksJmhgSxCmrYqAgSAcHe1gPt",
  "key42": "5esaSX8cnaFhNPdA1RbJrWJ6SBkTSbhh8cc4x1gV6Er99JDuHHiuZDDutHt3PmHiB5cYtnh4HJYy6xcrjEsCLhbE",
  "key43": "5bHUZWBLfp2kb35DNzdn7gNWasoBRBw5FmzosxWadhZREF6frzirgPcE3h8MwGitAibFiUJ77auSMsZ31EPS2F8n",
  "key44": "36gdbKmyDWn6PYmXPtdjcciVJw3itVqRKoqCrFg5Mec3FnrWCmniT8RSDV9iaueXBwXquwec7x9m7RUnFRRPaMk7"
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
