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
    "5uuvMrGigP5YCMKKtWeQWdNCoe16vnCvKkmRWEhYYRWGz8iYgdu7b365f14eaE5uNSx2sedvGqwjYPe2ESmB3AmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWQmYJP12uL1XqExyeEJDNQKQMazTcJ1oFWoWTze2snX6LgUqQu5oDh6b9S78bnC19sBTKH7Y7ePyjJNrRL5V3u",
  "key1": "3dFCx7LgEabkKLbrfD5wVSfZKTV68PgGeVHy6x5pXKKPfr8Q6n7aFWN1NUswNUGFRuiiZ521uueg9gYe8XfufiKh",
  "key2": "3FQC6rzTtxpixPsrMKBKGHY1jk2aaWdhmUUfZmWgh3tUtmGTvbdcbEBQDfshbMsRJcRR4rdUL5Gh5CcAm41mSeRp",
  "key3": "3CYxAvA15kcWDPbXyvRM4c7NrRkBQDJGWSNGjdk7TrpKvAHnSwhPP33i2AVw5KAx6nhSCHfM1ATJwXgzxP2UYAvH",
  "key4": "5aBXtYUqv6gHXeTANdTkqDBuzrftcP6a693sNDrdmREAde8Yms5fpa4EPPtdWvSzJFLmTt3hNe4vu14M1XESKXv9",
  "key5": "UkC7V8CCG9drkdMw3q5tCborkUtWou3sR3TdKJq7dpCCPANCpxDwma1HjHKvzXjQokMvRJ8vVdTqSPjujyirNMZ",
  "key6": "qim4rwsppDWTiRs6nhYNwT6roWAjxqq8Zk7DDgUt7m6Z5QSUv4MWtiaNAaC7LmRSFyhpnbA7dEfXrhfodvmcwDc",
  "key7": "2wPUGhpKYT9nzEQ67U8CTbwgLAx4D3FC2Abur5GmtE6vXoE8KzfzcKyMh1tUcghkVnrnjVPC25tXcGi2cCpkyXi3",
  "key8": "4wPq5g9CmXRZjREKK8YCbSmyARuEnfhLVxRxY9vJGgwSk1QWDw9bt9csa64bH8YL2eSEkxSCdficUzucmge4URus",
  "key9": "5kS4qxTYmK2BC1feSL6gRQyoNtnMW99FT928QciFxS5Rmf9GKmr2k9ErH46M5Ht4Tscbjmo28UssPVRUgvyzZRPs",
  "key10": "dbkz4gEVy2j2xiXmMUaJRPcUX22uQFjxE7Mt2BrhhD5EdG2eWDtiC6PoAyCRjU9CnX8jqkYqxUZTJKGAPx8A5bs",
  "key11": "YKSb6QWHXoTQrZVFA45GNTUmFZH5YouUnDtYqXzbjZKFJo76Z9kDzgvv2yWGB2dDSwDgZ1SoYTCsszoo5V2kdAm",
  "key12": "38zzPfwDg7VneexCsyQeL3XJVmEDTjRKGrnsz9vXctsdknKtX3HACF833GsutwX3fxTq5uRN6omRooovKx3yFTEU",
  "key13": "38YQQNB33QPZL5oQ3a2VnStdCZwC6GcSSo6RdBYc3oXXyNmG5Vfux2g7tJkRhx7BJm2MPz1UT3w7gsyMsPAzjzsi",
  "key14": "22nWxh4CuhFUtWTGnUDniuEsdrNoEF924aTESFvkpyNdsMdSHvXBepePVV5fQ64yMwSM3Y4pmtFYtUQ2no4zeW6d",
  "key15": "2dU4zrsLsjZqCnSmjrng9gBWin8rCcmSa63EEezeGCxkvpWvRtJePjtPeLUqXp2PbTVgiuBW6CEHWH4UPadhLN5S",
  "key16": "4pukvPiRb5aoZXrky2mnin8sA2fR1TZ5XRxvYPW19uHQ57dkfLfWMGJsZzKZ6cByGwcCihrSgRYM3U1Gj9B9A26v",
  "key17": "6x3CfDedePPK2iqJ27JbLB1n5X71JXU6Dmth8Fvykmmvb7AAxzAFafoMF189i8QkkoKwM2qpjBACMjKLeGYyPMW",
  "key18": "5JF1YyRw5bPRGyhMfizcad8i4qBA3vhBUUS2H4rqGAjw2fz9VPXUb4SUENk4JFf7Qo1VUtDuQAJe6f6aDfM8yUXw",
  "key19": "3pm5PPbiuSEM2FKBdvM85qP6xodmxuNKEQ6BkqhrFXsTZ4ZGmHUFZjcheHp4RHD86oqnSmb9EaRrdheTYRaYmFbn",
  "key20": "5EgnryxZeCdSKzJa7BRN1btyRJKiyNJ5jgLMhw8kAYu99yzEm3wB88GLjb972Z667tDCod7NW4ZpRtZmfDsYvP2n",
  "key21": "5o1F9nAp2U934En3kWHEuN6dwZSB9M3LaiftavCJ8Qgob1zHhikyL6N3n8ceccJqggMufTvvrbCHusb1d7KEkLgd",
  "key22": "4HDenNZK6u2bzdu3Sq7sRcEXi4649mEcr8241x4yxo6WsKUX6kj6YAQA7B37mq6Wbxrj3cwFMG78EjjJuFZ2vZ6S",
  "key23": "4Mp3U7qAy1sj9up87DA869fxgzUMkyzGJVNRPRCrX63VsC76sDpMtqxwzfS4EZDqMNt6rDYTyKnTeAX2DAc3D32M",
  "key24": "2Cq9sxD6dej3ToUZ32RbHJJgCY1UEDtnjv4eV21QNiynndZxYELiitzLojLQmPMSr3c7Bu6dGpsRZYR6faPWn74D",
  "key25": "HHYtGMvMtCsmLzhpSGv5f18e6soVNXp8NGq2PzracCQnaqwvYHB8qF1bBQxcPCx4eewuWAFXEV4sKBee2xuyRjC"
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
