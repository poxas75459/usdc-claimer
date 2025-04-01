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
    "585pcZs3JPcgZy2nw8qFfynjBqMmksetjGJ6dYcF38kuRvKToLH4snWv5vVhJ1M4uc8HMNEHq1j5sdPTLVQ9Jhft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCnvSJCbMsvyKaRbqVTxuYYnmq7KK33yHtPLsnNLK4rQsM7AmwBb2NvAeStEr1ZcTXWRdJvNNUm1e8FuQtYUFR3",
  "key1": "2JsJmk5eFgh9p8AvzUeeqMwgTz7r9Svwi4ykZy2J9WmhDqyfrkMRKGs5Eiz9bN46Wq8i3PgEjzVxvN32iyqotLCV",
  "key2": "3aM4mJYxFNPRMdP1udL7jogCxMLVUn1dUwpnFG3FvXgZAT8HvzcAxHEMAUAyHUSwBqD2rsnFUsGTsfriDmqTvabs",
  "key3": "cmiwkMX3FE1KyV8Mk785AEyURu8BRtY2XqWwSPvvQvkg6pyxJ8VvCQy5pBi1WKPMkYHJAJUqNRKqG4h1gjwRsNg",
  "key4": "3TRxmRcxp19edBKasNrziiNvH4w8wb1qTHx9nzRpd659sSbw1KUMs2ZrdZHpmZNoPtY56Ke7LEjijoipMEm49Aj6",
  "key5": "3giDT1at1vjbzDybaSX81znhHiftJP9K6UwKwdCm3zYuhARAui6mXoc6CKxY4TySP9QSfXNVKs5UCtdnfdq9Gino",
  "key6": "4nPiMRpsegAcmWuniphvvUPsrybDY9NBB8WX5MUxQuf5a1jbDYrCMph3TX3KTvL1p4JEQ9EHwKpGPMRaD6mgpNbb",
  "key7": "2g23j9SkS1CcaPMpDTrVV1NqssvefVzdzjRggUtiGdUoNWdkJtjVgUHpehdt4MUTYkER2PjPGao7qrVbLygbkPRp",
  "key8": "2F9s25iLCfVmr54vinAC9akEU8RGLRr8NWBGU82UjwRJntkv7u1jjvMeKMKabwgU2m6ALxzXU3dTfRfqf5PiQZcG",
  "key9": "5dEThp6BSyyNGFNuocxgb5A8thP5uQLZr9bnBzaH7sPCxMu32XuJnxj7jq1QcR5dQF6Y9aJWLPfP387E45rkwrce",
  "key10": "5W62rB8gvhejLmWEBubMGUhzBRGvjfwro3etPYMM7SZhFMUeyYH8EDji7YJD2rfwWWe2jfWR2V941gdwU8qrydap",
  "key11": "4ajdqKeQqfTRZnjizLyDatmx8LGa5iBojz2NfipxfWpfNNuScDFA9SxDR8X9s7TDtbwtfpW5hgYUEKgaqLW2KF5b",
  "key12": "3SC1K7vhuJuk3VmZSNrHtHmJKKwPHvQnHwsP4C94N7abX8a1yxSgidFCxqF32oePixxrRK8DNrr86ZeheVXgXrLF",
  "key13": "3NjgXHoXrPM8XwvtZQDR7i5SqQryiofBaX24zyZLa4LdCJ4M8k8ge2USPuUAJqWB7DXmdKkKB4Ae6ewmiVaz8odw",
  "key14": "5RioKmjSDpXBmcoH5AEiKmfMAvfowRM6XJCS4C32RrJThGtoARp59GhrZmeAJJbhhvP4Fd5e4qbi8Nr11U3KbwML",
  "key15": "4WDmKAoSzEF6UALu8HtwwiJJwvq2aNY5P5qDWtb2VZaQMs3PDupVL5DeEWNd46tEFtsbZr3Duv3bhXck22qvUVFm",
  "key16": "5KTTTBqntJGLNmLsBn2Qu6zyYoz6gh8gdzQEJX9hQGvAruUCGLrTWf5iV3KJ28FVTacL16zcJ9YFJEbyB9YhhDBA",
  "key17": "4dMtBVKDZZKSW1qQMLDNysNhERaHf1A31RRDQ8274yntrijFEzKiSDKdJovMojUpF1PLftq38bhDZnvzJMcwZRc3",
  "key18": "5wm4ZLwtPnjRXE7rpbuZuMdEgXFip8k2i4VjYxrboLyL92xeaPxGChCRgRo71KfSLRhJe73ZKXwCHyeukeJjwT1h",
  "key19": "62nKtAiQQ8b9Yz56JsZRYtetmpJbuHQ8oeWZmkihsHqdjx5JTp6TR2KFd21ftuTbRoFvmMpYgJUL6cuAnYTXau8u",
  "key20": "3C942b3MkbGdrNf3JkYaJzS4WCRCCg6pA7rd6V8zbdfVCSCkMypBBjxcG61rhsEpbpNCRK3E1bs5UVkquThC8d5o",
  "key21": "hhZdbFRNKqbnqCKzr1YUbkTuxJRNyMnyGcEKLpKLsCmmBjnZrK3pf2yAoobaoLFShczjkd3NV7pCeLunV2jEqke",
  "key22": "Zwr8D87HpoxK6J7dA6BTE8ExQTdyD1VLjLZm56uQpHHexYc9fA8b64cQGHcP1x51DPPVQcfuyM5pWFNHxJ3VbQS",
  "key23": "2fQ1zP3h8f4bxJWjpYeBPGb53eHyMmUio16ozEjyyGg3QdvGtJ1b7xrKs19U6FEv6GtH6AyvTSHgFJ71BA8D65Cc",
  "key24": "5m7CG2RrqQzCAxk45V7NeHSdtdr8JQLbDp86Z7Rm8ajvGLtPk1JF1xdadAxra8YqkGm1WHFAbgUaWWMUZjk3Q7ht",
  "key25": "5Dyh6JzUiWswWpj5jjGz4t3FPDYfNCSshZg4SL9jQAVCxqAsZZvCJQdZa97M4pzWWbsFsMcYSUAnf8maGQNW9RuV",
  "key26": "41rLcADtq2DGKyDpMvumk5aSKuTpJiEy7Gkrtb24w99qhmKbU9vfsPNc1irR3RcDGjt5QAh99Scs3D1VArbfHuVp",
  "key27": "42tPEXM442p5d7Zxxfu3exanpFuf3jZoKQHmJEVwAZWRJWq5KL7z4n4UNWrMk55nxGttknvLQhtBjziqdRC4qzvq",
  "key28": "4S896GdSraHAwiWnbE1f37JrbNTQW43GEwvsH8ouHNKNMvmePvpkFQDnHvfwdXS2HP12h3utT4ovjtphAJoxnooo",
  "key29": "3uN4yx6n148A9ovTivTyVVkQE2tSsvWNpF2kv7ypNh8x5BNhWK3cqFp3PFwwPbUBmr7mAMnQmwaH6vz7gFYkpfz9",
  "key30": "3zawRNurjTpBg2oeLHfsuAHbcq2gDB44dcGaqijpi47fzRRmYnmyyNpaUigEhJ9Nqb6hnE5aCEdPXZDch1PstPUT",
  "key31": "2GhgJ6LLWGJNtbj52p2Pe2g92AP9mG3bVyJGLfBDNbU1zdpx3mHNH1KCCPDNtg1qCva785j6NF79ak2FF4FQHtvE",
  "key32": "3NvUxLN9DugrKUeynxPKD3d2qxgbV7EG9tRkVmsAgw4uMJwLTpJLCao2NUdeo5xdvu1mc2UbnWxpMVQ3UbwpU8tw",
  "key33": "63qhZLoXfmcx7RWMTawKSALaUqceGPHTwhLfmRcF5Q116hjDYabFitqGHKGuKeHww3uFP944iudrsTcPXMQAnWqj",
  "key34": "5YaV1jByeKJCtn6HJfnBqn7fWzmqsWbLC6UArh9ehNDJfsLnHKL11VLFrGyQYu3e4LxMpsgNVNJjNa9jE5ZQXxAT"
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
