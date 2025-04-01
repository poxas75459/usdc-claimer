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
    "2nXdvCDJKmQZQDnKCWz2MNREEkg5w1EpRCNeF3m9KYPmBd8D5PYerRzsVpFW5xxjhbrkoG1SSVShgusQXa5mi5Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uuS2jbRxoxGEdS21jHXhDHkHAAG3vFgfYs3E5cAGVmVtoVnQoFrVtXp9aGjvikhrk2Q9MSF4TUYXAnjbcztPhi9",
  "key1": "4nbi25SrqUJGSCE4ETfv95gym7H7ejGaELB3KPfzq3TMaJut1MoveZg1M2xmsLFpN78NdBpyVGm9qgm5ZVWVhg8P",
  "key2": "2JAD3dhz3ZioNot2ufQVUxvFdmfeqkw4fLoA2nRa7yi3NgdpDQ9auzVwaVTpSvYmvdrcAGEmAVuooUR82zASF41k",
  "key3": "3V8oe9KTot7dvE7nX87ub4zpSFZQ9j8DynhaJ5ta1WLh1y89xeWS3NbYef5amqyVuMwQD1rBW4JhiFf4pYvq9TgY",
  "key4": "2nibvxLfKis4Ydd8f6NucBf6SMFzvqqek527AcCz6sztAny4T2kmK2vVfRf7AakZ4qdPPGu1rNoHyzHEe8qqgTY2",
  "key5": "5kgs7Lu7BAineFUU5yK6VPgmC35VvRLREgyjkjLMXt7rRWTm8L1KdCDKyDTiC6SZkE7KnxNEQFPhUVYHtUEakJdX",
  "key6": "5EpeHpaVM5VMDLpJfecdCUVY6FWT28XpEsVTTMPFRJgkqujmDTtNQTRd44BagdEmWextbhexPbUtWF37nuaVrUnJ",
  "key7": "4uxV3EJ6fj18gnuhys9TSABGK9DW2Xp1adPKMYVjqtY6EGb1WRPTfLVJJn1oUXcnrLEzWMeQeA9dV2AjFK48VhSK",
  "key8": "4o5X9y9PoqKTy2SMFMjCXeSyJnbv27mp5yo4Wn46h4wrhzPXodN4XXuBPLcwkT18M5SmgjoKyrKNq272ht8fi347",
  "key9": "57kwkXbBGCREiFewxTQHsiVkqMR9w7JjycsKnG3sTujKLjKWLt2WkPqCWqhMQSpHwjMFz6FmcB9qZ16dRj24nvqL",
  "key10": "5DGUgHPeSS1mm93bMj7SWyJmSgawGvHcJ6QHZp8t6PXtkC3NFsp68YRchEpTo29PEXHBjYNSASqBZkuJ7qrb3eP6",
  "key11": "53x7FMsCjBwMRUg6b7orpzzANm9HGhayhU1LVfB972SA4UpiMiCfuvrKXVFtiUKB6EnRAoLz3cwe7WimYKt2C1ik",
  "key12": "3cqX6bPpxeqqZr9G3sditRc7oJ23CLHWskFedXNWLRhr3AkcvLwx3gsKuhb3Z1MGBjWWjJdoUM22wXPaY2EMUZ5u",
  "key13": "4o8tnHnK1LGLpni52C3oe1R6CQNR9qMFG3wHmHdgAMWaQ8EEWqRnZoDBhJ5WvAeVffFmxNdQvXMZ3j1piiph9Gp6",
  "key14": "CN3XvRyqkZrsHNR6RcDoqtPdnwQPcXJEy8AR3wpbYJ7QcewFGqVGxdSnkqGrLMrBWUWtVTyaeJNtfvytXnsATWh",
  "key15": "4s3TkBcnXfkDrE2BmBxeU6Xwuzp4QrQ9LaaXEMwdbjFhP1U6NJyz3jc3u3bFGe6bXT2YCZp4AGeShRvSGPx1eSae",
  "key16": "39qZDV4UGufvhfVVgPEbfCK7pbLA3cWnvNFAeQxiLoDtVE9XhychgKvJnfwVtUgdFM2rpFixd2HmqLgFcmEgC41h",
  "key17": "5bd58ncogm2mMnFptdVT84XkYnPYo7a4E7CPRq2uRoeyD3iMbedtsnQ5Gn7To8vUYfZdmEtSDCjzoAYwCmvrLJJV",
  "key18": "EiaTyvCNthmEnWckPcrJdbLGXCzMvdCqSfMQRkZun17c9w3L12PRfvjpyWMFf4Zd5k8ckbm5KcyZZ5XCu1sxAc9",
  "key19": "62TnSKWvBX6GfYjAL3aHoq8v3aPiVGwALXkyT6PfP5X9VYEZG4wXiNvYT5br6f2dK2jioH7s5bLfADDERefbJQGR",
  "key20": "3ATxK5FWveznMM4e3K5QRigQSdav4gyJh93myPKsptiwnfRPPhS5MVBNkHXXdR8TvAqzxRRewrjQ9mnYEorZwjqr",
  "key21": "5dCqek36vZBomRM3JLziLASv2sapXdNhpxLfwNLNbRxLnbBdWksExRbeNi619ySsfAxyWWjNz8HDvXbGrDSE8Bep",
  "key22": "31HV4Q69p9uPC27dygz7dWjfogo12YnsfpHS6TidcoKZDHpRn14w7YCi7RF5FVhoJ4D9Djru5B2oTrk9mYHRtb3R",
  "key23": "u1NDfLSqCyppHXKMiu3sAifxjHi16Rxay5aBjd9zNNQnEj4WhhGBZdkEizE78uNVvzAHmwEFW3uUovBpwhfBmRq",
  "key24": "3yngj7c1VcKiQ8FgVC9ckfPUHTd6RmaB9CFAqdKc9M6xVbTwswF5EfyqBzGkzGtdBqnTiaoxa1pmcPUzez94j4dZ"
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
