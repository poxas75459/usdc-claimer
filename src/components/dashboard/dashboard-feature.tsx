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
    "3Do7uVmf1zX5ZVKMdWK74PYMwTWVhAiZhip8aZC54PFGLP16LgVEovpLNBGUF4SzCDYjXGBPsfVovt1PU59AZmch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SqJq4wgCaD7WYpe6d7x44FLEpx9t4FRwu1tx7E1jqkdcJoZH5MtipRAejmYpq6kJqfZStmennZDXsyuBoh33PRH",
  "key1": "2REN9uZyQ3ZmXhTB4Yyrgg8byGCdVKSrWwrasP1wEryhHVaNFNHbmKN5jWp44uke3XseNd9PzJLH46K92irHh54N",
  "key2": "2b1ghCHwaZQLoknbDcEXW9iHg98jDR3xERrYo8df3KmYCD3P7wSpAfKtN5FNJiQB7J1ThtpUDBsHcNrHSgRBoDvw",
  "key3": "fppcX3DAC7TmE8P6wC56YdyW2eec8EEH6btqVwK3FCGp8sFGrumNj9D3Mx7j6qbh6MtAbeB94kGG3VCBA7sZoRN",
  "key4": "2r54ggCd9cLXUqewLfnF116skJ7LAijA1ESxXgwiZ569KCKFf9ZMfnhoapk1XxyMQcFVsaZ7LksDB8W8h42PPseh",
  "key5": "5cK47VUuHSFTCMrzFjHGUGffoQji3BNmgJYf9zYk4gJUVZBZ41XxpyumaRosNKcUH7SjDavdLBmvPbjAMQ78SKpg",
  "key6": "4X8gqiVKr7b6PsAYfzj2drX17875W4XCVjGiWx7kQbBWFTRRtGPj5gCw1xEmywR7ajZZXDfkc3uH6ok66YiRiJ8q",
  "key7": "5fdNaXXdgXVLWzJ3sHBNdeeSn9bbzvFAQXLuYmZrPD95CyMcN1yrVXkMXhQVC97pMmgu8toDaNCUUPUTPusNhZJF",
  "key8": "2U7ppvYqm6sxLZ1LNrBRW6ihe3aKjn1CcPZqNNrQmLVDhMYS8FrcFee7s4QehtSEsDRU4AZeHDCocKe64HcybTcy",
  "key9": "45N6krgTc47XAHVvWEp8k4ZGfC3MXgvCW76KYtqiWuM9HFJyALspAD8rBHKr8N7j4d6bZw15F1YU5fqVLqDeqHV1",
  "key10": "3r54NwGNHhJhzKNSpyNoFqoyfMc52znJqoSqhpWwWCArZSQLzgtC7LzNkEutM82WgL24APsywBD1aMpYDqbUWdHG",
  "key11": "5jJUZrgdJrpdHCpQnK9By8tdUExFjJGubW6rNG4Xwj35LCwMiH1kQV6x9FqxF8dBf2zpSNiXMQAvPPvMJVN3kirS",
  "key12": "4199csCBKwDL5tD1BJHj8YH3YPNbeccRk73rbZaCTv5uVLpC7RJxKiqMqpNTwbc7CmXJk9nn5coHjGUPCdSPy8oa",
  "key13": "qNLRNrLKkodyXaWTv5EituaivBS9xfD4wwqNkw6qwxWtJbkkTH2VsGg2WBZY8buyux6mKNqGRULcKDNQqd2W4UP",
  "key14": "4PyqBfCcNuDmwYzSahnakntjSWfMwZfoV2TLBUx3vdYUmHTQ1cUepGZy7TLyuFG1gLbKpWtZNuAQTuY8DnSgp8wR",
  "key15": "5Ef2UMAVkNGRwhiRvnSU9brgmD9uvePWZNUSTFuydiC9JyEe3E776m7mnqfX7gue2i9cQZfPGvfC7rnDakVizVgS",
  "key16": "26HXn8AEcU28cB5JCxN44mNmLspAref2DwYTrp7cdVojsNvD23Q9g5PDpZnQqEhMRQmRiYwT7xAQ2PknVPhKrWgh",
  "key17": "52mPE51py8xtrLtWSC3Wdn2W1zTeavaTCjt2j6woJYJvovfXMQ56sS6gm4ZMmJgLai4hmaG9u7FNFHfwtFqQhUSS",
  "key18": "25zED8z1d7DbpntArGX2rrR7zAw2cCzzoJFGdCe1xLTeB2HZ1TVQ1gZ3PQPvMENDvPRw8oGpT15xdx7i41GcB7Vh",
  "key19": "388iiScAVDjJSvUfDV1dXKGE4uAKDKa3aVTbSbt21Ezf7UfnWipcvD5j9JA6GLtg9heRWR5NSuRaV22mPiAQP6Bt",
  "key20": "3E8AnRTnzc7g7q2ScKub14aM62RyBpKG2ckvZf9yq1UeTRAexfK5pzuirD9zBzq39LmgxKQJ9pzbaZucsMbP2nKK",
  "key21": "4W6pHGrPVa8AjzqjSbzr4Hf5mLNg81SnWVWowBBCPKrCQ9VFHzuMFpiHyxCAeh9E8fVYfXW4EgDPDxZPoiis7zBE",
  "key22": "2zaUFgaNerXQzja2drfVpQqwCeduaCHrRCz9bCfGMPTyFPSqfzxyx7Czd4FJkn1E7U39rHywEjuh89xTTAF9o4ZD",
  "key23": "2sVU7P9kFR9GdQEYqw47vS1E8GSSBzGGUcNzC7xt53UWqVM3ZyuUixYh8uinvZwCoii43AAgKRTBCxVjP81mL1Hj",
  "key24": "267LfWFmaLVaddqkL9mFxDUYuhiQqpRJc4WZ7Sfkt1n64MwSVrKCmY6GWMb7UhBUUMrRvcb1yJYsacbMXfB5WDPK",
  "key25": "ajWZtyAu15FZTimP8ugZHRVYV1LU3uYpejb2bTmcEzJoytLkjV5Bv9UFKZAU9fA4Z6mw38Fxuk4XC85aypUsFRY",
  "key26": "5KKzK7xu4uoM8KNN7LM2ikWfqq3886RvcLqrSUqxLa3nkzDyH6gTtPuCtRko8Pg7VA9tDe5K4DYCXBsCFxtb5BLa"
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
