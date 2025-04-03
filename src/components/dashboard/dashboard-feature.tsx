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
    "5r2GoyewzH342yATHdag8xEEptkDYFnF9dntyKWVfX8qLGBgTxEmNUaYJg1e3qXWdczzBEL6be96JpsmPkPAkWVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fEPQjWrCbxvX3Y1iMTE7gF7SLJd9ASiJNy7umdBMQ5K4X8EYFhr2siVkqeKUZjjnHzSe55WNfk6udv5NQCqWp1",
  "key1": "3B7LJQ5nokm4vRTPq6zXQnQN39bpCGX7oVtfPNxhCy3czCwr7F3VoaNCJkWD5tT1eotNmLmGZgGeryTXTKyUYoc4",
  "key2": "62JtdpucSyFQkAJVpJiywySVhgQoFsaNKXRVvSaViz4MXMzuvRdDLJGif8EjyhxGKaY1ChP5UAiXzkdNc539aCz3",
  "key3": "4bLRBYAkXtqBMAx3XtyYNqcz3n4UDx58yiSWpmFDL4GNBor58BvGiwAdnqXeJLCuJsvEdXk76dm2wfVEXg7uUViK",
  "key4": "62dwnziYJSqoWCRwpHXx7qzwwRnBY6DnzWyqkW3jqTjBcUUDBuwU6SeH2XmrEewyc2a48kaXcJXwxf2cmegKduGG",
  "key5": "3kanErVbdqXcpQxry8WiwoAeH61SW4PsTPbsvK9h4kNsc5hV7AGDHurfkztzXWT1cE1WbR9t8fFjvyjUxB91Ke7z",
  "key6": "2xtdWNmSMAgv4dZtChxJQ1jH9hGF8QHaBvrzcQsHTFXkkCrWbo6e4MnfWuu12r5QrKvnsso4xhwsMs6YAgAGwttx",
  "key7": "2nUTGXabKPuED7nzhHm9KS5sncicUoGrLV4TxXz8kFtdDvAeaAgkhYJiYcZgPEWugaF2oYaxPxA6UocnSotwjgdQ",
  "key8": "nwrZ3MVSQMchqBGQuaSgTagGCoC64hitPJSmpcB5MUSW3513HPg9ZxyyUTBNDB3STqPZAg7yMsYUGjSfCyxrUMf",
  "key9": "d1iGvaHPHznGGSJQSYe79G2Dj6qxzk7bVPyuub65LPf6WTvcT8v1oxEtJbUBsYi2awPYFGHvestGL8q8Raah7VR",
  "key10": "5YeoRbEXApovNjcdrjpmyWUaAMHCFBrnD7PsJoz4BTVVWQW4MagJEYbuskVeqHptT2gHAkPUU6kZqGZqPmEU4HqJ",
  "key11": "5NFvN4D5q2YRdiPiqKtTe9P57SxHXBQZXhtf6D58cVc4qLs68PyeqcHsrZ2W5FtRoDqyuyArrkVvYHYQmAR1ix4R",
  "key12": "5Syf6qSMstSAv4LF4k9PBxAiTyNLQDfLcoUcufpX5oRemYMGhouiftvqZbAnCuDNmXaAmsgq1h1suDn1JoP7DZ7U",
  "key13": "4YKpDxTqf3X8GZX49DmHe1YTagGJuiGXLWCHE8aBZpsuUa3jYs3jzrvmuw8nptdB3z3UE5ah1YApwWbroR12c7jT",
  "key14": "32yKmHoDuMU4gKWLXojMqiBJYnyXNnyDcv1nHamHe3U2V86uCWYujkbWRCjyF8HVEpaiaxPKhdyfCPGZ7fhgfG6a",
  "key15": "47BG3KT9CkQHh3YST2ZTo5E3FwDWQPYEMRt6ELmpptf5DNPfgWdVWyw3YgWKKqi5nnvNJrpfW1QZ9QoJgyRKhswu",
  "key16": "2MmaZGPcEpSVj9z5BrZGBxSiXGjUZbFbXRjnK1B34SW6VF2P1km4Vcxz8f4LviqHPj66tZCXjxj5x8qxHghTyDGb",
  "key17": "3t23cttUVbCpWd6yn1376RJgXipcA5sBChammpqLccMBytgpdT8FpQpKijLPg2fDgMqdw59QWYjioBcpVPHdQtYm",
  "key18": "5zE7iVfHjthSysVgZt8CJSwqkHwkaK6AZcju7w4562UwZDQFkMCuiQkjUkn8Esm9bocyZdoMXqV7Ki9hUupofJnp",
  "key19": "2fqZG1kMKRP4xXstNCQVJn1MmnpaaZdkyrV2m2PsDnBBd6XNuJmYMviPiCG45KkeXTmtkALgQ55iRwhjyMYcZgZz",
  "key20": "ni6KHUXcm7QQdNB8KfiXbTP9iBqcPsYDxVhFHLNV1F8c3sm9tRgjzj1vUsBhmsGVa3Peca9QdktDYwe7JAVjesR",
  "key21": "3vtbHAWxweDjGmzqW62fMYL5VRKRUBpbTRBLhL3zzvLVUTHhqExjg5RQ9ZYbLW9ArXHTm6t91nF8zBRhXkbDD33i",
  "key22": "3aNrLAd8mV2qNfzLZ3KbdoXKdyKdrusxUnovRdo4e9rzgLC3f4v5SLKJ5bNRi43FXJiusYxmi6ByPSf4FVCsxTW9",
  "key23": "4qB9TpR87mJEAgJSKkt7hwCaESrCvmkQg1AsmZhgvfi7B8Zij7M1kmPnV94Fuf4J6HF1LysCQtKU6dL5o1SVXJfh",
  "key24": "2uJVqb47xLVSeNoTt74yaY2Q6Jx7SLaWSBixrkoGYFvW1UghWgKtciKuVPCRKTqCTQZQFgz98o5Kmn7iLETh7FQB",
  "key25": "xnzRU1sjCt8huGffjdadWDtXNCAvuvktsLYuYKjTfU8RbbfiskCQyKDwbpZ86MstGFfYYvmTUCXgtHSzV3KyRP4"
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
