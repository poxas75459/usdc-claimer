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
    "2eduWJNNkSp4yRuXNH2B8rT1eomUoPCfpeNqVURYsuBNqaTiu28NxsaxkYXxLtx7dhB3nZBZRD6PJ8JqsmnbZ4mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcykJVQ8PGF7GjX6mZ8vfPoUGyn2rHwXzSUSKxjtbykLeEuwPZ89FqpiHAw8YtM2pvWPUrQG2RyeUuZGJWH97Rn",
  "key1": "479ManJXG4dnqsetBedE7yoyGVhhfiQtnDBBXnLAQawpnk2S2adJuTrLt9XwQaxjwKLWuZG1cgmABrkS79wfTxFg",
  "key2": "2RstTu8vT7jRevjV5wnuHpJa7QqpPxKyCY8AvXgAM2GtMYhxbbjikrdnvc6CpVTg437XHZgcM5Ho25p15aawVU2W",
  "key3": "5SrUWSSXyr23AYmf9wpXnghvJZNj5AyFN85UJPpJmVUqwzk1LKJw7Qb3j8Q2bBL9xA9GTsw1pdwbw7PbXtmNvo61",
  "key4": "2dNn2x4fvHup1LgnhaJMniNKtncYtmHh5MTu2ttL7hLVqWjjJuL1noiGLBuR8BxG5aYWgAdWVf7WERqxtPe6NmcR",
  "key5": "2L36YvnkVcVPT8XZ1ZGKjJV8ZApoqbB1xHBjXj4zuqXdn4Y5zGi96jjxK6JcgLKMrUk9gmsvSdj1bUP8zR9DKYTY",
  "key6": "62vNVayRofvVuSNaSRywso7j4X9aFMvZfaJXayoFf3YQ117CLQdYwnZQgCimeaXNtLHU6kihBaH6vHC52SPUa3ku",
  "key7": "5NQ5RX95DU6TRumR5mcd2YEHt9cLE52YuQB21jQkwQHxJh2XPC4oRHq5LPzoUETJ4swP4YbX4FkhKqMxUxc3Gp7n",
  "key8": "3ekpPtZPkSkNZM2T3SNV2DQhNxUeV3Szy5EdsDDpnsKajbwXYErrpLTdBtFGbMPJzWLEgKNUfe7fPHPdqGCcBJrK",
  "key9": "66Ph8D2uZuvtFHHjkQUdDm24A1HsjCjbx7V4C9TEEk8Eb6gHBx6opbxd4Da38HNvsAdKENFaVUQE18m6w5aRD5PJ",
  "key10": "5NpGwRsofDHUts31FvwXhp3FyCsqJDrwgAtxhvfpp2w7LcscGcK8TbXuyNZGzA8ZUSwAZKmd2QVjgCTB9cmtCuT5",
  "key11": "qRzoMvFyBWMdvjAhTF61GQydDAn2hK6AUBoQ1iXhKsry2vHCkkMsDzWCbmooGnCcNBKNc2enQsKCtEtoDek4TsC",
  "key12": "44JWqF82K2tZB6yUoVtXZQDHVagpVLDEvg35Vvhif17QsdHfPG6xpeByYyW3vCKwYxVUFYFhB8bmiU5DSoTPXbzw",
  "key13": "2gaZgTQVHmtYDg97hcXgMfagzApvGkPTPt8Jpg9j8fUdEk6yK7DM3112okoaH2vLVevrLhKoy4VYBbS4Ny4SxVBC",
  "key14": "483zc914jSSPXvbpRTPkqCX6eUAKA8JKwALkrPVdPA4Jc6fE24CNM4i3fzdFYKG7GzooANDDS74ga3tDJjxcrg75",
  "key15": "3MMDxjumPGBpGYzeTpoJbKgUFu8YTJtVBton6VRGCLNfbFqujvZ89b9f9CsdWTo5Z2EgtjQUiT65kMfWqtdvCPgf",
  "key16": "4zS76m29okGd5WYbkzbzM5FrbxaJr5Xc28d4Fzh4cumcPo6WVb4fNyztdDi3veq52t1HESPA9ZK2JZZudi5pVpRD",
  "key17": "24ybb8bJWBp7EgVd2og5XfYUjwfPxf144NwepBnai76SBE5bAnYRiKQifXmjpUd2tvXTumsTpKf6ZnBLPFy7Kr2H",
  "key18": "2vni7KodcmwYfTDbGp92DHumLgfLjtuR9e1KXLhwR4eqSowzLmhUZu7gkrcvydvNa3oPbVZbe42cSLpmovWoEtXW",
  "key19": "55Th5mkPgHs1KNNMzo66swHNGbzZcBXSPtP9Sw4RFTJ8sCyEwRernG5NMCsQ8xK4eWhgyoGBDsyyrNA8VyNR1Vn",
  "key20": "632xi81L4qYYrL6docPRWtwqtRJRmzqxehNdPrnn3M9ZWbSc68taPBqgxqLqYMaTYY3ts8bhUq5VTC7LdFYZ5kuW",
  "key21": "4TqE1ejDCF6CYnvteB7gr1H7aTcy26x5xoFmZNk93GUQ88wzagHzQYKJ4ACYuXT3pLbvfRT2LuUpibtRjiT1ECyR",
  "key22": "34nS7xHmM6LiHTmgwFaCNpmHKncfUqcekf7qnEbEaVE9b32qUoob5NjbunTWQd8NrPnso1Fe7PwBUgy3cKu5wvJw",
  "key23": "CRUSpJ8YWAqUqkwU4ErU5xFTK892w9W7vb74abvXqkDKWwCDbrGDJGiMvE9nfSp5R6ZUTRpyzTRwcCLjwvDfZrt",
  "key24": "QVknPpwFopS6F4vLbENhWQcu7rwgwUjQriE2jXrcci5uj7cgtXT3dCbbteixzxhPs3ThsU1WJ2EcU2Fwf5JeRiL",
  "key25": "3R39mxXLBohCWSK9uMxUck1xXqkRSaV4dyLDFVJkRskUXWeTWw8NQAyanZN83ZTTHLnEMeB1NUfP78tmwpbDFErU",
  "key26": "3WXGAuB9sEb3qMQ78FhnHuE9zTcAzWAWEcahSmGqNXvJVLhneENUay1EypL6gdP8Uen8v9pMWTgfmPYcZvcMECqn"
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
