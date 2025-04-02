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
    "4NvLmPcKC1cziAWM5jkqaJitjt7gCDAujSPpp3UZxsYDGYVhfSrdScT3zHkQUcgTBoAp8XakruT3DXLTZkqJM3AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4kTB9M44eaNPDHjcE69PzyizRDc78TD1W1iv2ETysQTtik5wHHBAQRY3ia7aa1fGDV1PzRUBDokSqFyMh5Adyg",
  "key1": "3ApwtuHHXA9PyqSBUKt5s3VzfGXv7VWe1nSHr88ZL4wRfkqi6AKz2y9bm1DXdVPMPAwKdHtAdQg45Cnsz4ePvm2j",
  "key2": "3afdCabB6sDQpc1KDeKZ8iQjiPut9YrNy23wtt83qYE5eYNNc5WmAaXs9pxspTRC8wnrPX3hSVA2HpHeMuL26J3a",
  "key3": "47bW5SP5VFyUVShkzB8mEfJqpwCPs1WZm9P2VV2TA4efp4Bipr2FdA7x7fedvZiGUJ5BztbzQvfiXABjbRAfvDcG",
  "key4": "2Q6oYNfwSYbUpzbdk2Jq6i9YgcbsLXKgG8M5vfZBiy5QhtoiohX8jbPvygcVtSieJTTfwFb2fLcdvdvGkoZ5zgiL",
  "key5": "2fKxvw7wKzmzWP3u3WdKhrNgcWLc3hui55PjPYNYruB9gGcyJMwtgTLkNb1aYcLyVESSRUFyStgHMezN5DwrMG3M",
  "key6": "2nMoyKRx5NnfdY2D8Tk38rRpkdhpSAWyyPdzYUTxyDpkrmRNJG85mvXWhLrdU6kPwpEJrgbKCZ4EcYfg5fxMPeSu",
  "key7": "24CaZvPQGf5pFggpLo7XBHmgv1Umg7iLXY17FPZKoxfjVDtyQP3wgT3ih6ZSN9pHYtRBe4taGbbpbeUX9iVq5Dsf",
  "key8": "3eXhkFz45Cy4JofjwzsUfdJgj53iHnhbfYYVqRm8jdUL7aJi1AqGNjY8epZpqeymYZivV6bw13z7dUjjPJEvTPKq",
  "key9": "4eCAzXoYp4iiwLJkjDGodfLeTjgfbT5fWLGGP8fDMX1zagBWCmPDhL5EEq8UvxWNdkYQYp3e2xUmFTqUCLxQXdhx",
  "key10": "23UcQ6TYHK9XtcGKet5XSc5hzr1XyvuKfVQQnjCg6xp7h5Ra7odSJF1uKcYkHRREkeacvJxUPYHXMvTreE7tLxEA",
  "key11": "4oKYniaMqQGbcyNctoRNaXTmR2k6SQSUxY7SVSuaAnQ895fXPj6HfxpAj6nb1yr8KbkGTXaj9uugrxPMCjL1fPZr",
  "key12": "4PduftMCVypUhgVC2Vg2RZWm559c5NZzWN9KP2VNNURctwR36D8PXhXRKEkEicQNS9r2JZQrAkgWm5WHX3cfK5fc",
  "key13": "ykikoHb849xyA12T5Lbc7R7YoxGWa5a9pZvwJZjUmYHZsCx7paQuX57xffVTdFdZKKQmy4S5zsPgJRmDVnW22tx",
  "key14": "1Uf5UAN8ixmYSBjv32CrJGgqPH4yGqLsEsojnaCnLRUa6gWdQ6F6sGi3NXGuxpDpejSupqhuoae1XCfR5KJKEAk",
  "key15": "3qAfmWBatiK55zYxa4zfbgraEyGgwFLeJjMYfEQ3HDidUrEPy4YQbSAWdKzWiutQBSvX3kVVySWxQmc216C8NwNM",
  "key16": "2cBY77ocsU3ufYv3wBsiUdBpf3zmL3YB9noH9xCMNftc9wybeVc1S925MtGo6MteXd4n2YJSrhMvCjrCcDuRxswK",
  "key17": "4th4bR4x8T1virF6G3kBnk7fUZuQf9EFqbb8U3bQFcbA8u5aRzh3rTjd4ZzXsy3gXBW3yqsZnduB1AC1odovKY2J",
  "key18": "3wFHd8yMBCc9GG2gbKWVrNbewUQEXApJ47bpDHwivSc8HzwxMPMXPGZxM1T2sFeC2tzFmyxM15Cx3vrkgYyLxM6P",
  "key19": "MaPjgEfnQy5m9fJKA5A3hVWwoHTmrxdDvQX12XUNPUcYnksx8xxMjyuSwTPNdyGjZhkZmwjBFzbu7p4jKu3Taoh",
  "key20": "7pvGKZinWfaKRc5pZTmfwnrjbtd8UxvjUUdk9b2heTU99jj57dEZTfPPsZTVz8UuDUvr1L2f82hHv61cGt4sJ4f",
  "key21": "2Xa7HRcCUzzWiYSKSQ34bEd9vCfNww99fj4aemVJbF1iCZiL4wTbdX9q43ZQo9HPi8hpz76MyaS77AWMEQM3jwpV",
  "key22": "26A2y2h4t8L6PQBZpH66AiUDUzYZwAfbaiNUiusKAw3Jt7QB2HnHJ5XVYe1sMjkCt5LwW35baWpShx8gmbcdZsMZ",
  "key23": "4JTMiQGwBS95hAQN4Q3m2YTp9jBvbkbqP6c1fdZZSuoLccyNUEjsYDeV6Sgpg3N48jA6TqDQzyX6j7GqHA98gy7Q",
  "key24": "5yneeX3ws2NrZeMktttmsQNMBrDSMUDLapfTf7rAK4tRdnYBtBgT6sJz3Z8i4aZXmoMjWrGqHq23aGUPsCkhTQpz",
  "key25": "5oMZbroXVykk7nFN5PBsSxWav36tG3RAgNFUYCNdKmH5wXB2LvKxtzFoMBSx2SRUU7gbuuMvvSMgXDLGWiiNWrue",
  "key26": "UgfkN2MWz5UzZYopuHm7GLxN9KB5Y1dXBYjWUAmcmCD7XespaBjMyS4zCi3Fp2tcFCcrMXtWv5Kv2baGuzpKruZ"
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
