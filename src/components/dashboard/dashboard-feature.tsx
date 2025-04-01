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
    "ySfoSNx3149CHceyoLqUN2WbzRFGuWvYD3E7rsNnp6HUqwdZ2McF2g1KJvuxyoDmFRLNrvKHuU6pSkqaXEki4P1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2s3d3tQzTgDRqkHygFq4oEh9LUyuDzU1DQzZQ4WWeTgdXKomSTNJPX5Vu1hnxkHUvanV7U22J2VFRrSW4xbiWZ",
  "key1": "nhoaeDkeWuFGeZ2ZGdU4adR5qHPYkheg4WxKRoWLfRSvwJiX3WXUA3GSFTxmLYt2FoAintDHYoVu9DnmZJ8WhGh",
  "key2": "5tqKRTsWdQ4DzjYAipgxMKqV8R2Uv8hS4rPH9t6Mei15miqtBcwSsLWvjuoHCs8jGExfa1ZyxEMvDspD2uRt1U1o",
  "key3": "4bGrg2V4oza7gkXXfa2aL3k6GXQ3KtoRTvRGyvKUoFqWhfy1PeqJFd7Nwes7YcdvJnajxR2x9WpmS3c7WAHZJVpV",
  "key4": "5aVgWhaTZxHyfRf84n2iw8JaPQ9VTp9S9A7Vhv1u6YDoecwraN9oEoUcevwHeeUaFXkFqGP4cFhd8C7nb7d8i6wC",
  "key5": "2n6QrCL4NKUW5uHNLmFJFDidtqVSMzzwap4XkyXKSYpdT9jB1c9g2sdeLmBGDxQWSNvyRCdR9heVzKgQF8VBGb5G",
  "key6": "BhJkQ8Z1NbrvnF8xyCnv6DdTrwWPrLmXpL4Y5FGV7y8R2VvDFXJuhsegEtS62ZQ2NqDGkRUj1XAGkv78efPnBcp",
  "key7": "5rcXouY1f8dxWqbG5yXpZqntD46TYemJjtFM2yBJmSuVjLXo72TcLmEMvZgMMX3Wm2Nm2VYiVxfVe6TbBJEogDNV",
  "key8": "51jMV2DG7wabUnNt85fUfez1RSyBErm5khPZc6kDHxg9Wu2AtGEJcKtZCGe9aLomTeMcxf3RdWiCFGR6XuFTwJJa",
  "key9": "552GM2X3in9iaoK7baKfVtC54zhKoq7bFi17ZfvVpiX2DoqcDqM9GdtsKK8vB2eY9T8gMQjRsFYmszSar9GH8kCH",
  "key10": "GRtCb48142pMB71HSk458vfHZtbB9d7feQfbGqraGqBxp25Z9vRDnWCfpnZwwkuf3SATk6TUMV3PApf4sETomXG",
  "key11": "5HsrET1vriwvK9V88Lh7P1uUg846BVusi2ahzBREQ78TXwrSGYJDvPRS6oQeaWf7LKeBrQmThxSdVCKpTnfUEUPa",
  "key12": "2qPTYDHYqyJrE9Y26YE814jyvwxU8UqZBPrmsGEFZxBjfSYLdw48rTHXuHhXqkLgPxP2KB6hQHdC5UfkWxRdrExK",
  "key13": "TrT5EHmofc9ejTFUhDAx8JdHyXv3feKwBPJwiSYU81abqRXjPhFZT4jbDLjdFe9iBZ9v1EhC44MoQnfzmmbjWKo",
  "key14": "2tc22nLLktysUTrUEWoqqf5V7r4fc2aYifrGmjJWsWMMJmAJ7EWBSkmXU3VREp5Uib7489frY74mg5qCxsA6Kbxp",
  "key15": "5uCPGS9eTynpeXNpiHshBcC5CE4UhL3bPBoribM4q1FGG4fXSGuaRmJmvF3Zvmc9iAqWB6op9sZvD7cnEr9UqM4T",
  "key16": "4Vn3Q6xnYoLJNoLXdgPjLbpsyy3p4qFc1eQCbZ5jSKZf3eFXFr8HrdefN1V7dVtKEHdtxtXDzft2P746xoCoXkoV",
  "key17": "ZJvy1fiKahu5n67CbQxeXg8kfMGHcJLUFEViUeHHaWcHP9U7HDJLh8RrXKAW6kTNuaYhHBy1LTnmn55ZEeiAZWk",
  "key18": "vDFkcejLkBoURFnUNq7N3nTmVduRMsD2RWMFKFiM2bggcU4m6hcSup4MM4V37DvZe7NYpVUBmmFt3gFVYhAnr4z",
  "key19": "3uatxa5oawQpikiTCbQK3drGcpmyH9kGDUKk6gGGhACsPjzfr6iLj8VBZPWQMqCXq3CKoMPJeLGtGwY7a1nnNBTX",
  "key20": "2gfM48vxvWiJoM6Pi5PVsXr5eTDV8HQj3GTWnKK2uhMY2ngjZ9jEyFg1KYVRz8nc3gg2ypQYw1xfrA4cri3CvngE",
  "key21": "1K61vE6Gvf9y64hEnJeRRyE7YTy2evPTRTw2zfKkteLVvEepCeUifnrfgTXX4JNThruLnvRrbi6Dm6eM9gQFQzd",
  "key22": "3ymxKFb4hXcn9jhumWRdDuxWsPuJ78Y4r47AHohgvXMQW65KXznndH2RK88kNw8qC3B6hg5jrSvGcPHSLWdZ7yFK",
  "key23": "3BLXtN7i3X6yoj1GkKbm1jR1pPNVwuN7MZ1pqgkswJwp9XernCAt1fYaQnyUR8Ca9vt8XfqDUpUCt9T7W6pxzgkG",
  "key24": "5Y9kYqotfo6nbfqsgrdJxEBzgUeGwwnV1C5FHsjuW9tozn4nc4FPNgDQRQM1PYZsqw5W9wJKm6cxhBGmW2z7bvNN",
  "key25": "4PVvdicBjX1EV8Zdc3is86e22pJLEBSkjvafWZSjSZmstV2SEcoCnWEtTVVwM1sJ6H8SBeboNY9dRFPtUvjFZhRW",
  "key26": "2WCBJfxsKDiXWYNQnxaSUEWyA4YExdAudTPhCiacndCJkZz7uwWAWLLG2jp92yd4tt6Xz7iZQano2hiYfKcvF1A4",
  "key27": "2GCSJxjBMN6vXMoSzQZ8YAaWgJC8cdFHzdRGq5U3hJ153ngRToDukdjVU5jYzDRdaPZee4n2VhgbJJj9ngoBn4Rg",
  "key28": "2SXEmNgjizhYoq3M9UwUHbbDZzZaP12pDc4ysaN5bvDgUVUUgd1WdojecM6Z6Quxq5CVWMbRY9pQbSBzsDCpFuLf",
  "key29": "ATm5nhXXYgLrpvcEdA3ULxEZGLskRNjEaVehnpVSrvcRjD35iX8E3wK8fwL4RWnH8tFuro3nYt9J2medcH1Fz9n",
  "key30": "3qDtb4gjDkcedQ3BLcWshgmw8gBUDfUS2D5NhfRcnHKqPrtxGHXygpFs3tdCyDiot38tfuScsXcdJ41AyVZUM4yB",
  "key31": "3meW6r5Bg2kZwPEPG1H3dhS5fdxK8UYc43QTmvo8ArREeYog9cNVqPgGHX47NxisvAFeAbuvPSag5N4qu6P5pHgH",
  "key32": "3s1DeSAobbA4EUZ1BJXuLXW6EqfaFcuveCh9wLRMBqmPjk5og8FQY3jtnfAybguR7BYh6r7jR22m73bLvpGV6aoD",
  "key33": "5PsTaJhmWg7s3VSK7zMCfLgbn4sBb4pkx84Tbb3LGM4HxgExKzaaDc2tgLJ1hdobgHN7dCLQ7VXFksrsPKBWQCda",
  "key34": "67ePcH6gWDacfZizYPVQzQjfqAvbBbpsH2qm552D5VjYAFCXceLZz9qH12aHm5sj8rTXGkY8gjHxNVCaB6Du5R4k",
  "key35": "5ZUSne8DHRPnKP5Z7ZdkJ7D8jYu4d8GgN19W5Aa8FVeUFwCgrVY7hEG9UAf6b3Gyk6ANZVFe79cf1fkJJLgYcTUf",
  "key36": "667PJ85qUMzB7EGuT8L1Zwwcdwa4EMFFuawLwZNUHQfGuZjTa8oCyU6ezfEHfmQdu5L9z1imKUL3ShA5kPmJnzhX",
  "key37": "5SPod5TAE1UEnqFy8KXA8VHBbdNdYXjsWHcWGnD9FBpjuwtQuQ47zSJcXB2CSbwbFAsxnehhvPGc2uAhc2PZFaws"
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
