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
    "5EnaBJ4tQ7tuHDAacYLq93bthWqGjchQFRodbzqzybgEPpkCoH3NYiKHVVsY9iky1zSqNsgNbqE2k72A8kbiJyoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijQQaYPGRwAoFVYogRdv7u1g8ydWM5JoXu313B2Kt1MWF3qmjjAiDMbU6nXSi3YMBHYP7j4JnzMWpUYaNocBcAw",
  "key1": "34GS4jxp2gpR9GyM8pP1dTmqqFv19gqMFngZSiZLdmhaRzz5MZcrC5uB4SR8LXpUu5BnEGj5prMRN89j8HgW5Tfs",
  "key2": "2ndZUAABjzbBXVnBHNpdtx4fy3tFhRNdDMnAVkhY5ZC1UH13M2eNh7f4qo3atjFJCnNs9KZTe6KmQdYsXatAy51A",
  "key3": "3bnwCwonBWRV2fsTf5FWzn3TCX28TyFs6HxHuCQ5hnByat5Mki78vJQkaGpKdzfbdMir3uP5wumDygxY6c175dZy",
  "key4": "3GypsfVJ9Hh1Xkcdk9QNaiE9JHQm8cL9gQtfxaAiRyWNry5TEY82JQJ7AHvVP9kKHssVUzZSmvyfinXZX27pz6bA",
  "key5": "2wBKZUL8akiJ3wd9WGVx339eVC8B4c5tZKAWDJ1jsTq1U42ranbfeDX1LXu7DbmcnMwpBgR554nSLsnWCkbmymmy",
  "key6": "LGpXxH8HGDgiyXGJtSXeohvM7fZarZ8a5AH5UKUvcvvhUB2jaqK5Mf5N8nYfg4ExoP7xg2vFrkdfsK1H8md7N2r",
  "key7": "2hPoSghgge85RpwVpgKS8sVtQJe1bBfwPETJpy2reqMYTPYg5RqcZ9Xo5CRVkxphw1vSAWhevuVWTWykcBi2wFYQ",
  "key8": "i7hhj9zPFkWfk75JtHrYXba6geFZmWVpPL5Ld849qnTauGLNCw2dKiboZnkNymn2ztiGpuAttL8fpZGdgeKyaDi",
  "key9": "5LturJgT9e6MQba9KNVzZqreSC6tcZyXAJ3GKDLpHw2s9GrFPVx9jGFXoCNuDABZDKMQnFb2CgQ5Z9womM44nAwA",
  "key10": "6254nLJpn6fpBhhGkfZscGjsKrAfMvb47EuwkmaFAUAFe5xieQeXo777cooHBPpk95XWP1huUG5drHDvHHcHcuJW",
  "key11": "32TbWd7f3bmfTRNFhcsujDoDD1g9XAsyBYtoJuGUphUsASjTP7rtDwAqfT6GupmMivNy3tkTBTAQxGNbMRNDFkXW",
  "key12": "61TWRmEMuspRFGP8KuEPY3XhGSgRqZoY1fPDHXngVXK3QbXhzrQ6LPd4Axis5JY2MFp66buc6LMCBGHuzPM28ykn",
  "key13": "46CyR7zTZ4hGE5nuGaV7WCipS5X8owCWL9gQSa7xxeY7RhUkqQ1EZf9rM6KGDRThwn8PArJsWJCb5AdprY5fY674",
  "key14": "5utQ9TqtsVZAoxFSo8NPkTN3bwmsQEtvdythSCb3xvitf24ugo7GWDJ8bHSTazy9mpf4tYCAdrQbKvfW5KJLJXZi",
  "key15": "2SMrEbTs5pFec4dBQuJTrcqBupZyYXrxDtD33mdm78fnoa8pN57MJB7iXcbKCR3UTmDyuiQjFBhXsdhHvWAjA5N1",
  "key16": "2EvVGs9ekN613ttL8ZzSV1YQTx22JHu9WSDKSfyqCGv1hk2cLwU42jKAoQPKdDrBhZtMDt6FDoHtGxux7cLstGNL",
  "key17": "3gMv8ykzqnLH93ZnyHt6EFZCMU2XhpuT22Wm2HomeftHWXkWVKLAQa6JjV6YLBpkVAPAQPjbvFie2mg4TLdyJiUD",
  "key18": "4rCbe1nb3FNEWQ9bnpMUiGL36k8Sjrfaai6sXWN6dqyKUaHLonaQDKMCHJRUYNkuxPz3f6UTyfvhUrLFaEZW2mL",
  "key19": "3ffQvQkGNDJfSbwYb6oBFywAjPhyPMT3J5Wf1uTDvyVvJ8xWvd29Ekt6sA8pGS4ByQWNE5yAm315Eh2j9BaAcbeu",
  "key20": "4RBCaQaUKTbm5eJ2YQC1ycbX6rz6awi9gKkNtkLsTc3pW9FWXcU6bGpkjpMRWrieeufQnmmVwCh87H6TZ2pB3qrf",
  "key21": "5sCuMQuJqN6PEhR2waARRAYfmxL9E783AvxfKtrjsi3v4wYW5oYZjVqKGm9W42wfkeJcgD5bykD6grSzceJfhQr7",
  "key22": "4YYCiqisWvUsBrTFC4p1ghoW5z2QYwECtBv85AEudYeaMC7bezQdZktLEiUpJb4o5unLY7VKmGjgqoZLG1Nam6a7",
  "key23": "3fyad75i4D49q6yoAXGon5j4Wg5YJ3bbV3sRSoLV8VaqB4PrCYzSTN9kLCuDA1A841BQ69F1YCvweoPTJuuaEwiq",
  "key24": "3nPxRByxHS9ESpd4zB76Abn7PpqpvFLeT1CD9CKtv18syMDccCkFDbMNmpCQ9EfiwStPBxSmKQoBBd9E6A91RbJD",
  "key25": "3ZXc3exfS8fhhNc1sacopm7BXWx1jakesZw7jBAGBM7txjPtooLMLELcCCKiVzvM1eqCSdEVNjrGG7fDsAZrP2zN",
  "key26": "5P366Lj1nJsHNbLPew4j2AaHNteDxTDvV5wZE6WoreLYfLD2Nmrht47VZkSJ5JSXS2AYXmBQPt1f3hQtL1rGqmwQ",
  "key27": "4yDcRb8NCzXLwaNxxLaH16tj3sW62h7nr5p8UjKgdvCqqRXPkA7gjrBJodp9ApB3PHKLtDnvjCG8d9tL6ANW9WWF",
  "key28": "2vJEFtZSJnwD1AbaaLB1KJPCF1NdMddaQrhyYD8Qd2kDNf4KJQDxf2jd2AqiLPfoT1oo862NqbbC9WqyEVCyDzsr",
  "key29": "2r3zEcTrWHxKpbATeDrceG3p7XdFKgxr2AxcGudotRbjWYhckTPPGT9iSty8BM3XaciRpa6abSHbXgKgfNhuxkbd",
  "key30": "nt9Pv8ReNPaRBYchSJfKS1x5MBL5TZW6jM3pYtME8LhGSf3x9Bn46dUVhBtpu8v87bHcAQs5jHhWkuR7AL8VdB5",
  "key31": "5G4GxSQUyAFdgnHSHoPehftRrW19h4W8REWaPeEkLdjaogvDbypQiMNsvH1PuqVnBvXqtLbGSAAh7o21dcNE8fX3",
  "key32": "3QxU25Y7XwpEGN6MWoVUN8566RccAJwuKf8ERga2yE2zeAb7jQigkN487r7HLDuJ26sQPe24gKoev6b2ueK8MStv",
  "key33": "5jgxsTi6dEcYK9SmeAHLB6R1fTtSZVzqojH5BHpMpBQQdo3cqDYiQaVrcnapmoKQxqT3HYkCuYhuKa7kE93oe2Z4"
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
