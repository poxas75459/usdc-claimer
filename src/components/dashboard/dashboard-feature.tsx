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
    "57omhWzcq4qUuDCPSdFSM3LeowiKAcNUydZ6oKqUmG5TuNCh2frQxyiZNWpoXzjcG4V58bu9oLu3FhZH2HWYfaip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkP2PyLWgYMPCgPsAwcUNjYh8gYFCiCQLZeg2Zk8Eb79CVCwYXyhpkwb5UDuKXXqgWoFJevnpf8iCq1W5AyPCi3",
  "key1": "3CQ4nunzf1FNVDKKK7D819ankpXnd4iSbW3yWTkfAfmvBzaK7AJjo32y3HtdHopYJwjg1mBeWXkAdafrMGz6QdRE",
  "key2": "3PLQHDdj6cFyPedSJp1XVfC2FEYnJ47WBKcVziaSQXBGsBQxaHrTCk64VSyr8ESqfC2iZLFqUodGbS391cq2uciD",
  "key3": "5vnTDocmwrp15StZ7fmktj5HaV5gVgGUJ4i5h7JoN4DKyrbMqNizJ7u4YPdoTLT2P6WBK7sMQyBPjWLgjLiEga1f",
  "key4": "4mNMyYV6DiCJ1UNdxtPUEHiJzH7Fp1Nw7tU34TtMQwvMjqZZDLU13TfDnCs6xkhjvAdk2AZ9wSj9MMDgUwvrw5Fz",
  "key5": "qFRge2XZwwesSbhec46HisWxsZF1RhuhDB5U4M96x55iayRpAfq24re9ipXtReAk4KCkA42S3anob6abWMwS54a",
  "key6": "92YHP6Zh3dGWWk1aFhX3xE16KJ6jCMuUiGAEZNmA6qvQVpRzBPbGE5RBccf9BjD7xLwJnSgadG3VaMDpddMm6KP",
  "key7": "2MKpfdiNyjnqwy8277m8c7CeWqeebzN5mNMDeYVAvcpApiFYWGgyB7dE5tZ8d4gCgpntQGs96JExjdn6vAB1mzYX",
  "key8": "5ws8AuTYKo9HmZdGSqBFAtqACoXXppLtxvfGSvzJe5nX8A93Hfyog1jotFrurGTcyggc3kJnm6XTqPWrHVuj8gk6",
  "key9": "3rJNpvmL7KKT4ek5bhAT3chgn7c7b8Dan3Lxt7aEop6X6Pq5jQiG61Pd5cv5ufB1iXFz4hTu6ryybF2TCb2gexUz",
  "key10": "4AVv7CAgGcYBNhpDdjZdHLjjSc3yWKuhgKxxTxLi2fKaz6uJ9op1qfynN7JoP7z73zW7cjHtpW5LthdD2TzKFVTc",
  "key11": "2YCB3pqSaDL9PXvdVvFL2Bg7mbybXqjKMTpAHASo5TcZZqn6vqh5f2cEaEYC9t5LGfpXVuNbgBEGeS14NjgoDgau",
  "key12": "5L4H4t6vjnRx1ijsAfvSd9Uir1qhoN22LoQXdV6tVpwQVdLrVneHqPuvE2nJYLvdg3N4ZSpushnvWG5GrpAoYDds",
  "key13": "5jprTQTF5tBRxJRrvo3wfoYLdHk428BEV6Kn6GN678uSvDZb8ScXZBs3VbZYhMMtYQpdoZPcNwraqMP9odWGcd1v",
  "key14": "3UpX3CbPXsmtdhsu9JY4ApL6R4r1Yrf877YHr5xBfk2oRJoeLzjyxrDNPpwa79keH3Ltcg4QmwC3pyEKeWtTosUK",
  "key15": "3pNDaJkgTdMTfSFVxx3jwZT1gc3bbsT14b8fMjfUcRSQvi7TZkszk28CKeRj2cm9uMziX1pHBnq4ukCHYKeTSx7y",
  "key16": "4pFQE1591bzBsSb763C7x1aXFfqVdbKW7pAjSPn3dEuoJxBeJzfRtohudzMqfpjpxkyS3hrJ5hciGddnUHaTkC8S",
  "key17": "zoqtBXUeni5tBNfjxm8v1Bq4m29f9bU7yD3mjuJ8DV8jwJp5eUCwvquxTkUCtrY4o66Gma5ycTDGbkYafvX7HPG",
  "key18": "2xP1mu8QyhvqJQV7P2g6tKW8AyAryhhGMBvzpGmQouah6VVQHLYAwDJxPkWkXTuksPbSfp84JwJHtVQXa5MD9ZbB",
  "key19": "4KRLYdWaYbX9wHnT63MDGLA7rtvUeVkqesLqnWMAuj21A6aHAFwJVkxTMHaa6endHvZbHsiYqbK1gfpiaksineDg",
  "key20": "3KqxHBWW31PQTPT5NevRAWZUZxdB5ifPBG1oMH3MbaL5RQDAFdV8UQCqeuNWfWiSiVxXQrYmzxLZLGUdF6aXbZsd",
  "key21": "3JNs2UZyv82DToyNJF9bNokC4eYDrBigWP7hY8aVY8Q8LHgfdCACyzJofmnd1HG2uFU5rNkQyjFhFMAUCyf1tdzu",
  "key22": "23hygKFYa4N3pCx6J5ozfiQNrzj9P1yhHf4xjKEYdDFaQWzxpgxeRo5wYBnAojZY67Co3hPMKSV7JkKUETAvEHvp",
  "key23": "2Et8EusXeHw6swd6FVrGYtKb2x6dH1a3ZBAPovGanxpcs8mg7Wc2VYnEr7LuFzmScFBUu5E1eD4RYJAjLVCX8t74",
  "key24": "5xZJ8dnmGLon48tD1wp6MQ5YLux8MbWTE35VHiZ3zV63R4xavUD9ZZMGN5ch3otVHRtGAKMW2vQC3hL6Z6ZTducX",
  "key25": "UMvvsTuLyAMHuyENhcL7719LxsJqbk4xm8qzEkEmTNzCfRimEhyNDzLCTkajJmUuiDkPwiAHmXArBasYg3vkYYe",
  "key26": "5ArcpXSVWoLD4dm6oZoDdaEYEyws2FMJ9vKDAoWFMwrDTskowAZ3KkoYhA16ZdvZ9k4WRsobynQiwvhBm1qG7jx1",
  "key27": "5Qib5fTyv6C3c8dcRb4aXsgtwUPEDkx5yy5QnJ48KZNRHhvFwe9eAPNTKHY7mM9DCvD9VMPDUZhtpnQFZgcXanCG",
  "key28": "s3o3qyf2J91Jhrqux4HAPE4WYPi6DcSj5JBVnsftZsJ6MH6VURjda3JH8nf4F1yy7RwQJ5T6BAysF7ATKbQvCin",
  "key29": "2tEqAbjJrDnCCPaiF65NBPecD3aZ1nsCYEcXcpLNUJh6erGUhwQgu2Ab1pNwhqKpg2EQpyH8LhQDCdDZW61PrWsL",
  "key30": "37NnMSgoCHzUtfHQUuDHy4K2Gs1cvY4gWnK5TNxb7kzQe3KKf3wM5PaUJAyNSFbGsPqGLCuQcaX6DXiUdtjzr3jX",
  "key31": "36QUHaS81DZ2dhrcHJdNc4C7Y3KwAcJ165SyiEJqGSjcoZodgHadZYF2WC81wziNf5EANkUCj7XCjNwswpBx9Nry",
  "key32": "37YFnhAcfUboiGp9oDxEW3adDgny3g5xsvy4okErhpveeyJV3ZSv22PfJDuxZHCrds3uYmt7BGnKHn9uSyJvG1UP",
  "key33": "SK6wdJ9G6AaowUqE9L3MhQaFAEMkXcFpMkopNB9t7eAKcAKvv5SiqU8bLTd5kFPwzcAVRrMTMpT5ARtEnvjGTuf",
  "key34": "3o8FVA9AG4VuNoWTbYRkVXKUHHHyUZeSkCsuXG8NeATV5d8AbgSD2jSCMaawi2gPr2HNijj9hRGXSV1ZEbwxxkWz",
  "key35": "2wNZZFQK46TBhHcyG6itVLGNRECtCzFwntiGKRohejqA9A6wzBDQEoFLH2n8oh7F1mHGWCoNDjpoyJ1joiRWRJiX"
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
