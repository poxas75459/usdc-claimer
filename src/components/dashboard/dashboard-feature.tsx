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
    "4xdASbxACemN9wTsnxyaHLZqV8mjRDkd4AaBLdE8M7LkgfDmuiqYwsEj97CcxCyf8KhNv3Y7Mhxo28Hdgxc7rUuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "656KCErbNWjma5Cax8xaewUXjz3F6EbR6bY6y4XJxmj6o6cfvUqo6NUK5rXC6Jmm84FU5KFNSBXMa9JDyv6iounj",
  "key1": "5yjbn3cZ16bxKUPaXTHWudQNzcDGg6J8yAcGJVt4QUpT6JVHTXdQ59KSiiVcFYyZyNFoAo71SQZTafpMBAksARdo",
  "key2": "3RnEimcJTJ5XTpVicWr2fGUr5Q89ZfXRfgTxySJhMifozfpYDzBrfnqvddA1nbDs47CNpVhT9xz54TPrDuE8qw9Q",
  "key3": "3kD2Z1GkB64xZXVroY2wsaeR1vNQdyx6FNG3vpxVW2x8SyrSYRxo2Sd6F1HLoJsNZsa1qH1PdgV5uDca662LtQx",
  "key4": "u5z7VSbiiy8E2AfySrxieoJQ738Xnq6axXyDfti545w7hxbUJz5CfdfifwjVynCuYF1CVF71YgHJmF58jhmrTTm",
  "key5": "2ramKS83RSub3A9ENsHnbz6s6fkSisXToW5qx72siGzrYDubmMgjDJTjKDnF8hEoweYU6AsXiPZyM1YJDqFB1qzU",
  "key6": "3CsZVwEfbG72Qh73aGn3K8rNBUQnBWTEE7xvodzE4J5rnTg8meDyRPu56H8eCpYmSNqwFupKQ7K3anBKNUqgAdYP",
  "key7": "2CAGLc1GSEsxVrsNfm22nJkaC9ReMqwQAFaEYutXX8csTMrRbvexzjEG1fD4awMZvj6ZcpZuG5ugQ8YbzP1QteZH",
  "key8": "3eQ7rmCeQqaE21rRrhLGLMzraXhuP6v8iC6tRuZAt6bkdu5wa5vMXRgDBbDVXYDzgo77S1Ju2nSfPiEkg8GJXGoe",
  "key9": "4JSrH4B7Tfy8n8S5nDD1Huje7rVbG1M19i3okS2wE9sw8fietjN2Tn92FSy2uRGww8iCd1mr7kkWJLKk9KwKg6X1",
  "key10": "2ATgFkLUeSHRQLi1BwCGnEcASjQN4pUmPwHxvdwD6wC3TJxcNTLTiuKXEoH1PMsiYdVPgijSc4LSnQCe4X97ixjv",
  "key11": "4BPJNpSSWz4CZPs6whzFnpMCFBM1oeT12hRydDy7rtUy4528VW7VzEBmaQbE87UcqppqfGnfTMCF3h9doRqRfXvd",
  "key12": "3LHY4iTWJEeqYnrxHugkh6Bb39SkqUw8PfNBWA2xbbgL4D6vQDXJJeExWomujeigwadKPr9Dvap1tRYKN6q3WvwG",
  "key13": "5rxexa6WsztcuZzq1VJZb3Fznt4ShmuiaaP9kDrBaE68V9CNnKjQMcViVSKaxePiWyAQ3sbR2DDZjUw2yD3RbYiu",
  "key14": "2RFnJtQdkymSkDyGtakkjvMTdMQduFAPe2B9rR5St4tpTUYHFEQT7jwukBuEDZeFT86bT1U7Xey1ChGzSHiXjwko",
  "key15": "2CaHaMakKpF4oqsUR88BHC6EA6eBHuPpvvLGnvv6Xvc68s3XGka5JDEdK1M1TapLwmHyPuGp2prF2HVMuCowCK4o",
  "key16": "Jkgtr5hxDq7T39rHcwDGbpq4N9ExvBLGFQZGchphMRo7uLNZRxYDaeTRgkv73YRm4tDxPHYNTLAKbVmkMfjUh9D",
  "key17": "5EPYbgUHuh6pY5gkDMB6FqEoMNYdo9j2gVtYvvxAAUmsf7iUYmYFF1H5c5FsBzmjKs17myPm6dPyeJFAL97eevyf",
  "key18": "5XVkyneCfLQUEhvyZLeT93FmzHVsRhDZhATLwdZ7sd8mgR3zfCjjRaUtSftYmod9hyi72e5j888TraosTzDuWz4F",
  "key19": "2ZvijETWVRbDfH75vAmVADQrG1b3418TJ67Lac4f7JHyauSALtZEPTeuJjqfyeUwHfmUAgvRZroReg5rFd5pX3Lp",
  "key20": "BpGxCXzCFyGCzT2KPPichyoz22Mv6ufGi4DidUsh9dHdXHrXNUZcywJ7CSEZNRM35yUGVLAJfzDbbj1Umceebau",
  "key21": "3JxSM9YdUkiiUrwW6YtJLGy38wGznK2763e29EPypxoZWPRVNvppSCy2MZiMqeZ8fnQ3xMwfSosByp3sSLKekMXr",
  "key22": "232VTGCZRsa7zVgak3uHss1WAVj7RfbMFmYTfenXdKVd6juEHSbknzNBriX86ya74Rx3UpZzGrXbC8o5igEqPQcJ",
  "key23": "4a1yBEFECt5c71HzeZyGKHFzC1DBthrVXVReT8iQ6zLqV63QcorPx76zz11Tw8sL3xh8pV2AHwaCFeRkUc4A3KUZ",
  "key24": "5Y17kz5mVv62EAZ7EG1MbdvT6yPGzgUyiayB7XxxvWcBiPQMDPNpz3s949NudfeSGBum82Ye8scckLFtE4BsNb1D",
  "key25": "cybehX3BaHn3VR5PMRyCT7djYoNpsVjHdzNCFEXS4PGa6khSKQP7iR8dp5Yd8Hd74yReFiCxHhFZiUCb1iyy9At",
  "key26": "2bcVed8sZ3PGqrprwSA7FvDBGZq9ChfCWNAU1px5QeUoMDyo4iLAgfQ33CZ8whDTdowBAEcq2LYYGSsgG3soA4EW",
  "key27": "2zDxW43JWVfmDgLd9pQFdSMHseUt3mbv4mNP4LfRqvoMuizSS2SSTHsBCG7RWgq2EaSRPpZwGHKEVh12bPGDoYCH",
  "key28": "w35HGDjQDdG9Y7hczAJakZwzJntQTTzWw3Fk17fGiE6qv3CHvVX6218VckM2zBR6zw2r5pBETsisakp2P8rdwDm",
  "key29": "4Qy2gTYre1aaBT11MbttSA1t5ia52PsZLePGqZHWkSNMfrPZfoG4Kk75aq25nBD41iEijm2h4b3tcKnJCYNF6Av4",
  "key30": "4LtXA1eavSxFYEHjuEoe6tqvcSU5fEog22jVN7XDLrRx4inTZzk8GU6ZzpiBC58qQegyQs1kMcGBBSUzoZCGdt8B",
  "key31": "YRLaYbNiDrXPKPdvAGNbd7PHxcSMniqob1tXMz8srzYVMWZszzSSKDJFwsUu538urSpZZfpfSBr6Fihc7tdAW8E",
  "key32": "5gFN7kg3LVKiS6f4JqPvQ3Kc482TAJudJM3F3D5fBw2SfDT2XnVUM9Lttcr1Hf6sUqnCVePi6U5h7p5K7D2TiYGP",
  "key33": "3VPdTyb9k9gTirPSAi4HSqo675gNJ6iLp4fQVjuCwpFscUdS8JKeEuC4PMcNmk6fVNBakHLGvKyzQEjzfieCifQ5",
  "key34": "53SRmw7CKr6VZDefKpJMpyHfgDXS1tikR59Qquzmf4DHFPc92JTJBkZt7LPhmX23NWPnQmqvp59ZDMjqh268ZJ2y",
  "key35": "5atRtAKtbp8VpghP7ZHxygRgZS1NHJ7cjXeYivEpNNi17Bhgf45ahrv4C1erFD1SqZid7RV9CPh2yvc1DrwKDAaP",
  "key36": "bRyCS88AGDzEEhvcjWDZ1nEsYquiTmskRaMod9yVPaj2RYfAJzMm8XMKjDkt3C8Vo9tT1Rjk3UEBtV6KWhq92vQ",
  "key37": "2THjji9YVaKPM5FEExDzzbyDqLHNWR1Zh8bu49qzRqkcz7rrEC2ukySXtSB9ZbNfVMAF9fEoYa5j9rW9nZgRZm27",
  "key38": "3w8CvHRarBhaNaJ69g7aK6nAV2hXZyEvTDphaDQoD9L1NjXQRhr4idUgKNetNBekELzoYWkPLuFQFof5DaFkuyoT",
  "key39": "3WvMPDg1fF7RJRcq7AFZ8sEXk1i6dXuQjpDgodMNKiYM8pMyALQovyUT9TauYCBpZjv3LxwiopruHU39gCQNc7Fp",
  "key40": "4bDSAcbUuQAY7yEdc5xZPJguFq81JjBRPi4V8xFCZCwSwEmFp7NWGqe17KuwDnowoG5EWLSqXQohMG6chHtogpnn",
  "key41": "2BCej1F1U14raSJKgwtS1zy4trv2yXWYaFwSp6aHT5CQ58c65qz7JW1kxwuwxVVZF7GYgUPLitqPGmfRo1VmUumb"
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
