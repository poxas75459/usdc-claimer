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
    "5MoebPJTu6PnkTTn46YG8M5JHA54y2Tro6RoDH1CVZgnDphScD7GTvu8edjBCxVnW3K81VjTFRU6HJtrZ1rD2Att"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhBJiHpubPFKXZjihFUjfp21uvfiDZjWbWkS8CiwZNTofE83EQU7SjFv7bVF4vsmuEkDSktDt79k4CiaGu979tA",
  "key1": "4LsDVmMH4r5Lt8CZgacCXfCLJxEe8Uxx7RWBpo4zRK16DbP8HYGys8Sts3FgZ3L1TDAceQD1haPu1n8S4B8khRTd",
  "key2": "4zouKw3n92ZFZoWou9wgGfsveG2k4tRshYHHYXr2aAWnMtMG4VM8xhkLuJXXNXuCDqhMsNqTjAL54dDyKmrCAybh",
  "key3": "VFGT8G84YD7dNEqCHApnoSn3UCSqakSBEP33HGsvpaFTJpHZAWzwvSEqPLyU1LvuW9MtkjEjaWXcbyTa1tVPshJ",
  "key4": "2hEDE9H9JUkKok1pR4goWfRy3impxuxiXWuX9bYfc1X1HuyZpzFpqFrQFDwKEzH8iV1hi9EkuxVC8LgPYr1q6QDS",
  "key5": "61KmqAsVeq1ZUPLStvaLaWzNwLn8C9aqiM2w84HsdR6syHiKDkRjCy4i4ZNFvLHJ3imXsY2ZMhR2KhG473NBnbfL",
  "key6": "3wKKN6Q42MfkyjowEf9LFSCDZ1ocG1rWDdmxdZ55nW4Nh8fZoHwL9nhpq7ChzfaSRMKrwRsHicxwgejSFzSRE136",
  "key7": "2ebn2JFmtxKymab6LDk8rodPg2rzY6Ze58o1B5RuHZZcTsK7f9muZTSENQucRCdZxX58Bn49B869TE3pjFBXrheS",
  "key8": "2B3dtiZLJZHJapswmmxdbCjTcDM95HFWSMXCEJwkBAF2LRDPwvWzg1TeFLRuPd9KVWhYcVYHvMrYUGgzmhVt2ijW",
  "key9": "3snoyidqRSGqbq3c5RJnf1KdJTsUSKGdUEdwkDR3efhU7WN77tgh9ck4XzbvZwSJTezRw1X2kRVCAPcDcj4xt5f6",
  "key10": "2AtcPYFwCoSiJchef41CuY9BG465xGab7co9h4TpEWR8gieUJfuvABKkCAZ3rJp8esMXWSTETJnp3gxfyrcdFSux",
  "key11": "3eqdUBH9TdgHo1Xjk3PXCX7LpzaZZVHDiHwphAait3uFxkLzLdTz7R4aexGihxJXi5gYqkpuo6bDwMXyBr97bQHz",
  "key12": "ZFY3n5L3ZR7mybsazW7qNQRvHAoQZFvMFS8Q6FzmefztDck2pqYUxp9icGQYEzEkomMttcQbnDThGb7KoiFW3Bh",
  "key13": "5ShLtPP2dYKk1PHNVPAb2NvD8GsvZkYDUazfcsS1jFaUog2Zc9jDwsNqbEvDFnFVhUef5sg4iMbfNKzErCPoAzgV",
  "key14": "59k4oTmPpn5B1YRjxKznJNwqzfZnXtMdcbhfvsoMSownQ9hQ69BRFTZadGXV2kSD6LgKB17QDs4NmoP4xWbW7tmF",
  "key15": "57VTCPRXdS6CVkoZvor3Cz3meGneAwko6o38uP763ZgaavbwEzwcnqUE7M7gctSdp2c1YME1PMP2RLGLfFrEkz1k",
  "key16": "bCJoxAmTHt8hfNWpu5JD9UuPdVDk7g9vMinJdB4BZ2c9kNnz8U2qJhmJUDJcDFa8TvLptV2qUhrZt26uBjwCUTA",
  "key17": "HZNFpyRGoLvdfLurb9WHL8maCCKodh6nUA3yRKVXsXJd8NL7AxwXKxZiRCRbaNStGGGiHjwfR7Y2DB6H3Umv7ei",
  "key18": "5BnwiQU57Q8TWAF3zG8sq71c3R3J4ae5WdfoRgoWhf7fy8Juq8ES3PA115qPiU7VJWfTVwT2FohtK7nxnGzWHCWx",
  "key19": "43Kg7to7LZ3PPncYZpoGsDjNnkwmMJMne5rkFcUCYBqLDKP6d9XJsK5DWrJxwjdYM46ko8dZ7XoxsTCGMQbZBFoy",
  "key20": "4DyYNBiFxz8asGp8b8QjqMj3vpvT8yLJczws7Qcp7XW4XeQbCBByK5XZFtrCExwrejSJdtb7EEW1rXuEUCQaSxJD",
  "key21": "gZi4Pi155CvLiuHuebuvtJpWvxpvD1xfh4nsgoD7TjedxsXuFCx5gDofZRPjYL7jm8pvhZrYDaA5YVBATQ1N7Zw",
  "key22": "EtPG6dFjZ2PEjT97zS99qZceoUnrcPztBsa8xeXbRAZ24tRH5LpVd3eYTqAbvwkRhYRvjoUZh5ETRkiukCv8mjX",
  "key23": "42Ufyc1vn8XaPxCPdguFpN592KVTRJvBLLo9hY81dbar6dA3tSSPyjJYvM5co3qBzHXP3gPRBejL9ox747YjFhNr",
  "key24": "2sfDzHREnreCdZNAvoPVFFo53XFoK3RX6AwWaygpFMmrdWQCks5ioPT8NaPYfA5b9GzoNbQzTJv3fGhdvLZ4diuo",
  "key25": "5qjZFMTKLKLvGuxyS4EvfVwUmymKPctxPD6wYpHE89xZPXZeb7WknqZYDQHtcqnEyyoUX8LEvDvrhzmnhq56y7m3",
  "key26": "55abGxbHEH29ETZbNko9jMSsnEdioSEBoVoJk9p1nw5Hmc6gxU131GufoapEgtxHZcLoPxbKVJE5uj2g6f2mJeKC",
  "key27": "4Zc5NeJPw7gQrRZefhcA6YWv1vmrksN4HviEzP8E1B88kEeKgMj7zeCaALzXcfZVXzyzv8eSQk4d5xTKPdhQCMUW",
  "key28": "53XnoPbs6j39nUeRoR92WuVeAFM3az56AsY3XSa4iVE4F9PhKEetV9RRp4Xx6vnfXGWMj7aspVHC1Ny8JDxHiod1",
  "key29": "4wna5qmiAHtjfNjAoCwAVYtV8rwEhP9pPLuSh6GQc2v5tu5KhoBPxZ7GffAtKXAPr5PhB4478YnwSJYxKXXqTqb6",
  "key30": "5vLzs36DEUL9J7kuhZ9hKsy6JkhBhE9fUpjpRw8pt9JpVG3YrCgfNNGWcGrAEm5vFNE6hBnqAE3cvyjVgWR3SwXh",
  "key31": "326a45rS5yXwkDAuG4bsMEU7how4Qpf6d2VcetS6UuBKe62WSyETcTRp5Ygv159Y1QTUTXLn9Rh9aYfxMaqV4Pos",
  "key32": "5JWR9gUXdWLicu8iopy54WhuvEceD66A76UywBT4oKjtDrqmjooi23FWkPCG83fPGtYJDcnbhBYvR7knpQi4ETnF"
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
