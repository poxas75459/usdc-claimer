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
    "5EptB3wzMrp49eDMGK9E5qckmRLANuEt7j15ZFeAz7Kn5uxwKuV1AUezEi12H7AYEsjyD37aFYW9i3aKYdoqYhM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48832bSw19AU76DzdXxwDFywmMgr6eU6En44FDoG8wAzSdwp3kZyrpZgrMD18um511CbH2ZUvrygWrSH3EGBMKfX",
  "key1": "3J9jmCrHZHQz4MteVov162RUcsjyd925wKVVvPjBzHMYMhNFXA5aCoSvdzYHi3mJsJnnXofUNAZEELvzKc2crLjZ",
  "key2": "4Vmmtr8hmP6WszVVQkQ8TnCNsp3tfKsG4TVZC8myzMTNxfTnse1p9iLBPUDzL5KZ9ikJ7VKB2M2XGsbonf3kWWGv",
  "key3": "3TdygdppBUpaa64SyjExmTgsrJPt82kMaqyZGAZ6T38gSJw9dRj2t1XgSe37ZP92JXbA7V6JhfXKQf395Q6jgwCR",
  "key4": "p7QBcZEVZ2Ns5x885XTDJP1QmBhXvJ1484KZsjSBWxu5fd8XqRBhfWhRCLtdtiTCq4o7LffkRXwt21qmavrPK2D",
  "key5": "4X6PmR8zs51XoD3WaHFF8Hi94WXuLYGRxATEVQra4tfEVtvFEsMsSFsqRTyyY1otrNurDUM44um1dYwodPEkJ5M8",
  "key6": "3AvPq45kTabpg8fqzuwCzHPiWvvNMXV8u4RQJW7pb7UYsEfFA9Kayvrs5b4DJBRJDJhbQVj6G41xDmL4CngGSYh5",
  "key7": "4z3LWHCJNcFARXHRs8c6gfe4CkXG8zLJcQkhkucPNJe3UEBDQEwLXpizvg8Ws9Uodo1xZ97FYg9CUqunW8Bvp7qr",
  "key8": "63vHg3ZZAqRajP1APKfN1JsR6dDp2AjpzSWPFTB17cvEffgFac9SeSrgHw3cL8AvPxGsPwcUi4YmaWG3gxH6Tzy9",
  "key9": "3ziTiqWz991BVAq91mwTgHFX6QdyJNQdHtxHS7CV1kSTEKe7x4UVLZAH1SDHGdXtkF2W95EVYtcTfiggieANzWZp",
  "key10": "bgPA2Va1BTEfwKgPCyCWsx4AE7hhpqkPWZBSgfS2QQqasv33bRCKX1jjQnVtrotvjRd7Vu7Gt9yPDRJamh9M8GM",
  "key11": "4BWkx9QdXGNci1SmJSWk5cczt1cCeZBvTyuVbYN9gBJakU5m6NLs9xaQyw6RYJZMpuUkLRDRvNjaeGpddw1pK7uc",
  "key12": "GXtFzRr6tjNNuLSy4TQNMzMums3sRMwZJYfUJoxWcyGWfyPsUM5KZqUoJQACYakhkcTmXG6SVHt1EmDtLaReXHv",
  "key13": "5sC5V12vgmQ9rMKaWhKMJbTngCQcyCbzDQbha1ahPEH9iPcVpHLoDtty1bnx23rKo5RpamBtzJ4b6jMYWiJYKEp3",
  "key14": "Cd9hRXUZ7MiEfHsuTStRxtmCjyFhsNmdDShriE7aLmLgjg3Dy5D3dhJJu1TqvjeaEmQyz2CS2ovW4GNkBKuNJrP",
  "key15": "2oxbrFxiB3iekBJPijXFbH1xigvX2x4ZDfVize4VqkbY5JyhmmTYEAtuQ2LHamU9p1HCiHY5Y4ddKWQnBK6MWkSD",
  "key16": "4oBs4uoCHtF1AQEMKZqQbsryuUqnGEtcUehYA36v8UZq1RWgPXyy3og2mE8SAhvu5jaQu2XPbuT5Qs8asyZEkNL2",
  "key17": "2vpuo2paC7WbR9VFA1HCbo8Dju33scTVCGhvdBRdwCC7LPRs8eHnrBCVQaKEGQhKPutsLydo8TTYfPJePK36SobQ",
  "key18": "uqZx8ucCzvh4TW9xJ7pross95f1Ekmvm9EJTXfM1aiycAoXGiB88ZrXQsZuujs7z7miPsqAKKceZ56SueRhggoS",
  "key19": "4N76cHqmy7SooL6GMs3bGLSdPdyUH1uNspL4FU1Q3gUxNRRgPRkdoHEjb6cwx2rjsD6xEUExC73c7CD44TLqyNKJ",
  "key20": "5tiEzXxu6q8KMovpr6Z7BfcDqv6qbo5zK1xCZ3zALghDg8xpEZYmwQCEs59uMQjHHBXcEnP1EiHcmHzXjL8JQmHM",
  "key21": "44qN4yteAHxchj1LYWniM9bcTpa2niMHsXs3nZGF3cnEvKLMbNCdctGUMgnU4V42rsiicVvKh7rCtPuh4zjYfaoQ",
  "key22": "26uSWCrSC8enQNYAGFRr5NbPiDphsUaTQ4X1KubR8qE8QzmS4nSHeXBoQsKngxZp2RKaj9ZhV5wss1PR2VaNn7XH",
  "key23": "2a6v8NRmsXmiXLt7AX5mAx4v6LeJxBikCAgezbofEXVZgh538HfB16Jtu7441xNBTygNZxfnhCbykv5jWCVAW8FL",
  "key24": "2eVErNAVZtuYxLMchxTqR6bZ7mW6gybkUA9mYtoRFjkpg4WrtnbEtxj6mZ2vVcS1N2p4rDFQJtpt37vV9hXdE5JT",
  "key25": "4WVKYb6jMMVGPgQ9X6sXpCT9A2xK2RDV22aQrdsHZSquk2WPWWangWSsLmu8wGyvhkkkBS5BWaC9nvxeFJGDvj6p",
  "key26": "5dbuuTfvc6KeTMRLTA8cKzGQhML9hnVqriqzc1zn1pEn9a1nwCzQ4CgRoSweL6FDjjsJtgJEme5URyYRZLzosWnR",
  "key27": "3RrDQ4Gw1T92eEcaKBNDmTcneFpRUumXDtFJtwfLy9fE3XrU6A6erHDqCjjJNwNhmPYDjWb9SqJdMLyxmHCSKRLD",
  "key28": "3NB87V5eU2drkZJTZCgrNBZNPtynoaaJGm4WcH49FDijEiTGzrkiXy3Vp3VkaAAFgGhdER1qQaeyw2U8PWDFC3sx",
  "key29": "4L4UNFXB2FKT3w9AYWsCNy7fSixZppFPcXx7QNPL9hhTQjnDfiEYNGPyzMtJgmmCmScWecppX6Ex2tqbSUevWPvp",
  "key30": "NYsUCxPe8xvt5H9GHmVfYbGijKZv3VGWsDp6hmNJmymsvkRTpJvb4gWgmp77PdF9Byab4JbL3gQto1Z6f3NBnre",
  "key31": "5uTbNGUKpgq5B3KnjQPm9bdjaSyDgVfSiNyk67GH6hrMvapzKqec6CVg3kWa6jyDkTxtehE4RT1EtPEMnh8hRqKa",
  "key32": "2FhFgJc4HLK2fXwreAETi1qMtnj6ipqa2THT5hAV3KTVF8uRWogJWuwFbWm59LDuJf9hRJDJUAHWothcJo6Hc1s",
  "key33": "5pecans6KXz3HTxEfyTgRKrDA9f7izW1fvRstxZFuYsCfMsRfHgwoFeZLC3iYDrxmVxtEggjNv3cRPCDbjKpuvgV"
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
