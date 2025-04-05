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
    "48miX9Hfjqu7GSaqjTyHK2ayF1Cp2c5AARCPgzmttEeK5RAADYNsqpsjzuGyd4UXN6jcRzanEn7z8RFYzE3czn8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsVRvgKvsJKD1BiiWAigrtmvvBZqXVGofCrLEq7NDhrehpUg79mf5Y4uz6AvyrAj49Siv4JRCQ9Ztj2cYKbZPpq",
  "key1": "3ux9quBdBeBJfB8FFXV2w1EqgaqjRUsYBScGmoeAVcoFxSCjwAXmFPAscWSkCrqbvzLtHDxCbFPypUjKsLZ5f3bm",
  "key2": "5atMVGEVKuD9AfRJGdAcA6uHomotGLZPy9PMUg27Ds2isTDnctAVe8AsSTxJFjV8N7Qwr4tHefTi7eSQXTjp7Qcg",
  "key3": "3zqd6LPjJvDrSZUWXBtJow9E4keKTxpwCQpmDEWnUMe3ykpDjzVa34Ldxog2VCXg1ZdSwWAXTfXWC4bpSBFrPbyc",
  "key4": "4NTxkeD2eAiRPi8ZyWyqfPyFZTpbzC8k7YYHHNWmYVx2eEkthmgkjTAm7W4p8eFva1gyk9oBz1S4zkHirG7uPJqd",
  "key5": "4VBChFKrx82oEv3BSVJsrhZ5cNqusoTSD4bJShzbgynp8shwwMZZVjaYN7Kd1KqdG4F4fCD3HWubL2xEyZMJq3YP",
  "key6": "3QJbYY1CjpbcfcroedUNzqCQJLMdvZGnfp8GT6pTKCnQhqgGxdAkshLbpQ8HmLUA39Sp6P98xpiMixA4khizpUo8",
  "key7": "5au2QLMheJfGCZaDkJpqamLf1ETGCVB8Z5GuXGDf28GNcfvSpWdGJksLdeVAjg3LmbUbCTwTPpWXG7xBKT6vSzup",
  "key8": "5w9crhRTVCuYBj1XYe5c5WNrvtchnkzXRJjMFHui1JwajeuAFzubmVAFrCg2Qs5ufwqfWQ18BRKz6c1fsfEbndg5",
  "key9": "2SKth9S7APxmFtpXGJks4Hm4MUNXAPugc3rswCBYdcLs4MQKmc519zYK9XS5EXcu9kxXzPHSKjS63bX4m7t4Bg18",
  "key10": "48ma2wACc5cYPND9R9oigmKCpjjJ35BApSrDD7FGxdzg9BXiGWNKYstg8LD9kLKcMRejNEKd323bbLczaVF6SvLR",
  "key11": "SLfB67y3yMQJPZj7mkmYeE7BdoAJUyQRgu43jBgRYjHpCNmVKLwbJhLHmHKAoRBfvUjaU2WakA4ALrx1cP1GXSE",
  "key12": "64w8zu4HXJB9ATYpEc3Qc7Ppx9C4Jc6XxgrQKhBfDfNvSiM8ty9aKucAk2Ejweh4M7JCjbeox6YWzsvR5AG3UaGz",
  "key13": "3EVETnTA2iYUooDcWWRY9pSPoXhReoiPoSyqeXLBk9wNNxmFUKy4AUNRGHEoVvz7vA5jthrX4WKBtYvg7qd4T7pP",
  "key14": "27sBYwoqDwxtnurqVdi9EtBbMV9oJDTkUxYvA58kT6mqjncPSP3fkNN1RszgUAmVcv9Y9CwLVY1QEC1ctWSpU599",
  "key15": "BDcbTB5okLKm149cnz6i3GVuhSe6g3FdB2yQkzE4bAC61BmfzYudryTLNn9dJM8Lr2KZrJ2i4L7Ni5AphPNbDVK",
  "key16": "3ew6LfjaAtHpkMYmF1E8svQYwecs9gRVBTLtHugNuJcmDyMhBguqWKpNF481dh4ETeRoy2GS97xQ5TsFzNqp1Ukx",
  "key17": "126pp9h1ZVNtMNdDZS6XgeS3p1ynqggi3LNtEF5sLBdxrQsfkEZcvwtp3yiJoTEkyJSpyPj71R9oQpJqkDiVi1h9",
  "key18": "661edzRPrz6pwGX2P9Z1wM2y47YLuEHUtwWN9MvsYwdk3HoJgjKFMWRq18no3LsSDRDokmqXA86jFN3AT69f2dv6",
  "key19": "5uv5nPCUXQk3GvxV62Hwbhj2deVmxKzAbdmZUSSR8nGs2KJHpmEmnN8TucvBi1KnvicXGRg3L7nRCfu5eRuVvx13",
  "key20": "35wxonpRX3bqm4y5VQKFve8kVhBW5LC34wNsGm7sGCFMd2kbdpDANoRJbitNaxpBqqWwdqKXRiroQzYcuJjF18ba",
  "key21": "5rr2LsGjoEsChfncsnAmAYtJ6V9GMEFxHCeYrzqcjLDBp3mT1uer35U7xJZAdGy95W7mQuTDfGdkz6QDmS1bh1B9",
  "key22": "YEGaPgJMAYaQpmEpLseA8HbBy3NJ7XVf7iD8xNgBJByvAxmBWf2EnwN9VxvfnnPN2BkZ68Nf3vwq2XxFH29j3Dc",
  "key23": "3BmEtmWZSmvYXb7SiS2PxY2dpQzM2kRXvSg2Yf6CEWDBPCNAQQRRQu3SkqSkvAk8qai9UC6VmD3CpVkRsE5sCLhk",
  "key24": "uRDrJLS639fbrc2cQqBMamx9vq7sq3RTDMsjpTPubykemvjo9Rv66oo3WWix3WjUgsVjjyjGXcy7uUV89sb9iGu",
  "key25": "4b3pv5k7Wby98GdF9tzdKKhggtdp6KsmfhpUNqwwdbibPuPG4uBRxSxEWF5AnVdzJHWBaNn2QirExw7pdGytPkpT",
  "key26": "5tKDYgtaWiyVKFdwikjTqMwXuEafgvdgq6tYm18pwgdSQ2wDUmjCDeBwSKL5VKfmtL8o69eESJLoyrHeidL4u3iQ",
  "key27": "RaeGdDy3cVD9ii4h8yeqouq4m6ag8Zmgaevr9CTyb9MzDtjsaBUMvTqUkxpU8VtezLR8odXS6LwFnNttuojeFX6",
  "key28": "2xpqHbeEzLc6FhES7CQQMm2ZW1afmkayZ9J649XBEKsNJLpjgcGYhGpRymKCXR4i52t7YKK7Bt1cK6uQpHoa7Uon",
  "key29": "2VjGMN64Le11S4sTJSJtHFkHeSnkBbpZEyb1YnwTWUNsK8DWHGnLSrDQbXnDj3EBmV4RjqUshaiH3fpidCua6Hyp",
  "key30": "36jYJ14wR4Fx5XEyrCzUKVwUuvm8uJcCH9hEoaYjWBNHNpxLCoxT56KdYVNJQJ6Apubv8xBSkzFLokV9bBpy1KEV",
  "key31": "2P7kKtJqLvuKkQPzbQJ9MK5prkqYYGQ3MDUkTdtz2zuWiE2oybncHh6Ve68kYhUwwH76BhwNFSj2rKbVsPooYp72",
  "key32": "2pTGjJEhJ317fqJpeJD9kMfkMYWH73edyxZY51JV7pRdyoDAuCmeFeztWytcvpcB7ACtB5FKftA7Gi45dUR6Y2aA",
  "key33": "3akDUpYyVnijRT4jiYNUVA4Lb5ZC25vHQDUa2MZvN1YbaWXb2Qcs8Vq9xHJi11MqfseKWJE5jN6XMXNFr3e3Prsa",
  "key34": "5AoJWjZg72ud1GMv7dK1nKddRJc4Y6ihYDaacVJyZ5Pkw3Ro2fVa1pTkwvHukEF77K1z8QaZCcXodQaCh1ogUFMo",
  "key35": "4kjupr5bR7PnGVhMjcG9RYHeRtUZChCWfF773CYLTRrH5x6SQgFjciKTVuTAubuSvxSxv4CiBokzQDN63faPwYVH"
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
