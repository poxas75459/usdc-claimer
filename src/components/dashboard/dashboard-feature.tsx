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
    "2w2rLWAWnca9fZGfuJTdnLWcgoRaf1WvcdVsHsvFARYt6wZDioUtUdSZ3cQE7YGMMVk5PLpbDFsv1aMSsDmC6fBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41N8b2k5ekprirqNt9YVoCuGhw1mBzFUFqv1cMkyEF2QJoERSH55xm5PKP5orbwPBoQvC6EXZbVHvyVRKzJcvxN4",
  "key1": "4DjvdmQ9AqyTmJyiFrVr43nGUTxWvQ5wBqV4H1CgfuoLrzEJyc8cs2FnNBZs4MPMVWF96C8FJJEHjsFfgtx1JiCq",
  "key2": "5Ynnp6Ddrnd4PPEXAK4LvwCkLvmqBTHxDFQdNdQLJoDL9Puhe8BRLVVHpGE9rrGhoGAKAr2h7id7BFxi3Bpjh2wc",
  "key3": "5akt66CcBNJyeXh78UGfyA3p6dALUJNkzVWRuwnMyuJ5pboQyy1ErUvBMud1BW5hetBs8CEQCp7QEqe5GitMjMFR",
  "key4": "2D5jk6cfRuBHFnYcoQSErgPGLKZNEfYZDL2yG4ay3K1exLeMzJr6kiLnDs63ZCWa9Y3Z2v65KMspRkZiXWovPpUE",
  "key5": "4R1sftFzn8vab5Rmnm4hcWkb7tFjPzYAE6pAYtowSwACoXDi7ciY4DixXu3o5gcFNyjRoBUUNdzr2GVsGSgXQkBQ",
  "key6": "jFhXXT5oCDHeS9FEqCA7GFWFAR4tszexPZiE6bX4JNrWs2FfAosmB2bmh3LgiHVAjVuFLF1UqRepjRaRaCqq3aJ",
  "key7": "CsmuNdBbMpLpCQfcRb84UGC9ycdbGHejnCsRrdf3XCLAd6rkp61VaGy6YxC4XADay8H4LWvZpWerfVFKcf3fgb1",
  "key8": "XWaCRGfLgf24KLkFSCMaN2Rh9AMP2HccaAtzGfHW3B5MmscjnbiiMvPh567cM1Zs4qocgQLfZ4ScYRCVMgQzzr7",
  "key9": "pd8FL3WNp8VGjhwJEa5rYWW9f7uroEJwMssfjLaB759CDaRwibYkM1SK4i2uj2HWvh5U35q252KCbuAvPg1kXkT",
  "key10": "MAeRHfoBuHwaKG4Ak6fNUT8iXum9QfUxmhH3qivHjn9wgvH7cdfXP3wnL29beKZmyWw8tzaJuB8MVgqX1PU8rcf",
  "key11": "f4LGjfeCyS8BrEh9eiJh3GSqCyU9DT8Xv2ZD6sYQ71BbYX31EgEgSEcdkRYTKF9Gy2wYNiBWxMxK1xpZMp9xgQX",
  "key12": "P21dKn37X1GtNvjHAcFthxxjiobv5Xc78wvRw8HbRchGGf7fEdwNPRy9QgjHHnvbDAsNo92CrbZFWnKSaTyxqYH",
  "key13": "4HFW5yWz16JWLkgWJr7CgmPmmFKfzq18UWJg8YaiACENKVaqXTy6h3oogj9EqkCarvSUUwoPAyqroze9bCk38Hpr",
  "key14": "2Hy3WDgEgbBznBJWh1MchnnNrNqAdp99RV1a5xeM7S77TALhxgzZ25BnPnWvd2Hmrkaat3JntbTqcwoiB7nShWqn",
  "key15": "fZp5FzCYwmodgS94cmkNUQX9oY75FSUTZnXuUVoFx2DLSXWAbikQrfmoSP4cHW9K3wsZU2TiGViHM6ZjJ7ifwKy",
  "key16": "5rJ9RYkyfogoyyhV6VYvh9E8TpFFZGP8mfFayWcVoi3sAR39cYK5AC6g4FEwzbPFYkzhfyJSsqvmrZjJSEfNL3He",
  "key17": "czJn8bZM1qezZiEyBLDM6LLVeNQDdytPq7EnuFS6VFSbf5NbmyUFaVNhqYRK3Foq87vgg8ZgwEmUu6GrMVRhLeL",
  "key18": "2RQh4hswrneLt2194Ut2AoUQcZy1KBok54hZG6A67u1dPX7XikiH8qA47PEu7p9jqj8PU6dYMhoUbT9gkwT6YEDb",
  "key19": "D6y8dBcLh7Xv9vg8Eo3oTbknwkFZDnXUWodB38SBGCjT1Y5NevN4Jh98A787xoL13B79LrQATum5XW9FvcmmoZV",
  "key20": "52BWLmCoqpdxAWjmEbvcqydiZ9Rz2Dd2oWViMXgzmnE2qy1k4m3trhkH3ETxCR3EmCA3mNC8oAfzYiJ1dzZUPXj",
  "key21": "4diA7KR7hrgpvKMYemz5ngp26NsMjEFjR2wYGXbuvxz6aH2ZPEhYzqEhyqpJv9D2xAhQnuQTM8yQViutfKWtuEqv",
  "key22": "5aqKcVrkVA7w9A1kqZZpWybmN4EjmMpFAVtuYhJZRMa527ciPovXkeEY78Cjjw22cEzut8aamPMe1MdBU3URghto",
  "key23": "2dnMh9ke25MXZpvcesfQiSbQDHf8EgozPRK92uj5wttEAcojGyT7kdwBJhHmPci3cc5VAro44jRzKa7J8DnZQkCE",
  "key24": "2QJ9L3d5Eg6iXhTZ9Ms2Vzq3b6ReRsFZjN7KoNacepyADb9DwgtjdtMCdACwBc1MyqF9VFv5osF7zUrdKZ9JCjvN",
  "key25": "KMoi9jx1ABvspNgcaPddG3kQzYS5f69dkUySdjGAXj4MXE15U7hzyWubS3dRYv1zo4hyzy6KRv6iD3gvudbyUoF",
  "key26": "3pJEzjVkiD5oZXEaMfULRdW5GLvG5XwNq7is4YpZsT3ZdpmCqWCVX63C9K1JEyrw2so5PboHzP8Yi8ayqi3R9QAU",
  "key27": "Np47jE5iEfr15eTxJtCD6MZcFhmtach334o6osrVDXz9XWVuaBjbgAFpG8kAZv8bz2SEvnRnGe2VELXPb4yNANa",
  "key28": "2gxzYZAhJURmorAcWr2ueRFFkkWg8eLxXRdqra6ADgTSnHXyyCdfWq2FzRFuQgPxC4QN4b7jFk71CyKUrUEHRamL",
  "key29": "4xXE1t3P9Xc6kFXCAYfhPQp9sdhjeB6M9QxaHvCWjt1RAcYDWyx8enxdzTe8BQCoMb9TH46uBCY3mCWCRMY7docw",
  "key30": "RxGccezdWwzuJChuwi3toNmtqY5kropSoTzKHfLZyRzcHCzgBb1iCSuzpanoEPPuu8GJ49KFWLLbHMfxTL74oyb",
  "key31": "3thRUpYxGnCPxQytjBKGeE4nLQBrJdZJhx84fnLiMzAgyauoVt3rjiDsXEigYkhFWrw1Luc7DTHes7bMj6eD8hLW",
  "key32": "3YPJgaLkYYHum5YAMzGRPofmjw8TGfUBnYq4EmZh17m8gWepqHtdaGpRuhLsfcG3KuEjgbtYMHoP8MqUc4Ftqy46",
  "key33": "2zX3x5sXPE5r5Q2dvSALpq8HKh7ZpWiZgYf7PCxTijnwC9usEzMA4evEURLfK88oNgKfnjqokSB3xwUEBHeoZN8V",
  "key34": "8NVtFatePT2CbAasjsAs1vdUYhkGqGMyJcBuEcGyCfKsX8jqNtz1u4VW8ujUTvwp3BP6DgmcaZerLWGFSfy8LUF",
  "key35": "4jCSwrSFSaZYy73GaGBvC9snXUJCiZ4Fwe26jgDW9WLfUta8DsxADuJLiynBXsNu3nQHWUBTK2nq2mVXcouRfu7L",
  "key36": "5s7mCXNntsmc24mVRUukzr2XDAcBuojmbhS1LF7W1STdZrCVtExsCxk5KGvG9bmwW5hXAe5R2kX99mZenwFoFwBK"
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
