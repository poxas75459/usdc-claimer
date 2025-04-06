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
    "3qGhonFJx1orLkiu7C721hMp4bcqwYEij8AjtwXHkQtx5PpNhtgiG25bvp1UDpG61fVugWgqMW8ApZTbQkGdkD8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQAKB38zH5q6gSLnBmuprwiBxfP1zBiJkyAjUiM9YHeTG74umwnuF1tGbJaBMVEbVdJ5bwZ8o15oyy882dv3V8r",
  "key1": "5qbSL2X4iUUmNuWMLgk7ePRNRM6f3xn2AbWW7RwjvbQtS8ZkCFyPxj28q7ikx9MKjAte74bkgKyzhiR46RbUHRuM",
  "key2": "2PeW3mnJ4Qxts6hV6AVEhu97j9CH4eD4eFzSY96rZQsLXnwLyXgY8tabaEMRB9HEtTe2ASQhtrUY8sTv2dv2dDyd",
  "key3": "3z6pGzXJ5Bj6ce2oA1iW2LE3rb7hrU1EpvWYDjXqF8fusm8yBm814qbeoUTZHocKtr3HkywUAhWzyT858z1hrbDM",
  "key4": "TnpgFV2qV9Ws5EKLZJABafbEVnZZjtoHqs7WUTqUWLkHvFZN7ujj1ckSEaNCwv149L3DY9XybqVrqxGryrZrxGL",
  "key5": "4f4y294pTUgop3DQHp2omf6yL9cQy9ZCsUuuPbgzyWjZTu8h33Ym1G4ijNpiou7tJbm2geHYdE5BW4MTZ8vruSe3",
  "key6": "2qp7PoUMLuigeAszeGcXqdGZH7dzSYhoXf7nQow98VR8A4Y8ymUh6fxJNrAUMoo8UPoP16sMosvTNfHr9BZE4bTC",
  "key7": "5poL2QrNyyUKp3bYwp9Z4DNhWVqSMRkoyFiWUrXMrg1dwdLtpgDMtNX7Jx1DZjkaXamV53a2vpDdqvULzbNJpdKx",
  "key8": "4TRtHWthhEf8aQfA1tDAF55m4bm7u81AWBof95HgJqDszrEez3c8D8tLoPqnx741m3cx4Co3y9fFkZqHogmPQNiP",
  "key9": "2aSP1QKNWZGnRxirrjhyiAJqrrb87dAdYBCCBpKp9bQrVwgtfUrxvmjgBgqdLD3ifhTic7BAe3dHo7LpZjm5Vtjw",
  "key10": "4AsyM1WBdBdUY5FBg1sWcE5zX2ZpUz8cNxGVtdHQNKkx6LkohfqvvfKqBWY4ZKHdT8B5aFhWnSqwhFpeeZmVcmJH",
  "key11": "MgAUHGPYKdTef5xsvj8KArc12bj2JNKga3y558Tp8oaYrhwZZmXjhkiYGGX8PxT5FZvbJZzKTSQYpn9wZRXRHQ9",
  "key12": "1Rx1ySyZ6M5L4csVBT1f9MmH1xkgpWUkc8j536tTHmTnHwRrbK2zvGLq9tq6bwB71mBNZxwp6sfo8wyuNEW5zaW",
  "key13": "56DcGP6aGCvteuX813Xspfk4JFjkSpgQYZ7jVDVovBUFv6V5j4Jnud1STkJvVCoCG1p7ATtGPZYtsP1wQVFKsrwj",
  "key14": "2jS6V37ff7jE7NtdEu2B2g4t8VkawEBQnBHksGnJ1jBMayFqpjBVFNArpNfNJndLASRERFTWKuYN5piFWveuJMQs",
  "key15": "3GqNMsGnJBpRKsZcvLoy9xyUPTxfCJoTNmoEDZfyGPxfmGfnTye4AtrJNmx116X6MitvVN2LyX85KB9SmfAMpfdQ",
  "key16": "4WQaGeueY3agqW3pTNUcaGiT9awCz9nhvD1jqkLpdned6k1CGVNy5ETHitfTc9WSqAJkczmoE19WKQmaskHGSCh6",
  "key17": "4E7u9TVEWLeswGGnMHpgfM99jpAMBYg1ficjo6VPG9NeMd5VTUYwDQQnLxV9hsqvMRuEKGttmj2A1GPKdWfjksYi",
  "key18": "4FaLZ563rMjRXyixSHSKzSi7yu6VJa3yrww8UjumsMbRVfYXDQyodPMVsYemBvbnV4pbmHnv28Mson4rWnTrLPHx",
  "key19": "57JodtN2fT9Wo4ZTZymAAHDsJqq9PxMTYk653GFmeK92xrVFZQnsLKU7CJSiEc2ydgSBn9j4Gx8vRWbNLK2ut3qT",
  "key20": "X3QWesgh264Ku7m4TJstiHskxcowfBb8fF4bqAjMMpjbYskAdqCck7RmnA4HfCtGY8QNbGtMdqFwDwi5fUL7QMn",
  "key21": "5X53QybvthcCVctQ74uWTQ94wK2zp3BtXdmZtv2YArzkqwNS5wHuMrfvEJHXnJKAkefVJbDj8UGMMUShh6cr9jFL",
  "key22": "4omzr3LenQswWpFecUpfr4ZrB7mS5ouABAhfYLn3RvDTg4T3cbzXe8x44wx5fqUFtxU1cyVb6YcLYjVzuCfzYvh",
  "key23": "33qyPGjDkjEk9v4ytcNYQ6wf5jxrcC7MRD5dZfDTWqk5ADPtkNNWvV1J8bGNuT4qRRRUVyMzKeddC91tDHQx25tt",
  "key24": "2Jbe4AkaWzDWdDjx4w2nrFS6aMneJ47uHKCDuyFavq3noJR46i8FbmC34FzAfGjwRATeCBCGmu2MXH2A71MFBL1W",
  "key25": "1dEd9QwHUcYerwnBZW6XZw2JZkhoezaNUkZQwXDjDzNE123ymsWCDAMcX5ZVmMhadRNjT1f4ZrYDdvSAweSbHPD",
  "key26": "4fLR6vHyhRGUBZAugkDioxLWGEb5TmZRsZtxMwwhUUQhGdWkoCtPZCKxmoCVcPQ59gZRijGcvLuUzEeVt37dczWm",
  "key27": "2LZQK1XPU1ZfhGdeeZSrx1fNgEAnKxBSEGoA2FGzyjfKVMiAGyYr5YiWTqSHFrKg7UFhmKnX4SaGd5DAvDByy48X",
  "key28": "3NccQDTSpHQcPnHiZzQA6m3zhWRYTeW6C1AgvRDoD11vrNn9P65bU9WAeGnifNJ8UVHgbBbHw2GvY5XcUi9ST7hc",
  "key29": "59KNJ1b96WyFuWndMSPsRpmKGjwp2Y5jj9fjvyzbFdfMEDo3UJpAiywt3FEAQvMnUPr5pmmCDutjcyNBUcRBtfF1",
  "key30": "5F41FwPRCsn5kVYSEE3WMbVHnLUBQugLdbB8jU1KwxizZfANUNG7S3qFhxP2Kz2jGnn7A2dkfFU7StykrRQfMTBf",
  "key31": "3L6FG9BnjkBn9odh5deSyUkDkMFuuaaQsP7xwnJmJPZTGwrNKmDUzrrYdDzuN6vhs2oAfXaDv2awDQBCPL6dHP2P",
  "key32": "5Jrmzo8BVLt2VrfFtayhp6r4KLk3oGJUGwkjSyG4XxDMGznUWLFBUBq5FDi4H1fV6o5hkdQvUTFHM8B9pDoo7Upx",
  "key33": "2dBF1KqYGccgjXCrvqj7j5u5W7eQSDNbmTnbywb3oqqe1GvRg7orTYFQL41NGLgYfqniRJrLe2Xp7Mc6kSrodqZB",
  "key34": "5oGEqWK8gpwZnTauhu4EWvWv6Ho14rjER8RMquL4qzBDmboBaDibeYG16tgQAzXwHVQGvLk1HnuEnVmfq1BY6FGd",
  "key35": "4329kfi9BYScdrKSGew8nGJypc82KYn8aXrV4pq4r9EAxM2zZZxz7UwqxAHb7eSJCieXpvJEnQ1NC5XsHHn3ioQi",
  "key36": "2mZ7cyQ4J6TKmRD2Gut8yH7iH8PFtPt1XpNMfWTyzbDpVsfU2sEWJ6c9MwKQiZLcc1Dg7Bmu16XwG2b4YuAC22Ng",
  "key37": "3wL6DQdnYigBFRHYNFqmGGP7P9X9zMSP2jet3YvXeEKUxatDCiXtLZZF3Zf2QznZueCjwYgP9VtE57PzhcRZWYrh",
  "key38": "3Uia9zcRimvkyVQjWhEgkuEojyaVfJX9vVpuP5fiLG4NfhoPFwUKJxPg5DDJa2ygWqC3CThPSmL96KM3U6ffFuEM",
  "key39": "7JGDidsggrG5wKbggfb6RFE6AV5kd8JPvtFJgB2zw8ZcD3R1dsPsdfYmSBjSc9FaZ7YHAMqJZpEw4UN9bLUtApn",
  "key40": "4gHgoQWvRoNJVuCZBfEY7qbyGZ71WzsqHAzEUurbfmXhbjYsheY7bwdKg93VFi4eKyiiRfMmLqYu1jzNwcMEyewa",
  "key41": "474D7N55pykwzHsFGVy1GP86aQiFdwRQAkdSNtRk1CX4AQTT7KN7h6Ek49ikEssK9hEvneLbpBRKSGEDCbxKG9No",
  "key42": "2useCnvRr2gW1i52RzSdBFP9tA2ThqbbSt4x89Xrf6qQ13nckRok1tJYbtHAcPbrvvwiszjoSnygy6sMqkMenwiG",
  "key43": "27UutMLdR5hA7XksdKkHqp2W93xkUmwgtF1wA7nQ5BWcoEvS1muBCNa9FTtwSi3YrGRjDebFDgcT3Hn8VwGPZdw1",
  "key44": "2U2nCyWtzfTK1HNdvfTd3RR8tUUkK2CnXcofxDroYCqBiwmNoas7L9t99tXtNjzaY2zx6DHYAHGYWXNgmCjAmGKv",
  "key45": "4Ncg96BbWSAXSZUMrNqDd85iwZNiy4VTodyAT9z2DP24EEhwm8pjTZSTutCWYikvrxan3CFsbeoonHj9XwWaUb4p",
  "key46": "3LuR5QtQ3a8nEjwtwfTbh186V39xAz25GY45L2RFNKkdivD8cmLXKzrwg74MK9tYyABjgLCP8YM2qdwDfVnKrq6G",
  "key47": "2wy5wLUBesoUHHdPLA6AW6TagvwvC6CWuyhmMvfJYQ9naTeD1VT9VNu3adV5erhLFn6x7FuTQ8XuGGUHBUdXkzzm",
  "key48": "4JG9kPq6cQgRoe3JGYaEAAypGEPpqnKmeHTgUvKzbfseQT7fqsBaipB4swi1Bz9tqinyCaTsT1aQxzs9xoiwGMFd",
  "key49": "CASA9Ca5KmTS8wYvUzyE4XPZn81CqhzsDsfPzKSF1M3rkvPaZzkEa2u7Qnvo8412XqYdurKXvWG8n2CSknSRhTE"
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
