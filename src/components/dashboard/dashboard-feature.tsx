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
    "2jmFS35DCsepr9MVVdURLmgzU8Xm7y1Yy8oDotpVCJFHjq6oYygoRbHESEZazpbT4moy1CLSg9UNQjFtckp2yW1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7bzpSmwWnLBSQQYZPUuhwmg8WAWmPMhhVLRDxN7JLvieSExMMiTocseqYMaMJTwppYxuj4CLr1hMmQo9h4jtWr",
  "key1": "4MUSTgzWxAFdUS1vXJmvP3y2iYNJEvXQwFJwyqDQDVFZhyQSBWzi4S8Kuoxxs5T3PCGNoHo9PUEXA9B6LtkGYVq2",
  "key2": "3DbA2aLMXqrDMbDFKqbr3ZikeSwabVNb6NT5FWPV6nCAKfSZxLQQZbXjT9mQxWWUriFAS38EPoYhAFAu65Zm34Rt",
  "key3": "2xpfZjo8US295Ty661zHQa6jm9suEUNkp6Wf7yVnVFR9VhwB6gYBvuBQQ55nm3X2cE8EwdsnuAZdzViXQH5Vft7R",
  "key4": "5AJLp5Nrq58UCstzHwsTuL6PTai1QaanTU8QnvWnLXvcgJE6oaastLkerVo5GFLysve67R8C9gm3DdYtDTvhSu2r",
  "key5": "2XDguGJWYpiuqmUvepX7R32eng92hTdjCvMG21r7EQLBWQ6mNWiGdeC42jD5MBchBXMDqPYJG2c5ZsKX4cPH6fTV",
  "key6": "56EYSnFEBzj56r3vUwdQ3EgEAtpfcEBUNUxoACkPZ28h38C59dbZZeEpWSer2PubLKLkw591Ax8E1Um6qR2VF75m",
  "key7": "35My1Hp9adpVfcMNABuMkQnrYsUFXyrs7buwSLTyW496zfouTs1ZKXZn87XX4futvhJisVbKkSXyVbLGKVQL3byG",
  "key8": "2i4TvedPUAoR3WPYqMFf9y6uxPEggJtPMVDdhKncx9MCEuuSxof87ZSP5M8b9VZfvDqsc8YRtzfV4mAtofCFaok3",
  "key9": "2myQBUPhv3Tn4VzBy2u8Yr76aBna2BEg4tJu9m7dthNGvHKciJr7RT2XUidpDboKE4sQXxWwTdHzkxsT9g8SmJnT",
  "key10": "4Sj7r9icvQmeJdHQPwn6kUHWkEdyFksuARLg3GHCuYicayjWJUnFEwoDGrjfsCWFmB33nZ2eykC8HbuxW5dceSLL",
  "key11": "DVjkiQV11sYDzMFqctLf5YJM4uLpLDq3RxLWrejPLg1tBWFgFBy87kc33rT21GNNucKiZ2YTthUjyxw6UqoXho3",
  "key12": "3KsiHAkb9rT1EAFhpWU9bgmbicnJCRweCCjaTV9Td77abHpXffXUT34QsykYySZACJti8ADt26BM3uUPWjGM38z9",
  "key13": "3768YEHw5ifU6gXSM6tbPCJCYVRMMDaU72j9YyAWDbS4zYtWRKCh8eHbpQ7FkNGcAx3z7HUcb6EDuyPfzBCCnHMt",
  "key14": "2yzN6TutbwEL3P9q7mb6vA65C2cFX8z34H1XSy9fcxBYHhkY3UhtHEYafxcfzthgSTM7i3WG22Bhh56DZhXC5MT9",
  "key15": "UpX7ajsYEn2AE6gKYVKJG5fAAk4X3tKqdoRqrFZc1vcjMfL8xM4sQwkqiNKS8yFX6aWVWzDJaDEfUcw4TrCSTbY",
  "key16": "WfkYyrc9Zmng85p3C8GUubnh8RuVwD87gt3CVsU9zuFRFhQWkAUSVxazBZ3zjWWVBuGfi5gU6fin3wUKQ93SsJ2",
  "key17": "2e2XAwY2pEFetZ8tfwt21GjUEuoCExzXtfh46k3wVcBS8BKm2BnE5ZG1TMSKXwiKWvZk6zctivQJxUezg8wmrQnQ",
  "key18": "xdA28AMwTQFPENTRMh3568dbMbA33x9P6iu5jj2MfS7GYAHWJbprAQNG5mwjPwie2FhbkX3Sti2zgBUaqwykBfi",
  "key19": "4k5n3kMMvZ3HVpoyik42TdZiLV7wXLQYtcxaw2ZhHcTc2FoVbvtYBk7qWCfgRfFhdAk1kxEEZfouVaW1u53Mazbj",
  "key20": "4J5K3UJCsEa2T2Rv2xv2zRaSPWJMAQe8XdWHFJahHQeP29GfTeTohv3f79irNMVYzJgERGMdj1P6RUnrTjwh5wh7",
  "key21": "5LJs4fLemvunshUsY8R1TH8qmRxDKyJmu8SELb6SUeTYE9rxtg53DTrixMqvzAGGTWUbPsmVp6HiWShS8VSZFz1c",
  "key22": "eLttnaV84aegLJqXnpDaqjdqSyZv6FRzZridq7Tg1HoV9nTkPSBKePUxTe6qjcQEuw5LzaV6iWkHNLvk6AgRPt8",
  "key23": "rWBLxqXemxuXxKgwEVstT4p74jokaKMq2Dajez4CADeof55LmXoxRrkjNyzxnPVJKCi9f5R1cfvy3RJDBE9BGuk",
  "key24": "2CuEUPqmzP3h627uBt4zNUyJZsJLjuQRMM1gBqxFGfEXFMDxQ4o6jbhckMG6PYrymxFXCZ1MaggrNTpCSRukUFVK",
  "key25": "27XZNsWuRacaHMGekJ9uY3o2D2gzQixL1JCxX2rQQ6dafqNUtJMxiVjM6PDPJ5ytHab8kWhxx9Dgm2N2MqaZpuxf",
  "key26": "2gSMvpWm5F6LzTMT2uYkEtMRPfKwjjjJKGbjoPPmpJLxsK4HKWDL1ae8wBmQ2yKiutQXqCEigQEXfHi43u2CBGuc",
  "key27": "42z9dJDJCiKVgW54XPu1k8tdQVmV2Ti1MhqkWdtoFT9t6eouH5KGwxcbZexQVQs9dhZoWNL4U8GAVtFdytKUyL5",
  "key28": "2VGk2DdvYnqGWEZ8YvobkH1yFAVKMqvF7J9eFAn7hF6PzyoTse7Ug86o7zkjj7mVTFrBRZrECSHc6buUtrCxin4G",
  "key29": "5B149vQAPRo4YtbQAU6pNcDUTo3YnkCQDaGFYYm1yqtjPtbQL9hCbHjtJ1PfnrjWoJ72g7gmqEYnvx4ev6FbYU4S",
  "key30": "3PxuLCAEvK2dpjobqHsJie6rfYjnZeGL5BtSicziAsdzX6p1KEw4aw6btyHMLrqRCjn9ZWHxy5VYCjT1m6T3GkpT",
  "key31": "PPjL9b68rGSPToQmJbuDPVzGaziKwb3qJfi911wxR3QDYpqfnXMdrJfnv95Kxv2BiSZwKT4tQNvtd5R51xUXs6z",
  "key32": "5W9iVhN7AQGug2MZeuEedep8xFdBxoknbfCJ4CE9eg7jr3jaWaXzzrUvRagbgaUKnMMuW8PeUes3DrSfdSBXRczk",
  "key33": "9U2JWknGCCDAa9V5XBENFw8h2cFnw4RcLM3x6b4PEQLqcx39aCdPYsBpSpNevXTn9VmEXxHMjNoTqp6HQd3SYw5",
  "key34": "g1UYccuv11iNDausJ9LGgFK3rRq19rESyn2t2utnpy9oDqXN7ZZN25acsjaUfBtjzpzLhssJuSpNivS4ocfrz3f",
  "key35": "5NNAz3wtayeFVSCX9Wi6Yvrv7G6bqBx2Tq812KAkVFKjEnjWS2LAPnULQwwshpyVb8dCc58qHa4vRyJ398zipJMB",
  "key36": "3bbwX9LjigdqbkMAwgqnmogyFBX6UfNXzZiYqN7M6giJqVnAVuFCkVPqM3EU74wHxFxdGWsSmCDGsG57GDbKz44i",
  "key37": "2zrnxr3jPdg4RZzGCkmoKxDhMhmjoSEVLq1e4unpDNgxKuwf5N5GDmA2wn24vLUactDU6W2GmqMJCTBhNUQqzAto",
  "key38": "3XqRZifGErPuw5HgjUAYuJ6zWXSr7HSTY5NnEqgTCbXrLxiwMPCvEbjYhStsbQ3B6yNUczo1RAgmuDd7CiQ6D25d",
  "key39": "5P14c2ujjdkm1bqKQFKSJ8TKmA7i5LRK5mC3Sidpu2sB1JEmjKCgts5gfRS4wzqjVZHywPpjhjZD23uhaUAfWH5W",
  "key40": "ighMSXR3jo1f3Q8bQbCuxNGzHHFqsFtkhkVrRzvPa4Le2WxgwpBCQB8RFw5CL9MGx5Vocqz68NCc7ensGYwx5HH",
  "key41": "3Sn4YaQfDnUedN4gp5J6Smj3uVLgPd4W1VVvDsG2555XzaHxNS4ukGu2YpJnZJSn5vfa8ueHsi1vPUG966TzfZRN",
  "key42": "4a8G2dQQkDEaE9R9yjxXQd7v99L62Czhzn9jR83qUQCqmDyye77S7HVePVYSeUkPDcyV4ZbWDHz3VLGsgjpWW1XL",
  "key43": "5Uc3GSthSRaTUqQzfAQwr7feV2NmSWtVjQ3axPVyco8JSRGsM45PLEyYrkb98hYvhrLW9pzNrYZ3dEWPSgKBMhLJ",
  "key44": "43ZuHMCxdNhscEsWgzzNiJT7DDJ3fVhvrXRgQR4CdQaNtrbxjuhQ5oofUj2ba8NbcWRkTwfV1R8rpTxRXYTPY2kS",
  "key45": "49PhnN2WXUYYVXiL3GkqVxRdv3teMam2J3r6ooeEJK6fZhLFrdb8UVUEvVqR53r9Fj4trgZD8JQV3dLp7BvBSLbV",
  "key46": "3oRpnLGzx841bmcBcgoQUrWBruUqDww17PuXJYj8MtGtNFud86KR8DkyEHcMjLzzdteNvZ3RjCY5CbhWr5WP2deq",
  "key47": "5ssLzuQrUHMHKmeDUQR9zGrpibFmYNvW9kffYeG3ToRoRkLzWPs8754xRjFZxWPjmjkDnQfhoprE6e4GVk37QMuz"
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
