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
    "rQUY5upH9RqM9f9VL37kHwJGkMswGLAYjtvJnPFTrgphxQVoBCvwt2794B4wmxbVYvUN4royEeWc1eUMEb5E9xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACHndjQE7gGdXRrmRg12cyckgEbQsCeu2qHoUea14hemPaLEtGf5kxzLGHueT7s4CNfmBcGHvT1YH9mLcRn3qrv",
  "key1": "5UFj7ZNMX73hqZXuXqicw8hazmRQGHtaBffN3xvutXs6kx1RV2pMRrS8ixKJtChMPBYkUpFT2PNbf6vrtP8pVaab",
  "key2": "58qrKUAxF9RWPdGkrAoUYGSFtr8seVuNxeWQRvNHQUofV8Le2m2yoiCGyGXvJ14MkJZY1JCWDxPX2hQXPgFV4CSg",
  "key3": "xp4TM5qp9QHZsZbPD6dRNMTS9sDPgE4TjEihqrPGEEKE4nddd3uonUJM6WXC5ZLqPbCrLeKLzCHMd8gmAuQbHgj",
  "key4": "2nFrB6RdFyhLQdbTXd9ecxpUmJiDJjgn9Vm7hHnhTscZUv7M6E7wf6VvezxqPgK8Kiwz1kHbCGp5DNqCAeCxf2it",
  "key5": "ckYMzNHVVWvn8X35nXEhY69cTU7qK47mYQ35Xs5UYBKmixqDgt2wRpiPKfCeEzHJqHuY4g9h4j7Qai71UCBpvHq",
  "key6": "4om2rgEsmWDSDRQPHzn5vjNusVjCzbgsmn5NfSfZGZ57fRSFQvWX8YNqtZhujdRxHH5Fi5gLuPaNfKbfhx2xucZv",
  "key7": "33AmrDtC62LcMsKixGFRDs4c1uxrFPweXHyTaU1zTug1iyEG6fivckF1MTc23hwLrpWu7yLCC3rLidvtJmY2uZmQ",
  "key8": "5rrbvauq4Vd3cEQozugxJLmpcStD4zX5GiDWvtMpfeJ181hPZf2hk5vGeiMWHTbgEEdSyHyR5ps4K2v4wjsGzGtZ",
  "key9": "12toy1evVX9fNy6ctRedKPMKJk1L4HWjQJGhxoWZkKyGTso9ZZSw32ajxMEpRqdZQ5u9dq5xtj5orFkGRaaXqHK",
  "key10": "2xzhPJx68ypwz3nTSitHKt5hiK9GTYZeLzVKd68t89jXVA7TxeaoFNyVGrw5Ne7xgYGwAKLDqzF4KuCKg45k7cqM",
  "key11": "4Z2M5Zjigfrt4bAmW9kMEKQC3swxWvTrepjz1PcihTttv2HGyRR6nS2GjAM77GsCvmWoRej6wKqYkf3dYoVnpYke",
  "key12": "4kp9q3p4tff6xJ5e5qAcibvhRjybUWixkwjWkLeueYHANbtn86b3KaKtKa5jcEw2si46fZpLokvHUs9Pr9BAc4tn",
  "key13": "3y5pHGVWVctKkDyC1efWQXbznZDgyBjG27cFbewVkgGvdQsosGcMPCs9Gd6wZxFaKdm9PF984hp6gnYqvqxUyYeG",
  "key14": "46oDajLzKQ8FCtimnXzqoU1iVNZgWhKUDNNSo8phDgnXD3pPNdk8TbZ9UZrgxa1ACNG5G7Bpd4iUFwj5TyfDfuZV",
  "key15": "tssPDK7QSXZnBYyyf1utyJ5YGck1BhHZw7i4A1DdByQ2dSKtn6wPJiNtRLbS4jQyiexQCvmQj9q2YZKroZUG6r9",
  "key16": "3u5AABj4DRAnAQ6t9kgP8nZh5Q5FsidYLSncVS7miXyRM7gP1VnjWZhi5Cagxp89pgJCZovDVi49tjF7SqqT7616",
  "key17": "3Bw3LQFN2815pixeNCWo1i6NH5ryPDo4WmKFnVGa4NP9tg9jXTR83x7UCkXfUZEFm475s2cMnRQLWkH7iN37VRPR",
  "key18": "4fz3S7tM86soqNp41W6yUXukdPL2eXANDZiMCLLLPabwB38krirYs11zSSS228NfcfGeRs62JKnjjwjAKFyEcTuq",
  "key19": "4CfqKttSZWu8GtwgZ9sNFUuHD9wgP3SeBrZwDU7H7RxpXSvV6ZAoMqGPur75kfj8dKhaBrDEGpoFMeXrCjh3zP9S",
  "key20": "4EUSJZMhRcG4kGf9RSMXVWsGRNJtiYpCfi6G2RNALRb2iiemkM6ChwR7bjXhzU8ApQZqAZkx4s6wTBV21PGRCv9s",
  "key21": "5SqkxykPSRUee3G2y3UkNUFxaBb6A5C8Sb5PCF34vNRcvwXLzUPoXaWn2EVbmn2Rue26Cn2fTAz2sLVdo2tuxcA2",
  "key22": "2L8GAmDpzKu2MweVwQgaWgQwn5aTZbd5D9aXix6C2BXwtLgp6fU9sGbgdri2YejYvVoXJADoJvrpwxXQNdM5dsxr",
  "key23": "4vEdDHLoTjcRb2U9w5DFtPyYo9NCvmKyNp5xd77zJvpRsbgPiXVgUoDCWPDLSRc7k3hZzmvwDxuEZw2dy9AF1SjG",
  "key24": "3oxqeW2PZvoCG4XKtJ9gUQzmk6sZDfCLxjQZa5TwkJRwdPEjJpzM65RdRCfmFwbi7Bpg299krGn7ghGpXAteBC5G",
  "key25": "44tvRGoCE1sYUQmnrgszZKyvRk8Sf5fTuRcGftYG6WZ8Pi98mLYLS5S7gkVP8FVcdsh7g7w5Cv91Yc4nDmz8cvGP",
  "key26": "4oR4vP6f32f858NQtqGRB9XKY7HM8L4tGy6t8QKnZHbiKfpjtmAz85SMDB6sR4uy3skZ5X5yRLZt19jiUyT8cayG",
  "key27": "4FudMZo1ZjWSqaNEsLVbDPDWtEETRTcm7fwxRQTpKbSpbfQhQuGQo7p4X2sfx6yuVY9AcKCAFwqq6buZ8b6gTzPZ",
  "key28": "2BYFX3cptZcEiuKgX6V1vzNnDyFgTYAL8vT6TBSv4iRjQqBAdviPCRagzKbQ6Bt77YhFhSrahp8ur7zLwFy2STdz",
  "key29": "3sC3FvmgtpZ6fw1Yc4qHeuRYtqUqLnKmZSuAZFJ3eGPmRgSBawkYtthQiPrC3j75c1Uk45a1CJCvMk8WmhtQAkeb",
  "key30": "2ta5obXSuQaomGodXvJDXCqddvrKmF1cJAqQpMVoqC2Te4t8qybmQvQcSGCujurU2HCw5iTAyyNjgavDeu9srBn1",
  "key31": "2kS2BxZRhCXNizMShsw31HwGxBY8TkNdieketjDeEHFZT7514j7XqCRxJ9bBZYoD3pi4eBF9ZWN6EsRiNzTubvFF",
  "key32": "Dxq7eATw9ip6yZDwtAw4NEn8H1FVGgR2DhRdzzyx8cFzJ5RVJgMAeX5D5x74BxA8Z5zjGDiNp4srKtPaVuhFCmh",
  "key33": "3xAmfHC46sokbjin954rN23yQKKMcMKtpW6fqapeTT5NSd6fTYdZ1Lw5qornk9uy1u3TAVdny8h9Hj21esLhdd5J",
  "key34": "526mFKXNAcPsA8d8f9PFAMrkgTPMWnHLVh3hZQabB2149rgsswLFTLV2y34Qhr2tHEM9rLkuCrieUqFkNG7qn68N",
  "key35": "2qtbVdJFALF8FReguzKxcKYQJgiYs51FQuBKBkErpCtAbX32kphUpDczfiMnJyJMXzGAPom7xwnzfVFtxM5eGsLb",
  "key36": "5QwFSFTbRV8zPPPYFXwoRM6GnqtUPdRq7tCaXowCqfoTMb1fD3gj23U4aMLSRSq2uvy9wvEJcYTzGugfAXANcC2V",
  "key37": "3rn4P7Sexec6jzdHTD9d9n92jLz9F6jZVVEpsXxWrjE7Si9RrTLgyzoXEM5oUc3bXiSAYMtYF5hKi3wxeURsQSK3",
  "key38": "49r3pJ9GdhufiPbTAqGFj6YRhj9H7S5WViuHUwpP7D591vgESSBHK9rAwBFXYDTzZJHT3453WzY3vCSiD8U9r17f",
  "key39": "2U5HNvba5Q4m24uNMh3at2N5vC1gSk1H2mm9J8Y5VT8xS1eu6hhED4JBUK3Le2Z7PBnek8PSxSQ1vRwnW6Qv7hRM",
  "key40": "5EALCcs6fph5NdPA8ZKsx6iTjw1LgAg56ZH41JW4cqmCKFc9uAWuk8rv1mzjmUGzLKdPcRe1JkWuYASAVYJzSyeG",
  "key41": "63AeFCUJBABuZeAMVva9RM85xU8MyWYs58ZCkWBH4SNvoiDufF9DWyF96BooHijAtCPsUZmrbYPAYqeniBvDaCo6",
  "key42": "3GnfdjXJXQz5MzynaUYcDWFF2XZvY1jvUNFnJH3dBfHPn7sHkHLody3f8EnYmhMFw2SJ7gUVEJW5Pi4ofWT9Evrt",
  "key43": "4MnLPgpsw9hwXekwtCqaYe966mnjNJhfr2dimZLtMWexPBKBobEPLTEGmhypxNFvL6rCc4YVhZhSZ2ny99K95de3",
  "key44": "5BGgELJQNZx1vzSuCWMSWBFYZhxatPMEvTkP7jYMzvRswzqak3k5WuD91pAtxxFSVqGMEdx1V8ojEAoekkU1wyua",
  "key45": "6YGdxJqhApc4bwoRh6zC9RUnV1FJpKEwExhjGzvWGb47yMW1sVhmVFshLbKs6bzPT5oHmmmAdYgD6tA2uS958G3",
  "key46": "3FGQ7nv8G6HuUYMdzhrVDvAZhktQhCuTb5UDfgnyUUfDRRCVUhiRQyjjXwGer8jsjrDV5WBpGKxv4R45cbFRmkbh",
  "key47": "2CSESLZzRXJux78Z8dXE13uPuB9jnh71AFXWHQu3AXS5PJajyhLA4UDEt21mB7GJ7bq5aCqqUdbxHu1UijybQjyE",
  "key48": "2GcNo6pZVgQ3QbazUYJitYg2REXG8nMAPYVJpooj13d9tS9cxTHXW4nCLGeg4XqcuXUVG43tF7kPDDheBMpg3tqA",
  "key49": "5Ek1EHzoNGEzJUzetE9DXDkKwbgNi8MsSZEWQduRZkANFyTVTEs8Rwdvsz98xdTZuVrCdDpHFGxbqSN42aQp7QTj"
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
