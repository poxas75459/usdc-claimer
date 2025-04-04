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
    "ycBo7tJWB2C5Tfb3Q92cn3Grumh9qdZbK6M9RgEZyRzbnUbumwtW2ZF5xMUVs6uP9A1wZa8B3L9wzs5ZYVdZkyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBnKFrYDfN41LV5sMH7sBMYwrP6PnKavWn34yrkMyqYZLRfR6hqVZh7UbBYK5pEQoxr1r7oA4s3bmDLjjZQ5X4G",
  "key1": "4q2uNNnyE4fy5v3yaKG4oApLgqgfHvXbAWFPshwbPdU9QvHTFHEweYZMTdFXMZ2vRx6iWfDekAD7CDNSyK6mMuGg",
  "key2": "5b6H1ayxUGVGJ8ZAavv9hvYhTUdVdsT5cchvyTST4cuxUrWukn8gzRerxrBnqAe33jwc6JqpWZHrU75vZuiCqqYx",
  "key3": "5CD6ah1ANbkXkcqBmGZ6tC9KMNbPVhK9WMb8BG8XeQ6TpCGgmNtiSzPJQwP7B2vaFwguzn8FTe8VjwNFfpW2eFti",
  "key4": "4jnyxXXvayq5WjbSjFzKx5fx4jYjQgwnSniGjn6vqq3Xrv6aiUgfrWg9YZbYWMkTp4JAJvDxHfznVbvXe56zbirj",
  "key5": "4vW6NzWxVKb2LLEohWKmdiMBLHNZ1No9gHjKaS76YDu281hu3uH1h2zM3Bofj4CDfcXziRW9QFT6msTkjUnd6Fxq",
  "key6": "cxzieqjWMPR1XKLM5wcvZ4wrEpuU1qBeCu5zV3uQz7LoRLtU7CkLQeP4JMZ6TwvQyBzcjNMtua2ctgo3CGknFhJ",
  "key7": "2NxX1UPC7iy1Hx2DvLCXrtb2Vtk9d7MganLbYMybJUksQhnGrrGVjgWm6HAUXkhn4PTWWcMk4NEftWEcXxovQYGS",
  "key8": "4fspE9nRAMXem2rXSQyPEmPQw5C61fnoGDiJLRdioPfNmTqA5Qbk4fC3V8F3R9jXyzmj5zWbAA6GwXxsuQLqCLkz",
  "key9": "5J4kqhRu3JjSNqr6V1FZe7TwPKvvDgGi7J9RKSQZSY2VjvXm7i2GVjrTzwChMShsX59YDJoidT2UQpJGaUJo6kPR",
  "key10": "esQHqKfVCanv9tASeV4hUFnkpHJSL6ipCmVwPTmRRK1vZKDYsXj7EVmnRShn1UkFgwQmJMRhPuRJqFKE9G7NAGD",
  "key11": "254gpRAxbLhV81cWzePsPNEdZnkqJ138Kvf297qkg5CAUczjDgYeV8dfyM13qpPxciCrJEdDZGJbrNkoPSF5t8Jf",
  "key12": "45VLy9uZ5tWdPPRbP4iaafhtisiMkMitS91C8K5z7MChjBsy1yVjLK97ftY1BpN9PXo9XkxfCCZETqRKFVFbY7im",
  "key13": "4fge8H5VYkXFAzHwBF3eMJkSyon6oUjwduWsGrwpc8mggudmmQtaYCktdwYt3H18Qsm9PXSY5U1mVY8cMVcw4aPs",
  "key14": "4AhKrZFEaTgruWvZUDtWBLysDFGpUuDsSr1EtwDMCfpKqAhxN47qUkWdE7aEXBZdBCJXb6evh4cnB4bibZosXBnb",
  "key15": "2hrLpzzMDUvw1hKN4hgJE59Vr7K3a2kenyzUnLmgUiTjLjecAY6p7ewqEAz4oR7FDi89cNd81pgHdg1d3hDkEaWp",
  "key16": "2cTHfsVKjRceQFXsQn4yZRqfNbKT5C72XTNEUpvwe9tJvxrXhAw5MoxUxBmNE8QUoAfVEyuDzL2keG9MEyjogVkY",
  "key17": "5yya166Ljdyrb3x4u7cbmK3knFevEgx68oiSpc3RkpaSP6FAh9eKUAnjZBLfyShwStLFhPs5RacJzBzRjeNPyRL3",
  "key18": "5cdqHE6dWtbvisepSGo6V1jusABjzkBjBuUEK1PdMNMfjdwiCpKYDgaLYbPmtkJc2DdnU2bdffnuSoaUWABHuypm",
  "key19": "4cuwDPWifepdvYPZFdgfKzJxzi6J5MaXtydTjrd7mywVagrbKp7VBdwe4xLmur9evAy7frtLirTMLTphJE2tguXm",
  "key20": "4Yg8n9MHdo5yPtYiFCi2gCjQosRoCSka4LQTu1M1u2LdtHjuHkznF4cHkNF8mwQ4YKe3ZYQSsSveK3bAp3PF1TRD",
  "key21": "4axLx7xf2jbmKqiNjrTdPvX5ZgKr6vTKouq5WX6fvRHsB7TCJBkVNrMm7Jbfm8d3TLecoazrepqE5f2hmKciMyQS",
  "key22": "4PLP8jyteg3CReyRRnzqJTe2Et65kuHh3LWwXgvwTZxtG37zUahZE7eoZ35RoW2oskEsEfxyvXboRK6AhsYsRey1",
  "key23": "4jLq9vQmQPfzbgCEs1o4oVco9jp8pmSv3SryoZ5YcRuvLiu2kCkFXs5i4K5SJsN5DxqRwqXcnRCiHC1r9J7bdLDw",
  "key24": "4RfiRdLxSrvqdeyx9ExWFgQLm8MvkdinPKEYuwG93tuDo3o6w97P1545tHfPqZHBWcyAnHp8kZUwUXAM34ZLzMbc",
  "key25": "3o9WttNr1BHnsRXoecdbyLUWiAZYNqvew6mDdoeAW38TEnaNUu5MVKPVk3wWZtYa4ACtLu82htbPWsuBZXfbjRnN",
  "key26": "5sdiVfgLUywS7n7FnSpDrBwjUMhSt8Ma2ydcTbfUGMbmqVxC3GQpXbAgx5ntQqHS1U1RPkcWQYeDXLmof6XWn11V",
  "key27": "4pgmYG331E8PYNbHzYmsMCBYWnN1mf2BxavhtmuDj8GBR34wTu64pfEmt3gdJqVTTrE7bQc66PHmaeoxEVETV8QZ",
  "key28": "oRocuzFu4eETc7bStnSiXUJ8miJ9mRy17Zj6Zg2kDy6TugMgiyzkXtaaJ97aXnSxHq7HFozzUPWzdVmaVrFLY1C",
  "key29": "2FWohYjAeuNBE2NPMhSTYo4KV6WbfkMs43H3ZpTxzFDVnvtzqwMjdocs4XqrSCBeR3c2BD6qRS2uQktmnJeCuLxE",
  "key30": "2FPpDBiPggqdNBM6UKZWHijimgfubDpNuUTwY5T1DM1rCmc9oUm7P1T47u7dU5DusBRTVzKAcBu6Yjykw1Qxpyev",
  "key31": "YpPmN6LJxhJDQp85tH9aXdNqEk6TYcFt2RMUCNkAeqCLpk4vgRapTkgb7k6gL8JNvPxoRbtEQnGMaoS1xriAiWv",
  "key32": "5Gy42M78rpE5cMQyiBJi43SamFFZWLQBKeCizJFLWRYmSK2GyBvEJmosXz5seMfMDycSvFEnTM5hTpUrF2bgzWBQ"
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
