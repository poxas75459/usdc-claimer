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
    "5tesyoDQAEViuDLKtGzcgCwneaZmz6URKnRvhYstNkaDm99jM4sYVJAarmdtF56e8L95Cf4z4Np7NghwGqNhuGaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cXuk1DZ1fMkc3Qcvo7b4GCN9ZaGo7LGPd2nNHa9qjoGwrmc9ZzP5tk7k3yFAmz4FNtteFFoh5N13ASoaFPFeySe",
  "key1": "5RHtQvFabRqZZb4T7wRPu8YAfiRzeFi5Pt66GEGmZY4Ya84RMm6HRiKZbUCRVtqLK8zmCsHitVQLT8uGgo9qe9W6",
  "key2": "3Tv4eChuRfp7suaTtvaAdiaw31jGppgqTC8xzGbrnSXdszKy75UFyDmUbu2wffM7FJQ68W8yo3n4VhN3RNs1Uvv3",
  "key3": "cwZuJBVs77dq2gMeTr5ptJL33S9BZxjSnT5PEJbf71a6bBE8kyB5WxtjWNMmBP53TNhGdCXUGGv7v8qj2LrHfaH",
  "key4": "4z5cBe4UPmbdzJ3gpzqXJimGrgccHsGpuvfU53prsFLuA5hKhTrDnx2bh9P7TvckFDs6jZyK5LzsojfLUmz9uGwc",
  "key5": "nyAan3Z63GHg9q234xQ9w6XmSnJgUTxLCcGRWvEhD6v8MB2RFiKooQoMZdbjYKPkyGom7XsPQTydm6wYhyVVAGj",
  "key6": "5vXyevSudGPVq5iGjWEZtfMvWP6fsL2kRqsqsCNhqFpgyHwHQNVrHpHyxLQa84jYYhvHZCBo5CQmG7phoewx7A43",
  "key7": "5BPxDG8DY8crwrFyKSZwhjqhR6QweJDEU18DTbAqDcSr7UyMUXZVqtgVisHYBZBrvgBEdwcnu8DQ8GvvP3kfRmEh",
  "key8": "48enVB32GkaonVKbzKyoK8s4ngM7ZoE1pMyViFyppR8UsWPeS9SuNYXt71cGsd6TQFWZH5XEhay2BAne6ZMcXiP4",
  "key9": "2mgHqNpizXU31rTPRRJ5uEKaU1LBYCpaF9TSPEGpVbufutEoKEjFTp1poccKkSJGkzhQQZPkgBeuoXtLwNsxZvv5",
  "key10": "5cjnzLgnRCRfrmdgGW5kmqiAUgpYpCToR6NKjEWV3UQ1xCfG11ac7Fd7uihmT2uDqmD9EpskRir4HmjZyp4ww6p3",
  "key11": "ULHUyj9VU1cHe9Kp96LELhrgmcbTdhfwDg9X8cGYqGbCnigsskdC84TBMXaXrvrw53uTHB1ferbng4WjhzYGncc",
  "key12": "A9uyn5xRJksfb23EtYfDi7CbGq67mFFHKgoQWDcdHRt6PXW5UJQscKGXG92ocm8HXyinRGtm4zzWLk9rVFrvsK4",
  "key13": "3qp3MP96VQCLqokJtSNLy1D8mub8w4uaNE2hb3L4EXWAfHDsC5mhTAYu2TUpKvZwM4A14L6ZCANZwYMF1Adh7Um",
  "key14": "GPSjyVfXv2zi3D51K8va8Urrajnq8xsE2MSfe8NuaYUAGqrfEqDhNyGYySsFBMLpycPuDtNEnFsUo9AgAcxhmun",
  "key15": "5gxjJSQfB1v8dxhDAZwXsHpjzvYiBQMEoztGFk6MKVYZmQX7oE6GhNm15pi4p86buejHn4S8xCGm7w76iqgrj4fb",
  "key16": "A9RDNbNCRzPiLimHqg9dH9EZ4xL5uPtYNwCYy7U8X791bqetZR7V8GvCqv6kJt1YmSzMmE5DKe6kxpwNWwtBHgo",
  "key17": "3sZpjJZxAGZSAkcHGu9MCi55j63MaGxx5dCGJkS7GQK1ssRu3zDZQ5vCtoYhLmimGzQWscqzRwNb44tcCQyx2w78",
  "key18": "C9teLoGdXGNkTCakkUvRhNv2pBcjtpcLuJDXXvZez7Be6gBL81mUCxBF4MoDuTRVLW1JZUXMArUKGmWPavyZdBo",
  "key19": "3TFtpJXvkSAMLA7j8pap9rAShaD2NkK5wCJQMfmQ1m8hT1LortgjwNPnXA7upPLv5BWbkhsWxrrSDd8UMFAAFQzd",
  "key20": "2L12gWX5LXuTpbSSaAPCedHos24UWURa8j82sj1zy4XgA7aosmfarv7oprU2QwQB8DdVW8JnEZnqscsb3DehEhLA",
  "key21": "4nmx8TfxFHJbQR41RWCc6Qqc8HS2nZybnkJTEVpRXu6wEDHHtTtKDzKzsyxVFAYSrffvak6gukYF5AwSX5zEu9La",
  "key22": "3fJDPxCLDgjL4Dati6NdJDcHV6KHDPRuA8u8NwswUeTcGXhX95qRdM8VabbGDh8gsbQK4V5f4DAB68uh1F8Gre3x",
  "key23": "61t1d9CthLgwPvU8Ygk7H34w8U2GRTJfL71vhLisDBojsy8RRakm3du7DDAXZziTBYi84daKQ1njirhu4qaQmqiT",
  "key24": "5nkegZDNZwvi22WAgd1Qv8AmbdDQWXQR7hNUepGeiS1Pm71mxBwireV46AMpkS8CBru1h4hhB5Z8sRaj1UeFGExE",
  "key25": "3EtW3W61X4HvrGs7kAPE5Y2fa8ZqwVVZiig4T7ViusMR6WEjEfbgjGrt4h1kEmBu5ZL7YdEtUMvVYAzctfxjon4E"
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
