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
    "2XLuXbYo7HAY31qdPVEnvcV7E3MQBv9JD8TnfBdDjPNVuBbduN99qGbwpUxwogoaRyBVxY3MoUwjw3ZhXSrTQxe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W3nNn7nVdZ1nWnTmRsNA63ugkY712YWe9hmtzs7taAz6enzkbk7UVyoNBoritrpYUfd331hgdQ8eN1dGms2V7yp",
  "key1": "PqppCXSUVtmv1tjwrDuYD3NJ7isJjpzrd8vUN75KKgzkoMUkYidEF127h2mRJ3G1J4nMBvtNQqBwng1BjRShG5H",
  "key2": "2cjzsA4BKmnNX5HZiwdLqc3AHmAFG55ZyS1uP9ZNLuQczGkGXvSEkHAUSTdMBzyuL1DfAAcaTEdaLJXZUo8SkFE7",
  "key3": "pgKtGAhBrD8VzBZ9gWjX1caQ5AShFvDC6jpEEztozruvYfgQnUT6G7ynogW3L3GyEykdbgVtMNhCxgCjpZDoWwL",
  "key4": "4kXBAZjQorA1gEixXxeV8n3dnJpQHgFXW4rddANjj6mYXbEL1vhvAYeY9pgCo8cFD437JRBmcHwqHsnhhmyY74gU",
  "key5": "66XiqGnC9BmPDoQ66vPBRs5pvy4gE95Ug7wV8rwkRydpJ5qc8nf7Am6dWZorauWENbktyM8zZSsnct3fZgn1oHUC",
  "key6": "aYma5XeytSaiWziXnFJEf4XCpL6M17zMQ6DHB2EcxGuUiMpr68hCfSKKhpMWJQtCrEvNAwZ3caP7YKinxU2hL9h",
  "key7": "2eP7VeM9hkwGAyqhPXjWtH6jgiKWgdqzugXfD3kMoGDa4EtDZ3tZPYeBX1M957z7iMhiviEDYm4eesymUPdmnToA",
  "key8": "1d3ryRDEx4AxjftMdfTTeHBtpgccg5YnECKkmJvRMDmihLHJkB5XHVApDsP66D63Lp4FJkBf9U7yZjSMKLm9bsC",
  "key9": "2MCSrPX8rSwtC8tLRK2eME91UDBrEWaNQcaWH3pvtmpcpLcZuxy4jUncoPzTme8vLsaeDumykNV3LDVdR3bFMypT",
  "key10": "57azgiYeZ34j63LaU4dFCxm7aNHrNApYcmEDpqzjgZrc3dp5BdFXHnmHBv4rNvnKmgJ7hYpa8WppJGVk7ivGzHkJ",
  "key11": "4MtYsXv9xDC5ALKJrRM2SawTzE9ZramawymApxbMqNkydvpHF7mZaPRSUrdCzyJ8yP8jAJy2G1gwdHGtCe2Cf3Xd",
  "key12": "5Xd1sk8XyHMUHdHKChqjg7CPQArvMxoDcFLhSkJRtjCxVCKyVp9riAFW4wdbExtgzSCfyhFfrBerSmu6PFC1RJTM",
  "key13": "2wBm6XBvH6DYfk48r8Ec97iBuWMrrA5gR8GFU4eVEJXv7w8i1K5anRNXLFrjhu24rnMVeNAqKpLWnSA5DdcZrz2k",
  "key14": "5gQ5gSFrYvvmVTnTir5MMfEMheyY67vHrTuFa4aZnmyPzn7MXxcU9hHXA5FX9HCjY6SiPDkLQs4qfvkgTtmBkc4s",
  "key15": "4qvLXxtsT72vbRjt9jibmvoFRsPsDUkVU7nX38uYjATEfqmkTr4hbtF3oSpw3cMHxGjFfvLfjRTHpJgEctxxeFSM",
  "key16": "4qPPU5YE5RHSy1RYcHyRQ7fomMZhxh2isiAZ9HimLirUvyDvWQpB9mC7jBpuZmCRTrqfw3zBZ1ErDGRVizP9mwwg",
  "key17": "4onCECqH44ACykYutPDwsHRp4us3qXGux2NczcPrLo6iZr46fZ6ekaZh1KC546ZHJ77F4tGWjpYPREbDzXumDzR1",
  "key18": "iG7jnDwZqjSmP336S6m4HAETNJAUQEPi63DEBn8SytAs3ZxMrXTKs77bN468prvkYNEZRJwgQxate4KcgXFNwvA",
  "key19": "4Txg7Rh8HntwtsCHEkTrXW3dXd2oV3cGEKHJU6ERRhZE3NFQc5cR4PyV9nEWwbfZ8Dyizc6d3iEGKfCPV5TjQss7",
  "key20": "TysCkij1azuMKRX19B2QUXDz3bZ6pYSEkefKCMAnpYG4i6bhG4K4TXqooi5UXnJah3Dcg3mpvgMzR1G2meegEGp",
  "key21": "3xkFqCikNw1Zhp67f4eVN7DN2x4wcYNRrqF2Ccnq7ucQ4aCmwWG57Ls6RiVoZPj2KmQ9fGpSZbJo7BqfLfgEbw5Z",
  "key22": "5Vef135oD9bpKecEtnN1yikfN1muE4th41tABVU7bbgMg8s9FwtUx5bzuFVEa7bToiebChkZ4seoM3yk1NZroMNA",
  "key23": "BufLq5r18G99uzujjRr1CRLZeggeQBhxbYsUbcrQojEBmHQ6apKqUYGiTgcD29S3DvARXBjFqiw9H2rf3rSBbfs",
  "key24": "5gANbURm9Z6quEoYKxL5tm2y3GLpy4w6HHiqiV1i2LU8n34C3PC8LFdUWdx12CKxWYpMCNJi2KTnchsWCAknyKie",
  "key25": "5o3cTcGch1cKE11qwj86eVvzntnXfLQn37KVZ6BiwBSiv7Et315oYKVSRMJdnVxn9xnj4bvKHhACzXoBx41jF2pg",
  "key26": "26hbprdSP4jejV43EDCicMCHjBVsso3h6RaXxoiMYzGASnURZZvqZFYdBierKA6KCz7gEETNLim4QRGc4LCHm1YM"
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
