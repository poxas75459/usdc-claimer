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
    "4SPKQTD59aSY8erbgfohdqeTH42hgFLg4TEHxu22DE7jxr7WDHUoeWYV6uirGzZVuZfyiYXgC83SduiukRfE15bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVnzkHq5dHRur2nrs3TWdosHFX7e3o5wrKFVMrHNCv13ES5AEpykx1F5nZwGLLEqDxRKDqQeNbTt1Z3GYM3EYtu",
  "key1": "3jvrCtaEr6kwhzCRfVRo6XeBSbttMePdFf8ds5euS8vpi4EFZN75KjuDmV3Ut4qvjHLJrfRfBzfiY8UDy8fzqzsM",
  "key2": "5cZ4hKnHFqLn8QgQuoWmCmk86Px1mL1qduhiQbwJ5fHjm5uSH1Na4bCsa6Rq1S3PNyCZymR7pbphfhGHx12k7Stg",
  "key3": "5YsWG4nWHC1eG9PvJS11HC228bpwZEveLYZLCaWhzy9pWVLMYLqtgvwckkZyXc68s38sC7vCF7ap1GLNQePafgbg",
  "key4": "29n8Pstq1pqdTfjAZKjpBQwq6yCbjVfbmkfpivP3BMr5HS3BBVbmW25Z7NzQe7y1FvbeA9FBSHYV2bLqVY66mGj2",
  "key5": "4CFBvkE7yxCHxNL1qTzUS2QtmvjquJZvqnqbhb7fDDJjuReL61rPMsgsDrFZ73ym6khLPXh51s8kBKP717ZTijBY",
  "key6": "3XPA21bbZayhGgMsSqGRqJZqmibiAq92WDf7ndH9642QMTHZdRhiUUkN4xRxuTgPUA6J57yoJhZ1f4kA6rFG6Yps",
  "key7": "53YbzCrC1DBz9kFAyA75rjyEDPBjFcrXSLYBhFghKUKiyVY41wsxXqHFpyWEjBACCL8pmctE8HQRt1HRavyYKRQF",
  "key8": "4Bb3qJCLBJx3Ym76Wa2BZ6CFWVAEjnYb43NWCRfUFFqP611zNnSKQjT2m1CV6z5EcsGK5VFEFvycXKErVv9y4hWj",
  "key9": "5GuSAWihsoKKwcne4JzgrXLTmRoMZ79KnA6MRPgQZ37esy9Ubv9drtcRzQUCZ8fYJvRTivnbe945zinFuQSQvQqR",
  "key10": "3UE3cmE5zXgeQN3xnHVWzAjF8rBskTRohCTrqRGHubavz21PrYN3rRMivPw6eMmBc24XPFhEzssVCfMUNT6nQ7H3",
  "key11": "37iMXc5WyT1G7ZZ6h2zqEZbccDfUD5NfeqawwnsPEdD3RTUbMpJakz34nNQMzAK7RGGvJnLwghVkJBcNPzS4oUZH",
  "key12": "473riHkNK94fSSjuqv3d3hogKp4X8PQk8NU9hcbWxdWnDkZ6b2xEAbTsKn4G8ErXLdM5jfC3HeyUioq4apXgEewL",
  "key13": "6QpAR5tMVQFCM2hCKy6HgPWWaiQSfad33HF6MSZtYhcx1Yvrh7AxURBtn7NBEbkbMP7sFq33ktrZn8n6Khedwae",
  "key14": "5oCo4pdjjrMzbxk4CAqrX8nQUGusYAedfqC1WEoDZ8yccb4oV1wTtik8sCDqQGYDNTq3b4kfvSyyHTTGcWcq2edc",
  "key15": "FyjjAwNsvBsvKPvfMrAzwLhAE8GDbqFv7KHJWRspWEkhNW3yMTvW9mvh9PnLqQoYGBCV1Fg2PxSRpb7EYtqNbqp",
  "key16": "2DKSuRN5bZRH7hKpU7YWmoLZVxe77KvnNn4KkALLZUA2pmiwFM8AnZzkx85fcEK2QPBqmzMde1BGy5x6pqLnUSNG",
  "key17": "2PFwsPUMivExBECCjrKpc7VNACUaZ7kzNRBmXqHesHZJWuSP3JcBSdVCMM8b7bDYGc3cipgqyboauhAn5y2ux34d",
  "key18": "3PmdJTRVYEeBtd4wXMZr8a7La56fdV1fjXUd1ZWd76fhu41mrJeD86c2Zpe6bAsYAsnGNHdgJtYUTFTmAMGuTbTo",
  "key19": "3znAQYPQbo1WM9Wg9fz1eBfzgux5cbyj8k3rr5mAM7bxfjL4ZvVstRXXm27VuLQB2kJe25eoqFhERi73tZJs62C3",
  "key20": "4SsW84sGzzrM673LPmWUUgg9gbzsgnssJ1DmL623LVXq6Hy4qc3huxJkqniPcQ2aRjrjhM1CSAFxsF62XXwePAPJ",
  "key21": "Qxfa1aL5AGxSaGpkML8XjhFdSBr9Ez3C9dUrxGEqFYSYtW4MccWbpkZHLiuaH2SUmRHvSbkRrCnJPC4VAYgceRX",
  "key22": "2YPridPRpf4mzrUePofGeAjNE1J6rRwHed7iLdaNqHMx3G5NbK1sgs8wzHNxZtCLnqHiJZGnYMRRw6AW4tNEHzTq",
  "key23": "3mCj9FkX1TW9TyMSHbz6u9kBRp5eTYnuAb3gvNeQSaoo5ErMn31SRFTjGEqELvCRmcxA464EdQhB7pivFR4L4zWq",
  "key24": "4xy8udxeCS38tqCsQKDqQDCm46nt8tRY4fBduhh2Ctp2i3DsfRrr4yJ6uYhg6Z8zgdVKPEpY6W4PoxKe35sSV1ZC",
  "key25": "d2PKNuD2LCTrM4uBY69sYAPAdKB96gVzUtNHi3ZrHj7BDZtpMiEWW1hafTyWVJNfYJC7XQE5tSFX6C9kqGTYLW1",
  "key26": "49ZsQmysqkAZ2BJz33MA1YsKevZUWBbW9h4YErxXKetNgk9yq3uaPkmo692uvGC9hanLdar5X2Bt4NJHZY4jwQdV",
  "key27": "3uYiCPvVTHn3euNzGmkB8eYHbk2QtxytK1RtigxFTZrrqzHNnHnwBUYSeCemVFwVPLMvGQBhvbSR77y4pdF5Bud2",
  "key28": "vrrGzBGEcUq9MurTijN7nK2mS1R9xCZzEEcKanP3MH79Adz7ztubJUD2m5wedX9TTowepHJSej3s7xhES1kYMBw",
  "key29": "5g7Ti8owoo1rCb2s8as75Mwd2zBvSBZeLox4rtSiKspPH7Zt8Wa2gFGmtUWit6z1qrqBvNQEtYhMtkxvTbqUje1z",
  "key30": "4WAFNdU3JP1xdZS8S3HL3QYkkcveWRb8T9cuH84LWYzNMPRdjrNJtiRG2dNRgQQ3vCNR4raMv3oXtCJSoA2eSBM9",
  "key31": "3H5QBC6UWzrp3peQNXPhnMhXBAfbb9CLMDUFteYaUFbaEy682xXuVdrZN96PUEbQkHxwzE8GvPdPiRLXzjKjwk9h",
  "key32": "2dzniAgxmvzzfn42tERUUVb1eu3vYCdfP2uR7F1JdHNBtpFWSmEFMfoyiUuTkwwDqUyiV9u2sGjXGZWyY18sPmK4"
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
