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
    "3ucH3pAJATkXLcEW6baoBvbKWbzkwhZuFYTeCrZ4TRDx24Z3pTqym7qoKuRncNK7jRaN4qamJVH3UKpg65KgYJER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495PUzSgq7B39i3PK8u9jEqEyucC9ZwN6DVcb3JLUxkRmjXHH3X8LcffdpmGgcono36h7bHWHK9yT53YmzRWU19k",
  "key1": "2rbFReofL7ferTz3eyCPjmMVrgncQabHkznxKTnADj8Q6oKf92zaH7AimXt84yxFSHkuZsiPU6fomdctiZM6HdX",
  "key2": "zDxa7a4dmoeQJrafjMS7DciTEzFghabDzeKuLk7RRcq9EBJXXokfR8WAxzWMGReMzkt94kcJkg43SwD3ShFkj2z",
  "key3": "3zdknKUVWcS1go6oyqFvvrDmRL4WK5M6iSsbojXgcFgkA9D4Tk6Xz5oqix8ZEAcKSbxyPAtmCHubssAZskoQzU3G",
  "key4": "41VCoUdZVDZmAZZhjWFVe9sbUgBahtcqKG9Ewzc7kES2xPHzempf3LFUBsj3b67C4mAPpbcJoj31Sc8pUcBMSTae",
  "key5": "4ZTc9q8WwvFaqVBcvR8bx4BnqQ6iUqw8TXLWGeY3V9cRTn45VJXHA61xGZmWpuCnEnfTkpCX6WT5bQNGWBw465qt",
  "key6": "2aKpk7J8YUM8kQ8TBB9Q5uNNR2b1jKBRE8hxwV51mjX3beDeHzGjqZ9224tvMoeWVYhnMjSbeNMxktzXn3hXmG9b",
  "key7": "2BduKHzFdKHgJ1pTtt6Qunqvytc6hfWbu14z1Jw61PrWKbbvLjPjtgDxs1hvYGgRKGkszQBU5feXHfYJ8PJ9tt2w",
  "key8": "2LwDWMo8mVBm4ZNRXVD9x93vVy69UpFzfz3yGuS3QzykC4tNu3HCEjDk5eFidH1dEppxQwvqEvqTPG86TkABVnsS",
  "key9": "oJbSzBj7FHVB3SngdtS4GJ45PxewMKBiPqhjCseb6EKdKcRaLGVkuLbhRZpEm8f7SHGJWCYtyVBfExQ6wMxV8ff",
  "key10": "NxecEz1VL6xyoddujFgNeBdmfs9h5SDuxacTeGenfegyU9oHCCYsqtXE1cU5MgzfxdHLqX1tRK3HMBkPWgTaP9z",
  "key11": "4ajj2pauC64zkdyemhS9ujij9TM9QceKJU2nK1AWtHmi2SLwtSLJm1DZfMUCiwgBDdqgEQcAjA69w7di7NdM9zRX",
  "key12": "2H8naNccLrTcDb5WhTgqLuizVKKSv9TpQErSBk4gLWEaFYDW13cnRFsMt88ZEUhCCCgveKCCRV7FmTkMiU7Bbtfa",
  "key13": "QAWj4rN96rybPmmtJiQ18XNh2J3xqkmoM6a6qFe28qe1MfWhGvVG3TB6zaDi9uhNJBnNBqaghXcaGyaZRnmb5Gh",
  "key14": "3UUkQd4sVV3853MHVBszp1hVZmrC18QgDnLbm9T2Zg4EgNBBf9ixayaHDmWTeBY38a465gLXmFrxdJtR6wUjRcad",
  "key15": "2hVGDJ1ongtm4y3SYQYoxZWCbypA4CfXCAygQtTQVN8JsEDMHAe9Q8kBUXJYW7DZwwiLa8HtsQQxMsjmZWHfakHH",
  "key16": "2ZFWw76YGAbz7qygbQtEHtXykdsXAsMCgR5bjEA41LktNKT9LPUMAocd9K3KGBt7Gd4XTsqDxBkwQ4hitqeqqdSn",
  "key17": "2Wp6JWRAJTbFAnFK527RLHUzLcBV9LAnYKagADxDmHV3x1t7gbCxWKJEEpu9UxLUMxcwyRxyKrhi7pbAX56zPpNS",
  "key18": "3qaGn3wdtECHrUAUGwP1Y6rwcsa8DYg4YTqwNSRk7kdj9bCNPagJaKorVU69UuhnZcAeDjV41uLw9qMLnhGiMrKV",
  "key19": "xAE9ihqYVvPspAdFjATzXuF9GcoTHbMuUVNQa94E2DM7J5x5tB7SGVt5hfryMpoDSPH8fnYeZTpPT3iVdohsX5t",
  "key20": "2mzfauCsjMmpyRogJGwrqscuEH88mLPgMKSbc6BjovwUaAD4QcUouXyHwRkbKDnJboai1vRtuDHnsw9qMhdkm8iK",
  "key21": "5oEzGeAqAjDG8eKb2xa2pju3HRAAD9KbJsocsH1bDrd32P2CjkwHbUxML6H9tsfqPRYuzVFKAzxknFmqt5nLAHES",
  "key22": "sUewVPcKYsbhv9BxT79d3UzqaGKRhpZ47FRLbigQAtCAUW8aKv59Sedxw8XJGezpYFTmJiV6SAZy4Yb14Yc2D96",
  "key23": "31GbvoZ7PSVRcUmXz3yjk6fxd8LumU3ac9rJYq6DdX1M1ZmbDyURMQsLp12iZ4h9oaPJxvRFDsUYnZ5zxcksiQLr",
  "key24": "21nJLGFSDnzFjS2PLXP9fNucZ11ZAppx3wZgCbKdBwWCmurzfmWqz9spuNGyDYQCPVAuGrEkuQBRVm5oKC11p4yK",
  "key25": "uWo6P4TRUgPg3wd84jiYihydt6NbseoWJHYVAc2YvfXKfLnWodNmYD2T2TyxTixj8yAaV4KU1eGCoUER3myRYNL",
  "key26": "2ZtDhBi5ceSEkyB5Ja9cE7VhewGuG7GNno2NHBjSw4QUPF3cjb5MEefTKEhArcfQE25LWNhoiDcfmDSfbt8yDUYo",
  "key27": "4H44Vz7BWhBdNPQ6j7ZTfYwhM5RJe3i4NqLcuxKUsbKK2nFaiYLEgkiWW9hjJfortKUsh4odwZYbAsFYyVWM5Aut",
  "key28": "49j3uj3ryNoZTPsEdmqYJebzvDLRdm5MB9fV9KqscjKSuhNoXyQRnxCy1UojENZaELS6YjKev3p4sxYjAxyqXHcL",
  "key29": "meDyJ1E7Z5jP9yozDyQmTFdzmujNJgLfTzTv5A4YnocHxCaasgDF9JVxfQSkgEbxQvbFq97EcX4nd2u8FgHWYxy",
  "key30": "4zizxLjUHJBFDhrYjSMePuQZXf818qrqP2gqstinsH7nfop3RSspC9JZFxnYg51EgNUrvYoeMEYCwzeENYjEiQfc",
  "key31": "3XLPaBZat6KQrEYoE9NQQLn8navcro6kE2js2Yr6mxvhzVS9q3uJqvoEtvWKLaxnmvZxcXv9bBHYNAhVPYCc1vNa",
  "key32": "4QzXQWVpH6fBezGFz3KskbAHtaP824PUpJDJ7jdDK1qB8L2ApE347nrDiKYVp9ELJ7eAteccboBURnRzi1X3UDqR",
  "key33": "5rVPDgNNXNybkKmfdgRgqKcJyTXgi5z2xnZA8e9F81nyUbG2KGi1dEM6Ed164memnZGvLBh83qhEJUpj4drRUv5M"
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
