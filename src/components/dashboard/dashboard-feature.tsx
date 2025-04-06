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
    "31K8hnH7zgMwuQ1qXorddjYSFf5qRYdtE2AXthmSUBtmKx3CKZbzvpxRPoemYHeqaiWc86oa6WAxLEVM2xPsPHFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55gzFCUH8g5J6tJiQNMWhD26kegqdgnn9dnRfMq3DR5scaaedHFh3NzbBWZTBNvTuDHxfKjbTaZHdZQPQRTarN3R",
  "key1": "4gg4RgXLxaP5Hg6W2ryEiJJmaR1cwL75NdwpC3YEHtFvEEefsz7qx6ZUS6N9dbTGgnUMrHMdR9AvjVQG6MFkNVNH",
  "key2": "4HmrUwJaDMhVY9f9uRaANoUhUefjix2n8diWiFuL86yGMb4nEVAEF5ZUUeoKNmtTmPxRjqNobyguyiinqNwrKYaf",
  "key3": "5Rp1sWtAFG5GwVVkv4skxiP3ERLXyWRAivE64trUBDuVN4yFF3kCCg1eezsmw1gKdMFpfYwfgQJpvcbvZRjRi5J5",
  "key4": "biwAqAQRcmMtmWhktYMaghu9sejwHV6mCtZdXTe3GazSeenY1bYf7QaKwtx3P1bHAxTqRiouAFw6drfrbcsLLhQ",
  "key5": "2P5H4d5KkyoJGFhbEjD7WQPtq9zXGD8RGW3cWAECp6Hporp8JpGJd3FRpXQp5KLpEXV46rd8cgVBMAJZc64hnY97",
  "key6": "5pxTxzDaSbDLcbDC7aQUMcEgoPLyfMBDLvP2hTkBMg8m1R67cb1BgnYoJyj397dYKkZaiNtSgbVzjSU1P15kGQCU",
  "key7": "67Dbc9LupdhJRdeomTtwTCyWatRcJRyLYD3jDHVnQPFN4wHrNzc6YVGNF1MWgjeRjPmzLiCZP6B5R9QggpkH5Biw",
  "key8": "n12siX2qpZJSxvFXv9W5ezqh4hXrGK8KymnwkG7aPLBv7dMpJnN4wdyyQir2dUDpXXK2JgxHZemXWk9teg5k1rF",
  "key9": "2LqE1Ytq5UBuDW96LftXyvmQ5NFiGvxMxWjM4hhzkJmwA9NceNniuDL3joFRC6AcavVGJQk2Hqidz68vHMYn92c6",
  "key10": "5kCXUidSWEzLTX87tjiT8jVAcx2M5h4At1TQ2LxYVXktqWe2AHEUfvA5Ht31yQ9GGDZhtdaqnQ3MW5v4z8Rv9k1M",
  "key11": "4aWZ8d2bzWU4qx5A9knbG3iov7fpMEN589bnQeoV4QhtmWkjW5gYyEA8GKQ5zSCrVDYTNPitnWf8FasvPzMq8e7y",
  "key12": "3YewVESvSDz8Smu5f7aXxBpSt89wM8EyoPwD7CBwhNKfuqX9MDSrwab7ZxudX9mpLGoLkqRNxCLmkLtxDyMVaTM8",
  "key13": "4BzivThya4Jp2YMtV89MDkhAecPFZusCfiQnhSPzhM3Z4DfhQnTyHznS6brYZUk1uPuuHSXxEroKxcFvAarVckwc",
  "key14": "5oKLcnMLEBWuB2PDLD8EKtTqYxaCAhBFUVGZd96stjhqZ5dddLQfayBiKKHVMHkjWtRCVfSjArTp5haTR3AZXQ8Y",
  "key15": "32BBBCpE84yGes2K9VehmdqE1effWEH9nJWNagAENJvQrAHumYnuXbU5yrXaUyvrFVeL8D287EW4jZaaVSFdBdm",
  "key16": "5AuMx4wdfMEYnQBhGUv7muKnKQ2SzLHveJRVQp5eHDZRrDZVoTAaTjB35XbrwxrLZgcwNBHsWHeVa3P4MFaU1Wzp",
  "key17": "33aMzZCVh6fboQRyDEUEotY7BjkoYS4Y1L4XdGGJfNZ7UCSSRbTaYSWp6ZdQgc7SrrZUg37Vc7DrChu5txNEfTRy",
  "key18": "3mA6KiDRxjY6egyBA6Hz5BX1HiDfshCQtFCqrsSKai7QTKW5e6oY1FnnA82a3nUEkpu47p1qWhv5ZQfSZo6fRBw8",
  "key19": "2YpaVRaNNjh6w8wHY68dwPuwydeN1aTxutY6Hc3oRLcB2jWySZrUnCD2tinZmFPGzmveZyGfWuVURgbPAYRnWjP4",
  "key20": "2SkEDiHSJzviRoXNM8RiT4zKArmRdUkJoyENa3RGunoQ99Uvg5hb9Q7A5WLKngfdEUMd5PxvuK8mLMKoHxtxMZcM",
  "key21": "357yKeqG5gwP7Wrwz6fFSFePXyox5KuSNpuBvskkfE7F6cDBtN4UGZu7J9bieyKob1PHuJug27RicpxBr73mf8dX",
  "key22": "5DYh9FjF8KY6ureEXr66ReTAdqvN1Vzcyk8CjHCxKTrAXtBkFbRQfY6X4tvceZHKoegwJs8Z9CC2cihthxwLvw5u",
  "key23": "25rTwU9WsQrb7RPYZjXTAUYyNoLwBa2KuBhMuB2yzSbZde1HWL1jZKJ5e7s6tTcxyUf5GgTinQogBpCfS8yDnvRm",
  "key24": "331mFK1u1kXZ2MRYHT1qJQy9LaRQDfd1fWA6nQhA9bFA8yAumGPygMmLs5DC1wSVwy7sJxaGFruqDd2PTKkfTsae",
  "key25": "2GVbezkMPnuDCdfq1H9Te1V9Fd2trWUiEHYn4fQ6WNArcYFCaPwdRFMugQgUvXJSvNjvLSu6H5V2HWbgA7GcZeMm",
  "key26": "2nxrSo3AR2tvyR7aqzxopFTdFPnaNfu96qip6Km2hnycj5ByHTdNhZohDT2GWqZ1UVQsVdtQRUuGjq427ogc269b",
  "key27": "2DireZByZrwhRBh7VRxa55FxMCnb6S52Zja7yJCpCtz2zq9f4LCLeVApoSJUL4qbAD1grbyECbeQsTDgHJqpaT6",
  "key28": "5gWa2JabJsmN5WHLWHbssY5koXbSGPcUMBGGwPJsPyhACp1BrbUmm1WEnhpFYn1v1QacW1gjgxdeJcJARrnURfih",
  "key29": "4K5hq7j7Tegu9drw6NFN6e6av4EwfRmGFFV7FNhmTmcbfofcWmw7zm133K4PXgvHfM213pQjqga5zYQfD7BLtpmm",
  "key30": "5rJMCwyKkpdiaxQnEgoFreWBwyBXwTeMeGs4dr4dnrALu5AhuMm5xhG9Cc9vmCTAJUdoUXFcB8ZVWmJFLzqhvUR8",
  "key31": "2rWRiCDc8H9bVzzuwMog5PPHQ7eJEncgkfTiXShLcxkPH3gzVNscCHgCaSz8DTSJJPc1ucmB1gCeLcg8JLVBFXmP",
  "key32": "gbYNmDmMrFzRH4ZMSWRKK5ujzcxXrzRYN9p4Ce3PYAei8dHT7RVpVA6XkfFcXwsMqXnaJnawByuDHc8qnBVjL7u",
  "key33": "2F3Bsrot8AgaWJ3Kk9hCQXwojkD5jca1DTMSQ7goKRkVo6ujJatBCiPhqkshpqQYk8wYxzFjkYCDKfTa8WpLR7b3",
  "key34": "2uf1ibC7Fzjo5XZu425QKrkGKsE4H1WfUEePj4vmC3477hpxg7aNCuqGAK2jLWcsQBwEK2UX9jRhMX9HRvCgTHUu",
  "key35": "2YkuuCjEBjEhKYKmM7hG7qfJYAbML6DE1MXNtHC48AET2k4LAf6gM7v981D8hNGCUuPCQrXuWKsdHJ98nhZVR1No",
  "key36": "2UDaZ2fiKm9whB9yTpTpHwmZ4r2gUmESQiroaJ2RcUChVC7rBZKDjsXe8AYT2ZS67buFs9dS9uSXQ4xcbffMkCBd",
  "key37": "5t9d9i5jXUQ5DyaxDN9x68dFsebFURcW6R5qpwFydEF2qQm5sdCHwPwwgFg5muP7JPZPpLmFbxtnDBadci3C1wZs",
  "key38": "2j49WHpTSY7D6GzyS4ywFXMkrkvvmuEDwMUkGx7DkzR5PYVuWZcBqeqqQRWYteRXkMNGSNA9FkJbgmoydRYhx8fv",
  "key39": "5jkcsLMw4iTR5sdTuHVYTVfgPhjueWRwc1Qbpnzege3uQzgRqb8tezW56jzzBjP6Y1CUQJs3Zdm9MDtdocyFWFFJ",
  "key40": "35eas5eYrPfgorUujTiZQh2g515SKrqF7RDgyV52NeASq9CoMd3TePTwEPiAq5aC4SDqroftTvnK2wftRUPdDyS8",
  "key41": "2BNzFhzJ24KibMXL1HtaeJTujRBok9wGxYW4w3DLQzHziZVxmfNmNJaCAisP1fGsRMR7xmMSCr2CPGqekgRBHF5c",
  "key42": "5z9shTduMEesifm99BQnshPt12VD6NfwujRUS4nqe9TimvdmWhvFNeuLkM1PBKjtyKgSAxtUi7P1dNrG1daUH7Nv",
  "key43": "4o8th7e6oz4dCWp2PSCkfMLwwkUAMgtjccZ9nKNBoiT68Cvm6Rh6d56AcDgYUezn4GwY3bndwUa88n7H6ArMwHuh"
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
