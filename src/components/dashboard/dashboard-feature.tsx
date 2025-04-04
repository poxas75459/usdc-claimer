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
    "4oXshgKMuQ99gHUKW5Sqt3ogMqHqozkQPLviukvypEW6vQ9jiRmEeyTWJxfGPkRi1dKhwwdDx8qCavrRD2ogni63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53HHMhRHRnBcnhspJ8UADUMVyYisJHHfqudci9Hr3JEJiwm1Nh995o8FhpfoYKr4iQpzcufjPfSFYgJLohfHyHHq",
  "key1": "3QJRQnDuiaxudT4EWbVcuiZixCo6dL6VUoxH1p8B3CE55HpH9z6pcu2nDHLqbY7qb48cQkVLVK6qy3ciSYP8NTgn",
  "key2": "6Lq7dAtb823ENUQfvjTSWzJ46spPEFP6qKmMSnCtLbGUcZiTMAPbvp6GN6cdpv4ndNYJEGdyWN9p5RM41QwX9ye",
  "key3": "22FXvCiR2EkFcTRn1vm6pmcYXp5sCcg8mPtFmZ85mYasxmihQAj2HAVJcan79XksH5Bm3qxPdVtkYFd7tb88rCSo",
  "key4": "3Kpb2wZsDHqri4BRHDBynYB2BNJMiCvkMcAviSgs82mYnWNSYWD8o4AYu5tauhp9ScWQMMqEThT16pnp3sqmuAfP",
  "key5": "3FiLrcnfVYrJ2v3AdWXHpyvMNx8LrfNQCPvPyFe1KwxkfY2DVokR2bKjG35hKffhEfYXzfdkETW1NPy3crdNZz4b",
  "key6": "3wqZ3Mk45pBW9m9w9KaWVL7yBu19wyKea2qfHtuCHLYh827Z1uPgMdAbxvpBuzpQHmN5NF92ddYERprCG2RQ7Qer",
  "key7": "4nByP7HUL6KNtxfQoumSLidt4GAFXeJhSN3SBFsfwscXkCRJk5rMB4JsTVyu8yMzggrknz7AkX2ntDE9kvqepde2",
  "key8": "3Z6TUuUiGBmXE6VKaTKaZ8coC1DGhkwP3cAEen1oXt4C7u3oJunDVbxeVrQAfwYQGWdjiNTzMSE29oKrW8ocCWCH",
  "key9": "2PEwCSGR92p8MFhSNY4jgwqtA3JnkUCZ7d5ZC2orMxTthojRT2VD8CM8Rt8VqL26dtkYxXML3H22xRC8broTbnHN",
  "key10": "4pFP7P7XvPmsvJzo6aMYfosymxFytvd8mL9ocrqvBKtewSEKmMDnuGmFmPwJBk1tiLziXfGTCEKxrWEHoCru9Lms",
  "key11": "9jg4s34jcdZJxE2QFj29chaN17zQhTcqmcBB6h2MhXEUs5cGCt9AGcCYE6cAGeCxYc7abByUMj4X93x2k5EMPDZ",
  "key12": "53wSa9TTmme72RFqZnieFxgw5pDoR4FfCv6XHxRiu5EueSVr8eMsneqPQKSPBd23emsaUe9cGiy2BwfWoZU8XmBN",
  "key13": "BvUgmSdvmJEoiVrLPWPq54rw6XUGgEpj3QBDpBYf1CV88FggZrDPPFMzdKRMy1qDhfivSqKLaWLCiRsxkUrkczk",
  "key14": "3tS4v6gP9Xtt1mpn9NZt7uyxQU5jLwkbQk7KCwf1qMGbusXg8hQdfJ2quTJvA7di1oYr8rCFQ16uwqCKMrDQtVBE",
  "key15": "5Rsuxp7WEufx7h9HxvVAGxqFAfNC3x6Pi1pbVqos1TWGvpgcZZHkMVL7iHJunuPmNnzPCVB5uZLzjt16NrhqB4KB",
  "key16": "7V1tqGksrg4CuFGfNMub6bQdpVVmavRwFLArzfK5NgXvfzoiRqSaZATNTdCr4mUnsVz3d6s3FXgr7tghxwuLFX1",
  "key17": "32Lt6jgWMcETPnoggj7L41jE678kLAGQoNp3bDxBi9cCSqQrCCpHD8aQJaA7hQcZjr8xJnJQCzZYe94pzdGxieVR",
  "key18": "24FMAzxGJCvmHWQNBaSxp4Nd782Z6vFvXZfJKrWphagyUmzUsvf9jvKCTJfaM3HhjnKgCpzxmSGHJ8SasrpUotR3",
  "key19": "2SejnY7weRT8QzvyeaZE48jYRVyaZUeQpJzWFa5Kk7Kn6k3XKGacAmRHfBBXyjfyh1ar3jKVRoWEeAdCKUHHmmdW",
  "key20": "8UdTunMuRRPwkCsG5anJ4hYjffahGp9mn9F7jrJ2sFpPFLSARHAkSPaD9UbJtXCvhaY3kGkvVSm1iQ6udTUsNTC",
  "key21": "5sMNrcFyPd5TDzDNX7mSrZeGTA2fCc7w9Eo9hhrGFkrnhGV5KcznEGonLMNGA8ND6CrJiB6kh9mdW4iGdRQ1jWoB",
  "key22": "2ZJSFoVv8MtAusf3S622o63CL9h4FrmN8Qp1QuzgDMrtAnX3GPWPDvLK5nD8SZSW8sWubPpoH8bqAJ5e2atkHdU2",
  "key23": "GVoK4gkhYFPdws2tWy5RQmmm5WmP2kV7zMk3GCF9XDsMTWP1wnwgfjPy8M4MNq2aUVNEtAqpix3Bbn8H2ukdCRw",
  "key24": "4aruB6wqVBRbWhVomxdR5XgR8V2QEYapjZVNpm3PpVEmxLs2c5MvaFS264aSg3eo475PF9TJ5S1afR66BVbgJ21e",
  "key25": "5LMgjGsad43ZbSCt76DASvCjfdqcaVfjUuAvexAnqzkDPfT3v4FY5wLDjTQMHATRJTe2uCVRVhjMn2di8MY1rTBD",
  "key26": "J7DWx5Gkm8M1MQ4nTQozjikDTjcsbMHQzk21WhFbHTwUBowJi8u7gEWrHsUW54tEaBLECpzCTASaNex26Bxsx6a",
  "key27": "4b8csJ7xEP83uH24GVpxEHDain1FUToTX7N5tyZuEhZxSf3ok5W4sxERBxh3AbLsBssLQtMPSzqtu8cdECDrpEuy",
  "key28": "2f99c1RJHv3DGVKhAxMBs1FqMQtn4iokXFX8tKZmfXdMuGUz3F5Brfpw11nV2w841zuArrAYRwkKSN6ug3iqbthQ",
  "key29": "2RGKMFaKchfWACMUiBpyrm2tRpY1TE4i548ezG3HwbvgHK1SXBxDuSTawzB3QTbYBXkAXb4eCRdcHftLvUV9Xrti",
  "key30": "4YUYUUkpLmxtiKKK6egBHYyvM7SE6U5kaoxR1cFX5pnfUhZHeqoqNAxL3T6UkvfqPbTGNLbX9AMRndhpCmTSW4xL",
  "key31": "5CDiNgTzFVtAGLdxHvJvhyKA3K2mPfabHopUASBsfQhpeeUj5TgxeqsE9DtjBJjs3WyxSRWvPL51UCUTmx2MScn2",
  "key32": "426Akw6W4CN5rMCqXnCo2kCS7BvNyxxbLiQvpekJ8Ld8Vz2nxbNmkC8wvokYLPk5VUhoytVCP1gqfaVt5gxXTVsU",
  "key33": "fJJUiKa1uD5Qvnovnb8ctuwjTZn8Etywmxi4Z5mQVfmZW3Nbxkra93eDCrJmouxcd6sNEoK6Mta7z2gFS9nHULs"
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
