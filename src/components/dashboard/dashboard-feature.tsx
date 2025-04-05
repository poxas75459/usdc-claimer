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
    "KpyZuiNKtsg1fTx2GxeQX9qC8YF7MrFvdCtg3yVSw6my6nFmBKbQLkHeSSZ3855dh9swJtUTLXnUQWeoCN9byzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykcWeZ3HCjoZK5pRD7eq2HfLtM44CubufvrmZACevRgg3atWiVKiCwoN97ittdDSsKwKNxvkKkkG2MEMbtBnwut",
  "key1": "2dShZXQVpanaRychHC4fzSQ8SQX81EZRqDdMQWjPvfADn1DPs3aiBBbBtCzt4aQePbTobvnTVNe6eBR5RTuXvgqK",
  "key2": "5NWGSnu1cPYiVYkqRmuyuQBtSada9c14tHGT38quwYdzZwrv65GmKQ1KT4G7pnZekm4YJpfNQnrZFmqHqn3HPy5V",
  "key3": "tqzgkH1iGFusmHitU8jMGeVtQfPDkyxL7qoAyfWTR8952NJqtDtDxPo42uMsAoNDixgmY4js2sp1euh7KswFMWV",
  "key4": "27bxxix9wQimFZhDH9wfrYRfXVpk4gfj8N8QkiTynbwka6NZ1wyXx9ErS3VQh7cCmQqdyB4NPBqhTZDFgNAG4RTD",
  "key5": "4DeBMunxxJ6YkczyZ6EALoQ95xndqH46eckXrMv7tgZ3LT6DyHDSqhNfggt1TkywVzwPS2WkuN83ghcmLvnySuFU",
  "key6": "z3vov3xq2kMPrFW4TUabmwPWFMXwpfHQn1VZXrudPa9vtGmnH2sqCT7kdNhvifC5EDe9FW87pq9ZmACsJ9hwaiZ",
  "key7": "5xqRGhgvFcEDNMsdw1rh26S5mLqnVPRxyc2xfkdaqPoPWkqDirjRgtCj1mY3JDX1Y9BuEtLsnJ1EsW4hJUciNvzo",
  "key8": "nWnT1xDgfeAZN7BE7xWQ98YfrgCas1eUMB6m3PqNGQBS8HLxdDY4GHH5w9g37bS4FwNsxgRjLEpVjHWzVZJudEs",
  "key9": "4x22iu5N1bqAjZU64cP7aQSDzxh21ePPTaDLT4dwNuat5ALR7PRFXTDwoMgsK4VqJRUsBmPS71Xdr98YYu844WRr",
  "key10": "2sQbHHTkaPdPkCMyX2UspS1R9EkxZbGppG4x38cTCS6HmNpdf59DPsC5hDjbdCp97v96ncShoSoCtMSzUYQsXiPy",
  "key11": "62ytofrgEjJxMa28NybE1zQTHv4nSB8LTBqhgqyD3EnnVuDxTGM1UUDJfXEzjnmnKqNNbHvt2nUHXguzm1C6LF5a",
  "key12": "85m29GcVnEK8coxyajjvSZc8X3kq8BqLG8mc3TjsyMvGnEvEhkn8VrhZKqnnSwi82MtDVVWdwDpvjRmDqrY3KEG",
  "key13": "4DXJPKAxxqh9xfNRsN8ymXxRR6kctCKXR8tTq7piYk4ZzcntCuLmHkoHGc3sPsK9eXmb9RkziRN94BuBSgD16vDS",
  "key14": "5bpcRwj3XyVgPSUXLuq91Wm8zLdyrhscoVvz8xHVu7zAUpjkp194szezZYb1MiiEihfxanYHcZkJK7Ya7LS5EGH9",
  "key15": "2uE6Lt7VE9tCypA4xDAqNUxL3cDPhS8V3HtWfAzTH8knTPPNstEE5wKfYeXuKv1UfWdcQT6GCJRu3ZTvb3yhDL62",
  "key16": "5yGyVodZKTtXwarU7zc8sQpMXADSvi82Fr8usNXLtmZbweWfuZns5M9HF6fXSv4TqXtiuzA3FL3JF5962yg2djWA",
  "key17": "Xu9Ga4191n7nD97Qxazu6CgJYYzFpRpSW2fLCs65RdQR13R2beuwm3NjobGYK8MziiLYmfq5HcaQmo6CzXwZv5F",
  "key18": "abxaP5ieq3r3EPrQ51xKB97sJKqfznWqXdZ9F6V7JXHaipMFQnAcia68if9DScg8SkAX6fuUVt9YgAWGfDKjpxD",
  "key19": "4yuiZNN8zpX2b11UuEjjZtFmd776g61gchEd5xezswgiNiiUDkhYEbiD1ZU6PLARmFmiUyhv1iBt5nvUrnkrtE7A",
  "key20": "4pJXdmoCv9UaekmmHB7hfHDgCNDXqcALLevDu9aVwjQWXsTqTPGSHKJDXxpwy5RPwhkn3BEHWPnRcE5hUg8Sr2ZP",
  "key21": "W6xJ9dGFM1ezkEC4hDd2UvKmToBNXMk94WFCU5xdnFzgew4rHZTXnRb5TRss7RZA6jui81tTdv6RSxyCeXwUtnh",
  "key22": "5AKLeJAatgcxgu7SuVHm7iUatoGGoLt6yDjv3Ks1g87TjzCrqBabe9hE8YD94zAbGce2MN5SetAJ6s5vneVfiENh",
  "key23": "2CBMAukefsAwwFoT1Jb5fAZBJzncuhrFBTVUfH3P2RX39EqmdoazbhGACq1dERArCsGGg6mgHvYo3hMMbd4XFcN6",
  "key24": "2CyzGw2hyyHHtYKAPnXqJ3qGpAvht9TMtYsfXh7Lj16g8YFvch9keWLiZaN3EmNeJMjRsrTukxW2TAFjJdGQQuMa",
  "key25": "3SxcSkQw8YdaKqfRvKDA5vBKfNysGdjTwDA8tJHMws9PNpf2uJZwNoDNyVZCDC9RwwJc2U8siEq4N7vEa4WuFup2",
  "key26": "uJfStZShkBQUvaCRzkZ7eYdLcBk7WEv6i9QkJU9WMev5bRNaNMYGt4h5Euv6Sa2g3P5GundS84Pxr77SgBCBdU7",
  "key27": "2yG9sBER8PPrx5wmBZNhpHEkYRhRm8qGGfLK7TieLw1z1LVDad6UNZnEeAMtHLWEaYCsAdTYC9oZHUb5spTPD6Dh",
  "key28": "5Wi4nDFfPEocFur7yThhk32ynKY6jDDEuyVdvgR5Ej78jcss9r7KwR4vy8eAJhbTRLbtmJ6Um9f8c79Xb96VUzgB",
  "key29": "5kNDP3VSQQw6dFkjFoL6BVtDACntCvoaCBYt6SxBS76SQj8WqgHPea4g3cnB7Cj5JkK4F4i3g93GxUNe2f56pnDP",
  "key30": "2HyVaU2haoWSsg3kMZKm2iGWEFmM7WroBE2KfRCfZmFX5zrUiATzoXFhbUsWCrQMJg94kmiDgQMa6iiHp4LztFGf",
  "key31": "X3ec5o3sv4e1j6gqDXSqUd4jpVNNZT2xDRCwH42gvR1pefZr28GGh4YJnd6hhiXcUeaBwQibM3mwcJMgSbxDuv7"
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
