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
    "2E515pkQrSpiADwBQ5G7CJngRQaYUdF3KWKwHLAScNUBn85Dvr2f9vCE6pp7kKfzN6DVuT9bgRUBRSRumUQu5h9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jnVKyMo1QpRVDBwXq8guJByfc3VEZRnoS4Jriivc2A84y4vMXJTz89emDmpoA6BzRfVA9sfyVECVq2buHc1LtZ",
  "key1": "28xcFc7PpsoMu6nuimdN7yPJqGXQKJBdCrDRHtR9AAKT6JK7D2pgm5Y7NTojj4RnGpV4R8B4QPPaiU6iT4V2rkFw",
  "key2": "3e4U6WvywiJKPUj8Eb93LwPWKTHk3yq389X4SYr35kzKhak7VVEZ9qutUEMQpSwAwf6YGcemoXDpY5QkZAiRmLRN",
  "key3": "4npDm98j6dsYdUdjifPKUVUezEwAa4E6uTGdSDYRN9tFkiK15a9b8AaxRHB8jPK45EEd7jy16pfuE11znM4wx11e",
  "key4": "5d5Vg9GfMPmYiZE4QC8X9YxWARQRsR58HXKwm262tGDjm9b8BXSADGG1LAYj2bfjxMkvNBdgy7k7xrhTixbq1JVQ",
  "key5": "3Fbssa5gUrGZmJLjsQyJBB1gPJaXiKrWj349oMguy8QXTpd6hFcQfAWLBMFQPx7sMQBNZ2mqg1543JEmpNVtcZdo",
  "key6": "5exj4tENzJt7d8cqdS1FdkAu8bkjGpAaQGBEqbtHRsjTmAnNZoUXwAhfZfzz2rb3d5pfHKyEyAyQAEUFZ3D5iky",
  "key7": "mpzNDa3Bm83ACfzdBvL9VrZKvPFDCfo7fvggvFuzBghaajdjCGrk3ikrDcUenbzkQAGgLDKvKmPsrubWeU21SYM",
  "key8": "4FaSng6rXbSwFZEvvsg8brpuSPs2LHftYqSt5ikomEcjcKjncN3BFDHd2xGDZhuzN4hYa8jKuJ8B9Ccf7AADHaop",
  "key9": "2fKis7CymsdeMKXPQmP1bNAvA4NmB1BnacRajizkhZVhceHDzkhz6FLM52WmxK7JXPnG96sJq1UbXKgF3iMGhJaw",
  "key10": "ozWJ5f6Ef251yxqKFZoTLc4pRuGk49TQKSYu81aAzbLdQ4eWcn8ZEiArDQ2P9mNusHXCW6NszVBzFatpGHvgWDQ",
  "key11": "mvrJfVWRQX4ywfYYSHdwa5ujEBJDY4tEZQWer25ZQj5gaX9iarzWoZJfCXcBPuxxyThFthheCp4JG6L1ok4E71Q",
  "key12": "4KaxCJ3HNSTPjpK3Xs1JG1X8Pirbj5EhJBw5rEo2uiErPP8hmyiBVnjPx8FUmrykTA9zMB2GFH8gp4JeTF8i3pMe",
  "key13": "3EeE5gXmDGXZqmQS9QXK8f618jPyskAyhpAZd4bTpGs6dQCXMoyS4e1GisszzncDn9SVdtwk49fgfxKGCuVefXpy",
  "key14": "5isASo3XjpYhatBMtsJLfUCBDDu1uK78h75BK96CV37iUp53i2qGsDGajSc8FiNnYjCtTM5LatN97UdPYGjBFrDP",
  "key15": "4X1GCF1iwkLV1mvQTaMv1FDhsm7TaEDKeVgjdhv7x89vABzdLa4F1XSez6aoKVJidJURFFoRaDeCVFQ2ruXhn4X7",
  "key16": "2vkWphdSdFxio4fnbP2AJ82VcKgmLXbX2Z5tNbqRMMZDgA6uDSL6AJahHZwXuwj3Wr7rR6DCbK6Wj96at2u2VC2y",
  "key17": "4JxF4afP8Je61JsHFP4Mtkt5ZG9szx5BViq9MnKL7ZHJ7aa1WeugsoQZAMtfAQT8KASbzhmZx8zDunhfb6Yk85XZ",
  "key18": "5PE871w1s1DPejArf6pPeJJNjDgdbb62qfabiUeX55XVycQwyyWSQBsqJAy1AHfS4YKzz5X9kTrGwKqypnHfRNBA",
  "key19": "4djrTfPGabMEhDcmPYgT4aChWjJXekLjLnVg2UKuHQJU8SVeJYQC7p9iURxi2dLW2eLwjqhBoTjsKjxxiQpXKWQX",
  "key20": "vdKcBB64obS5rHq9xBTpWpzuFS8nNiBJdc5LR1roc9zDG28Z85yrh8fPHRmSL3RzfzjzS1Yzw5Qw5V3A4b25BWT",
  "key21": "3qB6Wzn62gLjDz6UeAcqgmGk2iocsj1usiGewsedgV7wBQ4R4xHKkSuGxWMuKXhcZ84EhaiKr4WWqmKCVN2Sqzrn",
  "key22": "tXEnRDYt3GufRW188e1vRph8cqEXjFtgxD7syusciio33sdvmJkCak2j7NRnHjWULJxZ8X8Z32A4eMTC1gvsH4H",
  "key23": "2ZiSY9d5aikRMKSnqn3pU5wKS4nnCVd3KQGLE2QTUxxPTH7H79kfjm6KiA3ah5yAvVXhaYnpoVMPZpurvtTx8jpx",
  "key24": "3n9DT4dbjCvqN8Gwaoe9RGirUdNJDSwkPUVhbMgyieAW2f7wPCBjEvDsQjpC1qyXGyrfSUEMw6DouNQyjGiq2ALG",
  "key25": "2AwTfPaRt884xeYKKVjNx1KFpP7aJx2MuGq8siE4VPFABCk2ZNtT2cjHnfN2BHNJ8Ft2gcmwfQSHsM9gVMRizmhY",
  "key26": "1U5BcHCotfaFYAztL21qB5NGEUf5aSGYD5BN2KzirzWzt4HfarVoyAaPSiP6v7PLkcfTyvPWEiASmrw8WHmucEU",
  "key27": "49BSwcsyzvAKjowSWXJsxy2ho3At73pPNdS3mRKHaiPV7vkVDH9vYktU9U6zYFrvMYEq9riAEwEbqDvgNaG7eM9K",
  "key28": "cLcDfuEi9uKjH8vtXu47nS6zmzx8te25S41ouFcMKGGf15w39Uj2tmXtNpndsKKDUt9idHmJpdxuPaEQt1L8hip",
  "key29": "5Yj9KeVjgWKZe4gwpyLcfiTaURvnHrRFmAdshMf6wNjHUHFkrsa7e7wdbb7ioTmPPivg55z9YvoBtQpn7fbY8Uif",
  "key30": "4iNMPQGjWoT1dvtYyNiQRJBHzdPVmcP2Uk18dnJatXnyAZQBgfRnCv9UoX1F3wFvp8xWCUCeaBKmdGFVbbfWbzbH",
  "key31": "59gX9CzvXV63dejyeXQSZbo3DeZ8jNdSNjJxuzE6TE7grHPMv9PuwQdvhz1kK6m84TkVwXKDyBQSe8xwPpfonoZm",
  "key32": "2R7hBJDQhd2PhEGg8jorVhGjqmtai5vJDcHsHPzzuvksYPHcmQX72raR7yBpBtv2vGwuHB77xfBkbfkHCKRhqKdn",
  "key33": "rfvDgvgU9qznuutmgV2r9scMDhD8uk8twmEDmmEMR2xzyVJSuf12TLYAFiMuKMaTuQPEJizzQY9mJ55s8Y1AoKw",
  "key34": "2jgPyRtxqrvppxNeqHRLnPpMmgwKj31FuXyjFqJq61p1ouKFuXmJpQSRDDDCGk28VnUXyKXnRYB5mr7Y1rsFeUbi",
  "key35": "2SHN56dQT5F51Jpk4T1vYzeDtTk77s1FufwSbJGVDyR7QPGQ735yt4xtUxJNw3eFz9iQ45JWtVEr8g7GeqUnb88u",
  "key36": "5HXcMAFHdPP9mw29VE4GfaWv6Za4ov1ct3eazkxaUoxboP77qFvxS5NBf1oojrzQGyc7u3XVBhrH1sqt329bH77n",
  "key37": "EFLxiLZ1Tz5RFuRVsX5jo447TdCLsLLq1nBGvY79YyHoZNpLK9rcVesen8KdWGVhBDJ2L96Exgc8a7PsbffQnq6",
  "key38": "3LULDFXCvZRd8qGRVdGdCMcqAhbE28HaNdzRwoS2BTxtBXTzqfWSQsyNG6e4ernso3wCe3KR2CArGBUBu3oLXXUY"
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
