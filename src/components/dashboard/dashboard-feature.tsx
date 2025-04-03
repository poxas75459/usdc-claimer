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
    "2qBRrUGKpaY9pXQ67oSKj678Dysk7HoTDJLfJCKZVZSnCTC71vCuXWP7G65LTwMvLy7XNjPCSaLPS1feHyi1TMhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AoQfaAm3tVGg8iCX8QJ7XyzCQnrUbWdTgc8hGFS9nY2rAeM1GSY5L2DKJ8Sz2FUawt2uMvbrgpxVuFUYJNQn52P",
  "key1": "3m3oNqwS5YEEC8axrjKhCePEc16gYcFW77Ef3NA6vZQzEnwF5U9D7DayPRLQYvPxSo4DT7XeX89jspVMJnkVC2eL",
  "key2": "TxNoHyFrwdQvAb95soWooWWj5wh3xJF4kT8jQa4vuaYsoSZDcsX1VHLkKAHxPj78QnPdAA9BDe2GUptdQWmwaWf",
  "key3": "5EwLKHyQniHwkfjdxJoNfSXeh3vUJbM4D51GmTxwbRs8qNsto4VMtgHD4YJRhysBFxfidEXACGKiEVz91ijFt57C",
  "key4": "37TrDnmJoTjxv9AH2xtWyVxseJ6kqX5HbqgSv2mvHyJrLWkDBNnV5r4hWaVoMz61LJ1QXrjCWNCbZDMFhaNWugcu",
  "key5": "4wtjtSVyzfQ2XVunApoiMQvnmsu7gzgXkqZrbv4sRoFei9JBbQkmHiXm293wko3ZMuPhruhVqXacphmTjci7HqMb",
  "key6": "hYkBvFHRuDeDJFDpnxSEtNL6WKjGTyUWs8mxqK7Pakgmjj23xEyqGCc2akGy9zgNqSJdNg6n3WwPq9EhHF19eR4",
  "key7": "2CFaoPpZRKpnwSY3hphbmQHdSJzQFYu5u3mL7DF3K8gWAYg2PNbPUBYmiFZ5k9yaPZbvEn3rfRXXihJFPXhybTCn",
  "key8": "3XvXxdM4ee4FyejumH67XTnib7cqcyMDqX7N1AfaH2GbNiU4FCsPKpjeykXq68uoQY45gWxsBezV9kebSnLij78F",
  "key9": "2TXxDRndADFFFfBxgkuuFQnGp7yCsn7zv3d4XyUgzYFKLhJ2s3gg6DLU46EmLDzUXTxhenKAZ9boRVEjAreEze3i",
  "key10": "5JLUTiFnnoZDPUWUSXwCRtsTCbVR5siR8XbnAUnJRiWzv2PXVsich458jtJiCEHMSeB4irmKPQdx6U38QNhdgwZy",
  "key11": "443jo7Et9renPrCC7SzvXCHYwPrBc6oCdsf5tNnPjLxCkGiN3tqf5WKK73LSQTSRpfxDCitvd3mzHHFzahxJ3bge",
  "key12": "Y1Z81f7DNB9mTZxff8mRJer3TByQKdpAJZm57imw7MnL4c7j8fqD2vgArjzhnCveyAVTPYfefm3x4a9zcSthmMQ",
  "key13": "6uuAc1PRgmdeCrzDiMBbTSHgPUvH8oqKPhEtE6unwpCVNBXxXASP51VBrYNxtGnACC2W18aQYfmFcMz3g9sJDax",
  "key14": "nhoD6wfV5mLQRzaNEygMALWcmfLsmnx6YVBPa3LjtviAX5pj6gbXuee81Z6AdTtWe8Ara85CxCss8Ug56yVhbC1",
  "key15": "3CU9qZek2Ki9ANioQXNb9cWV2w6gW6Cua67qdHGUWGa8hE32CJvos55shasWGjhn5Z64ULSLjLK1f54A22P9UD8J",
  "key16": "WJpEienSRb1tQp2oaqaCVLzwsf2jU6RDcjjNzc8NesXcNXD9Qw2Pki9GcU2kCQHQCjuHP16BPYCDoXwEkjyQFKW",
  "key17": "3YB6QZdcxn5m5qqRted45KNmFcoaH7GUp35tss5D3C1G84jvPYv37QC88FdRvQJAmYkcQJfG4ibziFNnQ3v4rFFt",
  "key18": "3JyL1KqvPpiUV4Hk8HHMNUwuE8Nvrv9aSrLLkgy5KppkdrG6Xo9TTSEZY2QnMohVTStEJtjG3YcJqFavo8B8NbQb",
  "key19": "2tLXt7BDPeFukTRCaR4RSqrg98EP1LhRuuFvep5mtsd5y68sQFSUgDbqstv5wUkDbSAd9NKB3quyM4TPZhhAHrkv",
  "key20": "4VyiRhPBM5MVhhvhyDzPKA2j9SWkf3ixYwHWN2ZRPqHb6ozFPxjKqyNkDhukjfo98q4fcNeZEcATDDedGFxSitKt",
  "key21": "JhTFumpNCZP3T2gdGL8y5WWdhR2uTnEZMC9xmkK1Ef22ZTgdPRtdgAMy6V6LwQbJDtWRhcoJW2WJ9YSRyM7d48n",
  "key22": "nBJeNAK9Qx31AwXMsKePjT4wSP12jEJmJwur2bWQiZjcfXbey8ArS9F9Nnfwq7EgsitrjfZFtrXXZJh6pcXkDoi",
  "key23": "CR6jDe3aCwmF4uYEKrNWh7rvoAJMoZsjVugfuvextb7Ktriru5pg7P3mccFU14KypMxhZhjTr5zQE5x6KgQs7ZS",
  "key24": "51v6PBGUk9Dft4e3gxNLDw2VDP7jhwHf682dBMsvLJyo3Wc6KrQzznx6fJ6t8umtJd8AzqzKn7KrAVZQd2rXrNai",
  "key25": "3PcN6C6xyRZA5b3S8AsmaPdKcRpY91o9BEmM1aobVXkc9PiuZnu6iY2zpccornsVvyNGkXt2Mo8WKm69ie3bwXEs",
  "key26": "2krFNEhAkVaYF2JS873qQNSmUsn23cemwBaA8jhwW7Yc7YgDm3v4VudrvoW6TSSZCnFBF8VEDXGqUNa6MDjRhS4K",
  "key27": "56qBjcNiPzYfBPR2h1BLiS6KQ7q5LHwpqrVopwC4rWWafp1yVaEwAJjYHZTPCd4YLjrCdz7vUCGz2vT2kaiJ9qxp",
  "key28": "3GhcjHNaHkYyucuioZMwqhoyyip1LNNCnmAQRNcJHiE5ehwu3Pk6cu97tgtKh3CVVRpnhtvhpBo6W7SBU4JAB7s6"
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
