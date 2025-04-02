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
    "ZYs9AH1TQ7sH46QAoSQuMEqWm7kPGnsXsSLknc1fa3A8frDTMSJKhCZECXRHJCqfmX6VSABr1F98EsFpYGwKJ1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzVevw2JRXdBqvMxKMzF5SZ5XC7H9RHLguZmhTh5uNqfjJDjipqqNNCB4B6HUfcqmqyvsAnZeeAn6vBLF1KxDNo",
  "key1": "5EPQ7aHFPw1KurNh6mrVd3UhMAyoLxDGpBVZmg5TUNWKwDZqESdavZM2QoCWPB4E3F8MPyWPMPWjB5ftDiDtqsh8",
  "key2": "2NCrGVcHaQoBrAq5tKeStsDndPqXd5M6s9c9HzKf267e6kbfTjE5yPNo3XnFbw7Z2nx1iprZ6iYK2nbvPqQ2WoX8",
  "key3": "5NNW8cJVVFxYK11wpRnzvDXjU7mSsEJBz4FaR4d9MegjMPPG33B4xrP2WMvKMxoAu9RR7WgAtrEtWWT8Ch1FnZ7L",
  "key4": "PY3W1ouCxUDoUTeRYxbF8yv4koRjZjctyA3GYLTYktZAJExrpuwJiki3JJEMG8K7KMwevDmmBeZvPz1A28rXQE8",
  "key5": "4Nftd2Lu5oQUxEMc1Juu7rJghVYobbpa48tJSyxxyKKAY7tUYp3KidVsJqdjRpYh9u8iFTDoL69vTeT4jJVWGirk",
  "key6": "21oese9UUEPam6QZ384YVXDa7UAXKiZYVq8bse3Q1xPM7gKBPhDDkoQYUQV2kiNcHANks5bPHNHe5Vgbyq8oWdwk",
  "key7": "5Ha6FJFmMBRv6KWBXRs8kyBmDk8qkPnDdNtrFMhkJvS4TUd4CAZqd3oGW42tgTxjCH4P9aXVFhuzVAkiZ2LNBNLS",
  "key8": "2u5e41oHvW71eWWzT9dQwrZThsq3di44QuJevc1pTejYjVWso69nnaTsJcUPmfc8PnvYgpPwxTdUHAp451azoQja",
  "key9": "2Ryoaa4jqo5aW4zV2Tpa4p7QB3uB3Xxu79UKWk6zmfRje3nPdHNLJGagVb9vpvBWU8v46GWJspvySjPxCz47JBjj",
  "key10": "2t6WSsYuY6RSYaKQ9K7AVRidxvXyNhQFijaLHwu5v4FqZxkt9yzZXZ5Hffusi5absYbaHnLz5brLNqpbCV99S3bE",
  "key11": "2yMW5WzqdyCXQkKC9NwGkDoPi4FEbiXfSj9p2rhADe2DmuhrsdFFUjoMd1exs1d6QcvJkbV8oqDGabYdf2F1FC2Y",
  "key12": "3Kt8XK5Ro8ppbTYRpB2hkVwywQ2MLsZtSFmLZA7jtWrhxdgEkK6chJX7buvbfgyTuztiUDv9SLa9TtRwS97YMkrT",
  "key13": "2Bu26CnwNRh9yFmZ7AZXAAeVJAsa8WXKtxtsEdwsN8shQfr3gqXPYkk216gze7bw2jpGxm1WFXy7wnUJhr3wLp58",
  "key14": "51k9dSWUVQgVt9CEaDCa5wrDcGEd5Fw3i58RsZTEuQzgJLcHHntghd2ebJHwSsetTW1Gfb7pJjzE2Kgmztbx5MkA",
  "key15": "jAXgkKJzZmVK1meT3X8iEbsYt9dckwFgmTnVGk2LEW8iG9q1TRk4tbrfqbQwWDhhFD2GMDuEwGrXsbNC3rBnFw4",
  "key16": "39jzAN1qZjkR7DjfxUMnwQa3nYta8A5E3JdGjjwVvsXFaCLgwnTkwfjK9dNMeyt3NRHq59hij1rDyk1rLxa9ovZR",
  "key17": "SxajdRCPGuribVhtFuALz3wSu4sFAW26P9ADQR63XwfWquMnpLhHuWizdZx96dszsNZfEfWvCgZmMwobQbWn8nB",
  "key18": "4tGfZgfYbk6mCRd8gMsDgySQLCZVWjtzKpAUk6EdJTk1KApsraFFLZZys7qhHPoVyWC5bANUqKZ3A53qBiqVA1Pi",
  "key19": "4Z6hitDy9ek6pUAu4dBUF7wABCND2zHhELyhfnyKGWVk64T4Yvs1xfcKrEY5aC9S4QZP3WwbVoMfH7c1xHo1JND7",
  "key20": "hQTC6Gt7boA5yomMwnMkSbEXjFXuRcP1sgaGTKsAYzmGr1nCpg4Eh95mQ4bPPjAVyDkYx9pup3UWupDHcUfG2Ne",
  "key21": "2PE4sqbkjBnjkauJxKcM987mUzWYCSnRf5k988HRhLnEK9yCiZxUP7sZSq874HiBnQHEvhEYE9QbFx9SjtaTBGXj",
  "key22": "2pLRSwsVHW6TTnxxETn8Trs9zLjjNrBb6M4ZvZf3u9vQ1tftrLZ4snKnVbVHdzMMDbZoFX5SFcmHYkZnJ2QVU5Ft",
  "key23": "43SH9ccLKTEyuMWpqEoEKXveMpYZpfnLjiaWtU3benMmahWg3dKb9NbtX1bdSSXPH8D2hxiks6o2UfjWSQis9K7a",
  "key24": "4cDYnUa1UcvwjXZFHC6qjWD3CPt9CoZpsL1k34j1ebMeNcd49r5RgEVyhVsj7vfKLiYV9vTtwnNVb64752VBxrZg",
  "key25": "4VCCAUkb8rnbZxCs8ujNR32RLsub1qK26XFtfZzVukn6FsWDdtuiuxiyJeFXDKRfRKE4Zdh7h4aHFHiYJSYAPbaF",
  "key26": "55Qm2Kx6qNNabNB2eMY21cGgVN7ZePUSoMxA4ZjmCKPhJqUjnyWsGGiajRzquAcM3kbNsKnNqtfLfW5rtCKZU8so",
  "key27": "2rZm2RZhKA87buTngixdaedgQ2kLN3Nny6fNPvwh7RFKdDsSdhFJ6BWkAtAaYZCRdLzexxYSwMf7VMLw8dkq74Um",
  "key28": "3YCiSLZGdVYbNzsqsPbqHJeZLSitJ2hShnkZpbKPsa19tPUbr9gLXPiAaKoUDZnRtYE5C1o86NPkDxozk3MHfbAe",
  "key29": "z9KB3cm5ZETkE5E5ZGNYVKepsc3P2MX1ZcvV42fyLrikVPD7pUUZQ1gZV9JWFczPkz6K4wAs3hSG4SbynxqUEXw",
  "key30": "4DoMTXAqPrBLzWTj6vV8BumVrHZnEtBESVA4ksptp8rKAwSmH2XhJDQkEVMGHNT4Ew6AiVK4FZy8YoNskAeK6QYj",
  "key31": "2YNh6R8ACC47BbVcewhpedXoLmrgeWsk5UMGM4eF4td1H7rEpuJ9Fx25T4b7RpBtnnZMakud7LMUmCzZpUsXETVq",
  "key32": "3a9rrybiF9sNjYhxD2wBwmZWQ5vTsP1ESxMA4jYu8zNnAoZguJahrQh13d8cNgFv6RzHKbhUbdKzuTrnsHcyG4XA",
  "key33": "2j622ggCcixmYvryfFHhwhsBBfrPvCvV7FLkb6Mse9Pt5B9eiJdCDze5mtNQnxQBky2W2D4ezsHxAdKf1eJTRKZa",
  "key34": "ueGZNkKLCof8iYvZrt5rbiygVYHUPG4cG4QESFjaxf4SCUJXSXmATKYRrg29AoU7bgVS4y5E1eDaRZjuzzfRFUc",
  "key35": "5fiicfAZERQrXBwbpZDhzJuLy38HjmUmBQqpZR3YCvVdF8p3DddHnyUDwKzL5sdsPQKEt7GJJzzvQYsQxgZs4jpH",
  "key36": "NmpYfTQHgxvdJhUvcfFi3Z2y9w4ZxT6sCGocWzcrvQjCEUVEQYu4M2RRSohYjdyaeZfEwJxFCJhyzjwYKieGKGJ",
  "key37": "2B49XNjBbKcv8Gn4SsvdaBB311vsahftTt6NCKHoYMQ99CqZPCGyr26XCVxm1AMdJaQZzeL2UkjHzFUh6tJ4SLk9",
  "key38": "2txoEu6GXPeJhiXtZb5gFL6dEUganCk5pFXPvgMUwuSwkVmi6VQVujboFuJwupauTWrvuEMwBHMjp2fGHi8QzJb"
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
