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
    "61fpKvUAxX3Gs6t6YJAc8RkzJXKenQisqfjonLtWAHLKbebMvMXqy3Jm9XYF6LTbw7TxmXCZ1tg7sxSjL3yAtH3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T72VSCac2bNk6eyy9bsMLPYZVzUWNhyRiABkuQX2GXJpci94UfhVnCfShAEhV5tvhDoAv4NUY6P2axdnvW7XKv6",
  "key1": "ejc2tHDxeLEsyBPgziGytUnqtdjVj9urELspSmbrBu3DcWjtWYWioiQ9ix2QaU4qT76BYzmmHSSWx8Sp68ZUDAM",
  "key2": "61neeRbEoeYLk3eoXU2VxMsKNVgDBrPeQvNJcCN1ZMwfuE6fhddXnzvm3HCUV6ugGMH4jpTjEqKKCB6boT9jTGRw",
  "key3": "1ErNQ1Rb5PQRRGSPLkwhYLEZjyVXRt1StqkFed9vrJraF9jy3amzH3BZ4MrUkg4AHBWdiHY7kUniUQrfrhqoKTe",
  "key4": "2BveEwvo5kZcwCMtEywVKy389MsJFTxNGNCDwZN7A2uo6HJMYxN4Y8dRvFnjDZqVt3o4TbmbQhPoxnmvfpt8RWwA",
  "key5": "cPagETzDBYqp2LsFRk1ogJ6rjYZwybpJwnfJkZSnQo2HRpnqTY5xnLxNaZCwQRGVdxt8ViCjC3y8tzpabDi95ed",
  "key6": "2T6YJZLpJSL62sPx5HhyLdDV7jpmqrFUpdU3UWSRWtyjUpSdnXuNoU52Rb75ziYVc4jYJNoizYaCHj761cqBQuNo",
  "key7": "5rd2ZMCapVkY4L9bUPTxG9qk5xrH9hsftj5VHBCNHhkgxAUfhPpCTTEp417HqH95WxqKLZcargWMRDQ5LXfLKDcy",
  "key8": "ZfXSn2i8Nq1PVkThMd1FmvaQFb9pff2ZEFK7wiqYBWK2ww6KQY8AswYMidygMThqpLqnGcYxNkxJcohUJdPzvd2",
  "key9": "GzQ27siJ3bvs3PJwCg8rHCdDKSGpVz5rhd9t9vAtUDDZZjf44AjWuuVuU1hvpNasLQw7Mzcf39dXgaT1ekjRsKW",
  "key10": "2XXoBLCdtQTkaxnLQayeUu8PDFAdw4tSqksRKkNYCAgtwGT7qYXZuUTACeUYQ2UwTBKepx3w7iDvY7Qu9qgGXU2i",
  "key11": "62DUALRjBZ6kpwbEY78kEN74tg5xDjgFfVM99a9sfQVMpMEtR4eJ1dMBS8nDEM59USirZexrEQX6W3FfX9cFbXDP",
  "key12": "39iVF34oUDp1CKxysCFJzbiHVTP79LEwfHfeaaYghjgtwaSaPDQR5PQ79Hxbmtn3kcutQigZXPPkNBHMB15RSXwS",
  "key13": "Zt9CJo2pwPVJyXjn82vZANCrJreSbswWAenfbWfYFmKxbJBJzUTMoUUakNdmscRAU6tK7Fkiapx8NKjnq2nvQid",
  "key14": "2ssyMu1DnextzWL4a5A5BZYsCwDXBc4N2ZDrEvBYJ9pfFo6nJbpfcBrVjbYoumwQwqDHFsYq3EbWMMgAPYGXVxLW",
  "key15": "4RqcKZc4FjLXbGCWw1mRESAk8fqmktorsrh284eFxFxREbn5SNx6FHym8oPn7aqXUKTi9xBPiqpodRQBb7v4cVrm",
  "key16": "23nPjXBAnLJwEsABCvvbPqMMsZE2uE4k8SbMJZ9sVmYisvSH3YfeeRkdVDYDZZyTfYVBvrMLBKe5AVmbAG1EEsqy",
  "key17": "4cCuYGYmLEVz5EYGJpNrzfrSp1LG9RNymEtLji7pUHsw11siBEEKuzHScS2tHFLU2kpYgxbLtXcwvYmEru5A9EMf",
  "key18": "3umqz4TKj8edPiKtNifZYBQXL4QfV9AKHJFNuac274VpcwzdD8Z2V5qkgqyaz5AT5EKLWH4tG9CvtUreqhGTBkUN",
  "key19": "49FWGHDmgmFt5TkbwkgMjwo5i8jdGEaGrEcWPfQZzLXqKaJKFk4i1KsQTEEW5eenCU7Ao1DKa2uP7MuVb5mJiQ3w",
  "key20": "2Ahp4pynnsqRJS4wvx6hKz58vHmTZftv8rv3cq7Guwv2ZcDqr1oA4AGpxq1tRtvE9G7wCSugvxCrjEcvsX36Z95y",
  "key21": "3vJ9g2EgZ53bWBh2KvwHSAWu8JBTR9Z2jQsvoa7C4w5eMKFh9FKpKMVK8EpHiaiov9UunpwqqN3wkKtzR3vjPzjZ",
  "key22": "5Hh7TJ64T1wu9d1zXt5jic9bi9q2ETvc5pvysAvQzB58617bny2dmb3zXWMbSunmTHLHTo6Rsk1fM8qHRgTN49Jv",
  "key23": "5r3PoHs3KhEBQuZ9xCnoAjPzPeUXJhJoyXpnnGCE3mo6yL3n5i88iUYWfCpEJbPDJohTNFoWuBFNongTmuZSRT3z",
  "key24": "3i3ZfZKjovFU8ABeNSoSFyRSuyxDj2cbRcXV1QxRQLFuHztghHviaSjkgqrrSFm4mPmTxx8aFvcNXeuLFp2gTCAx"
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
