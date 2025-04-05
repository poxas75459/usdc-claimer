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
    "2Bfg6FMscC381tW9xz8kiN6vYN9FUGAF7hAXcUBhZP9G4P6XfGZxViNo4mNJpG8M7MTD3xoz4cxDxyiLbue9oXQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLZUYnatSLvJjXoctPpdEdexNJhKdo2cXdJ8UcGtLB95KJntCytKAy77cwgvW8K75YsnUcSU8kSGTxSLgAecfPR",
  "key1": "xiv1unZn7Yr5xMV3RnPsD4rNncmTkzCXueGrTCBLKurgabVJeUN4d9f4qbgtm6X3P6ftryAuvqm4DpuvBsEE49x",
  "key2": "x89ovYcV9ynQaTb26ZCvc8LvjGJdff4j9gjdFAhXfGEuNecFppv1DByUBZVkjmXMMTY7LEWfN6W8UCYLGgQRhZi",
  "key3": "5oH9MnmHHQLvk4Ata5a9gJL2ZVVd8yKPaZ8MQWgrLW1cREXESGefkfzSTrWqEg8QUVCG9xZ8kEYgHfJjoiZ7xD1w",
  "key4": "uDYtXfKREzy2yFqPzoxH9SMVoesH6FYRDeuSaEAEXnWx5TBxhfubrs2AQxMpyN5BdixbhCv8KXCev1eqWWcTJv5",
  "key5": "CSDgbD4B32WtM6T1YhLKqa1EUZJxvAsDQUWy2K8qJe5KDyUhg6RpgdfsdzHW4z9LJ9fP31vfrtE3rRVaEZQJuJP",
  "key6": "5dQQEjorLwpbYtVGCBEUBUx1o4qiYP6dScRiCCpYYhX8oYkTrnc8bGghmGXFP7RfsmgNdf54TQriLboHrCravNmL",
  "key7": "5Ep3PETD1XDVa5DzSCm47x5CogJDeMxzjkWBeYmZGzAG8d6tPS9EUGXwzNgwFDj2YyqejsRA1D46GuQTZzTdnTFr",
  "key8": "m2HGsYL2c9vzg6Rzz2HYdmqm9c2nySio4V7iVTqSWjhpFgKhdXshGZYhgQ3QsbsvB4qc8T3555YJUzjfffDWria",
  "key9": "4WTPK8r3n9EK1vsSTwLgXGZRaz4gCfatt7C6zp5Ju4RYszEnLBTK5WuhEx5VHmGkW5ekoyFEVQMDnQLyx17Hq1cF",
  "key10": "365BVpRDiJHXGToYwgmmtdnXFmwHnkxw19ShBmqgVEcPYAiQqxcD4FwfZ53nk1LQh2jfPdb2wwY6DShtb9yimdyS",
  "key11": "31KkEYRH8k7VrVSunMYAMMvNZKfoEjXuHrXhdWmobAw1rCCez62ZcdL6sBsviC3E9zr85Enf948N4k1aBRp3ogWD",
  "key12": "5XmmgJ7DDVgwHHh8jTdeoDmKgqGVnS5P7WzxwVeuT15FNLnffi43ujXyU2VwGq4j3i7WW9rUGiUp9BD7zXvBS4nq",
  "key13": "4SvJb8jZ2ZtQ4qGV3AcpDctKmiQFDUGaehuqg8bfPabPF6ppsd7YrK6KoXcaycgxpVK4asXApzcNSkfQPnCQi8k3",
  "key14": "5jHNSiQ5xXQpW5XCGB9AyEaKhSxnbss6mikTGq6HoXtDdaCUpQDWaD1iVsLqifHCEc2jfqx5FZ6gYMCafrWhpqrY",
  "key15": "3HcbMu63XRuxR51PQcdPNUE4xMWFoEGUS1BpZWL4CJdZNV9SjYE6pifgXNYM8qoSYuP8SNo2P4zXGPsnBmr6vqP7",
  "key16": "4ZneFQcazyjGsj6TKja8LedpjgUpyaB3JiGSa4HLXfvQT4CLdzSjD1341WxYrQioDWWtWkPPZiMupFo27khPknvk",
  "key17": "4SxRCRMLZpFsjnjDX7365RN3ZBz8te4juF6VR7SCiT72kfMYhp6Dy7GKoFWz9KRbw9MvqPVzfTH6vyS2s3nW3f5q",
  "key18": "5wn6X1RkmG5tgqLMMUpPoYms33ZJN6YABDpWfDevkmWQr1nraQP3GVi1q4hobXWUFRx8rdLWewydNng7DLrwyHy9",
  "key19": "2oiDsQVQdMDy4hK6v1M6duB1xQM9AzoEbyUYGExh4ABmfghWHZqGA4YuHhXNHxanBArM2ZdBzkco3fUexDYvG4fc",
  "key20": "4Q6V6jwTTajwoUnNb47bmGXBNSrSqMtPYxJEJs4g6uUdrrnE3ZnEBYsbd2k5UmGXT4DhHGazA79BTYr8DEyji7f7",
  "key21": "24v2A661iW3KMCKoUUQxbAwfxGRmWWDqVyAXPgfTmRkJMtBqzuvfq4cDTAUkjf2e7aPBo3CBQr1TCwvTgB8pUuVH",
  "key22": "mLfDU66db6L2BqoMFFrSzg51PkW498acnJDTohwHwcPjPaNpg2ZZVfMaeahnyLbCqGCUXW3xmHcXjLShxfuUf23",
  "key23": "2DcyFwUSBhYXHaEpc3ZaoftAEsB3sZPCwgnHfyeV4gz7YfnY4CzKT5fhhXzCRPtbzwgcEZLHCFnDghAXZtd3YMGn",
  "key24": "5BeECR8Dnfu699oj3sk9jvzws2mBcKQgzUsZby1Mq7nnecZuQJwn3RyHNbKaUxm5iTzxbJMKexd47PZ1NzCH8XbP",
  "key25": "jy9aSM6tyQY8pHzVUYc6ebrhAe3Uj5NxoU7UcfwgV9c6RNFXqjL38DnL9vuagHyYeKteHN2qSUzJhkECcg1c2x8"
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
