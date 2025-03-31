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
    "4goUKfynrmQ4bDDDET1DLkZt7t4XcQxLkRtam7bdbmPtPcTpStjXjrMJ46weGEZRDeP9jwvnfxU5KvtXN9qZRB8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uv7QPPmVKp1YbaTeNJPvfrwLvGaAAaXw73ACpRuWoWke14CTqk5ZRxFnPd5DY8zhtz6a9XNRUKifVfHwUpcdh8",
  "key1": "3opbjXwxMKozenY8up4LvU9y72FMRatFwuooapYwB7gTcjBpKBUMf3fhQUxy6YKSKBDpVtzf5TzEM2BfguH5ytCc",
  "key2": "3ADQGTLH7BXoSZEdB9oUPB4dT76YCpiAryv1PaZFL9ga9tGhEUcZeWA5JHAD4Axnq5Nwwt79rBhrrFmw89Eg33Aw",
  "key3": "3n9fW2Rhs8w64uEbZeckgRBZUuk19nr3v4bhZTWWxPNg1JGSobXLXYUCUX6S8voz5ZezZqG9Yewp4N3Tof6EsdJ2",
  "key4": "24tUKekPg7hnixtb5UtcLGhojMMYG7PDLRrKxsd7tuLjmF9tdaRHXxB7niFjUQc9F4pkZhN5kRJAs5vjWnxX1q9X",
  "key5": "5kM2c9k25AWAs2ZUs8i84FDfmDaCeDTkawSdjZEj3gJHQck1qhfAmZhwE6rtswFunwteocVTJrTyqEzJMZwF1ZuK",
  "key6": "hnaVfpgbUWhKCcz1jqWHGHVf9ESb2hXozcrqWaBpaS3Gb7ZFHB51UZoYChFuFyabqsmbQckuEjzwaxdjVQfqc2a",
  "key7": "4UCPtXZTh5op6kcoW32e7QfXJG7k35PAeMKSn6mtDzme3RdR9LcVafJsbqYrs4Nnw8AUh1w9FUuGBr2pMc12dtiM",
  "key8": "5KaNQzVQYiY7AqM1cgKoNr86eXaGJtsBoKVu9n9HvKwzX3fyY1DUk7QS5ip1AVWSWwLNV8QmLQhYirMtv8K5ft7u",
  "key9": "4ActZc4P49qcPxJ1hWcPYqkNHPHepFZaxS7eiH7yL9SA6dbzMiDfnSSt8ysHgXzNDC4uk4SKezHRxXnzAmEKbKP8",
  "key10": "2efwBaTjsJkYHKGZx9BrRYuCDBanP6tB4kbmEHSwp6sEAQVN6fqQJ3aRAyjb3AVry887sHHBs3xJpDLmQHfxemdV",
  "key11": "3sB75HGfYUZFK3QYkxYcAG8qRLiunsLPDTyM9bMduJHkExb6dm7binKmxbDYUxaEoXev5gH384339PEsHAjUcGmw",
  "key12": "5DCsuj3jxAEkX9atPDcwUBRcqGR4QqBycETEHZaXerrtFx2vduVpDcB3L7SNnsMP7KE21CicrjjzhzcXnQCwhywp",
  "key13": "294yqh92iNXi6g1jcA3gz74Q6Qb8SGGWrPUVnD9e4rNzobjE9JDP5SnDAxYZhPftze5qgHgGSrjk11SdZwnFpAHW",
  "key14": "636ovX4GpYWrQDpBXbZasr7jPtTPsoNSWkGPkmh58wNyUcxyik8eSxLTFqPJmsdwiHSnaUFxUbtQNFCriSnEkpRg",
  "key15": "2m8U4Zq3RsxnyA7KxgBsXvWux4Hsui4w82jiCjMEPXpRBTkbP4UwCqWmghum5R8sR9zimaQyZmr5kBThtYN2CKsh",
  "key16": "3n8RgcJ5bTGgVRzp2bMmkYmTBFZUozXSi9np7bZh6yobKcYDMFmyESfLgqQoXDdse81sY9wJ4wuLtsCYC61GK4LF",
  "key17": "2YMVSF5obxiSBX5n2wBKqCPzSKMhvjaApuFkrvDmU6BhE8YpYhwpzfF3JsifJCFv4Gr98a5yVQgD1q2brrLyh8k7",
  "key18": "DEUQPRxGDRRLeAgpr8HdWzRR4BKgVdxTXW8zqC5E2p84VrFC4DnfU65fwKG78eYGentmuRjN6jU2NnmZsaHeRZJ",
  "key19": "2bZpMaa6qayjBavZRaWFBgv27P1EvJECyNGkp7HBA1xKPRdomK7QKQ1HCipWsfDUyo4bB8nYknvbLKz2zTNvcQ9z",
  "key20": "2gD13FBRxbDZjgJ7UKEjWCu1aKHMJ5SSocjeApWWdHMnyo8hPhk3yd32a7iA4KYAwSuVQrwCvoZGLrkYzwiAyoqY",
  "key21": "5V5xya3QzXTFeAbQqjELCrecQSf1dH2pxHv2D6NwKsmh1BftduCdG7wru1GgqFnjBYCwXGEJR2K1ok1LAD98bCyG",
  "key22": "3EpXywsi9meqANBz9Nw1XFSBB6zL81eGU9evXgmyTVq3iC1mNfP8mxEuQJvNnVcmWEGGnww8Sxo36Z7hjU8ZB834",
  "key23": "3EjMoT8N7e5mUYrNyqi3SkMTeXTfoSSg3KL9csXqsKZ9Z14ssP6vqGEtHYAW7smW7mBuRZxahP47kqnyz5nbPTii",
  "key24": "29K2PRXyCiUxXrgNNttrAkjiV1YFaz7v8gUbBTPD22V6bUrmEHUsx5zPRQR1t7rRVezDyPDeJKSQjpDAeW1EcFx7",
  "key25": "4grhg2tN9KqRJgkbzDLwkhoJL4azLZJ2EWAvbgPbzPF5MuZ7ysHWxvA6BJoUAaGAba52Yx7BJnCVXTHG549rZanE",
  "key26": "LkkQH8VGkcAKeAt6fEyQeenRC97C4yHHn5Ua9Avn28DLMh7yJtV3485iMWySVPTsFFGeFMKd5aLMAX4GoWnEM6J"
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
