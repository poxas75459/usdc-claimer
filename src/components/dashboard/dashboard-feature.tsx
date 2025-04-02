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
    "3mcT5EbP6qkUm45q7kcqsrtwjjwQQjarsZiK44QwDAnF3sFWRirXHhF32NCzQ4d2S9vQsxhp2vB4MoYZGrcrMnXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpT2AySsCvV8EFojf2QUsa7URqYEq46wM9ctZXLnL2tjpWogoJfKQrUAXiNvX5moYB4MFH66rCieyuAvRMEeBWo",
  "key1": "5ckecs5cC436G72BFPwyo74F5EdB4fGVcxaqPV8Vx76LcU8AgjiFoUwuncLiEnopgmFuchAzw2fNnwAe3LNxqZDH",
  "key2": "3u2fYXcLa1sL8Ntbrw8x17Jus7iYVqEmNwKMDtDo2urgtz8jeXRQBTY1as5yq5XTKjtsRSQHvcCodGmB7dt4Zv3N",
  "key3": "3bA3RcAU6sJEk5bhUHjNqRVFpvUTJvbR7629RnpS3vHfsuRxtrAvQGm4yxRwEFtLWtzQ9nuvGzJ2FTy35oJQ2Cf9",
  "key4": "GAtEd95PXx5xsGdJhanMuxDBjqNSsVEoUPgBhioaLRkjGvqDX8dFkApX2DZoNjwJzLCHRkcCXfGoU67n53EBWiw",
  "key5": "4tEmnnSJ9cjVT7KCoLu9Zeo4ELf9VsJUVva7CHF1TaqfRf6jCcgjAuAg9Cr6Qq382jrqFaJq647NxjN1vGLcLWnG",
  "key6": "3unkXfCCnuFzAKtQiVGvV8ijRiCjb8GJtFXQytmEaneHcEPnmdZowVHn3HnQfFcrPL3UfH7eSQ6i6eikdT7mdNrd",
  "key7": "5FeNu5Xwvjrg6BbKiwxgtkBXUy98A1MdMxQwNfSgK9tDiM1EC8MdEPvS3fHCu8TvnJ1Tynk5znQB2yGfR1cbDc2u",
  "key8": "5FqPQPx7zAELDvhk2dJaoLY5cdL6BRsG5rkEoTBtWfCQCHCdynbQFJ5TRH31vtjqzC4PjWd2RYxjXAqHd6fGxbKb",
  "key9": "2zRt3oWHNMnBvQjUDqJXxZswYG9LquoKRmsxbgYkQvnHGAor6ERy8SR7P5GBwoUnzh2mH8RoER1mBZoxRHX3vJ6C",
  "key10": "34Siez4TR689xkT9329278c8EstJM8FcUnDEnJtusnPkoEzuqtNKmY2MMbo4DZQRaJNZ8hq959dPpQBcvAdDC8JB",
  "key11": "5jZT5NkGoqn2tQaHYc1h269rC5zxpSHiqsZPLqrR2NNSZwQGnQpnfTq3CZSsHQmWijQxEBEfNY9TppeUnij1iaz9",
  "key12": "3wkm4bxVDAP9VgDgGJqe2ckdwA4RcM665E782ZrGcQ6UNxAyxXW6GT21NxDsd3TUmWp6eSXSkhxPxiKM9i4oKKfn",
  "key13": "3kUdFJjxvVdopHgxZ25TUHPKvWr46KhdCbKzKkKLHBAki6nxWSoLu5evzPJdyfcYv1DVX1Ym8uxTwguAK2YsSALv",
  "key14": "5UTe7g2XUUQpQQ8bj2HdqVwoqYpA8oMYg5RwSy6fV9iotKGHKk6qXAkV2RHYC8pLNxZp7Vdb3oXZJvAZ1CvYrdHi",
  "key15": "2BMSKt8StHwC9fh8LgvLAKJ7SejpuwFdmLqbBhvGRfyo1GHe7FjBcUa24ksWHYdiwMuBZj1DUztojQfvdY9n3M4u",
  "key16": "2V2sGGxSmhuNLz9LY9h1aWkL8tLjPyTpZwKc8VmKgpRvhiEfszKawNBG4tY2byxa2nzoWgg9Wb9ixXbMgBS5nQd2",
  "key17": "4VHujymfmLF3xvXbVfMYMH1utKrM7m2kJN15DNjjGf8Vj1jfxdUgmk5VeQTq92pafpLjGJQAdKgPZBPYoqXcmZuX",
  "key18": "wQwMCwufH9r75HymZVocsPRCP161suzqGAjdkTbkW77XrwYFqtQBssUAvbiixaGnRCkQfcNAkMX2LfbPQJ44a55",
  "key19": "35A2jzKBAJJ7yG8djy1o8Q2XP2aptms36Y42QvzrzCv5PoAEG5NEx34cQu52JZ49D29p4VWMN9TXtpZnmjeBwdRH",
  "key20": "NRutbndUGKKCxV7KGqt9JRvmtcr8741NMSPe47nyaqnCUxyAkgWyHqVZsiaL9ndq1hNp9UCUn76YUzP5d7hAs4m",
  "key21": "3rwmTXQXPxZA98Fs82LUxHxPwSA6xDGNmJLTor95BR7g1bxgoXJYAEs6JcFehtvStJqUDzBpnY9DLM6dVicoU9oM",
  "key22": "wMJkabkjV4HaEjz3arwJDzQ1qx4JwSxHy2pisttqymMtryQ1KhDfCZvdj4yiQhEZU6nfEEhYYp5M8b9SF87U43q",
  "key23": "3YkRod6dJNbDRnFdA6H5PxNDU9Yf42A7fXPxPo3hHGPNtCfXej1yz6Aa1qB8gx4ZA9rPGFnS9zTRhTZ6vQfSU4ap",
  "key24": "jCFJQ2iFvWUFub6nZ2B6bFwrWS5tcLYKqnH9XWDaYKogwYCjeKQDEJvW5YNaqzNsC19CBtqCJU18PUGwESKTLSJ",
  "key25": "4Ygr9YQkjiLsg6udgdjKEJP95MFZgDLYnJw9fJwwu1VZ8sbRAhKtQpcthhJ4i9x1BDnzZYhgsVPHdeREpx4bsdKV",
  "key26": "44a5wxU4iV71BFdTj7kGnnawJQBF1EpjaFnE12nv7KBrWHmjHM4vu3zFxrKQYjf2BbuYSYg2rVyYEiSg7JtX1n9r",
  "key27": "4i6Zfr92UgxLDgwUC4dpBcQocPKMPLi5cs4qxBZFvx1555BvNykNzgLsUkSEGZSLmSbh1jnAJgsowycyo6ptTwGg",
  "key28": "5YGAatWw93fLqdnVmgXpQE91GUtVekd18PYhekfPHCH3ZULqyP4Qkgpr3Nh7naXYRx9DByFzbYrfZvzLvKT11ua6",
  "key29": "a6mU2GDCBDWdrxaewkAHUZF8VXV89UdrQT33TrVrkcyebNYRhy3ZWTcF54YH7jnmvAUydZtQZ4YkkoPuhGU9kEz",
  "key30": "4EdRvK7z2k18BtPW69wq98v2AiBNHLzQAHfSXAtdVheduLrw8zFZfPvud2SxWqzwwcHLEbyznK1LyDE4DYStewKE",
  "key31": "2JMHVHwdbV7PFXk9JJjZ89TvcGnu7BpSAWc2zVxUX5pBrs6fcXdxbTg6jWxPZBuZrjnniEVJvz1q5eCJ5CN5qbhV",
  "key32": "dHMasfLQro2RiKoSwHz5m7Hh4y2NaCjQ472YcgsvET7AhffG334FPjW2smfjLbbxLEbDaz5YREV3WuZeT9hhd66",
  "key33": "4KAGpuvjRYqhJh8voFtw4M1EoHzA4deuJE3zfyZG9r64k1d3imuKq8oBMWpP322Zn4a74jhhuzcE4eEFS4r2izju",
  "key34": "24F28C7Bp6yJs5eBuS3DBVeSfMhsUvhe8sG2WL2eGcmZq9URRtR6otybzMgaZYpYu77nVMhdyTsYzuB7cUPjLTeG",
  "key35": "3cGkLsoMny2rzrwZ9XoqkzeDG6tWNhvRin3qyhbWcZhjP4kBe53M6Uw71rEg27232aBSsBkxH7edVyjE9tVm636e",
  "key36": "5TdfWty4FPLyUV781WSuEBDKV8qjJhuYQ44jz7GNEunaSi13F2kc1prd5AGx1RUQLYJkrWm9ZR9d8uMSBxKfVFud",
  "key37": "v4aYTuDYN9QdtsgwoSXocmMVwFpFpVT3atxxQXNeJ1RDnhwDvRMg5pU7p7rsU1TTq6b9AchCSb7d3dFmtEfCEMG",
  "key38": "2Q4yu9SfkZnVnbsxcFPNTvSEQ7HuPTi1matjUUSMW9GZ65PFHtNUoZjt8qrTxav8Z6gNgeAWrxwZuQJvuq6c2ejx",
  "key39": "y1XFnsrx4it2mQha8Akq3b6rUwc5jarfrDqejhu5PjMq1SuF7USj7PygkGP97U9XwowDZPXpG2naXPLjweEwhZ6",
  "key40": "5PS7bwtjHVrnPtNS4sougWeXk3k8tPnLJrvF6K6av83T5cnokPP6H4Jqyj7zpv37KcvawArHuVmTfKgzqAsn3BGB",
  "key41": "62nCbtj2QB4J76HDJUbotg6iW6dk9NTZt2reu5BBWwEUzmJm6Jr1Qiy7DQgcQhjVNg9jN8dAtPVaoLhSawYZjHtJ",
  "key42": "5zzageMquEGYbRXB3rWLMjeL9Pomd1pLwWtbvgHaKWyorEDMVJiv1SzYC3CoaNj6PBn4237nzApEX7keuMy74zk8",
  "key43": "2Y674rPoh6kkovGwyF6XYsvKtrn7ACa3cGNhFSsZiNo1dVBNT3D5cqiTxkpmEhByAKPs2tfL4efNoNgBN9dwKW2F",
  "key44": "4VQ5xkUPfhG7FPo92r9HcHJaADJZoPQXV4JKVwnjg5WV7yvY7Q47kkVDBx6uxkWgxua5kxQ5Gw1g84g3BYL5Dvt",
  "key45": "58A2vfpj4g6kui8ep1Tn9FZJqrbz4GdiUqLBnHxsNkbgeTTGn8bRek17xAGkU5ciYXPfMtWAdeqCoYPgNxk23t1G",
  "key46": "5fdkbtnxKzewFbXgBrFkjongCogiCqqyjHuVMUmrUhG3Ko7mHmjzSgLtcnao71dbnemEMWoDnn3U9Qvzc3SaEoP4",
  "key47": "35Lo557WT2dnkqbvF3n4hBJY1i5KVXxgFyH32cnHcHEge644St4gDzwY3n4UMWmRK9D3NXrjeLCbfo7kkMbcrqye",
  "key48": "4wKeVPxCSrvxRLwEUNoieyCXv9p3Jm2R4vMqbqvUbTxHyL3TYvMztem1cFJ5Y3Dt3buDFRJYsdRG92fMsSHzEpwC"
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
