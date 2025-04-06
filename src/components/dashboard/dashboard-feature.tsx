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
    "gwm1547F1hvojmRX5SWpWw7EjkEM8f21V2vTTakxxgJMtUePDuP4KwrbfphUKdpuZrPPSa1DLs8VqPoRF5uYZpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rt9gEeSXFPbbfRujtQhemRzojoby9e9stkouhHg8v3esckfBkf8oLeZzWzfsh5SvtSvC4cvAgY5v3aFPPoXHkdN",
  "key1": "LRDrt3wDbZJnqW76zmw9qUmpDScGp3HPgk6dZDRCz6bWV46NK9R2rXXcVuvdjtQg8cvvU9hF2JDj1osK3B18d3b",
  "key2": "67WkvZdo9AYA7A5CM57P9RQd6gtogJhW2ghe4gHLa4qB5gVRueSZ5jgA2ziJS2VEeafE1RzC6B85b52KciDbxFqK",
  "key3": "3aFMBQ4Cn1RgjJPPTeuzJVLsjUb6Y1axSdX6ty7J6FKhtHpZcsnJJcQ1exGi5xGif4JDH8intPubpnw67yZDSZE8",
  "key4": "58BisL7cFnc1pwAVPMyRTRRjHLUsGRVmF73UCiy4whgQj7vaXPLigwiaNQSeVDVhWdiVnUFhvHL1aqEuHZcyGck1",
  "key5": "5rhVEVekUrFqVS6QvrNxzgU8b9B74RqutJquwxczhVy2sT1wsSe86bAFeT7JxeZdfKx6AST7VfjtKPh9YWbDVseh",
  "key6": "5oHbX2zfCxpsPQcjwE4k9QhpkXZLNuVTHxzMAinHJ1gpt1zmzD4TXJWyfAYc9ZRVaqwEi2DvW6z94kdad7E1nCmv",
  "key7": "44oCkdG9C3p5X96YQ1uW4vbXumsb8ZcRm7sEieuqXukTRdJ9mS1D8Voz26XGcsKb7bbku5uFHbSFbiE6GQLKENMt",
  "key8": "5sj4eUBSsciF4MhFWvrfkoYEX3cswDe64BCgRTmTqDWFaaVj9pNyYuT7tfVRHVDxm9fzGyZcxUJhEMaNu4LrD23G",
  "key9": "4Ud2GSQnuUKAPJV6kn8SZ8dJMkzTW4497PRyqJ74iau8pD9Q5arLoe2wdwmxB36fM18K1WEPXKPsKvGQNveVF1rb",
  "key10": "MKqmELEaVmeoM1BCuL4NvyRT3JeoXeBu6AMLzfu7pidZhkdrzoTZJUdxT95TZbCvBc5ooy6LgNNmbyfoqiws8D9",
  "key11": "Q1nHdaVyneYxHpuoaVns5RypGqGbQo7yXRQGbnQ6kJLFEkSWACwEHfuA9pb8ddrerRxfGX8GGAXvLqocxCD17xT",
  "key12": "3j1hGqoVmDGRSppEeEznvFcPysF9sLaXvRk8Sbr1XwVeRUA8TUx42xhAbYjBv88k4cPyq2AtEt34BVXbFwCAFmBh",
  "key13": "47r9TDt77LCU1DmCdyZzuCDWBFxrmgLHvuPjQ3o1Xjud7U1vs8vdKSMQB78dtGoLE4B2UVG3ddQ3E3hVbD9wPBr3",
  "key14": "4fXSd33x1PhgXEzv7kM7zAbey6PjJ3u8YT9JxM1pqpWhpNN3MLsdPoku2EwMiT9AXfCeH31tXQKBmTcBL9m9iLuu",
  "key15": "5SiRQkE7KLPCjC8ao9R2NhgqhyzqDP45P2ue6D5tjz1FcvvhXhEW9yj1CMBa5rHEqH91JbcoUFN9dBZDSJwH4V8b",
  "key16": "PhRFTwKr9mMMs1vthEBGLpUoyAHnNSnFtpmzbSXMwqSqg8FVsaAtoedRMK7Ve2TydC8HJZDeD2inVmGfaT7Xzuv",
  "key17": "4YuAZDwSERYRhHB5YPAtfaCXjmGFAKmLRgKsKqMtfxYwWTDKVN36LkckX7Po4FS9DT2xT6rGXA8otjM6a76G9Ywq",
  "key18": "3rH9YZ6rWxvPrSxmeZoJXMfsDKj3d1xin3tcXbZif6g9AzmaxQcvHmJvGxVFjaTX6WChNsA561hrcbY6BNniEaPn",
  "key19": "4P5XFNtTqC9acW2PtCv8QwTmXi9CEhnRknT45kUJaMT8m79XzPuHyTMeo6QtfPpZQKksiwncWyCa7DxFu71B7QxL",
  "key20": "bfRS73BReTEUgyRKLLMXVQQ9oGEKS7yF9CqhGJeuqGCf9vjNhJDJrXpBPLGEgsVuMfZeYpwzomgFpWEoJiXZjYh",
  "key21": "5XdP7P9bhGevjexr4zZYmSVyWS7h8Usi9JqGictJTqyBnFTXcPufNWP2qxapVmrLP55xPp9LJ9tkiSiA1ZtkFJxb",
  "key22": "4JNiZooeH9x1SggprohVfdhQX1XNh9GSdg9vWkj6QgT6yQh7iA15JRjuqcpzFPFjZMxUBCuqExM9EvMGfQRPZwQe",
  "key23": "MJCPCUPVviLLjHDm9sfoHtohYYW87GzkdypygTbKw26qpFpg3pG1EKSKwr6efSR5A9duy2Yy46VhDvfqDxcu4ZJ",
  "key24": "3qEDso4fZ4qyWRuTMXvzqV8zams8govvDLS1jLE6aHWFhXUMcpj1VHBDkPFnEeZazxgiZNhscv5U2udBXvXVZzV3",
  "key25": "U5xDP5Xb46DxFwwnNEycjFDpqgz2Ex7vpWScJuaZmXjpMZwGa5VkDPVjRroVB7z4uFP42MuKqzg4hSh79ooTm7z",
  "key26": "4om1SnWs99qPcSTS78z779XaWJt2KPn8D8V7dW4gMvYuqgPS21DXxGpagiE9jwyaUje9PEG2siLceSz4HspUJUHQ",
  "key27": "5VSuxfoPaXWBhMsT5agPqiZT1zokjykryyEZd8sLmhehsJY7nXmoG1dvcEaVhaF9cnrQ84yjLcCGtqzHGT4MHKNR",
  "key28": "5QkXnLDErbJ5ic2z9bVqDj2CUZMs3aomfndwqLVE4rEaYwSjuFQN3q5GfPLFZZC7hcBBoEqz3bRzVjSZCt85jFhB",
  "key29": "5i9sCHkZoTjrSaVsmvk5ppMQi18ftKid8QZmxi8u67H5bJAFDAzqkkZUci1nxcZBty63K6nFeQxRffuuT9iqhi81",
  "key30": "2YjZy9mjjHWsf5E4iaRaTTZ11RtXvA8o4zhQRK4RPvJbyshUCVw6H1DQjj1qoxsrNDuT98Co5BsAqRLfkPp3QEk",
  "key31": "mYq7wEMswFPTKAhyjQvX93awHzKtR3P3W4ZSodaFJqn9fSNqULVFZduV3dwLQY4Sfm5DcJrJT8HCNdUGeXmT5AF",
  "key32": "3WzhTin4EQ4KMeuFkGPWovQF3FyZ7T6WmhJPL28GRjFzYHYHqJvnP37XNVjHL6Z23iD95LpB8UVpyFjSaKrz41mf",
  "key33": "2jkNHUx2aCDL6qLrzfNnzokfc8ypNEteC78yz1nKWvDfFC3z4fAiQdbF4wcXsZmXNNLoTNMqv4LwskKoUrQX4Uic",
  "key34": "4GvfQnfmvNFuepZDLHnEMmp5zKe8fz2oCPk95AEpam33cSfxngYPzByJMKGvPFYrNJXAunf7tUzsdR2rxwss1bJF",
  "key35": "2w9w1UwEpPKKGETfrLUKfr6DbpK4SNtvv8Za781HYsZZwoTDiMwa5tcM11onnj2BEmeywsKK5ra9jNH6Q1om6b67",
  "key36": "5FQmgPKA7DLQoSXK7Gqh1w4WAthCeqV3XVEF7MKattnYebUUowQWeKtngCxjKSJqjijEYYYLkkcMJ51oCUHKFZ9x",
  "key37": "2TooYCQ8Ja1HJULoCNnbao6PDG3dERhLfrwuVjS8CZJGJFhZ4YjrQF6cL53hiBkyPiwSbDYyqdqvFpqraw7u38oP",
  "key38": "muLYr6WdAJTXVqKvYYBkiY6PTawMeEC4iAeR9YzzXF3buwYcaVkJjusfXZGPFKQGn6DzBrHDxMbfvePdLf8Ef7y"
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
