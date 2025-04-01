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
    "2Jom6kMrnyvNUkobamNgv8NX4DtePn4Qdb41UwLg9XStPvTZDahisBt3hW5652qcYRKBB41qy5RYiGRtaKuj69EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqzNazKseCP9SswU3b99YgcXXCcLLDgLgC68s1UmX9wHQ5c6QeJ1CzLGTKVCK237CcYEvNjSMdXMCM3M6Yn9UiW",
  "key1": "34CyppdBPje5crRUhwFkF5bruh8Vpmjk3w7Npzcg9womsYtVU82DrDKg2Bjjbhtd7vttrBXs69bqJWd6R6qSiDhf",
  "key2": "3xzVXSSDa5ZMRrY1JpsxmiQjvDKwrPzzwe3BcV4oyHQw4bjX3RU4rnBKCyE64iXHj2T96CaSF1yfEiRBhPSe1vxz",
  "key3": "3bmU5AFvSAwhV4xVg1vyo5F6xye3Dbo8Qh9eSZxNbyaTmVHfF2XwzziwzUjwi4kXy5Kcn7tiEp7tySkNwmgmtsHy",
  "key4": "62YAgJm6Q5Ymuf26SZrFBvhXVeSHWsa2kj7FazCbUyjEQUM92Re77AngG56k18qUrDWQFaxZQztv2WQKkGXwfSuq",
  "key5": "4HLu4QVSmQckH5wfJdrjYC8DoAad1fyhwJ6awuY7kGbBgF6bYSfsLFXU9xycFGsmtbu5Pze1Tgw2umwi2pZz9Axm",
  "key6": "3yQKKGYT8wLzNKCsVA8u8kvEfnunUsLtb1MuTcaxnDonrxhDZARmTvK7nFManx85fkYfWL5RHpEqg5RQA8iBAd16",
  "key7": "5ZqFSogVeZRQXiaFAqm1UwRSxNGtuLS2XXbg4LQz7gkQUEaKchgpAR3MuwfLh5c7X1dMGhUoEf2CW6mfUGgWaWmq",
  "key8": "4pzjzhhKBpa6dhEvzV5HJKSFdQmhAPW98ziMRLjgWupkc4ucHqcSux29YYGgNAGxKVWZ3Nx6ev274LqWy9yRbYng",
  "key9": "2M3xGbnBG1CUzAHuHu7842MPh72ENcYARsttMWGEerV8uFqtrmYUBBJfmTBzhmvJ1uncYZ25afZwuJ1DkNDT6VV6",
  "key10": "91gzR7mnEPDcpgcWF8u6YvPgDKrPKBuquPABY5RPJSjvw6PY7YSXsbywprVwQ1YEkHwdANdvGXHQtTPdhgRQr5u",
  "key11": "A5kqeUUfEbZ5dUngG423fgU1VkPaH4N9impxDtGWebb1UVuNeCysoH8mqfHXTUKgksp91ED4PjcF7kDCci8YwKc",
  "key12": "63Myx5JQZHuooizqWzLPacfYVxhu6BEiTAArMEQZ47XThHCPPerE5x85LxpQ3XtcnotqLB2KfEDghLZywPMy2YtM",
  "key13": "5pRDeTgDiqUbs67hdj5ZzKNrUhBNa3EMyvbczG4vYBU81bafu7hsCinH1ZxYQcrNSPfY8SqcYzwxRwktNWzLp7rn",
  "key14": "473U23WzvpZLZhNMMiendGQBV7JurW8GSi7R4iG2pzpukNcZst9xJJ6BfsNBnbx3HZ6wfFDQVyYcHYHKR4jD8hQr",
  "key15": "3Jie1eCoHyfTzLKMKJV4izAw31vgUvsdkFY6hmatLMDvJxNmeRPmj3Kaj6UwGhdDkAHydKwvmTVkWHh48c4joqsY",
  "key16": "4Y9iiJ2Dr1EPcZdVVxW5LqaXyx7S4PuVjgNZHMvq6i1cdkD7EVHs4tpPwpJjFgfDpfxQjYFvABYcuNVgyWYwMj8F",
  "key17": "ET7cvDjqMFwewZDv6ARzqjDbsHVwjNqXpYJSxhG36Nan8QnWtkTjoFnd17MJVpUoKRtHWAHrZecEXiNtfPpWzGs",
  "key18": "4wdqBcuJz1VdK1B96Bj7BPVmaSERShBVXr9Gsc1EeQT5YVy3n9VQQYHy4FDYgHpdqWq2cu3R5JngKTXp5q2quENp",
  "key19": "5qmgMk5L2DaXWbajemKGVVYsPThdbkyREb8evfS4icEaELd1CBXX29QVfshoNTnUDvoJ8gYmeMgWVioFYXB8UKQG",
  "key20": "35n35D14kAwgqPur2ajgnpTcy9oEvM1CwB7rZv8asZPopRFeSMboWMvA2Y5Z5B8shXtX7ZKeDqhWWqiXQuUayrw4",
  "key21": "3z5WKDnsvUT52XmQGWDqxunXjvSUJ1oZFzY4x6s2zLWHDaThNxSTdfgvJia4syq5KfW8ppcYKpGJigB5AfjdQr8t",
  "key22": "2Tk5fcwxpATLYTLHngy1jKxHRCc9GNTGTfr26KH2gqxxeNt7KzKdq2H1BcmmFrg9JbhJ5YLWPmq2mQMmoymmLeTv",
  "key23": "46qfYV8tpDtduGdynPydaPUGFA4vZc5tYEEstzE3vXaq14i6WBFwqsQcJb5JeLcTzFiZRMc45kkfbe7hfKNDrb4a",
  "key24": "4TRPFTz1VzuQs8HFw8qTaFfDwxX2UmboAZK71WagYvs2L7uXjmShtYwC8fVzc6hLL5pmD81CkY1bdyuPX8CTPGeU",
  "key25": "3Qc9CX33Pc9hjLeDBEQPPEn3qpLf4ArFDPLQhR71eGrMpg952JK7kyvht1eePASMdor3vLUNztifvznKFWPj1Q94",
  "key26": "5JRnScy92Wmrrrnj4DRkP4C29yGXNYDHTczKjbi7rAEhT4feqoTeb54EB2JqByKJiDUJmsuPfUHWw4k9LnSzRNnj",
  "key27": "61B8VktDyRDBikcBBBVzGBCBB61EFRxHYZmc5v2GrN1nmXFEJC9CvvZ9LVhgB9cePa7TJCbX6SkatZsTGveKAsL3",
  "key28": "VRmGAhXnuQvN8ftBdkuXXMzzkT8HjBDTVyrSMyqXZuJyQp9PLLYKpVHi4fsLSeqJazRYfSvGpr9xqwU6PLMpoaY",
  "key29": "4goxnYxU3Te4NKwqAw8zV2As7UyWhEboz2FJ9w8yi1GXHdEcVfHUV2ftUruEzrhJMm29NQjD5nXFUvqFAuRrEnCx",
  "key30": "4CH8F5GgUhPE3sASGgP9oqaeC2m3XVzRkNBFf9acDNLcgEE1QQLz8dxg5sgrW95ti43WGVnAD4rCq7xZvEBiCZjR",
  "key31": "2upWhyjBKnLgowB3eizHcJrhN3WHBcGKodpBvicvyjGym2WfNa6ajZgFAsd4Zmt1eD8u1MkPMoHXHzJKUtjP9iX6",
  "key32": "5ma1MUJQPfFCjVfiHrg7VkxRaUzfrWXN4yh81wjPz4XxtM484NAEbZiF8tLeF9bscEB3pVcr31soyxm9ZScdbswX",
  "key33": "64UcjpbiQ1DHjyCNXZsRn8QvmTTsRZSdkHrKLuNoUZGJCQqUPfWLMwJKYTwCqSDRxgA1Q31JKTEEso7BQmivi5GV",
  "key34": "39ZX25nnkfZ88oCtHToJXCpMtNX8PngDtYXXS2h16FYF26wbw5nbcy1nKQZgkrzb8aGw4ArtnGrVQqLPDWdub5BP",
  "key35": "2G42D93JUGRE6k99NdK1sjnhg1W2m4yHFWqX7Q7Gmi3GfYuupP2jBisuCDWR3sTH6TqqGDqu5FG4hNKuL324hgmm",
  "key36": "3jbtNcSAcfhLyHRms2QarUbF6KJPNBBhGX8haQyJSbbCsX6CZpKQQY49QR7K2hM1dsW5JUjrMcm8DdhCWtvH6FZx",
  "key37": "3jKdcRiS62YeAVpwQTpb1QYUVQAR4ERoLj9sEaXtBA6VL28cg4mTjJPcDGDkXuYLxgD2G8v8Auhd6b1eX1LrrNxd",
  "key38": "bHgLEghU3n8Ab5hXBMvsF7bU8uoy5gFfA6xf7cypWAfLKuiS5pNXPB52xRLK3NcUtqtpSzHCPhbreHQWfsa4TUs"
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
