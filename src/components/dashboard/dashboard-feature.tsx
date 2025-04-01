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
    "nUibi9Bt2gcuc2zWFejKM6mA4ZuFt6YMdBD3wVKX4PADefDooJA5jR5VyrcFfXH3zFaUANCfyB59nHDxSnHe27K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjgm1RH9ZgKuDXJxTgdQgEyjJVSTFvd1tAtssGLDYv7G6xoCtjejsr2rvE7qxLaPMFVQzjqMYAn8T7n9xoFADsX",
  "key1": "58HPupsogLLQU369cz2Eys8XodQ1KGYnaNmsefGB6wRyqMTx8SZYKv5Ls5z7ChA3NuEj3CuAmZnwwsHGnk8D1EwB",
  "key2": "4E3GyiCZVYC4xybYY2QU2dnmSdrdvqpt5hWK9XvDUUePp1WfwDMJjrPr49FAvowFQoJhJYAvLjmQajzbMo4xbDjp",
  "key3": "ELyZUC3stLz6iWo3vrSZHwRhrekJ4iKpBcwSmZtfDsXVZ5LnaCPxSYrEbYjGC3cpq1Zk2VHkaiqVNvEU9LGEWiS",
  "key4": "4iJCWJRYV1qLExCoQpuLeJYKkWcLjgx2qdCYdm3aXNZsbziA2Fqunm3RAMBoPt7FeNYeJTXuzatL9tXGfmUdgyc9",
  "key5": "3jft4uzYYyTZ2V5X8oY5pgkiQDedM8bzq9r2o8h5HFTk8PtT52SyhzaKKtCGJLEfb8Ex9skrGKH69bcURF6kziLq",
  "key6": "2GekPxEdZUE852x1N6XeYFByMsZHkeEbu7yU52xJ4zExotnCtaKPQTGfYUEqnh8np9Z7AEPWJJRvthoyzwaR6F1m",
  "key7": "67JcLN2N2rc4EtNYtQaiMMpbtdRddLLLSjKRNpeFyhP6HdPS2c4GQXU9hvAXCzMp5maW3ARqxwb1eF4ULyNk6UbJ",
  "key8": "2e8Hyqa5fcc7ZhYiQ8CXxHLWXSRrhgezZ1rWqKy41S2gjCcHLYeakJ96E4bhEGHjB5PFUdybd9SYZjSuU4CXp15a",
  "key9": "4rdqfUCr6zk7iBTfgMD4vkop8crXTmtknZnUzXWQ5wRTCXRaxXuQ53Hd9qsNBQ8tTKgtqzGW12oYXqnhZnDobDuq",
  "key10": "3wz8qV7Tz6VFBrehmZoVZZChWRohK3hDiJrgNW1KrPJQA2auFkP5QEJCBvE1C9tTNwWZeHT3JRYn4NNNLGG31xDe",
  "key11": "aD8HZgzXWSdXjJFQ1suE8GEnbqXcG48aN97gYjiLHhrTV6JDur1Nhmd2oFtyRkYvzCXwRV4srvWAY2xuFrtKAbS",
  "key12": "3Rx4fC7rg8GUCYiNC8ybbfuK18iADox3CRNKfuid2Up7hFhcEjfLk1aXoyJF4XtSxmvXjmKEBCVwVmk9FEiajUwP",
  "key13": "5N7CY2oFJRt8oHvXQzfQoGf1mxFtRiCXDJq7qoatu2nrGfvGeQFF4k3vowgUpdZnF2cYWns7pBvVvp6CjFC79XJd",
  "key14": "3nH4o5F6MSdhLu1P6jZXx8CouzoTArbBgsmb4HzA1YEAkMM4neVfMUFMaZQyN1S5Uus5SGotRAUJ1pPcxauJwQcC",
  "key15": "zvu6JxuZy6daZQcBvoWQQB5EFNYRiMrTqq2r5itZJXBbGJSpm9JgVULuYdKicQ6qs1eJKbQorwufdz8eNRa3Dox",
  "key16": "464taixEroGAF1e3wRctmUVfTCGYrZpXtmm2AU2wgnin1U2ZQdPkvxx3mTi8tfq72f3c1P19WUH1H4B453iJdM24",
  "key17": "4hYd43TT1incZ4XWPJrXTT4a4bpxKnBA8VJ6Gn4gAuMsRgKQXW82vcHfjdYKf5Yg9nCG1ds3byhGGs41GNopn2WE",
  "key18": "Ln8UxeuME2RE7CNfVQLh61K8wgbKkuWwcgDHfq7m7xdzNea6EcEfadCwFTd7LMLGtNyGhBbMnTFw5FoT5r85G4F",
  "key19": "WgvM4kGkgznHsNnGJBr4rhr4MeLeVoCftTppDQP7idSS28ARSc47E86sJFWSDJ2C9r4PfC8RXuJvfwtQBwvfjx3",
  "key20": "3GXiqSx6r3YKfyqE24SxAVtRVG75Th3qeumxRAnPwg8UFpmsJsgMjebfVENkRRDVm1gxp65pKQk3V5ii8c8RvBJj",
  "key21": "3B5w3VCWDJTG5F654cRRffqzmd7SvY5Jbi27XM8FwBpyCQvvbBb4ijYV6VxfbhgQG9NQ9jm1nkWucg4Da9Xts9pE",
  "key22": "5bKGtDQ1uESebTMKwqCbL6mZf2PcFTNNt2eii9fjuf3vF7HXQavE3bAV5Tac8BCaYc7f3dCfNftM7Nv3sHt8dPMc",
  "key23": "2P3zsfUkiXrXGm645DCcEoZaaHM5J6UVhCAGhcikkHtrzXNdLSu4CVt9feWcWy1DudFZA5h9ygwp3sf5xGZs8Nfd",
  "key24": "44VPXMPLZJjiAZmBQ2SC9XXizZ2DYKMU2JGoX8c3SgS9LrHQDLPDY1JcyhLqmcrrJVWW8LQqS7137mL1SMoSr6h6",
  "key25": "3PmYJw4FR8pjoEa9drNr8uCpQcFfgvm398ywm3tNedDkg9YXkmaFMtYzVGP12orogkSXTdA3DJesEiapeYybDiDG",
  "key26": "2vRx5T1tafbahePbWGxm7ku8edJxoGw6BQ5KR6QDz6tmxQ681oCE2cK8Ve516hZmQd3JFxH1jiCT45BY89TqS7yx",
  "key27": "3KsJbQ9aHC6mbHNuxkoiH7bA6chuhxU8Dd7w25JytKCz7fg3TiN1JDvuwGvF8CLtCbUcQr2a9BaxaBCrZa4fcftc",
  "key28": "3VwBY8N6nK4sMCQQMBj7abw4UFjbqtWCaEJhvuDtjWW3pmBeSu72huVdd5VuJWpiHSxVoMvSmbF9pqtnKhd9tSfH",
  "key29": "42VeasPh3KvSWg3nUy6KoyeCmKQufMaBp6wgmM8vi1zH7xvGJD4J1SWo6CFa9zhSqpBGa1gnnD7hLj8mrgn934UL"
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
