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
    "MpfdYP76vgksUMpxyxEzoW3NaTdMz8RrSD1EttWYmy8S1zNfyoB7nqp9Lygg9HnaAi3K3jy5mTt9tctH9acrDSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X98Zg2bu8atgin486PAr8GvM7GeBQHtrdNXopnWZFh6mgbtPhbX2qQrhgXM8qnGkzFEctGfQkAcm6m56vXpeMVe",
  "key1": "4dxKh9UVpvHy2GLfVoiUkYeVbi7kcPpZNBcBydTZULsUcvd94CD4BUrjo5o8eHcNAPmp6UsqikposuCh6VsDxfG2",
  "key2": "5LXC5kwBvFqLfa2yFhpgHuQnAfKdeEdtuVdXmdKAoYY34RQ16eZNmNFbXzWDin8oYNrn6JwM44VaRJYG8f8s6mdH",
  "key3": "3qvcLYAMUen1Mc2AUU8KeUJb2cXnvvm2WwnfmywcDG52T3Hjuyc7BhjeTFcJzDX9bSgGWjfXF8QPVJJgxkbqThrZ",
  "key4": "4vzGy9a3NS3xi3Vy9KreLBv2zDoaj29gfvVyVugnqTJmQ5AED8i3h5gD36eT9tcPTeKboxrR887Ycoxv1L8UYqZ3",
  "key5": "2wwGcPbGCxWvUuYbcDmiaoJ31Z1N12nEL7EfQ6eyRaBofU7d1C78cta2RgXsymMCG7NVXetWMU5nKXcGkQ2SNCGf",
  "key6": "5aC3dEhebKfXjootAGuKUWf52danJLxRXbptFfR3NMutg4EGWYGpjhZYG78iePZ5immddXnM7ok3S6AHRb1z94D7",
  "key7": "5UbjuCoMuTSv2f6i4eXgPK5SLqMgNRoYVBYaUZSzW515zUN5kDWyFgjXBaLL6eAuzMjHgDJ7X4szAtVkQ9FSbKtL",
  "key8": "299NdnQn5Dd9DecJRkCviK2KoSHMjXahvkXQjE6Pk3FzFwCJ9q7g4hLL6Kbj586y588bn4R6bdkQyyGR9Wf6bX5m",
  "key9": "hhiGDkb2xGjCC9R42EwEPXCoSgFsUymgxzXTaKbAFkpSSwA9tdbBoKh7xQKsDTXRiRUq86xJc7w3cs8GL7U9Sbr",
  "key10": "5FbdzqCX15N9n9oPq5ajiFWhsNGvTgrw1mHJbAABJ7bM9DT2YDCEzPivjQgoKTTpCGup4tEzVKUwuSQwZJkfkAhK",
  "key11": "3GhtigzQV5p79wPqDjuJ42oYUMyCJ7nY7n8w2EahhsLn24VMDYACvoZzAsm17JEVd3b6NP24SiddLDaN9YSLPham",
  "key12": "588gVLZex6dvLcQpnvq5jAzHshaNBRoogng36k7cUZsFEnwdsPfN4Wz6W3JciNp3MuLnanHGptVJp9GWCw15nWAL",
  "key13": "4EjyEDQmngUtHbziPG4uk13ZtFqvoQNKcRx2cJzXtwdTv2BYm8ursHf2E4QXtEq4hVtf1MHFgN4qrkBAUpKxWHxe",
  "key14": "4CBYXa1GD13ZRi7cQ2XQeCoR1G8f272LHdf1FggEccDxUJuXzYdctrvNJ88ng1LtgPuqfR7dPNuKkmdavoYaGdmu",
  "key15": "5RXDEU9uQ2EX2dLZpkpmXgnrHcicxnYru58fUgkjKJ5GacLDmmUqHbvAp1K9RMpdAAgPEFYPzsxcFDKzZVAijTAu",
  "key16": "5mRuzZbCK5qWLVn8FuekPHaCMRqUJjZayhsYhm5pfjEKH4A8qV1WfCAZesbJ1df9a9UrJqfN8cpzS1VZQA5PWGud",
  "key17": "5Nu1f6Hesj6VyjL4YwgWdgddJLW2mRJwRsxfmp3Zuy6VyBhnXsJgePZcmdocnsdkt4qosehAwS6sZJV2G2ESh9sy",
  "key18": "5EGaZdPPzgH5C7Ec8qxXjFYitz1qcj8HasAYR3viVoMU3G2fvhbvhyfUpRFFfpdfYW5UxcK5mnyWvFu339iAmNQp",
  "key19": "2fmxAuKhT7WHP6XX8vVcqbGc1Wg8amQEpPhF1YkDJhUUtHg7T3PC5VAF6q2ZnspRqHmdoDAztofGKqKXqHm1rNc7",
  "key20": "xdSAApWcXSDcXg7smaegHnEhGVCqhFA1f62PKyrTW4pR4tR1P8uwBBdYhzv8J1SH2thTAretaH6r6HcahEhhQBs",
  "key21": "294zamY1vzwkdU2gWUf6LK5bZT5pXq1L6isPzrWhV4ZeViJZRUEtMYSacvarW5TwVmrCYjtqKDCSnZemwsBiK1T8",
  "key22": "5LmZ2JjkbTuEVsP4PcMd3rARikaXdRqtudH7hLH8EqPpPsBhoVSYE7tPE488pihQHnKFoFStCAU3SqH6t7kzdcN4",
  "key23": "3Sr9van8eAcxuZ3kze1CREeYwErxFGKYMF39ciZGATwTfnjNm1qysrQ9CFUkG1Yg2HKgey2dhsEsRdjqjcukpye1",
  "key24": "28fRjuEr863zwcRACnbPds5p7v2JyMdrdxYxPUYNL11PW9bC9jAcgnYL1XXkZN2pQB6NdJYPLtaur5vmWWey4U8Q",
  "key25": "5gQUdVj1y4rccy3BjSKAiXt6gNxwKeDhuGNhHRqGVrnGsRQx4sbaGeQW1xE4NpARqMgcSmN1wxRSZajpW3GX97BU",
  "key26": "44K9tCLPYw8fPLXxJQkzixJK262P7t3Ndbk2vC4fgVfjtdwQYbDUN7wXFfT8JpnFxJikBaXHTXNkrRzCKizbpzKE",
  "key27": "maeLFbwrgxgPXn5URswyFMTCPvASKR2JLdJVT4UZe2feKR84dkbcKyrMpWK6yXy54DvV5Cd5PXoh71ZhpRAh61i",
  "key28": "4jLcuvn6YfgDtQKvXFsghQVQudCXSz6vsAXTjyseDAxGyFURmeGWHqLetVEFmAuYHcTa29fEnRPcGxYjdHi4MNQh",
  "key29": "4d7Uw1XThcTnNUhB3t9hFdegfYPqofXg2u868MVUygbN9GwcL7CAJV7tVninrvy7KVMAu5igAPEoXXBmQyjirW8W",
  "key30": "56UrEUr97Pg99ok7MWmmBe1wjpXEw1gJ1sip59CBvdMM9AcSqMZ5JjFbRBeJ1ySuAPNRVsfjSwqJSs1chgYDqwaG",
  "key31": "4efhV8VE98DnDyN5SuZmQyhXZbYVbv3g75fRt61dvnT22mVsNb3DyHj8vYaSyzVFVLBD6nzeoz29HVeZcunueVSy",
  "key32": "YKKjEWyg6qSmCV8sKfuMNc93Ybsv2ddTduWsnQavnfVnqVc9mataFbXTEduXmUGTj7XHis3aTNizhkQt9s9wVCq",
  "key33": "zmiRtHJFZg6BDzmVpmnzobCkPYuEVufMqjLtXiZyzA6R5n3GRpPpHNqkqsJ8jg8MvktHxaRhxa8geTNfuLZzccw",
  "key34": "2bxJhU9ba1G56GcjAtWLdTesmk74SMAKD2AjL32wqYCBzLwmhERn4HVnYCnJsZFD8hZKwEALDu2qsUFzPva39LBR",
  "key35": "66mqQpTghcfjiua7sBj2E7wRrgkiurDKXHK6hRh56U17zk8SyVfsddjzHfWBdGk8Kt6wrGTuqkF98YaenxKMXZwk",
  "key36": "4Uj4o15Krotaqe7gEnX2YX5AiJ35X2nNK4YqKQ42mkuaTbNydUdhQYNXxe228jQbTzAfYML4tLTTRxF7aN6gHa7w"
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
