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
    "4mNZxE91KmFosh8fqFAv9knTCQVSZdtt4DFjQuHEj4xQZsUhHYFks9DwVn7f5JqWBnMFkAvv2Zy6JokoE5utahti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZxBivHevLpHLGQ6vwYSaWSgjSVtSpbKGfhpYbw3GkmoEqaCdjFG8AERQok7nJ7LJBdZwuSNS47yEkX8n9KdvHq",
  "key1": "3HGkt82JZzqWp4XbETcfsjdqC7mJCKAdZsoMUPSc2qF7wgE1cvD4fSzM7YFE7zYu33JA3t9j2Su6zudPzNoP93wt",
  "key2": "5gJDfCJpNe7tMzHqDbUk968YXQqvhqPSksesARftnJqdzQPxNfSa1etLm2w1uo3TU5X3QcLfpQUmKK97q9iuszZW",
  "key3": "4gbboXZ2HBdSum3WFDmFHZoJA3ftfLXc6UWCQr5yhj6AFjN1AQS1n2fsmhWqaVXfQJQdqNTxEf4oyLfFtxndnx8n",
  "key4": "dFtCtq1bxMV8nWskB9uQTiYFBQxD3HeoNUimGQ5jw81Rtim7VMxZ5yzH4x3hmzVVEKUYKbKd7iv36fM9pwSDtwD",
  "key5": "588hauy5dpP4o7AmxoDYoxu3s7NgNK9RsHorB2s8jsKBGBJPwb9pWHcBkN6gUGByAJQXboMto5gitQgMcfeYYuxs",
  "key6": "3coGy5ykwpT969mrFCGzv7JKYy9ELarqNUoXQxk4AfEjFdVcN5fMXgjwjsvEdiP3qSwNhyQfTu5fttMDAt5SvocM",
  "key7": "3nAtjjCFcirNJz6HBz3uC29VsC2qLAi3UHbu4FWtmMHiyMxYyZNYKbKWx794SMMZk9qurzpeQ3vGHX4RBdN5LsNS",
  "key8": "4oA5LVK614GzHvFMKwoPS4CvFNNn8wyyV8PMDobXHXMpoJ6BmMSNwMpfpi3GFSZUbTRBSz9aaEe78Rb3aCYTA6DM",
  "key9": "5X4Zui5HziW3ZMu8BkBrmfLVG81oXoYkh9dQP33kvwnJc6jz9YVQmJwG7QrUKfVe4N7YV5iUwQhvduQsKK8Mhac4",
  "key10": "3jfoqRreKnCyJEkzyBSjSX4UeYDCRGhcJqWhsQtkGFRW76zhAuU7QXqgA7t3Xdre2aYRVT1yZFMgenkcjdEyr92W",
  "key11": "2XE743TXaFuTh12J4rjeamv4bzZk87xbNPxUGVPhqsL7VSvn7DRydjxmueZQFwqeG7MYekHjjAUU6ggWxteBwQWG",
  "key12": "2vrZGQ14ZaQW7mpxbsfndfqprgnnGjQU9gMZJF6dXCkphoJuxZnanoWVf96RwotkHuKxMqBJC1rPkFUhj2Wxp6cf",
  "key13": "5rmd7mg5K9pAkPKqJTdwwcDASGmF9tYSns8nJUzWMkXHjkpQdKSVsRnRUTW9QVkZ7TnSHgAjnqcGCueZRMFXEDVm",
  "key14": "5rKxG7S5MSeZB42NWVonJRQPg8LtG8bGbDjkmkSXkXNSJoNtBmDjd558ndJxutp3ZWr6D8poGdjRCFBuj9XY9EqK",
  "key15": "3ZRJnzUyyRzS1gW2vj8QJ4LbLCPi6CPg8CKjMttLpguEYAM6dMsQEe1qFE4vKWbckzpj5oQi3G5FuwLiwoQNLLxY",
  "key16": "WaJ6WGkQJwd72EwhjqY7FCn6uzoTW41rLtmMC5AA35T4SDLXSdGMeUMKZ1aUYahtRo2SzeZJr1vubBxzTinpvjd",
  "key17": "5iedg2L4S4AZHMZiB8EQrRPcyqWhTutyPUmdAXCUJhGNNQsgnUNXiy4UEhvn11EQF2A5pF8CHEwfYjp4UXWLvriM",
  "key18": "67Zt7xWiUMSanok1x8mW8zQii9q6znNb1mrbNV8M7ZFjRjZEb4khCN8P5kgMBzF7sSnvHmcg45exYhochsYsQMC8",
  "key19": "3z8GHzBLybsfaL3qkecqKiKL4koiwufdpe7fLEC1ESnd81aexdAmVn2weZgvN1Y7kBzHV65kbCZ7RVLG3biAVz8C",
  "key20": "59gbGHeEEEq4fNLo7zQeDCX3sQbeFpXsJPQWR4d2Z7VrfwVZQzdNm2AUcDfSstUdJC5Pu7jPCojGVccq8zvGRQAm",
  "key21": "3MKuKTtYRxDfrXTUwtKaijjsCqAP2nTS2szm6WZLPBwfLW1KiYhPXFrVpCbfaJjjnKVzJPLLKz7aAjWywKx7zNp1",
  "key22": "4Ps7XbqCwkj4ti9tVb2ceqcoumGWzhUWBVk64SYQ7NT2QoXFT5TfkNkozs7M14rCXM19bZvPQF99bgUDLLhRquH3",
  "key23": "4HXRZ4NphyrrK2dFk69fXH9aWrorVXEn2ZCHFjHNoBCr53mFXSvhHWBJjfeb6MPJHkp4q8K4PifocMT3kh8KH15q",
  "key24": "3uQwtKjv19RW8wogyj2GDaEdDPxVM7D42vr8S9MG845s6rr8JC6DPahz42GNRLcA2UTbGZxKvkXkmf66XZVEyUTp",
  "key25": "VusxG22kNsmi1hJmWsY3uiAYE4qNgbA1BGUnYzaKZa5sM9wz5mHpmBM8ikRtMAsfCgRyQvi8JASQnkqPgSMuLN9",
  "key26": "563w8iQGk9jWuEcPuzoLvKPNsbum5aJKcWSS6MMZb7DYVdukxoGnuqia2F3Kqf52JqqAQcA2roodAsZoth22YeUy",
  "key27": "5gc19LDWgYFJTNZrMHP4NXAbbVsokaivVbBCfGn3efEkbFHcvN5PJaDprEVjSJg2fJXjETU4NGFvLYuw7QkmVcbB",
  "key28": "2kUnrv5faxtFDq4Gt8jniKUT1utk7389azsj4wkqbNZ6Z9Ncb8Ykyz1JgqXgSegN4KKZeQr4qdkEakRYsvu53dtg",
  "key29": "5FAv7VQH6711YMdC8TZenr232KvDLUFwQzZLjZ7cBtHyBJfJTtLztJ24CaMoWKdTW4diukCZGxqkSvJCrxBS5onW",
  "key30": "vqGMNL5GG8gm44TzNmv25XyWdN7HHXjXbAKbVq6j5QYMuso76zLfax3R24W7ujKKkuyMzCJTQqSQsQw6wr6auR7",
  "key31": "2h8ihobFCMAHnqFs9YFnLZxAi2K4Ty47HH6ArpPm4HQZLJiDc2YdyamTfFkU98KEGQsuwoz6PtEfzdCKtrZeCqnb",
  "key32": "56gsuuNQyBu83idfxGiasftsJbYunkotYtpghq74jgYy1s8CzXGzQ3mR9adHQmoEidSRYfLVqPttX8hUyWyuu1D9",
  "key33": "1v88Ly4anLjf3QQD11o5bbh2vwKQdNjVpAEXBPqJzoTLeYWZU9GQ89ZySvMVPp9aUJYq6Jp1fM4N5URkjPRSqY7",
  "key34": "58uvnTzuRMdh3bQK5h48PRdLieKsfDb5ayUmecLRCSsL3fixnQPmCkaNTbe6qkhiaLijzKwj3HkJ7jyssVqyL4BT",
  "key35": "4UVCL27iPbYGXgoFpkH4NFURj7ECEsSTvfz8hAUMoRNuAHSGMG1UwHubGuuth1N73ieHyhBmrxxpKMAwLg2VVhg7",
  "key36": "gx7iXhtYyCuSERVi7VxasEEFeh8JMHBphraCJQyf2Zyfj7sjijHtDLA93FCqRnV4yPPe2XABtnfSiRDdqVWSMKx",
  "key37": "5nDYWDfCv3BdBWtZ5ZiPLEsbYUo2jj5d1x7k3qJsmnhMkiVjhj2GichwG5Moh57qpHwxkcq7G25nRAzU3342KZYY",
  "key38": "p7ftJC4FdAunsWPdqPgZgY1sCv1DTqdW7UXg2yz1bMoWB6bDwdDkFDM786MhBezEt5knUeyG3HVQFhCAGTHceag",
  "key39": "8trnZBhxAMD4curVVJ6NteksEpFtRBpnMWxNnAcFNo2HBF6t4efoyk9NeNCVo28wiBG2EkoP8Yp742quhTUppXz"
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
