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
    "4Qr3Q1Bqq7eN55tWZHEJt2NwKxPneQJaAyGtCNfaSGatbsZkBHDT75pah5SZ5NYsghAUUbYPnDRaNDdbEYszcF6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuF5zxMkEGMbpm8iSNduQoQzBLswcM55SGFCYVwt9LNRfsL4bybgWKqszne7GVMDAUDpPQmPc3wpijnPgfvzEcy",
  "key1": "3QWS82upzNVKL5pfr1xJv2VVTDHsfSoQB4z3cXTVpBwmf5uDGYxNo1iJTkAa5N6TUpHGW6zhBH3F7Jr8KAa1kiUW",
  "key2": "hiHtQiPA1ypmz8wSAnyH7YiyQvt4FTCvkbeHxSfVLPKksWz1MYV9heQ8aeJWHBSMwbckMtGopNmwXndbdbwYw4Q",
  "key3": "2XqoFKwZa7dCHjyuoTpUiMCEaMzKeqFgmuMLyRYwDhPA5bsFcfzqhhyBZ2dA1bubkKqCRmc5opjNcVbB4tHe48Uf",
  "key4": "1Po5SKJVUvE7tRJ8egAJbtkoaYt7mgyUSbQFTsfFn8vrQBXG5VjZWmizKboAxR2tCoMoTEbWdYe7bvqJbGE26t8",
  "key5": "3YBoyMC76CUesLkBzDTz2MDEvWhmLSN3r38SCLKdCMBRAaESeMWZGGXYMh8BjEWyB4Ncm43anPLnskw4ogBqVERm",
  "key6": "3JeJzUB9gtorFf3F18fkgcyUYRAxjSY6S8bQoAgmbQ4Fs6ZJJvgbbKkhRZQXNZcQFpYcPp1EhV7ozWNY67Cm9MjU",
  "key7": "49D4j6cEFEhyHoJPwNymkG5Q55KG5szEYUaDyrqduEVv9U4HNo62NCsybfy8x1GMsqmkESv2XmYtTnPsVXpSuwuL",
  "key8": "61mcMTvKDF2aDoFucSCGKMdYmpMmzKh9vRcvxRhqbZsjkuPsf5qjYpzctiXxTS8zi8t2C7UCq2FEqp7pzj2E52wF",
  "key9": "3XronzFGAJYQyjkHD5hTuskxozWub7Y3DsiWx4NnGtYirfKMQQ4oPYX9fuCD7xd3FmBvmA5VS5QEz2jknF4QrJPe",
  "key10": "4XCzbeXWpqgTxGGH56SA1AthJzBFa6GspvtPj1jdSXFWn3QrYgF3pnvz9gyTfMMkenKDrc8HLZH8AojQkzLNFZ5N",
  "key11": "iiMhRioECAUkm7nA3RheozjihRfKju8KcLqPiSSf2N94XLWtva7gS4YXUwaDgEZ1PF9L9DDEyLrCg3UX7KWFpie",
  "key12": "5BUZsUQWF3VGzgCZK2cMuKEVbS4wLxTCqTRXqNzMt17N3i4oCXLVtR99Gi8mEfaShsvSY2tsRN8ds19sSatsHrKr",
  "key13": "H9fnD8rnBwsMSf4Kv6rZA4hmxCuGufePFJbijGxhztcUsqNGThHAua7CA7U8Pi5P7W4qJnZjhkpZkdhBPdygdfs",
  "key14": "4xCXNkzUMQwubi1KGKxqhyYZvAxKczg9r14726piCz4LwC1Zcg42mPtP1vhPEoXUNZMxviFimyn42fCYKuSqDtgb",
  "key15": "5Exj5kzbUgMUdgf9s5Qneat4k58iZQX7XBaTsTDpX7SRLu85uwxUEQqBKAL89hgXYRs1dXw3vPEkSmCxsKiRu5Yx",
  "key16": "4aaWsV2YSDrr3JhhKB5fiVNnD3UQyScof8K7aB5d5jpbMsUBsNiuxnkfmMVtxppVVK7XXp6sSULCApuaGTedWJkW",
  "key17": "4txDC5MkyEEaXD2ZKNa5EFqZy2Wfb4fKiZoRrP18G72Lh3cWSnz82g732VrnYP1S2Woie6aibysi7Y7bLzsVqgtC",
  "key18": "YnmXtHXj8hSgUpEWQ7PVxoEZcHNREUQaYS5pndX3iFyFGPHJdBfVzTfVwYxriZ7ciimuzTWhg76tbYPCDX4Jy8h",
  "key19": "543FHuPM9FtUE6936aw7Jf7RDLxx3qaNHRp2d4WKFbz9p27FSUqshQyELa5ntyqvGqvr3C38N2EJEhbnJxSeHj8Q",
  "key20": "2aGFb18o2RD4XRL3gX4WccCGgU5GNrgvdDaqZ7Qjb8MBT8ZAjFaVmQepXTP4jZ8CPdBk66NuCgj9sneTK2MGQcPn",
  "key21": "yWUmAApJtRnT9fJG7EHqkgQhVvfEikhpEhS1H97PCG4xvfAeLYmNFTG7TKB8xvXawbqrnJWy2UmfBU2aubACwrF",
  "key22": "5m5ofKSfYBthSAK7V3a1M5ZJAKo1mgM6D68QAsSSwcxKxzRnLFVqXko7uiXqK52DfqCNrVqHZJ6CQuKD2ReZnixs",
  "key23": "rnRxwqG2PnSswHNBc3MnfyGeeU6D1NvdBjXiZ1N153utd191D3cFpmbSUfmMNKeF7tWWQXsh2C8GGib6LR8TvQF",
  "key24": "3R9Qz1hPm6skbgKj1aGctmrW1GWwk8ahu44UH7JQ95Frf2s9DSVcMpHtccUW3hV4gi95iPVXVkX8TgAVcWz2nUPF",
  "key25": "3mwKcg1wvUdfqGjEoCZKtNQxUq2gaXwhqZWmZ8hKytkcuLCkBMXu2efEenqD9UrePR24uq61gZVEtvRoKZNQ7pXq",
  "key26": "epi19KyFEC2VXqWRgQKtTN2tjgSe9hD2JDbcNYqjq1FpSxHGzCCRtKNHK9rinVeahVbmACHqdoS8HBF5UZhZiTL",
  "key27": "4Mbd4c5o5WBBqnoRWMr3QGWfvKKhiTq19CikJuAiTd3dkDLBanULFYv77K5bW3cMqMyk3GKN4Af4WVQfAnsEF36j",
  "key28": "2Veunke4NrrfqWmum64WBaQL6LAnDNP32qEvmH6kb5q3MXYeJHat5YwnYXj3wjDFcSuVkWf9aXXkUyMCsZMdTz9T",
  "key29": "4qCxnNwHiQJAfMbb2UFZeUCPK9So3FwrYAULSdkXcmTXs3inJbPEvTcgQw4Km3MgQ6QpidmvE6xjQYLvQ4zGWDhV",
  "key30": "4ohQa4AaJ8C4UitPmAh932DyD56TuBP9d69qLgr6FyyUnF1TSJ8we1MDTa3Lu1zrLavkDK7QYY7Rgwjdajb6xtGx",
  "key31": "1BuZErioiHAEFUA54L792yQFYzXXKGTmUGsrUwgvfHQYxYkpb3B66sETiHgdTB8c3tVjcnqZwmwk1Sjw8GWK4Ly"
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
