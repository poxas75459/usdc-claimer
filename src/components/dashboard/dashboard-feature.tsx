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
    "5RSyazZ6BS2yaYEfh5X2kLNtuvgXSTsE6XDu6GSjym18V63NNCHeBMRDqjZpJrUc9EBjWc7uKGDKHtw4cuqF59pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TsRHFn9AsRgGDtS4TkCCTCEh1WJHQQM1JBP9fdvCsoVtMEx9eUfREkv3GLN7xSsfZ5j3M5eHY7rd7nw83KBt7wv",
  "key1": "5of44zyFesD6zbHJa3aHWzF7h3akog5df33GE61JopTyKyQi1xx4WuSZdj7PczaKoV4RBCBYiwTKeCGjymmtphSW",
  "key2": "5BBi6Un9hNVFxRZWmigsfTw6t3Vza6NMbB6CLrPdvL3cZRiosc8K5bbqkrfxa3XmuLRRSwuGzzk22kJQ3kRPyBeZ",
  "key3": "5vfbStB5cHDYJEEYQ6hie8XyN8sCJ556593cP4eSzi3bKPm33HDQwfEh6Wb5aZGiC77V8tPZ2F69fRd825B1Gy7y",
  "key4": "513iNEwbpErgytbSWAf12YkAnqFaoQgLWqddoviMcLShkbRa5vY57uxx6rrjEuu65mouAkzrgCvT8URegRomJqD",
  "key5": "2eWXv3dbmi6AWwjqX5hnGAYqBecC2ZNbF35Rng399gGMSrPbre7J1W9Fc4yuzneYnp59K6VJNrj5WKE1cg1iHdst",
  "key6": "4Noarc7BNZ8byvYR1a1f7YKvHoEwj8thNeqgFLuB4tZbjv1aeF41sWUELYzPRnL871FQtAA5KFmWnatwAWW3Keby",
  "key7": "41d3MbR9XDjUrnvGUmqzja9EVBCuwj13wi1nMXWjaNnizMCXWJR18L3toLER5dH26ynP4vR4Uo9x1ELNqQPEeBeX",
  "key8": "246oHvLW3yKyFoNWNi9ePe22YZGkpjtT5WADPpxTkGHLxTZHhWK1nfLcv2o7sne7zhcSVWTmYiTG4sMTKRiqhXo2",
  "key9": "AaPXAE6HTg7DxxMbxA9wpQBD7H9BZ52vuzVghDzDTfqzzFxDqowZ9FJDbmoPLSmTu7e6bn7fQXZXrSRqVwn8WoF",
  "key10": "3PKJoetNpHesdjo4TbnVxeN314hkZr7fDXQNcEJKiUycrQbXx8PcmEfPj8fW7YsCuS2afgEh1GRsHne2sBa3DuQG",
  "key11": "4KwpdpTxaSftKnyCuNAGeEFgDCDfbYyD89TaoEq18ritMdUm2vbzRfxBTtPF5TLhFxuyap489asRP9sg3gAbw9AG",
  "key12": "3TcZZdPDMQ9wNnGQpFkraoPRC5S6ajmgGGyZCQmhVrVX2GtMzs1G1JapBjBjuLtRrsp74xCX5yEHvQkVDZciSzjY",
  "key13": "3XhaPJmakLn2dMRAQXPT7eW7bXDieq19TNvWG5tbX93jLZ5Uf4f4F5VktbWattGvcftUQXCSL2CoWuLgaG7RQACw",
  "key14": "4nckS8NDVHxmGLscMGgVbhzTWv8WX2U6UzpqcTEXzEb9M354jm9Jo55nhAmFudeXVc67tzP9BnGAfaLTMjEPDBCu",
  "key15": "2bQJKXjQ67M1hykt9iYrMPJtAL5rrLkdHZEoPtugDvNXBfp8k53aUy6JAeM5ic2RjhDbj4LeEuVbTztvcoiCRyc6",
  "key16": "3tabsuKZRfWRzt31fjzhDwA1R1Z9ejMDfBEKbKQBjY1pertKDz88ZDeS3HvdPwMe2HgDH9BVHBKRcmBwy2jPCXjU",
  "key17": "3zVGa58KMmBpt9Dyt4ujhGw6bpg1uLBCFenWpYzHe5GCvPgejiAH1ebJFFi4LAa88zGPc8BsjEeTVyCWydwzu1kS",
  "key18": "4NLhzEVSaNVhVbbBKuMKA16DvL5764cT2CBWgxnL8THSAhwTTNDsfywE8awv3AcNwbgDYDETqHpBQHMxbA3cyGLX",
  "key19": "3nbiXKSownJv28tPtDsjPAMMtkmxadxyMd9GfwbEK8k79Qrd5BWGk6WSrA8MWFTF1Sf1SztQ2iBWf1Yibi2bFdid",
  "key20": "4NXrxLWgmtGSrEZ5vD1z4b31dzAkxZyxo8YuxLwcXUnjkgnDT7TmT7GJrUUgwzmi2xLMzmp6AZ5msN8kS7xJaL9E",
  "key21": "2tM2V728L7Fhfcah9NynG5i1ne2o9JoujpsDLaTLKv4dmEB45NMPqQUPNNx2RHXckGyqXRZCmhG4p3GbTQvAYrmF",
  "key22": "25LknrL6ZVGEAWxSFxQEfqStE28Pf1cnX7dd43hAZf8jZkkMcG5Mcu2LfqcEV1QgAFHJi8vuRiRSf2kEDJvJ6SfU",
  "key23": "5uBPFogrXpQHrdD3hTyZEdMPeNRk1ku3hdT8WXzJNR1fyvGWDPNu8wH99hNgKrBoQJaXYCBNP14yqhrLTPNAeWg4",
  "key24": "3GgM435YyZCXFt3uUNU3SNv3MhgSYYDSVzbRmiAb4YYZT2Xtuws3exyQWWGG9Ssjr3kdXbGe4gc1Lbud2uR1qxKV",
  "key25": "5wQJ9y9oUUYYrbaT7zmkMttnFzdFRQBEy9KBeo2ZTNjjPc2S1uCsqUYJmHSP4CrbQmYrL5VLQgAQ4V617A4xm6L4",
  "key26": "wrmRVDkbBrF4JBSBzvYfLAgxqSX4dZfc9XF1uUr6gfSmBksQ7z9L8ofFkDzNCAQ9URRpJ9pVS9UMGkmc9UgJZev",
  "key27": "5tTAsmD5S8YGxerKuHJX3PLoL7WT8PGBPLEoZsVm699PcB1ZXXoEgaHQy37tAK9Hc7cNpdJViainzERHMxn8Yxep",
  "key28": "8BEhp1qgcX4YDGKNJphVUJRPpE5wPWfEBTkbSKdUprWtDu3j9T5g1T6GK4PRFp7wvHKmLKLDrFif91x66u4aXEQ",
  "key29": "2gEKvfdqBm6jriuMWV5JcQB5CsBZ6YtSdgz3XXGoAivVG4Yp7GLS2fauFnNcigsTRPPFMU3PhF4ZWCQPtQVmgmQe",
  "key30": "4cnE1ZQcW3ND6TVqb8h4UwMYya1aa5T5YWvVpjgE7gCWGJGaQP1zoQ6ADcmi1Ekhxmo8HoKRL5fDq7QTovSH1EHD",
  "key31": "32iMsyNYXGWE8ZNQ3UYN6gBvK2VR2LSmTwoK9fRJkEMEHN3NqRbWboAnkjQJYEKHx2eYPyJVGcyAn2X8t6D1tX3s",
  "key32": "5JSnibZN6wbHdbx18RrrpJhLAcGMWmp4FtYRsfHeyhEgXYoVW6FVqdGucmEmVaPjEdD872aoNhjCwoUh5woLeCPV",
  "key33": "5ksPDdYNRos31dLVWosTDyRSw8fUyJUwuzsYvNh9qh9W1tL8w9x9XQsUHFWeiqGQjvzfK5jfCN1b7bAEpr3ZWiUX",
  "key34": "2srQCmZRFMCy7HVdWHmnDvMVojN9pd4GTbiiAGDJiUKxYys8REyMn21pbpzVoAEqjadc2m3JPQrhoBFuWbTvxrCP",
  "key35": "3gKSSDTC2LzFjAnjx2fRWoT5wJbDFe74NX7twpBxRuSQHqbxwp24ZnfKZqMYgUvWKz1w4iuvDYrb8Zwe7bpEQr5J",
  "key36": "PyN89Pc7t5ui1cEFqzunTQPAXLodR5Grno9shgByyoFv9Kj4S4RTsNAdo726jnBeMEk8MNFk9wPF6pVqbZ6Pi63",
  "key37": "ZAp5qNTqfDbt64Ysnjbaga1ZYmXmrELWLKh3DXFqGbSzAvebU4qETL8aBz4hBXnE7zAirTJZhoQcVd98v6XsHgJ",
  "key38": "56dfKVh9ZGPqLPd457R9wHZQAfMjFmnAckANSd3cTxWQfFDtcrjn7MYL93VLsN5ovYZMPonEiP39Kf72NpBGxZ5j",
  "key39": "5mQVSVekCDQoWFtQX7AcaRsecJBL12rrX9bJQqen32t1jP4hxGRNNVLFNMtFYMi7uWScTwreqvXKKQLg5qbiC7MB",
  "key40": "4HvKv4a7xwgzJ9EsSca5xmNTUXsgsvwubfKdWs4oqHy5MYF63ypQ2n51bzWYyyh8f3v1EhofxkNupzrhRA9sii1V",
  "key41": "5yMv287AA69JXo1QwcjsCwku4oTR7tSqc7fRgq94FoWBq7u7zqbrnZTH9iJNXkRJQ4E98WTAGvg1enSWgfHgGvvG",
  "key42": "4xKfVkDnw6J7zeq6GdJTRkDtyfgQ3YUEMJBU83ige6yyzREe1DQbD8hFB2E3X3hMBArryVF3MQU3PdT3oqPKTf7F",
  "key43": "32kSgEgfMkDv5gXAu8FSKjGqoxKkuNfKfFLjMksdHvBXQfagXGNscYozUsWiebNvQYD7L96z1wXWweHRUb6Dh7Wt",
  "key44": "64b1iScD5LzQekyWbgZXvzh4zEGgZwM1YzZHcDZiF1SMLe6RBEDXfeUEENQUD6ADrTJhy5PsX9ojvD9TANazVsgM",
  "key45": "2rfBt1AeGArkfY7jNQ14MgToSgTpLdN6FmcYveruafcnFi2AXyNgLEDsCYdFyT2FzCZgqF5AN9ANHm1MvvxdnjwH"
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
