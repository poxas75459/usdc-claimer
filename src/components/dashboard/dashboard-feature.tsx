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
    "5b8Jgw5Da2zmYGSoFi86dyzygRM36Gth3nyyeVVTgyQEmXY1VHNsxuMVzMj338A58Ki8C3ge6zzmdW1CV57uvLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GG56k3CWSNPqqewH5WoBJUQXMH8uTtGBc4vQYB3Q6uAiWKmXrn27PDyhiWJmMvCroj8nqZQ3fhMgJ1sKfzpz6R",
  "key1": "4wcnhabsAVHRXWPdX6LeYQA5k1C2quwykoMKPfFm6qDmoGwfeY3cjWLGioRkvavN2GwDRqkB8G3mTDvQF2ovFuZU",
  "key2": "6i1ZHMDZibhadEFHLwqtaN3rMZAorYq7NiGaVSixQYZ3jWCwzF32xXU7cyWdGWTfsUMFNnVUJg6Qxff7QTW7WbT",
  "key3": "2cb7LpzLDqUsdhyEGyNhAWZQoPQ9Wk41UioePcM1LZZRjWA7RmU9muVyEnzjGgLsykj9dHByusnyJDtVP3MJs7uC",
  "key4": "3hcoqRaNyXjAHneG5vtUHMFS9GpmkRom33cKGgLofpJUga9ymCRUASecqEoRVojftFzyRFnsMsUAoMfvsnGJdaTD",
  "key5": "3jeGtBhLiunekYEEBSEATtKKsNaz3DobQV5H14nAfD1aJP3LAVo7Antn2wDSp1hpYhK5WwqABnPiDR2PNk1RpWAq",
  "key6": "4Dxxgib7otSSqJekZ4quin7mwcbKZbTi5wmFqCArJ14o9iSkLshHA7yvFMLjzMBQPx1xhyY9Gr9u7hiMMjc37Cne",
  "key7": "6zrrMiS4j4QQNNU5sjAc86FbW3XPKhPax2bTpQuj5GGdKScJLppkDASzzGx3XvbNC2HEZ1si5RYpGSv7XR39g2F",
  "key8": "2PeQy3fJ8CwX5FarGFQEEwjTeNLYC3z3VhE25DyvMELjQGtBsHxb4ppYcW5ZxiCW2LXPvxemS46bhnJRG8SVAygQ",
  "key9": "4VXxUJ7jdKyTVTWNBZPUvVjdYoWktFvbUkWTyvn2iQoDG8MSdwKB4UxTDtiQsWMpUGwbJNGj31fULK6Cx2QUc1Ac",
  "key10": "3aZowHBxDu3JrDNpqE7JmMkuoADSkSizHYswvQbnQi4dWAFJ3b2c6v8BApt9Y9bx1ZLM9uWJW5g2XiDyru3xHKg6",
  "key11": "4M87rvDdkyx2hyBFLuLJrcVKT4Qrk848ut1tRAjeLXvfwaopTETNhzFJnjJb7zfazDkWU1HgNyq6qbPipPmJJagw",
  "key12": "3mUNDeBRMFLYd1gU6xj2ubWZfK6vF79RSQJKr4nMivAskA4t49eW5YtLAJCBprdG57WDuWdM82gMZjhZZw5jYTbN",
  "key13": "5UzkPscKiRmAq3CMYstLjgvcdEKToZP9zcvFUdThMWej798jnpwT5Sr1AZt5VXobf4731ZLz7uphEurrozDzTePr",
  "key14": "5uiChvsSCNBZkiwNGGb13nYej9YcSFScNhdVVL9RDpPTwhGaa5JbsQTxLRRkekGGjwRahv1fcy5J56m6FGBSSqSd",
  "key15": "YTEwBXuguDcPzRhzdqatQga8e3RqJKJTqEL9AmeGPceCPB6Tf3t8q8V7T7ciNjvse6A5uXVsX1Y5tZ9viftoULZ",
  "key16": "3BtXGbqHL25u6ZbyEM4RXRiQ1H5yojujePhkJEWPJmj2ZuFZenuxU9efiXGawoA5he7nRucD5d2ViQaaqCJSaGCm",
  "key17": "eHTehCgHBBDmazKCjzTQpVu4bhDcBnsCgffbwuWRqjy821ZB4ieTHZaQHQdE2GSmVBsEpe1xfueh3DMjVwFWtkT",
  "key18": "Rp9aHshafX2qwYJn3T2ECeQYKvwsaWkjaQyYBQt9VkYFkosfNwWd4x6zAxm2uiLZE58DmhaRz6uarZ7s4VgqUbo",
  "key19": "385WQvwha4gY9yQsePZbwrirRhCj4QvJRRRVjQrgXanE1TSWJVnET2WNtjUppxpmaymRCNwLZLqxhvprFGUktKGo",
  "key20": "2Y7nu5BtpfQmQQH1MtS1m8Be6wW9jany2893Ta945Ps5KosTJJGMDLbjmySv28incUTyshJLckWaXUBJS4gXJ9A4",
  "key21": "M9gZjts8vQKPQmaU3xqX9DtDsFkS4RHAQxf6qt1gTsPhVA5PuL5X8pS8PQPWy9G3a6Se2Rgqt8rhgMJ7BnX6Bvt",
  "key22": "5C9gRjWyY3ek7KJ2aC2bWwsdDVzq3y6m6vjB6yzdUsda7Rcq3cNbgLNgAF66ZoK3aLuhZsnfiMZS2A7PtVamkwym",
  "key23": "5At9PTzMy1xYKxMMdKLEJXLYSZphFvsJsY8BhrmpwQpYgaKND5JocAV2TLLFDxUx3MtK7pbe5DvJm8Cph2qPqMU6",
  "key24": "45ZcgYqNAqLzLuPSGJqb1brAgXVTVE3abca2i2tcoovzAPzvZY7jEqp2TmEnb5jY7WjEvgyebr5PqFajsFMKvJEM",
  "key25": "22LKV5E6omtMfcS1FVCSUiPJ9z3aUcBtd3hEztsT9Jch6vfAxDbzaXv7YBzQdfAB5J91z53uoea38sDbmXTVtZPs",
  "key26": "673CJ19qJa4cQxDiB6aeT2Ti3HA2ohaySTQFk1XXPBB7y3vT9W6URPs4dMhAVgAADjnic6hnJ5pnKTixgCcc3ozd",
  "key27": "JQwiMYUa6vzcKgm4LSn2LjfMdpLmoPmRWHvsXaVffzZRcusxh8LbrAH2xVyUB1XziwFuQWR7dpPbK3ywuG88U8o",
  "key28": "49jicqJQT3fdHEzjzb5oKJUJFT32zpdLvNeuLfRwMbvhNzNzo37BpiK9haRPt9ww1SGuVurPDxuuGzQf1jM1jaRE",
  "key29": "4TBjapmg2TE1WgPgF4WhnWBf7CDQaCMquaWPtMUfJmJq3bAFe2YEGYkocMhjHgPuM88t19xGdLKHjHqozHZk1ezp",
  "key30": "3egscJnGxULe98iLoHJoe3ga9emHyNFHbmmxeQmRSJ9bQiijsBvdp4KBxRZ5pmgoRMbKaq1GRatFtVfwcWLdPWTs"
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
