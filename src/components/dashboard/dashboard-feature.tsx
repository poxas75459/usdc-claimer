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
    "DHcsRxE7ZYF5h4GzduU7PuWF2LahCd8T6mSCarf4kWWV8kfzbyszRf7Um1wpFpRX5zXeVC2rcFCUcRwXVuhs2B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8KW7KdodYFgXP9rgFWLT69sk9trbWChpqrDmXVLhaEfEqMww5ZJbB4y8PKvcatuV3ZVencbk5FMaTY7EhQgfhU",
  "key1": "27MBg6syNzy5mj4aeqy1aKouee4t5zDLgNrZ52D1muj5EBs2EGsU43VNScmMWw1m8xhBbnGZ2XLcBh9V4NMMQA1T",
  "key2": "5HXzE6JjcyDCmxEbZeJNdFNwurX93xnHhBQLebyoWVKbWdVwV21EfMDeM7udPqiVk14nxyyaSwa8XKVdyMYS1d5z",
  "key3": "43RidjnsBayWQ4mSVabyR6Maj9fMk7B9QuwHFnpTBLVA8J2xTVsspuXGX1xf53CUWBNaSgZNR83irj4m8bMfvmqf",
  "key4": "5Fi5NHvdouPwyeo8bHrfzKHSuZhp88o9vK6j22Ud4voyjxJUVngUFewrtyxaGGveEGQNX5wCxrauXcegZp7xzZTJ",
  "key5": "4ameZacUsk17KD59a9ppysfKrZCbNQXuVqaVTWAWBMY1xMBkW8xrjjnCdJZXE21qkyr2qmVj9onfZgs2HFjGDfWW",
  "key6": "aMy1Jd1FN2sGPNp29kvRqx7NnQ8HM5JPDYNhfTZKQJVkuCn7bjbPy5j5yttsTKk2hqXN5BnHBQRJ2U9pSA5J7A7",
  "key7": "QigDobtUCfnC61BDMBPZdRdpHPVcY9XQc3Wgk2SExYMWNtKpktXCSbuGewgLuTnb6Uj55UsXYDZEkeDbBpVr4zA",
  "key8": "pVFQDN9d3Lzt3tuYVcdrL1kEZsJSvxmkp1PHubhftvpfBDUEkYzTzvgo1Nn1MtsZjY8NRccWDbDdsetrUdpJpxx",
  "key9": "P6vQjz8QurVd6UZnamQtDePvKqH6yoExDY2e7sJ1NthvVHMA9qX9LLekhnYrWJwB3YNw5fKP6toPAdQNhgAroSb",
  "key10": "5wXMCDaorEW4VLbKRmFuWrELYEgfecV8n45AyxHowoqgRDDz1A7J8YQmupiuChRVdozmiya5CzDgVfsvJdh3fM8A",
  "key11": "3j78AGBGPtZjzzELoFT6ZFuARx5MKcoH72sqgrEfX2WxZJzDLHdgitShDibVaaYGKVHBiwsfeEJdtEhufdVAmtSA",
  "key12": "38j5LVDj2QYNh5k8TffSnUoEsnMHp4NM2isXDRAx5oP3eddbkVjAKr3cDjCHdAN4cQLE4t643inKFizKRWLGtbcU",
  "key13": "2P6TmFcGjouGq3reA6J8pyRy3Pm1aRXASjrSb72NbNpcJ8nAqvJspcdoxNuQG4JThfTXfZbejk87mke7PAL8erQb",
  "key14": "5qM8DePMtehcn5CQqsyL8oA2hXr9BKuEMdDi3Sj3dkFsGFLzfdWAKUvVfm6zcvKKVcY6wF2ZZzGxUBcDAg8UPrGF",
  "key15": "2TLKXybGdgmkgXFcpuYEj3MxQhxpuFdJiYdHm9NN4U58CgFdjoC9hNcwDQBc76aT9bp2GfWpNTe1EW7yA3B2xpnb",
  "key16": "3me4uG4cyzE6HnWH92n1R5gZirNo5Khe7ZCx4Aehx2DmT76hzf7JWokymJXVd1f2x3J6YXDphUBYf6sXtaYyaAqb",
  "key17": "265d1NkAr7kmxP8PgbSGw83k9JWGRLasmRKg5Y6jajRqRDKEKdeGBau7AzuAg6C7Cgyqx3gpY6STgoM3daeYX9pi",
  "key18": "4cAhHif5rrtTnKM6UbSheEgsRAVLoxCmKYqVV6uZ4iiSKYFAAXawbTaN2CdhM5S455Mb9xCz3MxcuYU7nKg97TEm",
  "key19": "2Qmxpusj66rhVuEuGCiiUXidw8Ag1ncsS11wj3akJxSEGRzmRYDZzVF8y82b9HmvXDWTWdUJyEqVQDyQTECV1Lvy",
  "key20": "wnae66WAfXBxrst918fpmZLYotNG7HRBjWizWgZtrdpG6iBhdtTLCLjQEyy5d1WYsP4BEMKtuTNz5AbunDLScBv",
  "key21": "66m7Z7G6CZCfn6PbNxnLf6eMu1kvVV2tV4TfVp544DuHzYyWMENeKHgMVHYmRJZwihqu1d4ipN2dSEZMdFwkeosj",
  "key22": "vu7RfcSw6KAYtK4NSE2D4nFBDTnKA1ASs9SEr29kTQn9BL3u8CprUhSVJqcxJKRyRLf8aBuGRYF4gTxRdXsEWvy",
  "key23": "554iMNymPPtKJbwqCDszaZHNs31zfPq6c7WERa3pow53PR8ZKKboezbXWHWb4ppRTRDzF1g6zfE2KhGtkvu4xGvc",
  "key24": "61FoiemDwEo7ZwdkJWkSPsqHrNYzVYGYFD95Yp5ScoudJLsgUAyp6aAXiugp6gMp5d99111rhqP7sYspHKiQVZQ5",
  "key25": "5YYXxJ3qGGXR6byxz41CcnhfYA4NuTWViDAisQJKjHGpFUWm62HTjsjGDFeDPEdkQwSfn9Gdrdhp41ucHmFjto1V",
  "key26": "4qnMACVubpD7gKT1BjPevk8qeLvpzqAHyopKHBh344Z987YNgRe27jrmvjL2my2k7hSPdEtDsae5VvdGd7VXdPdT",
  "key27": "2RfXptayREqvjX1WX5vMQs1xHkdGXaMzS4h2Rx5n1CYVovDjumA34EcBu4QJAJ9dZMfxzig679tgDa4K171XQkZQ",
  "key28": "3HDMzDES8PS9DgyHyzUTBnoTQb2A5gaUeRzMsxT6iz9wARrrnNieXmfRW4PdzEcAzeoN4Zi4LHZodqsAo2d4sNiW",
  "key29": "44BB7BmVxbuBkY8dv9weBb7ccMuBMfnP9PiFFZEBT8znQC6d6Bmu63d5oYmtfMZUQrwh2GnyWfH4F7k6wY6Ghh8F",
  "key30": "3T7YbBBis3N4zczC558Kkiixq7TF3aVTmPteqJLo1EW1EYgXYhkgpQknLtpxbhNzKPiM4q5EaEGm4p5QEufZWXmW",
  "key31": "MgZ9bVdPscFc8jhx1GR54wq1dUbwWGRmHqsFt9VPL1KXpHarwuiaG17gwQV6rGLYZvsJWnNb1MP5RKng46cg5SQ",
  "key32": "4g64DNZwHzVAg9pGRqG5Gnqey5ubz8KVbY45xspie1SQKPNiw4Z1Ep4LQsMjpL7qNLRSBCviWjzbMnXkFpqnApu1"
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
