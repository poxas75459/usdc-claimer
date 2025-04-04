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
    "3WSzyADCRWMmCiARauySkxwMhtbqHJB1e2WtDFhBjr6UobirEKwkY54pJVSQusbDv3DgQTBmXmx7aLuGeJ7CMTP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sx9RQVajWxgDcj4NYDdxxcgc8EcxwPveghJPBtktndpF9b4aNsXpdyo5KNNsy6qRUhf6y8DA4jCMFXAX9XFavS3",
  "key1": "2XadEDDb3hmRPd1CViSjeEVr3PB1BzHeuBuxeNShJdYrpVbpjGbvxDQE2RZ8gJsTDHXZTZc1fVzfSrrmHTXBqNJh",
  "key2": "SQebKqMDjMzy9LknbWK3utJ2eJRDii3PSb6gt7bxYAd2yVKnjensHVtoNqoYW32Lo7XzEoVSfWFDE56EFb5y4sm",
  "key3": "LhhwJyGjs5BmyqiKGgtuKEF51UjAxy81DTwZtXhR1TAuGEpchLSajVYGRroJr7QUgwEEJqDLhCUZUa5Tynuq24w",
  "key4": "67Xc694e5zuRTEfEjMGkKDJrPwA57uHbj7vVtv8VB6hqYatNiSN6m1c2JDHfRVSZTQP6D8qj7XAaaZ38FGSZhwff",
  "key5": "2bYNLqYFWsVAJosvYQPB226zDVqAbVnDmGb3XFELyQ4R4w2hEHDYtbjsd54cwuUWpozPRbTbg71z6WybzRLMFMnM",
  "key6": "4mrHSsM1vBuW5zUhanbUYVYjHSywZ1bz8jQZ6eR3MtXHuRX7xzqRc6yyagLHjBc1JEVd6jyE8arJkjxGcb7DFeTq",
  "key7": "uCyXa8F6KXdTstUeHnwnNaD7uBBvME3QRmkBW46jcB31WZvBBVWq7YsXQpKzJsbT64tWnA5NiGF9QB5DHDWiVyk",
  "key8": "48GdiDVDvuRXo7AE7GhfCDvSJ3r6aLQPZXCTW74BfALjRApLzmuTubGYJDDpQ66wcfdtNSqNVdAnPdafpzv7sXtB",
  "key9": "4rWLoUhPvgNhdyAb8FifezmywconhX5wS7hEYxXe5G1zrCKAWNMXzRCt97iTDHzcGj7aKLynMeVmtmy8TikH1iDM",
  "key10": "2xRo6ZVq4kxUrcNH7emYVAL5Cj5pm8PmYsbJhJXTzfJemm1rQi749k5R3aPSB2X1GZDUnqWX7jwYmb2oFnmK56Jc",
  "key11": "4nWANyknuxEpWUQEVVpEoyX8WdJPL25gQDsP6ftLtJoqiAmYAiN9ZrkGTZStfrZwQYHvEBXkMBRkmMDYQxueGBqs",
  "key12": "4c88NiUFFy7fmvH1fofUhB5weBVEBNGgneh5fWiPkUS4sUoECaCDohn8kSCUqj9i7ayGSiv4pKV8T6d1RyyPPCJX",
  "key13": "5gwsYHvfEKoK6bQWNTVdFCbVkSU2PQT3CA3nJU8up87v8UgfDp2UnqDmGVTSVeM3hWdiGsupuPrJ9u6GXdQzMS4i",
  "key14": "38di4kEmofZKKydbLzdJhCK6PSn7AkNF4E5ZG4PGZgmipjknUvJCALc2A9avMfavuDREqEe269e6y1hHofuRpdfL",
  "key15": "54nbozpSomsVqRtEq9sA9xh1ZPL8xL6tjW6CYqtsnRFnYDj1s1jpSzSnYLWkQVCB4mJZmQ3T9tezaRH2E8c6QDJH",
  "key16": "3qFYAnGTZBRXbXATgP3D3TzxC87tVP6Y8CzUHSsSD7qj57eULYNgS4uoWEbzxLzEQWLhxKR1WCNHAJC5tkcyYbNh",
  "key17": "4q3VBdW51Q4xpea6non1KFVN6Yu55gE7rKVsW8619LGB7XMuXyp5WVBvpnENccwe6TCqjJvHFxNUr5QBP9iU4eJU",
  "key18": "5rx6x91M4cN7k7uFhvKTfeKbS2Pw2jAMF8Umyz8ZyvwFfG2C4jokEZTDbCoggPuuy2sh9CoE8BZZajkuadrrRoSb",
  "key19": "4DDHpv5MmFBS5JtXJzJEeC6JaYq3GbkcBVR2SyyLFQhJ5ZiCBm7g4hknKj6ukwTgW8N6HU4FKE8pZwZcCxH12KJW",
  "key20": "4joeEGDVPePnKV5mTvPj8zS3dxdKaq6etBhKdw7xyaB8UL8NEdWgWfqsFd7MJnYC4B9WZaBVFMrhnpys1bvUkwpQ",
  "key21": "3WtvKD9nnBN8p36rET2v6dHmFYsx8ziMR46t7tuT85qnRPHQyxoBgmbxFpHKECLnBU8QDg7GuMGPkW5M1e2eJLLx",
  "key22": "5S2ESuShKG9hkXYC8H4fDcsXhzSZ3iPoPHFHYAMengRtxL1Jf3cQGGQez1SrpHiUDTLYfoyFiLEFxCKfNQJpH6aP",
  "key23": "5fXAD7g58vB65aDzihHjMmnEYC1zJSDkF15FEsbzq7jpV9ca4iEsEpaA56fVFER4bKaHU74tRMWB5mqZ5ZBjQTfs",
  "key24": "2wFqdgGCrDh5Z4TwUnecbjMveP7mGqWGkmLgvfZwj9aPwAahdvJBGb4mznNB4jrMtqhQTNx5GE5j29m47FqQmwKZ",
  "key25": "5emGiHE2uCaG1zYMcyxD7v14pB3Kovp6L84CxxEY7fa8tLVktGdEhasjkQSzECadNwBP3XAALft49BCTUB4g5zLF",
  "key26": "d8i3a8NhukA7fMaLKCM9o563HVqsMMMMLRaVDUJ2FvBjmgxsgtYtrziXwo6Tcd1fyhz1cX5gSc5S4Fveqk7CKgc",
  "key27": "5mdogDuTHxvxhxCEwvW3u6Dbtjedy2V2bkfDYGmxUBBZKC6yhbPxL5uD8gHgNEZ82xaLueaBWAtRVS4memcCj4Wi",
  "key28": "5BpeW1hbWxNCDA51DNrba4yyM8oabrGWFbsiUyNL2Tzqeimo9DtvdQ5zz2cGUj9DvVGzyw8HR1Zyh8weuvzPBhoC",
  "key29": "62zeYXb7AFEe1koqP1LYREnjmgFML54skE8gS9AydQ4MqDHNCmp5DbKcsAqCYhPA7G99YZTSimE1LXXfdfFvCy4u",
  "key30": "3KpkEaELCD1VWSwvpUKJrQDJwHr8e9htExcFzVpfqvWjiMBXXCxTakbTcPifEiyMFphYwiVhBVJJhBSEsUjZxHR8",
  "key31": "4MW59jWZhVwQwATz4TGsHkzU5fekWx8hbXUrPNxBTEWbkJz3nHLkp7kwAV8MFGGsQjwVFYShosiWiVbxcAcKmN72",
  "key32": "4FqzES2nDFY4q8SbLmTuvKanGeQrTDLUj5WKPfdkgidfPjRXdYV71vUxsEENBfwgWaGZknXj5EUBMCG7gYLLtdYC",
  "key33": "4AnWesEzMMkxBUJBVKeyF7BdQn7m5QYa4qgm5huPy8KU75YPRFFDX4kM6XjQeebi14QBzfKjFEqw4owktyDo7BRm",
  "key34": "5fxtGqBtu6cMtZoeMPnxYy4ZdvG2AXkBNJfEAhaqXMoHyyxanPU6dc1oF2kqNoNXu4HNzpX72CqZBHQQqkdaJTTm",
  "key35": "WL7QJhMU76yuTTx2Rgz5YZwDsf4bJgyeqLSFoc3L58z3xuJPGuVFyAT8pdrjTdtQDoJL1pjZSyfMHwMgxzHg9ph",
  "key36": "5JSfhiABK1NXYZsubYAh2Lf1hCPvkvddqDZavTexeSaH5iRjhFLNUqcdtWoG4JYJj69Tfw7YezRhpvsiUf9PigUf",
  "key37": "4LHr8hQpNHNGoT6Ce9vNvotqdEaF2JM9NdNeXQMGJU5ttMTxLk8yje4SVd5UfTfQUR5NzeuKTFU73EZKMcyxa96v",
  "key38": "4yw2xqwZVjjg7dZEZLS2qcWxKqeD6JvaKmt4vTYXPj6riYSs2jYGcsAgBwxNaARYDYKS8rLT46jUMSt8Wa6ybJse"
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
