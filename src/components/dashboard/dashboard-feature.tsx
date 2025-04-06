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
    "4fgxbtYrvCGb725ykGwA7R8rfkz8cQ1QfzHx7GSLdE2RbT6oamHfo5wT57pH8Pk6S54FBWBecHqHfDr7hgKaaZBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMP7bvmN5TeY8SCmHKZePf4r4CDuYXuKdXCEECWGkc1VFCFf6sAe5uAxa7gZPfc2ePvmY6Msz21r4PUxAxjNJDc",
  "key1": "5eFYvwxjeNjduEH2rnWHEnp4rWMqobyisFrR9TdkUw6eDBJw9UL4dyJ7PhpJ5CzestxhMyxHJj4SNQ7v6CgiQcuy",
  "key2": "3SYgCtHGgusXJCUnHHEix4pj7QKYqyYHasvSCQhso3eLMUdJPxDsAPFbTdTRMZ5XmWsZt9cibFskRjUdG6hNmLBy",
  "key3": "5Yvv6wL8JGPKyjPq7o9NEBir8oXdC9fNTsQqdWKtXVQ7xa9GLqZteZMCWCL5nVDA3qczVuQjPM4UeVBqmaY41HCx",
  "key4": "5hSe8QJh8mv6Jx8UdmdzcdUcNNBf3eetd7TVmkZrER4Vm6PYmGLoRWZrityRdcMtckBxv3BNqjw4QmTXTXmxeRFv",
  "key5": "38FkZaioRaR7bung6HvNdPuEhdF4L3k8Vcza5K4DCjcnBfzzJ9g2iKdRkdWQzt9A4WsCiRsopRfxVHS6gxA4tEfd",
  "key6": "4KvXVzD5NwsUSGjPWURpekMMsX9aXuqWtCmeUKuy7GvJD17yqrSjnpfYLnEepofaQsHT3HybPKjmbiL5duBAiUYM",
  "key7": "utWSAANBHXS4WjmiNgU1D1P5DmsQNhQBVFNhoZVeiBdPbKPMPfjtDdzUTjbPDEu6Sf9jbtc4jJj4Ph3tZ1Sb4Aw",
  "key8": "JvuyZnTP2t1JSjSu1oi1dVF5hZM46JHs8WjHvSWTZjV3pQ5zsKj35Q5ewRYRDxCDjuZtHfM88458Z1CaSvnj48y",
  "key9": "3YvtfTV4UbTxYz1es3axHLAMX6beVNJBPhjG9Kzh55bej9NsArpf1GgnjurRgpCmDQvxochVUpNHWWpiijQetsLr",
  "key10": "54a5aSxgRPizxFiE3PooF7W9iHqJ2qhKh7jmDRVJtnR4rPT2NpmG5LerDUmKKR1JwaCP1Sqrw5URGpkNTkQx41ub",
  "key11": "5x46Cpf56AkwRpiGTn3EsjeUWkBojkHQL7SB1mZebC6MAPjfaokLcX986QBcKQ6kjnYXs3sizvGuB5AmsyS1sY1j",
  "key12": "4fVdrwi9hENwwrGp8REdAPrH4CwyKrcXQCnZaGnrHBEZyzdwV2U4op7DGLHmQJK2PhS4JBwF6ZcAbebe1v5oMXW6",
  "key13": "5dhKfYneS2MUwLBbHEj8fbpmeWDpKaVXRUNeSrqt17srPMCKqj4UhX5a6fENjJc2tNPwZC57AXSoPMjLKY6suQ53",
  "key14": "22dTV3pN4C4SgKxuy7usg4LK6qvYPB8ZNDKS7GbZqvRiaJghm57n5gNJmbjDDYrc3Dqr3rfJbCVqLAJa7ngA7r9U",
  "key15": "4668jSyQfzQjwenp85U19txjw93WPi3ybCQs7gH2mNaFW7X5V4Qsm8mfyLPftj4kWiF8EjwkxRd41ygUAQCmffTS",
  "key16": "WbFHfu786EaWuXkodEtauet3n7ALeSchPuZtpCAWsY6jHNvPUbtWEHwCaaBvc53q9TNLNjkZy1NWs1Pxb63cdCo",
  "key17": "61xSVW2ugBfyu39SY1KFb5MKFJkg5dU7oYmtcmoArNzD6yDczxTr2np1iLYEoz7RbBSjwZxaf3TCRXRj3uAz2nJQ",
  "key18": "54nxEEtsQnioCzoA82jA5tHbeZ46ZL5PpGSm4ZMNMG2MS9ncL4GbFvt8zgAbfXeemyDHVys6Lixw1tF6AivgEeLF",
  "key19": "38gASp8gKP4jxwhNR9Gq5uxXApp1LniN2HD1Bkrv4XxaZAKETQRtEzM4Xb7QYJ15bggiz1MdYMTAoz5tJgbmXF6R",
  "key20": "5JR8pqwwrTKSerHPa24FFHFFXQHyfCV732XdFzPL8U5tApKmAKyUsLBCE53C7nBrZMch9Q8yprbEhfoaJKaowHUv",
  "key21": "3oyfXYNVyKxyLmrigzbH8ZCtJ3dWxXuTsLASShP835KrCguUaqe4vmMSN1zY5AcfwFZ2u7MzGW3hj2tX3jkK6ADJ",
  "key22": "5yNY9X3E9UxfQUVqseZT2R7zxp7ZGNDaENHkqWEFW8jnfKhEd4MhHMR34vw4fkfgoNpS9W7ffCGjZ3LJ11PptaVU",
  "key23": "3jm7wZszhBr2Kwh8fXSzYMKaLGRv7Qpckq3HMhqaE1C8Apkrks6HHeh6paNMdstFS8whJnkY6cdJU3hfyUFhsBTb",
  "key24": "41HQj8Wp4EgEX6pPcPiVwtzyCMBpz5EteMrRr3w2r8VxBd4tt8fYSCJenbcYEPeeo5u7YPUdLVxNmP2P87aQ6x8n",
  "key25": "MPpV6d87kuwFYqVBYVYRKxx4FtKvtLvBv84PXKTpWqb64LTBxCw3foE3V1ghzt25RQ9gr1WKvm2mcqH4EsWgtyC",
  "key26": "3NsoJ1w3CQM8pMmg9pP6jgvNa42fkBuLCrnni4fPuoHNrbTXqSPiTZYegbBXEy1fDrPorDTjAaV8bS2kXRVVN9H1",
  "key27": "2W96g2sDsN6eU8YhZTpbnnfWem97BTfw4hp98xATUapKSn6nTtLYDsMCw7qXpYfWK3ZBGEjEz3JMsf9RYuYFfBuu",
  "key28": "2cJhSWxFYhk6PYb4m1qazi6qve9gBR4j63LjFciCojq87W2c18XLcik39eXtrPk6RSuHqxmHXTd2EU7ZW7XTV6Fp",
  "key29": "5pvxaJiK3QCsCXEzusy4aGdRW9PFmc8cfDd3Y3eGXDpesov7BpCiyEuKAEjBYCDxVAB65CrJ9Ht1Z2NnSo9ZYr2v",
  "key30": "GUF7YrxosDjbpsDLE4BZbSsoGYvdBzJugCrSxuCLXfF51ngYqkNLrxRh1fkafdVsqHJAw9Jwy3cYm6367D4D7iB",
  "key31": "412rpVDdkd5zfJi2vrYPNB3tCQBZzbqCZJ4uJxQtHPHYPq8tiLQfb6DSU4m5bTzTybgWEUGcBLTUoypiZMibaBNF",
  "key32": "48jJ4ALkpG3bzW1z3aBvDxxtqbom5rPZrrsMRjd5ynns7YEtZ4Yi2wyWS64GZZLsmqotNRUxpiGbD445DNEvDLde",
  "key33": "4WqrspdRZzKyMDufmr5oEztQapqw9HAbKhuyYeghFMywPHubdhQ2uArFxQJDLR31U7cJM88q5LFW6CwrMtTQK2oS",
  "key34": "4K6ppLWHEqhWUEJthQuUcMUnzhiUXufu5sbU2tohnnfPL9N8ExTpyRg1R6HduH6sVaim4uNwrgnW7NQ5KHbkNGo3",
  "key35": "3xk4PKmM3o3nYp9TUQwZzM5NXaWNitDARya2uYqiv1kRVB3x8pBQZji8tKXStW1oRG3CSDWqTsyecUS6BVy8NTPC",
  "key36": "4toxLfwpEbQokYbdtRay3kA6VEGDnwQDe2eh5roYbuzfsJc1H1ELauXxbUtS44FnDJaeztiM3f6fGuY5YKsr8Av4"
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
