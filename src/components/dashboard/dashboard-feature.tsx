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
    "4GND5tbft6J7UNmbHjrWP9Kt9oYPQn6yds6kjv7wCPZNeTzkoNASVa166JMFDG4szxmViEFJ836vFDDsQrXFr7AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApPShwHwLjSiGirPuNGWP9sCr6HvmatmPrbrop3Vvhr4U6PQGoLZmcGyMiCjsXcy7Cgd96BFyajJqSf1Mxg8LHK",
  "key1": "2VwMiNxmjchd7239ecPsCnkYQgrB3n4Fgu1kvquTuqQ67DcRxExDqHBNWKgvWkfGwCm3ZpBkakbG3hyTGeT5MBBk",
  "key2": "5MA9coFquGg2pjPWDNGPxjFC8X6Dyrk3JH75Fn4USTaN2RE9vibFdXJavW8depfJCySExwDHYfza2MMP7JYkT5qc",
  "key3": "5v2Q42hUutJnzXKGb6qmVRFxGRWGYprBxRi2UTGLxd8wGYFPTP7Zv2xHXudTjfqDTmWVmsjWzTVfaVE8aJQAFcjd",
  "key4": "4Kr8QrVhA1wTDQUxMut2hbzU6G522ao5eP8dHVMqoxeutjw6CYQExuqFZXA2oVAJJEJFzBekxoUk955Abguyvdmy",
  "key5": "2pMPS6snQ8Ya9YnazedNtcRCdg5cpQt7fYupHagENuED8ZkyFe5ZR4TxheEjWpJ7Q2HWwY6C7tkGudQUGTGMbN3F",
  "key6": "2ZtH4VDdVPjejhwhMVy8nNdjSPsoYD6ZrtwkeQUWYhgzhTpSe6rAEjBoV9fEdyaRFErthvgzo3wtxZEP9ufpks54",
  "key7": "5NBEahtxbkz37NPyFEfW5fFocyWxnKEWRH9kjXT7K4wHugv66UUPL4JUwxcRHYwa9oHyMTSzGjCUvEWTsWDidndW",
  "key8": "5yePaaZi8H7MicGuGj1EyvLwSHwRvUaW4Vox48QtoKBryw5hvquKwEDeZrqQEYYy587stNGKH7CxfkaJfuqmmUtc",
  "key9": "xUPhBNcryS3pbkk9TiGSFS6Z9S4mpohGfqD2hsXBGLv3bA8mYWw8JJQHRP36vDWk4ws6gNDwfhTW7CBq1VAMDmJ",
  "key10": "3uUFZyW7GB9gfmJMvh7b8zzpu6SNnXCuVWpsyzapBBQRcBhwt3DgbVdcbNcsXfNemSNxvGLGZdVJ6Db868a9zL8v",
  "key11": "34Lys7Payo1uYL2XYoaxc96mzpqx3ZWmQD8W8Eox4RPFUpGiVazus74zETBbDQCjubUGqXwCjKeYKNuzEzPf1XNQ",
  "key12": "3DyYiUM7GFhkjMmszvQxjdqwC5toGwQG8Az3exdTPpLdWhwjFCpu54c6x6k29DxwuqPi5bfdccsKx33tuViimSTy",
  "key13": "5TVk8Gc2SCqqNNS22i7rYpN9Y5w11VZSEut4TXPBXRbACuxUkY28FPpKbatuGxAVwV89khNRYbw91KEkT8YYFqpa",
  "key14": "2LTE7Vio3YHx9kBaggSw4ScaxYD4A2kicUMUYpNbb95YLRFTXtQSsxBNxTBZThLrYg4xD76GfPPkCmCvduSTjWK1",
  "key15": "ztan9uxiXEmoRWoSraNia3TjYtfsetefNQyfPpCfpVVQGdMoMRjsdS5984Cptdvrcek31yTnYSVAj8GRHAph5g7",
  "key16": "TTbeWKYERToSNPucuyn9yBYm4KjrAsJFpbvs2QZPqp71C4PfQfCHfeasHuk66eHLAyEDb62hoWh7e5qnW9C5Nnf",
  "key17": "5REDbtQzzs2FDS2C1EkTvP25ZNQxcjyTQzNK6V5uHb4tPbm4Tv471uXqX3wFTqVj3KLxupPQa8XQ8aafKJGV1oyF",
  "key18": "1mECgjXBVqA3XRUVXKAaG9WqCfe856GNzCtURcPqgCZM88KmQXe32iH3Sntw1w9KeXMayDjGMGAFZBcXjgvbZU7",
  "key19": "2NiCSvFEkNoSFnw2v5Dn4qZvFTaTTorELPAwD8JhufUHvpQXKcebLbWoadFjhxZUCBgeKg14R5qXG9iGBcXBrMkN",
  "key20": "54Saewak52Ve4p2DHDeJ4djSiASNydhrq2dhQnE7qXoqyEyuN6cgzPAicfR1YUU8iryq7F9CxrCFkE7baFW17XdT",
  "key21": "5fCZ8BBsr6P6UL9xV9yfVLYSYmEeS5DMGkxCN7UjrBGjBqytYkuzZRsAgGDz3NUC7sRjUrcoZaZfDMVgMERxxEJ6",
  "key22": "5xUgpqDuVLJPLCJE6kd2Wf1grwRz1xSyWT4ERGk3hcmSGczyfNWSoT3MXpdCSMRHmJLTPvMsor1UoGitK7FPtysq",
  "key23": "3ApFyjEefJ2LE9Kz4iRTepwjxfTmRHdTX5rZKRkYy1Ah8b5SUgXYqkCtxKZzcjWETxSiBjTBg88yeLWA921GeiUs",
  "key24": "2e45rej8ECwP35Xb1kVJU5PvrLqVinF4wiWpTNXkNUDviF8GCANbQz7iQxVutzuuASq1uDVhEdvQn4qfDUgMudKD",
  "key25": "49pW2crArQnRNKun8XNsPQhQz7do5vjzPuJa9wCj5gyWLhNBNeauJaaR4NhAWSdpSQiYPNohAP81T9Zz9QTn23kU",
  "key26": "SphCN2ePz7azbSZ3aXJQY5x3rqGSwgYDnD8fF6QVHrGaCMGNfGAwXBwrmHy85pNdmKV1LyK8C6Two9Vn5TGRNmH"
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
