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
    "3ZHmtgjskSFGsXadXDiXe4D4GkQKcSW4LFnXfZBNxRwq8gv85N7hA1FwYoZGXGoR71itSa11WGD5p46h5xKnKHHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Qx8RoQjQrhBjYZtAhtWCw3gBDjqBvP4rY35D8eHaEiSgDiK5xFb36NJxKujwcpagJTJ4TqHidMCZuxQ9WoPFhZ",
  "key1": "5kbrGSgR5BM8opz8fhAZ6MRy1AMpX7zcd6ctoBA7aUHxnUGaWgxfNfftS2TuWsgNXr9vi4WNzu4hMMXryAKHQVum",
  "key2": "B2i9zzJNabCoiRFNiASs8wcuqWJQvzMTkFw6PzNbFvz3x7Rgrcb8yYobxW8CT5TjM85YVxwhbMrkYEGCnrcCLwj",
  "key3": "5Dw8uUCt8Ka2jFVTuaXMEfVg8PJK3mrQomGM2Xco2AXAw732z19KD37coCLGYV9SSq86DPAiEcegM9gw4xTYK2fc",
  "key4": "3bYqJKa7DawuESPk7EzAAa2KBfwSXh2erWPfranJiiJLJoqNHkzun47jHc4udd6X7TpHH1AohBSGyDxN48gAMX6d",
  "key5": "2BpDdmSLVdAjXK7mxv6KGDZRk9xjCRuhGg7hdb5CkYaU1bweYxPdYXJatNSoPe8naqpxnvoyQFswjXQp4grVLYaS",
  "key6": "4ZrESbbW25wVbf9VPVYrmP82WnXawFRjz8NwnJMJabHsiEyQKzNhQ4kAzVTiPaWcgBNxPzsCwaTbz6hsFuwAMKb",
  "key7": "2kNb86dJsbU6EuB1sfUbVZpfXFgqYGHwm3zWEJBtK7dg4Q3N5pV2298SCcAW7MhFcu8QsyiMHi9tbujTPoJ5MQcN",
  "key8": "53Q951BJ2rym8aSZ64k3Fn7haLT5io8Epqrx1Rc9Sa31FXSFqRKhB7PYPuF6ffe5JZ6AeAX7v4NerseVxHnxP37a",
  "key9": "2mdmF2A61ukxdwcgVAm2uQEoqFdWAxCxn3irpEWXQNrMHwjScS822W1Vtfbe4tsEUQTHraDqJBdLTbnajTDNAE7u",
  "key10": "3J7PxrHyPXYxm1bePWqW7Nh48RaQnzhMX3PVLjDpYyw7oW7U6vzwg5j3pQyw6nwJCt5m4tYi7NoK9vm5wckmVexa",
  "key11": "516V85VakFL4caV1Nam6NgvpcLE3n3ihYe4maVqtj2cQugdiCuFi9Ue8CWmFocm6xAG9MxfVBj96NTFWeosx4owN",
  "key12": "55f1JhTL25XLx7gMsPaK6YQpJgkKppzRbwRFrbL4XNjJ1oKZX5DbXxfvp3NpFcDbDvteZRFT5ZK921Je22Vyvek",
  "key13": "4R2LGE6nBv3igyJBdGgs61ec11eyueGpDogq9o32Wsdqfq5GKckeXJ7HvmJRn64R45wPaQnnNCUW2vKiin5xRAWS",
  "key14": "4hUhy6JDTv18Hj53DTihtYRNfuDg3jJPD4jgZYQJvYNZoWAa8XuxXGh5hvFz267mqwhvo51mtQtYa1xwDGkvoYYQ",
  "key15": "24uS3c5Zt3Pp8DjXbNQhymKVXWTNDS38kJxDmjAKKfnxr5d5JibwaYVPMyGsHUpnb9Aun6aZ7MkyAFDXg9ASBQEJ",
  "key16": "5JWqmiEWBjoB5HEXwY8UXwzkesy2DLRDEEuSk5KefyG9RjTasRZnutyHcUHwu6zE2zCC3DHQqFaSnNadhu5igbji",
  "key17": "5yn2nLtJYgtSgi5pEte9WWPLBcWgpKQB5iQEXUcMi9s9kcsgX8W7d5HokuEnzxFTipAQD6NTugnozi2DNohFShg9",
  "key18": "2ycJhsDaBnESRjjWfsGE95azAQoMcV7sHA8Q8cnHb3ggJ5P2dXhtuyEboi8YXh1hQoWGn1Nrj5X7DgNJjAvrMpXP",
  "key19": "z5gN61wJyjB76dasyuXg3xuYuGAnGWS8r3EXSpnYDBaJMY4evUc2s5BjbNWgEtnvv6tpFXh3Tj3tfJ2YqWeKwxJ",
  "key20": "51pCf5A6d1iKPGfPwjatBpUFQr4C4j7fdnXnZpr9YxvE1qjPk3XeCndSNL3QCeSpYCB2zQpmPwnS9UgoCXjWhTj",
  "key21": "2JpSfzY9YWMPCLfR2U13hDgNh3RtrGe441i4aT2CSC3oPRZrKmqD8uGbpCMqLFwzgjxBMEr4DHkyy3cwaehrHdkD",
  "key22": "2odZAdv3JXxFyFAd8sjJoYk7x2NtCaNXDgKRbFrTBi3xgkVpsSD34v9atFghm8XDaEXMxf6cwTVF55y28pzGJzaF",
  "key23": "5SYBrW2BQevMLhGpzcixFabKtgyYGmyxJPXKBk3tTFREkYRStJ6fjYBbJqjUJtpHyVzJj9FZxjL9QTsmNtCBonqT",
  "key24": "3JNrDDsc2GfFMSK4ZcqCPEVFZYp8XScwBRsACbThPmvMsSnDyUpcYaoz4i4NmEqnUR2FMmFx7xspzoACgKm39Stm",
  "key25": "4wsGioBG4aMuhpeNxqgCjwAGzeGCmTjDgwfBnLmn59gGyrbaAFQhF6LzN5uPaLyz3BpGo1Sc8iD1jVrQeQxXDkse",
  "key26": "41jWtxXBWiYVcsh2vh84fWyAzHnGRyeVUe7fJG7SUyUh4FhN8CaX83EwPLBrpBJTmDLb1DaFSmDQPaugWhwgDnN6",
  "key27": "2kYHHrTfLDeyXttxcYXMh7hGW463hqjvBBp4nuPZKD9YGWRMrodEwG8LNqqFhhdQtRD5uA9TuMGCfm86ejXvwduD",
  "key28": "5DSoGNGR9SJRAo1Txm983tpAzjDZUGNfvuokmPrkUJgtfLtEZywnwBa7FN5ZRYNHkTPa1kumm4Xx2oaWUqHoRBP3",
  "key29": "5XcfA54JG5Cxxr3FrwQGcCMNrkhE6A5H3bPryc11hKNK8ck8bVfXU83QDQhM4tkg18qwiQYZoW9XDuoERAYyt9M5",
  "key30": "S8GFQ7hga2G9jGSmGW9yaqHkydNoj6y68iCNZfc5B7yCzrAVVVi3ASiygUgtMoJw6SV3bMgzXHmhEJKHEsAk2s4",
  "key31": "3GBaV9n7hniHFk9XBCFjhncys5yrFJNLT2kiFYwDiywfPTE4UNEeUmmMCqny56BamM2HEMosrXRD1jz1H4UmbxEQ",
  "key32": "3Qc75afKXwEEeYNS1zUykiigtoeZks9YrKmWFoWBJEH2t5vnqZsuiS6dH781Dea5fh9xeApHoYKnNnTxEqdwjBt3",
  "key33": "HkLM9XCHQZyikJu7PZtL92Vb6waWW95PbxYQaU7u22VjcHwx5YGXdBFKVAWXJYoGykmpiyU9a4iUdHUw9AshJdm",
  "key34": "3wQajbrKMxDj9RuzFfmKs345GgoXDi4KZRipyxZfeDEZD1AjtXe3wxdNBB9xTMGraCLhJmfGcnipbhWnWsthUaBh",
  "key35": "4uJmnsuxonKtSHBL6fx6rpUYYrMv5QkuNmJfdySLckqFmdM3yAkda2jQr5Mwgcn43sUfp36bXPxJeAPnfiPScKMx",
  "key36": "5dEMxWHkrn3AWqDKhaEdXQf3npQnvewn2ZNpC7dPZnaR6r9skLZjD2hRvnPxMnWZX15vD22NkDHxw45hN4Bdh8yH"
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
