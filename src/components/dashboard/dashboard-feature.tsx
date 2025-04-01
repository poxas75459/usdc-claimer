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
    "3aPXwJFLhGwFET3sPHxHNEj9Reqn9WW4VXqGUthZkgU9yJ5RJfgbZWjxffFygw78D7pqcDhaboAip4ccQBpqZPDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zosk86h5zzABwyqqDFr5e14o1hmQ9ZwE7aZosFjeEwEs26CM9EboYnPpjqnhKd8SU6rPcsBj3ghF4k2Gvf6s4qh",
  "key1": "4sBZyk3BY1iwz1YkBkYKxh3g65UUo3EUikFg8r4KEX2Gxm1Fxz6GddexTmNsM9vAY5grKS986t8jkTYMnRvRffGY",
  "key2": "2np26Yb56JW99J7pubanmCe31ERyaKQmbdCnWvSDxiR5LJnr5bnR4S3vqHrgp9x5yWX9SnqE5UcUJKZezzFn1TXy",
  "key3": "4nmbdKrvBLFDYzhzBa8cZxcwa1MUySvRu9qVzrydaf4UdzjT1wqkBBknH9jCRF4moqz554G5cg7ZfhS5iCx5mCUi",
  "key4": "27unWK2T373pu6qKHN6ay5ULu9afmKDe2okmDYvqvJt9Z1C59iQRdJLSiadj4de8b6SwYqySTSoSF82aPbs5hDRm",
  "key5": "hMndJk3LHHM8LjFuHvKUFoLKag9rZoMrL3G8w168Vvc7wcHiJV2DBQhm2TGXjwmzosLFmVGB5ADeJpogdPh7TPN",
  "key6": "jk8ZbCend45YUjhraChLhcSAjveqEvYYXPBibGqMd6N6Zat8yUkMZkgCKEKtTqpL56vnwQugogXpKMRMAzTGY7C",
  "key7": "4KVVSf1yCGjxjB68RB7jo15Qbq1ngRPj59FD7t5E4QaCz2UL5FhSu6X48Sp7HwZp2voPeVWRzcbyxcghZCdiYbQm",
  "key8": "4REeH4gt2Un2HDkndU3fGFPTmsEvdNUnc6tfPFMWKoHbABacjHWHzbC3vdyrcaE4kYBP5jQ5xq9zu78Tzpa8SyCq",
  "key9": "RnwZCtFGj68LervtL66J6e9N28qrGBFA5q1EtC6zpahse5mjFQ1LDozEQFjjffpUXUXNuYo9rSj3F6HxhQbrk1E",
  "key10": "37YjLTdx1b1wzpM4yFokEqK1c14waTdVCreftNCdPTH1bWuCcQpEqJdDTASocaJToQBnTeryVYujpT8kh3dMKdAU",
  "key11": "5uSEZNDY6q8zYmFmxR159onc18mtgn66nCUEQR3gQi2de8bSAAdpf1PG1SMoAmNSeC4Ei4H5qszpLWVH1jFJyiQg",
  "key12": "Q4g8zfUzSvwJi3jCf2PC4dd9ZtvrSwRzTP1VLVFkwvKL3JKFiBoxPrjKf6qxoyGE1gQHRmtHBB56LQdxw3iSgR3",
  "key13": "5vc2XaXzwAUQyHoeUiBRJFbS3txntoUqcnrwakmEwW3VfqpGPvE7DcUTdw8GKShLrg115MNxA7D5Dm5aUT9GWkRb",
  "key14": "3U1uwMi4Lv3nfMyEpgUFoVM6ft7Zg7XNDSyMAMo5qk63xyQPQVjZzgg28UKxBcYBoC3hKfEyiG8cKxmoriexrPh2",
  "key15": "2ecGXwAgsTfs5myXJ175UoZy6oUFeJrbjt5e312L2seeyh3eCwiRZczGbX9ziuzeT8GFouLwt2mRwRcH1erq4crK",
  "key16": "3tYgKvdYk1TJz3n7u2PYftw7231f7VKJZLo8VpeCK6th5p8UMArw7kLoPUdRomri3bCvqJwtjycxdSE7NtdJiUkS",
  "key17": "rUMRmuairAj3axQW8eVaaacWCM7dAP8kpjKo13iCGT5r3PCgnjofwQ1szGCkoiVays49jtR1WmvmTsrwE55ui7D",
  "key18": "28pVDCg8cipaAsmDXSaz3XagpaobDFPjBgWjAmrL3PXDt4U6m2Ydvz3kbHmDVo48bB7n8jLWByv53FzHPnQLyppG",
  "key19": "2LCumF4DbE29otNpeEvuajZN315thMJeDKZHN9GGLN2KxosFPdz8pZTUCot51Nt5BLtPJyWFdwmshnoU7powaX67",
  "key20": "3GMum3ZZe5e1oaSDDTgmQTxFdUK8YyJhiUkSKZD8mxTDzHCF5QbcnEJtSus4M1TTT2PQ62ZHTWHeHu4prF4FXfcM",
  "key21": "3MQzXdPVGiMTFeyedxdN5Z6aRmvMetQR64MkXrzfDQgYGkSNQfWvs5YM42ZWKZDogsvHdXvr1a8evAJTcQ9S4PTk",
  "key22": "3LZ5SATJksJv8ARfveeVQa4aRB7A4NbJarsMhB9uSp6g8hFaqYd5NUUXNaNyUTXsLSg4ruqrsXduFRre89pXZcav",
  "key23": "4kV2fyPSKeVGQB8iN3S1C5q8Ta8YRkbJYeqH2kbiXteFayghE962jpcmTVcnzcChmvQJDGYrK8HX3cQwcCHKYT9J",
  "key24": "5LYZaURPKvUEqBsTYuCh96MCj9sW7r6dmwixL6TYEjK2EeaptgRs76eTAbAAQmjW89dZNAfQPeC25j65fxY4WERi"
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
