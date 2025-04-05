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
    "5s1v9aBdhN2B7htyAFbK9ocqGajdZEkrNYZxLmv4zS8eb7k36Xz4z6dVeAJsLCDReEHsKBoE653Ujbenq3dz8Pg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pa7LtoaT6VNKbv5cudkKdVeJkk3gqUt93fZLr4hvsRmxAArMbsRAN3FT2izDowtPr6k9qtdMa7xWfgszujnCsz",
  "key1": "UK5ZcPG5BVtNYBLM9Z2rMKMTNc672SymETdCNnYShtuuavJaW5nSWqvdSj9VBJdWHrM8mfxYAhqVU4DUjY6HpVb",
  "key2": "4xDNiGfXZ8VGKdp41st6ZRCtL1r5U9ZnhPgwABAy7eBtrF2NiBNUPhu1hM4bBP7SN95pgoUybCQq8s78EgSudjqn",
  "key3": "2mifapQcGxQnMZvCHiErG3MA2Nibzn3YS3kRbfowfGWYo5ovhBZNEdU1axgfqwFfQ8BLSiVrMcpZWMiqtPAPxhGh",
  "key4": "3xHW1HXUbgP6RCP8rKNhSNmr4a7harno21fAomhTRziFtDxUs772Ugg7pDD3r5gonnMmijiE2BmBsvEeZjhAnn1R",
  "key5": "4RP64Dyhc7yp97qm8fQaMMQq9sUgE9693fPKHZJ8qX4DwrM5o2qwkfBxWQNx8q8gt76VrRjDyt3TTKywtkkFq8G6",
  "key6": "5NY4aRqPNuQe96bER2RbVffXAGJihagQWAEkEG5oi7GaH5eW7UBSPyHafLWdAE8f31bXhSCRrH67u56frPLwsqaG",
  "key7": "awKFWCP3ADF5sZ9AcZLanNYz4zzrxo81PzhW7BMRdoUnb71fBiPPixjgBiM5bR2X2zWKbzSNEA5ukqNjUx4r2An",
  "key8": "47vLPhQtyCrj9EJ2S84xYUyDbvhx77QgPzMckXFLSYiYjRa7AYZtN1rahxvzGDQ5WHJzLxp1hczb75cNkvh3vejL",
  "key9": "69bffz4YxW6S8EbT7CH6a1sYVyVjj615PXTVXKmNWLEBNkxWee643RHLgSyrhD6pxoJXo1N6kPFGjrxDb9UMk2G",
  "key10": "4bkDxnZu56ekJ9Uodee9mZ5iaHh4nFH2DHeAjkpfuNv4p91C6k5TgrRMrotPG2dPvnvXCBU4zWi8UVciVYEhbDYN",
  "key11": "EnLCDmACHUizMCsw62SgzGL1xFCnQyFKQ6xq92qNc4ns4PnQURrT2hMT353Xgwfv5VNxw5CnoUJBUN6Djs6YUBS",
  "key12": "vdhZ5eCyPqUn1esJsNqHEJhUk94eCDc9ts5gp8hVfTPJjbF6UkJ4fmvLCFuLAMpPvoKHD54zmXWZPAWuh5RfXZY",
  "key13": "612P8hmyYVDPfKF9YSyScggwMuxTM9oSY5srqeLMz3ystLTxH26S1LnY7eRHtGdwosYsGbwj2U9mvSiVLm7vsYU3",
  "key14": "4nBvk8owk9GxSRNHbhUwrGLwksykVfKB1FCHprYkT2nadZcbN5TetM7vUgPP156QvY7zJ7iWFBQE364L4b9UoJm5",
  "key15": "48VCLHHSdsEaYnytnw6KHmKQiwVmAGKLeZG2SFoKt2cr1iP7ei8jSVePZH7V6LkcktSzLkTknzs2btGQwoZxBG6j",
  "key16": "5p6ih3zRoHq5tXYmTaZohFtPdVF4d2fNVbtLPJUWrNzDu8uok3hLPscakJx1Gd3VoweJAVm6y9z3AvjW2yECjj6h",
  "key17": "3nnvK9FMPRstdqK2fCGZFX24RFDdvFhRzwpBNoerCyPyZVMkyBqLHQiPqcMfd5rV1WDMfNgawXueiwKtzpVkuk72",
  "key18": "4BWekgqvqffzaLrvCZTJE4mg9jpJMuTzBBeGGtf5pgcCRNZnjSrWBVWH8MdubHJo7cuXmStVUFu73L89BTwhv3rf",
  "key19": "5H6UWuGZWKjDtsStpzC9X79Zc4UoFbRn7faiLyLZwkbFNqPvdHWWEX3U8rTEgymqgqc6tvGdACCMNT98gMiwXUSv",
  "key20": "3s8yEqSe3NETSbqpdye3MrZpkg7GCfLqTfgHxyJPFL7rNxB89GbJHDkWbFLfaozndw3ZgLx9WfRVrihDLukJxAUU",
  "key21": "2wL9shoqM695tnNzCjomvQfpVZbF9Wnh7VddWMTp2UPQtLTyxLsfRhzwJ7ncKEN5aSkLSxbi8YxKkMKkrbB3d9nY",
  "key22": "4EQGeXA2sQ3HAejo2rf44TUw8vrP8wxx4VcmhryZdw5wD1FHqSN6dft7vm94b2q6kSBgsm7jMPU1Aam88RjwkZGo",
  "key23": "h5VshAdX6TfbZW8gAVH99He6rAqHsfRqDek5k6Gc3hdKihQR5D6EK19u1JiYvDbuoGqm1mMmNJRnfapnvBUR7WN",
  "key24": "2BDSNMQkwXkfU7kCBk4H6kspEQU1Bi5GkHkpwRUH9beUEuTvxhe9PTvQMiQ4gPookgsam5MXTRqg6gWJct7F2HQD",
  "key25": "3vbuaqWHf4tVzatoafYiJNzadXL6Sg69oYziN2QueegWZNHEu5W5mugtkSuGSJu7s1CaxPxujpNUnadpQZFZvzeN",
  "key26": "4cit81rfChMbR4fzcKFMfRCxyoggZYSEGD9QQH2rkxd1YS1BdMFtHrxNCHiv7eUigonR18GsCSk2qY4PFubEXTKT",
  "key27": "2dQsNquJGVYy75T4ruXDMJLqLB1VAUAc5Nz7S2Dp9Hdq3cZakYzHYFK1YjCJmrzTWe3Xy52mG9vHHQN9xN7kpVxd",
  "key28": "2PMpU9W8MywwbFEU3TaWfmEGH7wNw49byL1jhVY3PhcCRPbZJzAp6fbp3ct6pMtRCiNM2R1vLPzs8xN7v2ENu3ou",
  "key29": "peyhxv24Ute4jQ5dwmFf9kdnPfqoQX9wGdBuzvGpYfCYhyUhzTyozjN4WgDQj8VumDYcU9nE4YyiQSPPZT7jX7q",
  "key30": "4Gi7i3Uy7oDe64mtVS6gwdJ8KtPLjcSVMsY2f1FADBQp16HVMYNYiKjbjsmyBeZmG1jva3PYu9bVtaKy879HkZgu",
  "key31": "5LipbWXN9FqzCYhSXqgQX7eqP4xnVBdd7FMkMLiVdP1Ew4C7bvYpsSLSLgqbM5GG7agXHUf3E4yuMJEv7BEwHYvm",
  "key32": "4qS3T6p3U3QX2u1B3tFRk6iEo9Rs9WZD65gPfhPZWUGJGbfn3w3WyCBwt7mqmEjqats47tTdN9cwMWQTVebVf67m",
  "key33": "3rnrpxSKaQbVCsizJgmt8kDhjdDJCQ8NfJUSdiL9FavBA9GzT7VEALpvtPL5D7m2wFQXxzkNx3wHX8jbKZvMpT7e"
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
