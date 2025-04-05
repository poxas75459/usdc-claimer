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
    "4JiD9DWJYATWSosAuND4ieCq5J2uAssEuMpuMXELgqo6Donzz2NkDNKmi4xGdQZmmurwJX16tSdEMoo3fWSjs1we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7hvS4bY5pC8i4puhdqCJLGS6iyaEmXSxakWjRXqogQEACMUHqZw4c66fYoJrp1hR5fRk41bpuNHGBcnLVUxJTx",
  "key1": "3qT5uGnTmjHumPzx4i7V4xj9eBQD67JPNgHZZrB8ft6pFAB1xveweoAE661S4aayHDfu9sDwhFD6N4nNejVeLLkA",
  "key2": "4gmjUmsCHiQ5bQmaeBDyeC8KPU7JySuobCs7HjBausTkPpPv1pRTcXr4MpNuRDcY6qzSPKJ1tpfnDGTVQhdmnRkj",
  "key3": "67kyiJGkSwYWLid6nfWmtsnLq9Boyjgz6kmKegsxSBARYPECZU47rYzMLqPKERt6jeCtD3dDpsm9LYzest9CtW9s",
  "key4": "53waCxNCMX57iqXU5cDDvpT8YknBgQyDTbWPEwbEjy2Kr4H4zc2vGW5ey8MT1RweMgQRwFKZexZJxXiUDHdKa3Va",
  "key5": "3iuL42PmYt2U9CSbJN6PW9yMm7uNXdYAPCDaDobsNtu4jwomKdnxfzhkJVtAB1HHMS9JAek7c9jyx3Qzs3mbbGTn",
  "key6": "TuoGjYsdfFbyCnXrtbrURTjgKHuJydwTNTsPzfkikyndu8UseJkLMZjKavhTjTQWjt5DfPKWAabvMPjf8SiCbcM",
  "key7": "4CQAjq5jkavDwe5RkRQ6gzN1bghsQ4KR4GYF1KjeGprmfo26vErK3DpjmxBHppgdQ7xXV9W6cga726GDtqSYoi81",
  "key8": "58Mz7ccSW6mz6Wxo1YDGiMWWbZEE26xLogjfC1z2Mq5SojkqFkckMqz32B1up3894N54QdJZ5pZHWwWw5hB8GhFL",
  "key9": "euEVqQjqvxcECXxdpAC8d645ApADfdTQ7C4c4WGwrsqiE2L8ahkQbkuDHnqhhmxDsRujLZEccBcUafhvkyuiTEk",
  "key10": "5St7jQsuGGbSM9cvchgEegnNP34WAyPdiKw6Qyb8FzdoQJCZcbTZEhWSKnEzd9mUVNX22uG3RT86JtWUW7sZTQPY",
  "key11": "22Rstz6CtJSvjwAivCcY6BjvXrwjm74kWWWxzguFQPFE3JSnUzFqcyugSwGjT9C8fKCe91CRyoNA8ditBvGKxnzc",
  "key12": "YwGxLnEkMLU8XR1wWj2hvnpLJdPM9PSd8VcZg8ExHmx72JkUFjb8aqLznWYjZcwK2GjZrHv7QuAPkBRaAT3JsbM",
  "key13": "Wjuvz8k6D3LE2XAhCHToj3EgGMThZnCchXXN5gDsp45qRVokNESvKf5qzrf54dGigZXVpz2kmQjAqpMicLjiv93",
  "key14": "4HEmyfQ2MdaGqgYWyo2eYbfexJgUtSDZYjQrMeoyYVh8uqzWtZWAJyG4ybpXTPZZE3yTDefL7nTiob153hY9AtyV",
  "key15": "3HQ8BxbbGTPtfnLkqaB9Z5kfqxRWkFJuMj13fhZHXz52zDFLK9aXUJphxu9wwK3r7gssFCd21JeWWP1R6qgWKk3F",
  "key16": "nEH5H1Wfdkzct2eXPNYcc7FvCp5Da69mzV3WDUYNmN2dgGxYJ6vvxFtfJeQyXWF56KnqmGsivgKRyZ2rAZEvH5G",
  "key17": "5GGn4nBKC63iYydqn3mSehZbEbpEGywYUUXgUs5hhh7M49FciMyD5BCx9rtHThrbcpn8FLGCEHXxWdYPUzEn9jMH",
  "key18": "p79dMUwn3XuhJgAsxEX8w1VJjbNRfeycereV2osEuZz9uUhCJbXhvgXwC72idVfbT4qCMEVb2h8iMxVfdWna94c",
  "key19": "2kYnTgiUd8BvxRBJoRbCgfB1C94UjtzwEqagUhoJWRW1wG7nhPbH4btTxBJWCYdvsU8uZEYHmJYZgEP8fxC4zj1Q",
  "key20": "3JkMFm1pSpirsiUUkkSH77SHdv9B45JEpKZgS1Zesm23W7woRio41p2FGDV4MW2XepKnSnEBdwr3gFgQo2W7BJ3t",
  "key21": "SCRW273VHRCrGL4JFNQteNNDWosfJT1aPCLrBEMwXrBV7ugLxjcvZXBnAg4vpZQLQbNeJvdakLExZKibMbqJp9f",
  "key22": "3oGX5nozJCnwnmRYsHvSEX5JFXAvLPcPqYsFXApdso6zaR4kNBJTK1xCzJ7qjxAK6zsfqhBQJdLgSqpsX4cCM2ek",
  "key23": "3eWZJyXfkrdNQqWBMLE3Z9i8KivSGW1CRLJF9yXyHHDqtRqhGSVbeQfivj2CEajrF9Bj9cLoXyZPcwH63bfLNuT5",
  "key24": "5Lvw8USL3p5PK6Sj44Ce7c6FWC7xNtfs9QzC4WFyWV21hiTuJTLZLcntGrnFZMxhXRUUFQXL688RtVsAVS641uoB",
  "key25": "5MMej3WJqzRCQ86tVC53MwRw1NZUF1M2hyEkAptSknsCpfgm88dw2GEFbmenB3zxBGdyjqxtXiMp84VQWPwVHzco",
  "key26": "2vSzWzW3X3gkfVYGritjeS7t3WLJGEch61DVtxYzspmCwVn2xbdDhsN5hPr3n1bNfde67r8kNFt8dy63yXNf3oPd",
  "key27": "3W7GZbUfMc1kdBiZHceRYReHEyJZatsrQTNA58YgycjmVvbuyawr6LHapwp6aybesW57Yh1vBjLwYEC5o1fTgZsz",
  "key28": "2pXtQMm9VQnGzpJTL2wmwhBs3BFV5GqMwKdDeeygSM5pNSeZbRjCVeydDnxFfzh5rQ2Lo22s4n4eDfAx5W9ACgG",
  "key29": "46G5JbLSsVYQshBsbk6yA9Kiohnh9g24GAyy9yowPGMP8qAbYSds6QQabQeWZYGBPmvUabKZLxRUEQ3kKtGdSm27",
  "key30": "5zRziQcEFkTnVDXJHaBHi3ZhGkey1EHqGzn2V9qTHDQyfsCMmPph94ZsjUVD2uyVyJ4b7bQXRopVfmGPVFZrjeMx",
  "key31": "4Hgh6qVpTWgJcfKGmD9QGGw3pKuDFwcr7ciHmaUE7mGaif1Y4oDBAmZxKNH4WNhcgWeaxXM5SqPPHgKofpKeX4Tf",
  "key32": "2KbqBziZgBftTUQRXKresYNMYvKWqEbDAVGpbd68y3nGFyxLs69o9uQ226YCCkBvjYRqoTFjBHK5a49ePrhN7iBF",
  "key33": "4MR74xLdbTz5mnghfGFT2F1KR5bfkxgh1yWaTqwiB7vdEvh5KWeJhmu1bLasP9fZiXfbaQdzsjwTnA46FDoeneN4",
  "key34": "49bb7FSX4qZ6fmbf5WQc8CuvWkeaodrpQUN3XuvP8fsubC4EUjG3eWJ8xGRsSAFnvmh4NYG1JuF7QiMCDmafAkwj",
  "key35": "5wuVBh4um1xVEv1Taj7g7dVHJMbPZ6yE91AN1ws6NmH3VK3hKqsXbLaY4tcJrUW2ZbsJofNiM4uRvG4UzTUUoW4P",
  "key36": "4RYo958qgeKuxW2eqqg9cTik5rQJ2enN7LnVuPGnZ2LeFwVirQJJvkssn3hwXy1sDUxdDksmFrPzuvAmgoMYm6ZP",
  "key37": "31i3tdzFyhjvtjgcoY6BkNMMcXHqHEmSDdfE8CeT6YwNgGAuXBPDF6BeEsfzw3UnroKheVw2zxva1fNrfiUbhwB9"
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
