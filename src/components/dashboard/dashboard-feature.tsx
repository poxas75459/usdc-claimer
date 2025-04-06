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
    "wRPXPj4Ed5iZ4VBFSSmGmSVxzhoLuMs58hNmmRK1LfxMHtyaCmyc6Y1BJDz3SByQMMqGsWLyjV23AcLDKUhh4HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsGyGjGgEeKNqsn2EQM3WkKhd2jpBFVUCjmiJChUVkNnFSQG9Ac9YteNNyFvMsa9TxHPNve6YhmBX6oHvi8JYZm",
  "key1": "2HF2B5X1Nt2i8RTHhaRAqjPi1N5uQuRzYSXSSAkfM4YTFistatXJEAWkwHfqqiEf5hCxZcvfikBGfffbhzFU8uW5",
  "key2": "2JzhEvQZkBf9CY97n8Q1D6yNpxZxSRgGoDvs2DX4fCiZ26jKcyHmw4JEZ6tByGVYFKHZobBkAwtBsxpKrVFWaNm1",
  "key3": "YfnqDvK612jexAYSDZtVfXY7CmKRHp1EgqRZNCUCxKdyf4GZr34K1VjCauuWa1dfWcn9KFJdMgPkDCBXn6bubR7",
  "key4": "29xbqhsjmeKueKcKDWGz4Sn3pcFohfSQ6ZBgUBMGDkMDSnXELg9XyxnLVq8z3LgmJQJw4gnWe3V8yXLnwnf5hM7Z",
  "key5": "5zDNsQXaNt7m9hz2P8e1uarn3Yprz6R2Q3QFkiE1zz6uUUk2mjm23ZnSpFwsfA1oZQcp68gopQPJjb3k7GbeiDe9",
  "key6": "52TKovYYYPBtjLkWsMv2H9SutZL4nPPm6Gs9BTgewc6TNXQ8fNNgNEbY8ZBQq2yvWBBoGBfNKSYq751wRAy6gd6f",
  "key7": "5GncQsVcLuyeqYiC9cxeZ2S2qHq8ACgBruEPNpgGo8yNTdw7wbUAxjSbG2m2oKd5v3L4pBetCMUYqQcVnz9yx1xQ",
  "key8": "coYbQha9t2LDN9Lvsre5BgSoSncTDK3c6KFvFJwmx8aP8ynb1CNzXqdFc8YfVkKivGPvNQmwXvUbwfDzCfXF1Gk",
  "key9": "4HYUmTR5Gj8ZBnAmRrZMNRv2xa44rGGUuThJdVu28WctcEESj5P8iNbJNr8g7JknMpQsU3o9ZH8Juhu9SbVTFDJ9",
  "key10": "xFA6m8WLD4dNuWi4d4GUZV84dvsjLU8kA2NXK3znC9eTLSycE8em3ULriVKEyEUrhwAkx7CFjE2bJiT5SDANRks",
  "key11": "54Nvzgjo3m4BtcscyCgrgDREwk1MBCqAw1dZkMuBFuEUCZLEagHMbu2JoCta2WuqQZHMgoWSnJ5GT2wD5yJfK3Te",
  "key12": "3m9ykyzmkCWaGFEbWzaRXjxiPAnhrx7hJMPwFiCiTXnGGVgtT22zbg67tkZbQpKfXRn9PtvmUAabFVXQ1oULhaKn",
  "key13": "2YUhCvsmGFmtiYUBQ1sBfwtaDw7cS8zfqseQ9K2AxPKEEJ7qQcGgLjHENy1n6WBFdVsdZGoQHTSNk7eexxNG6rdJ",
  "key14": "5Z6Zqxx7uRPb3hV86NhAcSEXJookUGY8v42AJpoJXYHnRswiaRWyP1TnTcBsYdwGH4AqNi88dNTDCdHgPUn6pNfV",
  "key15": "4Ne5V8rax7SVdAb42UekxBGTvy6PY4PjnCJMGEo4brKBkXp4yEYt4kro3JYjCqKGashAGUoLQfEZB8brgvNnNbNL",
  "key16": "3rfqDjzrxYdxb4sWNF8BQpKZkCFeskNst3Ps8H3HszZGjMiyfHNZJGqfK6eoyJNXsaaaUKpie8W9L42qP3pB2bMv",
  "key17": "5Qv6bQF5ZJrDKDepoLLrMNZMtXZRRYBmCEVzWAGQZ6YhACn1jmoq8UnuVrLLCW9yG7mSHJQszAW1FEkgfWzCSfaW",
  "key18": "5A5sNq9KeNuuK6GBCUtGEVULrBFrNy1xXDvR1K8HSFVXKGzteooTz5aMMTmQ5vy3Z3q4s8sCDDMR5m89Ns5oXpPW",
  "key19": "5YGR5uY5dA9iScsfye7rSHtD1Wnc3QPJDuGoyGtDDFzAE7MPmsSLr76swUnkV85R2pCrPrCH9hcpjSXybrueMHBe",
  "key20": "dsA8f5BkUu6kBuRpoTDY9cRjQUmC5syokhT4peCVmrWBjFfKuBdvHhzumqdjNpGLPk4Vp27QCrSokNJamb1SbWh",
  "key21": "66639Lfux2fb4JaoTvYXpj5b9tZjpqdfyCEpBwfHAEBfZ774qxqD58nd3qWtNt6GasrGpwHzV14s6eMgA9yodgLZ",
  "key22": "Tgyyr9E6K41saQ8nefmCjkS3yB6zm9YuTUoR7x1V39b1BGhsx64NWweoVwAyZvZAbVsZnn5FsVY5CBY9wZMEU6M",
  "key23": "645jTs964VfPWhuDvMnkz1JDPL7t5rJekM5dCQms8xPgKApXC9v6Mgtg72M4uJfoPcRFn6HtU2Nm1cQvKnzGb7TK",
  "key24": "2yLee5BiBwDiWjsiKZmxKsMJTkomw4y5ts9GACnQJ6NDjoFHv1X4acM7HR17VxiRTreyxCZABRysQ79JaywvYSBy",
  "key25": "39zwwbm6acWnaBMKAYJrszVZAPAffF5WqvqRveu5Mf6aQBthSNn4EwNpKPWD4EwPFsvLySamKptSY5NHeL6uSrrv",
  "key26": "4ji1ppTBsR2XApuU21psLzZpPuouwSC8X6ivTLFfaH3S8WQaQhwrtGHZbBwENufRyJmzMBAsFdVEF2NbaUiMQbR8",
  "key27": "4CZJLs6XhVc9CA8BWkvckcYJZFte478ZenNuTSJxrMRMNtc4EuVin5Dw8E2Tno8KBJjHg9w9QX83zTWe7YJ7osXe",
  "key28": "26qhEKZBBpfLK1bLg3LFmQSz7ECJoiZJh2xDbLmzbfD2Cuw7AzByGYa6S22MjhBrVdsc9T5b15d5WMUbYZnVm8GS",
  "key29": "2kAfk9KnVysZWHUbkn6ECkdc96JAWWdZVHvAZVHQY5gTPA6X5LRcQa1n2afa3uJMJERmPLgMVt2M3QAyaojhgiCL",
  "key30": "3F1LHzenExv9uLmCPXwF3SFJP3m3vwrL36nZfbVBbY3XrvbcMLzsDAJnWajFXewuZRkDX6gsRwnV8FQEHLnfBeiw",
  "key31": "FT3Sty8GBRV1TprxVATr4hAesscfLBTJWzeRAkxnbzG4NdxtKGmPyJ7FAxyAMu92zs2RYjBY85VLZ3tKTFNUVmL",
  "key32": "LkUUjutnHu7na2JiLeZ2W6nmbJdKrvz9Y6r4dDsXCgNE5NXbsa9jfKTbMkTukmuMdTZgPqpajvkfUD34x7e9ogf",
  "key33": "5HzkToatnvVt695ByJsd9ZzMpSdu1ygPUGScEQcbB7HkCoY3hBmoH3dkcJAAT8fWPL4RymQCwcaJZtdA8vgwd5eH",
  "key34": "jGvN86rSQNvbBfobj2sJK3rX5LQkTNXQcE4hb7V1huFB5GELXqaNcqUojk5nCD2xwZwvaw7CiyJxMApigtN1qix"
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
