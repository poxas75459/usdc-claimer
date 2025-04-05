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
    "3aZ1LdvqHgyskQwhtJshyqcTUbhn5p3pBnRY95Qz8vWz1TzNvxQPGEDxmrZyiCiFNhWTvkf9bhD2fYzwX6HGMPyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dw1RVxEY6wPqLnnSArGsqsPjuy2UKztb7JFGF49v3364UCBQUhFAi3NzY9PpJAkd7R4WZwyw2EcDHLxaywLkpUN",
  "key1": "5AvZ8KStx6quJBNYphtPEppD3jfMSqwMzFBUdb6H26WuZd49fDPrkr4HTdPMC2gknR8xLuqAAtn6nAe4F7g7NdSb",
  "key2": "44agJLpxDqq2rokUUKPmHz2rKA1dtRb1g4KZSpoMjNqaAawiVq9v41k4nRCJ2jBnuEDp5JCJhyMMq5VpJgMM8yq",
  "key3": "38PtZGQGi6VSrEvGjwMpCB1iVBsC1psKnhBdvTMWDiaw7Vmh454acPkBheN8ALPSVPNKnXLc9VbAKSQ4KPthACqm",
  "key4": "5yV7vF8G5BwSfUohXj5i7PbeehedvPYHszXQRZ1uzmqTntXEsA8jzwuUGhWkwXGwHBbRQZsLGdyzYbZ9AEkxFGX7",
  "key5": "5TJjkyXjJAA8GbzhdsvCvaHmQxx82Gsi8FQeyDypN5dRC5vkQ6kZg1fi6NJTqZ4qajZCwC5dXLF7t6V5cRn3qGsg",
  "key6": "2AughZQ3qzj5Wf3ngMAtHprPaHcTipEUBmcDaJ24TarHvRc7nzPGVoW38RctBemCr1wM3iFELr3eXfqP1GQ1N3Qh",
  "key7": "2asWJSP6UxgBfYea3AQXAQsgNmFMQ6BkDFMZXaXVs4A6pQnNE1Ca3LRu8tjZkNRXHpVVpgeCm9Z17wK4eGTECe9c",
  "key8": "57HYtm15op6nmSxSeHHzavJx8ocxVBpoFEPXNs1BE19xoQv7Sa4fn4F33rMoh5oCo2w9pnUbkhVZqgZEjiCPeBkF",
  "key9": "3aZMCCXeaMiuaBsa1tmPVZNk8dT4act49CN8rudWvaSfKicJLvt6gES7VcdqEHz29Ckdre9xYTh47L385wGf8K8H",
  "key10": "4Nk6n2Xb9hgjJKqnhWgjyVvh1Hy99PPkWuBWb3tJ6FzVawbMpznJgngeuJGaQanbSf39mffB2jqkt3itCyMjYMw6",
  "key11": "2oKfcDVEfhfkoYa9zhw74ZCWvkczFupCAeMJd17pPgoK5XFegpi6795XeCGBcy4mg5gUTWTjpcCDmc7mwpyxEaa1",
  "key12": "4ZRrqMSxBnb25Fr6CWrSQLd2fWLCVeSwnTStRGQtfZey4m3KN3uR6ZfJp5s1b71kCGHTWi94yhzsQtiKe46uLSfN",
  "key13": "3VahV4mmvFMNt6dUSab4ST3unSzPh5wLZCZuDPkGf8isTa6FAUXhSy41cVRrHNXJvTvqdz7CaE3nATYVg2MhMBKB",
  "key14": "5N8wvJgYybXGNm8KF4nXp8PENixGa1waFJBFkivE7RTsvq5yK8MV13Re7cWxNa3fGYQK66WM2kXMwejeXRadm76t",
  "key15": "2vqiFE9UPLDmF7LPtCLSoD7hgd2K7ynkrLyzczn6xEMCzevoiV1DvP13mAsLbuXiFEm6NK1rt77g5dC8UHDR9N7b",
  "key16": "4QJwmPR7PvwRSooKJbfQvRZBLWUxKdKMKcgLmUafGB2pNGrtJx6PDRELb7trm4X59FUrmngWJXe8msj1hEGE1XJJ",
  "key17": "5PxDraxkUYk2tdTqiHZvsoWwWKFWqrxBUR3pEwnmJzGrgYJmMBvhy77TrbGx8Ay4xuq2bfgvWbpz5rRR9foiXvNz",
  "key18": "4pv7s458tudx8xzx4EUyEMbgja2Ax6E3uDuYHJE8Ryrw9Wg9LHAkxJXqWRvFD9eurBTgJBPiTQS41v9P7iPnRYNx",
  "key19": "5uGgoJjtRaAMgYqu9edvvTGvzuhn45iZQXJ2wEGtV8CaJW1gP8EvdMQGMjsG7rtuhWyDEoWLmNrG3ef2s4qEnHUJ",
  "key20": "4nzphk6Rnq1Zv4JzdMV1dBw1mPWAA1asL8S7RMvFJ9Y8ULtdjhRJ1SXXE8vLZ38jbYZ6nR3KTJzT4nPeZTijpGuP",
  "key21": "4DseH5viFzenP91avramd41P8ffSXBqrnh28wK89FMwMT5a9xsT1dokpoGcX6pSa2tLzhJ5XNLT5Yj7wij7wEvN7",
  "key22": "3YkhcvJcY1og2E24edDo5BFmEnE7FTWTn6hMFW2Wbv3TC8vFxN8HQBmH2y8vn74NJyVMBfjZwGVRiZ6YYodQPr1B",
  "key23": "5TnhhPWt1SV1gCocL2DqkCaa5QJwUxtWMp2p7ESxPhvtGc74Hfmdu7EB4rQBb5eJDZNW9kDvzkipcSo7uPofbFXF",
  "key24": "2ZvV1RTQCUDyDsYVk2mkRDsubPjbg2qGXZzStxwXWDJQHcByGxxdNuAef17GAyhEvXkGdrYQRcb31eFtb4PhLSoK",
  "key25": "3sG5Jgj6sKjt87rFVJkvWWPShRrzTegqcVGg4Dmmu15XWSLq5fK9eP919DrmnpKuknmwmkBWgvMMdocDTEnVKemX",
  "key26": "3tH3zmdktpRnYtp1eShqW1rXpmCoQGVoKDKtY6aPtqZAwAqeUSheB2hEWQLEQoSSXzKxqso54WtCKM96BaYnuauG",
  "key27": "4YqwyPNy7okNQdtLoYfLvK3KeNvXMEG4KCvrAWQ27zvQgDiX1STuzrU9rvCoFzbp2CoTkPvLGYPj1AJCxuj2oQqU",
  "key28": "53dbMjaXReDEsJHVHLtMHiH3ReaNSA861mDRc7F2v2rL5XfC9JY15Cr9vgwjzLW9gKxS1nHXg5435Q2bxqicksBW",
  "key29": "2uCvVHS6QShoGMaZwGXwA8XwEHTetNs4kDAG2g6XNMAwnhnMMkeiBk3k4mibscF4AP7KrEoHRP9cA2KS5htsSY1H",
  "key30": "5dyqBjasKAd3PtLPZaAF37pAR1DoNXpQfpxex4EXvLv3ZqBSaMHLmSQ7DGEybNifpDWoiqVdvBArWJM36G9cKAZB"
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
