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
    "5hS1TCxAVEyyeZrAuAG1bL5paHNwUNz4rEqxeaqcwoa7URrvgwmA1kpdpoPSHyyZRpCr2KTy9Bfexm4oChGz3ABy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UjerDb7PBSmFX8HHBpwRoxZFPEwZ4LzYSuvnRiMcMXvaG2GUHuLiosjHDANKi9JXP9CnW9CWEMajnPdvnu6CGVx",
  "key1": "4VJmNQFHBWPZ8o6LoeaWtYsEckEBz9hdDNKb9BT414n6yA8aYQzqUx7myQE3FRtnt395Z9WBQ1yaFzs9UfFzaZk6",
  "key2": "3Az8ESfbGmszZVQuv4qRmKPtJApKkkon71WwUWWk8RHiRmguFZxw3fkjzuCuyVZCbTo5HhyReuYrof2etoRfN5zW",
  "key3": "tf5mriMhwCrZZ9egUsxRErxUcgmMEUZn6w2UqTRq3kzmGaMkbFiVe1UBRBREWpKEX4PzjhTgCePyYj9eVZH9LX4",
  "key4": "4MHSf34TUeP8EVwuAQ1hAsDuFpdNJAKKv2Y9ZzcAMU4R7gTrWDoUPASr1QuSdbLDF5m6djQkGVQB9D1KnyzBvZJR",
  "key5": "3abYzGJmczuKa9jKhDsejBFrKhUQMXHNP1ncvTDTaKpUsMV6j5Hc49r6e3as1CcYyvPe3p8gG7kdnoCxk9dbxKt",
  "key6": "2VWMM9A91KEVqdz5SAfLpZpFACfLrKiKBqZL3ojeFz9ynqTBEbM4NE6db4sXLqJzzwXHgpKY1xBQCtykkAVrHpnu",
  "key7": "5eHCLjWxvLcNdncahGVfQpz8Ey4nZySK34ET7NwpXzZwSAAXPQMrWvo2HmJhLyxXjc359LmaY8p2DMPr3xpbL4Lf",
  "key8": "2Fi7MJAqeetxUU8nJKSerMhFLwsUeVhz8H44HPcrfR8JHdR3UA1PpcidUxRWhTT9qfPVbieRPGG1yUWLu9NX4ysT",
  "key9": "5Gmc4JEmEP4mHBpCCCZhLEB4r33ufbfLGU1XSv8EiaKTeJGh2WWHKGiuFeTu8um9jod6uLbxw4HiZ5bgzaKD8U5M",
  "key10": "1LDgyTLfqrsuBBEgWbfftBQooTdhiuyBTmbJnn1sUjrSX6k6MWk6jcjH3ot3Pmn93sxFstXiLZdJMzzRYjemKMC",
  "key11": "2kpEeQQJ4766FZ17Wx9YYPyQmGV6uEEcqu1jcecuvhrbetap8tWcPqHgDGSyq5Wwi9PpTVn4JyV72Chr2eTTY2oS",
  "key12": "5CsvetbLKuo7SBLcRC3PyaRNt9CRuL556btjxpMMu8YymP1LQvz9ahRfY9oMAtkG1j7GZY7tMKgBUykVrzGBDuDU",
  "key13": "2JCx5tftNdNMxS1KeD5J5ZjxTCJPZTUdpALTVmSRGuMhE6wNFs9y4h5Qms9J2PJyWP3cmBqmpSaMyxcRQn3Booek",
  "key14": "4D1W7vxkjevjbSpxmUb2D2EfowRjJNz8hE5mNX8q1isLuqCSLQsDEcLxTHxC9H6F6ktuvRqFyd75M3siWtZPinT6",
  "key15": "2SkQDRmVqtYYBKkzrVvP3L2mj2S9LNxsnjWESd78yLxLhz789gpMEX3ifrZYxqPNZ8SUvgoDYgeSo9DbEAGoTEqt",
  "key16": "5hrTN5EoDJRXTg1cRZNwwpREAPfH2PqhQzGpNPZgRsZX3T5YAZvA3Hi318ngLxCjHmjSbLfRok9eeqV79TJLcw6G",
  "key17": "4ABLRtafFEqWKraLXeXjExdKde2jHHM1ocwykfurZD5MGB9PUptyMNMxmEfFJLSH7fRAPyUCpsXhPmW5zpEEqW4D",
  "key18": "3wbC7h9WE1B9Q94mPgA5ysx2uUArsLxELCqweZcbgeqLWPB1ZwBwF3PLKcGRGDCdvqHA4dDS3aVEoLQpe1oVaXE3",
  "key19": "3iq36nHVioJ5cW7BMqSZBTVqePXKCryQeg815xT8S8gvgQ5dT8zziLHFKCBupiQkVtXrDy59g9SDDfgUTJmpagJv",
  "key20": "dWWDJ7b144j1UfMTesgWykdPVSmaAquRRGPFmSR6FVn7Q7VBwfHR8dKiKeuDMF9WBzkQ2yi9uoDkqvmPTLXKSzE",
  "key21": "21aT81N2Z79LCtJBmqx4gugd4SDirRKUfk6pER12tRPqY2ffXNj6jbCVjh17jbH1Euhj1ZwErEtyogRXLKDrLqHM",
  "key22": "Hxa9GQbNPShsWghnAqhfBq3sV94BQZ2mm9F4ro21KzgopvqkgwLTdbM8ftf95YLf5UxQQGV6am5738D1ubTrjsf",
  "key23": "2aEQrcCeLjWt962znvmWBb3cbAQYvDJSeeeR6VXYTucYgXpVJKaCb3aUZ9iVKUdKFMfWKqh7vfC9H9K2mYfqAu5E",
  "key24": "4WzKw1ggPrczBFHLcVxbB6JpV9gybRP7j3qCNpQ2TgrMEx9tP9KuPUKjBuLXqkr6hdf8aGuTkY4DRCeBj4tFUpFr",
  "key25": "5tzH6kPnsrVgXUqRacknJaaZSox5CB58zVhBW3j7ejyHiKWRVmf1n6byPCwwxxDtxeToKyKku53FqFgdgXmh31ED",
  "key26": "3VRW8R1skst6Xu84WFBY628j53XktZdcYtgRVGqPxEJE7vyRWUjpW5SpafovSj2btx8ACuKdcSS539zkfXmsCQwZ",
  "key27": "5kPMzqo61VeHTetMg5XT9CSj25QZ31KYyfRwg1TpVdsHn9umC47jcimo4ioQHMH3heRjEHY6uDSpfXvo35Y1KZxc",
  "key28": "3K5uXXfQbi7GmmHrNCqsaGHKxKVeY7CL9Cn3c9rEwPqGsSoqfvoSNSzcoHLykkXgA9WsYxxxgwqjDVQ6BWTkAZWy"
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
