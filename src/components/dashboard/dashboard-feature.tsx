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
    "9ZjxPMYQpyQdPso4tsgCV82MrM93dj6Djun6brdzWKW4kXDCqnPy77oC9SUa9TLaF9okQeFJtaQBqsZ9F7dbdLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVK64LYH9cwqn878b4K39rj76bWvK3Ni3nZYWGg7y95sKGQ6xcZ4YRETsNwcyQ4mgm1vUusJAVojR6aG282qd7U",
  "key1": "4fdWiH7DZSUuBe5TgGfaapUg8U5y7VqiU8YZjxuGcVoYfk76fuengXjYTnTgxVEVR2bRXwmbm4dLbmWyPJnhNMCZ",
  "key2": "3zZZvrAK7UQjyiz8d3C2osb88kZEdjiQe2QBcwhuDzS3Cuzw2UgwLGNVKjhYwMr4XBZ1M1tJrBukfSS5A5xTsASZ",
  "key3": "5Wt1twbTqqeG3ajhbnFrCRsFWXqR1SvpJRuCVvjBDVnU4jdXpNtRESohT18XFsZZUcHXEB59iPjamc3XKApcDB3F",
  "key4": "32N1eFV5HXkRVTbH9p5acheM4ymnXtXbv9DVt62DgS88qTJ6fXyRWGZ5qp4FS4KC8dD24Gj5Z86ZavaRK6vSebF8",
  "key5": "2Qud7kATYJkFXrDHEtuSbQoL1AdzJwvAj4A8Sj2Vm8mkDNNwfvqBGX8patwgFgXRLRhSi7MUC9yMWowKW4qUpvt6",
  "key6": "5hjDfwr2MCYEsmZsG515FPTqxGEs4QT4AnYJYP72ocCo97rVs6Vzt4akdCJyXz5maGLYwF5q2phukHCC5TB7DAty",
  "key7": "5xE6WokTQbzWq3yVPaEYx8jpDCfsnrRDYJRH85rPpFbvKRt8rbnwCpwkuZAFk74GThT6sERCtn6Zt9wriUCoyqRt",
  "key8": "4w2VWBm9pC1vudJtAKgQtHjqDxjwqZ1PGgkSGXvRUU6aVaEcc7casGW4SDUYWARtS4p82ZJzz33cPAd7PABRRe8p",
  "key9": "2L35k4r8zUJGwsNy4qX9AQ1X4wpexan25cSYfZuzbyjV45AfY9vZx1PeJ83DRjhHa2yHJX378uZGXx9fBU3B6r4w",
  "key10": "4Gj85X3vqSwUDrT7kcNSjzEvhEY9kzTGncRPw1ccvKaSXRnBu9p6QwrjeFitXgXapw9ocxU1dSxUof1cXUsYTxei",
  "key11": "2VnRxZ8DtZ166RQrLxCZPS53GCLEpK7GNh6kancLuNTqAmnhecDpZR68vjJY3o5GzBZycqXuHuLJUtfWJSfG83Bu",
  "key12": "4ZTjEXJ23CTfsR4nT8K72cUNkTenALLuKjAa9Z93fQn7nQNr5KnobT8H8XpprQ84eaxtKyTyu7uT93unF3vCQkfm",
  "key13": "2LamVAoVDwJmzXXAaYHYkhxhd9dxNyNhXcJqFEJZcXDF4FHdVwiBnDiqK81nYKesbFDdwsMqx3AnieFQGRpxYrxK",
  "key14": "4QdAch7UQQofU9KuiuoK2ogKyUy4gpJgXktRvdsegkJrdkgjNwrz7QXrxGXTpHeMCZqiyrkZhCFV85gW1PcXFRsh",
  "key15": "ysDmVg3ndhL17nDcLFyRN7N3wDMccJerf2xNS7D4waSPBmZ3nU6ZfNZrJLtfHgCB5JLqm6Y7unFZCkrej1SRcxJ",
  "key16": "Eiu24bm3JiKb7H8TiNpwVMe7EogsSumXorMCKcQtiwbjG15hTjWzWVmGU51RR1faR1NwJzNohD26iPVTSytgqZD",
  "key17": "vJaboETnmngJ169pEj5nvpFNTgXnKHxipvi1gnc2ibatP7HbGtL2qqz4JtSdRAxx24TegENP8Z14fvcwiumkxbH",
  "key18": "Uh2broGv2hmFEKezcDseMxSS197UcwdwCvqy9n7XtDEjRA3N41FyNC6rHNtsFhgtSvDAi9HqSA9Zgwup8hpLYQh",
  "key19": "4G8DpBRhYsiAM37gXMx1k2RKnVhsxA6ob4fMYvC3azv8jCMDduVxDSCEA2n6xStcrffwnkVyqXonTW8mzpCRNG7Y",
  "key20": "4x1is1Q7XzR5WTP1YnA3zz2hwQPYq8b9ftcdqbe1ou1dp4YYX7rp9tYfF5KMTFBrfQtLFmuayqS358ChQfFWor8v",
  "key21": "5nReLEJcApxTQCK9DHvDZ9ZxLZ1XaWZKAPj7bS2PzY6HUrHjo4FNCt6zuNTbkPq8g5zC6Cs5TZzTEYcW5AVfRGP6",
  "key22": "9P6RftfWDpBtNST5LdUbKC7cBUr3Za4bF54QFB6jMCAchhRsW3kyKYpZiGEXZJvBNQ6N3c8UqQxEqq3uogCBn9C",
  "key23": "qVaefJcQuCaizNT8Gwtawski3X77gDqvo2MgRw6m2LVFkKGu6i2WEg4dKNUjonRogK7ndKq5xA8dTQXMhYJgfT9",
  "key24": "4nyZCJqhxY9quVyg3hnNhwQ43Ft4TSiTN2zZMtPFNQj7uEktsTq8mTZxQ5pHSA6MR3MnVunoRHyHbjvRjc7Xg3PG",
  "key25": "3k1oNyya1DKPjK7xyNFAhpUBWZuxiJ47R9L2wn1ZFFg5tQ1HpQCJDha9UMvTQ7Nm9jRJD3Y4jmpoNGU34urY3EKP",
  "key26": "qqYbuyAroEu7DboeozqcVftM8a3aCtu19D89oRYAcwFaoxViApz62ABZKCHFSnMgkpa6n2vjSQDbz9ZnFoiBm16",
  "key27": "5h4LNdykbysYJxTZZebaqNyBXZm3t7wCRxSoDCj5E55U87vQZuzB8pUaBiX51qQvMX12uVtR2UD3JvFUjwa9bwqd",
  "key28": "zVy545RiQu4K6jQPmf8wAb91KfFGW4CFMLQ3WQdjkV89haQiqv1RFA4Rd9wgTp8Lw4gEXH3UmCNJ6JNmtXhACQ8",
  "key29": "3YHFnuqCwsH9PcL847tVQGTMNe2VfPRBS2UVCDWYZuRcUKe3inG2xAKAv1R4w4xcGLH4mumdjYwBjpTUQM6M87QC",
  "key30": "5ux3Uy3aom84qKgQF3bHAsP8TFnG6oXENtcYWVgeMnpdNyZqBGEAgHn6FXLEgYRYRE57VDQ2kb8z6JtCXBDTMuid",
  "key31": "Y45so9axsS3m2Rwebgapx4UzzLnCCK159nvzD2W9sETbmM8XgWBu3SvoRiiiJnW4JsP49QxFav95MHHrXw4GtT2",
  "key32": "3na5WSVpAGtdreYwrhLyQJB5FQyYdBramtoPd4Ex48FYerXNU6h5LtkyQkNUuwC49KTRgrnA6afcgo4XD4RLpRHr",
  "key33": "38g8PvdKpWWeBVcMb9vrM79RYyVSwqnGmk5pj56Zfxhv7fghgsATioMP4Y11rGJNdTi6NiqifYGA2uF4HqoDmoTF",
  "key34": "2EnfwezZtRiQDv6r3KUagxsa6ebnjmHpPh6J5KwmHkykJtBySaTvwW5gkhhzk9KCLXkoXCRNVUZBmMyWZv7yiQsM"
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
