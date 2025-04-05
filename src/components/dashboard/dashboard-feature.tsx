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
    "4exRMbjMde7i2pe9LJnAkDZwxQRFEp9oc4GJoh749zo8mKsdeVu9fYoidnKmaQobjJyC5YfWoRZsLoTBWhbpF8rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JCzVAhhudiEPszo8KRy8zEe2BTEVUw5xFAegrfUTxWmvUm5yYzfbUtu8DW7sh92zSc3vqw2dFrLnssKj4XUVQR",
  "key1": "5hxF1LtknGgX1JAigFL5vW3g6d8MrJbZdFE659ij68qoorL1Bzr4uRHemiBQREWynBARwX8SYPXTT9MMwXJAZirb",
  "key2": "2tvgp1XvZ3XVLxKtevLUnM8PLaMYCC3oCqwBUhztZ4Cugn4dueu89tPU7sqNLyMoHYgTiu85pTq1HxVHLcao76pe",
  "key3": "4T5Y4VZGKGDMj95onD8oz2tGDLdY29ajhrpXQfUeKGELLynDkoNMwPxocNK5VyRU6mC3Nssjp1pkNvNu9uW3HN85",
  "key4": "3PdozhYjJbBzPAst3bwPeYZH5v5UP95BtRmKBcyeHicRKrELDqHXHrCTLiNtPpFgQJoKFKQg6UTsmYQzvnUW3MmX",
  "key5": "5XDubQeDGCpAYvc34sgnPpNUgoFz187Lt5ZydcrxsizkcQoGgTHko9iEc1AfarVTQimjpbHUFScfmBvtCvKZFm5R",
  "key6": "2L9wZndJs37XLmDY4x3psz6JW4dux2YnTcuwQCHynEzuWfFen1Gm5BC1mUUkksX7CCAMC6oY1wWyQRFxdYqCMaHX",
  "key7": "oJZaBx4eXnXgyN3g1SjM624N91yCAJYHCFCuyCaFnX1Djh6ZYCMHMFySb8KoXmNZfqw1JvADmWPd7mHAxEDHpUo",
  "key8": "4dT7GKVcavEY3xomEYqdv1VfvgdNqka5m3hFzTxa2qykYLXXmVeFhMsxrid8yeAjmVsvtpvGGTUMxuevsUs1CiTQ",
  "key9": "3q3b1KD8NvMnj7nCCB3bhg4xvvW32rfzdY9FWdiUdPm4vqVPBo4msf4Zp9ysFQngqxxZg4WyQNtaEoZJN5PMBHfH",
  "key10": "5m7Vhem8DoQ5L8CxbDBwQiPADMtoU4BhTsx1CwPRUAPrcEcTiUoK68pCX7yog5XguzgMQ4peeWGpcKpkSwzG8kRt",
  "key11": "5pqpWVm7BzZt2puuQhP3d9mW66vV16hS56CJdi5j3LfZachAHMKB6xZQKMarqzepxzjhqgq1f7C6uZCMQsfnS9ow",
  "key12": "4TH9bnhfWggpSCKY54Jeq89abhKxWqHwxcoysJHLyJos9EaMnhXy7M1ciiMhoBDYpDtbxzaYRSUnpvZauJAkJy6Q",
  "key13": "2ayHJwK2UMUhVXNK6bTLck3PEU6uT94VqgNthsGD4DvnkQM1tLtBWerBDJyuNn6kfhzAQhKuemDx2JkasyiVSUH8",
  "key14": "4WdBXAvHqo9xpDf7p4LBw4Qk4YUrpcBbhE3527dgrr3kak82LTjj2r71Vxmu95YHyjB9FS38bbnybaeAcL7fKFNs",
  "key15": "5nSQNKeromc3TMsKRGwhKba6JfcCCYWCCGFpygYdmd2Dus2zhp1zmSYGMzz9FySXhsX43VEyMFafTckFhksnbUQw",
  "key16": "2j4QJcvvDrhx9yaQQ4UnXRnBtQRYxvDgQjxHbFbv3LrEs1GfaEnvAUxUHEnRzYRYNK3oPo8tVFBA6Ntb8Kgmu7D5",
  "key17": "2J3yw1D6kYA1vJQHPcLMCk5HJJVQCuyZ5oC2NNT8cxZhPcUo5Myq6vokrMvWBz1qGmqbeHmRUGdef5MqDTAKfEX8",
  "key18": "2QmVuKYpx3Ct3byC7H4hCw5m8tGire1ETvPUgNRZs6dMpPw3cKzchfFtvEVvvMBGEgkek6XrGyPTUSvFSTK45CKN",
  "key19": "3HWTbmSVnxJmjhB9vybaR6qHj9YCJcBoqrJbsNdmduPLJsxQixKavx7tabLds751Q9N8mxJX8GKzFbmtbXtHyaE9",
  "key20": "4TJF2kA53cPBatMBGuRoKqrjodSATnCspidxj3QtQWEfz8CcxHp9jLmWHmVdNhWiZARxHBF5RnaaSHpYH76dfPTs",
  "key21": "4v9THWrJkNEMQFuJhXhUR9QzWDHKGi5WgrjisbYHZDixfQu4jjbMPTGUrbyFPkkJ9YgEmD7z7xcxekAAkWTEPsHa",
  "key22": "5AVbecf8qDZsNtrNcJnGjJScgwxziwW7FwHihRd7bupasEnH3Zoroy7G1QnSg6MW5ZBLGbhfmvJsMsp6euTrqnH7",
  "key23": "4n6skKmpC2iv5MiwLsmnN4EYSJQaka7CTCedJsGgLrcsnsFWmcKSqWbnaR1ZC1rzcaeHXQvL1JEHjFJzdE1LcmJU",
  "key24": "44m3vQJwhrotaQ4f6sok1QkjebWQPNxpNTn54SCK3H296mYWbM8Jf3Jq8UtUpb4C3gSVcZjmBGCL3fo6Q4JiZfeM"
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
