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
    "5TYB3LGx3zW2cx28Rrfgg13ANv8qL4K8fNdNZx3yGuUAhCkp8xuFutKgm69vn5Y6j3oDa4jGnGhyfaM2agwdQvfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agChjrMgPHaFbUsW6zHBqKQcJM72Df2pKPKUtguq5vD47D274z5nijWKmJbknWUp9rxC1WuQiqzGwJkwe1nnDLM",
  "key1": "2HZYos9Etvw8zcnLMb452KttudhRc2bamLqA76dPLrunc9x6PKcK64V1DoU3A3SPFNcVMLv4MUdLPmhWCnZghniB",
  "key2": "5edXFXZJe7miPr3BUWznV2MQfc9QkLz2HXwTyB6PuPGBfuKuVXUQJJ77EDoQBD9AxiWxDHLciL7TFKFLJt5mRD9m",
  "key3": "5qjNS6VQ6BK5b9nahkUWu8M5HQRGhqt8dGZ7iofE4jwfZNXf4Hu4mzpn54bV1Rxmzi9HGff4wehxbcrcbaEqS63D",
  "key4": "zD9SUTDXLushh7QBLfsaPafeoP6eSRDBn1h5oVCtAttTLgwNXmiGYdddUbqyyMcsBbnb9tchJqYjpogYNZyhrFQ",
  "key5": "5dw5sDEKLVjt6q7gAESHjiEaaryno24gL3DGHcSeinnSpAqv4Gj4BEFvwdDmiQgVkw2uojC5m8BM7zBTtXkHSUnf",
  "key6": "KLFeuTb76771CKzoABEPnA1t8nVQgBy8czBRJZHX9Gfpv2NKL7qCbevseFxp1PSFEXMBLT5Z8WkW5mME5JKRfuL",
  "key7": "4hHa25wLmjsGpAZshevbKd2F4ovzofEorks58jUD8LU79s9Z5hhe8y3CP6Jg6LoFNM4zTPP3NUVxELZbNhvVRfuf",
  "key8": "4z976DXkSHvpbAbjX1UxvDxohNAVmV5R3SpWFnTUb1bUf767odqswCasSWBKos4rq5PwhD36jmx2G4NBBDAnRBqP",
  "key9": "LDbKCFJ7LCvURpX4MSjj8suPdxqK1ULmFBkA9tHvBRSL3KVrtbwQ8U89t9qD1j3VtMA4a1FsLji1fKbu2KNMpf9",
  "key10": "5q4oY8dqKqbFPJA9btTqxEqv3ofTpu9B44yXmCktLo7vWED9Wo5fzTJ452EUbG356YT4wUcSmeQDE3B34cqxUqkU",
  "key11": "3aNp4P1gXKfSxPq28Za8DosVQTQynkP9xyduRjnVKycQKq8s2e1aigYDdqVLq6P5CwXB1RHAzHPBVtDXx6BrWBAZ",
  "key12": "5oqZFibhVxsg24x1uecgzAPq6t6W6AC8uvJeJkthe2aLwB1JS6iYiF4Ho9B3invYQ92X7y3S4twRt6eCVSNwGrtt",
  "key13": "4CQViDYa9PxmBqPXp7tpcSibjvSEd6GpTZZHDm8u88zVxoTZ8Q36yHZ3Ecqd5vzCWrtaJDAPRmXqVnvaQWXuHGen",
  "key14": "8q5nWmVkGGzHDYMKvSLA8iVpNbPhfWXJoUxZhbjmcHmrLzhijAWzE268vUPqtJiVyAPvv5pejx3EhTPJMqG1Ja6",
  "key15": "4XDVN4gLjpfE1vZEzYgNQV89Xb7EkdstALjuujMG8YCPp2pjJ511YDGZvjaBqKWbiLYaMWeGY7SdTFjVp5yMLE4V",
  "key16": "5EAMgMr1baSwmAD8CQeqDt5mrwVf2L9kjiD3agQEKCCKE8JMBjCmDb38ovqN4WFGo63HbbPipd1B1RAX2AxegqjQ",
  "key17": "hcde4F9NTzmom3VerSkg89tLdRbkbgy22k6FGuStdy2uXqfDUcsfGCC4KjeyKU4kxrMgnXv7VkpKy9Cv5BQm8Ev",
  "key18": "E4tzj9ADeAhn4JDx4KPzR8XDuBgJuAYxD1XkNaSVkNeA23Ly5wsFm4hyM9XHxTabDSUHyLkg8q8kNB8NiGso7p8",
  "key19": "5xRoqZjCCrz9KcMv2FTxWexdwrRUMwUvkot3eff4t5KvB2611Pos16R4o9Tz6DTD6S6ruGuj5UqkPrP82mdDc3di",
  "key20": "54F8WT6M4Jdj7xcAibydL3CmcEEKSndqAVGf9jSqvf4Dy41QP13ufm8nrqm1PEQGJrqRaryPQiwRaU1qhnJPuPEK",
  "key21": "2FvuryBDdQ8EUxmeYoKkHd4YvL871kZwyUYG6ybp8M4EDZ4Xe2Q3XEmmjYSHFhXLXZumQ856bSnqszjamAk8JAwK",
  "key22": "5pvBYpHtBtUbwqoQySwCoHTouvHCtDivtXcRFvBBrUz77Rt2UbZZpZC44g4KogdEZXHqvYjfxNL65yUUYpdb4UGG",
  "key23": "2oswqUXqSypgoejmNegCkfE2WyKoxw3PYCztmTsmkkQUCjwSavRfhGFxXZGvJRU5Z69tavzBY46YcarXW3xCwepv",
  "key24": "2WiBLM6nP2kWc8PEuV35DgFfvVgWTMYvVbV4FH6dN5TFAesAJ7c2NxDaJG9SC2khDB6LYrvD3pkevf3gKruVbvEc",
  "key25": "4vex5NfnakcUAK9qyPLThvCdYVhcX1iYJ92vXxV9tTE3bbquMcgHhEbDMv6NzPyX9HtXu2nR5yFmdewX3X2xKyMi",
  "key26": "4aNcdxw3D9gD4Hpo2YX9iUvoKp1uNLJWP1T688FErWxtDpGDoBVY8UEPi4Z8npYjCR3uqKCwBezc6TMeDkeYU5Ly",
  "key27": "414Uf85qQTcnxN5vJixEkWpbF74S45UZXwY1rC9u2aHgoKs6J82tX3TdjqD2zAMDteTWWuUFT5McEsWZ33MVSVEU",
  "key28": "4jf6LP2Utr1zbXoxLc7sj5DEcfC9ZUTWQqKWXhMHT7nAUxTY73nxRz4qdCAyZjWo7AV2t4D3ZCWM73m3Hp5okPqM",
  "key29": "3Emp8Ps3fxv3psmJYjHKsK9U4XG3TKem2irxx1gT4pN3Rt1ybA2GfcJKavWS1PCgnoNnofiKbFrsu3XwuYSttgqh",
  "key30": "3R6skRetpHj7VUjpQCx5dJCzLbCb5sF7CNQekZJ6ixW4vVDcMfBzTSJBEEYQF3CTKKea3wnDucaEjGg1bUYCSXSy",
  "key31": "2yDXA4idXmW2gi6oXF3kXeGrHPrKJJ8gWQXsG7oyLkB5ZrosTghCvrsoG5HPncmM9PBFE2GZ24m42iwhHD4oXAN5",
  "key32": "3VMYLxfvV9Dx1JS5AwQt7kKLGhArgh7TMYRJwdKkSVVUo6NPWg2E2yLmNNGQPoyc7wGF5e75goqRP6W9UKag1DFZ",
  "key33": "5SVH3TCKxgrhdEyhMAfgtG6D15SCtZ9k6HzJZU2aEncud5ZVzQoHhMeGh2duvh6LRiEdsbA8ygxYkk81Du5s5EQB",
  "key34": "4isnKKR7jbTaT1Gu5YDidWfcpKxkvcgryQNyCuJydZHxKBz2TkmfGXns46urLauxTu1D68fj9trwXVQRShBB8JCU",
  "key35": "3oUp3eQu44XUbfkGTCFZJ9faT4ZrwHMkCT9c6ovXRb91UWnby4wnFMaceMZCeGSEFyRABowA9nJekCmuxGTTHQgR",
  "key36": "2PpTvhGmx2mDNzUbxmdsz3Qce3Sjc5ZDoUNUDUGFDpWknEHs2EtghGyBBnzx2rpZuquwkKMT8jAt8L4j1wEnHLDz",
  "key37": "57i7ZG4J7tZ8weZPCYgf2nYuXoLwJVT18UaSXL6s8dCxTXpZz5KggdkubDzR7goCV4Ssom1HoZHXWQ19SkypGzR5",
  "key38": "5frkmsjFvTu9iJZHigCnqk5sE9YTijTKFoyRD5HkXPZt4QDxFDzMd93mHtWMj51HSb6PAUCNUq7atpvJ1mMtXTkQ",
  "key39": "5PrXofHaaWZ1LwsZj12zXgP3kKPeMtMyc4R5gsYao8sihDdEFPNkMXGJQQ3t7RUM1goxSUKE4d72qUATWymwu3Mw",
  "key40": "9BMenoaoAZaYcn6MqQQebLL4HuVLt6VbBE3A7emimNgRiBLZguvMpuoBXXDgEEUD3EVYa1qc4AE6KYoGA45qXHU",
  "key41": "4zVRnPNYAkZuhy37EekF8Y1xeYg9bhgh5zhdRcJMptdEx1tJzekp6NUMEEEAPHcNxN8sgmLaUcpvmUAVrwinASRs",
  "key42": "5jD8CyzN7j2DCEEm6mRvJC3C28VvYDQhpTawgPs6dwAEUqKHz9cPcnskY8oQjNb4D8L7Rj3Cg1mbWisYRw9LEyds",
  "key43": "obJL2ZTFGDkXrGgPpCLb851T2QXbdAURZKNbtnnXmc7LiWJJ8TgQSreAjKSZmyPumKJUe5Zt7917QdMjk6Nb1oN",
  "key44": "4L7EfxYdxMXonfdRDhKPrsVC7FPVPV5G3CncHRAyx1GTT14WVLkB52mydbQifP2x8dgQpYKDi12NDvF9crD4mJZV",
  "key45": "58U94MxK84YR6MiuM3WdqM3Qii29or7ZGPYQALdd8eYCMXNmERVXX4WuafuGbweSyPfDREKPz7s9QoALXbkzd24W",
  "key46": "4NdnAm5zyDSjBR5qSL9EoYgqkmLXaAtJJW9EHoL8aipgtZXN6MDMJfAD6dxsvj7BwarWh4nrZBZdUAxijQMCikYS",
  "key47": "N1vmC5S9WWisw7F2DLZtmzMCJkZSExM1BR7RjsPJXmdp3kABefTjtuim7Kg6iozaCxzmiLzyuErwVzpALAB6ZMD",
  "key48": "2ky1KDC2TgdiaD2MXLU4cETh1wJnwNRm8cisyTKxBRhe4hGuFaPHE4zsAjmwRfd3P8bYWXB3j3p35Fhpkp53ZsE5"
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
