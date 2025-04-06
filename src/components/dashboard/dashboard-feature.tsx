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
    "vLqewURrLKMUQ9YgzPTi9avagH5uBXVz78N69DxVzgwvH4ofEgcdNio1mDpEBMTf7cpazLe9KEmMRt5B3HnhqRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEsZik1Vt3xSbKB7YJYtoca56Fvq4aZcSJS4kZ4dtNXnetadZHV8pohuhEuKUJxhDrqmCUJxVGMFbJPrbvFNNRW",
  "key1": "2rNEoMvgoSszRY1staemusXkpk2StaxLwA2HqUrNg491Y5FdBygRMY7Y4nLoVK6jLCj4Ph9QsE4ALNLmEEHUMVvg",
  "key2": "3iDm4djkWwVLUzvqhRHyLuoQbHLtW5Qtm2aaVD9HTiHg7BxCBcgHtD58D8AUySiEsH2KT1ij9yUsm98ixrBQMVBh",
  "key3": "58mdXV8aqmL2RQNqKAsaPox11eqR9pZdKjKrF247ED8iF1iN1krWYSGsaqsufcjQSoCfuc6j86tZxRERMHVM92nj",
  "key4": "5tBiT7jwWemaXqLCC2J4NzDso6a9BrRcv15d9mx8VT6hc7ssq6tURxyVrRyB3T1sWgRauBazJ71bZmqyqwug9PU2",
  "key5": "39bqkvQEaGCKhYYvEGSn362PcdFGZXuijeghNmxWSsNtpurcEHo6mGHR5GJcTBCstGeQFysPxbWdjfH4ryYxnwpX",
  "key6": "kTKavcrcBPmT4T5weH59ZT4JKDYDtb5w5ub5yjVXKKg5XePPme1QgCyq4Y4qpVgfufVnfEXusP56nVrw5TqspqL",
  "key7": "4au5fcXb3e8ahJR9VvBzi3fVbatGVEBq7YXaxxtdErF76vR2FwyuzN1WicJhd1X1uAb21hLHmpLsE8HWSCRkERhm",
  "key8": "3z6ystR213eSwefjXtuQxKc27pFu22iFgVmVWbX7GbghKU1iRSMLHrcqkT9ksNSpycu9EjDr9jZmRvbLrYuyzFwb",
  "key9": "2wDiKMYfvgLdgfQpPbg1Xf5LJGHZ5KQqjgyVKkkpesQxdToYf6vnBhMPZutPjvqEZ8VhLvxwxcsG6Huy7v1Eaqqm",
  "key10": "4USahasTFMcCmy4VfmnwwAs8KhAG213mzNY1vVnqGY69AYmHkPCVphRcmSoDpEwLq8sG3ZFuk7fjJY774Djc7xLf",
  "key11": "Tiy2rLgP4gKGi8Kxw96K4scY7iKQ5dpXBCf1nBnMkptyMmmhLyVpry2FWCqUHBt8RDCeyJPexo5oG49Xz8MQeVW",
  "key12": "5dgVhpT387hJkB9dF76GvPJ5sG5fcsVGuoST6JiqooQUL32LcfuTUuJM4TEuTFKEscAo458beXvTHP17gyqL9Sy2",
  "key13": "WjiNKT4WH7xoiPr1rGFQYPDgMf9mwRA72Nin7od5pcDxu4nW2o9EZfdRKNhTZTwbknM4uS6H4Asf7N6fVs8VJD6",
  "key14": "2PNDjFTt7qxTgf9GNxt6X56Eqrg4FxrMhACGTMn17QoHPMMeMifxk8DyvbyKj3pantW8CWoyxdDxehyFKNaGvmGs",
  "key15": "2hYq6ka7h97dHDg9aMPtGYyhhcAxaCaJJv6x49xZvyEDB252aAJjD1uQS8YjyiDwWhxazUs7Yv1E3DEuAez8vwGu",
  "key16": "2wMvEhD6fqrzyQsZd2GR8bRA2T1qfEnFkUWzh2GdbqpiMRCUZyxgEYFz4mMG1jJ31Epq7BxFFkzcr2P4C81o81D2",
  "key17": "3GnBYBWeoxpkxreJLgQcCqjBqnWwMEkY2c8F6x7YByyQopvGLHEXqskZzVKBcLECkiwZDSRipGnAwsy8ytc5PJTF",
  "key18": "474Tpamm6tBpmEDWZcfJykgbVMtAp1x9NEUn6K6WukcFiPgKUf35yemnNs6vjZ2n5D85ky6Kou8yf9t5u2pRvuVe",
  "key19": "3vQYcyxVEMscLhMrNRxtyYp4hXRjUtrRif1L7gsce4WpNPaiHN63bQqj1KBB8vCP3hrd6Nv1stBgEQ7xyhn8qtdH",
  "key20": "Expvag1nKskzmxY7d62jCjHBfonupaA3mv3ooSjNXoeeXkfGMW5jxbVGeB6f4eiziWw98DSsBewD9oGgDTjqvqy",
  "key21": "65D1UYdGbVUh6xLMF7T97wDKngZr7UrM83iYKNJatWL8zrdE7cc5qS44w9NLXE5zTW1xvJcP1YrjsmPXW2ni2miJ",
  "key22": "5VPU2qWb5X7ACRGVt4cKKgQQEEeyVVR2KPjyJsAHBvKuEd4squyq5cH1UEpBbBSDzGrBi1GhzhqUTFR2J6ZjkRbj",
  "key23": "SknZST79AyHHpYAD7eETZbnoFgYcaepm5bzxWUWLuyAfWvS6ykURLekDvqa2uavyo8MbGMDbmLN48FM513XyL5E",
  "key24": "2RJ5TiaRBQzc6sQhWZERfQgCSBnzwnnof4GkPi6oakrFrqEuugBmhrxjrYiB6vcGU7tvoLKZkiAq2edYADsK5UCA",
  "key25": "qqVb9zwRKrnM9V5f9wihy9PJLxycDW2xf613Avzx8bzAt9hHj2k3cUbjWydsKKZr56qTdneVeQVocdGgEKK9cAo",
  "key26": "4Xc9SSaWaq1iJfyyY7GcEvHnqFDo43a8qxMpcyVEXRcRsXWZEuBoCUEjmXV9tCofXr6SuG1F8eoU678wWQqRQbbt",
  "key27": "unJGuxcfyr53M4TqDJjdKzKMHip774a6svCaEBSdMMCnZsgnivfwPKdpFkSLhbeonYYaxPv1a7692v11REmeuNz",
  "key28": "27Lx4LowhYgs8XsbvcnVLCn17oErn5Js2cJ4XdyyqoSVY9StxBXhzBW5ivmqbNYWw2MGSeijfNvdtp6CqqDZ2ZZj",
  "key29": "sYEDUpYzeFFef3of56SuKXcGsbFN6vp7Mw2nDaXrRgJ6ozKgu2957shxx2EoqTtxAZxXjUuXGzG5L6qB3HgYbDC",
  "key30": "2BsRwNQLoNgiMU4RkKiJwyqWDqZGD2T5c5Y5X58au58GhgSyu59CV9gZA6FuqhDuBGWFtb72juPgSQkN2YqACDeQ",
  "key31": "3ocY8S92gUP5WgquZ3A57YAK5DTNDuL7rKK3RM1GQUg9MYAv4qn4v5qzZwhDKG2m3eNvziWkTm8VQbeBRwotXTME"
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
