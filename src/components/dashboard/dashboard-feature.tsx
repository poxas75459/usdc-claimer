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
    "2azS713ZcrmZLivqX4rGeM1aPwke411QbGqgKZoSF3k9gpzbytrmFRtYdN3eKNwPGptPZjKHJvUHa5Dh3HbGHPMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jbw8fGWjFTfQRu3YrNfTvSeMkNguj6vZdYuiEcpCZ4EEKBhcuqPbjcswme9mGvVXFyciVh8joLztLhyqiszQnMQ",
  "key1": "5JHcZ9VDEXpHFGy5x5F64HKHFTvncFAAz2vduLGbGV9FiMiSeXrNzANLK1h7KiRmQZM3zYCCzMKLcZuXj9E8QKCj",
  "key2": "4vLXv2r5MmSgDhM8Z6ZAUMwma8nupykTDW1hjwYswqnQ939LRZGt4Sw7bxtpW2V8hPkmdSZJGthKXiC3cixFe9ZB",
  "key3": "3f7K8wwZJjkUmq3cuyJhia5c31DYJ654Gpxemi45MadNeCwz4hmXvYdoxf7nHy23eTKCpFFuU6yymwmYK2ka974S",
  "key4": "5byFqQ7ZhunhH7y9s8J2v4JzyHYSftVazbRXRtuXNU4hRXP8FPChBehmC257bAUDzxxJXWV8yM9MRr4LT5b7SRJq",
  "key5": "3B6ux9CWF5QBf2befHSGCD3AbgJ5zwbnCeAHigdv23wT3KjorksL5VhsTDKGEgrmKhGLysSV33SxLDnVJJvzWCj5",
  "key6": "5tSxGeYHK52ZfXZxEiqoAjf1hZTCzborjFLfjEaAqVJHVbigXQ2VsSiafHwozo9koVP8319UewiEZ5uqtX3zhVWn",
  "key7": "3m5FNN3Y7KXAYAX1evzyyqPc9aESH8c9YEGSqoYDUYG2TwMpWQQE9koP6YJ4YkVWmHhGi95DX7BqpbrhngXpthXm",
  "key8": "7PSqp5CX6YtXbKHV2F3w7TQZzi1QVyBrUarKZwb5CbVHJ8hWnpupWPS6k15MKwYUA1D4kzJaafFSmhPh7DBZP9x",
  "key9": "46dssDNt16ETkkCSpNMfvWdRtqpEz2eURb4gXF8ymtgqeFwgEqwcGXA8XeNsmhS4Ay6zidTeQnMb57yhZQSFDwCr",
  "key10": "5p5oFoCPRYaJQzLJYLWgV7XGfWnhtvVadrtgKhTb36mByLz8X89K8PuMPPqkd7GpYkHmDtkpBVvdViqYdXgG5Dud",
  "key11": "4rDVnbQPfv21shRgSK5h5nSj9H6wnsiCbatMUWGNwNWqnNXCJCeukzSWC8nTxMJTigUbLUuoXJGY8V1FxqS1NgAt",
  "key12": "4F17dWzdUvg3FKYzJbMJB46M3znac4gH5Ngm7HHfUYpnK5CgmfPYmRGVxDowDzUB9T6P7gYxPzY8kCCRfu5npRgV",
  "key13": "2U88YzUG5XCKKhPrN5PTzsVZ8C5SqQkmH9MDZ7A3D7rtdmZAs7hXkjgGtH1JjY4mxYMV7UVDKVWttC9CCGixt5ds",
  "key14": "34vpCTFYbN6syzjr5r4YacWby4A7uX9vhVrnf6aZBLQtCkevoWoe2eaZ5uZHF3rghpQGFSWMsAiUXRdXqk84YvR",
  "key15": "5QbtgyJVQtWpLAXxU2ZzxjuKbq4fVa85eXFrnpAx2PcT5DrAiQQBnwasuFcPz4zntnUb1jS9v9Rxbgw9KeuCFKbe",
  "key16": "29bHEHUoPMzpTraSE22B4aqrZQdgfGXfpDWgmsAdXHytzeBAoJBTaWA7epTefS2K8fY2rwNMxkmM3atjofJCwEj4",
  "key17": "wpoktNNfqMyFEmRDtiVzTL4gvjveaRs67T52AUKpkHqDsMVCEhZqqeVz2y9T1U2jLC2YeUTJZrVahspYot7birF",
  "key18": "4NHSYqSr3ACf7zBbT51v7sFCsB5HJHXtHmEMxkwiD6FkRod4C84gHr2sTw6NtKPDSg1GrQ3gs5T99FRYJFjtpNrX",
  "key19": "2mTpkWhCJUysk3GDyVcjz1nJAatrPKLWJMftLAhv2q2TbAfvUXRp63ffpTAhNwFA3dRZVZsYM7GbEiSu88cbvBut",
  "key20": "4sMojab8wEVg1DX8PScSneooLvT6dbhWzpwVcDrewzJL7ZZWUzCU3f3Ek2e9cTwQYtF1hFTcjbrzLCWvrFMtKzQG",
  "key21": "5NgTwqtdzWu1gJLoBseSxTvEjBM1wnrfpjEoTdVmVA5TahFpPP2Q14anvCj3FsFpXfxeZcLE6wHYuuPP8yDVGxFR",
  "key22": "22PdsWyMDVfAm3d9aaRh2HwbZPAwrvbPHc5C1H8PaQ4QdwRmWXcz65DHYL8DggrCb43nRASWHKatcT5otMhPu1N1",
  "key23": "5tEDWCVJGWund7CSEhej8Cus8v86tWJ8zJQGXhxUJ96bus2NFwRQsxgQoTZpGz68ZD3BcyGdyRJZp4rqaFpeNL4",
  "key24": "52KqZnAD45x1vEr3TVum6FqdeLmtja4RD4jHcXR5oJFcEECGkz1NcFrQRvgqqNvRB9QjGzE7q2zrRcS5S1EgvxFa",
  "key25": "DVmxXSSUiCFnK8BXwYMFKa7wYC6jCQPXDzEw8Hgs9oXVUR9RMC5VYpvckLq16i1MRWrHWFAWxJefsEVsMg59t2T",
  "key26": "UPSdArLpTwW8XtsTTXKmikWm69M3BG5Szzxuc9bVt1EawTjHNTJwv8h9hHCtvhPo7hkF7RYzTY5tVNJ6seGru4a",
  "key27": "3GtzULpNHuyU4kmNLUsiwGWyhHVCdvFPjS8QrfMfBQ2ssDoGsXhtTDqFuDJJ6fbxY1FEAD8CAYBJ9fR5Vwxcd5Et",
  "key28": "3r73aVLsHJD9EBeJwDdX9Yy1CHoe5BMxuBbk6FACnpGbsgBckEAmLrrEdWw21htLDMb5YaYVcaMgYahp4KCimenu",
  "key29": "3Yu9CR3PyZaRZzjnnZkQmgavhPVW3DNvUNB1Zth8yavgALyJ48ZTgR8NGbHNPXMtZg9c6DBvBFVFDwYDVmGoUMCs",
  "key30": "3Q2Utmom58xfLt1Hfx5cUepZZjt9JnBdn51o8G4GmBYGDf6Q1o9yzjhktgkvwVLNDepvw3QubJEVEgVbUVqDJGTJ",
  "key31": "4ZU4TR8tmNZZihqNgRekEtDxXuaUwJAddpoYTc5q5AWN7MTPEXvPx4n2FbvfgdnDq2q937zTcBX9GEQStVrnhTof",
  "key32": "h3h737DdEhSyaBo35Bczze7wd4MqDkefuTJy3Gbk2NqSqfvyzAHnmgs8q2AjDXD3EtFPnq2FiS6h66pe66WkpeN",
  "key33": "3na7YMC7sboKRH1rsjQbcv6JaueynpE8XciFjRH7gy1mzUrHUx9qbme7x9FP711WiXosFt63To7Cbmyt7RsDhnKP",
  "key34": "Fm7eKRrrkXrJqQpB7jUrN2LPHhwy4tcoM1emGRT666S1QxuBMitb73ktin2FHZ3TmVPwvKFTS9kxL91k5khseNL",
  "key35": "SbgbxfkEttYGdDoibBgmJqEtefHE1to65GnxXCaLmFJQieQVDc6eZYri6ib1E583hsfXwR4n8A7fj8J1UTkbcBV",
  "key36": "4FqANU9onXvpiQ3uFgCb8MTLZiXbiojUwEdSeoiJHNTcFymB7MnaFMc5bbvbotEwoPUoUaVgXBda6g8madPCewLG",
  "key37": "4BFJEy7UpJwE3e3rYupRR2oARnPJWbWtqNxSPGxuE6KRpVwog9unt9GqTaUrUyVzFBieWZeUHwFn9msi7ZhrjLYm",
  "key38": "TXrkZRGNGSYo939wDdidgGEfHeeK9nfPCSDVQwivqTkhTyq1UzWytXYDsVVx7BGXRe3wA8Z59Udf1UHvS57wSyi",
  "key39": "2eAm3mykkWdPzb1dF9NJPnXQcGfyvZgQYYyxWPjaLATJd4CAefkhsZbv8MGrKhxzqPtTbistkFbc7boYUq6XeCDB",
  "key40": "4BTyBT1Ako9qgjtyb44T4QhQgGvRrg9jJruysLRLYhqHc1iaAupBUiwUJbGfrqRNxFDwQMuz2ciyddA4eZSE9egc",
  "key41": "4T3hYZzLd4Lhek1s2E76dxLH2qEWwcnCgyU96ymxGXgUmNv3TqeCwaAi2ihnW7eiKdDJ5dQdjUjvJPkWtGQWNTdG",
  "key42": "5ZZFfmNTgNwu2V6oetmtu6jWE3aaK2L4X3jNmtRVH3vfCbLXkXByGrnv2G73JCCgvoYT4S9hvvU6dzaVggMkExQX",
  "key43": "kEWjt7MctjHPNmJeikr569MNYW635NURe4Zy9Dx9XKGBb7j22ESeJeHuKkd8qkWSmbtSCq3iAictM1K4CRG9UrV"
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
