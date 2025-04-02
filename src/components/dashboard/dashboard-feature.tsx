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
    "9VrHuNpssN8pf77oYuxbhedT7Jg9swdcDANxJf2tbcbEC8mq4kh7V5dbTDjiYTePfdJJM832f2viN8wvwk5F9qT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pt1u4mepLzdCSHwncpN3An3mZpr87mwpqhvMFLvSrgqhyw4nzoijUvcbaVTikZmuajWcvHXe4rVW5GoYFxhKYKH",
  "key1": "JHMykZaryfSXUKXjQiyQaQxfuwT3xZPzVK27yaD7Mh4AYmJTbht6QRoJkLC8mwopSDqiMLD83abNvk7wejnrvP7",
  "key2": "3SqtScGfxkWZrB1DkYhreiXPd2JzTEr6duiU2QFtFLWHNYumyHkKhfDb4PrfmQsnttHJeKYHjHG5vCLnvXhydpiX",
  "key3": "3jd3QkExRuhimPApDx2i569WmtCR4is4JcQ1cy2v9KNLcap3PmBuKxvTgxYUdwK1xejMoxQfDof4wuM8UxNuor9j",
  "key4": "58dT8Hxf8CwEsPDZDneGt9HyhJRFc2A4of11nH4tW4KZCAeCUsr8dDQdB3LM1WEzKoSfTCjdtMDiJnkm5nYdmLk9",
  "key5": "2Pwxjpj6WVF7efP6hYna6tEYFwh6ys3Azm7wHMcPpVUfch5QAw5mLmwwhcN7V7i1xcyh1b6t8B6okj19pSkNKRjY",
  "key6": "YE25tuxWztK7q2d8FUv52sD6KqP6E36DrQoZkwf5ZmJbHcJPJbSp9WgNcUQ25xQcF5ouiRMWRFwgditRA69dvgh",
  "key7": "5cgef2nEfxDAUqpPJXai2X8NxTzqHxQdAQ8ViErgqUbN2JfeqUX2zFtKqpZoLwa8oYWcnooyXicccJpmuhnctfcy",
  "key8": "z6tXdnCxKJymTNbxqi6ecYNG982amyXuju41W11V64fkepE9BhZEDc6T3EQa1hLuShSC8gAcdf7hgSKCAiCNBuc",
  "key9": "4NjptVyX7y6y2UnHwwjh98akgbqJp7t44XtnNMHd8dJYf5UAGBKtAc6a5ryxRKx6JUhDN1t2r25RTzRWRFgPzAxY",
  "key10": "3AwcC3hFSaXhf5SQRySh6NoT98UG5TtvY6KYBzXLJSqGQMjvM9qFqQ8idNW7cSNgTHZBDW9cnenqYiM6Ty1n7Axb",
  "key11": "gFqb44bTXYHbmLNKz6E625eX8bbFnmGyhdacpDTdq3cB8JNHzyuxnmQrfK4eSvLRbPTwaAG66LpngNFqxRX5Kkt",
  "key12": "2i6f7uzWF3dq7TJnGkRMxyZEigzpi88jNa6M3cLNK6uBWfCSHxfXVRs1sWzU9RxzJ82kJJK3LUGnp9VxJP69UEKF",
  "key13": "4zCmn75L1Px4zQpoWJpKwJHX81nzDJRWgRrFz9eFCD1JMXgmTqE25XD4GoSEUpttuMDPjYCjVVLejDnofpMgzDje",
  "key14": "54bkNZYUAoQVaUvv3RxwSpcucszgp1nwiXKtP65D11mcCh8uhggiVZfzzDZERaEHpGqTzZ6u3STd6xyCoY8cjrkk",
  "key15": "3PAwAkiZkH5mpSuVUdYHZGqVuYjVgUnxQ8VC7DK7ZsJrA5ErQ36CKaqveex3JaAigDm6dDGYrZVXmuDttAYqnYYZ",
  "key16": "24xyUa9nuVP7oHwsvx1S1nysUJeZXiXSv1Hp2FnuBV8PXyexjqfhvooj2EPySmQvxJiqY5uveFU1SQBUPJRnDW1P",
  "key17": "2giwxasmcQshXAWMT8bjaB929ZFfy7TvTzFL9jNssRjh8ToPYHcpEmnCLHFKdufsNE3cytexpaxYJbbAgu6Gu8Mh",
  "key18": "3CUVgdrxEpgtMByP2rAQaKpvVKd6NDXA4rFzAM6arzvppBg8Yc2ri9m3mdkKXST4vcKbfTa591mQwQ8rhrRwYcrs",
  "key19": "3GQ11i27mWnhvgQQVhToAP9dB6xR6rw7scdV1aFBQLZRhpVuvmi5wqQTSk5i4wUWiuwwTSxqEk7hNoJkY7F6gVGN",
  "key20": "3QnjkzJY6oojQBTS2SqbbKLmVqyH8EmhcddzWbcneXSkCXdq3za7jKza9ZHNrWCw3JK8hbA3gKFeSzBfYaKef7gW",
  "key21": "2UQi8DSmRTKGAkwpd6Tmk2MuLzZBVkP2cbfZsBc3DJ4DhLXxJ9D2QmjFV485QCsXyhZ1bKHg4rKxQDdUz4A6N37o",
  "key22": "39VKrZffb2jegyep5gQstr1qacQECsB35sHNXNpGFohGbZ6ppCdE5hxuZFeKUUtZh5aYVk6tgnktjPy11GUUHT3Y",
  "key23": "217hSpXWsc8yARRvoGtpiqtnGWTt148SiVHVqZ1DwSRE3RsQ1Pkq5QFHnNk3u3brgjrygy6cczQciYeqbRL4DZ8Q",
  "key24": "3cFBSdEUgjZtNcCbieJgK6YhMLd9WgfJ2MddodmRA6pJ2QZSwkQA63iybjaU4C1HCghUBtmH8rmwb2aoDsNvbqMr",
  "key25": "5KC9jqpLv4fqeALhPP4LGnKw6SkeMKNNxjBQ3j2YvVXqwVbv7qaQChGfYWdWqM8iDkSvkRXH54yUA7ZkA24QfWwG",
  "key26": "4yCogoTn4dfu7XK1M2ScBHLfFJxqHRJkhxfHXne3nX5tjBKTvDfeTRHvTsVjvedMYpw243N1Aj9nbR8miWavEddu",
  "key27": "3Croxh3zL2Dq5cYt8YrGSVsLqgyy7xecBZed3UCaw5azHxD9MfJp7xUp28PKeHGRRV5hp6somQcWqetWzA8eM3bU",
  "key28": "52rqPMp7gKKY9YwH1BSCpzuhen7BY6m13VXqCbDXDBbJTzqM3M4SXCKvM5QDZjPASFwDBxH6JDB9zov3dWB3497D",
  "key29": "3eiijdmquCL7usj1wqdescvCXYC9YdBYU4fjHzefZqoedkViUrAZfmkpjzCbxCuZKsmXtWzYMEPg7rxb7kCXKVgJ",
  "key30": "4A7hna2suJDVDnd5oHKTMWKvhnYNmfFbHVYdwMQ4agqMHMNvmptUQXkMPv6GMuG6iFpW4eFYrSgTvsCHYDjpPLUj",
  "key31": "2HZ48jS1w17MVNa11jfN46GrhcWzQfj2nEGTR4gKcNGFFsx8rgtoWaiFeeRooj6RVq177rBWZHY1qR9ghPbqb9Ey",
  "key32": "5oDMjLrvDeh7wvxuDFDvRhXSRXaoKUC9ZzpSBbDkw3CDqQBTdPi5uvHxUugLPsePfzARJep4BdxyCJnZGGcjN6QB",
  "key33": "4bt8kGTCAB62ehxLtbSma3hoBsjCNYtnrpCrYpG85aV9kV38yfCc2BeMP22JpUX8motkXFJpJxojJCmBGQoFyNPD",
  "key34": "2vc3W5xk2ys5mqHgnbcVw9zwR91zkJB7RrsaGiQxG3JJSKqzfL9vsrAJBoZk39sUwBjtFqkJgcRvuJvCjdExdmJa",
  "key35": "BS6yxuPfn55a4XpMYKJLy8VHr6DGmgQJQCizt3Nh2cA6DJkQDvtG5zzcuHZWW6CCW3z5BD73mVonEVWhtCr3SVN",
  "key36": "3twZyCHqe11L23g9eAAXpDJb8E8K71H2KbbDjp3vhQCDpVKBWEgCkv5nzHkELftsrsUrGb5MRp6aY1QG47JewC2h",
  "key37": "3XR2K9tVX9UXQ5y1QB5ix54TiCRQrb5zpxCMcEJ1dHxvjR84rt4hNDphyU5dQFqWYe8W5jkroiygA4UuvKrbhWH1",
  "key38": "2Z3P76H3EGtjEPhsxVJNXDEhce1x7Uz2ei7ncRVrQ1fx7YwDDDJhv5PnDV2GeVfPGxUbLKR4Yi6DmUdR7RSvsszw",
  "key39": "4xyeji2sSrxKe1mCLTcY9hJ9YWkUx7uF3PfsLxvasUNWSESZsKT8eBYMNMEDoBxotQYSoih1ZbfJuzLaD7g5jrQ2",
  "key40": "5ADEfYs7Mwv1qh2E8fHBv6uBwfJMvjzMvgVkDvPBhbCrH4zDLBRPC2UknmbCxyM5F6EEsaAskozvK2uwVRoMpb5A",
  "key41": "2CYqz4WzbqAen9yMmKzrzpZxPu3rrh5iVe3W55EdaEhWhMzrjpsNcXkLMiywv7RoF8KRzsPEFMivR58yXxW36mTo"
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
