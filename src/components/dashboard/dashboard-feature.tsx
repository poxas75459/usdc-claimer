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
    "3TmFzAV8A4MFyyE9Ns773xUxwJncaVtLjpcV5VW6oabxQoBpq7YirHqzvp44XJah6xCJ4Jo8prMF8fWxXpgjCBq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qax5d3LZYQXFMfaGt48LN5ay47k18RVbiKaa98544qL2wjtzHzocsWJVrzZicmpb4fxHhyVMoGXQYZjeYBZuwqG",
  "key1": "5NZkPsE9bySx7ovHd4vniBTTJ4D6yZNUgoTtE3z3kS7cWunjztkSaZfsZ3oSWQ5kAiSKBYNwsCxPSuYGg1zd4SaT",
  "key2": "2GLXJcHDctafMHzPzvHNrvbKm17szvopSbQoEUEzg3d82YkPVqnVfhbvRf6LPbT5qyJTcrujkSwf9zBBwratVoNZ",
  "key3": "4Ax2sTusGM2RHyK47cGfqwPDQREV6nKisRXN2w9j3goh2vC1VwD2VEcVnxwtpkGWfxM4djuG9hGiEb4EAzqzv2TM",
  "key4": "5Qr4EmwX4t5r7VXiQAuXfrEKRFbvrxzs5pGXufVwfdDCXcHYX6W9akkRcFwe8MisUF637JadHUxhUJEfT4C9aHPC",
  "key5": "2oJse3CxTHeaki3tTmEuJpiFVZ9hDcEtPYfETJQ7GSd1jFkXUsgtyQKsbvoALMyJ6qRgMuHsEouKWaH6uv1v73F9",
  "key6": "2js7Wc6KYaghBYJxfM8tM2tiyZEE3m4CzZr5xZnVLmMriQwMmTFhpRGxd4DnJAK6tdqv8fWSWBDnBKib6d1wmdrL",
  "key7": "Lnum89Q9r6efXZE4EtvMuzD2fcGTrHo3gQkUte6hQs86kdNnFXpiYsd98YectpZN7X28CTGZr5wF8JJTr3B1SiG",
  "key8": "4f6vi42TpB6712qutWmh9VGrG4PEHxGX84YYMg4PRGJ95AY4wQschLpVnd2epApi8TUEm3U6sDRb4mbNJVfSHtMH",
  "key9": "38xE2eZ2QEw9tvATx78bauGrRGRc3YaYsXML5pQmB1Xq8muYkx1DstyVTGtyhegaXwfXSJ7K1eFmRaJdWkiMek7t",
  "key10": "3xaGksX9hNrNugEwjjYBAsp7Uj3m9YGf2Cf1sJEWm8t7ez2UrBFGdsKvLXTaSpdoJAWXkgxFpv2vLsMw6QYPh4B1",
  "key11": "1Ksc1tDQoA3vumwS7bbZXkiLumJGCGyVKkWNsD2ywtezAUzFX9kfhovVftJhHhYLUSykS4ZpfU1dqzm8KMBLKPV",
  "key12": "2XSra2jA1A3wdBjAtdkaaY6haRKk4KY64Erd8Nqfw49VHR8pBrTvBFUkHfg22PyAJ4fDbP5yScScjdTMPa6zLjWk",
  "key13": "pVqMMiVm8TiJF6ueSjuSsNKJRjkkE7ueAn5dCMqFDbBdrS7yXR4qmmbtdbvWZhXTmYmxgvEtvRmY2bSVwBx2Fns",
  "key14": "5csx6tcvWDFHs7w1DHdzC1wrQYWATyDePSLWnvyqeJEwispvJ3tLJdABs2MbjfTt7sYRMwsiC5AcUvZvQtUosft",
  "key15": "5jgY5oDCWU73cRbRQiZDQtYiGTEShA4qEvxYf5CrtD4bQFNLWQLc8J7xvRBBf81TzyWaep4c5aRMC35jwpWYuvdS",
  "key16": "2PUEuzVwYT651mkSuUo6VpmgpZigH28RB1qBjtszrmdX7Nvf6qn5ybr644ju4yR9p83mLJ7yDXGwvRKdX7pPTzG2",
  "key17": "3SG8eFtkp2ULWLVdGGskrqz2TKUkJpE1YieRL27g33Vv8Ns8iQyoJjMhsQBzTnt9FXidwCyhJ8i9roQkLZr1Anhm",
  "key18": "349FQ8r9vtStnySiBjDpdh6od18TSxQFMEstPJqBF5P87ESZzSBeANzF2YqVxCmkWiLWJ62WKJF68LHrfavArxFP",
  "key19": "43cJ37RdCyTW64FoLpGvvEZCGJ1dCxibjnaYTrWH28RsbXi4XULfRXGo6RtXxeZdpTbZtCPW5Q34BvcByKDytTXk",
  "key20": "3bXoB3pY2rD47BQhfaNwDLeoDLZaHVjqu3zhf2TwC2EcjUHuxrQvWSfcJa9gMaaTZ2rH9t8unFKhqHYwMMEo44qC",
  "key21": "3KiseWzoJQYsDWmfgRVKy3VchmqjADL3AXP9r82SnyJ93c2KNUwWUyNrCue9JGDPhBBCcVen79csZS72vrJow5kW",
  "key22": "2oovvVJFsr8SHyCnpvivvTZMksJ8cHoVTJA92mbmEKZ6eW5917Q9zzmqTLJqhqgiBrBzWGcK3UMt9qW9mHBCUdgs",
  "key23": "4HtLm1LDfddUyJsFhfQ8mgdpm4uB6K5XtNuz4Hx6hkyjVBvCXcF9EY8cfWbTWK3rcARZHmtb57cRU1uNMMV4k58H",
  "key24": "4d11fRRf9p8b6sUocWtGTxx9nAcccvxH1ohDW4RLapLuX2RMzTtddiHy4zezoxDiC187pjAMfx47MdG5k2xtf1P3",
  "key25": "4jV4eyFF4qnstiyynsA7sNoJDTjVfUvq5KpBbpNekc7nFfQLztxtPNXigr5iUiKVFnSfLHmK8R68SqKyPFD4owQm",
  "key26": "5gYwAybqCMfiCcfDWm9KMC67zLbqWvAHADbrWkjurhXGJfrxSrKL5x4RGw4fvu8aAhoijzLv6NRhzajSwHJXWosa",
  "key27": "3Yg9CMh6YsD3NQyiwY9u36o8fKH5ZWt6cT62uYgv7kKQpGbe5frnXJCnPthJV5MtNbWr1H4sNxDitaPRafpi3eGi",
  "key28": "4vgWdj8WuGGWP6YEdLQCuEwo27fTwDccKtyt6T4yawkuWCTMwW2mEYRkkkmGq1uFXT5vqxNYtSECEkXc8KiEzT7s",
  "key29": "3JZqaGcSF5Hf2E3GV8rRjYH4h6W8vLNpJLQQc5gPi4kbjgGwVGNw7a1n2NNa8sPztTFymSCrxFx8qAmaN7MCa1Uo",
  "key30": "2NxngMqEZEvYt2S8an1NmafHCKhr4QHF77NRPpv9j2cg1QgHtVmw8AuT5mGWMnrno1RLqciCSo6ZahiTcJsMNwtV",
  "key31": "5wpHNNqssxJPuBBCuJTp8tHH7vHXaJ89Gu58rhSRrgxUK36Ky4CykeaqmH9uPyfnbbMzEmXcCkrN2W4GqgkSniaH",
  "key32": "2eSoH2rWk2n1xrYpF2RE1TrBr1NkLNALM9iaKaFNLWNM8sUKRv8vJKhSsqagrbUePVS8TgC1Kq41YvcJPcy2g7iE",
  "key33": "4yeTx9ffc3ufaHm28UtHVRnNGqcHRm3AfwByi99eXqgwrfZe5QF24jd4vBb812emT8vPFE1BDqS84JBSScqKn71o",
  "key34": "32MpuTpALCSTiMfvcd1RZiP4MhW9EH3Ap6D9h7ykNcBqE7taSpK7gUxzG3m5qnL9yCggNj4gMGfLii5bhnP7LC3g",
  "key35": "2bkjSzym6mXMQYwJud6PHD67Xk68MqDfoNSCtvUgrX5D3fNkJ1MnmqWBHsUFKFT1GEVWAUJXAr7UPjzWn25nEQi1",
  "key36": "4jyiekj3i8HfpRTZXUgqcBy5hodTT2x1nbSkbauNWfqzDU4v5mKsRV7KwuDkhEtvDXcNzi1XDPJvha3XPDoX2koG",
  "key37": "2yaRDVP4JhsPXNfwLK1gwcZZwsyedgouatPfB8RgpEK4VPTSoACCDFymthgvKH1BxTr49Eh1Vh3XYdHRHRfgUDR8",
  "key38": "HLVhvMSHwDm1qaV9UtLNh2MvcDfdtHguaUpc18PGGwyhd9EfX3voii2YLtdDw9fvE7isWmBo71TkK22SxN7M2nr",
  "key39": "3DhUJvfVZFXGaSqagpMCNNMTXTPwq1pSfFdwgTESjf9NUPP6UQAZLv2yNYXhrYrAtyZRjSMAHcKLWxxTvkAmdfBK",
  "key40": "2Gro19AeQKhHR2LSsE7btkYhLhxWFqEokCsRaE1ztpHMmBAt3fmMJ7hv3ZzgUWPq1eUJw689uZZEztoSpi5yP8C3",
  "key41": "4h7f2XbTz6UkeijayVFZb9Uj9CGKjPWiJP3fArZPMmvMSmoy1DpePjGm49LtbBua5g4EYQ1NPrbYxVswbdb8Xzqa",
  "key42": "2emzHx3mHAXxhuFTuVKMGeaEGcnrbzWkUCNg3VyKVqkzNa1K8PDirAjJKwgH4cajyEhV9mqTq1LHHve9jtVJTzfq",
  "key43": "5TrttEtpTQSRRRoS3FFdXyKHwCQyHEfj2EUQ29VRAw3FXEFu3EdcBb6kLZcQRJYQLDULit3ZHFCBZmp6CEBf2ixg",
  "key44": "3yAaqTgckG474NSEV3N7B1fLupFJHmcCZPRY85SSG1EDAaJfSGokdNz79ragF5sZvo1f276hkjrM9be31oVaq2bV",
  "key45": "2CP1Z1M4AawDo6Q6KE36beyRhK9STKFJC5du7ReZLJN7KizFtTbX3hmbGX4P3DgjhvDyy7Pn1A3YYi6VgiMnVJQV",
  "key46": "4uBuiKXmEyycbPPfC2fADr4GneFTZMrs4SiaVtJcca28cqKvGfCfrmB9DMj3XeYM2P34T6RL95dJz4DdnzxfSkSL",
  "key47": "3xe4ZiTnjdhfimkz3zitXptodf2wMd4YwyWAAz3wHnmbnpMMg8bUou5sSjoosoupjP9jdYFemWYueFwytzYuD3bJ"
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
