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
    "GmdSYsdm3getykFwj5cgqSMXZLWKZpRoF7jGgQFhuKTyMfnd5cm6tqZUctRbUxTM3L9g68RVcxR2NyCybETHG71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAjNKjsFjjV6KisuZCinvHiF5fins6ZV21GyoxdBBGxRRMwbwzBmoHRCreqR6h8UxUvsc66i13WV8cz5K3dADKB",
  "key1": "2QWcRctyN1d3Wfqty2eQir4qMSyG1k8wniNuRTxudjKgaYYVZFfUtTQ5ZAzBYqGEGPJxtSVCB7bULDZ4vX6QsDub",
  "key2": "223E3r4XGeQVRg4HanFjMkX2TcSMNE3yooXkSLaEfb1h5RBpcsGzaZXHajedjdbpaJAG2vVkUNVX59YvAm3nxBWR",
  "key3": "4YCUaWWeLsbrm6QbEvQQhRGFADsgCpNF1iDupuTamC43JnJPKg1MFT6bAv6xCWzjxnyfkSP89Kzf9hxwH3FqoKSN",
  "key4": "2LRaVFQfYHPm4vhjTVjUF6qituEgxYxFhk2sxUDXyKVECdoUeRgCW325jmbxWj6LptyFJWYWggRRydfo4jbbZtxw",
  "key5": "kn1mqUgFy7CuTF5QJTpWeroof4RewQ3hveqCKMr5i4QoML4DLRf15aHboT5uBDoRCbWgspBvSUqRwBr9Jciw2Dm",
  "key6": "5MepgKpxHwYgWHrAWsu83X8ysPL9pwx8nzoL71jBa1kGRadhd11CtqTK9SF2w5ybsw7h7XbHXkTvwdJoTE7VMWEG",
  "key7": "73Rdk6SymHNop2ppjYSKAvMhojRmWe5A111UxR9QJFxqUM6tEeEBXj1nytiwwT7d8LMrG7nf9B31mQeSQ3yinaZ",
  "key8": "4CApUJm6t7gxAtUfTfsXfqU8Mqh13mUEYcYq9Pk5M5S6gwhiPZ4kD9ETs7kps3Wip2igrTQ3ic1svdUQNiNUfNGX",
  "key9": "aQ4zrJLuW1DdYPvugrjgh7hvbo5LhpWu5x6otUzuwMpn8zh4SSEG6XkNZY9AvhN4eZbrMHnZNrr4rdRVMrXv4zj",
  "key10": "5hYPPGq4HXqbQ3kdZqJdR2uuLy8hZK9YJ256wTjwWm3T86x21LSMVuZh4VfVgPjopn49bcDY8byesnrR3sU754ZW",
  "key11": "4xMXUAXVUGD23j4zySVajCwvEkMuTwqaoG6qo2Y3dPxMeMZsKXDXBZXbFVUfp5PVrzN1GSjXbTGRgCzJ1GjphLLs",
  "key12": "4YChmKCYj2KaQccE782cy1pEfTxttNfwCiWRw85jD4dbtFNinx4aBn94iPBUs2WcdWhbxV6kV4YzArL3dyUVCgRT",
  "key13": "2TJXFM8WX6RoYQwd2zPULgtrDQP3dUC8VdYq9scwzLuAMhueYPo6LPPG75PQ2Vmh8g9xQx9ucfdnxzH9m8iPPSq5",
  "key14": "3WN7HktxeEWuDaC9pSdiSEKUiPSFaAcKtPxkhMHTPkc8zjCrhCcaT2fASR4tyMnhutWGKyY2N4zm6ovFLiqeFtDy",
  "key15": "5s3MKYaGWP93nu6kUSkxY5zKW8CXFNz2SusS8CUvKBEHCXFnPATcAaHvH9NBy5C28AsyY1eFHi8AAWEhEKxKG1fP",
  "key16": "2U4BCJkehg1zrUGVReeqLNF4BYR3WWGgc1sUN4P1YheEMxoNBUjX6Aqt7UzCeoVD1p35e3DFfUCcswixLXJnuD69",
  "key17": "3YM6f8uaaktP6XK6pvdudvzQnqJo4Yyson2DkLwSHuwJqth5up4VuMtesyMkzchdwqBCJPtiyWrYxxLHvV2PETXY",
  "key18": "S44wnZj6z7Eg6GzoUEbyppVoLAaEY1VSbnxuCo13SQCFL2p7baykXugPMjWFd7qsgGEMHkay6uEW2cZ73a5qyJc",
  "key19": "2T2XymFWVK8mpc7KhEiDmFiqRdtFzXbXmeaiHgzyrLsfxRjXGcPHQQyMP1qgRQEvvMMevi6K91SuVC7H7Y9W4mX",
  "key20": "J3GmKgudYUEmRboTq5vgDHw3EriQqDU24yGGFtmMj3SCnuf3oapVV4W8dbhwNymexgCnLcHYQxLCe37fWY5xSjL",
  "key21": "sUA6w5dQpEvSQYxRAxqresuyU5npbm2K1dUyRwmbWnUVftKDTxdnp49m47FWa7Sdk9FFmxooR9yxituoGBpCm5Y",
  "key22": "4Y2LHJSZNgmBfuFszeUJNpp1b31BXe5KEgBTTkam3ZLEK5DQ6V5eGeem3MPH7GvpnKghDycR3FJSUAdeeBEHjY9h",
  "key23": "5ekNJyWQtE2352QQ91HMJT2ZyykKSDc4SZBGVcsi8rCHrVJpWdnG9S9Chwn5XWwmHFSqbqHxUm8PB2jYpWgsFySy",
  "key24": "2KWJouzD1Q2ctNrmKvuN9ajfCaereRwUv8m8BX6JSz5BqMFPem7vcw4Nq4rzynaceqHKQyqkiCEEJiEoBu9JSAmn",
  "key25": "5P1wujsJwGF9vA4NP2XLVVsJBKjF6YpV5x1d62NU58DnQTvUFgvnrWT7PJw49KqUHCUFKYRYMECNBaNBP2ExHuHK",
  "key26": "4sRu2xk72FyhrrkfwTRSqAKFRn2UCzmzSfWnF9pYhdc4pk7RYtVSvtJG3E6ZsrZNaMnhXaZeHepwcG2s9gChD8YX",
  "key27": "3cTa58GtUvZMXkrNXqJES5tFf3vWGBirsRriJb1de28mrmJRkmd6XsedzmtuHRAhqLEgM94p7DNjfU4doJSMmeh6",
  "key28": "52rvTTdZeGdaw5pzNXxSJtZQAF4S94xELfXjqUXCpxT2DWA8YGjMxmJmAnFnZUnLXCTA8cirgrHpNgyPPmwCYjQy",
  "key29": "5utiRZuiU2B59UTS5a2aFYLTpebjDzXK8t4PuoMPdxHotAGVkdPUd1BqJV8F57xpUnawBT3CtJK6QX2DMCUssokw",
  "key30": "4Z1HPYDP62dJoe5YQfv9s7piswid6BaVnpQVzHxkPnCQsMmgH96b9nkZbHVga7cjRJEDYA73YJC3DkB2zroZsQR2",
  "key31": "5cDbFFyMjCNJvV5hFt5mcQXf1XvJUMG9tFrcSh4B2EYvLpokGmx1VWxKLtwjQARyNynWXmBLcQ7WD7yoqsuCs1Mr",
  "key32": "3yo6nDVziNxHJZgoz6Dj6FjQCKJcKJTsJQwzWr6CbiXoqTmdxrtzhgYDJ8NRFWBihQvtw9TnZgC9zmcJSHJ6H4yW",
  "key33": "3XWBBBZkyGXW1LCgL6W2zyv3cugDX167WqYgg4sAchgwws6ybcXxDq9kxoQDii6zihUEMsmG745d2b4ESp7W2nQe",
  "key34": "2ynXGWQPRHAZb6Bs3k99ksrrMiBg9aq74DUiMsb2TETHikrzqm3hiGwx3YNNzzjuBtWVY8fGgAVxN7VWcNWaZ8ro",
  "key35": "67Sue73VyHy7wwo6pd9gm1abaRtQqXrdqtXyQNTb1PZvUWEBCpWeWUpNGEXH5wPseMTgUtMsm2bbW4ZzSjsopccE",
  "key36": "xQv8s2u95P1eevu4TAghQm2mZt7qRTmEgt8q4SoRsFvzndU6iij1rKyBbZUpv6GMZz28oVo9o6Vk7ZPjg3tfrVr",
  "key37": "3NqZr23CbEytEL8e34HE3fQTRjPy19geAakPVSeQKabAtZoxwb8z96gTFikEsZZiqTooF83rJr2MQBfFMbPoND1m",
  "key38": "47a9VfoE2G3C79L9Pcg75TibiLtTUKi26EQErC6K98U5FXS8fqCmNYM12MkGRCMXWpDbB9cbDAnPguEJwzbUmWW",
  "key39": "3pRS2F5YnJkYhrfTudEnbko1tcPNsoEBfgsg7vk8wcPN6vNuLQ1otoTsnP4FfiCVkgZ8sz3yN1qV9Tk3uLLNcfCr",
  "key40": "5FPb67c1wWSshk7C6shZeU73Z1C2dUpspfUfPSrWG8vvms9vj3DA57Txuby2gnkxdsGugs1h8ogiKHaoZPcymPHQ",
  "key41": "2BuXpkwW9mMd3f7PVyrbzZAdyAJHzpxPhxuqjVf49Y5Si8vVALY7bUnxWKWepA5GEQ3FvDosuoJK3pSsJgQc3ZZJ",
  "key42": "3mNiD4BaLat1PZEWBGvLGUojt5CFwvGwcKkn5yobRDJdRJEZ9JgbBRv2cqUWXwFh4ckfkjcv82RCtxxFw1vsCnow"
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
