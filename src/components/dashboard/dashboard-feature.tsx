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
    "5DxrC3U6rBDTB81rhDwp1wtZHy1okiCKveJGR2HbbhAUaPPvsVHTJFapc2YPSBxRtcios1nBYG1eByDGg2s8NEb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PfVuvPCC2AT3wiHNV2NVZKpPJwiXx2ed5pUYnyGtkZHQJL67xs9yJ7dqk6cbbAhuWVjoNAzRhv4eX9RY4Y96m1",
  "key1": "k4d6n5xr6MBV782gZJb5aosWzdzxvUFaqTFFS6gnaT24BUoMiDM1aBzdCaRw53yUuRnCfNnh3YghPeFEwkTN5LE",
  "key2": "3NYHiNP5FWwu9nRZqNghU2cEFt8fJw6dDJZKq94sWfWU5hd3KfYedBQYbCjM2JCYfH1znmGKBzbatn2eC1U2SkGQ",
  "key3": "53hNqkxqFqoustXiVQpgYzHM2MTweiRHWL7LmRz168fo5xFKCEmPQEH3ddopfm9kfsypV9QGgDM66vfAGQYWZ1ZW",
  "key4": "4kTLxZhdRd5zUx7pXoKgU3H5VLYt7mcsSK3897uQFA2fF4rP3Vo67mwqTteH3kJ11q1j8JmEXT2sz9xygb3QvFJg",
  "key5": "3UxWytyBorX8AxUQWm9ByxrJyAQgVzJLNmBikijgwJkqvrfruYssCNjGDbSXpWM4VnM3ADBDsSsRwmvzzzxTM4XC",
  "key6": "4zsTKtTgPL1mrsNLjnwGSeDrDVEQ3B3CkCSdkrjHqooFQyRHZ4zjh12X22r2gmcJbA7BxTe5uAoeE3DwxHzrMQEa",
  "key7": "3jRLwHK3kxT6YNJCvcsjCkAHeAieu1Koku51pNhCxfxW7XqcCSHQAttnXACVZr4sjCSjjysbmYxjdJ56f72pqJbg",
  "key8": "4eybY2JRh56TmsDDm1wq83HiQHAqdFHWSm1uUUSokPowDFwxiHx4kf3CWdYKFeaCt4MJ8BBeQ4NN4hX6PUHQZP9B",
  "key9": "2nJtDofreg2HTFJycuFs19uHXmuvMuEaUSxg5VEPfMfVpJgFXmY9SfChLdYFjKXyH75qoeS2QWZLh83FDPv5ii1o",
  "key10": "65DkrpcQ2h9akBD6B6QYBD1jKartpdP28CTjv3pEJx9d4a5PTeWvEXw9df4ZJcfTbiQFScd64vknUm3Y4FT9pC6k",
  "key11": "sB26nKqq12uUYfNJQgw7GYZJF5xDQNQ1NtRhDezTUBT8SLQZDM7JhhDnka1FXjnbr7KPq2oSqU6TwhKZB8CKhMe",
  "key12": "4BJnbfqNgE6Xovhnawpy6FLqSY3RHMcpkG4HDMN7hVd9HbnrBxyvKnBEfNHovTwNrDGLMfRzuJeV8A2gwGquriPq",
  "key13": "3WufEPERrgNo8MKsy61zBZbBAte9o71T6UgSxHA4XwBPzXbR3yNfkhA2iBN433z1cXqS9REvgVZL269zxN9mAzDQ",
  "key14": "36wUhkQSSb4PrRgkc1iD8Xn4JYjrkahg9t3JgkMvkzuQhrcwRj1j6Kg5ufZCBcvmzvs5GDoDcPJ2U2LmZqxUFzoB",
  "key15": "2KczoV9ZsUDHGQSoAfMXiz4qnE7LB5KokYYv9cZNa2LTJPtHFWHo5KkMyjQFEj49aUTVLHmYczKxsoKnEKiwD6hU",
  "key16": "4MFqAxqXRQv6ySs1Ed2jd75UNXptjrHDJtuDymhXJ46hvHGjLVf3ctELQAMCidt2yFi2fpyFm7oRzXVcZYBojtkr",
  "key17": "5TxnMMWQrC8ZaDoEnYbzG46zZWAg3wDEC5krMYpTzQXb5XH3QgU3xkrkXpZjv6JBcfgVDxp3285XbDw1zW3ohY4E",
  "key18": "5z99iYgbcGXLyWHqa1PNF51D845EJ3z4q7uQEgWrYXCx9QsFnbP3xiaW2faUWZUHz7LBgsdQXVHk298GoWH4xruw",
  "key19": "3XVJFgHZSk4DfVWRVbQXsdbDpoQ88dGF9mxoJ4ZXGhk8SdLTXRw6x3b125JJPQPPue8xc17SyUF1C4i72eePNzPT",
  "key20": "Xwx8uwDYoaeX2NXknaY2L5V7i1c7VJRsRx2WwJ6aXhMK6vgL97QRW6P5Jm3t87cmyzNV2RoWWRa4gSsaCYP7BQc",
  "key21": "5VfbvyCmiqpW1CosQQ5A3Dhu16kyhMNnc7tsBKPb4strMz4KFa4xQdgJU1zANwoDwy7ikWXLJX3omxA2uLoZqRrZ",
  "key22": "4weFNJ4hSYuBXk8Y6HGEmZZYjwZZrHLmVSEGjKikTNx73iBThwe7RSfAz67ExFY8uANBsnSBjKrePPAZwRKtTHFc",
  "key23": "MPvP76mBFsrvwenab5bFTniTc3DJDjgkgvRDrimueMsMkZnE5ZnBfCEhNoA3fi7AU1W5LpzuwFaPGB7ZXPABHb2",
  "key24": "3Vr1mgWUnx6Qncxn7AS2CVZCErhmhgQSuEiJe2sxJ9TrqmfWSd2SQrToZWDPbkYuAo6W3Ci8CreSFwo9WEaPwJm5",
  "key25": "95X9j7USxKtE33MbRwiuZhsk3TrApFAjQj5kZSFbFQzZ42ryur7NdY512qyzTLmA6E8odSnzzNchSjrHy9zBoNe",
  "key26": "3ywkBhHmiDQa6z75sLdZzodHq7iVpbYyV4hxXnNVhbyZSAJyJ5VkmWuMUkgLsB19sszdegZBpFWQSzimVkkzsF4Y",
  "key27": "2PdrVvcY8Vsp7GDv6YcAdR5mkvtMWevMg3W1KzNGwsUxiSaSQEVmXpqpMoZTqNLc6B4j2igrEdmMJvKJeR6kcQPS",
  "key28": "XkQrKYag1MK5EfAECsKQRznTiJ7var69P5jTPCieLa4c6bLpcgRweadjs2zQ11nvw8Ay8FrrYaqimAgEFH2LzH7",
  "key29": "TXmLJDSboxnoyaDnU2yQzkNnDiwknkWmyyJqWaTSRKj5Kb6pNmoiYZhGfqUsGzoVvuWGsDJ57iLnXXRmzyR2f1S",
  "key30": "4SpRGZ9P5UiqNGgvGPsBCXbkA5td87a2j6yX43TCKBEb3mXiEgdkXEqB1q6ipFTJtDPmb2CTBXbuDdyeoA6wSj9t",
  "key31": "2tFyn4BrvZJRtGmwSa66Cnw3b7gqBaLcma5vcQ6pgPt399Kf4MNkT7jEdqQCZDhucshyt6qLdpRtBaMfthnXtwHg",
  "key32": "5fzLqWHMb1PaKa6Ygx8V2YAtUGxY8SmBmUZBGD4TcjAEFMw8bBNoXEckbuHUTobBX2a4fmiXb5Xj6LkNEmoaQY9B"
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
