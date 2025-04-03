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
    "kYPP1AiEJqeftEGZ6v7FAZg7L4HWrnYKQJWTDu9vFHkt6AmmR2k2rM3ECtkXsmjowWkWh2z8QabVGsBHtDNS2rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26gp7C1YAu69UNxDeeMgCh5HUPx7gzkwy5JBnqLr4yQDvg2G9sJLbj1TSDgkQokRnKfDuZouJW2wpk1L67cqfPzQ",
  "key1": "4V3EqGcUtaneCdn9Bq5e1wgRC2e3gWinhkbVyCiJWBqwbK7MgQbnXuub5UcNgZXe9e32nuvPUfTgMZ9qTSDPbr65",
  "key2": "3tCv3yXo9WUBGGvSCsjEazDBKWW6HcibNb9HWXGNbBKU1eWNivtGmoEugYMZ2L28rfyVxp4cM9w7G2xSmcLBQ3UC",
  "key3": "58fcCik9pZChgZghUvFncja2K5kvTCPt4SoSd4ZQbkXbGLdCXZNp3TmLJRVzHseMj18JnvLMUyWCHmjWP5oBm3Hd",
  "key4": "62u2bh4VEeFBpbf4oiF5QJh9hU3w2qw3jWNLqYhYqvUc8jcTXmWFeZHcTPgzs3hLnAPj8nPJNMxuMvyaQPgY6E5x",
  "key5": "3xtB4mjTVgSN93gZhVyE7igRft6uN7U4x8w1V68JDoXoXbTemvpvErsgTAyuwGpmLkekta8LCBRvWgU9WjhUPydo",
  "key6": "5PLrqV1CS3Nb3h7gU3Kjg9yex163kANnX2sW5aY38cfMeGA2svUtkWoGr2dKA3Nu3bRuZb2ToU1CLcPtY9hRoQRn",
  "key7": "WDw6VXyshMdxvrXLyXSa4NdxxDXmLNt1nxbyEmFigygMmM4BMjzkJ6uTzUe2SVY7YvcJVTQaqvxj6QmhtbvsGrs",
  "key8": "5JXMCKqtqPeyBDXRkZ1u4ync5nrfWztdqz8L4yRLm3kXCqq6upU6EP3noQEbfLG7btsZfBg16k6C765Fu2QzWC5P",
  "key9": "3HCTyeVuAmeuerTuEU4FXaHUgawxnE2gxy7qRVW5fWS2tUbHgKUJw4JQXDUktEojpXKbfBmNYoWrNXqxS7onqzbp",
  "key10": "4FZ1gfvFsaSuWi9N3BoEyVv564sdnAqHUeRaAJ1yEt8pvQyFnhVNDmU5VrGAPqH8thc82caGSZgn5XZeAto9dhyf",
  "key11": "48iucKit4hKb2zHEZrEWSUjbozgHwGGeeNfBSWr2ByWY3kKrDf9xDHuSud9Hv52eYpaDDkpyPh4SALPwKSQ3jp8S",
  "key12": "SD5oZthJYvJkJ2Go8QQEzz8udXWPqks5iivZDCfAjCYa6XxNnTA6vkfzNU563HcXWUtPwQ7pneYpuAn53kTGnXV",
  "key13": "5qcQogS37LFiqspLk9HAMkJXuk8raBMftoyqC7v8iqfGM6Q2BM11MYLBQgsaJt2gpGnBEXX151MteKmFsf7yX5CD",
  "key14": "4YtWZDXQf7Au9WHKxPp5EvD3ssSPKRZNJ7FhJzjbWWcjLVmWa7kQjXFnN4j1Xcp4ndmUSjCJeAnDYRi5FNgjXcZG",
  "key15": "5U94VKChG6xRkT9fEV712QSQAyDzk85YKe4HicCVAsbFAKa8MVBT2BYWbQAFrRbCs61zJKYYJZmgagtQUAuFkNS5",
  "key16": "3NLkcjaPzYCT333Ds6xN8rE3fYVYiiwz13h8La2BHAt6Bu1kxrPZrTqW3766S9XoitTY8zYEEPhyKvLKByxf9Mu",
  "key17": "3Htt3Ls3jFLH3z9cwmnu5GxwYx8BpLTk5TfnFW8iRFfc8FTyV37pgyr6QxAhKiCWikr4woXdGQ9GRBj45skUFyK9",
  "key18": "5DnVv6n6nrjPn1ni3EZgSaS5dJpfaAREq9ysB8zTUwXnVfCPtPk9XJiXa9i4XCXYHWYhY9MSAqd7mDpNejEEYeZa",
  "key19": "64bX9sR9SQrHdf9LrqJJ2ouv1n69P9JXzjHbQSMNSZUx1MM2NkJ3iUED6Dh2eaRoo16nfUok16rroZzqQvCy7vG9",
  "key20": "4R8Ce5kJUgRf1X7y6sKqb7Zxkap8LxZ6St2ustYv8NZNkx9XGJwUfzDp8xsoYQCcT3cSqY7GWSbkwjo3Ch2d6w77",
  "key21": "3gfH5UNJjMn9UVe4pKxivRtqQtVm3HgBKGKXrVqvVEC4AyUocu4jdwTaHj43iveqEGH1UfLZL8FqH4YdKEzeRFud",
  "key22": "8FCC6wna8F56PqC3crR58ZCerzufVZFzzMYc55ybxx2x1YaUh2mkQizv634TzZk3FYoDjnkXZvQYhgimzBMcbd1",
  "key23": "5egY2PZ5MrGopanGvx8EF1nAniyg1NGf1Z9y6TMYyWo9MwHUiwQVzhPE9TRHjUxhYeL7h5Dh34YCFAu5dV24mFcR",
  "key24": "3cwceszLJCCTioV8ECXnjvtTwusPmMqUS8Sr9geMZP1vGPkTdMmw2WJvgxraTP3QYhVM23cYDVjh957mL8V7D8dT",
  "key25": "2nBsV6t23A2XxNTDrdnWQMXVbXpvNkUgTHo1r92QdjqvzouVWRegB6xiDXZgS1EHBk42FgDtqtUqPtX6pDZhQyd2",
  "key26": "5ZVSqwWvnst4DUv37LsrQzXCMp3Q2VX6uQcMqRZ4RzrdNB23gVvWDHzNKiAmu667TbJ1xfFv4im8H43q37LUimMf",
  "key27": "4qSH8EVxC9KyfUefQHRHXYXsFqKUksyXPpVgRpBUPqV3B1tPeM2qaEDH59A9iXxVogUa1DCW6PjScXpgFVgjeoqa",
  "key28": "4cgQKGuTG9qWFMtTBJeSu5RkWV6Y3BPrT3gzGiFnekk1TH1gp4bizMpQwtCzeQwXiWC7CbMioHpNG6GNX4uF5bcv",
  "key29": "g9MsVriLAnY8HEF6cqwqaF1tuz5ykwoK68sZbwnVV6jggYwNT9gJqfKxuhWFT7AKhAV6fxSTkBowmxBQxEjpwaR",
  "key30": "2KmV8K4ZR5aEZzPj4UWY9sxRk9zzDzWBvqAcQgwpmas7eSyej1zyFcqaYDhA92kW9Eg9RTbgPogGFoemMcgtVA5D",
  "key31": "3FamzpbjGGzJiEzxQVsHd9hVDuh4tJoJuwVJ7gtnbKuhY1b8UyoJ6f8HYVDrRym3LFr7DfnLwbam8Gv9xWpCvKKc",
  "key32": "9LWn5yEAYHT4113A994gCS3oweXSXjNkxcBtSiZ63WVgjgNMTrR6iBNSqRMTkSXTnTvwAjSyxTyzGAZgcNxZ1rf",
  "key33": "2Vqe2vZQRQJmjFScasZ4BwvAn58GtwJfU36oQgJXYhUNhb7DxGXJLNmWLjkNKYCrFZThsAszRpppVrJNHLfUBeux",
  "key34": "2jYUbjmRDi1o2jDbqjz68CRskZ7wyhH8nwHcxBHHjU6cR3qWia4uXGsNRH9YxzZSTWr9t5KewfTExGDM8NfHt7Qr",
  "key35": "R981eEjUEKYwM7pCgoJn2RmtJb6MnFTPL8WRk4JzgEWU9tuC7LAJNfosfL88ByeWvdtPsK1XrJvumTXsGWVbEsW"
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
