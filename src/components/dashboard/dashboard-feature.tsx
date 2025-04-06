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
    "pstudnH4v6VrnzXSd1jgaGm5ViQfYwCjGGUSJEVb4z7AHhh1H1CbgXrdaJhkcwvsUrG99TtAnSYiVBT651WpVSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UBXqFDCJXfKXSfM3C62cAeYdKMqywqbk6C1QZb9kKsamENv3ws56zBZUy7npdLdhe27F3WXLciAKC8zwGVscQFi",
  "key1": "3p8KfAs9GCKkiGwPipbRCdRyoiZPAUd8DPZTLSf884qED7kkgEdqWHYehNjKiDgQYKTmu4jAUmxsaTDwyqao43vQ",
  "key2": "uqaUYmwAFNibeUodqSidoAZyqdYX45HwUNQbzMhVwTKyCn8rTsxncQCdc6o2fy28i1avXqYi6Lm5AubX6huRxmZ",
  "key3": "39WTjnNk43ev9X5m2ws25QRcr3qpz5EZjMdWJQkiZxRyRrcZGFxFn7v76MgTEVEdpt2ztoux7vrvA3yKgsCP7VqW",
  "key4": "3fsuHcogNbM2SwzKKgjosF11qzREwHGDsneLszXRBbdkiAHxhRKQzC7doWb527DQg9vkiCkMehDiz7i2DqdyhxW6",
  "key5": "3FfU5oLPeAyV4oeaRT2ippjcC7jvdg1inH2twQQET83SH5KbBqjGNSmG4DaDNYwkjA8rKEWpkzp84wTHFYD18SDu",
  "key6": "4DjYyRCggEqcWzFa9KFW42kMsFMhuHX9cA18JWUPTVdrBkrbAXmzZHRDhpCqZfv63EWTUWPGVyiE6tUXx3yivbhE",
  "key7": "4MVFHnvM1NND8513fftDeEfGFpcXSL5qrqJvMPNRW3Eoptrk3Z4dUDQUPunDExM1tg6ZQrh6wsmZj9U32uDdFmTX",
  "key8": "52oksWg7rrC1qHKmdwkP2ierJCiDyuizpQesW4PPAmMhZovn9rix3yNg2gkULxX68xgJjQSXNn8V14Woxt37fewj",
  "key9": "5wXvLvGJzc8wJ8qDUXpK9inp9h77dvjLssPfb2YvAmvjBvZpfRKmBWrMm5EpKqmScNq8YYbAU1cBBgLB6hawe5Ei",
  "key10": "2r7CRKkgvjkbSAN5TfvdtCxFfFicJtLhutqxcT7VsT1UuP7VZEYD3U6MNZvduYgLS5n9o6NpYKfC1coPjPPUSoB4",
  "key11": "2vcJ9LuhjYMKBSkDXE25tvNmhb3j85tukrUVux71q3hVGMRqV57XP5oyKqnTmyPJfnvMjMt8iLF1PptmzJmgPpfu",
  "key12": "2jsNvDXVNioi3deHT5zecxEtwSCUGYcKP4ztjmmqavszX9cByLJCUxHt5wQzRsu2uDRidzrzWW1wGv65FV1kT9Ye",
  "key13": "sFeaZcRGBEMezj5Q5brb5yhPiEzxZBoY7sLPoi6cmEpURRiLcTudZ1BvggFMkBUytoxioq7pf6izWJSBgmPUjrN",
  "key14": "4XJkxhH3nDUnYaJapuacHzm8rJpLaeRKp42FtUqcGkKZ5SzK827DkopJ6bbtJ8XuuHMCuVr8Dq5W1oRaawHep8Y3",
  "key15": "2ThXjLNSuCByEW2HeaAYrf4V3yiwECVuzfKPk8uhCAocyBmAKGgNZaCmwsPmhc5jvrLKKFSn6hqbmCwBsdLYztaQ",
  "key16": "3jSpCGjWUfCBi1ejjqwKRG35MHDaoySJuime6JjsEqe4xqqHkwrR7cA2Zr8m9iNrGK8w2BBEW9MU3EUjPwXM5RKu",
  "key17": "4M9vHsQPtTh5RPPjAvG78my3SJVAwgBVNwjQY7VLbhAfCLCgJ14ZuzKxqWdZT4SVyvyYBRR3pydwTtXDWfUJCEXb",
  "key18": "CpkF8EqcSzncpzPLiEu8YvFaTRzCESNXZRGWkpgSZ7HuFGY9KADXK9hdK2Q3P3yYVnQU7gSYFoU44HANRadKbDJ",
  "key19": "62fR1KK6HA5R93GPePdQSGke3qnTH8WZhmyUXGSeAQQkaRf6J4n95JkSGifsWSmqQyqgmroTbn5SRQzsuYE4oGLf",
  "key20": "5ujtfyZynCjayt3u3XwFtnWJMYxcnzmHxArhWeKTvzwAxjmwzZ3nMyVqHG7ce4Cwkmwg6Jb7KqJQ8ZrDEEN5usbg",
  "key21": "2j7zcPZadscxWpZm98ngZNHbC8kPY6nD5he5dE7fUAazDtXpwrojESTbQXPXw197x6qHEYTwNLgJRCLwaHiP5H2K",
  "key22": "gtjKN62rciYyQgQ3pmtRo3Tdkxpiuji5GVZTZAcUS54xDz3EokLZMQHxoTdCz4wfiuF8ASg5DTMuTm1XpV7rMH8",
  "key23": "3Jxibj9Kmos8T7qRMaouqvcKhkE8X73Zm4XeR76aar38r5Qsr4fA8jDfAsjs3uEiLcoKaWwf2gNt472G9Giy8Whs",
  "key24": "5EtnSrhDspyfCo7zsMeYJjxQyx3fqjU4T99zX38xzQTriX76UHdZ1Qk1ciEkSuToxVtP9oRTS5eXLuLJwSBBPPzJ",
  "key25": "5MkYugVn8FBoePAYF5WoQe3neeuL4xADL1Prs615SBCE2s92LcANqeERvwA1uezfm987gyx96MaEDKqrJqPKFP4W"
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
