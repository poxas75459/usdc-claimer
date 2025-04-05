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
    "3ss7NT5i93p5LSqsPvMCXywA51eSXA9xe2t17BpKkHsuaq2YHvqnj6WqrntksPyVTJTyuRF3htb1Pq7YUz1ZJmyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQHxp2R1PViuLTAsMXYQSdwNMH5zQadU9g6oKtTi41BcDaeqrihfcqATtinJjjW7TRLFKLNyr2jDzNVEJ5BCy7u",
  "key1": "3pnCrejLJ8jkuAsE9jkMxQbBiH5fZiZGZB1k2PPQ9UEWvLnuPWRkraxRsDvWCdNTsYoipKqG2vt3hFhyQdPTnEYu",
  "key2": "4vSN2jgPnmGpifmLM3Lqzc7E62JyqxQtCijfAQriNviwndCcSpeLoPQuxkUCrT2vMbaZvtX4QGimwdDQ6qHefRi5",
  "key3": "4YLUStmTWEm7PZM3ZTpXje9oAfnaDWZDEfj2LxChC9j799LZxR9bWX3TkEJaj4r8LX5Lst2i9Vf7QnPqRjtzU14y",
  "key4": "3HRuZgB3i8vTbkRJuUc2nERqeNsDe9hTArjVXnVgPYQa2ddKcDH2BqHTzdNVGm2qfoBtfRufAqDTpEQ6TUfYYSZU",
  "key5": "GM9rudDFV1uwUBjAjxUvSTmTYcWKEagU3hxZAHxYguDHeRib31sfuRZS4UiiuuhJKNykv1GqhfSaBNV9Pou3kdQ",
  "key6": "2fQWvBQxck5wRFUbnFMDx32NGyabZfqPsGGoVxDqXMJye6otSiUcK2NbxVNrSFLjFsGe57tcX8GG4G6rL1YukjDn",
  "key7": "9jGsrgMg8TcS5X5WZwc8FCdppH1kmX4Eiw3zkaom8spxX4fqJzhXxzRWuQA4hvw8vgYYngX8ydGQRjfdgxRN4jJ",
  "key8": "5zYU9nEjev2Kqss8jscGVHcVLXNcvdzFPtKg937TeN2QqeUazf6MbhfMGnid2CywTqZepBdiaGXjRffxu6tpiE5T",
  "key9": "4ixdL1GTWp3M3UmoxA1VW3c6RBMx56sevwdBqx2oHtgYZ8qYeAtnCUnPSsgfgMn6ceehx7nUPu8iRThVSnXuD7Wm",
  "key10": "YmeyY5P2eXqvD3yTwf68e1aQTj9uTMfSw4WNUei9LSfDHtqCbdhy4X4UdiMx5DQswm7fCw7ZYFEKVvJWRdWdCKd",
  "key11": "2bKuSupL8nRWofqoY7X89kdCTFRYLqgRuQMsKh1axEnHBbXvx7wGLMZAeny2Nf1GWrSVcvX6H6vmZiNvdYBScaVM",
  "key12": "4uBUvRN4cFRj7EiTJyKdPvuS2usmZoUf2KLGz3cPQxGbrXkiVfzu1ymLyHdKxPrVQLcg8shWhga6EjvzqWgeD4VN",
  "key13": "2zYf33WRwi91p2VhkB7aXgweLMVm3rjWbp68SCjFFD16Q11FW93xU449K9SBMFzaK5DyczRBHUeQM1MVM2reVmfY",
  "key14": "4HDFZSFuHqkQBxZVj3JZ417JTSxpuFyGAQnhxP5ftkjqjHB7VEVF3VyZxzL7P61SRMJ3ZKaybpbQBpZEQkuJQwdB",
  "key15": "5kgqv3JABAfMQyVCX2nWtga7HKdk3nhN2uxWMsurXSfCf31cV1Te26EzQXAsh3xV926918WpWhZmUgEyCx2bpoWB",
  "key16": "2RiP2pEjhRZQzqbEJjLkNKo93MFRaj9WrWNagZBQpFS47iCabmE1NbDzyqVYLXGNUerRfJ6MtiiKJT37ZqwvKfZw",
  "key17": "5LbMMWD8ARWUuBQUu8Y8xAEvBLQSGrXjm587ArKLgfzUDeDu4AtL5Qd9i4jHu9dsFSBjXULF8wuHDEN9DoZpU8vW",
  "key18": "3UaAsfJTj4Gp2GJRAVaCde2dvUVCy5TxPo3rnP8SKMSvRuG87brQXUgwbAoTv8drpzbQoJz4Qf8F9UC2w8eev175",
  "key19": "47ThuoTCtVcP7Di94q5KMasXoes6pZYj5yZHvsT1Ke5wgmkicA3oycevbSpqQhY5Phh5koMEbYeJfwkw5VBGiYHG",
  "key20": "5PkTjoopXPmW2cfZuZKXi59qzMAsJQpRrLpRDgsm5pJixv5ykwDvtNrYNfnQjA7mkYyRNvfz9MpMSaLCGUxww16c",
  "key21": "3GTxnf842DjWSZwNvFZwUUmP3MQ76EAW31W4yvqfj1ThKZJkJ2m1oKPsFZk8HRst2b7eAh5zxV391dBpb9jNBqqm",
  "key22": "5aAcTjBJbV9U6EACKvpG8rCm8gRV71mKCCDQWUCEALUZjafaHwJsEc3vcsuELxrboX7RawnouqLG1ZdzrT9pHVKL",
  "key23": "4fHiGvaZmEY5tEQ4Av4TvzLtWUb6Se8dCfzKs76aMbEwL3DNVZDZ1YxW7ptWzPo1wBUdtgsZ6G1Ky4WAhktQj96z",
  "key24": "3rgRvycTUHnT8zLhFmg3yyeJbUjRL4FGSsjvZTdNW3yY1eWLHoKkaG76hT2DBdCX9wTX7pnQwpCSPQnE9YevSKqG",
  "key25": "2EySStzHpv8qToocKxih9zVw9HTXm2qsnbsRL8PXHomwqgjhgahPWA1dQDGkoyeqrL4eLtj6fde9iFh1HuVbF5Bc",
  "key26": "uXto9kaGpg4pQTnjaTSdGhT6RodAYW878gBErstCvxLXdJGTePc8enenuTwiornLMTTL5Yqo4TxfJDd95unq5We",
  "key27": "wqqyhi5og1U4iet1PKnDyqyUBRMfjJ5aGDzu7KL5ySSsVTHjjGML5vHgKiC7RSUDoSADU8NTNV9nu7yAqyvhGdU",
  "key28": "4N4VVJyQvRv7HAfayNsDUwwn1i1QBpchUxTXJ9w79aNA9migPT8AJqEEYaaWKLrXcwDHVPaFmHvZS2S6uCC4EyB8",
  "key29": "A9CAbvB2v39ZjsCb3ouPxUmjKPNYahyGjyoFWuyGiRQHuaiJSRpCqnsxbEu1hqC4DKbuDQF2gBxXFXZxpQ6cAfy",
  "key30": "5HSHpw9shppy6cJoUqKyVnYV3zqvzxrGRjY8FStGYtYtD8A5qB4AaR25axYwcP1rMYK1jrXph1C1341B8rWiz4Ze",
  "key31": "3DZCY5BntkV43BNjpfEpcU4cdBymR3NN8maEbP3MXMfGuoHyrwbpHjGJmJxaqcxah1hvMSs9i4opEg2gubL7ziYi",
  "key32": "S3Gme4G4ZKEUhSq4GbSe1GAnVm84svkewqXD8wttNE5XATroSrRnsAEqjrnZ3Gx9HaKyQJkXsvmcnxazRfgP4ms",
  "key33": "447eMmww54KhYBqA7DoccdMCEKDDuoLgji5wzAgZWKXvUWaAhNiuSVcVHPZq2FC1AgxPSboB3yz3sHngDBUxsNm8",
  "key34": "2MCFYahMXnbx9p9kwyerSTiM51TAuBJjRx8vZtRrdEGwEWNgiNA2jNSRwy2NhXnyKi44QYxqowRy88h36XFHAwAY",
  "key35": "FVjbs3BTr1cqVNUQaLi51Q19qnZduemY72MgD1fJvEecHkGZx3fKjjVrK7vgvAn8hXH6zYf3ej6epv3ePUpkxX5",
  "key36": "2WittKswZmJwu72A52no4Lyt2TLz8VT5aHLUSmaqhcn2F2r8ub2Fv6RiuS8wVBHstvrAy7hA5FFVHPvVBAnFpfDh"
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
