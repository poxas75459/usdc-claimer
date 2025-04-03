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
    "4nXvbSPFdzfrLBW3rYAoV7VXm1SS7bp1562m8uqeHNX3S9sC29iePjm7WWJ5N24vw64MjQVAHZzu5TXuTku2eJmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kMUPSY4LujnAzxY1N2t92w8wrJNWnRQqw9kE2eCqYaWdVjcgk1Au6uTdjXorZ68UsZButR9RD6Dd7eDUviVdEKR",
  "key1": "4Zu2kj3mFwoAPuWu1wUy48GTEeeC4e1PUnoFRtL5nzZP8KCukrN3kfdigXoCqZgsRpokxrSC85kZR1dVLFQU4EvD",
  "key2": "4e86N27jyhAVwyfEDwQFHtPthoHeW6ukyEGszPNQWauVRJ3e7ZD9jvKQM3HJsyeM5U75mnpdnXjmU3dbQJT57RfQ",
  "key3": "kPjPG3K8WQn5Qkn8AwSduNtD71e3NpfAg4eyHg92k48rXwFgMHBgkRHpb7WZ5DHALLdGnEkjTcCmojVaxtAG7qW",
  "key4": "4naPwF3Qoam7xAJfse2GnuY51Z6De8V5fShhGJYzRLJje7C26XiMU9cgxAa93SrHEN2gqvp5TNtCUnYvyaXFptHs",
  "key5": "3EGwM4mvp4LVcddQd2D6zCx64HVn8srYejQ3zDxwcq3M8R8VEWWrZPf1F8K86NpHJiTi5wQS1AcbHsR4GLUeudCW",
  "key6": "2BwxAwAWWW11Fi4ZQxZUQeu37RGG6bqzWyrUZ92iuACzJvHgsYUPnpGL8FNrTYvGo9RbosFx2K7pKv3Xy33bFYXW",
  "key7": "iYvfiUZ1hPYf3CKkUAPvWshbRdBeQv6uK1iYgfUajZrfFpMNiPMqWC7e2iz2YHyknr66qbttXRGhSdj8KQzHBYQ",
  "key8": "5V3o5FNnX73uyhApugbu4hYKW4Pk5gev9aYqSRnNEM5darivdfjgiRpVyAKMvbXSa3AGV1mmaVnEkq7J4wpbdvhy",
  "key9": "Z3KbVszMDcys5XqCwXADDrRwkHwvRYoB3eiffULLHoW1zgzkN5gohZaRLNqnjHgJWsqJn5xZWSZ5vUG6DbmuJp3",
  "key10": "54oky4D8aZqpmtN8S8W9bn7EZsqY4P9EaK9wzqQLJCyQVVhKmGZQrnp2QpCTdmUUwqbu3kVsMSe1J7z3nmqLxvsw",
  "key11": "3G2ExxhNoJLr3vQCBP6keMBKZV7tWVLYRz5qpQuiLjE1ePpyE87xWjuCvrnJuBWEa9pX3aWUvG41HijE7eQYASzp",
  "key12": "52MypCobX7bzmfK83jz2sKoyqWgsBTQiN74FFCzRjJQq5CQWfHwG8CmtZmFbhVgfBAfxAVji3LaJMYN1ypQHmhZp",
  "key13": "9zurZPrWYekQLbra8kBA2HvuSgNcEszzyUm4MVdTHRHSx96Z7pZjQGNhNAGPpXocti8p88QCYMoAYQDoyfLmF3E",
  "key14": "3RtwPezbDm44S9NThXM1aEJQGVLhVgN9qak7escYKCYiDnyQvHo3haFCTWWxHzWfnY5VKMyzErwJu92DRhGggpDj",
  "key15": "2f4fiHJscKYzJqCSKuhV3Zx7kHizFJ2gKEgc8Rzk8eM5kQAbao7T5aYz2yvRNsFKB6R9ciVtkJmusfyNFZtZesjT",
  "key16": "5Ct2yYMsfegPaAojUSv98ejaEwR28vKRpvh4beXXKpdkuk3ZSPx3cpq15cdrdMtiL1zEJ8jqCoovnLcwihempT8w",
  "key17": "Jv5MN95FjvkGSvXyToqh4r9voLgis3ruFSQRJELnFGWHXQEwgawgdLHeFy5MSVb7JufvTYxmb1FrkXV14o6wfsT",
  "key18": "VYea4N3w45tLCy5utQ8F2TtkJn1PVhQ9Peu1tivBEn9MKRZ7hPyX4QJMC38Dy8a5Ztsc9mBT4UaASPTus9iXEPU",
  "key19": "2YLccZP2cMyAhDRjFDE4X7ZY2WEYkz7STJew5yGHU7EqJGJcwouYd9PaEirpuyY1rXr5UJxdUJCWkCPX5EjYZtbN",
  "key20": "4y9XLbV5jhwVrMeUsNfADU1DaLHbHjQ8evrBkgmxjzAjiVPbn41YWUJRvb2APX5HXYF1ErG9AWqoXptoL3Z6f2gi",
  "key21": "2Jj9DKk2cydf7bmjrhdb1QRKHo964xkcTEdBbyfKrwDHRmYLYyZQSKyTLPMPEXkGfjy9ofNqkzVAnfciQUwximYH",
  "key22": "4XrgQWwkTQbSpjj7FhV8Tpcx9uDpz2Lab5iq4aY3qvgqVY4GdHCvLi8jedRUfEfoAUGs5jSeBeYv5CqLC1G3Cp5h",
  "key23": "4Q99t7QQ9VdRQ3GWsU3DTm6SDnwM3vZfD1FNWYwaoqEAFqpgvKPJH1XyDAfmULXYbYukQ6zhF7rQ6P8dreKP7eyF",
  "key24": "3PNjxfdwhQBJDnAgnBBubeFTpGd58biRcgyuAGiVc6hy5EocMn7FovGMMpkUKqKBVkBEg9LFHMaPqf99MXzRXPr",
  "key25": "55Sp2dg8XRxQztdhujFmeg7XxDoFbQKQkQQ8HLtVoknmWZAyqk1sAd9TyjnDi5H5ogSJZ3XPBUzRi8dVViKuFy3D",
  "key26": "4yUY1HoJ7iZesDEMyS1ufVMkQ7JVoqUno58rZwsoXASjLfSLmBFjRFEvE4xU54HEKWvqmfpDNiejgNKJVMCHtaPw",
  "key27": "2JuJgA1PGeJp37tjFfZMwYDN4KV48EG4fuwK9HjrZXJc9KEnVht2fDbd87sgaGZE1ZoTbQatxhbiZHqpYy9Jj5vo",
  "key28": "4R3dEJjduQUfUcKfcXFABDVf521JWE8eW56xG5VTNapFv8y6mb4JL2Ga3U1hykc1sgLkuXL1KSQF9gaPegrE4DHt",
  "key29": "2GTRwjRnCb4Ee15GXeCJFDX46MAtHPoB4f33BvLFgtQpkNVUCrmFPj4iEhzuzFUetACorazquT9hhkYyv3ofnFkK",
  "key30": "PLnBbnmR3D4VccUkyF9J6oruxEYcNPKwXCkYHRBD5CFnQn5pHW1LcY2wt8bSE8s1DkmneW5621SnmvF6is2AYux",
  "key31": "gxrLYV9gjoCYVWnKhAzreeSSH9RbNe91vqrtCc4ru2RNSvHgzWVTy6zGUydXWeSYthkHkRV4ymD4xq6Lk92uRWc",
  "key32": "5sk3t3vDsZJA6z2e4h7u3NeZ9oKZ4z88556DEpb85QigzEzBSRsewDghHG2bAmmo2Vvy6RN5USDvAXtFJsDyJBXr",
  "key33": "2XrzXSjTxZdFLLvQk8pJ2mdgeq2Cgck6Dw8YD2xPW77aZ79LudiUUiwK7UiRNBVzZwQXghgFQBqwva4mo7QgGZwB",
  "key34": "3MTbMywYMdVd4HpSxF23VZxpnYSVuBcb7WXYHt3hAc4KS69jbpBVc7RRGhzJkQFSVqfk7jUPK4fkL6JRrVWtZCi4",
  "key35": "3uuPXt97HvGqEJzhw4dAGpjasKqNz7Nyby6frRrt8mq4vYaeXoYZbVXU6FugGorPXhQv21nDR4q8MUBAeqNMg4Ds",
  "key36": "3rYCQpypVCh2XrW6zXxPdG9HPUf5CGjuxScSasbDwMnqGUCpmWzMEnST9TsnovgSy9x6JaDZHXYgBd4LGPeiWEna",
  "key37": "cN6qxU6w9uEidwabxz7aa4DhrXPetUWgSZCYQPQPVydYnW8XybvJP8mZeV5CiJDNazRRgRWAugr1cLLeZvY3ptp"
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
