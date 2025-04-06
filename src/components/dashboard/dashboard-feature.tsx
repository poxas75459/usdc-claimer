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
    "29kqEfVDHEc8vyeoz4dekdKBFTd9XH4KkdtuZTiuaN7wkmz6NnhxSLB6ixE4WmGWpjQXBeVjyqhtX7Md1X6MrCid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDbXvg99TCNnTiTpvWyPTc73S7pZsBBNat54xs2tJ2UMV71VrLV2hYQkyvoBCyAu6MvmmPpAVs2X8cnyjBU24ui",
  "key1": "3qx2ufsHRnmzuU3shXQHHgDq8RQEEWhRGEVhFf3e6eMosbUTsDrxU3KDtiueYpwCFu9CBEp4Mn5VgcXpqeieSKAH",
  "key2": "X9KKjat3qP5djM5LmEeQ4xr95rdMZQCZRUETcEaA4dWCAsRyED1RZhmbtSsWMPKhGHaDqhhxoFrJgKfucp8BeoB",
  "key3": "53dyf4V8MvBcr8fESct1KF1eubZPEtHYx3G6SH6fv1GwNoso4Ntxre69DiALCTEJxYduiPhx1ftwXbVoLX7urjW7",
  "key4": "4kKyDS5Mri4FszrswU5Ue126WGBdcepuouybtu75MSERbMap5aH2eRtwjxxrftwGuX9K5H3nNm9WSDkaC4pmpFPG",
  "key5": "3nsUUb49o24wLBrg7L79tmzshu2gjuAYaa1mESbuBT9vH44YvyqBnqNW8Ci6qV3Y7uB3uTJRcZgdcEgo2kmR1dYi",
  "key6": "3y6KMuMARjFqZ4PmTpJWazceAbXw6MTYWmEd5LBegQJ4436mu9rhFxonXZjjWr8JiDFrB7P7YmyZBaxUC3n3WVoN",
  "key7": "2zYjie8bV84T72h4zCWzeQKcoUWz5x4457XfBzhwSBSYH1u7Yn7pjZiKtVE4VieBQfrCcaXLyRkQ2yaVDesDP35U",
  "key8": "2QMsTKppyvT2wm2hc3kdBBzFidiQ3t7Sikx6jJdrcQZAW2zxExGJQ5mmQGERVQt6RfqhY32nVFsTnrpM3yi5EtP1",
  "key9": "3GbJpcGMyG6Gn48Yycs5o2uuxaew1NsVfZkbzV4KH9MtqKyBQWc7zm9ByGLz5eyE1dWScPFsVxDYVqxwL2LJ7m98",
  "key10": "3HoVB42cxsjxUW9m92i6Lw5YqS11RWUkph7dgytNMxY2L3uiiZc46urkEm9u1iR4wKHiWzuezo7P3UeFbuvQU5tv",
  "key11": "3TCuF17baezUz7wzWAeCKhSegFgYu8mCwDvD3kpUbtw5MMX9pvM7R6k3kySDpJHeA4LgNW3KjpLUYYRxxR3Q9wVx",
  "key12": "TYA5Pap7E8tRk5LXnWNSVMmaZi7eMSE48ATs3cX7Tjt1jnsZ4EbvEa9C5wnVsZrQeZDM9VpCfj8Xvn3eCL4q6jD",
  "key13": "2kAyoUvrsskj7ds5AoK2sR4AhLHE56Cy9g9vmmRhysjuhnye8jigNN6pupDJguWKqGxLRhLxncwukXptk17SWKgX",
  "key14": "27TcaEfxNnr8QUo7DzcnmHh56nunavHP46DKuy9eErtwWamn2T1xHsHzGssLquW8CCiajzXZ5NGdZ1Tce3JYvayG",
  "key15": "2BVwu7oEc4EhsZ7zab6u63VWq6iQVrZVguKuEH47bcyk7U44ib2vTuu7QeftRsYkbTSRBeBcxXBYQK9cRkW8MBqK",
  "key16": "3t5n2QqKy15rRtz7fuiWgpdReSKLCUhhoMqJ4bffXvUe1RUyhztaVFrKzCh6boQD6xB9QpGZAH1aa2qoRFTxFnz1",
  "key17": "3qAqd82gV7JAvh8X5gj8P8j2NJLSrCRgqVSoMwatVuiPrdKzPJqTWQpoKHZJxqEkjwo2NmUeA779F67wrQxZE41p",
  "key18": "HqQGEESdrnQBJEQFSMoiKmWnbaqKPnUDwKYHgtZ9CZEtBUrJHX68wUPMo1m63zDk1W9wpda2Bv9wkbZuBwnjTYe",
  "key19": "3qEa9RKeGrUJRnPnS7ZVcP6bdn8hfvSY84danYjE1VamGbYeRzgLCrcFK6UKXmeatmQgHawiRYcf9dvnjvmvQCjF",
  "key20": "5wgVdMGGnYGZcdcZFrbcD29sedVYKaGBuMf5erHxypEbFXJNPrM6bVwrkoSJCkAYTrvrWWbyEkdsBcZwHMtbMVxZ",
  "key21": "4oL7NPzS7kt6k4Riv5PVUhGKbihV7LXZLZQzRRF3VozVenA7as5yU3hFi9RTvv7f8TVWKhhdCHVD1QHRpjyqqi2g",
  "key22": "4asQBdsFiAheMHmysVrpjFP9YBPo9oLmmywhkDh1VEdvyAXkWBLJuqiW3wybmLXPzT5bzGSv7mDgkzQUkE5nA5St",
  "key23": "4cYwMbB2dSrdAUzJwDzM8vasTCsAKM1jQG3h7CnRWMWfFum4BypikBMWC8F1NZxgL3qXfxcUi94ntVEwNc9TZFkR",
  "key24": "5QkQht7MueAhyDFQrzJbRPMKc7B539xjJDrhNaefqLuLTctgrFbzW6n2AQQ83wGbA1u6CUZqgJPZ42p7SsVZgo9z",
  "key25": "5WgRg6EeicZ8e5aQ2XoZeKHg7hh479WMsdjcyZwFHne2kaAEeaAb1iCjDJ6kWTYPi9RMMdCA3BLXJARhkoYgMnZx",
  "key26": "2iL8RgvSKJgSDfEt1STUF889eZ7FXRzQXhmzxyTVH5oBDdUjGmRDgH6kCJRBZ8rxwDDdpgh7mWRcJKQxhTcdBjMo",
  "key27": "5bz7A8mTMySr3EUMhw3HvFHD2gPueV8DAE4s6WujPXJRNpNkguFLYAoUFcy9XaV5xD3PbTFiuKHjtUUXQgM4mt4t",
  "key28": "36tAJJZXX9ANkCAcqsxjhpvjAEHdPMceeHsw4jEDhJJTcxzRxkLABbSgZGEHPgzaB6J4vNA7LeyewDf5abfNWwSr",
  "key29": "3yNafDDJAhuUX38dFfoPnvMYu6TbRkfsoEPBC4jUXwWcUvxakarW7i6hpfws4zvuQC4GUarhfVPT1QmG6oSnLdkK"
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
