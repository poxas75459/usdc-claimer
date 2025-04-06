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
    "3KpR1AymybAxpLrQnSrS9ekJAAQemGB6w4VEQ79KY6S8eVS9UHC3RdH64GEgNeGwwoyr63mZfzRcLiy74wCa1Ae3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxfz2z9xJkYtauWbg1cyUy9SXs97VFRwcP8gpWPEwrrrwfQR2suhoqDQYK55qC3sAknpXRgNmWR2eXrYaW4GnGY",
  "key1": "vjMDcjw5euvD2r63Mqt9adGgFxJwJWuyGoQmDa2cZaDcA6H3N3zDU3wWbuFJtFm4FrN8WRFrE5RiNjwYhq8qz8p",
  "key2": "JFBkJ2wNup7oiaaiSZwFgSMex6GynWFYgjRRYBEY3ypsZCAx3HKRVNU1kbXXPQSNhLZzw3etgKbnnAk3jfheTaH",
  "key3": "5dhFQirNYtaVqu3TQy3MWa4SE8fP9MtaaRKh2Q2bmkhPS9Brs9Zuo4ari8P4QV5CpRJziWg14waQrgrEerGruHdw",
  "key4": "2YB6MLEG7boT9vD5Fzq176hB2YN9bffL5hfSnB5VqEGNUf8ZpZdVY8SboUjKaMjyC8mr9biVz64bQryKJ6KuGbgD",
  "key5": "3LoW2iEXUWrKnsY5xQhfAQEe61YACPBts3ZyZVDeUDVfuQAM2avbgfNKfTe8Z8Y6sNcxRaz1tczTf4mhcmKXjNtU",
  "key6": "4aJsq4xGjSFhvKXkDBrZ8Da43WphMv6RV7rUijkRKM5T1D6FqpFQBgr4yM9mhPorQYx9xcyNfKZyB44jFWxsQ2Xt",
  "key7": "5CTNAVZDgDxrtmDbc3mWQLxXRPN91qavsjWYjidZNJFiaixqeJLGjXwAXGYh9wbsHARdPGst3PLGRqKFtXRVJqZK",
  "key8": "3f7nKTMDBnq4cgsxkhsrYmXuqi8GFT74VHby7vmGSc2Tuzu1JK6TwSWNXcqsVZTo6NWSx9Hrs8kkTE5QvzZYJbe9",
  "key9": "63BLVHMawvEJ7wY6VkoZSTkB5oYgKvG27hAwgfHd9HDoFkDvek8fSF6yC72bYcZBFKMWLnYEF5bCCLFt7HJcqorG",
  "key10": "2ouXrGZzNCEhVBSzMhHRramTBaGjZvyPQdgAbVpTGntTDcw166AHEdf4i127eSw4prK7Le4ZmJF6XTxe6x7huZuA",
  "key11": "2LJ5cUDQnueYhR4nhdwF8i4x5mi6spRRiWV62AXEycmdFnQ7XbLhga6Y5xYiDBzfUcmNGvZm69RJb8SkW4bGzP5F",
  "key12": "3cWH7Dgjvamba66xoS3zWFgKNSQ4tuTuAGgFKp1DwCgqDp9u7sMjifmPHpFq89Hn9j1VJrvxykcqd9j6Nht57U3j",
  "key13": "31TZLK9mngKQfPRMvyZkq8fsjszYQM2oWSHbH5gWKeCQbWp5M2KGp93PY1uAPXDBdwzbYgievjB2kAJxu81K7Sg2",
  "key14": "51WX9u2GXtmGVsorXHk7T2A7qnRbNBYUQNEEoa4dVQWd2oNTj5SpDp2pWFezAStCuUEnf8bC5XAnVR9Ut2BmthHs",
  "key15": "3tYou7T7fzscX1AFqXEyG3FejxqhbND1SjZ5z513TH4oXsyDGwyxUt4EpPCzdsvL3dSpmGZo56L4WDTCCR61Sqay",
  "key16": "67YtVTQu9RL3MK7xJVthBzPUS3snhd2A9iXTNUyqo4iNwTugmtKdJ3XizS8poQhQCHhayidMVMc2skrnprBPRenp",
  "key17": "2G6decZkCdJeiycsGd1rtH53uAjWeUkSyxRgjbHuLWVowf3FjE6UgGJsvgaXkHzCKc5mLCCmhx69DpJ8nvANznNZ",
  "key18": "2QoyCZztbZU5wkeh224gHu7wJxRzAsAqbQocSKgL7YwfirqdFsq1fPizwBfp2dCsxkRfn7XZgcki4UjQKaQLuSqj",
  "key19": "pctNioVyWnbFNsMCyAGUdTh7S5j5KKGT57hLfNoubntdapT3t6LxRbo8maAgsStPBCHkwxzjpy7HWZVAS1HPE7m",
  "key20": "39ZMy5gukdpTob1pR37wAngcvT2d1pXKSjxwn7yqytZYZhPzEKtCr1e71sivteLNQaW1rbyY6J8dvczvXyZemp4y",
  "key21": "2aJCDfLgHhw7zPxdUy4bFQhLMzyxfgU15dg8NpjedeHWV611YQjiXqkfNvz91Dto6EME2iFGN7BLwwyrAMcVjPPM",
  "key22": "3hFngbNh1dX8eG3NWhzroYbz7FgPubv8YsEKpJ7nusPZpnAJLXiY6S6CFPWxpYoZJ1rXbkD2NhNyLvepHWgc4g3e",
  "key23": "yfFu2hhoadi7SMG2nEJ5QH1GeDFgi1ePUrEaid73nDpJt7Mq3YP94FVdBBA8hHY5E5Y3vjex8Mw7AXu3Q1DKUUF",
  "key24": "5D8kv25srnLuBMPBxw2ArfYQtjkMd9LjUKdXgTjH4jfTWG4wDZq5QfpGq1WiKnpM8YSY3avQkC2SibucDGpFfMY2",
  "key25": "4vX2upAREGQVctnrVDTRmoHaJcYvtC5uNjrL7WHddPyYp7GjCcdS9MtzGV8m5pPY4HMdjTTXY62m7SUzcY5a1G9e"
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
