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
    "2MteZGPwKPQDnwbrMoPbvoLiudV9vXCwisHEVYYdRNnzSEQBc2dcoKAaMWu8SvmHgB6NnCD8cnTMWtTMMp22Vi7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33h5tjvzvc2fw2rpXjsaAXruZSEAWeNBSC4x73iMf6Ztg939kVsdnArrzbsCCF75a6sKYT9oxY6vjecVm4R5iv5c",
  "key1": "4jE3aj6jqKoD36F5zqXj7tUgxtWvBUrRcjf8YtLhhGXomDGLL2t1G3BCjpB9exrS9Mcd2MvLFCVaMHCnrnXHAa2p",
  "key2": "3yu9ZizYm7p7rCKBZ9e4U6cWBA11JYh44mCwM2KM1CzH9PrB7fhQp7GhEHUaqpquqkHGYFCrrYxyVxXw1GH3c943",
  "key3": "4Q13ULheNbUtS6t8Xynukv1duGLwNZkSNhgBTfvzNiR37z7XJoo3caibxANMFYpCR6DAtdG4XwM5uMVtkfJMPrAG",
  "key4": "4yNwrBL76qqbC9bpExS61L2S67YMepHLAhyvAqkQDxcjf73EXWJQcYBfPUZ3ZnoW4BVQq6zBvhHXs8XZNBSQbx5F",
  "key5": "xNNUXxzyvqEbyFF5NERzTX8xkbuWQc9nPLfXcCKGGwAhjbrZQi6UKK2xFbyV72pBQq2d536ALGgAWWpDT5SkYxv",
  "key6": "5hJnGRrPZRN7BZeUr3mGEcrT1yMLmmNxTmTFBPcY5GBuQ2CXk67eBmJaCCFZSYZWRDNo4c9BJJDr176Fcpt9vPeH",
  "key7": "2VSJMa1YueQBCMDyJSkVXTbHJJ74igWgt1KALkxH8NahRzYfxKFzMFDmqD8D5qEZFGmzjMoNLFzV51s9pLy5QGFR",
  "key8": "5Gr2n8Y7rNoEVNjwMf7cUujSFzTumuz5rmAFq6oioygMWhBENXiuAR3s8LabTih75KPrxVLay6ByPE9Wyeq7W6xo",
  "key9": "3vhjhmkPwFGgQDCR4dfx7p15PQGXoKPJSQkve3veNdFm1nZmD8cyNdY3G7BCisA8En7uXRXr5nWunGDNbsGMhpoM",
  "key10": "5LdBDudiKnwXSBX5pAcauCXe4KPF7zd543X7vRCxPhpy8Wj9RkpVuzh2Uzr88UwHdnGVPDYwMibmVKNfQbVwNc8J",
  "key11": "2d8XFDkLkTxhVb5JLHRxoPhvdLXMLiXkbwvk6RUW5Vd4gA7F5KKejMQS5By1cc6VfYiphSKuS1qWfPxqRaB6FyyP",
  "key12": "641y9xyDKbjQ6U8ADtrCPS88uUTApii13ipwqvxwP9VZBFGq6m78KqrBqSHEXATtv9c5VNRrM798gUcCYZq7ix8x",
  "key13": "45GfVgwYcMeTU7MsL4tScwTTZxZ4iEjF5BcJEjT9kiJnZ2SUpyqxAJ5hDJu82Vn2oVnozckDsZmzAd1RZcTAp2yC",
  "key14": "5UUvEkfNjJ3Wo283AJDi8hGejHBSg5mgRSE6AjcQJytkw4SRMSM7MpdVtDDqLJr2YENojP3feiQe9Cg2gBRzRqke",
  "key15": "3H6SSC83gxhUisigGqEkBgsuU2HwKQ2VRbSb8Sq6erY7YNcJWuPYANJ1myybpkKDfCmz4JuwkTKg5SWqfdboh3MN",
  "key16": "5WG75HY44eNdJDhVsk2GdVJy5AKcd6dLimWs5VL11SULdbHs33dWtrUiBNUEimNnGiwLQxDnV7xgJmRqLnmr5omS",
  "key17": "3i59GNkBYVkUHrCN7yBkH9xzty8TeoqhVNs8TCbgkvbbdTu77QaHMFSaUZ6N5QiXbGdyYpvKeYu4sqoaot6hG7SM",
  "key18": "Mkmu7d7ejYsScHMcGp2WYBPmmY3S822d7afkNKWZ7D9nj7PqggRmi97Pby7YNou7N1QJMy544ujMHhqhAGzgb21",
  "key19": "4jhDSFG53upYKNvzttWfwbseGQd4ZD9JdFzV1vSPAuxShMmnzoYfDFbB6XPaHfXXgNfCisSuS8ZwSMicPqu6gMzq",
  "key20": "SBrYhdq1iG2pXvgwrcyyXVV7aCQMqbyhfWyko4rvGDhiFJ2ekAj2NjFY4Cm3kDVvLyrjXdBnUWGR7xRzUdFXaEp",
  "key21": "2HYce2sYuaBUP2ffUCyAJnJk1pq5cB2fUQuSJ7hXJxt47Ffh88aESgTXEE723hf8RrsQkHtttvPsoHeyif82MGq9",
  "key22": "4XmuSJzgytg1nw5jXtPx8xw2ZAmcPKn8AnJepm94z7ytYgk41U2rgcR1xcCQvmGRC6vLsyuEA8kRuDT6UwQ1afNR",
  "key23": "2x8uKpg4Z6GwavJd3oMGLShv9Lkfh4u2GcWce3hicYK6kMWCP7byLUi8R12VJXGsS7vMMUV4PN3G64CWrtdhAexQ",
  "key24": "5nrmKzi3T5yjWjzLzGymAWm31KMVdsY9ACs2YQpXbqL96VhBKDVvQjYVWGYCq6vNdnZk71UQszLhrrs2yUFchi3g",
  "key25": "3EtWHycWMj7weV86GjKPvx1eZtcJcq1FYpqpkyB3tdgRjJazEvUpDjq5prRDJdD4feYb2QzyipDinNeMXrsWgb4G",
  "key26": "4kCNVAUU79Js9jJCabKk2AZg36F9Hem3VpAtG7bmMFP6ZvRMTu4S9nT6QjnQbXs7uStgtfstEpfVrcB3TyzdP8RX",
  "key27": "5C7UmYLWqMWUk5MQnxzfYX7jRxD1q9maV1zLXR5NgzBMYjzRwMKVCautNwVV4wu9BStE9bop86RZuzqu2BkJuLBq",
  "key28": "4caEih6SH1nzB7wTyDr1WFpX2JgaPB6y1bHJt1KM95ccM5eunZR2twWNxroXYq2KntGe5PJCc689Tz4p9yYomTHf"
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
