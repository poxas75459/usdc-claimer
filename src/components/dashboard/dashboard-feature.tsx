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
    "5R8ow57xn5NGSnB5Euj2RTNvXU3MWLUJWz8tiKH3Jt3RXQp4dsmWRDhYEcf1GFfVxwnMfQ98K8yrZTNyfDHCen4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nouBEARZUfUFs9CMzbiV6sPjSof2FUVosBV3aG6sxiJqMaW5MWeyQEBB6Mn2mudYn6mX7PM5dJ1LjQckHrtkAcJ",
  "key1": "3yw57tkS4T74tnskGHrvgHWUR2SSNNZe77dC12fhtq58NzhFd3Ak2Qz4Vdg3BAibUFkrFoEN6qRR8NqBWKfJwGma",
  "key2": "5kTCKUrfsJopgtpBpMuZCbt8d2ySGtULsBV83x5YepMTZwMJ6f35unoT3EBYifKfNzbCZMNKfpUPU38rAgfxoTud",
  "key3": "5hQFA5CSQ7trZ5geVUtzRkxmkyFb2PNzVHr5Gcv9QWBydxF2d8VLdQqM9AUUGWd8MpMTjc4nWXivY3i5p4rNjHQ3",
  "key4": "3dF5g8LNbibh2tHGsDkxg4NbHeNA6GRRPw5zya9rGfjdVUUiv2fWNfHcxKBS7nq5YZq5kfNfhZFrvBvYyc7Q4FJo",
  "key5": "5S7MxzsYp6FvFGNP3iTCWn53qZxH1Jiv1UskoRPbbtey5kGX4BibarRT8v6aUr4HLfqc4bkftYUnnoaYsKmacg1M",
  "key6": "4pMJgU3W1giZSjuLdmruQxvRnYJGpBB8FsqBN7Ku16syxn7XCe2YgeHmyKgiuE8oSXqhSMzTUM7iktU43E3nUzga",
  "key7": "278kCieCEb8HBbzuEAu79qhPU54CsDU2UMJ8jHubGxmJLoo5eMKi7GMv95fAHvY1fa55y7yh5Mn1nS9KY8Ba7qkG",
  "key8": "fBp6H3tPZ9mVPGcBwfp3p3JzoNwCesCRxtUmLFuiMdxMt6bumqoNpwHV4DT19G8usWVdkqyoNuC1JxqB7vuz35a",
  "key9": "3hLGi3VUnmgKZZnsFTw9tg4oNExaK1RRhK8QBaEqyFFesmHD8Yc6Zq5LmodbRnVj8K4niNUny58ZTPDC71naTAWW",
  "key10": "5jBNxHkPgc7pwFw3fFLXTQLWvCzSZzjHskMggVAMheSdKMrGSgqN1DEMRFZ5BFucPuaTk8Z1TavdoKsVgus33mwf",
  "key11": "2zwoeJq3LYhT6krB3X5SsjZtSXJ6EeqXRgWxNBQnFvfXWYAbCaJHzaFfkEkcC8wdzpDyoJteYhRxgadiA6msrVwv",
  "key12": "3W2an6yzNh1uigJBb61UX1cLTPSUE8ynUmq7ULg1BBzV28hin5WEc3NAt4wVEEesGsedSMH4VCa8HjrJ3Na6xWVB",
  "key13": "4cDPszPhid1Ggsfq99sKP8XvAMVQBNr4d6u5gCF4MtY5XUoV8dPfwzy5Foz6Swmsp64WGxh8bGfLqeSYdBPNuXmr",
  "key14": "ujzpX99mP5wR7wrmYkEyKX2DvpdB3kv4gdUNJqf1WaBwPzB6zx4pLP9Ur9etQeooFt5eyeKsHdrLutNBDExTC9x",
  "key15": "3d4PxFyK8Re5ETxDWht8oEDwZ1KTdXEoQAhirFsC8Up6cQufsGbbX8mXo3T5KrxeMEXNsqwVesXRa4FF93HqaBFb",
  "key16": "segUyFgHa5DUZWPBQ6kqLCRAjSiQjp68G8HCSfWXU87pNq1cCF8Vujp256ZWipp7L6iqUX78xqzyf6XUmXqoLdA",
  "key17": "3DqHLjnAwAUZwsyo4SssJimKX5NNnmCkyPyoYk4RSYLV6vdZfYgC6Pf9fC7mHmjQjvcqpn7MwgrYiXDkg6xdzc4k",
  "key18": "4DRHSgnVKr16adJC21Y73Z1iwbvGp9EDeFHrFCYo912MzrbPE95tNhdkojoVscKb378dAA3XSvAuwm4162JiAGSy",
  "key19": "45tbNLKJ96dMYoa91rCZ7utBw6tGN3rLwM2vY3k41cSbrMYq8PefQtpSybvCiFyJctx4P2QJyacrznRTb2zoiJzX",
  "key20": "2oUvms7q4G3ynigTtxg9APS8MiQFjjHx5xbnug1uG96Ez329jHZUsPTYa8xWUpMJxwNRyDnin3zvQhpse8CCpTGT",
  "key21": "ECF2iEu2ZphMMhBUuc2A85YwHYPH7EG6H5HrGhCERk4TkNMkrAgNpJ68sYSQj66N3496qxasaXYrmCmxWguVaBh",
  "key22": "3CaVNqhHAabsevVrTCg5Xra96VEYujRyuAo6u9wZBRfGQ6jPAxJzkrZfbqMhy8s6gHJKm8ai6LG5mBoqkoDHuTvT",
  "key23": "3dDT5to5ZFKvyZ7f1Gi9RZQDYqPsGW5Qw8PM6aCW7K25rj7QDZA97b642XCC8gUnHPdxkWdAh5LwL29J9LRYciUQ",
  "key24": "4pMuf7PbirCvqB3tjUo6wipKUCpPLZuCNZKxN1pc7NXYez4n7EMSozqRi5kxpoHuQ66GxyVFVT9DXnng4hhy2PS9",
  "key25": "gL4PVBfCq6eRx773rcg8R38NYun1uie18U1nLtZWjyUqqkBipjUYrBGbvpDfN4sGysNJpmo7AyUax4LPAVbrHQj",
  "key26": "56n6oSmgv3EMhwmUPJVrnKPSqfPxVFS6EuMpaJwgWscAarKfPsa4jsHHaUcELWJvqbvYmd8STEMxTxs4i15ZVGL5",
  "key27": "6147r1yCzUFWugsTQ2m46JJhWP6PEAj6ErgxxeVTUcXwKf5hLpYcmUWfG6MvGmiEz3SEysTXTr6fFWBAVMEcTdLy",
  "key28": "54e8y78r11T5uDGp8hFR6vC3oi31xTA8SUcpFo3bi6GDrtScb4Caa65jnoqFjfwPaxM328nttU2FoPSkRZBUzMjc",
  "key29": "3FLFhtQ5oH7nexSZrCykVLPsFn5fsh1eSpP7L83w1PKawEg7TFcLEDwEWKrYMt5TrG5ttoibGH4oVsZefEKjc587",
  "key30": "3RtWaZ44Rmc31QMqWdvxzqd26SSnNb2CDooroNA9XfvbEHSpiFq4JEobiBtLTEU2chcAE2QAzxHnMQqiYRy3tzp",
  "key31": "3DmJRxGjS8n4MNpDNYCE3gFsrqMXEJsh4HzV11pbDURyAxUdHYxX2nKnbvF3pWgwtMuJg4dnJPn4xQgV2GmJzDr7"
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
