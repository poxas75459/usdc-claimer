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
    "UxdWMaJMfmja5ePrGatrKXA1h2gUk7bTdrhsBL4prKQjMS2DqoKQ7KBs7RtG461vb8YouYEVTupj8wsSXbn5kEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hu67Ywyqc5uJnicWuQv4tWvypEo7LdrkuAj8daZAW9gFrSWGTT9XH1PFADdrgv74YjgftE6D7up6dE3CETmTTBQ",
  "key1": "3mUYuRb7nSj7u6tRTnvofsY2oEGMLCpL2S5rJEm5hK68zXRx8YiHyHPxzHq6reuzcuqjfbZmz8CoerEUq2hT5y1G",
  "key2": "2pMiki89AAEyth9cHZbGZhbAMfjyRTLX6ZbqGgYrcmb5Tgp3PTJEUDZYa7Um7496iFyaH2ENriT7h3x4h2btWgv4",
  "key3": "4bmK2B5cBFArYVYCHybC1R5JDJ8Ji884FiWCkBvrLxiabAWTET4mqYda6LwY7NhW1WVNkPQLfJWfLF1iP4tQdoic",
  "key4": "3qGeFbULtW34QQ4MPtJs5vhLxoC6xRg7GH2gWf5UsjpAhS3Qbb7A7xjRXRst3bWFBpBHbUYA68gFB5zFBVNAXp8q",
  "key5": "42uH52USccbVS6BE2NtLSziyduz7vawtHPYxei7Pgwy5pMzF4S3zpUyyY9KWq75zuTtiRZT9ZihM83GxFVcjMqND",
  "key6": "3qRxHcRokyZYwWhzVkuvs7Z6RuQEkJQTVgDEQcTAg1nZrVEqgKGDWpSjtyAPTQgydauBjsTuLJEcGJoRzf7nbUnL",
  "key7": "3DU7oDXPcE6KTu7ge8Fxv5yTvam5ftQ1kQV3QB7DGEQed4xyfn1ZcUM6qZXtSfkFZoU1yi8joAktwNFKJxHBNwiV",
  "key8": "3FdxoYMYNW5YyxmTwyPrZpzsKuoPKcCkoM6qfJJWCWbcQNzNWSh8312wso9a6LXQk48WiHQ9dkLRmnysdS4x6GFW",
  "key9": "3WpNxtb9zj7AzhjiLso34q6hRsovV6psAXoxytbwnnknmDxjEAJWhZZe1XEWUjAxpEgBgPbNSgJbX7dW2skLAD1i",
  "key10": "2VTqQpphXYeTc6aDdeUjN1mdT56XEFfjq5y1Pw9jQctGCMPPKjySuHqTFMxE9ZWYoKkXo9Nio244Bn4BmAnqcigU",
  "key11": "4ut55yt6FcvSEZJqMz2uV6LzwJRM8ye8pjDWxbrg2jwokj8ERQEa4qM5MbbqnqHaEXV3dW2DpvVrJ9tX1k8Q4JiV",
  "key12": "3tzkPMdYKC7FG5a8jQ8FbNfbRpjiKdJeTAkgjd19Bu6VBCiqF7H4gmJqiW3j4jb8KTAEWS35QpQFKnCG1rdQGiqa",
  "key13": "3wZ917exnGneXqf9D1o1s1n8YQHWxzKXQcvYoeDmD2ZwYWNkhhxFX1AfvfZ72YihWCwEZGrMmKGu77cjd3Nmgax6",
  "key14": "4buqqNgQfeYYPPEqJpzPqqvcLCSdEx26FsUbjGLMZKa85yeSXtcxbzVnMDDBdgviHzDecmWA4MHR4yU3zvDiC5Vk",
  "key15": "5S4SpEGGVnRwTon3nzUbBVqwUZf6UNAAnTJpsV6WkwSZYHNPJy5ZGp7fRvmaWSn1CbMMfD1whM7nYmexT17CntBP",
  "key16": "kQab9VMd7y56r5BqxaMCpfnHJUC1gz3g6oRRfCjHsUvJ4KZecUJgEnLn8ZDpDQw55N2cB48X9mmVpinVd493U1p",
  "key17": "4HMXVUXoC8Zq77FimmFMiEe8aGy25DVywQvDRezbvaqeKspLrUqs2M4LWBqA3pAkvBPsrgvUxZPbVRfZ7wU4U4Qk",
  "key18": "5AeqbP9oXP3YuiATjyBFkexGaxkHBCnzHAVMDkJq3pmjDYWK7qej2hJFk9Jqt6dFXSLGxu2tFx58c9dQFuFPW1v",
  "key19": "63iJLesGbuoX2QQ6W3FNxWSyW7fFuCZpruqYtTWcmEmiRg1Yzws2ernWAvTC9He7XSeBGBeZ542ofJtjdq4VoiR2",
  "key20": "55ac1SyVUsdjREbaHQiVtDKyw4WMSBejau6tzrao7MAnEwRyRGqXSGrEGZ8QFqL6mWjEc4XPFfbGxXC86bFjeTDX",
  "key21": "4z33yBtEKcdYQc4ZzkLYdZZGK6SjPvaf6BEXRSUEQYW6RCWxk3SPrEMqsRipcJeUeMxrp4hfpcmZ4vXhPdzwkDNk",
  "key22": "5r48AeikEPTHMPXNm9gVFpihTW3nnoetNAXP58V2oe14Prpx5bkgVsnqk3RJve9fXk9mBeyeiMEufZcWGmaAbdsF",
  "key23": "3jj9pyAmMcpG66NVbFRKuA2qKiXKGCxWX9Hcgug1DbpzxtDcb8ghzXDuZiR5fmSCuh9dHqNt7dZjzMVyjnCxRfgn",
  "key24": "5o86DhWK1GFdFRgo35xGTcsPDKMxwL8oEx8MWjh1NjW5xcLEqg6pcBQgjSorTtGH5PQLVgPm9SCmcbgAUsiWHcU9",
  "key25": "iwB5VWTW6x13zK88cZoKBXvNoZFCBcfuJKQ5sgx79S4nJy6U39DqD7wgoEosdY1icTGiqmA8dxDikshbwLPueoB",
  "key26": "3UsNdQrQUchvDbtekN7x2BzTdQQPTx1aV3R9GrQpc7DJ3MVWTgX1faRdVyKfKYA1vBtpshPp8krLsUjYrMtyTakF"
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
