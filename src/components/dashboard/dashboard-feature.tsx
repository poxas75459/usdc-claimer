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
    "228hq7jRt5Xew5ymZ7ZzVrCNHvoR7ngJaWWaJKxVgXyhHL3SurWug1GWinJMrky5aEe7rxFRxr3p1VVp2xRjzmFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqA6MKUNSHABiXJGUDntcSd1kku1gQbMfeJasvWPnTUrw6do37k5UGNZCjc1z8j2rnArnixV9sht7W1Wo15S8go",
  "key1": "4eRWHKUZsofYXhpK68CMAvp96iYox6DFKcuQYZWjK7qFGTji5gcBQGxzL6CjiBvuFLM2ptnxoB6BgEH3myxjExri",
  "key2": "2uihtmZ3o4kFsfmGCh6sCSNALkNVTshGGYKXEr1fuBfAyW2Kc9U6VEeKuYNmtLh8bRLSWxV9Jq7sd6Epm2v61A9b",
  "key3": "jL8tnswS6w1jRQ8KeDcYSMwPW2yV4X23ThjFm8KmH8AB2YodZL1iuGKs1PKryUQLKanM7gK5VqveQcK5anXN45h",
  "key4": "16J6cdPvTgLdjJvQntiqQVwhJNW3TDsnKvW6Xqmi3YFx3NxCYiWNJHJP3oohyfZweXXAoTHDkaGsjDNBqreb69d",
  "key5": "27xKyBGuEgEtZt26mRtZPdapMHmsH8636SehYbzN9FD7boozX3BsypVGJVmUB8uMnhEEX9ztBLyQVEoQqcdBqrL9",
  "key6": "4RCq6UQ6Fdq3bVpRUVSmgzhp3u8bGEBwA1tVMt2dZ1K7DWvggCskSUzzN2c8omdEXButmfz9qwTzS5VzXxEdyGgQ",
  "key7": "UKzmr5dYQfiLHHtn2zRwuwfb1JLRnYzTAgZwzd3ex8psr8FxsWDQThaP8d1YGVcGGWDxjtjjUCH2WPDCVJm9QPT",
  "key8": "2VAr65gYohQ9PSWV8fgvmXomfyU6ckS2BCnPRdY94FMdgLmGGVz6WbiNXb6z9JRLmFrEgen1c14qAgJEiHnHNR4A",
  "key9": "5mkxApLg1u1mPdtPpXgUw27jRtDT4rWuAsMH4eeoUGcoSQSEJMHaVwA4SHN42CjJ83KBbpKxyZqyogfRj61V7ER8",
  "key10": "3qeiJhFvzoZ4WkL4ZdH8Nkj5Ey4x535SXyjkfsnRLyBgWoTooks2qfVhsbkPrBUBtqoBPSVG6LvqkCrLBeAb9DPd",
  "key11": "3VqkuAz3gUGvvy5dzhPc5cQH3Bt7SrEEuSZc3iVwYHRAoMsMXQL46EpGf9UvYkpHVDBoPBdHsdbrH3ND1ivJsYf2",
  "key12": "UzK2q94aZe2tKGgHzQSuCRAoBFARjLqvdbKHnUSUjLki2CaHVuv5nnrMGAqpzXBDAAaFAsD9kph2eAEYfJYtXkW",
  "key13": "zHpdmjeHNAYmc7TqpdaBeWMw6fTyF66Vns48UBxzbGXyA3nEz1m1ZG37Vsxb4j243LtCq8SbKZYj68yst2Adzer",
  "key14": "XsZmCBXJmQKfdZB1yJ2v7AxCnjLfbuubHj2TD1RHAcY2pHGLYSDa5k5Hmp3QD9rAGTwb3u4SsHJ1rywsfdrcFHu",
  "key15": "2GNrbT688xTLFjjxMiviwvecmQS1hrmyYj6jpoezuL9VbU4jpmTMVhU1tJCkmQdcHFHJq8qHcdGmwzp6ubtQgf2F",
  "key16": "4RoMRx4HBrNXPKCaLp2QPnw5Xr9W8R9rEFUdVWGgnfG2aczAqy8Y76xb9ESejrP88s2MTCnHieq6ZaWaY5boJxtM",
  "key17": "2ktq6Ka7Tm5v4wfX8qm23g7PrewB9SYM2bYWFjETnAKMcHeeMNtHEtQNzvYnXgQoVZKHFynb9xyHAHgDdgpd6fkj",
  "key18": "3FS3oYCvhtYrRrnAWn1ByjHrdTsJ4o536tkfrnY7dwWSTrAKGdatMdZT8FELBDJakcgH7S7T24qiejfB6oH8h4Lg",
  "key19": "5k1S5UBDNBHEjAsCoWs16GmDXUtRTT87nZCaqfApGK9ozjJp33AphfYUMNZdLctkcP3UWmSULKVEz5NFj7nLkcfG",
  "key20": "4Ym7p4EtWqrzPgaun74GUbQJCkBWRznzYzKXsKqkofRLW5SFv3ZYJuKycVSyxyogSVKjszi6iPbyFwDxdTLwrQwX",
  "key21": "5U8UVF1cYDGjZxSV86TC5eRRM2J1Z7ShvWTrorAZsdcr3BoEiH9R7KJRxB5gkd9SBD5zfM5Qig6Noptf7Y7cExhZ",
  "key22": "31b5ZurKh14B5Gv8FPnsKGJLFEDPmaDNDFqx5d1GzjUqu22Xv1Nah2YQsCQF5GsGxhuqs9CQN3EimvLrH589VhJp",
  "key23": "kFECEjX6Y6nNBjGRvFHng5KTSLE3nsjuThoGvH849j55iMpcNNrUKBaReWQaNnMBKgucB6UBKeryd1QGU1JyyBd",
  "key24": "3MxofLNs67YHpuyBX3kkMpgKmyg1PKD3ykiueahzcWCh7GDuBkMu7hKFhVWWkBGN7o8Dpt4HGcLjqSeb5QQeAHDR",
  "key25": "64Mw7AE3dJSbbRVHWfRqFKnhSEk3RFbEzeQjbKDUHRMup4hESqGiw1Fi2CEqF5yf18UThebv7GtXqZGFjRTyPQux",
  "key26": "5zPvskxm6wBpn25CWxqez5DEFdx3rbetco8jNLAj1ehTvzwRFbVyefXpLFJ4h2HcZGC5gkdqvxBMLkzbCQ4PBVd4",
  "key27": "1CCuXF6PHrJuPhix89t5TatdCo7MuDCMbpWaVocWHQRt7mPSypf7FVZSP7AcnJ8GgTJaX58qKR4fpb7WwuwrcJS",
  "key28": "2khA3kDgHqQRzmfJT4cezHwtTjr2qK6mY9ijbMmvGLNy49yxf8zvSa6J3aWTCTo5CjH1N1YRyzr4Vsqn2bxxFLh5",
  "key29": "5HG5Qnvrr4NGtzWsUJJ8GccF6LGn9Nncw82JGpDrc9gK3etg4XqoW1S2ko6JByyVFqiSFcbaXHVnhV4jRMrRCcAb",
  "key30": "7t5981fTdwYKj5fURejXjEdma2TNh82jZSBPKaQPUMz16eQPTwv9mGqPLPvnXoVEXtT3Qcb4McANgzqCo4tufhM",
  "key31": "mHvvZebiUbronLgvxYbPnubGtxhGuqXWbL4FdbFU5H8SNdLeTbeDkdkLt2KuW1NeC3cFPRjc4NaX47ZfA8a32FW",
  "key32": "49MZoUisUykjfgkPF2vBPgv4fB5LkkNE184oSWJQQJpLNDr43hZuUR2AMw9fEgYedhLTNmKHtqoXPzoowZMrFZ46"
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
