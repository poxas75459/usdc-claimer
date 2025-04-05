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
    "Msow2PbTzbqfXr1N7MCFaAUzcfTd1M2s5NTC5rAYdTTNALnJSShwjcRZka9Y2gDg42XPeAfbEX4UFT656pp9J6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNPq8vEexXNMmyMoaNtHCHQmxFAnjtSRbksavdQ2Rit3ShW7qkrSsgs2vT1prfFYCcQUYNv2sedm4ooF4x1gTZe",
  "key1": "EepWuPWpX8ZWeRaDU8rDUEychsgGwpnCUhzKKBtnVGJ1AwxpVs3kz9ZX1ni1dSTpCWmvq2ZgiWs2ojApnrKAE7g",
  "key2": "3Vbx57zpR1UbtWPZXUhuAu9QGkgC71VzKmXw69RETVQ1aLK2fZjBfZWKVk6TSYHVDViN6DJRLnnC7joBwsdQcLpN",
  "key3": "33Jf5YHkbEfVVyv9b6YB1bCwDYf2EAsCjQqYXtz3mrHjdvQ2aZby39eRLq2eeHQYrX6jvrym4Dt3ErEw68scsS57",
  "key4": "eLQv4wBnpfCYwVQG7Um28R6mHR56tDDGgLt9bskd8iu2Awg7UNj2KPTParNySNLQUb4p79p6fa1TedBx1B2iw6L",
  "key5": "2VkHK7VYdgz9C37cKqreXKhWM5E6N2E2BpikoiMd9CzCbjfeEhWXxN3Dxg8gtkXSQtYUN2iygFm5xi3W7bBwrco1",
  "key6": "5iape2dExeseTGKJzWkivhgw8y8LSB5LFhkQYRAiNBgiN7E9opYUx9DqJWkUeU6cA7agaxFyRTycDmMrCaSTGDfd",
  "key7": "3XdCCm363aDA1HnHZpTEcobG47Nmt5yS546HL6q7dc9GPx1Pirc9gc34TrQtDoFcXGj6vgaNNUvpfcxEEFccmbxz",
  "key8": "2NQ39Bo8GfJPRnYbo4jHgcrcswqBYzxURAgj8Mb5TSuoHLxVGkrcuSLDj2fKQGxqM3oEYTKLufzSeYh1GyHhmuU3",
  "key9": "2ZfQjxQbo6xYz9j7Z6KGVwvEgW7T5nXZG4iWg717S1ZfzXbVZac5cbutFpHcDCw75MFmAEtJCmuWbq8xQ9WmvUM8",
  "key10": "4yemTYNwDCkyS4weJ5xLEZudtg8def4wytMb5e9VbbsrJzz9haBuFYBUDNdHm1KDiupdrN3MYcyoD7n9PcBHTJkR",
  "key11": "2EkQNRZQVord6GTyptABVS8CMa5jeN5m6emE1bmSGN8HMFgCSa3Dpz7oaKfV4AZQAAdgPdm2PrryRLefBbHEfYN2",
  "key12": "2rwSWemfHVtbXL1oCcK7snUKvxNkzS8KKVvJuuEvJpBmWvjDbkwpWbmzxzzgg5KvX2rMeT6UqbcsTvHgRBNeKAKd",
  "key13": "3yvj6QH9q6X8QEkRTSrTHq9YX3D83MZVWMD7KyVKqbKUNoRzxB8j5U7rufraiW5oDC4RdEERPh3ooGW8mES1eHLL",
  "key14": "4kkJ3CXhi6zpRhRdthUsexSA7Y8SDxMCxQeX6jDBbPHA8dfyovN3GwQVCUTzziLvLbMBGBodszz7cQKw4b8uMC9t",
  "key15": "3oGNdYbLATKYCphQuZJgmswdKuwnGGtARxdvoUkQyti9Z5dtaACboFXR4QfsDVg8V4c9K9eGTrVpNYiuq7rvPY6G",
  "key16": "5hmAsfXPttBsUP5waFdxhEciddZVCvCLKfLuBPadVt27sZYj7Y7LkfWFmkQgMCCoaV2KhyPpLchitad79s4egUYE",
  "key17": "4B12zJca97kn5nZvG9UUQqj6nu79BAuo3r5gG4hhWoNLZcQHBwahGU6Pyuf6rpDEGBY5kmeyG5URLBD4pMqeYxU3",
  "key18": "4WM5Xxvvf1MLs8wJuAQXScDizi6HK5SzG41MLqcQDm6rbstMJoVtKX24KndWJ1oASPzbpjQzrPr4jTt4cpHakmus",
  "key19": "4b9GWPE1R61bmvizx7Sx7QM2mfmorSLYqhsqridnufpmm9kEqkg4q4H5D8gNJ23y6HVoPb7yEPJyHZjMFTeLajpC",
  "key20": "4QFhwkND3TsSXtLvqe9RFVhGbMtBF8hvdk6uH92E1vsGTtEAfcKEgipVsffpAEiD1x5XgXjMvgRWVmS1kLtER3ZJ",
  "key21": "63ggn7ZmivYQsP5eJgCS3DNR147J4ZsdVCnw3cqMuRCxNhmDKKjFeqT8rfDnX2Ux1DzDPCPJqN5qxCHxpMKhNqMf",
  "key22": "2MjUMwpGzNYjbGAJ5wLrcWKyYDkojVTTMvraA1AGVR8BykMc8ZxWfG92dZm7rUXVquoSJGHZ2xUEJSrzw7DfPhDE",
  "key23": "3ZvEDjjkGGSbuFfYATnC4FTgXEWoea4kiQVEvZLfReL5bdvheszuQ441mrtoQKmaMLsCVMDeAhCfTRRdjTmvPNxd",
  "key24": "SYA2SUYNRmXwd2SjGLjEYyzuFWT45xaq82jN8qUYvkw3ACLS7wiQxCGp2KParhk2Fh7DTso8pcEGNQ7nPFGqPep",
  "key25": "2WEi7yryeDRNmXJHPHMe9tJbXtUFhUSH9zyjUE9h4PtydnaNGYFW9xbToHmkue8xRQWeKFyD7fTdoZEoNYEdiZD3",
  "key26": "5jWNUKoUCBa372q5zYNjJzTG6kwSaWuukG5a773pC4qWKwn6gofwvgkKMvm6kJ46U4okzchu3foc5W7XDxu3gKCq",
  "key27": "4LpRyEYAJfNNmPdj8Vw8ZjdVkJ77k6HBnTUfkG5Nt9ukrhyAZkKbWAschMEPLwzEta4uyC65R9UmBedYuLhXEzEC",
  "key28": "3NrFVDuGiAxUybKSCBjnv38JhXZuH1TqKkDg3Jd9jFveLC2Ar9JxEQKeTxvnTLFF3gsdGsDDJ8ZJ2jexQy8o3qqG",
  "key29": "4yMK4ShvzSKuPUMFrtFUjKXw7YVFCuosADo43iwC4PELXu6XxKoEJv6fMbzVoWtei26eSqL2NB8QJ4x23yFPM2Q6",
  "key30": "oygTFgHyCqN5LQH7Jj1VYuvV4fBfkKhnqV7q5SPpsCPPYsUbVNxTNxAY3NEUNCDrhEm3syE7vYS2nSJeaHvS7g4",
  "key31": "2Bxg2bvPAxdvA9YJhkZ9MtnnRTtJLxEA4aWMqGmwkUwAQZZKeVGH5aHVLmKKP99zrhbojt4wRNGDy47esDsFMN83",
  "key32": "5Yd8PvS7ZkQYNX4pE444mLwaQQk87WDVJdip35kpFXebJj5r9L5HHrdtNhF5a4RxcBFvQdwR2YJoM8kpDDnTcsC5",
  "key33": "3FbNzLnt4ABBuPEu2aXqViQedKKbvLZ2n39WZEyBeEveZPAZWRQiqZCxjmYQEFu8qScCXxBUWK4E9HU5p3HQvABx",
  "key34": "2BW5fh5eEv8GEniAFjFZ4kRE3Nf3gQqbszx4cWg9wrhJjSXy75ZFZkMChgj2sRL398cz2oETHFfgzgpbExEhZEku",
  "key35": "39T6Ddjt8gVrDS37FkksmJwgDWmWpqT4dCnF5TrmYuMkXgALcBs4hNhZqWLYazebc4qQRbpXYwG9TFUqMRucPVcw",
  "key36": "5kSCPv8rLLXfpScsHo5qBeXLJqiHuPs4rgyJAyBt9TasCqeHv68di78NkHupcnMcPaAgTpAkP8aKPpLiWg5qtxKz",
  "key37": "38yk4i1GXt1sDVRWAhVGEvMB9BW7PTDSsNJK1x4y1njUBDAT8ZFx1cUZGtLPWB48y42hVpkVnRmVeGGhiomQcnRt",
  "key38": "3MuyfNMNCgrMbNdixionsGPvi6RN4A6g5mMhrYSSwmLKNUu8qmBZxvUw5qXPV5bFbozUsZBdZzMGJ3Pw5xnzKLMN",
  "key39": "36MGQwEbBKRRE2vF9ZrLtu51zGqN3SRRK2GB5CdKgxwFFZQrrNzzXNQdcyVCtRAGW38VF13jsmKdB393tHwW7MDD",
  "key40": "4JGfaLqo4jatw5N4Y3AwpVH5yJSLp1G7cnUHVnoJJop13tJs2VVpGgh3tvPdExBy1Sf7rkx41p5PjR662KkucFaD",
  "key41": "28NvR1Ns9PgZeGENJbkrGENuEdQsgddyKY2H1aEZecU7MeUCXbHCyyGWxCc8TH3JGdevWjUqvYAW5bdc4ZEY1Spj",
  "key42": "2b1jC2WtWHMPf84BrboqZhJYw4DxzrBbUt3BSN2a5G2HSqpYzXMFjXHR8fWMfL2H2sK3rbefHVJ46cf7bWddXg4M"
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
