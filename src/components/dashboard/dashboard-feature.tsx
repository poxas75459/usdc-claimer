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
    "5Y2gyo2Y11CzDdRhVGRUhLVLYAacimHWFMLegzTyohqTaGedbLQjzeWQ71CUDXVyss8VirBQSj2mKsELBtULEvA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nq1vubkK7o6EWQD2joTy7F7eYhPwUoJQ88MbWLgo8dPfrjdCmc8D2J4NhN7zGnC1Lj9XGYhWkY9sGbenMJdoQdJ",
  "key1": "5aJmAgpQWgeFXqqQbAR5R9GCB5cSRaBiJt4aLd9oexjAZVp7dJMWCo8oEswiGXdvZN34ccyMWC4xhytrfmGjCEbL",
  "key2": "2GHNpTMaybj7B2zeVYcrPpGXvW6ngWkDGdhnuSmAKTPjEtmJqdiMLsmcCo5XJAmfcQR89EiBqnPgxNWaqX4D9QHE",
  "key3": "2tqGkadzrqYgodQ7rbc8dKuf1qXywKfhmiZrnzZaovhKH9ELAWrVdsQgNbZBguHm3spyW5aQQdKEVnHGdnxDWmdH",
  "key4": "4aGNzkbQY2Nv327GiFrwFiq4RHBac9zbxQb6qxftKMPwzvHnCZicJ4E2pTSvbcESmi3NjrX67SiRXkShEQddZH4H",
  "key5": "25cr9bZ143d5bmyNNkqjFdLijJ6pPF4wzJKARR8osPdDvjT9jLmrJB45aSrndojwWfjNZW7wMbUWKWRJTAk7jocB",
  "key6": "3zvyoWUEyFcgTQGKLzfkMYsM92NUmpCmTVwKzAcSpFbDS7fj5j1CYZ7nN9s1iZkbqHDFwocgjnSHkMvjL62x66u4",
  "key7": "4LwLQt9tGfPvCZMZoctMoEG14gDSZrLxLowMiVFkrNaoJECSxgnKoDJpXsaWVe8A3GdgUxTudG53rhkFSfPJAdoD",
  "key8": "4TPHzHMSXXA4oUoRBbH9hhsEvAUZmex6ZiQg1pcvoedVQiwPJzKyLnz26aisHvxF6EM43FoM99xkAtUrukEozHda",
  "key9": "37GiYX9Crm54Rt9Z96t5JVHFm9uy8uFcJy6oD75ty6RtAoQVpYqSc5mapcq3cJ1GhSmHYD8PUM4pstfy4a118YSP",
  "key10": "4ucecx2AfHu5L6obBzrPf8dTnTkwDu1NvYRFHL4B6BUg3jTa2UBN62XGsZvM9s8GFz1DKbcBcLsYSVi4A8TRTGhG",
  "key11": "oY4Shc2X33y8A1QwghbL4jo3SREjY93EKQVmda2W8HXZvQK6UpSKAv2FrQCFk5erAQDJNeBEmsH74L8coz4dqG6",
  "key12": "4ek5dBd2ViKPG8FCGxzHU8PF9LSHA2yPop11R1WuqVdjPMAiqQc6G7Jm1m1yEoiiRcPYvgX78KVtfnjP6xtNkoXr",
  "key13": "42e5YLBex1hg8B98Dkb2kwQtyK3fqG2pBLJn45a1yTa6gzsK4164qwU4cyXmeoaD7CdnTqBFjxujegEFHJi9ZYpB",
  "key14": "1dDiib8N1Y7tomRuWb3Kchvbpg3QuBYtp5Fd3hHboxw4FoiG2edbb8Ud412GiaSggHTS7ZXD9N5w6U1ppTn1BYw",
  "key15": "5TMnwiJWuXUF4NRATr1iJvW53g7BYia45Ek7sRUbp3C6WsTjmzrhkQScU9GJazpi1MVPBiHZXJ6wE3KekkVtHt6P",
  "key16": "52G6Qc1oQvx2p1LFceFDAaSco8HMSHdspG7jbq41bADHJyPmf7UBHMcHJE8FVNBSjfhZrUci5o3Gn5xVKGabLgoB",
  "key17": "4yU6k8tuzqPUxvvrW6RJbjMXYtRj97neoApeGCdMAAKSiqY2D7Sv7KMT4zZXMkK2kMwsNdyTd423UhqrZnWiXzip",
  "key18": "xZoGcVRPJivHB4tb8NhaovoSvdKnCrs3EuGuHc4GaoUamRQyVYGLqm1RVZM8BqJqEGjCRWdeukc7obWCNymtEYd",
  "key19": "AXSQc3oJCUYqJB4cJ3AfvYByaBZYVjnZvmo57GoubQwWUjFnAtLq2kseaaPTcM1kGPtNtk433LKMSYQMSe61fEk",
  "key20": "yFAqd6RyqxpeKraQnULG2hqTkPrpwGsVxjKC8kDLeqZkpPmBv4RgPknw1VDvyhTj1QhjQn7Pv3xG1vg71ZtBXxe",
  "key21": "25foYWNippqEbTfaueqDdVGFmCBYSSj5TZeKVgyVxZjwMJFSZxV2attcrK2eo1Ek4Wmj9zpmGjbhS6XpncvMHzQ5",
  "key22": "4K74T2BWKtqjma1DsxEgq3w2hCP7e5R5d46hPbocfddyvGn4NUCBc57q61KD6Ue23cgu69nnxinud1YGxG8LFgwX",
  "key23": "3V8CEYEPPDuVDGFPBr9mETfuUpEhPLABPPBbA3pESuXVHgucMHGmELYDpwAKpPCAoDUzk3rPHwZa8fpaQEyB2oZq",
  "key24": "2nsMo3Ltop7SWzUXbundsoNFZVYZKG8KuxHVDukAR9LPMFmsf1RLx3AP8pCKZe1CnqYQoJteb4RXnutFCtxdmD38",
  "key25": "61mT6eHXLRHhMMpzeZnBYwEhF4s7RQJdfybkTPNydmVg8EBnouWU2p3cZ6FwkBomcHTpunb8d9JVSgU3XrWtVnUo",
  "key26": "3mZ65aPBPgSpmZqyQnaqcqdPe5vHUeqKXEN61oLJQ1qGX6YN9c9e2FLfqcwk9kcp9kTPygqME6XbczML1ZPZ7Ho2"
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
