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
    "4LaL7bzsLEE97EXxzKWLrbX6AbtG7zyvzWvxFtFSw8DVWZ2ZrUvn4iF5RmAnPq1JqQD6338u2t55BGi1647eoZB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BNGKA6WyS86HYrsstD2kwt1KesuJGnjwJiKFEb9VtExMgroXVjzMo3KwEKkQJS4ufusxv3mWvPCfUhUBZuPQqtH",
  "key1": "3BHY9vvYJVPtbs5qQUeYQdZTc1mzRVPy5hDQjTQSmBsdEVVmTKkF8szfGuwGSWQo9r51USMsP9SKcwdtk8XwHSUL",
  "key2": "3p8mPLzxTqoJWZp8pBmHSvJnyDVWUuX2qkMegpPDzprGWqxPxFWHEU82zhe7VuKh9BeH26FopYDqAmj9RvVJRhwN",
  "key3": "w6GMHo2yKT46BFRt5BJose1YeUHpEshXxeiCvk9azTdQjQVgNrC1JfnKGqH2TP3wTJ7wsuzVaMjvdgdWS2HWEZY",
  "key4": "2QjVkqxrw1r5C62bgahcq1ng5ToDWYyDgz7yKBwPiePdXPeCMNN4jhaCrA13p3v3EgzocrbC4xGcHMaLrotQZWkL",
  "key5": "4gcuQxCV3nTk4E8qUbHyncQcNUctXD4UK3JTpxHRVbUJGTDbPpfk6KsVw2B7rxnx9PCtqAh3AUDiLXxhX62A5QMd",
  "key6": "4FEaigCHdbdWoJyJmu8jZMXVn7VJkVq3gAHuL98ADaTAVGz8Q9C5a6GXJHNtbuBgRuhyJHzk5Zwc14ic2NxfhyyU",
  "key7": "5WPVnH5e1Z7mBCSbtEwUFrxsdEUsfLkRYNG9KChN8JEcdJwQjmWJLu6498NN2qHAWevrVbV7mEoveeRw5ww8d766",
  "key8": "3kfDBK4y5xvZtt7PmRaDjvRdZGc3XZ1Ti7tqsCXN8y6URHeV5SYAGaVAeaLVRAba7KaDezKJ6UqgQgt18ExUV18h",
  "key9": "3aMiyinB1k4vfbebTDhiJphTdfLn5N5f4XWvkhhbKVYR81uAfiVssChFqestQRRqKoAMWUy6ZHoF7FRHCxYYHK8E",
  "key10": "4E4iULa6MV2jpF7smJBa7sHGdWxUkf4qCJFhVTHqemJPv8cxiLtMLDXFjcyok34LuHT7edNuwkEio8m9h2gXBmzW",
  "key11": "5XzxksfeBNHwJF9KUYHomkQB4hFNPrnAtqczrpDGUvJ9PRErEMWk3HqaWA12YudAEfHMStNa2RWmQh1maTB9162o",
  "key12": "2gPuN6etxce25dNPVdDDX2iTNZwr5npap7g2Tqiv2JzmQVXjETHwqWPiWUfnBoXfaKZjT7mUwsL1YC7fmhdoHLo1",
  "key13": "5UPVAfQu5YCGYhkM35yCah1pTzrnEfcNcJ8eQ6Q8Dindzn8xcvkpmMMruJwTeNnq7ib3Vfb2iBEnVnebR5KsZFmb",
  "key14": "2QwDoaQ4yXsjF2muSVDwvqs393jqwGQ8jKk75n4kMANLVzQTNbHU27eEQ4FderpSJAgtY4hQEuFWXN6rfhz6Psdv",
  "key15": "644JmkLu8vLiCx6xYVX27YzsVSJ6GcfWjHJ3N9qHdyCAi9KKor5PnbNdaXzWjBKhLdw3op5k9GQ9wgWiYL2atrpN",
  "key16": "5FJSdp4sZG2EVSBtFnSZHP7hd2UzKkX5j2oT7soarUzc5F6M6uUa97Gc44XZF1gDA5xkbuRxiuBQwezUryJKVGLX",
  "key17": "FVNuigm6ht6Bzd77p3UjyE2v5catpw5VUcjRUZzY6HbUQyhGVpg4wcsBmQN1VrhWG122c5E3at17zSgFqb3GS76",
  "key18": "2MiLLaNPAj4mXZNi1EpD6XXVe1DwAtPH8PRU3XyBqMW4v6Er9ELGcYrxLPnRf8xYbtnuxv4nZSxVEtjGSW1aqucc",
  "key19": "2KoWdweTSdDQ4K98xwWVczx9UCsbVFyduWNYfpscrZRVfNcb3ahF8YuHPbHutAuwYQJs3remTsmif2t6o89fQKPZ",
  "key20": "SdQsGPzHKpR2TFCnbThEFw1cXt8a3MPPt1bknrhwd5mbY7yNQe7mZuosUNkYTwnP87xWWjzaxQ48z7ttFvub8ge",
  "key21": "268mgisKJLmiBVdS5EJcosMXRnvJK7UtV38HdEZv8UW4jx7VfY14LqgU4XXpxKAT7ZYUtwCXDo87T3kQ7N8jXk4V",
  "key22": "4uY1zmd4DW4Q2Uyxp5HKnC9uH2LcRZmZjqjZK76ShWdY8PXJ4vRmKdXrp7E3cCK18BDV95qge2LE6PdkSdMZL2XR",
  "key23": "3taKCfWviMwq8kTVuypDtRPmRqCcrSx3TsA4e7wU6RtSCyYBbqS2TrAv3hphvN93HNH8ao3qwsEm8M4Lfdemz7No",
  "key24": "pUAazEdYxyMdUgCL1TPi8wutECZKqy9Srwxm2LTmkEVUroXKvqp2X9tzYyk5RYyKe2zSLMDKUZGV34CWUgm3icz",
  "key25": "5vq8eHMzQ2sJdqgWyFLvVPJkn2ruff7PRAz5VeeEhc1xnUfGEaZVox8rfP7JUsU18JMDVr372LBVG2aePwAhwP32",
  "key26": "5PDhTPDPEtTrCfhjgCxacaS3QRTKbSqp3ZpX8MqHMhnAHGkDbd3mwTAZxVQ87AAu8AEyNh78U8R7Li8VETRbKyBA",
  "key27": "3eP6qo4xXw51uqvDUNTBLfQVjz7L8rf8qn8T8Rpi7JC2KPGvXk64XFEQKUogvM7Xcm6TDqj2JzKaNdkRrdbavMbo",
  "key28": "4DkAsGGm5n4BuzqVkpLP6Y6KW5GhTLbVryxapzK5gnUcRHDYpbs23vURWupPTXPRk85zSzGtjaMRvNyAFnYMWJmx",
  "key29": "63YBERL7qdT4xLPZKDuDBvRjRXKDr1AjEjEEkry4hAb6CFhGUrMJgDh6b5nsF1GQsqftXsm7RE8hCFjtFykMudM8",
  "key30": "3mCjWRUYyvW6zP6j1vj1HkgmxJxi7JqTP9mY7MnQ1iTnnKCCK1sTHd28Hx4LqFiGGwiMq4jk3MZVfBchTeFVZ4uP",
  "key31": "2bQeFYs3XaTRWpYZktfEjnUm1cQy5Z6Pa8dkA8RAQDFybw8BLhSJW8PLk1Y1Q1zWhDaDrVwiXeobyn3RJi29dcgg",
  "key32": "2rNfZ29XBGVJb8ZxyrcQttGNeFr36t7yPstWU6xen9iPmuHccg8KCokntuW25FDEjLfFBwSG1ctHYKfFdrJJAFZM",
  "key33": "356UAKVVx6Z43oJgbFGrCmpFzWFATd4bTrAwG2zaJy8qk12asHBZYWfhfXzZpBPgkrDABhdb9ieTBfrQvdvQVRva",
  "key34": "3v2jcNTYS8CKgvCRp1foDuUmxAGeo6kM5VNL9EKBorRtGGzhYaPFWJRMBFqQSCtTnwzDedAbTg9m1VE7ZMsZTU6e"
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
