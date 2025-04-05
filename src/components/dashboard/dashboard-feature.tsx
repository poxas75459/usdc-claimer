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
    "2aQUKpAuRCGrH4JkYQuicQgHNuV4aSRrs9Fev1FRRPHsBKSbxzHdkJSEvS1b3f2xQ72n4UekAJfv8rwzXeDgn991"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wadwUm8VyvU9oUFGiHgM4cNCb1U1ozWWHkSTJR5cJkajgjdPQrTHo1kqciQrxWCXdkjcdPuBLScBc6NJQLsdhbm",
  "key1": "2iQuf35KisFSKqQqGNRSfx1QGNmtDuWtchKp83aJz4DCotbhTiVgpicaYoGVjE39LkboCTBJdqKKwLqQsd4addZ2",
  "key2": "3yDsvbiH7hgDNKuHFj4opsxxmb1YAxCdbb2zoHRk5DrPy7na5aLbeJXGDWkLqbFKMRoL22cDo3YUTnQGJSMCaR7G",
  "key3": "Vy5WBfnVz6KseuAWpnunfKdYfAX2sEsWfuhi31ksE79S3tt5sxZroes8YAMXxS2GdiwThjVftDEVAmgRkfKWwfi",
  "key4": "2Fc2Q2ZpCUiDiFJExjf9LznSpVyeQYW3xQAuunei7JAG5yA7aLYkwXpatnoVSDTyCEHZZuT7SR46L3CSRvC3HuuB",
  "key5": "2h2Z5ckmDiB3rVFAe6cKF3hSV21f7sotpZaeXvMBxAm77WbJyjq3e838PnCa4nFBf4zMRzwgJM55vS7S5Vg9Zum7",
  "key6": "43uwu9fncLQpnnTLxns3vcS2cnhLEuwZCv3ABYZ7jVpdqwcXAeKiBJ485xseGbcGAS4SMkNGddCfEsp3WRbGVro",
  "key7": "8u82i6xcwoQCQRrtXBtZan8XZTC6nQkftC54vYx7C7L3sezfRSBnAEobaagVHCco2TT65wkSVWuhVjtQRx64aSw",
  "key8": "542f5NvQ9mDs1CtaaUbAfeUcwcj9VGzwH9h6UaFMAHUtfLquZ3T8rxp2YXzuVrwXmME2WWMWnjrS3xPZVyzRpbzi",
  "key9": "2j3U1gcS5DevAEetZJdDAepxBhQeGJ13pxQNkrRbZ4XHGCSeZboTrXrWnKM3fT7VY4mVvhAGewNXKKqx47a5dVq1",
  "key10": "5zCFoXSWZi8oJ3hqyibW4h4Q5FK3U5Vz5P9vVutNsqKzqJhfRqkcpsADxjc1T8W52nqbjXBjmbqQopuV2UfBPhC2",
  "key11": "4iPS9AnvSf6RtiKSn1qhdAq3cqod4d2YobcdSYRemDHddi1UxKLF5yPWUT189E2kNGn4r1qrg5UBdJXopjPCxtsw",
  "key12": "3499VpRXJQBjyEMhW3V6W7Zb5EvVRWbvg8RchXYBuaDP9AecLjyqqvJ3MVYSWrVr5ZrBNiC9agcffsLipF1aw2vo",
  "key13": "GEwtwJWLnZws9DA8y5H1qME7cxghf2LqajbJRGVoMTQXPkRqyWj91F8MmEDFxcbrszCGYWCFxqGqkC5qWTDqXzf",
  "key14": "3YsHhJ3WGA2Ucm35HXmvpGjT4tYwDHNnyQ1e4kSwQ5mFkMrVhxAkMRRjFA2cifJkSGMFszCfo1xrC6SpSSjkQx4D",
  "key15": "ZHQYNrWscM5qCj91BFivuA2jEApxZuzTUZSCnkBLxA4vou5UwnKcTmfNSZx3hjAgEzsqH9V1fwY9hqdYLpq4oZR",
  "key16": "3E3PZ15JqUWPB1YcsWzWaQUcofAJDestHEwmx8CV31jqdyD91zLWYMSnfXkT7M9DgGM2Tuef68LbTPKbHNxyoCx9",
  "key17": "5NqGjPE5vxqAMTHm27LbhgFZa77UqEzYc3uqcefjtefLHXHc1Zxs4uA9TMYcrS9rqFXPCjXEYBHjgGZ1WHu7NuBE",
  "key18": "4dpt3BVTqSeHgZGRJxXw9Rm8nyG6x21XgqoogW7uBjihBfxo78PAUf5CTX9zyfxnczBzcUE86DmBZADwzfvWcWAR",
  "key19": "uvHd6FZ7H1svN5JLLYgDtCUhmcUcmtJMeSQZ2wymBc9YCQqGWBriQt4HzVmpJzisq3jz35q73E8G6NkPiYf4sxc",
  "key20": "3WKo5cZq55fVrEpmYsBTBDpjgofRd8h1rmtEahfXLz5h3yqfYoBuX1raFqeAC3BN3RodGf5sWh95J2QiEL44Ljyo",
  "key21": "3DyzRyV8NrYHKR32wMZod1uEZohwayJ9Xtx41UDe8ZnpEryFhSbppdvEr4XLKS3PjEw7iQQMzNJwuerAXeQt5NS8",
  "key22": "2LZ7nMHNYYkcRpwnp2gvNUogzAPbNETokG4ovGP6xW5Ksm6BBwnsoaQVtThB6j9cMvvDmiZXjCeQqfgHJCAgkgVL",
  "key23": "5W6qWJNjbMeohu5iUvk4BeGqWzhgWFNBZHkNGKMeCKKiKccoUC5KYNeHVAfChYd7T1Rdaoo1g9vhthn6h25hCdEc",
  "key24": "36FkRK2qvQmQSShbNSqwHtZdPw6Gmmw2d2pyV2vDbPURGcE3c5cmqCpRQ2zJ648umRBhtKQZYCHQW9GjrR3fun3R"
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
