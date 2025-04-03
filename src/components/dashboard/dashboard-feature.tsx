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
    "4DyfEL92fUFSFQzwQWfSVYrSCW8Es7WBf3TCi7qGL8Gzn1kL5PJfXjTh9ksmk2NuLyCY2ao7tDxJb1U2wVQy5N4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pftch3MScKZVp4pnZW69XdTqZKmyarBZ8U9azdmQVFM1ti2AehXgA9e7gnAVx3uaYawiBhG7pZN44N1bcs5Wa4m",
  "key1": "4APJ6sR3thbGxsZseaG2D7iyNR67aKNreKszjN6ATq5cjJM9TLmM67kYSuu3ciYDX9xNxXg6SRpbqNiuE3EyAA3q",
  "key2": "3iXLfJJxKRioyLs6o3Qv3M2EkoaDaCpxg2viZqRTe6JiTT7SGSzwYU6TFEapgPot4f11ozZu23nZXoPBTTmmoWiX",
  "key3": "5tbi8JdEF5M5vt5mqdEhm76zJrSKkqPafU69hgWbBvHaTAn87Yz9XHxdMbpvBWZRjXxNbso8GS8o1XpPhRdE8hXR",
  "key4": "26Li4SstzbVkgCzDB76rS2aUXNjGzCRc5vuFXyL4ZFYgum1qpCzE9uuAXcCSFx3B1kdg8EwNiwssW7XgTug5h9Bm",
  "key5": "4fckTVQimjwUteKxkSA7PdK97CjrzNHsPVggQPAzpW1Afn46UyemBHqUC2prWXpaGDxYtsmA9BCjPz3Lv72MTR4P",
  "key6": "3aVACHvff2ancBucnviyrJMoQ8EmTtVsZDtbcekEwJEoSEVuVFshqiK2uPmRpbTYZu54pXoUC7GpcVSoxF8RwVxk",
  "key7": "9q55tKyrRQuJKq7Zpj2SbPoy3b4frdJw7piN4K6PjHWxR9FuuXKsgZZZwM26nvpb9KJA6wV9aJqHNeFNu8koPHh",
  "key8": "2or2sRcqpHVommrNpZSGH9bHTK1fkP1opcCNFuJ3URXGj3uV9uoHnnQkVs8uiTnpuqZAJUCLiSPne8gEgLEg7tLR",
  "key9": "3goAWLWynwgTjq2aDAk2KZ8GZcgZuFCH8fQtYv5NrSfT66cPihx2vG7gQkqPdCBJTWWtxjZVTbyYHJjvTAyMNwfK",
  "key10": "2EyMJfYAihLT6n5Ps7JVWCwroa5XBcdYon6e8rCnaH7nrXGW2q4gDvb4rEQeSZnGJgAuUKD257kdQdiQFG1YSPWt",
  "key11": "3xVR3H3cqCYyQYzFyLy4D7TnLr9iaqXdrr4DtqiWzd6NnfBB91QQZLuMQUKgk8QhMoXsEAKMrhQySTtapfMpXPgt",
  "key12": "42eB4bTm4NHwKEtKfsRCwWZV5oqKxCqt7L5HWd8evwSwL6wCJsZaaZLWEQFcYVURzqdL4VPmTa9kB841LZXkovQc",
  "key13": "5S1nqu4pLwdP1tWNEBijFhHMosF68fL1sHUGhzAs4KK3o5U2mkwqmfRkXdpcGcYHE2Eno4PuDj6La66FWwDyXnxK",
  "key14": "JaZd8ueaMx3VXZdYT6PTXWqe49sLA5ZPju8vYemx7nYx4yca8ozwG37AawRRXcE7wweFMqAiw4CVqrRdBA8CfJh",
  "key15": "5c468BuXkCFSZZE2XpK5kfqiAk5NdXTjXodzroGop2EjJfBQBr3szKWByaYK6111coYmcUaKucM2vk6sNeyw12v3",
  "key16": "3ik846eQXWEfbNhZgDubaBN63Dm18XL8zgmfuZvZ2vpEi7F7xwbtEtugKW7Eb6gSdmgDbtUD3FJwYH5nkidik993",
  "key17": "5FEMKWXcqqa5qWyfeaScDDQ2fB6jZ6WdK8p38i7qAiwJPpjSRt4ceH4SZXrp42ouEKnZ1fSCAPwEfrAFR8cudQEc",
  "key18": "285HLyK7y6K2PZpfEpBjMWRen31c1it1k6knr8GE2yKvaMJ4T3gSRVtXLTR9dtuwMqZXs4Tq95HZ13YDFxvaLV4Z",
  "key19": "4frbmmgE9AqydDPxjTecWjQAFQc9iZYUShhuNDwJH7WmcQyhM7SYkoU3UDUNDeQkTydiTdHQN3orhvpZBFueYv4q",
  "key20": "2t7jsLcer7JqEJtgkEWE5EohSjsHsGP5mh5ciXyta3M58bVFEjAah6JgWSqhMTM2yJt8vZQjEA1jWCnHarCqRbzY",
  "key21": "4hVqLiPcM92WDPLjxUWCvaSknKCqvAWkp8159EDzMfqRXSbd2frXsbeL4TFVuS3Q2rkeoBSbwvUq2TvcR6T5snm8",
  "key22": "3ETote9KmmoQdJeFScz1Es2hDsPsPbEprDbVG154QZXoHMVmveURwLjFbieS3gQgVNgAGnQa1G9bD1ARZTtZJYYy",
  "key23": "4nzh1nFQufHYVjCgN7EqHRaK1HJPLrZE5oWkm284Y1xJiwe3ZHSNYGMs51BD5UTLQWqj6ZuN6ft9vHH5az5ebjMw",
  "key24": "5LNEuMwWYELNmvLX4C3LMBxpewCfXoRLX2fVTYLBBuhV9uAixjjmQfTfFKV6CQw77R81tYedTCuh1GqxuCuCzAsz",
  "key25": "57cDuX7mM8S98Yh7w3V6PJBenMARGbEFMd7yFxQy8Spki3Yc1tJMtKXx7Ar8VAHSKuR1FEqV7ttcre4CXbbCQ1Di",
  "key26": "FVmYF8LJUVEFQMhkEufsyJtHj7PNc7ZRkCScBkdoqqzBWTskiLoBiEvz7WQNpWqe2SBpjd9Xm7CGEJQ3ZXXe7St",
  "key27": "3gc8SH6gp4oxWLgRVPCiB1qok9zS8w4CLVAfWv2e1u46ms9WeRwaioXTayQmkTXoM5kbkxuCzU9YpVZ9pf5tTnXf",
  "key28": "3uTgbjZGvH1keN7oNrjF2ojTugiJcwcFRN6Lj9E5uRo1Fr77eVR1QZsDJQJ21fFHNmBEwCB2cyBCnTX5PnVJ9H8f",
  "key29": "5uCd62Skq6nGe2oNbRLUGjPzud6HJZTGCFWDuQEHgVMKLrqdLv8CrW4NpbWLu5kCQzKpcJ2fG5G6uByU9LsjnCVD",
  "key30": "3jYfSTK4MXbaaRwCcskSBdk3mchjwpNtqkRFePwyjoWdNhfGyfpH819evFpnngknuXCADkBHQhT4gbPodsKC4veU",
  "key31": "KHjdtBVgHX94DCFKGZ6wYKiRcfcr1MQtzL6W1qnsVQ64UsPpM4rchetQy9fdC7BMZQtkrgveV6GPKp1EEX5Pm8k",
  "key32": "sxiwTW34HUq3o6PgqN1ZPuP5BSqELuVJokSmah3tKFiApT6emUZzZsmcGbmCK65VHpJszWzfHjaAsYm28V265SW",
  "key33": "4bwzWzjW5ArioADXFodaJm2CxEhwVDa41GDhVwD39XqQ6zEMj3ZBTWkJvigMvAUzntFJ4bgosh4wp3UqhCpMRKFH",
  "key34": "eoYvMoczz731fsmudXa4FCTz9GiihzeRPCc454RaVCzLoSHNUS1aBjxoGcUXukWQHMFxQq3JZjVWbiXL6AhNEAs",
  "key35": "3RZALLkqtUbyRLQ4gFBqh6xr6tnGu4KT2Kxe7Yek9Pxu1SN55ZbNkgDLqvayBJ7KpNfcRfwPXd5w65JjJG1oGupv",
  "key36": "5oDHiNPFyJDR13qCvtbMbVGoskUvL2hEAiWoPzfJR3PkGFjeXibpS4gP6JwgTXRwAPF9eZ3ijVGU98Fb2NsJcWhh"
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
