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
    "5Pa6nCgdnaumBfT5nR2FgcadxFKbirJXijjG21WjwTpckwUnY7Y4rHptwqr8AkH463r961yAHfAbDWE8WUMW4wg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qc1FWMyYnFbFe8Dsvr2RH55aSt7GPYfGGz5XPinK8L6aCBQxrZDMsMQfkE85HzB1XDWJSmonBYnZ4qmgPMgRoYg",
  "key1": "XL1o3uSa8CtC4t6R8T2mXsACgXnAoWsRJXnBD8JCBW3qDecx5SYSHnetVSuBJoj119HCq5SdBQjJkpsLtPet2xL",
  "key2": "2sTdUHEJ9wZR48u5hbnSaYb5nZeZAApevfLBTrFSXvzgW8S211Q6YrXZsZjF3qQE4oDaoa6BA7MuzEWecYWzpP1i",
  "key3": "aTrYWnNxghoAa4a3N2kwtsr1fgiKCA8wfg6CBRo8RaV4vfo9v5Bq4Z5B3UDvLCQg65ghC8buydEyAksMMcr97b6",
  "key4": "343idcqc9gafUreL6UWVCrZYKDgm41vpCtLn666XR7CYZ4SBjDJ3dndUYP2K8DbxuuCxbJ2zM5AeTEcRxSnyNfV2",
  "key5": "2LTEYbbzJSnAvH3iTSYvaJ18azboJHwb9qQgQKQxefyjZBh3x7PNsCkCK2yPyZJ91bBuitrpYpNhKZeL3mEMTwru",
  "key6": "UyrNxFde7fa96qAmqxgcAS3rwtKcYstL7oMdGFrUMhmLr4QSZ2JQirJNyT8ybR2k3pyfrMHjzX7BGnTuRZBdHp6",
  "key7": "3YRn2fr8qKhuAb5LrtVZtmtMiH3Z2MGbGPKdAy6Tr5oNZurZzTVXadZKqx8989uqWCwQMymnrGCDovJmAdUFGAUT",
  "key8": "2z9LzPrRRUZkgiWhKDZ3crTmAL6jBbtZsV1aVRavzQ5NNGKRVvWA1vJM3EKUym8XYyoJyjpR6awUsez293YCzWBe",
  "key9": "4mJxu3r2PbtjLB8cd6Kg1spXoPuKNWAW4zttVWGKA9n6LP9kHeTX8hfdkegrRJs5sGDx6nBTWEQDBmiPNapdxHaU",
  "key10": "5gPEHmUmz8NLHKhx7PJabFKvw6yaeRtkbEtCUAviUCdiJL7rKmcPBYDNPLpYJ5ZJjBtTGXWcJS4aTQgZt4ux79AC",
  "key11": "cxskW2bERwgjr34cdJSw7CekjVzRZJcAsxMvco4XyS3BssB4Vyu8nri8j8zjomXm8K6Y5dpeBGDSBRcT5UeNT8h",
  "key12": "4tPiEasK5BL5Nbt8p5zF1i1KW23FrNWVWA8o3X2VMMwz3m54nW3HcwTnHkWQiWP83FmCms3Jefapct6bWRRenuPs",
  "key13": "a4FdiYeYnn6RoSrQdEbKznAS4AfuMqoLYt3NAdvzGo679U3SBjBYcgVR6egKZo36yuaFGWrx4vtYTSXx6AFcLRx",
  "key14": "5NZvUUVQpsxtYmd6f4XrVz2UUSRtyUQcbPXUMervSoxSVHJJ7HG2omBH815EZEAShenwkgyfTqecdhDstGowBJ6q",
  "key15": "5kUxCJfdy7afRAceH8WFTooh3pPwtNb6jzy63wpotrR3L27n8bbZJS7uf5uXtccxSrz5Drz43ccf1q4Q1vDNYwsy",
  "key16": "5NXigqUwDCcSvQ6gxhWoeiH7LrWrwDEEuWBYq9xB1DeLGvuavFaNbYq3QpLB8GSYfDe3WDVEJxTX7n97hEYAVmhT",
  "key17": "64HSWa8MmjFGgfUoKJ93DnKDtgcBUtsdKU93YhQWXrLzXJyzbBjiPRXKWSDVKy8rsskcQrEy16yxNY2WeA7Pm1Dp",
  "key18": "4N2MnfMwtAoiyYPwwQqmbrETqFbeJyuP8NgKeuJAyQrHXDvpsjGvxEdwUpGE1etNktGuZDkV85Xnh84YWewxyf9x",
  "key19": "4jjHfdSEpDJ4zLs3EqAp9tsBY8DXGrE6SK5sYfqdUh4eaFwWcJm9NrHuvWv73AMAperDEn7E7YDEcfHikjRwqPLC",
  "key20": "HLGRktoMfV6CikZmKwQetpQW39k63Kd2zXnPfuSGAS8p9GYm5Rk9gDYm2UL4cQnUseckP2uCcDKSKkRSidizrou",
  "key21": "2NQVrdhCSNDWAihF7BY9CW5amKyWm1YZRAmwRJMjRPD7B3URBpNF2eE9Evj7Pj63CuoFd4AGvT1wZwFBhv2FPYX8",
  "key22": "5oon5hZz1A2wwutSA1shNVPZGSMtKA1bqjcBdGSx4VSe8PuEALfCdEnttR8PyfJbL4bUBPUMvVujeKavYbYW8BdZ",
  "key23": "5ervBbhDp1bpvgzGgRcBpWfJPT575i4xCCFNw1hEWyAaR5YjAN7eTZaFSPT5Hez1dZ1FGneY8EMz2PJoNf4WdVvW",
  "key24": "2FYhYzRNCFstRqwCpPf2SVNc8bWXNBK2fYxBUY9AdGYF9JVQ9au6cUMt5eqytJ2zsJrZnPHwgUyEBKQwMV9FtedS",
  "key25": "w7ivo1zELJHBr2DB3pBJ1uj3eMnt3zfiEnX1p7AXhuUmyo8RWbrYxBhnWhf8sFMmPypV49v8fFohDFkXE7ssvpY",
  "key26": "3u7mkPfLfv2gq2Q4VvwYADjveuYaRgNdXujct4jAqxZ3R9sAiXsPYTgTPEWPUwtjvgY1oshgDSrjXVQtS617oiTH",
  "key27": "5vPog6weV5q4Zth1UnntaXpMKrqovrao2CgHZPvKtGik497yM6L3jjDnVC9SZG7kEYJ8XMkPiG8KdJrLBua5GGEM",
  "key28": "2Uu2jra1Uc1uZTHztABaR5DwUCoM1Ut3tscvazsRTLfeMCiknjJcvC3naE4hPktpiHd6ucWL8r8AaW5hhsVKQDJX",
  "key29": "4bVMd2hxYQmCi64beMYuF7NAenYuRdgXUaWMEckFbv8v6i6goVZEwNeqdmEfqeFwjJP5hz9JngoXfr6FWJPXxWDt",
  "key30": "3KciZhVtDp1bCazNZo5JCYjSPHnH9mB5jTdQsMkkTWaJFUk7hE69zwto3Yotr9acgdVQGw8vgNXf2ZbfXseYYz8Z",
  "key31": "3s5FFgYtTH7efT7Lgj2fHsckiVB4b4GFzsDXCjMeqkvmj6mJd7gozg8gzMD525FvsNRseqNQ5QLn7YKWTvrzZFqZ",
  "key32": "32rzoN27XKv2hdPNnkQGY4rvtHGumxgWnk2myPi7tRggm9dciZ3U3QY4WY4sEYaCSNVhdwDysvaPcJkoeeBghHV6",
  "key33": "ihA9mdFHxz79RSgTosZSUjQjtmGBxdfYQy8VYsjXX5UJLokESE2imVEoPgoagBdbW6MdeiGQVk98uGSZwHu9BUS",
  "key34": "3f1AKC32FbD1i1jcqjpGVjNfdvJzwzsgSfEYyotYZmSJQaM3WBiZVBMbULCQQMetRJJCGsQpjYXCfBKFzNFVvNdt",
  "key35": "3nQpR59sDRBvJQLarxHV8cg8nb2De5FEzUBvRaoRg3UnTjCFTzHnN2hBbSjQpkFuxwjZWXFNAdNuCG32WStkp8w7",
  "key36": "4K8bpxbbLQBBiDLCjgqFRkZ8zGzsf7j7t2DH9SKHdAHAkQz4b2KctJMz1pAgba6JGsBsiSyCzYjxwXQeKTpeCPFf",
  "key37": "2RCC4eFCWKfcjwavyaD4hEqiQWdRbZhtr93KgV7qP5n2eSz6RgS3UCLkeW88VJnx5m3Jb6ZewmpGjswHbjPupQYT"
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
