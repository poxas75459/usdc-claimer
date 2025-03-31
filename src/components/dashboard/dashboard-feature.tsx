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
    "3Gmhnt1dY62RH6cEycWGfGtTLTmA4Q3b7imPLNxigADQTfdTfPewtZkhbHZ1ozDPztNDhWdzarbH7fiPm2KY8EjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuREsLTquM37kK5E3dWvdi3nVy4pm4BuALh63GZMHELFEX9VKG77iAFbf3D2yhY5HJRU8muX4gQw9yZroB4t4zi",
  "key1": "47VufqEbhgKfVz1qx8fbh72rJcmfNdM8D4tu3uEAz4SW8KyJyuiWn8mPnKLqdjqBxLtMeSVk2H8n6snrunnKs9Ph",
  "key2": "5Xt3SzephZtdfpgYPQtp6qHP1vrS4fLSBQ7Fs5QkMEvnYMpDaD3V4HK7sfbQGxA4Ty9oj1SZmdMchW35eajpwjDS",
  "key3": "5i5xHBnY6ngPZLZRzsnu5Tt3x3FAi1Lid8ez9SR5FNWsNk34rvu62vZHRyqmdsWhNAgecNSMUKZbvNwNRKCNye4p",
  "key4": "5NDBW8uNrEnSQMRhDbxFBrb8PCKHtsDXQpgJDGukcPGVmxe5yAGLjMhuV29gvBnHMwXFwN2VrickjirtbYV2c44w",
  "key5": "3GzJvDzfqTWusNZ3RHBL8GxhmL3tYeHyehfCZJxbALYTnC8buv3T9ubuAcHTbE11jqBzMfU2PyizRwukKxoT5kPx",
  "key6": "44xihJZ7bAxnQedDxV31LY3oAj112XbbHU96RjEpw2S5DnxXR5pB4pY18ZPUGLstkJnigipGNhQy7Qysg5M3jp4w",
  "key7": "2bVix39AGpPsdc9u3tsgxmgEFXQwLhZPid2sfjLBpovDSsMLmKDH2bzyiPn2eG5m293nCFdg89voT6vcHkEYiudu",
  "key8": "3tjrwNReQwV2GgeaZt5hnatY7bJAywLhJBPk3u9YZZRPCj81RGHmu3FGjQjmzt3qW9kkPowa1nxbY4S9QUU4kb2C",
  "key9": "WCrn8aavhQ5LhGAEdyYQKPgjwTCwYGpqDLQEto9EqbJUwkCjmtBLv7yp8oRSF4aoGFLmS2MKJXMkkfJwnvdNycH",
  "key10": "4sjQH9ZBx73HkyF9GzgjeRJyybJ9SJTXEW5NWwf5uBfdTCUyc49zizhcuYfY78EDjVGVucuqqcG9J575m9FWz9vj",
  "key11": "44foPgBiZx5oti1PfGDGvkUqF7Ua1oztCqouPYkMgdN8HkArQYvvuuiYRXJRshhf4k1mMzA4H5g4EmkxcZqLPPLH",
  "key12": "3kKkH6DoV4BE1gxTni9yPyEqfni3aJKXdsJ4NGaPutVNSK1GAjxrMuoK2m5LAYeFvLdViEA87EQUKfxWkFjVTsoJ",
  "key13": "3Bo2BCd7BGU1gYkUKQcTewLYbCJSksD5xRjNgfsGt5eUrwvjJR4iB7BpW58dbHY8u92NLYEADtyiBafEsiNAWLKu",
  "key14": "5fxYhoaZ4NukB8EbEYsJV3hzs8tyDDhEvdGuazxf7Lu1aesYxDd25qKLj39DHvpJe7cstr9QxDKvyD6fu5TUNhs2",
  "key15": "2dBAMkLAsHqxZHEuKVi5qq9Y1xtk7CpqbgERPqy9fKEfKenmmUpoNCE6VHxXHvG4zBzg1ZmTh3YXQpramRVeabSL",
  "key16": "i9UJddg5aQf5Gsz4HSd7MAXe62VBKmB3JuUcaUZvWVxHbXkjPCrHo55oGArgrY4ASYEpQA8QBY4Pik6ueWjJ73Z",
  "key17": "3JNuJkJYM87EApdsMummU8kpKJYs2wgBEFjD43hobRvpq3i2GuUyCJY2C6A2FgyMd8ntKFJG665cebEptA5FwZRF",
  "key18": "3imfEYcWCsBxcwdA9FQDMAwizkdcCASvuEnz9JSDF1QyVtaNGHrWdu2477TJPhR92JcVLJgeB11b8h93ucJ9d3aZ",
  "key19": "3USXs2ZR8cknMMrMiyCjRmw2vmDgNzULGWAQvatGqTvNiVr4nEDm3hSteRtby4rdGn676KDWazkta8DzbnU55Bv5",
  "key20": "5PdW6kpJ8zFTQHquiq1zZKRmvAPGK6nwvU25VVQgQP5pnsB4KALwdDMYS9RbFRHyQsUaTRp1qzLnNGrDxB4VnU3U",
  "key21": "2VyTCNRqP2NMJ5c8PwTfa895opr4AXSbiYWUQWRgoXQUvggNhpuTGvh4gBscPD5EEpJsCa2Vyods4iRJofdWRj63",
  "key22": "yWbRoJaAVf5w9G7Ukz9UxoGrRqvSyW9kbzMcxFBXRPiqnQS2XL7QKhQ3E7apyrCeuWWXuXoLaMH6NQAFh7KkZdv",
  "key23": "3Lds5S8KLopLJnc2BphPeKTHBhCvuosnDJj3etkYBbgUeK11hMXTjo8G4mrffxYhvxidaYCPQcPmDZxZcBL3Bfw7",
  "key24": "poNxWawzWvm5UmRZXZA85RXsAGwt9UxfyiEgvjyDL9X34gyKQr6WRD5WUrXfoTbLanb4hTn96x4nsj31zwqrGjm",
  "key25": "2CDNWVRofjdjCrcc6xyGGYrHA2Z8wNv1iWiVXwmmf87bG3NZqQDq2qX8LiU8C3gXPzf2xewP6RVap5hzwjGs63BH"
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
