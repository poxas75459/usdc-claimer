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
    "5nVDfvkeMA9dsubkvzM296LWxafSNr3mUVNzQEenFr8KqqLueqGQS7mpErLR7cLfkmmWvvHBNwXqGJFfNr7CwvgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRkrZCKbf8jL2r15nsBmDsfQoWV2uBvzXTvj6J815Ssa3yuEmDK358SQrf4ccdNzEntLPYKAfP2wB354U1y7yMB",
  "key1": "2FfiF1mqWAzSSHV8rc9MoFWj1BBCEFTntjk3ioVMcBo72C5vb4dkS1x1rkeLnbJbigLwd55nASTDuCXumMTMGC1W",
  "key2": "5WesyLzA4enqffqiG8Dn6eCaEzqjMcD26iYLxZGf8DkkLWhWxZseH5tupR7vwxQwG3SRhn1WHZqXsjpGTNGodiH6",
  "key3": "37qsf9eQUof8Sf39FXfxRkQzbBvFpA4tfFVn3Dhx1Q48qW1Do5HEhzkoetZfm8NaZwCM2Wz8gnawmmFw7CJd33d3",
  "key4": "NL4JrFuh91T8ba36yzJUh8F1qHrd5waMskMjdRqAPWgLpsipnVmorUwPyABjCbuiauE1ZL1oZDR2B51DmWkEAX4",
  "key5": "3Hpv9159TLf5EMAW6nJkwUteCJ9Z62bgu7P728E2DwRXkPasLqkopPeqkhEu5Q7VmwWFGo4BNYtnnz24cftQDLtU",
  "key6": "5ybScce3N1HuWjHcusP7Mo4Wdo2MYSgmoXnHfVqvdGFcoM5BPqAmUzaxzMBwdgG9yuPVbX1dyTmqU18UStBYsMkD",
  "key7": "5pULEvsvMG8wEcugK6y2ghK1daL4cUgHYwfqAkCaGjD7JVjQgRr2KxhWCz1zGX9aMMXqw3RBpHpiTr2E2scqy8cT",
  "key8": "5tYsWTxYfa4pcDZSGuc1dvGGHBsyhpe8K3uScUBFCkNCAhXKJiwfMaQ8huckMyjDTTrbs3KGkmRWUEN7E2kQ2JER",
  "key9": "4Xw2pAeRuTBLwTBXTFC1vtA3CT9xhvxsSxutw6V8uHeVUPSg7LG4c9tEecyNjHZUrdL1oPtjdURDYkXWuHzmfncq",
  "key10": "2tEeT6HDDfKSwaC9ydfq1RXGZoCcK3iXhGFpGKPdfj1oKXCfkJBfCQyoQoQFp3RC54Fbwpoi9rgpbQioqVHZNhWC",
  "key11": "41eVtxvqgvXY5H6kfdtk1Fdkb5TtiUnuhWajRvgAHTchPM5BQcEUbSFgtFVR4GmiTBxJMr7bHUJ5YGUecJhAKb77",
  "key12": "4JvWRYs4891wyEUQ7MJfohEdgMQDfejwVQJZcvgiVdz1pcd9KaewTNSStbEwgpkvMgv2kNSp2XyaupahDDxuYVdQ",
  "key13": "3nzStmHxXG9env1sQS7uCu4tzzm2XJDDyzdKjioTpENX8poCiaZYm4q7YmwL7avQnYVXyewyqmFuDT6HcFRMbxqY",
  "key14": "5heYSKxH59BJYNYMogmYduEWXAYp9Mdz44wrxUfFsKQD2xVwVU4mcSjtJrwsPdrVm4qkuxb93KfbigP4fK8uNCPU",
  "key15": "5kw845iir4xjRWHtuJ17BjGjhmf8KvNeXPCGntrY52ScWXo8TpiHLcxGEwwmaqH5HHPy4XrBSCSnFsYfmQrG1o5X",
  "key16": "2ZNR7TC91zqAk1nMPJoyxcH7C5WVd7rzQfhk79Kx6GCT863UrTtSougWzmeTFozdxppBbtz3bGNwDJMU1Z6unWqs",
  "key17": "66GgkS2bLQNJTu1UTpfa6UaSkwaA8hRjmH3bM21AGnEiSY6uoNzHSG49gnu9zRUB6xz2s5R31bifdgc811CZWm3L",
  "key18": "4WbkxfSj9QajyN4KX5zqwsGoTN6LFN42U6TbQ9NbT8qFYQvvAEW7VQGe8NqUJkRnytpBJdhAjf3AxzWB9FzJ1k4n",
  "key19": "2wgCGAbu2jjqscjaAX4NsxYbQKHP2kWiXPDtW2hD58pZhNcHni1XjsMVXco7QS7asCmgKaR6gVKEMKMgZv2amRa4",
  "key20": "3PWGUzULYeQbzGjRhrE6uGdmY33GeGwqJqgxRvmLeQcTncqfWv18j3V3Wdt9dEEHKUbGb4yUNhyzMmYqXEDsQdvy",
  "key21": "4nsUHDfPadRNymKDWfVe9bgSvP3wTBQXpqsxpreoYUxWNKaAdzpuyfrb9u6fXp2C1negK83F9GhWaG7YmQCsSdV3",
  "key22": "wZqHpHa8ohwXnnPWRF6wb9YS89GSnp1HydocmSgaFNcFnMDd8vuXkZRTbUQwikycdGy1nvLDDmGdy5jTs7ALo8J",
  "key23": "2vd7ohyp6QBfTeadKiLcXJSdab2Jqt7yRcYEJ8tPEquvZqpWCFarVMmaxcGwBQ75cVPbg6mcaRy4QAcZ7R3QFA2R",
  "key24": "bu5zCVqJTQjrMvThczBaA4yM8fAEZjnywpgZH3Tz8xecTxiyGgX9CJ4JUKQT3Fr9HeHcyegEEDYkCpXEwvDdUhy",
  "key25": "4G621JQSbtcAtnFn5jpoFp9RqsBggrH5tnZyoBw2sA5DzJisoYAgwUM6X9EmuCR66NDhvZ22qjd3E5zUmALdxBuv",
  "key26": "3iRqwGPGscq42sdsTuTFx7JrYrbXMeGqMRJxdSPRk5tamx2Rvwv14JzfnRB8nZ7qizvVnbA1Crg1x5A382UiDpL9",
  "key27": "5QbFnAFow773Z4Ez5UjCe7thY1kQwoUZ6beAtu9CS1USTPVbX83qS4cVmSJkNQppRKUXXyXLncAYv6ub7TEY8JPk",
  "key28": "XedK3t14ZtE7GPGyLYLAUcxYUhqp2vxN1iYyQoGCWX5ehfcSSo2QzMW18mDP1akzqbyB4S6qEn2uWuo3Rkw2ENo",
  "key29": "2qUtTe5ad4HiQ5ShWd7gJ8oeMExqyvrJDttr4M1GG1hdR275NskHuhMhaZfw6ZpFfYz8MzPWbGzVBLGGNt7isbs",
  "key30": "sZcHyVU4687DwnURmS51JkNqXkwgc7nj5vZCTZwCmugCGDWh21qmgT3zbS9RxSeo5JnmxBhCZycunKsZKNf8q8x",
  "key31": "3yUNEdqYaYHYWYcZ6AXEuYTvvA8tRWRiVHdndmTRrJa7XcXQ1VFPN93Dw83PfbNp1U9b3FTgn5jMHGqekMvaNWMc",
  "key32": "3JDmvNpWtx2DpJu2eL5Jj3cQstKh5GiCXCbtBqVo3aVT97pCQn2ojmi7c85VPRhZGoNAqBgjBqXuvH69rwVQZhdg",
  "key33": "YqQ2xrtxmTN67qca2i7AozhmmPKeWKA7oB18W5R8GiGC4Sp8NuK59jUbRjm9Sz4XQSR7ogz45audcuQjj3fuq7z",
  "key34": "2KwnfVXPboKFiy3TBMeVNoJumkjvRqd4tSjJgR8DZWjL1ZTxhknTNjKvsxK33r2FhDMgTotqGco74Y2irk6pSyQw",
  "key35": "2Y43MfKjZhWczH9UCBREEVRmEhhQsjov417BL84yGNq5VLjq2UUGjKmtoJ8ZhKSCNMxocP1qz5Zw7rjx3zkzPjAp",
  "key36": "3EEGab5FdU9rMJBAAZwbvHdKaQ2MD7ZqZHkxxDVnHGVqXNkqfLGs2JzfyxpxpFtQg6Z2jybR84Lawztw6ZEnbXPo",
  "key37": "5zvHt9CLv8aGFUHUnRDuvryWxLVz7FNu3NTuxj6RJwD8R3H2o5kd9pXC92rJNQgpH6ZbpKUFZ24SneL2AHdYB9Pf",
  "key38": "4YzDGSRJTxvUzSSwQfMkMtCifMzqWcZjUEATjp6TPUYUZRTsDZrb3WMRCp8JUPSnx6b458MQ5S7t6UfN7hAfCv9L"
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
